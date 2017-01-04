;;; numbers.lisp

;; JSCL is free software: you can redistribute it and/or modify it under
;; the terms of the GNU General  Public License as published by the Free
;; Software Foundation,  either version  3 of the  License, or  (at your
;; option) any later version.
;;
;; JSCL is distributed  in the hope that it will  be useful, but WITHOUT
;; ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
;; FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
;; for more details.
;;
;; You should  have received a  copy of  the GNU General  Public License
;; along with JSCL. If not, see <http://www.gnu.org/licenses/>.

(in-package #-jscl :jscl #+jscl :jscl/impl)

(/debug "loading numbers.lisp!")

;;;; Various numeric functions and constants

(macrolet ((def (operator initial-value)
             (let ((init-sym   (gensym "INIT-"))
                   (dolist-sym (gensym "DOLIST-")))
               `(defun ,(intern (symbol-name operator) :jscl/cl) (&rest args)
                  (let ((,init-sym ,initial-value))
                    (dolist (,dolist-sym args)
                      (setq ,init-sym (,operator ,init-sym ,dolist-sym)))
                    ,init-sym)))))
  (def + 0)
  (def * 1))

;; - and  / work differently  from the above macro.  If only one  arg is
;; given, it negates it or takes its reciprocal. Otherwise all the other
;; args are subtracted from or divided by it.
(macrolet ((def (operator unary-form)
             `(defun ,(intern (symbol-name operator) :jscl/cl) (x &rest args)
                (cond
                  ((null args) ,unary-form)
                  (t (dolist (y args)
                       (setq x (,operator x y)))
                     x)))))
  (def - (-   x))
  (def / (/ 1 x)))


(defconstant jscl/cl::most-positive-fixnum
  #+jscl (jscl/ffi:oget (jscl/js::%js-vref "Number" t) "MAX_SAFE_INTEGER")
  #-jscl +most-positive-fixnum+
  "JS integers  are really floats with  no exponent, there is  a limited
 range; see
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER")

(defconstant jscl/cl::most-negative-fixnum
  #+jscl (jscl/ffi:oget (jscl/js::%js-vref "Number" t) "MIN_SAFE_INTEGER")
  #-jscl +most-negative-fixnum+
  "JS integers  are really floats with  no exponent, there is  a limited
 range; see
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER")

(defun jscl/cl::fixnump (number)
  (and (integerp number)
       (<= jscl/cl::most-negative-fixnum
           number
           jscl/cl::most-positive-fixnum)))

(defun jscl/cl::1+ (x) (+ x 1))
(defun jscl/cl::1- (x) (- x 1))


(defun jscl/cl::floor (x &optional (y 1))
  (jscl/js::%floor (/ x y)))

(defun jscl/cl::ceiling (x &optional (y 1))
  (jscl/js::%ceiling (/ x y)))

(defun jscl/cl::truncate (x &optional (y 1))
  (let ((z (/ x y)))
    (if (> z 0)
        (jscl/js::%floor z)
        (jscl/js::%ceiling z))))

(defun jscl/cl::integerp (x)
  (and (numberp x) (= (floor x) x)))

(defun jscl/cl::floatp (x)
  (and (numberp x) (not (integerp x))))

(defun jscl/cl::minusp (x) (< x 0))
(defun jscl/cl::zerop (x) (= x 0))
(defun jscl/cl::plusp (x) (< 0 x))

(defun jscl/cl::signum (x)
  (if (zerop x) x (/ x (abs x))))

(macrolet ((def (operator)
             `(defun ,(intern (symbol-name operator) :jscl/cl) (x &rest args)
                (dolist (y args)
                  (if (,operator x y)
                      (setq x (car args))
                      (return-from ,(intern (symbol-name operator) :jscl/cl) nil)))
                t)))
  (def >)
  (def >=)
  (def =)
  (def <)
  (def <=)
  (def /=))

(defconstant jscl/cl::pi 3.141592653589793)

(defun jscl/cl::evenp (x) (= (mod x 2) 0))
(defun jscl/cl::oddp  (x) (not (evenp x)))

(macrolet ((def (name comparison)
             `(defun ,(intern (string name) :jscl/cl) (x &rest xs)
                (dolist (y xs)
                  (when (,comparison y x)
                    (setq x y)))
                x)))
  (def max >)
  (def min <))

(defun jscl/cl::abs (x) (if (> x 0) x (- x)))

(defun jscl/cl::expt (base power) (expt base              power))
(defun jscl/cl::exp  (power)      (expt 2.718281828459045 power))

(defun jscl/cl::sqrt (x) (sqrt x))

(defun gcd-2 (a b)
  (if (zerop b)
      (abs a)
      (gcd-2 b (mod a b))))

(defun jscl/cl::gcd (&rest integers)
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

(defun jscl/cl::lcm (&rest integers)
  (cond ((null integers)
         1)
        ((null (cdr integers))
         (abs (first integers)))
        ((null (cddr integers))
         (lcm-2 (first integers) (second integers)))
        (t
         (apply #'lcm (lcm (first integers) (second integers)) (nthcdr 2 integers)))))
