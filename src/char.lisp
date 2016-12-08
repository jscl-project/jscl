;;;; char.lisp — Character objects

(in-package :jscl)

(/debug "loading char.lisp!")

;; These comparison  functions heavily borrowed from  SBCL/CMUCL (public
;; domain).

(defun jscl/cl::char= (character &rest more-characters)
  (dolist (c more-characters t)
    (unless (eql c character) (return nil))))

(defun jscl/cl::char/= (character &rest more-characters)
  (do* ((head character (car list))
        (list more-characters (cdr list)))
       ((null list) t)
    (dolist (c list)
      (when (eql head c) (return-from jscl/cl::char/= nil)))))

(defun jscl/cl::char< (character &rest more-characters)
  (do* ((c character (car list))
        (list more-characters (cdr list)))
       ((null list) t)
    (unless (< (char-int c)
               (char-int (car list)))
      (return nil))))

(defun jscl/cl::char> (character &rest more-characters)
  (do* ((c character (car list))
        (list more-characters (cdr list)))
       ((null list) t)
    (unless (> (char-int c)
               (char-int (car list)))
      (return nil))))

(defun jscl/cl::char<= (character &rest more-characters)
  (do* ((c character (car list))
        (list more-characters (cdr list)))
       ((null list) t)
    (unless (<= (char-int c)
                (char-int (car list)))
      (return nil))))

