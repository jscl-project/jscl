;;; symbols ---

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
(in-package :jscl) #-jscl-xc #.(error "Do not load this file in the host compiler")

(/debug "Loading symbol.lisp")



(defun symbol-plist (x)
  (cond
    ((not (symbolp x))
     (error "`~a' is not a symbol." x))
    ((in "plist" x)
     (jscl/ffi:oget* x "plist"))))

(defun set-symbol-plist (new-value x)
  (unless (symbolp x )
    (error "`~a' is not a symbol." x))
  (unless (listp new-value)
    (error "`~a' is not a list." new-value))
  (oset* new-value x "plist"))

(define-setf-expander symbol-plist (x)
  (let ((g!x (gensym "SYMBOL-"))
        (g!value (gensym "VALUE-")))
    (values (list g!x)
            (list x)
            (list g!value)
            `(set-symbol-plist ,g!value ,g!x)
            `(symbol-plist ,g!x))))

(defun get (symbol indicator &optional default)
  (getf (symbol-plist symbol) indicator default))
