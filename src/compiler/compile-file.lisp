;;;; compile-file.lisp — Compiling individual files or application bundles
;;; -*- lisp -*-

(in-package :jscl)


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

(defun !compile-file/form (form in out)
  (let ((compilation (compile-toplevel form)))
    (if (possibly-valid-js-p compilation)
        (when (plusp (length compilation))
          (write-string compilation out))
        (complain-about-illegal-chars form in compilation))))

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
            (!compile-file/form form in out)
            (setf last-form form)
            (incf form-count))
        (end-of-file (c)
          (error "~:(~a~) while reading ~a after ~:r form:~%~s"
                 c (enough-namestring filename)
                 form-count last-form)))
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
})( typeof require !== 'undefined'? require('./jscl'): window.jscl )" ,out)
          (terpri ,out)))

(defmacro with-self-invoking-function ((out) &body body)
  `(progn
     (format ,out "(function(){~%'use strict';~%")
     ,@body
     (format ,out "})();~%")))

(defun write-javascript-for-files (files &optional (stream *standard-output*))
  (let* ((*global-environment* (make-lexenv))
         (*environment* *global-environment*))
    (with-jscl-scoping-function (stream)
      (dolist (input files)
        (terpri stream)
        (!compile-file input stream)))))

(defun compile-application (files output &key shebang)
  (with-open-file (out output :direction :output :if-exists :supersede)
    (when shebang
      (write-string "#!/usr/bin/env node" out)
      (terpri out))
    (with-jscl-scoping-function (out)
      (dolist (file files)
        (fresh-line out)
        (!compile-file file out)))))

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


