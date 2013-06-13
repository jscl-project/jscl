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

(defun stringp (s)
  (stringp s))

(defun string-length (string)
  (storage-vector-size string))

(defun make-string (n &key initial-element)
  (make-array n :element-type 'character :initial-element initial-element))

(defun char (string index)
  (unless (stringp string) (error "~S is not a string" string))
  (storage-vector-ref string index))

(defun string (x)
  (cond ((stringp x) x)
        ((symbolp x) (symbol-name x))
        (t (make-string 1 :initial-element x))))

(defun string= (s1 s2 &key (start1 0) end1 (start2 0) end2)
  (let* ((s1 (string s1))
         (s2 (string s2))
         (n1 (length s1))
         (n2 (length s2))
         (end1 (or end1 n1))
         (end2 (or end2 n2)))
    (when (= (- end2 start2) (- end1 start1))
      (dotimes (i (- end2 start2) t)
        (unless (char= (char s1 (+ start1 i)) (char s2 (+ start2 i)))
          (return-from string= nil))))))

(defun string/= (s1 s2 &key (start1 0) end1 (start2 0) end2)
  (let* ((s1 (string s1))
         (s2 (string s2))
         (n1 (length s1))
         (n2 (length s2))
         (end1 (or end1 n1))
         (end2 (or end2 n2)))
    (dotimes (i (max (- end1 start1) (- end2 start2)) nil)
      (when (or (>= (+ start1 i) n1)
		(>= (+ start2 i) n2))
	(return-from string/= (+ start1 i)))
      (unless (char= (char s1 (+ start1 i)) (char s2 (+ start2 i)))
	(return-from string/= (+ start1 i))))))

(defun string< (s1 s2 &key (start1 0) end1 (start2 0) end2)
  (let* ((s1 (string s1))
         (s2 (string s2))
	 (end1 (or end1 (length s1)))
	 (end2 (or end2 (length s2)))
	 (len-1 (- end1 start1))
	 (len-2 (- end2 start2)))
    (cond ((= len-2 0) nil)
          ((= len-1 0) 0)
          (t (dotimes (i len-1 nil)
	       (when (= i len-2)  ;; ran off the end of s2
		 (return-from string< nil))
               (when (char< (char s1 (+ start1 i)) (char s2 (+ start2 i)))  ;; found a difference
                 (return-from string< (+ start1 i)))
               (when (char> (char s1 (+ start1 i)) (char s2 (+ start2 i)))  ;; found a difference
                 (return-from string< nil))
               (when (and (= i (1- len-1)) (> len-2 len-1))  ;; ran off the end of s1
                 (return-from string< (+ start1 i 1))))))))

;; just like string< but with everything flipped, except the result is still relative to s1
(defun string> (s1 s2 &key (start1 0) end1 (start2 0) end2)
  (let* ((s1 (string s1))
         (s2 (string s2))
	 (end1 (or end1 (length s1)))
	 (end2 (or end2 (length s2)))
	 (len-1 (- end1 start1))
	 (len-2 (- end2 start2)))
    (cond ((= len-1 0) nil)
          ((= len-2 0) 0)
          (t (dotimes (i len-2 nil)
	       (when (= i len-1)  ;; ran off the end of s1
		 (return-from string> nil))
               (when (char> (char s1 (+ start1 i)) (char s2 (+ start2 i)))  ;; found a difference
                 (return-from string> (+ start1 i)))
               (when (char< (char s1 (+ start1 i)) (char s2 (+ start2 i)))  ;; found a difference
                 (return-from string> nil))
               (when (and (= i (1- len-2)) (> len-1 len-2))  ;; ran off the end of s2
                 (return-from string> (+ start1 i 1))))))))

;; TODO: string<=, string>=
;; - mostly like string< / string>
;; - if we run off the end of s1 and s2 at the same time, then it's =, so return len.

(define-setf-expander char (string index)
  (let ((g!string (gensym))
        (g!index (gensym))
        (g!value (gensym)))
    (values (list g!string g!index)
            (list string index)
            (list g!value)
            `(aset ,g!string ,g!index ,g!value)
            `(char ,g!string ,g!index))))


(defun concat (&rest strs)
  (flet ((concat-two (str1 str2)
           (concatenate-storage-vector str1 str2)))
    (!reduce #'concat-two strs "")))


(defun string-upcase (string &key (start 0) end)
  (let* ((string (string string))
         (new (make-string (length string))))
    (dotimes (i (length string) new)
      (aset new i
            (if (and (or (null start) (>= i start))
                     (or (null end) (< i end)))
                (char-upcase (char string i))
              (char string i))))))

(defun nstring-upcase (string &key (start 0) end)
  (let ((end (or end (length string))))
    (dotimes (i (- end start) string)
      (aset string (+ start i)
	    (char-upcase (char string (+ start i)))))))

(defun string-downcase (string &key (start 0) end)
  (let* ((string (string string))
         (new (make-string (length string))))
    (dotimes (i (length string) new)
      (aset new i
            (if (and (or (null start) (>= i start))
                     (or (null end) (< i end)))
                (char-downcase (char string i))
              (char string i))))))

(defun nstring-downcase (string &key (start 0) end)
  (let ((end (or end (length string))))
    (dotimes (i (- end start) string)
      (aset string (+ start i)
	    (char-downcase (char string (+ start i)))))))

(defun string-capitalize (string &key (start 0) end)
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

(defun nstring-capitalize (string &key (start 0) end)
  (let ((end (or end (length string)))
	(just-saw-alphanum-p nil))
    (dotimes (i (- end start) string)
      (aset string (+ start i)
	    (if (or (zerop i)
		    (not just-saw-alphanum-p))
		(char-upcase (char string (+ start i)))
	      (char-downcase (char string (+ start i)))))
      (setq just-saw-alphanum-p (alphanumericp (char string (+ start i)))))))

(defun string-equal (s1 s2 &key start1 end1 start2 end2)
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

;; just like string/= but with char-equal instead of char=
(defun string-not-equal (s1 s2 &key (start1 0) end1 (start2 0) end2)
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

(defun string-trim (character-bag string)
  (string-left-trim character-bag (string-right-trim character-bag string)))

(defun string-left-trim (character-bag string)
  (let* ((string (string string))
	 (n (length string))
	 (start (or (position-if-not (lambda (c) (find c character-bag)) string) n)))
    (subseq string start)))

(defun string-right-trim (character-bag string)
  (let* ((string (string string))
	 (n (length string)))
    (dotimes (i n "")
      (when (not (find (char string (- n i 1)) character-bag))
	(return-from string-right-trim (subseq string 0 (- n i)))))))
