(defvar *str* "hello world")
(defvar *str2* "h")

(test (stringp *str*))
(test (not (characterp *str*)))
(test (not (integerp *str*)))

(test (stringp *str2*))
(test (not (characterp *str2*)))
(test (not (integerp *str2*)))

(test (= (length "hello world") 11))
(test (arrayp "hello world"))

(test (string= "h" (string #\h)))
(test (string= "foo" "foo"))
(test (not (string= "Foo" "foo")))
(test (not (string= "foo" "foox")))
