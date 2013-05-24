
(test (arrayp #(1 2 3 4)))
(test (vectorp #(1 2 3 4)))
(test (not (vectorp (make-array '(3 3)))))
