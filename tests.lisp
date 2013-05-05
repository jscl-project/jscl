(defparameter *total-tests* 0)
(defparameter *passed-tests* 0)
(defparameter *failed-tests* 0)
(defparameter *expected-failures* 0)
(defparameter *unexpected-passes* 0)

(defvar *use-html-output-p* t)
(defvar *timestamp* nil)

(defmacro test (condition)
  `(progn
     (cond
       (,condition
        (format t "Test `~S' passed~%" ',condition)
        (incf *passed-tests*))
       (t
        (if *use-html-output-p*
            (format t "<font color='red'>Test `~S' failed.</font>~%" ',condition)
            (format t "Test `~S' failed.~%" ',condition))
        (incf *failed-tests*)))
     (incf *total-tests*)))

(defmacro expected-failure (condition)
  `(progn
     (cond
       (,condition
        (if *use-html-output-p*
            (format t "<font color='orange'>Test `~S' passed unexpectedly!</font>~%" ',condition)
            (format t "Test `~S' passed unexpectedly!~%" ',condition))
        (incf *unexpected-passes*))
       (t
        (format t "Test `~S' failed failed expectedly.~%" ',condition)
        (incf *expected-failures*)))
     (incf *total-tests*)))

(defmacro test-equal (form value)
  `(test (equal ,form, value)))


(format t "Running tests...~%~%")
(setq *timestamp* (get-internal-real-time))
