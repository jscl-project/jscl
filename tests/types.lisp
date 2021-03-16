;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/types.lisp!")

(defun *gensym* ()
  (intern (symbol-name (gensym  "DEFTYPEP"))))

(defun not* (f) (not (not f)))
(defun eqlt (f s) (equal f s))

(defmacro mv-eql (form &rest result)
  `(equal
    (multiple-value-list
     ,form)
    ',result))



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

(defstruct struct-bus type signal r1 r2 r3)
(deftype bus-alarm ()
  `(cons (eql struct-bus)
         (cons (eql alarm)
               (cons (or (integer 0 22)
                         (member sigint trap segmentation))  *) )))

;;; list
(test
 (mv-eql
  (values
   (typep (make-struct-bus :type 'alarm :signal 12) 'bus-alarm)
   (typep (make-struct-bus :type 'alarm :signal 'trap) '(bus-alarm))
   (typep (make-struct-bus :type 'alarm :signal 'trap-21) 'bus-alarm))
  t t nil))

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

;;; list-size
(test
 (mv-eql
  (let* ((sym (*gensym*))
	       (form `(deftype ,sym ()
                  `(or (list-size 0) (list-size 1)))))
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
