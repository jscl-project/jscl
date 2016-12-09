;;; read.lisp —

;; Copyright © 2012, 2013 David Vazquez Copyright © 2012 Raimon Grau

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

(in-package :jscl)

(/debug "loading read.lisp!")

;;;; Reader

;;; If it  is not NIL, we  do not want  to read the expression  but just
;;; ignore it. For example, it is used in conditional reads #+.
(defvar *read-skip-p* nil)

;;; The Lisp  reader, parse  strings and return  Lisp objects.  The main
;;; entry points are `ls-read' and `ls-read-from-string'.

;;; #= / ## implementation

;; For now  associations label->object  are kept  in a  plist May  be it
;; makes sense to use a vector  instead if speed is considered a problem
;; with many labelled objects
(defvar *labelled-objects* nil)

(defun new-labelled-objects-table ()
  (setf *labelled-objects* nil))

(defun find-labelled-object (id)
  (assoc id *labelled-objects*))

(defun add-labelled-object (id value)
  (push (cons id value) *labelled-objects*))

;; A unique value  used to mark in the labelled  objects table an object
;; that  is  being  constructed  (e.g. #1#  while  reading  elements  of
;; "#1=(#1# #1# #1#)")
(defvar *future-value* (make-symbol "future"))

;; A unique  value used to mark  temporary values that will  be replaced
;; when fixups are run.
(defvar *fixup-value* (make-symbol "fixup"))

;; Fixup locations keeps a list of conses where the CAR is a callable to
;; be called with the value of  the object associated to label stored in
;; CDR once reading is completed
(defvar *fixup-locations* nil)

(defun fixup-backrefs ()
  (while *fixup-locations*
    (let* ((fixup (pop *fixup-locations*))
           (callable (car fixup))
           (cell (find-labelled-object (cdr fixup))))
      (if cell
          (funcall callable (cdr cell))
          (error "Internal error in fixup-backrefs: object #~S# not found"
                 (cdr fixup))))))

;; A function that  will need to return a fixup  callback for the object
;; that is  being read. The  returned callback  will be called  with the
;; result of reading.
(defvar *make-fixup-function*
  (lambda ()
    (error "Internal error in fixup creation during read")))

(defun jscl/cl::make-string-input-stream (string)
 ;;; FIXME. Use the new stream fake-generics stuff.
  (cons string 0))

(defun jscl/cl::peek-char (&optional (peek-type nil) (stream *standard-input*)
                                     (eof-error-p t) (eof-value nil))
  (assert (null peek-type))
  (cond ((< (cdr stream) (length (car stream)))
         (char (car stream) (cdr stream)))
        (eof-error-p
         (error "End of file in PEEK-CHAR"))
        (t eof-value)))
(defun jscl/cl::read-char (stream &optional (eof-error-p t)
                                            (eof-value nil))
  (cond ((< (cdr stream) (length (car stream)))
         (prog1 (char (car stream) (cdr stream))
           (rplacd stream (1+ (cdr stream)))))
        (eof-error-p
         (error "End of file in READ-CHAR"))
        (t eof-value)))

