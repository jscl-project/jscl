(in-package :jscl) #-jscl-xc #.(error "Do not load this file in the host compiler")

(/debug "loading char.lisp!")

;; These comparison  functions heavily borrowed from  SBCL/CMUCL (public
;; domain).

(defun char= (character &rest more-characters)
  (dolist (c more-characters t)
    (unless (eql c character) (return nil))))

(defun char/= (character &rest more-characters)
  (do* ((head character (car list))
        (list more-characters (cdr list)))
       ((null list) t)
    (dolist (c list)
      (when (eql head c) (return-from char/= nil)))))

(defun char< (character &rest more-characters)
  (do* ((c character (car list))
        (list more-characters (cdr list)))
       ((null list) t)
    (unless (< (char-int c)
               (char-int (car list)))
      (return nil))))

(defun char> (character &rest more-characters)
  (do* ((c character (car list))
        (list more-characters (cdr list)))
       ((null list) t)
    (unless (> (char-int c)
               (char-int (car list)))
      (return nil))))

(defun char<= (character &rest more-characters)
  (do* ((c character (car list))
        (list more-characters (cdr list)))
       ((null list) t)
    (unless (<= (char-int c)
                (char-int (car list)))
      (return nil))))

(defun char>= (character &rest more-characters)
  (do* ((c character (car list))
        (list more-characters (cdr list)))
       ((null list) t)
    (unless (>= (char-int c)
                (char-int (car list)))
      (return nil))))

(defun equal-char-code (character)
  (char-code (char-upcase character)))

(defun two-arg-char-equal (c1 c2)
  (= (equal-char-code c1) (equal-char-code c2)))

(defun char-equal (character &rest more-characters)
  (check-type character character) 
  (do ((clist more-characters (cdr clist)))
      ((null clist) t)
    (unless (two-arg-char-equal (car clist) character)
      (return nil))))

(defun char-not-equal (character &rest more-characters)
  (do* ((head character (car list))
        (list more-characters (cdr list)))
       ((null list) t)
    (unless (do* ((l list (cdr l)))
                 ((null l) t)
              (when (two-arg-char-equal head (car l))
                (return nil)))
      (return nil))))

(defun two-arg-char-lessp (c1 c2)
  (< (equal-char-code c1) (equal-char-code c2)))

(defun char-lessp (character &rest more-characters)
  (do* ((c character (car list))
        (list more-characters (cdr list)))
       ((null list) t)
    (unless (two-arg-char-lessp c (car list))
      (return nil))))

(defun two-arg-char-greaterp (c1 c2)
  (> (equal-char-code c1) (equal-char-code c2)))

(defun char-greaterp (character &rest more-characters)
  (do* ((c character (car list))
        (list more-characters (cdr list)))
       ((null list) t)
    (unless (two-arg-char-greaterp c (car list))
      (return nil))))

(defun two-arg-char-not-greaterp (c1 c2)
  (<= (equal-char-code c1) (equal-char-code c2)))

(defun char-not-greaterp (character &rest more-characters)
  (do* ((c character (car list))
        (list more-characters (cdr list)))
       ((null list) t)
    (unless (two-arg-char-not-greaterp c (car list))
      (return nil))))

(defun two-arg-char-not-lessp (c1 c2)
  (>= (equal-char-code c1) (equal-char-code c2)))

(defun char-not-lessp (character &rest more-characters)
  (do* ((c character (car list))
        (list more-characters (cdr list)))
       ((null list) t)
    (unless (two-arg-char-not-lessp c (car list))
      (return nil))))

(defun character (character)
  (cond ((characterp character)
         character)
        ((and (stringp character)
              (= 1 (length character)))
         (char character 0))
        ((and (symbolp character)
              (= 1 (length (symbol-name character))))
         (symbol-name character))
        (t
         (error "not a valid character designator"))))

(defun alphanumericp (char)
  ;; from the hyperspec:
  (or (alpha-char-p char)
      (not (null (digit-char-p char)))))

