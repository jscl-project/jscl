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

(/debug "loading repl-web/repl.lisp!")

(defun %write-string (string &optional (escape t))
  (if #j:jqconsole
      (#j:jqconsole:Write string "jqconsole-output" "" escape)
      (#j:console:log string)))

(defun load-history ()
  (let ((raw (#j:localStorage:getItem "jqhist")))
    (unless (js-null-p raw)
      (#j:jqconsole:SetHistory (#j:JSON:parse raw)))))

(defun save-history ()
  (#j:localStorage:setItem "jqhist" (#j:JSON:stringify (#j:jqconsole:GetHistory))))


;;; Decides wheater the input the user has entered is completed or we
;;; should accept one more line.
(defun %sexpr-complete (string)
    (let ((i 0)
          (stringp nil)
          (comments nil)
          (s (length string))
          (depth 0))
        (while (< i s)
            (cond
              (comments 
               (case (char string i)
                 (#\newline 
                  (setq comments nil))))
              (stringp
               (case (char string i)
                 (#\\
                  (incf i))
                 (#\"
                  (setq stringp nil)
                  (decf depth))))
              (t
               (case (char string i)
                 (#\; 
                  (setq comments t))
                 (#\( (unless comments (incf depth)))
                 (#\) (unless comments (decf depth)))
                 (#\"
                  (incf depth)
                  (setq stringp t)))))
            (incf i))
        (if (<= depth 0)
            nil
            0)))

(defun toplevel ()
  (#j:jqconsole:RegisterMatching "(" ")" "parents")
  (let ((prompt (format nil "~a> " (package-name *package*))))
    (#j:jqconsole:Write prompt "jqconsole-prompt"))
  (flet ((process-input (input)
           ;; Capture unhandled Javascript exceptions. We evaluate the
           ;; form and set successp to T. However, if a non-local exit
           ;; happens, we cancel it, so it is not propagated more.
           (%js-try

            ;; Capture unhandled Lisp conditeions.
            (handler-case
                (when (> (length input) 0)
                  (let* ((form (read-from-string input))
                         (results (multiple-value-list (eval-interactive form))))
                    (dolist (x results)
                      (#j:jqconsole:Write (format nil "~S~%" x) "jqconsole-return"))))
              (error (err)
                (#j:jqconsole:Write "ERROR: " "jqconsole-error")
                (#j:jqconsole:Write (apply #'format nil (!condition-args err)) "jqconsole-error")
                (#j:jqconsole:Write (string #\newline) "jqconsole-error")))
            
            (catch (err)
              (#j:console:log err)
              (let ((message (or (oget err "message") err)))
                (#j:jqconsole:Write (format nil "ERROR[!]: ~a~%" message) "jqconsole-error"))))
           
           (save-history)
           (toplevel)))
    (#j:jqconsole:Prompt t #'process-input #'%sexpr-complete)))


(defun web-init ()
  (load-history)
  (setq *standard-output*
        (make-stream
         :write-fn (lambda (string) (%write-string string))))
  (welcome-message :html t)
  (#j:window:addEventListener "load" (lambda (&rest args) (toplevel))))

(web-init)
