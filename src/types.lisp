;;; -*- mode:lisp; coding:utf-8 -*-

;;; Tiny type system for JSCL
;;; @vkm
(/debug "loading types.lisp!")


(defvar *types* (make-hash-table :test #'eq))

(defvar *structures* (make-hash-table :test #'eq))

(defvar *class-table* (make-hash-table :test #'eq))

;;; another member from ccl
(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun memq (item list)
    (while list
      (if (eq item (car list)) (return list))
      (setq list (cdr list))))


;;; lighweight mapcar
;;; CL-USER> (time (dotimes (i 1000) (mapcar (lambda (x) (list x)) '(1 2 3 4))))
;;; Execution took 0.032 seconds.
;;; CL-USER> (time (dotimes (i 1000) (%lmapcar (lambda (x) (list x)) '(1 2 3 4))))
;;; Execution took 0.008 seconds.
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

;;; defstruct - internal, shortly version
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
    (stream            streamp        t    t )
    (atom              atom           t    t )
    (structure         structure-p    t    t )
    (js-object         js-object-p    t    t )
    (js-null           js-null-p      t    t )
    (mop-object        mop-object-p   nil  t)
    (character         characterp     t    t )
    ;; symbol relations
    (symbol            symbolp        t    t )
    (keyword           keywordp       t    symbol t)
    ;; callable relations
    (function          functionp     t    t )
    ;; numeric relations
    (number            numberp       t    t)
    (real              realp         t    number t)
    ;;(rational          rationalp     t    real   number t)
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

;;; for clos unify
(defun %build-inherit-types (for)
  (%lmapcar #'class-name (class-precedence-list (find-class for))))

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

;;; type expander
(defun type-expand-1 (type)
  (unless (symbolp type)
    (unless (listp type)
      (return-from type-expand-1 (values type nil))))
  (let ((expander (get-expander-for type)))
    (cond (expander
           (if (symbolp type)
               (setq type (list type)))
           (values (funcall expander type) t))
          ((and (consp type)
                (cadr type))
           (multiple-value-bind (expansion expanded-p)
               (type-expand (cadr type))
             (if expanded-p
                 (values (list* (first type) expansion (cddr type)) t)
                 (values type nil))))
          (t (values type nil)))))

(defun type-expand (form)
  (let ((expanded-p nil))
    (while t
      (multiple-value-bind (expander continue)
          (type-expand-1 form)
        (unless continue
          (return-from type-expand
            (values expander expanded-p)))
        (setq expanded-p t
              form expander)))))

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun !typep (object type-specifier)
    (if (eql type-specifier 'nil)
        (return-from !typep nil))
    (if (std-instance-p type-specifier)
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
                          ((std-instance-class object)
                           (class-name object)))))
          (if class-object
              (return-from !typep
                (%subclass (%class-cpl class-object) type-specifier)))))
    (multiple-value-bind (expansion expanded-p)
        (type-expand type-specifier)
      (if expanded-p
          (!typep object expansion)
          (error "Unknown type-specifier ~a."  type-specifier)))))

;;; EOF

