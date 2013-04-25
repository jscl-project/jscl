;;; boot.lisp --- First forms to be cross compiled

;; Copyright (C) 2012, 2013 David Vazquez
;; Copyright (C) 2012 Raimon Grau

;; This program is free software: you can redistribute it and/or
;; modify it under the terms of the GNU General Public License as
;; published by the Free Software Foundation, either version 3 of the
;; License, or (at your option) any later version.
;;
;; This program is distributed in the hope that it will be useful, but
;; WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
;; General Public License for more details.
;;
;; You should have received a copy of the GNU General Public License
;; along with this program.  If not, see <http://www.gnu.org/licenses/>.

;;; This code is executed when ecmalisp compiles this file
;;; itself. The compiler provides compilation of some special forms,
;;; as well as funcalls and macroexpansion, but no functions. So, we
;;; define the Lisp world from scratch. This code has to define enough
;;; language to the compiler to be able to run.

(eval-when-compile
  (%compile-defmacro 'defmacro
                     '(function
                       (lambda (name args &rest body)
                        `(eval-when-compile
                           (%compile-defmacro ',name
                                              '(function
                                                (lambda ,(mapcar #'(lambda (x)
                                                                     (if (eq x '&body)
                                                                         '&rest
                                                                         x))
                                                                 args)
                                                 ,@body))))))))

(defmacro declaim (&rest decls)
  `(eval-when-compile
     ,@(mapcar (lambda (decl) `(!proclaim ',decl)) decls)))

(defmacro defconstant (name value &optional docstring)
  `(progn
     (declaim (special ,name))
     (declaim (constant ,name))
     (setq ,name ,value)
     ,@(when (stringp docstring) `((oset ',name "vardoc" ,docstring)))
     ',name))

(defconstant t 't)
(defconstant nil 'nil)
(%js-vset "nil" nil)

(defmacro lambda (args &body body)
  `(function (lambda ,args ,@body)))

(defmacro when (condition &body body)
  `(if ,condition (progn ,@body) nil))

(defmacro unless (condition &body body)
  `(if ,condition nil (progn ,@body)))

(defmacro defvar (name value &optional docstring)
  `(progn
     (declaim (special ,name))
     (unless (boundp ',name) (setq ,name ,value))
     ,@(when (stringp docstring) `((oset ',name "vardoc" ,docstring)))
     ',name))

(defmacro defparameter (name value &optional docstring)
  `(progn
     (setq ,name ,value)
     ,@(when (stringp docstring) `((oset ',name "vardoc" ,docstring)))
     ',name))

(defmacro named-lambda (name args &rest body)
  (let ((x (gensym "FN")))
    `(let ((,x (lambda ,args ,@body)))
       (oset ,x "fname" ,name)
       ,x)))

(defmacro defun (name args &rest body)
  `(progn
     (fset ',name
           (named-lambda ,(symbol-name name) ,args
             ,@(if (and (stringp (car body)) (not (null (cdr body))))
                   `(,(car body) (block ,name ,@(cdr body)))
                   `((block ,name ,@body)))))
     ',name))

(defun null (x)
  (eq x nil))

(defun endp (x)
  (if (null x)
      t
      (if (consp x)
          nil
          (error "type-error"))))

(defmacro return (&optional value)
  `(return-from nil ,value))

(defmacro while (condition &body body)
  `(block nil (%while ,condition ,@body)))

(defvar *gensym-counter* 0)
(defun gensym (&optional (prefix "G"))
  (setq *gensym-counter* (+ *gensym-counter* 1))
  (make-symbol (concat-two prefix (integer-to-string *gensym-counter*))))

(defun boundp (x)
  (boundp x))

;; Basic functions
(defun = (x y) (= x y))
(defun * (x y) (* x y))
(defun / (x y) (/ x y))
(defun 1+ (x) (+ x 1))
(defun 1- (x) (- x 1))
(defun zerop (x) (= x 0))
(defun truncate (x y) (floor (/ x y)))

(defun eql (x y) (eq x y))

(defun not (x) (if x nil t))

(defun cons (x y ) (cons x y))
(defun consp (x) (consp x))

(defun car (x)
  "Return the CAR part of a cons, or NIL if X is null."
  (car x))

(defun cdr (x) (cdr x))
(defun caar (x) (car (car x)))
(defun cadr (x) (car (cdr x)))
(defun cdar (x) (cdr (car x)))
(defun cddr (x) (cdr (cdr x)))
(defun cadar (x) (car (cdr (car x))))
(defun caddr (x) (car (cdr (cdr x))))
(defun cdddr (x) (cdr (cdr (cdr x))))
(defun cadddr (x) (car (cdr (cdr (cdr x)))))
(defun first (x) (car x))
(defun second (x) (cadr x))
(defun third (x) (caddr x))
(defun fourth (x) (cadddr x))
(defun rest (x) (cdr x))

(defun list (&rest args) args)
(defun atom (x)
  (not (consp x)))

;; Basic macros

(defmacro incf (x &optional (delta 1))
  `(setq ,x (+ ,x ,delta)))

(defmacro decf (x &optional (delta 1))
  `(setq ,x (- ,x ,delta)))

(defmacro push (x place)
  (multiple-value-bind (dummies vals newval setter getter)
      (get-setf-expansion place)
    (let ((g (gensym)))
      `(let* ((,g ,x)
              ,@(mapcar #'list dummies vals)
              (,(car newval) (cons ,g ,getter))
              ,@(cdr newval))
         ,setter))))

(defmacro dolist (iter &body body)
  (let ((var (first iter))
        (g!list (gensym)))
    `(block nil
       (let ((,g!list ,(second iter))
             (,var nil))
         (%while ,g!list
                 (setq ,var (car ,g!list))
                 (tagbody ,@body)
                 (setq ,g!list (cdr ,g!list)))
         ,(third iter)))))

(defmacro dotimes (iter &body body)
  (let ((g!to (gensym))
        (var (first iter))
        (to (second iter))
        (result (third iter)))
    `(block nil
       (let ((,var 0)
             (,g!to ,to))
         (%while (< ,var ,g!to)
                 (tagbody ,@body)
                 (incf ,var))
         ,result))))

(defmacro cond (&rest clausules)
  (if (null clausules)
      nil
      (if (eq (caar clausules) t)
          `(progn ,@(cdar clausules))
          `(if ,(caar clausules)
               (progn ,@(cdar clausules))
               (cond ,@(cdr clausules))))))

(defmacro case (form &rest clausules)
  (let ((!form (gensym)))
    `(let ((,!form ,form))
       (cond
         ,@(mapcar (lambda (clausule)
                     (if (eq (car clausule) t)
                         clausule
                         `((eql ,!form ',(car clausule))
                           ,@(cdr clausule))))
                   clausules)))))

(defmacro ecase (form &rest clausules)
  `(case ,form
     ,@(append
        clausules
        `((t
           (error "ECASE expression failed."))))))

(defmacro and (&rest forms)
  (cond
    ((null forms)
     t)
    ((null (cdr forms))
     (car forms))
    (t
     `(if ,(car forms)
          (and ,@(cdr forms))
          nil))))

(defmacro or (&rest forms)
  (cond
    ((null forms)
     nil)
    ((null (cdr forms))
     (car forms))
    (t
     (let ((g (gensym)))
       `(let ((,g ,(car forms)))
          (if ,g ,g (or ,@(cdr forms))))))))

(defmacro prog1 (form &body body)
  (let ((value (gensym)))
    `(let ((,value ,form))
       ,@body
       ,value)))

(defmacro prog2 (form1 result &body body)
  `(prog1 (progn ,form1 ,result) ,@body))
