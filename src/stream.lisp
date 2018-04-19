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
(defvar *standard-input*)

(def!struct (stream (:predicate streamp))
  write-fn
  read-char-fn
  peek-char-fn
  kind
  data)


;;; Input streams

(defun make-string-input-stream (string)
  (let ((index 0))
    (flet ((peek (eof-error-p)
             (cond
               ((< index (length string))
                (char string index))
               (eof-error-p
                (error "End of file"))
               (t
                nil))))

      (make-stream
       :read-char-fn (lambda (eof-error-p)
                       (prog1 (peek eof-error-p)
                         (incf index)))

       :peek-char-fn (lambda (eof-error-p)
                       (peek eof-error-p))))))

(defun peek-char (&optional type (stream *standard-input*) (eof-error-p t))
  (unless (null type)
    (error "peek-char with non-null TYPE is not implemented."))
  (funcall (stream-peek-char-fn stream) eof-error-p))

(defun read-char (&optional (stream *standard-input*) (eof-error-p t))
  (funcall (stream-read-char-fn stream) eof-error-p))


;;; Ouptut streams

(defun write-char (char &optional (stream *standard-output*))
  (funcall (stream-write-fn stream) (string char)))

(defun write-string (string &optional (stream *standard-output*))
  (funcall (stream-write-fn stream) string))

(defun make-string-output-stream ()
  (let ((buffer (make-string 0)))
    (make-stream
     :write-fn (lambda (string)
       (dotimes (i (length string))
         (vector-push-extend (aref string i) buffer)))
     :kind 'string-stream
     :data buffer)))

(defun get-output-stream-string (stream)
  (prog1 (stream-data stream)
    (setf (stream-data stream) (make-string 0))))

(defmacro with-output-to-string ((var) &body body)
  `(let ((,var (make-string-output-stream)))
     ,@body
     (get-output-stream-string ,var)))
