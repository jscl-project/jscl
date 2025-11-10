;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/setf.lisp!")

(test (= 2
         (let ((x 0))
           (incf x (setf x 1))
           x)))

(test (equal '(nil (x 1 a 3) (1 a 3))
             (let ((x (cons 'a 'b))
                   (y (list 1 2 3)))
               (list (psetf (car x) 'x (cadr y) (car x) (cdr x) y)
                     x y))))

(test (equal '(trash (2 3) (1 hi there))
             (let ((x (list 1 2 3))
                   (y 'trash))
               (list (shiftf y x (cdr x) '(hi there))
                     x y))))

(test (equal '(b z (a (c) . q))
             (let ((x (list 'a 'b 'c)))
               (list (shiftf (cadr x) 'z)
                     (shiftf (cadr x) (cddr x) 'q)
                     x))))

(test (equal '(b (a z c d))
             (let ((n 0)
                   (x (list 'a 'b 'c 'd)))
               (list (shiftf (nth (setq n (+ n 1)) x) 'z)
                     x))))

(test (equal '(a c d b e f g)
             (let ((n 0)
                   (x (list 'a 'b 'c 'd 'e 'f 'g)))
               (rotatef (nth (incf n) x)
                        (nth (incf n) x)
                        (nth (incf n) x))
               x)))

;;; EOF
