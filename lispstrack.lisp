;;; lispstrack.lisp ---

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

;;; This code is executed when lispstrack compiles this file
;;; itself. The compiler provides compilation of some special forms,
;;; as well as funcalls and macroexpansion, but no functions. So, we
;;; define the Lisp world from scratch. This code has to define enough
;;; language to the compiler to be able to run.
#+lispstrack
(progn
 (eval-when-compile
   (%compile-defmacro 'defmacro
                      '(lambda (name args &rest body)
                        `(eval-when-compile
                           (%compile-defmacro ',name '(lambda ,args ,@body))))))

 (defmacro %defvar (name value)
   `(progn
      (eval-when-compile
        (%compile-defvar ',name))
      (setq ,name ,value)))

  (defmacro defvar (name &optional value)
    `(%defvar ,name ,value))

  (defmacro named-lambda (name args &rest body)
    (let ((x (make-symbol "FN")))
      `(let ((,x (lambda ,args ,@body)))
         (set ,x "fname" ,name)
         ,x)))

  (defmacro %defun (name args &rest body)
    `(progn
       (eval-when-compile
         (%compile-defun ',name))
       (fsetq ,name (named-lambda ,(symbol-name name) ,args
                      ,@body))))

  (defmacro defun (name args &rest body)
    `(%defun ,name ,args ,@body))

 (defvar *package* (new))

 (defvar nil (make-symbol "NIL"))
 (set *package* "NIL" nil)

 (defvar t (make-symbol "T"))
 (set *package* "T" t)

 (defun internp (name)
   (in name *package*))

 (defun intern (name)
   (if (internp name)
       (get *package* name)
       (set *package* name (make-symbol name))))

 (defun find-symbol (name)
   (get *package* name))

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

 (defmacro when (condition &rest body)
   `(if ,condition (progn ,@body) nil))

 (defmacro unless (condition &rest body)
   `(if ,condition nil (progn ,@body)))

 (defmacro dolist (iter &rest body)
   (let ((var (first iter))
         (g!list (make-symbol "LIST")))
     `(let ((,g!list ,(second iter))
            (,var nil))
        (while ,g!list
          (setq ,var (car ,g!list))
          ,@body
          (setq ,g!list (cdr ,g!list))))))

 (defmacro cond (&rest clausules)
   (if (null clausules)
       nil
       (if (eq (caar clausules) t)
           `(progn ,@(cdar clausules))
           `(if ,(caar clausules)
                (progn ,@(cdar clausules))
                (cond ,@(cdr clausules))))))

 (defmacro case (form &rest clausules)
   (let ((!form (make-symbol "FORM")))
     `(let ((,!form ,form))
        (cond
          ,@(mapcar (lambda (clausule)
                      (if (eq (car clausule) t)
                          clausule
                          `((eql ,!form ,(car clausule))
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
       (let ((g (make-symbol "VAR")))
         `(let ((,g ,(car forms)))
            (if ,g ,g (or ,@(cdr forms))))))))

    (defmacro prog1 (form &rest body)
      (let ((value (make-symbol "VALUE")))
        `(let ((,value ,form))
           ,@body
           ,value))))

;;; This couple of helper functions will be defined in both Common
;;; Lisp and in Lispstrack.
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

;;; Go on growing the Lisp language in Lispstrack, with more high
;;; level utilities as well as correct versions of other
;;; constructions.
#+lispstrack
(progn
  (defmacro defun (name args &rest body)
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

  (defun code-char (x) x)
  (defun char-code (x) x)
  (defun char= (x y) (= x y))

  (defun <= (x y) (or (< x y) (= x y)))
  (defun >= (x y) (not (< x y)))

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
    (let ((ret t)
          (index 0)
          (size (length seq)))
      (while (and ret (< index size))
        (unless (funcall function (char seq index))
          (setq ret nil))
        (incf index))
      ret))

  (defun assoc (x alist)
    (cond
      ((null alist)
       nil)
      ((eql x (caar alist))
       (car alist))
      (t
       (assoc x (cdr alist)))))

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


;;; At this point, no matter if Common Lisp or lispstrack is compiling
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
  (let ((input (!reduce #'concat string "")))
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

#+lispstrack
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
    (while (not (funcall func ch))
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
         ((string= feature "lispstrack")
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

(defvar *env* '())
(defvar *fenv* '())

(defun make-binding (name type js declared)
  (list name type js declared))

(defun binding-name (b) (first b))
(defun binding-type (b) (second b))
(defun binding-translation (b) (third b))
(defun binding-declared (b)
  (and b (fourth b)))
(defun mark-binding-as-declared (b)
  (setcar (cdddr b) t))

(defvar *variable-counter* 0)
(defun gvarname (symbol)
  (concat "v" (integer-to-string (incf *variable-counter*))))

(defun lookup-variable (symbol env)
  (or (assoc symbol env)
      (assoc symbol *env*)
      (let ((name (symbol-name symbol))
            (binding (make-binding symbol 'variable (gvarname symbol) nil)))
        (push binding *env*)
        (push (lambda ()
                (unless (binding-declared (assoc symbol *env*))
                  (error (concat "Undefined variable `" name "'"))))
              *compilation-unit-checks*)
        binding)))

(defun lookup-variable-translation (symbol env)
  (binding-translation (lookup-variable symbol env)))

(defun extend-local-env (args env)
  (append (mapcar (lambda (symbol)
                    (make-binding symbol 'variable (gvarname symbol) t))
                  args)
          env))

(defvar *function-counter* 0)
(defun lookup-function (symbol env)
  (or (assoc symbol env)
      (assoc symbol *fenv*)
      (let ((name (symbol-name symbol))
            (binding
             (make-binding symbol
                           'function
                           (concat "f" (integer-to-string (incf *function-counter*)))
                           nil)))
        (push binding *fenv*)
        (push (lambda ()
                (unless (binding-declared (assoc symbol *fenv*))
                  (error (concat "Undefined function `" name "'"))))
              *compilation-unit-checks*)
        binding)))

(defun lookup-function-translation (symbol env)
  (binding-translation (lookup-function symbol env)))

(defvar *toplevel-compilations* nil)

(defun %compile-defvar (name)
  (let ((b (lookup-variable name *env*)))
    (mark-binding-as-declared b)
    (push (concat "var " (binding-translation b)) *toplevel-compilations*)))

(defun %compile-defun (name)
  (let ((b (lookup-function name *env*)))
    (mark-binding-as-declared b)
    (push (concat "var " (binding-translation b)) *toplevel-compilations*)))

(defun %compile-defmacro (name lambda)
  (push (make-binding name 'macro lambda t) *fenv*))

(defvar *compilations* nil)

(defun ls-compile-block (sexps env fenv)
  (join-trailing
   (remove-if (lambda (x)
                (or (null x)
                    (and (stringp x)
                         (zerop (length x)))))
              (mapcar (lambda (x) (ls-compile x env fenv))  sexps))
   (concat ";" *newline*)))

(defmacro define-compilation (name args &rest body)
  ;; Creates a new primitive `name' with parameters args and
  ;; @body. The body can access to the local environment through the
  ;; variable ENV.
  `(push (list ',name (lambda (env fenv ,@args) ,@body))
         *compilations*))

(define-compilation if (condition true false)
  (concat "("
          (ls-compile condition env fenv) " !== " (ls-compile nil nil nil)
          " ? "
          (ls-compile true env fenv)
          " : "
          (ls-compile false env fenv)
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
                                                 (ls-compile (cadr arg) new-env fenv)
                                                 ";" *newline*)
                                         cases)
                                   (incf idx)))
                                    (push (concat "default: break;" *newline*) cases)
                                    (join (reverse cases))))
                           "}" *newline*)
                   "")
               ;; &rest argument
               (if rest-argument
                   (let ((js!rest (lookup-variable-translation rest-argument new-env)))
                     (concat "var " js!rest "= " (ls-compile nil env fenv) ";" *newline*
                             "for (var i = arguments.length-1; i>="
                             (integer-to-string (+ n-required-arguments n-optional-arguments))
                             "; i--)" *newline*
                             (indent js!rest " = "
                                     "{car: arguments[i], cdr: ") js!rest "};"
                                     *newline*))
                   "")
               ;; Body
               (concat (ls-compile-block (butlast body) new-env fenv)
                       "return " (ls-compile (car (last body)) new-env fenv) ";")) *newline*
              "})"))))

