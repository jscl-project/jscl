;;; defstruct.lisp —

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
  (assert (or (functionp predicate)
              (and (symbolp predicate)
                   (fboundp predicate)))
          (predicate)
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
  ;; The predicate function is used by  slot accessors and the copier to
  ;; check  the type  of their  arguments, so  it is  actually required.
  ;; If  the  user is  not  interested  on  it (:predicate  nil),  let's
  ;; generate a name.
  `(defun ,predicate (object)
     (and (structure%-p object)
          (eq (structure-type% object) ',name)
          (= (storage-vector-size object) ,slot-count))))


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
  (assert (keywordp option) (option) "Option `~s' is not a keyword symbol" option)
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

(defun defstruct/make-slot-reader (predicate struct-name
                                   accessor-name index)
  `(progn
     (defun ,accessor-name (object)
       (structure-slot-value-by-index% ,struct-name ',predicate
                                       object ,index))
     #+jscl (declaim (jscl::pure ,accessor-name))))

(defun defstruct/make-slot-writer (predicate struct-name
                                   accessor-name index)
  `(defun (setf ,accessor-name) (new-value object)
     (structure-setf-slot% ',predicate ,struct-name
                           ,index object new-value)))

(defun defstruct/make-accessor-name (struct-name slot-name)
  (assert (or (stringp struct-name)
              (symbolp struct-name))
          (struct-name)
          "Structure type name `~s' must be a string designator"
          struct-name)
  (assert (or (stringp slot-name)
              (symbolp slot-name))
          (slot-name)
          "Slot type name `~s' must be a string designator"
          slot-name)
  (intern (concatenate 'string
                       (string struct-name)
                       "-"
                       (string slot-name))))

(defun defstruct/make-slot-accessor (struct-name predicate
                                     slot index)
  (let* ((name (car slot))
         (accessor-name (defstruct/make-accessor-name
                            struct-name name)))
    (map 'list
         (lambda (f)
           (declare (type function f))
           (funcall f predicate struct-name accessor-name index))
         (list #'defstruct/make-slot-reader
               #'defstruct/make-slot-writer))))

(defun defstruct/make-slot-accessors (name predicate
                                      slot-descriptions)
  (with-collect
    (let ((index 1))
      (dolist (slot slot-descriptions)
        (collect (cons
                  'progn
                  (defstruct/make-slot-accessor name predicate
                    slot index)))
        (incf index)))))

;; Forward declaration of Make-Slot-Info. This is a circular dependency…
(declaim (ftype (function
                 (&key (:class t) (:name t) (:accessors t) (:readers t) (:writers t)
                       (:type t) (:initform t) (:initarg t) (:allocation t))
                 (values slot-info &optional))
                make-slot-info)
         (ftype (function (t) t) slot-info-p)
         (special *types*))

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
  (push (make-type-definition :name type
                              :predicate predicate
                              :supertypes '(structure-object))
        *types*)
  ;; warning: next bit requires CLOS
  (when print-function
    (if (fboundp 'add-method)
        (add-method (fdefinition 'print-object)
                    (make-instance 'standard-method
                                   :specializers (list type t)
                                   :function print-function))
        (warn "PRINT-OBJECT for :PRINT-FUNCTION for structure ~s can't be defined without CLOS: Option will be ignored" type)))
  #+ (or)
  (push (make-class :name type
                    :supertypes (list 'structure-object)
                    :slots (mapcar (lambda (slot)
                                     (defstruct/make-slot-info type slot))
                                   slots)
                    :predicate predicate
                    :constructor constructor
                    :copier copier)
        *classes*))

#+ (or)
(defun defstruct/define-type (type slots &key
                                           predicate
                                           print-function
                                           constructor
                                           copier)
  (declare (ignore type slots predicate print-function
                   constructor copier)))


;;; DEFSTRUCT itself.

;; There is a  complicated — and not  very pretty — reason  for this odd
;; definition name. Look below under `!DEFSTRUCT' for the apology.
(defmacro !defstruct% (name-and-options &rest slots)
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
                           'print))
         (slot-descriptions (mapcar #'defstruct/parse-slot-description slots)))
    `(eval-when (:compile-toplevel :load-toplevel)
       (let ((*package* (find-package ,(package-name (symbol-package name)))))
         ,(defstruct/make-constructor constructor name slot-descriptions)
         ,(defstruct/make-predicate predicate name
            (length slot-descriptions))
         ,(defstruct/make-copier copier name predicate)
         (deftype ,name () '(satisfies ,predicate))
         (defstruct/define-type ',name ',slot-descriptions
           :constructor ',constructor
           :copier ',copier
           :predicate ',predicate
           :print-function ',print-function)
         ,@(defstruct/make-slot-accessors name predicate
             slot-descriptions))
       ',name)))

;;; HACK HACK. Use SBCL structures during XC.
;;
;; There's an Issue on GitHub for this (TODO: Log it)

;; The  long and  the short  of it  is, the  type system  being compiled
;; relies  upon the  host  compiler's  type system,  and  the JSCL  type
;; system,  in  turn, relies  circularly  upon  DEFSTRUCT. So  there  is
;; a truly  nasty solution: we compile  with the host (let's  say, SBCL)
;; providing the structures,  then when we recompile,  things kinda fall
;; into place. This EVAL-WHEN thunk is the source of the evil magic that
;; makes this possible.
;;
;; The cross-compiler will emit  macroexpansions of JSCL:!/name/ because
;; this  branch does  not  yet  have a  JSCL/CL  package  set up  during
;; cross-compilation  phase  to  represent the  COMMON-LISP  package  at
;; run-time. (That branch rotted and isn't being maintained yet.) A side
;; effect of  that is that the  runtime package violates the  ANSI rules
;; about exporting extra symbols, but that's a future worry. In the mean
;; time, this  !DEFSTRUCT is a  redirector that takes advantage  of that
;; redirection. In  future, if this hack  is kept in play,  it should be
;; updated to  reflect JSCL/CL::DEFSTRUCT  and JSCL/INTERNALS::DEFSTRUCT
;; or something similar.
(defmacro jscl/cl::defstruct (name-and-options &rest slots)
  `(progn
     #-jscl
     (eval-when (:compile-toplevel)
       (cl:defstruct ,name-and-options ,@slots))
     #+jscl
     (eval-when (:load-toplevel :compile-toplevel)
       (!defstruct%  ,name-and-options ,@slots))))
