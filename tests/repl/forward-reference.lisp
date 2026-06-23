;;; -*- mode:lisp; coding:utf-8 -*-
;;;
;;; Undefined-function warning on a forward reference.
;;;
;;; Fed to a fresh jscl-node.js REPL on stdin by run-tests.sh, so each
;;; form is evaluated at the outermost eval level (like typing at the
;;; prompt). Lines beginning with ";;; expect" are assertions checked
;;; against the REPL session output.
;;;
;;; Defining F (which calls the still-undefined G) must warn once;
;;; defining G afterwards must not warn again. Then (F) returns 4242. The
;;; same holds when the two defuns are wrapped in one toplevel PROGN --
;;; each subform of a toplevel progn is processed independently.
;;;
;;; expect-once: The function `G' is undefined.
;;; expect-once: The function `K' is undefined.
;;; expect: 4242
;;; expect: 7777

(defun f () (g))
(defun g () 4242)
(f)

(progn
  (defun h () (k))
  (defun k () 7777))
(h)
