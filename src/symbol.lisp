;;; symbols --- 

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
(/debug "loading symbol.lisp!")

(defun make-symbol (name)
  (make-symbol name))

(defun symbolp (x) (symbolp x))

(defvar *gentemp-counter* 0)
(defun gentemp (&optional (prefix "T") (package *package*))
  "Creates a new symbol interned in package PACKAGE with the given PREFIX."
  (while t
    (multiple-value-bind (sym accessibility)
        (intern (concat prefix (integer-to-string *gensym-counter*)) package)
      (unless accessibility (return sym)))))

(defun symbol-plist (x)
  (cond
    ((not (symbolp x))
     (error "`~a' is not a symbol." x))
    ((in "plist" x)
     (oget* x "plist"))))

(defun set-symbol-plist (new-value x)
  (unless (symbolp x )
    (error "`~a' is not a symbol." x))
  (unless (listp new-value)
    (error "`~a' is not a list." new-value))
  (oset* new-value x "plist"))

(define-setf-expander symbol-plist (x)
  (let ((g!x (gensym))
        (g!value (gensym)))
    (values (list g!x)
            (list x)
            (list g!value)
            `(set-symbol-plist ,g!value ,g!x)
            `(symbol-plist ,g!x))))

(defun get (symbol indicator &optional default)
  (getf (symbol-plist symbol) indicator default))

(define-setf-expander get (symbol indicator &optional default)
  (get-setf-expansion `(getf (symbol-plist ,symbol) ,indicator ,default)))


(defun symbol-function (symbol)
  (symbol-function symbol))

(defsetf symbol-function fset)

(defun symbol-value (symbol)
  (symbol-value symbol))

(defsetf symbol-value set)

(defun copy-symbol (symbol &optional copy-props)
  (unless (symbolp symbol)
    (error "`~a' is not a symbol." symbol))
  (cond (copy-props
         (let ((new-symbol (make-symbol (string symbol))))
           (when (boundp symbol)
             (setf (symbol-value new-symbol) (symbol-value symbol)))
           (when (fboundp symbol)
             (setf (symbol-function new-symbol) (symbol-function symbol)))
           (setf (symbol-plist new-symbol) (copy-list (symbol-plist symbol)))
           new-symbol))
        (t
         (make-symbol (string symbol)))))
