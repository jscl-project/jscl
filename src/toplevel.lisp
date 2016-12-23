;;; toplevel.lisp —

;; Copyright © 2012, 2013, 2014 David Vazquez
;;; Copyright © 2012 Raimon Grau

;; JSCL is free software: you can redistribute it and/or modify it under
;; the terms of the GNU General  Public License as published by the Free
;; Software Foundation,  either version  3 of the  License, or  (at your
;; option) any later version.
;;
;; JSCL is distributed  in the hope that it will  be useful, but WITHOUT
;; ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
;; FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
;; for more details.
;;
;; You should  have received a  copy of  the GNU General  Public License
;; along with JSCL. If not, see <http://www.gnu.org/licenses/>.

(in-package :jscl)

(/debug "loading toplevel.lisp!")

(defun jscl/cl::eval (x)
  #+jscl
  (js-eval (with-compilation-environment
             (compile-toplevel x t t)))
  #-jscl
  (eval x))

(defvar jscl/cl::* nil)
(defvar jscl/cl::** nil)
(defvar jscl/cl::*** nil)
(defvar jscl/cl::/ nil)
(defvar jscl/cl::// nil)
(defvar jscl/cl::/// nil)
(defvar jscl/cl::+ nil)
(defvar jscl/cl::++ nil)
(defvar jscl/cl::+++ nil)
(defvar jscl/cl::- nil)

(defun eval-interactive (x)
  (setf jscl/cl::- x)
  (handler-case
      (let ((results (multiple-value-list (eval x))))
        (setf jscl/cl::/// jscl/cl:://
              jscl/cl::// jscl/cl::/
              jscl/cl::/ results
              jscl/cl::*** jscl/cl::**
              jscl/cl::** jscl/cl::*
              jscl/cl::* (car results)))
    (serious-condition (c)
      (format *terminal-io* "~a~%~10t(Condition of type ~:(~a~)"
              c (type-of c))
      (return-from eval-interactive nil)))
  (unless (boundp 'jscl/cl::*)
    (setf jscl/cl::* nil))
  (setf jscl/cl::+++ jscl/cl::++
        jscl/cl::++ jscl/cl::+
        jscl/cl::+ jscl/cl::-)
  (values-list jscl/cl::/))

(setq jscl/cl::*package* *user-package*)

(defun compilation-notice ()
  #.(multiple-value-bind (second minute hour date month year)
        (get-decoded-time)
      (declare (ignore second minute hour))
      (format nil "built on ~d ~a ~d"
              date
              (elt #("" "January" "February" "March" "April" "May" "June"
                     "July" "August" "September" "October" "November"
                     "December")
                   month)
              year)))

(when (and (string/= (jscl/js::%js-typeof |module|) "undefined")
           (string= (jscl/js::%js-typeof |phantom|) "undefined"))
  (push :node *features*))

(defun :copying ()
  (format t "~&~|
~v<~;⸨☕λ⸩~;~>~:*
~v<~;𝓙𝓢ℂ𝕃~;~>
 JavaScript (hosting) Common Lisp

Copyright © 2012-2014 David Vázquez
Copyright © 2012 Raimon Grau

JSCL is  Free Software: you can  redistribute it and/or modify  it under
the terms  of the GNU  General Public License  as published by  the Free
Software  Foundation, either  version  3  of the  License,  or (at  your
option) any later version.

JSCL is distributed in the hope that  it will be useful, but WITHOUT ANY
WARRANTY;  without  even  the  implied warranty  of  MERCHANTABILITY  or
FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
more details.

You should  have received a  copy of  the GNU General  Public License
along with JSCL. If not, see <http://www.gnu.org/licenses/>."
          *print-right-margin*)
  (when (y-or-n-p "Would you like to read the GNU GPL now?")
    (princ #.(with-open-file (s (jscl/bootstrap::source-pathname "COPYING.GPLv3" 
                                                                 :directory '(:relative))
                                :direction :input)
               (jscl/bootstrap::read-whole-file s))))
  (values))

(defun :credits ()
  (format  t "~&~@[This version of ~]~
JSCL contains contributions by~
~:[ many people. ~
~;:~
:~:*~{~%~a~^~32t	~a~}~]"
           (jscl/bootstrap::git-credits))
  (values))

(defun welcome-message ()
  (format t "~&~v<~;⸨☕λ⸩~;~>~:*
~v<~;𝓙𝓢ℂ𝕃~;~>
 ~a ~@[(Romance Ⅱ fork) ~]version ~a,
Git commit ~a; ~a

 Copyright © 2012-2014 David Vázquez Púa
 Copyright © 2012 Raimon Grau

JSCL  is  a Common  Lisp  implementation  on  Javascript. JSCL  is  Free
Software: you can redistribute it and/or modify it, but it comes with NO
warranty. For details, type (:COPYING)⮰.
"
          *print-right-margin*
          #.(violet-volts-p) (lisp-implementation-version)
          #.(git-commit)
          (lisp-implementation-type)
          (compilation-notice))
  (if (find :node *features*)
      (format t "For more information, visit the project page at ~
https://github.com/jscl-project/jscl.~%~%")
      (format t "For more information, visit the project page on ~
 <a href=\"https://github.com/jscl-project/jscl\">GitHub</a>.~%~%")))

;;; Basic *standard-output*  stream. This  will usually be  overriden by
;;; web or node REPL.
(setq jscl/cl::*standard-output* (make-web-console-output-stream))

#+jscl
(if (find :node *features*)
    (setq jscl/ffi:*root* (jscl/js::%js-vref "global"))
    (setq jscl/ffi:*root* (jscl/js::%js-vref "window")))

(defun node-require (name)
 ;;; NOTE renamed  from just  “require” because that's  a CLtL  (but not
 ;;; ANSI CL) module function and we'll  almost certainly want to use it
 ;;; in that way. However, if we  can use Node and/or Closure modules to
 ;;; package Lisp  systems, then (REQUIRE NAME  PATHNAME) where PATHNAME
 ;;; is a URI would be a bit of awesomeness.
  (if (find :node *features*)
      (funcall (jscl/js::%js-vref "require") name)))
