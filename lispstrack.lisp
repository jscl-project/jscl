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


(let ((counter 0))
  (defun make-var-binding (symbol)
    (cons symbol (format nil "v~d" (incf counter)))))

(let ((counter 0))
  (defun make-func-binding (symbol)
    (cons symbol (format nil "f~d" (incf counter)))))


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

;;; Compiler

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
    (and binding (format nil "~a" (cdr binding)))))

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
  (format nil "((~a)? (~a) : (~a))"
          (ls-compile condition env fenv)
          (ls-compile true env fenv)
          (ls-compile false env fenv)))

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
  (format nil "~a = ~a" (lookup-function var fenv) (ls-compile val env fenv)))

(define-compilation setq (var val)
  (format nil "~a = ~a" (lookup-variable var env) (ls-compile val env fenv)))


;;; Literals

(defvar *literals* '())

(defun literal->js (sexp)
  (cond
    ((null sexp) "undefined")
    ((integerp sexp) (format nil "~a" sexp))
    ((stringp sexp) (format nil "\"~a\"" sexp))
    ((symbolp sexp) (format nil "{name: \"~a\"}" (symbol-name sexp)))
    ((consp sexp) (concat "{car: "
                          (literal->js (car sexp))
                          ", cdr: "
			  (literal->js (cdr sexp)) "}"))))

(let ((counter 0))
  (defun literal (form)
    (let ((var (format nil "l~d" (incf counter))))
      (push (cons var (literal->js form)) *literals*)
      var)))

(define-compilation quote (sexp)
  (literal sexp))

(define-compilation debug (form)
  (format nil "console.log(~a)" (ls-compile form env fenv)))

(define-compilation while (pred &rest body)
  (format nil "(function(){while(~a){~a}})() "
	  (ls-compile pred env fenv)
	  (ls-compile-block body env fenv)))

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

;;; aritmetic primitives
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



(defmacro with-eval-when-compilation (&body body)
  `(setq *eval-when-compilations*
         (concat *eval-when-compilations* (progn ,@body))))

(defun %compile-defvar (name)
  (push (make-var-binding name) *env*)
  (with-eval-when-compilation
    (format nil "var ~a" (lookup-variable name *env*))))

(defun %compile-defun (name)
  (push (make-func-binding name) *fenv*)
  (with-eval-when-compilation
    (format nil "var ~a" (lookup-variable name *fenv*))))

(defun %compile-defmacro (name lambda)
  (push (cons name (cons 'macro lambda)) *fenv*))

(defun compile-funcall (name args env fenv)
  (format nil "~a(~{~a~^, ~})"
          (lookup-function name fenv)
          (mapcar (lambda (x) (ls-compile x env fenv)) args)))

(defun ls-macroexpand-1 (form &optional env fenv)
  (let ((function (cdr (assoc (car form) *fenv*))))
    (if (and (listp function) (eq (car function) 'macro))
        (apply (eval (cdr function)) (cdr form))
        form)))

(defun ls-compile (sexp &optional env fenv)
  (cond
    ((symbolp sexp) (lookup-variable sexp env))
    ((integerp sexp) (format nil "~a" sexp))
    ((stringp sexp) (format nil "\"~a\"" sexp))
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
         for x = (read in nil) while x
         for compilation = (ls-compile-toplevel x)
         when compilation do (write-line (concat compilation "; ") out)))))


;;; Testing

(defun compile-test ()
  (ls-compile-file "test.lisp" "test.js"))
