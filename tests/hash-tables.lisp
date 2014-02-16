
(let ((ht (make-hash-table))
      (key "foo"))
  (setf (gethash key ht) 10)
  (test (null (gethash "foo" ht)))
  (test (equal (gethash key ht) 10))
  (setf (gethash 'foo ht) "lisp")
  (test (string= (gethash 'foo ht) "lisp")))


(let ((ht (make-hash-table :test #'equal)))
  (setf (gethash "foo" ht) 10)
  (test (equal (gethash "foo" ht) 10)))



