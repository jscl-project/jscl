;;; compiler-codege.lisp --- Naive Javascript unparser

;; copyright (C) 2013 David Vazquez

;; JSCL is free software: you can redistribute it and/or
;; modify it under the terms of the GNU General Public License as
;; published by the Free Software Foundation, either version 3 of the
;; License, or (at your option) any later version.
;;
;; JSCL is distributed in the hope that it will be useful, but
;; WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
;; General Public License for more details.
;;
;; You should have received a copy of the GNU General Public License
;; along with JSCL.  If not, see <http://www.gnu.org/licenses/>.

;;; This code generator takes as input a S-expression representation
;;; of the Javascript AST and generates Javascript code without
;;; redundant syntax constructions like extra parenthesis.
;;;
;;; It is intended to be used with the new compiler. However, it is
;;; quite independent so it has been integrated early in JSCL.

(defvar *js-output* t)

;;; Two seperate functions are needed for escaping strings:
;;;  One for producing JavaScript string literals (which are singly or
;;;   doubly quoted)
;;;  And one for producing Lisp strings (which are only doubly quoted)
;;;
;;; The same function would suffice for both, but for javascript string
;;; literals it is neater to use either depending on the context, e.g:
;;;  foo's => "foo's"
;;;  "foo" => '"foo"'
;;; which avoids having to escape quotes where possible
(defun js-escape-string (string)
  (let ((index 0)
        (size (length string))
        (seen-single-quote nil)
        (seen-double-quote nil))
    (flet ((%js-escape-string (string escape-single-quote-p)
             (let ((output "")
                   (index 0))
               (while (< index size)
                 (let ((ch (char string index)))
                   (when (char= ch #\\)
                     (setq output (concat output "\\")))
                   (when (and escape-single-quote-p (char= ch #\'))
                     (setq output (concat output "\\")))
                   (when (char= ch #\newline)
                     (setq output (concat output "\\"))
                     (setq ch #\n))
                   (setq output (concat output (string ch))))
                 (incf index))
               output)))
      ;; First, scan the string for single/double quotes
      (while (< index size)
        (let ((ch (char string index)))
          (when (char= ch #\')
            (setq seen-single-quote t))
          (when (char= ch #\")
            (setq seen-double-quote t)))
        (incf index))
      ;; Then pick the appropriate way to escape the quotes
      (cond
        ((not seen-single-quote)
         (concat "'"   (%js-escape-string string nil) "'"))
        ((not seen-double-quote)
         (concat "\""  (%js-escape-string string nil) "\""))
        (t (concat "'" (%js-escape-string string t)   "'"))))))


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
     (if (<= 0 form)
         (js-format "~a" form)
         (js-expr `(- ,(abs form)))))
    ((stringp form)
     (js-format "~a" (js-escape-string form)))
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
        ((progn comma)
         (reduce (lambda (x y) `(comma ,x ,y)) (cdr form) :from-end t))
        (t form))
      form))

;; Initialized to any value larger than any operator precedence
(defvar *js-operator-precedence* 1000)
(defvar *js-operator-associativity* 'left)
(defvar *js-operand-order* 'left)

;; Format an expression optionally wrapped with parenthesis if the
;; precedence rules require it.
(defmacro with-operator ((precedence associativity) &body body)
  (let ((g!parens (gensym))
        (g!precedence (gensym)))
    `(let* ((,g!precedence ,precedence)
            (,g!parens
             (cond
               ((> ,g!precedence *js-operator-precedence*))
               ((< ,g!precedence *js-operator-precedence*) nil)
               ;; Same precedence. Let us consider associativity.
               (t
                (not (eq *js-operand-order* *js-operator-associativity*)))))
            (*js-operator-precedence* ,g!precedence)
            (*js-operator-associativity* ,associativity)
            (*js-operand-order* 'left))
       (when ,g!parens (js-format "("))
       (progn ,@body)
       (when ,g!parens (js-format ")")))))

(defun js-operator (string)
  (js-format "~a" string)
  (setq *js-operand-order* 'right))

(defun js-operator-expression (op args)
  (let ((op1 (car args))
        (op2 (cadr args)))
    (case op
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
                       (js-operator string))
                      (t
                       (js-operator string)
                       (js-expr op1))))
                  (return-from js-operator-expression)))
              (%binary-op (operator string precedence associativity lvalue)
                (when (eq op operator)
                  (when lvalue (check-lvalue op1))
                  (with-operator (precedence associativity)
                    (js-expr op1)
                    (js-operator string)
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
           (unary-op not         "!"             1    right)
           (unary-op bit-not     "~"             1    right)
           ;; Note that the leading space is necessary because it
           ;; could break with post++, for example. TODO: Avoid
           ;; leading space when it's possible.
           (unary-op unary+      " +"            1    right)
           (unary-op unary-      " -"            1    right)
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

           (binary-op comma      ","            13    right)
           (binary-op progn      ","            13    right)

           (when (member op '(? if))
             (with-operator (12 'right)
               (js-expr (first args))
               (js-operator "?")
               (js-expr (second args))
               (js-format ":")
               (js-expr (third args)))
             (return-from js-operator-expression))

           (error "Unknown operator `~S'" op)))))))

(defun js-expr (form)
  (let ((form (js-expand-expr form)))
    (cond
      ((or (symbolp form) (numberp form) (stringp form))
       (js-primary-expr form))
      ((vectorp form)
       (js-vector-initializer form))
      (t
       (js-operator-expression (car form) (cdr form))))))

(defun js-expand-stmt (form)
  (cond
    ((and (consp form) (eq (car form) 'progn))
     (destructuring-bind (&body body) (cdr form)
       (cond
         ((null body)           '(empty))
         ((null (cdr body))     (js-expand-stmt (car body)))
         (t                     `(group ,@(cdr form))))))
    (t
     form)))

(defun js-stmt (form &optional parent)
  (let ((form (js-expand-stmt form)))
    (flet ((js-stmt (x) (js-stmt x form)))
      (if (atom form)
          (progn
            (js-expr form)
            (js-format ";"))
          (case (car form)
            (empty
             (unless (and (consp parent) (eq (car parent) 'group))
               (js-format ";")))
            (label
             (destructuring-bind (label &body body) (cdr form)
               (js-identifier label)
               (js-format ":")
               (js-stmt `(progn ,@body))))
            (break
             (destructuring-bind (label) (cdr form)
               (js-format "break ")
               (js-identifier label)
               (js-format ";")))
            (return
              (destructuring-bind (value) (cdr form)
                (js-format "return ")
                (js-expr value)
                (js-format ";")))
            (var
             (flet ((js-var (spec)
                      (destructuring-bind (variable &optional initial)
                          (ensure-list spec)
                        (js-identifier variable)
                        (when initial
                          (js-format "=")
                          (js-expr initial)))))
               (destructuring-bind (var &rest vars) (cdr form)
                 (let ((*js-operator-precedence* 12))
                   (js-format "var ")
                   (js-var var)
                   (dolist (var vars)
                     (js-format ",")
                     (js-var var))
                   (js-format ";")))))
            (if
             (destructuring-bind (condition true &optional false) (cdr form)
               (js-format "if (")
               (js-expr condition)
               (js-format ") ")
               (js-stmt true)
               (when false
                 (js-format " else ")
                 (js-stmt false))))
            (group
             (let ((in-group-p
                    (or (null parent)
                        (and (consp parent) (eq (car parent) 'group)))))
               (unless  in-group-p (js-format "{"))
               (mapc #'js-stmt (cdr form))
               (unless in-group-p (js-format "}"))))
            (while
                (destructuring-bind (condition &body body) (cdr form)
                  (js-format "while (")
                  (js-expr condition)
                  (js-format ")")
                  (js-stmt `(progn ,@body))))
            (throw
                (destructuring-bind (object) (cdr form)
                  (js-format "throw ")
                  (js-expr object)
                  (js-format ";")))
            (t
             (js-expr form)
             (js-format ";")))))))

(defun js (&rest stmts)
  (mapc #'js-stmt stmts)
  nil)
