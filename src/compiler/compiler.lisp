;;; compiler.lisp ---

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

;;;; Compiler

(/debug "loading compiler.lisp!")

;;; Translate the Lisp code to Javascript. It will compile the special
;;; forms. Some primitive functions are compiled as special forms
;;; too. The respective real functions are defined in the target (see
;;; the beginning of this file) as well as some primitive functions.

(define-js-macro selfcall (&body body)
  `(call (function () ,@body)))

(define-js-macro method-call (x method &rest args)
  `(call (get ,x ,method) ,@args))

(define-js-macro nargs ()
  `(get |arguments| |length|))

(define-js-macro arg (n)
  `(property |arguments| ,n))

;;; Runtime

(define-js-macro internal (x)
  `(get |internals| ,x))

(define-js-macro call-internal (name &rest args)
  `(method-call |internals| ,name ,@args))


(defun convert-to-bool (expr)
  `(if ,expr ,(convert t) ,(convert nil)))


;;; A Form can return a multiple values object calling VALUES, like
;;; values(arg1, arg2, ...). It will work in any context, as well as
;;; returning an individual object. However, if the special variable
;;; `*multiple-value-p*' is NIL, is granted that only the primary
;;; value will be used, so we can optimize to avoid the VALUES
;;; function call.
(defvar *multiple-value-p* nil)

;;; The target specifies how the compiled form's result should be
;;; delivered.  It is set by `convert' and `convert-1' so that
;;; compilation handlers can read it.  Handlers only see:
;;;
;;;   :return      -- emit a return statement
;;;   :discard     -- the value is unused (side effects only)
;;;   (:assign V)  -- emit an assignment to the JS variable V
;;;
;;; The :expression target is never passed to handlers; `convert'
;;; translates it to (:assign tmp) before calling `convert-1'.
;;;
;;; Legacy handlers ignore *target* and always produce an expression.
;;; `convert' adapts it to the target automatically.  Migrated
;;; handlers may read *target* and return (values ast :block) to
;;; emit statements directly.
(defvar *target* :expression)

;;; When in multiple-value position, wrap JSEXPR in a values1() call
;;; to clear _mv signaling a single return value.  In non-MV position,
;;; return JSEXPR unchanged.
(defun value1 (jsexpr)
  (if *multiple-value-p*
      `(call-internal |values1| ,jsexpr)
      jsexpr))


;;; Environment

(def!struct binding
  name
  type
  value
  declarations)

(def!struct lexenv
  variable
  function
  block
  gotag
  compiler-macro)

