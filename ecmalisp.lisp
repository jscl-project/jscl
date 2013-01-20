;;; ecmalisp.lisp ---

;; Copyright (C) 2012, 2013 David Vazquez
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

  (defmacro declaim (&rest decls)
    `(eval-when-compile
       ,@(mapcar (lambda (decl) `(!proclaim ',decl)) decls)))

  (declaim (constant nil t) (special t nil))
  (setq nil 'nil)
  (setq t 't)

  (defmacro when (condition &body body)
    `(if ,condition (progn ,@body) nil))

  (defmacro unless (condition &body body)
    `(if ,condition nil (progn ,@body)))

  (defmacro defvar (name value &optional docstring)
    `(progn
       (declaim (special ,name))
       (unless (boundp ',name) (setq ,name ,value))
       ,@(when (stringp docstring) `((oset ',name "vardoc" ,docstring)))
       ',name))

  (defmacro defparameter (name value &optional docstring)
    `(progn
       (setq ,name ,value)
       ,@(when (stringp docstring) `((oset ',name "vardoc" ,docstring)))
       ',name))

  (defmacro named-lambda (name args &rest body)
    (let ((x (gensym "FN")))
      `(let ((,x (lambda ,args ,@body)))
         (oset ,x "fname" ,name)
         ,x)))

  (defmacro defun (name args &rest body)
    `(progn
       (declaim (non-overridable ,name))
       (fset ',name
             (named-lambda ,(symbol-name name) ,args
               ,@(if (and (stringp (car body)) (not (null (cdr body))))
                     `(,(car body) (block ,name ,@(cdr body)))
                     `((block ,name ,@body)))))
       ',name))

  (defun null (x)
    (eq x nil))

  (defmacro return (&optional value)
    `(return-from nil ,value))

  (defmacro while (condition &body body)
    `(block nil (%while ,condition ,@body)))

  (defvar *gensym-counter* 0)
  (defun gensym (&optional (prefix "G"))
    (setq *gensym-counter* (+ *gensym-counter* 1))
    (make-symbol (concat-two prefix (integer-to-string *gensym-counter*))))

  (defun boundp (x)
    (boundp x))

  ;; Basic functions
  (defun = (x y) (= x y))
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

  (defun car (x)
    "Return the CAR part of a cons, or NIL if X is null."
    (car x))

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

  (defmacro dolist (iter &body body)
    (let ((var (first iter))
          (g!list (gensym)))
      `(block nil
         (let ((,g!list ,(second iter))
               (,var nil))
           (%while ,g!list
                   (setq ,var (car ,g!list))
                   (tagbody ,@body)
                   (setq ,g!list (cdr ,g!list)))
           ,(third iter)))))

  (defmacro dotimes (iter &body body)
    (let ((g!to (gensym))
          (var (first iter))
          (to (second iter))
          (result (third iter)))
      `(block nil
         (let ((,var 0)
               (,g!to ,to))
           (%while (< ,var ,g!to)
                   (tagbody ,@body)
                   (incf ,var))
           ,result))))

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
         ,value)))

  (defmacro prog2 (form1 result &body body)
    `(prog1 (progn ,form1 ,result) ,@body)))


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
  (defun + (&rest args)
    (let ((r 0))
      (dolist (x args r)
	(incf r x))))

  (defun - (x &rest others)
    (if (null others)
	(- x)
	(let ((r x))
	  (dolist (y others r)
	    (decf r y)))))

  (defun append-two (list1 list2)
    (if (null list1)
        list2
        (cons (car list1)
              (append (cdr list1) list2))))

  (defun append (&rest lists)
    (!reduce #'append-two lists '()))

  (defun revappend (list1 list2)
    (while list1
      (push (car list1) list2)
      (setq list1 (cdr list1)))
    list2)

  (defun reverse (list)
    (revappend list '()))

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

  (defun nthcdr (n list)
    (while (and (plusp n) list)
      (setq n (1- n))
      (setq list (cdr list)))
    list)

  (defun nth (n list)
    (car (nthcdr n list)))

  (defun last (x)
    (while (consp (cdr x))
      (setq x (cdr x)))
    x)

  (defun butlast (x)
    (and (consp (cdr x))
         (cons (car x) (butlast (cdr x)))))

  (defun member (x list)
    (while list
      (when (eql x (car list))
        (return list))
      (setq list (cdr list))))

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

  (defun some (function seq)
    (cond
      ((stringp seq)
       (let ((index 0)
             (size (length seq)))
         (while (< index size)
           (when (funcall function (char seq index))
             (return-from some t))
           (incf index))
         nil))
      ((listp seq)
       (dolist (x seq nil)
         (when (funcall function x)
           (return t))))
      (t
       (error "Unknown sequence."))))

  (defun every (function seq)
    (cond
      ((stringp seq)
       (let ((index 0)
             (size (length seq)))
         (while (< index size)
           (unless (funcall function (char seq index))
             (return-from every nil))
           (incf index))
         t))
      ((listp seq)
       (dolist (x seq t)
         (unless (funcall function x)
           (return))))
      (t
       (error "Unknown sequence."))))

  (defun assoc (x alist)
    (while alist
      (if (eql x (caar alist))
          (return)
          (setq alist (cdr alist))))
    (car alist))

  (defun string (x)
    (cond ((stringp x) x)
          ((symbolp x) (symbol-name x))
          (t (char-to-string x))))

  (defun string= (s1 s2)
    (equal s1 s2))

  (defun fdefinition (x)
    (cond
      ((functionp x)
       x)
      ((symbolp x)
       (symbol-function x))
      (t
       (error "Invalid function"))))

  (defun disassemble (function)
    (write-line (lambda-code (fdefinition function)))
    nil)

  (defun documentation (x type)
    "Return the documentation of X. TYPE must be the symbol VARIABLE or FUNCTION."
    (ecase type
      (function
       (let ((func (fdefinition x)))
         (oget func "docstring")))
      (variable
       (unless (symbolp x)
         (error "Wrong argument type! it should be a symbol"))
       (oget x "vardoc"))))

  ;; Packages

  (defvar *package-list* nil)

  (defun list-all-packages ()
    *package-list*)

  (defun make-package (name &optional use)
    (let ((package (new))
          (use (mapcar #'find-package-or-fail use)))
      (oset package "packageName" name)
      (oset package "symbols" (new))
      (oset package "exports" (new))
      (oset package "use" use)
      (push package *package-list*)
      package))

  (defun packagep (x)
    (and (objectp x) (in "symbols" x)))

  (defun find-package (package-designator)
    (when (packagep package-designator)
      (return-from find-package package-designator))
    (let ((name (string package-designator)))
      (dolist (package *package-list*)
        (when (string= (package-name package) name)
          (return package)))))

  (defun find-package-or-fail (package-designator)
    (or (find-package package-designator)
        (error "Package unknown.")))

  (defun package-name (package-designator)
    (let ((package (find-package-or-fail package-designator)))
      (oget package "packageName")))

  (defun %package-symbols (package-designator)
    (let ((package (find-package-or-fail package-designator)))
      (oget package "symbols")))

  (defun package-use-list (package-designator)
    (let ((package (find-package-or-fail package-designator)))
      (oget package "use")))

  (defun %package-external-symbols (package-designator)
    (let ((package (find-package-or-fail package-designator)))
      (oget package "exports")))

  (defvar *common-lisp-package*
    (make-package "CL"))

  (defvar *user-package*
    (make-package "CL-USER" (list *common-lisp-package*)))

  (defvar *keyword-package*
    (make-package "KEYWORD"))

  (defun keywordp (x)
    (and (symbolp x) (eq (symbol-package x) *keyword-package*)))

  (defvar *package* *common-lisp-package*)

  (defmacro in-package (package-designator)
    `(eval-when-compile
       (setq *package* (find-package-or-fail ,package-designator))))

  ;; This function is used internally to initialize the CL package
  ;; with the symbols built during bootstrap.
  (defun %intern-symbol (symbol)
    (let ((symbols (%package-symbols *common-lisp-package*)))
      (oset symbol "package" *common-lisp-package*)
      (oset symbols (symbol-name symbol) symbol)))

  (defun %find-symbol (name package)
    (let ((package (find-package-or-fail package)))
      (let ((symbols (%package-symbols package)))
        (if (in name symbols)
            (cons (oget symbols name) t)
            (dolist (used (package-use-list package) (cons nil nil))
              (let ((exports (%package-external-symbols used)))
                (when (in name exports)
                  (return-from %find-symbol
                    (cons (oget exports name) t)))))))))

  (defun find-symbol (name &optional (package *package*))
    (car (%find-symbol name package)))

  (defun intern (name &optional (package *package*))
    (let ((package (find-package-or-fail package)))
      (let ((result (%find-symbol name package)))
        (if (cdr result)
            (car result)
            (let ((symbols (%package-symbols package)))
              (oget symbols name)
              (let ((symbol (make-symbol name)))
                (oset symbol "package" package)
                (when (eq package *keyword-package*)
                  (oset symbol "value" symbol)
                  (export (list symbol) package))
                (oset symbols name symbol)))))))

  (defun symbol-package (symbol)
    (unless (symbolp symbol)
      (error "it is not a symbol"))
    (oget symbol "package"))

  (defun export (symbols &optional (package *package*))
    (let ((exports (%package-external-symbols package)))
      (dolist (symb symbols t)
        (oset exports (symbol-name symb) symb)))))


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

(defmacro concatf (variable &body form)
  `(setq ,variable (concat ,variable (progn ,@form))))

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

(defun mapconcat (func list)
  (join (mapcar func list)))

;;; Like CONCAT, but prefix each line with four spaces. Two versions
;;; of this function are available, because the Ecmalisp version is
;;; very slow and bootstraping was annoying.

#+ecmalisp
(defun indent (&rest string)
  (let ((input (join string)))
    (let ((output "")
          (index 0)
          (size (length input)))
      (when (plusp (length input)) (concatf output "    "))
      (while (< index size)
        (let ((str
               (if (and (char= (char input index) #\newline)
                        (< index (1- size))
                        (not (char= (char input (1+ index)) #\newline)))
                   (concat (string #\newline) "    ")
                   (string (char input index)))))
          (concatf output str))
        (incf index))
      output)))

#+common-lisp
(defun indent (&rest string)
  (with-output-to-string (*standard-output*)
    (with-input-from-string (input (join string))
      (loop
         for line = (read-line input nil)
         while line
         do (write-string "    ")
         do (write-line line)))))


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


;;; Wrap X with a Javascript code to convert the result from
;;; Javascript generalized booleans to T or NIL.
(defun js!bool (x)
  (concat "(" x "?" (ls-compile t) ": " (ls-compile nil) ")"))

;;; Concatenate the arguments and wrap them with a self-calling
;;; Javascript anonymous function. It is used to make some Javascript
;;; statements valid expressions and provide a private scope as well.
;;; It could be defined as function, but we could do some
;;; preprocessing in the future.
(defmacro js!selfcall (&body body)
  `(concat "(function(){" *newline* (indent ,@body) "})()"))


;;; Printer

#+ecmalisp
(progn
  (defun prin1-to-string (form)
    (cond
      ((symbolp form)
       (if (cdr (%find-symbol (symbol-name form) *package*))
           (symbol-name form)
           (let ((package (symbol-package form))
                 (name (symbol-name form)))
             (concat (if (eq package (find-package "KEYWORD"))
                         ""
                         (package-name package))
                     ":" name))))
      ((integerp form) (integer-to-string form))
      ((stringp form) (concat "\"" (escape-string form) "\""))
      ((functionp form)
       (let ((name (oget form "fname")))
         (if name
             (concat "#<FUNCTION " name ">")
             (concat "#<FUNCTION>"))))
      ((listp form)
       (concat "("
               (join-trailing (mapcar #'prin1-to-string (butlast form)) " ")
               (let ((last (last form)))
                 (if (null (cdr last))
                     (prin1-to-string (car last))
                     (concat (prin1-to-string (car last)) " . " (prin1-to-string (cdr last)))))
               ")"))
      ((packagep form)
       (concat "#<PACKAGE " (package-name form) ">"))))

  (defun write-line (x)
    (write-string x)
    (write-string *newline*)
    x)

  (defun warn (string)
    (write-string "WARNING: ")
    (write-line string))

  (defun print (x)
    (write-line (prin1-to-string x))
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

;;; Parse a string of the form NAME, PACKAGE:NAME or
;;; PACKAGE::NAME and return the name. If the string is of the
;;; form 1) or 3), but the symbol does not exist, it will be created
;;; and interned in that package.
(defun read-symbol (string)
  (let ((size (length string))
        package name internalp index)
    (setq index 0)
    (while (and (< index size)
                (not (char= (char string index) #\:)))
      (incf index))
    (cond
      ;; No package prefix
      ((= index size)
       (setq name string)
       (setq package *package*)
       (setq internalp t))
      (t
       ;; Package prefix
       (if (zerop index)
           (setq package "KEYWORD")
           (setq package (string-upcase (subseq string 0 index))))
       (incf index)
       (when (char= (char string index) #\:)
         (setq internalp t)
         (incf index))
       (setq name (subseq string index))))
    ;; Canonalize symbol name and package
    (setq name (string-upcase name))
    (setq package (find-package package))
    ;; TODO: PACKAGE:SYMBOL should signal error if SYMBOL is not an
    ;; external symbol from PACKAGE.
    (if (or internalp (eq package (find-package "KEYWORD")))
        (intern name package)
        (find-symbol name package))))

(defvar *eof* (gensym))
(defun ls-read (stream)
  (skip-whitespaces-and-comments stream)
  (let ((ch (%peek-char stream)))
    (cond
      ((or (null ch) (char= ch #\)))
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
             (read-symbol string)))))))

(defun ls-read-from-string (string)
  (ls-read (make-string-stream string)))


;;;; Compiler

;;; Translate the Lisp code to Javascript. It will compile the special
;;; forms. Some primitive functions are compiled as special forms
;;; too. The respective real functions are defined in the target (see
;;; the beginning of this file) as well as some primitive functions.

(defvar *compilation-unit-checks* '())

(defun make-binding (name type value &optional declarations)
  (list name type value declarations))

(defun binding-name (b) (first b))
(defun binding-type (b) (second b))
(defun binding-value (b) (third b))
(defun binding-declarations (b) (fourth b))

(defun set-binding-value (b value)
  (setcar (cddr b) value))

(defun set-binding-declarations (b value)
  (setcar (cdddr b) value))

(defun push-binding-declaration (decl b)
  (set-binding-declarations b (cons decl (binding-declarations b))))


(defun make-lexenv ()
  (list nil nil nil nil))

(defun copy-lexenv (lexenv)
  (copy-list lexenv))

(defun push-to-lexenv (binding lexenv namespace)
  (ecase namespace
    (variable   (setcar        lexenv  (cons binding (car lexenv))))
    (function   (setcar   (cdr lexenv) (cons binding (cadr lexenv))))
    (block      (setcar  (cddr lexenv) (cons binding (caddr lexenv))))
    (gotag      (setcar (cdddr lexenv) (cons binding (cadddr lexenv))))))

(defun extend-lexenv (bindings lexenv namespace)
  (let ((env (copy-lexenv lexenv)))
    (dolist (binding (reverse bindings) env)
      (push-to-lexenv binding env namespace))))

(defun lookup-in-lexenv (name lexenv namespace)
  (assoc name (ecase namespace
                (variable (first lexenv))
                (function (second lexenv))
                (block (third lexenv))
                (gotag (fourth lexenv)))))

(defvar *environment* (make-lexenv))

(defvar *variable-counter* 0)
(defun gvarname (symbol)
  (concat "v" (integer-to-string (incf *variable-counter*))))

(defun translate-variable (symbol)
  (binding-value (lookup-in-lexenv symbol *environment* 'variable)))

(defun extend-local-env (args)
  (let ((new (copy-lexenv *environment*)))
    (dolist (symbol args new)
      (let ((b (make-binding symbol 'lexical-variable (gvarname symbol))))
        (push-to-lexenv b new 'variable)))))

;;; Toplevel compilations
(defvar *toplevel-compilations* nil)

(defun toplevel-compilation (string)
  (push string *toplevel-compilations*))

(defun null-or-empty-p (x)
  (zerop (length x)))

(defun get-toplevel-compilations ()
  (reverse (remove-if #'null-or-empty-p *toplevel-compilations*)))

(defun %compile-defmacro (name lambda)
  (toplevel-compilation (ls-compile `',name))
  (push-to-lexenv (make-binding name 'macro lambda) *environment* 'function))

(defun global-binding (name type namespace)
  (or (lookup-in-lexenv name *environment* namespace)
      (let ((b (make-binding name type nil)))
        (push-to-lexenv b *environment* namespace)
        b)))

(defun claimp (symbol namespace claim)
  (let ((b (lookup-in-lexenv symbol *environment* namespace)))
    (and b (member claim (binding-declarations b)))))

(defun !proclaim (decl)
  (case (car decl)
    (special
     (dolist (name (cdr decl))
       (let ((b (global-binding name 'variable 'variable)))
         (push-binding-declaration 'special b))))
    (notinline
     (dolist (name (cdr decl))
       (let ((b (global-binding name 'function 'function)))
         (push-binding-declaration 'notinline b))))
    (constant
     (dolist (name (cdr decl))
       (let ((b (global-binding name 'variable 'variable)))
         (push-binding-declaration 'constant b))))
    (non-overridable
     (dolist (name (cdr decl))
       (let ((b (global-binding name 'function 'function)))
         (push-binding-declaration 'non-overridable b))))))

#+ecmalisp
(fset 'proclaim #'!proclaim)

;;; Special forms

(defvar *compilations* nil)

(defmacro define-compilation (name args &body body)
  ;; Creates a new primitive `name' with parameters args and
  ;; @body. The body can access to the local environment through the
  ;; variable *ENVIRONMENT*.
  `(push (list ',name (lambda ,args (block ,name ,@body)))
         *compilations*))

(define-compilation if (condition true false)
  (concat "(" (ls-compile condition) " !== " (ls-compile nil)
          " ? " (ls-compile true)
          " : " (ls-compile false)
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


(defun lambda-docstring-wrapper (docstring &rest strs)
  (if docstring
      (js!selfcall
        "var func = " (join strs) ";" *newline*
        "func.docstring = '" docstring "';" *newline*
        "return func;" *newline*)
      (join strs)))

(define-compilation lambda (lambda-list &rest body)
  (let ((required-arguments (lambda-list-required-arguments lambda-list))
        (optional-arguments (lambda-list-optional-arguments lambda-list))
        (rest-argument (lambda-list-rest-argument lambda-list))
        documentation)
    ;; Get the documentation string for the lambda function
    (when (and (stringp (car body))
               (not (null (cdr body))))
      (setq documentation (car body))
      (setq body (cdr body)))
    (let ((n-required-arguments (length required-arguments))
          (n-optional-arguments (length optional-arguments))
          (*environment* (extend-local-env
                          (append (ensure-list rest-argument)
                                  required-arguments
                                  optional-arguments))))
      (lambda-docstring-wrapper
       documentation
       "(function ("
       (join (mapcar #'translate-variable
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
                                          (translate-variable (car arg))
                                          "="
                                          (ls-compile (cadr arg))
                                          ";" *newline*)
                                  cases)
                            (incf idx)))
                        (push (concat "default: break;" *newline*) cases)
                        (join (reverse cases))))
                    "}" *newline*)
            "")
        ;; &rest/&body argument
        (if rest-argument
            (let ((js!rest (translate-variable rest-argument)))
              (concat "var " js!rest "= " (ls-compile nil) ";" *newline*
                      "for (var i = arguments.length-1; i>="
                      (integer-to-string (+ n-required-arguments n-optional-arguments))
                      "; i--)" *newline*
                      (indent js!rest " = "
                              "{car: arguments[i], cdr: ") js!rest "};"
                      *newline*))
            "")
        ;; Body
        (ls-compile-block body t)) *newline*
       "})"))))

(define-compilation setq (var val)
  (let ((b (lookup-in-lexenv var *environment* 'variable)))
    (if (eq (binding-type b) 'lexical-variable)
        (concat (binding-value b) " = " (ls-compile val))
        (ls-compile `(set ',var ,val)))))

;;; FFI Variable accessors
(define-compilation js-vref (var)
  var)

(define-compilation js-vset (var val)
  (concat "(" var " = " (ls-compile val) ")"))


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


(defvar *literal-symbols* nil)
(defvar *literal-counter* 0)

(defun genlit ()
  (concat "l" (integer-to-string (incf *literal-counter*))))

(defun literal (sexp &optional recursive)
  (cond
    ((integerp sexp) (integer-to-string sexp))
    ((stringp sexp) (concat "\"" (escape-string sexp) "\""))
    ((symbolp sexp)
     (or (cdr (assoc sexp *literal-symbols*))
	 (let ((v (genlit))
	       (s #+common-lisp (concat "{name: \"" (escape-string (symbol-name sexp)) "\"}")
		  #+ecmalisp (ls-compile
                              `(intern ,(symbol-name sexp)
                                       ,(package-name (symbol-package sexp))))))
	   (push (cons sexp v) *literal-symbols*)
	   (toplevel-compilation (concat "var " v " = " s))
	   v)))
    ((consp sexp)
     (let ((c (concat "{car: " (literal (car sexp) t) ", "
		      "cdr: " (literal (cdr sexp) t) "}")))
       (if recursive
	   c
	   (let ((v (genlit)))
	     (toplevel-compilation (concat "var " v " = " c))
	     v))))))

(define-compilation quote (sexp)
  (literal sexp))

(define-compilation %while (pred &rest body)
  (js!selfcall
    "while(" (ls-compile pred) " !== " (ls-compile nil) "){" *newline*
    (indent (ls-compile-block body))
    "}"
    "return " (ls-compile nil) ";" *newline*))

(define-compilation function (x)
  (cond
    ((and (listp x) (eq (car x) 'lambda))
     (ls-compile x))
    ((symbolp x)
     (ls-compile `(symbol-function ',x)))))

(define-compilation eval-when-compile (&rest body)
  (eval (cons 'progn body))
  nil)

(defmacro define-transformation (name args form)
  `(define-compilation ,name ,args
     (ls-compile ,form)))

(define-compilation progn (&rest body)
  (js!selfcall (ls-compile-block body t)))

(defun special-variable-p (x)
  (claimp x 'variable 'special))

;;; Wrap CODE to restore the symbol values of the dynamic
;;; bindings. BINDINGS is a list of pairs of the form
;;; (SYMBOL . PLACE),  where PLACE is a Javascript variable
;;; name to initialize the symbol value and where to stored
;;; the old value.
(defun let-binding-wrapper (bindings body)
  (when (null bindings)
    (return-from let-binding-wrapper body))
  (concat
   "try {" *newline*
   (indent "var tmp;" *newline*
           (mapconcat
            (lambda (b)
              (let ((s (ls-compile `(quote ,(car b)))))
                (concat "tmp = " s ".value;" *newline*
                        s ".value = " (cdr b) ";" *newline*
                        (cdr b) " = tmp;" *newline*)))
            bindings)
           body *newline*)
   "}" *newline*
   "finally {"  *newline*
   (indent
    (mapconcat (lambda (b)
                 (let ((s (ls-compile `(quote ,(car b)))))
                   (concat s ".value" " = " (cdr b) ";" *newline*)))
               bindings))
   "}" *newline*))

(define-compilation let (bindings &rest body)
  (let ((bindings (mapcar #'ensure-list bindings)))
    (let ((variables (mapcar #'first bindings)))
      (let ((cvalues (mapcar #'ls-compile (mapcar #'second bindings)))
            (*environment* (extend-local-env (remove-if #'special-variable-p variables)))
            (dynamic-bindings))
        (concat "(function("
                (join (mapcar (lambda (x)
                                (if (special-variable-p x)
                                    (let ((v (gvarname x)))
                                      (push (cons x v) dynamic-bindings)
                                      v)
                                    (translate-variable x)))
                              variables)
                      ",")
                "){" *newline*
                (let ((body (ls-compile-block body t)))
                  (indent (let-binding-wrapper dynamic-bindings body)))
                "})(" (join cvalues ",") ")")))))


;;; Return the code to initialize BINDING, and push it extending the
;;; current lexical environment if the variable is special.
(defun let*-initialize-value (binding)
  (let ((var (first binding))
        (value (second binding)))
    (if (special-variable-p var)
        (concat (ls-compile `(setq ,var ,value)) ";" *newline*)
        (let ((v (gvarname var)))
          (let ((b (make-binding var 'variable v)))
            (prog1 (concat "var " v " = " (ls-compile value) ";" *newline*)
              (push-to-lexenv b *environment* 'variable)))))))

;;; Wrap BODY to restore the symbol values of SYMBOLS after body. It
;;; DOES NOT generate code to initialize the value of the symbols,
;;; unlike let-binding-wrapper.
(defun let*-binding-wrapper (symbols body)
  (when (null symbols)
    (return-from let*-binding-wrapper body))
  (let ((store (mapcar (lambda (s) (cons s (gvarname s)))
                       (remove-if-not #'special-variable-p symbols))))
    (concat
     "try {" *newline*
     (indent
      (mapconcat (lambda (b)
                   (let ((s (ls-compile `(quote ,(car b)))))
                     (concat "var " (cdr b) " = " s ".value;" *newline*)))
                 store)
      body)
     "}" *newline*
     "finally {" *newline*
     (indent
      (mapconcat (lambda (b)
                   (let ((s (ls-compile `(quote ,(car b)))))
                     (concat s ".value" " = " (cdr b) ";" *newline*)))
                 store))
     "}" *newline*)))


(define-compilation let* (bindings &rest body)
  (let ((bindings (mapcar #'ensure-list bindings))
        (*environment* (copy-lexenv *environment*)))
    (js!selfcall
      (let ((specials (remove-if-not #'special-variable-p (mapcar #'first bindings)))
            (body (concat (mapconcat #'let*-initialize-value bindings)
                          (ls-compile-block body t))))
        (let*-binding-wrapper specials body)))))


(defvar *block-counter* 0)

(define-compilation block (name &rest body)
  (let ((tr (integer-to-string (incf *block-counter*))))
    (let ((b (make-binding name 'block tr)))
      (js!selfcall
        "try {" *newline*
        (let ((*environment* (extend-lexenv (list b) *environment* 'block)))
          (indent "return " (ls-compile `(progn ,@body)) ";" *newline*))
        "}" *newline*
        "catch (cf){" *newline*
        "    if (cf.type == 'block' && cf.id == " tr ")" *newline*
        "        return cf.value;" *newline*
        "    else" *newline*
        "        throw cf;" *newline*
        "}" *newline*))))

(define-compilation return-from (name &optional value)
  (let ((b (lookup-in-lexenv name *environment* 'block)))
    (if b
        (js!selfcall
          "throw ({"
          "type: 'block', "
          "id: " (binding-value b) ", "
          "value: " (ls-compile value) ", "
          "message: 'Return from unknown block " (symbol-name name) ".'"
          "})")
        (error (concat "Unknown block `" (symbol-name name) "'.")))))


(define-compilation catch (id &rest body)
  (js!selfcall
    "var id = " (ls-compile id) ";" *newline*
    "try {" *newline*
    (indent "return " (ls-compile `(progn ,@body))
            ";" *newline*)
    "}" *newline*
    "catch (cf){" *newline*
    "    if (cf.type == 'catch' && cf.id == id)" *newline*
    "        return cf.value;" *newline*
    "    else" *newline*
    "        throw cf;" *newline*
    "}" *newline*))

(define-compilation throw (id value)
  (js!selfcall
    "throw ({"
    "type: 'catch', "
    "id: " (ls-compile id) ", "
    "value: " (ls-compile value) ", "
    "message: 'Throw uncatched.'"
    "})"))


(defvar *tagbody-counter* 0)
(defvar *go-tag-counter* 0)

(defun go-tag-p (x)
  (or (integerp x) (symbolp x)))

(defun declare-tagbody-tags (tbidx body)
  (let ((bindings
         (mapcar (lambda (label)
                   (let ((tagidx (integer-to-string (incf *go-tag-counter*))))
                     (make-binding label 'gotag (list tbidx tagidx))))
                 (remove-if-not #'go-tag-p body))))
    (extend-lexenv bindings *environment* 'gotag)))

(define-compilation tagbody (&rest body)
  ;; Ignore the tagbody if it does not contain any go-tag. We do this
  ;; because 1) it is easy and 2) many built-in forms expand to a
  ;; implicit tagbody, so we save some space.
  (unless (some #'go-tag-p body)
    (return-from tagbody (ls-compile `(progn ,@body nil))))
  ;; The translation assumes the first form in BODY is a label
  (unless (go-tag-p (car body))
    (push (gensym "START") body))
  ;; Tagbody compilation
  (let ((tbidx (integer-to-string *tagbody-counter*)))
    (let ((*environment* (declare-tagbody-tags tbidx body))
          initag)
      (let ((b (lookup-in-lexenv (first body) *environment* 'gotag)))
        (setq initag (second (binding-value b))))
      (js!selfcall
        "var tagbody_" tbidx " = " initag ";" *newline*
        "tbloop:" *newline*
        "while (true) {" *newline*
        (indent "try {" *newline*
                (indent (let ((content ""))
                          (concat "switch(tagbody_" tbidx "){" *newline*
                                  "case " initag ":" *newline*
                                  (dolist (form (cdr body) content)
                                    (concatf content
                                      (if (not (go-tag-p form))
                                          (indent (ls-compile form) ";" *newline*)
                                          (let ((b (lookup-in-lexenv form *environment* 'gotag)))
                                            (concat "case " (second (binding-value b)) ":" *newline*)))))
                                  "default:" *newline*
                                  "    break tbloop;" *newline*
                                  "}" *newline*)))
                "}" *newline*
                "catch (jump) {" *newline*
                "    if (jump.type == 'tagbody' && jump.id == " tbidx ")" *newline*
                "        tagbody_" tbidx " = jump.label;" *newline*
                "    else" *newline*
                "        throw(jump);" *newline*
                "}" *newline*)
        "}" *newline*
        "return " (ls-compile nil) ";" *newline*))))

(define-compilation go (label)
  (let ((b (lookup-in-lexenv label *environment* 'gotag))
        (n (cond
             ((symbolp label) (symbol-name label))
             ((integerp label) (integer-to-string label)))))
    (if b
        (js!selfcall
          "throw ({"
          "type: 'tagbody', "
          "id: " (first (binding-value b)) ", "
          "label: " (second (binding-value b)) ", "
          "message: 'Attempt to GO to non-existing tag " n "'"
          "})" *newline*)
        (error (concat "Unknown tag `" n "'.")))))


(define-compilation unwind-protect (form &rest clean-up)
  (js!selfcall
    "var ret = " (ls-compile nil) ";" *newline*
    "try {" *newline*
    (indent "ret = " (ls-compile form) ";" *newline*)
    "} finally {" *newline*
    (indent (ls-compile-block clean-up))
    "}" *newline*
    "return ret;" *newline*))


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

(defvar *builtins* nil)

(defmacro define-raw-builtin (name args &body body)
  ;; Creates a new primitive function `name' with parameters args and
  ;; @body. The body can access to the local environment through the
  ;; variable *ENVIRONMENT*.
  `(push (list ',name (lambda ,args (block ,name ,@body)))
         *builtins*))

(defmacro define-builtin (name args &body body)
  `(progn
     (define-raw-builtin ,name ,args
       (let ,(mapcar (lambda (arg) `(,arg (ls-compile ,arg))) args)
         ,@body))))

;;; DECLS is a list of (JSVARNAME TYPE LISPFORM) declarations.
(defmacro type-check (decls &body body)
  `(js!selfcall
     ,@(mapcar (lambda (decl)
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
     (concat "return " (progn ,@body) ";" *newline*)))

;;; VARIABLE-ARITY compiles variable arity operations. ARGS stands for
;;; a variable which holds a list of forms. It will compile them and
;;; store the result in some Javascript variables. BODY is evaluated
;;; with ARGS bound to the list of these variables to generate the
;;; code which performs the transformation on these variables.

(defun variable-arity-call (args function)
  (unless (consp args)
    (error "ARGS must be a non-empty list"))
  (let ((counter 0)
        (variables '())
        (prelude ""))
    (dolist (x args)
      (let ((v (concat "x" (integer-to-string (incf counter)))))
        (push v variables)
        (concatf prelude
                 (concat "var " v " = " (ls-compile x) ";" *newline*
                         "if (typeof " v " !== 'number') throw 'Not a number!';"
                         *newline*))))
    (js!selfcall prelude (funcall function (reverse variables)))))


(defmacro variable-arity (args &body body)
  (unless (symbolp args)
    (error "Bad usage of VARIABLE-ARITY, you must pass a symbol"))
  `(variable-arity-call ,args
                        (lambda (,args)
                          (concat "return " ,@body ";" *newline*))))

(defun num-op-num (x op y)
  (type-check (("x" "number" x) ("y" "number" y))
    (concat "x" op "y")))

(define-raw-builtin + (&rest numbers)
  (if (null numbers)
      "0"
      (variable-arity numbers
	(join numbers "+"))))

(define-raw-builtin - (x &rest others)
  (let ((args (cons x others)))
    (variable-arity args
      (if (null others)
	  (concat "-" (car args))
	  (join args "-")))))

(define-raw-builtin * (&rest numbers)
  (if (null numbers)
      "1"
      (variable-arity numbers
	(join numbers "*"))))

(define-raw-builtin / (x &rest others)
  (let ((args (cons x others)))
    (variable-arity args
      (if (null others)
	  (concat "/" (car args))
	  (join args "/")))))

(define-builtin mod (x y) (num-op-num x "%" y))

(defmacro define-builtin-comparison (op sym)
  `(define-raw-builtin ,op (&rest args)
     (js!bool
      (let ((x (car args))
	    (res "true"))
	(dolist (y (cdr args))
	  (setq res (concat "("
		     (ls-compile x) " " ,sym " " (ls-compile y) ")" " && " res))
	  (setq x y))
	res))))

(define-builtin-comparison > ">")
(define-builtin-comparison < "<")
(define-builtin-comparison >= ">=")
(define-builtin-comparison <= "<=")
(define-builtin-comparison = "==")

(define-builtin numberp (x)
  (js!bool (concat "(typeof (" x ") == \"number\")")))

(define-builtin floor (x)
  (type-check (("x" "number" x))
    "Math.floor(x)"))

(define-builtin cons (x y)
  (concat "({car: " x ", cdr: " y "})"))

(define-builtin consp (x)
  (js!bool
   (js!selfcall
     "var tmp = " x ";" *newline*
     "return (typeof tmp == 'object' && 'car' in tmp);" *newline*)))

(define-builtin car (x)
  (js!selfcall
    "var tmp = " x ";" *newline*
    "return tmp === " (ls-compile nil)
    "? " (ls-compile nil)
    ": tmp.car;" *newline*))

(define-builtin cdr (x)
  (js!selfcall
    "var tmp = " x ";" *newline*
    "return tmp === " (ls-compile nil) "? "
    (ls-compile nil)
    ": tmp.cdr;" *newline*))

(define-builtin setcar (x new)
  (type-check (("x" "object" x))
    (concat "(x.car = " new ")")))

(define-builtin setcdr (x new)
  (type-check (("x" "object" x))
    (concat "(x.cdr = " new ")")))

(define-builtin symbolp (x)
  (js!bool
   (js!selfcall
     "var tmp = " x ";" *newline*
     "return (typeof tmp == 'object' && 'name' in tmp);" *newline*)))

(define-builtin make-symbol (name)
  (type-check (("name" "string" name))
    "({name: name})"))

(define-builtin symbol-name (x)
  (concat "(" x ").name"))

(define-builtin set (symbol value)
  (concat "(" symbol ").value = " value))

(define-builtin fset (symbol value)
  (concat "(" symbol ").function = " value))

(define-builtin boundp (x)
  (js!bool (concat "(" x ".value !== undefined)")))

(define-builtin symbol-value (x)
  (js!selfcall
    "var symbol = " x ";" *newline*
    "var value = symbol.value;" *newline*
    "if (value === undefined) throw \"Variable `\" + symbol.name + \"' is unbound.\";" *newline*
    "return value;" *newline*))

(define-builtin symbol-function (x)
  (js!selfcall
    "var symbol = " x ";" *newline*
    "var func = symbol.function;" *newline*
    "if (func === undefined) throw \"Function `\" + symbol.name + \"' is undefined.\";" *newline*
    "return func;" *newline*))

(define-builtin symbol-plist (x)
  (concat "((" x ").plist || " (ls-compile nil) ")"))

(define-builtin lambda-code (x)
  (concat "(" x ").toString()"))

(define-builtin eq    (x y) (js!bool (concat "(" x " === " y ")")))
(define-builtin equal (x y) (js!bool (concat "(" x  " == " y ")")))

(define-builtin char-to-string (x)
  (type-check (("x" "number" x))
    "String.fromCharCode(x)"))

(define-builtin stringp (x)
  (js!bool (concat "(typeof(" x ") == \"string\")")))

(define-builtin string-upcase (x)
  (type-check (("x" "string" x))
    "x.toUpperCase()"))

(define-builtin string-length (x)
  (type-check (("x" "string" x))
    "x.length"))

(define-raw-builtin slice (string a &optional b)
  (js!selfcall
    "var str = " (ls-compile string) ";" *newline*
    "var a = " (ls-compile a) ";" *newline*
    "var b;" *newline*
    (if b
        (concat "b = " (ls-compile b) ";" *newline*)
        "")
    "return str.slice(a,b);" *newline*))

(define-builtin char (string index)
  (type-check (("string" "string" string)
               ("index" "number" index))
    "string.charCodeAt(index)"))

(define-builtin concat-two (string1 string2)
  (type-check (("string1" "string" string1)
               ("string2" "string" string2))
    "string1.concat(string2)"))

(define-raw-builtin funcall (func &rest args)
  (concat "(" (ls-compile func) ")("
          (join (mapcar #'ls-compile args)
                ", ")
          ")"))

(define-raw-builtin apply (func &rest args)
  (if (null args)
      (concat "(" (ls-compile func) ")()")
      (let ((args (butlast args))
            (last (car (last args))))
        (js!selfcall
          "var f = " (ls-compile func) ";" *newline*
          "var args = [" (join (mapcar #'ls-compile args)
                               ", ")
          "];" *newline*
          "var tail = (" (ls-compile last) ");" *newline*
          "while (tail != " (ls-compile nil) "){" *newline*
          "    args.push(tail.car);" *newline*
          "    tail = tail.cdr;" *newline*
          "}" *newline*
          "return f.apply(this, args);" *newline*))))

(define-builtin js-eval (string)
  (type-check (("string" "string" string))
    "eval.apply(window, [string])"))

(define-builtin error (string)
  (js!selfcall "throw " string ";" *newline*))

(define-builtin new () "{}")

(define-builtin objectp (x)
  (js!bool (concat "(typeof (" x ") === 'object')")))

(define-builtin oget (object key)
  (js!selfcall
    "var tmp = " "(" object ")[" key "];" *newline*
    "return tmp == undefined? " (ls-compile nil) ": tmp ;" *newline*))

(define-builtin oset (object key value)
  (concat "((" object ")[" key "] = " value ")"))

(define-builtin in (key object)
  (js!bool (concat "((" key ") in (" object "))")))

(define-builtin functionp (x)
  (js!bool (concat "(typeof " x " == 'function')")))

(define-builtin write-string (x)
  (type-check (("x" "string" x))
    "lisp.write(x)"))

(defun macro (x)
  (and (symbolp x)
       (let ((b (lookup-in-lexenv x *environment* 'function)))
         (and (eq (binding-type b) 'macro)
              b))))

(defun ls-macroexpand-1 (form)
  (let ((macro-binding (macro (car form))))
    (if macro-binding
        (let ((expander (binding-value macro-binding)))
          (when (listp expander)
            (let ((compiled (eval expander)))
              ;; The list representation are useful while
              ;; bootstrapping, as we can dump the definition of the
              ;; macros easily, but they are slow because we have to
              ;; evaluate them and compile them now and again. So, let
              ;; us replace the list representation version of the
              ;; function with the compiled one.
              ;;
              #+ecmalisp (set-binding-value macro-binding compiled)
              (setq expander compiled)))
          (apply expander (cdr form)))
        form)))

(defun compile-funcall (function args)
  (if (and (symbolp function)
           (claimp function 'function 'non-overridable))
      (concat (ls-compile `',function) ".function("
              (join (mapcar #'ls-compile args)
                    ", ")
              ")")
      (concat (ls-compile `#',function) "("
              (join (mapcar #'ls-compile args)
                    ", ")
              ")")))

(defun ls-compile-block (sexps &optional return-last-p)
  (if return-last-p
      (concat (ls-compile-block (butlast sexps))
              "return " (ls-compile (car (last sexps))) ";")
      (join-trailing
       (remove-if #'null-or-empty-p (mapcar #'ls-compile sexps))
       (concat ";" *newline*))))

(defun ls-compile (sexp)
  (cond
    ((symbolp sexp)
     (let ((b (lookup-in-lexenv sexp *environment* 'variable)))
       (cond
         ((and b (not (member 'special (binding-declarations b))))
          (binding-value b))
         ((or (keywordp sexp)
              (member 'constant (binding-declarations b)))
          (concat (ls-compile `',sexp) ".value"))
         (t
          (ls-compile `(symbol-value ',sexp))))))
    ((integerp sexp) (integer-to-string sexp))
    ((stringp sexp) (concat "\"" (escape-string sexp) "\""))
    ((listp sexp)
     (let ((name (car sexp))
           (args (cdr sexp)))
       (cond
         ;; Special forms
         ((assoc name *compilations*)
          (let ((comp (second (assoc name *compilations*))))
            (apply comp args)))
         ;; Built-in functions
         ((and (assoc name *builtins*)
               (not (claimp name 'function 'notinline)))
          (let ((comp (second (assoc name *builtins*))))
            (apply comp args)))
         (t
          (if (macro name)
              (ls-compile (ls-macroexpand-1 sexp))
              (compile-funcall name args))))))))

(defun ls-compile-toplevel (sexp)
  (let ((*toplevel-compilations* nil))
    (cond
      ((and (consp sexp) (eq (car sexp) 'progn))
       (let ((subs (mapcar #'ls-compile-toplevel (cdr sexp))))
         (join (remove-if #'null-or-empty-p subs))))
      (t
       (let ((code (ls-compile sexp)))
         (concat (join-trailing (get-toplevel-compilations)
                                (concat ";" *newline*))
                 (if code
                     (concat code ";" *newline*)
                     "")))))))


;;; Once we have the compiler, we define the runtime environment and
;;; interactive development (eval), which works calling the compiler
;;; and evaluating the Javascript result globally.

#+ecmalisp
(progn
  (defmacro with-compilation-unit (&body body)
    `(prog1
         (progn
           (setq *compilation-unit-checks* nil)
           ,@body)
       (dolist (check *compilation-unit-checks*)
         (funcall check))))

  (defun eval (x)
    (let ((code
           (with-compilation-unit
               (ls-compile-toplevel x))))
      (js-eval code)))

  (export '(&rest &optional &body * *gensym-counter* *package* + - / 1+ 1- < <= =
= > >= and append apply assoc atom block boundp boundp butlast caar
cadddr caddr cadr car car case catch cdar cdddr cddr cdr cdr char
char-code char= code-char cond cons consp copy-list decf declaim
defparameter defun defvar digit-char-p disassemble documentation
dolist dotimes ecase eq eql equal error eval every export fdefinition
find-package find-symbol first fourth fset funcall function functionp
gensym go identity if in-package incf integerp integerp intern
keywordp lambda last length let let* list-all-packages list listp
make-package make-symbol mapcar member minusp mod nil not nth nthcdr
null numberp or package-name package-use-list packagep plusp
prin1-to-string print proclaim prog1 prog2 pron push quote remove
remove-if remove-if-not return return-from revappend reverse second
set setq some string-upcase string string= stringp subseq
symbol-function symbol-name symbol-package symbol-plist symbol-value
symbolp t tagbody third throw truncate unless unwind-protect variable
warn when write-line write-string zerop))

  (setq *package* *user-package*)

  (js-eval "var lisp")
  (js-vset "lisp" (new))
  (js-vset "lisp.read" #'ls-read-from-string)
  (js-vset "lisp.print" #'prin1-to-string)
  (js-vset "lisp.eval" #'eval)
  (js-vset "lisp.compile" #'ls-compile-toplevel)
  (js-vset "lisp.evalString" (lambda (str) (eval (ls-read-from-string str))))
  (js-vset "lisp.compileString" (lambda (str) (ls-compile-toplevel (ls-read-from-string str))))

  ;; Set the initial global environment to be equal to the host global
  ;; environment at this point of the compilation.
  (eval-when-compile
    (toplevel-compilation
     (ls-compile
      `(progn
         ,@(mapcar (lambda (s) `(%intern-symbol (js-vref ,(cdr s))))
                   *literal-symbols*)
         (setq *literal-symbols* ',*literal-symbols*)
         (setq *environment* ',*environment*)
         (setq *variable-counter* ,*variable-counter*)
         (setq *gensym-counter* ,*gensym-counter*)
         (setq *block-counter* ,*block-counter*)))))

  (eval-when-compile
    (toplevel-compilation
     (ls-compile
      `(setq *literal-counter* ,*literal-counter*)))))


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
           do (write-string compilation out))
        (dolist (check *compilation-unit-checks*)
          (funcall check))
        (setq *compilation-unit-checks* nil))))

  (defun bootstrap ()
    (setq *environment* (make-lexenv))
    (setq *literal-symbols* nil)
    (setq *variable-counter* 0
          *gensym-counter* 0
          *literal-counter* 0
          *block-counter* 0)
    (ls-compile-file "ecmalisp.lisp" "ecmalisp.js")))
