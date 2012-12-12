;;; Utils

;;; simplify me, please
(defun concat (&rest strs)
  (reduce (lambda (s1 s2) (concatenate 'string s1 s2))
          strs
          :initial-value ""))

;;; Compiler

(defvar *compilations* nil)

(defmacro define-compilation (name args &body body)
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
          (ls-compile-block body env)
          "})
"))

(defparameter *env* '())
(defparameter *env-fun* '())

(defun ls-compile (sexp &optional env)
  (cond
    ((symbolp sexp) (format nil "V_~a" sexp))
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
