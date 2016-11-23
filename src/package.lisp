;;;; package.lisp --- Package operations

;; JSCL is free software: you can redistribute it and/or modify it under
;; the terms of the GNU General  Public License as published by the Free
;; Software Foundation,  either version  3 of the  License, or  (at your
;; option) any later version.
;;
;; JSCL is distributed  in the hope that it will  be useful, but WITHOUT
;; ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
;; FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
;; for more details.
;;
;; You should  have received a  copy of  the GNU General  Public License
;; along with JSCL. If not, see <http://www.gnu.org/licenses/>.

(in-package :jscl) #-jscl-xc #.(error "Do not load this file in the host compiler")

(/debug "loading package.lisp!")

(defvar *package-table*
  (%js-vref "packages"))

(defun list-all-packages ()
  (let ((packages nil))
    (map-for-in (lambda (name) (pushnew name packages))
                *package-table*)
    packages))

(defun find-package (package-designator)
  (if (packagep package-designator)
      package-designator
      (jscl/ffi:oget *package-table* (string package-designator))))

(defun delete-package (package-designator)
  ;; TODO:  Signal a  correctable error  in case  the package-designator
  ;; does not name  a package. TODO: Implement  unuse-package and remove
  ;; the deleted package from packages that use it.
  (delete-property (package-name (find-package-or-fail package-designator))
                   *package-table*))

(defun %make-package (name use &optional nicknames)
  (when (find-package name)
    (error "A package namded `~a' already exists." name))
  (let ((package (new)))
    (setf (jscl/ffi:oget package "packageName") name)
    (setf (jscl/ffi:oget package "symbols") (new))
    (setf (jscl/ffi:oget package "exports") (new))
    (setf (jscl/ffi:oget package "use") use)
    (setf (jscl/ffi:oget package "nicknames") nicknames)
    (setf (jscl/ffi:oget *package-table* name) package)
    (dolist (nickname (nicknames))
      (setf (jscl/ffi:oget *package-table* nickname) package))
    package))

(defun resolve-package-list (packages)
  (let (result)
    (dolist (package (mapcar #'find-package-or-fail packages))
      (pushnew package result :test #'eq))
    (reverse result)))

(defun make-package (name &key use)
  (%make-package
   (string name)
   (resolve-package-list use)))

(defun packagep (x)
  (and (objectp x) (in "symbols" x)))

(defun package-name (package-designator)
  (let ((package (find-package-or-fail package-designator)))
    (jscl/ffi:oget package "packageName")))

(defun %package-symbols (package-designator)
  (let ((package (find-package-or-fail package-designator)))
    (jscl/ffi:oget package "symbols")))

(defun package-use-list (package-designator)
  (let ((package (find-package-or-fail package-designator)))
    (jscl/ffi:oget package "use")))

(defun %package-external-symbols (package-designator)
  (let ((package (find-package-or-fail package-designator)))
    (jscl/ffi:oget package "exports")))

(defvar *user-package*
  (make-package "CL-USER" :use (list (find-package "CL"))))

(defvar *keyword-package*
  (find-package "KEYWORD"))


(defun keywordp (x)
  (and (symbolp x) (eq (symbol-package x) *keyword-package*)))

(defvar *package* (find-package "CL-USER"))

(defmacro in-package (string-designator)
  `(eval-when (:compile-toplevel :load-toplevel :execute)
     (setq *package* (find-package-or-fail ',string-designator))))

(eval-when (:compile-toplevel :execute)
  (defmacro pushcdr (list place)
    (let ((place0 (gensym (princ-to-string place))))
      `(let ((,place0 ,place))
         (setf ,place0 (cons ,place0 ,list)))))
  (defun defpackage/parse-options (options)
    (let (use exports nicknames)
      (dolist (option options)
        (ecase (car option)
          (:use
           (pushcdr (cdr option) use))
          (:export
           (pushcdr (cdr option) exports))
          (:nicknames
           (pushcdr (cdr option) nicknames))
          (:documentation
           (warn "Ignoring package documentation (FIXME)"))))
      (list use exports nicknames))))

(defmacro defpackage (package &rest options)
  (destructuring-bind (use exports nicknames)
      (defpackage/parse-options options)
    `(progn
       (eval-when (:load-toplevel :execute)
         (%defpackage ',(string package) ',use ',nicknames)
         ,@(mapcar (lambda (symbol)
                     `(export (intern ,(string symbol) (find-package ,(string package)))))
                   exports))
       (eval-when (:compile-toplevel)
         (make-package ',(string package) :use ',use))
       ,@(mapcar (lambda (symbol)
                   (export (intern (symbol-name symbol) package)))
                 exports))))


