;;; -*- mode:lisp; coding:utf-8 -*-

;;; Tiny type system for JSCL
;;; @vkm
(/debug "loading types.lisp!")

;;; DEFTYPE
(defvar *types* (make-hash-table :test #'eq))
;;; DEFSTRUCT
(defvar *structures* (make-hash-table :test #'eq))
;;; DEFCLASS
(defvar *class-table* (make-hash-table :test #'eq))

;;; another member from ccl
(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun memq (item list)
    (while list
           (if (eq item (car list)) (return list))
           (setq list (cdr list)))))


;;; lightweight mapcar
(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun %lmapcar (fn list)
    (let* ((ret-list (list nil))
           (temp ret-list)
           (res nil))
      (while list
        (setq res (funcall fn (car list))
              list (cdr list))
        (setf (cdr temp) (list res)
              temp (cdr temp)))
      (cdr ret-list)))
  )

;;; internal unsafe defstruct version
(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun %struct-generator (kind options slots)
    (let* ((constructor (cadr (assoc :constructor options)))
           (keys (cadr (assoc :form options)))
           (names (mapcar (lambda (x) (if (consp x) (car x) x)) slots))
           (option (if keys keys '&optional))
           (maker)
           (makname (if constructor
                        (intern (symbol-name constructor))
                        (intern (concat "%MAKE-" (symbol-name `,kind)))))
           (getter)
           (position 0)
           (q))
      (unless (memq option '(&key &optional)) (error "Something went wrong: ~a." options))
      (setq maker
            `(defun ,makname (,option ,@slots)  (list ,@names)))
      (dolist (it names)
        (setq getter (intern (concat (symbol-name kind) "-" (symbol-name it))))
        (push `(defun ,getter (storage)(nth ,position storage)) q)
        (push `(defun (setf ,getter) (value storage)
                 (rplaca (nthcdr ,position storage) value) value)
              q)
        (incf position))
      (values maker (reverse q)))))

(defmacro %i-struct (name-options &rest slots)
  (let* ((name-options (ensure-list name-options))
         (name (car name-options))
         (options (rest name-options)))
    (multiple-value-bind (maker accessors) (%struct-generator name options slots)
      `(progn
         ,maker
         ,@accessors))))

(%i-struct (type-info (:form &key)) name expand compound predicate)

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun %deftype-info (name &optional (create t))
    (unless (symbolp name) (error "Not a symbol ~a." name))
    (let ((exists (gethash name *types*)))
      (cond ((and (not exists) create)
             (setq exists (%make-type-info :name name))
             (setf (gethash name *types*) exists))
            (t exists)))))

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun %deftype (name &key expander compound predicate)
    (let ((type (%deftype-info name)))
      (when expander
        (setf (type-info-expand type) expander) )
      (when compound
        (setf (type-info-compound type) compound))
      (when predicate
        (setf (type-info-predicate type) predicate)))))

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
    (number            numberp       t    t)
    (real              realp         t    number t)
    (rational          rationalp     t    rational  real   number t)
    (float             floatp        t    real number t)
    (integer           integerp      t    real number t)
    ;; sequnce relations  
    (sequence          sequencep      t    t)
    (list              listp          t    sequence t)
    (cons              consp          t    list sequence t)
    (array             arrayp         t    sequence t)
    (vector            vectorp        t    array sequence t)
    (string            stringp        t    vector array sequence t)
    (null              null           t    list sequence t)
    (nil               null           nil  list sequence t)
    (t                 true           nil  t)))

(%i-struct (basic-type (:form &key))  name predicate class-of supertype tpl)

(defvar *builtin-types* (make-hash-table :test #'eql)  "hand off")

(let ((tip))
  (/debug "            compile basic types")
  (dolist (it *types-basic-types*)
    (destructuring-bind (name predicate class-of supertype &rest tpl) it
      (setq tip (%make-basic-type
                 :name name
                 :predicate predicate
                 :supertype supertype
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
    (sequence                     (!find-class 'sequence))
    (function                     (!find-class 'function))
    (js-object                    (!find-class 'js-object))
    ;;; and Root of the Evil
    (t                            (!find-class 't))))

;;; type expander
(defun %type-expand-1 (type)
  (unless (symbolp type)
    (unless (consp type)
      (return-from %type-expand-1 (values type nil))))
  (let ((expander (get-expander-for type)))
    (cond (expander
           (if (symbolp type)
               (setq type (list type)))
           (values (funcall expander type) t))
          ((and (consp type)
                (cadr type))
           (multiple-value-bind (expansion expanded-p)
               (%type-expand (cadr type))
             (if expanded-p
                 (values (list* (car type) expansion (cddr type)) t)
                 (values type nil))))
          (t (values type nil)))))

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

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun !typep (object type-specifier)
    (if (eql type-specifier 'nil)
        (return-from !typep nil))
    (if (mop-object-p type-specifier)
        (return-from !typep (!typep object (class-name type-specifier))))
    (let ((may-be-predicate
            (cond ((symbolp type-specifier) type-specifier)
                  ((and (consp type-specifier)(null (rest type-specifier)))
                   (car type-specifier))
                  (t nil))))
      (if may-be-predicate
          (let ((test  (get-predicate-for may-be-predicate)))
            (if test
                (return-from !typep (funcall test object))))))
    (let ((test (get-compound-for type-specifier)))
      (if test
          (return-from !typep (funcall test object type-specifier))))
    (if (symbolp type-specifier)
        (let ((class-object nil))
          (if (find-class type-specifier nil)
              (setq class-object
                    (cond ((std-instance-p object)
                           (class-name (class-of object)))
                          ;; fixme: 
                          ((std-instance-class object)
                           (class-name object)))))
          (if class-object
              (return-from !typep
                (%subclass (%class-cpl class-object) type-specifier)))))
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

(defmacro deftype-compound (&whole whole name args &body body)
  (destructuring-bind (name lambda-list &body body) whole
    (multiple-value-bind (body decls docstring)
        (parse-body body :declarations t :docstring t)
      (let* ((compound
               `(function
                 (lambda ,lambda-list
                  ,@body))))
        `(eval-when (:load-toplevel :execute)
           (%deftype ',name :compound ,compound))))))

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

;;; (array type dimensions)
(defun %compare-array-type (object type-spec)
  (destructuring-bind (type-base &optional (type-element '*) (type-dimensions '*))
      type-spec
    (let ((object-type (array-element-type object))
          (object-dimensions (array-dimensions object)))
      (when (eq type-element 'character)
        (if (not (eq object-type 'character))
            (return-from '%compare-array-type nil)))
      (when (null object-dimensions)
        (setq object-dimensions (list (oget object "length"))))
      (cond ((numberp type-dimensions)
             (setq type-dimensions (make-list type-dimensions :initial-element '*)))
            (t (if (eql '* type-dimensions)
                   (setq type-dimensions
                         (make-list (list-length object-dimensions) :initial-element '*)))))
      (cond ((not (eql (list-length type-dimensions)
                       (list-length object-dimensions)))
             nil)
            ((equal (make-list (list-length type-dimensions) :initial-element 't)
                    (mapcar
                     (lambda (axis-object axis-type)
                       (cond ((eql axis-type '*) t)
                             ((eql axis-object '*) nil)
                             (t (= axis-object axis-type))))
                     object-dimensions
                     type-dimensions)))))))

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

;;; (cons * *) (cons thing thing)
(deftype-compound cons (object type)
  (if (consp object)
      (destructuring-bind (&optional (t1 '*) (t2 '*)) (cdr type)
        (if (eq t1 '*) (setq t1 't))
        (if (eq t2 '*) (setq t2 't))
        (and (or (eql t1 't)
                 (!typep (car object) t1))
             (or (eql t2 't)
                 (!typep (cdr object) t2))))))

;;; (list *) | (list) | (list length)
;;; non canonical type spec
(deftype-compound  list-size (object type)
  (when (consp object)
    (if (not (true-cons-p object))
        (destructuring-bind (&optional (size '*)) (cdr type)
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
(defmacro deftype (&whole whole name lambda-list &body body)
  (destructuring-bind (name args &body body) whole
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
           ',name)))))

;;; predefenition types
(deftype mod (n)
  (unless (and (integerp n) (plusp n)) (error "Type (mod ~a)." n))
  `(integer 0 (,n)))

(deftype bit () `(integer 0 1))

(deftype fixnum ()
  `(integer ,most-negative-fixnum ,most-positive-fixnum))

(deftype bignum ()
  ;; and integer not fixnum
  `(and integer (not (integer ,most-negative-fixnum ,most-positive-fixnum))))

(deftype signed-byte (&optional (s '*))
  (cond ((eq s '*) 'integer)
        ((and (integerp s) (> s 0))
         (let ((bound (ash 1 (1- s)))) `(integer ,(- bound) ,(1- bound))))
        (t (error "Bad size specified for SIGNED-BYTE type specifier: ~a."  s))))

(deftype signed-byte-8 ()
  `(and (satisfies fixnump) (integer -128  #x100)))

(deftype signed-byte-16 ()
  `(and (satisfies fixnump) (integer -32768 32767)))

(deftype signed-byte-32 ()
  `(and (satisfies bignump) (integer  -2147483648 2147483647)))

(deftype unsigned-byte (&optional (s '*))
  (cond ((eq s '*) '(integer 0 *))
        ((and (integerp s) (> s 0)) `(integer 0 ,(1- (ash 1 s))))
        (t (error "Bad size specified for UNSIGNED-BYTE type specifier: ~a."  s))))

(deftype unsigned-byte-8 ()
  `(and (satisfies fixnump) (integer 0 #x100)))

(deftype unsigned-byte-16 ()
  `(and (satisfies fixnump) (integer 0 (#x10000))))

(deftype unsigned-byte-32 ()
  `(and (satisfies fixnump) (integer 0 #xffffffff)))

(deftype string (&optional (size '*))
  `(array character (,size)))

(deftype vector (&optional (element-type '*) (size '*))
  `(array ,element-type (,size)))

#+jscl (fset 'typep (fdefinition '!typep))

(push :types *features*)

;;; EOF

