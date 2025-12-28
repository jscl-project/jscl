;;; format.lisp ---

;; JSCL is free software: you can redistribute it and/or
;; modify it under the terms of the GNU General Public License as
;; published by the Free Software Foundation, either version 3 of the
;; License, or (at your option) any later version.
;;
;; JSCL is distributed in the hope that it will be useful, but
;; WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
;; General Public License for more details.
;;
;; You should have received a copy of the GNU General Public License
;; along with JSCL.  If not, see <http://www.gnu.org/licenses/>.

;; @kchanqvq ported this implementation from CMU CL.
;;
;; - The interpreter is removed, leaving a compiler-only
;;   implementation.
;;
;; - The floating point printer is replaced with a crude approximation
;;   using JavaScript toString/toFixed. The Dragon4 algorithm in CMUCL
;;   requires BigInt, so we can't use it for now.
;;
;; - ~T simply writes #\Tab. We need stream-line-column to implement
;;   it properly.
;;
;; - Pretty printer stuff are commented out because we don't have a
;;   pretty printer

(/debug "loading format.lisp!")


(defstruct (format-directive
	    #+nil (:print-function %print-format-directive))
  (string (error "Required argument") :type string)
  (start (error "Required argument") :type (and unsigned-byte fixnum))
  (end (error "Required argument") :type (and unsigned-byte fixnum))
  (character (error "Required argument") :type character)
  (colonp nil :type (member t nil))
  (atsignp nil :type (member t nil))
  (params nil :type list))

(defun %print-format-directive (struct stream depth)
  (declare (ignore depth))
  (print-unreadable-object (struct stream)
    (write-string (format-directive-string struct) stream
		  :start (format-directive-start struct)
		  :end (format-directive-end struct))))

(defvar *format-directive-expanders*
  (make-array char-code-limit :initial-element nil))

(defun %print-format-error (condition stream)
  (format stream
	  "~:[~;Error in format: ~]~
	      ~?~@[~%  ~A~%  ~V@T^~]"
	  (format-error-print-banner condition)
	  (format-error-complaint condition)
	  (format-error-arguments condition)
	  (format-error-control-string condition)
	  (format-error-offset condition)))

(defvar *default-format-error-control-string* nil)
(defvar *default-format-error-offset* nil)

(define-condition format-error (error)
  ((complaint :reader format-error-complaint :initarg :complaint)
   (arguments :reader format-error-arguments :initarg :arguments :initform nil)
   (control-string :reader format-error-control-string
		   :initarg :control-string
		   :initform *default-format-error-control-string*)
   (offset :reader format-error-offset :initarg :offset
	   :initform *default-format-error-offset*)
   (print-banner :reader format-error-print-banner :initarg :print-banner
		 :initform t))
  (:report %print-format-error))


;;;; TOKENIZE-CONTROL-STRING

(defun tokenize-control-string (string)
  (let ((index 0)
	(end (length string))
	(result nil)
	(in-block nil)
	(pprint nil)
	(semi nil)
	(justification-semi 0))
    (loop
      (let ((next-directive (or (position #\~ string :start index) end)))
	(when (> next-directive index)
	  (push (subseq string index next-directive) result))
	(when (= next-directive end)
	  (return))
	(let* ((directive (parse-directive string next-directive))
	       (directive-char (format-directive-character directive)))
	  ;; We are looking for illegal combinations of format
	  ;; directives in the control string.  See the last paragraph
	  ;; of CLHS 22.3.5.2: "an error is also signaled if the
	  ;; ~<...~:;...~> form of ~<...~> is used in the same format
	  ;; string with ~W, ~_, ~<...~:>, ~I, or ~:T."
	  (cond ((char= #\< directive-char)
		 ;; Found a justification or logical block
		 (setf in-block t))
		((and in-block (char= #\; directive-char))
		 ;; Found a semi colon in a justification or logical block
		 (setf semi t))
		((char= #\> directive-char)
		 ;; End of justification or logical block.  Figure out which.
		 (setf in-block nil)
		 (cond ((format-directive-colonp directive)
			;; A logical-block directive.  Note that fact, and also
			;; note that we don't care if we found any ~;
			;; directives in the block.
			(setf pprint t)
			(setf semi nil))
		       (semi
			;; A justification block with a ~; directive in it.
			(incf justification-semi))))
		((and (not in-block)
		      (or (and (char= #\T directive-char) (format-directive-colonp directive))
			  (char= #\W directive-char)
			  (char= #\_ directive-char)
			  (char= #\I directive-char)))
		 (setf pprint t)))
	  (push directive result)
	  (setf index (format-directive-end directive)))))
    (when (and pprint (plusp justification-semi))
      (error 'format-error
	     :complaint "A justification directive cannot be in the same format string~%~
                         as ~~W, ~~I, ~~:T, or a logical-block directive."
	     :control-string string
	     :offset 0))
    (nreverse result)))

(defun parse-directive (string start)
  (let ((posn (1+ start)) (params nil) (colonp nil) (atsignp nil)
	(end (length string)))
    (flet ((get-char ()
	     (if (= posn end)
		 (error 'format-error
			:complaint "String ended before directive was found."
			:control-string string
			:offset start)
		 (char string posn))))
      (loop
	(let ((char (get-char)))
	  (cond ((or (char<= #\0 char #\9) (char= char #\+) (char= char #\-))
		 (multiple-value-bind
		       (param new-posn)
		     (parse-integer string :start posn :junk-allowed t)
		   (push (cons posn param) params)
		   (setf posn new-posn)
		   (case (get-char)
		     (#\,)
		     ((#\: #\@)
		      (decf posn))
		     (t
		      (return)))))
		((or (char= char #\v) (char= char #\V))
		 (push (cons posn :arg) params)
		 (incf posn)
		 (case (get-char)
		   (#\,)
		   ((#\: #\@)
		    (decf posn))
		   (t
		    (return))))
		((char= char #\#)
		 (push (cons posn :remaining) params)
		 (incf posn)
		 (case (get-char)
		   (#\,)
		   ((#\: #\@)
		    (decf posn))
		   (t
		    (return))))
		((char= char #\')
		 (incf posn)
		 (push (cons posn (get-char)) params)
		 (incf posn)
		 (unless (char= (get-char) #\,)
		   (decf posn)))
		((char= char #\,)
		 (push (cons posn nil) params))
		((char= char #\:)
		 (if colonp
		     (error 'format-error
			    :complaint "Too many colons supplied."
			    :control-string string
			    :offset posn)
		     (setf colonp t)))
		((char= char #\@)
		 (if atsignp
		     (error 'format-error
			    :complaint "Too many at-signs supplied."
			    :control-string string
			    :offset posn)
		     (setf atsignp t)))
		(t
		 (return))))
	(incf posn))
      (let ((char (get-char)))
	(when (char= char #\/)
	  (let ((closing-slash (position #\/ string :start (1+ posn))))
	    (if closing-slash
		(setf posn closing-slash)
		(error 'format-error
		       :complaint "No matching closing slash."
		       :control-string string
		       :offset posn))))
	(make-format-directive
	 :string string :start start :end (1+ posn)
	 :character (char-upcase char)
	 :colonp colonp :atsignp atsignp
	 :params (nreverse params))))))


;;;; Specials used to communicate information.

;;; *UP-UP-AND-OUT-ALLOWED* -- internal.
;;;
;;; Used by the expander stuff.  When it is non-NIL, up-up-and-out
;;; (~:^) is allowed.  Otherwise, ~:^ isn't allowed.
;;;
(defvar *up-up-and-out-allowed* nil)

;;; *EXPANDER-NEXT-ARG-MACRO* -- internal.
;;;
;;; Used by the expander stuff.  This is bindable so that ~<...~:>
;;; can change it.
;;;
(defvar *expander-next-arg-macro* 'expander-next-arg)

;;; *ONLY-SIMPLE-ARGS* -- internal.
;;;
;;; Used by the expander stuff.  Initially starts as T, and gets set to NIL
;;; if someone needs to do something strange with the arg list (like use
;;; the rest, or something).
;;;
(defvar *only-simple-args*)

;;; *ORIG-ARGS-AVAILABLE* -- internal.
;;;
;;; Used by the expander stuff.  We do an initial pass with this as NIL.
;;; If someone doesn't like this, they (throw 'need-orig-args nil) and we try
;;; again with it bound to T.  If this is T, we don't try to do anything
;;; fancy with args.
;;;
(defvar *orig-args-available* nil)

;;; *SIMPLE-ARGS* -- internal.
;;;
;;; Used by the expander stuff.  List of (symbol . offset) for simple args.
;;;
(defvar *simple-args*)

(defvar *formatter-cache* (make-hash-table :test 'equal))


;;;; FORMAT

(defun %format (destination control-string &rest format-arguments)
  "Provides various facilities for formatting output.
  CONTROL-STRING contains a string to be output, possibly with embedded
  directives, which are flagged with the escape character \"~\".  Directives
  generally expand into additional text to be output, usually consuming one
  or more of the FORMAT-ARGUMENTS in the process.  A few useful directives
  are:
        ~A or ~nA     Prints one argument as if by PRINC
        ~S or ~nS     Prints one argument as if by PRIN1
        ~D or ~nD     Prints one argument as a decimal integer
        ~%            Does a TERPRI
        ~&            Does a FRESH-LINE

         where n is the width of the field in which the object is printed.

  DESTINATION controls where the result will go.  If DESTINATION is T, then
  the output is sent to the standard output stream.  If it is NIL, then the
  output is returned in a string as the value of the call.  Otherwise,
  DESTINATION must be a stream to which the output will be sent.

  Example:   (FORMAT NIL \"The answer is ~D.\" 10) => \"The answer is 10.\"

  FORMAT has many additional capabilities not described here.  Consult
  Section 22.3 (Formatted Output) of the ANSI Common Lisp standard for
  details."
  (apply #'call-formatter destination
         (or (gethash control-string *formatter-cache*)
             (setf (gethash control-string *formatter-cache*)
                   (eval (%formatter control-string))))
         format-arguments))

(defun call-formatter (destination formatter &rest args)
  (etypecase destination
    (null
     (with-output-to-string (stream)
       (apply formatter stream args)))
    (string
     (with-output-to-string (stream destination)
       (apply formatter stream args)))
    ((member t)
     (apply formatter *standard-output* args)
     nil)
    (stream
     (apply formatter destination args)
     nil)))

#+jscl (fset 'format #'%format)

#+jscl
(define-compiler-macro format (&whole form dest control-string &rest args)
  (if (stringp control-string)
      `(call-formatter ,dest ,(%formatter control-string) ,@args)
      form))


;;;; FORMATTER

#+jscl (defmacro formatter (control-string)
         `#',(%formatter control-string))

(defun %formatter (control-string)
  (block nil
    (catch 'need-orig-args
      (let* ((*simple-args* nil)
	     (*only-simple-args* t)
	     (guts (expand-control-string control-string))
	     (args nil))
	(dolist (arg *simple-args*)
	  (push `(,(car arg)
		  (error
		   'format-error
		   :complaint "Required argument missing"
		   :control-string ,control-string
		   :offset ,(cdr arg)))
		args))
	(return `(lambda (stream &optional ,@args &rest args)
		   ,guts
		   args))))
    (let ((*orig-args-available* t)
	  (*only-simple-args* nil))
      `(lambda (stream &rest orig-args)
	 (let ((args orig-args))
	   ,(expand-control-string control-string)
	   args)))))

(defun expand-control-string (string)
  (let* ((*default-format-error-control-string* string)
	 (directives (tokenize-control-string string)))
    `(block nil
       ,@(expand-directive-list directives))))

(defun expand-directive-list (directives)
  (let ((results nil)
	(remaining-directives directives))
    (loop
      (unless remaining-directives
	(return))
      (multiple-value-bind
	    (form new-directives)
	  (expand-directive (car remaining-directives)
			    (cdr remaining-directives))
	(when form
          (push form results))
	(setf remaining-directives new-directives)))
    (reverse results)))

(defun expand-directive (directive more-directives)
  (etypecase directive
    (format-directive
     (let ((expander
	     (aref *format-directive-expanders*
		   (char-code (format-directive-character directive))))
	   (*default-format-error-offset*
	     (1- (format-directive-end directive))))
       (if expander
	   (funcall expander directive more-directives)
	   (error 'format-error
		  :complaint "Unknown directive."))))
    (string
     (values `(write-string ,directive stream)
	     more-directives))))

(defun expand-next-arg (&optional offset)
  (if (or *orig-args-available* (not *only-simple-args*))
      `(,*expander-next-arg-macro*
	,*default-format-error-control-string*
	,(or offset *default-format-error-offset*))
      (let ((symbol (gensym "FORMAT-ARG-")))
	(push (cons symbol (or offset *default-format-error-offset*))
	      *simple-args*)
	symbol)))

(defun need-hairy-args ()
  (when *only-simple-args*
    ))


;;;; Format directive definition macros and runtime support.

(defmacro expander-next-arg (string offset)
  `(if args
       (pop args)
       (error 'format-error
	      :complaint "No more arguments."
	      :control-string ,string
	      :offset ,offset)))

(defmacro expander-pprint-next-arg (string offset)
  `(progn
     (when (null args)
       (error 'format-error
	      :complaint "No more arguments."
	      :control-string ,string
	      :offset ,offset))
     (pprint-pop)
     (pop args)))

(eval-when (:compile-toplevel :load-toplevel :execute)

  (defmacro def-complex-format-directive (char lambda-list &body body)
    (let ((defun-name (intern (cl:format nil
				         "~:@(~:C~)-FORMAT-DIRECTIVE-EXPANDER"
				         char)))
	  (directive (gensym))
	  (directives (if lambda-list (car (last lambda-list)) (gensym))))
      `(progn
         (defun ,defun-name (,directive ,directives)
	   ,@(if lambda-list
	         `((let ,(mapcar #'(lambda (var)
				     `(,var
				       (,(intern (concatenate
						  'string
						  "FORMAT-DIRECTIVE-"
						  (symbol-name var))
					         (symbol-package 'foo))
				        ,directive)))
			         (butlast lambda-list))
		     ,@body))
	         `((declare (ignore ,directive ,directives))
		   ,@body)))
         (%set-format-directive-expander ,char #',defun-name))))

  (defmacro def-format-directive (char lambda-list &body body)
    (let ((directives (gensym))
	  (declarations nil)
	  (body-without-decls body))
      (loop
        (let ((form (car body-without-decls)))
	  (unless (and (consp form) (eq (car form) 'declare))
	    (return))
	  (push (pop body-without-decls) declarations)))
      (setf declarations (reverse declarations))
      `(def-complex-format-directive ,char (,@lambda-list ,directives)
         ,@declarations
         (values (progn ,@body-without-decls)
	         ,directives))))

  (defmacro expand-bind-defaults (specs params &body body)
    (let ((params-var (gensym "FORMAT-PARAMS"))
          expander-bindings runtime-bindings)
      `(let ((,params-var ,params))
         ,(if specs
	      (progn
	        (dolist (spec specs)
	          (destructuring-bind (var default) spec
		    (let ((symbol (gensym)))
		      (push `(,var ',symbol) expander-bindings)
		      (push
		       `(list ',symbol
			      (let* ((param-and-offset (pop ,params-var))
				     (offset (car param-and-offset))
				     (param (cdr param-and-offset)))
			        (case param
			          (:arg `(or ,(expand-next-arg offset)
					     ,,default))
			          (:remaining
			           (setf *only-simple-args* nil)
			           '(length args))
			          ((nil) ,default)
			          (t param))))
                       runtime-bindings))))
	        `(let ,(nreverse expander-bindings)
	           `(let ,(list ,@(nreverse runtime-bindings))
		      ,@(if ,params-var
			    (error 'format-error
			           :complaint
			           "Too many parameters, expected no more than ~D"
			           :arguments (list ,(length specs))
			           :offset (caar ,params)))
		      ,,@body)))
	      `(progn
	         (when ,params-var
	           (error 'format-error
		          :complaint "Too many parameters, expected no more than 0"
		          :offset (caar ,params-var)))
	         ,@body)))))); eval-when

(defun %set-format-directive-expander (char fn)
  (setf (aref *format-directive-expanders* (char-code (char-upcase char))) fn)
  char)

(defun find-directive (directives kind stop-at-semi)
  (if directives
      (let ((next (car directives)))
	(if (format-directive-p next)
	    (let ((char (format-directive-character next)))
	      (if (or (char= kind char)
		      (and stop-at-semi (char= char #\;)))
		  (car directives)
		  (find-directive
		   (cdr (flet ((after (char)
				 (member (find-directive (cdr directives)
							 char
							 nil)
					 directives)))
			  (case char
			    (#\( (after #\)))
			    (#\< (after #\>))
			    (#\[ (after #\]))
			    (#\{ (after #\}))
			    (t directives))))
		   kind stop-at-semi)))
	    (find-directive (cdr directives) kind stop-at-semi)))))


;;;; Simple outputting noise.

(defun format-write-field (stream string mincol colinc minpad padchar padleft)
  (unless padleft
    (write-string string stream))
  (dotimes (i minpad)
    (write-char padchar stream))
  (and mincol minpad colinc
       (do ((chars (+ (length string) (max 0 minpad)) (+ chars colinc)))
	   ((>= chars mincol))
	 (dotimes (i colinc)
	   (write-char padchar stream))))
  (when padleft
    (write-string string stream)))

(defun format-princ (stream arg colonp atsignp mincol colinc minpad padchar)
  (format-write-field stream
		      (if (or arg (not colonp))
			  (princ-to-string arg)
			  "()")
		      mincol colinc minpad padchar atsignp))

(def-format-directive #\A (colonp atsignp params)
  (if params
      (expand-bind-defaults ((mincol 0) (colinc 1) (minpad 0)
			     (padchar #\space))
	  params
	`(format-princ stream ,(expand-next-arg) ',colonp ',atsignp
		       ,mincol ,colinc ,minpad ,padchar))
      `(princ ,(if colonp
		   `(or ,(expand-next-arg) "()")
		   (expand-next-arg))
	      stream)))

(defun format-prin1 (stream arg colonp atsignp mincol colinc minpad padchar)
  (format-write-field stream
		      (if (or arg (not colonp))
			  (prin1-to-string arg)
			  "()")
		      mincol colinc minpad padchar atsignp))

(def-format-directive #\S (colonp atsignp params)
  (cond (params
	 (expand-bind-defaults ((mincol 0) (colinc 1) (minpad 0)
				(padchar #\space))
	     params
	   `(format-prin1 stream ,(expand-next-arg) ,colonp ,atsignp
			  ,mincol ,colinc ,minpad ,padchar)))
	(colonp
	 `(let ((arg ,(expand-next-arg)))
	    (if arg
		(prin1 arg stream)
		(princ "()" stream))))
	(t
	 `(prin1 ,(expand-next-arg) stream))))

(def-format-directive #\C (colonp atsignp params)
  (expand-bind-defaults () params
    (if colonp
	`(format-print-named-character ,(expand-next-arg) stream)
	(if atsignp
	    `(prin1 ,(expand-next-arg) stream)
	    `(write-char ,(expand-next-arg) stream)))))

#-unicode
(defun format-print-named-character (char stream)
  (let* ((name (char-name char)))
    (cond (name
	   (write-string name stream))
	  ((<= 0 (char-code char) 31)
	   ;; Print control characters as "^"<char>
	   (write-char #\^ stream)
	   (write-char (code-char (+ 64 (char-code char))) stream))
	  (t
	   (write-char char stream)))))

#+unicode
(defun format-print-named-character (char stream)
  (cond ((and (graphic-char-p char)
	      (char/= char #\space))
	 ;; Graphic characters (except space) print the same as ~C.
	 (write-char char stream))
	(t
	 (let* ((name (char-name char)))
	   (write-string name stream)))))

(def-format-directive #\W (colonp atsignp params)
  (expand-bind-defaults () params
    (if (or colonp atsignp)
	`(let (,@(when colonp
		   '((*print-pretty* t)))
	       ,@(when atsignp
		   '((*print-level* nil)
		     (*print-length* nil))))
	   (output-object ,(expand-next-arg) stream))
	`(output-object ,(expand-next-arg) stream))))


;;;; Integer outputting.

;;; FORMAT-PRINT-NUMBER does most of the work for the numeric printing
;;; directives.  The parameters are interpreted as defined for ~D.
;;;
(defun format-print-integer (stream number print-commas-p print-sign-p
			     radix mincol padchar commachar commainterval)
  (let ((*print-base* radix)
	(*print-radix* nil))
    (if (integerp number)
	(let* ((text (princ-to-string (abs number)))
	       (commaed (if print-commas-p
			    (format-add-commas text commachar commainterval)
			    text))
	       (signed (cond ((minusp number)
			      (concatenate 'string "-" commaed))
			     (print-sign-p
			      (concatenate 'string "+" commaed))
			     (t commaed))))
	  ;; colinc = 1, minpad = 0, padleft = t
	  (format-write-field stream signed mincol 1 0 padchar t))
	(princ number stream))))

(defun format-add-commas (string commachar commainterval)
  (let ((length (length string)))
    (multiple-value-bind (commas extra)
	(truncate (1- length) commainterval)
      (let ((new-string (make-string (+ length commas)))
	    (first-comma (1+ extra)))
	(replace new-string string :end1 first-comma :end2 first-comma)
	(do ((src first-comma (+ src commainterval))
	     (dst first-comma (+ dst commainterval 1)))
	    ((= src length))
	  (setf (char new-string dst) commachar)
	  (replace new-string string :start1 (1+ dst)
		                     :start2 src :end2 (+ src commainterval)))
	new-string))))

(defun expand-format-integer (base colonp atsignp params)
  (if (or colonp atsignp params)
      (expand-bind-defaults
          ((mincol 0) (padchar #\space) (commachar #\,) (commainterval 3))
          params
        `(format-print-integer stream ,(expand-next-arg) ,colonp ,atsignp
			       ,base ,mincol ,padchar ,commachar
			       ,commainterval))
      `(write ,(expand-next-arg) :stream stream :base ,base :radix nil
	                         :escape nil)))

(def-format-directive #\D (colonp atsignp params)
  (expand-format-integer 10 colonp atsignp params))

(def-format-directive #\B (colonp atsignp params)
  (expand-format-integer 2 colonp atsignp params))

(def-format-directive #\O (colonp atsignp params)
  (expand-format-integer 8 colonp atsignp params))

(def-format-directive #\X (colonp atsignp params)
  (expand-format-integer 16 colonp atsignp params))

(def-format-directive #\R (colonp atsignp params)
  (if params
      (expand-bind-defaults
          ((base nil) (mincol 0) (padchar #\space) (commachar #\,)
	   (commainterval 3))
          params
        (let ((r-arg (gensym "R-ARG-")))
	  `(let ((,r-arg ,(expand-next-arg)))
	     (if ,base
		 (format-print-integer stream ,r-arg ,colonp ,atsignp
				       ,base ,mincol
				       ,padchar ,commachar ,commainterval)
		 (format-print-cardinal stream ,r-arg)))))
      (if atsignp
	  (if colonp
	      `(format-print-old-roman stream ,(expand-next-arg))
	      `(format-print-roman stream ,(expand-next-arg)))
	  (if colonp
	      `(format-print-ordinal stream ,(expand-next-arg))
	      `(format-print-cardinal stream ,(expand-next-arg))))))

(defvar cardinal-ones
  #(nil "one" "two" "three" "four" "five" "six" "seven" "eight" "nine"))

(defvar cardinal-tens
  #(nil nil "twenty" "thirty" "forty"
    "fifty" "sixty" "seventy" "eighty" "ninety"))

(defvar cardinal-teens
  #("ten" "eleven" "twelve" "thirteen" "fourteen" ;;; RAD
    "fifteen" "sixteen" "seventeen" "eighteen" "nineteen"))

;; See http://en.wikipedia.org/wiki/Names_of_large_numbers and also
;; http://home.hetnet.nl/~vanadovv/BignumbyN.html.  This list comes
;; from the latter link.
;;
;; Leading spaces are required to get everything printed out
;; correctly.
(defvar cardinal-periods
  #("" " thousand" " million" " billion" " trillion" " quadrillion"
    " quintillion" " sextillion" " septillion" " octillion" " nonillion"
    " decillion" " undecillion" " duodecillion" " tredecillion"
    " quattuordecillion" " quinquadecillion" " sedecillion" " septendecillion"
    " octodecillion" " novendecillion" " vigintillion" " unvigintillion"
    " duovigintillion" " tresvigintillion" " quattuorvigintillion"
    " quinquavigintillion" " sesvigintillion" " septemvigintillion"
    " octovigintillion" " novemvigintillion" " trigintillion"
    " untrigintillion" " duotrigintillion" " trestrigintillion"
    " quattuortrigintillion" " quinquatrigintillion" " sestrigintillion"
    " septentrigintillion" " octotrigintillion" " noventrigintillion"
    " quadragintillion" " unquadragintillion" " duoquadragintillion"
    " tresquadragintillion" " quattuorquadragintillion"
    " quinquaquadragintillion" " sesquadragintillion" " septenquadragintillion"
    " octoquadragintillion" " novenquadragintillion" " quinquagintillion"
    " unquinquagintillion" " duoquinquagintillion" " tresquinquagintillion"
    " quattuorquinquagintillion" " quinquaquinquagintillion"
    " sesquinquagintillion" " septenquinquagintillion" " octoquinquagintillion"
    " novenquinquagintillion" " sexagintillion" " unsexagintillion"
    " duosexagintillion" " tresexagintillion" " quattuorsexagintillion"
    " quinquasexagintillion" " sesexagintillion" " septensexagintillion"
    " octosexagintillion" " novensexagintillion" " septuagintillion"
    " unseptuagintillion" " duoseptuagintillion" " treseptuagintillion"
    " quattuorseptuagintillion" " quinquaseptuagintillion"
    " seseptuagintillion" " septenseptuagintillion" " octoseptuagintillion"
    " novenseptuagintillion" " octogintillion" " unoctogintillion"
    " duooctogintillion" " tresoctogintillion" " quattuoroctogintillion"
    " quinquaoctogintillion" " sexoctogintillion" " septemoctogintillion"
    " octooctogintillion" " novemoctogintillion" " nonagintillion"
    " unnonagintillion" " duononagintillion" " trenonagintillion"
    " quattuornonagintillion" " quinquanonagintillion" " senonagintillion"
    " septenonagintillion" " octononagintillion" " novenonagintillion"
    " centillion" " uncentillion" " duocentillion" " trescentillion"
    " quattuorcentillion" " quinquacentillion" " sexcentillion"
    " septencentillion" " octocentillion" " novencentillion" " decicentillion"
    " undecicentillion" " duodecicentillion" " tredecicentillion"
    " quattuordecicentillion" " quinquadecicentillion" " sedecicentillion"
    " septendecicentillion" " octodecicentillion" " novendecicentillion"
    " viginticentillion" " unviginticentillion" " duoviginticentillion"
    " tresviginticentillion" " quattuorviginticentillion"
    " quinquaviginticentillion" " sesviginticentillion"
    " septemviginticentillion" " octoviginticentillion"
    " novemviginticentillion" " trigintacentillion" " untrigintacentillion"
    " duotrigintacentillion" " trestrigintacentillion"
    " quattuortrigintacentillion" " quinquatrigintacentillion"
    " sestrigintacentillion" " septentrigintacentillion"
    " octotrigintacentillion" " noventrigintacentillion"
    " quadragintacentillion" " unquadragintacentillion"
    " duoquadragintacentillion" " tresquadragintacentillion"
    " quattuorquadragintacentillion" " quinquaquadragintacentillion"
    " sesquadragintacentillion" " septenquadragintacentillion"
    " octoquadragintacentillion" " novenquadragintacentillion"
    " quinquagintacentillion" " unquinquagintacentillion"
    " duoquinquagintacentillion" " tresquinquagintacentillion"
    " quattuorquinquagintacentillion" " quinquaquinquagintacentillion"
    " sesquinquagintacentillion" " septenquinquagintacentillion"
    " octoquinquagintacentillion" " novenquinquagintacentillion"
    " sexagintacentillion" " unsexagintacentillion" " duosexagintacentillion"
    " tresexagintacentillion" " quattuorsexagintacentillion"
    " quinquasexagintacentillion" " sesexagintacentillion"
    " septensexagintacentillion" " octosexagintacentillion"
    " novensexagintacentillion" " septuagintacentillion"
    " unseptuagintacentillion" " duoseptuagintacentillion"
    " treseptuagintacentillion" " quattuorseptuagintacentillion"
    " quinquaseptuagintacentillion" " seseptuagintacentillion"
    " septenseptuagintacentillion" " octoseptuagintacentillion"
    " novenseptuagintacentillion" " octogintacentillion"
    " unoctogintacentillion" " duooctogintacentillion"
    " tresoctogintacentillion" " quattuoroctogintacentillion"
    " quinquaoctogintacentillion" " sexoctogintacentillion"
    " septemoctogintacentillion" " octooctogintacentillion"
    " novemoctogintacentillion" " nonagintacentillion" " unnonagintacentillion"
    " duononagintacentillion" " trenonagintacentillion"
    " quattuornonagintacentillion" " quinquanonagintacentillion"
    " senonagintacentillion" " septenonagintacentillion"
    " octononagintacentillion" " novenonagintacentillion" " ducentillion"
    " unducentillion" " duoducentillion" " treducentillion"
    " quattuorducentillion" " quinquaducentillion" " seducentillion"
    " septenducentillion" " octoducentillion" " novenducentillion"
    " deciducentillion" " undeciducentillion" " duodeciducentillion"
    " tredeciducentillion" " quattuordeciducentillion"
    " quinquadeciducentillion" " sedeciducentillion" " septendeciducentillion"
    " octodeciducentillion" " novendeciducentillion" " vigintiducentillion"
    " unvigintiducentillion" " duovigintiducentillion"
    " tresvigintiducentillion" " quattuorvigintiducentillion"
    " quinquavigintiducentillion" " sesvigintiducentillion"
    " septemvigintiducentillion" " octovigintiducentillion"
    " novemvigintiducentillion" " trigintaducentillion"
    " untrigintaducentillion" " duotrigintaducentillion"
    " trestrigintaducentillion" " quattuortrigintaducentillion"
    " quinquatrigintaducentillion" " sestrigintaducentillion"
    " septentrigintaducentillion" " octotrigintaducentillion"
    " noventrigintaducentillion" " quadragintaducentillion"
    " unquadragintaducentillion" " duoquadragintaducentillion"
    " tresquadragintaducentillion" " quattuorquadragintaducentillion"
    " quinquaquadragintaducentillion" " sesquadragintaducentillion"
    " septenquadragintaducentillion" " octoquadragintaducentillion"
    " novenquadragintaducentillion" " quinquagintaducentillion"
    " unquinquagintaducentillion" " duoquinquagintaducentillion"
    " tresquinquagintaducentillion" " quattuorquinquagintaducentillion"
    " quinquaquinquagintaducentillion" " sesquinquagintaducentillion"
    " septenquinquagintaducentillion" " octoquinquagintaducentillion"
    " novenquinquagintaducentillion" " sexagintaducentillion"
    " unsexagintaducentillion" " duosexagintaducentillion"
    " tresexagintaducentillion" " quattuorsexagintaducentillion"
    " quinquasexagintaducentillion" " sesexagintaducentillion"
    " septensexagintaducentillion" " octosexagintaducentillion"
    " novensexagintaducentillion" " septuagintaducentillion"
    " unseptuagintaducentillion" " duoseptuagintaducentillion"
    " treseptuagintaducentillion" " quattuorseptuagintaducentillion"
    " quinquaseptuagintaducentillion" " seseptuagintaducentillion"
    " septenseptuagintaducentillion" " octoseptuagintaducentillion"
    " novenseptuagintaducentillion" " octogintaducentillion"
    " unoctogintaducentillion" " duooctogintaducentillion"
    " tresoctogintaducentillion" " quattuoroctogintaducentillion"
    " quinquaoctogintaducentillion" " sexoctogintaducentillion"
    " septemoctogintaducentillion" " octooctogintaducentillion"
    " novemoctogintaducentillion" " nonagintaducentillion"
    " unnonagintaducentillion" " duononagintaducentillion"
    " trenonagintaducentillion" " quattuornonagintaducentillion"
    " quinquanonagintaducentillion" " senonagintaducentillion"
    " septenonagintaducentillion" " octononagintaducentillion"
    " novenonagintaducentillion" " trecentillion" " untrecentillion"
    " duotrecentillion" " trestrecentillion" " quattuortrecentillion"
    " quinquatrecentillion" " sestrecentillion" " septentrecentillion"
    " octotrecentillion" " noventrecentillion" " decitrecentillion"
    " undecitrecentillion" " duodecitrecentillion" " tredecitrecentillion"
    " quattuordecitrecentillion" " quinquadecitrecentillion"
    " sedecitrecentillion" " septendecitrecentillion" " octodecitrecentillion"
    " novendecitrecentillion" " vigintitrecentillion" " unvigintitrecentillion"
    " duovigintitrecentillion" " tresvigintitrecentillion"
    " quattuorvigintitrecentillion" " quinquavigintitrecentillion"
    " sesvigintitrecentillion" " septemvigintitrecentillion"
    " octovigintitrecentillion" " novemvigintitrecentillion"
    " trigintatrecentillion" " untrigintatrecentillion"
    " duotrigintatrecentillion" " trestrigintatrecentillion"
    " quattuortrigintatrecentillion" " quinquatrigintatrecentillion"
    " sestrigintatrecentillion" " septentrigintatrecentillion"
    " octotrigintatrecentillion" " noventrigintatrecentillion"
    " quadragintatrecentillion" " unquadragintatrecentillion"
    " duoquadragintatrecentillion" " tresquadragintatrecentillion"
    " quattuorquadragintatrecentillion" " quinquaquadragintatrecentillion"
    " sesquadragintatrecentillion" " septenquadragintatrecentillion"
    " octoquadragintatrecentillion" " novenquadragintatrecentillion"
    " quinquagintatrecentillion" " unquinquagintatrecentillion"
    " duoquinquagintatrecentillion" " tresquinquagintatrecentillion"
    " quattuorquinquagintatrecentillion" " quinquaquinquagintatrecentillion"
    " sesquinquagintatrecentillion" " septenquinquagintatrecentillion"
    " octoquinquagintatrecentillion" " novenquinquagintatrecentillion"
    " sexagintatrecentillion" " unsexagintatrecentillion"
    " duosexagintatrecentillion" " tresexagintatrecentillion"
    " quattuorsexagintatrecentillion" " quinquasexagintatrecentillion"
    " sesexagintatrecentillion" " septensexagintatrecentillion"
    " octosexagintatrecentillion" " novensexagintatrecentillion"
    " septuagintatrecentillion" " unseptuagintatrecentillion"
    " duoseptuagintatrecentillion" " treseptuagintatrecentillion"
    " quattuorseptuagintatrecentillion" " quinquaseptuagintatrecentillion"
    " seseptuagintatrecentillion" " septenseptuagintatrecentillion"
    " octoseptuagintatrecentillion" " novenseptuagintatrecentillion"
    " octogintatrecentillion" " unoctogintatrecentillion"
    " duooctogintatrecentillion" " tresoctogintatrecentillion"
    " quattuoroctogintatrecentillion" " quinquaoctogintatrecentillion"
    " sexoctogintatrecentillion" " septemoctogintatrecentillion"
    " octooctogintatrecentillion" " novemoctogintatrecentillion"
    " nonagintatrecentillion" " unnonagintatrecentillion"
    " duononagintatrecentillion" " trenonagintatrecentillion"
    " quattuornonagintatrecentillion" " quinquanonagintatrecentillion"
    " senonagintatrecentillion" " septenonagintatrecentillion"
    " octononagintatrecentillion" " novenonagintatrecentillion"
    " quadringentillion" " unquadringentillion" " duoquadringentillion"
    " tresquadringentillion" " quattuorquadringentillion"
    " quinquaquadringentillion" " sesquadringentillion"
    " septenquadringentillion" " octoquadringentillion"
    " novenquadringentillion" " deciquadringentillion"
    " undeciquadringentillion" " duodeciquadringentillion"
    " tredeciquadringentillion" " quattuordeciquadringentillion"
    " quinquadeciquadringentillion" " sedeciquadringentillion"
    " septendeciquadringentillion" " octodeciquadringentillion"
    " novendeciquadringentillion" " vigintiquadringentillion"
    " unvigintiquadringentillion" " duovigintiquadringentillion"
    " tresvigintiquadringentillion" " quattuorvigintiquadringentillion"
    " quinquavigintiquadringentillion" " sesvigintiquadringentillion"
    " septemvigintiquadringentillion" " octovigintiquadringentillion"
    " novemvigintiquadringentillion" " trigintaquadringentillion"
    " untrigintaquadringentillion" " duotrigintaquadringentillion"
    " trestrigintaquadringentillion" " quattuortrigintaquadringentillion"
    " quinquatrigintaquadringentillion" " sestrigintaquadringentillion"
    " septentrigintaquadringentillion" " octotrigintaquadringentillion"
    " noventrigintaquadringentillion" " quadragintaquadringentillion"
    " unquadragintaquadringentillion" " duoquadragintaquadringentillion"
    " tresquadragintaquadringentillion" " quattuorquadragintaquadringentillion"
    " quinquaquadragintaquadringentillion" " sesquadragintaquadringentillion"
    " septenquadragintaquadringentillion" " octoquadragintaquadringentillion"
    " novenquadragintaquadringentillion" " quinquagintaquadringentillion"
    " unquinquagintaquadringentillion" " duoquinquagintaquadringentillion"
    " tresquinquagintaquadringentillion"
    " quattuorquinquagintaquadringentillion"
    " quinquaquinquagintaquadringentillion" " sesquinquagintaquadringentillion"
    " septenquinquagintaquadringentillion" " octoquinquagintaquadringentillion"
    " novenquinquagintaquadringentillion" " sexagintaquadringentillion"
    " unsexagintaquadringentillion" " duosexagintaquadringentillion"
    " tresexagintaquadringentillion" " quattuorsexagintaquadringentillion"
    " quinquasexagintaquadringentillion" " sesexagintaquadringentillion"
    " septensexagintaquadringentillion" " octosexagintaquadringentillion"
    " novensexagintaquadringentillion" " septuagintaquadringentillion"
    " unseptuagintaquadringentillion" " duoseptuagintaquadringentillion"
    " treseptuagintaquadringentillion" " quattuorseptuagintaquadringentillion"
    " quinquaseptuagintaquadringentillion" " seseptuagintaquadringentillion"
    " septenseptuagintaquadringentillion" " octoseptuagintaquadringentillion"
    " novenseptuagintaquadringentillion" " octogintaquadringentillion"
    " unoctogintaquadringentillion" " duooctogintaquadringentillion"
    " tresoctogintaquadringentillion" " quattuoroctogintaquadringentillion"
    " quinquaoctogintaquadringentillion" " sexoctogintaquadringentillion"
    " septemoctogintaquadringentillion" " octooctogintaquadringentillion"
    " novemoctogintaquadringentillion" " nonagintaquadringentillion"
    " unnonagintaquadringentillion" " duononagintaquadringentillion"
    " trenonagintaquadringentillion" " quattuornonagintaquadringentillion"
    " quinquanonagintaquadringentillion" " senonagintaquadringentillion"
    " septenonagintaquadringentillion" " octononagintaquadringentillion"
    " novenonagintaquadringentillion" " quingentillion" " unquingentillion"
    " duoquingentillion" " tresquingentillion" " quattuorquingentillion"
    " quinquaquingentillion" " sesquingentillion" " septenquingentillion"
    " octoquingentillion" " novenquingentillion" " deciquingentillion"
    " undeciquingentillion" " duodeciquingentillion" " tredeciquingentillion"
    " quattuordeciquingentillion" " quinquadeciquingentillion"
    " sedeciquingentillion" " septendeciquingentillion"
    " octodeciquingentillion" " novendeciquingentillion"
    " vigintiquingentillion" " unvigintiquingentillion"
    " duovigintiquingentillion" " tresvigintiquingentillion"
    " quattuorvigintiquingentillion" " quinquavigintiquingentillion"
    " sesvigintiquingentillion" " septemvigintiquingentillion"
    " octovigintiquingentillion" " novemvigintiquingentillion"
    " trigintaquingentillion" " untrigintaquingentillion"
    " duotrigintaquingentillion" " trestrigintaquingentillion"
    " quattuortrigintaquingentillion" " quinquatrigintaquingentillion"
    " sestrigintaquingentillion" " septentrigintaquingentillion"
    " octotrigintaquingentillion" " noventrigintaquingentillion"
    " quadragintaquingentillion" " unquadragintaquingentillion"
    " duoquadragintaquingentillion" " tresquadragintaquingentillion"
    " quattuorquadragintaquingentillion" " quinquaquadragintaquingentillion"
    " sesquadragintaquingentillion" " septenquadragintaquingentillion"
    " octoquadragintaquingentillion" " novenquadragintaquingentillion"
    " quinquagintaquingentillion" " unquinquagintaquingentillion"
    " duoquinquagintaquingentillion" " tresquinquagintaquingentillion"
    " quattuorquinquagintaquingentillion" " quinquaquinquagintaquingentillion"
    " sesquinquagintaquingentillion" " septenquinquagintaquingentillion"
    " octoquinquagintaquingentillion" " novenquinquagintaquingentillion"
    " sexagintaquingentillion" " unsexagintaquingentillion"
    " duosexagintaquingentillion" " tresexagintaquingentillion"
    " quattuorsexagintaquingentillion" " quinquasexagintaquingentillion"
    " sesexagintaquingentillion" " septensexagintaquingentillion"
    " octosexagintaquingentillion" " novensexagintaquingentillion"
    " septuagintaquingentillion" " unseptuagintaquingentillion"
    " duoseptuagintaquingentillion" " treseptuagintaquingentillion"
    " quattuorseptuagintaquingentillion" " quinquaseptuagintaquingentillion"
    " seseptuagintaquingentillion" " septenseptuagintaquingentillion"
    " octoseptuagintaquingentillion" " novenseptuagintaquingentillion"
    " octogintaquingentillion" " unoctogintaquingentillion"
    " duooctogintaquingentillion" " tresoctogintaquingentillion"
    " quattuoroctogintaquingentillion" " quinquaoctogintaquingentillion"
    " sexoctogintaquingentillion" " septemoctogintaquingentillion"
    " octooctogintaquingentillion" " novemoctogintaquingentillion"
    " nonagintaquingentillion" " unnonagintaquingentillion"
    " duononagintaquingentillion" " trenonagintaquingentillion"
    " quattuornonagintaquingentillion" " quinquanonagintaquingentillion"
    " senonagintaquingentillion" " septenonagintaquingentillion"
    " octononagintaquingentillion" " novenonagintaquingentillion"
    " sescentillion" " unsescentillion" " duosescentillion" " tresescentillion"
    " quattuorsescentillion" " quinquasescentillion" " sesescentillion"
    " septensescentillion" " octosescentillion" " novensescentillion"
    " decisescentillion" " undecisescentillion" " duodecisescentillion"
    " tredecisescentillion" " quattuordecisescentillion"
    " quinquadecisescentillion" " sedecisescentillion"
    " septendecisescentillion" " octodecisescentillion"
    " novendecisescentillion" " vigintisescentillion" " unvigintisescentillion"
    " duovigintisescentillion" " tresvigintisescentillion"
    " quattuorvigintisescentillion" " quinquavigintisescentillion"
    " sesvigintisescentillion" " septemvigintisescentillion"
    " octovigintisescentillion" " novemvigintisescentillion"
    " trigintasescentillion" " untrigintasescentillion"
    " duotrigintasescentillion" " trestrigintasescentillion"
    " quattuortrigintasescentillion" " quinquatrigintasescentillion"
    " sestrigintasescentillion" " septentrigintasescentillion"
    " octotrigintasescentillion" " noventrigintasescentillion"
    " quadragintasescentillion" " unquadragintasescentillion"
    " duoquadragintasescentillion" " tresquadragintasescentillion"
    " quattuorquadragintasescentillion" " quinquaquadragintasescentillion"
    " sesquadragintasescentillion" " septenquadragintasescentillion"
    " octoquadragintasescentillion" " novenquadragintasescentillion"
    " quinquagintasescentillion" " unquinquagintasescentillion"
    " duoquinquagintasescentillion" " tresquinquagintasescentillion"
    " quattuorquinquagintasescentillion" " quinquaquinquagintasescentillion"
    " sesquinquagintasescentillion" " septenquinquagintasescentillion"
    " octoquinquagintasescentillion" " novenquinquagintasescentillion"
    " sexagintasescentillion" " unsexagintasescentillion"
    " duosexagintasescentillion" " tresexagintasescentillion"
    " quattuorsexagintasescentillion" " quinquasexagintasescentillion"
    " sesexagintasescentillion" " septensexagintasescentillion"
    " octosexagintasescentillion" " novensexagintasescentillion"
    " septuagintasescentillion" " unseptuagintasescentillion"
    " duoseptuagintasescentillion" " treseptuagintasescentillion"
    " quattuorseptuagintasescentillion" " quinquaseptuagintasescentillion"
    " seseptuagintasescentillion" " septenseptuagintasescentillion"
    " octoseptuagintasescentillion" " novenseptuagintasescentillion"
    " octogintasescentillion" " unoctogintasescentillion"
    " duooctogintasescentillion" " tresoctogintasescentillion"
    " quattuoroctogintasescentillion" " quinquaoctogintasescentillion"
    " sexoctogintasescentillion" " septemoctogintasescentillion"
    " octooctogintasescentillion" " novemoctogintasescentillion"
    " nonagintasescentillion" " unnonagintasescentillion"
    " duononagintasescentillion" " trenonagintasescentillion"
    " quattuornonagintasescentillion" " quinquanonagintasescentillion"
    " senonagintasescentillion" " septenonagintasescentillion"
    " octononagintasescentillion" " novenonagintasescentillion"
    " septingentillion" " unseptingentillion" " duoseptingentillion"
    " treseptingentillion" " quattuorseptingentillion"
    " quinquaseptingentillion" " seseptingentillion" " septenseptingentillion"
    " octoseptingentillion" " novenseptingentillion" " deciseptingentillion"
    " undeciseptingentillion" " duodeciseptingentillion"
    " tredeciseptingentillion" " quattuordeciseptingentillion"
    " quinquadeciseptingentillion" " sedeciseptingentillion"
    " septendeciseptingentillion" " octodeciseptingentillion"
    " novendeciseptingentillion" " vigintiseptingentillion"
    " unvigintiseptingentillion" " duovigintiseptingentillion"
    " tresvigintiseptingentillion" " quattuorvigintiseptingentillion"
    " quinquavigintiseptingentillion" " sesvigintiseptingentillion"
    " septemvigintiseptingentillion" " octovigintiseptingentillion"
    " novemvigintiseptingentillion" " trigintaseptingentillion"
    " untrigintaseptingentillion" " duotrigintaseptingentillion"
    " trestrigintaseptingentillion" " quattuortrigintaseptingentillion"
    " quinquatrigintaseptingentillion" " sestrigintaseptingentillion"
    " septentrigintaseptingentillion" " octotrigintaseptingentillion"
    " noventrigintaseptingentillion" " quadragintaseptingentillion"
    " unquadragintaseptingentillion" " duoquadragintaseptingentillion"
    " tresquadragintaseptingentillion" " quattuorquadragintaseptingentillion"
    " quinquaquadragintaseptingentillion" " sesquadragintaseptingentillion"
    " septenquadragintaseptingentillion" " octoquadragintaseptingentillion"
    " novenquadragintaseptingentillion" " quinquagintaseptingentillion"
    " unquinquagintaseptingentillion" " duoquinquagintaseptingentillion"
    " tresquinquagintaseptingentillion" " quattuorquinquagintaseptingentillion"
    " quinquaquinquagintaseptingentillion" " sesquinquagintaseptingentillion"
    " septenquinquagintaseptingentillion" " octoquinquagintaseptingentillion"
    " novenquinquagintaseptingentillion" " sexagintaseptingentillion"
    " unsexagintaseptingentillion" " duosexagintaseptingentillion"
    " tresexagintaseptingentillion" " quattuorsexagintaseptingentillion"
    " quinquasexagintaseptingentillion" " sesexagintaseptingentillion"
    " septensexagintaseptingentillion" " octosexagintaseptingentillion"
    " novensexagintaseptingentillion" " septuagintaseptingentillion"
    " unseptuagintaseptingentillion" " duoseptuagintaseptingentillion"
    " treseptuagintaseptingentillion" " quattuorseptuagintaseptingentillion"
    " quinquaseptuagintaseptingentillion" " seseptuagintaseptingentillion"
    " septenseptuagintaseptingentillion" " octoseptuagintaseptingentillion"
    " novenseptuagintaseptingentillion" " octogintaseptingentillion"
    " unoctogintaseptingentillion" " duooctogintaseptingentillion"
    " tresoctogintaseptingentillion" " quattuoroctogintaseptingentillion"
    " quinquaoctogintaseptingentillion" " sexoctogintaseptingentillion"
    " septemoctogintaseptingentillion" " octooctogintaseptingentillion"
    " novemoctogintaseptingentillion" " nonagintaseptingentillion"
    " unnonagintaseptingentillion" " duononagintaseptingentillion"
    " trenonagintaseptingentillion" " quattuornonagintaseptingentillion"
    " quinquanonagintaseptingentillion" " senonagintaseptingentillion"
    " septenonagintaseptingentillion" " octononagintaseptingentillion"
    " novenonagintaseptingentillion" " octingentillion" " unoctingentillion"
    " duooctingentillion" " tresoctingentillion" " quattuoroctingentillion"
    " quinquaoctingentillion" " sexoctingentillion" " septemoctingentillion"
    " octooctingentillion" " novemoctingentillion" " decioctingentillion"
    " undecioctingentillion" " duodecioctingentillion"
    " tredecioctingentillion" " quattuordecioctingentillion"
    " quinquadecioctingentillion" " sedecioctingentillion"
    " septendecioctingentillion" " octodecioctingentillion"
    " novendecioctingentillion" " vigintioctingentillion"
    " unvigintioctingentillion" " duovigintioctingentillion"
    " tresvigintioctingentillion" " quattuorvigintioctingentillion"
    " quinquavigintioctingentillion" " sesvigintioctingentillion"
    " septemvigintioctingentillion" " octovigintioctingentillion"
    " novemvigintioctingentillion" " trigintaoctingentillion"
    " untrigintaoctingentillion" " duotrigintaoctingentillion"
    " trestrigintaoctingentillion" " quattuortrigintaoctingentillion"
    " quinquatrigintaoctingentillion" " sestrigintaoctingentillion"
    " septentrigintaoctingentillion" " octotrigintaoctingentillion"
    " noventrigintaoctingentillion" " quadragintaoctingentillion"
    " unquadragintaoctingentillion" " duoquadragintaoctingentillion"
    " tresquadragintaoctingentillion" " quattuorquadragintaoctingentillion"
    " quinquaquadragintaoctingentillion" " sesquadragintaoctingentillion"
    " septenquadragintaoctingentillion" " octoquadragintaoctingentillion"
    " novenquadragintaoctingentillion" " quinquagintaoctingentillion"
    " unquinquagintaoctingentillion" " duoquinquagintaoctingentillion"
    " tresquinquagintaoctingentillion" " quattuorquinquagintaoctingentillion"
    " quinquaquinquagintaoctingentillion" " sesquinquagintaoctingentillion"
    " septenquinquagintaoctingentillion" " octoquinquagintaoctingentillion"
    " novenquinquagintaoctingentillion" " sexagintaoctingentillion"
    " unsexagintaoctingentillion" " duosexagintaoctingentillion"
    " tresexagintaoctingentillion" " quattuorsexagintaoctingentillion"
    " quinquasexagintaoctingentillion" " sesexagintaoctingentillion"
    " septensexagintaoctingentillion" " octosexagintaoctingentillion"
    " novensexagintaoctingentillion" " septuagintaoctingentillion"
    " unseptuagintaoctingentillion" " duoseptuagintaoctingentillion"
    " treseptuagintaoctingentillion" " quattuorseptuagintaoctingentillion"
    " quinquaseptuagintaoctingentillion" " seseptuagintaoctingentillion"
    " septenseptuagintaoctingentillion" " octoseptuagintaoctingentillion"
    " novenseptuagintaoctingentillion" " octogintaoctingentillion"
    " unoctogintaoctingentillion" " duooctogintaoctingentillion"
    " tresoctogintaoctingentillion" " quattuoroctogintaoctingentillion"
    " quinquaoctogintaoctingentillion" " sexoctogintaoctingentillion"
    " septemoctogintaoctingentillion" " octooctogintaoctingentillion"
    " novemoctogintaoctingentillion" " nonagintaoctingentillion"
    " unnonagintaoctingentillion" " duononagintaoctingentillion"
    " trenonagintaoctingentillion" " quattuornonagintaoctingentillion"
    " quinquanonagintaoctingentillion" " senonagintaoctingentillion"
    " septenonagintaoctingentillion" " octononagintaoctingentillion"
    " novenonagintaoctingentillion" " nongentillion" " unnongentillion"
    " duonongentillion" " trenongentillion" " quattuornongentillion"
    " quinquanongentillion" " senongentillion" " septenongentillion"
    " octonongentillion" " novenongentillion" " decinongentillion"
    " undecinongentillion" " duodecinongentillion" " tredecinongentillion"
    " quattuordecinongentillion" " quinquadecinongentillion"
    " sedecinongentillion" " septendecinongentillion" " octodecinongentillion"
    " novendecinongentillion" " vigintinongentillion" " unvigintinongentillion"
    " duovigintinongentillion" " tresvigintinongentillion"
    " quattuorvigintinongentillion" " quinquavigintinongentillion"
    " sesvigintinongentillion" " septemvigintinongentillion"
    " octovigintinongentillion" " novemvigintinongentillion"
    " trigintanongentillion" " untrigintanongentillion"
    " duotrigintanongentillion" " trestrigintanongentillion"
    " quattuortrigintanongentillion" " quinquatrigintanongentillion"
    " sestrigintanongentillion" " septentrigintanongentillion"
    " octotrigintanongentillion" " noventrigintanongentillion"
    " quadragintanongentillion" " unquadragintanongentillion"
    " duoquadragintanongentillion" " tresquadragintanongentillion"
    " quattuorquadragintanongentillion" " quinquaquadragintanongentillion"
    " sesquadragintanongentillion" " septenquadragintanongentillion"
    " octoquadragintanongentillion" " novenquadragintanongentillion"
    " quinquagintanongentillion" " unquinquagintanongentillion"
    " duoquinquagintanongentillion" " tresquinquagintanongentillion"
    " quattuorquinquagintanongentillion" " quinquaquinquagintanongentillion"
    " sesquinquagintanongentillion" " septenquinquagintanongentillion"
    " octoquinquagintanongentillion" " novenquinquagintanongentillion"
    " sexagintanongentillion" " unsexagintanongentillion"
    " duosexagintanongentillion" " tresexagintanongentillion"
    " quattuorsexagintanongentillion" " quinquasexagintanongentillion"
    " sesexagintanongentillion" " septensexagintanongentillion"
    " octosexagintanongentillion" " novensexagintanongentillion"
    " septuagintanongentillion" " unseptuagintanongentillion"
    " duoseptuagintanongentillion" " treseptuagintanongentillion"
    " quattuorseptuagintanongentillion" " quinquaseptuagintanongentillion"
    " seseptuagintanongentillion" " septenseptuagintanongentillion"
    " octoseptuagintanongentillion" " novenseptuagintanongentillion"
    " octogintanongentillion" " unoctogintanongentillion"
    " duooctogintanongentillion" " tresoctogintanongentillion"
    " quattuoroctogintanongentillion" " quinquaoctogintanongentillion"
    " sexoctogintanongentillion" " septemoctogintanongentillion"
    " octooctogintanongentillion" " novemoctogintanongentillion"
    " nonagintanongentillion" " unnonagintanongentillion"
    " duononagintanongentillion" " trenonagintanongentillion"
    " quattuornonagintanongentillion" " quinquanonagintanongentillion"
    " senonagintanongentillion" " septenonagintanongentillion"
    " octononagintanongentillion" " novenonagintanongentillion"))

(defvar ordinal-ones
  #(nil "first" "second" "third" "fourth"
    "fifth" "sixth" "seventh" "eighth" "ninth")
  "Table of ordinal ones-place digits in English")

(defvar ordinal-tens
  #(nil "tenth" "twentieth" "thirtieth" "fortieth"
    "fiftieth" "sixtieth" "seventieth" "eightieth" "ninetieth")
  "Table of ordinal tens-place digits in English")

(defun format-print-small-cardinal (stream n)
  (multiple-value-bind
        (hundreds rem) (truncate n 100)
    (when (plusp hundreds)
      (write-string (svref cardinal-ones hundreds) stream)
      (write-string " hundred" stream)
      (when (plusp rem)
	(write-char #\space stream)))
    (when (plusp rem)
      (multiple-value-bind (tens ones)
	  (truncate rem 10)
        (cond ((< 1 tens)
	       (write-string (svref cardinal-tens tens) stream)
	       (when (plusp ones)
		 (write-char #\- stream)
		 (write-string (svref cardinal-ones ones) stream)))
	      ((= tens 1)
	       (write-string (svref cardinal-teens ones) stream))
	      ((plusp ones)
	       (write-string (svref cardinal-ones ones) stream)))))))

(defun format-print-cardinal (stream n)
  (cond ((minusp n)
	 (write-string "negative " stream)
	 (format-print-cardinal-aux stream (- n) 0 n))
	((zerop n)
	 (write-string "zero" stream))
	(t
	 (format-print-cardinal-aux stream n 0 n))))

(defun format-print-cardinal-aux (stream n period err)
  (multiple-value-bind (beyond here) (truncate n 1000)
    (unless (< period (length cardinal-periods))
      (error "Number too large to print in English: ~:D" err))
    (unless (zerop beyond)
      (format-print-cardinal-aux stream beyond (1+ period) err))
    (unless (zerop here)
      (unless (zerop beyond)
	(write-char #\space stream))
      (format-print-small-cardinal stream here)
      (write-string (svref cardinal-periods period) stream))))

(defun format-print-ordinal (stream n)
  (when (minusp n)
    (write-string "negative " stream))
  (let ((number (abs n)))
    (multiple-value-bind
	  (top bot) (truncate number 100)
      (unless (zerop top)
	(format-print-cardinal stream (- number bot)))
      (when (and (plusp top) (plusp bot))
	(write-char #\space stream))
      (multiple-value-bind
	    (tens ones) (truncate bot 10)
	(cond ((= bot 12) (write-string "twelfth" stream))
	      ((= tens 1)
	       (write-string (svref cardinal-teens ones) stream);;;RAD
	       (write-string "th" stream))
	      ((and (zerop tens) (plusp ones))
	       (write-string (svref ordinal-ones ones) stream))
	      ((and (zerop ones)(plusp tens))
	       (write-string (svref ordinal-tens tens) stream))
	      ((plusp bot)
	       (write-string (svref cardinal-tens tens) stream)
	       (write-char #\- stream)
	       (write-string (svref ordinal-ones ones) stream))
	      ((plusp number)
	       (write-string "th" stream))
	      (t
	       (write-string "zeroth" stream)))))))

;;; Print Roman numerals

(defun format-print-old-roman (stream n)
  (unless (< 0 n 5000)
    (error "Number too large to print in old Roman numerals: ~:D" n))
  (do ((char-list '(#\D #\C #\L #\X #\V #\I) (cdr char-list))
       (val-list '(500 100 50 10 5 1) (cdr val-list))
       (cur-char #\M (car char-list))
       (cur-val 1000 (car val-list))
       (start n (do ((i start (progn
				(write-char cur-char stream)
				(- i cur-val))))
		    ((< i cur-val) i))))
      ((zerop start))))

(defun format-print-roman (stream n)
  (unless (< 0 n 4000)
    (error "Number too large to print in Roman numerals: ~:D" n))
  (do ((char-list '(#\D #\C #\L #\X #\V #\I) (cdr char-list))
       (val-list '(500 100 50 10 5 1) (cdr val-list))
       (sub-chars '(#\C #\X #\X #\I #\I) (cdr sub-chars))
       (sub-val '(100 10 10 1 1 0) (cdr sub-val))
       (cur-char #\M (car char-list))
       (cur-val 1000 (car val-list))
       (cur-sub-char #\C (car sub-chars))
       (cur-sub-val 100 (car sub-val))
       (start n (do ((i start (progn
				(write-char cur-char stream)
				(- i cur-val))))
		    ((< i cur-val)
		     (cond ((<= (- cur-val cur-sub-val) i)
			    (write-char cur-sub-char stream)
			    (write-char cur-char stream)
			    (- i (- cur-val cur-sub-val)))
			   (t i))))))
      ((zerop start))))


;;;; Plural.

(def-format-directive #\P (colonp atsignp params end)
  (expand-bind-defaults () params
    (let ((arg (cond
		 ((not colonp)
		  (expand-next-arg))
		 (*orig-args-available*
		  `(if (eq orig-args args)
		       (error 'format-error
			      :complaint "No previous argument."
			      :offset ,(1- end))
		       (do ((arg-ptr orig-args (cdr arg-ptr)))
			   ((eq (cdr arg-ptr) args)
			    (car arg-ptr)))))
		 (*only-simple-args*
		  (unless *simple-args*
		    (error 'format-error
			   :complaint "No previous argument."))
		  (caar *simple-args*))
		 (t
		  (throw 'need-orig-args nil)))))
      (if atsignp
	  `(write-string (if (eql ,arg 1) "y" "ies") stream)
	  `(unless (eql ,arg 1) (write-char #\s stream))))))


;;;; Floating point noise.

(defun decimal-string (n)
  (write-to-string n :base 10 :radix nil :escape nil))

(def-format-directive #\F (colonp atsignp params)
  (when colonp
    (error 'format-error
	   :complaint
	   "Cannot specify the colon modifier with this directive."))
  (expand-bind-defaults ((w nil) (d nil) (k nil) (ovf nil) (pad #\space)) params
    `(format-fixed stream ,(expand-next-arg) ,w ,d ,k ,ovf ,pad ,atsignp)))

#+jscl
(defun format-fixed (stream number w d k ovf pad atsign)
  (if (numberp number)
      ;; TODO: Once we have proper numeric tower, we need to consider
      ;; more cases
      (format-fixed-aux stream number w d k ovf pad atsign)
      (format-princ stream number nil nil w 1 0 pad)))

#+jscl
(defun format-fixed-aux (stream number w d k ovf pad atsign)
  (let* ((number (if k (* number (expt 10 k)) number))
         (str (if d ((oget number "toFixed") d)
                  ((oget number "toString"))))
         (l (length str)))
    (when (and w (< l w))
      (write-string (make-string (- w l) :initial-element pad) stream))
    (when (and w (> l w) ovf)
      (setq string (make-string (- w l) :initial-element ovf)))
    (write-string str stream)))

(def-format-directive #\E (colonp atsignp params)
  (when colonp
    (error 'format-error
	   :complaint
	   "Cannot specify the colon modifier with this directive."))
  (expand-bind-defaults
      ((w nil) (d nil) (e nil) (k 1) (ovf nil) (pad #\space) (mark nil))
      params
    `(format-exponential stream ,(expand-next-arg) ,w ,d ,e ,k ,ovf ,pad ,mark
			 ,atsignp)))

#+jscl
(defun format-exponential (stream number w d e k ovf pad marker atsign)
  (if (numberp number)
      (format-exp-aux stream number w d e k ovf pad marker atsign)
      (format-princ stream number nil nil w 1 0 pad)))

#+jscl
(defun format-exp-aux (stream number w d k ovf pad marker atsign)
  (let* ((number (if k (* number (expt 10 k)) number))
         (str (if d ((oget number "toExponential") d)
                  ((oget number "toExponential"))))
         (l (length str)))
    (when (and w (< l w))
      (write-string (make-string (- w l) :initial-element pad) stream))
    (when (and w (> l w) ovf)
      (setq string (make-string (- w l) :initial-element ovf)))
    (write-string str stream)))

(def-format-directive #\G (colonp atsignp params)
  (when colonp
    (error 'format-error
	   :complaint
	   "Cannot specify the colon modifier with this directive."))
  (expand-bind-defaults
      ((w nil) (d nil) (e nil) (k nil) (ovf nil) (pad #\space) (mark nil))
      params
    `(format-general stream ,(expand-next-arg) ,w ,d ,e ,k ,ovf ,pad ,mark ,atsignp)))

#+jscl
(defun format-general (stream number w d e k ovf pad marker atsign)
  (if (numberp number)
      ;; TODO: proper general format
      (format-fixed-aux stream number w d k ovf pad atsign)
      (format-princ stream number nil nil w 1 0 pad)))

(def-format-directive #\$ (colonp atsignp params)
  (expand-bind-defaults ((d 2) (n 1) (w 0) (pad #\space)) params
    `(format-dollars stream ,(expand-next-arg) ,d ,n ,w ,pad ,colonp
		     ,atsignp)))

#+jscl
(defun format-dollars (stream number d n w pad colon atsign)
  (if (numberp number)
      ;; TODO: Once we have proper numeric tower, we need to consider
      ;; more cases
      (format-fixed-aux stream number w d k ovf pad atsign)
      (format-princ stream number nil nil w 1 0 pad)))


;;;; line/page breaks and other stuff like that.

(def-format-directive #\% (colonp atsignp params)
  (when (or colonp atsignp)
    (error 'format-error
	   :complaint
	   "Cannot specify either colon or atsign for this directive."))
  (if params
      (expand-bind-defaults ((count 1)) params
	`(dotimes (i ,count)
	   (terpri stream)))
      '(terpri stream)))

(def-format-directive #\& (colonp atsignp params)
  (when (or colonp atsignp)
    (error 'format-error
	   :complaint
	   "Cannot specify either colon or atsign for this directive."))
  (if params
      (expand-bind-defaults ((count 1)) params
	`(progn
	   (when (plusp ,count)
	     (fresh-line stream)
	     (dotimes (i (1- ,count))
	       (terpri stream)))))
      '(fresh-line stream)))

(def-format-directive #\| (colonp atsignp params)
  (when (or colonp atsignp)
    (error 'format-error
	   :complaint
	   "Cannot specify either colon or atsign for this directive."))
  (if params
      (expand-bind-defaults ((count 1)) params
	`(dotimes (i ,count)
	   (write-char #\page stream)))
      '(write-char #\page stream)))

(def-format-directive #\~ (colonp atsignp params)
  (when (or colonp atsignp)
    (error 'format-error
	   :complaint
	   "Cannot specify either colon or atsign for this directive."))
  (if params
      (expand-bind-defaults ((count 1)) params
	`(dotimes (i ,count)
	   (write-char #\~ stream)))
      '(write-char #\~ stream)))

(def-complex-format-directive #\newline (colonp atsignp params directives)
  (when (and colonp atsignp)
    (error 'format-error
	   :complaint
	   "Cannot specify both colon and atsign for this directive."))
  (values (expand-bind-defaults () params
	    (if atsignp
		'(write-char #\newline stream)
		nil))
	  (if (and (not colonp)
		   directives
		   (stringp (car directives)))
	      (cons (string-left-trim '(#\space #\newline #\tab)
				      (car directives))
		    (cdr directives))
	      directives)))


;;;; Tab and simple pretty-printing noise.

(def-format-directive #\T (colonp atsignp params)
  `(write-char #\tab stream)
  #+nil (if colonp
      (expand-bind-defaults ((n 1) (m 1)) params
	`(pprint-tab ,(if atsignp :section-relative :section)
		     ,n ,m stream))
      (if atsignp
	  (expand-bind-defaults ((colrel 1) (colinc 1)) params
	    `(format-relative-tab stream ,colrel ,colinc))
	  (expand-bind-defaults ((colnum 1) (colinc 1)) params
	    `(format-absolute-tab stream ,colnum ,colinc)))))

(defun output-spaces (stream n)
  (let ((spaces #.(make-string 100 :initial-element #\space)))
    (loop
      (when (< n (length spaces))
	(return))
      (write-string spaces stream)
      (decf n (length spaces)))
    (write-string spaces stream :end n)))

;; CLHS 22.3.6.1 for relative tabulations says:
;;
;;   ... outputs COLREL spaces and then outputs the smallest
;;   non-negative number of additional spaces necessary to move the
;;   cursor to a column that is a multiple of COLINC.... If the
;;   current output column cannot be determined, however, then colinc
;;   is ignored, and exactly colrel spaces are output.
#+nil
(defun format-relative-tab (stream colrel colinc)
  (if (pp:pretty-stream-p stream)
      (pprint-tab :line-relative colrel colinc stream)
      (flet ((advance-to-column ()
	       (let* ((cur (lisp::charpos stream))
		      (spaces (if (and cur (plusp colinc))
				  (- (* (ceiling (+ cur colrel) colinc) colinc) cur)
				  colrel)))
		 (output-spaces stream spaces))))
	(lisp::stream-dispatch stream
	                       ;; simple-stream
	                       (advance-to-column)
	                       ;; lisp-stream
	                       (advance-to-column)
	                       ;; fundamental-stream
	                       (let ((cur (stream-line-column stream)))
	                         (cond ((and cur (plusp colinc))
		                        (stream-advance-to-column stream
					                          (+ cur
						                     (* (floor (+ cur colrel) colinc)
						                        colinc))))
		                       (t
		                        (stream-advance-to-column stream (+ cur colrel)))))))))

;; CLHS 22.3.6.1 says:
;;
;;   If the cursor is already at or beyond the column COLNUM, it will
;;   output spaces to move it to COLNUM + k*COLINC for the smallest
;;   positive integer k possible, unless COLINC is zero, in which case
;;   no spaces are output.
#+nil
(defun format-absolute-tab (stream colnum colinc)
  (if (pp:pretty-stream-p stream)
      (pprint-tab :line colnum colinc stream)
      (flet ((advance-to-column ()
	       (let ((cur (lisp::charpos stream)))
		 (cond ((null cur)
			(write-string "  " stream))
		       ((< cur colnum)
			(output-spaces stream (- colnum cur)))
		       (t
			(unless (zerop colinc)
			  (output-spaces stream
					 (- colinc (rem (- cur colnum) colinc)))))))))
	(lisp::stream-dispatch stream
	                       ;; simple-stream. NOTE: Do we need to do soemthing better for
	                       ;; simple streams?
	                       (advance-to-column)
	                       ;; lisp-stream
	                       (advance-to-column)
	                       ;; fundamental-stream
	                       (let ((cur (stream-line-column stream)))
	                         (cond ((null cur)
		                        (write-string "  " stream))
		                       ((< cur colnum)
		                        (stream-advance-to-column stream colnum))
		                       (t
		                        (unless (zerop colinc)
		                          (let ((k (ceiling (- cur colnum) colinc)))
		                            (stream-advance-to-column stream
						                      (+ colnum (* k colinc))))))))))))

(def-format-directive #\_ (colonp atsignp params)
  (expand-bind-defaults () params
    `(pprint-newline ,(if colonp
			  (if atsignp
			      :mandatory
			      :fill)
			  (if atsignp
			      :miser
			      :linear))
		     stream)))

(def-format-directive #\I (colonp atsignp params)
  (when atsignp
    (error 'format-error
	   :complaint "Cannot specify the at-sign modifier."))
  (expand-bind-defaults ((n 0)) params
    `(pprint-indent ,(if colonp :current :block) ,n stream)))


;;;; *

(def-format-directive #\* (colonp atsignp params end)
  (if atsignp
      (if colonp
	  (error 'format-error
		 :complaint "Cannot specify both colon and at-sign.")
	  (expand-bind-defaults ((posn 0)) params
	    (unless *orig-args-available*
	      (throw 'need-orig-args nil))
	    `(if (<= 0 ,posn (length orig-args))
		 (setf args (nthcdr ,posn orig-args))
		 (error 'format-error
			:complaint "Index ~D out of bounds.  Should have been ~
				    between 0 and ~D."
			:arguments (list ,posn (length orig-args))
			:offset ,(1- end)))))
      (if colonp
	  (expand-bind-defaults ((n 1)) params
	    (unless *orig-args-available*
	      (throw 'need-orig-args nil))
	    `(do ((cur-posn 0 (1+ cur-posn))
		  (arg-ptr orig-args (cdr arg-ptr)))
		 ((eq arg-ptr args)
		  (let ((new-posn (- cur-posn ,n)))
		    (if (<= 0 new-posn (length orig-args))
			(setf args (nthcdr new-posn orig-args))
			(error 'format-error
			       :complaint
			       "Index ~D out of bounds.  Should have been ~
				between 0 and ~D."
			       :arguments
			       (list new-posn (length orig-args))
			       :offset ,(1- end)))))))
	  (if params
	      (expand-bind-defaults ((n 1)) params
		(setf *only-simple-args* nil)
		`(dotimes (i ,n)
		   ,(expand-next-arg)))
	      (expand-next-arg)))))


;;;; Indirection.

(def-format-directive #\? (colonp atsignp params string end)
  (when colonp
    (error 'format-error
	   :complaint "Cannot specify the colon modifier."))
  (expand-bind-defaults () params
    `(handler-bind
	 ((format-error
	    #'(lambda (condition)
	        (error 'format-error
		       :complaint
		       "~A~%while processing indirect format string:"
		       :arguments (list condition)
		       :print-banner nil
		       :control-string ,string
		       :offset ,(1- end)))))
       ,(if atsignp
	    (if *orig-args-available*
		`(setf args (%format stream ,(expand-next-arg) orig-args args))
		(throw 'need-orig-args nil))
	    `(%format stream ,(expand-next-arg) ,(expand-next-arg))))))


;;;; Capitalization.

(def-complex-format-directive #\( (colonp atsignp params directives)
  (let ((close (find-directive directives #\) nil)))
    (unless close
      (error 'format-error
	     :complaint "No corresponding close paren."))
    (let* ((posn (position close directives))
	   (before (subseq directives 0 posn))
	   (after (nthcdr (1+ posn) directives)))
      (values
       (expand-bind-defaults () params
	 `(let ((stream (make-stream :write-fn
                                     (lambda (string)
                                       (write-string
                                        (,(if colonp
				              (if atsignp
				                  'string-upcase
				                  'string-capitalize)
				              (if atsignp
                                                  ;; FIXME: implement captialize-first
				                  'string-capitalize
				                  'string-downcase))
                                         string)
                                        stream))
                                     :kind 'format-case-frob-stream)))
	    ,@(expand-directive-list before)))
       after))))

(def-complex-format-directive #\) ()
  (error 'format-error
	 :complaint "No corresponding open paren."))


;;;; Conditionals

(defun parse-conditional-directive (directives)
  (let ((sublists nil)
	(last-semi-with-colon-p nil)
	(remaining directives))
    (loop
      (let ((close-or-semi (find-directive remaining #\] t)))
	(unless close-or-semi
	  (error 'format-error
		 :complaint "No corresponding close bracket."))
	(let ((posn (position close-or-semi remaining)))
	  (push (subseq remaining 0 posn) sublists)
	  (setf remaining (nthcdr (1+ posn) remaining))
	  (when (char= (format-directive-character close-or-semi) #\])
	    (return))
	  (setf last-semi-with-colon-p
		(format-directive-colonp close-or-semi)))))
    (values sublists last-semi-with-colon-p remaining)))

(def-complex-format-directive #\[ (colonp atsignp params directives)
  (multiple-value-bind
        (sublists last-semi-with-colon-p remaining)
      (parse-conditional-directive directives)
    (values
     (if atsignp
	 (if colonp
	     (error 'format-error
		    :complaint
		    "Cannot specify both the colon and at-sign modifiers.")
	     (if (cdr sublists)
		 (error 'format-error
			:complaint
			"Can only specify one section")
		 (expand-bind-defaults () params
		   (expand-maybe-conditional (car sublists)))))
	 (if colonp
	     (if (= (length sublists) 2)
		 (progn
		   (when last-semi-with-colon-p
		     (error 'format-error
			    :complaint "~~:; directive not effective in ~~:["))
		   (expand-bind-defaults () params
		     (expand-true-false-conditional (car sublists)
						    (cadr sublists))))
		 (error 'format-error
			:complaint
			"Must specify exactly two sections."))
	     (expand-bind-defaults ((index nil)) params
	       (setf *only-simple-args* nil)
	       (let ((clauses nil)
		     (case `(or ,index ,(expand-next-arg))))
		 (when last-semi-with-colon-p
		   (push `(t ,@(expand-directive-list (pop sublists)))
			 clauses))
		 (let ((count (length sublists)))
		   (dolist (sublist sublists)
		     (push `(,(decf count)
			     ,@(expand-directive-list sublist))
			   clauses)))
		 `(case ,case ,@clauses)))))
     remaining)))

(defun expand-maybe-conditional (sublist)
  (flet ((hairy ()
	   `(let ((prev-args args)
		  (arg ,(expand-next-arg)))
	      (when arg
		(setf args prev-args)
		,@(expand-directive-list sublist)))))
    (if *only-simple-args*
	(multiple-value-bind
	      (guts new-args)
	    (let ((*simple-args* *simple-args*))
	      (values (expand-directive-list sublist)
		      *simple-args*))
	  (cond ((and new-args (eq *simple-args* (cdr new-args)))
		 (setf *simple-args* new-args)
		 `(when ,(caar new-args)
		    ,@guts))
		(t
		 (setf *only-simple-args* nil)
		 (hairy))))
	(hairy))))

(defun expand-true-false-conditional (true false)
  (let ((arg (expand-next-arg)))
    (flet ((hairy ()
	     `(if ,arg
		  (progn
		    ,@(expand-directive-list true))
		  (progn
		    ,@(expand-directive-list false)))))
      (if *only-simple-args*
	  (multiple-value-bind
	        (true-guts true-args true-simple)
	      (let ((*simple-args* *simple-args*)
		    (*only-simple-args* t))
		(values (expand-directive-list true)
			*simple-args*
			*only-simple-args*))
	    (multiple-value-bind
		  (false-guts false-args false-simple)
		(let ((*simple-args* *simple-args*)
		      (*only-simple-args* t))
		  (values (expand-directive-list false)
			  *simple-args*
			  *only-simple-args*))
	      (if (= (length true-args) (length false-args))
		  `(if ,arg
		       (progn
			 ,@true-guts)
		       ,(do ((false false-args (cdr false))
			     (true true-args (cdr true))
			     (bindings nil (cons `(,(caar false) ,(caar true))
						 bindings)))
			    ((eq true *simple-args*)
			     (setf *simple-args* true-args)
			     (setf *only-simple-args*
				   (and true-simple false-simple))
			     (if bindings
				 `(let ,bindings
				    ,@false-guts)
				 `(progn
				    ,@false-guts)))))
		  (progn
		    (setf *only-simple-args* nil)
		    (hairy)))))
	  (hairy)))))

(def-complex-format-directive #\; ()
  (error 'format-error
	 :complaint
	 "~~; not contained within either ~~[...~~] or ~~<...~~>."))

(def-complex-format-directive #\] ()
  (error 'format-error
	 :complaint
	 "No corresponding open bracket."))


;;;; Up-and-out.

(defvar *outside-args*)

(def-format-directive #\^ (colonp atsignp params)
  (when atsignp
    (error 'format-error
	   :complaint "Cannot specify the at-sign modifier."))
  (when (and colonp (not *up-up-and-out-allowed*))
    (error 'format-error
	   :complaint "Attempt to use ~~:^ outside a ~~:{...~~} construct."))
  ;; See the #\^ interpreter below for what happens here.
  `(when ,(case (length params)
	    (0 (if colonp
		   '(null outside-args)
		   (progn
		     (setf *only-simple-args* nil)
		     '(null args))))
	    (1 (expand-bind-defaults ((count nil)) params
		 `(if ,count
		      (eql ,count 0)
		      ,(if colonp
			   '(null outside-args)
			   (progn
			     (setf *only-simple-args* nil)
			     '(null args))))))
	    (2 (expand-bind-defaults ((arg1 nil) (arg2 nil)) params
		 `(if ,arg2
		      (eql ,arg1 ,arg2)
		      (eql ,arg1 0))))
	    (t (expand-bind-defaults ((arg1 nil) (arg2 nil) (arg3 nil)) params
		 `(if ,arg3
		      (<= ,arg1 ,arg2 ,arg3)
		      (if ,arg2
			  (eql ,arg1 ,arg2)
			  ;; Duplicate the case of 1 arg?
			  (eql ,arg1 0))))))
     ,(if colonp
	  '(return-from outside-loop nil)
	  '(return))))


;;;; Iteration.

(def-complex-format-directive #\{ (colonp atsignp params string end directives)
  (let ((close (find-directive directives #\} nil)))
    (unless close
      (error 'format-error
	     :complaint
	     "No corresponding close brace."))
    (let* ((closed-with-colon (format-directive-colonp close))
	   (posn (position close directives)))
      (labels
	  ((compute-insides ()
	     (if (zerop posn)
		 (if *orig-args-available*
		     `((handler-bind
			   ((format-error
			      #'(lambda (condition)
				  (error 'format-error
					 :complaint
					 "~A~%while processing indirect format string:"
					 :arguments (list condition)
					 :print-banner nil
					 :control-string ,string
					 :offset ,(1- end)))))
			 (setf args
			       (%format stream inside-string orig-args args))))
		     (throw 'need-orig-args nil))
		 (let ((*up-up-and-out-allowed* colonp))
		   (expand-directive-list (subseq directives 0 posn)))))
	   (compute-loop (count)
	     (when atsignp
	       (setf *only-simple-args* nil))
	     `(loop
		,@(unless closed-with-colon
		    '((when (null args)
			(return))))
		,@(when count
		    `((when (and ,count (minusp (decf ,count)))
			(return))))
		,@(if colonp
		      (let ((*expander-next-arg-macro* 'expander-next-arg)
			    (*only-simple-args* nil)
			    (*orig-args-available* t))
			`((let* ((orig-args ,(expand-next-arg))
				 (outside-args args)
				 (args orig-args))
			    (declare (ignorable orig-args outside-args args))
			    (block nil
			      ,@(compute-insides)))))
		      (compute-insides))
		,@(when closed-with-colon
		    '((when (null args)
			(return))))))
	   (compute-block (count)
	     (if colonp
		 `(block outside-loop
		    ,(compute-loop count))
		 (compute-loop count)))
	   (compute-bindings (count)
	     (if atsignp
		 (compute-block count)
		 `(let* ((orig-args ,(expand-next-arg))
			 (args orig-args))
		    (declare (ignorable orig-args args))
		    ,(let ((*expander-next-arg-macro* 'expander-next-arg)
			   (*only-simple-args* nil)
			   (*orig-args-available* t))
		       (compute-block count))))))
	(values (if params
		    (expand-bind-defaults ((count nil)) params
		      (if (zerop posn)
			  `(let ((inside-string ,(expand-next-arg)))
			     ,(compute-bindings count))
			  (compute-bindings count)))
		    (if (zerop posn)
			`(let ((inside-string ,(expand-next-arg)))
			   ,(compute-bindings nil))
			(compute-bindings nil)))
		(nthcdr (1+ posn) directives))))))

(def-complex-format-directive #\} ()
  (error 'format-error
	 :complaint "No corresponding open brace."))



;;;; Justification.

(defparameter *illegal-inside-justification*
  (mapcar (lambda (x) (parse-directive x 0))
	        '("~W" "~:W" "~@W" "~:@W"
	          "~_" "~:_" "~@_" "~:@_"
	          "~:>" "~:@>"
	          "~I" "~:I" "~@I" "~:@I"
	          "~:T" "~:@T")))

(defun illegal-inside-justification-p (directive)
  (member directive *illegal-inside-justification*
	  :test (lambda (x y)
		  (and (format-directive-p x)
		       (format-directive-p y)
		       (eql (format-directive-character x) (format-directive-character y))
		       (eql (format-directive-colonp x) (format-directive-colonp y))
		       (eql (format-directive-atsignp x) (format-directive-atsignp y))))))

(def-complex-format-directive #\< (colonp atsignp params string end directives)
  (multiple-value-bind
        (segments first-semi close remaining)
      (parse-format-justification directives)
    (values
     (if (format-directive-colonp close)
	 (multiple-value-bind
	       (prefix per-line-p insides suffix)
	     (parse-format-logical-block segments colonp first-semi
					 close params string end)
	   (expand-format-logical-block prefix per-line-p insides
					suffix atsignp))
	 (let ((count (reduce #'+ (mapcar (lambda (x)
					    (count-if #'illegal-inside-justification-p x))
					  segments))))
	   (when (> count 0)
	     ;; ANSI specifies that "an error is signalled" in this
	     ;; situation.
	     (error 'format-error
		    :complaint "~D illegal directives found inside justification block"
		    :arguments (list count)))
	   (expand-format-justification segments colonp atsignp
				        first-semi params)))
     remaining)))

(defun parse-format-justification (directives)
  (let ((first-semi nil)
	(close nil)
	(remaining directives)
        (segments nil))
    (loop
      (let ((close-or-semi (find-directive remaining #\> t)))
	(unless close-or-semi
	  (error 'format-error
		 :complaint "No corresponding close bracket."))
	(let ((posn (position close-or-semi remaining)))
	  (push (subseq remaining 0 posn) segments)
	  (setf remaining (nthcdr (1+ posn) remaining)))
	(when (char= (format-directive-character close-or-semi)
		     #\>)
	  (setf close close-or-semi)
	  (return))
	(unless first-semi
	  (setf first-semi close-or-semi))))
    (values (nreverse segments) first-semi close remaining)))

(defun expand-format-justification (segments colonp atsignp first-semi params)
  (let ((newline-segment-p
	  (and first-semi
	       (format-directive-colonp first-semi))))
    (expand-bind-defaults
        ((mincol 0) (colinc 1) (minpad 0) (padchar #\space))
        params
      `(let ((segments nil)
	     ,@(when newline-segment-p
		 '((newline-segment nil)
		   (extra-space 0)
		   (line-len 72))))
	 (block nil
	   ,@(when newline-segment-p
	       `((setf newline-segment
		       (with-output-to-string (stream)
			 ,@(expand-directive-list (pop segments))))
		 ,(expand-bind-defaults
		      ((extra 0)
		       (line-len '(or #+nil (lisp::line-length stream) 72)))
		      (format-directive-params first-semi)
		    `(setf extra-space ,extra line-len ,line-len))))
	   ,@(mapcar #'(lambda (segment)
			 `(push (with-output-to-string (stream)
				  ,@(expand-directive-list segment))
			        segments))
		     segments))
	 (format-justification stream
			       ,@(if newline-segment-p
				     '(newline-segment extra-space line-len)
				     '(nil 0 0))
			       segments ,colonp ,atsignp
			       ,mincol ,colinc ,minpad ,padchar)))))

(defun format-justification (stream newline-prefix extra-space line-len strings
			     pad-left pad-right mincol colinc minpad padchar)
  (setf strings (reverse strings))

  (let* ((num-gaps (+ (1- (length strings))
		      (if pad-left 1 0)
		      (if pad-right 1 0)))
	 (chars (+ (* num-gaps minpad)
		   (loop
		     for string in strings
		     summing (length string))))
	 (length (if (> chars mincol)
		     (+ mincol (* (ceiling (- chars mincol) colinc) colinc))
		     mincol))
	 (padding (+ (- length chars) (* num-gaps minpad))))
    (when (and newline-prefix
	       (> (+ (or #+nil (lisp::charpos stream) 0)
		     length extra-space)
		  line-len))
      (write-string newline-prefix stream))

    #||
    (format t "mincol   = ~A~%" mincol)
    (format t "minpad   = ~A~%" minpad)
    (format t "num-gaps = ~A~%" num-gaps)
    (format t "chars    = ~A~%" chars)
    (format t "length   = ~A~%" length)
    (format t "padding  = ~A~%" padding)
    ||#

    (flet ((do-padding ()
	     (let ((pad-len (if (zerop num-gaps)
				padding
				(truncate padding num-gaps))))
	       (decf padding pad-len)
	       (decf num-gaps)
	       (dotimes (i pad-len) (write-char padchar stream)))))
      (when (or pad-left
		(and (not pad-right) (null (cdr strings))))
	(do-padding))
      (when strings
	(write-string (car strings) stream)
	(dolist (string (cdr strings))
	  (do-padding)
	  (write-string string stream)))
      (when pad-right
	(do-padding)))))

(defun parse-format-logical-block
    (segments colonp first-semi close params string end)
  (when params
    (error 'format-error
	   :complaint "No parameters can be supplied with ~~<...~~:>."
	   :offset (caar params)))
  (multiple-value-bind
        (prefix insides suffix)
      (multiple-value-bind (prefix-default suffix-default)
	  (if colonp (values "(" ")") (values "" ""))
	(flet ((extract-string (list prefix-p)
		 (let ((directive (find-if #'format-directive-p list)))
		   (if directive
		       (error 'format-error
			      :complaint
			      "Cannot include format directives inside the ~
			       ~:[suffix~;prefix~] segment of ~~<...~~:>"
			      :arguments (list prefix-p)
			      :offset (1- (format-directive-end directive)))
		       (apply #'concatenate 'string list)))))
	  (case (length segments)
	    (0 (values prefix-default nil suffix-default))
	    (1 (values prefix-default (car segments) suffix-default))
	    (2 (values (extract-string (car segments) t)
		       (cadr segments) suffix-default))
	    (3 (values (extract-string (car segments) t)
		       (cadr segments)
		       (extract-string (caddr segments) nil)))
	    (t
	     (error 'format-error
		    :complaint "Too many segments for ~~<...~~:>.")))))
    (when (format-directive-atsignp close)
      (setf insides
	    (add-fill-style-newlines insides
				     string
				     (if first-semi
					 (format-directive-end first-semi)
					 end))))
    (values prefix
	    (and first-semi (format-directive-atsignp first-semi))
	    insides
	    suffix)))

;; CLHS 22.3.5.2 says fill-style conditional newlines are
;; automatically inserted after each group of blanks except for blanks
;; after a newline directive.
(defun add-fill-style-newlines (list string offset &optional newlinep)
  (if list
      (let ((directive (car list)))
	(if (stringp directive)
	    (nconc (add-fill-style-newlines-aux directive string offset newlinep)
		   (add-fill-style-newlines (cdr list)
					    string
					    (+ offset (length directive))))
	    (cons directive
		  (add-fill-style-newlines (cdr list)
					   string
					   (format-directive-end directive)
					   (char= (format-directive-character directive)
						  #\Newline)))))
      nil))

(defun add-fill-style-newlines-aux (literal string offset &optional newlinep)
  (let ((end (length literal))
	(posn 0)
        (results nil))
    (loop
      (let ((blank (position #\space literal :start posn)))
	(when (null blank)
	  (push (subseq literal posn) results)
	  (return))
	(let ((non-blank (or (position #\space literal :start blank
					               :test #'char/=)
			     end)))
	  (push (subseq literal posn non-blank) results)
	  (unless newlinep
	    (push (make-format-directive
		   :string string :character #\_
		   :start (+ offset non-blank) :end (+ offset non-blank)
		   :colonp t :atsignp nil :params nil)
                  results))
	  (setf posn non-blank))
	(when (= posn end)
	  (return))))
    (nreverse results)))

(defun expand-format-logical-block (prefix per-line-p insides suffix atsignp)
  `(let ((arg ,(if atsignp 'args (expand-next-arg))))
     ,@(when atsignp
	 (setf *only-simple-args* nil)
	 '((setf args nil)))
     (progn
       #+nil pprint-logical-block
       #+nil (stream arg
		     ,(if per-line-p :per-line-prefix :prefix) (or ,prefix "")
		     :suffix (or ,suffix ""))
       (let ((args arg)
	     ,@(unless atsignp
		 `((orig-args arg))))
	 (declare (ignorable args ,@(unless atsignp '(orig-args))))
	 (block nil
	   ,@(let (#+nil (*expander-next-arg-macro* 'expander-pprint-next-arg)
		   (*only-simple-args* nil)
		   (*orig-args-available* t))
	       (expand-directive-list insides)))))))

(def-complex-format-directive #\> ()
  (error 'format-error
	 :complaint "No corresponding open bracket."))


;;;; User-defined method.

(def-format-directive #\/ (string start end colonp atsignp params)
  (let ((symbol (extract-user-function-name string start end))
        param-names bindings)
    (dolist (param-and-offset params)
      (let ((param (cdr param-and-offset)))
	(let ((param-name (gensym)))
	  (push param-name param-names)
	  (push `(,param-name
		  ,(case param
		     (:arg (expand-next-arg))
		     (:remaining '(length args))
		     (t param)))
                bindings))))
    `(let ,(nreverse bindings)
       (,symbol stream ,(expand-next-arg) ,colonp ,atsignp
		,@(nreverse param-names)))))

(defun extract-user-function-name (string start end)
  (let ((slash (position #\/ string :start start :end (1- end)
			            :from-end t)))
    (unless slash
      (error 'format-error
	     :complaint "Malformed ~~/ directive."))
    (let* ((name (string-upcase (let ((foo string))
				  ;; Hack alert: This is to keep the compiler
				  ;; quiet about deleting code inside the
				  ;; subseq expansion.
				  (subseq foo (1+ slash) (1- end)))))
	   (first-colon (position #\: name))
	   (second-colon (if first-colon (position #\: name :start (1+ first-colon))))
	   (package-name (if first-colon
			     (subseq name 0 first-colon)
			     "COMMON-LISP-USER"))
	   (package (find-package package-name)))
      (unless package
	(error 'format-error
	       :complaint "No package named ~S"
	       :arguments (list package-name)))
      (intern (cond
                ((and second-colon (= second-colon (1+ first-colon)))
                 (subseq name (1+ second-colon)))
                (first-colon
                 (subseq name (1+ first-colon)))
                (t name))
              package))))
