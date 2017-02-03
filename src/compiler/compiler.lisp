;;;; compiler.lisp — the heart of the JavaScript compiler.

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

;;;; Compiler

(in-package #-jscl :jscl #+jscl :jscl/impl)

(/debug "loading compiler.lisp!")

;; Translates the Lisp code to Javascript. This will compile the special
;; forms. Some  primitive functions are  compiled as special  forms too.
;; The respective  real functions are defined  in the target as  well as
;; some primitive functions.


;;; JavaScript primitive mapping of function calls

(define-js-macro selfcall (&body body)
  `(jscl/js::call (jscl/js::function () ,@body)))

(define-js-macro method-call (x method &rest args)
  `(jscl/js::call (jscl/js::get ,x ,method) ,@args))

(define-js-macro nargs ()
  `(- (jscl/js::get |arguments| |length|) 1))

(define-js-macro arg (n)
  `(jscl/js::property |arguments| (+ ,n 1)))


;;; Runtime

(define-js-macro internal (x)
  `(jscl/js::get |internals| ,x))

(define-js-macro call-internal (name &rest args)
  `(jscl/js::method-call |internals| ,name ,@args))

(defun convert-to-bool (expr)
  `(if ,expr ,(convert t) ,(convert nil)))

(defvar *multiple-value-p* nil
  "A Form  can return  a multiple values  object calling  `values', like
 values(arg1,  arg2, ...).  It  will work  in any  context,  as well  as
 returning  an  individual  object.  However, if  the  special  variable
 `*multiple-value-p*' is  NIL, it  is guaranteed  that only  the primary
 value  will  be   used,  so  we  can  optimize  to   avoid  the  VALUES
 function call.
")

(defvar *convert-level* -1
  "Bound  dynamically  to  the  number of  nested  calls  to  `convert'.
 Therefore, a form is being compiled as toplevel if it is zero.")


;;; Environment

(defstruct binding
  name
  type
  value
  declarations)

(defstruct lexenv
  variable
  function
  setf-function
  block
  gotag
  type
  class)

(defvar *global-environment* (make-lexenv))
(defvar *environment* *global-environment*)

(defun lookup-in-lexenv (name lexenv namespace)
  (or (and (eql namespace 'function)
           (listp name)
           (= 2 (length name))
           (eql 'setf (car name))
           (or (find name (lexenv-setf-function lexenv)
                     :key #'binding-name :test #'eql)
               (unless (eq lexenv *global-environment*)
                 (find name (lexenv-setf-function *global-environment*)
                       :key #'binding-name :test #'eql))))
      (find name (ecase namespace
                   (variable (lexenv-variable lexenv))
                   (function (lexenv-function lexenv))
                   (block    (lexenv-block    lexenv))
                   (gotag	(lexenv-gotag	lexenv))
                   (type	(lexenv-type	lexenv))
                   (class	(lexenv-class	lexenv)))
            :key #'binding-name
            :test #'eql)
      (unless (eq lexenv *global-environment*)
        (lookup-in-lexenv name *global-environment* namespace))))

(defun push-to-lexenv (binding lexenv namespace)
  (ecase namespace
    (variable (push binding (lexenv-variable lexenv)))
    (function (push binding (lexenv-function lexenv)))
    (block    (push binding (lexenv-block    lexenv)))
    (gotag	(push binding (lexenv-gotag	lexenv)))
    (type  	(push binding (lexenv-type  	lexenv)))
    (class	(push binding (lexenv-class	lexenv)))))

(defun extend-lexenv (bindings lexenv namespace)
  (let ((env (copy-lexenv lexenv)))
    (dolist (binding (reverse bindings) env)
      (push-to-lexenv binding env namespace))))

(defvar *global-environment* (make-lexenv))
(defvar *environment* *global-environment*)
(defvar *variable-counter*)

(defun gvarname (symbol)
  (incf *variable-counter*)
  (safe-js-var-name (limit-string-length symbol 32)
                    (integer-to-string *variable-counter*)))

(defun translate-variable (symbol)
  (awhen (lookup-in-lexenv symbol *environment* 'variable)
    (binding-value it)))

(defun extend-local-env (args)
  (let ((new (copy-lexenv *environment*)))
    (dolist (symbol args new)
      (let ((b (make-binding :name symbol :type 'variable
                             :value (gvarname symbol))))
        (push-to-lexenv b new 'variable)))))


;;; Toplevel compilations
(defvar *toplevel-compilations*)

(defun toplevel-compilation (string)
  (push string *toplevel-compilations*))

(defun get-toplevel-compilations ()
  (reverse *toplevel-compilations*))

(defun %compile-defmacro (name lambda)
  (let ((binding (make-binding :name name :type 'macro :value lambda)))
    (warn "Binding global macro ~s" name)
    (push-to-lexenv binding *global-environment* 'function))
  name)

(defun global-binding (name type namespace)
  (or (lookup-in-lexenv name *global-environment* namespace)
      (let ((b (make-binding :name name :type type :value nil)))
        (push-to-lexenv b *global-environment* namespace)
        b)))

(defun claimp (symbol namespace claim)
  (let ((b (lookup-in-lexenv symbol *environment* namespace)))
    (and b (member claim (binding-declarations b)))))

(defun !proclamation (decl type)
  (dolist (name (cdr decl))
    (let ((b (global-binding name type type)))
      (push (car decl) (binding-declarations b)))))

(defun jscl/cl::proclaim (decl)
  (case (car decl)
    (jscl::pure (!proclamation decl 'function))
    (special (!proclamation decl 'variable))
    (notinline (!proclamation decl 'function))
    (constant (!proclamation decl 'variable))))

(defun jscl/cltl2::declaration-information (name
                                            &optional
                                              (env *global-environment*))
  "Return information about declarations named by DECLARATION-NAME.

Defined in CLtL2.

If DECLARATION-NAME is  OPTIMIZE return a list whose entries  are of the
form (QUALITY VALUE).

If DECLARATION-NAME  is DECLARATION return  a list of  declaration names
that have been proclaimed as valid.

If DECLARATION-NAME  is a name  that has defined  via DEFINE-DECLARATION
return a user defined value.

In SBCL,  if DECLARATION-NAME is SB-EXT:MUFFLE-CONDITIONS  return a type
specifier for the condition types that have been muffled.
"
  (declare (ignore env))
  (case name
    (optimize '((speed 1) (debug 1) (space 1)
                (safety 2) (compilation-speed 1)))
    (otherwise nil)))

(defun jscl/cl::define-symbol-macro (name expansion)
  (let ((b (make-binding :name name :type 'macro :value expansion)))
    (push-to-lexenv b *environment* 'variable)
    name))


;;; Report functions which are called but not defined

(defvar *fn-info* '())

(defstruct fn-info
  name
  defined
  called)

(defun function-name-p (name)
  (or (symbolp name)
      (and (listp name)
           (= 2 (length name))
           (find (car name) '(setf jscl/ffi:oget)))))

(defun find-fn-info (name)
  (assert (function-name-p name))
  (let ((entry (find name *fn-info*
                     :key #'fn-info-name
                     :test 'equalp)))
    (unless entry
      (setq entry (make-fn-info :name name))
      (push entry *fn-info*))
    entry))

(defun fn-info (name &key defined called)
  (let ((info (find-fn-info name)))
    (when defined
      (setf (fn-info-defined info) defined))
    (when called
      (setf (fn-info-called info) called))))

(defun report-undefined-functions ()
  (dolist (info *fn-info*)
    (let ((name (fn-info-name info)))
      (when (and (fn-info-called info)
                 (not (fn-info-defined info)))
        (warn "The function `~s' is undefined." name))))
  (setq *fn-info* nil))


;;; Special forms

(defvar *special-forms*
  (make-hash-table :test 'equal)
  "Special forms that have direct compilations rather than typical macros")

(defmacro define-compilation (name args &body body)
  "Creates a new primitive named NAME with parameters ARGS and
 BODY. The body can access to the local environment through the
 variable *ENVIRONMENT*."
  (let ((name (intern (symbol-name name) :jscl/js)))
    `(let ((fn (lambda ,args (block ,name ,@body))))
       (setf (gethash ,(string name) *special-forms*) fn))))

(define-compilation if (condition true &optional false)
  `(jscl/js::if (jscl/js::!== ,(convert condition) ,(convert nil))
                ,(convert true *multiple-value-p*)
                ,(convert false *multiple-value-p*)))

(defvar *ll-keywords* '(&optional &rest &key))

(defun list-until-keyword (list)
  (if (or (null list) (member (car list) *ll-keywords*))
      nil
      (cons (car list) (list-until-keyword (cdr list)))))

(defun ll-section (keyword ll)
  (list-until-keyword (cdr (member keyword ll))))

(defun ll-required-arguments (ll)
  (list-until-keyword ll))

(defun ll-optional-arguments-canonical (ll)
  (mapcar #'ensure-list (ll-section '&optional ll)))

(defun ll-optional-arguments (ll)
  (mapcar #'car (ll-optional-arguments-canonical ll)))

(defun ll-rest-argument (ll)
  (let ((rest (ll-section '&rest ll)))
    (when (cdr rest)
      (error "Bad lambda-list `~S'." ll))
    (car rest)))

(defun ll-keyword-arguments-canonical (ll)
  (flet ((canonicalize (keyarg)
           ;; Build a canonical keyword argument descriptor, filling the
           ;; optional  fields.  The  result  is  a  list  of  the  form
           ;; ((keyword-name var) init-form svar).
           (let ((arg (ensure-list keyarg)))
             (cons (if (listp (car arg))
                       (car arg)
                       (list (intern (symbol-name (car arg))
                                     "KEYWORD")
                             (car arg)))
                   (cdr arg)))))
    (mapcar #'canonicalize (ll-section '&key ll))))

(defun ll-keyword-arguments (ll)
  (mapcar (lambda (keyarg) (second (first keyarg)))
          (ll-keyword-arguments-canonical ll)))

(defun ll-svars (lambda-list)
  (let ((args
         (append
          (ll-keyword-arguments-canonical lambda-list)
          (ll-optional-arguments-canonical lambda-list))))
    (remove nil (mapcar #'third args))))

(defun js-identifier-char-p (char)
  (or (char= #\_ char)
      (char= #\$ char)
      (alphanumericp char)))

(defun js-name-part (name)
  (substitute-if #\$ (complement #'js-identifier-char-p)
                 (substitute #\_ #\- (string name))))

(defun safe-js-name (&rest name-parts)
  (intern (join (mapcar #'js-name-part name-parts) "_")))

(defun safe-js-fun-name (&rest name-parts)
  (apply #'safe-js-name "fun" name-parts))

(defun safe-js-var-name (&rest name-parts)
  (apply #'safe-js-name "var" name-parts))

(defun safe-js-lit-name (&rest name-parts)
  (apply #'safe-js-name "lit" name-parts))

(defun lambda-name/docstring-wrapper (name docstring code)
  (let ((func (safe-js-fun-name name)))
    (if (or name docstring)
        `(jscl/js::selfcall
          (jscl/js::var ,func ,code)
          ,(when name `(jscl/js::= (jscl/js::get ,func "fname") ,name))
          ,(when docstring `(jscl/js::= (jscl/js::get ,func "docstring") ,docstring))
          (jscl/js::return ,func))
        code)))

(defun lambda-check-argument-count
    (n-required-arguments n-optional-arguments rest-p)
  ;; Note:  Remember that  we assume  that  the number  of arguments  of
  ;; a call is at least 1 (the values argument).
  (let ((min n-required-arguments)
        (max (if rest-p 'n/a (+ n-required-arguments n-optional-arguments))))
    (block nil
      ;; Special case: a positive exact number of arguments.
      (when (and (< 0 min) (eql min max))
        (return `(jscl/js::call-internal |checkArgs| (nargs) ,min)))
      ;; General case:
      `(jscl/js::progn
         ,(when (< 0 min)     `(jscl/js::call-internal |checkArgsAtLeast| (nargs) ,min))
         ,(when (numberp max) `(jscl/js::call-internal |checkArgsAtMost|  (nargs) ,max))))))

(defun compile-lambda-optional (ll)
  (let* ((optional-arguments (ll-optional-arguments-canonical ll))
         (n-required-arguments (length (ll-required-arguments ll)))
         (n-optional-arguments (length optional-arguments))
         (svars (remove nil (mapcar #'third optional-arguments))))
    (when optional-arguments
      `(jscl/js::progn
         ,(when svars
            `(jscl/js::var ,@(mapcar (lambda (svar)
                                       (list (translate-variable svar)
                                             (convert t)))
                                     svars)))
         (jscl/js::switch (nargs)
           ,@(with-collect
               (dotimes (idx n-optional-arguments)
                 (let ((arg (nth idx optional-arguments)))
                   (collect `(case ,(+ idx n-required-arguments)))
                   (collect `(jscl/js::= ,(translate-variable (car arg))
                                         ,(convert (cadr arg))))
                   (collect (when (third arg)
                              `(jscl/js::= ,(translate-variable (third arg))
                                           ,(convert nil))))))
               (collect 'default)
               (collect '(break))))))))

(defun compile-lambda-rest (ll)
  (let ((n-required-arguments (length (ll-required-arguments ll)))
        (n-optional-arguments (length (ll-optional-arguments ll)))
        (rest-argument (ll-rest-argument ll)))
    (when rest-argument
      (let ((js!rest (translate-variable rest-argument)))
        `(jscl/js::progn
           (jscl/js::var ,js!rest ,(convert nil))
           (jscl/js::var i)
           (jscl/js::for ((jscl/js::= i (- (nargs) 1))
                          (jscl/js::>= i ,(+ n-required-arguments n-optional-arguments))
                          (jscl/js::post-- i))
                         (jscl/js::= ,js!rest (new (jscl/js::call-internal |Cons| (arg i) ,js!rest)))))))))

(defun compile-lambda-parse-keywords (ll)
  (let ((n-required-arguments
         (length (ll-required-arguments ll)))
        (n-optional-arguments
         (length (ll-optional-arguments ll)))
        (keyword-arguments
         (ll-keyword-arguments-canonical ll)))
    `(jscl/js::progn
       ;; Declare variables
       ,@(with-collect
           (dolist (keyword-argument keyword-arguments)
             (destructuring-bind ((keyword-name var) &optional initform svar)
                 keyword-argument
               (declare (ignore keyword-name initform))
               (collect `(jscl/js::var ,(translate-variable var)))
               (when svar
                 (collect
                     `(jscl/js::var ,(translate-variable svar)
                                    ,(convert nil)))))))

       ;; Parse keywords
       ,(flet ((parse-keyword (keyarg)
                 (destructuring-bind ((keyword-name var) &optional initform svar) keyarg
                   ;; ((keyword-name var) init-form svar)
                   `(jscl/js::progn
                      (jscl/js::for ((jscl/js::= i ,(+ n-required-arguments n-optional-arguments))
                                     (jscl/js::< i (nargs))
                                     (jscl/js::+= i 2))
                                    ;; ....
                                    (jscl/js::if (jscl/js::=== (arg i) ,(convert keyword-name))
                                                 (jscl/js::progn
                                                   (jscl/js::= ,(translate-variable var) (arg (+ i 1)))
                                                   ,(when svar `(jscl/js::= ,(translate-variable svar)
                                                                            ,(convert t)))
                                                   (jscl/js::break))))
                      (jscl/js::if (jscl/js::== i (nargs))
                                   (jscl/js::= ,(translate-variable var) ,(convert initform)))))))
          (when keyword-arguments
            `(jscl/js::progn
               (jscl/js::var i)
               ,@(mapcar #'parse-keyword keyword-arguments))))

       ;; Check for unknown keywords
       ,(when keyword-arguments
          `(jscl/js::progn
             (jscl/js::var start ,(+ n-required-arguments n-optional-arguments))
             (jscl/js::if (jscl/js::== (jscl/js::% (jscl/js::- (nargs) start) 2) 1)
                          (jscl/js::throw "Odd number of keyword arguments."))
             (jscl/js::for ((jscl/js::= i start) (jscl/js::< i (nargs)) (jscl/js::+= i 2))
                           (jscl/js::if (jscl/js::and
                                         ,@(mapcar (lambda (keyword-argument)
                                                     (destructuring-bind ((keyword-name var) &optional initform svar)
                                                         keyword-argument
                                                       (declare (ignore var initform svar))
                                                       `(jscl/js::!== (arg i) ,(convert keyword-name))))
                                                   keyword-arguments))
                                        (jscl/js::throw (jscl/js::+ "Unknown keyword argument "
                                                                    (jscl/js::property (arg i) "name"))))))))))

(defun parse-lambda-list (ll)
  (values (ll-required-arguments ll)
          (ll-optional-arguments ll)
          (ll-keyword-arguments  ll)
          (ll-rest-argument      ll)))

(defun parse-body (body &key declarations docstring)
  "Process BODY for declarations and/or docstrings. Return as
 multiple values the BODY without docstrings or declarations, the
 list of declaration forms and the docstring."
  (let ((value-declarations)
        (value-docstring))
    ;; Parse declarations
    (when declarations
      (do* ((rest body (cdr rest))
            (form (car rest) (car rest)))
           ((or (atom form) (not (eq (car form) 'declare)))
            (setf body rest))
        (push form value-declarations)))
    ;; Parse docstring
    (when (and docstring
               (stringp (car body))
               (not (null (cdr body))))
      (setq value-docstring (car body))
      (setq body (cdr body)))
    (values body value-declarations value-docstring)))

(defun bind-this ()
  (let* ((gvar (gvarname 'this))
         (binding (make-binding :name 'this :type 'variable :value gvar)))
    (push-to-lexenv binding *environment* 'variable)
    `(jscl/js::var ,gvar |this|)))

(defun compile-lambda (ll body &key name block)
  "Compile a lambda function with lambda list LL and body BODY. If NAME
is given, it should be a constant string and it will become the name
of  the function.  If BLOCK  is non-NIL,  a named  block is  created
around the body. NOTE: No block (even anonymous) is created if BLOCK
is NIL."
  (multiple-value-bind (required-arguments
                        optional-arguments
                        keyword-arguments
                        rest-argument)
      (parse-lambda-list ll)
    (multiple-value-bind (body decls documentation)
        (parse-body body :declarations t :docstring t)
      (declare (ignore decls))
      (let ((n-required-arguments (length required-arguments))
            (n-optional-arguments (length optional-arguments))
            (*environment* (extend-local-env
                            (append (ensure-list rest-argument)
                                    required-arguments
                                    optional-arguments
                                    keyword-arguments
                                    (ll-svars ll)))))

        (lambda-name/docstring-wrapper
         name documentation
         `(named-function ,(safe-js-fun-name name)
                          (|values|
                           ,@(mapcar (lambda (x)
                                       (translate-variable x))
                                     (append required-arguments
                                             optional-arguments)))
                          ;; Check number of arguments
                          ,(lambda-check-argument-count
                            n-required-arguments
                            n-optional-arguments
                            (or rest-argument keyword-arguments))
                          ,(compile-lambda-optional ll)
                          ,(compile-lambda-rest ll)
                          ,(compile-lambda-parse-keywords ll)
                          ,(bind-this)
                          ,(let ((*multiple-value-p* t))
                             (if block
                                 (convert-block `((block ,block ,@body)) t)
                                 (convert-block body t)))))))))

(defun setq-pair (var val)
  (unless (symbolp var)
    (error "~a is not a symbol" var))
  (let ((b (lookup-in-lexenv var *environment* 'variable)))
    (cond
      ((and b
            (eq (binding-type b) 'variable)
            (not (member 'special (binding-declarations b)))
            (not (member 'constant (binding-declarations b))))
       `(jscl/js::= ,(binding-value b) ,(convert val)))
      ((and b (eq (binding-type b) 'macro))
       (convert `(setf ,var ,val)))
      (t
       (convert `(set ',var ,val))))))

(define-compilation setq (&rest pairs)
  (when (null pairs)
    (return-from jscl/js::setq (convert nil)))
  (with-collector (result)
    (loop
       (cond
         ((null pairs)
          (return))
         ((null (cdr pairs))
          (error "Odd pairs in SETQ; dangling ~s" pairs))
         (t
          (collect-result (setq-pair (car pairs) (cadr pairs)))
          (setq pairs (cddr pairs)))))
    `(progn ,@result)))


;;; Compilation of literals and object dumping

;; BOOTSTRAP MAGIC: We record the  macro definitions as lists during the
;; bootstrap. Once  everything is  compiled, we want  to dump  the whole
;; global  environment  to  the  output  file to  reproduce  it  in  the
;; run-time. However,  the environment  must contain  expander functions
;; rather  than lists.  We  do not  know how  to  dump function  objects
;; itself, so  we mark  the list  definitions with  this object  and the
;; compiler  will  be  called  when   this  object  has  to  be  dumped.
;; Backquote/unquote does a similar magic, but this use is exclusive.
;;
;; Indeed,  perhaps  to compile  the  object  other  macros need  to  be
;; evaluated.  For this  reason  we define  a  valid macro-function  for
;; this symbol.
(defvar *magic-unquote-marker* (gensym "MAGIC-UNQUOTE-"))

#-jscl-xc
(setf (macro-function *magic-unquote-marker*)
      (lambda (form &optional environment)
        (declare (ignore environment))
        (second form)))

(defvar *literal-table*)
(defvar *literal-counter*)

(defun limit-string-length (string length)
  (and string
       (let ((string (princ-to-string string)))
         (if (> (length string) length)
             (subseq string 0 length)
             string))))

(defun genlit (&optional name)
  (incf *literal-counter*)
  (safe-js-lit-name (or (limit-string-length name 32) "")
                    (integer-to-string *literal-counter*)))

(defun dump-symbol (symbol)
  (let ((package (symbol-package symbol)))
    (cond
      ;; Uninterned symbol
      ((null package)
       `(new (jscl/js::call-internal |Symbol| ,(symbol-name symbol))))
      ;; Special case for bootstrap. For now,  we just load all the code
      ;; with  JSCL as  the current  package. We  will compile  the JSCL
      ;; package as CL in the target. ☠ FIXME
      #-jscl
      ((eq package (find-package "JSCL"))
       `(jscl/js::call-internal |intern| ,(symbol-name symbol)))
      ;; Interned symbol
      (t
       `(jscl/js::call-internal |intern| ,(symbol-name symbol) ,(package-name package))))))

(defun dump-cons (cons)
  (if (eql (car cons)
           'sb-int::quasiquote)
      (progn
        (warn "Quasi-quote leakage: ~s" cons)
        (dump-cons (sb-impl::expand-quasiquote cons nil)))
      (let ((head (butlast cons))
            (tail (last cons)))
        `(jscl/js::call-internal |QIList|
                                 ,@(mapcar (lambda (x) (literal x t)) head)
                                 ,(literal (car tail) t)
                                 ,(literal (cdr tail) t)))))

(defun dump-array (array)
  (let ((elements (vector-to-list array)))
    (list-to-vector (mapcar #'literal elements))))

(defun dump-string (string)
  `(jscl/js::call-internal |make_lisp_string| ,string))

                                        ; from ALEXANDRIA
(declaim (inline safe-endp))
(defun safe-endp (x)
  (declare (optimize safety))
  (endp x))

(defun alist-plist (alist)
  "Returns a property list containing the same keys and values as the
association list ALIST in the same order."
  (let (plist)
    (dolist (pair alist)
      (push (car pair) plist)
      (push (cdr pair) plist))
    (nreverse plist)))

                                        ; end ALEXANDRIA

#+struct-ctor-FIXME-remove
(defun constructor<-structure (object) ;; FIXME ☠☠☠
  (let* ((class (class-of object))
         (class-name (class-name class))
         (constructor (intern (concatenate 'string
                                           (string :make-)
                                           (symbol-name class-name))
                              (symbol-package class-name)))
         (slot-names
          #+sbcl
           (mapcar #'sb-mop:slot-definition-name
                   (sb-mop:class-slots (find-class class)))
           #+jscl (mapcar #'jscl/mop:slot-definition-name
                          (jscl/mop:class-slots (fnd-class class))))
         (slot-values
          (mapcar (lambda (slot-name)
                    (literal (slot-value object slot-name)))
                  slot-names)))
    (convert-1 (cons constructor
                     (alist-plist
                      (mapcar #'cons slot-names slot-values))))))

(defun dump-complex-literal (sexp &optional recursivep)
  (or (cdr (assoc sexp *literal-table* :test #'eql))
      (let ((dumped (typecase sexp
                      (symbol (dump-symbol sexp))
                      (string (dump-string sexp))
                      (cons
                       ;; BOOTSTRAP MAGIC:  See the root  file jscl.lisp
                       ;; and the function `dump-global-environment' for
                       ;; further information.
                       (if (eq (car sexp) *magic-unquote-marker*)
                           (convert (second sexp))
                           (dump-cons sexp)))
                      (array (dump-array sexp)))))
        (if (and recursivep (not (symbolp sexp)))
            dumped
            (let ((jsvar (genlit (typecase sexp
                                   (cons "expr")
                                   (array "array")
                                   (t (string sexp))))))
              (push (cons sexp jsvar) *literal-table*)
              (toplevel-compilation `(jscl/js::var ,jsvar ,dumped))
              (when (keywordp sexp)
                (toplevel-compilation `(jscl/js::= (jscl/js::get ,jsvar "value") ,jsvar)))
              jsvar)))))

(defun literal-sv (sv)
  (let ((jsvar (genlit (string (storage-vector-kind sv)))))
    (push (cons sv jsvar) *literal-table*)
    (toplevel-compilation `(jscl/js::var ,jsvar
                                         (let ((,jsvar (make-storage-vector ,(storage-vector-size sv)
                                                                            ,(storage-vector-kind sv))))
                                           (setf ,(loop for i below (length (storage-vector-underlying-vector sv))
                                                     collect `(aref ,(storage-vector-underlying-vector jsvar) ,i)
                                                     collect (aref (storage-vector-underlying-vector sv) i))))))))

(defun literal (sexp &optional recursivep)
  (cond
    ((typep sexp 'sb-impl::comma)
     (error "Quasi-quoted expression leakage: ~s" sexp))
    ((and (integerp sexp)
          (not (jscl/cl::fixnump sexp)))
     (cerror "Use the biggest possible number instead"
             "Cannot pass BigNum ~:d yet" sexp)
     (if (plusp sexp)
         (literal +most-positive-fixnum+)
         (literal +most-negative-fixnum+)))
    ((and (rationalp sexp)
          (not (= 1 (denominator sexp)))
          (not (rational-float-p sexp)))
     (cerror "Round it off"
             "Cannot pass ~d exactly" sexp)
     (literal (coerce sexp 'double-float)))
    ((complexp sexp)
     (error "Cannot pass complex numberss like ~d" sexp))
    (t
     (typecase sexp
       (fixnum sexp)
       (rational
        (warn "Rounding ~a to float" sexp)
        (coerce sexp 'double-float))
       (number sexp)
       (function  ;; FIXME?
        (list 'function (list 'quote (nth-value 2 (function-lambda-expression sexp)))))
       (character (string sexp))  ; is this really the right thing?
       (pathname (namestring sexp))
       (structure-object (literal-sv sexp))
       (t (dump-complex-literal sexp recursivep))))))

(define-compilation quote (sexp)
  (literal sexp))

(define-compilation %while (pred &rest body)
  `(jscl/js::selfcall
    (jscl/js::while (jscl/js::!== ,(convert pred) ,(convert nil))
      ,(convert-block body))
    (jscl/js::return ,(convert nil))))

(defun function-namestring (name)
  (cond
    ((symbolp name) (symbol-name name))
    ((and (listp name)
          (eq 'setf (car name)))
     (concatenate 'string
                  "@Set-Field@«"
                  (symbol-name (second name))
                  "»"))))

(defun function-block-name (name)
  (etypecase name
    (symbol name)
    (list (second name))))

(define-compilation function (x)
  (cond
    ((listp x)
     (case (car x)
       (lambda
           (compile-lambda (cadr x) (cddr x)))
       (named-lambda
           (destructuring-bind (name ll &rest body) (cdr x)
             (compile-lambda ll body
                             :name (function-namestring name)
                             :block (function-block-name name))))
       (setf
        (let ((b (lookup-in-lexenv x *environment* 'function)))
          (if b
              (binding-value b)
              (error "No SETF function ~s" x))))
       (otherwise
        (error "Can't compile #'~s" x))))
    ((symbolp x)
     (let ((b (lookup-in-lexenv x *environment* 'function)))
       (if b
           (binding-value b)
           (convert `(symbol-function ',x)))))
    (t (error "~s is not a function designator" x))))

(defun make-function-binding (fname)
  (make-binding :name fname :type 'function :value (gvarname fname)))

(defun compile-function-definition (list)
  (compile-lambda (car list) (cdr list)))

(defun translate-function (name)
  (let ((b (lookup-in-lexenv name *environment* 'function)))
    (and b (binding-value b))))

(defun compiled-function-code (def)
  (compile-lambda (cadr def)
                  `((block ,(car def)
                      ,@(cddr def)))))

(defun environment+new-functions (fun-names)
  (extend-lexenv (mapcar #'make-function-binding fun-names)
                 *environment*
                 'function))

(define-compilation flet (definitions &rest body)
  (let* ((flet-fun-names (mapcar #'car definitions))
         (flet-compiled-funs (mapcar #'compiled-function-code definitions))
         (*environment* (environment+new-functions flet-fun-names)))
    `(jscl/js::call(function ,(mapcar #'translate-function flet-fun-names)
                             ,(convert-block body t))
                   ,@flet-compiled-funs)))

(defun labels/compiled-label-function (func)
  `(jscl/js::var ,(translate-function (car func))
                 ,(compiled-function-code func)))

(define-compilation labels (definitions &rest body)
  (let* ((label-fun-names (mapcar #'car definitions))
         (*environment* (environment+new-functions label-fun-names)))
    `(jscl/js::selfcall
      ,@(mapcar #'labels/compiled-label-function definitions)
      ,(convert-block body t))))

(defvar *compiling-file* nil
  "Was the compiler invoked from `compile-file'?")

(defun bangerang (form)
  (cond ((consp form)
         (cons
          (if (symbolp (car form))
              (let ((name (car form)))
                (if (and (fboundp name)
                         (or (eql (find-package :jscl) (symbol-package name))
                             (eql (find-package :cl) (symbol-package name))))
                    (let ((bang (find-symbol (concatenate 'string "!"
                                                          (symbol-name name)) :jscl)))
                      (or (and bang (fboundp bang) bang)
                          name))
                    name)))
          (mapcar #'bangerang (cdr form))))
        (t form)))

(define-compilation eval-when (situations &rest body)
  "NOTE: It  is probably wrong  in many cases but  we will not  use this
 heavily. Please, do not rely on wrong cases of this implementation."
  ;; TODO: Error checking
  (assert (every (lambda (situation)
                   (find situation '(:compile-toplevel :load-toplevel :execute)))
                 situations)
          (situations)
          "Eval-When  situations   must  be   (MEMBER  COMPILE-TOPLEVEL~
 LOAD-TOPLEVEL EXECUTE) only; not ~s" situations)
  (cond
    ;; Toplevel form compiled by !compile-file.
    ((and *compiling-file* (zerop *convert-level*))
     ;; If  the  situation  `compile-toplevel'  is given.  The  form  is
     ;; evaluated  at compilation-time.  This  probably  means it'll  be
     ;; evaluated  in the  host compiler,  which  is maybe  not what  we
     ;; usually want.
     (when (find :compile-toplevel situations)
       (warn "Eval-When Compile-Toplevel: OK, evaluating in compiler (~a) ~a…"
             (lisp-implementation-type)
             (truncate-string
              (substitute #\space #\newline (princ-to-string body))
              120))
       (map nil #'eval body))
     ;; `load-toplevel'  is  given,  then   just  compile  the  subforms
     ;; as usual.
     (when (find :load-toplevel situations)
       (warn "Eval-When Load-Toplevel: OK, pushing into code")
       (convert-toplevel (cons 'progn body) *multiple-value-p*))
     (unless (or (find :compile-toplevel situations)
                 (find :load-toplevel situations))
       (warn "Eval-When: During compilation, ignoring ~s" situations)))
    ((find :execute situations)
     (convert `(progn ,@body) *multiple-value-p*))
    ((find :compile-toplevel situations)
     (warn "Skipping EVAL-WHEN: ~@[not compiling~] ~@[not toplevel~] "
           (not *compiling-file*) (not (zerop *convert-level*))))
    (t
     (warn "EVAL-WHEN has no valie situation ~s~%(unreachable code ~s)"
           situations body)
     (convert nil))))

(defmacro define-transformation (name args form)
  `(define-compilation ,name ,args
     (convert ,form)))

(define-compilation progn (&rest body)
  (if (null (cdr body))
      (convert (car body) *multiple-value-p*)
      `(jscl/js::progn
         ,@(append (mapcar #'convert (butlast body))
                   (list (convert (car (last body)) t))))))

(defun macrolet-value (lambda-list body)
  (let ((g!form (gensym "FORM-")))
    `(lambda (,g!form)
       (destructuring-bind ,lambda-list ,g!form
         ,@body))))

(define-compilation macrolet (definitions &rest body)
  (let ((*environment* (copy-lexenv *environment*)))
    (dolist (def definitions)
      (destructuring-bind (name lambda-list &body body) def
        (let ((binding (make-binding :name name :type 'macro
                                     :value (macrolet-value lambda-list body))))
          (push-to-lexenv binding  *environment* 'function))))
    (convert (cons 'progn body) *multiple-value-p*)))

(defun special-variable-p (x)
  (and (claimp x 'variable 'special) t))

(defun normalize-bindings (arg)
  (destructuring-bind (name &optional value)
      (ensure-list arg)
    (list name value)))

(defun process-bindings (bindings)
  "Given a LET-like description of bindings, return:

1. A list of lexical variable names

2. A list of values to bind to the lexical variables

3. A alist of (special-variable . lexical-variable) to bind."
  (let ((bindings (mapcar #'normalize-bindings bindings))
        (special-bindings nil))
    (values
     ;; Lexical Variables
     (mapcar (lambda (var)
               (if (special-variable-p var)
                   (let ((lexvar (gensym "LEXICAL-VARIABLE-")))
                     (push (cons var lexvar) special-bindings)
                     lexvar)
                   var))
             (mapcar #'car bindings))
     ;; Values
     (mapcar #'cadr bindings)
     ;; Binding special variables to lexical variables
     special-bindings)))

(defun convert-block-with-special-bindings (body special-bindings)
  (let ((special-variables (mapcar #'car special-bindings))
        (lexical-variables (mapcar #'cdr special-bindings)))
    `(jscl/js::return (jscl/js::call-internal
                       |bindSpecialBindings|
                       ,(map 'vector #'literal special-variables)
                       ,(map 'vector #'translate-variable lexical-variables)
                       (function () ,(convert-block body t t))))))

(defun let-bind-dynamic-vars (special-bindings body)
  "Wrap  CODE to  restore the  symbol  values of  the dynamic  bindings.
BINDINGS is a list of pairs of the form (SYMBOL . PLACE), where PLACE is
a Javascript variable  name to initialize the symbol value  and where to
stored the old value."
  (if (null special-bindings)
      (convert-block body t t)
      (convert-block-with-special-bindings body special-bindings)))

(define-compilation let (bindings &rest body)
  (multiple-value-bind (lexical-variables values special-bindings)
      (process-bindings bindings)
    (let ((compiled-values (mapcar #'convert values))
          (*environment* (extend-local-env lexical-variables)))
      `(jscl/js::call(function ,(mapcar #'translate-variable lexical-variables)
                               ,(let-bind-dynamic-vars special-bindings body))
                     ,@compiled-values))))

(define-compilation lambda (lambda-list &rest body)
  (compile-lambda lambda-list body))

(defun add-let*-var-to-environment (var value)
  (let* ((v (gvarname var))
         (b (make-binding :name var :type 'variable :value v)))
    (prog1 `(jscl/js::var ,v ,(convert value))
      (push-to-lexenv b *environment* 'variable))))

(defun let*-initialize-value (binding)
  " Return  the code to  initialize BINDING,  and push it  extending the
current lexical environment if the variable is not special."
  (let ((var (first binding))
        (value (second binding)))
    (if (special-variable-p var)
        (convert `(setq ,var ,value))
        (add-let*-var-to-environment var value))))

(defun let*-wrapper-set-value (b)
  (let ((s (convert `(quote ,(car b)))))
    `(jscl/js::var ,(cdr b) (jscl/js::get ,s "value"))))

(defun let*-wrapper-reset-value (b)
  (let ((s (convert `(quote ,(car b)))))
    `(jscl/js::= (jscl/js::get ,s "value") ,(cdr b))))

(defun let*-binding-wrapper (symbols body)
  "  Wrap BODY  to  restore the  symbol values  of  SYMBOLS after  body.
It DOES NOT generate code to initialize the value of the symbols, unlike
let-binding-wrapper."
  (unless symbols
    (return-from let*-binding-wrapper body))
  (let ((store (mapcar (lambda (s) (cons s (gvarname s)))
                       (remove-if-not #'special-variable-p symbols))))
    `(jscl/js::progn
       (jscl/js::try
        ,@(mapcar #'let*-wrapper-set-value store)
        ,body)
       (jscl/js::finally
        ,@(mapcar #'let*-wrapper-reset-value store)))))

(define-compilation let* (bindings &rest body)
  (let ((bindings (mapcar #'ensure-list bindings))
        (*environment* (copy-lexenv *environment*)))
    (let ((specials (remove-if-not #'special-variable-p (mapcar #'first bindings)))
          (body `(jscl/js::progn
                   ,@(mapcar #'let*-initialize-value bindings)
                   ,(convert-block body t t))))
      `(jscl/js::selfcall ,(let*-binding-wrapper specials body)))))

(defun block-return-multiple-values ()
  `(jscl/js::return (jscl/js::method-call |values| "apply" this
                                          (jscl/js::call-internal |forcemv| (jscl/js::get cf "values")))))

(defun block-return-single-value ()
  `(jscl/js::return `(jscl/js::return (jscl/js::get cf "values"))))

(defun block/build-nlx-catcher (idvar cbody)
  `(jscl/js::selfcall
    (jscl/js::try
     (jscl/js::var ,idvar #())
     ,cbody)
    (jscl/js::catch (cf)
      (jscl/js::if (jscl/js::and (jscl/js::instanceof cf (jscl/js::internal |BlockNLX|))
                                 (jscl/js::== (jscl/js::get cf "id") ,idvar))
                   ,(if *multiple-value-p*
                        (block-return-multiple-values)
                        (block-return-single-value))
                   (jscl/js::throw cf)))))

(define-compilation block (name &rest body)
  "  We  use  Javascript  exceptions  to  implement  non  local  control
 transfer.  Exceptions  has  dynamic  scoping, so  we  use  a  uniquely
 generated object to identify the block.  The instance of a empty array
 is used  to distinguish between nested  dynamic Javascript exceptions.
 See         https://github.com/jscl-project/jscl/issues/64         for
 futher details."
  (let* ((idvar (gvarname name))
         (b (make-binding :name name :type 'block :value idvar)))
    (when *multiple-value-p*
      (push 'multiple-value (binding-declarations b)))
    (let* ((*environment* (extend-lexenv (list b) *environment* 'block))
           (cbody (convert-block body t)))
      (if (member 'used (binding-declarations b))
          (block/build-nlx-catcher idvar cbody)
          `(jscl/js::selfcall ,cbody)))))

(define-compilation return-from (name &optional value)
  (let* ((binding (or (lookup-in-lexenv name *environment* 'block)
                      (error "Return from unknown block `~S'." name)))
         (multiple-value-p (member 'multiple-value
                                   (binding-declarations binding))))
    (push 'used (binding-declarations binding))
    ;; The binding value  is the name of a variable,  whose value is the
    ;; unique identifier  of the  block as exception.  We can't  use the
    ;; variable  name itself,  because it  might  not be  unique, so  we
    ;; capture it in a closure.
    `(jscl/js::selfcall
      ,(when multiple-value-p `(jscl/js::var |values| (internal |mv|)))
      (jscl/js::throw (jscl/js::new (jscl/js::call-internal |BlockNLX|
                                                            ,(binding-value binding)
                                                            ,(convert value multiple-value-p)
                                                            ,(symbol-name name)))))))

(define-compilation catch (id &rest body)
  (let ((values (if *multiple-value-p* '|values| '(internal |pv|))))
    `(jscl/js::selfcall
      (jscl/js::var id ,(convert id))
      (jscl/js::try
       ,(convert-block body t))
      (jscl/js::catch (cf)
        (jscl/js::if (jscl/js::and (jscl/js::instanceof cf (jscl/js::internal |CatchNLX|))
                                   (jscl/js::== (jscl/js::get cf "id") id))
                     (jscl/js::return (jscl/js::method-call
                                       ,values "apply" this
                                       (jscl/js::call-internal
                                        |forcemv|
                                        (jscl/js::get cf "values"))))
                     (jscl/js::throw cf))))))

(define-compilation throw (id value)
  `(jscl/js::selfcall
    (jscl/js::var |values| (internal |mv|))
    (jscl/js::throw (jscl/js::new (jscl/js::call-internal |CatchNLX|
                                                          ,(convert id)
                                                          ,(convert value t))))))

(defun go-tag-p (x)
  (or (integerp x) (symbolp x)))

(defun declare-tagbody-tags (tbidx body)
  (let* ((go-tag-counter 0)
         (bindings
          (mapcar (lambda (label)
                    (let ((tagidx (incf go-tag-counter)))
                      (make-binding :name label :type 'gotag :value (list tbidx tagidx))))
                  (remove-if-not #'go-tag-p body))))
    (extend-lexenv bindings *environment* 'gotag)))

(define-compilation tagbody (&rest body)
  ;; Ignore the  tagbody if it does  not contain any go-tag.  We do this
  ;; because  1)  it is  easy  and  2)  many  built-in forms  expand  to
  ;; a implicit tagbody, so we save some space.
  (unless (some #'go-tag-p body)
    (return-from jscl/js::tagbody (convert `(progn ,@body nil))))
  ;; The translation assumes the first form in BODY is a label
  (unless (go-tag-p (car body))
    (push (gensym "START") body))
  ;; Tagbody compilation
  (let ((branch (gvarname 'branch))
        (tbidx (gvarname 'tbidx)))
    (let ((*environment* (declare-tagbody-tags tbidx body))
          initag)
      (let ((b (lookup-in-lexenv (first body) *environment* 'gotag)))
        (setq initag (second (binding-value b))))
      `(jscl/js::selfcall
        ;; TAGBODY branch to take
        (jscl/js::var ,branch ,initag)
        (jscl/js::var ,tbidx #())
        (jscl/js::label tbloop
                        (jscl/js::while jscl/js::true
                          (jscl/js::try
                           (jscl/js::switch ,branch
                             ,@(with-collect
                                 (collect `(case ,initag))
                                 (dolist (form (cdr body))
                                   (if (go-tag-p form)
                                       (let ((b (lookup-in-lexenv form *environment* 'gotag)))
                                         (collect `(jscl/js::case ,(second (binding-value b)))))
                                       (collect (convert form)))))
                             default
                             (jscl/js::break tbloop)))
                          (jscl/js::catch (jump)
                            (jscl/js::if (jscl/js::and (jscl/js::instanceof jump
                                                                            (internal |TagNLX|))
                                                       (jscl/js::== (jscl/js::get jump "id") ,tbidx))
                                         (jscl/js::= ,branch (jscl/js::get jump "label"))
                                         (jscl/js::throw jump)))))
        (jscl/js::return ,(convert nil))))))

(define-compilation go (label)
  (let ((b (lookup-in-lexenv label *environment* 'gotag)))
    (when (null b)
      (error "Unknown tag `~S'" label))
    `(jscl/js::selfcall
      (jscl/js::throw (jscl/js::new (jscl/js::call-internal |TagNLX|
                                                            ,(first (binding-value b))
                                                            ,(second (binding-value b))))))))

(define-compilation unwind-protect (form &rest clean-up)
  `(jscl/js::selfcall
    (jscl/js::var ret ,(convert nil))
    (jscl/js::try
     (jscl/js::= ret ,(convert form)))
    (jscl/js::finally
     ,(convert-block clean-up))
    (jscl/js::return ret)))

(define-compilation multiple-value-call (func-form &rest forms)
  `(jscl/js::selfcall
    (jscl/js::var func ,(convert func-form))
    (jscl/js::var args ,(vector (if *multiple-value-p* '|values| '(internal |pv|))))
    (jscl/js::return
      (jscl/js::selfcall
       (jscl/js::var |values| (internal |mv|))
       (jscl/js::var vs)
       (jscl/js::progn
         ,@(with-collect
             (dolist (form forms)
               (collect `(jscl/js::= vs ,(convert form t)))
               (collect `(if (jscl/js::and (jscl/js::=== (jscl/js::typeof vs) "object")
                                           (in "multiple-value" vs))
                             (jscl/js::= args (jscl/js::method-call args "concat" vs))
                             (jscl/js::method-call args "push" vs))))))
       (jscl/js::return (jscl/js::method-call func "apply" null args))))))

(define-compilation multiple-value-prog1 (first-form &rest forms)
  `(jscl/js::selfcall
    (jscl/js::var args ,(convert first-form *multiple-value-p*))
    (jscl/js::progn ,@(mapcar #'convert forms))
    (jscl/js::return args)))

(define-compilation the (value-type form)
  (warn "discarding THE ~a" value-type) ; XXX perhaps one day
  (convert form *multiple-value-p*))

;; from backquote.lisp
(declaim (ftype (function (t) t) bq-completely-process))

(define-transformation backquote (form)
  (bq-completely-process form))

;;; Primitives

(defvar *builtins*
  (make-hash-table))

(defun jscl/cl::special-operator-p (name)
  (nth-value 1 (gethash name *builtins*)))

(defmacro define-raw-builtin (name args &body body)
  " Creates  a new  primitive function `name'  with parameters  args and
 @body.  The body  can access  to  the local  environment through  the
 variable *ENVIRONMENT*."
  `(setf (gethash ',name *builtins*)
         (lambda ,args
           (block ,name ,@body))))

(defmacro define-builtin (name args &body body)
  `(define-raw-builtin ,name ,args
     (let ,(mapcar (lambda (arg) `(,arg (convert ,arg))) args)
       ,@body)))

(defun variable-arity/check-numeric-arg (v x function args)
  `(jscl/js::if (jscl/js::!= (jscl/js::typeof ,v) "number")
                (jscl/js::throw
                    (jscl/js::new
                     (jscl/js::call
                      |Error|
                      (+ "" (jscl/js::typeof ,v)
                         " is not a number: " ,v " "
                         ,(princ-to-string (convert x)) " in "
                         ,(princ-to-string function)
                         ,@(mapcar (lambda (s)
                                     (concatenate 'string " "
                                                  (princ-to-string s)))
                                   args)))))))

(defun variable-arity-call (args function)
  "VARIABLE-ARITY-CALL  compiles variable  arity  operations on  numeric
arguments.  ARGS stands  for a  variable which  holds a  list of  forms.
It will compile them and store  the result in some Javascript variables.
BODY is  evaluated with  ARGS bound  to the list  of these  variables to
generate the code which performs the transformation on these variables."
  (unless (consp args)
    (error "ARGS must be a non-empty list"))
  (let ((counter 0))
    ;; XXX: Add macro with-collectors
    (with-collector (fargs)
      (with-collector (prelude)
        (dolist (x args)
          (if (numberp x)
              (collect-fargs x)
              (let ((v (make-symbol (concat "arg" (integer-to-string (incf counter))))))
                (collect-prelude `(jscl/js::var ,v ,(convert x)))
                (collect-prelude (variable-arity/check-numeric-arg v x
                                                                   function args))
                (collect-fargs v))))
        `(jscl/js::selfcall
          (jscl/js::progn
            ,@prelude)
          ,(funcall function fargs))))))

(defmacro variable-arity (args &body body)
  (unless (symbolp args)
    (error "`~S' is not a symbol." args))
  `(variable-arity-call ,args (lambda (,args) `(jscl/js::return  ,,@body))))

(define-raw-builtin + (&rest numbers)
  (if (null numbers)
      0
      (variable-arity numbers
                      `(+ ,@numbers))))

(define-raw-builtin - (x &rest others)
  (let ((args (cons x others)))
    (variable-arity args `(- ,@args))))

(define-raw-builtin * (&rest numbers)
  (if (null numbers)
      1
      (variable-arity numbers `(* ,@numbers))))

(define-builtin logior (x y) (list 'logior x y))
(define-builtin logand (x y) (list 'logand x y))
(define-builtin logxor (x y) (list 'logxor x y))

(define-raw-builtin / (x &rest others)
  (let ((args (cons x others)))
    (variable-arity args
                    (if (null others)
                        `(jscl/js::call-internal |handled_division| 1 ,(car args))
                        (reduce (lambda (x y) `(jscl/js::call-internal |handled_division| ,x ,y))
                                args)))))

(define-builtin mod (x y)
  (when (constantp y)
    (assert (not (zerop y))))
  `(jscl/js::selfcall
    (jscl/js::if (jscl/js::== ,y 0)
                 (jscl/js::throw (jscl/js::new |Error| "Division by zero")))
    (jscl/js::return (jscl/js::% ,x ,y))))

(defun comparison-conjuntion (vars op)
  (cond
    ((null (cdr vars))
     'jscl/js::true)
    ((null (cddr vars))
     `(,op ,(car vars) ,(cadr vars)))
    (t
     `(jscl/js::and (,op ,(car vars) ,(cadr vars))
                    ,(comparison-conjuntion (cdr vars) op)))))

(defmacro define-builtin-comparison (op &optional (sym op))
  `(define-raw-builtin ,op (x &rest args)
     (let ((args (cons x args)))
       (variable-arity args
                       (convert-to-bool (comparison-conjuntion args ',sym))))))

(define-builtin-comparison >)
(define-builtin-comparison <)
(define-builtin-comparison >=)
(define-builtin-comparison <=)
(define-builtin-comparison = ==)
(define-builtin-comparison /= !=)

(define-builtin numberp (x)
  (convert-to-bool `(jscl/js::== (jscl/js::typeof ,x) "number")))

(define-builtin %floor (x)
  `(jscl/js::method-call |Math| "floor" ,x))

(define-builtin %ceiling (x)
  `(jscl/js::method-call |Math| "ceil" ,x))

(define-builtin expt (x y)
  `(jscl/js::method-call |Math| "pow" ,x ,y))

(define-builtin sqrt (x)
  `(jscl/js::method-call |Math| "sqrt" ,x))

(define-builtin float-to-string (x)
  `(jscl/js::call-internal |make_lisp_string| (jscl/js::method-call ,x |toString|)))

(define-builtin cons (x y)
  `(new (jscl/js::call-internal |Cons| ,x ,y)))

(define-builtin consp (x)
  (convert-to-bool `(instanceof ,x (internal |Cons|))))

(define-builtin car (x)
  `(jscl/js::call-internal |car| ,x))

(define-builtin cdr (x)
  `(jscl/js::call-internal |cdr| ,x))

(define-builtin rplaca (x new)
  `(jscl/js::selfcall
    (jscl/js::var tmp ,x)
    (jscl/js::= (jscl/js::get tmp "car") ,new)
    (jscl/js::return tmp)))

(define-builtin rplacd (x new)
  `(jscl/js::selfcall
    (jscl/js::var tmp ,x)
    (jscl/js::= (jscl/js::get tmp "cdr") ,new)
    (jscl/js::return tmp)))

(define-builtin symbolp (x)
  (convert-to-bool `(jscl/js::instanceof ,x (internal |Symbol|))))

(define-builtin make-symbol (name)
  `(jscl/js::new (jscl/js::call-internal |Symbol|
                                         (jscl/js::call-internal |lisp_to_js| ,name))))

(define-compilation symbol-name (x)
  (convert `(jscl/ffi:oget ,x "name")))

(define-builtin set (symbol value)
  `(jscl/js::= (jscl/js::get ,symbol "value") ,value))

(define-builtin fset (symbol value)
  `(jscl/js::= (jscl/js::get ,symbol "fvalue")
               ,(if (and (listp value)
                         (= 2 (length value))
                         (eql 'quote (first value))
                         (symbolp (second value)))
                    (fdefinition value)
                    value)))

(define-builtin fset-setf (symbol value)
  `(jscl/js::= (jscl/js::get ,symbol "setfValue")
               ,(if (and (listp value)
                         (= 2 (length value))
                         (eql 'quote (first value))
                         (symbolp (second value)))
                    (fdefinition value)
                    value)))

(defmacro fset-macro (target source)
  (setf (macro-function target) (macro-function source)))

(define-builtin boundp (x)
  (convert-to-bool `(jscl/js::!== (jscl/js::get ,x "value") undefined)))

(define-builtin fboundp (x)             ; FIXME: unboundFunction
  (convert-to-bool `(jscl/js::!== (jscl/js::get ,x "fvalue") undefined)))

(define-builtin %fboundp-setf (x)       ; FIXME: unboundSetFFunction
  (convert-to-bool `(jscl/js::!== (jscl/js::get ,x "setfValue") undefined)))

(define-builtin symbol-value (x)
  `(jscl/js::call-internal |symbolValue| ,x))

(define-builtin %fdefinition-setf (accessor)
  `(jscl/js::get ,accessor "setfValue"))
(define-builtin %setf-fdefinition-setf (accessor function)
  `(jscl/js::= (jscl/js::get ,accessor "setfValue") ,function))

(define-builtin %setf-symbol-function (x fn)
  `(jscl/js::call-internal |setSymbolFunction| ,x ,fn))
(define-builtin symbol-function (x)
  `(jscl/js::call-internal |symbolFunction| ,x))
(define-builtin %fmakunbound (x)
  `(jscl/js::call-internal |fMakUnbound| ,x))
(define-builtin %fmakunbound-setf (x)
  `(jscl/js::call-internal |fMakUnboundSetF| ,x))

(define-builtin lambda-code (x)
  `(jscl/js::call-internal |make_lisp_string| (jscl/js::method-call ,x "toString")))

(define-builtin eq (x y)
  (convert-to-bool `(jscl/js::=== ,x ,y)))

(define-builtin char-code (x)
  `(jscl/js::call-internal |char_to_codepoint| ,x))

(define-builtin code-char (x)
  `(jscl/js::call-internal |char_from_codepoint| ,x))

(define-builtin characterp (x)
  `(jscl/js::selfcall
    (jscl/js::var x ,x)
    (jscl/js::return ,(convert-to-bool
                       `(jscl/js::and (jscl/js::== (jscl/js::typeof x) "string")
                                      (jscl/js::or (jscl/js::== (jscl/js::get x "length") 1)
                                                   (jscl/js::== (jscl/js::get x "length") 2)))))))

(define-builtin char-upcase (x)
  `(jscl/js::call-internal |safe_char_upcase| ,x))

(define-builtin char-downcase (x)
  `(jscl/js::call-internal |safe_char_downcase| ,x))

(define-builtin stringp (x)
  `(jscl/js::selfcall
    (jscl/js::var x ,x)
    (jscl/js::return ,(convert-to-bool
                       `
                       (jscl/js::and
                        (jscl/js::and
                         (jscl/js::=== (jscl/js::typeof x) "object")
                         (jscl/js::in "length" x))
                        (jscl/js::== (jscl/js::get x "stringp") 1))))))

(define-builtin ornate-object-class% (x)
  `(jscl/js::selfcall
    (jscl/js::var x ,x)
    (jscl/js::return (jscl/js::and (jscl/js::=== (jscl/js::typeof x) "object")
                                   (jscl/js::in "🏛" x)
                                   (jscl/js::get x "🏛")))))

(define-builtin set-ornate-object-class% (x class)
  `(jscl/js::selfcall
    (jscl/js::var x ,x)
    (jscl/js::return (jscl/js::and (jscl/js::=== (jscl/js::typeof x) "object")
                                   (jscl/js::in "🏛" x)
                                   (jscl/js::= (jscl/js::get x "🏛") ,(string class))))))

(define-raw-builtin funcall (func &rest args)
  `(jscl/js::selfcall
    (jscl/js::var f ,(convert func))
    (jscl/js::return (jscl/js::call
                      (jscl/js::if (jscl/js::=== (jscl/js::typeof f) "function")
                                   f
                                   (jscl/js::get f "fvalue"))
                      ,@(cons (if *multiple-value-p* '|values| '(internal |pv|))
                              (mapcar #'convert args))))))

(define-raw-builtin apply (func &rest args)
  (if (null args)
      (convert func)
      (let ((args (butlast args))
            (last (car (last args))))
        `(jscl/js::selfcall
          (jscl/js::var f ,(convert func))
          (jscl/js::var args ,(list-to-vector
                               (cons (if *multiple-value-p* '|values| '(internal |pv|))
                                     (mapcar #'convert args))))
          (jscl/js::var tail ,(convert last))
          (jscl/js::while (jscl/js::!= tail ,(convert nil))
            (jscl/js::method-call args "push" (jscl/js::get tail "car"))
            (jscl/js::= tail (jscl/js::get tail "cdr")))
          (jscl/js::return (jscl/js::method-call (if (jscl/js::=== (jscl/js::typeof f) "function")
                                                     f
                                                     (jscl/js::get f "fvalue"))
                                                 "apply"
                                                 this
                                                 args))))))

(define-builtin js-eval (string)
  (if *multiple-value-p*
      `(selfcall
        (jscl/js::var v (jscl/js::call-internal |globalEval|
                                                (jscl/js::call-internal |xstring|
                                                                        ,string)))
        (jscl/js::return (jscl/js::method-call |values| "apply"
                                               this (jscl/js::call-internal |forcemv| v))))
      `(jscl/js::call-internal |globalEval|
                               (jscl/js::call-internal |xstring| ,string))))

(define-builtin %throw (string)
  `(jscl/js::selfcall (throw ,string)))

(define-builtin functionp (x)
  (convert-to-bool `(jscl/js::=== (jscl/js::typeof ,x) "function")))



(define-builtin /debug (x)
  `(jscl/js::method-call |console| "log" (jscl/js::call-internal |xstring| ,x)))

(define-builtin /log (x)
  `(jscl/js::method-call |console| "log" ,x))


;;; Storage  vectors. They  are used  to  implement arrays  and (in  the
;;; future) structures. (work-in-progress, kinda.)

(define-builtin storage-vector-p (x)
  `(jscl/js::selfcall
    (jscl/js::var x ,x)
    (jscl/js::return ,(convert-to-bool
                       `(jscl/js::and (jscl/js::=== (jscl/js::typeof x) "object")
                                      (in "length" x)
                                      (in "svKind" x))))))

(define-builtin make-storage-vector (size kind)
  `(jscl/js::selfcall
    (jscl/js::var r #())
    (jscl/js::= (jscl/js::get r "length") ,size)
    (jscl/js::= (jscl/js::get r "svKind") ,kind)
    (jscl/js::return r)))

(define-builtin storage-vector-size (x)
  `(jscl/js::get ,x "length"))

(define-builtin resize-storage-vector (vector new-size)
  `(jscl/js::= (jscl/js::get ,vector "length") ,new-size))

(define-builtin storage-vector-ref (vector n)
  (when (constantp n)
    (check-type n (integer 0 *)))
  `(jscl/js::selfcall
    (jscl/js::var x (jscl/js::property ,vector ,n))
    (jscl/js::if (jscl/js::=== x jscl/js::undefined)
                 (jscl/js::throw
                     (jscl/js::new
                      (jscl/js::call
                       |Error|
                       ,(concatenate 'string "AREF "
                                     (princ-to-string n)
                                     "out of range for vector "
                                     (string vector))))))
    (jscl/js::return x)))

(define-builtin storage-vector-set (vector n value)
  `(jscl/js::selfcall
    (jscl/js::var x ,vector)
    (jscl/js::var i ,n)
    (jscl/js::if (jscl/js::or (< i 0)
                              (>= i (jscl/js::get x "length")))
                 (jscl/js::throw
                     (jscl/js::new
                      (jscl/js::call |Error|
                                     ,(concatenate
                                       'string
                                       "SETF AREF out of range for vector "
                                       (string vector))))))
    (jscl/js::return (jscl/js::= (jscl/js::property x i) ,value))))

(define-builtin concatenate-storage-vector (sv1 sv2)
  ;; TODO check kind?
  `(jscl/js::selfcall
    (jscl/js::var sv1 ,sv1)
    (jscl/js::var r (jscl/js::method-call sv1 "concat" ,sv2))
    (jscl/js::= (jscl/js::get r "svKind") (jscl/js::get sv1 "svKind"))
    (jscl/js::= (jscl/js::get r "stringp") (jscl/js::get sv1 "stringp"))
    (jscl/js::return r)))



(define-builtin get-internal-real-time ()
  `(jscl/js::method-call (jscl/js::new (jscl/js::call |Date|)) "getTime"))



(define-builtin values-array (array)
  (if *multiple-value-p*
      `(jscl/js::method-call |values| "apply" this ,array)
      `(jscl/js::method-call (internals |pv|) "apply" this ,array)))

(define-raw-builtin values (&rest args)
  (if *multiple-value-p*
      `(jscl/js::call |values| ,@(mapcar #'convert args))
      `(jscl/js::call-internal |pv| ,@(mapcar #'convert args))))


;;; Javascript FFI

(define-builtin new ()
  '(object))

(define-raw-builtin jscl/ffi::oget* (object key &rest keys)
  `(jscl/js::selfcall
    (jscl/js::progn
      (jscl/js::var tmp (jscl/js::property ,(convert object)
                                           (jscl/js::call-internal |xstring|
                                                                   ,(convert key))))
      ,@(mapcar (lambda (key)
                  `(jscl/js::progn
                     (jscl/js::if (jscl/js::=== tmp jscl/ffi::undefined)
                                  (jscl/js::return ,(convert nil)))
                     (jscl/js::= tmp (jscl/js::property tmp
                                                        (jscl/js::call-internal |xstring|
                                                                                ,(convert key))))))
                keys))
    (jscl/js::return (jscl/js::if (jscl/js::=== tmp undefined)
                                  ,(convert nil)
                                  tmp))))

(define-raw-builtin jscl/ffi::oset* (value object key &rest keys)
  (let ((keys (cons key keys)))
    `(jscl/js::selfcall
      (jscl/js::progn
        (jscl/js::var obj ,(convert object))
        ,@(mapcar (lambda (key)
                    `(jscl/js::progn
                       (jscl/js::= obj (jscl/js::property obj
                                                          (jscl/js::call-internal |xstring|
                                                                                  ,(convert key))))
                       (jscl/js::if (jscl/js::=== obj jscl/ffi::undefined)
                                    (jscl/js::throw "Impossible to set object property."))))
                  (butlast keys))
        (jscl/js::var tmp
                      (jscl/js::= (jscl/js::property obj
                                                     (jscl/js::call-internal |xstring|
                                                                             ,(convert (car (last keys)))))
                                  ,(convert value)))
        (jscl/js::return (jscl/js::if (jscl/js::=== tmp jscl/ffi::undefined)
                                      ,(convert nil)
                                      tmp))))))

(define-raw-builtin jscl/ffi::oget (object key &rest keys)
  `(jscl/js::call-internal |js_to_lisp| ,(convert `(jscl/ffi:oget* ,object ,key ,@keys))))

(define-raw-builtin jscl/ffi::oset (value object key &rest keys)
  (convert `(jscl/ffi::oset* (lisp-to-js ,value) ,object ,key ,@keys)))

(define-builtin js-null-p (x)
  (convert-to-bool `(jscl/js::=== ,x jscl/ffi::null)))

(define-builtin objectp (x)
  (convert-to-bool `(jscl/js::=== (jscl/js::typeof ,x) "object")))

(define-builtin %%nlx-p (x)
  (convert-to-bool `(jscl/js::call-internal |isNLX| ,x)))

(define-builtin %%throw (x)
  `(jscl/js::selfcall (jscl/js::throw ,x)))

(define-builtin lisp-to-js (x) `(jscl/js::call-internal |lisp_to_js| ,x))
(define-builtin js-to-lisp (x) `(jscl/js::call-internal |js_to_lisp| ,x))

(define-builtin in (key object)
  (convert-to-bool `(in (jscl/js::call-internal |xstring| ,key) ,object)))

(define-builtin delete-property (key object)
  `(selfcall
    (delete (jscl/js::property ,object (jscl/js::call-internal |xstring| ,key)))))

(define-builtin map-for-in (function object)
  `(selfcall
    (jscl/js::var f ,function
                  (g (if (jscl/js::=== (jscl/js::typeof f) "function") f (jscl/js::get f "fvalue")))
                  (o ,object)
                  key)
    (for-in (key o)
            (jscl/js::callg ,(if *multiple-value-p* '|values| '(internal |pv|))
                            (jscl/js::property o key)))
    (return ,(convert nil))))

(define-compilation %js-vref (var &optional raw)
  (if raw
      (make-symbol var)
      `(jscl/js::call-internal |js_to_lisp| ,(make-symbol var))))

(define-compilation %js-vset (var val)
  `(jscl/js::= ,(make-symbol var) (jscl/js::call-internal |lisp_to_js| ,(convert val))))

(define-setf-expander %js-vref (var)
  (let ((new-value (gensym "JS-VREF-NEW-VALUE-")))
    (unless (stringp var)
      (error "`~S' is not a string." var))
    (values nil
            (list var)
            (list new-value)
            `(%js-vset ,var ,new-value)
            `(%js-vref ,var))))

(define-compilation %js-typeof (x)
  `(jscl/js::call-internal |js_to_lisp| (jscl/js::typeof ,x)))

;;; Access a function defined in the internals runtime object.
(define-compilation %js-internal (name)
  `(internal ,name))

;; Catch any Javascript exception. Note  that because all non-local exit
;; are based  on try-catch-finally,  it will also  catch them.  We could
;; provide  a JS  function  to  detect it,  so  the  user could  rethrow
;; the error.
;;
;; (%js-try (progn …) (catch (err) …) (finally …))
(define-compilation %js-try (form &optional catch-form finally-form)
  (let ((catch-compilation
         (and catch-form
              (destructuring-bind (catch (var) &body body) catch-form
                (unless (eq catch 'catch)
                  (error "Bad CATCH clausule `~S'." catch-form))
                (let* ((*environment* (extend-local-env (list var)))
                       (tvar (translate-variable var)))
                  `(jscl/js::catch (,tvar)
                     (jscl/js::= ,tvar (jscl/js::call-internal |js_to_lisp| ,tvar))
                     ,(convert-block body t))))))

        (finally-compilation
         (and finally-form
              (destructuring-bind (finally &body body) finally-form
                (unless (eq finally 'finally)
                  (error "Bad FINALLY clausule `~S'." finally-form))
                `(finally
                  ,(convert-block body))))))

    `(selfcall
      (try (return ,(convert form)))
      ,catch-compilation
      ,finally-compilation)))

(define-compilation symbol-macrolet (macrobindings &rest body)
  (let ((new (copy-lexenv *environment*)))
    (dolist (macrobinding macrobindings)
      (destructuring-bind (symbol expansion) macrobinding
        (let ((b (make-binding :name symbol :type 'macro :value expansion)))
          (push-to-lexenv b new 'variable))))
    (let ((*environment* new))
      (convert-block body nil t))))

#-jscl
(defparameter *macroexpander-cache*
  (make-hash-table :test #'eq))

(defun jscl/cl::macro-function (symbol &optional (environment *environment*))
  (unless (function-name-p symbol)
    (error "`~S' is not a symbol." symbol))
  (when (and (listp symbol)
             (eq 'setf (first symbol)))
    (return-from jscl/cl::macro-function nil))
  #- (or ecl sbcl jscl)
  (warn "Your Implementation's quasiquote may not be handled properly.")
  #+ecl
  (when (eql symbol 'si:quasiquote)
    (warn "ECL quasiquote is probably not handled properly yet")
    (return-from !macro-function
      (lambda (form) (ext::macroexpand-1 form))))
  #+sbcl
  (when (eql symbol 'sb-int:quasiquote)
    (return-from jscl/cl::macro-function
      (lambda (form environment)
        (declare (ignore environment))
        (sb-impl::expand-quasiquote form nil))))
  (let ((b (lookup-in-lexenv symbol (or environment *global-environment*) 'function)))
    (if (and b (eq (binding-type b) 'macro))
        (let ((expander (binding-value b)))
          (cond
            #-jscl
            ((gethash b *macroexpander-cache*)
             (setq expander (gethash b *macroexpander-cache*)))
            ((listp expander)
             (let ((compiled (eval expander)))
               ;; The    list    representation   are    useful    while
               ;; bootstrapping, as  we can  dump the definition  of the
               ;; macros easily,  but they are  slow because we  have to
               ;; evaluate them and compile them  now and again. So, let
               ;; us  replace the  list  representation  version of  the
               ;; function with the compiled one.
               #+jscl (setf (binding-value b) compiled)
               #-jscl (setf (gethash b *macroexpander-cache*) compiled)
               (setq expander compiled))))
          expander)
        nil)))


(defun !macroexpand-1/symbol (symbol &optional (env *environment*))
  (let ((b (lookup-in-lexenv symbol (or env *global-environment*)
                             'variable)))
    (if (and b (eq (binding-type b) 'macro))
        (values (binding-value b) t)
        (values symbol nil))))

(defun jscl/cl::macroexpand-1 (form &optional (env *environment*))
  (let ((*environment* (or env *global-environment*)))
    (cond
      ((symbolp form)
       (!macroexpand-1/symbol form env))
      ((and (consp form) (symbolp (car form)))
       (let ((macrofun (jscl/cl::macro-function (car form) env)))
         (if macrofun
             (values (funcall macrofun (cdr form) env) t)
             (values form nil))))
      (t
       (values form nil)))))

(defun jscl/cl::macroexpand (form &optional env)
  (let ((continue t))
    (while continue
      (multiple-value-setq (form continue) (jscl/cl::macroexpand-1 form env))))
  form)

(defun compile-funcall/function (function arglist)
  (when (and (symbolp function)
             (or (jscl/cl::macro-function function)
                 (special-form-p function)))
    (error "Compiler error: Macro function was not expanded: ~s"
           function))
  (fn-info function :called t)
  ;; This code will  work even if the symbol-function is  unbound, as it
  ;; is represented by a function that throws the expected error.
  `(jscl/js::method-call ,(convert `',function) "fvalue" ,@arglist))

(defun compile-funcall/translate-function (function arglist)
  `(jscl/js::call,(translate-function function) ,@arglist))

(defun compile-funcall/lambda (function arglist)
  `(jscl/js::call,(convert `(function ,function)) ,@arglist))

(defun compile-funcall/oget (function args)
  `(jscl/js::call-internal
    |js_to_lisp|
    (jscl/js::call,(reduce (lambda (obj p)
                             `(jscl/js::property ,obj (jscl/js::call-internal |xstring| ,p)))
                           (mapcar #'convert (cdr function)))
                  ,@(mapcar (lambda (s)
                              `(jscl/js::call-internal |lisp_to_js| ,(convert s)))
                            args))))

(defun compile-funcall/error (function)
  (error "Function designator ~s is not a lambda form nor an oget; car is ~a::~a"
         function
         (let ((p (symbol-package (car function))))
           (if p (package-name p) "#"))
         (symbol-name (car function))))

(defun compile-funcall/args-list (args)
  (cons (if *multiple-value-p*
            '|values|
            '(internal |pv|))
        (mapcar #'convert args)))

(defun compile-funcall/function-special (fun args)
  (compile-funcall fun args))

(defun compile-funcall (function args)
  (let* ((arglist (compile-funcall/args-list args)))
    (cond
      ((eql 'setf function)
       (compile-funcall (list 'setf (first args))
                        (rest args)))
      ((translate-function function)
       (compile-funcall/translate-function function arglist))
      ((and (symbolp function) (jscl/cl::macro-function function))
       (error "Compiler error: Macro function was not expanded: ~s" function))
      ((function-name-p function)
       (compile-funcall/function function arglist))
      ((not (consp function))
       (error "Bad function designator `~S'" function))
      ((eql (car function) 'function)
       (compile-funcall/function-special (rest function) arglist))
      ((eql (car function) 'lambda)
       (compile-funcall/lambda function arglist))
      ((eql (car function) 'jscl/ffi:oget)
       (compile-funcall/oget function args))
      (t
       (compile-funcall/error function)))))

(defun convert-block (sexps &optional return-last-p decls-allowed-p)
  (multiple-value-bind (sexps decls)
      (parse-body sexps :declarations decls-allowed-p)
    (declare (ignore decls))
    (if return-last-p
        `(jscl/js::progn
           ,@(mapcar #'convert (butlast sexps))
           (jscl/js::return ,(convert (car (last sexps)) *multiple-value-p*)))
        `(jscl/js::progn ,@(mapcar #'convert sexps)))))

(defun inline-builtin-p (name)
  (and (gethash name *builtins*)
       (not (claimp name 'function 'notinline))))

(defun special-form-p (name)
  (and (eql (symbol-package name) (find-package "JSCL/CL"))
       (gethash (string name) *special-forms*)))

(defun compile-special-form (name args)
  (let ((comp (gethash (string name) *special-forms*)))
    (assert comp () "~S must name a special form" comp)
    (apply comp args)))

(defun compile-builtin-function (name args)
  (apply (gethash name *builtins*) args))

#+jscl
(dolist (fn (+ - / * mod sqrt expt log
               round floor
               elt nth aref
               first rest last lastcar
               car cdr
               caar cadr cdar cddr
               caaar caadr cadar caddr cdaar cdadr cddar cdddr
               logand logior logxor
               and or xor not))
  (proclaim (list 'jscl::pure fn)))

(defun compile-sexp (sexp)
  (let ((name (car sexp))
        (args (cdr sexp)))
    (cond
      ((and (claimp name 'function 'jscl::pure)
            (every #'constantp args))
       (apply name args))
      ((special-form-p name)
       (compile-special-form name args))
      ((inline-builtin-p name)
       (compile-builtin-function name args))
      (t (compile-funcall name args)))))

(defun convert-1/symbol (sexp)
  (let ((b (lookup-in-lexenv sexp *environment* 'variable)))
    (cond
      ((and b (not (member 'special (binding-declarations b))))
       (binding-value b))
      ((or (keywordp sexp)
           (and b (member 'constant (binding-declarations b))))
       `(jscl/js::get ,(convert `',sexp) "value"))
      (t
       (convert `(symbol-value ',sexp))))))

(defun emit-uncompilable-form (sexp err-format &rest err-args)
  (restart-case
      (apply #'error err-format err-args)
    (replace-with-warning ()
      :report "Replace failed form with a warning"
      (warn "Error ~? replaced with a warning" err-format err-args)
      (list 'warn (format nil "Failed compilation of ~s"
                          sexp)))
    (replace-with-cerror ()
      :report "Replace failed form with a continuable error"
      (warn "Error ~? replaced with a continuable error"
            err-format err-args)
      (list 'cerror "Continue"
            (format nil "Failed compilation of ~s"
                    sexp)))
    (replace-with-error ()
      :report "Replace failed form with an error"
      (warn "Error ~? replaced with a runtime error"
            err-format err-args)
      (list 'error (format nil "Failed compilation of ~s"
                           sexp)))))

(defun should-be-macroexpanded-in-cl-p (sexp)
  (and (consp sexp)
       (symbolp (car sexp))
       ;; DESTRUCTURING-BIND is  defined via !DESTRUCTURING-BIND  and is
       ;; almost not a macro and almost,  but not quite, a special form,
       ;; so we have to work around that here.
       (not (eql 'destructuring-bind (car sexp)))
       (eql (find-package :common-lisp)
            (symbol-package (car sexp)))
       (macro-function (car sexp))))

(defun prefix-! (symbol)
  (intern (concatenate 'string "!"
                       (symbol-name symbol))
          :jscl))

(defun complain-failed-macroexpansion (sexp)
  (emit-uncompilable-form
   sexp
   "Failed to macroexpand ~s ~% in ~s~2%~a"
   (car sexp) sexp
   (format nil
           "No macro-function ~s is defined in JSCL"
           (car sexp))))

(defun check-for-failed-macroexpansion (sexp)
  "When a symbol is defined as a  macro in the host compiler, and exists
in the CL package,  it is usually a safe bet that  we should be treating
it as a macro within JSCL  as well. The notable exception (inversion) is
`DESTRUCTURING-BIND'.  This checks  for  missing  macros, which  usually
means either that  we have a compile-time dependency  ordering issue, or
just haven't gotten  around to defining that macro at  all, yet. It also
jumps out and  shouts when macro-expansion is  broken completely, rather
than baffling errors because of macro-forms being treated as functions.

FIXME redocument with !

Notably,  a  macro defined  as  !NAME  will be  used  for  NAME to  make
cross-compilation less  sticky about symbol  names in the  JSCL package.
If the  JSCL/CL package were separate  from the JSCL/INT package  or so,
this might go  away, but that will  take a good bit  of rewriting symbol
names throughout the tree. "
  (cond ((not (should-be-macroexpanded-in-cl-p sexp)) sexp)
        ((jscl/cl::macro-function (prefix-! (car sexp)))
         (warn "Substituting !~s for ~:*~s" (car sexp))
         (jscl/cl::macroexpand (cons (prefix-! (car sexp))
                                     (cdr sexp))))
        (t (complain-failed-macroexpansion sexp))))

(defun object-evaluates-to-itself-p (object)
  ;; TODO:  Things  that  “should”  evaluate  to  themselves  but  won't
  ;; actually (yet) include bignums, rationals, and complex numbers
  (or (jscl/cl::fixnump object)
      (floatp object)
      (characterp object)
      (stringp object)
      (arrayp object)
      (pathnamep object)
      (keywordp object)
      (typep object 'structure-object)))

(defun convert-1 (sexp &optional multiple-value-p)
  "Translate  SEXP  (which  can  be  a  single  symbol  or  value)  into
JavaScript  AST  form  for  the   code  generator.  Expand  all  macros.
If MULTIPLE-VALUE-P,  then it's possible  that SEXP may  return multiple
values, and  the appropriate  JavaScript wrappers must  be in  place; if
not, the simplified forms that accept  only a primary value returned can
be used."
  (multiple-value-bind (sexp expandedp) (jscl/cl::macroexpand-1 sexp)
    (when expandedp
      (return-from convert-1 (convert sexp multiple-value-p)))
    ;; The expression has been macroexpanded. Now compile it!
    (let ((sexp (check-for-failed-macroexpansion sexp)))
      (let ((*multiple-value-p* multiple-value-p)
            (*convert-level* (1+ *convert-level*)))
        (cond
          ((symbolp sexp)
           (convert-1/symbol sexp))
          ((rational-float-p sexp)
           (literal (rational-float-p sexp)))
          ((object-evaluates-to-itself-p sexp)
           (literal sexp))
          ((listp sexp)
           (compile-sexp sexp))
          (t
           (error "How should I compile ~s `~S'?"
                  (type-of sexp) sexp)))))))

(defun convert (sexp &optional multiple-value-p)
  (convert-1 sexp multiple-value-p))

(defvar *compile-print-toplevels* nil)

(defun truncate-string (string &optional (width 60))
  "Truncate   a  STRING   to  no   more  than   WIDTH  characters,   and
remove newlines."
  (let ((n (or (position #\newline string)
               (min width (length string)))))
    (subseq string 0 n)))

(defun convert-toplevel-progn (sexp &optional multiple-value-p return-p)
  (warn "Top-level PROGN same as as ~r top-level form~:p"
        (length (cdr sexp)))
  `(jscl/js::progn
     ;; Discard all except the last value
     ,@(mapcar (lambda (form)
                 (convert-toplevel form nil nil))
               (butlast (cdr sexp)))
     ;; Return the last value(s)
     ,(convert-toplevel
       (first (last (cdr sexp))) multiple-value-p return-p)))

(defun convert-toplevel-defpackage (sexp)
  (warn
   "DEFPACKAGE ~a will probably not be effective within the current
file.  See  https://github.com/romance-ii/jscl/issues/30  — If  you  put
DEFPACKAGE in  a separate file  from IN-PACKAGE, everything seems  to be
just fine."
   (second sexp))
  (apply #'defpackage-real% (rest sexp))
  (convert-toplevel `(apply #'defpackage-real% (rest sexp))))

;; Based upon the one from Alexandria:
(defun hash-table-values (table)
  (let ((values nil))
    (maphash (lambda (k v)
               (declare (ignore k))
               (push v values))
             table)
    values))

(defun hosted-copy-package (name)
  #-jscl
  (let* ((package (jscl::find-package-or-fail name))
         (used (gethash "use" package))
         (nicknames (gethash "nicknames" package))
         #+nil (exports (gethash "exports" package)))
    (make-package (gethash "packageName" package)
                  :use (and used (hash-table-values used))
                  :nicknames (and nicknames (hash-table-values nicknames)))))

(defun convert-toplevel-in-package (sexp)
  (assert (= 2 (length sexp)))
  (let ((name (second sexp)))
    (setf *package* (or (cl:find-package name)
                        #-jscl (hosted-copy-package name)
                        #+jscl (find-package-or-fail name)))
    (convert-toplevel
     `(setq *package* (find-package-or-fail ,name)))))

(defun convert-toplevel-normal (sexp multiple-value-p return-p)
  (when *compile-print-toplevels*
    (let ((form-string (prin1-to-string sexp)))
      (format t "~&;; Compiling ~a…" (truncate-string
                                      (substitute #\space #\newline
                                                  form-string)
                                      120))))

  (let ((code (convert sexp multiple-value-p)))
    (if return-p
        `(return ,code)
        code)))

(defun convert-toplevel (sexp &optional multiple-value-p return-p)
  "Macroexpand SEXP as  much as possible, and process it  as a top-level
form. If  MULTIPLE-VALUE-P, then  SEXP may  return multiple  values (and
they  will  be bound);  otherwise,  use  a  simpler form  that  discards
non-primary values. If RETURN-P, emit  a JavaScript “return” operator on
the value."
  (multiple-value-bind (expansion expandedp) (jscl/cl::macroexpand-1 sexp)
    (when expandedp
      (warn "Macro-expansion done on top level (~s …)…" (car sexp))
      (return-from convert-toplevel
        (convert-toplevel expansion multiple-value-p return-p))))
  ;; Process as toplevel
  (let ((*convert-level* -1))
    (cond
      ;; HACK work-around for DEFPACKAGE not working
;;; TODO  after   confirming  that  this   is  not  a   problem,  remove
;;; the warning.
      ((and (consp sexp)
            (eql (car sexp) 'defpackage))
       (convert-toplevel-defpackage sexp))
      ((and (consp sexp)
            (eql (car sexp) 'in-package)
            (= 2 (length sexp)))
       (convert-toplevel-in-package sexp))
      ;; Non-empty toplevel progn
      ((and (consp sexp)
            (eq (car sexp) 'progn)
            (cdr sexp))
       (convert-toplevel-progn sexp multiple-value-p return-p))
      (t
       (convert-toplevel-normal sexp multiple-value-p return-p)))))

(defun process-toplevel (sexp &optional multiple-value-p return-p)
  (let ((*toplevel-compilations* nil))
    (let ((code (convert-toplevel sexp multiple-value-p return-p)))
      `(jscl/js::progn
         ,@(get-toplevel-compilations)
         ,code))))

(defun compile-toplevel (sexp &optional multiple-value-p return-p)
  #-jscl
  (progn
    (eval (process-toplevel sexp multiple-value-p return-p))
    (format *js-output* "/* Toplevel form evaluated in ~a */" (lisp-implementation-type)))
  #+jscl
  (with-output-to-string (*js-output*)
    (js (process-toplevel sexp multiple-value-p return-p))))

(defmacro with-compilation-environment (&body body)
  `(let ((*literal-table* nil)
         (*variable-counter* 0)
         (*gensym-counter* 0)
         (*literal-counter* 0)
         (*features* (list :jscl *features*)))
     (with-sharp-j
       ,@body)))


#+ (or)
(unwind-protect
     (progn
       (rename-package (find-package "JSCL/HOSTED")
                       "JSCL/HOSTED*")
       (unwind-protect
            (progn
              (rename-package (find-package "JSCL/XC") "JSCL")
              ,@body)
         (ignore-errors
           (rename-package (find-package "JSCL")
                           "JSCL/INTERMEDIATE-CROSS-COMPILATION"))))
  (ignore-errors
    (rename-package (find-package "JSCL/HOSTED*")
                    "JSCL/HOSTED")))



(defmacro !with-compilation-unit (options &body body)
  (warn "WITH-COMPILATION-UNIT currently has no effect.~@[
Ignoring options ~s~]" options)
  body)
