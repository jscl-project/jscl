;;; compat.lisp --- Create some definitions to fix CL compatibility

;; Copyright (C) 2012, 2013 David Vazquez
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

;;;; Host compatibility types for FFI
;;;;
;;;; JS values don't exist in the host. These structs stand in for them
;;;; so the compiler can recognize and dump FFI literals.

(defstruct js-value)

(defstruct (js-string (:include js-value)
                      (:constructor make-js-string (value))
                      (:predicate %host-js-string-p))
  value)

(defstruct (js-boolean (:include js-value)
                       (:constructor %make-js-boolean (value)))
  value)

(defstruct (js-null (:include js-value)
                    (:constructor %make-js-null)))

(defstruct (js-undefined (:include js-value)
                         (:constructor %make-js-undefined)))

;;;; Constants for the host.
;;;; The reader (#j:true, etc.) returns these cached objects so that EQ
;;;; comparisons work reliably across different read sites.
(defvar *host-js-true* (%make-js-boolean t))
(defvar *host-js-false* (%make-js-boolean nil))
(defvar *host-js-null* (%make-js-null))
(defvar *host-js-undefined* (%make-js-undefined))

;;;; make-load-form methods so SBCL can serialize these structs into FASLs.
;;;; When #j:true etc. appear as literal constants in compiled source,
;;;; SBCL needs to know how to reconstruct them at FASL load time.
(defmethod make-load-form ((obj js-boolean) &optional env)
  (declare (ignore env))
  (if (js-boolean-value obj) '*host-js-true* '*host-js-false*))

(defmethod make-load-form ((obj js-null) &optional env)
  (declare (ignore env))
  '*host-js-null*)

(defmethod make-load-form ((obj js-undefined) &optional env)
  (declare (ignore env))
  '*host-js-undefined*)

(defmethod make-load-form ((obj js-string) &optional env)
  (declare (ignore env))
  `(make-js-string ,(js-string-value obj)))

(defun jsstring (x)
  (make-js-string x))

;;;; Reader utilities needed by read-sharp-j
;;;;
;;;; These are also defined in read.lisp for the target. The host
;;;; definitions here make #j: available early in the bootstrap.

(defun %peek-char (stream)
  (peek-char nil stream nil))

(defun %read-char (stream)
  (read-char stream nil))

(defun whitespacep (ch)
  (or (char= ch #\space) (char= ch #\newline) (char= ch #\tab) (char= ch #\page)))

(defun terminating-char-p (ch)
  (or (char= #\" ch)
      (char= #\) ch)
      (char= #\( ch)
      (char= #\` ch)
      (char= #\, ch)
      (char= #\' ch)
      (char= #\; ch)))

(defun terminalp (ch)
  (or (null ch) (whitespacep ch) (terminating-char-p ch)))

(defun read-until (stream func)
  (let ((string "")
        (ch))
    (setq ch (%peek-char stream))
    (while (and ch (not (funcall func ch)))
      (setq string (concat string (string ch)))
      (%read-char stream)
      (setq ch (%peek-char stream)))
    string))

(defun simple-reader-error (stream format-control &rest format-arguments)
  (declare (ignore stream))
  (apply #'error format-control format-arguments))

;;;; #j reader dispatch macro

(defun j-reader (stream subchar arg)
  (declare (ignorable subchar arg))
  (read-sharp-j stream))

(set-dispatch-macro-character #\# #\J #'j-reader)

#+sbcl
(eval-when (:compile-toplevel :load-toplevel :execute)
  (require :sb-posix))

(defun get-source-data-epoch ()
  (let (sde)
    #+ccl (setq sde (ccl::getenv "SOURCE_DATE_EPOCH"))
    #+sbcl (setq sde (sb-posix:getenv "SOURCE_DATE_EPOCH"))
    ;; other compiler - will be nil
    (if sde
        (+ (parse-integer sde) 2208988800))))

(setf (symbol-function 'simple-format) #'format)
