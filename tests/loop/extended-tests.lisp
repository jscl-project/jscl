;;;   -*- Mode: LISP; Syntax: Common-lisp; Package: EXTENDED-LOOP-TEST-PACKAGE; Base: 10; Lowercase:T -*-
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


(in-package 'extended-loop-test-package)

(test "simple named"
      ()
      (loop named foo
	    thereis 'return-this-value
	    finally (return-from foo 'this-is-not-returned))
  (() return-this-value))


(test "named / return clause"
      ()
      (block nil
	(1+ (loop named hieronymous
		  return 5)))
  (() 6))

(test "named / return function"
      ()
      (block nil
	(1+ (loop named hieronymous
		  do (return 5))))
  (() 6))

(test "named / return-from"
      ()
      (block nil
	(1+ (loop named hieronymous
		  do (return-from hieronymous 5))))
  (() 6))


(define-loop-iteration-path cdrs 'loop-cdr-iteration-path
  :alternate-names (cdr)
  :inclusive-permitted t
  :preposition-groups ((:of :in)))

(defun loop-cdr-iteration-path (var type preps &key inclusive)
  (assert (and preps (null (cdr preps)) (member (caar preps) '(:in :of))))
  (let ((val (second (first preps))))
    (if (listp var)
	(let ((listv (gensym)))
	  (if inclusive
	      `(((,listv ,val) (,var nil ,type))
		nil
		(atom ,listv) () () (,listv (cdr ,listv) ,var ,listv)
		() () () (,var ,listv))
	      `(((,listv ,val) (,var nil ,type))
		nil
		(atom ,listv) () () (,listv (cdr ,listv) ,var ,listv))))
	`(((,var ,val ,type)) nil
	  (atom ,var) (,var (cdr ,var)) () ()
	  ,@(and inclusive '(() () () ()))))))


(test "sample iteration path"
      (l)
      (loop for x being the cdrs in l
	    collect x)
  (((a b c d)) ((b c d) (c d) (d) ()))
  ((nil) ()))

(test "alternate syntax iteration path"
      ()
      (loop for x being the cdrs of '(a b c d)
	    collect x)
  (() ((b c d) (c d) (d) ())))

(test "inclusive iteration interation path"
      (l)
      (loop for x being l and its cdrs
	    collect x)
  (((a b c d)) ((a b c d) (b c d) (c d) (d) ()))
  ((nil) (nil)))

