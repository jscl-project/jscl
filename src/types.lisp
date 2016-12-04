;;;; types.lisp — JSCL type system

;; This is presently extremely rudimentary  and inefficient. The goal is
;; to get something functional in  place that is sufficiently enough for
;; a reasonable implementation of DEFGENERIC and DEFMETHOD and the basic
;; type system — DEFTYPE, TYPEP, SUBTYPEP, E/TYPECASE, &c.

;; FIXME A critical  need is to unify the management  of types, classes,
;; and environments effectively.

(in-package :jscl)

(/debug "Loading types.lisp…")

(defvar *types* ()
  "FIXME: This should be in the environment")
(defvar *classes* ()
  "FIXME: This should  be in the environment, and  probably unified with
  types  (let the  type  contain  a metaobject  reference  to the  class
  object)")

#.(assert (#+jscl !macro-function #-jscl macro-function
                  'defstruct)
          ()
          "DEFSTRUCT should have been defined by defstruct.lisp before this file was loaded.")


(defstruct %built-in-class
  name predicate superclasses)

(defstruct eql-specializer
  object)

(defstruct type-definition
  name supertypes lambda-list body predicate
  class)

(defstruct class-info
  name supertypes slots 
  predicate constructor copier)



(defun car? (name)
  (if (consp name) 
      (car name) 
      name))

