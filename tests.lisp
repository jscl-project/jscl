(defparameter *total-tests* 0)
(defparameter *passed-tests* 0)
(defparameter *failed-tests* 0)
(defparameter *expected-failures* 0)
(defparameter *unexpected-passes* 0)

(defvar *use-html-output-p* t)
(defvar *timestamp* nil)

(defmacro async (&body body)
  #+jscl `(#j:setTimeout (lambda () ,@body))
  #-jscl `(progn ,@body))

(defun test-fn (condition form)
  (async
   (cond
     (condition
      (format t "Test `~S' passed~%" form)
      (incf *passed-tests*))
     (t
      (if *use-html-output-p*
          (format t "<font color='red'>Test `~S' failed.</font>~%" form)
          (format t "Test `~S' failed.~%" form))
      (incf *failed-tests*)))
   (incf *total-tests*)))

(defun expected-failure-fn (condition form)
  (async
   (cond
     (condition
      (if *use-html-output-p*
          (format t "<font color='orange'>Test `~S' passed unexpectedly!</font>~%" form)
          (format t "Test `~S' passed unexpectedly!~%" form))
      (incf *unexpected-passes*))
     (t
      (format t "Test `~S' failed expectedly.~%" form)
      (incf *expected-failures*)))
   (incf *total-tests*)))


(defmacro test (condition)
  `(test-fn ,condition ',condition))

(defmacro expected-failure (condition)
  `(expected-failure-fn ,condition ',condition))

(defmacro test-equal (form value)
  `(test (equal ,form, value)))

(setq *timestamp* (get-internal-real-time))

(terpri)
