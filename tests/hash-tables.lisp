;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/hash-tables.lisp!")

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
(test (eq (hash-table-count (make-hash-table)) 0))

(defun temp-hash-table (&key test (fill nil))
  (let ((h (apply 'make-hash-table (if test (list :test test))))
        (keys '(one two three four five six))
        (vals '(1 2 3 4  5 6)))
    (if fill
        (mapcar (lambda (x y) (setf (gethash x h) y))
                keys
                vals))
    h))

(test (eq (hash-table-count (temp-hash-table)) 0))
(test (eq (hash-table-count (temp-hash-table :fill t)) 6))

;;; test clrhash
(test
 (eq
  (let ((h (temp-hash-table :fill t)))
    (clrhash h)
    (hash-table-count h))
  0))

;;; test copy-hash
(test
 (equal 
  (let* ((ht (temp-hash-table :fill t))
         (ht-copy (jscl::copy-hash-table ht))
         (map nil))
    (maphash
     (lambda (k1 v1)
       (let ((v2 (gethash k1 ht-copy)))
         (push (eq v1 v2) map))) ht)
    (remove-duplicates map))
  '(t)))

(test
 (equal
  (let* ((ht (temp-hash-table :test #'equal :fill t))
         (ht-copy)
         (map nil))
    (map nil (lambda (key)
               (setf (gethash key ht) (if (symbolp key)
                                          (symbol-name key)
                                          key)))
         '(one-key two-key set-difference multiple-value-bind :test "small string"))
    (setq ht-copy (jscl::copy-hash-table ht))
    (maphash
     (lambda (k1 v1)
       (let ((v2 (gethash k1 ht-copy)))
         (push (equal v1 v2) map))) ht)
    (remove-duplicates map))
  '(t)))

;;; test hash-table-printer
(test (string= "#<hash-table :test eq :count 0>"
               (write-to-string (temp-hash-table :test #'eq))))
(test (string= "#<hash-table :test eql :count 0>"
               (write-to-string (temp-hash-table))))
(test (string= "#<hash-table :test equal :count 0>"
               (write-to-string (temp-hash-table :test #'equal))))
(test (string= "#<hash-table :test eql :count 6>"  (write-to-string (temp-hash-table :fill t))))
(test (string= "#<hash-table :test eql :count 5>"
               (write-to-string
                (let ((h (temp-hash-table :fill t)))
                  (remhash 'one h)
                  h))))

;;; Test numbers as keys
(let ((ht (make-hash-table)))
  (test (eq nil (gethash 123 ht)))
  (test (eq 'foo (setf (gethash 123 ht) 'foo)))
  (test (eq 'foo (gethash 123 ht))))

;;; Test numbers are different than strings
(let ((ht (make-hash-table :test #'equal)))
  (test (equal 'foo (setf (gethash 123 ht) 'foo)))
  (test (equal 'bar (setf (gethash "123" ht) 'bar)))
  (test (equal 'foo (gethash 123 ht)))
  (test (equal 'bar (gethash "123" ht)))
  (test (eq 2 (length (hash-table-keys ht)))))

;;; EOF
