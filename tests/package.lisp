;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/package.lisp!")

(test (listp (list-all-packages)))

(test (not (eq (list-all-packages) (list-all-packages))))

(test (equal (multiple-value-list (do-symbols (symbol *package* (values 1 2)))) '(1 2)))

(make-package 'fubar)
(test (find-package 'fubar))
(delete-package "FUBAR")
(test (null (find-package 'fubar)))
(make-package 'fubar)
(delete-package 'fubar)
(test (null (find-package 'fubar)))
(make-package 'fubar)
(delete-package (find-package 'fubar))
(test (null (find-package 'fubar)))

(when (find-package 'foo)
     (delete-package (find-package 'foo)))
(test
 (let ((package (make-package 'foo :use '(cl)))
       foo-symbols
       cl-symbols)
   (do-symbols (symbol package)
     (push symbol foo-symbols))
   (do-external-symbols (symbol 'cl)
     (push symbol cl-symbols))
   (and (not (null foo-symbols))
        (equal foo-symbols cl-symbols))))

(when (find-package 'bar)
   (delete-package (find-package 'bar)))
(test
 (let* ((package (make-package 'bar))
        (baz (intern (string 'baz) package)))
   (let (symbols)
     (do-all-symbols (symbol)
       (push symbol symbols))
     (and (member 'car symbols)
          (member baz symbols)))))

(test (member 'car (find-all-symbols (string 'car))))

;;; This test is failing. I have disabled temporarily.
;;; note: Fixed ? @vkm
(test (eq (eval '(in-package #:cl-user)) (find-package '#:cl-user)))


;;; EOF
