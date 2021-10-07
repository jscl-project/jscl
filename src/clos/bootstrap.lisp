;;; -*- mode:lisp; coding:utf-8 -*-


;;;
;;; CLOS Bootstrap
;;; Original code closette.lisp, lines 1317-1403
;;; Major modification for JSCL  @vlad-km, 2019
;;;
;;; note: it works ? don't touch it!!!

(/debug "build standard mop hierarchy")

;;; timestamp. todo: remove it
(defvar *boot-stage-timestamp* (get-internal-real-time))


(defun boot-stage-1 ()

  ;; 1. Figure out standard-class's slots.
  ;; 2. Create the standard-class metaobject by hand.
  (setq *the-class-standard-class*
        (allocate-std-instance
         :class 'tba
         :slots (make-array (length *the-slots-of-standard-class*)
                            :initial-element *secret-unbound-value*)))
  ;; 3. Install standard-class's (circular) class-of link.
  (setf (std-instance-class *the-class-standard-class*) *the-class-standard-class*)


  ;; 4. Fill in standard-class's class-slots.
  (setf-class-slots *the-class-standard-class* *the-slots-of-standard-class*)
  (hash-class-slots-names *the-class-standard-class*)


  ;; 5. Hand build the class t so that it has no direct superclasses.
  (setf-find-class 't
      (let ((class (std-allocate-instance *the-class-standard-class*)))
        (setf-class-name class 't)
        (setf-class-direct-subclasses class ())
        (setf-class-direct-superclasses class ())
        (setf-class-direct-methods class ())
        (setf-class-direct-slots class ())
        (setf-class-precedence-list class ())
        (setf-class-slots class ())
        (hash-class-slots-names class)
        class))


  ;; 6. Create the other superclass of standard-class (i.e., standard-object).
  (ensure-class 'standard-object
                :direct-superclasses (list (!find-class 't))
                :direct-slots '())
  ;; 7.
  (setq *the-class-standard-class*
        (ensure-class 'standard-class
                      :direct-superclasses nil
                      :direct-slots
                      (LIST
                       (LIST :NAME (QUOTE NAME) :INITARGS (QUOTE (:NAME)))
                       (LIST :NAME (QUOTE DIRECT-SUPERCLASSES) :INITARGS (QUOTE (:DIRECT-SUPERCLASSES)))
                       (LIST :NAME (QUOTE DIRECT-SLOTS))
                       (LIST :NAME (QUOTE CLASS-PRECEDENCE-LIST))
                       (LIST :NAME (QUOTE EFFECTIVE-SLOTS))
                       (LIST :NAME (QUOTE DIRECT-SUBCLASSES) :INITFORM (QUOTE NIL) :INITFUNCTION (FUNCTION (LAMBDA NIL NIL)))
                       (LIST :NAME (QUOTE DIRECT-METHODS) :INITFORM (QUOTE NIL) :INITFUNCTION (FUNCTION (LAMBDA NIL NIL))))
                      ))

  ;; 8. Replace all (3) existing pointers to the skeleton with real one.
  (setf (std-instance-class  (!find-class 't))
        *the-class-standard-class*)
  (setf (std-instance-class (!find-class 'standard-object))
        *the-class-standard-class*)
  (setf (std-instance-class *the-class-standard-class*)
        *the-class-standard-class*)
  )   ;; end boot-stage 1


(defun boot-stage-2 ()
  (ensure-class 'symbol
                :direct-superclasses '()
                :direct-slots   '())

  (ensure-class 'sequence
                :direct-superclasses '()
                :direct-slots   '())

  (ensure-class 'array
                :direct-superclasses '()
                :direct-slots   '())

  (ensure-class 'number
                :direct-superclasses '()
                :direct-slots   '())

  (ensure-class 'character
                :direct-superclasses '()
                :direct-slots   '())

  (ensure-class 'js-object
                :direct-superclasses '()
                :direct-slots   '())

  (ensure-class 'function
                :direct-superclasses '()
                :direct-slots   '())

  (ensure-class 'hash-table
                :direct-superclasses '()
                :direct-slots   '())

  (ensure-class 'stream
                :direct-superclasses '()
                :direct-slots   '())

  (ensure-class 'structure
                :direct-superclasses '()
                :direct-slots   '())

  (ensure-class 'package
                :direct-superclasses '()
                :direct-slots   '())

  (ensure-class 'keyword
                :direct-superclasses (LIST (!FIND-CLASS (QUOTE symbol)))
                :direct-slots   '())

  (ensure-class 'list
                :direct-superclasses (LIST (!FIND-CLASS (QUOTE sequence)))
                :direct-slots   '())

  (ensure-class 'null
                :direct-superclasses (LIST (!FIND-CLASS (QUOTE SYMBOL)) (!FIND-CLASS (QUOTE LIST)))
                :direct-slots   '())

  (ensure-class 'cons
                :direct-superclasses (LIST (!FIND-CLASS (QUOTE list)))
                :direct-slots   '())

  (ensure-class 'vector
                :direct-superclasses (LIST (!FIND-CLASS (QUOTE array)) (!FIND-CLASS (QUOTE sequence)))
                :direct-slots   '())

  (ensure-class 'string
                :direct-superclasses (LIST (!FIND-CLASS (QUOTE vector)))
                :direct-slots   '())

  (ensure-class 'real
                :direct-superclasses (LIST (!FIND-CLASS (QUOTE number)))
                :direct-slots   '())

  (ensure-class 'rational
                :direct-superclasses (LIST (!FIND-CLASS (QUOTE real)))
                :direct-slots   '())

  (ensure-class 'integer
                :direct-superclasses (LIST (!FIND-CLASS (QUOTE rational)))
                :direct-slots   '())

  (ensure-class 'float
                :direct-superclasses (LIST (!FIND-CLASS (QUOTE real)))
                :direct-slots   '())

  ;; 10. Define the other standard metaobject classes.
  (setq *the-class-standard-gf*
        (ensure-class 'standard-generic-function
                      :direct-superclasses '()
                      :direct-slots (LIST
                                     (LIST :NAME (QUOTE NAME) :INITARGS (QUOTE (:NAME)))
                                     (LIST :NAME (QUOTE LAMBDA-LIST) :INITARGS (QUOTE (:LAMBDA-LIST)))
                                     (LIST :NAME (QUOTE METHODS)
                                           :INITFORM (QUOTE NIL)
                                           :INITFUNCTION (FUNCTION (LAMBDA NIL NIL)))
                                     (LIST :NAME (QUOTE METHOD-CLASS)
                                           :INITARGS (QUOTE (:METHOD-CLASS)))
                                     (LIST :NAME (QUOTE DISCRIMINATING-FUNCTION))
                                     (LIST :NAME (QUOTE CLASSES-TO-EMF-TABLE)
                                           :INITFORM (QUOTE (MAKE-HASH-TABLE :TEST (FUNCTION EQUAL)))
                                           :INITFUNCTION (FUNCTION (LAMBDA NIL (MAKE-HASH-TABLE :TEST (FUNCTION EQUAL))))))))


  (setq *the-class-standard-method*
        (ensure-class 'standard-method
                      :direct-superclasses '()
                      :direct-slots (LIST
                                     (LIST :NAME (QUOTE LAMBDA-LIST) :INITARGS (QUOTE (:LAMBDA-LIST)))
                                     (LIST :NAME (QUOTE QUALIFIERS) :INITARGS (QUOTE (:QUALIFIERS)))
                                     (LIST :NAME (QUOTE SPECIALIZERS) :INITARGS (QUOTE (:SPECIALIZERS)))
                                     (LIST :NAME (QUOTE BODY) :INITARGS (QUOTE (:BODY)))
                                     (LIST :NAME (QUOTE GENERIC-FUNCTION)
                                           :INITFORM (QUOTE NIL)
                                           :INITFUNCTION (FUNCTION (LAMBDA NIL NIL)))
                                     (LIST :NAME (QUOTE FUNCTION)))))

  ) ;; end boot-stage-2


(boot-stage-1)
(boot-stage-2)

;;; timestamp. todo: remove it
(/debug (concat "            elapsed time:"
                (/ (- (get-internal-real-time) *boot-stage-timestamp*) internal-time-units-per-second 1.0) " sec."))

;; Voila! The class hierarchy is in place.
;; (It's now okay to define generic functions and methods.)

;;; EOF
