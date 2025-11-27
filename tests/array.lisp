;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/array.lisp!")

(test (arrayp #(1 2 3 4)))
(test (vectorp #(1 2 3 4)))
(test (not (vectorp (make-array '(3 3)))))

(let ((array (vector 1 2 3 4)))
  (setf (aref array 0) t)
  (test (eq (aref array 0) t)))

(let ((vector (make-array 20 :initial-element 3 :fill-pointer 0)))
  (test (= (length vector) 0))
  (setf (fill-pointer vector) 20)
  (test (= (length vector) 20)))

(test
 (mv-eql
  (let ((vector (make-array 10 :fill-pointer 1))
        (new-idx))
    (values
     (dotimes (i 10 new-idx)
       (push (vector-push i vector) new-idx))
     (vector-to-list vector)))
  (NIL 9 8 7 6 5 4 3 2 1)
  (NIL 0 1 2 3 4 5 6 7 8)))

;;; from clhs.lisp.se
(test
 (mv-eql
  (let (fable fa)
    (values
     (vector-push (setq fable (list 'fable))
                  (setq fa (make-array 8 
                                       :fill-pointer 2
                                       :initial-element 'first-one)))
     (fill-pointer fa)
     (eq (aref fa 2) fable)))
  2 3 t))

(test (equal '(2 3) (array-dimensions (make-array '(2 3)))))

(test (make-array '(2 3) :initial-contents '((1 2 3) (4 5 6))))

(let ((x (make-array '(2 3) :initial-contents '((1 2 3) (4 5 6)))))
  (expected-failure (aref x 0))
  (test (eql (aref x 0 0) 1))
  (test (eql (aref x 0 1) 2))
  (test (eql (aref x 0 2) 3))
  (test (eql (aref x 1 0) 4))
  (test (eql (aref x 1 1) 5))
  (test (eql (aref x 1 2) 6))
  (expected-failure (aref x 0 4))
  (expected-failure (aref x 2 0))
  (expected-failure (aref x 2 4))
  (expected-failure (aref x 0 0 0)))

(expected-failure (make-array '(2 3) :initial-contents '(1 2)))
(expected-failure (make-array '(3 2) :initial-contents
                              '((1 2 3) (4 5 6))))

;;; EOF
