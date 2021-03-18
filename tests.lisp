(defparameter *total-tests* 0)
(defparameter *passed-tests* 0)
(defparameter *failed-tests* 0)

(defvar *use-html-output-p* nil)
(defvar *timestamp* nil)

(defun test-fn (fn form expect-success)
  (let (result success normal-exit)
    ;; Execute the test and put T/NIL if SUCCESS if the test
    ;; completed successfully.
    (handler-case
        (catch 'recover
          (unwind-protect
               (progn
                 (setq result (funcall fn))
                 (if result
                     (setq success t)
                     (setq success nil))
                 (setq normal-exit t))
            (unless normal-exit
              (setq success nil)
              (throw 'recover t))))
      (error ()
        nil))

    (incf *total-tests*)

    (cond
      ((eq success expect-success)
       ;; the resut is expected
       ;; do nothing
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
  `(test-fn (lambda () ,condition)
            ',condition
            t))

(defmacro expected-failure (condition)
  `(test-fn (lambda () ,condition)
            ',condition
            nil))

(defmacro test-equal (form value)
  `(test (equal ,form ,value)))

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
                 (format nil (car (!condition-args msg)) (cadr (!condition-args msg))))
         (values nil))))
    ',result))


(setq *timestamp* (get-internal-real-time))

(terpri)
