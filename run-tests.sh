#!/usr/bin/env bash

BASE=`dirname $0`
TMPDIR="$BASE/.tmp"

mkdir -p $TMPDIR

TESTFILE="$TMPDIR/output.js"
RUNJS=${RUNJS:-phantomjs}

cat jscl.js tests.js > $TESTFILE
echo >> $TESTFILE
echo '' >> $TESTFILE

$RUNJS $TESTFILE
