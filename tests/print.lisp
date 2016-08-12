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


;;; FORMAT
(test (equal (format nil "~d" 42) "42"))
(test (equal (format nil "~6,'#d" 42) "####42"))
(test (equal (let ((*print-base* 16))
               (format nil "~d" 42))
             "42"))
(test (equal (let ((*print-base* 16))
               (princ-to-string 42))
             "2A"))
(test (equal (format nil "~x" 42) "2A"))
(test (equal (format nil "~@d" 42) "+42"))
(test (equal (format nil "~@x" 42) "+2A"))
(test (equal (format nil "~d" -42) "-42"))
(test (equal (format nil "~36r" 42) "16"))
(test (equal (format nil "~@d" 0) "+0"))
#-jscl (test (equal (format nil "~f" 1/2) "0.5"))
(test (equal (format nil "~a" :monkey) "MONKEY"))
(test (equal (format nil "~a" 'monkey) "MONKEY"))
(test (equal (format nil "~a" "monkey") "monkey"))
(test (equal (format nil "~a" 42) "42"))
(test (equal (format nil "~d" :monkey) "MONKEY"))
(test (equal (format nil "~20a" "x") "x                   "))
(test (equal (format nil "~4x" 42) "  2A"))
(test (equal (format nil "~4,'0x" 42) "002A"))
(test (equal (format nil "~c" #\x) "x"))
(test (equal (format nil "~@c" #\x) "#\\x"))
(test (equalp (format nil "~%") #(#\newline)))
(test (equalp (format nil "~3%") #(#\newline #\newline #\newline)))
(test (or (equalp (format nil "~&") #(#\newline))
          (equalp (format nil "~&") "")))
(test (or (equalp (format nil "~3&") #(#\newline #\newline))
          (equalp (format nil "~3&") #(#\newline #\newline #\newline))))
(test (equal (format nil "~a" #\c) "c"))
(test (equal (format nil "~c" #\c) "c"))
(test (or (equal (format nil "~@c" #\space) "#\\Space") ; JSCL doing this, unless someone objects
          (equal (format nil "~@c" #\space) "#\\ "))) ; SBCL does this, arguably equally valid
(test (equal (format nil "~@c" #\newline) "#\\Newline"))
(expected-failure (equal (format nil "~{~a~^, ~}" '(1 2 3)) "1, 2, 3"))
(expected-failure (equal (format nil "~(~a~)" :monkey) "monkey"))
(expected-failure (equal (format nil "~:(~a~)" :monkey) "Monkey"))
(expected-failure (equal (format nil "~:@(~a~)" :monkey) "MONKEY"))

(test (equal (read-from-string (format nil "~@c" #\u+2010)) #\u+2010))

(test (equal (format nil "~5,':x" 4) "::::4"))
;;(test (equal (format nil "~5,,2,':d" 400) " 4:00")) CRASHER


