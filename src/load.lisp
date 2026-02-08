;;; -*- mode:lisp;  coding:utf-8 -*-

;;;
;;; LOAD - load & compile Common Lisp file.
;;;        Simple implementation of the common Lisp function 'load'
;;;        for JSCL environment.

;;;
;;; JSCL is free software: you can redistribute it and/or
;;; modify it under the terms of the GNU General Public License as
;;; published by the Free Software Foundation, either version 3 of the
;;; License, or (at your option) any later version.
;;;
;;; JSCL is distributed in the hope that it will be useful, but
;;; WITHOUT ANY WARRANTY; without even the implied warranty of
;;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
;;; General Public License for more details.
;;;
;;; You should have received a copy of the GNU General Public License
;;; along with JSCL.  If not, see <http://www.gnu.org/licenses/>.


;;; (load name &key verbose sync output place hook)
;;;
;;; sync   -  use node.js 'fs' facilities for synchronous read/write ops
;;;          if value is :maybe, use 'fs' if available, and async XHR otherwise
;;;
;;; The following arguments are *deprecated*. Consider using standard COMPILE-FILE.
;;;
;;; output - (deprecated) optional, only for node/electron platform
;;;          A JavaScript file will be saved to 'output' path on the local file system,
;;;          which can be loaded later by the function 'require'.
;;;
;;; place  - (deprecated) optional, only for node/electron platform
;;;          required 'jscl.js' path, by default eq './'
;;;          'place' is the file system location from where the module 'jscl.js'
;;;          will be loaded by function 'require'
;;;
;;;          Example:
;;;
;;;          By default your 'jscl.js' location is "./"
;;;
;;;          (load "src/project/jso.lisp" :output "./lib/app/jso/jso" :place "../../../")
;;;
;;;          1. ./lib/app/jso must be exists
;;;          2. ./lib/app/jso must contains file 'package.json' with (as minimum):
;;;                        {
;;;                            "name": "jso",
;;;                            "main": "jso.js"
;;;                        }
;;;          So, (require "./lib/app/jso/jso") will load file 'jso.js' from './lib/app/jso'
;;;
;;;          See node.js documentation for 'require' function
;;;
;;; hook  - (deprecated) an array to temporarily store js-code
;;;
;;;          IMPORTANT!! don't use literal #() (see Issue #345)
;;;          (setq bin (make-array 0))
;;;          (load "file1.lisp" :hook bin)
;;;          (load "file2.lisp" :hook bin)
;;;          (load "file3.lisp" :hook bin :output "lib.js")
;;;              => will bundle js-code file1, file2, file3 from bin to "lib.js"
;;;
;;;         
;;;         you will use (require "./lib"), (load "./lib.js"), or use html tag:
;;;         <script src="lib.js" type="text/javascript" charset="utf-8"></script>
;;;         without compilation.
;;;
;;; have a fun
;;;

(defun load (name &key verbose (sync :maybe) output (place "./") hook)
  (let ((ext (filename-extension name)))
    ;; Try to guess extension
    (unless ext
      (dolist (ext-guess '(".js" ".lisp" ".jso" ".lsp" ".cjs")
                         (error "Cannot guess extension for ~a" name))
        (when (probe-file (concat name ext-guess))
          (setq name (concat name ext-guess)
                ext ext-guess)
          (return))))
    (cond ((member ext '("lisp" "lsp") :test #'string=)
           (when output
             (unless (find :node *features*)
               (error "Cannot generate output file from load on this platform"))
             (unless hook
               (setq hook (make-array 0))))
           (let ((*package* *package*)
                 (hook-stream (if hook
                                  (make-stream
                                   :write-fn (lambda (string) ((oget hook "push") string)))
                                  (make-broadcast-stream))))
             (with-open-file (input name :direction :input :sync sync)
               (let ((eof (gensym "LOAD")))
                 (while t
                   (let ((expr (ls-read input nil eof)))
                     (when (eql expr eof)
                       (return))
                     (let ((jscode (eval-toplevel expr 'load)))
                       (js-eval jscode nil)
                       (write-string jscode hook-stream)))))))
           (when output
             (with-open-file (out output :direction :output :if-exists :supersede)
               (%write-file-prologue out place)
               ((oget hook "forEach")
                (lambda (stm &rest others)
                  (write-string stm out)))
               (format t "Bundled ~d expressions into ~a~%" (length hook) output)
               (%write-file-epilogue out place)))
           t)
          ((member ext '("js" "cjs" "jso") :test #'string=)
           (let ((*package* *package*))
             (if (find :node *features*)
                 (require (concat "./" name))
                 (load-js name)))
           t)
          (t (error "Don't know how to LOAD ~a: ~a" ext name)))))

;;; other loader functions
;;;
;;; Warning:
;;;        The both functions only for rapidly development
;;;        Not for production

;;;
;;; load-js - load javascript code from local file system (by FILE:),
;;;           or remote resource (by HTTP:) with used html tag 'link/stylesheet'
(defun load-js (from &optional onload)
  (let ((link (#j:window:document:createElement #j"script"))
        (body #j:window:document:body ))
    (setf (oget link "charset") #j"utf-8"
          (oget link "type") #j"text/javascript"
          (oget link "src") (jsstring from)
          (oget link "onerror") (lambda (ignore)
                                  (format t "~%Error loading ~s file.~%" from)
                                  (funcall ((oget body "removeChild" "bind") body link ))
                                  (values)))
    (when onload
      (setf (oget link "onload") (lambda (ignore)
                                   (funcall ((oget body "removeChild" "bind") body link ))
                                   (funcall onload)
                                   (values))))
    (funcall ((oget body "appendChild" "bind" ) body link))
    (unless onload
      (funcall ((oget body "removeChild" "bind") body link )))
    (values) ))


;;;
;;; load-css - load cascade style from local file system (by FILE:),
;;;           or remote resource (by HTTP:) with used html tag 'link/stylesheet'
(defun load-css (from &optional onload)
  (let ((link (#j:window:document:createElement #j"link"))
        (body #j:window:document:body ))
    (setf (oget link "rel") #j"stylesheet"
          (oget link "type") #j"text/css"
          (oget link "href") (jsstring from)
          (oget link "onerror") (lambda (ignore)
                                  (format t "~%Error loading ~s file.~%" from)
                                  (funcall ((oget body "removeChild" "bind") body link ))
                                  (values)))
    (when onload
      (setf (oget link "onload")
            (lambda (ignore) (funcall onload from))))
    (funcall ((oget body "appendChild" "bind" ) body link))
    (values) ))


;;; EOF
