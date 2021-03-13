;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/eval.lisp!")


(test (= (eval '(+ 1 2)) 3))
(test (= 42 (progn
              (eval '(defun test-fun (x y)
                      (+ x y)))
              (eval '(test-fun 40 2)))))
;;; EOF
