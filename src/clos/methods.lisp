;;; -*- mode:lisp; coding:utf-8 -*-

;;; CLOS standard method
;;; Original code closette.lisp, lines 1405-1637
;;; Minor revision for JSCL  @vlad-km, 2019
;;;
;;; JSCL compilation mode - :target
;;;

(/debug "compile standard clos methods!")

;;; timestamp. todo: remove it
(defvar *mop-awake-time* (get-internal-real-time))


;;; @vlad-km.
;;; moved from std-object.
#+nil
(defun (setf slot-value) (new-value object slot-name)
  (if (eq (!class-of (!class-of object)) *the-class-standard-class*)
      (setf-std-slot-value object slot-name new-value)
      (setf-slot-value-using-class new-value (!class-of object) object slot-name)))

(defsetf slot-value setf-slot-value)

;;; @vlad-km
;;; moved from std-object.lisp
;;; removed
#+nil
(defun (setf find-class) (new-value symbol)
  (setf (gethash symbol *class-table*) new-value))

;;; print-object
;;; @vlad-km 2022 experimental - pre-upgrade to new version
#+nil
(defgeneric print-object (instance &optional stream))

(defmethod print-object ((instance standard-object) &optional (stream *standard-output*))
  (print-unreadable-object (instance stream :identity t)
    (format stream "(~S)"
            (class-name (class-of instance))))
  instance)


(defmethod print-object ((instance standard-object) &optional (stream *standard-output*))
  (if (built-in-class-of instance)
      (print-unreadable-object (instance stream :identity t)
        (format stream "(~S) ~a"
                (class-name (class-of instance))
                instance))
      (print-unreadable-object (instance stream :identity t)
        (format stream "(~S)"
                (class-name (class-of instance)))))
  instance)



;;; Slot access
;;; @vlad-km 2022 experimental - pre-upgrade to new version
#+nil
(defgeneric slot-value-using-class (class instance slot-name))


(defmethod slot-value-using-class ((class standard-class) instance slot-name)
  (std-slot-value instance slot-name))


;;; @vlad-km 2022 experimental - pre-upgrade to new version
#+nil
(defgeneric (setf slot-value-using-class) (new-value class instance slot-name))

(defmethod (setf slot-value-using-class) (new-value (class standard-class) instance slot-name)
  (setf-std-slot-value instance slot-name new-value))

;;; N.B. To avoid making a forward reference to a (setf xxx) generic function:
(defun setf-slot-value-using-class (new-value class object slot-name)
  (setf-std-slot-value  object slot-name new-value))



(defgeneric slot-exists-p-using-class (class instance slot-name))

(defmethod slot-exists-p-using-class
    ((class standard-class) instance slot-name)
  (std-slot-exists-p instance slot-name))



;;; @vlad-km 2022 experimental - pre-upgrade to new version
#+nil
(defgeneric slot-boundp-using-class (class instance slot-name))

(defmethod slot-boundp-using-class
    ((class standard-class) instance slot-name)
  (std-slot-boundp instance slot-name))


;;; @vlad-km 2022 experimental - pre-upgrade to new version
#+nil
(defgeneric slot-makunbound-using-class (class instance slot-name))

(defmethod slot-makunbound-using-class
    ((class standard-class) instance slot-name)
  (std-slot-makunbound instance slot-name))


;;; Instance creation and initialization
;;; @vlad-km 2022 experimental - pre-upgrade to new version
#+nil
(defgeneric allocate-instance (class))

(defmethod allocate-instance ((class standard-class))
  (std-allocate-instance class))



;;;@vlad-km
;;; @vlad-km 2022 experimental - pre-upgrade to new version
#+nil
(defgeneric make-instance (class &key))

