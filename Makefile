# Makefile for JSCL
# Most interesting targets: all, test, doc, clean
all:	jscl.js tests.js jscl-repl repl-web.js

BRANCH=$(shell git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ \1/')

ifeq ($(BRANCH),master)
ALT_BRANCH=/$(BRANCH)
else
ALT_BRANCH=
endif

ALL_LISP=$(shell find . -name \*.lisp -and -not -name .\*)

VERSION=$(shell grep "version" package.json|cut -d '"' -f4)$(ALT_BRANCH)

clean:
	-rm -f jscl.js tests.js jscl-repl repl-web.js
	-find . -name \*.fasl -or -name \*.fas -or -name \*.lx64fas \
		-exec rm -f {} \;
	-(cd ansi-test; git reset --hard; git clean -f -d)
	-rm -r doc/*
	-mkdir -p doc

jscl.js:	$(ALL_LISP)
	sbcl --non-interactive --load jscl.lisp \
		--eval '(jscl:bootstrap-core t)'

tests.js:	$(ALL_LISP)
	sbcl --non-interactive --load jscl.lisp \
		--eval '(jscl:bootstrap-core)' \
		--eval '(jscl:compile-test-suite)'

jscl-repl:	$(ALL_LISP)
	sbcl --non-interactive --load jscl.lisp \
		--eval '(jscl:bootstrap)' \
		--eval '(jscl:compile-node-repl)'

repl-web.js:	$(ALL_LISP)
	sbcl --non-interactive --load jscl.lisp \
		--eval '(jscl:bootstrap)' \
		--eval '(jscl:compile-web-repl)'

test:	jscl.js tests.js
		$(shell find tests ansi-test \
			-\( -name \*.lisp -or -name \*.lsp -\) \
			-and -not -name .\*) \
		.ansi-patched
	sbcl --non-interactive --load jscl.lisp \
		--eval '(jscl:bootstrap-core)' \
		--eval '(jscl:run-tests-in-host)'
	node tests.js

doc:	doc/jscl.pdf doc/jscl.html.d/index.html

doc/jscl.texi:	$(ALL_LISP) doc-intro.texi doc-conclusion.texi
	sbcl --non-interactive \
		--eval '(ql:quickload :net.didierverna.declt)' \
		--eval '(ql:quickload :alexandria)' \
		--load 'write-docs.lisp' \
		--eval '(jscl/doc:write-docs)'

doc/jscl.html.d/index.html:	doc/jscl.texi
	cd doc; makeinfo -o jscl.html.d/ \
		--html --css-include=doc.css \
		--split=node jscl.texi

doc/jscl.ps:	doc/jscl.texi
	cd doc; makeinfo --ps -o jscl.ps jscl.texi

doc/jscl.pdf:	doc/jscl.texi
	cd doc; makeinfo --pdf -o jscl.pdf jscl.texi

doc/jscl.txt:	doc/jscl.texi
	cd doc; makeinfo --plaintext -o jscl.txt jscl.texi

doc/jscl.info:	doc/jscl.texi
	cd doc; makeinfo -o jscl.info jscl.texi


.ansi-patched:	ansi-test.patch
	-patch --forward --backup -d ansi-test < ansi-test.patch
	touch .ansi-patched
