;; TODO: Uncomment when either read-from-string supports all these parameters
;; or when test macro supports error handling, whichever comes first
;; (test (equal (read-from-string " 1 3 5" t nil :start 2) (values 3 5)))
(expected-failure
 (equal (read-from-string "(a b c)") (values '(A B C) 7)))

(test (equal (read-from-string "|.|") '\.))
(test (equal (read-from-string "(1 .25)") '(1 0.25)))
(test (equal (read-from-string ".25") 0.25))
(test (equal (read-from-string "(1 |.| 25)") '(1 |.| 25)))
(test (equal (read-from-string "(1 . 25)") '(1 . 25)))
