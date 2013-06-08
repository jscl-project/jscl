;;;; Tests for DEFUN

;;; Regression test for #111
(test (eql (defun foo () "foo's" ()) 'foo))
