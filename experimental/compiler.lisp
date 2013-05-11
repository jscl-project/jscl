;;; compiler.lisp ---

;; copyright (C) 2013 David Vazquez

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

(defpackage :jscl
  (:use :cl))

(in-package :jscl)

;;;; Utils

(defmacro with-gensyms ((&rest vars) &body body)
  `(let ,(mapcar (lambda (var) `(,var (gensym ,(string var)))) vars)
     ,@body))

(defun singlep (x)
  (and (consp x) (null (cdr x))))

(defun unlist (x)
  (assert (singlep x))
  (first x))

;;;; Lexical environment
;;;;
;;;; The Lexical environment comprises a list of bindings, which
;;;; associates information to symbols. It tracks lexical variables,
;;;; tags, local declarations and many other information in order to
;;;; guide the compiler.

(defstruct binding
  name type value declarations)

(defstruct lexenv
  bindings)


;;;; Intermediate representation
;;;;
;;;; This intermediate representation (IR) is a simplified version of
;;;; first intermediate representation what you will find if you have
;;;; a you have the source code of SBCL. Some terminology is also
;;;; used, but other is changed, so be careful if you assume you know
;;;; what it is because you know the name.
;;;;

;;; A leaf stands for leaf in the tree of computations. Lexical
;;; variables, constants and literal functions are leafs. Leafs are
;;; not nodes itself, a `ref' node will stands for putting a leaf into
;;; a lvar, which can be used in computations.
(defstruct leaf)

;;; Reference a lexical variable. Special variables have not a
;;; representation in IR. They are handled via the primitive functions
;;; `%symbol-function' and `%symbol-value'.
(defstruct (var (:include leaf))
  ;; Name is the symbol used to identify this variable in the lexical
  ;; environment.
  name)

;;; A constant value, mostly from a quoted form, but maybe introduced
;;; in some pass of the compiler.
(defstruct (constant (:include leaf))
  value)

;;; A literal function. Why do we use `functional' as name? Well,
;;; function is taken, isn't it?
(defstruct (functional (:include leaf))
  ;; The symbol which names this function in the source code.
  name
  ;; A list of lvars which are bound to the argument values in a call
  ;; to this function.
  arguments
  ;; LVAR which contains the return values of the function.
  return-lvar
  ;; The basic block which contain the code which be executed firstly
  ;; when you call this function.
  entry-point)


;;; Used to transfer data between the computations in the intermediate
;;; representation. Each node is valued into a LVar. And nodes which
;;; use resulting values from other nodes use such LVar.
(defstruct lvar
  (id (gensym "$")))

;;; A computation node. It represents a simple computation in the
;;; intermediate representation. Nodes are grouped in basic blocks,
;;; which are delimited by the special nodes `block-entry' and
;;; `block-exit'. Resulting value of the node is stored in LVAR, which it
;;; could be null if the value is discarded.
(defstruct node
  next
  prev
  lvar)

;;; Sentinel nodes. No computation really, but they make easier to
;;; manipulate the doubly linked-list.
(defstruct (block-entry (:include node)))
(defstruct (block-exit (:include node)))

;;; A reference to a leaf.
(defstruct (ref (:include node))
  leaf)

;;; An assignation of the LVAR VALUE into the var VARIABLE.
(defstruct (assignment (:include node))
  variable
  value)

;;; Call the lvar FUNCTION with a list of lvars as ARGUMENTS.
(defstruct (call (:include node))
  function
  arguments)

;;; A conditional branch. If the LVAR is not NIL, then we will jump to
;;; the basic block CONSEQUENT, jumping to ALTERNATIVE otherwise. By
;;; definition, a conditional must appear at the end of a basic block.
(defstruct (conditional (:include node))
  test
  consequent
  alternative)

;;; Blocks are `basic block', which is a maximal sequence of nodes
;;; with an entry point and an exit. Basic blocks are organized as a
;;; control flow graph with some more information in omponents.
(defstruct (basic-block
             (:conc-name "BLOCK-")
             (:constructor make-block)
             (:predicate block-p))
  (id (gensym "L"))
  succ
  pred
  entry
  exit)

(defstruct (component-entry (:include basic-block)))
(defstruct (component-exit (:include basic-block)))

(defun make-empty-block ()
  (let ((entry (make-block-entry))
        (exit (make-block-exit)))
    (setf (node-next entry) exit
          (node-prev exit) entry)
    (make-block :entry entry :exit exit)))

(defun empty-block-p (b)
  (block-exit-p (node-next (block-entry b))))

