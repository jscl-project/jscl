(defun ls-compile (sexp)
  (cond
    ((symbolp sexp) nil)
    ((integerp sexp) (format nil "~a" sexp))
    ; list
    ((case (first sexp)
       (if nil)
       (lambda nil)
       (t nil)))))

(defparameter *env-var* '())
(defparameter *env-fun* '())
