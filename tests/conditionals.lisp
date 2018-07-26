; Tests for conditional forms
; Boolean operators
(tests (eql (and nil 1) nil)
       (=   (and 1   2)   2)
       
       (= (or  nil 1)   1)
       (= (or  1   2)   1)
       
					; COND
       (eql nil (cond))
       (=   1   (cond (1)))
       (= 1
	  (let ((x 0))
	    (cond ((incf x)))))
       (=   2   (cond (1 2)))
       (=   3   (cond (nil 1) (2 3)))
       (eql nil (cond (nil 1) (nil 2)))
       
					; CASE
       
       (= (case 1 (2 3) (otherwise 42)) 42)
       (= (case 1 (2 3) (t 42)) 42)
       (= (case 1 (2 3) (1 42)) 42)
       (null (case 1 (2 3))))
