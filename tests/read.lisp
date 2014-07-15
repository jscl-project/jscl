;; TODO: Uncomment when either read-from-string supports all these parameters
;; or when test macro supports error handling, whichever comes first
;; (test (equal (read-from-string " 1 3 5" t nil :start 2) (values 3 5)))
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
