/* This file, unlike the rest of the project is distributed under a permissive
 * license, as it will be included in the generated code. */

/*
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

// This file is prepended to the result of compile jscl.lisp, and
// contain runtime code that jscl assumes to exist.

var t;
var nil;
var errorSym;

var jscl = Object.create(null);

if (typeof module !== 'undefined')
  module.exports = jscl;
else if (typeof self !== 'undefined')
  self.jscl = jscl;


var internals = jscl.internals = Object.create(null);

internals.globalEval = function(code, data){
  var geval = eval;             // Just an indirect eval
  var fn = geval('(function(values, internals, data){ "use strict"; ' + code + '; })');
  return fn(internals.mv, internals, data);
};

internals.pv = function(x) {
  return x==undefined? nil: x;
};

internals.mv = function(){
  var r = [].slice.call(arguments);
  r['multiple-value'] = true;
  return r;
};

internals.forcemv = function(x) {
  return typeof x == 'object' && x !== null && 'multiple-value' in x? x: internals.mv(x);
};

internals.error = function(){
  var args = Array.prototype.slice.call(arguments);
  errorSym.fvalue.apply(null, [internals.pv].concat(args));
}

internals.typeError = function (datum, expectedType) {
  internals.error(internals.intern("TYPE-ERROR", "COMMON-LISP"),
    internals.intern("DATUM", "KEYWORD"), datum,
    internals.intern("EXPECTED-TYPE", "KEYWORD"), expectedType)
}

//
// Workaround the problems with `new` for arbitrary number of
// arguments. Some primitive constructors (like Date) differ if they
// are called as a function or as a constructor.
//
//    https://github.com/jscl-project/jscl/pull/242#issuecomment-238923579
//
// Note that primitive constructors, if accessed with oget (e.g:
// #j:Date) will be converted into a Lisp function. We track the
// original function in the jscl_original property as we can't wrap
// the primitive constructor in a Lisp function or it will not work.
internals.newInstance = function(values, ct){
  var args = Array.prototype.slice.call(arguments);
  var newCt = ct.bind.apply(ct.jscl_original || ct, args.slice(1));
  return new newCt();
};

// Workaround the problem with send NULL for async XHR
// BUG: future todo
//var reqXHRsendNull = function(req){
//  req.send(null);
//};

// Workaround the problem with operator precedence
// ash
internals.Bitwise_ash_R = function (x, y) { return x >> y;};
internals.Bitwise_ash_L = function (x, y) { return x << y;};
// lognot
internals.Bitwise_not = function (x) {return ~x;};
// logior
internals.Bitwise_ior = function (x, y) {return x | y;};
// logxor
internals.Bitwise_xor = function (x, y) {return x ^ y;};
// logand
internals.Bitwise_and = function (x, y) { return x & y;};


// NOTE: Define VALUES to be MV for toplevel forms. It is because
// `eval' compiles the forms and execute the Javascript code at
// toplevel with `js-eval', so it is necessary to return multiple
// values from the eval function.
var values = internals.mv;

internals.checkArgsAtLeast = function(args, n){
  if (args < n) throw 'too few arguments';
};

internals.checkArgsAtMost = function(args, n){
  if (args > n) throw 'too many arguments';
};

internals.checkArgs = function(args, n){
  internals.checkArgsAtLeast(args, n);
  internals.checkArgsAtMost(args, n);
};


// Lists

internals.Cons = function (car, cdr) {
  this['$$jscl_car'] = car;
  this['$$jscl_cdr'] = cdr;
};

Object.defineProperty(Object.prototype, "$$jscl_car", {
  get: (function () { internals.typeError(this, internals.intern("CONS", "COMMON-LISP")); }),
  set: (function () { internals.typeError(this, internals.intern("CONS", "COMMON-LISP")); }),
});

Object.defineProperty(Object.prototype, "$$jscl_cdr", {
  get: (function () { internals.typeError(this, internals.intern("CONS", "COMMON-LISP")); }),
  set: (function () { internals.typeError(this, internals.intern("CONS", "COMMON-LISP")); }),
});

Object.defineProperty(internals.Cons.prototype, "$$jscl_car", { writable: true });
Object.defineProperty(internals.Cons.prototype, "$$jscl_cdr", { writable: true });

// Improper list constructor (like LIST*)
internals.QIList = function(){
  if (arguments.length == 1)
    return arguments[0];
  else {
    var i = arguments.length-1;
    var r = arguments[i--];
    for (; i>=0; i--){
      r = new internals.Cons(arguments[i], r);
    }
    return r;
  }
};




// Arithmetic

internals.handled_division = function (x, y) {
  if (y == 0) internals.error(internals.intern("DIVISION-BY-ZERO", "COMMON-LISP"),
    internals.intern("OPERANDS","KEYWORD"), internals.QIList(x, y, nil));
  return x/y;
};


// Chars and Strings


// Return a new Array of strings, each either length-1, or length-2 (a UTF-16 surrogate pair).
function codepoints (string) {
  return string.split(/(?![\udc00-\udfff])/);
};

// Create and return a lisp string for the Javascript string STRING.
internals.make_lisp_string = function (string){
  var array = codepoints(string);
  array.stringp = 1;
  return array;
};

internals.char_to_codepoint = function(ch) {
  if (ch.length == 1) {
    return ch.charCodeAt(0);
  } else {
    var xh = ch.charCodeAt(0) - 0xD800;
    var xl = ch.charCodeAt(1) - 0xDC00;
    return 0x10000 + (xh << 10) + (xl);
  }
};

internals.char_from_codepoint = function(x) {
  if (x <= 0xFFFF) {
    return String.fromCharCode(x);
  } else {
    x -= 0x10000;
    var xh = x >> 10;
    var xl = x & 0x3FF;
    return String.fromCharCode(0xD800 + xh) + String.fromCharCode(0xDC00 + xl);
  }
};

// if a char (JS string) has the same number of codepoints after .toUpperCase(), return that, else the original.
internals.safe_char_upcase = function(x) {
  var xu = x.toUpperCase();
  if (codepoints(xu).length == 1) {
    return xu;
  } else {
    return x;
  }
};
internals.safe_char_downcase = function(x) {
  var xl = x.toLowerCase();
  if (codepoints(xl).length == 1) {
    return xl;
  } else {
    return x;
  }
};

internals.xstring = function(x){
  if(typeof x === "number") return x.toString();
  const hasFillPointer = typeof x.fillpointer === 'number'
  const activechars = hasFillPointer? x.slice(0, x.fillpointer): x
  return activechars.join('');
};


internals.lisp_to_js = function (x) {
  if (typeof x == 'object' && x !== null && 'length' in x && x.stringp == 1)
    return internals.xstring(x);
  else if (x === t)
    return true;
  else if (x === nil)
    return false;
  else if (typeof x == 'function'){
    // Trampoline calling the Lisp function
    if("jscl_original" in x) {
        return x.jscl_original
    } else {
        return( function(){
            var args = Array.prototype.slice.call(arguments);
            for (var i in args)
                args[i] = internals.js_to_lisp(args[i]);
            return internals.lisp_to_js(x.apply(this, [internals.pv].concat(args)));
        });
    }
  }
  else return x;
};

internals.js_to_lisp = function (x) {
  if (typeof x == 'string')
    return internals.make_lisp_string(x);
  else if (x === true)
    return t;
  else if (x === false)
    return nil;
  else if (typeof x == 'function'){
    // Trampoline calling the JS function
    var trampoline = function(values){
      var args = Array.prototype.slice.call(arguments, 1);
      for (var i in args)
        args[i] = internals.lisp_to_js(args[i]);
      return values(internals.js_to_lisp(x.apply(this, args)));
    };
    trampoline.jscl_original = x;
    return trampoline;
  } else
    return x;
};


// Non-local exits

internals.BlockNLX = function (id, values, name){
  this.id = id;
  this.values = values;
  this.name = name;
};

internals.CatchNLX = function (id, values){
  this.id = id;
  this.values = values;
};

internals.TagNLX = function (id, label){
  this.id = id;
  this.label = label;
};

internals.isNLX = function(x){
  var i = internals;
  return x instanceof i.BlockNLX
    ||   x instanceof i.CatchNLX
    ||   x instanceof i.TagNLX;
};


// Packages & Symbols

var packages = jscl.packages = Object.create(null);

packages.JSCL = {
  packageName: 'JSCL',
  symbols: Object.create(null),
  exports: Object.create(null),
  use: nil
};

packages.CL = {
  packageName: 'COMMON-LISP',
  symbols: Object.create(null),
  exports: Object.create(null),
  use: nil
};

packages['COMMON-LISP'] = packages.CL;

packages.KEYWORD = {
  packageName: 'KEYWORD',
  symbols: Object.create(null),
  exports: Object.create(null),
  use: nil
};

jscl.CL = packages.CL.exports;



const UNBOUND = Symbol('UnboundFunction')

internals.makeUnboundFunction = function (symbol) {
  const fn = ()=>{ internals.error(internals.intern("UNDEFINED-FUNCTION","COMMON-LISP"),
    internals.intern("NAME","KEYWORD"), symbol);}
  fn[UNBOUND] = true;
  return fn;
};

internals.Symbol = function(name, package_name){
  this.name = name;
  this.package = package_name;
  this.value = undefined;
  this.fvalue = internals.makeUnboundFunction(this)
  this.stack = [];
};

internals.symbolValue = function (symbol){
  var value = symbol.value;
  if (value === undefined){
    internals.error(internals.intern("UNBOUND-VARIABLE", "COMMON-LISP"),
      internals.intern("NAME", "KEYWORD"), symbol);
  } else {
    return value;
  }
};

internals.fboundp = function (symbol) {
  if (symbol instanceof internals.Symbol){
    return !symbol.fvalue[UNBOUND]
  } else {
    internals.typeError(symbol, internals.intern("SYMBOL", "COMMON-LISP"));
  }
}

internals.symbolFunction = function (symbol){
  var fn = symbol.fvalue;
  if (fn[UNBOUND])
    symbol.fvalue();
  return fn;
};


internals.bindSpecialBindings = function (symbols, values, callback){
  try {
    symbols.forEach(function(s, i){
      s.stack = s.stack || [];
      s.stack.push(s.value);
      s.value = values[i];
    });
    return callback();
  } finally {
    symbols.forEach(function(s, i){
      s.value = s.stack.pop();
    });
  }
};

internals.intern = function (name, package_name){
  package_name = package_name || "JSCL";
  var lisp_package = packages[package_name];
  if (!lisp_package)
    throw "No package " + package_name;

  var symbol = lisp_package.symbols[name];
  if (!symbol)
    symbol = lisp_package.symbols[name] = new internals.Symbol(name, lisp_package);

  // Auto-export symbol if it is the KEYWORD package.
  if (lisp_package === packages.KEYWORD)
    lisp_package.exports[name] = symbol;

  return symbol;
};

jscl.evaluateString = function(str) {
    return eval_in_lisp(str);
}

/* execute all script tags with type of x-common-lisp */
var eval_in_lisp;               // set in FFI.lisp
const commonLispScriptType = "text/x-common-lisp";

