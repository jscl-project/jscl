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
       (subtypep (car (storage-vector-kind x)) 'output-stream)))

(defun console-log ()
  (jscl/ffi:oget* jscl/ffi:*root* "console" "log"))

(defvar *stream-generic-functions*
  (list 'string-output-stream
        (list 'force-output
              (lambda (stream)
                (declare (ignore stream)))
              'write-char 
              (lambda (char stream)
                (vector-push-extend char (storage-vector-underlying-vector 
                                          stream)))
              'write-string 
              (lambda (string stream)
                (dotimes (i (length string))
                  (vector-push-extend (aref string i) 
                                      (storage-vector-underlying-vector
                                       stream)))))
        'web-console-output-stream
        (list 'force-output
              (lambda (stream)
                (funcall (console-log) (storage-vector-underlying-vector
                                        stream))
                (setq (storage-vector-underlying-vector stream) ""))
              'write-char
              (lambda (stream char)
                (vector-push-extend char (storage-vector-underlying-vector
                                          stream))
                (when (member ch '(#\newline #\return #\page))
                  (jscl/cl::force-output stream)))
              'write-string
              (lambda (string)
                (jscl/cl::force-output stream)
                (funcall (console-log) string)))))

;; FIXME: Define web-console-output-stream to be a subtype of output-stream

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

(defun jscl/cl::force-output (char &optional (stream *standard-output*)) 
  (assert (jscl/cl::output-stream-p stream))
  (funcall (stream-generic-method stream 'force-output) char stream))

(defun jscl/cl::finish-output (char &optional (stream *standard-output*)) 
  "Just calls FORCE-OUTPUT for now. We're not CLIM yet ☹"
  (assert (jscl/cl::output-stream-p stream))
  (funcall (stream-generic-method stream 'force-output) char stream))

(defun jscl/cl::write-string (string &optional (stream *standard-output*))
  (assert (jscl/cl::output-stream-p stream))
  (funcall (stream-generic-method stream 'write-string) string stream))

(defun jscl/cl::make-string-output-stream ()
  (make-storage-vector 0 '(string-output-stream)))

(defun jscl/cl::make-web-console-output-stream ()
  (make-storage-vector 0 '(web-console-output-stream)))

(defun jscl/cl::get-output-stream-string (stream)
  (assert (eq (car (storage-vector-kind stream)) 'string-output-stream))
  (copy-seq (storage-vector-underlying-vector stream)))

(defmacro jscl/cl::with-output-to-string ((var) &body body)
  `(let ((,var (make-string-output-stream)))
     ,@body
     (get-output-stream-string ,var)))
