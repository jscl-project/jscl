;;; -*- mode:lisp; coding:utf-8 -*-

;;; conditions.lisp ---

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


;;; Follow here a straighforward implementation of the condition
;;; system of Common Lisp, except that any value will work as a
;;; condition. Because, well, we do not have conditions at this point.

(/debug "loading conditions.lisp!")

;;; Condition
(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun %def-condition (name parents slots options)
    (let*
        ((cpl (if (and parents) (remove name parents) '(condition)))
         (report (if (and options (assoc :report options))
                     (cadr (assoc :report options))))
         (class-options (if (and options)
                            (remove :report options :key 'car)))
         (class `(defclass ,name
                     ,(progn
                        (if (null cpl) '(condition) cpl))
                   ,slots ,class-options))
         (report-fn)
         (method))
      (when report
        (typecase report
          (string
           (setq report-fn `(lambda (condition stream)
                              (write-string ,report stream)
                              ,report)))
          (list
           (if (not (eql (car report) 'lambda))
               (error "Must be LAMBDA ~s." report))
           (setq report-fn `,report))
          (t (error "What can I compile it: ~s ?" report)))
        (setq method
              `(defmethod print-object ((condition ,name) &optional (stream *standard-output*))
                 (if *print-escape*
                     (call-next-method)
                     (funcall #',report-fn condition stream))
                 nil)))
      (values name class method))))

(defmacro %define-condition (name (&rest parents) (&rest slot-spec) &rest options)
  (multiple-value-bind (name class method)
      (%def-condition name parents slot-spec options)
    `(progn
       ,class
       ,method
       ',name)))

;;; condition hierarhy
(defclass condition ()())
(%define-condition simple-condition (condition)
  ((format-control :initarg :format-control
                   :initform nil
                   :reader simple-condition-format-control)
   (format-arguments :initarg :format-arguments
                     :initform nil
                     :reader simple-condition-format-arguments)))
(%define-condition serious-condition (condition) ())
(%define-condition warning (condition) ())
(%define-condition simple-warning (simple-condition warning) ())
(%define-condition error (serious-condition) ())
(%define-condition simple-error (simple-condition error) ())
(%define-condition type-error (error)
  ((datum :initform nil
          :initarg :datum
          :reader type-error-datum)
   (expected-type :initform nil
                  :initarg :expected-type
                  :reader type-error-expected-type))
  (:report (lambda (condition stream)
             (format stream "~S does not designate a ~S.~%"
                     (type-error-datum condition)
                     (type-error-expected-type condition)))))

(defun %%make-condition (type &rest slot-initializations)
    (apply #'make-instance type slot-initializations))

(defun %%coerce-condition (default datum arguments)
  (cond ((symbolp datum)
         (unless (find-class datum nil)
           (%%error 'type-error :datum datum :expected-type 'condition))
         (apply #'%%make-condition datum arguments))
        ((or (stringp datum)(functionp datum))
         (%%make-condition default
                           ;; todo: formater function
                           :format-control datum
                           :format-arguments arguments))
        ((!typep datum 'condition)
         (check-type arguments null)
         datum)
        (t  (%%error 'type-error
                     :datum datum
                     :expected-type 'condition-designator))))

;;; raise CONDITION with any type
(defun %%signal (datum &rest args)
  (let ((condition (%%coerce-condition 'simple-condition datum args)))
    (dolist (binding *handler-bindings*)
      (let ((type (car binding))
            (handler (cdr binding)))
        ;; Here  TYPE is one of: SYMBOL or (OR symbol ... symbol)
        (when (typep condition type)
          (funcall handler condition))))))

(defun %%warn (datum &rest arguments)
  (let ((stream *standard-output*)
        (condition (%%coerce-condition 'simple-warning datum arguments)))
    ;; prevent all conditions ERROR class
    (check-type condition warning)
    (%%signal condition)
    (format stream "WARNING: ")
    (format stream (simple-condition-format-control condition)
            (simple-condition-format-arguments condition))
    (write-char #\newline)
    nil))

(defun %%error (datum &rest args)
  (let ((stream *standard-output*)
        (condition (%%coerce-condition 'simple-error datum args)))
    ;; prevent all condition WARNING class
    (check-type condition error)
    (%%signal condition)
    ;;(format stream "~&ERROR: ~a~%" (type-of condition))
    (typecase condition
      (simple-error
       (format stream (simple-condition-format-control condition)
               (simple-condition-format-arguments condition)))
      (type-error
       (format stream "Type error. ~a does not designate a ~a" (type-error-datum condition)
               (type-error-expected-type condition))))
    nil))

;;; handlers
(defvar *handler-bindings* nil)

(defmacro %%handler-bind (bindings &body body)
  (let ((install-handlers nil))
    (dolist (binding bindings)
      (destructuring-bind (type handler) binding
        (if (consp type)
            ;; TYPEP OR form
            ;; (error warning) -> (or error warning)
            ;; unless form - if someone smart has already used OR
            (unless (eq (car type) 'or) (setq type (push 'or type))))
        (push `(push (cons ',type #',handler) *handler-bindings*)
              install-handlers)))
    `(let ((*handler-bindings* *handler-bindings*))
       ,@install-handlers
       (%js-try
        (progn ,@body)
        (catch (err)
          (if (%%nlx-p err)
              (%%throw err)
              (%%error (or (oget err "message") err))))))))

(defmacro %%handler-case-1 (form &body cases)
  (let ((datum (gensym))
        (nlx (gensym))
        (tagbody-content nil))

    (flet (
           ;; Given a case, return a condition handler for it. It will
           ;; also update the TAGBODY-CONTENT variable. This variable
           ;; contains the body of a tagbody form.  The condition
           ;; handlers will GO to labels there in order to perform non
           ;; local exit and handle the condition.
           (translate-case (case)
             (destructuring-bind (type (&optional (var (gensym))) &body body)
                 case
               (let ((label (gensym)))
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
              (%%handler-bind ,(mapcar #'translate-case cases)
                (return-from ,nlx ,form))
              ,@(reverse tagbody-content)))))))


(defmacro %%handler-case (form &body cases)
  (let ((last-case (car (last cases))))
    (if (and last-case (eq (car last-case) :no-error))
        (destructuring-bind (lambda-list &body body) (cdr last-case)
          (let ((error-return (gensym))
                (normal-return (gensym)))
            `(block ,error-return
               (multiple-value-call (lambda ,lambda-list ,@body)
                 (block ,normal-return
                   (return-from ,error-return
                     (%%handler-case-1 (return-from ,normal-return ,form)
                       ,@(butlast cases))))))))
        `(%%handler-case-1 ,form ,@cases))))

(defmacro %%ignore-errors (&body forms)
  `(%%handler-case
    (progn ,@forms)
    (error (condition) (values nil condition))))

#+jscl
(progn
  (defmacro define-condition (name (&rest parents) (&rest slot-spec) &rest options)
    `(%define-condition ,name (,@parents)
                        (,@slot-spec) ,@options))

  (defmacro handler-bind (&rest body)
    `(%%handler-bind ,@body))

  (defmacro handler-case (&rest body)
    `(%%handler-case ,@body))

  (defmacro ignore-errors (&rest forms)
    `(%%ignore-errors ,@forms))

  (fset 'make-condition #'%%make-condition)
  (fset 'signal #'%%signal)
  (fset 'warn #'%%warn)
  (fset 'error #'%%error))

;;; EOF
