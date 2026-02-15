;;; defstruct.fixtures.lisp --- Defstruct redefinition tests
;;;
;;; This file is loaded (not compiled) by defstruct.lisp so that
;;; defstruct forms are only eval'd at runtime.  When a test file is
;;; processed via compile-file, toplevel defstruct forms get eval'd at
;;; both compile time and load time, which pollutes the runtime state and
;;; breaks redefinition semantics.  Loading this file avoids that.

(in-package :jscl-tests)

(defstruct redef-struct-test a b c)
(defparameter *redef-struct-1* (make-redef-struct-test :a 1 :b 2 :c 3))
(defparameter *redef-struct-p-1* #'redef-struct-test-p)

(test (let ((warning-issued))
        (handler-bind ((warning (lambda (c) (setq warning-issued c))))
          (defstruct redef-struct-test b c))
        warning-issued))
(defparameter *redef-struct-2* (make-redef-struct-test :b 1 :c 2))
(defparameter *redef-struct-p-2* #'redef-struct-test-p)
(test (string-equal
       (format nil "~S" *redef-struct-2*)
       "#S(JSCL-TESTS::REDEF-STRUCT-TEST :B 1 :C 2)"))
(test (string-equal
       (format nil "~S" *redef-struct-1*)
       "#<JSCL-TESTS::REDEF-STRUCT-TEST (OBSOLETE) :A 1 :B 2 :C 3>"))

;;; New predicate is generated after redefinition
(test (not (redef-struct-test-p *redef-struct-1*)))
(test (funcall *redef-struct-p-1* *redef-struct-1*))
(test (not (funcall *redef-struct-p-1* (make-redef-struct-test))))

(test (let ((warning-issued))
        (handler-bind ((warning (lambda (c) (setq warning-issued c))))
          (defstruct redef-struct-test (b 3) c))
        (not warning-issued)))
(test (string-equal
       (format nil "~S" (make-redef-struct-test :c 3))
       "#S(JSCL-TESTS::REDEF-STRUCT-TEST :B 3 :C 3)"))

;;; Redefinition does not change layout, predicate remain valid
(test (not (redef-struct-test-p *redef-struct-1*)))
(test (funcall *redef-struct-p-2* (make-redef-struct-test)))
(test (redef-struct-test-p *redef-struct-2*))

;;; included in another struct, redefinition no longer possible
(defstruct (redef-struct-test-child (:include redef-struct-test)))
(test (not (ignore-errors (defstruct redef-struct-test a b c) t)))
