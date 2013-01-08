;;; ecmalisp.lisp ---

;; Copyright (C) 2012 David Vazquez
;; Copyright (C) 2012 Raimon Grau

;; This program is free software: you can redistribute it and/or
;; modify it under the terms of the GNU General Public License as
;; published by the Free Software Foundation, either version 3 of the
;; License, or (at your option) any later version.
;;
;; This program is distributed in the hope that it will be useful, but
;; WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
;; General Public License for more details.
;;
;; You should have received a copy of the GNU General Public License
;; along with this program.  If not, see <http://www.gnu.org/licenses/>.

;;; This code is executed when ecmalisp compiles this file
;;; itself. The compiler provides compilation of some special forms,
;;; as well as funcalls and macroexpansion, but no functions. So, we
;;; define the Lisp world from scratch. This code has to define enough
;;; language to the compiler to be able to run.
#+ecmalisp
(progn
 (eval-when-compile
   (%compile-defmacro 'defmacro
                      '(lambda (name args &rest body)
                        `(eval-when-compile
                           (%compile-defmacro ',name
                                              '(lambda ,(mapcar (lambda (x)
                                                                  (if (eq x '&body)
                                                                      '&rest
                                                                      x))
                                                                args)
                                                ,@body))))))

 (defmacro %defvar (name value)
   `(progn
      (eval-when-compile
        (%compile-defvar ',name))
      (setq ,name ,value)))

  (defmacro defvar (name &optional value)
    `(%defvar ,name ,value))

  (defmacro named-lambda (name args &rest body)
    (let ((x (gensym "FN")))
      `(let ((,x (lambda ,args ,@body)))
         (set ,x "fname" ,name)
         ,x)))

  (defmacro %defun (name args &rest body)
    `(progn
       (eval-when-compile
         (%compile-defun ',name))
       (fsetq ,name (named-lambda ,(symbol-name name) ,args
                      (block ,name ,@body)))))

  (defmacro defun (name args &rest body)
    `(%defun ,name ,args ,@body))

 (defvar *package* (new))

 (defvar nil (make-symbol "NIL"))
 (set *package* "NIL" nil)

 (defvar t (make-symbol "T"))
 (set *package* "T" t)

 (defun null (x)
   (eq x nil))

 (defmacro return (value)
   `(return-from nil ,value))

 (defmacro while (condition &body body)
   `(block nil (%while ,condition ,@body)))

 (defun internp (name)
   (in name *package*))

 (defun intern (name)
   (if (internp name)
       (get *package* name)
       (set *package* name (make-symbol name))))

 (defun find-symbol (name)
   (get *package* name))

 (defvar *gensym-counter* 0)
 (defun gensym (&optional (prefix "G"))
   (setq *gensym-counter* (+ *gensym-counter* 1))
   (make-symbol (concat-two prefix (integer-to-string *gensym-counter*))))

 ;; Basic functions
 (defun = (x y) (= x y))
 (defun + (x y) (+ x y))
 (defun - (x y) (- x y))
 (defun * (x y) (* x y))
 (defun / (x y) (/ x y))
 (defun 1+ (x) (+ x 1))
 (defun 1- (x) (- x 1))
 (defun zerop (x) (= x 0))
 (defun truncate (x y) (floor (/ x y)))

 (defun eql (x y) (eq x y))

 (defun not (x) (if x nil t))

 (defun cons (x y ) (cons x y))
 (defun consp (x) (consp x))
 (defun car (x) (car x))
 (defun cdr (x) (cdr x))
 (defun caar (x) (car (car x)))
 (defun cadr (x) (car (cdr x)))
 (defun cdar (x) (cdr (car x)))
 (defun cddr (x) (cdr (cdr x)))
 (defun caddr (x) (car (cdr (cdr x))))
 (defun cdddr (x) (cdr (cdr (cdr x))))
 (defun cadddr (x) (car (cdr (cdr (cdr x)))))
 (defun first (x) (car x))
 (defun second (x) (cadr x))
 (defun third (x) (caddr x))
 (defun fourth (x) (cadddr x))

 (defun list (&rest args) args)
 (defun atom (x)
   (not (consp x)))

 ;; Basic macros

  (defmacro incf (x &optional (delta 1))
    `(setq ,x (+ ,x ,delta)))

  (defmacro decf (x &optional (delta 1))
    `(setq ,x (- ,x ,delta)))

 (defmacro push (x place)
   `(setq ,place (cons ,x ,place)))

 (defmacro when (condition &body body)
   `(if ,condition (progn ,@body) nil))

 (defmacro unless (condition &body body)
   `(if ,condition nil (progn ,@body)))

 (defmacro dolist (iter &body body)
   (let ((var (first iter))
         (g!list (gensym)))
     `(let ((,g!list ,(second iter))
            (,var nil))
        (while ,g!list
          (setq ,var (car ,g!list))
          ,@body
          (setq ,g!list (cdr ,g!list)))
        ,(third iter))))

 (defmacro dotimes (iter &body body)
   (let ((g!to (gensym))
         (var (first iter))
         (to (second iter))
         (result (third iter)))
     `(let ((,var 0)
            (,g!to ,to))
        (while (< ,var ,g!to)
          ,@body
          (incf ,var))
        ,result)))

 (defmacro cond (&rest clausules)
   (if (null clausules)
       nil
       (if (eq (caar clausules) t)
           `(progn ,@(cdar clausules))
           `(if ,(caar clausules)
                (progn ,@(cdar clausules))
                (cond ,@(cdr clausules))))))

 (defmacro case (form &rest clausules)
   (let ((!form (gensym)))
     `(let ((,!form ,form))
        (cond
          ,@(mapcar (lambda (clausule)
                      (if (eq (car clausule) t)
                          clausule
                          `((eql ,!form ',(car clausule))
                            ,@(cdr clausule))))
                    clausules)))))

  (defmacro ecase (form &rest clausules)
    `(case ,form
       ,@(append
          clausules
          `((t
             (error "ECASE expression failed."))))))

  (defmacro and (&rest forms)
    (cond
      ((null forms)
       t)
      ((null (cdr forms))
       (car forms))
      (t
       `(if ,(car forms)
            (and ,@(cdr forms))
            nil))))

  (defmacro or (&rest forms)
    (cond
      ((null forms)
       nil)
      ((null (cdr forms))
       (car forms))
      (t
       (let ((g (gensym)))
         `(let ((,g ,(car forms)))
            (if ,g ,g (or ,@(cdr forms))))))))

   (defmacro prog1 (form &body body)
   (let ((value (gensym)))
     `(let ((,value ,form))
        ,@body
        ,value))))

;;; This couple of helper functions will be defined in both Common
;;; Lisp and in Ecmalisp.
(defun ensure-list (x)
  (if (listp x)
      x
      (list x)))

(defun !reduce (func list initial)
  (if (null list)
      initial
      (!reduce func
               (cdr list)
               (funcall func initial (car list)))))

;;; Go on growing the Lisp language in Ecmalisp, with more high
;;; level utilities as well as correct versions of other
;;; constructions.
#+ecmalisp
(progn
  (defmacro defun (name args &body body)
    `(progn
       (%defun ,name ,args ,@body)
       ',name))

  (defmacro defvar (name &optional value)
    `(progn
       (%defvar ,name ,value)
       ',name))

  (defun append-two (list1 list2)
    (if (null list1)
        list2
        (cons (car list1)
              (append (cdr list1) list2))))

  (defun append (&rest lists)
    (!reduce #'append-two lists '()))

  (defun reverse-aux (list acc)
    (if (null list)
        acc
        (reverse-aux (cdr list) (cons (car list) acc))))

  (defun reverse (list)
    (reverse-aux list '()))

  (defun list-length (list)
    (let ((l 0))
      (while (not (null list))
        (incf l)
        (setq list (cdr list)))
      l))

  (defun length (seq)
    (if (stringp seq)
        (string-length seq)
        (list-length seq)))

  (defun concat-two (s1 s2)
    (concat-two s1 s2))

  (defun mapcar (func list)
    (if (null list)
        '()
        (cons (funcall func (car list))
              (mapcar func (cdr list)))))

  (defun identity (x) x)

  (defun copy-list (x)
    (mapcar #'identity x))

  (defun code-char (x) x)
  (defun char-code (x) x)
  (defun char= (x y) (= x y))

  (defun integerp (x)
    (and (numberp x) (= (floor x) x)))

  (defun plusp (x) (< 0 x))
  (defun minusp (x) (< x 0))

  (defun listp (x)
    (or (consp x) (null x)))

  (defun nth (n list)
    (cond
      ((null list) list)
      ((zerop n) (car list))
      (t (nth (1- n) (cdr list)))))

  (defun last (x)
    (if (consp (cdr x))
        (last (cdr x))
        x))

  (defun butlast (x)
    (and (consp (cdr x))
         (cons (car x) (butlast (cdr x)))))

  (defun member (x list)
    (cond
      ((null list)
       nil)
      ((eql x (car list))
       list)
      (t
       (member x (cdr list)))))

  (defun remove (x list)
    (cond
      ((null list)
       nil)
      ((eql x (car list))
       (remove x (cdr list)))
      (t
       (cons (car list) (remove x (cdr list))))))

  (defun remove-if (func list)
    (cond
      ((null list)
       nil)
      ((funcall func (car list))
       (remove-if func (cdr list)))
      (t
       (cons (car list) (remove-if func (cdr list))))))

  (defun remove-if-not (func list)
    (cond
      ((null list)
       nil)
      ((funcall func (car list))
       (cons (car list) (remove-if-not func (cdr list))))
      (t
       (remove-if-not func (cdr list)))))

  (defun digit-char-p (x)
    (if (and (<= #\0 x) (<= x #\9))
        (- x #\0)
        nil))

  (defun subseq (seq a &optional b)
    (cond
     ((stringp seq)
      (if b
          (slice seq a b)
          (slice seq a)))
     (t
      (error "Unsupported argument."))))

  (defun parse-integer (string)
    (let ((value 0)
          (index 0)
          (size (length string)))
      (while (< index size)
        (setq value (+ (* value 10) (digit-char-p (char string index))))
        (incf index))
      value))

  (defun every (function seq)
    ;; string
    (let ((index 0)
          (size (length seq)))
      (while (< index size)
        (unless (funcall function (char seq index))
          (return-from every nil))
        (incf index))
      t))

  (defun assoc (x alist)
    (let ((found nil))
      (while (and alist (not found))
        (if (eql x (caar alist))
            (setq found t)
            (setq alist (cdr alist))))
      (car alist)))

  (defun string= (s1 s2)
    (equal s1 s2)))


;;; The compiler offers some primitives and special forms which are
;;; not found in Common Lisp, for instance, while. So, we grow Common
;;; Lisp a bit to it can execute the rest of the file.
#+common-lisp
(progn
  (defmacro while (condition &body body)
    `(do ()
         ((not ,condition))
       ,@body))

  (defmacro eval-when-compile (&body body)
    `(eval-when (:compile-toplevel :load-toplevel :execute)
       ,@body))

  (defun concat-two (s1 s2)
    (concatenate 'string s1 s2))

  (defun setcar (cons new)
    (setf (car cons) new))
  (defun setcdr (cons new)
    (setf (cdr cons) new)))

;;; At this point, no matter if Common Lisp or ecmalisp is compiling
;;; from here, this code will compile on both. We define some helper
;;; functions now for string manipulation and so on. They will be
;;; useful in the compiler, mostly.

(defvar *newline* (string (code-char 10)))

(defun concat (&rest strs)
  (!reduce #'concat-two strs ""))

;;; Concatenate a list of strings, with a separator
(defun join (list &optional (separator ""))
  (cond
    ((null list)
     "")
    ((null (cdr list))
     (car list))
    (t
     (concat (car list)
             separator
             (join (cdr list) separator)))))

(defun join-trailing (list &optional (separator ""))
  (if (null list)
      ""
      (concat (car list) separator (join-trailing (cdr list) separator))))

;;; Like CONCAT, but prefix each line with four spaces.
(defun indent (&rest string)
  (let ((input (join string)))
    (let ((output "")
          (index 0)
          (size (length input)))
      (when (plusp size)
        (setq output "    "))
      (while (< index size)
        (setq output
              (concat output
                      (if (and (char= (char input index) #\newline)
                               (< index (1- size))
                               (not (char= (char input (1+ index)) #\newline)))
                          (concat (string #\newline) "    ")
                          (subseq input index (1+ index)))))
        (incf index))
      output)))

(defun integer-to-string (x)
  (cond
    ((zerop x)
     "0")
    ((minusp x)
     (concat "-" (integer-to-string (- 0 x))))
    (t
     (let ((digits nil))
       (while (not (zerop x))
         (push (mod x 10) digits)
         (setq x (truncate x 10)))
       (join (mapcar (lambda (d) (string (char "0123456789" d)))
                     digits))))))

;;; Printer

#+ecmalisp
(progn
  (defun print-to-string (form)
    (cond
      ((symbolp form) (symbol-name form))
      ((integerp form) (integer-to-string form))
      ((stringp form) (concat "\"" (escape-string form) "\""))
      ((functionp form)
       (let ((name (get form "fname")))
         (if name
             (concat "#<FUNCTION " name ">")
             (concat "#<FUNCTION>"))))
      ((listp form)
       (concat "("
               (join-trailing (mapcar #'print-to-string (butlast form)) " ")
               (let ((last (last form)))
                 (if (null (cdr last))
                     (print-to-string (car last))
                     (concat (print-to-string (car last)) " . " (print-to-string (cdr last)))))
               ")"))))

  (defun write-line (x)
    (write-string x)
    (write-string *newline*)
    x)

  (defun print (x)
    (write-line (print-to-string x))
    x))


;;;; Reader

;;; The Lisp reader, parse strings and return Lisp objects. The main
;;; entry points are `ls-read' and `ls-read-from-string'.

(defun make-string-stream (string)
  (cons string 0))

(defun %peek-char (stream)
  (and (< (cdr stream) (length (car stream)))
       (char (car stream) (cdr stream))))

(defun %read-char (stream)
  (and (< (cdr stream) (length (car stream)))
       (prog1 (char (car stream) (cdr stream))
         (setcdr stream (1+ (cdr stream))))))

(defun whitespacep (ch)
  (or (char= ch #\space) (char= ch #\newline) (char= ch #\tab)))

(defun skip-whitespaces (stream)
  (let (ch)
    (setq ch (%peek-char stream))
    (while (and ch (whitespacep ch))
      (%read-char stream)
      (setq ch (%peek-char stream)))))

(defun terminalp (ch)
  (or (null ch) (whitespacep ch) (char= #\) ch) (char= #\( ch)))

(defun read-until (stream func)
  (let ((string "")
        (ch))
    (setq ch (%peek-char stream))
    (while (and ch (not (funcall func ch)))
      (setq string (concat string (string ch)))
      (%read-char stream)
      (setq ch (%peek-char stream)))
    string))

(defun skip-whitespaces-and-comments (stream)
  (let (ch)
    (skip-whitespaces stream)
    (setq ch (%peek-char stream))
    (while (and ch (char= ch #\;))
      (read-until stream (lambda (x) (char= x #\newline)))
      (skip-whitespaces stream)
      (setq ch (%peek-char stream)))))

(defun %read-list (stream)
  (skip-whitespaces-and-comments stream)
  (let ((ch (%peek-char stream)))
    (cond
      ((null ch)
       (error "Unspected EOF"))
      ((char= ch #\))
       (%read-char stream)
       nil)
      ((char= ch #\.)
       (%read-char stream)
       (prog1 (ls-read stream)
         (skip-whitespaces-and-comments stream)
         (unless (char= (%read-char stream) #\))
           (error "')' was expected."))))
      (t
       (cons (ls-read stream) (%read-list stream))))))

(defun read-string (stream)
  (let ((string "")
        (ch nil))
    (setq ch (%read-char stream))
    (while (not (eql ch #\"))
      (when (null ch)
        (error "Unexpected EOF"))
      (when (eql ch #\\)
        (setq ch (%read-char stream)))
      (setq string (concat string (string ch)))
      (setq ch (%read-char stream)))
    string))

(defun read-sharp (stream)
  (%read-char stream)
  (ecase (%read-char stream)
    (#\'
     (list 'function (ls-read stream)))
    (#\\
     (let ((cname
            (concat (string (%read-char stream))
                    (read-until stream #'terminalp))))
       (cond
         ((string= cname "space") (char-code #\space))
         ((string= cname "tab") (char-code #\tab))
         ((string= cname "newline") (char-code #\newline))
         (t (char-code (char cname 0))))))
    (#\+
     (let ((feature (read-until stream #'terminalp)))
       (cond
         ((string= feature "common-lisp")
          (ls-read stream)              ;ignore
          (ls-read stream))
         ((string= feature "ecmalisp")
          (ls-read stream))
         (t
          (error "Unknown reader form.")))))))

(defvar *eof* (make-symbol "EOF"))
(defun ls-read (stream)
  (skip-whitespaces-and-comments stream)
  (let ((ch (%peek-char stream)))
    (cond
      ((null ch)
       *eof*)
      ((char= ch #\()
       (%read-char stream)
       (%read-list stream))
      ((char= ch #\')
       (%read-char stream)
       (list 'quote (ls-read stream)))
      ((char= ch #\`)
       (%read-char stream)
       (list 'backquote (ls-read stream)))
      ((char= ch #\")
       (%read-char stream)
       (read-string stream))
      ((char= ch #\,)
       (%read-char stream)
       (if (eql (%peek-char stream) #\@)
           (progn (%read-char stream) (list 'unquote-splicing (ls-read stream)))
           (list 'unquote (ls-read stream))))
      ((char= ch #\#)
       (read-sharp stream))
      (t
       (let ((string (read-until stream #'terminalp)))
         (if (every #'digit-char-p string)
             (parse-integer string)
             (intern (string-upcase string))))))))

(defun ls-read-from-string (string)
  (ls-read (make-string-stream string)))


;;;; Compiler

;;; Translate the Lisp code to Javascript. It will compile the special
;;; forms. Some primitive functions are compiled as special forms
;;; too. The respective real functions are defined in the target (see
;;; the beginning of this file) as well as some primitive functions.

(defvar *compilation-unit-checks* '())

(defun make-binding (name type js declared)
  (list name type js declared))

(defun binding-name (b) (first b))
(defun binding-type (b) (second b))
(defun binding-translation (b) (third b))
(defun binding-declared (b)
  (and b (fourth b)))
(defun mark-binding-as-declared (b)
  (setcar (cdddr b) t))

(defun make-lexenv ()
  (list nil nil nil))

(defun copy-lexenv (lexenv)
  (copy-list lexenv))

(defun push-to-lexenv (binding lexenv namespace)
  (ecase namespace
    (variable
     (setcar lexenv (cons binding (car lexenv))))
    (function
     (setcar (cdr lexenv) (cons binding (cadr lexenv))))
    (block
     (setcar (cddr lexenv) (cons binding (caddr lexenv))))))

(defun extend-lexenv (binding lexenv namespace)
  (let ((env (copy-lexenv lexenv)))
    (push-to-lexenv binding env namespace)
    env))

(defun lookup-in-lexenv (name lexenv namespace)
  (assoc name (ecase namespace
                (variable (first lexenv))
                (function (second lexenv))
                (block (third lexenv)))))

(defvar *environment* (make-lexenv))

(defun clear-undeclared-global-bindings ()
  (let ((variables (first *environment*))
        (functions (second *environment*)))
    (setq *environment* (list variables functions (third *environment*)))))


(defvar *variable-counter* 0)
(defun gvarname (symbol)
  (concat "v" (integer-to-string (incf *variable-counter*))))

(defun lookup-variable (symbol env)
  (or (lookup-in-lexenv symbol env 'variable)
      (lookup-in-lexenv symbol *environment* 'variable)
      (let ((name (symbol-name symbol))
            (binding (make-binding symbol 'variable (gvarname symbol) nil)))
        (push-to-lexenv binding *environment* 'variable)
        (push (lambda ()
                (unless (lookup-in-lexenv symbol *environment* 'variable)
                  (error (concat "Undefined variable `" name "'"))))
              *compilation-unit-checks*)
        binding)))

(defun lookup-variable-translation (symbol env)
  (binding-translation (lookup-variable symbol env)))

(defun extend-local-env (args env)
  (let ((new (copy-lexenv env)))
    (dolist (symbol args new)
      (let ((b (make-binding symbol 'variable (gvarname symbol) t)))
        (push-to-lexenv b new 'variable)))))

(defvar *function-counter* 0)
(defun lookup-function (symbol env)
  (or (lookup-in-lexenv symbol env 'function)
      (lookup-in-lexenv symbol *environment* 'function)
      (let ((name (symbol-name symbol))
            (binding
             (make-binding symbol
                           'function
                           (concat "f" (integer-to-string (incf *function-counter*)))
                           nil)))
        (push-to-lexenv binding *environment* 'function)
        (push (lambda ()
                (unless (binding-declared (lookup-in-lexenv symbol *environment* 'function))
                  (error (concat "Undefined function `" name "'"))))
              *compilation-unit-checks*)
        binding)))

(defun lookup-function-translation (symbol env)
  (binding-translation (lookup-function symbol env)))

(defvar *toplevel-compilations* nil)

(defun %compile-defvar (name)
  (let ((b (lookup-variable name *environment*)))
    (mark-binding-as-declared b)
    (push (concat "var " (binding-translation b)) *toplevel-compilations*)))

(defun %compile-defun (name)
  (let ((b (lookup-function name *environment*)))
    (mark-binding-as-declared b)
    (push (concat "var " (binding-translation b)) *toplevel-compilations*)))

(defun %compile-defmacro (name lambda)
  (push-to-lexenv (make-binding name 'macro lambda t) *environment* 'function))

(defvar *compilations* nil)

(defun ls-compile-block (sexps env)
  (join-trailing
   (remove-if (lambda (x)
                (or (null x)
                    (and (stringp x)
                         (zerop (length x)))))
              (mapcar (lambda (x) (ls-compile x env))  sexps))
   (concat ";" *newline*)))

(defmacro define-compilation (name args &body body)
  ;; Creates a new primitive `name' with parameters args and
  ;; @body. The body can access to the local environment through the
  ;; variable ENV.
  `(push (list ',name (lambda (env ,@args) ,@body))
         *compilations*))

(define-compilation if (condition true false)
  (concat "("
          (ls-compile condition env) " !== " (ls-compile nil)
          " ? "
          (ls-compile true env)
          " : "
          (ls-compile false env)
          ")"))


(defvar *lambda-list-keywords* '(&optional &rest))

(defun list-until-keyword (list)
  (if (or (null list) (member (car list) *lambda-list-keywords*))
      nil
      (cons (car list) (list-until-keyword (cdr list)))))

(defun lambda-list-required-arguments (lambda-list)
  (list-until-keyword lambda-list))

(defun lambda-list-optional-arguments-with-default (lambda-list)
  (mapcar #'ensure-list (list-until-keyword (cdr (member '&optional lambda-list)))))

(defun lambda-list-optional-arguments (lambda-list)
  (mapcar #'car (lambda-list-optional-arguments-with-default lambda-list)))

(defun lambda-list-rest-argument (lambda-list)
  (let ((rest (list-until-keyword (cdr (member '&rest lambda-list)))))
    (when (cdr rest)
      (error "Bad lambda-list"))
    (car rest)))

(define-compilation lambda (lambda-list &rest body)
  (let ((required-arguments (lambda-list-required-arguments lambda-list))
        (optional-arguments (lambda-list-optional-arguments lambda-list))
        (rest-argument (lambda-list-rest-argument lambda-list)))
    (let ((n-required-arguments (length required-arguments))
          (n-optional-arguments (length optional-arguments))
          (new-env (extend-local-env
                    (append (ensure-list rest-argument)
                            required-arguments
                            optional-arguments)
                    env)))
      (concat "(function ("
              (join (mapcar (lambda (x)
                              (lookup-variable-translation x new-env))
                            (append required-arguments optional-arguments))
                    ",")
              "){" *newline*
              ;; Check number of arguments
              (indent
               (if required-arguments
                   (concat "if (arguments.length < " (integer-to-string n-required-arguments)
                           ") throw 'too few arguments';" *newline*)
                   "")
               (if (not rest-argument)
                   (concat "if (arguments.length > "
                           (integer-to-string (+ n-required-arguments n-optional-arguments))
                           ") throw 'too many arguments';" *newline*)
                   "")
               ;; Optional arguments
               (if optional-arguments
                   (concat "switch(arguments.length){" *newline*
                           (let ((optional-and-defaults
                                  (lambda-list-optional-arguments-with-default lambda-list))
                                 (cases nil)
                                 (idx 0))
                             (progn
                               (while (< idx n-optional-arguments)
                                 (let ((arg (nth idx optional-and-defaults)))
                                   (push (concat "case "
                                                 (integer-to-string (+ idx n-required-arguments)) ":" *newline*
                                                 (lookup-variable-translation (car arg) new-env)
                                                 "="
                                                 (ls-compile (cadr arg) new-env)
                                                 ";" *newline*)
                                         cases)
                                   (incf idx)))
                                    (push (concat "default: break;" *newline*) cases)
                                    (join (reverse cases))))
                           "}" *newline*)
                   "")
               ;; &rest/&body argument
               (if rest-argument
                   (let ((js!rest (lookup-variable-translation rest-argument new-env)))
                     (concat "var " js!rest "= " (ls-compile nil) ";" *newline*
                             "for (var i = arguments.length-1; i>="
                             (integer-to-string (+ n-required-arguments n-optional-arguments))
                             "; i--)" *newline*
                             (indent js!rest " = "
                                     "{car: arguments[i], cdr: ") js!rest "};"
                                     *newline*))
                   "")
               ;; Body
               (concat (ls-compile-block (butlast body) new-env)
                       "return " (ls-compile (car (last body)) new-env) ";")) *newline*
              "})"))))

(define-compilation fsetq (var val)
  (concat (lookup-function-translation var env)
          " = "
          (ls-compile val env)))

(define-compilation setq (var val)
  (concat (lookup-variable-translation var env)
          " = "
           (ls-compile val env)))

;;; Literals
(defun escape-string (string)
  (let ((output "")
        (index 0)
        (size (length string)))
    (while (< index size)
      (let ((ch (char string index)))
        (when (or (char= ch #\") (char= ch #\\))
          (setq output (concat output "\\")))
        (when (or (char= ch #\newline))
          (setq output (concat output "\\"))
          (setq ch #\n))
        (setq output (concat output (string ch))))
      (incf index))
    output))

(defun literal->js (sexp)
  (cond
    ((integerp sexp) (integer-to-string sexp))
    ((stringp sexp) (concat "\"" (escape-string sexp) "\""))
    ((symbolp sexp) (ls-compile `(intern ,(escape-string (symbol-name sexp))) *environment*))
    ((consp sexp) (concat "{car: "
                          (literal->js (car sexp))
                          ", cdr: "
                          (literal->js (cdr sexp)) "}"))))

(defvar *literal-counter* 0)
(defun literal (form)
  (let ((var (concat "l" (integer-to-string (incf *literal-counter*)))))
    (push (concat "var " var " = " (literal->js form)) *toplevel-compilations*)
    var))

(define-compilation quote (sexp)
  (literal sexp))

(define-compilation %while (pred &rest body)
  (concat "(function(){" *newline*
          (indent "while(" (ls-compile pred env) " !== " (ls-compile nil) "){" *newline*
                  (indent (ls-compile-block body env))
                  "}"
                  "return " (ls-compile nil) ";" *newline*)
          "})()"))

(define-compilation function (x)
  (cond
    ((and (listp x) (eq (car x) 'lambda))
     (ls-compile x env))
    ((symbolp x)
     (lookup-function-translation x env))))

(define-compilation eval-when-compile (&rest body)
  (eval (cons 'progn body))
  "")

(defmacro define-transformation (name args form)
  `(define-compilation ,name ,args
     (ls-compile ,form env)))

(define-compilation progn (&rest body)
  (concat "(function(){" *newline*
          (indent (ls-compile-block (butlast body) env)
                  "return " (ls-compile (car (last body)) env) ";" *newline*)
          "})()"))

(define-compilation let (bindings &rest body)
  (let ((bindings (mapcar #'ensure-list bindings)))
    (let ((variables (mapcar #'first bindings))
          (values    (mapcar #'second bindings)))
      (let ((new-env (extend-local-env variables env)))
        (concat "(function("
                (join (mapcar (lambda (x)
                                (lookup-variable-translation x new-env))
                              variables)
                      ",")
                "){" *newline*
                (indent (ls-compile-block (butlast body) new-env)
                        "return " (ls-compile (car (last body)) new-env)
                        ";" *newline*)
                "})(" (join (mapcar (lambda (x) (ls-compile x env))
                                    values)
                            ",")
                ")")))))


(defvar *block-counter* 0)

(define-compilation block (name &rest body)
  (let ((tr (integer-to-string (incf *block-counter*))))
    (let ((b (make-binding name 'block tr t)))
      (concat "(function(){" *newline*
              (indent "try {" *newline*
                      (indent "return " (ls-compile `(progn ,@body)
                                                    (extend-lexenv b env 'block))) ";" *newline*
                      "}" *newline*
                      "catch (cf){" *newline*
                      "    if (cf.type == 'block' && cf.id == " tr ")" *newline*
                      "        return cf.value;" *newline*
                      "    else" *newline*
                      "        throw cf;" *newline*
                      "}" *newline*)
              "})()"))))

(define-compilation return-from (name &optional value)
  (let ((b (lookup-in-lexenv name env 'block)))
    (if b
        (concat "(function(){ throw ({"
                "type: 'block', "
                "id: " (binding-translation b) ", "
                "value: " (ls-compile value env) ", "
                "message: 'Return from unknown block " (symbol-name name) ".'"
                "})})()")
        (error (concat "Unknown block `" (symbol-name name) "'.")))))

;;; A little backquote implementation without optimizations of any
;;; kind for ecmalisp.
(defun backquote-expand-1 (form)
  (cond
    ((symbolp form)
     (list 'quote form))
    ((atom form)
     form)
    ((eq (car form) 'unquote)
     (car form))
    ((eq (car form) 'backquote)
     (backquote-expand-1 (backquote-expand-1 (cadr form))))
    (t
     (cons 'append
           (mapcar (lambda (s)
                     (cond
                       ((and (listp s) (eq (car s) 'unquote))
                        (list 'list (cadr s)))
                       ((and (listp s) (eq (car s) 'unquote-splicing))
                        (cadr s))
                       (t
                        (list 'list (backquote-expand-1 s)))))
                   form)))))

(defun backquote-expand (form)
  (if (and (listp form) (eq (car form) 'backquote))
      (backquote-expand-1 (cadr form))
      form))

(defmacro backquote (form)
  (backquote-expand-1 form))

(define-transformation backquote (form)
  (backquote-expand-1 form))

;;; Primitives

(defmacro define-builtin (name args &body body)
  `(define-compilation ,name ,args
     (let ,(mapcar (lambda (arg) `(,arg (ls-compile ,arg env))) args)
       ,@body)))

(defun compile-bool (x)
  (concat "(" x "?" (ls-compile t) ": " (ls-compile nil) ")"))

;;; DECLS is a list of (JSVARNAME TYPE LISPFORM) declarations.
(defmacro type-check (decls &body body)
  `(concat "(function(){" *newline*
           (indent ,@(mapcar (lambda (decl)
                               `(concat "var " ,(first decl) " = " ,(third decl) ";" *newline*))
                             decls)

                   ,@(mapcar (lambda (decl)
                               `(concat "if (typeof " ,(first decl) " != '" ,(second decl) "')" *newline*
                                        (indent "throw 'The value ' + "
                                                ,(first decl)
                                                " + ' is not a type "
                                                ,(second decl)
                                                ".';"
                                                *newline*)))
                             decls)
                   (concat "return " (progn ,@body) ";" *newline*))
           "})()"))

(defun num-op-num (x op y)
  (type-check (("x" "number" x) ("y" "number" y))
    (concat "x" op "y")))

(define-builtin + (x y) (num-op-num x "+" y))
(define-builtin - (x y) (num-op-num x "-" y))
(define-builtin * (x y) (num-op-num x "*" y))
(define-builtin / (x y) (num-op-num x "/" y))

(define-builtin mod (x y) (num-op-num x "%" y))

(define-builtin < (x y)  (compile-bool (num-op-num x "<" y)))
(define-builtin > (x y)  (compile-bool (num-op-num x ">" y)))
(define-builtin = (x y)  (compile-bool (num-op-num x "==" y)))
(define-builtin <= (x y) (compile-bool (num-op-num x "<=" y)))
(define-builtin >= (x y) (compile-bool (num-op-num x ">=" y)))

(define-builtin numberp (x)
  (compile-bool (concat "(typeof (" x ") == \"number\")")))

(define-builtin floor (x)
  (type-check (("x" "number" x))
    "Math.floor(x)"))

(define-builtin cons (x y) (concat "({car: " x ", cdr: " y "})"))
(define-builtin consp (x)
  (compile-bool
   (concat "(function(){" *newline*
           (indent "var tmp = " x ";" *newline*
                   "return (typeof tmp == 'object' && 'car' in tmp);" *newline*)
           "})()")))

(define-builtin car (x)
  (concat "(function(){" *newline*
          (indent "var tmp = " x ";" *newline*
                  "return tmp === " (ls-compile nil)
                  "? " (ls-compile nil)
                  ": tmp.car;" *newline*)
          "})()"))

(define-builtin cdr (x)
  (concat "(function(){" *newline*
          (indent "var tmp = " x ";" *newline*
                  "return tmp === " (ls-compile nil) "? "
                  (ls-compile nil)
                  ": tmp.cdr;" *newline*)
          "})()"))

(define-builtin setcar (x new)
  (type-check (("x" "object" x))
    (concat "(x.car = " new ")")))

(define-builtin setcdr (x new)
  (type-check (("x" "object" x))
    (concat "(x.cdr = " new ")")))

(define-builtin symbolp (x)
  (compile-bool
   (concat "(function(){" *newline*
           (indent "var tmp = " x ";" *newline*
                   "return (typeof tmp == 'object' && 'name' in tmp);" *newline*)
           "})()")))

(define-builtin make-symbol (name)
  (type-check (("name" "string" name))
    "({name: name})"))

(define-builtin symbol-name (x)
  (concat "(" x ").name"))

(define-builtin eq    (x y) (compile-bool (concat "(" x " === " y ")")))
(define-builtin equal (x y) (compile-bool (concat "(" x  " == " y ")")))

(define-builtin string (x)
  (type-check (("x" "number" x))
    "String.fromCharCode(x)"))

(define-builtin stringp (x)
  (compile-bool (concat "(typeof(" x ") == \"string\")")))

(define-builtin string-upcase (x)
  (type-check (("x" "string" x))
    "x.toUpperCase()"))

(define-builtin string-length (x)
  (type-check (("x" "string" x))
    "x.length"))

(define-compilation slice (string a &optional b)
  (concat "(function(){" *newline*
          (indent "var str = " (ls-compile string env) ";" *newline*
                  "var a = " (ls-compile a env) ";" *newline*
                  "var b;" *newline*
                  (if b
                      (concat "b = " (ls-compile b env) ";" *newline*)
                      "")
                  "return str.slice(a,b);" *newline*)
          "})()"))

(define-builtin char (string index)
  (type-check (("string" "string" string)
               ("index" "number" index))
    "string.charCodeAt(index)"))

(define-builtin concat-two (string1 string2)
  (type-check (("string1" "string" string1)
               ("string2" "string" string2))
    "string1.concat(string2)"))

(define-compilation funcall (func &rest args)
  (concat "(" (ls-compile func env) ")("
          (join (mapcar (lambda (x)
                          (ls-compile x env))
                        args)
                ", ")
          ")"))

(define-compilation apply (func &rest args)
  (if (null args)
      (concat "(" (ls-compile func env) ")()")
      (let ((args (butlast args))
            (last (car (last args))))
        (concat "(function(){" *newline*
                (indent "var f = " (ls-compile func env) ";" *newline*
                        "var args = [" (join (mapcar (lambda (x)
                                                       (ls-compile x env))
                                                     args)
                                             ", ")
                        "];" *newline*
                        "var tail = (" (ls-compile last env) ");" *newline*
                        (indent "while (tail != " (ls-compile nil) "){" *newline*
                                "    args.push(tail.car);" *newline*
                                "    tail = tail.cdr;" *newline*
                                "}" *newline*
                                "return f.apply(this, args);" *newline*)
                        "})()")))))

(define-builtin js-eval (string)
  (type-check (("string" "string" string))
    "eval.apply(window, [string])"))

(define-builtin error (string)
  (concat "(function (){ throw " string "; })()"))

(define-builtin new () "{}")

(define-builtin get (object key)
  (concat "(function(){" *newline*
          (indent "var tmp = " "(" object ")[" key "];" *newline*
                  "return tmp == undefined? " (ls-compile nil) ": tmp ;" *newline*)
          "})()"))

(define-builtin set (object key value)
  (concat "((" object ")[" key "] = " value ")"))

(define-builtin in (key object)
  (compile-bool (concat "((" key ") in (" object "))")))

(define-builtin functionp (x)
  (compile-bool (concat "(typeof " x " == 'function')")))

(define-builtin write-string (x)
  (type-check (("x" "string" x))
    "lisp.write(x)"))

(defun macrop (x)
  (and (symbolp x) (eq (binding-type (lookup-function x *environment*)) 'macro)))

(defun ls-macroexpand-1 (form env)
  (if (macrop (car form))
      (let ((binding (lookup-function (car form) *environment*)))
        (if (eq (binding-type binding) 'macro)
            (apply (eval (binding-translation binding)) (cdr form))
            form))
      form))

(defun compile-funcall (function args env)
  (cond
    ((symbolp function)
     (concat (lookup-function-translation function env)
             "("
             (join (mapcar (lambda (x) (ls-compile x env)) args)
                   ", ")
             ")"))
    ((and (listp function) (eq (car function) 'lambda))
     (concat "(" (ls-compile function env) ")("
             (join (mapcar (lambda (x) (ls-compile x env)) args)
                   ", ")
             ")"))
    (t
     (error (concat "Invalid function designator " (symbol-name function))))))

(defun ls-compile (sexp &optional (env (make-lexenv)))
  (cond
    ((symbolp sexp) (lookup-variable-translation sexp env))
    ((integerp sexp) (integer-to-string sexp))
    ((stringp sexp) (concat "\"" (escape-string sexp) "\""))
    ((listp sexp)
     (if (assoc (car sexp) *compilations*)
         (let ((comp (second (assoc (car sexp) *compilations*))))
           (apply comp env (cdr sexp)))
         (if (macrop (car sexp))
             (ls-compile (ls-macroexpand-1 sexp env) env)
             (compile-funcall (car sexp) (cdr sexp) env))))))

(defun ls-compile-toplevel (sexp)
  (setq *toplevel-compilations* nil)
  (let ((code (ls-compile sexp)))
    (prog1
        (concat (join (mapcar (lambda (x) (concat x ";" *newline*))
                              *toplevel-compilations*))
                code)
      (setq *toplevel-compilations* nil))))


;;; Once we have the compiler, we define the runtime environment and
;;; interactive development (eval), which works calling the compiler
;;; and evaluating the Javascript result globally.

#+ecmalisp
(progn
  (defmacro with-compilation-unit (&body body)
    `(prog1
         (progn
           (setq *compilation-unit-checks* nil)
           (clear-undeclared-global-bindings)
           ,@body)
       (dolist (check *compilation-unit-checks*)
         (funcall check))))

  (defun eval (x)
    (let ((code
           (with-compilation-unit
               (ls-compile-toplevel x))))
      (js-eval code)))

  ;; Set the initial global environment to be equal to the host global
  ;; environment at this point of the compilation.
  (eval-when-compile
    (let ((tmp (ls-compile
                `(progn
                   (setq *environment* ',*environment*)
                   (setq *variable-counter* ',*variable-counter*)
                   (setq *function-counter* ',*function-counter*)
                   (setq *literal-counter* ',*literal-counter*)
                   (setq *gensym-counter* ',*gensym-counter*)
                   (setq *block-counter* ',*block-counter*)))))
      (setq *toplevel-compilations*
            (append *toplevel-compilations* (list tmp)))))

  (js-eval
   (concat "var lisp = {};"
           "lisp.read = " (lookup-function-translation 'ls-read-from-string nil) ";" *newline*
           "lisp.print = " (lookup-function-translation 'print-to-string nil) ";" *newline*
           "lisp.eval = " (lookup-function-translation 'eval nil) ";" *newline*
           "lisp.compile = " (lookup-function-translation 'ls-compile-toplevel nil) ";" *newline*
           "lisp.evalString = function(str){" *newline*
           "   return lisp.eval(lisp.read(str));" *newline*
           "}" *newline*
           "lisp.compileString = function(str){" *newline*
           "   return lisp.compile(lisp.read(str));" *newline*
           "}" *newline*)))


;;; Finally, we provide a couple of functions to easily bootstrap
;;; this. It just calls the compiler with this file as input.

#+common-lisp
(progn
  (defun read-whole-file (filename)
    (with-open-file (in filename)
      (let ((seq (make-array (file-length in) :element-type 'character)))
        (read-sequence seq in)
        seq)))

  (defun ls-compile-file (filename output)
    (setq *compilation-unit-checks* nil)
    (with-open-file (out output :direction :output :if-exists :supersede)
      (let* ((source (read-whole-file filename))
             (in (make-string-stream source)))
        (loop
           for x = (ls-read in)
           until (eq x *eof*)
           for compilation = (ls-compile-toplevel x)
           when (plusp (length compilation))
           do (write-line (concat compilation "; ") out))
        (dolist (check *compilation-unit-checks*)
          (funcall check))
        (setq *compilation-unit-checks* nil))))

  (defun bootstrap ()
    (setq *environment* (make-lexenv))
    (setq *variable-counter* 0
          *gensym-counter* 0
          *function-counter* 0
          *literal-counter* 0
          *block-counter* 0)
    (ls-compile-file "ecmalisp.lisp" "ecmalisp.js")))
