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

(make-package 'fubar)

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

(when (find-package 'foo)
  (delete-package (find-package 'foo)))
(when (find-package 'bar)
  (delete-package (find-package 'bar)))
(when (find-package 'baz)
  (delete-package (find-package 'baz)))
(test
 (let* ((package (make-package 'foo :nicknames '(bar baz)))
        (symbol (intern (string 'foo) package))
        bar-symbols baz-symbols)
   (do-symbols (symbol 'bar)
     (push symbol bar-symbols))
   (do-symbols (symbol 'baz)
     (push symbol baz-symbols))
   (and (eq package (find-package 'bar))
        (eq package (find-package 'baz))
        (member symbol bar-symbols)
        (member symbol baz-symbols))))

;;; (UN)USE-PACKAGE
(when (find-package 'foo)
  (delete-package (find-package 'foo)))
(test (let ((package (make-package 'foo :use '(cl))))
        (and (eq (find-symbol (string 'car) package) 'cl::car)
             (unuse-package 'cl package)
             (eq (find-symbol (string 'car) package) nil)
             (use-package 'cl package)
             (eq (find-symbol (string 'car) package) 'cl::car))))

(when (find-package 'foo)
  (delete-package (find-package 'foo)))
(when (find-package 'bar)
  (delete-package (find-package 'bar)))
(test (let ((foo (make-package 'foo :use '(cl)))
            (bar (make-package 'bar :use '(foo))))
        (and (export 'cl:cdr foo)
             (eq (find-symbol (string 'cdr) bar) 'cl::cdr)
             (delete-package foo)
             ;; Delete FOO unuses it in BAR
             (eq (find-symbol (string 'cdr) bar) nil)
             (eq (package-use-list bar) nil))))

;;; UNEXPORT
(when (find-package 'foo)
  (delete-package (find-package 'foo)))
(when (find-package 'bar)
  (delete-package (find-package 'bar)))
(test
 (let* ((foo (make-package 'foo))
        (bar (make-package 'bar))
        (sym (intern (string 'foo) foo)))
   (and (export sym foo)
        (use-package foo bar)
        (eq (find-symbol (string 'foo) bar) sym)
        (unexport sym foo)
        (eq (find-symbol (string 'foo) bar) nil))))

;;; UNINTERN
(when (find-package 'foo)
  (delete-package (find-package 'foo)))
(when (find-package 'bar)
  (delete-package (find-package 'bar)))
(test
 (let* ((foo (make-package 'foo))
        (bar (make-package 'bar))
        (sym (intern (string 'foo) foo)))
   (and (export sym foo)
        (use-package foo bar)
        (eq (find-symbol (string 'foo) bar) sym)
        (unintern sym foo)
        (eq (find-symbol (string 'foo) foo) nil)
        (eq (find-symbol (string 'foo) bar) nil))))

;;; EXPORT should not export inaccessible symbol
(when (find-package 'foo)
  (delete-package (find-package 'foo)))
(test
 (let ((foo (make-package 'foo)))
   (and (not (ignore-errors (export 'cl:car foo) t))
        (eq (find-symbol (string 'car) foo) nil))))

;;; SHADOWING-IMPORT
(when (find-package 'foo)
  (delete-package (find-package 'foo)))
(when (find-package 'bar)
  (delete-package (find-package 'bar)))
(test
 (let* ((foo (make-package 'foo))
        (bar (make-package 'bar :use '(cl)))
        (symbol (intern (string 'car) 'foo)))
   (and (not (ignore-errors (import symbol bar) t))
        (shadowing-import symbol bar)
        (eq (find-symbol (string 'car) bar) symbol)
        (unintern symbol bar)
        (eq (find-symbol (string 'car) bar) 'cl:car))))


(test (member 'car (find-all-symbols (string 'car))))

;;; This test is failing. I have disabled temporarily.
;;; note: Fixed ? @vkm
(test (eq (eval '(in-package #:cl-user)) (find-package '#:cl-user)))


;;; EOF