(defun whitespacep (ch)
  (find ch #(#\Space #\Tab #\Newline
             #\Return #\Page
             #+ecl #\VT
             #-ecl #\LINE_TABULATION)))

(defun skip-whitespaces (stream)
  (let (ch)
    (setq ch (peek-char nil stream nil nil))
    (while (and ch (whitespacep ch))
      (read-char stream nil nil)
      (setq ch (peek-char nil stream nil nil)))))

(defun terminalp (ch)
  (or (null ch) (whitespacep ch)
      (find ch "(\")")))

(defun read-until (stream func)
  "Read from STREAM into a string, until the predicate FUNC returns true
when passed  the value of  the next  character. The character  passed to
FUNC will NOT be returnings."
  (let ((string (make-array 80 :element-type 'character
                            :adjustable t :fill-pointer 0))
        (ch (peek-char nil stream nil nil)))
    (while (and ch (not (funcall func ch)))
      (vector-push-extend ch string 80)
      (read-char stream nil nil)
      (setq ch (peek-char nil stream nil nil)))
    string))

(defun read-escaped-until (stream func)
  (let ((string "")
        (ch (peek-char nil stream nil nil))
        (multi-escape nil))
    (while (and ch (or multi-escape (not (funcall func ch))))
      (cond
        ((char= ch #\|)
         (if multi-escape
             (setf multi-escape nil)
             (setf multi-escape t)))
        ((char= ch #\\)
         (read-char stream nil nil)
         (setf ch (peek-char nil stream nil nil))
         (setf string (concatenate 'string string "\\" (string ch))))
        (t
         (if multi-escape
             (setf string (concatenate 'string string "\\" (string ch)))
             (setf string (concatenate 'string string (string ch))))))
      (read-char stream nil nil)
      (setf ch (peek-char nil stream nil nil)))
    string))

(defun skip-whitespaces-and-comments (stream)
  (let (ch)
    (skip-whitespaces stream)
    (setq ch (peek-char nil stream nil nil))
    (while (and ch (char= ch #\;))
      (read-until stream (lambda (x) (char= x #\newline)))
      (skip-whitespaces stream)
      (setq ch (peek-char nil stream nil nil)))))

(defun discard-char (stream expected)
  (let ((ch (read-char stream nil nil)))
    (when (null ch)
      (error "End of file when character ~S was expected." expected))
    (unless (char= ch expected)
      (error "Character ~S was found but ~S was expected." ch expected))))

(defun %read-list (stream &optional (eof-error-p t) eof-value)
  (skip-whitespaces-and-comments stream)
  (let ((ch (peek-char nil stream nil nil)))
    (cond
      ((null ch)
       (error "Unexpected end of file"))
      ((char= ch #\))
       (discard-char stream #\))
       nil)
      (t
       (let* ((cell (cons nil nil))
              (*make-fixup-function* (lambda ()
                                       (lambda (obj)
                                         (rplaca cell obj))))
              (eof (gensym "EOF-"))
              (next (jscl/cl::read stream nil eof t)))
         (rplaca cell next)
         (skip-whitespaces-and-comments stream)
         (cond
           ((eq next eof)
            (discard-char stream #\))
            nil)
           (t
            (if (char= (peek-char nil stream nil nil) #\.)
                (progn
                  (discard-char stream #\.)
                  (if (terminalp (peek-char nil stream nil nil))
                      (let ((*make-fixup-function* (lambda ()
                                                     (lambda (obj)
                                                       (rplacd cell obj)))))
                        ;; Dotted pair notation
                        (rplacd cell (jscl/cl::read stream eof-error-p eof-value t))
                        (skip-whitespaces-and-comments stream)
                        (let ((ch (peek-char nil stream nil nil)))
                          (if (or (null ch) (char= #\) ch))
                              (discard-char stream #\))
                              (error "Multiple objects following . in a list"))))
                      (let ((token (concatenate 'string "." (read-escaped-until stream #'terminalp))))
                        (rplacd cell (cons (interpret-token token)
                                           (%read-list stream eof-error-p eof-value))))))
                (rplacd cell (%read-list stream eof-error-p eof-value)))
            cell)))))))

(defun read-string (stream)
  (let ((string "")
        (ch nil))
    (setq ch (read-char stream nil nil))
    (while (not (eql ch #\"))
      (when (null ch)
        (error "Unexpected EOF"))
      (when (eql ch #\\)
        (setq ch (read-char stream nil nil)))
      (setq string (concatenate 'string string (string ch)))
      (setq ch (read-char stream nil nil)))
    string))



(defun eval-feature-expression (expression)
  (etypecase expression
    (keyword
     (and (find expression *features*) t))
    (list
     ;; Macrocharacters  for  conditional reading  #+  and  #- bind  the
     ;; current package  to KEYWORD so features  are correctly interned.
     ;; For this reason, AND, OR and NOT symbols will also be keyword in
     ;; feature expressions.
     (ecase (first expression)
       (:and
        (every #'eval-feature-expression (rest expression)))
       (:or
        (some #'eval-feature-expression (rest expression)))
       (:not
        (destructuring-bind (subexpr) (rest expression)
          (not (eval-feature-expression subexpr))))))))


(defun read-integer-from-stream (stream)
  (parse-integer (read-until stream
                             (lambda (ch)
                               (not (digit-char-p ch *read-base*))))
                 :radix *read-base*))

(defun j-reader (stream subchar arg)
  "The   reader  macro   for   the  #J   notation.  See   `WITH-SHARP-J'
for details.'"
  (declare (ignorable subchar arg))
  (let ((first-char (read-char stream nil :eof)))
    (assert (find first-char ":@")
            nil "FFI descriptor must start with a colon or at-sign")
    (let ((descriptor (read-until stream #'terminalp))
          (subdescriptors nil))
      (do* ((start 0 (1+ end))
            (end (position-if #'colon-or-comma-p
                              descriptor :start start)
                 (position-if #'colon-or-comma-p
                              descriptor :start start)))
           ((null end)
            (push (subseq descriptor start) subdescriptors)
            `(lambda (&rest args)
               (apply (jscl/ffi::oget*
                       ,@(when (char= first-char #\:)
                           jscl/ffi::*root*)
                       ,@(reverse subdescriptors))
                      args)))
        (push
         (ecase (char descriptor (1- start))
           ((#\@ #\,)
            (subseq descriptor start end))
           (#\: #'identity))
         subform
         subdescriptors)))))

(defun read-sharp (stream &optional eof-error-p eof-value)
  (read-char stream nil nil)
  (let ((ch (read-char stream nil nil)))
    (case ch
      (#\apostrophe
       (list 'function (jscl/cl::read stream eof-error-p eof-value t)))
      (#\.
       (if *read-eval*
           (eval (jscl/cl::read stream))
           nil))
      (#\(
       (do ((elements nil)
            (result nil)
            (index 0 (1+ index)))
           ((progn (skip-whitespaces-and-comments stream)
                   (or (null (peek-char nil stream nil nil))
                       (char= (peek-char nil stream nil nil) #\))))
            (discard-char stream #\))
            (setf result (make-array index))
            (dotimes (i index)
              (aset result (decf index) (pop elements)))
            result)
         (let* ((ix index)      ; Can't just use index: the same var would be captured in all fixups
                (*make-fixup-function* (lambda ()
                                         (lambda (obj)
                                           (aset result ix obj))))
                (eof (gensym "EOF-"))
                (value (jscl/cl::read stream nil eof t)))
           (push value elements))))
      (#\:
       (make-symbol
        (unescape-token
         (string-upcase-noescaped
          (read-escaped-until stream #'terminalp)))))
      (#\\
       (cond ((char-equal #\U (peek-char nil stream nil nil))
              (read-char stream) ; discard U
              (cond ((char=      #\+ (peek-char nil stream nil nil))
                     (read-char stream nil nil) ; +
                     (let ((*read-base* 16))
                       (code-char (read-integer-from-stream stream))))
                    (t (let ((cname
                              (concatenate 'string "U" (string (read-char stream nil nil))
                                           (read-until stream #'terminalp))))
                         (let ((ch (name-char cname)))
                           (or ch (char cname 0)))))))
             (t (let ((cname
                       (concatenate 'string (string (read-char stream nil nil))
                                    (read-until stream #'terminalp))))
                  (let ((ch (name-char cname)))
                    (or ch (char cname 0)))))))
      ((#\+ #\-)
       (let* ((expression
               (let ((*package* (find-package :keyword)))
                 (jscl/cl::read stream eof-error-p eof-value t))))

         (if (eql (char= ch #\+) (eval-feature-expression expression))
             (jscl/cl::read stream eof-error-p eof-value t)
             (prog2 (let ((*read-skip-p* t))
                      (jscl/cl::read stream))
                 (jscl/cl::read stream eof-error-p eof-value t)))))
      ((#\B #\b)
       (let ((*read-base* 2))
         (read-integer-from-stream stream)))
      ((#\J #\j)
       (j-reader stream ch nil))
      ((#\O #\o)
       (let ((*read-base* 8))
         (read-integer-from-stream stream)))
      ((#\X #\x)
       (let ((*read-base* 16))
         (read-integer-from-stream stream)))
      (#\|
       (labels ((read-til-bar-sharpsign ()
                  (do ((ch (read-char stream nil nil) (read-char stream nil nil)))
                      ((and (char= ch #\|) (char= (peek-char nil stream nil nil) #\#))
                       (read-char stream nil nil))
                    (when (and (char= ch #\#) (char= (peek-char nil stream nil nil) #\|))
                      (read-char stream nil nil)
                      (read-til-bar-sharpsign)))))
         (read-til-bar-sharpsign)
         (jscl/cl::read stream eof-error-p eof-value t)))
      (otherwise
       ;; FIXME:  the  reading of  the  numeric  prefix argument  should
       ;; respect the  reader's current radix, and  the numeric argument
       ;; should be available to any reader macro that wants it.
       (cond
         ((and ch (digit-char-p ch))
          (let ((id (digit-char-p ch)))
            (while (and (peek-char nil stream nil nil)
                        (digit-char-p (peek-char nil stream nil nil)))
              (setf id (+ (* id 10) (digit-char-p (read-char stream nil nil)))))
            (ecase (peek-char nil stream nil nil)
              (#\=
               (read-char stream nil nil)
               (if (find-labelled-object id)
                   (error "Duplicated label #~S=" id)
                   (progn
                     (add-labelled-object id *future-value*)
                     (let ((obj (jscl/cl::read stream eof-error-p eof-value t)))
                       ;; FIXME:  somehow the  more  natural (setf  (cdr
                       ;; (find-labelled-object id)) obj) doesn't work
                       (rplacd (find-labelled-object id) obj)
                       obj))))
              ((#\0 #\1 #\2 #\3 #\4 #\5 #\6 #\7 #\8 #\9)
               (let ((param (read-integer-from-stream stream)))
                 (ecase (peek-char nil stream nil nil)
                   ((#\R #\r)
                    (assert (<= 2 param 36) (param) "#nR radix must be 2-36; got ~d" param)
                    (let ((*read-base* param))
                      (read-integer-from-stream stream)))
                   (#\( (error "READer cannot read multi-dimension arrays yet")))))
              (#\#
               (read-char stream nil nil)
               (let ((cell (find-labelled-object id)))
                 (if cell
                     (if (eq (cdr cell) *future-value*)
                         (progn
                           (push (cons (funcall *make-fixup-function*)
                                       id)
                                 *fixup-locations*)
                           *fixup-value*)
                         (cdr cell))
                     (error "Invalid labelled object #~S#" id)))))))
         (t
          (error "Invalid dispatch character after #")))))))

(defun unescape-token (x)
  (let ((result ""))
    (dotimes (i (length x))
      (unless (char= (char x i) #\\)
        (setq result (concatenate 'string result (string (char x i))))))
    result))

(defun string-upcase-noescaped (s)
  (let ((result "")
        (last-escape nil))
    (dotimes (i (length s))
      (let ((ch (char s i)))
        (cond
          (last-escape
           (setf last-escape nil)
           (setf result (concatenate 'string result (string ch))))
          ((char= ch #\\)
           (setf last-escape t))
          ((char= ch #\:)
           (error "Too many colons in symbol-name `~a'" s))
          (t (setf result (concatenate 'string result
                                       (string-upcase (string ch))))))))
    result))

;;; Parse a string  of the form NAME, PACKAGE:NAME  or PACKAGE::NAME and
;;; return the  name. If the  string is  of the form  1) or 3),  but the
;;; symbol  does  not  exist,  it   will  be  created  and  interned  in
;;; that package.
(defun read-symbol (string)
  (let ((size (length string))
        package name internalp index)
    (setq index 0)
    (while (and (< index size)
                (not (char= (char string index) #\:)))
      (when (char= (char string index) #\\)
        (incf index))
      (incf index))
    (cond
      ;; No package prefix
      ((= index size)
       (setq name string)
       (setq package (package-name *package*))
       (setq internalp t))
      (t
       ;; Package prefix
       (if (zerop index)
           (setq package "KEYWORD")
           (setq package (string-upcase-noescaped (subseq string 0 index))))
       (incf index)
       (when (char= (char string index) #\:)
         (setq internalp t)
         (incf index))
       (setq name (subseq string index))))
    ;; Canonalize symbol name and package
    (setq name (if (string= package "JS")
                   (setq name (unescape-token name))
                   (setq name (string-upcase-noescaped name))))
    (setq package (find-package-or-fail package))
    (if (or internalp
            (eq package (find-package "KEYWORD"))
            (eq package (find-package "JS")))
        (intern name package)
        (multiple-value-bind (symbol external)
            (find-symbol name package)
          (if (eq external :external)
              symbol
              (error "The symbol `~S' is not external in the package ~S."
                     name package))))))

(defun read-integer (string)
  (let ((sign 1)
        (number nil)
        (size (length string)))
    (dotimes (i size)
      (let ((elt (char string i)))
        (cond
          ((digit-char-p elt *read-base*)
           (setq number (+ (* (or number 0) *read-base*) (digit-char-p elt *read-base*))))
          ((zerop i)
           (case elt
             (#\+ nil)
             (#\- (setq sign -1))
             (t (return-from read-integer))))
          ((and (= i (1- size)) (char= elt #\.)) nil)
          (t (return-from read-integer)))))
    (and number (* sign number))))

(defun read-float (string)
  (block nil
    (let ((sign 1)
          (integer-part nil)
          (fractional-part nil)
          (number 0)
          (divisor 1)
          (exponent-sign 1)
          (exponent 0)
          (size (length string))
          (index 0))
      (when (zerop size) (return))
      ;; Optional sign
      (case (char string index)
        (#\+ (incf index))
        (#\- (setq sign -1)
             (incf index)))
      (unless (< index size) (return))
      ;; Optional integer part
      (awhen (digit-char-p (char string index))
        (setq integer-part t)
        (while (and (< index size)
                    (setq it (digit-char-p (char string index))))
          (setq number (+ (* number 10) it))
          (incf index)))
      (unless (< index size) (return))
      ;; Decimal point is mandatory if there's no integer part
      (unless (or integer-part (char= #\. (char string index))) (return))
      ;; Optional fractional part
      (when (char= #\. (char string index))
        (incf index)
        (unless (< index size) (return))
        (awhen (digit-char-p (char string index))
          (setq fractional-part t)
          (while (and (< index size)
                      (setq it (digit-char-p (char string index))))
            (setq number (+ (* number 10) it))
            (setq divisor (* divisor 10))
            (incf index))))
      ;; Either left or right part of the dot must be present
      (unless (or integer-part fractional-part) (return))
      ;; Exponent is mandatory if there is no fractional part
      (when (and (= index size) (not fractional-part)) (return))
      ;; Optional exponent part
      (when (< index size)
        ;; Exponent-marker
        (unless (find (char-upcase (char string index)) "ESFDL")
          (return))
        (incf index)
        (unless (< index size) (return))
        ;; Optional exponent sign
        (case (char string index)
          (#\+ (incf index))
          (#\- (setq exponent-sign -1)
               (incf index)))
        (unless (< index size) (return))
        ;; Exponent digits
        (let ((value (digit-char-p (char string index))))
          (unless value (return))
          (while (and (< index size)
                      (setq value (digit-char-p (char string index))))
            (setq exponent (+ (* exponent 10) value))
            (incf index))))
      (unless (= index size) (return))
      ;; Everything went ok, we have a float
      ;; XXX: Use FLOAT when implemented.
      (/ (* sign (expt 10.0 (* exponent-sign exponent)) number) divisor 1.0))))

(defun !parse-integer (string junk-allow &optional (radix *read-base*))
  (let ((radix (or radix 10)))
    (block nil
      (let ((value 0)
            (index 0)
            (size (length string))
            (sign 1))
        ;; Leading whitespace
        (while (and (< index size)
                    (whitespacep (char string index)))
          (incf index))
        (unless (< index size) (return (values nil 0)))
        ;; Optional sign
        (case (char string 0)
          (#\+ (incf index))
          (#\- (setq sign -1)
               (incf index)))
        ;; First digit
        (unless (and (< index size)
                     (setq value (digit-char-p (char string index) radix)))
          (return (values nil index)))
        (incf index)
        ;; Other digits
        (while (< index size)
          (let ((digit (digit-char-p (char string index) radix)))
            (unless digit (return))
            (setq value (+ (* value radix) digit))
            (incf index)))
        ;; Trailing whitespace
        (do ((i index (1+ i)))
            ((or (= i size) (not (whitespacep (char string i))))
             (and (= i size) (setq index i))))
        (if (or junk-allow
                (= index size))
            (values (* sign value) index)
            (values nil index))))))

#+jscl
(defun parse-integer (string &key (start 0) (end (length string)) junk-allowed radix)
  (multiple-value-bind (num index)
      (!parse-integer (subseq string start end) junk-allowed radix)
    (if num
        (values num (+ start index))
        (error "Junk detected."))))


(defun interpret-token (string)
  (or (read-integer string)
      (read-float string)
      (read-symbol string)))

(defun jscl/cl::read (stream &optional (eof-error-p t) eof-value recursive-p)
  (let ((save-labelled-objects *labelled-objects*)
        (save-fixup-locations *fixup-locations*))
    (unless recursive-p
      (setf *fixup-locations* nil)
      (setf *labelled-objects* (new-labelled-objects-table)))
    (prog1
        (progn
          (skip-whitespaces-and-comments stream)
          (let ((ch (peek-char nil stream nil nil)))
            (cond
              ((or (null ch) (char= ch #\)))
               (if eof-error-p
                   (error "End of file")
                   eof-value))
              ((char= ch #\()
               (read-char stream nil nil)
               (%read-list stream eof-error-p eof-value))
              ((char= ch #\apostrophe)
               (read-char stream nil nil)
               (list 'quote (jscl/cl::read stream eof-error-p eof-value t)))
              ((char= ch #\grave_accent)
               (read-char stream nil nil)
               (if (char= (peek-char nil stream nil nil) #\#)
                   (warn "`# might be `#(vec) form, not yet supported;
rewrite `#(v1 v2…) as (apply #'vector `(v1 v2…))"))

               (list 'backquote (jscl/cl::read stream eof-error-p eof-value t)))
              ((char= ch #\")
               (read-char stream nil nil)
               (read-string stream))
              ((char= ch #\,)
               (read-char stream nil nil)
               (if (or (char= (peek-char nil stream nil nil) #\@)
                       (char= (peek-char nil stream nil nil) #\.))
                   (progn (read-char stream nil nil)
                          (list 'unquote-splicing
                                (jscl/cl::read stream eof-error-p eof-value t)))
                   (list 'unquote (jscl/cl::read stream eof-error-p eof-value t))))
              ((char= ch #\#)
               (read-sharp stream eof-error-p eof-value))
              (t
               (let ((string (read-escaped-until stream #'terminalp)))
                 (unless *read-skip-p*
                   (interpret-token string)))))))
      (unless recursive-p
        (fixup-backrefs)
        (setf *labelled-objects* save-labelled-objects)
        (setf *fixup-locations* save-fixup-locations)))))


(locally
    ;; Style-Warning for having  &optional and &key in  the same λ-list,
    ;; but we're mimicking the CL:Read-from-string function, so we don't
    ;; care about that particular warning.
    #+sbcl (declare (sb-ext:muffle-conditions style-warning))
    (defun jscl/cl::read-from-string (string
                                      &optional (eof-error-p t) eof-value
                                      &key (start 0) (end nil)
                                           (preserve-whitespace t))
      (funcall (if preserve-whitespace
                   #'jscl/cl::read-preserving-whitespace
                   #'jscl/cl::read)
               (make-string-input-stream string start (or end (length string)))
               eof-error-p eof-value)))
