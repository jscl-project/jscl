;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/apply.lisp!")

;;; Tests for funcall/apply

(test (equal (funcall #'list 1 2 3) '(1 2 3)))
(test (equal (apply #'list 1 2 3 '(4 5 6)) '(1 2 3 4 5 6)))

(test (equal (funcall #'funcall #'list 1 2 3) '(1 2 3)))
(test (equal (funcall #'apply #'list 1 2 3 '(4 5 6)) '(1 2 3 4 5 6)))

(test (equal (apply #'funcall #'list 1 2 3 '(4 5 6)) '(1 2 3 4 5 6)))
(test (equal (apply #'apply #'list 1 2 3 '(4 5 (6))) '(1 2 3 4 5 6)))

;;; EOF
