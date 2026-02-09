# JSCL

[![Pipeline CI](https://github.com/jscl-project/jscl/actions/workflows/pull-request.yml/badge.svg)](https://github.com/jscl-project/jscl/actions/workflows/pull-request.yml)
[![npm](https://img.shields.io/npm/v/jscl)](https://www.npmjs.com/package/jscl)

JSCL is a Common Lisp to JavaScript compiler, which is bootstrapped
from Common Lisp and executed from the browser.

<p align="center">
  <a href="https://jscl-project.github.io/">
    <img src="logo/logo-128.png" alt="JSCL" title="JSCL" height="128" />
  </a>
</p>


## Getting Started

You can try a demo online [here](https://jscl-project.github.io/), or
you can install the JSCL npm package:

    npm install -g jscl
    
to run `jscl` in NodeJS.


## Build

If you want to hack JSCL, you will have to download the repository

    git clone https://github.com/jscl-project/jscl.git

Run `npm install` under the `jscl` directory, then run the build
script:

    ./make.sh

It will generate `jscl.js` and the rest of the distribution files in
the `jscl/dist` directory. Now you can open `dist/index.html` in your
browser and use it. To use in Node, `node dist/jscl-node.js`; to use
in Deno, `deno --allow-env --allow-read dist/jscl-deno.js`.


## Status

JSCL is and will be a subset of Common Lisp. Of course it is far from
complete, but it supports partially most common special operators,
functions and macros. In particular:

- Multiple values

- Explicit control transfers
  [tagbody](http://www.lispworks.com/documentation/HyperSpec/Body/s_tagbod.htm)
  and [go](http://www.lispworks.com/documentation/HyperSpec/Body/s_go.htm)

- Static and dynamic non local exit [catch](http://www.lispworks.com/documentation/HyperSpec/Body/s_catch.htm), 
  [throw](http://www.lispworks.com/documentation/HyperSpec/Body/s_throw.htm); 
  [block](http://www.lispworks.com/documentation/HyperSpec/Body/s_block.htm),
  [return-from](http://www.lispworks.com/documentation/HyperSpec/Body/s_ret_fr.htm).

- Lexical and special variables. However, declare expressions are
  missing, but you can *proclaim* special variables.

- Optional and keyword arguments

- SETF places

- Packages

- The `LOOP` macro

- CLOS

- The `format` function

- Others

The compiler is very verbose, some simple optimizations or
*minification* could help to deal with it.

*Feel free to hack it yourself*
