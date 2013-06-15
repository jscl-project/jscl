;;; compiler.lisp ---

;; copyright (C) 2012, 2013 David Vazquez
;; Copyright (C) 2012 Raimon Grau

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

;;; Translate the Lisp code to Javascript. It will compile the special
;;; forms. Some primitive functions are compiled as special forms
;;; too. The respective real functions are defined in the target (see
;;; the beginning of this file) as well as some primitive functions.

(defun code (&rest args)
  (mapconcat (lambda (arg)
               (cond
                 ((null arg) "")
                 ((integerp arg) (integer-to-string arg))
                 ((floatp arg) (float-to-string arg))
                 ((stringp arg) arg)
                 (t (error "Unknown argument `~S'." arg))))
             args))

;;; Wrap X with a Javascript code to convert the result from
;;; Javascript generalized booleans to T or NIL.
(defun js!bool (x)
  (code "(" x "?" (ls-compile t) ": " (ls-compile nil) ")"))

;;; Concatenate the arguments and wrap them with a self-calling
;;; Javascript anonymous function. It is used to make some Javascript
;;; statements valid expressions and provide a private scope as well.
;;; It could be defined as function, but we could do some
;;; preprocessing in the future.
(defmacro js!selfcall (&body body)
  `(code "(function(){" *newline* (indent ,@body) "})()"))

;;; Like CODE, but prefix each line with four spaces. Two versions
;;; of this function are available, because the Ecmalisp version is
;;; very slow and bootstraping was annoying.

#+jscl
(defun indent (&rest string)
  (let ((input (apply #'code string)))
    (let ((output "")
          (index 0)
          (size (length input)))
      (when (plusp (length input)) (concatf output "    "))
      (while (< index size)
        (let ((str
               (if (and (char= (char input index) #\newline)
                        (< index (1- size))
                        (not (char= (char input (1+ index)) #\newline)))
                   (concat (string #\newline) "    ")
                   (string (char input index)))))
          (concatf output str))
        (incf index))
      output)))

#-jscl
(defun indent (&rest string)
  (with-output-to-string (*standard-output*)
    (with-input-from-string (input (apply #'code string))
      (loop
         for line = (read-line input nil)
         while line
         do (write-string "    ")
         do (write-line line)))))


;;; A Form can return a multiple values object calling VALUES, like
;;; values(arg1, arg2, ...). It will work in any context, as well as
;;; returning an individual object. However, if the special variable
;;; `*multiple-value-p*' is NIL, is granted that only the primary
;;; value will be used, so we can optimize to avoid the VALUES
;;; function call.
(defvar *multiple-value-p* nil)

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
  gotag)

