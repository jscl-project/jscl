;;;; Tests for numeric functions

;;; ABS
(tests (= (abs  3) 3)
       (= (abs -3) 3)

;;; MAX
       (= (max 1)     1)
       (= (max 1 2 3) 3)
       (= (max 3 2 1) 3)
       (= (max 1 2 3 4 5) 5)

;;; MIN
       (= (min 1)     1)
       (= (min 1 2 3) 1)
       (= (min 3 2 1) 1)
       (= (min 9 3 8 7 6 3 3) 3)

;;; EVENP
       (evenp  2)
       (evenp -2)
       (not (evenp  1))
       (evenp  0)

;;; ODDP
       (oddp  3)
       (oddp -3)
       (not (oddp  2))
       (not (oddp  0))

;;; +, -, *, /
;;; The builtin definition of these is variadic, but the function definition
;;; should be as well. So, test it using MAPCAR
       (let* ((a '(1 2))
	      (b a)
	      (c a))
	 (equal (mapcar #'+ a b c) '( 3  6))
	 (equal (mapcar #'- a b c) '(-1 -2))
	 (equal (mapcar #'* a b c) '( 1  8))
	 ;; This test will need to be changed when rationals are introduced
	 (equal (mapcar #'/ a b c) '( 1  0.5)))

;;; >, >=, =, <, <=, /=
;;; As above, we need to make sure the function is called, not the builtin
       (let ((a '(1 3 1 2 1))
	     (b '(2 2 2 2 1))
	     (c '(3 1 2 1 1)))
	 (equal (mapcar #'>  a b c) '(nil   t nil nil nil))
	 (equal (mapcar #'>= a b c) '(nil   t nil   t   t))
	 (equal (mapcar #'=  a b c) '(nil nil nil nil   t))
	 (equal (mapcar #'<  a b c) '(  t nil nil nil nil))
	 (equal (mapcar #'<= a b c) '(  t nil   t nil   t))
	 (equal (mapcar #'/= a b c) '(  t   t nil nil nil)))

;;; INTEGERP
       (integerp  1)
       (integerp -1)
       (integerp  0)

;;; FLOATP

       ;; It is a known bug. Javascript does not distinguish between floats
       ;; and integers, and we represent both numbers in the same way. So 1
       ;; == 1.0 and integer and float types are not disjoint.
       (expected-failure (floatp 1.0)) 

       (floatp    1.1)
       (floatp    pi)
       (floatp (- pi))
       (not (floatp    1))

;;; GCD
       (= 0 (gcd))
       (= 6 (gcd 60 42))
       (= 1 (gcd 3333 -33 101))
       (= 11 (gcd 3333 -33 1002001))
       (= 7 (gcd 91 -49))
       (= 7 (gcd 63 -42 35))
       (= 5 (gcd 5))
       (= 4 (gcd -4))

;;; LCM
       (= 10 (lcm 10))
       (= 150 (lcm 25 30))
       (= 360 (lcm -24 18 10))
       (= 70 (lcm 14 35))
       (= 0 (lcm 0 5))
       (= 60 (lcm 1 2 3 4 5 6))


;;; Floor, Ceil, Truncate and Round

       (equal (multiple-value-list (floor 0))        '(0 0))
       (equal (multiple-value-list (floor 1))        '(1 0))
       (equal (multiple-value-list (floor -1))       '(-1 0))
       (equal (multiple-value-list (floor 4 3))      '(1 1))
       (equal (multiple-value-list (floor -4 3))     '(-2 2))
       (equal (multiple-value-list (floor 4 -3))     '(-2 -2))
       (equal (multiple-value-list (floor -4 -3))    '(1 -1))

       (multiple-value-bind (quotient reminder)
	   (floor 1.2)
	 (and (= quotient 1)
	      (= (+ (* quotient 1) reminder) 1.2)))

       (multiple-value-bind (quotient reminder)
	   (floor -1.2)
	 (and (= quotient -2)
	      (= (+ (* quotient 1) reminder) -1.2)))

       (= (ceiling 0) 0)
       (= (ceiling 1) 1)
       (= (ceiling -1) -1)
       (= (ceiling 1.2) 2)
       (= (ceiling -1.2) -1)
       (= (ceiling 4 3) 2)
       (= (ceiling -4 3) -1)
       (= (ceiling 4 -3) -1)
       (= (ceiling -4 -3) 2)

       (= (truncate 0) 0)
       (= (truncate 1) 1)
       (= (truncate -1) -1)
       (= (truncate 1.2) 1)
       (= (truncate -1.2) -1)
       (= (truncate 4 3) 1)
       (= (truncate -4 3) -1)
       (= (truncate 4 -3) -1)
       (= (truncate -4 -3) 1))
