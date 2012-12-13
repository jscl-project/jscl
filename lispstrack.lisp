;;; Utils

;;; simplify me, please
(defun concat (&rest strs)
  (reduce (lambda (s1 s2) (concatenate 'string s1 s2))
          strs
          :initial-value ""))

;;; Compiler

(defvar *compilations* nil)

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
  (concat "(function ("
          (format nil "~{V_~a~^, ~}" args)
          "){ "
          (ls-compile-block body (extend-env args env))
          "})
"))

(defun extend-env (args env)
  (append (mapcar #'list args) env))

(defparameter *env* '())
(defparameter *env-fun* '())


(defun ls-compile (sexp &optional env)
  (cond
    ((symbolp sexp) (if (assoc sexp env)
			(format nil "V_~a" sexp)
			(error "Undefined variable `~a'" sexp)))
    ((integerp sexp) (format nil " ~a " sexp))
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
