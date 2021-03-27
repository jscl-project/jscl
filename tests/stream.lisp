;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/stream.lisp!")

(with-input-from-string (in "jscl::foo jscl::bar jscl::baz")
  (test (eq (read in) 'jscl::foo))
  (test (eq (read in) 'jscl::bar))
  (test (eq (read in) 'jscl::baz)))
;;; EOF
