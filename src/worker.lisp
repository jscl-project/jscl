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
       (string= (%js-typeof |module|) "undefined")))

(defvar *web-worker-output-class* "jqconsole-output")

(defun %web-worker-write-string (string)
  (let ((obj (new)))
    (setf (oget obj "command") "output")
    (setf (oget obj "stringclass") *web-worker-output-class*)
    (setf (oget obj "string") string)
    (#j:postMessage obj)))


(defun web-worker-repl ()
  (let ((*web-worker-output-class* "jqconsole-prompt"))
    (format t "~a> " (package-name *package*))))


(defun initialize-web-worker ()
  (setq *standard-output*
        (make-stream :write-fn #'%web-worker-write-string))
  (welcome-message)
  (web-worker-repl))