(defun lookup-in-lexenv (name lexenv namespace)
  (find name (ecase namespace
                (variable (lexenv-variable lexenv))
                (function (lexenv-function lexenv))
                (block    (lexenv-block    lexenv))
                (gotag    (lexenv-gotag    lexenv))
                (compiler-macro (lexenv-compiler-macro lexenv)))
        :key #'binding-name))

(defun push-to-lexenv (binding lexenv namespace)
  (ecase namespace
    (variable (push binding (lexenv-variable lexenv)))
    (function (push binding (lexenv-function lexenv)))
    (block    (push binding (lexenv-block    lexenv)))
    (gotag    (push binding (lexenv-gotag    lexenv)))
    (compiler-macro (push binding (lexenv-compiler-macro lexenv)))))

(defun extend-lexenv (bindings lexenv namespace)
  (let ((env (copy-lexenv lexenv)))
    (dolist (binding (reverse bindings) env)
      (push-to-lexenv binding env namespace))))


(defvar *environment*)
(defvar *global-environment*)
(defvar *variable-counter*)


(defun gvarname (symbol)
  (declare (ignore symbol))
  (incf *variable-counter*)
  (make-symbol (concat "v" (integer-to-string *variable-counter*))))

(defun translate-variable (symbol)
  (awhen (lookup-in-lexenv symbol *environment* 'variable)
    (binding-value it)))

(defun extend-local-env (args)
  (let ((new (copy-lexenv *environment*)))
    (dolist (symbol args new)
      (let ((b (make-binding :name symbol :type 'variable :value (gvarname symbol))))
        (push-to-lexenv b new 'variable)))))

(defun extend-macrolet-env (definitions)
  (let ((new (copy-lexenv *environment*)))
    (dolist (def definitions new)
      (destructuring-bind (name lambda-list &body body) def
        (let ((binding (make-binding :name name :type 'macro :value
                                     (parse-macro name lambda-list body))))
          (push-to-lexenv binding  new 'function))))))

(defun extend-symbol-macrolet-env (macrobindings)
  (let ((new (copy-lexenv *environment*)))
    (dolist (macrobinding macrobindings new)
      (destructuring-bind (symbol expansion) macrobinding
        (let ((b (make-binding :name symbol :type 'macro :value expansion)))
          (push-to-lexenv b new 'variable))))))

;;; Toplevel compilations
(defvar *toplevel-compilations*)

(defun toplevel-compilation (string)
  (push string *toplevel-compilations*))

(defun get-toplevel-compilations ()
  (reverse *toplevel-compilations*))

(defun %compile-defmacro (name lambda)
  (let ((binding (make-binding :name name :type 'macro :value lambda)))
    (push-to-lexenv binding  *environment* 'function))
  name)

(defun %define-compiler-macro (name lambda)
  (let ((binding (make-binding :name name :type 'macro :value lambda)))
    (push-to-lexenv binding  *environment* 'compiler-macro))
  name)

(defun global-binding (name type namespace)
  (or (lookup-in-lexenv name *environment* namespace)
      (let ((b (make-binding :name name :type type :value nil)))
        (push-to-lexenv b *environment* namespace)
        b)))

(defun claimp (symbol namespace claim)
  (let ((b (lookup-in-lexenv symbol *environment* namespace)))
    (and b (member claim (binding-declarations b)))))

(defun !proclaim (decl)
  (case (car decl)
    (special
     (dolist (name (cdr decl))
       (let ((b (global-binding name 'variable 'variable)))
         (push 'special (binding-declarations b)))))
    (notinline
     (dolist (name (cdr decl))
       (let ((b (global-binding name 'function 'function)))
         (push 'notinline (binding-declarations b)))))
    (constant
     (dolist (name (cdr decl))
       (let ((b (global-binding name 'variable 'variable)))
         (push 'constant (binding-declarations b)))))))

#+jscl-target
(fset 'proclaim #'!proclaim)

(defun %define-symbol-macro (name expansion)
  (let ((b (make-binding :name name :type 'macro :value expansion)))
    (push-to-lexenv b *environment* 'variable)
    name))

#+jscl-target
(defmacro define-symbol-macro (name expansion)
  `(%define-symbol-macro ',name ',expansion))

(defun constant-value (x &optional environment)
  (let ((env (or environment *global-environment*)))
    (cond
      ((keywordp x) (values x t))
      ((symbolp x)
       (awhen (lookup-in-lexenv x env 'variable)
         (when (member 'constant (binding-declarations it))
           (values (symbol-value x) t))))
      ((consp x)
       (when (eq (car x) 'quote)
         (values (cadr x) t)))
      (t (values x t)))))

(defun !constantp (x &optional environment)
  (if (nth-value 1 (constant-value x environment))
      t nil))

#+jscl-target
(fset 'constantp #'!constantp)


;;; Report functions which are called but not defined

(defvar *fn-info*)


(def!struct fn-info
  symbol
  defined
  called)

(defun find-fn-info (symbol)
  (let ((entry (find symbol *fn-info* :key #'fn-info-symbol :test 'equal)))
    (unless entry
      (setq entry (make-fn-info :symbol symbol))
      (push entry *fn-info*))
    entry))

(defun fn-info (symbol &key defined called)
  (let ((info (find-fn-info symbol)))
    (when defined
      (setf (fn-info-defined info) defined))
    (when called
      (setf (fn-info-called info) called))))

(defun report-undefined-functions ()
  (dolist (info *fn-info*)
    (let ((symbol (fn-info-symbol info)))
      (when (and (fn-info-called info)
                 (not (fn-info-defined info))
                 (not (fboundp symbol)))
        (warn "The function `~a' is undefined.~%" symbol))))
  (setq *fn-info* nil))

(defmacro %with-compilation-unit ((&key override) &body body)
  (declare (ignore override))
  `(flet ((run () ,@body))
     (if (boundp '*fn-info*)
         ;; If there is already a bound *fn-info*, just run the body
         (run)
         ;; Othewise, stup the *fn-info* and reporting of undefined
         ;; functions by the end of the block.
         (let ((*fn-info* '()))
           (multiple-value-prog1 (run)
             (report-undefined-functions))))))
#+jscl-target
(defmacro with-compilation-unit ((&key override) &body body)
  `(%with-compilation-unit (:override ,override) ,@body))


;;; Special forms

(defvar *compilations*
  (make-hash-table))

(defmacro define-compilation (name args &body body)
  ;; Creates a new primitive `name' with parameters args and
  ;; @body. The body can access to the local environment through the
  ;; variable *ENVIRONMENT*.
  `(setf (gethash ',name *compilations*)
         (lambda ,args (block ,name ,@body))))

(define-compilation if (condition true &optional false)
  (multiple-value-bind (value constantp) (constant-value condition *environment*)
    (if constantp
        (convert-tail (if value true false))
        `(if (!== ,(convert condition) ,(convert nil))
             ,(convert-tail true)
             ,(convert-tail false)))))

(defvar *ll-keywords* '(&optional &rest &key &allow-other-keys))

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

(defun ll-allow-other-keys (ll)
  (member '&allow-other-keys ll))

(defun ll-keyword-arguments-canonical (ll)
  (flet ((canonicalize (keyarg)
           ;; Build a canonical keyword argument descriptor, filling
           ;; the optional fields. The result is a list of the form
           ;; ((keyword-name var) init-form svar).
           (let ((arg (ensure-list keyarg)))
             (cons (if (listp (car arg))
                       (car arg)
                       (list (intern (symbol-name (car arg)) "KEYWORD") (car arg)))
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

(defun lambda-name/docstring-wrapper (name docstring code)
  (if (or name docstring)
      `(selfcall
        (var (func ,code))
        ,(when name `(= (get func "fname") ,(dump-string name)))
        ,(when docstring `(= (get func "docstring") ,(dump-string docstring)))
        (return func))
      code))

(defun lambda-check-argument-count
    (n-required-arguments n-optional-arguments rest-p)
  ;; Note: Remember that we assume that the number of arguments of a
  ;; call is at least 1 (the values argument).
  (let ((min n-required-arguments)
        (max (if rest-p 'n/a (+ n-required-arguments n-optional-arguments))))
    (block nil
      ;; Special case: a positive exact number of arguments.
      (when (and (< 0 min) (eql min max))
        (return `(call-internal |checkArgs| (nargs) ,min)))
      ;; General case:
      `(progn
         ,(when (< 0 min)     `(call-internal |checkArgsAtLeast| (nargs) ,min))
         ,(when (numberp max) `(call-internal |checkArgsAtMost|  (nargs) ,max))))))

(defun compile-lambda-optional (ll)
  (let* ((optional-arguments (ll-optional-arguments-canonical ll))
         (n-required-arguments (length (ll-required-arguments ll)))
         (n-optional-arguments (length optional-arguments))
         (svars (remove nil (mapcar #'third optional-arguments))))

    (when optional-arguments
      `(progn
         ,(when svars
                `(var ,@(mapcar (lambda (svar)
                                  (list (translate-variable svar)
                                        (convert t)))
                                svars)))
         (switch (nargs)
                 ,@(with-collect
                    (dotimes (idx n-optional-arguments)
                      (let ((arg (nth idx optional-arguments)))
                        (collect `(case ,(+ idx n-required-arguments)))
                        (collect `(= ,(translate-variable (car arg))
                                     ,(convert (cadr arg))))
                        (collect (when (third arg)
                                   `(= ,(translate-variable (third arg))
                                       ,(convert nil))))))
                    (collect 'default)
                    (collect '(break))))))))

(defun compile-lambda-rest (ll)
  (let ((n-required-arguments (length (ll-required-arguments ll)))
        (n-optional-arguments (length (ll-optional-arguments ll)))
        (rest-argument (ll-rest-argument ll)))
    (when rest-argument
      (let ((js!rest (translate-variable rest-argument)))
        `(progn
           (var (,js!rest ,(convert nil)))
           (var i)
           (for ((= i (- (nargs) 1))
                 (>= i ,(+ n-required-arguments n-optional-arguments))
                 (post-- i))
                (= ,js!rest (new (call-internal |Cons| (arg i) ,js!rest)))))))))

(defun compile-lambda-parse-keywords (ll)
  (let ((n-required-arguments
         (length (ll-required-arguments ll)))
        (n-optional-arguments
         (length (ll-optional-arguments ll)))
        (keyword-arguments
         (ll-keyword-arguments-canonical ll))
  (allow-other-keys (ll-allow-other-keys ll)))
    `(progn
       ;; Declare variables
       ,@(with-collect
          (dolist (keyword-argument keyword-arguments)
            (destructuring-bind ((keyword-name var) &optional initform svar)
                keyword-argument
              (declare (ignore keyword-name initform))
              (collect `(var ,(translate-variable var)))
              (when svar
                (collect
                    `(var (,(translate-variable svar)
                            ,(convert nil))))))))

       ;; Parse keywords
       ,(flet ((parse-keyword (keyarg)
                (destructuring-bind ((keyword-name var) &optional initform svar) keyarg
                  ;; ((keyword-name var) init-form svar)
                  `(progn
                     (for ((= i ,(+ n-required-arguments n-optional-arguments))
                           (< i (nargs))
                           (+= i 2))
                          ;; ....
                          (if (=== (arg i) ,(convert keyword-name))
                              (progn
                                (= ,(translate-variable var) (arg (+ i 1)))
                                ,(when svar `(= ,(translate-variable svar)
                                                ,(convert t)))
                                (break))))
                     (if (>= i (nargs))
                         (= ,(translate-variable var) ,(convert initform)))))))
         (when keyword-arguments
           `(progn
              (var i)
              ,@(mapcar #'parse-keyword keyword-arguments))))

       ;; Check for unknown keywords
       ,(when keyword-arguments
         `(progn
            (var (start ,(+ n-required-arguments n-optional-arguments)))
            (if (== (% (- (nargs) start) 2) 1)
                (throw "Odd number of keyword arguments."))
            ,@(when (not allow-other-keys)
               `((for ((= i start) (< i (nargs)) (+= i 2))
                   (if (and ,@(mapcar (lambda (keyword-argument)
                                   (destructuring-bind ((keyword-name var) &optional initform svar)
                                       keyword-argument
                                     (declare (ignore var initform svar))
                                     `(!== (arg i) ,(convert keyword-name))))
                                 keyword-arguments))
                       (throw (+ "Unknown keyword argument " (property (arg i) "name"))))))))))))

(defun parse-lambda-list (ll)
  (let ((required (ll-required-arguments ll))
        (optional (ll-optional-arguments ll))
        (keyword  (ll-keyword-arguments  ll))
        (rest     (ll-rest-argument      ll)))
    (dolist (arg (append required optional keyword (ll-svars ll) (ensure-list rest)))
      (unless (symbolp arg)
        (error "~S is not a valid parameter name." arg)))
    (values required optional keyword rest (ll-allow-other-keys ll))))

;;; Process BODY for declarations and/or docstrings. Return as
;;; multiple values the BODY without docstrings or declarations, the
;;; list of declaration forms and the docstring.
(defun parse-body (body &key declarations docstring)
  (let ((value-declarations)
        (value-docstring)
        (end nil))

    (while (not end)
      (cond
        ;; Docstring
        ((and docstring
              (stringp (car body))
              (not (null (cdr body))))
         (when value-docstring
           (error "Duplicated docstring ~S" (car body)))
         (setq value-docstring (car body))
         (setq body (cdr body)))

        ;; Declaration
        ((and declarations
              (consp (car body))
              (eq (caar body) 'declare))
         (push (car body) value-declarations)
         (setq body (cdr body)))

        (t
         (setq end t))))

    (values body value-declarations value-docstring)))


(defun bind-this ()
  (let* ((gvar (gvarname 'this))
         (binding (make-binding :name 'this :type 'variable :value gvar)))
    (push-to-lexenv binding *environment* 'variable)
    `(var (,gvar |this|))))


(defun jsize-symbol (symbol prefix)
  (let ((str (string symbol)))
    (intern
     (with-output-to-string (out)
       (write-string (string prefix) out)
       (dotimes (i (length str))
         (let ((ch (char str i)))
           (when (char<= #\a (char-downcase ch) #\z)
             (write-char ch out))))))))

;;; Compile a lambda function with lambda list LL and body BODY. If
;;; NAME is given, it should be a constant string and it will become
;;; the name of the function. If BLOCK is non-NIL, a named block is
;;; created around the body. NOTE: No block (even anonymous) is
;;; created if BLOCK is NIL.
(defun compile-lambda (ll body &key name block)
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

        (lambda-name/docstring-wrapper name documentation
         `(named-function ,(jsize-symbol name 'jscl_user_)
                          (,@(mapcar (lambda (x)
                                       (translate-variable x))
                                     (append required-arguments optional-arguments)))
                          ;; Check number of arguments
                          ,(lambda-check-argument-count n-required-arguments
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
    (error 'type-error :datum var :expected-type 'symbol))
  (let ((b (lookup-in-lexenv var *environment* 'variable)))
    (cond
      ((and b
            (eq (binding-type b) 'variable)
            (not (member 'special (binding-declarations b)))
            (not (member 'constant (binding-declarations b))))
       `(= ,(binding-value b) ,(convert val)))
      ((and b (eq (binding-type b) 'macro))
       (convert `(setf ,var ,val)))
      (t
       (convert `(set ',var ,val))))))

(define-compilation setq (&rest pairs)
  (when (null pairs)
    (return-from setq (convert nil)))
  (with-collector (result)
    (while t
      (cond
        ((null pairs)
         (return))
        ((null (cdr pairs))
         (error "Odd pairs in SETQ"))
        (t
         (collect-result (setq-pair (car pairs) (cadr pairs)))
         (setq pairs (cddr pairs)))))
    `(progn ,@result)))

;;; Compilation of literals an object dumping

;;; BOOTSTRAP MAGIC: We record the macro definitions as lists during
;;; the bootstrap. Once everything is compiled, we want to dump the
;;; whole global environment to the output file to reproduce it in the
;;; run-time. However, the environment must contain expander functions
;;; rather than lists. We do not know how to dump function objects
;;; itself, so we mark the list definitions with this object and the
;;; compiler will be called when this object has to be dumped.
;;; Backquote/unquote does a similar magic, but this use is exclusive.
;;;
;;; Indeed, perhaps to compile the object other macros need to be
;;; evaluated. For this reason we define a valid macro-function for
;;; this symbol.
(defvar *magic-unquote-marker* (gensym "MAGIC-UNQUOTE"))

(defvar *literal-table*)
(defvar *literal-counter*)

(defun genlit ()
  (incf *literal-counter*)
  (make-symbol (concat "l" (integer-to-string *literal-counter*))))

;;; Bootstrap package name substitution
(defun dump-symbol (symbol)
  (let ((package (symbol-package symbol)))
    (cond
      ;; Uninterned symbol
      ((null package)
       `(new (call-internal |Symbol| ,(symbol-name symbol))))
      ;; Interned symbol in CL package
      ((eq package (find-package "COMMON-LISP"))
       `(call-internal |intern| ,(symbol-name symbol) "COMMON-LISP"))
      (t
       (let ((pkg-name (package-name package)))
         ;; KLUDGE: All symbols in the JSCL-XC/JSCL package are dumped
         ;; without an explicit package name. As we rename the package
         ;; later, it makes the intern() calls in JS more meaningful
         ;; this way.  The default intern is the JSCL/JSCL-XC package,
         ;; regardless of the name.
         (if (or (string= pkg-name "JSCL")
                 (string= pkg-name "JSCL-XC"))
             `(call-internal |intern| ,(symbol-name symbol))
             `(call-internal |intern| ,(symbol-name symbol) ,pkg-name)))))))

(defun dump-cons (cons)
  (let ((head (butlast cons))
        (tail (last cons)))
    `(call-internal |QIList|
                    ,@(mapcar (lambda (x) (literal x)) head)
                    ,(literal (car tail))
                    ,(literal (cdr tail)))))

(defun dump-array (array)
  (let ((elements (vector-to-list array))
        (var (gvarname 'array)))
    `(selfcall
      (var (,var ,(list-to-vector (mapcar #'literal elements))))
      ,(unless (vectorp array)
         `(= (get ,var "dimensions")
             ,(literal (array-dimensions array))))
      ,(when (array-has-fill-pointer-p array)
         `(= (get ,var "fillpointer") ,(fill-pointer array)))
      (return ,var))))

(defun dump-structure (struct)
  (let* ((name (structure-name struct))
         (dumper (intern (concat "DUMP-" (symbol-name name)) (symbol-package name))))
    `(object ,@(mapcan (lambda (kv) `(,(car kv) ,(literal (cdr kv))))
                       (funcall dumper struct)))))

(defun dump-string (string)
  `(call-internal |make_lisp_string| ,string))


;; The mode in which the compiler is processing the code.  Possible
;; values are `EVAL' and `COMPILE'.  Used to evaluate toplevel form
;; after compilation and special constant handling for EVAL.
(defvar *compiler-process-mode* nil)


(defun literal (sexp)
  (cond
    ((integerp sexp) sexp)
    ((floatp sexp) sexp)
    ((characterp sexp) (string sexp))
    ((eq sexp (jsbool t)) 'true)
    ((eq sexp (jsbool nil)) 'false)
    ((eq sexp (jsnull)) 'null)
    ((eq sexp (jsundefined)) 'undefined)
    ((eq (typeof sexp) (jsstring "string")) (clstring sexp))
    (t
     (let ((entry (gethash sexp *literal-table*)))
       (if entry
           (cdr entry)
           (let ((index *literal-counter*)
                 (jsvar (genlit)))
             (setf (gethash sexp *literal-table*) (cons index jsvar))
             (if (eq *compiler-process-mode* 'eval)
                 ;; If compiling for in-process evaluation, arrange to pass
                 ;; literals directly via data vector, instead of dumping
                 ;; them to reconstruction code
                 (toplevel-compilation
                  `(var (,jsvar (property |data| ,index))))
                 (let ((dumped
                         (cond
                           ((symbolp sexp) (dump-symbol sexp))
                           ((stringp sexp) (dump-string sexp))
                           ((consp sexp)
                            ;; BOOTSTRAP MAGIC: See the root file
                            ;; jscl.lisp and the function
                            ;; `dump-global-environment' for further
                            ;; information.
                            (if (eq (car sexp) *magic-unquote-marker*)
                                (convert (second sexp))
                                (dump-cons sexp)))
                           ((arrayp sexp) (dump-array sexp))
                           ((structure-p sexp) (dump-structure sexp))
                           (t (error "How should I dump `~S'?" sexp)))))
                   (toplevel-compilation `(var (,jsvar ,dumped)))
                   (when (keywordp sexp)
                     (toplevel-compilation `(= (get ,jsvar "value") ,jsvar)))))
             jsvar))))))


(define-compilation quote (sexp)
  (value1 (literal sexp)))

(define-compilation %while (pred &rest body)
  `(selfcall
    (while (!== ,(convert pred) ,(convert nil))
      ,(convert-block body))
    (return ,(convert nil))))

(define-compilation function (x)
  (cond
    ((and (listp x) (eq (car x) 'lambda))
     (compile-lambda (cadr x) (cddr x)))
    ((and (listp x) (eq (car x) 'named-lambda))
     (destructuring-bind (name ll &rest body) (cdr x)
       (compile-lambda ll body
                       :name (princ-to-string name)
                       :block name)))
    ((and (listp x) (eq (car x) 'setf))
     (convert `(symbol-set-function ',(cadr x))))
    ((symbolp x)
     (let ((b (lookup-in-lexenv x *environment* 'function)))
       ;; !PROCLAIM might create FUNCTION binding with NIL value
       (or (and b (binding-value b))
           (convert `(symbol-function ',x)))))
    (t (error "Illegal function ~a" x))))

(defun make-function-binding (fname)
  (make-binding :name fname :type 'function :value (gvarname fname)))

(defun compile-function-definition (list)
  (compile-lambda (car list) (cdr list)))

(defun translate-function (name)
  (let ((b (lookup-in-lexenv name *environment* 'function)))
    (and b (binding-value b))))

(define-compilation flet (definitions &rest body)
  (let* ((fnames (mapcar #'car definitions))
         (cfuncs (mapcar (lambda (def)
                           (compile-lambda (cadr def)
                                           `((block ,(car def)
                                               ,@(cddr def)))))
                         definitions))
         (*environment*
          (extend-lexenv (mapcar #'make-function-binding fnames)
                         *environment*
                         'function)))
    `(call (function ,(mapcar #'translate-function fnames)
                ,(convert-block body t t))
           ,@cfuncs)))

(define-compilation labels (definitions &rest body)
  (let* ((fnames (mapcar #'car definitions))
         (*environment*
          (extend-lexenv (mapcar #'make-function-binding fnames)
                         *environment*
                         'function)))
    `(selfcall
      ,@(mapcar (lambda (func)
                  `(var (,(translate-function (car func))
                          ,(compile-lambda (cadr func)
                                           `((block ,(car func) ,@(cddr func)))))))
                definitions)
      ,(convert-block body t t))))


(define-compilation progn (&rest body)
  ;; Note that this is only called for non toplevel forms.
  (convert-block body nil nil))

(define-compilation locally (&rest body)
  ;; Note that this is only called for non toplevel forms.
  (let ((*environment* (copy-lexenv *environment*)))
    (convert-block body nil t)))

(define-compilation macrolet (definitions &rest body)
  ;; Note that this is only called for non toplevel forms.
  (let ((*environment* (extend-macrolet-env definitions)))
    (convert-block body nil t)))

(define-compilation symbol-macrolet (macrobindings &rest body)
  ;; Note that this is only called for non toplevel forms.
  (let ((*environment* (extend-symbol-macrolet-env macrobindings)))
    `(progn ,(convert-block body nil t))))

(define-compilation eval-when (situations &rest body)
  ;; Note that this is only called for non toplevel forms.
  ;; So only :execute matters (CLHS 3.2.3.1)
  (if (or (find :execute situations)
          (find 'eval situations))
      (convert-block body nil t)
      (convert nil)))



(defun special-variable-p (x)
  (and (claimp x 'variable 'special) t))


(defun normalize-bindings (arg)
  (destructuring-bind (name &optional value)
      (ensure-list arg)
    (list name value)))


;;; Given a let-like description of bindings, return:
;;;
;;; 1. A list of lexical
;;; 2. A list of values to bind to the lexical variables
;;; 3. A alist of (special-variable . lexical-variable) to bind.
;;;
(defun process-bindings (bindings)
  (let ((bindings (mapcar #'normalize-bindings bindings))
        (special-bindings nil))
    (values
     ;; Lexical Variables
     (mapcar (lambda (var)
               (if (special-variable-p var)
                   (let ((lexvar (gensym)))
                     (push (cons var lexvar) special-bindings)
                     lexvar)
                   var))
             (mapcar #'car bindings))
     ;; Values
     (mapcar #'cadr bindings)
     ;; Binding special variables to lexical variables
     special-bindings)))


;;; Wrap CODE to restore the symbol values of the dynamic
;;; bindings. BINDINGS is a list of pairs of the form
;;; (SYMBOL . PLACE),  where PLACE is a Javascript variable
;;; name to initialize the symbol value and where to stored
;;; the old value.
(defun let-bind-dynamic-vars (special-bindings body)
  (if (null special-bindings)
      (convert-block body t t)
      (let ((special-variables (mapcar #'car special-bindings))
            (lexical-variables (mapcar #'cdr special-bindings)))
        `(return (call-internal
                  |bindSpecialBindings|
                  ,(list-to-vector (mapcar #'literal special-variables))
                  ,(list-to-vector (mapcar #'translate-variable lexical-variables))
                  (function () ,(convert-block body t t)))))))


(define-compilation let (bindings &rest body)
  (multiple-value-bind (lexical-variables values special-bindings)
      (process-bindings bindings)
    (let ((compiled-values (mapcar #'convert values))
          (*environment* (extend-local-env lexical-variables)))
      `(call (function ,(mapcar #'translate-variable lexical-variables)
                       ,(let-bind-dynamic-vars special-bindings body))
             ,@compiled-values))))


;; LET* compilation
;;
;; (let* ((*var1* value1))
;;        (*var2* value2))
;;  ...)
;;
;;     var sbindings = [];
;;
;;     try {
;;       // compute value1
;;       // bind to var1
;;       // add var1 to sbindings
;;
;;       // compute value2
;;       // bind to var2
;;       // add var2 to sbindings
;;
;;       // ...
;;
;;     } finally {
;;       // ...
;;       // restore bindings of sbindings
;;       // ...
;;     }
;;
(define-compilation let* (bindings &rest body)
  (let ((bindings (mapcar #'ensure-list bindings))
        (*environment* (copy-lexenv *environment*))
        (sbindings (gvarname '|bindings|))
        (prelude-target nil)
        (postlude-target nil))

    (dolist (binding bindings)
      (destructuring-bind (variable &optional value) binding
        (cond
          ((special-variable-p variable)
           ;; VALUE is evaluated before the variable is bound.
           (let ((s (convert `',variable))
                 (v (convert value))
                 (out (gvarname 'value)))
             (push `(progn
                      ;; Store the compiled value into the temporary
                      ;; JS variable OUT. Note that this code could
                      ;; throw, so the following code could not run at
                      ;; all.
                      (var (,out ,v))
                      ;; Create a new binding by pushing the symbol
                      ;; value to the stack, and scheduling the value
                      ;; to be restored (in the postlude). Note that
                      ;; this is done at runtime and not compile-time
                      ;; because we could have 5 variables to bind,
                      ;; but we could see an error for example in the
                      ;; 3rd one only. So we do not always restore all
                      ;; bindings necessarily.
                      (method-call (get ,s "stack") "push" (get ,s "value"))
                      (method-call ,sbindings "push" ,s)
                      ;; Assign the value to the recently created
                      ;; binding.
                      (= (get ,s "value") ,out))
                   prelude-target)))

          (t
           (let* ((jsvar (gvarname variable))
                  (binding (make-binding :name variable :type 'variable :value jsvar)))
             (push `(var (,jsvar ,(convert value)))
                   prelude-target)
             (push-to-lexenv binding *environment* 'variable))))))


    ;; The postlude will undo all the completed bindings from the
    ;; prelude.
    (push `(method-call ,sbindings "forEach"
                        (function (s)
                                  (= (get s "value")
                                     (method-call (get s "stack") "pop"))))
          postlude-target)

    (let ((body
           `(progn
              ,@(reverse prelude-target)
              ,(convert-block body t t))))

      (if (find-if #'special-variable-p bindings :key #'first)
          `(selfcall
            (var (,sbindings #()))
            (try ,body)
            (finally ,@(reverse postlude-target)))
          ;; If there is no special variables, we don't need try/catch
          `(selfcall ,body)))))


(define-compilation block (name &rest body)
  ;; We use Javascript exceptions to implement non local control
  ;; transfer. Exceptions has dynamic scoping, so we use a uniquely
  ;; generated object to identify the block. The instance of a empty
  ;; array is used to distinguish between nested dynamic Javascript
  ;; exceptions. See https://github.com/jscl-project/jscl/issues/64 for
  ;; further details.
  (let* ((idvar (gvarname name))
         (b (make-binding :name name :type 'block :value idvar)))
    (when *multiple-value-p*
      (push 'multiple-value (binding-declarations b)))
    (let* ((*environment* (extend-lexenv (list b) *environment* 'block))
           (cbody (convert-block body t)))
      (if (member 'used (binding-declarations b))
          `(selfcall
            (try
             (var (,idvar #()))
             ,cbody)
            (catch (cf)
              (if (and (instanceof cf (internal |BlockNLX|)) (== (get cf "id") ,idvar))
                  ,(if *multiple-value-p*
                       `(progn
                          (= (internal |_mv|) (get cf "mv"))
                          (return (get cf "value")))
                       `(return (get cf "value")))
                  (throw cf))))
          `(selfcall ,cbody)))))

(define-compilation return-from (name &optional value)
  (let* ((b (lookup-in-lexenv name *environment* 'block))
         (multiple-value-p (member 'multiple-value (binding-declarations b))))
    (when (null b)
      (error "Return from unknown block `~S'." (symbol-name name)))
    (push 'used (binding-declarations b))
    ;; The binding value is the name of a variable, whose value is the
    ;; unique identifier of the block as exception. We can't use the
    ;; variable name itself, because it could not to be unique, so we
    ;; capture it in a closure.
    (if multiple-value-p
        `(selfcall
          (var (_r (call-internal |withMV| (function () (return ,(convert value :multiple-value-p t))))))
          (throw (new (call-internal |BlockNLX|
                                     ,(binding-value b)
                                     (get _r "result")
                                     (get _r "mv")
                                     ,(symbol-name name)))))
        `(selfcall
          (throw (new (call-internal |BlockNLX|
                                     ,(binding-value b)
                                     ,(convert value)
                                     null
                                     ,(symbol-name name))))))))

(define-compilation catch (id &rest body)
  `(selfcall
    (var (id ,(convert id)))
    (try
     ,(convert-block body t))
    (catch (cf)
      (if (and (instanceof cf (internal |CatchNLX|)) (== (get cf "id") id))
          ,(if *multiple-value-p*
               `(progn
                  (= (internal |_mv|) (get cf "mv"))
                  (return (get cf "value")))
               `(return (get cf "value")))
          (throw cf)))))

(define-compilation throw (id value)
  `(selfcall
    (var (_r (call-internal |withMV| (function () (return ,(convert value :multiple-value-p t))))))
    (throw (new (call-internal |CatchNLX|
                               ,(convert id)
                               (get _r "result")
                               (get _r "mv"))))))


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
  ;; Ignore the tagbody if it does not contain any go-tag. We do this
  ;; because 1) it is easy and 2) many built-in forms expand to a
  ;; implicit tagbody, so we save some space.
  (unless (some #'go-tag-p body)
    (return-from tagbody (convert `(progn ,@body nil))))
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
      `(selfcall
        ;; TAGBODY branch to take
        (var (,branch ,initag))
        (var (,tbidx #()))
        (label tbloop
               (while true
                 (try
                  (switch ,branch
                          ,@(with-collect
                             (collect `(case ,initag))
                             (dolist (form (cdr body))
                               (if (go-tag-p form)
                                   (let ((b (lookup-in-lexenv form *environment* 'gotag)))
                                     (collect `(case ,(second (binding-value b)))))
                                   (collect (convert form)))))
                          default
                          (break tbloop)))
                 (catch (jump)
                   (if (and (instanceof jump (internal |TagNLX|)) (== (get jump "id") ,tbidx))
                       (= ,branch (get jump "label"))
                       (throw jump)))))
        (return ,(convert nil))))))

(define-compilation go (label)
  (let ((b (lookup-in-lexenv label *environment* 'gotag)))
    (when (null b)
      (error "Unknown tag `~S'" label))
    `(selfcall
      (throw (new (call-internal |TagNLX|
                                 ,(first (binding-value b))
                                 ,(second (binding-value b))))))))

(define-compilation unwind-protect (form &rest clean-up)
  (if *multiple-value-p*
      `(selfcall
        (var _r)
        (try
         (= _r (call-internal |withMV| (function () (return ,(convert form :multiple-value-p t))))))
        (finally
         ,(convert-block clean-up))
        (= (internal |_mv|) (get _r "mv"))
        (return (get _r "result")))
      `(selfcall
        (var (ret ,(convert nil)))
        (try
         (= ret ,(convert form)))
        (finally
         ,(convert-block clean-up))
        (return ret))))

(define-compilation multiple-value-call (func-form &rest forms)
  `(selfcall
    (var (func ,(convert func-form)))
    (var (args #()))
    (var _r)
    (progn
      ,@(with-collect
         (dolist (form forms)
           (collect `(= _r (call-internal |withMV| (function () (return ,(convert form :multiple-value-p t))))))
           (collect `(if (!== (get _r "mv") null)
                         (= args (method-call args "concat" (get _r "mv")))
                         (method-call args "push" (get _r "result")))))))
    (return (call-internal |mvcall| func (spread args)))))

(define-compilation multiple-value-prog1 (first-form &rest forms)
  (if *multiple-value-p*
      `(selfcall
        (var (_r (call-internal |withMV| (function () (return ,(convert first-form :multiple-value-p t))))))
        (progn ,@(mapcar #'convert forms))
        (= (internal |_mv|) (get _r "mv"))
        (return (get _r "result")))
      `(selfcall
        (var (result ,(convert first-form)))
        (progn ,@(mapcar #'convert forms))
        (return result))))

(define-compilation the (value-type form)
  (convert-tail form))

;;; Primitives

(defvar *builtins*
  (make-hash-table))

(defun !special-operator-p (name)
  (nth-value 1 (gethash name *compilations*)))
#+jscl-target
(fset 'special-operator-p #'!special-operator-p)


(defmacro define-raw-builtin (name args &body body)
  ;; Creates a new primitive function `name' with parameters args and
  ;; @body. The body can access to the local environment through the
  ;; variable *ENVIRONMENT*.
  `(setf (gethash ',name *builtins*)
         (lambda ,args
           (block ,name ,@body))))

(defmacro define-builtin (name args &body body)
  `(define-raw-builtin ,name ,args
     (let ,(mapcar (lambda (arg) `(,arg (convert ,arg))) args)
       ,@body)))

;;; VARIABLE-ARITY compiles variable arity operations. ARGS stands for
;;; a variable which holds a list of forms. It will compile them and
;;; store the result in some Javascript variables. BODY is evaluated
;;; with ARGS bound to the list of these variables to generate the
;;; code which performs the transformation on these variables.
(defun variable-arity-call (args function)
  (unless (consp args)
    (error "ARGS must be a non-empty list"))
  (let ((counter 0))
    ;; XXX: Add macro with-collectors
    (with-collector (fargs)
      (with-collector (prelude)
        (dolist (x args)
          (if (or (floatp x) (numberp x))
              (collect-fargs x)
              (let ((v (make-symbol (concat "x" (integer-to-string (incf counter))))))
                (collect-fargs v)
                (collect-prelude `(var (,v ,(convert x))))
                (collect-prelude `(if (!= (typeof ,v) "number")
                                      (call-internal "typeError" ,v ,(literal 'number)))))))
        `(selfcall
          (progn ,@prelude)
          ,(funcall function fargs))))))


(defmacro variable-arity (args &body body)
  (unless (symbolp args)
    (error 'type-error :datum args :expected-type 'symbol))
  `(variable-arity-call ,args (lambda (,args) `(return  ,,@body))))

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

(define-raw-builtin / (x &rest others)
  (let ((args (cons x others)))
    (variable-arity args
      (if (null others)
          `(call-internal |handled_division| 1 ,(car args))
          (reduce (lambda (x y) `(call-internal |handled_division| ,x ,y))
                  args)))))

(define-builtin rem0 (x y)
  `(selfcall
    (if (== ,y 0)
        (throw "Division by zero"))
    (return (% ,x ,y))))

(define-builtin %ash-left (x y)
  `(call-internal |Bitwise_ash_L| ,x ,y))

(define-builtin %ash-right (x y)
  `(call-internal |Bitwise_ash_R| ,x ,y))

(define-builtin %lognot (x)
  `(call-internal |Bitwise_not| ,x ))

(define-builtin %logand (x y)
  `(call-internal |Bitwise_and| ,x ,y))

(define-builtin %logxor (x y)
  `(call-internal |Bitwise_xor| ,x ,y))

(define-builtin %logior (x y)
  `(call-internal |Bitwise_ior| ,x ,y))

(defun comparison-conjuntion (vars op)
  (cond
    ((null (cdr vars))
     'true)
    ((null (cddr vars))
     `(,op ,(car vars) ,(cadr vars)))
    (t
     `(and (,op ,(car vars) ,(cadr vars))
           ,(comparison-conjuntion (cdr vars) op)))))

(defmacro define-builtin-comparison (op sym)
  `(define-raw-builtin ,op (x &rest args)
     (let ((args (cons x args)))
       (variable-arity args
         (convert-to-bool (comparison-conjuntion args ',sym))))))

(define-builtin-comparison > >)
(define-builtin-comparison < <)
(define-builtin-comparison >= >=)
(define-builtin-comparison <= <=)
(define-builtin-comparison = ==)

(define-builtin numberp (x)
  (convert-to-bool `(== (typeof ,x) "number")))

(define-builtin %integer-p (x)
  (convert-to-bool `(method-call |Number| "isInteger" ,x)))

(define-builtin %truncate (x)
`(method-call |Math| "trunc" ,x))

(define-builtin %floor (x)
  `(method-call |Math| "floor" ,x))

(define-builtin %ceiling (x)
  `(method-call |Math| "ceil" ,x))

(define-builtin expt (x y)
  `(method-call |Math| "pow" ,x ,y))

(define-builtin sqrt (x)
  `(method-call |Math| "sqrt" ,x))

(define-builtin float-to-string (x)
  `(call-internal |make_lisp_string| (method-call ,x |toString|)))

(define-builtin cons (x y)
  `(new (call-internal |Cons| ,x ,y)))

(define-builtin consp (x)
  (convert-to-bool `(instanceof ,x (internal |Cons|))))

(define-builtin car (x)
  `(get ,x "$$jscl_car"))

(define-builtin cdr (x)
  `(get ,x "$$jscl_cdr"))

(define-builtin rplaca (x new)
  `(selfcall
     (var (tmp ,x))
     (= (get tmp "$$jscl_car") ,new)
     (return tmp)))

(define-builtin rplacd (x new)
  `(selfcall
     (var (tmp ,x))
     (= (get tmp "$$jscl_cdr") ,new)
     (return tmp)))

(define-builtin symbolp (x)
  (convert-to-bool `(instanceof ,x (internal |Symbol|))))

(define-builtin make-symbol (name)
  `(new (call-internal |Symbol| (call-internal |xstring| ,name))))

(define-compilation symbol-name (x)
  (let ((sym (convert x)))
    `(call-internal |make_lisp_string| (get ,sym "name"))))

(define-builtin set (symbol value)
  `(= (get ,symbol "value") ,value))

(define-raw-builtin fset (symbol value)
  (multiple-value-bind (sym constantp) (constant-value symbol)
    (when constantp
      (fn-info sym :defined t)))
  `(= (get ,(convert symbol) "fvalue") ,(convert value)))

(define-raw-builtin setfset (symbol value)
  (multiple-value-bind (sym constantp) (constant-value symbol)
    (when constantp
      (fn-info `(setf ,sym) :defined t)))
  `(= (get ,(convert symbol) "setfvalue") ,(convert value)))

(define-builtin boundp (x)
  (convert-to-bool `(!== (get ,x "value") (internal |UNBOUND|))))

(define-builtin %fboundp (x)
  (convert-to-bool `(call-internal |fboundp| ,x)))

(define-builtin %setfboundp (x)
  (convert-to-bool `(call-internal |setfboundp| ,x)))

(define-builtin symbol-value (x)
  `(call-internal |symbolValue| ,x))

(define-builtin symbol-function (x)
  `(call-internal |symbolFunction| ,x))

(define-builtin symbol-set-function (x)
  `(call-internal |symbolSetFunction| ,x))

(define-builtin lambda-code (x)
  `(call-internal |make_lisp_string| (method-call ,x "toString")))

(define-builtin eq (x y)
  (convert-to-bool `(=== ,x ,y)))

(define-builtin char-code (x)
  `(call-internal |char_to_codepoint| ,x))

(define-builtin code-char (x)
  `(call-internal |char_from_codepoint| ,x))

(define-builtin characterp (x)
  `(selfcall
    (var (x ,x))
    (return ,(convert-to-bool
              `(and (== (typeof x) "string")
                    (or (== (get x "length") 1)
                        (== (get x "length") 2)))))))

(define-builtin char-upcase (x)
  `(call-internal |safe_char_upcase| ,x))

(define-builtin char-downcase (x)
  `(call-internal |safe_char_downcase| ,x))

(define-builtin stringp (x)
  `(selfcall
    (var (x ,x))
    (return ,(convert-to-bool
              `(and (and (=== (typeof x) "object")
                         (!== x null)
                         (in "length" x))
                    (== (get x "stringp") 1))))))

(define-raw-builtin funcall (func &rest args)
  (let ((compiled-args (mapcar #'convert args)))
    (cond ((and (consp func) (eq (car func) 'function))
           (let ((fn-expr (convert func)))
             (if *multiple-value-p*
                 `(call-internal |mvcall| ,fn-expr ,@compiled-args)
                 `(call ,fn-expr ,@compiled-args))))
          (t
           (let ((dispatch `(if (=== (typeof f) "function")
                                f
                                (get f "fvalue"))))
             `(selfcall
               (var (f ,(convert func)))
               (return ,(if *multiple-value-p*
                            `(call-internal |mvcall| ,dispatch ,@compiled-args)
                            `(call ,dispatch ,@compiled-args)))))))))

(define-raw-builtin apply (func &rest args)
  (if (null args)
      (convert func)
      (let ((args (butlast args))
            (last (car (last args))))
        `(selfcall
          (var (f ,(convert func)))
          (var (args ,(list-to-vector (mapcar #'convert args))))
          (var (tail ,(convert last)))
          (while (!= tail ,(convert nil))
            (method-call args "push" (get tail "$$jscl_car"))
            (= tail (get tail "$$jscl_cdr")))
          (return ,(let ((resolved '(if (=== (typeof f) "function") f (get f "fvalue"))))
                     (if *multiple-value-p*
                         `(call-internal |mvcall| ,resolved (spread args))
                         `(method-call ,resolved "apply" this args))))))))

(define-builtin js-eval (string data)
  (if *multiple-value-p*
      `(progn
         (= (internal |_mv|) null)
         (call-internal |globalEval| (call-internal |xstring| ,string) ,data))
      `(call-internal |globalEval| (call-internal |xstring| ,string) ,data)))

(define-builtin %throw (string)
  `(selfcall (throw ,string)))

(define-builtin functionp (x)
  (convert-to-bool `(=== (typeof ,x) "function")))

(define-builtin /debug (x)
  `(method-call |console| "log" (call-internal |xstring| ,x)))

(define-builtin /debug! (x)
  `(method-call |console| "dir" ,x))

(define-raw-builtin /log (x &rest y)
  `(selfcall
    (call (get |console| "log")
          ,x
          ,@(mapcar #'convert y))
    (return ,(convert nil))))

;;; Storage vectors. They are used to implement arrays and (in the
;;; future) structures.

(define-builtin storage-vector-p (x)
  `(selfcall
    (var (x ,x))
    (return ,(convert-to-bool
              `(and (=== (typeof x) "object")
                    (!== x null)
                    (in "length" x))))))

(define-builtin make-storage-vector (n)
  `(selfcall
    (var (r #()))
    (= (get r "length") ,n)
    (return r)))

(define-builtin storage-vector-size (x)
  `(get ,x "length"))

(define-builtin resize-storage-vector (vector new-size)
  `(= (get ,vector "length") ,new-size))

(define-builtin storage-vector-ref (vector n)
  `(selfcall
    (var (x ,vector) (i ,n) (j (get x "length")))
    (if (or (< i 0) (>= i j))
        (call-internal "error" ,(literal "ref vector out of range")))
    (return (property x i))))

(define-builtin storage-vector-ref! (vector n)
  `(property ,vector ,n))

(define-builtin storage-vector-set (vector n value)
  `(selfcall
    (var (x ,vector) (i ,n) (j (get x "length")))
    (if (or (< i 0) (>= i (get x "length")))
        (call-internal "error" ,(literal "set vector out of range")))
    (return (= (property x i) ,value))))

(define-builtin storage-vector-set! (vector n value)
  `(= (property ,vector ,n) ,value))

(define-builtin storage-vector-fill (vector value)
  `(method-call ,vector "fill" ,value))

(define-builtin concatenate-storage-vector (sv1 sv2)
  `(selfcall
     (var (sv1 ,sv1))
     (var (r (method-call sv1 "concat" ,sv2)))
     (= (get r "stringp") (get sv1 "stringp"))
     (return r)))

(define-builtin get-internal-real-time ()
  `(method-call (new (call |Date|)) "getTime"))

(define-builtin values-array (array)
  (if *multiple-value-p*
      `(method-call |values| "apply" null ,array)
      `(call-internal |pv| (property ,array 0))))

(define-raw-builtin values (&rest args)
  (if *multiple-value-p*
      `(call |values| ,@(mapcar #'convert args))
      (convert (car args))))

;;; Javascript FFI
;;;
;;; This implements the primitives necessary to bootstrap the ffi system.
;;; Check the ffi.lisp file and the JS compatibility layer.
;;;

(define-builtin instanceof (x class)
  (convert-to-bool `(instanceof ,x ,class)))

(define-builtin typeof (x)
  `(typeof ,x))

(define-raw-builtin object (&rest plist)
  `(object
    ,@(with-collect
        (do ((tail plist (cddr tail)))
            ((null tail))
          (collect (car tail))
          (collect (convert (cadr tail)))))))

(define-raw-builtin new (constructor &rest args)
  `(call-internal |newInstance| ,(convert constructor) ,@(mapcar #'convert args)))

(define-raw-builtin jsstring (x)
  (multiple-value-bind (value constantp) (constant-value x *environment*)
    (if constantp
        (clstring value)
        `(call-internal |xstring| ,(convert x)))))

(define-raw-builtin jsbool (x)
  (multiple-value-bind (value constantp) (constant-value x *environment*)
    (if constantp
        (if value 'true 'false)
        `(if (!== ,(convert x) ,(convert nil))
             true
             false))))

(define-builtin jsnull ()
  'null)

(define-builtin jsundefined ()
  'undefined)

(defun convert-property-key (form)
  (multiple-value-bind (value constantp) (constant-value form *environment*)
    (if constantp
      value
      ;; xstring handles strings, numbers, and Lisp strings at runtime
      `(call-internal |xstring| ,(convert form)))))

(define-raw-builtin oget (object key &rest keys)
  (let ((result (convert object)))
    (dolist (k (cons key keys))
      (setq result `(property ,result ,(convert-property-key k))))
    result))

(define-raw-builtin oget? (object key &rest keys)
  (let ((result (convert object)))
    (dolist (k (cons key keys))
      (setq result `(property? ,result ,(convert-property-key k))))
    result))

(define-raw-builtin oset (value object key &rest keys)
  (let ((result (convert object)))
    (dolist (k (cons key keys))
      (setq result `(property ,result ,(convert-property-key k))))
    `(= ,result ,(convert value))))

(define-builtin ?? (x y)
  `(?? ,x ,y))

(define-builtin %%nlx-p (x)
  (convert-to-bool `(call-internal |isNLX| ,x)))

(define-builtin %%throw (x)
  `(selfcall (throw ,x)))

(define-builtin clstring% (x) `(call-internal |make_lisp_string| ,x))


(define-raw-builtin in (key object)
  (convert-to-bool `(in ,(convert-property-key key) ,(convert object))))

(define-raw-builtin delete-property (key object)
  `(selfcall
    (delete (property ,(convert object) ,(convert-property-key key)))))

(define-builtin map-for-in (function object)
  `(selfcall
    (var (f ,function)
         (g (if (=== (typeof f) "function") f (get f "fvalue")))
         (o ,object)
         key)
    (for-in (key o)
            (call g (property o key)))
    (return ,(convert nil))))

(define-compilation %js-vref (var)
  (make-symbol var))

(define-compilation %js-vset (var val)
  `(= ,(make-symbol var) ,(convert val)))

(define-setf-expander %js-vref (var)
  (let ((new-value (gensym)))
    (unless (stringp var)
      (error 'type-error :datum var :expected-type 'string))
    (values nil
            (list var)
            (list new-value)
            `(%js-vset ,var ,new-value)
            `(%js-vref ,var))))


;;; Access a function defined in the internals runtime object.
(define-compilation %js-internal (name)
  `(internal ,name))


;; Catch any Javascript exception. Note that because all non-local
;; exit are based on try-catch-finally, it will also catch them. We
;; could provide a JS function to detect it, so the user could rethrow
;; the error.
;;
;; (%js-try
;;  (progn
;;    )
;;  (catch (err)
;;    )
;;  (finally
;;   ))
;;
(define-compilation %js-try (form &optional catch-form finally-form)
  (let ((catch-compilation
         (and catch-form
              (destructuring-bind (catch (var) &body body) catch-form
                (unless (eq catch 'catch)
                  (error "Bad CATCH clausule `~S'." catch-form))
                (let* ((*environment* (extend-local-env (list var)))
                       (tvar (translate-variable var)))
                  `(catch (,tvar)
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



(defvar *macroexpander-cache*
  (make-hash-table :test #'eq))

(defun !macro-function (symbol &optional (namespace 'function))
  (unless (symbolp symbol)
    (error 'type-error :datum symbol :expected-type 'symbol))
  (let ((b (lookup-in-lexenv symbol *environment* namespace)))
    (if (and b (eq (binding-type b) 'macro))
        (let ((expander (binding-value b)))
          ;; During dump-global-environment, bindings get wrapped with
          ;; *magic-unquote-marker*. Unwrap it here so we can eval the
          ;; actual expander form.
          (when (and (consp expander)
                     (eq (car expander) *magic-unquote-marker*))
            (setq expander (second expander)))
          (cond
            ((gethash b *macroexpander-cache*)
             (setq expander (gethash b *macroexpander-cache*)))
	    ;; The list representation is used during bootstrap
	    ;; because we can dump it. Use a cache to avoid
	    ;; re-compiling, but preserve the list in the binding
	    ;; during bootstrap (when :jscl-target feature is active).
            ((listp expander)
             (let ((compiled (eval expander)))
               (setf (gethash b *macroexpander-cache*) compiled)
               (setq expander compiled))))
          expander)
        nil)))

#+jscl-target
(defun macro-function (symbol &optional environment)
  (let ((*environment* (or environment *global-environment*)))
    (!macro-function symbol 'function)))

#+jscl-target
(defun (setf macro-function) (new-function symbol &optional environment)
  (declare (ignore environment))
  (%compile-defmacro symbol new-function))

#+jscl-target
(defun compiler-macro-function (symbol &optional environment)
  (let ((*environment* (or environment *global-environment*)))
    (!macro-function symbol 'compiler-macro)))

(defun !macroexpand-1 (form &optional env)
  (let ((*environment* (or env *global-environment*)))
    (cond
      ((symbolp form)
       (let ((b (lookup-in-lexenv form *environment* 'variable)))
         (if (and b (eq (binding-type b) 'macro))
             (values (binding-value b) t)
             (values form nil))))
      ((and (consp form) (symbolp (car form)))
       (let ((macrofun (!macro-function (car form))))
         (if macrofun
             (values (funcall macrofun form *environment*) t)
             (values form nil))))
      (t
       (values form nil)))))

#+jscl-target
(fset 'macroexpand-1 #'!macroexpand-1)

(defun !macroexpand (form &optional env)
  (let ((continue t) expanded-p)
    (while continue
      (multiple-value-setq (form continue) (!macroexpand-1 form env))
      (when continue
        (setq expanded-p t)))
    (values form expanded-p)))

#+jscl-target
(fset 'macroexpand #'!macroexpand)

(defun compiler-macroexpand (form)
  (while t
    (let ((expander (and (consp form) (symbolp (car form))
                         (!macro-function (car form) 'compiler-macro))))
      (unless expander (return))
      (let ((new-form (funcall expander form *environment*)))
        (when (eq new-form form)
          (return))
        (setq form new-form))))
  form)


(defun compile-funcall (function args)
  (let* ((arglist (mapcar #'convert args)))
    (unless (or (symbolp function)
                (and (consp function)
                     (member (car function) '(lambda oget))))
      (error "Bad function designator `~S'" function))
    (cond
      ((translate-function function)
       (if *multiple-value-p*
           `(call-internal |mvcall| ,(translate-function function) ,@arglist)
           `(call ,(translate-function function) ,@arglist)))
      ((symbolp function)
       (fn-info function :called t)
       ;; This code will work even if the symbol-function is unbound,
       ;; as it is represented by a function that throws the expected
       ;; error.
       (let ((sym (convert `',function)))
         (if *multiple-value-p*
             `(call-internal |mvcall| (get ,sym "fvalue") ,@arglist)
             `(method-call ,sym "fvalue" ,@arglist))))
      ((and (consp function) (eq (car function) 'lambda))
       (let ((fn-expr (convert `(function ,function))))
         (if *multiple-value-p*
             `(call-internal |mvcall| ,fn-expr ,@arglist)
             `(call ,fn-expr ,@arglist))))
      ((and (consp function) (member (car function) '(oget)))
       `(call ,(reduce (lambda (obj p)
                         `(property ,obj ,p))
                       (mapcar #'convert-property-key (cddr function))
                       :initial-value (convert (cadr function)))
              ,@(mapcar #'convert args)))
      (t
       (error "Bad function descriptor")))))


(defun convert-1 (sexp &optional multiple-value-p (target :expression))
  (multiple-value-bind (sexp expandedp)
      (!macroexpand-1 (compiler-macroexpand sexp) *environment*)
    (when expandedp
      (return-from convert-1 (convert-1 sexp multiple-value-p target)))
    ;; The expression has been macroexpanded. Now compile it!
    (let ((*multiple-value-p* multiple-value-p)
          (*target* target))
      (cond
        ((symbolp sexp)
         (let ((b (lookup-in-lexenv sexp *environment* 'variable)))
           (values
            (cond
              ((and b (not (member 'special (binding-declarations b))))
               (value1 (binding-value b)))
              ((or (keywordp sexp)
                   (and b (member 'constant (binding-declarations b))))
               (value1 `(get ,(convert `',sexp) "value")))
              (t
               (convert `(symbol-value ',sexp))))
            :expression)))
        ((listp sexp)
         (let* ((name (car sexp))
                (args (cdr sexp)))
           (cond
             ;; Special forms
             ((gethash name *compilations*)
              (let ((comp (gethash name *compilations*)))
                ;; Migrated handlers return (values ast :block).
                ;; Legacy handlers return just ast; kind defaults to nil.
                (multiple-value-bind (ast kind) (apply comp args)
                  (values ast (or kind :expression)))))
             ;; Built-in functions
             ((and (gethash name *builtins*)
                   (not (claimp name 'function 'notinline)))
              (values (apply (gethash name *builtins*) args) :expression))
             (t
              (values (compile-funcall name args) :expression)))))
        (t
         (values (value1 (literal sexp)) :expression))))))

;;; Compile SEXP to JavaScript AST.
;;;
;;; MULTIPLE-VALUE-P controls whether the compiled code must preserve
;;; multiple values (see *multiple-value-p*).  Defaults to NIL, meaning
;;; only the primary value matters.
;;;
;;; TARGET controls how the result is delivered (see *target*).
;;; Possible values:
;;;
;;;   :expression  -- return a JS expression (the default).  Handlers
;;;                   never see this target; `convert' translates it
;;;                   to (:assign tmp) before calling `convert-1'.
;;;   :return      -- emit a return statement
;;;   :discard     -- the value is unused (side effects only)
;;;   (:assign V)  -- emit an assignment to the JS variable V
;;;
;;; Most internal call sites use plain (convert subform) for subforms
;;; whose value is consumed as an expression.  Use `convert-tail' for
;;; subforms in tail position, and `convert-for-value' when you need
;;; to separate preceding statements from a value expression.
(defun convert (sexp &key multiple-value-p (target :expression))
  (if (eq target :expression)
      ;; Expression target: we call convert-1 with (:assign tmp) so
      ;; that handlers never see :expression as the target.
      ;;
      ;; We use convert-1 (not convert) deliberately: convert would
      ;; always produce an assignment statement, forcing every
      ;; expression into a selfcall IIFE — even simple ones like
      ;; variable references or (car x).  By calling convert-1, we
      ;; can inspect the kind: legacy handlers ignore the target and
      ;; return :expression, letting us use the expression directly
      ;; without an IIFE.  Migrated handlers honor the (:assign tmp)
      ;; target and return :block, which we wrap in a selfcall.
      (let ((tmp (gvarname 'tmp)))
        (multiple-value-bind (ast kind)
            (convert-1 sexp multiple-value-p `(:assign ,tmp))
          (ecase kind
            (:expression ast)
            (:block      `(selfcall (var ,tmp) ,ast (return ,tmp))))))
      ;; Statement targets: pass through directly.
      (multiple-value-bind (ast kind) (convert-1 sexp multiple-value-p target)
        (ecase kind
          (:expression
           (ecase (if (consp target) :assign target)
             (:return   `(return ,ast))
             (:assign   `(= ,(cadr target) ,ast))
             (:discard  ast)))
          (:block ast)))))

;;; Like `convert', but preserves the current `*multiple-value-p*'.
;;; Use this when compiling a subform that is in tail position with
;;; respect to the enclosing form (e.g. branches of IF, last form
;;; of PROGN).
(defun convert-tail (sexp &key (target :expression))
  (convert sexp :multiple-value-p *multiple-value-p* :target target))

;;; Compile SEXP and return (values preceding-stmts js-expression).
;;; If the handler produces an expression, preceding-stmts is NIL.
;;; If it produces a block, a temporary variable is introduced and
;;; the block assigns to it.
(defun convert-for-value (sexp &optional multiple-value-p)
  (let ((tmp (gvarname 'tmp)))
    (multiple-value-bind (ast kind)
        (convert-1 sexp multiple-value-p `(:assign ,tmp))
      (if (eq kind :expression)
          (values nil ast)
          (values `(progn (var ,tmp) ,ast) tmp)))))


(defun convert-block (sexps &optional return-last-p decls-allowed-p)
  (multiple-value-bind (sexps decls)
      (parse-body sexps :declarations decls-allowed-p)
    (declare (ignore decls))
    (if return-last-p
        `(progn
           ,@(mapcar (lambda (form) (convert form :target :discard))
                     (butlast sexps))
           ,(convert-tail (car (last sexps)) :target :return))
        `(progn
           ,@(mapcar #'convert (butlast sexps))
           ,@(list (convert-tail (car (last sexps))))))))


;;; Process a list of toplevel forms. The last form inherits LAST-P;
;;; all others are processed with LAST-P = NIL.
(defun process-toplevel-body (forms fn last-p)
  (when forms
    (dolist (form (butlast forms))
      (process-toplevel-form form fn nil))
    (process-toplevel-form (car (last forms)) fn last-p)))

;;; Recursively process FORM as a toplevel form. Macroexpands FORM,
;;; then handles the toplevel-preserving special forms (progn, locally,
;;; macrolet, symbol-macrolet, eval-when) per CLHS 3.2.3.1.
;;;
;;; For any leaf (non-toplevel-preserving) form, calls
;;;   (FUNCALL FN FORM LAST-P)
;;; where LAST-P indicates whether FORM is in the tail position of
;;; the outermost toplevel expression.
;;;
;;; FN is called for side effects; return value is ignored.
(defun process-toplevel-form (form fn &optional last-p)
  (multiple-value-bind (expanded expandedp) (!macroexpand-1 form *environment*)
    (when expandedp
      (return-from process-toplevel-form
        (process-toplevel-form expanded fn last-p))))

  (when (atom form)
    (return-from process-toplevel-form
      (funcall fn form last-p)))

  (destructuring-bind (op &rest args) form
    (case op
      (progn
        (process-toplevel-body args fn last-p))

      (locally
        (let ((*environment* (copy-lexenv *environment*)))
          (process-toplevel-body args fn last-p)))

      (macrolet
        (let ((*environment* (extend-macrolet-env (car args))))
          (process-toplevel-body (cdr args) fn last-p)))

      (symbol-macrolet
        (let ((*environment* (extend-symbol-macrolet-env (car args))))
          (process-toplevel-body (cdr args) fn last-p)))

      (eval-when
        (destructuring-bind (situations &body body) args
          (cond
            ;; Toplevel form compiled by compile-file (cross-compilation).
            ((eq *compiler-process-mode* 'compile)
             ;; If the situation `compile-toplevel' is given. The form is
             ;; evaluated at compilation-time.
             (when (or (find :compile-toplevel situations)
                       (find 'compile situations))
               (eval (cons 'progn body)))

             ;; `load-toplevel' is given, then just compile the subforms as usual.
             (when (or (find :load-toplevel situations)
                       (find 'load situations))
               (process-toplevel-body body fn last-p)))

            ;; EVAL or not toplevel forms only consider :execute
            ((or (find :execute situations)
                 (find 'eval situations))
             (process-toplevel-body body fn last-p))

            (t
             (process-toplevel-body nil fn last-p)))))

      (t
        (funcall fn form last-p)))))


#+jscl-target
(defvar *compile-print* nil)
#+jscl-target
(defvar *compile-verbose* nil)

(defun truncate-string (string &optional (width 60))
  (let ((n (or (position #\newline string)
               (min width (length string)))))
    (subseq string 0 n)))

(defmacro with-compilation-environment (&body body)
  `(let ((*literal-table* (make-hash-table :test #'eql))
         (*variable-counter* 0)
         (*gensym-counter* 0)
         (*literal-counter* 0))
     ,@body))

;;;
;;; The entrypoint for compiling from COMPILE-FILE
;;;
(defun compile-toplevel (sexp &optional multiple-value-p return-p)
  (when *compile-print*
    (let ((form-string (prin1-to-string sexp)))
      (simple-format *standard-output* "; processing ~a...~%" (truncate-string form-string))))
  (%with-compilation-unit ()
    (let ((*compiler-process-mode* 'compile))
     (with-output-to-string (*js-output*)
       (process-toplevel-form sexp
                              (lambda (form last-p)
                                (let* ((*toplevel-compilations* nil)
                                       (code (if (and last-p return-p)
                                                 (convert form :target :return
                                                               :multiple-value-p (and last-p multiple-value-p))
                                                 (convert form :multiple-value-p
                                                               (and last-p multiple-value-p))))
                                       (ast `(progn
                                               ,@(get-toplevel-compilations)
                                               ,code)))
                                  (js ast)))
                              t)))))

(defun dump-global-environment (stream)
  "Dump the global environment to STREAM.

Macro bindings are wrapped with *magic-unquote-marker* so the compiler
will compile them instead of quoting them. See the literal function in
compiler.lisp for details."
  (flet ((emit (form)
           (write-string (compile-toplevel form) stream))
         (wrap-macros (bindings)
           ;; Wrap macro binding values with the magic marker
           (dolist (b bindings)
             (when (eq (binding-type b) 'macro)
               (setf (binding-value b) `(,*magic-unquote-marker* ,(binding-value b)))))))
    ;; We assume that environments have a friendly list representation
    ;; for the compiler and it can be dumped.
    ;; Wrap both regular macros and compiler-macros
    (wrap-macros (lexenv-function *environment*))
    (wrap-macros (lexenv-compiler-macro *environment*))
    (emit
     `(progn
        (setq *environment* ',*environment*)
        (setq *global-environment* *environment*)))
    ;; Set some counter variable properly, so user compiled code will
    ;; not collide with the compiler itself.
    (emit
     `(progn
        (setq *variable-counter* ,*variable-counter*)
        (setq *gensym-counter* ,*gensym-counter*)))
    (emit `(setq *literal-counter* ,*literal-counter*))))

;;;
;;; The entrypoint for EVAL
;;;
(defun eval-toplevel (sexp)
  (let ((*compiler-process-mode* 'eval)
        (result-mv nil))
    ;; Compile and execute each form immediately (CLHS 3.2.3.1)
    (process-toplevel-form sexp
      (lambda (form last-p)
        (with-compilation-environment
          (%with-compilation-unit ()
            (let* ((*toplevel-compilations* nil)
                   (code (convert form :target :return
                                      :multiple-value-p last-p))
                   (ast `(progn
                           ,@(get-toplevel-compilations)
                           ,code))
                   (jscode (with-output-to-string (*js-output*)
                             (js ast)))
                   (literals (let ((vec (make-array *literal-counter*)))
                              (maphash (lambda (sexp entry)
                                         (setf (aref vec (car entry)) sexp))
                                       *literal-table*)
                              vec)))
              #+jscl-target (setq result-mv
                                  (multiple-value-list (js-eval jscode literals)))
              #-jscl-target (error "eval-toplevel: cannot execute in cross-compiler")))))
      t)
    (values-list result-mv)))

#+jscl-target (fset 'eval #'eval-toplevel)
