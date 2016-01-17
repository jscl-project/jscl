(defvar *x*)
(setq *x* 0)

(let* ((*x* (progn
              (test (= *x* 0))
              (setq *x* 1)
              (test (= *x* 1))
              2)))
  (expected-failure (= *x* 2)))

(expected-failure (= *x* 1))
