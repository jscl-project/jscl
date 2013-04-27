;;; boot.lisp --- First forms to be cross compiled

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

;;; This code is executed when JSCL compiles this file itself. The
;;; compiler provides compilation of some special forms, as well as
;;; funcalls and macroexpansion, but no functions. So, we define the
;;; Lisp world from scratch. This code has to define enough language
;;; to the compiler to be able to run.

(eval-when-compile
  (%compile-defmacro 'defmacro
                     '(function
                       (lambda (name args &rest body)
                        `(eval-when-compile
                           (%compile-defmacro ',name
                                              '(function
                                                (lambda ,(mapcar #'(lambda (x)
                                                                     (if (eq x '&body)
                                                                         '&rest
                                                                         x))
                                                                 args)
                                                 ,@body))))))))

(defmacro declaim (&rest decls)
  `(eval-when-compile
     ,@(mapcar (lambda (decl) `(!proclaim ',decl)) decls)))

(defmacro defconstant (name value &optional docstring)
  `(progn
     (declaim (special ,name))
     (declaim (constant ,name))
     (setq ,name ,value)
     ,@(when (stringp docstring) `((oset ',name "vardoc" ,docstring)))
     ',name))

(defconstant t 't)
(defconstant nil 'nil)
(%js-vset "nil" nil)

(defmacro lambda (args &body body)
  `(function (lambda ,args ,@body)))

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
     
     (fset ',name
           (named-lambda ,(symbol-name name) ,args
             ,@(if (and (stringp (car body)) (not (null (cdr body))))
                   `(,(car body) (block ,name ,@(cdr body)))
                   `((block ,name ,@body)))))
     ',name))

(defun null (x)
  (eq x nil))

(defun endp (x)
  (if (null x)
      t
      (if (consp x)
          nil
          (error "type-error"))))

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

(defun truncate (x &optional (y 1))
  (floor (/ x y)))

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
(defun cadar (x) (car (cdr (car x))))
(defun caddr (x) (car (cdr (cdr x))))
(defun cdddr (x) (cdr (cdr (cdr x))))
(defun cadddr (x) (car (cdr (cdr (cdr x)))))
(defun first (x) (car x))
(defun second (x) (cadr x))
(defun third (x) (caddr x))
(defun fourth (x) (cadddr x))
(defun rest (x) (cdr x))

(defun list (&rest args) args)
(defun atom (x)
  (not (consp x)))

;; Basic macros

(defmacro incf (place &optional (delta 1))
  (multiple-value-bind (dummies vals newval setter getter)
      (get-setf-expansion place)
    (let ((d (gensym)))
      `(let* (,@(mapcar #'list dummies vals)
              (,d ,delta)
                (,(car newval) (+ ,getter ,d))
                ,@(cdr newval))
         ,setter))))

(defmacro decf (place &optional (delta 1))
  (multiple-value-bind (dummies vals newval setter getter)
      (get-setf-expansion place)
    (let ((d (gensym)))
      `(let* (,@(mapcar #'list dummies vals)
              (,d ,delta)
              (,(car newval) (- ,getter ,d))
              ,@(cdr newval))
         ,setter))))

(defmacro push (x place)
  (multiple-value-bind (dummies vals newval setter getter)
      (get-setf-expansion place)
    (let ((g (gensym)))
      `(let* ((,g ,x)
              ,@(mapcar #'list dummies vals)
              (,(car newval) (cons ,g ,getter))
              ,@(cdr newval))
         ,setter))))

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
      (let ((test-symbol (gensym)))
        `(let ((,test-symbol ,(caar clausules)))
           (if ,test-symbol
             ,(if (null (cdar clausules))
                test-symbol
                `(progn ,@(cdar clausules)))
             (cond ,@(cdr clausules))))))))

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
  `(prog1 (progn ,form1 ,result) ,@body))



;;; Go on growing the Lisp language in Ecmalisp, with more high level
;;; utilities as well as correct versions of other constructions.

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
  (!reduce #'append-two lists))

(defun revappend (list1 list2)
  (while list1
    (push (car list1) list2)
    (setq list1 (cdr list1)))
  list2)

(defun reverse (list)
  (revappend list '()))

(defmacro psetq (&rest pairs)
  (let (;; For each pair, we store here a list of the form
        ;; (VARIABLE GENSYM VALUE).
        (assignments '()))
    (while t
      (cond
        ((null pairs) (return))
        ((null (cdr pairs))
         (error "Odd paris in PSETQ"))
        (t
         (let ((variable (car pairs))
               (value (cadr pairs)))
           (push `(,variable ,(gensym) ,value)  assignments)
           (setq pairs (cddr pairs))))))
    (setq assignments (reverse assignments))
    ;;
    `(let ,(mapcar #'cdr assignments)
       (setq ,@(!reduce #'append (mapcar #'butlast assignments))))))

(defmacro do (varlist endlist &body body)
  `(block nil
     (let ,(mapcar (lambda (x) (list (first x) (second x))) varlist)
       (while t
         (when ,(car endlist)
           (return (progn ,@(cdr endlist))))
         (tagbody ,@body)
         (psetq
          ,@(apply #'append
                   (mapcar (lambda (v)
                             (and (consp (cddr v))
                                  (list (first v) (third v))))
                           varlist)))))))

(defmacro do* (varlist endlist &body body)
  `(block nil
     (let* ,(mapcar (lambda (x) (list (first x) (second x))) varlist)
       (while t
         (when ,(car endlist)
           (return (progn ,@(cdr endlist))))
         (tagbody ,@body)
         (setq
          ,@(apply #'append
                   (mapcar (lambda (v)
                             (and (consp (cddr v))
                                  (list (first v) (third v))))
                           varlist)))))))

(defun list-length (list)
  (let ((l 0))
    (while (not (null list))
      (incf l)
      (setq list (cdr list)))
    l))

(defun length (seq)
  (cond
    ((stringp seq)
     (string-length seq))
    ((arrayp seq)
     (oget seq "length"))
    ((listp seq)
     (list-length seq))))

(defun concat-two (s1 s2)
  (concat-two s1 s2))

(defmacro with-collect (&body body)
  (let ((head (gensym))
        (tail (gensym)))
    `(let* ((,head (cons 'sentinel nil))
            (,tail ,head))
       (flet ((collect (x)
                (rplacd ,tail (cons x nil))
                (setq ,tail (cdr ,tail))
                x))
         ,@body)
       (cdr ,head))))

(defun map1 (func list)
  (with-collect
    (while list
      (collect (funcall func (car list)))
      (setq list (cdr list)))))

(defmacro loop (&body body)
  `(while t ,@body))

(defun mapcar (func list &rest lists)
  (let ((lists (cons list lists)))
    (with-collect
      (block loop
        (loop
           (let ((elems (map1 #'car lists)))
             (do ((tail lists (cdr tail)))
                 ((null tail))
               (when (null (car tail)) (return-from loop))
               (rplaca tail (cdar tail)))
             (collect (apply func elems))))))))

(defun identity (x) x)

(defun constantly (x)
  (lambda (&rest args)
    x))

(defun copy-list (x)
  (mapcar #'identity x))

(defun list* (arg &rest others)
  (cond ((null others) arg)
        ((null (cdr others)) (cons arg (car others)))
        (t (do ((x others (cdr x)))
               ((null (cddr x)) (rplacd x (cadr x))))
           (cons arg others))))

(defun code-char (x) x)
(defun char-code (x) x)
(defun char= (x y) (= x y))

(defun integerp (x)
  (and (numberp x) (= (floor x) x)))

(defun floatp (x)
  (and (numberp x) (not (integerp x))))

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

(defun find (item list &key key (test #'eql))
  (dolist (x list)
    (when (funcall test (funcall key x) item)
      (return x))))

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
     ;;
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

(defun digit-char (weight)
  (and (<= 0 weight 9)
       (char "0123456789" weight)))

(defun subseq (seq a &optional b)
  (cond
    ((stringp seq)
     (if b
         (slice seq a b)
         (slice seq a)))
    (t
     (error "Unsupported argument."))))

(defmacro do-sequence (iteration &body body)
  (let ((seq (gensym))
        (index (gensym)))
    `(let ((,seq ,(second iteration)))
       (cond
         ;; Strings
         ((stringp ,seq)
          (let ((,index 0))
            (dotimes (,index (length ,seq))
              (let ((,(first iteration)
                     (char ,seq ,index)))
                ,@body))))
         ;; Lists
         ((listp ,seq)
          (dolist (,(first iteration) ,seq)
            ,@body))
         (t
          (error "type-error!"))))))

(defun some (function seq)
  (do-sequence (elt seq)
    (when (funcall function elt)
      (return-from some t))))

(defun every (function seq)
  (do-sequence (elt seq)
    (unless (funcall function elt)
      (return-from every nil)))
  t)

(defun position (elt sequence)
  (let ((pos 0))
    (do-sequence (x seq)
      (when (eq elt x)
        (return))
      (incf pos))
    pos))

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

(defmacro multiple-value-bind (variables value-from &body body)
  `(multiple-value-call (lambda (&optional ,@variables &rest ,(gensym))
                          ,@body)
     ,value-from))

(defmacro multiple-value-list (value-from)
  `(multiple-value-call #'list ,value-from))


;;; Generalized references (SETF)

(defvar *setf-expanders* nil)

(defun get-setf-expansion (place)
  (if (symbolp place)
      (let ((value (gensym)))
        (values nil
                nil
                `(,value)
                `(setq ,place ,value)
                place))
      (let ((place (ls-macroexpand-1 place)))
        (let* ((access-fn (car place))
               (expander (cdr (assoc access-fn *setf-expanders*))))
          (when (null expander)
            (error "Unknown generalized reference."))
          (apply expander (cdr place))))))

(defmacro define-setf-expander (access-fn lambda-list &body body)
  (unless (symbolp access-fn)
    (error "ACCESS-FN must be a symbol."))
  `(progn (push (cons ',access-fn (lambda ,lambda-list ,@body))
                *setf-expanders*)
          ',access-fn))

(defmacro setf (&rest pairs)
  (cond
    ((null pairs)
     nil)
    ((null (cdr pairs))
     (error "Odd number of arguments to setf."))
    ((null (cddr pairs))
     (let ((place (ls-macroexpand-1 (first pairs)))
           (value (second pairs)))
       (multiple-value-bind (vars vals store-vars writer-form reader-form)
           (get-setf-expansion place)
         ;; TODO: Optimize the expansion a little bit to avoid let*
         ;; or multiple-value-bind when unnecesary.
         `(let* ,(mapcar #'list vars vals)
            (multiple-value-bind ,store-vars
                ,value
              ,writer-form)))))
    (t
     `(progn
        ,@(do ((pairs pairs (cddr pairs))
               (result '() (cons `(setf ,(car pairs) ,(cadr pairs)) result)))
              ((null pairs)
               (reverse result)))))))

(define-setf-expander car (x)
  (let ((cons (gensym))
        (new-value (gensym)))
    (values (list cons)
            (list x)
            (list new-value)
            `(progn (rplaca ,cons ,new-value) ,new-value)
            `(car ,cons))))

(define-setf-expander cdr (x)
  (let ((cons (gensym))
        (new-value (gensym)))
    (values (list cons)
            (list x)
            (list new-value)
            `(progn (rplacd ,cons ,new-value) ,new-value)
            `(car ,cons))))

;; Incorrect typecase, but used in NCONC.
(defmacro typecase (x &rest clausules)
  (let ((value (gensym)))
    `(let ((,value ,x))
       (cond
         ,@(mapcar (lambda (c)
                     (if (eq (car c) t)
                         `((t ,@(rest c)))
                         `((,(ecase (car c)
                                    (integer 'integerp)
                                    (cons 'consp)
                                    (symbol 'symbolp)
                                    (array 'arrayp)
                                    (string 'stringp)
                                    (atom 'atom)
                                    (null 'null))
                             ,value)
                           ,@(or (rest c)
                                 (list nil)))))
                   clausules)))))

;; The NCONC function is based on the SBCL's one.
(defun nconc (&rest lists)
  (flet ((fail (object)
           (error "type-error in nconc")))
    (do ((top lists (cdr top)))
        ((null top) nil)
      (let ((top-of-top (car top)))
        (typecase top-of-top
          (cons
           (let* ((result top-of-top)
                  (splice result))
             (do ((elements (cdr top) (cdr elements)))
                 ((endp elements))
               (let ((ele (car elements)))
                 (typecase ele
                   (cons (rplacd (last splice) ele)
                         (setf splice ele))
                   (null (rplacd (last splice) nil))
                   (atom (if (cdr elements)
                             (fail ele)
                             (rplacd (last splice) ele))))))
             (return result)))
          (null)
          (atom
           (if (cdr top)
               (fail top-of-top)
               (return top-of-top))))))))

(defun nreconc (x y)
  (do ((1st (cdr x) (if (endp 1st) 1st (cdr 1st)))
       (2nd x 1st)                ; 2nd follows first down the list.
       (3rd y 2nd))               ;3rd follows 2nd down the list.
      ((atom 2nd) 3rd)
    (rplacd 2nd 3rd)))

(defun notany (fn seq)
  (not (some fn seq)))


;; Packages

(defvar *package-list* nil)

(defun list-all-packages ()
  *package-list*)

(defun make-package (name &key use)
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

(defvar *js-package*
  (make-package "JS"))

(defvar *user-package*
  (make-package "CL-USER" :use (list *common-lisp-package*)))

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
  (let* ((package
          (if (in "package" symbol)
              (find-package-or-fail (oget symbol "package"))
              *common-lisp-package*))
         (symbols (%package-symbols package)))
    (oset symbol "package" package)
    (when (eq package *keyword-package*)
      (oset symbol "value" symbol))
    (oset symbols (symbol-name symbol) symbol)))

(defun find-symbol (name &optional (package *package*))
  (let* ((package (find-package-or-fail package))
         (externals (%package-external-symbols package))
         (symbols (%package-symbols package)))
    (cond
      ((in name externals)
       (values (oget externals name) :external))
      ((in name symbols)
       (values (oget symbols name) :internal))
      (t
       (dolist (used (package-use-list package) (values nil nil))
         (let ((exports (%package-external-symbols used)))
           (when (in name exports)
             (return (values (oget exports name) :inherit)))))))))

(defun intern (name &optional (package *package*))
  (let ((package (find-package-or-fail package)))
    (multiple-value-bind (symbol foundp)
        (find-symbol name package)
      (if foundp
          (values symbol foundp)
          (let ((symbols (%package-symbols package)))
            (oget symbols name)
            (let ((symbol (make-symbol name)))
              (oset symbol "package" package)
              (when (eq package *keyword-package*)
                (oset symbol "value" symbol)
                (export (list symbol) package))
              (when (eq package *js-package*)
                (let ((sym-name (symbol-name symbol))
                      (args (gensym)))
                  ;; Generate a trampoline to call the JS function
                  ;; properly. This trampoline is very inefficient,
                  ;; but it still works. Ideas to optimize this are
                  ;; provide a special lambda keyword
                  ;; cl::&rest-vector to avoid list argument
                  ;; consing, as well as allow inline declarations.
                  (fset symbol
                        (eval `(lambda (&rest ,args)
                                 (let ((,args (list-to-vector ,args)))
                                   (%js-call (%js-vref ,sym-name) ,args)))))
                  ;; Define it as a symbol macro to access to the
                  ;; Javascript variable literally.
                  (%define-symbol-macro symbol `(%js-vref ,(string symbol)))))
              (oset symbols name symbol)
              (values symbol nil)))))))

(defun symbol-package (symbol)
  (unless (symbolp symbol)
    (error "it is not a symbol"))
  (oget symbol "package"))

(defun export (symbols &optional (package *package*))
  (let ((exports (%package-external-symbols package)))
    (dolist (symb symbols t)
      (oset exports (symbol-name symb) symb))))


(defconstant internal-time-units-per-second 1000) 

(defun get-internal-real-time ()
  (get-internal-real-time))

(defun get-unix-time ()
  (truncate (/ (get-internal-real-time) 1000)))

(defun get-universal-time ()
  (+ (get-unix-time) 2208988800))

(defun concat (&rest strs)
  (!reduce #'concat-two strs :initial-value ""))

(defun values-list (list)
  (values-array (list-to-vector list)))

(defun values (&rest args)
  (values-list args))
