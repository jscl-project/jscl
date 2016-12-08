;;;; string.lisp

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
(in-package :jscl)

(/debug "loading string.lisp!")

(defun jscl/cl::stringp (s)
  (stringp s))

(defun jscl/cl::string-length (string)
  (storage-vector-size string))

(defun jscl/cl::make-string (n &key initial-element)
  (make-array n :element-type 'character :initial-element initial-element))

(defun jscl/cl::char (string index)
  (check-type string string)
  (check-type index (and fixnum (integer 0 *)))
  (storage-vector-ref string index))

(defun jscl/cl::string (x)
  (etypecase x
    (string x)
    (symbol (symbol-name x))
    (character (make-string 1 :initial-element x))))

(defun jscl/cl::string= (s1 s2 &key (start1 0) end1 (start2 0) end2)
  (let* ((s1 (string s1))
         (s2 (string s2))
         (end1 (or end1 (length s1)))
         (end2 (or end2 (length s2))))
    (when (= (- end2 start2) (- end1 start1))
      (dotimes (i (- end2 start2) t)
        (unless (char= (char s1 (+ start1 i)) (char s2 (+ start2 i)))
          (return-from jscl/cl::string= nil))))))

(defun jscl/cl::string/= (s1 s2 &key (start1 0) end1 (start2 0) end2)
  (let* ((s1 (string s1))
         (s2 (string s2))
         (n1 (length s1))
         (n2 (length s2))
         (end1 (or end1 n1))
         (end2 (or end2 s2)))
    (dotimes (i (max (- end1 start1) (- end2 start2)) nil)
      (when (or (>= (+ start1 i) n1)
                (>= (+ start2 i) n2))
        (return-from jscl/cl::string/= (+ start1 i)))
      (unless (char= (char s1 (+ start1 i)) (char s2 (+ start2 i)))
        (return-from jscl/cl::string/= (+ start1 i))))))


(defun compare-strings (s1 s2 start1 end1 start2 end2
                        char-eq char-lt if-eq if-a-sub-b if-b-sub-a)
  ;; step through  strings S1  and S2, using  bounds START1  END1 START2
  ;; END2. using  character comparison functions CHAR-EQ  (equality) and
  ;; CHAR-LT (less-than), find the first  difference, if any, and return
  ;; its index. The IF-* params say what to do if the strings are equal,
  ;; or a  strict prefix substring  of the other:  if T, it  returns the
  ;; first different index. if NIL, it returns NIL.
  (let* ((s1 (string s1))
         (s2 (string s2))
         (end1 (or end1 (length s1)))
         (end2 (or end2 (length s2)))
         (len-1 (- end1 start1))
         (len-2 (- end2 start2)))
    (dotimes (i (max len-1 len-2) (if if-eq (+ start1 i) nil))
      (when (= i len-1)  ;; ran off the end of s1
        (return-from compare-strings (if if-a-sub-b (+ start1 i) nil)))
      (when (= i len-2)  ;; ran off the end of s2
        (return-from compare-strings (if if-b-sub-a (+ start1 i) nil)))
      (let ((c1 (char s1 (+ start1 i)))
            (c2 (char s2 (+ start2 i))))
        (when (not (funcall char-eq c1 c2))  ;; found a difference
          (return-from compare-strings
            (if (not (funcall char-lt c1 c2))
                (+ start1 i)
                nil)))))))

(defun jscl/cl::string< (s1 s2 &key (start1 0) end1 (start2 0) end2)
  (compare-strings s1 s2 start1 end1 start2 end2
                   #'char= #'char> nil t nil))

(defun jscl/cl::string> (s1 s2 &key (start1 0) end1 (start2 0) end2)
  (compare-strings s1 s2 start1 end1 start2 end2
                   #'char= #'char< nil nil t))

(defun jscl/cl::string<= (s1 s2 &key (start1 0) end1 (start2 0) end2)
  (compare-strings s1 s2 start1 end1 start2 end2
                   #'char= #'char> t t nil))

(defun jscl/cl::string>= (s1 s2 &key (start1 0) end1 (start2 0) end2)
  (compare-strings s1 s2 start1 end1 start2 end2
                   #'char= #'char< t nil t))

(defun jscl/cl::string-lessp (s1 s2 &key (start1 0) end1 (start2 0) end2)
  (compare-strings s1 s2 start1 end1 start2 end2
                   #'char-equal #'char-greaterp nil t nil))

(defun jscl/cl::string-greaterp (s1 s2 &key (start1 0) end1 (start2 0) end2)
  (compare-strings s1 s2 start1 end1 start2 end2
                   #'char-equal #'char-lessp nil nil t))

(defun jscl/cl::string-not-greaterp (s1 s2 &key (start1 0) end1 (start2 0) end2)
  (compare-strings s1 s2 start1 end1 start2 end2
                   #'char-equal #'char-greaterp t t nil))

(defun jscl/cl::string-not-lessp (s1 s2 &key (start1 0) end1 (start2 0) end2)
  (compare-strings s1 s2 start1 end1 start2 end2
                   #'char-equal #'char-lessp t nil t))

(defun (setf jscl/cl::char) (value string index)
  (aset string index value))


(defun concat (&rest strs)
  (flet ((concat-two (object1 object2)
           (if (and (storage-vector-p object1)
                    (storage-vector-p object2))
               (concatenate-storage-vector object1 object2)
               (error "Unimplemented: JSCL cannot yet concatenate ~s and ~s"
                      object1 object2))))
    (reduce #'concat-two strs :initial-value "")))


(defun jscl/cl::concatenate (target &rest objects)
  "A simple CONCATENATE that works for  strings and vectors. It does not
accept  all of  the target  object types  that it  should, and  does not
correctly handle  checking if  the type  of elements  in the  target can
accept the types of elements in the objects to be concatenated (TODO).

In other words: (concatenate 'string one-string another-string) is fine,
but more complex cases like mixing  strings and vectors are probably not
handled correctly yet."
  (etypecase target
    (symbol
     (ecase target
       ((string vector) (apply #'concat objects))
       ((cons list) (apply #'reduce #'append objects))))
    (cons
     (ecase (car target)
       ((string vector)     ; TODO: validate element types
        (assert (= (third target) (reduce #'+ objects :key #'length))
                (target)
                "Concatenating ~:d object~:p would result in ~:d objects; ~
                                 cannot fit into ~s"
                (length objects) (reduce #'+ objects :key #'length)
                target)
        (apply #'jscl/cl::concatenate (car target) objects))
       ((array simple-array)
        (assert (and (listp (third target))
                     (= 1 (length (third target))))
                (target)
                "Cannot concatenate multi-dimensional arrays")
        (apply #'jscl/cl::concatenate
               (list 'vector (second target) (third target))
               objects))))))


(defun jscl/cl::string-upcase (string &key (start 0) end)
  (let* ((string (string string))
         (new (make-string (length string))))
    (dotimes (i (length string) new)
      (aset new i
            (if (and (or (null start) (>= i start))
                     (or (null end) (< i end)))
                (char-upcase (char string i))
                (char string i))))))

(defun jscl/cl::nstring-upcase (string &key (start 0) end)
  (let ((end (or end (length string))))
    (dotimes (i (- end start) string)
      (aset string (+ start i)
            (char-upcase (char string (+ start i)))))))

(defun jscl/cl::string-downcase (string &key (start 0) end)
  (let* ((string (string string))
         (new (make-string (length string))))
    (dotimes (i (length string) new)
      (aset new i
            (if (and (or (null start) (>= i start))
                     (or (null end) (< i end)))
                (char-downcase (char string i))
                (char string i))))))

(defun jscl/cl::nstring-downcase (string &key (start 0) end)
  (let ((end (or end (length string))))
    (dotimes (i (- end start) string)
      (aset string (+ start i)
            (char-downcase (char string (+ start i)))))))

(defun jscl/cl::string-capitalize (string &key (start 0) end)
  (let* ((string (string string))
         (new (make-string (length string)))
         (just-saw-alphanum-p nil))
    (dotimes (i (length string) new)
      (aset new i
            (cond ((or (and start (< i start))
                       (and end (> i end)))
                   (char string i))
                  ((or (= i start)
                       (not just-saw-alphanum-p))
                   (char-upcase (char string i)))
                  (t
                   (char-downcase (char string i)))))
      (setq just-saw-alphanum-p (alphanumericp (char string i))))))

(defun jscl/cl::nstring-capitalize (string &key (start 0) end)
  (let ((end (or end (length string)))
        (just-saw-alphanum-p nil))
    (dotimes (i (- end start) string)
      (aset string (+ start i)
            (if (or (zerop i)
                    (not just-saw-alphanum-p))
                (char-upcase (char string (+ start i)))
                (char-downcase (char string (+ start i)))))
      (setq just-saw-alphanum-p (alphanumericp (char string (+ start i)))))))

(defun jscl/cl::string-equal (s1 s2 &key start1 end1 start2 end2)
  (let* ((s1 (string s1))
         (s2 (string s2))
         (n1 (length s1))
         (n2 (length s2))
         (start1 (or start1 0))
         (end1 (or end1 n1))
         (start2 (or start2 0))
         (end2 (or end2 n2)))
    (when (= (- end2 start2) (- end1 start1))
      (dotimes (i (- end2 start2) t)
        (unless (char-equal (char s1 (+ start1 i)) (char s2 (+ start2 i)))
          (return-from string-equal nil))))))

;; just like  string/= but with  char-equal instead of char=  (TODO: use
;; the same code then?)
(defun jscl/cl::string-not-equal (s1 s2 &key (start1 0) end1 (start2 0) end2)
  (let* ((s1 (string s1))
         (s2 (string s2))
         (n1 (length s1))
         (n2 (length s2))
         (end1 (or end1 n1))
         (end2 (or end2 n2)))
    (dotimes (i (max (- end1 start1) (- end2 start2)) nil)
      (when (or (>= (+ start1 i) n1)
                (>= (+ start2 i) n2))
        (return-from string-not-equal (+ start1 i)))
      (unless (char-equal (char s1 (+ start1 i)) (char s2 (+ start2 i)))
        (return-from string-not-equal (+ start1 i))))))

(defun jscl/cl::string-trim (character-bag string)
  (string-left-trim character-bag (string-right-trim character-bag string)))

(defun jscl/cl::string-left-trim (character-bag string)
  (let* ((string (string string))
         (n (length string))
         (start (or (position-if-not (lambda (c) (find c character-bag))
                                     string)
                    n)))
    (subseq string start)))

(defun jscl/cl::string-right-trim (character-bag string)
  (let* ((string (string string))
         (n (length string)))
    (dotimes (i n "")
      (when (not (find (char string (- n i 1)) character-bag))
        (return-from string-right-trim (subseq string 0 (- n i)))))))
