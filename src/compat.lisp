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

;;; Duplicate from boot.lisp by now
(defmacro while (condition &body body)
  `(do ()
       ((not ,condition))
     ,@body))

(defun aset (array idx value)
  (setf (aref array idx) value))

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun concat (&rest strs)
    (apply #'concatenate 'string strs)))

(defun /debug (x)
  (declare (ignorable x))
  ;; (write-line x)
  )

(defun jscl/ffi-ignore (&rest _)
  (declare (ignore _))
  (error "JSCL/FFI only works within JSCL."))
(mapc (lambda (s)
        (setf (symbol-function s) #'jscl/ffi-ignore))
      '(jscl/ffi::make-new jscl/ffi::oget jscl/ffi::oget* jscl/ffi::new))
(define-symbol-macro jscl/ffi::*root*
    (jscl/ffi-ignore 'jscl/ffi::*root*))

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
  (and (realp rational)
       (let ((f (coerce rational 'double-float)))
         (and (= f rational)
              (list /
                    (numerator rational)
                    (denominator rational))))))


(defun !fdefinition-soft (name)
  (ignore-errors (fdefinition name)))

;;; Storage Vectors

;; Provide a ANSI compatible implementation of storage vectors.
(defstruct (storage-vector
             (:constructor make-storage-vector-1))
  underlying-vector)

(defun make-storage-vector (n)
  (make-storage-vector-1 :underlying-vector (make-array n :adjustable t)))

(defun storage-vector-size (sv)
  (length (storage-vector-underlying-vector sv)))

(defun resize-storage-vector (sv new-size)
  (let ((v (storage-vector-underlying-vector sv)))
    (adjust-array v new-size)
    sv))

(defun storage-vector-ref (sv n)
  (aref (storage-vector-underlying-vector sv) n))

(defun storage-vector-set (sv n value)
  (setf (aref (storage-vector-underlying-vector sv) n) value))

(defun concatenate-storage-vector (sv1 sv2)
  (let* ((sv (make-storage-vector (+ (storage-vector-size sv1)
                                     (storage-vector-size sv2))))
         (v (storage-vector-underlying-vector sv)))
    (setf (subseq v 0 (storage-vector-size sv1))
          (storage-vector-underlying-vector sv1))
    (setf (subseq v (storage-vector-size sv1))
          (storage-vector-underlying-vector sv2))
    sv))
