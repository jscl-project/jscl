;;; -*- mode:lisp; coding:utf-8 -*-

#+node
(progn
  (let ((fs (require "fs")))
    ((jscl/ffi:oget fs "mkdirSync") #j".jscl_test" (jscl/ffi:object "recursive" #j:true))
    (defvar *tmp-dir* (jscl/ffi:clstring ((jscl/ffi:oget fs "mkdtempSync") #j".jscl_test/test-"))))

  (test
   (progn
     (with-open-file (s (concatenate 'string *tmp-dir* "/file-1.txt")
                        :direction :output :if-exists :supersede)
       (write-line "abc" s)
       (write-line "foo" s))
     (with-open-file (s (concatenate 'string *tmp-dir* "/file-1.txt"))
       (and (equal (read-line s nil) "abc")
            (equal (read-line s nil) "foo")
            (equal (read-line s nil) nil)))))

  (test (probe-file (concatenate 'string *tmp-dir* "/file-1.txt"))))
