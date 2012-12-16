;;; Utils

(defmacro while (condition &body body)
  `(do ()
       ((not ,condition))
     ,@body))

;;; simplify me, please
(defun concat (&rest strs)
  (reduce (lambda (s1 s2) (concatenate 'string s1 s2))
          strs
          :initial-value ""))

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
  (if (streamp stream)
      (peek-char nil stream nil)
      (and (< (cdr stream) (length (car stream)))
           (char (car stream) (cdr stream)))))

(defun %read-char (stream)
  (if (streamp stream)
      (read-char stream nil)
      (and (< (cdr stream) (length (car stream)))
           (prog1 (char (car stream) (cdr stream))
             (incf (cdr stream))))))

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
    (while (and ch (eql ch #\;))
      (read-until stream (lambda (x) (eql x #\newline)))
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
         (#\+
          (let ((feature (read-until stream #'terminalp)))
            (cond
              ((string= feature "common-lisp")
               (ls-read stream);ignore
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

(let ((counter 0))
  (defun make-var-binding (symbol)
    (cons symbol (concat "v" (integer-to-string (incf counter))))))

(let ((counter 0))
  (defun make-func-binding (symbol)
    (cons symbol (concat "f" (integer-to-string (incf counter))))))

(defvar *compilations* nil)

(defun ls-compile-block (sexps env fenv)
  (concat (join (mapcar (lambda (x)
                          (concat (ls-compile x env fenv) ";"))
                        sexps)
                ";
")))

(defun extend-env (args env)
  (append (mapcar #'make-var-binding args) env))

(defparameter *env* '())
(defparameter *fenv* '())

(defun ls-lookup (symbol env)
  (let ((binding (assoc symbol env)))
    (and binding (cdr binding))))

(defun lookup-variable (symbol env)
  (or (ls-lookup symbol env)
      (ls-lookup symbol *env*)
      (error "Undefined variable `~a'"  symbol)))

(defun lookup-function (symbol env)
  (or (ls-lookup symbol env)
      (ls-lookup symbol *fenv*)
      (error "Undefined function `~a'"  symbol)))

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
    (let ((new-env (extend-env (cons rest-argument required-arguments) env)))
      (concat "(function ("
              (join (mapcar (lambda (x) (lookup-variable x new-env))
                            required-arguments)
                    ",")
              "){
"
              (if rest-argument
                  (concat "var " (lookup-variable rest-argument new-env)
                          " = arguments.slice("
                          (prin1-to-string (length required-arguments)) ");
")
                  "")

              (concat (ls-compile-block (butlast body) new-env fenv)
                      "return " (ls-compile (car (last body)) new-env fenv) ";")
              "
})"))))

(define-compilation fsetq (var val)
  (concat (lookup-function var fenv)
          " = "
          (ls-compile val env fenv)))

(define-compilation setq (var val)
  (concat (lookup-variable var env)
          " = "
           (ls-compile val env fenv)))


;;; Literals

(defvar *literals* '())

(defun literal->js (sexp)
  (cond
    ((null sexp) "undefined")
    ((integerp sexp) (integer-to-string sexp))
    ((stringp sexp) (concat "\"" sexp "\""))
    ((symbolp sexp) (concat "{name: \"" (symbol-name sexp) "\"}"))
    ((consp sexp) (concat "{car: "
                          (literal->js (car sexp))
                          ", cdr: "
			  (literal->js (cdr sexp)) "}"))))

(let ((counter 0))
  (defun literal (form)
    (let ((var (concat "l" (integer-to-string (incf counter)))))
      (push (cons var (literal->js form)) *literals*)
      var)))

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
     (lookup-function x fenv))))

(defmacro eval-when-compile (&body body)
  `(eval-when (:compile-toplevel :execute)
     ,@body))

(defvar *eval-when-compilations*)
(define-compilation eval-when-compile (&rest body)
  (setq *eval-when-compilations* "")
  (eval (cons 'progn body))
  (if (string= *eval-when-compilations* "")
      nil
      *eval-when-compilations*))

(defmacro define-transformation (name args form)
  `(define-compilation ,name ,args
     (ls-compile ,form env fenv)))

(define-transformation progn (&rest body)
  `((lambda () ,@body)))

(define-transformation let (bindings &rest body)
  `((lambda ,(mapcar 'car bindings) ,@body)
    ,@(mapcar 'cadr bindings)))

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

(define-compilation = (x y)
  (concat "((" (ls-compile x env fenv) ") == (" (ls-compile y env fenv) "))"))

(define-compilation cons (x y)
  (concat "{car: " (ls-compile x env fenv) ", cdr: " (ls-compile y env fenv) "}"))

(define-compilation car (x)
  (concat "(" (ls-compile x env fenv) ").car"))

(define-compilation cdr (x)
  (concat "(" (ls-compile x env fenv) ").cdr"))

(define-compilation symbol-name (x)
  (concat "(" (ls-compile x env fenv) ").name"))

(define-compilation eq (x y)
  (concat "(" (ls-compile x env fenv) " === " (ls-compile y env fenv) ")"))

(define-compilation code-char (x)
  (concat "String.fromCharCode( " (ls-compile x env fenv) ")"))


(defmacro with-eval-when-compilation (&body body)
  `(setq *eval-when-compilations*
         (concat *eval-when-compilations* (progn ,@body))))

(defun %compile-defvar (name)
  (push (make-var-binding name) *env*)
  (with-eval-when-compilation
    (concat "var " (lookup-variable name *env*))))

(defun %compile-defun (name)
  (push (make-func-binding name) *fenv*)
  (with-eval-when-compilation
    (concat "var " (lookup-variable name *fenv*))))

(defun %compile-defmacro (name lambda)
  (push (cons name (cons 'macro lambda)) *fenv*))

(defun ls-macroexpand-1 (form &optional env fenv)
  (let ((function (cdr (assoc (car form) *fenv*))))
    (if (and (listp function) (eq (car function) 'macro))
        (apply (eval (cdr function)) (cdr form))
        form)))

(defun compile-funcall (function args env fenv)
  (cond
    ((symbolp function)
     (concat (lookup-function function fenv)
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
    ((symbolp sexp) (lookup-variable sexp env))
    ((integerp sexp) (integer-to-string sexp))
    ((stringp sexp) (concat "\"" sexp "\""))
    ((listp sexp)
     (let ((sexp (ls-macroexpand-1 sexp env fenv)))
       (let ((compiler-func (second (assoc (car sexp) *compilations*))))
         (if compiler-func
             (apply compiler-func env fenv (cdr sexp))
             (compile-funcall (car sexp) (cdr sexp) env fenv)))))))

(defun ls-compile-toplevel (sexp)
  (setq *literals* nil)
  (let ((code (ls-compile sexp)))
    (prog1
        (concat (join (mapcar (lambda (lit)
                                (concat "var " (car lit) " = " (cdr lit) ";
"))
                              *literals*)
                      "")
                code)
      (setq *literals* nil))))

(defun ls-compile-file (filename output)
  (with-open-file (in filename)
    (with-open-file (out output :direction :output :if-exists :supersede)
      (loop
         for x = (ls-read in)
         until (eq x *eof*)
         for compilation = (ls-compile-toplevel x)
         when compilation do (write-line (concat compilation "; ") out)))))


;;; Testing
(defun compile-test ()
  (ls-compile-file "test.lisp" "test.js"))
