;;;; defclass.lisp — The simplest bits of CLOS

;; JSCL is free software: you can redistribute it and/or modify it under
;; the terms of the GNU General  Public License as published by the Free
;; Software Foundation,  either version  3 of the  License, or  (at your
;; option) any later version.
;;
;; JSCL is distributed  in the hope that it will  be useful, but WITHOUT
;; ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
;; FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
;; for more details.
;;
;; You should  have received a  copy of  the GNU General  Public License
;; along with JSCL. If not, see <http://www.gnu.org/licenses/>.

;;; This  file  defines  object   classes  and  instances  incompletely.
;;; The  intent is  to provide  a  useful subset  of CLOS  functionality
;;; without actually providing any  “wrong” details. That is: everything
;;; here should either work as ANSI CL requires, or not work at all, but
;;; (hopefully) nothing should be “wrong,” per se.

;;; Implementation-wise: A  class metaobject  contains a  layout pointer
;;; which provides  its mapping  of direct slots  and references  to its
;;; superclasses. See  SLOT-VALUE for a practical  example of navigating
;;; these structures. They are  implemented as storage-vector objects at
;;; the JavaScript level.

(in-package :jscl)

;; A Class-Layout  structure contains the interesting  information about
;; the  current revision  of a  class.  An instance  object's slots  are
;; organized in the order given in  the class layout, with all inherited
;; slots preceding all direct slots.
(defstruct class-layout
  class
  ;; The  name  of  the  class  (symbol);  use  FIND-CLASS  to  get  the
  ;; metaobject
  revision
  ;; An integer,  begining with 0,  incremented with each time  that the
  ;; class  definition  is changed.  Not  sure  if  this is  useful  for
  ;; anything other than debugging the object system itself…
  direct-superclasses
  superclass-layouts
  ;; A association list  of superclasses, in inheritence  order, and the
  ;; revisions of each,  that were used to compute  the inherited slots.
  ;; If one  of those superclasses has  been revised, then a  new layout
  ;; for this class should also be computed.
  inherited-slots
  direct-slots
  direct-subclasses
  class-slot-values)

;; The class metaobject really redirects most queries to the layout.
(defstruct class-metaobject
  name
  layout   ; The current layout structure
  )

(defun class-next-revision (class-metaobject)
  ;; FIXME: There's a  sort of race condition in that  two threads could
  ;; redefine  the   class  at  the   same  time,  and  grab   the  same
  ;; revision number. This should
  (let ((layout (class-metaobject-layout class-metaobject)))
    (if layout
        (1+ (class-layout-revision layout))
        0)))

(defun compute-effective-layout (class)
  (let ((layout (make-class-layout :class class))
        (metaobject (find-class class))
        (inherited-slots))
    ;; Visit superclasses in precedence order and collect slots.
    (dolist (superclass (compute-class-precedence-list class))
      (let ((supermetaobject (find-class superclass)))
        (setf (class-layout-superclass-layouts layout)
              (append
               (class-layout-superclass-layouts layout)
               (cons superclass (class-layout-revision
                                 (class-metaobject-layout supermetaobject)))))
        (let ((super-slots (class-direct-slots supermetaobject)))
          (dolist (slot super-slots)
            (push slot inherited-slots)))))
    ;; inherited-slots  now  has  the  reverse  order,  so  reverse  and
    ;; remove duplicates.
    (let ((direct-slots (class-direct-slots class)))
      (setf (class-layout-inherited-slots layout)
            (remove-if (lambda (slot-info)
                         (member (slot-info-name slot-info) direct-slots))
                       (remove-duplicates (reverse inherited-slots)))
            (class-layout-direct-slots layout) direct-slots))
    (setf (class-layout-revision layout) (class-next-revision metaobject))))



(defun define-class (name &key direct-superclasses direct-slots options)
  (when options
    (warn "JSCL's DEFCLASS does not yet honour any options (including ~s)"
          options))
  (let ((proto-layout
         (make-class-layout
          :class name
          :revision 0
          :direct-superclasses direct-superclasses
          :direct-slots (mapcar (lambda (slot-description)
                                  (defclass/make-slot-info name
                                      slot-description))
                                direct-slots))))
    (make-class-metaobject :name name)
    (setf (class-metaobject-layout name) proto-layout)
    (compute-effective-layout name)))

(defun defclass/make-slot-info (class-name slot-description)
  (destructuring-bind (name &rest properties) slot-description
    (let ((info (make-slot-info :class class-name
                                :name name
                                :allocation :instance
                                :type t)))
      (loop for (key value) in properties by #'cddr
         do (ecase key
              (:reader (push value (slot-info-readers info)))
              (:writer (push value (slot-info-writers info)))
              (:accessor (push value (slot-info-accessors info)))
              (:allocation (check-type value (member :class :instance)
                                       "a slot value allocation type: :INSTANCE or :CLASS")
                           (setf (slot-info-allocation info) value))
              (:initform (setf (slot-info-initform info) value))
              (:initarg (push value (slot-info-initargs info)))
              (:type (setf (slot-info-type info) value))))
      info)))

(defun defclass/make-slot-accessors (class slot-info)
  `(progn
     ,@(dolist (reader (slot-info-readers slot-info))
         `(defmethod ,reader ((,class ,class))
            (slot-value ,class ',(slot-info-name slot-info))))
     ,@(dolist (writer (slot-info-writers slot-info))
         `(defmethod (setf ,writer) (new-value (,class ,class))
            (check-type new-value ,(slot-info-type slot-info))
            (setf (slot-value ,class ',(slot-info-name slot-info)) new-value)))))

(defmacro jscl/cl::defclass (name (&rest direct-superclasses)
                                         (&rest direct-slots) &rest options)
  (let ((slot-infos (mapcar (lambda (description)
                              (defclass/make-slot-info name description))
                            direct-slots)))
    `(progn
       (define-class ',name :direct-superclasses ,direct-superclasses
                     :direct-slots ,slot-infos
                     :options ,options)
       ,@(mapcar (lambda (slot)
                   (defclass/make-slot-accessors name slot))
                 slot-infos))))
