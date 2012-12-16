(lambda (x y) x)

(debug "hola")
(debug '(1 2 3 4))
(debug (if 2 (+ 2 1) 0))
(debug (= (+ 2 1) (- 4 1)))

;;; Variables
(debug "---VARIABLES---")
(eval-when-compile
  (%compile-defvar 'name))
(setq name 10)
(debug name)

;;; Functions
(debug "---FUNCTIONS---")
(eval-when-compile
  (%compile-defun 'f))
(fsetq f (lambda (x) (+ x 10)))
(debug (f 20))

;;; Macros
(debug "---MACROS---")

(eval-when-compile
  (%compile-defmacro 'defmacro
                     (lambda (name args &rest body)
                       (list 'eval-when-compile
                             (list '%compile-defmacro (list 'quote name)
                                   (list* 'lambda args body))))))

(defmacro incf (x)
  (list 'setq x (list '+ 1 x)))

(eval-when-compile
  (%compile-defvar 'x))

(setq x 10)
(incf x)
(debug x)

;;; Conses
(debug (cons 1 2))
(debug (car (cons 1 2)))
(debug (cdr (cons 1 2)))

(setq x '(1 . 2))
(debug x)
(debug (eq x x))
(debug (eq '(1 . 2) '(1 . 2)))

;;; Symbols
(debug (symbol-name 'foo))
(debug (symbol-name 'foo-bar))


;;; &rest lambda-list

(debug (lambda (&rest x) x))
(debug (lambda (x y &rest z) z))
(debug (lambda (x y &rest z) x))

;; (debug (foo))

;; (eval-when-compile
;;   (%compile-defmacro 'defun
;; 		     (lambda (name args &rest body)
;; 		       (list 'eval-when-compile
;; 			     (list 'compile-defun)
;; 			     (list 'fsetq (list 'lambda args (list 'progn body)))))))
