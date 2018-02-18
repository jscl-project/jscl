(test (string= "a" (format nil "a")))

(test (string= "~" (format nil "~~")))

(test (string= "a~a" (format nil "a~~a")))

(test (string= "a
a" (format nil "a~%a")))

(test (string= "this is foo" (format nil "this is ~a" "foo")))
(test (string= "this is foo" (format nil "this is ~A" "foo")))

(test (string= "this is \"foo\"" (format nil "this is ~s" "foo")))
(test (string= "this is \"foo\"" (format nil "this is ~S" "foo")))

(test (string= "this is 2" (format nil "this is ~*~A" 1 2)))

;;; ~C
(test (string= "a" (format nil "~C" #\a)))
(test (string= " " (format nil "~C" #\space)))
(test (string= "Space" (format nil "~:C" #\space)))
(test (string= "Newline" (format nil "~:C" #\newline)))

;;; Premature end of control string
(test 
 (string= "Premature end of control string \"result ~\"" 
          (let ((result))
              (handler-case 
                  (progn 
                      (format nil "its ok ~~")
                      (format nil "result ~"))
                (error (msg)
                    (setq result (format nil (car (jscl::!condition-args msg)) (cadr (jscl::!condition-args msg))))))
              result)))
