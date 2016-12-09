;;;; compat.lisp — Create some definitions to fix CL compatibility

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

(defmacro while (condition &body body)
  "Continue to repeatedly execute BODY while CONDITION is true."
  `(do ()
       ((not ,condition))
     ,@body))

(defconstant +most-positive-fixnum+ (1- (expt 2 53)))
(defconstant +most-negative-fixnum+ (- +most-positive-fixnum+))

(defun aset (array idx value)
  "Set the index IDX of the vector ARRAY to VALUE."
  (setf (aref array idx) value))

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun concat (&rest strs)
    "Shorthand for `CONCATENATE' 'STRING"
    (apply #'concatenate 'string strs)))

(defun /debug (message)
  "Print a trace message."
  (format *trace-output* "~&DEBUG: ~a" message))

(defun jscl/ffi:make-new (class &rest ctor-args)
  "Create a new  instance of CLASS with the  JavaScript special operator
“new”"
  (let ((instance (make-hash-table :test 'equal)))
    (setf (gethash "_prototype" instance) class
          (gethash "_ctor-args" instance) ctor-args)
    instance))

(defun (setf jscl/ffi:oget) (value object key)
  "Set the field named by KEY on the JavaScript object OBJECT to VALUE."
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

(defun jscl/ffi:oget (object key &optional default)
  "Retrieve from  OBJECT the value  identified by  KEY. When KEY  is not
defined, returns NIL."
  (gethash key object default))

;;; Defined later, in read.lisp
(declaim (ftype (function (character) t) terminalp)
         (ftype (function (stream (function (character) t)) t) read-until))

(defun colon-or-comma-p (char)
  (find char ":,"))

(defmacro with-sharp-j (&body body)
  "Install  a  readtable  which  provides   the  #J  macro  for  reading
JavaScript forms.

In particular,  #J:a:b:c is  equivalent to (JSCL/FFI:OGET*  *ROOT* \"a\"
\"b\"  \"c\"),   which  in   turn  is   equivalent  to   the  JavaScript
window[\"a\"][\"b\"][\"c\"]  or (when  the keys  are valid  identifiers)
also the same as window.a.b.c and a.b.c.

Note  that the  #J: sequence  is \emph{case-sensitive}  and begins  with
a colon  (:) after  the #J.  Each :-delimited substring  is the  name of
a key on the preceding object in the sequence.

TODO: An equivalent form where the  reference object does not have to be
*ROOT*  or where  identifiers  may  not have  to  be  strings. There  is
a discussion in http://github.com/jscl-project/jscl/Issues/

An experimental version is incorporated here. In this notation:

Begin with “#J”. Follow this with :  to refer to the root object (normally
“window”). Follow it instead with @ to NOT refer to the root object, but
instead,  name   an  object  (locally   in  scope)  to   be  referenced.
For example, #J@foo is identical to FOO.

Each  subsequent section  is  introduced  by either  a  colon or  comma.
A  section introduced  by  : is  treated  as a  string  name. A  section
introduced by  a , is instead  the name of a  locally available (current
package) symbol, which is bound to the string value to be used as a key.

Examples:

#J:foo:bar → window[\"foo\"][\"bar\"]
#J@foo:bar → foo[\"bar\"]
#J:foo,bar → window[\"foo\"][ bar ]
#J@foo,bar → foo[ bar ]

Note that @  in the first position BOTH suppresses  the automatic use of
the root  object (window) AND  ALSO acts  like a comma,  “unquoting” the
following argument.

Note that the @ and , options  are EXPERIMENTAL and local to the Romance
Ⅱbranch. The discussion upstream may substantially change the meaning of
these options.

Rationale: @  and , are used  in Lisp as quasi-quote  operators, and are
not  valid JavaScript  identifier components,  so they  are unlikely  to
occur in either language in normal use.
"
  (let ((readtable-before (gensym "READTABLE-BEFORE-")))
    `(let ((,readtable-before (copy-readtable))
           (*readtable* (copy-readtable)))
       (set-dispatch-macro-character #\# #\J #'j-reader)
       (unwind-protect
            (progn ,@body)
         (setf *readtable* ,readtable-before)))))

(defun read-#j ()
  "Establish  #J reader  macros  for  the current  file.  Does NOT  save
the readtable. See `WITH-SHARP-J' for details."
  (set-dispatch-macro-character #\# #\J #'j-reader))

(defun rational-float-p (rational)
  "Determine   whether  a   rational  number   can  be   represented  as
a       floating-point      number       accurately      at       double
precision (like JavaScript.)

Returns  multiple  values; the  first  value  is a  generalized  boolean
telling whether the number is  equal to its nearest float representation
under =; the secondary value is a list that represents the division that
produces the rational number. If the  number provided is not rational at
all, it returns only a single value: nil.

EG:

 (rational-float-p 1/3) → (values nil '(/ 1 3))

 (rational-float-p 1/2) → (values T '(/ 1 3))"
  (and (rationalp rational)
       (let ((float (coerce rational 'double-float)))
         (values (= float rational)
                 (list '/
                       (numerator rational)
                       (denominator rational))))))


(defun fdefinition-soft (name)
  "Return  the  `FDEFINITION' of  NAME,  or  NIL  if  it does  not  have
 a function value or is not a valid function name."
  (ignore-errors (fdefinition name)))

;;; Storage Vectors

;; Provide a ANSI compatible implementation of storage vectors.
(defstruct (storage-vector
             (:constructor make-storage-vector-1))
  kind
  underlying-vector)

(defun make-storage-vector (initial-size kind)
  "Allocate a  STORAGE-VECTOR with a type  tag of KIND. The  type tag is
expected to  be a  CONS, the CAR  of which is  something like  'ARRAY or
'STRUCTURE-OBJECT or 'CLOS-OBJECT, the CDR  is reserved for the specific
type to use as it likes. "
  (check-type initial-size (integer 0 *))
  (check-type kind cons)
  (check-type (car kind) symbol)
  (make-storage-vector-1
   :kind kind
   :underlying-vector (make-array initial-size :adjustable t)))

(defun storage-vector-size (storage-vector)
  "Return the size of the (underlying) vector wrapped by STORAGE-VECTOR"
  (check-type storage-vector storage-vector)
  (length (storage-vector-underlying-vector storage-vector)))

(defun resize-storage-vector (storage-vector new-size)
  "Adjust the size of the  (underlying) vector wrapped by STORAGE-VECTOR
to NEW-SIZE."
  (check-type storage-vector storage-vector)
  (check-type new-size (integer 0 *))
  (let ((underlying-vector (storage-vector-underlying-vector
                            storage-vector)))
    (adjust-array underlying-vector new-size)
    storage-vector))

(defun storage-vector-ref (storage-vector index)
  "Get the value at index INDEX of the STORAGE-VECTOR"
  (check-type storage-vector storage-vector)
  (check-type index (integer 0 *))
  (aref (storage-vector-underlying-vector storage-vector) index))

(defun (setf storage-vector-ref) (new-value storage-vector index)
  "Set the value at index INDEX of the STORAGE-VECTOR to NEW-VALUE"
  (check-type storage-vector storage-vector)
  (check-type index (integer 0 *))
  (setf (aref (storage-vector-underlying-vector storage-vector) index)
        new-value))

(defun storage-vector-set (storage-vector index new-value)
  "Set the value at index INDEX of the STORAGE-VECTOR to NEW-VALUE"
  (check-type storage-vector storage-vector)
  (check-type index (integer 0 *))
  (setf (aref (storage-vector-underlying-vector storage-vector) index)
        new-value))

(defun concatenate-storage-vector (sv1 sv2)
  "Concatenate  the two  storage vectors  SV1 and  SV2. The  CAR of  the
`STORAGE-VECTOR-KIND' for  both must  match. The resulting,  new storage
vector does not share structure with SV1 nor SV2. The “kind” tag will be
copied from SV1;  the caller is expected to make  any corrections to the
metadata in it."
  (check-type sv1 storage-vector)
  (check-type sv2 storage-vector)
  (assert (eql (car (storage-vector-kind sv1))
               (car (storage-vector-kind sv2))))
  (let* ((sv (make-storage-vector (+ (storage-vector-size sv1)
                                     (storage-vector-size sv2))
                                  (copy-list (storage-vector-kind sv1))))
         (v (storage-vector-underlying-vector sv)))
    (setf (subseq v 0 (storage-vector-size sv1))
          (storage-vector-underlying-vector sv1))
    (setf (subseq v (storage-vector-size sv1))
          (storage-vector-underlying-vector sv2))
    sv))



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

(unless (jscl/ffi:oget jscl/ffi:*root* "packages")
  (setf (jscl/ffi:oget jscl/ffi:*root* "packages") (jscl/ffi:make-new '|Object|)))

(defvar jscl/ffi::unbound-function
  (lambda (&rest _) (declare (ignore _))
          (error "Unbound function")))

(defvar jscl/ffi::unbound-setf-function
  (lambda (&rest _) (declare (ignore _))
          (error "Unbound SetF function")))

(defun jscl/js::internals.symbol (name package-name)
  (let ((this (jscl/ffi:make-new '|Symbol|)))
    (setf (jscl/ffi:oget this "name") name
          (jscl/ffi:oget this "package") package-name
          (jscl/ffi:oget this "value") 'jscl/ffi::undefined
          (jscl/ffi:oget this "fvalue") jscl/ffi::unbound-function
          (jscl/ffi:oget this "setfValue") jscl/ffi::unbound-setf-function
          (jscl/ffi:oget this "typeName") 'jscl/ffi::undefined)))

(defun jscl/js::internals.intern (name &optional package-name)
  (let* ((package-name (or package-name "JSCL"))
         (lisp-package (or (jscl/ffi:oget* jscl/ffi:*root*
                                           "packages"
                                           package-name)
                           (error "No package ~a" package-name)))
         (symbol (or (jscl/ffi:oget* jscl/ffi:*root*
                                     lisp-package
                                     "symbols"
                                     name)
                     (setf (jscl/ffi:oget* jscl/ffi:*root*
                                           lisp-package
                                           "symbols"
                                           name)
                           (jscl/js::internals.symbol name lisp-package)))))
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
