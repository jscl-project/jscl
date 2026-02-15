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

(defpackage :jscl/deno-repl (:use :cl :jscl/ffi))
(in-package :jscl/deno-repl)

(defvar *rl*)

(defun start-repl ()
  (jscl::welcome-message)
  (setq *rl* (#j:readline:createInterface #j:process:stdin #j:process:stdout))
  (let ((input-buffer (make-string-output-stream))
        (linecont-prompt nil))
    (flet ((set-prompt ()
             (let ((prompt (jscl::get-repl-prompt)))
               ((oget *rl* "setPrompt") (jsstring prompt))
               (setq linecont-prompt
                     (concatenate 'string (make-string (1- (length prompt)) :initial-element #\.) " ")))))
      (set-prompt)
      ((oget *rl* "prompt"))
      ((oget *rl* "on") #j"line"
       (lambda (line)
         (write-line (clstring line) input-buffer)
         (let ((input (jscl::stream-data input-buffer)))
           (if (jscl::%sexpr-incomplete input)
               ((oget *rl* "setPrompt") (jsstring linecont-prompt))
               (progn
                 (jscl::with-toplevel-eval ()
                   (jscl::eval-interactive-input input))
                 (setf (fill-pointer (jscl::stream-data input-buffer)) 0)
                 ;; Update prompt
                 (set-prompt))))
         ;; Continue
         ((oget *rl* "prompt")))))))

(defun deno-init ()
  (setq *standard-output*
        (jscl::make-stream
         :write-fn (lambda (string)
                     (#j:process:stdout:write (jsstring string))))
        *error-output* *standard-output*
        *trace-output* *standard-output*
        *package* (find-package "CL-USER"))
  (let ((args (mapcar #'clstring (jscl::vector-to-list (subseq #j:process:argv 2)))))
    (cond
      ((null args)
       (start-repl))
      (t
       (dolist (file args)
         (load file))))))


(deno-init)
