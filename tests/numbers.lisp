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
