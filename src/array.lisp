;;; arrays.lisp

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

(/debug "loading array.lisp!")

(defun upgraded-array-element-type (typespec &optional environment)
  (declare (ignore environment))
  (if (eq typespec 'character)
      'character
      t))

(defun make-array (dimensions &key element-type initial-element adjustable fill-pointer)
  (let* ((dimensions (ensure-list dimensions))
         (size (!reduce #'* dimensions 1))
         (array (make-storage-vector size)))
    ;; Upgrade type
    (if (eq element-type 'character)
        (progn
          (oset 1 array "stringp")
          (setf element-type 'character
                initial-element (or initial-element #\space)))
        (setf element-type t))

    (when (and (listp dimensions)
               (not (null (cdr dimensions)))
               fill-pointer)
      (error "FILL-POINTER cannot be specified on multidimensional arrays."))

    ;; Initialize array
    (storage-vector-fill array initial-element)
    ;; Record and return the object
    (setf (oget array "type") element-type)
    (setf (oget array "dimensions") dimensions)
    (setf (oget array "fillpointer") fill-pointer)
    array))

(defun arrayp (x)
  (storage-vector-p x))

(defun adjustable-array-p (array)
  (unless (arrayp array)
    (error "~S is not an array." array))
  t)

(defun array-element-type (array)
  (unless (arrayp array)
    (error "~S is not an array." array))
  (if (eq (oget array "stringp") 1)
      'character
      (oget array "type")))

(defun array-dimensions (array)
  (unless (arrayp array)
    (error "~S is not an array." array))
  (oget array "dimensions"))

;; TODO: Error checking
(defun array-dimension (array axis)
  (nth axis (array-dimensions array)))

(defun aref (array index)
  (unless (arrayp array)
    (error "~S is not an array." array))  
  (storage-vector-ref array index))

(defun aset (array index value)
  (unless (arrayp array)
    (error "~S is not an array." array))  
  (storage-vector-set array index value))

(define-setf-expander aref (array index)
  (let ((g!array (gensym))
        (g!index (gensym))
        (g!value (gensym)))
    (values (list g!array g!index)
            (list array index)
            (list g!value)
            `(aset ,g!array ,g!index ,g!value)
            `(aref ,g!array ,g!index))))


(defun array-has-fill-pointer-p (array)
  (and (oget array "fillpointer") t))

(defun fill-pointer (array)
  (unless (arrayp array)
    (error "~S is not an array" array))
  (unless (array-has-fill-pointer-p array)
    (error "~S does not have a fill pointer" array))
  (oget array "fillpointer"))

(defun set-fill-pointer (array new-value)
  (unless (arrayp array)
    (error "~S is not an array" array))
  (unless (array-has-fill-pointer-p array)
    (error "~S does not have a fill pointer" array))
  (setf (oget array "fillpointer") new-value))

(defsetf fill-pointer set-fill-pointer)


;;; Vectors

(defun vectorp (x)
  (and (arrayp x) (null (cdr (array-dimensions x)))))

(defun vector (&rest objects)
  (list-to-vector objects))

(defun vector-push-extend (new-element vector)
  (unless (vectorp vector)
    (error "~S is not a vector." vector))
  ;; Note that JS will automatically grow the array as new elements
  ;; are assigned, so no need to do `adjust-array` here.
  (storage-vector-set! vector (fill-pointer vector) new-element)
  (incf (fill-pointer vector)))
