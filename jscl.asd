;;;; jscl.asd — ASDF system definition for JSCL. -*- Lisp -*-
;;;
;;; WARNING: This isn't yet useful for loading JSCL.

(cl:in-package :cl-user)
(defpackage :jscl/asdf (:use :cl :asdf))
(in-package :jscl/asdf)

;;; DUPLICATED from jscl.lisp

(defvar *base-directory*
  (if #.*load-pathname*
      (make-pathname :name nil :type nil :defaults #.*load-pathname*)
      *default-pathname-defaults*))

(defun extract-version-from-package.json ()
  (with-open-file (in (merge-pathnames "package.json" *base-directory*))
    (loop
      for line = (read-line in nil)
      while line
      when (search "\"version\":" line)
        do (let ((colon (position #\: line))
                 (comma (position #\, line)))
             (return (string-trim '(#\newline #\" #\tab #\space)
                                  (subseq line (1+ colon) comma)))))))

(defsystem jscl
  :version #.(extract-version-from-package.json)
  :author "David Vazquez, Raimon Grau, and others"
  :license "GNU GPL v3+"
  :bug-tracker "https://github.com/jscl-project/jscl/issues"
  :description "A Common Lisp implementation that writes JavaScript output"
  :long-description "JSCL aims to  become a mostly ANSI-compliant Common
 Lisp implementation which produces code in JavaScript as its output."
  :components
  ((:file "jscl")
   (:module "src"
    :components
    (#+jscl (:file "boot")
     #+jscl (:file "early-char")
     #-jscl (:file "compat")
     #+jscl (:file "setf")
     (:file "utils")
     (:file "defstruct")
     #+jscl (:file "types")
     (:file "lambda-list")
     #+jscl (:file "numbers")
     #+jscl (:file "char")
     #+jscl (:file "list")
     #+jscl (:file "array")
     #+jscl (:file "string")
     #+jscl (:file "sequence")
     #+jscl (:file "stream")
     #+jscl (:file "hash-table")
     #+jscl (:file "print")
     #+jscl (:file "misc")
     #+jscl (:file "ffi")
     #+jscl (:file "symbol")
     (:file "package")
     (:module "ansiloop"
      :components (#+ (or) (:file "extended-loop.lisp")
                      (:file "ansi-loop")))
     (:file "read")
     (:file "conditions")
     (:file "backquote")
     (:module "compiler"
      :components ((:file "compiler")
                   (:file "codegen")
                   (:file "compile-file")))
     #+jscl (:file "documentation")
     #+jscl (:file "toplevel")))))
