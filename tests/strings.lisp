(defvar *str* "hello world")
(defvar *str2* "h")

(tests (stringp *str*)
       (not (characterp *str*))
       (not (integerp *str*))

       (stringp *str2*)
       (not (characterp *str2*))
       (not (integerp *str2*))
       
       (= (length "hello world") 11)
       (arrayp "hello world")
       
       (string= "h" (string #\h))
       (string= "foo" "foo")
       (not (string= "Foo" "foo"))
       (not (string= "foo" "foox"))
       
       (= (string< "one" "two") 0)
       (= (string< "oob" "ooc") 2)
       (null (string< "" ""))
       (null (string< "a" ""))
       (= (string< "" "a") 0)
       (= (string< "aaa" "aaaaa") 3)
              
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
       (char= (char "abc" 0) #\a)
       (char= (char "abc" 1) #\b)
       (char= (char "abc" 2) #\c)
       
       (string= (string "") "")
       (string= (string "abc") "abc")
       (string= (string "a") "a")
       (string= (string 'abc) "ABC")
       (string= (string 'a) "A")
       (string= (string #\a) "a")
       
       
       (string= (string-upcase "abcde") "ABCDE")
       (string= (string-upcase "Dr. Livingston, I presume?")
		"DR. LIVINGSTON, I PRESUME?")
       (string= (string-upcase "Dr. Livingston, I presume?" :start 6 :end 10)
		"Dr. LiVINGston, I presume?")
       (string= (string-upcase 'Kludgy-HASH-Search) "KLUDGY-HASH-SEARCH")
       (string= (string-upcase "abcde" :start 2 :end nil) "abCDE")
       
       (string= (string-downcase "Dr. Livingston, I presume?")
		"dr. livingston, i presume?")
       (string= (string-downcase 'Kludgy-HASH-Search) "kludgy-hash-search")
       (string= (string-downcase "A FOOL" :start 2 :end nil) "A fool")
       (string= (string-capitalize "elm 13c arthur;fig don't")
		"Elm 13c Arthur;Fig Don'T")
       (string= (string-capitalize " hello ") " Hello ")
       (string= (string-capitalize
		 "occlUDeD cASEmenTs FOreSTAll iNADVertent DEFenestraTION")
		"Occluded Casements Forestall Inadvertent Defenestration")
       (string= (string-capitalize 'kludgy-hash-search) "Kludgy-Hash-Search")
       (string= (string-capitalize "DON'T!") "Don'T!")    ;not "Don't!"
       (string= (string-capitalize "pipe 13a, foo16c") "Pipe 13a, Foo16c")
       (string= (string-capitalize "a fool" :start 2 :end nil) "a Fool")
       
       (let ((str (copy-seq "0123ABCD890a")))
	 (and (string= (nstring-downcase str :start 5 :end 7) "0123AbcD890a")
	      (string= str "0123AbcD890a")))
       
       (let* ((str0 (copy-seq "abcde"))
	      (str  (nstring-upcase str0)))
	 (and (eq str0 str)
	      (string= str "ABCDE")))
       (let* ((str0 (copy-seq "Dr. Livingston, I presume?"))
	      (str  (nstring-upcase str0)))
	 (and (eq str0 str)
	      (string= str "DR. LIVINGSTON, I PRESUME?")))
       (let* ((str0 (copy-seq "Dr. Livingston, I presume?"))
	      (str  (nstring-upcase str0 :start 6 :end 10)))
	 (and (eq str0 str)
	      (string= str "Dr. LiVINGston, I presume?")))
       
       (let* ((str0 (copy-seq "abcde"))
	      (str (nstring-upcase str0 :start 2 :end nil)))
	 (string= str "abCDE"))
       
       
       
       (let* ((str0 (copy-seq "Dr. Livingston, I presume?"))
	      (str  (nstring-downcase str0)))
	 (and (eq str0 str)
	      (string= str "dr. livingston, i presume?")))
       (let* ((str0 (copy-seq "ABCDE"))
	      (str (nstring-downcase str0 :start 2 :end nil)))
	 (string= str "ABcde"))
       
       (let* ((str0 (copy-seq "elm 13c arthur;fig don't"))
	      (str  (nstring-capitalize str0)))
	 (and (eq str0 str)
	      (string= str "Elm 13c Arthur;Fig Don'T")))
       
       (let* ((str0 (copy-seq " hello "))
	      (str  (nstring-capitalize str0)))
	 (and (eq str0 str)
	      (string= str " Hello ")))
       (let* ((str0 (copy-seq
		     "occlUDeD cASEmenTs FOreSTAll iNADVertent DEFenestraTION"))
	      (str  (nstring-capitalize str0)))
	 (and (eq str0 str)
	      (string= str
                       "Occluded Casements Forestall Inadvertent Defenestration")))
       (let* ((str0 (copy-seq "DON'T!"))
	      (str  (nstring-capitalize str0)))
	 (and (eq str0 str)
	      (string= str "Don'T!")))    ;not "Don't!"
       (let* ((str0 (copy-seq "pipe 13a, foo16c"))
	      (str  (nstring-capitalize str0)))
	 (and (eq str0 str)
	      (string= str "Pipe 13a, Foo16c")))
       (let* ((str0 (copy-seq "a fool"))
	      (str (nstring-capitalize str0 :start 2 :end nil)))
	 (string= str "a Fool"))
       
       
       
       (string= (string-trim "abc" "abcaakaaakabcaaa") "kaaak")
       ;; (test (string= (string-trim '(#\Space #\Tab #\Newline) " garbanzo beans
       ;;         ") "garbanzo beans"))
       (string= (string-trim " (*)" " ( *three (silly) words* ) ")
		"three (silly) words")
       (string= (string-left-trim "abc" "labcabcabc") "labcabcabc")
       (string= (string-left-trim " (*)" " ( *three (silly) words* ) ")
		"three (silly) words* ) ")
       (string= (string-right-trim " (*)" " ( *three (silly) words* ) ") 
		" ( *three (silly) words")
       (string= (string-trim "ABC" "abc") "abc")
       (string= (string-trim "AABBCC" "abc") "abc")
       (string= (string-trim "" "abc") "abc")
       (string= (string-trim "ABC" "") "")
       (string= (string-trim "cba" "abc") "")
       (string= (string-trim "cba" "abccba") "")
       (string= (string-trim "ccbbba" "abccba") "")
       (string= (string-trim "cba" "abcxabc") "x")
       (string= (string-trim "xyz" "xxyabcxyyz") "abc")
       (string= (string-trim "CBA" 'abcxabc) "X")
       (string= (string-trim "a" #\a) "")
       
       
       (string= (string-left-trim "ABC" "abc") "abc")
       (string= (string-left-trim "" "abc") "abc")
       (string= (string-left-trim "ABC" "") "")
       (string= (string-left-trim "cba" "abc") "")
       (string= (string-left-trim "cba" "abccba") "")
       (string= (string-left-trim "cba" "abcxabc") "xabc")
       (string= (string-left-trim "xyz" "xxyabcxyz") "abcxyz")
       (string= (string-left-trim "CBA" 'abcxabc) "XABC")
       (string= (string-left-trim "a" #\a) "")
       
       (string= (string-right-trim "ABC" "abc") "abc")
       (string= (string-right-trim "" "abc") "abc")
       (string= (string-right-trim "ABC" "") "")
       (string= (string-right-trim "cba" "abc") "")
       (string= (string-right-trim "cba" "abccba") "")
       (string= (string-right-trim "cba" "abcxabc") "abcx")
       (string= (string-right-trim "xyz" "xxyabcxyz") "xxyabc")
       (string= (string-right-trim "CBA" 'abcxabc) "ABCX")
       (string= (string-right-trim "a" #\a) "")
       
       
       
       (string= (string "already a string") "already a string")
       (string= (string 'elm) "ELM")
       (string=  (string #\c) "c")
       
       
       (string= "foo" "foo")
       (not (string= "foo" "Foo"))
       (not (string= "foo" "bar"))
       (string= "together" "frog" :start1 1 :end1 3 :start2 2)
       (string-equal "foo" "Foo")
       (string= "abcd" "01234abcd9012" :start2 5 :end2 9)
       (eql (string< "aaaa" "aaab") 3)
       (eql (string>= "aaaaa" "aaaa") 4)
       (eql (string-not-greaterp "Abcde" "abcdE") 5)
       (eql (string-lessp "012AAAA789" "01aaab6"
			  :start1 3 :end1 7
			  :start2 2 :end2 6) 6)
       (not (string-not-equal "AAAA" "aaaA"))
       
       
       (string= "" "")
       (not (string= "abc" ""))
       (not (string= "" "abc"))
       (not (string= "A" "a"))
       (string= "abc" "xyz" :start1 3 :start2 3)
       (string= "abc" "xyz" :start1 1 :end1 1 :start2 0 :end2 0)
       (string= "axyza" "xyz" :start1 1 :end1 4)
       (string= "axyza" "xyz" :start1 1 :end1 4 :start2 0 :end2 nil)
       (string= "abxyz" "xyabz" :end1 2 :start2 2 :end2 4)
       (not (string= "love" "hate"))
       (string= 'love 'love)
       (not (string= 'love "hate"))
       (string= #\a #\a)
       
       
       (not (string/= "" ""))
       (eql (string/= "abc" "") 0)
       (eql (string/= "" "abc") 0)
       (eql (string/= "A" "a") 0)
       (not (string/= "abc" "xyz" :start1 3 :start2 3))
       (not (string/= "abc" "xyz" :start1 1 :end1 1 :start2 0 :end2 0))
       (not (string/= "axyza" "xyz" :start1 1 :end1 4))
       (not (string/= "axyza" "xyz" :start1 1 :end1 4 :start2 0 :end2 nil))
       (not (string/= "abxyz" "xyabz" :end1 2 :start2 2 :end2 4))
       (eql (string/= "love" "hate") 0)
       (eql (string/= "love" "loVe") 2)
       (not (string/= "life" "death" :start1 3 :start2 1 :end2 2))
       (eql (string/= "abcxyz" "ABCxyZ" :start1 3 :start2 3) 5)
       (eql (string/= "abcxyz" "ABCxyZ" :start1 3 :end1 nil :start2 3 :end2 nil) 5)
       (eql (string/= "abcxyz" "ABCxyZ" :end1 nil :start2 3 :end2 3) 0)
       (eql (string/= "abc" "abcxyz") 3)
       (eql (string/= "abcxyz" "abc") 3)
       (eql (string/= "abcxyz" "") 0)
       (eql (string/= "AbcDef" "cdef" :start1 2) 3)
       (eql (string/= "cdef" "AbcDef" :start2 2) 1)
       (= (string/= 'love "hate") 0)
       (not (string/= 'love 'love))
       (not (string/= #\a #\a))
       (= (string/= #\a #\b) 0)
       
       (not (string< "" ""))
       (not (string< "dog" "dog"))
       (not (string< " " " "))
       (not (string< "abc" ""))
       (eql (string< "" "abc") 0)
       (eql (string< "ab" "abc") 2)
       (not (string< "abc" "ab"))
       (eql (string< "aaa" "aba") 1)
       (not (string< "aba" "aaa"))
       (not (string< "my cat food" "your dog food" :start1 6 :start2 8))
       (not (string< "cat food 2 dollars" "dog food 3 dollars"
		     :start1 3 :end1 9 :start2 3 :end2 9))
       (eql (string< "xyzabc" "abcd" :start1 3) 6)
       (eql (string< "abc" "abc" :end1 1) 1)
       (eql (string< "xyzabc" "abc" :start1 3 :end1 5) 5)
       (eql (string< "xyz" "abcxyzXYZ" :start2 3) 3)
       (not (string< "abc" "abcxyz" :end2 3))
       (eql (string< "xyz" "abcxyz" :end1 2 :start2 3) 2)
       (not (string< "xyzabc" "abcdef" :start1 3 :end2 3))
       (eql (string< "aaaa" "z") 0)
       (eql (string< "pppTTTaTTTqqq" "pTTTxTTT" :start1 3 :start2 1) 6)
       (eql (string< "pppTTTaTTTqqq" "pTTTxTTT"
		     :start1 6 :end1 7
		     :start2 4 :end2 5) 6)
       (not (string< 'love 'hate))
       (= (string< 'peace 'war) 0)
       (not (string< 'love 'love))
       (not (string< #\a #\a))
       (= (string< #\a #\b) 0)
       
       
       (not (string> "" ""))
       (not (string> "dog" "dog"))
       (not (string> " " " "))
       (eql (string> "abc" "") 0)
       (not (string> "" "abc"))
       (not (string> "ab" "abc"))
       (eql (string> "abc" "ab") 2)
       (eql (string> "aba" "aaa") 1)
       (not (string> "aaa" "aba"))
       (not (string> "my cat food" "your dog food" :start1 6 :start2 8))
       (not (string> "cat food 2 dollars" "dog food 3 dollars"
		     :start1 3 :end1 9 :start2 3 :end2 9))
       (eql (string> "xyzabcde" "abcd" :start1 3) 7)
       (not (string> "abc" "abc" :end1 1))
       (eql (string> "xyzabc" "a" :start1 3 :end1 5) 4)
       (eql (string> "xyzXYZ" "abcxyz" :start2 3) 3)
       (eql (string> "abcxyz" "abcxyz" :end2 3) 3)
       (not (string> "xyzXYZ" "abcxyz" :end1 2 :start2 3))
       (not (string> "xyzabc" "abcdef" :start1 3 :end2 3))
       (eql (string> "z" "aaaa") 0)
       (eql (string> "pTTTxTTTqqq" "pppTTTaTTT" :start1 1 :start2 3) 4)
       (eql (string> "pppTTTxTTTqqq" "pTTTaTTT"
		     :start1 6 :end1 7
		     :start2 4 :end2 5) 6)
       (= (string> 'love 'hate) 0)
       (not (string> 'peace 'war))
       (not (string> 'love 'love))
       (not (string> #\a #\a))
       (not (string> #\a #\b))
       (= (string> #\z #\a) 0)
       
       
       (eql (string<= "" "") 0)
       (eql (string<= "dog" "dog") 3)
       (eql (string<= " " " ") 1)
       (not (string<= "abc" ""))
       (eql (string<= "ab" "abc") 2)
       (eql (string<= "aaa" "aba") 1)
       (not (string<= "aba" "aaa"))
       (eql (string<= "my cat food" "your dog food" :start1 6 :start2 8) 11)
       (eql (string<= "cat food 2 dollars" "dog food 3 dollars"
		      :start1 3 :end1 9 :start2 3 :end2 9) 9)
       (eql (string<= "xyzabc" "abcd" :start1 3) 6)
       (eql (string<= "abc" "abc" :end1 1) 1)
       (eql (string<= "xyzabc" "abc" :start1 3 :end1 5) 5)
       (eql (string<= "xyz" "abcxyzXYZ" :start2 3) 3)
       (eql (string<= "abc" "abcxyz" :end2 3) 3)
       (eql (string<= "xyz" "abcxyz" :end1 2 :start2 3) 2)
       (eql (string<= "xyzabc" "abcdef" :start1 3 :end2 3) 6)
       (eql (string<= "aaaa" "z") 0)
       (eql (string<= "pppTTTaTTTqqq" "pTTTxTTT" :start1 3 :start2 1) 6)
       (eql (string<= "pppTTTaTTTqqq" "pTTTxTTT"
		      :start1 6 :end1 7
		      :start2 4 :end2 5) 6)
       (not (string<= 'love 'hate))
       (= (string<= 'peace 'war) 0)
       (= (string<= 'love 'love) 4)
       (= (string<= #\a #\a) 1)
       (= (string<= #\a #\b) 0)
       (not (string<= #\z #\a))
       
       
       (eql (string>= "" "") 0)
       (eql (string>= "dog" "dog") 3)
       (eql (string>= " " " ") 1)
       (eql (string>= "abc" "") 0)
       (not (string>= "" "abc"))
       (not (string>= "ab" "abc"))
       (eql (string>= "abc" "ab") 2)
       (eql (string>= "aba" "aaa") 1)
       (not (string>= "aaa" "aba"))
       (eql (string>= "my cat food" "your dog food" :start1 6 :start2 8) 11)
       (eql (string>= "cat food 2 dollars" "dog food 3 dollars"
		      :start1 3 :end1 9 :start2 3 :end2 9) 9)
       (eql (string>= "xyzabcde" "abcd" :start1 3) 7)
       (not (string>= "abc" "abc" :end1 1))
       (eql (string>= "xyzabc" "a" :start1 3 :end1 5) 4)
       (eql (string>= "xyzXYZ" "abcxyz" :start2 3) 3)
       (eql (string>= "abcxyz" "abcxyz" :end2 3) 3)
       (not (string>= "xyzXYZ" "abcxyz" :end1 2 :start2 3))
       (eql (string>= "xyzabc" "abcdef" :start1 3 :end2 3) 6)
       (eql (string>= "z" "aaaa") 0)
       (eql (string>= "pTTTxTTTqqq" "pppTTTaTTT" :start1 1 :start2 3) 4)
       (eql (string>= "pppTTTxTTTqqq" "pTTTaTTT"
		      :start1 6 :end1 7
		      :start2 4 :end2 5) 6)
       ;; (test (eql (string>= (make-array 0 :element-type 'character)
       ;;             (make-array 0 :element-type 'base-char)) 0))
       (= (string>= 'love 'hate) 0)
       (not (string>= 'peace 'war))
       (= (string>= 'love 'love) 4)
       (= (string>= #\a #\a) 1)
       (not (string>= #\a #\b))
       (= (string>= #\z #\a) 0)
       
       
       
       
       (string-equal "" "")
       (not (string-equal "abc" ""))
       (not (string-equal "" "abc"))
       (string-equal "A" "a")
       (string-equal "abc" "xyz" :start1 3 :start2 3)
       (string-equal "abc" "xyz" :start1 1 :end1 1 :start2 0 :end2 0)
       (string-equal "axyza" "xyz" :start1 1 :end1 4)
       (string-equal "axyza" "xyz" :start1 1 :end1 4 :start2 0 :end2 nil)
       (string-equal "abxyz" "xyabz" :end1 2 :start2 2 :end2 4)
       (not (string-equal "love" "hate"))
       (string-equal "xyz" "XYZ")
       (not (string-equal 'love 'hate))
       (not (string-equal 'peace 'war))
       (string-equal 'love 'love)
       (string-equal #\a #\a)
       (not (string-equal #\a #\b))
       (not (string-equal #\z #\a))
       
       
       (not (string-not-equal "" ""))
       (eql (string-not-equal "abc" "") 0)
       (eql (string-not-equal "" "abc") 0)
       (not (string-not-equal "A" "a"))
       (not (string-not-equal "abc" "xyz" :start1 3 :start2 3))
       (not (string-not-equal "abc" "xyz" :start1 1 :end1 1 :start2 0 :end2 0))
       (not (string-not-equal "axyza" "xyz" :start1 1 :end1 4))
       (not (string-not-equal "axyza" "xyz" :start1 1 :end1 4 :start2 0 :end2 nil))
       (not (string-not-equal "abxyz" "xyabz" :end1 2 :start2 2 :end2 4))
       (eql (string-not-equal "love" "hate") 0)
       (not (string-not-equal "love" "loVe"))
       (not (string-not-equal "life" "death" :start1 3 :start2 1 :end2 2))
       (not (string-not-equal "abcxyz" "ABCxyZ" :start1 3 :start2 3))
       (not (string-not-equal "abcxyz" "ABCxyZ" :start1 3 :end1 nil :start2 3 :end2 nil))
       (eql (string-not-equal "abcxyz" "ABCxyZ" :end1 nil :start2 3 :end2 3) 0)
       (eql (string-not-equal "abc" "abcxyz") 3)
       (eql (string-not-equal "abcxyz" "abc") 3)
       (eql (string-not-equal "abcxyz" "") 0)
       (not (string-not-equal "AbcDef" "cdef" :start1 2))
       (not (string-not-equal "cdef" "AbcDef" :start2 2))
       (not (string-not-equal "ABC" "abc"))
       (= (string-not-equal 'love 'hate) 0)
       (= (string-not-equal 'peace 'war) 0)
       (not (string-not-equal 'love 'love))
       (not (string-not-equal #\a #\a))
       (= (string-not-equal #\a #\b) 0)
       (= (string-not-equal #\z #\a) 0)
       
       
       (not (string-lessp "" ""))
       (not (string-lessp "dog" "dog"))
       (not (string-lessp " " " "))
       (not (string-lessp "abc" ""))
       (eql (string-lessp "" "abc") 0)
       (eql (string-lessp "ab" "abc") 2)
       (not (string-lessp "abc" "ab"))
       (eql (string-lessp "aaa" "aba") 1)
       (not (string-lessp "aba" "aaa"))
       (not (string-lessp "my cat food" "your dog food" :start1 6 :start2 8))
       (not (string-lessp "cat food 2 dollars" "dog food 3 dollars"
			  :start1 3 :end1 9 :start2 3 :end2 9))
       (eql (string-lessp "xyzabc" "abcd" :start1 3) 6)
       (eql (string-lessp "abc" "abc" :end1 1) 1)
       (eql (string-lessp "xyzabc" "abc" :start1 3 :end1 5) 5)
       (eql (string-lessp "xyz" "abcxyzXYZ" :start2 3) 3)
       (not (string-lessp "abc" "abcxyz" :end2 3))
       (eql (string-lessp "xyz" "abcxyz" :end1 2 :start2 3) 2)
       (not (string-lessp "xyzabc" "abcdef" :start1 3 :end2 3))
       (eql (string-lessp "aaaa" "z") 0)
       (eql (string-lessp "pppTTTaTTTqqq" "pTTTxTTT" :start1 3 :start2 1) 6)
       (eql (string-lessp "pppTTTaTTTqqq" "pTTTxTTT"
			  :start1 6 :end1 7
			  :start2 4 :end2 5) 6)
       ;; (test (not (string-lessp (make-array 0 :element-type 'character)
       ;;                 (make-array 0 :element-type 'base-char))))
       (and (not (string-lessp "abc" "ABC"))
	    (not (string-lessp "ABC" "abc")))
       (not (string-lessp 'love 'hate))
       (= (string-lessp 'peace 'war) 0)
       (not (string-lessp 'love 'love))
       (not (string-lessp #\a #\a))
       (= (string-lessp #\a #\b) 0)
       (not (string-lessp #\z #\a))
       
       
       (not (string-greaterp "" ""))
       (not (string-greaterp "dog" "dog"))
       (not (string-greaterp " " " "))
       (eql (string-greaterp "abc" "") 0)
       (not (string-greaterp "" "abc"))
       (not (string-greaterp "ab" "abc"))
       (eql (string-greaterp "abc" "ab") 2)
       (eql (string-greaterp "aba" "aaa") 1)
       (not (string-greaterp "aaa" "aba"))
       (not (string-greaterp "my cat food" "your dog food" :start1 6 :start2 8))
       (not (string-greaterp "cat food 2 dollars" "dog food 3 dollars"
			     :start1 3 :end1 9 :start2 3 :end2 9))
       (eql (string-greaterp "xyzabcde" "abcd" :start1 3) 7)
       (not (string-greaterp "abc" "abc" :end1 1))
       (eql (string-greaterp "xyzabc" "a" :start1 3 :end1 5) 4)
       (eql (string-greaterp "xyzXYZ" "abcxyz" :start2 3) 3)
       (eql (string-greaterp "abcxyz" "abcxyz" :end2 3) 3)
       (not (string-greaterp "xyzXYZ" "abcxyz" :end1 2 :start2 3))
       (not (string-greaterp "xyzabc" "abcdef" :start1 3 :end2 3))
       (eql (string-greaterp "z" "aaaa") 0)
       (eql (string-greaterp "pTTTxTTTqqq" "pppTTTaTTT" :start1 1 :start2 3) 4)
       (eql (string-greaterp "pppTTTxTTTqqq" "pTTTaTTT"
			     :start1 6 :end1 7
			     :start2 4 :end2 5) 6)
       ;; (test (not (string-greaterp (make-array 0 :element-type 'character)
       ;;                    (make-array 0 :element-type 'base-char))))
       (and (not (string-greaterp "abc" "ABC"))
	    (not (string-greaterp "ABC" "abc")))
       (= (string-greaterp 'love 'hate) 0)
       (not (string-greaterp 'peace 'war))
       (not (string-greaterp 'love 'love))
       (not (string-greaterp #\a #\a))
       (not (string-greaterp #\a #\b))
       (= (string-greaterp #\z #\a) 0)
       
       
       (eql (string-not-greaterp "" "") 0)
       (eql (string-not-greaterp "dog" "dog") 3)
       (eql (string-not-greaterp " " " ") 1)
       (not (string-not-greaterp "abc" ""))
       (eql (string-not-greaterp "ab" "abc") 2)
       (eql (string-not-greaterp "aaa" "aba") 1)
       (not (string-not-greaterp "aba" "aaa"))
       (eql (string-not-greaterp "my cat food" "your dog food" :start1 6 :start2 8) 11)
       (eql (string-not-greaterp "cat food 2 dollars" "dog food 3 dollars"
				 :start1 3 :end1 9 :start2 3 :end2 9) 9)
       (eql (string-not-greaterp "xyzabc" "abcd" :start1 3) 6)
       (eql (string-not-greaterp "abc" "abc" :end1 1) 1)
       (eql (string-not-greaterp "xyzabc" "abc" :start1 3 :end1 5) 5)
       (eql (string-not-greaterp "xyz" "abcxyzXYZ" :start2 3) 3)
       (eql (string-not-greaterp "abc" "abcxyz" :end2 3) 3)
       (eql (string-not-greaterp "xyz" "abcxyz" :end1 2 :start2 3) 2)
       (eql (string-not-greaterp "xyzabc" "abcdef" :start1 3 :end2 3) 6)
       (eql (string-not-greaterp "aaaa" "z") 0)
       (eql (string-not-greaterp "pppTTTaTTTqqq" "pTTTxTTT" :start1 3 :start2 1) 6)
       (eql (string-not-greaterp "pppTTTaTTTqqq" "pTTTxTTT"
				 :start1 6 :end1 7
				 :start2 4 :end2 5) 6)
       (and (eql (string-not-greaterp "abc" "ABC") 3)
	    (eql (string-not-greaterp "ABC" "abc") 3))
       (not (string-not-greaterp 'love 'hate))
       (= (string-not-greaterp 'peace 'war) 0)
       (= (string-not-greaterp 'love 'love) 4)
       (= (string-not-greaterp #\a #\a) 1)
       (= (string-not-greaterp #\a #\b) 0)
       (not (string-not-greaterp #\z #\a))
       
       
       (eql (string-not-lessp "" "") 0)
       (eql (string-not-lessp "dog" "dog") 3)
       (eql (string-not-lessp " " " ") 1)
       (eql (string-not-lessp "abc" "") 0)
       (not (string-not-lessp "" "abc"))
       (not (string-not-lessp "ab" "abc"))
       (eql (string-not-lessp "abc" "ab") 2)
       (eql (string-not-lessp "aba" "aaa") 1)
       (not (string-not-lessp "aaa" "aba"))
       (eql (string-not-lessp "my cat food" "your dog food" :start1 6 :start2 8) 11)
       (eql (string-not-lessp "cat food 2 dollars" "dog food 3 dollars"
			      :start1 3 :end1 9 :start2 3 :end2 9) 9)
       (eql (string-not-lessp "xyzabcde" "abcd" :start1 3) 7)
       (not (string-not-lessp "abc" "abc" :end1 1))
       (eql (string-not-lessp "xyzabc" "a" :start1 3 :end1 5) 4)
       (eql (string-not-lessp "xyzXYZ" "abcxyz" :start2 3) 3)
       (eql (string-not-lessp "abcxyz" "abcxyz" :end2 3) 3)
       (not (string-not-lessp "xyzXYZ" "abcxyz" :end1 2 :start2 3))
       (eql (string-not-lessp "xyzabc" "abcdef" :start1 3 :end2 3) 6)
       (eql (string-not-lessp "z" "aaaa") 0)
       (eql (string-not-lessp "pTTTxTTTqqq" "pppTTTaTTT" :start1 1 :start2 3) 4)
       (eql (string-not-lessp "pppTTTxTTTqqq" "pTTTaTTT"
			      :start1 6 :end1 7
			      :start2 4 :end2 5) 6)

       (and (eql (string-not-lessp "abc" "ABC") 3)
	    (eql (string-not-lessp "ABC" "abc") 3))
       (= (string-not-lessp 'love 'hate) 0)
       (not (string-not-lessp 'peace 'war))       
       (not (string-not-lessp #\a #\b))
       (= (string-not-lessp #\z #\a) 0)
       
       
       
       (stringp "aaaaaa")
       (stringp (make-array 0 :element-type 'character))
       (not (stringp #\a))
       (not (stringp 'a))
       (not (stringp '(string)))
       
       (string= (make-string 3 :initial-element #\a) "aaa")
       (string= (make-string 0) "")
       (= (string-not-lessp 'love 'love) 4)
       (= (string-not-lessp #\a #\a) 1))
