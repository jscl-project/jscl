(with-input-from-string (in (make-string-input-stream "foo bar baz"))
  (test (equal (read in) "foo"))
  (test (equal (read in) "bar"))
  (test (equal (read in) "baz")))
