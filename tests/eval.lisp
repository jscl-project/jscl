(tests (= (eval '(+ 1 2)) 3)
 (= 42 (progn
         (eval '(defun test-fun (x y)
                 (+ x y)))
         (eval '(test-fun 40 2)))))
