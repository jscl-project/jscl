;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/strings.lisp!")

(defvar *str* "hello world")
(defvar *str2* "h")

(test (stringp *str*))
(test (not (characterp *str*)))
(test (not (integerp *str*)))

(test (stringp *str2*))
(test (not (characterp *str2*)))
(test (not (integerp *str2*)))

(test (= (length "hello world") 11))
(test (arrayp "hello world"))

(test (string= "h" (string #\h)))
(test (string= "foo" "foo"))
(test (not (string= "Foo" "foo")))
(test (not (string= "foo" "foox")))

(test (= (string< "one" "two") 0))
(test (= (string< "oob" "ooc") 2))
(test (null (string< "" "")))
(test (null (string< "a" "")))
(test (= (string< "" "a") 0))
(test (= (string< "aaa" "aaaaa") 3))

;;; BUG: The compiler will macroexpand the forms below (char str N)
;;; will expand to internal SBCL code instead of our (setf char). It
;;; is because macrodefinitions during bootstrapping are not included
;;; in the host's environment. It should, but we have to think how to
;;; avoid conflicts (package renaming??)

;;; note: Fixed ?. @vkm
;; (let ((str "hello"))
;;   (setf (char str 0) #\X)
;;   (setf (char str 4) #\X)
;;   (test (string= str "XellX")))

;; ----------------------------------------
;; The following tests in this file were derived from the file "must-string.lisp",
;; part of SACLA <http://homepage1.nifty.com/bmonkey/lisp/sacla/>.
;; The origial copyright notice appears below:

;; Copyright (C) 2002-2004, Yuji Minejima <ggb01164@nifty.ne.jp>
;; ALL RIGHTS RESERVED.
;;
;; $Id: must-string.lisp,v 1.7 2004/02/20 07:23:42 yuji Exp $
;; 
;; Redistribution and use in source and binary forms, with or without
;; modification, are permitted provided that the following conditions
;; are met:
;; 
;;  * Redistributions of source code must retain the above copyright
;;    notice, this list of conditions and the following disclaimer.
;;  * Redistributions in binary form must reproduce the above copyright
;;    notice, this list of conditions and the following disclaimer in
;;    the documentation and/or other materials provided with the
;;    distribution.
;; 
;; THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
;; "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
;; LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
;; A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
;; OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
;; SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
;; LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
;; DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
;; THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
;; (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
;; OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

;; JSCL: no SIMPLE-STRING-P yet, so disabled
;; (test (simple-string-p ""))
;; (test (simple-string-p "abc"))
;; (test (not (simple-string-p 'not-a-string)))
;; (test (let ((str (make-array 3 :element-type 'character :fill-pointer t)))
;;   (if (not (simple-vector-p str))
;;       (not (simple-string-p str))
;;     (simple-string-p str))))

(test (char= (char "abc" 0) #\a))
(test (char= (char "abc" 1) #\b))
(test (char= (char "abc" 2) #\c))
;; JSCL: no SCHAR yet, so disabled
;; (test (char= (schar "abc" 0) #\a))
;; (test (char= (schar "abc" 1) #\b))
;; (test (char= (schar "abc" 2) #\c))
;; JSCL: no :FILL-POINTER yet, so disabled
;; (test (let ((str (make-array 10
;;                     :element-type 'character
;;                     :fill-pointer 3
;;                     :initial-contents "0123456789")))
;;   (and (string= str "012")
;;        (char= (char str 3) #\3)
;;        (char= (char str 4) #\4)
;;        (char= (char str 5) #\5)
;;        (char= (char str 6) #\6)
;;        (char= (char str 7) #\7)
;;        (char= (char str 8) #\8)
;;        (char= (char str 9) #\9)
;;        (char= (vector-pop str) #\2))))

(test (string= (string "") ""))
(test (string= (string "abc") "abc"))
(test (string= (string "a") "a"))
(test (string= (string 'abc) "ABC"))
(test (string= (string 'a) "A"))
(test (string= (string #\a) "a"))


(test (string= (string-upcase "abcde") "ABCDE"))
(test (string= (string-upcase "Dr. Livingston, I presume?")
         "DR. LIVINGSTON, I PRESUME?"))
(test (string= (string-upcase "Dr. Livingston, I presume?" :start 6 :end 10)
         "Dr. LiVINGston, I presume?"))
(test (string= (string-upcase 'Kludgy-HASH-Search) "KLUDGY-HASH-SEARCH"))
(test (string= (string-upcase "abcde" :start 2 :end nil) "abCDE"))

(test (string= (string-downcase "Dr. Livingston, I presume?")
         "dr. livingston, i presume?"))
(test (string= (string-downcase 'Kludgy-HASH-Search) "kludgy-hash-search"))
(test (string= (string-downcase "A FOOL" :start 2 :end nil) "A fool"))
(test (string= (string-capitalize "elm 13c arthur;fig don't")
         "Elm 13c Arthur;Fig Don'T"))
(test (string= (string-capitalize " hello ") " Hello "))
(test (string= (string-capitalize
          "occlUDeD cASEmenTs FOreSTAll iNADVertent DEFenestraTION")
         "Occluded Casements Forestall Inadvertent Defenestration"))
(test (string= (string-capitalize 'kludgy-hash-search) "Kludgy-Hash-Search"))
(test (string= (string-capitalize "DON'T!") "Don'T!"))    ;not "Don't!"
(test (string= (string-capitalize "pipe 13a, foo16c") "Pipe 13a, Foo16c"))
(test (string= (string-capitalize "a fool" :start 2 :end nil) "a Fool"))

(test (let ((str (copy-seq "0123ABCD890a")))
  (and (string= (nstring-downcase str :start 5 :end 7) "0123AbcD890a")
       (string= str "0123AbcD890a"))))

(test (let* ((str0 (copy-seq "abcde"))
       (str  (nstring-upcase str0)))
  (and (eq str0 str)
       (string= str "ABCDE"))))
(test (let* ((str0 (copy-seq "Dr. Livingston, I presume?"))
       (str  (nstring-upcase str0)))
  (and (eq str0 str)
       (string= str "DR. LIVINGSTON, I PRESUME?"))))
(test (let* ((str0 (copy-seq "Dr. Livingston, I presume?"))
       (str  (nstring-upcase str0 :start 6 :end 10)))
  (and (eq str0 str)
       (string= str "Dr. LiVINGston, I presume?"))))

(test (let* ((str0 (copy-seq "abcde"))
       (str (nstring-upcase str0 :start 2 :end nil)))
  (string= str "abCDE")))



(test (let* ((str0 (copy-seq "Dr. Livingston, I presume?"))
       (str  (nstring-downcase str0)))
  (and (eq str0 str)
       (string= str "dr. livingston, i presume?"))))
(test (let* ((str0 (copy-seq "ABCDE"))
       (str (nstring-downcase str0 :start 2 :end nil)))
  (string= str "ABcde")))

(test (let* ((str0 (copy-seq "elm 13c arthur;fig don't"))
       (str  (nstring-capitalize str0)))
  (and (eq str0 str)
       (string= str "Elm 13c Arthur;Fig Don'T"))))

(test (let* ((str0 (copy-seq " hello "))
       (str  (nstring-capitalize str0)))
  (and (eq str0 str)
       (string= str " Hello "))))
(test (let* ((str0 (copy-seq
              "occlUDeD cASEmenTs FOreSTAll iNADVertent DEFenestraTION"))
       (str  (nstring-capitalize str0)))
  (and (eq str0 str)
       (string= str
                "Occluded Casements Forestall Inadvertent Defenestration"))))
(test (let* ((str0 (copy-seq "DON'T!"))
       (str  (nstring-capitalize str0)))
  (and (eq str0 str)
       (string= str "Don'T!"))))    ;not "Don't!"
(test (let* ((str0 (copy-seq "pipe 13a, foo16c"))
       (str  (nstring-capitalize str0)))
  (and (eq str0 str)
       (string= str "Pipe 13a, Foo16c"))))
(test (let* ((str0 (copy-seq "a fool"))
       (str (nstring-capitalize str0 :start 2 :end nil)))
  (string= str "a Fool")))



(test (string= (string-trim "abc" "abcaakaaakabcaaa") "kaaak"))
;; (test (string= (string-trim '(#\Space #\Tab #\Newline) " garbanzo beans
;;         ") "garbanzo beans"))
(test (string= (string-trim " (*)" " ( *three (silly) words* ) ")
         "three (silly) words"))
(test (string= (string-left-trim "abc" "labcabcabc") "labcabcabc"))
(test (string= (string-left-trim " (*)" " ( *three (silly) words* ) ")
         "three (silly) words* ) "))
(test (string= (string-right-trim " (*)" " ( *three (silly) words* ) ") 
         " ( *three (silly) words"))
(test (string= (string-trim "ABC" "abc") "abc"))
(test (string= (string-trim "AABBCC" "abc") "abc"))
(test (string= (string-trim "" "abc") "abc"))
(test (string= (string-trim "ABC" "") ""))
(test (string= (string-trim "cba" "abc") ""))
(test (string= (string-trim "cba" "abccba") ""))
(test (string= (string-trim "ccbbba" "abccba") ""))
(test (string= (string-trim "cba" "abcxabc") "x"))
(test (string= (string-trim "xyz" "xxyabcxyyz") "abc"))
(test (string= (string-trim "CBA" 'abcxabc) "X"))
(test (string= (string-trim "a" #\a) ""))


(test (string= (string-left-trim "ABC" "abc") "abc"))
(test (string= (string-left-trim "" "abc") "abc"))
(test (string= (string-left-trim "ABC" "") ""))
(test (string= (string-left-trim "cba" "abc") ""))
(test (string= (string-left-trim "cba" "abccba") ""))
(test (string= (string-left-trim "cba" "abcxabc") "xabc"))
(test (string= (string-left-trim "xyz" "xxyabcxyz") "abcxyz"))
(test (string= (string-left-trim "CBA" 'abcxabc) "XABC"))
(test (string= (string-left-trim "a" #\a) ""))

(test (string= (string-right-trim "ABC" "abc") "abc"))
(test (string= (string-right-trim "" "abc") "abc"))
(test (string= (string-right-trim "ABC" "") ""))
(test (string= (string-right-trim "cba" "abc") ""))
(test (string= (string-right-trim "cba" "abccba") ""))
(test (string= (string-right-trim "cba" "abcxabc") "abcx"))
(test (string= (string-right-trim "xyz" "xxyabcxyz") "xxyabc"))
(test (string= (string-right-trim "CBA" 'abcxabc) "ABCX"))
(test (string= (string-right-trim "a" #\a) ""))



(test (string= (string "already a string") "already a string"))
(test (string= (string 'elm) "ELM"))
(test (string=  (string #\c) "c"))


(test (string= "foo" "foo"))
(test (not (string= "foo" "Foo")))
(test (not (string= "foo" "bar")))
(test (string= "together" "frog" :start1 1 :end1 3 :start2 2))
(test (string-equal "foo" "Foo"))
(test (string= "abcd" "01234abcd9012" :start2 5 :end2 9))
(test (eql (string< "aaaa" "aaab") 3))
(test (eql (string>= "aaaaa" "aaaa") 4))
(test (eql (string-not-greaterp "Abcde" "abcdE") 5))
(test (eql (string-lessp "012AAAA789" "01aaab6"
                   :start1 3 :end1 7
                   :start2 2 :end2 6) 6))
(test (not (string-not-equal "AAAA" "aaaA")))


(test (string= "" ""))
;; JSCL: making an array of BASE-CHAR doesn't make a string, yet
;; (test (string= (make-array 0 :element-type 'character)
;;       (make-array 0 :element-type 'base-char)))
(test (not (string= "abc" "")))
(test (not (string= "" "abc")))
(test (not (string= "A" "a")))
(test (string= "abc" "xyz" :start1 3 :start2 3))
(test (string= "abc" "xyz" :start1 1 :end1 1 :start2 0 :end2 0))
(test (string= "axyza" "xyz" :start1 1 :end1 4))
(test (string= "axyza" "xyz" :start1 1 :end1 4 :start2 0 :end2 nil))
(test (string= "abxyz" "xyabz" :end1 2 :start2 2 :end2 4))
(test (not (string= "love" "hate")))
(test (string= 'love 'love))
(test (not (string= 'love "hate")))
(test (string= #\a #\a))


(test (not (string/= "" "")))
;; (test (not (string/= (make-array 0 :element-type 'character)
;;             (make-array 0 :element-type 'base-char))))
(test (eql (string/= "abc" "") 0))
(test (eql (string/= "" "abc") 0))
(test (eql (string/= "A" "a") 0))
(test (not (string/= "abc" "xyz" :start1 3 :start2 3)))
(test (not (string/= "abc" "xyz" :start1 1 :end1 1 :start2 0 :end2 0)))
(test (not (string/= "axyza" "xyz" :start1 1 :end1 4)))
(test (not (string/= "axyza" "xyz" :start1 1 :end1 4 :start2 0 :end2 nil)))
(test (not (string/= "abxyz" "xyabz" :end1 2 :start2 2 :end2 4)))
(test (eql (string/= "love" "hate") 0))
(test (eql (string/= "love" "loVe") 2))
(test (not (string/= "life" "death" :start1 3 :start2 1 :end2 2)))
(test (eql (string/= "abcxyz" "ABCxyZ" :start1 3 :start2 3) 5))
(test (eql (string/= "abcxyz" "ABCxyZ" :start1 3 :end1 nil :start2 3 :end2 nil) 5))
(test (eql (string/= "abcxyz" "ABCxyZ" :end1 nil :start2 3 :end2 3) 0))
(test (eql (string/= "abc" "abcxyz") 3))
(test (eql (string/= "abcxyz" "abc") 3))
(test (eql (string/= "abcxyz" "") 0))
(test (eql (string/= "AbcDef" "cdef" :start1 2) 3))
(test (eql (string/= "cdef" "AbcDef" :start2 2) 1))
(test (= (string/= 'love "hate") 0))
(test (not (string/= 'love 'love)))
(test (not (string/= #\a #\a)))
(test (= (string/= #\a #\b) 0))

(test (not (string< "" "")))
(test (not (string< "dog" "dog")))
(test (not (string< " " " ")))
(test (not (string< "abc" "")))
(test (eql (string< "" "abc") 0))
(test (eql (string< "ab" "abc") 2))
(test (not (string< "abc" "ab")))
(test (eql (string< "aaa" "aba") 1))
(test (not (string< "aba" "aaa")))
(test (not (string< "my cat food" "your dog food" :start1 6 :start2 8)))
(test (not (string< "cat food 2 dollars" "dog food 3 dollars"
              :start1 3 :end1 9 :start2 3 :end2 9)))
(test (eql (string< "xyzabc" "abcd" :start1 3) 6))
(test (eql (string< "abc" "abc" :end1 1) 1))
(test (eql (string< "xyzabc" "abc" :start1 3 :end1 5) 5))
(test (eql (string< "xyz" "abcxyzXYZ" :start2 3) 3))
(test (not (string< "abc" "abcxyz" :end2 3)))
(test (eql (string< "xyz" "abcxyz" :end1 2 :start2 3) 2))
(test (not (string< "xyzabc" "abcdef" :start1 3 :end2 3)))
(test (eql (string< "aaaa" "z") 0))
(test (eql (string< "pppTTTaTTTqqq" "pTTTxTTT" :start1 3 :start2 1) 6))
(test (eql (string< "pppTTTaTTTqqq" "pTTTxTTT"
              :start1 6 :end1 7
              :start2 4 :end2 5) 6))
;; (test (not (string< (make-array 0 :element-type 'character)
;;            (make-array 0 :element-type 'base-char))))
(test (not (string< 'love 'hate)))
(test (= (string< 'peace 'war) 0))
(test (not (string< 'love 'love)))
(test (not (string< #\a #\a)))
(test (= (string< #\a #\b) 0))


(test (not (string> "" "")))
(test (not (string> "dog" "dog")))
(test (not (string> " " " ")))
(test (eql (string> "abc" "") 0))
(test (not (string> "" "abc")))
(test (not (string> "ab" "abc")))
(test (eql (string> "abc" "ab") 2))
(test (eql (string> "aba" "aaa") 1))
(test (not (string> "aaa" "aba")))
(test (not (string> "my cat food" "your dog food" :start1 6 :start2 8)))
(test (not (string> "cat food 2 dollars" "dog food 3 dollars"
              :start1 3 :end1 9 :start2 3 :end2 9)))
(test (eql (string> "xyzabcde" "abcd" :start1 3) 7))
(test (not (string> "abc" "abc" :end1 1)))
(test (eql (string> "xyzabc" "a" :start1 3 :end1 5) 4))
(test (eql (string> "xyzXYZ" "abcxyz" :start2 3) 3))
(test (eql (string> "abcxyz" "abcxyz" :end2 3) 3))
(test (not (string> "xyzXYZ" "abcxyz" :end1 2 :start2 3)))
(test (not (string> "xyzabc" "abcdef" :start1 3 :end2 3)))
(test (eql (string> "z" "aaaa") 0))
(test (eql (string> "pTTTxTTTqqq" "pppTTTaTTT" :start1 1 :start2 3) 4))
(test (eql (string> "pppTTTxTTTqqq" "pTTTaTTT"
              :start1 6 :end1 7
              :start2 4 :end2 5) 6))
;; (test (not (string> (make-array 0 :element-type 'character)
;;            (make-array 0 :element-type 'base-char))))
(test (= (string> 'love 'hate) 0))
(test (not (string> 'peace 'war)))
(test (not (string> 'love 'love)))
(test (not (string> #\a #\a)))
(test (not (string> #\a #\b)))
(test (= (string> #\z #\a) 0))


(test (eql (string<= "" "") 0))
(test (eql (string<= "dog" "dog") 3))
(test (eql (string<= " " " ") 1))
(test (not (string<= "abc" "")))
(test (eql (string<= "ab" "abc") 2))
(test (eql (string<= "aaa" "aba") 1))
(test (not (string<= "aba" "aaa")))
(test (eql (string<= "my cat food" "your dog food" :start1 6 :start2 8) 11))
(test (eql (string<= "cat food 2 dollars" "dog food 3 dollars"
               :start1 3 :end1 9 :start2 3 :end2 9) 9))
(test (eql (string<= "xyzabc" "abcd" :start1 3) 6))
(test (eql (string<= "abc" "abc" :end1 1) 1))
(test (eql (string<= "xyzabc" "abc" :start1 3 :end1 5) 5))
(test (eql (string<= "xyz" "abcxyzXYZ" :start2 3) 3))
(test (eql (string<= "abc" "abcxyz" :end2 3) 3))
(test (eql (string<= "xyz" "abcxyz" :end1 2 :start2 3) 2))
(test (eql (string<= "xyzabc" "abcdef" :start1 3 :end2 3) 6))
(test (eql (string<= "aaaa" "z") 0))
(test (eql (string<= "pppTTTaTTTqqq" "pTTTxTTT" :start1 3 :start2 1) 6))
(test (eql (string<= "pppTTTaTTTqqq" "pTTTxTTT"
               :start1 6 :end1 7
               :start2 4 :end2 5) 6))
;; (test (eql (string<= (make-array 0 :element-type 'character)
;;             (make-array 0 :element-type 'base-char)) 0))
(test (not (string<= 'love 'hate)))
(test (= (string<= 'peace 'war) 0))
(test (= (string<= 'love 'love) 4))
(test (= (string<= #\a #\a) 1))
(test (= (string<= #\a #\b) 0))
(test (not (string<= #\z #\a)))


(test (eql (string>= "" "") 0))
(test (eql (string>= "dog" "dog") 3))
(test (eql (string>= " " " ") 1))
(test (eql (string>= "abc" "") 0))
(test (not (string>= "" "abc")))
(test (not (string>= "ab" "abc")))
(test (eql (string>= "abc" "ab") 2))
(test (eql (string>= "aba" "aaa") 1))
(test (not (string>= "aaa" "aba")))
(test (eql (string>= "my cat food" "your dog food" :start1 6 :start2 8) 11))
(test (eql (string>= "cat food 2 dollars" "dog food 3 dollars"
               :start1 3 :end1 9 :start2 3 :end2 9) 9))
(test (eql (string>= "xyzabcde" "abcd" :start1 3) 7))
(test (not (string>= "abc" "abc" :end1 1)))
(test (eql (string>= "xyzabc" "a" :start1 3 :end1 5) 4))
(test (eql (string>= "xyzXYZ" "abcxyz" :start2 3) 3))
(test (eql (string>= "abcxyz" "abcxyz" :end2 3) 3))
(test (not (string>= "xyzXYZ" "abcxyz" :end1 2 :start2 3)))
(test (eql (string>= "xyzabc" "abcdef" :start1 3 :end2 3) 6))
(test (eql (string>= "z" "aaaa") 0))
(test (eql (string>= "pTTTxTTTqqq" "pppTTTaTTT" :start1 1 :start2 3) 4))
(test (eql (string>= "pppTTTxTTTqqq" "pTTTaTTT"
               :start1 6 :end1 7
               :start2 4 :end2 5) 6))
;; (test (eql (string>= (make-array 0 :element-type 'character)
;;             (make-array 0 :element-type 'base-char)) 0))
(test (= (string>= 'love 'hate) 0))
(test (not (string>= 'peace 'war)))
(test (= (string>= 'love 'love) 4))
(test (= (string>= #\a #\a) 1))
(test (not (string>= #\a #\b)))
(test (= (string>= #\z #\a) 0))




(test (string-equal "" ""))
;; (test (string-equal (make-array 0 :element-type 'character)
;;            (make-array 0 :element-type 'base-char)))
(test (not (string-equal "abc" "")))
(test (not (string-equal "" "abc")))
(test (string-equal "A" "a"))
(test (string-equal "abc" "xyz" :start1 3 :start2 3))
(test (string-equal "abc" "xyz" :start1 1 :end1 1 :start2 0 :end2 0))
(test (string-equal "axyza" "xyz" :start1 1 :end1 4))
(test (string-equal "axyza" "xyz" :start1 1 :end1 4 :start2 0 :end2 nil))
(test (string-equal "abxyz" "xyabz" :end1 2 :start2 2 :end2 4))
(test (not (string-equal "love" "hate")))
(test (string-equal "xyz" "XYZ"))
(test (not (string-equal 'love 'hate)))
(test (not (string-equal 'peace 'war)))
(test (string-equal 'love 'love))
(test (string-equal #\a #\a))
(test (not (string-equal #\a #\b)))
(test (not (string-equal #\z #\a)))


(test (not (string-not-equal "" "")))
;; (test (not (string-not-equal (make-array 0 :element-type 'character)
;;                     (make-array 0 :element-type 'base-char))))
(test (eql (string-not-equal "abc" "") 0))
(test (eql (string-not-equal "" "abc") 0))
(test (not (string-not-equal "A" "a")))
(test (not (string-not-equal "abc" "xyz" :start1 3 :start2 3)))
(test (not (string-not-equal "abc" "xyz" :start1 1 :end1 1 :start2 0 :end2 0)))
(test (not (string-not-equal "axyza" "xyz" :start1 1 :end1 4)))
(test (not (string-not-equal "axyza" "xyz" :start1 1 :end1 4 :start2 0 :end2 nil)))
(test (not (string-not-equal "abxyz" "xyabz" :end1 2 :start2 2 :end2 4)))
(test (eql (string-not-equal "love" "hate") 0))
(test (not (string-not-equal "love" "loVe")))
(test (not (string-not-equal "life" "death" :start1 3 :start2 1 :end2 2)))
(test (not (string-not-equal "abcxyz" "ABCxyZ" :start1 3 :start2 3)))
(test (not (string-not-equal "abcxyz" "ABCxyZ" :start1 3 :end1 nil :start2 3 :end2 nil)))
(test (eql (string-not-equal "abcxyz" "ABCxyZ" :end1 nil :start2 3 :end2 3) 0))
(test (eql (string-not-equal "abc" "abcxyz") 3))
(test (eql (string-not-equal "abcxyz" "abc") 3))
(test (eql (string-not-equal "abcxyz" "") 0))
(test (not (string-not-equal "AbcDef" "cdef" :start1 2)))
(test (not (string-not-equal "cdef" "AbcDef" :start2 2)))
(test (not (string-not-equal "ABC" "abc")))
(test (= (string-not-equal 'love 'hate) 0))
(test (= (string-not-equal 'peace 'war) 0))
(test (not (string-not-equal 'love 'love)))
(test (not (string-not-equal #\a #\a)))
(test (= (string-not-equal #\a #\b) 0))
(test (= (string-not-equal #\z #\a) 0))


(test (not (string-lessp "" "")))
(test (not (string-lessp "dog" "dog")))
(test (not (string-lessp " " " ")))
(test (not (string-lessp "abc" "")))
(test (eql (string-lessp "" "abc") 0))
(test (eql (string-lessp "ab" "abc") 2))
(test (not (string-lessp "abc" "ab")))
(test (eql (string-lessp "aaa" "aba") 1))
(test (not (string-lessp "aba" "aaa")))
(test (not (string-lessp "my cat food" "your dog food" :start1 6 :start2 8)))
(test (not (string-lessp "cat food 2 dollars" "dog food 3 dollars"
                   :start1 3 :end1 9 :start2 3 :end2 9)))
(test (eql (string-lessp "xyzabc" "abcd" :start1 3) 6))
(test (eql (string-lessp "abc" "abc" :end1 1) 1))
(test (eql (string-lessp "xyzabc" "abc" :start1 3 :end1 5) 5))
(test (eql (string-lessp "xyz" "abcxyzXYZ" :start2 3) 3))
(test (not (string-lessp "abc" "abcxyz" :end2 3)))
(test (eql (string-lessp "xyz" "abcxyz" :end1 2 :start2 3) 2))
(test (not (string-lessp "xyzabc" "abcdef" :start1 3 :end2 3)))
(test (eql (string-lessp "aaaa" "z") 0))
(test (eql (string-lessp "pppTTTaTTTqqq" "pTTTxTTT" :start1 3 :start2 1) 6))
(test (eql (string-lessp "pppTTTaTTTqqq" "pTTTxTTT"
                   :start1 6 :end1 7
                   :start2 4 :end2 5) 6))
;; (test (not (string-lessp (make-array 0 :element-type 'character)
;;                 (make-array 0 :element-type 'base-char))))
(test (and (not (string-lessp "abc" "ABC"))
     (not (string-lessp "ABC" "abc"))))
(test (not (string-lessp 'love 'hate)))
(test (= (string-lessp 'peace 'war) 0))
(test (not (string-lessp 'love 'love)))
(test (not (string-lessp #\a #\a)))
(test (= (string-lessp #\a #\b) 0))
(test (not (string-lessp #\z #\a)))


(test (not (string-greaterp "" "")))
(test (not (string-greaterp "dog" "dog")))
(test (not (string-greaterp " " " ")))
(test (eql (string-greaterp "abc" "") 0))
(test (not (string-greaterp "" "abc")))
(test (not (string-greaterp "ab" "abc")))
(test (eql (string-greaterp "abc" "ab") 2))
(test (eql (string-greaterp "aba" "aaa") 1))
(test (not (string-greaterp "aaa" "aba")))
(test (not (string-greaterp "my cat food" "your dog food" :start1 6 :start2 8)))
(test (not (string-greaterp "cat food 2 dollars" "dog food 3 dollars"
                      :start1 3 :end1 9 :start2 3 :end2 9)))
(test (eql (string-greaterp "xyzabcde" "abcd" :start1 3) 7))
(test (not (string-greaterp "abc" "abc" :end1 1)))
(test (eql (string-greaterp "xyzabc" "a" :start1 3 :end1 5) 4))
(test (eql (string-greaterp "xyzXYZ" "abcxyz" :start2 3) 3))
(test (eql (string-greaterp "abcxyz" "abcxyz" :end2 3) 3))
(test (not (string-greaterp "xyzXYZ" "abcxyz" :end1 2 :start2 3)))
(test (not (string-greaterp "xyzabc" "abcdef" :start1 3 :end2 3)))
(test (eql (string-greaterp "z" "aaaa") 0))
(test (eql (string-greaterp "pTTTxTTTqqq" "pppTTTaTTT" :start1 1 :start2 3) 4))
(test (eql (string-greaterp "pppTTTxTTTqqq" "pTTTaTTT"
                      :start1 6 :end1 7
                      :start2 4 :end2 5) 6))
;; (test (not (string-greaterp (make-array 0 :element-type 'character)
;;                    (make-array 0 :element-type 'base-char))))
(test (and (not (string-greaterp "abc" "ABC"))
     (not (string-greaterp "ABC" "abc"))))
(test (= (string-greaterp 'love 'hate) 0))
(test (not (string-greaterp 'peace 'war)))
(test (not (string-greaterp 'love 'love)))
(test (not (string-greaterp #\a #\a)))
(test (not (string-greaterp #\a #\b)))
(test (= (string-greaterp #\z #\a) 0))


(test (eql (string-not-greaterp "" "") 0))
(test (eql (string-not-greaterp "dog" "dog") 3))
(test (eql (string-not-greaterp " " " ") 1))
(test (not (string-not-greaterp "abc" "")))
(test (eql (string-not-greaterp "ab" "abc") 2))
(test (eql (string-not-greaterp "aaa" "aba") 1))
(test (not (string-not-greaterp "aba" "aaa")))
(test (eql (string-not-greaterp "my cat food" "your dog food" :start1 6 :start2 8) 11))
(test (eql (string-not-greaterp "cat food 2 dollars" "dog food 3 dollars"
                          :start1 3 :end1 9 :start2 3 :end2 9) 9))
(test (eql (string-not-greaterp "xyzabc" "abcd" :start1 3) 6))
(test (eql (string-not-greaterp "abc" "abc" :end1 1) 1))
(test (eql (string-not-greaterp "xyzabc" "abc" :start1 3 :end1 5) 5))
(test (eql (string-not-greaterp "xyz" "abcxyzXYZ" :start2 3) 3))
(test (eql (string-not-greaterp "abc" "abcxyz" :end2 3) 3))
(test (eql (string-not-greaterp "xyz" "abcxyz" :end1 2 :start2 3) 2))
(test (eql (string-not-greaterp "xyzabc" "abcdef" :start1 3 :end2 3) 6))
(test (eql (string-not-greaterp "aaaa" "z") 0))
(test (eql (string-not-greaterp "pppTTTaTTTqqq" "pTTTxTTT" :start1 3 :start2 1) 6))
(test (eql (string-not-greaterp "pppTTTaTTTqqq" "pTTTxTTT"
                          :start1 6 :end1 7
                          :start2 4 :end2 5) 6))
;; (test (eql (string-not-greaterp (make-array 0 :element-type 'character)
;;                        (make-array 0 :element-type 'base-char)) 0))
(test (and (eql (string-not-greaterp "abc" "ABC") 3)
     (eql (string-not-greaterp "ABC" "abc") 3)))
(test (not (string-not-greaterp 'love 'hate)))
(test (= (string-not-greaterp 'peace 'war) 0))
(test (= (string-not-greaterp 'love 'love) 4))
(test (= (string-not-greaterp #\a #\a) 1))
(test (= (string-not-greaterp #\a #\b) 0))
(test (not (string-not-greaterp #\z #\a)))


(test (eql (string-not-lessp "" "") 0))
(test (eql (string-not-lessp "dog" "dog") 3))
(test (eql (string-not-lessp " " " ") 1))
(test (eql (string-not-lessp "abc" "") 0))
(test (not (string-not-lessp "" "abc")))
(test (not (string-not-lessp "ab" "abc")))
(test (eql (string-not-lessp "abc" "ab") 2))
(test (eql (string-not-lessp "aba" "aaa") 1))
(test (not (string-not-lessp "aaa" "aba")))
(test (eql (string-not-lessp "my cat food" "your dog food" :start1 6 :start2 8) 11))
(test (eql (string-not-lessp "cat food 2 dollars" "dog food 3 dollars"
                       :start1 3 :end1 9 :start2 3 :end2 9) 9))
(test (eql (string-not-lessp "xyzabcde" "abcd" :start1 3) 7))
(test (not (string-not-lessp "abc" "abc" :end1 1)))
(test (eql (string-not-lessp "xyzabc" "a" :start1 3 :end1 5) 4))
(test (eql (string-not-lessp "xyzXYZ" "abcxyz" :start2 3) 3))
(test (eql (string-not-lessp "abcxyz" "abcxyz" :end2 3) 3))
(test (not (string-not-lessp "xyzXYZ" "abcxyz" :end1 2 :start2 3)))
(test (eql (string-not-lessp "xyzabc" "abcdef" :start1 3 :end2 3) 6))
(test (eql (string-not-lessp "z" "aaaa") 0))
(test (eql (string-not-lessp "pTTTxTTTqqq" "pppTTTaTTT" :start1 1 :start2 3) 4))
(test (eql (string-not-lessp "pppTTTxTTTqqq" "pTTTaTTT"
                       :start1 6 :end1 7
                       :start2 4 :end2 5) 6))
;; (test (eql (string-not-lessp (make-array 0 :element-type 'character)
;;                     (make-array 0 :element-type 'base-char)) 0))
(test (and (eql (string-not-lessp "abc" "ABC") 3)
     (eql (string-not-lessp "ABC" "abc") 3)))
(test (= (string-not-lessp 'love 'hate) 0))
(test (not (string-not-lessp 'peace 'war)))
(test (= (string-not-lessp 'love 'love) 4))
(test (= (string-not-lessp #\a #\a) 1))
(test (not (string-not-lessp #\a #\b)))
(test (= (string-not-lessp #\z #\a) 0))



(test (stringp "aaaaaa"))
(test (stringp (make-array 0 :element-type 'character)))
;; (test (stringp (make-array 0 :element-type 'base-char)))
;; JSCL: an array of STANDARD-CHAR isn't a STRINGP yet, either
;; (test (stringp (make-array 0 :element-type 'standard-char)))
(test (not (stringp #\a)))
(test (not (stringp 'a)))
(test (not (stringp '(string))))

(test (string= (make-string 3 :initial-element #\a) "aaa"))
;; JSCL: no SCHAR, so disabled
;; (test (let ((str (make-string 3)))
;;   (and (simple-string-p str)
;;        (setf (schar str 0) #\x)
;;        (setf (schar str 1) #\y)
;;        (setf (schar str 2) #\z)
;;        (string= str "xyz"))))
;; JSCL: #\Space isn't read correctly yet
;; (test (string= (make-string 1 :initial-element #\Space) " "))
(test (string= (make-string 0) ""))

;; JSCL: BUG?: this barfs inside the JS function xstring(), and i don't know why.
;; (test (subtypep (upgraded-array-element-type
;;         (array-element-type (make-string 3 :element-type 'standard-char)))
;;        'character))

;;; EOF
