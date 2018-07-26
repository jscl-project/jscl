(tests  (let ((x (read-from-string (prin1-to-string 'foo))))
         (and (symbolp x) (equal (symbol-name x) "FOO")))
       (let ((x (read-from-string (prin1-to-string 'fo\o))))
         (and (symbolp x) (equal (symbol-name x) "FOo")))
       (let ((x (read-from-string (prin1-to-string '1..2))))
         (and (symbolp x) (equal (symbol-name x) "1..2")))
       (let ((x (read-from-string (prin1-to-string '\1))))
         (and (symbolp x) (equal (symbol-name x) "1")))
       (let ((x (read-from-string (prin1-to-string '\-10))))
         (and (symbolp x) (equal (symbol-name x) "-10")))
       (let ((x (read-from-string (prin1-to-string '\.\.\.))))
         (and (symbolp x) (equal (symbol-name x) "...")))
       (let ((x (read-from-string (prin1-to-string '1E))))
         (and (symbolp x) (equal (symbol-name x) "1E")))
       (let ((x (read-from-string (prin1-to-string '\1E+2))))
         (and (symbolp x) (equal (symbol-name x) "1E+2")))
       (let ((x (read-from-string (prin1-to-string '1E+))))
         (and (symbolp x) (equal (symbol-name x) "1E+")))



;;; Printing strings
       (string= "\"foobar\"" (write-to-string "foobar"))
       (string= "\"foo\\\"bar\"" (write-to-string "foo\"bar"))

;;; Printing vectors
       (string= "#()" (write-to-string #()))
       (string= "#(1)" (write-to-string #(1)))
       (string= "#(1 2 3)" (write-to-string #(1 2 3)))

;;; Lists
       (string= "NIL" (write-to-string '()))
       (string= "(1)" (write-to-string '(1)))
       (string= "(1 2 3)" (write-to-string '(1 2 3)))
       (string= "(1 2 . 3)" (write-to-string '(1 2 . 3)))
       (string= "(1 2 3)" (write-to-string '(1 2 3)))
       (string= "((1 . 2) 3)" (write-to-string '((1 . 2) 3)))
       (string= "((1) 3)" (write-to-string '((1) 3))))

;;; Circular printing
(let ((vector #(1 2 nil)))
  (setf (aref vector 2) vector)
  (tests (string= "#1=#(1 2 #1#)"
                 (let ((*print-circle* t))
                   (write-to-string vector)))))

(let ((list '(1)))
  (setf (cdr list) list)
  (tests (string= "#1=(1 . #1#)"
                 (let ((*print-circle* t))
                   (write-to-string list)))))


