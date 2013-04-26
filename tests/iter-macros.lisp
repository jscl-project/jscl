; Tests for macros implementing iteration constructs
; DOTIMES
(test (let ((total 0))
        (dotimes (n 6)
          (incf total n))
        (= total 15)))

; DOLIST
(test (let ((total 0))
        (dolist (n '(1 2 3 4 5))
          (incf total n))
        (= total 15)))

; DO
(test (do ((a 0 b)                                 
           (b 1 (+ a b))                                                          
           (n 0 (1+ n)))                                                          
        ((= n 10) 
         (= a 55))))

; DO*
(test (do* ((a 0 b)                                 
            (b 1 (+ a b))                                                          
            (n 0 (1+ n)))                                                          
        ((= n 10) 
         (= a 512))))