(defmethod make-instance ((class standard-class) &rest initargs)
  (let ((instance (allocate-instance class)))
    (apply #'initialize-instance instance initargs)
    instance))

(defmethod make-instance ((class symbol) &rest initargs)
  (apply #'make-instance (find-class class) initargs))


;;; initialize-instance
;;; @vlad-km 2022 experimental - pre-upgrade to new version
#+nil
(defgeneric initialize-instance (instance &key))

(defmethod initialize-instance ((instance standard-object) &rest initargs)
  (apply #'shared-initialize instance t initargs))

(defmethod initialize-instance :after ((class standard-class) &rest args)
  (apply #'std-after-initialization-for-classes class args))


(defgeneric reinitialize-instance (instance &key))

(defmethod reinitialize-instance ((instance standard-object) &rest initargs)
  (apply #'shared-initialize instance () initargs))


;;; shared-initialize
;;; @vlad-km 2022 experimental - pre-upgrade to new version
#+nil
(defgeneric shared-initialize (instance slot-names &key))

(defmethod shared-initialize ((instance standard-object) slot-names &rest all-keys)
  (dolist (slot (class-slots (class-of instance)))
    (let ((slot-name (slot-definition-name slot)))
      (multiple-value-bind (init-key init-value foundp)
          (get-properties all-keys (slot-definition-initargs slot))
        (if foundp
            ;; todo: (setf ) -> (set-slot-value)
            (setf (slot-value instance slot-name) init-value)
            (when (and (not (slot-boundp instance slot-name))
                       (not (null (slot-definition-initfunction slot)))
                       (or (eq slot-names t)
                           (member slot-name slot-names)))
              ;; todo: (setf ) -> (set-slot-value)
              (setf (slot-value instance slot-name)
                    (funcall (slot-definition-initfunction slot))))))))
  instance)

;;; change-class
(defgeneric change-class (instance new-class &key))

(defmethod change-class ((old-instance standard-object) (new-class standard-class) &rest initargs)
  (let ((new-instance (allocate-instance new-class)))
    (dolist (slot-name (mapcar #'slot-definition-name
                               (class-slots new-class)))
      (when (and (slot-exists-p old-instance slot-name)
                 (slot-boundp old-instance slot-name))
        (setf (slot-value new-instance slot-name)
              (slot-value old-instance slot-name))))
    (!rotatef (std-instance-slots new-instance)
              (std-instance-slots old-instance))
    (!rotatef (std-instance-class new-instance)
              (std-instance-class old-instance))
    (apply #'update-instance-for-different-class
           new-instance old-instance initargs)
    old-instance))

(defmethod change-class ((instance standard-object) (new-class symbol) &rest initargs)
  (apply #'change-class instance (find-class new-class) initargs))


;;; update instance
(defgeneric update-instance-for-different-class (old new &key))


(defmethod update-instance-for-different-class ((old standard-object)
                                                (new standard-object)
                                                &rest initargs)
  (let ((added-slots
          (remove-if #'(lambda (slot-name)
                         (slot-exists-p old slot-name))
                     (mapcar #'slot-definition-name
                             (class-slots (class-of new))))))
    (apply #'shared-initialize new added-slots initargs)))

;;;
;;;  Methods having to do with class metaobjects.
;;;

(defmethod print-object ((class standard-class) &optional (stream *standard-output*))
  (print-unreadable-object (class stream :identity t)
    (format stream "(~S) ~S"
            (class-name (class-of class))
            (class-name class)))
  class)


;;; Finalize inheritance
(defgeneric finalize-inheritance (class &rest))

(defmethod finalize-inheritance ((class standard-class) &rest all-keys)
  (std-finalize-inheritance class all-keys)
  (values))


;;; Class precedence lists
(defgeneric compute-class-precedence-list (class))

(defmethod compute-class-precedence-list ((class standard-class))
  (std-compute-class-precedence-list class))


;;; Slot inheritance
(defgeneric compute-slots (class))

(defmethod compute-slots ((class standard-class))
  (std-compute-slots class))


(defgeneric compute-effective-slot-definition (class direct-slots))

(defmethod compute-effective-slot-definition ((class standard-class) direct-slots)
  (std-compute-effective-slot-definition class direct-slots))


;;;
;;; Methods having to do with generic function metaobjects.
;;;
(defmethod print-object ((gf standard-generic-function)  &optional (stream *standard-output*))
  (print-unreadable-object (gf stream :identity t)
    (format stream "(~S) ~S"
            (class-name (class-of gf))
            (generic-function-name gf)))
  gf)

;;; initialize-instance
;;; mvk change &key to &rest args
(defmethod initialize-instance :after ((gf standard-generic-function) &rest args)
  (finalize-generic-function gf))


;;;
;;; Methods having to do with method metaobjects.
;;;
(defmethod print-object ((method standard-method) &optional (stream *standard-output*))
  (print-unreadable-object (method stream :identity t)
    (format stream "(~S) ~S ~S  ~S"
            (class-name (class-of method))
            (generic-function-name
             (method-generic-function method))
            (method-qualifiers method)
            (mapcar #'class-name
                    (method-specializers method))))
  method)

;;; @vlad-km. added &rest
(defmethod initialize-instance :after ((method standard-method) &rest args)
  (setf (method-function method) (compute-method-function method)))


;;;
;;; Methods having to do with generic function invocation.
;;;

(defgeneric compute-discriminating-function (gf))

(defmethod compute-discriminating-function ((gf standard-generic-function))
  (std-compute-discriminating-function gf))


(defgeneric method-more-specific-p (gf method1 method2 required-classes))

(defmethod method-more-specific-p  ((gf
                                     standard-generic-function)
                                    method1
                                    method2
                                    required-classes)
  (std-method-more-specific-p gf method1 method2 required-classes))



(defgeneric compute-effective-method-function (gf methods))

(defmethod compute-effective-method-function ((gf standard-generic-function) methods)
  (std-compute-effective-method-function gf methods))


(defgeneric compute-method-function (method))

(defmethod compute-method-function ((method standard-method))
  (std-compute-method-function method))


;;; timestamp. todo: remove it
(/debug (concat "             elapsed time:" (/ (- (get-internal-real-time) *mop-awake-time*) internal-time-units-per-second 1.0) " sec."))


;;; ancient as a mammoth shit

;;; EOF