(define-compilation fsetq (var val)
  (concat (lookup-function-translation var fenv)
          " = "
          (ls-compile val env fenv)))

(define-compilation setq (var val)
  (concat (lookup-variable-translation var env)
          " = "
           (ls-compile val env fenv)))

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
    ((symbolp sexp) (ls-compile `(intern ,(escape-string (symbol-name sexp))) *env* *fenv*))
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

(define-compilation while (pred &rest body)
  (concat "(function(){" *newline*
          (indent "while("
                  (ls-compile pred env fenv)
                  " !== "
                  (ls-compile nil nil nil) "){" *newline*
                  (indent (ls-compile-block body env fenv)))
          "}})()"))

(define-compilation function (x)
  (cond
    ((and (listp x) (eq (car x) 'lambda))
     (ls-compile x env fenv))
    ((symbolp x)
     (lookup-function-translation x fenv))))

(define-compilation eval-when-compile (&rest body)
  (eval (cons 'progn body))
  "")

(defmacro define-transformation (name args form)
  `(define-compilation ,name ,args
     (ls-compile ,form env fenv)))

(define-compilation progn (&rest body)
  (concat "(function(){" *newline*
          (indent (ls-compile-block (butlast body) env fenv)
                  "return " (ls-compile (car (last body)) env fenv) ";" *newline*)
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
                (indent (ls-compile-block (butlast body) new-env fenv)
                        "return " (ls-compile (car (last body)) new-env fenv)
                        ";" *newline*)
                "})(" (join (mapcar (lambda (x) (ls-compile x env fenv))
                                    values)
                            ",")
                ")")))))

