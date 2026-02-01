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
    (let ((jsstr (jsstring string))
          (jsstyle (jsstring style)))
      (if #j:jqconsole
          (if escape
              (#j:jqconsole:Write jsstr jsstyle)
              (#j:jqconsole:Write jsstr jsstyle #j""))
          (#j:console:log jsstr))))

(defun load-history ()
  (let ((raw (#j:localStorage:getItem #j"jqhist")))
    (unless (js-null-p raw)
      (#j:jqconsole:SetHistory (#j:JSON:parse raw)))))

(defun save-history ()
  (#j:localStorage:setItem #j"jqhist" (#j:JSON:stringify (#j:jqconsole:GetHistory))))


(defparameter +err-css+ "jqconsole-error")

(defun toplevel ()
  (#j:jqconsole:RegisterMatching #j"(" #j")" #j"parents")
  (let ((prompt (jsstring (format nil "~a> " (package-name-for-prompt *package*)))))
    (#j:jqconsole:Write prompt #j"jqconsole-prompt"))
  (flet ((process-input (input)
           (with-toplevel-eval ()
             (eval-interactive-input (clstring input)))
           (save-history)
           (toplevel)))
    (#j:jqconsole:Prompt +true+ (lisp-to-js #'process-input) (lisp-to-js #'%sexpr-incomplete))))

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
  (#j:window:addEventListener #j"load" (lambda (&rest args) (toplevel))))

(web-init)

;;; EOF
