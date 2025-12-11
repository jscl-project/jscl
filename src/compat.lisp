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

(defun j-reader (stream subchar arg)
  (declare (ignorable subchar arg))
  (assert (char= #\: (read-char stream nil :eof)) nil "FFI descriptor must start with a semicolon.")
  (loop :for ch := (read-char stream nil #\Space)
        :until (terminalp ch)))

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
