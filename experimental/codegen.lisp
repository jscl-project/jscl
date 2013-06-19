;;; Naive Javascript unparser
;;;
;;; This code generator takes as input a S-expression representation
;;; of the Javascript AST and generates Javascript code without
;;; redundant syntax constructions like extra parenthesis.
;;;
;;; It is intended to be used with the new compiler. However, it is
;;; quite independent so it has been integrated early in JSCL.

(defun ensure-list (x)
  (if (listp x)
      x
      (list x)))

(defvar *js-output* t)

(defun js-format (fmt &rest args)
  (apply #'format *js-output* fmt args))

(defun valid-js-identifier (string-designator)
  (let ((string (typecase string-designator
                  (symbol (string-downcase (symbol-name string-designator)))
                  (string string-designator)
                  (t
                   (return-from valid-js-identifier (values nil nil))))))
    (flet ((constitutentp (ch)
             (or (alphanumericp ch) (member ch '(#\$ #\_)))))
      (if (and (every #'constitutentp string)
               (if (plusp (length string))
                   (not (digit-char-p (char string 0)))
                   t))
          (values (format nil "~a" string) t)
          (values nil nil)))))

(defun js-identifier (string-designator)
  (multiple-value-bind (string valid)
      (valid-js-identifier string-designator)
    (unless valid
      (error "~S is not a valid Javascript identifier." string))
    (js-format "~a" string)))

(defun js-primary-expr (form)
  (cond
    ((numberp form)
     (js-format "~a" form))
    ((stringp form)
     (js-format "'~a'" form))
    ((symbolp form)
     (case form
       (true  (js-format "true"))
       (false (js-format "false"))
       (null  (js-format "null"))
       (this  (js-format "this"))
       (otherwise
        (js-identifier form))))
    (t
     (error "Unknown Javascript syntax ~S." form))))

(defun js-vector-initializer (vector)
  (let ((size (length vector)))
    (js-format "[")
    (dotimes (i (1- size))
      (let ((elt (aref vector i)))
        (unless (eq elt 'null)
          (js-expr elt))
        (js-format ",")))
    (when (plusp size)
      (js-expr (aref vector (1- size))))
    (js-format "]")))

(defun js-object-initializer (plist)
  (js-format "{")
  (do* ((tail plist (cddr tail)))
       ((null tail))
    (let ((key (car tail))
          (value (cadr tail)))
      (multiple-value-bind (identifier identifier-p) (valid-js-identifier key)
        (declare (ignore identifier))
        (if identifier-p
            (js-identifier key)
            (js-expr (string key))))
      (js-format ": ")
      (js-expr value)
      (unless (null (cddr tail))
        (js-format ","))))
  (js-format "}"))

(defun js-function (arguments &rest body)
  (js-format "function(")
  (when arguments
    (js-identifier (car arguments))
    (dolist (arg (cdr arguments))
      (js-format ",")
      (js-identifier arg)))
  (js-format ")")
  (js-stmt `(group ,@body)))

(defun check-lvalue (x)
  (unless (or (symbolp x)
              (nth-value 1 (valid-js-identifier x))
              (and (consp x)
                   (member (car x) '(get =))))
    (error "Bad Javascript lvalue ~S" x)))

;;; Process the Javascript AST to reduce some syntax sugar.
(defun js-expand-expr (form)
  (if (consp form)
      (case (car form)
        (+
         (case (length (cdr form))
           (1 `(unary+ ,(cadr form)))
           (t (reduce (lambda (x y) `(+ ,x ,y)) (cdr form)))))
        (-
         (case (length (cdr form))
           (1 `(unary- ,(cadr form)))
           (t (reduce (lambda (x y) `(- ,x ,y)) (cdr form)))))
        (t form))
      form))

;; Initialized to any value larger than any operator precedence
(defvar *js-operator-precedence* 1000)
(defvar *js-operator-associativity* 'left)

(defun js-operator-expression (op args)
  (macrolet (;; Format an expression optionally wrapped with
             ;; parenthesis if the precedence rules require it.
             (with-operator ((level associativity) &body body)
               (let ((g!parens (gensym))
                     (g!level (gensym)))
                 `(let* ((,g!level ,level)
                         (,g!parens
                          (cond
                            ((> ,g!level *js-operator-precedence*))
                            ((< ,g!level *js-operator-precedence*) nil)
                            (t
                             t)))
                         (*js-operator-precedence* ,g!level)
                         (*js-operator-associativity* ,associativity))
                    (when ,g!parens (js-format "("))
                    (progn ,@body)
                    (when ,g!parens (js-format ")"))))))
    (let ((op1 (car args))
          (op2 (cadr args)))
      (case op
        ;; Comma (,)
        ((progn comma)
         (with-operator (14 'left)
           (js-expr (car args))
           (dolist (operand (cdr args))
             (let ((*js-output* t))
               (js-format ",")
               (js-expr operand)))))
        ;; Function call
        (call
         (js-expr (car args))
         (js-format "(")
         (when (cdr args)
           (with-operator (13 'left)
             (js-expr (cadr args))
             (dolist (operand (cddr args))
               (let ((*js-output* t))
                 (js-format ",")
                 (js-expr operand)))))
         (js-format ")"))
        ;; Accessors
        (get
         (multiple-value-bind (identifier identifierp)
             (valid-js-identifier (car args))
           (multiple-value-bind (accessor accessorp)
               (valid-js-identifier (cadr args))
             (cond
               ((and identifierp accessorp)
                (js-identifier identifier)
                (js-format ".")
                (js-identifier accessor))
               (t
                (js-expr (car args))
                (js-format "[")
                (js-expr (cadr args))
                (js-format "]"))))))
        ;; Object syntax
        (object
         (js-object-initializer args))
        ;; Function expressions
        (function
         (js-format "(")
         (apply #'js-function args)
         (js-format ")"))
        (t
         (flet ((%unary-op (operator string precedence associativity post lvalue)
                  (when (eq op operator)
                    (with-operator (precedence associativity)
                      (when lvalue (check-lvalue op1))
                      (cond
                        (post
                         (js-expr op1)
                         (js-format string))
                        (t
                         (js-format string)
                         (js-expr op1))))
                    (return-from js-operator-expression)))
                (%binary-op (operator string precedence associativity lvalue)
                  (when (eq op operator)
                    (when lvalue (check-lvalue op1))
                    (with-operator (precedence associativity)
                      (js-expr op1)
                      (js-format string)
                      (js-expr op2))
                    (return-from js-operator-expression))))

           (macrolet ((unary-op (operator string precedence associativity &key post lvalue)
                        `(%unary-op ',operator ',string ',precedence ',associativity ',post ',lvalue))
                      (binary-op (operator string precedence associativity &key lvalue)
                        `(%binary-op ',operator ',string ',precedence ',associativity ',lvalue)))

             (unary-op pre++       "++"            1    right :lvalue t)
             (unary-op pre--       "--"            1    right :lvalue t)
             (unary-op post++      "++"            1    right :lvalue t :post t)
             (unary-op post--      "--"            1    right :lvalue t :post t)
             (unary-op not--       "!"             1    right)
             (unary-op unary+      "+"             1    right)
             (unary-op unary-      "-"             1    right)
             (unary-op delete      "delete "       1    right)
             (unary-op void        "void "         1    right)
             (unary-op typeof      "typeof "       1    right)
             (unary-op new         "new "          1    right)

             (binary-op *          "*"             2    left)
             (binary-op /          "/"             2    left)
             (binary-op mod        "%"             2    left)
             (binary-op %          "%"             2    left)
             (binary-op +          "+"             3    left)
             (binary-op -          "-"             3    left)
             (binary-op <<         "<<"            4    left)
             (binary-op >>         "<<"            4    left)
             (binary-op >>>        ">>>"           4    left)
             (binary-op <=         "<="            5    left)
             (binary-op <          "<"             5    left)
             (binary-op >          ">"             5    left)
             (binary-op >=         ">="            5    left)
             (binary-op instanceof " instanceof "  5    left)
             (binary-op in         " in "          5    left)
             (binary-op ==         "=="            6    left)
             (binary-op !=         "!="            6    left)
             (binary-op ===        "==="           6    left)
             (binary-op !==        "!=="           6    left)
             (binary-op bit-and    "&"             7    left)
             (binary-op bit-xor    "^"             8    left)
             (binary-op bit-or     "|"             9    left)
             (binary-op and        "&&"           10    left)
             (binary-op or         "||"           11    left)
             (binary-op =          "="            13    right :lvalue t)
             (binary-op +=         "+="           13    right :lvalue t)
             (binary-op incf       "+="           13    right :lvalue t)
             (binary-op -=         "-="           13    right :lvalue t)
             (binary-op decf       "-="           13    right :lvalue t)
             (binary-op *=         "*="           13    right :lvalue t)
             (binary-op /=         "*="           13    right :lvalue t)
             (binary-op bit-xor=   "^="           13    right :lvalue t)
             (binary-op bit-and=   "&="           13    right :lvalue t)
             (binary-op bit-or=    "|="           13    right :lvalue t)
             (binary-op <<=        "<<="          13    right :lvalue t)
             (binary-op >>=        ">>="          13    right :lvalue t)
             (binary-op >>>=       ">>>="         13    right :lvalue t)

             (WHEN (member op '(? if))
               (with-operator (12 'right)
                 (js-expr (first args))
                 (js-format "?")
                 (js-expr (second args))
                 (js-format ":")
                 (js-expr (third args)))))))))))


(defun js-expr (form)
  (let ((form (js-expand-expr form)))
    (cond
      ((or (symbolp form) (numberp form) (stringp form))
       (js-primary-expr form))
      ((vectorp form)
       (js-vector-initializer form))
      (t
       (js-operator-expression (car form) (cdr form))))))


(defun js-stmt (form)
  (if (atom form)
      (progn
        (js-expr form)
        (js-format ";"))
      (case (car form)
        (label
         (js-identifier (cadr form))
         (js-format ":")
         (js-stmt `(progn ,@(cddr form))))
        (break
         (js-format "break ")
         (js-identifier (second form))
         (js-format ";"))
        (return
          (js-format "return ")
          (js-expr (cadr form))
          (js-format ";"))
        (var
         (destructuring-bind (var &rest vars) (cdr form)
           (js-format "var ")
           (js-identifier var)
           (dolist (var vars)
             (js-format ",")
             (js-identifier var))
           (js-format ";")))
        (if
         (destructuring-bind (condition true &optional false)
             (cdr form)
           (js-format "if (")
           (js-expr condition)
           (js-format ") ")
           (js-stmt true)
           (when false
             (js-format " else ")
             (js-stmt false))))
        (group
         (js-format "{")
         (mapc #'js-stmt (cdr form))
         (js-format "}"))
        (progn
          (cond
            ((null (cdr form))
             (js-format ";"))
            ((null (cddr form))
             (js-stmt (cadr form)))
            (t
             (js-stmt `(group ,@(cdr form))))))
        (while
            (destructuring-bind (condition &body body) (cdr form)
              (js-format "while (")
              (js-expr condition)
              (js-format ")")
              (js-stmt `(group ,@body))))
        (t
         (js-expr form)
         (js-format ";")))))

(defun js (&rest stmts)
  (mapc #'js-stmt stmts))
