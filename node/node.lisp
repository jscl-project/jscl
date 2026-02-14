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

(defpackage :jscl/node-repl (:use :cl))
(in-package :jscl/node-repl)

(defun require (name)
  "Load a Node.js module by NAME."
  (funcall (jscl-xc::%js-vref "require") (jscl-xc::jsstring name)))

;; TODO: Remove these global variables. Code should use (require "fs") directly.
(setf #j:Fs (require "fs"))
(setf #j:FsPath (require "path"))

(defvar *repl*)

(defun start-repl ()
  (jscl-xc::welcome-message)
  (labels ((repl-eval (input context resource-name cb)
             ;; Replace #\return with #\newline
             (let ((input (jscl-xc::clstring input)))
               (setq input (nsubstitute (code-char 10) (code-char 13) input))
               (if (jscl-xc::%sexpr-incomplete input)
                   (funcall cb (jscl-xc::new #j:repl:Recoverable))
                   (progn
                     (jscl-xc::with-toplevel-eval ()
                       (jscl-xc::eval-interactive-input input))
                     ;; Update prompt
                     ((jscl-xc::oget *repl* "setPrompt") (jscl-xc::jsstring (jscl-xc::get-repl-prompt)))
                     (funcall cb #j:null))))))
    (setq *repl* (#j:repl:start (jscl-xc::object "input" #j:process:stdin "output" #j:process:stdout
                                        "eval" #'repl-eval "writer" (lambda (&rest _) #j"")
                                        "prompt" (jscl-xc::jsstring (jscl-xc::get-repl-prompt)))))))

(defun node-init ()
  (setq *standard-output*
        (jscl-xc::make-stream
         :write-fn (lambda (string)
                     (#j:process:stdout:write (jscl-xc::jsstring string))))
        *error-output* *standard-output*
        *trace-output* *standard-output*
        *package* (find-package "CL-USER"))
  (let ((args (mapcar #'jscl-xc::clstring (jscl-xc::vector-to-list (subseq #j:process:argv 2)))))
    (cond
      ((null args)
       (start-repl))
      (t
       (dolist (file args)
         (load file))))))

(node-init)
