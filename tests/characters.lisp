;; CHAR=, CHAR/=, etc.
(tests (char= (code-char 127744) (code-char 127744))
       (char= #\d #\d)
       (not (char= #\A #\a))
       (not (char= #\d #\x))
       (not (char= #\d #\D))
       (not (char/= #\d #\d))
       (char/= #\d #\x)
       (char/= #\d #\D)
       (char= #\d #\d #\d #\d)
       (not (char/= #\d #\d #\d #\d))
       (not (char= #\d #\d #\x #\d))
       (not (char/= #\d #\d #\x #\d))
       (not (char= #\d #\y #\x #\c))
       (char/= #\d #\y #\x #\c)
       (not (char= #\d #\c #\d))
       (not (char/= #\d #\c #\d))
       (char< #\d #\x)
       (char<= #\d #\x)
       (not (char< #\d #\d))
       (char<= #\d #\d)
       (char< #\a #\e #\y #\z)
       (char<= #\a #\e #\y #\z)
       (not (char< #\a #\e #\e #\y))
       (char<= #\a #\e #\e #\y)
       (char> #\e #\d)
       (char>= #\e #\d)
       (char> #\d #\c #\b #\a)
       (char>= #\d #\c #\b #\a)
       (not (char> #\d #\d #\c #\a))
       (char>= #\d #\d #\c #\a)
       (not (char> #\e #\d #\b #\c #\a))
       (not (char>= #\e #\d #\b #\c #\a))
       ;; (char> #\z #\A) =>  implementation-dependent
       ;; (char> #\Z #\a) =>  implementation-dependent
       (char-equal #\A #\a)
       ;; (stable-sort (list #\b #\A #\B #\a #\c #\C) #'char-lessp) =>  (#\A #\a #\b #\B #\c #\C)
       ;; (stable-sort (list #\b #\A #\B #\a #\c #\C) #'char<) => implementation-dependent
       
       ;; CHARACTER
       (equal #\a (character #\a))
       (equal #\a (character "a"))
       ;;  (equal #\A (character 'a))
       ;; (equal #\a (character '\a))
       ;; (expected-failure (character 65.))
       ;; (expected-failure (character 'apple))
       
       ;; CHARACTERP
       (characterp #\a)
       (characterp (code-char 65))
       (char= #\A (code-char 65))
       (not (characterp 10))
       (not (characterp "a"))
       (not (characterp "ab"))
       (characterp (code-char 127744))
       ;; hyperspec examples:
       (characterp #\a)
       (not (characterp 'a))
       (not (characterp "a"))
       (not (characterp 65.))
       ;; (characterp #\Newline)
       
       ;; ALPHA-CHAR-P
       (alpha-char-p #\a)
       (not (alpha-char-p #\5))
       ;;  (alpha-char-p #\Newline)
       
       ;; ALPHANUMERICP
       (alphanumericp #\Z)
       (alphanumericp #\9)
       ;; (not (alphanumericp #\Newline))
       (not (alphanumericp #\#))
       
       ;; DIGIT-CHAR
       (char= #\0 (digit-char 0))
       (char= #\A (digit-char 10 11))
       (null (digit-char 10 10))
       (char= #\7 (digit-char 7))
       (null (digit-char 12))
       (char= #\C (digit-char 12 16))  ;; not #\c
       (null (digit-char 6 2))
       (char= #\1 (digit-char 1 2))
       
       ;; DIGIT-CHAR-P
       (= 5 (digit-char-p #\5))
       (null (digit-char-p #\5 2))
       (null (digit-char-p #\A))
       (null (digit-char-p #\a))
       (= 10 (digit-char-p #\A 11))
       (= 10 (digit-char-p #\a 11))
       ;; (mapcar #'(lambda (radix)
       ;;              (map 'list #'(lambda (x) (digit-char-p x radix))
       ;;                   "059AaFGZ"))
       ;;          '(2 8 10 16 36))
       
       ;; GRAPHIC-CHAR-P
       (graphic-char-p #\G)
       (graphic-char-p #\#)
       ;; (graphic-char-p #\Space)
       ;; (not (graphic-char-p #\Newline))
       
       ;; STANDARD-CHAR-P
       ;; (standard-char-p #\Space)
       (standard-char-p #\~)
       
       ;; CHAR-UPCASE
       (char= #\A (char-upcase #\a))
       (char= #\A (char-upcase #\A))
       (char= (code-char 223) (char-upcase (code-char 223)))  ;; changes length, so you get the original back
       (char= (code-char 127744) (char-upcase (code-char 127744)))  ;; no upper case
       
       ;; CHAR-DOWNCASE
       (char= #\a (char-downcase #\a))
       (char= #\a (char-downcase #\A))
       (char= (code-char 223) (char-downcase (code-char 223)))  ;; already lower case
       (char= (code-char 127744) (char-downcase (code-char 127744)))  ;; no lower case
       
       ;; UPPER-CASE-P, LOWER-CASE-P, BOTH-CASE-P
       (upper-case-p #\A)
       (not (upper-case-p #\a))
       (both-case-p #\a)
       (not (both-case-p #\5))
       (not (lower-case-p #\5))
       (not (upper-case-p #\5))
       (not (upper-case-p (code-char 127744)))
       
       ;; CODE-CHAR, CHAR-CODE
       (char= #\A (code-char 65))
       (= 65 (char-code #\A))
       (= 127744 (char-code (code-char 127744)))
       
       ;; CHAR-INT
       (= (char-int #\A) (char-int #\A))  ;; can be pretty much anything, as long as it's consistent
       
       (= 1 (length (string (code-char 127744))))
       
       ;; CHAR-CODE-LIMIT
       (< 95 char-code-limit 10000000)
       
       ;; CHAR-NAME
       (string= "Space" (char-name #\ ))
       ;;  (string= "Space" (char-name #\Space))
       (string= "Page" (char-name (code-char 12)))  ;; #\Page
       (string= "LATIN_SMALL_LETTER_A" (char-name #\a))
       (string= "LATIN_CAPITAL_LETTER_A" (char-name #\A))
       
       ;; NAME-CHAR
       (char= #\  (name-char 'space))  ;; should be: #\Space
       (char= #\  (name-char "space"))  ;; #\Space
       (char= #\  (name-char "Space"))  ;; #\Space
       (let ((x (char-name #\a)))
	 (or (not x) (eql (name-char x) #\a))))
