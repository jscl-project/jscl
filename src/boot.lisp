;;;; boot.lisp — First forms to be cross compiled

;; Copyright (C) 2012, 2013 David Vazquez Copyright (C) 2012 Raimon Grau

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

;;; This  code  is  executed  when   JSCL  compiles  this  file  itself.
;;; The compiler provides compilation of  some special forms, as well as
;;; funcalls and  macroexpansion, but  no functions.  So, we  define the
;;; Lisp  world from  scratch. This  code has  to define  enough of  the
;;; language for the compiler to be able to run.

;;; Package definitions for within the environment.

(if (not (find-package :keyword))
    (make-package "KEYWORD"))

(if (not (find-package :common-lisp))
    (make-package "COMMON-LISP" :nicknames (list "CL")))

(if (not (find-package :common-lisp-user))
    (make-package "COMMON-LISP-USER"
                  :use :common-lisp
                  :nicknames (list "CL-USER")))

(in-package :jscl)

(/debug "loading boot.lisp!")



#+ (or)
(defpackage :jscl
  (:use :cl :jscl)
  (:export #:bootstrap #:bootstrap-core
           #:run-tests-in-host #:with-sharp-j #:read-#j
           #:write-javascript-for-files #:compile-application))

#+ (or)
(defpackage :jscl/ffi
  (:use :cl :jscl)
  (:export #:oget #:oget* #:make-new #:new #:*root*))


;;; DEFMACRO
(eval-when (:compile-toplevel)
  (unless (macro-function 'defmacro)
    (let ((defmacro-macroexpander
           '#'(lambda (form environment)
                (destructuring-bind (name args &body body)
                    form
                  (warn "Compiling a macro-expander for ~s" name)
                  (let* ((body (parse-body body :declarations t :docstring t))
                         (ll (parse-destructuring-lambda-list args))
                         (whole (or (lambda-list-wholevar ll)
                                    (gensym "WHOLE-")))
                         (environment (or (lambda-list-environment ll)
                                          (gensym "ENVIRONMENT-")))
                         (expander `(function
                                     (lambda (,whole ,environment)
                                      (let ((*environment* ,environment))
                                        (block ,name
                                          (destructuring-bind ,args ,whole
                                            ,@body)))))))

                    ;; If we are boostrapping JSCL, we need to quote the
                    ;; macroexpander,  because  the  macroexpander  will
                    ;; need    to    be     dumped    in    the    final
                    ;; environment somehow.
                    (when (find :jscl-xc *features*)
                      (setq expander `(quote ,expander)))

                    `(eval-when (:compile-toplevel :execute)
                       (%compile-defmacro ',name ,expander)))))))

      (%compile-defmacro 'defmacro defmacro-macroexpander))))


;;; DECLAIM

(defmacro jscl/cl::declaim (&rest decls)
  `(eval-when (:compile-toplevel :execute)
     ,@(mapcar (lambda (decl) `(!proclaim ',decl)) decls)))


;;; DEFCONSTANT, T, NIL, LAMBDA

(defmacro jscl/cl::defconstant (name value &optional docstring)
  `(progn
     (declaim (special ,name))
     (declaim (constant ,name))
     (setq ,name ,value)
     ,@(when (stringp docstring) `((oset ,docstring ',name "vardoc")))
     ',name))

(defconstant jscl/cl::t 't)
(defconstant jscl/cl::nil 'nil)
(jscl/js::%js-vset "nil" nil)
(jscl/js::%js-vset "t" t)

(defmacro jscl/cl::lambda (args &body body)
  `(function (lambda ,args ,@body)))


;;; AND, OR

(defmacro jscl/cl::and (&rest forms)
  (cond
    ((null forms)
     t)
    ((null (cdr forms))
     (car forms))
    (t
     `(if ,(car forms)
          (and ,@(cdr forms))
          nil))))

(defmacro jscl/cl::or (&rest forms)
  (cond
    ((null forms)
     nil)
    ((null (cdr forms))
     (car forms))
    (t
     (let ((g (gensym "OR-")))
       `(let ((,g ,(car forms)))
          (if ,g
              ,g
              (or ,@(cdr forms))))))))


;;; COND, WHEN, UNLESS
(defmacro jscl/cl::cond (&rest clausules)
  (unless (null clausules)
    (let ((clause (first clausules))
          (more (rest clausules)))
      (when (atom clause)
        (error "COND clause ~s is not a list" clause))
      (destructuring-bind (condition &body body) clause
        (cond
          ((or (eq condition t)
               (and (constantp condition)
                    condition))
           (when more
             (if (find :jscl-xc *features*)
                 (cerror "Continue" "Unreachable in COND: ~s" more)
                 (warn "Unreachable in COND: ~s" more)))
           `(progn ,@body))
          ((endp body)
           (let ((test-symbol (gensym "COND-TEST-")))
             `(let ((,test-symbol ,condition))
                (if ,test-symbol
                    ,test-symbol
                    ,(when more `(cond ,@more))))))
          (t
           `(if ,condition
                (progn ,@body)
                ,(when more `(cond ,@more)))))))))

(defmacro jscl/cl::when (condition &body body)
  `(cond (,condition ,@body)))

(defmacro jscl/cl::unless (condition &body body)
  `(cond ((not ,condition) ,@body)))


;;; DEFVAR, DEFPARAMETER, DEFUN

(defmacro jscl/cl::defvar (name &optional (value nil value-p) docstring)
  `(progn
     (declaim (special ,name))
     ,@(when value-p
         `((unless (boundp ',name) (setq ,name ,value))))
     ,@(when (stringp docstring)
         `(setf (oget ',name "vardoc") ,docstring))
     ',name))

(defmacro jscl/cl::defparameter (name value &optional docstring)
  `(progn
     (setq ,name ,value)
     ,@(when (stringp docstring)
         `(setf (oget ',name "vardoc") ,docstring))
     ',name))

(defmacro jscl/cl::defun (name args &rest body)
  ;; Can't  use FUNCTION-NAME-P  here because  we can't  DEFUN it  until
  ;; after DEFUN is defined.
  (cond ((symbolp name)
         `(progn
            (eval-when (:compile-toplevel :load-toplevel)
              (fn-info ',name :defined t))
            (fset ',name #'(named-lambda ,name ,args ,@body))
            ',name))
        ((not (listp name))
         (error "~s is not a valid name for a function" name))
        ((eql (car name) 'jscl/ffi:oget)
         (error "Can't bind to JS function yet, TODO"))
        ((eql (car name) 'setf)
         `(progn
            (eval-when (:compile-toplevel)
              (fn-info ',name :defined t))
            (fset-setf ',(second name) #'(named-lambda ,name ,args ,@body))
            ',name))
        (t (error "~s cannot be a function name" name))))

(defmacro jscl/cl::return (&optional value)
  `(return-from nil ,value))

(defmacro jscl/cl::while (condition &body body)
  `(block nil (jscl/js::%while ,condition ,@body)))

(defvar jscl/cl::*gensym-counter* 0)
(defun jscl/cl::gensym (&optional (prefix "G"))
  ;; INCF not available in bootstrap, so …
  (setq *gensym-counter* (1+ *gensym-counter*))
  (make-symbol (concatenate
                'string prefix
                (integer-to-string *gensym-counter*))))

(defun jscl/cl::boundp (x)
  (jscl/js::boundp x))

(defun jscl/cl::eq (x y) (eq x y))
(defun jscl/cl::eql (x y) (eq x y))

(defun jscl/cl::not (x) (if x nil t))

(defun jscl/cl::funcall (function &rest args)
  (apply function args))

(defun jscl/cl::apply (function arg &rest args)
  (apply function (apply #'list* arg args)))

(defun jscl/cl::symbol-name (x)
  (symbol-name x))

;; Basic macros

(defmacro jscl/cl::dolist ((var list &optional result) &body body)
  (let ((g!list (gensym "DOLIST-LIST-")))
    (unless (symbolp var) (error "`~S' is not a symbol." var))
    `(block nil
       (let ((,g!list ,list)
             (,var nil))
         (jscl/js::%while ,g!list
                          (setq ,var (car ,g!list))
                          (tagbody ,@body)
                          (setq ,g!list (cdr ,g!list)))
         ,result))))

(defmacro jscl/cl::dotimes ((var count &optional result) &body body)
  (let ((g!count (gensym "DOTIMES-COUNTER-")))
    (unless (symbolp var) (error "`~S' is not a symbol." var))
    `(block nil
       (let ((,var 0)
             (,g!count ,count))
         (jscl/js::%while (< ,var ,g!count)
                          (tagbody ,@body)
                          (incf ,var))
         ,result))))


;;; CASE, ECASE

(defmacro jscl/cl::case (form &rest clausules)
  (let ((!form (gensym "CASE-FORM-")))
    `(let ((,!form ,form))
       (cond
         ,@(mapcar (lambda (clausule)
                     (destructuring-bind (keys &body body) clausule
                       (cond ((member keys '(t otherwise))
                              `(t nil ,@body))
                             ((listp keys)
                              `((or ,@(mapcar (lambda (key)
                                                `(eql ,!form ',key))
                                              keys))
                                nil ,@body))
                             (t `((eql ,!form ,keys) nil ,@body)))))
                   clausules)))))

(defmacro jscl/cl::ecase (form &rest clausules)
  (let ((g!form (gensym "ECASE-FORM-")))
    `(let ((,g!form ,form))
       (case ,g!form
         ,@(append
            clausules
            `((t
               (error "ECASE expression failed for the object `~S'." ,g!form))))))))


;;; PROG1, PROG2, PROG, PSETQ

(defmacro jscl/cl::prog1 (form &body body)
  (let ((value (gensym "PROG1-")))
    `(let ((,value ,form))
       ,@body
       ,value)))

(defmacro jscl/cl::prog2 (form1 result &body body)
  `(prog1 (progn ,form1 ,result) ,@body))

(defmacro jscl/cl::prog (inits &rest body )
  (multiple-value-bind (forms decls docstring) (parse-body body)
    (declare (ignore docstring))  ; TODO
    `(block nil
       (let ,inits
         ,@decls
         (tagbody ,@forms)))))

(defmacro jscl/cl::psetq (&rest pairs)
  (let (;;  For  each pair, we store  here a list of  the form (VARIABLE
        ;;  GENSYM VALUE).
        (assignments '()))
    (while t
      (cond
        ((null pairs) (return))
        ((null (cdr pairs))
         (error "Odd pairs in PSETQ; dangling ~s" pairs))
        (t
         (let ((variable (car pairs))
               (value (cadr pairs)))
           (push (list variable (gensym (string variable)) value)
                 assignments)
           (setq pairs (cddr pairs))))))
    (setq assignments (reverse assignments))
    ;;
    `(let ,(mapcar #'cdr assignments)
       (setq ,@(mapcan #'butlast assignments)))))


;;; DO, DO*

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun do/do* (do/do* varlist endlist body)
    `(block nil
       (,(ecase do/do* (do 'let) (do* 'let*))
         ,(mapcar (lambda (x)
                    (if (symbolp x)
                        (list x nil)
                        (list (first x) (second x))))
                  varlist)
         (while t
           (when ,(car endlist)
             (return (progn ,@(cdr endlist))))
           (tagbody ,@body)
           (,(ecase do/do* (do 'psetq) (do* 'setq))
             ,@(mapcan (lambda (v)
                         (and (listp v)
                              (consp (cddr v))
                              (list (first v) (third v))))
                       varlist)))))))

(defmacro jscl/cl::do (varlist endlist &body body)
  (do/do* 'do varlist endlist body))

(defmacro jscl/cl::do* (varlist endlist &body body)
  (do/do* 'do* varlist endlist body))



(defmacro jscl/cl::declare (&rest declarations)
  "Early DECLARE ignores everything. This only exists so that during the
 bootstrapping process,  we can have  declarations that SBCL  will read
 and  they won't  make JSCL  choke. Once  the various  places in  which
 DECLARE forms  are valid have  appropriate support to at  least ignore
 them, this can be removed."
  (warn "Tried to compile a DECLARE form: ~s" declarations))

(defmacro jscl/cl::assert (test &rest _)
  "An  early ASSERT  that does  not trigger  bugs in  the macroexpander.
Note, this will  still signal errors itself if it  actually is triggered
before  princ-to-string is  available, but  it needs  to be  declared as
a macro before  anything else gets loaded, and  currently the compiler's
macro cache is so aggressive that it cannot be redefined."
  #-jscl (declare (ignore _))
  `(unless ,test
     (error "Assertion failed: NOT ~s" ',test)))

(defun jscl/cl::identity (x) x)

(defun jscl/cl::complement (x)
  (lambda (&rest args)
    (not (apply x args))))

(defun jscl/cl::constantly (x)
  (lambda (&rest args)
    (declare (ignore args))
    x))

;;; Atoms. CONSP is defined in list.lisp

(defun jscl/cl::atom (x)
  (not (consp x)))

;;; Character codes
(defun jscl/cl::code-char (x)
  (code-char x))

(defun jscl/cl::char-code (x)
  (char-code x))

(defun jscl/cl::char= (x y)
  (eql x y))

(defun jscl/cl::char< (x y)
  (< (char-code x) (char-code y)))



;;; General equality

(defun jscl/cl::equal (x y)
  (cond
    ((eql x y) t)
    ((numberp x) (and (numberp y) (= x y)))
    ((consp x)
     (and (consp y)
          (equal (car x) (car y))
          (equal (cdr x) (cdr y))))
    ((stringp x)
     (and (stringp y) (string= x y)))
    (t nil)))

(defun jscl/cl::equalp (x y)
  "This is a marginally correct implementation of EQUALP"
  (cond
    ((eql x y) t)
    ((numberp x)
     (and (numberp y) (= x y)))
    ((consp x)
     (and (consp y)
          (equalp (car x) (car y))
          (equalp (cdr x) (cdr y))))
    ((characterp x)
     (and (characterp y)
          (char-equal x y)))
    ((stringp x)
     (and (stringp y)
          (string-equal x y)))
    ((vectorp x)
     (and (vectorp y)
          (= (length x) (length y))
          (every #'equalp x y)))
    (t nil)))

(defun jscl/cl::disassemble (function)
  (write-line (jscl/js::lambda-code (fdefinition function)))
  nil)


;;; Multiple Values

(defmacro jscl/cl::multiple-value-bind (variables value-from &body body)
  `(multiple-value-call (lambda (&optional ,@variables &rest ,(gensym "_"))
                          ,@body)
     ,value-from))

(defmacro jscl/cl::multiple-value-list (value-from)
  `(multiple-value-call #'list ,value-from))

(defmacro jscl/cl::multiple-value-setq ((&rest vars) &rest form)
  (let ((gvars (mapcar (lambda (x) (gensym (limit-string-length x 40))) vars))
        (setqs '()))

    (do ((vars vars (cdr vars))
         (gvars gvars (cdr gvars)))
        ((or (null vars) (null gvars)))
      (push `(setq ,(car vars) ,(car gvars))
            setqs))
    (setq setqs (reverse setqs))

    `(multiple-value-call (lambda ,gvars ,@setqs)
       ,@form)))


;;; Function names/values

(defun fdefinition-soft (name)
  "Like `FDEFINITION' but returns NULL rather than signaling an error."
  (cond
    ((symbolp name)
     (symbol-function name))
    ((consp name)
     (ecase (first name)
       (setf (jscl/js::%fdefinition-setf (second name)))
       (jscl/ffi:oget (error "FIXME: FDefinition FFI bridge for ~s" name))
       ;; Should be something  like if ( x && typeof  x === 'function' )
       ;; {  return x;  } else  { throw  new Error  "" +  x +  " is  not
       ;; a function" }
       ))
    (t (error "Not a function name: ~s" name))))

(defun jscl/cl::fdefinition (name)
  "Return NAME's global function definition,  taking care to respect any
encapsulations  and to  return  the  innermost encapsulated  definition.
This is SETF'able."
  (or (fdefinition-soft name)
      (error "No function is named `~S'." name)))

(defun (setf jscl/cl::fdefinition) (fn name)
  ;; Cannot use ETypeCase yet
  (cond ((symbolp name)
         (jscl/js::%setf-symbol-function name fn))
        ((and (listp name)
              (= 2 (length name))
              (eql 'setf (first name)))
         (jscl/js::%setf-fdefinition-setf (second name) fn))
        ((and (listp name)
              (eql 'jscl/ffi:oget (first name)))
         (error "FIXME: FDefinition FFI bridge"))
        (t (error "Cannot SETF FDEFINITION of ~s" name))))

(defun (setf jscl/cl::symbol-function) (function name)
  (if (symbolp name)
      (jscl/js::%setf-symbol-function name function)
      (error "Cannot SETF SYMBOL-FUNCTION of ~s" name)))


(defun jscl/cl::fboundp (x)
  (cond ((symbolp x) (jscl/js::fboundp x))
        ((and (listp x)
              (= 2 (length x))
              (eql 'setf (first x)))
         (jscl/js::%fboundp-setf (second x)))))

(defun jscl/cl::fmakunbound (name)
  (cond ((symbolp name)
         (jscl/js::%fmakunbound name))
        ((and (listp name)
              (= 2 (length name))
              (eql 'setf (first name)))
         (jscl/js::%fmakunbound-setf (second name)))))

(defun jscl/cl::notany (fn seq)
  (not (some fn seq)))

(defconstant jscl/cl::internal-time-units-per-second 1000)

(defun jscl/cl::values-list (list)
  (jscl/js::values-array (list-to-vector list)))

(defun jscl/cl::values (&rest args)
  (values-list args))

;;; Early error definition.
(defun jscl/cl::error (fmt &rest args)
  (jscl/js::%throw
   (jscl/ffi:make-new '|Error|
                      (apply #'format nil fmt args))))

(defmacro jscl/cl::nth-value (n form)
  `(multiple-value-call (lambda (&rest values)
                          (nth ,n values))
     ,form))

(defun jscl/cl::constantp (x)
  ;; TODO: Consider quoted forms,  &environment and many other semantics
  ;; of this function.
  (cond
    ((symbolp x)
     (cond
       ((eq x t) t)
       ((setq x nil) t))) ;; BRFP ☠ I do not understand this
    ((atom x)
     t)
    (t
     nil)))


;;; “environment” variables around READ/PRINT

(defvar jscl/cl::*print-escape* t
  "Should  we  print in  a  reasonably  machine-readable way?  (possibly
overridden by *PRINT-READABLY*)")
(defvar jscl/cl::*print-readably* t
  "If true, all  objects will be printed readably.  If readable printing
is impossible, an  error will be signalled. This overrides  the value of
*PRINT-ESCAPE*.")
(defvar jscl/cl::*print-circle* nil
  "Should  we  use  #n=  and  #n# notation  to  preserve  uniqueness  in
general (and circularity in particular) when printing?")
(defvar jscl/cl::*print-radix* nil
  "Should base be verified when printing RATIONALs?")
(defvar jscl/cl::*print-base* 10
  "The output base for RATIONALs (including integers).")
(defvar jscl/cl::*read-base* 10
  "the radix that Lisp reads numbers in")
(defvar jscl/cl::*read-eval* t
  "If false, then the #. read macro is disabled.")


;;; Forward-declared macro  funkiness DEF!STRUCT isn't yet  defined, but
;;; this makes it work once it is.
(defmacro jscl/cl::defstruct (name+options &rest slots)
  `(eval-when (:compile-toplevel :load-toplevel :execute)
     (def!struct ,name+options ,@slots)))
