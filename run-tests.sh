#!/usr/bin/env bash

RUNJS=${RUNJS:-node}
$RUNJS  "$(dirname $0)/dist/tests.js"
