;;; Library

(eval-when-compile
  (%compile-defmacro 'defmacro
     (lambda (name args &rest body)
       `(eval-when-compile
          (%compile-defmacro ',name (lambda ,args ,@body))))))

(defmacro defvar (name value)
  `(progn
     (eval-when-compile
       (%compile-defvar ',name))
     (setq ,name ,value)))

(defmacro defun (name args &rest body)
  `(progn
     (eval-when-compile
       (%compile-defun ',name))
     (fsetq ,name (lambda ,args ,@body))))

(defun = (x y) (= x y))
(defun + (x y) (+ x y))
(defun - (x y) (- x y))
(defun * (x y) (* x y))
(defun / (x y) (/ x y))
(defun 1+ (x) (+ x 1))
(defun 1- (x) (- x 1))
(defun cons (x y ) (cons x y))
(defun car (x) (car x))
(defun cdr (x) (cdr x))

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

(defmacro push (x place)
  `(setq ,place (cons ,x ,place)))

(defvar *package* (new))

(defun intern (name)
  (let ((s (get *package* name)))
    (if s
        s
        (set *package* name (make-symbol name)))))

(defun find-symbol (name)
  (get *package* name))
