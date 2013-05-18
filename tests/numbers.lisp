;;;; Tests for numeric functions

; ABS
(test (= (abs  3) 3))
(test (= (abs -3) 3))

; MAX
(test (= (max 1)     1))
(test (= (max 1 2 3) 3))
(test (= (max 3 2 1) 3))

; MIN
(test (= (min 1)     1))
(test (= (min 1 2 3) 1))
(test (= (min 3 2 1) 1))

; EVENP
(test      (evenp  2))
(test      (evenp -2))
(test (not (evenp  1)))
(test      (evenp  0))

; ODDP
(test      (oddp  3))
(test      (oddp -3))
(test (not (oddp  2)))
(test (not (oddp  0)))

; +, -, *, /
; The builtin definition of these is variadic, but the function definition
; should be as well. So, test it using MAPCAR
(let* ((a '(1 2))
       (b a)
       (c a))
  (test (equal (mapcar #'+ a b c) '( 3  6)))
  (test (equal (mapcar #'- a b c) '(-1 -2)))
  (test (equal (mapcar #'* a b c) '( 1  8)))
  ; This test will need to be changed when rationals are introduced
  (test (equal (mapcar #'/ a b c) '( 1  0.5))))

; >, >=, =, <, <=, /=
; As above, we need to make sure the function is called, not the builtin
(let ((a '(1 3 1 2 1))
      (b '(2 2 2 2 1))
      (c '(3 1 2 1 1)))
  (test (equal (mapcar #'>  a b c) '(nil   t nil nil nil)))
  (test (equal (mapcar #'>= a b c) '(nil   t nil   t   t)))
  (test (equal (mapcar #'=  a b c) '(nil nil nil nil   t)))
  (test (equal (mapcar #'<  a b c) '(  t nil nil nil nil)))
  (test (equal (mapcar #'<= a b c) '(  t nil   t nil   t)))
  (test (equal (mapcar #'/= a b c) '(  t   t nil nil nil))))

; INTEGERP
(test (integerp  1))
(test (integerp -1))
(test (integerp  0))

; FLOATP
(expected-failure (floatp    1.0)) ; The reader reads 1.0 as an int 
(test             (floatp    1.1))
(test             (floatp    pi))
(test             (floatp (- pi)))
(test        (not (floatp    1)))
