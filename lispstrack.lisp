(defun ls-compile (sexp)
  (cond
    ((symbolp sexp) nil)
    ((integerp sexp) (format nil " ~a " sexp))
    ((stringp sexp) (format nil " \"~a\" " sexp))
    ; list
    ((case (first sexp)
       (if (format nil "((~a)? (~a) : (~a))"
		   (ls-compile (second sexp))
		   (ls-compile (third sexp))
		   (ls-compile (fourth sexp))))
       (lambda nil)
       (t nil)))))

(defparameter *env-var* '())
(defparameter *env-fun* '())
