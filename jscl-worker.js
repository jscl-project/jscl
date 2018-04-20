/* This file, unlike the rest of the project is distributed under a permissive
 * license, as it will be included in the generated code. */

/*
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NON INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

"use strict";

const jqconsole = $("#console").jqconsole("", "");

if (
  typeof navigator.serviceWorker !== "undefined" &&
  typeof Worker !== "undefined"
) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then(() => {
      // KLUDGE: When a full-page reload happens (shift-reload),
      // navigator.serviceWorker.controller will be null and the
      // browser will completely bypass the service-worker, making
      // impossible to provide synchronous input for the web
      // worker. As a work around, we'll reload the page again to
      // ensure the service worker is activated properly.
      if (navigator.serviceWorker.controller) {
        loadJSCLWorker();
      } else {
        window.location.reload(false);
      }
    })
    .catch(() => {
      jqconsole.Write("Could not connect to JSCL worker", "jqconsole-error");
    });
} else {
  jqconsole.Write("JSCL does not support this browser.", "jqconsole-error");
}

function loadJSCLWorker() {
  const jsclWorker = new Worker("jscl.js");
  jsclWorker.onmessage = event => {
    const { string, stringclass } = event.data;
    jqconsole.Write(string, stringclass);
  };
  prompt();
}

function prompt() {
  jqconsole.Prompt(true, input => {
    navigator.serviceWorker.controller.postMessage(input + "\n");
    prompt();
  });
}
