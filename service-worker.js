/* service-worker.js
 * 
 * This file is a service-worker which will be installed to provide
 * offline responses to a HTTP service, providing input and some other
 * async functionality to jscl. This allows to a jscl installed as a
 * web worker to request them synchronously, using the XMLHttpRequest
 * with async=false.
 * 
 */

/* This file, unlike the rest of the project is distributed under a permissive
 * license, as it will be included in the generated code. */

/*
 * Copyright (C) 2018 David Vazquez Pua
 * 
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

//
// Standard Input
//

let stdinBuffer = "";

let pendingReaders = [];

self.addEventListener("message", function(event) {
  stdinBuffer += event.data;
  const pending = pendingReaders;
  pendingReaders = [];
  pending.forEach(resolve => resolve());
});

async function readStdin() {
  if (stdinBuffer.length > 0) {
    const value = stdinBuffer;
    stdinBuffer = "";
    return value;
  } else {
    await new Promise(resolve => {
      pendingReaders.push(resolve);
    });
    return readStdin();
  }
}

function sleep({ options: { seconds } }) {
  return new Promise(resolve => {
    setTimeout(() => resolve(true), seconds * 1000);
  });
}

const commandHandlers = {
  readStdin,
  sleep
};

self.addEventListener("fetch", event => {
  const { request } = event;
  if (request.url.endsWith("/__jscl")) {
    event.respondWith(
      (async function() {
        const cmd = await request.json();
        const { command } = cmd;
        const value = await commandHandlers[command](cmd);
        const response = new Response(JSON.stringify({ value: value }), {
          headers: { "Content-Type": "application/json" }
        });
        return response;
      })()
    );
  } else {
    return fetch(event.request);
  }
});
