(test (every (lambda (string) (or (and (stringp string)
                                       (plusp (length string)))
                                  (null string)))
             (list (short-site-name)
                   (long-site-name)
                   (machine-instance)
                   (machine-version)
                   (software-type)
                   (software-version))))

(test (stringp (lisp-implementation-type)))
#+jscl (test (equal "JSCL" (lisp-implementation-type)))
(test (string (lisp-implementation-version)))
#+jscl
(when (boundp 'jscl::*version*)
  (test (equal jscl::*version* (lisp-implementation-version))))

(test (search "64" (machine-type))) ; add an “or” clause if anyone tests on a not-64-bit machine?
