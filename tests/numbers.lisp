;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/numbers.lisp!")

;;; Tests for numeric functions

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
(let ((a '(1 3 1 2 1 1))
      (b '(2 2 2 2 1 2))
      (c '(3 1 2 1 1 1)))
  (test (equal (mapcar #'>  a b c) '(nil   t nil nil nil nil)))
  (test (equal (mapcar #'>= a b c) '(nil   t nil   t   t nil)))
  (test (equal (mapcar #'=  a b c) '(nil nil nil nil   t nil)))
  (test (equal (mapcar #'<  a b c) '(  t nil nil nil nil nil)))
  (test (equal (mapcar #'<= a b c) '(  t nil   t nil   t nil)))
  (test (equal (mapcar #'/= a b c) '(  t   t nil nil nil nil))))

(test (not (funcall #'< 1 2 4 3)))
(test (not (funcall #'/= 1 2 3 3)))

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
 (test (equal  pattern match)))

;;; test correctness coerce float - integer
(test
 (multiple-value-bind (integer rest) (truncate 123.123)
   (and (integerp integer) (eq integer 123))))


;;; test what (expt 10 65) corrected parsed from string
;;; Important note:
;;;     sbcl: (expt 10 65) => 100000000000000000000000000000000000000000000000000000000000000000
;;;     jscl: (expt 10 65) => 100000000000000000000008244226848602684002400884060400424240244468
;;;
(test
 (equal t
        (numberp (parse-integer (format nil "~d" (expt 10 65))))))

;;; test ASH 
;;; important note:
;;; at clhs example (ash  -100000000000000000000000000000000 -100) => -79
;;; but js op: -100000000000000000000000000000000 >> -100 => 0
;;;
(test
 (let ((pattern '(32 16 8 0))
       (result  (mapcar (lambda (x y) (ash x y))
                        '(16 16 16 -100000000000000000000000000000000)
                        '(1 0 -1 -100))))
   (equal pattern result)))

;;;(equal '(32 16 8 0)
;;;        (mapcar (lambda (x y) (ash x y))
;;;                '(16 16 16 -100000000000000000000000000000000)
;;;                '(1 0 -1 -100))))

(test
 (equal t
        (= #x3FFFC
           (ash #xFFFF 2))))

;;; test LOG
(test
 (equal 0 (log 1)))
(test
 (equal 2 (log 100 10)))
(test
 (equal 3 (log 8.0 2)))

;;; test LOGNOT
(test
 (equal '(-1 -2 0 999)
        (mapcar (lambda (x) (lognot x))
                (list 0 1 -1 (1+ (lognot 1000))))))

;;; test LOGAND
(test (equal t (= 16 (logand 16 31))))


;;; clhs (logxor 1 3 7 15) => 10
(test
 (equal t
        (= 10
           (logxor (logxor (logxor 1 3) 7) 15))))

(test
 (eq 10 (logxor 1 3 7 15)))

(test
 (let ((pattern '(-1 -1 0 0 -1 -2 0 999)))
   (equal pattern
          (list (logand) ;; must be -1
                (logeqv) ;; must be -1
                (logior) ;; must be 0
                (logxor) ;; must be 0
                (lognot 0)
                (lognot 1)
                (lognot -1)
                (lognot (1+ (lognot 1000)))))))

(test
 (let ((result))
   (dolist (symbol '(boole-1     boole-2    boole-and  boole-andc1
                     boole-andc2 boole-c1   boole-c2   boole-clr
                     boole-eqv   boole-ior  boole-nand boole-nor
                     boole-orc1  boole-orc2 boole-set  boole-xor))
     (push (boole (symbol-value symbol) #b0011 #b0101) result))
   (equal '(3 5 1 4 2 -4 -6 0 -7 7 -2 -8 -3 -5 -1 6)
          (reverse result))))

(defconstant boole-n-vector
  (vector boole-clr   boole-and  boole-andc1 boole-2
          boole-andc2 boole-1    boole-xor   boole-ior
          boole-nor   boole-eqv  boole-c1    boole-orc1
          boole-c2    boole-orc2 boole-nand  boole-set))

(defun boole-n (n integer &rest more-integers)
  (apply #'boole (elt boole-n-vector n) integer more-integers))

(test
 (let ((pattern '(0 1 2 3 4 5 6 7 -8 -7 -6 -5 -4 -3 -2 -1))
       (result (loop for n from #b0000 to #b1111 collect (boole-n n 5 3))))
   (equal pattern result)))

;;; 
(test (let ((n1 1) (n2 2)) (eq (lognand n1 n2) (lognot (logand n1 n2)))))
(test (let ((n1 1) (n2 2)) (eq (lognor n1 n2) (lognot (logior n1 n2)))))
(test (let ((n1 1) (n2 2)) (eq (logandc1 n1 n2) (logand (lognot n1)  n2))))
(test (let ((n1 1) (n2 2)) (eq (logandc2 n1 n2) (logand n1 (lognot n2)))))
(test (let ((n1 1) (n2 2)) (eq (logorc1 n1 n2) (logior (lognot n1) n2))))
(test (let ((n1 1) (n2 2)) (eq (logorc2 n1 n2) (logior n1 (lognot n2)))))
(test (let ((j 1) (x 2))   (eq (logbitp j (lognot x)) (not (logbitp j x)))))

(test
 (let ((pattern '(nil t t t t nil))
       (result (list (logbitp 1 1) (logbitp 0 1) (logbitp 3 10)
                     (logbitp 1000000 -1) (logbitp 2 6) (logbitp 0 6))))
   (equal pattern result)))

(test
 (let ((k 2) (n 6))
  (eql (logbitp k n) (ldb-test (byte 1 k) n))))

(test
 (let ((option-name #(:include :initial-offset :type :conc-name :copier :predicate))
       (f1 (list :initial-offset :copier))
       (f2 (list :include :type :predicate))
       (f3 (list :include :initial-offset :type :conc-name :copier :predicate))
       (s1 0) (s2 0) (s3 0) (r)
       (pattern '(t nil t nil t t)))
   (flet ((%p (seq seen)
            (let ((bit 0))
              (dolist (it seq)
                (setq bit (position it option-name))
                (setq seen (logior seen (ash 1 bit))))
              seen))
          (%l (seen keyword)
            (logbitp (position keyword option-name) seen)))
     (setq s1 (%p f1 s1) ;; must be #b10010 or 18
           s2 (%p f2 s2) ;; must be #b100101 or 37
           s3 (%p f3 s3)) ;; must be #b111111 or 63
     (setq r (list (%l s1 :copier) (%l s1 :type)
                   (%l s2 :type) (%l s2 :conc-name)
                   (%l s3 :include) (%l s3 :predicate)))
     (equal pattern r))))

;;; CLZ32
(test
 (let ((nums (list 0 1 10 100 200 (expt 2 10) (expt 2 20) (expt 2 30)))
       (r (list))
       ;; pattern ::= (number (leading-zero-bits . integer-length))
       (pattern '((0 (32 . 0)) (1 (31 . 1)) (10 (28 . 4)) (100 (25 . 7))
                  (200 (24 . 8)) (1024 (21 . 11)) (1048576 (11 . 21))
                  (1073741824 (1 . 31)))))
   (equal pattern
          (dolist (it nums (return (reverse r)))
            (push (list it (cons (jscl::clz32 it) (integer-length it))) r)))))

    
;;; LOGCOUNT
(test
 (let* ((x 123)
        (r (logcount x)))
   (eql (eql r (logcount (- (+ x 1))))
        (eql r (logcount (lognot x))))))

(defun identity-logcount (n)
  (let* ((x n)
         (r (logcount x)))
    (eql (eql r (logcount (- (+ x 1))))
         (eql r (logcount (lognot x))))))

(test
 (equal '(t)
        (remove-duplicates
         (jscl::with-collect
           (dotimes (i 100)
             (jscl::collect (identity-logcount (random 100))))))))

;;; BYTE
(test
 (let ((j 1) (k 2))
   (and
    (eq (byte-size (byte j k)) j)
    (eq (byte-position (byte j k)) k))))

;;; LOGTEST
(test
  (let ((pattern '(t nil t nil))
      (result (list  (logtest 1 7) (logtest 1 2)
                     (logtest -2 -1) (logtest 0 -1))))
  (equal pattern result)))

;;; test identity
(test
 (let ((x 1) (y 7))
  (eq (logtest x y) (not (zerop (logand x y))))))

;;; DEPOSIT-FIELD
(test
 (let ((pattern '(6 15 -7))
       (result
         (list
          (deposit-field 7 (byte 2 1) 0)
          (deposit-field -1 (byte 4 0) 0)
          (deposit-field 0 (byte 2 1) -3))))
   (equal pattern result)))

;;; DPB
(test
 (let ((pattern '(1024 2048 1024))
       (result
         (list (dpb 1 (byte 1 10) 0)
               (dpb -2 (byte 2 10) 0)
               (dpb 1 (byte 2 10) 2048))))
   (equal pattern result)))

;;; LDB
(test (eq 1 (ldb (byte 2 1) 10) ))

;;; EOF
