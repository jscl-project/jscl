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

(defvar *repl*)

(defun start-repl ()
  (welcome-message)
  (labels ((get-prompt ()
             (concat (package-name-for-prompt *package*) "> "))
           (repl-eval (input context resource-name cb)
             ;; Replace #\return with #\newline
             (setq input (nsubstitute (code-char 10) (code-char 13) input))
             (if (%sexpr-incomplete input)
                 (funcall cb (make-new #j:repl:Recoverable))
                 (progn
                   (%js-try
                    (block bail-out
                      (handler-bind
                          ((serious-condition
                             (lambda (c)
                               (format *error-output* "~A: ~A~%" (class-name (class-of c)) c)
                               (format-backtrace *error-output* :from #'signal)
                               (return-from bail-out))))
                        (dolist (result (multiple-value-list (eval-interactive-input input)))
                          (fresh-line)
                          (prin1 result)
                          (terpri))))
                    (catch (err)
                      (let ((message (or (oget err "message") err)))
                        (format *error-output* "ERROR[!]: ~a~%~A~%" message (oget err "stack")))))
                   ;; Update prompt
                   ((oget *repl* "setPrompt") (get-prompt))
                   (funcall cb nil)))))
    (setq *repl* (#j:repl:start (new "input" #j:process:stdin "output" #j:process:stdout
                                     "eval" #'repl-eval "writer" (constantly "")
                                     "prompt" (get-prompt))))))

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
