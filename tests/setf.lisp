;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/setf.lisp!")

(test (= 2
         (let ((x 0))
           (incf x (setf x 1))
           x)))
;;; EOF
