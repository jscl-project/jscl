;;; -*- mode:lisp; coding:utf-8 -*-


;;;
;;; Standard instances
;;; Original code closette.lisp, lines 155-728
;;; Modification  @vlad-km, 2019
;;; version for JSCL
;;;
;;; JSCL compilation mode - :both
;;;
;;; Release note
;;; - The names of some functions have been changed from !name to !name, to prevent naming conflicts
;;;   when host compiling. See FSET section from macros.lisp
;;; - Changed the algorithm for working with the slot position in the instance.
;;;   implementation through a hash table.
;;; - Some forms (setf ...) have been replaced by (setf-...).
;;;   So, added setf-... functions
;;; - In some places the argument lists were corrected for JSCL.
;;; - Macro DEFCLASS moved to macros.lisp
;;;

(/debug "loading std-object")


;;; @vlad-km
;;; add hash/cn slots
(def!struct (std-instance (:constructor allocate-std-instance (class slots hash cn))
                          (:predicate std-instance-p))
  class
  slots
  hash
  cn)


;;; Standard instance allocation
(defparameter *secret-unbound-value* (list "slot unbound"))

(defun instance-slot-p (slot)
  (eql (slot-definition-allocation slot) ':instance))


;;; @vlad-km
;;; version for JSCL
(defun std-allocate-instance (class)
  #-jscl
  (allocate-std-instance
   :class class
   :slots (allocate-slot-storage (count-if #'instance-slot-p (class-slots class))
                                 *secret-unbound-value*)
   :hash nil
   :cn nil)
  #+jscl
  (let ((instance
          (allocate-std-instance
           :class class
           :slots (allocate-slot-storage (count-if #'instance-slot-p (class-slots class))
                                         *secret-unbound-value*)
           :hash nil
           :cn nil )))
    (set-object-type-code  instance :mop-object)
    instance ))


;;; Simple vectors are used for slot storage.
(defun allocate-slot-storage (size initial-value)
  (make-array size :initial-element initial-value))

;;; Standard instance slot access

;;; N.B. The location of the effective-slots slots in the class metaobject for
;;; standard-class must be determined without making any further slot
;;; references.

;;; @vlad-km
;;; this artefact from orginal.
;;;(defvar *the-slots-of-standard-class*) ;standard-class's class-slots
;;; replace on below
(defvar *the-slots-of-standard-class*
  '((:NAME NAME :INITARGS (:NAME) :INITFORM NIL :INITFUNCTION NIL :ALLOCATION :INSTANCE)
    (:NAME DIRECT-SUPERCLASSES :INITARGS (:DIRECT-SUPERCLASSES) :INITFORM NIL :INITFUNCTION NIL :ALLOCATION :INSTANCE)
    (:NAME DIRECT-SLOTS :INITARGS NIL :INITFORM NIL :INITFUNCTION NIL :ALLOCATION :INSTANCE)
    (:NAME CLASS-PRECEDENCE-LIST :INITARGS NIL :INITFORM NIL :INITFUNCTION NIL :ALLOCATION :INSTANCE)
    (:NAME EFFECTIVE-SLOTS :INITARGS NIL :INITFORM NIL :INITFUNCTION NIL :ALLOCATION :INSTANCE)
    (:NAME DIRECT-SUBCLASSES :INITARGS NIL :INITFORM NIL :INITFUNCTION NIL :ALLOCATION :INSTANCE)
    (:NAME DIRECT-METHODS :INITARGS NIL :INITFORM NIL :INITFUNCTION NIL :ALLOCATION :INSTANCE))
  "standard-class's class-slots descriptor")

;;; @vlad-km
;;; add hash-table for class-slots-position
(defvar *position-slots-of-standard-class* (make-hash-table :test #'eq)
  "standard-class's class-slots position")


;;; @vlad-km
#+jscl
(mapcar (lambda (x) (setf (gethash (car x) *position-slots-of-standard-class*) (cadr x)))
        '((NAME 0)
          (DIRECT-SUPERCLASSES 1)
          (DIRECT-SLOTS 2)
          (CLASS-PRECEDENCE-LIST 3)
          (EFFECTIVE-SLOTS 4)
          (DIRECT-SUBCLASSES 5)
          (DIRECT-METHODS 6)))

(defvar *the-class-standard-class*)    ;standard-class class metaobject


;;; @vlad-km
;;; add function std-slot-position
(defun std-slot-position (slot-name)
  (gethash slot-name *position-slots-of-standard-class*))

;;; @vlad-km
;;; add function setf-std-instance-hash
(defun setf-std-instance-hash (class ht idx)
  ;; store hash-table
  (setf (std-instance-hash class) ht)
  ;; store slots number
  (setf (std-instance-cn class) idx))


;;; @vlad-km
;;; add constant for slot-location
(defconstant +effective-slot-pos+ 4)


;;; @vlad-km
;;; new version slot-location
(defun slot-location (class slot-name)
  (let ((pos)
        (hash-slots (std-instance-hash class)))
    (cond ((and (eq slot-name 'effective-slots)
                (eq class *the-class-standard-class*))
           (setq pos +effective-slot-pos+))
          (hash-slots
           (setq pos (gethash slot-name hash-slots))
           (unless pos
             ;; debug for boot stage when *standard-output* undef
             (/debug (format nil "The slot ~S is not an instance slot in the class " slot-name))
             (error "The slot ~S is not an instance slot in the class ~S." slot-name class)))
          (t
           (/debug (format nil "The class has not slots table for ~a" slot-name) )
           (error "The class ~a has not slots table" class)))
    pos))



;;; slot-contents
(defun slot-contents (slots location)
  (aref slots location))

;;; @vlad-km
(defun setf-slot-contents (slots location new-value)
  (setf (aref slots location) new-value))


;;; std-slot-value

;;; @vlad-km. replaced (setf ...) form
(defun setf-std-slot-value (instance slot-name new-value)
  (let ((location (slot-location (!class-of instance) slot-name))
        (slots (std-instance-slots instance)))
    (setf-slot-contents slots location new-value)))

(defun std-slot-value (instance slot-name)
  (let* ((location (slot-location (!class-of instance) slot-name))
         (slots (std-instance-slots instance))
         (val (slot-contents slots location)))
    (if (equal *secret-unbound-value* val)
        (error "The slot ~S is unbound in the object ~S."
               slot-name instance)
        val)))

;;; slot-value
(defun !slot-value (object slot-name)
  (if (eq (!class-of (!class-of object)) *the-class-standard-class*)
      (std-slot-value object slot-name)
      (slot-value-using-class (!class-of object) object slot-name)))

;;; @vlad-km. add (setf-...)
(defun setf-slot-value (object slot-name new-value)
  (if (eq (!class-of (!class-of object)) *the-class-standard-class*)
      (setf-std-slot-value object slot-name new-value)
      (setf-slot-value-using-class new-value (!class-of object) object slot-name)))

;;; @vlad-km.
;;; Moved to methods.lisp
#+nil
(defun (setf slot-value) (new-value object slot-name)
  (if (eq (!class-of (!class-of object)) *the-class-standard-class*)
      (setf-std-slot-value object slot-name new-value)
      (setf-slot-value-using-class new-value (!class-of object) object slot-name)))

;;; @vlad-km. add for add-writer-method
(defun (setf !slot-value) (new-value object slot-name)
  (if (eq (!class-of (!class-of object)) *the-class-standard-class*)
      (setf-std-slot-value object slot-name new-value)
      (setf-slot-value-using-class new-value (!class-of object) object slot-name)))


;;; std-slot-boundp
(defun std-slot-boundp (instance slot-name)
  (let ((location (slot-location (!class-of instance) slot-name))
        (slots (std-instance-slots instance)))
    (not (equal *secret-unbound-value* (slot-contents slots location)))))

(defun !slot-boundp (object slot-name)
  (if (eq (!class-of (!class-of object)) *the-class-standard-class*)
      (std-slot-boundp object slot-name)
      (slot-boundp-using-class (!class-of object) object slot-name)))


;;; std-slot-makunbound
(defun std-slot-makunbound (instance slot-name)
  (let ((location (slot-location (!class-of instance) slot-name))
        (slots (std-instance-slots instance)))
    (setf-slot-contents slots location *secret-unbound-value*))
  instance)

(defun !slot-makunbound (object slot-name)
  (if (eq (!class-of (!class-of object)) *the-class-standard-class*)
      (std-slot-makunbound object slot-name)
      (slot-makunbound-using-class (!class-of object) object slot-name)))

;;; std-slot-exists-p
(defun std-slot-exists-p (instance slot-name)
  (not (null (find slot-name (class-slots (!class-of instance))
                   :key #'slot-definition-name))))

(defun !slot-exists-p (object slot-name)
  (if (eq (!class-of (!class-of object)) *the-class-standard-class*)
      (std-slot-exists-p object slot-name)
      (slot-exists-p-using-class (!class-of object) object slot-name)))



;;; class-of

(defun !class-of (x)
  (if (std-instance-p x)
      (std-instance-class x)
      (built-in-class-of x)))

;;; subclassp and sub-specializer-p
(defun subclassp (c1 c2)
  (not (null (find c2 (class-precedence-list c1)))))

(defun sub-specializer-p (c1 c2 c-arg)
  (let ((cpl (class-precedence-list c-arg)))
    (not (null (find c2 (cdr (member c1 cpl)))))))

;;;
;;; Class metaobjects and standard-class
;;;


;;; @vlad-km
;;; note: Artefact from original closette.lisp
;;;       Now not used
#+nil
(defparameter *the-defclass-standard-class*  ;standard-class's defclass form
  '(!defclass standard-class ()
    ((name :initarg :name)              ; :accessor class-name
     (direct-superclasses               ; :accessor class-direct-superclasses
      :initarg :direct-superclasses)
     (direct-slots)                     ; :accessor class-direct-slots
     (class-precedence-list)            ; :accessor class-precedence-list
     (effective-slots)                  ; :accessor class-slots
     (direct-subclasses :initform ())   ; :accessor class-direct-subclasses
     (direct-methods :initform ()))))   ; :accessor class-direct-methods

;;; Defining the metaobject slot accessor function as regular functions
;;; greatly simplifies the implementation without removing functionality.


;;; class-name
(defun setf-class-name (class new-value)
  (setf-slot-value class 'name new-value))

(defun !class-name (class)
  (std-slot-value class 'name))

;;; class-direct-superclasses
(defun class-direct-superclasses (class)
  (!slot-value class 'direct-superclasses))

(defun setf-class-direct-superclasses (class new-value)
  (setf-slot-value class 'direct-superclasses new-value))


;;; class-direct-slots
(defun class-direct-slots (class)
  (!slot-value class 'direct-slots))

(defun setf-class-direct-slots (class new-value)
  (setf-slot-value class 'direct-slots new-value))



;;; class-precedence-list
(defun class-precedence-list (class)
  (!slot-value class 'class-precedence-list))

(defun setf-class-precedence-list (class new-value)
  (setf-slot-value class 'class-precedence-list new-value))



;;; class-slots
(defun class-slots (class)
  (!slot-value class 'effective-slots))

(defun setf-class-slots (class new-value)
  (setf-slot-value class 'effective-slots new-value))


;;; class-direct-subclasses
(defun class-direct-subclasses (class)
  (!slot-value class 'direct-subclasses))

(defun setf-class-direct-subclasses (class new-value)
  (setf-slot-value class 'direct-subclasses new-value))

(defun (setf class-direct-subclasses) (new-value class)
  (setf-slot-value class 'direct-subclasses new-value))


;;; class-direct-methods
(defun class-direct-methods (class)
  (!slot-value class 'direct-methods))

(defun setf-class-direct-methods (class new-value)
  (setf-slot-value class 'direct-methods new-value))

;;; @vlad-km. pushnew
(defun pushnew-class-direct-methods (new-value class)
  (let ((lst (!slot-value class 'direct-methods)))
    (pushnew new-value lst)
    (setf-slot-value class 'direct-methods lst)))


;;; defclass
(eval-always
 (defun canonicalize-direct-superclass (class-name)
   `(!find-class ',class-name))
 (defun canonicalize-direct-superclasses (direct-superclasses)
   (if direct-superclasses
       `(list ,@(mapcar 'canonicalize-direct-superclass direct-superclasses))
       ())))

(eval-always
 (defun canonicalize-direct-slot (spec)
   (if (symbolp spec)
       `(list :name ',spec)
       (let ((name (car spec))
             (initfunction nil)
             (initform nil)
             (initargs ())
             (readers ())
             (writers ())
             (other-options ()))
         (do ((olist (cdr spec) (cddr olist)))
             ((null olist))
           (case (car olist)
             (:initform
              (setq initfunction
                    `(function (lambda () ,(cadr olist))))
              (setq initform `',(cadr olist)))
             (:initarg (push-on-end (cadr olist) initargs))
             (:reader  (push-on-end (cadr olist) readers))
             (:writer  (push-on-end (cadr olist) writers))
             (:accessor
              ;; accessor reader fn
              (push-on-end (cadr olist) readers)
              ;; accessor writer fn
              ;; make (setf name) symbolic name
              (push-on-end `(setf ,(cadr olist)) writers))
             (:documentation)
             (otherwise
              (push-on-end `',(car olist) other-options)
              (push-on-end `',(cadr olist) other-options))))
         `(list
           :name ',name
           ,@(when initfunction
               `(:initform ,initform
                 :initfunction ,initfunction))
           ,@(when initargs `(:initargs ',initargs))
           ,@(when readers `(:readers ',readers))
           ,@(when writers `(:writers ',writers))
           ,@other-options)))))

(eval-always
 (defun canonicalize-direct-slots (direct-slots)
   (if direct-slots
       `(list ,@(mapcar #'canonicalize-direct-slot direct-slots))
       ())))

(eval-always
 (defun canonicalize-defclass-option (option)
   (case (car option)
     (:documentation)
     (:metaclass (list ':metaclass `(!find-class ',(cadr option))))
     (:default-initargs
      (list ':direct-default-initargs
            `(list ,@(mapappend #'(lambda (x) x)
                                (mapplist #'(lambda (key value) `(',key ,value))
                                          (cdr option))))))
     (t (list `',(car option) `',(cadr option))))))

(eval-always
 (defun canonicalize-defclass-options (options)
  (mapappend #'canonicalize-defclass-option options)))

;;; find-class
(defun !find-class (symbol &optional (errorp t))
  (let ((class (gethash symbol *class-table* nil)))
    (if (and (null class) errorp)
        (error "No class named ~S." symbol)
        class)))

(defun setf-find-class (symbol new-value)
  (setf (gethash symbol *class-table*) new-value))

;;; @vlad-km
;;; remove to methods.lisp
;;;
#+nil
(defun (setf find-class) (new-value symbol)
  (setf (gethash symbol *class-table*) new-value))


;;; Ensure class
;;; @vlad-km remove (setf...) form
(defun ensure-class (name &rest all-keys)
  (if (!find-class name nil)
      (error "Can't redefine the class named ~S." name)
      (let* ((metaclass (get-keyword-from all-keys :metaclass *the-class-standard-class*))
             (class (apply (if (eq metaclass *the-class-standard-class*)
                               #'make-instance-standard-class
                               #'make-instance)
                           metaclass :name name all-keys)))
        (setf-find-class name class)
        class)))


;;; make-instance-standard-class creates and initializes an instance of
;;; standard-class without falling into method lookup.  However, it cannot be
;;; called until standard-class itself exists.


(defun make-instance-standard-class (metaclass &rest all-keys)
  (declare (ignore metaclass ))
  (let ((name (get-keyword-from all-keys :name))
        (direct-superclasses (get-keyword-from all-keys :direct-superclasses))
        (direct-slots (get-keyword-from all-keys :direct-slots))
        (class (std-allocate-instance *the-class-standard-class*)))
    (setf-class-name class name)
    (setf-class-direct-subclasses class ())
    (setf-class-direct-methods class ())
    (std-after-initialization-for-classes class
                                          :direct-slots direct-slots
                                          :direct-superclasses direct-superclasses)
    class))

(defun std-after-initialization-for-classes (class &rest all-keys)
  (let* ((direct-superclasses (get-keyword-from all-keys :direct-superclasses))
         (direct-slots (get-keyword-from all-keys :direct-slots))
         (supers (or direct-superclasses
                     (list (!find-class 'standard-object)))))
    ;; todo: make push-class-direct-subclasses!
    (dolist (it supers)
      (push class (class-direct-subclasses it)))
    (setf-class-direct-superclasses class supers)
    (let ((slots (mapcar (lambda (slot-properties)
                           (apply 'make-direct-slot-definition slot-properties))
                         direct-slots)))
      (setf-class-direct-slots class slots)
      (dolist (direct-slot slots)
        (dolist (reader (slot-definition-readers direct-slot))
          (add-reader-method class reader (slot-definition-name direct-slot)))
        (dolist (writer (slot-definition-writers direct-slot))
          (add-writer-method class writer (slot-definition-name direct-slot)))))

    (funcall (if (eq (!class-of class) *the-class-standard-class*)
                 'std-finalize-inheritance
                 'finalize-inheritance)
             class)
    (values)))



;;; Slot definition metaobjects

;;; N.B. Quietly retain all unknown slot options (rather than signaling an
;;; error), so that it's easy to add new ones.
;;; BUG: this lambda form is not working - &allow-other-keys parsed incorrectly 
(defun make-direct-slot-definition
    (&rest properties
     &key name (initargs ()) (initform nil) (initfunction nil) (readers ()) (writers ()) (allocation :instance)
     &allow-other-keys)
  (let ((slot (copy-list properties))) ; Don't want to side effect &rest list
    (setf (getf* slot ':name) name)
    (setf (getf* slot ':initargs) initargs)
    (setf (getf* slot ':initform) initform)
    (setf (getf* slot ':initfunction) initfunction)
    (setf (getf* slot ':readers) readers)
    (setf (getf* slot ':writers) writers)
    (setf (getf* slot ':allocation) allocation)
    slot))

;;; BUG: this lambda form is not working - &allow-other-keys parsed incorrectly
(defun make-effective-slot-definition
    (&rest properties
     &key name (initargs ()) (initform nil) (initfunction nil) (allocation :instance)
     &allow-other-keys)
  (let ((slot (copy-list properties)))  ; Don't want to side effect &rest list
    (setf (getf* slot ':name) name)
    (setf (getf* slot ':initargs) initargs)
    (setf (getf* slot ':initform) initform)
    (setf (getf* slot ':initfunction) initfunction)
    (setf (getf* slot ':allocation) allocation)
    slot))


;;; slot-definition-name
(defun slot-definition-name (slot)
  (getf slot ':name))

(defun setf-slot-definition-name (slot new-value)
  (setf (getf* slot ':name) new-value))


;;; slot-definition-initfunction
(defun slot-definition-initfunction (slot)
  (getf slot ':initfunction))

(defun setf-slot-definition-initfunction (slot new-value)
  (setf (getf* slot ':initfunction) new-value))


;;; slot-definition-initform
(defun slot-definition-initform (slot)
  (getf slot ':initform))

(defun setf-slot-definition-initform (slot new-value)
  (setf (getf* slot ':initform) new-value))


;;; slot-definition-initargs
(defun slot-definition-initargs (slot)
  (getf slot ':initargs))

(defun setf-slot-definition-initargs (slot new-value)
  (setf (getf* slot ':initargs) new-value))



;;; slot-definition-readers
(defun slot-definition-readers (slot)
  (getf slot ':readers))

(defun setf-slot-definition-readers (slot new-value)
  (setf (getf* slot ':readers) new-value))



;;; slot-definition-writers
(defun slot-definition-writers (slot)
  (getf slot ':writers))

(defun setf-slot-definition-writers (slot new-value)
  (setf (getf* slot ':writers) new-value))



;;; slot-definition-allocation
(defun slot-definition-allocation (slot)
  (getf slot ':allocation))

(defun setf-slot-definition-allocation (slot new-value)
  (setf (getf* slot ':allocation) new-value))



;;; finalize-inheritance
;;; @vlad-km. add class slots position hash
;;;           replaced (setf ...) forms on (setf-...)
(defun std-finalize-inheritance (class &rest all-keys)
  (setf-class-precedence-list
   class
   (funcall (if (eq (!class-of class) *the-class-standard-class*)
                'std-compute-class-precedence-list
                'compute-class-precedence-list)
            class))
  (setf-class-slots
   class
   (funcall (if (eq (!class-of class) *the-class-standard-class*)
                'std-compute-slots
                'compute-slots)
            class))
  (hash-class-slots-names class)
  (values))


;;; @vlad-km. Add function.
;;;           Build slots position hash for class
(defun hash-class-slots-names (class)
  (let ((slots (mapcar (lambda (x) (getf x ':name)) (class-slots class)))
        (idx 0)
        (hh))
    (when slots
      (setq hh (make-hash-table :test #'eql))
      (dolist (it slots) (setf (gethash it hh) idx)
        (setq idx (1+ idx)))
      (setf-std-instance-hash class hh idx) )))




;;; Class precedence lists
(defun std-compute-class-precedence-list (class)
  (let ((classes-to-order (collect-superclasses* class)))
    (topological-sort classes-to-order
                      (remove-duplicates
                       (mapappend 'local-precedence-ordering
                                  classes-to-order))
                      'std-tie-breaker-rule)))

;;; topological-sort implements the standard algorithm for topologically
;;; sorting an arbitrary set of elements while honoring the precedence
;;; constraints given by a set of (X,Y) pairs that indicate that element
;;; X must precede element Y.  The tie-breaker procedure is called when it
;;; is necessary to choose from multiple minimal elements; both a list of
;;; candidates and the ordering so far are provided as arguments.
(defun topological-sort (elements constraints tie-breaker)
  (let ((remaining-constraints constraints)
        (remaining-elements elements)
        (result ()))
    ;; @vlad-km. replace (loop
    (while t
      (let ((minimal-elements
              (remove-if
               (lambda (class)
                 (member class remaining-constraints
                         :key #'cadr))
               remaining-elements)))
        (when (null minimal-elements)
          (if (null remaining-elements)
              (return-from topological-sort result)
              (error "Inconsistent precedence graph.")))
        (let ((choice (if (null (cdr minimal-elements))
                          (car minimal-elements)
                          (funcall tie-breaker
                                   minimal-elements
                                   result))))
          (setq result (append result (list choice)))
          (setq remaining-elements
                (remove choice remaining-elements))
          (setq remaining-constraints
                (remove choice
                        remaining-constraints
                        :test #'member)))))))

;;; In the event of a tie while topologically sorting class precedence lists,
;;; the CLOS Specification says to "select the one that has a direct subclass
;;; rightmost in the class precedence list computed so far."  The same result
;;; is obtained by inspecting the partially constructed class precedence list
;;; from right to left, looking for the first minimal element to show up among
;;; the direct superclasses of the class precedence list constituent.
;;; (There's a lemma that shows that this rule yields a unique result.)

(defun std-tie-breaker-rule (minimal-elements cpl-so-far)
  (dolist (cpl-constituent (reverse cpl-so-far))
    (let* ((supers (class-direct-superclasses cpl-constituent))
           (common (intersection minimal-elements supers)))
      (when (not (null common))
        (return-from std-tie-breaker-rule (car common))))))

;;; This version of collect-superclasses* isn't bothered by cycles in the class
;;; hierarchy, which sometimes happen by accident.

(defun collect-superclasses* (class)
  (labels ((all-superclasses-loop (seen superclasses)
             (let ((to-be-processed
                     (set-difference superclasses seen)))
               (if (null to-be-processed)
                   superclasses
                   (let ((class-to-process
                           (car to-be-processed)))
                     (all-superclasses-loop
                      (cons class-to-process seen)
                      (union (class-direct-superclasses
                              class-to-process)
                             superclasses)))))))
    (all-superclasses-loop () (list class))))

;;; The local precedence ordering of a class C with direct superclasses C_1,
;;; C_2, ..., C_n is the set ((C C_1) (C_1 C_2) ...(C_n-1 C_n)).

(defun local-precedence-ordering (class)
  (mapcar #'list
          (cons class
                (butlast (class-direct-superclasses class)))
          (class-direct-superclasses class)))

;;; Slot inheritance
(defun std-compute-slots (class)
  (let* ((all-slots (mapappend #'class-direct-slots
                               (class-precedence-list class)))
         (all-names (remove-duplicates
                     (mapcar #'slot-definition-name all-slots))))
    (mapcar #'(lambda (name)
                (funcall
                 (if (eq (!class-of class) *the-class-standard-class*)
                     #'std-compute-effective-slot-definition
                     #'compute-effective-slot-definition)
                 class
                 (remove name all-slots
                         :key #'slot-definition-name
                         :test-not #'eq)))
            all-names)))

(defun std-compute-effective-slot-definition (class direct-slots)
  (declare (ignore class))
  (let ((initer (!find-if-not #'null direct-slots
                              :key #'slot-definition-initfunction)))
    (make-effective-slot-definition
     :name (slot-definition-name (car direct-slots))
     :initform (if initer
                   (slot-definition-initform initer)
                   nil)
     :initfunction (if initer
                       (slot-definition-initfunction initer)
                       nil)
     :initargs (remove-duplicates
                (mapappend #'slot-definition-initargs
                           direct-slots))
     :allocation (slot-definition-allocation (car direct-slots)))))

;;; EOF
