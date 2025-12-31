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

;;; Notes on array representation:
;;;
;;; Arrays are represented with storage vectors (JavaScript arrays).
;;; We add a "dimensions" property to the storage vector, if and
;;; *only* if the array is not a vector.This makes sure plain
;;; JavaScript arrays are valid Lisp vectors. Array with a non-list in
;;; "dimensions" property is treated as vector (so that foreign
;;; JavaScript array whose "dimensions" is "accidentally" set will be
;;; recognized as vector).  We assume the invariance that if an array
;;; has a list in "dimensions" property, it must *not* be a vector,
;;; i.e. the list never has length 1.  Rank-0 arrays are distinguished
;;; by having NIL in "dimensions" property, rather than not having
;;; "dimensions" property (or have a non-list value).

(/debug "loading array.lisp!")

(defun upgraded-array-element-type (typespec &optional environment)
  (declare (ignore environment))
  (case typespec
    (character 'character)
    ((nil) (error "NIL array element type unimplemented"))
    (t t)))

(defun %array-to-lists (array)
  (let ((index 0))
    (labels ((process (rest-dims)
               (if (null rest-dims)
                   (prog1 (row-major-aref array index)
                     (incf index))
                   (with-collect
                     (dotimes (_ (car rest-dims))
                       (collect (process (cdr rest-dims))))))))
      (process (if (array-has-fill-pointer-p array)
                   (list (fill-pointer array))
                   (array-dimensions array))))))

(defun %fill-array-contents (array contents)
  "Fill content of array from nested sequences like :INITIAL-CONTENT.

Signal error if CONTENTS structure does not match ARRAY's dimension,
in which case ARRAY might be partially filled from CONTENTS."
  (let ((index 0))
    (labels ((process (rest-dims contents)
               (if (null rest-dims)
                   (progn
                     (row-major-aset array index contents)
                     (incf index))
                   (if (= (length contents) (car rest-dims))
                       (map nil (lambda (inner) (process (cdr rest-dims) inner))
                            contents)
                       (error "Length of ~a is not ~d"
                              contents (car rest-dims))))))
      (process (array-dimensions array) contents)
      array)))

(defun make-array (dimensions &key (element-type t)
                                (initial-element nil initial-element-p)
                                (initial-contents nil initial-contents-p)
                                adjustable
                                fill-pointer)
  (let* ((dimensions (ensure-list dimensions))
         (size (!reduce #'* dimensions 1))
         (array (make-storage-vector size)))
    (cond ((eq fill-pointer t) (setq fill-pointer size))
          ((eq fill-pointer nil) nil)
          ((integerp fill-pointer)
           (if (or (< fill-pointer 0) (> fill-pointer size))
               (error "make-array - invalid FILL-POINTER ~a." fill-pointer)))
          (t (error "make-array - bad FILL-POINTER ~s type ~a." fill-pointer (type-of fill-pointer))))
    ;; Upgrade type
    (setq element-type (upgraded-array-element-type element-type))
    (case element-type
      (character
       (oset 1 array "stringp")
       (unless initial-element-p
         (setq initial-element #\space))))
    (when (and (listp dimensions)
               (not (null (cdr dimensions)))
               fill-pointer)
      (error "make-array - FILL-POINTER cannot be specified on multidimensional arrays."))
    ;; Record metadata
    (when (or (null dimensions) (cdr dimensions))
      (setf (oget array "dimensions") dimensions))
    (setf (oget array "fillpointer") fill-pointer)
    ;; Initialize array
    (when (and initial-element-p initial-contents-p)
      (error "make-array - INITIAL-ELEMENT and INITIAL-CONTENTS cannot both be provided"))
    (if initial-contents-p
        (%fill-array-contents array initial-contents)
        (storage-vector-fill array initial-element))
    array))

(defun arrayp (x)
  (storage-vector-p x))

(defun adjustable-array-p (array)
  (unless (arrayp array)
    (error 'type-error :datum array :expected-type 'array))
  t)

(defun array-element-type (array)
  (unless (arrayp array)
    (error 'type-error :datum array :expected-type 'array))
  (cond ((eq (oget array "stringp") 1) 'character)
        (t t)))

(defun array-dimensions (array)
  (unless (arrayp array)
    (error 'type-error :datum array :expected-type 'array))
  (if (vectorp array)
      (list (storage-vector-size array))
      (oget array "dimensions")))

(defun array-dimension (array axis)
  (let* ((dimensions (array-dimensions array))
         (la (length dimensions)))
    (if (>= axis la)
        (error "axis ~d is too big. Array ~s has ~d dimensions." axis array la))
    (nth axis dimensions)))

(defun aref (array &rest subscripts)
  (storage-vector-ref array (apply #'array-row-major-index array subscripts)))

(define-compiler-macro aref (&whole form array &rest subscripts)
  (cond ((= (length subscripts) 1)
         (let ((narray (gensym "ARRAY")))
           `(let ((,narray ,array))
              (if (vectorp ,narray)
                  (storage-vector-ref ,narray ,@subscripts)
                  (error 'type-error :datum ,narray :expected-type 'vector)))))
        (t form)))

(defun aset (array &rest subscripts-and-value)
  (let ((value (car (last subscripts-and-value)))
        (index (apply #'array-row-major-index array (nbutlast subscripts-and-value))))
    (when (and (stringp array) (not (characterp value)))
      (error 'type-error :datum value :expected-type 'character))
    (storage-vector-set array index value)))

(define-compiler-macro aset (&whole form array &rest subscripts-and-value)
  (cond ((= (length subscripts-and-value) 2)
         (let ((narray (gensym "ARRAY"))
               (nvalue (gensym "VALUE")))
           `(let ((,narray ,array)
                  (,nvalue ,(cadr subscripts-and-value)))
              (unless (vectorp ,narray)
                (error 'type-error :datum ,narray :expected-type 'vector))
              (when (and (stringp ,narray) (not (characterp ,nvalue)))
                (error 'type-error :datum ,nvalue :expected-type 'character))
              (storage-vector-set ,narray ,(car subscripts-and-value) ,nvalue))))
        (t form)))

(defsetf aref aset)

(defun array-rank (array)
  (unless (arrayp array)
    (error 'type-error :datum array :expected-type 'array))
  (if (vectorp array)
      1
      (length (oget array "dimensions"))))

(defun array-row-major-index (array &rest subscripts)
  (cond ((vectorp array) (car subscripts))
        ((arrayp array)
         (let ((result 0)
               (subs subscripts)
               (dimensions (oget array "dimensions")))
           (while dimensions
             (unless subs
               (error "Too few subscripts ~a for ~a" subscripts array))
             (let ((subscript (pop subs))
                   (dimension (pop dimensions)))
               (unless (<= 0 subscript (1- dimension))
                 (error "Subscript ~d out of range for dimension ~d"
                        subscript dimension))
               (setq result (+ subscript (* result dimension)))))
           (when subs
             (error "Too many subscripts ~a for ~a" subscripts array))
           result))
        (t (error 'type-error :datum array :expected-type 'array))))

(defun array-total-size (array)
  (unless (arrayp array)
    (error 'type-error :datum array :expected-type 'array))
  (storage-vector-size array))


(defun array-has-fill-pointer-p (array)
  (and (oget array "fillpointer") t))

(defun fill-pointer (array)
  (unless (arrayp array)
    (error 'type-error :datum array :expected-type 'array))
  (unless (array-has-fill-pointer-p array)
    (error "~S does not have a fill pointer" array))
  (oget array "fillpointer"))

(defun set-fill-pointer (array new-value)
  (unless (arrayp array)
    (error 'type-error :datum array :expected-type 'array))
  (unless (array-has-fill-pointer-p array)
    (error "~S does not have a fill pointer" array))
  (setf (oget array "fillpointer") new-value))

(defsetf fill-pointer set-fill-pointer)

(defun row-major-aref (array index)
  (unless (arrayp array)
    (error 'type-error :datum array :expected-type 'array))
  (storage-vector-ref array index))

(defun row-major-aset (array index value)
  (unless (arrayp array)
    (error 'type-error :datum array :expected-type 'array))
  (storage-vector-set array index value))

(defsetf row-major-aref row-major-aset)

;;; Constants

(defconstant array-dimension-limit (1- (expt 2 32)))

(defconstant array-rank-limit (1- (expt 2 32)))

(defconstant array-total-size-limit (1- (expt 2 32)))

;;; FIXME: implement proper (array bit)

(defun bit-vector-p (x)
  (storage-vector-p x))

(defun bit (array index)
  (aref array index))

(defun set-bit (array index value)
  (aset array index value))

(defsetf bit set-bit)

(defun svref (x i)
  (row-major-aref x i))

(defun svset (x i value)
  (row-major-aset x i value))

(defsetf svref svset)

;;; Vectors

(defun vectorp (x)
  (and (storage-vector-p x)
       (not (and (in "dimensions" x)
                 (listp (oget x "dimensions"))))))

(defun vector (&rest objects)
  (list-to-vector objects))

(defun vector-pop (vector)
  (unless (array-has-fill-pointer-p vector)
    (error "~S does not have a fill pointer"))
  (let ((element (aref vector (1- (length vector)))))
    (decf (fill-pointer vector))
    element))

(defun vector-push (element vector)
  (cond ((>= (fill-pointer vector)
            (array-dimension vector 0))
         nil)
        (t  (let ((prev-idx (fill-pointer vector)))
              ;; store and increment take place
              (storage-vector-set! vector prev-idx element)
              (incf (fill-pointer vector))
              prev-idx))))

(defun vector-push-extend (new-element vector)
  (unless (vectorp vector)
    (error "~S is not a vector." vector))
  ;; Note that JS will automatically grow the array as new elements
  ;; are assigned, so no need to do `adjust-array` here.
  (storage-vector-set! vector (fill-pointer vector) new-element)
  (prog1 (fill-pointer vector)
    (incf (fill-pointer vector))))

(defun shrink-vector (vector length)
  (unless (vectorp vector)
    (error "~S is not a vector." vector))
  (setf (oget vector "length") length)
  (delete-property "fillpointer" vector)
  vector)

;;; EOF
