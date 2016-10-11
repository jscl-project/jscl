(in-package :jscl/test)

(defparameter *total-tests* 0)
(defparameter *passed-tests* 0)
(defparameter *failed-tests* 0)
(defparameter *failed-tests-details* nil)
(defparameter *expected-failures* 0)
(defparameter *unexpected-passes* 0)

(defvar *use-html-output-p* t)
(defvar *timestamp* nil)

(defvar *async-threads* nil)

(defvar *sync*
  #+jscl nil
  #-jscl (make-lock "Test results asynchronous lock"))

(defmacro sync-incf (place)
  #+jscl `(incf ,place)
  #-jscl
  `(with-lock-held (*sync*)
     (incf ,place)))

(defmacro with-async (&body body)
  #+jscl (cons 'progn body)
  #-jscl
  `(let (*async-threads*)
     (prog1 (progn ,@body)
       (dolist (thread *async-threads*)
         (join-thread thread)))
     ))

(defmacro async (&body body)
  #+jscl `(#j:setTimeout (lambda () ,@body))
  #-jscl `(push (make-thread
                 (lambda ()
                   ,@body)
                 :name "JSCL/Test Async thread")
                *async-threads*))

(defun test-fn (successp form)
  (async
    (cond
     (successp
      (sync-incf *passed-tests*))
      (t
      (with-lock-held (*sync*)
        (push (list form :failed) *failed-tests-details*))
      (sync-incf *failed-tests*)))
   (sync-incf *total-tests*)))

(defun expected-failure-fn (successp form)
  (async
       (cond
     (successp
      (sync-incf *unexpected-passes*))
         (t
      (with-lock-held (*sync*)
        (push (list form :failed-expected) *failed-tests-details*))
      (sync-incf *expected-failures*)))
   (sync-incf *total-tests*)))

(defmacro test (condition)
  `(test-fn ,condition ',condition))

(defmacro expected-failure (condition)
  `(expected-failure-fn (async ,condition) ',condition))

(defmacro test-equal (form value)
  `(test (equal ,form ,value)))

(setq *timestamp* (get-internal-real-time))

(terpri)

;;; Run the tests in the host Lisp  implementation. It is a quick way to
;;; improve the level of trust of the tests.
(defun run ()
  (load (make-pathname
         :name "tests" :type "lisp"
         :directory (pathname-directory #.(or *compile-file-pathname*
                                              *load-pathname*))))
  (let ((*default-pathname-defaults* jscl::*base-directory*)
        (*use-html-output-p* nil)
        (*package* (find-package :JSCL/TEST)))
    (declare (special *use-html-output-p*))
    (with-async (dolist (input (last (directory "tests/*.lisp")))
                  (async (let ((*package* (find-package :jscl/test)))
                           (load input)))))
    (load "tests-report.lisp")))
