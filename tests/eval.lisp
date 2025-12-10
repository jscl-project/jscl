;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/eval.lisp!")


(test (= (eval '(+ 1 2)) 3))
(test (= 42 (progn
              (eval '(defun test-fun (x y)
                      (+ x y)))
              (eval '(test-fun 40 2)))))


;;; CLHS 3.2.4.4
(test (let ((name (gensym)))
        (eq name (eval `',name))))

(test (let* ((name (gensym))
             (list (eval `'(,name ,name))))
        (eq (car list) (cadr list))))

(test (equal "FOO"
             (let ((name (gensym)))
               (eval `(defvar ,name "FOO"))
               (symbol-value name))))

;;; EOF
