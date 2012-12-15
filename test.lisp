(lambda (x y)
  x)

(eval-when-compile
  (%compile-defvar 'name))
(setq name 10)
(debug name)

(debug "hola")
(debug '(1 2 3 4))
(debug (if 2 (+ 2 1) 0))
(debug (= (+ 2 1) (- 4 1)))
