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
  (js-vset "nil" nil)

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

  (defmacro incf (x &optional (delta 1))
    `(setq ,x (+ ,x ,delta)))

  (defmacro decf (x &optional (delta 1))
    `(setq ,x (- ,x ,delta)))

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

(defun !reduce (func list &key initial-value)
  (if (null list)
      initial-value
      (!reduce func
               (cdr list)
               :initial-value (funcall func initial-value (car list)))))

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
    (!reduce #'append-two lists))

  (defun revappend (list1 list2)
    (while list1
      (push (car list1) list2)
      (setq list1 (cdr list1)))
    list2)

  (defun reverse (list)
    (revappend list '()))

  (defmacro psetq (&rest pairs)
    (let ( ;; For each pair, we store here a list of the form
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

  ;; A very simple defstruct built on lists. It supports just slot with
  ;; an optional default initform, and it will create a constructor,
  ;; predicate and accessors for you.
  (defmacro defstruct (name &rest slots)
    (unless (symbolp name)
      (error "It is not a full defstruct implementation."))
    (let* ((name-string (symbol-name name))
           (slot-descriptions
            (mapcar (lambda (sd)
                      (cond
                        ((symbolp sd)
                         (list sd))
                        ((and (listp sd) (car sd) (cddr sd))
                         sd)
                        (t
                         (error "Bad slot accessor."))))
                    slots))
           (predicate (intern (concat name-string "P"))))
      `(progn
         ;; Constructor
         (defun ,(intern (concat "MAKE-" name-string)) (&key ,@slot-descriptions)
           (list ',name ,@(mapcar #'car slot-descriptions)))
         ;; Predicate
         (defun ,predicate (x)
           (and (consp x) (eq (car x) ',name)))
         ;; Slot accessors
         ,@(with-collect
            (let ((index 1))
              (dolist (slot slot-descriptions)
                (let ((name (car slot)))
                  (collect `(defun ,(intern (concat name-string "-" (string name))) (x)
                              (unless (,predicate x)
                                (error ,(concat "The object is not a type " name-string)))
                              (nth ,index x)))
                  (incf index)))))
         ',name)))

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
       (let ((place (first pairs))
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

  (defun get-universal-time ()
    (+ (get-unix-time) 2208988800)))


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

  (defun aset (array idx value)
    (setf (aref array idx) value)))

;;; At this point, no matter if Common Lisp or ecmalisp is compiling
;;; from here, this code will compile on both. We define some helper
;;; functions now for string manipulation and so on. They will be
;;; useful in the compiler, mostly.

(defvar *newline* (string (code-char 10)))

(defun concat (&rest strs)
  (!reduce #'concat-two strs :initial-value ""))

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

(defun vector-to-list (vector)
  (let ((list nil)
	(size (length vector)))
    (dotimes (i size (reverse list))
      (push (aref vector i) list))))

(defun list-to-vector (list)
  (let ((v (make-array (length list)))
	(i 0))
    (dolist (x list v)
      (aset v i x)
      (incf i))))

#+ecmalisp
(progn
  (defun values-list (list)
    (values-array (list-to-vector list)))

  (defun values (&rest args)
    (values-list args)))

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
       (mapconcat (lambda (x) (string (digit-char x)))
		  digits)))))


;;; Printer

#+ecmalisp
(progn
  (defun prin1-to-string (form)
    (cond
      ((symbolp form)
       (multiple-value-bind (symbol foundp)
           (find-symbol (symbol-name form) *package*)
         (if (and foundp (eq symbol form))
             (symbol-name form)
             (let ((package (symbol-package form))
                   (name (symbol-name form)))
               (concat (cond
                         ((null package) "#")
                         ((eq package (find-package "KEYWORD")) "")
                         (t (package-name package)))
                       ":" name)))))
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
      ((arrayp form)
       (concat "#" (if (zerop (length form))
                       "()"
                       (prin1-to-string (vector-to-list form)))))
      ((packagep form)
       (concat "#<PACKAGE " (package-name form) ">"))
      (t
       (concat "#<javascript object>"))))

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
         (rplacd stream (1+ (cdr stream))))))

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
    (#\( (list-to-vector (%read-list stream)))
    (#\: (make-symbol (string-upcase (read-until stream #'terminalp))))
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


(defun !parse-integer (string junk-allow)
  (block nil
    (let ((value 0)
	  (index 0)
	  (size (length string))
	  (sign 1))
      (when (zerop size) (return (values nil 0)))
      ;; Optional sign
      (case (char string 0)
	(#\+ (incf index))
	(#\- (setq sign -1)
	     (incf index)))
      ;; First digit
      (unless (and (< index size)
		   (setq value (digit-char-p (char string index))))
	(return (values nil index)))
      (incf index)
      ;; Other digits
      (while (< index size)
	(let ((digit (digit-char-p (char string index))))
	  (unless digit (return))
	  (setq value (+ (* value 10) digit))
	  (incf index)))
      (if (or junk-allow
	      (= index size)
	      (char= (char string index) #\space))
	  (values (* sign value) index)
	  (values nil index)))))

#+ecmalisp
(defun parse-integer (string)
  (!parse-integer string nil))

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
	 (or (values (!parse-integer string nil))
	     (read-symbol string)))))))

(defun ls-read-from-string (string)
  (ls-read (make-string-stream string)))


;;;; Compiler

;;; Translate the Lisp code to Javascript. It will compile the special
;;; forms. Some primitive functions are compiled as special forms
;;; too. The respective real functions are defined in the target (see
;;; the beginning of this file) as well as some primitive functions.

(defun code (&rest args)
  (mapconcat (lambda (arg)
               (cond
                 ((null arg) "")
                 ((integerp arg) (integer-to-string arg))
                 ((stringp arg) arg)
                 (t (error "Unknown argument."))))
             args))

;;; Wrap X with a Javascript code to convert the result from
;;; Javascript generalized booleans to T or NIL.
(defun js!bool (x)
  (code "(" x "?" (ls-compile t) ": " (ls-compile nil) ")"))

