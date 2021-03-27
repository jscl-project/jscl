;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/conditionals.lisp!")

;;;; Tests for conditional forms
; Boolean operators
(test (eql (and nil 1) nil))
(test (=   (and 1   2)   2))

(test (= (or  nil 1)   1))
(test (= (or  1   2)   1))

; COND
(test (eql nil (cond)))
(test (=   1   (cond (1))))
(test (= 1
         (let ((x 0))
           (cond ((incf x))))))
(test (=   2   (cond (1 2))))
(test (=   3   (cond (nil 1) (2 3))))
(test (eql nil (cond (nil 1) (nil 2))))

; CASE

(test (= (case 1 (2 3) (otherwise 42)) 42))
(test (= (case 1 (2 3) (t 42)) 42))
(test (= (case 1 (2 3) (1 42)) 42))
(test (null (case 1 (2 3))))

;;; EOF
