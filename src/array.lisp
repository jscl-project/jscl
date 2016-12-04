;;; arrays.lisp

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

(in-package :jscl) #-jscl-xc #.(error "Do not load this file in the host compiler")

(/debug "loading array.lisp!")

(defun upgraded-array-element-type (typespec &optional environment)
  (declare (ignore environment))
  (if (eq typespec 'character)
      'character
      t))

(defun array-dimensions (array)
  (check-type array array)
  (third (storage-vector-kind array)))
(defun array-element-type (array)
  (check-type array array)
  (second (storage-vector-kind array)))
(defun adjustable-array-p (array)
  (check-type array array)
  (fourth (storage-vector-kind array)))
(defun fill-pointer (array)
  (check-type array array)
  (fifth (storage-vector-kind array)))
(defun (setf fill-pointer) (new-index array)
  (check-type array array)
  (setf (fifth (storage-vector-kind array)) new-index))

(defun make-array (dimensions &key element-type initial-element adjustable fill-pointer)
  (let* ((dimensions (ensure-list dimensions))
         (size (!reduce #'* dimensions 1))
         (array (make-storage-vector
                 size
                 (list 'array element-type dimensions
                       adjustable fill-pointer))))
    ;; Upgrade type
    (if (eq element-type 'character)
        (progn
          (oset 1 array "stringp")
          (setf element-type 'character
                initial-element (or initial-element #\space)))
        (setf element-type t))
    ;; Initialize array
    (dotimes (i size)
      (storage-vector-set array i initial-element))
    ;; Record and return the object
    (oset element-type array "type")
    (oset dimensions array "dimensions")
    array))


(defun arrayp (x)
  (and (storage-vector-p x)
       (eql 'array (car (storage-vector-kind x)))))

(defun array-element-type (array)
  (unless (arrayp array)
    (error "~S is not an array." array))
  (if (eq (jscl/ffi:oget array "stringp") 1)
      'character
      (jscl/ffi:oget array "type")))

(defun array-dimensions (array)
  (unless (arrayp array)
    (error "~S is not an array." array))
  (jscl/ffi:oget array "dimensions"))

;; TODO: Error checking
(defun array-dimension (array axis)
  (nth axis (array-dimensions array)))

(defun aref (array index)
  (check-type array array)
  (check-type index (fixnum 0 *))
  (storage-vector-ref array index))

(defun aset (array index value)
  (check-type array array)
  (check-type index (fixnum 0 *))
  (storage-vector-set array index value))

(defun (setf aref) (value array index)
  (aset array index value))


;;; Vectors

(defun vectorp (x)
  (and (arrayp x) (null (cdr (array-dimensions x)))))

(defun vector (&rest objects)
  (list-to-vector objects))

;;; FIXME:  should  take  optional   min-extension.  FIXME:  should  use
;;; fill-pointer instead of the absolute end of array
(defun vector-push-extend (new vector)
  (unless (vectorp vector)
    (error "~S is not a vector." vector))
  (let ((size (storage-vector-size vector)))
    (resize-storage-vector vector (1+ size))
    (aset vector size new)
    size))