(defun jscl/cl::char>= (character &rest more-characters)
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

(defun jscl/cl::char-equal (character &rest more-characters)
  (check-type character character)
  (do ((clist more-characters (cdr clist)))
      ((null clist) t)
    (unless (two-arg-char-equal (car clist) character)
      (return nil))))

(defun jscl/cl::char-not-equal (character &rest more-characters)
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

(defun jscl/cl::char-lessp (character &rest more-characters)
  (do* ((c character (car list))
        (list more-characters (cdr list)))
       ((null list) t)
    (unless (two-arg-char-lessp c (car list))
      (return nil))))

(defun two-arg-char-greaterp (c1 c2)
  (> (equal-char-code c1) (equal-char-code c2)))

(defun jscl/cl::char-greaterp (character &rest more-characters)
  (do* ((c character (car list))
        (list more-characters (cdr list)))
       ((null list) t)
    (unless (two-arg-char-greaterp c (car list))
      (return nil))))

(defun two-arg-char-not-greaterp (c1 c2)
  (<= (equal-char-code c1) (equal-char-code c2)))

(defun jscl/cl::char-not-greaterp (character &rest more-characters)
  (do* ((c character (car list))
        (list more-characters (cdr list)))
       ((null list) t)
    (unless (two-arg-char-not-greaterp c (car list))
      (return nil))))

(defun two-arg-char-not-lessp (c1 c2)
  (>= (equal-char-code c1) (equal-char-code c2)))

(defun jscl/cl::char-not-lessp (character &rest more-characters)
  (do* ((c character (car list))
        (list more-characters (cdr list)))
       ((null list) t)
    (unless (two-arg-char-not-lessp c (car list))
      (return nil))))

(defun jscl/cl::character (character)
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

(defun jscl/cl::alphanumericp (char)
  ;; from the hyperspec:
  (or (alpha-char-p char)
      (not (null (digit-char-p char)))))

(defun jscl/cl::graphic-char-p (char)
  ;; from Wikipedia's Unicode article.
  (let ((n (char-code char)))
    (cond
      ((< n 32) nil)                    ; C0 control codes
      ((< n 127) t)
      ((< n 160) nil)                   ; C1 control codes
      ((< n #xd800) t)
      ((< n #xe000) nil)                ; high and low surrogates
      ((< n #xfdd0) t)
      ((< n #xfffe) nil) ; upper disallowed
      ;; the following bit-patterns are never allowed
      ((= (logior n #xffff) #xfffe) nil)
      ((= (logior n #xffff) #xffff) nil)
      ((< n #x10ffff) t)           ; upper range of allowable characters
      (:else nil))))

(defun jscl/cl::standard-char-p (char)
  ;; from SBCL/CMUCL:
  (and (let ((n (char-code char)))
         (or (< 31 n 127)
             (= n 10)))))

(defun jscl/cl::upper-case-p (character)
  (char/= character (char-downcase character)))

(defun jscl/cl::lower-case-p (character)
  (char/= character (char-upcase character)))

(defun jscl/cl::both-case-p (character)
  (or (upper-case-p character) (lower-case-p character)))

(defun jscl/cl::char-int (character)
  ;; no implementation-defined character attributes
  (char-code character))

;; TODO:  review, pretty  sure this  is max  code +  1; UCS  3 allocates
;; (sparsely) through #x10ffff so this gets set to #x110000
(defconstant jscl/cl::char-code-limit #x110000)

(defvar +ascii-names+
  #("Null" "Start_Of_Heading" "Start_Of_Text" "End_Of_Text"
    "End_Of_Transmission" "Enquiry" "Acknowledge" "Bell" "Backspace"
    "Tab" "Newline" "Line_Tabulation" "Page" "Return" "Shift_Out" "Shift_In"
    "Data_Link_Escape" "Device_Control_One" "Device_Control_Two"
    "Device_Control_Three" "Device_Control_Four" "Negative_Acknowledge"
    "Synchronous_Idle" "End_Of_Transmission_Block" "Cancel" "End_Of_Medium"
    "Substitute" "Escape" "Information_Separator_Four"
    "Information_Separator_Three" "Information_Separator_Two"
    "Information_Separator_One" "Space" "Exclamation_Mark" "Quotation_Mark"
    "Number_Sign" "Dollar_Sign" "Percent_Sign" "Ampersand" "Apostrophe"
    "Left_Parenthesis" "Right_Parenthesis" "Asterisk" "Plus_Sign" "Comma"
    "Hyphen-Minus" "Full_Stop" "Solidus" "Digit_Zero" "Digit_One" "Digit_Two"
    "Digit_Three" "Digit_Four" "Digit_Five" "Digit_Six" "Digit_Seven"
    "Digit_Eight" "Digit_Nine" "Colon" "Semicolon" "Less-Than_Sign"
    "Equals_Sign" "Greater-Than_Sign" "Question_Mark" "Commercial_At"
    "Latin_Capital_Letter_A" "Latin_Capital_Letter_B" "Latin_Capital_Letter_C"
    "Latin_Capital_Letter_D" "Latin_Capital_Letter_E" "Latin_Capital_Letter_F"
    "Latin_Capital_Letter_G" "Latin_Capital_Letter_H" "Latin_Capital_Letter_I"
    "Latin_Capital_Letter_J" "Latin_Capital_Letter_K" "Latin_Capital_Letter_L"
    "Latin_Capital_Letter_M" "Latin_Capital_Letter_N" "Latin_Capital_Letter_O"
    "Latin_Capital_Letter_P" "Latin_Capital_Letter_Q" "Latin_Capital_Letter_R"
    "Latin_Capital_Letter_S" "Latin_Capital_Letter_T" "Latin_Capital_Letter_U"
    "Latin_Capital_Letter_V" "Latin_Capital_Letter_W" "Latin_Capital_Letter_X"
    "Latin_Capital_Letter_Y" "Latin_Capital_Letter_Z" "Left_Square_Bracket"
    "Reverse_Solidus" "Right_Square_Bracket" "Circumflex_Accent"
    "Low_Line" "Grave_Accent" "Latin_Small_Letter_A" "Latin_Small_Letter_B"
    "Latin_Small_Letter_C" "Latin_Small_Letter_D" "Latin_Small_Letter_E"
    "Latin_Small_Letter_F" "Latin_Small_Letter_G" "Latin_Small_Letter_H"
    "Latin_Small_Letter_I" "Latin_Small_Letter_J" "Latin_Small_Letter_K"
    "Latin_Small_Letter_L" "Latin_Small_Letter_M" "Latin_Small_Letter_N"
    "Latin_Small_Letter_O" "Latin_Small_Letter_P" "Latin_Small_Letter_Q"
    "Latin_Small_Letter_R" "Latin_Small_Letter_S" "Latin_Small_Letter_T"
    "Latin_Small_Letter_U" "Latin_Small_Letter_V" "Latin_Small_Letter_W"
    "Latin_Small_Letter_X" "Latin_Small_Letter_Y" "Latin_Small_Letter_Z"
    "Left_Curly_Bracket" "Vertical_Line" "Right_Curly_Bracket" "Tilde"
    "Rubout")
  "Names/codepoints of the first 128 characters from Unicode 6.2,
except with Common Lisp's suggested changes.
For the first 32 characters ('C0 controls'), the first
'Commonly used alternative alias' is used -- note that this differs from SBCL, which uses abbreviations.")
;; I hope  being slightly different from  SBCL doesn't bite me  down the
;; road. I'll figure out a good way to add the other 21701 names later.

(defun jscl/cl::char-name (char)
  "For consistency, I'm  using the SBCL convention of  the Unicode name,
 with spaces as underscores, for  ASCII; or their \"U+xxxx\" convention
 for names I don't know."
  (let ((code (char-code char)))
    (if (<= code 127)
        (aref +ascii-names+ code)
        (format nil "U+~4,'0x" code))))

(defun jscl/cl::name-char (name)
  (let ((name (string name)))
    (if (and (<= 3 (length name))
             (char-equal #\U (char name 0))
             (char= #\+ (char name 1))
             (every (lambda (ch) (digit-char-p ch 16)) (subseq name 2)))

        (code-char (parse-integer (subseq name 2) :radix 16))

        (progn (dotimes (i (length +ascii-names+))
                 (when (string-equal name (aref +ascii-names+ i))
                   (return-from jscl/cl::name-char (code-char i))))
               nil))))
