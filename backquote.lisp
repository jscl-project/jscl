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

;;; Tests. Compare backquote agains the backquote of the host Lisp.
(macrolet ((test (form1 form2)
             `(assert (equal ,form1 ,form2))))
  (test (backquote (1 2 3 4))
        `(1 2 3 4))
  (test (backquote (1 2 (+ 3 4)))
        `(1 2 (+ 3 4)))
  (test (backquote (1 2 (unquote (+ 3 4))))
        `(1 2 ,(+ 3 4)))
  (test (backquote (1 2 (unquote-splicing '(3 4))))
        `(1 2 ,@'(3 4)))
  (test (backquote (backquote x))
        ``x)
  (let ((x 10))
    (test `',x
          (backquote (quote (unquote x)))))
  (let ((x 10))
    (test (eval ``(,,x))
          (eval (backquote (backquote ((unquote (unquote x)))))))))
