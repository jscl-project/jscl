;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "Perform tests/conditions.lisp")

(test (block nil
        (handler-bind
            ((error #'(lambda (c) (return c))))
          (error "Error"))))

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
  :WARNING   :ERROR   :CONDITION   :TYPE-ERROR))


(defun frob-simple-condition (c expected-fmt &rest expected-args)
  (and (typep c 'simple-condition)
       (let ((format (simple-condition-format-control c))
	           (args (simple-condition-format-arguments c)))
	       (and (stringp (apply #'format nil format args))
	            t))))

(defun frob-simple-error (c expected-fmt &rest expected-args)
  (and (typep c 'simple-error)
       (apply #'frob-simple-condition c expected-fmt expected-args)))

(defun frob-simple-warning (c expected-fmt &rest expected-args)
  (and (typep c 'simple-warning)
       (apply #'frob-simple-condition c expected-fmt expected-args)))


(test
 (mv-eql
  (values
   (let ((fmt "Error"))
     (handler-case  (error fmt)
       (simple-error (c) (frob-simple-error c fmt))))
   (let* ((fmt "Error")
	        (cnd (make-condition 'simple-error :format-control fmt)))
     (handler-case
         (error cnd)
       (simple-error (c) (frob-simple-error c fmt))))
   (let ((fmt "Error"))
     (handler-case
         (error 'simple-error :format-control fmt)
       (simple-error (c) (frob-simple-error c fmt))))
   (let ((fmt "Error: ~A"))
     (handler-case
         (error fmt 10)
       (simple-error (c) (frob-simple-error c fmt 10))))
   (handler-case
       (signal 'simple-condition)
     (simple-condition (c)  :right)
     (error (c)             :wrong))
   (handler-case
       (signal 'simple-warning)
     (error (c)           :wrong)
     (simple-warning (c)  :right)
     (condition (c)       :wrong2))
   (let ((fmt "Booms!"))
     (handler-case
         (signal 'simple-warning :format-control fmt)
       (simple-warning (c) (frob-simple-warning c fmt)))) )
  T T T T :RIGHT :RIGHT T ))


(defun trap-error-handler (condition)
   (throw 'trap-errors nil))

(defmacro trap-errors (&rest forms)
  `(catch 'trap-errors 
       (handler-case (progn ,@forms)
         (error (msg)
                (trap-error-handler msg)))))
 
(test
 (equal '(1 nil 3)
        (list (trap-errors (jscl::%%signal "Foo.") 1)
              (trap-errors (jscl::%%error  "Bar.") 2)
              (+ 1 2))))


;;; ASSERT case
(test
 (equal '(t nil t nil)
        (list
         (not (assert (= 1 1)))
         (trap-errors (assert (= 1 2)))
         (not (assert (typep 1 'integer)))
         (trap-errors (assert (typep 1 'list))))))


;;; EOF
