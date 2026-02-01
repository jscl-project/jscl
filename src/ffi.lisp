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

#+jscl
(/debug "loading ffi.lisp!")

;;; Dual-Environment Architecture
;;;
;;; This file is tagged :both in *source*, so it is loaded in the host
;;; CL (for macro expansion during cross-compilation) AND compiled to
;;; JavaScript for the target.
;;;
;;; In the host, JS values don't exist.  We define struct types so that
;;; #j"..." produces a value the compiler can recognize and dump into
;;; the literal table.
;;;
;;; In the target, several functions defined here are "self-referencing
;;; builtins": ffi.lisp provides the Lisp-level defun, but the
;;; compiler intercepts calls and replaces them with inline JS (via
;;; define-builtin / define-raw-builtin in compiler.lisp).
;;;
;;; Compiler Primitive Contract
;;;
;;;   typeof      (x)           — JS typeof, returns Lisp string
;;;   jsstring    (x)           — Lisp string → JS string
;;;   clstring%   (x)           — JS string → Lisp string (no type check)
;;;   instanceof  (x class)     — JS instanceof operator
;;;   objectp     (obj)         — JS typeof === "object" && not null
;;;   lisp-to-js  (x)           — Lisp value → JS value (for JS callbacks)



;;;; Host compatibility types

#-jscl
(progn
  (defstruct js-value)

  (defstruct (js-string (:include js-value)
			(:constructor make-js-string (value))
			(:predicate %host-js-string-p))
    value)

  (defstruct (js-boolean (:include js-value)
                         (:constructor %make-js-boolean (value)))
    value)

  (defstruct (js-null (:include js-value)
                      (:constructor %make-js-null)))

  (defstruct (js-undefined (:include js-value)
                           (:constructor %make-js-undefined))))


;;;; Core functions (both environments)

(defun typeof (x)
  #+jscl (typeof x)
  #-jscl
  (typecase x
    (number "number")
    (js-string "string")
    (js-boolean "boolean")
    (js-undefined "undefined")
    (js-null "object")
    (js-value "object")))

(defun jsstring (x)
  #+jscl (jsstring x)
  #-jscl (make-js-string x))

(defun clstring% (x)
  #+jscl (clstring% x)
  #-jscl (js-string-value x))

(defun clstring (x)
  (cond
    ((stringp x) x)
    ((string= (typeof x) "string") (clstring% x))
    (t (error 'type-error :datum x :expected-type 'string))))

(defun objectp (obj)
  #-jscl (js-value-p obj)
  #+jscl
  (objectp obj))


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


;;;; Target-only runtime

#+jscl
(defvar *root*
  (%js-vref "globalThis" t))

#+jscl
(defun instanceof (x class)
  (instanceof x class))

#+jscl
(defun lisp-to-js (x)
  (lisp-to-js x))

#+jscl
(defun clbool (x)
  (cond
    ;; TODO: Should we do this? or just accept js booleans? similar for clstring
    ((eq x t) t)
    ((eq x nil) nil)

    ((eq x (%js-vref "true" t)) t)
    ((eq x (%js-vref "false" t)) nil)
    ((eq x (%js-vref "null" t)) nil)
    ((eq x (%js-vref "undefined" t)) nil)
    (t (error 'type-error :datum x :expected-type 'js-boolean))))

#+jscl
(defun jsbool (x)
  (if x (%js-vref "true" t) (%js-vref "false" t)))

#+jscl
(defun js-value-p (obj)
  (if (or (sequencep obj)
          (numberp obj)
          (symbolp obj)
          (functionp obj)
          (characterp obj)
          (packagep obj))
      nil
      t))

#+jscl
(%js-vset "eval_in_lisp"
          (lambda (form)
            (eval (read-from-string form))))

;;; EOF