(defun graphic-char-p (char)
  ;; from Wikipedia's Unicode article. Commented hex values because JSCL
  ;; can't read #x yet.
  (let ((n (char-code char)))
    (cond
      ((< n 32) nil)                       ; C0 control codes
      ((< n 127) t)
      ((< n 160) nil)                         ; C1 control codes
      ((< n 55296 #| xd800 |#) t)
      ((< n 57344 #| xe000 |#) nil)    ; high and low surrogates
      ((< n 54976 #| xfdd0 |#) t)
      ((< n 65007 #| xfffe |#) nil) ; upper disallowed
      ;; the following bit-patterns are never allowed
      ((= (logior n 65535 #| xffff |#) 65534 #| xfffe |#) nil)
      ((= (logior n 65535 #| xffff |#) 65535 #| xffff |#) nil)
      ((< n 1114111 #| x10ffff |#) t) ; upper range of allowable characters
      ((:else nil)))))

(defun standard-char-p (char)
  ;; from SBCL/CMUCL:
  (and (let ((n (char-code char)))
         (or (< 31 n 127)
             (= n 10)))))

(defun upper-case-p (character)
  (char/= character (char-downcase character)))

(defun lower-case-p (character)
  (char/= character (char-upcase character)))

(defun both-case-p (character)
  (or (upper-case-p character) (lower-case-p character)))

(defun char-int (character)
  ;; no implementation-defined character attributes
  (char-code character))

(defconstant char-code-limit 1114111)  ;; 0x10FFFF

(defconstant +ascii-names+
  #("NULL" "START_OF_HEADING" "START_OF_TEXT" "END_OF_TEXT" "END_OF_TRANSMISSION" "ENQUIRY" "ACKNOWLEDGE"
    "BELL" "Backspace" "Tab" "Newline" "LINE_TABULATION" "Page" "Return" "SHIFT_OUT" "SHIFT_IN"
    "DATA_LINK_ESCAPE" "DEVICE_CONTROL_ONE" "DEVICE_CONTROL_TWO" "DEVICE_CONTROL_THREE" "DEVICE_CONTROL_FOUR"
    "NEGATIVE_ACKNOWLEDGE" "SYNCHRONOUS_IDLE" "END_OF_TRANSMISSION_BLOCK" "CANCEL" "END_OF_MEDIUM" "SUBSTITUTE"
    "ESCAPE" "INFORMATION_SEPARATOR_FOUR" "INFORMATION_SEPARATOR_THREE" "INFORMATION_SEPARATOR_TWO"
    "INFORMATION_SEPARATOR_ONE" "Space" "EXCLAMATION_MARK" "QUOTATION_MARK" "NUMBER_SIGN" "DOLLAR_SIGN"
    "PERCENT_SIGN" "AMPERSAND" "APOSTROPHE" "LEFT_PARENTHESIS" "RIGHT_PARENTHESIS" "ASTERISK" "PLUS_SIGN"
    "COMMA" "HYPHEN-MINUS" "FULL_STOP" "SOLIDUS" "DIGIT_ZERO" "DIGIT_ONE" "DIGIT_TWO" "DIGIT_THREE" "DIGIT_FOUR"
    "DIGIT_FIVE" "DIGIT_SIX" "DIGIT_SEVEN" "DIGIT_EIGHT" "DIGIT_NINE" "COLON" "SEMICOLON" "LESS-THAN_SIGN"
    "EQUALS_SIGN" "GREATER-THAN_SIGN" "QUESTION_MARK" "COMMERCIAL_AT" "LATIN_CAPITAL_LETTER_A"
    "LATIN_CAPITAL_LETTER_B" "LATIN_CAPITAL_LETTER_C" "LATIN_CAPITAL_LETTER_D" "LATIN_CAPITAL_LETTER_E"
    "LATIN_CAPITAL_LETTER_F" "LATIN_CAPITAL_LETTER_G" "LATIN_CAPITAL_LETTER_H" "LATIN_CAPITAL_LETTER_I"
    "LATIN_CAPITAL_LETTER_J" "LATIN_CAPITAL_LETTER_K" "LATIN_CAPITAL_LETTER_L" "LATIN_CAPITAL_LETTER_M"
    "LATIN_CAPITAL_LETTER_N" "LATIN_CAPITAL_LETTER_O" "LATIN_CAPITAL_LETTER_P" "LATIN_CAPITAL_LETTER_Q"
    "LATIN_CAPITAL_LETTER_R" "LATIN_CAPITAL_LETTER_S" "LATIN_CAPITAL_LETTER_T" "LATIN_CAPITAL_LETTER_U"
    "LATIN_CAPITAL_LETTER_V" "LATIN_CAPITAL_LETTER_W" "LATIN_CAPITAL_LETTER_X" "LATIN_CAPITAL_LETTER_Y"
    "LATIN_CAPITAL_LETTER_Z" "LEFT_SQUARE_BRACKET" "REVERSE_SOLIDUS" "RIGHT_SQUARE_BRACKET" "CIRCUMFLEX_ACCENT"
    "LOW_LINE" "GRAVE_ACCENT" "LATIN_SMALL_LETTER_A" "LATIN_SMALL_LETTER_B" "LATIN_SMALL_LETTER_C"
    "LATIN_SMALL_LETTER_D" "LATIN_SMALL_LETTER_E" "LATIN_SMALL_LETTER_F" "LATIN_SMALL_LETTER_G"
    "LATIN_SMALL_LETTER_H" "LATIN_SMALL_LETTER_I" "LATIN_SMALL_LETTER_J" "LATIN_SMALL_LETTER_K"
    "LATIN_SMALL_LETTER_L" "LATIN_SMALL_LETTER_M" "LATIN_SMALL_LETTER_N" "LATIN_SMALL_LETTER_O"
    "LATIN_SMALL_LETTER_P" "LATIN_SMALL_LETTER_Q" "LATIN_SMALL_LETTER_R" "LATIN_SMALL_LETTER_S"
    "LATIN_SMALL_LETTER_T" "LATIN_SMALL_LETTER_U" "LATIN_SMALL_LETTER_V" "LATIN_SMALL_LETTER_W"
    "LATIN_SMALL_LETTER_X" "LATIN_SMALL_LETTER_Y" "LATIN_SMALL_LETTER_Z" "LEFT_CURLY_BRACKET" "VERTICAL_LINE"
    "RIGHT_CURLY_BRACKET" "TILDE" "Rubout")
  "Names/codepoints of the first 128 characters from Unicode 6.2,
except with Common Lisp's suggested changes.
For the first 32 characters ('C0 controls'), the first
'Commonly used alternative alias' is used -- note that this differs from SBCL, which uses abbreviations.")
;; I hope  being slightly different from  SBCL doesn't bite me  down the
;; road. I'll figure out a good way to add the other 21701 names later.

(defun char-name (char)
  "For consistency, I'm  using the SBCL convention of  the Unicode name,
 with spaces as underscores, for  ASCII; or their \"U+xxxx\" convention
 for names I don't know."
  (let ((code (char-code char)))
    (if (<= code 127)
        (aref +ascii-names+ code)
        (format nil #-jscl "U+~4,'0x" ; HACK until padding works right.
                #+jscl "U+~x" code))))

(defun name-char (name)
  (let ((name (string name)))
    (if (and (<= 3 (length name))
             (char-equal #\U (char name 0))
             (char= #\+ (char name 1))
             (every (lambda (ch) (digit-char-p ch 16)) (subseq name 2)))

        (code-char (parse-integer (subseq name 2) :radix 16))

        (progn (dotimes (i (length +ascii-names+))
                 (when (string-equal name (aref +ascii-names+ i))
                   (return-from name-char (code-char i))))
               nil))))
