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

;;; EOF
