;;; -*- mode:lisp; coding:utf-8 -*-
(/debug "perform test/defstruct.lisp!")

(defstruct (sbt-01 (:type list)
                   :named
                   (:constructor sbt-01-con (&key ((:foo a)))))
  a)

(test
 (mv-eql
  (values
   (sbt-01-con)
   (sbt-01-con :foo 1234))

  (SBT-01 NIL)
  (SBT-01 1234)))


;;;
(defstruct (sbt-02 (:type list)
                    :named
                    (:constructor sbt-02-con (&key ((:foo a) 32))))
  a)

(test
 (mv-eql
  (values
   (mapcar 'fboundp (list #'sbt-02-a #'sbt-02-p #'copy-sbt-02))
   (sbt-02-con)
   (sbt-02-con :foo 99)
   (sbt-02-a (sbt-02-con :foo 1234)))

  (t t t)
  (SBT-02 32)
  (SBT-02 99)
  1234))

;;;
(defstruct (sbt-03 (:type list)
                   :named
                   (:constructor sbt-03-con
				               (&key (a 'p a-p)
				                  ((:x b) 'q)
				                  (c 'r)
				                  d
				                  ((:y e))
				                  ((:z f) 's z-p)
				                &aux (g (list (not a-p)
						                          (not z-p))))))
  a b c d e f g)

(defun sbt-check-fn (sn)
  (handler-case
      (progn (fdefinition sn)
             t)
    (error (c) nil)))

(test
 (mv-eql
  (values
   (not (remove  t
                 (mapcar 'sbt-check-fn
                         (list 'sbt-03-p 'copy-sbt-03
                               'sbt-03-a 'sbt-03-b 'sbt-03-c 'sbt-03-d
                               'sbt-03-e 'sbt-03-f 'sbt-03-g ))))
   (sbt-03-con)
   (sbt-03-con :a 'a :x 99)
   (sbt-03-con :z 'yes))

  t
  (SBT-03 P Q R NIL NIL S (T T))
  (SBT-03 A 99 R NIL NIL S (NIL T))
  (SBT-03 P Q R NIL NIL YES (T NIL))))


;;;
(defstruct (sbt-04 (:type list)
                   :named
                   (:constructor sbt-04-con
				               (&optional (a 'p a-p) (b 'q b-p) (c 'r c-p)
					              &aux (d (list (not a-p)
							                        (not b-p)
							                        (not c-p))))))
  a b c d)

(test
 (mv-eql
  (values
   (sbt-04-con)
   (sbt-04-con 1 2 3)
   (sbt-04-con 1 2)
   (sbt-04-con 1))

  (SBT-04 P Q R (T T T))
  (SBT-04 1 2 3 (NIL NIL NIL))
  (SBT-04 1 2 R (NIL NIL T))
  (SBT-04 1 Q R (NIL T T))))


;;;
(defstruct (sbt-05 (:type list)
                   :named
                   (:constructor sbt-05-con
				               (&optional (a 'p a-p) (b 'q b-p) (c 'r c-p))))
  a b c d)

(test
 (mv-eql
  (values
   (sbt-05-con)
   (sbt-05-con 1 2 3))

  (SBT-05 P Q R NIL)
  (SBT-05 1 2 3 NIL)))


;;;
(defstruct (sbt-06 (:type list)
                   :named
                   (:constructor sbt-06-con (&optional (a 'p) (b 'q) (c 'r))))
  (c 1) (b 2) (a 3))

(test
 (mv-eql
 (values
 (sbt-06-con)
 (sbt-06-con 'aa)
 (sbt-06-con 'aa 'bb 'cc))

(SBT-06 R Q P)
(SBT-06 R Q AA)
(SBT-06 CC BB AA)))

;;;
(defstruct (sbt-07 (:type list)
                   :named
                   (:constructor sbt-07-con (a b &optional c)))
  (c nil) b (a nil))

(test
 (mv-eql
  (values
   (sbt-07-con 1 2)
   (sbt-07-con t t))

  (SBT-07 NIL 2 1)
  (SBT-07 NIL T T)))


;;;
(defstruct (sbt-08 (:type list)
                   :named
                   (:constructor sbt-08-con (a b &optional c)))
  c b a)

(test
 (mv-eql
  (values
   (not (ignore-errors (sbt-08-con)))
   (sbt-08-con 1 2)
   (sbt-08-con 1 2 3))

  T
  (SBT-08 NIL 2 1)
  (SBT-08 3 2 1)))


;;;
(defstruct (sbt-09 (:type list)
                   :named
                   (:constructor sbt-09-con-0 (a b c))
		               (:constructor sbt-09-con-1 (a b))
		               (:constructor sbt-09-con-2 ()))
  (a 'x) (b 'y) (c 'z))

(test
 (mv-eql
  (values
   (sbt-09-con-0 1 2 3)
   (sbt-09-con-1 1 2 )
   (sbt-09-con-2 ))

  (SBT-09 1 2 3)
  (SBT-09 1 2 Z)
  (SBT-09 X Y Z)))


;;;
(defstruct (sbt-10 (:type list)
                   :named
                   (:constructor sbt-10-con (b a c)))
  a b c)

(test
 (equal (sbt-10-con 'b 'a 'c)
        '(SBT-10 A B C)))

;;;
(defstruct (binop (:type list)
                  :named
                  (:initial-offset 2))
  (operator '? :type symbol)
  operand-1
  operand-2)

(defstruct (annotated-binop (:type list)
                            :named
                            (:initial-offset 3)
                            (:include binop))
  commutative associative identity)

(test
 (mv-eql
  (let ((p-binop (make-binop ))
        (p-anno (make-annotated-binop :operator '*
                                      :operand-1 'x
                                      :operand-2 5
                                      :commutative t
                                      :associative t
                                      :identity 1)))
    (values
     p-binop
     p-anno
     (binop-p p-binop)
     (binop-p p-anno)
     ))
  (NIL NIL BINOP ? NIL NIL)
  (NIL NIL BINOP * X 5 NIL NIL NIL ANNOTATED-BINOP T T 1)
  T
  T))


;;; EOF
