
;;; Returning from a "dynamically" nested non local exists

(defun foo (x)
  (when x (funcall x))
  (foo (lambda () (return-from foo 1)))
  (return-from foo 2))

(test (= (foo nil) 1))

(defun foo-2 (x)
  (let (value)
    (tagbody
       (when x (funcall x))
       (foo-2 (lambda () (go exit-2)))
       (go end)
     exit-2
       (setq value t)
     end)
    value))

(test (foo-2 nil))

