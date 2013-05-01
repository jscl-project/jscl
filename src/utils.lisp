;;; utils.lisp ---

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

(defvar *newline* (string (code-char 10)))

(defmacro concatf (variable &body form)
  `(setq ,variable (concat ,variable (progn ,@form))))

;;; This couple of helper functions will be defined in both Common
;;; Lisp and in Ecmalisp.
(defun ensure-list (x)
  (if (listp x)
      x
      (list x)))

(defun !reduce (func list &key initial-value)
  (if (null list)
      initial-value
      (!reduce func
               (cdr list)
               :initial-value (funcall func initial-value (car list)))))

;;; Concatenate a list of strings, with a separator
(defun join (list &optional (separator ""))
  (cond
    ((null list)
     "")
    ((null (cdr list))
     (car list))
    (t
     (concat (car list)
             separator
             (join (cdr list) separator)))))

(defun join-trailing (list &optional (separator ""))
  (if (null list)
      ""
      (concat (car list) separator (join-trailing (cdr list) separator))))

(defun mapconcat (func list)
  (join (mapcar func list)))

(defun vector-to-list (vector)
  (let ((list nil)
	(size (length vector)))
    (dotimes (i size (reverse list))
      (push (aref vector i) list))))

(defun list-to-vector (list)
  (let ((v (make-array (length list)))
	(i 0))
    (dolist (x list v)
      (aset v i x)
      (incf i))))

(defmacro awhen (condition &body body)
  `(let ((it ,condition))
     (when it ,@body)))

(defun integer-to-string (x)
  (cond
    ((zerop x)
     "0")
    ((minusp x)
     (concat "-" (integer-to-string (- 0 x))))
    (t
     (let ((digits nil))
       (while (not (zerop x))
         (push (mod x 10) digits)
         (setq x (truncate x 10)))
       (mapconcat (lambda (x) (string (digit-char x)))
		  digits)))))

(defun float-to-string (x)
  #+jscl (float-to-string x)
  #+common-lisp (format nil "~f" x))
