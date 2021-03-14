;;; -*- mode:lisp; coding:utf-8 -*-

;;; describe.lisp ---

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

;;; Implementation of the `describe` standard  function


;;; js-object signature
;;; return js-object signature like [object object]
;;;
;;; also the workaround for know problem with js-object
;;; created with Object.create(Null)
;;; for example look *package-table* into prelude.js
;;; attempt print this, caused error
(defun js-object-signature (obj)
  (if (not (js-object-p obj))
      nil
      (handler-case
          (progn
            ;; legal signature
            ;;   [object Object]
            ;;   [object HTMLxxxx]
            ;;   undefined
            (#j:String obj))
        (error (msg)
          ;; js-object created with Object.create(Null) ?
          ;; legal signature 'simple-object'
          "[object Simple-object]"))))

;;; some utils

(defmacro with-pp-buffer ((var) &body body)
  `(let ((,var (make-string-output-stream)))
     ,@body))

(defmacro flush-pp-buffer (var stream)
  `(princ (get-output-stream-string ,var) ,stream))

(defun pp/builtin-baner (class &optional (stream *standard-output*))
  (format stream "Class: #<builtin-in-class ~a>~%" class))

(defun pp/terpri (stream)
  (format stream "~%"))

(defun pp/presentation (obj class stream)
  (format stream "~a~%Class: #<builtin-in-class ~a>~%" obj class))


;;; CLOS describe-object
(defgeneric describe-object (object &optional stream))

(defmethod describe-object ((object standard-object) &optional (stream *standard-output*))
  (with-pp-buffer (buf)
    (format buf "A CLOS object
             Printed representation: ~S
             Class: ~S
             Structure "
            object
            (class-of object))
    (dolist (sn (mapcar #'slot-definition-name (class-slots (class-of object))))
      (format buf "~%             ~S <- [~S]"
              sn
              (if (slot-boundp object sn)
                  (slot-value object sn)
                  "slot unbound")))
    (format buf "~%")
    (flush-pp-buffer buf stream))
  (values))

(defmethod describe-object ((object t) &optional (stream *standard-output*))
  (describe object stream)
  (values))


;;; Describe
(defgeneric describe (what &optional (stream *standard-output*)))


;;; mop-object
(defmethod describe (what &optional (stream *standard-output*))
  (with-pp-buffer (buf)
    (if (mop-object-p what)
        (describe-object what buf)
        (progn
          ;; its possible bug
          (warn "`describe` for this object yet not implemented")
          (prin1 what)
          (pp/terpri buf)))
    (flush-pp-buffer buf stream))
  (values))


;;; js-object
(defmethod describe ((obj js-object) &optional (stream *standard-output*))
  (let ((keys (#j:Object:keys obj)))
    (with-pp-buffer (buf)
      (pp/presentation obj 'js-object buf)
      (format buf "Signature: ~a~%" (js-object-signature obj))
      (if (and keys (> (length keys) 0))
          (format buf "Keys: ~a~%" (map 'list (lambda (obj) (js-to-lisp obj)) keys)))
      (flush-pp-buffer buf stream)
      (values) )))



;;; number integer
;;;
;;; Note for "toString" conversion
;;; If the numObj is negative, the sign is preserved. This is the case even if the radix is 2;
;;; the string returned is the positive binary representation of the numObj preceded by a - sign,
;;; not the two's complement of the numObj.
;;; See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
(defmethod describe ((obj integer) &optional (stream *standard-output*))
  (with-pp-buffer (buf)
    (pp/builtin-baner 'integer buf)
    (format buf "Fixnum: ~a~%" obj)
    (labels
        ((make-number (value)
           (make-new #j:Number value))
         (number-to-fixed (value &optional (digits 0))
           ((oget  (make-Number value) "toFixed") digits))
         (number-to-exponent (value)
           ((oget  (make-Number value) "toExponential")))
         (number-by-radix (value &optional (radix 10))
           ((oget (make-Number value) "toString") radix)))
      (format buf "Exponential: ~a~%" (number-to-exponent obj))
      (when (> obj 0)
        ;; not display for negative value
        ;;See note for toString conversion
        (format buf "Binary: ~a~%Decimal: ~a~%Octal: ~a~%Hex: ~a~%"
                (number-by-radix obj 2)
                (number-to-fixed obj 1)
                (number-by-radix obj 8)
                (number-by-radix obj 16))
        ;; char code restrict
        (if (<= obj 2028)
            (format buf "Character: ~a~%" (code-char obj)))
        (format buf "As time: ~a~%" (string (make-new #j:Date obj)))))
    (flush-pp-buffer buf stream)
    (values)))



;;; number float
;;; wtf: (floatp 0.0) => nil ???
;;; its bug or feature ???
(defmethod describe ((obj float) &optional (stream *standard-output*))
  (with-pp-buffer (buf)
    (pp/builtin-baner 'float stream)
    ;; note: use truncate its no good idea
    (format stream "Float: ~a~%Nearest integer: ~a~%" obj (truncate obj))
    (flush-pp-buffer buf stream))
  (values))


;;; symbol & keyword
(defmethod describe ((obj symbol) &optional (stream *standard-output*))
  (let ((pkg (symbol-package obj))
        (sym-name (symbol-name obj)))
    (with-pp-buffer (buf)
      (pp/presentation obj 'symbol buf)
      (multiple-value-bind (symbol used) (intern sym-name pkg)
        (format buf "~a in package ~a~%Print name: ~s~%" used (package-name pkg) sym-name))
      ;; check t/nil
      (when (or (eq obj 't) (eq obj 'nil))
        (format buf "Constant~%Value: ~a" obj)
        (format buf "~%Class: <#builtin-in-class ~a>~%" (if obj "T" "NULL"))
        (flush-pp-buffer buf stream)
        (return-from describe (values)))
      ;; check what symbol is macro
      (when (find obj (lexenv-function *environment*) :key #'binding-name)
        (format buf "~A names a Macro function~%" obj)
        (flush-pp-buffer buf stream)
        (return-from describe (values)))
      ;; check plist
      (let ((plist (symbol-plist obj)))
        (when plist
          (format buf "Plist: ~a~%" plist)))
      ;; check bounded
      (when (boundp obj)
        (format buf "~A names a special variable~%" (symbol-name obj))
        (let ((doc (oget obj "vardoc")))
          (when doc
            (format buf "Documentation: ~a~%" doc)))
        (format buf "Value: ~a~%" (symbol-value obj))
        (when (not (keywordp obj))
          (describe (symbol-value obj) buf)
          (flush-pp-buffer buf stream)
          (return-from describe (values)) ))
      ;; check bounded function
      (when (fboundp obj)
        (cond ((find-generic-function obj nil)
               (format buf "~A names a generic function~%" obj)
               (describe-object (find-generic-function obj) buf))
              (t
               (format buf "~A names a function~%" obj)
               (describe (fdefinition obj) buf))))
      (flush-pp-buffer buf stream) ))
  (values))

;;; character
(defmethod describe ((obj character) &optional (stream *standard-output*))
  (with-pp-buffer (buf)
    (pp/builtin-baner 'character buf)
    (format buf "Character: ~a~%Code char: ~a~%" obj (char-code obj))
    (flush-pp-buffer buf stream))
  (values))

;;; hash-table
#+nil
(defmethod describe ((obj hash-table) &optional (stream *standard-output*))
  (with-pp-buffer (buf)
    (pp/builtin-baner 'hash-table buf)
    (format buf "Size: ~a~%Hash fn: ~a~%"
            (hash-table-count obj)
            (let ((test (cadr obj)))
              (cond ((eq test #'jscl::eq-hash) 'eq)
                    ((eq test #'jscl::eql-hash) 'eql)
                    (t 'equal))))
    (flush-pp-buffer buf stream))
  (values))

(defmethod describe ((obj hash-table) &optional (stream *standard-output*))
  (with-pp-buffer (buf)
    (pp/builtin-baner 'hash-table buf)
    (format buf "Items: ~a~%Test fn: ~a~%"
            (hash-table-count obj)
            (hash-table-test obj))
    (flush-pp-buffer buf stream))
  (values))


;;; structure
(defmethod describe ((obj structure) &optional (stream *standard-output*))
  (with-pp-buffer (buf)
    (pp/presentation obj 'structure buf)
    (let* ((slots (cdr obj))
           (len (length slots)))
      (format buf "Type: ~a~%Num fields: ~a~%" (car obj) len)
      (dotimes (idx len)
        (format buf "~d: ~s~%" idx (nth idx slots)))
      (flush-pp-buffer buf stream) ))
  (values))

;;; package
(defmethod describe ((obj package) &optional (stream *standard-output*))
  (let ()
    (labels ((count-it (object)
               (let ((n 0))
                 (dolist (it (vector-to-list (#j:Object:keys object)))
                   (setq n (1+ n)))
                 n)))
      (with-pp-buffer (buf)
        (pp/presentation obj 'package buf)
        (format buf "Package name: ~a~%" (package-name obj))
        (format buf "Internal Symbols: ~a~%External Symbols: ~a~%Used: ~a~%"
                (count-it (oget obj "symbols"))
                (count-it (oget obj "exports"))
                (oget obj "use"))
        (flush-pp-buffer buf stream)))
    (values) ))

;;; function
(defmethod describe ((obj function) &optional (stream *standard-output*))
  (let ((name (oget obj "fname"))
        (doc (oget obj "docstring")))
    (with-pp-buffer (buf)
      (pp/presentation obj 'function stream)
      (format buf "Name:~a~%" (if name name "anonimous"))
      (when doc
        (format buf "Documentation: ~a~%" doc))
      (flush-pp-buffer buf stream))
    (values)))


;;; sequences
(defmethod describe ((obj string) &optional (stream *standard-output*))
  (with-pp-buffer (buf)
    (pp/presentation obj 'string buf)
    (format buf "Length: ~a~%" (length obj))
    (dotimes (idx (length obj))
      (format buf "~d: ~d~%" idx (aref obj idx)))
    (flush-pp-buffer buf stream))
  (values))


(defmethod describe ((obj vector) &optional (stream *standard-output*))
  (with-pp-buffer (buf)
    (pp/presentation obj 'vector stream)
    (format buf "Length: ~a~%" (length obj))
    (flush-pp-buffer buf stream))
  (values))


(defmethod describe ((obj array) &optional (stream *standard-output*))
  (let ((dimensions (array-dimensions obj))
        (type (array-element-type obj))
        (size (length obj)))
    (with-pp-buffer (buf)
      (pp/presentation obj 'array buf)
      (format buf "Dimensions: ~a~%Length: ~a~%Element-type: ~a~%"
              dimensions size type)
      (flush-pp-buffer buf stream))
    (values) ))

(defmethod describe :after ((obj array) &optional (stream *standard-output*))
  (if (= (length obj) 0)
      (let ((keys (#j:Object:keys obj)))
        (when (and keys (> (length keys) 0))
          (with-pp-buffer (buf)
            (format buf "Associative JS array~%Keys: ~a~%"
                    (map 'list (lambda (obj) (js-to-lisp obj)) keys))
            (flush-pp-buffer buf stream)))))
  (values) )


;;; list/cons
;;; with dirty hack for recognize list or cons
(defmethod describe ((obj list) &optional (stream *standard-output*))
  (with-pp-buffer (buf)
    (cond ((true-cons-p obj)
           (pp/presentation obj 'cons buf)
           (format buf "Car: ~s~%Cdr: ~s~%" (car obj) (cdr obj)))
          (t
           (let ((len (list-length obj)))
             (pp/presentation obj 'list buf)
             (format buf "Length: ~a~%" len)
             (dotimes (idx len)
               (format buf  "~d: ~s~%" idx (nth idx obj))))))
    (flush-pp-buffer buf stream))
  (values))

;;; EOF
