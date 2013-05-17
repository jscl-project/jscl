;;; string.lisp

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

(defun string (x)
  (cond ((stringp x) x)
        ((symbolp x) (symbol-name x))
        (t (char-to-string x))))

(defun string= (s1 s2)
  (let ((n (length s1)))
    (when (= (length s2) n)
      (dotimes (i n t)
        (unless (char= (char s1 i) (char s2 i))
          (return-from string= nil))))))

(defun string< (s1 s2)
  (let ((len-1 (length s1))
        (len-2 (length s2)))
    (cond ((= len-2 0) nil)
          ((= len-1 0) 0)
          (t (dotimes (i len-1 nil)
               (when (char< (char s1 i) (char s2 i))
                 (return-from string< i))
               (when (and (= i (1- len-1)) (> len-2 len-1))
                 (return-from string< (1+ i))))))))

(defun stringp (s)
  (stringp s))

(define-setf-expander char (string index)
  (let ((g!string (gensym))
        (g!index (gensym))
        (g!value (gensym)))
    (values (list g!string g!index)
            (list string index)
            (list g!value)
            `(aset ,g!string ,g!index ,g!value)
            `(char ,g!string ,g!index))))
