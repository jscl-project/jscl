;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/misc.lisp!")

;;; STEP macro
#+jscl
(test (= 4
         (step (progn (setf x 5) (decf x)))))

;;; EOF