;;; A little backquote implementation without optimizations of any
;;; kind for lispstrack.
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

(defmacro define-builtin (name args &rest body)
  `(define-compilation ,name ,args
     (let ,(mapcar (lambda (arg) `(,arg (ls-compile ,arg env fenv))) args)
       ,@body)))

(defun compile-bool (x)
  (concat "(" x "?" (ls-compile t nil nil) ": " (ls-compile nil nil nil) ")"))

(define-builtin + (x y) (concat "((" x ") + (" y "))"))
(define-builtin - (x y) (concat "((" x ") - (" y "))"))
(define-builtin * (x y) (concat "((" x ") * (" y "))"))
(define-builtin / (x y) (concat "((" x ") / (" y "))"))

(define-builtin mod (x y) (concat "((" x ") % (" y "))"))

(define-builtin < (x y) (compile-bool (concat "((" x ") < (" y "))")))
(define-builtin = (x y) (compile-bool (concat "((" x ") == (" y "))")))

(define-builtin numberp (x) (compile-bool (concat "(typeof (" x ") == \"number\")")))

(define-builtin floor (x) (concat "(Math.floor(" x "))"))

(define-builtin null (x) (compile-bool (concat "(" x "===" (ls-compile nil env fenv) ")")))

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
                  "return tmp === " (ls-compile nil nil nil)
                  "? " (ls-compile nil nil nil)
                  ": tmp.car;" *newline*)
          "})()"))

(define-builtin cdr (x)
  (concat "(function(){" *newline*
          (indent "var tmp = " x ";" *newline*
                  "return tmp === " (ls-compile nil nil nil) "? "
                  (ls-compile nil nil nil)
                  ": tmp.cdr;" *newline*)
          "})()"))

(define-builtin setcar (x new) (concat "((" x ").car = " new ")"))
(define-builtin setcdr (x new) (concat "((" x ").cdr = " new ")"))

(define-builtin symbolp (x)
  (compile-bool
   (concat "(function(){" *newline*
           (indent "var tmp = " x ";" *newline*
                   "return (typeof tmp == 'object' && 'name' in tmp);" *newline*)
           "})()")))

(define-builtin make-symbol (name)
  (concat "({name: " name "})"))

(define-builtin symbol-name (x)
  (concat "(" x ").name"))

(define-builtin eq    (x y) (compile-bool (concat "(" x " === " y ")")))
(define-builtin equal (x y) (compile-bool (concat "(" x  " == " y ")")))

(define-builtin string (x)
  (concat "String.fromCharCode(" x ")"))

(define-builtin stringp (x)
  (compile-bool (concat "(typeof(" x ") == \"string\")")))

(define-builtin string-upcase (x)
  (concat "(" x ").toUpperCase()"))

(define-builtin string-length (x)
  (concat "(" x ").length"))

(define-compilation slice (string a &optional b)
  (concat "(function(){" *newline*
          (indent "var str = " (ls-compile string env fenv) ";" *newline*
                  "var a = " (ls-compile a env fenv) ";" *newline*
                  "var b;" *newline*
                  (if b
                      (concat "b = " (ls-compile b env fenv) ";" *newline*)
                      "")
                  "return str.slice(a,b);" *newline*)
          "})()"))

(define-builtin char (string index)
  (concat "(" string ").charCodeAt(" index ")"))

(define-builtin concat-two (string1 string2)
  (concat "(" string1 ").concat(" string2 ")"))

(define-compilation funcall (func &rest args)
  (concat "("
          (ls-compile func env fenv)
          ")("
          (join (mapcar (lambda (x)
                          (ls-compile x env fenv))
                        args)
                ", ")
          ")"))

