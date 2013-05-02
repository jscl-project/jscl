(dolist (s '(foo  fo\o 1..2 \1 \-10 \.\.\. 1E \1E+2 1E+))
  (test (let ((x (read-from-string (prin1-to-string 'foo))))
          (and (symbolp x) (equal (symbol-name x) (symbol-name 'foo))))))
