;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/read.lisp!")


;;; TODO: Uncomment when either read-from-string supports all these parameters
;;; fixme:
;;; or when test macro supports error handling, whichever comes first
;;; (test (equal (read-from-string " 1 3 5" t nil :start 2) (values 3 5)))

(expected-failure
 (equal (multiple-value-list (read-from-string "(a b c)"))
        '((A B C) 7)))

(test (equal (symbol-name (read-from-string "cl:cond")) "COND"))
(test (equal (symbol-name (read-from-string "co|N|d")) "COND"))
(test (equal (symbol-name (read-from-string "abc\\def")) "ABCdEF"))
(test (equal (symbol-name (read-from-string "|.|")) "."))
(test (equal (read-from-string "(1 .25)") '(1 0.25)))
(test (equal (read-from-string ".25") 0.25))
(test (equal (read-from-string "(1 . 25)") '(1 . 25)))

(test (equal (read-from-string "(#1=99 2 3 #1#)") '(99 2 3 99)))
(let ((v (read-from-string "#(#1=99 2 3 #1#)")))
  (test (and (eql (aref v 0) 99)
             (eql (aref v 1) 2)
             (eql (aref v 2) 3)
             (eql (aref v 3) 99))))

(test (let ((x (read-from-string "#1=(42 . #1#)")))
        (and (eql (nth 99 x) 42)
             (progn
               (rplaca x 13)
               (eql (nth 99 x) 13))
             (eq x (cdr x)))))

(test (let ((x (read-from-string "#1=#(1 #2=99 #1# #2#)")))
        (and (eql (aref x 0) 1)
             (eql (aref x 1) 99)
             (eq (aref x 2) x)
             (eql (aref x 3) 99))))

(test (let ((x (read-from-string "#1=(1 2 #2=#(3 4 #1#) 5 #2#)")))
        (and (eql (nth 0 x) 1)
             (eql (nth 1 x) 2)
             (eql (aref (nth 2 x) 0) 3)
             (eql (aref (nth 2 x) 1) 4)
             (eq (aref (nth 2 x) 2) x)
             (eql (nth 3 x) 5)
             (eq (nth 4 x) (nth 2 x)))))

; SHARPSIGN VERTICAL-BAR
(test (= (read-from-string "#||# 2")         2))
(test (= (read-from-string "#||#2")          2))
(test (= (read-from-string "#| #| |# |# 2")  2))
(test (= (read-from-string "#|#$#%^&*&|# 2") 2))
(test (= (read-from-string "#|||# 2")        2))

;; character literals
(test (char= #\SPACE #\Space #\space))


(let ((*features* '(foo)))
  (test (= (read-from-string "#+foo 1 2)") 2)))

(let ((*features* '(:foo)))
  (test (= (read-from-string "#+foo 1 2)") 1)))

(let ((*features* '(foo)))
  (test (= (read-from-string "#+foo (1 #+(or) 2) 2)") 2)))

;;; sharp radix reader

(test (string= "this is 1985" (format nil "this is ~a" #o3701)))

(test
 (equal '((1 2573) (1 2) (1 2573) (1 2))
        (let ((fn0 (lambda (x &optional (y #x0a0d)) (list x y) ))
              (fn1 (lambda (x &key (y #x0a0d)) (list x y))))
          (list
           (funcall fn0 1)
           (funcall fn0 1 2)
           (funcall fn1 1)
           (funcall fn1 1 :y 2)))))

;;; radix sharp at sequence's

#+jscl
(test
 (equal
  '(t t t t t)
  (let ((bfv #(#b1 #b10 #b11 #b100 #b101 #b110 #b111 #b1000 #b1001 #b1010))
        (bfv1 #(#b1 #b10 #b11 'sharp #\# #b100 #b101 #b110 #b111 #b1000 #b1001 #b1010))
        (bfv2 #(1 2 3 (QUOTE SHARP) #\# 4 5 6 7 8 9 10))
        (xfv #(#xa001 #xb001 #xc001 #xd001 #xe001 #xf001)))
    (list (equal
           ;; correct b->d conversion
           (jscl::vector-to-list bfv)
           '(1 2 3 4 5 6 7 8 9 10))
          (equal
           ;; correct x->d conversion
           (jscl::vector-to-list xfv)
           '(40961 45057 49153 53249 57345 61441))
          ;; list & sharp tokens -> with sharp reader
          (equal
           (jscl::vector-to-list bfv1)
           '(1 2 3 (QUOTE SHARP) #\# 4 5 6 7 8 9 10))
          (equal
           (aref bfv1 3)
           '(quote sharp))
          (equal
           (aref bfv1 4) #\#)  ))))

;;; sharp radix reader from string
;;; higly likely it redundant but let stay
#+jscl
(test
 (equal
  '(t)
  (let* 
      ((s1 (read-from-string "#(#b1 #b10 #b11 #b100 #b101 #b110 #b111 #b1000 #b1001 #b1010)")))
    (list
     (equal
      (jscl::vector-to-list s1)
      '(1 2 3 4 5 6 7 8 9 10))))))

;;; backquote

(test (equal '(x (a b c) a b c foo b bar (b c) baz b c)
             (let ((x (list 'a 'b 'c)))
               `(x ,x ,@x foo ,(cadr x) bar ,(cdr x) baz ,@(cdr x)))))

(test (equal '(a . b) `(a . b)))

(test (equal '(a b . 1)
             (let ((x 1))
               `(a b . ,x))))

;;;
;;; parse-integer
;;;
(test
 (equal '(t t t t t t)
        (list
         (multiple-value-bind (num pos) (parse-integer " 11111000001 " :radix 2 )
           (equal (list num pos) '(1985 13)))
         (multiple-value-bind (num pos) (parse-integer " 7C1 " :radix 16 )
           (equal (list num pos) '(1985 5)))
         (multiple-value-bind (num pos) (parse-integer " 3701 " :radix 8 )
           (equal (list num pos) '(1985 6)))
         ;;clhs examples
         (multiple-value-bind (num pos) (parse-integer "123")
           (equal (list num pos) '(123 3)))
         (multiple-value-bind (num pos) (parse-integer "123"  :start 1 :radix 5)
           (equal (list num pos) '(13 3)))
         (multiple-value-bind (num pos) (parse-integer "no-integer" :junk-allowed t)
           (equal (list num pos) '(nil 0))))))

;;;
;;; other fun glitch's
;;;

#|
If you remove comments from the following expression there will be a compilation error.
actually any errors in the types are caught at the compilation stage.
The correct value can be used in any expressions, as is, at your discretion
|#

#|
(let ((fn 
        (lambda (#xag #xaf) (list #xaa #xaf))))
  (funcall fn 1 2))
|#

;;; the correct value can be used in any expressions, as is, at your discretion
(let ((fn (lambda (#xaa #xaf) (list #xaa #xaf))))
  (funcall fn 1 2))
;;; => (170 175)

;;; EOF
