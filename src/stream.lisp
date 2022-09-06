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
  data
  (direction :out)
  at-line-start)

;;; @vkm path stream.lisp 04-09-2022
(defun start-line-p (&optional (stream *standard-output*))
  (stream-at-line-start stream))

(defun stream-p (obj)
  (if (and (structure-p obj)
           (eql (car obj) 'stream))
      t
      nil))

(defun output-stream-p (obj)
  (and (stream-p obj)
       (eql (stream-direction obj) :out)))
;;; end @vkm path

;;; Input streams

(defun make-string-input-stream (string)
  (let ((index 0))
    (flet ((peek (eof-error-p)
             (cond
               ((< index (length string))
                (char string index))
               (eof-error-p
                (error "make-string-input-stream end of file."))
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


;;; Output streams

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


(defun write-string  (string &optional (stream *standard-output* stream-p) &rest keys)
  (let ((sl (length string)))
    (let* ((no-keys (null keys))
           (start)
           (end)
           (write-string-invalid-range-seq)
           (write-string-nondecreasing-order-seq))
      (cond (stream-p
             (if (streamp stream) t
               (error "write-string - malformed stream ~a. Use full (string stream ...) form." stream))))
      (cond ((eq sl 0) "")
            (no-keys (!write-string string stream))
            (t (setq start (getf keys :start 0)
                     end (getf keys :end sl)
                     write-string-invalid-range-seq (/= start end)
                     write-string-nondecreasing-order-seq (<= 0 start end sl))
               (assert write-string-invalid-range-seq)
               (assert write-string-nondecreasing-order-seq)
               (!write-string (subseq string start end) stream))))))

(defun write-line (string &optional (stream *standard-output*) &rest keys)
  (prog1
      (if (null keys) 
          (!write-string string stream)
          (let ((start (getf keys :start 0))
                (end (getf keys :end (length string))))
            (!write-string (subseq string start end) stream)
            (write-char #\Newline stream)))))

(defun make-string-output-stream ()
  (let ((buffer (make-array 0 :element-type 'character :fill-pointer 0)))
    (make-stream
     :write-fn (lambda (string)
       (dotimes (i (length string))
         (vector-push-extend (aref string i) buffer)))
     :kind 'string-stream
     :data buffer
     :at-line-start t)))

(defmacro with-input-from-string ((var string) &body body)
  ;; TODO: &key start end index
  `(let ((,var (make-string-input-stream ,string)))
     ,@body))

(defun get-output-stream-string (stream)
  (prog1 (stream-data stream)
    (setf (stream-data stream) (make-string 0))))

(defmacro with-output-to-string ((var) &body body)
  `(let ((,var (make-string-output-stream)))
     ,@body
     (get-output-stream-string ,var)))

;;; replace sequences - http://clhs.lisp.se/Body/f_replac.htm
;;;   string <- string
;;;   vector <- vector
;;;   otherwise =>error

(defun %replace-seq-eql (x y)
  (typecase x
    (number (and (numberp y) (= x y)))
    (character (and (characterp y) (char-equal x y)))
    (string
     (and (stringp y)
          (equal x y) ))
    (vector
     (and (vectorp y)
          (let ((lex (length x)))
            (= lex (length y))
            (dotimes (i lex t)
              (when (not (%replace-seq-eql (aref x i) (aref y i)))
                (return nil))))))
    (t (equal x y))))

(defun %replace-seq (seq-1 seq-2 start1 end1 start2 end2)
  (let* ((trimed-end (min (- end1 start1) (- end2 start2)))
         (back nil))
    (setq end1 (+ start1 trimed-end)
          end2 (+ start2 trimed-end))
    ;; set copy bacward flag
    (when (and (%replace-seq-eql seq-1 seq-2)
               (<= start2 start1)
               (or (and (<= start1 start2) (< start2 end1))
                   (and (< start1 end2) (<= end2 end1))
                   (and (<= start2 start1) (< start1 end2))
                   (and (< start2 end1) (<= end1 end2))))
      (when (eq start1 start2)
        ;; nothing to copy
        (return-from %replace-seq seq-1))
      (setq back t))
    (cond (back
           (dotimes (i trimed-end seq-1)
             (setf (aref seq-1 (- (+ start1 trimed-end) i 1))
                   (aref seq-2 (- (+ start2 trimed-end) i 1)))))
          (t
           (dotimes (i trimed-end seq-1)
             (setf (aref seq-1 (+ start1 i))
                   (aref seq-2 (+ start2 i))))))
    ))

(defun replace (sequence-1
                sequence-2
                &key (start1 0)
                (end1 (length sequence-1))
                (start2 0) (end2 (length sequence-2)))
  (let ((compatible-types-replace (eql (array-element-type sequence-1)
                                       (array-element-type sequence-2)))
        (region-nondecreasing-order-seq-1 (<= 0 start1 end1 (length sequence-1)))
        (region-nondecreasing-order-seq-2 (<= 0 start2 end2 (length sequence-2))))
    (assert compatible-types-replace)
    ;; check region monotonically nondecreasing order
    (assert region-nondecreasing-order-seq-1)
    (assert region-nondecreasing-order-seq-2))
  (%replace-seq sequence-1 sequence-2 start1 end1 start2 end2))

;;; EOF
