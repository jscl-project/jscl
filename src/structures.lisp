;;; -*- mode:lisp; coding:utf-8 -*-

;;; Tiny DEFSTRUCT for JSCL  @vkm
;;; Released: :named :type :include :initial-offset
;;;           :constructor with BOA
;;;           slot default type read-only syntax
;;;
;;; JSCL is free software: you can redistribute it and/or
;;; modify it under the terms of the GNU General Public License as
;;; published by the Free Software Foundation, either version 3 of the
;;; License, or (at your option) any later version.
;;;
;;; JSCL is distributed in the hope that it will be useful, but
;;; WITHOUT ANY WARRANTY; without even the implied warranty of
;;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
;;; General Public License for more details.
;;;
;;; You should have received a copy of the GNU General Public License
;;; along with JSCL.  If not, see <http://www.gnu.org/licenses/>.

(/debug "loading structures.lisp!")

;;; properly list predicate from alexandria pkg
(defun proper-list-p (object)
  "Returns true if OBJECT is a proper list."
  (cond ((not object)  t)
        ((consp object)
         (do ((fast object (cddr fast))
              (slow (cons (car object) (cdr object)) (cdr slow)))
             (nil)
           (unless (and (listp fast)
                        (consp (cdr fast)))
             (return (and (listp fast)
                          (not (cdr fast)))))
           (when (eq fast slow)
             (return nil))))
        (t nil)))
  
(defun proper-list-length-p (x min &optional (max min))
  (cond ((minusp max) nil)
        ((null x) (zerop min))
        ((consp x)
         (and (plusp max)
              (proper-list-length-p (cdr x)
                                    (if (plusp (1- min))
                                        (1- min)
                                        0)
                                    (1- max))))
        (t nil)))

