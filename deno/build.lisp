;;; deno/build.lisp — Build the Deno REPL
;;;
;;; This file is loaded by jscl-node.js to compile the Deno REPL.

(defun build-deno-repl (output-directory)
  "Build Deno REPL into OUTPUT-DIRECTORY."
  (jscl:compile-application (list "deno/repl.lisp")
                            (concatenate 'string output-directory "jscl-deno.js")))
