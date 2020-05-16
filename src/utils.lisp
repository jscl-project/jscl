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

(/debug "loading utils.lisp!")

(defmacro with-collect (&body body)
  "Makes available to BODY a function named collect. The function accumulates
values passed to it. The return value of with-collect is the list of values
accumulated, in the order."
  (let ((head (gensym))
        (tail (gensym)))
    `(let* ((,head (cons 'sentinel nil))
            (,tail ,head))
       (flet ((collect (x)
                (rplacd ,tail (cons x nil))
                (setq ,tail (cdr ,tail))
                x))
         ,@body)
       (cdr ,head))))

(defmacro with-collector ((name &optional (collector (intern (format nil "COLLECT-~a" (symbol-name name))))) &body body)
  "Similar to `with-collect' with the following differences:
  1) However the list where the values are being accumulated is available to the body by the name NAME.
  2) The name COLLECTOR function can be passed as a parameter
  3) The return value the last form of BODY"
  (let ((head (gensym))
        (tail (gensym)))
    `(let* ((,head (cons 'sentinel nil))
            (,tail ,head))
       (symbol-macrolet ((,name (cdr ,head)))
         (flet ((,collector (x)
                  (rplacd ,tail (cons x nil))
                  (setq ,tail (cdr ,tail))
                  x))
           ,@body)))))

(defmacro concatf (variable &body form)
  `(setq ,variable (concat ,variable (progn ,@form))))

;;; This couple of helper functions will be defined in both Common
;;; Lisp and in JSCL
(defun ensure-list (x)
  (if (listp x)
      x
      (list x)))

(defun !reduce (func list initial-value)
  (let ((result initial-value))
    (dolist (element list result)
      (setq result (funcall func result element)))))

;;; Concatenate a list of strings, with a separator
(defun join (list &optional (separator ""))
  (if (null list)
      ""
      (!reduce (lambda (s o) (concat s separator o))
               (cdr list)
               (car list))))

(defun join-trailing (list &optional (separator ""))
  (if (null list)
      ""
      (concat (car list) separator (join-trailing (cdr list) separator))))

(defun mapconcat (func list)
  (join (mapcar func list)))

(defun vector-to-list (vector)
  (let ((size (length vector)))
    (with-collect
      (dotimes (i size)
        (collect (aref vector i))))))

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
         (push (rem x 10) digits)
         (setq x (truncate x 10)))
       (mapconcat (lambda (x) (string (digit-char x)))
		              digits)))))

(defun float-to-string (x)
  #+jscl (float-to-string x)
  #-jscl (format nil "~f" x))

(defun satisfies-test-p (x y &key key (test #'eql) testp (test-not #'eql) test-not-p)
  (when (and testp test-not-p)
    (error "Both test and test-not are set"))
  (let ((key-val (if key (funcall key y) y))
        (fn (if test-not-p (complement test-not) test)))
    (funcall fn x key-val)))


(defun interleave (list element &optional after-last-p)
  (unless (null list)
    (with-collect
      (collect (car list))
      (dolist (x (cdr list))
        (collect element)
        (collect x))
      (when after-last-p
        (collect element)))))


(defun find-package-or-fail (package-designator)
  (or (find-package package-designator)
      (error "The name `~S' does not designate any package." package-designator)))
