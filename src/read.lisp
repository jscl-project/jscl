;;; read.lisp --- 

;; Copyright (C) 2012, 2013 David Vazquez
;; Copyright (C) 2012 Raimon Grau

;; This program is free software: you can redistribute it and/or
;; modify it under the terms of the GNU General Public License as
;; published by the Free Software Foundation, either version 3 of the
;; License, or (at your option) any later version.
;;
;; This program is distributed in the hope that it will be useful, but
;; WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
;; General Public License for more details.
;;
;; You should have received a copy of the GNU General Public License
;; along with this program.  If not, see <http://www.gnu.org/licenses/>.


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
  (or (null ch) (whitespacep ch) (char= #\) ch) (char= #\( ch)))

(defun read-until (stream func)
  (let ((string "")
        (ch))
    (setq ch (%peek-char stream))
    (while (and ch (not (funcall func ch)))
      (setq string (concat string (string ch)))
      (%read-char stream)
      (setq ch (%peek-char stream)))
    string))

(defun skip-whitespaces-and-comments (stream)
  (let (ch)
    (skip-whitespaces stream)
    (setq ch (%peek-char stream))
    (while (and ch (char= ch #\;))
      (read-until stream (lambda (x) (char= x #\newline)))
      (skip-whitespaces stream)
      (setq ch (%peek-char stream)))))

(defun %read-list (stream)
  (skip-whitespaces-and-comments stream)
  (let ((ch (%peek-char stream)))
    (cond
      ((null ch)
       (error "Unspected EOF"))
      ((char= ch #\))
       (%read-char stream)
       nil)
      ((char= ch #\.)
       (%read-char stream)
       (prog1 (ls-read-1 stream)
         (skip-whitespaces-and-comments stream)
         (unless (char= (%read-char stream) #\))
           (error "')' was expected."))))
      (t
       (cons (ls-read-1 stream) (%read-list stream))))))

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

(defun read-sharp (stream)
  (%read-char stream)
  (ecase (%read-char stream)
    (#\'
     (list 'function (ls-read-1 stream)))
    (#\( (list-to-vector (%read-list stream)))
    (#\: (make-symbol (string-upcase (read-until stream #'terminalp))))
    (#\\
     (let ((cname
            (concat (string (%read-char stream))
                    (read-until stream #'terminalp))))
       (cond
         ((string= cname "space") (char-code #\space))
         ((string= cname "tab") (char-code #\tab))
         ((string= cname "newline") (char-code #\newline))
         (t (char-code (char cname 0))))))
    (#\+
     (let ((feature (read-until stream #'terminalp)))
       (cond
         ((string= feature "common-lisp")
          (ls-read-1 stream)              ;ignore
          (ls-read-1 stream))
         ((string= feature "jscl")
          (ls-read-1 stream))
         (t
          (error "Unknown reader form.")))))))

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
           (setq package (string-upcase (subseq string 0 index))))
       (incf index)
       (when (char= (char string index) #\:)
         (setq internalp t)
         (incf index))
       (setq name (subseq string index))))
    ;; Canonalize symbol name and package
    (when (not (eq package "JS"))
      (setq name (string-upcase name)))
    (setq package (find-package package))
    ;; TODO: PACKAGE:SYMBOL should signal error if SYMBOL is not an
    ;; external symbol from PACKAGE.
    (if (or internalp
            (eq package (find-package "KEYWORD"))
            (eq package (find-package "JS")))
        (intern name package)
        (find-symbol name package))))

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
        (unless (member (string-upcase (string (char string index)))
                        '("E" "S" "F" "D" "L"))
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
      (/ (* sign (expt 10 (* exponent-sign exponent)) number) divisor))))


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
    (when num
      (values num index)
      (error "junk detected."))))

(defvar *eof* (gensym))
(defun ls-read-1 (stream)
  (skip-whitespaces-and-comments stream)
  (let ((ch (%peek-char stream)))
    (cond
      ((or (null ch) (char= ch #\)))
       *eof*)
      ((char= ch #\()
       (%read-char stream)
       (%read-list stream))
      ((char= ch #\')
       (%read-char stream)
       (list 'quote (ls-read-1 stream)))
      ((char= ch #\`)
       (%read-char stream)
       (list 'backquote (ls-read-1 stream)))
      ((char= ch #\")
       (%read-char stream)
       (read-string stream))
      ((char= ch #\,)
       (%read-char stream)
       (if (eql (%peek-char stream) #\@)
           (progn (%read-char stream) (list 'unquote-splicing (ls-read-1 stream)))
           (list 'unquote (ls-read-1 stream))))
      ((char= ch #\#)
       (read-sharp stream))
      (t
       (let ((string (read-until stream #'terminalp)))
         (or (values (!parse-integer string nil))
             (read-float string)
             (read-symbol string)))))))

(defun ls-read (stream &optional (eof-error-p t) eof-value)
  (let ((x (ls-read-1 stream)))
    (if (eq x *eof*)
        (if eof-error-p (error "EOF") eof-value)
        x)))

(defun ls-read-from-string (string &optional (eof-error-p t) eof-value)
  (ls-read (make-string-stream string) eof-error-p eof-value))

#+jscl
(defun read-from-string (string &optional (eof-errorp t) eof-value)
  (ls-read-from-string string eof-errorp eof-value))
