;;; -*- mode:lisp; coding:utf-8 -*-

;;;
;;; Generic function metaobjects and standard-generic-function
;;;
;;; Original code closette.lisp, lines 729-918
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
;;; - Macro DEFGENERIC moved to macros.lisp
;;; - all modification marked with tag @vlad-km
;;;

(/debug "loading std-generic")

;;; @vlad-km note: its artefact from original
;;;not used in jscl release
#+nil
(defparameter *the-defclass-standard-generic-function*
  '(!defclass standard-generic-function ()
    ((name :initarg :name)      ; :accessor generic-function-name
     (lambda-list               ; :accessor generic-function-lambda-list
      :initarg :lambda-list)
     (methods :initform ())     ; :accessor generic-function-methods
     (method-class              ; :accessor generic-function-method-class
      :initarg :method-class)
     (discriminating-function)  ; :accessor generic-function-
                                        ;    -discriminating-function
     (classes-to-emf-table      ; :accessor classes-to-emf-table
      :initform (make-hash-table :test #'equal)))))


(defvar *the-class-standard-gf*) ;standard-generic-function's class metaobject


;;; generic-function-name
(defun generic-function-name (gf)
  (!slot-value gf 'name))

;;; @vlad-km
(defun setf-generic-function-name (gf new-value)
  (setf-slot-value gf 'name new-value))



;;; generic-function-lambda-list
(defun generic-function-lambda-list (gf)
  (!slot-value gf 'lambda-list))

;;; @vlad-km
(defun setf-generic-function-lambda-list (gf new-value)
  (setf-slot-value gf 'lambda-list new-value))



;;; generic-function-methods
(defun generic-function-methods (gf)
  (!slot-value gf 'methods))

;;; @vlad-km
(defun setf-generic-function-methods (gf new-value)
  (setf-slot-value gf 'methods new-value))

;;; for (push method (generic-function-method gf))
(defun push-generic-function-methods (new-value gf)
  (let ((lst (!slot-value gf 'methods)))
    (setf-slot-value gf 'methods (cons new-value lst))))


;;; generic-function-discriminating-function
(defun generic-function-discriminating-function (gf)
  (!slot-value gf 'discriminating-function))

;;; @vlad-km
(defun setf-generic-function-discriminating-function (gf new-value)
  (setf-slot-value gf 'discriminating-function new-value))


;;; generic-function-method-class
(defun generic-function-method-class (gf)
  (!slot-value gf 'method-class))

;;; @vlad-km
(defun setf-generic-function-method-class (gf new-value)
  (setf-slot-value gf 'method-class new-value))


;;; Internal accessor for effective method function table
(defun classes-to-emf-table (gf)
  (!slot-value gf 'classes-to-emf-table))

;;; @vlad-km
(defun setf-classes-to-emf-table (gf new-value)
  (setf-slot-value gf 'classes-to-emf-table new-value))



;;;
;;; Method metaobjects and standard-method
;;;

;;; @vlad-km. This artefact from original
#+nil
(defparameter *the-defclass-standard-method*
  '(!defclass standard-method ()
    ((lambda-list :initarg :lambda-list)     ; :accessor method-lambda-list
     (qualifiers :initarg :qualifiers)       ; :accessor method-qualifiers
     (specializers :initarg :specializers)   ; :accessor method-specializers
     (body :initarg :body)                   ; :accessor method-body
     (generic-function :initform nil)        ; :accessor method-generic-function
     (function))))                           ; :accessor method-function


(defvar *the-class-standard-method*)    ;standard-method's class metaobject


;;; method-lambda-list
(defun method-lambda-list (method)
  (!slot-value method 'lambda-list))

;;; @vlad-km
(defun setf-method-lambda-list (method new-value)
  (setf-slot-value method 'lambda-list new-value))


;;; method-qualifiers
(defun !method-qualifiers (method)
  (!slot-value method 'qualifiers))

;;; @vlad-km
(defun setf-method-qualifiers (method new-value)
  (setf-slot-value method 'qualifiers new-value))


;;; method-specializers
(defun !method-specializers (method)
  (!slot-value method 'specializers))

;;; @vlad-km
(defun setf-method-specializers (method new-value)
  (setf-slot-value method 'specializers new-value))



;;; method-body
(defun method-body (method)
  (!slot-value method 'body))

;;; @vlad-km
(defun setf-method-body (method new-value)
  (setf-slot-value method 'body new-value))


;;; method-generic-function
(defun method-generic-function (method)
  (!slot-value method 'generic-function))

;;; @vlad-km
(defun setf-method-generic-function (method new-value)
  (setf-slot-value method 'generic-function new-value))


;;; method-function
(defun method-function (method)
  (!slot-value method 'function))

;;; @vlad-km
(defun setf-method-function (method new-value)
  (setf-slot-value method 'function new-value))

;;; @vlad-km
(defun (setf method-function) (new-value method)
  (setf-slot-value method 'function new-value))



(eval-always
 (defun canonicalize-defgeneric-ll (lst)
  (if lst
      `',lst
      '())))

(eval-always
 (defun canonicalize-defgeneric-option (option)
   (case (car option)
     (:generic-function-class
      (list ':generic-function-class
            `(!find-class ',(cadr option))))
     (:method-class
      (list ':method-class
            `(!find-class ',(cadr option))))
     (t (list `',(car option) `',(cadr option)))))

 (defun canonicalize-defgeneric-options (options)
   (mapappend #'canonicalize-defgeneric-option options)))


;;; find-generic-function looks up a generic function by name.  It's an
;;; artifact of the fact that our generic function metaobjects can't legally
;;; be stored a symbol's function value.

;;; @vlad-km. must be equal predicate. its worked? dont touch it!
(defparameter *generic-function-table* (make-hash-table :test #'equal))

(defun find-generic-function (symbol &optional (errorp t))
  (let ((gf (gethash symbol *generic-function-table* nil)))
    (if (and (null gf) errorp)
        (error "No generic function named ~S." symbol)
        gf)))

;;; @vlad-km
(defun setf-find-generic-function (symbol new-value)
  (setf (gethash symbol *generic-function-table*) new-value))



;;; ensure-generic-function
;;; @vlad-km
(defun !ensure-generic-function (function-name &rest all-keys)
  (let ((egf (find-generic-function function-name nil)))
    (if egf
        ;; return exists
        egf
        ;; or create this
        (let*
            ((generic-function-class (get-keyword-from all-keys :generic-function-class *the-class-standard-gf*))
             (method-class (get-keyword-from all-keys :method-class *the-class-standard-method*))
             (gf (apply (if (eq generic-function-class *the-class-standard-gf*)
                            #'make-instance-standard-generic-function
                            #'make-instance)
                        generic-function-class
                        :name function-name
                        :method-class method-class
                        all-keys)))
          (setf-find-generic-function function-name gf)
          gf))))

;;; finalize-generic-function
;;; N.B. Same basic idea as finalize-inheritance.  Takes care of recomputing
;;; and storing the discriminating function, and clearing the effective method
;;; function table.


;;; @vlad-km
;;; hardcode version macro for (setf generic name) syntax
;;; note: no good idea.
(defun makdefgf (sfn sname fn)
  (let ()
    (FSET sfn fn)
    (PUSH (CONS sname
                (LAMBDA (&REST args)
                  (DESTRUCTURING-BIND (&REST ARGUMENTS) args
                    (LET ((G!ARGS (MAPCAR (LAMBDA (IT) (GENSYM)) ARGUMENTS))
                          (G!NEWVALUE (GENSYM))
                          (G!SETTER sfn)
                          (G!GETTER sname))
                      (VALUES
                       (list G!ARGS)
                       ARGUMENTS
                       (LIST G!NEWVALUE)
                       (LIST* G!SETTER G!NEWVALUE ARGUMENTS)
                       (CONS G!GETTER ARGUMENTS))))))
          JSCL::*SETF-EXPANDERS*) ))

;;; @vlad-km
(defun finalize-generic-function (gf)
  (setf-generic-function-discriminating-function gf
                                                 (funcall (if (eq (!class-of gf) *the-class-standard-gf*)
                                                              #'std-compute-discriminating-function
                                                              #'compute-discriminating-function)
                                                          gf))
  (let* ((fname (generic-function-name gf))
         (sfname (setf-function-symbol fname)))
    (cond ((and (consp fname) (equal (car fname) 'setf))
           (makdefgf sfname (cadr fname) (generic-function-discriminating-function gf)))
          (t
           (fset sfname (generic-function-discriminating-function gf))))
    ;; @vlad-km
    ;; classes-to-emf-table must be under equal hash-function
    ;; for function cashed
    (setf-classes-to-emf-table gf (make-hash-table :test #'equal))
    (values)))


;;; make-instance-standard-generic-function creates and initializes an
;;; instance of standard-generic-function without falling into method lookup.
;;; However, it cannot be called until standard-generic-function exists.

;;; @vlad-km
(defun make-instance-standard-generic-function (generic-function-class &rest all-keys)
  (declare (ignore generic-function-class))
  (let ((name (get-keyword-from all-keys :name))
        (lambda-list (get-keyword-from all-keys :lambda-list))
        (method-class (get-keyword-from all-keys :method-class))
        (gf (std-allocate-instance *the-class-standard-gf*)))
    (setf-generic-function-name gf name)
    (setf-generic-function-lambda-list gf lambda-list)
    (setf-generic-function-methods gf ())
    (setf-generic-function-method-class gf method-class)
    (finalize-generic-function gf)
    gf))


;;; EOF
