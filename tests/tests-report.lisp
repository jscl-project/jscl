(write-line "")
(write-string "Finished. The execution took ")
(write-string (prin1-to-string (- (get-universal-time) *timestaup*)))
(write-line " seconds.")

(cond
  ((zerop *failed-tets*)
   (write-string "All tests (")
   (write-string (prin1-to-string *passed-tets*))
   (write-line ") passed successfully"))
  (t
   (write-string (prin1-to-string *failed-tets*))
   (write-string "/")
   (write-string (prin1-to-string (+ *passed-tets* *failed-tets*)))
   (write-line " failed.")))