(defun redefine-package (package use &optional nicknames)
  (setf (jscl/ffi:oget package "use")
        (remove-duplicates (append (jscl/ffi:oget package "use") use)
                           :test #'equal))
  (setf (jscl/ffi:oget package "nicknames")
        (remove-duplicates (append (jscl/ffi:oget package "nicknames") nicknames)
                           :test #'equal))
  (dolist (nickname (nicknames))
    (setf (jscl/ffi:oget *package-table* nickname) package))
  package)

(defun %defpackage (name use nicknames)
  (let ((package (find-package name))
        (use (resolve-package-list use)))
    (if package
        (redefine-package package use)
        (make-package name :use use :nicknames nicknames))))

(defun find-symbol (name &optional (package *package*))
  (let* ((package (find-package-or-fail package))
         (externals (%package-external-symbols package))
         (symbols (%package-symbols package)))
    (cond
      ((in name externals)
       (values (jscl/ffi:oget externals name) :external))
      ((in name symbols)
       (values (jscl/ffi:oget symbols name) :internal))
      (t
       (dolist (used (package-use-list package) (values nil nil))
         (let ((exports (%package-external-symbols used)))
           (when (in name exports)
             (return (values (jscl/ffi:oget exports name) :inherited)))))))))

(defvar *intern-hook* nil
  "It is a function to call when  a symbol is interned. The function is
invoked with the already-interned symbol as argument.")

(defun intern (name &optional (package *package*))
  (let ((package (find-package-or-fail package)))
    (multiple-value-bind (symbol foundp)
        (find-symbol name package)
      (if foundp
          (values symbol foundp)
          (let ((symbols (%package-symbols package)))
            (jscl/ffi:oget symbols name)
            (let ((symbol (make-symbol name)))
              (setf (jscl/ffi:oget symbol "package") package)
              (when (eq package *keyword-package*)
                (setf (jscl/ffi:oget symbol "value") symbol)
                (export (list symbol) package))
              (when *intern-hook*
                (funcall *intern-hook* symbol))
              (setf (jscl/ffi:oget symbols name) symbol)
              (values symbol nil)))))))

(defun symbol-package (symbol)
  (unless (symbolp symbol)
    (error "`~S' is not a symbol." symbol))
  (jscl/ffi:oget symbol "package"))

(defun export (symbols &optional (package *package*))
  (let ((exports (%package-external-symbols package)))
    (dolist (symb symbols t)
      (setf (jscl/ffi:oget exports (symbol-name symb)) symb))))

(defun %map-external-symbols (function package)
  (map-for-in function (%package-external-symbols package)))

(defun %map-symbols (function package)
  (map-for-in function (%package-symbols package))
  (dolist (used (package-use-list package))
    (%map-external-symbols function used)))

(defun %map-all-symbols (function)
  (map-for-in (lambda (package)
                (map-for-in function (%package-symbols package)))
              *package-table*))

(defun %map-all-external-symbols (function)
  (map-for-in (lambda (package)
                (map-for-in function (%package-external-symbols package)))
              *package-table*))

(defmacro do-symbols ((var &optional (package '*package*) result-form)
                      &body body)
  `(block nil
     (%map-symbols
      (lambda (,var) ,@body)
      (find-package ,package))
     ,result-form))

(defmacro do-external-symbols ((var &optional (package '*package*)
                                    result-form)
                               &body body)
  `(block nil
     (%map-external-symbols
      (lambda (,var) ,@body)
      (find-package ,package))
     ,result-form))

(defmacro do-all-symbols ((var &optional result-form) &body body)
  `(block nil (%map-all-symbols (lambda (,var) ,@body)) ,result-form))

(defmacro do-all-external-symbols ((var &optional result-form) &body body)
  `(block nil (%map-all-external-symbols (lambda (,var) ,@body)) ,result-form))

(defun find-all-symbols (string &optional external-only)
  (let (symbols)
    (map-for-in (lambda (package)
                  (multiple-value-bind (symbol status) (find-symbol string package)
                    (when (if external-only (eq status :external) status)
                      (pushnew symbol symbols :test #'eq))))
                *package-table*)
    symbols))
