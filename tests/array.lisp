;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/array.lisp!")

(test (arrayp #(1 2 3 4)))
(test (vectorp #(1 2 3 4)))
(test (not (vectorp (make-array '(3 3)))))

(let ((array #(1 2 3 4)))
  (setf (aref array 0) t)
  (test (eq (aref array 0) t)))

(let ((vector (make-array 20 :initial-element 3 :fill-pointer 0)))
  (test (= (length vector) 0))
  (setf (fill-pointer vector) 20)
  (test (= (length vector) 20)))

;;; EOF
