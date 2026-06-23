;;; -*- mode:lisp; coding:utf-8 -*-
;;;
;;; Issue #616: a toplevel SETF of a place whose access-fn has no
;;; setf-expander (a user-defined (setf qqq), or ELT) used to crash with
;;; "Unbound variable JSCL::*FN-INFO*".
;;;
;;; Fed to a fresh jscl-node.js REPL on stdin by run-tests.sh, so each
;;; SETF is a BARE toplevel form macroexpanded at the outermost eval
;;; level -- the only place the bug reproduces. Lines beginning with
;;; ";;; expect" are assertions checked against the REPL session output.
;;;
;;; expect: CL-USER> 200
;;; expect: (1 2 3 A 5)
;;; expect-not: *FN-INFO*
;;; expect-not: Unbound variable

(defun (setf qqq) (a b) (declare (ignore b)) a)
(setf (qqq 100) 200)

(defparameter *l* (list 1 2 3 4 5))
(setf (elt *l* 3) 'a)
*l*
