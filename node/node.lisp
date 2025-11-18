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
  (let ((*root* *rl*))
    (#j:setPrompt (format nil "~a> " (package-name-for-prompt *package*)))
    (#j:prompt)
    (#j:on "line"
           (lambda (line)
             (%js-try
              (progn
                (handler-case
                    (let ((results (multiple-value-list
                                    (eval-interactive (read-from-string line)))))
                      (dolist (result results)
                        (prin1 result)
                        (terpri)))
                  (error (c)
                    (format t "~A: ~A"
                            (class-name (class-of c)) c)
                    (terpri))))
              (catch (err)
                (let ((message (or (oget err "message") err)))
                  (format t "ERROR[!]: ~a~%" message))))
             ;; Update prompt
             (let ((*root* *rl*))
               (#j:setPrompt (format nil "~a> " (package-name-for-prompt *package*))))
             ;; Continue
             ((oget *rl* "prompt"))))))

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
