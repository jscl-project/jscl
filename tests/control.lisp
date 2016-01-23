
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



;;; Nested tagbody
(defun foo-3 ()
  (tagbody
     (tagbody
        (go real-exit))
     (go end)
   real-exit
     (return-from foo-3 t)
   end
     (return-from foo-3 nil)))

(test (foo-3))


;;; Tag shadowing
(defun foo-4 ()
  (let (x)
    (block nil
      (tagbody
         (tagbody
            (go here)
          here
            (setq x t)
            (return))
       here
         (setq x nil)))
    x))




(test (equal (flet ((foo () (return-from foo 42)))
               (foo))
             42))

(test (equal (let ((out (list)))
               (labels ((zfoo (n rf i)
                          (if (> n 0)
                              (progn
                                (push (lambda () (return-from zfoo n)) rf)
                                (push n out)
                                (zfoo (1- n) rf i)
                                (push (- n) out))
                              (progn
                                (push 999 out)
                                (funcall (nth i (reverse rf)))
                                (push -999 out)))))
                 (let ((rf (list)))
                   (zfoo 5 rf 3)
                   out)))
             '(-5 -4 -3 999 1 2 3 4 5)))

;; COMPLEMENT
(test (funcall (complement #'zerop) 1))
;; FIXME: Uncomment whenever characterp is defined
;(test (not (funcall (complement #'characterp) #\A)))
(test (not (funcall (complement #'member) 'a '(a b c))))
(test (funcall (complement #'member) 'd '(a b c)))
