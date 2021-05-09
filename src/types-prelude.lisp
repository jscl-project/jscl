;;; -*- mode:lisp; coding:utf-8 -*-

;;; Preliminary for types & defstruct   @vkm
;;;
;;; JSCL is free software: you can redistribute it and/or
;;; modify it under the terms of the GNU General Public License as
;;; published by the Free Software Foundation, either version 3 of the
;;; License, or (at your option) any later version.
;;;
;;; JSCL is distributed in the hope that it will be useful, but
;;; WITHOUT ANY WARRANTY; without even the implied warranty of
;;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
;;; General Public License for more details.
;;;
;;; You should have received a copy of the GNU General Public License
;;; along with JSCL.  If not, see <http://www.gnu.org/licenses/>.

;;; DEFTYPE
#-jscl
(progn
  (defvar *types* (make-hash-table :test #'equal))
;;; DEFSTRUCT
  ;;(defvar *structures* (make-hash-table :test #'equal))
  (defvar *structures* nil "DEFSTRUCT STORE")
;;; DEFCLASS
  (defvar *class-table* (make-hash-table :test #'equal)))

#+jscl
(progn
  (defvar *types* (make-hash-table :test #'eql))
;;; DEFSTRUCT
  (defvar *structures* (make-hash-table :test #'eql))
;;; DEFCLASS
  (defvar *class-table* (make-hash-table :test #'eql)))


(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun get-structure-dsd (name)
    (gethash name *structures*)))

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun exists-structure-p (name)
    (multiple-value-bind (v e-p) (gethash name *structures*)
      e-p)))

;;; another member from ccl
(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun memq (item list)
    (while list
      (if (eq item (car list)) (return list))
      (setq list (cdr list)))))

;;; lightweight mapcar
(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun %lmapcar (fn list)
    (let* ((ret-list (list nil))
           (temp ret-list)
           (res nil))
      (while list
        (setq res (funcall fn (car list))
              list (cdr list))
        (setf (cdr temp) (list res)
              temp (cdr temp)))
      (cdr ret-list))))

;;; internal unsafe defstruct version
(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun %struct-generator (kind options slots)
    (let* ((constructor (cadr (assoc :constructor options)))
           (keys (cadr (assoc :form options)))
           (names (mapcar (lambda (x) (if (consp x) (car x) x)) slots))
           (option (if keys keys '&optional))
           (maker)
           (makname (if constructor
                        (intern (symbol-name constructor))
                        (intern (concat "%MAKE-" (symbol-name `,kind)))))
           (getter)
           (position 0)
           (q))
      (unless (memq option '(&key &optional)) (error "Something went wrong: ~a." options))
      (setq maker
            `(defun ,makname (,option ,@slots)  (list ,@names)))
      (dolist (it names)
        (setq getter (intern (concat (symbol-name kind) "-" (symbol-name it))))
        (push `(defun ,getter (storage)(nth ,position storage)) q)
        (push `(defun (setf ,getter) (value storage)
                 (rplaca (nthcdr ,position storage) value) value)
              q)
        (incf position))
      (values maker (reverse q)))))

(defmacro %i-struct (name-options &rest slots)
  (let* ((name-options (ensure-list name-options))
         (name (car name-options))
         (options (rest name-options)))
    (multiple-value-bind (maker accessors) (%struct-generator name options slots)
      `(progn
         ,maker
         ,@accessors))))

(%i-struct (type-info (:form &key)) name expand compound predicate)

(defun %deftype-info (name &optional (create t))
  (unless (symbolp name) (error "Not a symbol ~a." name))
  (let ((exists (gethash name *types*)))
    (cond ((and (not exists) create)
           (setq exists (%make-type-info :name name))
           (setf (gethash name *types*) exists))
          (t exists))))

(defun %deftype (name &key expander compound predicate)
    (let ((type (%deftype-info name)))
      (when expander
        (setf (type-info-expand type) expander) )
      (when compound
        (setf (type-info-compound type) compound))
      (when predicate
        (setf (type-info-predicate type) predicate))))

;;; EOF
