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

const contexts = {};

// A context represents a client of the service-worker. We want to
// keep separate buffers for different clients for example, as it
// should be possible to use multiple REPLs in multiple tabs.
class Context {
  constructor(sessionId) {
    this.sessionId = sessionId;
    this.resolvePendingRequest = undefined;
    this.pendingPromise = undefined;
  }

  checkPendingPromise() {
    if (this.pendingPromise) {
      throw new Error(
        `Concurrent requests from the same client are not allowed.`,
      );
    }
  }

  // readStdin and sleep initiate the request and return immediately
  readStdin() {
    this.checkPendingPromise();
    this.pendingPromise = new Promise(async (resolve) => {
      const client = await self.clients.get(this.sessionId);

      client.postMessage({
        command: "prompt",
      });
      this.resolvePendingRequest = resolve;
    });
  }

  sleep({ seconds }) {
    this.checkPendingPromise();
    this.pendingPromise = new Promise((resolve) => {
      setTimeout(() => resolve({ value: true }), seconds * 1000);
    });
  }

  // wait for this.pendingPromise to resolve, with 5 second timeout to
  // avoid browser killing XHR. Can be retried in a loop.
  async wait() {
    const resp = await Promise.race([
      this.pendingPromise,
      new Promise((resolve) =>
        setTimeout(() => resolve({ timeout: true }), 5000),
      ),
    ]);
    if ("value" in resp) this.pendingPromise = undefined;
    return resp;
  }

  static findOrCreate(clientId) {
    if (contexts[clientId]) {
      return contexts[clientId];
    } else {
      contexts[clientId] = new Context(clientId);
      return contexts[clientId];
    }
  }
}

// Message handler

self.addEventListener("message", function (event) {
  const { sessionId, input } = event.data;
  const context = Context.findOrCreate(sessionId);
  context.resolvePendingRequest({ value: input });
  context.resolvePendingRequest = undefined;
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.url.endsWith("/__jscl")) {
    event.respondWith(
      (async function () {
        const cmd = await request.json();
        const { command, sessionId, options } = cmd;
        let resp;

        switch (command) {
          case "init": {
            // Note that the client INIT request is made from the main
            // thread.
            const context = Context.findOrCreate(event.clientId);
            resp = { value: context.sessionId };
            break;
          }
          case "readStdin": {
            const context = Context.findOrCreate(sessionId);
            context.readStdin();
            resp = await context.wait();
            break;
          }
          case "sleep": {
            const context = Context.findOrCreate(sessionId);
            context.sleep(options);
            resp = await context.wait();
            break;
          }
          case "wait": {
            const context = Context.findOrCreate(sessionId);
            resp = await context.wait(options);
            break;
          }
        }

        const response = new Response(JSON.stringify(resp), {
          headers: { "Content-Type": "application/json" },
        });
        return response;
      })(),
    );
  } else {
    return fetch(event.request);
  }
});
