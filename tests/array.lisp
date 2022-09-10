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


;;; EOF
