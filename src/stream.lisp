;;; stream.lisp ---

;; copyright (C) 2012, 2013 David Vazquez
;; Copyright (C) 2012 Raimon Grau

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

;;; TODO: Use structures to represent streams, but we would need
;;; inheritance.

(/debug "loading stream.lisp!")

(defvar *standard-output*)

(defun streamp (x)
  (and (vectorp x) (eq (aref x 0) 'stream)))

(defun write-char (char &optional (stream *standard-output*))
  (funcall (aref stream 1) char))

(defun write-string (string &optional (stream *standard-output*))
  (funcall (aref stream 2) string))


(defun make-string-output-stream ()
  (let ((buffer (make-string 0)))
    (vector 'stream
            ;; write-char
            (lambda (ch)
              (vector-push-extend ch buffer))
            (lambda (string)
              (dotimes (i (length string))
                (vector-push-extend (aref string i) buffer)))
            'string-stream
            buffer)))

(defun get-output-stream-string (stream)
  (eq (aref stream 3) 'string-stream)
  (prog1 (aref stream 4)
    (aset stream 4 (make-string 0))))

(defmacro with-output-to-string ((var) &body body)
  `(let ((,var (make-string-output-stream)))
     ,@body
     (get-output-stream-string ,var)))
