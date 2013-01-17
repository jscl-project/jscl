var l1 = {name: "DEFMACRO"};
l1;
var l2 = {name: "DECLAIM"};
l2;
var l3 = {name: "NIL"};
(l3).value = l3;
var l4 = {name: "T"};
(l4).value = l4;
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
var l11 = {name: "*PACKAGE*"};
(function(){
    (((l11.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l11).value = {};
    })());
    return l11;
})();
var l12 = {name: "NULL"};
(function(){
    (l12).function = (function(v2){
        ((v2)["fname"] = "NULL");
        return v2;
    })((function (v1){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
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
    return l12;
})();
var l13 = {name: "RETURN"};
l13;
var l14 = {name: "WHILE"};
l14;
var l15 = {name: "INTERNP"};
(function(){
    (l15).function = (function(v4){
        ((v4)["fname"] = "INTERNP");
        return v4;
    })((function (v3){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((v3) in ((function(){
                        var symbol = l11;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()))?l4.value: l3.value);
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
var l16 = {name: "INTERN"};
(function(){
    (l16).function = (function(v6){
        ((v6)["fname"] = "INTERN");
        return v6;
    })((function (v5){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l15.function(v5) !== l3.value ? (function(){
                        var tmp = ((function(){
                            var symbol = l11;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())[v5];
                        return tmp == undefined? l3.value: tmp ;
                    })() : (((function(){
                        var symbol = l11;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())[v5] = (function(){
                        var name = v5;
                        if (typeof name != 'string')
                            throw 'The value ' + name + ' is not a type string.';
                        return ({name: name});
                    })()));
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
    return l16;
})();
var l17 = {name: "FIND-SYMBOL"};
(function(){
    (l17).function = (function(v8){
        ((v8)["fname"] = "FIND-SYMBOL");
        return v8;
    })((function (v7){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = ((function(){
                            var symbol = l11;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())[v7];
                        return tmp == undefined? l3.value: tmp ;
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
    return l17;
})();
var l18 = {name: "*GENSYM-COUNTER*"};
(function(){
    (((l18.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l18).value = 0;
    })());
    return l18;
})();
var l19 = {name: "GENSYM"};
var l20 = {name: "INTEGER-TO-STRING"};
(function(){
    (l19).function = (function(v10){
        ((v10)["fname"] = "GENSYM");
        return v10;
    })((function (v9){
        if (arguments.length > 1) throw 'too many arguments';
        switch(arguments.length){
        case 0:
        v9="G";
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    (l18).value = (function(){
                        var x = (function(){
                            var symbol = l18;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })();
                        var y = 1;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x+y;
                    })();
                    return (function(){
                        var name = (function(){
                            var string1 = v9;
                            var string2 = (function(){
                                var symbol = l20;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l18;
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
                if (cf.type == 'block' && cf.id == 5)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l19;
})();
var l21 = {name: "BOUNDP"};
(function(){
    (l21).function = (function(v12){
        ((v12)["fname"] = "BOUNDP");
        return v12;
    })((function (v11){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((v11.value !== undefined)?l4.value: l3.value);
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
    return l21;
})();
var l22 = {name: "="};
(function(){
    (l22).function = (function(v15){
        ((v15)["fname"] = "=");
        return v15;
    })((function (v13,v14){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var x = v13;
                        var y = v14;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x==y;
                    })()?l4.value: l3.value);
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
    return l22;
})();
var l23 = {name: "+"};
(function(){
    (l23).function = (function(v18){
        ((v18)["fname"] = "+");
        return v18;
    })((function (v16,v17){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = v16;
                        var y = v17;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x+y;
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
    return l23;
})();
var l24 = {name: "-"};
(function(){
    (l24).function = (function(v21){
        ((v21)["fname"] = "-");
        return v21;
    })((function (v19,v20){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = v19;
                        var y = v20;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x-y;
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
    return l24;
})();
var l25 = {name: "*"};
(function(){
    (l25).function = (function(v24){
        ((v24)["fname"] = "*");
        return v24;
    })((function (v22,v23){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = v22;
                        var y = v23;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x*y;
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
    return l25;
})();
var l26 = {name: "/"};
(function(){
    (l26).function = (function(v27){
        ((v27)["fname"] = "/");
        return v27;
    })((function (v25,v26){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = v25;
                        var y = v26;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x/y;
                    })();
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
    return l26;
})();
var l27 = {name: "1+"};
(function(){
    (l27).function = (function(v29){
        ((v29)["fname"] = "1+");
        return v29;
    })((function (v28){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = v28;
                        var y = 1;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x+y;
                    })();
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
    return l27;
})();
var l28 = {name: "1-"};
(function(){
    (l28).function = (function(v31){
        ((v31)["fname"] = "1-");
        return v31;
    })((function (v30){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = v30;
                        var y = 1;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x-y;
                    })();
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
    return l28;
})();
var l29 = {name: "ZEROP"};
(function(){
    (l29).function = (function(v33){
        ((v33)["fname"] = "ZEROP");
        return v33;
    })((function (v32){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var x = v32;
                        var y = 0;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x==y;
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
    return l29;
})();
var l30 = {name: "TRUNCATE"};
(function(){
    (l30).function = (function(v36){
        ((v36)["fname"] = "TRUNCATE");
        return v36;
    })((function (v34,v35){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = (function(){
                            var x = v34;
                            var y = v35;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x/y;
                        })();
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        return Math.floor(x);
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
    
    }));
    return l30;
})();
var l31 = {name: "EQL"};
(function(){
    (l31).function = (function(v39){
        ((v39)["fname"] = "EQL");
        return v39;
    })((function (v37,v38){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((v37 === v38)?l4.value: l3.value);
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
    return l31;
})();
var l32 = {name: "NOT"};
(function(){
    (l32).function = (function(v41){
        ((v41)["fname"] = "NOT");
        return v41;
    })((function (v40){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (v40 !== l3.value ? l3.value : l4.value);
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
    return l32;
})();
var l33 = {name: "CONS"};
(function(){
    (l33).function = (function(v44){
        ((v44)["fname"] = "CONS");
        return v44;
    })((function (v42,v43){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ({car: v42, cdr: v43});
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
    return l33;
})();
var l34 = {name: "CONSP"};
(function(){
    (l34).function = (function(v46){
        ((v46)["fname"] = "CONSP");
        return v46;
    })((function (v45){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var tmp = v45;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value);
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
    return l34;
})();
var l35 = {name: "CAR"};
(function(){
    (l35).function = (function(v48){
        ((v48)["fname"] = "CAR");
        return v48;
    })((function(){
        var func = (function (v47){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var tmp = v47;
                            return tmp === l3.value? l3.value: tmp.car;
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
        
        });
        func.docstring = 'Return the CAR part of a cons, or NIL if X is null.';
        return func;
    })());
    return l35;
})();
var l36 = {name: "CDR"};
(function(){
    (l36).function = (function(v50){
        ((v50)["fname"] = "CDR");
        return v50;
    })((function (v49){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = v49;
                        return tmp === l3.value? l3.value: tmp.cdr;
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
    return l36;
})();
var l37 = {name: "CAAR"};
(function(){
    (l37).function = (function(v52){
        ((v52)["fname"] = "CAAR");
        return v52;
    })((function (v51){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = (function(){
                            var tmp = v51;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        return tmp === l3.value? l3.value: tmp.car;
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
    return l37;
})();
var l38 = {name: "CADR"};
(function(){
    (l38).function = (function(v54){
        ((v54)["fname"] = "CADR");
        return v54;
    })((function (v53){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = (function(){
                            var tmp = v53;
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
    return l38;
})();
var l39 = {name: "CDAR"};
(function(){
    (l39).function = (function(v56){
        ((v56)["fname"] = "CDAR");
        return v56;
    })((function (v55){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = (function(){
                            var tmp = v55;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        return tmp === l3.value? l3.value: tmp.cdr;
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
    return l39;
})();
var l40 = {name: "CDDR"};
(function(){
    (l40).function = (function(v58){
        ((v58)["fname"] = "CDDR");
        return v58;
    })((function (v57){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = (function(){
                            var tmp = v57;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })();
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
    return l40;
})();
var l41 = {name: "CADDR"};
(function(){
    (l41).function = (function(v60){
        ((v60)["fname"] = "CADDR");
        return v60;
    })((function (v59){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = (function(){
                            var tmp = (function(){
                                var tmp = v59;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })();
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        return tmp === l3.value? l3.value: tmp.car;
                    })();
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
    return l41;
})();
var l42 = {name: "CDDDR"};
(function(){
    (l42).function = (function(v62){
        ((v62)["fname"] = "CDDDR");
        return v62;
    })((function (v61){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = (function(){
                            var tmp = (function(){
                                var tmp = v61;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })();
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })();
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
    return l42;
})();
var l43 = {name: "CADDDR"};
(function(){
    (l43).function = (function(v64){
        ((v64)["fname"] = "CADDDR");
        return v64;
    })((function (v63){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = (function(){
                            var tmp = (function(){
                                var tmp = (function(){
                                    var tmp = v63;
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
                if (cf.type == 'block' && cf.id == 28)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l43;
})();
var l44 = {name: "FIRST"};
(function(){
    (l44).function = (function(v66){
        ((v66)["fname"] = "FIRST");
        return v66;
    })((function (v65){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = v65;
                        return tmp === l3.value? l3.value: tmp.car;
                    })();
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
    return l44;
})();
var l45 = {name: "SECOND"};
(function(){
    (l45).function = (function(v68){
        ((v68)["fname"] = "SECOND");
        return v68;
    })((function (v67){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l38.function(v67);
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
    return l45;
})();
var l46 = {name: "THIRD"};
(function(){
    (l46).function = (function(v70){
        ((v70)["fname"] = "THIRD");
        return v70;
    })((function (v69){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l41.function(v69);
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
    return l46;
})();
var l47 = {name: "FOURTH"};
(function(){
    (l47).function = (function(v72){
        ((v72)["fname"] = "FOURTH");
        return v72;
    })((function (v71){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l43.function(v71);
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
    return l47;
})();
var l48 = {name: "LIST"};
(function(){
    (l48).function = (function(v74){
        ((v74)["fname"] = "LIST");
        return v74;
    })((function (){
        var v73= l3.value;
        for (var i = arguments.length-1; i>=0; i--)
            v73 = {car: arguments[i], cdr: 
        v73};
        return (function(){
            try {
                return (function(){
                    return v73;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 33)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l48;
})();
var l49 = {name: "ATOM"};
(function(){
    (l49).function = (function(v76){
        ((v76)["fname"] = "ATOM");
        return v76;
    })((function (v75){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l32.function(((function(){
                        var tmp = v75;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value));
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
    return l49;
})();
var l50 = {name: "INCF"};
l50;
var l51 = {name: "DECF"};
l51;
var l52 = {name: "PUSH"};
l52;
var l53 = {name: "DOLIST"};
l53;
var l54 = {name: "DOTIMES"};
l54;
var l55 = {name: "COND"};
l55;
var l56 = {name: "CASE"};
l56;
var l57 = {name: "ECASE"};
l57;
var l58 = {name: "AND"};
l58;
var l59 = {name: "OR"};
l59;
var l60 = {name: "PROG1"};
l60;
var l61 = {name: "PROG2"};
l61;
var l62 = {name: "ENSURE-LIST"};
var l63 = {name: "LISTP"};
(function(){
    (l62).function = (function(v78){
        ((v78)["fname"] = "ENSURE-LIST");
        return v78;
    })((function (v77){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var symbol = l63;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v77) !== l3.value ? v77 : l48.function(v77));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 35)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l62;
})();
var l64 = {name: "!REDUCE"};
(function(){
    (l64).function = (function(v82){
        ((v82)["fname"] = "!REDUCE");
        return v82;
    })((function (v79,v80,v81){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l12.function(v80) !== l3.value ? v81 : l64.function(v79, (function(){
                        var tmp = v80;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })(), (v79)(v81, (function(){
                        var tmp = v80;
                        return tmp === l3.value? l3.value: tmp.car;
                    })())));
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
    return l64;
})();
var l65 = {name: "APPEND-TWO"};
var l66 = {name: "APPEND"};
(function(){
    (l65).function = (function(v85){
        ((v85)["fname"] = "APPEND-TWO");
        return v85;
    })((function (v83,v84){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l12.function(v83) !== l3.value ? v84 : ({car: (function(){
                        var tmp = v83;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), cdr: (function(){
                        var symbol = l66;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = v83;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })(), v84)}));
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
    return l65;
})();
(function(){
    (l66).function = (function(v87){
        ((v87)["fname"] = "APPEND");
        return v87;
    })((function (){
        var v86= l3.value;
        for (var i = arguments.length-1; i>=0; i--)
            v86 = {car: arguments[i], cdr: 
        v86};
        return (function(){
            try {
                return (function(){
                    return l64.function((function(){
                        var symbol = l65;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v86, l3);
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
    return l66;
})();
var l67 = {name: "REVAPPEND"};
(function(){
    (l67).function = (function(v90){
        ((v90)["fname"] = "REVAPPEND");
        return v90;
    })((function (v88,v89){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        try {
                            return (function(){
                                return (function(){
                                    while(v88 !== l3.value){
                                        v89 = ({car: (function(){
                                            var tmp = v88;
                                            return tmp === l3.value? l3.value: tmp.car;
                                        })(), cdr: v89});
                                        v88 = (function(){
                                            var tmp = v88;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })();
                                    }return l3.value;
                                })();
                            })();
                        }
                        catch (cf){
                            if (cf.type == 'block' && cf.id == 40)
                                return cf.value;
                            else
                                throw cf;
                        }
                    })();
                    return v89;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 39)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l67;
})();
var l68 = {name: "REVERSE"};
(function(){
    (l68).function = (function(v92){
        ((v92)["fname"] = "REVERSE");
        return v92;
    })((function (v91){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l67.function(v91, l3);
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
    return l68;
})();
var l69 = {name: "LIST-LENGTH"};
(function(){
    (l69).function = (function(v95){
        ((v95)["fname"] = "LIST-LENGTH");
        return v95;
    })((function (v93){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v94){
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(l32.function(l12.function(v93)) !== l3.value){
                                            v94 = (function(){
                                                var x = v94;
                                                var y = 1;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                if (typeof y != 'number')
                                                    throw 'The value ' + y + ' is not a type number.';
                                                return x+y;
                                            })();
                                            v93 = (function(){
                                                var tmp = v93;
                                                return tmp === l3.value? l3.value: tmp.cdr;
                                            })();
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 43)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v94;
                    })(0);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 42)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l69;
})();
var l70 = {name: "LENGTH"};
(function(){
    (l70).function = (function(v97){
        ((v97)["fname"] = "LENGTH");
        return v97;
    })((function (v96){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof(v96) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        var x = v96;
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return x.length;
                    })() : l69.function(v96));
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
    return l70;
})();
var l71 = {name: "CONCAT-TWO"};
(function(){
    (l71).function = (function(v100){
        ((v100)["fname"] = "CONCAT-TWO");
        return v100;
    })((function (v98,v99){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var string1 = v98;
                        var string2 = v99;
                        if (typeof string1 != 'string')
                            throw 'The value ' + string1 + ' is not a type string.';
                        if (typeof string2 != 'string')
                            throw 'The value ' + string2 + ' is not a type string.';
                        return string1.concat(string2);
                    })();
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
    return l71;
})();
var l72 = {name: "MAPCAR"};
(function(){
    (l72).function = (function(v103){
        ((v103)["fname"] = "MAPCAR");
        return v103;
    })((function (v101,v102){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l12.function(v102) !== l3.value ? l3 : ({car: (v101)((function(){
                        var tmp = v102;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()), cdr: l72.function(v101, (function(){
                        var tmp = v102;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())}));
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
    return l72;
})();
var l73 = {name: "IDENTITY"};
(function(){
    (l73).function = (function(v105){
        ((v105)["fname"] = "IDENTITY");
        return v105;
    })((function (v104){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return v104;
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
    return l73;
})();
var l74 = {name: "COPY-LIST"};
(function(){
    (l74).function = (function(v107){
        ((v107)["fname"] = "COPY-LIST");
        return v107;
    })((function (v106){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l72.function((function(){
                        var symbol = l73;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v106);
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
    return l74;
})();
var l75 = {name: "CODE-CHAR"};
(function(){
    (l75).function = (function(v109){
        ((v109)["fname"] = "CODE-CHAR");
        return v109;
    })((function (v108){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return v108;
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
    return l75;
})();
var l76 = {name: "CHAR-CODE"};
(function(){
    (l76).function = (function(v111){
        ((v111)["fname"] = "CHAR-CODE");
        return v111;
    })((function (v110){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return v110;
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
    return l76;
})();
var l77 = {name: "CHAR="};
(function(){
    (l77).function = (function(v114){
        ((v114)["fname"] = "CHAR=");
        return v114;
    })((function (v112,v113){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var x = v112;
                        var y = v113;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x==y;
                    })()?l4.value: l3.value);
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
    return l77;
})();
var l78 = {name: "INTEGERP"};
(function(){
    (l78).function = (function(v116){
        ((v116)["fname"] = "INTEGERP");
        return v116;
    })((function (v115){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof (v115) == "number")?l4.value: l3.value) !== l3.value ? ((function(){
                        var x = (function(){
                            var x = v115;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            return Math.floor(x);
                        })();
                        var y = v115;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x==y;
                    })()?l4.value: l3.value) : l3.value);
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
    return l78;
})();
var l79 = {name: "PLUSP"};
(function(){
    (l79).function = (function(v118){
        ((v118)["fname"] = "PLUSP");
        return v118;
    })((function (v117){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var x = 0;
                        var y = v117;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x<y;
                    })()?l4.value: l3.value);
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
    return l79;
})();
var l80 = {name: "MINUSP"};
(function(){
    (l80).function = (function(v120){
        ((v120)["fname"] = "MINUSP");
        return v120;
    })((function (v119){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var x = v119;
                        var y = 0;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x<y;
                    })()?l4.value: l3.value);
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
    return l80;
})();
(function(){
    (l63).function = (function(v123){
        ((v123)["fname"] = "LISTP");
        return v123;
    })((function (v121){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v122){
                        return (v122 !== l3.value ? v122 : l12.function(v121));
                    })(((function(){
                        var tmp = v121;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value));
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
    return l63;
})();
var l81 = {name: "NTHCDR"};
(function(){
    (l81).function = (function(v126){
        ((v126)["fname"] = "NTHCDR");
        return v126;
    })((function (v124,v125){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        try {
                            return (function(){
                                return (function(){
                                    while((l79.function(v124) !== l3.value ? v125 : l3.value) !== l3.value){
                                        v124 = l28.function(v124);
                                        v125 = (function(){
                                            var tmp = v125;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })();
                                    }return l3.value;
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
                    return v125;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 56)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l81;
})();
var l82 = {name: "NTH"};
(function(){
    (l82).function = (function(v129){
        ((v129)["fname"] = "NTH");
        return v129;
    })((function (v127,v128){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = l81.function(v127, v128);
                        return tmp === l3.value? l3.value: tmp.car;
                    })();
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
    return l82;
})();
var l83 = {name: "LAST"};
(function(){
    (l83).function = (function(v131){
        ((v131)["fname"] = "LAST");
        return v131;
    })((function (v130){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        try {
                            return (function(){
                                return (function(){
                                    while(((function(){
                                        var tmp = (function(){
                                            var tmp = v130;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })();
                                        return (typeof tmp == 'object' && 'car' in tmp);
                                    })()?l4.value: l3.value) !== l3.value){
                                        v130 = (function(){
                                            var tmp = v130;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })();
                                    }return l3.value;
                                })();
                            })();
                        }
                        catch (cf){
                            if (cf.type == 'block' && cf.id == 60)
                                return cf.value;
                            else
                                throw cf;
                        }
                    })();
                    return v130;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 59)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l83;
})();
var l84 = {name: "BUTLAST"};
(function(){
    (l84).function = (function(v133){
        ((v133)["fname"] = "BUTLAST");
        return v133;
    })((function (v132){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = (function(){
                            var tmp = v132;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? ({car: (function(){
                        var tmp = v132;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), cdr: l84.function((function(){
                        var tmp = v132;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())}) : l3.value);
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
    return l84;
})();
var l85 = {name: "MEMBER"};
(function(){
    (l85).function = (function(v136){
        ((v136)["fname"] = "MEMBER");
        return v136;
    })((function (v134,v135){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        try {
                            return (function(){
                                return (function(){
                                    while(v135 !== l3.value){
                                        (l31.function(v134, (function(){
                                            var tmp = v135;
                                            return tmp === l3.value? l3.value: tmp.car;
                                        })()) !== l3.value ? (function(){
                                            return (function(){
                                                throw ({type: 'block', id: 63, value: v135, message: 'Return from unknown block NIL.'})
                                            })();
                                        })() : l3.value);
                                        v135 = (function(){
                                            var tmp = v135;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })();
                                    }return l3.value;
                                })();
                            })();
                        }
                        catch (cf){
                            if (cf.type == 'block' && cf.id == 63)
                                return cf.value;
                            else
                                throw cf;
                        }
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
    
    }));
    return l85;
})();
var l86 = {name: "REMOVE"};
(function(){
    (l86).function = (function(v139){
        ((v139)["fname"] = "REMOVE");
        return v139;
    })((function (v137,v138){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l12.function(v138) !== l3.value ? (function(){
                        return l3.value;
                    })() : (l31.function(v137, (function(){
                        var tmp = v138;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) !== l3.value ? (function(){
                        return l86.function(v137, (function(){
                            var tmp = v138;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : (function(){
                        return ({car: (function(){
                            var tmp = v138;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), cdr: l86.function(v137, (function(){
                            var tmp = v138;
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
    return l86;
})();
var l87 = {name: "REMOVE-IF"};
(function(){
    (l87).function = (function(v142){
        ((v142)["fname"] = "REMOVE-IF");
        return v142;
    })((function (v140,v141){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l12.function(v141) !== l3.value ? (function(){
                        return l3.value;
                    })() : ((v140)((function(){
                        var tmp = v141;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) !== l3.value ? (function(){
                        return l87.function(v140, (function(){
                            var tmp = v141;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : (function(){
                        return ({car: (function(){
                            var tmp = v141;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), cdr: l87.function(v140, (function(){
                            var tmp = v141;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })())});
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
    return l87;
})();
var l88 = {name: "REMOVE-IF-NOT"};
(function(){
    (l88).function = (function(v145){
        ((v145)["fname"] = "REMOVE-IF-NOT");
        return v145;
    })((function (v143,v144){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l12.function(v144) !== l3.value ? (function(){
                        return l3.value;
                    })() : ((v143)((function(){
                        var tmp = v144;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) !== l3.value ? (function(){
                        return ({car: (function(){
                            var tmp = v144;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), cdr: l88.function(v143, (function(){
                            var tmp = v144;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })())});
                    })() : (function(){
                        return l88.function(v143, (function(){
                            var tmp = v144;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })()));
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
    return l88;
})();
var l89 = {name: "DIGIT-CHAR-P"};
(function(){
    (l89).function = (function(v147){
        ((v147)["fname"] = "DIGIT-CHAR-P");
        return v147;
    })((function (v146){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((((function(){
                        var x = 48;
                        var y = v146;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x<=y;
                    })()?l4.value: l3.value) !== l3.value ? ((function(){
                        var x = v146;
                        var y = 57;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x<=y;
                    })()?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                        var x = v146;
                        var y = 48;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x-y;
                    })() : l3.value);
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
    return l89;
})();
var l90 = {name: "SUBSEQ"};
(function(){
    (l90).function = (function(v151){
        ((v151)["fname"] = "SUBSEQ");
        return v151;
    })((function (v148,v149,v150){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        switch(arguments.length){
        case 2:
        v150=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (((typeof(v148) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return (v150 !== l3.value ? (function(){
                            var str = v148;
                            var a = v149;
                            var b;
                            b = v150;
                            return str.slice(a,b);
                        })() : (function(){
                            var str = v148;
                            var a = v149;
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
                if (cf.type == 'block' && cf.id == 68)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l90;
})();
var l91 = {name: "PARSE-INTEGER"};
(function(){
    (l91).function = (function(v156){
        ((v156)["fname"] = "PARSE-INTEGER");
        return v156;
    })((function (v152){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v153,v154,v155){
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(((function(){
                                            var x = v154;
                                            var y = v155;
                                            if (typeof x != 'number')
                                                throw 'The value ' + x + ' is not a type number.';
                                            if (typeof y != 'number')
                                                throw 'The value ' + y + ' is not a type number.';
                                            return x<y;
                                        })()?l4.value: l3.value) !== l3.value){
                                            v153 = (function(){
                                                var x = (function(){
                                                    var x = v153;
                                                    var y = 10;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x*y;
                                                })();
                                                var y = l89.function((function(){
                                                    var string = v152;
                                                    var index = v154;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })());
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                if (typeof y != 'number')
                                                    throw 'The value ' + y + ' is not a type number.';
                                                return x+y;
                                            })();
                                            v154 = (function(){
                                                var x = v154;
                                                var y = 1;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                if (typeof y != 'number')
                                                    throw 'The value ' + y + ' is not a type number.';
                                                return x+y;
                                            })();
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 70)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v153;
                    })(0,0,l70.function(v152));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 69)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l91;
})();
var l92 = {name: "SOME"};
(function(){
    (l92).function = (function(v163){
        ((v163)["fname"] = "SOME");
        return v163;
    })((function (v157,v158){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof(v158) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v159,v160){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(((function(){
                                                var x = v159;
                                                var y = v160;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                if (typeof y != 'number')
                                                    throw 'The value ' + y + ' is not a type number.';
                                                return x<y;
                                            })()?l4.value: l3.value) !== l3.value){
                                                ((v157)((function(){
                                                    var string = v158;
                                                    var index = v159;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })()) !== l3.value ? (function(){
                                                    return (function(){
                                                        throw ({type: 'block', id: 71, value: l4.value, message: 'Return from unknown block SOME.'})
                                                    })();
                                                })() : l3.value);
                                                v159 = (function(){
                                                    var x = v159;
                                                    var y = 1;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x+y;
                                                })();
                                            }return l3.value;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 72)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return l3.value;
                        })(0,l70.function(v158));
                    })() : (l63.function(v158) !== l3.value ? (function(){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v161,v162){
                                        (function(){
                                            while(v161 !== l3.value){
                                                v162 = (function(){
                                                    var tmp = v161;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    ((v157)(v162) !== l3.value ? (function(){
                                                        return (function(){
                                                            throw ({type: 'block', id: 73, value: l4.value, message: 'Return from unknown block NIL.'})
                                                        })();
                                                    })() : l3.value);
                                                    return l3.value;
                                                })();
                                                v161 = (function(){
                                                    var tmp = v161;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return l3.value;
                                    })(v158,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 73)
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
                if (cf.type == 'block' && cf.id == 71)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l92;
})();
var l93 = {name: "EVERY"};
(function(){
    (l93).function = (function(v170){
        ((v170)["fname"] = "EVERY");
        return v170;
    })((function (v164,v165){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof(v165) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v166,v167){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(((function(){
                                                var x = v166;
                                                var y = v167;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                if (typeof y != 'number')
                                                    throw 'The value ' + y + ' is not a type number.';
                                                return x<y;
                                            })()?l4.value: l3.value) !== l3.value){
                                                ((v164)((function(){
                                                    var string = v165;
                                                    var index = v166;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })()) !== l3.value ? l3.value : (function(){
                                                    return (function(){
                                                        throw ({type: 'block', id: 74, value: l3.value, message: 'Return from unknown block EVERY.'})
                                                    })();
                                                })());
                                                v166 = (function(){
                                                    var x = v166;
                                                    var y = 1;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x+y;
                                                })();
                                            }return l3.value;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 75)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return l4.value;
                        })(0,l70.function(v165));
                    })() : (l63.function(v165) !== l3.value ? (function(){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v168,v169){
                                        (function(){
                                            while(v168 !== l3.value){
                                                v169 = (function(){
                                                    var tmp = v168;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    ((v164)(v169) !== l3.value ? l3.value : (function(){
                                                        return (function(){
                                                            throw ({type: 'block', id: 76, value: l3.value, message: 'Return from unknown block NIL.'})
                                                        })();
                                                    })());
                                                    return l3.value;
                                                })();
                                                v168 = (function(){
                                                    var tmp = v168;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return l4.value;
                                    })(v165,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 76)
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
                if (cf.type == 'block' && cf.id == 74)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l93;
})();
var l94 = {name: "ASSOC"};
(function(){
    (l94).function = (function(v173){
        ((v173)["fname"] = "ASSOC");
        return v173;
    })((function (v171,v172){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        try {
                            return (function(){
                                return (function(){
                                    while(v172 !== l3.value){
                                        (l31.function(v171, l37.function(v172)) !== l3.value ? (function(){
                                            throw ({type: 'block', id: 78, value: l3.value, message: 'Return from unknown block NIL.'})
                                        })() : v172 = (function(){
                                            var tmp = v172;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })());
                                    }return l3.value;
                                })();
                            })();
                        }
                        catch (cf){
                            if (cf.type == 'block' && cf.id == 78)
                                return cf.value;
                            else
                                throw cf;
                        }
                    })();
                    return (function(){
                        var tmp = v172;
                        return tmp === l3.value? l3.value: tmp.car;
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
    
    }));
    return l94;
})();
var l95 = {name: "STRING="};
(function(){
    (l95).function = (function(v176){
        ((v176)["fname"] = "STRING=");
        return v176;
    })((function (v174,v175){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((v174 == v175)?l4.value: l3.value);
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
    return l95;
})();
var l96 = {name: "FDEFINITION"};
(function(){
    (l96).function = (function(v178){
        ((v178)["fname"] = "FDEFINITION");
        return v178;
    })((function (v177){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof v177 == 'function')?l4.value: l3.value) !== l3.value ? (function(){
                        return v177;
                    })() : (((function(){
                        var tmp = v177;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(){
                            var symbol = v177;
                            var func = symbol.function;
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
    return l96;
})();
var l97 = {name: "DISASSEMBLE"};
var l98 = {name: "WRITE-LINE"};
(function(){
    (l97).function = (function(v180){
        ((v180)["fname"] = "DISASSEMBLE");
        return v180;
    })((function (v179){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var symbol = l98;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((l96.function(v179)).toString());
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
    return l97;
})();
var l99 = {name: "DOCUMENTATION"};
var l100 = {name: "FUNCTION"};
var l101 = {name: "VARIABLE"};
(function(){
    (l99).function = (function(v185){
        ((v185)["fname"] = "DOCUMENTATION");
        return v185;
    })((function(){
        var func = (function (v181,v182){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v183){
                            return (l31.function(v183, l100) !== l3.value ? (function(){
                                return (function(v184){
                                    return (function(){
                                        var tmp = (v184)["docstring"];
                                        return tmp == undefined? l3.value: tmp ;
                                    })();
                                })(l96.function(v181));
                            })() : (l31.function(v183, l101) !== l3.value ? (function(){
                                (((function(){
                                    var tmp = v181;
                                    return (typeof tmp == 'object' && 'name' in tmp);
                                })()?l4.value: l3.value) !== l3.value ? l3.value : (function(){
                                    return (function(){
                                        throw "Wrong argument type! it should be a symbol";
                                    })();
                                })());
                                return (function(){
                                    var tmp = (v181)["vardoc"];
                                    return tmp == undefined? l3.value: tmp ;
                                })();
                            })() : (function(){
                                return (function(){
                                    throw "ECASE expression failed.";
                                })();
                            })()));
                        })(v182);
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
    return l99;
})();
var l102 = {name: "*NEWLINE*"};
(function(){
    (((l102.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l102).value = (function(){
            var x = l75.function(10);
            if (typeof x != 'number')
                throw 'The value ' + x + ' is not a type number.';
            return String.fromCharCode(x);
        })();
    })());
    return l102;
})();
var l103 = {name: "CONCAT"};
(function(){
    (l103).function = (function(v187){
        ((v187)["fname"] = "CONCAT");
        return v187;
    })((function (){
        var v186= l3.value;
        for (var i = arguments.length-1; i>=0; i--)
            v186 = {car: arguments[i], cdr: 
        v186};
        return (function(){
            try {
                return (function(){
                    return l64.function((function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v186, "");
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
    return l103;
})();
var l104 = {name: "CONCATF"};
l104;
var l105 = {name: "JOIN"};
(function(){
    (l105).function = (function(v190){
        ((v190)["fname"] = "JOIN");
        return v190;
    })((function (v188,v189){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v189="";
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (l12.function(v188) !== l3.value ? (function(){
                        return "";
                    })() : (l12.function((function(){
                        var tmp = v188;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()) !== l3.value ? (function(){
                        return (function(){
                            var tmp = v188;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })() : (function(){
                        return l103.function((function(){
                            var tmp = v188;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), v189, l105.function((function(){
                            var tmp = v188;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), v189));
                    })()));
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
    return l105;
})();
var l106 = {name: "JOIN-TRAILING"};
(function(){
    (l106).function = (function(v193){
        ((v193)["fname"] = "JOIN-TRAILING");
        return v193;
    })((function (v191,v192){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v192="";
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (l12.function(v191) !== l3.value ? "" : l103.function((function(){
                        var tmp = v191;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), v192, l106.function((function(){
                        var tmp = v191;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })(), v192)));
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
    return l106;
})();
var l107 = {name: "MAPCONCAT"};
(function(){
    (l107).function = (function(v196){
        ((v196)["fname"] = "MAPCONCAT");
        return v196;
    })((function (v194,v195){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l105.function(l72.function(v194, v195));
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
    return l107;
})();
var l108 = {name: "INDENT"};
(function(){
    (l108).function = (function(v203){
        ((v203)["fname"] = "INDENT");
        return v203;
    })((function (){
        var v197= l3.value;
        for (var i = arguments.length-1; i>=0; i--)
            v197 = {car: arguments[i], cdr: 
        v197};
        return (function(){
            try {
                return (function(){
                    return (function(v198){
                        return (function(v199,v200,v201){
                            (l79.function(l70.function(v198)) !== l3.value ? (function(){
                                return v199 = l103.function(v199, (function(){
                                    return "    ";
                                })());
                            })() : l3.value);
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(((function(){
                                                var x = v200;
                                                var y = v201;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                if (typeof y != 'number')
                                                    throw 'The value ' + y + ' is not a type number.';
                                                return x<y;
                                            })()?l4.value: l3.value) !== l3.value){
                                                (function(v202){
                                                    return v199 = l103.function(v199, (function(){
                                                        return v202;
                                                    })());
                                                })(((l77.function((function(){
                                                    var string = v198;
                                                    var index = v200;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })(), 10) !== l3.value ? (((function(){
                                                    var x = v200;
                                                    var y = l28.function(v201);
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x<y;
                                                })()?l4.value: l3.value) !== l3.value ? l32.function(l77.function((function(){
                                                    var string = v198;
                                                    var index = l27.function(v200);
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })(), 10)) : l3.value) : l3.value) !== l3.value ? l103.function((function(){
                                                    var x = 10;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    return String.fromCharCode(x);
                                                })(), "    ") : (function(){
                                                    var x = (function(){
                                                        var string = v198;
                                                        var index = v200;
                                                        if (typeof string != 'string')
                                                            throw 'The value ' + string + ' is not a type string.';
                                                        if (typeof index != 'number')
                                                            throw 'The value ' + index + ' is not a type number.';
                                                        return string.charCodeAt(index);
                                                    })();
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    return String.fromCharCode(x);
                                                })()));
                                                v200 = (function(){
                                                    var x = v200;
                                                    var y = 1;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x+y;
                                                })();
                                            }return l3.value;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 88)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return v199;
                        })("",0,l70.function(v198));
                    })(l105.function(v197));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 87)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l108;
})();
(function(){
    (l20).function = (function(v207){
        ((v207)["fname"] = "INTEGER-TO-STRING");
        return v207;
    })((function (v204){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l29.function(v204) !== l3.value ? (function(){
                        return "0";
                    })() : (l80.function(v204) !== l3.value ? (function(){
                        return l103.function("-", l20.function((function(){
                            var x = 0;
                            var y = v204;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x-y;
                        })()));
                    })() : (function(){
                        return (function(v205){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(l32.function(l29.function(v204)) !== l3.value){
                                                v205 = ({car: (function(){
                                                    var x = v204;
                                                    var y = 10;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x%y;
                                                })(), cdr: v205});
                                                v204 = l30.function(v204, 10);
                                            }return l3.value;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 90)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return l105.function(l72.function((function (v206){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return (function(){
                                    var x = (function(){
                                        var string = "0123456789";
                                        var index = v206;
                                        if (typeof string != 'string')
                                            throw 'The value ' + string + ' is not a type string.';
                                        if (typeof index != 'number')
                                            throw 'The value ' + index + ' is not a type number.';
                                        return string.charCodeAt(index);
                                    })();
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    return String.fromCharCode(x);
                                })();
                            
                            }), v205));
                        })(l3.value);
                    })()));
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
    return l20;
})();
var l109 = {name: "JS!BOOL"};
var l110 = {name: "LS-COMPILE"};
(function(){
    (l109).function = (function(v209){
        ((v209)["fname"] = "JS!BOOL");
        return v209;
    })((function (v208){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l103.function("(", v208, "?", (function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l4.value), ": ", (function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l3.value), ")");
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
    return l109;
})();
var l111 = {name: "JS!SELFCALL"};
l111;
var l112 = {name: "PRIN1-TO-STRING"};
var l113 = {name: "ESCAPE-STRING"};
(function(){
    (l112).function = (function(v213){
        ((v213)["fname"] = "PRIN1-TO-STRING");
        return v213;
    })((function (v210){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v210;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (v210).name;
                    })() : (l78.function(v210) !== l3.value ? (function(){
                        return l20.function(v210);
                    })() : (((typeof(v210) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l103.function("\"", (function(){
                            var symbol = l113;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v210), "\"");
                    })() : (((typeof v210 == 'function')?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v211){
                            return (v211 !== l3.value ? l103.function("#<FUNCTION ", v211, ">") : l103.function("#<FUNCTION>"));
                        })((function(){
                            var tmp = (v210)["fname"];
                            return tmp == undefined? l3.value: tmp ;
                        })());
                    })() : (l63.function(v210) !== l3.value ? (function(){
                        return l103.function("(", l106.function(l72.function((function(){
                            var symbol = l112;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l84.function(v210)), " "), (function(v212){
                            return (l12.function((function(){
                                var tmp = v212;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })()) !== l3.value ? l112.function((function(){
                                var tmp = v212;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()) : l103.function(l112.function((function(){
                                var tmp = v212;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()), " . ", l112.function((function(){
                                var tmp = v212;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })())));
                        })(l83.function(v210)), ")");
                    })() : l3.value)))));
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
    return l112;
})();
(function(){
    (l98).function = (function(v215){
        ((v215)["fname"] = "WRITE-LINE");
        return v215;
    })((function (v214){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var x = v214;
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return lisp.write(x);
                    })();
                    (function(){
                        var x = (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })();
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return lisp.write(x);
                    })();
                    return v214;
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
    return l98;
})();
var l114 = {name: "WARN"};
(function(){
    (l114).function = (function(v217){
        ((v217)["fname"] = "WARN");
        return v217;
    })((function (v216){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var x = "WARNING: ";
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return lisp.write(x);
                    })();
                    return l98.function(v216);
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
    return l114;
})();
var l115 = {name: "PRINT"};
(function(){
    (l115).function = (function(v219){
        ((v219)["fname"] = "PRINT");
        return v219;
    })((function (v218){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l98.function(l112.function(v218));
                    return v218;
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
    return l115;
})();
var l116 = {name: "MAKE-STRING-STREAM"};
(function(){
    (l116).function = (function(v221){
        ((v221)["fname"] = "MAKE-STRING-STREAM");
        return v221;
    })((function (v220){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ({car: v220, cdr: 0});
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 96)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l116;
})();
var l117 = {name: "%PEEK-CHAR"};
(function(){
    (l117).function = (function(v223){
        ((v223)["fname"] = "%PEEK-CHAR");
        return v223;
    })((function (v222){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var x = (function(){
                            var tmp = v222;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        var y = l70.function((function(){
                            var tmp = v222;
                            return tmp === l3.value? l3.value: tmp.car;
                        })());
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x<y;
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        var string = (function(){
                            var tmp = v222;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        var index = (function(){
                            var tmp = v222;
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
                if (cf.type == 'block' && cf.id == 97)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l117;
})();
var l118 = {name: "%READ-CHAR"};
(function(){
    (l118).function = (function(v226){
        ((v226)["fname"] = "%READ-CHAR");
        return v226;
    })((function (v224){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var x = (function(){
                            var tmp = v224;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        var y = l70.function((function(){
                            var tmp = v224;
                            return tmp === l3.value? l3.value: tmp.car;
                        })());
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x<y;
                    })()?l4.value: l3.value) !== l3.value ? (function(v225){
                        (function(){
                            var x = v224;
                            if (typeof x != 'object')
                                throw 'The value ' + x + ' is not a type object.';
                            return (x.cdr = l27.function((function(){
                                var tmp = v224;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })()));
                        })();
                        return v225;
                    })((function(){
                        var string = (function(){
                            var tmp = v224;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        var index = (function(){
                            var tmp = v224;
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
                if (cf.type == 'block' && cf.id == 98)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l118;
})();
var l119 = {name: "WHITESPACEP"};
(function(){
    (l119).function = (function(v230){
        ((v230)["fname"] = "WHITESPACEP");
        return v230;
    })((function (v227){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v228){
                        return (v228 !== l3.value ? v228 : (function(v229){
                            return (v229 !== l3.value ? v229 : l77.function(v227, 9));
                        })(l77.function(v227, 10)));
                    })(l77.function(v227, 32));
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
    return l119;
})();
var l120 = {name: "SKIP-WHITESPACES"};
(function(){
    (l120).function = (function(v233){
        ((v233)["fname"] = "SKIP-WHITESPACES");
        return v233;
    })((function (v231){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v232){
                        v232 = l117.function(v231);
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v232 !== l3.value ? l119.function(v232) : l3.value) !== l3.value){
                                            l118.function(v231);
                                            v232 = l117.function(v231);
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 101)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l3.value);
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
    return l120;
})();
var l121 = {name: "TERMINALP"};
(function(){
    (l121).function = (function(v238){
        ((v238)["fname"] = "TERMINALP");
        return v238;
    })((function (v234){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v235){
                        return (v235 !== l3.value ? v235 : (function(v236){
                            return (v236 !== l3.value ? v236 : (function(v237){
                                return (v237 !== l3.value ? v237 : l77.function(40, v234));
                            })(l77.function(41, v234)));
                        })(l119.function(v234)));
                    })(l12.function(v234));
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
    return l121;
})();
var l122 = {name: "READ-UNTIL"};
(function(){
    (l122).function = (function(v243){
        ((v243)["fname"] = "READ-UNTIL");
        return v243;
    })((function (v239,v240){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v241,v242){
                        v242 = l117.function(v239);
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v242 !== l3.value ? l32.function((v240)(v242)) : l3.value) !== l3.value){
                                            v241 = l103.function(v241, (function(){
                                                var x = v242;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                return String.fromCharCode(x);
                                            })());
                                            l118.function(v239);
                                            v242 = l117.function(v239);
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 104)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v241;
                    })("",l3.value);
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
    return l122;
})();
var l123 = {name: "SKIP-WHITESPACES-AND-COMMENTS"};
(function(){
    (l123).function = (function(v247){
        ((v247)["fname"] = "SKIP-WHITESPACES-AND-COMMENTS");
        return v247;
    })((function (v244){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v245){
                        l120.function(v244);
                        v245 = l117.function(v244);
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v245 !== l3.value ? l77.function(v245, 59) : l3.value) !== l3.value){
                                            l122.function(v244, (function (v246){
                                                if (arguments.length < 1) throw 'too few arguments';
                                                if (arguments.length > 1) throw 'too many arguments';
                                                return l77.function(v246, 10);
                                            
                                            }));
                                            l120.function(v244);
                                            v245 = l117.function(v244);
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 106)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l3.value);
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
    return l123;
})();
var l124 = {name: "%READ-LIST"};
var l125 = {name: "LS-READ"};
(function(){
    (l124).function = (function(v251){
        ((v251)["fname"] = "%READ-LIST");
        return v251;
    })((function (v248){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l123.function(v248);
                    return (function(v249){
                        return (l12.function(v249) !== l3.value ? (function(){
                            return (function(){
                                throw "Unspected EOF";
                            })();
                        })() : (l77.function(v249, 41) !== l3.value ? (function(){
                            l118.function(v248);
                            return l3.value;
                        })() : (l77.function(v249, 46) !== l3.value ? (function(){
                            l118.function(v248);
                            return (function(v250){
                                l123.function(v248);
                                (l77.function(l118.function(v248), 41) !== l3.value ? l3.value : (function(){
                                    return (function(){
                                        throw "')' was expected.";
                                    })();
                                })());
                                return v250;
                            })((function(){
                                var symbol = l125;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v248));
                        })() : (function(){
                            return ({car: (function(){
                                var symbol = l125;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v248), cdr: l124.function(v248)});
                        })())));
                    })(l117.function(v248));
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
    return l124;
})();
var l126 = {name: "READ-STRING"};
(function(){
    (l126).function = (function(v255){
        ((v255)["fname"] = "READ-STRING");
        return v255;
    })((function (v252){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v253,v254){
                        v254 = l118.function(v252);
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(l32.function(l31.function(v254, 34)) !== l3.value){
                                            (l12.function(v254) !== l3.value ? (function(){
                                                return (function(){
                                                    throw "Unexpected EOF";
                                                })();
                                            })() : l3.value);
                                            (l31.function(v254, 92) !== l3.value ? (function(){
                                                return v254 = l118.function(v252);
                                            })() : l3.value);
                                            v253 = l103.function(v253, (function(){
                                                var x = v254;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                return String.fromCharCode(x);
                                            })());
                                            v254 = l118.function(v252);
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 109)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v253;
                    })("",l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 108)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l126;
})();
var l127 = {name: "READ-SHARP"};
(function(){
    (l127).function = (function(v260){
        ((v260)["fname"] = "READ-SHARP");
        return v260;
    })((function (v256){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l118.function(v256);
                    return (function(v257){
                        return (l31.function(v257, 39) !== l3.value ? (function(){
                            return l48.function(l100, (function(){
                                var symbol = l125;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v256));
                        })() : (l31.function(v257, 92) !== l3.value ? (function(){
                            return (function(v258){
                                return (l95.function(v258, "space") !== l3.value ? (function(){
                                    return l76.function(32);
                                })() : (l95.function(v258, "tab") !== l3.value ? (function(){
                                    return l76.function(9);
                                })() : (l95.function(v258, "newline") !== l3.value ? (function(){
                                    return l76.function(10);
                                })() : (function(){
                                    return l76.function((function(){
                                        var string = v258;
                                        var index = 0;
                                        if (typeof string != 'string')
                                            throw 'The value ' + string + ' is not a type string.';
                                        if (typeof index != 'number')
                                            throw 'The value ' + index + ' is not a type number.';
                                        return string.charCodeAt(index);
                                    })());
                                })())));
                            })(l103.function((function(){
                                var x = l118.function(v256);
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                return String.fromCharCode(x);
                            })(), l122.function(v256, (function(){
                                var symbol = l121;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })())));
                        })() : (l31.function(v257, 43) !== l3.value ? (function(){
                            return (function(v259){
                                return (l95.function(v259, "common-lisp") !== l3.value ? (function(){
                                    (function(){
                                        var symbol = l125;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v256);
                                    return (function(){
                                        var symbol = l125;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v256);
                                })() : (l95.function(v259, "ecmalisp") !== l3.value ? (function(){
                                    return (function(){
                                        var symbol = l125;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v256);
                                })() : (function(){
                                    return (function(){
                                        throw "Unknown reader form.";
                                    })();
                                })()));
                            })(l122.function(v256, (function(){
                                var symbol = l121;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()));
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })())));
                    })(l118.function(v256));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 110)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l127;
})();
var l128 = {name: "*EOF*"};
(function(){
    (((l128.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l128).value = (function(){
            var name = "EOF";
            if (typeof name != 'string')
                throw 'The value ' + name + ' is not a type string.';
            return ({name: name});
        })();
    })());
    return l128;
})();
var l129 = {name: "QUOTE"};
var l130 = {name: "BACKQUOTE"};
var l131 = {name: "UNQUOTE-SPLICING"};
var l132 = {name: "UNQUOTE"};
(function(){
    (l125).function = (function(v264){
        ((v264)["fname"] = "LS-READ");
        return v264;
    })((function (v261){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l123.function(v261);
                    return (function(v262){
                        return (l12.function(v262) !== l3.value ? (function(){
                            return (function(){
                                var symbol = l128;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })();
                        })() : (l77.function(v262, 40) !== l3.value ? (function(){
                            l118.function(v261);
                            return l124.function(v261);
                        })() : (l77.function(v262, 39) !== l3.value ? (function(){
                            l118.function(v261);
                            return l48.function(l129, l125.function(v261));
                        })() : (l77.function(v262, 96) !== l3.value ? (function(){
                            l118.function(v261);
                            return l48.function(l130, l125.function(v261));
                        })() : (l77.function(v262, 34) !== l3.value ? (function(){
                            l118.function(v261);
                            return l126.function(v261);
                        })() : (l77.function(v262, 44) !== l3.value ? (function(){
                            l118.function(v261);
                            return (l31.function(l117.function(v261), 64) !== l3.value ? (function(){
                                l118.function(v261);
                                return l48.function(l131, l125.function(v261));
                            })() : l48.function(l132, l125.function(v261)));
                        })() : (l77.function(v262, 35) !== l3.value ? (function(){
                            return l127.function(v261);
                        })() : (function(){
                            return (function(v263){
                                return (l93.function((function(){
                                    var symbol = l89;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })(), v263) !== l3.value ? l91.function(v263) : l16.function((function(){
                                    var x = v263;
                                    if (typeof x != 'string')
                                        throw 'The value ' + x + ' is not a type string.';
                                    return x.toUpperCase();
                                })()));
                            })(l122.function(v261, (function(){
                                var symbol = l121;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()));
                        })())))))));
                    })(l117.function(v261));
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
    return l125;
})();
var l133 = {name: "LS-READ-FROM-STRING"};
(function(){
    (l133).function = (function(v266){
        ((v266)["fname"] = "LS-READ-FROM-STRING");
        return v266;
    })((function (v265){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l125.function(l116.function(v265));
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
    return l133;
})();
var l134 = {name: "*COMPILATION-UNIT-CHECKS*"};
(function(){
    (((l134.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l134).value = l3;
    })());
    return l134;
})();
var l135 = {name: "MAKE-BINDING"};
(function(){
    (l135).function = (function(v271){
        ((v271)["fname"] = "MAKE-BINDING");
        return v271;
    })((function (v267,v268,v269,v270){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 4) throw 'too many arguments';
        switch(arguments.length){
        case 3:
        v270=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return l48.function(v267, v268, v269, v270);
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
var l136 = {name: "BINDING-NAME"};
(function(){
    (l136).function = (function(v273){
        ((v273)["fname"] = "BINDING-NAME");
        return v273;
    })((function (v272){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l44.function(v272);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 114)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l136;
})();
var l137 = {name: "BINDING-TYPE"};
(function(){
    (l137).function = (function(v275){
        ((v275)["fname"] = "BINDING-TYPE");
        return v275;
    })((function (v274){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l45.function(v274);
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
    return l137;
})();
var l138 = {name: "BINDING-VALUE"};
(function(){
    (l138).function = (function(v277){
        ((v277)["fname"] = "BINDING-VALUE");
        return v277;
    })((function (v276){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l46.function(v276);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 116)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l138;
})();
var l139 = {name: "BINDING-DECLARATIONS"};
(function(){
    (l139).function = (function(v279){
        ((v279)["fname"] = "BINDING-DECLARATIONS");
        return v279;
    })((function (v278){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l47.function(v278);
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
    return l139;
})();
var l140 = {name: "SET-BINDING-VALUE"};
(function(){
    (l140).function = (function(v282){
        ((v282)["fname"] = "SET-BINDING-VALUE");
        return v282;
    })((function (v280,v281){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = l40.function(v280);
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = v281);
                    })();
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
    return l140;
})();
var l141 = {name: "SET-BINDING-DECLARATIONS"};
(function(){
    (l141).function = (function(v285){
        ((v285)["fname"] = "SET-BINDING-DECLARATIONS");
        return v285;
    })((function (v283,v284){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = l42.function(v283);
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = v284);
                    })();
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
    return l141;
})();
var l142 = {name: "PUSH-BINDING-DECLARATION"};
(function(){
    (l142).function = (function(v288){
        ((v288)["fname"] = "PUSH-BINDING-DECLARATION");
        return v288;
    })((function (v286,v287){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l141.function(v287, ({car: v286, cdr: l139.function(v287)}));
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
    return l142;
})();
var l143 = {name: "MAKE-LEXENV"};
(function(){
    (l143).function = (function(v289){
        ((v289)["fname"] = "MAKE-LEXENV");
        return v289;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l48.function(l3.value, l3.value, l3.value, l3.value);
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
    return l143;
})();
var l144 = {name: "COPY-LEXENV"};
(function(){
    (l144).function = (function(v291){
        ((v291)["fname"] = "COPY-LEXENV");
        return v291;
    })((function (v290){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l74.function(v290);
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
    return l144;
})();
var l145 = {name: "PUSH-TO-LEXENV"};
var l146 = {name: "BLOCK"};
var l147 = {name: "GOTAG"};
(function(){
    (l145).function = (function(v296){
        ((v296)["fname"] = "PUSH-TO-LEXENV");
        return v296;
    })((function (v292,v293,v294){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v295){
                        return (l31.function(v295, l101) !== l3.value ? (function(){
                            return (function(){
                                var x = v293;
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v292, cdr: (function(){
                                    var tmp = v293;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })()}));
                            })();
                        })() : (l31.function(v295, l100) !== l3.value ? (function(){
                            return (function(){
                                var x = (function(){
                                    var tmp = v293;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })();
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v292, cdr: l38.function(v293)}));
                            })();
                        })() : (l31.function(v295, l146) !== l3.value ? (function(){
                            return (function(){
                                var x = l40.function(v293);
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v292, cdr: l41.function(v293)}));
                            })();
                        })() : (l31.function(v295, l147) !== l3.value ? (function(){
                            return (function(){
                                var x = l42.function(v293);
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v292, cdr: l43.function(v293)}));
                            })();
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })()))));
                    })(v294);
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
    return l145;
})();
var l148 = {name: "EXTEND-LEXENV"};
(function(){
    (l148).function = (function(v303){
        ((v303)["fname"] = "EXTEND-LEXENV");
        return v303;
    })((function (v297,v298,v299){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v300){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v301,v302){
                                        (function(){
                                            while(v301 !== l3.value){
                                                v302 = (function(){
                                                    var tmp = v301;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    l145.function(v302, v300, v299);
                                                    return l3.value;
                                                })();
                                                v301 = (function(){
                                                    var tmp = v301;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return v300;
                                    })(l68.function(v297),l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 125)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l144.function(v298));
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
    return l148;
})();
var l149 = {name: "LOOKUP-IN-LEXENV"};
(function(){
    (l149).function = (function(v308){
        ((v308)["fname"] = "LOOKUP-IN-LEXENV");
        return v308;
    })((function (v304,v305,v306){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l94.function(v304, (function(v307){
                        return (l31.function(v307, l101) !== l3.value ? (function(){
                            return l44.function(v305);
                        })() : (l31.function(v307, l100) !== l3.value ? (function(){
                            return l45.function(v305);
                        })() : (l31.function(v307, l146) !== l3.value ? (function(){
                            return l46.function(v305);
                        })() : (l31.function(v307, l147) !== l3.value ? (function(){
                            return l47.function(v305);
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })()))));
                    })(v306));
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
    return l149;
})();
var l150 = {name: "*ENVIRONMENT*"};
(function(){
    (((l150.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l150).value = l143.function();
    })());
    return l150;
})();
var l151 = {name: "*VARIABLE-COUNTER*"};
(function(){
    (((l151.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l151).value = 0;
    })());
    return l151;
})();
var l152 = {name: "GVARNAME"};
(function(){
    (l152).function = (function(v310){
        ((v310)["fname"] = "GVARNAME");
        return v310;
    })((function (v309){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l103.function("v", l20.function((l151).value = (function(){
                        var x = (function(){
                            var symbol = l151;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })();
                        var y = 1;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x+y;
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 127)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l152;
})();
var l153 = {name: "TRANSLATE-VARIABLE"};
(function(){
    (l153).function = (function(v312){
        ((v312)["fname"] = "TRANSLATE-VARIABLE");
        return v312;
    })((function (v311){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l138.function(l149.function(v311, (function(){
                        var symbol = l150;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l101));
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
    return l153;
})();
var l154 = {name: "EXTEND-LOCAL-ENV"};
var l155 = {name: "LEXICAL-VARIABLE"};
(function(){
    (l154).function = (function(v318){
        ((v318)["fname"] = "EXTEND-LOCAL-ENV");
        return v318;
    })((function (v313){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v314){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v315,v316){
                                        (function(){
                                            while(v315 !== l3.value){
                                                v316 = (function(){
                                                    var tmp = v315;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    (function(v317){
                                                        return l145.function(v317, v314, l101);
                                                    })(l135.function(v316, l155, l152.function(v316)));
                                                    return l3.value;
                                                })();
                                                v315 = (function(){
                                                    var tmp = v315;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return v314;
                                    })(v313,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 130)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l144.function((function(){
                        var symbol = l150;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
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
    return l154;
})();
var l156 = {name: "*TOPLEVEL-COMPILATIONS*"};
(function(){
    (((l156.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l156).value = l3.value;
    })());
    return l156;
})();
var l157 = {name: "TOPLEVEL-COMPILATION"};
(function(){
    (l157).function = (function(v320){
        ((v320)["fname"] = "TOPLEVEL-COMPILATION");
        return v320;
    })((function (v319){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l156).value = ({car: v319, cdr: (function(){
                        var symbol = l156;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()});
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
    return l157;
})();
var l158 = {name: "NULL-OR-EMPTY-P"};
(function(){
    (l158).function = (function(v322){
        ((v322)["fname"] = "NULL-OR-EMPTY-P");
        return v322;
    })((function (v321){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l29.function(l70.function(v321));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 132)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l158;
})();
var l159 = {name: "GET-TOPLEVEL-COMPILATIONS"};
(function(){
    (l159).function = (function(v323){
        ((v323)["fname"] = "GET-TOPLEVEL-COMPILATIONS");
        return v323;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l68.function(l87.function((function(){
                        var symbol = l158;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), (function(){
                        var symbol = l156;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
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
    return l159;
})();
var l160 = {name: "%COMPILE-DEFMACRO"};
var l161 = {name: "MACRO"};
(function(){
    (l160).function = (function(v326){
        ((v326)["fname"] = "%COMPILE-DEFMACRO");
        return v326;
    })((function (v324,v325){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l157.function((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l66.function(l48.function(l129), l48.function(v324))));
                    return l145.function(l135.function(v324, l161, v325), (function(){
                        var symbol = l150;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l100);
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
    return l160;
})();
var l162 = {name: "GLOBAL-BINDING"};
(function(){
    (l162).function = (function(v332){
        ((v332)["fname"] = "GLOBAL-BINDING");
        return v332;
    })((function (v327,v328,v329){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v330){
                        return (v330 !== l3.value ? v330 : (function(v331){
                            l145.function(v331, (function(){
                                var symbol = l150;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), v329);
                            return v331;
                        })(l135.function(v327, v328, l3.value)));
                    })(l149.function(v327, (function(){
                        var symbol = l150;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), v329));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 135)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l162;
})();
var l163 = {name: "CLAIMP"};
(function(){
    (l163).function = (function(v337){
        ((v337)["fname"] = "CLAIMP");
        return v337;
    })((function (v333,v334,v335){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v336){
                        return (v336 !== l3.value ? l85.function(v335, l139.function(v336)) : l3.value);
                    })(l149.function(v333, (function(){
                        var symbol = l150;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), v334));
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
    return l163;
})();
var l164 = {name: "!PROCLAIM"};
var l165 = {name: "NOTINLINE"};
var l166 = {name: "CONSTANT"};
var l167 = {name: "NON-OVERRIDABLE"};
(function(){
    (l164).function = (function(v349){
        ((v349)["fname"] = "!PROCLAIM");
        return v349;
    })((function (v338){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v339){
                        return (l31.function(v339, l165) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v340,v341){
                                            (function(){
                                                while(v340 !== l3.value){
                                                    v341 = (function(){
                                                        var tmp = v340;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v342){
                                                            return l142.function(l165, v342);
                                                        })(l162.function(v341, l100, l100));
                                                        return l3.value;
                                                    })();
                                                    v340 = (function(){
                                                        var tmp = v340;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v338;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 138)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : (l31.function(v339, l166) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v343,v344){
                                            (function(){
                                                while(v343 !== l3.value){
                                                    v344 = (function(){
                                                        var tmp = v343;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v345){
                                                            return l142.function(l166, v345);
                                                        })(l162.function(v344, l101, l101));
                                                        return l3.value;
                                                    })();
                                                    v343 = (function(){
                                                        var tmp = v343;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v338;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 139)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : (l31.function(v339, l167) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v346,v347){
                                            (function(){
                                                while(v346 !== l3.value){
                                                    v347 = (function(){
                                                        var tmp = v346;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v348){
                                                            return l142.function(l167, v348);
                                                        })(l162.function(v347, l100, l100));
                                                        return l3.value;
                                                    })();
                                                    v346 = (function(){
                                                        var tmp = v346;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v338;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 140)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : l3.value)));
                    })((function(){
                        var tmp = v338;
                        return tmp === l3.value? l3.value: tmp.car;
                    })());
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
    return l164;
})();
var l168 = {name: "*COMPILATIONS*"};
(function(){
    (((l168.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l168).value = l3.value;
    })());
    return l168;
})();
var l169 = {name: "DEFINE-COMPILATION"};
l169;
var l170 = {name: "IF"};
(l168).value = ({car: l48.function(l170, (function (v350,v351,v352){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l103.function("(", (function(){
                    var symbol = l110;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v350), " !== ", (function(){
                    var symbol = l110;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), " ? ", (function(){
                    var symbol = l110;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v351), " : ", (function(){
                    var symbol = l110;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v352), ")");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 141)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l168;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l171 = {name: "*LAMBDA-LIST-KEYWORDS*"};
var l172 = {name: "&OPTIONAL"};
var l173 = {name: "&REST"};
var l174 = {car: l172, cdr: {car: l173, cdr: l3}};
(function(){
    (((l171.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l171).value = l174;
    })());
    return l171;
})();
var l175 = {name: "LIST-UNTIL-KEYWORD"};
(function(){
    (l175).function = (function(v355){
        ((v355)["fname"] = "LIST-UNTIL-KEYWORD");
        return v355;
    })((function (v353){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(v354){
                        return (v354 !== l3.value ? v354 : l85.function((function(){
                            var tmp = v353;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), (function(){
                            var symbol = l171;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()));
                    })(l12.function(v353)) !== l3.value ? l3.value : ({car: (function(){
                        var tmp = v353;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), cdr: l175.function((function(){
                        var tmp = v353;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())}));
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
    return l175;
})();
var l176 = {name: "LAMBDA-LIST-REQUIRED-ARGUMENTS"};
(function(){
    (l176).function = (function(v357){
        ((v357)["fname"] = "LAMBDA-LIST-REQUIRED-ARGUMENTS");
        return v357;
    })((function (v356){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l175.function(v356);
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
    return l176;
})();
var l177 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"};
(function(){
    (l177).function = (function(v359){
        ((v359)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
        return v359;
    })((function (v358){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l72.function((function(){
                        var symbol = l62;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l175.function((function(){
                        var tmp = l85.function(l172, v358);
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()));
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
    return l177;
})();
var l178 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS"};
(function(){
    (l178).function = (function(v361){
        ((v361)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS");
        return v361;
    })((function (v360){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l72.function((function(){
                        var symbol = l35;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l177.function(v360));
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
    return l178;
})();
var l179 = {name: "LAMBDA-LIST-REST-ARGUMENT"};
(function(){
    (l179).function = (function(v364){
        ((v364)["fname"] = "LAMBDA-LIST-REST-ARGUMENT");
        return v364;
    })((function (v362){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v363){
                        ((function(){
                            var tmp = v363;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })() !== l3.value ? (function(){
                            return (function(){
                                throw "Bad lambda-list";
                            })();
                        })() : l3.value);
                        return (function(){
                            var tmp = v363;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })(l175.function((function(){
                        var tmp = l85.function(l173, v362);
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()));
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
    return l179;
})();
var l180 = {name: "LAMBDA-DOCSTRING-WRAPPER"};
(function(){
    (l180).function = (function(v367){
        ((v367)["fname"] = "LAMBDA-DOCSTRING-WRAPPER");
        return v367;
    })((function (v366){
        if (arguments.length < 1) throw 'too few arguments';
        var v365= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v365 = {car: arguments[i], cdr: 
        v365};
        return (function(){
            try {
                return (function(){
                    return (v366 !== l3.value ? l103.function("(function(){", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l108.function("var func = ", l105.function(v365), ";", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "func.docstring = '", v366, "';", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "return func;", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : l105.function(v365));
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
    return l180;
})();
var l181 = {name: "LAMBDA"};
var l182 = {name: "LS-COMPILE-BLOCK"};
(l168).value = ({car: l48.function(l181, (function (v369){
    if (arguments.length < 1) throw 'too few arguments';
    var v368= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v368 = {car: arguments[i], cdr: 
    v368};
    return (function(){
        try {
            return (function(){
                return (function(v370,v371,v372,v373){
                    ((((typeof((function(){
                        var tmp = v368;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) == "string")?l4.value: l3.value) !== l3.value ? l32.function(l12.function((function(){
                        var tmp = v368;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())) : l3.value) !== l3.value ? (function(){
                        v373 = (function(){
                            var tmp = v368;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        return v368 = (function(){
                            var tmp = v368;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                    })() : l3.value);
                    return (function(v374,v375,v376){
                        try {
                            var tmp;
                            tmp = l150.value;
                            l150.value = v376;
                            v376 = tmp;
                            return l180.function(v373, "(function (", l105.function(l72.function((function(){
                                var symbol = l153;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })(), l66.function(v370, v371)), ","), "){", (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l108.function((v370 !== l3.value ? l103.function("if (arguments.length < ", l20.function(v374), ") throw 'too few arguments';", (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (l32.function(v372) !== l3.value ? l103.function("if (arguments.length > ", l20.function((function(){
                                var x = v374;
                                var y = v375;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })()), ") throw 'too many arguments';", (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (v371 !== l3.value ? l103.function("switch(arguments.length){", (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(v377,v378,v379){
                                return (function(){
                                    (function(){
                                        try {
                                            return (function(){
                                                return (function(){
                                                    while(((function(){
                                                        var x = v379;
                                                        var y = v375;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        if (typeof y != 'number')
                                                            throw 'The value ' + y + ' is not a type number.';
                                                        return x<y;
                                                    })()?l4.value: l3.value) !== l3.value){
                                                        (function(v380){
                                                            v378 = ({car: l103.function("case ", l20.function((function(){
                                                                var x = v379;
                                                                var y = v374;
                                                                if (typeof x != 'number')
                                                                    throw 'The value ' + x + ' is not a type number.';
                                                                if (typeof y != 'number')
                                                                    throw 'The value ' + y + ' is not a type number.';
                                                                return x+y;
                                                            })()), ":", (function(){
                                                                var symbol = l102;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })(), l153.function((function(){
                                                                var tmp = v380;
                                                                return tmp === l3.value? l3.value: tmp.car;
                                                            })()), "=", (function(){
                                                                var symbol = l110;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()(l38.function(v380)), ";", (function(){
                                                                var symbol = l102;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })()), cdr: v378});
                                                            return v379 = (function(){
                                                                var x = v379;
                                                                var y = 1;
                                                                if (typeof x != 'number')
                                                                    throw 'The value ' + x + ' is not a type number.';
                                                                if (typeof y != 'number')
                                                                    throw 'The value ' + y + ' is not a type number.';
                                                                return x+y;
                                                            })();
                                                        })(l82.function(v379, v377));
                                                    }return l3.value;
                                                })();
                                            })();
                                        }
                                        catch (cf){
                                            if (cf.type == 'block' && cf.id == 149)
                                                return cf.value;
                                            else
                                                throw cf;
                                        }
                                    })();
                                    v378 = ({car: l103.function("default: break;", (function(){
                                        var symbol = l102;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()), cdr: v378});
                                    return l105.function(l68.function(v378));
                                })();
                            })(l177.function(v369),l3.value,0), "}", (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (v372 !== l3.value ? (function(v381){
                                return l103.function("var ", v381, "= ", (function(){
                                    var symbol = l110;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l3.value), ";", (function(){
                                    var symbol = l102;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "for (var i = arguments.length-1; i>=", l20.function((function(){
                                    var x = v374;
                                    var y = v375;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    if (typeof y != 'number')
                                        throw 'The value ' + y + ' is not a type number.';
                                    return x+y;
                                })()), "; i--)", (function(){
                                    var symbol = l102;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), l108.function(v381, " = ", "{car: arguments[i], cdr: "), v381, "};", (function(){
                                    var symbol = l102;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })(l153.function(v372)) : ""), (function(){
                                var symbol = l182;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v368, l4.value)), (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "})");
                        }
                        finally {
                            l150.value = v376;
                        }
                    })(l70.function(v370),l70.function(v371),l154.function(l66.function(l62.function(v372), v370, v371)));
                })(l176.function(v369),l178.function(v369),l179.function(v369),l3.value);
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 148)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l168;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l183 = {name: "SETQ"};
var l184 = {name: "SET"};
(l168).value = ({car: l48.function(l183, (function (v382,v383){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v384){
                    return (((l137.function(v384) === l155)?l4.value: l3.value) !== l3.value ? l103.function(l138.function(v384), " = ", (function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v383)) : (function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l66.function(l48.function(l184), l48.function(l66.function(l48.function(l129), l48.function(v382))), l48.function(v383))));
                })(l149.function(v382, (function(){
                    var symbol = l150;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l101));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 150)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l168;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l185 = {name: "JS-VREF"};
(l168).value = ({car: l48.function(l185, (function (v385){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return v385;
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 151)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l168;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l186 = {name: "JS-VSET"};
(l168).value = ({car: l48.function(l186, (function (v386,v387){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l103.function("(", v386, " = ", (function(){
                    var symbol = l110;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v387), ")");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 152)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l168;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
(function(){
    (l113).function = (function(v394){
        ((v394)["fname"] = "ESCAPE-STRING");
        return v394;
    })((function (v388){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v389,v390,v391){
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(((function(){
                                            var x = v390;
                                            var y = v391;
                                            if (typeof x != 'number')
                                                throw 'The value ' + x + ' is not a type number.';
                                            if (typeof y != 'number')
                                                throw 'The value ' + y + ' is not a type number.';
                                            return x<y;
                                        })()?l4.value: l3.value) !== l3.value){
                                            (function(v392){
                                                ((function(v393){
                                                    return (v393 !== l3.value ? v393 : l77.function(v392, 92));
                                                })(l77.function(v392, 34)) !== l3.value ? (function(){
                                                    return v389 = l103.function(v389, "\\");
                                                })() : l3.value);
                                                (l77.function(v392, 10) !== l3.value ? (function(){
                                                    v389 = l103.function(v389, "\\");
                                                    return v392 = 110;
                                                })() : l3.value);
                                                return v389 = l103.function(v389, (function(){
                                                    var x = v392;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    return String.fromCharCode(x);
                                                })());
                                            })((function(){
                                                var string = v388;
                                                var index = v390;
                                                if (typeof string != 'string')
                                                    throw 'The value ' + string + ' is not a type string.';
                                                if (typeof index != 'number')
                                                    throw 'The value ' + index + ' is not a type number.';
                                                return string.charCodeAt(index);
                                            })());
                                            v390 = (function(){
                                                var x = v390;
                                                var y = 1;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                if (typeof y != 'number')
                                                    throw 'The value ' + y + ' is not a type number.';
                                                return x+y;
                                            })();
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 154)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v389;
                    })("",0,l70.function(v388));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 153)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l113;
})();
var l187 = {name: "*LITERAL-SYMBOLS*"};
(function(){
    (((l187.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l187).value = l3.value;
    })());
    return l187;
})();
var l188 = {name: "*LITERAL-COUNTER*"};
(function(){
    (((l188.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l188).value = 0;
    })());
    return l188;
})();
var l189 = {name: "GENLIT"};
(function(){
    (l189).function = (function(v395){
        ((v395)["fname"] = "GENLIT");
        return v395;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l103.function("l", l20.function((l188).value = (function(){
                        var x = (function(){
                            var symbol = l188;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })();
                        var y = 1;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x+y;
                    })()));
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
    return l189;
})();
var l190 = {name: "LITERAL"};
(function(){
    (l190).function = (function(v403){
        ((v403)["fname"] = "LITERAL");
        return v403;
    })((function (v396,v397){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v397=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (l78.function(v396) !== l3.value ? (function(){
                        return l20.function(v396);
                    })() : (((typeof(v396) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l103.function("\"", l113.function(v396), "\"");
                    })() : (((function(){
                        var tmp = v396;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v398){
                            return (v398 !== l3.value ? v398 : (function(v399,v400){
                                (l187).value = ({car: ({car: v396, cdr: v399}), cdr: (function(){
                                    var symbol = l187;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()});
                                l157.function(l103.function("var ", v399, " = ", v400));
                                return v399;
                            })(l189.function(),(function(){
                                var symbol = l110;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l66.function(l48.function(l16), l48.function((v396).name)))));
                        })((function(){
                            var tmp = l94.function(v396, (function(){
                                var symbol = l187;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : (((function(){
                        var tmp = v396;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v401){
                            return (v397 !== l3.value ? v401 : (function(v402){
                                l157.function(l103.function("var ", v402, " = ", v401));
                                return v402;
                            })(l189.function()));
                        })(l103.function("{car: ", l190.function((function(){
                            var tmp = v396;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), l4.value), ", ", "cdr: ", l190.function((function(){
                            var tmp = v396;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), l4.value), "}"));
                    })() : l3.value))));
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
    return l190;
})();
(l168).value = ({car: l48.function(l129, (function (v404){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l190.function(v404);
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 157)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l168;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l191 = {name: "%WHILE"};
(l168).value = ({car: l48.function(l191, (function (v406){
    if (arguments.length < 1) throw 'too few arguments';
    var v405= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v405 = {car: arguments[i], cdr: 
    v405};
    return (function(){
        try {
            return (function(){
                return l103.function("(function(){", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l108.function("while(", (function(){
                    var symbol = l110;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v406), " !== ", (function(){
                    var symbol = l110;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), "){", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l108.function((function(){
                    var symbol = l182;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v405)), "}", "return ", (function(){
                    var symbol = l110;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), ";", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 158)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l168;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l192 = {name: "SYMBOL-FUNCTION"};
(l168).value = ({car: l48.function(l100, (function (v407){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return ((l63.function(v407) !== l3.value ? (((function(){
                    var tmp = v407;
                    return tmp === l3.value? l3.value: tmp.car;
                })() === l181)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                    return (function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v407);
                })() : (((function(){
                    var tmp = v407;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(){
                    return (function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l66.function(l48.function(l192), l48.function(l66.function(l48.function(l129), l48.function(v407)))));
                })() : l3.value));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 159)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l168;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l193 = {name: "EVAL-WHEN-COMPILE"};
var l194 = {name: "EVAL"};
var l195 = {name: "PROGN"};
(l168).value = ({car: l48.function(l193, (function (){
    var v408= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v408 = {car: arguments[i], cdr: 
    v408};
    return (function(){
        try {
            return (function(){
                (function(){
                    var symbol = l194;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(({car: l195, cdr: v408}));
                return l3.value;
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 160)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l168;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l196 = {name: "DEFINE-TRANSFORMATION"};
l196;
(l168).value = ({car: l48.function(l195, (function (){
    var v409= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v409 = {car: arguments[i], cdr: 
    v409};
    return (function(){
        try {
            return (function(){
                return l103.function("(function(){", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l108.function((function(){
                    var symbol = l182;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v409, l4.value)), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 161)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l168;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l197 = {name: "DYNAMIC-BINDING-WRAPPER"};
(function(){
    (l197).function = (function(v416){
        ((v416)["fname"] = "DYNAMIC-BINDING-WRAPPER");
        return v416;
    })((function (v410,v411){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l12.function(v410) !== l3.value ? v411 : l103.function("try {", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l108.function("var tmp;", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l105.function(l72.function((function (v412){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v413){
                            return l103.function("tmp = ", v413, ".value;", (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), v413, ".value = ", (function(){
                                var tmp = v412;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), ";", (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(){
                                var tmp = v412;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), " = tmp;", (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })((function(){
                            var symbol = l110;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l66.function(l48.function(l129), l48.function((function(){
                            var tmp = v412;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    
                    }), v410)), v411), "}", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "finally {", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l108.function(l106.function(l72.function((function (v414){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v415){
                            return l103.function(v415, ".value", " = ", (function(){
                                var tmp = v414;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })());
                        })((function(){
                            var symbol = l110;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l66.function(l48.function(l129), l48.function((function(){
                            var tmp = v414;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    
                    }), v410), l103.function(";", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()))), "}", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
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
    return l197;
})();
var l198 = {name: "LET"};
(l168).value = ({car: l48.function(l198, (function (v418){
    if (arguments.length < 1) throw 'too few arguments';
    var v417= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v417 = {car: arguments[i], cdr: 
    v417};
    return (function(){
        try {
            return (function(){
                return (function(v419){
                    return (function(v420,v421){
                        return (function(v422,v424,v423){
                            try {
                                var tmp;
                                tmp = l150.value;
                                l150.value = v424;
                                v424 = tmp;
                                return l103.function("(function(", l105.function(l72.function((function (v425){
                                    if (arguments.length < 1) throw 'too few arguments';
                                    if (arguments.length > 1) throw 'too many arguments';
                                    return (((v425.value !== undefined)?l4.value: l3.value) !== l3.value ? (function(v426){
                                        v423 = ({car: ({car: v425, cdr: v426}), cdr: v423});
                                        return v426;
                                    })(l152.function(v425)) : l153.function(v425));
                                
                                }), v420), ","), "){", (function(){
                                    var symbol = l102;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), (function(v427){
                                    return l108.function(l197.function(v423, v427));
                                })((function(){
                                    var symbol = l182;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v417, l4.value)), "})(", l105.function(v422, ","), ")");
                            }
                            finally {
                                l150.value = v424;
                            }
                        })(l72.function((function(){
                            var symbol = l110;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v421),l154.function(l87.function((function(){
                            var symbol = l21;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v420)),l3.value);
                    })(l72.function((function(){
                        var symbol = l44;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v419),l72.function((function(){
                        var symbol = l45;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v419));
                })(l72.function((function(){
                    var symbol = l62;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v418));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 163)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l168;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l199 = {name: "*BLOCK-COUNTER*"};
(function(){
    (((l199.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l199).value = 0;
    })());
    return l199;
})();
(l168).value = ({car: l48.function(l146, (function (v429){
    if (arguments.length < 1) throw 'too few arguments';
    var v428= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v428 = {car: arguments[i], cdr: 
    v428};
    return (function(){
        try {
            return (function(){
                return (function(v430){
                    return (function(v431){
                        return l103.function("(function(){", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function("try {", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(v432){
                            try {
                                var tmp;
                                tmp = l150.value;
                                l150.value = v432;
                                v432 = tmp;
                                return l108.function("return ", (function(){
                                    var symbol = l110;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l66.function(l48.function(l195), v428)), ";", (function(){
                                    var symbol = l102;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            }
                            finally {
                                l150.value = v432;
                            }
                        })(l148.function(l48.function(v431), (function(){
                            var symbol = l150;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l146)), "}", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "catch (cf){", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    if (cf.type == 'block' && cf.id == ", v430, ")", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        return cf.value;", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    else", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        throw cf;", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "}", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })(l135.function(v429, l146, v430));
                })(l20.function((l199).value = (function(){
                    var x = (function(){
                        var symbol = l199;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })();
                    var y = 1;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x+y;
                })()));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 164)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l168;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l200 = {name: "RETURN-FROM"};
(l168).value = ({car: l48.function(l200, (function (v433,v434){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    switch(arguments.length){
    case 1:
    v434=l3.value;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return (function(v435){
                    return (v435 !== l3.value ? l103.function("(function(){", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l108.function("throw ({", "type: 'block', ", "id: ", l138.function(v435), ", ", "value: ", (function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v434), ", ", "message: 'Return from unknown block ", (v433).name, ".'", "})"), "})()") : (function(){
                        throw l103.function("Unknown block `", (v433).name, "'.");
                    })());
                })(l149.function(v433, (function(){
                    var symbol = l150;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l146));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 165)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l168;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l201 = {name: "CATCH"};
(l168).value = ({car: l48.function(l201, (function (v437){
    if (arguments.length < 1) throw 'too few arguments';
    var v436= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v436 = {car: arguments[i], cdr: 
    v436};
    return (function(){
        try {
            return (function(){
                return l103.function("(function(){", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l108.function("var id = ", (function(){
                    var symbol = l110;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v437), ";", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "try {", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l108.function("return ", (function(){
                    var symbol = l110;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l66.function(l48.function(l195), v436)), ";", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "}", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "catch (cf){", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "    if (cf.type == 'catch' && cf.id == id)", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "        return cf.value;", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "    else", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "        throw cf;", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "}", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 166)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l168;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l202 = {name: "THROW"};
(l168).value = ({car: l48.function(l202, (function (v438,v439){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    switch(arguments.length){
    case 1:
    v439=l3.value;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return l103.function("(function(){", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l108.function("throw ({", "type: 'catch', ", "id: ", (function(){
                    var symbol = l110;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v438), ", ", "value: ", (function(){
                    var symbol = l110;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v439), ", ", "message: 'Throw uncatched.'", "})"), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 167)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l168;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l203 = {name: "*TAGBODY-COUNTER*"};
(function(){
    (((l203.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l203).value = 0;
    })());
    return l203;
})();
var l204 = {name: "*GO-TAG-COUNTER*"};
(function(){
    (((l204.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l204).value = 0;
    })());
    return l204;
})();
var l205 = {name: "GO-TAG-P"};
(function(){
    (l205).function = (function(v442){
        ((v442)["fname"] = "GO-TAG-P");
        return v442;
    })((function (v440){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v441){
                        return (v441 !== l3.value ? v441 : ((function(){
                            var tmp = v440;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?l4.value: l3.value));
                    })(l78.function(v440));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 168)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l205;
})();
var l206 = {name: "DECLARE-TAGBODY-TAGS"};
(function(){
    (l206).function = (function(v448){
        ((v448)["fname"] = "DECLARE-TAGBODY-TAGS");
        return v448;
    })((function (v443,v444){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v447){
                        return l148.function(v447, (function(){
                            var symbol = l150;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l147);
                    })(l72.function((function (v445){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v446){
                            return l135.function(v445, l147, l48.function(v443, v446));
                        })(l20.function((l204).value = (function(){
                            var x = (function(){
                                var symbol = l204;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })();
                            var y = 1;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x+y;
                        })()));
                    
                    }), l88.function((function(){
                        var symbol = l205;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v444)));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 169)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l206;
})();
var l207 = {name: "TAGBODY"};
(l168).value = ({car: l48.function(l207, (function (){
    var v449= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v449 = {car: arguments[i], cdr: 
    v449};
    return (function(){
        try {
            return (function(){
                (l92.function((function(){
                    var symbol = l205;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v449) !== l3.value ? l3.value : (function(){
                    return (function(){
                        throw ({type: 'block', id: 170, value: (function(){
                            var symbol = l110;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l66.function(l48.function(l195), v449, l48.function(l3))), message: 'Return from unknown block TAGBODY.'})
                    })();
                })());
                (l205.function((function(){
                    var tmp = v449;
                    return tmp === l3.value? l3.value: tmp.car;
                })()) !== l3.value ? l3.value : (function(){
                    return v449 = ({car: l19.function("START"), cdr: v449});
                })());
                return (function(v450){
                    return (function(v452,v451){
                        try {
                            var tmp;
                            tmp = l150.value;
                            l150.value = v452;
                            v452 = tmp;
                            (function(v453){
                                return v451 = l45.function(l138.function(v453));
                            })(l149.function(l44.function(v449), (function(){
                                var symbol = l150;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l147));
                            return l103.function("(function(){", (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l108.function("var tagbody_", v450, " = ", v451, ";", (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "tbloop:", (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "while (true) {", (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l108.function("try {", (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l108.function((function(v454){
                                return l103.function("switch(tagbody_", v450, "){", (function(){
                                    var symbol = l102;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "case ", v451, ":", (function(){
                                    var symbol = l102;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), (function(){
                                    try {
                                        return (function(){
                                            return (function(v455,v456){
                                                (function(){
                                                    while(v455 !== l3.value){
                                                        v456 = (function(){
                                                            var tmp = v455;
                                                            return tmp === l3.value? l3.value: tmp.car;
                                                        })();
                                                        (function(){
                                                            v454 = l103.function(v454, (function(){
                                                                return (l32.function(l205.function(v456)) !== l3.value ? l108.function((function(){
                                                                    var symbol = l110;
                                                                    var func = symbol.function;
                                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                    return func;
                                                                })()(v456), ";", (function(){
                                                                    var symbol = l102;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })()) : (function(v457){
                                                                    return l103.function("case ", l45.function(l138.function(v457)), ":", (function(){
                                                                        var symbol = l102;
                                                                        var value = symbol.value;
                                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                        return value;
                                                                    })());
                                                                })(l149.function(v456, (function(){
                                                                    var symbol = l150;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })(), l147)));
                                                            })());
                                                            return l3.value;
                                                        })();
                                                        v455 = (function(){
                                                            var tmp = v455;
                                                            return tmp === l3.value? l3.value: tmp.cdr;
                                                        })();
                                                    }return l3.value;
                                                })();
                                                return v454;
                                            })((function(){
                                                var tmp = v449;
                                                return tmp === l3.value? l3.value: tmp.cdr;
                                            })(),l3.value);
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 171)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })(), "default:", (function(){
                                    var symbol = l102;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "    break tbloop;", (function(){
                                    var symbol = l102;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "}", (function(){
                                    var symbol = l102;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })("")), "}", (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "catch (jump) {", (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "    if (jump.type == 'tagbody' && jump.id == ", v450, ")", (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "        tagbody_", v450, " = jump.label;", (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "    else", (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "        throw(jump);", (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "}", (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), "}", (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "return ", (function(){
                                var symbol = l110;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l3.value), ";", (function(){
                                var symbol = l102;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), "})()");
                        }
                        finally {
                            l150.value = v452;
                        }
                    })(l206.function(v450, v449),l3.value);
                })(l20.function((function(){
                    var symbol = l203;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()));
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
    var symbol = l168;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l208 = {name: "GO"};
(l168).value = ({car: l48.function(l208, (function (v458){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v459,v460){
                    return (v459 !== l3.value ? l103.function("(function(){", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l108.function("throw ({", "type: 'tagbody', ", "id: ", l44.function(l138.function(v459)), ", ", "label: ", l45.function(l138.function(v459)), ", ", "message: 'Attempt to GO to non-existing tag ", v460, "'", "})", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : (function(){
                        throw l103.function("Unknown tag `", v460, "'.");
                    })());
                })(l149.function(v458, (function(){
                    var symbol = l150;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l147),(((function(){
                    var tmp = v458;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(){
                    return (v458).name;
                })() : (l78.function(v458) !== l3.value ? (function(){
                    return l20.function(v458);
                })() : l3.value)));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 172)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l168;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l209 = {name: "UNWIND-PROTECT"};
(l168).value = ({car: l48.function(l209, (function (v462){
    if (arguments.length < 1) throw 'too few arguments';
    var v461= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v461 = {car: arguments[i], cdr: 
    v461};
    return (function(){
        try {
            return (function(){
                return l103.function("(function(){", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l108.function("var ret = ", (function(){
                    var symbol = l110;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), ";", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "try {", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l108.function("ret = ", (function(){
                    var symbol = l110;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v462), ";", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "} finally {", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l108.function((function(){
                    var symbol = l182;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v461)), "}", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "return ret;", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 173)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l168;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l210 = {name: "BACKQUOTE-EXPAND-1"};
(function(){
    (l210).function = (function(v465){
        ((v465)["fname"] = "BACKQUOTE-EXPAND-1");
        return v465;
    })((function (v463){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v463;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return l48.function(l129, v463);
                    })() : (l49.function(v463) !== l3.value ? (function(){
                        return v463;
                    })() : ((((function(){
                        var tmp = v463;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l132)?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(){
                            var tmp = v463;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })() : ((((function(){
                        var tmp = v463;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l130)?l4.value: l3.value) !== l3.value ? (function(){
                        return l210.function(l210.function(l38.function(v463)));
                    })() : (function(){
                        return ({car: l66, cdr: l72.function((function (v464){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return ((l63.function(v464) !== l3.value ? (((function(){
                                var tmp = v464;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l132)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return l48.function(l48, l38.function(v464));
                            })() : ((l63.function(v464) !== l3.value ? (((function(){
                                var tmp = v464;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l131)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return l38.function(v464);
                            })() : (function(){
                                return l48.function(l48, l210.function(v464));
                            })()));
                        
                        }), v463)});
                    })()))));
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
    return l210;
})();
var l211 = {name: "BACKQUOTE-EXPAND"};
(function(){
    (l211).function = (function(v467){
        ((v467)["fname"] = "BACKQUOTE-EXPAND");
        return v467;
    })((function (v466){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((l63.function(v466) !== l3.value ? (((function(){
                        var tmp = v466;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l130)?l4.value: l3.value) : l3.value) !== l3.value ? l210.function(l38.function(v466)) : v466);
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
    return l211;
})();
l130;
(l168).value = ({car: l48.function(l130, (function (v468){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l110;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l210.function(v468));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 176)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l168;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l212 = {name: "*BUILTINS*"};
(function(){
    (((l212.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l212).value = l3.value;
    })());
    return l212;
})();
var l213 = {name: "DEFINE-RAW-BUILTIN"};
l213;
var l214 = {name: "DEFINE-BUILTIN"};
l214;
var l215 = {name: "TYPE-CHECK"};
l215;
var l216 = {name: "NUM-OP-NUM"};
(function(){
    (l216).function = (function(v472){
        ((v472)["fname"] = "NUM-OP-NUM");
        return v472;
    })((function (v469,v470,v471){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l103.function("(function(){", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l108.function(l103.function("var ", "x", " = ", v469, ";", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), l103.function("var ", "y", " = ", v471, ";", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), l103.function("if (typeof ", "x", " != '", "number", "')", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l108.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), l103.function("if (typeof ", "y", " != '", "number", "')", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l108.function("throw 'The value ' + ", "y", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), l103.function("return ", (function(){
                        return l103.function("x", v470, "y");
                    })(), ";", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), "})()");
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 177)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l216;
})();
(function(){
    return (l212).value = ({car: l48.function(l23, (function (v473,v474){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v475,v476){
                        return l216.function(v475, "+", v476);
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v473),(function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v474));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 178)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l212).value = ({car: l48.function(l24, (function (v477,v478){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v479,v480){
                        return l216.function(v479, "-", v480);
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v477),(function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v478));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 179)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l212).value = ({car: l48.function(l25, (function (v481,v482){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v483,v484){
                        return l216.function(v483, "*", v484);
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v481),(function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v482));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l212).value = ({car: l48.function(l26, (function (v485,v486){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v487,v488){
                        return l216.function(v487, "/", v488);
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v485),(function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v486));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 181)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l217 = {name: "MOD"};
(function(){
    return (l212).value = ({car: l48.function(l217, (function (v489,v490){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v491,v492){
                        return l216.function(v491, "%", v492);
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v489),(function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v490));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l218 = {name: "<"};
(function(){
    return (l212).value = ({car: l48.function(l218, (function (v493,v494){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v495,v496){
                        return l109.function(l216.function(v495, "<", v496));
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v493),(function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v494));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l219 = {name: ">"};
(function(){
    return (l212).value = ({car: l48.function(l219, (function (v497,v498){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v499,v500){
                        return l109.function(l216.function(v499, ">", v500));
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v497),(function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v498));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 184)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l212).value = ({car: l48.function(l22, (function (v501,v502){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v503,v504){
                        return l109.function(l216.function(v503, "==", v504));
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v501),(function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v502));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 185)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l220 = {name: "<="};
(function(){
    return (l212).value = ({car: l48.function(l220, (function (v505,v506){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v507,v508){
                        return l109.function(l216.function(v507, "<=", v508));
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v505),(function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v506));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 186)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l221 = {name: ">="};
(function(){
    return (l212).value = ({car: l48.function(l221, (function (v509,v510){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v511,v512){
                        return l109.function(l216.function(v511, ">=", v512));
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v509),(function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v510));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 187)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l222 = {name: "NUMBERP"};
(function(){
    return (l212).value = ({car: l48.function(l222, (function (v513){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v514){
                        return l109.function(l103.function("(typeof (", v514, ") == \"number\")"));
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v513));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l223 = {name: "FLOOR"};
(function(){
    return (l212).value = ({car: l48.function(l223, (function (v515){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v516){
                        return l103.function("(function(){", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function(l103.function("var ", "x", " = ", v516, ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l103.function("if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l103.function("return ", (function(){
                            return "Math.floor(x)";
                        })(), ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v515));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l212).value = ({car: l48.function(l33, (function (v517,v518){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v519,v520){
                        return l103.function("({car: ", v519, ", cdr: ", v520, "})");
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v517),(function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v518));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l212).value = ({car: l48.function(l34, (function (v521){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v522){
                        return l109.function(l103.function("(function(){", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function("var tmp = ", v522, ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return (typeof tmp == 'object' && 'car' in tmp);", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()"));
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v521));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l212).value = ({car: l48.function(l35, (function (v523){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v524){
                        return l103.function("(function(){", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function("var tmp = ", v524, ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l110;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), "? ", (function(){
                            var symbol = l110;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ": tmp.car;", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v523));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l212).value = ({car: l48.function(l36, (function (v525){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v526){
                        return l103.function("(function(){", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function("var tmp = ", v526, ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l110;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), "? ", (function(){
                            var symbol = l110;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ": tmp.cdr;", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v525));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 193)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l224 = {name: "SETCAR"};
(function(){
    return (l212).value = ({car: l48.function(l224, (function (v527,v528){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v529,v530){
                        return l103.function("(function(){", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function(l103.function("var ", "x", " = ", v529, ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l103.function("if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l103.function("return ", (function(){
                            return l103.function("(x.car = ", v530, ")");
                        })(), ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v527),(function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v528));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 194)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l225 = {name: "SETCDR"};
(function(){
    return (l212).value = ({car: l48.function(l225, (function (v531,v532){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v533,v534){
                        return l103.function("(function(){", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function(l103.function("var ", "x", " = ", v533, ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l103.function("if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l103.function("return ", (function(){
                            return l103.function("(x.cdr = ", v534, ")");
                        })(), ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v531),(function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v532));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l226 = {name: "SYMBOLP"};
(function(){
    return (l212).value = ({car: l48.function(l226, (function (v535){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v536){
                        return l109.function(l103.function("(function(){", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function("var tmp = ", v536, ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return (typeof tmp == 'object' && 'name' in tmp);", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()"));
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v535));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 196)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l227 = {name: "MAKE-SYMBOL"};
(function(){
    return (l212).value = ({car: l48.function(l227, (function (v537){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v538){
                        return l103.function("(function(){", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function(l103.function("var ", "name", " = ", v538, ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l103.function("if (typeof ", "name", " != '", "string", "')", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function("throw 'The value ' + ", "name", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l103.function("return ", (function(){
                            return "({name: name})";
                        })(), ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v537));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 197)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l228 = {name: "SYMBOL-NAME"};
(function(){
    return (l212).value = ({car: l48.function(l228, (function (v539){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v540){
                        return l103.function("(", v540, ").name");
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v539));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l212).value = ({car: l48.function(l184, (function (v541,v542){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v543,v544){
                        return l103.function("(", v543, ").value = ", v544);
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v541),(function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v542));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l229 = {name: "FSET"};
(function(){
    return (l212).value = ({car: l48.function(l229, (function (v545,v546){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v547,v548){
                        return l103.function("(", v547, ").function = ", v548);
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v545),(function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v546));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l212).value = ({car: l48.function(l21, (function (v549){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v550){
                        return l109.function(l103.function("(", v550, ".value !== undefined)"));
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v549));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l230 = {name: "SYMBOL-VALUE"};
(function(){
    return (l212).value = ({car: l48.function(l230, (function (v551){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v552){
                        return l103.function("(function(){", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function("var symbol = ", v552, ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var value = symbol.value;", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (value === undefined) throw \"Variable `\" + symbol.name + \"' is unbound.\";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return value;", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v551));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l212).value = ({car: l48.function(l192, (function (v553){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v554){
                        return l103.function("(function(){", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function("var symbol = ", v554, ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var func = symbol.function;", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (func === undefined) throw \"Function `\" + symbol.name + \"' is undefined.\";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return func;", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v553));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 203)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l231 = {name: "SYMBOL-PLIST"};
(function(){
    return (l212).value = ({car: l48.function(l231, (function (v555){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v556){
                        return l103.function("((", v556, ").plist || ", (function(){
                            var symbol = l110;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ")");
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v555));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 204)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l232 = {name: "LAMBDA-CODE"};
(function(){
    return (l212).value = ({car: l48.function(l232, (function (v557){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v558){
                        return l103.function("(", v558, ").toString()");
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v557));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l233 = {name: "EQ"};
(function(){
    return (l212).value = ({car: l48.function(l233, (function (v559,v560){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v561,v562){
                        return l109.function(l103.function("(", v561, " === ", v562, ")"));
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v559),(function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v560));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 206)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l234 = {name: "EQUAL"};
(function(){
    return (l212).value = ({car: l48.function(l234, (function (v563,v564){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v565,v566){
                        return l109.function(l103.function("(", v565, " == ", v566, ")"));
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v563),(function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v564));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l235 = {name: "STRING"};
(function(){
    return (l212).value = ({car: l48.function(l235, (function (v567){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v568){
                        return l103.function("(function(){", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function(l103.function("var ", "x", " = ", v568, ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l103.function("if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l103.function("return ", (function(){
                            return "String.fromCharCode(x)";
                        })(), ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v567));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l236 = {name: "STRINGP"};
(function(){
    return (l212).value = ({car: l48.function(l236, (function (v569){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v570){
                        return l109.function(l103.function("(typeof(", v570, ") == \"string\")"));
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v569));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l237 = {name: "STRING-UPCASE"};
(function(){
    return (l212).value = ({car: l48.function(l237, (function (v571){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v572){
                        return l103.function("(function(){", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function(l103.function("var ", "x", " = ", v572, ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l103.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l103.function("return ", (function(){
                            return "x.toUpperCase()";
                        })(), ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v571));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l238 = {name: "STRING-LENGTH"};
(function(){
    return (l212).value = ({car: l48.function(l238, (function (v573){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v574){
                        return l103.function("(function(){", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function(l103.function("var ", "x", " = ", v574, ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l103.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l103.function("return ", (function(){
                            return "x.length";
                        })(), ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v573));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 211)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l239 = {name: "SLICE"};
(l212).value = ({car: l48.function(l239, (function (v575,v576,v577){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    switch(arguments.length){
    case 2:
    v577=l3.value;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return l103.function("(function(){", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l108.function("var str = ", (function(){
                    var symbol = l110;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v575), ";", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var a = ", (function(){
                    var symbol = l110;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v576), ";", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var b;", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (v577 !== l3.value ? l103.function("b = ", (function(){
                    var symbol = l110;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v577), ";", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()) : ""), "return str.slice(a,b);", (function(){
                    var symbol = l102;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 212)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l212;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l240 = {name: "CHAR"};
(function(){
    return (l212).value = ({car: l48.function(l240, (function (v578,v579){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v580,v581){
                        return l103.function("(function(){", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function(l103.function("var ", "string", " = ", v580, ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l103.function("var ", "index", " = ", v581, ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l103.function("if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l103.function("if (typeof ", "index", " != '", "number", "')", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function("throw 'The value ' + ", "index", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l103.function("return ", (function(){
                            return "string.charCodeAt(index)";
                        })(), ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v578),(function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v579));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l212).value = ({car: l48.function(l71, (function (v582,v583){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v584,v585){
                        return l103.function("(function(){", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function(l103.function("var ", "string1", " = ", v584, ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l103.function("var ", "string2", " = ", v585, ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l103.function("if (typeof ", "string1", " != '", "string", "')", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function("throw 'The value ' + ", "string1", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l103.function("if (typeof ", "string2", " != '", "string", "')", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function("throw 'The value ' + ", "string2", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l103.function("return ", (function(){
                            return "string1.concat(string2)";
                        })(), ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v582),(function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v583));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 214)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l241 = {name: "FUNCALL"};
(l212).value = ({car: l48.function(l241, (function (v587){
    if (arguments.length < 1) throw 'too few arguments';
    var v586= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v586 = {car: arguments[i], cdr: 
    v586};
    return (function(){
        try {
            return (function(){
                return l103.function("(", (function(){
                    var symbol = l110;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v587), ")(", l105.function(l72.function((function(){
                    var symbol = l110;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v586), ", "), ")");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 215)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l212;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l242 = {name: "APPLY"};
(l212).value = ({car: l48.function(l242, (function (v589){
    if (arguments.length < 1) throw 'too few arguments';
    var v588= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v588 = {car: arguments[i], cdr: 
    v588};
    return (function(){
        try {
            return (function(){
                return (l12.function(v588) !== l3.value ? l103.function("(", (function(){
                    var symbol = l110;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v589), ")()") : (function(v590,v591){
                    return l103.function("(function(){", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l108.function("var f = ", (function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v589), ";", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var args = [", l105.function(l72.function((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v590), ", "), "];", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var tail = (", (function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v591), ");", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "while (tail != ", (function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l3.value), "){", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    args.push(tail.car);", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    tail = tail.cdr;", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "}", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "return f.apply(this, args);", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()");
                })(l84.function(v588),(function(){
                    var tmp = l83.function(v588);
                    return tmp === l3.value? l3.value: tmp.car;
                })()));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 216)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l212;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l243 = {name: "JS-EVAL"};
(function(){
    return (l212).value = ({car: l48.function(l243, (function (v592){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v593){
                        return l103.function("(function(){", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function(l103.function("var ", "string", " = ", v593, ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l103.function("if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l103.function("return ", (function(){
                            return "eval.apply(window, [string])";
                        })(), ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v592));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l244 = {name: "ERROR"};
(function(){
    return (l212).value = ({car: l48.function(l244, (function (v594){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v595){
                        return l103.function("(function(){", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function("throw ", v595, ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v594));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l245 = {name: "NEW"};
(function(){
    return (l212).value = ({car: l48.function(l245, (function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        return "{}";
                    })();
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l246 = {name: "OGET"};
(function(){
    return (l212).value = ({car: l48.function(l246, (function (v596,v597){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v598,v599){
                        return l103.function("(function(){", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function("var tmp = ", "(", v598, ")[", v599, "];", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp == undefined? ", (function(){
                            var symbol = l110;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ": tmp ;", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v596),(function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v597));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l247 = {name: "OSET"};
(function(){
    return (l212).value = ({car: l48.function(l247, (function (v600,v601,v602){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v603,v604,v605){
                        return l103.function("((", v603, ")[", v604, "] = ", v605, ")");
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v600),(function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v601),(function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v602));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l248 = {name: "IN"};
(function(){
    return (l212).value = ({car: l48.function(l248, (function (v606,v607){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v608,v609){
                        return l109.function(l103.function("((", v608, ") in (", v609, "))"));
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v606),(function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v607));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 222)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l249 = {name: "FUNCTIONP"};
(function(){
    return (l212).value = ({car: l48.function(l249, (function (v610){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v611){
                        return l109.function(l103.function("(typeof ", v611, " == 'function')"));
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v610));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l250 = {name: "WRITE-STRING"};
(function(){
    return (l212).value = ({car: l48.function(l250, (function (v612){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v613){
                        return l103.function("(function(){", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function(l103.function("var ", "x", " = ", v613, ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l103.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l108.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l103.function("return ", (function(){
                            return "lisp.write(x)";
                        })(), ";", (function(){
                            var symbol = l102;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v612));
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
        var symbol = l212;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    (l161).function = (function(v616){
        ((v616)["fname"] = "MACRO");
        return v616;
    })((function (v614){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v614;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(v615){
                        return (((l137.function(v615) === l161)?l4.value: l3.value) !== l3.value ? v615 : l3.value);
                    })(l149.function(v614, (function(){
                        var symbol = l150;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l100)) : l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 225)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l161;
})();
var l251 = {name: "LS-MACROEXPAND-1"};
(function(){
    (l251).function = (function(v621){
        ((v621)["fname"] = "LS-MACROEXPAND-1");
        return v621;
    })((function (v617){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v618){
                        return (v618 !== l3.value ? (function(v619){
                            (l63.function(v619) !== l3.value ? (function(){
                                return (function(v620){
                                    l140.function(v618, v620);
                                    return v619 = v620;
                                })((function(){
                                    var symbol = l194;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v619));
                            })() : l3.value);
                            return (function(){
                                var f = v619;
                                var args = [];
                                var tail = ((function(){
                                    var tmp = v617;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                                while (tail != l3.value){
                                    args.push(tail.car);
                                    tail = tail.cdr;
                                }
                                return f.apply(this, args);
                            })();
                        })(l138.function(v618)) : v617);
                    })(l161.function((function(){
                        var tmp = v617;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 226)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l251;
})();
var l252 = {name: "COMPILE-FUNCALL"};
(function(){
    (l252).function = (function(v624){
        ((v624)["fname"] = "COMPILE-FUNCALL");
        return v624;
    })((function (v622,v623){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((((function(){
                        var tmp = v622;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? l163.function(v622, l100, l167) : l3.value) !== l3.value ? l103.function((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l66.function(l48.function(l129), l48.function(v622))), ".function(", l105.function(l72.function((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v623), ", "), ")") : l103.function((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l66.function(l48.function(l100), l48.function(v622))), "(", l105.function(l72.function((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v623), ", "), ")"));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 227)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l252;
})();
(function(){
    (l182).function = (function(v627){
        ((v627)["fname"] = "LS-COMPILE-BLOCK");
        return v627;
    })((function (v625,v626){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v626=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (v626 !== l3.value ? l103.function(l182.function(l84.function(v625)), "return ", (function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = l83.function(v625);
                        return tmp === l3.value? l3.value: tmp.car;
                    })()), ";") : l106.function(l87.function((function(){
                        var symbol = l158;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l72.function((function(){
                        var symbol = l110;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v625)), l103.function(";", (function(){
                        var symbol = l102;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 228)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l182;
})();
(function(){
    (l110).function = (function(v634){
        ((v634)["fname"] = "LS-COMPILE");
        return v634;
    })((function (v628){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v628;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v629){
                            return (((l137.function(v629) === l155)?l4.value: l3.value) !== l3.value ? (function(){
                                return l138.function(v629);
                            })() : (l163.function(v628, l101, l166) !== l3.value ? (function(){
                                return l103.function(l110.function(l66.function(l48.function(l129), l48.function(v628))), ".value");
                            })() : (function(){
                                return l110.function(l66.function(l48.function(l230), l48.function(l66.function(l48.function(l129), l48.function(v628)))));
                            })()));
                        })(l149.function(v628, (function(){
                            var symbol = l150;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l101));
                    })() : (l78.function(v628) !== l3.value ? (function(){
                        return l20.function(v628);
                    })() : (((typeof(v628) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l103.function("\"", l113.function(v628), "\"");
                    })() : (l63.function(v628) !== l3.value ? (function(){
                        return (function(v630,v631){
                            return (l94.function(v630, (function(){
                                var symbol = l168;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== l3.value ? (function(){
                                return (function(v632){
                                    return (function(){
                                        var f = v632;
                                        var args = [];
                                        var tail = (v631);
                                        while (tail != l3.value){
                                            args.push(tail.car);
                                            tail = tail.cdr;
                                        }
                                        return f.apply(this, args);
                                    })();
                                })(l45.function(l94.function(v630, (function(){
                                    var symbol = l168;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })())));
                            })() : ((l94.function(v630, (function(){
                                var symbol = l212;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== l3.value ? l32.function(l163.function(v630, l100, l165)) : l3.value) !== l3.value ? (function(){
                                return (function(v633){
                                    return (function(){
                                        var f = v633;
                                        var args = [];
                                        var tail = (v631);
                                        while (tail != l3.value){
                                            args.push(tail.car);
                                            tail = tail.cdr;
                                        }
                                        return f.apply(this, args);
                                    })();
                                })(l45.function(l94.function(v630, (function(){
                                    var symbol = l212;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })())));
                            })() : (function(){
                                return (l161.function(v630) !== l3.value ? l110.function(l251.function(v628)) : l252.function(v630, v631));
                            })()));
                        })((function(){
                            var tmp = v628;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(),(function(){
                            var tmp = v628;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : l3.value))));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 229)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l110;
})();
var l253 = {name: "LS-COMPILE-TOPLEVEL"};
(function(){
    (l253).function = (function(v639){
        ((v639)["fname"] = "LS-COMPILE-TOPLEVEL");
        return v639;
    })((function (v635){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v636){
                        try {
                            var tmp;
                            tmp = l156.value;
                            l156.value = v636;
                            v636 = tmp;
                            return ((((function(){
                                var tmp = v635;
                                return (typeof tmp == 'object' && 'car' in tmp);
                            })()?l4.value: l3.value) !== l3.value ? (((function(){
                                var tmp = v635;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l195)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return (function(v637){
                                    return l105.function(l87.function((function(){
                                        var symbol = l158;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })(), v637));
                                })(l72.function((function(){
                                    var symbol = l253;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })(), (function(){
                                    var tmp = v635;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })()));
                            })() : (function(){
                                return (function(v638){
                                    return l103.function(l106.function(l159.function(), l103.function(";", (function(){
                                        var symbol = l102;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })())), (v638 !== l3.value ? l103.function(v638, ";", (function(){
                                        var symbol = l102;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()) : ""));
                                })(l110.function(v635));
                            })());
                        }
                        finally {
                            l156.value = v636;
                        }
                    })(l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 230)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l253;
})();
var l254 = {name: "WITH-COMPILATION-UNIT"};
l254;
(function(){
    (l194).function = (function(v645){
        ((v645)["fname"] = "EVAL");
        return v645;
    })((function (v640){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v644){
                        return (function(){
                            var string = v644;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            return eval.apply(window, [string]);
                        })();
                    })((function(v641){
                        (function(){
                            try {
                                return (function(){
                                    return (function(v642,v643){
                                        (function(){
                                            while(v642 !== l3.value){
                                                v643 = (function(){
                                                    var tmp = v642;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    (v643)();
                                                    return l3.value;
                                                })();
                                                v642 = (function(){
                                                    var tmp = v642;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return l3.value;
                                    })((function(){
                                        var symbol = l134;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })(),l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 232)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v641;
                    })((function(){
                        (l134).value = l3.value;
                        return l253.function(v640);
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 231)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l194;
})();
(function(){
    var string = "var lisp";
    if (typeof string != 'string')
        throw 'The value ' + string + ' is not a type string.';
    return eval.apply(window, [string]);
})();
(lisp = {});
(lisp.read = (function(){
    var symbol = l133;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.print = (function(){
    var symbol = l112;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.eval = (function(){
    var symbol = l194;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.compile = (function(){
    var symbol = l253;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.evalString = (function (v646){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return l194.function(l133.function(v646));

}));
(lisp.compileString = (function (v647){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return l253.function(l133.function(v647));

}));
var l255 = {car: {car: l254, cdr: "l254"}, cdr: {car: {car: l253, cdr: "l253"}, cdr: {car: {car: l252, cdr: "l252"}, cdr: {car: {car: l251, cdr: "l251"}, cdr: {car: {car: l250, cdr: "l250"}, cdr: {car: {car: l249, cdr: "l249"}, cdr: {car: {car: l248, cdr: "l248"}, cdr: {car: {car: l247, cdr: "l247"}, cdr: {car: {car: l246, cdr: "l246"}, cdr: {car: {car: l245, cdr: "l245"}, cdr: {car: {car: l244, cdr: "l244"}, cdr: {car: {car: l243, cdr: "l243"}, cdr: {car: {car: l242, cdr: "l242"}, cdr: {car: {car: l241, cdr: "l241"}, cdr: {car: {car: l240, cdr: "l240"}, cdr: {car: {car: l239, cdr: "l239"}, cdr: {car: {car: l238, cdr: "l238"}, cdr: {car: {car: l237, cdr: "l237"}, cdr: {car: {car: l236, cdr: "l236"}, cdr: {car: {car: l235, cdr: "l235"}, cdr: {car: {car: l234, cdr: "l234"}, cdr: {car: {car: l233, cdr: "l233"}, cdr: {car: {car: l232, cdr: "l232"}, cdr: {car: {car: l231, cdr: "l231"}, cdr: {car: {car: l230, cdr: "l230"}, cdr: {car: {car: l229, cdr: "l229"}, cdr: {car: {car: l228, cdr: "l228"}, cdr: {car: {car: l227, cdr: "l227"}, cdr: {car: {car: l226, cdr: "l226"}, cdr: {car: {car: l225, cdr: "l225"}, cdr: {car: {car: l224, cdr: "l224"}, cdr: {car: {car: l223, cdr: "l223"}, cdr: {car: {car: l222, cdr: "l222"}, cdr: {car: {car: l221, cdr: "l221"}, cdr: {car: {car: l220, cdr: "l220"}, cdr: {car: {car: l219, cdr: "l219"}, cdr: {car: {car: l218, cdr: "l218"}, cdr: {car: {car: l217, cdr: "l217"}, cdr: {car: {car: l216, cdr: "l216"}, cdr: {car: {car: l215, cdr: "l215"}, cdr: {car: {car: l214, cdr: "l214"}, cdr: {car: {car: l213, cdr: "l213"}, cdr: {car: {car: l212, cdr: "l212"}, cdr: {car: {car: l211, cdr: "l211"}, cdr: {car: {car: l210, cdr: "l210"}, cdr: {car: {car: l209, cdr: "l209"}, cdr: {car: {car: l208, cdr: "l208"}, cdr: {car: {car: l207, cdr: "l207"}, cdr: {car: {car: l206, cdr: "l206"}, cdr: {car: {car: l205, cdr: "l205"}, cdr: {car: {car: l204, cdr: "l204"}, cdr: {car: {car: l203, cdr: "l203"}, cdr: {car: {car: l202, cdr: "l202"}, cdr: {car: {car: l201, cdr: "l201"}, cdr: {car: {car: l200, cdr: "l200"}, cdr: {car: {car: l199, cdr: "l199"}, cdr: {car: {car: l198, cdr: "l198"}, cdr: {car: {car: l197, cdr: "l197"}, cdr: {car: {car: l196, cdr: "l196"}, cdr: {car: {car: l195, cdr: "l195"}, cdr: {car: {car: l194, cdr: "l194"}, cdr: {car: {car: l193, cdr: "l193"}, cdr: {car: {car: l192, cdr: "l192"}, cdr: {car: {car: l191, cdr: "l191"}, cdr: {car: {car: l190, cdr: "l190"}, cdr: {car: {car: l189, cdr: "l189"}, cdr: {car: {car: l188, cdr: "l188"}, cdr: {car: {car: l187, cdr: "l187"}, cdr: {car: {car: l186, cdr: "l186"}, cdr: {car: {car: l185, cdr: "l185"}, cdr: {car: {car: l184, cdr: "l184"}, cdr: {car: {car: l183, cdr: "l183"}, cdr: {car: {car: l182, cdr: "l182"}, cdr: {car: {car: l181, cdr: "l181"}, cdr: {car: {car: l180, cdr: "l180"}, cdr: {car: {car: l179, cdr: "l179"}, cdr: {car: {car: l178, cdr: "l178"}, cdr: {car: {car: l177, cdr: "l177"}, cdr: {car: {car: l176, cdr: "l176"}, cdr: {car: {car: l175, cdr: "l175"}, cdr: {car: {car: l173, cdr: "l173"}, cdr: {car: {car: l172, cdr: "l172"}, cdr: {car: {car: l171, cdr: "l171"}, cdr: {car: {car: l170, cdr: "l170"}, cdr: {car: {car: l169, cdr: "l169"}, cdr: {car: {car: l168, cdr: "l168"}, cdr: {car: {car: l167, cdr: "l167"}, cdr: {car: {car: l166, cdr: "l166"}, cdr: {car: {car: l165, cdr: "l165"}, cdr: {car: {car: l164, cdr: "l164"}, cdr: {car: {car: l163, cdr: "l163"}, cdr: {car: {car: l162, cdr: "l162"}, cdr: {car: {car: l161, cdr: "l161"}, cdr: {car: {car: l160, cdr: "l160"}, cdr: {car: {car: l159, cdr: "l159"}, cdr: {car: {car: l158, cdr: "l158"}, cdr: {car: {car: l157, cdr: "l157"}, cdr: {car: {car: l156, cdr: "l156"}, cdr: {car: {car: l155, cdr: "l155"}, cdr: {car: {car: l154, cdr: "l154"}, cdr: {car: {car: l153, cdr: "l153"}, cdr: {car: {car: l152, cdr: "l152"}, cdr: {car: {car: l151, cdr: "l151"}, cdr: {car: {car: l150, cdr: "l150"}, cdr: {car: {car: l149, cdr: "l149"}, cdr: {car: {car: l148, cdr: "l148"}, cdr: {car: {car: l147, cdr: "l147"}, cdr: {car: {car: l146, cdr: "l146"}, cdr: {car: {car: l145, cdr: "l145"}, cdr: {car: {car: l144, cdr: "l144"}, cdr: {car: {car: l143, cdr: "l143"}, cdr: {car: {car: l142, cdr: "l142"}, cdr: {car: {car: l141, cdr: "l141"}, cdr: {car: {car: l140, cdr: "l140"}, cdr: {car: {car: l139, cdr: "l139"}, cdr: {car: {car: l138, cdr: "l138"}, cdr: {car: {car: l137, cdr: "l137"}, cdr: {car: {car: l136, cdr: "l136"}, cdr: {car: {car: l135, cdr: "l135"}, cdr: {car: {car: l134, cdr: "l134"}, cdr: {car: {car: l133, cdr: "l133"}, cdr: {car: {car: l132, cdr: "l132"}, cdr: {car: {car: l131, cdr: "l131"}, cdr: {car: {car: l130, cdr: "l130"}, cdr: {car: {car: l129, cdr: "l129"}, cdr: {car: {car: l128, cdr: "l128"}, cdr: {car: {car: l127, cdr: "l127"}, cdr: {car: {car: l126, cdr: "l126"}, cdr: {car: {car: l125, cdr: "l125"}, cdr: {car: {car: l124, cdr: "l124"}, cdr: {car: {car: l123, cdr: "l123"}, cdr: {car: {car: l122, cdr: "l122"}, cdr: {car: {car: l121, cdr: "l121"}, cdr: {car: {car: l120, cdr: "l120"}, cdr: {car: {car: l119, cdr: "l119"}, cdr: {car: {car: l118, cdr: "l118"}, cdr: {car: {car: l117, cdr: "l117"}, cdr: {car: {car: l116, cdr: "l116"}, cdr: {car: {car: l115, cdr: "l115"}, cdr: {car: {car: l114, cdr: "l114"}, cdr: {car: {car: l113, cdr: "l113"}, cdr: {car: {car: l112, cdr: "l112"}, cdr: {car: {car: l111, cdr: "l111"}, cdr: {car: {car: l110, cdr: "l110"}, cdr: {car: {car: l109, cdr: "l109"}, cdr: {car: {car: l108, cdr: "l108"}, cdr: {car: {car: l107, cdr: "l107"}, cdr: {car: {car: l106, cdr: "l106"}, cdr: {car: {car: l105, cdr: "l105"}, cdr: {car: {car: l104, cdr: "l104"}, cdr: {car: {car: l103, cdr: "l103"}, cdr: {car: {car: l102, cdr: "l102"}, cdr: {car: {car: l101, cdr: "l101"}, cdr: {car: {car: l100, cdr: "l100"}, cdr: {car: {car: l99, cdr: "l99"}, cdr: {car: {car: l98, cdr: "l98"}, cdr: {car: {car: l97, cdr: "l97"}, cdr: {car: {car: l96, cdr: "l96"}, cdr: {car: {car: l95, cdr: "l95"}, cdr: {car: {car: l94, cdr: "l94"}, cdr: {car: {car: l93, cdr: "l93"}, cdr: {car: {car: l92, cdr: "l92"}, cdr: {car: {car: l91, cdr: "l91"}, cdr: {car: {car: l90, cdr: "l90"}, cdr: {car: {car: l89, cdr: "l89"}, cdr: {car: {car: l88, cdr: "l88"}, cdr: {car: {car: l87, cdr: "l87"}, cdr: {car: {car: l86, cdr: "l86"}, cdr: {car: {car: l85, cdr: "l85"}, cdr: {car: {car: l84, cdr: "l84"}, cdr: {car: {car: l83, cdr: "l83"}, cdr: {car: {car: l82, cdr: "l82"}, cdr: {car: {car: l81, cdr: "l81"}, cdr: {car: {car: l80, cdr: "l80"}, cdr: {car: {car: l79, cdr: "l79"}, cdr: {car: {car: l78, cdr: "l78"}, cdr: {car: {car: l77, cdr: "l77"}, cdr: {car: {car: l76, cdr: "l76"}, cdr: {car: {car: l75, cdr: "l75"}, cdr: {car: {car: l74, cdr: "l74"}, cdr: {car: {car: l73, cdr: "l73"}, cdr: {car: {car: l72, cdr: "l72"}, cdr: {car: {car: l71, cdr: "l71"}, cdr: {car: {car: l70, cdr: "l70"}, cdr: {car: {car: l69, cdr: "l69"}, cdr: {car: {car: l68, cdr: "l68"}, cdr: {car: {car: l67, cdr: "l67"}, cdr: {car: {car: l66, cdr: "l66"}, cdr: {car: {car: l65, cdr: "l65"}, cdr: {car: {car: l64, cdr: "l64"}, cdr: {car: {car: l63, cdr: "l63"}, cdr: {car: {car: l62, cdr: "l62"}, cdr: {car: {car: l61, cdr: "l61"}, cdr: {car: {car: l60, cdr: "l60"}, cdr: {car: {car: l59, cdr: "l59"}, cdr: {car: {car: l58, cdr: "l58"}, cdr: {car: {car: l57, cdr: "l57"}, cdr: {car: {car: l56, cdr: "l56"}, cdr: {car: {car: l55, cdr: "l55"}, cdr: {car: {car: l54, cdr: "l54"}, cdr: {car: {car: l53, cdr: "l53"}, cdr: {car: {car: l52, cdr: "l52"}, cdr: {car: {car: l51, cdr: "l51"}, cdr: {car: {car: l50, cdr: "l50"}, cdr: {car: {car: l49, cdr: "l49"}, cdr: {car: {car: l48, cdr: "l48"}, cdr: {car: {car: l47, cdr: "l47"}, cdr: {car: {car: l46, cdr: "l46"}, cdr: {car: {car: l45, cdr: "l45"}, cdr: {car: {car: l44, cdr: "l44"}, cdr: {car: {car: l43, cdr: "l43"}, cdr: {car: {car: l42, cdr: "l42"}, cdr: {car: {car: l41, cdr: "l41"}, cdr: {car: {car: l40, cdr: "l40"}, cdr: {car: {car: l39, cdr: "l39"}, cdr: {car: {car: l38, cdr: "l38"}, cdr: {car: {car: l37, cdr: "l37"}, cdr: {car: {car: l36, cdr: "l36"}, cdr: {car: {car: l35, cdr: "l35"}, cdr: {car: {car: l34, cdr: "l34"}, cdr: {car: {car: l33, cdr: "l33"}, cdr: {car: {car: l32, cdr: "l32"}, cdr: {car: {car: l31, cdr: "l31"}, cdr: {car: {car: l30, cdr: "l30"}, cdr: {car: {car: l29, cdr: "l29"}, cdr: {car: {car: l28, cdr: "l28"}, cdr: {car: {car: l27, cdr: "l27"}, cdr: {car: {car: l26, cdr: "l26"}, cdr: {car: {car: l25, cdr: "l25"}, cdr: {car: {car: l24, cdr: "l24"}, cdr: {car: {car: l23, cdr: "l23"}, cdr: {car: {car: l22, cdr: "l22"}, cdr: {car: {car: l21, cdr: "l21"}, cdr: {car: {car: l20, cdr: "l20"}, cdr: {car: {car: l19, cdr: "l19"}, cdr: {car: {car: l18, cdr: "l18"}, cdr: {car: {car: l17, cdr: "l17"}, cdr: {car: {car: l16, cdr: "l16"}, cdr: {car: {car: l15, cdr: "l15"}, cdr: {car: {car: l14, cdr: "l14"}, cdr: {car: {car: l13, cdr: "l13"}, cdr: {car: {car: l12, cdr: "l12"}, cdr: {car: {car: l11, cdr: "l11"}, cdr: {car: {car: l10, cdr: "l10"}, cdr: {car: {car: l9, cdr: "l9"}, cdr: {car: {car: l8, cdr: "l8"}, cdr: {car: {car: l7, cdr: "l7"}, cdr: {car: {car: l6, cdr: "l6"}, cdr: {car: {car: l5, cdr: "l5"}, cdr: {car: {car: l4, cdr: "l4"}, cdr: {car: {car: l3, cdr: "l3"}, cdr: {car: {car: l2, cdr: "l2"}, cdr: {car: {car: l1, cdr: "l1"}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
var l256 = {name: "BODY"};
var l257 = {name: "CHECK"};
var l258 = {name: "DECLS"};
var l259 = {name: "DECL"};
var l260 = {name: "NAME"};
var l261 = {name: "ARGS"};
var l262 = {name: "ARG"};
var l263 = {name: "FORM"};
var l264 = {name: "FORM1"};
var l265 = {name: "RESULT"};
var l266 = {name: "VALUE"};
var l267 = {name: "FORMS"};
var l268 = {name: "G"};
var l269 = {name: "CLAUSULES"};
var l270 = {name: "!FORM"};
var l271 = {name: "CLAUSULE"};
var l272 = {name: "ITER"};
var l273 = {name: "G!TO"};
var l274 = {name: "VAR"};
var l275 = {name: "TO"};
var l276 = {name: "G!LIST"};
var l277 = {name: "X"};
var l278 = {name: "PLACE"};
var l279 = {name: "DELTA"};
var l280 = {name: "CONDITION"};
var l281 = {name: "DOCSTRING"};
var l282 = {name: "&BODY"};
var l283 = {car: {car: {car: l4, cdr: {car: l101, cdr: {car: l3, cdr: {car: {car: l166, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l3, cdr: {car: l101, cdr: {car: l3, cdr: {car: {car: l166, cdr: l3}, cdr: l3}}}}, cdr: l3}}, cdr: {car: {car: {car: l194, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l254, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l173, cdr: {car: l256, cdr: l3}}, cdr: {car: {car: l130, cdr: {car: {car: l60, cdr: {car: {car: l195, cdr: {car: {car: l183, cdr: {car: l134, cdr: {car: l3, cdr: l3}}}, cdr: {car: {car: l131, cdr: {car: l256, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l53, cdr: {car: {car: l257, cdr: {car: l134, cdr: l3}}, cdr: {car: {car: l241, cdr: {car: l257, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l253, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l110, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l182, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l252, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l251, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l161, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l216, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l215, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l258, cdr: {car: l173, cdr: {car: l256, cdr: l3}}}, cdr: {car: {car: l130, cdr: {car: {car: l111, cdr: {car: {car: l131, cdr: {car: {car: l72, cdr: {car: {car: l181, cdr: {car: {car: l259, cdr: l3}, cdr: {car: {car: l130, cdr: {car: {car: l103, cdr: {car: "var ", cdr: {car: {car: l132, cdr: {car: {car: l44, cdr: {car: l259, cdr: l3}}, cdr: l3}}, cdr: {car: " = ", cdr: {car: {car: l132, cdr: {car: {car: l46, cdr: {car: l259, cdr: l3}}, cdr: l3}}, cdr: {car: ";", cdr: {car: l102, cdr: l3}}}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l258, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l131, cdr: {car: {car: l72, cdr: {car: {car: l181, cdr: {car: {car: l259, cdr: l3}, cdr: {car: {car: l130, cdr: {car: {car: l103, cdr: {car: "if (typeof ", cdr: {car: {car: l132, cdr: {car: {car: l44, cdr: {car: l259, cdr: l3}}, cdr: l3}}, cdr: {car: " != '", cdr: {car: {car: l132, cdr: {car: {car: l45, cdr: {car: l259, cdr: l3}}, cdr: l3}}, cdr: {car: "')", cdr: {car: l102, cdr: {car: {car: l108, cdr: {car: "throw 'The value ' + ", cdr: {car: {car: l132, cdr: {car: {car: l44, cdr: {car: l259, cdr: l3}}, cdr: l3}}, cdr: {car: " + ' is not a type ", cdr: {car: {car: l132, cdr: {car: {car: l45, cdr: {car: l259, cdr: l3}}, cdr: l3}}, cdr: {car: ".';", cdr: {car: l102, cdr: l3}}}}}}}, cdr: l3}}}}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l258, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l103, cdr: {car: "return ", cdr: {car: {car: l195, cdr: {car: {car: l131, cdr: {car: l256, cdr: l3}}, cdr: l3}}, cdr: {car: ";", cdr: {car: l102, cdr: l3}}}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l214, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l260, cdr: {car: l261, cdr: {car: l173, cdr: {car: l256, cdr: l3}}}}, cdr: {car: {car: l130, cdr: {car: {car: l195, cdr: {car: {car: l213, cdr: {car: {car: l132, cdr: {car: l260, cdr: l3}}, cdr: {car: {car: l132, cdr: {car: l261, cdr: l3}}, cdr: {car: {car: l198, cdr: {car: {car: l132, cdr: {car: {car: l72, cdr: {car: {car: l181, cdr: {car: {car: l262, cdr: l3}, cdr: {car: {car: l130, cdr: {car: {car: {car: l132, cdr: {car: l262, cdr: l3}}, cdr: {car: {car: l110, cdr: {car: {car: l132, cdr: {car: l262, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l261, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l131, cdr: {car: l256, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l213, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l260, cdr: {car: l261, cdr: {car: l173, cdr: {car: l256, cdr: l3}}}}, cdr: {car: {car: l130, cdr: {car: {car: l52, cdr: {car: {car: l48, cdr: {car: {car: l129, cdr: {car: {car: l132, cdr: {car: l260, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l181, cdr: {car: {car: l132, cdr: {car: l261, cdr: l3}}, cdr: {car: {car: l146, cdr: {car: {car: l132, cdr: {car: l260, cdr: l3}}, cdr: {car: {car: l131, cdr: {car: l256, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l212, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l130, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l263, cdr: l3}, cdr: {car: {car: l210, cdr: {car: l263, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l211, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l210, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l206, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l205, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l197, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l196, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l260, cdr: {car: l261, cdr: {car: l263, cdr: l3}}}, cdr: {car: {car: l130, cdr: {car: {car: l169, cdr: {car: {car: l132, cdr: {car: l260, cdr: l3}}, cdr: {car: {car: l132, cdr: {car: l261, cdr: l3}}, cdr: {car: {car: l110, cdr: {car: {car: l132, cdr: {car: l263, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l190, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l189, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l113, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l180, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l179, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l178, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l177, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l176, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l175, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l169, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l260, cdr: {car: l261, cdr: {car: l173, cdr: {car: l256, cdr: l3}}}}, cdr: {car: {car: l130, cdr: {car: {car: l52, cdr: {car: {car: l48, cdr: {car: {car: l129, cdr: {car: {car: l132, cdr: {car: l260, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l181, cdr: {car: {car: l132, cdr: {car: l261, cdr: l3}}, cdr: {car: {car: l146, cdr: {car: {car: l132, cdr: {car: l260, cdr: l3}}, cdr: {car: {car: l131, cdr: {car: l256, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l168, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l164, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l163, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l162, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l160, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l159, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l157, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l154, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l153, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l152, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l149, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l148, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l145, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l144, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l143, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l142, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l141, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l140, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l139, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l138, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l137, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l136, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l135, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l133, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l125, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l127, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l126, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l124, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l123, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l122, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l121, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l120, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l119, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l118, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l117, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l116, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l115, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l114, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l98, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l112, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l111, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l173, cdr: {car: l256, cdr: l3}}, cdr: {car: {car: l130, cdr: {car: {car: l103, cdr: {car: "(function(){", cdr: {car: l102, cdr: {car: {car: l108, cdr: {car: {car: l131, cdr: {car: l256, cdr: l3}}, cdr: l3}}, cdr: {car: "})()", cdr: l3}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l109, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l20, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l108, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l107, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l106, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l105, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l104, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l101, cdr: {car: l173, cdr: {car: l263, cdr: l3}}}, cdr: {car: {car: l130, cdr: {car: {car: l183, cdr: {car: {car: l132, cdr: {car: l101, cdr: l3}}, cdr: {car: {car: l103, cdr: {car: {car: l132, cdr: {car: l101, cdr: l3}}, cdr: {car: {car: l195, cdr: {car: {car: l131, cdr: {car: l263, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l103, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l99, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l97, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l96, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l95, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l94, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l93, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l92, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l91, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l90, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l89, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l88, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l87, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l86, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l85, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l84, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l83, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l82, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l81, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l63, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l80, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l79, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l78, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l77, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l76, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l75, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l74, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l73, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l72, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l71, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l70, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l69, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l68, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l67, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l66, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l65, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l64, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l62, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l61, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l264, cdr: {car: l265, cdr: {car: l173, cdr: {car: l256, cdr: l3}}}}, cdr: {car: {car: l130, cdr: {car: {car: l60, cdr: {car: {car: l195, cdr: {car: {car: l132, cdr: {car: l264, cdr: l3}}, cdr: {car: {car: l132, cdr: {car: l265, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l131, cdr: {car: l256, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l60, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l263, cdr: {car: l173, cdr: {car: l256, cdr: l3}}}, cdr: {car: {car: l198, cdr: {car: {car: {car: l266, cdr: {car: {car: l19, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l130, cdr: {car: {car: l198, cdr: {car: {car: {car: {car: l132, cdr: {car: l266, cdr: l3}}, cdr: {car: {car: l132, cdr: {car: l263, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l131, cdr: {car: l256, cdr: l3}}, cdr: {car: {car: l132, cdr: {car: l266, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l59, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l173, cdr: {car: l267, cdr: l3}}, cdr: {car: {car: l55, cdr: {car: {car: {car: l12, cdr: {car: l267, cdr: l3}}, cdr: {car: l3, cdr: l3}}, cdr: {car: {car: {car: l12, cdr: {car: {car: l36, cdr: {car: l267, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l35, cdr: {car: l267, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l198, cdr: {car: {car: {car: l268, cdr: {car: {car: l19, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l130, cdr: {car: {car: l198, cdr: {car: {car: {car: {car: l132, cdr: {car: l268, cdr: l3}}, cdr: {car: {car: l132, cdr: {car: {car: l35, cdr: {car: l267, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l170, cdr: {car: {car: l132, cdr: {car: l268, cdr: l3}}, cdr: {car: {car: l132, cdr: {car: l268, cdr: l3}}, cdr: {car: {car: l59, cdr: {car: {car: l131, cdr: {car: {car: l36, cdr: {car: l267, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l58, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l173, cdr: {car: l267, cdr: l3}}, cdr: {car: {car: l55, cdr: {car: {car: {car: l12, cdr: {car: l267, cdr: l3}}, cdr: {car: l4, cdr: l3}}, cdr: {car: {car: {car: l12, cdr: {car: {car: l36, cdr: {car: l267, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l35, cdr: {car: l267, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l130, cdr: {car: {car: l170, cdr: {car: {car: l132, cdr: {car: {car: l35, cdr: {car: l267, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l58, cdr: {car: {car: l131, cdr: {car: {car: l36, cdr: {car: l267, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l57, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l263, cdr: {car: l173, cdr: {car: l269, cdr: l3}}}, cdr: {car: {car: l130, cdr: {car: {car: l56, cdr: {car: {car: l132, cdr: {car: l263, cdr: l3}}, cdr: {car: {car: l131, cdr: {car: {car: l66, cdr: {car: l269, cdr: {car: {car: l130, cdr: {car: {car: {car: l4, cdr: {car: {car: l244, cdr: {car: "ECASE expression failed.", cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l56, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l263, cdr: {car: l173, cdr: {car: l269, cdr: l3}}}, cdr: {car: {car: l198, cdr: {car: {car: {car: l270, cdr: {car: {car: l19, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l130, cdr: {car: {car: l198, cdr: {car: {car: {car: {car: l132, cdr: {car: l270, cdr: l3}}, cdr: {car: {car: l132, cdr: {car: l263, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l55, cdr: {car: {car: l131, cdr: {car: {car: l72, cdr: {car: {car: l181, cdr: {car: {car: l271, cdr: l3}, cdr: {car: {car: l170, cdr: {car: {car: l233, cdr: {car: {car: l35, cdr: {car: l271, cdr: l3}}, cdr: {car: l4, cdr: l3}}}, cdr: {car: l271, cdr: {car: {car: l130, cdr: {car: {car: {car: l31, cdr: {car: {car: l132, cdr: {car: l270, cdr: l3}}, cdr: {car: {car: l129, cdr: {car: {car: l132, cdr: {car: {car: l35, cdr: {car: l271, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l131, cdr: {car: {car: l36, cdr: {car: l271, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l269, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l55, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l173, cdr: {car: l269, cdr: l3}}, cdr: {car: {car: l170, cdr: {car: {car: l12, cdr: {car: l269, cdr: l3}}, cdr: {car: l3, cdr: {car: {car: l170, cdr: {car: {car: l233, cdr: {car: {car: l37, cdr: {car: l269, cdr: l3}}, cdr: {car: l4, cdr: l3}}}, cdr: {car: {car: l130, cdr: {car: {car: l195, cdr: {car: {car: l131, cdr: {car: {car: l39, cdr: {car: l269, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l130, cdr: {car: {car: l170, cdr: {car: {car: l132, cdr: {car: {car: l37, cdr: {car: l269, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l195, cdr: {car: {car: l131, cdr: {car: {car: l39, cdr: {car: l269, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l55, cdr: {car: {car: l131, cdr: {car: {car: l36, cdr: {car: l269, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l54, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l272, cdr: {car: l173, cdr: {car: l256, cdr: l3}}}, cdr: {car: {car: l198, cdr: {car: {car: {car: l273, cdr: {car: {car: l19, cdr: l3}, cdr: l3}}, cdr: {car: {car: l274, cdr: {car: {car: l44, cdr: {car: l272, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l275, cdr: {car: {car: l45, cdr: {car: l272, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l265, cdr: {car: {car: l46, cdr: {car: l272, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l130, cdr: {car: {car: l146, cdr: {car: l3, cdr: {car: {car: l198, cdr: {car: {car: {car: {car: l132, cdr: {car: l274, cdr: l3}}, cdr: {car: 0, cdr: l3}}, cdr: {car: {car: {car: l132, cdr: {car: l273, cdr: l3}}, cdr: {car: {car: l132, cdr: {car: l275, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l191, cdr: {car: {car: l218, cdr: {car: {car: l132, cdr: {car: l274, cdr: l3}}, cdr: {car: {car: l132, cdr: {car: l273, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l207, cdr: {car: {car: l131, cdr: {car: l256, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l50, cdr: {car: {car: l132, cdr: {car: l274, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l132, cdr: {car: l265, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l53, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l272, cdr: {car: l173, cdr: {car: l256, cdr: l3}}}, cdr: {car: {car: l198, cdr: {car: {car: {car: l274, cdr: {car: {car: l44, cdr: {car: l272, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l276, cdr: {car: {car: l19, cdr: l3}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l130, cdr: {car: {car: l146, cdr: {car: l3, cdr: {car: {car: l198, cdr: {car: {car: {car: {car: l132, cdr: {car: l276, cdr: l3}}, cdr: {car: {car: l132, cdr: {car: {car: l45, cdr: {car: l272, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: {car: l132, cdr: {car: l274, cdr: l3}}, cdr: {car: l3, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l191, cdr: {car: {car: l132, cdr: {car: l276, cdr: l3}}, cdr: {car: {car: l183, cdr: {car: {car: l132, cdr: {car: l274, cdr: l3}}, cdr: {car: {car: l35, cdr: {car: {car: l132, cdr: {car: l276, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l207, cdr: {car: {car: l131, cdr: {car: l256, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l183, cdr: {car: {car: l132, cdr: {car: l276, cdr: l3}}, cdr: {car: {car: l36, cdr: {car: {car: l132, cdr: {car: l276, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}}, cdr: {car: {car: l132, cdr: {car: {car: l46, cdr: {car: l272, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l52, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l277, cdr: {car: l278, cdr: l3}}, cdr: {car: {car: l130, cdr: {car: {car: l183, cdr: {car: {car: l132, cdr: {car: l278, cdr: l3}}, cdr: {car: {car: l33, cdr: {car: {car: l132, cdr: {car: l277, cdr: l3}}, cdr: {car: {car: l132, cdr: {car: l278, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l51, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l277, cdr: {car: l172, cdr: {car: {car: l279, cdr: {car: 1, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l130, cdr: {car: {car: l183, cdr: {car: {car: l132, cdr: {car: l277, cdr: l3}}, cdr: {car: {car: l24, cdr: {car: {car: l132, cdr: {car: l277, cdr: l3}}, cdr: {car: {car: l132, cdr: {car: l279, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l50, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l277, cdr: {car: l172, cdr: {car: {car: l279, cdr: {car: 1, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l130, cdr: {car: {car: l183, cdr: {car: {car: l132, cdr: {car: l277, cdr: l3}}, cdr: {car: {car: l23, cdr: {car: {car: l132, cdr: {car: l277, cdr: l3}}, cdr: {car: {car: l132, cdr: {car: l279, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l49, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l48, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l47, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l46, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l45, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l44, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l43, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l42, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l41, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l40, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l39, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l38, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l37, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l36, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l35, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l34, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l33, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l32, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l31, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l30, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l29, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l28, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l27, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l26, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l25, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l24, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l23, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l22, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l21, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l19, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l17, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l16, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l15, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l14, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l280, cdr: {car: l173, cdr: {car: l256, cdr: l3}}}, cdr: {car: {car: l130, cdr: {car: {car: l146, cdr: {car: l3, cdr: {car: {car: l191, cdr: {car: {car: l132, cdr: {car: l280, cdr: l3}}, cdr: {car: {car: l131, cdr: {car: l256, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l13, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l172, cdr: {car: l266, cdr: l3}}, cdr: {car: {car: l130, cdr: {car: {car: l200, cdr: {car: l3, cdr: {car: {car: l132, cdr: {car: l266, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l12, cdr: {car: l100, cdr: {car: l3, cdr: {car: {car: l167, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l10, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l260, cdr: {car: l261, cdr: {car: l173, cdr: {car: l256, cdr: l3}}}}, cdr: {car: {car: l130, cdr: {car: {car: l195, cdr: {car: {car: l2, cdr: {car: {car: l167, cdr: {car: {car: l132, cdr: {car: l260, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l229, cdr: {car: {car: l129, cdr: {car: {car: l132, cdr: {car: l260, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l9, cdr: {car: {car: l132, cdr: {car: {car: l228, cdr: {car: l260, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l132, cdr: {car: l261, cdr: l3}}, cdr: {car: {car: l131, cdr: {car: {car: l170, cdr: {car: {car: l58, cdr: {car: {car: l236, cdr: {car: {car: l35, cdr: {car: l256, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l32, cdr: {car: {car: l12, cdr: {car: {car: l36, cdr: {car: l256, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l130, cdr: {car: {car: {car: l132, cdr: {car: {car: l35, cdr: {car: l256, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l146, cdr: {car: {car: l132, cdr: {car: l260, cdr: l3}}, cdr: {car: {car: l131, cdr: {car: {car: l36, cdr: {car: l256, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l130, cdr: {car: {car: {car: l146, cdr: {car: {car: l132, cdr: {car: l260, cdr: l3}}, cdr: {car: {car: l131, cdr: {car: l256, cdr: l3}}, cdr: l3}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: {car: l129, cdr: {car: {car: l132, cdr: {car: l260, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l9, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l260, cdr: {car: l261, cdr: {car: l173, cdr: {car: l256, cdr: l3}}}}, cdr: {car: {car: l198, cdr: {car: {car: {car: l277, cdr: {car: {car: l19, cdr: {car: "FN", cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l130, cdr: {car: {car: l198, cdr: {car: {car: {car: {car: l132, cdr: {car: l277, cdr: l3}}, cdr: {car: {car: l181, cdr: {car: {car: l132, cdr: {car: l261, cdr: l3}}, cdr: {car: {car: l131, cdr: {car: l256, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l247, cdr: {car: {car: l132, cdr: {car: l277, cdr: l3}}, cdr: {car: "fname", cdr: {car: {car: l132, cdr: {car: l260, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l132, cdr: {car: l277, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l8, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l260, cdr: {car: l266, cdr: {car: l172, cdr: {car: l281, cdr: l3}}}}, cdr: {car: {car: l130, cdr: {car: {car: l195, cdr: {car: {car: l183, cdr: {car: {car: l132, cdr: {car: l260, cdr: l3}}, cdr: {car: {car: l132, cdr: {car: l266, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l131, cdr: {car: {car: l5, cdr: {car: {car: l236, cdr: {car: l281, cdr: l3}}, cdr: {car: {car: l130, cdr: {car: {car: {car: l247, cdr: {car: {car: l129, cdr: {car: {car: l132, cdr: {car: l260, cdr: l3}}, cdr: l3}}, cdr: {car: "vardoc", cdr: {car: {car: l132, cdr: {car: l281, cdr: l3}}, cdr: l3}}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l129, cdr: {car: {car: l132, cdr: {car: l260, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l7, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l260, cdr: {car: l266, cdr: {car: l172, cdr: {car: l281, cdr: l3}}}}, cdr: {car: {car: l130, cdr: {car: {car: l195, cdr: {car: {car: l6, cdr: {car: {car: l21, cdr: {car: {car: l129, cdr: {car: {car: l132, cdr: {car: l260, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l183, cdr: {car: {car: l132, cdr: {car: l260, cdr: l3}}, cdr: {car: {car: l132, cdr: {car: l266, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: {car: l131, cdr: {car: {car: l5, cdr: {car: {car: l236, cdr: {car: l281, cdr: l3}}, cdr: {car: {car: l130, cdr: {car: {car: {car: l247, cdr: {car: {car: l129, cdr: {car: {car: l132, cdr: {car: l260, cdr: l3}}, cdr: l3}}, cdr: {car: "vardoc", cdr: {car: {car: l132, cdr: {car: l281, cdr: l3}}, cdr: l3}}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l129, cdr: {car: {car: l132, cdr: {car: l260, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l6, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l280, cdr: {car: l173, cdr: {car: l256, cdr: l3}}}, cdr: {car: {car: l130, cdr: {car: {car: l170, cdr: {car: {car: l132, cdr: {car: l280, cdr: l3}}, cdr: {car: l3, cdr: {car: {car: l195, cdr: {car: {car: l131, cdr: {car: l256, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l5, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l280, cdr: {car: l173, cdr: {car: l256, cdr: l3}}}, cdr: {car: {car: l130, cdr: {car: {car: l170, cdr: {car: {car: l132, cdr: {car: l280, cdr: l3}}, cdr: {car: {car: l195, cdr: {car: {car: l131, cdr: {car: l256, cdr: l3}}, cdr: l3}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l2, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l173, cdr: {car: l258, cdr: l3}}, cdr: {car: {car: l130, cdr: {car: {car: l193, cdr: {car: {car: l131, cdr: {car: {car: l72, cdr: {car: {car: l181, cdr: {car: {car: l259, cdr: l3}, cdr: {car: {car: l130, cdr: {car: {car: l164, cdr: {car: {car: l129, cdr: {car: {car: l132, cdr: {car: l259, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l258, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l1, cdr: {car: l161, cdr: {car: {car: l181, cdr: {car: {car: l260, cdr: {car: l261, cdr: {car: l173, cdr: {car: l256, cdr: l3}}}}, cdr: {car: {car: l130, cdr: {car: {car: l193, cdr: {car: {car: l160, cdr: {car: {car: l129, cdr: {car: {car: l132, cdr: {car: l260, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l129, cdr: {car: {car: l181, cdr: {car: {car: l132, cdr: {car: {car: l72, cdr: {car: {car: l181, cdr: {car: {car: l277, cdr: l3}, cdr: {car: {car: l170, cdr: {car: {car: l233, cdr: {car: l277, cdr: {car: {car: l129, cdr: {car: l282, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l129, cdr: {car: l173, cdr: l3}}, cdr: {car: l277, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l261, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l131, cdr: {car: l256, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: l3, cdr: {car: l3, cdr: l3}}}};
(function(){
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["WITH-COMPILATION-UNIT"] = l254);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LS-COMPILE-TOPLEVEL"] = l253);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["COMPILE-FUNCALL"] = l252);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LS-MACROEXPAND-1"] = l251);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["WRITE-STRING"] = l250);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["FUNCTIONP"] = l249);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["IN"] = l248);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["OSET"] = l247);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["OGET"] = l246);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NEW"] = l245);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["ERROR"] = l244);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["JS-EVAL"] = l243);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["APPLY"] = l242);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["FUNCALL"] = l241);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CHAR"] = l240);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SLICE"] = l239);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["STRING-LENGTH"] = l238);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["STRING-UPCASE"] = l237);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["STRINGP"] = l236);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["STRING"] = l235);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["EQUAL"] = l234);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["EQ"] = l233);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LAMBDA-CODE"] = l232);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SYMBOL-PLIST"] = l231);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SYMBOL-VALUE"] = l230);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["FSET"] = l229);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SYMBOL-NAME"] = l228);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MAKE-SYMBOL"] = l227);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SYMBOLP"] = l226);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SETCDR"] = l225);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SETCAR"] = l224);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["FLOOR"] = l223);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NUMBERP"] = l222);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())[">="] = l221);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["<="] = l220);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())[">"] = l219);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["<"] = l218);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MOD"] = l217);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NUM-OP-NUM"] = l216);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["TYPE-CHECK"] = l215);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DEFINE-BUILTIN"] = l214);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DEFINE-RAW-BUILTIN"] = l213);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*BUILTINS*"] = l212);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BACKQUOTE-EXPAND"] = l211);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BACKQUOTE-EXPAND-1"] = l210);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["UNWIND-PROTECT"] = l209);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["GO"] = l208);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["TAGBODY"] = l207);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DECLARE-TAGBODY-TAGS"] = l206);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["GO-TAG-P"] = l205);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*GO-TAG-COUNTER*"] = l204);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*TAGBODY-COUNTER*"] = l203);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["THROW"] = l202);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CATCH"] = l201);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["RETURN-FROM"] = l200);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*BLOCK-COUNTER*"] = l199);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LET"] = l198);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DYNAMIC-BINDING-WRAPPER"] = l197);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DEFINE-TRANSFORMATION"] = l196);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["PROGN"] = l195);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["EVAL"] = l194);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["EVAL-WHEN-COMPILE"] = l193);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SYMBOL-FUNCTION"] = l192);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["%WHILE"] = l191);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LITERAL"] = l190);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["GENLIT"] = l189);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*LITERAL-COUNTER*"] = l188);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*LITERAL-SYMBOLS*"] = l187);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["JS-VSET"] = l186);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["JS-VREF"] = l185);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SET"] = l184);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SETQ"] = l183);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LS-COMPILE-BLOCK"] = l182);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LAMBDA"] = l181);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LAMBDA-DOCSTRING-WRAPPER"] = l180);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LAMBDA-LIST-REST-ARGUMENT"] = l179);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LAMBDA-LIST-OPTIONAL-ARGUMENTS"] = l178);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"] = l177);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LAMBDA-LIST-REQUIRED-ARGUMENTS"] = l176);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LIST-UNTIL-KEYWORD"] = l175);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["&REST"] = l173);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["&OPTIONAL"] = l172);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*LAMBDA-LIST-KEYWORDS*"] = l171);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["IF"] = l170);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DEFINE-COMPILATION"] = l169);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*COMPILATIONS*"] = l168);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NON-OVERRIDABLE"] = l167);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CONSTANT"] = l166);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NOTINLINE"] = l165);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["!PROCLAIM"] = l164);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CLAIMP"] = l163);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["GLOBAL-BINDING"] = l162);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MACRO"] = l161);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["%COMPILE-DEFMACRO"] = l160);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["GET-TOPLEVEL-COMPILATIONS"] = l159);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NULL-OR-EMPTY-P"] = l158);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["TOPLEVEL-COMPILATION"] = l157);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*TOPLEVEL-COMPILATIONS*"] = l156);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LEXICAL-VARIABLE"] = l155);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["EXTEND-LOCAL-ENV"] = l154);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["TRANSLATE-VARIABLE"] = l153);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["GVARNAME"] = l152);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*VARIABLE-COUNTER*"] = l151);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*ENVIRONMENT*"] = l150);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LOOKUP-IN-LEXENV"] = l149);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["EXTEND-LEXENV"] = l148);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["GOTAG"] = l147);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BLOCK"] = l146);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["PUSH-TO-LEXENV"] = l145);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["COPY-LEXENV"] = l144);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MAKE-LEXENV"] = l143);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["PUSH-BINDING-DECLARATION"] = l142);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SET-BINDING-DECLARATIONS"] = l141);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SET-BINDING-VALUE"] = l140);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BINDING-DECLARATIONS"] = l139);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BINDING-VALUE"] = l138);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BINDING-TYPE"] = l137);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BINDING-NAME"] = l136);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MAKE-BINDING"] = l135);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*COMPILATION-UNIT-CHECKS*"] = l134);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LS-READ-FROM-STRING"] = l133);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["UNQUOTE"] = l132);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["UNQUOTE-SPLICING"] = l131);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BACKQUOTE"] = l130);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["QUOTE"] = l129);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*EOF*"] = l128);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["READ-SHARP"] = l127);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["READ-STRING"] = l126);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LS-READ"] = l125);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["%READ-LIST"] = l124);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SKIP-WHITESPACES-AND-COMMENTS"] = l123);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["READ-UNTIL"] = l122);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["TERMINALP"] = l121);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SKIP-WHITESPACES"] = l120);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["WHITESPACEP"] = l119);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["%READ-CHAR"] = l118);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["%PEEK-CHAR"] = l117);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MAKE-STRING-STREAM"] = l116);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["PRINT"] = l115);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["WARN"] = l114);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["ESCAPE-STRING"] = l113);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["PRIN1-TO-STRING"] = l112);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["JS!SELFCALL"] = l111);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LS-COMPILE"] = l110);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["JS!BOOL"] = l109);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["INDENT"] = l108);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MAPCONCAT"] = l107);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["JOIN-TRAILING"] = l106);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["JOIN"] = l105);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CONCATF"] = l104);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CONCAT"] = l103);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*NEWLINE*"] = l102);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["VARIABLE"] = l101);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["FUNCTION"] = l100);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DOCUMENTATION"] = l99);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["WRITE-LINE"] = l98);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DISASSEMBLE"] = l97);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["FDEFINITION"] = l96);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["STRING="] = l95);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["ASSOC"] = l94);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["EVERY"] = l93);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SOME"] = l92);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["PARSE-INTEGER"] = l91);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SUBSEQ"] = l90);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DIGIT-CHAR-P"] = l89);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["REMOVE-IF-NOT"] = l88);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["REMOVE-IF"] = l87);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["REMOVE"] = l86);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MEMBER"] = l85);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BUTLAST"] = l84);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LAST"] = l83);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NTH"] = l82);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NTHCDR"] = l81);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MINUSP"] = l80);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["PLUSP"] = l79);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["INTEGERP"] = l78);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CHAR="] = l77);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CHAR-CODE"] = l76);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CODE-CHAR"] = l75);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["COPY-LIST"] = l74);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["IDENTITY"] = l73);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MAPCAR"] = l72);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CONCAT-TWO"] = l71);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LENGTH"] = l70);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LIST-LENGTH"] = l69);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["REVERSE"] = l68);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["REVAPPEND"] = l67);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["APPEND"] = l66);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["APPEND-TWO"] = l65);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["!REDUCE"] = l64);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LISTP"] = l63);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["ENSURE-LIST"] = l62);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["PROG2"] = l61);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["PROG1"] = l60);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["OR"] = l59);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["AND"] = l58);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["ECASE"] = l57);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CASE"] = l56);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["COND"] = l55);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DOTIMES"] = l54);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DOLIST"] = l53);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["PUSH"] = l52);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DECF"] = l51);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["INCF"] = l50);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["ATOM"] = l49);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LIST"] = l48);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["FOURTH"] = l47);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["THIRD"] = l46);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SECOND"] = l45);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["FIRST"] = l44);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CADDDR"] = l43);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CDDDR"] = l42);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CADDR"] = l41);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CDDR"] = l40);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CDAR"] = l39);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CADR"] = l38);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CAAR"] = l37);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CDR"] = l36);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CAR"] = l35);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CONSP"] = l34);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CONS"] = l33);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NOT"] = l32);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["EQL"] = l31);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["TRUNCATE"] = l30);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["ZEROP"] = l29);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["1-"] = l28);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["1+"] = l27);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["/"] = l26);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*"] = l25);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["-"] = l24);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["+"] = l23);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["="] = l22);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BOUNDP"] = l21);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["INTEGER-TO-STRING"] = l20);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["GENSYM"] = l19);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*GENSYM-COUNTER*"] = l18);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["FIND-SYMBOL"] = l17);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["INTERN"] = l16);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["INTERNP"] = l15);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["WHILE"] = l14);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["RETURN"] = l13);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NULL"] = l12);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*PACKAGE*"] = l11);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DEFUN"] = l10);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NAMED-LAMBDA"] = l9);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DEFPARAMETER"] = l8);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DEFVAR"] = l7);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["UNLESS"] = l6);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["WHEN"] = l5);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["T"] = l4);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NIL"] = l3);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DECLAIM"] = l2);
    (((function(){
        var symbol = l11;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DEFMACRO"] = l1);
    (l187).value = l255;
    (l150).value = l283;
    (l151).value = 647;
    (l18).value = 168;
    return (l199).value = 232;
})();
(l188).value = 283;
