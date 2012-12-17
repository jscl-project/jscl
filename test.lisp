;;; Library

(eval-when-compile
  (%compile-defmacro 'defmacro
     (lambda (name args &rest body)
       `(eval-when-compile
          (%compile-defmacro ',name (lambda ,args ,@body))))))

(defmacro defun (name args &rest body)
  `(progn
     (eval-when-compile
       (%compile-defun ',name))
     (fsetq ,name (lambda ,args ,@body))))

(defun 1+ (x) (+ x 1))
(defun 1- (x) (- x 1))

(defun append (list1 list2)
  (if (null list1)
      list2
      (cons (car list1)
            (append (cdr list1) list2))))

(defun reverse-aux (list acc)
  (if (null list)
      acc
      (reverse-aux (cdr list) (cons (car list) acc))))

(defun reverse (list)
  (reverse-aux list '()))

(defun mapcar (func list)
  (if (null list)
      '()
      (cons (funcall func (car list))
            (mapcar func (cdr list)))))

;;; Tests

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

(debug ((lambda (x) x) 9999))

(debug #'f)

;;; Macros
(debug "---MACROS---")



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

(debug (progn 1 2 3 123))

(debug (let ((x 99999))
         (incf x)))

;;; &rest lambda-list

(debug (lambda (&rest x) x))
(debug (lambda (x y &rest z) z))
(debug (lambda (x y &rest z) x))


;; (eval-when-compile
;;   (%compile-defmacro 'defun
;; 		     (lambda (name args &rest body)
;; 		       (list 'eval-when-compile
;; 			     (list 'compile-defun)
;; 			     (list 'fsetq (list 'lambda args (list 'progn body)))))))
