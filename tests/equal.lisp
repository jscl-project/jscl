;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/equal.lisp!")


(test (equal '(1 2) '(1 2)))
(test (equal 1 1))
(test (equal "abc" "abc"))
(test (not (equal "abc" "def")))
(test (not (equal "Abc" "abc")))

(test (equalp '(1 2) '(1 2)))
(test (equalp 1 1))
(test (equalp "abc" "abc"))
(test (not (equalp "abc" "def")))
(test (equalp "Abc" "abc"))
(test (equalp #(1 2) #(1 2)))
(test (not (equalp #(1 2) #(1 3))))
(test (equalp #(1 2)
              (make-array 4 :initial-contents '(1 2 3 4) :fill-pointer 2)))
(test (not (equalp #(1 2 3 4)
                   (make-array 4 :initial-contents '(1 2 3 4) :fill-pointer 2))))
(test (equalp (make-array '(2 2) :initial-contents '((1 2) (3 4)))
              (make-array '(2 2) :initial-contents '((1 2) (3 4)))))
(test (not (equalp (make-array '(2 2) :initial-contents '((1 2) (3 4)))
                   (make-array '(2 2) :initial-contents '((1 2) (3 3))))))
(let ((x (make-hash-table))
      (y (make-hash-table)))
  (setf (gethash 1 x) 2)
  (test (not (equalp x y)))
  (setf (gethash 1 y) 3)
  (test (not (equalp x y)))
  (setf (gethash 1 y) 2)
  (test (equalp x y))
  (setf (gethash 2 x) #(1 2))
  (test (not (equalp x y)))
  (setf (gethash 2 y) #(1 2))
  (test (equalp x y)))


;;; EOF
