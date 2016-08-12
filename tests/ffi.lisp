;;; Tests for Javascript FFI routines.

;;; TODO: Once these are exported under JSCL/FFI, just  :USE that into the testing package. For now,
;;; using JSCL:: prefix.

(test (= ((jscl::oget (jscl::make-new #j:Date 0) "getTime")) 0))
(test (stringp (#j:Date 0)))
(test (< 32 (length (#j:Date 0))))

