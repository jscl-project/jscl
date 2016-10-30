;;;   -*- Mode: LISP; Syntax: Common-lisp; Package: ANSI-LOOP; Base: 10; Lowercase:T -*-
;;;>
;;;> Portions of LOOP are Copyright (c) 1986 by the Massachusetts Institute of Technology.
;;;> All Rights Reserved.
;;;> 
;;;> Permission to use, copy, modify and distribute this software and its
;;;> documentation for any purpose and without fee is hereby granted,
;;;> provided that the M.I.T. copyright notice appear in all copies and that
;;;> both that copyright notice and this permission notice appear in
;;;> supporting documentation.  The names "M.I.T." and "Massachusetts
;;;> Institute of Technology" may not be used in advertising or publicity
;;;> pertaining to distribution of the software without specific, written
;;;> prior permission.  Notice must be given in supporting documentation that
;;;> copying distribution is by permission of M.I.T.  M.I.T. makes no
;;;> representations about the suitability of this software for any purpose.
;;;> It is provided "as is" without express or implied warranty.
;;;> 
;;;>      Massachusetts Institute of Technology
;;;>      77 Massachusetts Avenue
;;;>      Cambridge, Massachusetts  02139
;;;>      United States of America
;;;>      +1-617-253-1000
;;;>
;;;> Portions of LOOP are Copyright (c) 1989, 1990, 1991, 1992 by Symbolics, Inc.
;;;> All Rights Reserved.
;;;> 
;;;> Permission to use, copy, modify and distribute this software and its
;;;> documentation for any purpose and without fee is hereby granted,
;;;> provided that the Symbolics copyright notice appear in all copies and
;;;> that both that copyright notice and this permission notice appear in
;;;> supporting documentation.  The name "Symbolics" may not be used in
;;;> advertising or publicity pertaining to distribution of the software
;;;> without specific, written prior permission.  Notice must be given in
;;;> supporting documentation that copying distribution is by permission of
;;;> Symbolics.  Symbolics makes no representations about the suitability of
;;;> this software for any purpose.  It is provided "as is" without express
;;;> or implied warranty.
;;;> 
;;;> Symbolics, CLOE Runtime, and Minima are trademarks, and CLOE, Genera,
;;;> and Zetalisp are registered trademarks of Symbolics, Inc.
;;;>
;;;>      Symbolics, Inc.
;;;>      8 New England Executive Park, East
;;;>      Burlington, Massachusetts  01803
;;;>      United States of America
;;;>      +1-617-221-1000


(in-package :ansi-loop)


(defvar *slow-test*
	nil)


(defvar *loop-lisp-package*
	(let ((p (car (last (package-use-list (find-package 'ansi-loop))))))
	  (format t "~&Assuming the ``LISP'' package used by LOOP is ~s.~@
		       If not, you must preset ANSI-LOOP::*LOOP-LISP-PACKAGE*.~%"
		  p)
	  p))


(defmacro test (short-desc lambda-list form &body params-and-answers)
  `(test1 ,short-desc ',form ',lambda-list
	  #'(lambda ,lambda-list ,form)
	  ',params-and-answers))


(defun test1 (short-desc form lambda-list interpreted params-and-answers &aux (slow *slow-test*))
  (declare (ignore short-desc))
  (dolist (pair params-and-answers)
    (let ((params (first pair)) (answers (rest pair)) yow)
      (unless (equal (setq yow (multiple-value-list (apply interpreted params))) answers)
	(cerror "Continue."
		"Interpreted LOOP form gave incorrect answer.~@
	     ~@[Bindings: ~S~%~]~
		Form:     ~S~@
		Right:	  ~{~S~^ ; ~}~@
		Wrong:	  ~{~S~^ ; ~}"
		(and params (mapcar #'list lambda-list params))
		form answers yow))
      (unless (equal (setq yow (multiple-value-list
				 (apply (compile nil `(lambda ,lambda-list
							(declare (optimize (compilation-speed 0)))
							,form))
					params)))
		     answers)
	(setq slow nil)
	(cerror (if *slow-test*
		    "Continue (exhaustive optimization setting tests will be omitted)."
		    "Continue.")
		"Compiled LOOP form gave incorrect answer.~@
	       ~@[Bindings: ~S~%~]~
		  Form:     ~S~@
		  Right:    ~{~S~^ ; ~}~@
		  Wrong:    ~{~S~^ ; ~}"
		(and params (mapcar #'list lambda-list params))
		form answers yow))))
  (when slow
    (dotimes (speed 3)
      (dotimes (space 3)
	(dotimes (compilation-speed 3)
	  (dotimes (safety 3)
	    (let ((fn (compile nil `(lambda ,lambda-list
				      (declare
					(optimize
					  (speed ,speed)
					  (space ,space)
					  (safety ,safety)
					  (compilation-speed ,compilation-speed)))
				      ,form))))
	      (dolist (pair params-and-answers)
		(let ((params (first pair)) (answers (rest pair)) yow)
		  (unless (equal (setq yow (multiple-value-list (apply fn params))) answers)
		    (cerror "Continue."
			    "Compiled LOOP form gave incorrect answer at Speed=~D space=~D CompSpeed=~D Safety=~D.~@
			~@[Bindings: ~S~%~]~
			   Form:     ~S~@
			   Right:    ~{~S~^ ; ~}~@
			   Wrong:    ~{~S~^ ; ~}"
			    speed space compilation-speed safety
			    (and params (mapcar #'list lambda-list params))
			    form answers yow)))))))))))


(unless (find-package 'extended-loop-test-package)
  (let ((p (make-package 'extended-loop-test-package :use (list ansi-loop::*loop-lisp-package*))))
    (shadowing-import 'symbolics-loop:loop p)
    (use-package (find-package 'symbolics-loop) p)
    p))


(in-package :extended-loop-test-package)


(defmacro test (&rest args)
  `(ansi-loop::test ,@args))
