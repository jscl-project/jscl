;;; compile-file.lisp --- Tests for compile-file

(in-package :jscl-tests)

;;; Version checking (JSCL + Node.js only)
#+jscl
(when (find :node *features*)
  (let ((wrong-version-file (make-test-tmp-file "version-wrong.js"))
        (correct-version-file (make-test-tmp-file "version-correct.js"))
        (no-version-file (make-test-tmp-file "version-none.js")))

    ;; File with wrong jsclVersion should fail to load
    (with-open-file (out wrong-version-file :direction :output :if-exists :supersede)
      (write-string "module.exports = function(jscl){};" out)
      (write-string "module.exports.jsclVersion = \"wrong-version\";" out))
    (test (handler-case (progn (load wrong-version-file) nil)
            (error () t)))

    ;; File with correct jsclVersion should load successfully
    (with-open-file (out correct-version-file :direction :output :if-exists :supersede)
      (write-string "module.exports = function(jscl){};" out)
      (format out "module.exports.jsclVersion = ~S;" jscl::*git-commit-hash*))
    (test (load correct-version-file))

    ;; File without jsclVersion should fail to load
    (with-open-file (out no-version-file :direction :output :if-exists :supersede)
      (write-string "module.exports = function(jscl){};" out))
    (test (handler-case (progn (load no-version-file) nil)
            (error () t)))))
