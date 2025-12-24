;;; print.lisp ---

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

(/debug "loading print.lisp!")

;;; Printer

(defun lisp-escape-string (string)
  (let ((output "")
        (index 0)
        (size (length string)))
    (while (< index size)
      (let ((ch (char string index)))
        (when (or (char= ch #\") (char= ch #\\))
          (setq output (concat output "\\")))
        (when (or (char= ch #\newline))
          (setq output (concat output "\\"))
          (setq ch #\n))
        (setq output (concat output (string ch))))
      (incf index))
    (concat "\"" output "\"")))

;;; Return T if the string S contains characters which need to be
;;; escaped to print the symbol name, NIL otherwise.
(defun escape-symbol-name-p (s)
  (let ((dots-only t))
    (dotimes (i (length s))
      (let ((ch (char s i)))
        (setf dots-only (and dots-only (char= ch #\.)))
        (when (or (terminalp ch)
                  (char= ch #\:)
                  (char= ch #\\)
                  (not (char= ch (char-upcase ch)))
                  (char= ch #\|))
          (return-from escape-symbol-name-p t))))
    dots-only))

;;; Return T if the specified string can be read as a number
;;; In case such a string is the name of a symbol then escaping
;;; is required when printing to ensure correct reading.
(defun potential-number-p (string)
  ;; The four rules for being a potential number are described in
  ;; 2.3.1.1 Potential Numbers as Token
  ;;
  ;; First Rule
  (dotimes (i (length string))
    (let ((char (char string i)))
      (cond
        ;; Digits TODO: DIGIT-CHAR-P should work with the current
        ;; radix here. If the radix is not decimal, then we have to
        ;; make sure there is not a decimal-point in the string.
        ((digit-char-p char))
        ;; Signs, ratios, decimal point and extension mark
        ((find char "+-/._^"))
        ;; Number marker
        ((alpha-char-p char)
         (when (and (< i (1- (length string)))
                    (alpha-char-p (char string (1+ i))))
           ;; fail: adjacent letters are not number marker, or
           ;; there is a decimal point in the string.
           (return-from potential-number-p)))
        (t
         ;; fail: there is a non-allowed character
         (return-from potential-number-p)))))
  (and
   ;; Second Rule. In particular string is not empty.
   (find-if #'digit-char-p string)
   ;; Third rule
   (let ((first (char string 0)))
     (and (not (char= first #\:))
          (or (digit-char-p first)
              (find first "+-._^"))))
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

#+jscl (defvar *print-escape* t)
#+jscl (defvar *print-circle* nil)
;;; @vkm-path-printer 04-09-2022
;;; add variables 
#+jscl (defvar *print-base* 10)
#+jscl (defvar *print-radix* nil)

;; To support *print-circle* some objects must be tracked for sharing:
;; conses, arrays and apparently-uninterned symbols.  These objects
;; are placed in an array and a parallel array is used to mark if
;; they're found multiple times by assining them an id starting from
;; 1.
;;
;; After the tracking has been completed the printing phase can begin:
;; if an object has an id > 0 then #<n>= is prefixed and the id is
;; changed to negative. If an object has an id < 0 then #<-n># is
;; printed instead of the object.
;;
;; The processing is O(n^2) with n = number of tracked
;; objects. Hopefully it will become good enough when the new compiler
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
                   ;; prevent scan infinity mop pbjects
                   ((mop-object-p x) 
                    (mark x))
                   ((and x (symbolp x) (null (symbol-package x)))
                    (mark x))
                   ((consp x)
                    (when (mark x)
                      (visit (car x))
                      (visit (cdr x))))
                   ((arrayp x)
                    (when (mark x)
                      (dotimes (i (array-total-size x))
                        (visit (row-major-aref x i))))))))
        (visit form)))
    (values known-objects object-ids)))

;;; Write an integer to stream.

;;; @vkm-path-printer 04-09-2022
#| write-integer test case
   http://clhs.lisp.se/Body/v_pr_bas.htm

(dolist (pb '(2 3 8 10 16))
     (write 10 :base pb :radix t)
     (terpri))
=>
#B1010
#3.r101
#O12
10.
#Xa

(dotimes (i 35)
    (let ((base (+ i 2)))
      (write 40 :base base)
      (if (zerop (mod i 10)) (terpri) (format t " "))))

=>
101000
1111 220 130 104 55 50 44 40 37 34
31 2C 2A 28 26 24 22 20 1J 1I
1H 1G 1F 1E 1D 1C 1B 1A 19 18
17 16 15 14

|#

(defun write-integer (argument stream)
  (let* ((print-base *print-base*)
         (print-radix *print-radix*)
         (result))
    (setq result
          (cond ((eql print-base 10)(integer-to-string  argument))
                (t (check-type print-base (integer 2 36))
                   (funcall ((oget argument "toString" "bind") argument print-base)))))
    (when print-radix
      ;; print base prefix
      (case print-base
        (2 (write-string "#B" stream))
        (8 (write-string "#O" stream))
        (16 (write-string "#X" stream))
        (10)
        (t ;; #Nr prefix
         (write-char #\# stream)
         (write print-base :stream stream :base 10)
         (write-char #\r stream))))
    ;; print result
    (write-string (string result) stream)
    argument))

;;; @vkm-path-printer 04-09-2022
(defun gensym-p (s)
  (if (symbol-package s)
      nil
    (not (eq s (find-symbol (symbol-name s))))))

#+jscl (defvar *print-gensym* t)

#+nil
(defun write-symbol (form &optiona (stream *standard-output*))
     (let ((name (symbol-name form))
           (package (symbol-package form)))
       ;; Check if the symbol is accesible from the current package. It
       ;; is true even if the symbol's home package is not the current
       ;; package, because it could be inherited.
       (if (eq form (find-symbol (symbol-name form)))
           (write-string (escape-token (symbol-name form)) stream)
           ;; Symbol is not accesible from *PACKAGE*, so let us prefix
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
                 ;;(declare (ignorable symbol))
                 (when (eq type :internal)
                   (write-char #\: stream))))
             (write-string (escape-token name) stream)))))

;;; This version of format supports only ~A for strings and ~D for
;;; integers. It is used to avoid circularities. Indeed, it just
;;; ouputs to streams.
(defun simple-format (stream fmt &rest args)
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
              (#\f (write-string (float-to-string (pop args)) stream))
              (#\a (write-string (pop args) stream))
              (#\% (write-char #\newline stream)))
            (incf i))
          (write-char char stream)))))


(defun write-char-aux (char stream)
  (if (and (not (eql char #\Space))
           (graphic-char-p char))
      (write-char char stream)
      (write-string (string-capitalize (char-name char)) stream)))

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
       ;; Check if the symbol is accesible from the current package. It
       ;; is true even if the symbol's home package is not the current
       ;; package, because it could be inherited.
       (if (eq form (find-symbol (symbol-name form)))
           (write-string (escape-token (symbol-name form)) stream)
           ;; Symbol is not accesible from *PACKAGE*, so let us prefix
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
     (write-char-aux form stream))
    ;; Strings
    (string
     (if *print-escape*
         (write-string (lisp-escape-string form) stream)
         (write-string form stream)))
    ;; Functions
    (function
     (let ((name #+jscl (oget form "fname")
                 #-jscl nil))
       (if name
           (simple-format stream "#<FUNCTION ~a>" name)
           (write-string "#<FUNCTION>" stream))))
    ;; mop object
    (mop-object (print-object form stream))
    ;; structure object
    (structure (structure-object-printer form stream))
    ;; hash-table object
    (hash-table (hash-table-object-printer form stream))
    ;; Lists
    (list
     (write-char #\( stream)
     (unless (null form)
       (write-aux (car form) stream known-objects object-ids)
       (do ((tail (cdr form) (cdr tail)))
           ;; Stop on symbol OR if the object is already known when we
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
    ;; Arrays
    (array
     (write-char #\# stream)
     (unless (vectorp form)
       (simple-format stream "~dA" (array-rank form)))
     (let ((contents (%array-to-lists form)))
       (if contents
           (write-aux contents stream known-objects object-ids)
           (write-string "()" stream))))
    ;; Packages
    (package
     (simple-format stream "#<PACKAGE ~a>" (package-name form)))
    ;; Others
    (js-object 
     (simple-format stream "#<JS-OBJECT ~a>" (js-object-signature form)))
    (otherwise
     (simple-format stream "#<JS-OBJECT ~a>" (#j:String form)))))


#+jscl
(defun output-stream-designator (x)
  (cond ((eq x nil) *standard-output*)
        ((eq x t)   *standard-output*)  
        (t (if (output-stream-p x)
               x
               (error "Form ~s is not output stream type." (write-to-string x))))))

#+jscl
(defun invoke-object-printer (fn form &optional (stream *standard-output*))
  (let ((stream (output-stream-designator stream)))
    (funcall fn form stream)))

;;; structure object printer
(defun structure-object-printer (form stream)
  (simple-format stream "#<structure ~a>"
                 (string-downcase (string (structure-name form)))))

;;; hash-table printer
(defun %hash-fn-print-name (form)
  (let ((name (oget (car form) "name")))
    (string-downcase (subseq name 0 (position #\- name)))))

(defun hash-table-object-printer (form stream)
  ;; object printer called under typecase. so, check-type not do
  (simple-format
   stream
   (concat "#<hash-table :test " (%hash-fn-print-name form)
           " :count ~d>")
   (hash-table-count form)))

#+jscl
(defun write (form &key (stream *standard-output*)
                   (escape *print-escape*)
                   (gensym *print-gensym*)
                   (base *print-base*)
                   (radix *print-radix*)
                   (circle *print-circle*))
  (let* ((*print-escape* escape)
         (*print-gensym* gensym)
         (*print-base* base)
         (*print-radix* radix)
         (*print-circle* circle)
         (stream (output-stream-designator stream)))
    (multiple-value-bind (objs ids)
        (scan-multiple-referenced-objects form)
      (write-aux form stream objs ids)
      form)))


#+jscl
(defun write-to-string (form)
  (with-output-to-string (output)
    (write form :stream output)))

;;; @vkm-path-printer 04-09-2022
#+jscl
(defun fresh-line (&optional (stream *standard-output*))
  (let ((s (output-stream-designator stream)))
    (cond ((start-line-p s)
           nil)
          (t (write-char #\Newline s)
             t))))

#+jscl
(progn
  (defun prin1 (form &optional stream)
    (write form :stream stream :escape t))

  (defun prin1-to-string (form)
    (with-output-to-string (output)
      (prin1 form output)))

  (defun princ (form &optional stream)
    (write form :stream stream :escape nil))

  (defun princ-to-string (form)
    (with-output-to-string (output)
      (princ form output)))

  (defun terpri (&optional (stream *standard-output*))
    (write-char #\newline stream)
    (values))
 
  ;;(defun print (x)
  ;;  (prog1 (prin1 x)
  ;;    (terpri)))
  (defun print (x &optional stream)
    (let ((s (output-stream-designator stream)))
      (terpri s)
      (write x :stream s :escape t)
      (write-char #\space s)
      x))
  )
;;; EOF
