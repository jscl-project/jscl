;;; -*- mode:lisp; coding:utf-8 -*-

;;;
;;; Export CLOS symbols
;;; Original code closette.lisp, lines 69-111
;;;
;;; JSCL compilation mode - :target
;;;
;;; todo: compare with var exports from original closette.lisp
;;;       the export list uncomplite

(export
 '(find-class class-of call-next-method next-method-p slot-value slot-boundp
   slot-exists-p slot-makunbound make-instance change-class initialize-instance
   reinitialize-instance shared-initialize update-instance-for-different-class
   print-object describe-object standard-object standard-class
   standard-generic-function standard-method class-name method-qualifiers
   allocate-instance ensure-generic-function add-method remove-method
   find-method))

(export
 '(class-direct-superclasses class-direct-slots class-precedence-list
   class-slots class-direct-subclasses class-direct-methods
   generic-function-name generic-function-lambda-list generic-function-methods
   generic-function-discriminating-function generic-function-method-class
   method-lambda-list method-specializers method-body method-environment
   method-generic-function method-function slot-definition-name
   slot-definition-initfunction slot-definition-initform
   slot-definition-initargs slot-definition-readers
   slot-definition-writers slot-definition-allocation
   ;; Class-related metaobject protocol
   compute-class-precedence-list  compute-slots
   compute-effective-slot-definition
   finalize-inheritance slot-value-using-class slot-boundp-using-class
   slot-exists-p-using-class  slot-makunbound-using-class
   ;; Generic function related metaobject protocol
   compute-discriminating-function
   compute-applicable-methods-using-classes
   method-more-specific-p
   compute-effective-method-function  compute-method-function
   apply-methods
   apply-method
   find-generic-function)
 'jscl)




;;; EOF
