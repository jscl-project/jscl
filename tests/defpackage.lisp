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
