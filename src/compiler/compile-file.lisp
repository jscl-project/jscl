;;;; compile-file.lisp  —  Compiling  individual  files  or  application
;;;; bundles
;;; -*- lisp -*-

(in-package :jscl)


(defmacro with-compile-file-bindings ((filename &key verbosep)
                                      &body body)
  `(let* ((*compiling-file* t)
          (*compile-file-pathname* ,filename)
          (*compile-file-truename* (truename *compile-file-pathname*))
          (*compile-print-toplevels* ,verbosep)
          (*package* *package*)
          (source (read-whole-file ,filename))
          (in (make-string-input-stream source)))
     ,@body))

(defun possibly-valid-js-p (string)
  (if (characterp string)
      (or (graphic-char-p string)
          (char= #\newline string))
      (every (lambda (ch)
               (or (graphic-char-p ch)
                   (char= #\newline ch)))
             string)))

(defun complain-about-illegal-chars (form filename form-count
                                     compilation)
  (error "Generated illegal characters (first is ~@c)
Compiling form #~:d:~%~S~%from ~s~%Generated:~%~s"
         (find-if (complement #'possibly-valid-js-p) compilation)
         form-count form filename compilation))


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

(defun !compile-file/form (form form-count filename out)
  (let ((compilation (compile-toplevel form)))
    (if (possibly-valid-js-p compilation)
        (when (plusp (length compilation))
          (write-string compilation out))
        (complain-about-illegal-chars
         form form-count filename compilation))))

(defmacro  doforms ((form  stream)  &body body)        ;  FIXME: Not  to
                                        ; use LOOP?
  "Read  forms  from   STREAM,  binding  each  in  turn   to  FORM,  and
execute BODY. Also binds LAST-FORM and FORM-COUNT."
  (let ((eof (gensym "EOF-")))
    `(loop
        with ,eof = (gensym "EOF-")
        for form-count from 0
        for ,form = (read ,stream nil ,eof)
        for last-form = nil then ,form
        while (not (eql ,eof form))
        do (progn ,@body))))

(defun !compile-file (filename out &key print)
  "Compile  FILENAME, writing  the  Javascript to  OUT. Print  top-level
forms if PRINT is set."
  (with-compilation-restarts (filename)
    (with-compile-file-bindings (filename :verbosep print)
      (format out "~&/** @preserve
 *  ⸨☕λ⸩ Compiled by 𝓙𝓢ℂ𝕃
 * ~@[(Romance Ⅱ fork) ~]version ~a, Git commit ~a
 * Source file: ~a */" 
              *version* (violet-volts-p)
              (git-commit) filename)
      (when print
        (format *trace-output*
                "~&;;;; Compiling file ~a... "
                (enough-namestring filename)))
      (let (form-count last-form)
        (handler-case
            (doforms (form in)
              (!compile-file/form form form-count
                                  (enough-namestring filename) out))
          (end-of-file (c)
            (error "~:(~a~) while reading ~a after ~:r form:~%~s"
                   c (enough-namestring filename)
                   form-count last-form))))
      (format t " Done."))))
#+jscl (fset 'compile-file '!compile-file)

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
})( typeof require !== 'undefined'? require('./jscl'): window.jscl )"
                        ,out)
          (terpri ,out)))

