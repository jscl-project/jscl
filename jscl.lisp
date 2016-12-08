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

(cl:in-package :common-lisp-user)
(declaim (optimize (speed 1) (debug 3) (space 0)
                   (safety 3) (compilation-speed 1)))

(defpackage :jscl/common-lisp
  (:use) ; Nothing. (Clozure tries to stuff CCL in by default)
  (:nicknames :jscl/cl))

(defpackage :jscl/javascript-low-level
  (:use) ; nothing
  (:nicknames :jscl/js))

(defpackage :jscl/intermediate-cross-compilation
  (:use :jscl/cl)
  (:nicknames :jscl/xc))

(defpackage :jscl
  (:use :cl)
  #+sbcl (:use :sb-gray :sb-mop)
  #+clisp (:use :gray :mop)
  #+ecl (:use :clos)
  #+ecl (:shadowing-import-from :gray
                                #:stream-element-type
                                #:open-stream-p
                                #:output-stream-p
                                #:input-stream-p
                                #:streamp
                                #:close)
  #+ecl (:use :gray)
  #+lispworks (:use :gray :clos)
  #-(or sbcl clisp ecl lispworks)
  (:use #.(warn "You will probably need to add your Gray Streams ~
and MOP into JSCL USE list"))
  (:export #:bootstrap #:bootstrap-core
           #:run-tests-in-host #:with-sharp-j #:read-#j
           #:write-javascript-for-files #:compile-application)
  (:nicknames :jscl/hosted)
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
  #+jscl (:nicknames :cltl2)
  (:export #:declaration-information)
  (:documentation  "Functions  defined  in Common  Lisp:  The  Language,
Second Edition  (CLtL2) which are  unique to that  book (ie, not  in the
Common-Lisp package).

Very little of this set is  implemented; but this package exists to make
identifying them (and their provenance) easier."))

(defpackage :jscl/mop
  (:use :cl :jscl)
  #+jscl (:nicknames :mop)
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

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun extract-version-from-package.json ()
    (with-open-file (in (merge-pathnames "package.json" *base-directory*))
      (loop
        for line = (read-line in nil)
        while line
        when (search "\"version\":" line)
          do (let ((colon (position #\: line))
                   (comma (position #\, line)))
               (return (string-trim '(#\newline #\" #\tab #\space)
                                    (subseq line (1+ colon) comma))))))))

(defvar *version*
  (extract-version-from-package.json)
  "Read  the version  from the  package.json  file. We  could have  used
 a JSON library  to parse this, but that would  introduce a dependency
 and we are not using ASDF yet.")

(defun read-whole-file (filename)
  (with-open-file (in filename)
    ;; FILE-LENGTH is  in bytes,  not characters. UTF-8  characters will
    ;; yield  a shorter  read,  with trailing  #\NULL  bytes, unless  we
    ;; initialize to spaces. It's a hack, but it's a cheap enough one.
    (let ((seq (make-string (file-length in) :initial-element #\space)))
      (read-sequence seq in)
      seq)))

(defparameter *source*
  '(("compat"        :host)
    ("boot"          :both)
    ("early-char" 	:both)
    ("setf"          :both)
    ("utils"         :both)
    ("defstruct"     :both)
    ("types"	:both)
    ("lambda-list"   :both)
    ("numbers"       :both)
    ("char"          :both)
    ("list"          :both)
    ("array"         :both)
    ("string"        :both)
    ("sequence"      :both)
    ("stream"        :both)
    ("hash-table"    :target) ; TODO
    ("print"         :both)
    ("misc"          :both)
    ("ffi"           :target)
    ("symbol"        :both)
    ("package"       :both)
    ("ansiloop"
     ("ansi-loop"    :both))
    ("read"          :both)
    ("conditions"    :both)
    ("backquote"     :both)
    ("compiler"
     ("codegen"      :both)
     ("compiler"     :both)
     ("compile-file"	:both))
    ("documentation" :target) ; TODO
    ("toplevel" 	:both))
  "List of  all the source files  that need to be  compiled, and whether
they are  to be compiled  just by  the host, by  the target JSCL,  or by
both.  All files  have a  `.lisp' extension,  and are  relative to  src/
Subdirectories  are indicated  by the  presence  of a  list rather  than
a keyword  in the second  element of the  list.

For example,  this list:

\((\"foo\" :target) \(\"bar\" (\"baz\"  :host) \(\"quux\" :both)))

Means that src/foo.lisp and src/bar/quux.lisp need to be compiled in the
target,  and  that src/bar/baz.lisp  and  src/bar/quux.lisp  need to  be
compiled in the host.")

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
    (when *load-pathname*    ; Prevent this  file from becoming that one
                                        ; stale FASL …
      (compile-file *load-pathname*))
    (load (merge-pathnames "src/compat.lisp"
                           #. (or *load-pathname*
                                  *compile-file-pathname*
                                  #p ".")))
    (let (fasls failures)
      (do-source input :host
        (load input)
        (locally
            ;; I make  the assumption that re-loading  the files under
            ;; Swank, you  don't care about these  redefinitions … but
            ;; if we get them running  top-level (eg, from a Makefile)
            ;; they're more interesting.
            #+swank
          (declare #+sbcl (sb-ext:muffle-conditions
                           sb-kernel::function-redefinition-warning))
          (multiple-value-bind (fasl warn fail) (compile-file input)
            (declare (ignore warn))
            ;; It's only interesting to see  if there were failures at
            ;; the  end  of  the  compilation  unit,  since  undefined
            ;; functions  in  one  file  may be  defined  in  another.
            ;; This   gets   particularly   convoluted  due   to   the
            ;; circularity of the type system and object systems.
            (when fail
              (push fail failures)
              (warn "Compilation of ~A failed." input))
            (when fasl
              (locally
                  ;; These  occur  because  we  reload from  FASL  the  compiled
                  ;; versions
                  (declare #+sbcl (sb-ext:muffle-conditions
                                   sb-kernel::function-redefinition-warning))
                (load fasl))
              (push fasl fasls))))))
    (init-built-in-types%)))


(defmacro doforms ((var stream) &body body)
  (let ((eof (gensym "EOF-")))
    `(loop
        with ,eof = (gensym "EOF-")
        for ,var = (read ,stream nil ,eof)
        until (eq ,var ,eof)
        do (progn ,@body))))


;;;; Load JSCL into the host implementation.

(defmacro define-cl-fun (name lambda-list &body declarations+body)
  (let ((!name (intern (concatenate 'string "!" (symbol-name name)))))
    `(progn
       (defun ,!name ,lambda-list ,@declarations+body)
       #+jscl (fset ',!name ',name))))

(load-jscl)


(defun run-tests-in-host ()
  "Run the tests in  the host Lisp implementation. It is  a quick way to
improve the level of trust of the tests."
  (let ((*package* (find-package "JSCL"))
        (*default-pathname-defaults* *base-directory*))
    (load (source-pathname "tests.lisp" :directory nil))
    (let ((*use-html-output-p* nil))
      (declare (special *use-html-output-p*))
      (mapc #'load (test-files)))
    (load "tests-report.lisp")))
