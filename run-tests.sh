#!/usr/bin/env bash

RUNJS=${RUNJS:-node}
$RUNJS  "$(dirname $0)/tests.js"

