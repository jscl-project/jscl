;;; -*- mode:lisp; coding:utf-8 -*-

;;;
;;; CLOS macros
;;; Modification for JSCL  @vlad-km, 2019, 2022
;;;
;;; JSCL compilation mode :target
;;;

;;; defclass
;;; from std-object.lisp
;;; from original closette.lisp lines 370-383
(defmacro defclass (name direct-superclasses direct-slots &rest options)
  `(ensure-class ',name
                 :direct-superclasses ,(canonicalize-direct-superclasses direct-superclasses)
                 :direct-slots ,(canonicalize-direct-slots direct-slots)
                 ,@(canonicalize-defclass-options options)))


;;; defgeneric
;;; from std-generic.lisp
;;; from original closette.lisp lines 825-832
(defmacro defgeneric (function-name lambda-list &rest options)
  `(!ensure-generic-function ',function-name
                             :lambda-list ,(canonicalize-defgeneric-ll lambda-list)
                             ,@(canonicalize-defgeneric-options options)))


;;; defmethod
;;; from std-method.lisp
;;; from original closette.lisp lines 919-931
;;; @vlad-km. modify :body. added :cmf
;;;           add call without prior DEFGENERIC

#+nil
(defmacro defmethod (&rest args)
  (multiple-value-bind (function-name qualifiers lambda-list specializers body)
      (parse-defmethod args)
    `(let ((gf (find-generic-function ',function-name)))
       (ensure-method gf
                      :lambda-list ,(canonicalize-defgeneric-ll lambda-list)
                      :qualifiers ,(canonicalize-defgeneric-ll qualifiers)
                      :specializers ,(canonicalize-specializers specializers)
                      :body ',body
                      :cmf (compile-method-function ,function-name
                                                    ,(kludge-arglist lambda-list)
                                                    ,body)))))

(defmacro defmethod (&rest args)
  (multiple-value-bind (function-name qualifiers lambda-list specializers body)
      (parse-defmethod args)
    `(let ((gf (find-generic-function ',function-name nil)))
       (unless gf
         (setq gf (defgeneric ,function-name
                      ,(mapcar
                        (lambda (x)
                          (if (consp x) (car x) x))
                        lambda-list) )))
       (ensure-method gf
                      :lambda-list ,(canonicalize-defgeneric-ll lambda-list)
                      :qualifiers ,(canonicalize-defgeneric-ll qualifiers)
                      :specializers ,(canonicalize-specializers specializers)
                      :body ',body
                      :cmf (compile-method-function ,function-name
                                                    ,(kludge-arglist lambda-list)
                                                    ,body)))))


;;; @vlad-km
;;; added standard macro - with-slots
(defmacro with-slots ((&rest slots) instance-name &body forms)
  (let ((instance (gensym)))
    `(let ((,instance ,instance-name))
       (symbol-macrolet
           ,(loop for slot-name in slots
                  collect (if (symbolp slot-name)
                              `(,slot-name (!slot-value ,instance ',slot-name))
                              `(,(first slot-name) (!slot-value ,instance ',(second slot-name)))))
         ,@forms))))


;;; @vlad-km
;;; added standard macro - with-accessors
(defmacro with-accessors ((&rest Readers) instance-name &body forms)
  (let ((instance (gensym)))
    `(let ((,instance ,instance-name))
       (symbol-macrolet
           ,(loop for (var reader) in Readers
                  collect `(,var (,reader ,instance)))
         ,@forms))))




;;; psetf
;;: todo: remove to ?
#+nil
(defmacro psetf (&rest pairs)
  `(!psetf ,@pairs))

;;; rotatef
;;: todo: remove to ?
#+nil
(defmacro rotatef (&rest assigments)
  `(!rotatef ,@assigments))



;;; FSET section
(jscl::fset 'class-of (fdefinition '!class-of))
(jscl::fset 'class-name (fdefinition '!class-name))
(jscl::fset 'find-class (fdefinition '!find-class))
(jscl::fset 'slot-value (fdefinition '!slot-value))
(jscl::fset 'slot-boundp (fdefinition '!slot-boundp))
(jscl::fset 'slot-makunbound  (fdefinition '!slot-makunbound))
(jscl::fset 'slot-exists-p  (fdefinition '!slot-exists-p))
(jscl::fset 'slot-exists-p  (fdefinition '!slot-exists-p))
(jscl::fset 'ensure-generic-function (fdefinition '!ensure-generic-function))
(jscl::fset 'find-method (fdefinition '!find-method))
(jscl::fset 'add-method (fdefinition '!add-method))
(jscl::fset 'remove-method (fdefinition '!remove-method))
(jscl::fset 'method-qualifiers (fdefinition '!method-qualifiers))
(jscl::fset 'method-specializers (fdefinition '!method-specializers))


(push :mop *features*)

;;; EOF