(defun das!reassemble-boa-list (boa-list slots)
  (let ((new-boa-list nil)
        (unmatch-p t)
        (lkw-p nil))
    (flet ((%match (name d)
             (push (list name (dsd-slot-initform d)) new-boa-list))
           (%save (x) (push x new-boa-list))
           (%find-slot-by-name (name)
             (find-if (lambda (slot) (if (eq name (dsd-slot-name slot)) slot)) slots)))
      (dolist (it boa-list (reverse new-boa-list))
        (cond
          ((atom it)
           (setq lkw-p (memq it '(&key &rest &optional &aux)))
           (cond (unmatch-p
                  (%save it)
                  (if lkw-p (setq unmatch-p nil lkw-p nil)))
                 (t (cond (lkw-p
                           (%save it)
                           (setq lkw-p nil))
                          (t (%match it (%find-slot-by-name it)))))))
          ((listp it)
           (let ((sd (%find-slot-by-name (if (atom (car it)) (car it) (cadar it)))))
             (if (null sd)
                 ;; skip supplimentary lambda key var
                 (push it new-boa-list)
                 ;; else proceed slot
                 (cond
                   ;;(name) -> (name default-from sd)
                   ((proper-list-length-p it 1)
                    (if (atom (car it))
                        ;; (name)
                        (%match (car it) (%find-slot-by-name (car it)))
                        ;;((name name))
                        (%match (car  it) (%find-slot-by-name (cadar it)))))
                   ;;(name default) -> (name default)
                   ;;(name default s-p) (name default s-p)
                   ((or (proper-list-length-p it 2) (proper-list-length-p it 3))
                    (%save  it) ))))))))))

;;; symbols concatenate
(defun %symbolize (&rest rest)
  (intern (mapconcat #'string rest)))

;;; boa parse
(defun das!parse-constructor (name from-boa-list)
  (let ((ll (parse-destructuring-lambda-list from-boa-list)))
    (make-dsd-constructor
     :name name :boa from-boa-list
     :assigns (append (lambda-list-reqvars ll)
                      (mapcar #'optvar-variable (lambda-list-optvars ll))
                      (mapcar #'keyvar-variable (lambda-list-keyvars ll))
                      (mapcar #'auxvar-variable (lambda-list-auxvars ll))))))

(def!struct dsd
  name
  type
  named-p
  conc-name
  predicate
  copier
  (initial-offset 0)
  constructors
  (childs '())
  slots                                 ; Direct slots
  parent                                ; include
  assigned                              ; assigned slots from include
  prototype)

;;; dd-slot slot descriptor
(def!struct dsd-slot name initform (type t) read-only)

;;; structure-constructor. boa can be :DEFAULT, which should be filled
;;; later using DAS!RESOLVE-DEFAULT-CONSTRUCTOR and effective slots
;;; information
(def!struct dsd-constructor name boa assigns)

(defun das!include-possible-p (self parent)
  (let ((s1 (mapcar 'dsd-slot-name (dsd-slots self)))
        (s2 (das!effective-slot-names parent)))
    (null (intersection s1 s2))))

(deftype exists-structure-name ()	
  `(and symbol (satisfies exists-structure-p)))

(defun raise-bad-dsd-option (&rest datum)
  (signal 'simple-error
          :format-control "Malformed DEFSTRUCT option ~a.~%"
          :format-arguments datum))

(defun raise-bad-include-slot (&rest datum)
  (signal 'simple-error
          :format-control "Malformed DEFSTRUCT :include option~% Bad name ~a.~%"
          :format-arguments datum))

(deftype sop-symbolic-name ()
  `(and symbol (not (member t nil)) (not keyword)))

(defun non-empty-string (string)
  (and (stringp string) (> (length string) 0)))  

(deftype conc-name-designator ()
  `(or (satisfies non-empty-string)
       character
       (and symbol (not (member t nil)) (not keyword))))

(defun %conc-name-designator (conc-name)
  (check-type conc-name conc-name-designator)
  (typecase conc-name
    (string  (intern conc-name))
    (symbol conc-name)
    (character (intern (string conc-name)))))

;;; Compute list of effective slots for DD, include inherited slots,
;;; and handle assigned initform in (:include name slots*) options
(defun das!effective-slots (dd)
  (let ((asis (dsd-assigned dd))
        (slots (mapcar #'copy-dsd-slot (mappend #'dsd-slots (das!inherit-dsds dd)))))
    ;; TODO: check assigned options like :TYPE and :READONLY
    (dolist (a asis)
      (let ((sname (dsd-slot-name a))
            (sval (dsd-slot-initform a)))
        (dolist (slot slots)
          (when (eq (dsd-slot-name slot) sname)
            (when (dsd-slot-type slot)
              (unless (typep sval (dsd-slot-type slot))
                (error 'type-error :datum a :expected-type (dsd-slot-type slot))))
            (setf (dsd-slot-initform slot) sval)))))
    slots))

(defun das!effective-slot-names (dd)
  (mapcar #'dsd-slot-name (mappend #'dsd-slots (das!inherit-dsds dd))))

;;; Compute List of inherited DSDs, from deepest ancestor to this DSD itself
(defun das!inherit-dsds (dd)
  (let (result)
    (while dd
      (push dd result)
      (setq dd (dsd-parent dd)))
    result))

;;;(defparameter +dsd-option-names+ #(:include :initial-offset :type :conc-name :copier :predicate))

;;; atomic option catched on top
(defun das!parse-option (option dd seen)
  (let* ((keyword (car option))
         (opnames #(:include :initial-offset :type :conc-name :copier :predicate))
         (bit (position keyword opnames))
         (args (cdr option))
         (arg-p (consp args))
         (arg (if arg-p (car args))))
    (when bit
      (if (logbitp bit seen)
          (error "More than one ~S option is not allowed" keyword))
      (setq seen (logior seen (ash 1 bit)))
      (multiple-value-bind (syntax-group winp)
          (cond ((= bit 0) (values 0 (and arg-p (proper-list-p args)))) 
                ((< bit 3) (values 1 (and arg-p (not (cdr args)))))
                (t         (values 2 (or (not args) (proper-list-length-p args 1)))))
        (unless winp
          (if (proper-list-p option)
              (error "DEFSTRUCT option ~S ~D one argument" keyword
                     (aref #("requires at least" "requires exactly" "accepts at most") syntax-group))
              (error "Invalid syntax in DEFSTRUCT option ~S" option)))))
    (case keyword
      (:named (error "DEFSTRUCT option :named takes no arguments."))
      (:conc-name
       (cond ((not arg-p) (setf (dsd-copier dd) nil))
             ((and arg-p (eq arg nil)) (setf (dsd-copier dd) nil))
             (t (setf (dsd-conc-name dd) (%conc-name-designator arg)))))
      (:copier
       (cond ((not arg-p) (setf (dsd-copier dd) nil))
             ((and arg-p (eq arg nil)) (setf (dsd-copier dd) nil))
             (t (check-type arg sop-symbolic-name "(:copier)")
                (setf (dsd-copier dd) arg)))  )
      (:predicate
       (cond ((not arg-p) (setf (dsd-predicate dd) nil))
             ((and arg-p (eq arg nil))(setf (dsd-predicate dd) nil))
             (t  (check-type arg sop-symbolic-name)
                 (setf (dsd-predicate dd) arg)))  )
      (:initial-offset
       (check-type arg (integer 0 128))
       (setf (dsd-initial-offset dd) arg)  )
      (:include
       ;; (:include name) | (:include name slots*)
       (setf (dsd-parent dd) (car args)
             (dsd-assigned dd) (cdr args))) ;; end :include
      (:constructor
          (unless (proper-list-length-p args 0 2)
            (error "Syntax error a DEFSTRUCT option ~s." option))
          (destructuring-bind (&optional (cname (%symbolize "MAKE-" (dsd-name dd)) cname-p)
                                 (boa nil boa-p)) args
            (cond ((not cname)
                   (when boa-p (error "Syntax error a DEFSTRUCT option ~s." option)))
                  ((or (not boa-p) (null boa))
                   (setq boa :default)))
            (check-type cname (or (eql nil) (and symbol (not keyword))))
            (push (cons cname boa) (dsd-constructors dd)))) ;;end :constructor
      (:type
       (cond ((memq arg '(vector list)) (setf (dsd-type dd) arg))
             ;; may be (:type (vector type))
             ((and (listp arg) (eq (car arg) 'vector)) (setf (dsd-type dd) (car arg)))
             (t (error "Malformed DEFSTRUCT option ~a.~%" option))) ) ;; end :type
      (otherwise (error "Unknown or unsupplied DEFSTRUCT option ~s." option)))
    seen))

;;; The parsing happens in two passes. DAS!PARSE-OPTION normalize the
;;; options and... store them (S-exprs) inside DD via
;;; mutation. DAS!PARSE-DEFSTRUCT-OPTIONS then does another pass over
;;; DD slots and set the final information (DSD-* structs) via
;;; mutation.  It would be nice to get rid of so many mutations, but
;;; it works for now.
(defun das!parse-defstruct-options (options dd)
  (let ((seen 0))
    (dolist (option options)
      (if (eq option :named)
          (setf (dsd-named-p dd) t)
          (setq seen
                (das!parse-option
                 (cond ((consp option) option)
                       ((memq option '(:conc-name :constructor :copier :predicate))
                        (list option))
                       (t  (error "Bad syntax DEFSTRUCT option: ~S." option)))
                 dd seen))))
    ;; prepare :constructors
    (let ((no-constructors nil)
          (default-p nil)
          (constructors nil))
      (dolist (cpair (dsd-constructors dd))
        (destructuring-bind (cname . boa-list) cpair
          (cond ((not cname) (setq no-constructors t))
                ((eq boa-list :default)
                 (if default-p
                     (error "Multiple default constructor defined."))
                 (push (make-dsd-constructor :name cname :boa :default) constructors)
                 (setq default-p t))
                ;; parse custom boa
                (t (push (das!parse-constructor cname boa-list) constructors)))))
      (when (and (eq no-constructors t) (not (null constructors)))
        (error "(:constructor nil) combined with other :constructor's."))
      (setf (dsd-constructors dd)
            (or constructors
                (list (make-dsd-constructor :name (%symbolize "MAKE-" (dsd-name dd))
                                            :boa :default)))))
    (flet ((option-present-p (bit-name)
             (let ((opnames #(:include :initial-offset :type :conc-name :copier :predicate)))
               (logbitp (position bit-name opnames) seen))))
      (if (option-present-p :include)
          (cond ((or (dsd-named-p dd) (null (dsd-type dd)))
                 ;; present structure is named or object based
                 (let* ((parent-name (dsd-parent dd))
                        (parent (if (exists-structure-p parent-name)
                                    (get-structure-dsd parent-name)
                                    (error "Structure ~s not exists." parent-name)))
                        (include-slots (dsd-assigned dd))
                        (parent-slot-names (das!effective-slot-names parent)))
                   (unless (eql (dsd-type dd) (dsd-type parent))
                     (error "Incompatible structure type (~a ~a : ~a ~a)"
                            (dsd-name dd) (dsd-type dd)
                            (dsd-name parent)(dsd-type parent)))
                   (unless (or (dsd-named-p parent) (null (dsd-type parent)))
                     ;; included is unnamed
                     (error "Unnamed structure ~a not included." parent-name))
                   (dolist (it include-slots)
                     ;; checking that the slot name is valid for the structure
                     (let ((slot-name (typecase it
                                        (list (car it))
                                        (symbol it)
                                        (t (raise-bad-include-slot it)))))
                       (unless (memq slot-name parent-slot-names)
                         (raise-bad-include-slot it))))
                   (setf (dsd-parent dd) parent
                         (dsd-assigned dd) (mapcar #'das!parse-struct-slot include-slots))))
                (t (error "DEFSTRUCT :include option provide only for named or standard structure."))))
      ;; predicate, copier, conc-name for named lisp structure
      (unless (option-present-p :conc-name)
        (setf (dsd-conc-name dd) (%symbolize (dsd-name dd) "-")))
      (unless (option-present-p :copier)
        (setf (dsd-copier dd) (%symbolize "COPY-" (dsd-name dd))))
      (when (memq (dsd-type dd) '(list vector))
        (when (option-present-p :predicate)
          (unless (dsd-named-p dd)
            (error "DEFSTRUCT option :predicate provide only for named structure.~%")))
        (when (dsd-named-p dd)
          (unless (option-present-p :predicate)
            (setf (dsd-predicate dd) (%symbolize (dsd-name dd) "-P")))))
      ;; initial-offset, predicate for object structure
      (when (null (dsd-type dd))
        (when (option-present-p :initial-offset)
          (warn "DEFSTRUCT option :INITIAL-OFFSET provided only for list/vector based structure.~%"))
        (unless (option-present-p :predicate)
          (setf (dsd-predicate dd) (%symbolize (dsd-name dd) "-P")))))))

(defun das!resolve-default-constructor (constructor slots)
  (when (eq :default (dsd-constructor-boa constructor))
    (setf (dsd-constructor-boa constructor)
          (list* '&key
                 (mapcar (lambda (x)
                           (list (dsd-slot-name x) (dsd-slot-initform x)))
                         slots))
          (dsd-constructor-assigns constructor)
          (mapcar #'dsd-slot-name slots))))

;;; ACCESSORS
(defun das!make-accessors (dd slots)
  (let ((storage-type (dsd-type dd))
        (conc-name (dsd-conc-name dd))
        (prototype (dsd-prototype dd)))
    (with-collect
      (dolist (it slots)
        (let* ((slot-name (dsd-slot-name it))
               (accessor-name (if conc-name
                                  (%symbolize conc-name slot-name)
                                  slot-name))
               (chk-t (dsd-slot-type it))
               (location (position slot-name prototype)))
          (unless location
            (error "BUG: slot-name ~a does not occur in prototype ~A"
                   slot-name prototype))
          (unless storage-type
            (setq location (concat (symbol-name slot-name)
                                   (integer-to-string location))))
          (collect `(defun ,accessor-name (obj)
                      ,(ecase storage-type
                         (list `(nth ,location obj))
                         (vector `(storage-vector-ref! obj ,location))
                         ((nil) `(oget* obj ,location)))))
          (unless (dsd-slot-read-only it)
            (collect `(defun (setf ,accessor-name) (value obj)
                        ,@(if chk-t (list `(check-type value ,chk-t)))
                        ,(ecase storage-type
                           (list `(rplaca (nthcdr ,location obj) value))
                           (vector `(storage-vector-set! obj ,location value))
                           ((nil) `(oset* value obj ,location)))
                        value))))))))

;;; PREDICATE
;;;    A predicate can be defined only if the structure is named;
;;;    if :type is supplied and :named is not supplied,
;;;    then :predicate must either be unsupplied or have the value nil
(defun das!make-predicate (dd)
  (awhen (dsd-predicate dd)
    (let ((name (dsd-name dd))
          (storage-type (dsd-type dd))
          (leader-p (dsd-named-p dd))
          (prototype (dsd-prototype dd)))
      (when (and storage-type (not leader-p))
        (warn "predicate ~a unsupplied for unnamed vector/list structure " it)
        (return-from das!make-predicate nil))
      (if storage-type
          (let ((imap (or (position `',name prototype :test 'equal)
                          (error "BUG: '~a does not occur in prototype ~a"
                                 name prototype))))
            (cond ((eql 'vector storage-type)
                   `(defun ,it (obj)
                      (and (storage-vector-p obj)
                           (> (length obj) ,imap)
                           (eql (storage-vector-ref obj ,imap) ',name))))
                  ((eql 'list storage-type)
                   `(defun ,it (obj)
                      (and (proper-list-p obj)
                           (> (length obj) ,imap)
                           (eql (nth ,imap obj) ',name))))))
          `(let ((dd (get-structure-dsd ',name)))
             (defun ,it (obj)
               (and (objectp obj)
                    (if (memq dd (das!inherit-dsds (oget* obj "structDescriptor")))
                        t nil))))))))

;;; COPIER
#-jscl
(defun clone (x)
  (error "Clone not implemented in host: ~a" x))

(defun das!make-copier (dd)
  (awhen (dsd-copier dd)
    (ecase (dsd-type dd)
      (list `(defun ,it (object) (copy-list object)))
      (vector `(defun ,it (object) (copy-seq object)))
      ((nil)
       (let ((name (dsd-name dd)))
         `(defun ,it (obj)
            (let ((dd (get-structure-dsd ',name)))
              (cond ((and (objectp obj)
                          (memq dd (das!inherit-dsds (oget* obj "structDescriptor"))))
                     (clone obj))
                    (t (error 'type-error :datum obj :expected-type ',name))))))))))

;;; CONSTRUCTORS
(defun das!make-constructor (dd constructor slots)
  (das!resolve-default-constructor constructor slots)
  (let* ((name (dsd-name dd))
         (storage-type (dsd-type dd))
         (prototype (dsd-prototype dd))
         (make-name (dsd-constructor-name constructor))
         (boa (dsd-constructor-boa constructor))
         (assigned-slots (dsd-constructor-assigns constructor)))
    `(let ((dd (get-structure-dsd ',name)))
       (declare (ignorable dd))
       (defun ,make-name ,(das!reassemble-boa-list boa slots)
         ;; check types
         ,@(with-collect
             (dolist (it slots)
               (when (and (memq (dsd-slot-name it) assigned-slots)
                          (dsd-slot-type it)
                          (not (dsd-slot-read-only it)))
                 (collect `(check-type ,(dsd-slot-name it) ,(dsd-slot-type it))))))
         ;; bind default slot values
         (let ,(with-collect
                 (dolist (it slots)
                   (unless (memq (dsd-slot-name it) assigned-slots)
                     (collect `(,(dsd-slot-name it) ,(dsd-slot-initform it))))))
           ;; construct the structure
           ,(if storage-type
                `(,storage-type ,@prototype)
                `(new "dt_Name" :structure "structDescriptor" dd
                      ,@(mapcan #'list (def!struct-property-names prototype) prototype))))))))

(defun das!make-structure (dd)
  (let ((slots (das!effective-slots dd)))
    (append
     (list `(eval-when (:compile-toplevel :load-toplevel :execute)
              (das!register-structure ,dd)))
     (mapcar (lambda (it)
               (das!make-constructor dd it slots))
             (dsd-constructors dd))
     (das!make-accessors dd slots)
     (list (das!make-predicate dd))
     (list (das!make-copier dd))
     (list
      (if (and (dsd-type dd) (dsd-named-p dd) (dsd-predicate dd))
          `(deftype ,(dsd-name dd) () '(satisfies ,(dsd-predicate dd)))
          nil)))))

;;; Parse slot definition
;;; catch bug (defstruct name (:copier cname) slot1 ... slotn)
(defun das!parse-struct-slot (slot)
  (multiple-value-bind (name default type read-only)
      (typecase slot
        (symbol
         (typecase slot
           ((or (member :conc-name :constructor :copier :predicate :named :include :type :initial-offset)
                keyword)
            (error "DEFSTRUCT slot ~S syntax error" slot)))
         (values slot nil t nil))
        (cons
         (destructuring-bind (name &optional default &key (type t) read-only)
             slot
           (typecase name
             ((member :conc-name :constructor :copier :predicate :include :named :type :initial-offset)
              ;;catch bug (defstruct name (:copier cname) slot1 ... slotn)
              (error "Slot name of ~S indicates probable syntax error in DEFSTRUCT" name))
             (keyword (error "DEFSTRUCT slot ~S syntax error." slot)))
           (values name default type read-only)))
        (t (error " ~S is not a legal slot description." slot)))
    (make-dsd-slot :name name :initform default :type type :read-only read-only)))

;;; check duplicate & identical slot names
(defun das!parse-struct-slots (dd slots)
  (let* ((sd (mapcar 'das!parse-struct-slot slots))
         (raw (mapcar #'dsd-slot-name sd))
         (clear (remove-duplicates raw)))
    (when (/= (length raw) (length clear)) (error "Duplicate slot names ~a" raw))
    sd))

;;; compute structure storage
;;; make prototype
;;;  compute storage prototype for structure list-vector storage base
;;;
;;;  das!compute-storage-prototype dd-list
;;;    dd-list ::= {inherited-dsd}* self-dsd
;;; => prototype
;;;     prototype::= {offset-cell* leader-cell? sn*}*
;;;     offset-cell::= (quote nil) (nothing if :initial-offset unused)
;;;     leader-cell::= (quote real-structure-name) (nothing if :named unused)
;;;     sn::= real slot-name
;;; for 
;;; (das!struct-storage-generate-prototype
;;;   (list (... :name binop :named-p t :initial-offset 2
;;;              :slots ((binop-a nil nil nil)(binop-b nil nil nil)))
;;;         (... :name maps :named-p t :initial-offset 3
;;;              :slots ((maps-a nil nil nil)(maps-b nil nil nil)))
;;;         (... :name pas :named-p t :initial-offset 0
;;;              :slots ((pas-a nil nil nil)(pas-b nil nil nil)))))
;;;  from  (defstruct (pas :named (:include maps) pas-a pas-b pas-c))
;;;
;;;  prototype::= ('NIL 'NIL 'BINOP BINOP-A BINOP-B 'NIL 'NIL 'NIL 'MAPS MAPS-A MAPS-B 'PAS PAS-A PAS-B))
;;;

;;;  compute storage prototype from the descriptor list in DSD-INHERIT-DSDS
(defun das%compute-storage-prototype (dd-list)
  (with-collect
    (dolist (it dd-list)
      (let ((slots (dsd-slots it))
            (offset (dsd-initial-offset it)))
        (dotimes (i offset)
          (collect ''nil))
        ;; store tag for named structure
        (when (and (dsd-type it) (dsd-named-p it))
          (collect `',(dsd-name it)))
        (dolist (slot slots)
          (collect (dsd-slot-name slot)))))))

(defun das!layout-compatible-p (dd old-dd)
  (and (eql (dsd-type dd) (dsd-type old-dd))
       (equal (dsd-prototype dd) (dsd-prototype old-dd))))

;;; Register DD into *STRUCTURES*, check for incompatible redefinition
;;; beforehand
;;;
;;; This function should run at both compile and load time, before any
;;; other forms (predicates, constructors etc) generated by DEFSTRUCT,
;;; so that these other forms can then retrieve the up-to-date DSD by
;;; (gethash name *STRUCTURES*).
;;;
;;; DEFSTRUCT macro computes DD at expansion time and pass it as
;;; literal object to DAS!REGISTER-STRUCTURE. On the other hand, DD
;;; entry in *STRUCTURES* might be mutated by later
;;; redefinition. Therefore DAS!REGISTER-STRUCTURE cannot directly put
;;; DD into *STRUCTURES* and have to either copy it or copy (merge)
;;; its content into an existing *STRUCTURES* entry.
(defun das!register-structure (dd)
  (let ((dd (copy-dsd dd))
        (old (gethash (dsd-name dd) *structures*)))
    (cond (old
           (if (das!layout-compatible-p dd old)
               ;; Modify DSD in place, so old instances are still
               ;; recognized by predicate and copier.

               ;; Hypothesis: TYPE, NAMED-P, CONC-NAME, INITIAL-OFFSET
               ;; cannot change, is this true?
               (setf (dsd-predicate old) (dsd-predicate dd)
                     (dsd-copier old) (dsd-copier dd)
                     (dsd-constructors old) (dsd-constructors dd)
                     (dsd-slots old) (dsd-slots dd) ; initform might change
                     (dsd-assigned old) (dsd-assigned dd))
               (if (dsd-childs old)
                   (error "Cannot change layout of structure ~A, included in ~A"
                          (dsd-name dd) (dsd-childs old))
                   ;; Incompatible layout, invalidate old instances
                   ;; by registering a new DSD
                   (progn
                     (warn "Redefining structure ~A" (dsd-name dd))
                     (setf (gethash (dsd-name dd) *structures*) dd)))))
          (t (setf (gethash (dsd-name dd) *structures*) dd)))
    ;; The compile time parent-child link will be destroyed by COPY-DSD,
    ;; therefore we need to re-lookup parent by name
    (awhen (dsd-parent dd)
      (setf (dsd-parent dd)
            (or (get-structure-dsd (dsd-name it))
                (error "BUG: parent DSD ~A (for ~A) not yet registered"
                       (dsd-name it) (dsd-name dd))))
      (push dd (dsd-childs (dsd-parent dd))))))


(defun das!defstruct-expand (name options slots)
  (let ((dd (make-dsd :name name)))
    (das!parse-defstruct-options options dd)
    (setf (dsd-slots dd) (das!parse-struct-slots dd slots))
    ;; Check inherited slots
    (awhen (dsd-parent dd)
      (unless (das!include-possible-p dd it)
        (error "Structure ~A have overlapping slots with included ~A."
               name (dsd-name it))))
    ;; Compute prototype
    (setf (dsd-prototype dd) (das%compute-storage-prototype (das!inherit-dsds dd)))
    (das!make-structure dd)))

(defmacro das!struct (name-and-options &rest slots)
  (let* ((name-and-options (ensure-list name-and-options))
         (options (rest name-and-options))
         (name (car name-and-options)))
    `(progn 
       ,@(das!defstruct-expand name options slots)
       ',name)))

#+jscl
(defmacro defstruct (name-options &rest slots)
  `(das!struct ,name-options ,@slots))

;;; EOF
