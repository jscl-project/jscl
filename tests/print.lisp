;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/print.lisp!")

#|
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
|#

(test
 (let* ((so '(
              (foo     .  "FOO")
              (fo\o    .  "FOo")
              (1..2    .  "1..2")
              (\1      .  "1")
              (\-10    .  "-10")
              (\.\.\.  .  "...")
              (\1E+2   .  "1E+2")
              (1E+     .  "1E+")
              (:kek    .  "KEK")
              (:| |    .  " ")
              (|case|  .  "case")))
        (x)
        (tmp)
        (result)
        (expected (dotimes (i (length so) tmp) (push t tmp))))
   (labels ((check-it (rec pair)
                      (cond ((and (symbolp rec) (equal (symbol-name rec) (cdr pair))) t)
                            (t (print (format nil "Bad math: ~a ~a" rec pair)) nil)))
            (math-it (pair)
                     (setq x (read-from-string (prin1-to-string (car pair))))
                     (push (check-it x pair) result)))
     (dolist (it so)
       (math-it it))
     (equal result expected))))

;;; Printing strings
(test (string= "\"foobar\"" (write-to-string "foobar")))
(test (string= "\"foo\\\"bar\"" (write-to-string "foo\"bar")))

;;; Printing vectors
(test (string= "#()" (write-to-string #())))
(test (string= "#(1)" (write-to-string #(1))))
(test (string= "#(1 2 3)" (write-to-string #(1 2 3))))
(test (string= "#(2 2)" (write-to-string
                         (make-array 4 :initial-element 2 :fill-pointer 2))))

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


;;; lisp structured objects pretty printed - outdated
#+nil
(progn
  (defstruct struct name slots)
  (test (string= "#<structure struct>"  (write-to-string (make-struct))))
  (test (string= "#<structure struct>"  (write-to-string (make-struct :name 'definition :slots #(a b c))))))

;;; EOF
