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
  (defun make-binding (symbol)
    (cons symbol (format nil "V_~d" (incf counter)))))

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

(defun ls-compile-sexps (sexps env)
  (concat (join (mapcar (lambda (x)
                          (concat (ls-compile x env) ";"))
                        sexps)
                "
")))

(defun ls-compile-block (sexps env)
  (concat (ls-compile-sexps (butlast sexps env) env)
          ";
return " (ls-compile (car (last sexps)) env) ";"))


(defun extend-env (args env)
  (append (mapcar #'make-binding args) env))

(defun ls-lookup (symbol env)
  (let ((binding (assoc symbol env)))
    (if binding
	(format nil "~a" (cdr binding))
	(error "Undefined variable `~a'"  symbol))))

(defmacro define-compilation (name args &body body)
  "creates a new primitive `name' with parameters args and @body. The
body can access to the local environment through the variable env"
  `(push (list ',name (lambda (env ,@args) ,@body))
         *compilations*))

(define-compilation if (condition true false)
  (format nil "((~a)? (~a) : (~a))"
          (ls-compile condition env)
          (ls-compile true env)
          (ls-compile false env)))

(define-compilation lambda (args &rest body)
  (let ((new-env (extend-env args env)))
    (concat "(function ("
	    (join (mapcar (lambda (x) (ls-lookup x new-env))
                          args)
                  ",")
	    "){
"
	    (ls-compile-block body new-env)
	    "
})")))

(define-compilation setq (var val)
  (format nil "~a = ~a" (ls-lookup var env) (ls-compile val env)))

(defun lisp->js (sexp)
  (cond
    ((integerp sexp) (format nil "~a" sexp))
    ((stringp sexp) (format nil "\"~a\"" sexp))
    ((listp sexp)   (concat "[" (join (mapcar 'lisp->js sexp) ",") "]"))))

(define-compilation quote (sexp)
  (lisp->js sexp))

(define-compilation debug (form)
  (format nil "console.log(~a)" (ls-compile form env)))

(defun compile-test ()
  (with-open-file (in "test.lisp")
    (with-open-file (out "test.js" :direction :output :if-exists :supersede)
      (loop
         for x = (read in nil) while x
         do (write-string (ls-compile x) out)))))

(define-compilation while (pred &rest body)
  (format nil "(function(){while(~a){~a}})() "
	  (ls-compile pred env)
	  (ls-compile-sexps body env)))

(define-compilation + (x y)
  (concat "((" (ls-compile x env) ") + (" (ls-compile y env) "))"))

(define-compilation - (x y)
  (concat "((" (ls-compile x env) ") - (" (ls-compile y env) "))"))

(define-compilation * (x y)
  (concat "((" (ls-compile x env) ") * (" (ls-compile y env) "))"))

(define-compilation / (x y)
  (concat "((" (ls-compile x env) ") / (" (ls-compile y env) "))"))


(defparameter *env* '())
(defparameter *env-fun* '())

(defun ls-compile (sexp &optional env)
  (cond
    ((symbolp sexp) (ls-lookup sexp env))
    ((integerp sexp) (format nil "~a" sexp))
    ((stringp sexp) (format nil " \"~a\" " sexp))
    ((listp sexp)
     (let ((compiler-func (second (assoc (car sexp) *compilations*))))
       (if compiler-func
           (apply compiler-func env (cdr sexp))
	   (funcall (ls-compile (car sexp) env)  )
           ;; funcall
           )))))
