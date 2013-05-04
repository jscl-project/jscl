;;; read.lisp --- 

;; Copyright (C) 2012, 2013 David Vazquez
;; Copyright (C) 2012 Raimon Grau

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


;;;; Reader

;;; The Lisp reader, parse strings and return Lisp objects. The main
;;; entry points are `ls-read' and `ls-read-from-string'.

(defun make-string-stream (string)
  (cons string 0))

(defun %peek-char (stream)
  (and (< (cdr stream) (length (car stream)))
       (char (car stream) (cdr stream))))

(defun %read-char (stream)
  (and (< (cdr stream) (length (car stream)))
       (prog1 (char (car stream) (cdr stream))
         (rplacd stream (1+ (cdr stream))))))

(defun whitespacep (ch)
  (or (char= ch #\space) (char= ch #\newline) (char= ch #\tab)))

(defun skip-whitespaces (stream)
  (let (ch)
    (setq ch (%peek-char stream))
    (while (and ch (whitespacep ch))
      (%read-char stream)
      (setq ch (%peek-char stream)))))

(defun terminalp (ch)
  (or (null ch) (whitespacep ch) (char= #\" ch) (char= #\) ch) (char= #\( ch)))

(defun read-until (stream func)
  (let ((string "")
        (ch))
    (setq ch (%peek-char stream))
    (while (and ch (not (funcall func ch)))
      (setq string (concat string (string ch)))
      (%read-char stream)
      (setq ch (%peek-char stream)))
    string))

(defun read-escaped-until (stream func)
  (let ((string "")
        (ch (%peek-char stream))
        (multi-escape nil))
    (while (and ch (or multi-escape (not (funcall func ch))))
      (cond
        ((char= ch #\|)
         (if multi-escape
             (setf multi-escape nil)
             (setf multi-escape t)))
        ((char= ch #\\)
         (%read-char stream)
         (setf ch (%peek-char stream))
         (setf string (concat string "\\" (string ch))))
        (t
         (if multi-escape
             (setf string (concat string "\\" (string ch)))
             (setf string (concat string (string ch))))))
      (%read-char stream)
      (setf ch (%peek-char stream)))
    string))

(defun skip-whitespaces-and-comments (stream)
  (let (ch)
    (skip-whitespaces stream)
    (setq ch (%peek-char stream))
    (while (and ch (char= ch #\;))
      (read-until stream (lambda (x) (char= x #\newline)))
      (skip-whitespaces stream)
      (setq ch (%peek-char stream)))))

(defun discard-char (stream expected)
  (let ((ch (%read-char stream)))
    (when (null ch)
      (error "End of file when character ~S was expected." expected))
    (unless (char= ch expected)
      (error "Character ~S was found but ~S was expected." ch expected))))

(defun %read-list (stream)
  (skip-whitespaces-and-comments stream)
  (let ((ch (%peek-char stream)))
    (cond
      ((null ch)
       (error "Unspected EOF"))
      ((char= ch #\))
       (discard-char stream #\))
       nil)
      (t
       (let* ((eof (gensym))
              (next (ls-read stream nil eof)))
         (skip-whitespaces-and-comments stream)
         (cond
           ((eq next eof)
            (discard-char stream #\)))
           (t
            (cons next
                  (if (char= (%peek-char stream) #\.)
                      (progn
                        (discard-char stream #\.)
                        (if (terminalp (%peek-char stream))
                            (prog1 (ls-read stream) ; Dotted pair notation
                              (skip-whitespaces-and-comments stream)
                              (let ((ch (%peek-char stream)))
                                (if (or (null ch) (char= #\) ch))
                                    (discard-char stream #\))
                                    (error "Multiple objects following . in a list"))))
                            (let ((token (concat "." (read-escaped-until stream #'terminalp))))
                              (cons (interpret-token token)
                                    (%read-list stream)))))
                      (%read-list stream))))))))))

(defun read-string (stream)
  (let ((string "")
        (ch nil))
    (setq ch (%read-char stream))
    (while (not (eql ch #\"))
      (when (null ch)
        (error "Unexpected EOF"))
      (when (eql ch #\\)
        (setq ch (%read-char stream)))
      (setq string (concat string (string ch)))
      (setq ch (%read-char stream)))
    string))

(defun read-sharp (stream &optional eof-error-p eof-value)
  (%read-char stream)
  (ecase (%read-char stream)
    (#\'
     (list 'function (ls-read stream)))
    (#\( (list-to-vector (%read-list stream)))
    (#\: (make-symbol
          (unescape-token
           (string-upcase-noescaped
            (read-escaped-until stream #'terminalp)))))
    (#\\
     (let ((cname
            (concat (string (%read-char stream))
                    (read-until stream #'terminalp))))
       (cond
         ((string= cname "space") #\space)
         ((string= cname "tab") #\tab)
         ((string= cname "newline") #\newline)
         (t (char cname 0)))))
    (#\+
     (let ((feature (let ((symbol (ls-read stream)))
                      (unless (symbolp symbol)
                        (error "Invalid feature ~S" symbol))
                      (intern (string symbol) "KEYWORD"))))
       (ecase feature
         (:common-lisp
          (ls-read stream)
          (ls-read stream eof-error-p eof-value))
         (:jscl
          (ls-read stream eof-error-p eof-value))
         (:nil
          (ls-read stream)
          (ls-read stream eof-error-p eof-value)))))))

(defun unescape-token (x)
  (let ((result ""))
    (dotimes (i (length x))
      (unless (char= (char x i) #\\)
        (setq result (concat result (string (char x i))))))
    result))

(defun string-upcase-noescaped (s)
  (let ((result "")
        (last-escape nil))
    (dotimes (i (length s))
      (let ((ch (char s i)))
        (if last-escape
           (progn
              (setf last-escape nil)
              (setf result (concat result (string ch))))
            (if (char= ch #\\)
                (setf last-escape t)
                (setf result (concat result (string-upcase (string ch))))))))
    result))

;;; Parse a string of the form NAME, PACKAGE:NAME or
;;; PACKAGE::NAME and return the name. If the string is of the
;;; form 1) or 3), but the symbol does not exist, it will be created
;;; and interned in that package.
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
       (setq package *package*)
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
    (setq name (if (equal package "JS")
                   (setq name (unescape-token name))
                   (setq name (string-upcase-noescaped name))))
    (setq package (find-package package))
    (if (or internalp
            (eq package (find-package "KEYWORD"))
            (eq package (find-package "JS")))
        (intern name package)
        (multiple-value-bind (symbol external)
            (find-symbol name package)
          (if (eq external :external)
              symbol
              (error "The symbol `~S' is not external in the package ~S." name package))))))

(defun read-integer (string)
  (let ((sign 1)
        (number nil)
        (size (length string)))
    (dotimes (i size)
      (let ((elt (char string i)))
        (cond
          ((digit-char-p elt)
           (setq number (+ (* (or number 0) 10) (digit-char-p elt))))
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
      (/ (* sign (expt 10.0 (* exponent-sign exponent)) number) divisor))))

(defun !parse-integer (string junk-allow)
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
                   (setq value (digit-char-p (char string index))))
        (return (values nil index)))
      (incf index)
      ;; Other digits
      (while (< index size)
        (let ((digit (digit-char-p (char string index))))
          (unless digit (return))
          (setq value (+ (* value 10) digit))
          (incf index)))
      ;; Trailing whitespace
      (do ((i index (1+ i)))
          ((or (= i size) (not (whitespacep (char string i))))
           (and (= i size) (setq index i))))
      (if (or junk-allow
              (= index size))
          (values (* sign value) index)
          (values nil index)))))

#+jscl
(defun parse-integer (string &key junk-allowed)
  (multiple-value-bind (num index)
      (!parse-integer string junk-allowed)
    (if num
        (values num index)
        (error "Junk detected."))))


(defun interpret-token (string)
  (or (read-integer string)
      (read-float string)
      (read-symbol string)))

(defun ls-read (stream  &optional (eof-error-p t) eof-value)
  (skip-whitespaces-and-comments stream)
  (let ((ch (%peek-char stream)))
    (cond
      ((or (null ch) (char= ch #\)))
       (if eof-error-p
           (error "End of file")
           eof-value))
      ((char= ch #\()
       (%read-char stream)
       (%read-list stream))
      ((char= ch #\')
       (%read-char stream)
       (list 'quote (ls-read stream)))
      ((char= ch #\`)
       (%read-char stream)
       (list 'backquote (ls-read stream)))
      ((char= ch #\")
       (%read-char stream)
       (read-string stream))
      ((char= ch #\,)
       (%read-char stream)
       (if (eql (%peek-char stream) #\@)
           (progn (%read-char stream) (list 'unquote-splicing (ls-read stream)))
           (list 'unquote (ls-read stream))))
      ((char= ch #\#)
       (read-sharp stream))
      (t
       (let ((string (read-escaped-until stream #'terminalp)))
         (interpret-token string))))))

(defun ls-read-from-string (string &optional (eof-error-p t) eof-value)
  (ls-read (make-string-stream string) eof-error-p eof-value))

#+jscl
(defun read-from-string (string &optional (eof-errorp t) eof-value)
  (ls-read-from-string string eof-errorp eof-value))
