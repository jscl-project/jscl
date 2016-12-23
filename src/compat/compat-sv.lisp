;;;; compat-sv.lisp — Storage Vectors

;; Provide  a   ANSI  compatible  implementation  of   storage  vectors.
;; The runtime definitions come from compiler.lisp.

(in-package :jscl)

(defstruct (storage-vector
             (:constructor make-storage-vector-1)
             (:predicate storage-vector-p))
  kind
  underlying-vector)

(defun make-storage-vector (initial-size kind)
  "Allocate a  STORAGE-VECTOR with a type  tag of KIND. The  type tag is
expected to  be a  CONS, the CAR  of which is  something like  'ARRAY or
'STRUCTURE-OBJECT or 'CLOS-OBJECT, the CDR  is reserved for the specific
type to use as it likes. "
  (check-type initial-size (integer 0 *))
  (check-type kind cons)
  (check-type (car kind) symbol)
  (make-storage-vector-1
   :kind kind
   :underlying-vector (make-array initial-size :adjustable t)))

(defun storage-vector-size (storage-vector)
  "Return the size of the (underlying) vector wrapped by STORAGE-VECTOR"
  (check-type storage-vector storage-vector)
  (length (storage-vector-underlying-vector storage-vector)))

(defun resize-storage-vector (storage-vector new-size)
  "Adjust the size of the  (underlying) vector wrapped by STORAGE-VECTOR
to NEW-SIZE."
  (check-type storage-vector storage-vector)
  (check-type new-size (integer 0 *))
  (let ((underlying-vector (storage-vector-underlying-vector
                            storage-vector)))
    (adjust-array underlying-vector new-size)
    storage-vector))

(defun storage-vector-ref (storage-vector index)
  "Get the value at index INDEX of the STORAGE-VECTOR"
  (check-type storage-vector storage-vector)
  (check-type index (integer 0 *))
  (aref (storage-vector-underlying-vector storage-vector) index))

(defun (setf storage-vector-ref) (new-value storage-vector index)
  "Set the value at index INDEX of the STORAGE-VECTOR to NEW-VALUE"
  (check-type storage-vector storage-vector)
  (check-type index (integer 0 *))
  (setf (aref (storage-vector-underlying-vector storage-vector) index)
        new-value))

(defun storage-vector-set (storage-vector index new-value)
  "Set the value at index INDEX of the STORAGE-VECTOR to NEW-VALUE"
  (check-type storage-vector storage-vector)
  (check-type index (integer 0 *))
  (setf (aref (storage-vector-underlying-vector storage-vector) index)
        new-value))

(defun concatenate-storage-vector (sv1 sv2)
  "Concatenate  the two  storage vectors  SV1 and  SV2. The  CAR of  the
`STORAGE-VECTOR-KIND' for  both must  match. The resulting,  new storage
vector does not share structure with SV1 nor SV2. The “kind” tag will be
copied from SV1;  the caller is expected to make  any corrections to the
metadata in it."
  (check-type sv1 storage-vector)
  (check-type sv2 storage-vector)
  (assert (eql (car (storage-vector-kind sv1))
               (car (storage-vector-kind sv2))))
  (let* ((sv (make-storage-vector (+ (storage-vector-size sv1)
                                     (storage-vector-size sv2))
                                  (copy-list (storage-vector-kind sv1))))
         (v (storage-vector-underlying-vector sv)))
    (setf (subseq v 0 (storage-vector-size sv1))
          (storage-vector-underlying-vector sv1))
    (setf (subseq v (storage-vector-size sv1))
          (storage-vector-underlying-vector sv2))
    sv))
