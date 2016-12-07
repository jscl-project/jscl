;;; stream.lisp —

;; Copyright © 2012, 2013 David Vazquez 
;;; Copyright © 2012 Raimon Grau

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

;;; TODO:   Use  structures   to   represent  streams,   but  we   would
;;; need inheritance.

(/debug "loading stream.lisp!")

(defvar jscl/cl::*standard-output*)

(defun jscl/cl::streamp (x)
  (and (storage-vector-p x) 
       (subtypep (car (storage-vector-kind x)) 'stream)))

(defun jscl/cl::output-stream-p (x)
  (and (streamp x) 
       (find (second (storage-vector-kind x)) '(output i/o))))

(defvar *stream-generic-functions*
  (cons 'string-stream
        (list 'write-char 
              (lambda (char stream)
                (vector-push-extend ch buffer))
              'write-string 
              (lambda (string stream)
                (dotimes (i (length string))
                  (vector-push-extend (aref string i) buffer))))))

(defun stream-generic-method (stream method)
  (or (getf (or (getf *stream-generic-functions*
                      (car (storage-vector-kind stream)))
                (error "Stream class ~s has no methods"
                       (car (storage-vector-kind stream))))
            method)
      (error "Stream class ~s has no method ~s"
             (car (storage-vector-kind stream)) method)))

(defun jscl/cl::write-char (char &optional (stream *standard-output*)) 
  (assert (jscl/cl::output-stream-p stream))
  (funcall (stream-generic-method stream 'write-char) char stream))

(defun jscl/cl::write-string (string &optional (stream *standard-output*))
  (assert (jscl/cl::output-stream-p stream))
  (funcall (stream-generic-method stream 'write-string) string stream))

(defun jscl/cl::make-string-output-stream ()
  (make-storage-vector 0 '(string-stream output)))

(defun jscl/cl::get-output-stream-string (stream)
  (assert (eq (car (storage-vector-kind stream)) 'string-stream))
  (copy-seq (storage-vector-underlying-vector)))

(defmacro jscl/cl::with-output-to-string ((var) &body body)
  `(let ((,var (make-string-output-stream)))
     ,@body
     (get-output-stream-string ,var)))
