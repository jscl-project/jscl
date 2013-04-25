
(test (= 2
         (let ((x 0))
           (incf x (setf x 1))
           x)))