;;; Concatenate the arguments and wrap them with a self-calling
;;; Javascript anonymous function. It is used to make some Javascript
;;; statements valid expressions and provide a private scope as well.
;;; It could be defined as function, but we could do some
;;; preprocessing in the future.
(defmacro js!selfcall (&body body)
  `(code "(function(){" *newline* (indent ,@body) "})()"))

;;; Like CODE, but prefix each line with four spaces. Two versions
;;; of this function are available, because the Ecmalisp version is
;;; very slow and bootstraping was annoying.

#+ecmalisp
(defun indent (&rest string)
  (let ((input (apply #'code string)))
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
    (with-input-from-string (input (apply #'code string))
      (loop
         for line = (read-line input nil)
         while line
         do (write-string "    ")
         do (write-line line)))))


;;; A Form can return a multiple values object calling VALUES, like
;;; values(arg1, arg2, ...). It will work in any context, as well as
;;; returning an individual object. However, if the special variable
;;; `*multiple-value-p*' is NIL, is granted that only the primary
;;; value will be used, so we can optimize to avoid the VALUES
;;; function call.
(defvar *multiple-value-p* nil)

(defun make-binding (name type value &optional declarations)
  (list name type value declarations))

(defun binding-name (b) (first b))
(defun binding-type (b) (second b))
(defun binding-value (b) (third b))
(defun binding-declarations (b) (fourth b))

(defun set-binding-value (b value)
  (rplaca (cddr b) value))

(defun set-binding-declarations (b value)
  (rplaca (cdddr b) value))

(defun push-binding-declaration (decl b)
  (set-binding-declarations b (cons decl (binding-declarations b))))


(defun make-lexenv ()
  (list nil nil nil nil))

(defun copy-lexenv (lexenv)
  (copy-list lexenv))

(defun push-to-lexenv (binding lexenv namespace)
  (ecase namespace
    (variable   (rplaca        lexenv  (cons binding (car lexenv))))
    (function   (rplaca   (cdr lexenv) (cons binding (cadr lexenv))))
    (block      (rplaca  (cddr lexenv) (cons binding (caddr lexenv))))
    (gotag      (rplaca (cdddr lexenv) (cons binding (cadddr lexenv))))))

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
  (code "v" (incf *variable-counter*)))

