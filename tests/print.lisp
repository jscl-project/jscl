(test (let ((x (read-from-string (prin1-to-string 'foo))))
        (and (symbolp x) (equal (symbol-name x) "FOO"))))
(test (let ((x (read-from-string (prin1-to-string 'fo\o))))
        (and (symbolp x) (equal (symbol-name x) "FOo"))))
(test (let ((x (read-from-string (prin1-to-string '1..2))))
        (and (symbolp x) (equal (symbol-name x) "1..2"))))
(test (let ((x (read-from-string (prin1-to-string '\1))))
        (and (symbolp x) (equal (symbol-name x) "1"))))
(test (let ((x (read-from-string (prin1-to-string '\-10))))
        (and (symbolp x) (equal (symbol-name x) "-10"))))
(test (let ((x (read-from-string (prin1-to-string '\.\.\.))))
        (and (symbolp x) (equal (symbol-name x) "..."))))
(test (let ((x (read-from-string (prin1-to-string '1E))))
        (and (symbolp x) (equal (symbol-name x) "1E"))))
(test (let ((x (read-from-string (prin1-to-string '\1E+2))))
        (and (symbolp x) (equal (symbol-name x) "1E+2"))))
(test (let ((x (read-from-string (prin1-to-string '1E+))))
        (and (symbolp x) (equal (symbol-name x) "1E+"))))



;;; Printing strings
(test (string= "\"foobar\"" (write-to-string "foobar")))
(test (string= "\"foo\\\"bar\"" (write-to-string "foo\"bar")))

;;; Printing vectors
(test (string= "#()" (write-to-string #())))
(test (string= "#(1)" (write-to-string #(1))))
(test (string= "#(1 2 3)" (write-to-string #(1 2 3))))

;;; Lists
(test (string= "NIL" (write-to-string '())))
(test (string= "(1)" (write-to-string '(1))))
(test (string= "(1 2 3)" (write-to-string '(1 2 3))))
(test (string= "(1 2 . 3)" (write-to-string '(1 2 . 3))))
(test (string= "(1 2 3)" (write-to-string '(1 2 3))))
(test (string= "((1 . 2) 3)" (write-to-string '((1 . 2) 3))))
(test (string= "((1) 3)" (write-to-string '((1) 3))))

;;; Circular printing
(let ((vector #(1 2 nil)))
  (setf (aref vector 2) vector)
  (test (string= "#1=#(1 2 #1#)"
                 (let ((*print-circle* t))
                   (write-to-string vector)))))

(let ((list '(1)))
  (setf (cdr list) list)
  (test (string= "#1=(1 . #1#)"
                 (let ((*print-circle* t))
                   (write-to-string list)))))


