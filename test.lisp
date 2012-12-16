(lambda (x y)
  x)

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

(setq x 10)
(incf x)
(debug x)


;;; &rest lambda-list

(debug (lambda (&rest x) x))
(debug (lambda (x y &rest z) x))
(debug (lambda (x y &rest z) y))
