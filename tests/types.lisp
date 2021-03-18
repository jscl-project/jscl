;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/types.lisp!")

(defparameter +atomic-test-objects+
  (list 1
        1.2
        's
        #\c
        :k
        (gensym)
        (make-symbol "lower")
        (lambda nil nil)
        (values)
        (values-list nil)
        nil
        t
        (make-package 'fake-pack)
        (make-hash-table)
        (defstruct atomic-test-struct)
        (make-atomic-test-struct)
        (defclass atomic-test-class nil nil)
        (make-instance 'atomic-test-class)
        (make-list 1)
        (make-array '(1))
        (vector)
        "sss"
        (make-string 2)
        (jscl::new)
        (find-class 'atomic-test-class)
        (let nil (lambda nil nil))))


(test
 (mv-eql
  (let ((typeof '(BIT FLOAT SYMBOL CHARACTER KEYWORD SYMBOL SYMBOL
                  FUNCTION NULL NULL NULL BOOLEAN package CONS
                  SYMBOL CONS STANDARD-CLASS ATOMIC-TEST CONS
                  (VECTOR 1) (VECTOR 0) (STRING 3) (STRING 2)
                  JSCL::JS-OBJECT STANDARD-CLASS FUNCTION)))
    (values
     (loop for x in +atomic-test-objects+
           for y in typeof
           collect (equal y (type-of x)))
     (loop for x in +atomic-test-objects+ collect (typep x 'atom))))
  (T T T T T T T T T T T T T T T T T NIL T T T T T T T T)
  (T T T T T T T T T T T T T NIL T NIL NIL NIL NIL T T T T T NIL T)))

(test
 (mv-eql
  (let ((universum (list 0 1  1.1  1. 0.0  1.
                         0.01
                         #xabcd  #x123  #o123  #b00101
                         (expt 2 32) (expt 2 32) (expt 2 15) (expt 2 52)))
        (type-spec '(bit bit float integer integer integer
                     float
                     integer integer integer integer
                     bignum fixnum fixnum bignum)))

    (values 
     (every #'identity (loop for x in universum collect (typep x 'atom)))
     (loop for x in universum collect (type-of x))
     (loop for x in universum
           for type in type-spec collect (typep x type))))
  T
  (BIT BIT FLOAT BIT BIT BIT FLOAT INTEGER INTEGER INTEGER INTEGER INTEGER INTEGER INTEGER INTEGER)
  (T T T T T T T T T T T NIL T T NIL) ))


(test
 (mv-eql
  (let ((universum (list "string"
                         (make-string 10) (concat (make-string 10) "aaaa" 1 "")
                         (string 1) (string 'symbol)
                         (symbol-name 'jjjj)))
        (type-spec '(string
                     string string
                     string string
                     string))
        (deftype-spec '((STRING 6) (STRING 10) (STRING 15) (STRING 1)
                        (STRING 6) (STRING 4)))
        (fail-deftype-spec '((STRING 5) (STRING 11) (STRING 16) (STRING 2)
                             (STRING 5) (STRING 3)))
        (type-as-vector '((vector t 5) (vector t 11) (vector t 16) (vector t 2)
                          (vector t 5) (vector t 3)))
        (type-as-array  '((array character 5) (array character 11) (array character 16)
                          (array character 2) (array character 5) (array character 3))))

    (values 
     (every #'identity (loop for x in universum collect (typep x 'atom)))
     (loop for x in universum collect (type-of x))
     (loop for x in universum
           for type in type-spec collect (typep x type))
     (loop for x in universum
           for type in deftype-spec collect (typep x type))
     (loop for x in universum collect (typep x '(string *)))
     (loop for x in universum
           for type in fail-deftype-spec collect (not (typep x type)))
     (loop for x in universum
           for type in type-as-vector collect (typep x type))
     (loop for x in universum
           for type in type-as-array collect (typep x type))
     (list (typep "abc" '(or (vector) (array)))
           (typep "abc" '(and (vector) (array) (string)))
           (typep "abc" '(and (vector *) (array *) (string *)))
           (typep "abc" '(and (vector t *) (array t *)))
           (typep "abc" '(and (vector) (array character *) )))))
  T
  ((STRING 6) (STRING 10) (STRING 15) (STRING 1) (STRING 6) (STRING 4))
  (T T T T T T)
  (T T T T T T)
  (T T T T T T)
  (T T T T T T)
  (NIL NIL NIL NIL NIL NIL)
  (NIL NIL NIL NIL NIL NIL)
  (T T T T T) ))


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
 (mv-eql
  (let* ((sym (*gensym*))
         (pkg (make-package sym)))
    (values
     (type-of pkg)
     (typep pkg 'package)
     (typecase pkg (package :good))))
  package t :good))

(test
 (mv-eql
  (let ((ht (make-hash-table)))
    (values
     (type-of ht)
     (typep ht 'hash-table)
     (typecase ht (hash-table :good))))
  ht t :good))

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

(test
 (mv-eql
  (let* ((sym (*gensym*))
	       (form `(deftype ,sym (&rest args) (if args `(member ,@args) nil))))
    (values
     (eqlt (eval form) sym)
     (not* (typep 'a `(,sym a)))
     (not* (typep 'b `(,sym a)))
     (not* (typep '* `(,sym a)))
     (not* (typep 'a `(,sym a b)))
     (not* (typep 'b `(,sym a b)))
     (not* (typep 'c `(,sym a b)))))
  T  T  NIL  NIL  T  T  NIL)
 )

(test
 (mv-eql
  (let* ((sym (*gensym*))
	       (form `(let ((a 1))
		              (deftype ,sym (&optional (x a))
		                `(integer 0 ,x)))))
    (values
     (eqlt (eval form) sym)
     (let ((a 2))
       (loop for i from -1 to 3 collect (typep i `(,sym 1))))
     (let ((a 2))
       (loop for i from -1 to 3 collect (typep i sym)))))
  t
  (nil t t nil nil)
  (nil t t nil nil))
 )

;;; how use return-form for deftype
(test
 (mv-eql
  (let* ((sym (*gensym*))
	       (form `(deftype ,sym () (block ,sym (return-from ,sym 'integer)))))
    (values
     (eqlt (eval form) sym)
     (typep 123 sym)
     (typep 'symbol sym)))
  t t nil)
 )

;;; compound tests

;;; compound numeric
(test
 (mv-eql
  (let* ((sym (*gensym*))
	       (form `(deftype ,sym ()
                  `(or (cons) (integer -1 1) (float -1.1 1.9)))))
    (values
     (eqlt (eval form) sym)
     (typep 1 sym)
     (typep 0 sym)
     (typep -1 sym)
     (typep (cons 1 2) sym)
     (typep -1.00000001 sym)
     (typep 0.99 sym)
     (typep -2.99 sym)))
  T T T T T T T NIL))

;;; string
(test
 (mv-eql
  (values
   (typep #(1 2 3) '(array t 1))
   (typep #(1 2 3) '(array t 2))
   (typep #(1 2 3) '(array t (3)))
   (typep #(1 2 3) '(array t (4)))
   (typep "123" '(array character 1))
   (typep "123" '(array character 2))
   (typep "123" '(array character (3)))
   (typep "123" '(or (array character (2)) (array character (4))))
   (typep "123" '(string 3))
   (typep "123" '(or (string 1) (string 2) (string 4)))
   (typep "123" '(string *)))
  T NIL T NIL T NIL T NIL T NIL T))

;;; defstruct with (:type list)
(defstruct struct-bus type signal r1 r2 r3)
(deftype bus-alarm ()
  `(cons (eql struct-bus)
         (cons (eql alarm)
               (cons (or (integer 0 22)
                         (member sigint trap segmentation))  *) )))

;;; structure as cons
(test
 (mv-eql
  (values
   (typep (make-struct-bus :type 'alarm :signal 12) 'bus-alarm)
   (typep (make-struct-bus :type 'alarm :signal 'trap) '(bus-alarm))
   (typep (make-struct-bus :type 'alarm :signal 'trap-21) 'bus-alarm)
   (typecase (make-struct-bus :type 'alarm :signal 12) (bus-alarm :good) (t :bad))
   (typecase (make-struct-bus :type 'alarm :signal 32) ((bus-alarm) :good) (t :bad)))  
  t t nil :good :bad))

;;; array
(test
 (mv-eql
  (values
   (typep (make-array '(1 2)) '(and (array t 2) (array t (2))))
   (typep (make-array '(10)) '(and (array t 1) (array t (10))))
   (typep (make-array '(1 2)) '(and (array t 2) (array t (1 *))))
   )
  nil t t))

;;; vector
(test
 (mv-eql
  (values
   (typep #(1 2 3) '(vector t 3))
   (typep #(1 2 3) '(array t 1))
   (typep #(1 2 3) '(array t (3))))
  t t t))

;;; list-length
(test
 (mv-eql
  (let* ((sym (*gensym*))
	       (form `(deftype ,sym ()
                  `(or (list-length 0) (list-length 1)))))
    (values
     (eqlt (eval form) sym)
     (typep (list) `(,sym))
     (typep (list 1) `(,sym))
     (typep (list 1 2 3) `(,sym))))
  t t t nil))

(deftype standard-char ()
  '(member
    #\Space #\Newline
    #\a #\b #\c #\d #\e #\f #\g #\h #\i #\j #\k #\l #\m
    #\n #\o #\p #\q #\r #\s #\t #\u #\v #\w #\x #\y #\z
    #\A #\B #\C #\D #\E #\F #\G #\H #\I #\J #\K #\L #\M
    #\N #\O #\P #\Q #\R #\S #\T #\U #\V #\W #\X #\Y #\Z
    #\1 #\2 #\3 #\4 #\5 #\6 #\7 #\8 #\9 #\0
    #\! #\$ #\" #\' #\( #\) #\, #\_ #\- #\. #\/ #\: #\;
    #\? #\+ #\< #\= #\> #\# #\% #\& #\* #\@ #\[ #\\ #\]
    #\{ #\| #\} #\` #\^ #\~))

;;; typep member
(test
 (mv-eql
  (values
   (typep #\newline '(standard-char))
   (typep #\1 '(standard-char))
   (typep #\space 'standard-char))
  t t t))

;;; type-of
(test
 (let* ((universum (list 1 'symbol 1.2 #() (make-array '(1 1)) "string" (list) (list 0) t nil)))
  (every #'identity
         (mapcar (lambda (x y) (equal x y))
                 '(BIT SYMBOL FLOAT (VECTOR 0) (ARRAY (1 1)) (STRING 6) NULL CONS BOOLEAN NULL)
                 (loop for i in universum collect (type-of i))))))
  
(test
 (mv-eql
  (let* ((sym (*gensym*))
         (class (eval `(defclass ,sym nil nil)))
         (standard-class (type-of class)))
    (values
     (typep (make-instance class) (type-of (make-instance class)))
     (typep (make-instance sym) sym)
     (typep class standard-class)))
  t t t))
      
;;; typecase test cases
(test (eql 'a (typecase 1 (integer 'a) (t 'b))))
(test  (not (typecase 1 (symbol 'a))))
(test (eql 'b (typecase 1 (symbol 'a) (t 'b))))
(test (null (typecase 1 (t (values)))))
(test (null (typecase 1 (integer (values)) (t 'a))))
;;; predefined type bit
(test (eql 'a (typecase 1 (bit 'a) (integer 'b))))
;;; test (boolean)
(deftype boolean () `(member t nil))
(test
 (mv-eql
  (values
   (typecase t ((member t nil) :boolean) (t :bad))
   (typecase nil ((member t nil) :boolean) (t :bad))
   (typecase t (boolean :boolean) (otherwise :bad))
   (typecase nil ((boolean) :boolean) (otherwise :bad)))
  :boolean :boolean :boolean :boolean))
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

;;; bug:
;;;(test (null (typecase 1 (integer) (t 'a))))

(test (null (typecase 1 (symbol 'a) (t))))
(test (null (typecase 1 (symbol 'a) (otherwise))))

;;; bug: Sharp-reader is buggy
;;; fixme:
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
