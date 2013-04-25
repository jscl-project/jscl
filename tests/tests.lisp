(defvar *passed-tets* 0)
(defvar *failed-tets* 0)
(defvar *timestamp* (get-universal-time))

(defmacro test (condition)
  `(cond
     (,condition
      (write-line ,(concat "Test `" (prin1-to-string condition) "' passed"))
      (incf *passed-tets*))
     (t
      (write-line ,(concat "Test `" (prin1-to-string condition) "' failed."))
      (incf *failed-tets*))))

(write-line "Running tests...")
(write-line "")
