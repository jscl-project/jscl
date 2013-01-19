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
var l11 = {name: "NULL"};
(function(){
    (l11).function = (function(v2){
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
    return l11;
})();
var l12 = {name: "RETURN"};
l12;
var l13 = {name: "WHILE"};
l13;
var l14 = {name: "*GENSYM-COUNTER*"};
(function(){
    (((l14.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l14).value = 0;
    })());
    return l14;
})();
var l15 = {name: "GENSYM"};
var l16 = {name: "INTEGER-TO-STRING"};
(function(){
    (l15).function = (function(v4){
        ((v4)["fname"] = "GENSYM");
        return v4;
    })((function (v3){
        if (arguments.length > 1) throw 'too many arguments';
        switch(arguments.length){
        case 0:
        v3="G";
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    (l14).value = (function(){
                        var x = (function(){
                            var symbol = l14;
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
                            var string1 = v3;
                            var string2 = (function(){
                                var symbol = l16;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
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
    (l17).function = (function(v6){
        ((v6)["fname"] = "BOUNDP");
        return v6;
    })((function (v5){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
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
    (l18).function = (function(v9){
        ((v9)["fname"] = "=");
        return v9;
    })((function (v7,v8){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var x = v7;
                        var y = v8;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x==y;
                    })()?l4.value: l3.value);
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
var l19 = {name: "+"};
(function(){
    (l19).function = (function(v12){
        ((v12)["fname"] = "+");
        return v12;
    })((function (v10,v11){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = v10;
                        var y = v11;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x+y;
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
var l20 = {name: "-"};
(function(){
    (l20).function = (function(v15){
        ((v15)["fname"] = "-");
        return v15;
    })((function (v13,v14){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = v13;
                        var y = v14;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x-y;
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
var l21 = {name: "*"};
(function(){
    (l21).function = (function(v18){
        ((v18)["fname"] = "*");
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
                        return x*y;
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
var l22 = {name: "/"};
(function(){
    (l22).function = (function(v21){
        ((v21)["fname"] = "/");
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
                        return x/y;
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
var l23 = {name: "1+"};
(function(){
    (l23).function = (function(v23){
        ((v23)["fname"] = "1+");
        return v23;
    })((function (v22){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = v22;
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
                if (cf.type == 'block' && cf.id == 9)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l23;
})();
var l24 = {name: "1-"};
(function(){
    (l24).function = (function(v25){
        ((v25)["fname"] = "1-");
        return v25;
    })((function (v24){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = v24;
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
                if (cf.type == 'block' && cf.id == 10)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l24;
})();
var l25 = {name: "ZEROP"};
(function(){
    (l25).function = (function(v27){
        ((v27)["fname"] = "ZEROP");
        return v27;
    })((function (v26){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var x = v26;
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
                if (cf.type == 'block' && cf.id == 11)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l25;
})();
var l26 = {name: "TRUNCATE"};
(function(){
    (l26).function = (function(v30){
        ((v30)["fname"] = "TRUNCATE");
        return v30;
    })((function (v28,v29){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = (function(){
                            var x = v28;
                            var y = v29;
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
                if (cf.type == 'block' && cf.id == 12)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l26;
})();
var l27 = {name: "EQL"};
(function(){
    (l27).function = (function(v33){
        ((v33)["fname"] = "EQL");
        return v33;
    })((function (v31,v32){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((v31 === v32)?l4.value: l3.value);
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
var l28 = {name: "NOT"};
(function(){
    (l28).function = (function(v35){
        ((v35)["fname"] = "NOT");
        return v35;
    })((function (v34){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (v34 !== l3.value ? l3.value : l4.value);
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
var l29 = {name: "CONS"};
(function(){
    (l29).function = (function(v38){
        ((v38)["fname"] = "CONS");
        return v38;
    })((function (v36,v37){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ({car: v36, cdr: v37});
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
    return l29;
})();
var l30 = {name: "CONSP"};
(function(){
    (l30).function = (function(v40){
        ((v40)["fname"] = "CONSP");
        return v40;
    })((function (v39){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var tmp = v39;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value);
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
var l31 = {name: "CAR"};
(function(){
    (l31).function = (function(v42){
        ((v42)["fname"] = "CAR");
        return v42;
    })((function(){
        var func = (function (v41){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var tmp = v41;
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
        
        });
        func.docstring = 'Return the CAR part of a cons, or NIL if X is null.';
        return func;
    })());
    return l31;
})();
var l32 = {name: "CDR"};
(function(){
    (l32).function = (function(v44){
        ((v44)["fname"] = "CDR");
        return v44;
    })((function (v43){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = v43;
                        return tmp === l3.value? l3.value: tmp.cdr;
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
var l33 = {name: "CAAR"};
(function(){
    (l33).function = (function(v46){
        ((v46)["fname"] = "CAAR");
        return v46;
    })((function (v45){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = (function(){
                            var tmp = v45;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        return tmp === l3.value? l3.value: tmp.car;
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
var l34 = {name: "CADR"};
(function(){
    (l34).function = (function(v48){
        ((v48)["fname"] = "CADR");
        return v48;
    })((function (v47){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = (function(){
                            var tmp = v47;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
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
    
    }));
    return l34;
})();
var l35 = {name: "CDAR"};
(function(){
    (l35).function = (function(v50){
        ((v50)["fname"] = "CDAR");
        return v50;
    })((function (v49){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = (function(){
                            var tmp = v49;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
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
    return l35;
})();
var l36 = {name: "CDDR"};
(function(){
    (l36).function = (function(v52){
        ((v52)["fname"] = "CDDR");
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
var l37 = {name: "CADDR"};
(function(){
    (l37).function = (function(v54){
        ((v54)["fname"] = "CADDR");
        return v54;
    })((function (v53){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = (function(){
                            var tmp = (function(){
                                var tmp = v53;
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
var l38 = {name: "CDDDR"};
(function(){
    (l38).function = (function(v56){
        ((v56)["fname"] = "CDDDR");
        return v56;
    })((function (v55){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = (function(){
                            var tmp = (function(){
                                var tmp = v55;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })();
                            return tmp === l3.value? l3.value: tmp.cdr;
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
    return l38;
})();
var l39 = {name: "CADDDR"};
(function(){
    (l39).function = (function(v58){
        ((v58)["fname"] = "CADDDR");
        return v58;
    })((function (v57){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = (function(){
                            var tmp = (function(){
                                var tmp = (function(){
                                    var tmp = v57;
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
                if (cf.type == 'block' && cf.id == 25)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l39;
})();
var l40 = {name: "FIRST"};
(function(){
    (l40).function = (function(v60){
        ((v60)["fname"] = "FIRST");
        return v60;
    })((function (v59){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = v59;
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
    return l40;
})();
var l41 = {name: "SECOND"};
(function(){
    (l41).function = (function(v62){
        ((v62)["fname"] = "SECOND");
        return v62;
    })((function (v61){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l34.function(v61);
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
var l42 = {name: "THIRD"};
(function(){
    (l42).function = (function(v64){
        ((v64)["fname"] = "THIRD");
        return v64;
    })((function (v63){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l37.function(v63);
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
var l43 = {name: "FOURTH"};
(function(){
    (l43).function = (function(v66){
        ((v66)["fname"] = "FOURTH");
        return v66;
    })((function (v65){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l39.function(v65);
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
var l44 = {name: "LIST"};
(function(){
    (l44).function = (function(v68){
        ((v68)["fname"] = "LIST");
        return v68;
    })((function (){
        var v67= l3.value;
        for (var i = arguments.length-1; i>=0; i--)
            v67 = {car: arguments[i], cdr: 
        v67};
        return (function(){
            try {
                return (function(){
                    return v67;
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
    return l44;
})();
var l45 = {name: "ATOM"};
(function(){
    (l45).function = (function(v70){
        ((v70)["fname"] = "ATOM");
        return v70;
    })((function (v69){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l28.function(((function(){
                        var tmp = v69;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value));
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
    (l58).function = (function(v72){
        ((v72)["fname"] = "ENSURE-LIST");
        return v72;
    })((function (v71){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var symbol = l59;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v71) !== l3.value ? v71 : l44.function(v71));
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
    return l58;
})();
var l60 = {name: "!REDUCE"};
(function(){
    (l60).function = (function(v76){
        ((v76)["fname"] = "!REDUCE");
        return v76;
    })((function (v73,v74,v75){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.function(v74) !== l3.value ? v75 : l60.function(v73, (function(){
                        var tmp = v74;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })(), (v73)(v75, (function(){
                        var tmp = v74;
                        return tmp === l3.value? l3.value: tmp.car;
                    })())));
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
    return l60;
})();
var l61 = {name: "APPEND-TWO"};
var l62 = {name: "APPEND"};
(function(){
    (l61).function = (function(v79){
        ((v79)["fname"] = "APPEND-TWO");
        return v79;
    })((function (v77,v78){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.function(v77) !== l3.value ? v78 : ({car: (function(){
                        var tmp = v77;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), cdr: (function(){
                        var symbol = l62;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = v77;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })(), v78)}));
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
    return l61;
})();
(function(){
    (l62).function = (function(v81){
        ((v81)["fname"] = "APPEND");
        return v81;
    })((function (){
        var v80= l3.value;
        for (var i = arguments.length-1; i>=0; i--)
            v80 = {car: arguments[i], cdr: 
        v80};
        return (function(){
            try {
                return (function(){
                    return l60.function((function(){
                        var symbol = l61;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v80, l3);
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
var l63 = {name: "REVAPPEND"};
(function(){
    (l63).function = (function(v84){
        ((v84)["fname"] = "REVAPPEND");
        return v84;
    })((function (v82,v83){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        try {
                            return (function(){
                                return (function(){
                                    while(v82 !== l3.value){
                                        v83 = ({car: (function(){
                                            var tmp = v82;
                                            return tmp === l3.value? l3.value: tmp.car;
                                        })(), cdr: v83});
                                        v82 = (function(){
                                            var tmp = v82;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })();
                                    }return l3.value;
                                })();
                            })();
                        }
                        catch (cf){
                            if (cf.type == 'block' && cf.id == 37)
                                return cf.value;
                            else
                                throw cf;
                        }
                    })();
                    return v83;
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
    return l63;
})();
var l64 = {name: "REVERSE"};
(function(){
    (l64).function = (function(v86){
        ((v86)["fname"] = "REVERSE");
        return v86;
    })((function (v85){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l63.function(v85, l3);
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
    return l64;
})();
var l65 = {name: "LIST-LENGTH"};
(function(){
    (l65).function = (function(v89){
        ((v89)["fname"] = "LIST-LENGTH");
        return v89;
    })((function (v87){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v88){
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(l28.function(l11.function(v87)) !== l3.value){
                                            v88 = (function(){
                                                var x = v88;
                                                var y = 1;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                if (typeof y != 'number')
                                                    throw 'The value ' + y + ' is not a type number.';
                                                return x+y;
                                            })();
                                            v87 = (function(){
                                                var tmp = v87;
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
                        return v88;
                    })(0);
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
    return l65;
})();
var l66 = {name: "LENGTH"};
(function(){
    (l66).function = (function(v91){
        ((v91)["fname"] = "LENGTH");
        return v91;
    })((function (v90){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof(v90) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        var x = v90;
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return x.length;
                    })() : l65.function(v90));
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
var l67 = {name: "CONCAT-TWO"};
(function(){
    (l67).function = (function(v94){
        ((v94)["fname"] = "CONCAT-TWO");
        return v94;
    })((function (v92,v93){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var string1 = v92;
                        var string2 = v93;
                        if (typeof string1 != 'string')
                            throw 'The value ' + string1 + ' is not a type string.';
                        if (typeof string2 != 'string')
                            throw 'The value ' + string2 + ' is not a type string.';
                        return string1.concat(string2);
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
    
    }));
    return l67;
})();
var l68 = {name: "MAPCAR"};
(function(){
    (l68).function = (function(v97){
        ((v97)["fname"] = "MAPCAR");
        return v97;
    })((function (v95,v96){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.function(v96) !== l3.value ? l3 : ({car: (v95)((function(){
                        var tmp = v96;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()), cdr: l68.function(v95, (function(){
                        var tmp = v96;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())}));
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
    return l68;
})();
var l69 = {name: "IDENTITY"};
(function(){
    (l69).function = (function(v99){
        ((v99)["fname"] = "IDENTITY");
        return v99;
    })((function (v98){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return v98;
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
    return l69;
})();
var l70 = {name: "COPY-LIST"};
(function(){
    (l70).function = (function(v101){
        ((v101)["fname"] = "COPY-LIST");
        return v101;
    })((function (v100){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l68.function((function(){
                        var symbol = l69;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v100);
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
    return l70;
})();
var l71 = {name: "CODE-CHAR"};
(function(){
    (l71).function = (function(v103){
        ((v103)["fname"] = "CODE-CHAR");
        return v103;
    })((function (v102){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return v102;
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
    return l71;
})();
var l72 = {name: "CHAR-CODE"};
(function(){
    (l72).function = (function(v105){
        ((v105)["fname"] = "CHAR-CODE");
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
    return l72;
})();
var l73 = {name: "CHAR="};
(function(){
    (l73).function = (function(v108){
        ((v108)["fname"] = "CHAR=");
        return v108;
    })((function (v106,v107){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var x = v106;
                        var y = v107;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x==y;
                    })()?l4.value: l3.value);
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
    return l73;
})();
var l74 = {name: "INTEGERP"};
(function(){
    (l74).function = (function(v110){
        ((v110)["fname"] = "INTEGERP");
        return v110;
    })((function (v109){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof (v109) == "number")?l4.value: l3.value) !== l3.value ? ((function(){
                        var x = (function(){
                            var x = v109;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            return Math.floor(x);
                        })();
                        var y = v109;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x==y;
                    })()?l4.value: l3.value) : l3.value);
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
    return l74;
})();
var l75 = {name: "PLUSP"};
(function(){
    (l75).function = (function(v112){
        ((v112)["fname"] = "PLUSP");
        return v112;
    })((function (v111){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var x = 0;
                        var y = v111;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x<y;
                    })()?l4.value: l3.value);
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
    return l75;
})();
var l76 = {name: "MINUSP"};
(function(){
    (l76).function = (function(v114){
        ((v114)["fname"] = "MINUSP");
        return v114;
    })((function (v113){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var x = v113;
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
                if (cf.type == 'block' && cf.id == 51)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l76;
})();
(function(){
    (l59).function = (function(v117){
        ((v117)["fname"] = "LISTP");
        return v117;
    })((function (v115){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v116){
                        return (v116 !== l3.value ? v116 : l11.function(v115));
                    })(((function(){
                        var tmp = v115;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value));
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
    return l59;
})();
var l77 = {name: "NTHCDR"};
(function(){
    (l77).function = (function(v120){
        ((v120)["fname"] = "NTHCDR");
        return v120;
    })((function (v118,v119){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        try {
                            return (function(){
                                return (function(){
                                    while((l75.function(v118) !== l3.value ? v119 : l3.value) !== l3.value){
                                        v118 = l24.function(v118);
                                        v119 = (function(){
                                            var tmp = v119;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })();
                                    }return l3.value;
                                })();
                            })();
                        }
                        catch (cf){
                            if (cf.type == 'block' && cf.id == 54)
                                return cf.value;
                            else
                                throw cf;
                        }
                    })();
                    return v119;
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
var l78 = {name: "NTH"};
(function(){
    (l78).function = (function(v123){
        ((v123)["fname"] = "NTH");
        return v123;
    })((function (v121,v122){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = l77.function(v121, v122);
                        return tmp === l3.value? l3.value: tmp.car;
                    })();
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
var l79 = {name: "LAST"};
(function(){
    (l79).function = (function(v125){
        ((v125)["fname"] = "LAST");
        return v125;
    })((function (v124){
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
                                            var tmp = v124;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })();
                                        return (typeof tmp == 'object' && 'car' in tmp);
                                    })()?l4.value: l3.value) !== l3.value){
                                        v124 = (function(){
                                            var tmp = v124;
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
                    return v124;
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
    return l79;
})();
var l80 = {name: "BUTLAST"};
(function(){
    (l80).function = (function(v127){
        ((v127)["fname"] = "BUTLAST");
        return v127;
    })((function (v126){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = (function(){
                            var tmp = v126;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? ({car: (function(){
                        var tmp = v126;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), cdr: l80.function((function(){
                        var tmp = v126;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())}) : l3.value);
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
var l81 = {name: "MEMBER"};
(function(){
    (l81).function = (function(v130){
        ((v130)["fname"] = "MEMBER");
        return v130;
    })((function (v128,v129){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        try {
                            return (function(){
                                return (function(){
                                    while(v129 !== l3.value){
                                        (l27.function(v128, (function(){
                                            var tmp = v129;
                                            return tmp === l3.value? l3.value: tmp.car;
                                        })()) !== l3.value ? (function(){
                                            return (function(){
                                                throw ({type: 'block', id: 60, value: v129, message: 'Return from unknown block NIL.'})
                                            })();
                                        })() : l3.value);
                                        v129 = (function(){
                                            var tmp = v129;
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
    return l81;
})();
var l82 = {name: "REMOVE"};
(function(){
    (l82).function = (function(v133){
        ((v133)["fname"] = "REMOVE");
        return v133;
    })((function (v131,v132){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.function(v132) !== l3.value ? (function(){
                        return l3.value;
                    })() : (l27.function(v131, (function(){
                        var tmp = v132;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) !== l3.value ? (function(){
                        return l82.function(v131, (function(){
                            var tmp = v132;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : (function(){
                        return ({car: (function(){
                            var tmp = v132;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), cdr: l82.function(v131, (function(){
                            var tmp = v132;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })())});
                    })()));
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
var l83 = {name: "REMOVE-IF"};
(function(){
    (l83).function = (function(v136){
        ((v136)["fname"] = "REMOVE-IF");
        return v136;
    })((function (v134,v135){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.function(v135) !== l3.value ? (function(){
                        return l3.value;
                    })() : ((v134)((function(){
                        var tmp = v135;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) !== l3.value ? (function(){
                        return l83.function(v134, (function(){
                            var tmp = v135;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : (function(){
                        return ({car: (function(){
                            var tmp = v135;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), cdr: l83.function(v134, (function(){
                            var tmp = v135;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })())});
                    })()));
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
    return l83;
})();
var l84 = {name: "REMOVE-IF-NOT"};
(function(){
    (l84).function = (function(v139){
        ((v139)["fname"] = "REMOVE-IF-NOT");
        return v139;
    })((function (v137,v138){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.function(v138) !== l3.value ? (function(){
                        return l3.value;
                    })() : ((v137)((function(){
                        var tmp = v138;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) !== l3.value ? (function(){
                        return ({car: (function(){
                            var tmp = v138;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), cdr: l84.function(v137, (function(){
                            var tmp = v138;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })())});
                    })() : (function(){
                        return l84.function(v137, (function(){
                            var tmp = v138;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
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
    return l84;
})();
var l85 = {name: "DIGIT-CHAR-P"};
(function(){
    (l85).function = (function(v141){
        ((v141)["fname"] = "DIGIT-CHAR-P");
        return v141;
    })((function (v140){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((((function(){
                        var x = 48;
                        var y = v140;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x<=y;
                    })()?l4.value: l3.value) !== l3.value ? ((function(){
                        var x = v140;
                        var y = 57;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x<=y;
                    })()?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                        var x = v140;
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
                if (cf.type == 'block' && cf.id == 64)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l85;
})();
var l86 = {name: "SUBSEQ"};
(function(){
    (l86).function = (function(v145){
        ((v145)["fname"] = "SUBSEQ");
        return v145;
    })((function (v142,v143,v144){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        switch(arguments.length){
        case 2:
        v144=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (((typeof(v142) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return (v144 !== l3.value ? (function(){
                            var str = v142;
                            var a = v143;
                            var b;
                            b = v144;
                            return str.slice(a,b);
                        })() : (function(){
                            var str = v142;
                            var a = v143;
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
                if (cf.type == 'block' && cf.id == 65)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l86;
})();
var l87 = {name: "PARSE-INTEGER"};
(function(){
    (l87).function = (function(v150){
        ((v150)["fname"] = "PARSE-INTEGER");
        return v150;
    })((function (v146){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v147,v148,v149){
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(((function(){
                                            var x = v148;
                                            var y = v149;
                                            if (typeof x != 'number')
                                                throw 'The value ' + x + ' is not a type number.';
                                            if (typeof y != 'number')
                                                throw 'The value ' + y + ' is not a type number.';
                                            return x<y;
                                        })()?l4.value: l3.value) !== l3.value){
                                            v147 = (function(){
                                                var x = (function(){
                                                    var x = v147;
                                                    var y = 10;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x*y;
                                                })();
                                                var y = l85.function((function(){
                                                    var string = v146;
                                                    var index = v148;
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
                                            v148 = (function(){
                                                var x = v148;
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
                                if (cf.type == 'block' && cf.id == 67)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v147;
                    })(0,0,l66.function(v146));
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
    return l87;
})();
var l88 = {name: "SOME"};
(function(){
    (l88).function = (function(v157){
        ((v157)["fname"] = "SOME");
        return v157;
    })((function (v151,v152){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof(v152) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v153,v154){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(((function(){
                                                var x = v153;
                                                var y = v154;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                if (typeof y != 'number')
                                                    throw 'The value ' + y + ' is not a type number.';
                                                return x<y;
                                            })()?l4.value: l3.value) !== l3.value){
                                                ((v151)((function(){
                                                    var string = v152;
                                                    var index = v153;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })()) !== l3.value ? (function(){
                                                    return (function(){
                                                        throw ({type: 'block', id: 68, value: l4.value, message: 'Return from unknown block SOME.'})
                                                    })();
                                                })() : l3.value);
                                                v153 = (function(){
                                                    var x = v153;
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
                                    if (cf.type == 'block' && cf.id == 69)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return l3.value;
                        })(0,l66.function(v152));
                    })() : (l59.function(v152) !== l3.value ? (function(){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v155,v156){
                                        (function(){
                                            while(v155 !== l3.value){
                                                v156 = (function(){
                                                    var tmp = v155;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    ((v151)(v156) !== l3.value ? (function(){
                                                        return (function(){
                                                            throw ({type: 'block', id: 70, value: l4.value, message: 'Return from unknown block NIL.'})
                                                        })();
                                                    })() : l3.value);
                                                    return l3.value;
                                                })();
                                                v155 = (function(){
                                                    var tmp = v155;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return l3.value;
                                    })(v152,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 70)
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
                if (cf.type == 'block' && cf.id == 68)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l88;
})();
var l89 = {name: "EVERY"};
(function(){
    (l89).function = (function(v164){
        ((v164)["fname"] = "EVERY");
        return v164;
    })((function (v158,v159){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof(v159) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v160,v161){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(((function(){
                                                var x = v160;
                                                var y = v161;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                if (typeof y != 'number')
                                                    throw 'The value ' + y + ' is not a type number.';
                                                return x<y;
                                            })()?l4.value: l3.value) !== l3.value){
                                                ((v158)((function(){
                                                    var string = v159;
                                                    var index = v160;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })()) !== l3.value ? l3.value : (function(){
                                                    return (function(){
                                                        throw ({type: 'block', id: 71, value: l3.value, message: 'Return from unknown block EVERY.'})
                                                    })();
                                                })());
                                                v160 = (function(){
                                                    var x = v160;
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
                            return l4.value;
                        })(0,l66.function(v159));
                    })() : (l59.function(v159) !== l3.value ? (function(){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v162,v163){
                                        (function(){
                                            while(v162 !== l3.value){
                                                v163 = (function(){
                                                    var tmp = v162;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    ((v158)(v163) !== l3.value ? l3.value : (function(){
                                                        return (function(){
                                                            throw ({type: 'block', id: 73, value: l3.value, message: 'Return from unknown block NIL.'})
                                                        })();
                                                    })());
                                                    return l3.value;
                                                })();
                                                v162 = (function(){
                                                    var tmp = v162;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return l4.value;
                                    })(v159,l3.value);
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
    return l89;
})();
var l90 = {name: "ASSOC"};
(function(){
    (l90).function = (function(v167){
        ((v167)["fname"] = "ASSOC");
        return v167;
    })((function (v165,v166){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        try {
                            return (function(){
                                return (function(){
                                    while(v166 !== l3.value){
                                        (l27.function(v165, l33.function(v166)) !== l3.value ? (function(){
                                            throw ({type: 'block', id: 75, value: l3.value, message: 'Return from unknown block NIL.'})
                                        })() : v166 = (function(){
                                            var tmp = v166;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })());
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
                    return (function(){
                        var tmp = v166;
                        return tmp === l3.value? l3.value: tmp.car;
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
    
    }));
    return l90;
})();
var l91 = {name: "STRING"};
(function(){
    (l91).function = (function(v169){
        ((v169)["fname"] = "STRING");
        return v169;
    })((function (v168){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof(v168) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return v168;
                    })() : (((function(){
                        var tmp = v168;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (v168).name;
                    })() : (function(){
                        return (function(){
                            var x = v168;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            return String.fromCharCode(x);
                        })();
                    })()));
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
var l92 = {name: "STRING="};
(function(){
    (l92).function = (function(v172){
        ((v172)["fname"] = "STRING=");
        return v172;
    })((function (v170,v171){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((v170 == v171)?l4.value: l3.value);
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
    return l92;
})();
var l93 = {name: "FDEFINITION"};
(function(){
    (l93).function = (function(v174){
        ((v174)["fname"] = "FDEFINITION");
        return v174;
    })((function (v173){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof v173 == 'function')?l4.value: l3.value) !== l3.value ? (function(){
                        return v173;
                    })() : (((function(){
                        var tmp = v173;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(){
                            var symbol = v173;
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
                if (cf.type == 'block' && cf.id == 78)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l93;
})();
var l94 = {name: "DISASSEMBLE"};
var l95 = {name: "WRITE-LINE"};
(function(){
    (l94).function = (function(v176){
        ((v176)["fname"] = "DISASSEMBLE");
        return v176;
    })((function (v175){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var symbol = l95;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((l93.function(v175)).toString());
                    return l3.value;
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
    return l94;
})();
var l96 = {name: "DOCUMENTATION"};
var l97 = {name: "FUNCTION"};
var l98 = {name: "VARIABLE"};
(function(){
    (l96).function = (function(v181){
        ((v181)["fname"] = "DOCUMENTATION");
        return v181;
    })((function(){
        var func = (function (v177,v178){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v179){
                            return (l27.function(v179, l97) !== l3.value ? (function(){
                                return (function(v180){
                                    return (function(){
                                        var tmp = (v180)["docstring"];
                                        return tmp == undefined? l3.value: tmp ;
                                    })();
                                })(l93.function(v177));
                            })() : (l27.function(v179, l98) !== l3.value ? (function(){
                                (((function(){
                                    var tmp = v177;
                                    return (typeof tmp == 'object' && 'name' in tmp);
                                })()?l4.value: l3.value) !== l3.value ? l3.value : (function(){
                                    return (function(){
                                        throw "Wrong argument type! it should be a symbol";
                                    })();
                                })());
                                return (function(){
                                    var tmp = (v177)["vardoc"];
                                    return tmp == undefined? l3.value: tmp ;
                                })();
                            })() : (function(){
                                return (function(){
                                    throw "ECASE expression failed.";
                                })();
                            })()));
                        })(v178);
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 80)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        
        });
        func.docstring = 'Return the documentation of X. TYPE must be the symbol VARIABLE or FUNCTION.';
        return func;
    })());
    return l96;
})();
var l99 = {name: "*PACKAGE-LIST*"};
(function(){
    (((l99.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l99).value = l3.value;
    })());
    return l99;
})();
var l100 = {name: "MAKE-PACKAGE"};
var l101 = {name: "FIND-PACKAGE-OR-FAIL"};
(function(){
    (l100).function = (function(v186){
        ((v186)["fname"] = "MAKE-PACKAGE");
        return v186;
    })((function (v182,v183){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v183=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (function(v184,v185){
                        ((v184)["packageName"] = v182);
                        ((v184)["symbols"] = {});
                        ((v184)["exports"] = {});
                        ((v184)["use"] = v185);
                        (l99).value = ({car: v184, cdr: (function(){
                            var symbol = l99;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()});
                        return v184;
                    })({},l68.function((function(){
                        var symbol = l101;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v183));
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
    return l100;
})();
var l102 = {name: "PACKAGEP"};
(function(){
    (l102).function = (function(v188){
        ((v188)["fname"] = "PACKAGEP");
        return v188;
    })((function (v187){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof (v187) === 'object')?l4.value: l3.value) !== l3.value ? ((("symbols") in (v187))?l4.value: l3.value) : l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 82)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l102;
})();
var l103 = {name: "FIND-PACKAGE"};
var l104 = {name: "PACKAGE-NAME"};
(function(){
    (l103).function = (function(v193){
        ((v193)["fname"] = "FIND-PACKAGE");
        return v193;
    })((function (v189){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (l102.function(v189) !== l3.value ? (function(){
                        return (function(){
                            throw ({type: 'block', id: 83, value: v189, message: 'Return from unknown block FIND-PACKAGE.'})
                        })();
                    })() : l3.value);
                    return (function(v190){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v191,v192){
                                        (function(){
                                            while(v191 !== l3.value){
                                                v192 = (function(){
                                                    var tmp = v191;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    (l92.function((function(){
                                                        var symbol = l104;
                                                        var func = symbol.function;
                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                        return func;
                                                    })()(v192), v190) !== l3.value ? (function(){
                                                        return (function(){
                                                            throw ({type: 'block', id: 84, value: v192, message: 'Return from unknown block NIL.'})
                                                        })();
                                                    })() : l3.value);
                                                    return l3.value;
                                                })();
                                                v191 = (function(){
                                                    var tmp = v191;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return l3.value;
                                    })((function(){
                                        var symbol = l99;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })(),l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 84)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l91.function(v189));
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
(function(){
    (l101).function = (function(v196){
        ((v196)["fname"] = "FIND-PACKAGE-OR-FAIL");
        return v196;
    })((function (v194){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v195){
                        return (v195 !== l3.value ? v195 : (function(){
                            throw "Package unknown.";
                        })());
                    })(l103.function(v194));
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
    return l101;
})();
(function(){
    (l104).function = (function(v199){
        ((v199)["fname"] = "PACKAGE-NAME");
        return v199;
    })((function (v197){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v198){
                        return (function(){
                            var tmp = (v198)["packageName"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })(l101.function(v197));
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
    return l104;
})();
var l105 = {name: "%PACKAGE-SYMBOLS"};
(function(){
    (l105).function = (function(v202){
        ((v202)["fname"] = "%PACKAGE-SYMBOLS");
        return v202;
    })((function (v200){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v201){
                        return (function(){
                            var tmp = (v201)["symbols"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })(l101.function(v200));
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
    return l105;
})();
var l106 = {name: "PACKAGE-USE-LIST"};
(function(){
    (l106).function = (function(v205){
        ((v205)["fname"] = "PACKAGE-USE-LIST");
        return v205;
    })((function (v203){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v204){
                        return (function(){
                            var tmp = (v204)["use"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })(l101.function(v203));
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
    return l106;
})();
var l107 = {name: "%PACKAGE-EXTERNAL-SYMBOLS"};
(function(){
    (l107).function = (function(v208){
        ((v208)["fname"] = "%PACKAGE-EXTERNAL-SYMBOLS");
        return v208;
    })((function (v206){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v207){
                        return (function(){
                            var tmp = (v207)["exports"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })(l101.function(v206));
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
    return l107;
})();
var l108 = {name: "*COMMON-LISP-PACKAGE*"};
(function(){
    (((l108.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l108).value = l100.function("CL");
    })());
    return l108;
})();
var l109 = {name: "*USER-PACKAGE*"};
(function(){
    (((l109.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l109).value = l100.function("CL-USER", l44.function((function(){
            var symbol = l108;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()));
    })());
    return l109;
})();
var l110 = {name: "*PACKAGE*"};
(function(){
    (((l110.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l110).value = (function(){
            var symbol = l108;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
    })());
    return l110;
})();
var l111 = {name: "IN-PACKAGE"};
l111;
var l112 = {name: "%INTERN-SYMBOL"};
(function(){
    (l112).function = (function(v211){
        ((v211)["fname"] = "%INTERN-SYMBOL");
        return v211;
    })((function (v209){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v210){
                        ((v209)["package"] = (function(){
                            var symbol = l108;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                        return ((v210)[(v209).name] = v209);
                    })(l105.function((function(){
                        var symbol = l108;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
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
    return l112;
})();
var l113 = {name: "%FIND-SYMBOL"};
(function(){
    (l113).function = (function(v218){
        ((v218)["fname"] = "%FIND-SYMBOL");
        return v218;
    })((function (v212,v213){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v214){
                        return (function(v215){
                            return ((((v212) in (v215))?l4.value: l3.value) !== l3.value ? ({car: (function(){
                                var tmp = (v215)[v212];
                                return tmp == undefined? l3.value: tmp ;
                            })(), cdr: l4.value}) : (function(){
                                try {
                                    return (function(){
                                        return (function(v216,v217){
                                            (function(){
                                                while(v216 !== l3.value){
                                                    v217 = (function(){
                                                        var tmp = v216;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
                                                    (function(){
                                                        return l3.value;
                                                    })();
                                                    v216 = (function(){
                                                        var tmp = v216;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
                                                }return l3.value;
                                            })();
                                            return ({car: l3.value, cdr: l3.value});
                                        })(l106.function(v214),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 92)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })());
                        })(l105.function(v214));
                    })(l101.function(v213));
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
    return l113;
})();
var l114 = {name: "FIND-SYMBOL"};
(function(){
    (l114).function = (function(v221){
        ((v221)["fname"] = "FIND-SYMBOL");
        return v221;
    })((function (v219,v220){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v220=(function(){
            var symbol = l110;
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
                        var tmp = l113.function(v219, v220);
                        return tmp === l3.value? l3.value: tmp.car;
                    })();
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
    return l114;
})();
var l115 = {name: "INTERN"};
(function(){
    (l115).function = (function(v227){
        ((v227)["fname"] = "INTERN");
        return v227;
    })((function (v222,v223){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v223=(function(){
            var symbol = l110;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (function(v224){
                        return ((function(){
                            var tmp = v224;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })() !== l3.value ? (function(){
                            var tmp = v224;
                            return tmp === l3.value? l3.value: tmp.car;
                        })() : (function(v225){
                            (function(){
                                var tmp = (v225)[v222];
                                return tmp == undefined? l3.value: tmp ;
                            })();
                            return (function(v226){
                                ((v226)["package"] = v223);
                                return ((v225)[v222] = v226);
                            })((function(){
                                var name = v222;
                                if (typeof name != 'string')
                                    throw 'The value ' + name + ' is not a type string.';
                                return ({name: name});
                            })());
                        })(l105.function(v223)));
                    })(l113.function(v222, v223));
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
    return l115;
})();
var l116 = {name: "SYMBOL-PACKAGE"};
(function(){
    (l116).function = (function(v229){
        ((v229)["fname"] = "SYMBOL-PACKAGE");
        return v229;
    })((function (v228){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (((function(){
                        var tmp = v228;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? l3.value : (function(){
                        return (function(){
                            throw "it is not a symbol";
                        })();
                    })());
                    return (function(){
                        var tmp = (v228)["package"];
                        return tmp == undefined? l3.value: tmp ;
                    })();
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
    return l116;
})();
var l117 = {name: "EXPORT"};
(function(){
    (l117).function = (function(v235){
        ((v235)["fname"] = "EXPORT");
        return v235;
    })((function (v230,v231){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v231=(function(){
            var symbol = l110;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (function(v232){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v233,v234){
                                        (function(){
                                            while(v233 !== l3.value){
                                                v234 = (function(){
                                                    var tmp = v233;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    ((v232)[(v234).name] = v234);
                                                    return l3.value;
                                                })();
                                                v233 = (function(){
                                                    var tmp = v233;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return l4.value;
                                    })(v230,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 97)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l107.function(v231));
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
    return l117;
})();
var l118 = {name: "*NEWLINE*"};
(function(){
    (((l118.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l118).value = l91.function(l71.function(10));
    })());
    return l118;
})();
var l119 = {name: "CONCAT"};
(function(){
    (l119).function = (function(v237){
        ((v237)["fname"] = "CONCAT");
        return v237;
    })((function (){
        var v236= l3.value;
        for (var i = arguments.length-1; i>=0; i--)
            v236 = {car: arguments[i], cdr: 
        v236};
        return (function(){
            try {
                return (function(){
                    return l60.function((function(){
                        var symbol = l67;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v236, "");
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
    return l119;
})();
var l120 = {name: "CONCATF"};
l120;
var l121 = {name: "JOIN"};
(function(){
    (l121).function = (function(v240){
        ((v240)["fname"] = "JOIN");
        return v240;
    })((function (v238,v239){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v239="";
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (l11.function(v238) !== l3.value ? (function(){
                        return "";
                    })() : (l11.function((function(){
                        var tmp = v238;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()) !== l3.value ? (function(){
                        return (function(){
                            var tmp = v238;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })() : (function(){
                        return l119.function((function(){
                            var tmp = v238;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), v239, l121.function((function(){
                            var tmp = v238;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), v239));
                    })()));
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
    return l121;
})();
var l122 = {name: "JOIN-TRAILING"};
(function(){
    (l122).function = (function(v243){
        ((v243)["fname"] = "JOIN-TRAILING");
        return v243;
    })((function (v241,v242){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v242="";
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (l11.function(v241) !== l3.value ? "" : l119.function((function(){
                        var tmp = v241;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), v242, l122.function((function(){
                        var tmp = v241;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })(), v242)));
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
    return l122;
})();
var l123 = {name: "MAPCONCAT"};
(function(){
    (l123).function = (function(v246){
        ((v246)["fname"] = "MAPCONCAT");
        return v246;
    })((function (v244,v245){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l121.function(l68.function(v244, v245));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 101)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l123;
})();
var l124 = {name: "INDENT"};
(function(){
    (l124).function = (function(v253){
        ((v253)["fname"] = "INDENT");
        return v253;
    })((function (){
        var v247= l3.value;
        for (var i = arguments.length-1; i>=0; i--)
            v247 = {car: arguments[i], cdr: 
        v247};
        return (function(){
            try {
                return (function(){
                    return (function(v248){
                        return (function(v249,v250,v251){
                            (l75.function(l66.function(v248)) !== l3.value ? (function(){
                                return v249 = l119.function(v249, (function(){
                                    return "    ";
                                })());
                            })() : l3.value);
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(((function(){
                                                var x = v250;
                                                var y = v251;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                if (typeof y != 'number')
                                                    throw 'The value ' + y + ' is not a type number.';
                                                return x<y;
                                            })()?l4.value: l3.value) !== l3.value){
                                                (function(v252){
                                                    return v249 = l119.function(v249, (function(){
                                                        return v252;
                                                    })());
                                                })(((l73.function((function(){
                                                    var string = v248;
                                                    var index = v250;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })(), 10) !== l3.value ? (((function(){
                                                    var x = v250;
                                                    var y = l24.function(v251);
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x<y;
                                                })()?l4.value: l3.value) !== l3.value ? l28.function(l73.function((function(){
                                                    var string = v248;
                                                    var index = l23.function(v250);
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })(), 10)) : l3.value) : l3.value) !== l3.value ? l119.function(l91.function(10), "    ") : l91.function((function(){
                                                    var string = v248;
                                                    var index = v250;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })())));
                                                v250 = (function(){
                                                    var x = v250;
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
                                    if (cf.type == 'block' && cf.id == 103)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return v249;
                        })("",0,l66.function(v248));
                    })(l121.function(v247));
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
    return l124;
})();
(function(){
    (l16).function = (function(v257){
        ((v257)["fname"] = "INTEGER-TO-STRING");
        return v257;
    })((function (v254){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l25.function(v254) !== l3.value ? (function(){
                        return "0";
                    })() : (l76.function(v254) !== l3.value ? (function(){
                        return l119.function("-", l16.function((function(){
                            var x = 0;
                            var y = v254;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x-y;
                        })()));
                    })() : (function(){
                        return (function(v255){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(l28.function(l25.function(v254)) !== l3.value){
                                                v255 = ({car: (function(){
                                                    var x = v254;
                                                    var y = 10;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x%y;
                                                })(), cdr: v255});
                                                v254 = l26.function(v254, 10);
                                            }return l3.value;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 105)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return l121.function(l68.function((function (v256){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return l91.function((function(){
                                    var string = "0123456789";
                                    var index = v256;
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    if (typeof index != 'number')
                                        throw 'The value ' + index + ' is not a type number.';
                                    return string.charCodeAt(index);
                                })());
                            
                            }), v255));
                        })(l3.value);
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
    return l16;
})();
var l125 = {name: "JS!BOOL"};
var l126 = {name: "LS-COMPILE"};
(function(){
    (l125).function = (function(v259){
        ((v259)["fname"] = "JS!BOOL");
        return v259;
    })((function (v258){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l119.function("(", v258, "?", (function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l4.value), ": ", (function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l3.value), ")");
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
    return l125;
})();
var l127 = {name: "JS!SELFCALL"};
l127;
var l128 = {name: "PRIN1-TO-STRING"};
var l129 = {name: "ESCAPE-STRING"};
(function(){
    (l128).function = (function(v263){
        ((v263)["fname"] = "PRIN1-TO-STRING");
        return v263;
    })((function (v260){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v260;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (v260).name;
                    })() : (l74.function(v260) !== l3.value ? (function(){
                        return l16.function(v260);
                    })() : (((typeof(v260) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l119.function("\"", (function(){
                            var symbol = l129;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v260), "\"");
                    })() : (((typeof v260 == 'function')?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v261){
                            return (v261 !== l3.value ? l119.function("#<FUNCTION ", v261, ">") : l119.function("#<FUNCTION>"));
                        })((function(){
                            var tmp = (v260)["fname"];
                            return tmp == undefined? l3.value: tmp ;
                        })());
                    })() : (l59.function(v260) !== l3.value ? (function(){
                        return l119.function("(", l122.function(l68.function((function(){
                            var symbol = l128;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l80.function(v260)), " "), (function(v262){
                            return (l11.function((function(){
                                var tmp = v262;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })()) !== l3.value ? l128.function((function(){
                                var tmp = v262;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()) : l119.function(l128.function((function(){
                                var tmp = v262;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()), " . ", l128.function((function(){
                                var tmp = v262;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })())));
                        })(l79.function(v260)), ")");
                    })() : (l102.function(v260) !== l3.value ? (function(){
                        return l119.function("#<PACKAGE ", l104.function(v260), ">");
                    })() : l3.value))))));
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
    return l128;
})();
(function(){
    (l95).function = (function(v265){
        ((v265)["fname"] = "WRITE-LINE");
        return v265;
    })((function (v264){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var x = v264;
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return lisp.write(x);
                    })();
                    (function(){
                        var x = (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })();
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return lisp.write(x);
                    })();
                    return v264;
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
    return l95;
})();
var l130 = {name: "WARN"};
(function(){
    (l130).function = (function(v267){
        ((v267)["fname"] = "WARN");
        return v267;
    })((function (v266){
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
                    return l95.function(v266);
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
var l131 = {name: "PRINT"};
(function(){
    (l131).function = (function(v269){
        ((v269)["fname"] = "PRINT");
        return v269;
    })((function (v268){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l95.function(l128.function(v268));
                    return v268;
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
    return l131;
})();
var l132 = {name: "MAKE-STRING-STREAM"};
(function(){
    (l132).function = (function(v271){
        ((v271)["fname"] = "MAKE-STRING-STREAM");
        return v271;
    })((function (v270){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ({car: v270, cdr: 0});
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
    return l132;
})();
var l133 = {name: "%PEEK-CHAR"};
(function(){
    (l133).function = (function(v273){
        ((v273)["fname"] = "%PEEK-CHAR");
        return v273;
    })((function (v272){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var x = (function(){
                            var tmp = v272;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        var y = l66.function((function(){
                            var tmp = v272;
                            return tmp === l3.value? l3.value: tmp.car;
                        })());
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x<y;
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        var string = (function(){
                            var tmp = v272;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        var index = (function(){
                            var tmp = v272;
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
                if (cf.type == 'block' && cf.id == 112)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l133;
})();
var l134 = {name: "%READ-CHAR"};
(function(){
    (l134).function = (function(v276){
        ((v276)["fname"] = "%READ-CHAR");
        return v276;
    })((function (v274){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var x = (function(){
                            var tmp = v274;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        var y = l66.function((function(){
                            var tmp = v274;
                            return tmp === l3.value? l3.value: tmp.car;
                        })());
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x<y;
                    })()?l4.value: l3.value) !== l3.value ? (function(v275){
                        (function(){
                            var x = v274;
                            if (typeof x != 'object')
                                throw 'The value ' + x + ' is not a type object.';
                            return (x.cdr = l23.function((function(){
                                var tmp = v274;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })()));
                        })();
                        return v275;
                    })((function(){
                        var string = (function(){
                            var tmp = v274;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        var index = (function(){
                            var tmp = v274;
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
                if (cf.type == 'block' && cf.id == 113)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l134;
})();
var l135 = {name: "WHITESPACEP"};
(function(){
    (l135).function = (function(v280){
        ((v280)["fname"] = "WHITESPACEP");
        return v280;
    })((function (v277){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v278){
                        return (v278 !== l3.value ? v278 : (function(v279){
                            return (v279 !== l3.value ? v279 : l73.function(v277, 9));
                        })(l73.function(v277, 10)));
                    })(l73.function(v277, 32));
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
    return l135;
})();
var l136 = {name: "SKIP-WHITESPACES"};
(function(){
    (l136).function = (function(v283){
        ((v283)["fname"] = "SKIP-WHITESPACES");
        return v283;
    })((function (v281){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v282){
                        v282 = l133.function(v281);
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v282 !== l3.value ? l135.function(v282) : l3.value) !== l3.value){
                                            l134.function(v281);
                                            v282 = l133.function(v281);
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
                    })(l3.value);
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
    return l136;
})();
var l137 = {name: "TERMINALP"};
(function(){
    (l137).function = (function(v288){
        ((v288)["fname"] = "TERMINALP");
        return v288;
    })((function (v284){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v285){
                        return (v285 !== l3.value ? v285 : (function(v286){
                            return (v286 !== l3.value ? v286 : (function(v287){
                                return (v287 !== l3.value ? v287 : l73.function(40, v284));
                            })(l73.function(41, v284)));
                        })(l135.function(v284)));
                    })(l11.function(v284));
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
    return l137;
})();
var l138 = {name: "READ-UNTIL"};
(function(){
    (l138).function = (function(v293){
        ((v293)["fname"] = "READ-UNTIL");
        return v293;
    })((function (v289,v290){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v291,v292){
                        v292 = l133.function(v289);
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v292 !== l3.value ? l28.function((v290)(v292)) : l3.value) !== l3.value){
                                            v291 = l119.function(v291, l91.function(v292));
                                            l134.function(v289);
                                            v292 = l133.function(v289);
                                        }return l3.value;
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
                        return v291;
                    })("",l3.value);
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
    return l138;
})();
var l139 = {name: "SKIP-WHITESPACES-AND-COMMENTS"};
(function(){
    (l139).function = (function(v297){
        ((v297)["fname"] = "SKIP-WHITESPACES-AND-COMMENTS");
        return v297;
    })((function (v294){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v295){
                        l136.function(v294);
                        v295 = l133.function(v294);
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v295 !== l3.value ? l73.function(v295, 59) : l3.value) !== l3.value){
                                            l138.function(v294, (function (v296){
                                                if (arguments.length < 1) throw 'too few arguments';
                                                if (arguments.length > 1) throw 'too many arguments';
                                                return l73.function(v296, 10);
                                            
                                            }));
                                            l136.function(v294);
                                            v295 = l133.function(v294);
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 121)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l3.value);
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
    return l139;
})();
var l140 = {name: "%READ-LIST"};
var l141 = {name: "LS-READ"};
(function(){
    (l140).function = (function(v301){
        ((v301)["fname"] = "%READ-LIST");
        return v301;
    })((function (v298){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l139.function(v298);
                    return (function(v299){
                        return (l11.function(v299) !== l3.value ? (function(){
                            return (function(){
                                throw "Unspected EOF";
                            })();
                        })() : (l73.function(v299, 41) !== l3.value ? (function(){
                            l134.function(v298);
                            return l3.value;
                        })() : (l73.function(v299, 46) !== l3.value ? (function(){
                            l134.function(v298);
                            return (function(v300){
                                l139.function(v298);
                                (l73.function(l134.function(v298), 41) !== l3.value ? l3.value : (function(){
                                    return (function(){
                                        throw "')' was expected.";
                                    })();
                                })());
                                return v300;
                            })((function(){
                                var symbol = l141;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v298));
                        })() : (function(){
                            return ({car: (function(){
                                var symbol = l141;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v298), cdr: l140.function(v298)});
                        })())));
                    })(l133.function(v298));
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
    return l140;
})();
var l142 = {name: "READ-STRING"};
(function(){
    (l142).function = (function(v305){
        ((v305)["fname"] = "READ-STRING");
        return v305;
    })((function (v302){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v303,v304){
                        v304 = l134.function(v302);
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(l28.function(l27.function(v304, 34)) !== l3.value){
                                            (l11.function(v304) !== l3.value ? (function(){
                                                return (function(){
                                                    throw "Unexpected EOF";
                                                })();
                                            })() : l3.value);
                                            (l27.function(v304, 92) !== l3.value ? (function(){
                                                return v304 = l134.function(v302);
                                            })() : l3.value);
                                            v303 = l119.function(v303, l91.function(v304));
                                            v304 = l134.function(v302);
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 124)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v303;
                    })("",l3.value);
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
    return l142;
})();
var l143 = {name: "READ-SHARP"};
(function(){
    (l143).function = (function(v310){
        ((v310)["fname"] = "READ-SHARP");
        return v310;
    })((function (v306){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l134.function(v306);
                    return (function(v307){
                        return (l27.function(v307, 39) !== l3.value ? (function(){
                            return l44.function(l97, (function(){
                                var symbol = l141;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v306));
                        })() : (l27.function(v307, 92) !== l3.value ? (function(){
                            return (function(v308){
                                return (l92.function(v308, "space") !== l3.value ? (function(){
                                    return l72.function(32);
                                })() : (l92.function(v308, "tab") !== l3.value ? (function(){
                                    return l72.function(9);
                                })() : (l92.function(v308, "newline") !== l3.value ? (function(){
                                    return l72.function(10);
                                })() : (function(){
                                    return l72.function((function(){
                                        var string = v308;
                                        var index = 0;
                                        if (typeof string != 'string')
                                            throw 'The value ' + string + ' is not a type string.';
                                        if (typeof index != 'number')
                                            throw 'The value ' + index + ' is not a type number.';
                                        return string.charCodeAt(index);
                                    })());
                                })())));
                            })(l119.function(l91.function(l134.function(v306)), l138.function(v306, (function(){
                                var symbol = l137;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })())));
                        })() : (l27.function(v307, 43) !== l3.value ? (function(){
                            return (function(v309){
                                return (l92.function(v309, "common-lisp") !== l3.value ? (function(){
                                    (function(){
                                        var symbol = l141;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v306);
                                    return (function(){
                                        var symbol = l141;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v306);
                                })() : (l92.function(v309, "ecmalisp") !== l3.value ? (function(){
                                    return (function(){
                                        var symbol = l141;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v306);
                                })() : (function(){
                                    return (function(){
                                        throw "Unknown reader form.";
                                    })();
                                })()));
                            })(l138.function(v306, (function(){
                                var symbol = l137;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()));
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })())));
                    })(l134.function(v306));
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
    return l143;
})();
var l144 = {name: "READ-SYMBOL"};
(function(){
    (l144).function = (function(v317){
        ((v317)["fname"] = "READ-SYMBOL");
        return v317;
    })((function (v311){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v312,v313,v314,v315,v316){
                        v316 = 0;
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((((function(){
                                            var x = v316;
                                            var y = v312;
                                            if (typeof x != 'number')
                                                throw 'The value ' + x + ' is not a type number.';
                                            if (typeof y != 'number')
                                                throw 'The value ' + y + ' is not a type number.';
                                            return x<y;
                                        })()?l4.value: l3.value) !== l3.value ? l28.function(l73.function((function(){
                                            var string = v311;
                                            var index = v316;
                                            if (typeof string != 'string')
                                                throw 'The value ' + string + ' is not a type string.';
                                            if (typeof index != 'number')
                                                throw 'The value ' + index + ' is not a type number.';
                                            return string.charCodeAt(index);
                                        })(), 58)) : l3.value) !== l3.value){
                                            v316 = (function(){
                                                var x = v316;
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
                                if (cf.type == 'block' && cf.id == 127)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        (((function(){
                            var x = v316;
                            var y = v312;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x==y;
                        })()?l4.value: l3.value) !== l3.value ? (function(){
                            v314 = v311;
                            v313 = (function(){
                                var symbol = l110;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })();
                            return v315 = l4.value;
                        })() : (function(){
                            (l25.function(v316) !== l3.value ? v313 = "KEYWORD" : v313 = (function(){
                                var x = l86.function(v311, 0, v316);
                                if (typeof x != 'string')
                                    throw 'The value ' + x + ' is not a type string.';
                                return x.toUpperCase();
                            })());
                            v316 = (function(){
                                var x = v316;
                                var y = 1;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })();
                            (l73.function((function(){
                                var string = v311;
                                var index = v316;
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })(), 58) !== l3.value ? (function(){
                                v315 = l4.value;
                                return v316 = (function(){
                                    var x = v316;
                                    var y = 1;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    if (typeof y != 'number')
                                        throw 'The value ' + y + ' is not a type number.';
                                    return x+y;
                                })();
                            })() : l3.value);
                            return v314 = l86.function(v311, v316);
                        })());
                        v314 = (function(){
                            var x = v314;
                            if (typeof x != 'string')
                                throw 'The value ' + x + ' is not a type string.';
                            return x.toUpperCase();
                        })();
                        v313 = l103.function(v313);
                        return l115.function(v314, v313);
                    })(l66.function(v311),l3.value,l3.value,l3.value,l3.value);
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
    return l144;
})();
var l145 = {name: "*EOF*"};
(function(){
    (((l145.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l145).value = l15.function();
    })());
    return l145;
})();
var l146 = {name: "QUOTE"};
var l147 = {name: "BACKQUOTE"};
var l148 = {name: "UNQUOTE-SPLICING"};
var l149 = {name: "UNQUOTE"};
(function(){
    (l141).function = (function(v322){
        ((v322)["fname"] = "LS-READ");
        return v322;
    })((function (v318){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l139.function(v318);
                    return (function(v319){
                        return ((function(v320){
                            return (v320 !== l3.value ? v320 : l73.function(v319, 41));
                        })(l11.function(v319)) !== l3.value ? (function(){
                            return (function(){
                                var symbol = l145;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })();
                        })() : (l73.function(v319, 40) !== l3.value ? (function(){
                            l134.function(v318);
                            return l140.function(v318);
                        })() : (l73.function(v319, 39) !== l3.value ? (function(){
                            l134.function(v318);
                            return l44.function(l146, l141.function(v318));
                        })() : (l73.function(v319, 96) !== l3.value ? (function(){
                            l134.function(v318);
                            return l44.function(l147, l141.function(v318));
                        })() : (l73.function(v319, 34) !== l3.value ? (function(){
                            l134.function(v318);
                            return l142.function(v318);
                        })() : (l73.function(v319, 44) !== l3.value ? (function(){
                            l134.function(v318);
                            return (l27.function(l133.function(v318), 64) !== l3.value ? (function(){
                                l134.function(v318);
                                return l44.function(l148, l141.function(v318));
                            })() : l44.function(l149, l141.function(v318)));
                        })() : (l73.function(v319, 35) !== l3.value ? (function(){
                            return l143.function(v318);
                        })() : (function(){
                            return (function(v321){
                                return (l89.function((function(){
                                    var symbol = l85;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })(), v321) !== l3.value ? l87.function(v321) : l144.function(v321));
                            })(l138.function(v318, (function(){
                                var symbol = l137;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()));
                        })())))))));
                    })(l133.function(v318));
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
    return l141;
})();
var l150 = {name: "LS-READ-FROM-STRING"};
(function(){
    (l150).function = (function(v324){
        ((v324)["fname"] = "LS-READ-FROM-STRING");
        return v324;
    })((function (v323){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l141.function(l132.function(v323));
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
    return l150;
})();
var l151 = {name: "*COMPILATION-UNIT-CHECKS*"};
(function(){
    (((l151.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l151).value = l3;
    })());
    return l151;
})();
var l152 = {name: "MAKE-BINDING"};
(function(){
    (l152).function = (function(v329){
        ((v329)["fname"] = "MAKE-BINDING");
        return v329;
    })((function (v325,v326,v327,v328){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 4) throw 'too many arguments';
        switch(arguments.length){
        case 3:
        v328=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return l44.function(v325, v326, v327, v328);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 130)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l152;
})();
var l153 = {name: "BINDING-NAME"};
(function(){
    (l153).function = (function(v331){
        ((v331)["fname"] = "BINDING-NAME");
        return v331;
    })((function (v330){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l40.function(v330);
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
    return l153;
})();
var l154 = {name: "BINDING-TYPE"};
(function(){
    (l154).function = (function(v333){
        ((v333)["fname"] = "BINDING-TYPE");
        return v333;
    })((function (v332){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l41.function(v332);
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
    return l154;
})();
var l155 = {name: "BINDING-VALUE"};
(function(){
    (l155).function = (function(v335){
        ((v335)["fname"] = "BINDING-VALUE");
        return v335;
    })((function (v334){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l42.function(v334);
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
    return l155;
})();
var l156 = {name: "BINDING-DECLARATIONS"};
(function(){
    (l156).function = (function(v337){
        ((v337)["fname"] = "BINDING-DECLARATIONS");
        return v337;
    })((function (v336){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l43.function(v336);
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
    return l156;
})();
var l157 = {name: "SET-BINDING-VALUE"};
(function(){
    (l157).function = (function(v340){
        ((v340)["fname"] = "SET-BINDING-VALUE");
        return v340;
    })((function (v338,v339){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = l36.function(v338);
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = v339);
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
    
    }));
    return l157;
})();
var l158 = {name: "SET-BINDING-DECLARATIONS"};
(function(){
    (l158).function = (function(v343){
        ((v343)["fname"] = "SET-BINDING-DECLARATIONS");
        return v343;
    })((function (v341,v342){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = l38.function(v341);
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = v342);
                    })();
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
    return l158;
})();
var l159 = {name: "PUSH-BINDING-DECLARATION"};
(function(){
    (l159).function = (function(v346){
        ((v346)["fname"] = "PUSH-BINDING-DECLARATION");
        return v346;
    })((function (v344,v345){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l158.function(v345, ({car: v344, cdr: l156.function(v345)}));
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
    return l159;
})();
var l160 = {name: "MAKE-LEXENV"};
(function(){
    (l160).function = (function(v347){
        ((v347)["fname"] = "MAKE-LEXENV");
        return v347;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l44.function(l3.value, l3.value, l3.value, l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 138)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l160;
})();
var l161 = {name: "COPY-LEXENV"};
(function(){
    (l161).function = (function(v349){
        ((v349)["fname"] = "COPY-LEXENV");
        return v349;
    })((function (v348){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l70.function(v348);
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
    return l161;
})();
var l162 = {name: "PUSH-TO-LEXENV"};
var l163 = {name: "BLOCK"};
var l164 = {name: "GOTAG"};
(function(){
    (l162).function = (function(v354){
        ((v354)["fname"] = "PUSH-TO-LEXENV");
        return v354;
    })((function (v350,v351,v352){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v353){
                        return (l27.function(v353, l98) !== l3.value ? (function(){
                            return (function(){
                                var x = v351;
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v350, cdr: (function(){
                                    var tmp = v351;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })()}));
                            })();
                        })() : (l27.function(v353, l97) !== l3.value ? (function(){
                            return (function(){
                                var x = (function(){
                                    var tmp = v351;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })();
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v350, cdr: l34.function(v351)}));
                            })();
                        })() : (l27.function(v353, l163) !== l3.value ? (function(){
                            return (function(){
                                var x = l36.function(v351);
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v350, cdr: l37.function(v351)}));
                            })();
                        })() : (l27.function(v353, l164) !== l3.value ? (function(){
                            return (function(){
                                var x = l38.function(v351);
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v350, cdr: l39.function(v351)}));
                            })();
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })()))));
                    })(v352);
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
    return l162;
})();
var l165 = {name: "EXTEND-LEXENV"};
(function(){
    (l165).function = (function(v361){
        ((v361)["fname"] = "EXTEND-LEXENV");
        return v361;
    })((function (v355,v356,v357){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v358){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v359,v360){
                                        (function(){
                                            while(v359 !== l3.value){
                                                v360 = (function(){
                                                    var tmp = v359;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    l162.function(v360, v358, v357);
                                                    return l3.value;
                                                })();
                                                v359 = (function(){
                                                    var tmp = v359;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return v358;
                                    })(l64.function(v355),l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 142)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l161.function(v356));
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
    return l165;
})();
var l166 = {name: "LOOKUP-IN-LEXENV"};
(function(){
    (l166).function = (function(v366){
        ((v366)["fname"] = "LOOKUP-IN-LEXENV");
        return v366;
    })((function (v362,v363,v364){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l90.function(v362, (function(v365){
                        return (l27.function(v365, l98) !== l3.value ? (function(){
                            return l40.function(v363);
                        })() : (l27.function(v365, l97) !== l3.value ? (function(){
                            return l41.function(v363);
                        })() : (l27.function(v365, l163) !== l3.value ? (function(){
                            return l42.function(v363);
                        })() : (l27.function(v365, l164) !== l3.value ? (function(){
                            return l43.function(v363);
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })()))));
                    })(v364));
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
var l167 = {name: "*ENVIRONMENT*"};
(function(){
    (((l167.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l167).value = l160.function();
    })());
    return l167;
})();
var l168 = {name: "*VARIABLE-COUNTER*"};
(function(){
    (((l168.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l168).value = 0;
    })());
    return l168;
})();
var l169 = {name: "GVARNAME"};
(function(){
    (l169).function = (function(v368){
        ((v368)["fname"] = "GVARNAME");
        return v368;
    })((function (v367){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l119.function("v", l16.function((l168).value = (function(){
                        var x = (function(){
                            var symbol = l168;
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
                if (cf.type == 'block' && cf.id == 144)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l169;
})();
var l170 = {name: "TRANSLATE-VARIABLE"};
(function(){
    (l170).function = (function(v370){
        ((v370)["fname"] = "TRANSLATE-VARIABLE");
        return v370;
    })((function (v369){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l155.function(l166.function(v369, (function(){
                        var symbol = l167;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l98));
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
    return l170;
})();
var l171 = {name: "EXTEND-LOCAL-ENV"};
var l172 = {name: "LEXICAL-VARIABLE"};
(function(){
    (l171).function = (function(v376){
        ((v376)["fname"] = "EXTEND-LOCAL-ENV");
        return v376;
    })((function (v371){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v372){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v373,v374){
                                        (function(){
                                            while(v373 !== l3.value){
                                                v374 = (function(){
                                                    var tmp = v373;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    (function(v375){
                                                        return l162.function(v375, v372, l98);
                                                    })(l152.function(v374, l172, l169.function(v374)));
                                                    return l3.value;
                                                })();
                                                v373 = (function(){
                                                    var tmp = v373;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return v372;
                                    })(v371,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 147)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l161.function((function(){
                        var symbol = l167;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
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
    return l171;
})();
var l173 = {name: "*TOPLEVEL-COMPILATIONS*"};
(function(){
    (((l173.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l173).value = l3.value;
    })());
    return l173;
})();
var l174 = {name: "TOPLEVEL-COMPILATION"};
(function(){
    (l174).function = (function(v378){
        ((v378)["fname"] = "TOPLEVEL-COMPILATION");
        return v378;
    })((function (v377){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l173).value = ({car: v377, cdr: (function(){
                        var symbol = l173;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()});
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
    return l174;
})();
var l175 = {name: "NULL-OR-EMPTY-P"};
(function(){
    (l175).function = (function(v380){
        ((v380)["fname"] = "NULL-OR-EMPTY-P");
        return v380;
    })((function (v379){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l25.function(l66.function(v379));
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
    return l175;
})();
var l176 = {name: "GET-TOPLEVEL-COMPILATIONS"};
(function(){
    (l176).function = (function(v381){
        ((v381)["fname"] = "GET-TOPLEVEL-COMPILATIONS");
        return v381;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l64.function(l83.function((function(){
                        var symbol = l175;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), (function(){
                        var symbol = l173;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
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
    return l176;
})();
var l177 = {name: "%COMPILE-DEFMACRO"};
var l178 = {name: "MACRO"};
(function(){
    (l177).function = (function(v384){
        ((v384)["fname"] = "%COMPILE-DEFMACRO");
        return v384;
    })((function (v382,v383){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l174.function((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l44.function(l146), l44.function(v382))));
                    return l162.function(l152.function(v382, l178, v383), (function(){
                        var symbol = l167;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l97);
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
    return l177;
})();
var l179 = {name: "GLOBAL-BINDING"};
(function(){
    (l179).function = (function(v390){
        ((v390)["fname"] = "GLOBAL-BINDING");
        return v390;
    })((function (v385,v386,v387){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v388){
                        return (v388 !== l3.value ? v388 : (function(v389){
                            l162.function(v389, (function(){
                                var symbol = l167;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), v387);
                            return v389;
                        })(l152.function(v385, v386, l3.value)));
                    })(l166.function(v385, (function(){
                        var symbol = l167;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), v387));
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
    return l179;
})();
var l180 = {name: "CLAIMP"};
(function(){
    (l180).function = (function(v395){
        ((v395)["fname"] = "CLAIMP");
        return v395;
    })((function (v391,v392,v393){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v394){
                        return (v394 !== l3.value ? l81.function(v393, l156.function(v394)) : l3.value);
                    })(l166.function(v391, (function(){
                        var symbol = l167;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), v392));
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
    return l180;
})();
var l181 = {name: "!PROCLAIM"};
var l182 = {name: "NOTINLINE"};
var l183 = {name: "CONSTANT"};
var l184 = {name: "NON-OVERRIDABLE"};
(function(){
    (l181).function = (function(v407){
        ((v407)["fname"] = "!PROCLAIM");
        return v407;
    })((function (v396){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v397){
                        return (l27.function(v397, l182) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v398,v399){
                                            (function(){
                                                while(v398 !== l3.value){
                                                    v399 = (function(){
                                                        var tmp = v398;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v400){
                                                            return l159.function(l182, v400);
                                                        })(l179.function(v399, l97, l97));
                                                        return l3.value;
                                                    })();
                                                    v398 = (function(){
                                                        var tmp = v398;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v396;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 155)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : (l27.function(v397, l183) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v401,v402){
                                            (function(){
                                                while(v401 !== l3.value){
                                                    v402 = (function(){
                                                        var tmp = v401;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v403){
                                                            return l159.function(l183, v403);
                                                        })(l179.function(v402, l98, l98));
                                                        return l3.value;
                                                    })();
                                                    v401 = (function(){
                                                        var tmp = v401;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v396;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 156)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : (l27.function(v397, l184) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v404,v405){
                                            (function(){
                                                while(v404 !== l3.value){
                                                    v405 = (function(){
                                                        var tmp = v404;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v406){
                                                            return l159.function(l184, v406);
                                                        })(l179.function(v405, l97, l97));
                                                        return l3.value;
                                                    })();
                                                    v404 = (function(){
                                                        var tmp = v404;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v396;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 157)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : l3.value)));
                    })((function(){
                        var tmp = v396;
                        return tmp === l3.value? l3.value: tmp.car;
                    })());
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
    return l181;
})();
var l185 = {name: "PROCLAIM"};
(l185).function = (function(){
    var symbol = l181;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})();
var l186 = {name: "*COMPILATIONS*"};
(function(){
    (((l186.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l186).value = l3.value;
    })());
    return l186;
})();
var l187 = {name: "DEFINE-COMPILATION"};
l187;
var l188 = {name: "IF"};
(l186).value = ({car: l44.function(l188, (function (v408,v409,v410){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l119.function("(", (function(){
                    var symbol = l126;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v408), " !== ", (function(){
                    var symbol = l126;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), " ? ", (function(){
                    var symbol = l126;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v409), " : ", (function(){
                    var symbol = l126;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v410), ")");
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
    var symbol = l186;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l189 = {name: "*LAMBDA-LIST-KEYWORDS*"};
var l190 = {name: "&OPTIONAL"};
var l191 = {name: "&REST"};
var l192 = {car: l190, cdr: {car: l191, cdr: l3}};
(function(){
    (((l189.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l189).value = l192;
    })());
    return l189;
})();
var l193 = {name: "LIST-UNTIL-KEYWORD"};
(function(){
    (l193).function = (function(v413){
        ((v413)["fname"] = "LIST-UNTIL-KEYWORD");
        return v413;
    })((function (v411){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(v412){
                        return (v412 !== l3.value ? v412 : l81.function((function(){
                            var tmp = v411;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), (function(){
                            var symbol = l189;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()));
                    })(l11.function(v411)) !== l3.value ? l3.value : ({car: (function(){
                        var tmp = v411;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), cdr: l193.function((function(){
                        var tmp = v411;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())}));
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
    return l193;
})();
var l194 = {name: "LAMBDA-LIST-REQUIRED-ARGUMENTS"};
(function(){
    (l194).function = (function(v415){
        ((v415)["fname"] = "LAMBDA-LIST-REQUIRED-ARGUMENTS");
        return v415;
    })((function (v414){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l193.function(v414);
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
    return l194;
})();
var l195 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"};
(function(){
    (l195).function = (function(v417){
        ((v417)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
        return v417;
    })((function (v416){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l68.function((function(){
                        var symbol = l58;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l193.function((function(){
                        var tmp = l81.function(l190, v416);
                        return tmp === l3.value? l3.value: tmp.cdr;
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
    return l195;
})();
var l196 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS"};
(function(){
    (l196).function = (function(v419){
        ((v419)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS");
        return v419;
    })((function (v418){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l68.function((function(){
                        var symbol = l31;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l195.function(v418));
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
    return l196;
})();
var l197 = {name: "LAMBDA-LIST-REST-ARGUMENT"};
(function(){
    (l197).function = (function(v422){
        ((v422)["fname"] = "LAMBDA-LIST-REST-ARGUMENT");
        return v422;
    })((function (v420){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v421){
                        ((function(){
                            var tmp = v421;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })() !== l3.value ? (function(){
                            return (function(){
                                throw "Bad lambda-list";
                            })();
                        })() : l3.value);
                        return (function(){
                            var tmp = v421;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })(l193.function((function(){
                        var tmp = l81.function(l191, v420);
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()));
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
    return l197;
})();
var l198 = {name: "LAMBDA-DOCSTRING-WRAPPER"};
(function(){
    (l198).function = (function(v425){
        ((v425)["fname"] = "LAMBDA-DOCSTRING-WRAPPER");
        return v425;
    })((function (v424){
        if (arguments.length < 1) throw 'too few arguments';
        var v423= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v423 = {car: arguments[i], cdr: 
        v423};
        return (function(){
            try {
                return (function(){
                    return (v424 !== l3.value ? l119.function("(function(){", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l124.function("var func = ", l121.function(v423), ";", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "func.docstring = '", v424, "';", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "return func;", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : l121.function(v423));
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
    return l198;
})();
var l199 = {name: "LAMBDA"};
var l200 = {name: "LS-COMPILE-BLOCK"};
(l186).value = ({car: l44.function(l199, (function (v427){
    if (arguments.length < 1) throw 'too few arguments';
    var v426= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v426 = {car: arguments[i], cdr: 
    v426};
    return (function(){
        try {
            return (function(){
                return (function(v428,v429,v430,v431){
                    ((((typeof((function(){
                        var tmp = v426;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) == "string")?l4.value: l3.value) !== l3.value ? l28.function(l11.function((function(){
                        var tmp = v426;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())) : l3.value) !== l3.value ? (function(){
                        v431 = (function(){
                            var tmp = v426;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        return v426 = (function(){
                            var tmp = v426;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                    })() : l3.value);
                    return (function(v432,v433,v434){
                        try {
                            var tmp;
                            tmp = l167.value;
                            l167.value = v434;
                            v434 = tmp;
                            return l198.function(v431, "(function (", l121.function(l68.function((function(){
                                var symbol = l170;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })(), l62.function(v428, v429)), ","), "){", (function(){
                                var symbol = l118;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l124.function((v428 !== l3.value ? l119.function("if (arguments.length < ", l16.function(v432), ") throw 'too few arguments';", (function(){
                                var symbol = l118;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (l28.function(v430) !== l3.value ? l119.function("if (arguments.length > ", l16.function((function(){
                                var x = v432;
                                var y = v433;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })()), ") throw 'too many arguments';", (function(){
                                var symbol = l118;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (v429 !== l3.value ? l119.function("switch(arguments.length){", (function(){
                                var symbol = l118;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(v435,v436,v437){
                                return (function(){
                                    (function(){
                                        try {
                                            return (function(){
                                                return (function(){
                                                    while(((function(){
                                                        var x = v437;
                                                        var y = v433;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        if (typeof y != 'number')
                                                            throw 'The value ' + y + ' is not a type number.';
                                                        return x<y;
                                                    })()?l4.value: l3.value) !== l3.value){
                                                        (function(v438){
                                                            v436 = ({car: l119.function("case ", l16.function((function(){
                                                                var x = v437;
                                                                var y = v432;
                                                                if (typeof x != 'number')
                                                                    throw 'The value ' + x + ' is not a type number.';
                                                                if (typeof y != 'number')
                                                                    throw 'The value ' + y + ' is not a type number.';
                                                                return x+y;
                                                            })()), ":", (function(){
                                                                var symbol = l118;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })(), l170.function((function(){
                                                                var tmp = v438;
                                                                return tmp === l3.value? l3.value: tmp.car;
                                                            })()), "=", (function(){
                                                                var symbol = l126;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()(l34.function(v438)), ";", (function(){
                                                                var symbol = l118;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })()), cdr: v436});
                                                            return v437 = (function(){
                                                                var x = v437;
                                                                var y = 1;
                                                                if (typeof x != 'number')
                                                                    throw 'The value ' + x + ' is not a type number.';
                                                                if (typeof y != 'number')
                                                                    throw 'The value ' + y + ' is not a type number.';
                                                                return x+y;
                                                            })();
                                                        })(l78.function(v437, v435));
                                                    }return l3.value;
                                                })();
                                            })();
                                        }
                                        catch (cf){
                                            if (cf.type == 'block' && cf.id == 166)
                                                return cf.value;
                                            else
                                                throw cf;
                                        }
                                    })();
                                    v436 = ({car: l119.function("default: break;", (function(){
                                        var symbol = l118;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()), cdr: v436});
                                    return l121.function(l64.function(v436));
                                })();
                            })(l195.function(v427),l3.value,0), "}", (function(){
                                var symbol = l118;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (v430 !== l3.value ? (function(v439){
                                return l119.function("var ", v439, "= ", (function(){
                                    var symbol = l126;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l3.value), ";", (function(){
                                    var symbol = l118;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "for (var i = arguments.length-1; i>=", l16.function((function(){
                                    var x = v432;
                                    var y = v433;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    if (typeof y != 'number')
                                        throw 'The value ' + y + ' is not a type number.';
                                    return x+y;
                                })()), "; i--)", (function(){
                                    var symbol = l118;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), l124.function(v439, " = ", "{car: arguments[i], cdr: "), v439, "};", (function(){
                                    var symbol = l118;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })(l170.function(v430)) : ""), (function(){
                                var symbol = l200;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v426, l4.value)), (function(){
                                var symbol = l118;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "})");
                        }
                        finally {
                            l167.value = v434;
                        }
                    })(l66.function(v428),l66.function(v429),l171.function(l62.function(l58.function(v430), v428, v429)));
                })(l194.function(v427),l196.function(v427),l197.function(v427),l3.value);
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
    var symbol = l186;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l201 = {name: "SETQ"};
var l202 = {name: "SET"};
(l186).value = ({car: l44.function(l201, (function (v440,v441){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v442){
                    return (((l154.function(v442) === l172)?l4.value: l3.value) !== l3.value ? l119.function(l155.function(v442), " = ", (function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v441)) : (function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l44.function(l202), l44.function(l62.function(l44.function(l146), l44.function(v440))), l44.function(v441))));
                })(l166.function(v440, (function(){
                    var symbol = l167;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l98));
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
    var symbol = l186;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l203 = {name: "JS-VREF"};
(l186).value = ({car: l44.function(l203, (function (v443){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return v443;
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 168)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l186;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l204 = {name: "JS-VSET"};
(l186).value = ({car: l44.function(l204, (function (v444,v445){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l119.function("(", v444, " = ", (function(){
                    var symbol = l126;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v445), ")");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 169)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l186;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
(function(){
    (l129).function = (function(v452){
        ((v452)["fname"] = "ESCAPE-STRING");
        return v452;
    })((function (v446){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v447,v448,v449){
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(((function(){
                                            var x = v448;
                                            var y = v449;
                                            if (typeof x != 'number')
                                                throw 'The value ' + x + ' is not a type number.';
                                            if (typeof y != 'number')
                                                throw 'The value ' + y + ' is not a type number.';
                                            return x<y;
                                        })()?l4.value: l3.value) !== l3.value){
                                            (function(v450){
                                                ((function(v451){
                                                    return (v451 !== l3.value ? v451 : l73.function(v450, 92));
                                                })(l73.function(v450, 34)) !== l3.value ? (function(){
                                                    return v447 = l119.function(v447, "\\");
                                                })() : l3.value);
                                                (l73.function(v450, 10) !== l3.value ? (function(){
                                                    v447 = l119.function(v447, "\\");
                                                    return v450 = 110;
                                                })() : l3.value);
                                                return v447 = l119.function(v447, l91.function(v450));
                                            })((function(){
                                                var string = v446;
                                                var index = v448;
                                                if (typeof string != 'string')
                                                    throw 'The value ' + string + ' is not a type string.';
                                                if (typeof index != 'number')
                                                    throw 'The value ' + index + ' is not a type number.';
                                                return string.charCodeAt(index);
                                            })());
                                            v448 = (function(){
                                                var x = v448;
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
                                if (cf.type == 'block' && cf.id == 171)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v447;
                    })("",0,l66.function(v446));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 170)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l129;
})();
var l205 = {name: "*LITERAL-SYMBOLS*"};
(function(){
    (((l205.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l205).value = l3.value;
    })());
    return l205;
})();
var l206 = {name: "*LITERAL-COUNTER*"};
(function(){
    (((l206.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l206).value = 0;
    })());
    return l206;
})();
var l207 = {name: "GENLIT"};
(function(){
    (l207).function = (function(v453){
        ((v453)["fname"] = "GENLIT");
        return v453;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l119.function("l", l16.function((l206).value = (function(){
                        var x = (function(){
                            var symbol = l206;
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
                if (cf.type == 'block' && cf.id == 172)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l207;
})();
var l208 = {name: "LITERAL"};
(function(){
    (l208).function = (function(v461){
        ((v461)["fname"] = "LITERAL");
        return v461;
    })((function (v454,v455){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v455=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (l74.function(v454) !== l3.value ? (function(){
                        return l16.function(v454);
                    })() : (((typeof(v454) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l119.function("\"", l129.function(v454), "\"");
                    })() : (((function(){
                        var tmp = v454;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v456){
                            return (v456 !== l3.value ? v456 : (function(v457,v458){
                                (l205).value = ({car: ({car: v454, cdr: v457}), cdr: (function(){
                                    var symbol = l205;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()});
                                l174.function(l119.function("var ", v457, " = ", v458));
                                return v457;
                            })(l207.function(),(function(){
                                var symbol = l126;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l62.function(l44.function(l115), l44.function((v454).name)))));
                        })((function(){
                            var tmp = l90.function(v454, (function(){
                                var symbol = l205;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : (((function(){
                        var tmp = v454;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v459){
                            return (v455 !== l3.value ? v459 : (function(v460){
                                l174.function(l119.function("var ", v460, " = ", v459));
                                return v460;
                            })(l207.function()));
                        })(l119.function("{car: ", l208.function((function(){
                            var tmp = v454;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), l4.value), ", ", "cdr: ", l208.function((function(){
                            var tmp = v454;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), l4.value), "}"));
                    })() : l3.value))));
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
(l186).value = ({car: l44.function(l146, (function (v462){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l208.function(v462);
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 174)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l186;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l209 = {name: "%WHILE"};
(l186).value = ({car: l44.function(l209, (function (v464){
    if (arguments.length < 1) throw 'too few arguments';
    var v463= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v463 = {car: arguments[i], cdr: 
    v463};
    return (function(){
        try {
            return (function(){
                return l119.function("(function(){", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l124.function("while(", (function(){
                    var symbol = l126;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v464), " !== ", (function(){
                    var symbol = l126;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), "){", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l124.function((function(){
                    var symbol = l200;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v463)), "}", "return ", (function(){
                    var symbol = l126;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), ";", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 175)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l186;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l210 = {name: "SYMBOL-FUNCTION"};
(l186).value = ({car: l44.function(l97, (function (v465){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return ((l59.function(v465) !== l3.value ? (((function(){
                    var tmp = v465;
                    return tmp === l3.value? l3.value: tmp.car;
                })() === l199)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                    return (function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v465);
                })() : (((function(){
                    var tmp = v465;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(){
                    return (function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l44.function(l210), l44.function(l62.function(l44.function(l146), l44.function(v465)))));
                })() : l3.value));
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
    var symbol = l186;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l211 = {name: "EVAL-WHEN-COMPILE"};
var l212 = {name: "EVAL"};
var l213 = {name: "PROGN"};
(l186).value = ({car: l44.function(l211, (function (){
    var v466= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v466 = {car: arguments[i], cdr: 
    v466};
    return (function(){
        try {
            return (function(){
                (function(){
                    var symbol = l212;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(({car: l213, cdr: v466}));
                return l3.value;
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
    var symbol = l186;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l214 = {name: "DEFINE-TRANSFORMATION"};
l214;
(l186).value = ({car: l44.function(l213, (function (){
    var v467= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v467 = {car: arguments[i], cdr: 
    v467};
    return (function(){
        try {
            return (function(){
                return l119.function("(function(){", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l124.function((function(){
                    var symbol = l200;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v467, l4.value)), "})()");
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
    var symbol = l186;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l215 = {name: "DYNAMIC-BINDING-WRAPPER"};
(function(){
    (l215).function = (function(v474){
        ((v474)["fname"] = "DYNAMIC-BINDING-WRAPPER");
        return v474;
    })((function (v468,v469){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.function(v468) !== l3.value ? v469 : l119.function("try {", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l124.function("var tmp;", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l121.function(l68.function((function (v470){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v471){
                            return l119.function("tmp = ", v471, ".value;", (function(){
                                var symbol = l118;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), v471, ".value = ", (function(){
                                var tmp = v470;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), ";", (function(){
                                var symbol = l118;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(){
                                var tmp = v470;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), " = tmp;", (function(){
                                var symbol = l118;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })((function(){
                            var symbol = l126;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l44.function(l146), l44.function((function(){
                            var tmp = v470;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    
                    }), v468)), v469), "}", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "finally {", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l124.function(l122.function(l68.function((function (v472){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v473){
                            return l119.function(v473, ".value", " = ", (function(){
                                var tmp = v472;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })());
                        })((function(){
                            var symbol = l126;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l44.function(l146), l44.function((function(){
                            var tmp = v472;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    
                    }), v468), l119.function(";", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()))), "}", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
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
    return l215;
})();
var l216 = {name: "LET"};
(l186).value = ({car: l44.function(l216, (function (v476){
    if (arguments.length < 1) throw 'too few arguments';
    var v475= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v475 = {car: arguments[i], cdr: 
    v475};
    return (function(){
        try {
            return (function(){
                return (function(v477){
                    return (function(v478,v479){
                        return (function(v480,v482,v481){
                            try {
                                var tmp;
                                tmp = l167.value;
                                l167.value = v482;
                                v482 = tmp;
                                return l119.function("(function(", l121.function(l68.function((function (v483){
                                    if (arguments.length < 1) throw 'too few arguments';
                                    if (arguments.length > 1) throw 'too many arguments';
                                    return (((v483.value !== undefined)?l4.value: l3.value) !== l3.value ? (function(v484){
                                        v481 = ({car: ({car: v483, cdr: v484}), cdr: v481});
                                        return v484;
                                    })(l169.function(v483)) : l170.function(v483));
                                
                                }), v478), ","), "){", (function(){
                                    var symbol = l118;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), (function(v485){
                                    return l124.function(l215.function(v481, v485));
                                })((function(){
                                    var symbol = l200;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v475, l4.value)), "})(", l121.function(v480, ","), ")");
                            }
                            finally {
                                l167.value = v482;
                            }
                        })(l68.function((function(){
                            var symbol = l126;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v479),l171.function(l83.function((function(){
                            var symbol = l17;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v478)),l3.value);
                    })(l68.function((function(){
                        var symbol = l40;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v477),l68.function((function(){
                        var symbol = l41;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v477));
                })(l68.function((function(){
                    var symbol = l58;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v476));
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
    var symbol = l186;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l217 = {name: "*BLOCK-COUNTER*"};
(function(){
    (((l217.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l217).value = 0;
    })());
    return l217;
})();
(l186).value = ({car: l44.function(l163, (function (v487){
    if (arguments.length < 1) throw 'too few arguments';
    var v486= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v486 = {car: arguments[i], cdr: 
    v486};
    return (function(){
        try {
            return (function(){
                return (function(v488){
                    return (function(v489){
                        return l119.function("(function(){", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function("try {", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(v490){
                            try {
                                var tmp;
                                tmp = l167.value;
                                l167.value = v490;
                                v490 = tmp;
                                return l124.function("return ", (function(){
                                    var symbol = l126;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l62.function(l44.function(l213), v486)), ";", (function(){
                                    var symbol = l118;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            }
                            finally {
                                l167.value = v490;
                            }
                        })(l165.function(l44.function(v489), (function(){
                            var symbol = l167;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l163)), "}", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "catch (cf){", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    if (cf.type == 'block' && cf.id == ", v488, ")", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        return cf.value;", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    else", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        throw cf;", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "}", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })(l152.function(v487, l163, v488));
                })(l16.function((l217).value = (function(){
                    var x = (function(){
                        var symbol = l217;
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
            if (cf.type == 'block' && cf.id == 181)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l186;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l218 = {name: "RETURN-FROM"};
(l186).value = ({car: l44.function(l218, (function (v491,v492){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    switch(arguments.length){
    case 1:
    v492=l3.value;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return (function(v493){
                    return (v493 !== l3.value ? l119.function("(function(){", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l124.function("throw ({", "type: 'block', ", "id: ", l155.function(v493), ", ", "value: ", (function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v492), ", ", "message: 'Return from unknown block ", (v491).name, ".'", "})"), "})()") : (function(){
                        throw l119.function("Unknown block `", (v491).name, "'.");
                    })());
                })(l166.function(v491, (function(){
                    var symbol = l167;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l163));
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
    var symbol = l186;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l219 = {name: "CATCH"};
(l186).value = ({car: l44.function(l219, (function (v495){
    if (arguments.length < 1) throw 'too few arguments';
    var v494= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v494 = {car: arguments[i], cdr: 
    v494};
    return (function(){
        try {
            return (function(){
                return l119.function("(function(){", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l124.function("var id = ", (function(){
                    var symbol = l126;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v495), ";", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "try {", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l124.function("return ", (function(){
                    var symbol = l126;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l62.function(l44.function(l213), v494)), ";", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "}", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "catch (cf){", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "    if (cf.type == 'catch' && cf.id == id)", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "        return cf.value;", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "    else", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "        throw cf;", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "}", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
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
    var symbol = l186;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l220 = {name: "THROW"};
(l186).value = ({car: l44.function(l220, (function (v496,v497){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l119.function("(function(){", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l124.function("throw ({", "type: 'catch', ", "id: ", (function(){
                    var symbol = l126;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v496), ", ", "value: ", (function(){
                    var symbol = l126;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v497), ", ", "message: 'Throw uncatched.'", "})"), "})()");
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
    var symbol = l186;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l221 = {name: "*TAGBODY-COUNTER*"};
(function(){
    (((l221.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l221).value = 0;
    })());
    return l221;
})();
var l222 = {name: "*GO-TAG-COUNTER*"};
(function(){
    (((l222.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l222).value = 0;
    })());
    return l222;
})();
var l223 = {name: "GO-TAG-P"};
(function(){
    (l223).function = (function(v500){
        ((v500)["fname"] = "GO-TAG-P");
        return v500;
    })((function (v498){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v499){
                        return (v499 !== l3.value ? v499 : ((function(){
                            var tmp = v498;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?l4.value: l3.value));
                    })(l74.function(v498));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 185)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l223;
})();
var l224 = {name: "DECLARE-TAGBODY-TAGS"};
(function(){
    (l224).function = (function(v506){
        ((v506)["fname"] = "DECLARE-TAGBODY-TAGS");
        return v506;
    })((function (v501,v502){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v505){
                        return l165.function(v505, (function(){
                            var symbol = l167;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l164);
                    })(l68.function((function (v503){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v504){
                            return l152.function(v503, l164, l44.function(v501, v504));
                        })(l16.function((l222).value = (function(){
                            var x = (function(){
                                var symbol = l222;
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
                    
                    }), l84.function((function(){
                        var symbol = l223;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v502)));
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
    return l224;
})();
var l225 = {name: "TAGBODY"};
(l186).value = ({car: l44.function(l225, (function (){
    var v507= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v507 = {car: arguments[i], cdr: 
    v507};
    return (function(){
        try {
            return (function(){
                (l88.function((function(){
                    var symbol = l223;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v507) !== l3.value ? l3.value : (function(){
                    return (function(){
                        throw ({type: 'block', id: 187, value: (function(){
                            var symbol = l126;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l44.function(l213), v507, l44.function(l3))), message: 'Return from unknown block TAGBODY.'})
                    })();
                })());
                (l223.function((function(){
                    var tmp = v507;
                    return tmp === l3.value? l3.value: tmp.car;
                })()) !== l3.value ? l3.value : (function(){
                    return v507 = ({car: l15.function("START"), cdr: v507});
                })());
                return (function(v508){
                    return (function(v510,v509){
                        try {
                            var tmp;
                            tmp = l167.value;
                            l167.value = v510;
                            v510 = tmp;
                            (function(v511){
                                return v509 = l41.function(l155.function(v511));
                            })(l166.function(l40.function(v507), (function(){
                                var symbol = l167;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l164));
                            return l119.function("(function(){", (function(){
                                var symbol = l118;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l124.function("var tagbody_", v508, " = ", v509, ";", (function(){
                                var symbol = l118;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "tbloop:", (function(){
                                var symbol = l118;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "while (true) {", (function(){
                                var symbol = l118;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l124.function("try {", (function(){
                                var symbol = l118;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l124.function((function(v512){
                                return l119.function("switch(tagbody_", v508, "){", (function(){
                                    var symbol = l118;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "case ", v509, ":", (function(){
                                    var symbol = l118;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), (function(){
                                    try {
                                        return (function(){
                                            return (function(v513,v514){
                                                (function(){
                                                    while(v513 !== l3.value){
                                                        v514 = (function(){
                                                            var tmp = v513;
                                                            return tmp === l3.value? l3.value: tmp.car;
                                                        })();
                                                        (function(){
                                                            v512 = l119.function(v512, (function(){
                                                                return (l28.function(l223.function(v514)) !== l3.value ? l124.function((function(){
                                                                    var symbol = l126;
                                                                    var func = symbol.function;
                                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                    return func;
                                                                })()(v514), ";", (function(){
                                                                    var symbol = l118;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })()) : (function(v515){
                                                                    return l119.function("case ", l41.function(l155.function(v515)), ":", (function(){
                                                                        var symbol = l118;
                                                                        var value = symbol.value;
                                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                        return value;
                                                                    })());
                                                                })(l166.function(v514, (function(){
                                                                    var symbol = l167;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })(), l164)));
                                                            })());
                                                            return l3.value;
                                                        })();
                                                        v513 = (function(){
                                                            var tmp = v513;
                                                            return tmp === l3.value? l3.value: tmp.cdr;
                                                        })();
                                                    }return l3.value;
                                                })();
                                                return v512;
                                            })((function(){
                                                var tmp = v507;
                                                return tmp === l3.value? l3.value: tmp.cdr;
                                            })(),l3.value);
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 188)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })(), "default:", (function(){
                                    var symbol = l118;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "    break tbloop;", (function(){
                                    var symbol = l118;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "}", (function(){
                                    var symbol = l118;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })("")), "}", (function(){
                                var symbol = l118;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "catch (jump) {", (function(){
                                var symbol = l118;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "    if (jump.type == 'tagbody' && jump.id == ", v508, ")", (function(){
                                var symbol = l118;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "        tagbody_", v508, " = jump.label;", (function(){
                                var symbol = l118;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "    else", (function(){
                                var symbol = l118;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "        throw(jump);", (function(){
                                var symbol = l118;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "}", (function(){
                                var symbol = l118;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), "}", (function(){
                                var symbol = l118;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "return ", (function(){
                                var symbol = l126;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l3.value), ";", (function(){
                                var symbol = l118;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), "})()");
                        }
                        finally {
                            l167.value = v510;
                        }
                    })(l224.function(v508, v507),l3.value);
                })(l16.function((function(){
                    var symbol = l221;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()));
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
    var symbol = l186;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l226 = {name: "GO"};
(l186).value = ({car: l44.function(l226, (function (v516){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v517,v518){
                    return (v517 !== l3.value ? l119.function("(function(){", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l124.function("throw ({", "type: 'tagbody', ", "id: ", l40.function(l155.function(v517)), ", ", "label: ", l41.function(l155.function(v517)), ", ", "message: 'Attempt to GO to non-existing tag ", v518, "'", "})", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : (function(){
                        throw l119.function("Unknown tag `", v518, "'.");
                    })());
                })(l166.function(v516, (function(){
                    var symbol = l167;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l164),(((function(){
                    var tmp = v516;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(){
                    return (v516).name;
                })() : (l74.function(v516) !== l3.value ? (function(){
                    return l16.function(v516);
                })() : l3.value)));
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
    var symbol = l186;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l227 = {name: "UNWIND-PROTECT"};
(l186).value = ({car: l44.function(l227, (function (v520){
    if (arguments.length < 1) throw 'too few arguments';
    var v519= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v519 = {car: arguments[i], cdr: 
    v519};
    return (function(){
        try {
            return (function(){
                return l119.function("(function(){", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l124.function("var ret = ", (function(){
                    var symbol = l126;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), ";", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "try {", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l124.function("ret = ", (function(){
                    var symbol = l126;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v520), ";", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "} finally {", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l124.function((function(){
                    var symbol = l200;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v519)), "}", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "return ret;", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
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
    var symbol = l186;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l228 = {name: "BACKQUOTE-EXPAND-1"};
(function(){
    (l228).function = (function(v523){
        ((v523)["fname"] = "BACKQUOTE-EXPAND-1");
        return v523;
    })((function (v521){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v521;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return l44.function(l146, v521);
                    })() : (l45.function(v521) !== l3.value ? (function(){
                        return v521;
                    })() : ((((function(){
                        var tmp = v521;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l149)?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(){
                            var tmp = v521;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })() : ((((function(){
                        var tmp = v521;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l147)?l4.value: l3.value) !== l3.value ? (function(){
                        return l228.function(l228.function(l34.function(v521)));
                    })() : (function(){
                        return ({car: l62, cdr: l68.function((function (v522){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return ((l59.function(v522) !== l3.value ? (((function(){
                                var tmp = v522;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l149)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return l44.function(l44, l34.function(v522));
                            })() : ((l59.function(v522) !== l3.value ? (((function(){
                                var tmp = v522;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l148)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return l34.function(v522);
                            })() : (function(){
                                return l44.function(l44, l228.function(v522));
                            })()));
                        
                        }), v521)});
                    })()))));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 191)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l228;
})();
var l229 = {name: "BACKQUOTE-EXPAND"};
(function(){
    (l229).function = (function(v525){
        ((v525)["fname"] = "BACKQUOTE-EXPAND");
        return v525;
    })((function (v524){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((l59.function(v524) !== l3.value ? (((function(){
                        var tmp = v524;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l147)?l4.value: l3.value) : l3.value) !== l3.value ? l228.function(l34.function(v524)) : v524);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 192)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l229;
})();
l147;
(l186).value = ({car: l44.function(l147, (function (v526){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l126;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l228.function(v526));
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
    var symbol = l186;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l230 = {name: "*BUILTINS*"};
(function(){
    (((l230.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l230).value = l3.value;
    })());
    return l230;
})();
var l231 = {name: "DEFINE-RAW-BUILTIN"};
l231;
var l232 = {name: "DEFINE-BUILTIN"};
l232;
var l233 = {name: "TYPE-CHECK"};
l233;
var l234 = {name: "NUM-OP-NUM"};
(function(){
    (l234).function = (function(v530){
        ((v530)["fname"] = "NUM-OP-NUM");
        return v530;
    })((function (v527,v528,v529){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l119.function("(function(){", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l124.function(l119.function("var ", "x", " = ", v527, ";", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), l119.function("var ", "y", " = ", v529, ";", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), l119.function("if (typeof ", "x", " != '", "number", "')", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l124.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), l119.function("if (typeof ", "y", " != '", "number", "')", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l124.function("throw 'The value ' + ", "y", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), l119.function("return ", (function(){
                        return l119.function("x", v528, "y");
                    })(), ";", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), "})()");
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
    return l234;
})();
(function(){
    return (l230).value = ({car: l44.function(l19, (function (v531,v532){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v533,v534){
                        return l234.function(v533, "+", v534);
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v531),(function(){
                        var symbol = l126;
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l230).value = ({car: l44.function(l20, (function (v535,v536){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v537,v538){
                        return l234.function(v537, "-", v538);
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v535),(function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v536));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l230).value = ({car: l44.function(l21, (function (v539,v540){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v541,v542){
                        return l234.function(v541, "*", v542);
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v539),(function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v540));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l230).value = ({car: l44.function(l22, (function (v543,v544){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v545,v546){
                        return l234.function(v545, "/", v546);
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v543),(function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v544));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l235 = {name: "MOD"};
(function(){
    return (l230).value = ({car: l44.function(l235, (function (v547,v548){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v549,v550){
                        return l234.function(v549, "%", v550);
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v547),(function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v548));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l236 = {name: "<"};
(function(){
    return (l230).value = ({car: l44.function(l236, (function (v551,v552){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v553,v554){
                        return l125.function(l234.function(v553, "<", v554));
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v551),(function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v552));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l237 = {name: ">"};
(function(){
    return (l230).value = ({car: l44.function(l237, (function (v555,v556){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v557,v558){
                        return l125.function(l234.function(v557, ">", v558));
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v555),(function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v556));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l230).value = ({car: l44.function(l18, (function (v559,v560){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v561,v562){
                        return l125.function(l234.function(v561, "==", v562));
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v559),(function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v560));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l238 = {name: "<="};
(function(){
    return (l230).value = ({car: l44.function(l238, (function (v563,v564){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v565,v566){
                        return l125.function(l234.function(v565, "<=", v566));
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v563),(function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v564));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l239 = {name: ">="};
(function(){
    return (l230).value = ({car: l44.function(l239, (function (v567,v568){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v569,v570){
                        return l125.function(l234.function(v569, ">=", v570));
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v567),(function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v568));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l240 = {name: "NUMBERP"};
(function(){
    return (l230).value = ({car: l44.function(l240, (function (v571){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v572){
                        return l125.function(l119.function("(typeof (", v572, ") == \"number\")"));
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v571));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l241 = {name: "FLOOR"};
(function(){
    return (l230).value = ({car: l44.function(l241, (function (v573){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v574){
                        return l119.function("(function(){", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function(l119.function("var ", "x", " = ", v574, ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l119.function("if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l119.function("return ", (function(){
                            return "Math.floor(x)";
                        })(), ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v573));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l230).value = ({car: l44.function(l29, (function (v575,v576){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v577,v578){
                        return l119.function("({car: ", v577, ", cdr: ", v578, "})");
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v575),(function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v576));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l230).value = ({car: l44.function(l30, (function (v579){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v580){
                        return l125.function(l119.function("(function(){", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function("var tmp = ", v580, ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return (typeof tmp == 'object' && 'car' in tmp);", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()"));
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v579));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l230).value = ({car: l44.function(l31, (function (v581){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v582){
                        return l119.function("(function(){", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function("var tmp = ", v582, ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l126;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), "? ", (function(){
                            var symbol = l126;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ": tmp.car;", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v581));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l230).value = ({car: l44.function(l32, (function (v583){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v584){
                        return l119.function("(function(){", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function("var tmp = ", v584, ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l126;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), "? ", (function(){
                            var symbol = l126;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ": tmp.cdr;", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v583));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l242 = {name: "SETCAR"};
(function(){
    return (l230).value = ({car: l44.function(l242, (function (v585,v586){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v587,v588){
                        return l119.function("(function(){", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function(l119.function("var ", "x", " = ", v587, ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l119.function("if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l119.function("return ", (function(){
                            return l119.function("(x.car = ", v588, ")");
                        })(), ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v585),(function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v586));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l243 = {name: "SETCDR"};
(function(){
    return (l230).value = ({car: l44.function(l243, (function (v589,v590){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v591,v592){
                        return l119.function("(function(){", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function(l119.function("var ", "x", " = ", v591, ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l119.function("if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l119.function("return ", (function(){
                            return l119.function("(x.cdr = ", v592, ")");
                        })(), ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v589),(function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v590));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l244 = {name: "SYMBOLP"};
(function(){
    return (l230).value = ({car: l44.function(l244, (function (v593){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v594){
                        return l125.function(l119.function("(function(){", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function("var tmp = ", v594, ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return (typeof tmp == 'object' && 'name' in tmp);", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()"));
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v593));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l245 = {name: "MAKE-SYMBOL"};
(function(){
    return (l230).value = ({car: l44.function(l245, (function (v595){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v596){
                        return l119.function("(function(){", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function(l119.function("var ", "name", " = ", v596, ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l119.function("if (typeof ", "name", " != '", "string", "')", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function("throw 'The value ' + ", "name", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l119.function("return ", (function(){
                            return "({name: name})";
                        })(), ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v595));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l246 = {name: "SYMBOL-NAME"};
(function(){
    return (l230).value = ({car: l44.function(l246, (function (v597){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v598){
                        return l119.function("(", v598, ").name");
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v597));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l230).value = ({car: l44.function(l202, (function (v599,v600){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v601,v602){
                        return l119.function("(", v601, ").value = ", v602);
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v599),(function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v600));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l247 = {name: "FSET"};
(function(){
    return (l230).value = ({car: l44.function(l247, (function (v603,v604){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v605,v606){
                        return l119.function("(", v605, ").function = ", v606);
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v603),(function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v604));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l230).value = ({car: l44.function(l17, (function (v607){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v608){
                        return l125.function(l119.function("(", v608, ".value !== undefined)"));
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v607));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l248 = {name: "SYMBOL-VALUE"};
(function(){
    return (l230).value = ({car: l44.function(l248, (function (v609){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v610){
                        return l119.function("(function(){", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function("var symbol = ", v610, ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var value = symbol.value;", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (value === undefined) throw \"Variable `\" + symbol.name + \"' is unbound.\";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return value;", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v609));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l230).value = ({car: l44.function(l210, (function (v611){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v612){
                        return l119.function("(function(){", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function("var symbol = ", v612, ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var func = symbol.function;", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (func === undefined) throw \"Function `\" + symbol.name + \"' is undefined.\";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return func;", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v611));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l249 = {name: "SYMBOL-PLIST"};
(function(){
    return (l230).value = ({car: l44.function(l249, (function (v613){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v614){
                        return l119.function("((", v614, ").plist || ", (function(){
                            var symbol = l126;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ")");
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v613));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l250 = {name: "LAMBDA-CODE"};
(function(){
    return (l230).value = ({car: l44.function(l250, (function (v615){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v616){
                        return l119.function("(", v616, ").toString()");
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v615));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l251 = {name: "EQ"};
(function(){
    return (l230).value = ({car: l44.function(l251, (function (v617,v618){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v619,v620){
                        return l125.function(l119.function("(", v619, " === ", v620, ")"));
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v617),(function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v618));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l252 = {name: "EQUAL"};
(function(){
    return (l230).value = ({car: l44.function(l252, (function (v621,v622){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v623,v624){
                        return l125.function(l119.function("(", v623, " == ", v624, ")"));
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v621),(function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v622));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l253 = {name: "CHAR-TO-STRING"};
(function(){
    return (l230).value = ({car: l44.function(l253, (function (v625){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v626){
                        return l119.function("(function(){", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function(l119.function("var ", "x", " = ", v626, ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l119.function("if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l119.function("return ", (function(){
                            return "String.fromCharCode(x)";
                        })(), ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v625));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l254 = {name: "STRINGP"};
(function(){
    return (l230).value = ({car: l44.function(l254, (function (v627){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v628){
                        return l125.function(l119.function("(typeof(", v628, ") == \"string\")"));
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v627));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l255 = {name: "STRING-UPCASE"};
(function(){
    return (l230).value = ({car: l44.function(l255, (function (v629){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v630){
                        return l119.function("(function(){", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function(l119.function("var ", "x", " = ", v630, ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l119.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l119.function("return ", (function(){
                            return "x.toUpperCase()";
                        })(), ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v629));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l256 = {name: "STRING-LENGTH"};
(function(){
    return (l230).value = ({car: l44.function(l256, (function (v631){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v632){
                        return l119.function("(function(){", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function(l119.function("var ", "x", " = ", v632, ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l119.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l119.function("return ", (function(){
                            return "x.length";
                        })(), ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v631));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l257 = {name: "SLICE"};
(l230).value = ({car: l44.function(l257, (function (v633,v634,v635){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    switch(arguments.length){
    case 2:
    v635=l3.value;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return l119.function("(function(){", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l124.function("var str = ", (function(){
                    var symbol = l126;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v633), ";", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var a = ", (function(){
                    var symbol = l126;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v634), ";", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var b;", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (v635 !== l3.value ? l119.function("b = ", (function(){
                    var symbol = l126;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v635), ";", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()) : ""), "return str.slice(a,b);", (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
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
    var symbol = l230;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l258 = {name: "CHAR"};
(function(){
    return (l230).value = ({car: l44.function(l258, (function (v636,v637){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v638,v639){
                        return l119.function("(function(){", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function(l119.function("var ", "string", " = ", v638, ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l119.function("var ", "index", " = ", v639, ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l119.function("if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l119.function("if (typeof ", "index", " != '", "number", "')", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function("throw 'The value ' + ", "index", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l119.function("return ", (function(){
                            return "string.charCodeAt(index)";
                        })(), ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v636),(function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v637));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l230).value = ({car: l44.function(l67, (function (v640,v641){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v642,v643){
                        return l119.function("(function(){", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function(l119.function("var ", "string1", " = ", v642, ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l119.function("var ", "string2", " = ", v643, ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l119.function("if (typeof ", "string1", " != '", "string", "')", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function("throw 'The value ' + ", "string1", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l119.function("if (typeof ", "string2", " != '", "string", "')", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function("throw 'The value ' + ", "string2", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l119.function("return ", (function(){
                            return "string1.concat(string2)";
                        })(), ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v640),(function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v641));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l259 = {name: "FUNCALL"};
(l230).value = ({car: l44.function(l259, (function (v645){
    if (arguments.length < 1) throw 'too few arguments';
    var v644= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v644 = {car: arguments[i], cdr: 
    v644};
    return (function(){
        try {
            return (function(){
                return l119.function("(", (function(){
                    var symbol = l126;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v645), ")(", l121.function(l68.function((function(){
                    var symbol = l126;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v644), ", "), ")");
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
    var symbol = l230;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l260 = {name: "APPLY"};
(l230).value = ({car: l44.function(l260, (function (v647){
    if (arguments.length < 1) throw 'too few arguments';
    var v646= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v646 = {car: arguments[i], cdr: 
    v646};
    return (function(){
        try {
            return (function(){
                return (l11.function(v646) !== l3.value ? l119.function("(", (function(){
                    var symbol = l126;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v647), ")()") : (function(v648,v649){
                    return l119.function("(function(){", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l124.function("var f = ", (function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v647), ";", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var args = [", l121.function(l68.function((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v648), ", "), "];", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var tail = (", (function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v649), ");", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "while (tail != ", (function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l3.value), "){", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    args.push(tail.car);", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    tail = tail.cdr;", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "}", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "return f.apply(this, args);", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()");
                })(l80.function(v646),(function(){
                    var tmp = l79.function(v646);
                    return tmp === l3.value? l3.value: tmp.car;
                })()));
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
    var symbol = l230;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l261 = {name: "JS-EVAL"};
(function(){
    return (l230).value = ({car: l44.function(l261, (function (v650){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v651){
                        return l119.function("(function(){", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function(l119.function("var ", "string", " = ", v651, ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l119.function("if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l119.function("return ", (function(){
                            return "eval.apply(window, [string])";
                        })(), ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v650));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l262 = {name: "ERROR"};
(function(){
    return (l230).value = ({car: l44.function(l262, (function (v652){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v653){
                        return l119.function("(function(){", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function("throw ", v653, ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v652));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l263 = {name: "NEW"};
(function(){
    return (l230).value = ({car: l44.function(l263, (function (){
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
                if (cf.type == 'block' && cf.id == 236)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l264 = {name: "OBJECTP"};
(function(){
    return (l230).value = ({car: l44.function(l264, (function (v654){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v655){
                        return l125.function(l119.function("(typeof (", v655, ") === 'object')"));
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v654));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l265 = {name: "OGET"};
(function(){
    return (l230).value = ({car: l44.function(l265, (function (v656,v657){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v658,v659){
                        return l119.function("(function(){", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function("var tmp = ", "(", v658, ")[", v659, "];", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp == undefined? ", (function(){
                            var symbol = l126;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ": tmp ;", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v656),(function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v657));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l266 = {name: "OSET"};
(function(){
    return (l230).value = ({car: l44.function(l266, (function (v660,v661,v662){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v663,v664,v665){
                        return l119.function("((", v663, ")[", v664, "] = ", v665, ")");
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v660),(function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v661),(function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v662));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l267 = {name: "IN"};
(function(){
    return (l230).value = ({car: l44.function(l267, (function (v666,v667){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v668,v669){
                        return l125.function(l119.function("((", v668, ") in (", v669, "))"));
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v666),(function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v667));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l268 = {name: "FUNCTIONP"};
(function(){
    return (l230).value = ({car: l44.function(l268, (function (v670){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v671){
                        return l125.function(l119.function("(typeof ", v671, " == 'function')"));
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v670));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l269 = {name: "WRITE-STRING"};
(function(){
    return (l230).value = ({car: l44.function(l269, (function (v672){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v673){
                        return l119.function("(function(){", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function(l119.function("var ", "x", " = ", v673, ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l119.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l124.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l119.function("return ", (function(){
                            return "lisp.write(x)";
                        })(), ";", (function(){
                            var symbol = l118;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v672));
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
        var symbol = l230;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    (l178).function = (function(v676){
        ((v676)["fname"] = "MACRO");
        return v676;
    })((function (v674){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v674;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(v675){
                        return (((l154.function(v675) === l178)?l4.value: l3.value) !== l3.value ? v675 : l3.value);
                    })(l166.function(v674, (function(){
                        var symbol = l167;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l97)) : l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 243)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l178;
})();
var l270 = {name: "LS-MACROEXPAND-1"};
(function(){
    (l270).function = (function(v681){
        ((v681)["fname"] = "LS-MACROEXPAND-1");
        return v681;
    })((function (v677){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v678){
                        return (v678 !== l3.value ? (function(v679){
                            (l59.function(v679) !== l3.value ? (function(){
                                return (function(v680){
                                    l157.function(v678, v680);
                                    return v679 = v680;
                                })((function(){
                                    var symbol = l212;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v679));
                            })() : l3.value);
                            return (function(){
                                var f = v679;
                                var args = [];
                                var tail = ((function(){
                                    var tmp = v677;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                                while (tail != l3.value){
                                    args.push(tail.car);
                                    tail = tail.cdr;
                                }
                                return f.apply(this, args);
                            })();
                        })(l155.function(v678)) : v677);
                    })(l178.function((function(){
                        var tmp = v677;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 244)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l270;
})();
var l271 = {name: "COMPILE-FUNCALL"};
(function(){
    (l271).function = (function(v684){
        ((v684)["fname"] = "COMPILE-FUNCALL");
        return v684;
    })((function (v682,v683){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((((function(){
                        var tmp = v682;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? l180.function(v682, l97, l184) : l3.value) !== l3.value ? l119.function((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l44.function(l146), l44.function(v682))), ".function(", l121.function(l68.function((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v683), ", "), ")") : l119.function((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l44.function(l97), l44.function(v682))), "(", l121.function(l68.function((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v683), ", "), ")"));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 245)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l271;
})();
(function(){
    (l200).function = (function(v687){
        ((v687)["fname"] = "LS-COMPILE-BLOCK");
        return v687;
    })((function (v685,v686){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v686=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (v686 !== l3.value ? l119.function(l200.function(l80.function(v685)), "return ", (function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = l79.function(v685);
                        return tmp === l3.value? l3.value: tmp.car;
                    })()), ";") : l122.function(l83.function((function(){
                        var symbol = l175;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l68.function((function(){
                        var symbol = l126;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v685)), l119.function(";", (function(){
                        var symbol = l118;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 246)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l200;
})();
(function(){
    (l126).function = (function(v694){
        ((v694)["fname"] = "LS-COMPILE");
        return v694;
    })((function (v688){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v688;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v689){
                            return (((l154.function(v689) === l172)?l4.value: l3.value) !== l3.value ? (function(){
                                return l155.function(v689);
                            })() : (l180.function(v688, l98, l183) !== l3.value ? (function(){
                                return l119.function(l126.function(l62.function(l44.function(l146), l44.function(v688))), ".value");
                            })() : (function(){
                                return l126.function(l62.function(l44.function(l248), l44.function(l62.function(l44.function(l146), l44.function(v688)))));
                            })()));
                        })(l166.function(v688, (function(){
                            var symbol = l167;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l98));
                    })() : (l74.function(v688) !== l3.value ? (function(){
                        return l16.function(v688);
                    })() : (((typeof(v688) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l119.function("\"", l129.function(v688), "\"");
                    })() : (l59.function(v688) !== l3.value ? (function(){
                        return (function(v690,v691){
                            return (l90.function(v690, (function(){
                                var symbol = l186;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== l3.value ? (function(){
                                return (function(v692){
                                    return (function(){
                                        var f = v692;
                                        var args = [];
                                        var tail = (v691);
                                        while (tail != l3.value){
                                            args.push(tail.car);
                                            tail = tail.cdr;
                                        }
                                        return f.apply(this, args);
                                    })();
                                })(l41.function(l90.function(v690, (function(){
                                    var symbol = l186;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })())));
                            })() : ((l90.function(v690, (function(){
                                var symbol = l230;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== l3.value ? l28.function(l180.function(v690, l97, l182)) : l3.value) !== l3.value ? (function(){
                                return (function(v693){
                                    return (function(){
                                        var f = v693;
                                        var args = [];
                                        var tail = (v691);
                                        while (tail != l3.value){
                                            args.push(tail.car);
                                            tail = tail.cdr;
                                        }
                                        return f.apply(this, args);
                                    })();
                                })(l41.function(l90.function(v690, (function(){
                                    var symbol = l230;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })())));
                            })() : (function(){
                                return (l178.function(v690) !== l3.value ? l126.function(l270.function(v688)) : l271.function(v690, v691));
                            })()));
                        })((function(){
                            var tmp = v688;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(),(function(){
                            var tmp = v688;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : l3.value))));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 247)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l126;
})();
var l272 = {name: "LS-COMPILE-TOPLEVEL"};
(function(){
    (l272).function = (function(v699){
        ((v699)["fname"] = "LS-COMPILE-TOPLEVEL");
        return v699;
    })((function (v695){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v696){
                        try {
                            var tmp;
                            tmp = l173.value;
                            l173.value = v696;
                            v696 = tmp;
                            return ((((function(){
                                var tmp = v695;
                                return (typeof tmp == 'object' && 'car' in tmp);
                            })()?l4.value: l3.value) !== l3.value ? (((function(){
                                var tmp = v695;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l213)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return (function(v697){
                                    return l121.function(l83.function((function(){
                                        var symbol = l175;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })(), v697));
                                })(l68.function((function(){
                                    var symbol = l272;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })(), (function(){
                                    var tmp = v695;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })()));
                            })() : (function(){
                                return (function(v698){
                                    return l119.function(l122.function(l176.function(), l119.function(";", (function(){
                                        var symbol = l118;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })())), (v698 !== l3.value ? l119.function(v698, ";", (function(){
                                        var symbol = l118;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()) : ""));
                                })(l126.function(v695));
                            })());
                        }
                        finally {
                            l173.value = v696;
                        }
                    })(l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 248)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l272;
})();
var l273 = {name: "WITH-COMPILATION-UNIT"};
l273;
(function(){
    (l212).function = (function(v705){
        ((v705)["fname"] = "EVAL");
        return v705;
    })((function (v700){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v704){
                        return (function(){
                            var string = v704;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            return eval.apply(window, [string]);
                        })();
                    })((function(v701){
                        (function(){
                            try {
                                return (function(){
                                    return (function(v702,v703){
                                        (function(){
                                            while(v702 !== l3.value){
                                                v703 = (function(){
                                                    var tmp = v702;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    (v703)();
                                                    return l3.value;
                                                })();
                                                v702 = (function(){
                                                    var tmp = v702;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return l3.value;
                                    })((function(){
                                        var symbol = l151;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })(),l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 250)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v701;
                    })((function(){
                        (l151).value = l3.value;
                        return l272.function(v700);
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 249)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l212;
})();
var l274 = {name: "PRON"};
var l275 = {car: l21, cdr: {car: l14, cdr: {car: l110, cdr: {car: l19, cdr: {car: l20, cdr: {car: l22, cdr: {car: l23, cdr: {car: l24, cdr: {car: l236, cdr: {car: l238, cdr: {car: l18, cdr: {car: l18, cdr: {car: l237, cdr: {car: l239, cdr: {car: l54, cdr: {car: l62, cdr: {car: l260, cdr: {car: l90, cdr: {car: l45, cdr: {car: l163, cdr: {car: l17, cdr: {car: l17, cdr: {car: l80, cdr: {car: l33, cdr: {car: l39, cdr: {car: l37, cdr: {car: l34, cdr: {car: l31, cdr: {car: l31, cdr: {car: l52, cdr: {car: l219, cdr: {car: l35, cdr: {car: l38, cdr: {car: l36, cdr: {car: l32, cdr: {car: l32, cdr: {car: l258, cdr: {car: l72, cdr: {car: l73, cdr: {car: l71, cdr: {car: l51, cdr: {car: l29, cdr: {car: l30, cdr: {car: l70, cdr: {car: l47, cdr: {car: l2, cdr: {car: l8, cdr: {car: l10, cdr: {car: l7, cdr: {car: l85, cdr: {car: l94, cdr: {car: l96, cdr: {car: l49, cdr: {car: l50, cdr: {car: l53, cdr: {car: l251, cdr: {car: l27, cdr: {car: l252, cdr: {car: l262, cdr: {car: l212, cdr: {car: l89, cdr: {car: l117, cdr: {car: l93, cdr: {car: l103, cdr: {car: l114, cdr: {car: l40, cdr: {car: l43, cdr: {car: l247, cdr: {car: l259, cdr: {car: l97, cdr: {car: l268, cdr: {car: l15, cdr: {car: l226, cdr: {car: l69, cdr: {car: l111, cdr: {car: l46, cdr: {car: l74, cdr: {car: l74, cdr: {car: l115, cdr: {car: l250, cdr: {car: l79, cdr: {car: l66, cdr: {car: l216, cdr: {car: l44, cdr: {car: l59, cdr: {car: l100, cdr: {car: l245, cdr: {car: l68, cdr: {car: l81, cdr: {car: l76, cdr: {car: l235, cdr: {car: l3, cdr: {car: l28, cdr: {car: l78, cdr: {car: l77, cdr: {car: l11, cdr: {car: l240, cdr: {car: l55, cdr: {car: l104, cdr: {car: l106, cdr: {car: l102, cdr: {car: l75, cdr: {car: l128, cdr: {car: l131, cdr: {car: l185, cdr: {car: l56, cdr: {car: l57, cdr: {car: l274, cdr: {car: l48, cdr: {car: l146, cdr: {car: l82, cdr: {car: l83, cdr: {car: l84, cdr: {car: l12, cdr: {car: l218, cdr: {car: l63, cdr: {car: l64, cdr: {car: l41, cdr: {car: l202, cdr: {car: l201, cdr: {car: l88, cdr: {car: l255, cdr: {car: l91, cdr: {car: l92, cdr: {car: l254, cdr: {car: l86, cdr: {car: l210, cdr: {car: l246, cdr: {car: l116, cdr: {car: l249, cdr: {car: l248, cdr: {car: l244, cdr: {car: l4, cdr: {car: l225, cdr: {car: l42, cdr: {car: l220, cdr: {car: l26, cdr: {car: l6, cdr: {car: l227, cdr: {car: l98, cdr: {car: l130, cdr: {car: l5, cdr: {car: l95, cdr: {car: l269, cdr: {car: l25, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
l117.function(l275);
(l110).value = (function(){
    var symbol = l109;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})();
(function(){
    var string = "var lisp";
    if (typeof string != 'string')
        throw 'The value ' + string + ' is not a type string.';
    return eval.apply(window, [string]);
})();
(lisp = {});
(lisp.read = (function(){
    var symbol = l150;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.print = (function(){
    var symbol = l128;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.eval = (function(){
    var symbol = l212;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.compile = (function(){
    var symbol = l272;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.evalString = (function (v706){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return l212.function(l150.function(v706));

}));
(lisp.compileString = (function (v707){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return l272.function(l150.function(v707));

}));
var l276 = {car: {car: l274, cdr: "l274"}, cdr: {car: {car: l273, cdr: "l273"}, cdr: {car: {car: l272, cdr: "l272"}, cdr: {car: {car: l271, cdr: "l271"}, cdr: {car: {car: l270, cdr: "l270"}, cdr: {car: {car: l269, cdr: "l269"}, cdr: {car: {car: l268, cdr: "l268"}, cdr: {car: {car: l267, cdr: "l267"}, cdr: {car: {car: l266, cdr: "l266"}, cdr: {car: {car: l265, cdr: "l265"}, cdr: {car: {car: l264, cdr: "l264"}, cdr: {car: {car: l263, cdr: "l263"}, cdr: {car: {car: l262, cdr: "l262"}, cdr: {car: {car: l261, cdr: "l261"}, cdr: {car: {car: l260, cdr: "l260"}, cdr: {car: {car: l259, cdr: "l259"}, cdr: {car: {car: l258, cdr: "l258"}, cdr: {car: {car: l257, cdr: "l257"}, cdr: {car: {car: l256, cdr: "l256"}, cdr: {car: {car: l255, cdr: "l255"}, cdr: {car: {car: l254, cdr: "l254"}, cdr: {car: {car: l253, cdr: "l253"}, cdr: {car: {car: l252, cdr: "l252"}, cdr: {car: {car: l251, cdr: "l251"}, cdr: {car: {car: l250, cdr: "l250"}, cdr: {car: {car: l249, cdr: "l249"}, cdr: {car: {car: l248, cdr: "l248"}, cdr: {car: {car: l247, cdr: "l247"}, cdr: {car: {car: l246, cdr: "l246"}, cdr: {car: {car: l245, cdr: "l245"}, cdr: {car: {car: l244, cdr: "l244"}, cdr: {car: {car: l243, cdr: "l243"}, cdr: {car: {car: l242, cdr: "l242"}, cdr: {car: {car: l241, cdr: "l241"}, cdr: {car: {car: l240, cdr: "l240"}, cdr: {car: {car: l239, cdr: "l239"}, cdr: {car: {car: l238, cdr: "l238"}, cdr: {car: {car: l237, cdr: "l237"}, cdr: {car: {car: l236, cdr: "l236"}, cdr: {car: {car: l235, cdr: "l235"}, cdr: {car: {car: l234, cdr: "l234"}, cdr: {car: {car: l233, cdr: "l233"}, cdr: {car: {car: l232, cdr: "l232"}, cdr: {car: {car: l231, cdr: "l231"}, cdr: {car: {car: l230, cdr: "l230"}, cdr: {car: {car: l229, cdr: "l229"}, cdr: {car: {car: l228, cdr: "l228"}, cdr: {car: {car: l227, cdr: "l227"}, cdr: {car: {car: l226, cdr: "l226"}, cdr: {car: {car: l225, cdr: "l225"}, cdr: {car: {car: l224, cdr: "l224"}, cdr: {car: {car: l223, cdr: "l223"}, cdr: {car: {car: l222, cdr: "l222"}, cdr: {car: {car: l221, cdr: "l221"}, cdr: {car: {car: l220, cdr: "l220"}, cdr: {car: {car: l219, cdr: "l219"}, cdr: {car: {car: l218, cdr: "l218"}, cdr: {car: {car: l217, cdr: "l217"}, cdr: {car: {car: l216, cdr: "l216"}, cdr: {car: {car: l215, cdr: "l215"}, cdr: {car: {car: l214, cdr: "l214"}, cdr: {car: {car: l213, cdr: "l213"}, cdr: {car: {car: l212, cdr: "l212"}, cdr: {car: {car: l211, cdr: "l211"}, cdr: {car: {car: l210, cdr: "l210"}, cdr: {car: {car: l209, cdr: "l209"}, cdr: {car: {car: l208, cdr: "l208"}, cdr: {car: {car: l207, cdr: "l207"}, cdr: {car: {car: l206, cdr: "l206"}, cdr: {car: {car: l205, cdr: "l205"}, cdr: {car: {car: l204, cdr: "l204"}, cdr: {car: {car: l203, cdr: "l203"}, cdr: {car: {car: l202, cdr: "l202"}, cdr: {car: {car: l201, cdr: "l201"}, cdr: {car: {car: l200, cdr: "l200"}, cdr: {car: {car: l199, cdr: "l199"}, cdr: {car: {car: l198, cdr: "l198"}, cdr: {car: {car: l197, cdr: "l197"}, cdr: {car: {car: l196, cdr: "l196"}, cdr: {car: {car: l195, cdr: "l195"}, cdr: {car: {car: l194, cdr: "l194"}, cdr: {car: {car: l193, cdr: "l193"}, cdr: {car: {car: l191, cdr: "l191"}, cdr: {car: {car: l190, cdr: "l190"}, cdr: {car: {car: l189, cdr: "l189"}, cdr: {car: {car: l188, cdr: "l188"}, cdr: {car: {car: l187, cdr: "l187"}, cdr: {car: {car: l186, cdr: "l186"}, cdr: {car: {car: l185, cdr: "l185"}, cdr: {car: {car: l184, cdr: "l184"}, cdr: {car: {car: l183, cdr: "l183"}, cdr: {car: {car: l182, cdr: "l182"}, cdr: {car: {car: l181, cdr: "l181"}, cdr: {car: {car: l180, cdr: "l180"}, cdr: {car: {car: l179, cdr: "l179"}, cdr: {car: {car: l178, cdr: "l178"}, cdr: {car: {car: l177, cdr: "l177"}, cdr: {car: {car: l176, cdr: "l176"}, cdr: {car: {car: l175, cdr: "l175"}, cdr: {car: {car: l174, cdr: "l174"}, cdr: {car: {car: l173, cdr: "l173"}, cdr: {car: {car: l172, cdr: "l172"}, cdr: {car: {car: l171, cdr: "l171"}, cdr: {car: {car: l170, cdr: "l170"}, cdr: {car: {car: l169, cdr: "l169"}, cdr: {car: {car: l168, cdr: "l168"}, cdr: {car: {car: l167, cdr: "l167"}, cdr: {car: {car: l166, cdr: "l166"}, cdr: {car: {car: l165, cdr: "l165"}, cdr: {car: {car: l164, cdr: "l164"}, cdr: {car: {car: l163, cdr: "l163"}, cdr: {car: {car: l162, cdr: "l162"}, cdr: {car: {car: l161, cdr: "l161"}, cdr: {car: {car: l160, cdr: "l160"}, cdr: {car: {car: l159, cdr: "l159"}, cdr: {car: {car: l158, cdr: "l158"}, cdr: {car: {car: l157, cdr: "l157"}, cdr: {car: {car: l156, cdr: "l156"}, cdr: {car: {car: l155, cdr: "l155"}, cdr: {car: {car: l154, cdr: "l154"}, cdr: {car: {car: l153, cdr: "l153"}, cdr: {car: {car: l152, cdr: "l152"}, cdr: {car: {car: l151, cdr: "l151"}, cdr: {car: {car: l150, cdr: "l150"}, cdr: {car: {car: l149, cdr: "l149"}, cdr: {car: {car: l148, cdr: "l148"}, cdr: {car: {car: l147, cdr: "l147"}, cdr: {car: {car: l146, cdr: "l146"}, cdr: {car: {car: l145, cdr: "l145"}, cdr: {car: {car: l144, cdr: "l144"}, cdr: {car: {car: l143, cdr: "l143"}, cdr: {car: {car: l142, cdr: "l142"}, cdr: {car: {car: l141, cdr: "l141"}, cdr: {car: {car: l140, cdr: "l140"}, cdr: {car: {car: l139, cdr: "l139"}, cdr: {car: {car: l138, cdr: "l138"}, cdr: {car: {car: l137, cdr: "l137"}, cdr: {car: {car: l136, cdr: "l136"}, cdr: {car: {car: l135, cdr: "l135"}, cdr: {car: {car: l134, cdr: "l134"}, cdr: {car: {car: l133, cdr: "l133"}, cdr: {car: {car: l132, cdr: "l132"}, cdr: {car: {car: l131, cdr: "l131"}, cdr: {car: {car: l130, cdr: "l130"}, cdr: {car: {car: l129, cdr: "l129"}, cdr: {car: {car: l128, cdr: "l128"}, cdr: {car: {car: l127, cdr: "l127"}, cdr: {car: {car: l126, cdr: "l126"}, cdr: {car: {car: l125, cdr: "l125"}, cdr: {car: {car: l124, cdr: "l124"}, cdr: {car: {car: l123, cdr: "l123"}, cdr: {car: {car: l122, cdr: "l122"}, cdr: {car: {car: l121, cdr: "l121"}, cdr: {car: {car: l120, cdr: "l120"}, cdr: {car: {car: l119, cdr: "l119"}, cdr: {car: {car: l118, cdr: "l118"}, cdr: {car: {car: l117, cdr: "l117"}, cdr: {car: {car: l116, cdr: "l116"}, cdr: {car: {car: l115, cdr: "l115"}, cdr: {car: {car: l114, cdr: "l114"}, cdr: {car: {car: l113, cdr: "l113"}, cdr: {car: {car: l112, cdr: "l112"}, cdr: {car: {car: l111, cdr: "l111"}, cdr: {car: {car: l110, cdr: "l110"}, cdr: {car: {car: l109, cdr: "l109"}, cdr: {car: {car: l108, cdr: "l108"}, cdr: {car: {car: l107, cdr: "l107"}, cdr: {car: {car: l106, cdr: "l106"}, cdr: {car: {car: l105, cdr: "l105"}, cdr: {car: {car: l104, cdr: "l104"}, cdr: {car: {car: l103, cdr: "l103"}, cdr: {car: {car: l102, cdr: "l102"}, cdr: {car: {car: l101, cdr: "l101"}, cdr: {car: {car: l100, cdr: "l100"}, cdr: {car: {car: l99, cdr: "l99"}, cdr: {car: {car: l98, cdr: "l98"}, cdr: {car: {car: l97, cdr: "l97"}, cdr: {car: {car: l96, cdr: "l96"}, cdr: {car: {car: l95, cdr: "l95"}, cdr: {car: {car: l94, cdr: "l94"}, cdr: {car: {car: l93, cdr: "l93"}, cdr: {car: {car: l92, cdr: "l92"}, cdr: {car: {car: l91, cdr: "l91"}, cdr: {car: {car: l90, cdr: "l90"}, cdr: {car: {car: l89, cdr: "l89"}, cdr: {car: {car: l88, cdr: "l88"}, cdr: {car: {car: l87, cdr: "l87"}, cdr: {car: {car: l86, cdr: "l86"}, cdr: {car: {car: l85, cdr: "l85"}, cdr: {car: {car: l84, cdr: "l84"}, cdr: {car: {car: l83, cdr: "l83"}, cdr: {car: {car: l82, cdr: "l82"}, cdr: {car: {car: l81, cdr: "l81"}, cdr: {car: {car: l80, cdr: "l80"}, cdr: {car: {car: l79, cdr: "l79"}, cdr: {car: {car: l78, cdr: "l78"}, cdr: {car: {car: l77, cdr: "l77"}, cdr: {car: {car: l76, cdr: "l76"}, cdr: {car: {car: l75, cdr: "l75"}, cdr: {car: {car: l74, cdr: "l74"}, cdr: {car: {car: l73, cdr: "l73"}, cdr: {car: {car: l72, cdr: "l72"}, cdr: {car: {car: l71, cdr: "l71"}, cdr: {car: {car: l70, cdr: "l70"}, cdr: {car: {car: l69, cdr: "l69"}, cdr: {car: {car: l68, cdr: "l68"}, cdr: {car: {car: l67, cdr: "l67"}, cdr: {car: {car: l66, cdr: "l66"}, cdr: {car: {car: l65, cdr: "l65"}, cdr: {car: {car: l64, cdr: "l64"}, cdr: {car: {car: l63, cdr: "l63"}, cdr: {car: {car: l62, cdr: "l62"}, cdr: {car: {car: l61, cdr: "l61"}, cdr: {car: {car: l60, cdr: "l60"}, cdr: {car: {car: l59, cdr: "l59"}, cdr: {car: {car: l58, cdr: "l58"}, cdr: {car: {car: l57, cdr: "l57"}, cdr: {car: {car: l56, cdr: "l56"}, cdr: {car: {car: l55, cdr: "l55"}, cdr: {car: {car: l54, cdr: "l54"}, cdr: {car: {car: l53, cdr: "l53"}, cdr: {car: {car: l52, cdr: "l52"}, cdr: {car: {car: l51, cdr: "l51"}, cdr: {car: {car: l50, cdr: "l50"}, cdr: {car: {car: l49, cdr: "l49"}, cdr: {car: {car: l48, cdr: "l48"}, cdr: {car: {car: l47, cdr: "l47"}, cdr: {car: {car: l46, cdr: "l46"}, cdr: {car: {car: l45, cdr: "l45"}, cdr: {car: {car: l44, cdr: "l44"}, cdr: {car: {car: l43, cdr: "l43"}, cdr: {car: {car: l42, cdr: "l42"}, cdr: {car: {car: l41, cdr: "l41"}, cdr: {car: {car: l40, cdr: "l40"}, cdr: {car: {car: l39, cdr: "l39"}, cdr: {car: {car: l38, cdr: "l38"}, cdr: {car: {car: l37, cdr: "l37"}, cdr: {car: {car: l36, cdr: "l36"}, cdr: {car: {car: l35, cdr: "l35"}, cdr: {car: {car: l34, cdr: "l34"}, cdr: {car: {car: l33, cdr: "l33"}, cdr: {car: {car: l32, cdr: "l32"}, cdr: {car: {car: l31, cdr: "l31"}, cdr: {car: {car: l30, cdr: "l30"}, cdr: {car: {car: l29, cdr: "l29"}, cdr: {car: {car: l28, cdr: "l28"}, cdr: {car: {car: l27, cdr: "l27"}, cdr: {car: {car: l26, cdr: "l26"}, cdr: {car: {car: l25, cdr: "l25"}, cdr: {car: {car: l24, cdr: "l24"}, cdr: {car: {car: l23, cdr: "l23"}, cdr: {car: {car: l22, cdr: "l22"}, cdr: {car: {car: l21, cdr: "l21"}, cdr: {car: {car: l20, cdr: "l20"}, cdr: {car: {car: l19, cdr: "l19"}, cdr: {car: {car: l18, cdr: "l18"}, cdr: {car: {car: l17, cdr: "l17"}, cdr: {car: {car: l16, cdr: "l16"}, cdr: {car: {car: l15, cdr: "l15"}, cdr: {car: {car: l14, cdr: "l14"}, cdr: {car: {car: l13, cdr: "l13"}, cdr: {car: {car: l12, cdr: "l12"}, cdr: {car: {car: l11, cdr: "l11"}, cdr: {car: {car: l10, cdr: "l10"}, cdr: {car: {car: l9, cdr: "l9"}, cdr: {car: {car: l8, cdr: "l8"}, cdr: {car: {car: l7, cdr: "l7"}, cdr: {car: {car: l6, cdr: "l6"}, cdr: {car: {car: l5, cdr: "l5"}, cdr: {car: {car: l4, cdr: "l4"}, cdr: {car: {car: l3, cdr: "l3"}, cdr: {car: {car: l2, cdr: "l2"}, cdr: {car: {car: l1, cdr: "l1"}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
var l277 = {name: "BODY"};
var l278 = {name: "CHECK"};
var l279 = {name: "DECLS"};
var l280 = {name: "DECL"};
var l281 = {name: "NAME"};
var l282 = {name: "ARGS"};
var l283 = {name: "ARG"};
var l284 = {name: "FORM"};
var l285 = {name: "PACKAGE-DESIGNATOR"};
var l286 = {name: "FORM1"};
var l287 = {name: "RESULT"};
var l288 = {name: "VALUE"};
var l289 = {name: "FORMS"};
var l290 = {name: "G"};
var l291 = {name: "CLAUSULES"};
var l292 = {name: "!FORM"};
var l293 = {name: "CLAUSULE"};
var l294 = {name: "ITER"};
var l295 = {name: "G!TO"};
var l296 = {name: "VAR"};
var l297 = {name: "TO"};
var l298 = {name: "G!LIST"};
var l299 = {name: "X"};
var l300 = {name: "PLACE"};
var l301 = {name: "DELTA"};
var l302 = {name: "CONDITION"};
var l303 = {name: "DOCSTRING"};
var l304 = {name: "&BODY"};
var l305 = {car: {car: {car: l4, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l183, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l3, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l183, cdr: l3}, cdr: l3}}}}, cdr: l3}}, cdr: {car: {car: {car: l212, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l273, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l191, cdr: {car: l277, cdr: l3}}, cdr: {car: {car: l147, cdr: {car: {car: l56, cdr: {car: {car: l213, cdr: {car: {car: l201, cdr: {car: l151, cdr: {car: l3, cdr: l3}}}, cdr: {car: {car: l148, cdr: {car: l277, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l49, cdr: {car: {car: l278, cdr: {car: l151, cdr: l3}}, cdr: {car: {car: l259, cdr: {car: l278, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l272, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l126, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l200, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l271, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l270, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l178, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l234, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l233, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l279, cdr: {car: l191, cdr: {car: l277, cdr: l3}}}, cdr: {car: {car: l147, cdr: {car: {car: l127, cdr: {car: {car: l148, cdr: {car: {car: l68, cdr: {car: {car: l199, cdr: {car: {car: l280, cdr: l3}, cdr: {car: {car: l147, cdr: {car: {car: l119, cdr: {car: "var ", cdr: {car: {car: l149, cdr: {car: {car: l40, cdr: {car: l280, cdr: l3}}, cdr: l3}}, cdr: {car: " = ", cdr: {car: {car: l149, cdr: {car: {car: l42, cdr: {car: l280, cdr: l3}}, cdr: l3}}, cdr: {car: ";", cdr: {car: l118, cdr: l3}}}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l279, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l148, cdr: {car: {car: l68, cdr: {car: {car: l199, cdr: {car: {car: l280, cdr: l3}, cdr: {car: {car: l147, cdr: {car: {car: l119, cdr: {car: "if (typeof ", cdr: {car: {car: l149, cdr: {car: {car: l40, cdr: {car: l280, cdr: l3}}, cdr: l3}}, cdr: {car: " != '", cdr: {car: {car: l149, cdr: {car: {car: l41, cdr: {car: l280, cdr: l3}}, cdr: l3}}, cdr: {car: "')", cdr: {car: l118, cdr: {car: {car: l124, cdr: {car: "throw 'The value ' + ", cdr: {car: {car: l149, cdr: {car: {car: l40, cdr: {car: l280, cdr: l3}}, cdr: l3}}, cdr: {car: " + ' is not a type ", cdr: {car: {car: l149, cdr: {car: {car: l41, cdr: {car: l280, cdr: l3}}, cdr: l3}}, cdr: {car: ".';", cdr: {car: l118, cdr: l3}}}}}}}, cdr: l3}}}}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l279, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l119, cdr: {car: "return ", cdr: {car: {car: l213, cdr: {car: {car: l148, cdr: {car: l277, cdr: l3}}, cdr: l3}}, cdr: {car: ";", cdr: {car: l118, cdr: l3}}}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l232, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l281, cdr: {car: l282, cdr: {car: l191, cdr: {car: l277, cdr: l3}}}}, cdr: {car: {car: l147, cdr: {car: {car: l213, cdr: {car: {car: l231, cdr: {car: {car: l149, cdr: {car: l281, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: l282, cdr: l3}}, cdr: {car: {car: l216, cdr: {car: {car: l149, cdr: {car: {car: l68, cdr: {car: {car: l199, cdr: {car: {car: l283, cdr: l3}, cdr: {car: {car: l147, cdr: {car: {car: {car: l149, cdr: {car: l283, cdr: l3}}, cdr: {car: {car: l126, cdr: {car: {car: l149, cdr: {car: l283, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l282, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l148, cdr: {car: l277, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l231, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l281, cdr: {car: l282, cdr: {car: l191, cdr: {car: l277, cdr: l3}}}}, cdr: {car: {car: l147, cdr: {car: {car: l48, cdr: {car: {car: l44, cdr: {car: {car: l146, cdr: {car: {car: l149, cdr: {car: l281, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l199, cdr: {car: {car: l149, cdr: {car: l282, cdr: l3}}, cdr: {car: {car: l163, cdr: {car: {car: l149, cdr: {car: l281, cdr: l3}}, cdr: {car: {car: l148, cdr: {car: l277, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l230, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l147, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l284, cdr: l3}, cdr: {car: {car: l228, cdr: {car: l284, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l229, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l228, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l224, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l223, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l215, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l214, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l281, cdr: {car: l282, cdr: {car: l284, cdr: l3}}}, cdr: {car: {car: l147, cdr: {car: {car: l187, cdr: {car: {car: l149, cdr: {car: l281, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: l282, cdr: l3}}, cdr: {car: {car: l126, cdr: {car: {car: l149, cdr: {car: l284, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l208, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l207, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l129, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l198, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l197, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l196, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l195, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l194, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l193, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l187, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l281, cdr: {car: l282, cdr: {car: l191, cdr: {car: l277, cdr: l3}}}}, cdr: {car: {car: l147, cdr: {car: {car: l48, cdr: {car: {car: l44, cdr: {car: {car: l146, cdr: {car: {car: l149, cdr: {car: l281, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l199, cdr: {car: {car: l149, cdr: {car: l282, cdr: l3}}, cdr: {car: {car: l163, cdr: {car: {car: l149, cdr: {car: l281, cdr: l3}}, cdr: {car: {car: l148, cdr: {car: l277, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l186, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l181, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l180, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l179, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l177, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l176, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l175, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l174, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l171, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l170, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l169, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l166, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l165, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l162, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l161, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l160, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l159, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l157, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l156, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l155, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l154, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l153, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l152, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l141, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l144, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l143, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l142, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l140, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l139, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l138, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l137, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l136, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l135, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l134, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l133, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l132, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l131, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l130, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l95, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l128, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l127, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l191, cdr: {car: l277, cdr: l3}}, cdr: {car: {car: l147, cdr: {car: {car: l119, cdr: {car: "(function(){", cdr: {car: l118, cdr: {car: {car: l124, cdr: {car: {car: l148, cdr: {car: l277, cdr: l3}}, cdr: l3}}, cdr: {car: "})()", cdr: l3}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l125, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l16, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l124, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l123, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l122, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l121, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l120, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l98, cdr: {car: l191, cdr: {car: l284, cdr: l3}}}, cdr: {car: {car: l147, cdr: {car: {car: l201, cdr: {car: {car: l149, cdr: {car: l98, cdr: l3}}, cdr: {car: {car: l119, cdr: {car: {car: l149, cdr: {car: l98, cdr: l3}}, cdr: {car: {car: l213, cdr: {car: {car: l148, cdr: {car: l284, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l119, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l117, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l116, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l115, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l114, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l113, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l112, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l111, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l285, cdr: l3}, cdr: {car: {car: l147, cdr: {car: {car: l211, cdr: {car: {car: l201, cdr: {car: l110, cdr: {car: {car: l101, cdr: {car: {car: l149, cdr: {car: l285, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l107, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l106, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l105, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l104, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l101, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l103, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l102, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l100, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l96, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l94, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l93, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l92, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l91, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l90, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l89, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l88, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l87, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l86, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l85, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l84, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l83, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l82, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l81, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l80, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l79, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l78, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l77, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l59, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l76, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l75, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l74, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l73, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l72, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l71, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l70, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l69, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l68, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l67, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l66, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l65, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l64, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l63, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l62, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l61, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l60, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l58, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l57, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l286, cdr: {car: l287, cdr: {car: l191, cdr: {car: l277, cdr: l3}}}}, cdr: {car: {car: l147, cdr: {car: {car: l56, cdr: {car: {car: l213, cdr: {car: {car: l149, cdr: {car: l286, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: l287, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l148, cdr: {car: l277, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l56, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l284, cdr: {car: l191, cdr: {car: l277, cdr: l3}}}, cdr: {car: {car: l216, cdr: {car: {car: {car: l288, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l147, cdr: {car: {car: l216, cdr: {car: {car: {car: {car: l149, cdr: {car: l288, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: l284, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l148, cdr: {car: l277, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: l288, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l55, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l191, cdr: {car: l289, cdr: l3}}, cdr: {car: {car: l51, cdr: {car: {car: {car: l11, cdr: {car: l289, cdr: l3}}, cdr: {car: l3, cdr: l3}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l32, cdr: {car: l289, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l31, cdr: {car: l289, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l216, cdr: {car: {car: {car: l290, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l147, cdr: {car: {car: l216, cdr: {car: {car: {car: {car: l149, cdr: {car: l290, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: {car: l31, cdr: {car: l289, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l188, cdr: {car: {car: l149, cdr: {car: l290, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: l290, cdr: l3}}, cdr: {car: {car: l55, cdr: {car: {car: l148, cdr: {car: {car: l32, cdr: {car: l289, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l54, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l191, cdr: {car: l289, cdr: l3}}, cdr: {car: {car: l51, cdr: {car: {car: {car: l11, cdr: {car: l289, cdr: l3}}, cdr: {car: l4, cdr: l3}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l32, cdr: {car: l289, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l31, cdr: {car: l289, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l147, cdr: {car: {car: l188, cdr: {car: {car: l149, cdr: {car: {car: l31, cdr: {car: l289, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l54, cdr: {car: {car: l148, cdr: {car: {car: l32, cdr: {car: l289, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l53, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l284, cdr: {car: l191, cdr: {car: l291, cdr: l3}}}, cdr: {car: {car: l147, cdr: {car: {car: l52, cdr: {car: {car: l149, cdr: {car: l284, cdr: l3}}, cdr: {car: {car: l148, cdr: {car: {car: l62, cdr: {car: l291, cdr: {car: {car: l147, cdr: {car: {car: {car: l4, cdr: {car: {car: l262, cdr: {car: "ECASE expression failed.", cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l52, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l284, cdr: {car: l191, cdr: {car: l291, cdr: l3}}}, cdr: {car: {car: l216, cdr: {car: {car: {car: l292, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l147, cdr: {car: {car: l216, cdr: {car: {car: {car: {car: l149, cdr: {car: l292, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: l284, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l51, cdr: {car: {car: l148, cdr: {car: {car: l68, cdr: {car: {car: l199, cdr: {car: {car: l293, cdr: l3}, cdr: {car: {car: l188, cdr: {car: {car: l251, cdr: {car: {car: l31, cdr: {car: l293, cdr: l3}}, cdr: {car: l4, cdr: l3}}}, cdr: {car: l293, cdr: {car: {car: l147, cdr: {car: {car: {car: l27, cdr: {car: {car: l149, cdr: {car: l292, cdr: l3}}, cdr: {car: {car: l146, cdr: {car: {car: l149, cdr: {car: {car: l31, cdr: {car: l293, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l148, cdr: {car: {car: l32, cdr: {car: l293, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l291, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l51, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l191, cdr: {car: l291, cdr: l3}}, cdr: {car: {car: l188, cdr: {car: {car: l11, cdr: {car: l291, cdr: l3}}, cdr: {car: l3, cdr: {car: {car: l188, cdr: {car: {car: l251, cdr: {car: {car: l33, cdr: {car: l291, cdr: l3}}, cdr: {car: l4, cdr: l3}}}, cdr: {car: {car: l147, cdr: {car: {car: l213, cdr: {car: {car: l148, cdr: {car: {car: l35, cdr: {car: l291, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l147, cdr: {car: {car: l188, cdr: {car: {car: l149, cdr: {car: {car: l33, cdr: {car: l291, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l213, cdr: {car: {car: l148, cdr: {car: {car: l35, cdr: {car: l291, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l51, cdr: {car: {car: l148, cdr: {car: {car: l32, cdr: {car: l291, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l50, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l294, cdr: {car: l191, cdr: {car: l277, cdr: l3}}}, cdr: {car: {car: l216, cdr: {car: {car: {car: l295, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: {car: {car: l296, cdr: {car: {car: l40, cdr: {car: l294, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l297, cdr: {car: {car: l41, cdr: {car: l294, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l287, cdr: {car: {car: l42, cdr: {car: l294, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l147, cdr: {car: {car: l163, cdr: {car: l3, cdr: {car: {car: l216, cdr: {car: {car: {car: {car: l149, cdr: {car: l296, cdr: l3}}, cdr: {car: 0, cdr: l3}}, cdr: {car: {car: {car: l149, cdr: {car: l295, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l209, cdr: {car: {car: l236, cdr: {car: {car: l149, cdr: {car: l296, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: l295, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l225, cdr: {car: {car: l148, cdr: {car: l277, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l46, cdr: {car: {car: l149, cdr: {car: l296, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l149, cdr: {car: l287, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l49, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l294, cdr: {car: l191, cdr: {car: l277, cdr: l3}}}, cdr: {car: {car: l216, cdr: {car: {car: {car: l296, cdr: {car: {car: l40, cdr: {car: l294, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l298, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l147, cdr: {car: {car: l163, cdr: {car: l3, cdr: {car: {car: l216, cdr: {car: {car: {car: {car: l149, cdr: {car: l298, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: {car: l41, cdr: {car: l294, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: {car: l149, cdr: {car: l296, cdr: l3}}, cdr: {car: l3, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l209, cdr: {car: {car: l149, cdr: {car: l298, cdr: l3}}, cdr: {car: {car: l201, cdr: {car: {car: l149, cdr: {car: l296, cdr: l3}}, cdr: {car: {car: l31, cdr: {car: {car: l149, cdr: {car: l298, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l225, cdr: {car: {car: l148, cdr: {car: l277, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l201, cdr: {car: {car: l149, cdr: {car: l298, cdr: l3}}, cdr: {car: {car: l32, cdr: {car: {car: l149, cdr: {car: l298, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}}, cdr: {car: {car: l149, cdr: {car: {car: l42, cdr: {car: l294, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l48, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l299, cdr: {car: l300, cdr: l3}}, cdr: {car: {car: l147, cdr: {car: {car: l201, cdr: {car: {car: l149, cdr: {car: l300, cdr: l3}}, cdr: {car: {car: l29, cdr: {car: {car: l149, cdr: {car: l299, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: l300, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l47, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l299, cdr: {car: l190, cdr: {car: {car: l301, cdr: {car: 1, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l147, cdr: {car: {car: l201, cdr: {car: {car: l149, cdr: {car: l299, cdr: l3}}, cdr: {car: {car: l20, cdr: {car: {car: l149, cdr: {car: l299, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: l301, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l46, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l299, cdr: {car: l190, cdr: {car: {car: l301, cdr: {car: 1, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l147, cdr: {car: {car: l201, cdr: {car: {car: l149, cdr: {car: l299, cdr: l3}}, cdr: {car: {car: l19, cdr: {car: {car: l149, cdr: {car: l299, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: l301, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l45, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l44, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l43, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l42, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l41, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l40, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l39, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l38, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l37, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l36, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l35, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l34, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l33, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l32, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l31, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l30, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l29, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l28, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l27, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l26, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l25, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l24, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l23, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l22, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l21, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l20, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l19, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l18, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l17, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l15, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l13, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l302, cdr: {car: l191, cdr: {car: l277, cdr: l3}}}, cdr: {car: {car: l147, cdr: {car: {car: l163, cdr: {car: l3, cdr: {car: {car: l209, cdr: {car: {car: l149, cdr: {car: l302, cdr: l3}}, cdr: {car: {car: l148, cdr: {car: l277, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l12, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l190, cdr: {car: l288, cdr: l3}}, cdr: {car: {car: l147, cdr: {car: {car: l218, cdr: {car: l3, cdr: {car: {car: l149, cdr: {car: l288, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l11, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l184, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l10, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l281, cdr: {car: l282, cdr: {car: l191, cdr: {car: l277, cdr: l3}}}}, cdr: {car: {car: l147, cdr: {car: {car: l213, cdr: {car: {car: l2, cdr: {car: {car: l184, cdr: {car: {car: l149, cdr: {car: l281, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l247, cdr: {car: {car: l146, cdr: {car: {car: l149, cdr: {car: l281, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l9, cdr: {car: {car: l149, cdr: {car: {car: l246, cdr: {car: l281, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: l282, cdr: l3}}, cdr: {car: {car: l148, cdr: {car: {car: l188, cdr: {car: {car: l54, cdr: {car: {car: l254, cdr: {car: {car: l31, cdr: {car: l277, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l28, cdr: {car: {car: l11, cdr: {car: {car: l32, cdr: {car: l277, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l147, cdr: {car: {car: {car: l149, cdr: {car: {car: l31, cdr: {car: l277, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l163, cdr: {car: {car: l149, cdr: {car: l281, cdr: l3}}, cdr: {car: {car: l148, cdr: {car: {car: l32, cdr: {car: l277, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l147, cdr: {car: {car: {car: l163, cdr: {car: {car: l149, cdr: {car: l281, cdr: l3}}, cdr: {car: {car: l148, cdr: {car: l277, cdr: l3}}, cdr: l3}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: {car: l146, cdr: {car: {car: l149, cdr: {car: l281, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l9, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l281, cdr: {car: l282, cdr: {car: l191, cdr: {car: l277, cdr: l3}}}}, cdr: {car: {car: l216, cdr: {car: {car: {car: l299, cdr: {car: {car: l15, cdr: {car: "FN", cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l147, cdr: {car: {car: l216, cdr: {car: {car: {car: {car: l149, cdr: {car: l299, cdr: l3}}, cdr: {car: {car: l199, cdr: {car: {car: l149, cdr: {car: l282, cdr: l3}}, cdr: {car: {car: l148, cdr: {car: l277, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l266, cdr: {car: {car: l149, cdr: {car: l299, cdr: l3}}, cdr: {car: "fname", cdr: {car: {car: l149, cdr: {car: l281, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l149, cdr: {car: l299, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l8, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l281, cdr: {car: l288, cdr: {car: l190, cdr: {car: l303, cdr: l3}}}}, cdr: {car: {car: l147, cdr: {car: {car: l213, cdr: {car: {car: l201, cdr: {car: {car: l149, cdr: {car: l281, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: l288, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l148, cdr: {car: {car: l5, cdr: {car: {car: l254, cdr: {car: l303, cdr: l3}}, cdr: {car: {car: l147, cdr: {car: {car: {car: l266, cdr: {car: {car: l146, cdr: {car: {car: l149, cdr: {car: l281, cdr: l3}}, cdr: l3}}, cdr: {car: "vardoc", cdr: {car: {car: l149, cdr: {car: l303, cdr: l3}}, cdr: l3}}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l146, cdr: {car: {car: l149, cdr: {car: l281, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l7, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l281, cdr: {car: l288, cdr: {car: l190, cdr: {car: l303, cdr: l3}}}}, cdr: {car: {car: l147, cdr: {car: {car: l213, cdr: {car: {car: l6, cdr: {car: {car: l17, cdr: {car: {car: l146, cdr: {car: {car: l149, cdr: {car: l281, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l201, cdr: {car: {car: l149, cdr: {car: l281, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: l288, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: {car: l148, cdr: {car: {car: l5, cdr: {car: {car: l254, cdr: {car: l303, cdr: l3}}, cdr: {car: {car: l147, cdr: {car: {car: {car: l266, cdr: {car: {car: l146, cdr: {car: {car: l149, cdr: {car: l281, cdr: l3}}, cdr: l3}}, cdr: {car: "vardoc", cdr: {car: {car: l149, cdr: {car: l303, cdr: l3}}, cdr: l3}}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l146, cdr: {car: {car: l149, cdr: {car: l281, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l6, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l302, cdr: {car: l191, cdr: {car: l277, cdr: l3}}}, cdr: {car: {car: l147, cdr: {car: {car: l188, cdr: {car: {car: l149, cdr: {car: l302, cdr: l3}}, cdr: {car: l3, cdr: {car: {car: l213, cdr: {car: {car: l148, cdr: {car: l277, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l5, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l302, cdr: {car: l191, cdr: {car: l277, cdr: l3}}}, cdr: {car: {car: l147, cdr: {car: {car: l188, cdr: {car: {car: l149, cdr: {car: l302, cdr: l3}}, cdr: {car: {car: l213, cdr: {car: {car: l148, cdr: {car: l277, cdr: l3}}, cdr: l3}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l2, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l191, cdr: {car: l279, cdr: l3}}, cdr: {car: {car: l147, cdr: {car: {car: l211, cdr: {car: {car: l148, cdr: {car: {car: l68, cdr: {car: {car: l199, cdr: {car: {car: l280, cdr: l3}, cdr: {car: {car: l147, cdr: {car: {car: l181, cdr: {car: {car: l146, cdr: {car: {car: l149, cdr: {car: l280, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l279, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l1, cdr: {car: l178, cdr: {car: {car: l199, cdr: {car: {car: l281, cdr: {car: l282, cdr: {car: l191, cdr: {car: l277, cdr: l3}}}}, cdr: {car: {car: l147, cdr: {car: {car: l211, cdr: {car: {car: l177, cdr: {car: {car: l146, cdr: {car: {car: l149, cdr: {car: l281, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l146, cdr: {car: {car: l199, cdr: {car: {car: l149, cdr: {car: {car: l68, cdr: {car: {car: l199, cdr: {car: {car: l299, cdr: l3}, cdr: {car: {car: l188, cdr: {car: {car: l251, cdr: {car: l299, cdr: {car: {car: l146, cdr: {car: l304, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l146, cdr: {car: l191, cdr: l3}}, cdr: {car: l299, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l282, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l148, cdr: {car: l277, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: l3, cdr: {car: l3, cdr: l3}}}};
(function(){
    l112.function(l274);
    l112.function(l273);
    l112.function(l272);
    l112.function(l271);
    l112.function(l270);
    l112.function(l269);
    l112.function(l268);
    l112.function(l267);
    l112.function(l266);
    l112.function(l265);
    l112.function(l264);
    l112.function(l263);
    l112.function(l262);
    l112.function(l261);
    l112.function(l260);
    l112.function(l259);
    l112.function(l258);
    l112.function(l257);
    l112.function(l256);
    l112.function(l255);
    l112.function(l254);
    l112.function(l253);
    l112.function(l252);
    l112.function(l251);
    l112.function(l250);
    l112.function(l249);
    l112.function(l248);
    l112.function(l247);
    l112.function(l246);
    l112.function(l245);
    l112.function(l244);
    l112.function(l243);
    l112.function(l242);
    l112.function(l241);
    l112.function(l240);
    l112.function(l239);
    l112.function(l238);
    l112.function(l237);
    l112.function(l236);
    l112.function(l235);
    l112.function(l234);
    l112.function(l233);
    l112.function(l232);
    l112.function(l231);
    l112.function(l230);
    l112.function(l229);
    l112.function(l228);
    l112.function(l227);
    l112.function(l226);
    l112.function(l225);
    l112.function(l224);
    l112.function(l223);
    l112.function(l222);
    l112.function(l221);
    l112.function(l220);
    l112.function(l219);
    l112.function(l218);
    l112.function(l217);
    l112.function(l216);
    l112.function(l215);
    l112.function(l214);
    l112.function(l213);
    l112.function(l212);
    l112.function(l211);
    l112.function(l210);
    l112.function(l209);
    l112.function(l208);
    l112.function(l207);
    l112.function(l206);
    l112.function(l205);
    l112.function(l204);
    l112.function(l203);
    l112.function(l202);
    l112.function(l201);
    l112.function(l200);
    l112.function(l199);
    l112.function(l198);
    l112.function(l197);
    l112.function(l196);
    l112.function(l195);
    l112.function(l194);
    l112.function(l193);
    l112.function(l191);
    l112.function(l190);
    l112.function(l189);
    l112.function(l188);
    l112.function(l187);
    l112.function(l186);
    l112.function(l185);
    l112.function(l184);
    l112.function(l183);
    l112.function(l182);
    l112.function(l181);
    l112.function(l180);
    l112.function(l179);
    l112.function(l178);
    l112.function(l177);
    l112.function(l176);
    l112.function(l175);
    l112.function(l174);
    l112.function(l173);
    l112.function(l172);
    l112.function(l171);
    l112.function(l170);
    l112.function(l169);
    l112.function(l168);
    l112.function(l167);
    l112.function(l166);
    l112.function(l165);
    l112.function(l164);
    l112.function(l163);
    l112.function(l162);
    l112.function(l161);
    l112.function(l160);
    l112.function(l159);
    l112.function(l158);
    l112.function(l157);
    l112.function(l156);
    l112.function(l155);
    l112.function(l154);
    l112.function(l153);
    l112.function(l152);
    l112.function(l151);
    l112.function(l150);
    l112.function(l149);
    l112.function(l148);
    l112.function(l147);
    l112.function(l146);
    l112.function(l145);
    l112.function(l144);
    l112.function(l143);
    l112.function(l142);
    l112.function(l141);
    l112.function(l140);
    l112.function(l139);
    l112.function(l138);
    l112.function(l137);
    l112.function(l136);
    l112.function(l135);
    l112.function(l134);
    l112.function(l133);
    l112.function(l132);
    l112.function(l131);
    l112.function(l130);
    l112.function(l129);
    l112.function(l128);
    l112.function(l127);
    l112.function(l126);
    l112.function(l125);
    l112.function(l124);
    l112.function(l123);
    l112.function(l122);
    l112.function(l121);
    l112.function(l120);
    l112.function(l119);
    l112.function(l118);
    l112.function(l117);
    l112.function(l116);
    l112.function(l115);
    l112.function(l114);
    l112.function(l113);
    l112.function(l112);
    l112.function(l111);
    l112.function(l110);
    l112.function(l109);
    l112.function(l108);
    l112.function(l107);
    l112.function(l106);
    l112.function(l105);
    l112.function(l104);
    l112.function(l103);
    l112.function(l102);
    l112.function(l101);
    l112.function(l100);
    l112.function(l99);
    l112.function(l98);
    l112.function(l97);
    l112.function(l96);
    l112.function(l95);
    l112.function(l94);
    l112.function(l93);
    l112.function(l92);
    l112.function(l91);
    l112.function(l90);
    l112.function(l89);
    l112.function(l88);
    l112.function(l87);
    l112.function(l86);
    l112.function(l85);
    l112.function(l84);
    l112.function(l83);
    l112.function(l82);
    l112.function(l81);
    l112.function(l80);
    l112.function(l79);
    l112.function(l78);
    l112.function(l77);
    l112.function(l76);
    l112.function(l75);
    l112.function(l74);
    l112.function(l73);
    l112.function(l72);
    l112.function(l71);
    l112.function(l70);
    l112.function(l69);
    l112.function(l68);
    l112.function(l67);
    l112.function(l66);
    l112.function(l65);
    l112.function(l64);
    l112.function(l63);
    l112.function(l62);
    l112.function(l61);
    l112.function(l60);
    l112.function(l59);
    l112.function(l58);
    l112.function(l57);
    l112.function(l56);
    l112.function(l55);
    l112.function(l54);
    l112.function(l53);
    l112.function(l52);
    l112.function(l51);
    l112.function(l50);
    l112.function(l49);
    l112.function(l48);
    l112.function(l47);
    l112.function(l46);
    l112.function(l45);
    l112.function(l44);
    l112.function(l43);
    l112.function(l42);
    l112.function(l41);
    l112.function(l40);
    l112.function(l39);
    l112.function(l38);
    l112.function(l37);
    l112.function(l36);
    l112.function(l35);
    l112.function(l34);
    l112.function(l33);
    l112.function(l32);
    l112.function(l31);
    l112.function(l30);
    l112.function(l29);
    l112.function(l28);
    l112.function(l27);
    l112.function(l26);
    l112.function(l25);
    l112.function(l24);
    l112.function(l23);
    l112.function(l22);
    l112.function(l21);
    l112.function(l20);
    l112.function(l19);
    l112.function(l18);
    l112.function(l17);
    l112.function(l16);
    l112.function(l15);
    l112.function(l14);
    l112.function(l13);
    l112.function(l12);
    l112.function(l11);
    l112.function(l10);
    l112.function(l9);
    l112.function(l8);
    l112.function(l7);
    l112.function(l6);
    l112.function(l5);
    l112.function(l4);
    l112.function(l3);
    l112.function(l2);
    l112.function(l1);
    (l205).value = l276;
    (l167).value = l305;
    (l168).value = 707;
    (l14).value = 186;
    return (l217).value = 250;
})();
(l206).value = 305;
