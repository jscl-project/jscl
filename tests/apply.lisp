; Tests for funcall/apply

(tests (equal (funcall #'list 1 2 3) '(1 2 3))
 (equal (apply #'list 1 2 3 '(4 5 6)) '(1 2 3 4 5 6))

 (equal (funcall #'funcall #'list 1 2 3) '(1 2 3))
 (equal (funcall #'apply #'list 1 2 3 '(4 5 6)) '(1 2 3 4 5 6))

 (equal (apply #'funcall #'list 1 2 3 '(4 5 6)) '(1 2 3 4 5 6))
 (equal (apply #'apply #'list 1 2 3 '(4 5 (6))) '(1 2 3 4 5 6)))
