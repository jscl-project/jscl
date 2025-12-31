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

(def!struct type-info name expand compound predicate)

(defun %deftype-info (name &optional (create t))
  (unless (symbolp name)
    (error 'type-error :datum name :expected-type 'symbol))
  (let ((exists (gethash name *types*)))
    (cond ((and (not exists) create)
           (setq exists (make-type-info :name name))
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
