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
              #.(violet-volts-p) *version*
              #.(git-commit) filename)
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

(defun jscl/cl::compile-file
    (input-file &key
                  (output-file
                   (make-pathname :type "js"
                                  :defaults input-file))
                  ((verbose *compile-verbose*) *compile-verbose*)
                  ((print *compile-print*) *compile-print*)
                  (external-format :utf-8)
                  (trace-file nil))
  "Compile a lisp file into a JavaScript file."
  (assert (eql external-format :utf-8)
          (external-format)
          "External format must be :UTF-8 for now.")
  (with-open-file (out output-file :direction :output
                       :if-exists :new-version)
    (let ((*trace-output* *trace-output*))
      (unwind-protect
           (progn
             (when trace-file
               (setf *trace-output* (open trace-file
                                          :direction :output
                                          :if-exists :append)))
             (!compile-file input-file out :print (or *compile-verbose*
                                                      *compile-print*)))
        (when trace-file
          (close *trace-output*))))))

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

(defun read-fully (stream)
  (loop with buffer = (make-array #x100
                                  :element-type 'character
                                  :adjustable t
                                  :fill-pointer 0)
     for char = (read-char stream nil nil)
     while char
     do (vector-push-extend char buffer #x100)
     finally (progn
               (adjust-array buffer (fill-pointer buffer))
               (return buffer))))

(defun not-tmp (pathname)
  "To keep compile-time actions from  assuming that SRC-DIR is /tmp when
using Slime."
  (when (not (equal #p"/tmp/" (truename pathname)))
    pathname))

(defvar src-dir (make-pathname
                 :directory
                 (pathname-directory
                  (first (remove-if-not
                          #'probe-file
                          (not-tmp *load-pathname*)
                          (not-tmp *compile-file-pathname*)
                          #p"./src/"
                          #p"./")))))

(defun run-program-compile-time (bin args)
  #+sbcl
  (sb-posix:chdir src-dir)
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

(defun violet-volts-p ()
  (search "romance-ii/jscl"
          (run-program-compile-time "/usr/bin/git"
                                    '("remote" "-v"))))

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
  (append
   (directory (source-pathname "*"
                               :directory '(:relative "tests")
                               :type "lisp"))
   (list (source-pathname "validate.lisp"
                          :directory '(:relative "tests" "loop")
                          :type "lisp")
         (source-pathname "base-tests.lisp"
                          :directory '(:relative "tests" "loop")
                          :type "lisp"))))

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
