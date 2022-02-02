;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/defun.lisp!")

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
    (test (equal '(1 99 3) qq)))

  (test (fdefinition '(setf fn1))))

;;; push/pop/incf/decf test
#+jscl
(progn
  ;; getter
  (defun getr (r idx) 
    (aref r idx))
  ;; setter
  (defun (setf getr) (value r idx) 
    (setf (aref r idx) value))
  (let ((r #(nil nil nil)))
    ;; initial values 
    (setf (getr r 0) 1)
    (setf (getr r 1) (list :tail))
    ;; push
    (dolist (it '(3 2 1)) 
      (push it (getr r 2)))
    ;; pop
    (dotimes (it (length (getr r 2)))
      (push (pop (getr r 2)) (getr r 1)))
    ;; incf
    (dotimes (i 10)
      (incf (getr r 0)))
    (equal '(11 (3 2 1 :tail) nil) 
           (vector-to-list r))))
;;; EOF
