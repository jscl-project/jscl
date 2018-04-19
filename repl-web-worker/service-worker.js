// This file is a service-worker which will be installed to provide
// offline responses to a HTTP service, providing input and some other
// async functionality to jscl. This allows to a jscl installed as a
// web worker to request them synchronously, using the XMLHttpRequest
// with async=false.
//
// /stdin   - Return a character read from the standard input
//
// /sleep   - Sleep for a given duration
//

"use strict";

// Service worker lifecycle

self.addEventListener("install", function(event) {
  // Replace existing worker immediately without waiting until it is
  // serving zero clients.
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  // By default, the service worker won't serve resources if the main
  // page (html) was not served by the service worker. Change this!
  event.waitUntil(clients.claim());
});

//
// Standard Input
//

let stdinBuffer = "";
let markAsReady;

self.addEventListener("message", function(event) {
  stdinBuffer += event.data;
  if (markAsReady) {
    markAsReady();
  }
});

async function consumeChar() {
  if (stdinBuffer.length > 0) {
    const value = stdinBuffer[0];
    stdinBuffer = stdinBuffer.slice(1);
    return value;
  } else {
    try {
      await new Promise(resolve => {
        if (markAsReady) {
          throw new Error(`Concurrent consumeChar calls are not allowed.`);
        } else {
          markAsReady = resolve;
        }
      });
      return consumeChar();
    } finally {
      markAsReady = undefined;
    }
  }
}

self.addEventListener("fetch", event => {
  const { request } = event;

  if (request.url.endsWith("/stdin")) {
    event.respondWith(
      (async function() {
        const value = await consumeChar();
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
