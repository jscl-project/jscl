;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/types.lisp!")

(defparameter +atomic-test-objects+
  (list (cons 1     'bit)
        (cons 1.2   'float)
        (cons 's                    'symbol)
        (cons #\c                   'character)
        (cons :k                    'keyword)
        (cons (gensym)              'symbol)
        (cons (make-symbol "lower") 'symbol)
        (cons (lambda nil nil)      'function)
        (cons (values)              'null)
        (cons (values-list nil)     'null)
        (cons nil                   'null)
        (cons t                     'boolean)
        (cons (make-package 'fake-pack)            'package)
        (cons (make-hash-table)                    'hash-table)
        (cons (defstruct atomic-test-struct)       'symbol)
        (cons (make-atomic-test-struct)            'jscl::atomic-test-struct)
        (cons (defclass atomic-test-class nil nil) 'standard-class)
        (cons (make-instance 'atomic-test-class)   'jscl::atomic-test-class)
        (cons (make-list 1)     'cons)
        (cons (make-array '(1)) '(vector 1))
        (cons (vector)          '(vector 0))
        (cons "sss"             '(string 3))
        (cons (make-string 2)   '(string 2))
        (cons (jscl::new)       'jscl::js-object)
        (cons (find-class 'atomic-test-class) 'standard-class)
        (cons (let nil (lambda nil nil))      'function)))

(test
 (mv-eql
  (let ((real-type-of)
        (idx 0)
        (diff1)
        (diff2)
        (expected-type-of
          '(BIT            FLOAT       SYMBOL     CHARACTER
            KEYWORD        SYMBOL      SYMBOL     FUNCTION
            NULL           NULL        NULL       BOOLEAN
            package        hash-table  SYMBOL     jscl::atomic-test-struct
            STANDARD-CLASS jscl::ATOMIC-TEST-class  CONS       (VECTOR 1)
            (VECTOR 0)     (STRING 3)  (STRING 2) JSCL::JS-OBJECT
            STANDARD-CLASS  FUNCTION)))
    (setq real-type-of (loop for x in +atomic-test-objects+ collect (type-of (car x))))
    (setq diff0
          (loop for x in +atomic-test-objects+
                do (incf idx)
                collect (unless (equal (type-of (car x)) (cdr x)))))
    (setq idx 0
          diff1
          (loop for x in real-type-of
                for y in expected-type-of
                do (incf idx)
                collect (unless (equal x y) (list idx x y)) ))
    (setq idx 0
          diff2
          (loop for x in +atomic-test-objects+ 
                do (incf idx)
                collect (unless (typep (car x) 'atom) (list idx (cdr x)))))

    (values
     (list (list-length +atomic-test-objects+)
           (list-length real-type-of)
           (list-length expected-type-of))
     (remove nil diff0)
     (remove nil diff1)
     (remove nil diff2)))
  (26 26 26)
  NIL
  NIL
  ((14 HASH-TABLE)
   (16 jscl::atomic-test-struct)
   (17 STANDARD-CLASS)
   (18 jscl::ATOMIC-TEST-CLASS)
   (19 CONS)
   (25 STANDARD-CLASS))))

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
        ;; incorrect vector type length
        (type-as-vector-0 '((vector t 5) (vector t 11) (vector t 16) (vector t 2)
                            (vector t 5) (vector t 3)))
        ;; true vector type-spec
        (type-as-vector-1 '((vector character 6) (vector character 10)
                            (vector character 15) (vector character 1)
                            (vector character 6) (vector character 4)))
        ;; only 4 correct, other - incorrect array type-spec - wrong range
        (type-as-array-0  '((array character 6) (array character 10) (array character 15)
                            (array character 1) (array character 6) (array character 4)))
        ;; correct array type-spec - correct range
        (type-as-array-1  '((array character 1) (array character 1) (array character 1)
                            (array character 1) (array character 1) (array character 1)))
        ;; correct as array spec
        (type-as-array-2  '((and (array character *) (array character 1) (array character (6)))
                            (and (array character *) (array character 1) (array character (10)))
                            (and (array character *) (array character 1) (array character (15)))
                            (and (array character 1) (array character (1)))
                            (or (array character 6) (array character (6)))
                            (array character (4))))
        ;; only 4 elt correct
        (type-as-array-3  '((array t 6) (array t 10) (array t 15)
                            (array character 1) (array * 6) (array * *)))
        ;; first two, last two -correct spec
        (type-as-array-4  '((array) (array character) (array t)
                            (array * *) (string *) (string)))
        ;; corrected spec
        (type-as-array-5  '((and array (array character 1) string vector (or string (vector character 6)))
                            (and array vector string (vector character 10) (string 10))
                            (array)
                            (vector)
                            (string)
                            (and (or array vector (string 9))
                             (or (array character 1) (vector character 2) string)))))

    (values 
     (every #'identity (loop for x in universum collect (typep x 'atom)))
     (list 'type-of (loop for x in universum collect (type-of x)))
     (list 'type-spec (loop for x in universum
                            for type in type-spec collect (typep x type)))
     (list 'deftype (loop for x in universum
                          for type in deftype-spec collect (typep x type)))
     (list 'string* (loop for x in universum collect (typep x '(string *))))
     (list 'fail-deftype (loop for x in universum
                               for type in fail-deftype-spec collect (not (typep x type))))
     (list 'vector-0 (loop for x in universum
                           for type in type-as-vector-0 collect (typep x type)))
     (list 'vector-1 (loop for x in universum
                           for type in type-as-vector-1 collect (typep x type)))
     (list 'array-0 (loop for x in universum
                          for type in type-as-array-0 collect (typep x type)))
     (list 'array-1 (loop for x in universum
                          for type in type-as-array-1 collect (typep x type)))
     (list 'array-2 (loop for x in universum
                          for type in type-as-array-2 collect (typep x type)))
     (list 'array-3 (loop for x in universum
                          for type in type-as-array-3 collect (typep x type)))
     (list 'array-4 (loop for x in universum
                          for type in type-as-array-4 collect (typep x type)))
     (list 'array-5 (loop for x in universum
                          for type in type-as-array-5 collect (typep x type)))
     (list (typep "abc" '(or (vector) (array)))
           (typep "abc" '(and (vector) (array) (string)))
           (typep "abc" '(and (vector character) (array character) (string *)))
           (typep "abc" '(or (vector t *) (array character *)))
           (typep "abc" '(and (vector) (array character *) )))))
  T
  (TYPE-OF ((STRING 6) (STRING 10) (STRING 15) (STRING 1) (STRING 6) (STRING 4)))
  (TYPE-SPEC (T T T T T T))
  (DEFTYPE (T T T T T T))
  (STRING* (T T T T T T))
  (FAIL-DEFTYPE (T T T T T T))
  (VECTOR-0 (NIL NIL NIL NIL NIL NIL))
  (VECTOR-1 (T T T T T T))
  (ARRAY-0 (NIL NIL NIL T NIL NIL))
  (ARRAY-1 (T T T T T T))
  (ARRAY-2 (T T T T T T))
  (ARRAY-3 (NIL NIL NIL T NIL NIL))
  (ARRAY-4 (T T NIL NIL T T))
  (ARRAY-5 (T T T T T T))
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
  hash-table  t :good))

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
#+nil (defstruct (struct-bus :named (:type list)) type signal r1 r2 r3)
#+nil (deftype bus-alarm ()
  `(cons (eql struct-bus)
         (cons (eql alarm)
               (cons (or (integer 0 22)
                         (member sigint trap segmentation))  *) )))

;;; structure as cons
#+nil (test
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

#+nil
(test
 (let ((cells (list 1 2021 3.33  t #\c "abc" #(1)))) 
   (typep cells '(cons (eql 1) 
                       (cons (integer 2019 2022) 
                            (cons (float -1.00000000001 3.4) 
                                   (cons (member t nil) *))))))) 

#+nil
(test
 (let ((cells (list 1 2021 3.33  t #\c "abc" #(1)))) 
   (typep cells '(cons (eql 1) 
                       (cons (integer 2019 2022) 
                            (cons (float -1.00000000001 3.4) 
                                   (cons (member t nil)
                                         (cons character
                                               (cons array (cons vector))
                                         ))))))) )

(test
 (typep (cons 1 (list 1))
        '(cons (or (eql 1) (eql 2))
               (or (list-length 0) (list-length 1)))))



;;; EOF
