;;;; boot.lisp — First forms to be cross compiled

;; Copyright © 2012, 2013 David Vazquez
;;; Copyright © 2012 Raimon Grau

;; JSCL is free software: you can redistribute it and/or modify it under
;; the terms of the GNU General  Public License as published by the Free
;; Software Foundation,  either version  3 of the  License, or  (at your
;; option) any later version.
;;
;; JSCL is distributed  in the hope that it will  be useful, but WITHOUT
;; ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
;; FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
;; for more details.
;;
;; You should  have received a  copy of  the GNU General  Public License
;; along with JSCL. If not, see <http://www.gnu.org/licenses/>.

;;; This  code  is  executed  when   JSCL  compiles  this  file  itself.
;;; The compiler provides compilation of  some special forms, as well as
;;; funcalls and  macroexpansion, but  no functions.  So, we  define the
;;; Lisp  world from  scratch. This  code has  to define  enough of  the
;;; language for the compiler to be able to run.



;;; Package definitions for within the environment.

(unless (find-package :keyword)
  (make-package "KEYWORD"))

(unless (find-package :common-lisp)
  (make-package "COMMON-LISP" :nicknames (list "CL"))
  (export
   '(#:&allow-other-keys               	#:&aux
     #:&body                           	#:&environment
     #:&key                            	#:&optional
     #:&rest                           	#:&whole
     #:*                               	#:**
     #:***                             	#:*break-on-signals*
     #:*compile-file-pathname*         	#:*compile-file-truename*
     #:*compile-print*                 	#:*compile-verbose*
     #:*debug-io*                      	#:*debugger-hook*
     #:*default-pathname-defaults*     	#:*error-output*
     #:*features*                      	#:*gensym-counter*
     #:*load-pathname*                 	#:*load-print*
     #:*load-truename*                 	#:*load-verbose*
     #:*macroexpand-hook*              	#:*modules*
     #:*package*                       	#:*print-array*
     #:*print-base*                    	#:*print-case*
     #:*print-circle*                  	#:*print-escape*
     #:*print-gensym*                  	#:*print-length*
     #:*print-level*                   	#:*print-lines*
     #:*print-miser-width*             	#:*print-pprint-dispatch*
     #:*print-pretty*                  	#:*print-radix*
     #:*print-readably*                	#:*print-right-margin*
     #:*query-io*                      	#:*random-state*
     #:*read-base*                     	#:*read-default-float-format*
     #:*read-eval*                     	#:*read-suppress*
     #:*readtable*                     	#:*standard-input*
     #:*standard-output*               	#:*terminal-io*
     #:*trace-output*                  	#:+
     #:++                              	#:+++
     #:-                               	#:/
     #://                              	#:///
     #:/=                              	#:1+
     #:1-                              	#:<
     #:<=                              	#:=
     #:>                               	#:>=
     #:abort                           	#:abs
     #:acons                           	#:acos
     #:acosh                           	#:add-method
     #:adjoin                          	#:adjust-array
     #:adjustable-array-p              	#:allocate-instance
     #:alpha-char-p                    	#:alphanumericp
     #:and                             	#:append
     #:apply                           	#:apropos
     #:apropos-list                    	#:aref
     #:arithmetic-error                	#:arithmetic-error-operands
     #:arithmetic-error-operation      	#:array
     #:array-dimension                 	#:array-dimension-limit
     #:array-dimensions                	#:array-displacement
     #:array-element-type              	#:array-has-fill-pointer-p
     #:array-in-bounds-p               	#:array-rank
     #:array-rank-limit                	#:array-row-major-index
     #:array-total-size                	#:array-total-size-limit
     #:arrayp                          	#:ash
     #:asin                            	#:asinh
     #:assert                          	#:assoc
     #:assoc-if                        	#:assoc-if-not
     #:atan                            	#:atanh
     #:atom                            	#:base-char
     #:base-string                     	#:bignum
     #:bit                             	#:bit-and
     #:bit-andc1                       	#:bit-andc2
     #:bit-eqv                         	#:bit-ior
     #:bit-nand                        	#:bit-nor
     #:bit-not                         	#:bit-orc1
     #:bit-orc2                        	#:bit-vector
     #:bit-vector-p                    	#:bit-xor
     #:block                           	#:boole
     #:boole-1                         	#:boole-2
     #:boole-and                       	#:boole-andc1
     #:boole-andc2                     	#:boole-c1
     #:boole-c2                        	#:boole-clr
     #:boole-eqv                       	#:boole-ior
     #:boole-nand                      	#:boole-nor
     #:boole-orc1                      	#:boole-orc2
     #:boole-set                       	#:boole-xor
     #:boolean                         	#:both-case-p
     #:boundp                          	#:break
     #:broadcast-stream                	#:broadcast-stream-streams
     #:built-in-class                  	#:butlast
     #:byte                            	#:byte-position
     #:byte-size                       	#:caaaar
     #:caaadr                          	#:caaar
     #:caadar                          	#:caaddr
     #:caadr                           	#:caar
     #:cadaar                          	#:cadadr
     #:cadar                           	#:caddar
     #:cadddr                          	#:caddr
     #:cadr                            	#:call-arguments-limit
     #:call-method                     	#:call-next-method
     #:car                             	#:case
     #:catch                           	#:ccase
     #:cdaaar                          	#:cdaadr
     #:cdaar                           	#:cdadar
     #:cdaddr                          	#:cdadr
     #:cdar                            	#:cddaar
     #:cddadr                          	#:cddar
     #:cdddar                          	#:cddddr
     #:cdddr                           	#:cddr
     #:cdr                             	#:ceiling
     #:cell-error                      	#:cell-error-name
     #:cerror                          	#:change-class
     #:char                            	#:char-code
     #:char-code-limit                 	#:char-downcase
     #:char-equal                      	#:char-greaterp
     #:char-int                        	#:char-lessp
     #:char-name                       	#:char-not-equal
     #:char-not-greaterp               	#:char-not-lessp
     #:char-upcase                     	#:char/=
     #:char<                           	#:char<=
     #:char=                           	#:char>
     #:char>=                          	#:character
     #:characterp                      	#:check-type
     #:cis                             	#:class
     #:class-name                      	#:class-of
     #:clear-input                     	#:clear-output
     #:close                           	#:clrhash
     #:code-char                       	#:coerce
     #:compilation-speed               	#:compile
     #:compile-file                    	#:compile-file-pathname
     #:compiled-function               	#:compiled-function-p
     #:compiler-macro                  	#:compiler-macro-function
     #:complement                      	#:complex
     #:complexp                        	#:compute-applicable-methods
     #:compute-restarts                	#:concatenate
     #:concatenated-stream             	#:concatenated-stream-streams
     #:cond                            	#:condition
     #:conjugate                       	#:cons
     #:consp                           	#:constantly
     #:constantp                       	#:continue
     #:control-error                   	#:copy-alist
     #:copy-list                       	#:copy-pprint-dispatch
     #:copy-readtable                  	#:copy-seq
     #:copy-structure                  	#:copy-symbol
     #:copy-tree                       	#:cos
     #:cosh                            	#:count
     #:count-if                        	#:count-if-not
     #:ctypecase                       	#:debug
     #:decf                            	#:declaim
     #:declaration                     	#:declare
     #:decode-float                    	#:decode-universal-time
     #:defclass                        	#:defconstant
     #:defgeneric                      	#:define-compiler-macro
     #:define-condition                	#:define-method-combination
     #:define-modify-macro             	#:define-setf-expander
     #:define-symbol-macro             	#:defmacro
     #:defmethod                       	#:defpackage
     #:defparameter                    	#:defsetf
     #:defstruct                       	#:deftype
     #:defun                           	#:defvar
     #:delete                          	#:delete-duplicates
     #:delete-file                     	#:delete-if
     #:delete-if-not                   	#:delete-package
     #:denominator                     	#:deposit-field
     #:describe                        	#:describe-object
     #:destructuring-bind              	#:digit-char
     #:digit-char-p                    	#:directory
     #:directory-namestring            	#:disassemble
     #:division-by-zero                	#:do
     #:do*                             	#:do-all-symbols
     #:do-external-symbols             	#:do-symbols
     #:documentation                   	#:dolist
     #:dotimes                         	#:double-float
     #:double-float-epsilon            	#:double-float-negative-epsilon
     #:dpb                             	#:dribble
     #:dynamic-extent                  	#:ecase
     #:echo-stream                     	#:echo-stream-input-stream
     #:echo-stream-output-stream       	#:ed
     #:eighth                          	#:elt
     #:encode-universal-time           	#:end-of-file
     #:endp                            	#:enough-namestring
     #:ensure-directories-exist        	#:ensure-generic-function
     #:eq                              	#:eql
     #:equal                           	#:equalp
     #:error                           	#:etypecase
     #:eval                            	#:eval-when
     #:evenp                           	#:every
     #:exp                             	#:export
     #:expt                            	#:extended-char
     #:fboundp                         	#:fceiling
     #:fdefinition                     	#:ffloor
     #:fifth                           	#:file-author
     #:file-error                      	#:file-error-pathname
     #:file-length                     	#:file-namestring
     #:file-position                   	#:file-stream
     #:file-string-length              	#:file-write-date
     #:fill                            	#:fill-pointer
     #:find                            	#:find-all-symbols
     #:find-class                      	#:find-if
     #:find-if-not                     	#:find-method
     #:find-package                    	#:find-restart
     #:find-symbol                     	#:finish-output
     #:first                           	#:fixnum
     #:flet                            	#:float
     #:float-digits                    	#:float-precision
     #:float-radix                     	#:float-sign
     #:floating-point-inexact          	#:floating-point-invalid-operation
     #:floating-point-overflow         	#:floating-point-underflow
     #:floatp                          	#:floor
     #:fmakunbound                     	#:force-output
     #:format                          	#:formatter
     #:fourth                          	#:fresh-line
     #:fround                          	#:ftruncate
     #:ftype                           	#:funcall
     #:function                        	#:function-keywords
     #:function-lambda-expression      	#:functionp
     #:gcd                             	#:generic-function
     #:gensym                          	#:gentemp
     #:get                             	#:get-decoded-time
     #:get-dispatch-macro-character    	#:get-internal-real-time
     #:get-internal-run-time           	#:get-macro-character
     #:get-output-stream-string        	#:get-properties
     #:get-setf-expansion              	#:get-universal-time
     #:getf                            	#:gethash
     #:go                              	#:graphic-char-p
     #:handler-bind                    	#:handler-case
     #:hash-table                      	#:hash-table-count
     #:hash-table-p                    	#:hash-table-rehash-size
     #:hash-table-rehash-threshold     	#:hash-table-size
     #:hash-table-test                 	#:host-namestring
     #:identity                        	#:if
     #:ignorable                       	#:ignore
     #:ignore-errors                   	#:imagpart
     #:import                          	#:in-package
     #:incf                            	#:initialize-instance
     #:inline                          	#:input-stream-p
     #:inspect                         	#:integer
     #:integer-decode-float            	#:integer-length
     #:integerp                        	#:interactive-stream-p
     #:intern                          	#:internal-time-units-per-second
     #:intersection                    	#:invalid-method-error
     #:invoke-debugger                 	#:invoke-restart
     #:invoke-restart-interactively    	#:isqrt
     #:keyword                         	#:keywordp
     #:labels                          	#:lambda
     #:lambda-list-keywords            	#:lambda-parameters-limit
     #:last                            	#:lcm
     #:ldb                             	#:ldb-test
     #:ldiff                           	#:least-negative-double-float
     #:least-negative-long-float       	#:least-negative-normalized-double-float
     #:least-negative-normalized-long-float 	#:least-negative-normalized-short-float
     #:least-negative-normalized-single-float 	#:least-negative-short-float
     #:least-negative-single-float     	#:least-positive-double-float
     #:least-positive-long-float       	#:least-positive-normalized-double-float
     #:least-positive-normalized-long-float 	#:least-positive-normalized-short-float
     #:least-positive-normalized-single-float 	#:least-positive-short-float
     #:least-positive-single-float     	#:length
     #:let                             	#:let*
     #:lisp-implementation-type        	#:lisp-implementation-version
     #:list                            	#:list*
     #:list-all-packages               	#:list-length
     #:listen                          	#:listp
     #:load                            	#:load-logical-pathname-translations
     #:load-time-value                 	#:locally
     #:log                             	#:logand
     #:logandc1                        	#:logandc2
     #:logbitp                         	#:logcount
     #:logeqv                          	#:logical-pathname
     #:logical-pathname-translations   	#:logior
     #:lognand                         	#:lognor
     #:lognot                          	#:logorc1
     #:logorc2                         	#:logtest
     #:logxor                          	#:long-float
     #:long-float-epsilon              	#:long-float-negative-epsilon
     #:long-site-name                  	#:loop
     #:loop-finish                     	#:lower-case-p
     #:machine-instance                	#:machine-type
     #:machine-version                 	#:macro-function
     #:macroexpand                     	#:macroexpand-1
     #:macrolet                        	#:make-array
     #:make-broadcast-stream           	#:make-concatenated-stream
     #:make-condition                  	#:make-dispatch-macro-character
     #:make-echo-stream                	#:make-hash-table
     #:make-instance                   	#:make-instances-obsolete
     #:make-list                       	#:make-load-form
     #:make-load-form-saving-slots     	#:make-method
     #:make-package                    	#:make-pathname
     #:make-random-state               	#:make-sequence
     #:make-string                     	#:make-string-input-stream
     #:make-string-output-stream       	#:make-symbol
     #:make-synonym-stream             	#:make-two-way-stream
     #:makunbound                      	#:map
     #:map-into                        	#:mapc
     #:mapcan                          	#:mapcar
     #:mapcon                          	#:maphash
     #:mapl                            	#:maplist
     #:mask-field                      	#:max
     #:member                          	#:member-if
     #:member-if-not                   	#:merge
     #:merge-pathnames                 	#:method
     #:method-combination              	#:method-combination-error
     #:method-qualifiers               	#:min
     #:minusp                          	#:mismatch
     #:mod                             	#:most-negative-double-float
     #:most-negative-fixnum            	#:most-negative-long-float
     #:most-negative-short-float       	#:most-negative-single-float
     #:most-positive-double-float      	#:most-positive-fixnum
     #:most-positive-long-float        	#:most-positive-short-float
     #:most-positive-single-float      	#:muffle-warning
     #:multiple-value-bind             	#:multiple-value-call
     #:multiple-value-list             	#:multiple-value-prog1
     #:multiple-value-setq             	#:multiple-values-limit
     #:name-char                       	#:namestring
     #:nbutlast                        	#:nconc
     #:next-method-p                   	#:nil
     #:nintersection                   	#:ninth
     #:no-applicable-method            	#:no-next-method
     #:not                             	#:notany
     #:notevery                        	#:notinline
     #:nreconc                         	#:nreverse
     #:nset-difference                 	#:nset-exclusive-or
     #:nstring-capitalize              	#:nstring-downcase
     #:nstring-upcase                  	#:nsublis
     #:nsubst                          	#:nsubst-if
     #:nsubst-if-not                   	#:nsubstitute
     #:nsubstitute-if                  	#:nsubstitute-if-not
     #:nth                             	#:nth-value
     #:nthcdr                          	#:null
     #:number                          	#:numberp
     #:numerator                       	#:nunion
     #:oddp                            	#:open
     #:open-stream-p                   	#:optimize
     #:or                              	#:otherwise
     #:output-stream-p                 	#:package
     #:package-error                   	#:package-error-package
     #:package-name                    	#:package-nicknames
     #:package-shadowing-symbols       	#:package-use-list
     #:package-used-by-list            	#:packagep
     #:pairlis                         	#:parse-error
     #:parse-integer                   	#:parse-namestring
     #:pathname                        	#:pathname-device
     #:pathname-directory              	#:pathname-host
     #:pathname-match-p                	#:pathname-name
     #:pathname-type                   	#:pathname-version
     #:pathnamep                       	#:peek-char
     #:phase                           	#:pi
     #:plusp                           	#:pop
     #:position                        	#:position-if
     #:position-if-not                 	#:pprint
     #:pprint-dispatch                 	#:pprint-exit-if-list-exhausted
     #:pprint-fill                     	#:pprint-indent
     #:pprint-linear                   	#:pprint-logical-block
     #:pprint-newline                  	#:pprint-pop
     #:pprint-tab                      	#:pprint-tabular
     #:prin1                           	#:prin1-to-string
     #:princ                           	#:princ-to-string
     #:print                           	#:print-not-readable
     #:print-not-readable-object       	#:print-object
     #:print-unreadable-object         	#:probe-file
     #:proclaim                        	#:prog
     #:prog*                           	#:prog1
     #:prog2                           	#:progn
     #:program-error                   	#:progv
     #:provide                         	#:psetf
     #:psetq                           	#:push
     #:pushnew                         	#:quote
     #:random                          	#:random-state
     #:random-state-p                  	#:rassoc
     #:rassoc-if                       	#:rassoc-if-not
     #:ratio                           	#:rational
     #:rationalize                     	#:rationalp
     #:read                            	#:read-byte
     #:read-char                       	#:read-char-no-hang
     #:read-delimited-list             	#:read-from-string
     #:read-line                       	#:read-preserving-whitespace
     #:read-sequence                   	#:reader-error
     #:readtable                       	#:readtable-case
     #:readtablep                      	#:real
     #:realp                           	#:realpart
     #:reduce                          	#:reinitialize-instance
     #:rem                             	#:remf
     #:remhash                         	#:remove
     #:remove-duplicates               	#:remove-if
     #:remove-if-not                   	#:remove-method
     #:remprop                         	#:rename-file
     #:rename-package                  	#:replace
     #:require                         	#:rest
     #:restart                         	#:restart-bind
     #:restart-case                    	#:restart-name
     #:return                          	#:return-from
     #:revappend                       	#:reverse
     #:room                            	#:rotatef
     #:round                           	#:row-major-aref
     #:rplaca                          	#:rplacd
     #:safety                          	#:satisfies
     #:sbit                            	#:scale-float
     #:schar                           	#:search
     #:second                          	#:sequence
     #:serious-condition               	#:set
     #:set-difference                  	#:set-dispatch-macro-character
     #:set-exclusive-or                	#:set-macro-character
     #:set-pprint-dispatch             	#:set-syntax-from-char
     #:setf                            	#:setq
     #:seventh                         	#:shadow
     #:shadowing-import                	#:shared-initialize
     #:shiftf                          	#:short-float
     #:short-float-epsilon             	#:short-float-negative-epsilon
     #:short-site-name                 	#:signal
     #:signed-byte                     	#:signum
     #:simple-array                    	#:simple-base-string
     #:simple-bit-vector               	#:simple-bit-vector-p
     #:simple-condition                	#:simple-condition-format-arguments
     #:simple-condition-format-control 	#:simple-error
     #:simple-string                   	#:simple-string-p
     #:simple-type-error               	#:simple-vector
     #:simple-vector-p                 	#:simple-warning
     #:sin                             	#:single-float
     #:single-float-epsilon            	#:single-float-negative-epsilon
     #:sinh                            	#:sixth
     #:sleep                           	#:slot-boundp
     #:slot-exists-p                   	#:slot-makunbound
     #:slot-missing                    	#:slot-unbound
     #:slot-value                      	#:software-type
     #:software-version                	#:some
     #:sort                            	#:space
     #:special                         	#:special-operator-p
     #:speed                           	#:sqrt
     #:stable-sort                     	#:standard
     #:standard-char                   	#:standard-char-p
     #:standard-class                  	#:standard-generic-function
     #:standard-method                 	#:standard-object
     #:step                            	#:storage-condition
     #:store-value                     	#:stream
     #:stream-element-type             	#:stream-error
     #:stream-error-stream             	#:stream-external-format
     #:streamp                         	#:string
     #:string-capitalize               	#:string-downcase
     #:string-equal                    	#:string-greaterp
     #:string-left-trim                	#:string-lessp
     #:string-not-equal                	#:string-not-greaterp
     #:string-not-lessp                	#:string-right-trim
     #:string-stream                   	#:string-trim
     #:string-upcase                   	#:string/=
     #:string<                         	#:string<=
     #:string=                         	#:string>
     #:string>=                        	#:stringp
     #:structure                       	#:structure-class
     #:structure-object                	#:style-warning
     #:sublis                          	#:subseq
     #:subsetp                         	#:subst
     #:subst-if                        	#:subst-if-not
     #:substitute                      	#:substitute-if
     #:substitute-if-not               	#:subtypep
     #:svref                           	#:sxhash
     #:symbol                          	#:symbol-function
     #:symbol-macrolet                 	#:symbol-name
     #:symbol-package                  	#:symbol-plist
     #:symbol-value                    	#:symbolp
     #:synonym-stream                  	#:synonym-stream-symbol
     #:t                               	#:tagbody
     #:tailp                           	#:tan
     #:tanh                            	#:tenth
     #:terpri                          	#:the
     #:third                           	#:throw
     #:time                            	#:trace
     #:translate-logical-pathname      	#:translate-pathname
     #:tree-equal                      	#:truename
     #:truncate                        	#:two-way-stream
     #:two-way-stream-input-stream     	#:two-way-stream-output-stream
     #:type                            	#:type-error
     #:type-error-datum                	#:type-error-expected-type
     #:type-of                         	#:typecase
     #:typep                           	#:unbound-slot
     #:unbound-slot-instance           	#:unbound-variable
     #:undefined-function              	#:unexport
     #:unintern                        	#:union
     #:unless                          	#:unread-char
     #:unsigned-byte                   	#:untrace
     #:unuse-package                   	#:unwind-protect
     #:update-instance-for-different-class 	#:update-instance-for-redefined-class
     #:upgraded-array-element-type     	#:upgraded-complex-part-type
     #:upper-case-p                    	#:use-package
     #:use-value                       	#:user-homedir-pathname
     #:values                          	#:values-list
     #:variable                        	#:vector
     #:vector-pop                      	#:vector-push
     #:vector-push-extend              	#:vectorp
     #:warn                            	#:warning
     #:when                            	#:wild-pathname-p
     #:with-accessors                  	#:with-compilation-unit
     #:with-condition-restarts         	#:with-hash-table-iterator
     #:with-input-from-string          	#:with-open-file
     #:with-open-stream                	#:with-output-to-string
     #:with-package-iterator           	#:with-simple-restart
     #:with-slots                      	#:with-standard-io-syntax
     #:write                           	#:write-byte
     #:write-char                      	#:write-line
     #:write-sequence                  	#:write-string
     #:write-to-string                 	#:y-or-n-p
     #:yes-or-no-p                     	#:zerop)
   (find-package "COMMON-LISP")))

