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

(defvar *root* (%js-vref "window"))

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

(define-setf-expander oget* (object key &rest keys)
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
            `(oset* ,g!value ,g!object ,@g!keys)
            `(oget* ,g!object ,@g!keys))))



