;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/list.lisp!")

;;; Tests for list functions

;;; CONS
(test (equal (cons 1 2) '(1 . 2)))
(test (equal (cons 1 nil) '(1)))
(test (equal (cons nil 2) '(NIL . 2)))
(test (equal (cons nil nil) '(NIL)))
(test (equal (cons 1 (cons 2 (cons 3 (cons 4 nil)))) '(1 2 3 4)))
(test (equal (cons 'a 'b) '(A . B)))
(test (equal (cons 'a (cons 'b (cons 'c '()))) '(A B C)))
(test (equal (cons 'a '(b c d)) '(A B C D)))

;;; CONSP
(test (not (consp 'nil)))
(test (not (consp nil)))
(test (not (consp ())))
(test (not (consp '())))
(test (consp (cons 1 2)))

;;; ATOM
(test (atom 'sss))
(test (not (atom (cons 1 2))))
(test (atom nil))
(test (atom '()))
(test (atom 3))

;;; RPLACA
(let ((some-list (list* 'one 'two 'three 'four)))
  (test (equal (rplaca some-list 'uno) '(UNO TWO THREE . FOUR)))
  (test (equal some-list '(UNO TWO THREE . FOUR))))

;;; RPLACD
(let ((some-list (list* 'one 'two 'three 'four)))
  (test (equal (rplacd (last some-list) (list 'IV)) '(THREE IV)))
  (test (equal some-list '(ONE TWO THREE IV))))

;;; CAR, CDR and variants
(test (equal (car nil) nil))
(test (equal (cdr '(1 . 2)) 2))
(test (equal (cdr '(1 2)) '(2)))
(test (equal (cadr '(1 2)) 2))
(test (equal (car '(a b c)) 'a))
(test (equal (cdr '(a b c)) '(b c)))
(test (equal (caar '((1 2) 3)) 1))
(test (equal (cadr '(1 2 3)) 2))
(test (equal (cdar '((1 2) 3)) '(2)))
(test (equal (cddr '(1 2 3)) '(3)))
(test (equal (caaar '(((1)))) 1))
(test (equal (caadr '(1 (2))) 2))
(test (equal (cadar '((1 2))) 2))
(test (equal (caddr '(1 2 3)) 3))
(test (equal (cdaar '(((1 2)))) '(2)))
(test (equal (cdadr '(1 (2 3))) '(3)))
(test (equal (cddar '((1 2 3))) '(3)))
(test (equal (cdddr '(1 2 3 4)) '(4)))
(test (equal (caaaar '((((1))))) 1))
(test (equal (caaadr '(1 ((2)))) 2))
(test (equal (caadar '((1 (2)))) 2))
(test (equal (caaddr '(1 2 (3))) 3))
(test (equal (cadaar '(((1 2)))) 2))
(test (equal (cadadr '(1 (2 3))) 3))
(test (equal (caddar '((1 2 3))) 3))
(test (equal (cadddr '(1 2 3 4)) 4))
(test (equal (cdaaar '((((1 2))))) '(2)))
(test (equal (cdaadr '(1 ((2 3)))) '(3)))
(test (equal (cdadar '((1 (2 3)))) '(3)))
(test (equal (cdaddr '(1 2 (3 4))) '(4)))
(test (equal (cddaar '(((1 2 3)))) '(3)))
(test (equal (cddadr '(1 (2 3 4))) '(4)))
(test (equal (cdddar '((1 2 3 4))) '(4)))
(test (equal (cddddr '(1 2 3 4 5)) '(5)))

;;; SUBLIS
(test (equal (sublis '((x . 100) (z . zprime))
                     '(plus x (minus g z x p) 4 . x))
             '(PLUS 100 (MINUS G ZPRIME 100 P) 4 . 100)))
(test (equal (sublis '(((+ x y) . (- x y)) ((- x y) . (+ x y)))
                     '(* (/ (+ x y) (+ x p)) (- x y))
                     :test #'equal)
             '(* (/ (- X Y) (+ X P)) (+ X Y))))
(let ((tree1 '(1 (1 2) ((1 2 3)) (((1 2 3 4))))))
  (test (equal (sublis '((3 . "three")) tree1)
               '(1 (1 2) ((1 2 "three")) (((1 2 "three" 4))))))
  (test (equal (sublis '((t . "string"))
                       (sublis '((1 . "") (4 . 44)) tree1)
                       :key #'stringp)
               '("string" ("string" 2) (("string" 2 3)) ((("string" 2 3 44))))))
  (test (equal tree1 '(1 (1 2) ((1 2 3)) (((1 2 3 4)))))))
(let ((tree2 '("one" ("one" "two") (("one" "Two" "three")))))
  (test (equal (sublis '(("two" . 2)) tree2)
               '("one" ("one" "two") (("one" "Two" "three")))))
  (test (equal tree2 '("one" ("one" "two") (("one" "Two" "three")))))
  (test (equal (sublis '(("two" . 2)) tree2 :test 'equal)
               '("one" ("one" 2) (("one" "Two" "three"))))))

;;; SUBST
(let ((tree1 '(1 (1 2) (1 2 3) (1 2 3 4))))
  (test (equal (subst "two" 2 tree1) '(1 (1 "two") (1 "two" 3) (1 "two" 3 4))))
  (test (equal (subst "five" 5 tree1) '(1 (1 2) (1 2 3) (1 2 3 4))))
  (test (eq tree1 (subst "five" 5 tree1))) ; Implementation dependent
  (test (equal tree1 '(1 (1 2) (1 2 3) (1 2 3 4)))))
(test (equal (subst 'tempest 'hurricane
                    '(shakespeare wrote (the hurricane)))
             '(SHAKESPEARE WROTE (THE TEMPEST))))
(test (equal (subst 'foo 'nil '(shakespeare wrote (twelfth night)))
             '(SHAKESPEARE WROTE (TWELFTH NIGHT . FOO) . FOO)))
(test (equal (subst '(a . cons) '(old . pair)
                    '((old . spice) ((old . shoes) old . pair) (old . pair))
                    :test #'equal)
             '((OLD . SPICE) ((OLD . SHOES) A . CONS) (A . CONS))))

;;; COPY-LIST
(test (eql   (copy-list nil)          nil))
(test (equal (copy-list (list nil))   (list nil)))
(test (equal (copy-list (list 1 2 3)) (list 1 2 3)))

;;; COPY-TREE
(test (let* ((foo (list '(1 2) '(3 4)))
             (bar (copy-tree foo)))
        ;; (SETF (CAR (CAR FOO)) 0) doesn't work in the test for some reason,
        ;; despite working fine in the REPL
        (rplaca (car foo) 0)
        (not (= (car (car foo))
                (car (car bar))))))

;;; TREE-EQUAL
(test (tree-equal '(1 2 3) '(1 2 3)))
(test (not (tree-equal '(1 2 3) '(3 2 1))))
(test (tree-equal '(1 (2 (3 4) 5) 6) '(1 (2 (3 4) 5) 6)))
(test (tree-equal (cons 1 2) (cons 2 3) :test (lambda (a b) (not (= a b)))))
(test (tree-equal '(1 . 2) '(2 . 1) :test-not #'eql))
(test (not (tree-equal '(1 . 2) '(1 . 2) :test-not #'eql)))

;;; FIRST to TENTH
(let ((nums '(1 2 3 4 5 6 7 8 9 10)))
  (test (= (first   nums) 1))
  (test (= (second  nums) 2))
  (test (= (third   nums) 3))
  (test (= (fourth  nums) 4))
  (test (= (fifth   nums) 5))
  (test (= (sixth   nums) 6))
  (test (= (seventh nums) 7))
  (test (= (eighth  nums) 8))
  (test (= (ninth   nums) 9))
  (test (= (tenth   nums) 10)))

;;; TAILP
(let* ((a (list 1 2 3))
       (b (cdr a)))
  (test (tailp b a))
  (test (tailp a a)))
(test (tailp 'a (cons 'b 'a)))

;;; ACONS
(test (equal '((1 . 2) (3 . 4))
             (acons 1 2 '((3 . 4)))))
(test (equal '((1 . 2)) (acons 1 2 ())))

;;; PAIRLIS
(test (equal '((1 . 3) (0 . 2))
             (pairlis '(0 1) '(2 3))))
(test (equal '((1 . 2) (a . b))
             (pairlis '(1) '(2) '((a . b)))))

;;; COPY-ALIST
(let* ((alist '((1 . 2) (3 . 4)))
       (copy (copy-alist alist)))
  (test (not (eql alist copy)))
  (test (not (eql (car alist) (car copy))))
  (test (equal alist copy)))

;;; ASSOC and RASSOC
(let ((alist '((1 . 2) (3 . 4))))
  (test (equal (assoc  1 alist) '(1 . 2)))
  (test (equal (rassoc 2 alist) '(1 . 2)))
  (test (not   (assoc  2 alist)))
  (test (not   (rassoc 1 alist)))
  (test (equal (assoc  3 alist :test-not #'=) '(1 . 2)))
  (test (equal (rassoc 4 alist :test-not #'=) '(1 . 2)))
  (test (equal (assoc  1 alist :key (lambda (x) (/ x 3))) '(3 . 4)))
  (test (equal (rassoc 2 alist :key (lambda (x) (/ x 2))) '(3 . 4)))) 

;;; MEMBER
(test (equal (member 2 '(1 2 3)) '(2 3)))
(test (not   (member 4 '(1 2 3))))
(test (equal (member 4 '((1 . 2) (3 . 4)) :key #'cdr) '((3 . 4))))
(test (member '(2) '((1) (2) (3)) :test #'equal))
(test (member 1 '(1 2 3) :test-not #'eql))

;;; ADJOIN
(test (equal (adjoin 1 '(2 3))   '(1 2 3)))
(test (equal (adjoin 1 '(1 2 3)) '(1 2 3)))
(test (equal (adjoin '(1) '((1) (2)) :test #'equal) '((1) (2))))

;;; INTERSECTION
(test (equal (intersection '(1 2) '(2 3)) '(2)))
(test (not (intersection '(1 2 3) '(4 5 6))))
(test (equal (intersection '((1) (2)) '((2) (3)) :test #'equal) '((2))))
(test (equal '((1 . 2))
             (intersection '((1 . 2) (2 . 3)) '((9 . 2) (9 . 4))
                           :test #'equal :key #'cdr)))

;;; POP
(test (let* ((foo '(1 2 3))
             (bar (pop foo)))
        (and (= bar 1)
             (= (car foo) 2))))

;;;; MAPCAR
(test (equal (mapcar #'+ '(1 2) '(3) '(4 5 6)) '(8)))

;;;; MAPLIST
(test (equal '((1 2 3 4 1 2 1 2 3) (2 3 4 2 2 3))
	     (maplist #'append '(1 2 3 4) '(1 2) '(1 2 3))))
(test (equal '((FOO A B C D) (FOO B C D) (FOO C D) (FOO D))
	     (maplist #'(lambda (x) (cons 'foo x)) '(a b c d))))
(test (equal '(0 0 1 0 1 1 1)
	     (maplist #'(lambda (x) (if (member (car x) (cdr x)) 0 1)) '(a b a c d b c))))

;;;; MAPC
(test (equal (mapc #'+ '(1 2) '(3) '(4 5 6)) '(1 2)))
(test (let (foo)
        (mapc (lambda (x y z) (push (+ x y z) foo)) '(1 2) '(3) '(4 5 6))
        (equal foo '(8))))

;;;; GETF
(test (eq (getf '(a b c d) 'a) 'b))
(test (null (getf '(a b c d) 'e)))
(test (equal (let ((x (list 'a 1))) (setf (getf x 'a) 3) x) '(a 3)))
(test (equal (let ((x (list 'a 1))) (incf (getf x 'a)) x) '(a 2)))

;;; GET-PROPERTIES
(test (equal (multiple-value-list (get-properties '(a b c d) '(b d e))) '(NIL NIL NIL)))
(test (equal (multiple-value-list (get-properties '(a b c d) '(b a c))) '(a b (a b c d))))
(test (equal (multiple-value-list (get-properties '(a b c d) '(b c a))) '(a b (a b c d))))

;;; BUTLAST
(test (equal (butlast '()) ()))
(test (equal (butlast '(1)) ()))
(test (equal (butlast '(1 2)) '(1)))
(test (equal (butlast '(1 2 3 4 5)) '(1 2 3 4)))
(test (equal '(1 2 3 4) (butlast '(1 2 3 4 5))))
(test (equal (let ((thing '(1 2 3 4 5))) (butlast thing)) '(1 2 3 4)))
(test (equal (let ((thing '(1 2 3 4 5))) (butlast thing) thing) '(1 2 3 4 5)))

(test (equal (let ((thing '(1 2 3 4 5))) (butlast thing 0)) '(1 2 3 4 5)))
(test (equal (let ((thing '(1 2 3 4 5))) (butlast thing 1)) '(1 2 3 4)))
(test (equal (let ((thing '(1 2 3 4 5))) (butlast thing 2)) '(1 2 3)))
(test (equal (let ((thing '())) (butlast thing 2)) '()))
(test (equal (let ((thing '(1 2))) (butlast thing 2)) '()))
(test (equal (let ((thing '())) (butlast thing 0)) '()))

;;; MAKE-LIST
(test (equal (make-list 5) '(nil nil nil nil nil)))
(test (equal (make-list 3 :initial-element 'rah) '(rah rah rah)))


;;; set-difference test
(let ((lst1 (list "A" "b" "C" "d"))
      (lst2 (list "a" "B" "C" "d")))
    (test (equal 
           (list
            (equal (set-difference lst1 lst2) (list "d" "C" "b" "A"))
            (equal (set-difference lst1 lst2 :test 'equal) (list "b" "A"))
            (equal (set-difference lst1 lst2 :test #'string=)  (list "b" "A")))
           (list t t t)))) 


;;; SORT
#+jscl
(test 
 (equal (apply 'jscl::concat
               (sort (jscl::vector-to-list "cdbaxaybzcd") #'char-lessp))
        "aabbccddxyz"))

#+jscl
(test 
 (let ((sorted (apply 'jscl::concat
                      (sort (jscl::vector-to-list "cdbaxaybzcd") #'char-lessp))))
     (equal (remove-duplicates sorted :test #'char-equal :from-end t) "abcdxyz")))

(test 
 (equal (sort '((1 2 3) (4 5 6) (7 8 9))  #'> :key #'car)
        '((7 8 9) (4 5 6) (1 2 3))))


;;; union

(test
 (equal (union '(a b c) '(f a d))
        '(C B F A D)))

(test 
 (equal (union '((x 5) (y 6)) '((z 2) (x 4) (z 2)) 
               :key #'car 
               :test (lambda (x y) (equal (car x) y)))
        '((Y 6) (Z 2) (X 4))))


(test
 (let ((lst1 (list 1 2 '(1 2) "a" "b"))
       (lst2 (list 2 3 '(2 3) "B" "C")))
     (equal (union lst1 lst2) 
            '("b" "a" (1 2) 1 2 3 (2 3) "B" "C"))))


;;; See https://github.com/jscl-project/jscl/issues/369
(test
 (equal
  (let ((x (cons 'a 'b))
        b)
    (rplacd x (progn (setq b 0) 'c)))
  '(a . c )))
;;; EOF
