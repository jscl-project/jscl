;;;; compat/compat-js.lisp — JSCL/JS emulation of code generator

;;; The  code generator  writes out  JavaScript forms  from an  AST that
;;; resembles  JavaScript  itself.  This package  instead  defines  Lisp
;;; functions  that emulate  the  JavaScript  run-time environment  just
;;; enough for the bootstrap process.

;; Copyright © 2012, 2013 David Vazquez
;;; Copyright © 2012 Raimon Grau

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

(in-package :jscl)

(eval-when (:compile-toplevel :load-toplevel :execute)
  (unless (and (boundp 'jscl/ffi:*root*)
               (hash-table-p jscl/ffi:*root*))
    (warn "Lost *ROOT* somehow again…")
    (setf jscl/ffi:*root* (make-hash-table :test 'equal))))

(defparameter jscl/js::this jscl/ffi::*root*)

(eval-when (:compile-toplevel :load-toplevel :execute)
  (let ((packages (make-hash-table :test 'equal))
        (keyword-package (make-hash-table :test 'equal)))
    (setf (gethash "symbols" keyword-package) (make-hash-table :test 'equal)
          (gethash "KEYWORD" packages) keyword-package
          (gethash "packages" jscl/ffi:*root*) packages)))

(defmacro jscl/js::%js-vref (symbol-name &optional _)
  (declare (ignore _))
  `(jscl/ffi:oget jscl/ffi:*root* ,symbol-name))

(defmacro jscl/js::%js-vset (symbol-name value)
  `(setf (jscl/ffi:oget jscl/ffi:*root* ,symbol-name) ,value))

(dolist (fn '(floor ceiling))
  (setf (fdefinition (intern (concatenate 'string "%"
                                          (string fn))
                             :jscl/js))
        (fdefinition fn)))

(dolist (fn '(min max))
  (setf (fdefinition (intern (string fn) :jscl/js))
        (fdefinition fn)))

(dolist (operator '(+ - * / > >= = <= < /=))
  (setf (fdefinition (intern (string operator) :jscl/js))
        (fdefinition operator)))

(defun jscl/js::%fboundp-setf (symbol)
  (fdefinition-soft (list 'setf symbol)))
(defun jscl/js::%fdefinition-setf (symbol)
  (fdefinition (list 'setf symbol)))
(defun jscl/js::%fmakunbound (symbol)
  (fmakunbound symbol))
(defun jscl/js::%fmakunbound-setf (symbol)
  (fmakunbound (list 'setf symbol)))
(defun jscl/js::%setf-fdefinition-setf (symbol value)
  (setf (fdefinition (list 'setf symbol)) value))
(defun jscl/js::%setf-symbol-function (symbol value)
  (setf (fdefinition symbol) value))
(defun jscl/js::%throw (condition)
  (signal "javascript condition: ~a" condition))
(defun jscl/js::boundp (symbol)
  (boundp symbol))
(defun jscl/js::fboundp (symbol)
  (fdefinition-soft symbol))
(defun jscl/js::lambda-code (function)
  (or (function-lambda-expression (fdefinition function))
      (disassemble (fdefinition function))))
(defun jscl/js::values-array (array)
  (apply 'values (map 'list 'identity array)))


(defmacro jscl/js::call-internal (fn &rest args)
  `(,(intern (concatenate 'string (string :INTERNALS.)
                          (substitute #\- #\_
                                      (string-upcase fn)))
             :jscl/js)
     ,@args))

(defun jscl/js::|Object| (&rest args-plist)
       (loop for (key value) on args-plist by #'cddr
          do (setf (gethash key jscl/js::this) value))
       jscl/js::this)

(defun jscl/js::|String| (&optional contents)
       (etypecase contents
         (null "")
         (string contents)
         (character (string contents))
         (t (princ-to-string contents))))

(setf (gethash "String" jscl/ffi:*root*) #'jscl/js::|String|
      (gethash "Object" jscl/ffi:*root*) #'jscl/js::|Object|)

(defvar jscl/ffi::unbound-function
  (lambda (&rest _) (declare (ignore _))
          (error "Unbound function")))

(defvar jscl/ffi::unbound-setf-function
  (lambda (&rest _) (declare (ignore _))
          (error "Unbound SetF function")))

(defun jscl/js::|Symbol| ()
       (jscl/js::|Object|)
       (setf (jscl/ffi:oget jscl/js::this "value") 'jscl/ffi::undefined
             (jscl/ffi:oget jscl/js::this "fvalue") jscl/ffi::unbound-function
             (jscl/ffi:oget jscl/js::this "setfValue") jscl/ffi::unbound-setf-function
             (jscl/ffi:oget jscl/js::this "typeName") 'jscl/ffi::undefined))

(defun jscl/js::internals.symbol (name package-or-package-name)
  (let ((jscl/js::this (jscl/ffi:make-new '|Symbol|))
        (package-name (etypecase package-or-package-name
                        (string package-or-package-name)
                        (package (package-name package-or-package-name)))))
    (setf (jscl/ffi:oget jscl/js::this "name") name
          (jscl/ffi:oget jscl/js::this "package") package-name)))

(defun jscl/js::internals.intern (name &optional package-name)
  (let* ((package-name (or package-name "JSCL"))
         (lisp-package (or (jscl/ffi:oget* jscl/ffi:*root*
                                           "packages"
                                           package-name)
                           (error "No package ~a" package-name)))
         (symbol (or (jscl/ffi:oget* lisp-package
                                     "symbols"
                                     name)
                     (setf (jscl/ffi:oget* lisp-package
                                           "symbols"
                                           name)
                           (jscl/js::internals.symbol name package-name)))))
    (when (eq lisp-package (jscl/ffi:oget* jscl/ffi:*root*
                                           "packages"
                                           "KEYWORD"))
      (setf (jscl/ffi:oget* lisp-package "exports" name)
            symbol))
    symbol))

(defun jscl/js::call (object key &rest args)
  (apply (jscl/ffi:oget object key) args))

(defmacro jscl/js::get (object key)
  `(jscl/ffi:oget ,object ,key jscl/ffi::undefined))

(defun jscl/js::in (key object)
  (let ((trash (cons 'not 'found)))
    (not (eq trash (jscl/ffi:oget object key trash)))))

(defun jscl/js::new () (make-hash-table :test 'equal))

(defun jscl/js::var (symbol value)
  (error "Unprocessed VAR? ~s ← ~s" symbol value))

(defun elevate-vars (body &key (lexicalp t))
  "Given a  Ruby AST in  BODY, recursively capture  variable definitions
and elevate them to the  containing lexical scope. Normally, called from
“outside”  from a  macro in  the AST  that establishes  a lexical  scope
itself,  thus, LEXICALP  T. Can  be called  recursively and  returns the
captured vars and embedded forms as multiple values."
  ;; Repurposed from  Ruby. Given a variable  in a scope, elevate  it to
  ;; the  containing  scope.   This  currently  (probably  incorrectly?)
  ;; assumes that only  FUNCTION forms establish a  new, nested, lexical
  ;; scope  and  elevates all  VAR  forms  to the  containing  FUNCTION.
  ;; Very sketchy stuff. TODO debug, dangerous.
  (loop
     with vars = nil
     with revised = nil
     for form in body
     if (consp form)
     do (case (car form)
          ;; A var in the current  lexical scratchpad. Capture the var,
          ;; but only initialize it at this point in the program flow.
          (jscl/js::var
           (destructuring-bind (var name
                                    &optional (initializer nil initializerp))
               form
             (declare (ignore var))
             (push name vars)
             (when initializerp
               (push `(setq ,name ,initializer) revised))))
          ;; Any of these forms establishes  a new lexical scope. Don't
          ;; expand it yet, wait for it to do its own expansion. Any of
          ;; these forms must be a macro for this to work.
          ((jscl/js::function)
           (push form revised))
          ;; All  other   CONS  forms   are  recursively   examined  for
          ;; a  Ruby::Var  form  to  appear  under  them.  Call  ourself
          ;; recursively,  BUT only  capture the  elevated vars  in THIS
          ;; level (the containing lexical scape)
          (otherwise
           (multiple-value-bind (_ more-vars revised-form)
               (elevate-vars form :lexicalp nil)
             (declare (ignore _))
             (push more-vars vars)
             (push revised-form revised))))
     else do (push form revised)
     finally (if lexicalp
                 (if vars
                     `(let ,(nreverse vars) ,@(nreverse revised))
                     (values nil vars (nreverse revised))))))

(defmacro jscl/js::function (name lambda-list &rest body)
  (if (symbolp name)
      `(defun ,name (&rest |arguments|)
         (destructuring-bind (&optional ,@lambda-list) |arguments|
           ,@(elevate-vars body)
           ))
      `(lambda (&rest |arguments|)
         (destructuring-bind (&optional ,@lambda-list) |arguments|
           ,@(elevate-vars body)))))

(defun jscl/js::= (var value) (setf var value))
(defun jscl/js::== (a b) (equal a b))
(defun jscl/js::=== (a b) (eq a b))

(defun jscl/js::! (x) (and (not (null x))
                           (not (eq x 'jscl/ffi::undefined))
                           (not (eq x 'jscl/ffi::false))))

(defun jscl/js::!== (a b) (not (equal a b)))
(defun jscl/js::!=== (a b) (not (eq a b)))

(defun jscl/js::internals.make-lisp-string (s) s)

(dolist (mimic '(car cdr cons consp rplaca rplacd
                 get-universal-time))
  (setf (fdefinition (intern (symbol-name mimic) :jscl/js))
        (fdefinition mimic)))

(defmacro jscl/js::%js-typeof (thing)
  (let ((value (ignore-errors (eval thing))))
    (typecase value
      (null "null")
      (number "number")
      (string "string")
      (t "Object"))))

(defun jscl/js::objectp (object)
  (hash-table-p object))

(defun jscl/js::map-for-in (function object)
  (maphash function object))

(defun jscl/js::delete-property (object key)
  (remhash key object))



(unless (jscl/ffi:oget jscl/ffi:*root* "packages")
  (setf (jscl/ffi:oget jscl/ffi:*root* "packages") (jscl/ffi:make-new '|Object|)))

(defun jscl/js::lisp-to-js (string)
  string)

(defun jscl/js::fset (symbol function)
  (push-to-lexenv (make-binding
                   :name symbol
                   :type 'function
                   :value function)
                  *environment*
                  symbol))

(defun jscl/js::get-internal-real-time ()
  (cl:get-internal-real-time))
