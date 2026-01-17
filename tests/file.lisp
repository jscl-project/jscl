;;; -*- mode:lisp; coding:utf-8 -*-
(/debug "perform test/file.lisp!")

(defvar *tmp-dir* (#j:Fs:mkdtempDisposableSync "JSCL_TEST"))

(test
 (progn
   (with-open-file (s (concat (oget *tmp-dir* "path") "file-1.txt")
                      :direction :output :if-exists :supersede)
     (write-line "abc" s)
     (write-line "foo" s))
   (with-open-file (s (concat (oget *tmp-dir* "path") "file-1.txt"))
     (and (equal (read-line s nil) "abc")
          (equal (read-line s nil) "foo")
          (equal (read-line s nil) nil)))))

((oget *tmp-dir* "remove"))
