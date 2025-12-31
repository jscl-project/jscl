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

(defun delete-test-packages ()
  ;; Delete in reverse order of possible USE dependency
  (when (find-package 'baz)
    (delete-package (find-package 'baz)))
  (when (find-package 'bar)
    (delete-package (find-package 'bar)))
  (when (find-package 'foo)
    (delete-package (find-package 'foo))))

(delete-test-packages)
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

(delete-test-packages)
(test
 (let* ((package (make-package 'bar))
        (baz (intern (string 'baz) package)))
   (let (symbols)
     (do-all-symbols (symbol)
       (push symbol symbols))
     (and (member 'car symbols)
          (member baz symbols)))))

(delete-test-packages)
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
(delete-test-packages)
(test (let ((package (make-package 'foo :use '(cl))))
        (and (eq (find-symbol (string 'car) package) 'cl::car)
             (unuse-package 'cl package)
             (eq (find-symbol (string 'car) package) nil)
             (use-package 'cl package)
             (eq (find-symbol (string 'car) package) 'cl::car))))

(delete-test-packages)
(test (let ((foo (make-package 'foo :use '(cl)))
            (bar (make-package 'bar :use '(foo))))
        (and (export 'cl:cdr foo)
             (eq (find-symbol (string 'cdr) bar) 'cl::cdr)
             (delete-package bar)
             (eq (package-used-by-list foo) nil))))

;;; UNEXPORT
(delete-test-packages)
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
(delete-test-packages)
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
(delete-test-packages)
(test
 (let ((foo (make-package 'foo)))
   (and (handler-case
            (progn (export 'cl:car foo) nil)
          (package-error () t)
          (error () nil))
        (eq (find-symbol (string 'car) foo) nil))))

;;; SHADOWING-IMPORT
(delete-test-packages)
(test
 (let* ((foo (make-package 'foo))
        (bar (make-package 'bar :use '(cl)))
        (symbol (intern (string 'car) 'foo)))
   (and (handler-case
            (progn (import symbol bar) nil)
          (package-error () t)
          (error () nil))
        (shadowing-import symbol bar)
        (eq (find-symbol (string 'car) bar) symbol)
        (unintern symbol bar)
        (eq (find-symbol (string 'car) bar) 'cl:car))))


(test (member 'car (find-all-symbols (string 'car))))

;;; Make sure we don't mess up translation of symbol NIL and T
(test (do-external-symbols (var 'cl)
        (when (eq var nil) (return t))))
(test (do-external-symbols (var 'cl)
        (when (eq var t) (return t))))

;;; This test is failing. I have disabled temporarily.
;;; note: Fixed ? @vkm
(test (eq (eval '(in-package #:cl-user)) (find-package '#:cl-user)))

;;; Keywords are self-evaluating
(test (eq (symbol-value :obscure-kw-12345) :obscure-kw-12345))
(test (let ((kw (intern "obscure ###" "KEYWORD")))
        (eq (symbol-value kw) kw)))

;;; EOF
