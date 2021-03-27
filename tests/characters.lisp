;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/characters.lisp!")


;; CHAR=, CHAR/=, etc.
(test (char= (code-char 127744) (code-char 127744)))
(test (char= #\d #\d))
(test (not (char= #\A #\a)))
(test (not (char= #\d #\x)))
(test (not (char= #\d #\D)))
(test (not (char/= #\d #\d)))
(test (char/= #\d #\x))
(test (char/= #\d #\D))
(test (char= #\d #\d #\d #\d))
(test (not (char/= #\d #\d #\d #\d)))
(test (not (char= #\d #\d #\x #\d)))
(test (not (char/= #\d #\d #\x #\d)))
(test (not (char= #\d #\y #\x #\c)))
(test (char/= #\d #\y #\x #\c))
(test (not (char= #\d #\c #\d)))
(test (not (char/= #\d #\c #\d)))
(test (char< #\d #\x))
(test (char<= #\d #\x))
(test (not (char< #\d #\d)))
(test (char<= #\d #\d))
(test (char< #\a #\e #\y #\z))
(test (char<= #\a #\e #\y #\z))
(test (not (char< #\a #\e #\e #\y)))
(test (char<= #\a #\e #\e #\y))
(test (char> #\e #\d))
(test (char>= #\e #\d))
(test (char> #\d #\c #\b #\a))
(test (char>= #\d #\c #\b #\a))
(test (not (char> #\d #\d #\c #\a)))
(test (char>= #\d #\d #\c #\a))
(test (not (char> #\e #\d #\b #\c #\a)))
(test (not (char>= #\e #\d #\b #\c #\a)))
;; (char> #\z #\A) =>  implementation-dependent
;; (char> #\Z #\a) =>  implementation-dependent
(test (char-equal #\A #\a))
;; (stable-sort (list #\b #\A #\B #\a #\c #\C) #'char-lessp) =>  (#\A #\a #\b #\B #\c #\C)
;; (stable-sort (list #\b #\A #\B #\a #\c #\C) #'char<) => implementation-dependent

;; CHARACTER
(test (equal #\a (character #\a)))
(test (equal #\a (character "a")))
;; (test (equal #\A (character 'a)))
;; (test (equal #\a (character '\a)))
;; (expected-failure (character 65.))
;; (expected-failure (character 'apple))

;; CHARACTERP
(test (characterp #\a))
(test (characterp (code-char 65)))
(test (char= #\A (code-char 65)))
(test (not (characterp 10)))
(test (not (characterp "a")))
(test (not (characterp "ab")))
(test (characterp (code-char 127744)))
;; hyperspec examples:
(test (characterp #\a))
(test (not (characterp 'a)))
(test (not (characterp "a")))
(test (not (characterp 65.)))
;; (test (characterp #\Newline))

;; ALPHA-CHAR-P
(test (alpha-char-p #\a))
(test (not (alpha-char-p #\5)))
;; (test (alpha-char-p #\Newline))

;; ALPHANUMERICP
(test (alphanumericp #\Z))
(test (alphanumericp #\9))
;; (test (not (alphanumericp #\Newline)))
(test (not (alphanumericp #\#)))

;; DIGIT-CHAR
(test (char= #\0 (digit-char 0)))
(test (char= #\A (digit-char 10 11)))
(test (null (digit-char 10 10)))
(test (char= #\7 (digit-char 7)))
(test (null (digit-char 12)))
(test (char= #\C (digit-char 12 16)))  ;; not #\c
(test (null (digit-char 6 2)))
(test (char= #\1 (digit-char 1 2)))

;; DIGIT-CHAR-P
(test (= 5 (digit-char-p #\5)))
(test (null (digit-char-p #\5 2)))
(test (null (digit-char-p #\A)))
(test (null (digit-char-p #\a)))
(test (= 10 (digit-char-p #\A 11)))
(test (= 10 (digit-char-p #\a 11)))
;; (mapcar #'(lambda (radix)
;;              (map 'list #'(lambda (x) (digit-char-p x radix))
;;                   "059AaFGZ"))
;;          '(2 8 10 16 36))

;; GRAPHIC-CHAR-P
(test (graphic-char-p #\G))
(test (graphic-char-p #\#))
;; (test (graphic-char-p #\Space))
;; (test (not (graphic-char-p #\Newline))

;; STANDARD-CHAR-P
;; (test (standard-char-p #\Space))
(test (standard-char-p #\~))

;; CHAR-UPCASE
(test (char= #\A (char-upcase #\a)))
(test (char= #\A (char-upcase #\A)))
(test (char= (code-char 223) (char-upcase (code-char 223))))  ;; changes length, so you get the original back
(test (char= (code-char 127744) (char-upcase (code-char 127744))))  ;; no upper case

;; CHAR-DOWNCASE
(test (char= #\a (char-downcase #\a)))
(test (char= #\a (char-downcase #\A)))
(test (char= (code-char 223) (char-downcase (code-char 223))))  ;; already lower case
(test (char= (code-char 127744) (char-downcase (code-char 127744))))  ;; no lower case

;; UPPER-CASE-P, LOWER-CASE-P, BOTH-CASE-P
(test (upper-case-p #\A))
(test (not (upper-case-p #\a)))
(test (both-case-p #\a))
(test (not (both-case-p #\5)))
(test (not (lower-case-p #\5)))
(test (not (upper-case-p #\5)))
(test (not (upper-case-p (code-char 127744))))

;; CODE-CHAR, CHAR-CODE
(test (char= #\A (code-char 65)))
(test (= 65 (char-code #\A)))
(test (= 127744 (char-code (code-char 127744))))

;; CHAR-INT
(test (= (char-int #\A) (char-int #\A)))  ;; can be pretty much anything, as long as it's consistent

(test (= 1 (length (string (code-char 127744)))))

;; CHAR-CODE-LIMIT
(test (< 95 char-code-limit 10000000))

;; CHAR-NAME
(test (string= "Space" (char-name #\ )))
;; (test (string= "Space" (char-name #\Space)))
(test (string= "Page" (char-name (code-char 12))))  ;; #\Page
(test (string= "LATIN_SMALL_LETTER_A" (char-name #\a)))
(test (string= "LATIN_CAPITAL_LETTER_A" (char-name #\A)))

;; NAME-CHAR
(test (char= #\  (name-char 'space)))  ;; should be: #\Space
(test (char= #\  (name-char "space")))  ;; #\Space
(test (char= #\  (name-char "Space")))  ;; #\Space
(test
 (let ((x (char-name #\a)))
  (or (not x) (eql (name-char x) #\a))))

;;; EOF
