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

(setq *structures* (make-hash-table))

;;; list length 1
(defun singleton-p (list)
  (and (consp list) (null (cdr list))))

;;; list length 2
(defun doubleton-p (list)
  (and (consp list)
       (let ((rest (cdr list)))
         (and (consp rest)
              (null (cdr rest))))))

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

(defun das!lambda-list-args (from-boa-list)
  (let* ((ll (parse-destructuring-lambda-list from-boa-list))
         (r)
         (req (lambda-list-reqvars ll))
         (opt (dolist (it (lambda-list-optvars ll) (reverse r))
                (push (list (optvar-variable it) (optvar-initform it)) r)))
         (key (progn (setq r nil)
                     (dolist (it (lambda-list-keyvars ll) (reverse r))
                       (push (list (keyvar-variable it) (keyvar-initform it)) r))))
         (aux (progn (setq r nil)
                     (dolist (it (lambda-list-auxvars ll) (reverse r))
                       (push (list (auxvar-variable it) (auxvar-initform it)) r)))

           ))
    (values req opt key aux)))

(defun das!reassemble-boa-list (boa-list slots)
  (let ((new-boa-list nil)
        (unmatch-p t) (key-p) (opt-p) (aux-p) (rest-p)
        (lkw-p nil)
        (sd))
    (flet ((%match (name d)
             (push (list name (dsd-slot-initform d)) new-boa-list))
           (%save (x) (push x new-boa-list))
           (%switch (x)
             (setq key-p (if (eq x '&key) t) opt-p (if (eq x '&optional) t)
                   aux-p (if (eq x '&aux) t) rest-p (if (eq x '&rest) t)))
           (%find-slot-by-name (name)
             (find-if (lambda (slot) (if (eq name (dsd-slot-name slot)) slot)) slots)))
      (dolist (it boa-list (reverse new-boa-list))
        (cond
          ((atom it)
           (setq lkw-p (memq it '(&key &rest &optional &aux)))
           (%switch it)
           (cond (unmatch-p
                  (%save it)
                  (if lkw-p (setq unmatch-p nil lkw-p nil)))
                 (t (cond (lkw-p
                           (%save it)
                           (setq lkw-p nil))
                          (t (%match it (%find-slot-by-name it)))))))
          ((listp it)
           (setq sd (%find-slot-by-name (if (atom (car it)) (car it) (cadar it))))
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
                  (%save  it) )))))))))

(defun neq (x y) (not (eq x y)))

