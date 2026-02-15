;;; worker.lisp ---

;; Copyright (C) 2018 David Vazquez

;; JSCL is free software: you can redistribute it and/or
;; modify it under the terms of the GNU General Public License as
;; published by the Free Software Foundation, either version 3 of the
;; License, or (at your option) any later version.
;;
;; JSCL is distributed in the hope that it will be useful, but
;; WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
;; General Public License for more details.
;;
;; You should have received a copy of the GNU General Public License
;; along with JSCL.  If not, see <http://www.gnu.org/licenses/>.

(defpackage :jscl/worker-repl (:use :cl :jscl/ffi))
(in-package :jscl/worker-repl)

(defvar *web-worker-session-id*)


(defun %web-worker-write-string (string &optional (style "jqconsole-output") html)
  (let ((obj (object)))
    (setf (oget obj "command") #j"output")
    (setf (oget obj "stringclass") (jsstring style))
    (setf (oget obj "string") (jsstring string))
    (when html
      (setf (oget obj "html") #j:true))
    (#j:postMessage obj)))


(defun web-worker-repl ()
  (loop
    (%web-worker-write-string (jscl::get-repl-prompt)
                              "jqconsole-prompt")
    (jscl::with-toplevel-eval ()
      (jscl::eval-interactive (read)))))


(defun sw-request-sync (command &optional (options (object)))
  (loop
    (let ((xhr (new #j:XMLHttpRequest))
          (payload (object)))

      (setf (oget payload "command") (jsstring command))
      (setf (oget payload "sessionId") *web-worker-session-id*)
      (setf (oget payload "options") options)

      ((oget xhr "open") #j"POST" #j"__jscl" #j:false)
      ((oget xhr "setRequestHeader") #j"ContentType" #j"application/json")
      ((oget xhr "send") (#j:JSON:stringify payload))

      (if (eql (oget xhr "status") 200)
          (let* ((text (oget xhr "responseText"))
                 (json (#j:JSON:parse text)))
            (if (and (in "timeout" json) (oget json "timeout"))
                (setq command "wait")
                (return (oget json "value"))))
          (error "Could not contact with the service worker.")))))


(defun sleep (seconds)
  (let ((options (object)))
    (setf (oget options "seconds") seconds)
    (sw-request-sync "sleep" options)
    nil))


(defvar *stdin-buffer* "")

(defun read-stdin ()
  (let ((input (clstring (sw-request-sync "readStdin"))))
    (setf *stdin-buffer* (concatenate 'string *stdin-buffer* input))
    *stdin-buffer*))

(defun clear-buffer ()
  (setf *stdin-buffer* ""))

(defun %peek-char-stdin (&rest args)
  (if (< 0 (length *stdin-buffer*))
      (char *stdin-buffer* 0)
      (progn
        (read-stdin)
        (apply #'%peek-char-stdin args))))

(defun %read-char-stdin (&rest args)
  (prog1 (apply #'%peek-char-stdin args)
    (setf *stdin-buffer* (subseq *stdin-buffer* 1))))

(defun write-welcome-message ()
  "Render the welcome message as HTML via the web worker output."
  (dolist (item (jscl::welcome-message-items))
    (ecase (first item)
      (:str     (%web-worker-write-string (second item)))
      (:bold    (%web-worker-write-string
                 (format nil "<strong>~a</strong>" (second item))
                 "jqconsole-output" t))
      (:link    (%web-worker-write-string
                 (format nil "<a href=\"~a\" target=\"_blank\">~a</a>"
                         (third item) (second item))
                 "jqconsole-output" t))
      (:newline (%web-worker-write-string (string #\newline))))))

(defun initialize-web-worker ()
  (setq *standard-output*
        (jscl::make-stream :write-fn #'%web-worker-write-string)
        *error-output*
        (jscl::make-stream
         :write-fn (lambda (string)
                     (%web-worker-write-string string "jqconsole-error")))
        *trace-output* *standard-output*)

  (setq *standard-input*
        (jscl::make-stream
         :read-char-fn #'%read-char-stdin
         :peek-char-fn #'%peek-char-stdin))

  (setq *package* (find-package "CL-USER"))

  (write-welcome-message)

  (setf #j:onmessage
        (lambda (event)
          (let* ((data (oget event "data"))
                 (command (clstring (oget data "command")))
                 (sessionId (oget data "sessionId")))
            (when (string= command "init")
              (setf *web-worker-session-id* sessionId)
              (web-worker-repl))))))

(initialize-web-worker)
