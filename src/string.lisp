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

;; (defun stringp (x)
;;   (and (vectorp x) (eq (array-element-type x) 'character)))

(defun stringp (s)
  (stringp s))

(defun make-string (n &key initial-element)
  (make-array n :element-type 'character :initial-element initial-element))

;; (defun char-to-string (x)
;;   (make-string 1 :initial-element x))

(defun string (x)
  (cond ((stringp x) x)
        ((symbolp x) (symbol-name x))
        (t (char-to-string x))))

(defun string= (s1 s2)
  (let* ((s1 (string s1))
         (s2 (string s2))
         (n (length s1)))
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

(define-setf-expander char (string index)
  (let ((g!string (gensym))
        (g!index (gensym))
        (g!value (gensym)))
    (values (list g!string g!index)
            (list string index)
            (list g!value)
            `(aset ,g!string ,g!index ,g!value)
            `(char ,g!string ,g!index))))

(defun concatenate-two (string1 string2)
  (let* ((len1 (length string1))
         (len2 (length string2))
         (string (make-array (+ len1 len2) :element-type 'character))
         (i 0))
    (dotimes (j len1)
      (aset string i (char string1 j))
      (incf i))
    (dotimes (j len2)
      (aset string i (char string2 j))
      (incf i))
    string))
