;;;; setf.lisp — SETF and other operations on PLACEs

;; JSCL is free software: you can redistribute it and/or modify it under
;; the terms of the GNU General  Public License as published by the Free
;; Software Foundation,  either version  3 of the  License, or  (at your
;; option) any later version.
;;
;; JSCL is distributed  in the hope that it will  be useful, but WITHOUT
;; ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
;; FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
;; for more details.
;;
;; You should  have received a  copy of  the GNU General  Public License
;; along with JSCL. If not, see <http://www.gnu.org/licenses/>.
(in-package :jscl)

(/debug "loading setf!")

;;; Generalized references (SETF)

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defvar *setf-expanders* nil)
  (defun jscl/cl::get-setf-expansion (place)
    (if (symbolp place)
        (let ((value (gensym "VALUE-")))
          (values nil
                  nil
                  `(,value)
                  `(setq ,place ,value)
                  place))
        (let ((place (jscl/cl::macroexpand-1 place)))
          (assert (consp place) (place)
                  "SETF PLACE not a SYMBOL nor CONS: ~s" place)
          (let* ((access-fn (car place))
                 (setf-function (fdefinition-soft (list 'setf access-fn)))
                 (expander (cdr (assoc access-fn *setf-expanders*))))
            (cond (setf-function
                   (let ((value (gensym "NEW-VALUE-")))
                     (values nil
                             nil
                             `(,value)
                             `((setf ,access-fn) ,(rest place) ,value)
                             place)))
                  (expander
                   (apply expander (cdr place)))
                  (t
                   (error "Unknown generalized reference: ~s" access-fn))))))))

(defmacro jscl/cl::define-setf-expander (access-fn lambda-list &body body)
  (unless (symbolp access-fn)
    (error "ACCESS-FN `~S' must be a symbol." access-fn))
  (let ((g!args (gensym "ARGS-")))
    `(eval-when (:compile-toplevel :load-toplevel :execute)
       (push (cons ',access-fn (lambda (&rest ,g!args)
                                 (destructuring-bind ,lambda-list ,g!args
                                   ,@body)))
             *setf-expanders*)
       ',access-fn)))

(defmacro short-defsetf (access-fn update-fn &optional documentation)
  (declare (ignore documentation))
  `(define-setf-expander ,access-fn (&rest args)
     (let ((g!new (gensym "NEW-"))
           (g!args (mapcar (lambda (s)
                             (gensym (string s)))
                           args)))
       (values g!args
               args
               (list g!new)
               (cons ',update-fn (append g!args (list g!new)))
               (cons ',access-fn g!args)))))


(defmacro long-defsetf (access-fn lambda-list (&rest store-variables) &body body)
  ;; TODO:  Write me.  But you  will  need to  hack lambda-list.lisp  to
  ;; support defsetf lambda lists.
  ;;
  ;;     http://www.lispworks.com/documentation/HyperSpec/Body/03_dg.htm
  (declare (ignore access-fn lambda-list store-variables body))
  (error "The long form of defsetf is not implemented"))

(defmacro jscl/cl::defsetf (&whole args first second &rest others)
  (declare (ignore first others))
  (if (consp second)
      `(long-defsetf ,@args)
      `(short-defsetf ,@args)))

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun setf/split-into-pairs (pairs)
    `(progn
       ,@(do ((pairs pairs (cddr pairs))
              (result '()
                      (cons `(setf ,(car pairs) ,(cadr pairs)) result)))
             ((null pairs)
              (reverse result)))))

  (defun setf/apply-setf-expander (place value)
    (multiple-value-bind (vars vals store-vars writer-form reader-form)
        (jscl/cl::get-setf-expansion place)
      (declare (ignorable reader-form))
      ;; TODO:  Optimize the  expansion a  little bit  to avoid  let* or
      ;; multiple-value-bind when unnecesary.
      `(let* ,(mapcar #'list vars vals)
         (multiple-value-bind ,store-vars
             ,value
           ,writer-form)))))

(defmacro jscl/cl::setf (&rest pairs)
  "Takes pairs  of arguments  like SETQ.  The first is  a place  and the
second is the value that is supposed  to go into that place. Returns the
last value. The place argument may be  any of the access forms for which
SETF knows a corresponding setting form."
  (cond
    ((null pairs) nil)
    ((null (cdr pairs))
     (error "Odd number of arguments to SETF (trailing ~s)"
            (car pairs)))
    ((null (cddr pairs))                ; meaning exactly one pair
     (let ((place (jscl/cl::macroexpand-1 (first pairs)))
           (value (second pairs)))
       (let* ((access-fn (first place))
              (params (rest place))
              (setf-fn (fdefinition-soft (list 'setf access-fn))))
         (if setf-fn
             `((setf ,access-fn) ,value ,@params)
             (setf/apply-setf-expander place value)))))
    (t (setf/split-into-pairs pairs))))

;;; SETF-Based macros

(defmacro jscl/cl::incf (place &optional (delta 1))
  (multiple-value-bind (dummies vals newval setter getter)
      (jscl/cl::get-setf-expansion place)
    (let ((d (gensym "DELTA-")))
      `(let* (,@(mapcar #'list dummies vals)
              (,d ,delta)
                (,(car newval) (+ ,getter ,d))
                ,@(cdr newval))
         ,setter))))

(defmacro jscl/cl::decf (place &optional (delta 1))
  (multiple-value-bind (dummies vals newval setter getter)
      (jscl/cl::get-setf-expansion place)
    (let ((d (gensym "DELTA-")))
      `(let* (,@(mapcar #'list dummies vals)
              (,d ,delta)
                (,(car newval) (- ,getter ,d))
                ,@(cdr newval))
         ,setter))))

(defmacro jscl/cl::push (x place)
  (multiple-value-bind (dummies vals newval setter getter)
      (jscl/cl::get-setf-expansion place)
    (let ((g (gensym "VALUE-")))
      `(let* ((,g ,x)
              ,@(mapcar #'list dummies vals)
              (,(car newval) (cons ,g ,getter))
              ,@(cdr newval))
         ,setter))))

(defmacro jscl/cl::pop (place)
  (multiple-value-bind (dummies vals newval setter getter)
      (jscl/cl::get-setf-expansion place)
    (let ((head (gensym "HEAD-")))
      `(let* (,@(mapcar #'list dummies vals)
              (,head ,getter)
                (,(car newval) (cdr ,head))
                ,@(cdr newval))
         ,setter
         (car ,head)))))

(defmacro jscl/cl::pushnew (x place &rest keys &key key test test-not)
  (declare (ignore key test test-not))
  (multiple-value-bind (dummies vals newval setter getter)
      (jscl/cl::get-setf-expansion place)
    (let ((g (gensym "VALUE-"))
          (v (gensym "V-")))
      `(let* ((,g ,x)
              ,@(mapcar #'list dummies vals)
              ,@(cdr newval)
              (,v ,getter))
         (if (member ,g ,v ,@keys)
             ,v
             (let ((,(car newval) (cons ,g ,getter)))
               ,setter))))))
