;;; print.lisp ---

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

;;; Printer

;;; Return T if the string S contains characters which need to be
;;; escaped to print the symbol name, NIL otherwise.
(defun escape-symbol-name-p (s &optional uppercase)
  (let ((dots-only t))
    (dotimes (i (length s))
      (let ((ch (char s i)))
        (setf dots-only (and dots-only (char= ch #\.)))
        (when (or (terminalp ch)
                  (char= ch #\:)
                  (and uppercase (not (char= ch (char (string-upcase (string ch)) 0))))
                  (char= ch #\\)
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

(defun escape-token-p (string &optional uppercase)
  (or (potential-number-p string)
      (escape-symbol-name-p string uppercase)))

;;; Returns the token in a form that can be used for reading it back.
(defun escape-token (s &optional uppercase)
  (if (escape-token-p s uppercase)
      (let ((result "|"))
        (dotimes (i (length s))
          (let ((ch (char s i)))
            (when (or (char= ch #\|)
                      (char= ch #\\))
              (setf result (concat result "\\")))
            (setf result (concat result (string ch)))))
        (concat result "|"))
      s))

(defvar *print-escape* t)

(defun write-to-string (form)
  (cond
    ((null form) "NIL")
    ((symbolp form)
     (let ((name (symbol-name form))
           (package (symbol-package form)))
       ;; Check if the symbol is accesible from the current package. It
       ;; is true even if the symbol's home package is not the current
       ;; package, because it could be inherited.
       (if (eq form (find-symbol (symbol-name form)))
           (escape-token (symbol-name form) (not (eq package *js-package*)))
           ;; Symbol is not accesible from *PACKAGE*, so let us prefix
           ;; the symbol with the optional package or uninterned mark.
           (concat (cond
                     ((null package) "#")
                     ((eq package (find-package "KEYWORD")) "")
                     (t (escape-token (package-name package) t)))
                   ":"
                   (if (and package
                            (eq (second (multiple-value-list
                                         (find-symbol name package)))
                                :internal))
                       ":"
                       "")
                   (escape-token name (not (eq package *js-package*)))))))
    ((integerp form) (integer-to-string form))
    ((floatp form) (float-to-string form))
    ((characterp form)
     (concat "#\\"
             (case form
               (#\newline "newline")
               (#\space "space")
               (otherwise (string form)))))
    ((stringp form) (if *print-escape*
                        (concat "\"" (escape-string form) "\"")
                        form))
    ((functionp form)
     (let ((name (oget form "fname")))
       (if name
           (concat "#<FUNCTION " name ">")
           (concat "#<FUNCTION>"))))
    ((listp form)
     (concat "("
             (join-trailing (mapcar #'write-to-string (butlast form)) " ")
             (let ((last (last form)))
               (if (null (cdr last))
                   (write-to-string (car last))
                   (concat (write-to-string (car last)) " . " (write-to-string (cdr last)))))
             ")"))
    ((arrayp form)
     (concat "#" (if (zerop (length form))
                     "()"
                     (write-to-string (vector-to-list form)))))
    ((packagep form)
     (concat "#<PACKAGE " (package-name form) ">"))
    (t
     (concat "#<javascript object>"))))

(defun prin1-to-string (form)
  (let ((*print-escape* t))
    (write-to-string form)))

(defun princ-to-string (form)
  (let ((*print-escape* nil))
    (write-to-string form)))

(defun write-line (x)
  (write-string x)
  (write-string *newline*)
  x)

(defun warn (string)
  (write-string "WARNING: ")
  (write-line string))

(defun print (x)
  (write-line (prin1-to-string x))
  x)

(defun format (destination fmt &rest args)
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
               ((char= next #\%)
                (concatf res *newline*))
               (t
                (concatf res (format-special next (car arguments)))
                (pop arguments))))
            (setq res (concat res (char-to-string c))))
        (incf i)))
    (if destination
        (progn
          (write-string res)
          nil)
        res)))

(defun format-special (chr arg)
  (case chr
    (#\S (prin1-to-string arg))
    (#\a (princ-to-string arg))))
