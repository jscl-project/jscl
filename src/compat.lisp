;;; compat.lisp --- Create some definitions to fix CL compatibility

;; Copyright (C) 2012, 2013 David Vazquez Copyright (C) 2012 Raimon Grau

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

(in-package :jscl)

(defmacro while (condition &body body)
  `(do ()
       ((not ,condition))
     ,@body))

(defun aset (array idx value)
  (setf (aref array idx) value))

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun concat (&rest strs)
    (apply #'concatenate 'string strs)))

(defun /debug (message) 
  (format *trace-output* "~&DEBUG: ~a" message))

(defvar jscl/ffi:*root* (make-hash-table :test 'equal))

(defun jscl/ffi:make-new (class)
  (declare (ignore class))
  (make-hash-table :test 'equal))

(defun (setf jscl/ffi:oget) (value object key)
  (setf (gethash key object) value))

(defun jscl/ffi:oget* (object &rest keys)
  (cond ((null keys)
         nil)
        ((null (cdr keys))
         (jscl/ffi:oget object (first keys)))
        (t 
         (jscl/ffi:oget (jscl/ffi:oget* object (rest keys))
                        (first keys)))))

(defun jscl/ffi:oget (object key)
  (gethash key object))

(defun j-reader (stream subchar arg)
  (declare (ignorable subchar arg))
  (assert (char= #\: (read-char stream nil :eof))
          nil "FFI descriptor must start with a colon.")
  (let ((descriptor (subseq (read-until stream #'terminalp) 0))
        (subdescriptors nil))
    (do* ((start 0 (1+ end))
          (end (position #\: descriptor :start start)
               (position #\: descriptor :start start)))
         ((null end)
          (push (subseq descriptor start) subdescriptors)
          `(lambda (&rest args)
             (apply (jscl/ffi::oget* jscl/ffi::*root* ,@(reverse subdescriptors)) args)))
      (push (subseq descriptor start end) subdescriptors))))

(defmacro with-sharp-j (&body body)
  (let ((readtable-before (gensym "READTABLE-BEFORE-")))
    `(let ((,readtable-before (copy-readtable))
           (*readtable* (copy-readtable)))
       (set-dispatch-macro-character #\# #\J #'j-reader)
       (unwind-protect
            (progn ,@body)
         (setf *readtable* ,readtable-before)))))

(defun read-#j ()
  (set-dispatch-macro-character #\# #\J #'j-reader))

(defun rational-float-p (rational)
  "Determine   whether  a   rational  number   can  be   represented  as
a       floating-point      number       accurately      at       double
precision (like JavaScript.)

Returns  multiple  values; the  first  value  is a  generalized  boolean
telling whether the number is  equal to its nearest float representation
under =; the secondary value is a list that represents the division that
produces the rational number. If the  number provided is not rational at
all, it returns only a single value: nil.

EG: 

      (rational-float-p 1/3) → (values nil '(/ 1 3))

      (rational-float-p 1/2) → (values T '(/ 1 3))"
  (and (rationalp rational)
       (let ((float (coerce rational 'double-float)))
         (values (= float rational)
                 (list '/
                       (numerator rational)
                       (denominator rational))))))

;;; Storage Vectors
;;;
;;; Provide a ANSI compatible implementation of storage vectors.
(defstruct (storage-vector
             (:constructor make-storage-vector-1))
  underlying-vector)

(defun make-storage-vector (initial-size) 
  (check-type initial-size (integer 0 *))
  (make-storage-vector-1 :underlying-vector (make-array initial-size :adjustable t)))

(defun storage-vector-size (storage-vector)
  (check-type storage-vector storage-vector) 
  (length (storage-vector-underlying-vector storage-vector)))

(defun resize-storage-vector (storage-vector new-size)
  (check-type storage-vector storage-vector)
  (check-type new-size (integer 0 *))
  (let ((underlying-vector (storage-vector-underlying-vector storage-vector)))
    (adjust-array underlying-vector new-size)
    storage-vector))

(defun storage-vector-ref (storage-vector index)
  (check-type storage-vector storage-vector)
  (check-type index (integer 0 *))
  (aref (storage-vector-underlying-vector storage-vector) index))

(defun storage-vector-set (storage-vector index new-value)
  (check-type storage-vector storage-vector)
  (check-type index (integer 0 *)) 
  (setf (aref (storage-vector-underlying-vector storage-vector) index)
        new-value))

(defun concatenate-storage-vector (sv1 sv2)
  (check-type sv1 storage-vector)
  (check-type sv2 storage-vector)
  (let* ((sv (make-storage-vector (+ (storage-vector-size sv1)
                                     (storage-vector-size sv2))))
         (v (storage-vector-underlying-vector sv)))
    (setf (subseq v 0 (storage-vector-size sv1))
          (storage-vector-underlying-vector sv1))
    (setf (subseq v (storage-vector-size sv1))
          (storage-vector-underlying-vector sv2))
    sv))


(defun !fdefinition-soft (name)
  (ignore-errors (fdefinition name)))
