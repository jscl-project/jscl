;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/ffi.lisp!")

;;; Tests for Javascript FFI routines.

;;; TODO: Once these are exported under JSCL/FFI, just  :USE that into the testing package. For now,
;;; using JSCL:: prefix.

(test (= ((jscl::oget (jscl::make-new #j:Date 0) "getTime")) 0))
(test (stringp (#j:Date 0)))
(test (< 32 (length (#j:Date 0))))

;;; Array
(let ((v1 #(mediane)))
  ((jscl::oget v1 "push") 'right)
  ((jscl::oget v1 "unshift") 'left)
  (test (equal ((jscl::oget v1 "indexOf") 'mediane) 1))
  (test (equal ((jscl::oget v1 "indexOf") 'left) 0))
  (test (equal ((jscl::oget v1 "indexOf") 'right) 2))
  (test (equal (map 'list #'identity v1) '(left mediane right))))

(let ((v2 (jscl::make-new #j:Array 'left "Mediane" 'right)))
  (test (equal (jscl::vector-to-list v2) '(left "Mediane" right))))

;;; String
(test (string= ((oget (jscl::lisp-to-js "abcdef") "substr") 1 2) "bc"))

;;; Number's format output
;;; for future features
(let ()
  (labels
      ((make-number (value) 
         (jscl::make-new #j:Number value))
       (float-Exponential (value &optional (fraction 5))
         ((jscl::oget (make-Number value) "toExponential") fraction))
       (number-to-fixed (value &optional (digits 0))
         ((jscl::oget  (make-Number value) "toFixed") digits))
       (number-by-radix (value &optional (radix 10))
         ((jscl::oget (make-Number value) "toString") radix)))
    (test (string= "1.23e+2" (float-exponential 123.1 2)))
    (test (string= "123.01" (number-to-fixed 123.012345 2)))
    (test (string= "a" (number-by-radix 10 16))) 
    (test (string= "1100100" (number-by-radix 100 2)))))

;;; test what simple-object (Object.create(null)) 
(test (string= "#<JS-OBJECT [object Simple-object]>" (write-to-string *package-table*)))
(test (equal t (js-object-p *package-table*)))

;;; test what new Array isnt js-object
(let ((obj (make-new #j:Array)))
  (setf (oget obj "name") 'one)
  (test (and (objectp obj)
             (not (js-object-p obj)))))

;;; test what new Date is js-object & have a signature 
(let ((obj (make-new #j:Date)))
  (test (js-object-p obj))
  (test (js-object-signature obj)))

;;; test in can handle numbers

(let ((obj (make-new #j:Object)))
  (test (js-object-p obj))
  (test (oset 456 obj 123))
  (test (equal 456 (oget obj 123))))

;;; EOF
