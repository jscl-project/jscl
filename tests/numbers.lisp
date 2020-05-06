;;;; Tests for numeric functions

;;; ABS
(test (= (abs  3) 3))
(test (= (abs -3) 3))

;;; MAX
(test (= (max 1)     1))
(test (= (max 1 2 3) 3))
(test (= (max 3 2 1) 3))
(test (= (max 1 2 3 4 5) 5))

;;; MIN
(test (= (min 1)     1))
(test (= (min 1 2 3) 1))
(test (= (min 3 2 1) 1))
(test (= (min 9 3 8 7 6 3 3) 3))

;;; EVENP
(test      (evenp  2))
(test      (evenp -2))
(test (not (evenp  1)))
(test      (evenp  0))

;;; ODDP
(test      (oddp  3))
(test      (oddp -3))
(test (not (oddp  2)))
(test (not (oddp  0)))

;;; +, -, *, /
;;; The builtin definition of these is variadic, but the function definition
;;; should be as well. So, test it using MAPCAR
(let* ((a '(1 2))
       (b a)
       (c a))
  (test (equal (mapcar #'+ a b c) '( 3  6)))
  (test (equal (mapcar #'- a b c) '(-1 -2)))
  (test (equal (mapcar #'* a b c) '( 1  8)))
  ;; This test will need to be changed when rationals are introduced
  (test (equal (mapcar #'/ a b c) '( 1  0.5))))

;;; >, >=, =, <, <=, /=
;;; As above, we need to make sure the function is called, not the builtin
(let ((a '(1 3 1 2 1))
      (b '(2 2 2 2 1))
      (c '(3 1 2 1 1)))
  (test (equal (mapcar #'>  a b c) '(nil   t nil nil nil)))
  (test (equal (mapcar #'>= a b c) '(nil   t nil   t   t)))
  (test (equal (mapcar #'=  a b c) '(nil nil nil nil   t)))
  (test (equal (mapcar #'<  a b c) '(  t nil nil nil nil)))
  (test (equal (mapcar #'<= a b c) '(  t nil   t nil   t)))
  (test (equal (mapcar #'/= a b c) '(  t   t nil nil nil))))

;;; INTEGERP
(test (integerp  1))
(test (integerp -1))
(test (integerp  0))

;;; FLOATP

;; It is a known bug. Javascript does not distinguish between floats
;; and integers, and we represent both numbers in the same way. So 1
;; == 1.0 and integer and float types are not disjoint.
(expected-failure (floatp 1.0)) 

(test             (floatp    1.1))
(test             (floatp    pi))
(test             (floatp (- pi)))
(test        (not (floatp    1)))

;;; GCD
(test (= 0 (gcd)))
(test (= 6 (gcd 60 42)))
(test (= 1 (gcd 3333 -33 101)))
(test (= 11 (gcd 3333 -33 1002001)))
(test (= 7 (gcd 91 -49)))
(test (= 7 (gcd 63 -42 35)))
(test (= 5 (gcd 5)))
(test (= 4 (gcd -4)))

;;; LCM
(test (= 10 (lcm 10)))
(test (= 150 (lcm 25 30)))
(test (= 360 (lcm -24 18 10)))
(test (= 70 (lcm 14 35)))
(test (= 0 (lcm 0 5)))
(test (= 60 (lcm 1 2 3 4 5 6)))


;;; Floor, Ceil, Truncate and Round

(test (equal (multiple-value-list (floor 0))        '(0 0)))
(test (equal (multiple-value-list (floor 1))        '(1 0)))
(test (equal (multiple-value-list (floor -1))       '(-1 0)))
(test (equal (multiple-value-list (floor 4 3))      '(1 1)))
(test (equal (multiple-value-list (floor -4 3))     '(-2 2)))
(test (equal (multiple-value-list (floor 4 -3))     '(-2 -2)))
(test (equal (multiple-value-list (floor -4 -3))    '(1 -1)))

(test (multiple-value-bind (quotient reminder)
          (floor 1.2)
        (and (= quotient 1)
             (= (+ (* quotient 1) reminder) 1.2))))

(test (multiple-value-bind (quotient reminder)
          (floor -1.2)
        (and (= quotient -2)
             (= (+ (* quotient 1) reminder) -1.2))))

(test (= (ceiling 0) 0))
(test (= (ceiling 1) 1))
(test (= (ceiling -1) -1))
(test (= (ceiling 1.2) 2))
(test (= (ceiling -1.2) -1))
(test (= (ceiling 4 3) 2))
(test (= (ceiling -4 3) -1))
(test (= (ceiling 4 -3) -1))
(test (= (ceiling -4 -3) 2))

(test (= (truncate 0) 0))
(test (= (truncate 1) 1))
(test (= (truncate -1) -1))
(test (= (truncate 1.2) 1))
(test (= (truncate -1.2) -1))
(test (= (truncate 4 3) 1))
(test (= (truncate -4 3) -1))
(test (= (truncate 4 -3) -1))
(test (= (truncate -4 -3) 1))

(let* ((term-width 80)
       (char-positions '(10 100 250 795))
       (find-row (lambda (chpos columns) (ceiling chpos columns)))
       (find-col (lambda (chpos columns) (rem chpos columns)))
       (cursor-position (lambda (chpos width)
                         (values (ceiling chpos width) (rem chpos width))))
       (s1 (mapcar (lambda (x)
                    (multiple-value-bind (row col)
                      (funcall cursor-position x term-width)
                     (list row col))) char-positions))

       (s2 (mapcar (lambda (x)
                    (list (funcall find-row x term-width)
                          (funcall find-col x term-width))) char-positions)))
 ;; ((1 10) (2 20) (4 10) (10 75))
 (test (equal s1 s2)))


(defmacro g!tl (fn number divisor result) `(list ',fn ,number ,divisor ,result))

(let* ((test-tuples
         (list
          (g!tl rem -1 5  -1)
          (g!tl mod -1 5  4)
          (g!tl mod 13 4 1)
          (g!tl rem 13 4 1)
          (g!tl mod -13 4 3)
          (g!tl rem -13 4 -1)
          (g!tl mod 13 -4 -3)
          (g!tl rem 13 -4 1)
          (g!tl mod -13 -4 -1)
          (g!tl rem -13 -4 -1)))
       (pattern  (mapcar (lambda (tuple)
                          (let ((fn (car tuple))
                                (number (cadr tuple))
                                (divisor (caddr tuple))
                                (mr (cadddr tuple)))
                           (eql mr (truncate (funcall fn number divisor)))))
                         test-tuples))
       (match (list T T T T T T T T T T)))
 (teql (equal  pattern match)))


;;; end
