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
  (cons type (copy-list fields)))

(defun structure%-p (object)
  (and (consp object)
       (symbolp (car object))))

(defun structure-type% (object) 
  (unless (structure%-p object) 
    (error "Not a structure: ~s" object))
  (car object))

(defun assert-struct-type (predicate type-name object) 
  (when predicate
    (assert (funcall predicate object) (object)
            "The object `~S' is not of type `~S'" object type-name)))

(defun copy-structure% (type predicate object) 
  (assert-struct-type predicate type object)
  (copy-list object))

(defun defstruct/make-predicate (predicate name slot-count)
  (when predicate
    `(defun ,predicate (object) 
       (and (structure%-p object)
            (eq (structure-type% object) ',name)
            (= (length object) ,(1+ slot-count))))))

(defun structure-slot-value-by-index% (type predicate object index)
  "Get the  value of  the slot  at index  INDEX in  OBJECT, which  is of
TYPE (and fulfills PREDICATE). Used in slot readers."
  (assert-struct-type predicate type object)
  (elt index object))

(defun structure-setf-slot% (predicate type index
                             object new-value)
  (assert-struct-type predicate type object)
  (setf (elt index object) new-value))


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
       (structure-slot-value-by-index% ,struct-name-string ',predicate object ,index)) 
     #+jscl (declaim (jscl::pure ,accessor-name))))

(defun defstruct/make-slot-writer (predicate struct-name-string
                                   accessor-name index)
  `(defun (setf ,accessor-name) (object new-value) 
     (structure-setf-slot% ',predicate ,struct-name-string ,index
                           object new-value)))

(defun defstruct/make-slot-accessor (struct-name-string predicate slot index)
  (let* ((name (car slot))
         (accessor-name (intern (concat struct-name-string "-" (string name)))))
    (list
     (defstruct/make-slot-reader predicate struct-name-string accessor-name index)
     (defstruct/make-slot-writer predicate struct-name-string accessor-name index))))

(defun defstruct/make-slot-accessors (name-string predicate slot-descriptions)
  (with-collect
    (let ((index 1))
      (dolist (slot slot-descriptions)
        (collect (cons 'progn
                       (defstruct/make-slot-accessor name-string predicate slot index))) 
        (incf index)))))

(defun defstruct/define-type (type predicate)
  #-jscl (declare (ignore type predicate)) 
  #+jscl 
  (push (make-type-definition :name type
                              :predicate predicate
                              :supertypes '(structure-object))
        *types*))


;;; DEFSTRUCT itself.

(defmacro def!struct (name-and-options &rest slots)
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
         (slot-descriptions (mapcar #'defstruct/parse-slot-description slots))) 
    `(progn
       ,(defstruct/make-constructor constructor name slot-descriptions)
       ,(defstruct/make-predicate predicate name (length slot-descriptions))
       ,(defstruct/make-copier copier name predicate)
       ,(defstruct/define-type name predicate)
       ,@(defstruct/make-slot-accessors name-string predicate slot-descriptions)
       ',name)))

