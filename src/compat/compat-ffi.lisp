;;;; compat-ffi.lisp — emulation of JavaScript FFI

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
  (defvar jscl/ffi:*root* (make-hash-table :test 'equal)
    "The *ROOT* object is “window” (in a browser) or the Node root object.
 This provides access to whichever root  object happens to exist in the
 active JavaScript Virtual Machine."))

(defun jscl/ffi:make-new (class &rest ctor-args)
  "Create a new  instance of CLASS with the  JavaScript special operator
“new” — which means  to call the JS function named  CLASS with JS “this”
bound to a freshly-constructed object, and pass it CTOR-ARGS.

As  a convenience,  if  CLASS is  not FBOUNDP,  this  will instead  call
a function named CLASS in package JSCL/JS."
  (let ((jscl/js::this (make-hash-table :test 'equal)))
    (setf (gethash "_prototype" jscl/js::this) class)
    (if (fboundp class)
        (funcall class ctor-args)
        (funcall (intern (symbol-name class) :jscl/js) ctor-args))))

(defun (setf jscl/ffi:oget) (value object key)
  "Set the field named by KEY on the JavaScript object OBJECT to VALUE."
  (check-type object hash-table
              "a hash table (pretending to be a JavaScript Object)")
  (setf (gethash key object) value))

(defmacro jscl/ffi:oget* (object &rest keys)
  "Retrieve from  OBJECT the value of  the first of KEYS,  then from the
resulting  object, use  the  next of  KEYS to  retrieve  its value,  and
so forth.

Thus, (OGET* SOMETHING \"foo\" \"bar\" \"baz\")
is equivalent to the JavaScript something[\"foo\"][\"bar\"][\"baz\"]
 and also (when the KEYS are valid identifiers) something.foo.bar.baz"
  (cond ((null keys)
         nil)
        ((null (cdr keys))
         `(jscl/ffi:oget ,object ,(first keys)))
        (t
         `(jscl/ffi:oget (jscl/ffi:oget* ,object ,@(butlast keys))
                         ,(car (last keys))))))

(defmacro jscl/ffi:oset* (value object &rest keys)
  `(setf (jscl/ffi:oget* ,object ,@keys) ,value))

(defun jscl/ffi:oget (object key &optional default)
  "Retrieve from  OBJECT the value  identified by  KEY. When KEY  is not
defined, returns NIL."
  (gethash key object default))
