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

(/debug "loading repl-node/repl.lisp!")

(defvar *rl*)

(defun start-repl ()
  (welcome-message)
  (setq *rl* (#j:readline:createInterface #j:process:stdin #j:process:stdout))
  (let ((input-buffer (make-string-output-stream))
        (linecont-prompt nil))
    (flet ((set-prompt ()
             (let ((name (package-name-for-prompt *package*)))
               ((oget *rl* "setPrompt") (format nil "~a> " name))
               (setq linecont-prompt
                     (concat (make-string (1+ (length name)) :initial-element #\.) " ")))))
      (set-prompt)
      ((oget *rl* "prompt"))
      ((oget *rl* "on") "line"
       (lambda (line)
         (write-line line input-buffer)
         (let ((input (stream-data input-buffer)))
           (if (%sexpr-incomplete input)
               ((oget *rl* "setPrompt") linecont-prompt)
               (progn
                 (%js-try
                  (handler-case
                      (dolist (result (multiple-value-list (eval-interactive-input input)))
                        (fresh-line)
                        (prin1 result)
                        (terpri))
                    (error (c)
                      (format t "~A: ~A" (class-name (class-of c)) c)
                      (terpri)))
                  (catch (err)
                    (let ((message (or (oget err "message") err)))
                      (format t "ERROR[!]: ~a~%" message))))
                 (setf (fill-pointer (stream-data input-buffer)) 0)
                 ;; Update prompt
                 (set-prompt))))
         ;; Continue
         ((oget *rl* "prompt")))))))

(defun node-init ()
  (setq *standard-output*
        (make-stream
         :write-fn (lambda (string)
                     (#j:process:stdout:write string)))
        *error-output* *standard-output*
        *trace-output* *standard-output*)
  (let ((args (mapcar #'js-to-lisp (vector-to-list (subseq #j:process:argv 2)))))
    (cond
      ((null args)
       (start-repl))
      (t
       (dolist (file args)
         (load file))))))


(node-init)
