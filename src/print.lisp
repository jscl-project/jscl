;;; print.lisp --- 

;; Copyright (C) 2012, 2013 David Vazquez
;; Copyright (C) 2012 Raimon Grau

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

;;; Printer

(defun prin1-to-string (form)
  (cond
    ((symbolp form)
     (multiple-value-bind (symbol foundp)
         (find-symbol (symbol-name form) *package*)
       (if (and foundp (eq symbol form))
           (symbol-name form)
           (let ((package (symbol-package form))
                 (name (symbol-name form)))
             (concat (cond
                       ((null package) "#")
                       ((eq package (find-package "KEYWORD")) "")
                       (t (package-name package)))
                     ":" name)))))
    ((integerp form) (integer-to-string form))
    ((floatp form) (float-to-string form))
    ((stringp form) (concat "\"" (escape-string form) "\""))
    ((functionp form)
     (let ((name (oget form "fname")))
       (if name
           (concat "#<FUNCTION " name ">")
           (concat "#<FUNCTION>"))))
    ((listp form)
     (concat "("
             (join-trailing (mapcar #'prin1-to-string (butlast form)) " ")
             (let ((last (last form)))
               (if (null (cdr last))
                   (prin1-to-string (car last))
                   (concat (prin1-to-string (car last)) " . " (prin1-to-string (cdr last)))))
             ")"))
    ((arrayp form)
     (concat "#" (if (zerop (length form))
                     "()"
                     (prin1-to-string (vector-to-list form)))))
    ((packagep form)
     (concat "#<PACKAGE " (package-name form) ">"))
    (t
     (concat "#<javascript object>"))))

(defun write-line (x)
  (write-string x)
  (write-string *newline*)
  x)

(defun warn (string)
  (write-string "WARNING: ")
  (write-line string))

(defun print (x)
  (write-line (prin1-to-string x))
  x)
