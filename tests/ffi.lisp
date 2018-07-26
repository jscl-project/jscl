(tests (= ((oget (make-new #j:Date 0) "getTime")) 0)
       (stringp (#j:Date 0))
       (< 32 (length (#j:Date 0))))

