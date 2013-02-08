var nil;

function pv (x) { return x==undefined? nil: x; }

function mv(){
    var r = [];
    r['multiple-value'] = true;
    for (var i=0; i<arguments.length; i++)
        r.push(arguments[i]);
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
    if (args.length < n) throw 'too few arguments';
}

function checkArgsAtMost(args, n){
    if (args.length > n) throw 'too many arguments';
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
var l1 = {name: "DEFMACRO"};
l1;
var l2 = {name: "DECLAIM"};
l2;
var l3 = {name: "NIL"};
((l3).value = l3);
(nil = l3.value);
var l4 = {name: "T"};
((l4).value = l4);
var l5 = {name: "LAMBDA"};
l5;
var l6 = {name: "WHEN"};
l6;
var l7 = {name: "UNLESS"};
l7;
var l8 = {name: "DEFVAR"};
l8;
var l9 = {name: "DEFPARAMETER"};
l9;
var l10 = {name: "NAMED-LAMBDA"};
l10;
var l11 = {name: "DEFUN"};
l11;
var l12 = {name: "NULL"};
(function(){
    (l12).fvalue = (function(v2){
        ((v2)["fname"] = "NULL");
        return v2;
    })((function (values,v1){
        checkArgs(arguments, 2);
        return (function(){
            return ((v1 === l3.value)?l4.value: l3.value);
        })();
    }));
    return l12;
})();
var l13 = {name: "RETURN"};
l13;
var l14 = {name: "WHILE"};
l14;
var l15 = {name: "*GENSYM-COUNTER*"};
(function(){
    (((l15.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l15).value = 0));
    return l15;
})();
var l16 = {name: "GENSYM"};
var l17 = {name: "INTEGER-TO-STRING"};
(function(){
    (l16).fvalue = (function(v4){
        ((v4)["fname"] = "GENSYM");
        return v4;
    })((function (values,v3){
        checkArgsAtMost(arguments, 2);
        switch(arguments.length-1){
        case 0:
        v3="G";
        default: break;
        }
        return (function(){
            ((l15).value = (function(){
                var x1 = (function(){
                    var symbol = l15;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = 1;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })());
            return (function(){
                var name = (function(){
                    var string1 = v3;
                    var string2 = l17.fvalue(pv, (function(){
                        var symbol = l15;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                    if (typeof string1 != 'string')
                        throw 'The value ' + string1 + ' is not a type string.';
                    if (typeof string2 != 'string')
                        throw 'The value ' + string2 + ' is not a type string.';
                    return string1.concat(string2);
                })();
                if (typeof name != 'string')
                    throw 'The value ' + name + ' is not a type string.';
                return ({name: name});
            })();
        })();
    }));
    return l16;
})();
var l18 = {name: "BOUNDP"};
(function(){
    (l18).fvalue = (function(v6){
        ((v6)["fname"] = "BOUNDP");
        return v6;
    })((function (values,v5){
        checkArgs(arguments, 2);
        return (function(){
            return ((v5.value !== undefined)?l4.value: l3.value);
        })();
    }));
    return l18;
})();
var l19 = {name: "="};
(function(){
    (l19).fvalue = (function(v9){
        ((v9)["fname"] = "=");
        return v9;
    })((function (values,v7,v8){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                var x1 = v7;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v8;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return (x1==x2?l4.value: l3.value);
            })();
        })();
    }));
    return l19;
})();
var l20 = {name: "*"};
(function(){
    (l20).fvalue = (function(v12){
        ((v12)["fname"] = "*");
        return v12;
    })((function (values,v10,v11){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                var x1 = v10;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v11;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1*x2;
            })();
        })();
    }));
    return l20;
})();
var l21 = {name: "/"};
(function(){
    (l21).fvalue = (function(v15){
        ((v15)["fname"] = "/");
        return v15;
    })((function (values,v13,v14){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                var x1 = v13;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v14;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1/x2;
            })();
        })();
    }));
    return l21;
})();
var l22 = {name: "1+"};
(function(){
    (l22).fvalue = (function(v17){
        ((v17)["fname"] = "1+");
        return v17;
    })((function (values,v16){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var x1 = v16;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = 1;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
        })();
    }));
    return l22;
})();
var l23 = {name: "1-"};
(function(){
    (l23).fvalue = (function(v19){
        ((v19)["fname"] = "1-");
        return v19;
    })((function (values,v18){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var x1 = v18;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = 1;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1-x2;
            })();
        })();
    }));
    return l23;
})();
var l24 = {name: "ZEROP"};
(function(){
    (l24).fvalue = (function(v21){
        ((v21)["fname"] = "ZEROP");
        return v21;
    })((function (values,v20){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var x1 = v20;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = 0;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return (x1==x2?l4.value: l3.value);
            })();
        })();
    }));
    return l24;
})();
var l25 = {name: "TRUNCATE"};
(function(){
    (l25).fvalue = (function(v24){
        ((v24)["fname"] = "TRUNCATE");
        return v24;
    })((function (values,v22,v23){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                var x = (function(){
                    var x1 = v22;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v23;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1/x2;
                })();
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                return Math.floor(x);
            })();
        })();
    }));
    return l25;
})();
var l26 = {name: "EQL"};
(function(){
    (l26).fvalue = (function(v27){
        ((v27)["fname"] = "EQL");
        return v27;
    })((function (values,v25,v26){
        checkArgs(arguments, 3);
        return (function(){
            return ((v25 === v26)?l4.value: l3.value);
        })();
    }));
    return l26;
})();
var l27 = {name: "NOT"};
(function(){
    (l27).fvalue = (function(v29){
        ((v29)["fname"] = "NOT");
        return v29;
    })((function (values,v28){
        checkArgs(arguments, 2);
        return (function(){
            return (v28 !== l3.value ? l3.value : l4.value);
        })();
    }));
    return l27;
})();
var l28 = {name: "CONS"};
(function(){
    (l28).fvalue = (function(v32){
        ((v32)["fname"] = "CONS");
        return v32;
    })((function (values,v30,v31){
        checkArgs(arguments, 3);
        return (function(){
            return ({car: v30, cdr: v31});
        })();
    }));
    return l28;
})();
var l29 = {name: "CONSP"};
(function(){
    (l29).fvalue = (function(v34){
        ((v34)["fname"] = "CONSP");
        return v34;
    })((function (values,v33){
        checkArgs(arguments, 2);
        return (function(){
            return ((function(){
                var tmp = v33;
                return (typeof tmp == 'object' && 'car' in tmp);
            })()?l4.value: l3.value);
        })();
    }));
    return l29;
})();
var l30 = {name: "CAR"};
(function(){
    (l30).fvalue = (function(v36){
        ((v36)["fname"] = "CAR");
        return v36;
    })((function(){
        var func = (function (values,v35){
            checkArgs(arguments, 2);
            return (function(){
                return (function(){
                    var tmp = v35;
                    return tmp === l3.value? l3.value: tmp.car;
                })();
            })();
        });
        func.docstring = 'Return the CAR part of a cons, or NIL if X is null.';
        return func;
    })());
    return l30;
})();
var l31 = {name: "CDR"};
(function(){
    (l31).fvalue = (function(v38){
        ((v38)["fname"] = "CDR");
        return v38;
    })((function (values,v37){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var tmp = v37;
                return tmp === l3.value? l3.value: tmp.cdr;
            })();
        })();
    }));
    return l31;
})();
var l32 = {name: "CAAR"};
(function(){
    (l32).fvalue = (function(v40){
        ((v40)["fname"] = "CAAR");
        return v40;
    })((function (values,v39){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var tmp = (function(){
                    var tmp = v39;
                    return tmp === l3.value? l3.value: tmp.car;
                })();
                return tmp === l3.value? l3.value: tmp.car;
            })();
        })();
    }));
    return l32;
})();
var l33 = {name: "CADR"};
(function(){
    (l33).fvalue = (function(v42){
        ((v42)["fname"] = "CADR");
        return v42;
    })((function (values,v41){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var tmp = (function(){
                    var tmp = v41;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })();
                return tmp === l3.value? l3.value: tmp.car;
            })();
        })();
    }));
    return l33;
})();
var l34 = {name: "CDAR"};
(function(){
    (l34).fvalue = (function(v44){
        ((v44)["fname"] = "CDAR");
        return v44;
    })((function (values,v43){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var tmp = (function(){
                    var tmp = v43;
                    return tmp === l3.value? l3.value: tmp.car;
                })();
                return tmp === l3.value? l3.value: tmp.cdr;
            })();
        })();
    }));
    return l34;
})();
var l35 = {name: "CDDR"};
(function(){
    (l35).fvalue = (function(v46){
        ((v46)["fname"] = "CDDR");
        return v46;
    })((function (values,v45){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var tmp = (function(){
                    var tmp = v45;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })();
                return tmp === l3.value? l3.value: tmp.cdr;
            })();
        })();
    }));
    return l35;
})();
var l36 = {name: "CADDR"};
(function(){
    (l36).fvalue = (function(v48){
        ((v48)["fname"] = "CADDR");
        return v48;
    })((function (values,v47){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var tmp = (function(){
                    var tmp = (function(){
                        var tmp = v47;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })();
                    return tmp === l3.value? l3.value: tmp.cdr;
                })();
                return tmp === l3.value? l3.value: tmp.car;
            })();
        })();
    }));
    return l36;
})();
var l37 = {name: "CDDDR"};
(function(){
    (l37).fvalue = (function(v50){
        ((v50)["fname"] = "CDDDR");
        return v50;
    })((function (values,v49){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var tmp = (function(){
                    var tmp = (function(){
                        var tmp = v49;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })();
                    return tmp === l3.value? l3.value: tmp.cdr;
                })();
                return tmp === l3.value? l3.value: tmp.cdr;
            })();
        })();
    }));
    return l37;
})();
var l38 = {name: "CADDDR"};
(function(){
    (l38).fvalue = (function(v52){
        ((v52)["fname"] = "CADDDR");
        return v52;
    })((function (values,v51){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var tmp = (function(){
                    var tmp = (function(){
                        var tmp = (function(){
                            var tmp = v51;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })();
                    return tmp === l3.value? l3.value: tmp.cdr;
                })();
                return tmp === l3.value? l3.value: tmp.car;
            })();
        })();
    }));
    return l38;
})();
var l39 = {name: "FIRST"};
(function(){
    (l39).fvalue = (function(v54){
        ((v54)["fname"] = "FIRST");
        return v54;
    })((function (values,v53){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var tmp = v53;
                return tmp === l3.value? l3.value: tmp.car;
            })();
        })();
    }));
    return l39;
})();
var l40 = {name: "SECOND"};
(function(){
    (l40).fvalue = (function(v56){
        ((v56)["fname"] = "SECOND");
        return v56;
    })((function (values,v55){
        checkArgs(arguments, 2);
        return (function(){
            return l33.fvalue(values, v55);
        })();
    }));
    return l40;
})();
var l41 = {name: "THIRD"};
(function(){
    (l41).fvalue = (function(v58){
        ((v58)["fname"] = "THIRD");
        return v58;
    })((function (values,v57){
        checkArgs(arguments, 2);
        return (function(){
            return l36.fvalue(values, v57);
        })();
    }));
    return l41;
})();
var l42 = {name: "FOURTH"};
(function(){
    (l42).fvalue = (function(v60){
        ((v60)["fname"] = "FOURTH");
        return v60;
    })((function (values,v59){
        checkArgs(arguments, 2);
        return (function(){
            return l38.fvalue(values, v59);
        })();
    }));
    return l42;
})();
var l43 = {name: "REST"};
(function(){
    (l43).fvalue = (function(v62){
        ((v62)["fname"] = "REST");
        return v62;
    })((function (values,v61){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var tmp = v61;
                return tmp === l3.value? l3.value: tmp.cdr;
            })();
        })();
    }));
    return l43;
})();
var l44 = {name: "LIST"};
(function(){
    (l44).fvalue = (function(v64){
        ((v64)["fname"] = "LIST");
        return v64;
    })((function (values){
        var v63= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v63 = {car: arguments[i], cdr: 
        v63};
        return (function(){
            return v63;
        })();
    }));
    return l44;
})();
var l45 = {name: "ATOM"};
(function(){
    (l45).fvalue = (function(v66){
        ((v66)["fname"] = "ATOM");
        return v66;
    })((function (values,v65){
        checkArgs(arguments, 2);
        return (function(){
            return l27.fvalue(values, ((function(){
                var tmp = v65;
                return (typeof tmp == 'object' && 'car' in tmp);
            })()?l4.value: l3.value));
        })();
    }));
    return l45;
})();
var l46 = {name: "INCF"};
l46;
var l47 = {name: "DECF"};
l47;
var l48 = {name: "PUSH"};
l48;
var l49 = {name: "DOLIST"};
l49;
var l50 = {name: "DOTIMES"};
l50;
var l51 = {name: "COND"};
l51;
var l52 = {name: "CASE"};
l52;
var l53 = {name: "ECASE"};
l53;
var l54 = {name: "AND"};
l54;
var l55 = {name: "OR"};
l55;
var l56 = {name: "PROG1"};
l56;
var l57 = {name: "PROG2"};
l57;
var l58 = {name: "ENSURE-LIST"};
var l59 = {name: "LISTP"};
(function(){
    (l58).fvalue = (function(v68){
        ((v68)["fname"] = "ENSURE-LIST");
        return v68;
    })((function (values,v67){
        checkArgs(arguments, 2);
        return (function(){
            return (l59.fvalue(pv, v67) !== l3.value ? v67 : l44.fvalue(values, v67));
        })();
    }));
    return l58;
})();
var l60 = {name: "!REDUCE"};
(function(){
    (l60).fvalue = (function(v72){
        ((v72)["fname"] = "!REDUCE");
        return v72;
    })((function (values,v69,v70,v71){
        checkArgs(arguments, 4);
        return (function(){
            return (l12.fvalue(pv, v70) !== l3.value ? v71 : l60.fvalue(values, v69, (function(){
                var tmp = v70;
                return tmp === l3.value? l3.value: tmp.cdr;
            })(), (v69)(pv, v71, (function(){
                var tmp = v70;
                return tmp === l3.value? l3.value: tmp.car;
            })())));
        })();
    }));
    return l60;
})();
var l61 = {name: "+"};
(function(){
    (l61).fvalue = (function(v77){
        ((v77)["fname"] = "+");
        return v77;
    })((function (values){
        var v73= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v73 = {car: arguments[i], cdr: 
        v73};
        return (function(){
            return (function(v74){
                return (function(){
                    return (function(v75,v76){
                        (function(){
                            while(v75 !== l3.value){
                                (v76 = (function(){
                                    var tmp = v75;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })());
                                (function(){
                                    (v74 = (function(){
                                        var x1 = v74;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = v76;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return x1+x2;
                                    })());
                                    return l3.value;
                                })();
                                (v75 = (function(){
                                    var tmp = v75;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                        return v74;
                    })(v73,l3.value);
                })();
            })(0);
        })();
    }));
    return l61;
})();
var l62 = {name: "-"};
(function(){
    (l62).fvalue = (function(v83){
        ((v83)["fname"] = "-");
        return v83;
    })((function (values,v79){
        checkArgsAtLeast(arguments, 2);
        var v78= l3.value;
        for (var i = arguments.length-1; i>=2; i--)
            v78 = {car: arguments[i], cdr: 
        v78};
        return (function(){
            return (l12.fvalue(pv, v78) !== l3.value ? (function(){
                var x1 = v79;
                if (typeof x1 !== 'number') throw 'Not a number!';
                return -x1;
            })() : (function(v80){
                return (function(){
                    return (function(v81,v82){
                        (function(){
                            while(v81 !== l3.value){
                                (v82 = (function(){
                                    var tmp = v81;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })());
                                (function(){
                                    (v80 = (function(){
                                        var x1 = v80;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = v82;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return x1-x2;
                                    })());
                                    return l3.value;
                                })();
                                (v81 = (function(){
                                    var tmp = v81;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                        return v80;
                    })(v78,l3.value);
                })();
            })(v79));
        })();
    }));
    return l62;
})();
var l63 = {name: "APPEND-TWO"};
var l64 = {name: "APPEND"};
(function(){
    (l63).fvalue = (function(v86){
        ((v86)["fname"] = "APPEND-TWO");
        return v86;
    })((function (values,v84,v85){
        checkArgs(arguments, 3);
        return (function(){
            return (l12.fvalue(pv, v84) !== l3.value ? v85 : ({car: (function(){
                var tmp = v84;
                return tmp === l3.value? l3.value: tmp.car;
            })(), cdr: l64.fvalue(pv, (function(){
                var tmp = v84;
                return tmp === l3.value? l3.value: tmp.cdr;
            })(), v85)}));
        })();
    }));
    return l63;
})();
(function(){
    (l64).fvalue = (function(v88){
        ((v88)["fname"] = "APPEND");
        return v88;
    })((function (values){
        var v87= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v87 = {car: arguments[i], cdr: 
        v87};
        return (function(){
            return l60.fvalue(values, (function(){
                var symbol = l63;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), v87, l3);
        })();
    }));
    return l64;
})();
var l65 = {name: "REVAPPEND"};
(function(){
    (l65).fvalue = (function(v91){
        ((v91)["fname"] = "REVAPPEND");
        return v91;
    })((function (values,v89,v90){
        checkArgs(arguments, 3);
        return (function(){
            (function(){
                return (function(){
                    while(v89 !== l3.value){
                        (v90 = ({car: (function(){
                            var tmp = v89;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), cdr: v90}));
                        (v89 = (function(){
                            var tmp = v89;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    }return l3.value;
                })();
            })();
            return v90;
        })();
    }));
    return l65;
})();
var l66 = {name: "REVERSE"};
(function(){
    (l66).fvalue = (function(v93){
        ((v93)["fname"] = "REVERSE");
        return v93;
    })((function (values,v92){
        checkArgs(arguments, 2);
        return (function(){
            return l65.fvalue(values, v92, l3);
        })();
    }));
    return l66;
})();
var l67 = {name: "PSETQ"};
l67;
var l68 = {name: "DO"};
l68;
var l69 = {name: "DO*"};
l69;
var l70 = {name: "LIST-LENGTH"};
(function(){
    (l70).fvalue = (function(v96){
        ((v96)["fname"] = "LIST-LENGTH");
        return v96;
    })((function (values,v94){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v95){
                (function(){
                    return (function(){
                        while(l27.fvalue(pv, l12.fvalue(pv, v94)) !== l3.value){
                            (v95 = (function(){
                                var x1 = v95;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = 1;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })());
                            (v94 = (function(){
                                var tmp = v94;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })());
                        }return l3.value;
                    })();
                })();
                return v95;
            })(0);
        })();
    }));
    return l70;
})();
var l71 = {name: "LENGTH"};
(function(){
    (l71).fvalue = (function(v98){
        ((v98)["fname"] = "LENGTH");
        return v98;
    })((function (values,v97){
        checkArgs(arguments, 2);
        return (function(){
            return (((typeof(v97) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                var x = v97;
                if (typeof x != 'string')
                    throw 'The value ' + x + ' is not a type string.';
                return x.length;
            })() : (((function(){
                var x = v97;
                return typeof x === 'object' && 'length' in x;
            })()?l4.value: l3.value) !== l3.value ? (function(){
                var tmp = (v97)["length"];
                return tmp == undefined? l3.value: tmp ;
            })() : (l59.fvalue(pv, v97) !== l3.value ? l70.fvalue(values, v97) : l3.value)));
        })();
    }));
    return l71;
})();
var l72 = {name: "CONCAT-TWO"};
(function(){
    (l72).fvalue = (function(v101){
        ((v101)["fname"] = "CONCAT-TWO");
        return v101;
    })((function (values,v99,v100){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                var string1 = v99;
                var string2 = v100;
                if (typeof string1 != 'string')
                    throw 'The value ' + string1 + ' is not a type string.';
                if (typeof string2 != 'string')
                    throw 'The value ' + string2 + ' is not a type string.';
                return string1.concat(string2);
            })();
        })();
    }));
    return l72;
})();
var l73 = {name: "MAPCAR"};
var l74 = {name: "SENTINEL"};
(function(){
    (l73).fvalue = (function(v107){
        ((v107)["fname"] = "MAPCAR");
        return v107;
    })((function (values,v102,v103){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                var v104 = ({car: l74, cdr: l3.value});
                var v105 = v104;
                (function(){
                    return (function(){
                        while(l27.fvalue(pv, l12.fvalue(pv, v103)) !== l3.value){
                            (function(v106){
                                (function(){
                                    var x = v105;
                                    if (typeof x != 'object')
                                        throw 'The value ' + x + ' is not a type object.';
                                    return (x.cdr = v106, x);
                                })();
                                return (v105 = v106, v103 = (function(){
                                    var tmp = v103;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            })(({car: (v102)(pv, (function(){
                                var tmp = v103;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()), cdr: l3.value}));
                        }return l3.value;
                    })();
                })();
                return (function(){
                    var tmp = v104;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })();
            })();
        })();
    }));
    return l73;
})();
var l75 = {name: "IDENTITY"};
(function(){
    (l75).fvalue = (function(v109){
        ((v109)["fname"] = "IDENTITY");
        return v109;
    })((function (values,v108){
        checkArgs(arguments, 2);
        return (function(){
            return v108;
        })();
    }));
    return l75;
})();
var l76 = {name: "CONSTANTLY"};
(function(){
    (l76).fvalue = (function(v112){
        ((v112)["fname"] = "CONSTANTLY");
        return v112;
    })((function (values,v110){
        checkArgs(arguments, 2);
        return (function(){
            return (function (values){
                var v111= l3.value;
                for (var i = arguments.length-1; i>=1; i--)
                    v111 = {car: arguments[i], cdr: 
                v111};
                return v110;
            });
        })();
    }));
    return l76;
})();
var l77 = {name: "COPY-LIST"};
(function(){
    (l77).fvalue = (function(v114){
        ((v114)["fname"] = "COPY-LIST");
        return v114;
    })((function (values,v113){
        checkArgs(arguments, 2);
        return (function(){
            return l73.fvalue(values, (function(){
                var symbol = l75;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), v113);
        })();
    }));
    return l77;
})();
var l78 = {name: "CODE-CHAR"};
(function(){
    (l78).fvalue = (function(v116){
        ((v116)["fname"] = "CODE-CHAR");
        return v116;
    })((function (values,v115){
        checkArgs(arguments, 2);
        return (function(){
            return v115;
        })();
    }));
    return l78;
})();
var l79 = {name: "CHAR-CODE"};
(function(){
    (l79).fvalue = (function(v118){
        ((v118)["fname"] = "CHAR-CODE");
        return v118;
    })((function (values,v117){
        checkArgs(arguments, 2);
        return (function(){
            return v117;
        })();
    }));
    return l79;
})();
var l80 = {name: "CHAR="};
(function(){
    (l80).fvalue = (function(v121){
        ((v121)["fname"] = "CHAR=");
        return v121;
    })((function (values,v119,v120){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                var x1 = v119;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v120;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return (x1==x2?l4.value: l3.value);
            })();
        })();
    }));
    return l80;
})();
var l81 = {name: "INTEGERP"};
(function(){
    (l81).fvalue = (function(v123){
        ((v123)["fname"] = "INTEGERP");
        return v123;
    })((function (values,v122){
        checkArgs(arguments, 2);
        return (function(){
            return (((typeof (v122) == "number")?l4.value: l3.value) !== l3.value ? (function(){
                var x1 = (function(){
                    var x = v122;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    return Math.floor(x);
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v122;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return (x1==x2?l4.value: l3.value);
            })() : l3.value);
        })();
    }));
    return l81;
})();
var l82 = {name: "PLUSP"};
(function(){
    (l82).fvalue = (function(v125){
        ((v125)["fname"] = "PLUSP");
        return v125;
    })((function (values,v124){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var x1 = 0;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v124;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return (x1<x2?l4.value: l3.value);
            })();
        })();
    }));
    return l82;
})();
var l83 = {name: "MINUSP"};
(function(){
    (l83).fvalue = (function(v127){
        ((v127)["fname"] = "MINUSP");
        return v127;
    })((function (values,v126){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var x1 = v126;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = 0;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return (x1<x2?l4.value: l3.value);
            })();
        })();
    }));
    return l83;
})();
(function(){
    (l59).fvalue = (function(v130){
        ((v130)["fname"] = "LISTP");
        return v130;
    })((function (values,v128){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v129){
                return (v129 !== l3.value ? v129 : l12.fvalue(values, v128));
            })(((function(){
                var tmp = v128;
                return (typeof tmp == 'object' && 'car' in tmp);
            })()?l4.value: l3.value));
        })();
    }));
    return l59;
})();
var l84 = {name: "NTHCDR"};
(function(){
    (l84).fvalue = (function(v133){
        ((v133)["fname"] = "NTHCDR");
        return v133;
    })((function (values,v131,v132){
        checkArgs(arguments, 3);
        return (function(){
            (function(){
                return (function(){
                    while((l82.fvalue(pv, v131) !== l3.value ? v132 : l3.value) !== l3.value){
                        (v131 = l23.fvalue(pv, v131));
                        (v132 = (function(){
                            var tmp = v132;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    }return l3.value;
                })();
            })();
            return v132;
        })();
    }));
    return l84;
})();
var l85 = {name: "NTH"};
(function(){
    (l85).fvalue = (function(v136){
        ((v136)["fname"] = "NTH");
        return v136;
    })((function (values,v134,v135){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                var tmp = l84.fvalue(pv, v134, v135);
                return tmp === l3.value? l3.value: tmp.car;
            })();
        })();
    }));
    return l85;
})();
var l86 = {name: "LAST"};
(function(){
    (l86).fvalue = (function(v138){
        ((v138)["fname"] = "LAST");
        return v138;
    })((function (values,v137){
        checkArgs(arguments, 2);
        return (function(){
            (function(){
                return (function(){
                    while(((function(){
                        var tmp = (function(){
                            var tmp = v137;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value) !== l3.value){
                        (v137 = (function(){
                            var tmp = v137;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    }return l3.value;
                })();
            })();
            return v137;
        })();
    }));
    return l86;
})();
var l87 = {name: "BUTLAST"};
(function(){
    (l87).fvalue = (function(v140){
        ((v140)["fname"] = "BUTLAST");
        return v140;
    })((function (values,v139){
        checkArgs(arguments, 2);
        return (function(){
            return (((function(){
                var tmp = (function(){
                    var tmp = v139;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })();
                return (typeof tmp == 'object' && 'car' in tmp);
            })()?l4.value: l3.value) !== l3.value ? ({car: (function(){
                var tmp = v139;
                return tmp === l3.value? l3.value: tmp.car;
            })(), cdr: l87.fvalue(pv, (function(){
                var tmp = v139;
                return tmp === l3.value? l3.value: tmp.cdr;
            })())}) : l3.value);
        })();
    }));
    return l87;
})();
var l88 = {name: "MEMBER"};
(function(){
    (l88).fvalue = (function(v143){
        ((v143)["fname"] = "MEMBER");
        return v143;
    })((function (values,v141,v142){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                try {
                    return (function(){
                        while(v142 !== l3.value){
                            (l26.fvalue(pv, v141, (function(){
                                var tmp = v142;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()) !== l3.value ? (function(){
                                var values = mv;
                                throw ({type: 'block', id: 65, values: v142, message: 'Return from unknown block NIL.'})
                            })() : l3.value);
                            (v142 = (function(){
                                var tmp = v142;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })());
                        }return l3.value;
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 65)
                        return values.apply(this, forcemv(cf.values));
                    else
                        throw cf;
                }
            })();
        })();
    }));
    return l88;
})();
var l89 = {name: "REMOVE"};
(function(){
    (l89).fvalue = (function(v146){
        ((v146)["fname"] = "REMOVE");
        return v146;
    })((function (values,v144,v145){
        checkArgs(arguments, 3);
        return (function(){
            return (l12.fvalue(pv, v145) !== l3.value ? l3.value : (l26.fvalue(pv, v144, (function(){
                var tmp = v145;
                return tmp === l3.value? l3.value: tmp.car;
            })()) !== l3.value ? l89.fvalue(values, v144, (function(){
                var tmp = v145;
                return tmp === l3.value? l3.value: tmp.cdr;
            })()) : ({car: (function(){
                var tmp = v145;
                return tmp === l3.value? l3.value: tmp.car;
            })(), cdr: l89.fvalue(pv, v144, (function(){
                var tmp = v145;
                return tmp === l3.value? l3.value: tmp.cdr;
            })())})));
        })();
    }));
    return l89;
})();
var l90 = {name: "REMOVE-IF"};
(function(){
    (l90).fvalue = (function(v149){
        ((v149)["fname"] = "REMOVE-IF");
        return v149;
    })((function (values,v147,v148){
        checkArgs(arguments, 3);
        return (function(){
            return (l12.fvalue(pv, v148) !== l3.value ? l3.value : ((v147)(pv, (function(){
                var tmp = v148;
                return tmp === l3.value? l3.value: tmp.car;
            })()) !== l3.value ? l90.fvalue(values, v147, (function(){
                var tmp = v148;
                return tmp === l3.value? l3.value: tmp.cdr;
            })()) : ({car: (function(){
                var tmp = v148;
                return tmp === l3.value? l3.value: tmp.car;
            })(), cdr: l90.fvalue(pv, v147, (function(){
                var tmp = v148;
                return tmp === l3.value? l3.value: tmp.cdr;
            })())})));
        })();
    }));
    return l90;
})();
var l91 = {name: "REMOVE-IF-NOT"};
(function(){
    (l91).fvalue = (function(v152){
        ((v152)["fname"] = "REMOVE-IF-NOT");
        return v152;
    })((function (values,v150,v151){
        checkArgs(arguments, 3);
        return (function(){
            return (l12.fvalue(pv, v151) !== l3.value ? l3.value : ((v150)(pv, (function(){
                var tmp = v151;
                return tmp === l3.value? l3.value: tmp.car;
            })()) !== l3.value ? ({car: (function(){
                var tmp = v151;
                return tmp === l3.value? l3.value: tmp.car;
            })(), cdr: l91.fvalue(pv, v150, (function(){
                var tmp = v151;
                return tmp === l3.value? l3.value: tmp.cdr;
            })())}) : l91.fvalue(values, v150, (function(){
                var tmp = v151;
                return tmp === l3.value? l3.value: tmp.cdr;
            })())));
        })();
    }));
    return l91;
})();
var l92 = {name: "DIGIT-CHAR-P"};
(function(){
    (l92).fvalue = (function(v154){
        ((v154)["fname"] = "DIGIT-CHAR-P");
        return v154;
    })((function (values,v153){
        checkArgs(arguments, 2);
        return (function(){
            return (((function(){
                var x1 = 48;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v153;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return (x1<=x2?l4.value: l3.value);
            })() !== l3.value ? (function(){
                var x1 = v153;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = 57;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return (x1<=x2?l4.value: l3.value);
            })() : l3.value) !== l3.value ? (function(){
                var x1 = v153;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = 48;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1-x2;
            })() : l3.value);
        })();
    }));
    return l92;
})();
var l93 = {name: "DIGIT-CHAR"};
(function(){
    (l93).fvalue = (function(v156){
        ((v156)["fname"] = "DIGIT-CHAR");
        return v156;
    })((function (values,v155){
        checkArgs(arguments, 2);
        return (function(){
            return ((function(){
                var x1 = 0;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v155;
                if (typeof x2 !== 'number') throw 'Not a number!';
                var x3 = 9;
                if (typeof x3 !== 'number') throw 'Not a number!';
                return (x1<=x2 && x2<=x3?l4.value: l3.value);
            })() !== l3.value ? (function(){
                var string = "0123456789";
                var index = v155;
                if (typeof string != 'string')
                    throw 'The value ' + string + ' is not a type string.';
                if (typeof index != 'number')
                    throw 'The value ' + index + ' is not a type number.';
                return string.charCodeAt(index);
            })() : l3.value);
        })();
    }));
    return l93;
})();
var l94 = {name: "SUBSEQ"};
(function(){
    (l94).fvalue = (function(v160){
        ((v160)["fname"] = "SUBSEQ");
        return v160;
    })((function (values,v157,v158,v159){
        checkArgsAtLeast(arguments, 3);
        checkArgsAtMost(arguments, 4);
        switch(arguments.length-1){
        case 2:
        v159=l3.value;
        default: break;
        }
        return (function(){
            return (((typeof(v157) == "string")?l4.value: l3.value) !== l3.value ? (v159 !== l3.value ? (function(){
                var str = v157;
                var a = v158;
                var b;
                b = v159;
                return str.slice(a,b);
            })() : (function(){
                var str = v157;
                var a = v158;
                var b;
                return str.slice(a,b);
            })()) : (function(){
                throw "Unsupported argument.";
            })());
        })();
    }));
    return l94;
})();
var l95 = {name: "SOME"};
(function(){
    (l95).fvalue = (function(v167){
        ((v167)["fname"] = "SOME");
        return v167;
    })((function (values,v161,v162){
        checkArgs(arguments, 3);
        return (function(){
            try {
                return (((typeof(v162) == "string")?l4.value: l3.value) !== l3.value ? (function(v163,v164){
                    (function(){
                        return (function(){
                            while((function(){
                                var x1 = v163;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v164;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return (x1<x2?l4.value: l3.value);
                            })() !== l3.value){
                                ((v161)(pv, (function(){
                                    var string = v162;
                                    var index = v163;
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    if (typeof index != 'number')
                                        throw 'The value ' + index + ' is not a type number.';
                                    return string.charCodeAt(index);
                                })()) !== l3.value ? (function(){
                                    var values = mv;
                                    throw ({type: 'block', id: 72, values: l4.value, message: 'Return from unknown block SOME.'})
                                })() : l3.value);
                                (v163 = (function(){
                                    var x1 = v163;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = 1;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })());
                            }return l3.value;
                        })();
                    })();
                    return l3.value;
                })(0,l71.fvalue(pv, v162)) : (l59.fvalue(pv, v162) !== l3.value ? (function(){
                    try {
                        return (function(v165,v166){
                            (function(){
                                while(v165 !== l3.value){
                                    (v166 = (function(){
                                        var tmp = v165;
                                        return tmp === l3.value? l3.value: tmp.car;
                                    })());
                                    (function(){
                                        ((v161)(pv, v166) !== l3.value ? (function(){
                                            var values = mv;
                                            throw ({type: 'block', id: 74, values: l4.value, message: 'Return from unknown block NIL.'})
                                        })() : l3.value);
                                        return l3.value;
                                    })();
                                    (v165 = (function(){
                                        var tmp = v165;
                                        return tmp === l3.value? l3.value: tmp.cdr;
                                    })());
                                }return l3.value;
                            })();
                            return l3.value;
                        })(v162,l3.value);
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == 74)
                            return values.apply(this, forcemv(cf.values));
                        else
                            throw cf;
                    }
                })() : (function(){
                    throw "Unknown sequence.";
                })()));
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 72)
                    return values.apply(this, forcemv(cf.values));
                else
                    throw cf;
            }
        })();
    }));
    return l95;
})();
var l96 = {name: "EVERY"};
(function(){
    (l96).fvalue = (function(v174){
        ((v174)["fname"] = "EVERY");
        return v174;
    })((function (values,v168,v169){
        checkArgs(arguments, 3);
        return (function(){
            try {
                return (((typeof(v169) == "string")?l4.value: l3.value) !== l3.value ? (function(v170,v171){
                    (function(){
                        return (function(){
                            while((function(){
                                var x1 = v170;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v171;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return (x1<x2?l4.value: l3.value);
                            })() !== l3.value){
                                ((v168)(pv, (function(){
                                    var string = v169;
                                    var index = v170;
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    if (typeof index != 'number')
                                        throw 'The value ' + index + ' is not a type number.';
                                    return string.charCodeAt(index);
                                })()) !== l3.value ? l3.value : (function(){
                                    var values = mv;
                                    throw ({type: 'block', id: 75, values: l3.value, message: 'Return from unknown block EVERY.'})
                                })());
                                (v170 = (function(){
                                    var x1 = v170;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = 1;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })());
                            }return l3.value;
                        })();
                    })();
                    return l4.value;
                })(0,l71.fvalue(pv, v169)) : (l59.fvalue(pv, v169) !== l3.value ? (function(){
                    try {
                        return (function(v172,v173){
                            (function(){
                                while(v172 !== l3.value){
                                    (v173 = (function(){
                                        var tmp = v172;
                                        return tmp === l3.value? l3.value: tmp.car;
                                    })());
                                    (function(){
                                        ((v168)(pv, v173) !== l3.value ? l3.value : (function(){
                                            var values = mv;
                                            throw ({type: 'block', id: 77, values: l3.value, message: 'Return from unknown block NIL.'})
                                        })());
                                        return l3.value;
                                    })();
                                    (v172 = (function(){
                                        var tmp = v172;
                                        return tmp === l3.value? l3.value: tmp.cdr;
                                    })());
                                }return l3.value;
                            })();
                            return l4.value;
                        })(v169,l3.value);
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == 77)
                            return values.apply(this, forcemv(cf.values));
                        else
                            throw cf;
                    }
                })() : (function(){
                    throw "Unknown sequence.";
                })()));
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 75)
                    return values.apply(this, forcemv(cf.values));
                else
                    throw cf;
            }
        })();
    }));
    return l96;
})();
var l97 = {name: "ASSOC"};
(function(){
    (l97).fvalue = (function(v177){
        ((v177)["fname"] = "ASSOC");
        return v177;
    })((function (values,v175,v176){
        checkArgs(arguments, 3);
        return (function(){
            (function(){
                try {
                    return (function(){
                        while(v176 !== l3.value){
                            (l26.fvalue(pv, v175, l32.fvalue(pv, v176)) !== l3.value ? (function(){
                                throw ({type: 'block', id: 79, values: l3.value, message: 'Return from unknown block NIL.'})
                            })() : (v176 = (function(){
                                var tmp = v176;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })()));
                        }return l3.value;
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 79)
                        return cf.values;
                    else
                        throw cf;
                }
            })();
            return (function(){
                var tmp = v176;
                return tmp === l3.value? l3.value: tmp.car;
            })();
        })();
    }));
    return l97;
})();
var l98 = {name: "STRING"};
(function(){
    (l98).fvalue = (function(v179){
        ((v179)["fname"] = "STRING");
        return v179;
    })((function (values,v178){
        checkArgs(arguments, 2);
        return (function(){
            return (((typeof(v178) == "string")?l4.value: l3.value) !== l3.value ? v178 : (((function(){
                var tmp = v178;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?l4.value: l3.value) !== l3.value ? (v178).name : (function(){
                var x = v178;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                return String.fromCharCode(x);
            })()));
        })();
    }));
    return l98;
})();
var l99 = {name: "STRING="};
(function(){
    (l99).fvalue = (function(v182){
        ((v182)["fname"] = "STRING=");
        return v182;
    })((function (values,v180,v181){
        checkArgs(arguments, 3);
        return (function(){
            return ((v180 == v181)?l4.value: l3.value);
        })();
    }));
    return l99;
})();
var l100 = {name: "FDEFINITION"};
(function(){
    (l100).fvalue = (function(v184){
        ((v184)["fname"] = "FDEFINITION");
        return v184;
    })((function (values,v183){
        checkArgs(arguments, 2);
        return (function(){
            return (((typeof v183 == 'function')?l4.value: l3.value) !== l3.value ? v183 : (((function(){
                var tmp = v183;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?l4.value: l3.value) !== l3.value ? (function(){
                var symbol = v183;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })() : (function(){
                throw "Invalid function";
            })()));
        })();
    }));
    return l100;
})();
var l101 = {name: "DISASSEMBLE"};
var l102 = {name: "WRITE-LINE"};
(function(){
    (l101).fvalue = (function(v186){
        ((v186)["fname"] = "DISASSEMBLE");
        return v186;
    })((function (values,v185){
        checkArgs(arguments, 2);
        return (function(){
            l102.fvalue(pv, (l100.fvalue(pv, v185)).toString());
            return l3.value;
        })();
    }));
    return l101;
})();
var l103 = {name: "DOCUMENTATION"};
var l104 = {name: "FUNCTION"};
var l105 = {name: "VARIABLE"};
(function(){
    (l103).fvalue = (function(v191){
        ((v191)["fname"] = "DOCUMENTATION");
        return v191;
    })((function(){
        var func = (function (values,v187,v188){
            checkArgs(arguments, 3);
            return (function(){
                return (function(v189){
                    return (l26.fvalue(pv, v189, l104) !== l3.value ? (function(v190){
                        return (function(){
                            var tmp = (v190)["docstring"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })(l100.fvalue(pv, v187)) : (l26.fvalue(pv, v189, l105) !== l3.value ? (function(){
                        (((function(){
                            var tmp = v187;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?l4.value: l3.value) !== l3.value ? l3.value : (function(){
                            throw "Wrong argument type! it should be a symbol";
                        })());
                        return (function(){
                            var tmp = (v187)["vardoc"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })() : (function(){
                        throw "ECASE expression failed.";
                    })()));
                })(v188);
            })();
        });
        func.docstring = 'Return the documentation of X. TYPE must be the symbol VARIABLE or FUNCTION.';
        return func;
    })());
    return l103;
})();
var l106 = {name: "MULTIPLE-VALUE-BIND"};
l106;
var l107 = {name: "MULTIPLE-VALUE-LIST"};
l107;
var l108 = {name: "*PACKAGE-LIST*"};
(function(){
    (((l108.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l108).value = l3.value));
    return l108;
})();
var l109 = {name: "LIST-ALL-PACKAGES"};
(function(){
    (l109).fvalue = (function(v192){
        ((v192)["fname"] = "LIST-ALL-PACKAGES");
        return v192;
    })((function (values){
        checkArgsAtMost(arguments, 1);
        return (function(){
            return (function(){
                var symbol = l108;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })();
        })();
    }));
    return l109;
})();
var l110 = {name: "MAKE-PACKAGE"};
var l111 = {name: "FIND-PACKAGE-OR-FAIL"};
(function(){
    (l110).fvalue = (function(v197){
        ((v197)["fname"] = "MAKE-PACKAGE");
        return v197;
    })((function (values,v193,v194){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v194=l3.value;
        default: break;
        }
        return (function(){
            return (function(v195,v196){
                ((v195)["packageName"] = v193);
                ((v195)["symbols"] = {});
                ((v195)["exports"] = {});
                ((v195)["use"] = v196);
                ((l108).value = ({car: v195, cdr: (function(){
                    var symbol = l108;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()}));
                return v195;
            })({},l73.fvalue(pv, (function(){
                var symbol = l111;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), v194));
        })();
    }));
    return l110;
})();
var l112 = {name: "PACKAGEP"};
(function(){
    (l112).fvalue = (function(v199){
        ((v199)["fname"] = "PACKAGEP");
        return v199;
    })((function (values,v198){
        checkArgs(arguments, 2);
        return (function(){
            return (((typeof (v198) === 'object')?l4.value: l3.value) !== l3.value ? ((("symbols") in (v198))?l4.value: l3.value) : l3.value);
        })();
    }));
    return l112;
})();
var l113 = {name: "FIND-PACKAGE"};
var l114 = {name: "PACKAGE-NAME"};
(function(){
    (l113).fvalue = (function(v204){
        ((v204)["fname"] = "FIND-PACKAGE");
        return v204;
    })((function (values,v200){
        checkArgs(arguments, 2);
        return (function(){
            try {
                (l112.fvalue(pv, v200) !== l3.value ? (function(){
                    var values = mv;
                    throw ({type: 'block', id: 88, values: v200, message: 'Return from unknown block FIND-PACKAGE.'})
                })() : l3.value);
                return (function(v201){
                    return (function(){
                        try {
                            return (function(v202,v203){
                                (function(){
                                    while(v202 !== l3.value){
                                        (v203 = (function(){
                                            var tmp = v202;
                                            return tmp === l3.value? l3.value: tmp.car;
                                        })());
                                        (function(){
                                            (l99.fvalue(pv, l114.fvalue(pv, v203), v201) !== l3.value ? (function(){
                                                var values = mv;
                                                throw ({type: 'block', id: 89, values: v203, message: 'Return from unknown block NIL.'})
                                            })() : l3.value);
                                            return l3.value;
                                        })();
                                        (v202 = (function(){
                                            var tmp = v202;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })());
                                    }return l3.value;
                                })();
                                return l3.value;
                            })((function(){
                                var symbol = l108;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(),l3.value);
                        }
                        catch (cf){
                            if (cf.type == 'block' && cf.id == 89)
                                return values.apply(this, forcemv(cf.values));
                            else
                                throw cf;
                        }
                    })();
                })(l98.fvalue(pv, v200));
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 88)
                    return values.apply(this, forcemv(cf.values));
                else
                    throw cf;
            }
        })();
    }));
    return l113;
})();
(function(){
    (l111).fvalue = (function(v207){
        ((v207)["fname"] = "FIND-PACKAGE-OR-FAIL");
        return v207;
    })((function (values,v205){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v206){
                return (v206 !== l3.value ? v206 : (function(){
                    throw "Package unknown.";
                })());
            })(l113.fvalue(pv, v205));
        })();
    }));
    return l111;
})();
(function(){
    (l114).fvalue = (function(v210){
        ((v210)["fname"] = "PACKAGE-NAME");
        return v210;
    })((function (values,v208){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v209){
                return (function(){
                    var tmp = (v209)["packageName"];
                    return tmp == undefined? l3.value: tmp ;
                })();
            })(l111.fvalue(pv, v208));
        })();
    }));
    return l114;
})();
var l115 = {name: "%PACKAGE-SYMBOLS"};
(function(){
    (l115).fvalue = (function(v213){
        ((v213)["fname"] = "%PACKAGE-SYMBOLS");
        return v213;
    })((function (values,v211){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v212){
                return (function(){
                    var tmp = (v212)["symbols"];
                    return tmp == undefined? l3.value: tmp ;
                })();
            })(l111.fvalue(pv, v211));
        })();
    }));
    return l115;
})();
var l116 = {name: "PACKAGE-USE-LIST"};
(function(){
    (l116).fvalue = (function(v216){
        ((v216)["fname"] = "PACKAGE-USE-LIST");
        return v216;
    })((function (values,v214){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v215){
                return (function(){
                    var tmp = (v215)["use"];
                    return tmp == undefined? l3.value: tmp ;
                })();
            })(l111.fvalue(pv, v214));
        })();
    }));
    return l116;
})();
var l117 = {name: "%PACKAGE-EXTERNAL-SYMBOLS"};
(function(){
    (l117).fvalue = (function(v219){
        ((v219)["fname"] = "%PACKAGE-EXTERNAL-SYMBOLS");
        return v219;
    })((function (values,v217){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v218){
                return (function(){
                    var tmp = (v218)["exports"];
                    return tmp == undefined? l3.value: tmp ;
                })();
            })(l111.fvalue(pv, v217));
        })();
    }));
    return l117;
})();
var l118 = {name: "*COMMON-LISP-PACKAGE*"};
(function(){
    (((l118.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l118).value = l110.fvalue(pv, "CL")));
    return l118;
})();
var l119 = {name: "*USER-PACKAGE*"};
(function(){
    (((l119.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l119).value = l110.fvalue(pv, "CL-USER", l44.fvalue(pv, (function(){
        var symbol = l118;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()))));
    return l119;
})();
var l120 = {name: "*KEYWORD-PACKAGE*"};
(function(){
    (((l120.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l120).value = l110.fvalue(pv, "KEYWORD")));
    return l120;
})();
var l121 = {name: "KEYWORDP"};
var l122 = {name: "SYMBOL-PACKAGE"};
(function(){
    (l121).fvalue = (function(v221){
        ((v221)["fname"] = "KEYWORDP");
        return v221;
    })((function (values,v220){
        checkArgs(arguments, 2);
        return (function(){
            return (((function(){
                var tmp = v220;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?l4.value: l3.value) !== l3.value ? ((l122.fvalue(pv, v220) === (function(){
                var symbol = l120;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())?l4.value: l3.value) : l3.value);
        })();
    }));
    return l121;
})();
var l123 = {name: "*PACKAGE*"};
(function(){
    (((l123.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l123).value = (function(){
        var symbol = l118;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()));
    return l123;
})();
var l124 = {name: "IN-PACKAGE"};
l124;
var l125 = {name: "%INTERN-SYMBOL"};
(function(){
    (l125).fvalue = (function(v225){
        ((v225)["fname"] = "%INTERN-SYMBOL");
        return v225;
    })((function (values,v222){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var v223 = (((("package") in (v222))?l4.value: l3.value) !== l3.value ? l111.fvalue(pv, (function(){
                    var tmp = (v222)["package"];
                    return tmp == undefined? l3.value: tmp ;
                })()) : (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
                var v224 = l115.fvalue(pv, v223);
                ((v222)["package"] = v223);
                (((v223 === (function(){
                    var symbol = l120;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())?l4.value: l3.value) !== l3.value ? ((v222)["value"] = v222) : l3.value);
                return ((v224)[(v222).name] = v222);
            })();
        })();
    }));
    return l125;
})();
var l126 = {name: "FIND-SYMBOL"};
var l127 = {name: "EXTERNAL", 'package': 'KEYWORD'};
var l128 = {name: "INTERNAL", 'package': 'KEYWORD'};
var l129 = {name: "INHERIT", 'package': 'KEYWORD'};
(function(){
    (l126).fvalue = (function(v234){
        ((v234)["fname"] = "FIND-SYMBOL");
        return v234;
    })((function (values,v226,v227){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v227=(function(){
            var symbol = l123;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        default: break;
        }
        return (function(){
            return (function(){
                var v228 = l111.fvalue(pv, v227);
                var v229 = l117.fvalue(pv, v228);
                var v230 = l115.fvalue(pv, v228);
                return ((((v226) in (v229))?l4.value: l3.value) !== l3.value ? values((function(){
                    var tmp = (v229)[v226];
                    return tmp == undefined? l3.value: tmp ;
                })(), l127.value) : ((((v226) in (v230))?l4.value: l3.value) !== l3.value ? values((function(){
                    var tmp = (v230)[v226];
                    return tmp == undefined? l3.value: tmp ;
                })(), l128.value) : (function(){
                    try {
                        return (function(v231,v232){
                            (function(){
                                while(v231 !== l3.value){
                                    (v232 = (function(){
                                        var tmp = v231;
                                        return tmp === l3.value? l3.value: tmp.car;
                                    })());
                                    (function(){
                                        (function(v233){
                                            return ((((v226) in (v233))?l4.value: l3.value) !== l3.value ? (function(){
                                                var values = mv;
                                                throw ({type: 'block', id: 98, values: values((function(){
                                                    var tmp = (v233)[v226];
                                                    return tmp == undefined? l3.value: tmp ;
                                                })(), l129.value), message: 'Return from unknown block NIL.'})
                                            })() : l3.value);
                                        })(l117.fvalue(pv, v232));
                                        return l3.value;
                                    })();
                                    (v231 = (function(){
                                        var tmp = v231;
                                        return tmp === l3.value? l3.value: tmp.cdr;
                                    })());
                                }return l3.value;
                            })();
                            return values(l3.value, l3.value);
                        })(l116.fvalue(pv, v228),l3.value);
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == 98)
                            return values.apply(this, forcemv(cf.values));
                        else
                            throw cf;
                    }
                })()));
            })();
        })();
    }));
    return l126;
})();
var l130 = {name: "INTERN"};
var l131 = {name: "EXPORT"};
(function(){
    (l130).fvalue = (function(v243){
        ((v243)["fname"] = "INTERN");
        return v243;
    })((function (values,v235,v236){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v236=(function(){
            var symbol = l123;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        default: break;
        }
        return (function(){
            return (function(v237){
                return (function(){
                    var func = (function (values,v239,v240){
                        switch(arguments.length-1){
                        case 0:
                        v239=l3.value;
                        case 1:
                        v240=l3.value;
                        default: break;
                        }
                        var v238= l3.value;
                        for (var i = arguments.length-1; i>=3; i--)
                            v238 = {car: arguments[i], cdr: 
                        v238};
                        return (v240 !== l3.value ? values(v239, v240) : (function(v241){
                            (function(){
                                var tmp = (v241)[v235];
                                return tmp == undefined? l3.value: tmp ;
                            })();
                            return (function(v242){
                                ((v242)["package"] = v237);
                                (((v237 === (function(){
                                    var symbol = l120;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })())?l4.value: l3.value) !== l3.value ? (function(){
                                    ((v242)["value"] = v242);
                                    return l131.fvalue(pv, l44.fvalue(pv, v242), v237);
                                })() : l3.value);
                                ((v241)[v235] = v242);
                                return values(v242, l3.value);
                            })((function(){
                                var name = v235;
                                if (typeof name != 'string')
                                    throw 'The value ' + name + ' is not a type string.';
                                return ({name: name});
                            })());
                        })(l115.fvalue(pv, v237)));
                    });
                    var args = [values];
                    return (function(){
                        var values = mv;
                        var vs;
                        vs = l126.fvalue(values, v235, v237);
                        if (typeof vs === 'object' && 'multiple-value' in vs)
                            args = args.concat(vs);
                        else
                            args.push(vs);
                        return func.apply(window, args);
                    })();
                })();
            })(l111.fvalue(pv, v236));
        })();
    }));
    return l130;
})();
(function(){
    (l122).fvalue = (function(v245){
        ((v245)["fname"] = "SYMBOL-PACKAGE");
        return v245;
    })((function (values,v244){
        checkArgs(arguments, 2);
        return (function(){
            (((function(){
                var tmp = v244;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?l4.value: l3.value) !== l3.value ? l3.value : (function(){
                throw "it is not a symbol";
            })());
            return (function(){
                var tmp = (v244)["package"];
                return tmp == undefined? l3.value: tmp ;
            })();
        })();
    }));
    return l122;
})();
(function(){
    (l131).fvalue = (function(v251){
        ((v251)["fname"] = "EXPORT");
        return v251;
    })((function (values,v246,v247){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v247=(function(){
            var symbol = l123;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        default: break;
        }
        return (function(){
            return (function(v248){
                return (function(){
                    return (function(v249,v250){
                        (function(){
                            while(v249 !== l3.value){
                                (v250 = (function(){
                                    var tmp = v249;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })());
                                (function(){
                                    ((v248)[(v250).name] = v250);
                                    return l3.value;
                                })();
                                (v249 = (function(){
                                    var tmp = v249;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                        return l4.value;
                    })(v246,l3.value);
                })();
            })(l117.fvalue(pv, v247));
        })();
    }));
    return l131;
})();
var l132 = {name: "GET-UNIVERSAL-TIME"};
(function(){
    (l132).fvalue = (function(v252){
        ((v252)["fname"] = "GET-UNIVERSAL-TIME");
        return v252;
    })((function (values){
        checkArgsAtMost(arguments, 1);
        return (function(){
            return (function(){
                var x1 = (Math.round(new Date() / 1000));
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = 2208988800;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
        })();
    }));
    return l132;
})();
var l133 = {name: "*NEWLINE*"};
(function(){
    (((l133.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l133).value = l98.fvalue(pv, l78.fvalue(pv, 10))));
    return l133;
})();
var l134 = {name: "CONCAT"};
(function(){
    (l134).fvalue = (function(v254){
        ((v254)["fname"] = "CONCAT");
        return v254;
    })((function (values){
        var v253= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v253 = {car: arguments[i], cdr: 
        v253};
        return (function(){
            return l60.fvalue(values, (function(){
                var symbol = l72;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), v253, "");
        })();
    }));
    return l134;
})();
var l135 = {name: "CONCATF"};
l135;
var l136 = {name: "JOIN"};
(function(){
    (l136).fvalue = (function(v257){
        ((v257)["fname"] = "JOIN");
        return v257;
    })((function (values,v255,v256){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v256="";
        default: break;
        }
        return (function(){
            return (l12.fvalue(pv, v255) !== l3.value ? "" : (l12.fvalue(pv, (function(){
                var tmp = v255;
                return tmp === l3.value? l3.value: tmp.cdr;
            })()) !== l3.value ? (function(){
                var tmp = v255;
                return tmp === l3.value? l3.value: tmp.car;
            })() : l134.fvalue(values, (function(){
                var tmp = v255;
                return tmp === l3.value? l3.value: tmp.car;
            })(), v256, l136.fvalue(pv, (function(){
                var tmp = v255;
                return tmp === l3.value? l3.value: tmp.cdr;
            })(), v256))));
        })();
    }));
    return l136;
})();
var l137 = {name: "JOIN-TRAILING"};
(function(){
    (l137).fvalue = (function(v260){
        ((v260)["fname"] = "JOIN-TRAILING");
        return v260;
    })((function (values,v258,v259){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v259="";
        default: break;
        }
        return (function(){
            return (l12.fvalue(pv, v258) !== l3.value ? "" : l134.fvalue(values, (function(){
                var tmp = v258;
                return tmp === l3.value? l3.value: tmp.car;
            })(), v259, l137.fvalue(pv, (function(){
                var tmp = v258;
                return tmp === l3.value? l3.value: tmp.cdr;
            })(), v259)));
        })();
    }));
    return l137;
})();
var l138 = {name: "MAPCONCAT"};
(function(){
    (l138).fvalue = (function(v263){
        ((v263)["fname"] = "MAPCONCAT");
        return v263;
    })((function (values,v261,v262){
        checkArgs(arguments, 3);
        return (function(){
            return l136.fvalue(values, l73.fvalue(pv, v261, v262));
        })();
    }));
    return l138;
})();
var l139 = {name: "VECTOR-TO-LIST"};
(function(){
    (l139).fvalue = (function(v269){
        ((v269)["fname"] = "VECTOR-TO-LIST");
        return v269;
    })((function (values,v264){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v265,v266){
                return (function(){
                    return (function(v267,v268){
                        (function(){
                            while((function(){
                                var x1 = v267;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v268;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return (x1<x2?l4.value: l3.value);
                            })() !== l3.value){
                                (function(){
                                    (v265 = ({car: (function(){
                                        var x = (v264)[v267];
                                        if (x === undefined) throw 'Out of range';
                                        return x;
                                    })(), cdr: v265}));
                                    return l3.value;
                                })();
                                (v267 = (function(){
                                    var x1 = v267;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = 1;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })());
                            }return l3.value;
                        })();
                        return l66.fvalue(values, v265);
                    })(0,v266);
                })();
            })(l3.value,l71.fvalue(pv, v264));
        })();
    }));
    return l139;
})();
var l140 = {name: "LIST-TO-VECTOR"};
(function(){
    (l140).fvalue = (function(v275){
        ((v275)["fname"] = "LIST-TO-VECTOR");
        return v275;
    })((function (values,v270){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v271,v272){
                return (function(){
                    return (function(v273,v274){
                        (function(){
                            while(v273 !== l3.value){
                                (v274 = (function(){
                                    var tmp = v273;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })());
                                (function(){
                                    (function(){
                                        var x = v271;
                                        var i = v272;
                                        if (i < 0 || i >= x.length) throw 'Out of range';
                                        return x[i] = v274;
                                    })();
                                    (v272 = (function(){
                                        var x1 = v272;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = 1;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return x1+x2;
                                    })());
                                    return l3.value;
                                })();
                                (v273 = (function(){
                                    var tmp = v273;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                        return v271;
                    })(v270,l3.value);
                })();
            })((function(){
                var r = [];
                for (var i = 0; i < l71.fvalue(pv, v270); i++)
                    r.push(l3.value);
                return r;
            })(),0);
        })();
    }));
    return l140;
})();
var l141 = {name: "VALUES-LIST"};
(function(){
    (l141).fvalue = (function(v277){
        ((v277)["fname"] = "VALUES-LIST");
        return v277;
    })((function (values,v276){
        checkArgs(arguments, 2);
        return (function(){
            return values.apply(this, l140.fvalue(pv, v276));
        })();
    }));
    return l141;
})();
var l142 = {name: "VALUES"};
(function(){
    (l142).fvalue = (function(v279){
        ((v279)["fname"] = "VALUES");
        return v279;
    })((function (values){
        var v278= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v278 = {car: arguments[i], cdr: 
        v278};
        return (function(){
            return l141.fvalue(values, v278);
        })();
    }));
    return l142;
})();
var l143 = {name: "INDENT"};
(function(){
    (l143).fvalue = (function(v286){
        ((v286)["fname"] = "INDENT");
        return v286;
    })((function (values){
        var v280= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v280 = {car: arguments[i], cdr: 
        v280};
        return (function(){
            return (function(v281){
                return (function(v282,v283,v284){
                    (l82.fvalue(pv, l71.fvalue(pv, v281)) !== l3.value ? (v282 = l134.fvalue(pv, v282, "    ")) : l3.value);
                    (function(){
                        return (function(){
                            while((function(){
                                var x1 = v283;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v284;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return (x1<x2?l4.value: l3.value);
                            })() !== l3.value){
                                (function(v285){
                                    return (v282 = l134.fvalue(pv, v282, v285));
                                })(((l80.fvalue(pv, (function(){
                                    var string = v281;
                                    var index = v283;
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    if (typeof index != 'number')
                                        throw 'The value ' + index + ' is not a type number.';
                                    return string.charCodeAt(index);
                                })(), 10) !== l3.value ? ((function(){
                                    var x1 = v283;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = l23.fvalue(pv, v284);
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return (x1<x2?l4.value: l3.value);
                                })() !== l3.value ? l27.fvalue(pv, l80.fvalue(pv, (function(){
                                    var string = v281;
                                    var index = l22.fvalue(pv, v283);
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    if (typeof index != 'number')
                                        throw 'The value ' + index + ' is not a type number.';
                                    return string.charCodeAt(index);
                                })(), 10)) : l3.value) : l3.value) !== l3.value ? l134.fvalue(pv, l98.fvalue(pv, 10), "    ") : l98.fvalue(pv, (function(){
                                    var string = v281;
                                    var index = v283;
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    if (typeof index != 'number')
                                        throw 'The value ' + index + ' is not a type number.';
                                    return string.charCodeAt(index);
                                })())));
                                (v283 = (function(){
                                    var x1 = v283;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = 1;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })());
                            }return l3.value;
                        })();
                    })();
                    return v282;
                })("",0,l71.fvalue(pv, v281));
            })(l136.fvalue(pv, v280));
        })();
    }));
    return l143;
})();
(function(){
    (l17).fvalue = (function(v290){
        ((v290)["fname"] = "INTEGER-TO-STRING");
        return v290;
    })((function (values,v287){
        checkArgs(arguments, 2);
        return (function(){
            return (l24.fvalue(pv, v287) !== l3.value ? "0" : (l83.fvalue(pv, v287) !== l3.value ? l134.fvalue(values, "-", l17.fvalue(pv, (function(){
                var x1 = 0;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v287;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1-x2;
            })())) : (function(v288){
                (function(){
                    return (function(){
                        while(l27.fvalue(pv, l24.fvalue(pv, v287)) !== l3.value){
                            (v288 = ({car: (function(){
                                var x = v287;
                                var y = 10;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x%y;
                            })(), cdr: v288}));
                            (v287 = l25.fvalue(pv, v287, 10));
                        }return l3.value;
                    })();
                })();
                return l138.fvalue(values, (function (values,v289){
                    checkArgs(arguments, 2);
                    return l98.fvalue(values, l93.fvalue(pv, v289));
                }), v288);
            })(l3.value)));
        })();
    }));
    return l17;
})();
var l144 = {name: "JS!BOOL"};
var l145 = {name: "LS-COMPILE"};
(function(){
    (l144).fvalue = (function(v292){
        ((v292)["fname"] = "JS!BOOL");
        return v292;
    })((function (values,v291){
        checkArgs(arguments, 2);
        return (function(){
            return l134.fvalue(values, "(", v291, "?", l145.fvalue(pv, l4.value), ": ", l145.fvalue(pv, l3.value), ")");
        })();
    }));
    return l144;
})();
var l146 = {name: "JS!SELFCALL"};
l146;
var l147 = {name: "PRIN1-TO-STRING"};
var l148 = {name: "ESCAPE-STRING"};
(function(){
    (l147).fvalue = (function(v301){
        ((v301)["fname"] = "PRIN1-TO-STRING");
        return v301;
    })((function (values,v293){
        checkArgs(arguments, 2);
        return (function(){
            return (((function(){
                var tmp = v293;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?l4.value: l3.value) !== l3.value ? (function(){
                var func = (function (values,v295,v296){
                    switch(arguments.length-1){
                    case 0:
                    v295=l3.value;
                    case 1:
                    v296=l3.value;
                    default: break;
                    }
                    var v294= l3.value;
                    for (var i = arguments.length-1; i>=3; i--)
                        v294 = {car: arguments[i], cdr: 
                    v294};
                    return ((v296 !== l3.value ? ((v295 === v293)?l4.value: l3.value) : l3.value) !== l3.value ? (v293).name : (function(v297,v298){
                        return l134.fvalue(values, (l12.fvalue(pv, v297) !== l3.value ? "#" : (((v297 === l113.fvalue(pv, "KEYWORD"))?l4.value: l3.value) !== l3.value ? "" : l114.fvalue(pv, v297))), ":", v298);
                    })(l122.fvalue(pv, v293),(v293).name));
                });
                var args = [values];
                return (function(){
                    var values = mv;
                    var vs;
                    vs = l126.fvalue(values, (v293).name, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                    if (typeof vs === 'object' && 'multiple-value' in vs)
                        args = args.concat(vs);
                    else
                        args.push(vs);
                    return func.apply(window, args);
                })();
            })() : (l81.fvalue(pv, v293) !== l3.value ? l17.fvalue(values, v293) : (((typeof(v293) == "string")?l4.value: l3.value) !== l3.value ? l134.fvalue(values, "\"", l148.fvalue(pv, v293), "\"") : (((typeof v293 == 'function')?l4.value: l3.value) !== l3.value ? (function(v299){
                return (v299 !== l3.value ? l134.fvalue(values, "#<FUNCTION ", v299, ">") : l134.fvalue(values, "#<FUNCTION>"));
            })((function(){
                var tmp = (v293)["fname"];
                return tmp == undefined? l3.value: tmp ;
            })()) : (l59.fvalue(pv, v293) !== l3.value ? l134.fvalue(values, "(", l137.fvalue(pv, l73.fvalue(pv, (function(){
                var symbol = l147;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), l87.fvalue(pv, v293)), " "), (function(v300){
                return (l12.fvalue(pv, (function(){
                    var tmp = v300;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })()) !== l3.value ? l147.fvalue(pv, (function(){
                    var tmp = v300;
                    return tmp === l3.value? l3.value: tmp.car;
                })()) : l134.fvalue(pv, l147.fvalue(pv, (function(){
                    var tmp = v300;
                    return tmp === l3.value? l3.value: tmp.car;
                })()), " . ", l147.fvalue(pv, (function(){
                    var tmp = v300;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })())));
            })(l86.fvalue(pv, v293)), ")") : (((function(){
                var x = v293;
                return typeof x === 'object' && 'length' in x;
            })()?l4.value: l3.value) !== l3.value ? l134.fvalue(values, "#", l147.fvalue(pv, l139.fvalue(pv, v293))) : (l112.fvalue(pv, v293) !== l3.value ? l134.fvalue(values, "#<PACKAGE ", l114.fvalue(pv, v293), ">") : l3.value)))))));
        })();
    }));
    return l147;
})();
(function(){
    (l102).fvalue = (function(v303){
        ((v303)["fname"] = "WRITE-LINE");
        return v303;
    })((function (values,v302){
        checkArgs(arguments, 2);
        return (function(){
            (function(){
                var x = v302;
                if (typeof x != 'string')
                    throw 'The value ' + x + ' is not a type string.';
                return lisp.write(x);
            })();
            (function(){
                var x = (function(){
                    var symbol = l133;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })();
                if (typeof x != 'string')
                    throw 'The value ' + x + ' is not a type string.';
                return lisp.write(x);
            })();
            return v302;
        })();
    }));
    return l102;
})();
var l149 = {name: "WARN"};
(function(){
    (l149).fvalue = (function(v305){
        ((v305)["fname"] = "WARN");
        return v305;
    })((function (values,v304){
        checkArgs(arguments, 2);
        return (function(){
            (function(){
                var x = "WARNING: ";
                if (typeof x != 'string')
                    throw 'The value ' + x + ' is not a type string.';
                return lisp.write(x);
            })();
            return l102.fvalue(values, v304);
        })();
    }));
    return l149;
})();
var l150 = {name: "PRINT"};
(function(){
    (l150).fvalue = (function(v307){
        ((v307)["fname"] = "PRINT");
        return v307;
    })((function (values,v306){
        checkArgs(arguments, 2);
        return (function(){
            l102.fvalue(pv, l147.fvalue(pv, v306));
            return v306;
        })();
    }));
    return l150;
})();
var l151 = {name: "MAKE-STRING-STREAM"};
(function(){
    (l151).fvalue = (function(v309){
        ((v309)["fname"] = "MAKE-STRING-STREAM");
        return v309;
    })((function (values,v308){
        checkArgs(arguments, 2);
        return (function(){
            return ({car: v308, cdr: 0});
        })();
    }));
    return l151;
})();
var l152 = {name: "%PEEK-CHAR"};
(function(){
    (l152).fvalue = (function(v311){
        ((v311)["fname"] = "%PEEK-CHAR");
        return v311;
    })((function (values,v310){
        checkArgs(arguments, 2);
        return (function(){
            return ((function(){
                var x1 = (function(){
                    var tmp = v310;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = l71.fvalue(pv, (function(){
                    var tmp = v310;
                    return tmp === l3.value? l3.value: tmp.car;
                })());
                if (typeof x2 !== 'number') throw 'Not a number!';
                return (x1<x2?l4.value: l3.value);
            })() !== l3.value ? (function(){
                var string = (function(){
                    var tmp = v310;
                    return tmp === l3.value? l3.value: tmp.car;
                })();
                var index = (function(){
                    var tmp = v310;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })();
                if (typeof string != 'string')
                    throw 'The value ' + string + ' is not a type string.';
                if (typeof index != 'number')
                    throw 'The value ' + index + ' is not a type number.';
                return string.charCodeAt(index);
            })() : l3.value);
        })();
    }));
    return l152;
})();
var l153 = {name: "%READ-CHAR"};
(function(){
    (l153).fvalue = (function(v314){
        ((v314)["fname"] = "%READ-CHAR");
        return v314;
    })((function (values,v312){
        checkArgs(arguments, 2);
        return (function(){
            return ((function(){
                var x1 = (function(){
                    var tmp = v312;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = l71.fvalue(pv, (function(){
                    var tmp = v312;
                    return tmp === l3.value? l3.value: tmp.car;
                })());
                if (typeof x2 !== 'number') throw 'Not a number!';
                return (x1<x2?l4.value: l3.value);
            })() !== l3.value ? (function(v313){
                (function(){
                    var x = v312;
                    if (typeof x != 'object')
                        throw 'The value ' + x + ' is not a type object.';
                    return (x.cdr = l22.fvalue(pv, (function(){
                        var tmp = v312;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()), x);
                })();
                return v313;
            })((function(){
                var string = (function(){
                    var tmp = v312;
                    return tmp === l3.value? l3.value: tmp.car;
                })();
                var index = (function(){
                    var tmp = v312;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })();
                if (typeof string != 'string')
                    throw 'The value ' + string + ' is not a type string.';
                if (typeof index != 'number')
                    throw 'The value ' + index + ' is not a type number.';
                return string.charCodeAt(index);
            })()) : l3.value);
        })();
    }));
    return l153;
})();
var l154 = {name: "WHITESPACEP"};
(function(){
    (l154).fvalue = (function(v318){
        ((v318)["fname"] = "WHITESPACEP");
        return v318;
    })((function (values,v315){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v316){
                return (v316 !== l3.value ? v316 : (function(v317){
                    return (v317 !== l3.value ? v317 : l80.fvalue(values, v315, 9));
                })(l80.fvalue(pv, v315, 10)));
            })(l80.fvalue(pv, v315, 32));
        })();
    }));
    return l154;
})();
var l155 = {name: "SKIP-WHITESPACES"};
(function(){
    (l155).fvalue = (function(v321){
        ((v321)["fname"] = "SKIP-WHITESPACES");
        return v321;
    })((function (values,v319){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v320){
                (v320 = l152.fvalue(pv, v319));
                return (function(){
                    return (function(){
                        while((v320 !== l3.value ? l154.fvalue(pv, v320) : l3.value) !== l3.value){
                            l153.fvalue(pv, v319);
                            (v320 = l152.fvalue(pv, v319));
                        }return l3.value;
                    })();
                })();
            })(l3.value);
        })();
    }));
    return l155;
})();
var l156 = {name: "TERMINALP"};
(function(){
    (l156).fvalue = (function(v326){
        ((v326)["fname"] = "TERMINALP");
        return v326;
    })((function (values,v322){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v323){
                return (v323 !== l3.value ? v323 : (function(v324){
                    return (v324 !== l3.value ? v324 : (function(v325){
                        return (v325 !== l3.value ? v325 : l80.fvalue(values, 40, v322));
                    })(l80.fvalue(pv, 41, v322)));
                })(l154.fvalue(pv, v322)));
            })(l12.fvalue(pv, v322));
        })();
    }));
    return l156;
})();
var l157 = {name: "READ-UNTIL"};
(function(){
    (l157).fvalue = (function(v331){
        ((v331)["fname"] = "READ-UNTIL");
        return v331;
    })((function (values,v327,v328){
        checkArgs(arguments, 3);
        return (function(){
            return (function(v329,v330){
                (v330 = l152.fvalue(pv, v327));
                (function(){
                    return (function(){
                        while((v330 !== l3.value ? l27.fvalue(pv, (v328)(pv, v330)) : l3.value) !== l3.value){
                            (v329 = l134.fvalue(pv, v329, l98.fvalue(pv, v330)));
                            l153.fvalue(pv, v327);
                            (v330 = l152.fvalue(pv, v327));
                        }return l3.value;
                    })();
                })();
                return v329;
            })("",l3.value);
        })();
    }));
    return l157;
})();
var l158 = {name: "SKIP-WHITESPACES-AND-COMMENTS"};
(function(){
    (l158).fvalue = (function(v335){
        ((v335)["fname"] = "SKIP-WHITESPACES-AND-COMMENTS");
        return v335;
    })((function (values,v332){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v333){
                l155.fvalue(pv, v332);
                (v333 = l152.fvalue(pv, v332));
                return (function(){
                    return (function(){
                        while((v333 !== l3.value ? l80.fvalue(pv, v333, 59) : l3.value) !== l3.value){
                            l157.fvalue(pv, v332, (function (values,v334){
                                checkArgs(arguments, 2);
                                return l80.fvalue(values, v334, 10);
                            }));
                            l155.fvalue(pv, v332);
                            (v333 = l152.fvalue(pv, v332));
                        }return l3.value;
                    })();
                })();
            })(l3.value);
        })();
    }));
    return l158;
})();
var l159 = {name: "%READ-LIST"};
var l160 = {name: "LS-READ"};
(function(){
    (l159).fvalue = (function(v339){
        ((v339)["fname"] = "%READ-LIST");
        return v339;
    })((function (values,v336){
        checkArgs(arguments, 2);
        return (function(){
            l158.fvalue(pv, v336);
            return (function(v337){
                return (l12.fvalue(pv, v337) !== l3.value ? (function(){
                    throw "Unspected EOF";
                })() : (l80.fvalue(pv, v337, 41) !== l3.value ? (function(){
                    l153.fvalue(pv, v336);
                    return l3.value;
                })() : (l80.fvalue(pv, v337, 46) !== l3.value ? (function(){
                    l153.fvalue(pv, v336);
                    return (function(v338){
                        l158.fvalue(pv, v336);
                        (l80.fvalue(pv, l153.fvalue(pv, v336), 41) !== l3.value ? l3.value : (function(){
                            throw "')' was expected.";
                        })());
                        return v338;
                    })(l160.fvalue(pv, v336));
                })() : ({car: l160.fvalue(pv, v336), cdr: l159.fvalue(pv, v336)}))));
            })(l152.fvalue(pv, v336));
        })();
    }));
    return l159;
})();
var l161 = {name: "READ-STRING"};
(function(){
    (l161).fvalue = (function(v343){
        ((v343)["fname"] = "READ-STRING");
        return v343;
    })((function (values,v340){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v341,v342){
                (v342 = l153.fvalue(pv, v340));
                (function(){
                    return (function(){
                        while(l27.fvalue(pv, l26.fvalue(pv, v342, 34)) !== l3.value){
                            (l12.fvalue(pv, v342) !== l3.value ? (function(){
                                throw "Unexpected EOF";
                            })() : l3.value);
                            (l26.fvalue(pv, v342, 92) !== l3.value ? (v342 = l153.fvalue(pv, v340)) : l3.value);
                            (v341 = l134.fvalue(pv, v341, l98.fvalue(pv, v342)));
                            (v342 = l153.fvalue(pv, v340));
                        }return l3.value;
                    })();
                })();
                return v341;
            })("",l3.value);
        })();
    }));
    return l161;
})();
var l162 = {name: "READ-SHARP"};
(function(){
    (l162).fvalue = (function(v348){
        ((v348)["fname"] = "READ-SHARP");
        return v348;
    })((function (values,v344){
        checkArgs(arguments, 2);
        return (function(){
            l153.fvalue(pv, v344);
            return (function(v345){
                return (l26.fvalue(pv, v345, 39) !== l3.value ? l44.fvalue(values, l104, l160.fvalue(pv, v344)) : (l26.fvalue(pv, v345, 40) !== l3.value ? l140.fvalue(values, l159.fvalue(pv, v344)) : (l26.fvalue(pv, v345, 58) !== l3.value ? (function(){
                    var name = (function(){
                        var x = l157.fvalue(pv, v344, (function(){
                            var symbol = l156;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })());
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return x.toUpperCase();
                    })();
                    if (typeof name != 'string')
                        throw 'The value ' + name + ' is not a type string.';
                    return ({name: name});
                })() : (l26.fvalue(pv, v345, 92) !== l3.value ? (function(v346){
                    return (l99.fvalue(pv, v346, "space") !== l3.value ? l79.fvalue(values, 32) : (l99.fvalue(pv, v346, "tab") !== l3.value ? l79.fvalue(values, 9) : (l99.fvalue(pv, v346, "newline") !== l3.value ? l79.fvalue(values, 10) : l79.fvalue(values, (function(){
                        var string = v346;
                        var index = 0;
                        if (typeof string != 'string')
                            throw 'The value ' + string + ' is not a type string.';
                        if (typeof index != 'number')
                            throw 'The value ' + index + ' is not a type number.';
                        return string.charCodeAt(index);
                    })()))));
                })(l134.fvalue(pv, l98.fvalue(pv, l153.fvalue(pv, v344)), l157.fvalue(pv, v344, (function(){
                    var symbol = l156;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()))) : (l26.fvalue(pv, v345, 43) !== l3.value ? (function(v347){
                    return (l99.fvalue(pv, v347, "common-lisp") !== l3.value ? (function(){
                        l160.fvalue(pv, v344);
                        return l160.fvalue(values, v344);
                    })() : (l99.fvalue(pv, v347, "ecmalisp") !== l3.value ? l160.fvalue(values, v344) : (function(){
                        throw "Unknown reader form.";
                    })()));
                })(l157.fvalue(pv, v344, (function(){
                    var symbol = l156;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })())) : (function(){
                    throw "ECASE expression failed.";
                })())))));
            })(l153.fvalue(pv, v344));
        })();
    }));
    return l162;
})();
var l163 = {name: "READ-SYMBOL"};
(function(){
    (l163).fvalue = (function(v356){
        ((v356)["fname"] = "READ-SYMBOL");
        return v356;
    })((function (values,v349){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v350,v351,v352,v353,v354){
                (v354 = 0);
                (function(){
                    return (function(){
                        while(((function(){
                            var x1 = v354;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = v350;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return (x1<x2?l4.value: l3.value);
                        })() !== l3.value ? l27.fvalue(pv, l80.fvalue(pv, (function(){
                            var string = v349;
                            var index = v354;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            if (typeof index != 'number')
                                throw 'The value ' + index + ' is not a type number.';
                            return string.charCodeAt(index);
                        })(), 58)) : l3.value) !== l3.value){
                            (v354 = (function(){
                                var x1 = v354;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = 1;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })());
                        }return l3.value;
                    })();
                })();
                ((function(){
                    var x1 = v354;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v350;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return (x1==x2?l4.value: l3.value);
                })() !== l3.value ? (function(){
                    (v352 = v349);
                    (v351 = (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                    return (v353 = l4.value);
                })() : (function(){
                    (l24.fvalue(pv, v354) !== l3.value ? (v351 = "KEYWORD") : (v351 = (function(){
                        var x = l94.fvalue(pv, v349, 0, v354);
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return x.toUpperCase();
                    })()));
                    (v354 = (function(){
                        var x1 = v354;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = 1;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })());
                    (l80.fvalue(pv, (function(){
                        var string = v349;
                        var index = v354;
                        if (typeof string != 'string')
                            throw 'The value ' + string + ' is not a type string.';
                        if (typeof index != 'number')
                            throw 'The value ' + index + ' is not a type number.';
                        return string.charCodeAt(index);
                    })(), 58) !== l3.value ? (function(){
                        (v353 = l4.value);
                        return (v354 = (function(){
                            var x1 = v354;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = 1;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return x1+x2;
                        })());
                    })() : l3.value);
                    return (v352 = l94.fvalue(pv, v349, v354));
                })());
                (v352 = (function(){
                    var x = v352;
                    if (typeof x != 'string')
                        throw 'The value ' + x + ' is not a type string.';
                    return x.toUpperCase();
                })());
                (v351 = l113.fvalue(pv, v351));
                return ((function(v355){
                    return (v355 !== l3.value ? v355 : ((v351 === l113.fvalue(pv, "KEYWORD"))?l4.value: l3.value));
                })(v353) !== l3.value ? l130.fvalue(values, v352, v351) : l126.fvalue(values, v352, v351));
            })(l71.fvalue(pv, v349),l3.value,l3.value,l3.value,l3.value);
        })();
    }));
    return l163;
})();
var l164 = {name: "!PARSE-INTEGER"};
(function(){
    (l164).fvalue = (function(v367){
        ((v367)["fname"] = "!PARSE-INTEGER");
        return v367;
    })((function (values,v357,v358){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                try {
                    return (function(v359,v360,v361,v362){
                        (l24.fvalue(pv, v361) !== l3.value ? (function(){
                            var values = mv;
                            throw ({type: 'block', id: 141, values: values(l3.value, 0), message: 'Return from unknown block NIL.'})
                        })() : l3.value);
                        (function(v363){
                            return (l26.fvalue(pv, v363, 43) !== l3.value ? (v360 = (function(){
                                var x1 = v360;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = 1;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })()) : (l26.fvalue(pv, v363, 45) !== l3.value ? (function(){
                                (v362 = -1);
                                return (v360 = (function(){
                                    var x1 = v360;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = 1;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })());
                            })() : l3.value));
                        })((function(){
                            var string = v357;
                            var index = 0;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            if (typeof index != 'number')
                                throw 'The value ' + index + ' is not a type number.';
                            return string.charCodeAt(index);
                        })());
                        (((function(){
                            var x1 = v360;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = v361;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return (x1<x2?l4.value: l3.value);
                        })() !== l3.value ? (v359 = l92.fvalue(pv, (function(){
                            var string = v357;
                            var index = v360;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            if (typeof index != 'number')
                                throw 'The value ' + index + ' is not a type number.';
                            return string.charCodeAt(index);
                        })())) : l3.value) !== l3.value ? l3.value : (function(){
                            var values = mv;
                            throw ({type: 'block', id: 141, values: values(l3.value, v360), message: 'Return from unknown block NIL.'})
                        })());
                        (v360 = (function(){
                            var x1 = v360;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = 1;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return x1+x2;
                        })());
                        (function(){
                            try {
                                return (function(){
                                    while((function(){
                                        var x1 = v360;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = v361;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return (x1<x2?l4.value: l3.value);
                                    })() !== l3.value){
                                        (function(v364){
                                            (v364 !== l3.value ? l3.value : (function(){
                                                throw ({type: 'block', id: 142, values: l3.value, message: 'Return from unknown block NIL.'})
                                            })());
                                            (v359 = (function(){
                                                var x1 = (function(){
                                                    var x1 = v359;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = 10;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1*x2;
                                                })();
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v364;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })());
                                            return (v360 = (function(){
                                                var x1 = v360;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = 1;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })());
                                        })(l92.fvalue(pv, (function(){
                                            var string = v357;
                                            var index = v360;
                                            if (typeof string != 'string')
                                                throw 'The value ' + string + ' is not a type string.';
                                            if (typeof index != 'number')
                                                throw 'The value ' + index + ' is not a type number.';
                                            return string.charCodeAt(index);
                                        })()));
                                    }return l3.value;
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 142)
                                    return cf.values;
                                else
                                    throw cf;
                            }
                        })();
                        return ((function(v365){
                            return (v365 !== l3.value ? v365 : (function(v366){
                                return (v366 !== l3.value ? v366 : l80.fvalue(pv, (function(){
                                    var string = v357;
                                    var index = v360;
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    if (typeof index != 'number')
                                        throw 'The value ' + index + ' is not a type number.';
                                    return string.charCodeAt(index);
                                })(), 32));
                            })((function(){
                                var x1 = v360;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v361;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return (x1==x2?l4.value: l3.value);
                            })()));
                        })(v358) !== l3.value ? values((function(){
                            var x1 = v362;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = v359;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return x1*x2;
                        })(), v360) : values(l3.value, v360));
                    })(0,0,l71.fvalue(pv, v357),1);
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 141)
                        return values.apply(this, forcemv(cf.values));
                    else
                        throw cf;
                }
            })();
        })();
    }));
    return l164;
})();
var l165 = {name: "PARSE-INTEGER"};
(function(){
    (l165).fvalue = (function(v369){
        ((v369)["fname"] = "PARSE-INTEGER");
        return v369;
    })((function (values,v368){
        checkArgs(arguments, 2);
        return (function(){
            return l164.fvalue(values, v368, l3.value);
        })();
    }));
    return l165;
})();
var l166 = {name: "*EOF*"};
(function(){
    (((l166.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l166).value = l16.fvalue(pv)));
    return l166;
})();
var l167 = {name: "QUOTE"};
var l168 = {name: "BACKQUOTE"};
var l169 = {name: "UNQUOTE-SPLICING"};
var l170 = {name: "UNQUOTE"};
(function(){
    (l160).fvalue = (function(v375){
        ((v375)["fname"] = "LS-READ");
        return v375;
    })((function (values,v370){
        checkArgs(arguments, 2);
        return (function(){
            l158.fvalue(pv, v370);
            return (function(v371){
                return ((function(v372){
                    return (v372 !== l3.value ? v372 : l80.fvalue(pv, v371, 41));
                })(l12.fvalue(pv, v371)) !== l3.value ? (function(){
                    var symbol = l166;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() : (l80.fvalue(pv, v371, 40) !== l3.value ? (function(){
                    l153.fvalue(pv, v370);
                    return l159.fvalue(values, v370);
                })() : (l80.fvalue(pv, v371, 39) !== l3.value ? (function(){
                    l153.fvalue(pv, v370);
                    return l44.fvalue(values, l167, l160.fvalue(pv, v370));
                })() : (l80.fvalue(pv, v371, 96) !== l3.value ? (function(){
                    l153.fvalue(pv, v370);
                    return l44.fvalue(values, l168, l160.fvalue(pv, v370));
                })() : (l80.fvalue(pv, v371, 34) !== l3.value ? (function(){
                    l153.fvalue(pv, v370);
                    return l161.fvalue(values, v370);
                })() : (l80.fvalue(pv, v371, 44) !== l3.value ? (function(){
                    l153.fvalue(pv, v370);
                    return (l26.fvalue(pv, l152.fvalue(pv, v370), 64) !== l3.value ? (function(){
                        l153.fvalue(pv, v370);
                        return l44.fvalue(values, l169, l160.fvalue(pv, v370));
                    })() : l44.fvalue(values, l170, l160.fvalue(pv, v370)));
                })() : (l80.fvalue(pv, v371, 35) !== l3.value ? l162.fvalue(values, v370) : (function(v373){
                    return (function(v374){
                        return (v374 !== l3.value ? v374 : l163.fvalue(values, v373));
                    })(pv(l164.fvalue(pv, v373, l3.value)));
                })(l157.fvalue(pv, v370, (function(){
                    var symbol = l156;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })())))))))));
            })(l152.fvalue(pv, v370));
        })();
    }));
    return l160;
})();
var l171 = {name: "LS-READ-FROM-STRING"};
(function(){
    (l171).fvalue = (function(v377){
        ((v377)["fname"] = "LS-READ-FROM-STRING");
        return v377;
    })((function (values,v376){
        checkArgs(arguments, 2);
        return (function(){
            return l160.fvalue(values, l151.fvalue(pv, v376));
        })();
    }));
    return l171;
})();
var l172 = {name: "*MULTIPLE-VALUE-P*"};
(function(){
    (((l172.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l172).value = l3.value));
    return l172;
})();
var l173 = {name: "MAKE-BINDING"};
(function(){
    (l173).fvalue = (function(v382){
        ((v382)["fname"] = "MAKE-BINDING");
        return v382;
    })((function (values,v378,v379,v380,v381){
        checkArgsAtLeast(arguments, 4);
        checkArgsAtMost(arguments, 5);
        switch(arguments.length-1){
        case 3:
        v381=l3.value;
        default: break;
        }
        return (function(){
            return l44.fvalue(values, v378, v379, v380, v381);
        })();
    }));
    return l173;
})();
var l174 = {name: "BINDING-NAME"};
(function(){
    (l174).fvalue = (function(v384){
        ((v384)["fname"] = "BINDING-NAME");
        return v384;
    })((function (values,v383){
        checkArgs(arguments, 2);
        return (function(){
            return l39.fvalue(values, v383);
        })();
    }));
    return l174;
})();
var l175 = {name: "BINDING-TYPE"};
(function(){
    (l175).fvalue = (function(v386){
        ((v386)["fname"] = "BINDING-TYPE");
        return v386;
    })((function (values,v385){
        checkArgs(arguments, 2);
        return (function(){
            return l40.fvalue(values, v385);
        })();
    }));
    return l175;
})();
var l176 = {name: "BINDING-VALUE"};
(function(){
    (l176).fvalue = (function(v388){
        ((v388)["fname"] = "BINDING-VALUE");
        return v388;
    })((function (values,v387){
        checkArgs(arguments, 2);
        return (function(){
            return l41.fvalue(values, v387);
        })();
    }));
    return l176;
})();
var l177 = {name: "BINDING-DECLARATIONS"};
(function(){
    (l177).fvalue = (function(v390){
        ((v390)["fname"] = "BINDING-DECLARATIONS");
        return v390;
    })((function (values,v389){
        checkArgs(arguments, 2);
        return (function(){
            return l42.fvalue(values, v389);
        })();
    }));
    return l177;
})();
var l178 = {name: "SET-BINDING-VALUE"};
(function(){
    (l178).fvalue = (function(v393){
        ((v393)["fname"] = "SET-BINDING-VALUE");
        return v393;
    })((function (values,v391,v392){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                var x = l35.fvalue(pv, v391);
                if (typeof x != 'object')
                    throw 'The value ' + x + ' is not a type object.';
                return (x.car = v392, x);
            })();
        })();
    }));
    return l178;
})();
var l179 = {name: "SET-BINDING-DECLARATIONS"};
(function(){
    (l179).fvalue = (function(v396){
        ((v396)["fname"] = "SET-BINDING-DECLARATIONS");
        return v396;
    })((function (values,v394,v395){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                var x = l37.fvalue(pv, v394);
                if (typeof x != 'object')
                    throw 'The value ' + x + ' is not a type object.';
                return (x.car = v395, x);
            })();
        })();
    }));
    return l179;
})();
var l180 = {name: "PUSH-BINDING-DECLARATION"};
(function(){
    (l180).fvalue = (function(v399){
        ((v399)["fname"] = "PUSH-BINDING-DECLARATION");
        return v399;
    })((function (values,v397,v398){
        checkArgs(arguments, 3);
        return (function(){
            return l179.fvalue(values, v398, ({car: v397, cdr: l177.fvalue(pv, v398)}));
        })();
    }));
    return l180;
})();
var l181 = {name: "MAKE-LEXENV"};
(function(){
    (l181).fvalue = (function(v400){
        ((v400)["fname"] = "MAKE-LEXENV");
        return v400;
    })((function (values){
        checkArgsAtMost(arguments, 1);
        return (function(){
            return l44.fvalue(values, l3.value, l3.value, l3.value, l3.value);
        })();
    }));
    return l181;
})();
var l182 = {name: "COPY-LEXENV"};
(function(){
    (l182).fvalue = (function(v402){
        ((v402)["fname"] = "COPY-LEXENV");
        return v402;
    })((function (values,v401){
        checkArgs(arguments, 2);
        return (function(){
            return l77.fvalue(values, v401);
        })();
    }));
    return l182;
})();
var l183 = {name: "PUSH-TO-LEXENV"};
var l184 = {name: "BLOCK"};
var l185 = {name: "GOTAG"};
(function(){
    (l183).fvalue = (function(v407){
        ((v407)["fname"] = "PUSH-TO-LEXENV");
        return v407;
    })((function (values,v403,v404,v405){
        checkArgs(arguments, 4);
        return (function(){
            return (function(v406){
                return (l26.fvalue(pv, v406, l105) !== l3.value ? (function(){
                    var x = v404;
                    if (typeof x != 'object')
                        throw 'The value ' + x + ' is not a type object.';
                    return (x.car = ({car: v403, cdr: (function(){
                        var tmp = v404;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()}), x);
                })() : (l26.fvalue(pv, v406, l104) !== l3.value ? (function(){
                    var x = (function(){
                        var tmp = v404;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })();
                    if (typeof x != 'object')
                        throw 'The value ' + x + ' is not a type object.';
                    return (x.car = ({car: v403, cdr: l33.fvalue(pv, v404)}), x);
                })() : (l26.fvalue(pv, v406, l184) !== l3.value ? (function(){
                    var x = l35.fvalue(pv, v404);
                    if (typeof x != 'object')
                        throw 'The value ' + x + ' is not a type object.';
                    return (x.car = ({car: v403, cdr: l36.fvalue(pv, v404)}), x);
                })() : (l26.fvalue(pv, v406, l185) !== l3.value ? (function(){
                    var x = l37.fvalue(pv, v404);
                    if (typeof x != 'object')
                        throw 'The value ' + x + ' is not a type object.';
                    return (x.car = ({car: v403, cdr: l38.fvalue(pv, v404)}), x);
                })() : (function(){
                    throw "ECASE expression failed.";
                })()))));
            })(v405);
        })();
    }));
    return l183;
})();
var l186 = {name: "EXTEND-LEXENV"};
(function(){
    (l186).fvalue = (function(v414){
        ((v414)["fname"] = "EXTEND-LEXENV");
        return v414;
    })((function (values,v408,v409,v410){
        checkArgs(arguments, 4);
        return (function(){
            return (function(v411){
                return (function(){
                    return (function(v412,v413){
                        (function(){
                            while(v412 !== l3.value){
                                (v413 = (function(){
                                    var tmp = v412;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })());
                                (function(){
                                    l183.fvalue(pv, v413, v411, v410);
                                    return l3.value;
                                })();
                                (v412 = (function(){
                                    var tmp = v412;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                        return v411;
                    })(l66.fvalue(pv, v408),l3.value);
                })();
            })(l182.fvalue(pv, v409));
        })();
    }));
    return l186;
})();
var l187 = {name: "LOOKUP-IN-LEXENV"};
(function(){
    (l187).fvalue = (function(v419){
        ((v419)["fname"] = "LOOKUP-IN-LEXENV");
        return v419;
    })((function (values,v415,v416,v417){
        checkArgs(arguments, 4);
        return (function(){
            return l97.fvalue(values, v415, (function(v418){
                return (l26.fvalue(pv, v418, l105) !== l3.value ? l39.fvalue(pv, v416) : (l26.fvalue(pv, v418, l104) !== l3.value ? l40.fvalue(pv, v416) : (l26.fvalue(pv, v418, l184) !== l3.value ? l41.fvalue(pv, v416) : (l26.fvalue(pv, v418, l185) !== l3.value ? l42.fvalue(pv, v416) : (function(){
                    throw "ECASE expression failed.";
                })()))));
            })(v417));
        })();
    }));
    return l187;
})();
var l188 = {name: "*ENVIRONMENT*"};
(function(){
    (((l188.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l188).value = l181.fvalue(pv)));
    return l188;
})();
var l189 = {name: "*VARIABLE-COUNTER*"};
(function(){
    (((l189.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l189).value = 0));
    return l189;
})();
var l190 = {name: "GVARNAME"};
(function(){
    (l190).fvalue = (function(v421){
        ((v421)["fname"] = "GVARNAME");
        return v421;
    })((function (values,v420){
        checkArgs(arguments, 2);
        return (function(){
            return l134.fvalue(values, "v", l17.fvalue(pv, ((l189).value = (function(){
                var x1 = (function(){
                    var symbol = l189;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = 1;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })())));
        })();
    }));
    return l190;
})();
var l191 = {name: "TRANSLATE-VARIABLE"};
(function(){
    (l191).fvalue = (function(v423){
        ((v423)["fname"] = "TRANSLATE-VARIABLE");
        return v423;
    })((function (values,v422){
        checkArgs(arguments, 2);
        return (function(){
            return l176.fvalue(values, l187.fvalue(pv, v422, (function(){
                var symbol = l188;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l105));
        })();
    }));
    return l191;
})();
var l192 = {name: "EXTEND-LOCAL-ENV"};
(function(){
    (l192).fvalue = (function(v429){
        ((v429)["fname"] = "EXTEND-LOCAL-ENV");
        return v429;
    })((function (values,v424){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v425){
                return (function(){
                    return (function(v426,v427){
                        (function(){
                            while(v426 !== l3.value){
                                (v427 = (function(){
                                    var tmp = v426;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })());
                                (function(){
                                    (function(v428){
                                        return l183.fvalue(pv, v428, v425, l105);
                                    })(l173.fvalue(pv, v427, l105, l190.fvalue(pv, v427)));
                                    return l3.value;
                                })();
                                (v426 = (function(){
                                    var tmp = v426;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                        return v425;
                    })(v424,l3.value);
                })();
            })(l182.fvalue(pv, (function(){
                var symbol = l188;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()));
        })();
    }));
    return l192;
})();
var l193 = {name: "*TOPLEVEL-COMPILATIONS*"};
(function(){
    (((l193.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l193).value = l3.value));
    return l193;
})();
var l194 = {name: "TOPLEVEL-COMPILATION"};
(function(){
    (l194).fvalue = (function(v431){
        ((v431)["fname"] = "TOPLEVEL-COMPILATION");
        return v431;
    })((function (values,v430){
        checkArgs(arguments, 2);
        return (function(){
            return ((l193).value = ({car: v430, cdr: (function(){
                var symbol = l193;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()}));
        })();
    }));
    return l194;
})();
var l195 = {name: "NULL-OR-EMPTY-P"};
(function(){
    (l195).fvalue = (function(v433){
        ((v433)["fname"] = "NULL-OR-EMPTY-P");
        return v433;
    })((function (values,v432){
        checkArgs(arguments, 2);
        return (function(){
            return l24.fvalue(values, l71.fvalue(pv, v432));
        })();
    }));
    return l195;
})();
var l196 = {name: "GET-TOPLEVEL-COMPILATIONS"};
(function(){
    (l196).fvalue = (function(v434){
        ((v434)["fname"] = "GET-TOPLEVEL-COMPILATIONS");
        return v434;
    })((function (values){
        checkArgsAtMost(arguments, 1);
        return (function(){
            return l66.fvalue(values, l90.fvalue(pv, (function(){
                var symbol = l195;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), (function(){
                var symbol = l193;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()));
        })();
    }));
    return l196;
})();
var l197 = {name: "%COMPILE-DEFMACRO"};
var l198 = {name: "MACRO"};
(function(){
    (l197).fvalue = (function(v437){
        ((v437)["fname"] = "%COMPILE-DEFMACRO");
        return v437;
    })((function (values,v435,v436){
        checkArgs(arguments, 3);
        return (function(){
            l194.fvalue(pv, l145.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l167), l44.fvalue(pv, v435))));
            l183.fvalue(pv, l173.fvalue(pv, v435, l198, v436), (function(){
                var symbol = l188;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l104);
            return v435;
        })();
    }));
    return l197;
})();
var l199 = {name: "GLOBAL-BINDING"};
(function(){
    (l199).fvalue = (function(v443){
        ((v443)["fname"] = "GLOBAL-BINDING");
        return v443;
    })((function (values,v438,v439,v440){
        checkArgs(arguments, 4);
        return (function(){
            return (function(v441){
                return (v441 !== l3.value ? v441 : (function(v442){
                    l183.fvalue(pv, v442, (function(){
                        var symbol = l188;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), v440);
                    return v442;
                })(l173.fvalue(pv, v438, v439, l3.value)));
            })(l187.fvalue(pv, v438, (function(){
                var symbol = l188;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), v440));
        })();
    }));
    return l199;
})();
var l200 = {name: "CLAIMP"};
(function(){
    (l200).fvalue = (function(v448){
        ((v448)["fname"] = "CLAIMP");
        return v448;
    })((function (values,v444,v445,v446){
        checkArgs(arguments, 4);
        return (function(){
            return (function(v447){
                return (v447 !== l3.value ? l88.fvalue(values, v446, l177.fvalue(pv, v447)) : l3.value);
            })(l187.fvalue(pv, v444, (function(){
                var symbol = l188;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), v445));
        })();
    }));
    return l200;
})();
var l201 = {name: "!PROCLAIM"};
var l202 = {name: "SPECIAL"};
var l203 = {name: "NOTINLINE"};
var l204 = {name: "CONSTANT"};
(function(){
    (l201).fvalue = (function(v460){
        ((v460)["fname"] = "!PROCLAIM");
        return v460;
    })((function (values,v449){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v450){
                return (l26.fvalue(pv, v450, l202) !== l3.value ? (function(){
                    return (function(v451,v452){
                        (function(){
                            while(v451 !== l3.value){
                                (v452 = (function(){
                                    var tmp = v451;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })());
                                (function(){
                                    (function(v453){
                                        return l180.fvalue(pv, l202, v453);
                                    })(l199.fvalue(pv, v452, l105, l105));
                                    return l3.value;
                                })();
                                (v451 = (function(){
                                    var tmp = v451;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                        return l3.value;
                    })((function(){
                        var tmp = v449;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })(),l3.value);
                })() : (l26.fvalue(pv, v450, l203) !== l3.value ? (function(){
                    return (function(v454,v455){
                        (function(){
                            while(v454 !== l3.value){
                                (v455 = (function(){
                                    var tmp = v454;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })());
                                (function(){
                                    (function(v456){
                                        return l180.fvalue(pv, l203, v456);
                                    })(l199.fvalue(pv, v455, l104, l104));
                                    return l3.value;
                                })();
                                (v454 = (function(){
                                    var tmp = v454;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                        return l3.value;
                    })((function(){
                        var tmp = v449;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })(),l3.value);
                })() : (l26.fvalue(pv, v450, l204) !== l3.value ? (function(){
                    return (function(v457,v458){
                        (function(){
                            while(v457 !== l3.value){
                                (v458 = (function(){
                                    var tmp = v457;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })());
                                (function(){
                                    (function(v459){
                                        return l180.fvalue(pv, l204, v459);
                                    })(l199.fvalue(pv, v458, l105, l105));
                                    return l3.value;
                                })();
                                (v457 = (function(){
                                    var tmp = v457;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                        return l3.value;
                    })((function(){
                        var tmp = v449;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })(),l3.value);
                })() : l3.value)));
            })((function(){
                var tmp = v449;
                return tmp === l3.value? l3.value: tmp.car;
            })());
        })();
    }));
    return l201;
})();
var l205 = {name: "PROCLAIM"};
(l205).fvalue = (function(){
    var symbol = l201;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})();
var l206 = {name: "*COMPILATIONS*"};
(function(){
    (((l206.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l206).value = l3.value));
    return l206;
})();
var l207 = {name: "DEFINE-COMPILATION"};
l207;
var l208 = {name: "IF"};
((l206).value = ({car: l44.fvalue(pv, l208, (function (values,v461,v462,v463){
    checkArgs(arguments, 4);
    return (function(){
        return l134.fvalue(values, "(", l145.fvalue(pv, v461), " !== ", l145.fvalue(pv, l3.value), " ? ", l145.fvalue(pv, v462, (function(){
            var symbol = l172;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()), " : ", l145.fvalue(pv, v463, (function(){
            var symbol = l172;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()), ")");
    })();
})), cdr: (function(){
    var symbol = l206;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l209 = {name: "*LAMBDA-LIST-KEYWORDS*"};
var l210 = {name: "&OPTIONAL"};
var l211 = {name: "&REST"};
var l212 = QIList(l210,l211,l3);
(function(){
    (((l209.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l209).value = l212));
    return l209;
})();
var l213 = {name: "LIST-UNTIL-KEYWORD"};
(function(){
    (l213).fvalue = (function(v466){
        ((v466)["fname"] = "LIST-UNTIL-KEYWORD");
        return v466;
    })((function (values,v464){
        checkArgs(arguments, 2);
        return (function(){
            return ((function(v465){
                return (v465 !== l3.value ? v465 : l88.fvalue(pv, (function(){
                    var tmp = v464;
                    return tmp === l3.value? l3.value: tmp.car;
                })(), (function(){
                    var symbol = l209;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()));
            })(l12.fvalue(pv, v464)) !== l3.value ? l3.value : ({car: (function(){
                var tmp = v464;
                return tmp === l3.value? l3.value: tmp.car;
            })(), cdr: l213.fvalue(pv, (function(){
                var tmp = v464;
                return tmp === l3.value? l3.value: tmp.cdr;
            })())}));
        })();
    }));
    return l213;
})();
var l214 = {name: "LAMBDA-LIST-REQUIRED-ARGUMENTS"};
(function(){
    (l214).fvalue = (function(v468){
        ((v468)["fname"] = "LAMBDA-LIST-REQUIRED-ARGUMENTS");
        return v468;
    })((function (values,v467){
        checkArgs(arguments, 2);
        return (function(){
            return l213.fvalue(values, v467);
        })();
    }));
    return l214;
})();
var l215 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"};
(function(){
    (l215).fvalue = (function(v470){
        ((v470)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
        return v470;
    })((function (values,v469){
        checkArgs(arguments, 2);
        return (function(){
            return l73.fvalue(values, (function(){
                var symbol = l58;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), l213.fvalue(pv, (function(){
                var tmp = l88.fvalue(pv, l210, v469);
                return tmp === l3.value? l3.value: tmp.cdr;
            })()));
        })();
    }));
    return l215;
})();
var l216 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS"};
(function(){
    (l216).fvalue = (function(v472){
        ((v472)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS");
        return v472;
    })((function (values,v471){
        checkArgs(arguments, 2);
        return (function(){
            return l73.fvalue(values, (function(){
                var symbol = l30;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), l215.fvalue(pv, v471));
        })();
    }));
    return l216;
})();
var l217 = {name: "LAMBDA-LIST-REST-ARGUMENT"};
(function(){
    (l217).fvalue = (function(v475){
        ((v475)["fname"] = "LAMBDA-LIST-REST-ARGUMENT");
        return v475;
    })((function (values,v473){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v474){
                ((function(){
                    var tmp = v474;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })() !== l3.value ? (function(){
                    throw "Bad lambda-list";
                })() : l3.value);
                return (function(){
                    var tmp = v474;
                    return tmp === l3.value? l3.value: tmp.car;
                })();
            })(l213.fvalue(pv, (function(){
                var tmp = l88.fvalue(pv, l211, v473);
                return tmp === l3.value? l3.value: tmp.cdr;
            })()));
        })();
    }));
    return l217;
})();
var l218 = {name: "LAMBDA-DOCSTRING-WRAPPER"};
(function(){
    (l218).fvalue = (function(v478){
        ((v478)["fname"] = "LAMBDA-DOCSTRING-WRAPPER");
        return v478;
    })((function (values,v477){
        checkArgsAtLeast(arguments, 2);
        var v476= l3.value;
        for (var i = arguments.length-1; i>=2; i--)
            v476 = {car: arguments[i], cdr: 
        v476};
        return (function(){
            return (v477 !== l3.value ? l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "var func = ", l136.fvalue(pv, v476), ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "func.docstring = '", v477, "';", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return func;", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()") : l136.fvalue(values, v476));
        })();
    }));
    return l218;
})();
var l219 = {name: "LAMBDA-CHECK-ARGUMENT-COUNT"};
var l220 = {name: "N/A"};
(function(){
    (l219).fvalue = (function(v484){
        ((v484)["fname"] = "LAMBDA-CHECK-ARGUMENT-COUNT");
        return v484;
    })((function (values,v479,v480,v481){
        checkArgs(arguments, 4);
        return (function(){
            return (function(v482,v483){
                return (function(){
                    try {
                        (((function(){
                            var x1 = 1;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = v482;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return (x1<x2?l4.value: l3.value);
                        })() !== l3.value ? l26.fvalue(pv, v482, v483) : l3.value) !== l3.value ? (function(){
                            var values = mv;
                            throw ({type: 'block', id: 182, values: l134.fvalue(values, "checkArgs(arguments, ", l17.fvalue(pv, v482), ");", (function(){
                                var symbol = l133;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), message: 'Return from unknown block NIL.'})
                        })() : l3.value);
                        return l134.fvalue(values, ((function(){
                            var x1 = 1;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = v482;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return (x1<x2?l4.value: l3.value);
                        })() !== l3.value ? l134.fvalue(pv, "checkArgsAtLeast(arguments, ", l17.fvalue(pv, v482), ");", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()) : ""), (((typeof (v483) == "number")?l4.value: l3.value) !== l3.value ? l134.fvalue(pv, "checkArgsAtMost(arguments, ", l17.fvalue(pv, v483), ");", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()) : ""));
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == 182)
                            return values.apply(this, forcemv(cf.values));
                        else
                            throw cf;
                    }
                })();
            })(l22.fvalue(pv, v479),(v481 !== l3.value ? l220 : (function(){
                var x1 = 1;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v479;
                if (typeof x2 !== 'number') throw 'Not a number!';
                var x3 = v480;
                if (typeof x3 !== 'number') throw 'Not a number!';
                return x1+x2+x3;
            })()));
        })();
    }));
    return l219;
})();
var l221 = {name: "COMPILE-LAMBDA"};
var l222 = {name: "LS-COMPILE-BLOCK"};
(function(){
    (l221).fvalue = (function(v500){
        ((v500)["fname"] = "COMPILE-LAMBDA");
        return v500;
    })((function (values,v485,v486){
        checkArgs(arguments, 3);
        return (function(){
            return (function(v487,v488,v489,v490){
                ((((typeof((function(){
                    var tmp = v486;
                    return tmp === l3.value? l3.value: tmp.car;
                })()) == "string")?l4.value: l3.value) !== l3.value ? l27.fvalue(pv, l12.fvalue(pv, (function(){
                    var tmp = v486;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })())) : l3.value) !== l3.value ? (function(){
                    (v490 = (function(){
                        var tmp = v486;
                        return tmp === l3.value? l3.value: tmp.car;
                    })());
                    return (v486 = (function(){
                        var tmp = v486;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })());
                })() : l3.value);
                return (function(v491,v492,v493){
                    try {
                        var tmp;
                        tmp = l188.value;
                        l188.value = v493;
                        v493 = tmp;
                        return l218.fvalue(values, v490, "(function (", l136.fvalue(pv, ({car: "values", cdr: l73.fvalue(pv, (function(){
                            var symbol = l191;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l64.fvalue(pv, v487, v488))}), ","), "){", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l143.fvalue(pv, l219.fvalue(pv, v491, v492, v489), (v488 !== l3.value ? l134.fvalue(pv, "switch(arguments.length-1){", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(v494,v495,v496){
                            return (function(){
                                (function(){
                                    return (function(){
                                        while((function(){
                                            var x1 = v496;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v492;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return (x1<x2?l4.value: l3.value);
                                        })() !== l3.value){
                                            (function(v497){
                                                (v495 = ({car: l134.fvalue(pv, "case ", l17.fvalue(pv, (function(){
                                                    var x1 = v496;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = v491;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1+x2;
                                                })()), ":", (function(){
                                                    var symbol = l133;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })(), l191.fvalue(pv, (function(){
                                                    var tmp = v497;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })()), "=", l145.fvalue(pv, l33.fvalue(pv, v497)), ";", (function(){
                                                    var symbol = l133;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })()), cdr: v495}));
                                                return (v496 = (function(){
                                                    var x1 = v496;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = 1;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1+x2;
                                                })());
                                            })(l85.fvalue(pv, v496, v494));
                                        }return l3.value;
                                    })();
                                })();
                                (v495 = ({car: l134.fvalue(pv, "default: break;", (function(){
                                    var symbol = l133;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()), cdr: v495}));
                                return l136.fvalue(pv, l66.fvalue(pv, v495));
                            })();
                        })(l215.fvalue(pv, v485),l3.value,0), "}", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()) : ""), (v489 !== l3.value ? (function(v498){
                            return l134.fvalue(pv, "var ", v498, "= ", l145.fvalue(pv, l3.value), ";", (function(){
                                var symbol = l133;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "for (var i = arguments.length-1; i>=", l17.fvalue(pv, (function(){
                                var x1 = 1;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v491;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                var x3 = v492;
                                if (typeof x3 !== 'number') throw 'Not a number!';
                                return x1+x2+x3;
                            })()), "; i--)", (function(){
                                var symbol = l133;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l143.fvalue(pv, v498, " = ", "{car: arguments[i], cdr: "), v498, "};", (function(){
                                var symbol = l133;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })(l191.fvalue(pv, v489)) : ""), (function(v499){
                            try {
                                var tmp;
                                tmp = l172.value;
                                l172.value = v499;
                                v499 = tmp;
                                return l222.fvalue(pv, v486, l4.value);
                            }
                            finally {
                                l172.value = v499;
                            }
                        })(l4.value)), "})");
                    }
                    finally {
                        l188.value = v493;
                    }
                })(l71.fvalue(pv, v487),l71.fvalue(pv, v488),l192.fvalue(pv, l64.fvalue(pv, l58.fvalue(pv, v489), v487, v488)));
            })(l214.fvalue(pv, v485),l216.fvalue(pv, v485),l217.fvalue(pv, v485),l3.value);
        })();
    }));
    return l221;
})();
var l223 = {name: "SETQ-PAIR"};
var l224 = {name: "SET"};
(function(){
    (l223).fvalue = (function(v504){
        ((v504)["fname"] = "SETQ-PAIR");
        return v504;
    })((function (values,v501,v502){
        checkArgs(arguments, 3);
        return (function(){
            return (function(v503){
                return ((((l175.fvalue(pv, v503) === l105)?l4.value: l3.value) !== l3.value ? (l27.fvalue(pv, l88.fvalue(pv, l202, l177.fvalue(pv, v503))) !== l3.value ? l27.fvalue(pv, l88.fvalue(pv, l204, l177.fvalue(pv, v503))) : l3.value) : l3.value) !== l3.value ? l134.fvalue(values, l176.fvalue(pv, v503), " = ", l145.fvalue(pv, v502)) : l145.fvalue(values, l64.fvalue(pv, l44.fvalue(pv, l224), l44.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l167), l44.fvalue(pv, v501))), l44.fvalue(pv, v502))));
            })(l187.fvalue(pv, v501, (function(){
                var symbol = l188;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l105));
        })();
    }));
    return l223;
})();
var l225 = {name: "SETQ"};
((l206).value = ({car: l44.fvalue(pv, l225, (function (values){
    var v505= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v505 = {car: arguments[i], cdr: 
    v505};
    return (function(){
        return (function(v506){
            (function(){
                try {
                    return (function(){
                        while(l4.value !== l3.value){
                            (l12.fvalue(pv, v505) !== l3.value ? (function(){
                                throw ({type: 'block', id: 187, values: l3.value, message: 'Return from unknown block NIL.'})
                            })() : (l12.fvalue(pv, (function(){
                                var tmp = v505;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })()) !== l3.value ? (function(){
                                throw "Odd paris in SETQ";
                            })() : (function(){
                                (v506 = l134.fvalue(pv, v506, l134.fvalue(pv, l223.fvalue(pv, (function(){
                                    var tmp = v505;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })(), l33.fvalue(pv, v505)), (l12.fvalue(pv, l35.fvalue(pv, v505)) !== l3.value ? "" : ", "))));
                                return (v505 = l35.fvalue(pv, v505));
                            })()));
                        }return l3.value;
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 187)
                        return cf.values;
                    else
                        throw cf;
                }
            })();
            return l134.fvalue(values, "(", v506, ")");
        })("");
    })();
})), cdr: (function(){
    var symbol = l206;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l226 = {name: "JS-VREF"};
((l206).value = ({car: l44.fvalue(pv, l226, (function (values,v507){
    checkArgs(arguments, 2);
    return (function(){
        return v507;
    })();
})), cdr: (function(){
    var symbol = l206;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l227 = {name: "JS-VSET"};
((l206).value = ({car: l44.fvalue(pv, l227, (function (values,v508,v509){
    checkArgs(arguments, 3);
    return (function(){
        return l134.fvalue(values, "(", v508, " = ", l145.fvalue(pv, v509), ")");
    })();
})), cdr: (function(){
    var symbol = l206;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
(function(){
    (l148).fvalue = (function(v516){
        ((v516)["fname"] = "ESCAPE-STRING");
        return v516;
    })((function (values,v510){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v511,v512,v513){
                (function(){
                    return (function(){
                        while((function(){
                            var x1 = v512;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = v513;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return (x1<x2?l4.value: l3.value);
                        })() !== l3.value){
                            (function(v514){
                                ((function(v515){
                                    return (v515 !== l3.value ? v515 : l80.fvalue(pv, v514, 92));
                                })(l80.fvalue(pv, v514, 34)) !== l3.value ? (v511 = l134.fvalue(pv, v511, "\\")) : l3.value);
                                (l80.fvalue(pv, v514, 10) !== l3.value ? (function(){
                                    (v511 = l134.fvalue(pv, v511, "\\"));
                                    return (v514 = 110);
                                })() : l3.value);
                                return (v511 = l134.fvalue(pv, v511, l98.fvalue(pv, v514)));
                            })((function(){
                                var string = v510;
                                var index = v512;
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })());
                            (v512 = (function(){
                                var x1 = v512;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = 1;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })());
                        }return l3.value;
                    })();
                })();
                return v511;
            })("",0,l71.fvalue(pv, v510));
        })();
    }));
    return l148;
})();
var l228 = {name: "*LITERAL-SYMBOLS*"};
(function(){
    (((l228.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l228).value = l3.value));
    return l228;
})();
var l229 = {name: "*LITERAL-COUNTER*"};
(function(){
    (((l229.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l229).value = 0));
    return l229;
})();
var l230 = {name: "GENLIT"};
(function(){
    (l230).fvalue = (function(v517){
        ((v517)["fname"] = "GENLIT");
        return v517;
    })((function (values){
        checkArgsAtMost(arguments, 1);
        return (function(){
            return l134.fvalue(values, "l", l17.fvalue(pv, ((l229).value = (function(){
                var x1 = (function(){
                    var symbol = l229;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = 1;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })())));
        })();
    }));
    return l230;
})();
var l231 = {name: "LITERAL"};
(function(){
    (l231).fvalue = (function(v532){
        ((v532)["fname"] = "LITERAL");
        return v532;
    })((function (values,v518,v519){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v519=l3.value;
        default: break;
        }
        return (function(){
            return (l81.fvalue(pv, v518) !== l3.value ? l17.fvalue(values, v518) : (((typeof(v518) == "string")?l4.value: l3.value) !== l3.value ? l134.fvalue(values, "\"", l148.fvalue(pv, v518), "\"") : (((function(){
                var tmp = v518;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?l4.value: l3.value) !== l3.value ? (function(v520){
                return (v520 !== l3.value ? v520 : (function(v522,v523){
                    ((l228).value = ({car: ({car: v518, cdr: v522}), cdr: (function(){
                        var symbol = l228;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()}));
                    l194.fvalue(pv, l134.fvalue(pv, "var ", v522, " = ", v523));
                    return v522;
                })(l230.fvalue(pv),(function(v521){
                    return (l12.fvalue(pv, v521) !== l3.value ? l134.fvalue(pv, "{name: \"", l148.fvalue(pv, (v518).name), "\"}") : l145.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l130), l44.fvalue(pv, (v518).name), l44.fvalue(pv, l114.fvalue(pv, v521)))));
                })(l122.fvalue(pv, v518))));
            })((function(){
                var tmp = l97.fvalue(pv, v518, (function(){
                    var symbol = l228;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
                return tmp === l3.value? l3.value: tmp.cdr;
            })()) : (((function(){
                var tmp = v518;
                return (typeof tmp == 'object' && 'car' in tmp);
            })()?l4.value: l3.value) !== l3.value ? (function(){
                var v524 = l87.fvalue(pv, v518);
                var v525 = l86.fvalue(pv, v518);
                var v526 = l134.fvalue(pv, "QIList(", l137.fvalue(pv, l73.fvalue(pv, (function (values,v527){
                    checkArgs(arguments, 2);
                    return l231.fvalue(values, v527, l4.value);
                }), v524), ","), l231.fvalue(pv, (function(){
                    var tmp = v525;
                    return tmp === l3.value? l3.value: tmp.car;
                })(), l4.value), ",", l231.fvalue(pv, (function(){
                    var tmp = v525;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })(), l4.value), ")");
                return (v519 !== l3.value ? v526 : (function(v528){
                    l194.fvalue(pv, l134.fvalue(pv, "var ", v528, " = ", v526));
                    return v528;
                })(l230.fvalue(pv)));
            })() : (((function(){
                var x = v518;
                return typeof x === 'object' && 'length' in x;
            })()?l4.value: l3.value) !== l3.value ? (function(v529){
                return (function(v530){
                    return (v519 !== l3.value ? v530 : (function(v531){
                        l194.fvalue(pv, l134.fvalue(pv, "var ", v531, " = ", v530));
                        return v531;
                    })(l230.fvalue(pv)));
                })(l134.fvalue(pv, "[", l136.fvalue(pv, l73.fvalue(pv, (function(){
                    var symbol = l231;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v529), ", "), "]"));
            })(l139.fvalue(pv, v518)) : l3.value)))));
        })();
    }));
    return l231;
})();
((l206).value = ({car: l44.fvalue(pv, l167, (function (values,v533){
    checkArgs(arguments, 2);
    return (function(){
        return l231.fvalue(values, v533);
    })();
})), cdr: (function(){
    var symbol = l206;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l232 = {name: "%WHILE"};
((l206).value = ({car: l44.fvalue(pv, l232, (function (values,v535){
    checkArgsAtLeast(arguments, 2);
    var v534= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v534 = {car: arguments[i], cdr: 
    v534};
    return (function(){
        return l134.fvalue(values, "(function(){", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l143.fvalue(pv, "while(", l145.fvalue(pv, v535), " !== ", l145.fvalue(pv, l3.value), "){", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l143.fvalue(pv, l222.fvalue(pv, v534)), "}", "return ", l145.fvalue(pv, l3.value), ";", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()), "})()");
    })();
})), cdr: (function(){
    var symbol = l206;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l233 = {name: "SYMBOL-FUNCTION"};
((l206).value = ({car: l44.fvalue(pv, l104, (function (values,v536){
    checkArgs(arguments, 2);
    return (function(){
        return ((l59.fvalue(pv, v536) !== l3.value ? (((function(){
            var tmp = v536;
            return tmp === l3.value? l3.value: tmp.car;
        })() === l5)?l4.value: l3.value) : l3.value) !== l3.value ? l221.fvalue(values, l33.fvalue(pv, v536), l35.fvalue(pv, v536)) : (((function(){
            var tmp = v536;
            return (typeof tmp == 'object' && 'name' in tmp);
        })()?l4.value: l3.value) !== l3.value ? (function(v537){
            return (v537 !== l3.value ? l176.fvalue(values, v537) : l145.fvalue(values, l64.fvalue(pv, l44.fvalue(pv, l233), l44.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l167), l44.fvalue(pv, v536))))));
        })(l187.fvalue(pv, v536, (function(){
            var symbol = l188;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l104)) : l3.value));
    })();
})), cdr: (function(){
    var symbol = l206;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l234 = {name: "MAKE-FUNCTION-BINDING"};
(function(){
    (l234).fvalue = (function(v539){
        ((v539)["fname"] = "MAKE-FUNCTION-BINDING");
        return v539;
    })((function (values,v538){
        checkArgs(arguments, 2);
        return (function(){
            return l173.fvalue(values, v538, l104, l190.fvalue(pv, v538));
        })();
    }));
    return l234;
})();
var l235 = {name: "COMPILE-FUNCTION-DEFINITION"};
(function(){
    (l235).fvalue = (function(v541){
        ((v541)["fname"] = "COMPILE-FUNCTION-DEFINITION");
        return v541;
    })((function (values,v540){
        checkArgs(arguments, 2);
        return (function(){
            return l221.fvalue(values, (function(){
                var tmp = v540;
                return tmp === l3.value? l3.value: tmp.car;
            })(), (function(){
                var tmp = v540;
                return tmp === l3.value? l3.value: tmp.cdr;
            })());
        })();
    }));
    return l235;
})();
var l236 = {name: "TRANSLATE-FUNCTION"};
(function(){
    (l236).fvalue = (function(v544){
        ((v544)["fname"] = "TRANSLATE-FUNCTION");
        return v544;
    })((function (values,v542){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v543){
                return l176.fvalue(values, v543);
            })(l187.fvalue(pv, v542, (function(){
                var symbol = l188;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l104));
        })();
    }));
    return l236;
})();
var l237 = {name: "FLET"};
((l206).value = ({car: l44.fvalue(pv, l237, (function (values,v546){
    checkArgsAtLeast(arguments, 2);
    var v545= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v545 = {car: arguments[i], cdr: 
    v545};
    return (function(){
        return (function(){
            try {
                var v551 = l188.value;
                var v547 = l73.fvalue(pv, (function(){
                    var symbol = l30;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v546);
                var v548 = l73.fvalue(pv, (function(){
                    var symbol = l31;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v546);
                var v549 = l73.fvalue(pv, (function(){
                    var symbol = l235;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v548);
                ((l188).value = l186.fvalue(pv, l73.fvalue(pv, (function(){
                    var symbol = l234;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v547), (function(){
                    var symbol = l188;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l104));
                return l134.fvalue(values, "(function(", l136.fvalue(pv, l73.fvalue(pv, (function(){
                    var symbol = l236;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v547), ","), "){", (function(){
                    var symbol = l133;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(v550){
                    return l143.fvalue(pv, v550);
                })(l222.fvalue(pv, v545, l4.value)), "})(", l136.fvalue(pv, v549, ","), ")");
            }
            finally {
                l188.value = v551;
            }
        })();
    })();
})), cdr: (function(){
    var symbol = l206;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l238 = {name: "LABELS"};
((l206).value = ({car: l44.fvalue(pv, l238, (function (values,v553){
    checkArgsAtLeast(arguments, 2);
    var v552= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v552 = {car: arguments[i], cdr: 
    v552};
    return (function(){
        return (function(){
            try {
                var v556 = l188.value;
                var v554 = l73.fvalue(pv, (function(){
                    var symbol = l30;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v553);
                ((l188).value = l186.fvalue(pv, l73.fvalue(pv, (function(){
                    var symbol = l234;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v554), (function(){
                    var symbol = l188;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l104));
                return l134.fvalue(values, "(function(){", (function(){
                    var symbol = l133;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l143.fvalue(pv, l138.fvalue(pv, (function (values,v555){
                    checkArgs(arguments, 2);
                    return l134.fvalue(values, "var ", l236.fvalue(pv, (function(){
                        var tmp = v555;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()), " = ", l221.fvalue(pv, l33.fvalue(pv, v555), l35.fvalue(pv, v555)), ";", (function(){
                        var symbol = l133;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                }), v553), l222.fvalue(pv, v552, l4.value)), "})()");
            }
            finally {
                l188.value = v556;
            }
        })();
    })();
})), cdr: (function(){
    var symbol = l206;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l239 = {name: "*COMPILING-FILE*"};
(function(){
    (((l239.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l239).value = l3.value));
    return l239;
})();
var l240 = {name: "EVAL-WHEN-COMPILE"};
var l241 = {name: "PROGN"};
var l242 = {name: "EVAL"};
((l206).value = ({car: l44.fvalue(pv, l240, (function (values){
    var v557= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v557 = {car: arguments[i], cdr: 
    v557};
    return (function(){
        return ((function(){
            var symbol = l239;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })() !== l3.value ? (function(){
            l242.fvalue(pv, ({car: l241, cdr: v557}));
            return l3.value;
        })() : l145.fvalue(values, l64.fvalue(pv, l44.fvalue(pv, l241), v557)));
    })();
})), cdr: (function(){
    var symbol = l206;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l243 = {name: "DEFINE-TRANSFORMATION"};
l243;
((l206).value = ({car: l44.fvalue(pv, l241, (function (values){
    var v558= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v558 = {car: arguments[i], cdr: 
    v558};
    return (function(){
        return (l12.fvalue(pv, (function(){
            var tmp = v558;
            return tmp === l3.value? l3.value: tmp.cdr;
        })()) !== l3.value ? l145.fvalue(values, (function(){
            var tmp = v558;
            return tmp === l3.value? l3.value: tmp.car;
        })(), (function(){
            var symbol = l172;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()) : l134.fvalue(values, "(function(){", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l143.fvalue(pv, l222.fvalue(pv, v558, l4.value)), "})()"));
    })();
})), cdr: (function(){
    var symbol = l206;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l244 = {name: "SPECIAL-VARIABLE-P"};
(function(){
    (l244).fvalue = (function(v560){
        ((v560)["fname"] = "SPECIAL-VARIABLE-P");
        return v560;
    })((function (values,v559){
        checkArgs(arguments, 2);
        return (function(){
            return (l200.fvalue(pv, v559, l105, l202) !== l3.value ? l4.value : l3.value);
        })();
    }));
    return l244;
})();
var l245 = {name: "LET-BINDING-WRAPPER"};
(function(){
    (l245).fvalue = (function(v567){
        ((v567)["fname"] = "LET-BINDING-WRAPPER");
        return v567;
    })((function (values,v561,v562){
        checkArgs(arguments, 3);
        return (function(){
            try {
                (l12.fvalue(pv, v561) !== l3.value ? (function(){
                    var values = mv;
                    throw ({type: 'block', id: 205, values: v562, message: 'Return from unknown block LET-BINDING-WRAPPER.'})
                })() : l3.value);
                return l134.fvalue(values, "try {", (function(){
                    var symbol = l133;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l143.fvalue(pv, "var tmp;", (function(){
                    var symbol = l133;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l138.fvalue(pv, (function (values,v563){
                    checkArgs(arguments, 2);
                    return (function(v564){
                        return l134.fvalue(values, "tmp = ", v564, ".value;", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), v564, ".value = ", (function(){
                            var tmp = v563;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), ";", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var tmp = v563;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), " = tmp;", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    })(l145.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l167), l44.fvalue(pv, (function(){
                        var tmp = v563;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()))));
                }), v561), v562, (function(){
                    var symbol = l133;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "}", (function(){
                    var symbol = l133;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "finally {", (function(){
                    var symbol = l133;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l143.fvalue(pv, l138.fvalue(pv, (function (values,v565){
                    checkArgs(arguments, 2);
                    return (function(v566){
                        return l134.fvalue(values, v566, ".value", " = ", (function(){
                            var tmp = v565;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), ";", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    })(l145.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l167), l44.fvalue(pv, (function(){
                        var tmp = v565;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()))));
                }), v561)), "}", (function(){
                    var symbol = l133;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 205)
                    return values.apply(this, forcemv(cf.values));
                else
                    throw cf;
            }
        })();
    }));
    return l245;
})();
var l246 = {name: "LET"};
((l206).value = ({car: l44.fvalue(pv, l246, (function (values,v569){
    checkArgsAtLeast(arguments, 2);
    var v568= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v568 = {car: arguments[i], cdr: 
    v568};
    return (function(){
        return (function(){
            try {
                var v577 = l188.value;
                var v570 = l73.fvalue(pv, (function(){
                    var symbol = l58;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v569);
                var v571 = l73.fvalue(pv, (function(){
                    var symbol = l39;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v570);
                var v572 = l73.fvalue(pv, (function(){
                    var symbol = l145;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), l73.fvalue(pv, (function(){
                    var symbol = l40;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v570));
                ((l188).value = l192.fvalue(pv, l90.fvalue(pv, (function(){
                    var symbol = l244;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v571)));
                var v573 = l3.value;
                return l134.fvalue(values, "(function(", l136.fvalue(pv, l73.fvalue(pv, (function (values,v574){
                    checkArgs(arguments, 2);
                    return (l244.fvalue(pv, v574) !== l3.value ? (function(v575){
                        (v573 = ({car: ({car: v574, cdr: v575}), cdr: v573}));
                        return v575;
                    })(l190.fvalue(pv, v574)) : l191.fvalue(values, v574));
                }), v571), ","), "){", (function(){
                    var symbol = l133;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(v576){
                    return l143.fvalue(pv, l245.fvalue(pv, v573, v576));
                })(l222.fvalue(pv, v568, l4.value)), "})(", l136.fvalue(pv, v572, ","), ")");
            }
            finally {
                l188.value = v577;
            }
        })();
    })();
})), cdr: (function(){
    var symbol = l206;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l247 = {name: "LET*-INITIALIZE-VALUE"};
(function(){
    (l247).fvalue = (function(v584){
        ((v584)["fname"] = "LET*-INITIALIZE-VALUE");
        return v584;
    })((function (values,v578){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v579,v580){
                return (l244.fvalue(pv, v579) !== l3.value ? l134.fvalue(values, l145.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l225), l44.fvalue(pv, v579), l44.fvalue(pv, v580))), ";", (function(){
                    var symbol = l133;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()) : (function(){
                    var v581 = l190.fvalue(pv, v579);
                    var v582 = l173.fvalue(pv, v579, l105, v581);
                    return (function(v583){
                        l183.fvalue(pv, v582, (function(){
                            var symbol = l188;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l105);
                        return v583;
                    })(l134.fvalue(pv, "var ", v581, " = ", l145.fvalue(pv, v580), ";", (function(){
                        var symbol = l133;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
                })());
            })(l39.fvalue(pv, v578),l40.fvalue(pv, v578));
        })();
    }));
    return l247;
})();
var l248 = {name: "LET*-BINDING-WRAPPER"};
(function(){
    (l248).fvalue = (function(v593){
        ((v593)["fname"] = "LET*-BINDING-WRAPPER");
        return v593;
    })((function (values,v585,v586){
        checkArgs(arguments, 3);
        return (function(){
            try {
                (l12.fvalue(pv, v585) !== l3.value ? (function(){
                    var values = mv;
                    throw ({type: 'block', id: 208, values: v586, message: 'Return from unknown block LET*-BINDING-WRAPPER.'})
                })() : l3.value);
                return (function(v588){
                    return l134.fvalue(values, "try {", (function(){
                        var symbol = l133;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l143.fvalue(pv, l138.fvalue(pv, (function (values,v589){
                        checkArgs(arguments, 2);
                        return (function(v590){
                            return l134.fvalue(values, "var ", (function(){
                                var tmp = v589;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), " = ", v590, ".value;", (function(){
                                var symbol = l133;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })(l145.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l167), l44.fvalue(pv, (function(){
                            var tmp = v589;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    }), v588), v586), "}", (function(){
                        var symbol = l133;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "finally {", (function(){
                        var symbol = l133;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l143.fvalue(pv, l138.fvalue(pv, (function (values,v591){
                        checkArgs(arguments, 2);
                        return (function(v592){
                            return l134.fvalue(values, v592, ".value", " = ", (function(){
                                var tmp = v591;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), ";", (function(){
                                var symbol = l133;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })(l145.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l167), l44.fvalue(pv, (function(){
                            var tmp = v591;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    }), v588)), "}", (function(){
                        var symbol = l133;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                })(l73.fvalue(pv, (function (values,v587){
                    checkArgs(arguments, 2);
                    return ({car: v587, cdr: l190.fvalue(pv, v587)});
                }), l91.fvalue(pv, (function(){
                    var symbol = l244;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v585)));
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 208)
                    return values.apply(this, forcemv(cf.values));
                else
                    throw cf;
            }
        })();
    }));
    return l248;
})();
var l249 = {name: "LET*"};
((l206).value = ({car: l44.fvalue(pv, l249, (function (values,v595){
    checkArgsAtLeast(arguments, 2);
    var v594= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v594 = {car: arguments[i], cdr: 
    v594};
    return (function(){
        return (function(v596,v597){
            try {
                var tmp;
                tmp = l188.value;
                l188.value = v597;
                v597 = tmp;
                return l134.fvalue(values, "(function(){", (function(){
                    var symbol = l133;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l143.fvalue(pv, (function(v598,v599){
                    return l248.fvalue(pv, v598, v599);
                })(l91.fvalue(pv, (function(){
                    var symbol = l244;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), l73.fvalue(pv, (function(){
                    var symbol = l39;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v596)),l134.fvalue(pv, l138.fvalue(pv, (function(){
                    var symbol = l247;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v596), l222.fvalue(pv, v594, l4.value)))), "})()");
            }
            finally {
                l188.value = v597;
            }
        })(l73.fvalue(pv, (function(){
            var symbol = l58;
            var func = symbol.fvalue;
            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
            return func;
        })(), v595),l182.fvalue(pv, (function(){
            var symbol = l188;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()));
    })();
})), cdr: (function(){
    var symbol = l206;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l250 = {name: "*BLOCK-COUNTER*"};
(function(){
    (((l250.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l250).value = 0));
    return l250;
})();
var l251 = {name: "MULTIPLE-VALUE"};
var l252 = {name: "USED"};
((l206).value = ({car: l44.fvalue(pv, l184, (function (values,v601){
    checkArgsAtLeast(arguments, 2);
    var v600= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v600 = {car: arguments[i], cdr: 
    v600};
    return (function(){
        return (function(){
            var v602 = l17.fvalue(pv, ((l250).value = (function(){
                var x1 = (function(){
                    var symbol = l250;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = 1;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })()));
            var v603 = l173.fvalue(pv, v601, l184, v602);
            ((function(){
                var symbol = l172;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })() !== l3.value ? l180.fvalue(pv, l251, v603) : l3.value);
            return (function(){
                try {
                    var v605 = l188.value;
                    ((l188).value = l186.fvalue(pv, l44.fvalue(pv, v603), (function(){
                        var symbol = l188;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l184));
                    var v604 = l222.fvalue(pv, v600, l4.value);
                    return (l88.fvalue(pv, l252, l177.fvalue(pv, v603)) !== l3.value ? l134.fvalue(values, "(function(){", (function(){
                        var symbol = l133;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l143.fvalue(pv, "try {", (function(){
                        var symbol = l133;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l143.fvalue(pv, v604), "}", (function(){
                        var symbol = l133;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "catch (cf){", (function(){
                        var symbol = l133;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    if (cf.type == 'block' && cf.id == ", v602, ")", (function(){
                        var symbol = l133;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), ((function(){
                        var symbol = l172;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() !== l3.value ? "        return values.apply(this, forcemv(cf.values));" : "        return cf.values;"), (function(){
                        var symbol = l133;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    else", (function(){
                        var symbol = l133;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "        throw cf;", (function(){
                        var symbol = l133;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "}", (function(){
                        var symbol = l133;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : l134.fvalue(values, "(function(){", (function(){
                        var symbol = l133;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l143.fvalue(pv, v604), "})()"));
                }
                finally {
                    l188.value = v605;
                }
            })();
        })();
    })();
})), cdr: (function(){
    var symbol = l206;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l253 = {name: "RETURN-FROM"};
((l206).value = ({car: l44.fvalue(pv, l253, (function (values,v606,v607){
    checkArgsAtLeast(arguments, 2);
    checkArgsAtMost(arguments, 3);
    switch(arguments.length-1){
    case 1:
    v607=l3.value;
    default: break;
    }
    return (function(){
        return (function(){
            var v608 = l187.fvalue(pv, v606, (function(){
                var symbol = l188;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l184);
            var v609 = l88.fvalue(pv, l251, l177.fvalue(pv, v608));
            (l12.fvalue(pv, v608) !== l3.value ? (function(){
                throw l134.fvalue(pv, "Unknown block `", (v606).name, "'.");
            })() : l3.value);
            l180.fvalue(pv, l252, v608);
            return l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, (v609 !== l3.value ? l134.fvalue(pv, "var values = mv;", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()) : ""), "throw ({", "type: 'block', ", "id: ", l176.fvalue(pv, v608), ", ", "values: ", l145.fvalue(pv, v607, v609), ", ", "message: 'Return from unknown block ", (v606).name, ".'", "})"), "})()");
        })();
    })();
})), cdr: (function(){
    var symbol = l206;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l254 = {name: "CATCH"};
((l206).value = ({car: l44.fvalue(pv, l254, (function (values,v611){
    checkArgsAtLeast(arguments, 2);
    var v610= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v610 = {car: arguments[i], cdr: 
    v610};
    return (function(){
        return l134.fvalue(values, "(function(){", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l143.fvalue(pv, "var id = ", l145.fvalue(pv, v611), ";", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "try {", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l143.fvalue(pv, l222.fvalue(pv, v610, l4.value)), (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "}", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "catch (cf){", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "    if (cf.type == 'catch' && cf.id == id)", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), ((function(){
            var symbol = l172;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })() !== l3.value ? "        return values.apply(this, forcemv(cf.values));" : "        return pv.apply(this, forcemv(cf.values));"), (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "    else", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "        throw cf;", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "}", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()), "})()");
    })();
})), cdr: (function(){
    var symbol = l206;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l255 = {name: "THROW"};
((l206).value = ({car: l44.fvalue(pv, l255, (function (values,v612,v613){
    checkArgs(arguments, 3);
    return (function(){
        return l134.fvalue(values, "(function(){", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l143.fvalue(pv, "var values = mv;", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "throw ({", "type: 'catch', ", "id: ", l145.fvalue(pv, v612), ", ", "values: ", l145.fvalue(pv, v613, l4.value), ", ", "message: 'Throw uncatched.'", "})"), "})()");
    })();
})), cdr: (function(){
    var symbol = l206;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l256 = {name: "*TAGBODY-COUNTER*"};
(function(){
    (((l256.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l256).value = 0));
    return l256;
})();
var l257 = {name: "*GO-TAG-COUNTER*"};
(function(){
    (((l257.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l257).value = 0));
    return l257;
})();
var l258 = {name: "GO-TAG-P"};
(function(){
    (l258).fvalue = (function(v616){
        ((v616)["fname"] = "GO-TAG-P");
        return v616;
    })((function (values,v614){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v615){
                return (v615 !== l3.value ? v615 : ((function(){
                    var tmp = v614;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value));
            })(l81.fvalue(pv, v614));
        })();
    }));
    return l258;
})();
var l259 = {name: "DECLARE-TAGBODY-TAGS"};
(function(){
    (l259).fvalue = (function(v622){
        ((v622)["fname"] = "DECLARE-TAGBODY-TAGS");
        return v622;
    })((function (values,v617,v618){
        checkArgs(arguments, 3);
        return (function(){
            return (function(v621){
                return l186.fvalue(values, v621, (function(){
                    var symbol = l188;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l185);
            })(l73.fvalue(pv, (function (values,v619){
                checkArgs(arguments, 2);
                return (function(v620){
                    return l173.fvalue(values, v619, l185, l44.fvalue(pv, v617, v620));
                })(l17.fvalue(pv, ((l257).value = (function(){
                    var x1 = (function(){
                        var symbol = l257;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = 1;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })())));
            }), l91.fvalue(pv, (function(){
                var symbol = l258;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), v618)));
        })();
    }));
    return l259;
})();
var l260 = {name: "TAGBODY"};
((l206).value = ({car: l44.fvalue(pv, l260, (function (values){
    var v623= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v623 = {car: arguments[i], cdr: 
    v623};
    return (function(){
        try {
            (l95.fvalue(pv, (function(){
                var symbol = l258;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), v623) !== l3.value ? l3.value : (function(){
                var values = mv;
                throw ({type: 'block', id: 216, values: l145.fvalue(values, l64.fvalue(pv, l44.fvalue(pv, l241), v623, l44.fvalue(pv, l3))), message: 'Return from unknown block TAGBODY.'})
            })());
            (l258.fvalue(pv, (function(){
                var tmp = v623;
                return tmp === l3.value? l3.value: tmp.car;
            })()) !== l3.value ? l3.value : (v623 = ({car: l16.fvalue(pv, "START"), cdr: v623})));
            return (function(v624){
                return (function(v626,v625){
                    try {
                        var tmp;
                        tmp = l188.value;
                        l188.value = v626;
                        v626 = tmp;
                        (function(v627){
                            return (v625 = l40.fvalue(pv, l176.fvalue(pv, v627)));
                        })(l187.fvalue(pv, l39.fvalue(pv, v623), (function(){
                            var symbol = l188;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l185));
                        return l134.fvalue(values, "(function(){", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l143.fvalue(pv, "var tagbody_", v624, " = ", v625, ";", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "tbloop:", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "while (true) {", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l143.fvalue(pv, "try {", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l143.fvalue(pv, (function(v628){
                            return l134.fvalue(pv, "switch(tagbody_", v624, "){", (function(){
                                var symbol = l133;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "case ", v625, ":", (function(){
                                var symbol = l133;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(){
                                return (function(v629,v630){
                                    (function(){
                                        while(v629 !== l3.value){
                                            (v630 = (function(){
                                                var tmp = v629;
                                                return tmp === l3.value? l3.value: tmp.car;
                                            })());
                                            (function(){
                                                (v628 = l134.fvalue(pv, v628, (l27.fvalue(pv, l258.fvalue(pv, v630)) !== l3.value ? l143.fvalue(pv, l145.fvalue(pv, v630), ";", (function(){
                                                    var symbol = l133;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })()) : (function(v631){
                                                    return l134.fvalue(pv, "case ", l40.fvalue(pv, l176.fvalue(pv, v631)), ":", (function(){
                                                        var symbol = l133;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })());
                                                })(l187.fvalue(pv, v630, (function(){
                                                    var symbol = l188;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })(), l185)))));
                                                return l3.value;
                                            })();
                                            (v629 = (function(){
                                                var tmp = v629;
                                                return tmp === l3.value? l3.value: tmp.cdr;
                                            })());
                                        }return l3.value;
                                    })();
                                    return v628;
                                })((function(){
                                    var tmp = v623;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })(),l3.value);
                            })(), "default:", (function(){
                                var symbol = l133;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "    break tbloop;", (function(){
                                var symbol = l133;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "}", (function(){
                                var symbol = l133;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })("")), "}", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "catch (jump) {", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    if (jump.type == 'tagbody' && jump.id == ", v624, ")", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        tagbody_", v624, " = jump.label;", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    else", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        throw(jump);", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "}", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "}", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return ", l145.fvalue(pv, l3.value), ";", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    }
                    finally {
                        l188.value = v626;
                    }
                })(l259.fvalue(pv, v624, v623),l3.value);
            })(l17.fvalue(pv, (function(){
                var symbol = l256;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()));
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 216)
                return values.apply(this, forcemv(cf.values));
            else
                throw cf;
        }
    })();
})), cdr: (function(){
    var symbol = l206;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l261 = {name: "GO"};
((l206).value = ({car: l44.fvalue(pv, l261, (function (values,v632){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v633,v634){
            return (v633 !== l3.value ? l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "throw ({", "type: 'tagbody', ", "id: ", l39.fvalue(pv, l176.fvalue(pv, v633)), ", ", "label: ", l40.fvalue(pv, l176.fvalue(pv, v633)), ", ", "message: 'Attempt to GO to non-existing tag ", v634, "'", "})", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()") : (function(){
                throw l134.fvalue(pv, "Unknown tag `", v634, "'.");
            })());
        })(l187.fvalue(pv, v632, (function(){
            var symbol = l188;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l185),(((function(){
            var tmp = v632;
            return (typeof tmp == 'object' && 'name' in tmp);
        })()?l4.value: l3.value) !== l3.value ? (v632).name : (l81.fvalue(pv, v632) !== l3.value ? l17.fvalue(pv, v632) : l3.value)));
    })();
})), cdr: (function(){
    var symbol = l206;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l262 = {name: "UNWIND-PROTECT"};
((l206).value = ({car: l44.fvalue(pv, l262, (function (values,v636){
    checkArgsAtLeast(arguments, 2);
    var v635= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v635 = {car: arguments[i], cdr: 
    v635};
    return (function(){
        return l134.fvalue(values, "(function(){", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l143.fvalue(pv, "var ret = ", l145.fvalue(pv, l3.value), ";", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "try {", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l143.fvalue(pv, "ret = ", l145.fvalue(pv, v636), ";", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()), "} finally {", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l143.fvalue(pv, l222.fvalue(pv, v635)), "}", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "return ret;", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()), "})()");
    })();
})), cdr: (function(){
    var symbol = l206;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l263 = {name: "MULTIPLE-VALUE-CALL"};
((l206).value = ({car: l44.fvalue(pv, l263, (function (values,v638){
    checkArgsAtLeast(arguments, 2);
    var v637= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v637 = {car: arguments[i], cdr: 
    v637};
    return (function(){
        return l134.fvalue(values, "(function(){", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l143.fvalue(pv, "var func = ", l145.fvalue(pv, v638), ";", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "var args = [", ((function(){
            var symbol = l172;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })() !== l3.value ? "values" : "pv"), "];", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "return ", l134.fvalue(pv, "(function(){", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l143.fvalue(pv, "var values = mv;", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "var vs;", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l138.fvalue(pv, (function (values,v639){
            checkArgs(arguments, 2);
            return l134.fvalue(values, "vs = ", l145.fvalue(pv, v639, l4.value), ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "if (typeof vs === 'object' && 'multiple-value' in vs)", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "args = args.concat(vs);", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "else", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "args.push(vs);", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()));
        }), v637), "return func.apply(window, args);", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()), "})()"), ";", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()), "})()");
    })();
})), cdr: (function(){
    var symbol = l206;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l264 = {name: "MULTIPLE-VALUE-PROG1"};
((l206).value = ({car: l44.fvalue(pv, l264, (function (values,v641){
    checkArgsAtLeast(arguments, 2);
    var v640= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v640 = {car: arguments[i], cdr: 
    v640};
    return (function(){
        return l134.fvalue(values, "(function(){", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l143.fvalue(pv, "var args = ", l145.fvalue(pv, v641, (function(){
            var symbol = l172;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()), ";", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l222.fvalue(pv, v640), "return args;", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()), "})()");
    })();
})), cdr: (function(){
    var symbol = l206;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l265 = {name: "BACKQUOTE-EXPAND-1"};
(function(){
    (l265).fvalue = (function(v644){
        ((v644)["fname"] = "BACKQUOTE-EXPAND-1");
        return v644;
    })((function (values,v642){
        checkArgs(arguments, 2);
        return (function(){
            return (((function(){
                var tmp = v642;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?l4.value: l3.value) !== l3.value ? l44.fvalue(values, l167, v642) : (l45.fvalue(pv, v642) !== l3.value ? v642 : ((((function(){
                var tmp = v642;
                return tmp === l3.value? l3.value: tmp.car;
            })() === l170)?l4.value: l3.value) !== l3.value ? (function(){
                var tmp = v642;
                return tmp === l3.value? l3.value: tmp.car;
            })() : ((((function(){
                var tmp = v642;
                return tmp === l3.value? l3.value: tmp.car;
            })() === l168)?l4.value: l3.value) !== l3.value ? l265.fvalue(values, l265.fvalue(pv, l33.fvalue(pv, v642))) : ({car: l64, cdr: l73.fvalue(pv, (function (values,v643){
                checkArgs(arguments, 2);
                return ((l59.fvalue(pv, v643) !== l3.value ? (((function(){
                    var tmp = v643;
                    return tmp === l3.value? l3.value: tmp.car;
                })() === l170)?l4.value: l3.value) : l3.value) !== l3.value ? l44.fvalue(values, l44, l33.fvalue(pv, v643)) : ((l59.fvalue(pv, v643) !== l3.value ? (((function(){
                    var tmp = v643;
                    return tmp === l3.value? l3.value: tmp.car;
                })() === l169)?l4.value: l3.value) : l3.value) !== l3.value ? l33.fvalue(values, v643) : l44.fvalue(values, l44, l265.fvalue(pv, v643))));
            }), v642)})))));
        })();
    }));
    return l265;
})();
var l266 = {name: "BACKQUOTE-EXPAND"};
(function(){
    (l266).fvalue = (function(v646){
        ((v646)["fname"] = "BACKQUOTE-EXPAND");
        return v646;
    })((function (values,v645){
        checkArgs(arguments, 2);
        return (function(){
            return ((l59.fvalue(pv, v645) !== l3.value ? (((function(){
                var tmp = v645;
                return tmp === l3.value? l3.value: tmp.car;
            })() === l168)?l4.value: l3.value) : l3.value) !== l3.value ? l265.fvalue(values, l33.fvalue(pv, v645)) : v645);
        })();
    }));
    return l266;
})();
l168;
((l206).value = ({car: l44.fvalue(pv, l168, (function (values,v647){
    checkArgs(arguments, 2);
    return (function(){
        return l145.fvalue(values, l265.fvalue(pv, v647));
    })();
})), cdr: (function(){
    var symbol = l206;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l267 = {name: "*BUILTINS*"};
(function(){
    (((l267.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l267).value = l3.value));
    return l267;
})();
var l268 = {name: "DEFINE-RAW-BUILTIN"};
l268;
var l269 = {name: "DEFINE-BUILTIN"};
l269;
var l270 = {name: "TYPE-CHECK"};
l270;
var l271 = {name: "VARIABLE-ARITY-CALL"};
(function(){
    (l271).fvalue = (function(v656){
        ((v656)["fname"] = "VARIABLE-ARITY-CALL");
        return v656;
    })((function (values,v648,v649){
        checkArgs(arguments, 3);
        return (function(){
            (((function(){
                var tmp = v648;
                return (typeof tmp == 'object' && 'car' in tmp);
            })()?l4.value: l3.value) !== l3.value ? l3.value : (function(){
                throw "ARGS must be a non-empty list";
            })());
            return (function(v650,v651,v652){
                (function(){
                    return (function(v653,v654){
                        (function(){
                            while(v653 !== l3.value){
                                (v654 = (function(){
                                    var tmp = v653;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })());
                                (function(){
                                    (function(v655){
                                        (v651 = ({car: v655, cdr: v651}));
                                        return (v652 = l134.fvalue(pv, v652, l134.fvalue(pv, "var ", v655, " = ", l145.fvalue(pv, v654), ";", (function(){
                                            var symbol = l133;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })(), "if (typeof ", v655, " !== 'number') throw 'Not a number!';", (function(){
                                            var symbol = l133;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })())));
                                    })(l134.fvalue(pv, "x", l17.fvalue(pv, (v650 = (function(){
                                        var x1 = v650;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = 1;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return x1+x2;
                                    })()))));
                                    return l3.value;
                                })();
                                (v653 = (function(){
                                    var tmp = v653;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                        return l3.value;
                    })(v648,l3.value);
                })();
                return l134.fvalue(values, "(function(){", (function(){
                    var symbol = l133;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l143.fvalue(pv, v652, (v649)(pv, l66.fvalue(pv, v651))), "})()");
            })(0,l3,"");
        })();
    }));
    return l271;
})();
var l272 = {name: "VARIABLE-ARITY"};
l272;
var l273 = {name: "NUM-OP-NUM"};
(function(){
    (l273).fvalue = (function(v660){
        ((v660)["fname"] = "NUM-OP-NUM");
        return v660;
    })((function (values,v657,v658,v659){
        checkArgs(arguments, 4);
        return (function(){
            return l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, l134.fvalue(pv, "var ", "x", " = ", v657, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l134.fvalue(pv, "var ", "y", " = ", v659, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l134.fvalue(pv, "if (typeof ", "x", " != '", "number", "')", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l134.fvalue(pv, "if (typeof ", "y", " != '", "number", "')", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "throw 'The value ' + ", "y", " + ' is not a type ", "number", ".';", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l134.fvalue(pv, "return ", l134.fvalue(pv, "x", v658, "y"), ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })();
    }));
    return l273;
})();
((l267).value = ({car: l44.fvalue(pv, l61, (function (values){
    var v661= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v661 = {car: arguments[i], cdr: 
    v661};
    return (function(){
        return (l12.fvalue(pv, v661) !== l3.value ? "0" : l271.fvalue(values, v661, (function (values,v662){
            checkArgs(arguments, 2);
            return l134.fvalue(values, "return ", l136.fvalue(pv, v662, "+"), ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })());
        })));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l267).value = ({car: l44.fvalue(pv, l62, (function (values,v664){
    checkArgsAtLeast(arguments, 2);
    var v663= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v663 = {car: arguments[i], cdr: 
    v663};
    return (function(){
        return (function(v665){
            return l271.fvalue(values, v665, (function (values,v666){
                checkArgs(arguments, 2);
                return l134.fvalue(values, "return ", (l12.fvalue(pv, v663) !== l3.value ? l134.fvalue(pv, "-", (function(){
                    var tmp = v666;
                    return tmp === l3.value? l3.value: tmp.car;
                })()) : l136.fvalue(pv, v666, "-")), ";", (function(){
                    var symbol = l133;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
            }));
        })(({car: v664, cdr: v663}));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l267).value = ({car: l44.fvalue(pv, l20, (function (values){
    var v667= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v667 = {car: arguments[i], cdr: 
    v667};
    return (function(){
        return (l12.fvalue(pv, v667) !== l3.value ? "1" : l271.fvalue(values, v667, (function (values,v668){
            checkArgs(arguments, 2);
            return l134.fvalue(values, "return ", l136.fvalue(pv, v668, "*"), ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })());
        })));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l267).value = ({car: l44.fvalue(pv, l21, (function (values,v670){
    checkArgsAtLeast(arguments, 2);
    var v669= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v669 = {car: arguments[i], cdr: 
    v669};
    return (function(){
        return (function(v671){
            return l271.fvalue(values, v671, (function (values,v672){
                checkArgs(arguments, 2);
                return l134.fvalue(values, "return ", (l12.fvalue(pv, v669) !== l3.value ? l134.fvalue(pv, "1 /", (function(){
                    var tmp = v672;
                    return tmp === l3.value? l3.value: tmp.car;
                })()) : l136.fvalue(pv, v672, "/")), ";", (function(){
                    var symbol = l133;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
            }));
        })(({car: v670, cdr: v669}));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l274 = {name: "MOD"};
((l267).value = ({car: l44.fvalue(pv, l274, (function (values,v673,v674){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v675,v676){
            return l273.fvalue(values, v675, "%", v676);
        })(l145.fvalue(pv, v673),l145.fvalue(pv, v674));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l275 = {name: "COMPARISON-CONJUNTION"};
(function(){
    (l275).fvalue = (function(v679){
        ((v679)["fname"] = "COMPARISON-CONJUNTION");
        return v679;
    })((function (values,v677,v678){
        checkArgs(arguments, 3);
        return (function(){
            return (l12.fvalue(pv, (function(){
                var tmp = v677;
                return tmp === l3.value? l3.value: tmp.cdr;
            })()) !== l3.value ? "true" : (l12.fvalue(pv, l35.fvalue(pv, v677)) !== l3.value ? l134.fvalue(values, (function(){
                var tmp = v677;
                return tmp === l3.value? l3.value: tmp.car;
            })(), v678, l33.fvalue(pv, v677)) : l134.fvalue(values, (function(){
                var tmp = v677;
                return tmp === l3.value? l3.value: tmp.car;
            })(), v678, l33.fvalue(pv, v677), " && ", l275.fvalue(pv, (function(){
                var tmp = v677;
                return tmp === l3.value? l3.value: tmp.cdr;
            })(), v678))));
        })();
    }));
    return l275;
})();
var l276 = {name: "DEFINE-BUILTIN-COMPARISON"};
l276;
var l277 = {name: ">"};
((l267).value = ({car: l44.fvalue(pv, l277, (function (values,v681){
    checkArgsAtLeast(arguments, 2);
    var v680= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v680 = {car: arguments[i], cdr: 
    v680};
    return (function(){
        return (function(v682){
            return l271.fvalue(values, v682, (function (values,v683){
                checkArgs(arguments, 2);
                return l134.fvalue(values, "return ", l144.fvalue(pv, l275.fvalue(pv, v683, ">")), ";", (function(){
                    var symbol = l133;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
            }));
        })(({car: v681, cdr: v680}));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l278 = {name: "<"};
((l267).value = ({car: l44.fvalue(pv, l278, (function (values,v685){
    checkArgsAtLeast(arguments, 2);
    var v684= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v684 = {car: arguments[i], cdr: 
    v684};
    return (function(){
        return (function(v686){
            return l271.fvalue(values, v686, (function (values,v687){
                checkArgs(arguments, 2);
                return l134.fvalue(values, "return ", l144.fvalue(pv, l275.fvalue(pv, v687, "<")), ";", (function(){
                    var symbol = l133;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
            }));
        })(({car: v685, cdr: v684}));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l279 = {name: ">="};
((l267).value = ({car: l44.fvalue(pv, l279, (function (values,v689){
    checkArgsAtLeast(arguments, 2);
    var v688= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v688 = {car: arguments[i], cdr: 
    v688};
    return (function(){
        return (function(v690){
            return l271.fvalue(values, v690, (function (values,v691){
                checkArgs(arguments, 2);
                return l134.fvalue(values, "return ", l144.fvalue(pv, l275.fvalue(pv, v691, ">=")), ";", (function(){
                    var symbol = l133;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
            }));
        })(({car: v689, cdr: v688}));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l280 = {name: "<="};
((l267).value = ({car: l44.fvalue(pv, l280, (function (values,v693){
    checkArgsAtLeast(arguments, 2);
    var v692= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v692 = {car: arguments[i], cdr: 
    v692};
    return (function(){
        return (function(v694){
            return l271.fvalue(values, v694, (function (values,v695){
                checkArgs(arguments, 2);
                return l134.fvalue(values, "return ", l144.fvalue(pv, l275.fvalue(pv, v695, "<=")), ";", (function(){
                    var symbol = l133;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
            }));
        })(({car: v693, cdr: v692}));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l267).value = ({car: l44.fvalue(pv, l19, (function (values,v697){
    checkArgsAtLeast(arguments, 2);
    var v696= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v696 = {car: arguments[i], cdr: 
    v696};
    return (function(){
        return (function(v698){
            return l271.fvalue(values, v698, (function (values,v699){
                checkArgs(arguments, 2);
                return l134.fvalue(values, "return ", l144.fvalue(pv, l275.fvalue(pv, v699, "==")), ";", (function(){
                    var symbol = l133;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
            }));
        })(({car: v697, cdr: v696}));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l281 = {name: "NUMBERP"};
((l267).value = ({car: l44.fvalue(pv, l281, (function (values,v700){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v701){
            return l144.fvalue(values, l134.fvalue(pv, "(typeof (", v701, ") == \"number\")"));
        })(l145.fvalue(pv, v700));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l282 = {name: "FLOOR"};
((l267).value = ({car: l44.fvalue(pv, l282, (function (values,v702){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v703){
            return l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, l134.fvalue(pv, "var ", "x", " = ", v703, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l134.fvalue(pv, "if (typeof ", "x", " != '", "number", "')", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l134.fvalue(pv, "return ", "Math.floor(x)", ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })(l145.fvalue(pv, v702));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l267).value = ({car: l44.fvalue(pv, l28, (function (values,v704,v705){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v706,v707){
            return l134.fvalue(values, "({car: ", v706, ", cdr: ", v707, "})");
        })(l145.fvalue(pv, v704),l145.fvalue(pv, v705));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l267).value = ({car: l44.fvalue(pv, l29, (function (values,v708){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v709){
            return l144.fvalue(values, l134.fvalue(pv, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "var tmp = ", v709, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return (typeof tmp == 'object' && 'car' in tmp);", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()"));
        })(l145.fvalue(pv, v708));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l267).value = ({car: l44.fvalue(pv, l30, (function (values,v710){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v711){
            return l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "var tmp = ", v711, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return tmp === ", l145.fvalue(pv, l3.value), "? ", l145.fvalue(pv, l3.value), ": tmp.car;", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
        })(l145.fvalue(pv, v710));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l267).value = ({car: l44.fvalue(pv, l31, (function (values,v712){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v713){
            return l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "var tmp = ", v713, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return tmp === ", l145.fvalue(pv, l3.value), "? ", l145.fvalue(pv, l3.value), ": tmp.cdr;", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
        })(l145.fvalue(pv, v712));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l283 = {name: "RPLACA"};
((l267).value = ({car: l44.fvalue(pv, l283, (function (values,v714,v715){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v716,v717){
            return l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, l134.fvalue(pv, "var ", "x", " = ", v716, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l134.fvalue(pv, "if (typeof ", "x", " != '", "object", "')", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l134.fvalue(pv, "return ", l134.fvalue(pv, "(x.car = ", v717, ", x)"), ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })(l145.fvalue(pv, v714),l145.fvalue(pv, v715));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l284 = {name: "RPLACD"};
((l267).value = ({car: l44.fvalue(pv, l284, (function (values,v718,v719){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v720,v721){
            return l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, l134.fvalue(pv, "var ", "x", " = ", v720, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l134.fvalue(pv, "if (typeof ", "x", " != '", "object", "')", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l134.fvalue(pv, "return ", l134.fvalue(pv, "(x.cdr = ", v721, ", x)"), ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })(l145.fvalue(pv, v718),l145.fvalue(pv, v719));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l285 = {name: "SYMBOLP"};
((l267).value = ({car: l44.fvalue(pv, l285, (function (values,v722){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v723){
            return l144.fvalue(values, l134.fvalue(pv, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "var tmp = ", v723, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return (typeof tmp == 'object' && 'name' in tmp);", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()"));
        })(l145.fvalue(pv, v722));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l286 = {name: "MAKE-SYMBOL"};
((l267).value = ({car: l44.fvalue(pv, l286, (function (values,v724){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v725){
            return l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, l134.fvalue(pv, "var ", "name", " = ", v725, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l134.fvalue(pv, "if (typeof ", "name", " != '", "string", "')", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "throw 'The value ' + ", "name", " + ' is not a type ", "string", ".';", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l134.fvalue(pv, "return ", "({name: name})", ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })(l145.fvalue(pv, v724));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l287 = {name: "SYMBOL-NAME"};
((l267).value = ({car: l44.fvalue(pv, l287, (function (values,v726){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v727){
            return l134.fvalue(values, "(", v727, ").name");
        })(l145.fvalue(pv, v726));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l267).value = ({car: l44.fvalue(pv, l224, (function (values,v728,v729){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v730,v731){
            return l134.fvalue(values, "(", v730, ").value = ", v731);
        })(l145.fvalue(pv, v728),l145.fvalue(pv, v729));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l288 = {name: "FSET"};
((l267).value = ({car: l44.fvalue(pv, l288, (function (values,v732,v733){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v734,v735){
            return l134.fvalue(values, "(", v734, ").fvalue = ", v735);
        })(l145.fvalue(pv, v732),l145.fvalue(pv, v733));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l267).value = ({car: l44.fvalue(pv, l18, (function (values,v736){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v737){
            return l144.fvalue(values, l134.fvalue(pv, "(", v737, ".value !== undefined)"));
        })(l145.fvalue(pv, v736));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l289 = {name: "SYMBOL-VALUE"};
((l267).value = ({car: l44.fvalue(pv, l289, (function (values,v738){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v739){
            return l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "var symbol = ", v739, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "var value = symbol.value;", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "if (value === undefined) throw \"Variable `\" + symbol.name + \"' is unbound.\";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return value;", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
        })(l145.fvalue(pv, v738));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l267).value = ({car: l44.fvalue(pv, l233, (function (values,v740){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v741){
            return l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "var symbol = ", v741, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "var func = symbol.fvalue;", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "if (func === undefined) throw \"Function `\" + symbol.name + \"' is undefined.\";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return func;", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
        })(l145.fvalue(pv, v740));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l290 = {name: "SYMBOL-PLIST"};
((l267).value = ({car: l44.fvalue(pv, l290, (function (values,v742){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v743){
            return l134.fvalue(values, "((", v743, ").plist || ", l145.fvalue(pv, l3.value), ")");
        })(l145.fvalue(pv, v742));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l291 = {name: "LAMBDA-CODE"};
((l267).value = ({car: l44.fvalue(pv, l291, (function (values,v744){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v745){
            return l134.fvalue(values, "(", v745, ").toString()");
        })(l145.fvalue(pv, v744));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l292 = {name: "EQ"};
((l267).value = ({car: l44.fvalue(pv, l292, (function (values,v746,v747){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v748,v749){
            return l144.fvalue(values, l134.fvalue(pv, "(", v748, " === ", v749, ")"));
        })(l145.fvalue(pv, v746),l145.fvalue(pv, v747));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l293 = {name: "EQUAL"};
((l267).value = ({car: l44.fvalue(pv, l293, (function (values,v750,v751){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v752,v753){
            return l144.fvalue(values, l134.fvalue(pv, "(", v752, " == ", v753, ")"));
        })(l145.fvalue(pv, v750),l145.fvalue(pv, v751));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l294 = {name: "CHAR-TO-STRING"};
((l267).value = ({car: l44.fvalue(pv, l294, (function (values,v754){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v755){
            return l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, l134.fvalue(pv, "var ", "x", " = ", v755, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l134.fvalue(pv, "if (typeof ", "x", " != '", "number", "')", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l134.fvalue(pv, "return ", "String.fromCharCode(x)", ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })(l145.fvalue(pv, v754));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l295 = {name: "STRINGP"};
((l267).value = ({car: l44.fvalue(pv, l295, (function (values,v756){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v757){
            return l144.fvalue(values, l134.fvalue(pv, "(typeof(", v757, ") == \"string\")"));
        })(l145.fvalue(pv, v756));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l296 = {name: "STRING-UPCASE"};
((l267).value = ({car: l44.fvalue(pv, l296, (function (values,v758){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v759){
            return l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, l134.fvalue(pv, "var ", "x", " = ", v759, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l134.fvalue(pv, "if (typeof ", "x", " != '", "string", "')", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l134.fvalue(pv, "return ", "x.toUpperCase()", ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })(l145.fvalue(pv, v758));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l297 = {name: "STRING-LENGTH"};
((l267).value = ({car: l44.fvalue(pv, l297, (function (values,v760){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v761){
            return l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, l134.fvalue(pv, "var ", "x", " = ", v761, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l134.fvalue(pv, "if (typeof ", "x", " != '", "string", "')", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l134.fvalue(pv, "return ", "x.length", ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })(l145.fvalue(pv, v760));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l298 = {name: "SLICE"};
((l267).value = ({car: l44.fvalue(pv, l298, (function (values,v762,v763,v764){
    checkArgsAtLeast(arguments, 3);
    checkArgsAtMost(arguments, 4);
    switch(arguments.length-1){
    case 2:
    v764=l3.value;
    default: break;
    }
    return (function(){
        return l134.fvalue(values, "(function(){", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l143.fvalue(pv, "var str = ", l145.fvalue(pv, v762), ";", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "var a = ", l145.fvalue(pv, v763), ";", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "var b;", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), (v764 !== l3.value ? l134.fvalue(pv, "b = ", l145.fvalue(pv, v764), ";", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()) : ""), "return str.slice(a,b);", (function(){
            var symbol = l133;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()), "})()");
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l299 = {name: "CHAR"};
((l267).value = ({car: l44.fvalue(pv, l299, (function (values,v765,v766){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v767,v768){
            return l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, l134.fvalue(pv, "var ", "string", " = ", v767, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l134.fvalue(pv, "var ", "index", " = ", v768, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l134.fvalue(pv, "if (typeof ", "string", " != '", "string", "')", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l134.fvalue(pv, "if (typeof ", "index", " != '", "number", "')", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "throw 'The value ' + ", "index", " + ' is not a type ", "number", ".';", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l134.fvalue(pv, "return ", "string.charCodeAt(index)", ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })(l145.fvalue(pv, v765),l145.fvalue(pv, v766));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l267).value = ({car: l44.fvalue(pv, l72, (function (values,v769,v770){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v771,v772){
            return l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, l134.fvalue(pv, "var ", "string1", " = ", v771, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l134.fvalue(pv, "var ", "string2", " = ", v772, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l134.fvalue(pv, "if (typeof ", "string1", " != '", "string", "')", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "throw 'The value ' + ", "string1", " + ' is not a type ", "string", ".';", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l134.fvalue(pv, "if (typeof ", "string2", " != '", "string", "')", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "throw 'The value ' + ", "string2", " + ' is not a type ", "string", ".';", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l134.fvalue(pv, "return ", "string1.concat(string2)", ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })(l145.fvalue(pv, v769),l145.fvalue(pv, v770));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l300 = {name: "FUNCALL"};
((l267).value = ({car: l44.fvalue(pv, l300, (function (values,v774){
    checkArgsAtLeast(arguments, 2);
    var v773= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v773 = {car: arguments[i], cdr: 
    v773};
    return (function(){
        return l134.fvalue(values, "(", l145.fvalue(pv, v774), ")(", l136.fvalue(pv, ({car: ((function(){
            var symbol = l172;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })() !== l3.value ? "values" : "pv"), cdr: l73.fvalue(pv, (function(){
            var symbol = l145;
            var func = symbol.fvalue;
            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
            return func;
        })(), v773)}), ", "), ")");
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l301 = {name: "APPLY"};
((l267).value = ({car: l44.fvalue(pv, l301, (function (values,v776){
    checkArgsAtLeast(arguments, 2);
    var v775= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v775 = {car: arguments[i], cdr: 
    v775};
    return (function(){
        return (l12.fvalue(pv, v775) !== l3.value ? l134.fvalue(values, "(", l145.fvalue(pv, v776), ")()") : (function(v777,v778){
            return l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "var f = ", l145.fvalue(pv, v776), ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "var args = [", l136.fvalue(pv, ({car: ((function(){
                var symbol = l172;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })() !== l3.value ? "values" : "pv"), cdr: l73.fvalue(pv, (function(){
                var symbol = l145;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), v777)}), ", "), "];", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "var tail = (", l145.fvalue(pv, v778), ");", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "while (tail != ", l145.fvalue(pv, l3.value), "){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "    args.push(tail.car);", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "    tail = tail.cdr;", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "}", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return f.apply(this, args);", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
        })(l87.fvalue(pv, v775),(function(){
            var tmp = l86.fvalue(pv, v775);
            return tmp === l3.value? l3.value: tmp.car;
        })()));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l302 = {name: "JS-EVAL"};
((l267).value = ({car: l44.fvalue(pv, l302, (function (values,v779){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v780){
            return l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, l134.fvalue(pv, "var ", "string", " = ", v780, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l134.fvalue(pv, "if (typeof ", "string", " != '", "string", "')", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l134.fvalue(pv, "return ", ((function(){
                var symbol = l172;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })() !== l3.value ? l134.fvalue(pv, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "var v = eval.apply(window, [string]);", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "if (typeof v !== 'object' || !('multiple-value' in v)){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "v = [v];", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "v['multiple-value'] = true;", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "}", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return values.apply(this, v);", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()") : "eval.apply(window, [string])"), ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })(l145.fvalue(pv, v779));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l303 = {name: "ERROR"};
((l267).value = ({car: l44.fvalue(pv, l303, (function (values,v781){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v782){
            return l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "throw ", v782, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
        })(l145.fvalue(pv, v781));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l304 = {name: "NEW"};
((l267).value = ({car: l44.fvalue(pv, l304, (function (values){
    checkArgsAtMost(arguments, 1);
    return (function(){
        return (function(){
            return "{}";
        })();
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l305 = {name: "OBJECTP"};
((l267).value = ({car: l44.fvalue(pv, l305, (function (values,v783){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v784){
            return l144.fvalue(values, l134.fvalue(pv, "(typeof (", v784, ") === 'object')"));
        })(l145.fvalue(pv, v783));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l306 = {name: "OGET"};
((l267).value = ({car: l44.fvalue(pv, l306, (function (values,v785,v786){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v787,v788){
            return l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "var tmp = ", "(", v787, ")[", v788, "];", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return tmp == undefined? ", l145.fvalue(pv, l3.value), ": tmp ;", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
        })(l145.fvalue(pv, v785),l145.fvalue(pv, v786));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l307 = {name: "OSET"};
((l267).value = ({car: l44.fvalue(pv, l307, (function (values,v789,v790,v791){
    checkArgs(arguments, 4);
    return (function(){
        return (function(v792,v793,v794){
            return l134.fvalue(values, "((", v792, ")[", v793, "] = ", v794, ")");
        })(l145.fvalue(pv, v789),l145.fvalue(pv, v790),l145.fvalue(pv, v791));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l308 = {name: "IN"};
((l267).value = ({car: l44.fvalue(pv, l308, (function (values,v795,v796){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v797,v798){
            return l144.fvalue(values, l134.fvalue(pv, "((", v797, ") in (", v798, "))"));
        })(l145.fvalue(pv, v795),l145.fvalue(pv, v796));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l309 = {name: "FUNCTIONP"};
((l267).value = ({car: l44.fvalue(pv, l309, (function (values,v799){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v800){
            return l144.fvalue(values, l134.fvalue(pv, "(typeof ", v800, " == 'function')"));
        })(l145.fvalue(pv, v799));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l310 = {name: "WRITE-STRING"};
((l267).value = ({car: l44.fvalue(pv, l310, (function (values,v801){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v802){
            return l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, l134.fvalue(pv, "var ", "x", " = ", v802, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l134.fvalue(pv, "if (typeof ", "x", " != '", "string", "')", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l134.fvalue(pv, "return ", "lisp.write(x)", ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })(l145.fvalue(pv, v801));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l311 = {name: "MAKE-ARRAY"};
((l267).value = ({car: l44.fvalue(pv, l311, (function (values,v803){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v804){
            return l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "var r = [];", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "for (var i = 0; i < ", v804, "; i++)", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "r.push(", l145.fvalue(pv, l3.value), ");", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "return r;", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
        })(l145.fvalue(pv, v803));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l312 = {name: "ARRAYP"};
((l267).value = ({car: l44.fvalue(pv, l312, (function (values,v805){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v806){
            return l144.fvalue(values, l134.fvalue(pv, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "var x = ", v806, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return typeof x === 'object' && 'length' in x;"), "})()"));
        })(l145.fvalue(pv, v805));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l313 = {name: "AREF"};
((l267).value = ({car: l44.fvalue(pv, l313, (function (values,v807,v808){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v809,v810){
            return l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "var x = ", "(", v809, ")[", v810, "];", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "if (x === undefined) throw 'Out of range';", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return x;", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
        })(l145.fvalue(pv, v807),l145.fvalue(pv, v808));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l314 = {name: "ASET"};
((l267).value = ({car: l44.fvalue(pv, l314, (function (values,v811,v812,v813){
    checkArgs(arguments, 4);
    return (function(){
        return (function(v814,v815,v816){
            return l134.fvalue(values, "(function(){", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l143.fvalue(pv, "var x = ", v814, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "var i = ", v815, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "if (i < 0 || i >= x.length) throw 'Out of range';", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return x[i] = ", v816, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
        })(l145.fvalue(pv, v811),l145.fvalue(pv, v812),l145.fvalue(pv, v813));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l315 = {name: "GET-UNIX-TIME"};
((l267).value = ({car: l44.fvalue(pv, l315, (function (values){
    checkArgsAtMost(arguments, 1);
    return (function(){
        return (function(){
            return l134.fvalue(values, "(Math.round(new Date() / 1000))");
        })();
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l316 = {name: "VALUES-ARRAY"};
((l267).value = ({car: l44.fvalue(pv, l316, (function (values,v817){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v818){
            return ((function(){
                var symbol = l172;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })() !== l3.value ? l134.fvalue(values, "values.apply(this, ", v818, ")") : l134.fvalue(values, "pv.apply(this, ", v818, ")"));
        })(l145.fvalue(pv, v817));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l267).value = ({car: l44.fvalue(pv, l142, (function (values){
    var v819= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v819 = {car: arguments[i], cdr: 
    v819};
    return (function(){
        return ((function(){
            var symbol = l172;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })() !== l3.value ? l134.fvalue(values, "values(", l136.fvalue(pv, l73.fvalue(pv, (function(){
            var symbol = l145;
            var func = symbol.fvalue;
            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
            return func;
        })(), v819), ", "), ")") : l134.fvalue(values, "pv(", l136.fvalue(pv, l73.fvalue(pv, (function(){
            var symbol = l145;
            var func = symbol.fvalue;
            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
            return func;
        })(), v819), ", "), ")"));
    })();
})), cdr: (function(){
    var symbol = l267;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
(function(){
    (l198).fvalue = (function(v822){
        ((v822)["fname"] = "MACRO");
        return v822;
    })((function (values,v820){
        checkArgs(arguments, 2);
        return (function(){
            return (((function(){
                var tmp = v820;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?l4.value: l3.value) !== l3.value ? (function(v821){
                return (((l175.fvalue(pv, v821) === l198)?l4.value: l3.value) !== l3.value ? v821 : l3.value);
            })(l187.fvalue(pv, v820, (function(){
                var symbol = l188;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l104)) : l3.value);
        })();
    }));
    return l198;
})();
var l317 = {name: "LS-MACROEXPAND-1"};
(function(){
    (l317).fvalue = (function(v827){
        ((v827)["fname"] = "LS-MACROEXPAND-1");
        return v827;
    })((function (values,v823){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v824){
                return (v824 !== l3.value ? (function(v825){
                    (l59.fvalue(pv, v825) !== l3.value ? (function(v826){
                        l178.fvalue(pv, v824, v826);
                        return (v825 = v826);
                    })(l242.fvalue(pv, v825)) : l3.value);
                    return (function(){
                        var f = v825;
                        var args = [values];
                        var tail = ((function(){
                            var tmp = v823;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                        while (tail != l3.value){
                            args.push(tail.car);
                            tail = tail.cdr;
                        }
                        return f.apply(this, args);
                    })();
                })(l176.fvalue(pv, v824)) : v823);
            })(l198.fvalue(pv, (function(){
                var tmp = v823;
                return tmp === l3.value? l3.value: tmp.car;
            })()));
        })();
    }));
    return l317;
})();
var l318 = {name: "COMPILE-FUNCALL"};
var l319 = {name: "G902"};
(function(){
    (l318).fvalue = (function(v832){
        ((v832)["fname"] = "COMPILE-FUNCALL");
        return v832;
    })((function (values,v828,v829){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                var v830 = ((function(){
                    var symbol = l172;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() !== l3.value ? "values" : "pv");
                var v831 = l134.fvalue(pv, "(", l136.fvalue(pv, ({car: v830, cdr: l73.fvalue(pv, (function(){
                    var symbol = l145;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v829)}), ", "), ")");
                return (l236.fvalue(pv, v828) !== l3.value ? l134.fvalue(values, l236.fvalue(pv, v828), v831) : ((((function(){
                    var tmp = v828;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (((l122.fvalue(pv, v828) === l113.fvalue(pv, "COMMON-LISP"))?l4.value: l3.value) !== l3.value ? (function(){
                    var symbol = l319;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() : l3.value) : l3.value) !== l3.value ? l134.fvalue(values, l145.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l167), l44.fvalue(pv, v828))), ".fvalue", v831) : l134.fvalue(values, l145.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l104), l44.fvalue(pv, v828))), v831)));
            })();
        })();
    }));
    return l318;
})();
(function(){
    (l222).fvalue = (function(v835){
        ((v835)["fname"] = "LS-COMPILE-BLOCK");
        return v835;
    })((function (values,v833,v834){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v834=l3.value;
        default: break;
        }
        return (function(){
            return (v834 !== l3.value ? l134.fvalue(values, l222.fvalue(pv, l87.fvalue(pv, v833)), "return ", l145.fvalue(pv, (function(){
                var tmp = l86.fvalue(pv, v833);
                return tmp === l3.value? l3.value: tmp.car;
            })(), (function(){
                var symbol = l172;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), ";") : l137.fvalue(values, l90.fvalue(pv, (function(){
                var symbol = l195;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), l73.fvalue(pv, (function(){
                var symbol = l145;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), v833)), l134.fvalue(pv, ";", (function(){
                var symbol = l133;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())));
        })();
    }));
    return l222;
})();
(function(){
    (l145).fvalue = (function(v845){
        ((v845)["fname"] = "LS-COMPILE");
        return v845;
    })((function (values,v836,v837){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v837=l3.value;
        default: break;
        }
        return (function(){
            return (function(v838){
                try {
                    var tmp;
                    tmp = l172.value;
                    l172.value = v838;
                    v838 = tmp;
                    return (((function(){
                        var tmp = v836;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(v839){
                        return ((v839 !== l3.value ? l27.fvalue(pv, l88.fvalue(pv, l202, l177.fvalue(pv, v839))) : l3.value) !== l3.value ? l176.fvalue(values, v839) : ((function(v840){
                            return (v840 !== l3.value ? v840 : l88.fvalue(pv, l204, l177.fvalue(pv, v839)));
                        })(l121.fvalue(pv, v836)) !== l3.value ? l134.fvalue(values, l145.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l167), l44.fvalue(pv, v836))), ".value") : l145.fvalue(values, l64.fvalue(pv, l44.fvalue(pv, l289), l44.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l167), l44.fvalue(pv, v836)))))));
                    })(l187.fvalue(pv, v836, (function(){
                        var symbol = l188;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l105)) : (l81.fvalue(pv, v836) !== l3.value ? l17.fvalue(values, v836) : (((typeof(v836) == "string")?l4.value: l3.value) !== l3.value ? l134.fvalue(values, "\"", l148.fvalue(pv, v836), "\"") : (((function(){
                        var x = v836;
                        return typeof x === 'object' && 'length' in x;
                    })()?l4.value: l3.value) !== l3.value ? l231.fvalue(values, v836) : (l59.fvalue(pv, v836) !== l3.value ? (function(v841,v842){
                        return (l97.fvalue(pv, v841, (function(){
                            var symbol = l206;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()) !== l3.value ? (function(v843){
                            return (function(){
                                var f = v843;
                                var args = [values];
                                var tail = (v842);
                                while (tail != l3.value){
                                    args.push(tail.car);
                                    tail = tail.cdr;
                                }
                                return f.apply(this, args);
                            })();
                        })(l40.fvalue(pv, l97.fvalue(pv, v841, (function(){
                            var symbol = l206;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()))) : ((l97.fvalue(pv, v841, (function(){
                            var symbol = l267;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()) !== l3.value ? l27.fvalue(pv, l200.fvalue(pv, v841, l104, l203)) : l3.value) !== l3.value ? (function(v844){
                            return (function(){
                                var f = v844;
                                var args = [values];
                                var tail = (v842);
                                while (tail != l3.value){
                                    args.push(tail.car);
                                    tail = tail.cdr;
                                }
                                return f.apply(this, args);
                            })();
                        })(l40.fvalue(pv, l97.fvalue(pv, v841, (function(){
                            var symbol = l267;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()))) : (l198.fvalue(pv, v841) !== l3.value ? l145.fvalue(values, l317.fvalue(pv, v836), v837) : l318.fvalue(values, v841, v842))));
                    })((function(){
                        var tmp = v836;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(),(function(){
                        var tmp = v836;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()) : (function(){
                        throw "How should I compile this?";
                    })())))));
                }
                finally {
                    l172.value = v838;
                }
            })(v837);
        })();
    }));
    return l145;
})();
var l320 = {name: "LS-COMPILE-TOPLEVEL"};
(function(){
    (l320).fvalue = (function(v852){
        ((v852)["fname"] = "LS-COMPILE-TOPLEVEL");
        return v852;
    })((function (values,v846,v847){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v847=l3.value;
        default: break;
        }
        return (function(){
            return (function(v848){
                try {
                    var tmp;
                    tmp = l193.value;
                    l193.value = v848;
                    v848 = tmp;
                    return ((((function(){
                        var tmp = v846;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (((function(){
                        var tmp = v846;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l241)?l4.value: l3.value) : l3.value) !== l3.value ? (function(v850){
                        return l136.fvalue(values, l90.fvalue(pv, (function(){
                            var symbol = l195;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v850));
                    })(l73.fvalue(pv, (function (values,v849){
                        checkArgs(arguments, 2);
                        return l320.fvalue(values, v849, l4.value);
                    }), (function(){
                        var tmp = v846;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())) : (function(v851){
                        return l134.fvalue(values, l137.fvalue(pv, l196.fvalue(pv), l134.fvalue(pv, ";", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (v851 !== l3.value ? l134.fvalue(pv, v851, ";", (function(){
                            var symbol = l133;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()) : ""));
                    })(l145.fvalue(pv, v846, v847)));
                }
                finally {
                    l193.value = v848;
                }
            })(l3.value);
        })();
    }));
    return l320;
})();
(function(){
    (l242).fvalue = (function(v854){
        ((v854)["fname"] = "EVAL");
        return v854;
    })((function (values,v853){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var string = l320.fvalue(pv, v853, l4.value);
                if (typeof string != 'string')
                    throw 'The value ' + string + ' is not a type string.';
                return (function(){
                    var v = eval.apply(window, [string]);
                    if (typeof v !== 'object' || !('multiple-value' in v)){
                        v = [v];
                        v['multiple-value'] = true;
                    }
                    return values.apply(this, v);
                })();
            })();
        })();
    }));
    return l242;
})();
var l321 = {name: "&BODY"};
var l322 = QIList(l211,l210,l321,l20,l15,l123,l61,l62,l21,l22,l23,l278,l280,l19,l19,l277,l279,l54,l64,l301,l313,l312,l314,l97,l45,l184,l18,l18,l87,l32,l38,l36,l33,l30,l30,l52,l254,l34,l37,l35,l31,l31,l299,l79,l80,l78,l51,l28,l29,l76,l77,l47,l2,l9,l11,l1,l8,l93,l92,l101,l68,l69,l103,l49,l50,l53,l292,l26,l293,l303,l242,l96,l131,l100,l113,l126,l39,l237,l42,l288,l300,l104,l309,l16,l132,l261,l75,l208,l124,l46,l81,l81,l130,l121,l238,l5,l86,l71,l246,l249,l109,l44,l59,l311,l110,l286,l73,l88,l83,l274,l106,l263,l107,l264,l3,l27,l85,l84,l12,l281,l55,l114,l116,l112,l165,l82,l147,l150,l205,l56,l57,l241,l67,l48,l167,l89,l90,l91,l13,l253,l65,l66,l283,l284,l40,l224,l225,l95,l296,l98,l99,l295,l94,l233,l287,l122,l290,l289,l285,l4,l260,l41,l255,l25,l7,l262,l142,l141,l105,l149,l6,l102,l310,l24,l3);
l131.fvalue(values, l322);
((l123).value = (function(){
    var symbol = l119;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})());
(function(){
    var string = "var lisp";
    if (typeof string != 'string')
        throw 'The value ' + string + ' is not a type string.';
    return (function(){
        var v = eval.apply(window, [string]);
        if (typeof v !== 'object' || !('multiple-value' in v)){
            v = [v];
            v['multiple-value'] = true;
        }
        return values.apply(this, v);
    })();
})();
(lisp = {});
(lisp.read = (function(){
    var symbol = l171;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.print = (function(){
    var symbol = l147;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.eval = (function(){
    var symbol = l242;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.compile = (function (values,v855){
    checkArgs(arguments, 2);
    return l320.fvalue(values, v855, l4.value);
}));
(lisp.evalString = (function (values,v856){
    checkArgs(arguments, 2);
    return l242.fvalue(values, l171.fvalue(pv, v856));
}));
(lisp.compileString = (function (values,v857){
    checkArgs(arguments, 2);
    return l320.fvalue(values, l171.fvalue(pv, v857), l4.value);
}));
var l323 = QIList(QIList(l321,"l321"),QIList(l320,"l320"),QIList(l319,"l319"),QIList(l318,"l318"),QIList(l317,"l317"),QIList(l316,"l316"),QIList(l315,"l315"),QIList(l314,"l314"),QIList(l313,"l313"),QIList(l312,"l312"),QIList(l311,"l311"),QIList(l310,"l310"),QIList(l309,"l309"),QIList(l308,"l308"),QIList(l307,"l307"),QIList(l306,"l306"),QIList(l305,"l305"),QIList(l304,"l304"),QIList(l303,"l303"),QIList(l302,"l302"),QIList(l301,"l301"),QIList(l300,"l300"),QIList(l299,"l299"),QIList(l298,"l298"),QIList(l297,"l297"),QIList(l296,"l296"),QIList(l295,"l295"),QIList(l294,"l294"),QIList(l293,"l293"),QIList(l292,"l292"),QIList(l291,"l291"),QIList(l290,"l290"),QIList(l289,"l289"),QIList(l288,"l288"),QIList(l287,"l287"),QIList(l286,"l286"),QIList(l285,"l285"),QIList(l284,"l284"),QIList(l283,"l283"),QIList(l282,"l282"),QIList(l281,"l281"),QIList(l280,"l280"),QIList(l279,"l279"),QIList(l278,"l278"),QIList(l277,"l277"),QIList(l276,"l276"),QIList(l275,"l275"),QIList(l274,"l274"),QIList(l273,"l273"),QIList(l272,"l272"),QIList(l271,"l271"),QIList(l270,"l270"),QIList(l269,"l269"),QIList(l268,"l268"),QIList(l267,"l267"),QIList(l266,"l266"),QIList(l265,"l265"),QIList(l264,"l264"),QIList(l263,"l263"),QIList(l262,"l262"),QIList(l261,"l261"),QIList(l260,"l260"),QIList(l259,"l259"),QIList(l258,"l258"),QIList(l257,"l257"),QIList(l256,"l256"),QIList(l255,"l255"),QIList(l254,"l254"),QIList(l253,"l253"),QIList(l252,"l252"),QIList(l251,"l251"),QIList(l250,"l250"),QIList(l249,"l249"),QIList(l248,"l248"),QIList(l247,"l247"),QIList(l246,"l246"),QIList(l245,"l245"),QIList(l244,"l244"),QIList(l243,"l243"),QIList(l242,"l242"),QIList(l241,"l241"),QIList(l240,"l240"),QIList(l239,"l239"),QIList(l238,"l238"),QIList(l237,"l237"),QIList(l236,"l236"),QIList(l235,"l235"),QIList(l234,"l234"),QIList(l233,"l233"),QIList(l232,"l232"),QIList(l231,"l231"),QIList(l230,"l230"),QIList(l229,"l229"),QIList(l228,"l228"),QIList(l227,"l227"),QIList(l226,"l226"),QIList(l225,"l225"),QIList(l224,"l224"),QIList(l223,"l223"),QIList(l222,"l222"),QIList(l221,"l221"),QIList(l220,"l220"),QIList(l219,"l219"),QIList(l218,"l218"),QIList(l217,"l217"),QIList(l216,"l216"),QIList(l215,"l215"),QIList(l214,"l214"),QIList(l213,"l213"),QIList(l211,"l211"),QIList(l210,"l210"),QIList(l209,"l209"),QIList(l208,"l208"),QIList(l207,"l207"),QIList(l206,"l206"),QIList(l205,"l205"),QIList(l204,"l204"),QIList(l203,"l203"),QIList(l202,"l202"),QIList(l201,"l201"),QIList(l200,"l200"),QIList(l199,"l199"),QIList(l198,"l198"),QIList(l197,"l197"),QIList(l196,"l196"),QIList(l195,"l195"),QIList(l194,"l194"),QIList(l193,"l193"),QIList(l192,"l192"),QIList(l191,"l191"),QIList(l190,"l190"),QIList(l189,"l189"),QIList(l188,"l188"),QIList(l187,"l187"),QIList(l186,"l186"),QIList(l185,"l185"),QIList(l184,"l184"),QIList(l183,"l183"),QIList(l182,"l182"),QIList(l181,"l181"),QIList(l180,"l180"),QIList(l179,"l179"),QIList(l178,"l178"),QIList(l177,"l177"),QIList(l176,"l176"),QIList(l175,"l175"),QIList(l174,"l174"),QIList(l173,"l173"),QIList(l172,"l172"),QIList(l171,"l171"),QIList(l170,"l170"),QIList(l169,"l169"),QIList(l168,"l168"),QIList(l167,"l167"),QIList(l166,"l166"),QIList(l165,"l165"),QIList(l164,"l164"),QIList(l163,"l163"),QIList(l162,"l162"),QIList(l161,"l161"),QIList(l160,"l160"),QIList(l159,"l159"),QIList(l158,"l158"),QIList(l157,"l157"),QIList(l156,"l156"),QIList(l155,"l155"),QIList(l154,"l154"),QIList(l153,"l153"),QIList(l152,"l152"),QIList(l151,"l151"),QIList(l150,"l150"),QIList(l149,"l149"),QIList(l148,"l148"),QIList(l147,"l147"),QIList(l146,"l146"),QIList(l145,"l145"),QIList(l144,"l144"),QIList(l143,"l143"),QIList(l142,"l142"),QIList(l141,"l141"),QIList(l140,"l140"),QIList(l139,"l139"),QIList(l138,"l138"),QIList(l137,"l137"),QIList(l136,"l136"),QIList(l135,"l135"),QIList(l134,"l134"),QIList(l133,"l133"),QIList(l132,"l132"),QIList(l131,"l131"),QIList(l130,"l130"),QIList(l129,"l129"),QIList(l128,"l128"),QIList(l127,"l127"),QIList(l126,"l126"),QIList(l125,"l125"),QIList(l124,"l124"),QIList(l123,"l123"),QIList(l122,"l122"),QIList(l121,"l121"),QIList(l120,"l120"),QIList(l119,"l119"),QIList(l118,"l118"),QIList(l117,"l117"),QIList(l116,"l116"),QIList(l115,"l115"),QIList(l114,"l114"),QIList(l113,"l113"),QIList(l112,"l112"),QIList(l111,"l111"),QIList(l110,"l110"),QIList(l109,"l109"),QIList(l108,"l108"),QIList(l107,"l107"),QIList(l106,"l106"),QIList(l105,"l105"),QIList(l104,"l104"),QIList(l103,"l103"),QIList(l102,"l102"),QIList(l101,"l101"),QIList(l100,"l100"),QIList(l99,"l99"),QIList(l98,"l98"),QIList(l97,"l97"),QIList(l96,"l96"),QIList(l95,"l95"),QIList(l94,"l94"),QIList(l93,"l93"),QIList(l92,"l92"),QIList(l91,"l91"),QIList(l90,"l90"),QIList(l89,"l89"),QIList(l88,"l88"),QIList(l87,"l87"),QIList(l86,"l86"),QIList(l85,"l85"),QIList(l84,"l84"),QIList(l83,"l83"),QIList(l82,"l82"),QIList(l81,"l81"),QIList(l80,"l80"),QIList(l79,"l79"),QIList(l78,"l78"),QIList(l77,"l77"),QIList(l76,"l76"),QIList(l75,"l75"),QIList(l74,"l74"),QIList(l73,"l73"),QIList(l72,"l72"),QIList(l71,"l71"),QIList(l70,"l70"),QIList(l69,"l69"),QIList(l68,"l68"),QIList(l67,"l67"),QIList(l66,"l66"),QIList(l65,"l65"),QIList(l64,"l64"),QIList(l63,"l63"),QIList(l62,"l62"),QIList(l61,"l61"),QIList(l60,"l60"),QIList(l59,"l59"),QIList(l58,"l58"),QIList(l57,"l57"),QIList(l56,"l56"),QIList(l55,"l55"),QIList(l54,"l54"),QIList(l53,"l53"),QIList(l52,"l52"),QIList(l51,"l51"),QIList(l50,"l50"),QIList(l49,"l49"),QIList(l48,"l48"),QIList(l47,"l47"),QIList(l46,"l46"),QIList(l45,"l45"),QIList(l44,"l44"),QIList(l43,"l43"),QIList(l42,"l42"),QIList(l41,"l41"),QIList(l40,"l40"),QIList(l39,"l39"),QIList(l38,"l38"),QIList(l37,"l37"),QIList(l36,"l36"),QIList(l35,"l35"),QIList(l34,"l34"),QIList(l33,"l33"),QIList(l32,"l32"),QIList(l31,"l31"),QIList(l30,"l30"),QIList(l29,"l29"),QIList(l28,"l28"),QIList(l27,"l27"),QIList(l26,"l26"),QIList(l25,"l25"),QIList(l24,"l24"),QIList(l23,"l23"),QIList(l22,"l22"),QIList(l21,"l21"),QIList(l20,"l20"),QIList(l19,"l19"),QIList(l18,"l18"),QIList(l17,"l17"),QIList(l16,"l16"),QIList(l15,"l15"),QIList(l14,"l14"),QIList(l13,"l13"),QIList(l12,"l12"),QIList(l11,"l11"),QIList(l10,"l10"),QIList(l9,"l9"),QIList(l8,"l8"),QIList(l7,"l7"),QIList(l6,"l6"),QIList(l5,"l5"),QIList(l4,"l4"),QIList(l3,"l3"),QIList(l2,"l2"),QIList(l1,"l1"),l3);
var l324 = {name: "OP"};
var l325 = {name: "SYM"};
var l326 = {name: "X"};
var l327 = {name: "ARGS"};
var l328 = {name: "BODY"};
var l329 = {name: "DECLS"};
var l330 = {name: "DECL"};
var l331 = {name: "NAME"};
var l332 = {name: "ARG"};
var l333 = {name: "FORM"};
var l334 = {name: "PACKAGE-DESIGNATOR"};
var l335 = {name: "VALUE-FROM"};
var l336 = {name: "VARIABLES"};
var l337 = {name: "VARLIST"};
var l338 = {name: "ENDLIST"};
var l339 = {name: "V"};
var l340 = {name: "PAIRS"};
var l341 = {name: "ASSIGNMENTS"};
var l342 = {name: "VALUE"};
var l343 = {name: "FORM1"};
var l344 = {name: "RESULT"};
var l345 = {name: "FORMS"};
var l346 = {name: "G"};
var l347 = {name: "CLAUSULES"};
var l348 = {name: "!FORM"};
var l349 = {name: "CLAUSULE"};
var l350 = {name: "ITER"};
var l351 = {name: "G!TO"};
var l352 = {name: "VAR"};
var l353 = {name: "TO"};
var l354 = {name: "G!LIST"};
var l355 = {name: "PLACE"};
var l356 = {name: "DELTA"};
var l357 = {name: "CONDITION"};
var l358 = {name: "DOCSTRING"};
var l359 = QIList(QIList(QIList(l267,l105,l3,QIList(l202,l3),l3),QIList(l257,l105,l3,QIList(l202,l3),l3),QIList(l256,l105,l3,QIList(l202,l3),l3),QIList(l250,l105,l3,QIList(l202,l3),l3),QIList(l239,l105,l3,QIList(l202,l3),l3),QIList(l229,l105,l3,QIList(l202,l3),l3),QIList(l228,l105,l3,QIList(l202,l3),l3),QIList(l209,l105,l3,QIList(l202,l3),l3),QIList(l206,l105,l3,QIList(l202,l3),l3),QIList(l193,l105,l3,QIList(l202,l3),l3),QIList(l189,l105,l3,QIList(l202,l3),l3),QIList(l188,l105,l3,QIList(l202,l3),l3),QIList(l172,l105,l3,QIList(l202,l3),l3),QIList(l166,l105,l3,QIList(l202,l3),l3),QIList(l133,l105,l3,QIList(l202,l3),l3),QIList(l123,l105,l3,QIList(l202,l3),l3),QIList(l120,l105,l3,QIList(l202,l3),l3),QIList(l119,l105,l3,QIList(l202,l3),l3),QIList(l118,l105,l3,QIList(l202,l3),l3),QIList(l108,l105,l3,QIList(l202,l3),l3),QIList(l15,l105,l3,QIList(l202,l3),l3),QIList(l4,l105,l3,QIList(l202,l204,l3),l3),QIList(l3,l105,l3,QIList(l202,l204,l3),l3),l3),QIList(QIList(l276,l198,QIList(l104,QIList(l5,QIList(l324,l325,l3),QIList(l168,QIList(l268,QIList(l170,l324,l3),QIList(l326,l211,l327,l3),QIList(l246,QIList(QIList(l327,QIList(l28,l326,l327,l3),l3),l3),QIList(l272,l327,QIList(l144,QIList(l275,l327,QIList(l170,l325,l3),l3),l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l272,l198,QIList(l104,QIList(l5,QIList(l327,l211,l328,l3),QIList(l7,QIList(l285,l327,l3),QIList(l303,"Bad usage of VARIABLE-ARITY, you must pass a symbol",l3),l3),QIList(l168,QIList(l271,QIList(l170,l327,l3),QIList(l5,QIList(QIList(l170,l327,l3),l3),QIList(l134,"return ",QIList(l169,l328,l3),";",l133,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l270,l198,QIList(l104,QIList(l5,QIList(l329,l211,l328,l3),QIList(l168,QIList(l146,QIList(l169,QIList(l73,QIList(l5,QIList(l330,l3),QIList(l168,QIList(l134,"var ",QIList(l170,QIList(l39,l330,l3),l3)," = ",QIList(l170,QIList(l41,l330,l3),l3),";",l133,l3),l3),l3),l329,l3),l3),QIList(l169,QIList(l73,QIList(l5,QIList(l330,l3),QIList(l168,QIList(l134,"if (typeof ",QIList(l170,QIList(l39,l330,l3),l3)," != '",QIList(l170,QIList(l40,l330,l3),l3),"')",l133,QIList(l143,"throw 'The value ' + ",QIList(l170,QIList(l39,l330,l3),l3)," + ' is not a type ",QIList(l170,QIList(l40,l330,l3),l3),".';",l133,l3),l3),l3),l3),l329,l3),l3),QIList(l134,"return ",QIList(l241,QIList(l169,l328,l3),l3),";",l133,l3),l3),l3),l3),l3),l3,l3),QIList(l269,l198,QIList(l104,QIList(l5,QIList(l331,l327,l211,l328,l3),QIList(l168,QIList(l241,QIList(l268,QIList(l170,l331,l3),QIList(l170,l327,l3),QIList(l246,QIList(l170,QIList(l73,QIList(l5,QIList(l332,l3),QIList(l168,QIList(QIList(l170,l332,l3),QIList(l145,QIList(l170,l332,l3),l3),l3),l3),l3),l327,l3),l3),QIList(l169,l328,l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l268,l198,QIList(l104,QIList(l5,QIList(l331,l327,l211,l328,l3),QIList(l168,QIList(l48,QIList(l44,QIList(l167,QIList(l170,l331,l3),l3),QIList(l5,QIList(l170,l327,l3),QIList(l184,QIList(l170,l331,l3),QIList(l169,l328,l3),l3),l3),l3),l267,l3),l3),l3),l3),l3,l3),QIList(l168,l198,QIList(l104,QIList(l5,QIList(l333,l3),QIList(l265,l333,l3),l3),l3),l3,l3),QIList(l243,l198,QIList(l104,QIList(l5,QIList(l331,l327,l333,l3),QIList(l168,QIList(l207,QIList(l170,l331,l3),QIList(l170,l327,l3),QIList(l145,QIList(l170,l333,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l207,l198,QIList(l104,QIList(l5,QIList(l331,l327,l211,l328,l3),QIList(l168,QIList(l48,QIList(l44,QIList(l167,QIList(l170,l331,l3),l3),QIList(l5,QIList(l170,l327,l3),QIList(l184,QIList(l170,l331,l3),QIList(l169,l328,l3),l3),l3),l3),l206,l3),l3),l3),l3),l3,l3),QIList(l146,l198,QIList(l104,QIList(l5,QIList(l211,l328,l3),QIList(l168,QIList(l134,"(function(){",l133,QIList(l143,QIList(l169,l328,l3),l3),"})()",l3),l3),l3),l3),l3,l3),QIList(l135,l198,QIList(l104,QIList(l5,QIList(l105,l211,l333,l3),QIList(l168,QIList(l225,QIList(l170,l105,l3),QIList(l134,QIList(l170,l105,l3),QIList(l241,QIList(l169,l333,l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l124,l198,QIList(l104,QIList(l5,QIList(l334,l3),QIList(l168,QIList(l240,QIList(l225,l123,QIList(l111,QIList(l170,l334,l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l107,l198,QIList(l104,QIList(l5,QIList(l335,l3),QIList(l168,QIList(l263,QIList(l104,l44,l3),QIList(l170,l335,l3),l3),l3),l3),l3),l3,l3),QIList(l106,l198,QIList(l104,QIList(l5,QIList(l336,l335,l211,l328,l3),QIList(l168,QIList(l263,QIList(l5,QIList(l210,QIList(l169,l336,l3),l211,QIList(l170,QIList(l16,l3),l3),l3),QIList(l169,l328,l3),l3),QIList(l170,l335,l3),l3),l3),l3),l3),l3,l3),QIList(l69,l198,QIList(l104,QIList(l5,QIList(l337,l338,l211,l328,l3),QIList(l168,QIList(l184,l3,QIList(l249,QIList(l170,QIList(l73,QIList(l5,QIList(l326,l3),QIList(l44,QIList(l39,l326,l3),QIList(l40,l326,l3),l3),l3),l337,l3),l3),QIList(l14,l4,QIList(l6,QIList(l170,QIList(l30,l338,l3),l3),QIList(l13,QIList(l241,QIList(l170,QIList(l31,l338,l3),l3),l3),l3),l3),QIList(l260,QIList(l169,l328,l3),l3),QIList(l225,QIList(l169,QIList(l301,QIList(l104,l64,l3),QIList(l73,QIList(l5,QIList(l339,l3),QIList(l54,QIList(l29,QIList(l35,l339,l3),l3),QIList(l44,QIList(l39,l339,l3),QIList(l41,l339,l3),l3),l3),l3),l337,l3),l3),l3),l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l68,l198,QIList(l104,QIList(l5,QIList(l337,l338,l211,l328,l3),QIList(l168,QIList(l184,l3,QIList(l246,QIList(l170,QIList(l73,QIList(l5,QIList(l326,l3),QIList(l44,QIList(l39,l326,l3),QIList(l40,l326,l3),l3),l3),l337,l3),l3),QIList(l14,l4,QIList(l6,QIList(l170,QIList(l30,l338,l3),l3),QIList(l13,QIList(l241,QIList(l170,QIList(l31,l338,l3),l3),l3),l3),l3),QIList(l260,QIList(l169,l328,l3),l3),QIList(l67,QIList(l169,QIList(l301,QIList(l104,l64,l3),QIList(l73,QIList(l5,QIList(l339,l3),QIList(l54,QIList(l29,QIList(l35,l339,l3),l3),QIList(l44,QIList(l39,l339,l3),QIList(l41,l339,l3),l3),l3),l3),l337,l3),l3),l3),l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l67,l198,QIList(l104,QIList(l5,QIList(l211,l340,l3),QIList(l246,QIList(QIList(l341,QIList(l167,l3,l3),l3),l3),QIList(l14,l4,QIList(l51,QIList(QIList(l12,l340,l3),QIList(l13,l3),l3),QIList(QIList(l12,QIList(l31,l340,l3),l3),QIList(l303,"Odd paris in PSETQ",l3),l3),QIList(l4,QIList(l246,QIList(QIList(l105,QIList(l30,l340,l3),l3),QIList(l342,QIList(l33,l340,l3),l3),l3),QIList(l48,QIList(l168,QIList(QIList(l170,l105,l3),QIList(l170,QIList(l16,l3),l3),QIList(l170,l342,l3),l3),l3),l341,l3),QIList(l225,l340,QIList(l35,l340,l3),l3),l3),l3),l3),l3),QIList(l225,l341,QIList(l66,l341,l3),l3),QIList(l168,QIList(l246,QIList(l170,QIList(l73,QIList(l104,l31,l3),l341,l3),l3),QIList(l225,QIList(l169,QIList(l60,QIList(l104,l64,l3),QIList(l73,QIList(l104,l87,l3),l341,l3),QIList(l167,l3,l3),l3),l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l57,l198,QIList(l104,QIList(l5,QIList(l343,l344,l211,l328,l3),QIList(l168,QIList(l56,QIList(l241,QIList(l170,l343,l3),QIList(l170,l344,l3),l3),QIList(l169,l328,l3),l3),l3),l3),l3),l3,l3),QIList(l56,l198,QIList(l104,QIList(l5,QIList(l333,l211,l328,l3),QIList(l246,QIList(QIList(l342,QIList(l16,l3),l3),l3),QIList(l168,QIList(l246,QIList(QIList(QIList(l170,l342,l3),QIList(l170,l333,l3),l3),l3),QIList(l169,l328,l3),QIList(l170,l342,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l55,l198,QIList(l104,QIList(l5,QIList(l211,l345,l3),QIList(l51,QIList(QIList(l12,l345,l3),l3,l3),QIList(QIList(l12,QIList(l31,l345,l3),l3),QIList(l30,l345,l3),l3),QIList(l4,QIList(l246,QIList(QIList(l346,QIList(l16,l3),l3),l3),QIList(l168,QIList(l246,QIList(QIList(QIList(l170,l346,l3),QIList(l170,QIList(l30,l345,l3),l3),l3),l3),QIList(l208,QIList(l170,l346,l3),QIList(l170,l346,l3),QIList(l55,QIList(l169,QIList(l31,l345,l3),l3),l3),l3),l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l54,l198,QIList(l104,QIList(l5,QIList(l211,l345,l3),QIList(l51,QIList(QIList(l12,l345,l3),l4,l3),QIList(QIList(l12,QIList(l31,l345,l3),l3),QIList(l30,l345,l3),l3),QIList(l4,QIList(l168,QIList(l208,QIList(l170,QIList(l30,l345,l3),l3),QIList(l54,QIList(l169,QIList(l31,l345,l3),l3),l3),l3,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l53,l198,QIList(l104,QIList(l5,QIList(l333,l211,l347,l3),QIList(l168,QIList(l52,QIList(l170,l333,l3),QIList(l169,QIList(l64,l347,QIList(l168,QIList(QIList(l4,QIList(l303,"ECASE expression failed.",l3),l3),l3),l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l52,l198,QIList(l104,QIList(l5,QIList(l333,l211,l347,l3),QIList(l246,QIList(QIList(l348,QIList(l16,l3),l3),l3),QIList(l168,QIList(l246,QIList(QIList(QIList(l170,l348,l3),QIList(l170,l333,l3),l3),l3),QIList(l51,QIList(l169,QIList(l73,QIList(l5,QIList(l349,l3),QIList(l208,QIList(l292,QIList(l30,l349,l3),l4,l3),l349,QIList(l168,QIList(QIList(l26,QIList(l170,l348,l3),QIList(l167,QIList(l170,QIList(l30,l349,l3),l3),l3),l3),QIList(l169,QIList(l31,l349,l3),l3),l3),l3),l3),l3),l347,l3),l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l51,l198,QIList(l104,QIList(l5,QIList(l211,l347,l3),QIList(l208,QIList(l12,l347,l3),l3,QIList(l208,QIList(l292,QIList(l32,l347,l3),l4,l3),QIList(l168,QIList(l241,QIList(l169,QIList(l34,l347,l3),l3),l3),l3),QIList(l168,QIList(l208,QIList(l170,QIList(l32,l347,l3),l3),QIList(l241,QIList(l169,QIList(l34,l347,l3),l3),l3),QIList(l51,QIList(l169,QIList(l31,l347,l3),l3),l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l50,l198,QIList(l104,QIList(l5,QIList(l350,l211,l328,l3),QIList(l246,QIList(QIList(l351,QIList(l16,l3),l3),QIList(l352,QIList(l39,l350,l3),l3),QIList(l353,QIList(l40,l350,l3),l3),QIList(l344,QIList(l41,l350,l3),l3),l3),QIList(l168,QIList(l184,l3,QIList(l246,QIList(QIList(QIList(l170,l352,l3),0,l3),QIList(QIList(l170,l351,l3),QIList(l170,l353,l3),l3),l3),QIList(l232,QIList(l278,QIList(l170,l352,l3),QIList(l170,l351,l3),l3),QIList(l260,QIList(l169,l328,l3),l3),QIList(l46,QIList(l170,l352,l3),l3),l3),QIList(l170,l344,l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l49,l198,QIList(l104,QIList(l5,QIList(l350,l211,l328,l3),QIList(l246,QIList(QIList(l352,QIList(l39,l350,l3),l3),QIList(l354,QIList(l16,l3),l3),l3),QIList(l168,QIList(l184,l3,QIList(l246,QIList(QIList(QIList(l170,l354,l3),QIList(l170,QIList(l40,l350,l3),l3),l3),QIList(QIList(l170,l352,l3),l3,l3),l3),QIList(l232,QIList(l170,l354,l3),QIList(l225,QIList(l170,l352,l3),QIList(l30,QIList(l170,l354,l3),l3),l3),QIList(l260,QIList(l169,l328,l3),l3),QIList(l225,QIList(l170,l354,l3),QIList(l31,QIList(l170,l354,l3),l3),l3),l3),QIList(l170,QIList(l41,l350,l3),l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l48,l198,QIList(l104,QIList(l5,QIList(l326,l355,l3),QIList(l168,QIList(l225,QIList(l170,l355,l3),QIList(l28,QIList(l170,l326,l3),QIList(l170,l355,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l47,l198,QIList(l104,QIList(l5,QIList(l326,l210,QIList(l356,1,l3),l3),QIList(l168,QIList(l225,QIList(l170,l326,l3),QIList(l62,QIList(l170,l326,l3),QIList(l170,l356,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l46,l198,QIList(l104,QIList(l5,QIList(l326,l210,QIList(l356,1,l3),l3),QIList(l168,QIList(l225,QIList(l170,l326,l3),QIList(l61,QIList(l170,l326,l3),QIList(l170,l356,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l14,l198,QIList(l104,QIList(l5,QIList(l357,l211,l328,l3),QIList(l168,QIList(l184,l3,QIList(l232,QIList(l170,l357,l3),QIList(l169,l328,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l13,l198,QIList(l104,QIList(l5,QIList(l210,l342,l3),QIList(l168,QIList(l253,l3,QIList(l170,l342,l3),l3),l3),l3),l3),l3,l3),QIList(l11,l198,QIList(l104,QIList(l5,QIList(l331,l327,l211,l328,l3),QIList(l168,QIList(l241,QIList(l288,QIList(l167,QIList(l170,l331,l3),l3),QIList(l10,QIList(l170,QIList(l287,l331,l3),l3),QIList(l170,l327,l3),QIList(l169,QIList(l208,QIList(l54,QIList(l295,QIList(l30,l328,l3),l3),QIList(l27,QIList(l12,QIList(l31,l328,l3),l3),l3),l3),QIList(l168,QIList(QIList(l170,QIList(l30,l328,l3),l3),QIList(l184,QIList(l170,l331,l3),QIList(l169,QIList(l31,l328,l3),l3),l3),l3),l3),QIList(l168,QIList(QIList(l184,QIList(l170,l331,l3),QIList(l169,l328,l3),l3),l3),l3),l3),l3),l3),l3),QIList(l167,QIList(l170,l331,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l10,l198,QIList(l104,QIList(l5,QIList(l331,l327,l211,l328,l3),QIList(l246,QIList(QIList(l326,QIList(l16,"FN",l3),l3),l3),QIList(l168,QIList(l246,QIList(QIList(QIList(l170,l326,l3),QIList(l5,QIList(l170,l327,l3),QIList(l169,l328,l3),l3),l3),l3),QIList(l307,QIList(l170,l326,l3),"fname",QIList(l170,l331,l3),l3),QIList(l170,l326,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l9,l198,QIList(l104,QIList(l5,QIList(l331,l342,l210,l358,l3),QIList(l168,QIList(l241,QIList(l225,QIList(l170,l331,l3),QIList(l170,l342,l3),l3),QIList(l169,QIList(l6,QIList(l295,l358,l3),QIList(l168,QIList(QIList(l307,QIList(l167,QIList(l170,l331,l3),l3),"vardoc",QIList(l170,l358,l3),l3),l3),l3),l3),l3),QIList(l167,QIList(l170,l331,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l8,l198,QIList(l104,QIList(l5,QIList(l331,l342,l210,l358,l3),QIList(l168,QIList(l241,QIList(l2,QIList(l202,QIList(l170,l331,l3),l3),l3),QIList(l7,QIList(l18,QIList(l167,QIList(l170,l331,l3),l3),l3),QIList(l225,QIList(l170,l331,l3),QIList(l170,l342,l3),l3),l3),QIList(l169,QIList(l6,QIList(l295,l358,l3),QIList(l168,QIList(QIList(l307,QIList(l167,QIList(l170,l331,l3),l3),"vardoc",QIList(l170,l358,l3),l3),l3),l3),l3),l3),QIList(l167,QIList(l170,l331,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l7,l198,QIList(l104,QIList(l5,QIList(l357,l211,l328,l3),QIList(l168,QIList(l208,QIList(l170,l357,l3),l3,QIList(l241,QIList(l169,l328,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l6,l198,QIList(l104,QIList(l5,QIList(l357,l211,l328,l3),QIList(l168,QIList(l208,QIList(l170,l357,l3),QIList(l241,QIList(l169,l328,l3),l3),l3,l3),l3),l3),l3),l3,l3),QIList(l5,l198,QIList(l104,QIList(l5,QIList(l327,l211,l328,l3),QIList(l168,QIList(l104,QIList(l5,QIList(l170,l327,l3),QIList(l169,l328,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l2,l198,QIList(l104,QIList(l5,QIList(l211,l329,l3),QIList(l168,QIList(l240,QIList(l169,QIList(l73,QIList(l5,QIList(l330,l3),QIList(l168,QIList(l201,QIList(l167,QIList(l170,l330,l3),l3),l3),l3),l3),l329,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l1,l198,QIList(l104,QIList(l5,QIList(l331,l327,l211,l328,l3),QIList(l168,QIList(l240,QIList(l197,QIList(l167,QIList(l170,l331,l3),l3),QIList(l167,QIList(l104,QIList(l5,QIList(l170,QIList(l73,QIList(l104,QIList(l5,QIList(l326,l3),QIList(l208,QIList(l292,l326,QIList(l167,l321,l3),l3),QIList(l167,l211,l3),l326,l3),l3),l3),l327,l3),l3),QIList(l169,l328,l3),l3),l3),l3),l3),l3),l3),l3),l3),l3,l3),l3),l3,l3,l3);
(function(){
    l125.fvalue(pv, l321);
    l125.fvalue(pv, l320);
    l125.fvalue(pv, l319);
    l125.fvalue(pv, l318);
    l125.fvalue(pv, l317);
    l125.fvalue(pv, l316);
    l125.fvalue(pv, l315);
    l125.fvalue(pv, l314);
    l125.fvalue(pv, l313);
    l125.fvalue(pv, l312);
    l125.fvalue(pv, l311);
    l125.fvalue(pv, l310);
    l125.fvalue(pv, l309);
    l125.fvalue(pv, l308);
    l125.fvalue(pv, l307);
    l125.fvalue(pv, l306);
    l125.fvalue(pv, l305);
    l125.fvalue(pv, l304);
    l125.fvalue(pv, l303);
    l125.fvalue(pv, l302);
    l125.fvalue(pv, l301);
    l125.fvalue(pv, l300);
    l125.fvalue(pv, l299);
    l125.fvalue(pv, l298);
    l125.fvalue(pv, l297);
    l125.fvalue(pv, l296);
    l125.fvalue(pv, l295);
    l125.fvalue(pv, l294);
    l125.fvalue(pv, l293);
    l125.fvalue(pv, l292);
    l125.fvalue(pv, l291);
    l125.fvalue(pv, l290);
    l125.fvalue(pv, l289);
    l125.fvalue(pv, l288);
    l125.fvalue(pv, l287);
    l125.fvalue(pv, l286);
    l125.fvalue(pv, l285);
    l125.fvalue(pv, l284);
    l125.fvalue(pv, l283);
    l125.fvalue(pv, l282);
    l125.fvalue(pv, l281);
    l125.fvalue(pv, l280);
    l125.fvalue(pv, l279);
    l125.fvalue(pv, l278);
    l125.fvalue(pv, l277);
    l125.fvalue(pv, l276);
    l125.fvalue(pv, l275);
    l125.fvalue(pv, l274);
    l125.fvalue(pv, l273);
    l125.fvalue(pv, l272);
    l125.fvalue(pv, l271);
    l125.fvalue(pv, l270);
    l125.fvalue(pv, l269);
    l125.fvalue(pv, l268);
    l125.fvalue(pv, l267);
    l125.fvalue(pv, l266);
    l125.fvalue(pv, l265);
    l125.fvalue(pv, l264);
    l125.fvalue(pv, l263);
    l125.fvalue(pv, l262);
    l125.fvalue(pv, l261);
    l125.fvalue(pv, l260);
    l125.fvalue(pv, l259);
    l125.fvalue(pv, l258);
    l125.fvalue(pv, l257);
    l125.fvalue(pv, l256);
    l125.fvalue(pv, l255);
    l125.fvalue(pv, l254);
    l125.fvalue(pv, l253);
    l125.fvalue(pv, l252);
    l125.fvalue(pv, l251);
    l125.fvalue(pv, l250);
    l125.fvalue(pv, l249);
    l125.fvalue(pv, l248);
    l125.fvalue(pv, l247);
    l125.fvalue(pv, l246);
    l125.fvalue(pv, l245);
    l125.fvalue(pv, l244);
    l125.fvalue(pv, l243);
    l125.fvalue(pv, l242);
    l125.fvalue(pv, l241);
    l125.fvalue(pv, l240);
    l125.fvalue(pv, l239);
    l125.fvalue(pv, l238);
    l125.fvalue(pv, l237);
    l125.fvalue(pv, l236);
    l125.fvalue(pv, l235);
    l125.fvalue(pv, l234);
    l125.fvalue(pv, l233);
    l125.fvalue(pv, l232);
    l125.fvalue(pv, l231);
    l125.fvalue(pv, l230);
    l125.fvalue(pv, l229);
    l125.fvalue(pv, l228);
    l125.fvalue(pv, l227);
    l125.fvalue(pv, l226);
    l125.fvalue(pv, l225);
    l125.fvalue(pv, l224);
    l125.fvalue(pv, l223);
    l125.fvalue(pv, l222);
    l125.fvalue(pv, l221);
    l125.fvalue(pv, l220);
    l125.fvalue(pv, l219);
    l125.fvalue(pv, l218);
    l125.fvalue(pv, l217);
    l125.fvalue(pv, l216);
    l125.fvalue(pv, l215);
    l125.fvalue(pv, l214);
    l125.fvalue(pv, l213);
    l125.fvalue(pv, l211);
    l125.fvalue(pv, l210);
    l125.fvalue(pv, l209);
    l125.fvalue(pv, l208);
    l125.fvalue(pv, l207);
    l125.fvalue(pv, l206);
    l125.fvalue(pv, l205);
    l125.fvalue(pv, l204);
    l125.fvalue(pv, l203);
    l125.fvalue(pv, l202);
    l125.fvalue(pv, l201);
    l125.fvalue(pv, l200);
    l125.fvalue(pv, l199);
    l125.fvalue(pv, l198);
    l125.fvalue(pv, l197);
    l125.fvalue(pv, l196);
    l125.fvalue(pv, l195);
    l125.fvalue(pv, l194);
    l125.fvalue(pv, l193);
    l125.fvalue(pv, l192);
    l125.fvalue(pv, l191);
    l125.fvalue(pv, l190);
    l125.fvalue(pv, l189);
    l125.fvalue(pv, l188);
    l125.fvalue(pv, l187);
    l125.fvalue(pv, l186);
    l125.fvalue(pv, l185);
    l125.fvalue(pv, l184);
    l125.fvalue(pv, l183);
    l125.fvalue(pv, l182);
    l125.fvalue(pv, l181);
    l125.fvalue(pv, l180);
    l125.fvalue(pv, l179);
    l125.fvalue(pv, l178);
    l125.fvalue(pv, l177);
    l125.fvalue(pv, l176);
    l125.fvalue(pv, l175);
    l125.fvalue(pv, l174);
    l125.fvalue(pv, l173);
    l125.fvalue(pv, l172);
    l125.fvalue(pv, l171);
    l125.fvalue(pv, l170);
    l125.fvalue(pv, l169);
    l125.fvalue(pv, l168);
    l125.fvalue(pv, l167);
    l125.fvalue(pv, l166);
    l125.fvalue(pv, l165);
    l125.fvalue(pv, l164);
    l125.fvalue(pv, l163);
    l125.fvalue(pv, l162);
    l125.fvalue(pv, l161);
    l125.fvalue(pv, l160);
    l125.fvalue(pv, l159);
    l125.fvalue(pv, l158);
    l125.fvalue(pv, l157);
    l125.fvalue(pv, l156);
    l125.fvalue(pv, l155);
    l125.fvalue(pv, l154);
    l125.fvalue(pv, l153);
    l125.fvalue(pv, l152);
    l125.fvalue(pv, l151);
    l125.fvalue(pv, l150);
    l125.fvalue(pv, l149);
    l125.fvalue(pv, l148);
    l125.fvalue(pv, l147);
    l125.fvalue(pv, l146);
    l125.fvalue(pv, l145);
    l125.fvalue(pv, l144);
    l125.fvalue(pv, l143);
    l125.fvalue(pv, l142);
    l125.fvalue(pv, l141);
    l125.fvalue(pv, l140);
    l125.fvalue(pv, l139);
    l125.fvalue(pv, l138);
    l125.fvalue(pv, l137);
    l125.fvalue(pv, l136);
    l125.fvalue(pv, l135);
    l125.fvalue(pv, l134);
    l125.fvalue(pv, l133);
    l125.fvalue(pv, l132);
    l125.fvalue(pv, l131);
    l125.fvalue(pv, l130);
    l125.fvalue(pv, l129);
    l125.fvalue(pv, l128);
    l125.fvalue(pv, l127);
    l125.fvalue(pv, l126);
    l125.fvalue(pv, l125);
    l125.fvalue(pv, l124);
    l125.fvalue(pv, l123);
    l125.fvalue(pv, l122);
    l125.fvalue(pv, l121);
    l125.fvalue(pv, l120);
    l125.fvalue(pv, l119);
    l125.fvalue(pv, l118);
    l125.fvalue(pv, l117);
    l125.fvalue(pv, l116);
    l125.fvalue(pv, l115);
    l125.fvalue(pv, l114);
    l125.fvalue(pv, l113);
    l125.fvalue(pv, l112);
    l125.fvalue(pv, l111);
    l125.fvalue(pv, l110);
    l125.fvalue(pv, l109);
    l125.fvalue(pv, l108);
    l125.fvalue(pv, l107);
    l125.fvalue(pv, l106);
    l125.fvalue(pv, l105);
    l125.fvalue(pv, l104);
    l125.fvalue(pv, l103);
    l125.fvalue(pv, l102);
    l125.fvalue(pv, l101);
    l125.fvalue(pv, l100);
    l125.fvalue(pv, l99);
    l125.fvalue(pv, l98);
    l125.fvalue(pv, l97);
    l125.fvalue(pv, l96);
    l125.fvalue(pv, l95);
    l125.fvalue(pv, l94);
    l125.fvalue(pv, l93);
    l125.fvalue(pv, l92);
    l125.fvalue(pv, l91);
    l125.fvalue(pv, l90);
    l125.fvalue(pv, l89);
    l125.fvalue(pv, l88);
    l125.fvalue(pv, l87);
    l125.fvalue(pv, l86);
    l125.fvalue(pv, l85);
    l125.fvalue(pv, l84);
    l125.fvalue(pv, l83);
    l125.fvalue(pv, l82);
    l125.fvalue(pv, l81);
    l125.fvalue(pv, l80);
    l125.fvalue(pv, l79);
    l125.fvalue(pv, l78);
    l125.fvalue(pv, l77);
    l125.fvalue(pv, l76);
    l125.fvalue(pv, l75);
    l125.fvalue(pv, l74);
    l125.fvalue(pv, l73);
    l125.fvalue(pv, l72);
    l125.fvalue(pv, l71);
    l125.fvalue(pv, l70);
    l125.fvalue(pv, l69);
    l125.fvalue(pv, l68);
    l125.fvalue(pv, l67);
    l125.fvalue(pv, l66);
    l125.fvalue(pv, l65);
    l125.fvalue(pv, l64);
    l125.fvalue(pv, l63);
    l125.fvalue(pv, l62);
    l125.fvalue(pv, l61);
    l125.fvalue(pv, l60);
    l125.fvalue(pv, l59);
    l125.fvalue(pv, l58);
    l125.fvalue(pv, l57);
    l125.fvalue(pv, l56);
    l125.fvalue(pv, l55);
    l125.fvalue(pv, l54);
    l125.fvalue(pv, l53);
    l125.fvalue(pv, l52);
    l125.fvalue(pv, l51);
    l125.fvalue(pv, l50);
    l125.fvalue(pv, l49);
    l125.fvalue(pv, l48);
    l125.fvalue(pv, l47);
    l125.fvalue(pv, l46);
    l125.fvalue(pv, l45);
    l125.fvalue(pv, l44);
    l125.fvalue(pv, l43);
    l125.fvalue(pv, l42);
    l125.fvalue(pv, l41);
    l125.fvalue(pv, l40);
    l125.fvalue(pv, l39);
    l125.fvalue(pv, l38);
    l125.fvalue(pv, l37);
    l125.fvalue(pv, l36);
    l125.fvalue(pv, l35);
    l125.fvalue(pv, l34);
    l125.fvalue(pv, l33);
    l125.fvalue(pv, l32);
    l125.fvalue(pv, l31);
    l125.fvalue(pv, l30);
    l125.fvalue(pv, l29);
    l125.fvalue(pv, l28);
    l125.fvalue(pv, l27);
    l125.fvalue(pv, l26);
    l125.fvalue(pv, l25);
    l125.fvalue(pv, l24);
    l125.fvalue(pv, l23);
    l125.fvalue(pv, l22);
    l125.fvalue(pv, l21);
    l125.fvalue(pv, l20);
    l125.fvalue(pv, l19);
    l125.fvalue(pv, l18);
    l125.fvalue(pv, l17);
    l125.fvalue(pv, l16);
    l125.fvalue(pv, l15);
    l125.fvalue(pv, l14);
    l125.fvalue(pv, l13);
    l125.fvalue(pv, l12);
    l125.fvalue(pv, l11);
    l125.fvalue(pv, l10);
    l125.fvalue(pv, l9);
    l125.fvalue(pv, l8);
    l125.fvalue(pv, l7);
    l125.fvalue(pv, l6);
    l125.fvalue(pv, l5);
    l125.fvalue(pv, l4);
    l125.fvalue(pv, l3);
    l125.fvalue(pv, l2);
    l125.fvalue(pv, l1);
    ((l228).value = l323);
    ((l188).value = l359);
    ((l189).value = 857);
    ((l15).value = 219);
    return ((l250).value = 290);
})();
((l229).value = 359);
