;;; jscl.lisp ---

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
  (:use :cl)
  (:export #:bootstrap #:run-tests-in-host))

(defpackage :jscl/ffi
  (:use :jscl))

(in-package :jscl)

(defvar *base-directory*
  (if #.*load-pathname*
      (make-pathname :name nil :type nil :defaults #.*load-pathname*)
      *default-pathname-defaults*))

(defvar *version*
  ;; Read the  version from  the package.json file.  We could  have used
  ;; a json library to parse this, but that would introduce a dependency
  ;; and we are not using ASDF yet.
  (with-open-file (in (merge-pathnames "package.json" *base-directory*))
    (loop
       for line = (read-line in nil)
       while line
       when (search "\"version\":" line)
       do (let ((colon (position #\: line))
                (comma (position #\, line)))
            (return (string-trim '(#\newline #\" #\tab #\space)
                                 (subseq line (1+ colon) comma)))))))


;;; List of all the source files that need to  be compiled, and whether they are to be compiled just
;;; by the  host, by  the target  JSCL, or  by both.  All files  have a  `.lisp' extension,  and are
;;; relative to src/ Subdirectories are indicated by the presence of a list rather than a keyword in
;;; the second element  of the list. For  example, this list: (("foo" :target)  ("bar" ("baz" :host)
;;; ("quux"  :both))) Means  that src/foo.lisp  and  src/bar/quux.lisp need  to be  compiled in  the
;;; target, and that src/bar/baz.lisp and src/bar/quux.lisp need to be compiled in the host
(defvar *source*
  '(("boot"          :target)
    ("early-char"    :target)
    ("compat"        :host)
    ("setf"          :target)
    ("utils"         :both)
    ("defstruct"     :both)
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
    ("read"          :both)
    ("conditions"    :both)
    ("backquote"     :both)
    ("compiler"
     ("codegen"      :both)
     ("compiler"     :both))
    ("documentation" :target)
    ("toplevel"      :target)))

(defun source-pathname (filename &key (directory '(:relative "src")) (type nil) (defaults filename))
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
(with-compilation-unit ()
  (do-source input :host
    (multiple-value-bind (fasl warn fail) (compile-file input)
      (declare (ignore warn))
      (when fail
        (error "Compilation of ~A failed." input))
      (load fasl))))

(defun read-whole-file (filename)
  (with-open-file (in filename)
    ;; FILE-LENGTH is  in bytes, not  characters. UTF-8 characters will  yield a shorter  read, with
    ;; trailing  #\NULL bytes,  unless  we initialize  to  spaces. It's  a hack,  but  it's a  cheap
    ;; enough one.
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

(defun !compile-file (filename out &key print)
  (let ((*compiling-file* t)
        (*compile-print-toplevels* print)
        (*package* *package*))
    (let ((in (make-string-stream (read-whole-file filename))))
      (format t "Compiling ~a...~%" (enough-namestring filename))
      (loop
         with eof-mark = (gensym)
         for form = (ls-read in nil eof-mark)
         until (eq form eof-mark)
         do (let ((compilation (compile-toplevel form)))
              (if (possibly-valid-js-p compilation)
                  (when (plusp (length compilation))
                    (write-string compilation out))
                  (complain-about-illegal-chars form in compilation)))))))

(defun dump-global-environment (stream)
  (flet ((late-compile (form)
           (let ((*standard-output* stream))
             (write-string (compile-toplevel form)))))
    ;; We assume  that environments have a  friendly list representation
    ;; for the compiler and it can be dumped.
    (dolist (b (lexenv-function *environment*))
      (when (eq (binding-type b) 'macro)
        (setf (binding-value b) `(,*magic-unquote-marker* ,(binding-value b)))))
    (late-compile `(setq *environment* ',*environment*))
    ;; Set some  counter variable properly,  so user compiled  code will
    ;; not collide with the compiler itself.
    (late-compile
     `(progn
        (setq *variable-counter* ,*variable-counter*)
        (setq *gensym-counter* ,*gensym-counter*)))
    (late-compile `(setq *literal-counter* ,*literal-counter*))))


(defmacro with-scoping-function ((out) &body body)
  `(progn (write-string "(function(jscl){
'use strict';
\(function(values, internals){" ,out)
          ,@body
          (write-string "})(jscl.internals.pv, jscl.internals);
})( typeof require !== 'undefined'? require('./jscl'): window.jscl )" ,out)
          (terpri ,out)))

(defun compile-application (files output &key shebang)
  (with-compilation-environment
    (with-open-file (out output :direction :output :if-exists :supersede)
      (when shebang
        (write-string "#!/usr/bin/env node" out)
        (terpri out))
      (with-scoping-function (out)
        (dolist (input files)
          (terpri out)
          (!compile-file input out))))))

(defun compile-test-suite ()
  (compile-application
   `(,(source-pathname "tests.lisp" :directory nil)
      ,@(directory (source-pathname "*" :directory '(:relative "tests") :type "lisp"))
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
      (format out "(function(){~%'use strict';~%")
      (write-string (read-whole-file (source-pathname "prelude.js")) out)
      (do-source input :target
        (!compile-file input out :print verbosep))
      (dump-global-environment out)
      (format out "})();~%"))))

(defun bootstrap (&optional verbosep)
  (let ((*features* (list* :jscl :jscl-xc *features*))
        (*package* (find-package "JSCL"))
        (*default-pathname-defaults* *base-directory*))
    (setq *environment* (make-lexenv))
    (compile-jscl.js verbosep)
    (report-undefined-functions)
    (compile-test-suite)
    (compile-web-repl)
    (compile-node-repl)))

(defun run-tests-in-host ()
  "Run the tests in  the host Lisp implementation. It is  a quick way to
improve the level of trust of the tests."
  (let ((*package* (find-package "JSCL"))
        (*default-pathname-defaults* *base-directory*))
    (load (source-pathname "tests.lisp" :directory nil))
    (let ((*use-html-output-p* nil))
      (declare (special *use-html-output-p*))
      (dolist (input (directory "tests/*.lisp"))
        (load input)))
    (load "tests-report.lisp")))
