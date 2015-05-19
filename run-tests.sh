#!/bin/bash

BASE=`dirname $0`
TMPDIR="$BASE/.tmp"

mkdir -p $TMPDIR

TESTFILE="$TMPDIR/output.js"
PHANTOMJS=phantomjs

cat jscl.js tests.js > $TESTFILE
$PHANTOMJS $TESTFILE