(defmacro do-nodes
    ((node block &optional result &key include-sentinel-p) &body body)
  `(do ((,node ,(if include-sentinel-p
                    `(block-entry ,block)
                    `(node-next (block-entry ,block))) 
               (node-next ,node)))
       (,(if include-sentinel-p
             `(null ,node)
             `(block-exit-p ,node))
        ,result)
     ,@body))

(defmacro do-nodes-backward
    ((node block &optional result &key include-sentinel-p) &body body)
  `(do ((,node ,(if include-sentinel-p
                    `(block-exit ,block)
                    `(node-prev (block-entry ,block))) 
               (node-prev ,node)))
       (,(if include-sentinel-p
             `(null ,node)
             `(block-entry-p ,node))
        ,result)
     ,@body))

;;; Link FROM and TO nodes together. FROM and TO must belong to the
;;; same basic block and appear in such order. The nodes between FROM
;;; and TO are discarded.
(defun link-nodes (from to)
  (setf (node-next from) to
        (node-prev to) from)
  (values))

;;; Components are connected pieces of the control flow graph with
;;; some additional information. Components have well-defined entry
;;; and exit nodes. They also track what basic blocks we have and
;;; other useful information. It is the toplevel organizational entity
;;; in the compiler. The IR translation result is accumulated into
;;; components incrementally.
(defstruct (component #-jscl (:print-object print-component))
  entry
  exit)

;;; Create a new component with sentinel nodes and an empty basic
;;; block, ready to start conversion to IR. It returns the component
;;; and the basic block as multiple values.
(defun make-empty-component ()
  (let ((entry (make-component-entry))
        (block (make-empty-block))
        (exit (make-component-exit)))
    (setf (block-succ entry)  (list block)
          (block-pred exit)   (list block)
          (block-succ block) (list exit)
          (block-pred block) (list entry))
    (values (make-component :entry entry :exit exit) block)))

;;; Return the list of blocks in COMPONENT.
(defun component-blocks (component)
  (let ((output nil))
    (labels ((compute-rdfo-from (block)
               (unless (or (component-exit-p block) (find block output))
                 (dolist (successor (block-succ block))
                   (unless (component-exit-p block)
                     (compute-rdfo-from successor)))
                 (push block output))))
      (compute-rdfo-from (unlist (block-succ (component-entry component))))
      output)))

;;; Iterate across different blocks in COMPONENT.
(defmacro do-blocks ((block component &optional result) &body body)
  `(dolist (,block (component-blocks ,component) ,result)
     ,@body))

;;; A few consistency checks in the IR useful for catching bugs.
(defun check-ir-consistency (&optional (component *component*))
  (with-simple-restart (continue "Continue execution")
    (do-blocks (block component)
      (dolist (succ (block-succ block))
        (unless (find block (block-pred succ))
          (error "The block `~S' does not belong to the predecessors list of the its successor `~S'"
                 (block-id block)
                 (block-id succ))))
      (dolist (pred (block-pred block))
        (unless (find block (block-succ pred))
          (error "The block `~S' does not belong to the successors' list of its predecessor `~S'"
                 (block-id block)
                 (block-id pred)))))))

(defun delete-empty-block (block)
  (when (or (component-entry-p block) (component-exit-p block))
    (error "Cannot delete entry or exit basic blocks."))
  (unless (empty-block-p block)
    (error "Block `~S' is not empty!" (block-id block)))
  (let ((succ (unlist (block-succ block))))
    (setf (block-pred succ) (remove block (block-pred succ)))
    (dolist (pred (block-pred block))
      (setf (block-succ pred) (substitute succ block (block-succ pred)))
      (pushnew pred (block-pred succ)))))

;;; Try to coalesce BLOCK with the successor if it is unique and block
;;; is its unique predecessor.
(defun maybe-coalesce-block (block)
  (when (singlep (block-succ block))
    (let ((succ (first (block-succ block))))
      (when (and (singlep (block-pred succ)) (not (component-exit-p succ)))
        (link-nodes (node-prev (block-exit block)) (node-next (block-entry succ)))
        (setf (block-succ block) (block-succ succ))
        (dolist (next (block-succ succ))
          (setf (block-pred next) (substitute block succ (block-pred next))))
        t))))

(defun finish-component (component)
  (do-blocks (block component)
    (if (empty-block-p block)
        (delete-empty-block block)
        (maybe-coalesce-block block))))

;;; IR Translation

;;; The current component. We accumulate the results of the IR
;;; conversion in this component.
(defvar *component*)

