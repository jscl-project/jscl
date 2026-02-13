;;; tests.lisp --- JSCL Test Framework
;;;
;;; This file contains only definitions. Call RUN-TESTS after loading
;;; to execute the test suite.

(defparameter *total-tests* 0)
(defparameter *passed-tests* 0)
(defparameter *failed-tests* 0)

(defvar *use-html-output-p* nil)
(defvar *timestamp* nil)

#|
#+(and jscl (not jscl-target))
(use-package :jscl/ffi)
|#

;; Initialize timestamp at load time (for prebuilt mode where tests
;; execute immediately during jscl-tests.js loading)
(setq *timestamp* (get-internal-real-time))
(terpri)

(defun test-fn (fn form expect-success)
  "Execute a single test and update counters."
  (let (result success normal-exit)
    (handler-case
        (catch 'recover
          (unwind-protect
               (progn
                 (setq result (funcall fn))
                 (setq success (if result t nil))
                 (setq normal-exit t))
            (unless normal-exit
              (setq success nil)
              (throw 'recover t))))
      (error ()
        nil))

    (incf *total-tests*)

    (cond
      ((eq success expect-success)
       (incf *passed-tests*))
      (t
       (incf *failed-tests*)
       (cond
         (expect-success
          (if *use-html-output-p*
              (format t "<font color='red'>Test `~S' failed.</font>~%" form)
              (format t "Test `~S' failed.~%" form)))
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
         (format t " ERROR: ~a"
                 (format nil
                         (simple-condition-format-control msg)
                         (simple-condition-format-arguments msg)))
         (values nil))))
    ',result))

;;;; Test Results

(defun print-test-report ()
  "Print the test results summary."
  (format t "~%Finished. The execution took ~a seconds.~%"
          (/ (- (get-internal-real-time) *timestamp*) internal-time-units-per-second 1.0))
  (if (= *passed-tests* *total-tests*)
      (format t "All the tests (~a) passed successfully.~%" *total-tests*)
      (format t "~a/~a test(s) passed successfully.~%" *passed-tests* *total-tests*))
  (terpri))

(defun exit-with-test-status ()
  "Exit the process with appropriate status code based on test results."
  #+(or jscl jscl-target)
  (progn
    (when (in "phantom" *root*)
      (#j:phantom:exit *failed-tests*))
    (when (in "process" *root*)
      (#j:process:exit *failed-tests*)))
  #-(or jscl jscl-target)
  (sb-ext:exit :code (if (zerop *failed-tests*) 0 (min *failed-tests* 255))))

;;;; Test File Discovery

(defun get-test-files ()
  "Get list of test files from tests/ directory."
  #+jscl
  (let ((files nil)
        (fs (require "fs")))
    (let ((entries (funcall (oget fs "readdirSync") #j"tests")))
      (dotimes (i (oget entries "length"))
        (let ((entry (clstring (aref entries i))))
          (when (and (> (length entry) 5)
                     (string= (subseq entry (- (length entry) 5)) ".lisp"))
            (push (concatenate 'string "tests/" entry) files)))))
    (push "tests/loop/validate.lisp" files)
    (push "tests/loop/base-tests.lisp" files)
    (nreverse files))
  #-jscl
  (append (directory (concatenate 'string jscl-xc::*base-directory* "tests/*.lisp"))
          (list (concatenate 'string jscl-xc::*base-directory* "tests/loop/validate.lisp")
                (concatenate 'string jscl-xc::*base-directory* "tests/loop/base-tests.lisp"))))

;;;; Test Execution

(defun run-tests ()
  "Run the test suite.
For --prebuilt mode, tests have already executed during jscl-tests.js loading.
For other modes, load and execute test files now."
  ;; Initialize counters (for non-prebuilt modes, or reset for prebuilt)
  (when (zerop *total-tests*)
    (setq *timestamp* (get-internal-real-time))
    (terpri)
    ;; Load test files (tests execute immediately via test macro)
    (let ((*package* (find-package #+jscl-target "JSCL-XC" #-jscl-target "JSCL")))
      (dolist (test-file (get-test-files))
        (handler-case
            (load test-file)
          (error (c)
            (format t "ERROR loading ~a: ~a~%" test-file c))))))
  ;; Report and exit
  (print-test-report)
  (exit-with-test-status))
