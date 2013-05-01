;;; toplevel.lisp ---

;; Copyright (C) 2012, 2013 David Vazquez
;; Copyright (C) 2012 Raimon Grau

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
  (unless (boundp '*)
    ;; FIXME: Handle error
    (setf * nil))
  (setf +++ ++
        ++ +
        + -)
  (values-list /))

(export '(&body &key &optional &rest * ** *** *gensym-counter* *package* + ++
          +++ - / // /// 1+ 1- < <= = = > >= and append apply aref arrayp
          assoc atom block boundp butlast cadar caaar caadr cdaar cdadr
          cddar caaaar caaadr caadar caaddr cadaar cadadr caddar cdaaar
          cdaadr cdadar cdaddr cddaar cddadr cdddar cddddr caar cadddr caddr
          cadr car car case catch cdar cdddr cddr cdr cdr char
          char-code char= code-char cond cons consp constantly
          copy-list copy-tree decf declaim declare defconstant define-setf-expander
          define-symbol-macro defmacro defparameter defun defvar
          digit-char digit-char-p disassemble do do* documentation
          dolist dotimes ecase eq eql equal error eval every export expt
          fdefinition find-package find-symbol first flet fourth fset
          funcall function functionp gensym get-internal-real-time
          get-setf-expansion get-universal-time go identity if in-package
          incf integerp intern keywordp labels lambda last length let let* list
          list* list-all-packages listp loop make-array make-package
          make-symbol mapcar member minusp mod multiple-value-bind
          multiple-value-call multiple-value-list multiple-value-prog1
          nconc nil not nreconc nth nthcdr null numberp or
          package-name package-use-list packagep parse-integer plusp pop
          prin1-to-string print proclaim prog1 prog2 progn psetq push
          quote read-from-string remove remove-if remove-if-not return
          return-from revappend reverse rplaca rplacd second set setf
          setq some string string-upcase string= stringp subseq subst
          symbol-function symbol-name symbol-package symbol-plist
          symbol-value symbolp t tagbody third throw truncate unless
          unwind-protect values values-list variable warn when write-line
          write-string zerop))

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
                 *literal-table*)
       (setq *literal-table* ',*literal-table*)
       (setq *variable-counter* ,*variable-counter*)
       (setq *gensym-counter* ,*gensym-counter*)
       (setq *block-counter* ,*block-counter*)))))

(eval-when-compile
  (toplevel-compilation
   (ls-compile
    `(setq *literal-counter* ,*literal-counter*))))
