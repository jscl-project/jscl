;;; jscl.lisp— JavaScript from Common Lisp

;; Copyright (C) 2012, 2013 David Vazquez Copyright (C) 2012 Raimon Grau

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

(defpackage :jscl
  (:use :cl #+sbcl :sb-gray)
  (:export #:bootstrap #:bootstrap-core
           #:run-tests-in-host #:with-sharp-j #:read-#j
           #:write-javascript-for-files #:compile-application)
  (:documentation "JavaScript  from Common  Lisp. This  package contains
  the   internals   and   exports    some   utility   functions   needed
  for compilation.

When  you  build JSCL,  you'll  invoke  JSCL:Boostrap-Core in  the  host
compiler (probably SBCL) to build the  system. Once you're “in” the JSCL
implementation, you may never need to access this package directly."))

(defpackage :jscl/ffi
  (:use :cl :jscl)
  (:export #:oget #:oget* #:make-new #:new #:*root*
           #:oset #:oset*)
  (:documentation       "Foreign       Function       Interface       to
  JavaScript functions."))

(defpackage :jscl/cltl2
  (:use :cl :jscl)
  (:nicknames :cltl2)
  (:export #:declaration-information)
  (:documentation  "Functions  defined  in Common  Lisp:  The  Language,
  Second Edition (CLtL2) which are unique to that book.

Very little of this set is  implemented; but this package exists to make
identifying them (and their provenance) easier."))

(defpackage :jscl/mop
  (:use :cl :jscl)
  (:nicknames :mop)
  (:export)
  (:documentation  "Functions  defined in  the  Art  of the  Meta-Object
  Protocol (MOP) which are unique to that manuscript.

Very  few of  these are  implemented, but  this package  exists to  make
identifying them (and their provenance) easier."))

(defpackage jscl/test
  (:use :cl #+sbcl :bordeaux-threads)
  (:export #:run)
  (:documentation "This package contains  the test running architecture,
 and is used as the active package for most of the tests as well."))

(defpackage repl-web
  (:use :cl :jscl :jscl/ffi))

(defpackage repl-node
  (:use :cl :jscl :jscl/ffi))

#+sbcl (require 'bordeaux-threads)

(in-package :jscl)

(defvar *base-directory*
  (if #.*load-pathname*
      (make-pathname :name nil :type nil :defaults #.*load-pathname*)
      *default-pathname-defaults*))

(defvar *version*
  (with-open-file (in (merge-pathnames "package.json" *base-directory*))
    (loop
       for line = (read-line in nil)
       while line
       when (search "\"version\":" line)
       do (let ((colon (position #\: line))
                (comma (position #\, line)))
            (return (string-trim '(#\newline #\" #\tab #\space)
                                 (subseq line (1+ colon) comma))))))
  "Read  the version  from the  package.json  file. We  could have  used
 a JSON library  to parse this, but that would  introduce a dependency
 and we are not using ASDF yet.")

(defparameter *source*
  '(("boot"          :target)
    ("early-char" 	:target)
    ("compat"        :host)
    ("setf"          :target)
    ("utils"         :both)
    ("defstruct"     :both)
    ("types"	:both)
    ("lambda-list"   :both)
    ("numbers"       :target)
    ("char"          :target)
    ("list"          :target)
    ("array"         :target)
    ("string"        :target)
    ("sequence"      :target)
    ("stream"        :target)
    ("hash-table"    :target)
    ("print"         :target)
    ("misc"          :target)
    ("ffi"           :target)
    ("symbol"        :target)
    ("package"       :target)
    ("ansiloop"
     ("ansi-loop"    :both))
    ("read"          :both)
    ("conditions"    :both)
    ("backquote"     :both)
    ("compiler"
     ("codegen"      :both)
     ("compiler"     :both))
    ("documentation" :target)
    ("toplevel" 	:target))
  "List of  all the source files  that need to be  compiled, and whether
they are  to be compiled  just by  the host, by  the target JSCL,  or by
both.  All files  have a  `.lisp' extension,  and are  relative to  src/
Subdirectories  are indicated  by the  presence  of a  list rather  than
a keyword  in the second  element of the  list.

For example,  this list:

\((\"foo\" :target) \(\"bar\" (\"baz\"  :host) \(\"quux\" :both)))

Means that src/foo.lisp and src/bar/quux.lisp need to be compiled in the
target,  and  that src/bar/baz.lisp  and  src/bar/quux.lisp  need to  be
compiled in the host
")

(defun source-pathname (filename
                        &key (directory '(:relative "src"))
                             (type nil) (defaults filename))
  (merge-pathnames
   (if type
       (make-pathname :type type :directory directory :defaults defaults)
       (make-pathname            :directory directory :defaults defaults))
   *base-directory*))

(defun get-files (file-list type dir)
  "Traverse FILE-LIST and retrieve a list of the files within which match
 either TYPE or :BOTH, processing subdirectories."
  (let ((file (car file-list)))
    (cond
      ((null file-list)
       ())
      ((listp (cadr file))
       (append
        (get-files (cdr file)      type (append dir (list (car file))))
        (get-files (cdr file-list) type dir)))
      ((member (cadr file) (list type :both))
       (cons (source-pathname (car file) :directory dir :type "lisp")
             (get-files (cdr file-list) type dir)))
      (t
       (get-files (cdr file-list) type dir)))))

(defmacro do-source (name type &body body)
  "Iterate over all the source files that need to be compiled in the host or
 the target, depending on the TYPE argument."
  (unless (member type '(:host :target))
    (error "TYPE must be one of :HOST or :TARGET, not ~S" type))
  `(dolist (,name (get-files *source* ,type '(:relative "src")))
     ,@body))

;;; Compile and load jscl into the host
(defun load-jscl ()
  (with-compilation-unit ()
    (do-source input :host
      (multiple-value-bind (fasl warn fail) (compile-file input)
        (declare (ignore warn))
        (when fail
          (error "Compilation of ~A failed." input))
        (load fasl)))))

;;;; Load JSCL into the host implementation.

(load-jscl)

(defun read-whole-file (filename)
  (with-open-file (in filename)
    ;; FILE-LENGTH is  in bytes,  not characters. UTF-8  characters will
    ;; yield  a shorter  read,  with trailing  #\NULL  bytes, unless  we
    ;; initialize to spaces. It's a hack, but it's a cheap enough one.
    (let ((seq (make-string (file-length in) :initial-element #\space)))
      (read-sequence seq in)
      seq)))

(defun possibly-valid-js-p (string)
  (if (characterp string)
      (or (graphic-char-p string)
          (char= #\newline string))
      (every (lambda (ch)
               (or (graphic-char-p ch)
                   (char= #\newline ch)))
             string)))

(defun complain-about-illegal-chars (form in compilation)
  (error "Generated illegal characters (first is ~@c)~%Compiling form:~%~S~%from ~s~%Generated:~%~s"
         (find-if (complement #'possibly-valid-js-p) compilation)
         form in compilation))

(defun !compile-file/form (form in out)
  (let ((compilation (compile-toplevel form)))
    (if (possibly-valid-js-p compilation)
        (when (plusp (length compilation))
          (write-string compilation out))
        (complain-about-illegal-chars form in compilation))))

(defmacro with-compile-file-bindings ((filename &key verbosep) &body body)
  `(let* ((*compiling-file* t)
          (*compile-file-pathname* ,filename)
          (*compile-file-truename* (truename *compile-file-pathname*))
          (*compile-print-toplevels* ,verbosep)
          (*package* *package*)
          (source (read-whole-file ,filename))
          (in (make-string-input-stream source))
          (form-count 0)
          (last-form nil))
     ,@body))

(defun percentage (portion total)
  (round (* 100 (/ portion total))))

(let ((compiled-form-timer 0)
      (last-reported-% -1)
      (compiling-source nil))

  (defun time-to-print-progress-p ()
    (> (get-universal-time)
       (+ 5 compiled-form-timer)))

  (defun reset-progress-for-new-file (source)
    (setf compiled-form-timer 0
          compiling-source source
          last-reported-% -1))

  (defun !compile-file/progress (in source)
    (unless (eql source compiling-source)
      (reset-progress-for-new-file source))
    (when (plusp (length source))
      (let ((compilation-% (percentage (stream-file-position in)
                                       (length source))))
        (when (time-to-print-progress-p)
          (if (> compilation-% last-reported-%)
              (format t " ~2d%…" compilation-%)
              (princ "…")))
        (setf compiled-form-timer (get-universal-time)
              last-reported-% compilation-%)))))

(defmacro doforms ((var stream) &body body)
  (let ((eof (gensym "EOF-")))
    `(loop
        with ,eof = (gensym "EOF-")
        for ,var = (read ,stream nil ,eof)
        until (eq ,var ,eof)
        do (progn ,@body))))

(defmacro with-compilation-restarts ((filename) &body body)
  (let ((top (gensym "TOP-"))
        (block (gensym "BLOCK-")))
    `(block ,block
       (tagbody ,top
          (return-from ,block
            (restart-case
                (progn ,@body)
              (retry-file ()
                :report (lambda (s)
                          (format s "Retry compiling ~a in JSCL"
                                  (enough-namestring ,filename)))
                (go ,top))
              (continue ()
                :report (lambda (s)
                          (format s "Continue without compiling ~a in JSCL"
                                  (enough-namestring ,filename)))
                (return-from ,block nil))))))))

(defun !compile-file (filename out &key print)
  "Compile  FILENAME, writing  the  Javascript to  OUT. Print  top-level
forms if PRINT is set."
  (with-compilation-restarts (filename)
    (with-compile-file-bindings (filename :verbosep print)
      (when print
        (format *trace-output*
                "~&;;;; Compiling file ~a... " (enough-namestring filename)))
      (handler-case
          (doforms (form in)
            (when print
              (!compile-file/progress in source))
            (!compile-file/form form in out)
            (setf last-form form)
            (incf form-count))
        (end-of-file (c)
          (error "~:(~a~) while reading ~a after ~:r form:~%~s"
                 c (enough-namestring filename)
                 form-count last-form)))
      (format t " Done."))))

(defun macro-bindings-add-magic-unquotes ()
  ;; We assume that environments have a friendly list representation for
  ;; the compiler and it can be dumped.
  (dolist (b (lexenv-function *environment*))
    (when (eq (binding-type b) 'macro)
      (setf (binding-value b) `(,*magic-unquote-marker* ,(binding-value b))))))

(defun dump-gensym-type-counters (stream)
  "Set some counter  variables properly, so user-compiled  code will not
 collide with the compiler itself."
  (write-string
   (compile-toplevel `(progn
                        (setq *environment* ',*environment*)
                        (setq *variable-counter* ,*variable-counter*)
                        (setq *gensym-counter* ,*gensym-counter*)
                        (setq *literal-counter* ,*literal-counter*)))
   stream))

(defun dump-global-environment (stream)
  (macro-bindings-add-magic-unquotes)
  (dump-gensym-type-counters stream))

(defmacro with-jscl-scoping-function ((out) &body body)
  `(progn (write-string "(function(jscl){
'use strict';
\(function(values, internals){" ,out)
          ,@body
          (write-string "})(jscl.internals.pv, jscl.internals);
})( typeof require !== 'undefined'? require('./jscl'): window.jscl )" ,out)
          (terpri ,out)))

(defmacro with-self-invoking-function ((out) &body body)
  `(progn
     (format ,out "(function(){~%'use strict';~%")
     ,@body
     (format ,out "})();~%")))

(defun write-javascript-for-files (files &optional (stream *standard-output*))
  (let ((*environment* (make-lexenv)))
    (with-compilation-environment
      (with-jscl-scoping-function (stream)
        (dolist (input files)
          (terpri stream)
          (!compile-file input stream))))))

(defun compile-application (files output &key shebang)
  (with-compilation-environment
    (with-open-file (out output :direction :output :if-exists :supersede)
      (when shebang
        (write-string "#!/usr/bin/env node" out)
        (terpri out))
      (with-jscl-scoping-function (out)
        (dolist (file files)
          (fresh-line out)
          (!compile-file file out))))))

(defun test-files ()
  (directory (source-pathname "*" :directory '(:relative "tests") :type "lisp")))

(defun compile-test-suite ()
  (compile-application
   `(,(source-pathname "tests.lisp" :directory nil)
      ,@(test-files)
      ,(source-pathname "tests-report.lisp" :directory nil))
   (merge-pathnames "tests.js" *base-directory*)))

(defun compile-web-repl ()
  (compile-application
   (list (source-pathname "repl.lisp" :directory '(:relative "repl-web")))
   (merge-pathnames "repl-web.js" *base-directory*)))

(defun compile-node-repl ()
  (compile-application
   (list (source-pathname "repl.lisp" :directory '(:relative "repl-node")))
   (merge-pathnames "repl-node.js" *base-directory*)
   :shebang t))

(defun compile-jscl.js (verbosep)
  (with-compilation-environment
    (with-open-file (out (merge-pathnames "jscl.js" *base-directory*)
                         :direction :output
                         :if-exists :supersede)
      (with-self-invoking-function (out)
        (write-string (read-whole-file (source-pathname "prelude.js")) out)
        (do-source input :target
          (!compile-file input out :print verbosep))
        (dump-global-environment out)))))

(defun bootstrap (&optional verbosep)
  (proclaim '(optimize (speed 0) (safety 3) (debug 3)))
  (let ((*features* (cons :jscl-xc *features*))
        (*package* (find-package "JSCL"))
        (*default-pathname-defaults* *base-directory*))
    (setq *environment* *global-environment*)
    (compile-jscl.js verbosep)
    (report-undefined-functions)
    (compile-test-suite)
    (compile-web-repl)
    (compile-node-repl)))

(defun bootstrap-core (&optional verbosep)
  (when verbosep
    (format *trace-output* "~|~2%;;;; — Bootstrapping core for JSCL, version ~a.~2%" *version*))
  (let ((*features* (cons :jscl-xc *features*))
        (*package* (find-package "JSCL"))
        (*default-pathname-defaults* *base-directory*)
        (*environment* *global-environment*))
    (compile-jscl.js verbosep)
    (report-undefined-functions)
    (compile-test-suite))
  (when verbosep
    (format *trace-output* "~2&;;;; … Done, compiled jscl.js and test suite.~%~|~%")))

(defun run-tests-in-host ()
  "Run the tests in  the host Lisp implementation. It is  a quick way to
improve the level of trust of the tests."
  (let ((*package* (find-package "JSCL"))
        (*default-pathname-defaults* *base-directory*))
    (load (source-pathname "tests.lisp" :directory nil))
    (let ((*use-html-output-p* nil))
      (declare (special *use-html-output-p*))
      (map nil #'load (directory "tests/*.lisp")))
    (load "tests-report.lisp")))

