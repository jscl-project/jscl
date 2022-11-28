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


;;; EXPERIMENTAL FFI
;;; _jsBadValues - new features
(defconstant v-undef (jscl::get-js-undefined))
(defconstant v-null (jscl::get-js-null))
(let* ((fob (jscl::get-js-bvo))
       (js-null ((oget fob "gvN")))
       (js-undef ((oget fob "gvU")))
       ((abv (jscl::oget fob "_wtf")))
       (js-ara (make-new #j:Array 1000))
       (nc)
       (nc2))
;;; test what v-undef & js-undef eq js: undefined
  (test (js-undefined-p v-undef))
  (test (js-null-p v-null))
  (test (js-undefined-p js-undef))
  (test (js-null-p js-null))
;;; test native array with null/undefined values
  ;;(test (eq (aref abv 0) js-null))
  ;;(test (eq (aref abv 1) js-undef))
  ;;(test (eq (aref abv 0) v-null))
  ;;(test (eq (aref abv 1) v-undef))
;;; array test with values `undefined` and/or `null`
  (test (eq (aref js-ara 0) v-undef))
  (test (eq (aref js-ara 100) js-undef))
  (test (eq 1000 (count js-undef js-ara)))
  (test (eq 1000 (count-if (lambda (x) (js-undefined-p x)) js-ara)))
  (test (eq 1000 (count v-undef js-ara)))
  (test (eq 1000 (count-if (lambda (x) (and (js-undefined-p x) (eq x v-undef))) js-ara)))
  (test (progn
          (handler-case
              (progn
                (loop for i from 1 below 99 do (setf (aref js-ara i) js-null))
                t)
            (error (m) nil))))
  (test (eq (count js-null js-ara)
            (count-if 
                (lambda (x) (and (js-null-p x) (eq x v-null)))
                js-ara))))

;;; list-to-vector / vector-to-list / js-to-lisp / lisp-to-js test
;;; with local lisp `constant` v-undef
;;; type integrity check
(test
 (mv-eql
  (let* ((varu (make-array 10 :initial-element v-undef))
         (laru (make-list 10 :initial-element v-undef))
         (u-type (*gensym*)))

    (deftype js-evil-undef () `(satisfies jscl::js-undefined-p))
    (deftype js-evil-null () `(satisfies jscl::js-null-p))
    (deftype js-evils () `(or js-evil-undef js-evil-null))
  
    (let ((tl (jscl::vector-to-list varu))
          (tv (jscl::list-to-vector laru))
          (result0)
          (result1))
      ;; vector list -> list
      (setq result0
            (map 'list (lambda (x y)
                         (and (jscl::js-undefined-p x) (jscl::js-undefined-p y))
                         (eq x y))
                 varu
                 laru))
      ;; converted vector list -> vector
      (setq result1
            (map 'vector (lambda (x y)
                           (and (jscl::js-undefined-p x) (jscl::js-undefined-p y))
                           (eq x y))
                 tl
                 tv))
      (values
       (every #'identity result0)
       (every #'identity result1)
       ;; very superficial type integrity check
       (every (lambda (x) (typep x '(satisfies jscl::js-undefined-p))) varu)
       (every (lambda (x) (typep x '(satisfies jscl::js-undefined-p))) laru)
       (every (lambda (x) (typep x 'js-evils)) laru)
       (every (lambda (x) (typep x 'js-evil-undef)) laru)
       (every (lambda (x) (typep x 'js-evil-null)) laru)
       (typecase (nth 3 laru)
         (js-evil-undef :demigod) (js-evil-null :evil) (t :damn))
       (typecase (aref varu (random 10))
         (js-evil-undef :demigod) (js-evil-null :evil) (t :damn)) 
       )))
  T T T T T T NIL :DEMIGOD :DEMIGOD))

;;; EOF
