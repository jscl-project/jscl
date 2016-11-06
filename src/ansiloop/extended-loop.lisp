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


#+Cloe-Runtime					;Don't ask.
(car (push "%Z% %M% %I% %E% %U%" system::*module-identifications*))


;;; The following code could be used to set up the SYMBOLICS-LOOP package
;;; as it is expected to be.  At Symbolics, in both Genera and CLOE, the
;;; package setup is done elsewhere.   


#-Symbolics
(unless (find-package 'symbolics-loop)
  (make-package 'symbolics-loop :use nil))

#-Symbolics
(import 'ansi-loop::loop-finish (find-package 'symbolics-loop))

#-Symbolics
(export '(symbolics-loop::loop
		   symbolics-loop::loop-finish
		   symbolics-loop::define-loop-iteration-path
		   symbolics-loop::define-loop-sequence-path
		   )
	(find-package 'symbolics-loop))



;;;This is our typical "extensible" universe, which should be a proper superset of the ansi universe.
(defvar *loop-default-universe* (make-ansi-loop-universe t))








(defmacro symbolics-loop:define-loop-iteration-path (path-name function
						     &key alternate-names preposition-groups
						     inclusive-permitted user-data (loop-universe '*loop-default-universe*))
  `(eval-when (eval compile load)
     (add-loop-path '(,path-name ,@alternate-names) ,function ,loop-universe
		    :preposition-groups ',preposition-groups
		    :inclusive-permitted ',inclusive-permitted
		    :user-data ',user-data)))


(defmacro symbolics-loop:define-loop-sequence-path (path-name-or-names fetch-function size-function
						    &optional sequence-type element-type)
  "Defines a sequence iteration path.  PATH-NAME-OR-NAMES is either an
atomic path name or a list of path names.  FETCHFUN is a function of
two arguments, the sequence and the index of the item to be fetched.
Indexing is assumed to be zero-origined.  SIZEFUN is a function of
one argument, the sequence; it should return the number of elements in
the sequence.  SEQUENCE-TYPE is the name of the data-type of the
sequence, and ELEMENT-TYPE is the name of the data-type of the elements
of the sequence."
  `(eval-when (eval compile load)
     (add-loop-path ',path-name-or-names 'loop-sequence-elements-path *loop-default-universe*
		    :preposition-groups '((:of :in) (:from :downfrom :upfrom) (:to :downto :below :above) (:by))
		    :inclusive-permitted nil
		    :user-data '(:fetch-function ,fetch-function
				 :size-function ,size-function
				 :sequence-type ,sequence-type
				 :element-type ,element-type))))


(defmacro symbolics-loop:loop (&environment env &rest keywords-and-forms)
  #+Genera (declare (compiler:do-not-record-macroexpansions)
		    (zwei:indentation . zwei:indent-loop))
  (loop-standard-expansion keywords-and-forms env *loop-default-universe*))