;;; symbols concatenate
(defun %symbolize (&rest rest)
  (intern
   (apply
    'concat
    (%lmapcar (lambda (x)
              (typecase x
                (symbol (symbol-name x))
                (string x)
                (t (error 'type-error :datum x :expected-type `(or symbol string)))))
            rest))))

;;; make check-type sign string
;;; for debug identicale
(defun das!struct-generate-signed (name)
  (concat "(" (symbol-name name) ")"))

;;; boa parse
(defun das!parse-struct-lambda-list (from-boa-list)
  (let* ((ll (parse-destructuring-lambda-list from-boa-list))
         (r)
         (req (lambda-list-reqvars ll))
         (opt (dolist (it (lambda-list-optvars ll) (reverse r))
                (push (list (optvar-variable it) (optvar-initform it)) r)))
         (key (progn (setq r nil)
                     (dolist (it (lambda-list-keyvars ll) (reverse r))
                       (push (list (keyvar-variable it) (keyvar-initform it)) r))))
         (aux (progn (setq r nil)
                     (dolist (it (lambda-list-auxvars ll) (reverse r))
                       (push (list (auxvar-variable it) (auxvar-initform it)) r)))))
    (values req opt key aux)))

(def!struct dsd
  name
  type
  named-p
  seen-options
  conc-name
  predicate
  copier
  (initial-offset 0)
  constructor
  parent
  (childs '())
  slots
  (slot-nums 0)
  include
  inherit-slots
  (inherit-slot-nums 0)
  (instance-len 0)
  storage
  prototype
  descriptor
  map-names)

;;; dd-slot slot descriptor
(def!struct dsd-slot name accessor initform (type t) read-only)

;;; structure storage descriptor.
(def!struct dsd-storage-descriptor
  leader  ;; -leader::= structure name, if structure is :named
  n       ;; -n::= storage slots number include named & initial-offset
  offset) ;; -offset::= some initial-offset

  
;;; structure-include
(def!struct dsd-include name assigned inherited sd descriptor)
;;; name::= name included structure
;;; inherited:: all slot-definitions from included structure-type-slots
;;;             used for make-constructor == ((descriptor) slot-definitions*)
;;; assigned::= the names of the slots that were specified in the option :include
;;;             filled in when parsing (:include name slots*)
;;; descriptor::= storage-descriptor from included structure-type-descriptor
;;;             note: not used
;;; sd::= parent slot-definitions without descriptor

  
;;; structure-prototype
(def!struct dsd-prototype n map storage)

;;; structure-constructor.
(def!struct dsd-constructor name boa required optional key aux)

#-jscl
(defun %dsd-my-be-rewrite (name)
  (declare (ignore name))
  t)
#+jscl
(defun %dsd-my-be-rewrite (name)
  (let ((dd (get-structure-dsd name)))
    ;; structure not exists, so may be rewrite
    (or (null dd)
        (and
         ;; only list/vector base
         (memq (dsd-type dd) '(list vector))
         ;; childs structures - not exists
         (null (dsd-childs dd))))))

(defun %hash-table-keys (table)
  (let ((keys nil))
    (maphash
     (lambda (k v)
       (declare (ignore v))
       (push k keys))
     table)
    keys))

(defun das!include-possible-p (d1 d2)
  (let ((s1 (%lmapcar 'dsd-slot-name (dsd-slots d1)))
        (s2 (%lmapcar 'dsd-slot-name (dsd-slots d2))))
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
                (t         (values 2 (or (not args) (singleton-p args)))))
        (unless winp
          (if (proper-list-p option)
              (error "DEFSTRUCT option ~S ~D one argument" keyword
                     (aref #("requires at least" "requires exactly" "accepts at most") syntax-group))
              (error "Invalid syntax in DEFSTRUCT option ~S" option)))))
    (case keyword
      (:named (error "DEFSTRUCT option :named takes no arguments."))
      (:conc-name
       (cond ((neq arg-p t) (setf (dsd-copier dd) nil))
             ((and arg-p (eq arg nil)) (setf (dsd-copier dd) nil))
             (t (setf (dsd-conc-name dd) (%conc-name-designator arg)))))
      (:copier
       (cond ((neq arg-p t) (setf (dsd-copier dd) nil))
             ((and arg-p (eq arg nil)) (setf (dsd-copier dd) nil))
             (t (check-type arg sop-symbolic-name "(:copier)")
                (setf (dsd-copier dd) arg)))  )
      (:predicate
       (cond ((neq arg-p t)(setf (dsd-predicate dd) nil))
             ((and arg-p (eq arg nil))(setf (dsd-predicate dd) nil))
             (t  (check-type arg sop-symbolic-name)
                 (setf (dsd-predicate dd) arg)))  )
      (:initial-offset
       (check-type arg (integer 0 128))
       (setf (dsd-initial-offset dd) arg)  )
      (:include
       ;; (:include name) | (:include name slots*)
       (setf (dsd-include dd) args)  ) ;; end :include
      (:constructor
          (unless (proper-list-length-p args 0 2)
            (error "Syntax error a DEFSTRUCT option ~s." option))
          (destructuring-bind (&optional (cname (%symbolize "MAKE-" (dsd-name dd)) cname-p)
                                 (boa nil boa-p)) args
            (setq boa
                  (cond ((not cname)
                         (if boa-p (error "Syntax error a DEFSTRUCT option ~s." option))
                         (if cname-p :disable))
                        ((or (not boa-p) (null boa)) :default)
                        (t boa)))
            (check-type cname (or (eql nil) (and symbol (not keyword))))
            (push (cons cname boa) (dsd-constructor dd)))) ;;end :constructor
      (:type
       (cond ((memq arg '(vector list)) (setf (dsd-type dd) arg))
             ;; may be (:type (vector type))
             ((and (listp arg) (eq (car arg) 'vector)) (setf (dsd-type dd) (car arg)))
             (t (error "Malformed DEFSTRUCT option ~a.~%" option))) ) ;; end :type
      (otherwise (error "Unknown or unsupplied DEFSTRUCT option ~s." option)))
    seen))

(defun das!parse-defstruct-options (options dd)
  (let ((seen 0)
        (named-p nil))
    (dolist (option options)
      (if (eq option :named)
          (setf named-p t (dsd-named-p dd) t)
          (setq seen
                (das!parse-option
                 (cond ((consp option) option)
                       ((memq option '(:conc-name :constructor :copier :predicate))
                        (list option))
                       (t  (error "Bad syntax DEFSTRUCT option: ~S." option)))
                 dd seen))))
    ;; prepare :constructors
    (let ((no-constructors nil)
          (default nil)
          (default-p nil)
          (custom nil)
          (cname nil) (boa-list :default))
      (dolist (cpair (dsd-constructor dd))
        ;; bug: destructuring-bind not parsing (a . b)
        (setq cname (car cpair)  boa-list (cdr cpair))
        (cond ((not cname) (setq no-constructors t))
              ((eq boa-list :default)
               (if default-p
                   (error "Multiple default constructor defined."))
               (setq default cpair)
               (setq default-p t))
              ;; parse custom boa
              (t (multiple-value-bind (req opt key aux)
                     (das!parse-struct-lambda-list boa-list)
                   (push
                    (make-dsd-constructor :name cname :boa boa-list :required req
                                          :optional opt   :key key :aux aux)
                    custom)) )))
      (setf (dsd-constructor dd)
            ;; now dsd-constructor::= (default|nil custom|nil)
            (if (eq no-constructors t)
                (progn
                  (when (or (not (null default)) (not (null custom)))
                    (error "(:constructor nil) combined with other :constructro's."))
                  nil)
                (cond ((and (null default) (null custom))
                       (setq default (cons (%symbolize "MAKE-" (dsd-name dd)) :default))
                       (list default nil))
                      (t (list default custom))))))
    (flet ((option-present-p (bit-name)
             (let ((opnames #(:include :initial-offset :type :conc-name :copier :predicate)))
               (logbitp (position bit-name opnames) seen))))
      (if (option-present-p :include)
          (cond ((or (dsd-named-p dd) (null (dsd-type dd)))
                 ;; present structure is named or clos based
                 (let* ((parent-name (car (dsd-include dd)))
                        (parent nil)
                        (include-slots (cdr (dsd-include dd)))
                        (include-name-table)
                        (slot-name)
                        (include))
                   (if (exists-structure-p parent-name)
                       (setq parent (get-structure-dsd parent-name))
                       (error "Structure ~s not exists." parent-name))
                   (setq include-name-table (dsd-map-names  parent))
                   (unless (eql (dsd-type dd) (dsd-type parent))
                     (error "Incompatible structure type (~a ~a : ~a ~a)"
                            (dsd-name dd) (dsd-type dd)
                            (dsd-name parent)(dsd-type parent)))
                   (unless (or (dsd-named-p parent) (null (dsd-type parent)))
                     ;; included is unnamed
                     (error "Unnamed structure ~a not included." parent-name))
                   (setq include (make-dsd-include :name parent-name))
                   (setf (dsd-include-assigned include)
                         ;; checking that the slot name is valid for the structure
                         (let ((sd)
                               (r))
                           (dolist (it include-slots (reverse r))
                             (typecase it
                               (list (setq slot-name (car it)))
                               (symbol (setq slot-name it))
                               (t (raise-bad-include-slot it)))
                             (unless (gethash slot-name include-name-table)
                               (raise-bad-include-slot it))
                             (setq sd (das!parse-struct-slot it))
                             (push sd r))))
                   (setf (dsd-include dd) include)
                   (setf (dsd-include-inherited include) (copy-tree (dsd-inherit-slots parent)))
                   (setf (dsd-parent dd) parent-name)))
                (t (error "DEFSTRUCT :include option provide only for named or clos structure."))))
      ;; predicate, copier, conc-name for named lisp structure
      (unless (option-present-p :conc-name)
        (setf (dsd-conc-name dd) (%symbolize (dsd-name dd) "-")))
      (unless (option-present-p :copier)
        (setf (dsd-copier dd) (%symbolize "COPY-" (dsd-name dd))))
      (when (memq (dsd-type dd) '(list vector))
        (when (option-present-p :predicate)
          (unless named-p (error "DEFSTRUCT option :predicate provide only for named structure.~%")))
        (when named-p 
          (unless (option-present-p :predicate)
            (setf (dsd-predicate dd) (%symbolize (dsd-name dd) "-P")))))
      ;; initial-offset, predicate for clos structure
      (when (null (dsd-type dd))
        (when (option-present-p :initial-offset)
          (warn "DEFSTRUCT option :INITIAL-OFFSET provided only for list/vector based structure.~%"))
        (unless (option-present-p :predicate)
          (setf (dsd-predicate dd) (%symbolize (dsd-name dd) "-P")))))
    (setf (dsd-seen-options dd) seen)
    seen))

(defun %atom-or-car (seq)
  (mapcar
   (lambda (x)
     (if (atom x)
         x
         (if (listp (car x))
             (error "Unsupported BOA form ~a." x)
             (car x) )))
   seq))

(defun das!canonicalize-slots (slots)
  (let* ((dv)
        (r (%lmapcar
            (lambda (slot)
              (list (dsd-slot-name slot)
                    :initform (typecase (setq dv (dsd-slot-initform slot))
                                (null nil)
                                (symbol (list 'quote dv))
                                (t dv))
                    :initarg (intern (symbol-name (dsd-slot-name slot)) "KEYWORD")))
            slots)))
    r))


#+jscl
(defclass structure-class (standard-class) nil)

(defun das!make-structure-class (name slots include)
  (let ((class-slots (das!canonicalize-slots slots))
        (cpl (if include (list (dsd-include-name include)) nil)))
    `(defclass ,name ,cpl  ,class-slots (:metaclass structure-class))))

;;; accessors for each slots structure
(defun das!%make-read-accessor-clos (name slot-name)
  `(defun ,name (obj)
     (slot-value obj ',slot-name)))

(defun das!%make-write-accessor-clos (name slot-name chk-t)
  (let ((sign (das!struct-generate-signed name)))
    `(defun (setf ,name) (value obj)
       ,@(if chk-t (list `(check-type value ,chk-t ,sign)))
       (setf (slot-value obj ',slot-name) value) )))

(defun das!make-struct-accessors-clos (slots)
  (let ((slot-name)
        (result)
        (chk-t)
        (accessor-name))
    (dolist (it slots)
      (setq accessor-name (dsd-slot-accessor it)
            chk-t (dsd-slot-type it)
            slot-name (dsd-slot-name it))
      (push (das!%make-read-accessor-clos accessor-name slot-name) result)
      (unless (dsd-slot-read-only it)
        (push (das!%make-write-accessor-clos accessor-name slot-name chk-t) result)))
    (reverse result)))

;;; each constructor from (:constructor) forms
(defun das!make-clos-constructor (class-name constructor slots)
  ;; at this point slots::=  (append include-slots own-slots)
  ;;               constructor::= structure-constructor
  (let* ((make-name (dsd-constructor-name constructor))
         (boa (dsd-constructor-boa constructor))
         (req (dsd-constructor-required constructor))
         (opt (%atom-or-car (dsd-constructor-optional constructor)))
         (key (%atom-or-car (dsd-constructor-key constructor)))
         (aux (%atom-or-car (dsd-constructor-aux constructor)))
         (assigned-slots (append req opt key aux))
         (keyargs))
    ;; make :key arg pair
    (dolist (it assigned-slots)
      ;;(push it keyargs)
      (push (intern (symbol-name it) "KEYWORD") keyargs)
      (push it keyargs))
    `(defun ,make-name ,(das!reassemble-boa-list boa slots)
       ,@(loop
           ;; check-type's for slots if :type assigned
           for slot in slots
           when (and (memq (dsd-slot-name slot) assigned-slots)
                     (dsd-slot-type slot)
                     (not (dsd-slot-read-only slot)))
             collect `(check-type ,(dsd-slot-name slot) ,(dsd-slot-type slot) ))
       (make-instance ',class-name ,@(reverse keyargs)))))

;;; make standard structure predicate and copier
(defun das!make-structure-class-predicate (structure-name predicate-p)
  `(defun ,predicate-p (obj)
     (when (eq (class-name (class-of (class-of obj))) 'structure-class)
       (eq (class-name (class-of obj)) ',structure-name))))

#-jscl
(defun das!clone-clos-base (object)
  (error "Clone not implemented in host: ~a" object))
#+jscl
(defun das!clone-clos-base (object)
  (let ((r (copy-std-instance object)))
    (setf (std-instance-slots r) (list-to-vector (vector-to-list (std-instance-slots r))))
    r))

(defun das!make-structure-class-copier (structure-name copier-p)
  `(defun ,copier-p (obj)
     (cond ((eq (class-name (class-of (class-of obj))) 'structure-class)
            (if (eq (class-name (class-of obj)) ',structure-name)
                (das!clone-clos-base obj)
                (error "Object ~a not a structure ~a." obj ',structure-name)))
           (t (error "Object ~a not a structure class." obj)))))
;;; end CLOS section

;;; Lisp structure section
;;; ACCESSORS
(defun das!%make-read-accessor-vector (name index)
  `(defun ,name (obj) (storage-vector-ref obj ,index)))
(defun das!%make-write-accessor-vector (name index chk-t)
  (let ((sign (das!struct-generate-signed name)))
    `(defun (setf ,name) (value obj)
       ,@(if chk-t (list `(check-type value ,chk-t ,sign)))
       (storage-vector-set! obj ,index value))))
(defun das!%make-read-accessor-list (name index)
  `(defun ,name (obj)
     (nth ,index obj)) )
(defun das!%make-write-accessor-list (name index chk-t)
  (let ((sign (das!struct-generate-signed name)))
    `(defun (setf ,name) (value obj)
       ,@(if chk-t (list `(check-type value ,chk-t ,sign)))
       (rplaca (nthcdr ,index obj) value) )))

(defun das!make-struct-accessors-lv (storage-type hash slots)
  (let ((index)
        (result)
        (chk-t)
        (accessor-name)
        (fn-read 'das!%make-read-accessor-vector)
        (fn-write 'das!%make-write-accessor-vector))
    (cond ((eql storage-type 'list)
           (setq fn-read 'das!%make-read-accessor-list)
           (setq fn-write 'das!%make-write-accessor-list)))
    (dolist (it slots)
      (setq accessor-name (dsd-slot-accessor it)
            chk-t (dsd-slot-type it)
            index (gethash (dsd-slot-name it) hash))
      (unless index
        (error "Hash malformed : slot-name ~a accessor ~a" (dsd-slot-name it) accessor-name))     
      (push (funcall fn-read accessor-name index) result)
      (unless (dsd-slot-read-only it)
        (push (funcall fn-write accessor-name index chk-t) result)))
    (reverse result)))

;;; PREDICATE
;;;    A predicate can be defined only if the structure is named;
;;;    if :type is supplied and :named is not supplied,
;;;    then :predicate must either be unsupplied or have the value nil
(defun das!make-struct-predicate (prototype structure-type storage-type leader-p predicate)
  (when predicate
    (when (and (memq storage-type '(vector list)) (not leader-p))
      (warn "predicate ~a unsupplied for unnamed vector/list structure " predicate)
      (return-from das!make-struct-predicate nil))
    (let* ((imap 0))
      (dolist (cell (dsd-prototype-map prototype))
        (if (eql cell -3)
            (return))
        (incf imap))
      (cond ((eql 'vector storage-type)
             `(defun ,predicate (obj)
                (and (storage-vector-p obj)
                     (> (length obj) ,imap)
                     (eql (storage-vector-ref obj ,imap) ',structure-type))))
            ((eql 'list storage-type)
             `(defun ,predicate (obj)
                (and (proper-list-p obj)
                     (> (length obj) ,imap)
                     (eql (nth ,imap obj) ',structure-type))))))))

;;; COPIER

(defun das!clone-list-base (object) (copy-list object))

(defun das!clone-vector-base (object) (copy-seq object))

(defun das!make-struct-copier (name storage-type leader-p copier)
  (declare (ignore name leader-p))
  (when copier
    (cond ((eq storage-type 'list)
           `(defun ,copier (object) (das!clone-list-base object)))
          ((eq storage-type 'vector)
           `(defun ,copier (object) (das!clone-vector-base object))))))

;;; CONSTRUCTORS
(defun das!make-constructor-lv-for (prototype storage-type constructor slots)
  (let* ((make-name (dsd-constructor-name constructor))
         (boa (dsd-constructor-boa constructor))
         (req (dsd-constructor-required constructor))
         (opt (%atom-or-car (dsd-constructor-optional constructor)))
         (key (%atom-or-car (dsd-constructor-key constructor)))
         (aux (%atom-or-car (dsd-constructor-aux constructor)))
         (assigned-slots (append req opt key aux))
         (default-slots
           (set-difference (%lmapcar 'dsd-slot-name slots)
                           (remove nil assigned-slots)))
         (signed (das!struct-generate-signed make-name))
         (storage)
         (protos (dsd-prototype-storage prototype))
         (map-position 0)
         (sym))
    (dolist (it (dsd-prototype-map prototype))
      (cond ((eql it -1)
             (push nil storage))
            ((eql it -2)
             (setq sym (nth map-position protos))
             (push `',sym storage))
            ((eql it -3)
             (setq sym (nth map-position protos))
             (push `',sym storage))
            (t (setq sym (nth map-position protos))
               (let (default)
                 (cond ((memq sym default-slots)
                        (setq default (find sym slots :key #'dsd-slot-name))
                        (push (dsd-slot-initform default) storage))
                       (t (push (nth map-position protos) storage))))))
      (incf map-position))
    (setq storage (reverse storage))
    `(defun ,make-name ,(das!reassemble-boa-list boa slots)
       ,@(loop
           ;; check-type's for slots if :type assigned
           for slot in slots
           ;;when (and (not (member (structure-slot-name slot) default-slots))
           ;;          (structure-slot-type slot))
           when (and (memq (dsd-slot-name slot) assigned-slots)
                     (dsd-slot-type slot)
                     (not (dsd-slot-read-only slot)))
             collect `(check-type ,(dsd-slot-name slot) ,(dsd-slot-type slot) ,signed))
       ;; and prototype into required form
       (,storage-type ,@storage))))

;;; generating structure constructors for list-vector storage 
(defun %update-include-slots (slots asis)
  (let (sname sval)
    (dolist (a asis)
      (cond ((dsd-slot-p a)
             (setq sname (dsd-slot-name a) sval (dsd-slot-initform a))
             (map 'nil 
                  (lambda (slot)
                    (cond ((eq (dsd-slot-name slot) sname)
                           (if (dsd-slot-type slot)
                               (unless (typep sval (dsd-slot-type slot))
                                 (error 'type-error :datum a :expected-type (dsd-slot-type slot))))
                           (setf (dsd-slot-initform slot) sval))))
                  slots)))))
  slots)

(defun das!make-struct-constructors (structure-type prototype storage-type constructors slots asis)
  ;; structure-type::=structure-name
  ;; constructors::= ((default)(custom))
  (declare (ignore structure-type))
  (let ((result)
        #+nil (storage (dsd-prototype-storage prototype))
        (slots (%update-include-slots slots asis)))
    (if (null constructors)
        (list nil)
        (destructuring-bind (default custom) constructors
          (when custom
            (dolist (constructor custom)
              ;; specialized constructor
              (push (das!make-constructor-lv-for  prototype storage-type constructor slots)
                    result)))
          ;; default make-constructor
          (when default
            ;; default::=(cname . :default)
            (let ((boa
                    (list* '&key
                           (%lmapcar (lambda (x)
                                     (list (dsd-slot-name x) (dsd-slot-initform x)))
                                   slots)))
                  (constructor))
              (multiple-value-bind (req opt key) (das!parse-struct-lambda-list boa)
                (setq constructor
                      (make-dsd-constructor :name (car default)
                                            :boa boa :required req :optional opt :key key)))
              (push (das!make-constructor-lv-for prototype storage-type constructor slots)
                    result)))))
    result))

;;; entry point for lisp base object's
(defun %conc-accessor-names (slot conc-name)
  (if conc-name
      (setf (dsd-slot-accessor slot) (%symbolize conc-name (dsd-slot-name slot)))
      (setf (dsd-slot-accessor slot) (dsd-slot-name slot)))
  slot)

(defun das!make-lisp-base-structure (dd)
  (let ((slots)
        (asis (if (dsd-include dd) (dsd-include-assigned (dsd-include dd))))
        (conc-name (dsd-conc-name dd))
        (q))
    (setq slots
          (if (dsd-inherit-slots dd)
              ;; slots merged with parent slots
              (dolist (i (dsd-inherit-slots dd) (reverse slots))
                (mapcar (lambda (x) (push x slots)) (cdr i)))
              ;; slots without parent slots
              (dsd-slots dd)))
    (mapcar (lambda (x) (%conc-accessor-names x conc-name)) slots)
    (setq q
          (append
           (das!make-struct-constructors (dsd-name dd) (dsd-prototype dd) (dsd-type dd)
                                         (dsd-constructor dd) slots asis)
           (das!make-struct-accessors-lv  (dsd-type dd) (dsd-map-names dd) slots)
           (list (das!make-struct-predicate  (dsd-prototype dd) (dsd-name dd) (dsd-type dd)
                                             (dsd-named-p dd) (dsd-predicate dd)))
           (list (das!make-struct-copier (dsd-name dd) (dsd-type dd) (dsd-named-p dd) (dsd-copier dd)))
           (list
            (if (and (dsd-type dd) (dsd-named-p dd)(dsd-predicate dd))
                `(deftype ,(dsd-name dd) () '(satisfies ,(dsd-predicate dd)))
                nil))))
    (remove nil q)
    ))

;;; entry point for clos base
(defun das!make-standard-structure (dd)
  (let ((name (dsd-name dd))
        (slots)
        (asis (if (dsd-include dd) (dsd-include-assigned (dsd-include dd))))
        (conc-name (dsd-conc-name dd))
        (constructors (dsd-constructor dd))
        (q))
    (setq slots
          (if (dsd-inherit-slots dd)
              (dolist (i (dsd-inherit-slots dd) (reverse slots))
                (mapcar (lambda (x) (push x slots)) (cdr i)))
              (dsd-slots dd)))
    (mapcar (lambda (x) (%conc-accessor-names x conc-name)) slots)
    (setq slots (%update-include-slots slots asis))
    (push (das!make-structure-class name (dsd-slots dd) (dsd-include dd)) q)
    (dolist (it (das!make-struct-accessors-clos slots))
      (push it q))
    (if constructors
        (destructuring-bind (default custom) constructors
          (when custom
            (dolist (constructor custom)
              (push (das!make-clos-constructor name constructor slots) q)))
          (when default
            (let ((boa
                    (list* '&key
                           (mapcar (lambda (x)
                                     (list (dsd-slot-name x) (dsd-slot-initform x)))
                                   slots)))
                  (constructor))
              (multiple-value-bind (req opt key) (das!parse-struct-lambda-list boa)
                (setq constructor
                      (make-dsd-constructor :name (car default)
                                            :boa boa :required req :optional opt :key key)))
              (push (das!make-clos-constructor name constructor slots) q))) ))
    (when (dsd-predicate dd)
      (push (das!make-structure-class-predicate name (dsd-predicate dd)) q))
    (when (dsd-copier dd)
      (push (das!make-structure-class-copier name (dsd-copier dd)) q))
    (reverse q)))

;;; DD BUNDLE
;;; parse slot definitions from rest das!struct
(define-condition bad-dsd-slot-desc (error)
  ((datum :initform nil :initarg :datum :reader bad-dsd-slot-desc-datum))
  (:report (lambda (condition stream)
             (format stream "Malformed DEFSTRUCT slot descriptor~% ~a."
                     (bad-dsd-slot-desc-datum condition)))))

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
    (make-dsd-slot :name name :accessor name :initform default :type type :read-only read-only)))

;;; compare include assigned and imherit slots
;;; check only :type & :read-only tags
;;; subtype (initform type) done it %update-include-slots 
(defun das!compare-asins (assigned inherit)
  (dolist (as assigned)
    (map 'nil
         (lambda (in)
           ;; in - inherit slot from parent
           ;; as -assigned slot from :include
           (let ((seen 0))
             (unless (subtypep (dsd-slot-type as) (dsd-slot-type in))
               (setq seen (logior seen (ash 1 0))))
             (unless (eq (dsd-slot-read-only as) (dsd-slot-read-only in))
               (setq seen (logior seen (ash 1 0))))
             (if (> seen 0)
                 (multiple-value-bind (tag datum expected)
                     (case seen
                       (1 (values "type" (dsd-slot-type as) (dsd-slot-type in)))
                       (3 (values "read-only" (dsd-slot-read-only as) (dsd-slot-read-only in)))
                       (otherwise "Panic" as in))
                   (error "Incompatible ~a tag ~a ~a." tag datum expected)))))
         inherit)))

;;; check duplicate & identical slot names
(defun das!parse-struct-slots (dd slots)
  (let* ((sd (mapcar 'das!parse-struct-slot slots))
         (raw (mapcar #'dsd-slot-name sd))
         (parent (dsd-include dd))
         (inherit)
         (clear (remove-duplicates raw)))
    (if (/= (length raw) (length clear)) (error "Duplicate slot names ~a" raw))
    ;; check identical names
    (when parent
      ;; parent slots without descriptor
      (setq inherit (rest (dsd-include-inherited parent)))
      (let ((dup (intersection raw (mapcar #'dsd-slot-name inherit))))
        (if (not (null dup))
            (error "Have the some slot names ~a." dup)))
      (das!compare-asins (dsd-include-assigned (dsd-include dd)) inherit))
    (setf (dsd-slots dd) sd
          (dsd-slot-nums dd) (length sd))))

;;;  update structure slots
;;;  => (slots-with-accessor-names)
(defun das%update-accessor-names (conc-name slots)
      (dolist (slot slots)
        (setf (dsd-slot-accessor slot)
              (%symbolize conc-name (dsd-slot-name slot)))))

;;; compute structure storage
;;; make prototype
;;;  compute storage prototype for structure list-vector storage base
;;;
;;;  das!compute-storage-prototype &key include self
;;;    include::= (descriptor slots)
;;;    self:: (descriptor slots)
;;;    descriptor::= structure-storage-descriptor
;;;    slots::= (structure-slot*)
;;; => (n-cells map prototype)
;;;     n-cells ::= length of structure storage
;;;     map::= tag*
;;;     tag::= offset-tag | leader-tag | slot-position
;;;     offset-tag::= -1
;;;     leader-tag::= -2
;;;     slot-position::= non-negative-integer
;;;     prototype::= (offset-cells|leader-cell sn* )*
;;;     offset-cells::= offset-tag *initial-offest | nothing if :initial-offset unused
;;;     leader-cell::= real structure-name | nothing if :named unused
;;;     sn::= real slot-name
;;; for 
;;; (das!struct-storage-generate-prototype
;;;                  :include '(((binop nil 2)(binop-a nil nil nil)(binop-b nil nil nil))
;;;                             ((maps nil 3) (maps-a nil nil nil)(maps-b nil nil nil)))
;;;                  :self '(((pas nil 0) (pas-a nil nil nil)(pas-b nil nil nil))))
;;;  from  (defstruct (pas :named (:include maps) pas-a pas-b pas-c))
;;;
;;;  n-cells::= 14
;;;  map::=       (-1 -1  -2     3       4       -1  -1  -1  -2   9      10     -2  12    13)
;;;  prototype::= (NIL NIL BINOP BINOP-A BINOP-B NIL NIL NIL MAPS MAPS-A MAPS-B PAS PAS-A PAS-B))
;;;
(defun %storage-generate-prototype (d &optional storage (n-cell 0) i-map)
  (let ((descriptor)(slots)(offset))
    (dolist (it d)
      (setq descriptor (car it) slots (rest it))
      (setq offset (dsd-storage-descriptor-offset descriptor))
      (dotimes (i offset)
        (push nil storage)
        (push -1 i-map)
        (incf n-cell))
      (when (dsd-storage-descriptor-leader descriptor)
        (push (dsd-storage-descriptor-leader descriptor) storage)
        (push -2 i-map)
        (incf n-cell)) 
      (dolist (slot slots)
        (push (dsd-slot-name slot) storage)
        (push n-cell i-map)
        (incf n-cell))))
  (list n-cell i-map storage))

;;;  compute storage prototype for structure list-vector storage base
(defun das%compute-storage-prototype (&key include self)
  (destructuring-bind (n-cells-1 i-map-1 i-storage-1)
      (%storage-generate-prototype include)
    (destructuring-bind (n-cells-2 i-map-2 i-storage-2)
        (%storage-generate-prototype self i-storage-1  n-cells-1 i-map-1)
      (let ((icell 0))
        (dolist (cell i-map-2)
          (if (eql cell -2)
              (progn (setf (nth icell i-map-2) -3) (return)))
          (incf icell)))
      (make-dsd-prototype :n n-cells-2 :map (reverse i-map-2) :storage (reverse i-storage-2)))))

;;; compute structure-type-hash
;;; => hash-table (slot-name : storage position)
(defun das%compute-storage-hash (prototype)
  (let ((hash (make-hash-table :test #'eql))
        (slot-names
          (remove nil
                  (mapcar (lambda (x y)
                            (if (>= x 0)
                                ;; the slot-position, return symbol from y
                                ;; cons name(y) position(x)
                                (cons y x)
                                nil))
                          (dsd-prototype-map prototype)
                          (dsd-prototype-storage prototype)))))
    (dolist (pair slot-names)
      (setf (gethash (car pair) hash) (cdr pair)))
    hash))

;;; merge two `slots` - from included structure & self slots
#+nil
(defun das%merge-slots (include own)
  (append (structure-include-inherited include) own))

;;; make Slot Order Descriptor &optional (q :zero) for first record
;;; into dsd-inherit-slots (if structure has not include other structure)
(defun das%make-sod (descriptor slots &optional q)
  (let ((o (append (list descriptor)(mapcar (lambda (x) x) slots))))
    (if q
        (list o)
        o)))

;;; merge two sod's
(defun das%merge-sod (&key new exists)
  (let (r)
    (dolist (it exists)
      (push it r))
    (push new r)
    (reverse r)))

;;; finalize
(defun das!finalize-structure (dd)
  (let ((parent-name (dsd-parent dd)))
    (when parent-name
      (push (dsd-name dd) (dsd-childs (get-structure-dsd parent-name))))
    #+nil
    (if (and (dsd-type dd) (dsd-named-p dd)(dsd-predicate dd))
        (%deftype (dsd-name dd)
                  :expander (function (lambda (xz)
                              (declare (ignore xz))
                              `(satisfies ,(dsd-predicate dd))))))
    (setf (gethash (dsd-name dd) *structures*) dd)))


(defun das!defstruct-expand (name options slots)
  (let ((dd) (include) (parent) (prototype) (descriptor)(standard) (lisp-type)
        (to-inherit-slots))
    #+jscl (unless (%dsd-my-be-rewrite name) (error "Structure ~a can't be overridden" name))
    (setq dd (make-dsd :name name))
    (das!parse-defstruct-options options dd)
    (when (dsd-named-p dd)
      (setf (dsd-named-p dd) (dsd-name dd))
      (incf (dsd-instance-len dd)))
    (das!parse-struct-slots dd slots)
    (incf (dsd-instance-len dd) (dsd-slot-nums dd))
    (setq lisp-type (if (memq (dsd-type dd) '(list vector)) t nil))
    (setq descriptor (make-dsd-storage-descriptor
                      :leader (dsd-named-p dd)
                      :n (dsd-instance-len dd)
                      :offset (dsd-initial-offset dd)))
    (cond ((dsd-parent dd)
           (setq parent (get-structure-dsd (dsd-parent dd))
                 include (dsd-include dd))
           (unless (das!include-possible-p dd parent)
             (error "This structures have overlapping names."))
           ;; the structure included other structure
           (setq to-inherit-slots (das%merge-sod
                                   :new (das%make-sod descriptor (dsd-slots dd))
                                   :exists (dsd-include-inherited include)))
           ;; build storage prototype with included slots
           (setq prototype (das%compute-storage-prototype
                            :include (dsd-include-inherited include)
                            :self (das%make-sod descriptor (dsd-slots dd) :zero))))
          ;; structure without inherite
          (t (setq to-inherit-slots (das%make-sod descriptor (dsd-slots dd) :zero)
                   prototype (das%compute-storage-prototype
                              :self (das%make-sod descriptor (dsd-slots dd) :zero)))))
    (setf (dsd-map-names dd) (das%compute-storage-hash prototype)
          (dsd-inherit-slots dd) (copy-tree to-inherit-slots)
          (dsd-prototype dd) (if lisp-type (copy-dsd-prototype prototype) (list nil))
          (dsd-descriptor dd) (copy-dsd-storage-descriptor descriptor))
    (setq standard (if lisp-type
                       (das!make-lisp-base-structure dd)
                       (das!make-standard-structure dd)))
    (das!finalize-structure dd)
    standard
    ))

(defmacro das!struct (name-and-options &rest slots)
  (let* ((name-and-options (ensure-list name-and-options))
         (options (rest name-and-options))
         (name (car name-and-options)))
    `(progn 
       ,@(das!defstruct-expand `,name `,options `,slots)
       ',name 
       )))

#+jscl
(defmacro defstruct (name-options &rest slots)
  `(das!struct ,name-options ,@slots))

;;; EOF
