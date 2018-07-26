(tests (listp (list-all-packages))

       (not (eq (list-all-packages) (list-all-packages)))

       (equal (multiple-value-list (do-symbols (symbol *package* (values 1 2)))) '(1 2)))

(make-package 'fubar)
(tests (find-package 'fubar))
(delete-package "FUBAR")
(tests (null (find-package 'fubar)))
(make-package 'fubar)
(delete-package 'fubar)
(tests (null (find-package 'fubar)))
(make-package 'fubar)
(delete-package (find-package 'fubar))
(tests (null (find-package 'fubar)))

(when (find-package 'foo)
     (delete-package (find-package 'foo)))
(tests
 (let ((package (make-package 'foo :use '(cl)))
       foo-symbols
       cl-symbols)
   (do-symbols (symbol package)
     (push symbol foo-symbols))
   (do-external-symbols (symbol 'cl)
     (push symbol cl-symbols))
   (and (not (null foo-symbols))
        (equal foo-symbols cl-symbols))))

(when (find-package 'bar)
   (delete-package (find-package 'bar)))
(tests
 (let* ((package (make-package 'bar))
        (baz (intern (string 'baz) package)))
   (let (symbols)
     (do-all-symbols (symbol)
       (push symbol symbols))
     (and (member 'car symbols)
          (member baz symbols)))))

(tests (member 'car (find-all-symbols (string 'car))))

