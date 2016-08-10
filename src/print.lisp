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
;;; TODO: Support for different basis.
(defun write-integer (value stream)
  (write-string (integer-to-string value) stream))

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
     (case form
       (#\newline (write-string "newline" stream))
       (#\space   (write-string "space"   stream))
       (otherwise (write-char form stream))))
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
     (simple-format stream "#<JS-OBJECT ~a>" (#j:String form)))))


(defun output-stream-designator (x)
  ;; TODO: signal error if X is not a stream designator
  (cond
    ((eq x nil) *standard-output*)
    ((eq x t)   *standard-output*       ; *terminal-io*
     )
    (t x)))

#+jscl
(defun write (form &key (stream *standard-output*))
  (let ((stream (output-stream-designator stream)))
    (multiple-value-bind (objs ids)
        (scan-multiple-referenced-objects form)
      (write-aux form stream objs ids)
      form)))

#+jscl
(defun write-to-string (form)
  (with-output-to-string (output)
    (write form :stream output)))

#+jscl
(progn
  (defun prin1 (form &optional stream)
    (let ((*print-escape* t))
      (write form :stream stream)))

  (defun prin1-to-string (form)
    (with-output-to-string (output)
      (prin1 form output)))

  (defun princ (form &optional stream)
    (let ((*print-escape* nil))
      (write form :stream stream)))

  (defun princ-to-string (form)
    (with-output-to-string (output)
      (princ form output)))

  (defun terpri ()
    (write-char #\newline)
    (values))
  
  (defun write-line (x)
    (write-string x)
    (terpri)
    x)
  
  (defun print (x)
    (prog1 (prin1 x)
      (terpri))))


;;; Format

(defun format-special (chr arg)
  (case (char-upcase chr)
    (#\S (prin1-to-string arg))
    (#\A (princ-to-string arg))
    (#\D (princ-to-string arg))
    (t
     (warn "~S is not implemented yet, using ~~S instead" chr)
     (prin1-to-string arg))))

(defun !format (destination fmt &rest args)
  (let ((len (length fmt))
        (i 0)
        (res "")
        (arguments args))
    (while (< i len)
      (let ((c (char fmt i)))
        (if (char= c #\~)
            (let ((next (char fmt (incf i))))
              (cond
                ((char= next #\~)
                 (concatf res "~"))
                ((or (char= next #\&) 
                     (char= next #\%))
                 (concatf res (string #\newline)))
                ((char= next #\*)
                 (pop arguments))
                (t
                 (concatf res (format-special next (car arguments)))
                 (pop arguments))))
            (setq res (concat res (string c))))
        (incf i)))

    (case destination
      ((t)
       (write-string res)
       nil)
      ((nil)
       res)
      (t
       (write-string res destination)))))

#+jscl (fset 'format (fdefinition '!format))
