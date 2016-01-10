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


(defvar *handler-bindings* nil)

(defmacro %handler-bind (bindings &body body)
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
              (%error (or (oget err "message") err))))))))


;; Implementation if :NO-ERROR case is missing.
(defmacro %handler-case-1 (form &body cases)
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
              (%handler-bind ,(mapcar #'translate-case cases)
                (return-from ,nlx ,form))
              ,@(reverse tagbody-content)))))))


;;; General case
(defmacro %handler-case (form &body cases)
  (let ((last-case (car (last cases))))
    (if (and last-case (eq (car last-case) :no-error))
        (destructuring-bind (lambda-list &body body) (cdr last-case)
          (let ((error-return (gensym))
                (normal-return (gensym)))
            `(block ,error-return
               (multiple-value-call (lambda ,lambda-list ,@body)
                 (block ,normal-return
                   (return-from ,error-return
                     (%handler-case-1 (return-from ,normal-return ,form)
                       ,@(butlast cases))))))))
        `(%handler-case-1 ,form ,@cases))))



;;; Fake condition objects until we have at least type system, but
;;; final implementation would require CLOS.

(def!struct !condition
  type
  args)

(defun condition-type-p (x type)
  (and (!condition-p x)
       (equal (!condition-type x) type)))

(defun coerce-to-condition (default datum args)
  (cond
    ((!condition-p datum)
     datum)
    ((stringp datum)
     (make-!condition
      :type default
      :args (cons datum args)))
    (t
     (make-!condition
      :type datum
      :args args))))

(defun %signal (datum &rest args)
  (let ((condition (coerce-to-condition 'condition datum args)))
    (dolist (binding *handler-bindings*)
      (let ((type (car binding))
            (handler (cdr binding)))
        (when (condition-type-p condition type)
          (funcall handler condition))))))

(defun %warn (datum &rest args)
  (let ((condition (coerce-to-condition 'warning datum args)))
    (%signal condition)
    ;; TODO: It should be *ERROR-OUTPUT*
    (write-string "WARNING: ")
    (apply #'format t datum args)
    (write-char #\newline)
    nil))

(defun %error (datum &rest args)
  (let ((condition (coerce-to-condition 'error datum args)))
    (%signal condition)
    ;; TODO: It should be *ERROR-OUTPUT*
    (write-string "ERROR: ")
    (apply #'format t datum args)
    (write-char #\newline)
    nil))

#+jscl
(progn

  (defmacro handler-bind (&rest body)
    `(%handler-bind ,@body))

  (defmacro handler-case (&rest body)
    `(%handler-case ,@body))

  (fset 'signal #'%signal)
  (fset 'warn #'%warn)
  (fset 'error #'%error))

