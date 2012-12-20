(defun ensure-list (x)
  (if (listp x)
      x
      (list x)))

(defun !reduce (func list initial)
  (if (null list)
      initial
      (!reduce func
               (cdr list)
               (funcall func initial (car list)))))

;;; Utils

#+common-lisp
(progn
  (defmacro while (condition &body body)
    `(do ()
         ((not ,condition))
       ,@body))

  (defun concat-two (s1 s2)
    (concatenate 'string s1 s2))

  (defun setcar (cons new)
    (setf (car cons) new))
  (defun setcdr (cons new)
    (setf (cdr cons) new)))

(defvar *newline* (string (code-char 10)))

(defun concat (&rest strs)
  (!reduce (lambda (s1 s2) (concat-two s1 s2))
           strs
           ""))

;;; Concatenate a list of strings, with a separator
(defun join (list separator)
  (cond
    ((null list)
     "")
    ((null (cdr list))
     (car list))
    (t
     (concat (car list)
             separator
             (join (cdr list) separator)))))

(defun join-trailing (list separator)
  (cond
    ((null list)
     "")
    ((null (car list))
     (join-trailing (cdr list) separator))
    (t
     (concat (car list) separator (join-trailing (cdr list) separator)))))

(defun integer-to-string (x)
  (if (zerop x)
      "0"
      (let ((digits nil))
        (while (not (= x 0))
          (push (mod x 10) digits)
          (setq x (truncate x 10)))
        (join (mapcar (lambda (d) (string (char "0123456789" d)))
                      digits)
              ""))))

;;;; Reader

;;; It is a basic Lisp reader. It does not use advanced stuff
;;; intentionally, because we want to use it to bootstrap a simple
;;; Lisp. The main entry point is the function `ls-read', which
;;; accepts a strings as argument and return the Lisp expression.
(defun make-string-stream (string)
  (cons string 0))

(defun %peek-char (stream)
  (and (< (cdr stream) (length (car stream)))
       (char (car stream) (cdr stream))))

(defun %read-char (stream)
  (and (< (cdr stream) (length (car stream)))
       (prog1 (char (car stream) (cdr stream))
         (setcdr stream (1+ (cdr stream))))))

(defun whitespacep (ch)
  (or (char= ch #\space) (char= ch #\newline) (char= ch #\tab)))

(defun skip-whitespaces (stream)
  (let (ch)
    (setq ch (%peek-char stream))
    (while (and ch (whitespacep ch))
      (%read-char stream)
      (setq ch (%peek-char stream)))))

(defun terminalp (ch)
  (or (null ch) (whitespacep ch) (char= #\) ch) (char= #\( ch)))

(defun read-until (stream func)
  (let ((string "")
        (ch))
    (setq ch (%peek-char stream))
    (while (not (funcall func ch))
      (setq string (concat string (string ch)))
      (%read-char stream)
      (setq ch (%peek-char stream)))
    string))

(defun skip-whitespaces-and-comments (stream)
  (let (ch)
    (skip-whitespaces stream)
    (setq ch (%peek-char stream))
    (while (and ch (char= ch #\;))
      (read-until stream (lambda (x) (char= x #\newline)))
      (skip-whitespaces stream)
      (setq ch (%peek-char stream)))))

(defun %read-list (stream)
  (skip-whitespaces-and-comments stream)
  (let ((ch (%peek-char stream)))
    (cond
      ((char= ch #\))
       (%read-char stream)
       nil)
      ((char= ch #\.)
       (%read-char stream)
       (skip-whitespaces-and-comments stream)
       (prog1 (ls-read stream)
         (unless (char= (%read-char stream) #\))
           (error "')' was expected."))))
      (t
       (cons (ls-read stream) (%read-list stream))))))

(defvar *eof* (make-symbol "EOF"))
(defun ls-read (stream)
  (skip-whitespaces-and-comments stream)
  (let ((ch (%peek-char stream)))
    (cond
      ((null ch)
       *eof*)
      ((char= ch #\()
       (%read-char stream)
       (%read-list stream))
      ((char= ch #\')
       (%read-char stream)
       (list 'quote (ls-read stream)))
      ((char= ch #\`)
       (%read-char stream)
       (list 'backquote (ls-read stream)))
      ((char= ch #\")
       (%read-char stream)
       (prog1 (read-until stream (lambda (ch) (char= ch #\")))
         (%read-char stream)))
      ((char= ch #\,)
       (%read-char stream)
       (if (eql (%peek-char stream) #\@)
           (progn (%read-char stream) (list 'unquote-splicing (ls-read stream)))
           (list 'unquote (ls-read stream))))
      ((char= ch #\#)
       (%read-char stream)
       (ecase (%read-char stream)
         (#\'
          (list 'function (ls-read stream)))
         (#\\
          (let ((cname
		 (concat (string (%read-char stream))
			 (read-until stream #'terminalp))))
            (cond
              ((string= cname "space") (char-code #\space))
              ((string= cname "newline") (char-code #\newline))
              (t (char-code (char cname 0))))))
         (#\+
          (let ((feature (read-until stream #'terminalp)))
            (cond
              ((string= feature "common-lisp")
               (ls-read stream)         ;ignore
               (ls-read stream))
              ((string= feature "lispstrack")
               (ls-read stream))
              (t
               (error "Unknown reader form.")))))))
      (t
       (let ((string (read-until stream #'terminalp)))
         (if (every #'digit-char-p string)
             (parse-integer string)
             (intern (string-upcase string))))))))

(defun ls-read-from-string (string)
  (ls-read (make-string-stream string)))


;;;; Compiler

(defvar *compilation-unit-checks* '())

(defparameter *env* '())
(defparameter *fenv* '())

(defun make-binding (name type js declared)
  (list name type js declared))

(defun binding-name (b) (first b))
(defun binding-type (b) (second b))
(defun binding-translation (b) (third b))
(defun binding-declared (b)
  (and b (fourth b)))
(defun mark-binding-as-declared (b)
  (setcar (cdddr b) t))

(let ((counter 0))
  (defun gvarname (symbol)
    (concat "v" (integer-to-string (incf counter))))

  (defun lookup-variable (symbol env)
    (or (assoc symbol env)
        (assoc symbol *env*)
        (let ((name (symbol-name symbol))
              (binding (make-binding symbol 'variable (gvarname symbol) nil)))
          (push binding *env*)
          (push (lambda ()
                  (unless (binding-declared (assoc symbol *env*))
                    (error (concat "Undefined variable `" name "'"))))
                *compilation-unit-checks*)
          binding)))

  (defun lookup-variable-translation (symbol env)
    (binding-translation (lookup-variable symbol env)))

  (defun extend-local-env (args env)
    (append (mapcar (lambda (symbol)
                      (make-binding symbol 'variable (gvarname symbol) t))
                    args)
            env)))

(let ((counter 0))
  (defun lookup-function (symbol env)
    (or (assoc symbol env)
        (assoc symbol *fenv*)
        (let ((name (symbol-name symbol))
              (binding
               (make-binding symbol
                             'function
                             (concat "f" (integer-to-string (incf counter)))
                             nil)))
          (push binding *fenv*)
          (push (lambda ()
                  (unless (binding-declared (assoc symbol *fenv*))
                    (error (concat "Undefined function `" name "'"))))
                *compilation-unit-checks*)
          binding)))

  (defun lookup-function-translation (symbol env)
    (binding-translation (lookup-function symbol env))))


(defvar *toplevel-compilations*)

(defun %compile-defvar (name)
  (let ((b (lookup-variable name *env*)))
    (mark-binding-as-declared b)
    (push (concat "var " (binding-translation b)) *toplevel-compilations*)))

(defun %compile-defun (name)
  (let ((b (lookup-function name *env*)))
    (mark-binding-as-declared b)
    (push (concat "var " (binding-translation b)) *toplevel-compilations*)))

(defun %compile-defmacro (name lambda)
  (push (make-binding name 'macro lambda t) *fenv*))


(defvar *compilations* nil)

(defun ls-compile-block (sexps env fenv)
  (join-trailing
   (remove nil (mapcar (lambda (x)
                         (ls-compile x env fenv))
                       sexps))
                 ";
"))
(defmacro define-compilation (name args &body body)
  ;; Creates a new primitive `name' with parameters args and
  ;; @body. The body can access to the local environment through the
  ;; variable ENV.
  `(push (list ',name (lambda (env fenv ,@args) ,@body))
         *compilations*))

(define-compilation if (condition true false)
  (concat "("
          (ls-compile condition env fenv)
          " ? "
          (ls-compile true env fenv)
          " : "
          (ls-compile false env fenv)
          ")"))

;;; Return the required args of a lambda list
(defun lambda-list-required-argument (lambda-list)
  (if (or (null lambda-list) (eq (car lambda-list) '&rest))
      nil
      (cons (car lambda-list) (lambda-list-required-argument (cdr lambda-list)))))

(defun lambda-list-rest-argument (lambda-list)
  (second (member '&rest lambda-list)))

(define-compilation lambda (lambda-list &rest body)
  (let ((required-arguments (lambda-list-required-argument lambda-list))
        (rest-argument (lambda-list-rest-argument lambda-list)))
    (let ((new-env (extend-local-env
                    (append (if rest-argument (list rest-argument))
                            required-arguments)
                    env)))
      (concat "(function ("
              (join (mapcar (lambda (x)
                              (lookup-variable-translation x new-env))
                            required-arguments)
                    ",")
              "){"
              *newline*
              (if rest-argument
                  (let ((js!rest (lookup-variable-translation rest-argument new-env)))
                    (concat "var " js!rest ";" *newline*
                            "for (var i = arguments.length-1; i>="
                            (integer-to-string (length required-arguments))
                            "; i--)" *newline*
                            js!rest " = "
                            "{car: arguments[i], cdr: " js!rest "};"
                            *newline*))
                  "")
              (concat (ls-compile-block (butlast body) new-env fenv)
                      "return " (ls-compile (car (last body)) new-env fenv) ";")
              *newline*
              "})"))))

(define-compilation fsetq (var val)
  (concat (lookup-function-translation var fenv)
          " = "
          (ls-compile val env fenv)))

(define-compilation setq (var val)
  (concat (lookup-variable-translation var env)
          " = "
           (ls-compile val env fenv)))

;;; Literals

(defun literal->js (sexp)
  (cond
    ((null sexp) "false")
    ((integerp sexp) (integer-to-string sexp))
    ((stringp sexp) (concat "\"" sexp "\""))
    ((symbolp sexp) (concat "{name: \"" (symbol-name sexp) "\"}"))
    ((consp sexp) (concat "{car: "
                          (literal->js (car sexp))
                          ", cdr: "
			  (literal->js (cdr sexp)) "}"))))

(let ((counter 0))
  (defun literal (form)
    (if (null form)
        (literal->js form)
        (let ((var (concat "l" (integer-to-string (incf counter)))))
          (push (concat "var " var " = " (literal->js form)) *toplevel-compilations*)
          var))))

(define-compilation quote (sexp)
  (literal sexp))

(define-compilation debug (form)
  (concat "console.log(" (ls-compile form env fenv) ")"))

(define-compilation while (pred &rest body)
  (concat "(function(){ while("
          (ls-compile pred env fenv)
          "){"
          (ls-compile-block body env fenv)
          "}})()"))

(define-compilation function (x)
  (cond
    ((and (listp x) (eq (car x) 'lambda))
     (ls-compile x env fenv))
    ((symbolp x)
     (lookup-function-translation x fenv))))

#+common-lisp
(defmacro eval-when-compile (&body body)
  `(eval-when (:compile-toplevel :load-toplevel :execute)
     ,@body))

(define-compilation eval-when-compile (&rest body)
  (eval (cons 'progn body))
  nil)

(defmacro define-transformation (name args form)
  `(define-compilation ,name ,args
     (ls-compile ,form env fenv)))

(define-transformation progn (&rest body)
  `((lambda () ,@body)))

(define-transformation let (bindings &rest body)
  (let ((bindings (mapcar #'ensure-list bindings)))
    `((lambda ,(mapcar 'car bindings) ,@body)
      ,@(mapcar 'cadr bindings))))

;;; A little backquote implementation without optimizations of any
;;; kind for lispstrack.
(defun backquote-expand-1 (form)
  (cond
    ((symbolp form)
     (list 'quote form))
    ((atom form)
     form)
    ((eq (car form) 'unquote)
     (car form))
    ((eq (car form) 'backquote)
     (backquote-expand-1 (backquote-expand-1 (cadr form))))
    (t
     (cons 'append
           (mapcar (lambda (s)
                     (cond
                       ((and (listp s) (eq (car s) 'unquote))
                        (list 'list (cadr s)))
                       ((and (listp s) (eq (car s) 'unquote-splicing))
                        (cadr s))
                       (t
                        (list 'list (backquote-expand-1 s)))))
                   form)))))

(defun backquote-expand (form)
  (if (and (listp form) (eq (car form) 'backquote))
      (backquote-expand-1 (cadr form))
      form))

(defmacro backquote (form)
  (backquote-expand-1 form))

(define-transformation backquote (form)
  (backquote-expand-1 form))

;;; Primitives

(define-compilation + (x y)
  (concat "((" (ls-compile x env fenv) ") + (" (ls-compile y env fenv) "))"))

(define-compilation - (x y)
  (concat "((" (ls-compile x env fenv) ") - (" (ls-compile y env fenv) "))"))

(define-compilation * (x y)
  (concat "((" (ls-compile x env fenv) ") * (" (ls-compile y env fenv) "))"))

(define-compilation / (x y)
  (concat "((" (ls-compile x env fenv) ") / (" (ls-compile y env fenv) "))"))

(define-compilation < (x y)
  (concat "((" (ls-compile x env fenv) ") < (" (ls-compile y env fenv) "))"))

(define-compilation = (x y)
  (concat "((" (ls-compile x env fenv) ") == (" (ls-compile y env fenv) "))"))

(define-compilation mod (x y)
  (concat "((" (ls-compile x env fenv) ") % (" (ls-compile y env fenv) "))"))

(define-compilation floor (x)
  (concat "(Math.floor(" (ls-compile x env fenv) "))"))

(define-compilation null (x)
  (concat "(" (ls-compile x env fenv) "== false)"))

(define-compilation cons (x y)
  (concat "{car: " (ls-compile x env fenv) ", cdr: " (ls-compile y env fenv) "}"))

(define-compilation car (x)
  (concat "(" (ls-compile x env fenv) ").car"))

(define-compilation cdr (x)
  (concat "(" (ls-compile x env fenv) ").cdr"))

(define-compilation setcar (x new)
  (concat "((" (ls-compile x env fenv) ").car = " (ls-compile new env fenv) ")"))

(define-compilation setcdr (x new)
  (concat "((" (ls-compile x env fenv) ").cdr = " (ls-compile new env fenv) ")"))

(define-compilation make-symbol (name)
  (concat "{name: " (ls-compile name env fenv) "}"))

(define-compilation symbol-name (x)
  (concat "(" (ls-compile x env fenv) ").name"))

(define-compilation eq (x y)
  (concat "(" (ls-compile x env fenv) " === " (ls-compile y env fenv) ")"))

(define-compilation equal (x y)
  (concat "(" (ls-compile x env fenv) " == " (ls-compile y env fenv) ")"))

(define-compilation string (x)
  (concat "String.fromCharCode(" (ls-compile x env fenv) ")"))

(define-compilation string-upcase (x)
  (concat "(" (ls-compile x env fenv) ").toUpperCase()"))

(define-compilation string-length (x)
  (concat "(" (ls-compile x env fenv) ").length"))

(define-compilation char (string index)
  (concat "("
          (ls-compile string env fenv)
          ").charCodeAt("
          (ls-compile index env fenv)
          ")"))

(define-compilation concat-two (string1 string2)
  (concat "("
          (ls-compile string1 env fenv)
          ").concat("
          (ls-compile string2 env fenv)
          ")"))

(define-compilation funcall (func &rest args)
  (concat "("
          (ls-compile func env fenv)
          ")("
          (join (mapcar (lambda (x)
                          (ls-compile x env fenv))
                        args)
                ", ")
          ")"))

(define-compilation error (string)
  (concat "(function (){ throw " (ls-compile string env fenv) ";" "return 0;})()"))

(define-compilation new ()
  "{}")

(define-compilation get (object key)
  (concat "(" (ls-compile object env fenv) ")[" (ls-compile key env fenv) "]"))

(define-compilation set (object key value)
  (concat "(("
          (ls-compile object env fenv)
          ")["
          (ls-compile key env fenv) "]"
          " = " (ls-compile value env fenv) ")"))

(defun macrop (x)
  (and (symbolp x) (eq (binding-type (lookup-function x *fenv*)) 'macro)))

(defun ls-macroexpand-1 (form &optional env fenv)
  (when (macrop (car form))
    (let ((binding (lookup-function (car form) *env*)))
      (if (eq (binding-type binding) 'macro)
          (apply (eval (binding-translation binding)) (cdr form))
          form))))

(defun compile-funcall (function args env fenv)
  (cond
    ((symbolp function)
     (concat (lookup-function-translation function fenv)
             "("
             (join (mapcar (lambda (x) (ls-compile x env fenv)) args)
                   ", ")
             ")"))
    ((and (listp function) (eq (car function) 'lambda))
     (concat "(" (ls-compile function env fenv) ")("
             (join (mapcar (lambda (x) (ls-compile x env fenv)) args)
                   ", ")
             ")"))
    (t
     (error "Invalid function designator ~a." function))))

(defun ls-compile (sexp &optional env fenv)
  (cond
    ((symbolp sexp) (lookup-variable-translation sexp env))
    ((integerp sexp) (integer-to-string sexp))
    ((stringp sexp) (concat "\"" sexp "\""))
    ((listp sexp)
     (if (assoc (car sexp) *compilations*)
         (let ((comp (second (assoc (car sexp) *compilations*))))
           (apply comp env fenv (cdr sexp)))
         (if (macrop (car sexp))
             (ls-compile (ls-macroexpand-1 sexp env fenv) env fenv)
             (compile-funcall (car sexp) (cdr sexp) env fenv))))))

(defun ls-compile-toplevel (sexp)
  (setq *toplevel-compilations* nil)
  (let ((code (ls-compile sexp)))
    (prog1
        (concat (join (mapcar (lambda (x) (concat x ";" *newline*))
                              *toplevel-compilations*)
                      "")
                code)
      (setq *toplevel-compilations* nil))))

#+common-lisp
(progn
  (defun read-whole-file (filename)
    (with-open-file (in filename)
      (let ((seq (make-array (file-length in) :element-type 'character)))
        (read-sequence seq in)
        seq)))

  (defun ls-compile-file (filename output)
    (setq *env* nil *fenv* nil)
    (setq *compilation-unit-checks* nil)
    (with-open-file (out output :direction :output :if-exists :supersede)
      (let* ((source (read-whole-file filename))
             (in (make-string-stream source)))
        (loop
           for x = (ls-read in)
           until (eq x *eof*)
           for compilation = (ls-compile-toplevel x)
           when (plusp (length compilation))
           do (write-line (concat compilation "; ") out))
        (dolist (check *compilation-unit-checks*)
          (funcall check))
        (setq *compilation-unit-checks* nil))))

  (defun bootstrap ()
    (ls-compile-file "lispstrack.lisp" "lispstrack.js")))
