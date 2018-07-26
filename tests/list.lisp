;; Tests for list functions

;; CONS
(tests (equal (cons 1 2) '(1 . 2))
       (equal (cons 1 nil) '(1))
       (equal (cons nil 2) '(NIL . 2))
       (equal (cons nil nil) '(NIL))
       (equal (cons 1 (cons 2 (cons 3 (cons 4 nil)))) '(1 2 3 4))
       (equal (cons 'a 'b) '(A . B))
       (equal (cons 'a (cons 'b (cons 'c '()))) '(A B C))
       (equal (cons 'a '(b c d)) '(A B C D))

       ;; CONSP
       (not (consp 'nil))
       (not (consp nil))
       (not (consp ()))
       (not (consp '()))
       (consp (cons 1 2))

       ;; ATOM
       (atom 'sss)
       (not (atom (cons 1 2)))
       (atom nil)
       (atom '())
       (atom 3))

;; RPLACA
(let ((some-list (list* 'one 'two 'three 'four)))
  (tests (equal (rplaca some-list 'uno) '(UNO TWO THREE . FOUR))
	 (equal some-list '(UNO TWO THREE . FOUR))))

;; RPLACD
(let ((some-list (list* 'one 'two 'three 'four)))
  (tests (equal (rplacd (last some-list) (list 'IV)) '(THREE IV))
	 (equal some-list '(ONE TWO THREE IV))))

;; CAR, CDR and variants
(tests (equal (car nil) nil)
       (equal (cdr '(1 . 2)) 2)
       (equal (cdr '(1 2)) '(2))
       (equal (cadr '(1 2)) 2)
       (equal (car '(a b c)) 'a)
       (equal (cdr '(a b c)) '(b c))
       (equal (caar '((1 2) 3)) 1)
       (equal (cadr '(1 2 3)) 2)
       (equal (cdar '((1 2) 3)) '(2))
       (equal (cddr '(1 2 3)) '(3))
       (equal (caaar '(((1)))) 1)
       (equal (caadr '(1 (2))) 2)
       (equal (cadar '((1 2))) 2)
       (equal (caddr '(1 2 3)) 3)
       (equal (cdaar '(((1 2)))) '(2))
       (equal (cdadr '(1 (2 3))) '(3))
       (equal (cddar '((1 2 3))) '(3))
       (equal (cdddr '(1 2 3 4)) '(4))
       (equal (caaaar '((((1))))) 1)
       (equal (caaadr '(1 ((2)))) 2)
       (equal (caadar '((1 (2)))) 2)
       (equal (caaddr '(1 2 (3))) 3)
       (equal (cadaar '(((1 2)))) 2)
       (equal (cadadr '(1 (2 3))) 3)
       (equal (caddar '((1 2 3))) 3)
       (equal (cadddr '(1 2 3 4)) 4)
       (equal (cdaaar '((((1 2))))) '(2))
       (equal (cdaadr '(1 ((2 3)))) '(3))
       (equal (cdadar '((1 (2 3)))) '(3))
       (equal (cdaddr '(1 2 (3 4))) '(4))
       (equal (cddaar '(((1 2 3)))) '(3))
       (equal (cddadr '(1 (2 3 4))) '(4))
       (equal (cdddar '((1 2 3 4))) '(4))
       (equal (cddddr '(1 2 3 4 5)) '(5))

       ;; SUBLIS
       (equal (sublis '((x . 100) (z . zprime))
		      '(plus x (minus g z x p) 4 . x))
	      '(PLUS 100 (MINUS G ZPRIME 100 P) 4 . 100))
       (equal (sublis '(((+ x y) . (- x y)) ((- x y) . (+ x y)))
		      '(* (/ (+ x y) (+ x p)) (- x y))
		      :test #'equal)
	      '(* (/ (- X Y) (+ X P)) (+ X Y))))
(let ((tree1 '(1 (1 2) ((1 2 3)) (((1 2 3 4))))))
  (tests (equal (sublis '((3 . "three")) tree1)
		'(1 (1 2) ((1 2 "three")) (((1 2 "three" 4)))))
	 (equal (sublis '((t . "string"))
			(sublis '((1 . "") (4 . 44)) tree1)
			:key #'stringp)
		'("string" ("string" 2) (("string" 2 3)) ((("string" 2 3 44)))))
	 (equal tree1 '(1 (1 2) ((1 2 3)) (((1 2 3 4)))))))
(let ((tree2 '("one" ("one" "two") (("one" "Two" "three")))))
  (tests (equal (sublis '(("two" . 2)) tree2)
		'("one" ("one" "two") (("one" "Two" "three"))))
	 (equal tree2 '("one" ("one" "two") (("one" "Two" "three"))))
	 (equal (sublis '(("two" . 2)) tree2 :test 'equal)
		'("one" ("one" 2) (("one" "Two" "three"))))))

;; SUBST
(let ((tree1 '(1 (1 2) (1 2 3) (1 2 3 4))))
  (tests (equal (subst "two" 2 tree1) '(1 (1 "two") (1 "two" 3) (1 "two" 3 4)))
	 (equal (subst "five" 5 tree1) '(1 (1 2) (1 2 3) (1 2 3 4)))
	 (eq tree1 (subst "five" 5 tree1)) ; Implementation dependent
	 (equal tree1 '(1 (1 2) (1 2 3) (1 2 3 4)))
	 (equal (subst 'tempest 'hurricane
		       '(shakespeare wrote (the hurricane)))
		'(SHAKESPEARE WROTE (THE TEMPEST)))
	 (equal (subst 'foo 'nil '(shakespeare wrote (twelfth night)))
		'(SHAKESPEARE WROTE (TWELFTH NIGHT . FOO) . FOO))
	 (equal (subst '(a . cons) '(old . pair)
		       '((old . spice) ((old . shoes) old . pair) (old . pair))
		       :test #'equal)
		'((OLD . SPICE) ((OLD . SHOES) A . CONS) (A . CONS)))))

; COPY-LIST
(tests (eql   (copy-list nil)          nil)
       (equal (copy-list (list nil))   (list nil))
       (equal (copy-list (list 1 2 3)) (list 1 2 3))

					; COPY-TREE
       (let* ((foo (list '(1 2) '(3 4)))
              (bar (copy-tree foo)))
	 ;; (SETF (CAR (CAR FOO)) 0) doesn't work in the test for some reason,
	 ;; despite working fine in the REPL
	 (rplaca (car foo) 0)
	 (not (= (car (car foo))
		 (car (car bar)))))

					; TREE-EQUAL
       (tree-equal '(1 2 3) '(1 2 3))
       (not (tree-equal '(1 2 3) '(3 2 1)))
       (tree-equal '(1 (2 (3 4) 5) 6) '(1 (2 (3 4) 5) 6))
       (tree-equal (cons 1 2) (cons 2 3) :test (lambda (a b) (not (= a b))))
       (tree-equal '(1 . 2) '(2 . 1) :test-not #'eql)
       (not (tree-equal '(1 . 2) '(1 . 2) :test-not #'eql)))

; FIRST to TENTH
(let ((nums '(1 2 3 4 5 6 7 8 9 10)))
  (tests (= (first   nums) 1)
	 (= (second  nums) 2)
	 (= (third   nums) 3)
	 (= (fourth  nums) 4)
	 (= (fifth   nums) 5)
	 (= (sixth   nums) 6)
	 (= (seventh nums) 7)
	 (= (eighth  nums) 8)
	 (= (ninth   nums) 9)
	 (= (tenth   nums) 10)))

; TAILP
(let* ((a (list 1 2 3))
       (b (cdr a)))
  (tests (tailp b a)
	 (tailp a a)))
(tests (tailp 'a (cons 'b 'a))

					; ACONS
       (equal '((1 . 2) (3 . 4))
	      (acons 1 2 '((3 . 4))))
       (equal '((1 . 2)) (acons 1 2 ()))

					; PAIRLIS
       (equal '((1 . 3) (0 . 2))
	      (pairlis '(0 1) '(2 3)))
       (equal '((1 . 2) (a . b))
	      (pairlis '(1) '(2) '((a . b)))))

; COPY-ALIST
(let* ((alist '((1 . 2) (3 . 4)))
       (copy (copy-alist alist)))
  (tests (not (eql alist copy))
	 (not (eql (car alist) (car copy)))
	 (equal alist copy)))

; ASSOC and RASSOC
(let ((alist '((1 . 2) (3 . 4))))
  (tests (equal (assoc  1 alist) '(1 . 2))
	 (equal (rassoc 2 alist) '(1 . 2))
	 (not   (assoc  2 alist))
	 (not   (rassoc 1 alist))
	 (equal (assoc  3 alist :test-not #'=) '(1 . 2))
	 (equal (rassoc 4 alist :test-not #'=) '(1 . 2))
	 (equal (assoc  1 alist :key (lambda (x) (/ x 3))) '(3 . 4))
	 (equal (rassoc 2 alist :key (lambda (x) (/ x 2))) '(3 . 4)))) 

; MEMBER
(tests (equal (member 2 '(1 2 3)) '(2 3))
       (not   (member 4 '(1 2 3)))
       (equal (member 4 '((1 . 2) (3 . 4)) :key #'cdr) '((3 . 4)))
       (member '(2) '((1) (2) (3)) :test #'equal)
       (member 1 '(1 2 3) :test-not #'eql)

					; ADJOIN
       (equal (adjoin 1 '(2 3))   '(1 2 3))
       (equal (adjoin 1 '(1 2 3)) '(1 2 3))
       (equal (adjoin '(1) '((1) (2)) :test #'equal) '((1) (2)))

					; INTERSECTION
       (equal (intersection '(1 2) '(2 3)) '(2))
       (not (intersection '(1 2 3) '(4 5 6)))
       (equal (intersection '((1) (2)) '((2) (3)) :test #'equal) '((2)))
       (equal '((1 . 2))
	      (intersection '((1 . 2) (2 . 3)) '((9 . 2) (9 . 4))
			    :test #'equal :key #'cdr))

					; POP
       (let* ((foo '(1 2 3))
	      (bar (pop foo)))
	 (and (= bar 1)
	      (= (car foo) 2)))

       ;; MAPCAR
       (equal (mapcar #'+ '(1 2) '(3) '(4 5 6)) '(8))

       ;; MAPLIST
       (equal '((1 2 3 4 1 2 1 2 3) (2 3 4 2 2 3))
	      (maplist #'append '(1 2 3 4) '(1 2) '(1 2 3)))
       (equal '((FOO A B C D) (FOO B C D) (FOO C D) (FOO D))
	      (maplist #'(lambda (x) (cons 'foo x)) '(a b c d)))
       (equal '(0 0 1 0 1 1 1)
	      (maplist #'(lambda (x) (if (member (car x) (cdr x)) 0 1)) '(a b a c d b c)))

       ;; MAPC
       (equal (mapc #'+ '(1 2) '(3) '(4 5 6)) '(1 2))
       (let (foo)
	 (mapc (lambda (x y z) (push (+ x y z) foo)) '(1 2) '(3) '(4 5 6))
	 (equal foo '(8)))

       ;; GETF
       (eq (getf '(a b c d) 'a) 'b)
       (null (getf '(a b c d) 'e))
       (equal (let ((x (list 'a 1))) (setf (getf x 'a) 3) x) '(a 3))
       (equal (let ((x (list 'a 1))) (incf (getf x 'a)) x) '(a 2))

       ;; GET-PROPERTIES
       (equal (multiple-value-list (get-properties '(a b c d) '(b d e))) '(NIL NIL NIL))
       (equal (multiple-value-list (get-properties '(a b c d) '(b a c))) '(a b (a b c d)))
       (equal (multiple-value-list (get-properties '(a b c d) '(b c a))) '(a b (a b c d)))

       ;; BUTLAST
       (equal (butlast '()) ())
       (equal (butlast '(1)) ())
       (equal (butlast '(1 2)) '(1))
       (equal (butlast '(1 2 3 4 5)) '(1 2 3 4))
       (equal '(1 2 3 4) (butlast '(1 2 3 4 5)))
       (equal (let ((thing '(1 2 3 4 5))) (butlast thing)) '(1 2 3 4))
       (equal (let ((thing '(1 2 3 4 5))) (butlast thing) thing) '(1 2 3 4 5))

       (equal (let ((thing '(1 2 3 4 5))) (butlast thing 0)) '(1 2 3 4 5))
       (equal (let ((thing '(1 2 3 4 5))) (butlast thing 1)) '(1 2 3 4))
       (equal (let ((thing '(1 2 3 4 5))) (butlast thing 2)) '(1 2 3))
       (equal (let ((thing '())) (butlast thing 2)) '())
       (equal (let ((thing '(1 2))) (butlast thing 2)) '())
       (equal (let ((thing '())) (butlast thing 0)) '())

       ;; MAKE-LIST
       (equal (make-list 5) '(nil nil nil nil nil))
       (equal (make-list 3 :initial-element 'rah) '(rah rah rah)))
