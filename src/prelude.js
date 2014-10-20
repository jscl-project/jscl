// This file is prepended to the result of compile jscl.lisp, and
// contain runtime code that jscl assumes to exist.

var window = this;

var t;
var nil;

var lisp = {};

globalEval = eval;  // Just an indirect eval

function pv (x) { return x==undefined? nil: x; }

function mv(){
  var r = [].slice.call(arguments);
  r['multiple-value'] = true;
  return r;
}

function forcemv (x) {
  return typeof x == 'object' && 'multiple-value' in x? x: mv(x);
}

// NOTE: Define VALUES to be MV for toplevel forms. It is because
// `eval' compiles the forms and execute the Javascript code at
// toplevel with `js-eval', so it is necessary to return multiple
// values from the eval function.
var values = mv;

function checkArgsAtLeast(args, n){
  if (args < n) throw 'too few arguments';
}

function checkArgsAtMost(args, n){
  if (args > n) throw 'too many arguments';
}

function checkArgs(args, n){
  checkArgsAtLeast(args, n);
  checkArgsAtMost(args, n);
}

// Improper list constructor (like LIST*)
function QIList(){
  if (arguments.length == 1)
    return arguments[0];
  else {
    var i = arguments.length-1;
    var r = arguments[i--];
    for (; i>=0; i--){
      r = {car: arguments[i], cdr: r};
    }
    return r;
  }
}

// Return a new Array of strings, each either length-1, or length-2 (a UTF-16 surrogate pair).
function codepoints(string) {
  return string.split(/(?![\udc00-\udfff])/);
}

// Create and return a lisp string for the Javascript string STRING.
function make_lisp_string (string){
  var array = codepoints(string);
  array.stringp = 1
  return array;
}

function char_to_codepoint(ch) {
  if (ch.length == 1) {
    return ch.charCodeAt(0);
  } else {
    var xh = ch.charCodeAt(0) - 0xD800;
    var xl = ch.charCodeAt(1) - 0xDC00;
    return 0x10000 + (xh << 10) + (xl);
  }
}

function char_from_codepoint(x) {
  if (x <= 0xFFFF) {
    return String.fromCharCode(x);
  } else {
    x -= 0x10000;
    var xh = x >> 10;
    var xl = x & 0x3FF;
    return String.fromCharCode(0xD800 + xh) + String.fromCharCode(0xDC00 + xl);
  }
}

// if a char (JS string) has the same number of codepoints after .toUpperCase(), return that, else the original.
function safe_char_upcase(x) {
  var xu = x.toUpperCase();
  if (codepoints(xu).length == 1) {
    return xu;
  } else {
    return x;
  }
}
function safe_char_downcase(x) {
  var xl = x.toLowerCase();
  if (codepoints(xl).length == 1) {
    return xl;
  } else {
    return x;
  }
}

function xstring(x){ return x.join(''); }


function lisp_to_js (x) {
  if (typeof x == 'object' && 'length' in x && x.stringp == 1)
    return xstring(x);
  else if (x === t)
    return true;
  else if (x === nil)
    return false;
  else if (typeof x == 'function'){
    // Trampoline calling the Lisp function
    return (function(){
      var args = Array.prototype.slice.call(arguments);
      for (var i in args)
        args[i] = js_to_lisp(args[i]);
      return lisp_to_js(x.apply(this, [pv, arguments.length].concat(args)));
    });
  }
  else return x;
}

function js_to_lisp (x) {
  if (typeof x == 'string')
    return make_lisp_string(x);
  else if (x === true)
    return t;
  else if (x === false)
    return nil;
  else if (typeof x == 'function'){
    // Trampoline calling the JS function
    return (function(values, nargs){
      var args = Array.prototype.slice.call(arguments, 2);
      for (var i in args)
        args[i] = lisp_to_js(args[i]);
      return values(js_to_lisp(x.apply(this, args)));
    });
  } else return x;
}


// Non-local exits

function BlockNLX (id, values, name){
  this.id = id;
  this.values = values;
  this.name = name;
}

function CatchNLX (id, values){
  this.id = id;
  this.values = values;
}

function TagNLX (id, label){
  this.id = id;
  this.label = label;
}


// Packages & Symbols

var packages = {};

packages.CL = {
  packageName: 'CL',
  symbols: {},
  exports: {},
  use: nil
};

packages.KEYWORD = {
  packageName: 'KEYWORD',
  symbols: {},
  exports: {},
  use: nil
};

function Symbol(name, package_name){
  this.name = name;
  if (package_name)
    this['package'] = package_name;
}

function intern (name, package_name){
  package_name = package_name || "CL";
  var lisp_package = packages[package_name];
  if (!lisp_package)
    throw "No package " + package_name;

  var symbol = lisp_package.symbols[name];
  if (!symbol)
    symbol = lisp_package.symbols[name] = new Symbol(name, lisp_package);

  // Auto-export symbol if it is the KEYWORD package.
  if (lisp_package === packages.KEYWORD)
    lisp_package.exports[name] = symbol;
    
  return symbol;
}
