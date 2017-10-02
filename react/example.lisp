;; EXTENDER

(defun js-identifier-from-symbol-name (name)
  "Convert a Lisp symbol name to a JavaScript camelCase identifier."
  (let ((words
          (loop for i = 0 then (+ 1 j)
                as j = (position #\- name :start i)
                collect (subseq name i j)
                while j)))
    (apply #'concat (string-downcase (car words))
           (mapcar #'string-capitalize (cdr words)))))

(defun make-plist-keyname (key)
  "Make a keyname string from KEY."
  (cond
    ((stringp key) key)
    ((symbolp key) (js-identifier-from-symbol-name (symbol-name key)))
    (t (error "Cannot convert KEY to string."))))

(defun make-plist (&rest init-plist)
  "Make a JS-POD initialised with the given INIT-PLIST."
  (let ((object (jscl::make-new #j:Object)))
    (do ((tail init-plist (cddr tail)))
        ((null tail) object)
      (setf (jscl::oget object (make-plist-keyname (first tail)))
            (second tail)))
    object))



;; REACT
;;  Bindings to React

(defun react/create-element (element children &rest plist)
  (cond
    ((or (stringp children) (null children))
     (apply #j:React:createElement
            (list element (apply #'make-plist plist) children)))
    ((consp children)
     (apply #j:React:createElement
            element (apply #'make-plist plist) children))
    (t (error "Unsuppored polymorphic CHILDREN."))))


;; REACT-DOM
;;  Bindings to ReactDOM

(defun react-dom/render (&rest rest)
  (apply #j:ReactDOM:render rest))


;; CL-USER
;;  Interface

(defun example-1 (location)
  (react-dom/render
   (react/create-element "h1" "Hello, world!")
   (#j:document:getElementById location)))

;; ADDER

(defun show-arguments (&rest plist)
  (react/create-element "h1" (apply #'concat
                                    (mapcar #j:JSON:stringify plist))
                        :class-name "flex flex-column mv2"))

(defun example-2 (location)
  (react-dom/render
   (react/create-element #'show-arguments "Relax"
                         :n1 1 :n2 2
                         :class-name "flex flex-column mv2")
   (#j:document:getElementById location)))


;; Example Ludovico Fischer

(defun counter (plist &rest whatever)
  "A simple component displaying a count."
  (let ((count (jscl::oget plist "count")))
    (react/create-element "p"
                          (format nil "Word count: ~D" count)
                          :class-name "mb2")))

(defun progress-bar (plist &rest whatever)
  "A simple component displaying a progress bar."
  (let ((completion (jscl::oget plist "completion")))
    (react/create-element
     "div"
     (list
      (react/create-element "label" "Progress"
                            :html-for "progress"
                            :class-name "mv-2")
      (react/create-element "progress"
                            (format nil "~D%" completion)
                            :value completion
                            :id "progress"
                            :class-name "bn"))
     :class-name "mv2 flex flex-column")))


(defun editor (plist &rest whatever)
  "A simple editor"
  (let ((text (jscl::oget plist "text")))
    (react/create-element
     "div"
     (list
      (react/create-element "label" "Enter your text:"
                            :html-for "editor"
                            :class-name "mv-2")
      (react/create-element "textarea"
                            nil
                            :value text
                            :id "editor"))
     :class-name "mv2 flex flex-column")))


(defun word-counter (plist &rest whatever)
  "A simple word counter"
  (let ((text (jscl::oget plist "text")))
    (react/create-element
     "form"
     (list
      (react/create-element #'editor nil :text text)
      (react/create-element #'counter nil :count 1)
      (react/create-element #'progress-bar nil :count 0.1))
     :class-name "measure pa4 sans-serif")))



(defun example-3 (location)
  (react-dom/render
   (react/create-element #'word-counter nil
                         :completion 0.4
                         :text "Type some text here")
   (#j:document:getElementById location)))

(example-3 "app")
