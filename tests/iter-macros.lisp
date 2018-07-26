; Tests for macros implementing iteration constructs
; DOTIMES
(tests (let ((total 0))
         (dotimes (n 6)
           (incf total n))
         (= total 15))

					; DOLIST
       (let ((total 0))
         (dolist (n '(1 2 3 4 5))
	   (incf total n))
         (= total 15))

					; DO
       (do ((a 0 b)
	    (b 1 (+ a b))
	    (n 0 (1+ n)))
	   ((= n 10)
	    (= a 55)))
       (= 5
	  (do (x) (t 5)))
       (= 5
	  (do ((x)) (t 5)))
       (= 5
	  (do ((x nil)) (t 5)))
       (= 5
	  (do ((x nil nil)) (t 5)))

					; DO*
       (do* ((a 0 b)
	     (b 1 (+ a b))
	     (n 0 (1+ n)))
	    ((= n 10)
	     (= a 512)))
       (= 5
	  (do* (x) (t 5)))
       (= 5
	  (do* ((x)) (t 5)))
       (= 5
	  (do* ((x nil)) (t 5)))
       (= 5
	  (do* ((x nil nil)) (t 5))))
