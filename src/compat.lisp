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

;;; In JSCL (Stage 1), native FFI is already available. In the host
;;; (SBCL), we need compatibility types and reader macros.
#-jscl
(progn
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

  ;; Constants for the host.
  ;; The reader (#j:true, etc.) returns these cached objects so that EQ
  ;; comparisons work reliably across different read sites.
  (defvar *host-js-true* (%make-js-boolean t))
  (defvar *host-js-false* (%make-js-boolean nil))
  (defvar *host-js-null* (%make-js-null))
  (defvar *host-js-undefined* (%make-js-undefined))

  ;; Interning table for host JS strings.
  ;; jsstring interns so that EQ comparisons work, matching the
  ;; target behaviour where JS === compares strings by value.
  (defvar *js-string-intern-table* (make-hash-table :test 'equal))

  (defun jsstring (x)
    (or (gethash x *js-string-intern-table*)
	(setf (gethash x *js-string-intern-table*)
	      (make-js-string x))))

  (defun jsbool (x)
    (if x *host-js-true* *host-js-false*))

  (defun jsnull ()
    *host-js-null*)

  (defun jsundefined ()
    *host-js-undefined*)

(defun typeof (x)
  (typecase x
    (number (jsstring "number"))
    (js-string (jsstring "string"))
    (js-boolean (jsstring "boolean"))
    (js-undefined (jsstring "undefined"))
    (otherwise (jsstring "object"))))

(defun clstring% (x)
  (js-string-value x))

(defun clstring (x)
  (cond
    ((stringp x) x)
    ((%host-js-string-p x) (clstring% x))
    (t (error 'type-error :datum x :expected-type '(or string js-string)))))

;;;; #j reader dispatch macro

  (defun j-reader (stream subchar arg)
    (declare (ignorable subchar arg))
    (read-sharp-j stream))

  (set-dispatch-macro-character #\# #\J #'j-reader))



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
