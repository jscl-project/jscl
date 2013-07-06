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

;; A very simple defstruct built on lists. It supports just slot with
;; an optional default initform, and it will create a constructor,
;; predicate and accessors for you.
(defmacro def!struct (name &rest slots)
  (unless (symbolp name)
    (error "It is not a full defstruct implementation."))
  (let* ((name-string (symbol-name name))
         (slot-descriptions
          (mapcar (lambda (sd)
                    (cond
                      ((symbolp sd)
                       (list sd))
                      ((and (listp sd) (car sd) (cddr sd))
                       sd)
                      (t
                       (error "Bad slot description `~S'." sd))))
                  slots))
         (predicate (intern (concat name-string "-P"))))
    `(progn
       ;; Constructor
       (defun ,(intern (concat "MAKE-" name-string)) (&key ,@slot-descriptions)
         (list ',name ,@(mapcar #'car slot-descriptions)))
       ;; Predicate
       (defun ,predicate (x)
         (and (consp x) (eq (car x) ',name)))
       ;; Copier
       (defun ,(intern (concat "COPY-" name-string)) (x)
         (copy-list x))
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
       ',name)))
