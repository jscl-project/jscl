(write-line "")
(write-string "Finished. The execution took ")
(write-string (prin1-to-string (/ (- (get-internal-real-time) *timestamp*) internal-time-units-per-second)))
(write-line " seconds.")

(cond
  ((zerop *failed-tests*)
   (write-string "All tests (")
   (write-string (prin1-to-string *passed-tests*))
   (write-line ") passed successfully"))
  (t
   (write-string (prin1-to-string *failed-tests*))
   (write-string "/")
   (write-string (prin1-to-string (+ *passed-tests* *failed-tests*)))
   (write-line " failed.")))
