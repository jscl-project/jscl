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

(defpackage :jscl/web-repl (:use :cl :jscl/ffi))
(in-package :jscl/web-repl)

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
    (unless (eq raw #j:null)
      (#j:jqconsole:SetHistory (#j:JSON:parse raw)))))

(defun save-history ()
  (#j:localStorage:setItem #j"jqhist" (#j:JSON:stringify (#j:jqconsole:GetHistory))))


(defparameter +err-css+ "jqconsole-error")

(defun toplevel ()
  (#j:jqconsole:RegisterMatching #j"(" #j")" #j"parents")
  (let ((prompt (jsstring (jscl::get-repl-prompt))))
    (#j:jqconsole:Write prompt #j"jqconsole-prompt"))
  (flet ((process-input (input)
           (jscl::with-toplevel-eval ()
             (jscl::eval-interactive-input (clstring input)))
           (save-history)
           (toplevel)))
    (#j:jqconsole:Prompt #j:true #'process-input
     (lambda (input &rest _)
       (let ((result (jscl::%sexpr-incomplete (clstring input))))
         (if result result #j:false))))))

(defun write-welcome-message ()
  "Render the welcome message as HTML via jqconsole."
  (dolist (item (jscl::welcome-message-items))
    (ecase (first item)
      (:str     (%write-string (second item)))
      (:bold    (%write-string (format nil "<strong>~a</strong>" (second item)) nil))
      (:link    (%write-string (format nil "<a href=\"~a\" target=\"_blank\">~a</a>"
                                       (third item) (second item))
                               nil))
      (:newline (%write-string (string #\newline))))))

(defun web-init ()
  (load-history)
  (setq *standard-output*
        (jscl::make-stream
         :write-fn (lambda (string) (%write-string string))
         :kind 'web-repl-output-stream)
        *error-output*
        (jscl::make-stream
         :write-fn (lambda (string) (%write-string string t +err-css+))
         :kind 'web-repl-error-stream)
        *trace-output* *standard-output*
        *package* (find-package "CL-USER"))
  (write-welcome-message)
  (#j:window:addEventListener #j"load" (lambda (&rest args) (toplevel))))

(web-init)

;;; EOF
