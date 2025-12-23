;;; -*- mode:lisp; coding:utf-8 -*-

;;; Tiny type system for JSCL  @vkm
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

(/debug "loading types.lisp!")

;;; for internal used only
(defun true () t)
(defun false () nil)
(defun void () (values))

;;; For to accurately definition  LIST and CONS forms.
;;; Now inferno gate is opened. Welcome to DOOM
;;;
;;; (typep form
;;;    (cons
;;;      (cond ((true-cons-p form) .... code sensetive for cons)
;;;            (t  ...))))
;;; (true-list-p '(1 2 3 . t)) => nil
;;; (true-consp-p '(1 2 3 . t)) => t
;;;
;;; todo: rename true-cons-p -> dotted-pair-p
;;;       move to list.lisp
(defun true-cons-p (form)
  (%js-try
   (progn
     (list-length form)
     nil)
   (catch (err)
     t)))

;;; pure list predicate: (true-list-p (cons 1 2)) => nil
;;;                      (listp (cons 1 2)) => t
;;; todo: rename true-list-p -> proper-list-p
;;;       move to list.lisp
(defun true-list-p (obj) (and (consp obj) (not (true-cons-p obj))))

(defun get-expander-for (type)
  (let ((exists (%deftype-info (if (symbolp type) type (car type)) nil)))
    (if exists (type-info-expand exists))))

(defun get-compound-for (type)
  (let ((exists (%deftype-info (if (symbolp type) type (car type)) nil)))
    (if exists (type-info-compound exists))))

(defun get-predicate-for (type)
  (let ((exists (%deftype-info (if (symbolp type) type (car type)) nil)))
    (if exists (type-info-predicate exists))))

(defparameter *types-basic-types*
  ;; name              predicate     class super-class rest
  '((hash-table        hash-table-p   t    t )
    (package           packagep       t    t )
    ;;(stream            streamp        t    t )
    (atom              atom           t    t )
    ;;(structure         structure-p    t    t )
    (js-object         js-object-p    t    t )
    (js-null           js-null-p      t    t )
    (clos-object       mop-object-p   nil  t)
    (character         characterp     t    t )
    ;; symbol relations
    (symbol            symbolp        t    t )
    (keyword           keywordp       t    symbol t)
    ;; callable relations
    (function          functionp     t    t )
    ;; numeric relations
    (number            numberp       nil    t)
    (real              realp         nil   number t)
    (rational          rationalp     nil   rational  real   number t)
    ;;(float             floatp        t    real   number t)
    ;;(integer           integerp      t    rational  real   number t)
    (float             floatp        t    number t)
    (integer           integerp      t    number t)
    ;; sequnce relations  
    (sequence          sequencep      nil    t)
    (list              listp          t    sequence t)
    (cons              consp          t    list sequence t)
    (array             arrayp         t    sequence t)
    (vector            vectorp        t    array sequence t)
    (string            stringp        t    vector array sequence t)
    (null              null           t    list sequence t)
    (nil               null           nil  list sequence t)
    (t                 true           nil  t)))

(def!struct basic-type name predicate class-of supertype tpl)

(defvar *builtin-types* (make-hash-table :test #'eql)  "hand off")

(let ((tip))
  (/debug "            compile basic types")
  (dolist (it *types-basic-types*)
    (destructuring-bind (name predicate class-of &rest  tpl) it
      (setq tip (make-basic-type
                 :name name
                 :predicate predicate
                 :supertype (car tpl)
                 :class-of class-of
                 :tpl tpl))
      (setf (gethash name *builtin-types*) tip)
      (%deftype name :predicate predicate))))

(defun builtin-type-p (name &optional (content-p nil))
  (let (type-info)
    (setq type-info
          (gethash (if (consp name) (car name) name) *builtin-types*))
    (if (null type-info)
        (values nil nil)
        (if content-p
            (values type-info t)
            (values (if type-info t nil) t)))))

;;; => class-cpl-list::= (name ... name)
;;;   name::= symbol
(defun %class-cpl(class-name)
  (%lmapcar #'class-name (class-precedence-list (find-class class-name nil))))

;;; c1-cpl::= symbol | cpl
;;; c2-name::= symbol | (find-class c2)
(defun %subclass (c1-cpl c2-name)
  (if (memq (if (symbolp c2-name) c2-name (class-name c2-name))
            (if (symbolp c1-cpl) (%class-cpl c1-cpl) c1-cpl))
      t
      nil))

;;; from CLOS std-object.lisp
(defun built-in-class-of (x)
  (typecase x
    (null                         (!find-class 'null))
    (hash-table                   (!find-class 'hash-table))
    (structure                    (!find-class 'structure))
    (stream                       (!find-class 'stream))
    (symbol                       (!find-class 'symbol))
    (keyword                      (!find-class 'keyword))
    ;;(number                       (!find-class 'number))
    ;;(real                         (!find-class 'real))
    ;;(rational                     (!find-class 'rational))
    (integer                      (!find-class 'integer))
    (float                        (!find-class 'float))
    (cons                         (!find-class 'cons))
    (character                    (!find-class 'character))
    (package                      (!find-class 'package))
    (string                       (!find-class 'string))
    (vector                       (!find-class 'vector))
    (array                        (!find-class 'array))
    ;;(sequence                     (!find-class 'sequence))
    (function                     (!find-class 'function))
    (js-object                    (!find-class 'js-object))
    ;;; and Root of the Evil
    (t                            (!find-class 't))))

;;; type expander
(defun %type-expand-1 (type)
  (if (or (symbolp type) (consp type))
      (let ((expander (get-expander-for type)))
        (if expander
            (values (funcall expander (ensure-list type)) t)
            (values type nil)))
      (values type nil)))

(defun %type-expand (form)
  (let ((expanded-p nil))
    (while t
      (multiple-value-bind (expander continue)
          (%type-expand-1 form)
        (unless continue
          (return-from %type-expand
            (values expander expanded-p)))
        (setq expanded-p t
              form expander)))))

;;; very simple logic
;;; complicate logic - increase execution time
(defun %unwanted-types (thing)
  (if (or (arrayp thing)
          (numberp thing)
          (functionp thing)
          (packagep thing))
      (error "Bad thing to be a type specifier ~a." thing)))

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun !typep (object type-specifier)
    ;; (%unwanted-types type-specifier)
    (if (or (eql type-specifier 't)
            (eql type-specifier 'nil))
        (return-from !typep type-specifier))
    ;; may be any clos form
    (if (mop-object-p type-specifier)
        (return-from !typep (!typep object (class-name type-specifier))))
    ;; may be predicate or class name
    (if (symbolp type-specifier)
        (let ((test (get-predicate-for type-specifier)))
          (if test (return-from !typep (funcall test object)))
          ;; try class name
          (if (gethash type-specifier *class-table*)
              (let ((class-object
                      (cond ((std-instance-p object) (class-name (class-of object)))
                            (t nil))))
                (return-from !typep
                  (and class-object
                       (%subclass (%class-cpl class-object) type-specifier)))))))
    ;; may be compound type specifier
    (let ((test (get-compound-for type-specifier)))
      (if test
          (return-from !typep (funcall test object type-specifier))))
    ;; may be predicate cons form without arguments
    (if (and (consp type-specifier) (null (rest type-specifier)))
        (let ((test (get-predicate-for (car type-specifier))))
          (if test (return-from !typep (funcall test object)))))
    ;; can be a form with any typep specific syntax 
    (multiple-value-bind (expansion expanded-p)
        (%type-expand type-specifier)
      (if expanded-p
          (!typep object expansion)
          (error "Unknown type-specifier ~a."  type-specifier)))))

(defun type-of (object)
  (cond ((js-null-p object) 'js-null)
        ((integerp object)
         (case object
           ((0 1) 'bit)
           (t 'integer)))
        ((characterp object) 'character)
        ((floatp object) 'float)
        ((mop-object-p object) (class-name (class-of object)))
        ((hash-table-p object) 'hash-table)
        ((consp object) 'cons)
        ((stringp object)`(string ,(oget object "length")))
        ((arrayp object)
         (cond ((null (cdr (array-dimensions object)))
                `(vector ,(oget object "length")))
               (t `(array ,(array-dimensions object)))))
        ((symbolp object)
         (cond ((eq object 'nil) 'null)
               ((eq object 't) 'boolean)
               ((keywordp object) 'keyword)
               (t 'symbol)))
        ((functionp object) 'function)
        ((js-object-p object) 'js-object)
        ((packagep object) 'package)
        (t 'unreadable-object)))

;;; numeric [lower-limit [upper-limit]]
(defun check-numeric-limit (limit his-type)
  (when (consp limit)
    (if (rest limit)(error "Bad numeric limit ~a." limit))
    (setq limit (1- (car limit))))
  (unless (or (eql limit '*) (!typep limit his-type))
    (error "Bad numeric limit ~a." limit))
  limit)

(defun canonicalize-numeric-limits (type-specifier limit-type)
  (if (consp type-specifier)
      (let* ((req (validate-reqvars (cdr type-specifier) 0))
             (low (if (null req) '* (car req)))
             (high (if (null (cdr req)) '* (cadr req))))
        (values (check-numeric-limit low limit-type)
                (check-numeric-limit high limit-type) ))
      (values '* '*)))

(defmacro deftype-compound (name lambda-list &body body)
  (multiple-value-bind (body decls docstring)
      (parse-body body :declarations t :docstring t)
    (let* ((compound
             `(function
               (lambda ,lambda-list
                ,@body))))
      `(eval-when (:load-toplevel :execute)
         (%deftype ',name :compound ,compound)))))

(macrolet ((dc (type-name predicate-name limit-type)
               `(deftype-compound ,type-name (object type)
                  (if (,predicate-name object)
                      (multiple-value-bind (min max)
                          (canonicalize-numeric-limits type ',limit-type)
                        (and (or (eql min '*)
                                 (>= object min))
                             (or (eql max '*)
                                 (<= object max))))))))
  (dc integer  integerp integer)
  ;;(dc rational integerp integer)
  (dc number   numberp  number)
  ;;(dc real     numberp  real)
  (dc float    floatp  float))

;;; type compound: (array type dimensions)
(defun %compare-array-type (object type-spec)
  (destructuring-bind (type-base &optional (type-element '*) (type-dimensions '*))
      type-spec
    (let ((object-type (array-element-type object))
          (object-dimensions (array-dimensions object)))
      (and
       ;; check element type
       (or (eq '* type-element)
           ;; TODO: use subtypep
           (not (and (eq object-type 'character) (not (eq type-element 'character)))))
       ;; check dimensions
       (or (eq '* type-dimensions)
           (if (numberp type-dimensions)
               (= type-dimensions (list-length object-dimensions))
               (and (= (list-length type-dimensions)
                       (list-length object-dimensions))
                    (every (lambda (axis-object axis-type)
                             (or (eql axis-type '*)
                                 (= axis-object axis-type)))
                           object-dimensions
                           type-dimensions))))))))

(defun %canonical-array-dimensions (dims)
  (cond ((consp dims)
         (dolist (it dims t)
           (cond ((eq it '*))
                 ((non-negative-fixnump it))
                 (t (error "Bad dimension in array type ~a." it)))))
        ((non-negative-fixnump dims) t)
        ((eq dims '*) t)
        ((null dims) t)
        (t (error "Bad dimensions form in array type ~a." dims))))


(deftype-compound array (object type-spec)
  (and (arrayp object)
       (%canonical-array-dimensions (caddr type-spec))
       (%compare-array-type object type-spec)))

;;; (cons * *) (cons thing aught)
(deftype-compound cons (object type)
  (if (consp object)
      (destructuring-bind (&optional (t1 '*) (t2 '*)) (cdr type)
        (if (eq t1 '*) (setq t1 't))
        (if (eq t2 '*) (setq t2 't))
        (and (or (eql t1 't)
                 (!typep (car object) t1))
             (or (eql t2 't)
                 (!typep (cdr object) t2))))))

;;; (list-length *) | (list-length 0) | (list-length n)
;;;      (typep (list) '(list-length 0))
;;;      (typesace x ((list-length 1) :ok) ((list-length 0) :bad))
(deftype-compound  list-length (object type)
  (when (listp object)
    (if (not (true-cons-p object))
        (destructuring-bind (&optional (size '*))
            (cdr type)
          (cond ((eq size '*) t)
                ((non-negative-fixnump size)
                 (eq size (list-length object)))
                (t (error "Bad type list size specificator ~a." type)))))))

;;; (satisfies predicate)
(deftype-compound  satisfies (object type)
  (let ((fn (cadr type)))
    (unless (or (symbolp fn) (functionp fn))
      (error "Not satisfies function ~a." fn))
    (funcall fn object)))

;;; (or expr .... expr*)
(deftype-compound  or (object type)
  (dolist (it (cdr type))
    (if (!typep object it) (return t))))

;;; (and expr ... expr*)
(deftype-compound  and (object type)
  (dolist (it (cdr type) t)
    (if (not (!typep object it)) (return nil))))

;;; (not type-specifier)
(deftype-compound  not (object type)
  (not (!typep object (cadr type))))

;;; (member object ... object*)
(deftype-compound member (object type)
  (dolist (o (cdr type))
    (if (eql object o) (return t))))

;;; (eql value)
(deftype-compound eql (object type)
  (eql object (cadr type)))


;;; todo: canonical deftype lambda-list
(defmacro deftype (name (&rest args) &body body)
  (if (null args)
      (setq args '(&optional ignore)))
  (multiple-value-bind (body decls docstring)
      (parse-body body :declarations t :docstring t)
    (let* ((expr (gensym (symbol-name name)))
           (expander
             `(function
               (lambda (,expr)
                (destructuring-bind ,args (cdr ,expr)
                  ,@body)))))
      `(progn
         (%deftype ',name :expander ,expander)
         ',name))))

;;; predefenition types
;;; (mod n) -> (1- n)
(deftype mod (n)
  (unless (and (integerp n) (plusp n)) (error "Type (mod ~a)." n))
  `(integer 0 (,n)))

;;; (typep 1|0 '(bit)) -> t
(deftype bit () `(integer 0 1))

(deftype fixnum ()
  `(integer ,most-negative-fixnum ,most-positive-fixnum))

(deftype bignum ()
  ;; and integer not fixnum
  `(and integer (not (integer ,most-negative-fixnum ,most-positive-fixnum))))

;;; (signed-byte) |(signed-byte *)!(signed-byte n)
(deftype signed-byte (&optional (s '*))
  (cond ((eq s '*) 'integer)
        ((and (integerp s) (> s 0))
         (let ((bound (ash 1 (1- s)))) `(integer ,(- bound) ,(1- bound))))
        (t (error "Bad size specified for SIGNED-BYTE type specifier: ~a."  s))))

;;; (typep x 'jscl::signed-byte-8)
(deftype signed-byte-8 ()
  `(and (satisfies fixnump) (integer -128  #x100)))

;;; (typep x 'jscl::signed-byte-16)
(deftype signed-byte-16 ()
  `(and (satisfies fixnump) (integer -32768 32767)))

;;; (typep x 'jscl::signed-byte-16)
(deftype signed-byte-32 ()
  `(and (satisfies bignump) (integer  -2147483648 2147483647)))

;;; (typep x '(usigned-byte 8!16|32|4|number|*))
;;;          | '(usigned-byte)
(deftype unsigned-byte (&optional (s '*))
  (cond ((eq s '*) '(integer 0 *))
        ((and (integerp s) (> s 0)) `(integer 0 ,(1- (ash 1 s))))
        (t (error "Bad size specified for UNSIGNED-BYTE type specifier: ~a."  s))))

;;; jscl::unsigned-byte-8
(deftype unsigned-byte-8 ()
  `(and (satisfies fixnump) (integer 0 #x100)))

;;; jscl::unsigned-byte-16
(deftype unsigned-byte-16 ()
  `(and (satisfies fixnump) (integer 0 (#x10000))))

;;; jscl::unsigned-byte-32
(deftype unsigned-byte-32 ()
  `(and (satisfies fixnump) (integer 0 #xffffffff)))

(deftype string (&optional (size '*))
  `(array character (,size)))

(deftype vector (&optional (type '*) (size '*))
  `(array ,type (,size)))

#+jscl (fset 'typep (fdefinition '!typep))

(push :types *features*)

;;; EOF

