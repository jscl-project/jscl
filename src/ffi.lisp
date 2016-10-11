;;; ffi.lisp ---

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

(in-package :jscl/ffi)

#-jscl (error "Don't compile this file in the host compiler.")

(/debug "loading ffi.lisp!")

(defvar *root*)

(define-setf-expander oget (object key &rest keys)
  (let* ((keys (cons key keys))
         (g!object (gensym "OBJECT-"))
         (g!keys (mapcar (lambda (s)
                           (declare (ignore s))
                           (gensym "KEY-"))
                         keys))
         (g!value (gensym "VALUE-")))
    (values `(,g!object ,@g!keys)
            `(,object ,@keys)
            `(,g!value)
            `(oset ,g!value ,g!object ,@g!keys)
            `(oget ,g!object ,@g!keys))))

(define-setf-expander oget* (object key &rest keys)
  (let* ((keys (cons key keys))
         (g!object (gensym "OBJECT-"))
         (g!keys (mapcar (lambda (s)
                           (declare (ignore s))
                           (gensym "KEY-"))
                         keys))
         (g!value (gensym "VALUE-")))
    (values `(,g!object ,@g!keys)
            `(,object ,@keys)
            `(,g!value)
            `(oset* ,g!value ,g!object ,@g!keys)
            `(oget* ,g!object ,@g!keys))))

(defun oset (object key value)
  #+jscl (oset object key value)
  #-jscl (error "Cannot set ~a.~a ← ~a" object key value))

(defun oset (object &rest keys+value)
  #+jscl (apply 'oset* object keys+value)
  #-jscl (error "Cannot set ~a~{.~a~} ← ~a" object
                (butlast keys+value)
                (lastcar keys+value)))

(defun make-new (constructor &rest args)
  (apply (%js-internal "newInstance") constructor args))

(%js-vset "internals.eval_in_lisp"
          (lambda (form)
            (eval (read-from-string form))))

(in-package :jscl)
