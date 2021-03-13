;;; defstruct.lisp --- 

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
  (and (consp obj)
       (eql (object-type-code obj) :structure)))

;; A very simple defstruct built on lists. It supports just slot with
;; an optional default initform, and it will create a constructor,
;; predicate and accessors for you.
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
                     (intern (concat "COPY-" name-string)))))


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

           constructor-expansion
           predicate-expansion
           copier-expansion)
      

      ;; mark object as :structure 
      (when constructor
        (setq constructor-expansion
              `(defun ,constructor (&key ,@slot-descriptions)
                 (let ((obj (list ',name ,@(mapcar #'car slot-descriptions)))) 
                   #+jscl (set-object-type-code obj  :structure)
                   obj))))

      (when predicate
        (setq predicate-expansion
              `(defun ,predicate (x)
                 (and (consp x) (eq (car x) ',name)))))

      ;; mark copy as :structure
      (when copier
        (setq copier-expansion
              `(defun ,copier (x)
                 (let ((obj (copy-list x)))
                   #+jscl (oset :structure obj "tagName")
                   obj))))

      `(progn
         ,constructor-expansion
         ,predicate-expansion
         ,copier-expansion
         ;; Slot accessors
         ,@(with-collect
             (let ((index 1))
               (dolist (slot slot-descriptions)
                 (let* ((name (car slot))
                        (accessor-name (intern (concat name-string "-" (string name)))))
                   (collect
                       `(defun ,accessor-name (x)
                          (unless (,predicate x)
                            (error "The object `~S' is not of type `~S'" x ,name-string))
                          (nth ,index x)))
                   ;; TODO: Implement this with a higher level
                   ;; abstraction like defsetf or (defun (setf ..))
                   (collect
                       `(define-setf-expander ,accessor-name (x)
                          (let ((object (gensym))
                                (new-value (gensym)))
                            (values (list object)
                                    (list x)
                                    (list new-value)
                                    `(progn
                                       (rplaca (nthcdr ,',index ,object) ,new-value) 
                                       ,new-value)
                                    `(,',accessor-name ,object)))))
                   (incf index)))))
         ',name))))
#+jscl
(defmacro defstruct (name-and-options &rest slots)
  `(def!struct ,name-and-options ,@slots))
