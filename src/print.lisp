;;; print.lisp ---

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

(/debug "loading print.lisp!")

;;; HACK HACK — if an error  occurs during startup before toplevel binds
;;; this correctly,

(defvar jscl/cl::*standard-output*
  #+jscl
  (vector 'stream
          (lambda (ch)
            ((jscl/ffi::oget (%js-vref "global") "console" "error") (string ch)))
          (lambda (string)
            ((jscl/ffi::oget (%js-vref "global") "console" "error") string)))
  #-jscl cl::*standard-output*)

;;; Printer

(defun lisp-escape-string (string)
  (let ((output "")
        (index 0)
        (size (length string)))
    (while (< index size)
      (let ((ch (char string index)))
        (when (or (char= ch #\") (char= ch #\\))
          (setq output (concat output "\\")))
        (when (or (char= ch #\newline))   	; wait, what? \n in Lisp? No… *BRFP TODO
          (setq output (concat output "\\"))
          (setq ch #\n))
        (setq output (concat output (string ch))))
      (incf index))
    (concat "\"" output "\"")))

(defun escape-symbol-name-p (s)
  "Return  T if  the  string S  contains characters  which  need to  be
 escaped to print the symbol name, NIL otherwise."
  (when (every (lambda (ch) (char= #\. ch)) s)
    (return-from escape-symbol-name-p t))
  (dotimes (i (length s))
    (let ((ch (char s i))) 
      (when (or (terminalp ch)
                (char= ch #\:)
                (char= ch #\\)
                (not (char= ch (char-upcase ch)))
                (char= ch #\|))
        (return-from escape-symbol-name-p t))))
  (potential-number-p s))


(defun potential-number-p (string)
  " Return T  if the specified  string can be read  as a number  In case
 such a string is the name of a symbol then escaping is required when
 printing to ensure correct reading."
  ;; The  four rules  for  being  a potential  number  are described  in
  ;; 2.3.1.1 Potential Numbers as Token
  ;;
  ;; First Rule
  (dotimes (i (length string))
    (let ((char (char string i)))
      (cond
        ;; DIGIT-CHAR-P should work with the current radix (*READ-BASE*)
        ;; here. If the radix is not  decimal, then we have to make sure
        ;; there is not a decimal-point in the string.
        ((digit-char-p char *read-base*))
        ;; Signs, ratios, decimal point and extension mark
        ((find char "+-/_^"))
        ((and (= 10 *read-base*)
              (char= #\. char)))
        ;; Number marker
        ((alpha-char-p char)
         (when (and (< i (1- (length string)))
                    (alpha-char-p (char string (1+ i))))
           ;; fail: adjacent letters are not  number marker, or there is
           ;; a decimal point in the string.
           (return-from potential-number-p)))
        (t
         ;; fail: there is a non-allowed character
         (return-from potential-number-p)))))
  (and
   ;; Second Rule. In particular string is not empty.
   (find-if (lambda (ch) (digit-char-p ch *read-base*)) string)
   ;; Third rule
   (let ((first (char string 0)))
     (and (not (char= first #\:))
          (or (digit-char-p first)
              (and (= 10 *read-base*)
                   (char= #\. first))
              (find first "+-_^"))))
   ;; Fourth rule
   (not (find (char string (1- (length string))) "+-)"))))

#+nil
(mapcar #'potential-number-p
        '("1b5000" "777777q" "1.7J" "-3/4+6.7J" "12/25/83" "27^19"
          "3^4/5" "6//7" "3.1.2.6" "^-43^" "3.141_592_653_589_793_238_4"
          "-3.7+2.6i-6.17j+19.6k"))

#+nil
(mapcar #'potential-number-p '("/" "/5" "+" "1+" "1-" "foo+" "ab.cd" "_" "^" "^/-"))

(defun escape-token-p (string)
  (or (potential-number-p string)
      (escape-symbol-name-p string)))

;;; Returns the token in a form that can be used for reading it back.
(defun escape-token (s)
  (if (escape-token-p s)
      (let ((result "|"))
        (dotimes (i (length s))
          (let ((ch (char s i)))
            (when (or (char= ch #\|)
                      (char= ch #\\))
              (setf result (concat result "\\")))
            (setf result (concat result (string ch)))))
        (concat result "|"))
      s))

(defvar jscl/cl::*print-escape* t)
(defvar jscl/cl::*print-readably* t)
(defvar jscl/cl::*print-circle* nil)
(defvar jscl/cl::*print-radix* nil)
(defvar jscl/cl::*print-base* 10)

(defvar jscl/cl::*read-base* 10) ; NB. This file is loaded before read.lisp

;; To support *print-circle*  some objects must be  tracked for sharing:
;; conses, arrays  and apparently-uninterned symbols. These  objects are
;; placed in an  array and a parallel  array is used to  mark if they're
;; found multiple times by assining them an id starting from 1.
;;
;; After the tracking  has been completed the printing  phase can begin:
;; if an  object has  an id >  0 then  #<n>= is prefixed  and the  id is
;; changed  to negative.  If an  object has  an id  < 0  then #<-n>#  is
;; printed instead of the object.
;;
;; The  processing  is  O(n^2)  with  n =  number  of  tracked  objects.
;; Hopefully  it  will   become  good  enough  when   the  new  compiler
;; is available.
(defun scan-multiple-referenced-objects (form)
  (let ((known-objects (make-array 0 :adjustable t :fill-pointer 0))
        (object-ids    (make-array 0 :adjustable t :fill-pointer 0)))
    (vector-push-extend nil known-objects)
    (vector-push-extend 0 object-ids)
    (let ((count 0))
      (labels ((mark (x)
                 (let ((i (position x known-objects)))
                   (cond
                     ((null i)
                      (vector-push-extend x known-objects)
                      (vector-push-extend 0 object-ids)
                      t)
                     (t
                      (setf (aref object-ids i) (incf count))
                      nil))))
               (visit (x)
                 (cond
                   ((and x (symbolp x) (null (symbol-package x)))
                    (mark x))
                   ((consp x)
                    (when (mark x)
                      (visit (car x))
                      (visit (cdr x))))
                   ((vectorp x)
                    (when (mark x)
                      (dotimes (i (length x))
                        (visit (aref x i))))))))
        (visit form)))
    (values known-objects object-ids)))

;;; Write an integer to stream.
(defun write-integer (value stream &optional (radix *print-base*))
  (write-string (integer-to-string value radix) stream))

(defun simple-format (stream fmt &rest args)
  "This  version of  format  supports only  ~A for  strings  and ~D  for
integers. It  is used  to avoid circularities.  Indeed, it  just outputs
to streams."
  (do ((i 0 (1+ i)))
      ((= i (length fmt)))
    (let ((char (char fmt i)))
      (if (char= char #\~)
          (let ((next (if (< i (1- (length fmt)))
                          (char fmt (1+ i))
                          (error "`~~' appears in the last position of the format control string ~S." fmt))))
            (ecase next
              (#\~ (write-char #\~ stream))
              (#\d (write-integer (pop args) stream))
              (#\a (write-string (pop args) stream)))
            (incf i))
          (write-char char stream)))))


(defun write-aux (form stream known-objects object-ids)
  (when *print-circle*
    (let* ((ix (or (position form known-objects) 0))
           (id (aref object-ids ix)))
      (cond
        ((and id (> id 0))
         (simple-format stream "#~d=" id)
         (setf (aref object-ids id) (- id)))
        ((and id (< id 0))
         (simple-format stream "#~d#" (- id))
         (return-from write-aux)))))
  (typecase form
    ;; NIL
    (null
     (write-string "NIL" stream))
    ;; Symbols
    (symbol
     (let ((name (symbol-name form))
           (package (symbol-package form)))
       ;; Check if  the symbol  is accesible  from the  current package.
       ;; It  is true  even  if the  symbol's home  package  is not  the
       ;; current package, because it could be inherited.
       (if (eq form (find-symbol (symbol-name form)))
           (write-string (escape-token (symbol-name form)) stream)
           ;; Symbol is not  accesible from *PACKAGE*, so  let us prefix
           ;; the symbol with the optional package or uninterned mark.
           (progn
             (cond
               ((null package) (write-char #\# stream))
               ((eq package (find-package "KEYWORD")))
               (t (write-string (escape-token (package-name package)) stream)))
             (write-char #\: stream)
             (when package
               (multiple-value-bind (symbol type)
                   (find-symbol name package)
                 (declare (ignorable symbol))
                 (when (eq type :internal)
                   (write-char #\: stream))))
             (write-string (escape-token name) stream)))))

    ;; Integers
    (integer
     (write-integer form stream))
    ;; Floats
    (float
     (write-string (float-to-string form) stream))
    ;; Characters
    (character
     (write-string "#\\" stream)
     (if (or (char= #\space form) (not (graphic-char-p form)))
         (write-string (char-name form) stream)
         (write-char form stream)))
    ;; Strings
    (string
     (if *print-escape*
         (write-string (lisp-escape-string form) stream)
         (write-string form stream)))
    ;; Functions
    (function
     (let ((name #+jscl (jscl/ffi:oget form "fname")
                 #-jscl (nth-value 2 (function-lambda-expression
                                      form))))
       (if name
           (simple-format stream "#<FUNCTION ~a>" name)
           (write-string "#<FUNCTION>" stream))))
    ;; Lists
    (list
     (write-char #\( stream)
     (unless (null form)
       (write-aux (car form) stream known-objects object-ids)
       (do ((tail (cdr form) (cdr tail)))
           ;; Stop on symbol  OR if the object is already  known when we
           ;; accept circular printing.
           ((or (atom tail)
                (and *print-circle*
                     (let* ((ix (or (position tail known-objects) 0))
                            (id (aref object-ids ix)))
                       (not (zerop id)))))
            (unless (null tail)
              (write-string " . " stream)
              (write-aux tail stream known-objects object-ids)))
         (write-char #\space stream)
         (write-aux (car tail) stream known-objects object-ids)))
     (write-char #\) stream))
    ;; Vectors
    (vector
     (write-string "#(" stream)
     (when (plusp (length form))
       (write-aux (aref form 0) stream known-objects object-ids)
       (do ((i 1 (1+ i)))
           ((= i (length form)))
         (write-char #\space stream)
         (write-aux (aref form i) stream known-objects object-ids)))
     (write-char #\) stream))
    ;; Packages
    (package
     (simple-format stream "#<PACKAGE ~a>" (package-name form)))
    ;; Others
    (otherwise
     #+jscl
     (simple-format stream "#<JS-OBJECT ~a>" (#j:String form)
                    #-jscl
                    (simple-format stream "#<Strange-Object? ~a>" (princ-to-string form))))))


(defun output-stream-designator (x)
  ;; TODO: signal error if X is not a stream designator
  (cond
    ((eq x nil) *standard-output*)
    ((eq x t)   *standard-output*       ; *terminal-io*
     )
    (t x)))

(defun jscl/cl::write (form &key (stream *standard-output*))
  (let ((stream (output-stream-designator stream)))
    (multiple-value-bind (objs ids)
        (scan-multiple-referenced-objects form)
      (write-aux form stream objs ids)
      form)))

#+jscl
(defun write-to-string (form)
  (with-output-to-string (output)
    (write form :stream output)))

(defmacro jscl/cl::with-input-from-string ((stream string) &body body)
  `(let ((,stream (cons ,string 0)))
     ,@body))


(defun jscl/cl::prin1 (form &optional stream)
  (let ((*print-escape* t))
    (write form :stream stream)))

(defun jscl/cl::prin1-to-string (form)
  (with-output-to-string (output)
    (prin1 form output)))

(defun jscl/cl::princ (form &optional stream)
  (let ((*print-escape* nil) (*print-readably* nil))
    (typecase form
      (symbol (write (symbol-name form) :stream stream))
      (character (write-char form stream))
      (t (write form :stream stream))))
  form)

(defun jscl/cl::princ-to-string (form)
  (with-output-to-string (output)
    (princ form output)))

(defun jscl/cl::terpri (&optional (stream *standard-output*))
  (write-char #\newline stream)
  (values))

(defun jscl/cl::write-line (x)
  (write-string x)
  (terpri)
  x)

(defun jscl/cl::print (x &optional (stream *standard-output*))
  (prog1 (prin1 x stream)
    (terpri stream)))


;;; FORMAT
;; Lots  of   helper  functions   first,  for  the   various  directives
;; and utilities.

(defun format-aesthetic (arg colonp atp &optional (min-column 1))
  "FORMAT ~a handler."
  (declare (ignore atp colonp))
  (let* ((s (princ-to-string arg))
         (len (length s)))
    (if (< len min-column)
        (concatenate 'string
                     s
                     (make-string (- min-column len)
                                  :initial-element #\space))
        s)))

(defun group-digits (comma group-length string)
  "Group the digits of  a string for commas, as per ~:d  et al. COMMA is
the  comma-character; GROUP-LENGTH  is the  length of  each comma-group;
STRING is a string of digits with an optional leading + or - sign."
  (cond ((find (char string 0) "+-")
         (concatenate 'string
                      (subseq string 0 1)
                      (group-digits comma group-length
                                    (subseq string 1))))
        ((<= (length string) group-length)
         string)
        (t (let* ((rev (reverse string))
                  (len (length string))
                  (out-len (+ len (floor (1- len) group-length)))
                  (i 0) (j out-len)
                  (out (make-string out-len :initial-element comma)))
             (while (< i len)
               (setf (aref out (decf j)) (char rev i))
               (incf i)
               (when (zerop (mod i group-length))
                 (decf j)))
             out))))

(defun format-pad-to-right (string min-column
                            &optional (pad-char #\space))
  "Pad a  string, right-flush, to  at least MIN-COLUMN  characters wide;
pad  with PAD-CHAR  (or  #\Space).

If the length of STRING is known, passing it in can save a few cycles."
  (let ((min-column (or min-column 1))
        (length (length string)))
    (if (< length min-column)
        (concatenate 'string
                     (make-string (- min-column length)
                                  :initial-element (or pad-char #\space))
                     string)
        string)))

(defun format-numeric (number colonp atp
                       &optional
                         (min-column 1) (pad-char #\space)
                         (group-comma #\,) (group-length 3))
  "Format NUMBER to  a string in *PRINT-BASE* radix.  Pads to MIN-COLUMN
with PAD-CHAR.  When COLONP,  it groups  into GROUP-LENGTH  digit groups
with  a GROUP-COMMA  delimiter.  When ATP,  it prints  a  leading +  for
positive numbers also.

Used  internally  by  FORMAT  ~d,  ~b, ~o,  ~x,  ~r,  with  *PRINT-BASE*
bound accordingly."
  (unless (integerp number)
    (return-from format-numeric (princ-to-string number)))
  (let* ((digits (integer-to-string number *print-base* atp))
         (grouped (if colonp
                      (group-digits (or group-comma #\,)
                                    (or group-length 3) digits)
                      digits)))
    (format-pad-to-right grouped min-column pad-char)))

(defun format-hex (arg colonp atp
                   &optional
                     (min-column 1) (pad-char #\space)
                     (comma-char #\,) (comma-interval 3))
  "FORMAT ~x handler."
  (let ((*print-escape* nil)
        (*print-base* 16)
        (*print-radix* nil)
        (*print-readably* nil))
    (format-numeric arg colonp atp min-column pad-char
                    comma-char comma-interval)))

(defun format-ordinal-string (arg)
  (let ((digits (reverse (integer-to-string arg))))
    (cond
      ((equal "0" digits) "zeroeth")
      ((= 1 (length digits))
       (elt '("" "first" "second" "third" "fourth"
              "fifth" "sixth" "seventh" "eighth" "ninth")
            (digit-char-p (char digits 0))))
      ((and (= 2 (length digits))
            (char= #\1 (char digits 1)))
       (elt '("tenth" "eleventh" "twelfth"
              "thirteenth" "fourteenth" "fifteenth"
              "sixteenth" "seventeenth" "eighteenth"
              "ninteenth")
            (digit-char-p (char digits 0))))
      ((and (= 2 (length digits))
            (char< #\1 (char digits 1)))
       (let ((tens (elt '("" ""
                          "twenty" "thirty" "forty" "fifty"
                          "sixty" "seventy" "eighty" "ninety")
                        (digit-char-p (char digits 1)))))
         (if (char= #\0 (char digits 0))
             (concatenate 'string
                          (subseq tens
                                  0 (1- (length tens)))
                          "ieth")
             (concatenate 'string
                          tens "-"
                          (format-ordinal-string (digit-char-p
                                                  (char digits 0)))))))
      (t (multiple-value-bind (hundreds units) (floor arg 100)
           (concatenate
            'string
            (format-cardinal-string (* hundreds 100))
            (if (zerop units)
                "th"
                (concatenate
                 'string " "
                 (format-ordinal-string units)))))))))

(defun format-cardinal-string (arg)
  (format nil "#< Spelled out ~d >" arg))

(defun format-roman-numeral (arg &optional long-four-p)
  (when (<= 400000 arg)
    (return-from format-roman-numeral (integer-to-string arg)))
  (let ((output))
    (multiple-value-bind (tens units) (floor arg 10)
      (when (plusp units)
        (if (and long-four-p
                 (= 4 units))
            (push "ⅠⅠⅠⅠ" output)
            (push (string (elt "⋅ⅠⅡⅢⅣⅤⅥⅦⅧⅨ"
                               units))
                  output)))
      (when (plusp tens)
        (multiple-value-bind (hundreds tens) (floor tens 10)
          (push (elt '("" "Ⅹ" "ⅩⅩ" "ⅩⅩⅩ" "ⅩⅬ" "Ⅼ" "ⅬⅩ" "ⅬⅩⅩ" "ⅬⅩⅩⅩ" "ⅩⅭ")
                     tens)
                output)
          (when (plusp hundreds)
            (multiple-value-bind (thousands hundreds)
                (floor hundreds 10)
              (push (elt '("" "Ⅽ" "ⅭⅭ" "ⅭⅭⅭ" "ⅭⅮ" "Ⅾ"
                           "ⅮⅭ" "ⅮⅭⅭ" "ⅮⅭⅭⅭ" "ⅭⅯ")
                         hundreds)
                    output)
              (when (plusp thousands)
                (multiple-value-bind (10ks ks) (floor thousands 10)
                  (push (elt '("" "Ⅿ" "ⅯⅯ" "ⅯⅯⅯ" "Ⅿↁ" "ↁ"
                               "ↁⅯ" "ↁⅯⅯ" "ↁⅯⅯⅯ" "Ⅿↂ")
                             ks)
                        output)
                  (when (plusp 10ks)
                    (multiple-value-bind (100ks 10ks) (floor 10ks 10)
                      (push (elt '("" "ↂ" "ↂↂ" "ↂↂↂ" "ↂↇ" "ↇ"
                                   "ↇↂ" "ↇↂↂ" "ↇↂↂↂ" "ↂↈ")
                                 10ks)
                            output)
                      (when (plusp 100ks)
                        (push (elt '("" "ↈ" "ↈↈ" "ↈↈↈ")
                                   100ks)
                              output)))))))))))
    (apply #'concatenate 'string output)))

(defun format-radix (arg colonp atp &optional base)
  "FORMAT ~r handler."
  (cond
    ((and atp colonp) (format-roman-numeral arg t))
    (atp (format-roman-numeral arg nil))
    (colonp (format-ordinal-string arg))
    ((not base) (format-cardinal-string arg))
    (t
     (let ((*print-base* base)
           (*print-radix* nil))
       (format-numeric arg nil nil)))))


(defun format-binary (arg colonp atp &optional (min-column 1) (pad-char #\space)
                                               (comma-char #\,) (comma-interval 3))
  "FORMAT ~b handler."
  (let ((*print-escape* nil)
        (*print-base* 2)
        (*print-radix* nil)
        (*print-readably* nil))
    (format-numeric arg colonp atp min-column pad-char comma-char comma-interval)))

(defun format-octal (arg colonp atp &optional (min-column 1) (pad-char #\space)
                                              (comma-char #\,) (comma-interval 3))
  "FORMAT ~o handler."
  (let ((*print-escape* nil)
        (*print-base* 8)
        (*print-radix* nil)
        (*print-readably* nil))
    (format-numeric arg colonp atp min-column pad-char comma-char comma-interval)))

(defun format-decimal (arg colonp atp &optional (min-column 1) (pad-char #\space)
                                                (comma-char #\,) (comma-interval 3))
  "FORMAT ~d handler."
  (let ((*print-base* 10))
    (format-numeric arg colonp atp min-column pad-char comma-char comma-interval)))

(defun format-terpri (&optional (count 1))
  "FORMAT ~% handler"
  (make-string count :initial-element #\newline))

(defun format-fresh-line (&optional (count 1))
  "FORMAT ~& handler.

Since we  aren't really tracking  fresh-lines, its behavior is  a little
approximate. It will emit no less than  1 newline, but for COUNT ≥ 2, it
emits (1- COUNT)."
  (format-terpri (if (< 1 count)
                     (1- count)
                     count)))

(defun format-syntax (arg colonp atp &rest _)
  "FORMAT ~s handler."
  (declare (ignore colonp atp _))
  (prin1-to-string arg))

(defun format-write (arg colonp atp)
  "FORMAT ~w handler."
  (let ((*print-pretty* (or colonp *print-pretty*))
        (*print-level* (if atp 0 *print-level*))
        (*print-length* (if atp 0 *print-length*)))
    (with-output-to-string (s)
      (write arg :stream s))))

(defun format-char (arg colonp atp &rest _)
  "FORMAT ~c handler."
  (declare (ignore _))
  (check-type arg character)
  (cond (colonp (char-name arg))
        (atp (prin1-to-string arg))
        (t (string arg))))

(defun format-float-e (arg colonp atp &rest _)
  "FORMAT ~e handler; does not work properly; calls `FORMAT-SYNTAX'"
  (declare (ignore colonp atp _))
  (format-syntax arg nil nil))
(defun format-float-f (arg colonp atp &rest _)
  "FORMAT ~f handler; does not work properly; calls `FORMAT-SYNTAX'"
  (declare (ignore colonp atp _))
  (format-syntax arg nil nil))
(defun format-float-g (arg colonp atp &rest _)
  "FORMAT ~G handler; does not work properly; calls `FORMAT-SYNTAX'"
  (declare (ignore colonp atp _))
  (format-syntax arg nil nil))
(defun format-float-$ (arg colonp atp &rest _)
  "FORMAT ~$ handler; does not work properly; calls `FORMAT-SYNTAX'"
  (declare (ignore colonp atp _))
  (format-syntax arg nil nil))

(defun string-capitalize-first (string)
  (if (> 2 (length string))
      (string-upcase string)
      (concatenate 'string
                   (string-upcase (subseq string 0 1))
                   (string-downcase (subseq string 1)))))

(defun format-letter-case (captured-substrings arguments
                           &key start-at-p start-colon-p
                                end-at-p end-colon-p)
  "FORMAT ~( ~) handler. Change case.

 • ~( ~) — downcase
 • ~:( ~) — capitalize
 • ~@( ~) — capitalize first letter only
 • ~:@( ~) — upcase"
  (assert (null (or end-at-p end-colon-p)))
  (assert (= 1 (length captured-substrings)))
  (multiple-value-bind (output new-args)
      (jscl/cl::format 'values (first captured-substrings) arguments)
    (values (funcall (cond
                       ((and start-at-p start-colon-p)
                        #'string-upcase)
                       (start-at-p
                        #'string-capitalize-first)
                       (start-colon-p
                        #'string-capitalize)
                       (t
                        #'string-downcase))
                     output)
            new-args)))

(defun format-justify (captured-substrings arguments
                       &key start-at-p start-colon-p
                            end-at-p end-colon-p)
  "FORMAT ~< ~> handler. (unimplemented)"
  (let (output)
    (error "~~< ~~> not implemented yet")
    (values (concatenate 'string (reverse output)) arguments)))

(defun format-conditional (captured-substrings arguments
                           &key start-at-p start-colon-p
                                end-at-p end-colon-p)
  "FORMAT ~[ ~] handler. (unimplemented)"
  (let (output)
    (error "~~[ ~~] not implemented yet")
    (values (concatenate 'string (reverse output)) arguments)))

(defun tilde-semicolon-p (form)
  (and (consp form)
       (eql #\; (car form))))

(defun format-repeat (captured-substrings arguments
                      &key start-at-p start-colon-p
                           end-at-p end-colon-p)
  "FORMAT ~{ ~} handler. (unimplemented)"
  (let (output)
    (when (find-if #'tilde-semicolon-p captured-substrings)
      (error "~~{ ~~} doesn't accept ~~; groups"))
    (assert (null (or start-at-p start-colon-p
                      end-at-p end-colon-p))
            () "~~{ ~~} doesn't accept : or @ modifiers")
    (assert (or (= 1 (length captured-substrings))
                (and (= 3 (length captured-substrings))
                     (consp (second captured-substrings))
                     (eql #\^ (car (second captured-substrings)))))
            () "~~{ ~~} accepts one ~~^ only")
    (let ((list-args (pop arguments)))
      (check-type list-args list)
      (while list-args
        (multiple-value-bind (segment new-args)
            (jscl/cl::format 'values (first captured-substrings) list-args)
          (push segment output)
          (setq list-args new-args))
        (when (and list-args (third captured-substrings))
          (multiple-value-bind (segment new-args)
              (jscl/cl::format 'values (third captured-substrings) list-args)
            (push segment output)
            (setq list-args new-args)))))
    (values (concatenate 'string (reverse output)) arguments)))

(defvar *format-nesting* nil)
(defvar *nested-substrings* nil)
(defun push-nested-substring (string-or-token)
  (push string-or-token (car *nested-substrings*)))

(defun format-special (chr arg params &key colonp atp) ; should be generic …
  "This simulates a  generic function for most  “FORMAT TILDE” handlers,
dispatching on the CHR ending the format sequence."
  (apply (case (char-upcase chr)
           (#\$ #'format-float-$)
           (#\A #'format-aesthetic)
           (#\B #'format-binary)
           (#\C #'format-char)
           (#\D #'format-decimal)
           (#\E #'format-float-e)
           (#\F #'format-float-f)
           (#\G #'format-float-g)
           (#\O #'format-octal)
           (#\R #'format-radix)
           (#\S #'format-syntax)
           (#\W #'format-write)
           (#\X #'format-hex)
           (t (warn "~~~a is not implemented yet, using ~~S instead" chr)
            #'format-syntax))
         arg colonp atp params))

(defun format-nested (nesting-char
                      control-string output arguments
                      next atp colonp)
  (let ((end-char (elt ")]>}" (position nesting-char "([<{")))
        (format-nested-formatter (case next
                                   (#\( #'format-letter-case)
                                   (#\< #'format-justify)
                                   (#\[ #'format-conditional)
                                   (#\{ #'format-repeat))))
    (push (lambda (unnest-char captured-substrings
                   end-at-p end-colon-p)
            (assert (char= unnest-char end-char)
                    () "Mismatch: found ~~~c ~
but wanted ~~~c in format string"
                    unnest-char end-char)
            (multiple-value-setq
                (control-string output arguments)
              (funcall format-nested-formatter
                       captured-substrings
                       arguments
                       :start-at-p atp :start-colon-p colonp
                       :end-at-p end-at-p :end-colon-p end-colon-p)))
          *format-nesting*)
    (push nil *nested-substrings*))

  (values control-string output arguments))

(defun format-tilde (control-string arguments)
  (let ((output "")
        (orig-arguments (copy-list arguments)))
    (flet ((need-more (reason)
             (assert (not (equal "" control-string))
                     (control-string)
                     reason))
           (pop-char ()
             (prog1
                 (char control-string 0)
               (setf control-string (subseq control-string 1)))))
      (let (params atp colonp)
        (tagbody
         read-control
           (need-more "~ at end of format")
           (let ((next (pop-char)))
             (cond
               ((digit-char-p next)     ; Digits
                (multiple-value-bind (param ending)
                    (parse-integer control-string
                                   :junk-allowed t)
                  (push param params)
                  (setq control-string (subseq control-string
                                               (1+ ending))))
                (need-more "~numbers at end of format")
                (when (char= (char control-string 0) #\,)
                  (pop-char))
                (go read-control))

               ((char= #\apostrophe next) ; Quoted char
                (need-more "~' at end of format")
                (push (pop-char) params)
                (need-more "~'char at end of format")
                (go read-control))

               ((char= #\, next)        ; Comma without param
                (push nil params)
                (go read-control))

               ((char-equal #\V next)   ; Variable param
                (push (pop arguments) params))

               ((char= #\Newline next)  ; ~Newline
                ;; Skip the newline, but also  any leading spaces on the
                ;; next line. TODO: Write a test for this
                (while (whitespacep (char control-string 0))
                  (pop-char)))

               ((char= #\: next)        ; Colon modifier
                (setf colonp t)
                (go read-control))

               ((char= #\@ next)        ; At-sign modifier
                (setf atp t)
                (go read-control))

               ((char-equal #\T next)   ; Tabulation
                (concatf output
                  (make-string (min 1
                                    (or (last params)
                                        1))
                               :initial-element #\space)))

               ((char-equal #\P next)   ; English plurals
                (let ((peek (pop arguments)))
                  (when colonp
                    (push peek arguments))
                  (concatf output (cond
                                    ((and atp (/= 1 peek)) "ies")
                                    ((/= 1 peek) "s")
                                    (atp "y")
                                    (t "")))))

               ((char= #\~ next)        ; ~~ → ~
                (concatf output "~"))
               ((char= #\| next)        ; Page break
                (concatf output #(#\Page)))
               ((char= #\% next)        ; Terminate Print (Newline)
                (concatf output
                  (apply #'format-terpri (reverse params))))
               ((char= #\& next)        ; Fresh line
                (concatf output
                  (apply #'format-fresh-line (reverse params))))

               ((char= #\* next)        ; Adjust argument pointer
                (let ((delta (* (or (and params (first params))
                                    1)
                                ;; sign inverted for - below
                                (if colonp 1 -1))))
                  (setf arguments
                        (nthcdr (- (length orig-arguments)
                                   (length arguments)
                                   delta)
                                orig-arguments))))
               ((find next ";^")        ; Operate on grouping
                (assert *nested-substrings* ()
                        "~~; and ~~^ only work within nested format groups")
                (push-nested-substring output)
                (push-nested-substring (list next
                                             (when atp #\@)
                                             (when colonp #\:)))
                (setq output nil))
               ((find next ")>]}")      ; End nested grouping
                (push-nested-substring output)
                (multiple-value-setq (output arguments)
                  (funcall (pop *format-nesting*)
                           next (pop *nested-substrings*)
                           atp colonp)))
               ((find next "(<[{")      ; Start nested grouping
                (multiple-value-setq
                    (control-string output arguments)
                  (format-nested next
                                 control-string output arguments
                                 next atp colonp)))
               ((char= #\/ next)        ; Funcall
                (let ((function-name-string ""))
                  (while (not (char= #\/ (char control-string 0)))
                    (concatf function-name-string (pop-char)))
                  (pop-char)            ; take the trailing /
                  (assert (every (lambda (char)
                                   (or (alphanumericp char)
                                       (char= #\- char)
                                       (char= #\: char)))
                                 function-name-string))
                  (with-output-to-string (s)
                    (funcall
                     (let ((*package* (find-package :cl-user)))
                       (read-from-string function-name-string))
                     s (pop arguments)
                     colonp atp (reverse params)))))
               (t                    ; “Normal” format special operators
                (concatf output
                  (format-special next (pop arguments)
                                  (reverse params)
                                  :atp atp :colonp colonp))))))
        (values control-string output arguments)))))



(defun jscl/cl::format (destination control-string &rest format-arguments)
  ;; docstring c/o SBCL
  "Provides various facilities for formatting output.

 CONTROL-STRING contains a  string to be output,  possibly with embedded
 directives,  which  are  flagged   with  the  escape  character  \"~\".
 Directives generally expand into additional  text to be output, usually
 consuming one  or more of  the FORMAT-ARGUMENTS  in the process.  A few
 useful directives are:

 ~A or ~nA   Prints one argument as if by PRINC
 ~S or ~nS   Prints one argument as if by PRIN1
 ~D or ~nD   Prints one argument as a decimal integer
 ~%          Does a TERPRI
 ~&          Does a FRESH-LINE
 where n is the width of the field in which the object is printed.

 DESTINATION controls where the result will go. If DESTINATION is T, then
 the output is sent to the standard output stream. If it is NIL, then the
 output is returned in a string as the value of the call. Otherwise,
 DESTINATION must be a stream to which the output will be sent.

 Example:   (FORMAT NIL \"The answer is ~D.\" 10) => \"The answer is 10.\"

 FORMAT has many additional capabilities not described here. Consult the
 manual for details."
  (let ((control control-string)
        (output "")
        (arguments format-arguments))
    (while (not (equal "" control))
      (let ((tilde (position #\~ control)))
        (when (and tilde (plusp tilde))
          (concatf output (subseq control (1- tilde))))
        (cond (tilde (let (string)
                       (multiple-value-setq (control string arguments)
                         (format-tilde (subseq control (1+ tilde))
                                       arguments))
                       (concatf output string)))
              (t (concatf output control)
                 (setq control "")))))
    (case destination
      ('values
       (values output arguments))
      ((t)
       (write-string output)
       nil)
      ((nil)
       output)
      (t
       (write-string output destination)
       nil))))
