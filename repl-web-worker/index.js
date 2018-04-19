"use strict";

const jqconsole = $("#console").jqconsole("", "");

if (
  typeof navigator.serviceWorker !== "undefined" &&
  typeof Worker !== "undefined"
) {
  navigator.serviceWorker
    .register("repl-web-worker/service-worker.js")
    .then(() => {
      loadJSCLWorker();
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
}
