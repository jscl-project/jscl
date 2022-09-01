;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/variables.lisp!")

(defvar *x*)
(setq *x* 0)

(let* ((*x* (progn
              (test (= *x* 0))
              (setq *x* 1)
              (test (= *x* 1))
              2)))
  (test (= *x* 2)))

(test (= *x* 1))


(defparameter *special-defparameter* 1)

(flet ((f ()
         *special-defparameter*))
  (let ((*special-defparameter* 2))
    (test (= (f) 2))))


(test (not (fboundp 'abc)))


;;; EOF
