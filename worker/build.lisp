;;; worker/build.lisp — Build the web worker REPL
;;;
;;; This file is loaded by jscl-node.js to compile the web worker REPL.

(defun build-worker-repl (output-directory)
  "Build web worker REPL into OUTPUT-DIRECTORY."
  (let ((fs (jscl/node-repl::require "fs")))
    (flet ((copy-asset (src dst)
             ((jscl/ffi:oget fs "copyFileSync")
              (jscl/ffi:jsstring src)
              (jscl/ffi:jsstring (concatenate 'string output-directory dst)))))
      (copy-asset "worker/index.html" "worker.html")
      (copy-asset "worker/main.js" "main.js")
      (copy-asset "worker/service-worker.js" "service-worker.js")))
  (jscl:compile-application (list "worker/worker.lisp")
                            (concatenate 'string output-directory "jscl-worker.js")))
