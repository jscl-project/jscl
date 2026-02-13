;;; -*- mode:lisp; coding:utf-8 -*-

#+node
(progn
  ;; Require the fs module for file system operations
  ;;
  ;; TODO: should require() be available here? now it's only defined
  ;; for node repl, but tests are not built with node support because
  ;; they also run in the browser.
  ;;
  (unless (in "Fs" jscl/ffi:*root*)
    (setf #j:Fs (funcall (jscl::%js-vref "require") #j"fs")))

  (defvar *tmp-dir* (jscl/ffi:clstring (#j:Fs:mkdtempSync #j".jscl_test/test-")))

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

  (test (probe-file (concat *tmp-dir* "/file-1.txt"))))
