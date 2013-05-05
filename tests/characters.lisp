;; CHAR=
(test (char= (code-char 127744) (code-char 127744)))

;; CHARACTERP
(test (characterp #\a))
(test (characterp (code-char 65)))
(test (char= #\A (code-char 65)))
(test (not (characterp 10)))
(test (not (characterp "a")))
(test (not (characterp "ab")))
(test (characterp (code-char 127744)))

;; CODE-CHAR, CHAR-CODE
(test (char= #\A (code-char 65)))
(test (= 65 (char-code #\A)))
(test (= 127744 (char-code (code-char 127744))))

;; CHAR-TO-STRING
(test (= 1 (string-length (char-to-string (code-char 127744)))))

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
