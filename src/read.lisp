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

(/debug "loading read.lisp!")

;;;; Reader

;;; If it is not NIL, we do not want to read the expression but just
;;; ignore it. For example, it is used in conditional reads #+.
(defvar *read-skip-p* nil)

;;; The Lisp reader, parse strings and return Lisp objects. The main
;;; entry points are `ls-read' and `ls-read-from-string'.

;;; #= / ## implementation

;; For now associations label->object are kept in a plist
;; May be it makes sense to use a vector instead if speed
;; is considered a problem with many labelled objects
(defvar *labelled-objects* nil)

(defun new-labelled-objects-table ()
  (setf *labelled-objects* nil))

(defun find-labelled-object (id)
  (assoc id *labelled-objects*))

(defun add-labelled-object (id value)
  (push (cons id value) *labelled-objects*))

;; A unique value used to mark in the labelled objects
;; table an object that is being constructed
;; (e.g. #1# while reading elements of "#1=(#1# #1# #1#)")
(defvar *future-value* (make-symbol "future"))

;; A unique value used to mark temporary values that will
;; be replaced when fixups are run.
(defvar *fixup-value* (make-symbol "fixup"))

;; Fixup locations keeps a list of conses where the CAR
;; is a callable to be called with the value of the object
;; associated to label stored in CDR once reading is completed
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

;; A function that will need to return a fixup callback
;; for the object that is being read. The returned callback will
;; be called with the result of reading.
(defvar *make-fixup-function*
  (lambda ()
    (error "Internal error in fixup creation during read")))

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

(defun %read-list (stream &optional (eof-error-p t) eof-value)
  (skip-whitespaces-and-comments stream)
  (let ((ch (%peek-char stream)))
    (cond
      ((null ch)
       (error "Unexpected EOF"))
      ((char= ch #\))
       (discard-char stream #\))
       nil)
      (t
       (let* ((cell (cons nil nil))
              (*make-fixup-function* (lambda ()
                                       (lambda (obj)
                                         (rplaca cell obj))))
              (eof (gensym))
              (next (ls-read stream nil eof t)))
         (rplaca cell next)
         (skip-whitespaces-and-comments stream)
         (cond
           ((eq next eof)
            (discard-char stream #\))
            nil)
           (t
            (if (char= (%peek-char stream) #\.)
                (progn
                  (discard-char stream #\.)
                  (if (terminalp (%peek-char stream))
                      (let ((*make-fixup-function* (lambda ()
                                                     (lambda (obj)
                                                       (rplacd cell obj)))))
                        ;; Dotted pair notation
                        (rplacd cell (ls-read stream eof-error-p eof-value t))
                        (skip-whitespaces-and-comments stream)
                        (let ((ch (%peek-char stream)))
                          (if (or (null ch) (char= #\) ch))
                              (discard-char stream #\))
                              (error "Multiple objects following . in a list"))))
                      (let ((token (concat "." (read-escaped-until stream #'terminalp))))
                        (rplacd cell (cons (interpret-token token)
                                           (%read-list stream eof-error-p eof-value))))))
                (rplacd cell (%read-list stream eof-error-p eof-value)))
            cell)))))))

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



(defun eval-feature-expression (expression)
  (etypecase expression
    (keyword
     (and (find expression *features*) t))
    (list
     ;; Macrocharacters for conditional reading #+ and #- bind the
     ;; current package to KEYWORD so features are correctly
     ;; interned. For this reason, AND, OR and NOT symbols will be
     ;; also keyword in feature expressions.
     (ecase (first expression)
       (:and
        (every #'eval-feature-expression (rest expression)))
       (:or
        (some #'eval-feature-expression (rest expression)))
       (:not
        (destructuring-bind (subexpr) (rest expression)
          (not (eval-feature-expression subexpr))))))))


(defun read-sharp (stream &optional eof-error-p eof-value)
  (%read-char stream)
  (let ((ch (%read-char stream)))
    (case ch
      (#\'
       (list 'function (ls-read stream eof-error-p eof-value t)))
      (#\.
       (eval (ls-read stream)))
      (#\(
       (do ((elements nil)
            (result nil)
            (index 0 (1+ index)))
           ((progn (skip-whitespaces-and-comments stream)
                   (or (null (%peek-char stream))
                       (char= (%peek-char stream) #\))))
            (discard-char stream #\))
            (setf result (make-array index))
            (dotimes (i index)
              (aset result (decf index) (pop elements)))
            result)
         (let* ((ix index) ; Can't just use index: the same var would be captured in all fixups
                (*make-fixup-function* (lambda ()
                                         (lambda (obj)
                                           (aset result ix obj))))
                (eof (gensym))
                (value (ls-read stream nil eof t)))
           (push value elements))))
      (#\:
       (make-symbol
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
      ((#\+ #\-)
       (let* ((expression
               (let ((*package* (find-package :keyword)))
                 (ls-read stream eof-error-p eof-value t))))
         
         (if (eql (char= ch #\+) (eval-feature-expression expression))
             (ls-read stream eof-error-p eof-value t)
             (prog2 (let ((*read-skip-p* t))
                      (ls-read stream))
                 (ls-read stream eof-error-p eof-value t)))))
      ((#\J #\j)
       (unless (char= (%peek-char stream) #\:)
         (error "FFI descriptor must start with a colon."))
       (let ((descriptor (subseq (read-until stream #'terminalp) 1))
             (subdescriptors nil))
         (do* ((start 0 (1+ end))
               (end (position #\: descriptor :start start)
                    (position #\: descriptor :start start)))
              ((null end)
               (push (subseq descriptor start) subdescriptors)
               `(oget *root* ,@(reverse subdescriptors)))
           (push (subseq descriptor start end) subdescriptors))))
      (#\|
       (labels ((read-til-bar-sharpsign ()
                  (do ((ch (%read-char stream) (%read-char stream)))
                      ((and (char= ch #\|) (char= (%peek-char stream) #\#))
                       (%read-char stream))
                    (when (and (char= ch #\#) (char= (%peek-char stream) #\|))
                      (%read-char stream)
                      (read-til-bar-sharpsign)))))
         (read-til-bar-sharpsign)
         (ls-read stream eof-error-p eof-value t)))
      (otherwise
       (cond
         ((and ch (digit-char-p ch))
          (let ((id (digit-char-p ch)))
            (while (and (%peek-char stream)
                        (digit-char-p (%peek-char stream)))
              (setf id (+ (* id 10) (digit-char-p (%read-char stream)))))
            (ecase (%peek-char stream)
              (#\=
               (%read-char stream)
               (if (find-labelled-object id)
                   (error "Duplicated label #~S=" id)
                   (progn
                     (add-labelled-object id *future-value*)
                     (let ((obj (ls-read stream eof-error-p eof-value t)))
                       ;; FIXME: somehow the more natural
                       ;;    (setf (cdr (find-labelled-object id)) obj)
                       ;; doesn't work
                       (rplacd (find-labelled-object id) obj)
                       obj))))
              (#\#
               (%read-char stream)
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
      (/ (* sign (expt 10.0 (* exponent-sign exponent)) number) divisor 1.0))))

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

(defun ls-read (stream &optional (eof-error-p t) eof-value recursive-p)
  (let ((save-labelled-objects *labelled-objects*)
        (save-fixup-locations *fixup-locations*))
    (unless recursive-p
      (setf *fixup-locations* nil)
      (setf *labelled-objects* (new-labelled-objects-table)))
    (prog1
        (progn
          (skip-whitespaces-and-comments stream)
          (let ((ch (%peek-char stream)))
            (cond
              ((or (null ch) (char= ch #\)))
               (if eof-error-p
                   (error "End of file")
                   eof-value))
              ((char= ch #\()
               (%read-char stream)
               (%read-list stream eof-error-p eof-value))
              ((char= ch #\')
               (%read-char stream)
               (list 'quote (ls-read stream eof-error-p eof-value t)))
              ((char= ch #\`)
               (%read-char stream)
               (list 'backquote (ls-read stream eof-error-p eof-value t)))
              ((char= ch #\")
               (%read-char stream)
               (read-string stream))
              ((char= ch #\,)
               (%read-char stream)
               (if (eql (%peek-char stream) #\@)
                   (progn (%read-char stream) (list 'unquote-splicing
                                                    (ls-read stream eof-error-p eof-value t)))
                   (list 'unquote (ls-read stream eof-error-p eof-value t))))
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

(defun ls-read-from-string (string &optional (eof-error-p t) eof-value)
  (ls-read (make-string-stream string) eof-error-p eof-value))

#+jscl
(defun read-from-string (string &optional (eof-errorp t) eof-value)
  (ls-read-from-string string eof-errorp eof-value))
