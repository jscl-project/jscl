;;;; write-docs.lisp — Generate the JSCL documentation
;;;; -*- Lisp -*-

;; © 2016 Bruce-Robert  Fenn Pocock; licensed under the  same terms as
;; (and as a component of) JSCL.
;;
;; JSCL is free software: you can redistribute it and/or modify it under
;; the terms of the GNU General  Public License as published by the Free
;; Software Foundation,  either version  3 of the  License, or  (at your
;; option) any later version.
;;
;; JSCL is distributed  in the hope that it will  be useful, but WITHOUT
;; ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
;; FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
;; for more details.
;;
;; You should  have received a  copy of  the GNU General  Public License
;; along with JSCL. If not, see <http://www.gnu.org/licenses/>.

(defpackage jscl/doc 
  (:use :cl :alexandria)
  (:export #:write-docs))

(require :net.didierverna.declt)


;;; Patches to DECLT. ☹ TODO: Submit upstream

(in-package :net.didierverna.declt)
(in-readtable :net.didierverna.declt)

(defun sub-component-p (component relative-to)
  "Return T if COMPONENT can be found under RELATIVE-TO."
  (and (component-pathname component)
       (pathname-match-p (component-pathname component)
                         (make-pathname :name :wild
                                        :directory
                                        (append (pathname-directory relative-to)
                                                '(:wild-inferiors))))))

;;; The patch here removes some SETF INVERSE that don't work for me
(defun add-symbol-definition (symbol category pool)
  "Add and return the CATEGORY kind of definition for SYMBOL to pool, if any."
  (or (find-definition symbol category pool)
      (ecase category
        (:constant
         (when (eql (sb-int:info :variable :kind symbol) :constant)
           (add-definition
            symbol category (make-constant-definition :symbol symbol) pool)))
        (:special
         (when (eql (sb-int:info :variable :kind symbol) :special)
           (add-definition
            symbol category (make-special-definition :symbol symbol) pool)))
        (:symbol-macro
         (when (eql (sb-int:info :variable :kind symbol) :macro)
           (add-definition
            symbol category
            (make-symbol-macro-definition :symbol symbol) pool)))
        (:macro
         (when-let* ((macro (macro-function symbol))
                     (macro-definition
                      (make-macro-definition :symbol symbol :function macro)))
           (when-let ((expander (sb-int:info :setf :expander symbol)))
             (let ((expander-definition
                    (make-setf-expander-definition
                     :symbol symbol
                     :access macro-definition
                     :update expander)))
               (setf (macro-definition-access-expander macro-definition)
                     expander-definition)))
           (add-definition symbol category macro-definition pool)))
        (:compiler-macro
         (when-let ((compiler-macro (compiler-macro-function symbol)))
           (add-definition
            symbol
            category
            (make-compiler-macro-definition
             :symbol symbol :function compiler-macro)
            pool)))
        ;; #### NOTE: As mentionned earlier, the WRITER slot in (generic)
        ;; functions helps to attempt concatenation of the reader and writer
        ;; documentation. However, we won't attempt concatenation when the
        ;; reader and writer are of different nature, that is, one a simple
        ;; function and the other a generic one. If any, those cases should be
        ;; extremely rare and it doesn't really make sense to merge
        ;; heterogeneous documentations (for instance, there would be methods
        ;; for only one of the definitions). Besides, we regular and generic
        ;; functions appear in different sections in the manual.
        (:function
         (let* ((function (when (and (fboundp symbol)
                                     (not (macro-function symbol))
                                     (not (typep (fdefinition symbol)
                                                 'generic-function)))
                            (fdefinition symbol)))
                ;; #### NOTE: an accessor's writer definition is created here
                ;; only if it's also an ordinary function. Cross-references
                ;; between heterogeneous accessors will be resolved when the
                ;; pools are finalized.
                (writer (let ((writer-name `(setf ,symbol)))
                          (when (fboundp writer-name)
                            (fdefinition writer-name))))
                (ordinary-writer-p
                 (and writer (not (typep writer 'generic-function))))
                (expander (sb-int:info :setf :expander symbol)))
           (cond ((and function (or writer expander))
                  (let ((accessor-definition (make-accessor-definition
                                              :symbol symbol
                                              :function function)))
                    (when ordinary-writer-p
                      (let ((writer-definition (make-writer-definition
                                                :symbol symbol
                                                :function writer
                                                :reader accessor-definition)))
                        (setf (accessor-definition-writer accessor-definition)
                              writer-definition)))
                    (when expander
                      (let ((expander-definition
                             (make-setf-expander-definition
                              :symbol symbol
                              :access accessor-definition
                              :update expander)))
                        (setf (accessor-definition-access-expander
                               accessor-definition)
                              expander-definition)))
                    (add-definition symbol category accessor-definition pool)))
                 (function
                  (add-definition
                   symbol
                   category
                   (make-function-definition :symbol symbol
                                             :function function)
                   pool))
                 (ordinary-writer-p
                  (add-definition
                   symbol
                   category
                   (make-writer-definition :symbol symbol :function writer)
                   pool)))))
        (:generic
         (let* ((function
                 (when (and (fboundp symbol)
                            (typep (fdefinition symbol) 'generic-function))
                   (fdefinition symbol)))
                ;; #### NOTE: an accessor's writer definition is created here
                ;; only if it's also a generic function. Cross-references
                ;; between heterogeneous accessors will be resolved when the
                ;; pools are finalized.
                (writer
                 (let ((writer-name `(setf ,symbol)))
                   (when (fboundp writer-name)
                     (fdefinition writer-name))))
                (generic-writer-p (typep writer 'generic-function))
                (expander (sb-int:info :setf :expander symbol)))
           (cond ((and function (or writer expander))
                  (let ((generic-definition
                         (make-generic-accessor-definition
                          :symbol symbol
                          :function function
                          ;; #### NOTE: for a generic accessor function, we
                          ;; store accessor methods in the generic accessor
                          ;; function definition, along with standard
                          ;; methods. Only writer-only methods are stored in
                          ;; the generic writer function definition.
                          :methods
                          (mapcar
                           (lambda (method)
                             (let ((writer-method
                                    (and generic-writer-p
                                         (find-method
                                          writer
                                          (method-qualifiers method)
                                          ;; #### FIXME: I'm not sure if the
                                          ;; first argument (NEW-VALUE) of a
                                          ;; writer method always has a
                                          ;; specializer of T...
                                          (cons t (sb-mop:method-specializers
                                                   method))
                                          nil))))
                               (if writer-method
                                   (make-accessor-method-definition
                                    :symbol symbol
                                    :method method
                                    :writer (make-writer-method-definition
                                             :symbol symbol
                                             :method writer-method))
                                   (make-method-definition
                                    :symbol symbol :method method))))
                           (sb-mop:generic-function-methods function)))))
                    (when generic-writer-p
                      (let ((writer-definition
                             (make-generic-writer-definition
                              :symbol symbol
                              :function writer
                              :methods
                              (mapcan
                               (lambda (method)
                                 (unless
                                     (find-method
                                      function
                                      (method-qualifiers method)
                                      ;; #### NOTE: don't forget to remove
                                      ;; the first (NEW-VALUE) specializer
                                      ;; from the writer method.
                                      (cdr (sb-mop:method-specializers
                                            method))
                                      nil)
                                   (list (make-writer-method-definition
                                          :symbol symbol
                                          :method method))))
                               (sb-mop:generic-function-methods
                                writer))
                              :reader generic-definition)))
                        (setf (generic-accessor-definition-writer
                               generic-definition)
                              writer-definition)))
                    (when expander
                      (let ((expander-definition
                             (make-setf-expander-definition
                              :symbol symbol
                              :access generic-definition
                              :update expander)))
                        (setf (generic-accessor-definition-access-expander
                               generic-definition)
                              expander-definition)))
                    (add-definition symbol category generic-definition
                                    pool)))
                 (function
                  (add-definition
                   symbol
                   category
                   (make-generic-definition
                    :symbol symbol
                    :function function
                    :methods (mapcar (lambda (method)
                                       (make-method-definition :symbol symbol
                                                               :method method))
                                     (sb-mop:generic-function-methods
                                      function)))
                   pool))
                 (generic-writer-p
                  (add-definition
                   symbol
                   category
                   (make-generic-writer-definition
                    :symbol symbol
                    :function writer
                    :methods (mapcar (lambda (method)
                                       (make-writer-method-definition
                                        :symbol symbol
                                        :method method))
                                     (sb-mop:generic-function-methods
                                      writer)))
                   pool)))))
        ;; #### WARNING: method combinations in CL don't have a real namespace
        ;; (Cf. this blog: http://www.didierverna.net/blog/index.php?post/2013/08/16/Lisp-Corner-Cases%3A-Method-Combinations).
        ;; As a consequence, in order to be 100% correct (and also 200%
        ;; pedantic), I should normally document every single generic
        ;; function's method combination separately. However, I will make the
        ;; assumption that the programmer has some sanity and only defines one
        ;; method combination for every name. The corresponding object will be
        ;; documented like the other ones. In generic function documentations,
        ;; there will be a reference to the method combination and only the
        ;; method combination options will be documented there, as they may be
        ;; generic function specific.
        (:combination
         (let* ((method (find-method #'sb-mop:find-method-combination
                                     nil
                                     `(,(find-class 'generic-function)
                                        (eql ,symbol)
                                        t)
                                     nil))
                (combination (when method
                               (sb-mop:find-method-combination
                                ;; #### NOTE: we could use any generic
                                ;; function instead of DOCUMENTATION here.
                                ;; Also, NIL options don't matter because they
                                ;; are not advertised as part of the method
                                ;; combination, but as part of the generic
                                ;; functions that use them.
                                #'documentation symbol nil))))
           (when combination
             (add-definition
              symbol
              category
              (etypecase combination
                (sb-pcl::short-method-combination
                 (make-short-combination-definition
                  :symbol symbol
                  :combination combination))
                (sb-pcl::long-method-combination
                 (make-long-combination-definition
                  :symbol symbol
                  :combination combination)))
              pool))))
        (:condition
         (let ((class (find-class symbol nil)))
           (when (and class (typep class 'sb-pcl::condition-class))
             (add-definition
              symbol
              category
              (make-condition-definition
               :symbol symbol
               :slots (make-slot-definitions class))
              pool))))
        (:structure
         (let ((class (find-class symbol nil)))
           (when (and class (typep class 'sb-pcl::structure-class))
             (add-definition
              symbol
              category
              (make-structure-definition
               :symbol symbol
               :slots (make-slot-definitions class))
              pool))))
        (:class
         (let ((class (find-class symbol nil)))
           (when (and class
                      (not (add-symbol-definition symbol :condition pool))
                      (not (add-symbol-definition symbol :structure pool)))
             (add-definition
              symbol
              category
              (make-class-definition
               :symbol symbol
               :slots (make-slot-definitions class))
              pool))))
        (:type
         (when (eql (sb-int:info :type :kind symbol) :defined)
           (add-definition
            symbol
            category
            (make-type-definition :symbol symbol)
            pool))))))


(in-package :jscl/doc)

(defun write-docs ()
  "Generate the TeΧinfo from the documentation in the JSCL files." 
  (let ((source-dir #.(make-pathname 
                       :name nil :type nil :version :newest
                       :directory (pathname-directory 
                                   (or *load-pathname* 
                                       *compile-file-pathname*
                                       *default-pathname-defaults*))))) 
    (ensure-directories-exist (merge-pathnames #p"doc/" source-dir))
    (asdf:load-asd "jscl.asd")
    (net.didierverna.declt:declt
     :jscl
     :library-name "JSCL: JavaScript from Common Lisp"
     :tagline "A Common Lisp implementation cross-compiled to JavaScript"
     :maintainer "David Vázquez Púa" 
     :texi-file (merge-pathnames #p"doc/jscl.texi"
                                 source-dir)
     :info-file (merge-pathnames #p "doc/jscl"
                                 source-dir)
     :license :gpl
     :declt-notice :short
     
     :introduction (read-file-into-string #p"doc-intro.texi")
     :conclusion (read-file-into-string #p"doc-conclusion.texi"))))
