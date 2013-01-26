(function(){
    var string = "function pv (x) { return x ; }";
    if (typeof string != 'string')
        throw 'The value ' + string + ' is not a type string.';
    return eval.apply(window, [string]);
})();
(function(){
    var string = "\nfunction mv(){\n     var r = [];\n     r['multiple-value'] = true;\n     for (var i=0; i<arguments.length; i++)\n         r.push(arguments[i]);\n     return r;\n}";
    if (typeof string != 'string')
        throw 'The value ' + string + ' is not a type string.';
    return eval.apply(window, [string]);
})();
(function(){
    var string = "var values = mv;";
    if (typeof string != 'string')
        throw 'The value ' + string + ' is not a type string.';
    return eval.apply(window, [string]);
})();
var l1 = {name: "DEFMACRO"};
l1;
var l2 = {name: "DECLAIM"};
l2;
var l3 = {name: "NIL"};
((l3).value = l3);
var l4 = {name: "T"};
((l4).value = l4);
var l5 = {name: "WHEN"};
l5;
var l6 = {name: "UNLESS"};
l6;
var l7 = {name: "DEFVAR"};
l7;
var l8 = {name: "DEFPARAMETER"};
l8;
var l9 = {name: "NAMED-LAMBDA"};
l9;
var l10 = {name: "DEFUN"};
l10;
var l11 = {name: "NULL"};
(function(){
    (l11).fvalue = (function(v2){
        ((v2)["fname"] = "NULL");
        return v2;
    })((function (values,v1){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((v1 === l3.value)?l4.value: l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 1)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l11;
})();
var l12 = {name: "RETURN"};
l12;
var l13 = {name: "WHILE"};
l13;
var l14 = {name: "*GENSYM-COUNTER*"};
(function(){
    (((l14.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l14).value = 0);
    })());
    return l14;
})();
var l15 = {name: "GENSYM"};
var l16 = {name: "INTEGER-TO-STRING"};
(function(){
    (l15).fvalue = (function(v4){
        ((v4)["fname"] = "GENSYM");
        return v4;
    })((function (values,v3){
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length-1){
        case 0:
        v3="G";
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    ((l14).value = (function(){
                        var x1 = (function(){
                            var symbol = l14;
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
                            var string2 = (function(){
                                var symbol = l16;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(pv, (function(){
                                var symbol = l14;
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
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 2)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l15;
})();
var l17 = {name: "BOUNDP"};
(function(){
    (l17).fvalue = (function(v6){
        ((v6)["fname"] = "BOUNDP");
        return v6;
    })((function (values,v5){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((v5.value !== undefined)?l4.value: l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 3)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l17;
})();
var l18 = {name: "="};
(function(){
    (l18).fvalue = (function(v9){
        ((v9)["fname"] = "=");
        return v9;
    })((function (values,v7,v8){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x1 = v7;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v8;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1==x2?l4.value: l3.value);
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 4)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l18;
})();
var l19 = {name: "*"};
(function(){
    (l19).fvalue = (function(v12){
        ((v12)["fname"] = "*");
        return v12;
    })((function (values,v10,v11){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x1 = v10;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v11;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1*x2;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 5)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l19;
})();
var l20 = {name: "/"};
(function(){
    (l20).fvalue = (function(v15){
        ((v15)["fname"] = "/");
        return v15;
    })((function (values,v13,v14){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x1 = v13;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v14;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1/x2;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 6)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l20;
})();
var l21 = {name: "1+"};
(function(){
    (l21).fvalue = (function(v17){
        ((v17)["fname"] = "1+");
        return v17;
    })((function (values,v16){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x1 = v16;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = 1;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 7)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l21;
})();
var l22 = {name: "1-"};
(function(){
    (l22).fvalue = (function(v19){
        ((v19)["fname"] = "1-");
        return v19;
    })((function (values,v18){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x1 = v18;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = 1;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1-x2;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 8)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l22;
})();
var l23 = {name: "ZEROP"};
(function(){
    (l23).fvalue = (function(v21){
        ((v21)["fname"] = "ZEROP");
        return v21;
    })((function (values,v20){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x1 = v20;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = 0;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1==x2?l4.value: l3.value);
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 9)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l23;
})();
var l24 = {name: "TRUNCATE"};
(function(){
    (l24).fvalue = (function(v24){
        ((v24)["fname"] = "TRUNCATE");
        return v24;
    })((function (values,v22,v23){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
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
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 10)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l24;
})();
var l25 = {name: "EQL"};
(function(){
    (l25).fvalue = (function(v27){
        ((v27)["fname"] = "EQL");
        return v27;
    })((function (values,v25,v26){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((v25 === v26)?l4.value: l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 11)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l25;
})();
var l26 = {name: "NOT"};
(function(){
    (l26).fvalue = (function(v29){
        ((v29)["fname"] = "NOT");
        return v29;
    })((function (values,v28){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (v28 !== l3.value ? l3.value : l4.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 12)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l26;
})();
var l27 = {name: "CONS"};
(function(){
    (l27).fvalue = (function(v32){
        ((v32)["fname"] = "CONS");
        return v32;
    })((function (values,v30,v31){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ({car: v30, cdr: v31});
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 13)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l27;
})();
var l28 = {name: "CONSP"};
(function(){
    (l28).fvalue = (function(v34){
        ((v34)["fname"] = "CONSP");
        return v34;
    })((function (values,v33){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var tmp = v33;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 14)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l28;
})();
var l29 = {name: "CAR"};
(function(){
    (l29).fvalue = (function(v36){
        ((v36)["fname"] = "CAR");
        return v36;
    })((function(){
        var func = (function (values,v35){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var tmp = v35;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 15)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        
        });
        func.docstring = 'Return the CAR part of a cons, or NIL if X is null.';
        return func;
    })());
    return l29;
})();
var l30 = {name: "CDR"};
(function(){
    (l30).fvalue = (function(v38){
        ((v38)["fname"] = "CDR");
        return v38;
    })((function (values,v37){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = v37;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 16)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l30;
})();
var l31 = {name: "CAAR"};
(function(){
    (l31).fvalue = (function(v40){
        ((v40)["fname"] = "CAAR");
        return v40;
    })((function (values,v39){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = (function(){
                            var tmp = v39;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        return tmp === l3.value? l3.value: tmp.car;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 17)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l31;
})();
var l32 = {name: "CADR"};
(function(){
    (l32).fvalue = (function(v42){
        ((v42)["fname"] = "CADR");
        return v42;
    })((function (values,v41){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = (function(){
                            var tmp = v41;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        return tmp === l3.value? l3.value: tmp.car;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 18)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l32;
})();
var l33 = {name: "CDAR"};
(function(){
    (l33).fvalue = (function(v44){
        ((v44)["fname"] = "CDAR");
        return v44;
    })((function (values,v43){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = (function(){
                            var tmp = v43;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 19)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l33;
})();
var l34 = {name: "CDDR"};
(function(){
    (l34).fvalue = (function(v46){
        ((v46)["fname"] = "CDDR");
        return v46;
    })((function (values,v45){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = (function(){
                            var tmp = v45;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 20)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l34;
})();
var l35 = {name: "CADDR"};
(function(){
    (l35).fvalue = (function(v48){
        ((v48)["fname"] = "CADDR");
        return v48;
    })((function (values,v47){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
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
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 21)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l35;
})();
var l36 = {name: "CDDDR"};
(function(){
    (l36).fvalue = (function(v50){
        ((v50)["fname"] = "CDDDR");
        return v50;
    })((function (values,v49){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
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
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 22)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l36;
})();
var l37 = {name: "CADDDR"};
(function(){
    (l37).fvalue = (function(v52){
        ((v52)["fname"] = "CADDDR");
        return v52;
    })((function (values,v51){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
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
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 23)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l37;
})();
var l38 = {name: "FIRST"};
(function(){
    (l38).fvalue = (function(v54){
        ((v54)["fname"] = "FIRST");
        return v54;
    })((function (values,v53){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = v53;
                        return tmp === l3.value? l3.value: tmp.car;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 24)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l38;
})();
var l39 = {name: "SECOND"};
(function(){
    (l39).fvalue = (function(v56){
        ((v56)["fname"] = "SECOND");
        return v56;
    })((function (values,v55){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l32.fvalue(values, v55);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 25)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l39;
})();
var l40 = {name: "THIRD"};
(function(){
    (l40).fvalue = (function(v58){
        ((v58)["fname"] = "THIRD");
        return v58;
    })((function (values,v57){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l35.fvalue(values, v57);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 26)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l40;
})();
var l41 = {name: "FOURTH"};
(function(){
    (l41).fvalue = (function(v60){
        ((v60)["fname"] = "FOURTH");
        return v60;
    })((function (values,v59){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l37.fvalue(values, v59);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 27)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l41;
})();
var l42 = {name: "LIST"};
(function(){
    (l42).fvalue = (function(v62){
        ((v62)["fname"] = "LIST");
        return v62;
    })((function (values){
        var v61= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v61 = {car: arguments[i], cdr: 
        v61};
        return (function(){
            try {
                return (function(){
                    return v61;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 28)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l42;
})();
var l43 = {name: "ATOM"};
(function(){
    (l43).fvalue = (function(v64){
        ((v64)["fname"] = "ATOM");
        return v64;
    })((function (values,v63){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l26.fvalue(values, ((function(){
                        var tmp = v63;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 29)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l43;
})();
var l44 = {name: "INCF"};
l44;
var l45 = {name: "DECF"};
l45;
var l46 = {name: "PUSH"};
l46;
var l47 = {name: "DOLIST"};
l47;
var l48 = {name: "DOTIMES"};
l48;
var l49 = {name: "COND"};
l49;
var l50 = {name: "CASE"};
l50;
var l51 = {name: "ECASE"};
l51;
var l52 = {name: "AND"};
l52;
var l53 = {name: "OR"};
l53;
var l54 = {name: "PROG1"};
l54;
var l55 = {name: "PROG2"};
l55;
var l56 = {name: "ENSURE-LIST"};
var l57 = {name: "LISTP"};
(function(){
    (l56).fvalue = (function(v66){
        ((v66)["fname"] = "ENSURE-LIST");
        return v66;
    })((function (values,v65){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var symbol = l57;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v65) !== l3.value ? v65 : l42.fvalue(values, v65));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 30)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l56;
})();
var l58 = {name: "!REDUCE"};
(function(){
    (l58).fvalue = (function(v70){
        ((v70)["fname"] = "!REDUCE");
        return v70;
    })((function (values,v67,v68,v69){
        if (arguments.length < 4) throw 'too few arguments';
        if (arguments.length > 4) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.fvalue(pv, v68) !== l3.value ? v69 : l58.fvalue(values, v67, (function(){
                        var tmp = v68;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })(), (v67)(pv, v69, (function(){
                        var tmp = v68;
                        return tmp === l3.value? l3.value: tmp.car;
                    })())));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 31)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l58;
})();
var l59 = {name: "+"};
(function(){
    (l59).fvalue = (function(v75){
        ((v75)["fname"] = "+");
        return v75;
    })((function (values){
        var v71= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v71 = {car: arguments[i], cdr: 
        v71};
        return (function(){
            try {
                return (function(){
                    return (function(v72){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v73,v74){
                                        (function(){
                                            while(v73 !== l3.value){
                                                (v74 = (function(){
                                                    var tmp = v73;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    (v72 = (function(){
                                                        var x1 = v72;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = v74;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })());
                                                    return l3.value;
                                                })();
                                                (v73 = (function(){
                                                    var tmp = v73;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })());
                                            }return l3.value;
                                        })();
                                        return v72;
                                    })(v71,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 33)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(0);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 32)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l59;
})();
var l60 = {name: "-"};
(function(){
    (l60).fvalue = (function(v81){
        ((v81)["fname"] = "-");
        return v81;
    })((function (values,v77){
        if (arguments.length < 2) throw 'too few arguments';
        var v76= l3.value;
        for (var i = arguments.length-1; i>=2; i--)
            v76 = {car: arguments[i], cdr: 
        v76};
        return (function(){
            try {
                return (function(){
                    return (l11.fvalue(pv, v76) !== l3.value ? (function(){
                        var x1 = v77;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        return -x1;
                    })() : (function(v78){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v79,v80){
                                        (function(){
                                            while(v79 !== l3.value){
                                                (v80 = (function(){
                                                    var tmp = v79;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    (v78 = (function(){
                                                        var x1 = v78;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = v80;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1-x2;
                                                    })());
                                                    return l3.value;
                                                })();
                                                (v79 = (function(){
                                                    var tmp = v79;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })());
                                            }return l3.value;
                                        })();
                                        return v78;
                                    })(v76,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 35)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(v77));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 34)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l60;
})();
var l61 = {name: "APPEND-TWO"};
var l62 = {name: "APPEND"};
(function(){
    (l61).fvalue = (function(v84){
        ((v84)["fname"] = "APPEND-TWO");
        return v84;
    })((function (values,v82,v83){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.fvalue(pv, v82) !== l3.value ? v83 : ({car: (function(){
                        var tmp = v82;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), cdr: (function(){
                        var symbol = l62;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, (function(){
                        var tmp = v82;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })(), v83)}));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 36)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l61;
})();
(function(){
    (l62).fvalue = (function(v86){
        ((v86)["fname"] = "APPEND");
        return v86;
    })((function (values){
        var v85= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v85 = {car: arguments[i], cdr: 
        v85};
        return (function(){
            try {
                return (function(){
                    return l58.fvalue(values, (function(){
                        var symbol = l61;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v85, l3);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 37)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l62;
})();
var l63 = {name: "REVAPPEND"};
(function(){
    (l63).fvalue = (function(v89){
        ((v89)["fname"] = "REVAPPEND");
        return v89;
    })((function (values,v87,v88){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        try {
                            return (function(){
                                return (function(){
                                    while(v87 !== l3.value){
                                        (v88 = ({car: (function(){
                                            var tmp = v87;
                                            return tmp === l3.value? l3.value: tmp.car;
                                        })(), cdr: v88}));
                                        (v87 = (function(){
                                            var tmp = v87;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })());
                                    }return l3.value;
                                })();
                            })();
                        }
                        catch (cf){
                            if (cf.type == 'block' && cf.id == 39)
                                return cf.value;
                            else
                                throw cf;
                        }
                    })();
                    return v88;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 38)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l63;
})();
var l64 = {name: "REVERSE"};
(function(){
    (l64).fvalue = (function(v91){
        ((v91)["fname"] = "REVERSE");
        return v91;
    })((function (values,v90){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l63.fvalue(values, v90, l3);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 40)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l64;
})();
var l65 = {name: "PSETQ"};
l65;
var l66 = {name: "LIST-LENGTH"};
(function(){
    (l66).fvalue = (function(v94){
        ((v94)["fname"] = "LIST-LENGTH");
        return v94;
    })((function (values,v92){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v93){
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(l26.fvalue(pv, l11.fvalue(pv, v92)) !== l3.value){
                                            (v93 = (function(){
                                                var x1 = v93;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = 1;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })());
                                            (v92 = (function(){
                                                var tmp = v92;
                                                return tmp === l3.value? l3.value: tmp.cdr;
                                            })());
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 42)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v93;
                    })(0);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 41)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l66;
})();
var l67 = {name: "LENGTH"};
(function(){
    (l67).fvalue = (function(v96){
        ((v96)["fname"] = "LENGTH");
        return v96;
    })((function (values,v95){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof(v95) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(){
                            var x = v95;
                            if (typeof x != 'string')
                                throw 'The value ' + x + ' is not a type string.';
                            return x.length;
                        })();
                    })() : (((function(){
                        var x = v95;
                        return typeof x === 'object' && 'length' in x;
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(){
                            var tmp = (v95)["length"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })() : ((function(){
                        var symbol = l57;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v95) !== l3.value ? (function(){
                        return l66.fvalue(values, v95);
                    })() : l3.value)));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 43)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l67;
})();
var l68 = {name: "CONCAT-TWO"};
(function(){
    (l68).fvalue = (function(v99){
        ((v99)["fname"] = "CONCAT-TWO");
        return v99;
    })((function (values,v97,v98){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var string1 = v97;
                        var string2 = v98;
                        if (typeof string1 != 'string')
                            throw 'The value ' + string1 + ' is not a type string.';
                        if (typeof string2 != 'string')
                            throw 'The value ' + string2 + ' is not a type string.';
                        return string1.concat(string2);
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 44)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l68;
})();
var l69 = {name: "MAPCAR"};
(function(){
    (l69).fvalue = (function(v102){
        ((v102)["fname"] = "MAPCAR");
        return v102;
    })((function (values,v100,v101){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.fvalue(pv, v101) !== l3.value ? l3 : ({car: (v100)(pv, (function(){
                        var tmp = v101;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()), cdr: l69.fvalue(pv, v100, (function(){
                        var tmp = v101;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())}));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 45)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l69;
})();
var l70 = {name: "IDENTITY"};
(function(){
    (l70).fvalue = (function(v104){
        ((v104)["fname"] = "IDENTITY");
        return v104;
    })((function (values,v103){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return v103;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 46)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l70;
})();
var l71 = {name: "COPY-LIST"};
(function(){
    (l71).fvalue = (function(v106){
        ((v106)["fname"] = "COPY-LIST");
        return v106;
    })((function (values,v105){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l69.fvalue(values, (function(){
                        var symbol = l70;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v105);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 47)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l71;
})();
var l72 = {name: "CODE-CHAR"};
(function(){
    (l72).fvalue = (function(v108){
        ((v108)["fname"] = "CODE-CHAR");
        return v108;
    })((function (values,v107){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return v107;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 48)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l72;
})();
var l73 = {name: "CHAR-CODE"};
(function(){
    (l73).fvalue = (function(v110){
        ((v110)["fname"] = "CHAR-CODE");
        return v110;
    })((function (values,v109){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return v109;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 49)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l73;
})();
var l74 = {name: "CHAR="};
(function(){
    (l74).fvalue = (function(v113){
        ((v113)["fname"] = "CHAR=");
        return v113;
    })((function (values,v111,v112){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x1 = v111;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v112;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1==x2?l4.value: l3.value);
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 50)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l74;
})();
var l75 = {name: "INTEGERP"};
(function(){
    (l75).fvalue = (function(v115){
        ((v115)["fname"] = "INTEGERP");
        return v115;
    })((function (values,v114){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof (v114) == "number")?l4.value: l3.value) !== l3.value ? (function(){
                        var x1 = (function(){
                            var x = v114;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            return Math.floor(x);
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v114;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1==x2?l4.value: l3.value);
                    })() : l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 51)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l75;
})();
var l76 = {name: "PLUSP"};
(function(){
    (l76).fvalue = (function(v117){
        ((v117)["fname"] = "PLUSP");
        return v117;
    })((function (values,v116){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x1 = 0;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v116;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1<x2?l4.value: l3.value);
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 52)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l76;
})();
var l77 = {name: "MINUSP"};
(function(){
    (l77).fvalue = (function(v119){
        ((v119)["fname"] = "MINUSP");
        return v119;
    })((function (values,v118){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x1 = v118;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = 0;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1<x2?l4.value: l3.value);
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 53)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l77;
})();
(function(){
    (l57).fvalue = (function(v122){
        ((v122)["fname"] = "LISTP");
        return v122;
    })((function (values,v120){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v121){
                        return (v121 !== l3.value ? v121 : l11.fvalue(values, v120));
                    })(((function(){
                        var tmp = v120;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 54)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l57;
})();
var l78 = {name: "NTHCDR"};
(function(){
    (l78).fvalue = (function(v125){
        ((v125)["fname"] = "NTHCDR");
        return v125;
    })((function (values,v123,v124){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        try {
                            return (function(){
                                return (function(){
                                    while((l76.fvalue(pv, v123) !== l3.value ? v124 : l3.value) !== l3.value){
                                        (v123 = l22.fvalue(pv, v123));
                                        (v124 = (function(){
                                            var tmp = v124;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })());
                                    }return l3.value;
                                })();
                            })();
                        }
                        catch (cf){
                            if (cf.type == 'block' && cf.id == 56)
                                return cf.value;
                            else
                                throw cf;
                        }
                    })();
                    return v124;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 55)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l78;
})();
var l79 = {name: "NTH"};
(function(){
    (l79).fvalue = (function(v128){
        ((v128)["fname"] = "NTH");
        return v128;
    })((function (values,v126,v127){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = l78.fvalue(pv, v126, v127);
                        return tmp === l3.value? l3.value: tmp.car;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 57)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l79;
})();
var l80 = {name: "LAST"};
(function(){
    (l80).fvalue = (function(v130){
        ((v130)["fname"] = "LAST");
        return v130;
    })((function (values,v129){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        try {
                            return (function(){
                                return (function(){
                                    while(((function(){
                                        var tmp = (function(){
                                            var tmp = v129;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })();
                                        return (typeof tmp == 'object' && 'car' in tmp);
                                    })()?l4.value: l3.value) !== l3.value){
                                        (v129 = (function(){
                                            var tmp = v129;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })());
                                    }return l3.value;
                                })();
                            })();
                        }
                        catch (cf){
                            if (cf.type == 'block' && cf.id == 59)
                                return cf.value;
                            else
                                throw cf;
                        }
                    })();
                    return v129;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 58)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l80;
})();
var l81 = {name: "BUTLAST"};
(function(){
    (l81).fvalue = (function(v132){
        ((v132)["fname"] = "BUTLAST");
        return v132;
    })((function (values,v131){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = (function(){
                            var tmp = v131;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? ({car: (function(){
                        var tmp = v131;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), cdr: l81.fvalue(pv, (function(){
                        var tmp = v131;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())}) : l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 60)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l81;
})();
var l82 = {name: "MEMBER"};
(function(){
    (l82).fvalue = (function(v135){
        ((v135)["fname"] = "MEMBER");
        return v135;
    })((function (values,v133,v134){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        try {
                            return (function(){
                                return (function(){
                                    while(v134 !== l3.value){
                                        (l25.fvalue(pv, v133, (function(){
                                            var tmp = v134;
                                            return tmp === l3.value? l3.value: tmp.car;
                                        })()) !== l3.value ? (function(){
                                            return (function(){
                                                throw ({type: 'block', id: 62, value: v134, message: 'Return from unknown block NIL.'})
                                            })();
                                        })() : l3.value);
                                        (v134 = (function(){
                                            var tmp = v134;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })());
                                    }return l3.value;
                                })();
                            })();
                        }
                        catch (cf){
                            if (cf.type == 'block' && cf.id == 62)
                                return cf.value;
                            else
                                throw cf;
                        }
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 61)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l82;
})();
var l83 = {name: "REMOVE"};
(function(){
    (l83).fvalue = (function(v138){
        ((v138)["fname"] = "REMOVE");
        return v138;
    })((function (values,v136,v137){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.fvalue(pv, v137) !== l3.value ? (function(){
                        return l3.value;
                    })() : (l25.fvalue(pv, v136, (function(){
                        var tmp = v137;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) !== l3.value ? (function(){
                        return l83.fvalue(values, v136, (function(){
                            var tmp = v137;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : (function(){
                        return ({car: (function(){
                            var tmp = v137;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), cdr: l83.fvalue(pv, v136, (function(){
                            var tmp = v137;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })())});
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 63)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l83;
})();
var l84 = {name: "REMOVE-IF"};
(function(){
    (l84).fvalue = (function(v141){
        ((v141)["fname"] = "REMOVE-IF");
        return v141;
    })((function (values,v139,v140){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.fvalue(pv, v140) !== l3.value ? (function(){
                        return l3.value;
                    })() : ((v139)(pv, (function(){
                        var tmp = v140;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) !== l3.value ? (function(){
                        return l84.fvalue(values, v139, (function(){
                            var tmp = v140;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : (function(){
                        return ({car: (function(){
                            var tmp = v140;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), cdr: l84.fvalue(pv, v139, (function(){
                            var tmp = v140;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })())});
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 64)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l84;
})();
var l85 = {name: "REMOVE-IF-NOT"};
(function(){
    (l85).fvalue = (function(v144){
        ((v144)["fname"] = "REMOVE-IF-NOT");
        return v144;
    })((function (values,v142,v143){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.fvalue(pv, v143) !== l3.value ? (function(){
                        return l3.value;
                    })() : ((v142)(pv, (function(){
                        var tmp = v143;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) !== l3.value ? (function(){
                        return ({car: (function(){
                            var tmp = v143;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), cdr: l85.fvalue(pv, v142, (function(){
                            var tmp = v143;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })())});
                    })() : (function(){
                        return l85.fvalue(values, v142, (function(){
                            var tmp = v143;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 65)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l85;
})();
var l86 = {name: "DIGIT-CHAR-P"};
(function(){
    (l86).fvalue = (function(v146){
        ((v146)["fname"] = "DIGIT-CHAR-P");
        return v146;
    })((function (values,v145){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var x1 = 48;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v145;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1<=x2?l4.value: l3.value);
                    })() !== l3.value ? (function(){
                        var x1 = v145;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = 57;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1<=x2?l4.value: l3.value);
                    })() : l3.value) !== l3.value ? (function(){
                        var x1 = v145;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = 48;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1-x2;
                    })() : l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 66)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l86;
})();
var l87 = {name: "SUBSEQ"};
(function(){
    (l87).fvalue = (function(v150){
        ((v150)["fname"] = "SUBSEQ");
        return v150;
    })((function (values,v147,v148,v149){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 4) throw 'too many arguments';
        switch(arguments.length-1){
        case 2:
        v149=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (((typeof(v147) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return (v149 !== l3.value ? (function(){
                            var str = v147;
                            var a = v148;
                            var b;
                            b = v149;
                            return str.slice(a,b);
                        })() : (function(){
                            var str = v147;
                            var a = v148;
                            var b;
                            return str.slice(a,b);
                        })());
                    })() : (function(){
                        return (function(){
                            throw "Unsupported argument.";
                        })();
                    })());
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 67)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l87;
})();
var l88 = {name: "PARSE-INTEGER"};
(function(){
    (l88).fvalue = (function(v155){
        ((v155)["fname"] = "PARSE-INTEGER");
        return v155;
    })((function (values,v151){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v152,v153,v154){
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((function(){
                                            var x1 = v153;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v154;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return (x1<x2?l4.value: l3.value);
                                        })() !== l3.value){
                                            (v152 = (function(){
                                                var x1 = (function(){
                                                    var x1 = v152;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = 10;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1*x2;
                                                })();
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = l86.fvalue(pv, (function(){
                                                    var string = v151;
                                                    var index = v153;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })());
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })());
                                            (v153 = (function(){
                                                var x1 = v153;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = 1;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })());
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 69)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v152;
                    })(0,0,l67.fvalue(pv, v151));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 68)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l88;
})();
var l89 = {name: "SOME"};
(function(){
    (l89).fvalue = (function(v162){
        ((v162)["fname"] = "SOME");
        return v162;
    })((function (values,v156,v157){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof(v157) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v158,v159){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while((function(){
                                                var x1 = v158;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v159;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return (x1<x2?l4.value: l3.value);
                                            })() !== l3.value){
                                                ((v156)(pv, (function(){
                                                    var string = v157;
                                                    var index = v158;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })()) !== l3.value ? (function(){
                                                    return (function(){
                                                        throw ({type: 'block', id: 70, value: l4.value, message: 'Return from unknown block SOME.'})
                                                    })();
                                                })() : l3.value);
                                                (v158 = (function(){
                                                    var x1 = v158;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = 1;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1+x2;
                                                })());
                                            }return l3.value;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 71)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return l3.value;
                        })(0,l67.fvalue(pv, v157));
                    })() : (l57.fvalue(pv, v157) !== l3.value ? (function(){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v160,v161){
                                        (function(){
                                            while(v160 !== l3.value){
                                                (v161 = (function(){
                                                    var tmp = v160;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    ((v156)(pv, v161) !== l3.value ? (function(){
                                                        return (function(){
                                                            throw ({type: 'block', id: 72, value: l4.value, message: 'Return from unknown block NIL.'})
                                                        })();
                                                    })() : l3.value);
                                                    return l3.value;
                                                })();
                                                (v160 = (function(){
                                                    var tmp = v160;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })());
                                            }return l3.value;
                                        })();
                                        return l3.value;
                                    })(v157,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 72)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })() : (function(){
                        return (function(){
                            throw "Unknown sequence.";
                        })();
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 70)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l89;
})();
var l90 = {name: "EVERY"};
(function(){
    (l90).fvalue = (function(v169){
        ((v169)["fname"] = "EVERY");
        return v169;
    })((function (values,v163,v164){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof(v164) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v165,v166){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while((function(){
                                                var x1 = v165;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v166;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return (x1<x2?l4.value: l3.value);
                                            })() !== l3.value){
                                                ((v163)(pv, (function(){
                                                    var string = v164;
                                                    var index = v165;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })()) !== l3.value ? l3.value : (function(){
                                                    return (function(){
                                                        throw ({type: 'block', id: 73, value: l3.value, message: 'Return from unknown block EVERY.'})
                                                    })();
                                                })());
                                                (v165 = (function(){
                                                    var x1 = v165;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = 1;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1+x2;
                                                })());
                                            }return l3.value;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 74)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return l4.value;
                        })(0,l67.fvalue(pv, v164));
                    })() : (l57.fvalue(pv, v164) !== l3.value ? (function(){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v167,v168){
                                        (function(){
                                            while(v167 !== l3.value){
                                                (v168 = (function(){
                                                    var tmp = v167;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    ((v163)(pv, v168) !== l3.value ? l3.value : (function(){
                                                        return (function(){
                                                            throw ({type: 'block', id: 75, value: l3.value, message: 'Return from unknown block NIL.'})
                                                        })();
                                                    })());
                                                    return l3.value;
                                                })();
                                                (v167 = (function(){
                                                    var tmp = v167;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })());
                                            }return l3.value;
                                        })();
                                        return l4.value;
                                    })(v164,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 75)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })() : (function(){
                        return (function(){
                            throw "Unknown sequence.";
                        })();
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 73)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l90;
})();
var l91 = {name: "ASSOC"};
(function(){
    (l91).fvalue = (function(v172){
        ((v172)["fname"] = "ASSOC");
        return v172;
    })((function (values,v170,v171){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        try {
                            return (function(){
                                return (function(){
                                    while(v171 !== l3.value){
                                        (l25.fvalue(pv, v170, l31.fvalue(pv, v171)) !== l3.value ? (function(){
                                            throw ({type: 'block', id: 77, value: l3.value, message: 'Return from unknown block NIL.'})
                                        })() : (v171 = (function(){
                                            var tmp = v171;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })()));
                                    }return l3.value;
                                })();
                            })();
                        }
                        catch (cf){
                            if (cf.type == 'block' && cf.id == 77)
                                return cf.value;
                            else
                                throw cf;
                        }
                    })();
                    return (function(){
                        var tmp = v171;
                        return tmp === l3.value? l3.value: tmp.car;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 76)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l91;
})();
var l92 = {name: "STRING"};
(function(){
    (l92).fvalue = (function(v174){
        ((v174)["fname"] = "STRING");
        return v174;
    })((function (values,v173){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof(v173) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return v173;
                    })() : (((function(){
                        var tmp = v173;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (v173).name;
                    })() : (function(){
                        return (function(){
                            var x = v173;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            return String.fromCharCode(x);
                        })();
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 78)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l92;
})();
var l93 = {name: "STRING="};
(function(){
    (l93).fvalue = (function(v177){
        ((v177)["fname"] = "STRING=");
        return v177;
    })((function (values,v175,v176){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((v175 == v176)?l4.value: l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 79)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l93;
})();
var l94 = {name: "FDEFINITION"};
(function(){
    (l94).fvalue = (function(v179){
        ((v179)["fname"] = "FDEFINITION");
        return v179;
    })((function (values,v178){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof v178 == 'function')?l4.value: l3.value) !== l3.value ? (function(){
                        return v178;
                    })() : (((function(){
                        var tmp = v178;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(){
                            var symbol = v178;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })();
                    })() : (function(){
                        return (function(){
                            throw "Invalid function";
                        })();
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 80)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l94;
})();
var l95 = {name: "DISASSEMBLE"};
var l96 = {name: "WRITE-LINE"};
(function(){
    (l95).fvalue = (function(v181){
        ((v181)["fname"] = "DISASSEMBLE");
        return v181;
    })((function (values,v180){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var symbol = l96;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, (l94.fvalue(pv, v180)).toString());
                    return l3.value;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 81)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l95;
})();
var l97 = {name: "DOCUMENTATION"};
var l98 = {name: "FUNCTION"};
var l99 = {name: "VARIABLE"};
(function(){
    (l97).fvalue = (function(v186){
        ((v186)["fname"] = "DOCUMENTATION");
        return v186;
    })((function(){
        var func = (function (values,v182,v183){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v184){
                            return (l25.fvalue(pv, v184, l98) !== l3.value ? (function(){
                                return (function(v185){
                                    return (function(){
                                        var tmp = (v185)["docstring"];
                                        return tmp == undefined? l3.value: tmp ;
                                    })();
                                })(l94.fvalue(pv, v182));
                            })() : (l25.fvalue(pv, v184, l99) !== l3.value ? (function(){
                                (((function(){
                                    var tmp = v182;
                                    return (typeof tmp == 'object' && 'name' in tmp);
                                })()?l4.value: l3.value) !== l3.value ? l3.value : (function(){
                                    return (function(){
                                        throw "Wrong argument type! it should be a symbol";
                                    })();
                                })());
                                return (function(){
                                    var tmp = (v182)["vardoc"];
                                    return tmp == undefined? l3.value: tmp ;
                                })();
                            })() : (function(){
                                return (function(){
                                    throw "ECASE expression failed.";
                                })();
                            })()));
                        })(v183);
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 82)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        
        });
        func.docstring = 'Return the documentation of X. TYPE must be the symbol VARIABLE or FUNCTION.';
        return func;
    })());
    return l97;
})();
var l100 = {name: "*PACKAGE-LIST*"};
(function(){
    (((l100.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l100).value = l3.value);
    })());
    return l100;
})();
var l101 = {name: "LIST-ALL-PACKAGES"};
(function(){
    (l101).fvalue = (function(v187){
        ((v187)["fname"] = "LIST-ALL-PACKAGES");
        return v187;
    })((function (values){
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l100;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 83)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l101;
})();
var l102 = {name: "MAKE-PACKAGE"};
var l103 = {name: "FIND-PACKAGE-OR-FAIL"};
(function(){
    (l102).fvalue = (function(v192){
        ((v192)["fname"] = "MAKE-PACKAGE");
        return v192;
    })((function (values,v188,v189){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        switch(arguments.length-1){
        case 1:
        v189=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (function(v190,v191){
                        ((v190)["packageName"] = v188);
                        ((v190)["symbols"] = {});
                        ((v190)["exports"] = {});
                        ((v190)["use"] = v191);
                        ((l100).value = ({car: v190, cdr: (function(){
                            var symbol = l100;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()}));
                        return v190;
                    })({},l69.fvalue(pv, (function(){
                        var symbol = l103;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v189));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 84)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l102;
})();
var l104 = {name: "PACKAGEP"};
(function(){
    (l104).fvalue = (function(v194){
        ((v194)["fname"] = "PACKAGEP");
        return v194;
    })((function (values,v193){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof (v193) === 'object')?l4.value: l3.value) !== l3.value ? ((("symbols") in (v193))?l4.value: l3.value) : l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 85)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l104;
})();
var l105 = {name: "FIND-PACKAGE"};
var l106 = {name: "PACKAGE-NAME"};
(function(){
    (l105).fvalue = (function(v199){
        ((v199)["fname"] = "FIND-PACKAGE");
        return v199;
    })((function (values,v195){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (l104.fvalue(pv, v195) !== l3.value ? (function(){
                        return (function(){
                            throw ({type: 'block', id: 86, value: v195, message: 'Return from unknown block FIND-PACKAGE.'})
                        })();
                    })() : l3.value);
                    return (function(v196){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v197,v198){
                                        (function(){
                                            while(v197 !== l3.value){
                                                (v198 = (function(){
                                                    var tmp = v197;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    (l93.fvalue(pv, (function(){
                                                        var symbol = l106;
                                                        var func = symbol.fvalue;
                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                        return func;
                                                    })()(pv, v198), v196) !== l3.value ? (function(){
                                                        return (function(){
                                                            throw ({type: 'block', id: 87, value: v198, message: 'Return from unknown block NIL.'})
                                                        })();
                                                    })() : l3.value);
                                                    return l3.value;
                                                })();
                                                (v197 = (function(){
                                                    var tmp = v197;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })());
                                            }return l3.value;
                                        })();
                                        return l3.value;
                                    })((function(){
                                        var symbol = l100;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })(),l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 87)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l92.fvalue(pv, v195));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 86)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l105;
})();
(function(){
    (l103).fvalue = (function(v202){
        ((v202)["fname"] = "FIND-PACKAGE-OR-FAIL");
        return v202;
    })((function (values,v200){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v201){
                        return (v201 !== l3.value ? v201 : (function(){
                            throw "Package unknown.";
                        })());
                    })(l105.fvalue(pv, v200));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 88)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l103;
})();
(function(){
    (l106).fvalue = (function(v205){
        ((v205)["fname"] = "PACKAGE-NAME");
        return v205;
    })((function (values,v203){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v204){
                        return (function(){
                            var tmp = (v204)["packageName"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })(l103.fvalue(pv, v203));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 89)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l106;
})();
var l107 = {name: "%PACKAGE-SYMBOLS"};
(function(){
    (l107).fvalue = (function(v208){
        ((v208)["fname"] = "%PACKAGE-SYMBOLS");
        return v208;
    })((function (values,v206){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v207){
                        return (function(){
                            var tmp = (v207)["symbols"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })(l103.fvalue(pv, v206));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 90)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l107;
})();
var l108 = {name: "PACKAGE-USE-LIST"};
(function(){
    (l108).fvalue = (function(v211){
        ((v211)["fname"] = "PACKAGE-USE-LIST");
        return v211;
    })((function (values,v209){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v210){
                        return (function(){
                            var tmp = (v210)["use"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })(l103.fvalue(pv, v209));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 91)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l108;
})();
var l109 = {name: "%PACKAGE-EXTERNAL-SYMBOLS"};
(function(){
    (l109).fvalue = (function(v214){
        ((v214)["fname"] = "%PACKAGE-EXTERNAL-SYMBOLS");
        return v214;
    })((function (values,v212){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v213){
                        return (function(){
                            var tmp = (v213)["exports"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })(l103.fvalue(pv, v212));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 92)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l109;
})();
var l110 = {name: "*COMMON-LISP-PACKAGE*"};
(function(){
    (((l110.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l110).value = l102.fvalue(pv, "CL"));
    })());
    return l110;
})();
var l111 = {name: "*USER-PACKAGE*"};
(function(){
    (((l111.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l111).value = l102.fvalue(pv, "CL-USER", l42.fvalue(pv, (function(){
            var symbol = l110;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })())));
    })());
    return l111;
})();
var l112 = {name: "*KEYWORD-PACKAGE*"};
(function(){
    (((l112.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l112).value = l102.fvalue(pv, "KEYWORD"));
    })());
    return l112;
})();
var l113 = {name: "KEYWORDP"};
var l114 = {name: "SYMBOL-PACKAGE"};
(function(){
    (l113).fvalue = (function(v216){
        ((v216)["fname"] = "KEYWORDP");
        return v216;
    })((function (values,v215){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v215;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (((function(){
                        var symbol = l114;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v215) === (function(){
                        var symbol = l112;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())?l4.value: l3.value) : l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 93)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l113;
})();
var l115 = {name: "*PACKAGE*"};
(function(){
    (((l115.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l115).value = (function(){
            var symbol = l110;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })());
    })());
    return l115;
})();
var l116 = {name: "IN-PACKAGE"};
l116;
var l117 = {name: "%INTERN-SYMBOL"};
(function(){
    (l117).fvalue = (function(v219){
        ((v219)["fname"] = "%INTERN-SYMBOL");
        return v219;
    })((function (values,v217){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v218){
                        ((v217)["package"] = (function(){
                            var symbol = l110;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                        return ((v218)[(v217).name] = v217);
                    })(l107.fvalue(pv, (function(){
                        var symbol = l110;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 94)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l117;
})();
var l118 = {name: "%FIND-SYMBOL"};
(function(){
    (l118).fvalue = (function(v227){
        ((v227)["fname"] = "%FIND-SYMBOL");
        return v227;
    })((function (values,v220,v221){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v222){
                        return (function(v223){
                            return ((((v220) in (v223))?l4.value: l3.value) !== l3.value ? ({car: (function(){
                                var tmp = (v223)[v220];
                                return tmp == undefined? l3.value: tmp ;
                            })(), cdr: l4.value}) : (function(){
                                try {
                                    return (function(){
                                        return (function(v224,v225){
                                            (function(){
                                                while(v224 !== l3.value){
                                                    (v225 = (function(){
                                                        var tmp = v224;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })());
                                                    (function(){
                                                        (function(v226){
                                                            return ((((v220) in (v226))?l4.value: l3.value) !== l3.value ? (function(){
                                                                return (function(){
                                                                    throw ({type: 'block', id: 95, value: ({car: (function(){
                                                                        var tmp = (v226)[v220];
                                                                        return tmp == undefined? l3.value: tmp ;
                                                                    })(), cdr: l4.value}), message: 'Return from unknown block %FIND-SYMBOL.'})
                                                                })();
                                                            })() : l3.value);
                                                        })(l109.fvalue(pv, v225));
                                                        return l3.value;
                                                    })();
                                                    (v224 = (function(){
                                                        var tmp = v224;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })());
                                                }return l3.value;
                                            })();
                                            return ({car: l3.value, cdr: l3.value});
                                        })(l108.fvalue(pv, v222),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 96)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })());
                        })(l107.fvalue(pv, v222));
                    })(l103.fvalue(pv, v221));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 95)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l118;
})();
var l119 = {name: "FIND-SYMBOL"};
(function(){
    (l119).fvalue = (function(v230){
        ((v230)["fname"] = "FIND-SYMBOL");
        return v230;
    })((function (values,v228,v229){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        switch(arguments.length-1){
        case 1:
        v229=(function(){
            var symbol = l115;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = l118.fvalue(pv, v228, v229);
                        return tmp === l3.value? l3.value: tmp.car;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 97)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l119;
})();
var l120 = {name: "INTERN"};
var l121 = {name: "EXPORT"};
(function(){
    (l120).fvalue = (function(v237){
        ((v237)["fname"] = "INTERN");
        return v237;
    })((function (values,v231,v232){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        switch(arguments.length-1){
        case 1:
        v232=(function(){
            var symbol = l115;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (function(v233){
                        return (function(v234){
                            return ((function(){
                                var tmp = v234;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })() !== l3.value ? (function(){
                                var tmp = v234;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() : (function(v235){
                                (function(){
                                    var tmp = (v235)[v231];
                                    return tmp == undefined? l3.value: tmp ;
                                })();
                                return (function(v236){
                                    ((v236)["package"] = v233);
                                    (((v233 === (function(){
                                        var symbol = l112;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })())?l4.value: l3.value) !== l3.value ? (function(){
                                        ((v236)["value"] = v236);
                                        return (function(){
                                            var symbol = l121;
                                            var func = symbol.fvalue;
                                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                            return func;
                                        })()(pv, l42.fvalue(pv, v236), v233);
                                    })() : l3.value);
                                    return ((v235)[v231] = v236);
                                })((function(){
                                    var name = v231;
                                    if (typeof name != 'string')
                                        throw 'The value ' + name + ' is not a type string.';
                                    return ({name: name});
                                })());
                            })(l107.fvalue(pv, v233)));
                        })(l118.fvalue(pv, v231, v233));
                    })(l103.fvalue(pv, v232));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 98)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l120;
})();
(function(){
    (l114).fvalue = (function(v239){
        ((v239)["fname"] = "SYMBOL-PACKAGE");
        return v239;
    })((function (values,v238){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (((function(){
                        var tmp = v238;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? l3.value : (function(){
                        return (function(){
                            throw "it is not a symbol";
                        })();
                    })());
                    return (function(){
                        var tmp = (v238)["package"];
                        return tmp == undefined? l3.value: tmp ;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 99)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l114;
})();
(function(){
    (l121).fvalue = (function(v245){
        ((v245)["fname"] = "EXPORT");
        return v245;
    })((function (values,v240,v241){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        switch(arguments.length-1){
        case 1:
        v241=(function(){
            var symbol = l115;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (function(v242){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v243,v244){
                                        (function(){
                                            while(v243 !== l3.value){
                                                (v244 = (function(){
                                                    var tmp = v243;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    ((v242)[(v244).name] = v244);
                                                    return l3.value;
                                                })();
                                                (v243 = (function(){
                                                    var tmp = v243;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })());
                                            }return l3.value;
                                        })();
                                        return l4.value;
                                    })(v240,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 101)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l109.fvalue(pv, v241));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 100)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l121;
})();
var l122 = {name: "GET-UNIVERSAL-TIME"};
(function(){
    (l122).fvalue = (function(v246){
        ((v246)["fname"] = "GET-UNIVERSAL-TIME");
        return v246;
    })((function (values){
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x1 = (Math.round(new Date() / 1000));
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = 2208988800;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 102)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l122;
})();
var l123 = {name: "*NEWLINE*"};
(function(){
    (((l123.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l123).value = l92.fvalue(pv, l72.fvalue(pv, 10)));
    })());
    return l123;
})();
var l124 = {name: "CONCAT"};
(function(){
    (l124).fvalue = (function(v248){
        ((v248)["fname"] = "CONCAT");
        return v248;
    })((function (values){
        var v247= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v247 = {car: arguments[i], cdr: 
        v247};
        return (function(){
            try {
                return (function(){
                    return l58.fvalue(values, (function(){
                        var symbol = l68;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v247, "");
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 103)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l124;
})();
var l125 = {name: "CONCATF"};
l125;
var l126 = {name: "JOIN"};
(function(){
    (l126).fvalue = (function(v251){
        ((v251)["fname"] = "JOIN");
        return v251;
    })((function (values,v249,v250){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        switch(arguments.length-1){
        case 1:
        v250="";
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (l11.fvalue(pv, v249) !== l3.value ? (function(){
                        return "";
                    })() : (l11.fvalue(pv, (function(){
                        var tmp = v249;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()) !== l3.value ? (function(){
                        return (function(){
                            var tmp = v249;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })() : (function(){
                        return l124.fvalue(values, (function(){
                            var tmp = v249;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), v250, l126.fvalue(pv, (function(){
                            var tmp = v249;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), v250));
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 104)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l126;
})();
var l127 = {name: "JOIN-TRAILING"};
(function(){
    (l127).fvalue = (function(v254){
        ((v254)["fname"] = "JOIN-TRAILING");
        return v254;
    })((function (values,v252,v253){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        switch(arguments.length-1){
        case 1:
        v253="";
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (l11.fvalue(pv, v252) !== l3.value ? "" : l124.fvalue(values, (function(){
                        var tmp = v252;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), v253, l127.fvalue(pv, (function(){
                        var tmp = v252;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })(), v253)));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 105)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l127;
})();
var l128 = {name: "MAPCONCAT"};
(function(){
    (l128).fvalue = (function(v257){
        ((v257)["fname"] = "MAPCONCAT");
        return v257;
    })((function (values,v255,v256){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l126.fvalue(values, l69.fvalue(pv, v255, v256));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 106)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l128;
})();
var l129 = {name: "VECTOR-TO-LIST"};
(function(){
    (l129).fvalue = (function(v263){
        ((v263)["fname"] = "VECTOR-TO-LIST");
        return v263;
    })((function (values,v258){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v259,v260){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v261,v262){
                                        (function(){
                                            while((function(){
                                                var x1 = v261;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v262;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return (x1<x2?l4.value: l3.value);
                                            })() !== l3.value){
                                                (function(){
                                                    (v259 = ({car: (function(){
                                                        var x = (v258)[v261];
                                                        if (x === undefined) throw 'Out of range';
                                                        return x;
                                                    })(), cdr: v259}));
                                                    return l3.value;
                                                })();
                                                (v261 = (function(){
                                                    var x1 = v261;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = 1;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1+x2;
                                                })());
                                            }return l3.value;
                                        })();
                                        return l64.fvalue(values, v259);
                                    })(0,v260);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 108)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l3.value,l67.fvalue(pv, v258));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 107)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l129;
})();
var l130 = {name: "LIST-TO-VECTOR"};
(function(){
    (l130).fvalue = (function(v269){
        ((v269)["fname"] = "LIST-TO-VECTOR");
        return v269;
    })((function (values,v264){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v265,v266){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v267,v268){
                                        (function(){
                                            while(v267 !== l3.value){
                                                (v268 = (function(){
                                                    var tmp = v267;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    (function(){
                                                        var x = v265;
                                                        var i = v266;
                                                        if (i < 0 || i >= x.length) throw 'Out of range';
                                                        return x[i] = v268;
                                                    })();
                                                    (v266 = (function(){
                                                        var x1 = v266;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = 1;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })());
                                                    return l3.value;
                                                })();
                                                (v267 = (function(){
                                                    var tmp = v267;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })());
                                            }return l3.value;
                                        })();
                                        return v265;
                                    })(v264,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 110)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })((function(){
                        var r = [];
                        for (var i = 0; i < l67.fvalue(pv, v264); i++)
                            r.push(l3.value);
                        return r;
                    })(),0);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 109)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l130;
})();
var l131 = {name: "VALUES-LIST"};
(function(){
    (l131).fvalue = (function(v271){
        ((v271)["fname"] = "VALUES-LIST");
        return v271;
    })((function (values,v270){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return values.apply(this, l130.fvalue(pv, v270));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 111)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l131;
})();
var l132 = {name: "VALUES"};
(function(){
    (l132).fvalue = (function(v273){
        ((v273)["fname"] = "VALUES");
        return v273;
    })((function (values){
        var v272= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v272 = {car: arguments[i], cdr: 
        v272};
        return (function(){
            try {
                return (function(){
                    return l131.fvalue(values, v272);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 112)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l132;
})();
var l133 = {name: "MULTIPLE-VALUE-BIND"};
l133;
var l134 = {name: "MULTIPLE-VALUE-LIST"};
l134;
var l135 = {name: "INDENT"};
(function(){
    (l135).fvalue = (function(v280){
        ((v280)["fname"] = "INDENT");
        return v280;
    })((function (values){
        var v274= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v274 = {car: arguments[i], cdr: 
        v274};
        return (function(){
            try {
                return (function(){
                    return (function(v275){
                        return (function(v276,v277,v278){
                            (l76.fvalue(pv, l67.fvalue(pv, v275)) !== l3.value ? (function(){
                                return (v276 = l124.fvalue(pv, v276, (function(){
                                    return "    ";
                                })()));
                            })() : l3.value);
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while((function(){
                                                var x1 = v277;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v278;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return (x1<x2?l4.value: l3.value);
                                            })() !== l3.value){
                                                (function(v279){
                                                    return (v276 = l124.fvalue(pv, v276, (function(){
                                                        return v279;
                                                    })()));
                                                })(((l74.fvalue(pv, (function(){
                                                    var string = v275;
                                                    var index = v277;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })(), 10) !== l3.value ? ((function(){
                                                    var x1 = v277;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = l22.fvalue(pv, v278);
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return (x1<x2?l4.value: l3.value);
                                                })() !== l3.value ? l26.fvalue(pv, l74.fvalue(pv, (function(){
                                                    var string = v275;
                                                    var index = l21.fvalue(pv, v277);
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })(), 10)) : l3.value) : l3.value) !== l3.value ? l124.fvalue(pv, l92.fvalue(pv, 10), "    ") : l92.fvalue(pv, (function(){
                                                    var string = v275;
                                                    var index = v277;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })())));
                                                (v277 = (function(){
                                                    var x1 = v277;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = 1;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1+x2;
                                                })());
                                            }return l3.value;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 114)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return v276;
                        })("",0,l67.fvalue(pv, v275));
                    })(l126.fvalue(pv, v274));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 113)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l135;
})();
(function(){
    (l16).fvalue = (function(v284){
        ((v284)["fname"] = "INTEGER-TO-STRING");
        return v284;
    })((function (values,v281){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l23.fvalue(pv, v281) !== l3.value ? (function(){
                        return "0";
                    })() : (l77.fvalue(pv, v281) !== l3.value ? (function(){
                        return l124.fvalue(values, "-", l16.fvalue(pv, (function(){
                            var x1 = 0;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = v281;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return x1-x2;
                        })()));
                    })() : (function(){
                        return (function(v282){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(l26.fvalue(pv, l23.fvalue(pv, v281)) !== l3.value){
                                                (v282 = ({car: (function(){
                                                    var x = v281;
                                                    var y = 10;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x%y;
                                                })(), cdr: v282}));
                                                (v281 = l24.fvalue(pv, v281, 10));
                                            }return l3.value;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 116)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return l126.fvalue(values, l69.fvalue(pv, (function (values,v283){
                                if (arguments.length < 2) throw 'too few arguments';
                                if (arguments.length > 2) throw 'too many arguments';
                                return l92.fvalue(values, (function(){
                                    var string = "0123456789";
                                    var index = v283;
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    if (typeof index != 'number')
                                        throw 'The value ' + index + ' is not a type number.';
                                    return string.charCodeAt(index);
                                })());
                            
                            }), v282));
                        })(l3.value);
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 115)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l16;
})();
var l136 = {name: "JS!BOOL"};
var l137 = {name: "LS-COMPILE"};
(function(){
    (l136).fvalue = (function(v286){
        ((v286)["fname"] = "JS!BOOL");
        return v286;
    })((function (values,v285){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l124.fvalue(values, "(", v285, "?", (function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, l4.value), ": ", (function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, l3.value), ")");
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 117)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l136;
})();
var l138 = {name: "JS!SELFCALL"};
l138;
var l139 = {name: "PRIN1-TO-STRING"};
var l140 = {name: "ESCAPE-STRING"};
(function(){
    (l139).fvalue = (function(v292){
        ((v292)["fname"] = "PRIN1-TO-STRING");
        return v292;
    })((function (values,v287){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v287;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return ((function(){
                            var tmp = l118.fvalue(pv, (v287).name, (function(){
                                var symbol = l115;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })() !== l3.value ? (v287).name : (function(v288,v289){
                            return l124.fvalue(values, (l11.fvalue(pv, v288) !== l3.value ? (function(){
                                return "#";
                            })() : (((v288 === l105.fvalue(pv, "KEYWORD"))?l4.value: l3.value) !== l3.value ? (function(){
                                return "";
                            })() : (function(){
                                return l106.fvalue(pv, v288);
                            })())), ":", v289);
                        })(l114.fvalue(pv, v287),(v287).name));
                    })() : (l75.fvalue(pv, v287) !== l3.value ? (function(){
                        return l16.fvalue(values, v287);
                    })() : (((typeof(v287) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l124.fvalue(values, "\"", (function(){
                            var symbol = l140;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(pv, v287), "\"");
                    })() : (((typeof v287 == 'function')?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v290){
                            return (v290 !== l3.value ? l124.fvalue(values, "#<FUNCTION ", v290, ">") : l124.fvalue(values, "#<FUNCTION>"));
                        })((function(){
                            var tmp = (v287)["fname"];
                            return tmp == undefined? l3.value: tmp ;
                        })());
                    })() : (l57.fvalue(pv, v287) !== l3.value ? (function(){
                        return l124.fvalue(values, "(", l127.fvalue(pv, l69.fvalue(pv, (function(){
                            var symbol = l139;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l81.fvalue(pv, v287)), " "), (function(v291){
                            return (l11.fvalue(pv, (function(){
                                var tmp = v291;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })()) !== l3.value ? l139.fvalue(pv, (function(){
                                var tmp = v291;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()) : l124.fvalue(pv, l139.fvalue(pv, (function(){
                                var tmp = v291;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()), " . ", l139.fvalue(pv, (function(){
                                var tmp = v291;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })())));
                        })(l80.fvalue(pv, v287)), ")");
                    })() : (((function(){
                        var x = v287;
                        return typeof x === 'object' && 'length' in x;
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return l124.fvalue(values, "#", l139.fvalue(pv, l129.fvalue(pv, v287)));
                    })() : (l104.fvalue(pv, v287) !== l3.value ? (function(){
                        return l124.fvalue(values, "#<PACKAGE ", l106.fvalue(pv, v287), ">");
                    })() : l3.value)))))));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 118)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l139;
})();
(function(){
    (l96).fvalue = (function(v294){
        ((v294)["fname"] = "WRITE-LINE");
        return v294;
    })((function (values,v293){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var x = v293;
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return lisp.write(x);
                    })();
                    (function(){
                        var x = (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })();
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return lisp.write(x);
                    })();
                    return v293;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 119)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l96;
})();
var l141 = {name: "WARN"};
(function(){
    (l141).fvalue = (function(v296){
        ((v296)["fname"] = "WARN");
        return v296;
    })((function (values,v295){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var x = "WARNING: ";
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return lisp.write(x);
                    })();
                    return l96.fvalue(values, v295);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 120)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l141;
})();
var l142 = {name: "PRINT"};
(function(){
    (l142).fvalue = (function(v298){
        ((v298)["fname"] = "PRINT");
        return v298;
    })((function (values,v297){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l96.fvalue(pv, l139.fvalue(pv, v297));
                    return v297;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 121)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l142;
})();
var l143 = {name: "MAKE-STRING-STREAM"};
(function(){
    (l143).fvalue = (function(v300){
        ((v300)["fname"] = "MAKE-STRING-STREAM");
        return v300;
    })((function (values,v299){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ({car: v299, cdr: 0});
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 122)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l143;
})();
var l144 = {name: "%PEEK-CHAR"};
(function(){
    (l144).fvalue = (function(v302){
        ((v302)["fname"] = "%PEEK-CHAR");
        return v302;
    })((function (values,v301){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var x1 = (function(){
                            var tmp = v301;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = l67.fvalue(pv, (function(){
                            var tmp = v301;
                            return tmp === l3.value? l3.value: tmp.car;
                        })());
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1<x2?l4.value: l3.value);
                    })() !== l3.value ? (function(){
                        var string = (function(){
                            var tmp = v301;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        var index = (function(){
                            var tmp = v301;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        if (typeof string != 'string')
                            throw 'The value ' + string + ' is not a type string.';
                        if (typeof index != 'number')
                            throw 'The value ' + index + ' is not a type number.';
                        return string.charCodeAt(index);
                    })() : l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 123)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l144;
})();
var l145 = {name: "%READ-CHAR"};
(function(){
    (l145).fvalue = (function(v305){
        ((v305)["fname"] = "%READ-CHAR");
        return v305;
    })((function (values,v303){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var x1 = (function(){
                            var tmp = v303;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = l67.fvalue(pv, (function(){
                            var tmp = v303;
                            return tmp === l3.value? l3.value: tmp.car;
                        })());
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1<x2?l4.value: l3.value);
                    })() !== l3.value ? (function(v304){
                        (function(){
                            var x = v303;
                            if (typeof x != 'object')
                                throw 'The value ' + x + ' is not a type object.';
                            return (x.cdr = l21.fvalue(pv, (function(){
                                var tmp = v303;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })()));
                        })();
                        return v304;
                    })((function(){
                        var string = (function(){
                            var tmp = v303;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        var index = (function(){
                            var tmp = v303;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        if (typeof string != 'string')
                            throw 'The value ' + string + ' is not a type string.';
                        if (typeof index != 'number')
                            throw 'The value ' + index + ' is not a type number.';
                        return string.charCodeAt(index);
                    })()) : l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 124)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l145;
})();
var l146 = {name: "WHITESPACEP"};
(function(){
    (l146).fvalue = (function(v309){
        ((v309)["fname"] = "WHITESPACEP");
        return v309;
    })((function (values,v306){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v307){
                        return (v307 !== l3.value ? v307 : (function(v308){
                            return (v308 !== l3.value ? v308 : l74.fvalue(values, v306, 9));
                        })(l74.fvalue(pv, v306, 10)));
                    })(l74.fvalue(pv, v306, 32));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 125)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l146;
})();
var l147 = {name: "SKIP-WHITESPACES"};
(function(){
    (l147).fvalue = (function(v312){
        ((v312)["fname"] = "SKIP-WHITESPACES");
        return v312;
    })((function (values,v310){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v311){
                        (v311 = l144.fvalue(pv, v310));
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v311 !== l3.value ? l146.fvalue(pv, v311) : l3.value) !== l3.value){
                                            l145.fvalue(pv, v310);
                                            (v311 = l144.fvalue(pv, v310));
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 127)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 126)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l147;
})();
var l148 = {name: "TERMINALP"};
(function(){
    (l148).fvalue = (function(v317){
        ((v317)["fname"] = "TERMINALP");
        return v317;
    })((function (values,v313){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v314){
                        return (v314 !== l3.value ? v314 : (function(v315){
                            return (v315 !== l3.value ? v315 : (function(v316){
                                return (v316 !== l3.value ? v316 : l74.fvalue(values, 40, v313));
                            })(l74.fvalue(pv, 41, v313)));
                        })(l146.fvalue(pv, v313)));
                    })(l11.fvalue(pv, v313));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 128)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l148;
})();
var l149 = {name: "READ-UNTIL"};
(function(){
    (l149).fvalue = (function(v322){
        ((v322)["fname"] = "READ-UNTIL");
        return v322;
    })((function (values,v318,v319){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v320,v321){
                        (v321 = l144.fvalue(pv, v318));
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v321 !== l3.value ? l26.fvalue(pv, (v319)(pv, v321)) : l3.value) !== l3.value){
                                            (v320 = l124.fvalue(pv, v320, l92.fvalue(pv, v321)));
                                            l145.fvalue(pv, v318);
                                            (v321 = l144.fvalue(pv, v318));
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 130)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v320;
                    })("",l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 129)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l149;
})();
var l150 = {name: "SKIP-WHITESPACES-AND-COMMENTS"};
(function(){
    (l150).fvalue = (function(v326){
        ((v326)["fname"] = "SKIP-WHITESPACES-AND-COMMENTS");
        return v326;
    })((function (values,v323){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v324){
                        l147.fvalue(pv, v323);
                        (v324 = l144.fvalue(pv, v323));
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v324 !== l3.value ? l74.fvalue(pv, v324, 59) : l3.value) !== l3.value){
                                            l149.fvalue(pv, v323, (function (values,v325){
                                                if (arguments.length < 2) throw 'too few arguments';
                                                if (arguments.length > 2) throw 'too many arguments';
                                                return l74.fvalue(values, v325, 10);
                                            
                                            }));
                                            l147.fvalue(pv, v323);
                                            (v324 = l144.fvalue(pv, v323));
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 132)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 131)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l150;
})();
var l151 = {name: "%READ-LIST"};
var l152 = {name: "LS-READ"};
(function(){
    (l151).fvalue = (function(v330){
        ((v330)["fname"] = "%READ-LIST");
        return v330;
    })((function (values,v327){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l150.fvalue(pv, v327);
                    return (function(v328){
                        return (l11.fvalue(pv, v328) !== l3.value ? (function(){
                            return (function(){
                                throw "Unspected EOF";
                            })();
                        })() : (l74.fvalue(pv, v328, 41) !== l3.value ? (function(){
                            l145.fvalue(pv, v327);
                            return l3.value;
                        })() : (l74.fvalue(pv, v328, 46) !== l3.value ? (function(){
                            l145.fvalue(pv, v327);
                            return (function(v329){
                                l150.fvalue(pv, v327);
                                (l74.fvalue(pv, l145.fvalue(pv, v327), 41) !== l3.value ? l3.value : (function(){
                                    return (function(){
                                        throw "')' was expected.";
                                    })();
                                })());
                                return v329;
                            })((function(){
                                var symbol = l152;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(pv, v327));
                        })() : (function(){
                            return ({car: (function(){
                                var symbol = l152;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(pv, v327), cdr: l151.fvalue(pv, v327)});
                        })())));
                    })(l144.fvalue(pv, v327));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 133)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l151;
})();
var l153 = {name: "READ-STRING"};
(function(){
    (l153).fvalue = (function(v334){
        ((v334)["fname"] = "READ-STRING");
        return v334;
    })((function (values,v331){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v332,v333){
                        (v333 = l145.fvalue(pv, v331));
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(l26.fvalue(pv, l25.fvalue(pv, v333, 34)) !== l3.value){
                                            (l11.fvalue(pv, v333) !== l3.value ? (function(){
                                                return (function(){
                                                    throw "Unexpected EOF";
                                                })();
                                            })() : l3.value);
                                            (l25.fvalue(pv, v333, 92) !== l3.value ? (function(){
                                                return (v333 = l145.fvalue(pv, v331));
                                            })() : l3.value);
                                            (v332 = l124.fvalue(pv, v332, l92.fvalue(pv, v333)));
                                            (v333 = l145.fvalue(pv, v331));
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 135)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v332;
                    })("",l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 134)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l153;
})();
var l154 = {name: "READ-SHARP"};
(function(){
    (l154).fvalue = (function(v339){
        ((v339)["fname"] = "READ-SHARP");
        return v339;
    })((function (values,v335){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l145.fvalue(pv, v335);
                    return (function(v336){
                        return (l25.fvalue(pv, v336, 39) !== l3.value ? (function(){
                            return l42.fvalue(values, l98, (function(){
                                var symbol = l152;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(pv, v335));
                        })() : (l25.fvalue(pv, v336, 40) !== l3.value ? (function(){
                            return l130.fvalue(values, l151.fvalue(pv, v335));
                        })() : (l25.fvalue(pv, v336, 58) !== l3.value ? (function(){
                            return (function(){
                                var name = (function(){
                                    var x = l149.fvalue(pv, v335, (function(){
                                        var symbol = l148;
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
                            })();
                        })() : (l25.fvalue(pv, v336, 92) !== l3.value ? (function(){
                            return (function(v337){
                                return (l93.fvalue(pv, v337, "space") !== l3.value ? (function(){
                                    return l73.fvalue(values, 32);
                                })() : (l93.fvalue(pv, v337, "tab") !== l3.value ? (function(){
                                    return l73.fvalue(values, 9);
                                })() : (l93.fvalue(pv, v337, "newline") !== l3.value ? (function(){
                                    return l73.fvalue(values, 10);
                                })() : (function(){
                                    return l73.fvalue(values, (function(){
                                        var string = v337;
                                        var index = 0;
                                        if (typeof string != 'string')
                                            throw 'The value ' + string + ' is not a type string.';
                                        if (typeof index != 'number')
                                            throw 'The value ' + index + ' is not a type number.';
                                        return string.charCodeAt(index);
                                    })());
                                })())));
                            })(l124.fvalue(pv, l92.fvalue(pv, l145.fvalue(pv, v335)), l149.fvalue(pv, v335, (function(){
                                var symbol = l148;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })())));
                        })() : (l25.fvalue(pv, v336, 43) !== l3.value ? (function(){
                            return (function(v338){
                                return (l93.fvalue(pv, v338, "common-lisp") !== l3.value ? (function(){
                                    (function(){
                                        var symbol = l152;
                                        var func = symbol.fvalue;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(pv, v335);
                                    return (function(){
                                        var symbol = l152;
                                        var func = symbol.fvalue;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(values, v335);
                                })() : (l93.fvalue(pv, v338, "ecmalisp") !== l3.value ? (function(){
                                    return (function(){
                                        var symbol = l152;
                                        var func = symbol.fvalue;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(values, v335);
                                })() : (function(){
                                    return (function(){
                                        throw "Unknown reader form.";
                                    })();
                                })()));
                            })(l149.fvalue(pv, v335, (function(){
                                var symbol = l148;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()));
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })())))));
                    })(l145.fvalue(pv, v335));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 136)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l154;
})();
var l155 = {name: "READ-SYMBOL"};
(function(){
    (l155).fvalue = (function(v347){
        ((v347)["fname"] = "READ-SYMBOL");
        return v347;
    })((function (values,v340){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v341,v342,v343,v344,v345){
                        (v345 = 0);
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(((function(){
                                            var x1 = v345;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v341;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return (x1<x2?l4.value: l3.value);
                                        })() !== l3.value ? l26.fvalue(pv, l74.fvalue(pv, (function(){
                                            var string = v340;
                                            var index = v345;
                                            if (typeof string != 'string')
                                                throw 'The value ' + string + ' is not a type string.';
                                            if (typeof index != 'number')
                                                throw 'The value ' + index + ' is not a type number.';
                                            return string.charCodeAt(index);
                                        })(), 58)) : l3.value) !== l3.value){
                                            (v345 = (function(){
                                                var x1 = v345;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = 1;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })());
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 138)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        ((function(){
                            var x1 = v345;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = v341;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return (x1==x2?l4.value: l3.value);
                        })() !== l3.value ? (function(){
                            (v343 = v340);
                            (v342 = (function(){
                                var symbol = l115;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                            return (v344 = l4.value);
                        })() : (function(){
                            (l23.fvalue(pv, v345) !== l3.value ? (v342 = "KEYWORD") : (v342 = (function(){
                                var x = l87.fvalue(pv, v340, 0, v345);
                                if (typeof x != 'string')
                                    throw 'The value ' + x + ' is not a type string.';
                                return x.toUpperCase();
                            })()));
                            (v345 = (function(){
                                var x1 = v345;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = 1;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })());
                            (l74.fvalue(pv, (function(){
                                var string = v340;
                                var index = v345;
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })(), 58) !== l3.value ? (function(){
                                (v344 = l4.value);
                                return (v345 = (function(){
                                    var x1 = v345;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = 1;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })());
                            })() : l3.value);
                            return (v343 = l87.fvalue(pv, v340, v345));
                        })());
                        (v343 = (function(){
                            var x = v343;
                            if (typeof x != 'string')
                                throw 'The value ' + x + ' is not a type string.';
                            return x.toUpperCase();
                        })());
                        (v342 = l105.fvalue(pv, v342));
                        return ((function(v346){
                            return (v346 !== l3.value ? v346 : ((v342 === l105.fvalue(pv, "KEYWORD"))?l4.value: l3.value));
                        })(v344) !== l3.value ? l120.fvalue(values, v343, v342) : l119.fvalue(values, v343, v342));
                    })(l67.fvalue(pv, v340),l3.value,l3.value,l3.value,l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 137)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l155;
})();
var l156 = {name: "*EOF*"};
(function(){
    (((l156.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l156).value = l15.fvalue(pv));
    })());
    return l156;
})();
var l157 = {name: "QUOTE"};
var l158 = {name: "BACKQUOTE"};
var l159 = {name: "UNQUOTE-SPLICING"};
var l160 = {name: "UNQUOTE"};
(function(){
    (l152).fvalue = (function(v352){
        ((v352)["fname"] = "LS-READ");
        return v352;
    })((function (values,v348){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l150.fvalue(pv, v348);
                    return (function(v349){
                        return ((function(v350){
                            return (v350 !== l3.value ? v350 : l74.fvalue(pv, v349, 41));
                        })(l11.fvalue(pv, v349)) !== l3.value ? (function(){
                            return (function(){
                                var symbol = l156;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })();
                        })() : (l74.fvalue(pv, v349, 40) !== l3.value ? (function(){
                            l145.fvalue(pv, v348);
                            return l151.fvalue(values, v348);
                        })() : (l74.fvalue(pv, v349, 39) !== l3.value ? (function(){
                            l145.fvalue(pv, v348);
                            return l42.fvalue(values, l157, l152.fvalue(pv, v348));
                        })() : (l74.fvalue(pv, v349, 96) !== l3.value ? (function(){
                            l145.fvalue(pv, v348);
                            return l42.fvalue(values, l158, l152.fvalue(pv, v348));
                        })() : (l74.fvalue(pv, v349, 34) !== l3.value ? (function(){
                            l145.fvalue(pv, v348);
                            return l153.fvalue(values, v348);
                        })() : (l74.fvalue(pv, v349, 44) !== l3.value ? (function(){
                            l145.fvalue(pv, v348);
                            return (l25.fvalue(pv, l144.fvalue(pv, v348), 64) !== l3.value ? (function(){
                                l145.fvalue(pv, v348);
                                return l42.fvalue(values, l159, l152.fvalue(pv, v348));
                            })() : l42.fvalue(values, l160, l152.fvalue(pv, v348)));
                        })() : (l74.fvalue(pv, v349, 35) !== l3.value ? (function(){
                            return l154.fvalue(values, v348);
                        })() : (function(){
                            return (function(v351){
                                return (l90.fvalue(pv, (function(){
                                    var symbol = l86;
                                    var func = symbol.fvalue;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })(), v351) !== l3.value ? l88.fvalue(values, v351) : l155.fvalue(values, v351));
                            })(l149.fvalue(pv, v348, (function(){
                                var symbol = l148;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()));
                        })())))))));
                    })(l144.fvalue(pv, v348));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 139)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l152;
})();
var l161 = {name: "LS-READ-FROM-STRING"};
(function(){
    (l161).fvalue = (function(v354){
        ((v354)["fname"] = "LS-READ-FROM-STRING");
        return v354;
    })((function (values,v353){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l152.fvalue(values, l143.fvalue(pv, v353));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 140)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l161;
})();
var l162 = {name: "*MULTIPLE-VALUE-P*"};
(function(){
    (((l162.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l162).value = l3.value);
    })());
    return l162;
})();
var l163 = {name: "*COMPILATION-UNIT-CHECKS*"};
(function(){
    (((l163.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l163).value = l3);
    })());
    return l163;
})();
var l164 = {name: "MAKE-BINDING"};
(function(){
    (l164).fvalue = (function(v359){
        ((v359)["fname"] = "MAKE-BINDING");
        return v359;
    })((function (values,v355,v356,v357,v358){
        if (arguments.length < 4) throw 'too few arguments';
        if (arguments.length > 5) throw 'too many arguments';
        switch(arguments.length-1){
        case 3:
        v358=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return l42.fvalue(values, v355, v356, v357, v358);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 141)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l164;
})();
var l165 = {name: "BINDING-NAME"};
(function(){
    (l165).fvalue = (function(v361){
        ((v361)["fname"] = "BINDING-NAME");
        return v361;
    })((function (values,v360){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l38.fvalue(values, v360);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 142)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l165;
})();
var l166 = {name: "BINDING-TYPE"};
(function(){
    (l166).fvalue = (function(v363){
        ((v363)["fname"] = "BINDING-TYPE");
        return v363;
    })((function (values,v362){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l39.fvalue(values, v362);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 143)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l166;
})();
var l167 = {name: "BINDING-VALUE"};
(function(){
    (l167).fvalue = (function(v365){
        ((v365)["fname"] = "BINDING-VALUE");
        return v365;
    })((function (values,v364){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l40.fvalue(values, v364);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 144)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l167;
})();
var l168 = {name: "BINDING-DECLARATIONS"};
(function(){
    (l168).fvalue = (function(v367){
        ((v367)["fname"] = "BINDING-DECLARATIONS");
        return v367;
    })((function (values,v366){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l41.fvalue(values, v366);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 145)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l168;
})();
var l169 = {name: "SET-BINDING-VALUE"};
(function(){
    (l169).fvalue = (function(v370){
        ((v370)["fname"] = "SET-BINDING-VALUE");
        return v370;
    })((function (values,v368,v369){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = l34.fvalue(pv, v368);
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = v369);
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 146)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l169;
})();
var l170 = {name: "SET-BINDING-DECLARATIONS"};
(function(){
    (l170).fvalue = (function(v373){
        ((v373)["fname"] = "SET-BINDING-DECLARATIONS");
        return v373;
    })((function (values,v371,v372){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = l36.fvalue(pv, v371);
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = v372);
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 147)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l170;
})();
var l171 = {name: "PUSH-BINDING-DECLARATION"};
(function(){
    (l171).fvalue = (function(v376){
        ((v376)["fname"] = "PUSH-BINDING-DECLARATION");
        return v376;
    })((function (values,v374,v375){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l170.fvalue(values, v375, ({car: v374, cdr: l168.fvalue(pv, v375)}));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 148)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l171;
})();
var l172 = {name: "MAKE-LEXENV"};
(function(){
    (l172).fvalue = (function(v377){
        ((v377)["fname"] = "MAKE-LEXENV");
        return v377;
    })((function (values){
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l42.fvalue(values, l3.value, l3.value, l3.value, l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 149)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l172;
})();
var l173 = {name: "COPY-LEXENV"};
(function(){
    (l173).fvalue = (function(v379){
        ((v379)["fname"] = "COPY-LEXENV");
        return v379;
    })((function (values,v378){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l71.fvalue(values, v378);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 150)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l173;
})();
var l174 = {name: "PUSH-TO-LEXENV"};
var l175 = {name: "BLOCK"};
var l176 = {name: "GOTAG"};
(function(){
    (l174).fvalue = (function(v384){
        ((v384)["fname"] = "PUSH-TO-LEXENV");
        return v384;
    })((function (values,v380,v381,v382){
        if (arguments.length < 4) throw 'too few arguments';
        if (arguments.length > 4) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v383){
                        return (l25.fvalue(pv, v383, l99) !== l3.value ? (function(){
                            return (function(){
                                var x = v381;
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v380, cdr: (function(){
                                    var tmp = v381;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })()}));
                            })();
                        })() : (l25.fvalue(pv, v383, l98) !== l3.value ? (function(){
                            return (function(){
                                var x = (function(){
                                    var tmp = v381;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })();
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v380, cdr: l32.fvalue(pv, v381)}));
                            })();
                        })() : (l25.fvalue(pv, v383, l175) !== l3.value ? (function(){
                            return (function(){
                                var x = l34.fvalue(pv, v381);
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v380, cdr: l35.fvalue(pv, v381)}));
                            })();
                        })() : (l25.fvalue(pv, v383, l176) !== l3.value ? (function(){
                            return (function(){
                                var x = l36.fvalue(pv, v381);
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v380, cdr: l37.fvalue(pv, v381)}));
                            })();
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })()))));
                    })(v382);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 151)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l174;
})();
var l177 = {name: "EXTEND-LEXENV"};
(function(){
    (l177).fvalue = (function(v391){
        ((v391)["fname"] = "EXTEND-LEXENV");
        return v391;
    })((function (values,v385,v386,v387){
        if (arguments.length < 4) throw 'too few arguments';
        if (arguments.length > 4) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v388){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v389,v390){
                                        (function(){
                                            while(v389 !== l3.value){
                                                (v390 = (function(){
                                                    var tmp = v389;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    l174.fvalue(pv, v390, v388, v387);
                                                    return l3.value;
                                                })();
                                                (v389 = (function(){
                                                    var tmp = v389;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })());
                                            }return l3.value;
                                        })();
                                        return v388;
                                    })(l64.fvalue(pv, v385),l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 153)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l173.fvalue(pv, v386));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 152)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l177;
})();
var l178 = {name: "LOOKUP-IN-LEXENV"};
(function(){
    (l178).fvalue = (function(v396){
        ((v396)["fname"] = "LOOKUP-IN-LEXENV");
        return v396;
    })((function (values,v392,v393,v394){
        if (arguments.length < 4) throw 'too few arguments';
        if (arguments.length > 4) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l91.fvalue(values, v392, (function(v395){
                        return (l25.fvalue(pv, v395, l99) !== l3.value ? (function(){
                            return l38.fvalue(pv, v393);
                        })() : (l25.fvalue(pv, v395, l98) !== l3.value ? (function(){
                            return l39.fvalue(pv, v393);
                        })() : (l25.fvalue(pv, v395, l175) !== l3.value ? (function(){
                            return l40.fvalue(pv, v393);
                        })() : (l25.fvalue(pv, v395, l176) !== l3.value ? (function(){
                            return l41.fvalue(pv, v393);
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })()))));
                    })(v394));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 154)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l178;
})();
var l179 = {name: "*ENVIRONMENT*"};
(function(){
    (((l179.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l179).value = l172.fvalue(pv));
    })());
    return l179;
})();
var l180 = {name: "*VARIABLE-COUNTER*"};
(function(){
    (((l180.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l180).value = 0);
    })());
    return l180;
})();
var l181 = {name: "GVARNAME"};
(function(){
    (l181).fvalue = (function(v398){
        ((v398)["fname"] = "GVARNAME");
        return v398;
    })((function (values,v397){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l124.fvalue(values, "v", l16.fvalue(pv, ((l180).value = (function(){
                        var x1 = (function(){
                            var symbol = l180;
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
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 155)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l181;
})();
var l182 = {name: "TRANSLATE-VARIABLE"};
(function(){
    (l182).fvalue = (function(v400){
        ((v400)["fname"] = "TRANSLATE-VARIABLE");
        return v400;
    })((function (values,v399){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l167.fvalue(values, l178.fvalue(pv, v399, (function(){
                        var symbol = l179;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l99));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 156)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l182;
})();
var l183 = {name: "EXTEND-LOCAL-ENV"};
var l184 = {name: "LEXICAL-VARIABLE"};
(function(){
    (l183).fvalue = (function(v406){
        ((v406)["fname"] = "EXTEND-LOCAL-ENV");
        return v406;
    })((function (values,v401){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v402){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v403,v404){
                                        (function(){
                                            while(v403 !== l3.value){
                                                (v404 = (function(){
                                                    var tmp = v403;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    (function(v405){
                                                        return l174.fvalue(pv, v405, v402, l99);
                                                    })(l164.fvalue(pv, v404, l184, l181.fvalue(pv, v404)));
                                                    return l3.value;
                                                })();
                                                (v403 = (function(){
                                                    var tmp = v403;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })());
                                            }return l3.value;
                                        })();
                                        return v402;
                                    })(v401,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 158)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l173.fvalue(pv, (function(){
                        var symbol = l179;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 157)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l183;
})();
var l185 = {name: "*TOPLEVEL-COMPILATIONS*"};
(function(){
    (((l185.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l185).value = l3.value);
    })());
    return l185;
})();
var l186 = {name: "TOPLEVEL-COMPILATION"};
(function(){
    (l186).fvalue = (function(v408){
        ((v408)["fname"] = "TOPLEVEL-COMPILATION");
        return v408;
    })((function (values,v407){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((l185).value = ({car: v407, cdr: (function(){
                        var symbol = l185;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()}));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 159)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l186;
})();
var l187 = {name: "NULL-OR-EMPTY-P"};
(function(){
    (l187).fvalue = (function(v410){
        ((v410)["fname"] = "NULL-OR-EMPTY-P");
        return v410;
    })((function (values,v409){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l23.fvalue(values, l67.fvalue(pv, v409));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 160)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l187;
})();
var l188 = {name: "GET-TOPLEVEL-COMPILATIONS"};
(function(){
    (l188).fvalue = (function(v411){
        ((v411)["fname"] = "GET-TOPLEVEL-COMPILATIONS");
        return v411;
    })((function (values){
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l64.fvalue(values, l84.fvalue(pv, (function(){
                        var symbol = l187;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), (function(){
                        var symbol = l185;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 161)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l188;
})();
var l189 = {name: "%COMPILE-DEFMACRO"};
var l190 = {name: "MACRO"};
(function(){
    (l189).fvalue = (function(v414){
        ((v414)["fname"] = "%COMPILE-DEFMACRO");
        return v414;
    })((function (values,v412,v413){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l186.fvalue(pv, (function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, l62.fvalue(pv, l42.fvalue(pv, l157), l42.fvalue(pv, v412))));
                    return l174.fvalue(values, l164.fvalue(pv, v412, l190, v413), (function(){
                        var symbol = l179;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l98);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 162)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l189;
})();
var l191 = {name: "GLOBAL-BINDING"};
(function(){
    (l191).fvalue = (function(v420){
        ((v420)["fname"] = "GLOBAL-BINDING");
        return v420;
    })((function (values,v415,v416,v417){
        if (arguments.length < 4) throw 'too few arguments';
        if (arguments.length > 4) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v418){
                        return (v418 !== l3.value ? v418 : (function(v419){
                            l174.fvalue(pv, v419, (function(){
                                var symbol = l179;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), v417);
                            return v419;
                        })(l164.fvalue(pv, v415, v416, l3.value)));
                    })(l178.fvalue(pv, v415, (function(){
                        var symbol = l179;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), v417));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 163)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l191;
})();
var l192 = {name: "CLAIMP"};
(function(){
    (l192).fvalue = (function(v425){
        ((v425)["fname"] = "CLAIMP");
        return v425;
    })((function (values,v421,v422,v423){
        if (arguments.length < 4) throw 'too few arguments';
        if (arguments.length > 4) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v424){
                        return (v424 !== l3.value ? l82.fvalue(values, v423, l168.fvalue(pv, v424)) : l3.value);
                    })(l178.fvalue(pv, v421, (function(){
                        var symbol = l179;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), v422));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 164)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l192;
})();
var l193 = {name: "!PROCLAIM"};
var l194 = {name: "SPECIAL"};
var l195 = {name: "NOTINLINE"};
var l196 = {name: "CONSTANT"};
var l197 = {name: "NON-OVERRIDABLE"};
(function(){
    (l193).fvalue = (function(v440){
        ((v440)["fname"] = "!PROCLAIM");
        return v440;
    })((function (values,v426){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v427){
                        return (l25.fvalue(pv, v427, l194) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v428,v429){
                                            (function(){
                                                while(v428 !== l3.value){
                                                    (v429 = (function(){
                                                        var tmp = v428;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })());
                                                    (function(){
                                                        (function(v430){
                                                            return l171.fvalue(pv, l194, v430);
                                                        })(l191.fvalue(pv, v429, l99, l99));
                                                        return l3.value;
                                                    })();
                                                    (v428 = (function(){
                                                        var tmp = v428;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })());
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v426;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 166)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : (l25.fvalue(pv, v427, l195) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v431,v432){
                                            (function(){
                                                while(v431 !== l3.value){
                                                    (v432 = (function(){
                                                        var tmp = v431;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })());
                                                    (function(){
                                                        (function(v433){
                                                            return l171.fvalue(pv, l195, v433);
                                                        })(l191.fvalue(pv, v432, l98, l98));
                                                        return l3.value;
                                                    })();
                                                    (v431 = (function(){
                                                        var tmp = v431;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })());
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v426;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 167)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : (l25.fvalue(pv, v427, l196) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v434,v435){
                                            (function(){
                                                while(v434 !== l3.value){
                                                    (v435 = (function(){
                                                        var tmp = v434;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })());
                                                    (function(){
                                                        (function(v436){
                                                            return l171.fvalue(pv, l196, v436);
                                                        })(l191.fvalue(pv, v435, l99, l99));
                                                        return l3.value;
                                                    })();
                                                    (v434 = (function(){
                                                        var tmp = v434;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })());
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v426;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 168)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : (l25.fvalue(pv, v427, l197) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v437,v438){
                                            (function(){
                                                while(v437 !== l3.value){
                                                    (v438 = (function(){
                                                        var tmp = v437;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })());
                                                    (function(){
                                                        (function(v439){
                                                            return l171.fvalue(pv, l197, v439);
                                                        })(l191.fvalue(pv, v438, l98, l98));
                                                        return l3.value;
                                                    })();
                                                    (v437 = (function(){
                                                        var tmp = v437;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })());
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v426;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 169)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : l3.value))));
                    })((function(){
                        var tmp = v426;
                        return tmp === l3.value? l3.value: tmp.car;
                    })());
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 165)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l193;
})();
var l198 = {name: "PROCLAIM"};
(l198).fvalue = (function(){
    var symbol = l193;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})();
var l199 = {name: "*COMPILATIONS*"};
(function(){
    (((l199.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l199).value = l3.value);
    })());
    return l199;
})();
var l200 = {name: "DEFINE-COMPILATION"};
l200;
var l201 = {name: "IF"};
((l199).value = ({car: l42.fvalue(pv, l201, (function (values,v441,v442,v443){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l124.fvalue(values, "(", (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, v441), " !== ", (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, l3.value), " ? ", (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, v442, (function(){
                    var symbol = l162;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), " : ", (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, v443, (function(){
                    var symbol = l162;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), ")");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 170)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l199;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l202 = {name: "*LAMBDA-LIST-KEYWORDS*"};
var l203 = {name: "&OPTIONAL"};
var l204 = {name: "&REST"};
var l205 = {car: l203, cdr: {car: l204, cdr: l3}};
(function(){
    (((l202.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l202).value = l205);
    })());
    return l202;
})();
var l206 = {name: "LIST-UNTIL-KEYWORD"};
(function(){
    (l206).fvalue = (function(v446){
        ((v446)["fname"] = "LIST-UNTIL-KEYWORD");
        return v446;
    })((function (values,v444){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(v445){
                        return (v445 !== l3.value ? v445 : l82.fvalue(pv, (function(){
                            var tmp = v444;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), (function(){
                            var symbol = l202;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()));
                    })(l11.fvalue(pv, v444)) !== l3.value ? l3.value : ({car: (function(){
                        var tmp = v444;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), cdr: l206.fvalue(pv, (function(){
                        var tmp = v444;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())}));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 171)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l206;
})();
var l207 = {name: "LAMBDA-LIST-REQUIRED-ARGUMENTS"};
(function(){
    (l207).fvalue = (function(v448){
        ((v448)["fname"] = "LAMBDA-LIST-REQUIRED-ARGUMENTS");
        return v448;
    })((function (values,v447){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l206.fvalue(values, v447);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 172)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l207;
})();
var l208 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"};
(function(){
    (l208).fvalue = (function(v450){
        ((v450)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
        return v450;
    })((function (values,v449){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l69.fvalue(values, (function(){
                        var symbol = l56;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l206.fvalue(pv, (function(){
                        var tmp = l82.fvalue(pv, l203, v449);
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 173)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l208;
})();
var l209 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS"};
(function(){
    (l209).fvalue = (function(v452){
        ((v452)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS");
        return v452;
    })((function (values,v451){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l69.fvalue(values, (function(){
                        var symbol = l29;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l208.fvalue(pv, v451));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 174)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l209;
})();
var l210 = {name: "LAMBDA-LIST-REST-ARGUMENT"};
(function(){
    (l210).fvalue = (function(v455){
        ((v455)["fname"] = "LAMBDA-LIST-REST-ARGUMENT");
        return v455;
    })((function (values,v453){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v454){
                        ((function(){
                            var tmp = v454;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })() !== l3.value ? (function(){
                            return (function(){
                                throw "Bad lambda-list";
                            })();
                        })() : l3.value);
                        return (function(){
                            var tmp = v454;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })(l206.fvalue(pv, (function(){
                        var tmp = l82.fvalue(pv, l204, v453);
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 175)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l210;
})();
var l211 = {name: "LAMBDA-DOCSTRING-WRAPPER"};
(function(){
    (l211).fvalue = (function(v458){
        ((v458)["fname"] = "LAMBDA-DOCSTRING-WRAPPER");
        return v458;
    })((function (values,v457){
        if (arguments.length < 2) throw 'too few arguments';
        var v456= l3.value;
        for (var i = arguments.length-1; i>=2; i--)
            v456 = {car: arguments[i], cdr: 
        v456};
        return (function(){
            try {
                return (function(){
                    return (v457 !== l3.value ? l124.fvalue(values, "(function(){", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l135.fvalue(pv, "var func = ", l126.fvalue(pv, v456), ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "func.docstring = '", v457, "';", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "return func;", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : l126.fvalue(values, v456));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 176)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l211;
})();
var l212 = {name: "LAMBDA"};
var l213 = {name: "LS-COMPILE-BLOCK"};
((l199).value = ({car: l42.fvalue(pv, l212, (function (values,v460){
    if (arguments.length < 2) throw 'too few arguments';
    var v459= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v459 = {car: arguments[i], cdr: 
    v459};
    return (function(){
        try {
            return (function(){
                return (function(v461,v462,v463,v464){
                    ((((typeof((function(){
                        var tmp = v459;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) == "string")?l4.value: l3.value) !== l3.value ? l26.fvalue(pv, l11.fvalue(pv, (function(){
                        var tmp = v459;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())) : l3.value) !== l3.value ? (function(){
                        (v464 = (function(){
                            var tmp = v459;
                            return tmp === l3.value? l3.value: tmp.car;
                        })());
                        return (v459 = (function(){
                            var tmp = v459;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : l3.value);
                    return (function(v465,v466,v467){
                        try {
                            var tmp;
                            tmp = l179.value;
                            l179.value = v467;
                            v467 = tmp;
                            return l211.fvalue(values, v464, "(function (", l126.fvalue(pv, ({car: "values", cdr: l69.fvalue(pv, (function(){
                                var symbol = l182;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })(), l62.fvalue(pv, v461, v462))}), ","), "){", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l135.fvalue(pv, (v461 !== l3.value ? l124.fvalue(pv, "if (arguments.length < ", l16.fvalue(pv, l21.fvalue(pv, v465)), ") throw 'too few arguments';", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (l26.fvalue(pv, v463) !== l3.value ? l124.fvalue(pv, "if (arguments.length > ", l16.fvalue(pv, (function(){
                                var x1 = 1;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v465;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                var x3 = v466;
                                if (typeof x3 !== 'number') throw 'Not a number!';
                                return x1+x2+x3;
                            })()), ") throw 'too many arguments';", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (v462 !== l3.value ? l124.fvalue(pv, "switch(arguments.length-1){", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(v468,v469,v470){
                                return (function(){
                                    (function(){
                                        try {
                                            return (function(){
                                                return (function(){
                                                    while((function(){
                                                        var x1 = v470;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = v466;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return (x1<x2?l4.value: l3.value);
                                                    })() !== l3.value){
                                                        (function(v471){
                                                            (v469 = ({car: l124.fvalue(pv, "case ", l16.fvalue(pv, (function(){
                                                                var x1 = v470;
                                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                                var x2 = v465;
                                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                                return x1+x2;
                                                            })()), ":", (function(){
                                                                var symbol = l123;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })(), l182.fvalue(pv, (function(){
                                                                var tmp = v471;
                                                                return tmp === l3.value? l3.value: tmp.car;
                                                            })()), "=", (function(){
                                                                var symbol = l137;
                                                                var func = symbol.fvalue;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()(pv, l32.fvalue(pv, v471)), ";", (function(){
                                                                var symbol = l123;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })()), cdr: v469}));
                                                            return (v470 = (function(){
                                                                var x1 = v470;
                                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                                var x2 = 1;
                                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                                return x1+x2;
                                                            })());
                                                        })(l79.fvalue(pv, v470, v468));
                                                    }return l3.value;
                                                })();
                                            })();
                                        }
                                        catch (cf){
                                            if (cf.type == 'block' && cf.id == 178)
                                                return cf.value;
                                            else
                                                throw cf;
                                        }
                                    })();
                                    (v469 = ({car: l124.fvalue(pv, "default: break;", (function(){
                                        var symbol = l123;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()), cdr: v469}));
                                    return l126.fvalue(pv, l64.fvalue(pv, v469));
                                })();
                            })(l208.fvalue(pv, v460),l3.value,0), "}", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (v463 !== l3.value ? (function(v472){
                                return l124.fvalue(pv, "var ", v472, "= ", (function(){
                                    var symbol = l137;
                                    var func = symbol.fvalue;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(pv, l3.value), ";", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "for (var i = arguments.length-1; i>=", l16.fvalue(pv, (function(){
                                    var x1 = 1;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v465;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    var x3 = v466;
                                    if (typeof x3 !== 'number') throw 'Not a number!';
                                    return x1+x2+x3;
                                })()), "; i--)", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), l135.fvalue(pv, v472, " = ", "{car: arguments[i], cdr: "), v472, "};", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })(l182.fvalue(pv, v463)) : ""), (function(v473){
                                try {
                                    var tmp;
                                    tmp = l162.value;
                                    l162.value = v473;
                                    v473 = tmp;
                                    return (function(){
                                        var symbol = l213;
                                        var func = symbol.fvalue;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(pv, v459, l4.value);
                                }
                                finally {
                                    l162.value = v473;
                                }
                            })(l4.value)), (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "})");
                        }
                        finally {
                            l179.value = v467;
                        }
                    })(l67.fvalue(pv, v461),l67.fvalue(pv, v462),l183.fvalue(pv, l62.fvalue(pv, l56.fvalue(pv, v463), v461, v462)));
                })(l207.fvalue(pv, v460),l209.fvalue(pv, v460),l210.fvalue(pv, v460),l3.value);
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 177)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l199;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l214 = {name: "SETQ-PAIR"};
var l215 = {name: "SET"};
(function(){
    (l214).fvalue = (function(v477){
        ((v477)["fname"] = "SETQ-PAIR");
        return v477;
    })((function (values,v474,v475){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v476){
                        return (((l166.fvalue(pv, v476) === l184)?l4.value: l3.value) !== l3.value ? l124.fvalue(values, l167.fvalue(pv, v476), " = ", (function(){
                            var symbol = l137;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(pv, v475)) : (function(){
                            var symbol = l137;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(values, l62.fvalue(pv, l42.fvalue(pv, l215), l42.fvalue(pv, l62.fvalue(pv, l42.fvalue(pv, l157), l42.fvalue(pv, v474))), l42.fvalue(pv, v475))));
                    })(l178.fvalue(pv, v474, (function(){
                        var symbol = l179;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l99));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 179)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l214;
})();
var l216 = {name: "SETQ"};
((l199).value = ({car: l42.fvalue(pv, l216, (function (values){
    var v478= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v478 = {car: arguments[i], cdr: 
    v478};
    return (function(){
        try {
            return (function(){
                return (function(v479){
                    (function(){
                        try {
                            return (function(){
                                return (function(){
                                    while(l4.value !== l3.value){
                                        (l11.fvalue(pv, v478) !== l3.value ? (function(){
                                            return (function(){
                                                throw ({type: 'block', id: 181, value: l3.value, message: 'Return from unknown block NIL.'})
                                            })();
                                        })() : (l11.fvalue(pv, (function(){
                                            var tmp = v478;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })()) !== l3.value ? (function(){
                                            return (function(){
                                                throw "Odd paris in SETQ";
                                            })();
                                        })() : (function(){
                                            (v479 = l124.fvalue(pv, v479, (function(){
                                                return l124.fvalue(pv, l214.fvalue(pv, (function(){
                                                    var tmp = v478;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })(), l32.fvalue(pv, v478)), (l11.fvalue(pv, l34.fvalue(pv, v478)) !== l3.value ? "" : ", "));
                                            })()));
                                            return (v478 = l34.fvalue(pv, v478));
                                        })()));
                                    }return l3.value;
                                })();
                            })();
                        }
                        catch (cf){
                            if (cf.type == 'block' && cf.id == 181)
                                return cf.value;
                            else
                                throw cf;
                        }
                    })();
                    return l124.fvalue(values, "(", v479, ")");
                })("");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 180)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l199;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l217 = {name: "JS-VREF"};
((l199).value = ({car: l42.fvalue(pv, l217, (function (values,v480){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return v480;
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 182)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l199;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l218 = {name: "JS-VSET"};
((l199).value = ({car: l42.fvalue(pv, l218, (function (values,v481,v482){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l124.fvalue(values, "(", v481, " = ", (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, v482), ")");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 183)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l199;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
(function(){
    (l140).fvalue = (function(v489){
        ((v489)["fname"] = "ESCAPE-STRING");
        return v489;
    })((function (values,v483){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v484,v485,v486){
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((function(){
                                            var x1 = v485;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v486;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return (x1<x2?l4.value: l3.value);
                                        })() !== l3.value){
                                            (function(v487){
                                                ((function(v488){
                                                    return (v488 !== l3.value ? v488 : l74.fvalue(pv, v487, 92));
                                                })(l74.fvalue(pv, v487, 34)) !== l3.value ? (function(){
                                                    return (v484 = l124.fvalue(pv, v484, "\\"));
                                                })() : l3.value);
                                                (l74.fvalue(pv, v487, 10) !== l3.value ? (function(){
                                                    (v484 = l124.fvalue(pv, v484, "\\"));
                                                    return (v487 = 110);
                                                })() : l3.value);
                                                return (v484 = l124.fvalue(pv, v484, l92.fvalue(pv, v487)));
                                            })((function(){
                                                var string = v483;
                                                var index = v485;
                                                if (typeof string != 'string')
                                                    throw 'The value ' + string + ' is not a type string.';
                                                if (typeof index != 'number')
                                                    throw 'The value ' + index + ' is not a type number.';
                                                return string.charCodeAt(index);
                                            })());
                                            (v485 = (function(){
                                                var x1 = v485;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = 1;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })());
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 185)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v484;
                    })("",0,l67.fvalue(pv, v483));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 184)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l140;
})();
var l219 = {name: "*LITERAL-SYMBOLS*"};
(function(){
    (((l219.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l219).value = l3.value);
    })());
    return l219;
})();
var l220 = {name: "*LITERAL-COUNTER*"};
(function(){
    (((l220.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l220).value = 0);
    })());
    return l220;
})();
var l221 = {name: "GENLIT"};
(function(){
    (l221).fvalue = (function(v490){
        ((v490)["fname"] = "GENLIT");
        return v490;
    })((function (values){
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l124.fvalue(values, "l", l16.fvalue(pv, ((l220).value = (function(){
                        var x1 = (function(){
                            var symbol = l220;
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
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 186)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l221;
})();
var l222 = {name: "LITERAL"};
(function(){
    (l222).fvalue = (function(v502){
        ((v502)["fname"] = "LITERAL");
        return v502;
    })((function (values,v491,v492){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        switch(arguments.length-1){
        case 1:
        v492=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (l75.fvalue(pv, v491) !== l3.value ? (function(){
                        return l16.fvalue(values, v491);
                    })() : (((typeof(v491) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l124.fvalue(values, "\"", l140.fvalue(pv, v491), "\"");
                    })() : (((function(){
                        var tmp = v491;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v493){
                            return (v493 !== l3.value ? v493 : (function(v495,v496){
                                ((l219).value = ({car: ({car: v491, cdr: v495}), cdr: (function(){
                                    var symbol = l219;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()}));
                                l186.fvalue(pv, l124.fvalue(pv, "var ", v495, " = ", v496));
                                return v495;
                            })(l221.fvalue(pv),(function(v494){
                                return (l11.fvalue(pv, v494) !== l3.value ? l124.fvalue(pv, "{name: \"", l140.fvalue(pv, (v491).name), "\"}") : (function(){
                                    var symbol = l137;
                                    var func = symbol.fvalue;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(pv, l62.fvalue(pv, l42.fvalue(pv, l120), l42.fvalue(pv, (v491).name), l42.fvalue(pv, l106.fvalue(pv, v494)))));
                            })(l114.fvalue(pv, v491))));
                        })((function(){
                            var tmp = l91.fvalue(pv, v491, (function(){
                                var symbol = l219;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : (((function(){
                        var tmp = v491;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v497){
                            return (v492 !== l3.value ? v497 : (function(v498){
                                l186.fvalue(pv, l124.fvalue(pv, "var ", v498, " = ", v497));
                                return v498;
                            })(l221.fvalue(pv)));
                        })(l124.fvalue(pv, "{car: ", l222.fvalue(pv, (function(){
                            var tmp = v491;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), l4.value), ", ", "cdr: ", l222.fvalue(pv, (function(){
                            var tmp = v491;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), l4.value), "}"));
                    })() : (((function(){
                        var x = v491;
                        return typeof x === 'object' && 'length' in x;
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v499){
                            return (function(v500){
                                return (v492 !== l3.value ? v500 : (function(v501){
                                    l186.fvalue(pv, l124.fvalue(pv, "var ", v501, " = ", v500));
                                    return v501;
                                })(l221.fvalue(pv)));
                            })(l124.fvalue(pv, "[", l126.fvalue(pv, l69.fvalue(pv, (function(){
                                var symbol = l222;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })(), v499), ", "), "]"));
                        })(l129.fvalue(pv, v491));
                    })() : l3.value)))));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 187)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l222;
})();
((l199).value = ({car: l42.fvalue(pv, l157, (function (values,v503){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l222.fvalue(values, v503);
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 188)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l199;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l223 = {name: "%WHILE"};
((l199).value = ({car: l42.fvalue(pv, l223, (function (values,v505){
    if (arguments.length < 2) throw 'too few arguments';
    var v504= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v504 = {car: arguments[i], cdr: 
    v504};
    return (function(){
        try {
            return (function(){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "while(", (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, v505), " !== ", (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, l3.value), "){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, (function(){
                    var symbol = l213;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, v504)), "}", "return ", (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, l3.value), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 189)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l199;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l224 = {name: "SYMBOL-FUNCTION"};
((l199).value = ({car: l42.fvalue(pv, l98, (function (values,v506){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return ((l57.fvalue(pv, v506) !== l3.value ? (((function(){
                    var tmp = v506;
                    return tmp === l3.value? l3.value: tmp.car;
                })() === l212)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                    return (function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(values, v506);
                })() : (((function(){
                    var tmp = v506;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(){
                    return (function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(values, l62.fvalue(pv, l42.fvalue(pv, l224), l42.fvalue(pv, l62.fvalue(pv, l42.fvalue(pv, l157), l42.fvalue(pv, v506)))));
                })() : l3.value));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 190)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l199;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l225 = {name: "EVAL-WHEN-COMPILE"};
var l226 = {name: "EVAL"};
var l227 = {name: "PROGN"};
((l199).value = ({car: l42.fvalue(pv, l225, (function (values){
    var v507= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v507 = {car: arguments[i], cdr: 
    v507};
    return (function(){
        try {
            return (function(){
                (function(){
                    var symbol = l226;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, ({car: l227, cdr: v507}));
                return l3.value;
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 191)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l199;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l228 = {name: "DEFINE-TRANSFORMATION"};
l228;
((l199).value = ({car: l42.fvalue(pv, l227, (function (values){
    var v508= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v508 = {car: arguments[i], cdr: 
    v508};
    return (function(){
        try {
            return (function(){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, (function(){
                    var symbol = l213;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, v508, l4.value)), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 192)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l199;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l229 = {name: "SPECIAL-VARIABLE-P"};
(function(){
    (l229).fvalue = (function(v510){
        ((v510)["fname"] = "SPECIAL-VARIABLE-P");
        return v510;
    })((function (values,v509){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l192.fvalue(pv, v509, l99, l194) !== l3.value ? l4.value : l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 193)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l229;
})();
var l230 = {name: "LET-BINDING-WRAPPER"};
(function(){
    (l230).fvalue = (function(v517){
        ((v517)["fname"] = "LET-BINDING-WRAPPER");
        return v517;
    })((function (values,v511,v512){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (l11.fvalue(pv, v511) !== l3.value ? (function(){
                        return (function(){
                            throw ({type: 'block', id: 194, value: v512, message: 'Return from unknown block LET-BINDING-WRAPPER.'})
                        })();
                    })() : l3.value);
                    return l124.fvalue(values, "try {", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l135.fvalue(pv, "var tmp;", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l128.fvalue(pv, (function (values,v513){
                        if (arguments.length < 2) throw 'too few arguments';
                        if (arguments.length > 2) throw 'too many arguments';
                        return (function(v514){
                            return l124.fvalue(values, "tmp = ", v514, ".value;", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), v514, ".value = ", (function(){
                                var tmp = v513;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), ";", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(){
                                var tmp = v513;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), " = tmp;", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })((function(){
                            var symbol = l137;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(pv, l62.fvalue(pv, l42.fvalue(pv, l157), l42.fvalue(pv, (function(){
                            var tmp = v513;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    
                    }), v511), v512, (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "}", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "finally {", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l135.fvalue(pv, l128.fvalue(pv, (function (values,v515){
                        if (arguments.length < 2) throw 'too few arguments';
                        if (arguments.length > 2) throw 'too many arguments';
                        return (function(v516){
                            return l124.fvalue(values, v516, ".value", " = ", (function(){
                                var tmp = v515;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), ";", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })((function(){
                            var symbol = l137;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(pv, l62.fvalue(pv, l42.fvalue(pv, l157), l42.fvalue(pv, (function(){
                            var tmp = v515;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    
                    }), v511)), "}", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 194)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l230;
})();
var l231 = {name: "LET"};
var l232 = {name: "DYNAMIC-BINDINGS"};
((l199).value = ({car: l42.fvalue(pv, l231, (function (values,v519){
    if (arguments.length < 2) throw 'too few arguments';
    var v518= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v518 = {car: arguments[i], cdr: 
    v518};
    return (function(){
        try {
            return (function(){
                return (function(){
                    try {
                        var v527 = l179.value;
                        var v520 = l69.fvalue(pv, (function(){
                            var symbol = l56;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v519);
                        var v521 = l69.fvalue(pv, (function(){
                            var symbol = l38;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v520);
                        var v522 = l69.fvalue(pv, (function(){
                            var symbol = l137;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l69.fvalue(pv, (function(){
                            var symbol = l39;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v520));
                        ((l179).value = l183.fvalue(pv, l84.fvalue(pv, (function(){
                            var symbol = l229;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v521)));
                        var v523 = l3.value;
                        return l124.fvalue(values, "(function(", l126.fvalue(pv, l69.fvalue(pv, (function (values,v524){
                            if (arguments.length < 2) throw 'too few arguments';
                            if (arguments.length > 2) throw 'too many arguments';
                            return (l229.fvalue(pv, v524) !== l3.value ? (function(v525){
                                ((l232).value = ({car: ({car: v524, cdr: v525}), cdr: v523}));
                                return v525;
                            })(l181.fvalue(pv, v524)) : l182.fvalue(values, v524));
                        
                        }), v521), ","), "){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(v526){
                            return l135.fvalue(pv, l230.fvalue(pv, v523, v526));
                        })((function(){
                            var symbol = l213;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(pv, v518, l4.value)), "})(", l126.fvalue(pv, v522, ","), ")");
                    }
                    finally {
                        l179.value = v527;
                    }
                })();
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 195)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l199;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l233 = {name: "LET*-INITIALIZE-VALUE"};
(function(){
    (l233).fvalue = (function(v534){
        ((v534)["fname"] = "LET*-INITIALIZE-VALUE");
        return v534;
    })((function (values,v528){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v529,v530){
                        return (l229.fvalue(pv, v529) !== l3.value ? l124.fvalue(values, (function(){
                            var symbol = l137;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(pv, l62.fvalue(pv, l42.fvalue(pv, l216), l42.fvalue(pv, v529), l42.fvalue(pv, v530))), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()) : (function(){
                            var v531 = l181.fvalue(pv, v529);
                            var v532 = l164.fvalue(pv, v529, l99, v531);
                            return (function(v533){
                                l174.fvalue(pv, v532, (function(){
                                    var symbol = l179;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), l99);
                                return v533;
                            })(l124.fvalue(pv, "var ", v531, " = ", (function(){
                                var symbol = l137;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(pv, v530), ";", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()));
                        })());
                    })(l38.fvalue(pv, v528),l39.fvalue(pv, v528));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 196)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l233;
})();
var l234 = {name: "LET*-BINDING-WRAPPER"};
(function(){
    (l234).fvalue = (function(v543){
        ((v543)["fname"] = "LET*-BINDING-WRAPPER");
        return v543;
    })((function (values,v535,v536){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (l11.fvalue(pv, v535) !== l3.value ? (function(){
                        return (function(){
                            throw ({type: 'block', id: 197, value: v536, message: 'Return from unknown block LET*-BINDING-WRAPPER.'})
                        })();
                    })() : l3.value);
                    return (function(v538){
                        return l124.fvalue(values, "try {", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, l128.fvalue(pv, (function (values,v539){
                            if (arguments.length < 2) throw 'too few arguments';
                            if (arguments.length > 2) throw 'too many arguments';
                            return (function(v540){
                                return l124.fvalue(values, "var ", (function(){
                                    var tmp = v539;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })(), " = ", v540, ".value;", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })((function(){
                                var symbol = l137;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(pv, l62.fvalue(pv, l42.fvalue(pv, l157), l42.fvalue(pv, (function(){
                                var tmp = v539;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()))));
                        
                        }), v538), v536), "}", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "finally {", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, l128.fvalue(pv, (function (values,v541){
                            if (arguments.length < 2) throw 'too few arguments';
                            if (arguments.length > 2) throw 'too many arguments';
                            return (function(v542){
                                return l124.fvalue(values, v542, ".value", " = ", (function(){
                                    var tmp = v541;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })(), ";", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })((function(){
                                var symbol = l137;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(pv, l62.fvalue(pv, l42.fvalue(pv, l157), l42.fvalue(pv, (function(){
                                var tmp = v541;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()))));
                        
                        }), v538)), "}", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    })(l69.fvalue(pv, (function (values,v537){
                        if (arguments.length < 2) throw 'too few arguments';
                        if (arguments.length > 2) throw 'too many arguments';
                        return ({car: v537, cdr: l181.fvalue(pv, v537)});
                    
                    }), l85.fvalue(pv, (function(){
                        var symbol = l229;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v535)));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 197)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l234;
})();
var l235 = {name: "LET*"};
((l199).value = ({car: l42.fvalue(pv, l235, (function (values,v545){
    if (arguments.length < 2) throw 'too few arguments';
    var v544= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v544 = {car: arguments[i], cdr: 
    v544};
    return (function(){
        try {
            return (function(){
                return (function(v546,v547){
                    try {
                        var tmp;
                        tmp = l179.value;
                        l179.value = v547;
                        v547 = tmp;
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, (function(v548,v549){
                            return l234.fvalue(pv, v548, v549);
                        })(l85.fvalue(pv, (function(){
                            var symbol = l229;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l69.fvalue(pv, (function(){
                            var symbol = l38;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v546)),l124.fvalue(pv, l128.fvalue(pv, (function(){
                            var symbol = l233;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v546), (function(){
                            var symbol = l213;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(pv, v544, l4.value)))), "})()");
                    }
                    finally {
                        l179.value = v547;
                    }
                })(l69.fvalue(pv, (function(){
                    var symbol = l56;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v545),l173.fvalue(pv, (function(){
                    var symbol = l179;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 198)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l199;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l236 = {name: "*BLOCK-COUNTER*"};
(function(){
    (((l236.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l236).value = 0);
    })());
    return l236;
})();
((l199).value = ({car: l42.fvalue(pv, l175, (function (values,v551){
    if (arguments.length < 2) throw 'too few arguments';
    var v550= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v550 = {car: arguments[i], cdr: 
    v550};
    return (function(){
        try {
            return (function(){
                return (function(v552){
                    return (function(v553){
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "try {", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(v554){
                            try {
                                var tmp;
                                tmp = l179.value;
                                l179.value = v554;
                                v554 = tmp;
                                return l135.fvalue(pv, "return ", (function(){
                                    var symbol = l137;
                                    var func = symbol.fvalue;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(pv, l62.fvalue(pv, l42.fvalue(pv, l227), v550), (function(){
                                    var symbol = l162;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()), ";", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            }
                            finally {
                                l179.value = v554;
                            }
                        })(l177.fvalue(pv, l42.fvalue(pv, v553), (function(){
                            var symbol = l179;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l175)), "}", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "catch (cf){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    if (cf.type == 'block' && cf.id == ", v552, ")", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        return cf.value;", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    else", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        throw cf;", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "}", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })(l164.fvalue(pv, v551, l175, v552));
                })(l16.fvalue(pv, ((l236).value = (function(){
                    var x1 = (function(){
                        var symbol = l236;
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
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 199)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l199;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l237 = {name: "RETURN-FROM"};
((l199).value = ({car: l42.fvalue(pv, l237, (function (values,v555,v556){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    switch(arguments.length-1){
    case 1:
    v556=l3.value;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return (function(v557){
                    return (v557 !== l3.value ? l124.fvalue(values, "(function(){", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l135.fvalue(pv, "throw ({", "type: 'block', ", "id: ", l167.fvalue(pv, v557), ", ", "value: ", (function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v556), ", ", "message: 'Return from unknown block ", (v555).name, ".'", "})"), "})()") : (function(){
                        throw l124.fvalue(pv, "Unknown block `", (v555).name, "'.");
                    })());
                })(l178.fvalue(pv, v555, (function(){
                    var symbol = l179;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l175));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 200)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l199;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l238 = {name: "CATCH"};
((l199).value = ({car: l42.fvalue(pv, l238, (function (values,v559){
    if (arguments.length < 2) throw 'too few arguments';
    var v558= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v558 = {car: arguments[i], cdr: 
    v558};
    return (function(){
        try {
            return (function(){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "var id = ", (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, v559), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "try {", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "return ", (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, l62.fvalue(pv, l42.fvalue(pv, l227), v558)), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "}", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "catch (cf){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "    if (cf.type == 'catch' && cf.id == id)", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "        return cf.value;", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "    else", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "        throw cf;", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "}", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 201)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l199;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l239 = {name: "THROW"};
((l199).value = ({car: l42.fvalue(pv, l239, (function (values,v560,v561){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "throw ({", "type: 'catch', ", "id: ", (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, v560), ", ", "value: ", (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, v561), ", ", "message: 'Throw uncatched.'", "})"), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 202)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l199;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l240 = {name: "*TAGBODY-COUNTER*"};
(function(){
    (((l240.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l240).value = 0);
    })());
    return l240;
})();
var l241 = {name: "*GO-TAG-COUNTER*"};
(function(){
    (((l241.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l241).value = 0);
    })());
    return l241;
})();
var l242 = {name: "GO-TAG-P"};
(function(){
    (l242).fvalue = (function(v564){
        ((v564)["fname"] = "GO-TAG-P");
        return v564;
    })((function (values,v562){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v563){
                        return (v563 !== l3.value ? v563 : ((function(){
                            var tmp = v562;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?l4.value: l3.value));
                    })(l75.fvalue(pv, v562));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 203)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l242;
})();
var l243 = {name: "DECLARE-TAGBODY-TAGS"};
(function(){
    (l243).fvalue = (function(v570){
        ((v570)["fname"] = "DECLARE-TAGBODY-TAGS");
        return v570;
    })((function (values,v565,v566){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v569){
                        return l177.fvalue(values, v569, (function(){
                            var symbol = l179;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l176);
                    })(l69.fvalue(pv, (function (values,v567){
                        if (arguments.length < 2) throw 'too few arguments';
                        if (arguments.length > 2) throw 'too many arguments';
                        return (function(v568){
                            return l164.fvalue(values, v567, l176, l42.fvalue(pv, v565, v568));
                        })(l16.fvalue(pv, ((l241).value = (function(){
                            var x1 = (function(){
                                var symbol = l241;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })();
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = 1;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return x1+x2;
                        })())));
                    
                    }), l85.fvalue(pv, (function(){
                        var symbol = l242;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v566)));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 204)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l243;
})();
var l244 = {name: "TAGBODY"};
((l199).value = ({car: l42.fvalue(pv, l244, (function (values){
    var v571= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v571 = {car: arguments[i], cdr: 
    v571};
    return (function(){
        try {
            return (function(){
                (l89.fvalue(pv, (function(){
                    var symbol = l242;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v571) !== l3.value ? l3.value : (function(){
                    return (function(){
                        throw ({type: 'block', id: 205, value: (function(){
                            var symbol = l137;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(pv, l62.fvalue(pv, l42.fvalue(pv, l227), v571, l42.fvalue(pv, l3))), message: 'Return from unknown block TAGBODY.'})
                    })();
                })());
                (l242.fvalue(pv, (function(){
                    var tmp = v571;
                    return tmp === l3.value? l3.value: tmp.car;
                })()) !== l3.value ? l3.value : (function(){
                    return (v571 = ({car: l15.fvalue(pv, "START"), cdr: v571}));
                })());
                return (function(v572){
                    return (function(v574,v573){
                        try {
                            var tmp;
                            tmp = l179.value;
                            l179.value = v574;
                            v574 = tmp;
                            (function(v575){
                                return (v573 = l39.fvalue(pv, l167.fvalue(pv, v575)));
                            })(l178.fvalue(pv, l38.fvalue(pv, v571), (function(){
                                var symbol = l179;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l176));
                            return l124.fvalue(values, "(function(){", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l135.fvalue(pv, "var tagbody_", v572, " = ", v573, ";", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "tbloop:", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "while (true) {", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l135.fvalue(pv, "try {", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l135.fvalue(pv, (function(v576){
                                return l124.fvalue(pv, "switch(tagbody_", v572, "){", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "case ", v573, ":", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), (function(){
                                    try {
                                        return (function(){
                                            return (function(v577,v578){
                                                (function(){
                                                    while(v577 !== l3.value){
                                                        (v578 = (function(){
                                                            var tmp = v577;
                                                            return tmp === l3.value? l3.value: tmp.car;
                                                        })());
                                                        (function(){
                                                            (v576 = l124.fvalue(pv, v576, (function(){
                                                                return (l26.fvalue(pv, l242.fvalue(pv, v578)) !== l3.value ? l135.fvalue(pv, (function(){
                                                                    var symbol = l137;
                                                                    var func = symbol.fvalue;
                                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                    return func;
                                                                })()(pv, v578), ";", (function(){
                                                                    var symbol = l123;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })()) : (function(v579){
                                                                    return l124.fvalue(pv, "case ", l39.fvalue(pv, l167.fvalue(pv, v579)), ":", (function(){
                                                                        var symbol = l123;
                                                                        var value = symbol.value;
                                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                        return value;
                                                                    })());
                                                                })(l178.fvalue(pv, v578, (function(){
                                                                    var symbol = l179;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })(), l176)));
                                                            })()));
                                                            return l3.value;
                                                        })();
                                                        (v577 = (function(){
                                                            var tmp = v577;
                                                            return tmp === l3.value? l3.value: tmp.cdr;
                                                        })());
                                                    }return l3.value;
                                                })();
                                                return v576;
                                            })((function(){
                                                var tmp = v571;
                                                return tmp === l3.value? l3.value: tmp.cdr;
                                            })(),l3.value);
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 206)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })(), "default:", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "    break tbloop;", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "}", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })("")), "}", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "catch (jump) {", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "    if (jump.type == 'tagbody' && jump.id == ", v572, ")", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "        tagbody_", v572, " = jump.label;", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "    else", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "        throw(jump);", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "}", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), "}", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "return ", (function(){
                                var symbol = l137;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(pv, l3.value), ";", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), "})()");
                        }
                        finally {
                            l179.value = v574;
                        }
                    })(l243.fvalue(pv, v572, v571),l3.value);
                })(l16.fvalue(pv, (function(){
                    var symbol = l240;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 205)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l199;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l245 = {name: "GO"};
((l199).value = ({car: l42.fvalue(pv, l245, (function (values,v580){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v581,v582){
                    return (v581 !== l3.value ? l124.fvalue(values, "(function(){", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l135.fvalue(pv, "throw ({", "type: 'tagbody', ", "id: ", l38.fvalue(pv, l167.fvalue(pv, v581)), ", ", "label: ", l39.fvalue(pv, l167.fvalue(pv, v581)), ", ", "message: 'Attempt to GO to non-existing tag ", v582, "'", "})", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : (function(){
                        throw l124.fvalue(pv, "Unknown tag `", v582, "'.");
                    })());
                })(l178.fvalue(pv, v580, (function(){
                    var symbol = l179;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l176),(((function(){
                    var tmp = v580;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(){
                    return (v580).name;
                })() : (l75.fvalue(pv, v580) !== l3.value ? (function(){
                    return l16.fvalue(pv, v580);
                })() : l3.value)));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 207)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l199;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l246 = {name: "UNWIND-PROTECT"};
((l199).value = ({car: l42.fvalue(pv, l246, (function (values,v584){
    if (arguments.length < 2) throw 'too few arguments';
    var v583= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v583 = {car: arguments[i], cdr: 
    v583};
    return (function(){
        try {
            return (function(){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "var ret = ", (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, l3.value), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "try {", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "ret = ", (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, v584), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "} finally {", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, (function(){
                    var symbol = l213;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, v583)), "}", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "return ret;", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 208)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l199;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l247 = {name: "MULTIPLE-VALUE-CALL"};
((l199).value = ({car: l42.fvalue(pv, l247, (function (values,v586){
    if (arguments.length < 2) throw 'too few arguments';
    var v585= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v585 = {car: arguments[i], cdr: 
    v585};
    return (function(){
        try {
            return (function(){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "var func = ", (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, v586), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var args = [", ((function(){
                    var symbol = l162;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() !== l3.value ? "values" : "pv"), "];", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "return ", l124.fvalue(pv, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "var values = mv;", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var vs;", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l128.fvalue(pv, (function (values,v587){
                    if (arguments.length < 2) throw 'too few arguments';
                    if (arguments.length > 2) throw 'too many arguments';
                    return l124.fvalue(values, "vs = ", (function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v587, l4.value), ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "if (typeof vs === 'object' && 'multiple-value' in vs)", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l135.fvalue(pv, "args = args.concat(vs);", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "else", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l135.fvalue(pv, "args.push(vs);", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
                
                }), v585), "return func.apply(window, args);", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()"), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 209)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l199;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l248 = {name: "MULTIPLE-VALUE-PROG1"};
((l199).value = ({car: l42.fvalue(pv, l248, (function (values,v589){
    if (arguments.length < 2) throw 'too few arguments';
    var v588= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v588 = {car: arguments[i], cdr: 
    v588};
    return (function(){
        try {
            return (function(){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "var args = ", (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, v589, (function(){
                    var symbol = l162;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(){
                    var symbol = l213;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, v588), "return args;", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 210)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l199;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l249 = {name: "BACKQUOTE-EXPAND-1"};
(function(){
    (l249).fvalue = (function(v592){
        ((v592)["fname"] = "BACKQUOTE-EXPAND-1");
        return v592;
    })((function (values,v590){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v590;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return l42.fvalue(values, l157, v590);
                    })() : (l43.fvalue(pv, v590) !== l3.value ? (function(){
                        return v590;
                    })() : ((((function(){
                        var tmp = v590;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l160)?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(){
                            var tmp = v590;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })() : ((((function(){
                        var tmp = v590;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l158)?l4.value: l3.value) !== l3.value ? (function(){
                        return l249.fvalue(values, l249.fvalue(pv, l32.fvalue(pv, v590)));
                    })() : (function(){
                        return ({car: l62, cdr: l69.fvalue(pv, (function (values,v591){
                            if (arguments.length < 2) throw 'too few arguments';
                            if (arguments.length > 2) throw 'too many arguments';
                            return ((l57.fvalue(pv, v591) !== l3.value ? (((function(){
                                var tmp = v591;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l160)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return l42.fvalue(values, l42, l32.fvalue(pv, v591));
                            })() : ((l57.fvalue(pv, v591) !== l3.value ? (((function(){
                                var tmp = v591;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l159)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return l32.fvalue(values, v591);
                            })() : (function(){
                                return l42.fvalue(values, l42, l249.fvalue(pv, v591));
                            })()));
                        
                        }), v590)});
                    })()))));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 211)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l249;
})();
var l250 = {name: "BACKQUOTE-EXPAND"};
(function(){
    (l250).fvalue = (function(v594){
        ((v594)["fname"] = "BACKQUOTE-EXPAND");
        return v594;
    })((function (values,v593){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((l57.fvalue(pv, v593) !== l3.value ? (((function(){
                        var tmp = v593;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l158)?l4.value: l3.value) : l3.value) !== l3.value ? l249.fvalue(values, l32.fvalue(pv, v593)) : v593);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 212)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l250;
})();
l158;
((l199).value = ({car: l42.fvalue(pv, l158, (function (values,v595){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(values, l249.fvalue(pv, v595));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 213)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l199;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l251 = {name: "*BUILTINS*"};
(function(){
    (((l251.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l251).value = l3.value);
    })());
    return l251;
})();
var l252 = {name: "DEFINE-RAW-BUILTIN"};
l252;
var l253 = {name: "DEFINE-BUILTIN"};
l253;
var l254 = {name: "TYPE-CHECK"};
l254;
var l255 = {name: "VARIABLE-ARITY-CALL"};
(function(){
    (l255).fvalue = (function(v604){
        ((v604)["fname"] = "VARIABLE-ARITY-CALL");
        return v604;
    })((function (values,v596,v597){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (((function(){
                        var tmp = v596;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? l3.value : (function(){
                        return (function(){
                            throw "ARGS must be a non-empty list";
                        })();
                    })());
                    return (function(v598,v599,v600){
                        (function(){
                            try {
                                return (function(){
                                    return (function(v601,v602){
                                        (function(){
                                            while(v601 !== l3.value){
                                                (v602 = (function(){
                                                    var tmp = v601;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    (function(v603){
                                                        (v599 = ({car: v603, cdr: v599}));
                                                        return (v600 = l124.fvalue(pv, v600, (function(){
                                                            return l124.fvalue(pv, "var ", v603, " = ", (function(){
                                                                var symbol = l137;
                                                                var func = symbol.fvalue;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()(pv, v602), ";", (function(){
                                                                var symbol = l123;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })(), "if (typeof ", v603, " !== 'number') throw 'Not a number!';", (function(){
                                                                var symbol = l123;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })());
                                                        })()));
                                                    })(l124.fvalue(pv, "x", l16.fvalue(pv, (v598 = (function(){
                                                        var x1 = v598;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = 1;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })()))));
                                                    return l3.value;
                                                })();
                                                (v601 = (function(){
                                                    var tmp = v601;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })());
                                            }return l3.value;
                                        })();
                                        return l3.value;
                                    })(v596,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 215)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, v600, (v597)(pv, l64.fvalue(pv, v599))), "})()");
                    })(0,l3,"");
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 214)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l255;
})();
var l256 = {name: "VARIABLE-ARITY"};
l256;
var l257 = {name: "NUM-OP-NUM"};
(function(){
    (l257).fvalue = (function(v608){
        ((v608)["fname"] = "NUM-OP-NUM");
        return v608;
    })((function (values,v605,v606,v607){
        if (arguments.length < 4) throw 'too few arguments';
        if (arguments.length > 4) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l124.fvalue(values, "(function(){", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "x", " = ", v605, ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), l124.fvalue(pv, "var ", "y", " = ", v607, ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), l124.fvalue(pv, "if (typeof ", "x", " != '", "number", "')", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l135.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), l124.fvalue(pv, "if (typeof ", "y", " != '", "number", "')", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l135.fvalue(pv, "throw 'The value ' + ", "y", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), l124.fvalue(pv, "return ", (function(){
                        return l124.fvalue(pv, "x", v606, "y");
                    })(), ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), "})()");
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 216)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l257;
})();
((l251).value = ({car: l42.fvalue(pv, l59, (function (values){
    var v609= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v609 = {car: arguments[i], cdr: 
    v609};
    return (function(){
        try {
            return (function(){
                return (l11.fvalue(pv, v609) !== l3.value ? "0" : l255.fvalue(values, v609, (function (values,v610){
                    if (arguments.length < 2) throw 'too few arguments';
                    if (arguments.length > 2) throw 'too many arguments';
                    return l124.fvalue(values, "return ", l126.fvalue(pv, v610, "+"), ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                
                })));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 217)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l251;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l251).value = ({car: l42.fvalue(pv, l60, (function (values,v612){
    if (arguments.length < 2) throw 'too few arguments';
    var v611= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v611 = {car: arguments[i], cdr: 
    v611};
    return (function(){
        try {
            return (function(){
                return (function(v613){
                    return l255.fvalue(values, v613, (function (values,v614){
                        if (arguments.length < 2) throw 'too few arguments';
                        if (arguments.length > 2) throw 'too many arguments';
                        return l124.fvalue(values, "return ", (l11.fvalue(pv, v611) !== l3.value ? l124.fvalue(pv, "-", (function(){
                            var tmp = v614;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()) : l126.fvalue(pv, v614, "-")), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v612, cdr: v611}));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 218)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l251;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l251).value = ({car: l42.fvalue(pv, l19, (function (values){
    var v615= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v615 = {car: arguments[i], cdr: 
    v615};
    return (function(){
        try {
            return (function(){
                return (l11.fvalue(pv, v615) !== l3.value ? "1" : l255.fvalue(values, v615, (function (values,v616){
                    if (arguments.length < 2) throw 'too few arguments';
                    if (arguments.length > 2) throw 'too many arguments';
                    return l124.fvalue(values, "return ", l126.fvalue(pv, v616, "*"), ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                
                })));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 219)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l251;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l251).value = ({car: l42.fvalue(pv, l20, (function (values,v618){
    if (arguments.length < 2) throw 'too few arguments';
    var v617= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v617 = {car: arguments[i], cdr: 
    v617};
    return (function(){
        try {
            return (function(){
                return (function(v619){
                    return l255.fvalue(values, v619, (function (values,v620){
                        if (arguments.length < 2) throw 'too few arguments';
                        if (arguments.length > 2) throw 'too many arguments';
                        return l124.fvalue(values, "return ", (l11.fvalue(pv, v617) !== l3.value ? l124.fvalue(pv, "1 /", (function(){
                            var tmp = v620;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()) : l126.fvalue(pv, v620, "/")), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v618, cdr: v617}));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 220)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l251;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l258 = {name: "MOD"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l258, (function (values,v621,v622){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v623,v624){
                        return l257.fvalue(values, v623, "%", v624);
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v621),(function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v622));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 221)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l259 = {name: "COMPARISON-CONJUNTION"};
(function(){
    (l259).fvalue = (function(v627){
        ((v627)["fname"] = "COMPARISON-CONJUNTION");
        return v627;
    })((function (values,v625,v626){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.fvalue(pv, (function(){
                        var tmp = v625;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()) !== l3.value ? (function(){
                        return "true";
                    })() : (l11.fvalue(pv, l34.fvalue(pv, v625)) !== l3.value ? (function(){
                        return l124.fvalue(values, (function(){
                            var tmp = v625;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), v626, l32.fvalue(pv, v625));
                    })() : (function(){
                        return l124.fvalue(values, (function(){
                            var tmp = v625;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), v626, l32.fvalue(pv, v625), " && ", l259.fvalue(pv, (function(){
                            var tmp = v625;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), v626));
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 222)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l259;
})();
var l260 = {name: "DEFINE-BUILTIN-COMPARISON"};
l260;
var l261 = {name: ">"};
((l251).value = ({car: l42.fvalue(pv, l261, (function (values,v629){
    if (arguments.length < 2) throw 'too few arguments';
    var v628= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v628 = {car: arguments[i], cdr: 
    v628};
    return (function(){
        try {
            return (function(){
                return (function(v630){
                    return l255.fvalue(values, v630, (function (values,v631){
                        if (arguments.length < 2) throw 'too few arguments';
                        if (arguments.length > 2) throw 'too many arguments';
                        return l124.fvalue(values, "return ", l136.fvalue(pv, l259.fvalue(pv, v631, ">")), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v629, cdr: v628}));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 223)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l251;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l262 = {name: "<"};
((l251).value = ({car: l42.fvalue(pv, l262, (function (values,v633){
    if (arguments.length < 2) throw 'too few arguments';
    var v632= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v632 = {car: arguments[i], cdr: 
    v632};
    return (function(){
        try {
            return (function(){
                return (function(v634){
                    return l255.fvalue(values, v634, (function (values,v635){
                        if (arguments.length < 2) throw 'too few arguments';
                        if (arguments.length > 2) throw 'too many arguments';
                        return l124.fvalue(values, "return ", l136.fvalue(pv, l259.fvalue(pv, v635, "<")), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v633, cdr: v632}));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 224)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l251;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l263 = {name: ">="};
((l251).value = ({car: l42.fvalue(pv, l263, (function (values,v637){
    if (arguments.length < 2) throw 'too few arguments';
    var v636= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v636 = {car: arguments[i], cdr: 
    v636};
    return (function(){
        try {
            return (function(){
                return (function(v638){
                    return l255.fvalue(values, v638, (function (values,v639){
                        if (arguments.length < 2) throw 'too few arguments';
                        if (arguments.length > 2) throw 'too many arguments';
                        return l124.fvalue(values, "return ", l136.fvalue(pv, l259.fvalue(pv, v639, ">=")), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v637, cdr: v636}));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 225)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l251;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l264 = {name: "<="};
((l251).value = ({car: l42.fvalue(pv, l264, (function (values,v641){
    if (arguments.length < 2) throw 'too few arguments';
    var v640= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v640 = {car: arguments[i], cdr: 
    v640};
    return (function(){
        try {
            return (function(){
                return (function(v642){
                    return l255.fvalue(values, v642, (function (values,v643){
                        if (arguments.length < 2) throw 'too few arguments';
                        if (arguments.length > 2) throw 'too many arguments';
                        return l124.fvalue(values, "return ", l136.fvalue(pv, l259.fvalue(pv, v643, "<=")), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v641, cdr: v640}));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 226)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l251;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l251).value = ({car: l42.fvalue(pv, l18, (function (values,v645){
    if (arguments.length < 2) throw 'too few arguments';
    var v644= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v644 = {car: arguments[i], cdr: 
    v644};
    return (function(){
        try {
            return (function(){
                return (function(v646){
                    return l255.fvalue(values, v646, (function (values,v647){
                        if (arguments.length < 2) throw 'too few arguments';
                        if (arguments.length > 2) throw 'too many arguments';
                        return l124.fvalue(values, "return ", l136.fvalue(pv, l259.fvalue(pv, v647, "==")), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v645, cdr: v644}));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 227)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l251;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l265 = {name: "NUMBERP"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l265, (function (values,v648){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v649){
                        return l136.fvalue(values, l124.fvalue(pv, "(typeof (", v649, ") == \"number\")"));
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v648));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 228)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l266 = {name: "FLOOR"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l266, (function (values,v650){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v651){
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "x", " = ", v651, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue(pv, "if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue(pv, "return ", (function(){
                            return "Math.floor(x)";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v650));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 229)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l27, (function (values,v652,v653){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v654,v655){
                        return l124.fvalue(values, "({car: ", v654, ", cdr: ", v655, "})");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v652),(function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v653));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 230)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l28, (function (values,v656){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v657){
                        return l136.fvalue(values, l124.fvalue(pv, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "var tmp = ", v657, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return (typeof tmp == 'object' && 'car' in tmp);", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()"));
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v656));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 231)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l29, (function (values,v658){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v659){
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "var tmp = ", v659, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l137;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(pv, l3.value), "? ", (function(){
                            var symbol = l137;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(pv, l3.value), ": tmp.car;", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v658));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 232)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l30, (function (values,v660){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v661){
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "var tmp = ", v661, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l137;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(pv, l3.value), "? ", (function(){
                            var symbol = l137;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(pv, l3.value), ": tmp.cdr;", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v660));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 233)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l267 = {name: "SETCAR"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l267, (function (values,v662,v663){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v664,v665){
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "x", " = ", v664, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue(pv, "if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue(pv, "return ", (function(){
                            return l124.fvalue(pv, "(x.car = ", v665, ")");
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v662),(function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v663));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 234)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l268 = {name: "SETCDR"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l268, (function (values,v666,v667){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v668,v669){
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "x", " = ", v668, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue(pv, "if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue(pv, "return ", (function(){
                            return l124.fvalue(pv, "(x.cdr = ", v669, ")");
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v666),(function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v667));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 235)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l269 = {name: "SYMBOLP"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l269, (function (values,v670){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v671){
                        return l136.fvalue(values, l124.fvalue(pv, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "var tmp = ", v671, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return (typeof tmp == 'object' && 'name' in tmp);", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()"));
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v670));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 236)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l270 = {name: "MAKE-SYMBOL"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l270, (function (values,v672){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v673){
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "name", " = ", v673, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue(pv, "if (typeof ", "name", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "throw 'The value ' + ", "name", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue(pv, "return ", (function(){
                            return "({name: name})";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v672));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 237)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l271 = {name: "SYMBOL-NAME"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l271, (function (values,v674){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v675){
                        return l124.fvalue(values, "(", v675, ").name");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v674));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 238)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l215, (function (values,v676,v677){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v678,v679){
                        return l124.fvalue(values, "(", v678, ").value = ", v679);
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v676),(function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v677));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 239)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l272 = {name: "FSET"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l272, (function (values,v680,v681){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v682,v683){
                        return l124.fvalue(values, "(", v682, ").fvalue = ", v683);
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v680),(function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v681));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 240)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l17, (function (values,v684){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v685){
                        return l136.fvalue(values, l124.fvalue(pv, "(", v685, ".value !== undefined)"));
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v684));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 241)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l273 = {name: "SYMBOL-VALUE"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l273, (function (values,v686){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v687){
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "var symbol = ", v687, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var value = symbol.value;", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (value === undefined) throw \"Variable `\" + symbol.name + \"' is unbound.\";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return value;", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v686));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 242)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l224, (function (values,v688){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v689){
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "var symbol = ", v689, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var func = symbol.fvalue;", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (func === undefined) throw \"Function `\" + symbol.name + \"' is undefined.\";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return func;", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v688));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 243)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l274 = {name: "SYMBOL-PLIST"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l274, (function (values,v690){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v691){
                        return l124.fvalue(values, "((", v691, ").plist || ", (function(){
                            var symbol = l137;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(pv, l3.value), ")");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v690));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 244)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l275 = {name: "LAMBDA-CODE"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l275, (function (values,v692){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v693){
                        return l124.fvalue(values, "(", v693, ").toString()");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v692));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 245)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l276 = {name: "EQ"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l276, (function (values,v694,v695){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v696,v697){
                        return l136.fvalue(values, l124.fvalue(pv, "(", v696, " === ", v697, ")"));
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v694),(function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v695));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 246)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l277 = {name: "EQUAL"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l277, (function (values,v698,v699){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v700,v701){
                        return l136.fvalue(values, l124.fvalue(pv, "(", v700, " == ", v701, ")"));
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v698),(function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v699));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 247)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l278 = {name: "CHAR-TO-STRING"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l278, (function (values,v702){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v703){
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "x", " = ", v703, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue(pv, "if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue(pv, "return ", (function(){
                            return "String.fromCharCode(x)";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v702));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 248)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l279 = {name: "STRINGP"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l279, (function (values,v704){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v705){
                        return l136.fvalue(values, l124.fvalue(pv, "(typeof(", v705, ") == \"string\")"));
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v704));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 249)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l280 = {name: "STRING-UPCASE"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l280, (function (values,v706){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v707){
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "x", " = ", v707, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue(pv, "if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue(pv, "return ", (function(){
                            return "x.toUpperCase()";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v706));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 250)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l281 = {name: "STRING-LENGTH"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l281, (function (values,v708){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v709){
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "x", " = ", v709, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue(pv, "if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue(pv, "return ", (function(){
                            return "x.length";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v708));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 251)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l282 = {name: "SLICE"};
((l251).value = ({car: l42.fvalue(pv, l282, (function (values,v710,v711,v712){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    switch(arguments.length-1){
    case 2:
    v712=l3.value;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "var str = ", (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, v710), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var a = ", (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, v711), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var b;", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (v712 !== l3.value ? l124.fvalue(pv, "b = ", (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, v712), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()) : ""), "return str.slice(a,b);", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 252)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l251;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l283 = {name: "CHAR"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l283, (function (values,v713,v714){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v715,v716){
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "string", " = ", v715, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue(pv, "var ", "index", " = ", v716, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue(pv, "if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue(pv, "if (typeof ", "index", " != '", "number", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "throw 'The value ' + ", "index", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue(pv, "return ", (function(){
                            return "string.charCodeAt(index)";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v713),(function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v714));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 253)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l68, (function (values,v717,v718){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v719,v720){
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "string1", " = ", v719, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue(pv, "var ", "string2", " = ", v720, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue(pv, "if (typeof ", "string1", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "throw 'The value ' + ", "string1", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue(pv, "if (typeof ", "string2", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "throw 'The value ' + ", "string2", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue(pv, "return ", (function(){
                            return "string1.concat(string2)";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v717),(function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v718));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 254)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l284 = {name: "FUNCALL"};
((l251).value = ({car: l42.fvalue(pv, l284, (function (values,v722){
    if (arguments.length < 2) throw 'too few arguments';
    var v721= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v721 = {car: arguments[i], cdr: 
    v721};
    return (function(){
        try {
            return (function(){
                return l124.fvalue(values, "(", (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, v722), ")(", l126.fvalue(pv, ({car: ((function(){
                    var symbol = l162;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() !== l3.value ? "values" : "pv"), cdr: l69.fvalue(pv, (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v721)}), ", "), ")");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 255)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l251;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l285 = {name: "APPLY"};
((l251).value = ({car: l42.fvalue(pv, l285, (function (values,v724){
    if (arguments.length < 2) throw 'too few arguments';
    var v723= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v723 = {car: arguments[i], cdr: 
    v723};
    return (function(){
        try {
            return (function(){
                return (l11.fvalue(pv, v723) !== l3.value ? l124.fvalue(values, "(", (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(pv, v724), ")()") : (function(v725,v726){
                    return l124.fvalue(values, "(function(){", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l135.fvalue(pv, "var f = ", (function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v724), ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var args = [", l126.fvalue(pv, ({car: ((function(){
                        var symbol = l162;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() !== l3.value ? "values" : "pv"), cdr: l69.fvalue(pv, (function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v725)}), ", "), "];", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var tail = (", (function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v726), ");", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "while (tail != ", (function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, l3.value), "){", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    args.push(tail.car);", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    tail = tail.cdr;", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "}", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "return f.apply(this, args);", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()");
                })(l81.fvalue(pv, v723),(function(){
                    var tmp = l80.fvalue(pv, v723);
                    return tmp === l3.value? l3.value: tmp.car;
                })()));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 256)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l251;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l286 = {name: "JS-EVAL"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l286, (function (values,v727){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v728){
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "string", " = ", v728, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue(pv, "if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue(pv, "return ", (function(){
                            return ((function(){
                                var symbol = l162;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() !== l3.value ? l124.fvalue(pv, "(function(){", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l135.fvalue(pv, "var v = eval.apply(window, [string]);", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "if (typeof v !== 'object' || !('multiple-value' in v)){", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l135.fvalue(pv, "v = [v];", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "v['multiple-value'] = true;", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), "}", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "return values.apply(this, v);", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), "})()") : "eval.apply(window, [string])");
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v727));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 257)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l287 = {name: "ERROR"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l287, (function (values,v729){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v730){
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "throw ", v730, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v729));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 258)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l288 = {name: "NEW"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l288, (function (values){
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        return "{}";
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 259)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l289 = {name: "OBJECTP"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l289, (function (values,v731){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v732){
                        return l136.fvalue(values, l124.fvalue(pv, "(typeof (", v732, ") === 'object')"));
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v731));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 260)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l290 = {name: "OGET"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l290, (function (values,v733,v734){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v735,v736){
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "var tmp = ", "(", v735, ")[", v736, "];", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp == undefined? ", (function(){
                            var symbol = l137;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(pv, l3.value), ": tmp ;", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v733),(function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v734));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 261)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l291 = {name: "OSET"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l291, (function (values,v737,v738,v739){
        if (arguments.length < 4) throw 'too few arguments';
        if (arguments.length > 4) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v740,v741,v742){
                        return l124.fvalue(values, "((", v740, ")[", v741, "] = ", v742, ")");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v737),(function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v738),(function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v739));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 262)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l292 = {name: "IN"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l292, (function (values,v743,v744){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v745,v746){
                        return l136.fvalue(values, l124.fvalue(pv, "((", v745, ") in (", v746, "))"));
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v743),(function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v744));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 263)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l293 = {name: "FUNCTIONP"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l293, (function (values,v747){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v748){
                        return l136.fvalue(values, l124.fvalue(pv, "(typeof ", v748, " == 'function')"));
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v747));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 264)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l294 = {name: "WRITE-STRING"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l294, (function (values,v749){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v750){
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "x", " = ", v750, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue(pv, "if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue(pv, "return ", (function(){
                            return "lisp.write(x)";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v749));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 265)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l295 = {name: "MAKE-ARRAY"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l295, (function (values,v751){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v752){
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "var r = [];", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "for (var i = 0; i < ", v752, "; i++)", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "r.push(", (function(){
                            var symbol = l137;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(pv, l3.value), ");", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "return r;", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v751));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 266)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l296 = {name: "ARRAYP"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l296, (function (values,v753){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v754){
                        return l136.fvalue(values, l124.fvalue(pv, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "var x = ", v754, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return typeof x === 'object' && 'length' in x;"), "})()"));
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v753));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 267)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l297 = {name: "AREF"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l297, (function (values,v755,v756){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v757,v758){
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "var x = ", "(", v757, ")[", v758, "];", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (x === undefined) throw 'Out of range';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return x;", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v755),(function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v756));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 268)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l298 = {name: "ASET"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l298, (function (values,v759,v760,v761){
        if (arguments.length < 4) throw 'too few arguments';
        if (arguments.length > 4) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v762,v763,v764){
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "var x = ", v762, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var i = ", v763, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (i < 0 || i >= x.length) throw 'Out of range';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return x[i] = ", v764, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v759),(function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v760),(function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v761));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 269)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l299 = {name: "GET-UNIX-TIME"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l299, (function (values){
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        return l124.fvalue(values, "(Math.round(new Date() / 1000))");
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 270)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l300 = {name: "VALUES-ARRAY"};
(function(){
    return ((l251).value = ({car: l42.fvalue(pv, l300, (function (values,v765){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v766){
                        return ((function(){
                            var symbol = l162;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() !== l3.value ? l124.fvalue(values, "values.apply(this, ", v766, ")") : l124.fvalue(values, "pv.apply(this, ", v766, ")"));
                    })((function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, v765));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 271)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l251;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
((l251).value = ({car: l42.fvalue(pv, l132, (function (values){
    var v767= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v767 = {car: arguments[i], cdr: 
    v767};
    return (function(){
        try {
            return (function(){
                return ((function(){
                    var symbol = l162;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() !== l3.value ? l124.fvalue(values, "values(", l126.fvalue(pv, l69.fvalue(pv, (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v767), ", "), ")") : l124.fvalue(values, "pv(", l126.fvalue(pv, l69.fvalue(pv, (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v767), ", "), ")"));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 272)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l251;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
(function(){
    (l190).fvalue = (function(v770){
        ((v770)["fname"] = "MACRO");
        return v770;
    })((function (values,v768){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v768;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(v769){
                        return (((l166.fvalue(pv, v769) === l190)?l4.value: l3.value) !== l3.value ? v769 : l3.value);
                    })(l178.fvalue(pv, v768, (function(){
                        var symbol = l179;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l98)) : l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 273)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l190;
})();
var l301 = {name: "LS-MACROEXPAND-1"};
(function(){
    (l301).fvalue = (function(v775){
        ((v775)["fname"] = "LS-MACROEXPAND-1");
        return v775;
    })((function (values,v771){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v772){
                        return (v772 !== l3.value ? (function(v773){
                            (l57.fvalue(pv, v773) !== l3.value ? (function(){
                                return (function(v774){
                                    l169.fvalue(pv, v772, v774);
                                    return (v773 = v774);
                                })((function(){
                                    var symbol = l226;
                                    var func = symbol.fvalue;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(pv, v773));
                            })() : l3.value);
                            return (function(){
                                var f = v773;
                                var args = [values];
                                var tail = ((function(){
                                    var tmp = v771;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                                while (tail != l3.value){
                                    args.push(tail.car);
                                    tail = tail.cdr;
                                }
                                return f.apply(this, args);
                            })();
                        })(l167.fvalue(pv, v772)) : v771);
                    })(l190.fvalue(pv, (function(){
                        var tmp = v771;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 274)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l301;
})();
var l302 = {name: "COMPILE-FUNCALL"};
(function(){
    (l302).fvalue = (function(v779){
        ((v779)["fname"] = "COMPILE-FUNCALL");
        return v779;
    })((function (values,v776,v777){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v778){
                        return ((((function(){
                            var tmp = v776;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?l4.value: l3.value) !== l3.value ? l192.fvalue(pv, v776, l98, l197) : l3.value) !== l3.value ? l124.fvalue(values, (function(){
                            var symbol = l137;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(pv, l62.fvalue(pv, l42.fvalue(pv, l157), l42.fvalue(pv, v776))), ".fvalue(", l126.fvalue(pv, ({car: v778, cdr: l69.fvalue(pv, (function(){
                            var symbol = l137;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v777)}), ", "), ")") : l124.fvalue(values, (function(){
                            var symbol = l137;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(pv, l62.fvalue(pv, l42.fvalue(pv, l98), l42.fvalue(pv, v776))), "(", l126.fvalue(pv, ({car: v778, cdr: l69.fvalue(pv, (function(){
                            var symbol = l137;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v777)}), ", "), ")"));
                    })(((function(){
                        var symbol = l162;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() !== l3.value ? "values" : "pv"));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 275)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l302;
})();
(function(){
    (l213).fvalue = (function(v782){
        ((v782)["fname"] = "LS-COMPILE-BLOCK");
        return v782;
    })((function (values,v780,v781){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        switch(arguments.length-1){
        case 1:
        v781=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (v781 !== l3.value ? l124.fvalue(values, l213.fvalue(pv, l81.fvalue(pv, v780)), "return ", (function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(pv, (function(){
                        var tmp = l80.fvalue(pv, v780);
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), (function(){
                        var symbol = l162;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), ";") : l127.fvalue(values, l84.fvalue(pv, (function(){
                        var symbol = l187;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l69.fvalue(pv, (function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v780)), l124.fvalue(pv, ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 276)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l213;
})();
(function(){
    (l137).fvalue = (function(v792){
        ((v792)["fname"] = "LS-COMPILE");
        return v792;
    })((function (values,v783,v784){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        switch(arguments.length-1){
        case 1:
        v784=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (function(v785){
                        try {
                            var tmp;
                            tmp = l162.value;
                            l162.value = v785;
                            v785 = tmp;
                            return (((function(){
                                var tmp = v783;
                                return (typeof tmp == 'object' && 'name' in tmp);
                            })()?l4.value: l3.value) !== l3.value ? (function(){
                                return (function(v786){
                                    return ((v786 !== l3.value ? l26.fvalue(pv, l82.fvalue(pv, l194, l168.fvalue(pv, v786))) : l3.value) !== l3.value ? (function(){
                                        return l167.fvalue(values, v786);
                                    })() : ((function(v787){
                                        return (v787 !== l3.value ? v787 : l82.fvalue(pv, l196, l168.fvalue(pv, v786)));
                                    })(l113.fvalue(pv, v783)) !== l3.value ? (function(){
                                        return l124.fvalue(values, l137.fvalue(pv, l62.fvalue(pv, l42.fvalue(pv, l157), l42.fvalue(pv, v783))), ".value");
                                    })() : (function(){
                                        return l137.fvalue(values, l62.fvalue(pv, l42.fvalue(pv, l273), l42.fvalue(pv, l62.fvalue(pv, l42.fvalue(pv, l157), l42.fvalue(pv, v783)))));
                                    })()));
                                })(l178.fvalue(pv, v783, (function(){
                                    var symbol = l179;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), l99));
                            })() : (l75.fvalue(pv, v783) !== l3.value ? (function(){
                                return l16.fvalue(values, v783);
                            })() : (((typeof(v783) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                                return l124.fvalue(values, "\"", l140.fvalue(pv, v783), "\"");
                            })() : (((function(){
                                var x = v783;
                                return typeof x === 'object' && 'length' in x;
                            })()?l4.value: l3.value) !== l3.value ? (function(){
                                return l222.fvalue(values, v783);
                            })() : (l57.fvalue(pv, v783) !== l3.value ? (function(){
                                return (function(v788,v789){
                                    return (l91.fvalue(pv, v788, (function(){
                                        var symbol = l199;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()) !== l3.value ? (function(){
                                        return (function(v790){
                                            return (function(){
                                                var f = v790;
                                                var args = [values];
                                                var tail = (v789);
                                                while (tail != l3.value){
                                                    args.push(tail.car);
                                                    tail = tail.cdr;
                                                }
                                                return f.apply(this, args);
                                            })();
                                        })(l39.fvalue(pv, l91.fvalue(pv, v788, (function(){
                                            var symbol = l199;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })())));
                                    })() : ((l91.fvalue(pv, v788, (function(){
                                        var symbol = l251;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()) !== l3.value ? l26.fvalue(pv, l192.fvalue(pv, v788, l98, l195)) : l3.value) !== l3.value ? (function(){
                                        return (function(v791){
                                            return (function(){
                                                var f = v791;
                                                var args = [values];
                                                var tail = (v789);
                                                while (tail != l3.value){
                                                    args.push(tail.car);
                                                    tail = tail.cdr;
                                                }
                                                return f.apply(this, args);
                                            })();
                                        })(l39.fvalue(pv, l91.fvalue(pv, v788, (function(){
                                            var symbol = l251;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })())));
                                    })() : (function(){
                                        return (l190.fvalue(pv, v788) !== l3.value ? l137.fvalue(values, l301.fvalue(pv, v783), v784) : l302.fvalue(values, v788, v789));
                                    })()));
                                })((function(){
                                    var tmp = v783;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })(),(function(){
                                    var tmp = v783;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            })() : (function(){
                                return (function(){
                                    throw "How should I compile this?";
                                })();
                            })())))));
                        }
                        finally {
                            l162.value = v785;
                        }
                    })(v784);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 277)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l137;
})();
var l303 = {name: "LS-COMPILE-TOPLEVEL"};
(function(){
    (l303).fvalue = (function(v799){
        ((v799)["fname"] = "LS-COMPILE-TOPLEVEL");
        return v799;
    })((function (values,v793,v794){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        switch(arguments.length-1){
        case 1:
        v794=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (function(v795){
                        try {
                            var tmp;
                            tmp = l185.value;
                            l185.value = v795;
                            v795 = tmp;
                            return ((((function(){
                                var tmp = v793;
                                return (typeof tmp == 'object' && 'car' in tmp);
                            })()?l4.value: l3.value) !== l3.value ? (((function(){
                                var tmp = v793;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l227)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return (function(v797){
                                    return l126.fvalue(values, l84.fvalue(pv, (function(){
                                        var symbol = l187;
                                        var func = symbol.fvalue;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })(), v797));
                                })(l69.fvalue(pv, (function (values,v796){
                                    if (arguments.length < 2) throw 'too few arguments';
                                    if (arguments.length > 2) throw 'too many arguments';
                                    return l303.fvalue(values, v796, l4.value);
                                
                                }), (function(){
                                    var tmp = v793;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })()));
                            })() : (function(){
                                return (function(v798){
                                    return l124.fvalue(values, l127.fvalue(pv, l188.fvalue(pv), l124.fvalue(pv, ";", (function(){
                                        var symbol = l123;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })())), (v798 !== l3.value ? l124.fvalue(pv, v798, ";", (function(){
                                        var symbol = l123;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()) : ""));
                                })(l137.fvalue(pv, v793, v794));
                            })());
                        }
                        finally {
                            l185.value = v795;
                        }
                    })(l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 278)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l303;
})();
(function(){
    (l226).fvalue = (function(v801){
        ((v801)["fname"] = "EVAL");
        return v801;
    })((function (values,v800){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var string = l303.fvalue(pv, v800, l4.value);
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
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 279)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l226;
})();
var l304 = {name: "&BODY"};
var l305 = {car: l204, cdr: {car: l203, cdr: {car: l304, cdr: {car: l19, cdr: {car: l14, cdr: {car: l115, cdr: {car: l59, cdr: {car: l60, cdr: {car: l20, cdr: {car: l21, cdr: {car: l22, cdr: {car: l262, cdr: {car: l264, cdr: {car: l18, cdr: {car: l18, cdr: {car: l261, cdr: {car: l263, cdr: {car: l52, cdr: {car: l62, cdr: {car: l285, cdr: {car: l297, cdr: {car: l296, cdr: {car: l298, cdr: {car: l91, cdr: {car: l43, cdr: {car: l175, cdr: {car: l17, cdr: {car: l17, cdr: {car: l81, cdr: {car: l31, cdr: {car: l37, cdr: {car: l35, cdr: {car: l32, cdr: {car: l29, cdr: {car: l29, cdr: {car: l50, cdr: {car: l238, cdr: {car: l33, cdr: {car: l36, cdr: {car: l34, cdr: {car: l30, cdr: {car: l30, cdr: {car: l283, cdr: {car: l73, cdr: {car: l74, cdr: {car: l72, cdr: {car: l49, cdr: {car: l27, cdr: {car: l28, cdr: {car: l71, cdr: {car: l45, cdr: {car: l2, cdr: {car: l8, cdr: {car: l10, cdr: {car: l1, cdr: {car: l7, cdr: {car: l86, cdr: {car: l95, cdr: {car: l97, cdr: {car: l47, cdr: {car: l48, cdr: {car: l51, cdr: {car: l276, cdr: {car: l25, cdr: {car: l277, cdr: {car: l287, cdr: {car: l226, cdr: {car: l90, cdr: {car: l121, cdr: {car: l94, cdr: {car: l105, cdr: {car: l119, cdr: {car: l38, cdr: {car: l41, cdr: {car: l272, cdr: {car: l284, cdr: {car: l98, cdr: {car: l293, cdr: {car: l15, cdr: {car: l122, cdr: {car: l245, cdr: {car: l70, cdr: {car: l201, cdr: {car: l116, cdr: {car: l44, cdr: {car: l75, cdr: {car: l75, cdr: {car: l120, cdr: {car: l113, cdr: {car: l212, cdr: {car: l80, cdr: {car: l67, cdr: {car: l231, cdr: {car: l235, cdr: {car: l101, cdr: {car: l42, cdr: {car: l57, cdr: {car: l295, cdr: {car: l102, cdr: {car: l270, cdr: {car: l69, cdr: {car: l82, cdr: {car: l77, cdr: {car: l258, cdr: {car: l133, cdr: {car: l247, cdr: {car: l134, cdr: {car: l248, cdr: {car: l3, cdr: {car: l26, cdr: {car: l79, cdr: {car: l78, cdr: {car: l11, cdr: {car: l265, cdr: {car: l53, cdr: {car: l106, cdr: {car: l108, cdr: {car: l104, cdr: {car: l76, cdr: {car: l139, cdr: {car: l142, cdr: {car: l198, cdr: {car: l54, cdr: {car: l55, cdr: {car: l227, cdr: {car: l65, cdr: {car: l46, cdr: {car: l157, cdr: {car: l83, cdr: {car: l84, cdr: {car: l85, cdr: {car: l12, cdr: {car: l237, cdr: {car: l63, cdr: {car: l64, cdr: {car: l39, cdr: {car: l215, cdr: {car: l216, cdr: {car: l89, cdr: {car: l280, cdr: {car: l92, cdr: {car: l93, cdr: {car: l279, cdr: {car: l87, cdr: {car: l224, cdr: {car: l271, cdr: {car: l114, cdr: {car: l274, cdr: {car: l273, cdr: {car: l269, cdr: {car: l4, cdr: {car: l244, cdr: {car: l40, cdr: {car: l239, cdr: {car: l24, cdr: {car: l6, cdr: {car: l246, cdr: {car: l132, cdr: {car: l131, cdr: {car: l99, cdr: {car: l141, cdr: {car: l5, cdr: {car: l96, cdr: {car: l294, cdr: {car: l23, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
l121.fvalue(values, l305);
((l115).value = (function(){
    var symbol = l111;
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
    var symbol = l161;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.print = (function(){
    var symbol = l139;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.eval = (function(){
    var symbol = l226;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.compile = (function (values,v802){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return l303.fvalue(values, v802, l4.value);

}));
(lisp.evalString = (function (values,v803){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return l226.fvalue(values, l161.fvalue(pv, v803));

}));
(lisp.compileString = (function (values,v804){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return l303.fvalue(values, l161.fvalue(pv, v804), l4.value);

}));
var l306 = {car: {car: l304, cdr: "l304"}, cdr: {car: {car: l303, cdr: "l303"}, cdr: {car: {car: l302, cdr: "l302"}, cdr: {car: {car: l301, cdr: "l301"}, cdr: {car: {car: l300, cdr: "l300"}, cdr: {car: {car: l299, cdr: "l299"}, cdr: {car: {car: l298, cdr: "l298"}, cdr: {car: {car: l297, cdr: "l297"}, cdr: {car: {car: l296, cdr: "l296"}, cdr: {car: {car: l295, cdr: "l295"}, cdr: {car: {car: l294, cdr: "l294"}, cdr: {car: {car: l293, cdr: "l293"}, cdr: {car: {car: l292, cdr: "l292"}, cdr: {car: {car: l291, cdr: "l291"}, cdr: {car: {car: l290, cdr: "l290"}, cdr: {car: {car: l289, cdr: "l289"}, cdr: {car: {car: l288, cdr: "l288"}, cdr: {car: {car: l287, cdr: "l287"}, cdr: {car: {car: l286, cdr: "l286"}, cdr: {car: {car: l285, cdr: "l285"}, cdr: {car: {car: l284, cdr: "l284"}, cdr: {car: {car: l283, cdr: "l283"}, cdr: {car: {car: l282, cdr: "l282"}, cdr: {car: {car: l281, cdr: "l281"}, cdr: {car: {car: l280, cdr: "l280"}, cdr: {car: {car: l279, cdr: "l279"}, cdr: {car: {car: l278, cdr: "l278"}, cdr: {car: {car: l277, cdr: "l277"}, cdr: {car: {car: l276, cdr: "l276"}, cdr: {car: {car: l275, cdr: "l275"}, cdr: {car: {car: l274, cdr: "l274"}, cdr: {car: {car: l273, cdr: "l273"}, cdr: {car: {car: l272, cdr: "l272"}, cdr: {car: {car: l271, cdr: "l271"}, cdr: {car: {car: l270, cdr: "l270"}, cdr: {car: {car: l269, cdr: "l269"}, cdr: {car: {car: l268, cdr: "l268"}, cdr: {car: {car: l267, cdr: "l267"}, cdr: {car: {car: l266, cdr: "l266"}, cdr: {car: {car: l265, cdr: "l265"}, cdr: {car: {car: l264, cdr: "l264"}, cdr: {car: {car: l263, cdr: "l263"}, cdr: {car: {car: l262, cdr: "l262"}, cdr: {car: {car: l261, cdr: "l261"}, cdr: {car: {car: l260, cdr: "l260"}, cdr: {car: {car: l259, cdr: "l259"}, cdr: {car: {car: l258, cdr: "l258"}, cdr: {car: {car: l257, cdr: "l257"}, cdr: {car: {car: l256, cdr: "l256"}, cdr: {car: {car: l255, cdr: "l255"}, cdr: {car: {car: l254, cdr: "l254"}, cdr: {car: {car: l253, cdr: "l253"}, cdr: {car: {car: l252, cdr: "l252"}, cdr: {car: {car: l251, cdr: "l251"}, cdr: {car: {car: l250, cdr: "l250"}, cdr: {car: {car: l249, cdr: "l249"}, cdr: {car: {car: l248, cdr: "l248"}, cdr: {car: {car: l247, cdr: "l247"}, cdr: {car: {car: l246, cdr: "l246"}, cdr: {car: {car: l245, cdr: "l245"}, cdr: {car: {car: l244, cdr: "l244"}, cdr: {car: {car: l243, cdr: "l243"}, cdr: {car: {car: l242, cdr: "l242"}, cdr: {car: {car: l241, cdr: "l241"}, cdr: {car: {car: l240, cdr: "l240"}, cdr: {car: {car: l239, cdr: "l239"}, cdr: {car: {car: l238, cdr: "l238"}, cdr: {car: {car: l237, cdr: "l237"}, cdr: {car: {car: l236, cdr: "l236"}, cdr: {car: {car: l235, cdr: "l235"}, cdr: {car: {car: l234, cdr: "l234"}, cdr: {car: {car: l233, cdr: "l233"}, cdr: {car: {car: l232, cdr: "l232"}, cdr: {car: {car: l231, cdr: "l231"}, cdr: {car: {car: l230, cdr: "l230"}, cdr: {car: {car: l229, cdr: "l229"}, cdr: {car: {car: l228, cdr: "l228"}, cdr: {car: {car: l227, cdr: "l227"}, cdr: {car: {car: l226, cdr: "l226"}, cdr: {car: {car: l225, cdr: "l225"}, cdr: {car: {car: l224, cdr: "l224"}, cdr: {car: {car: l223, cdr: "l223"}, cdr: {car: {car: l222, cdr: "l222"}, cdr: {car: {car: l221, cdr: "l221"}, cdr: {car: {car: l220, cdr: "l220"}, cdr: {car: {car: l219, cdr: "l219"}, cdr: {car: {car: l218, cdr: "l218"}, cdr: {car: {car: l217, cdr: "l217"}, cdr: {car: {car: l216, cdr: "l216"}, cdr: {car: {car: l215, cdr: "l215"}, cdr: {car: {car: l214, cdr: "l214"}, cdr: {car: {car: l213, cdr: "l213"}, cdr: {car: {car: l212, cdr: "l212"}, cdr: {car: {car: l211, cdr: "l211"}, cdr: {car: {car: l210, cdr: "l210"}, cdr: {car: {car: l209, cdr: "l209"}, cdr: {car: {car: l208, cdr: "l208"}, cdr: {car: {car: l207, cdr: "l207"}, cdr: {car: {car: l206, cdr: "l206"}, cdr: {car: {car: l204, cdr: "l204"}, cdr: {car: {car: l203, cdr: "l203"}, cdr: {car: {car: l202, cdr: "l202"}, cdr: {car: {car: l201, cdr: "l201"}, cdr: {car: {car: l200, cdr: "l200"}, cdr: {car: {car: l199, cdr: "l199"}, cdr: {car: {car: l198, cdr: "l198"}, cdr: {car: {car: l197, cdr: "l197"}, cdr: {car: {car: l196, cdr: "l196"}, cdr: {car: {car: l195, cdr: "l195"}, cdr: {car: {car: l194, cdr: "l194"}, cdr: {car: {car: l193, cdr: "l193"}, cdr: {car: {car: l192, cdr: "l192"}, cdr: {car: {car: l191, cdr: "l191"}, cdr: {car: {car: l190, cdr: "l190"}, cdr: {car: {car: l189, cdr: "l189"}, cdr: {car: {car: l188, cdr: "l188"}, cdr: {car: {car: l187, cdr: "l187"}, cdr: {car: {car: l186, cdr: "l186"}, cdr: {car: {car: l185, cdr: "l185"}, cdr: {car: {car: l184, cdr: "l184"}, cdr: {car: {car: l183, cdr: "l183"}, cdr: {car: {car: l182, cdr: "l182"}, cdr: {car: {car: l181, cdr: "l181"}, cdr: {car: {car: l180, cdr: "l180"}, cdr: {car: {car: l179, cdr: "l179"}, cdr: {car: {car: l178, cdr: "l178"}, cdr: {car: {car: l177, cdr: "l177"}, cdr: {car: {car: l176, cdr: "l176"}, cdr: {car: {car: l175, cdr: "l175"}, cdr: {car: {car: l174, cdr: "l174"}, cdr: {car: {car: l173, cdr: "l173"}, cdr: {car: {car: l172, cdr: "l172"}, cdr: {car: {car: l171, cdr: "l171"}, cdr: {car: {car: l170, cdr: "l170"}, cdr: {car: {car: l169, cdr: "l169"}, cdr: {car: {car: l168, cdr: "l168"}, cdr: {car: {car: l167, cdr: "l167"}, cdr: {car: {car: l166, cdr: "l166"}, cdr: {car: {car: l165, cdr: "l165"}, cdr: {car: {car: l164, cdr: "l164"}, cdr: {car: {car: l163, cdr: "l163"}, cdr: {car: {car: l162, cdr: "l162"}, cdr: {car: {car: l161, cdr: "l161"}, cdr: {car: {car: l160, cdr: "l160"}, cdr: {car: {car: l159, cdr: "l159"}, cdr: {car: {car: l158, cdr: "l158"}, cdr: {car: {car: l157, cdr: "l157"}, cdr: {car: {car: l156, cdr: "l156"}, cdr: {car: {car: l155, cdr: "l155"}, cdr: {car: {car: l154, cdr: "l154"}, cdr: {car: {car: l153, cdr: "l153"}, cdr: {car: {car: l152, cdr: "l152"}, cdr: {car: {car: l151, cdr: "l151"}, cdr: {car: {car: l150, cdr: "l150"}, cdr: {car: {car: l149, cdr: "l149"}, cdr: {car: {car: l148, cdr: "l148"}, cdr: {car: {car: l147, cdr: "l147"}, cdr: {car: {car: l146, cdr: "l146"}, cdr: {car: {car: l145, cdr: "l145"}, cdr: {car: {car: l144, cdr: "l144"}, cdr: {car: {car: l143, cdr: "l143"}, cdr: {car: {car: l142, cdr: "l142"}, cdr: {car: {car: l141, cdr: "l141"}, cdr: {car: {car: l140, cdr: "l140"}, cdr: {car: {car: l139, cdr: "l139"}, cdr: {car: {car: l138, cdr: "l138"}, cdr: {car: {car: l137, cdr: "l137"}, cdr: {car: {car: l136, cdr: "l136"}, cdr: {car: {car: l135, cdr: "l135"}, cdr: {car: {car: l134, cdr: "l134"}, cdr: {car: {car: l133, cdr: "l133"}, cdr: {car: {car: l132, cdr: "l132"}, cdr: {car: {car: l131, cdr: "l131"}, cdr: {car: {car: l130, cdr: "l130"}, cdr: {car: {car: l129, cdr: "l129"}, cdr: {car: {car: l128, cdr: "l128"}, cdr: {car: {car: l127, cdr: "l127"}, cdr: {car: {car: l126, cdr: "l126"}, cdr: {car: {car: l125, cdr: "l125"}, cdr: {car: {car: l124, cdr: "l124"}, cdr: {car: {car: l123, cdr: "l123"}, cdr: {car: {car: l122, cdr: "l122"}, cdr: {car: {car: l121, cdr: "l121"}, cdr: {car: {car: l120, cdr: "l120"}, cdr: {car: {car: l119, cdr: "l119"}, cdr: {car: {car: l118, cdr: "l118"}, cdr: {car: {car: l117, cdr: "l117"}, cdr: {car: {car: l116, cdr: "l116"}, cdr: {car: {car: l115, cdr: "l115"}, cdr: {car: {car: l114, cdr: "l114"}, cdr: {car: {car: l113, cdr: "l113"}, cdr: {car: {car: l112, cdr: "l112"}, cdr: {car: {car: l111, cdr: "l111"}, cdr: {car: {car: l110, cdr: "l110"}, cdr: {car: {car: l109, cdr: "l109"}, cdr: {car: {car: l108, cdr: "l108"}, cdr: {car: {car: l107, cdr: "l107"}, cdr: {car: {car: l106, cdr: "l106"}, cdr: {car: {car: l105, cdr: "l105"}, cdr: {car: {car: l104, cdr: "l104"}, cdr: {car: {car: l103, cdr: "l103"}, cdr: {car: {car: l102, cdr: "l102"}, cdr: {car: {car: l101, cdr: "l101"}, cdr: {car: {car: l100, cdr: "l100"}, cdr: {car: {car: l99, cdr: "l99"}, cdr: {car: {car: l98, cdr: "l98"}, cdr: {car: {car: l97, cdr: "l97"}, cdr: {car: {car: l96, cdr: "l96"}, cdr: {car: {car: l95, cdr: "l95"}, cdr: {car: {car: l94, cdr: "l94"}, cdr: {car: {car: l93, cdr: "l93"}, cdr: {car: {car: l92, cdr: "l92"}, cdr: {car: {car: l91, cdr: "l91"}, cdr: {car: {car: l90, cdr: "l90"}, cdr: {car: {car: l89, cdr: "l89"}, cdr: {car: {car: l88, cdr: "l88"}, cdr: {car: {car: l87, cdr: "l87"}, cdr: {car: {car: l86, cdr: "l86"}, cdr: {car: {car: l85, cdr: "l85"}, cdr: {car: {car: l84, cdr: "l84"}, cdr: {car: {car: l83, cdr: "l83"}, cdr: {car: {car: l82, cdr: "l82"}, cdr: {car: {car: l81, cdr: "l81"}, cdr: {car: {car: l80, cdr: "l80"}, cdr: {car: {car: l79, cdr: "l79"}, cdr: {car: {car: l78, cdr: "l78"}, cdr: {car: {car: l77, cdr: "l77"}, cdr: {car: {car: l76, cdr: "l76"}, cdr: {car: {car: l75, cdr: "l75"}, cdr: {car: {car: l74, cdr: "l74"}, cdr: {car: {car: l73, cdr: "l73"}, cdr: {car: {car: l72, cdr: "l72"}, cdr: {car: {car: l71, cdr: "l71"}, cdr: {car: {car: l70, cdr: "l70"}, cdr: {car: {car: l69, cdr: "l69"}, cdr: {car: {car: l68, cdr: "l68"}, cdr: {car: {car: l67, cdr: "l67"}, cdr: {car: {car: l66, cdr: "l66"}, cdr: {car: {car: l65, cdr: "l65"}, cdr: {car: {car: l64, cdr: "l64"}, cdr: {car: {car: l63, cdr: "l63"}, cdr: {car: {car: l62, cdr: "l62"}, cdr: {car: {car: l61, cdr: "l61"}, cdr: {car: {car: l60, cdr: "l60"}, cdr: {car: {car: l59, cdr: "l59"}, cdr: {car: {car: l58, cdr: "l58"}, cdr: {car: {car: l57, cdr: "l57"}, cdr: {car: {car: l56, cdr: "l56"}, cdr: {car: {car: l55, cdr: "l55"}, cdr: {car: {car: l54, cdr: "l54"}, cdr: {car: {car: l53, cdr: "l53"}, cdr: {car: {car: l52, cdr: "l52"}, cdr: {car: {car: l51, cdr: "l51"}, cdr: {car: {car: l50, cdr: "l50"}, cdr: {car: {car: l49, cdr: "l49"}, cdr: {car: {car: l48, cdr: "l48"}, cdr: {car: {car: l47, cdr: "l47"}, cdr: {car: {car: l46, cdr: "l46"}, cdr: {car: {car: l45, cdr: "l45"}, cdr: {car: {car: l44, cdr: "l44"}, cdr: {car: {car: l43, cdr: "l43"}, cdr: {car: {car: l42, cdr: "l42"}, cdr: {car: {car: l41, cdr: "l41"}, cdr: {car: {car: l40, cdr: "l40"}, cdr: {car: {car: l39, cdr: "l39"}, cdr: {car: {car: l38, cdr: "l38"}, cdr: {car: {car: l37, cdr: "l37"}, cdr: {car: {car: l36, cdr: "l36"}, cdr: {car: {car: l35, cdr: "l35"}, cdr: {car: {car: l34, cdr: "l34"}, cdr: {car: {car: l33, cdr: "l33"}, cdr: {car: {car: l32, cdr: "l32"}, cdr: {car: {car: l31, cdr: "l31"}, cdr: {car: {car: l30, cdr: "l30"}, cdr: {car: {car: l29, cdr: "l29"}, cdr: {car: {car: l28, cdr: "l28"}, cdr: {car: {car: l27, cdr: "l27"}, cdr: {car: {car: l26, cdr: "l26"}, cdr: {car: {car: l25, cdr: "l25"}, cdr: {car: {car: l24, cdr: "l24"}, cdr: {car: {car: l23, cdr: "l23"}, cdr: {car: {car: l22, cdr: "l22"}, cdr: {car: {car: l21, cdr: "l21"}, cdr: {car: {car: l20, cdr: "l20"}, cdr: {car: {car: l19, cdr: "l19"}, cdr: {car: {car: l18, cdr: "l18"}, cdr: {car: {car: l17, cdr: "l17"}, cdr: {car: {car: l16, cdr: "l16"}, cdr: {car: {car: l15, cdr: "l15"}, cdr: {car: {car: l14, cdr: "l14"}, cdr: {car: {car: l13, cdr: "l13"}, cdr: {car: {car: l12, cdr: "l12"}, cdr: {car: {car: l11, cdr: "l11"}, cdr: {car: {car: l10, cdr: "l10"}, cdr: {car: {car: l9, cdr: "l9"}, cdr: {car: {car: l8, cdr: "l8"}, cdr: {car: {car: l7, cdr: "l7"}, cdr: {car: {car: l6, cdr: "l6"}, cdr: {car: {car: l5, cdr: "l5"}, cdr: {car: {car: l4, cdr: "l4"}, cdr: {car: {car: l3, cdr: "l3"}, cdr: {car: {car: l2, cdr: "l2"}, cdr: {car: {car: l1, cdr: "l1"}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
var l307 = {name: "OP"};
var l308 = {name: "SYM"};
var l309 = {name: "X"};
var l310 = {name: "ARGS"};
var l311 = {name: "BODY"};
var l312 = {name: "DECLS"};
var l313 = {name: "DECL"};
var l314 = {name: "NAME"};
var l315 = {name: "ARG"};
var l316 = {name: "FORM"};
var l317 = {name: "VALUE-FROM"};
var l318 = {name: "VARIABLES"};
var l319 = {name: "PACKAGE-DESIGNATOR"};
var l320 = {name: "PAIRS"};
var l321 = {name: "ASSIGNMENTS"};
var l322 = {name: "VALUE"};
var l323 = {name: "FORM1"};
var l324 = {name: "RESULT"};
var l325 = {name: "FORMS"};
var l326 = {name: "G"};
var l327 = {name: "CLAUSULES"};
var l328 = {name: "!FORM"};
var l329 = {name: "CLAUSULE"};
var l330 = {name: "ITER"};
var l331 = {name: "G!TO"};
var l332 = {name: "VAR"};
var l333 = {name: "TO"};
var l334 = {name: "G!LIST"};
var l335 = {name: "PLACE"};
var l336 = {name: "DELTA"};
var l337 = {name: "CONDITION"};
var l338 = {name: "DOCSTRING"};
var l339 = {car: {car: {car: l251, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l241, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l240, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l236, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l220, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l219, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l202, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l199, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l185, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l180, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l179, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l163, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l162, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l156, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l123, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l115, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l112, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l111, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l110, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l100, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l14, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l4, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: {car: l196, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l3, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: {car: l196, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: {car: {car: l226, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l303, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l137, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l213, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l302, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l301, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l190, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l260, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l307, cdr: {car: l308, cdr: l3}}, cdr: {car: {car: l158, cdr: {car: {car: l252, cdr: {car: {car: l160, cdr: {car: l307, cdr: l3}}, cdr: {car: {car: l309, cdr: {car: l204, cdr: {car: l310, cdr: l3}}}, cdr: {car: {car: l231, cdr: {car: {car: {car: l310, cdr: {car: {car: l27, cdr: {car: l309, cdr: {car: l310, cdr: l3}}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l256, cdr: {car: l310, cdr: {car: {car: l136, cdr: {car: {car: l259, cdr: {car: l310, cdr: {car: {car: l160, cdr: {car: l308, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l259, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l257, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l256, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l310, cdr: {car: l204, cdr: {car: l311, cdr: l3}}}, cdr: {car: {car: l6, cdr: {car: {car: l269, cdr: {car: l310, cdr: l3}}, cdr: {car: {car: l287, cdr: {car: "Bad usage of VARIABLE-ARITY, you must pass a symbol", cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l255, cdr: {car: {car: l160, cdr: {car: l310, cdr: l3}}, cdr: {car: {car: l212, cdr: {car: {car: {car: l160, cdr: {car: l310, cdr: l3}}, cdr: l3}, cdr: {car: {car: l124, cdr: {car: "return ", cdr: {car: {car: l159, cdr: {car: l311, cdr: l3}}, cdr: {car: ";", cdr: {car: l123, cdr: l3}}}}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l255, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l254, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l312, cdr: {car: l204, cdr: {car: l311, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l138, cdr: {car: {car: l159, cdr: {car: {car: l69, cdr: {car: {car: l212, cdr: {car: {car: l313, cdr: l3}, cdr: {car: {car: l158, cdr: {car: {car: l124, cdr: {car: "var ", cdr: {car: {car: l160, cdr: {car: {car: l38, cdr: {car: l313, cdr: l3}}, cdr: l3}}, cdr: {car: " = ", cdr: {car: {car: l160, cdr: {car: {car: l40, cdr: {car: l313, cdr: l3}}, cdr: l3}}, cdr: {car: ";", cdr: {car: l123, cdr: l3}}}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l312, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l159, cdr: {car: {car: l69, cdr: {car: {car: l212, cdr: {car: {car: l313, cdr: l3}, cdr: {car: {car: l158, cdr: {car: {car: l124, cdr: {car: "if (typeof ", cdr: {car: {car: l160, cdr: {car: {car: l38, cdr: {car: l313, cdr: l3}}, cdr: l3}}, cdr: {car: " != '", cdr: {car: {car: l160, cdr: {car: {car: l39, cdr: {car: l313, cdr: l3}}, cdr: l3}}, cdr: {car: "')", cdr: {car: l123, cdr: {car: {car: l135, cdr: {car: "throw 'The value ' + ", cdr: {car: {car: l160, cdr: {car: {car: l38, cdr: {car: l313, cdr: l3}}, cdr: l3}}, cdr: {car: " + ' is not a type ", cdr: {car: {car: l160, cdr: {car: {car: l39, cdr: {car: l313, cdr: l3}}, cdr: l3}}, cdr: {car: ".';", cdr: {car: l123, cdr: l3}}}}}}}, cdr: l3}}}}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l312, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l124, cdr: {car: "return ", cdr: {car: {car: l227, cdr: {car: {car: l159, cdr: {car: l311, cdr: l3}}, cdr: l3}}, cdr: {car: ";", cdr: {car: l123, cdr: l3}}}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l253, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l314, cdr: {car: l310, cdr: {car: l204, cdr: {car: l311, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: {car: l227, cdr: {car: {car: l252, cdr: {car: {car: l160, cdr: {car: l314, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l310, cdr: l3}}, cdr: {car: {car: l231, cdr: {car: {car: l160, cdr: {car: {car: l69, cdr: {car: {car: l212, cdr: {car: {car: l315, cdr: l3}, cdr: {car: {car: l158, cdr: {car: {car: {car: l160, cdr: {car: l315, cdr: l3}}, cdr: {car: {car: l137, cdr: {car: {car: l160, cdr: {car: l315, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l310, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l159, cdr: {car: l311, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l252, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l314, cdr: {car: l310, cdr: {car: l204, cdr: {car: l311, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: {car: l46, cdr: {car: {car: l42, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l212, cdr: {car: {car: l160, cdr: {car: l310, cdr: l3}}, cdr: {car: {car: l175, cdr: {car: {car: l160, cdr: {car: l314, cdr: l3}}, cdr: {car: {car: l159, cdr: {car: l311, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l251, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l316, cdr: l3}, cdr: {car: {car: l249, cdr: {car: l316, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l250, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l249, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l243, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l242, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l234, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l233, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l230, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l229, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l228, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l314, cdr: {car: l310, cdr: {car: l316, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l200, cdr: {car: {car: l160, cdr: {car: l314, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l310, cdr: l3}}, cdr: {car: {car: l137, cdr: {car: {car: l160, cdr: {car: l316, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l222, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l221, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l140, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l214, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l211, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l210, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l209, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l208, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l207, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l206, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l200, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l314, cdr: {car: l310, cdr: {car: l204, cdr: {car: l311, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: {car: l46, cdr: {car: {car: l42, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l212, cdr: {car: {car: l160, cdr: {car: l310, cdr: l3}}, cdr: {car: {car: l175, cdr: {car: {car: l160, cdr: {car: l314, cdr: l3}}, cdr: {car: {car: l159, cdr: {car: l311, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l199, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l193, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l192, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l191, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l189, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l188, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l187, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l186, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l183, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l182, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l181, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l178, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l177, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l174, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l173, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l172, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l171, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l170, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l169, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l168, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l167, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l166, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l165, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l164, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l161, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l152, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l155, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l154, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l153, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l151, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l149, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l148, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l147, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l146, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l145, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l144, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l143, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l142, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l141, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l96, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l139, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l138, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l204, cdr: {car: l311, cdr: l3}}, cdr: {car: {car: l158, cdr: {car: {car: l124, cdr: {car: "(function(){", cdr: {car: l123, cdr: {car: {car: l135, cdr: {car: {car: l159, cdr: {car: l311, cdr: l3}}, cdr: l3}}, cdr: {car: "})()", cdr: l3}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l136, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l16, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l135, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l134, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l317, cdr: l3}, cdr: {car: {car: l158, cdr: {car: {car: l247, cdr: {car: {car: l98, cdr: {car: l42, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l317, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l133, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l318, cdr: {car: l317, cdr: {car: l204, cdr: {car: l311, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: {car: l247, cdr: {car: {car: l212, cdr: {car: {car: l203, cdr: {car: {car: l159, cdr: {car: l318, cdr: l3}}, cdr: {car: l204, cdr: {car: {car: l160, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l159, cdr: {car: l311, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l160, cdr: {car: l317, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l132, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l131, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l130, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l129, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l128, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l127, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l126, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l125, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l99, cdr: {car: l204, cdr: {car: l316, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l216, cdr: {car: {car: l160, cdr: {car: l99, cdr: l3}}, cdr: {car: {car: l124, cdr: {car: {car: l160, cdr: {car: l99, cdr: l3}}, cdr: {car: {car: l227, cdr: {car: {car: l159, cdr: {car: l316, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l124, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l122, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l121, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l114, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l120, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l119, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l118, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l117, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l116, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l319, cdr: l3}, cdr: {car: {car: l158, cdr: {car: {car: l225, cdr: {car: {car: l216, cdr: {car: l115, cdr: {car: {car: l103, cdr: {car: {car: l160, cdr: {car: l319, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l113, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l109, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l108, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l107, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l106, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l103, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l105, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l104, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l102, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l101, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l97, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l95, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l94, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l93, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l92, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l91, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l90, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l89, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l88, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l87, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l86, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l85, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l84, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l83, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l82, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l81, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l80, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l79, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l78, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l57, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l77, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l76, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l75, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l74, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l73, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l72, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l71, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l70, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l69, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l68, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l67, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l66, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l65, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l204, cdr: {car: l320, cdr: l3}}, cdr: {car: {car: l231, cdr: {car: {car: {car: l321, cdr: {car: {car: l157, cdr: {car: l3, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l13, cdr: {car: l4, cdr: {car: {car: l49, cdr: {car: {car: {car: l11, cdr: {car: l320, cdr: l3}}, cdr: {car: {car: l12, cdr: l3}, cdr: l3}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l30, cdr: {car: l320, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l287, cdr: {car: "Odd paris in PSETQ", cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l231, cdr: {car: {car: {car: l99, cdr: {car: {car: l29, cdr: {car: l320, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l322, cdr: {car: {car: l32, cdr: {car: l320, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l46, cdr: {car: {car: l158, cdr: {car: {car: {car: l160, cdr: {car: l99, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l322, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: l321, cdr: l3}}}, cdr: {car: {car: l216, cdr: {car: l320, cdr: {car: {car: l34, cdr: {car: l320, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: {car: l216, cdr: {car: l321, cdr: {car: {car: l64, cdr: {car: l321, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l231, cdr: {car: {car: l160, cdr: {car: {car: l69, cdr: {car: {car: l98, cdr: {car: l30, cdr: l3}}, cdr: {car: l321, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l216, cdr: {car: {car: l159, cdr: {car: {car: l58, cdr: {car: {car: l98, cdr: {car: l62, cdr: l3}}, cdr: {car: {car: l69, cdr: {car: {car: l98, cdr: {car: l81, cdr: l3}}, cdr: {car: l321, cdr: l3}}}, cdr: {car: {car: l157, cdr: {car: l3, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l64, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l63, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l62, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l61, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l60, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l59, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l58, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l56, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l55, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l323, cdr: {car: l324, cdr: {car: l204, cdr: {car: l311, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: {car: l54, cdr: {car: {car: l227, cdr: {car: {car: l160, cdr: {car: l323, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l324, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l159, cdr: {car: l311, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l54, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l316, cdr: {car: l204, cdr: {car: l311, cdr: l3}}}, cdr: {car: {car: l231, cdr: {car: {car: {car: l322, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l158, cdr: {car: {car: l231, cdr: {car: {car: {car: {car: l160, cdr: {car: l322, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l316, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l159, cdr: {car: l311, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l322, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l53, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l204, cdr: {car: l325, cdr: l3}}, cdr: {car: {car: l49, cdr: {car: {car: {car: l11, cdr: {car: l325, cdr: l3}}, cdr: {car: l3, cdr: l3}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l30, cdr: {car: l325, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l29, cdr: {car: l325, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l231, cdr: {car: {car: {car: l326, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l158, cdr: {car: {car: l231, cdr: {car: {car: {car: {car: l160, cdr: {car: l326, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: {car: l29, cdr: {car: l325, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l201, cdr: {car: {car: l160, cdr: {car: l326, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l326, cdr: l3}}, cdr: {car: {car: l53, cdr: {car: {car: l159, cdr: {car: {car: l30, cdr: {car: l325, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l52, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l204, cdr: {car: l325, cdr: l3}}, cdr: {car: {car: l49, cdr: {car: {car: {car: l11, cdr: {car: l325, cdr: l3}}, cdr: {car: l4, cdr: l3}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l30, cdr: {car: l325, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l29, cdr: {car: l325, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l158, cdr: {car: {car: l201, cdr: {car: {car: l160, cdr: {car: {car: l29, cdr: {car: l325, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l52, cdr: {car: {car: l159, cdr: {car: {car: l30, cdr: {car: l325, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l51, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l316, cdr: {car: l204, cdr: {car: l327, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l50, cdr: {car: {car: l160, cdr: {car: l316, cdr: l3}}, cdr: {car: {car: l159, cdr: {car: {car: l62, cdr: {car: l327, cdr: {car: {car: l158, cdr: {car: {car: {car: l4, cdr: {car: {car: l287, cdr: {car: "ECASE expression failed.", cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l50, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l316, cdr: {car: l204, cdr: {car: l327, cdr: l3}}}, cdr: {car: {car: l231, cdr: {car: {car: {car: l328, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l158, cdr: {car: {car: l231, cdr: {car: {car: {car: {car: l160, cdr: {car: l328, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l316, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l49, cdr: {car: {car: l159, cdr: {car: {car: l69, cdr: {car: {car: l212, cdr: {car: {car: l329, cdr: l3}, cdr: {car: {car: l201, cdr: {car: {car: l276, cdr: {car: {car: l29, cdr: {car: l329, cdr: l3}}, cdr: {car: l4, cdr: l3}}}, cdr: {car: l329, cdr: {car: {car: l158, cdr: {car: {car: {car: l25, cdr: {car: {car: l160, cdr: {car: l328, cdr: l3}}, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: {car: l29, cdr: {car: l329, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l159, cdr: {car: {car: l30, cdr: {car: l329, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l327, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l49, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l204, cdr: {car: l327, cdr: l3}}, cdr: {car: {car: l201, cdr: {car: {car: l11, cdr: {car: l327, cdr: l3}}, cdr: {car: l3, cdr: {car: {car: l201, cdr: {car: {car: l276, cdr: {car: {car: l31, cdr: {car: l327, cdr: l3}}, cdr: {car: l4, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l227, cdr: {car: {car: l159, cdr: {car: {car: l33, cdr: {car: l327, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l158, cdr: {car: {car: l201, cdr: {car: {car: l160, cdr: {car: {car: l31, cdr: {car: l327, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l227, cdr: {car: {car: l159, cdr: {car: {car: l33, cdr: {car: l327, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l49, cdr: {car: {car: l159, cdr: {car: {car: l30, cdr: {car: l327, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l48, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l330, cdr: {car: l204, cdr: {car: l311, cdr: l3}}}, cdr: {car: {car: l231, cdr: {car: {car: {car: l331, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: {car: {car: l332, cdr: {car: {car: l38, cdr: {car: l330, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l333, cdr: {car: {car: l39, cdr: {car: l330, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l324, cdr: {car: {car: l40, cdr: {car: l330, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: {car: l175, cdr: {car: l3, cdr: {car: {car: l231, cdr: {car: {car: {car: {car: l160, cdr: {car: l332, cdr: l3}}, cdr: {car: 0, cdr: l3}}, cdr: {car: {car: {car: l160, cdr: {car: l331, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l333, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l223, cdr: {car: {car: l262, cdr: {car: {car: l160, cdr: {car: l332, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l331, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l244, cdr: {car: {car: l159, cdr: {car: l311, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l44, cdr: {car: {car: l160, cdr: {car: l332, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l160, cdr: {car: l324, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l47, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l330, cdr: {car: l204, cdr: {car: l311, cdr: l3}}}, cdr: {car: {car: l231, cdr: {car: {car: {car: l332, cdr: {car: {car: l38, cdr: {car: l330, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l334, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l158, cdr: {car: {car: l175, cdr: {car: l3, cdr: {car: {car: l231, cdr: {car: {car: {car: {car: l160, cdr: {car: l334, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: {car: l39, cdr: {car: l330, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: {car: l160, cdr: {car: l332, cdr: l3}}, cdr: {car: l3, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l223, cdr: {car: {car: l160, cdr: {car: l334, cdr: l3}}, cdr: {car: {car: l216, cdr: {car: {car: l160, cdr: {car: l332, cdr: l3}}, cdr: {car: {car: l29, cdr: {car: {car: l160, cdr: {car: l334, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l244, cdr: {car: {car: l159, cdr: {car: l311, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l216, cdr: {car: {car: l160, cdr: {car: l334, cdr: l3}}, cdr: {car: {car: l30, cdr: {car: {car: l160, cdr: {car: l334, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}}, cdr: {car: {car: l160, cdr: {car: {car: l40, cdr: {car: l330, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l46, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l309, cdr: {car: l335, cdr: l3}}, cdr: {car: {car: l158, cdr: {car: {car: l216, cdr: {car: {car: l160, cdr: {car: l335, cdr: l3}}, cdr: {car: {car: l27, cdr: {car: {car: l160, cdr: {car: l309, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l335, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l45, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l309, cdr: {car: l203, cdr: {car: {car: l336, cdr: {car: 1, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l216, cdr: {car: {car: l160, cdr: {car: l309, cdr: l3}}, cdr: {car: {car: l60, cdr: {car: {car: l160, cdr: {car: l309, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l336, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l44, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l309, cdr: {car: l203, cdr: {car: {car: l336, cdr: {car: 1, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l216, cdr: {car: {car: l160, cdr: {car: l309, cdr: l3}}, cdr: {car: {car: l59, cdr: {car: {car: l160, cdr: {car: l309, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l336, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l43, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l42, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l41, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l40, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l39, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l38, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l37, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l36, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l35, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l34, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l33, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l32, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l31, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l30, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l29, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l28, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l27, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l26, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l25, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l24, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l23, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l22, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l21, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l20, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l19, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l18, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l17, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l15, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l13, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l337, cdr: {car: l204, cdr: {car: l311, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l175, cdr: {car: l3, cdr: {car: {car: l223, cdr: {car: {car: l160, cdr: {car: l337, cdr: l3}}, cdr: {car: {car: l159, cdr: {car: l311, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l12, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l203, cdr: {car: l322, cdr: l3}}, cdr: {car: {car: l158, cdr: {car: {car: l237, cdr: {car: l3, cdr: {car: {car: l160, cdr: {car: l322, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l11, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l197, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l10, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l314, cdr: {car: l310, cdr: {car: l204, cdr: {car: l311, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: {car: l227, cdr: {car: {car: l2, cdr: {car: {car: l197, cdr: {car: {car: l160, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l272, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l9, cdr: {car: {car: l160, cdr: {car: {car: l271, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l310, cdr: l3}}, cdr: {car: {car: l159, cdr: {car: {car: l201, cdr: {car: {car: l52, cdr: {car: {car: l279, cdr: {car: {car: l29, cdr: {car: l311, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l26, cdr: {car: {car: l11, cdr: {car: {car: l30, cdr: {car: l311, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: {car: l160, cdr: {car: {car: l29, cdr: {car: l311, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l175, cdr: {car: {car: l160, cdr: {car: l314, cdr: l3}}, cdr: {car: {car: l159, cdr: {car: {car: l30, cdr: {car: l311, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l158, cdr: {car: {car: {car: l175, cdr: {car: {car: l160, cdr: {car: l314, cdr: l3}}, cdr: {car: {car: l159, cdr: {car: l311, cdr: l3}}, cdr: l3}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l9, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l314, cdr: {car: l310, cdr: {car: l204, cdr: {car: l311, cdr: l3}}}}, cdr: {car: {car: l231, cdr: {car: {car: {car: l309, cdr: {car: {car: l15, cdr: {car: "FN", cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l158, cdr: {car: {car: l231, cdr: {car: {car: {car: {car: l160, cdr: {car: l309, cdr: l3}}, cdr: {car: {car: l212, cdr: {car: {car: l160, cdr: {car: l310, cdr: l3}}, cdr: {car: {car: l159, cdr: {car: l311, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l291, cdr: {car: {car: l160, cdr: {car: l309, cdr: l3}}, cdr: {car: "fname", cdr: {car: {car: l160, cdr: {car: l314, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l160, cdr: {car: l309, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l8, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l314, cdr: {car: l322, cdr: {car: l203, cdr: {car: l338, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: {car: l227, cdr: {car: {car: l216, cdr: {car: {car: l160, cdr: {car: l314, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l322, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l159, cdr: {car: {car: l5, cdr: {car: {car: l279, cdr: {car: l338, cdr: l3}}, cdr: {car: {car: l158, cdr: {car: {car: {car: l291, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: {car: "vardoc", cdr: {car: {car: l160, cdr: {car: l338, cdr: l3}}, cdr: l3}}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l7, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l314, cdr: {car: l322, cdr: {car: l203, cdr: {car: l338, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: {car: l227, cdr: {car: {car: l2, cdr: {car: {car: l194, cdr: {car: {car: l160, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l6, cdr: {car: {car: l17, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l216, cdr: {car: {car: l160, cdr: {car: l314, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l322, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: {car: l159, cdr: {car: {car: l5, cdr: {car: {car: l279, cdr: {car: l338, cdr: l3}}, cdr: {car: {car: l158, cdr: {car: {car: {car: l291, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: {car: "vardoc", cdr: {car: {car: l160, cdr: {car: l338, cdr: l3}}, cdr: l3}}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: l3}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l6, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l337, cdr: {car: l204, cdr: {car: l311, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l201, cdr: {car: {car: l160, cdr: {car: l337, cdr: l3}}, cdr: {car: l3, cdr: {car: {car: l227, cdr: {car: {car: l159, cdr: {car: l311, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l5, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l337, cdr: {car: l204, cdr: {car: l311, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l201, cdr: {car: {car: l160, cdr: {car: l337, cdr: l3}}, cdr: {car: {car: l227, cdr: {car: {car: l159, cdr: {car: l311, cdr: l3}}, cdr: l3}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l2, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l204, cdr: {car: l312, cdr: l3}}, cdr: {car: {car: l158, cdr: {car: {car: l225, cdr: {car: {car: l159, cdr: {car: {car: l69, cdr: {car: {car: l212, cdr: {car: {car: l313, cdr: l3}, cdr: {car: {car: l158, cdr: {car: {car: l193, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: l313, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l312, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l1, cdr: {car: l190, cdr: {car: {car: l212, cdr: {car: {car: l314, cdr: {car: l310, cdr: {car: l204, cdr: {car: l311, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: {car: l225, cdr: {car: {car: l189, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l157, cdr: {car: {car: l212, cdr: {car: {car: l160, cdr: {car: {car: l69, cdr: {car: {car: l212, cdr: {car: {car: l309, cdr: l3}, cdr: {car: {car: l201, cdr: {car: {car: l276, cdr: {car: l309, cdr: {car: {car: l157, cdr: {car: l304, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l157, cdr: {car: l204, cdr: l3}}, cdr: {car: l309, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l310, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l159, cdr: {car: l311, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: l3, cdr: {car: l3, cdr: l3}}}};
(function(){
    l117.fvalue(pv, l304);
    l117.fvalue(pv, l303);
    l117.fvalue(pv, l302);
    l117.fvalue(pv, l301);
    l117.fvalue(pv, l300);
    l117.fvalue(pv, l299);
    l117.fvalue(pv, l298);
    l117.fvalue(pv, l297);
    l117.fvalue(pv, l296);
    l117.fvalue(pv, l295);
    l117.fvalue(pv, l294);
    l117.fvalue(pv, l293);
    l117.fvalue(pv, l292);
    l117.fvalue(pv, l291);
    l117.fvalue(pv, l290);
    l117.fvalue(pv, l289);
    l117.fvalue(pv, l288);
    l117.fvalue(pv, l287);
    l117.fvalue(pv, l286);
    l117.fvalue(pv, l285);
    l117.fvalue(pv, l284);
    l117.fvalue(pv, l283);
    l117.fvalue(pv, l282);
    l117.fvalue(pv, l281);
    l117.fvalue(pv, l280);
    l117.fvalue(pv, l279);
    l117.fvalue(pv, l278);
    l117.fvalue(pv, l277);
    l117.fvalue(pv, l276);
    l117.fvalue(pv, l275);
    l117.fvalue(pv, l274);
    l117.fvalue(pv, l273);
    l117.fvalue(pv, l272);
    l117.fvalue(pv, l271);
    l117.fvalue(pv, l270);
    l117.fvalue(pv, l269);
    l117.fvalue(pv, l268);
    l117.fvalue(pv, l267);
    l117.fvalue(pv, l266);
    l117.fvalue(pv, l265);
    l117.fvalue(pv, l264);
    l117.fvalue(pv, l263);
    l117.fvalue(pv, l262);
    l117.fvalue(pv, l261);
    l117.fvalue(pv, l260);
    l117.fvalue(pv, l259);
    l117.fvalue(pv, l258);
    l117.fvalue(pv, l257);
    l117.fvalue(pv, l256);
    l117.fvalue(pv, l255);
    l117.fvalue(pv, l254);
    l117.fvalue(pv, l253);
    l117.fvalue(pv, l252);
    l117.fvalue(pv, l251);
    l117.fvalue(pv, l250);
    l117.fvalue(pv, l249);
    l117.fvalue(pv, l248);
    l117.fvalue(pv, l247);
    l117.fvalue(pv, l246);
    l117.fvalue(pv, l245);
    l117.fvalue(pv, l244);
    l117.fvalue(pv, l243);
    l117.fvalue(pv, l242);
    l117.fvalue(pv, l241);
    l117.fvalue(pv, l240);
    l117.fvalue(pv, l239);
    l117.fvalue(pv, l238);
    l117.fvalue(pv, l237);
    l117.fvalue(pv, l236);
    l117.fvalue(pv, l235);
    l117.fvalue(pv, l234);
    l117.fvalue(pv, l233);
    l117.fvalue(pv, l232);
    l117.fvalue(pv, l231);
    l117.fvalue(pv, l230);
    l117.fvalue(pv, l229);
    l117.fvalue(pv, l228);
    l117.fvalue(pv, l227);
    l117.fvalue(pv, l226);
    l117.fvalue(pv, l225);
    l117.fvalue(pv, l224);
    l117.fvalue(pv, l223);
    l117.fvalue(pv, l222);
    l117.fvalue(pv, l221);
    l117.fvalue(pv, l220);
    l117.fvalue(pv, l219);
    l117.fvalue(pv, l218);
    l117.fvalue(pv, l217);
    l117.fvalue(pv, l216);
    l117.fvalue(pv, l215);
    l117.fvalue(pv, l214);
    l117.fvalue(pv, l213);
    l117.fvalue(pv, l212);
    l117.fvalue(pv, l211);
    l117.fvalue(pv, l210);
    l117.fvalue(pv, l209);
    l117.fvalue(pv, l208);
    l117.fvalue(pv, l207);
    l117.fvalue(pv, l206);
    l117.fvalue(pv, l204);
    l117.fvalue(pv, l203);
    l117.fvalue(pv, l202);
    l117.fvalue(pv, l201);
    l117.fvalue(pv, l200);
    l117.fvalue(pv, l199);
    l117.fvalue(pv, l198);
    l117.fvalue(pv, l197);
    l117.fvalue(pv, l196);
    l117.fvalue(pv, l195);
    l117.fvalue(pv, l194);
    l117.fvalue(pv, l193);
    l117.fvalue(pv, l192);
    l117.fvalue(pv, l191);
    l117.fvalue(pv, l190);
    l117.fvalue(pv, l189);
    l117.fvalue(pv, l188);
    l117.fvalue(pv, l187);
    l117.fvalue(pv, l186);
    l117.fvalue(pv, l185);
    l117.fvalue(pv, l184);
    l117.fvalue(pv, l183);
    l117.fvalue(pv, l182);
    l117.fvalue(pv, l181);
    l117.fvalue(pv, l180);
    l117.fvalue(pv, l179);
    l117.fvalue(pv, l178);
    l117.fvalue(pv, l177);
    l117.fvalue(pv, l176);
    l117.fvalue(pv, l175);
    l117.fvalue(pv, l174);
    l117.fvalue(pv, l173);
    l117.fvalue(pv, l172);
    l117.fvalue(pv, l171);
    l117.fvalue(pv, l170);
    l117.fvalue(pv, l169);
    l117.fvalue(pv, l168);
    l117.fvalue(pv, l167);
    l117.fvalue(pv, l166);
    l117.fvalue(pv, l165);
    l117.fvalue(pv, l164);
    l117.fvalue(pv, l163);
    l117.fvalue(pv, l162);
    l117.fvalue(pv, l161);
    l117.fvalue(pv, l160);
    l117.fvalue(pv, l159);
    l117.fvalue(pv, l158);
    l117.fvalue(pv, l157);
    l117.fvalue(pv, l156);
    l117.fvalue(pv, l155);
    l117.fvalue(pv, l154);
    l117.fvalue(pv, l153);
    l117.fvalue(pv, l152);
    l117.fvalue(pv, l151);
    l117.fvalue(pv, l150);
    l117.fvalue(pv, l149);
    l117.fvalue(pv, l148);
    l117.fvalue(pv, l147);
    l117.fvalue(pv, l146);
    l117.fvalue(pv, l145);
    l117.fvalue(pv, l144);
    l117.fvalue(pv, l143);
    l117.fvalue(pv, l142);
    l117.fvalue(pv, l141);
    l117.fvalue(pv, l140);
    l117.fvalue(pv, l139);
    l117.fvalue(pv, l138);
    l117.fvalue(pv, l137);
    l117.fvalue(pv, l136);
    l117.fvalue(pv, l135);
    l117.fvalue(pv, l134);
    l117.fvalue(pv, l133);
    l117.fvalue(pv, l132);
    l117.fvalue(pv, l131);
    l117.fvalue(pv, l130);
    l117.fvalue(pv, l129);
    l117.fvalue(pv, l128);
    l117.fvalue(pv, l127);
    l117.fvalue(pv, l126);
    l117.fvalue(pv, l125);
    l117.fvalue(pv, l124);
    l117.fvalue(pv, l123);
    l117.fvalue(pv, l122);
    l117.fvalue(pv, l121);
    l117.fvalue(pv, l120);
    l117.fvalue(pv, l119);
    l117.fvalue(pv, l118);
    l117.fvalue(pv, l117);
    l117.fvalue(pv, l116);
    l117.fvalue(pv, l115);
    l117.fvalue(pv, l114);
    l117.fvalue(pv, l113);
    l117.fvalue(pv, l112);
    l117.fvalue(pv, l111);
    l117.fvalue(pv, l110);
    l117.fvalue(pv, l109);
    l117.fvalue(pv, l108);
    l117.fvalue(pv, l107);
    l117.fvalue(pv, l106);
    l117.fvalue(pv, l105);
    l117.fvalue(pv, l104);
    l117.fvalue(pv, l103);
    l117.fvalue(pv, l102);
    l117.fvalue(pv, l101);
    l117.fvalue(pv, l100);
    l117.fvalue(pv, l99);
    l117.fvalue(pv, l98);
    l117.fvalue(pv, l97);
    l117.fvalue(pv, l96);
    l117.fvalue(pv, l95);
    l117.fvalue(pv, l94);
    l117.fvalue(pv, l93);
    l117.fvalue(pv, l92);
    l117.fvalue(pv, l91);
    l117.fvalue(pv, l90);
    l117.fvalue(pv, l89);
    l117.fvalue(pv, l88);
    l117.fvalue(pv, l87);
    l117.fvalue(pv, l86);
    l117.fvalue(pv, l85);
    l117.fvalue(pv, l84);
    l117.fvalue(pv, l83);
    l117.fvalue(pv, l82);
    l117.fvalue(pv, l81);
    l117.fvalue(pv, l80);
    l117.fvalue(pv, l79);
    l117.fvalue(pv, l78);
    l117.fvalue(pv, l77);
    l117.fvalue(pv, l76);
    l117.fvalue(pv, l75);
    l117.fvalue(pv, l74);
    l117.fvalue(pv, l73);
    l117.fvalue(pv, l72);
    l117.fvalue(pv, l71);
    l117.fvalue(pv, l70);
    l117.fvalue(pv, l69);
    l117.fvalue(pv, l68);
    l117.fvalue(pv, l67);
    l117.fvalue(pv, l66);
    l117.fvalue(pv, l65);
    l117.fvalue(pv, l64);
    l117.fvalue(pv, l63);
    l117.fvalue(pv, l62);
    l117.fvalue(pv, l61);
    l117.fvalue(pv, l60);
    l117.fvalue(pv, l59);
    l117.fvalue(pv, l58);
    l117.fvalue(pv, l57);
    l117.fvalue(pv, l56);
    l117.fvalue(pv, l55);
    l117.fvalue(pv, l54);
    l117.fvalue(pv, l53);
    l117.fvalue(pv, l52);
    l117.fvalue(pv, l51);
    l117.fvalue(pv, l50);
    l117.fvalue(pv, l49);
    l117.fvalue(pv, l48);
    l117.fvalue(pv, l47);
    l117.fvalue(pv, l46);
    l117.fvalue(pv, l45);
    l117.fvalue(pv, l44);
    l117.fvalue(pv, l43);
    l117.fvalue(pv, l42);
    l117.fvalue(pv, l41);
    l117.fvalue(pv, l40);
    l117.fvalue(pv, l39);
    l117.fvalue(pv, l38);
    l117.fvalue(pv, l37);
    l117.fvalue(pv, l36);
    l117.fvalue(pv, l35);
    l117.fvalue(pv, l34);
    l117.fvalue(pv, l33);
    l117.fvalue(pv, l32);
    l117.fvalue(pv, l31);
    l117.fvalue(pv, l30);
    l117.fvalue(pv, l29);
    l117.fvalue(pv, l28);
    l117.fvalue(pv, l27);
    l117.fvalue(pv, l26);
    l117.fvalue(pv, l25);
    l117.fvalue(pv, l24);
    l117.fvalue(pv, l23);
    l117.fvalue(pv, l22);
    l117.fvalue(pv, l21);
    l117.fvalue(pv, l20);
    l117.fvalue(pv, l19);
    l117.fvalue(pv, l18);
    l117.fvalue(pv, l17);
    l117.fvalue(pv, l16);
    l117.fvalue(pv, l15);
    l117.fvalue(pv, l14);
    l117.fvalue(pv, l13);
    l117.fvalue(pv, l12);
    l117.fvalue(pv, l11);
    l117.fvalue(pv, l10);
    l117.fvalue(pv, l9);
    l117.fvalue(pv, l8);
    l117.fvalue(pv, l7);
    l117.fvalue(pv, l6);
    l117.fvalue(pv, l5);
    l117.fvalue(pv, l4);
    l117.fvalue(pv, l3);
    l117.fvalue(pv, l2);
    l117.fvalue(pv, l1);
    ((l219).value = l306);
    ((l179).value = l339);
    ((l180).value = 804);
    ((l14).value = 206);
    return ((l236).value = 279);
})();
((l220).value = 339);
