(defun cl-unboundp (symbol)
  "Symbols that are  expected to be exported but not  BOUNDP nor FBOUNDP
in the COMMON-LISP package.

(Cribbed from that package in SBCL)"
 (member symbol
 '(
 &ALLOW-OTHER-KEYS
 &AUX
 &BODY
 &ENVIRONMENT
 &KEY
 &OPTIONAL
 &REST
 &WHOLE
 ARITHMETIC-ERROR
 ARRAY
 BASE-CHAR
 BASE-STRING
 BIGNUM
 BIT-VECTOR
 BOOLEAN
 BROADCAST-STREAM
 BUILT-IN-CLASS
 CALL-NEXT-METHOD
 CELL-ERROR
 CLASS
 COMPILATION-SPEED
 COMPILED-FUNCTION
 COMPILER-MACRO
 CONCATENATED-STREAM
 CONDITION
 CONTROL-ERROR
 DEBUG
 DECLARATION
 DECLARE
 DIVISION-BY-ZERO
 DOUBLE-FLOAT
 DYNAMIC-EXTENT
 ECHO-STREAM
 END-OF-FILE
 EXTENDED-CHAR
 FILE-ERROR
 FILE-STREAM
 FIXNUM
 FLOATING-POINT-INEXACT
 FLOATING-POINT-INVALID-OPERATION
 FLOATING-POINT-OVERFLOW
 FLOATING-POINT-UNDERFLOW
 FTYPE
 GENERIC-FUNCTION
 HASH-TABLE
 IGNORABLE
 IGNORE
 INLINE
 INTEGER
 KEYWORD
 LONG-FLOAT
 MAKE-METHOD
 METHOD
 METHOD-COMBINATION
 NEXT-METHOD-P
 NOTINLINE
 NUMBER
 OPTIMIZE
 OTHERWISE
 PACKAGE
 PACKAGE-ERROR
 PARSE-ERROR
 PRINT-NOT-READABLE
 PROGRAM-ERROR
 RANDOM-STATE
 RATIO
 READER-ERROR
 READTABLE
 REAL
 RESTART
 SAFETY
 SATISFIES
 SEQUENCE
 SERIOUS-CONDITION
 SHORT-FLOAT
 SIGNED-BYTE
 SIMPLE-ARRAY
 SIMPLE-BASE-STRING
 SIMPLE-BIT-VECTOR
 SIMPLE-CONDITION
 SIMPLE-ERROR
 SIMPLE-STRING
 SIMPLE-TYPE-ERROR
 SIMPLE-VECTOR
 SIMPLE-WARNING
 SINGLE-FLOAT
 SPACE
 SPECIAL
 SPEED
 STANDARD
 STANDARD-CHAR
 STANDARD-CLASS
 STANDARD-GENERIC-FUNCTION
 STANDARD-METHOD
 STANDARD-OBJECT
 STORAGE-CONDITION
 STREAM
 STREAM-ERROR
 STRING-STREAM
 STRUCTURE
 STRUCTURE-CLASS
 STYLE-WARNING
 SYMBOL
 SYNONYM-STREAM
 TWO-WAY-STREAM
 TYPE
 TYPE-ERROR
 UNBOUND-SLOT
 UNBOUND-VARIABLE
 UNDEFINED-FUNCTION
 UNSIGNED-BYTE
 VARIABLE
 WARNING
 STRUCTURE-OBJECT
 )))

 (format t "~%Finished. The execution took ~a seconds.~%"
 (/ (- (get-internal-real-time) *timestamp*) internal-time-units-per-second 1.0))

 (if (= *passed-tests* *total-tests*)
 (format t "All the tests (~a) passed successfully.~%" *total-tests*)
 (format t "~a/~a test(s) passed successfully.~%     (~d% of expected success)~%"
 *passed-tests* *total-tests*
 (floor (* 100 (/ *passed-tests*
 (- *total-tests*
 *expected-failures*
 *unexpected-passes*))))))

 (unless (zerop *expected-failures*)
 (format t "~a test(s) failed expectedly.~%" *expected-failures*))

 (unless (zerop *unexpected-passes*)
 (format t "~a test(s) passed unexpectedly.~%" *unexpected-passes*))

(let (unbound)
  (dolist (package '( #-sbcl :cl :jscl/ffi :jscl/xhr))
    (when (find-package package)
      (do-external-symbols (symbol package)
        (unless (or (boundp symbol)
                    (fboundp symbol)
                    (cl-unboundp symbol))
          (push symbol unbound)))
      (when unbound
        (format t "~%~%Unbound, exported symbols in ~a package:~%" package)
        (dolist (symbol unbound)
          (format t " • ~a~%" symbol))
        (format t "~%~%")))))

(when *failed-tests-details*
  (format t "~%~%Details of failing tests:~%")
  (dolist (kind '(:failed-expected :failed))
    (let ((results (remove-if #'null (mapcar (lambda (failure)
                                               (and (eql (second failure) kind)
                                                    (first failure)))
                                             *failed-tests-details*))))
      (when results
        (format t "~%~%Tests which ~a:~%" kind)
        (dolist (failure results)
          (format t "~% • ~s" failure)))))
  (format t "~%~%"))

(terpri)

#+jscl
(progn
  (when #j:phantom
    (#j:phantom:exit *failed-tests*))
  (when #j:process
    (#j:process:exit *failed-tests*)))
