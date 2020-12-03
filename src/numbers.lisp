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

(defun integerp (x)
  (and (numberp x) (= (floor x) x)))

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
                      (setq x    (car args))
                      (return-from ,operator nil)))
                t)))
  (def >)
  (def >=)
  (def =) 
  (def <)
  (def <=)
  (def /=))

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

;;; @VKM path 30.11
(defconstant most-integer-length (expt 2 30))

;;; ash
(defun ash (x y)
  (let* ((minus-p (minusp y))
        (y (if minus-p (- y) y)))
    (if minus-p
        (%ash-right x y)
        (%ash-left x  y))))

;;; lognot
(defun lognot (x) (%lognot x))

;;; EOF
