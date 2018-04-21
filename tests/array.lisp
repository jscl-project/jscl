
(test (arrayp #(1 2 3 4)))
(test (vectorp #(1 2 3 4)))
(test (not (vectorp (make-array '(3 3)))))

(let ((array #(1 2 3 4)))
  (setf (aref array 0) t)
  (test (eq (aref array 0) t)))

