;;;; types.lisp — JSCL type system

(in-package :jscl) #-jscl-xc #.(error "Do not load this file in the host compiler")

(/debug "Loading types.lisp…")

(defvar *types* ())

#.(assert (!macro-function 'defstruct)
          ()
          "DEFSTRUCT should have been defined by defstruct.lisp before this file was loaded.")

(defstruct type-definition
  name supertypes lambda-list body
  ornate-predicate)

(defun subtypep (subtype supertype)
  (let ((sub (find-type-definition subtype))
        (known-supertypes (type-definition-supertypes sub)))
    (or (find supertype known-supertypes)
        (some (lambda (type)
                (subtypep subtype type))
              (mapcan
               (lambda (type)
                 (type-definition-supertypes type))
               known-supertypes)))))

(defun most-specific-type (type &rest rest)
  (let ((next (and rest (car rest)))
        (more (and rest (cdr rest))))
    (cond
      (more (reduce #'most-specific-type (cons type rest)))
      ((subtypep next type) type)
      (t type))))

(defun type-of (value)
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

(defmacro deftype (name lambda-list &body body)
  `(push (make-type-definition :name ',name
                               :supertypes '(jscl::user-deftype)
                               :ornate-predicate
                               ,(let ((object (gensym "OBJECT-")))
                                  `(lambda ,(cons object lambda-list)
                                     (typep ,object ',@body))))
         *types*))

(dolist (type-info '((hash-table hash-table-p atom)
                     (number numberp atom)
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
  (destructuring-bind (name ornate-predicate supertypes)
      (push (make-type-definition :name name
                                  :supertypes supertypes
                                  :predicate predicate)
            *types*)))

(defun find-type-definition (type)
  (find type *types* :key #'type-definition-name))

(defun typep (object type &optional environment)
  (cond
    ((consp type)
     (let ((ornate-predicate (type-defition-ornate-predicate
                              (find-type-definition (car type)))))
       (if ornate-predicate
           (apply ornate-predicate object (cdr type))
           (error "Can't handle type specifier ~s; is it valid?"
                  type))))
    ((symbolp type)
     (funcall (type-definition-predicate
               (find-type-definition type))
              object))
    (t (error "~s is not a valid type specifier" type))))

(defmacro check-type (place type &optional type-string)
  "Signal a restartable  error of type TYPE-ERROR if the  value of PLACE
is not of the  specified type. If an error is  signalled and the restart
is used  to return, this can  only return if the  STORE-VALUE restart is
invoked. In that case it will store into PLACE and start over."
  (let (new-value (gensym "NEW-VALUE-"))
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

(defmacro typecase (x &rest clausules)
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

(defmacro etypecase (x &rest clausules)
  (let ((g!x (gensym "ETYPECASE-VALUE-")))
    `(let ((,g!x ,x))
       (typecase ,g!x
         ,@clausules
         (t (error "~S fell through etypecase expression." ,g!x))))))

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

(progn
  (dolist (type '(number integer real rational
                  float single-float double-float long-float))
    (setf (type-definition-ornate-predicate
           (find-type-definition type))
          (make-numeric-range-check-predicate type)))
  (setf (type-definition-ornate-predicate
         (find-type-definition 'string))
        (lambda (object length)
          (and (stringp object)
               (= length (length object)))))

  (setf (type-definition-ornate-predicate
         (find-type-definition 'array))
        (lambda (object element-type &optional dimensions)
          (if (stringp object)
              (and (find element-type '(t character))
                   (etypecase dimensions
                     (null t)
                     (integer (= (length object) dimensions))
                     (cons (and (integerp (car object))
                                (null (cdr object))
                                (= (length object)
                                   (car dimensions))))))
              (and (subtypep (array-element-type object) element-type)
                   (equalp (array-dimensions object) dimensions))))))
