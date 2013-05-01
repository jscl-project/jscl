(defvar *total-tests* 0)
(defvar *passed-tests* 0)
(defvar *failed-tests* 0)

(defvar *expected-failures* 0)
(defvar *unexpected-passes* 0)

(defvar *use-html-output-p* t)
(defun if-html (string) (if *use-html-output-p* string ""))

(defvar *timestamp* nil)

(defmacro test (condition)
  `(progn
     (cond
       (,condition
        (write-line ,(concat "Test `" (prin1-to-string condition) "' passed"))
        (incf *passed-tests*))
       (t
        (write-line (concat (if-html "<font color=red>")
                            "Test `"
                            ,(prin1-to-string condition) 
                            "' failed."
                            (if-html "</font>")))
        (incf *failed-tests*)))
     (incf *total-tests*)))

(defmacro expected-failure (condition)
  `(progn
     (cond
       (,condition
         (write-line (concat (if-html "<font color=orange>")
                             "Test `"
                             ,(prin1-to-string condition)
                             "' passed unexpectedly!"
                             (if-html "</font>")))
        (incf *unexpected-passes*))
       (t
        (write-line ,(concat "Test `" (prin1-to-string condition) "' failed expectedly."))
        (incf *expected-failures*)))
     (incf *total-tests*)))

(write-line "Running tests...")
(write-line "")

(setq *timestamp* (get-internal-real-time))
