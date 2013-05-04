;; Tests for list functions

;; TODO: EQUAL doesn't compare lists correctly at the moment.
;; Once it does the lists can be compared directly in many of these tests

; COPY-TREE
(test (let* ((foo (list '(1 2) '(3 4)))
             (bar (copy-tree foo)))
        ;; (SETF (CAR (CAR FOO)) 0) doesn't work in the test for some reason,
        ;; despite working fine in the REPL
        (rplaca (car foo) 0)
        (not (= (car (car foo))
                (car (car bar))))))

; TREE-EQUAL
(test (tree-equal '(1 2 3) '(1 2 3)))
(test (tree-equal '(1 (2 (3 4) 5) 6) '(1 (2 (3 4) 5) 6)))
(test (tree-equal (cons 1 2) (cons 2 3)
                  :test (lambda (a b) (not (= a b)))))

; FIRST to TENTH
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

; TAILP
(let* ((a (list 1 2 3))
       (b (cdr a)))
  (test (tailp b a))
  (test (tailp a a)))
(test (tailp 'a (cons 'b 'a)))

; ACONS
(test (equal '((1 . 2) (3 . 4))
             (acons 1 2 '((3 . 4)))))
(test (equal '((1 . 2)) (acons 1 2 ())))

; PAIRLIS
(test (equal '((1 . 3) (0 . 2))
             (pairlis '(0 1) '(2 3))))
(test (equal '((1 . 2) (a . b))
             (pairlis '(1) '(2) '((a . b)))))

; COPY-ALIST
(let* ((alist '((1 . 2) (3 . 4)))
       (copy (copy-alist alist)))
  (test (not (eql alist copy)))
  (test (not (eql (car alist) (car copy))))
  (test (equal alist copy)))

; SUBST
; Can't really test this until EQUAL works properly on lists

; POP
(test (let* ((foo '(1 2 3))
             (bar (pop foo)))
        (and (= bar 1)
             (= (car foo) 2))))
