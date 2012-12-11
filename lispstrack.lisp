(defun ls-compile (sexp &optional env)
  (cond
    ((symbolp sexp) (format nil "V_~a" sexp))
    ((integerp sexp) (format nil " ~a " sexp))
    ((stringp sexp) (format nil " \"~a\" " sexp))
    ; list
    ((case (first sexp)
       (if (format nil "((~a)? (~a) : (~a))"
		   (ls-compile (second sexp))
		   (ls-compile (third sexp))
		   (ls-compile (fourth sexp))))
       (lambda (concat "(function ("
		(format nil "~{V_~a~^, ~}" (second sexp))
		"){ "
		(ls-compile-block (cddr sexp) env)
		"})
")) 			; (function (params) { body })
       (t nil)))))

;;; simplify me, please
(defun concat (&rest strs)
  (reduce (lambda (s1 s2) (concatenate 'string s1 s2))
          strs
          :initial-value ""))

(defun ls-compile-block (sexps env)
  (format nil
	  "~{~#[~; return ~a;~:;~a;~%~]~}"
	  (mapcar #'(lambda (x)
		      (ls-compile x env))
		  sexps)))

(defparameter *env* '())


(defparameter *env-fun* '())
