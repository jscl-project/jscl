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

(defun singlep (x)
  (and (consp x) (null (cdr x))))

(defun unlist (x)
  (assert (singlep x))
  (first x))

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


;;; BBlock stands for `basic block', which is a maximal sequence of
;;; nodes with an entry point and an exit. Basic blocks are organized
;;; as a control flow graph with some more information in omponents.
(defstruct bblock
  (id (gensym "L"))
  succ
  pred
  entry
  exit)

(defstruct (component-entry (:include bblock)))
(defstruct (component-exit (:include bblock)))

(defun make-empty-bblock ()
  (let ((entry (make-block-entry))
        (exit (make-block-exit)))
    (setf (node-next entry) exit
          (node-prev exit) entry)
    (make-bblock :entry entry :exit exit)))

(defun empty-block-p (b)
  (block-exit-p (node-next (bblock-entry b))))

(defmacro do-nodes ((node block &optional result) &body body)
  (check-type node symbol)
  `(do ((,node (node-next (bblock-entry ,block)) (node-next ,node)))
       ((block-exit-p ,node) ,result)
     ,@body))

;;; Link FROM and TO nodes together. FROM and TO must belong to the
;;; same basic block and appear in such order. The nodes between FROM
;;; and TO are discarded.
(defun link-nodes (from to)
  (setf (node-next from) to
        (node-prev to) from)
  (values))

;;; Insert NODE before NEXT.
(defun insert-node-before (next node)
  (link-nodes (node-prev next) node)
  (link-nodes node next))


;;; Components are connected pieces of the control flow graph with
;;; some additional information. Components have well-defined entry
;;; and exit nodes. They also track what basic blocks we have and
;;; other useful information. It is the toplevel organizational entity
;;; in the compiler. The IR translation result is accumulated into
;;; components incrementally.
(defstruct (component
             #-jscl (:print-object print-component))
  entry
  exit
  blocks)

;;; Create a new component, compromised of the sentinel nodes and a
;;; empty basic block, ready to start conversion to IR. It returnes
;;; the component and the basic block as multiple values.
(defun make-empty-component ()
  (let ((entry (make-component-entry))
        (bblock (make-empty-bblock))
        (exit (make-component-exit)))
    (setf (bblock-succ entry)  (list bblock)
          (bblock-pred exit)   (list bblock)
          (bblock-succ bblock) (list exit)
          (bblock-pred bblock) (list entry))
    (values (make-component :entry entry :exit exit) bblock)))

;;; Delete an empty block. It is the same as a jump to an
;;; uncondiditonal jump.
(defun delete-empty-block (block)
  (when (or (component-entry-p block) (component-exit-p block))
    (error "Cannot delete entry or exit basic blocks."))
  (unless (empty-block-p block)
    (error "Block `~S' is not empty!" (bblock-id block)))
  (assert (singlep (bblock-succ block)))
  (let ((successor (first (bblock-succ block))))
    (dolist (pred (bblock-pred block))
      (setf (bblock-succ pred)
            (substitute successor block (bblock-succ pred)))
      (pushnew pred (bblock-pred successor)))))

(defun finish-component (&optional (component *component*))
  (dolist (blk (bblock-pred (component-exit component)))
    (when (empty-block-p blk)
      (delete-empty-block blk))))

;;; IR Translation

;;; The current component. We accumulate the results of the IR
;;; conversion in this component.
(defvar *component*)

;;; The current block in the current component. IR conversion usually
;;; append nodes to this block. Branching instructions will modify
;;; this variable.
(defvar *bblock*)

;;; Prepare a new component with a current empty content block ready
;;; to start IR conversion. Then BODY is evaluated and the value of
;;; the last form is returned.
(defmacro with-component-compilation (&body body)
  `(multiple-value-bind (*component* *bblock*)
       (make-empty-component)
     ,@body))

;;; The Lexical environment is compromised of a list of bindings,
;;; which associates information to symbols. It tracks lexical
;;; variables, tags, local declarations and many other information in
;;; order to guide the compiler.
(defstruct binding
  name type value declarations)

(defstruct lexenv
  bindings)

;;; A alist of IR translator functions.
(defvar *ir-translator* nil)

;;; Define a IR translator for NAME.
(defmacro define-ir-translator (name (next result) lambda-list &body body)
  (let ((fname (intern (format nil "IR-CONVERT-~a" (string name))))
        (form (gensym)))
    (check-type name symbol)
    (check-type next symbol)
    `(progn
       (defun ,fname (,form ,next ,result)
         (destructuring-bind ,lambda-list ,form
           ,@body))
       (push (cons ',name #',fname) *ir-translator*))))


(defun ir-convert-constant (form next result)
  (let* ((leaf (make-constant :value form))
         (ref (make-ref :leaf leaf :lvar result)))
    (insert-node-before next ref)))

(define-ir-translator quote (next result) (form)
  (ir-convert-constant form next result))

(define-ir-translator setq (next result) (variable value)
  (let ((var (make-var :name variable))
        (value-lvar (make-lvar)))
    (ir-convert value next value-lvar)
    (let ((assign (make-assignment :variable var :value value-lvar :lvar result)))
      (insert-node-before next assign))))

;;; Split BLOCK in two basic blocks. BLOCK ends just before BLOCK. A
;;; new block is created starting at NODE until the exit of the
;;; original block. The successors of BLOCK become the successors of
;;; the new block.
(defun split-basic-block-before (node block)
  (let ((exit (node-prev (bblock-exit block)))
        (newexit (make-block-exit))
        (newentry (make-block-entry))
        newblock)
    (insert-node-before node newentry)
    (insert-node-before newentry newexit)
    (setf (node-next newexit)  nil)
    (setf (node-prev newentry) nil)
    (setf (bblock-exit block) newexit)
    (setq newblock (make-bblock :entry newentry :exit exit))
    (rotatef (bblock-succ block) (bblock-succ newblock))
    newblock))

