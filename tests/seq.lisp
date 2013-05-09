(test (find 1 #(2 1 3)))
(test (not (find 1 #(2 2 2))))
(test (not (find 1 (remove 1 #(1 2 3 1)))))

(test (find 1 (list 2 1 3)))
(test (not (find 1 (list 2 2 2))))
(test (not (find 1 (remove 1 (list 1 2 3 1)))))

(test (equal (remove-if     #'zerop '(1 0 2 0 3)) '(1 2 3)))
(test (equal (remove-if-not #'zerop '(1 0 2 0 3)) '(0 0)))

;; TODO: Rewrite these tests when EQUALP exists and works on vectors
(let ((v1 (remove-if #'zerop #(1 0 2 0 3))))
  (test (and (= (aref v1 0) 1) (= (aref v1 1) 2) (= (aref v1 2) 3)))) 
(test (every #'zerop (remove-if-not #'zerop #(1 0 2 0 3))))
