;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/seq.lisp!")

;;; Functions used as :KEY argument in tests
(defvar halve  (lambda (x) (/ x 2)))
(defvar double (lambda (x) (* x 2)))

;;; COUNT
(test (= (count #\a "how many A's are there in here?") 2))
(test (= (count #\a "how many A's are there in here?" :start 10) 1))
(test (= (count 'a '(a b c d e a e f)) 2))
(test (= (count 1 '(1 2 2 3 2 1 2 2 5 4) :key #'1-) 5))
(test (= (count #\1 "11111011" :start 2 :end 7) 4))
(test (= (count #\1 "11111011" :start 2 :end 7 :from-end t) 4))

;;; COUNT-IF, COUNT-IF-NOT
(test (= (count-if #'upper-case-p "The Crying of Lot 49" :start 4) 2))
(test (= (count-if #'not '(a b nil c d nil e)) 2))
(test (= (count-if #'evenp '(1 2 3 4 4 1 8 10 1) :key #'1+) 4))
(test (= (count-if #'evenp '(1 2 3 4 4 1 8 10 1) :key #'1+ :from-end t) 4))
(test (= (count-if-not #'oddp '((1) (2) (3) (4)) :key #'car) 2))
(test (= (count-if-not #'oddp '((1) (2) (3) (4)) :key #'car :from-end t) 2))
(test (= (count-if-not #'not '(a b nil c d nil e)) 5))
(test (= (count-if-not #'oddp '(1 2 3 4 4 1 8 10 1) :key #'1+) 4))

;;; FIND
(test (find 1 #(2 1 3)))
(test (find 1 '(2 1 3)))
(test (not (find 1 #(2 2 2))))
(test (not (find 1 '(2 2 2))))
(test (not (find 1 #(1 1 1) :test-not #'=)))
(test (not (find 1 '(1 1 1) :test-not #'=)))
(test (not (find 1 #(1 2 3) :key double)))
(test (not (find 1 '(1 2 3) :key double)))

;;; REMOVE
(test (not (find 1 (remove 1 #(1 2 3 1)))))
(test (not (find 1 (remove 1 '(1 2 3 1)))))
(test (not (find 2 (remove 1 #(1 2 3 1) :key halve))))
(test (not (find 2 (remove 1 '(1 2 3 1) :key halve))))
;;; TODO: Rewrite this test when EQUALP exists and works on vectors
(test (equal (length (remove '(1 2) #((1 2) (1 2)) :test #'equal)) 0))
(test (null          (remove '(1 2) '((1 2) (1 2)) :test #'equal)))
(test (find 2 (remove 2 #(1 2 3) :test-not #'=)))
(test (find 2 (remove 2 '(1 2 3) :test-not #'=)))

;;; SUBSTITUTE
(test (equal (substitute #\_ #\- "Hello-World") "Hello_World"))
(test (equal (substitute 4 5 '(1 2 3 4)) '(1 2 3 4)))
(test (equal (substitute 99 3 '(1 2 3 4)) '(1 2 99 4)))
(test (equal (substitute 99 3 '(1 2 3 4) :test #'<=) '(1 2 99 99)))

;;; This test fails expectely as you can't compare vectors with equal.
#+nil
(test (equal (substitute 99 3 #(1 2 3 4) :test #'<=) #(1 2 99 99)))

;;; POSITION
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
(test (= (position 1 '(1 1 3) :from-end nil) 0))
(test (= (position 1 '(1 1 3) :from-end t) 1))
(test (= (position #\a "baobab" :from-end t) 4))

;;; POSITION-IF, POSITION-IF-NOT
(test (= 2 (position-if #'oddp '((1) (2) (3) (4)) :start 1 :key #'car)))
(test (= 4 (position-if-not #'integerp '(1 2 3 4 X))))  ;; (hyperspec example used "5.0", but we don't have a full numeric tower yet!)
(test (= 4 (position-if #'oddp '((1) (2) (3) (4) (5)) :start 1 :key #'car :from-end t)))
(test (= 4 (position-if-not #'integerp '(1 2 3 4 X Y))))  ;; (hyperspec example used "5.0", but we don't have a full numeric tower yet!)
(test (= 5 (position-if-not #'integerp '(1 2 3 4 X Y) :from-end t)))

;;; REMOVE-IF
(test (equal (remove-if     #'zerop '(1 0 2 0 3)) '(1 2 3)))
(test (equal (remove-if-not #'zerop '(1 0 2 0 3)) '(0 0)))
;;; TODO: Rewrite these tests when EQUALP exists and works on vectors
(let ((v1 (remove-if #'zerop #(1 0 2 0 3))))
  (test (and (= (aref v1 0) 1) (= (aref v1 1) 2) (= (aref v1 2) 3)))) 
(test (every #'zerop (remove-if-not #'zerop #(1 0 2 0 3))))

;;; SUBSEQ
(let ((nums '(1 2 3 4 5)))
  (test (equal (subseq nums 3) '(4 5)))
  (test (equal (subseq nums 2 4) '(3 4)))
  ;; Test that nums hasn't been altered: SUBSEQ should construct fresh lists
  (test (equal nums '(1 2 3 4 5))))

;;; REVERSE
(test (eq (reverse nil) nil))
(test (equal (reverse '(a b c)) '(c b a)))
;;; FIXME: When replace the following two cases when implemented.
(test (zerop (length (reverse #()))))
;;; (test (equalp (reverse #(a b c)) #(c b a)))
(let ((xs (reverse #(a b c)))
      (pattern #(c b a)))
  (test (equal (aref xs 0) (aref pattern 0)))
  (test (equal (aref xs 1) (aref pattern 1)))
  (test (equal (aref xs 2) (aref pattern 2))))
(test (equal (reverse "") ""))
(test (equal (reverse "abc") "cba"))

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
(test (= (reduce #'+ #(1 2 3))
         6))
(test (equal '((Z . C) . D)
             (reduce #'cons #(a b c d e f) :start 2 :end 4 :initial-value 'z)))

(test (equal '1
             (reduce #'(lambda () (error "When reducing a sequence with one element the function should not be called"))
                     #(1))))

(test (equal 3 (reduce #'(lambda () (error "When reducing a sequence with one element the function should not be called"))
                       #(1 2 3 4) :start 2 :end 3)))

(test (equal (reduce #'cons '(1) :initial-value 0) '(0 . 1)))

;;; The following tests reduced reduce were copied from ANSI CL TESTS.
(test (equal (reduce #'cons '(a b c d e f) :start 1 :end 4 :from-end t)
             '(b c . d)))
(test (equal (reduce #'cons '(a b c d e f) :start 1 :end 4 :from-end t
                                           :initial-value nil)
             '(b c d)))

;;; MISMATCH
(test (= (mismatch '(1 2 3) '(1 2 3 4 5 6)) 3))
(test (= (mismatch '(1 2 3) #(1 2 3 4 5 6)) 3))
(test (= (mismatch #(1 2 3) '(1 2 3 4 5 6)) 3))
(test (= (mismatch #(1 2 3) #(1 2 3 4 5 6)) 3))

;;; SEARCH
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

;;; CHAR-UPCASE cannot be sharp-quoted currently
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
 
;;; CONCATENATE
(test-equal
 (concatenate 'string "all" " " "together" " " "now")
 "all together now")

(test-equal
 (concatenate 'list "ABC" '(d e f) #(1 2 3) "1011")
 '(#\A #\B #\C D E F 1 2 3 #\1 #\0 #\1 #\1))

(test-equal
 (concatenate 'list)
 nil)

(test-equal
 (handler-case
     (concatenate '(vector * 2) "a" "bc")
   (error () :signalled))
 :signalled)


;;; REMOVE-DUPLICATES
(test 
 (equal
  (list
   (equal (remove-duplicates "aBcDAbCd" :test #'char-equal :from-end t) "aBcD")
   (equal (remove-duplicates '(a b c b d d e)) '(A C B D E))
   (equal (remove-duplicates '(a b c b d d e) :from-end t) '(A B C D E))
   (equal (remove-duplicates '((foo #\a) (bar #\%) (baz #\A))
                             :test #'char-equal :key #'cadr) '((BAR #\%) (BAZ #\A)))
   (equal (remove-duplicates '((foo #\a) (bar #\%) (baz #\A)) 
                             :test #'char-equal :key #'cadr :from-end t) '((FOO #\a) (BAR #\%))))
  (list t t t t t)))


;;; SETF with ELT
;;; TODO: Rewrite this test when EQUALP exists and works on vectors
;;; https://github.com/jscl-project/jscl/issues/479
(test (equal '(42 0 0)
             (let ((vec (vector 0 0 0)))
               (setf (elt vec 0) 42)
               (jscl::vector-to-list vec))))

;;; EOF
