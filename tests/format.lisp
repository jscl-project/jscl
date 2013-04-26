(test (string= "a" (format nil "a")))

(test (string= "~" (format nil "~~")))

(test (string= "a~a" (format nil "a~~a")))

(test (string= "a\na" (format nil "a~%a")))
