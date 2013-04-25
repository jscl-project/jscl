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

#+common-lisp
(eval-when (:load-toplevel :compile-toplevel :execute)
  (load "compat")
  (load "utils")
  (load "print")
  (load "read")
  (load "compiler"))

;;; Once we have the compiler, we define the runtime environment and
;;; interactive development (eval), which works calling the compiler
;;; and evaluating the Javascript result globally.

#+ecmalisp
(progn
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

  (defun ls-compile-file (filename out &key print)
    (let ((*compiling-file* t)
          (*compile-print-toplevels* print))
      (let* ((source (read-whole-file filename))
             (in (make-string-stream source)))
        (format t "Compiling ~a...~%" filename)
        (loop
           for x = (ls-read in)
           until (eq x *eof*)
           for compilation = (ls-compile-toplevel x)
           when (plusp (length compilation))
           do (write-string compilation out)))))

  (defun bootstrap ()
    (setq *environment* (make-lexenv))
    (setq *literal-symbols* nil)
    (setq *variable-counter* 0
          *gensym-counter* 0
          *literal-counter* 0
          *block-counter* 0)
    (with-open-file (out "ecmalisp.js" :direction :output :if-exists :supersede)
      (write-string (read-whole-file "prelude.js") out)
      (dolist (file '("boot.lisp"
                      "utils.lisp"
                      "print.lisp"
                      "read.lisp"
                      "compiler.lisp"
                      "ecmalisp.lisp"))
        (ls-compile-file file out)))))
