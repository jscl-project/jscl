
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

(let ((ht (make-hash-table :test #'equal))
      (result))
    (push (cons 1 2) (gethash "key" ht))
    (push (cons 3 4) (gethash "key" ht))
    (test (equal (gethash "key" ht) '((3 . 4) (1 . 2))))
    (setf (gethash "baz" ht) '(1 2 3))
    (push '(5 6 7) (gethash "baz" ht))
    (test (equal (gethash "baz" ht) '((5 6 7) 1 2 3)))
    (maphash (lambda (k v) (push (list k v) result)) ht)
    (test (equal result '(("baz" ((5 6 7) 1 2 3)) ("key" ((3 . 4) (1 . 2)))))))

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
