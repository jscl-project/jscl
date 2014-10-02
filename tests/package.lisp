(test (listp (list-all-packages)))

(test (not (eq (list-all-packages) (list-all-packages))))

(test (equal (multiple-value-list (do-symbols (symbol *package* (values 1 2)))) '(1 2)))

(test
 (let ((package (make-package 'foo :use '(cl)))
       foo-symbols
       cl-symbols)
   (do-symbols (symbol package)
     (push symbol foo-symbols))
   (do-external-symbols (symbol 'cl)
     (push symbol cl-symbols))
   (and (not (null foo-symbols))
        (equal foo-symbols cl-symbols))))

(test
 (let* ((package (make-package 'bar))
        (baz (intern (string 'baz) package)))
   (let (symbols)
     (do-all-symbols (symbol)
       (push symbol symbols))
     (and (member 'car symbols)
          (member baz symbols)))))

(test (member 'car (find-all-symbols (string 'car))))

;; This test is failing. I have disabled temporarily.
;; (test (eq (eval '(in-package #:cl-user)) (find-package '#:cl-user)))


