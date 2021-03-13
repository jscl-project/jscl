;;; -*- mode:lisp; coding:utf-8 -*-

(test
 (equal '(t (nil t t nil nil) (nil t t nil nil))
        (let* ((sym (INTERN (symbol-name (gensym))))
	             (form `(let ((a 1))
		                    (deftype ,sym (&optional (x a))
		                      `(integer 0 ,x)))))
          (list
           (eql (eval form) sym)
           (let ((a 2))
             (loop for i from -1 to 3 collect (typep i `(,sym 1))))
           (let ((a 2))
             (loop for i from -1 to 3 collect (typep i sym)))))))

(test
 (equal '(t 1)
        (let ((i 0))
          (list
           (typep (incf i) '(and (integer 0 10) (integer -5 6)))
           i))))

(test (typep 'a '(eql a)))
(test (typep 'a '(and (eql a))))
(test (typep 'a '(or (eql a))))
(typep 'a '(eql b))
(test (not (typep 'a '(and (eql b)))))
(test (not (typep 'a '(or (eql b)))))
(test (typep 'a '(satisfies symbolp)))
(test (not (typep 10 '(satisfies symbolp))))
(test (not (typep 'a '(and symbol integer))))
(test (typep 'a '(or symbol integer)))
(test (typep 'a '(or integer symbol)))

(test
 (typep (cons #(1) 0.1)
        '(or (cons (or fixnum vector (member a "b")))
          (cons (or (and (not vector) array) (and (not integer) number))
           number))))

(test
 (let ((class (find-class 'symbol)))
   (typep 'a class)))

(test
 (let ((class (find-class 'symbol)))
   (typep 'a `(and ,class))))

(test
 (not
  (let ((class (find-class 'symbol)))
    (typep 10 class))))

(test
 (not
  (let ((class (find-class 'symbol)))
    (typep 10 `(and ,class)))))

(test
 (not
  (typep 'a '(and symbol integer))))

(test (typep 'a '(or symbol integer)))

(test
 (let ((c1 (find-class 'number))
	     (c2 (find-class 'symbol)))
   (typep 'a `(or ,c1 ,c2))))

(test
 (let ((c1 (find-class 'number))
	     (c2 (find-class 'symbol)))
   (typep 'a `(or ,c2 ,c1))))


;;; typecase test cases
(test (eql 'a (typecase 1 (integer 'a) (t 'b))))
(test  (not (typecase 1 (symbol 'a))))
(test (eql 'b (typecase 1 (symbol 'a) (t 'b))))
(test (null (typecase 1 (t (values)))))
(test (null (typecase 1 (integer (values)) (t 'a))))
(deftype bit ()  '(integer 0 1))
(test (eql 'a (typecase 1 (bit 'a) (integer 'b))))
(test (eql 'a (typecase 1 (otherwise 'a))))
(test (equal '(a b c) (typecase 1 (t (list 'a 'b 'c)))))
(test (equal '(a b c) (typecase 1 (integer (list 'a 'b 'c)) (t nil))))
(test
 (equal '(a 1)
        (let ((x 0))
          (list
           (typecase 1
             (bit     (incf x)   'a)
             (integer (incf x 2) 'b)
             (t       (incf x 4) 'c))
           x))))

(test (eql 'a (typecase 1 (otherwise 'a))))
;;; bug:
;;(test (null (typecase 1 (integer) (t 'a))))
(test (null (typecase 1 (symbol 'a) (t))))
(test (null (typecase 1 (symbol 'a) (otherwise))))

;;; bug:
;;;(typecase 'a
;;;    (number 'bad)
;;;    (#.(find-class 'symbol nil) 'good))
;;;  good)

(test
 (eql 'good
      (block done
        (tagbody
           (typecase 'a (symbol (go 10)
			                   10
			                   (return-from done 'bad)))
         10
           (return-from done 'good)))))

(test
 (eql 'good
      (block done
    (tagbody
     (typecase 'a
       (integer 'bad)
       (t (go 10)
	  10
	  (return-from done 'bad)))
     10
     (return-from done 'good)))))

(test
 (equal
  (loop for x in '(a 1 1.4 "c")
	      collect (typecase x
		              (t :good)
		              (otherwise :bad)))
  '(:good :good :good :good)))


(test
 (eql :good
      (macrolet
          ((%m (z) z))
        (typecase (%m 2)
	        ((integer 0 1) :bad1)
	        ((integer 2 10) :good)
	        (t :bad2)))))

(test
 (eql :good
      (macrolet
          ((%m (z) z))
        (typecase 2
	        ((integer 0 1) (%m :bad1))
	        ((integer 2 10) (%m :good))
	        (t (%m :bad2))))))

;;; EOF