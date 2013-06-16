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

; ELT
(test (eq 1 (elt (vector '(1 2 3)) 0)))
(test (eq 2 (elt '(1 2 3) 1)))
(test (eq 1 (elt '(1 2 3) 0)))

; VECTOR
(test (arrayp (vector '(1 2))))

; VECTORP
(test (vectorp (vector '(1 2))))
