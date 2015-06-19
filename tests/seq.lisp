; Functions used as :KEY argument in tests
(defvar halve  (lambda (x) (/ x 2)))
(defvar double (lambda (x) (* x 2)))

; FIND
(test (find 1 #(2 1 3)))
(test (find 1 '(2 1 3)))
(test (not (find 1 #(2 2 2))))
(test (not (find 1 '(2 2 2))))
(test (not (find 1 #(1 1 1) :test-not #'=)))
(test (not (find 1 '(1 1 1) :test-not #'=)))
(test (not (find 1 #(1 2 3) :key double)))
(test (not (find 1 '(1 2 3) :key double)))

; REMOVE
(test (not (find 1 (remove 1 #(1 2 3 1)))))
(test (not (find 1 (remove 1 '(1 2 3 1)))))
(test (not (find 2 (remove 1 #(1 2 3 1) :key halve))))
(test (not (find 2 (remove 1 '(1 2 3 1) :key halve))))
;; TODO: Rewrite this test when EQUALP exists and works on vectors
(test (equal (length (remove '(1 2) #((1 2) (1 2)) :test #'equal)) 0))
(test (null          (remove '(1 2) '((1 2) (1 2)) :test #'equal)))
(test (find 2 (remove 2 #(1 2 3) :test-not #'=)))
(test (find 2 (remove 2 '(1 2 3) :test-not #'=)))

; POSITION
(test (= (position 1 #(1 2 3))  0))
(test (= (position 1 '(1 2 3))  0))
(test (= (position 1 #(1 2 3 1)) 0))
(test (= (position 1 '(1 2 3 1)) 0))
(test (not (position 1 #(2 3 4))))
(test (not (position 1 '(2 3 4))))
(test (= (position 1 '(1 2 3) :key halve) 1))
(test (= (position 1 #(1 2 3) :key halve) 1))
(test (= (position '(1 2) '((1 2) (3 4)) :test #'equal) 0))
(test (= (position '(1 2) #((1 2) (3 4)) :test #'equal) 0))
(test (= (position 1 #(1 1 3) :test-not #'=) 2))
(test (= (position 1 '(1 1 3) :test-not #'=) 2))

;; POSITION-IF, POSITION-IF-NOT
(test (= 2 (position-if #'oddp '((1) (2) (3) (4)) :start 1 :key #'car)))
(test (= 4 (position-if-not #'integerp '(1 2 3 4 X))))  ;; (hyperspec example used "5.0", but we don't have a full numeric tower yet!)

; REMOVE-IF
(test (equal (remove-if     #'zerop '(1 0 2 0 3)) '(1 2 3)))
(test (equal (remove-if-not #'zerop '(1 0 2 0 3)) '(0 0)))
;; TODO: Rewrite these tests when EQUALP exists and works on vectors
(let ((v1 (remove-if #'zerop #(1 0 2 0 3))))
  (test (and (= (aref v1 0) 1) (= (aref v1 1) 2) (= (aref v1 2) 3)))) 
(test (every #'zerop (remove-if-not #'zerop #(1 0 2 0 3))))

; SUBSEQ
(let ((nums '(1 2 3 4 5)))
  (test (equal (subseq nums 3) '(4 5)))
  (test (equal (subseq nums 2 4) '(3 4)))
  ; Test that nums hasn't been altered: SUBSEQ should construct fresh lists
  (test (equal nums '(1 2 3 4 5))))

;;; REDUCE
(test (equal (reduce (lambda (x y) `(+ ,x ,y))
                     '(1 2 3 4))
             '(+ (+ (+ 1 2) 3) 4)))

(test (equal (reduce (lambda (x y) `(+ ,x ,y))
                     '(1 2 3 4)
                     :from-end t)
             '(+ 1 (+ 2 (+ 3 4)))))

(test (equal (reduce #'+ nil)  0))
(test (equal (reduce #'+ '(1)) 1))
(test (equal (reduce #'+ nil :initial-value 1) 1))

(test (equal (reduce #'+ '()
                     :key #'1+
                     :initial-value 100)
             100))

(test (equal (reduce #'+ '(100) :key #'1+)
             101))

; MISMATCH
(test (= (mismatch '(1 2 3) '(1 2 3 4 5 6)) 3))
(test (= (mismatch '(1 2 3) #(1 2 3 4 5 6)) 3))
(test (= (mismatch #(1 2 3) '(1 2 3 4 5 6)) 3))
(test (= (mismatch #(1 2 3) #(1 2 3 4 5 6)) 3))

; SEARCH
(test (= (search '(1 2 3) '(4 5 6 1 2 3)) 3))
(test (= (search '(1 2 3) #(4 5 6 1 2 3)) 3))
(test (= (search #(1 2 3) '(4 5 6 1 2 3)) 3))
(test (= (search #(1 2 3) #(4 5 6 1 2 3)) 3))
(test (not (search '(foo) '(1 2 3))))
(test (= (search '(1) '(4 5 6 1 2 3)) 3))
(test (= (search #(1) #(4 5 6 1 2 3)) 3))

;;; MAP

(test-equal
 (map 'list #'list '())
 nil)

(test-equal
 (let ((v (map 'vector #'list '())))
   (and (vectorp v)
	(zerop (length v))))
 t)

(test-equal
 (map 'string #'code-char '())
 "")

(test-equal
 (map 'list #'list '(1 2 3))
 '((1) (2) (3)))

(test-equal
 (map 'list #'list #(1 2 3))
 '((1) (2) (3)))

(test-equal
 (map 'list #'list "123")
 '((#\1) (#\2) (#\3)))

; CHAR-UPCASE cannot be sharp-quoted currently
(test-equal
 (map 'string (lambda (c) (char-upcase c)) '(#\a #\b #\c))
 "ABC")

(test-equal
 (map 'string (lambda (c) (char-upcase c)) #(#\a #\b #\c))
 "ABC")

(test-equal
 (map 'string (lambda (c) (char-upcase c)) "abc")
 "ABC")

(test-equal
 (map '(vector character) (lambda (c) (char-upcase c)) '(#\a #\b #\c))
 "ABC")

(test-equal
 (map '(vector character) (lambda (c) (char-upcase c)) #(#\a #\b #\c))
 "ABC")

(test-equal
 (map '(vector character) (lambda (c) (char-upcase c)) "abc")
 "ABC")

(test-equal
 (let ((v (map 'vector #'list '(1 2 3))))
   (and (vectorp v)
	(equal '(1) (aref v 0))
	(equal '(2) (aref v 1))
	(equal '(3) (aref v 2))))
 t)

(test-equal
 (let ((v (map 'vector #'list #(1 2 3))))
   (and (vectorp v)
	(equal '(1) (aref v 0))
	(equal '(2) (aref v 1))
	(equal '(3) (aref v 2))))
 t)

(test-equal
 (let ((v (map 'vector #'list "123")))
   (and (vectorp v)
	(equal '(#\1) (aref v 0))
	(equal '(#\2) (aref v 1))
	(equal '(#\3) (aref v 2))))
 t)

(test-equal
 (let ((v (map '(vector) #'list '(1 2 3))))
   (and (vectorp v)
	(equal '(1) (aref v 0))
	(equal '(2) (aref v 1))
	(equal '(3) (aref v 2))))
 t)

(test-equal
 (let ((v (map '(vector) #'list #(1 2 3))))
   (and (vectorp v)
	(equal '(1) (aref v 0))
	(equal '(2) (aref v 1))
	(equal '(3) (aref v 2))))
 t)

(test-equal
 (let ((v (map '(vector) #'list "123")))
   (and (vectorp v)
	(equal '(#\1) (aref v 0))
	(equal '(#\2) (aref v 1))
	(equal '(#\3) (aref v 2))))
 t)

(test-equal
 (map 'list #'list '(a b c) #(1 2 3) "xyz")
 '((a 1 #\x) (b 2 #\y) (c 3 #\z)))


(test-equal
 (let* ((acc '())
	(result (null (map nil (lambda (x) (push x acc)) '(1 2 3)))))
   (list acc result))
 '((3 2 1) t))
 
