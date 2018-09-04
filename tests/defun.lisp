;;;; Tests for DEFUN

;;; Regression test for #111
(test (eql (defun foo () "foo's" ()) 'foo))


;;; Body, declarations and docstrings

(let ((actual
       (multiple-value-list
        (parse-body '((declare (integerp x)) "foo" 3)
                    :declarations t
                    :docstring t))))

  (test (equal actual '((3) ((DECLARE (INTEGERP X))) "foo"))))

(let ((actual
       (multiple-value-list
        (parse-body '((declare (integerp x)) "foo")
                    :declarations t
                    :docstring t))))

  (test (equal actual '(("foo") ((DECLARE (INTEGERP X))) nil))))


(let ((actual
       (multiple-value-list
        (parse-body '("foo" 3)
                    :declarations t
                    :docstring t))))

  (test (equal actual '((3) nil "foo"))))


;;; (defun (setf )) test

(progn
  (defun fn1 (arg1 arg2) 
    (list arg1 arg2))

  (defun (setf fn1) (new arg1 arg2) 
    (list new arg1 arg2))

  (defun (setf fn2) (new arg1 &optional (arg2 2) (arg3 3))
    (list new arg1 arg2 arg3))


  (defun (setf %cadr%) (value lst) (rplaca (cdr lst) value))

  (test (equal '(2 3) (fn1 2 3)))
  (test (equal '(1 2 3) (setf (fn1 2 3) 1)))
  (test (equal '(4 1 2 3) (setf (fn2 1) 4)))
  (test (equal '(4 5 6 7) (setf (fn2 5 6 7) 4)))
  (let ((qq '(1 2 3)))
    (test (equal '(99 3) (setf (%cadr% qq) 99)))
    (test (equal '(1 99 3) qq))))
