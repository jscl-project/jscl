;;; -*- mode:lisp; coding:utf-8 -*-

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

(defun %write-string (string &optional (escape t) (style "jqconsole-output"))
    (if #j:jqconsole
        (if escape
            (#j:jqconsole:Write string style)
            (#j:jqconsole:Write string style ""))
        (#j:console:log string)))

(defun load-history ()
  (let ((raw (#j:localStorage:getItem "jqhist")))
    (unless (js-null-p raw)
      (#j:jqconsole:SetHistory (#j:JSON:parse raw)))))

(defun save-history ()
  (#j:localStorage:setItem "jqhist" (#j:JSON:stringify (#j:jqconsole:GetHistory))))


;;; decode error.msg object from (js-try)
(defun %map-js-object (job)
  (mapcar (lambda (k) (list k (oget job k)))
          (mapcar (lambda (x) (js-to-lisp x))
                  (vector-to-list (#j:Object:keys job)))))

(defparameter +err-css+ "jqconsole-error")

(defun toplevel ()
  (#j:jqconsole:RegisterMatching "(" ")" "parents")
  (let ((prompt (format nil "~a> " (package-name-for-prompt *package*))))
    (#j:jqconsole:Write prompt "jqconsole-prompt"))
  (flet ((process-input (input)
           (%js-try
            ;; Capture unhandled Lisp conditions.
            (block bail-out
              (handler-bind
                  ((serious-condition
                     (lambda (c)
                       (format *error-output* "~A: ~A~%" (class-name (class-of c)) c)
                       (format-backtrace *trace-output* :from #'signal)
                       (return-from bail-out))))
                (dolist (x (multiple-value-list (eval-interactive-input input)))
                  ;; ensure jqconsole is on fresh line
                  (unless (zerop (#j:jqconsole:GetColumn))
                    (#j:jqconsole:Write #\newline "jqconsole-return"))
                  (#j:jqconsole:Write (format nil "~S~%" x) "jqconsole-return"))))
            (catch (js-err)
              (#j:console:log js-err)
              (let ((message (or (oget js-err "message") (%map-js-object js-err) js-err)))
                (format *error-output* "ERROR[!]: ~a~%~A~%" message (oget err "stack")))))
           (save-history)
           (toplevel)))
    (#j:jqconsole:Prompt t #'process-input #'%sexpr-incomplete)))

(defun web-init ()
  (load-history)
  (setq *standard-output*
        (make-stream
         :write-fn (lambda (string) (%write-string string))
         :kind 'web-repl-output-stream)
        *error-output*
        (make-stream
         :write-fn (lambda (string) (%write-string string t +err-css+))
         :kind 'web-repl-error-stream)
        *trace-output* *standard-output*)
  (welcome-message :html t)
  (#j:window:addEventListener "load" (lambda (&rest args) (toplevel))))

(web-init)

;;; EOF
