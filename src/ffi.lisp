;;; ffi.lisp ---

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

(/debug "loading ffi.lisp!")

(defvar *root*)

(defconstant +true+ (%js-vref "true" t))
(defconstant +false+ (%js-vref "false" t))
(defconstant +undefined+ (%js-vref "undefined" t))
(defconstant +null+ (%js-vref "null" t))

(defun instanceof (x class)
  (instanceof x class))

(defun typeof (x)
  (typeof x))

;; TODO: rewrite using DEFUN SETF, once we make OSET proper function,
;; and figure out how to not pay to price for APPLY
(define-setf-expander oget (object key &rest keys)
  (let* ((keys (cons key keys))
         (g!object (gensym))
         (g!keys (mapcar (lambda (s)
                           (declare (ignore s))
                           (gensym))
                         keys))
         (g!value (gensym)))
    (values `(,g!object ,@g!keys)
            `(,object ,@keys)
            `(,g!value)
            `(oset ,g!value ,g!object ,@g!keys)
            `(oget ,g!object ,@g!keys))))

(define-setf-expander oget! (object key &rest keys)
  (let* ((keys (cons key keys))
         (g!object (gensym))
         (g!keys (mapcar (lambda (s)
                           (declare (ignore s))
                           (gensym))
                         keys))
         (g!value (gensym)))
    (values `(,g!object ,@g!keys)
            `(,object ,@keys)
            `(,g!value)
            `(oset! ,g!value ,g!object ,@g!keys)
            `(oget! ,g!object ,@g!keys))))


(defun lisp-to-js (x)
  (lisp-to-js x))

(defun js-to-lisp (x)
  (js-to-lisp x))

(%js-vset "eval_in_lisp"
          (lambda (form)
            (eval (read-from-string form))))

(defun js-object-p (obj)
  (if (or (sequencep obj)
          (numberp obj)
          (symbolp obj)
          (functionp obj)
          (characterp obj)
          (packagep obj))
      nil
      t))

(defun js-null-p (obj) (eq obj +null+))
(defun objectp (obj) (objectp obj))
(defun js-undefined-p (obj) (eq obj +undefined+))

;;; EOF
