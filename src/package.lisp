;;; package.lisp ---

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
      (oget *package-table* (string package-designator))))

(defun delete-package (package-designator)
  ;; TODO: Signal a correctlable error in case the package-designator does not
  ;; name a package.
  (let ((package (find-package-or-fail package-designator)))
    (if (find-package (package-name package))
        (progn
          (dolist (p (package-used-by-list package))
            (unuse-package package p))
          (dolist (n (cons (package-name package) (package-nicknames package)) t)
            (delete-property n *package-table*)))
        ;; This is a deleted package
        nil)))

(defun %make-package (name nicknames)
  (dolist (n (cons name nicknames))
    (when (find-package n)
      (error "A package namded `~a' already exists." n)))
  (let ((package (new)))
    (setf (oget package "packageName") name)
    (setf (oget package "symbols") (new))
    (setf (oget package "exports") (new))
    (setf (oget package "nicknames") nicknames)
    package))

(defun %register-package (package)
  (dolist (n (cons (oget package "packageName")
                   (oget package "nicknames")))
    (setf (oget *package-table* n) package)))

(defun resolve-package-list (packages)
  (let (result)
    (dolist (package (mapcar #'find-package-or-fail packages))
      (pushnew package result :test #'eq))
    (reverse result)))

(defun make-package (name &key use nicknames)
  (let ((package (%make-package (string name) (mapcar #'string nicknames))))
    (use-package use package)
    (%register-package package)
    package))

(defun packagep (x)
  (and (objectp x) (not (js-null-p x)) (in "symbols" x)))

(defun package-name (package-designator)
  (let ((package (find-package-or-fail package-designator)))
    (oget package "packageName")))

(defun package-nicknames (package-designator)
  (let ((package (find-package-or-fail package-designator)))
    (oget package "nicknames")))

(defun %package-symbols (package-designator)
  (let ((package (find-package-or-fail package-designator)))
    (oget package "symbols")))

(defun package-use-list (package-designator)
  (let ((package (find-package-or-fail package-designator)))
    (oget package "use")))

(defun package-used-by-list (package-designator)
  (let ((package (find-package-or-fail package-designator)))
    (oget package "usedBy")))

(defun %package-external-symbols (package-designator)
  (let ((package (find-package-or-fail package-designator)))
    (oget package "exports")))

(defvar *keyword-package*
  (find-package "KEYWORD"))

(defun keywordp (x)
  (and (symbolp x) (eq (symbol-package x) *keyword-package*)))

(defvar *package* (find-package "CL"))

(defmacro in-package (string-designator)
  `(eval-when (:compile-toplevel :load-toplevel :execute)
     (setq *package* (find-package-or-fail ',string-designator))))

(defun find-symbol-for-import (name package)
  (let ((name (string name)))
    (multiple-value-bind (symbol status) (find-symbol name package)
      (unless status
        (error "Symbol with name ~A not found in ~A"
               name package-from))
      symbol)))

(defmacro defpackage (name &rest options)
  (let (exports use nicknames doc imports)
    (dolist (option options)
      (ecase (car option)
        (:export
         (setf exports (append exports (cdr option))))
        (:use
         (setf use (append use (cdr option))))
        (:nicknames
         (setf nicknames (append nicknames (cdr option))))
        (:documentation
         (if doc
             (error "More than one :DOCUMENTATION is not allowed")
             (setq doc (cadr option))))
        (:import-from
         (setf imports (append imports (list (cdr option)))))))
    `(progn
       #+jscl-xc
       (eval-when (:compile-toplevel)
         (defpackage ,name ,@options))
       (eval-when (#-jscl-xc :compile-toplevel :load-toplevel :execute)
         (let ((package (%defpackage ',(string name) ',use ',nicknames)))
           (import (mapcan (lambda (import-spec)
                             (mapcar (lambda (name)
                                       (find-symbol-for-import name (car import-spec)))
                                     (cdr import-spec)))
                           ',imports)
                   package)
           (export (mapcar (lambda (name) (intern (string name) package)) ',exports)
                   package)
           ,(when doc `(setf (documentation package 'package) ,doc))
           package)))))


(defun %redefine-package (package use nicknames)
  (dolist (n nicknames)
    (unless (eq (find-package n) package)
      (error "A package namded `~a' already exists." n)))
  (let ((old-use (package-use-list package)))
    (use-package use package)
    (unuse-package (set-difference old-use use) package))
  (dolist (old-nickname (oget package "nicknames"))
    (delete-property old-nickname *package-table*))
  (dolist (new-nickname nicknames)
    (setf (oget *package-table* new-nickname) package))
  (setf (oget package "nicknames") nicknames)
  package)

(defun %defpackage (name use nicknames)
  (let ((package (find-package name))
        (use (resolve-package-list use))
        (nicknames (mapcar #'string nicknames)))
    (if package
        (%redefine-package package use nicknames)
        (make-package name :use use :nicknames nicknames))))


(defun find-symbol (name &optional (package *package*))
  (let* ((package (find-package-or-fail package))
         (externals (%package-external-symbols package))
         (symbols (%package-symbols package)))
    (cond
      ((in name externals)
       (values (oget externals name) :external))
      ((in name symbols)
       (values (oget symbols name) :internal))
      (t
       (dolist (used (package-use-list package) (values nil nil))
         (let ((exports (%package-external-symbols used)))
           (when (in name exports)
             (return (values (oget exports name) :inherited)))))))))


;;; It is a function to call when a symbol is interned. The function
;;; is invoked with the already interned symbol as argument.
(defvar *intern-hook* nil)

(defun intern (name &optional (package *package*))
  (let ((name (string name))
        (package (find-package-or-fail package)))
    (multiple-value-bind (symbol foundp)
        (find-symbol name package)
      (if foundp
          (values symbol foundp)
          (let ((symbol (make-symbol name)))
            (import symbol package)
            (when *intern-hook*
              (funcall *intern-hook* symbol))
            (values symbol nil))))))

(defun unintern (symbol &optional (package *package*))
  (let ((name (symbol-name symbol))
        (package (find-package-or-fail package)))
    (multiple-value-bind (symbol-found status) (find-symbol name package)
      (when (and (member status '(:internal :external))
                 (eq symbol-found symbol))
        (delete-property name (%package-external-symbols package))
        (delete-property name (%package-symbols package))
        (when (eq (symbol-package symbol) package)
          (setf (oget symbol "package") nil))
        t))))

(defun symbol-package (symbol)
  (unless (symbolp symbol)
    (error "`~S' is not a symbol." symbol))
  (oget symbol "package"))

(defun export (symbols &optional (package *package*))
  (let ((package (find-package-or-fail package))
        (exports (%package-external-symbols package))
        (package-syms (%package-symbols package)))
    (dolist (symb (ensure-list symbols) t)
      (let ((name (symbol-name symb)))
        (multiple-value-bind (symbol-found status) (find-symbol name package)
          (unless (and status (eq symb symbol-found))
            (error "~a is not accessible in ~a" symb package))
          (when (eq status :inherited)
            (import symb package))
          (setf (oget exports name) symb))))))

(defun unexport (symbols &optional (package *package*))
  (let ((package (find-package-or-fail package))
        (exports (%package-external-symbols package)))
    (dolist (symb (ensure-list symbols) t)
      (let ((name (symbol-name symb)))
        (when (eq symb (oget exports name))
          (delete-property name exports))))))

(defun import (symbols &optional (package *package*))
  (let ((package (find-package-or-fail package))
        (package-syms (%package-symbols package)))
    (dolist (symb (ensure-list symbols) t)
      (let ((name (symbol-name symb)))
        (multiple-value-bind (symbol-found status) (find-symbol name package)
          (cond
            ((and status (not (eq symb symbol-found)))
             (error "Import ~a causes name conflict with ~a" symb symbol-found))
            ((and (member status '(:internal :external))
                  (eq symb symbol-found))
             nil)
            (t
             (setf (oget package-syms (symbol-name symb)) symb)
             (when (null (oget symb "package"))
               (setf (oget symb "package") package)))))))))

;;; TODO: add error checking
(defun use-package (use-list &optional (package *package*))
  (let ((package (find-package-or-fail package))
        (use-list (resolve-package-list (ensure-list use-list))))
    (when (eq package *keyword-package*)
      (error "Keyword package cannot use packages"))
    (when (member *keyword-package* use-list)
      (error "Cannot use keyword package"))
    (dolist (use use-list t)
      (pushnew use (oget package "use"))
      (pushnew package (oget use "usedBy")))))

(defun unuse-package (unuse-list &optional (package *package*))
  (let ((package (find-package-or-fail package))
        (unuse-list (resolve-package-list (ensure-list unuse-list))))
    (dolist (unuse unuse-list t)
      (setf (oget package "use")
            (remove unuse (oget package "use")))
      (setf (oget unuse "usedBy")
            (remove package (oget unuse "usedBy"))))))

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

(defvar *user-package*
  (make-package "CL-USER" :use (list (find-package "CL"))))
