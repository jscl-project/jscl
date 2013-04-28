(test (find 1 #(2 1 3)))
(test (not (find 1 #(2 2 2))))
(test (not (find 1 (remove 1 #(1 2 3 1)))))

(test (find 1 (list 2 1 3)))
(test (not (find 1 (list 2 2 2))))
(test (not (find 1 (remove 1 (list 1 2 3 1)))))
