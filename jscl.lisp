;;; jscl.lisp— JavaScript from Common Lisp

;; Copyright © 2012, 2013 David Vazquez
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

(cl:in-package :common-lisp-user)
(declaim (optimize (speed 1) (debug 3) (space 0)
                   (safety 3) (compilation-speed 1)))
(defpackage :jscl/common-lisp
  (:use) ; Nothing. (Clozure tries to stuff CCL in by default)
  (:nicknames :jscl/cl)
  (:documentation
   "The  COMMON-LISP  package  contains   the  symbols  defined  in  the
 ANSI standard."))

(defpackage :jscl/javascript-low-level
  (:use) ; nothing
  (:nicknames :jscl/js)
  (:documentation
   "The JSCL compiler generates forms that represent JavaScript in an abstract syntax tree, which are interned in this package. The code generator then operates on that tree to create JavaScript source code.

During  bootstrap,  these  forms  are  evaluated  instead  as  calls  to
“compatibility” functions loaded into the host compiler."))

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
  (:documentation
   "Foreign Function Interface to JavaScript functions."))

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
  (:export #:eql-specializer-object #:eql-specializer-p)
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

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun not-tmp (pathname)
    "To keep compile-time actions from  assuming that SRC-DIR is /tmp when
using Slime."
    (when (and pathname
               (not (equal #p"/tmp/" (truename pathname))))
      pathname))

  (defvar *base-directory* (make-pathname
                            :directory
                            (pathname-directory
                             (or (not-tmp *load-pathname*)
                                 (not-tmp *compile-file-pathname*)
                                 *default-pathname-defaults*))))
  
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


(defun read-fully (stream)
  (loop with buffer = (make-array #x400
                                  :element-type 'character
                                  :adjustable t
                                  :fill-pointer 0)
     for char = (read-char stream nil nil)
     while char
     do (vector-push-extend char buffer #x400)
     finally (progn
               (adjust-array buffer (fill-pointer buffer))
               (return buffer))))

(defun run-program-compile-time (bin args)
  #+sbcl
  (sb-posix:chdir *base-directory*)
  (or #+asdf
      (uiop:run-program (cons bin args) :output :string
                        :ignore-error-status t)
      #+sbcl
      (ignore-errors
        (read-fully
         (sb-ext:process-output
          (sb-ext:run-program bin args
                              :wait t
                              :output :stream))))
      nil))

(defun read-whole-file (filename)
  (with-open-file (in filename)
    ;; FILE-LENGTH is  in bytes,  not characters. UTF-8  characters will
    ;; yield  a shorter  read,  with trailing  #\NULL  bytes, unless  we
    ;; initialize to spaces. It's a hack, but it's a cheap enough one.
    (let ((seq (make-string (file-length in)
                            :initial-element #\Space)))
      (read-sequence seq in)
      seq)))

(defun git-commit ()
  (or (remove #\Newline
              (run-program-compile-time
               "/usr/bin/git"
               '("rev-parse" "--short" "HEAD")))
      "(unknown)"))

(defun latinize (string)
  "This makes  an effort to  let names  written in non-Latin  scripts be
alphabetized more-or-less phonetically, in many cases."
  (let ((greek
         "αa βb γg δd εe ζz ηeeθthιi κk λl μm νn ξksοo πp ρr ΢s σs τt υu φphχchψpsωoo")
        (cyrillic
         "аa бb вv гg дd еe жj зz иiiйi кk лl мm нn оo пp рr сs тt уu фf хkhцtsчchшshщscъy ыy ьy эe юyuяya"))
    (reduce (lambda (s1 s2)
              (concatenate 'string s1 s2))
            (loop
               for i from 0 below (length string)
               for char = (char-downcase (char string i))

               for hellenic = (position char greek)
               for russian = (position char cyrillic)
               for char-name = (string-downcase (char-name char))
               for digit-value = (digit-char-p char)
               for roman = (search "roman_numeral_" char-name)
               for syllable = (search "syllable_" char-name)
               for hiragana = (search "hiragana_letter" char-name)

               collect
                 (cond
                   ((and hellenic (zerop (mod hellenic 3)))
                    (remove #\Space
                            (subseq greek (+ 1 hellenic)
                                    (+ 3 hellenic))))
                   ((and russian (zerop (mod russian 3)))
                    (remove #\Space
                            (subseq cyrillic (+ 1 russian)
                                    (+ 3 russian))))
                   (hiragana
                    (subseq char-name (1+ (position #\_ char-name
                                                    :from-end t))))
                   (roman
                    (subseq char-name (1+ (position #\_ char-name
                                                    :from-end t))))
                   (syllable
                    (subseq char-name (+ 9 syllable)
                            (position #\_ char-name
                                      :start (+ 9 syllable))))
                   (digit-value
                    (format nil "~r" digit-value))
                   (t (string char))))
            :initial-value "")))

(defun git-credits ()
  (with-input-from-string (everyone
                           (run-program-compile-time
                            "/usr/bin/git"
                            '("log" "--format=%aN")))
    (sort (loop
             with unique = nil
             for someone = (read-line everyone nil nil)
             while someone
             do (pushnew someone unique :test #'string-equal)
             finally (return unique))
          #'string<
          :key (lambda (name)
                 (latinize
                  (subseq name (or (position #\Space name)
                                   0)))))))
(defun file-set-execute-permission (filename)
  "This is  a bit  implementation-specific, but  it will  try to  set +x
permissions on FILENAME, if we  know how in the current implementation."
  #+sbcl
  (sb-posix:chmod filename #o755)
  #+ecl
  (ext:chmod filename #o755)
  #- (or sbcl ecl)
  (warn "You'll need to set executable permissions yourself"))

(defun violet-volts-p ()
  (search "romance-ii/jscl"
          (run-program-compile-time "/usr/bin/git"
                                    '("remote" "-v"))))


;;; Clearing the output buffer. These  definitions only really matter on
;;; the host. (Until we port CLIM…)

(unless (find-method #'stream-clear-output nil '(t) nil)
  (defmethod stream-clear-output ((stream t)) nil))

(defun teletype-p (stream)
  #+sbcl
  (/= 0 (sb-unix:unix-isatty (sb-sys:fd-stream-fd stream)))
  #-sbcl
  nil)

(defmethod stream-clear-output ((stream sb-sys:fd-stream))
  (if (teletype-p stream)
      (dolist (char '(#\Esc #\[ #\H #\Esc #\[ #\2 #\J))
        (write-char char stream))
      (call-next-method)))

#+swank
(defmethod stream-clear-output
    ((stream swank/gray::slime-output-stream))
  (swank:eval-in-emacs '(progn
                         (slime-repl)
                         (slime-repl-clear-buffer)
                         (form-feed-mode t))))

(defmethod stream-clear-output ((stream two-way-stream))
  (stream-clear-output (two-way-stream-output-stream stream)))


(defparameter *source*
  '(("compat"
     ("compat-misc"	:host)
     ("compat-sv"	:host)
     ("compat-ffi"	:host)
     ("compat-js"	:host))
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
    ("hash-table"    :both)
    ("print"         :both)
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
    ("documentation" :both)
    ("misc"          :both)
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
                             (type nil)
                             (defaults *base-directory*))
  (merge-pathnames
   (if type
       (make-pathname :name filename :type type :directory directory :defaults defaults)
       (make-pathname :name filename           :directory directory :defaults defaults))
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
        (get-files (cdr file) type (append dir (list (car file))))
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

(defun review-failures (failures)
  (let ((file-warnings ())
        (file-failures ())
        (files 0))
    (dolist (fail failures)
      (incf files)
      (destructuring-bind (file warned failed) fail
        (declare (ignore warned))
        (cond
          (failed
           (format *error-output* "~& ⚠ Failed to compile ~a" file)
           (push (enough-namestring file) file-failures))
          (t
           (format *error-output* "~& ⚠ Warning(s) from compiling ~a" file)
           (push (enough-namestring file) file-warnings)))))
    (cond 
      (file-failures
       (cerror "Try anyway"
               "There were ~
 ~[~:;~:*~r file~:p with warnings, and~] ~
 ~[no files~:;~:*~r file~:p~] which failed, ~
which occurred within ~r file~:p: ~
~@[~%Warning on ~{~a~^, ~}~] ~
~@[~%Failed on ~{~a~^, ~}~]"
               (length file-warnings) (length file-failures) files
               file-warnings file-failures))
      (file-warnings
       (warn "Despite warnings in ~r file~:p, there were no failures; continuing…"
             (length file-warnings)))
      (t (format *trace-output* "~&No warnings or failures from compilation.")))))

(defun load-jscl ()
  (with-compilation-unit ()
    (when *load-pathname*    ; Prevent this  file from becoming that one
                                        ; stale FASL …
      (compile-file *load-pathname*)))
  (with-compilation-unit ()
    (let (fasls failures)
      (do-source input :host
        (locally
            ;; I  make the  assumption that  re-loading the  files under
            ;; Swank, you don't care about  these redefinitions … but if
            ;; we  get  them running  top-level  (eg,  from a  Makefile)
            ;; they're more interesting.
            (declare #+(and swank sbcl) (sb-ext:muffle-conditions
                                         sb-kernel::function-redefinition-warning))
          (multiple-value-bind (fasl warn fail) (compile-file input)
            ;; It's only  interesting to see  if there were  failures at
            ;; the  end   of  the  compilation  unit,   since  undefined
            ;; functions  in  one  file   may  be  defined  in  another.
            ;; This gets particularly convoluted  due to the circularity
            ;; of the type system and object systems.
            (when (or warn fail)
              (push (list (enough-namestring input) warn fail) failures))
            (when fasl
              (ignore-errors (load fasl))
              (push fasl fasls)))))
      (when failures
        (review-failures failures))
      (dolist (fasl fasls)
        (locally
            ;; These  occur because  we  reload from  FASL the  compiled
            ;; versions
            (declare #+sbcl (sb-ext:muffle-conditions
                             sb-kernel::function-redefinition-warning))
          (load fasl)))))
  (init-built-in-types%)             ; should be a duplicate call by now
  )


(defmacro doforms ((var stream) &body body)
  (let ((eof (gensym "EOF-")))
    `(loop
        with ,eof = (gensym "EOF-")
        for ,var = (read ,stream nil ,eof)
        until (eq ,var ,eof)
        do (progn ,@body))))


;;;; Load JSCL into the host implementation.

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
