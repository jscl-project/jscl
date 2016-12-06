(test (equalp (reduce #'append (mapcar #'butlast '((1 2 3 4) (a b c d))))
              (mapcan #'butlast '((1 2 3 4) (a b c d)))))
