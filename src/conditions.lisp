;;; conditions.lisp —

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

;;; Follow here a straighforward  implementation of the condition system
;;; of Common  Lisp, except  that any  value will  work as  a condition.
;;; Because, well, we do not have conditions at this point.

(defvar *handler-bindings* nil)

(defmacro jscl/cl::handler-bind (bindings &body body)
  (let ((install-handlers nil))

    (dolist (binding bindings)
      (destructuring-bind (type handler) binding
        (push `(push (cons ',type #',handler) *handler-bindings*)
              install-handlers)))

    `(let ((*handler-bindings* *handler-bindings*))
       ,@install-handlers
       (%js-try
        (progn ,@body)
        (catch (err)
          (if (%%nlx-p err)
              (%%throw err)
              (jscl/cl::error (or (jscl/ffi:oget err "message") err))))))))

;; Implementation if :NO-ERROR case is missing.
(defmacro %handler-case-1 (form &body cases)
  (let ((datum (gensym "DATUM-"))
        (nlx (gensym "NON-LOCAL-TRANSFER-POINT-"))
        (tagbody-content nil))

    (flet (
           ;; Given a case,  return a condition handler for  it. It will
           ;; also  update the  TAGBODY-CONTENT variable.  This variable
           ;; contains  the  body  of  a  tagbody  form.  The  condition
           ;; handlers will GO  to labels there in order  to perform non
           ;; local exit and handle the condition.
           (translate-case (case)
             (destructuring-bind (type (&optional (var (gensym "VAR-"))) &body body)
                 case
               (let ((label (gensym "LABEL-")))
                 (push label tagbody-content)
                 (push `(return-from ,nlx
                          (let ((,var ,datum))
                            ,@body))
                       tagbody-content)

                 `(,type (lambda (temp)
                           (setq ,datum temp)
                           (go ,label)))))))
      `(block ,nlx
         (let (,datum)
           (tagbody
              (handler-bind ,(mapcar #'translate-case cases)
                (return-from ,nlx ,form))
              ,@(reverse tagbody-content)))))))

;;; General case
(defmacro jscl/cl::handler-case (form &body cases)
  (let ((last-case (car (last cases))))
    (if (and last-case (eq (car last-case) :no-error))
        (destructuring-bind (lambda-list &body body) (cdr last-case)
          (let ((error-return (gensym "ERROR-RETURN-"))
                (normal-return (gensym "NORMAL-RETURN-")))
            `(block ,error-return
               (multiple-value-call (lambda ,lambda-list ,@body)
                 (block ,normal-return
                   (return-from ,error-return
                     (%handler-case-1 (return-from ,normal-return ,form)
                       ,@(butlast cases))))))))
        `(%handler-case-1 ,form ,@cases))))

(defun jscl/cl::make-condition (type &rest init-args)
  (assert (subtypep type 'condition) (type)
          "~S does not name a class of condition" type)
  (apply #'make-instance type init-args))

(defmacro jscl/cl::define-condition (name (&rest superclasses)
                                                 (&rest slot-specs)
                                     &body options)
  (check-type name symbol)
  (assert (every (lambda (superclass)
                   (subtypep superclass 'condition))
                 superclasses)
          (superclasses)
          "Every superclass of a condition must also be a condition")
  (let ((report (getf :report options :key #'car)))
    `(progn
       (defclass ,name ,slot-specs
         ,(remove :report options :test #'eql :key #'car))
       ,(when report
          `(defmethod condition-report ((condition ,name) stream)
             ,(etypecase report
                (string
                 `(write ,report stream))
                ((or symbol sfunction)
                 `(funcall ',symbol condition stream))))))))

(defun coerce-to-condition (default datum args)
  (cond
    ((condition-p datum)
     datum)
    ((stringp datum)
     (make-condition
      :type default
      :args (cons datum args)))
    (t
     (assert (subtypep datum 'condition) (datum)
             "~S does not name a type of condition" datum)
     (make-condition
      :type datum
      :args args))))

(defun jscl/cl::signal (datum &rest args)
  (let ((condition (coerce-to-condition 'condition datum args)))
    (dolist (binding *handler-bindings*)
      (let ((type (car binding))
            (handler (cdr binding)))
        (when (condition-type-p condition type)
          (funcall handler condition))))))

(defun jscl/cl::warn (datum &rest args)
  (let ((condition (coerce-to-condition 'warning datum args)))
    (signal condition)
    (format *error-output* "~&WARNING: ~?" datum args)
    nil))

(defun jscl/cl::error (datum &rest args)
  (let ((condition (coerce-to-condition 'error datum args)))
    (signal condition)
    (format *error-output "~&ERROR: ~?" datum args)
    nil))
