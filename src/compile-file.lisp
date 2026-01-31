;;; compile-file.lisp

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

(defun !compile-file (filename out &key print verbose load #+jscl (sync t))
  "Compile expressions in FILENAME and write to OUT stream.

If LOAD is true, behaves like LOAD instead: all EVAL-WHEN are
processed under :execute situation, and each expression is evaluated
immediately after compiled.

If LOAD is false, the caller is responsible for establishing
WITH-COMPILATION-ENVIRONMENT context, so that dumped literals etc can
be shared potentially cross-file. If LOAD is true, !COMPILE-FILE wraps
compilation of every expression inside a different
WITH-COMPILATION-ENVIRONMENT context (to enable JS evaluation under
global scope), thus no need for the caller to do so."
  (let ((*compiling-file* (not load))
        (*compiling-in-process* nil)
        (*compile-print* print)
        (*compile-verbose* verbose)
        (*package* *package*))
    (with-open-file (stream filename :direction :input #+jscl :sync #+jscl sync)
      (when *compile-verbose*
        (format t "~a ~a...~%" (if load "Loading" "Compiling")
                #+jscl filename #-jscl (enough-namestring filename)))
      (let ((eof (gensym "COMPILE"))
            (expr nil))
        (while t
          (setq expr (ls-read stream nil eof))
          (when (eql expr eof)
            (return))
          (let ((code (if load
                          (with-compilation-environment
                            (compile-toplevel expr t t))
                          (compile-toplevel expr))))
            (write-string code out)
            (when load
              #+jscl (let ((rc (js-eval code nil)))
                       (when *compile-print* (format t "=> ~a~%" rc)))
              #-jscl (error "Can't load on host"))))))))

(defun %write-file-prologue (out place)
  (format out "if (typeof importScripts !== 'undefined') importScripts('~Ajscl.js');
(function(jscl){
'use strict';
(function(internals){ var values = internals.values;"
          place))

(defun %write-file-epilogue (out place)
  (format out "})(jscl.internals);
})( typeof require !== 'undefined'? require('~Ajscl'):
typeof window !== 'undefined'? window.jscl: self.jscl )"
          place))

(defun compile-application (files output &key shebang (place "./"))
  (let ((*features* #+jscl *features* #-jscl (list :jscl :jscl-xc)))
    (with-compilation-environment
      (with-open-file (out output :direction :output :if-exists :supersede)
        (when shebang
          (format out "#!/usr/bin/env node~%"))
        (%write-file-prologue out place)
        (dolist (input files)
          (!compile-file input out :verbose t))
        (%write-file-epilogue out place)
        output))))

#+jscl
(defun compile-file (input-file &key output-file verbose print (place "./"))
  (unless output-file
    (setq output-file (concat input-file ".js")))
  (with-open-file (out output-file :direction :output :if-exists :supersede)
    (%write-file-prologue out place)
    (with-compilation-environment
      (!compile-file input-file out :verbose verbose :print print))
    (%write-file-epilogue out place))
  output-file)
