;;; Utils

;;; simplify me, please
(defun concat (&rest strs)
  (reduce (lambda (s1 s2) (concatenate 'string s1 s2))
          strs
          :initial-value ""))


(let ((counter 0))
  (defun make-binding (symbol)
    (cons symbol (format nil "V_~d" (incf counter)))))

;;; Compiler

(defvar *compilations* nil)

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
	    (format nil "~{~a~^, ~}" (mapcar
				      (lambda (x) (ls-lookup x new-env))
				      args))
	    "){ "
	    (ls-compile-block body new-env)
	    "})
")))

(define-compilation setq (var val)
  (format nil "~a = ~a" (ls-lookup var env) (ls-compile val env)))

(define-compilation quote (sexp)
  (cond
    ((integerp sexp) (format nil "~a" sexp))
    ((stringp sexp) (format nil "\"~a\"" sexp))
    ((listp sexp)   (format nil "[~{~a~^, ~}]" sexp))))

(defparameter *env* '())
(defparameter *env-fun* '())

(defun ls-compile (sexp &optional env)
  (cond
    ((symbolp sexp) (ls-lookup sexp env))
    ((integerp sexp) (format nil "~a" sexp))
    ((stringp sexp) (format nil " \"~a\" " sexp))
					; list
    ((listp sexp)
     (let ((compiler-func (second (assoc (car sexp) *compilations*))))
       (if compiler-func
           (apply compiler-func env (cdr sexp))
           ;; funcall
           )))))

(defun ls-compile-block (sexps env)
  (format nil
    "~{~#[~; return ~a;~:;~a;~%~]~}"
    (mapcar #'(lambda (x)
		      (ls-compile x env))
		  sexps)))