(define-ir-translator if (next result) (test then &optional else)
  (let ((test-lvar (make-lvar))
        (then-block (make-empty-bblock))
        (else-block (make-empty-bblock))
        (join-block (make-empty-bblock)))
    ;; Convert the test into the current basic block.
    (ir-convert test next test-lvar)
    (setq next (bblock-exit *bblock*))
    (let ((cond (make-conditional :test test-lvar :consequent then-block :alternative else-block)))
      (insert-node-before next cond))
    ;; If we are not at the end of the content block, split it.
    (unless (block-exit-p next)
      (setq join-block (split-basic-block-before next *bblock*)))
    (dolist (succ (bblock-succ *bblock*))
      (setf (bblock-pred succ) (substitute join-block *bblock* (bblock-pred succ))))
    (psetf (bblock-succ *bblock*)   (list else-block then-block)
           (bblock-pred else-block) (list *bblock*)
           (bblock-pred then-block) (list *bblock*)
           (bblock-succ then-block) (list join-block)
           (bblock-succ else-block) (list join-block)
           (bblock-pred join-block) (list else-block then-block)
           (bblock-succ join-block) (bblock-succ *bblock*))
    (let ((*bblock* then-block))
      (ir-convert then (bblock-exit then-block) result))
    (let ((*bblock* else-block))
      (ir-convert else (bblock-exit else-block) result))
    (setq *bblock* join-block)))


(defun ir-convert-var (form next result)
  (let* ((leaf (make-var :name form))
         (ref (make-ref :leaf leaf :lvar result)))
    (insert-node-before next ref)))

(defun ir-convert-call (form next result)
  (destructuring-bind (function &rest args) form
    (let ((func-lvar (make-lvar))
          (args-lvars nil))
      (when (symbolp function)
        (ir-convert `(%symbol-function ,function) next func-lvar))
      (dolist (arg args)
        (push (make-lvar) args-lvars)
        (ir-convert arg next (first args-lvars)))
      (setq args-lvars (reverse args-lvars))
      (let ((call (make-call :function func-lvar :arguments args-lvars :lvar result)))
        (insert-node-before next call)))))


;;; Convert the Lisp expression FORM into IR before the NEXT node, it
;;; may create new basic blocks into the current component. During the
;;; initial IR conversion, The NEXT node is the EXIT node of the
;;; current basic block, but optimizations could call it to insert IR
;;; code somewhere.
(defun ir-convert (form next result)
  (when (block-entry-p next)
    (error "Can't insert IR before the entry node."))
  (cond
    ((atom form)
     (cond
       ((symbolp form)
        (ir-convert-var form next result))
       (t
        (ir-convert-constant form next result))))
    (t
     (destructuring-bind (op &rest args) form
       (let ((translator (cdr (assoc op *ir-translator*))))
         (if translator
             (funcall translator args next result)
             (ir-convert-call form next result))))))
  (values))

(defun compute-dfo (component)
  (or (component-blocks component)
      (let ((output nil))
        (labels ((compute-dfo-from (block)
                   (unless (or (component-exit-p block) (find block output))
                     (dolist (successor (bblock-succ block))
                       (unless (component-exit-p block)
                         (compute-dfo-from successor)))
                     (push block output))))
          (compute-dfo-from (unlist (bblock-succ (component-entry component))))
          (setf (component-blocks component) output)))))

(defmacro do-blocks ((bblock component &optional result) &body body)
  `(dolist (,bblock (compute-dfo ,component) ,result)
     ,@body))

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
             (bblock-id (conditional-consequent node))
             (bblock-id (conditional-alternative node))))
    (t
     (error "`print-node' does not support printing ~S as a node." node)))
  (terpri))

(defun print-bblock (block)
  (flet ((bblock-name (block)
           (cond
             ((and (singlep (bblock-pred block))
                   (component-entry-p (bblock-pred block)))
              "ENTRY")
             ((component-exit-p block)
              "EXIT")
             (t (string (bblock-id block))))))
    (format t "BLOCK ~a:~%" (bblock-name block))
    (do-nodes (node block)
     (print-node node))
    (when (singlep (bblock-succ block))
      (format t "GO ~a~%" (bblock-name (first (bblock-succ block)))))
    (terpri)))

(defun print-component (component &optional (stream *standard-output*))
  (let ((*standard-output* stream))
    (do-blocks (block component)
      (print-bblock block))))

(defun check-ir-consistency (&optional (component *component*))
  (with-simple-restart (continue "Continue execution")
    (do-blocks (block component)
      (dolist (succ (bblock-succ block))
        (unless (find block (bblock-pred succ))
          (error "The block `~S' does not belong to the predecessors list of the its successor `~S'"
                 (bblock-id block)
                 (bblock-id succ))))
      (dolist (pred (bblock-pred block))
        (unless (find block (bblock-succ pred))
          (error "The block `~S' does not belong to the successors' list of its predecessor `~S'"
                 (bblock-id block)
                 (bblock-id pred)))))))

;;; Translate FORM into IR and print a textual repreresentation of the
;;; component.
(defun describe-ir (form)
  (with-component-compilation
    (ir-convert form (bblock-exit *bblock*) (make-lvar :id "$out"))
    (finish-component)
    (check-ir-consistency)
    (print-component *component*)))


;;; compiler.lisp ends here
