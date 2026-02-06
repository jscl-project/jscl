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
             (let ((input (clstring input)))
               (setq input (nsubstitute (code-char 10) (code-char 13) input))
               (if (%sexpr-incomplete input)
                   (funcall cb (new #j:repl:Recoverable))
                   (progn
                     (with-toplevel-eval ()
                       (eval-interactive-input input))
                     ;; Update prompt
                     ((oget *repl* "setPrompt") (jsstring (get-prompt)))
                     (funcall cb (jsnull)))))))
    (setq *repl* (#j:repl:start (object "input" #j:process:stdin "output" #j:process:stdout
                                        "eval" #'repl-eval "writer" (constantly (jsstring ""))
                                        "prompt" (jsstring (get-prompt)))))))

(defun node-init ()
  (setq *standard-output*
        (make-stream
         :write-fn (lambda (string)
                     (#j:process:stdout:write (jsstring string))))
        *error-output* *standard-output*
        *trace-output* *standard-output*)
  (let ((args (mapcar #'clstring (vector-to-list (subseq #j:process:argv 2)))))
    (cond
      ((null args)
       (start-repl))
      (t
       (dolist (file args)
         (load file))))))


(node-init)
