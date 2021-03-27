;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/equal.lisp!")


(test (equal '(1 2) '(1 2)))
(test (equal 1 1))
(test (equal "abc" "abc"))
(test (not (equal "abc" "def")))
(test (not (equal "Abc" "abc")))

;;; EOF
