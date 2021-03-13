;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/multiple-values.lisp!")

;;; Regression for issue
;;;   https://github.com/jscl-project/jscl/issues/341
;;;
;;; This is written in a block/return in an attempt to isolate the
;;; problem from the context of the `test` macro:
(defun test-progn-multiple-value ()
  (block nil
    (return (eq 42 (progn nil (values 42))))))

(test (test-progn-multiple-value))

;;; EOF
