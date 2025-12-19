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

(defun structure-p (obj)
  #+jscl (eql (object-type-code obj) :structure)
  #-jscl (typep obj 'structure-object))

(defun structure-name (obj)
  #+jscl (oget* obj "structName")
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

;; A very simple defstruct built on JS objects. It supports just slot
;; with an optional default initform, and it will create a
;; constructor, predicate and accessors for you.
;; @kchan -- also generate DUMP-*, which converts a struct to an alist
;; of (property-name . value), to be used for dumping in the compiler
(defmacro !def!struct (name-and-options &rest slots)
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
         (dumper (intern (concat "DUMP-" name-string))))


    (unless predicate
      (setq predicate (gensym "PREDICATE")))

    (let* ((slot-descriptions
             (mapcar (lambda (sd)
                       (cond
                         ((symbolp sd)
                          (list sd))
                         ((and (listp sd) (car sd) (null (cddr sd)))
                          sd)
                         (t
                          (error "Bad slot description `~S'." sd))))
                     slots))
           (property-names
             (def!struct-property-names (mapcar #'car slot-descriptions)))

           constructor-expansion
           predicate-expansion
           copier-expansion)


      ;; mark object as :structure
      (when constructor
        (setq constructor-expansion
              `(defun ,constructor (&key ,@slot-descriptions)
                 (let ((obj (new)))
                   (set-object-type-code obj :structure)
                   (oset* ',name obj "structName")
                   ,@(mapcar (lambda (p s)
                               `(oset* ,(car s) obj ,p))
                             property-names slot-descriptions)
                   obj))))

      (when predicate
        (setq predicate-expansion
              `(defun ,predicate (x)
                 (eq (oget* x "structName") ',name))))

      (when copier
        (setq copier-expansion
              `(defun ,copier (x) (clone x))))

      `(progn
         (defun ,dumper (x)
           (list (cons "dt_Name" :structure)
                 (cons "structName" ',name)
                 ,@(mapcar (lambda (p) `(cons ,p (oget* x ,p))) property-names)))
         ,constructor-expansion
         ,predicate-expansion
         ,copier-expansion
         ;; Slot accessors
         ,@(mapcan
            (lambda (prop slot)
              (let* ((name (car slot))
                     (accessor-name (intern (concat name-string "-" (string name)))))
                `((defun ,accessor-name (x)
                    (oget* x ,prop))
                  (define-setf-expander ,accessor-name (x)
                    (let ((object (gensym))
                          (new-value (gensym)))
                      (values (list object)
                              (list x)
                              (list new-value)
                              `(oset* ,new-value ,object ,',prop)
                              `(oget* ,object ,',prop)))))))
            property-names slot-descriptions)
         ',name))))

;; Emulation of DEF!STRUCT and DUMP-* in the host, using host DEFSTRUCT
#-jscl
(defmacro def!struct (name-and-options &rest slots)
  (flet ((atom-or-car (x) (if (atom x) x (car x))))
    (let* ((name (atom-or-car name-and-options))
           (dumper (intern (concat "DUMP-" (symbol-name name))))
           (slot-names (mapcar #'atom-or-car slots))
           (property-names (def!struct-property-names slot-names)))
      `(progn
         (defun ,dumper (x)
           (list (cons "dt_Name" :structure)
                 (cons "structName" ',name)
                 ,@(mapcar (lambda (p n)
                             `(cons ,p (slot-value x ',n)))
                           property-names slot-names)))
         (defstruct ,name-and-options ,@slots)))))

#+jscl
(defmacro def!struct (name-and-options &rest slots)
  `(!def!struct ,name-and-options ,@slots))
