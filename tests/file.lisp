;;; -*- mode:lisp; coding:utf-8 -*-
(/debug "perform test/file.lisp!")

(#j:Fs:mkdirSync ".jscl_test/" (new "recursive" t))
(defvar *tmp-dir* (#j:Fs:mkdtempSync ".jscl_test/test-"))

(test
 (progn
   (with-open-file (s (concat *tmp-dir* "/file-1.txt")
                      :direction :output :if-exists :supersede)
     (write-line "abc" s)
     (write-line "foo" s))
   (with-open-file (s (concat *tmp-dir* "/file-1.txt"))
     (and (equal (read-line s nil) "abc")
          (equal (read-line s nil) "foo")
          (equal (read-line s nil) nil)))))

(test (probe-file (concat *tmp-dir* "/file-1.txt")))
