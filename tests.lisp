;;; tests.lisp --- JSCL Test Framework
;;;
;;; This file contains only definitions. Call RUN-TESTS after loading
;;; to execute the test suite.


(defpackage jscl-tests
  (:use :cl)
  (:export #:run-tests))

(in-package :jscl-tests)

(defparameter *total-tests* 0)
(defparameter *passed-tests* 0)
(defparameter *failed-tests* 0)

(defvar *use-html-output-p* nil)
(defvar *timestamp* nil)
(defvar *compile-time* nil)

;; Initialize timestamp at load time (for prebuilt mode where tests
;; execute immediately during jscl-tests.js loading)
(setq *timestamp* (get-internal-real-time))
(terpri)

(defun test-fn (fn form expect-success)
  "Execute a single test and update counters."
  (let (result success normal-exit raised-condition)
    (catch 'recover
      (unwind-protect
           (handler-case
               (progn (setq result (funcall fn))
                      (setq success (if result t nil))
                      (setq normal-exit t))
             (error (e)
               (setq raised-condition e)
               nil))
        (unless normal-exit
          (setq success nil)
          (throw 'recover t))))

    (incf *total-tests*)

    (cond
      ((eq success expect-success)
       (incf *passed-tests*)
       ;(format *error-output* "Test `~S' passed.~%" form)
       )
      (t
       (incf *failed-tests*)
       (cond
         (expect-success
          (if *use-html-output-p*
              (format *error-output* "<font color='red'>Test `~S' failed.</font>~%" form)
              (format *error-output* "Test `~S' failed.~%" form))
          (when raised-condition
            (format *standard-output* "Error: ~a~%" raised-condition)))
         (t
          (if *use-html-output-p*
              (format t "<font color='orange'>Test `~S' was expected to fail.</font>~%" form)
              (format t "Test `~S' was expected to fail!~%" form))))))))


(defmacro test (condition)
  "Execute a test that expects CONDITION to be true."
  `(test-fn (lambda () ,condition) ',condition t))

(defmacro expected-failure (condition)
  "Execute a test that expects CONDITION to fail."
  `(test-fn (lambda () ,condition) ',condition nil))

(defmacro test-equal (form value)
  `(test (equal ,form ,value)))

;;; Helper functions used by some tests
(defun *gensym* ()
  (intern (symbol-name (gensym))))

(defun not* (f) (not (not f)))

(defun eqlt (f s) (equal f s))

(defmacro mv-eql (form &rest result)
  `(equal
    (multiple-value-list
     (handler-case
         (progn
           ,form)
       (error (msg)
         (format *error-output* " ERROR: ~a"
                 (format nil
                         (simple-condition-format-control msg)
                         (simple-condition-format-arguments msg)))
         (values nil))))
    ',result))

;;;; Test Results

(defun print-test-report ()
  "Print the test results summary."
  (when *compile-time*
    (format t "~%Compilation took ~a seconds.~%" *compile-time*))
  (format t "~%Finished. The execution took ~a seconds.~%"
          (/ (- (get-internal-real-time) *timestamp*) internal-time-units-per-second 1.0))
  (if (= *passed-tests* *total-tests*)
      (format t "All the tests (~a) passed successfully.~%" *total-tests*)
      (format t "~a/~a test(s) passed successfully.~%" *passed-tests* *total-tests*))
  (terpri))

(defun exit-with-test-status ()
  "Exit the process with appropriate status code based on test results."
  #+jscl
  (progn
    (unless (eq (jscl/ffi:typeof #j:process) #j"undefined")
      (#j:process:exit *failed-tests*))
    (unless (eq (jscl/ffi:typeof #j:phantom) #j"undefined")
      (#j:phantom:exit *failed-tests*)))
  #+sbcl
  (sb-ext:exit :code (if (zerop *failed-tests*) 0 (min *failed-tests* 255))))

;;;; Test File Discovery

(defun get-test-files ()
  "Get list of test files from tests/ directory."
  #+jscl
  (let ((files nil)
        (fs (require "fs")))
    (let ((entries (funcall (jscl/ffi:oget fs "readdirSync") #j"tests")))
      (dotimes (i (jscl/ffi:oget entries "length"))
        (let ((entry (jscl/ffi:clstring (aref entries i))))
          (when (and (> (length entry) 5)
                     (string= (subseq entry (- (length entry) 5)) ".lisp")
                     (not (search ".fixtures." entry)))
            (push (concatenate 'string "tests/" entry) files)))))
    (push "tests/loop/validate.lisp" files)
    (push "tests/loop/base-tests.lisp" files)
    (nreverse files))
  #-jscl
  (append (remove-if (lambda (p) (search ".fixtures." (namestring p)))
                     (directory (make-pathname :directory `(:relative "tests") :name :wild :type "lisp" :defaults *load-pathname*)))
          (list (make-pathname :directory `(:relative "tests" "loop") :name "validate" :type "lisp" :defaults *load-pathname*)
                (make-pathname :directory `(:relative "tests" "loop") :name "base-tests" :type "lisp" :defaults *load-pathname*))))

;;;; Test Execution

(defun run-tests ()
  "Run the test suite.
For --prebuilt mode, tests have already executed during jscl-tests.js loading.
For other modes, compile and load test files now.
In JSCL, test files are compiled first to exercise the compiler, then loaded.
In SBCL, test files are loaded directly."
  (when (zerop *total-tests*)
    (let* ((*package* (find-package "JSCL-TESTS"))
           (test-files (get-test-files))
           (*compile-verbose* t)
           (compile-start (get-internal-real-time))
           (files-to-load (mapcar #'compile-file test-files))
           (compile-time (/ (- (get-internal-real-time) compile-start)
                            internal-time-units-per-second 1.0)))

      (setq *compile-time* compile-time)

      ;; Start timing after compilation
      (setq *timestamp* (get-internal-real-time))
      (terpri)
      ;; Load test files (tests execute immediately via test macro)
      (dolist (file files-to-load)
        (handler-case
            (handler-bind (#+sbcl (warning #'muffle-warning))
              (load file))
          (error (c)
            (format *error-output* "Failed to load test file ~a: ~a~%" file c)
            (incf *total-tests*)
            (incf *failed-tests*))))))
  ;; Report and exit
  (print-test-report)
  (exit-with-test-status))
