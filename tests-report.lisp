(format t "~%Finished. The execution took ~a seconds.~%"
        (/ (- (get-internal-real-time) *timestamp*) internal-time-units-per-second 1.0))

(if (= *passed-tests* *total-tests*)
    (format t "All the tests (~a) passed successfully.~%" *total-tests*)
    (format t "~a/~a test(s) passed successfully.~%" *passed-tests* *total-tests*))

(terpri)

#+jscl
(progn
  (when (in "phantom" *root*)
    (#j:phantom:exit *failed-tests*))
  (when (in "process" *root*)
    (#j:process:exit *failed-tests*)))
