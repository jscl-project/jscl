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

(/debug "loading worker.lisp!")

(defun web-worker-p ()
  (and (string= (%js-typeof |document|) "undefined")
       (string= (%js-typeof |module|)   "undefined")
       (not (find :deno *features*))))

(defvar *web-worker-session-id*)

(defvar *web-worker-output-class* "jqconsole-output")


(defun %web-worker-write-string (string)
  (let ((obj (new)))
    (setf (oget obj "command") "output")
    (setf (oget obj "stringclass") *web-worker-output-class*)
    (setf (oget obj "string") string)
    (#j:postMessage obj)))


(defun web-worker-repl ()
  (loop
     (let ((*web-worker-output-class* "jqconsole-prompt"))
       (format t "~a> " (package-name *package*)))
     (%js-try
      (progn
        (handler-case
            (let ((results (multiple-value-list
                            (eval-interactive (read)))))
              (dolist (result results)
                (print result)))
          (error (err)
            (let ((*web-worker-output-class* "jqconsole-error"))
              (clear-buffer)
              (format t "ERROR: ")
              (apply #'format t (!condition-args err))
              (terpri)))))
      (catch (err)
        (let (((*web-worker-output-class* "jqconsole-error"))
              (message (or (oget err "message") err)))
          (clear-buffer)
          (format t "ERROR[!]: ~a~%" message))))))


(defun sw-request-sync (command &optional (options (new)))
  (let ((xhr (make-new #j:XMLHttpRequest))
        (payload (new)))

    (setf (oget payload "command") command)
    (setf (oget payload "sessionId") *web-worker-session-id*)
    (setf (oget payload "options") options)

    ((oget xhr "open") "POST" "__jscl" nil)
    ((oget xhr "setRequestHeader") "ContentType" "application/json")
    ((oget xhr "send") (#j:JSON:stringify payload))

    (if (eql (oget xhr "status") 200)
        (let* ((text (oget xhr "responseText"))
               (json (#j:JSON:parse text)))
          (oget json "value")) 
        (error "Could not contact with the service worker."))))


(defun sleep (seconds)
  (let ((options (new)))
    (setf (oget options "seconds") seconds)
    (sw-request-sync "sleep" options)))


(defvar *stdin-buffer* "")

(defun read-stdin ()
  (let ((input (sw-request-sync "readStdin")))
    (setf *stdin-buffer* (concat *stdin-buffer* input))
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

(defun initialize-web-worker ()
  (setq *standard-output*
        (make-stream :write-fn #'%web-worker-write-string))

  (setq *standard-input*
        (make-stream
         :read-char-fn #'%read-char-stdin
         :peek-char-fn #'%peek-char-stdin))

  (welcome-message)

  (setf #j:onmessage
        (lambda (event)
          (let* ((data (oget event "data"))
                 (command (oget data "command"))
                 (sessionId (oget data "sessionId")))
            (when (string= command "init")
              (setf *web-worker-session-id* sessionId)
              (web-worker-repl))))))
