;;; defstruct.lisp ---

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

(in-package :jscl)

(/debug "loading defstruct.lisp!")


;;; Low-level structure implementation details

;;; This  implements a  structure  as a  LIST with  a  CAR =  type-name.
;;; This will probably be changed  out for an alternative low-level (ie.
;;; Javascript level) implementation in the near future.

(defun make-structure% (type &rest fields)
  (let ((struct (make-storage-vector (length fields)
                                     (cons 'structure-object type))))
    (let ((i 0))
      (dolist (field fields)
        (storage-vector-set struct i field)
        (setq i (the fixnum (1+ i)))))
    struct))

(defun structure%-p (object)
  (and (storage-vector-p object)
       (eql 'structure-object (car (storage-vector-kind object)))))

(defun structure-type% (object)
  (unless (structure%-p object)
    (error "Not a structure: ~s" object))
  (cdr (storage-vector-kind object)))

(defun assert-struct-type (predicate type-name object)
  (assert (functionp predicate) (predicate)
          "Predicate `~s' is not a function" predicate)
  (assert (symbolp type-name) (type-name)
          "`~s' is not a structure type name" type-name)
  (assert (funcall predicate object) (object)
          "The object `~S' is not of type `~S'" object type-name)
  (assert (structure%-p object) (object)
          "The object `~s' is not a structure object")
  (assert (eql type-name (structure-type% object)) (object)
          "The object `~s' is not a structure of type `~s'"
          object type-name))

(defun copy-structure% (type predicate object)
  (assert-struct-type predicate type object)
  (copy-storage-vector object))

(defun structure-slot-value-by-index% (type predicate object index)
  "Get the  value of  the slot  at index  INDEX in  OBJECT, which  is of
TYPE (and fulfills PREDICATE). Used in slot readers."
  (assert-struct-type predicate type object)
  (storage-vector-ref object index))

(defun structure-setf-slot% (predicate type index
                             object new-value)
  (assert-struct-type predicate type object)
  (storage-vector-set object index new-value))

(defun defstruct/make-predicate (predicate name slot-count)
  (when predicate
    `(defun ,predicate (object)
       (and (structure%-p object)
            (eq (structure-type% object) ',name)
            (= (storage-vector-size object) ,slot-count)))))


;;; Utilities used by DEFSTRUCT

(defun defstruct/parse-slot-description (sd)
  (cond
    ((symbolp sd)
     (list sd))
    ((and (listp sd) (car sd) (null (cddr sd)))
     sd)
    (t
     (error "Bad slot description `~S'." sd))))

(defun defstruct/option-value (option options &optional default)
  (assert (keywordp option) (option) "Option `~s' is not a symbol" option)
  (assert (or (listp options) (null options)) (options)
          "Options `~s' should be a list (or NIL)" options)
  (if (assoc option options)
      (second (assoc option options))
      default))

(defun defstruct/make-constructor (constructor name slot-descriptions)
  (when constructor
    `(defun ,constructor (&key ,@slot-descriptions)
       (make-structure% ',name ,@(mapcar #'car slot-descriptions)))))

(defun defstruct/make-copier (copier name predicate)
  (when copier
    `(defun ,copier (object)
       (copy-structure% ',name ',predicate object))))

(defun defstruct/make-slot-reader (predicate struct-name-string
                                   accessor-name index)
  `(progn
     (defun ,accessor-name (object)
       (structure-slot-value-by-index% ,struct-name-string ',predicate
                                       object ,index))
     #+jscl (declaim (jscl::pure ,accessor-name))))

(defun defstruct/make-slot-writer (predicate struct-name-string
                                   accessor-name index)
  `(defun (setf ,accessor-name) (new-value object)
     (structure-setf-slot% ',predicate ,struct-name-string
                           ,index object new-value)))

(defun defstruct/make-accessor-name (struct-name slot-name)
  (assert (or (stringp struct-name)
              (symbolp struct-name)) (struct-name)
              "Structure type name `~s' must be a string designator"
              struct-name)
  (assert (or (stringp slot-name)
              (symbolp slot-name)) (slot-name)
              "Slot type name `~s' must be a string designator"
              slot-name)
  (intern (concatenate 'string
                       (string struct-name)
                       "-"
                       (string slot-name))))

(defun defstruct/make-slot-accessor (struct-name-string predicate
                                     slot index)
  (let* ((name (car slot))
         (accessor-name (defstruct/make-accessor-name
                            struct-name-string name)))
    (map 'list
         (lambda (f)
           (declare (type function f))
           (funcall f predicate struct-name-string accessor-name index))
         (list #'defstruct/make-slot-reader
               #'defstruct/make-slot-writer))))

(defun defstruct/make-slot-accessors (name-string predicate
                                      slot-descriptions)
  (with-collect
    (let ((index 1))
      (dolist (slot slot-descriptions)
        (collect (cons
                  'progn
                  (defstruct/make-slot-accessor name-string predicate
                    slot index)))
        (incf index)))))

;; Forward declaration of Make-Slot-Info. This is a circular dependency…
(declaim (ftype
          (function
           (&key (:class t) (:name t) (:accessors t) (:readers t) (:writers t)
                 (:type t) (:initform t) (:initarg t) (:allocation t))
           (values slot-info &optional))
          make-slot-info))

(defun defstruct/make-slot-info (type slot)
  (make-slot-info
   :class type
   :allocation :instance
   :name (car slot)
   :accessors (list (defstruct/make-accessor-name type slot))
   :initarg (intern (car slot) :keyword)))

(defun defstruct/define-type (type slots &key
                                           predicate
                                           print-function
                                           constructor
                                           copier)
  #-jscl (declare (ignore type slots
                          predicate print-function
                          constructor copier))
  #+jscl
  (push (make-type-definition :name type
                              :predicate predicate
                              :supertypes '(structure-object))
        *types*)
  #+jscl
  (push (make-class :name type
                    :supertypes (list 'structure-object)
                    :slots (mapcar (lambda (slot)
                                     (defstruct/make-slot-info type slot))
                                   slots)
                    :predicate predicate
                    :constructor constructor
                    :copier copier)
        *classes*))


;;; DEFSTRUCT itself.

(defmacro !defstruct (name-and-options &rest slots)
  "A very simple defstruct. Most slot options are not supported."
  (let* ((name-and-options (ensure-list name-and-options))
         (name (first name-and-options))
         (name-string (symbol-name name))
         (options (rest name-and-options))
         (constructor (defstruct/option-value :constructor options
                        (intern (concat "MAKE-" name-string))))
         (predicate (or (defstruct/option-value :predicate options
                          (intern (concat name-string "-P")))
                        (gensym "PREDICATE")))
         (copier (defstruct/option-value :copier options
                   (intern (concat "COPY-" name-string))))
         (print-function (defstruct/option-value :print-function options
                           nil))
         (slot-descriptions (mapcar #'defstruct/parse-slot-description
                                    slots)))
    `(progn
       ,(defstruct/make-constructor constructor name slot-descriptions)
       ,(defstruct/make-predicate predicate name
          (length slot-descriptions))
       ,(defstruct/make-copier copier name predicate)
       ,(defstruct/define-type name slot-descriptions
          :constructor constructor
          :copier copier
          :predicate predicate
          :print-function print-function)
       ,@(defstruct/make-slot-accessors name-string predicate
           slot-descriptions)
       ',name)))

;; This  alias  was  being  used;  switched to  the  !  prefix  to  make
;; things orthogonal…
(defmacro def!struct (name-and-options &rest slots)
  `(!defstruct ,name-and-options ,@slots))
#+jscl
(defmacro defstruct (name-and-options &rest slots)
  `(!defstruct ,name-and-options ,@slots))
