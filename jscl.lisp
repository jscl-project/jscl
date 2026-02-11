;;; jscl.lisp --- JSCL Cross-Compiler Bootstrap

;; Copyright (C) 2012, 2013, 2026 David Vazquez
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

;;;; Packages
;;;;
;;;; We define JSCL-XC as the cross-compiler package.
;;;; In SBCL, it uses only :CL.
;;;; In JSCL (Stage 1), :jscl already exists (it's the running compiler),
;;;; so JSCL-XC also uses :jscl to inherit its symbols.

(defpackage :jscl-xc
  (:use :cl)
  (:export #:bootstrap
           #:build-node-repl
	   #:build-web-repl
	   #:build-web-worker-repl
	   #:build-deno-repl
           #:build-tests))

(in-package :jscl-xc)

#-jscl (require :uiop)

;;;; Directory Configuration
;;;;
;;;; In SBCL, we compute paths from the load file location.
;;;; In JSCL, we use the current directory (assumed to be repo root).

(defvar *base-directory*
  #+jscl ""
  #-jscl (namestring
          (if #.*load-pathname*
              (make-pathname :name nil :type nil :defaults #.*load-pathname*)
              *default-pathname-defaults*)))

(defvar *dist-directory*
  (concatenate 'string *base-directory* "dist/"))

(defun source-path (filename &key (directory '(:relative "src")) (type nil))
  "Build a path string relative to *BASE-DIRECTORY* from FILENAME, DIRECTORY, and optional TYPE extension."
  (let ((dir-str (cond
                   ((equal directory '(:relative "src")) "src/")
                   ((equal directory '(:relative)) "")
                   ((null directory) "")
                   (t (format nil "~{~a/~}" (cdr directory))))))
    (if type
        (concatenate 'string *base-directory* dir-str filename "." type)
        (concatenate 'string *base-directory* dir-str filename))))

;;;; Version Information

#-jscl
(defun get-current-git-commit ()
  (uiop:run-program `("git" "-C" ,*base-directory*
                            "rev-parse"
                            "HEAD")
                    :output '(:string :stripped t)))

#-jscl
(defun is-release-build ()
  (uiop:getenvp "JSCL_RELEASE"))

#-jscl
(defun git-has-uncommited-changes ()
  (let* ((command `("git" "-C" ,*base-directory*
                          "diff-files"
                          "--quiet"))
         (error-status (nth-value 2 (uiop:run-program command :ignore-error-status t))))
    (= error-status 1)))

#-jscl
(defvar *version*
  ;; Read the version from the package.json file.
  (with-open-file (in (source-path "package" :directory nil :type "json"))
    (loop
      for line = (read-line in nil)
      while line
      when (search "\"version\":" line)
        do (let ((colon (position #\: line))
                 (comma (position #\, line)))
             (return (string-trim '(#\newline #\" #\tab #\space)
                                  (subseq line (1+ colon) comma)))))))

;; To be inlined into the `lisp-implementation-version' function.
;; Defined in :jscl-xc package so it's available for #. in misc.lisp
(defun jscl-implementation-version ()
  #+jscl
  ;; In Stage 1, return a placeholder version
  (format nil "stage1-~a" (get-universal-time))
  #-jscl
  (if (is-release-build)
      (progn
        (assert (not (git-has-uncommited-changes)))
        *version*)
      (format nil "dev-~a~a"
              (subseq (get-current-git-commit) 0 8)
              (if (git-has-uncommited-changes)
                  "-dirty"
                  ""))))

;;;; Source File List
;;;;
;;;; List of all the source files that need to be compiled, and whether they
;;;; are to be compiled just by the host, by the target JSCL, or by both.
;;;; All files have a `.lisp' extension, and are relative to src/
;;;;
;;;; Subdirectories are indicated by the presence of a list rather than a
;;;; keyword in the second element of the list. For example, this list:
;;;;  (("foo"    :target)
;;;;   ("bar"
;;;;     ("baz"  :host)
;;;;     ("quux" :both)))
;;;; Means that src/foo.lisp and src/bar/quux.lisp need to be compiled in the
;;;; target, and that src/bar/baz.lisp and src/bar/quux.lisp need to be
;;;; compiled in the host

(defvar *source*
  '(("boot"          :target)
    ("compat"        :host)
    ("setf"          :target)
    ("utils"         :both)
    ("ffi"           :target)
    ("hash-table"    :target)
    ("defstruct"     :both)
    ("lambda-list"   :both)
    ("numbers"       :target)
    ("char"          :target)
    ("list"          :target)
    ("array"         :target)
    ("string"        :target)
    ("sequence"      :target)
    ("symbol"        :target)
    ("package"       :target)
    ("types-prelude" :both)
    ("types"         :target)
    ("ansiloop"
     ("ansi-loop"    :both))
    ("stream"        :target)
    ("print"         :target)
    ("misc"          :target)
    ("read"          :both)
    ("backquote"     :both)
    ("file"          :target)
    ("compiler"
     ("codegen"      :both)
     ("compiler"     :both)
     ("environment"  :both))
    ("clos"
     ("kludges"       :target)
     ("std-object"    :target)
     ("mop-utils"     :target)
     ("std-generic"   :target)
     ("std-method"    :target)
     ("bootstrap"     :target)
     ("macros"        :target)
     ("methods"       :target))
    ("conditions"    :target)
    ("structures"    :both)
    ("format"        :both)
    ("documentation" :target)
    ("clos"
     ("tools"         :target)
     ("exports"       :target)
     ("describe"      :target))
    ("compile-file"  :both)
    ("load"          :target)))

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
       (cons (source-path (car file) :directory dir :type "lisp")
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


(defvar *jscl-xc-readtable* (copy-readtable *readtable*))

;;;; Host Compilation
;;;;
;;;; Compile and load JSCL into the host Lisp for cross-compilation.
;;;; Host files are loaded in the :jscl-xc package.

(let ((*package* (find-package "JSCL-XC"))
      (*readtable* *jscl-xc-readtable*))
  (with-compilation-unit ()
    (do-source input :host
      (load input))))


;;;; Utility Functions

(defun read-whole-file (filename)
  "Read entire contents of FILENAME as a string.
Works in both SBCL (Stage 0) and JSCL (Stage 1)."
  (with-open-file (in filename :direction :input)
    (with-output-to-string (out)
      (loop for line = (read-line in nil)
            while line
            do (write-line line out)))))

;;;; Bootstrap Function
;;;;
;;;; Compiles JSCL to produce jscl.js. Uses source-tracking for macro
;;;; definitions so it works in both SBCL and JSCL environments.

(defun bootstrap (output-directory prefix &key verbose)
  "Compile JSCL to produce PREFIX.js in OUTPUT-DIRECTORY."
  (let ((jscl-path (concatenate 'string output-directory prefix ".js"))
        #+jscl (start-time (#j:Date:now))
        ;; Bind compilation settings - :jscl-xc is active in both stages
        (*features* (list* :jscl-xc :jscl (remove :jscl *features*)))
        (*package* (find-package "JSCL-XC")))

    #+jscl (format t "~%=== JSCL Stage 1 Bootstrap ===~%")

    (ensure-directories-exist output-directory)

    (setq jscl-xc::*environment* (jscl-xc::make-lexenv))
    (setq jscl-xc::*global-environment* jscl-xc::*environment*)

    ;; Compile jscl.js
    (jscl-xc::with-compilation-environment
      (with-open-file (out jscl-path :direction :output :if-exists :supersede)
        (write-line "(function(){" out)
        (write-line "'use strict';" out)
        (write-string (read-whole-file (source-path "prelude.js")) out)

        (let ((*readtable* *jscl-xc-readtable*))
          (do-source input :target
            (jscl-xc::!compile-file input out :verbose t :print verbose))
          (jscl-xc::dump-global-environment out)
          ;; NOTE: This file must be compiled after dumping the global
          ;; environment. In this file we replace the bootstrap DEFMACRO
          ;; etc definition with the standard definition.
          (jscl-xc::!compile-file (source-path "toplevel" :type "lisp") out
                                  :verbose t :print verbose))

        (write-line "})();" out)))

    (jscl-xc::report-undefined-functions)

    #+jscl
    (format t "~%=== Stage 1 Bootstrap Complete ===~%Time: ~,2f seconds~%"
            (/ (- (#j:Date:now) start-time) 1000.0))

    jscl-path))

;;;; Helper Functions

(defun copy-asset (src dst-path output-directory)
  "Copy static file from SRC (relative to base) to DST-PATH in OUTPUT-DIRECTORY."
  (let ((src-full (source-path src :directory nil))
        (dst-full (concatenate 'string output-directory dst-path)))
    #+jscl (#j:Fs:copyFileSync (jscl::jsstring src-full) (jscl::jsstring dst-full))
    #-jscl (uiop:copy-file src-full dst-full)))

#+jscl
(defun directory (pattern)
  "Simple directory listing for JSCL. PATTERN should be like 'tests/*.lisp'."
  ;; Extract directory and extension from pattern
  (let* ((slash-pos (position #\/ pattern :from-end t))
         (dir (if slash-pos (subseq pattern 0 (1+ slash-pos)) ""))
         (file-pattern (if slash-pos (subseq pattern (1+ slash-pos)) pattern))
         (ext (let ((dot-pos (position #\. file-pattern)))
                (if dot-pos (subseq file-pattern dot-pos) nil)))
         (entries (#j:Fs:readdirSync (jscl::jsstring (if (string= dir "") "." dir))))
         (result nil))
    (dotimes (i (jscl::oget entries "length"))
      (let ((entry (jscl::clstring (aref entries i))))
        (when (and ext (> (length entry) (length ext))
                   (string= (subseq entry (- (length entry) (length ext))) ext))
          (push (concatenate 'string dir entry) result))))
    (nreverse result)))

(defun build-web-repl (output-directory)
  "Build web REPL into OUTPUT-DIRECTORY."
  (let ((*package* (find-package "JSCL-XC"))
        (*readtable* *jscl-xc-readtable*))
    (copy-asset "web/index.html" "index.html" output-directory)
    (copy-asset "web/style.css" "style.css" output-directory)
    (copy-asset "node_modules/jquery/dist/jquery.min.js" "jquery.js" output-directory)
    (copy-asset "node_modules/jq-console/lib/jqconsole.js" "jqconsole.js" output-directory)
    (jscl-xc::compile-application (list (source-path "repl.lisp" :directory '(:relative "web")))
                               (concatenate 'string output-directory "jscl-web.js"))))

(defun build-node-repl (output-directory &optional (jscl-name "jscl"))
  "Build Node.js REPL into OUTPUT-DIRECTORY, depending on JSCL-NAME module."
  (let ((*package* (find-package "JSCL-XC")))
    (jscl-xc::compile-application (list (source-path "node.lisp" :directory '(:relative "node")))
                               (concatenate 'string output-directory jscl-name "-node.js")
                               :shebang t :place "" :jscl-name (concatenate 'string "./" jscl-name))))

(defun build-web-worker-repl (output-directory)
  "Build web worker REPL into OUTPUT-DIRECTORY."
  (let ((*package* (find-package "JSCL-XC"))
        (*readtable* *jscl-xc-readtable*))
    (copy-asset "worker/index.html" "worker.html" output-directory)
    (copy-asset "worker/main.js" "main.js" output-directory)
    (copy-asset "worker/service-worker.js" "service-worker.js" output-directory)
    (jscl-xc::compile-application (list (source-path "worker.lisp" :directory '(:relative "worker")))
                               (concatenate 'string output-directory "jscl-worker.js"))))

(defun build-deno-repl (output-directory)
  "Build Deno REPL into OUTPUT-DIRECTORY."
  (let ((*package* (find-package "JSCL-XC"))
        (*readtable* *jscl-xc-readtable*))
    (jscl-xc::compile-application (list (source-path "repl.lisp" :directory '(:relative "deno")))
                               (concatenate 'string output-directory "jscl-deno.js"))))

(defun build-tests (output-directory)
  "Build test suite into OUTPUT-DIRECTORY."
  (let ((*package* (find-package "JSCL-XC"))
        (*readtable* *jscl-xc-readtable*))
    (copy-asset "tests.html" "tests.html" output-directory)
    ;; Load tests.lisp to get get-test-files function
    (load (source-path "tests" :directory nil :type "lisp"))
    (jscl-xc::compile-application
     (cons "tests.lisp" (funcall (find-symbol "GET-TEST-FILES" "JSCL-XC")))
     (concatenate 'string output-directory "jscl-tests.js"))))


;;; EOF
