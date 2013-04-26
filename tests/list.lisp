; Tests for list functions

(test (let* ((foo '((1 2) (3 4)))
             (bar (copy-tree foo)))
        ;; (SETF (CAR (CAR FOO)) 0) doesn't work in the test for some reason,
        ;; despite working fine in the REPL
        (rplaca (car foo) 0)
        ;; TODO: EQUAL doesn't compare lists correctly at the moment.
        ;; Once it does the lists can be compared directly
        (not (= (car (car foo))
                (car (car bar))))))
