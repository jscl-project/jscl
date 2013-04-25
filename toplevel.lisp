(defun eval (x)
  (js-eval (ls-compile-toplevel x t)))

(defvar * nil)
(defvar ** nil)
(defvar *** nil)
(defvar / nil)
(defvar // nil)
(defvar /// nil)
(defvar + nil)
(defvar ++ nil)
(defvar +++ nil)
(defvar - nil)

(defun eval-interactive (x)
  (setf - x)
  (let ((results (multiple-value-list (eval x))))
    (setf /// //
          // /
          / results
          *** **
          ** *
          * (car results)))
  (setf +++ ++
        ++ +
        + -)
  (values-list /))

(export '(&body &key &optional &rest * *gensym-counter* *package* + - / 1+ 1- <
          <= = = > >= and append apply aref arrayp assoc atom block
          boundp boundp butlast caar cadddr caddr cadr car car case
          catch cdar cdddr cddr cdr cdr char char-code char=
          code-char cond cons consp constantly copy-list decf
          declaim defconstant define-setf-expander
          define-symbol-macro defmacro defparameter defun defvar
          digit-char digit-char-p disassemble do do* documentation
          dolist dotimes ecase eq eql equal error eval every export
          fdefinition find-package find-symbol first flet fourth
          fset funcall function functionp gensym get-setf-expansion
          get-universal-time go identity if in-package incf integerp
          integerp intern keywordp labels lambda last length let
          let* list list* list-all-packages listp loop make-array
          make-package make-symbol mapcar member minusp mod
          multiple-value-bind multiple-value-call
          multiple-value-list multiple-value-prog1 nconc nil not
          nreconc nth nthcdr null numberp or package-name
          package-use-list packagep parse-integer plusp
          prin1-to-string print proclaim prog1 prog2 progn psetq
          push quote remove remove-if remove-if-not return
          return-from revappend reverse rplaca rplacd second set
          setf setq some string string-upcase string= stringp subseq
          symbol-function symbol-name symbol-package symbol-plist
          symbol-value symbolp t tagbody third throw truncate unless
          unwind-protect values values-list variable warn when
          write-line write-string zerop ** *** // /// ++ +++))

(setq *package* *user-package*)

(js-eval "var lisp")
(%js-vset "lisp" (new))
(%js-vset "lisp.read" #'ls-read-from-string)
(%js-vset "lisp.print" #'prin1-to-string)
(%js-vset "lisp.eval" #'eval)
(%js-vset "lisp.compile" (lambda (s) (ls-compile-toplevel s t)))
(%js-vset "lisp.evalString" (lambda (str) (eval (ls-read-from-string str))))
(%js-vset "lisp.evalInput" (lambda (str) (eval-interactive (ls-read-from-string str))))
(%js-vset "lisp.compileString" (lambda (str) (ls-compile-toplevel (ls-read-from-string str) t)))

;; Set the initial global environment to be equal to the host global
;; environment at this point of the compilation.
(eval-when-compile
  (toplevel-compilation
   (ls-compile `(setq *environment* ',*environment*))))

(eval-when-compile
  (toplevel-compilation
   (ls-compile
    `(progn
       ,@(mapcar (lambda (s) `(%intern-symbol (%js-vref ,(cdr s))))
                 *literal-symbols*)
       (setq *literal-symbols* ',*literal-symbols*)
       (setq *variable-counter* ,*variable-counter*)
       (setq *gensym-counter* ,*gensym-counter*)
       (setq *block-counter* ,*block-counter*)))))

(eval-when-compile
  (toplevel-compilation
   (ls-compile
    `(setq *literal-counter* ,*literal-counter*))))
