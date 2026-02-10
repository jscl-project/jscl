;;; -*- mode:lisp;  coding:utf-8 -*-

;;;
;;; LOAD - Load Common Lisp file.
;;;        Simple implementation of the common Lisp function 'load'
;;;        for JSCL environment.

;;;
;;; JSCL is free software: you can redistribute it and/or
;;; modify it under the terms of the GNU General Public License as
;;; published by the Free Software Foundation, either version 3 of the
;;; License, or (at your option) any later version.
;;;
;;; JSCL is distributed in the hope that it will be useful, but
;;; WITHOUT ANY WARRANTY; without even the implied warranty of
;;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
;;; General Public License for more details.
;;;
;;; You should have received a copy of the GNU General Public License
;;; along with JSCL.  If not, see <http://www.gnu.org/licenses/>.


;;; (load name &key verbose sync)
;;;
;;; sync   -  use node.js 'fs' facilities for synchronous read/write ops
;;          if value is :maybe, use 'fs' if available, and async XHR otherwise
;;;

(defvar *load-verbose* t)
(defvar *load-print* nil)

(defun load (name &key (verbose *load-verbose*) (print *load-print*) (sync :maybe))
  (let ((ext (filename-extension name)))
    ;; Try to guess extension
    (unless ext
      (dolist (ext-guess '(".js" ".lisp" ".jso" ".lsp" ".cjs")
                         (error "Cannot guess extension for ~a" name))
        (when (probe-file (concat name ext-guess))
          (setq name (concat name ext-guess)
                ext ext-guess)
          (return))))
    (cond
      ((member ext '("lisp" "lsp") :test #'string=)
       (let ((*package* *package*))

         (when verbose (format t "; Loading ~a~%" name))

         (with-open-file (stream name :direction :input :sync sync)
           (let ((eof (gensym "LOAD")))
             (loop
               (let ((form (read stream nil eof)))
                 (when (eq form eof) (return))

                 (when print (format t "; ~S~%" form))

                 (eval form))))))
       t)

      ((member ext '("js" "cjs" "jso") :test #'string=)
       (let ((*package* *package*))
         (if (find :node *features*)
             (require (concat (clstring (#j:process:cwd)) "/" name))
             (load-js name)))
       t)

      (t (error "Don't know how to LOAD ~a: ~a" ext name)))))

;;; other loader functions
;;;
;;; Warning:
;;;        The both functions only for rapidly development
;;;        Not for production

;;;
;;; load-js - load javascript code from local file system (by FILE:),
;;;           or remote resource (by HTTP:) with used html tag 'link/stylesheet'
(defun load-js (from &optional onload)
  (let ((link (#j:window:document:createElement #j"script"))
        (body #j:window:document:body ))
    (setf (oget link "charset") #j"utf-8"
          (oget link "type") #j"text/javascript"
          (oget link "src") (jsstring from)
          (oget link "onerror") (lambda (ignore)
                                  (format t "~%Error loading ~s file.~%" from)
                                  (funcall ((oget body "removeChild" "bind") body link ))
                                  (values)))
    (when onload
      (setf (oget link "onload") (lambda (ignore)
                                   (funcall ((oget body "removeChild" "bind") body link ))
                                   (funcall onload)
                                   (values))))
    (funcall ((oget body "appendChild" "bind" ) body link))
    (unless onload
      (funcall ((oget body "removeChild" "bind") body link )))
    (values) ))


;;;
;;; load-css - load cascade style from local file system (by FILE:),
;;;           or remote resource (by HTTP:) with used html tag 'link/stylesheet'
(defun load-css (from &optional onload)
  (let ((link (#j:window:document:createElement #j"link"))
        (body #j:window:document:body ))
    (setf (oget link "rel") #j"stylesheet"
          (oget link "type") #j"text/css"
          (oget link "href") (jsstring from)
          (oget link "onerror") (lambda (ignore)
                                  (format t "~%Error loading ~s file.~%" from)
                                  (funcall ((oget body "removeChild" "bind") body link ))
                                  (values)))
    (when onload
      (setf (oget link "onload")
            (lambda (ignore) (funcall onload from))))
    (funcall ((oget body "appendChild" "bind" ) body link))
    (values) ))


;;; EOF
