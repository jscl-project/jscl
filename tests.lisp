(defvar *passed-tests* 0)
(defvar *failed-tests* 0)
(defvar *timestamp*)

(defmacro test (condition)
  `(cond
     (,condition
      (write-line ,(concat "Test `" (prin1-to-string condition) "' passed"))
      (incf *passed-tests*))
     (t
      (write-line ,(concat "Test `" (prin1-to-string condition) "' failed."))
      (incf *failed-tests*))))

(write-line "Running tests...")
(write-line "")

(setq *timestamp* (get-internal-real-time))
