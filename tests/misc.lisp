;; STEP macro
#+jscl
(test (= 4
         (step (progn (setf x 5) (decf x)))))