(defmacro with-self-invoking-function ((out) &body body)
  `(progn
     (format ,out "(function(){~%'use strict';~%")
     ,@body
     (format ,out "})();~%")))

(defun write-javascript-for-files (files
                                   &optional (stream *standard-output*))
  (let* ((*global-environment* (make-lexenv))
         (*environment* *global-environment*)
         (*toplevel-compilations* nil))
    (with-jscl-scoping-function (stream)
      (dolist (input files)
        (terpri stream)
        (!compile-file input stream)))))

(defun file-set-execute-permission (filename)
  "This is  a bit  implementation-specific, but  it will  try to  set +x
permissions on FILENAME, if we  know how in the current implementation."
  #+sbcl
  (sb-posix:chmod filename #o755)
  #+ecl
  (ext:chmod filename #o755)
  #- (or sbcl ecl)
  (warn "You'll need to set executable permissions yourself"))

(defun git-commit ()
  (or #+asdf
      (remove #\Newline
              (uiop:run-program '("git" "rev-parse" "HEAD") :output :string))
      #+sbcl
      (read-line
       (sb-ext:process-output
        (sb-ext:run-program "/usr/bin/git" '("rev-parse" "HEAD")
                            :wait t
                            :output :stream))) 
      "(unknown)"))

(defun violet-volts-p ()
  ;; FIXME
  t)

(defun slime-clear ()
  #+swank
  (swank:eval-in-emacs '(progn
                         (slime-repl)
                         (slime-repl-clear-buffer)
                         (form-feed-mode t))))

(defun compile-application (files output &key shebang (verbosep t))
  (when verbosep
    (slime-clear))
  (with-open-file (out output :direction :output :if-exists :supersede)
    (when verbosep
      (format t ";;;; ⸨☕λ⸩ 𝓙𝓢ℂ𝕃 Compiling ~:(~a~)" output))
    (when shebang
      (write-string "#!/usr/bin/env node" out)
      (terpri out))
    (with-jscl-scoping-function (out)
      (dolist (file files) 
        (!compile-file file out :print verbosep))))
  (when shebang
    (file-set-execute-permission output)))

(defun test-files ()
  (directory (source-pathname :wild
                              :directory '(:relative "tests")
                              :type "lisp")))

(defun compile-test-suite ()
  (compile-application
   `(,(source-pathname "tests.lisp" :directory nil)
      ,@(test-files)
      ,(source-pathname "tests-report.lisp" :directory nil))
   (merge-pathnames "tests.js" *base-directory*)))

(defun compile-web-repl ()
  (compile-application
   (list (source-pathname "repl.lisp"
                          :directory '(:relative "repl-web")))
   (merge-pathnames "repl-web.js" *base-directory*)))

(defun compile-node-repl ()
  (compile-application
   (list (source-pathname "repl.lisp"
                          :directory '(:relative "repl-node")))
   (merge-pathnames "jscl-repl" *base-directory*)
   :shebang t))

(defun compile-jscl.js (verbosep)
  (with-compilation-environment
    (with-open-file (out (merge-pathnames "jscl.js" *base-directory*)
                         :direction :output
                         :if-exists :supersede)
      (with-self-invoking-function (out)
        (write-string (read-whole-file (source-pathname "prelude.js"))
                      out)
        (do-source input :target
          (!compile-file input out :print verbosep))
        (dump-global-environment out)))))

(defmacro with-bootstrap ((verbosep) &body body)
  `(progn
     (proclaim '(optimize (speed 0) (safety 3) (debug 3)))
     (let ((*features* (cons :jscl-xc *features*))
           (*package* (find-package "JSCL"))
           (*toplevel-compilations* nil)
           (*default-pathname-defaults* *base-directory*))
       (setq *environment* *global-environment*)
       (format *trace-output*
               "~&~|~2%;;;; — Bootstrapping core for JSCL, version ~a.~%"
               *version*)
       (compile-jscl.js ,verbosep)
       (report-undefined-functions)
       (when verbosep
         (format *trace-output*
                 "~&~|~2%;;;; — Core done; on to test suite …~%"))
       (compile-test-suite)
       (when verbosep
         (format *trace-output*
                 "~2&;;;; … Done, compiled jscl.js and test suite.~%~|~%"))
       ,@body)))

(defun bootstrap (&optional verbosep)
  (with-bootstrap (verbosep)
    (compile-web-repl)
    (compile-node-repl)))

(defun bootstrap-core (&optional verbosep)
  "Build the core JSCL jscl.js file and test suite."
  (with-bootstrap (verbosep)))
