;;; time.lisp --- Time utilities for both host and target

;; Copyright (C) 2012, 2026 David Vazquez

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

;;; Time functions needed during bootstrap and at runtime.

#+jscl
(defun get-universal-time ()
  "Return the current Universal Time."
  ;; JavaScript Date.now() returns milliseconds since Unix epoch (1970-01-01)
  ;; Lisp universal time is seconds since 1900-01-01
  ;; The difference is 2208988800 seconds
  (+ (floor (#j:Date:now) 1000) 2208988800))

#+jscl
(defun decode-universal-time (universal-time &optional time-zone)
  "Decode a universal time into its components.
Returns nine values: second, minute, hour, date, month, year,
day-of-week, daylight-saving-time-p, and time-zone."
  (declare (ignore time-zone))
  ;; Convert Lisp universal time to Unix milliseconds
  ;; Lisp universal time is seconds since 1900-01-01
  ;; Unix time is seconds since 1970-01-01
  ;; The difference is 2208988800 seconds
  (let* ((unix-ms (* (- universal-time 2208988800) 1000))
         (date (new #j:Date unix-ms))
         (second ((oget date "getUTCSeconds")))
         (minute ((oget date "getUTCMinutes")))
         (hour ((oget date "getUTCHours")))
         (day ((oget date "getUTCDate")))
         (month (1+ ((oget date "getUTCMonth"))))
         (year ((oget date "getUTCFullYear")))
         ;; JavaScript: 0=Sunday, Lisp: 0=Monday
         (js-dow ((oget date "getUTCDay")))
         (dow (if (zerop js-dow) 6 (1- js-dow))))
    (values second minute hour day month year dow nil 0)))

#+jscl
(defun get-source-data-epoch ()
  "Get SOURCE_DATE_EPOCH from environment, converted to universal time."
  (let ((sde (oget #j:process "env" "SOURCE_DATE_EPOCH")))
    (unless (eq sde #j:undefined)
      (+ (parse-integer (clstring sde)) 2208988800))))
