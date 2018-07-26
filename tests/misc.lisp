;; STEP macro
#+jscl
(tests (= 4
         (step (progn (setf x 5) (decf x)))))
