;;; defstruct.lisp --- defstruct on JS object @kchan

;; JSCL is free software: you can redistribute it and/or
;; modify it under the terms of the GNU General Public License as
;; published by the Free Software Foundation, either version 3 of the
;; License, or (at your option) any later version.
;;
;; JSCL is distributed in the hope that it will be useful, but
;; WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
;; General Public License for more details.
;;
;; You should have received a copy of the GNU General Public License
;; along with JSCL.  If not, see <http://www.gnu.org/licenses/>.

(/debug "loading defstruct.lisp!")

(defvar *structures* (make-hash-table))

(defun structure-p (obj)
  #+jscl (and (objectp obj) (eql (object-type-code obj) :structure))
  #-jscl (typep obj 'structure-object))

;;; Metadata is stored in "structDescriptors" property of instances.
;;; For DEF!STRUCT, the name symbol is stored in "structDescriptors",
;;; but for complete defstruct (see structures.lisp), a vector of DSD
;;; is stored in "structDescriptors".
(defun structure-name (obj)
  #+jscl (let ((desc (oget! obj "structDescriptors")))
           (if (symbolp desc)
               desc
               (dsd-name (storage-vector-ref! desc (1- (length desc))))))
  #-jscl (class-name (class-of obj)))

(defun def!struct-property-names (slots)
  "Compute the list of JS property names to use for SLOTS.
Append numbers to symbol names to make them unique."
  (let ((index -1))
    (mapcar (lambda (s)
              (incf index)
              (concat (symbol-name s)
                      (integer-to-string index)))
            slots)))

(defun def!struct-expand (name dumper constructor predicate copier slot-descriptions)
  (let ((property-names
          (def!struct-property-names (mapcar #'car slot-descriptions)))

        constructor-expansion
        predicate-expansion
        copier-expansion)

    ;; mark object as :structure
    (when constructor
      (setq constructor-expansion
            `(defun ,constructor (&key ,@slot-descriptions)
               (object! "dt_Name" :structure
                     "structDescriptors" ',name
                     ,@(mapcan (lambda (p s)
                                 `(,p ,(car s)))
                               property-names slot-descriptions)))))

    (when predicate
      (setq predicate-expansion
            `(defun ,predicate (x)
               (and (objectp x) (eq (oget! x "structDescriptors") ',name)))))

    (when copier
      (setq copier-expansion
            `(defun ,copier (x) (clone x))))

    `(progn
       (defun ,dumper (x)
         (list (cons "dt_Name" :structure)
               (cons "structDescriptors" ',name)
               ,@(mapcar (lambda (p) `(cons ,p (oget! x ,p))) property-names)))
       ,constructor-expansion
       ,predicate-expansion
       ,copier-expansion
       ;; Slot accessors
       ,@(mapcan
          (lambda (prop slot)
            (let* ((slot-name (car slot))
                   (accessor-name (intern (concat (symbol-name name) "-"
                                                  (symbol-name slot-name)))))
              `((defun ,accessor-name (x)
                  (oget! x ,prop))
                (defun (setf ,accessor-name) (new-val x)
                  (oset! new-val x ,prop)
                  new-val))))
          property-names slot-descriptions)
       ',name)))

;; A very simple defstruct built on JS objects. It supports just slot
;; with an optional default initform, and it will create a
;; constructor, predicate and accessors for you.
;; @kchan -- also generate DUMP-*, which converts a struct to an alist
;; of (property-name . value), to be used for dumping in the compiler
(defmacro def!struct (name-and-options &rest slots)
  (let* ((name-and-options (ensure-list name-and-options))
         (name (first name-and-options))
         (name-string (symbol-name name))
         (options (rest name-and-options))
         (constructor (if (assoc :constructor options)
                          (second (assoc :constructor options))
                          (intern (concat "MAKE-" name-string))))
         (predicate (if (assoc :predicate options)
                        (second (assoc :predicate options))
                        (intern (concat name-string "-P"))))
         (copier (if (assoc :copier options)
                     (second (assoc :copier options))
                     (intern (concat "COPY-" name-string))))
         (dumper (intern (concat "DUMP-" name-string)))

         (slot-descriptions
           (mapcar (lambda (sd)
                     (cond
                       ((symbolp sd)
                        (list sd))
                       ((and (listp sd) (car sd) (null (cddr sd)))
                        sd)
                       (t
                        (error "Bad slot description `~S'." sd))))
                   slots)))
    (declare (ignorable constructor predicate copier dumper))

    #+jscl (def!struct-expand name dumper constructor predicate copier slot-descriptions)

    ;; Emulation of DEF!STRUCT and DUMP-* in the host, using host DEFSTRUCT
    #-jscl
    (let* ((slot-names (mapcar #'car slot-descriptions))
           (property-names (def!struct-property-names slot-names)))
      `(progn
         (defun ,dumper (x)
           (list (cons "dt_Name" :structure)
                 (cons "structDescriptors" ',name)
                 ,@(mapcar (lambda (p n)
                             `(cons ,p (slot-value x ',n)))
                           property-names slot-names)))
         (defstruct ,name-and-options ,@slots)))))
