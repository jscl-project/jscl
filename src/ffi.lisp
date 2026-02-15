;;; ffi.lisp --- FFI primitives (target only)

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

;;; FFI primitives
;;;
;;; Several functions defined here are "self-referencing builtins":
;;; ffi.lisp provides the Lisp-level defun, but the compiler
;;; intercepts calls and replaces them with inline JS (via
;;; define-builtin / define-raw-builtin in compiler.lisp).
;;;
;;; Compiler Primitive Contract
;;;
;;;   typeof      (x)           — JS typeof, returns JS string
;;;   jsstring    (x)           — Lisp string → JS string
;;;   clstring%   (x)           — JS string → Lisp string (no type check)
;;;   instanceof  (x class)     — JS instanceof operator

(defun typeof (x)
  (typeof x))

(defun jsstring (x)
  (jsstring x))

(defun clstring (x)
  (cond
    ((stringp x) x)
    ((eq (typeof x) (jsstring "string")) (clstring% x))
    (t (error 'type-error :datum x :expected-type 'string))))

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

(defvar *root*
  (%js-vref "globalThis"))

(defun instanceof (x class)
  (instanceof x class))

(defun clbool (x)
  (cond
    ((eq x t) t)
    ((eq x nil) nil)
    ((eq x #j:true) t)
    ((eq x #j:false) nil)
    ((eq x #j:null) nil)
    ((eq x #j:undefined) nil)
    (t (error 'type-error :datum x :expected-type 'js-boolean))))

(defun jsbool (x)
  (jsbool x))

(defun jsnull ()
  (jsnull))

(defun jsundefined ()
  (jsundefined))

(defun clone (x)
  "Create a shallow copy of a JavaScript object."
  ((oget #j:Object "assign") (object) x))


(%js-vset "eval_in_lisp"
          (lambda (form)
            (eval (read-from-string (clstring form)))))

;;; EOF
