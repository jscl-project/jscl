;;; compiler-codege.lisp --- Naive Javascript unparser

;; Copyright (C) 2013, 2014 David Vazquez

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

(/debug "loading compiler-codegen.lisp!")


(defvar *js-macros* nil)
(defmacro define-js-macro (name lambda-list &body body)
  (let ((form (gensym)))
    `(push (cons ',name
                 (lambda (,form)
                   (block ,name
                     (destructuring-bind ,lambda-list ,form
                       ,@body))))
           *js-macros*)))

(defun js-macroexpand (js)
  (if (and (consp js) (assoc (car js) *js-macros*))
      (let ((expander (cdr (assoc (car js) *js-macros*))))
        (multiple-value-bind (expansion stop-expand-p)
            (funcall expander (cdr js))
          (if stop-expand-p
              expansion
              (js-macroexpand expansion))))
      js))


;; This is a special precedence value just above the comma operator (,). We use
;; this in some expressions to make sure expressions are wrapped in parenthesis,
;; for example, in function calls:
;; f(1,(2,3),4)
(defconstant no-comma 2)

(defvar *js-output* t)

(defvar *js-pretty-print* t)

;;; Two separate functions are needed for escaping strings:
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

;;; Check if STRING-DESIGNATOR is valid as a Javascript identifier. It
;;; returns a couple of values. The identifier itself as a string and
;;; a boolean value with the result of this check.
(defun valid-js-identifier (string-designator)
  (let ((string (typecase string-designator
                  (symbol (symbol-name string-designator))
                  (string string-designator)
                  (t
                   (return-from valid-js-identifier (values nil nil))))))
    (flet ((constitutentp (ch)
             (or (alphanumericp ch) (member ch '(#\$ #\_)))))
      (if (and (every #'constitutentp string)
               (if (plusp (length string))
                   (not (digit-char-p (char string 0)))
                   t))
          (values string t)
          (values nil nil)))))


;;; Expression generators
;;;
;;; `js-expr' and the following auxiliary functions are the
;;; responsible for generating Javascript expression.

(defun js-identifier (string-designator)
  (multiple-value-bind (string valid)
      (valid-js-identifier string-designator)
    (unless valid
      (error "~S is not a valid Javascript identifier." string-designator))
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
       (true      (js-format "true"))
       (false     (js-format "false"))
       (null      (js-format "null"))
       (this      (js-format "this"))
       (undefined (js-format "undefined"))
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

(defun js-object-initializer (plist &optional wrap-p)
  (when wrap-p
    (js-format "("))
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
  (js-format "}")
  (when wrap-p
    (js-format ")")))

(defun js-function (name arguments &rest body)
  (js-format "function")
  (when name
    (js-format " ")
    (js-identifier name))
  (js-format "(")
  (when arguments
    (js-identifier (car arguments))
    (dolist (arg (cdr arguments))
      (js-format ",")
      (js-identifier arg)))
  (js-format ")")
  (js-stmt `(group ,@body) t))

(defun check-lvalue (x)
  (unless (or (symbolp x)
              (nth-value 1 (valid-js-identifier x))
              (and (consp x)
                   (member (car x) '(get = property))))
    (error "Bad Javascript lvalue ~S" x)))

;;; Process the Javascript AST to reduce some syntax sugar.
(defun js-expand-expr (form)
  (flet ((reduce-expr (op &key from-end)
           (reduce (lambda (x y) `(,op ,x ,y))
                   (mapcar #'js-expand-expr (cdr form))
                   :from-end from-end)))

    (if (consp form)
        (case (car form)
          (+
           (case (length (cdr form))
             (1 `(unary+ ,(cadr form)))
             (t (reduce-expr '+))))
          (-
           (case (length (cdr form))
             (1 `(unary- ,(cadr form)))
             (t (reduce-expr '-))))
          (*
           (case (length (cdr form))
             (0 1)
             (t (reduce-expr '*))))
          ((and or)
           (reduce-expr (car form)))
          ((progn comma)
           (reduce-expr 'comma :from-end t))
          (t
           (js-macroexpand form)))
        form)))

;;; It is the more complicated function of the generator. It takes a
;;; operator expression and generate Javascript for it. It will
;;; consider associativity and precedence in order not to generate
;;; unnecessary parenthesis.
(defun js-operator-expression (op args precedence associativity operand-order)
  (let ((op1 (car args))
        (op2 (cadr args)))
    (case op
      ;; Accessors
      (property
       (js-expr (car args) 20)
       (js-format "[")
       (js-expr (cadr args))
       (js-format "]"))
      (get
       (multiple-value-bind (accessor accessorp)
           (valid-js-identifier (cadr args))
         (unless accessorp
           (error "Invalid accessor ~S" (cadr args)))
         (js-expr (car args) 20)
         (js-format ".")
         (js-identifier accessor)))
      ;; Function call
      (call
       (js-expr (car args) 20)
       (js-format "(")
       (when (cdr args)
         (js-expr (cadr args) no-comma)
         (dolist (operand (cddr args))
           (js-format ",")
           (js-expr operand no-comma)))
       (js-format ")"))
      ;; Object syntax
      (object
       (js-object-initializer args))
      ;; Function expressions
      (function
       (js-format "(")
       (apply #'js-function nil args)
       (js-format ")"))
      (named-function
       (js-format "(")
       (apply #'js-function args)
       (js-format ")"))
      (t
       (labels ((low-precedence-p (op-precedence)
                  (cond
                    ((> precedence op-precedence))
                    ((< precedence op-precedence) nil)
                    (t (not (eq operand-order associativity)))))

                (%unary-op (operator string operator-precedence operator-associativity post lvalue)
                  (when (eq op operator)
                    (when lvalue (check-lvalue op1))
                    (when (low-precedence-p operator-precedence) (js-format "("))
                    (cond
                      (post
                       (js-expr op1 operator-precedence operator-associativity 'left)
                       (js-format "~a" string))
                      (t
                       (js-format "~a" string)
                       (js-expr op1 operator-precedence operator-associativity 'right)))
                    (when (low-precedence-p operator-precedence) (js-format ")"))
                    (return-from js-operator-expression)))

                (%binary-op (operator string operator-precedence operator-associativity lvalue)
                  (when (eq op operator)
                    (when lvalue (check-lvalue op1))
                    (when (low-precedence-p operator-precedence) (js-format "("))
                    (js-expr op1 operator-precedence operator-associativity 'left)
                    (js-format "~a" string)
                    (js-expr op2 operator-precedence operator-associativity 'right)
                    (when (low-precedence-p operator-precedence) (js-format ")"))
                    (return-from js-operator-expression))))

         (macrolet ((unary-op (operator string precedence associativity &key post lvalue)
                      `(%unary-op ',operator ',string ',precedence ',associativity ',post ',lvalue))
                    (binary-op (operator string precedence associativity &key lvalue)
                      `(%binary-op ',operator ',string ',precedence ',associativity ',lvalue)))


           ;; Extracted from:
           ;; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


           (unary-op new         "new "         20    right)

           (unary-op pre++       "++"           18    right :lvalue t)
           (unary-op pre--       "--"           18    right :lvalue t)
           (unary-op post++      "++"           18    right :lvalue t :post t)
           (unary-op post--      "--"           18    right :lvalue t :post t)

           ;; Note that the leading space is necessary because it
           ;; could break with post++, for example. TODO: Avoid
           ;; leading space when it's possible.
           (unary-op not         "!"            17    right)
           (unary-op bit-not     "~"            17    right)
           (unary-op ~           "~"            17    right)

           (unary-op unary+      " +"           17    right)
           (unary-op unary-      " -"           17    right)
           (unary-op delete      "delete "      17    right)
           (unary-op void        "void "        17    right)
           (unary-op typeof      "typeof "      17    right)

           (binary-op *          "*"            15    left)
           (binary-op /          "/"            15    left)
           (binary-op mod        "%"            15    left)
           (binary-op %          "%"            15    left)

           (binary-op +          "+"            14    left)
           (binary-op -          "-"            14    left)

           (binary-op <<         "<<"           13    left)
           (binary-op >>         ">>"           13    left)
           (binary-op >>>        ">>>"          13    left)

           (binary-op <=         "<="            12   left)
           (binary-op <          "<"             12   left)
           (binary-op >          ">"             12   left)
           (binary-op >=         ">="            12   left)
           (binary-op instanceof " instanceof "  12   left)
           (binary-op in         " in "          12   left)

           (binary-op ==         "=="           11    left)
           (binary-op !=         "!="           11    left)
           (binary-op ===        "==="          11    left)
           (binary-op !==        "!=="          11    left)

           (binary-op bit-and    "&"            10    left)
           (binary-op &          "&"            10    left)
           (binary-op bit-xor    "^"             9    left)
           (binary-op ^          "^"             9    left)
           (binary-op bit-or     "|"             8    left)

           (binary-op and        "&&"            7    left)
           (binary-op or         "||"            6    left)

           (when (member op '(? if))
             (when (low-precedence-p 4) (js-format "("))
             (js-expr (first args) 4 'right 'left)
             (js-format "?")
             (js-expr (second args) 4 'right 'right)
             (js-format ":")
             (js-expr (third args) 4 'right 'right)
             (when (low-precedence-p 4) (js-format ")"))
             (return-from js-operator-expression))

           (binary-op =          "="             3    right :lvalue t)
           (binary-op +=         "+="            3    right :lvalue t)
           (binary-op incf       "+="            3    right :lvalue t)
           (binary-op -=         "-="            3    right :lvalue t)
           (binary-op decf       "-="            3    right :lvalue t)
           (binary-op *=         "*="            3    right :lvalue t)
           (binary-op /=         "*="            3    right :lvalue t)
           (binary-op bit-xor=   "^="            3    right :lvalue t)
           (binary-op bit-and=   "&="            3    right :lvalue t)
           (binary-op bit-or=    "|="            3    right :lvalue t)
           (binary-op <<=        "<<="           3    right :lvalue t)
           (binary-op >>=        ">>="           3    right :lvalue t)
           (binary-op >>>=       ">>>="          3    right :lvalue t)

           (binary-op comma      ","             1    right)
           (binary-op progn      ","             1    right)

           (error "Unknown operator `~S'" op)))))))

(defun js-expr (form &optional (precedence 0) associativity operand-order)
  (let ((form (js-expand-expr form)))
    (cond
      ((or (symbolp form) (numberp form) (stringp form))
       (js-primary-expr form))
      ((vectorp form)
       (js-vector-initializer form))
      (t
       (js-operator-expression (car form) (cdr form) precedence associativity operand-order)))))



;;; Statements generators
;;;
;;; `js-stmt' generates code for Javascript statements. A form is
;;; provided to label statements. Remember that in particular,
;;; expressions can be used as statements (semicolon suffixed).
;;;

(defun js-expand-stmt (form)
  (cond
    ((and (consp form) (eq (car form) 'progn))
     (destructuring-bind (&body body) (cdr form)
       (cond
         ((null body)
          nil)
         ((null (cdr body))
          (js-expand-stmt (car body)))
         (t
          `(group ,@(cdr form))))))
    (t
     (js-macroexpand form))))

(defun js-end-stmt ()
  (js-format ";")
  (when *js-pretty-print*
    (js-format "~%")))

(defun js-stmt (form &optional parent)
  (let ((form (js-expand-stmt form)))
    (flet ((js-stmt (x) (js-stmt x form)))
      (cond
        ((null form)
         (unless (or (and (consp parent) (eq (car parent) 'group))
                     (null parent))
           (js-end-stmt)))
        ((atom form)
         (progn
           (js-expr form)
           (js-end-stmt)))
        (t
         (case (car form)
           (label
            (destructuring-bind (label &body body) (cdr form)
              (js-identifier label)
              (js-format ":")
              (js-stmt `(progn ,@body))))
           (break
            (destructuring-bind (&optional label) (cdr form)
              (js-format "break")
              (when label
                (js-format " ")
                (js-identifier label))
              (js-end-stmt)))
           (return
             (destructuring-bind (value) (cdr form)
               (js-format "return ")
               (js-expr value)
               (js-end-stmt)))
           (var
            (flet ((js-var (spec)
                     (destructuring-bind (variable &optional initial)
                         (ensure-list spec)
                       (js-identifier variable)
                       (when initial
                         (js-format "=")
                         (js-expr initial no-comma)))))
              (destructuring-bind (var &rest vars) (cdr form)
                (js-format "var ")
                (js-var var)
                (dolist (var vars)
                  (js-format ",")
                  (js-var var))
                (js-end-stmt))))
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
           (switch
            (destructuring-bind (value &rest cases) (cdr form)
              (js-format "switch(")
              (js-expr value)
              (js-format "){")
              (dolist (case cases)
                (cond
                  ((and (consp case) (eq (car case) 'case))
                   (js-format "case ")
                   (let ((value (cadr case)))
                     (unless (or (stringp value) (integerp value))
                       (error "Non-constant switch case `~S'." value))
                     (js-expr value))
                   (js-format ":"))
                  ((eq case 'default)
                   (js-format "default:"))
                  (t
                   (js-stmt case))))
              (js-format "}")))
           (for
            (destructuring-bind ((start condition step) &body body) (cdr form)
              (js-format "for (")
              (js-expr start)
              (js-format ";")
              (js-expr condition)
              (js-format ";")
              (js-expr step)
              (js-format ")")
              (js-stmt `(progn ,@body))))
           (for-in
            (destructuring-bind ((x object) &body body) (cdr form)
              (js-format "for (")
              (js-identifier x)
              (js-format " in ")
              (js-expr object)
              (js-format ")")
              (js-stmt `(progn ,@body))))
           (try
            (destructuring-bind (&rest body) (cdr form)
              (js-format "try")
              (js-stmt `(group ,@body))))
           (catch
               (destructuring-bind ((var) &rest body) (cdr form)
                 (js-format "catch (")
                 (js-identifier var)
                 (js-format ")")
                 (js-stmt `(group ,@body))))
           (finally
            (destructuring-bind (&rest body) (cdr form)
              (js-format "finally")
              (js-stmt `(group ,@body))))
           (throw
               (destructuring-bind (object) (cdr form)
                 (js-format "throw ")
                 (js-expr object)
                 (js-end-stmt)))
           (object
            ;; wrap ourselves within a pair of parens, in case JS EVAL
            ;; interprets us as a block of code
            (js-object-initializer (cdr form) t)
            (js-end-stmt))
           (t
            (js-expr form)
            (js-end-stmt))))))))


;;; It is intended to be the entry point to the code generator.
(defun js (&rest stmts)
  (mapc #'js-stmt stmts)
  nil)
