;;; -*- mode:lisp; coding:utf-8 -*-


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

;;; (setf macro-function)

;; macro-function returns a function for defined macros
(test (functionp (macro-function 'when)))

;; macro-function returns nil for non-macros
(test (null (macro-function '+)))

;; (setf macro-function) installs a new macro
(setf (macro-function 'test-setf-macro-function)
      (lambda (form env)
        (declare (ignore env))
        `(+ ,(second form) 100)))
(test (= 142 (eval '(test-setf-macro-function 42))))
(test (functionp (macro-function 'test-setf-macro-function)))

;; (setf macro-function) can replace an existing macro
(setf (macro-function 'test-setf-macro-function)
      (lambda (form env)
        (declare (ignore env))
        `(+ ,(second form) 200)))
(test (= 242 (eval '(test-setf-macro-function 42))))
