;;; -*- mode:lisp; coding:utf-8 -*-
(/debug "perform test/defstruct.lisp!")

(defun sbt-check-fn (sn)
  (handler-case
      (progn (fdefinition sn)
             t)
    (error (c) nil)))

(defun eql-vectors (v1 v2)
  (and (= (length v1) (length v2))
       (every #'identity
              (mapcar (lambda (e1 e2) (equal e1 e2))
                      (jscl::vector-to-list v1)
                      (jscl::vector-to-list v2)))))

;;;
(defstruct (frob-01-list :named (:type list)
                         (:conc-name fl01-) (:predicate the-frob-01-list)) a b)

(test
 (mv-eql
  (let ((fnames (list 'fl01-a 'fl01-b 'make-frob-01-list 'the-frob-01-list 'copy-frob-01-list))
        (ip (make-frob-01-list :a 1 :b 2))
        (ip2 '(frob-01-list 1 2))
        (ip3))
    (values
     (every #'identity (mapcar 'the-frob-01-list (list ip ip2)))
     (every #'identity (mapcar 'sbt-check-fn fnames))
     (equal ip ip2)
     (equal (copy-frob-01-list ip) ip)
     (equal (copy-frob-01-list ip) ip2)
     (progn
       (setf ip3 (copy-frob-01-list ip)
             (fl01-a ip3) 'a)
       (and (eql (fl01-a ip) 1) (eql (fl01-a ip3) 'a)))))
  t t t t t t))

;;;
(defstruct (frob-01-vector :named (:type vector)
                         (:conc-name fv01-) (:predicate the-frob-01-vector)) a b)

(test
 (mv-eql
  (let ((fnames (list 'fv01-a 'fv01-b 'make-frob-01-vector 'the-frob-01-vector 'copy-frob-01-vector))
        (ip (make-frob-01-vector :a 1 :b 2))
        (ip2 (vector 'frob-01-vector 1 2))
        (ip3))
    #+nil
    (format t "FROB VECTOR ~a"
            (LIST
             (every #'identity (mapcar 'the-frob-01-vector (list ip ip2)))
             (every #'identity (mapcar 'sbt-check-fn fnames))
             (eql-vectors ip ip2)
             (eql-vectors (copy-frob-01-vector ip) ip)
             (eql-vectors (copy-frob-01-vector ip) ip2)
             (progn
               (setf ip3 (copy-frob-01-vector ip)
                     (fv01-a ip3) 'a)
               (and (eql (fv01-a ip) 1) (eql (fv01-a ip3) 'a)))))
    (values
     (every #'identity (mapcar 'the-frob-01-vector (list ip ip2)))
     (every #'identity (mapcar 'sbt-check-fn fnames))
     (eql-vectors ip ip2)
     (eql-vectors (copy-frob-01-vector ip) ip)
     (eql-vectors (copy-frob-01-vector ip) ip2)
     (progn
       (setf ip3 (copy-frob-01-vector ip)
             (fv01-a ip3) 'a)
       (and (eql (fv01-a ip) 1) (eql (fv01-a ip3) 'a)))))
  t t t t t t))

;;;
(defstruct (frob-01-clos (:conc-name fc01-) (:predicate the-frob-01-clos)) a b)

(test
 (mv-eql
  (let* ((fnames (list 'fc01-a 'fc01-b 'make-frob-01-clos 'the-frob-01-clos 'copy-frob-01-clos))
         (ip (make-frob-01-clos :a 1 :b 2))
         (ip2 (copy-frob-01-clos ip))
         (ip3 (copy-frob-01-clos ip2)))
  
    (values
     (every #'identity (mapcar 'the-frob-01-clos (list ip ip2 ip3)))
     (every #'identity (mapcar 'sbt-check-fn fnames))
     (progn
       (setf (fc01-a ip3) 'a)
       (and (eql (fc01-a ip) 1) (eql (fc01-a ip3) 'a)))))
  t t t))

;;; constructors
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
   (mapcar 'fboundp (list 'sbt-02-a 'sbt-02-p 'copy-sbt-02))
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

;;;
(defstruct (sbt-null-list :named (:type list)))
(defstruct (sbt-null-list-kind :named (:type list) (:initial-offset 3) (:include sbt-null-list)))
(test
 (mv-eql
  (let ((instance '(sbt-null-list 1 2 3 sbt-null-list-kind)))
    (values
     (sbt-null-list-p instance)
     (sbt-null-list-kind-p instance)))
  t
  t ))


;;;
(test
 (= 6 (let ((e 0))
        (dolist (form
                 '((defstruct (es :conc-name (:conc-name b1-)) x y)
                   (defstruct (es :copier :copier) x y)
                   (defstruct (es (:include) (:include)) x y)
                   (defstruct (es (:initial-offset 2) (:initial-offset nil)) x y)
                   (defstruct (es (:predicate nil) (:predicate foolp)) x y)
                   (defstruct (es (:type list) (:type vector)) x y)
                   (defstruct (es (:type (vector (or (eql s) integer))) :named) x y)
                   )
                 e)
          (handler-case
              (progn  (macroexpand form))
            (error (ignore) (incf e)))))))

;;;
(defstruct (a-named-struct-vector :named (:type vector)) a b c)
(defstruct (a-kid-struct-vector   :named (:type vector) (:include a-named-struct-vector)) n)

;;; todo: bug:

(test
 (mv-eql
  (let ((par (make-a-named-struct-vector :b 6))
        (kid (make-a-kid-struct-vector :n 5)))
    (values
     (a-named-struct-vector-p par)
     (a-named-struct-vector-p kid)
     ;; bug: must be checked storage length
     (not (a-kid-struct-vector-p par))
     (a-kid-struct-vector-p kid)))
  t t t t))

;;;
(defstruct (a-named-struct-list :named (:type list)) a b c)
(defstruct (a-kid-struct-list :named (:type list) (:include a-named-struct-list)) n)

(test
 (mv-eql
  (let ((par (make-a-named-struct-list :b 6))
        (kid (make-a-kid-struct-list :n 5)))
    #+nil(format t "KID-LIST ~a" (list
     (a-named-struct-list-p par)
     (a-named-struct-list-p kid)
     (not (a-kid-struct-list-p par))
     (a-kid-struct-list-p kid)))
    (values
     (a-named-struct-list-p par)
     (a-named-struct-list-p kid)
     (not (a-kid-struct-list-p par))
     (a-kid-struct-list-p kid)))
  t t t t))

;;;
(let ((x 0)) (defstruct lexical-default (a (incf x)))
    (test (= (lexical-default-a (make-lexical-default))
               x
               1)))
(test (= (lexical-default-a (make-lexical-default)) 2))

(test (= (let ((x 10))
  (lexical-default-a (make-lexical-default))) 3))

;;;
(defstruct defstruct-constant-slot-names t)
(test (= 3 (defstruct-constant-slot-names-t
                (make-defstruct-constant-slot-names :t 3))))

;;;

#+nil
(defstruct flopsie a b c)
#+nil
(handler-case
    (macroexpand '(defstruct (mopsie (:include flopsie (a 3) (z 9))) q))
  (error (c)
    (apply #'format nil
           (simple-condition-format-control c)
           (simple-condition-format-arguments c))))
;;; => "Malformed DEFSTRUCT :include option\n Bad name (Z 9).\n"

#+nil
(test
 (let ((pos)(rez))
   (setq pos
         (search "Bad name (Z 9)"
                 (handler-case
                     (eval `(defstruct (mopsie (:include flopsie (a 3) (z 9))) q))
                   (error (c)
                     (setq rez
                           (apply #'format nil
                                  (simple-condition-format-control c)
                                  (simple-condition-format-arguments c)))))))
   ;; condition: structure flopsie not exists ???
   (format t "POS ~a ~a" pos rez)
   t))

;;;
(defstruct (boa-supplied-p.1 (:constructor make-boa-supplied-p.1
                                            (&optional (bar t barp))))
             bar
             barp)

(test
 (mv-eql
  (let ((b1 (make-boa-supplied-p.1))
        (b2 (make-boa-supplied-p.1 t)))
    #+nil
    (format t "BOA SUPPLIED ~a" (list
                                 (eq t (boa-supplied-p.1-bar b1))
                                 (eq t (boa-supplied-p.1-bar b2))
                                 (eq nil (boa-supplied-p.1-barp b1))
                                 (eq t (boa-supplied-p.1-barp b2))))
    (values
     (eq t (boa-supplied-p.1-bar b1))
     (eq t (boa-supplied-p.1-bar b2))
     (eq nil (boa-supplied-p.1-barp b1))
     (eq t (boa-supplied-p.1-barp b2))))
  t t t NIL))


;;;
(defstruct (boa-supplied-p.2 (:constructor make-boa-supplied-p.2
                                            (&key (bar t barp))))
             bar
             barp)
(test
 (mv-eql
  (let ((b1 (make-boa-supplied-p.2))
        (b2 (make-boa-supplied-p.2 :bar t)))
    #+nil
    (format t "BOA SUPPLIED-2 ~a" (list
                                   (eq t (boa-supplied-p.2-bar b1))
                                   (eq t (boa-supplied-p.2-bar b2))
                                   (eq nil (boa-supplied-p.2-barp b1))
                                   (eq t (boa-supplied-p.2-barp b2))))
    (values
     (eq t (boa-supplied-p.2-bar b1))
     (eq t (boa-supplied-p.2-bar b2))
     (eq nil (boa-supplied-p.2-barp b1))
     ;; must be t. nil its bug:
     (eq t (boa-supplied-p.2-barp b2))))
  t t t NIL))

;;;
(defstruct (list-struct (:type list) :named) a-slot)
(test (list-struct-p (make-list-struct)))
(test (not (list-struct-p nil)))
(test (not (list-struct-p 1)))

(defstruct (offset-list-struct (:type list) :named (:initial-offset 1)) a-slot)
(test (offset-list-struct-p (make-offset-list-struct)))
(test (not (offset-list-struct-p nil)))
(test (not (offset-list-struct-p 1)))
(test (not (offset-list-struct-p '(offset-list-struct))))

;;; error car called on non-list

(test (not (offset-list-struct-p '(offset-list-struct . 3))))

(defstruct (vector-struct (:type vector) :named) a-slot)
(test 
 (let* ((v (make-vector-struct))
        (r (vector-struct-p v)))
   #+nil(format t "VECTOR-STRUCT ~a ~a" v r)
   r))
(test (vector-struct-p (make-vector-struct)))
(test (not (vector-struct-p nil)))

;;; error out of range
(test (not (vector-struct-p #())))

(defstruct (bug-332a (:type list) (:initial-offset 5) :named))
(defstruct (bug-332b (:type list) (:initial-offset 2) :named (:include bug-332a)))
;;; cons error
(test (not (bug-332b-p (list* nil nil nil nil nil 'foo73 nil 'tail))))
(test (not (bug-332b-p 873257)))
(test (not (bug-332b-p '(1 2 3 4 5 x 1 2 bug-332a))))
(test (bug-332b-p '(1 2 3 4 5 x 1 2 bug-332b)))

(defstruct (bug-332a-aux (:type vector)
                         (:initial-offset 5) :named))
(defstruct (bug-332b-aux (:type vector)
                         (:initial-offset 2) :named
                         (:include bug-332a-aux)))
(test (not (bug-332b-aux-p #(1 2 3 4 5 x 1 premature-end))))
(test (not (bug-332b-aux-p 873257)))
(test (not (bug-332b-aux-p #(1 2 3 4 5 x 1 2 bug-332a-aux))))
(test (bug-332b-aux-p #(1 2 3 4 5 x 1 2 bug-332b-aux)))

;;;
(defstruct (conc-name-syntax :conc-name) a-conc-name-slot)
(test (eq (a-conc-name-slot (make-conc-name-syntax :a-conc-name-slot 'y))
            'y))

(defstruct (conc-name-syntax-1 (:conc-name "A-CONC-NAME-")) slot)
(test (eq (a-conc-name-slot (make-conc-name-syntax-1 :slot 'y))
            'y))

;;;
(defpackage "DEFSTRUCT-TEST-SCRATCH")
(defstruct (conc-name-nil :conc-name)
  defstruct-test-scratch::conc-name-nil-slot)

(test (= (defstruct-test-scratch::conc-name-nil-slot
            (make-conc-name-nil :conc-name-nil-slot 1))
         1))
(test
 (not
  (progn
    (handler-case
        (conc-name-nil-slot (make-conc-name-nil))
      (error (c) nil)))))

(defstruct print-struct-test a b c)
(test
  ;; struct printing with only numbers
  (string-equal
    (format nil "~S" (make-print-struct-test :a 1 :b 2 :c 3))
    "#S(JSCL::PRINT-STRUCT-TEST :A 1 :B 2 :C 3)"))
(test
  ;; struct printing with some strings in it
  (string-equal
    (format nil "~S" (make-print-struct-test :a "hello" :b "world" :c 3))
    "#S(JSCL::PRINT-STRUCT-TEST :A \"hello\" :B \"world\" :C 3)"))

;;; EOF
