;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/defpackage.lisp!")

;;; Tests for defpackage

(test (defpackage :test-package))       ; we just define it
(test (eq (defpackage :test-package) (find-package :test-package)))

;; Since we didn't use `:use` before, we expect no exported symbols
(test (eq (find-symbol "CAR" :test-package) nil))
;; We redefine the package
(test (eq (defpackage :test-package (:use cl)) (find-package :test-package)))
;; Now we expect there to be symbols
(test (eq (find-symbol "CAR" :test-package) 'cl::car))

(delete-package :test-package)

(test (defpackage :test-package (:import-from cl cdr)))
(test (eq (find-symbol "CDR" :test-package) 'cl::cdr))

(delete-package :test-package)

(test (defpackage :test-package (:export cdr) (:import-from cl cdr)))
(test (eq (nth-value 1 (find-symbol "CDR" :test-package)) :external))

(delete-package :test-package)
(test (defpackage :test-package (:shadowing-import-from cl cdr) (:intern foo) (:shadow bar)))
(test (eq (nth-value 1 (find-symbol "CDR" :test-package)) :internal))
(test (eq (nth-value 1 (find-symbol "FOO" :test-package)) :internal))
(test (eq (nth-value 1 (find-symbol "BAR" :test-package)) :internal))
(test (= (length (package-shadowing-symbols :test-package)) 2))