(defun lookup-in-lexenv (name lexenv namespace)
  (find name (ecase namespace
                (variable (lexenv-variable lexenv))
                (function (lexenv-function lexenv))
                (block    (lexenv-block    lexenv))
                (gotag    (lexenv-gotag    lexenv)))
        :key #'binding-name))

(defun push-to-lexenv (binding lexenv namespace)
  (ecase namespace
    (variable (push binding (lexenv-variable lexenv)))
    (function (push binding (lexenv-function lexenv)))
    (block    (push binding (lexenv-block    lexenv)))
    (gotag    (push binding (lexenv-gotag    lexenv)))))

(defun extend-lexenv (bindings lexenv namespace)
  (let ((env (copy-lexenv lexenv)))
    (dolist (binding (reverse bindings) env)
      (push-to-lexenv binding env namespace))))


(defvar *environment* (make-lexenv))

(defvar *variable-counter* 0)

(defun gvarname (symbol)
  (declare (ignore symbol))
  (code "v" (incf *variable-counter*)))

(defun translate-variable (symbol)
  (awhen (lookup-in-lexenv symbol *environment* 'variable)
    (binding-value it)))

(defun extend-local-env (args)
  (let ((new (copy-lexenv *environment*)))
    (dolist (symbol args new)
      (let ((b (make-binding :name symbol :type 'variable :value (gvarname symbol))))
        (push-to-lexenv b new 'variable)))))

;;; Toplevel compilations
(defvar *toplevel-compilations* nil)

(defun toplevel-compilation (string)
  (push string *toplevel-compilations*))

(defun null-or-empty-p (x)
  (zerop (length x)))

(defun get-toplevel-compilations ()
  (reverse (remove-if #'null-or-empty-p *toplevel-compilations*)))

(defun %compile-defmacro (name lambda)
  (toplevel-compilation (ls-compile `',name))
  (let ((binding (make-binding :name name :type 'macro :value lambda)))
    (push-to-lexenv binding  *environment* 'function))
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

#+jscl
(fset 'proclaim #'!proclaim)

(defun %define-symbol-macro (name expansion)
  (let ((b (make-binding :name name :type 'macro :value expansion)))
    (push-to-lexenv b *environment* 'variable)
    name))

#+jscl
(defmacro define-symbol-macro (name expansion)
  `(%define-symbol-macro ',name ',expansion))


;;; Special forms

(defvar *compilations* nil)

(defmacro define-compilation (name args &body body)
  ;; Creates a new primitive `name' with parameters args and
  ;; @body. The body can access to the local environment through the
  ;; variable *ENVIRONMENT*.
  `(push (list ',name (lambda ,args (block ,name ,@body)))
         *compilations*))

(define-compilation if (condition true &optional false)
  (code "(" (ls-compile condition) " !== " (ls-compile nil)
        " ? " (ls-compile true *multiple-value-p*)
        " : " (ls-compile false *multiple-value-p*)
        ")"))

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
	   ;; Build a canonical keyword argument descriptor, filling
	   ;; the optional fields. The result is a list of the form
	   ;; ((keyword-name var) init-form).
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

(defun lambda-name/docstring-wrapper (name docstring &rest strs)
  (if (or name docstring)
      (js!selfcall
        "var func = " (join strs) ";" *newline*
        (when name
          (code "func.fname = " (js-escape-string name) ";" *newline*))
        (when docstring
          (code "func.docstring = " (js-escape-string docstring) ";" *newline*))
        "return func;" *newline*)
      (apply #'code strs)))

(defun lambda-check-argument-count
    (n-required-arguments n-optional-arguments rest-p)
  ;; Note: Remember that we assume that the number of arguments of a
  ;; call is at least 1 (the values argument).
  (let ((min n-required-arguments)
        (max (if rest-p 'n/a (+ n-required-arguments n-optional-arguments))))
    (block nil
      ;; Special case: a positive exact number of arguments.
      (when (and (< 0 min) (eql min max))
        (return (code "checkArgs(nargs, " min ");" *newline*)))
      ;; General case:
      (code
       (when (< 0 min)
         (code "checkArgsAtLeast(nargs, " min ");" *newline*))
       (when (numberp max)
         (code "checkArgsAtMost(nargs, " max ");" *newline*))))))

(defun compile-lambda-optional (ll)
  (let* ((optional-arguments (ll-optional-arguments-canonical ll))
	 (n-required-arguments (length (ll-required-arguments ll)))
	 (n-optional-arguments (length optional-arguments)))
    (when optional-arguments
      (code "switch(nargs){" *newline*
            (let ((cases nil)
                  (idx 0))
              (progn
                (while (< idx n-optional-arguments)
                  (let ((arg (nth idx optional-arguments)))
                    (push (code "case " (+ idx n-required-arguments) ":" *newline*
                                (indent (translate-variable (car arg))
                                        "="
                                        (ls-compile (cadr arg)) ";" *newline*)
                                (when (third arg)
                                  (indent (translate-variable (third arg))
                                          "="
                                          (ls-compile nil)
                                          ";" *newline*)))
                          cases)
                    (incf idx)))
                (push (code "default: break;" *newline*) cases)
                (join (reverse cases))))
            "}" *newline*))))

(defun compile-lambda-rest (ll)
  (let ((n-required-arguments (length (ll-required-arguments ll)))
	(n-optional-arguments (length (ll-optional-arguments ll)))
	(rest-argument (ll-rest-argument ll)))
    (when rest-argument
      (let ((js!rest (translate-variable rest-argument)))
        (code "var " js!rest "= " (ls-compile nil) ";" *newline*
              "for (var i = nargs-1; i>=" (+ n-required-arguments n-optional-arguments)
              "; i--)" *newline*
              (indent js!rest " = {car: arguments[i+2], cdr: " js!rest "};" *newline*))))))

(defun compile-lambda-parse-keywords (ll)
  (let ((n-required-arguments
	 (length (ll-required-arguments ll)))
	(n-optional-arguments
	 (length (ll-optional-arguments ll)))
	(keyword-arguments
	 (ll-keyword-arguments-canonical ll)))
    (code
     ;; Declare variables
     (mapconcat (lambda (arg)
		  (let ((var (second (car arg))))
		    (code "var " (translate-variable var) "; " *newline*
                          (when (third arg)
                            (code "var " (translate-variable (third arg))
                                  " = " (ls-compile nil)
                                  ";" *newline*)))))
		keyword-arguments)
     ;; Parse keywords
     (flet ((parse-keyword (keyarg)
	      ;; ((keyword-name var) init-form)
	      (code "for (i=" (+ n-required-arguments n-optional-arguments)
                    "; i<nargs; i+=2){" *newline*
                    (indent
                     "if (arguments[i+2] === " (ls-compile (caar keyarg)) "){" *newline*
                     (indent (translate-variable (cadr (car keyarg)))
                             " = arguments[i+3];"
                             *newline*
                             (let ((svar (third keyarg)))
                               (when svar
                                 (code (translate-variable svar) " = " (ls-compile t) ";" *newline*)))
                             "break;" *newline*)
                     "}" *newline*)
                    "}" *newline*
                    ;; Default value
                    "if (i == nargs){" *newline*
                    (indent (translate-variable (cadr (car keyarg))) " = " (ls-compile (cadr keyarg)) ";" *newline*)
                    "}" *newline*)))
       (when keyword-arguments
         (code "var i;" *newline*
               (mapconcat #'parse-keyword keyword-arguments))))
     ;; Check for unknown keywords
     (when keyword-arguments
       (code "for (i=" (+ n-required-arguments n-optional-arguments)
             "; i<nargs; i+=2){" *newline*
             (indent "if ("
                     (join (mapcar (lambda (x)
                                     (concat "arguments[i+2] !== " (ls-compile (caar x))))
                                   keyword-arguments)
                           " && ")
                     ")" *newline*
                     (indent
                      "throw 'Unknown keyword argument ' + xstring(arguments[i].name);" *newline*))
             "}" *newline*)))))

(defun parse-lambda-list (ll)
  (values (ll-required-arguments ll)
          (ll-optional-arguments ll)
          (ll-keyword-arguments  ll)
          (ll-rest-argument      ll)))

;;; Process BODY for declarations and/or docstrings. Return as
;;; multiple values the BODY without docstrings or declarations, the
;;; list of declaration forms and the docstring.
(defun parse-body (body &key declarations docstring)
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

;;; Compile a lambda function with lambda list LL and body BODY. If
;;; NAME is given, it should be a constant string and it will become
;;; the name of the function. If BLOCK is non-NIL, a named block is
;;; created around the body. NOTE: No block (even anonymous) is
;;; created if BLOCk is NIL.
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
         "(function ("
         (join (list* "values"
                      "nargs"
                      (mapcar #'translate-variable
                              (append required-arguments optional-arguments)))
               ",")
         "){" *newline*
         (indent
          ;; Check number of arguments
          (lambda-check-argument-count n-required-arguments
                                       n-optional-arguments
                                       (or rest-argument keyword-arguments))
                                        (compile-lambda-optional ll)
                                        (compile-lambda-rest ll)
                                        (compile-lambda-parse-keywords ll)
                                        (let ((*multiple-value-p* t))
                                          (if block
                                              (ls-compile-block `((block ,block ,@body)) t)
                                              (ls-compile-block body t))))
         "})")))))


(defun setq-pair (var val)
  (let ((b (lookup-in-lexenv var *environment* 'variable)))
    (cond
      ((and b
            (eq (binding-type b) 'variable)
            (not (member 'special (binding-declarations b)))
            (not (member 'constant (binding-declarations b))))
       (code (binding-value b) " = " (ls-compile val)))
      ((and b (eq (binding-type b) 'macro))
       (ls-compile `(setf ,var ,val)))
      (t
       (ls-compile `(set ',var ,val))))))


(define-compilation setq (&rest pairs)
  (let ((result ""))
    (when (null pairs)
      (return-from setq (ls-compile nil)))
    (while t
      (cond
	((null pairs)
         (return))
	((null (cdr pairs))
	 (error "Odd pairs in SETQ"))
	(t
	 (concatf result
	   (concat (setq-pair (car pairs) (cadr pairs))
		   (if (null (cddr pairs)) "" ", ")))
	 (setq pairs (cddr pairs)))))
    (code "(" result ")")))


;;; Compilation of literals an object dumping

;;; Two seperate functions are needed for escaping strings:
;;;  One for producing JavaScript string literals (which are singly or
;;;   doubly quoted)
;;;  And one for producing Lisp strings (which are only doubly quoted)
;;;
;;; The same function would suffice for both, but for javascript string
;;; literals it is neater to use either depending on the context, e.g:
;;;  foo's => "foo's"
;;;  "foo" => '"foo"'
;;; which avoids having to escape quotes where possible
(defun js-escape-string (string)
  (let ((index 0)
        (size (length string))
        (seen-single-quote nil)
        (seen-double-quote nil))
    (flet ((%js-escape-string (string escape-single-quote-p)
             (let ((output "")
                   (index 0))
               (while (< index size)
                 (let ((ch (char string index)))
                   (when (char= ch #\\)
                     (setq output (concat output "\\")))
                   (when (and escape-single-quote-p (char= ch #\'))
                     (setq output (concat output "\\")))
                   (when (char= ch #\newline)
                     (setq output (concat output "\\"))
                     (setq ch #\n))
                   (setq output (concat output (string ch))))
                 (incf index))
               output)))
      ;; First, scan the string for single/double quotes
      (while (< index size)
        (let ((ch (char string index)))
          (when (char= ch #\')
            (setq seen-single-quote t))
          (when (char= ch #\")
            (setq seen-double-quote t)))
        (incf index))
      ;; Then pick the appropriate way to escape the quotes
      (cond
        ((not seen-single-quote)
         (concat "'"   (%js-escape-string string nil) "'"))
        ((not seen-double-quote)
         (concat "\""  (%js-escape-string string nil) "\""))
        (t (concat "'" (%js-escape-string string t)   "'"))))))

(defun lisp-escape-string (string)
  (let ((output "")
        (index 0)
        (size (length string)))
    (while (< index size)
      (let ((ch (char string index)))
        (when (or (char= ch #\") (char= ch #\\))
          (setq output (concat output "\\")))
        (when (or (char= ch #\newline))
          (setq output (concat output "\\"))
          (setq ch #\n))
        (setq output (concat output (string ch))))
      (incf index))
    (concat "\"" output "\"")))

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
#-jscl
(setf (macro-function *magic-unquote-marker*)
      (lambda (form &optional environment)
        (declare (ignore environment))
        (second form)))

(defvar *literal-table* nil)
(defvar *literal-counter* 0)

(defun genlit ()
  (code "l" (incf *literal-counter*)))

(defun dump-symbol (symbol)
  #-jscl
  (let ((package (symbol-package symbol)))
    (if (eq package (find-package "KEYWORD"))
        (code "(new Symbol(" (dump-string (symbol-name symbol)) ", " (dump-string (package-name package)) "))")
        (code "(new Symbol(" (dump-string (symbol-name symbol)) "))")))
  #+jscl
  (let ((package (symbol-package symbol)))
    (if (null package)
        (code "(new Symbol(" (dump-string (symbol-name symbol)) "))")
        (ls-compile `(intern ,(symbol-name symbol) ,(package-name package))))))

(defun dump-cons (cons)
  (let ((head (butlast cons))
        (tail (last cons)))
    (code "QIList("
          (join-trailing (mapcar (lambda (x) (literal x t)) head) ",")
          (literal (car tail) t)
          ","
          (literal (cdr tail) t)
          ")")))

(defun dump-array (array)
  (let ((elements (vector-to-list array)))
    (concat "[" (join (mapcar #'literal elements) ", ") "]")))

(defun dump-string (string)
  (code "make_lisp_string(" (js-escape-string string) ")"))

(defun literal (sexp &optional recursive)
  (cond
    ((integerp sexp) (integer-to-string sexp))
    ((floatp sexp) (float-to-string sexp))
    ((characterp sexp) (js-escape-string (string sexp)))
    (t
     (or (cdr (assoc sexp *literal-table* :test #'eql))
         (let ((dumped (typecase sexp
                         (symbol (dump-symbol sexp))
                         (string (dump-string sexp))
                         (cons
                          ;; BOOTSTRAP MAGIC: See the root file
                          ;; jscl.lisp and the function
                          ;; `dump-global-environment' for futher
                          ;; information.
                          (if (eq (car sexp) *magic-unquote-marker*)
                              (ls-compile (second sexp))
                              (dump-cons sexp)))
                         (array (dump-array sexp)))))
           (if (and recursive (not (symbolp sexp)))
               dumped
               (let ((jsvar (genlit)))
                 (push (cons sexp jsvar) *literal-table*)
                 (toplevel-compilation (code "var " jsvar " = " dumped))
                 (when (keywordp sexp)
                   (toplevel-compilation (code jsvar ".value = " jsvar)))
                 jsvar)))))))


(define-compilation quote (sexp)
  (literal sexp))

(define-compilation %while (pred &rest body)
  (js!selfcall
    "while(" (ls-compile pred) " !== " (ls-compile nil) "){" *newline*
    (indent (ls-compile-block body))
    "}"
    "return " (ls-compile nil) ";" *newline*))

(define-compilation function (x)
  (cond
    ((and (listp x) (eq (car x) 'lambda))
     (compile-lambda (cadr x) (cddr x)))
    ((and (listp x) (eq (car x) 'named-lambda))
     ;; TODO: destructuring-bind now! Do error checking manually is
     ;; very annoying.
     (let ((name (cadr x))
           (ll (caddr x))
           (body (cdddr x)))
       (compile-lambda ll body
                       :name (symbol-name name)
                       :block name)))
    ((symbolp x)
     (let ((b (lookup-in-lexenv x *environment* 'function)))
       (if b
	   (binding-value b)
	   (ls-compile `(symbol-function ',x)))))))


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
    (code "(function("
          (join (mapcar #'translate-function fnames) ",")
          "){" *newline*
          (let ((body (ls-compile-block body t)))
            (indent body))
          "})(" (join cfuncs ",") ")")))

(define-compilation labels (definitions &rest body)
  (let* ((fnames (mapcar #'car definitions))
	 (*environment*
          (extend-lexenv (mapcar #'make-function-binding fnames)
                         *environment*
                         'function)))
    (js!selfcall
      (mapconcat (lambda (func)
		   (code "var " (translate-function (car func))
                         " = " (compile-lambda (cadr func)
                                               `((block ,(car func) ,@(cddr func))))
                         ";" *newline*))
		 definitions)
      (ls-compile-block body t))))


(defvar *compiling-file* nil)
(define-compilation eval-when-compile (&rest body)
  (if *compiling-file*
      (progn
        (eval (cons 'progn body))
        nil)
      (ls-compile `(progn ,@body))))

(defmacro define-transformation (name args form)
  `(define-compilation ,name ,args
     (ls-compile ,form)))

(define-compilation progn (&rest body)
  (if (null (cdr body))
      (ls-compile (car body) *multiple-value-p*)
      (code "("
            (join
             (remove-if #'null-or-empty-p
                        (append
                         (mapcar #'ls-compile (butlast body))
                         (list (ls-compile (car (last body)) t))))
                  ",")
            ")")))

(defun special-variable-p (x)
  (and (claimp x 'variable 'special) t))

;;; Wrap CODE to restore the symbol values of the dynamic
;;; bindings. BINDINGS is a list of pairs of the form
;;; (SYMBOL . PLACE),  where PLACE is a Javascript variable
;;; name to initialize the symbol value and where to stored
;;; the old value.
(defun let-binding-wrapper (bindings body)
  (when (null bindings)
    (return-from let-binding-wrapper body))
  (code
   "try {" *newline*
   (indent "var tmp;" *newline*
           (mapconcat
            (lambda (b)
              (let ((s (ls-compile `(quote ,(car b)))))
                (code "tmp = " s ".value;" *newline*
                      s ".value = " (cdr b) ";" *newline*
                      (cdr b) " = tmp;" *newline*)))
            bindings)
           body *newline*)
   "}" *newline*
   "finally {"  *newline*
   (indent
    (mapconcat (lambda (b)
                 (let ((s (ls-compile `(quote ,(car b)))))
                   (code s ".value" " = " (cdr b) ";" *newline*)))
               bindings))
   "}" *newline*))

(define-compilation let (bindings &rest body)
  (let* ((bindings (mapcar #'ensure-list bindings))
         (variables (mapcar #'first bindings))
         (cvalues (mapcar #'ls-compile (mapcar #'second bindings)))
         (*environment* (extend-local-env (remove-if #'special-variable-p variables)))
         (dynamic-bindings))
    (code "(function("
          (join (mapcar (lambda (x)
                          (if (special-variable-p x)
                              (let ((v (gvarname x)))
                                (push (cons x v) dynamic-bindings)
                                v)
                              (translate-variable x)))
                        variables)
                ",")
          "){" *newline*
          (let ((body (ls-compile-block body t t)))
            (indent (let-binding-wrapper dynamic-bindings body)))
          "})(" (join cvalues ",") ")")))


;;; Return the code to initialize BINDING, and push it extending the
;;; current lexical environment if the variable is not special.
(defun let*-initialize-value (binding)
  (let ((var (first binding))
        (value (second binding)))
    (if (special-variable-p var)
        (code (ls-compile `(setq ,var ,value)) ";" *newline*)
        (let* ((v (gvarname var))
               (b (make-binding :name var :type 'variable :value v)))
          (prog1 (code "var " v " = " (ls-compile value) ";" *newline*)
            (push-to-lexenv b *environment* 'variable))))))

;;; Wrap BODY to restore the symbol values of SYMBOLS after body. It
;;; DOES NOT generate code to initialize the value of the symbols,
;;; unlike let-binding-wrapper.
(defun let*-binding-wrapper (symbols body)
  (when (null symbols)
    (return-from let*-binding-wrapper body))
  (let ((store (mapcar (lambda (s) (cons s (gvarname s)))
                       (remove-if-not #'special-variable-p symbols))))
    (code
     "try {" *newline*
     (indent
      (mapconcat (lambda (b)
                   (let ((s (ls-compile `(quote ,(car b)))))
                     (code "var " (cdr b) " = " s ".value;" *newline*)))
                 store)
      body)
     "}" *newline*
     "finally {" *newline*
     (indent
      (mapconcat (lambda (b)
                   (let ((s (ls-compile `(quote ,(car b)))))
                     (code s ".value" " = " (cdr b) ";" *newline*)))
                 store))
     "}" *newline*)))

(define-compilation let* (bindings &rest body)
  (let ((bindings (mapcar #'ensure-list bindings))
        (*environment* (copy-lexenv *environment*)))
    (js!selfcall
      (let ((specials (remove-if-not #'special-variable-p (mapcar #'first bindings)))
            (body (concat (mapconcat #'let*-initialize-value bindings)
                          (ls-compile-block body t t))))
        (let*-binding-wrapper specials body)))))


(define-compilation block (name &rest body)
  ;; We use Javascript exceptions to implement non local control
  ;; transfer. Exceptions has dynamic scoping, so we use a uniquely
  ;; generated object to identify the block. The instance of a empty
  ;; array is used to distinguish between nested dynamic Javascript
  ;; exceptions. See https://github.com/davazp/jscl/issues/64 for
  ;; futher details.
  (let* ((idvar (gvarname name))
         (b (make-binding :name name :type 'block :value idvar)))
    (when *multiple-value-p*
      (push 'multiple-value (binding-declarations b)))
    (let* ((*environment* (extend-lexenv (list b) *environment* 'block))
           (cbody (ls-compile-block body t)))
      (if (member 'used (binding-declarations b))
          (js!selfcall
            "try {" *newline*
            "var " idvar " = [];" *newline*
            (indent cbody)
            "}" *newline*
            "catch (cf){" *newline*
            "    if (cf.type == 'block' && cf.id == " idvar ")" *newline*
            (if *multiple-value-p*
                "        return values.apply(this, forcemv(cf.values));"
                "        return cf.values;")
            *newline*
            "    else" *newline*
            "        throw cf;" *newline*
            "}" *newline*)
          (js!selfcall cbody)))))

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
    (js!selfcall
      (when multiple-value-p (code "var values = mv;" *newline*))
      "throw ({"
      "type: 'block', "
      "id: " (binding-value b) ", "
      "values: " (ls-compile value multiple-value-p) ", "
      "message: 'Return from unknown block " (symbol-name name) ".'"
      "})")))

(define-compilation catch (id &rest body)
  (js!selfcall
    "var id = " (ls-compile id) ";" *newline*
    "try {" *newline*
    (indent (ls-compile-block body t)) *newline*
    "}" *newline*
    "catch (cf){" *newline*
    "    if (cf.type == 'catch' && cf.id == id)" *newline*
    (if *multiple-value-p*
        "        return values.apply(this, forcemv(cf.values));"
        "        return pv.apply(this, forcemv(cf.values));")
    *newline*
    "    else" *newline*
    "        throw cf;" *newline*
    "}" *newline*))

(define-compilation throw (id value)
  (js!selfcall
    "var values = mv;" *newline*
    "throw ({"
    "type: 'catch', "
    "id: " (ls-compile id) ", "
    "values: " (ls-compile value t) ", "
    "message: 'Throw uncatched.'"
    "})"))

(defun go-tag-p (x)
  (or (integerp x) (symbolp x)))

(defun declare-tagbody-tags (tbidx body)
  (let* ((go-tag-counter 0)
         (bindings
          (mapcar (lambda (label)
                    (let ((tagidx (integer-to-string (incf go-tag-counter))))
                      (make-binding :name label :type 'gotag :value (list tbidx tagidx))))
                  (remove-if-not #'go-tag-p body))))
    (extend-lexenv bindings *environment* 'gotag)))

(define-compilation tagbody (&rest body)
  ;; Ignore the tagbody if it does not contain any go-tag. We do this
  ;; because 1) it is easy and 2) many built-in forms expand to a
  ;; implicit tagbody, so we save some space.
  (unless (some #'go-tag-p body)
    (return-from tagbody (ls-compile `(progn ,@body nil))))
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
      (js!selfcall
        ;; TAGBODY branch to take
        "var " branch " = " initag ";" *newline*
        "var " tbidx " = [];" *newline*
        "tbloop:" *newline*
        "while (true) {" *newline*
        (indent "try {" *newline*
                (indent (let ((content ""))
                          (code "switch(" branch "){" *newline*
                                "case " initag ":" *newline*
                                (dolist (form (cdr body) content)
                                  (concatf content
                                    (if (not (go-tag-p form))
                                        (indent (ls-compile form) ";" *newline*)
                                        (let ((b (lookup-in-lexenv form *environment* 'gotag)))
                                          (code "case " (second (binding-value b)) ":" *newline*)))))
                                "default:" *newline*
                                "    break tbloop;" *newline*
                                "}" *newline*)))
                "}" *newline*
                "catch (jump) {" *newline*
                "    if (jump.type == 'tagbody' && jump.id == " tbidx ")" *newline*
                "        " branch " = jump.label;" *newline*
                "    else" *newline*
                "        throw(jump);" *newline*
                "}" *newline*)
        "}" *newline*
        "return " (ls-compile nil) ";" *newline*))))

(define-compilation go (label)
  (let ((b (lookup-in-lexenv label *environment* 'gotag))
        (n (cond
             ((symbolp label) (symbol-name label))
             ((integerp label) (integer-to-string label)))))
    (when (null b)
      (error "Unknown tag `~S'" label))
    (js!selfcall
      "throw ({"
      "type: 'tagbody', "
      "id: " (first (binding-value b)) ", "
      "label: " (second (binding-value b)) ", "
      "message: 'Attempt to GO to non-existing tag " n "'"
      "})" *newline*)))

(define-compilation unwind-protect (form &rest clean-up)
  (js!selfcall
    "var ret = " (ls-compile nil) ";" *newline*
    "try {" *newline*
    (indent "ret = " (ls-compile form) ";" *newline*)
    "} finally {" *newline*
    (indent (ls-compile-block clean-up))
    "}" *newline*
    "return ret;" *newline*))

(define-compilation multiple-value-call (func-form &rest forms)
  (js!selfcall
    "var func = " (ls-compile func-form) ";" *newline*
    "var args = [" (if *multiple-value-p* "values" "pv") ", 0];" *newline*
    "return "
    (js!selfcall
      "var values = mv;" *newline*
      "var vs;" *newline*
      (mapconcat (lambda (form)
                   (code "vs = " (ls-compile form t) ";" *newline*
                         "if (typeof vs === 'object' && 'multiple-value' in vs)" *newline*
                         (indent "args = args.concat(vs);" *newline*)
                         "else" *newline*
                         (indent "args.push(vs);" *newline*)))
                 forms)
      "args[1] = args.length-2;" *newline*
      "return func.apply(window, args);" *newline*) ";" *newline*))

(define-compilation multiple-value-prog1 (first-form &rest forms)
  (js!selfcall
    "var args = " (ls-compile first-form *multiple-value-p*) ";" *newline*
    (ls-compile-block forms)
    "return args;" *newline*))

(define-transformation backquote (form)
  (bq-completely-process form))


;;; Primitives

(defvar *builtins* nil)

(defmacro define-raw-builtin (name args &body body)
  ;; Creates a new primitive function `name' with parameters args and
  ;; @body. The body can access to the local environment through the
  ;; variable *ENVIRONMENT*.
  `(push (list ',name (lambda ,args (block ,name ,@body)))
         *builtins*))

(defmacro define-builtin (name args &body body)
  `(define-raw-builtin ,name ,args
     (let ,(mapcar (lambda (arg) `(,arg (ls-compile ,arg))) args)
       ,@body)))

;;; DECLS is a list of (JSVARNAME TYPE LISPFORM) declarations.
(defmacro type-check (decls &body body)
  `(js!selfcall
     ,@(mapcar (lambda (decl)
                 `(code "var " ,(first decl) " = " ,(third decl) ";" *newline*))
               decls)
     ,@(mapcar (lambda (decl)
                 `(code "if (typeof " ,(first decl) " != '" ,(second decl) "')" *newline*
                        (indent "throw 'The value ' + "
                                ,(first decl)
                                " + ' is not a type "
                                ,(second decl)
                                ".';"
                                *newline*)))
               decls)
     (code "return " (progn ,@body) ";" *newline*)))

;;; VARIABLE-ARITY compiles variable arity operations. ARGS stands for
;;; a variable which holds a list of forms. It will compile them and
;;; store the result in some Javascript variables. BODY is evaluated
;;; with ARGS bound to the list of these variables to generate the
;;; code which performs the transformation on these variables.

(defun variable-arity-call (args function)
  (unless (consp args)
    (error "ARGS must be a non-empty list"))
  (let ((counter 0)
        (fargs '())
        (prelude ""))
    (dolist (x args)
      (cond
        ((floatp x) (push (float-to-string x) fargs))
        ((numberp x) (push (integer-to-string x) fargs))
        (t (let ((v (code "x" (incf counter))))
             (push v fargs)
             (concatf prelude
               (code "var " v " = " (ls-compile x) ";" *newline*
                     "if (typeof " v " !== 'number') throw 'Not a number!';"
                     *newline*))))))
    (js!selfcall prelude (funcall function (reverse fargs)))))


(defmacro variable-arity (args &body body)
  (unless (symbolp args)
    (error "`~S' is not a symbol." args))
  `(variable-arity-call ,args
                        (lambda (,args)
                          (code "return " ,@body ";" *newline*))))

(defun num-op-num (x op y)
  (type-check (("x" "number" x) ("y" "number" y))
    (code "x" op "y")))

(define-raw-builtin + (&rest numbers)
  (if (null numbers)
      "0"
      (variable-arity numbers
	(join numbers "+"))))

(define-raw-builtin - (x &rest others)
  (let ((args (cons x others)))
    (variable-arity args
      (if (null others)
	  (concat "-" (car args))
	  (join args "-")))))

(define-raw-builtin * (&rest numbers)
  (if (null numbers)
      "1"
      (variable-arity numbers
	(join numbers "*"))))

(define-raw-builtin / (x &rest others)
  (let ((args (cons x others)))
    (variable-arity args
      (if (null others)
	  (concat "1 /" (car args))
	  (join args "/")))))

(define-builtin mod (x y) (num-op-num x "%" y))


(defun comparison-conjuntion (vars op)
  (cond
    ((null (cdr vars))
     "true")
    ((null (cddr vars))
     (concat (car vars) op (cadr vars)))
    (t
     (concat (car vars) op (cadr vars)
	     " && "
	     (comparison-conjuntion (cdr vars) op)))))

(defmacro define-builtin-comparison (op sym)
  `(define-raw-builtin ,op (x &rest args)
     (let ((args (cons x args)))
       (variable-arity args
	 (js!bool (comparison-conjuntion args ,sym))))))

(define-builtin-comparison > ">")
(define-builtin-comparison < "<")
(define-builtin-comparison >= ">=")
(define-builtin-comparison <= "<=")
(define-builtin-comparison = "==")
(define-builtin-comparison /= "!=")

(define-builtin numberp (x)
  (js!bool (code "(typeof (" x ") == \"number\")")))

(define-builtin floor (x)
  (type-check (("x" "number" x))
    "Math.floor(x)"))

(define-builtin expt (x y)
  (type-check (("x" "number" x)
               ("y" "number" y))
    "Math.pow(x, y)"))

(define-builtin float-to-string (x)
  (type-check (("x" "number" x))
    "make_lisp_string(x.toString())"))

(define-builtin cons (x y)
  (code "({car: " x ", cdr: " y "})"))

(define-builtin consp (x)
  (js!bool
   (js!selfcall
     "var tmp = " x ";" *newline*
     "return (typeof tmp == 'object' && 'car' in tmp);" *newline*)))

(define-builtin car (x)
  (js!selfcall
    "var tmp = " x ";" *newline*
    "return tmp === " (ls-compile nil)
    "? " (ls-compile nil)
    ": tmp.car;" *newline*))

(define-builtin cdr (x)
  (js!selfcall
    "var tmp = " x ";" *newline*
    "return tmp === " (ls-compile nil) "? "
    (ls-compile nil)
    ": tmp.cdr;" *newline*))

(define-builtin rplaca (x new)
  (type-check (("x" "object" x))
    (code "(x.car = " new ", x)")))

(define-builtin rplacd (x new)
  (type-check (("x" "object" x))
    (code "(x.cdr = " new ", x)")))

(define-builtin symbolp (x)
  (js!bool (code "(" x " instanceof Symbol)")))

(define-builtin make-symbol (name)
  (code "(new Symbol(" name "))"))

(define-builtin symbol-name (x)
  (code "(" x ").name"))

(define-builtin set (symbol value)
  (code "(" symbol ").value = " value))

(define-builtin fset (symbol value)
  (code "(" symbol ").fvalue = " value))

(define-builtin boundp (x)
  (js!bool (code "(" x ".value !== undefined)")))

(define-builtin fboundp (x)
  (js!bool (code "(" x ".fvalue !== undefined)")))

(define-builtin symbol-value (x)
  (js!selfcall
    "var symbol = " x ";" *newline*
    "var value = symbol.value;" *newline*
    "if (value === undefined) throw \"Variable `\" + xstring(symbol.name) + \"' is unbound.\";" *newline*
    "return value;" *newline*))

(define-builtin symbol-function (x)
  (js!selfcall
    "var symbol = " x ";" *newline*
    "var func = symbol.fvalue;" *newline*
    "if (func === undefined) throw \"Function `\" + xstring(symbol.name) + \"' is undefined.\";" *newline*
    "return func;" *newline*))

(define-builtin symbol-plist (x)
  (code "((" x ").plist || " (ls-compile nil) ")"))

(define-builtin lambda-code (x)
  (code "make_lisp_string((" x ").toString())"))

(define-builtin eq (x y)
  (js!bool (code "(" x " === " y ")")))

(define-builtin char-code (x)
  (type-check (("x" "string" x))
    "char_to_codepoint(x)"))

(define-builtin code-char (x)
  (type-check (("x" "number" x))
    "char_from_codepoint(x)"))

(define-builtin characterp (x)
  (js!bool
   (js!selfcall
     "var x = " x ";" *newline*
     "return (typeof(" x ") == \"string\") && (x.length == 1 || x.length == 2);")))

(define-builtin char-upcase (x)
  (code "safe_char_upcase(" x ")"))

(define-builtin char-downcase (x)
  (code "safe_char_downcase(" x ")"))

(define-builtin stringp (x)
  (js!bool
   (js!selfcall
     "var x = " x ";" *newline*
     "return typeof(x) == 'object' && 'length' in x && x.stringp == 1;")))

(define-raw-builtin funcall (func &rest args)
  (js!selfcall
    "var f = " (ls-compile func) ";" *newline*
    "return (typeof f === 'function'? f: f.fvalue)("
    (join (list* (if *multiple-value-p* "values" "pv")
                 (integer-to-string (length args))
                 (mapcar #'ls-compile args))
          ", ")
    ")"))

(define-raw-builtin apply (func &rest args)
  (if (null args)
      (code "(" (ls-compile func) ")()")
      (let ((args (butlast args))
            (last (car (last args))))
        (js!selfcall
          "var f = " (ls-compile func) ";" *newline*
          "var args = [" (join (list* (if *multiple-value-p* "values" "pv")
                                      (integer-to-string (length args))
                                      (mapcar #'ls-compile args))
                               ", ")
          "];" *newline*
          "var tail = (" (ls-compile last) ");" *newline*
          "while (tail != " (ls-compile nil) "){" *newline*
          "    args.push(tail.car);" *newline*
          "    args[1] += 1;" *newline*
          "    tail = tail.cdr;" *newline*
          "}" *newline*
          "return (typeof f === 'function'? f : f.fvalue).apply(this, args);" *newline*))))

(define-builtin js-eval (string)
  (if *multiple-value-p*
      (js!selfcall
        "var v = globalEval(xstring(" string "));" *newline*
        "return values.apply(this, forcemv(v));" *newline*)
      (code "globalEval(xstring(" string "))")))

(define-builtin %throw (string)
  (js!selfcall "throw " string ";" *newline*))

(define-builtin functionp (x)
  (js!bool (code "(typeof " x " == 'function')")))

(define-builtin write-string (x)
  (code "lisp.write(" x ")"))


;;; Storage vectors. They are used to implement arrays and (in the
;;; future) structures.

(define-builtin storage-vector-p (x)
  (js!bool
   (js!selfcall
     "var x = " x ";" *newline*
     "return typeof x === 'object' && 'length' in x;")))

(define-builtin make-storage-vector (n)
  (js!selfcall
    "var r = [];" *newline*
    "r.length = " n ";" *newline*
    "return r;" *newline*))

(define-builtin storage-vector-size (x)
  (code x ".length"))

(define-builtin resize-storage-vector (vector new-size)
  (code "(" vector ".length = " new-size ")"))

(define-builtin storage-vector-ref (vector n)
  (js!selfcall
    "var x = " "(" vector ")[" n "];" *newline*
    "if (x === undefined) throw 'Out of range';" *newline*
    "return x;" *newline*))

(define-builtin storage-vector-set (vector n value)
  (js!selfcall
    "var x = " vector ";" *newline*
    "var i = " n ";" *newline*
    "if (i < 0 || i >= x.length) throw 'Out of range';" *newline*
    "return x[i] = " value ";" *newline*))

(define-builtin concatenate-storage-vector (sv1 sv2)
  (js!selfcall
    "var sv1 = " sv1 ";" *newline*
    "var r = sv1.concat(" sv2 ");" *newline*
    "r.type = sv1.type;" *newline*
    "r.stringp = sv1.stringp;" *newline*
    "return r;" *newline*))

(define-builtin get-internal-real-time ()
  "(new Date()).getTime()")

(define-builtin values-array (array)
  (if *multiple-value-p*
      (code "values.apply(this, " array ")")
      (code "pv.apply(this, " array ")")))

(define-raw-builtin values (&rest args)
  (if *multiple-value-p*
      (code "values(" (join (mapcar #'ls-compile args) ", ") ")")
      (code "pv(" (join (mapcar #'ls-compile args) ", ") ")")))


;;; Javascript FFI

(define-builtin new () "{}")

(define-raw-builtin oget* (object key &rest keys)
  (js!selfcall
    "var tmp = (" (ls-compile object) ")[xstring(" (ls-compile key) ")];" *newline*
    (mapconcat (lambda (key)
                 (code "if (tmp === undefined) return " (ls-compile nil) ";" *newline*
                       "tmp = tmp[xstring(" (ls-compile key) ")];" *newline*))
               keys)
    "return tmp === undefined? " (ls-compile nil) " : tmp;" *newline*))

(define-raw-builtin oset* (value object key &rest keys)
  (let ((keys (cons key keys)))
    (js!selfcall
      "var obj = " (ls-compile object) ";" *newline*
      (mapconcat (lambda (key)
                   (code "obj = obj[xstring(" (ls-compile key) ")];"
                         "if (obj === undefined) throw 'Impossible to set Javascript property.';" *newline*))
                 (butlast keys))
      "var tmp = obj[xstring(" (ls-compile (car (last keys))) ")] = " (ls-compile value) ";" *newline*
      "return tmp === undefined? " (ls-compile nil) " : tmp;" *newline*)))

(define-raw-builtin oget (object key &rest keys)
  (code "js_to_lisp(" (ls-compile `(oget* ,object ,key ,@keys)) ")"))

(define-raw-builtin oset (value object key &rest keys)
  (ls-compile `(oset* (lisp-to-js ,value) ,object ,key ,@keys)))

(define-builtin objectp (x)
  (js!bool (code "(typeof (" x ") === 'object')")))

(define-builtin lisp-to-js (x) (code "lisp_to_js(" x ")"))
(define-builtin js-to-lisp (x) (code "js_to_lisp(" x ")"))


(define-builtin in (key object)
  (js!bool (code "(xstring(" key ") in (" object "))")))

(define-builtin map-for-in (function object)
  (js!selfcall
   "var f = " function ";" *newline*
   "var g = (typeof f === 'function' ? f : f.fvalue);" *newline*
   "var o = " object ";" *newline*
   "for (var key in o){" *newline*
   (indent "g(" (if *multiple-value-p* "values" "pv") ", 1, o[key]);" *newline*)
   "}"
   " return " (ls-compile nil) ";" *newline*))

(define-compilation %js-vref (var)
  (code "js_to_lisp(" var ")"))

(define-compilation %js-vset (var val)
  (code "(" var " = lisp_to_js(" (ls-compile val) "))"))

(define-setf-expander %js-vref (var)
  (let ((new-value (gensym)))
    (unless (stringp var)
      (error "`~S' is not a string." var))
    (values nil
            (list var)
            (list new-value)
            `(%js-vset ,var ,new-value)
            `(%js-vref ,var))))


#-jscl
(defvar *macroexpander-cache*
  (make-hash-table :test #'eq))

(defun !macro-function (symbol)
  (unless (symbolp symbol)
    (error "`~S' is not a symbol." symbol))
  (let ((b (lookup-in-lexenv symbol *environment* 'function)))
    (if (and b (eq (binding-type b) 'macro))
        (let ((expander (binding-value b)))
          (cond
            #-jscl
            ((gethash b *macroexpander-cache*)
             (setq expander (gethash b *macroexpander-cache*)))
            ((listp expander)
             (let ((compiled (eval expander)))
               ;; The list representation are useful while
               ;; bootstrapping, as we can dump the definition of the
               ;; macros easily, but they are slow because we have to
               ;; evaluate them and compile them now and again. So, let
               ;; us replace the list representation version of the
               ;; function with the compiled one.
               ;;
               #+jscl (setf (binding-value b) compiled)
               #-jscl (setf (gethash b *macroexpander-cache*) compiled)
               (setq expander compiled))))
          expander)
        nil)))

(defun !macroexpand-1 (form)
  (cond
    ((symbolp form)
     (let ((b (lookup-in-lexenv form *environment* 'variable)))
       (if (and b (eq (binding-type b) 'macro))
           (values (binding-value b) t)
           (values form nil))))
    ((and (consp form) (symbolp (car form)))
     (let ((macrofun (!macro-function (car form))))
       (if macrofun
           (values (funcall macrofun (cdr form)) t)
           (values form nil))))
    (t
     (values form nil))))

(defun compile-funcall (function args)
  (let* ((values-funcs (if *multiple-value-p* "values" "pv"))
         (arglist (concat "(" (join (list* values-funcs
                                           (integer-to-string (length args))
                                           (mapcar #'ls-compile args)) ", ") ")")))
    (unless (or (symbolp function)
                (and (consp function)
                     (member (car function) '(lambda oget))))
      (error "Bad function designator `~S'" function))
    (cond
      ((translate-function function)
       (concat (translate-function function) arglist))
      ((and (symbolp function)
            #+jscl (eq (symbol-package function) (find-package "COMMON-LISP"))
            #-jscl t)
       (code (ls-compile `',function) ".fvalue" arglist))
      #+jscl((symbolp function)
       (code (ls-compile `#',function) arglist))
      ((and (consp function) (eq (car function) 'lambda))
       (code (ls-compile `#',function) arglist))
      ((and (consp function) (eq (car function) 'oget))
       (code (ls-compile function) arglist))
      (t
       (error "Bad function descriptor")))))

(defun ls-compile-block (sexps &optional return-last-p decls-allowed-p)
  (multiple-value-bind (sexps decls)
      (parse-body sexps :declarations decls-allowed-p)
    (declare (ignore decls))
    (if return-last-p
        (code (ls-compile-block (butlast sexps) nil decls-allowed-p)
              "return " (ls-compile (car (last sexps)) *multiple-value-p*) ";")
        (join-trailing
         (remove-if #'null-or-empty-p (mapcar #'ls-compile sexps))
         (concat ";" *newline*)))))

(defun ls-compile (sexp &optional multiple-value-p)
  (multiple-value-bind (sexp expandedp) (!macroexpand-1 sexp)
    (when expandedp
      (return-from ls-compile (ls-compile sexp multiple-value-p)))
    ;; The expression has been macroexpanded. Now compile it!
    (let ((*multiple-value-p* multiple-value-p))
      (cond
        ((symbolp sexp)
         (let ((b (lookup-in-lexenv sexp *environment* 'variable)))
           (cond
             ((and b (not (member 'special (binding-declarations b))))
              (binding-value b))
             ((or (keywordp sexp)
                  (and b (member 'constant (binding-declarations b))))
              (code (ls-compile `',sexp) ".value"))
             (t
              (ls-compile `(symbol-value ',sexp))))))
        ((or (integerp sexp) (floatp sexp) (characterp sexp) (stringp sexp) (arrayp sexp))
         (literal sexp))
        ((listp sexp)
         (let ((name (car sexp))
               (args (cdr sexp)))
           (cond
             ;; Special forms
             ((assoc name *compilations*)
              (let ((comp (second (assoc name *compilations*))))
                (apply comp args)))
             ;; Built-in functions
             ((and (assoc name *builtins*)
                   (not (claimp name 'function 'notinline)))
              (let ((comp (second (assoc name *builtins*))))
                (apply comp args)))
             (t
              (compile-funcall name args)))))
        (t
         (error "How should I compile `~S'?" sexp))))))


(defvar *compile-print-toplevels* nil)

(defun truncate-string (string &optional (width 60))
  (let ((n (or (position #\newline string)
               (min width (length string)))))
    (subseq string 0 n)))

(defun ls-compile-toplevel (sexp &optional multiple-value-p)
  (let ((*toplevel-compilations* nil))
    (cond
      ((and (consp sexp) (eq (car sexp) 'progn))
       (let ((subs (mapcar (lambda (s)
                             (ls-compile-toplevel s t))
                           (cdr sexp))))
         (join (remove-if #'null-or-empty-p subs))))
      (t
       (when *compile-print-toplevels*
         (let ((form-string (prin1-to-string sexp)))
           (format t "Compiling ~a..." (truncate-string form-string))))
       (let ((code (ls-compile sexp multiple-value-p)))
         (code (join-trailing (get-toplevel-compilations)
                              (code ";" *newline*))
               (when code
                 (code code ";" *newline*))))))))
