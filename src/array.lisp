;;; array.lisp

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

(in-package #-jscl :jscl #+jscl :jscl/impl)

(/debug "loading array.lisp!")

(defun jscl/cl::upgraded-array-element-type (typespec &optional environment)
  (declare (ignore environment))
  (if (eq typespec 'character)
      'character
      t))

(defun jscl/cl::array-dimensions (array)
  (check-type array jscl/cl::array)
  (third (storage-vector-kind array)))

(defun jscl/cl::adjustable-array-p (array)
  (check-type array jscl/cl::array)
  (fourth (storage-vector-kind array)))

(defun jscl/cl::fill-pointer (array)
  (check-type array jscl/cl::array)
  (fifth (storage-vector-kind array)))

(defun (setf jscl/cl::fill-pointer) (new-index array)
  (check-type array jscl/cl::array)
  (setf (fifth (storage-vector-kind array)) new-index))

(defun jscl/cl::make-array (dimensions
                            &key element-type initial-element
                                 adjustable fill-pointer)
  (let* ((dimensions (ensure-list dimensions))
         (size (reduce #'* dimensions :initial-value 1))
         (array (make-storage-vector
                 size
                 (list 'array element-type dimensions
                       adjustable fill-pointer))))
    ;; Upgrade type
    (if (eq element-type 'character)
        (progn
          (setf (jscl/ffi:oget array "stringp") 1
                element-type 'character
                initial-element (or initial-element #\space)))
        (setf element-type t))
    ;; Initialize array
    (dotimes (i size)
      (storage-vector-set array i initial-element))
    array))


(defun jscl/cl::arrayp (x)
  (and (storage-vector-p x)
       (subtypep (storage-vector-kind x) 'array)))

(defun jscl/cl::array-element-type (array)
  (check-type array jscl/cl::array)
  (if (eql 1 (jscl/ffi:oget array "stringp"))
      'character
      (second (storage-vector-kind array))))

;; TODO: Error checking
(defun jscl/cl::array-dimension (array axis)
  (nth axis (array-dimensions array)))

(defun jscl/cl::aref (array index)
  (check-type array array)
  (check-type index (and fixnum (integer 0 *)))
  (storage-vector-ref array index))

(defun jscl/cl::aset (array index value)
  (check-type array jscl/cl::array)
  (check-type index (and fixnum (integer 0 *)))
  (storage-vector-set array index value))

(defun (setf jscl/cl::aref) (value array index)
  (aset array index value))


;;; Vectors

(defun jscl/cl::vectorp (x)
  (and (jscl/cl::arrayp x) (null (cdr (array-dimensions x)))))

(defun jscl/cl::vector (&rest objects)
  (list-to-vector objects))

(defun jscl/cl::vector-push-extend (new vector &key min-extension)
  (unless (jscl/cl::vectorp vector)
    (error "~S is not a vector." vector))
  (let ((pointer (fill-pointer vector))
        (size (storage-vector-size vector)))
    (when (>= pointer size)
      (resize-storage-vector vector (or min-extension
                                        (max 1 (min #x100
                                                    (round size 4))))))
    (aset vector (incf (fill-pointer vector)) new)
    (progn
      ;; with   no   fill-pointer,   only  increase   by   one   always.
      ;; Is that correct?
      (resize-storage-vector vector (1+ size))
      (aset vector size new)
      size)))
