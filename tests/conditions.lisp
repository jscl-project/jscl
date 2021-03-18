;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "Perform tests/conditions.lisp")

(defun condition-hierarhy-test (condition)
  (handler-case
      (progn
        (jscl::%%signal condition))
    (condition (msg) 
      (typecase msg
        (type-error :type-error)
        (error :error)
        (warning :warning)
        (t :condition)))))

(test
 (mv-eql
  (values
   (condition-hierarhy-test (jscl::%%make-condition 'warning))
   (condition-hierarhy-test (jscl::%%make-condition 'error))
   (condition-hierarhy-test (jscl::%%make-condition 'condition))
   (condition-hierarhy-test (jscl::%%make-condition 'type-error :datum 'test :expected-type :any)))
  :WARNING
  :ERROR
  :CONDITION
  :TYPE-ERROR))


;;; EOF
