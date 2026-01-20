;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/stream.lisp!")

(with-input-from-string (in "jscl::foo jscl::bar jscl::baz")
  (test (eq (read in) 'jscl::foo))
  (test (eq (read in) 'jscl::bar))
  (test (eq (read in) 'jscl::baz)))

(test (let ((stream (make-string-output-stream)))
        (and (write-line "123" stream)
             (write-line "45" stream)
             (string= "123
45
"
                      (get-output-stream-string stream))
             (write-line "67" stream)
             (string= "67
"
                      (get-output-stream-string stream)))))

(test (with-input-from-string (in "abc
def")
        (equal '("abc" nil) (multiple-value-list (read-line in)))
        (equal '("def" t) (multiple-value-list (read-line in)))))

(with-input-from-string (in "abc
def")
  (let ((buf (make-array 3)))
    (test (= 3 (read-sequence buf in)))
    (test (equalp "abc" buf))
    (test (= 2 (read-sequence buf in :end 2)))
    (test (equalp "
dc" buf))
    (test (= 2 (read-sequence buf in)))
    (test (equalp "efc" buf))))

(test (equal "abcdef"
             (with-output-to-string (o)
               (with-input-from-string (i "abcdefg")
                 (let ((buf (make-array 6)))
                   (read-sequence buf i)
                   (write-sequence buf o))))))

(test (let* ((buf (make-array 0 :element-type 'character :fill-pointer 0))
	     (return-values (multiple-value-list (with-output-to-string (o buf)
						   (write-line "abc" o)
						   (write-line "def" o)
						   (values 'value-1 'value-2)))))
	(equal return-values '(value-1 value2))
        (equal buf "abc
def
")))

;;; EOF
