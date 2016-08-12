(async
 (format t "~%Finished. The execution took ~a seconds.~%"
         (/ (- (get-internal-real-time) *timestamp*) internal-time-units-per-second 1.0))

 (if (= *passed-tests* *total-tests*)
     (format t "All the tests (~a) passed successfully.~%" *total-tests*)
     (format t "~a/~a test(s) passed successfully.~%     (~d% of expected success)~%"
             *passed-tests* *total-tests*
             (floor (* 100 (/ *passed-tests*
                              (- *total-tests*
                                 *expected-failures*
                                 *unexpected-passes*))))))

 (unless (zerop *expected-failures*)
   (format t "~a test(s) failed expectedly.~%" *expected-failures*))

 (unless (zerop *unexpected-passes*)
   (format t "~a test(s) passed unexpectedly.~%" *unexpected-passes*))

 (let (unbound)
   (dolist (package '(:cl :jscl/ffi :jscl/xhr))
     (when (find-package package)
       (do-external-symbols (symbol package)
         (unless (or (boundp symbol) (fboundp symbol))
           (push symbol unbound)))
       (when unbound
         (format t "~%~%Unbound, exported symbols in JSCL package:~%")
         (dolist (symbol unbound)
           (format t " • ~a~%" symbol))
         (format t "~%~%")))))

 (when *failed-tests-details*
   (format t "~%~%Details of failing tests:~%")
   (dolist (kind '(:failed-expected :failed))
     (let ((results (remove-if #'null (mapcar (lambda (failure)
                                                (and (eql (second failure) kind)
                                                     (first failure)))
                                              *failed-tests-details*))))
       (when results
         (format t "~%~%Tests which ~a:~%" kind)
         (dolist (failure results)
           (format t "~% • ~s" failure)))))
   (format t "~%~%"))

 (terpri)

 #+jscl
 (when #j:phantom
   (#j:phantom:exit *failed-tests*)))
