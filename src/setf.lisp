;;; setf.lisp ---

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

(/debug "loading setf!")

;;; Generalized references (SETF)

(eval-when(:compile-toplevel :load-toplevel :execute)
  (defvar *setf-expanders* nil)
  (defun !get-setf-expansion (place &optional env)
    (if (symbolp place)
        (let ((value (gensym)))
          (values nil
                  nil
                  `(,value)
                  `(setq ,place ,value)
                  place))
        (let* ((access-fn (car place))
               (expander (cdr (assoc access-fn *setf-expanders*)))
               (env (or env *global-environment*)))
          (if expander
              (funcall expander place env)
              ;; Only after the setf expansion is unkonwn, we should
              ;; try to macroexpand the form. See:
              ;;
              ;;   5.1.2.7 Macro Forms as Places:
              ;;
              ;;   http://clhs.lisp.se/Body/05_abg.htm
              ;;
              (multiple-value-bind (macroexpansion macroexpanded)
                  (!macroexpand-1 place env)
                (if macroexpanded
                    (!get-setf-expansion macroexpansion)
                    (error "Unknown generalized reference."))))))))
(fset 'get-setf-expansion (fdefinition '!get-setf-expansion))

(defmacro define-setf-expander (access-fn lambda-list &body body)
  (unless (symbolp access-fn)
    (error "ACCESS-FN `~S' must be a symbol." access-fn))
  (let ((g!args (gensym)))
    `(eval-when (:compile-toplevel :load-toplevel :execute)
       (push (cons ',access-fn
                   (function ,(parse-macro access-fn lambda-list body)))
             *setf-expanders*)
       ',access-fn)))


(defmacro short-defsetf (access-fn update-fn &optional documentation)
  (declare (ignore documentation))
  `(define-setf-expander ,access-fn (&rest args)
     (let ((g!new (gensym))
           (g!args (mapcar (lambda (s)
                             (declare (ignore s))
                             (gensym))
                           args)))
       (values g!args
               args
               (list g!new)
               (cons ',update-fn (append g!args (list g!new)))
               (cons ',access-fn g!args)))))


(defmacro long-defsetf (access-fn lambda-list (&rest store-variables) &body body)
  ;; TODO: Write me. But you will need to hack lambda-list.lisp to
  ;; support defsetf lambda lists.
  ;;
  ;;     http://www.lispworks.com/documentation/HyperSpec/Body/03_dg.htm
  ;;
  (error "The long form of defsetf is not implemented"))

(defmacro defsetf (&whole form first second &rest others)
  (declare (ignore others))
  (if (consp second)
      `(long-defsetf ,@(cdr form))
      `(short-defsetf ,@(cdr form))))



(defmacro setf (&rest pairs)
  (cond
    ((null pairs)
     nil)
    ((null (cdr pairs))
     (error "Odd number of arguments to setf."))
    ((null (cddr pairs))
     (let ((place (!macroexpand-1 (first pairs) *environment*))
           (value (second pairs)))
       (multiple-value-bind (vars vals store-vars writer-form reader-form)
           (!get-setf-expansion place *environment*)
         (declare (ignorable reader-form))
         ;; TODO: Optimize the expansion a little bit to avoid let*
         ;; or multiple-value-bind when unnecesary.
         `(let* ,(mapcar #'list vars vals)
            (multiple-value-bind ,store-vars
                ,value
              ,writer-form)))))
    (t
     `(progn
        ,@(do ((pairs pairs (cddr pairs))
               (result '() (cons `(setf ,(car pairs) ,(cadr pairs)) result)))
              ((null pairs)
               (reverse result)))))))

;;; SETF variants

(defmacro psetf (&rest pairs)
  ;; We expand to (setf (values var*) (values val*)), because our
  ;; implementation has essentially infinite multiple-values-limit
  (let (vars vals)
    (while pairs
      (push (pop pairs) vars)
      (unless pairs
        (error "Odd number of arguments to psetf."))
      (push (pop pairs) vals))
    `(progn
       (setf (values ,@(nreverse vars)) (values ,@(nreverse vals)))
       nil)))

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun %gen-mv-bindings (mv-bindings getters body-forms)
    (if mv-bindings
        `((multiple-value-bind ,(car mv-bindings) ,(car getters)
            ,@(%gen-mv-bindings (cdr mv-bindings) (cdr getters) body-forms)))
        body-forms)))

(defmacro shiftf (&rest args)
  (when (< (length args) 2)
    (error "~S called with too few arguments: ~S" 'shiftf args))
  (let (let*-bindings mv-bindings setters getters)
    (dolist (place (butlast args))
      (multiple-value-bind (temps subforms store-vars setter getter)
          (!get-setf-expansion place *environment*)
        (push (mapcar #'list temps subforms) let*-bindings)
        (push store-vars mv-bindings)
        (push setter setters)
        (push getter getters)))
    (push (car (last args)) getters)
    (setq let*-bindings (nreverse let*-bindings)
          mv-bindings (nreverse mv-bindings)
          setters (nreverse setters)
          getters (nreverse getters))
    (let ((outputs (mapcar (lambda (x) (gensym "OUT")) (car mv-bindings))))
      `(let* ,(reduce #'nconc let*-bindings)
         ,@(%gen-mv-bindings (cons outputs mv-bindings) getters
                             `(,@setters (values ,@outputs)))))))

(defmacro rotatef (&rest places)
  (when places
    (let (let*-bindings mv-bindings setters getters)
      (dolist (place places)
        (multiple-value-bind (temps subforms store-vars setter getter)
            (!get-setf-expansion place *environment*)
          (push (mapcar #'list temps subforms) let*-bindings)
          (push store-vars mv-bindings)
          (push setter setters)
          (push getter getters)))
      (push nil setters)
      (push (car (last getters)) getters)
      (setq let*-bindings (nreverse let*-bindings)
            mv-bindings (nreverse mv-bindings)
            setters (nreverse setters)
            getters (cdr (nreverse getters)))
      `(let* ,(reduce #'nconc let*-bindings)
         ,@(%gen-mv-bindings mv-bindings getters setters)))))

;;; SETF-Based macros

;; Expand a macro defined by DEFINE-MODIFY-MACRO.
;; The generated call resembles (FUNCTION <before-args> PLACE <after-args>)
;; but the read/write of PLACE is done after all {BEFORE,AFTER}-ARG-FORMS are
;; evaluated. Subforms of PLACE are evaluated in the usual order.
(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun expand-rmw-macro (function before-arg-forms place after-arg-forms)
    (let ((before-vars (mapcar (lambda (x) (gensym "BEFORE")) before-arg-forms))
          (after-vars (mapcar (lambda (x) (gensym "AFTER")) after-arg-forms)))
      (multiple-value-bind (dummies vals newval setter getter)
          (!get-setf-expansion place *environment*)
        `(let* (,@(mapcar #'list before-vars before-arg-forms)
                ,@(mapcar #'list dummies vals)
                ,@(mapcar #'list after-vars after-arg-forms)
                (,(car newval) (,function ,@before-vars ,getter ,@after-vars)))
           ,setter)))))

(defmacro define-modify-macro (name lambda-list function &optional documentation)
  (multiple-value-bind (req opt key rest) (parse-lambda-list lambda-list)
    (let ((place (gensym "PLACE")))
      `(defmacro ,name (,place ,@lambda-list)
         ,@(when documentation (list documentation))
         (expand-rmw-macro ',function '() ,place
                           (list* ,@req ,@opt ,@key ,@(when rest (list rest))))))))

(defmacro incf (place &optional (delta 1))
  (expand-rmw-macro '+ '() place (list delta)))

(defmacro decf (place &optional (delta 1))
  (expand-rmw-macro '- '() place (list delta)))

(defmacro push (x place)
  (expand-rmw-macro 'cons (list x) place '()))

(defmacro pushnew (x place &rest keys &key key test test-not)
  (declare (ignore key test test-not))
  (expand-rmw-macro 'adjoin (list x) place keys))

(defmacro pop (place)
  (multiple-value-bind (dummies vals newval setter getter)
    (!get-setf-expansion place *environment*)
    (let ((head (gensym)))
      `(let* (,@(mapcar #'list dummies vals)
              (,head ,getter)
              (,(car newval) (cdr ,head))
              ,@(cdr newval))
         ,setter
         (car ,head)))))

;;; Some SETF expanders

(define-setf-expander values (&rest places)
  (let (all-dummies all-vals newvals setters getters)
    (dolist (place places)
      (multiple-value-bind (dummies vals newval setter getter)
          (!get-setf-expansion place *environment*)
        (setq all-dummies (append all-dummies dummies (cdr newval))
              all-vals (append all-vals vals
                               (mapcar (constantly nil) (cdr newval)))
              newvals (append newvals (and newval (list (car newval)))))
        (push setter setters)
        (push getter getters)))
    (values all-dummies all-vals newvals
            `(values ,@(nreverse setters)) `(values ,@(nreverse getters)))))
