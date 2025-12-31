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
(defvar *error-output*)
(defvar *trace-output*)

(def!struct (stream (:predicate streamp))
  write-fn
  read-char-fn
  peek-char-fn
  (finish-output-fn (lambda ()))
  kind
  data
  at-line-start)

(defun start-line-p (&optional (stream *standard-output*))
  (stream-at-line-start stream))

(defun output-stream-p (obj)
  (and (streamp obj) (stream-write-fn obj)))

(defun input-stream-p (obj)
  (and (streamp obj) (stream-peek-char-fn obj)))

(defun stream-element-type (stream)
  (unless (streamp stream)
    (error 'type-error :datum stream :expected-type 'stream))
  ;; Only CHARACTER is implemented
  'character)

;;; Macros

(defmacro with-input-from-string ((var string) &body body)
  ;; TODO: &key start end index
  `(let ((,var (make-string-input-stream ,string)))
     ,@body))

(defmacro with-output-to-string ((var &optional string-form
                                  &key (element-type ''character))
                                 &body body)
  `(let ((,var (if ,string-form
                   (%make-fill-pointer-output-stream string)
                   (make-string-output-stream :element-type ,element-type))))
     ,@body
     (get-output-stream-string ,var)))

;;; Input stream operations

(defun peek-char (&optional type (stream *standard-input*) (eof-error-p t))
  (unless (null type)
    (error "peek-char with non-null TYPE is not implemented."))
  (funcall (stream-peek-char-fn stream) eof-error-p))

(defun read-char (&optional (stream *standard-input*) (eof-error-p t))
  (funcall (stream-read-char-fn stream) eof-error-p))

(defun read-line (&optional (stream *standard-input*) (eof-error-p t))
  (let* ((eof nil)
         (string
           (with-output-to-string (s)
             (loop
               (let ((ch (read-char stream nil)))
                 (case ch
                   (#\newline (return))
                   ((nil) (setq eof t) (return))
                   (t (write-char ch s))))))))
    (if (and eof (zerop (string-length string)))
        (if eof-error-p
            (error 'end-of-file :stream stream)
            (values nil t))
        (values string eof))))

(defun read-sequence (sequence stream &key (start 0) end)
  (cond ((vectorp sequence)
         (let ((end (or end (length sequence))))
           (do ((i start (1+ i)))
               ((<= end i) i)
             (let ((ch (read-char stream nil)))
               (if ch (setf (aref sequence i) ch)
                   (return i))))))
        (t (error "read-sequence for sequence type ~A not implemented"
                  (type-of sequence)))))

;;; Output stream operations

(defun write-char (char &optional (stream *standard-output*))
  (setf (stream-at-line-start stream) nil)
  (if (eql char #\Newline)
      (setf (stream-at-line-start stream) t))
  (funcall (stream-write-fn stream) (string char))
  char)

(defun !write-string (string &optional (stream *standard-output*))
  (if (eql (char string (1- (length string))) #\Newline)
      (setf (stream-at-line-start stream) t)
      (setf (stream-at-line-start stream) nil))
  (funcall (stream-write-fn stream) string)
  string)

(defun write-string (string &optional (stream *standard-output* stream-p) &key (start 0) end)
  (let* ((sl (length string))
         (end (or end sl)))
    (unless (streamp stream)
      (error "write-string - malformed stream ~a. Use full (string stream ...) form." stream))
    (cond ((eq sl 0) "")
          ((and (= 0 start) (= sl end))
           (!write-string string stream))
          (t (!write-string (subseq string start end) stream)))))

(defun write-sequence (seq stream &key (start 0) end)
  (if (stringp seq)
      (write-string seq stream :start start :end end)
      ;; TODO: use COERCE when it is ready
      (write-string (map 'string #'identity (subseq seq start end)) stream)))

(defun write-line (string &optional (stream *standard-output*) &rest keys)
  (apply #'write-string string stream keys)
  (write-char #\Newline stream)
  string)

(defun finish-output (&optional (stream *standard-output*))
  (funcall (stream-finish-output-fn stream))
  nil)

(fset 'force-output #'finish-output)

(fset 'clear-output #'finish-output)

;;; Input streams

(defun make-string-input-stream (string)
  (let ((index 0)
        (stream nil))
    (flet ((peek (eof-error-p)
             (cond
               ((< index (length string))
                (char string index))
               (eof-error-p
                (error 'end-of-file :stream stream))
               (t
                nil))))

      (setq stream
            (make-stream
             :read-char-fn (lambda (eof-error-p)
                             (prog1 (peek eof-error-p)
                               (incf index)))
             :peek-char-fn (lambda (eof-error-p)
                             (peek eof-error-p))
             :kind 'string-input-stream)))))

;;; Output streams

(defun %make-fill-pointer-output-stream (buffer)
  ;; WRITE-FN need to close over STREAM so it can access the buffer via
  ;; STREAM-DATA. We will replace STREAM-DATA in GET-OUTPUT-STREAM-STRING.
  (let ((stream nil))
    (setq stream
          (make-stream
           :write-fn (lambda (string)
                       (dotimes (i (length string))
                         (vector-push-extend (aref string i) (stream-data stream))))
           :kind 'string-output-stream
           :data buffer
           :at-line-start t))))

(defun make-string-output-stream (&key (element-type 'character))
  (assert (eql element-type 'character))
  (%make-fill-pointer-output-stream
   (make-array 0 :element-type 'character :fill-pointer 0)))

(defun get-output-stream-string (stream)
  (prog1 (stream-data stream)
    (setf (stream-data stream) (make-array 0 :element-type 'character :fill-pointer 0))))

(defun make-broadcast-stream (&rest streams)
  (make-stream :write-fn
               (lambda (string)
                 (dolist (s streams)
                   (funcall (stream-write-fn s) string)))
               :data streams
               :kind 'broadcast-stream))

(defun broadcast-stream-streams (stream)
  (assert (eql (stream-kind stream) 'broadcast-stream))
  (stream-data stream))

(defun make-line-buffer-stream (stream)
  "Buffer output to STREAM until we see a newline."
  (let ((buffer (make-string-output-stream)))
    (flet ((finish ()
             (funcall (stream-write-fn stream) (get-output-stream-string buffer))))
      (make-stream
       :write-fn (lambda (string)
                   (write-string string buffer)
                   (when (find #\newline string) (finish)))
       :finish-output-fn #'finish
       :kind 'console-output-stream))))

;;; EOF
