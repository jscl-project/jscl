
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


(let ((ht (make-hash-table :test #'equal)))
  (setf (gethash "foo" ht) 10)
  (test (eq (remhash "foo" ht) t))
  (test (eq (remhash "foo" ht) nil))
  (test (null (gethash "foo" ht))))


;;; MAPHASH

(let ((ht (make-hash-table))
      (count 0))
  (maphash (lambda (key value)
             (declare (ignore key value))
             (setq count (1+ count)))
           ht)
  (test (zerop count)))

(let ((ht (make-hash-table))
      (count 0))
  (setf (gethash :x ht) 10)
  (maphash (lambda (key value)
	     (setq count (1+ count)))
	   ht)
  (test (= count 1)))

(let ((ht (make-hash-table)))
  (setf (gethash :x ht) 10)
  (setf (gethash :y ht) 20)
  (maphash (lambda (key value)
	     (when (eq key :x)
	       (test (= value 10)))
	     (when (eq key :y)
	       (test (= value 20))))
	   ht))

(let ((ht (make-hash-table)))
  (test
   (eq nil (maphash (lambda (key value)
		      (declare (ignore key value)))
		    ht))))
