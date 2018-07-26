
(tests (arrayp #(1 2 3 4))
       (vectorp #(1 2 3 4))
       (not (vectorp (make-array '(3 3))))

       (let ((array #(1 2 3 4)))
	 (setf (aref array 0) t)
	 (eq (aref array 0) t)))

(let ((vector (make-array 20 :initial-element 3 :fill-pointer 0)))
  (tests (= (length vector) 0))
  (setf (fill-pointer vector) 20)
  (tests (= (length vector) 20)))
