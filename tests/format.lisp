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