(defun find-type-definition (type &optional (environment *environment*))
  ;; FIXME: Use the environment
  (or (find (car? type) *types* :key #'type-definition-name)
      (error "~s does not name a type" type)))

(defun !subtypep (subtype supertype &optional 
                                      (environment *environment*))
  (let* ((sub (find-type-definition subtype environment))
         (known-supertypes (type-definition-supertypes sub)))
    (or (find supertype known-supertypes)
        (some (lambda (type)
                (subtypep subtype type))
              (mapcan
               (lambda (type)
                 (type-definition-supertypes type))
               known-supertypes)))))
#+jscl (fset 'subtypep '!subtypep)

(defun most-specific-type (type &rest rest)
  (cond
    ((not rest) type)
    ((cdr rest)
     (reduce #'most-specific-type (cons type rest)))
    ((subtypep (car rest) type) (car rest))
    (t type)))

(defun !type-of (value)
  (if value
      (let ((type (type-definition-name
                   (most-specific-type
                    (remove-if-not (lambda (type)
                                     (funcall (type-definition-predicate type)
                                              value))
                                   *types*)))))
        (cond
          ((subtypep type 'string) (cons type (length value)))
          ((subtypep type 'array) (cons type (array-dimensions value)))
          ((subtypep type 'integer) (list type value value))
          ((null type) t)
          (t type)))
      'null))
#+jscl (fset 'type-of '!type-of)

(defun !class-of (value)
  (type-definition-class (find-type-definition (type-of value))))

(defstruct deftype-class-metaobject
  name)

(defmacro !deftype (name lambda-list &body body)
  `(push (make-type-definition :name ',name
                               :supertypes '(jscl::user-deftype)
                               :predicate
                               ,(let ((object (gensym "OBJECT-")))
                                  `(lambda ,(cons object lambda-list)
                                     (typep ,object ',@body)))
                               :class (make-deftype-class-metaobject 
                                       :name ',name))
         *types*))
#+jscl (fset-macro 'deftype '!deftype)

(dolist (type-info '((hash-table hash-table-p atom)
                     (number numberp atom)
                     (real realp number)
                     (integer integerp rational)
                     (fixnum fixnump integer)
                     (cons consp)
                     (list listp cons sequence)
                     (vector vectorp sequence)
                     (character characterp atom)
                     (symbol symbolp atom)
                     (keyword keywordp symbol)
                     (function functionp atom)
                     (float floatp real) 
                     (single-float floatp real)
                     (double-float floatp real)
                     (long-float floatp real)
                     (rational rationalp real)
                     (array arrayp sequence)
                     (string stringp vector)
                     (atom atom)
                     (null null)
                     (package packagep atom)))
  (destructuring-bind (name predicate &rest supertypes)
      type-info
    (push (make-type-definition :name name
                                :supertypes supertypes
                                :predicate predicate)
          *types*)))

(defun !typep (object type &optional environment)
  (cond
    ((eql-specializer-p type)
     (eql object (eql-specializer-object type)))
    ((consp type)
     (let ((predicate (type-definition-predicate
                       (find-type-definition (car type) environment))))
       (if predicate
           (apply predicate object (cdr type))
           (error "Can't handle type specifier ~s; is it valid?"
                  type))))
    ((symbolp type)
     (funcall (type-definition-predicate
               (find-type-definition type environment))
              object))
    (t (error "~s is not a valid type specifier" type))))
#+jscl (fset 'typep '!typep)

(defmacro !check-type (place type &optional type-string)
  "Signal a restartable  error of type TYPE-ERROR if the  value of PLACE
is not of the  specified type. If an error is  signalled and the restart
is used  to return, this can  only return if the  STORE-VALUE restart is
invoked. In that case it will store into PLACE and start over."
  (let ((new-value (gensym "NEW-VALUE-")))
    `(tagbody
        ,new-value
        (restart-case
            (unless (typep ,place ',type)
              (error 'type-error :place ',place :value ,place
                     :expected ,(or type-string (string type))))
          (store-value (,new-value)
            :report ,(format nil "Supply a new value for ~s" place)
            (setf ,place ,new-value)
            (go ,new-value))))))
#+jscl (fset-macro 'check-type '!check-type)


"(old typecase — make sure these tests pass TODO
                               (hash-table 'hash-table-p)
                               (fixnum 'fixnump)
                               (number 'numberp)
                               (integer 'integerp)
                               (cons 'consp)
                               (list 'listp)
                               (vector 'vectorp)
                               (character 'characterp)
                               (sequence 'sequencep)
                               (symbol 'symbolp)
                               (keyword 'keywordp)
                               (function 'functionp)
                               (float 'floatp)
                               (array 'arrayp)
                               (string 'stringp)
                               (atom 'atom)
                               (null 'null)
                               (package 'packagep))"

(defmacro !typecase (x &rest clausules)
  "A fair approximation of TYPECASE for limited cases"
  (let ((value (gensym "TYPECASE-VALUE-")))
    `(let ((,value ,x))
       (cond
         ,@(mapcar (lambda (c)
                     (if (find (car c) '(t otherwise))
                         `(t ,@(rest c))
                         `((typep ,value ',(car c))
                           ,@(or (rest c)
                                 (list nil)))))
                   clausules)))))
#+jscl (fset-macro 'typecase '!typecase)

(defmacro !etypecase (x &rest clausules)
  (let ((g!x (gensym "ETYPECASE-VALUE-")))
    `(let ((,g!x ,x))
       (!typecase ,g!x
                  ,@clausules
                  (t (error "~S fell through etypecase expression." ,g!x))))))
#+jscl (fset-macro 'etypecase '!etypecase)



;;; Complete coverage of the basic types required per CLHS

(defparameter +standard-type-specifiers+
  '(arithmetic-error	function	simple-condition	
    array	generic-function	simple-error	
    atom	hash-table	simple-string	
    base-char	integer	simple-type-error	
    base-string	keyword	simple-vector	
    bignum	list	simple-warning	
    bit	logical-pathname	single-float	
    bit-vector	long-float	standard-char	
    broadcast-stream	method	standard-class	
    built-in-class	method-combination	standard-generic-function	
    cell-error	nil	standard-method	
    character	null	standard-object	
    class	number	storage-condition	
    compiled-function	package	stream	
    complex	package-error	stream-error	
    concatenated-stream	parse-error	string	
    condition	pathname	string-stream	
    cons	print-not-readable	structure-class	
    control-error	program-error	structure-object	
    division-by-zero	random-state	style-warning	
    double-float	ratio	symbol	
    echo-stream	rational	synonym-stream	
    end-of-file	reader-error	t	
    error	readtable	two-way-stream	
    extended-char	real	type-error	
    file-error	restart	unbound-slot	
    file-stream	sequence	unbound-variable	
    fixnum	serious-condition	undefined-function	
    float	short-float	unsigned-byte	
    floating-point-inexact	signed-byte	vector	
    floating-point-invalid-operation	simple-array	warning	
    floating-point-overflow	simple-base-string	
    floating-point-underflow	simple-bit-vector))

(defparameter +compound-only-type-specifiers+
  '(and	mod	satisfies	
    eql	not	values	
    member	or))

(defparameter +compound-type-specifiers+
  '(long-float	simple-base-string	
    array	simple-bit-vector	
    base-string	simple-string	
    bit-vector	simple-vector	
    complex	single-float	
    cons	rational	string	
    double-float	real	unsigned-byte 
    float	short-float	vector	
    function	signed-byte	
    integer	simple-array))



;;; Standard  compound type  specifiers  based on  the  regular types  —
;;; numeric and array types

(defun make-numeric-range-check-predicate (type)
  (lambda (object &optional min max)
    (and (typep object type)
         (etypecase min
           (null t)
           (cons (and (numberp (car min))
                      (null (cdr min))
                      (< (car min) object)))
           (number (<= min object)))
         (etypecase max
           (null t)
           (cons (and (numberp (car max))
                      (null (cdr max))
                      (> (car max) object)))
           (number (>= max object))))))

(dolist (type '(number integer real rational
                float single-float double-float long-float))
  (setf (type-definition-predicate
         (find-type-definition type *global-environment*))
        (make-numeric-range-check-predicate type)))

(setf (type-definition-predicate
       (find-type-definition 'string *global-environment*))
      (lambda (object length)
        (and (stringp object)
             (= length (length object)))))

(defun %array-type-predicate (object element-type &optional dimensions)
  (if (stringp object)
      (and (find element-type '(t character))
           (etypecase dimensions
             (null t)
             (integer (= (length object) dimensions))
             (cons (and (integerp (car dimensions))
                        (null (cdr dimensions))
                        (= (length object)
                           (car dimensions))))))
      (and (subtypep (array-element-type object) element-type)
           (equalp (array-dimensions object) dimensions))))

(setf (type-definition-predicate
       (find-type-definition 'array *global-environment*))
      #'%array-type-predicate)

(dolist (type-name +standard-type-specifiers+)
  (push (make-%built-in-class :name type-name) *classes*))


;;; Subclass hierarchy of the standard classes

(defparameter +standard-class-subclasses+
  '( ( arithmetic-error division-by-zero floating-point-inexact
      floating-point-invalid-operation floating-point-overflow
      floating-point-underflow )
    ( function generic-function standard-generic-function compiled-function )
    ( simple-condition simple-error simple-type-error simple-warning )
    ( array simple-string base-string simple-vector bit-vector string vector
     simple-array simple-base-string simple-bit-vector )
    ( generic-function standard-generic-function ) 
    ( simple-string simple-base-string )
    ( base-char standard-char )
    ( integer bignum bit fixnum unsigned-byte signed-byte )
    ( base-string simple-base-string )
    ( list null cons )
    ( single-float short-float )
    ( bit-vector simple-bit-vector )
    ( long-float double-float )
    ( method standard-method )
    ( cell-error unbound-slot unbound-variable undefined-function )
    ( character base-char standard-char extended-char )
    ( standard-object generic-function method standard-class built-in-class
     method-combination standard-generic-function standard-method class
     structure-class )
    ( class standard-class built-in-class structure-class )
    ( number integer bignum bit single-float long-float complex double-float
     ratio rational real fixnum float short-float unsigned-byte signed-byte )
    ( compiled-function generic-function standard-generic-function )
    ( stream broadcast-stream concatenated-stream string-stream
     echo-stream synonym-stream two-way-stream file-stream )
    ( stream-error end-of-file reader-error )
    ( parse-error reader-error )
    ( string simple-string base-string simple-base-string )
    ( condition arithmetic-error simple-condition simple-error
     simple-type-error simple-warning cell-error storage-condition
     package-error stream-error parse-error print-not-readable control-error
     program-error division-by-zero style-warning end-of-file reader-error
     error type-error file-error unbound-slot unbound-variable
     serious-condition undefined-function floating-point-inexact
     floating-point-invalid-operation warning floating-point-overflow
     floating-point-underflow )
    ( pathname logical-pathname )
    ( structure-object hash-table logical-pathname broadcast-stream 
     package concatenated-stream pathname random-state echo-stream
     synonym-stream readtable two-way-stream restart )
    ( double-float long-float )
    ( symbol keyword null )
    ( rational integer bignum bit ratio fixnum unsigned-byte signed-byte ) 
    ( error arithmetic-error simple-error simple-type-error cell-error
     package-error stream-error parse-error print-not-readable control-error
     program-error division-by-zero end-of-file reader-error type-error
     file-error unbound-slot unbound-variable undefined-function
     floating-point-inexact floating-point-invalid-operation
     floating-point-overflow floating-point-underflow )
    ( two-way-stream echo-stream )
    ( real integer bignum bit single-float long-float double-float ratio rational
     fixnum float short-float unsigned-byte signed-byte )
    ( type-error simple-type-error )
    ( sequence simple-string base-string simple-vector list bit-vector null
     string cons vector simple-base-string simple-bit-vector )
    ( fixnum bit )
    ( serious-condition arithmetic-error simple-error simple-type-error
     cell-error storage-condition package-error stream-error parse-error
     print-not-readable control-error program-error division-by-zero
     end-of-file reader-error error type-error file-error unbound-slot
     unbound-variable undefined-function floating-point-inexact
     floating-point-invalid-operation floating-point-overflow
     floating-point-underflow )
    ( float single-float long-float double-float short-float )
    ( short-float single-float )
    ( unsigned-byte bit )
    ( signed-byte integer bignum bit fixnum unsigned-byte )
    ( vector simple-string base-string simple-vector bit-vector string
     simple-base-string simple-bit-vector )
    ( simple-array simple-string simple-vector simple-base-string
     simple-bit-vector )
    ( warning simple-warning style-warning )
    ( atom arithmetic-error function simple-condition array generic-function
     simple-error hash-table simple-string base-char integer
     simple-type-error base-string keyword simple-vector bignum
     simple-warning bit logical-pathname single-float bit-vector long-float
     standard-char broadcast-stream method standard-class built-in-class
     method-combination standard-generic-function cell-error
     standard-method character null standard-object class number
     storage-condition compiled-function package stream complex
     package-error stream-error concatenated-stream parse-error string
     condition pathname string-stream print-not-readable structure-class
     control-error program-error structure-object division-by-zero
     random-state style-warning double-float ratio symbol echo-stream
     rational synonym-stream end-of-file reader-error error readtable
     two-way-stream extended-char real type-error file-error restart
     unbound-slot file-stream unbound-variable fixnum serious-condition
     undefined-function float short-float unsigned-byte floating-point-inexact
     signed-byte vector floating-point-invalid-operation simple-array warning
     floating-point-overflow simple-base-string floating-point-underflow
     simple-bit-vector )))

(defun find-built-in-class (name)
  (or (find name *classes* :key #'%built-in-class-name)
      (error "~s does not name a class" name)))

(dolist (hierarchy +standard-class-subclasses+)
  (destructuring-bind (class &rest subclasses) hierarchy 
    (dolist (subclass subclasses)
      (let ((metaclass (find-built-in-class subclass)))
        (push class (%built-in-class-superclasses metaclass))))))

(dolist (hierarchy +standard-class-subclasses+)
  (destructuring-bind (class &rest subclasses) hierarchy
    (dolist (subclass subclasses)
      (unless (subtypep class subclass)
        (warn "Standard class ~s should have subclass ~s"
              class subclass)))))


;; Validate versus host compiler's type definitions
#-jscl 
(dolist (type-name +standard-type-specifiers+)
  (let ((subtypes (remove-if-not
                   (alexandria:rcurry #'subtypep type-name)
                   (remove-if (lambda (type)
                                (or (null type)
                                    (eql type-name type)))
                              +standard-type-specifiers+))))
    #+nil
    (when subtypes
      (format t "~& ( ~s~@[ ~{~s~^ ~}~] )" type-name
              subtypes))))
