;;;; types.lisp — JSCL type system

;; This is presently extremely rudimentary  and inefficient. The goal is
;; to get something functional in  place that is sufficiently enough for
;; a reasonable implementation of DEFGENERIC and DEFMETHOD and the basic
;; type system — DEFTYPE, TYPEP, SUBTYPEP, E/TYPECASE, &c.

(in-package :jscl)

(/debug "Loading types.lisp…")


;; forward declarations to compiler.lisp
(unless (fboundp 'lexenv-type)
  ;; Don't  re-DECLAIM   these;  in  particular,   Make-Binding  returns
  ;; a Binding object  (not T), but since Binding can't  be defined yet,
  ;; we  get a  mismatch if  we re-evaluate  this declaration  once that
  ;; function is actually known.
  (declaim (special *environment* *global-environment*)
           (ftype (function (t) t) binding-value)
           (ftype (function (t t t) t) lookup-in-lexenv)
           (ftype (function (&key (:name t) (:type t)
                                  (:value t) (:declarations t))
                            t)
                  make-binding)
           (ftype (function (t t t) cons)
                  push-to-lexenv)
           (ftype (function (t) t) lexenv-type)))



(defmacro jscl/cl::deftype (name lambda-list &body body)
  `(push-to-lexenv (make-binding
                    :name ',name
                    :type 'type
                    :value (make-type-definition
                            :name ',name
                            :supertypes '(jscl::user-deftype)
                            :predicate
                            (lambda (object)
                              ,(make-deftype-predicate
                                name lambda-list
                                body))
                            :class (make-deftype-class-metaobject
                                    :name ',name)))
                   *environment*
                   'type))



(defstruct jscl/cl::built-in-class
  name predicate superclasses)

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun make-accessor-name (class slot-name)
    (intern (concatenate 'string (string class)
                         "-" (string slot-name)))))

(in-package :jscl/mop)
;; so MOP:EQL-SPECIALIZER-OBJECT is in the right place
(cl:defstruct jscl/cl::eql-specializer
  object)
(cl:in-package :jscl)

(defstruct type-definition
  name supertypes lambda-list body
  predicate class)

(defstruct class-info
  name supertypes slots
  predicate constructor copier)

(defstruct slot-info
  class name
  accessors readers writers type
  initform initargs
  allocation)


(defun car? (name)
  (if (consp name)
      (car name)
      name))

(defun find-type-definition (type &optional (environment *environment*))
  (or (let ((b (or (lookup-in-lexenv type environment 'type)
                   (lookup-in-lexenv type *global-environment* 'type))))
        (when b
          (binding-value b)))
      (error "~s does not name a type" type)))

(defun jscl/cl::subtypep (subtype supertype)
  (let* ((sub (find-type-definition subtype))
         (known-supertypes (type-definition-supertypes sub)))
    (or (find supertype known-supertypes)
        (some (lambda (type)
                (subtypep subtype type))
              (mapcan
               (lambda (type)
                 (type-definition-supertypes type))
               known-supertypes)))))

(defun most-specific-type (type &rest rest)
  (case (length rest)
    (0 type)
    (1 (if (subtypep (first rest) type)
           (first rest)
           type))
    (otherwise (reduce #'most-specific-type (cons type rest)))))

(defun curry-type-check (value)
  (lambda (binding)
    (when binding
      (let ((type (binding-value binding)))
        (when type
          (funcall (type-definition-predicate type)
                   value))))))

(defun jscl/cl::type-of (value)
  (if value
      (let* ((curry (curry-type-check value))
             (type (type-definition-name
                    (most-specific-type
                     (remove-if-not curry
                                    (lexenv-type *environment*))))))
        (cond
          ((subtypep type 'string) (cons type (length value)))
          ((subtypep type 'array) (cons type (array-dimensions value)))
          ((subtypep type 'integer) (list type value value))
          ((null type) t)
          (t type)))
      'null))

(defun jscl/cl::class-of (value)
  (type-definition-class (find-type-definition (type-of value))))

(defstruct deftype-class-metaobject
  name)

(defun make-deftype-predicate (name lambda-list body)
  (assert (and (listp body)
               (listp (car body))
               (eql 'quote (caar body)))
          (body)
          "BODY expected to be list-quote-list, FIXME")
  (let ((body (cadar body)))
    (cond ((not (listp body))
           `(typep object ,body))
          ((member (car body) '(and or not))
           (cons (car body) (mapcar (lambda (form)
                                      (make-deftype-predicate name
                                                              lambda-list
                                                              form))
                                    (rest body))))
          ;; FIXME: compound specifiers handling
          ((not (= (length body) 2))
           (error "Don't understand type specifier ~s" body))
          ((eql (car body) 'not)
           (cons (car body) (mapcar (lambda (form)
                                      (make-deftype-predicate name lambda-list form))
                                    (rest body))))
          ((eql 'satisfies (first body))
           `(,(second body) object))
          ((eql 'member (car body))
           `(member object ,(cdr body)))
          ((and (= 2 (length body))
                (eql 'mod (car body)))
           `(and (integerp object) (<= 0 object) (< object ,(second body))))
          ;; TODO: VALUES forms
          (t (error "Don't understand type specifier ~s" body)))))


(defun jscl/cl::typep (object type &optional (environment *environment*))
  (cond
    ((jscl/mop:eql-specializer-p type)
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

(defmacro jscl/cl::restart-case (expression &body clauses)
  ;; FIXME: I don't belong here
  (declare (ignore clauses))
  (warn "Dropping restart cases: TODO")
  expression)

(defmacro jscl/cl::check-type (place type &optional type-string)
  "Signal a restartable  error of type TYPE-ERROR if the  value of PLACE
is not of the  specified type. If an error is  signalled and the restart
is used  to return, this can  only return if the  STORE-VALUE restart is
invoked. In that case it will store into PLACE and start over."
  (let ((new-value (gensym "NEW-VALUE-")))
    `(tagbody
        ,new-value
        (restart-case
            (unless (typep ,place ',type)
              (error 'type-error :place ',place :datum ,place
                     :expected-type ,(or type-string (princ-to-string type))))
          (store-value (,new-value)
            :report ,(format nil "Supply a new value for ~s" place)
            (setf ,place ,new-value)
            (go ,new-value))))))

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

(defun typecase-unique-types (clauses)
  (when clauses
    (let ((type (first clauses))
          (rest (rest clauses)))
      (if (listp type)
          (case (car type)
            (or (append (typecase-unique-types (cdr type))
                        (typecase-unique-types rest)))
            (eql (append `(member ,(second type))
                         (typecase-unique-types rest)))
            (t (append type (typecase-unique-types rest))))
          (list* type (typecase-unique-types rest))))))

(defun find-duplicates (list &key (test #'eql))
  (when list
    (let ((first (first list))
          (rest (rest list)))
      (if (find first rest :test test)
          (list* first (find-duplicates rest :test test))
          (find-duplicates rest :test test)))))

(defun typecase-check-for-duplicates (unique-types)
  (let ((duplicated (find-duplicates unique-types)))
    (when duplicated
      (warn "Duplicated ~r type~:p in TYPECASE: ~{~s~^, ~};~
only the first case will ever be reached"
            (length duplicated)
            duplicated))))

(defun typecase-unreachable-after-t (unique-types)
  (when (and (member t unique-types)
             (member t (butlast unique-types)))
    (warn "TYPECASE contains a match for type T, which matches all values; ~
the cases ~{~s~^, ~} will never be matched"
          (subseq unique-types (1+ (position t unique-types))))))

(defun typecase-unreachable-after-supertype (unique-types)
  (let ((first (first unique-types))
        (rest (rest unique-types)))
    (let ((subtypes (remove-if-not
                     (lambda (other)
                       (subtypep other first))
                     rest)))
      (when subtypes
        (warn "TYPECASE contains a match for type ~s, ~_~
but also for ~[~;a~:;~:*~r~] proper subtype~:p of ~0@*~s:~_~2@*~{~s~^, ~};
since the supertype comes first, the subtype~1@*~p will never be matched."
              first (length subtypes) subtypes))
      (when (rest rest)
        (typecase-unreachable-after-supertype rest)))))

(defmacro jscl/cl::typecase (value &rest clauses)
  "A fair approximation of TYPECASE for limited cases"
  (let ((evaluated (gensym "TYPECASE-EVALUATED-"))
        (unique-types (typecase-unique-types (mapcar #'car clauses))))
    (typecase-check-for-duplicates unique-types)
    (typecase-unreachable-after-t unique-types)
    (typecase-unreachable-after-supertype unique-types)
    `(let ((,evaluated ,value))
       (cond
         ,@(mapcar (lambda (clause)
                     (unless (listp clause)
                       (error "Clause in TYPECASE is not a list? ~a"
                              clause))
                     (destructuring-bind (types &rest body) clause
                       `((typep ,evaluated ',types)
                         ,@(or body (cons nil nil)))))
                   clauses)))))

(defmacro jscl/cl::etypecase (value &rest clauses)
  (let ((evaluated (gensym "ETYPECASE-VALUE-"))
        (unique-types (typecase-unique-types (mapcar #'car clauses))))
    (when (member t unique-types)
      (warn "ETYPECASE contains type T, which matches everything; ~
nothing will fall through this case"))
    `(let ((,evaluated ,value))
       (jscl/cl::typecase ,evaluated
         ,@clauses
         (t (error "~S (type: ~s) fell through etypecase expression.
Expected one of: ~a"
                   ,evaluated (type-of ,evaluated)
                   ,(format nil "~{~a~^, ~}"
                            (sort unique-types #'string<
                                  :key #'symbol-name))))))))


;;; Standard  compound type  specifiers  based on  the  regular types  —
;;; numeric and array types

(defun make-numeric-range-check-predicate (type)
  (lambda (object &optional min max)
    (and (typep object type)
         (cond
           ((or (eql '* min)
                (null min)) t)
           ((and (consp min)
                 (numberp (car min))
                 (null (cdr min))
                 (< (car min) object)))
           ((numberp min) (<= min object)))
         (cond
           ((or (eql '* max)
                (null max)) t)
           ((and (consp max)
                 (numberp (car max))
                 (null (cdr max))
                 (> (car max) object)))
           ((numberp max) (>= max object))))))


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


(defun equalp-or-* (a b)
  "Every member  of the  sequences A and  B must be  EQUAL or  * (Kleene
star)."
  (every (lambda (x y)
           (or (equal x y)
               (eql '* x)
               (eql '* y)))
         a b))

(defun normalize-array-dimensions-spec (dimensions)
  (etypecase dimensions
    (integer dimensions)
    (cons (if (null (cdr dimensions))
              (if (null (car dimensions))
                  '*
                  (car dimensions))
              dimensions))))

(defun compound-array-type-p (object element-type &optional dimensions)
  (let ((dim (normalize-array-dimensions-spec dimensions))
        (my-dim (normalize-array-dimensions-spec
                 (array-dimensions object))))
    (if (stringp object)
        (and (find element-type '(t character))
             (cond
               ((null dimensions) t)
               ((eql dimensions '*) t)
               ((integerp dimensions) (= (length object) dim))
               (t nil)))
        (and (subtypep (array-element-type object) element-type)
             (or (null dimensions)
                 (if (consp dim)
                     (and (= (length my-dim)
                             (length dim))
                          (equalp-or-* my-dim dim))
                     (or (eql dim '*)
                         (eql my-dim '*)
                         (= dim my-dim))))))))

(defun find-built-in-class (name)
  (or (let ((b (lookup-in-lexenv name *environment* 'class)))
        (when b
          (binding-value b)))
      (error "~s does not name a built-in class" name)))




;;; Subclass hierarchy of the standard classes

(defparameter +standard-class-subclasses+
  '((arithmetic-error division-by-zero floating-point-inexact
     floating-point-invalid-operation floating-point-overflow
     floating-point-underflow)
    (function generic-function standard-generic-function
     compiled-function)
    (simple-condition simple-error simple-type-error simple-warning)
    (array simple-string base-string simple-vector bit-vector string
     vector simple-array simple-base-string simple-bit-vector)
    (generic-function standard-generic-function)
    (atom arithmetic-error function simple-condition array
     generic-function simple-error hash-table simple-string base-char
     integer simple-type-error base-string keyword simple-vector bignum
     simple-warning bit logical-pathname single-float bit-vector
     long-float standard-char broadcast-stream method standard-class
     built-in-class method-combination standard-generic-function
     cell-error standard-method character null standard-object class
     number storage-condition compiled-function package stream complex
     package-error stream-error concatenated-stream parse-error string
     condition pathname string-stream print-not-readable structure-class
     control-error program-error structure-object division-by-zero
     random-state style-warning double-float ratio symbol echo-stream
     rational synonym-stream end-of-file reader-error error readtable
     two-way-stream extended-char real type-error file-error restart
     unbound-slot file-stream unbound-variable fixnum serious-condition
     undefined-function float short-float unsigned-byte
     floating-point-inexact signed-byte vector
     floating-point-invalid-operation simple-array warning
     floating-point-overflow simple-base-string floating-point-underflow
     simple-bit-vector)
    (simple-string simple-base-string)
    (base-char standard-char)
    (integer bignum bit fixnum unsigned-byte signed-byte)
    (base-string simple-base-string)
    (list null cons)
    (single-float short-float)
    (bit-vector simple-bit-vector)
    (long-float double-float)
    (method standard-method)
    (cell-error unbound-slot unbound-variable undefined-function)
    (character base-char standard-char extended-char)
    (standard-object generic-function method standard-class
     built-in-class method-combination standard-generic-function
     standard-method class structure-class)
    (class standard-class built-in-class structure-class)
    (number integer bignum bit single-float long-float complex
     double-float ratio rational real fixnum float short-float
     unsigned-byte signed-byte)
    (compiled-function generic-function standard-generic-function)
    (stream broadcast-stream concatenated-stream string-stream
     echo-stream synonym-stream two-way-stream file-stream)
    (stream-error end-of-file reader-error)
    (parse-error reader-error)
    (string simple-string base-string simple-base-string)
    (condition arithmetic-error simple-condition simple-error
     simple-type-error simple-warning cell-error storage-condition
     package-error stream-error parse-error print-not-readable
     control-error program-error division-by-zero style-warning
     end-of-file reader-error error type-error file-error unbound-slot
     unbound-variable serious-condition undefined-function
     floating-point-inexact floating-point-invalid-operation warning
     floating-point-overflow floating-point-underflow)
    (pathname logical-pathname)
    (structure-object hash-table logical-pathname broadcast-stream
     package concatenated-stream pathname random-state echo-stream
     synonym-stream readtable two-way-stream restart)
    (double-float long-float)
    (symbol keyword null)
    (rational integer bignum bit ratio fixnum unsigned-byte signed-byte)
    (error arithmetic-error simple-error simple-type-error cell-error
     package-error stream-error parse-error print-not-readable
     control-error program-error division-by-zero end-of-file
     reader-error type-error file-error unbound-slot unbound-variable
     undefined-function floating-point-inexact
     floating-point-invalid-operation floating-point-overflow
     floating-point-underflow)
    (two-way-stream echo-stream)
    (real integer bignum bit single-float long-float double-float ratio
     rational fixnum float short-float unsigned-byte signed-byte)
    (type-error simple-type-error)
    (sequence simple-string base-string simple-vector list bit-vector
     null string cons vector simple-base-string simple-bit-vector)
    (fixnum bit)
    (serious-condition arithmetic-error simple-error simple-type-error
     cell-error storage-condition package-error stream-error parse-error
     print-not-readable control-error program-error division-by-zero
     end-of-file reader-error error type-error file-error unbound-slot
     unbound-variable undefined-function floating-point-inexact
     floating-point-invalid-operation floating-point-overflow
     floating-point-underflow)
    (float single-float long-float double-float short-float)
    (short-float single-float)
    (unsigned-byte bit)
    (signed-byte integer bignum bit fixnum unsigned-byte)
    (vector simple-string base-string simple-vector bit-vector string
     simple-base-string simple-bit-vector)
    (simple-array simple-string simple-vector simple-base-string
     simple-bit-vector)
    (warning simple-warning style-warning)))

(defun init-standard-class-subclasses% ()
  (dolist (hierarchy +standard-class-subclasses+)
    (destructuring-bind (class &rest subclasses) hierarchy
      (dolist (subclass subclasses)
        (let ((metaclass (ignore-errors (find-built-in-class subclass))))
          (cond (metaclass
                 (push class (built-in-class-superclasses metaclass)))
                (t
                 (setq metaclass 
                       (make-binding
                        :name subclass
                        :type 'type
                        :value (make-type-definition
                                :name subclass
                                :supertypes (list class)
                                :predicate
                                (lambda (object)
                                  (subtypep (car (storage-vector-kind object))
                                            subclass))
                                :class :FIXME)))
                 (push-to-lexenv metaclass *global-environment* 'type))))))))

(defun validate-standard-class-subclasses% ()
  (dolist (hierarchy +standard-class-subclasses+)
    (destructuring-bind (class &rest subclasses) hierarchy
      (dolist (subclass subclasses)
        (unless (subtypep subclass class)
          (warn "Standard class ~s should have subclass ~s"
                class subclass))))))



(defparameter +basic-types+
  '((hash-table hash-table-p atom)
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

(defun init-built-in-basic-types% ()
  (dolist (type-info +basic-types+)
    (destructuring-bind (name predicate &rest supertypes) type-info 
      (push-to-lexenv
       (make-binding :name name
                     :type 'type
                     :value
                     (make-type-definition :name name
                                           :supertypes supertypes
                                           :predicate predicate))
       *global-environment*
       'type))))



(defun init-numeric-compound-predicates% ()
  (dolist (type '(number integer real rational
                  float single-float double-float long-float))
    (setf (type-definition-predicate
           (find-type-definition type))
          (make-numeric-range-check-predicate type))))

(defun init-string-predicate% ()
  (setf (type-definition-predicate
         (find-type-definition 'string))
        (lambda (object length)
          (and (stringp object)
               (= length (length object))))))

(defun init-standard-type/classes% ()
  (dolist (type-name +standard-type-specifiers+)
    (push-to-lexenv
     (make-binding :name type-name
                   :type 'class
                   :value (make-built-in-class
                           :name type-name))
     *global-environment*
     'class)
    (unless (subtypep type-name t)
      (warn "Standard type ~s is not properly defined" type-name))))

(defun init-built-in-types% ()
  "Initializes the class/type hierarchy for the bult-in types."
  (init-built-in-basic-types%)
  (init-numeric-compound-predicates%)
  (init-string-predicate%)
  (setf (type-definition-predicate (find-type-definition 'array))
        #'compound-array-type-p)
  (init-standard-type/classes%)
  (init-standard-class-subclasses%)
  (validate-standard-class-subclasses%))
