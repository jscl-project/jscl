;;; -*- mode:lisp; coding:utf-8 -*-



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

;;; CLHS 3.2.3.1: toplevel progn processes each body form
;;; sequentially as a toplevel form, so compile-time side effects
;;; (e.g. defmacro) are visible to subsequent forms (issue #593).
(test
 (= 42 (eval (read-from-string
              "(progn
                 (defmacro issue-593-double (x) `(+ ,x ,x))
                 (issue-593-double 21))"))))

;;; CLHS 3.2.3.1: if a macro call expands into a progn, its subforms
;;; must also be treated as toplevel forms.
(eval (read-from-string
       "(defmacro issue-593-my-progn (&body body)
          `(progn ,@body))"))

(test
 (= 42 (eval (read-from-string
              "(issue-593-my-progn
                 (defmacro issue-593-triple (x) `(* 3 ,x))
                 (issue-593-triple 14))"))))

;;; Nested case: a macro expanding to progn whose subform is itself
;;; a macro expanding to progn.
(test
 (= 42 (eval (read-from-string
              "(issue-593-my-progn
                 (defmacro issue-593-quadruple (x) `(* 4 ,x))
                 (issue-593-my-progn
                   (defmacro issue-593-add-two (x) `(+ 2 ,x))
                   (issue-593-add-two (issue-593-quadruple 10))))"))))

;;; EOF
