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

;;; BUG: The compiler will macroexpand the forms below (char str N)
;;; will expand to internal SBCL code instead of our (setf char). It
;;; is because macrodefinitions during bootstrapping are not included
;;; in the host's environment. It should, but we have to think how to
;;; avoid conflicts (package renaming??)

;; (let ((str "hello"))
;;   (setf (char str 0) #\X)
;;   (setf (char str 4) #\X)
;;   (test (string= str "XellX")))
