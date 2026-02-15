;;; web/build.lisp — Build the web REPL
;;;
;;; This file is loaded by jscl-node.js to compile the web REPL.

(defun build-web-repl (output-directory)
  "Build web REPL into OUTPUT-DIRECTORY."
  (let ((fs (jscl/node-repl::require "fs")))
    (flet ((copy-asset (src dst)
             ((jscl/ffi:oget fs "copyFileSync")
              (jscl/ffi:jsstring src)
              (jscl/ffi:jsstring (concatenate 'string output-directory dst)))))
      (copy-asset "web/index.html" "index.html")
      (copy-asset "web/style.css" "style.css")
      (copy-asset "node_modules/jquery/dist/jquery.min.js" "jquery.js")
      (copy-asset "node_modules/jq-console/lib/jqconsole.js" "jqconsole.js")))
  (jscl:compile-application (list "web/repl.lisp")
                            (concatenate 'string output-directory "jscl-web.js")))
