;;; numbers.lisp

;; JSCL is free software: you can redistribute it and/or
;; modify it under the terms of the GNU General Public License as
;; published by the Free Software Foundation, either version 3 of the
;; License, or (at your option) any later version.
;;
;; JSCL is distributed in the hope that it will be useful, but
;; WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
;; General Public License for more details.
;;
;; You should have received a copy of the GNU General Public License
;; along with JSCL.  If not, see <http://www.gnu.org/licenses/>.

(/debug "loading numbers.lisp!")

;;;; Various numeric functions and constants

(macrolet ((def (operator initial-value)
             (let ((init-sym   (gensym))
                   (dolist-sym (gensym)))
               `(defun ,operator (&rest args)
                  (let ((,init-sym ,initial-value))
                    (dolist (,dolist-sym args)
                      (setq ,init-sym (,operator ,init-sym ,dolist-sym)))
                    ,init-sym)))))
  (def + 0)
  (def * 1))

;; - and / work differently from the above macro.
;; If only one arg is given, it negates it or takes its reciprocal.
;; Otherwise all the other args are subtracted from or divided by it.
(macrolet ((def (operator unary-form)
             `(defun ,operator (x &rest args)
                (cond
                  ((null args) ,unary-form)
                  (t (dolist (y args)
                       (setq x (,operator x y)))
                     x)))))
  (def - (-   x))
  (def / (/ 1 x)))


(defconstant most-positive-fixnum
  (oget (%js-vref "Number" t) "MAX_SAFE_INTEGER"))

(defconstant most-negative-fixnum
  (oget (%js-vref "Number" t) "MIN_SAFE_INTEGER"))

(defun fixnump (n)
  (and (integerp n)(>= most-negative-fixnum) (<= most-positive-fixnum)))

(defun non-negative-fixnump (n)
  (if (fixnump n)
      (and (>= n 0)
           (<= n most-positive-fixnum))))

;;; Yeat another Root of the Evil
(defun bignump (n)
  (and (integerp n)(or (< most-negative-fixnum) (> most-positive-fixnum))))

(defun 1+ (x) (+ x 1))
(defun 1- (x) (- x 1))


(defun rem (number divisor)
 (rem0 number divisor))

(defun mod (number divisor)
  (multiple-value-bind (quotient remainder)
      (floor number divisor)
    remainder))

(defun floor (x &optional (y 1))
  (let ((quotient (%floor (/ x y))))
    (values quotient
            (- x (* quotient y)))))

(defun ceiling (x &optional (y 1))
  (%ceiling (/ x y)))

;;; @vkm 30.11
;;; test case
;;; (floor number divisor) second value is (mod number divisor)
;;; celing second value is remainder
;;; (rem number divisor) return second result of truncate
;;; (mod number divisor) return second result of floor
(defun truncate (number &optional (divisor 1))
  (let ((res (%truncate (/ number divisor))))
    (values res (- number (* res divisor)))))
;;; @vkm 30.11 end

(defun numberp (x) (numberp x))
(defun integerp (x) (%integer-p x))
(defun realp (x) (numberp x))
(defun rationalp (x) (%integer-p x))

(defun floatp (x)
  (and (numberp x) (not (integerp x))))

(defun minusp (x) (< x 0))
(defun zerop (x) (= x 0))
(defun plusp (x) (< 0 x))

(defun signum (x)
  (if (zerop x) x (/ x (abs x))))

(macrolet ((def (operator)
             `(defun ,operator (x &rest args)
                (dolist (y args) 
                  (if (,operator x y)
                      (setq x y)
                      (return-from ,operator nil)))
                t)))
  (def >)
  (def >=)
  (def =) 
  (def <)
  (def <=))

(defun /= (x &rest args)
  (do* ((head x (car list))
        (list args (cdr list)))
       ((null list) t)
    (dolist (y list)
      (when (= head y) (return-from /= nil)))))

(defconstant pi 3.141592653589793)

(defun evenp (x) (= (mod x 2) 0))
(defun oddp  (x) (not (evenp x)))

(macrolet ((def (name comparison)
             `(defun ,name (x &rest xs)
                (dolist (y xs) 
                  (when (,comparison y x)
                    (setq x y)))
                x)))
  (def max >)
  (def min <))

(defun abs (x) (if (> x 0) x (- x)))

(defun expt (base power) (expt base              power))
(defun exp  (power)      (expt 2.718281828459045 power))

(defun sqrt (x) (sqrt x))

(defun gcd-2 (a b)
  (if (zerop b)
      (abs a)
    (gcd-2 b (rem a b))))

(defun gcd (&rest integers)
  (cond ((null integers)
	 0)
	((null (cdr integers))
	 (abs (first integers)))
	((null (cddr integers))
	 (gcd-2 (first integers) (second integers)))
	(t
	 (apply #'gcd (gcd (first integers) (second integers)) (nthcdr 2 integers)))))

(defun lcm-2 (a b)
  (if (or (zerop a) (zerop b))
      0
    (/ (abs (* a b)) (gcd a b))))

(defun lcm (&rest integers)
  (cond ((null integers)
	 1)
	((null (cdr integers))
	 (abs (first integers)))
	((null (cddr integers))
	 (lcm-2 (first integers) (second integers)))
	(t
	 (apply #'lcm (lcm (first integers) (second integers)) (nthcdr 2 integers)))))

;;; @VKM path 30.11

;;; round number/division to nearest integer
;;; second value is remainder
(defun round (number &optional (divisor 1))
  (multiple-value-bind (integer remainder) (truncate number divisor)
    (if (zerop remainder)
        (values integer remainder)
        (let ((thresh (/ (abs divisor) 2)))
          (cond ((or (> remainder thresh)
                     (and (= remainder thresh) (oddp integer)))
                 (if (minusp divisor)
                     (values (- integer 1) (+ remainder divisor))
                     (values (+ integer 1) (- remainder divisor))))
                ((let ((negative (- thresh)))
                   (or (< remainder negative)
                       (and (= remainder negative) (oddp integer))))
                 (if (minusp divisor)
                     (values (+ integer 1) (- remainder divisor))
                     (values (- integer 1) (+ remainder divisor))))
                (t (values integer remainder)))))))

(defconstant most-integer-length (expt 2 30))

;;; ash
(defun ash (x y)
  (let* ((minus-p (minusp y))
        (y (if minus-p (- y) y)))
    (if minus-p
        (%ash-right x y)
        (%ash-left x  y))))

;;; log
(defun log (number &optional (base nil base-p))
  "Return the logarithm of NUMBER in the base BASE, which defaults to e."
  (if base-p
      (/ (log number) (log base))
      (if (numberp number)
          (#j:Math:log number)
          (error 'type-error :datum number :expected-type 'number))))

;;; lognot
(defun lognot (x) (%lognot x))

;;; logxor
(defun logxor (&rest others)
  (if (null others) (return-from logxor 0)
      (let ((result (car others)))
        (do ((integers others (cdr integers))
             (result 0 (%logxor result (car integers))))
            ((endp integers)  result)))))

;;; logand
(defun logand (&rest others)
  (if (null others) (return-from logand -1)
      (let ((integer (car others)))
        (do ((integers others (cdr integers))
             (result integer (%Logand result (car integers))))
            ((endp integers)  result)))))

;;; logeqv
(defun %logeqv (x y) (%lognot (%logxor x y)))

(defun logeqv (&rest others)
  (if (null others) (return-from logeqv -1)
      (let ((integer (car others)))
        (do ((integers (cdr others) (cdr integers))
             (result integer (%logeqv result (car integers))))
            ((endp integers)  result)))))

;;; logior
(defun logior (&rest others)
  (if (null others) (return-from logior 0)
      (let ((integer (car others)))
        (do ((integers others (cdr integers))
             (result integer (%logior result (car integers))))
            ((endp integers)  result)))))

;;; integer-length
;;; note: ONLY 32 bits
;;; note: its very simple and incorrect function
;;; todo: We need version with corrected doing fixnum & bignum numbers
(defun integer-length (integer)
  (let ((negative (minusp integer)))
    (if negative
      (setq integer (- integer)))
    (if (> integer most-integer-length)
        ;; prevent infinity loop with (integer-length (expt 2 31))
        (error "integer-length: bad numeric limit ~a" integer)) 
    (do ((len 0 (1+ len))
         (original integer))
        ((zerop integer)
         ;; Negative powers of two require one less bit.
         (if (and negative
                  ;; Test if original is power-of-two.
                  (zerop (%logand original (1- original))))
             (1- len)
             len))
      (setq integer (ash integer -1)))))

;;; logtest
;;; Return T if logand of integer1 and integer2 is not zero
(defun logtest (integer1 integer2)
  (not (zerop (%logand integer1 integer2))))

;;; logbitp
(defun logbitp (index integer)
  (if (< index most-positive-fixnum)
      (not (zerop (%logand integer (ash 1 index))))
      (minusp integer)))

;;; LOGCOUNT
;;; note: ONLY 32 bits
;;; note: its very simple and incorrect function
;;; todo: We need version with corrected doing fixnum & bignum numbers
;;; Count the number of 1 bits if INTEGER is non-negative,
;;; and the number of 0 bits if INTEGER is negative
(defun %logcount (integer)
  (let ((length (integer-length integer))
        (result 0))
    (dotimes (bit length)
      (if (logbitp bit integer) (incf result)))
    result))

(defun logcount (integer)
  (%logcount (if (minusp integer) (%lognot integer) integer)))

(defconstant boole-1     0)    ;; integer-1                                   
(defconstant boole-2     1)    ;; integer-2                                   
(defconstant boole-andc1 2)    ;; and complement of integer-1 with integer-2  
(defconstant boole-andc2 3)    ;; and integer-1 with complement of integer-2  
(defconstant boole-and   4)    ;; and                                         
(defconstant boole-c1    5)    ;; complement of integer-1                     
(defconstant boole-c2    6)    ;; complement of integer-2                     
(defconstant boole-clr   7)    ;; always 0 (all zero bits)                    
(defconstant boole-eqv   8)    ;; equivalence (exclusive nor)                 
(defconstant boole-ior   9)    ;; inclusive or                                
(defconstant boole-nand  10)   ;; not-and                                     
(defconstant boole-nor   11)   ;; not-or                                      
(defconstant boole-orc1  12)   ;; or complement of integer-1 with integer-2   
(defconstant boole-orc2  13)   ;; or integer-1 with complement of integer-2   
(defconstant boole-set   14)   ;; always -1 (all one bits)                    
(defconstant boole-xor   15)   ;; exclusive or                                

;;; fns definition: lognand, lognor, logandc*, logorc*
(defun lognand  (x y)  (%lognot (%logand x y)))
(defun lognor   (x y)  (%lognot (%logior x y)))
(defun logandc1 (x y)  (%logand (%lognot x) y))
(defun logandc2 (x y)  (%logand x (%lognot y)))
(defun logorc1  (x y)  (%logior  (%lognot x) y))
(defun logorc2  (x y)  (%logior x (%lognot y)))

;;; BOOLE
(defun boole (op i1 i2)
    (cond
      ((eq op boole-clr)      0)
      ((eq op boole-set)     -1)
      ((eq op boole-1)              i1)
      ((eq op boole-2)          i2)
      ((eq op boole-c1)    (%lognot i1))
      ((eq op boole-c2)    (%lognot i2))
      ((eq op boole-and)   (%logand i1 i2))
      ((eq op boole-ior)   (%logior i1 i2))
      ((eq op boole-xor)   (%logxor i1 i2))
      ((eq op boole-eqv)   (%logeqv i1 i2))
      ((eq op boole-nand)  (%lognot (%logand i1 i2)))
      ((eq op boole-nor)   (%lognot (%logior i1 i2)))
      ((eq op boole-andc1) (%logand (%lognot i1) i2))
      ((eq op boole-andc2) (%logand i1 (%lognot i2)))
      ((eq op boole-orc1)  (%logior (%lognot i1) i2))
      ((eq op boole-orc2)  (%logior i1 (%lognot i2)))
      (t (error "~S is an illegal control code to BOOLE." op))))

;;; RANDOM
(defun random (n)
  (let ((rn (#j:Math:random n)))
    (#j:Math:floor (* rn n))))

;;; BYTE
;;; return  byte specifier
(defun byte (size position)
  (cons size position))

;;; BYTE-SIZE
;;; return the size part of the byte specifier
(defun byte-size (spec)
  (car spec))

;;; BYTE-POSITION
;;; return thhe position part of the byte specifier
(defun byte-position (spec)
  (cdr spec))

;;; CLZ32
;;; count leading zero
;;; ONLY 32 bits
(defun clz32 (number)
  (#j:Math:clz32 number))

;;; MASK-FIELD
;;; extract the specified byte from integer
;;; result not right justify
(defun %mask-field (size posn integer)
  (%logand integer (ash (1- (ash 1 size)) posn)))

;;; todo: (setf)
(defun mask-field (byte integer)
  (%logand integer (ash (1- (ash 1 (car byte))) (cdr byte))))

;;; LDB
;;; extract the specified byte from integer
;;; result right justify
(defun %ldb (size pos integer)
  (%logand (ash integer (- pos))
          (1- (ash 1 size))))

(defun ldb (byte integer)
  (%ldb (car byte) (cdr byte) integer))

;;; LDB-TEST
;;; todo: (setf)
(defun ldb-test (byte number)
  (not (zerop (ldb byte number))))

;;; DPB
;;; return new integer with newbyte in specified position
;;; newbyte is right justify
(defun %dpb (newbyte size posn integer)
  (let ((mask (1- (ash 1 size))))
    (%logior (%logand integer (%lognot (ash mask posn)))
            (ash (%logand newbyte mask) posn))))

(defun dpb (newbyte byte integer)
  (%dpb newbyte (car byte) (cdr byte) integer))

;;; DEPOSIT-FIELD
;;; return new integer with newbyte in specified position
;;; newbyte isnt right justify
(defun %deposit-field (newbyte size posn integer)
  (let ((mask (ash (%ldb size 0 -1) posn)))
    (%logior (%logand newbyte mask)
            (%logand integer (%lognot mask)))))

(defun deposit-field (newbyte byte integer)
  (%deposit-field newbyte (car byte) (cdr byte) integer))

;;; @vkm 30.11 end

;;; EOF
