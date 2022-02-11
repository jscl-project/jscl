;;; -*- mode:lisp; coding:utf-8 -*-

;;; DEFMETHOD
;;; Original code closette.lisp, lines 919-1316
;;; Modification for JSCL  @vlad-km, 2019
;;;
;;; JSCL compilation mode - :both
;;;
;;; Release note
;;; - The names of some functions have been changed from !name to !name, to prevent naming conflicts
;;;   when host compiling. See FSET section from macros.lisp for full list.
;;; - Some forms (setf ...) have been replaced by (setf-...).
;;;   So, added setf-... functions
;;; - In some places the argument lists were corrected for JSCL.
;;; - Macro DEFMETHOD moved to macros.lisp
;;; - all modification marked with tag @vlad-km
;;;



(/debug "loading std-method")


(eval-always
 (defun canonicalize-specializer (specializer)
   `(!find-class ',specializer))

 (defun canonicalize-specializers (specializers)
   (if specializers
       `(list ,@(mapcar #'canonicalize-specializer specializers))
       '())))

(eval-always
 (defun parse-defmethod (args)
   (let ((fn-spec (car args))
         (qualifiers ())
         (specialized-lambda-list nil)
         (body ())
         (parse-state :qualifiers))
     (dolist (arg (cdr args))
       (ecase parse-state
         (:qualifiers
          (if (and (atom arg) (not (null arg)))
              (push-on-end arg qualifiers)
              (progn (setq specialized-lambda-list arg)
                     (setq parse-state :body))))
         (:body (push-on-end arg body))))
     (values fn-spec
             qualifiers
             (extract-lambda-list specialized-lambda-list)
             (extract-specializers specialized-lambda-list)
             (list* 'block
                    (if (consp fn-spec)
                        (cadr fn-spec)
                        fn-spec)
                    body)))))

;;; Several tedious functions for analyzing lambda lists
(defun required-portion (gf args)
  (let ((number-required (length (gf-required-arglist gf))))
    (when (< (length args) number-required)
      (error "Too few arguments to generic function ~S." gf))
    (subseq args 0 number-required)))

(defun gf-required-arglist (gf)
  (let ((plist
          (analyze-lambda-list
           (generic-function-lambda-list gf))))
    (getf plist ':required-args)))

(eval-always
 (defun extract-lambda-list (specialized-lambda-list)
   (let* ((plist (analyze-lambda-list specialized-lambda-list))
          (requireds (getf plist ':required-names))
          (rv (getf plist ':rest-var))
          (ks (getf plist ':key-args))
          (aok (getf plist ':allow-other-keys))
          (opts (getf plist ':optional-args))
          (auxs (getf plist ':auxiliary-args)))
     `(,@requireds
       ,@(if rv `(&rest ,rv) ())
       ,@(if (or ks aok) `(&key ,@ks) ())
       ,@(if aok '(&allow-other-keys) ())
       ,@(if opts `(&optional ,@opts) ())
       ,@(if auxs `(&aux ,@auxs) ())))))

(eval-always
 (defun extract-specializers (specialized-lambda-list)
   (let ((plist (analyze-lambda-list specialized-lambda-list)))
     (getf plist ':specializers))))

(eval-always
 (defvar *lambda-list-keywords* '(&optional &rest &key &aux &allow-other-keys)))

(eval-always
 (defun analyze-lambda-list (lambda-list)
   (labels ((make-keyword (symbol)
              (intern (symbol-name symbol)
                      (find-package 'keyword)))
            (get-keyword-from-arg (arg)
              (if (listp arg)
                  (if (listp (car arg))
                      (caar arg)
                      (make-keyword (car arg)))
                  (make-keyword arg))))
     (let ((keys ())                    ; Just the keywords
           (key-args ())                ; Keywords argument specs
           (required-names ())          ; Just the variable names
           (required-args ())           ; Variable names & specializers
           (specializers ())            ; Just the specializers
           (rest-var nil)
           (optionals ())
           (auxs ())
           (allow-other-keys nil)
           (state :parsing-required))
       (dolist (arg lambda-list)
         (if (member arg *lambda-list-keywords*)
             (ecase arg
               (&optional
                (setq state :parsing-optional))
               (&rest
                (setq state :parsing-rest))
               (&key
                (setq state :parsing-key))
               (&allow-other-keys
                (setq allow-other-keys 't))
               (&aux
                (setq state :parsing-aux)))
             (case state
               (:parsing-required
                (push-on-end arg required-args)
                (if (listp arg)
                    (progn (push-on-end (car arg) required-names)
                           (push-on-end (cadr arg) specializers))
                    (progn (push-on-end arg required-names)
                           (push-on-end 't specializers))))
               (:parsing-optional (push-on-end arg optionals))
               (:parsing-rest (setq rest-var arg))
               (:parsing-key
                (push-on-end (get-keyword-from-arg arg) keys)
                (push-on-end arg key-args))
               (:parsing-aux (push-on-end arg auxs)))))
       (list  :required-names required-names
              :required-args required-args
              :specializers specializers
              :rest-var rest-var
              :keywords keys
              :key-args key-args
              :auxiliary-args auxs
              :optional-args optionals
              :allow-other-keys allow-other-keys)))))

;;; ensure method
;;; @vlad-km
;;; TODO: refactor this - remove canonical helpers from macro
;;;                       add !ensure-generic-function call, if GF not exists
(defun ensure-method (gf &rest all-keys)
  (let ((new-method
          (apply
           (if (eq (generic-function-method-class gf) *the-class-standard-method*)
               'make-instance-standard-method
               'make-instance)
           (generic-function-method-class gf)
           all-keys)))
    (!add-method gf new-method)
    new-method))

;;; make-instance-standard-method creates and initializes an instance of
;;; standard-method without falling into method lookup.  However, it cannot
;;; be called until standard-method exists.
;;;
;;; @vlad-km
(defun make-instance-standard-method (method-class &key lambda-list qualifiers specializers body cmf)
  (declare (ignore method-class))
  (let ((method (std-allocate-instance *the-class-standard-method*)))
    (setf-method-lambda-list method lambda-list)
    (setf-method-qualifiers method qualifiers)
    (setf-method-specializers method specializers)
    (setf-method-body method body)
    (setf-method-generic-function method nil)
    (setf-method-function method cmf)
    method))



;;; add-method
;;; N.B. This version first removes any existing method on the generic function
;;; with the same qualifiers and specializers.  It's a pain to develop
;;; programs without this feature of full CLOS.
;;;
;;; @vlad-km
(defun !add-method (gf method)
  (let ((old-method
          (!find-method gf
                        (!method-qualifiers method)
                        (!method-specializers method)
                        nil) ))
    (when old-method (!remove-method gf old-method)))

  (setf-method-generic-function method gf)
  ;; note: push method
  (push-generic-function-methods method gf)
  (dolist (specializer (!method-specializers method))
    (pushnew-class-direct-methods method specializer))
  (finalize-generic-function gf)
  method)


;;; @vlad-km
(defun !remove-method (gf method)
  (setf-generic-function-methods gf
                                 (remove method (generic-function-methods gf)))
  (setf-method-generic-function method nil)
  (dolist (class (!method-specializers method))
    (setf-class-direct-methods
     class
     (remove method (class-direct-methods class))))
  (finalize-generic-function gf)
  method)

;;;
(defun !find-method (gf qualifiers specializers &optional (errorp t))
  (let ((method
          (find-if #'(lambda (it)
                       (and (equal qualifiers
                                   (!method-qualifiers it))
                            (equal specializers
                                   (!method-specializers it))))
                   (generic-function-methods gf))))
    (if (and (null method) errorp)
        (error "No such method for ~S." (generic-function-name gf))
        method)))




;;; Reader and write methods

;;; @vlad-km. added :cmf
;;; note: accessor form (setf ) dont work under jscl:compile-application
;;;
(defun add-reader-method (class fn-name slot-name)
  (let* ((slname `(quote ,slot-name))
         (body `(!slot-value object ,slname))
         (fname fn-name))
    (ensure-method
     (!ensure-generic-function fn-name :lambda-list '(object))
     :lambda-list '(object)
     :qualifiers ()
     :specializers (list class)
     :body body
     :cmf (lambda (args &optional ignore-it)
            (apply #'(lambda (object) (!slot-value object slot-name))
                   args)))))


;;; @vlad-km. added :cmf
(defun add-writer-method (class fn-name slot-name)
  (let* ((slname `(quote ,slot-name))
         (body `(!slot-value object ,slname))
         (fname fn-name))
    (ensure-method
     (!ensure-generic-function fname :lambda-list '(new-value object))
     :lambda-list '(new-value object)
     :qualifiers ()
     :specializers (list (!find-class 't) class)
     :body body
     :cmf #'(lambda (args &optional ignore-it)
              (apply #'(lambda (new-value object) (setf (!slot-value object slot-name) new-value))
                     args)))))


;;; Generic function invocation

;;; apply-generic-function ???
(defun apply-generic-function (gf args)
  (apply (generic-function-discriminating-function gf) args))

;;; compute-discriminating-function
;;;

;;; @vlad-km. added function.
(defun mak-classes-mask (classes)
  (let ((local))
    (dolist (it classes) (push (class-name it) local))
    ;; @vlad-km note: its too much. do compare on the reverse list
    ;;just return local.  its gain 0.01s
    (reverse local)))

;;; @vlad-km. fix emfun hash
(defun std-compute-discriminating-function (gf)
  #'(lambda (&rest args)
      (let* ((classes (mapcar #'!class-of
                              (required-portion gf args)))
             (emfun (gethash (mak-classes-mask classes) (classes-to-emf-table gf) nil)))
        (if emfun
            (funcall emfun args)
            (slow-method-lookup gf args classes)))))

;;; @vlad-km. fix emfun hash
(defun slow-method-lookup (gf args classes)
  (let* ((applicable-methods
           (compute-applicable-methods-using-classes gf classes))
         (emfun
           (funcall
            (if (eq (!class-of gf) *the-class-standard-gf*)
                #'std-compute-effective-method-function
                #'compute-effective-method-function)
            gf applicable-methods)))
    (setf (gethash (mak-classes-mask classes) (classes-to-emf-table gf)) emfun)
    (funcall emfun args)))



(defun compute-applicable-methods-using-classes (gf required-classes)
  (sort
   (copy-list
    (remove-if-not #'(lambda (method)
                       (every
                        #'(lambda (c1 c2)
                            (subclassp c1 c2))
                        required-classes
                        (!method-specializers method)))
                   (generic-function-methods gf)))
   #'(lambda (m1 m2)
       (funcall
        (if (eq (!class-of gf) *the-class-standard-gf*)
            #'std-method-more-specific-p
            #'method-more-specific-p)
        gf m1 m2 required-classes))))


(defun std-method-more-specific-p (gf method1 method2 required-classes)
  (declare (ignore gf))
  (mapc #'(lambda (spec1 spec2 arg-class)
            (unless (eq spec1 spec2)
              (return-from std-method-more-specific-p
                (sub-specializer-p spec1 spec2 arg-class))))
        (!method-specializers method1)
        (!method-specializers method2)
        required-classes)
  nil)

;;; apply-methods and compute-effective-method-function
(defun apply-methods (gf args methods)
  (funcall (compute-effective-method-function gf methods)
           args))

(defun primary-method-p (method)
  (null (!method-qualifiers method)))

(defun before-method-p (method)
  (equal '(:before) (!method-qualifiers method)))

(defun after-method-p (method)
  (equal '(:after) (!method-qualifiers method)))

(defun around-method-p (method)
  (equal '(:around) (!method-qualifiers method)))

(defun std-compute-effective-method-function (gf methods)
  (let ((primaries (remove-if-not #'primary-method-p methods))
        (around (find-if #'around-method-p methods)))
    (when (null primaries)
      (error "No primary methods for the generic function ~S." (generic-function-name gf)))
    (if around
        (let ((next-emfun
                (funcall
                 (if (eq (!class-of gf) *the-class-standard-gf*)
                     #'std-compute-effective-method-function
                     #'compute-effective-method-function)
                 gf (remove around methods))))
          #'(lambda (args)
              (funcall (method-function around) args next-emfun)))
        (let ((next-emfun (compute-primary-emfun (cdr primaries)))
              (befores (remove-if-not #'before-method-p methods))
              (reverse-afters
                (reverse (remove-if-not #'after-method-p methods))))
          #'(lambda (args)
              (dolist (before befores)
                (funcall (method-function before) args nil))
              (multiple-value-prog1
                  (funcall (method-function (car primaries)) args next-emfun)
                (dolist (after reverse-afters)
                  (funcall (method-function after) args nil))))))))

;;; compute an effective method function from a list of primary methods:
(defun compute-primary-emfun (methods)
  (if (null methods)
      nil
      (let ((next-emfun (compute-primary-emfun (cdr methods))))
        #'(lambda (args)
            (funcall (method-function (car methods)) args next-emfun)))))

;;; apply-method and compute-method-function
(defun apply-method (method args next-methods)
  (funcall (method-function method)
           args
           (if (null next-methods)
               nil
               (compute-effective-method-function
                (method-generic-function method) next-methods))))


;;; @vlad-km
;;; std-compute-method-function now return method-function value
;;; bye, artefact
(defun std-compute-method-function (method)
  (method-function method))


;;; N.B. The function kludge-arglist is used to pave over the differences
;;; between argument keyword compatibility for regular functions versus
;;; generic functions.
(eval-always
 (defun kludge-arglist (lambda-list)
   (if (and (member '&key lambda-list)
            (not (member '&allow-other-keys lambda-list)))
       (append lambda-list '(&allow-other-keys))
       (if (and (not (member '&rest lambda-list))
                (not (member '&key lambda-list)))
           (append lambda-list '(&key &allow-other-keys))
           lambda-list))))

;;; @vlad-km
;;; Bye, artefact
#+nil
(defun compile-in-lexical-environment (lambda-expr)
  "Be evil, use eval"
  (eval `(function ,lambda-expr)))


;;; @vlad-km
;;; for toplevel compilation (defgeneric ...)
(defmacro compile-method-function  (fname ll fn-body)
  `(lambda (args next-emfun)
     (flet ((call-next-method (&rest cnm-args)
              (if (null next-emfun)
                  (error "No next method for the generic function ~S." ',fname)
                  (funcall next-emfun (or cnm-args args))))
            (next-method-p ()
              (not (null next-emfun))))
       (apply #'(lambda ,ll
                  ,fn-body)
              args))))

;;; EOF
