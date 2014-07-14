(async
 (format t "~%Finished. The execution took ~a seconds.~%"
         (/ (- (get-internal-real-time) *timestamp*) internal-time-units-per-second 1.0))

 (if (= *passed-tests* *total-tests*)
     (format t "All the tests (~a) passed successfully.~%" *total-tests*)
     (format t "~a/~a test(s) passed successfully.~%" *passed-tests* *total-tests*))

 (unless (zerop *expected-failures*)
   (format t "~a test(s) failed expectedly.~%" *expected-failures*))

 (unless (zerop *unexpected-passes*)
   (format t "~a test(s) passed unexpectedly.~%" *unexpected-passes*))

 (terpri)
 
 #+jscl (init)
 )