;;; Prepare a new component with a current empty block ready to start
;;; IR conversion bound in the current cursor. BODY is evaluated and
;;; the value of the last form is returned.
(defmacro with-component-compilation (&body body)
  (let ((block (gensym)))
    `(multiple-value-bind (*component* ,block)
         (make-empty-component)
       (with-cursor (:block ,block)
         ,@body))))

;;; A cursor stands for a point between two nodes in some basic block
;;; in the IR representation where manipulations can take place,
;;; similarly to the cursors in text editing.
(defstruct cursor
  block next)

;;; The current cursor. It is the point where IR manipulations act by
;;; default. Particularly, newly converted IR code is inserted here.
(defvar *cursor*)

;;; Create a cursor which pointsto the basic block BLOCK. If omitted,
;;; then the current block is used.
;;;
;;; The keywords AFTER and BEFORE specify the cursor will point after
;;; or before that node respectively. If none is specified, the cursor
;;; is created before the exit node in BLOCK. An error is signaled if
;;; both keywords are specified inconsistently, or if the nodes do not
;;; belong to BLOCK.
;;;
;;; The special values :ENTRY and :EXIT stand for the entry and exit
;;; nodes of the block respectively.
(defun cursor (&key (block (cursor-block *cursor*))
                 (before nil before-p)
                 (after nil after-p))
  ;; Handle special values :ENTRY and :EXIT.
  (flet ((node-designator (x)
           (case x
             (:entry (block-entry block))
             (:exit  (block-exit block))
             (t x))))
    (setq before (node-designator before))
    (setq after  (node-designator after)))
  (let* ((next (or before (and after (node-next after)) (block-exit block)))
         (cursor (make-cursor :block block :next next)))
    (flet ((out-of-range-cursor ()
             (error "Out of range cursor."))
           (ambiguous-cursor ()
             (error "Ambiguous cursor specified between two non-adjacent nodes.")))
      (when (or (null next) (block-entry-p next))
        (out-of-range-cursor))
      (when (and before-p after-p (not (eq after before)))
        (ambiguous-cursor))
      (do-nodes-backward (node block (out-of-range-cursor) :include-sentinel-p t)
        (when (eq next node) (return))))
    cursor))

(defun set-cursor (&rest cursor-spec)
  (let ((newcursor (apply #'cursor cursor-spec)))
    (setf (cursor-block *cursor*) (cursor-block newcursor))
    (setf (cursor-next *cursor*) (cursor-next newcursor))
    *cursor*))

;;; Create and bind the current cursor. The cursor specification is
;;; the same as described in the function `create-cursor'.
(defmacro with-cursor ((&rest cursor-spec) &body body)
  `(let* ((*cursor* (cursor ,@cursor-spec)))
     ,@body))

(defun end-of-block-p (&optional (cursor *cursor*))
  (block-exit-p (cursor-next cursor)))

;;; Insert NODE at cursor.
(defun insert-node (node &optional (cursor *cursor*))
  (link-nodes (node-prev (cursor-next cursor)) node)
  (link-nodes node (cursor-next cursor))
  t)

;;; Split the block CURSOR points in two basic blocks, returning the
;;; new basic block. The cursor is kept to point at the end of shrunk
;;; basic block.
(defun split-block (&optional (cursor *cursor*))
  (let* ((block (cursor-block cursor))
         (newexit (make-block-exit))
         (newentry (make-block-entry))
         (exit (block-exit block))
         (newblock (make-block :entry newentry
                               :exit exit
                               :pred (list block)
                               :succ (block-succ block))))
    (insert-node newexit)
    (insert-node newentry)
    (setf (node-next newexit)  nil)
    (setf (node-prev newentry) nil)
    (setf (block-exit block) newexit)
    (setf (block-succ block) (list newblock))
    (dolist (succ (block-succ newblock))
      (setf (block-pred succ) (substitute newblock block (block-pred succ))))
    (set-cursor :block block :before newexit)
    newblock))


;;; A alist of IR translator functions.
(defvar *ir-translator* nil)

;;; Define a IR translator for NAME.
(defmacro define-ir-translator (name lambda-list &body body)
  (check-type name symbol)
  (let ((fname (intern (format nil "IR-CONVERT-~a" (string name))))
        (result (gensym))
        (form (gensym)))
    `(progn
       (defun ,fname (,form ,result)
         (flet ((result-lvar () ,result))
           (destructuring-bind ,lambda-list ,form
             ,@body)))
       (push (cons ',name #',fname) *ir-translator*))))

(defun ir-convert-constant (form result)
  (let* ((leaf (make-constant :value form)))
    (insert-node (make-ref :leaf leaf :lvar result))))

(define-ir-translator quote (form)
  (ir-convert-constant form (result-lvar)))

(define-ir-translator setq (variable value)
  (let ((var (make-var :name variable))
        (value-lvar (make-lvar)))
    (ir-convert value value-lvar)
    (let ((assign (make-assignment :variable var :value value-lvar :lvar (result-lvar))))
      (insert-node assign))))

(define-ir-translator progn (&body body)
  (dolist (form (butlast body))
    (ir-convert form))
  (ir-convert (car (last body)) (result-lvar)))

(define-ir-translator if (test then &optional else)
  (when (conditional-p (cursor-next *cursor*))
    (error "Impossible to insert a conditional after another conditional."))
  ;; Split the basic block if we are in the middle of one.
  (unless (end-of-block-p) (split-block))
  (let ((test-lvar (make-lvar))
         (then-block (make-empty-block))
         (else-block (make-empty-block))
         (join-block (make-empty-block)))
    (ir-convert test test-lvar)
    (insert-node (make-conditional :test test-lvar :consequent then-block :alternative else-block))
    (let* ((block (cursor-block *cursor*))
           (tail-block (unlist (block-succ block))))
      ;; Link together the different created basic blocks.
      (setf (block-succ block)      (list else-block then-block)
            (block-pred else-block) (list block)
            (block-pred then-block) (list block)
            (block-succ then-block) (list join-block)
            (block-succ else-block) (list join-block)
            (block-pred join-block) (list else-block then-block)
            (block-succ join-block) (list tail-block)
            (block-pred tail-block) (substitute join-block block (block-pred tail-block))))
    ;; Convert he consequent and alternative forms and update cursor.
    (ir-convert then (result-lvar) (cursor :block then-block))
    (ir-convert else (result-lvar) (cursor :block else-block))
    (set-cursor :block join-block)))


(defun ir-convert-var (form result)
  (let* ((leaf (make-var :name form))
         (ref (make-ref :leaf leaf :lvar result)))
    (insert-node ref)))

(defun ir-convert-call (form result)
  (destructuring-bind (function &rest args) form
    (let ((func-lvar (make-lvar))
          (args-lvars nil))
      (when (symbolp function)
        (ir-convert `(%symbol-function ,function) func-lvar))
      (dolist (arg args)
        (let ((arg-lvar (make-lvar)))
          (push arg-lvar args-lvars)
          (ir-convert arg arg-lvar)))
      (setq args-lvars (reverse args-lvars))
      (let ((call (make-call :function func-lvar :arguments args-lvars :lvar result)))
        (insert-node call)))))

;;; Convert the Lisp expression FORM into IR before the NEXT node, it
;;; may create new basic blocks into the current component. During the
;;; initial IR conversion, The NEXT node is the EXIT node of the
;;; current basic block, but optimizations could call it to insert IR
;;; code somewhere.
(defun ir-convert (form &optional result (*cursor* *cursor*))
  (cond
    ((atom form)
     (cond
       ((symbolp form)
        (ir-convert-var form result))
       (t
        (ir-convert-constant form result))))
    (t
     (destructuring-bind (op &rest args) form
       (let ((translator (cdr (assoc op *ir-translator*))))
         (if translator
             (funcall translator args result)
             (ir-convert-call form result))))))
  (values))


;;; IR Debugging

(defun print-node (node)
  (when (node-lvar node)
    (format t "~a = " (lvar-id (node-lvar node))))
  (cond
    ((ref-p node)
     (let ((leaf (ref-leaf node)))
       (cond
         ((var-p leaf)
          (format t "~a" (var-name leaf)))
         ((constant-p leaf)
          (format t "'~a" (constant-value leaf)))
         ((functional-p leaf)
          (format t "#<function ~a at ~a>"
                  (functional-name leaf)
                  (functional-entry-point leaf))))))
    ((assignment-p node)
     (format t "set ~a ~a"
             (var-name (assignment-variable node))
             (lvar-id (assignment-value node))))
    ((call-p node)
     (format t "call ~a" (lvar-id (call-function node)))
     (dolist (arg (call-arguments node))
       (format t " ~a" (lvar-id arg))))
    ((conditional-p node)
     (format t "if ~a ~a ~a"
             (lvar-id (conditional-test node))
             (block-id (conditional-consequent node))
             (block-id (conditional-alternative node))))
    (t
     (error "`print-node' does not support printing ~S as a node." node)))
  (terpri))

(defun print-block (block)
  (flet ((block-name (block)
           (cond
             ((and (singlep (block-pred block))
                   (component-entry-p (unlist (block-pred block))))
              "ENTRY")
             ((component-exit-p block)
              "EXIT")
             (t (string (block-id block))))))
    (format t "BLOCK ~a:~%" (block-name block))
    (do-nodes (node block)
      (print-node node))
    (when (singlep (block-succ block))
      (format t "GO ~a~%" (block-name (first (block-succ block)))))
    (terpri)))

(defun print-component (component &optional (stream *standard-output*))
  (let ((*standard-output* stream))
    (do-blocks (block component)
      (print-block block))))

;;; Translate FORM into IR and print a textual repreresentation of the
;;; component.
(defun describe-ir (form)
  (with-component-compilation
    (ir-convert form (make-lvar :id "$out"))
    (finish-component *component*)
    (check-ir-consistency)
    (print-component *component*)))


;;; compiler.lisp ends here