(define-compilation apply (func &rest args)
  (if (null args)
      (concat "(" (ls-compile func env fenv) ")()")
      (let ((args (butlast args))
            (last (car (last args))))
        (concat "(function(){" *newline*
                (indent "var f = " (ls-compile func env fenv) ";" *newline*
                        "var args = [" (join (mapcar (lambda (x)
                                                       (ls-compile x env fenv))
                                                     args)
                                             ", ")
                        "];" *newline*
                        "var tail = (" (ls-compile last env fenv) ");" *newline*
                        (indent "while (tail != " (ls-compile nil env fenv) "){" *newline*
                                "    args.push(tail.car);" *newline*
                                "    tail = tail.cdr;" *newline*
                                "}" *newline*
                                "return f.apply(this, args);" *newline*)
                        "})()")))))

(define-builtin js-eval (string)
  (concat "eval.apply(window, [" string  "])"))

(define-builtin error (string)
  (concat "(function (){ throw " string ";" "return 0;})()"))

(define-builtin new () "{}")

(define-builtin get (object key)
  (concat "(function(){" *newline*
          (indent "var tmp = " "(" object ")[" key "];" *newline*
                  "return tmp == undefined? " (ls-compile nil nil nil) ": tmp ;" *newline*)
          "})()"))

(define-builtin set (object key value)
  (concat "((" object ")[" key "] = " value ")"))

(define-builtin in (key object)
  (compile-bool (concat "((" key ") in (" object "))")))

(define-builtin functionp (x)
  (compile-bool (concat "(typeof " x " == 'function')")))

(define-builtin write-string (x)
  (concat "lisp.write(" x ")"))


(defun macrop (x)
  (and (symbolp x) (eq (binding-type (lookup-function x *fenv*)) 'macro)))

(defun ls-macroexpand-1 (form env fenv)
  (if (macrop (car form))
      (let ((binding (lookup-function (car form) *env*)))
        (if (eq (binding-type binding) 'macro)
            (apply (eval (binding-translation binding)) (cdr form))
            form))
      form))

(defun compile-funcall (function args env fenv)
  (cond
    ((symbolp function)
     (concat (lookup-function-translation function fenv)
             "("
             (join (mapcar (lambda (x) (ls-compile x env fenv)) args)
                   ", ")
             ")"))
    ((and (listp function) (eq (car function) 'lambda))
     (concat "(" (ls-compile function env fenv) ")("
             (join (mapcar (lambda (x) (ls-compile x env fenv)) args)
                   ", ")
             ")"))
    (t
     (error (concat "Invalid function designator " (symbol-name function))))))

(defun ls-compile (sexp env fenv)
  (cond
    ((symbolp sexp) (lookup-variable-translation sexp env))
    ((integerp sexp) (integer-to-string sexp))
    ((stringp sexp) (concat "\"" (escape-string sexp) "\""))
    ((listp sexp)
     (if (assoc (car sexp) *compilations*)
         (let ((comp (second (assoc (car sexp) *compilations*))))
           (apply comp env fenv (cdr sexp)))
         (if (macrop (car sexp))
             (ls-compile (ls-macroexpand-1 sexp env fenv) env fenv)
             (compile-funcall (car sexp) (cdr sexp) env fenv))))))

(defun ls-compile-toplevel (sexp)
  (setq *toplevel-compilations* nil)
  (let ((code (ls-compile sexp nil nil)))
    (prog1
        (concat (join (mapcar (lambda (x) (concat x ";" *newline*))
                              *toplevel-compilations*))
                code)
      (setq *toplevel-compilations* nil))))


;;; Once we have the compiler, we define the runtime environment and
;;; interactive development (eval), which works calling the compiler
;;; and evaluating the Javascript result globally.

#+lispstrack
(progn
 (defmacro with-compilation-unit (&rest body)
   `(prog1
        (progn
          (setq *compilation-unit-checks* nil)
          (setq *env* (remove-if-not #'binding-declared *env*))
          (setq *fenv* (remove-if-not #'binding-declared *fenv*))
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
   (let ((c1 (ls-compile `(setq *fenv* ',*fenv*) nil nil))
         (c2 (ls-compile `(setq *env* ',*env*) nil nil))
         (c3 (ls-compile `(setq *variable-counter* ',*variable-counter*) nil nil))
         (c4 (ls-compile `(setq *function-counter* ',*function-counter*) nil nil))
         (c5 (ls-compile `(setq *literal-counter* ',*literal-counter*) nil nil)))
     (setq *toplevel-compilations*
           (append *toplevel-compilations* (list c1 c2 c3 c4 c5)))))

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
    (setq *env* nil *fenv* nil)
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
    (ls-compile-file "lispstrack.lisp" "lispstrack.js")))