(defun translate-variable (symbol)
  (binding-value (lookup-in-lexenv symbol *environment* 'variable)))

(defun extend-local-env (args)
  (let ((new (copy-lexenv *environment*)))
    (dolist (symbol args new)
      (let ((b (make-binding symbol 'variable (gvarname symbol))))
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
  (push-to-lexenv (make-binding name 'macro lambda) *environment* 'function)
  name)

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
         (push-binding-declaration 'constant b))))))

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
  (code "(" (ls-compile condition) " !== " (ls-compile nil)
        " ? " (ls-compile true *multiple-value-p*)
        " : " (ls-compile false *multiple-value-p*)
        ")"))

(defvar *ll-keywords* '(&optional &rest &key))

(defun list-until-keyword (list)
  (if (or (null list) (member (car list) *ll-keywords*))
      nil
      (cons (car list) (list-until-keyword (cdr list)))))

(defun ll-section (keyword ll)
  (list-until-keyword (cdr (member keyword ll))))

(defun ll-required-arguments (ll)
  (list-until-keyword ll))

(defun ll-optional-arguments-canonical (ll)
  (mapcar #'ensure-list (ll-section '&optional ll)))

(defun ll-optional-arguments (ll)
  (mapcar #'car (ll-optional-arguments-canonical ll)))

(defun ll-rest-argument (ll)
  (let ((rest (ll-section '&rest ll)))
    (when (cdr rest)
      (error "Bad lambda-list"))
    (car rest)))

(defun ll-keyword-arguments-canonical (ll)
  (flet ((canonicalize (keyarg)
	   ;; Build a canonical keyword argument descriptor, filling
	   ;; the optional fields. The result is a list of the form
	   ;; ((keyword-name var) init-form).
           (let ((arg (ensure-list keyarg)))
             (cons (if (listp (car arg))
                       (car arg)
                       (list (intern (symbol-name (car arg)) "KEYWORD") (car arg)))
                   (cdr arg)))))
    (mapcar #'canonicalize (ll-section '&key ll))))

(defun ll-keyword-arguments (ll)
  (mapcar (lambda (keyarg) (second (first keyarg)))
	  (ll-keyword-arguments-canonical ll)))

(defun ll-svars (lambda-list)
  (let ((args
         (append
          (ll-keyword-arguments-canonical lambda-list)
          (ll-optional-arguments-canonical lambda-list))))
    (remove nil (mapcar #'third args))))

(defun lambda-docstring-wrapper (docstring &rest strs)
  (if docstring
      (js!selfcall
        "var func = " (join strs) ";" *newline*
        "func.docstring = '" docstring "';" *newline*
        "return func;" *newline*)
      (apply #'code strs)))

(defun lambda-check-argument-count
    (n-required-arguments n-optional-arguments rest-p)
  ;; Note: Remember that we assume that the number of arguments of a
  ;; call is at least 1 (the values argument).
  (let ((min (1+ n-required-arguments))
        (max (if rest-p 'n/a (+ 1 n-required-arguments n-optional-arguments))))
    (block nil
      ;; Special case: a positive exact number of arguments.
      (when (and (< 1 min) (eql min max))
        (return (code "checkArgs(arguments, " min ");" *newline*)))
      ;; General case:
      (code
       (when (< 1 min)
         (code "checkArgsAtLeast(arguments, " min ");" *newline*))
       (when (numberp max)
         (code "checkArgsAtMost(arguments, " max ");" *newline*))))))

(defun compile-lambda-optional (ll)
  (let* ((optional-arguments (ll-optional-arguments-canonical ll))
	 (n-required-arguments (length (ll-required-arguments ll)))
	 (n-optional-arguments (length optional-arguments)))
    (when optional-arguments
      (code (mapconcat (lambda (arg)
                         (code "var " (translate-variable (first arg)) "; " *newline*
                               (when (third arg)
                                 (code "var " (translate-variable (third arg))
                                       " = " (ls-compile t)
                                       "; " *newline*))))
                       optional-arguments)
            "switch(arguments.length-1){" *newline*
            (let ((cases nil)
                  (idx 0))
              (progn
                (while (< idx n-optional-arguments)
                  (let ((arg (nth idx optional-arguments)))
                    (push (code "case " (+ idx n-required-arguments) ":" *newline*
                                (indent (translate-variable (car arg))
                                        "="
                                        (ls-compile (cadr arg)) ";" *newline*)
                                (when (third arg)
                                  (indent (translate-variable (third arg))
                                          "="
                                          (ls-compile nil)
                                          ";" *newline*)))
                          cases)
                    (incf idx)))
                (push (code "default: break;" *newline*) cases)
                (join (reverse cases))))
            "}" *newline*))))

(defun compile-lambda-rest (ll)
  (let ((n-required-arguments (length (ll-required-arguments ll)))
	(n-optional-arguments (length (ll-optional-arguments ll)))
	(rest-argument (ll-rest-argument ll)))
    (when rest-argument
      (let ((js!rest (translate-variable rest-argument)))
        (code "var " js!rest "= " (ls-compile nil) ";" *newline*
              "for (var i = arguments.length-1; i>="
              (+ 1 n-required-arguments n-optional-arguments)
              "; i--)" *newline*
              (indent js!rest " = {car: arguments[i], cdr: ") js!rest "};"
              *newline*)))))

(defun compile-lambda-parse-keywords (ll)
  (let ((n-required-arguments
	 (length (ll-required-arguments ll)))
	(n-optional-arguments
	 (length (ll-optional-arguments ll)))
	(keyword-arguments
	 (ll-keyword-arguments-canonical ll)))
    (code
     ;; Declare variables
     (mapconcat (lambda (arg)
		  (let ((var (second (car arg))))
		    (code "var " (translate-variable var) "; " *newline*
                          (when (third arg)
                            (code "var " (translate-variable (third arg))
                                  " = " (ls-compile nil)
                                  ";" *newline*)))))
		keyword-arguments)
     ;; Parse keywords
     (flet ((parse-keyword (keyarg)
	      ;; ((keyword-name var) init-form)
	      (code "for (i=" (+ 1 n-required-arguments n-optional-arguments)
                    "; i<arguments.length; i+=2){" *newline*
                    (indent
                     "if (arguments[i] === " (ls-compile (caar keyarg)) "){" *newline*
                     (indent (translate-variable (cadr (car keyarg)))
                             " = arguments[i+1];"
                             *newline*
                             (let ((svar (third keyarg)))
                               (when svar
                                 (code (translate-variable svar) " = " (ls-compile t) ";" *newline*)))
                             "break;" *newline*)
                     "}" *newline*)
                    "}" *newline*
                    ;; Default value
                    "if (i == arguments.length){" *newline*
                    (indent (translate-variable (cadr (car keyarg))) " = " (ls-compile (cadr keyarg)) ";" *newline*)
                    "}" *newline*)))
       (when keyword-arguments
         (code "var i;" *newline*
               (mapconcat #'parse-keyword keyword-arguments))))
     ;; Check for unknown keywords
     (when keyword-arguments
       (code "for (i=" (+ 1 n-required-arguments n-optional-arguments)
             "; i<arguments.length; i+=2){" *newline*
             (indent "if ("
                     (join (mapcar (lambda (x)
                                     (concat "arguments[i] !== " (ls-compile (caar x))))
                                   keyword-arguments)
                           " && ")
                     ")" *newline*
                     (indent
                      "throw 'Unknown keyword argument ' + arguments[i].name;" *newline*))
             "}" *newline*)))))

(defun compile-lambda (ll body)
  (let ((required-arguments (ll-required-arguments ll))
        (optional-arguments (ll-optional-arguments ll))
	(keyword-arguments  (ll-keyword-arguments  ll))
        (rest-argument      (ll-rest-argument      ll))
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
                                  optional-arguments
				  keyword-arguments
                                  (ll-svars ll)))))
      (lambda-docstring-wrapper
       documentation
       "(function ("
       (join (cons "values"
                   (mapcar #'translate-variable
                           (append required-arguments optional-arguments)))
             ",")
       "){" *newline*
       (indent
        ;; Check number of arguments
        (lambda-check-argument-count n-required-arguments
                                     n-optional-arguments
                                     (or rest-argument keyword-arguments))
	(compile-lambda-optional ll)
	(compile-lambda-rest ll)
	(compile-lambda-parse-keywords ll)
        (let ((*multiple-value-p* t))
	  (ls-compile-block body t)))
       "})"))))



(defun setq-pair (var val)
  (let ((b (lookup-in-lexenv var *environment* 'variable)))
    (if (and (eq (binding-type b) 'variable)
             (not (member 'special (binding-declarations b)))
             (not (member 'constant (binding-declarations b))))
        (code (binding-value b) " = " (ls-compile val))
        (ls-compile `(set ',var ,val)))))

(define-compilation setq (&rest pairs)
  (let ((result ""))
    (while t
      (cond
	((null pairs) (return))
	((null (cdr pairs))
	 (error "Odd paris in SETQ"))
	(t
	 (concatf result
	   (concat (setq-pair (car pairs) (cadr pairs))
		   (if (null (cddr pairs)) "" ", ")))
	 (setq pairs (cddr pairs)))))
    (code "(" result ")")))

;;; FFI Variable accessors
(define-compilation js-vref (var)
  var)

(define-compilation js-vset (var val)
  (code "(" var " = " (ls-compile val) ")"))


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
  (code "l" (incf *literal-counter*)))

(defun literal (sexp &optional recursive)
  (cond
    ((integerp sexp) (integer-to-string sexp))
    ((stringp sexp) (code "\"" (escape-string sexp) "\""))
    ((symbolp sexp)
     (or (cdr (assoc sexp *literal-symbols*))
	 (let ((v (genlit))
	       (s #+common-lisp
                 (let ((package (symbol-package sexp)))
                   (if (eq package (find-package "KEYWORD"))
                       (code "{name: \"" (escape-string (symbol-name sexp))
                             "\", 'package': '" (package-name package) "'}")
                       (code "{name: \"" (escape-string (symbol-name sexp)) "\"}")))
                 #+ecmalisp
                 (let ((package (symbol-package sexp)))
                   (if (null package)
                       (code "{name: \"" (escape-string (symbol-name sexp)) "\"}")
                       (ls-compile `(intern ,(symbol-name sexp) ,(package-name package)))))))
	   (push (cons sexp v) *literal-symbols*)
	   (toplevel-compilation (code "var " v " = " s))
	   v)))
    ((consp sexp)
     (let* ((head (butlast sexp))
            (tail (last sexp))
            (c (code "QIList("
                     (join-trailing (mapcar (lambda (x) (literal x t)) head) ",")
                     (literal (car tail) t)
                     ","
                     (literal (cdr tail) t)
                     ")")))
       (if recursive
	   c
	   (let ((v (genlit)))
             (toplevel-compilation (code "var " v " = " c))
             v))))
    ((arrayp sexp)
     (let ((elements (vector-to-list sexp)))
       (let ((c (concat "[" (join (mapcar #'literal elements) ", ") "]")))
	 (if recursive
	     c
	     (let ((v (genlit)))
	       (toplevel-compilation (code "var " v " = " c))
	       v)))))))

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
     (compile-lambda (cadr x) (cddr x)))
    ((symbolp x)
     (let ((b (lookup-in-lexenv x *environment* 'function)))
       (if b
	   (binding-value b)
	   (ls-compile `(symbol-function ',x)))))))


(defun make-function-binding (fname)
  (make-binding fname 'function (gvarname fname)))

(defun compile-function-definition (list)
  (compile-lambda (car list) (cdr list)))

(defun translate-function (name)
  (let ((b (lookup-in-lexenv name *environment* 'function)))
    (binding-value b)))

(define-compilation flet (definitions &rest body)
  (let* ((fnames (mapcar #'car definitions))
         (fbody  (mapcar #'cdr definitions))
         (cfuncs (mapcar #'compile-function-definition fbody))
         (*environment*
          (extend-lexenv (mapcar #'make-function-binding fnames)
                         *environment*
                         'function)))
    (code "(function("
          (join (mapcar #'translate-function fnames) ",")
          "){" *newline*
          (let ((body (ls-compile-block body t)))
            (indent body))
          "})(" (join cfuncs ",") ")")))

(define-compilation labels (definitions &rest body)
  (let* ((fnames (mapcar #'car definitions))
	 (*environment*
          (extend-lexenv (mapcar #'make-function-binding fnames)
                         *environment*
                         'function)))
    (js!selfcall
      (mapconcat (lambda (func)
		   (code "var " (translate-function (car func))
                         " = " (compile-lambda (cadr func) (cddr func))
                         ";" *newline*))
		 definitions)
      (ls-compile-block body t))))


(defvar *compiling-file* nil)
(define-compilation eval-when-compile (&rest body)
  (if *compiling-file*
      (progn
        (eval (cons 'progn body))
        nil)
      (ls-compile `(progn ,@body))))

(defmacro define-transformation (name args form)
  `(define-compilation ,name ,args
     (ls-compile ,form)))

(define-compilation progn (&rest body)
  (if (null (cdr body))
      (ls-compile (car body) *multiple-value-p*)
      (js!selfcall (ls-compile-block body t))))

(defun special-variable-p (x)
  (and (claimp x 'variable 'special) t))

;;; Wrap CODE to restore the symbol values of the dynamic
;;; bindings. BINDINGS is a list of pairs of the form
;;; (SYMBOL . PLACE),  where PLACE is a Javascript variable
;;; name to initialize the symbol value and where to stored
;;; the old value.
(defun let-binding-wrapper (bindings body)
  (when (null bindings)
    (return-from let-binding-wrapper body))
  (code
   "try {" *newline*
   (indent "var tmp;" *newline*
           (mapconcat
            (lambda (b)
              (let ((s (ls-compile `(quote ,(car b)))))
                (code "tmp = " s ".value;" *newline*
                      s ".value = " (cdr b) ";" *newline*
                      (cdr b) " = tmp;" *newline*)))
            bindings)
           body *newline*)
   "}" *newline*
   "finally {"  *newline*
   (indent
    (mapconcat (lambda (b)
                 (let ((s (ls-compile `(quote ,(car b)))))
                   (code s ".value" " = " (cdr b) ";" *newline*)))
               bindings))
   "}" *newline*))

(define-compilation let (bindings &rest body)
  (let* ((bindings (mapcar #'ensure-list bindings))
         (variables (mapcar #'first bindings))
         (cvalues (mapcar #'ls-compile (mapcar #'second bindings)))
         (*environment* (extend-local-env (remove-if #'special-variable-p variables)))
         (dynamic-bindings))
    (code "(function("
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
          "})(" (join cvalues ",") ")")))


;;; Return the code to initialize BINDING, and push it extending the
;;; current lexical environment if the variable is not special.
(defun let*-initialize-value (binding)
  (let ((var (first binding))
        (value (second binding)))
    (if (special-variable-p var)
        (code (ls-compile `(setq ,var ,value)) ";" *newline*)
        (let* ((v (gvarname var))
               (b (make-binding var 'variable v)))
          (prog1 (code "var " v " = " (ls-compile value) ";" *newline*)
            (push-to-lexenv b *environment* 'variable))))))

;;; Wrap BODY to restore the symbol values of SYMBOLS after body. It
;;; DOES NOT generate code to initialize the value of the symbols,
;;; unlike let-binding-wrapper.
(defun let*-binding-wrapper (symbols body)
  (when (null symbols)
    (return-from let*-binding-wrapper body))
  (let ((store (mapcar (lambda (s) (cons s (gvarname s)))
                       (remove-if-not #'special-variable-p symbols))))
    (code
     "try {" *newline*
     (indent
      (mapconcat (lambda (b)
                   (let ((s (ls-compile `(quote ,(car b)))))
                     (code "var " (cdr b) " = " s ".value;" *newline*)))
                 store)
      body)
     "}" *newline*
     "finally {" *newline*
     (indent
      (mapconcat (lambda (b)
                   (let ((s (ls-compile `(quote ,(car b)))))
                     (code s ".value" " = " (cdr b) ";" *newline*)))
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
  (let* ((tr (incf *block-counter*))
         (b (make-binding name 'block tr)))
    (when *multiple-value-p*
      (push-binding-declaration 'multiple-value b))
    (let* ((*environment* (extend-lexenv (list b) *environment* 'block))
           (cbody (ls-compile-block body t)))
      (if (member 'used (binding-declarations b))
          (js!selfcall
            "try {" *newline*
            (indent cbody)
            "}" *newline*
            "catch (cf){" *newline*
            "    if (cf.type == 'block' && cf.id == " tr ")" *newline*
            (if *multiple-value-p*
                "        return values.apply(this, forcemv(cf.values));"
                "        return cf.values;")
            *newline*
            "    else" *newline*
            "        throw cf;" *newline*
            "}" *newline*)
          (js!selfcall cbody)))))

(define-compilation return-from (name &optional value)
  (let* ((b (lookup-in-lexenv name *environment* 'block))
         (multiple-value-p (member 'multiple-value (binding-declarations b))))
    (when (null b)
      (error (concat "Unknown block `" (symbol-name name) "'.")))
    (push-binding-declaration 'used b)
    (js!selfcall
      (when multiple-value-p (code "var values = mv;" *newline*))
      "throw ({"
      "type: 'block', "
      "id: " (binding-value b) ", "
      "values: " (ls-compile value multiple-value-p) ", "
      "message: 'Return from unknown block " (symbol-name name) ".'"
      "})")))

(define-compilation catch (id &rest body)
  (js!selfcall
    "var id = " (ls-compile id) ";" *newline*
    "try {" *newline*
    (indent (ls-compile-block body t)) *newline*
    "}" *newline*
    "catch (cf){" *newline*
    "    if (cf.type == 'catch' && cf.id == id)" *newline*
    (if *multiple-value-p*
        "        return values.apply(this, forcemv(cf.values));"
        "        return pv.apply(this, forcemv(cf.values));")
    *newline*
    "    else" *newline*
    "        throw cf;" *newline*
    "}" *newline*))

(define-compilation throw (id value)
  (js!selfcall
    "var values = mv;" *newline*
    "throw ({"
    "type: 'catch', "
    "id: " (ls-compile id) ", "
    "values: " (ls-compile value t) ", "
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
  (let ((tbidx *tagbody-counter*))
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
                          (code "switch(tagbody_" tbidx "){" *newline*
                                "case " initag ":" *newline*
                                (dolist (form (cdr body) content)
                                  (concatf content
                                    (if (not (go-tag-p form))
                                        (indent (ls-compile form) ";" *newline*)
                                        (let ((b (lookup-in-lexenv form *environment* 'gotag)))
                                          (code "case " (second (binding-value b)) ":" *newline*)))))
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
    (when (null b)
      (error (concat "Unknown tag `" n "'.")))
    (js!selfcall
      "throw ({"
      "type: 'tagbody', "
      "id: " (first (binding-value b)) ", "
      "label: " (second (binding-value b)) ", "
      "message: 'Attempt to GO to non-existing tag " n "'"
      "})" *newline*)))

(define-compilation unwind-protect (form &rest clean-up)
  (js!selfcall
    "var ret = " (ls-compile nil) ";" *newline*
    "try {" *newline*
    (indent "ret = " (ls-compile form) ";" *newline*)
    "} finally {" *newline*
    (indent (ls-compile-block clean-up))
    "}" *newline*
    "return ret;" *newline*))

(define-compilation multiple-value-call (func-form &rest forms)
  (js!selfcall
    "var func = " (ls-compile func-form) ";" *newline*
    "var args = [" (if *multiple-value-p* "values" "pv") "];" *newline*
    "return "
    (js!selfcall
      "var values = mv;" *newline*
      "var vs;" *newline*
      (mapconcat (lambda (form)
                   (code "vs = " (ls-compile form t) ";" *newline*
                         "if (typeof vs === 'object' && 'multiple-value' in vs)" *newline*
                         (indent "args = args.concat(vs);" *newline*)
                         "else" *newline*
                         (indent "args.push(vs);" *newline*)))
                 forms)
      "return func.apply(window, args);" *newline*) ";" *newline*))

(define-compilation multiple-value-prog1 (first-form &rest forms)
  (js!selfcall
    "var args = " (ls-compile first-form *multiple-value-p*) ";" *newline*
    (ls-compile-block forms)
    "return args;" *newline*))


;;; Backquote implementation.
;;;
;;;    Author: Guy L. Steele Jr.     Date: 27 December 1985
;;;    Tested under Symbolics Common Lisp and Lucid Common Lisp.
;;;    This software is in the public domain.

;;;    The following are unique tokens used during processing.
;;;    They need not be symbols; they need not even be atoms.
(defvar *comma* 'unquote)
(defvar *comma-atsign* 'unquote-splicing)

(defvar *bq-list* (make-symbol "BQ-LIST"))
(defvar *bq-append* (make-symbol "BQ-APPEND"))
(defvar *bq-list** (make-symbol "BQ-LIST*"))
(defvar *bq-nconc* (make-symbol "BQ-NCONC"))
(defvar *bq-clobberable* (make-symbol "BQ-CLOBBERABLE"))
(defvar *bq-quote* (make-symbol "BQ-QUOTE"))
(defvar *bq-quote-nil* (list *bq-quote* nil))

;;; BACKQUOTE is an ordinary macro (not a read-macro) that processes
;;; the expression foo, looking for occurrences of #:COMMA,
;;; #:COMMA-ATSIGN, and #:COMMA-DOT.  It constructs code in strict
;;; accordance with the rules on pages 349-350 of the first edition
;;; (pages 528-529 of this second edition).  It then optionally
;;; applies a code simplifier.

;;; If the value of *BQ-SIMPLIFY* is non-NIL, then BACKQUOTE
;;; processing applies the code simplifier.  If the value is NIL,
;;; then the code resulting from BACKQUOTE is exactly that
;;; specified by the official rules.
(defparameter *bq-simplify* t)

(defmacro backquote (x)
  (bq-completely-process x))

;;; Backquote processing proceeds in three stages:
;;;
;;; (1) BQ-PROCESS applies the rules to remove occurrences of
;;; #:COMMA, #:COMMA-ATSIGN, and #:COMMA-DOT corresponding to
;;; this level of BACKQUOTE.  (It also causes embedded calls to
;;; BACKQUOTE to be expanded so that nesting is properly handled.)
;;; Code is produced that is expressed in terms of functions
;;; #:BQ-LIST, #:BQ-APPEND, and #:BQ-CLOBBERABLE.  This is done
;;; so that the simplifier will simplify only list construction
;;; functions actually generated by BACKQUOTE and will not involve
;;; any user code in the simplification.  #:BQ-LIST means LIST,
;;; #:BQ-APPEND means APPEND, and #:BQ-CLOBBERABLE means IDENTITY
;;; but indicates places where "%." was used and where NCONC may
;;; therefore be introduced by the simplifier for efficiency.
;;;
;;; (2) BQ-SIMPLIFY, if used, rewrites the code produced by
;;; BQ-PROCESS to produce equivalent but faster code.  The
;;; additional functions #:BQ-LIST* and #:BQ-NCONC may be
;;; introduced into the code.
;;;
;;; (3) BQ-REMOVE-TOKENS goes through the code and replaces
;;; #:BQ-LIST with LIST, #:BQ-APPEND with APPEND, and so on.
;;; #:BQ-CLOBBERABLE is simply eliminated (a call to it being
;;; replaced by its argument).  #:BQ-LIST* is replaced by either
;;; LIST* or CONS (the latter is used in the two-argument case,
;;; purely to make the resulting code a tad more readable).

(defun bq-completely-process (x)
  (let ((raw-result (bq-process x)))
    (bq-remove-tokens (if *bq-simplify*
                          (bq-simplify raw-result)
                          raw-result))))

(defun bq-process (x)
  (cond ((atom x)
         (list *bq-quote* x))
        ((eq (car x) 'backquote)
         (bq-process (bq-completely-process (cadr x))))
        ((eq (car x) *comma*) (cadr x))
        ((eq (car x) *comma-atsign*)
         ;; (error ",@~S after `" (cadr x))
         (error "ill-formed"))
        ;; ((eq (car x) *comma-dot*)
        ;;  ;; (error ",.~S after `" (cadr x))
        ;;  (error "ill-formed"))
        (t (do ((p x (cdr p))
                (q '() (cons (bracket (car p)) q)))
               ((atom p)
                (cons *bq-append*
                      (nreconc q (list (list *bq-quote* p)))))
             (when (eq (car p) *comma*)
               (unless (null (cddr p))
                 ;; (error "Malformed ,~S" p)
                 (error "Malformed"))
               (return (cons *bq-append*
                             (nreconc q (list (cadr p))))))
             (when (eq (car p) *comma-atsign*)
               ;; (error "Dotted ,@~S" p)
               (error "Dotted"))
             ;; (when (eq (car p) *comma-dot*)
             ;;   ;; (error "Dotted ,.~S" p)
             ;;   (error "Dotted"))
             ))))

;;; This implements the bracket operator of the formal rules.
(defun bracket (x)
  (cond ((atom x)
         (list *bq-list* (bq-process x)))
        ((eq (car x) *comma*)
         (list *bq-list* (cadr x)))
        ((eq (car x) *comma-atsign*)
         (cadr x))
        ;; ((eq (car x) *comma-dot*)
        ;;  (list *bq-clobberable* (cadr x)))
        (t (list *bq-list* (bq-process x)))))

;;; This auxiliary function is like MAPCAR but has two extra
;;; purposes: (1) it handles dotted lists; (2) it tries to make
;;; the result share with the argument x as much as possible.
(defun maptree (fn x)
  (if (atom x)
      (funcall fn x)
      (let ((a (funcall fn (car x)))
            (d (maptree fn (cdr x))))
        (if (and (eql a (car x)) (eql d (cdr x)))
            x
            (cons a d)))))

;;; This predicate is true of a form that when read looked
;;; like %@foo or %.foo.
(defun bq-splicing-frob (x)
  (and (consp x)
       (or (eq (car x) *comma-atsign*)
           ;; (eq (car x) *comma-dot*)
           )))

;;; This predicate is true of a form that when read
;;; looked like %@foo or %.foo or just plain %foo.
(defun bq-frob (x)
  (and (consp x)
       (or (eq (car x) *comma*)
           (eq (car x) *comma-atsign*)
           ;; (eq (car x) *comma-dot*)
           )))

;;; The simplifier essentially looks for calls to #:BQ-APPEND and
;;; tries to simplify them.  The arguments to #:BQ-APPEND are
;;; processed from right to left, building up a replacement form.
;;; At each step a number of special cases are handled that,
;;; loosely speaking, look like this:
;;;
;;;  (APPEND (LIST a b c) foo) => (LIST* a b c foo)
;;;       provided a, b, c are not splicing frobs
;;;  (APPEND (LIST* a b c) foo) => (LIST* a b (APPEND c foo))
;;;       provided a, b, c are not splicing frobs
;;;  (APPEND (QUOTE (x)) foo) => (LIST* (QUOTE x) foo)
;;;  (APPEND (CLOBBERABLE x) foo) => (NCONC x foo)
(defun bq-simplify (x)
  (if (atom x)
      x
      (let ((x (if (eq (car x) *bq-quote*)
                   x
                   (maptree #'bq-simplify x))))
        (if (not (eq (car x) *bq-append*))
            x
            (bq-simplify-args x)))))

(defun bq-simplify-args (x)
  (do ((args (reverse (cdr x)) (cdr args))
       (result
         nil
         (cond ((atom (car args))
                (bq-attach-append *bq-append* (car args) result))
               ((and (eq (caar args) *bq-list*)
                     (notany #'bq-splicing-frob (cdar args)))
                (bq-attach-conses (cdar args) result))
               ((and (eq (caar args) *bq-list**)
                     (notany #'bq-splicing-frob (cdar args)))
                (bq-attach-conses
                  (reverse (cdr (reverse (cdar args))))
                  (bq-attach-append *bq-append*
                                    (car (last (car args)))
                                    result)))
               ((and (eq (caar args) *bq-quote*)
                     (consp (cadar args))
                     (not (bq-frob (cadar args)))
                     (null (cddar args)))
                (bq-attach-conses (list (list *bq-quote*
                                              (caadar args)))
                                  result))
               ((eq (caar args) *bq-clobberable*)
                (bq-attach-append *bq-nconc* (cadar args) result))
               (t (bq-attach-append *bq-append*
                                    (car args)
                                    result)))))
      ((null args) result)))

(defun null-or-quoted (x)
  (or (null x) (and (consp x) (eq (car x) *bq-quote*))))

;;; When BQ-ATTACH-APPEND is called, the OP should be #:BQ-APPEND
;;; or #:BQ-NCONC.  This produces a form (op item result) but
;;; some simplifications are done on the fly:
;;;
;;;  (op '(a b c) '(d e f g)) => '(a b c d e f g)
;;;  (op item 'nil) => item, provided item is not a splicable frob
;;;  (op item 'nil) => (op item), if item is a splicable frob
;;;  (op item (op a b c)) => (op item a b c)
(defun bq-attach-append (op item result)
  (cond ((and (null-or-quoted item) (null-or-quoted result))
         (list *bq-quote* (append (cadr item) (cadr result))))
        ((or (null result) (equal result *bq-quote-nil*))
         (if (bq-splicing-frob item) (list op item) item))
        ((and (consp result) (eq (car result) op))
         (list* (car result) item (cdr result)))
        (t (list op item result))))

;;; The effect of BQ-ATTACH-CONSES is to produce a form as if by
;;; `(LIST* ,@items ,result) but some simplifications are done
;;; on the fly.
;;;
;;;  (LIST* 'a 'b 'c 'd) => '(a b c . d)
;;;  (LIST* a b c 'nil) => (LIST a b c)
;;;  (LIST* a b c (LIST* d e f g)) => (LIST* a b c d e f g)
;;;  (LIST* a b c (LIST d e f g)) => (LIST a b c d e f g)
(defun bq-attach-conses (items result)
  (cond ((and (every #'null-or-quoted items)
              (null-or-quoted result))
         (list *bq-quote*
               (append (mapcar #'cadr items) (cadr result))))
        ((or (null result) (equal result *bq-quote-nil*))
         (cons *bq-list* items))
        ((and (consp result)
              (or (eq (car result) *bq-list*)
                  (eq (car result) *bq-list**)))
         (cons (car result) (append items (cdr result))))
        (t (cons *bq-list** (append items (list result))))))

;;; Removes funny tokens and changes (#:BQ-LIST* a b) into
;;; (CONS a b) instead of (LIST* a b), purely for readability.
(defun bq-remove-tokens (x)
  (cond ((eq x *bq-list*) 'list)
        ((eq x *bq-append*) 'append)
        ((eq x *bq-nconc*) 'nconc)
        ((eq x *bq-list**) 'list*)
        ((eq x *bq-quote*) 'quote)
        ((atom x) x)
        ((eq (car x) *bq-clobberable*)
         (bq-remove-tokens (cadr x)))
        ((and (eq (car x) *bq-list**)
              (consp (cddr x))
              (null (cdddr x)))
         (cons 'cons (maptree #'bq-remove-tokens (cdr x))))
        (t (maptree #'bq-remove-tokens x))))

(define-transformation backquote (form)
  (bq-completely-process form))


;;; Primitives

(defvar *builtins* nil)

(defmacro define-raw-builtin (name args &body body)
  ;; Creates a new primitive function `name' with parameters args and
  ;; @body. The body can access to the local environment through the
  ;; variable *ENVIRONMENT*.
  `(push (list ',name (lambda ,args (block ,name ,@body)))
         *builtins*))

(defmacro define-builtin (name args &body body)
  `(define-raw-builtin ,name ,args
     (let ,(mapcar (lambda (arg) `(,arg (ls-compile ,arg))) args)
       ,@body)))

;;; DECLS is a list of (JSVARNAME TYPE LISPFORM) declarations.
(defmacro type-check (decls &body body)
  `(js!selfcall
     ,@(mapcar (lambda (decl)
                 `(code "var " ,(first decl) " = " ,(third decl) ";" *newline*))
               decls)
     ,@(mapcar (lambda (decl)
                 `(code "if (typeof " ,(first decl) " != '" ,(second decl) "')" *newline*
                        (indent "throw 'The value ' + "
                                ,(first decl)
                                " + ' is not a type "
                                ,(second decl)
                                ".';"
                                *newline*)))
               decls)
     (code "return " (progn ,@body) ";" *newline*)))

;;; VARIABLE-ARITY compiles variable arity operations. ARGS stands for
;;; a variable which holds a list of forms. It will compile them and
;;; store the result in some Javascript variables. BODY is evaluated
;;; with ARGS bound to the list of these variables to generate the
;;; code which performs the transformation on these variables.

(defun variable-arity-call (args function)
  (unless (consp args)
    (error "ARGS must be a non-empty list"))
  (let ((counter 0)
        (fargs '())
        (prelude ""))
    (dolist (x args)
      (if (numberp x)
          (push (integer-to-string x) fargs)
          (let ((v (code "x" (incf counter))))
            (push v fargs)
            (concatf prelude
              (code "var " v " = " (ls-compile x) ";" *newline*
                    "if (typeof " v " !== 'number') throw 'Not a number!';"
                    *newline*)))))
    (js!selfcall prelude (funcall function (reverse fargs)))))


(defmacro variable-arity (args &body body)
  (unless (symbolp args)
    (error "Bad usage of VARIABLE-ARITY, you must pass a symbol"))
  `(variable-arity-call ,args
                        (lambda (,args)
                          (code "return " ,@body ";" *newline*))))

(defun num-op-num (x op y)
  (type-check (("x" "number" x) ("y" "number" y))
    (code "x" op "y")))

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
	  (concat "1 /" (car args))
	  (join args "/")))))

(define-builtin mod (x y) (num-op-num x "%" y))


(defun comparison-conjuntion (vars op)
  (cond
    ((null (cdr vars))
     "true")
    ((null (cddr vars))
     (concat (car vars) op (cadr vars)))
    (t
     (concat (car vars) op (cadr vars)
	     " && "
	     (comparison-conjuntion (cdr vars) op)))))

(defmacro define-builtin-comparison (op sym)
  `(define-raw-builtin ,op (x &rest args)
     (let ((args (cons x args)))
       (variable-arity args
	 (js!bool (comparison-conjuntion args ,sym))))))

(define-builtin-comparison > ">")
(define-builtin-comparison < "<")
(define-builtin-comparison >= ">=")
(define-builtin-comparison <= "<=")
(define-builtin-comparison = "==")

(define-builtin numberp (x)
  (js!bool (code "(typeof (" x ") == \"number\")")))

(define-builtin floor (x)
  (type-check (("x" "number" x))
    "Math.floor(x)"))

(define-builtin cons (x y)
  (code "({car: " x ", cdr: " y "})"))

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

(define-builtin rplaca (x new)
  (type-check (("x" "object" x))
    (code "(x.car = " new ", x)")))

(define-builtin rplacd (x new)
  (type-check (("x" "object" x))
    (code "(x.cdr = " new ", x)")))

(define-builtin symbolp (x)
  (js!bool
   (js!selfcall
     "var tmp = " x ";" *newline*
     "return (typeof tmp == 'object' && 'name' in tmp);" *newline*)))

(define-builtin make-symbol (name)
  (type-check (("name" "string" name))
    "({name: name})"))

(define-builtin symbol-name (x)
  (code "(" x ").name"))

(define-builtin set (symbol value)
  (code "(" symbol ").value = " value))

(define-builtin fset (symbol value)
  (code "(" symbol ").fvalue = " value))

(define-builtin boundp (x)
  (js!bool (code "(" x ".value !== undefined)")))

(define-builtin symbol-value (x)
  (js!selfcall
    "var symbol = " x ";" *newline*
    "var value = symbol.value;" *newline*
    "if (value === undefined) throw \"Variable `\" + symbol.name + \"' is unbound.\";" *newline*
    "return value;" *newline*))

(define-builtin symbol-function (x)
  (js!selfcall
    "var symbol = " x ";" *newline*
    "var func = symbol.fvalue;" *newline*
    "if (func === undefined) throw \"Function `\" + symbol.name + \"' is undefined.\";" *newline*
    "return func;" *newline*))

(define-builtin symbol-plist (x)
  (code "((" x ").plist || " (ls-compile nil) ")"))

(define-builtin lambda-code (x)
  (code "(" x ").toString()"))

(define-builtin eq    (x y) (js!bool (code "(" x " === " y ")")))
(define-builtin equal (x y) (js!bool (code "(" x  " == " y ")")))

(define-builtin char-to-string (x)
  (type-check (("x" "number" x))
    "String.fromCharCode(x)"))

(define-builtin stringp (x)
  (js!bool (code "(typeof(" x ") == \"string\")")))

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
    (when b (code "b = " (ls-compile b) ";" *newline*))
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
  (js!selfcall
    "var f = " (ls-compile func) ";" *newline*
    "return (typeof f === 'function'? f: f.fvalue)("
    (join (cons (if *multiple-value-p* "values" "pv")
                (mapcar #'ls-compile args))
          ", ")
    ")"))

(define-raw-builtin apply (func &rest args)
  (if (null args)
      (code "(" (ls-compile func) ")()")
      (let ((args (butlast args))
            (last (car (last args))))
        (js!selfcall
          "var f = " (ls-compile func) ";" *newline*
          "var args = [" (join (cons (if *multiple-value-p* "values" "pv")
                                     (mapcar #'ls-compile args))
                               ", ")
          "];" *newline*
          "var tail = (" (ls-compile last) ");" *newline*
          "while (tail != " (ls-compile nil) "){" *newline*
          "    args.push(tail.car);" *newline*
          "    tail = tail.cdr;" *newline*
          "}" *newline*
          "return (typeof f === 'function'? f : f.fvalue).apply(this, args);" *newline*))))

(define-builtin js-eval (string)
  (type-check (("string" "string" string))
    (if *multiple-value-p*
        (js!selfcall
          "var v = eval.apply(window, [string]);" *newline*
          "if (typeof v !== 'object' || !('multiple-value' in v)){" *newline*
          (indent "v = [v];" *newline*
                  "v['multiple-value'] = true;" *newline*)
          "}" *newline*
          "return values.apply(this, v);" *newline*)
        "eval.apply(window, [string])")))

(define-builtin error (string)
  (js!selfcall "throw " string ";" *newline*))

(define-builtin new () "{}")

(define-builtin objectp (x)
  (js!bool (code "(typeof (" x ") === 'object')")))

(define-builtin oget (object key)
  (js!selfcall
    "var tmp = " "(" object ")[" key "];" *newline*
    "return tmp == undefined? " (ls-compile nil) ": tmp ;" *newline*))

(define-builtin oset (object key value)
  (code "((" object ")[" key "] = " value ")"))

(define-builtin in (key object)
  (js!bool (code "((" key ") in (" object "))")))

(define-builtin functionp (x)
  (js!bool (code "(typeof " x " == 'function')")))

(define-builtin write-string (x)
  (type-check (("x" "string" x))
    "lisp.write(x)"))

(define-builtin make-array (n)
  (js!selfcall
    "var r = [];" *newline*
    "for (var i = 0; i < " n "; i++)" *newline*
    (indent "r.push(" (ls-compile nil) ");" *newline*)
    "return r;" *newline*))

(define-builtin arrayp (x)
  (js!bool
   (js!selfcall
     "var x = " x ";" *newline*
     "return typeof x === 'object' && 'length' in x;")))

(define-builtin aref (array n)
  (js!selfcall
    "var x = " "(" array ")[" n "];" *newline*
    "if (x === undefined) throw 'Out of range';" *newline*
    "return x;" *newline*))

(define-builtin aset (array n value)
  (js!selfcall
    "var x = " array ";" *newline*
    "var i = " n ";" *newline*
    "if (i < 0 || i >= x.length) throw 'Out of range';" *newline*
    "return x[i] = " value ";" *newline*))

(define-builtin get-unix-time ()
  (code "(Math.round(new Date() / 1000))"))

(define-builtin values-array (array)
  (if *multiple-value-p*
      (code "values.apply(this, " array ")")
      (code "pv.apply(this, " array ")")))

(define-raw-builtin values (&rest args)
  (if *multiple-value-p*
      (code "values(" (join (mapcar #'ls-compile args) ", ") ")")
      (code "pv(" (join (mapcar #'ls-compile args) ", ") ")")))

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
  (let* ((values-funcs (if *multiple-value-p* "values" "pv"))
         (arglist (concat "(" (join (cons values-funcs (mapcar #'ls-compile args)) ", ") ")")))
    (cond
      ((translate-function function)
       (concat (translate-function function) arglist))
      ((and (symbolp function)
            #+ecmalisp (eq (symbol-package function) (find-package "COMMON-LISP"))
            #+common-lisp t)
       (code (ls-compile `',function) ".fvalue" arglist))
      (t
       (code (ls-compile `#',function) arglist)))))

(defun ls-compile-block (sexps &optional return-last-p)
  (if return-last-p
      (code (ls-compile-block (butlast sexps))
            "return " (ls-compile (car (last sexps)) *multiple-value-p*) ";")
      (join-trailing
       (remove-if #'null-or-empty-p (mapcar #'ls-compile sexps))
       (concat ";" *newline*))))

(defun ls-compile (sexp &optional multiple-value-p)
  (let ((*multiple-value-p* multiple-value-p))
    (cond
      ((symbolp sexp)
       (let ((b (lookup-in-lexenv sexp *environment* 'variable)))
         (cond
           ((and b (not (member 'special (binding-declarations b))))
            (binding-value b))
           ((or (keywordp sexp)
                (member 'constant (binding-declarations b)))
            (code (ls-compile `',sexp) ".value"))
           (t
            (ls-compile `(symbol-value ',sexp))))))
      ((integerp sexp) (integer-to-string sexp))
      ((stringp sexp) (code "\"" (escape-string sexp) "\""))
      ((arrayp sexp) (literal sexp))
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
                (ls-compile (ls-macroexpand-1 sexp) multiple-value-p)
                (compile-funcall name args))))))
      (t
       (error (concat "How should I compile " (prin1-to-string sexp) "?"))))))


(defvar *compile-print-toplevels* nil)

(defun truncate-string (string &optional (width 60))
    (let ((size (length string))
          (n (or (position #\newline string)
                 (min width (length string)))))
      (subseq string 0 n)))

(defun ls-compile-toplevel (sexp &optional multiple-value-p)
  (let ((*toplevel-compilations* nil))
    (cond
      ((and (consp sexp) (eq (car sexp) 'progn))
       (let ((subs (mapcar (lambda (s)
                             (ls-compile-toplevel s t))
                           (cdr sexp))))
         (join (remove-if #'null-or-empty-p subs))))
      (t
       (when *compile-print-toplevels*
         (let ((form-string (prin1-to-string sexp)))
           (write-string "Compiling ")
           (write-string (truncate-string form-string))
           (write-line "...")))
       
       (let ((code (ls-compile sexp multiple-value-p)))
         (code (join-trailing (get-toplevel-compilations)
                              (code ";" *newline*))
               (when code
                 (code code ";" *newline*))))))))


;;; Once we have the compiler, we define the runtime environment and
;;; interactive development (eval), which works calling the compiler
;;; and evaluating the Javascript result globally.

#+ecmalisp
(progn
  (defun eval (x)
    (js-eval (ls-compile-toplevel x t)))

  (export '(&rest &key &optional &body * *gensym-counter* *package* + - / 1+ 1- <
            <= = = > >= and append apply aref arrayp assoc atom block boundp
            boundp butlast caar cadddr caddr cadr car car case catch cdar cdddr
            cddr cdr cdr char char-code fdefinition find-package find-symbol first
            flet fourth fset funcall function functionp gensym get-setf-expansion
            get-universal-time go identity if in-package incf integerp integerp
            intern keywordp labels lambda last length let let* char= code-char
            cond cons consp constantly copy-list decf declaim define-setf-expander
            defconstant defparameter defun defmacro defvar digit-char digit-char-p
            disassemble do do* documentation dolist dotimes ecase eq eql equal
            error eval every export list-all-packages list list* listp loop make-array
            make-package make-symbol mapcar member minusp mod multiple-value-bind
            multiple-value-call multiple-value-list multiple-value-prog1 nconc nil not
            nth nthcdr null numberp or package-name package-use-list packagep
            parse-integer plusp prin1-to-string print proclaim prog1 prog2 progn
            psetq push quote nreconc remove remove-if remove-if-not return return-from
            revappend reverse rplaca rplacd second set setf setq some
            string-upcase string string= stringp subseq symbol-function
            symbol-name symbol-package symbol-plist symbol-value symbolp t tagbody
            third throw truncate unless unwind-protect values values-list variable
            warn when write-line write-string zerop))

  (setq *package* *user-package*)

  (js-eval "var lisp")
  (js-vset "lisp" (new))
  (js-vset "lisp.read" #'ls-read-from-string)
  (js-vset "lisp.print" #'prin1-to-string)
  (js-vset "lisp.eval" #'eval)
  (js-vset "lisp.compile" (lambda (s) (ls-compile-toplevel s t)))
  (js-vset "lisp.evalString" (lambda (str) (eval (ls-read-from-string str))))
  (js-vset "lisp.compileString" (lambda (str) (ls-compile-toplevel (ls-read-from-string str) t)))

  ;; Set the initial global environment to be equal to the host global
  ;; environment at this point of the compilation.
  (eval-when-compile
    (toplevel-compilation
     (ls-compile `(setq *environment* ',*environment*))))

  (eval-when-compile
    (toplevel-compilation
     (ls-compile
      `(progn
         ,@(mapcar (lambda (s) `(%intern-symbol (js-vref ,(cdr s))))
                   *literal-symbols*)
         (setq *literal-symbols* ',*literal-symbols*)
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

  (defun ls-compile-file (filename output &key print)
    (let ((*compiling-file* t)
          (*compile-print-toplevels* print))
      (with-open-file (out output :direction :output :if-exists :supersede)
        (write-string (read-whole-file "prelude.js") out)
        (let* ((source (read-whole-file filename))
               (in (make-string-stream source)))
          (loop
             for x = (ls-read in)
             until (eq x *eof*)
             for compilation = (ls-compile-toplevel x)
             when (plusp (length compilation))
             do (write-string compilation out))))))

  (defun bootstrap ()
    (setq *environment* (make-lexenv))
    (setq *literal-symbols* nil)
    (setq *variable-counter* 0
          *gensym-counter* 0
          *literal-counter* 0
          *block-counter* 0)
    (ls-compile-file "ecmalisp.lisp" "ecmalisp.js" :print t)))
