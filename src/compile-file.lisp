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

(defun !compile-file (filename out &key print verbose #+jscl (sync t))
  "Compile expressions in FILENAME and write to OUT stream."
  (let ((*compile-print* print)
        (*compile-verbose* verbose)
        (*package* *package*))
    (with-open-file (stream filename :direction :input #+jscl :sync #+jscl sync)
      (when *compile-verbose*
        (format t "; Compiling ~a...~%" filename))
      (let ((eof (gensym "COMPILE"))
            (expr nil))
        (while t
          (setq expr (ls-read stream nil eof))
          (when (eql expr eof)
            (return))
          (let ((code (compile-toplevel expr)))
            (write-string code out)))))))

(defun %write-file-prologue (out place jscl-name)
  (format out "if (typeof importScripts !== 'undefined') importScripts('~A~A.js');
(function(jscl){
'use strict';
(function(internals){ var values = internals.values;"
          place jscl-name))

(defun %write-file-epilogue (out place jscl-name)
  (format out "})(jscl.internals);
})( typeof require !== 'undefined'? require('~A~A'):
typeof window !== 'undefined'? window.jscl: self.jscl )"
          place jscl-name))

(defun compile-application (files output &key shebang (place "./") (jscl-name "jscl"))
  (let ((*features* #+jscl *features* #-jscl (list :jscl :jscl-xc)))
    (with-compilation-environment
      (with-open-file (out output :direction :output :if-exists :supersede)
        (when shebang
          (format out "#!/usr/bin/env node~%"))
        (%write-file-prologue out place jscl-name)
        (dolist (input files)
          (!compile-file input out :verbose t :print t))
        (%write-file-epilogue out place jscl-name)
        output))))

#+jscl
(defun compile-file (input-file &key output-file verbose print (place "./"))
  (unless output-file
    (setq output-file (concat input-file ".js")))
  (with-open-file (out output-file :direction :output :if-exists :supersede)
    (%write-file-prologue out place "jscl")
    (with-compilation-environment
      (!compile-file input-file out :verbose verbose :print print))
    (%write-file-epilogue out place "jscl"))
  output-file)
