;;; helpers.lisp --- Shared test utilities

(in-package :jscl-tests)

#+jscl
(when (find :node *features*)
  (let ((fs (require "fs")))
    (funcall (jscl/ffi:oget fs "mkdirSync") #j".jscl_test"
             (jscl/ffi:object "recursive" #j:true)))

  (defvar *test-tmp-dir*
    (jscl/ffi:clstring
     (funcall (jscl/ffi:oget (require "fs") "mkdtempSync") #j".jscl_test/test-")))

  (defun make-test-tmp-file (name)
    "Return a path for a temporary file NAME inside the test temp directory."
    (format nil "~a/~a" *test-tmp-dir* name)))
