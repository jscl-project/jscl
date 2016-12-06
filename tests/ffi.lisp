;;; Tests for Javascript FFI routines.

#+jscl ;; Not expected to work anywhere else.
(progn
  (test (= ((jscl/ffi:oget (jscl/ffi:make-new #j:Date 0) "getTime")) 0))
  (test (stringp (#j:Date 0)))
  (test (< 32 (length (#j:Date 0)))))
