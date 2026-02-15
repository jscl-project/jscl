;;; -*- mode:lisp; coding:utf-8 -*-


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
#+jscl
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

#+jscl
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

;;; test hash-table-printer (JSCL-specific print format)
#+jscl
(progn
  (test (string= "#<HASH-TABLE :TEST eq :COUNT 0>"
                 (write-to-string (temp-hash-table :test #'eq))))
  (test (string= "#<HASH-TABLE :TEST eql :COUNT 0>"
                 (write-to-string (temp-hash-table))))
  (test (string= "#<HASH-TABLE :TEST equal :COUNT 0>"
                 (write-to-string (temp-hash-table :test #'equal))))
  (test (string= "#<HASH-TABLE :TEST eql :COUNT 6>"  (write-to-string (temp-hash-table :fill t))))
  (test (string= "#<HASH-TABLE :TEST eql :COUNT 5>"
                 (write-to-string
                  (let ((h (temp-hash-table :fill t)))
                    (remhash 'one h)
                    h)))))

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
  #+jscl (test (eq 2 (length (jscl::hash-table-keys ht)))))

;;; SXHASH

;; sxhash returns a non-negative integer
(test (integerp (sxhash 'foo)))
(test (>= (sxhash 'foo) 0))

;; sxhash returns consistent results for the same object
(test (= (sxhash 'foo) (sxhash 'foo)))
(test (= (sxhash "hello") (sxhash "hello")))
(test (= (sxhash 42) (sxhash 42)))
(test (= (sxhash #\a) (sxhash #\a)))

;; equal objects must have the same sxhash
(test (= (sxhash "test") (sxhash "test")))
(test (= (sxhash '(1 2 3)) (sxhash '(1 2 3))))
(test (= (sxhash '(a b c)) (sxhash '(a b c))))
(test (= (sxhash '((a . 1) (b . 2))) (sxhash '((a . 1) (b . 2)))))

;; different types produce different hashes
(test (not (= (sxhash 123) (sxhash "123"))))

;; nil has a defined hash
(test (integerp (sxhash nil)))
(test (= (sxhash nil) (sxhash nil)))

;; characters hash to their char-code (JSCL-specific implementation detail)
#+jscl (test (= (sxhash #\A) (char-code #\A)))

;; numbers hash based on value (JSCL-specific implementation detail)
#+jscl (test (= (sxhash 0) 0))
#+jscl (test (= (sxhash 42) 42))

;; symbols get consistent hash codes
(let ((sym 'test-symbol))
  (test (= (sxhash sym) (sxhash sym))))

;;; Test gethash second return value (found-p)
;;; These tests verify the fix for the JS boolean issue where
;;; JavaScript's `false` was incorrectly treated as truthy in Lisp.

;; gethash should return nil as second value when key is not found
(let ((ht (make-hash-table)))
  (multiple-value-bind (value found-p) (gethash 'missing ht)
    (test (null value))
    (test (null found-p))))

;; gethash should return t as second value when key IS found
(let ((ht (make-hash-table)))
  (setf (gethash 'present ht) 42)
  (multiple-value-bind (value found-p) (gethash 'present ht)
    (test (= value 42))
    (test (eq found-p t))))

;; Distinguish between key not found vs key with nil value
(let ((ht (make-hash-table)))
  (setf (gethash 'nil-value ht) nil)
  ;; Key exists with nil value - found-p should be t
  (multiple-value-bind (value found-p) (gethash 'nil-value ht)
    (test (null value))
    (test (eq found-p t)))
  ;; Key does not exist - found-p should be nil
  (multiple-value-bind (value found-p) (gethash 'not-there ht)
    (test (null value))
    (test (null found-p))))

;; gethash should return the default when key is not found
(let ((ht (make-hash-table)))
  (test (eq (gethash 'missing ht 'default) 'default))
  (setf (gethash 'present ht) 'value)
  (test (eq (gethash 'present ht 'default) 'value)))

;; Test with equal hash tables too
(let ((ht (make-hash-table :test #'equal)))
  (multiple-value-bind (value found-p) (gethash "missing" ht)
    (test (null value))
    (test (null found-p)))
  (setf (gethash "present" ht) 123)
  (multiple-value-bind (value found-p) (gethash "present" ht)
    (test (= value 123))
    (test (eq found-p t))))

;;; Test EQUAL hash table equality function
;;; These tests verify that the equal function correctly distinguishes
;;; between different keys. This catches the bug where Lisp's NIL return
;;; value was treated as truthy by JavaScript (all objects are truthy in JS).

;; Different list keys should not collide
(let ((ht (make-hash-table :test #'equal)))
  (setf (gethash '(a b) ht) 1)
  (setf (gethash '(c d) ht) 2)
  (setf (gethash '(e f) ht) 3)
  (test (= (gethash '(a b) ht) 1))
  (test (= (gethash '(c d) ht) 2))
  (test (= (gethash '(e f) ht) 3))
  (test (= (hash-table-count ht) 3)))

;; Equal (but not eq) keys should be treated as the same key
(let ((ht (make-hash-table :test #'equal)))
  (setf (gethash (list 'x 'y) ht) 'first)
  (setf (gethash (list 'x 'y) ht) 'second)
  (test (eq (gethash (list 'x 'y) ht) 'second))
  (test (= (hash-table-count ht) 1)))

;; Mixed key types should be distinguished
(let ((ht (make-hash-table :test #'equal)))
  (setf (gethash "foo" ht) 'string-key)
  (setf (gethash '(foo) ht) 'list-key)
  (setf (gethash 'foo ht) 'symbol-key)
  (test (eq (gethash "foo" ht) 'string-key))
  (test (eq (gethash '(foo) ht) 'list-key))
  (test (eq (gethash 'foo ht) 'symbol-key))
  (test (= (hash-table-count ht) 3)))

;; Nested list keys
(let ((ht (make-hash-table :test #'equal)))
  (setf (gethash '((a b) (c d)) ht) 'nested1)
  (setf (gethash '((a b) (c e)) ht) 'nested2)
  (test (eq (gethash '((a b) (c d)) ht) 'nested1))
  (test (eq (gethash '((a b) (c e)) ht) 'nested2))
  (test (= (hash-table-count ht) 2)))

;; Test with actual hash collision
;; (1 2) and (3 0) have the same sxhash (93) due to how sxhash-cons works:
;;   sxhash((1 2)) = 1*31 + (2*31 + 0) = 93
;;   sxhash((3 0)) = 3*31 + (0*31 + 0) = 93
;; This test catches the bug where Lisp NIL was truthy in JS, causing
;; all keys in the same hash bucket to appear equal.
#+jscl (test (= (sxhash '(1 2)) (sxhash '(3 0))))  ; verify collision (JSCL-specific)
(test (not (equal '(1 2) '(3 0))))          ; verify not equal
(let ((ht (make-hash-table :test #'equal)))
  (setf (gethash '(1 2) ht) 'value-a)
  (setf (gethash '(3 0) ht) 'value-b)
  ;; With broken equality, value-b would overwrite value-a since both
  ;; keys are in the same bucket and broken equality returns truthy for all
  (test (eq (gethash '(1 2) ht) 'value-a))
  (test (eq (gethash '(3 0) ht) 'value-b))
  (test (= (hash-table-count ht) 2))
  ;; Also verify lookup with fresh equal keys works
  (test (eq (gethash (list 1 2) ht) 'value-a))
  (test (eq (gethash (list 3 0) ht) 'value-b)))

;;; HASH-TABLE-P

(test (hash-table-p (make-hash-table)))
(test (hash-table-p (make-hash-table :test #'equal)))
(test (not (hash-table-p nil)))
(test (not (hash-table-p t)))
(test (not (hash-table-p 42)))
(test (not (hash-table-p "hash")))
(test (not (hash-table-p '(a b c))))
(test (not (hash-table-p #(1 2 3))))

;; A raw JS Map counts as a hash table with EQ test
#+jscl
(let ((js-map (jscl/ffi:new #j:Map)))
  (test (hash-table-p js-map))
  (test (eq (hash-table-test js-map) 'eq)))

;;; HASH-TABLE-TEST

;; hash-table-test returns the correct symbol for each test function
(test (eq (hash-table-test (make-hash-table :test #'eq)) 'eq))
(test (eq (hash-table-test (make-hash-table :test #'eql)) 'eql))
(test (eq (hash-table-test (make-hash-table :test #'equal)) 'equal))

;; hash-table-test also accepts symbol arguments and returns the same symbol
(test (eq (hash-table-test (make-hash-table :test 'eq)) 'eq))
(test (eq (hash-table-test (make-hash-table :test 'eql)) 'eql))
(test (eq (hash-table-test (make-hash-table :test 'equal)) 'equal))

;; the default test is eql
(test (eq (hash-table-test (make-hash-table)) 'eql))

;; hash-table-test returns a symbol, not a function
(test (symbolp (hash-table-test (make-hash-table :test #'eq))))
(test (symbolp (hash-table-test (make-hash-table :test #'eql))))
(test (symbolp (hash-table-test (make-hash-table :test #'equal))))

;;; WITH-HASH-TABLE-ITERATOR

(test
 (let ((h (make-hash-table))
       (entries nil))
   (setf (gethash 'foo h) 1)
   (setf (gethash 2 h) 'bar)
   (with-hash-table-iterator (i h)
     (loop
       (multiple-value-bind (more key value) (i)
         (unless more (return))
         (push (list key value) entries))))
   (and (= (length entries) 2)
        (member '(foo 1) entries :test #'equal)
        (member '(2 bar) entries :test #'equal)
        t)))

(test
 (let ((h (make-hash-table :test 'equal))
       (entries nil))
   (setf (gethash "foo" h) "test")
   (setf (gethash "bar" h) 2)
   (with-hash-table-iterator (i h)
     (loop
       (multiple-value-bind (more key value) (i)
         (unless more (return))
         (push (list key value) entries))))
   (and (= (length entries) 2)
        (member '("foo" "test") entries :test #'equal)
        (member '("bar" 2) entries :test #'equal)
        t)))

;;; EOF
