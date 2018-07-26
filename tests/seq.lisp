; Functions used as :KEY argument in tests
(defvar halve  (lambda (x) (/ x 2)))
(defvar double (lambda (x) (* x 2)))
;; COUNT
(tests (= (count #\a "how many A's are there in here?") 2)
       (= (count #\a "how many A's are there in here?" :start 10) 1)
       (= (count 'a '(a b c d e a e f)) 2)
       (= (count 1 '(1 2 2 3 2 1 2 2 5 4) :key #'1-) 5)
       (= (count #\1 "11111011" :start 2 :end 7) 4)
       (= (count #\1 "11111011" :start 2 :end 7 :from-end t) 4)

       ;; COUNT-IF, COUNT-IF-NOT
       (= (count-if #'upper-case-p "The Crying of Lot 49" :start 4) 2)
       (= (count-if #'not '(a b nil c d nil e)) 2)
       (= (count-if #'evenp '(1 2 3 4 4 1 8 10 1) :key #'1+) 4)
       (= (count-if #'evenp '(1 2 3 4 4 1 8 10 1) :key #'1+ :from-end t) 4)
       (= (count-if-not #'oddp '((1) (2) (3) (4)) :key #'car) 2)
       (= (count-if-not #'oddp '((1) (2) (3) (4)) :key #'car :from-end t) 2)
       (= (count-if-not #'not '(a b nil c d nil e)) 5)
       (= (count-if-not #'oddp '(1 2 3 4 4 1 8 10 1) :key #'1+) 4)

       ;; FIND
       (find 1 #(2 1 3))
       (find 1 '(2 1 3))
       (not (find 1 #(2 2 2)))
       (not (find 1 '(2 2 2)))
       (not (find 1 #(1 1 1) :test-not #'=))
       (not (find 1 '(1 1 1) :test-not #'=))
       (not (find 1 #(1 2 3) :key double))
       (not (find 1 '(1 2 3) :key double))
       ;; REMOVE
       (not (find 1 (remove 1 #(1 2 3 1))))
       (not (find 1 (remove 1 '(1 2 3 1))))
       (not (find 2 (remove 1 #(1 2 3 1) :key halve)))
       (not (find 2 (remove 1 '(1 2 3 1) :key halve)))
       ;; TODO: Rewrite this  when EQUALP exists and works on vectors
       (equal (length (remove '(1 2) #((1 2) (1 2)) :test #'equal)) 0)
       (null          (remove '(1 2) '((1 2) (1 2)) :test #'equal))
       (find 2 (remove 2 #(1 2 3) :test-not #'=))
       (find 2 (remove 2 '(1 2 3) :test-not #'=))

       ;; SUBSTITUTE
       (equal (substitute #\_ #\- "Hello-World") "Hello_World")
       (equal (substitute 4 5 '(1 2 3 4)) '(1 2 3 4))
       (equal (substitute 99 3 '(1 2 3 4)) '(1 2 99 4))
       (equal (substitute 99 3 '(1 2 3 4) :test #'<=) '(1 2 99 99))


       ;; POSITION
       (= (position 1 #(1 2 3))  0)
       (= (position 1 '(1 2 3))  0)
       (= (position 1 #(1 2 3 1)) 0)
       (= (position 1 '(1 2 3 1)) 0)
       (not (position 1 #(2 3 4)))
       (not (position 1 '(2 3 4)))
       (= (position 1 '(1 2 3) :key halve) 1)
       (= (position 1 #(1 2 3) :key halve) 1)
       (= (position '(1 2) '((1 2) (3 4)) :test #'equal) 0)
       (= (position '(1 2) #((1 2) (3 4)) :test #'equal) 0)
       (= (position 1 #(1 1 3) :test-not #'=) 2)
       (= (position 1 '(1 1 3) :test-not #'=) 2)
       (= (position 1 '(1 1 3) :from-end nil) 0)
       (= (position 1 '(1 1 3) :from-end t) 1)
       (= (position #\a "baobab" :from-end t) 4)

       ;; POSITION-IF, POSITION-IF-NOT
       (= 2 (position-if #'oddp '((1) (2) (3) (4)) :start 1 :key #'car))
       (= 4 (position-if-not #'integerp '(1 2 3 4 X)))  ;; (hyperspec example used "5.0", but we don't have a full numeric tower yet!)
       (= 4 (position-if #'oddp '((1) (2) (3) (4) (5)) :start 1 :key #'car :from-end t))
       (= 4 (position-if-not #'integerp '(1 2 3 4 X Y)))  ;; (hyperspec example used "5.0", but we don't have a full numeric tower yet!)
       (= 5 (position-if-not #'integerp '(1 2 3 4 X Y) :from-end t))

					; REMOVE-IF
       (equal (remove-if     #'zerop '(1 0 2 0 3)) '(1 2 3))
       (equal (remove-if-not #'zerop '(1 0 2 0 3)) '(0 0)))
;; TODO: Rewrite these tests when EQUALP exists and works on vectors
(let ((v1 (remove-if #'zerop #(1 0 2 0 3))))
  (tests (and (= (aref v1 0) 1) (= (aref v1 1) 2) (= (aref v1 2) 3))))
(tests (every #'zerop (remove-if-not #'zerop #(1 0 2 0 3))))

; SUBSEQ
(let ((nums '(1 2 3 4 5)))
  (tests (equal (subseq nums 3) '(4 5))
	 (equal (subseq nums 2 4) '(3 4))
					; Test that nums hasn't been altered: SUBSEQ should construct fresh lists
	 (equal nums '(1 2 3 4 5))))

;; REVERSE
(tests (eq (reverse nil) nil)
       (equal (reverse '(a b c)) '(c b a))
       ;; FIXME: When replace the following two cases when implemented.
       (zerop (length (reverse #()))))
;; (test (equalp (reverse #(a b c)) #(c b a)))
(let ((xs (reverse #(a b c)))
      (pattern #(c b a)))
  (tests (equal (aref xs 0) (aref pattern 0))
	 (equal (aref xs 1) (aref pattern 1))
	 (equal (aref xs 2) (aref pattern 2))))
(tests (equal (reverse "") "")
       (equal (reverse "abc") "cba")

;;; REDUCE
       (equal (reduce (lambda (x y) `(+ ,x ,y))
		      '(1 2 3 4))
	      '(+ (+ (+ 1 2) 3) 4))

       (equal (reduce (lambda (x y) `(+ ,x ,y))
		      '(1 2 3 4)
		      :from-end t)
	      '(+ 1 (+ 2 (+ 3 4))))

       (equal (reduce #'+ nil)  0)
       (equal (reduce #'+ '(1)) 1)
       (equal (reduce #'+ nil :initial-value 1) 1)

       (equal (reduce #'+ '()
		      :key #'1+
		      :initial-value 100)
	      100)

       (equal (reduce #'+ '(100) :key #'1+)
	      101)
       (= (reduce #'+ #(1 2 3))
	  6)
       (equal '((Z . C) . D)
	      (reduce #'cons #(a b c d e f) :start 2 :end 4 :initial-value 'z))

       (equal '1
	      (reduce #'(lambda () (error "When reducing a sequence with one element the function should not be called"))
		      #(1)))

       (equal 3 (reduce #'(lambda () (error "When reducing a sequence with one element the function should not be called"))
			#(1 2 3 4) :start 2 :end 3))

       (equal (reduce #'cons '(1) :initial-value 0) '(0 . 1))

       ;; The following tests reduced reduce were copied from ANSI CL TESTS.
       (equal (reduce #'cons '(a b c d e f) :start 1 :end 4 :from-end t)
	      '(b c . d))
       (equal (reduce #'cons '(a b c d e f) :start 1 :end 4 :from-end t
		      :initial-value nil)
	      '(b c d))

					; MISMATCH
       (= (mismatch '(1 2 3) '(1 2 3 4 5 6)) 3)
       (= (mismatch '(1 2 3) #(1 2 3 4 5 6)) 3)
       (= (mismatch #(1 2 3) '(1 2 3 4 5 6)) 3)
       (= (mismatch #(1 2 3) #(1 2 3 4 5 6)) 3)

					; SEARCH
       (= (search '(1 2 3) '(4 5 6 1 2 3)) 3)
       (= (search '(1 2 3) #(4 5 6 1 2 3)) 3)
       (= (search #(1 2 3) '(4 5 6 1 2 3)) 3)
       (= (search #(1 2 3) #(4 5 6 1 2 3)) 3)
       (not (search '(foo) '(1 2 3)))
       (= (search '(1) '(4 5 6 1 2 3)) 3)
       (= (search #(1) #(4 5 6 1 2 3)) 3))

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

;; CHAR-UPCASE cannot be sharp-quoted currently
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