if (typeof window !== 'undefined' && window && window.addEventListener) {
    window.addEventListener('DOMContentLoaded', function () {
        return runCommonLispScripts();
    }, false);
}

function runCommonLispScripts() {

    var documentScripts = document.getElementsByTagName('script');
    var scripts = [];
    var script;

    var progressivelyRunScripts = function(){
        var script, i;

        for (i = 0; i < scripts.length; i++) {
            script = scripts[i];
            if (script.loaded && !script.executed) {
                script.executed = true;
                eval_in_lisp('(progn ' + script.text + ')');
            } else if (!script.loaded && !script.error) {
                break;
            }
        }
    }

    var loadRemoteDocument = function (url, successCallback, errorCallback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        if ('overrideMimeType' in xhr) {
            xhr.overrideMimeType('text/plain');
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 0 || xhr.status === 200) {
                    successCallback(xhr.responseText);
                } else {
                    errorCallback();
                    throw new Error('Could not load ' + url);
                }
            }
        };
        return xhr.send(null);
    }

    for(var i = 0; i < documentScripts.length; ++i) {

        if(documentScripts[i].type != commonLispScriptType) {
            continue;
        }

        if("src" in documentScripts[i] && documentScripts[i].src.length != 0) {
            script = {
                executed: false,
                error: false,
                text: null,
                loaded: false,
                url: documentScripts[i].src
            };
            scripts.push(script);
            loadRemoteDocument(
                documentScripts[i].src,
                function successCallback(content) {
                    script.loaded = true;
                    script.text = content;
                    progressivelyRunScripts();
                }, function errorCallback(error) {
                    script.error = true;
                    progressivelyRunScripts();
                });
        } else {
            scripts.push({
                executed: false,
                error: false,
                text: documentScripts[i].innerHTML,
                loaded: true,
                url: null
            });
        }
    }
    progressivelyRunScripts();
}

// NIL and T

nil = internals.intern("NIL", "COMMON-LISP");
t = internals.intern("T", "COMMON-LISP");
errorSym = internals.intern("ERROR", "COMMON-LISP");
Object.defineProperty(nil, "$$jscl_car", { value: nil, writable: false });
Object.defineProperty(nil, "$$jscl_cdr", { value: nil, writable: false });

// Node Readline
if (typeof module !== 'undefined' &&
    typeof global !== 'undefined' &&
    typeof phantom === 'undefined')
  global.readline = require('readline');