(if (not (find-package :common-lisp-user))
    (make-package "COMMON-LISP-USER"
                  :use :common-lisp
                  :nicknames (list "CL-USER")))

(in-package :jscl)

(/debug "loading boot.lisp!")


;;; DEFMACRO
(eval-when (:compile-toplevel)
  (unless (macro-function 'defmacro)
    (let ((defmacro-macroexpander
           '#'(lambda (form environment)
                (destructuring-bind (name args &body body)
                    form
                  (warn "Compiling a macro-expander for ~s" name)
                  (let* ((body (parse-body body :declarations t :docstring t))
                         (ll (parse-destructuring-lambda-list args))
                         (whole (or (lambda-list-wholevar ll)
                                    (gensym "WHOLE-")))
                         (environment (or (lambda-list-environment ll)
                                          (gensym "ENVIRONMENT-")))
                         (expander `(function
                                     (lambda (,whole ,environment)
                                      (let ((*environment* ,environment))
                                        (block ,name
                                          (destructuring-bind ,args ,whole
                                            ,@body)))))))

                    ;; If we are boostrapping JSCL, we need to quote the
                    ;; macroexpander,  because  the  macroexpander  will
                    ;; need    to    be     dumped    in    the    final
                    ;; environment somehow.
                    (when (find :jscl-xc *features*)
                      (setq expander `(quote ,expander)))

                    `(eval-when (:compile-toplevel :execute)
                       (%compile-defmacro ',name ,expander)))))))

      (%compile-defmacro 'defmacro defmacro-macroexpander))))


;;; DECLAIM

(defmacro jscl/cl::declaim (&rest decls)
  `(eval-when (:compile-toplevel :execute)
     ,@(mapcar (lambda (decl) `(!proclaim ',decl)) decls)))


;;; DEFCONSTANT, T, NIL, LAMBDA

(defmacro jscl/cl::defconstant (name value &optional docstring)
  `(progn
     (declaim (special ,name))
     (declaim (constant ,name))
     (setq ,name ,value)
     ,@(when (stringp docstring) `((oset ,docstring ',name "vardoc")))
     ',name))

(defconstant jscl/cl::t t)
(defconstant jscl/cl::nil nil)
#+jscl (jscl/js::%js-vset "t" t)
#+jscl (jscl/js::%js-vset "nil" nil)

(defmacro jscl/cl::lambda (args &body body)
  `(function (lambda ,args ,@body)))


;;; AND, OR

(defmacro jscl/cl::and (&rest forms)
  (cond
    ((null forms)
     t)
    ((null (cdr forms))
     (car forms))
    (t
     `(if ,(car forms)
          (and ,@(cdr forms))
          nil))))

(defmacro jscl/cl::or (&rest forms)
  (cond
    ((null forms)
     nil)
    ((null (cdr forms))
     (car forms))
    (t
     (let ((g (gensym "OR-")))
       `(let ((,g ,(car forms)))
          (if ,g
              ,g
              (or ,@(cdr forms))))))))


;;; COND, WHEN, UNLESS
(defmacro jscl/cl::cond (&rest clausules)
  (unless (null clausules)
    (let ((clause (first clausules))
          (more (rest clausules)))
      (when (atom clause)
        (error "COND clause ~s is not a list" clause))
      (destructuring-bind (condition &body body) clause
        (cond
          ((or (eq condition t)
               (and (constantp condition)
                    condition))
           (when more
             (if (find :jscl-xc *features*)
                 (cerror "Continue" "Unreachable in COND: ~s" more)
                 (warn "Unreachable in COND: ~s" more)))
           `(progn ,@body))
          ((endp body)
           (let ((test-symbol (gensym "COND-TEST-")))
             `(let ((,test-symbol ,condition))
                (if ,test-symbol
                    ,test-symbol
                    ,(when more `(cond ,@more))))))
          (t
           `(if ,condition
                (progn ,@body)
                ,(when more `(cond ,@more)))))))))

(defmacro jscl/cl::when (condition &body body)
  `(cond (,condition ,@body)))

(defmacro jscl/cl::unless (condition &body body)
  `(cond ((not ,condition) ,@body)))


;;; DEFVAR, DEFPARAMETER, DEFUN

(defmacro jscl/cl::defvar (name &optional (value nil value-p) docstring)
  `(progn
     (declaim (special ,name))
     ,@(when value-p
         `((unless (boundp ',name) (setq ,name ,value))))
     ,@(when (stringp docstring)
         `(setf (oget ',name "vardoc") ,docstring))
     ',name))

(defmacro jscl/cl::defparameter (name value &optional docstring)
  `(progn
     (setq ,name ,value)
     ,@(when (stringp docstring)
         `(setf (oget ',name "vardoc") ,docstring))
     ',name))

(defmacro jscl/cl::defun (name args &rest body)
  ;; Can't  use FUNCTION-NAME-P  here because  we can't  DEFUN it  until
  ;; after DEFUN is defined.
  (cond ((symbolp name)
         `(progn
            (eval-when (:compile-toplevel :load-toplevel)
              (fn-info ',name :defined t))
            (jscl/js::fset ',name #'(named-lambda ,name ,args ,@body))
            ',name))
        ((not (listp name))
         (error "~s is not a valid name for a function" name))
        ((eql (car name) 'jscl/ffi:oget)
         (error "Can't bind to JS function yet, TODO"))
        ((eql (car name) 'setf)
         `(progn
            (eval-when (:compile-toplevel)
              (fn-info ',name :defined t))
            (fset-setf ',(second name) #'(named-lambda ,name ,args ,@body))
            ',name))
        (t (error "~s cannot be a function name" name))))

(defmacro jscl/cl::return (&optional value)
  `(return-from nil ,value))

(defmacro jscl/cl::while (condition &body body)
  `(block nil (jscl/js::%while ,condition ,@body)))

(defvar jscl/cl::*gensym-counter* 0)
(defun jscl/cl::gensym (&optional (prefix "G"))
  ;; INCF not available in bootstrap, so …
  (setq *gensym-counter* (1+ *gensym-counter*))
  (make-symbol (concatenate
                'string prefix
                (integer-to-string *gensym-counter*))))

(defun jscl/cl::boundp (x)
  (jscl/js::boundp x))

(defun jscl/cl::eq (x y) (eq x y))
(defun jscl/cl::eql (x y) (eq x y))

(defun jscl/cl::not (x) (if x nil t))

(defun jscl/cl::funcall (function &rest args)
  (apply function args))

(defun jscl/cl::apply (function arg &rest args)
  (apply function (apply #'list* arg args)))

(defun jscl/cl::symbol-name (x)
  (symbol-name x))

;; Basic macros

(defmacro jscl/cl::dolist ((var list &optional result) &body body)
  (let ((g!list (gensym "DOLIST-LIST-")))
    (unless (symbolp var) (error "`~S' is not a symbol." var))
    `(block nil
       (let ((,g!list ,list)
             (,var nil))
         (jscl/js::%while ,g!list
                          (setq ,var (car ,g!list))
                          (tagbody ,@body)
                          (setq ,g!list (cdr ,g!list)))
         ,result))))

(defmacro jscl/cl::dotimes ((var count &optional result) &body body)
  (let ((g!count (gensym "DOTIMES-COUNTER-")))
    (unless (symbolp var) (error "`~S' is not a symbol." var))
    `(block nil
       (let ((,var 0)
             (,g!count ,count))
         (jscl/js::%while (< ,var ,g!count)
                          (tagbody ,@body)
                          (incf ,var))
         ,result))))


;;; CASE, ECASE

(defmacro jscl/cl::case (form &rest clausules)
  (let ((!form (gensym "CASE-FORM-")))
    `(let ((,!form ,form))
       (cond
         ,@(mapcar (lambda (clausule)
                     (destructuring-bind (keys &body body) clausule
                       (cond ((member keys '(t otherwise))
                              `(t nil ,@body))
                             ((listp keys)
                              `((or ,@(mapcar (lambda (key)
                                                `(eql ,!form ',key))
                                              keys))
                                nil ,@body))
                             (t `((eql ,!form ,keys) nil ,@body)))))
                   clausules)))))

(defmacro jscl/cl::ecase (form &rest clausules)
  (let ((g!form (gensym "ECASE-FORM-")))
    `(let ((,g!form ,form))
       (case ,g!form
         ,@(append
            clausules
            `((t
               (error "ECASE expression failed for the object `~S'." ,g!form))))))))


;;; PROG1, PROG2, PROG, PSETQ

(defmacro jscl/cl::prog1 (form &body body)
  (let ((value (gensym "PROG1-")))
    `(let ((,value ,form))
       ,@body
       ,value)))

(defmacro jscl/cl::prog2 (form1 result &body body)
  `(prog1 (progn ,form1 ,result) ,@body))

(defmacro jscl/cl::prog (inits &rest body )
  (multiple-value-bind (forms decls docstring) (parse-body body)
    (declare (ignore docstring))  ; TODO
    `(block nil
       (let ,inits
         ,@decls
         (tagbody ,@forms)))))

(defmacro jscl/cl::psetq (&rest pairs)
  (let (;;  For  each pair, we store  here a list of  the form (VARIABLE
        ;;  GENSYM VALUE).
        (assignments '()))
    (while t
      (cond
        ((null pairs) (return))
        ((null (cdr pairs))
         (error "Odd pairs in PSETQ; dangling ~s" pairs))
        (t
         (let ((variable (car pairs))
               (value (cadr pairs)))
           (push (list variable (gensym (string variable)) value)
                 assignments)
           (setq pairs (cddr pairs))))))
    (setq assignments (reverse assignments))
    ;;
    `(let ,(mapcar #'cdr assignments)
       (setq ,@(mapcan #'butlast assignments)))))


;;; DO, DO*

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun do/do* (do/do* varlist endlist body)
    `(block nil
       (,(ecase do/do* (do 'let) (do* 'let*))
         ,(mapcar (lambda (x)
                    (if (symbolp x)
                        (list x nil)
                        (list (first x) (second x))))
                  varlist)
         (while t
           (when ,(car endlist)
             (return (progn ,@(cdr endlist))))
           (tagbody ,@body)
           (,(ecase do/do* (do 'psetq) (do* 'setq))
             ,@(mapcan (lambda (v)
                         (and (listp v)
                              (consp (cddr v))
                              (list (first v) (third v))))
                       varlist)))))))

(defmacro jscl/cl::do (varlist endlist &body body)
  (do/do* 'do varlist endlist body))

(defmacro jscl/cl::do* (varlist endlist &body body)
  (do/do* 'do* varlist endlist body))



(defmacro jscl/cl::declare (&rest declarations)
  "Early DECLARE ignores everything. This only exists so that during the
 bootstrapping process,  we can have  declarations that SBCL  will read
 and  they won't  make JSCL  choke. Once  the various  places in  which
 DECLARE forms  are valid have  appropriate support to at  least ignore
 them, this can be removed."
  (warn "Tried to compile a DECLARE form: ~s" declarations))

(defmacro jscl/cl::assert (test &rest _)
  "An  early ASSERT  that does  not trigger  bugs in  the macroexpander.
Note, this will  still signal errors itself if it  actually is triggered
before  princ-to-string is  available, but  it needs  to be  declared as
a macro before  anything else gets loaded, and  currently the compiler's
macro cache is so aggressive that it cannot be redefined."
  #-jscl (declare (ignore _))
  `(unless ,test
     (error "Assertion failed: NOT ~s" ',test)))

(defun jscl/cl::identity (x) x)

(defun jscl/cl::complement (x)
  (lambda (&rest args)
    (not (apply x args))))

(defun jscl/cl::constantly (x)
  (lambda (&rest args)
    (declare (ignore args))
    x))

;;; Atoms. CONSP is defined in list.lisp

(defun jscl/cl::atom (x)
  (not (consp x)))

;;; Character codes
(defun jscl/cl::code-char (x)
  (code-char x))

(defun jscl/cl::char-code (x)
  (char-code x))

(defun jscl/cl::char= (x y)
  (eql x y))

(defun jscl/cl::char< (x y)
  (< (char-code x) (char-code y)))



;;; General equality

(defun jscl/cl::equal (x y)
  (cond
    ((eql x y) t)
    ((numberp x) (and (numberp y) (= x y)))
    ((consp x)
     (and (consp y)
          (equal (car x) (car y))
          (equal (cdr x) (cdr y))))
    ((stringp x)
     (and (stringp y) (string= x y)))
    (t nil)))

(defun jscl/cl::equalp (x y)
  "This is a marginally correct implementation of EQUALP"
  (cond
    ((eql x y) t)
    ((numberp x)
     (and (numberp y) (= x y)))
    ((consp x)
     (and (consp y)
          (equalp (car x) (car y))
          (equalp (cdr x) (cdr y))))
    ((characterp x)
     (and (characterp y)
          (char-equal x y)))
    ((stringp x)
     (and (stringp y)
          (string-equal x y)))
    ((vectorp x)
     (and (vectorp y)
          (= (length x) (length y))
          (every #'equalp x y)))
    (t nil)))

(defun jscl/cl::disassemble (function)
  (write-line (jscl/js::lambda-code (fdefinition function)))
  nil)


;;; Multiple Values

(defmacro jscl/cl::multiple-value-bind (variables value-from &body body)
  `(multiple-value-call (lambda (&optional ,@variables &rest ,(gensym "_"))
                          ,@body)
     ,value-from))

(defmacro jscl/cl::multiple-value-list (value-from)
  `(multiple-value-call #'list ,value-from))

(defmacro jscl/cl::multiple-value-setq ((&rest vars) &rest form)
  (let ((gvars (mapcar (lambda (x) (gensym (limit-string-length x 40))) vars))
        (setqs '()))

    (do ((vars vars (cdr vars))
         (gvars gvars (cdr gvars)))
        ((or (null vars) (null gvars)))
      (push `(setq ,(car vars) ,(car gvars))
            setqs))
    (setq setqs (reverse setqs))

    `(multiple-value-call (lambda ,gvars ,@setqs)
       ,@form)))


;;; Function names/values

(defun fdefinition-soft (name)
  "Like `FDEFINITION' but returns NULL rather than signaling an error."
  (cond
    ((symbolp name)
     (symbol-function name))
    ((consp name)
     (ecase (first name)
       (setf (jscl/js::%fdefinition-setf (second name)))
       (jscl/ffi:oget (error "FIXME: FDefinition FFI bridge for ~s" name))
       ;; Should be something  like if ( x && typeof  x === 'function' )
       ;; {  return x;  } else  { throw  new Error  "" +  x +  " is  not
       ;; a function" }
       ))
    (t (error "Not a function name: ~s" name))))

(defun jscl/cl::fdefinition (name)
  "Return NAME's global function definition,  taking care to respect any
encapsulations  and to  return  the  innermost encapsulated  definition.
This is SETF'able."
  (or (fdefinition-soft name)
      (error "No function is named `~S'." name)))

(defun (setf jscl/cl::fdefinition) (fn name)
  ;; Cannot use ETypeCase yet
  (cond ((symbolp name)
         (jscl/js::%setf-symbol-function name fn))
        ((and (listp name)
              (= 2 (length name))
              (eql 'setf (first name)))
         (jscl/js::%setf-fdefinition-setf (second name) fn))
        ((and (listp name)
              (eql 'jscl/ffi:oget (first name)))
         (error "FIXME: FDefinition FFI bridge"))
        (t (error "Cannot SETF FDEFINITION of ~s" name))))

(defun (setf jscl/cl::symbol-function) (function name)
  (if (symbolp name)
      (jscl/js::%setf-symbol-function name function)
      (error "Cannot SETF SYMBOL-FUNCTION of ~s" name)))


(defun jscl/cl::fboundp (x)
  (cond ((symbolp x) (jscl/js::fboundp x))
        ((and (listp x)
              (= 2 (length x))
              (eql 'setf (first x)))
         (jscl/js::%fboundp-setf (second x)))))

(defun jscl/cl::fmakunbound (name)
  (cond ((symbolp name)
         (jscl/js::%fmakunbound name))
        ((and (listp name)
              (= 2 (length name))
              (eql 'setf (first name)))
         (jscl/js::%fmakunbound-setf (second name)))))

(defun jscl/cl::notany (fn seq)
  (not (some fn seq)))

(defconstant jscl/cl::internal-time-units-per-second 1000)

(defun jscl/cl::values-list (list)
  (jscl/js::values-array (list-to-vector list)))

(defun jscl/cl::values (&rest args)
  (values-list args))

;;; Early error definition.
(eval-when (:compile-toplevel :load-toplevel :execute)
  (unless (fboundp 'jscl/cl::error)
    ;; Don't redefine this, we may  have loaded the “real” definition in
    ;; conditions.lisp and don't want to revert to the less-correct one
    (defun jscl/cl::error (fmt &rest args)
      #+jscl
      (jscl/js::%throw
       (jscl/ffi:make-new '|Error|
                          (apply #'format nil fmt args)))
      #-jscl
      (apply #'cl:error fmt args))))

(defmacro jscl/cl::nth-value (n form)
  `(multiple-value-call (lambda (&rest values)
                          (nth ,n values))
     ,form))

(defun jscl/cl::constantp (x)
  ;; TODO: Consider quoted forms,  &environment and many other semantics
  ;; of this function.
  (cond
    ((symbolp x)
     (cond
       ((eq x t) t)
       ((setq x nil) t))) ;; BRFP ☠ I do not understand this
    ((atom x)
     t)
    (t
     nil)))


;;; “environment” variables around READ/PRINT

(defvar jscl/cl::*print-escape* t
  "Should  we  print in  a  reasonably  machine-readable way?  (possibly
overridden by *PRINT-READABLY*)")
(defvar jscl/cl::*print-readably* t
  "If true, all  objects will be printed readably.  If readable printing
is impossible, an  error will be signalled. This overrides  the value of
*PRINT-ESCAPE*.")
(defvar jscl/cl::*print-circle* nil
  "Should  we  use  #n=  and  #n# notation  to  preserve  uniqueness  in
general (and circularity in particular) when printing?")
(defvar jscl/cl::*print-radix* nil
  "Should base be verified when printing RATIONALs?")
(defvar jscl/cl::*print-base* 10
  "The output base for RATIONALs (including integers).")
(defvar jscl/cl::*read-base* 10
  "the radix that Lisp reads numbers in")
(defvar jscl/cl::*read-eval* t
  "If false, then the #. read macro is disabled.")


;;; Forward-declared macro  funkiness DEF!STRUCT isn't yet  defined, but
;;; this makes it work once it is.
(defmacro jscl/cl::defstruct (name+options &rest slots)
  `(eval-when (:compile-toplevel :load-toplevel :execute)
     (def!struct ,name+options ,@slots)))
