;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/macros.lisp!")

(test (eq 'foo (defmacro foo () 1)))

(test (eq 1 (eval '(foo))))

(test (eq 2 (eval '(macrolet ((foo () 2)) (foo)))))

(test (eq 1 (eval '(macrolet ((foo () 2))
                    (macrolet ((bar () (macroexpand-1 '(foo))))
                      (bar))))))

(test (eq 2 (eval '(macrolet ((foo () 2))
                    (macrolet ((bar () (macroexpand-1 '(foo) *environment*)))
                      (bar))))))

(test (eq 2 (eval '(macrolet ((foo () 2))
                    (macrolet ((bar (&environment env)
                                 (macroexpand-1 '(foo) env)))
                      (bar))))))
