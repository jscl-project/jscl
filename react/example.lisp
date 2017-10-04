;; References:
;;
;; CREATE-REACT-CLASS
;;  https://reactjs.org/docs/react-without-es6.html
;; EVENTS:
;;  https://reactjs.org/docs/events.html

(/debug "loading example.lisp!")

(defpackage :react-example
  (:use :cl :cl-user :jscl :react))

(/debug "loading example.lisp!")

(in-package :react-example)

;;; Example, following Ludovico Fischer

(define-react-component save-button
  ((save :documentation "The callback triggered by the Save button."
         :initform #'(lambda (&rest react-internal) (/debug "SAVE-BUTTON#SAVE"))))
  nil
  (render (&rest react-internal)
    (create-element "button" :class-name "pb2 ph3" :on-click save "Save")))

(define-react-component alert-box
  ((status :documentation "The status of the last save operaion."
           :initform :idle))
  nil
  (render (&rest react-internal)
    (unless (equal status :idle)
      (create-element
       "div"
       :class-name "mv2"
       (ecase status
         (:failure "Save failed")
         (:success "Save successful")
         (:waiting "Saving!")
         (:idle ""))))))

(define-react-component counter
  ((count :documentation "The number of words typed so far."
          :initform 0))
  nil
  (render (&rest react-internal)
    (create-element "p" :class-name "mb2" (format nil "Word count: ~D" count))))

(define-react-component
  (progress-bar
   :documentation "A simple component displaying a progress bar.")
  ((completion :documentation "The completion rate for typing words."
               :initform 0.0))
  nil
  (render (&rest react-internal)
    (create-element
     "div"
     :class-name "mv2 flex flex-column"
     (create-element "label"
                     :html-for "progress"
                     :class-name "mv-2"
                     "Progress")
     (create-element "progress"
                     :value completion
                     :id "progress"
                     :class-name "bn"
                     (format nil "~D%" completion)))))

(define-react-component (editor :documentation "A simple editor")
  ((text :documentation "The initial text in the editor."))
  nil
  (render (&rest react-internal)
    (create-element
     "div"
     :class-name "mv2 flex flex-column"
     (create-element "label"
                     :html-for "editor"
                     :class-name "mv-2"
                     "Enter your text:")
     (create-element "textarea"
                     :value text
                     :id "editor"))))

(define-react-component
  (word-counter
   :documentation "A simple word counter")
  ((text :documentation "The text typed so far."
         :initform ""))
  nil
  (render (&rest react-internal)
    (create-element
     "form"
     :class-name "measure pa4 sans-serif"
     (create-element #'editor :text text)
     (create-element #'counter :count 1)
     (create-element #'progress-bar :completion 0.1))))

(define-react-component
  (save-manager
   :documentation "I am too lazy to write a meaningful documentation.")
  ((save :documentation "The callback triggered by the save button."
         :initform (lambda (data on-success on-failure)
                    (funcall on-failure "Not implemented")))
   (data :documentation "The data to save"
         :initform "This is the data to save."))
  ((save-status :documentation "The status of the save manager."
                :initform :idle))
  (render (&rest react-internal)
    (flet ((on-save (state)
             (funcall
              save
              data
              #'(lambda (success) (set-save-status :success))
              #'(lambda (failure)
                  (/debug "SAVE-FAILURE")
                  (/log jscl::this)
                  (set-save-status :failure)))))
      (create-element
       "div"
       :class-name "flex flex-column mv2"
       (create-element #'save-button :save #'on-save)
       (create-element #'alert-box :save-status (get-save-status))))))

(defun lf-1 (location)
  (dom-render
   (create-element #'save-manager
                   :save #'(lambda (data on-success on-failure)
                             (funcall on-failure "Oups"))
                   :data "This is the real data to save")
   location))


;;; Example, following ParenScript documentation

(defun test-1 (location)
  (dom-render (create-element "h1" "Hello, world!") location))

(setf todo-list-2
      (react::ll-create-component
       "TODO-LIST-2"
       nil
       (list :render #'(lambda (&rest react-internal)
                         (/debug "todo-list#render")
                         (/log jscl::this)
                         (let ((items (jscl::oget jscl::this "props" "items")))
                           (flet ((create-item (text) (create-element "li" text)))
                             (create-element "ul" (mapcar #'create-item items))))))))

(defun test-2 (location)
  (dom-render (create-element todo-list-2 :items '("Apple" "Peach" "Pear"))
              location))

(define-react-component todo-list
  ((items :documentation "The list of items displayed by the todo list."
          :initform '("Initialise this todo list.")))
  nil
  (render (&rest react-internal)
   (flet ((create-item (text) (create-element "li" text)))
     (create-element "ul" (mapcar #'create-item items)))))

(define-react-component todo-app
  ((placeholder :documentation "Prompt for new items."
                :initform "New item"))
  ((items :documentation "The list of items gathered so far."
          :initform '("Apple" "Peach" "Pear"))
   (text :documentation "The working copy of the next item."
         :initform ""))
  (render (&rest react-internal)
    (labels
        ((input-on-change (event)
           (set-text (dom-element-value (event-target event))))
         (form-on-submit (event)
           (event-prevent-default event)
           (let ((next-items
                   (cons (get-text) (get-items)))
                 (next-text ""))
             (set-items next-items)
             (set-text next-text))))

      (create-element
       "div"
       (create-element "h3" :style '(:background-color "lightgrey") "TODO")
       (create-element #'todo-list :items (get-items))
       (create-element
        "form"
        :on-submit #'form-on-submit
        (if (string= (get-text) "")
            (create-element "input"
                            :placeholder placeholder
                            :on-change #'input-on-change)
            (create-element "input"
                            :value (get-text)
                            :on-change #'input-on-change))
        (create-element "button" "Add"))))))


(defun test-3 (location)
  (dom-render (create-element #'todo-list :items '("Apple" "Peach" "Pear")) location))

(defun test-4 (location)
  (dom-render (create-element #'todo-app) location))

(test-4 "app")
