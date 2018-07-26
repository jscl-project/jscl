(tests (string= "a" (format nil "a"))

       (string= "~" (format nil "~~"))

       (string= "a~a" (format nil "a~~a"))

       (string= "a
a" (format nil "a~%a"))

       (string= "this is foo" (format nil "this is ~a" "foo"))
       (string= "this is foo" (format nil "this is ~A" "foo"))

       (string= "this is \"foo\"" (format nil "this is ~s" "foo"))
       (string= "this is \"foo\"" (format nil "this is ~S" "foo"))

       (string= "this is 2" (format nil "this is ~*~A" 1 2))

;;; ~C
       (string= "a" (format nil "~C" #\a))
       (string= " " (format nil "~C" #\space))
       (string= "Space" (format nil "~:C" #\space))
       (string= "Newline" (format nil "~:C" #\newline)))

;;; Premature end of control string
#+jscl (tests 
	(string= "Premature end of control string \"result ~\"" 
		 (let ((result))
		   (handler-case 
                       (progn 
			 (format nil "its ok ~~")
			 (format nil "result ~"))
                     (error (msg)
                       (setq result (format nil (car (jscl::!condition-args msg)) (cadr (jscl::!condition-args msg))))))
		   result)))
