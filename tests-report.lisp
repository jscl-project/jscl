(write-line "")
(write-string "Finished. The execution took ")
(write-string (prin1-to-string (/ (- (get-internal-real-time) *timestamp*) internal-time-units-per-second 1.0)))
(write-line " seconds.")

(cond
  ((= *passed-tests* *total-tests*)
   (write-line "All the tests (")
   (write-string (prin1-to-string *total-tests*))
   (write-line ") passed successfully."))
  (t
   (write-string (prin1-to-string *passed-tests*))
   (write-string "/")
   (write-string (prin1-to-string *total-tests*))
   (write-line " test(s) passed successfully.")))

(unless (zerop *expected-failures*)
  (write-string (prin1-to-string *expected-failures*))
  (write-line " test(s) failed expectedly."))

(unless (zerop *unexpected-passes*)
  (write-string (prin1-to-string *unexpected-passes*))
  (write-line " test(s) passed unexpectedly."))
