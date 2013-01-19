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
var l100 = {name: "LIST-ALL-PACKAGES"};
(function(){
    (l100).function = (function(v182){
        ((v182)["fname"] = "LIST-ALL-PACKAGES");
        return v182;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l99;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })();
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
var l101 = {name: "MAKE-PACKAGE"};
var l102 = {name: "FIND-PACKAGE-OR-FAIL"};
(function(){
    (l101).function = (function(v187){
        ((v187)["fname"] = "MAKE-PACKAGE");
        return v187;
    })((function (v183,v184){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v184=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (function(v185,v186){
                        ((v185)["packageName"] = v183);
                        ((v185)["symbols"] = {});
                        ((v185)["exports"] = {});
                        ((v185)["use"] = v186);
                        (l99).value = ({car: v185, cdr: (function(){
                            var symbol = l99;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()});
                        return v185;
                    })({},l68.function((function(){
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v184));
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
    return l101;
})();
var l103 = {name: "PACKAGEP"};
(function(){
    (l103).function = (function(v189){
        ((v189)["fname"] = "PACKAGEP");
        return v189;
    })((function (v188){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof (v188) === 'object')?l4.value: l3.value) !== l3.value ? ((("symbols") in (v188))?l4.value: l3.value) : l3.value);
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
var l104 = {name: "FIND-PACKAGE"};
var l105 = {name: "PACKAGE-NAME"};
(function(){
    (l104).function = (function(v194){
        ((v194)["fname"] = "FIND-PACKAGE");
        return v194;
    })((function (v190){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (l103.function(v190) !== l3.value ? (function(){
                        return (function(){
                            throw ({type: 'block', id: 84, value: v190, message: 'Return from unknown block FIND-PACKAGE.'})
                        })();
                    })() : l3.value);
                    return (function(v191){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v192,v193){
                                        (function(){
                                            while(v192 !== l3.value){
                                                v193 = (function(){
                                                    var tmp = v192;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    (l92.function((function(){
                                                        var symbol = l105;
                                                        var func = symbol.function;
                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                        return func;
                                                    })()(v193), v191) !== l3.value ? (function(){
                                                        return (function(){
                                                            throw ({type: 'block', id: 85, value: v193, message: 'Return from unknown block NIL.'})
                                                        })();
                                                    })() : l3.value);
                                                    return l3.value;
                                                })();
                                                v192 = (function(){
                                                    var tmp = v192;
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
                                if (cf.type == 'block' && cf.id == 85)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l91.function(v190));
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
    return l104;
})();
(function(){
    (l102).function = (function(v197){
        ((v197)["fname"] = "FIND-PACKAGE-OR-FAIL");
        return v197;
    })((function (v195){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v196){
                        return (v196 !== l3.value ? v196 : (function(){
                            throw "Package unknown.";
                        })());
                    })(l104.function(v195));
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
    return l102;
})();
(function(){
    (l105).function = (function(v200){
        ((v200)["fname"] = "PACKAGE-NAME");
        return v200;
    })((function (v198){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v199){
                        return (function(){
                            var tmp = (v199)["packageName"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })(l102.function(v198));
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
var l106 = {name: "%PACKAGE-SYMBOLS"};
(function(){
    (l106).function = (function(v203){
        ((v203)["fname"] = "%PACKAGE-SYMBOLS");
        return v203;
    })((function (v201){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v202){
                        return (function(){
                            var tmp = (v202)["symbols"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })(l102.function(v201));
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
var l107 = {name: "PACKAGE-USE-LIST"};
(function(){
    (l107).function = (function(v206){
        ((v206)["fname"] = "PACKAGE-USE-LIST");
        return v206;
    })((function (v204){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v205){
                        return (function(){
                            var tmp = (v205)["use"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })(l102.function(v204));
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
var l108 = {name: "%PACKAGE-EXTERNAL-SYMBOLS"};
(function(){
    (l108).function = (function(v209){
        ((v209)["fname"] = "%PACKAGE-EXTERNAL-SYMBOLS");
        return v209;
    })((function (v207){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v208){
                        return (function(){
                            var tmp = (v208)["exports"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })(l102.function(v207));
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
    return l108;
})();
var l109 = {name: "*COMMON-LISP-PACKAGE*"};
(function(){
    (((l109.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l109).value = l101.function("CL");
    })());
    return l109;
})();
var l110 = {name: "*USER-PACKAGE*"};
(function(){
    (((l110.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l110).value = l101.function("CL-USER", l44.function((function(){
            var symbol = l109;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()));
    })());
    return l110;
})();
var l111 = {name: "*KEYWORD-PACKAGE*"};
(function(){
    (((l111.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l111).value = l101.function("KEYWORD");
    })());
    return l111;
})();
var l112 = {name: "KEYWORDP"};
var l113 = {name: "SYMBOL-PACKAGE"};
(function(){
    (l112).function = (function(v211){
        ((v211)["fname"] = "KEYWORDP");
        return v211;
    })((function (v210){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v210;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (((function(){
                        var symbol = l113;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v210) === (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())?l4.value: l3.value) : l3.value);
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
    return l112;
})();
var l114 = {name: "*PACKAGE*"};
(function(){
    (((l114.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l114).value = (function(){
            var symbol = l109;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
    })());
    return l114;
})();
var l115 = {name: "IN-PACKAGE"};
l115;
var l116 = {name: "%INTERN-SYMBOL"};
(function(){
    (l116).function = (function(v214){
        ((v214)["fname"] = "%INTERN-SYMBOL");
        return v214;
    })((function (v212){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v213){
                        ((v212)["package"] = (function(){
                            var symbol = l109;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                        return ((v213)[(v212).name] = v212);
                    })(l106.function((function(){
                        var symbol = l109;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
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
    return l116;
})();
var l117 = {name: "%FIND-SYMBOL"};
(function(){
    (l117).function = (function(v222){
        ((v222)["fname"] = "%FIND-SYMBOL");
        return v222;
    })((function (v215,v216){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v217){
                        return (function(v218){
                            return ((((v215) in (v218))?l4.value: l3.value) !== l3.value ? ({car: (function(){
                                var tmp = (v218)[v215];
                                return tmp == undefined? l3.value: tmp ;
                            })(), cdr: l4.value}) : (function(){
                                try {
                                    return (function(){
                                        return (function(v219,v220){
                                            (function(){
                                                while(v219 !== l3.value){
                                                    v220 = (function(){
                                                        var tmp = v219;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v221){
                                                            return ((((v215) in (v221))?l4.value: l3.value) !== l3.value ? (function(){
                                                                return (function(){
                                                                    throw ({type: 'block', id: 93, value: ({car: (function(){
                                                                        var tmp = (v221)[v215];
                                                                        return tmp == undefined? l3.value: tmp ;
                                                                    })(), cdr: l4.value}), message: 'Return from unknown block %FIND-SYMBOL.'})
                                                                })();
                                                            })() : l3.value);
                                                        })(l108.function(v220));
                                                        return l3.value;
                                                    })();
                                                    v219 = (function(){
                                                        var tmp = v219;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
                                                }return l3.value;
                                            })();
                                            return ({car: l3.value, cdr: l3.value});
                                        })(l107.function(v217),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 94)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })());
                        })(l106.function(v217));
                    })(l102.function(v216));
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
    return l117;
})();
var l118 = {name: "FIND-SYMBOL"};
(function(){
    (l118).function = (function(v225){
        ((v225)["fname"] = "FIND-SYMBOL");
        return v225;
    })((function (v223,v224){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v224=(function(){
            var symbol = l114;
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
                        var tmp = l117.function(v223, v224);
                        return tmp === l3.value? l3.value: tmp.car;
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
    return l118;
})();
var l119 = {name: "INTERN"};
var l120 = {name: "EXPORT"};
(function(){
    (l119).function = (function(v232){
        ((v232)["fname"] = "INTERN");
        return v232;
    })((function (v226,v227){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v227=(function(){
            var symbol = l114;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (function(v228){
                        return (function(v229){
                            return ((function(){
                                var tmp = v229;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })() !== l3.value ? (function(){
                                var tmp = v229;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() : (function(v230){
                                (function(){
                                    var tmp = (v230)[v226];
                                    return tmp == undefined? l3.value: tmp ;
                                })();
                                return (function(v231){
                                    ((v231)["package"] = v228);
                                    (((v228 === (function(){
                                        var symbol = l111;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })())?l4.value: l3.value) !== l3.value ? (function(){
                                        ((v231)["value"] = v231);
                                        return (function(){
                                            var symbol = l120;
                                            var func = symbol.function;
                                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                            return func;
                                        })()(l44.function(v231), v228);
                                    })() : l3.value);
                                    return ((v230)[v226] = v231);
                                })((function(){
                                    var name = v226;
                                    if (typeof name != 'string')
                                        throw 'The value ' + name + ' is not a type string.';
                                    return ({name: name});
                                })());
                            })(l106.function(v228)));
                        })(l117.function(v226, v228));
                    })(l102.function(v227));
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
    return l119;
})();
(function(){
    (l113).function = (function(v234){
        ((v234)["fname"] = "SYMBOL-PACKAGE");
        return v234;
    })((function (v233){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (((function(){
                        var tmp = v233;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? l3.value : (function(){
                        return (function(){
                            throw "it is not a symbol";
                        })();
                    })());
                    return (function(){
                        var tmp = (v233)["package"];
                        return tmp == undefined? l3.value: tmp ;
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
    return l113;
})();
(function(){
    (l120).function = (function(v240){
        ((v240)["fname"] = "EXPORT");
        return v240;
    })((function (v235,v236){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v236=(function(){
            var symbol = l114;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (function(v237){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v238,v239){
                                        (function(){
                                            while(v238 !== l3.value){
                                                v239 = (function(){
                                                    var tmp = v238;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    ((v237)[(v239).name] = v239);
                                                    return l3.value;
                                                })();
                                                v238 = (function(){
                                                    var tmp = v238;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return l4.value;
                                    })(v235,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 99)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l108.function(v236));
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
var l121 = {name: "*NEWLINE*"};
(function(){
    (((l121.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l121).value = l91.function(l71.function(10));
    })());
    return l121;
})();
var l122 = {name: "CONCAT"};
(function(){
    (l122).function = (function(v242){
        ((v242)["fname"] = "CONCAT");
        return v242;
    })((function (){
        var v241= l3.value;
        for (var i = arguments.length-1; i>=0; i--)
            v241 = {car: arguments[i], cdr: 
        v241};
        return (function(){
            try {
                return (function(){
                    return l60.function((function(){
                        var symbol = l67;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v241, "");
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
var l123 = {name: "CONCATF"};
l123;
var l124 = {name: "JOIN"};
(function(){
    (l124).function = (function(v245){
        ((v245)["fname"] = "JOIN");
        return v245;
    })((function (v243,v244){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v244="";
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (l11.function(v243) !== l3.value ? (function(){
                        return "";
                    })() : (l11.function((function(){
                        var tmp = v243;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()) !== l3.value ? (function(){
                        return (function(){
                            var tmp = v243;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })() : (function(){
                        return l122.function((function(){
                            var tmp = v243;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), v244, l124.function((function(){
                            var tmp = v243;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), v244));
                    })()));
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
    return l124;
})();
var l125 = {name: "JOIN-TRAILING"};
(function(){
    (l125).function = (function(v248){
        ((v248)["fname"] = "JOIN-TRAILING");
        return v248;
    })((function (v246,v247){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v247="";
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (l11.function(v246) !== l3.value ? "" : l122.function((function(){
                        var tmp = v246;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), v247, l125.function((function(){
                        var tmp = v246;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })(), v247)));
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
    return l125;
})();
var l126 = {name: "MAPCONCAT"};
(function(){
    (l126).function = (function(v251){
        ((v251)["fname"] = "MAPCONCAT");
        return v251;
    })((function (v249,v250){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l124.function(l68.function(v249, v250));
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
    return l126;
})();
var l127 = {name: "INDENT"};
(function(){
    (l127).function = (function(v258){
        ((v258)["fname"] = "INDENT");
        return v258;
    })((function (){
        var v252= l3.value;
        for (var i = arguments.length-1; i>=0; i--)
            v252 = {car: arguments[i], cdr: 
        v252};
        return (function(){
            try {
                return (function(){
                    return (function(v253){
                        return (function(v254,v255,v256){
                            (l75.function(l66.function(v253)) !== l3.value ? (function(){
                                return v254 = l122.function(v254, (function(){
                                    return "    ";
                                })());
                            })() : l3.value);
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(((function(){
                                                var x = v255;
                                                var y = v256;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                if (typeof y != 'number')
                                                    throw 'The value ' + y + ' is not a type number.';
                                                return x<y;
                                            })()?l4.value: l3.value) !== l3.value){
                                                (function(v257){
                                                    return v254 = l122.function(v254, (function(){
                                                        return v257;
                                                    })());
                                                })(((l73.function((function(){
                                                    var string = v253;
                                                    var index = v255;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })(), 10) !== l3.value ? (((function(){
                                                    var x = v255;
                                                    var y = l24.function(v256);
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x<y;
                                                })()?l4.value: l3.value) !== l3.value ? l28.function(l73.function((function(){
                                                    var string = v253;
                                                    var index = l23.function(v255);
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })(), 10)) : l3.value) : l3.value) !== l3.value ? l122.function(l91.function(10), "    ") : l91.function((function(){
                                                    var string = v253;
                                                    var index = v255;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })())));
                                                v255 = (function(){
                                                    var x = v255;
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
                                    if (cf.type == 'block' && cf.id == 105)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return v254;
                        })("",0,l66.function(v253));
                    })(l124.function(v252));
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
    return l127;
})();
(function(){
    (l16).function = (function(v262){
        ((v262)["fname"] = "INTEGER-TO-STRING");
        return v262;
    })((function (v259){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l25.function(v259) !== l3.value ? (function(){
                        return "0";
                    })() : (l76.function(v259) !== l3.value ? (function(){
                        return l122.function("-", l16.function((function(){
                            var x = 0;
                            var y = v259;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x-y;
                        })()));
                    })() : (function(){
                        return (function(v260){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(l28.function(l25.function(v259)) !== l3.value){
                                                v260 = ({car: (function(){
                                                    var x = v259;
                                                    var y = 10;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x%y;
                                                })(), cdr: v260});
                                                v259 = l26.function(v259, 10);
                                            }return l3.value;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 107)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return l124.function(l68.function((function (v261){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return l91.function((function(){
                                    var string = "0123456789";
                                    var index = v261;
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    if (typeof index != 'number')
                                        throw 'The value ' + index + ' is not a type number.';
                                    return string.charCodeAt(index);
                                })());
                            
                            }), v260));
                        })(l3.value);
                    })()));
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
    return l16;
})();
var l128 = {name: "JS!BOOL"};
var l129 = {name: "LS-COMPILE"};
(function(){
    (l128).function = (function(v264){
        ((v264)["fname"] = "JS!BOOL");
        return v264;
    })((function (v263){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l122.function("(", v263, "?", (function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l4.value), ": ", (function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l3.value), ")");
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
    return l128;
})();
var l130 = {name: "JS!SELFCALL"};
l130;
var l131 = {name: "PRIN1-TO-STRING"};
var l132 = {name: "ESCAPE-STRING"};
(function(){
    (l131).function = (function(v270){
        ((v270)["fname"] = "PRIN1-TO-STRING");
        return v270;
    })((function (v265){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v265;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return ((function(){
                            var tmp = l117.function((v265).name, (function(){
                                var symbol = l114;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })() !== l3.value ? (v265).name : (function(v266,v267){
                            return l122.function((((v266 === l104.function("KEYWORD"))?l4.value: l3.value) !== l3.value ? "" : l105.function(v266)), ":", v267);
                        })(l113.function(v265),(v265).name));
                    })() : (l74.function(v265) !== l3.value ? (function(){
                        return l16.function(v265);
                    })() : (((typeof(v265) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l122.function("\"", (function(){
                            var symbol = l132;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v265), "\"");
                    })() : (((typeof v265 == 'function')?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v268){
                            return (v268 !== l3.value ? l122.function("#<FUNCTION ", v268, ">") : l122.function("#<FUNCTION>"));
                        })((function(){
                            var tmp = (v265)["fname"];
                            return tmp == undefined? l3.value: tmp ;
                        })());
                    })() : (l59.function(v265) !== l3.value ? (function(){
                        return l122.function("(", l125.function(l68.function((function(){
                            var symbol = l131;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l80.function(v265)), " "), (function(v269){
                            return (l11.function((function(){
                                var tmp = v269;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })()) !== l3.value ? l131.function((function(){
                                var tmp = v269;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()) : l122.function(l131.function((function(){
                                var tmp = v269;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()), " . ", l131.function((function(){
                                var tmp = v269;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })())));
                        })(l79.function(v265)), ")");
                    })() : (l103.function(v265) !== l3.value ? (function(){
                        return l122.function("#<PACKAGE ", l105.function(v265), ">");
                    })() : l3.value))))));
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
    return l131;
})();
(function(){
    (l95).function = (function(v272){
        ((v272)["fname"] = "WRITE-LINE");
        return v272;
    })((function (v271){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var x = v271;
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return lisp.write(x);
                    })();
                    (function(){
                        var x = (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })();
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return lisp.write(x);
                    })();
                    return v271;
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
    return l95;
})();
var l133 = {name: "WARN"};
(function(){
    (l133).function = (function(v274){
        ((v274)["fname"] = "WARN");
        return v274;
    })((function (v273){
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
                    return l95.function(v273);
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
    return l133;
})();
var l134 = {name: "PRINT"};
(function(){
    (l134).function = (function(v276){
        ((v276)["fname"] = "PRINT");
        return v276;
    })((function (v275){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l95.function(l131.function(v275));
                    return v275;
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
    return l134;
})();
var l135 = {name: "MAKE-STRING-STREAM"};
(function(){
    (l135).function = (function(v278){
        ((v278)["fname"] = "MAKE-STRING-STREAM");
        return v278;
    })((function (v277){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ({car: v277, cdr: 0});
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
var l136 = {name: "%PEEK-CHAR"};
(function(){
    (l136).function = (function(v280){
        ((v280)["fname"] = "%PEEK-CHAR");
        return v280;
    })((function (v279){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var x = (function(){
                            var tmp = v279;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        var y = l66.function((function(){
                            var tmp = v279;
                            return tmp === l3.value? l3.value: tmp.car;
                        })());
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x<y;
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        var string = (function(){
                            var tmp = v279;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        var index = (function(){
                            var tmp = v279;
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
                if (cf.type == 'block' && cf.id == 114)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l136;
})();
var l137 = {name: "%READ-CHAR"};
(function(){
    (l137).function = (function(v283){
        ((v283)["fname"] = "%READ-CHAR");
        return v283;
    })((function (v281){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var x = (function(){
                            var tmp = v281;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        var y = l66.function((function(){
                            var tmp = v281;
                            return tmp === l3.value? l3.value: tmp.car;
                        })());
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x<y;
                    })()?l4.value: l3.value) !== l3.value ? (function(v282){
                        (function(){
                            var x = v281;
                            if (typeof x != 'object')
                                throw 'The value ' + x + ' is not a type object.';
                            return (x.cdr = l23.function((function(){
                                var tmp = v281;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })()));
                        })();
                        return v282;
                    })((function(){
                        var string = (function(){
                            var tmp = v281;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        var index = (function(){
                            var tmp = v281;
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
                if (cf.type == 'block' && cf.id == 115)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l137;
})();
var l138 = {name: "WHITESPACEP"};
(function(){
    (l138).function = (function(v287){
        ((v287)["fname"] = "WHITESPACEP");
        return v287;
    })((function (v284){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v285){
                        return (v285 !== l3.value ? v285 : (function(v286){
                            return (v286 !== l3.value ? v286 : l73.function(v284, 9));
                        })(l73.function(v284, 10)));
                    })(l73.function(v284, 32));
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
var l139 = {name: "SKIP-WHITESPACES"};
(function(){
    (l139).function = (function(v290){
        ((v290)["fname"] = "SKIP-WHITESPACES");
        return v290;
    })((function (v288){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v289){
                        v289 = l136.function(v288);
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v289 !== l3.value ? l138.function(v289) : l3.value) !== l3.value){
                                            l137.function(v288);
                                            v289 = l136.function(v288);
                                        }return l3.value;
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
                    })(l3.value);
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
var l140 = {name: "TERMINALP"};
(function(){
    (l140).function = (function(v295){
        ((v295)["fname"] = "TERMINALP");
        return v295;
    })((function (v291){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v292){
                        return (v292 !== l3.value ? v292 : (function(v293){
                            return (v293 !== l3.value ? v293 : (function(v294){
                                return (v294 !== l3.value ? v294 : l73.function(40, v291));
                            })(l73.function(41, v291)));
                        })(l138.function(v291)));
                    })(l11.function(v291));
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
    return l140;
})();
var l141 = {name: "READ-UNTIL"};
(function(){
    (l141).function = (function(v300){
        ((v300)["fname"] = "READ-UNTIL");
        return v300;
    })((function (v296,v297){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v298,v299){
                        v299 = l136.function(v296);
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v299 !== l3.value ? l28.function((v297)(v299)) : l3.value) !== l3.value){
                                            v298 = l122.function(v298, l91.function(v299));
                                            l137.function(v296);
                                            v299 = l136.function(v296);
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
                        return v298;
                    })("",l3.value);
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
var l142 = {name: "SKIP-WHITESPACES-AND-COMMENTS"};
(function(){
    (l142).function = (function(v304){
        ((v304)["fname"] = "SKIP-WHITESPACES-AND-COMMENTS");
        return v304;
    })((function (v301){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v302){
                        l139.function(v301);
                        v302 = l136.function(v301);
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v302 !== l3.value ? l73.function(v302, 59) : l3.value) !== l3.value){
                                            l141.function(v301, (function (v303){
                                                if (arguments.length < 1) throw 'too few arguments';
                                                if (arguments.length > 1) throw 'too many arguments';
                                                return l73.function(v303, 10);
                                            
                                            }));
                                            l139.function(v301);
                                            v302 = l136.function(v301);
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 123)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l3.value);
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
    return l142;
})();
var l143 = {name: "%READ-LIST"};
var l144 = {name: "LS-READ"};
(function(){
    (l143).function = (function(v308){
        ((v308)["fname"] = "%READ-LIST");
        return v308;
    })((function (v305){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l142.function(v305);
                    return (function(v306){
                        return (l11.function(v306) !== l3.value ? (function(){
                            return (function(){
                                throw "Unspected EOF";
                            })();
                        })() : (l73.function(v306, 41) !== l3.value ? (function(){
                            l137.function(v305);
                            return l3.value;
                        })() : (l73.function(v306, 46) !== l3.value ? (function(){
                            l137.function(v305);
                            return (function(v307){
                                l142.function(v305);
                                (l73.function(l137.function(v305), 41) !== l3.value ? l3.value : (function(){
                                    return (function(){
                                        throw "')' was expected.";
                                    })();
                                })());
                                return v307;
                            })((function(){
                                var symbol = l144;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v305));
                        })() : (function(){
                            return ({car: (function(){
                                var symbol = l144;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v305), cdr: l143.function(v305)});
                        })())));
                    })(l136.function(v305));
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
    return l143;
})();
var l145 = {name: "READ-STRING"};
(function(){
    (l145).function = (function(v312){
        ((v312)["fname"] = "READ-STRING");
        return v312;
    })((function (v309){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v310,v311){
                        v311 = l137.function(v309);
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(l28.function(l27.function(v311, 34)) !== l3.value){
                                            (l11.function(v311) !== l3.value ? (function(){
                                                return (function(){
                                                    throw "Unexpected EOF";
                                                })();
                                            })() : l3.value);
                                            (l27.function(v311, 92) !== l3.value ? (function(){
                                                return v311 = l137.function(v309);
                                            })() : l3.value);
                                            v310 = l122.function(v310, l91.function(v311));
                                            v311 = l137.function(v309);
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 126)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v310;
                    })("",l3.value);
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
    return l145;
})();
var l146 = {name: "READ-SHARP"};
(function(){
    (l146).function = (function(v317){
        ((v317)["fname"] = "READ-SHARP");
        return v317;
    })((function (v313){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l137.function(v313);
                    return (function(v314){
                        return (l27.function(v314, 39) !== l3.value ? (function(){
                            return l44.function(l97, (function(){
                                var symbol = l144;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v313));
                        })() : (l27.function(v314, 92) !== l3.value ? (function(){
                            return (function(v315){
                                return (l92.function(v315, "space") !== l3.value ? (function(){
                                    return l72.function(32);
                                })() : (l92.function(v315, "tab") !== l3.value ? (function(){
                                    return l72.function(9);
                                })() : (l92.function(v315, "newline") !== l3.value ? (function(){
                                    return l72.function(10);
                                })() : (function(){
                                    return l72.function((function(){
                                        var string = v315;
                                        var index = 0;
                                        if (typeof string != 'string')
                                            throw 'The value ' + string + ' is not a type string.';
                                        if (typeof index != 'number')
                                            throw 'The value ' + index + ' is not a type number.';
                                        return string.charCodeAt(index);
                                    })());
                                })())));
                            })(l122.function(l91.function(l137.function(v313)), l141.function(v313, (function(){
                                var symbol = l140;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })())));
                        })() : (l27.function(v314, 43) !== l3.value ? (function(){
                            return (function(v316){
                                return (l92.function(v316, "common-lisp") !== l3.value ? (function(){
                                    (function(){
                                        var symbol = l144;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v313);
                                    return (function(){
                                        var symbol = l144;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v313);
                                })() : (l92.function(v316, "ecmalisp") !== l3.value ? (function(){
                                    return (function(){
                                        var symbol = l144;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v313);
                                })() : (function(){
                                    return (function(){
                                        throw "Unknown reader form.";
                                    })();
                                })()));
                            })(l141.function(v313, (function(){
                                var symbol = l140;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()));
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })())));
                    })(l137.function(v313));
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
    return l146;
})();
var l147 = {name: "READ-SYMBOL"};
(function(){
    (l147).function = (function(v325){
        ((v325)["fname"] = "READ-SYMBOL");
        return v325;
    })((function (v318){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v319,v320,v321,v322,v323){
                        v323 = 0;
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((((function(){
                                            var x = v323;
                                            var y = v319;
                                            if (typeof x != 'number')
                                                throw 'The value ' + x + ' is not a type number.';
                                            if (typeof y != 'number')
                                                throw 'The value ' + y + ' is not a type number.';
                                            return x<y;
                                        })()?l4.value: l3.value) !== l3.value ? l28.function(l73.function((function(){
                                            var string = v318;
                                            var index = v323;
                                            if (typeof string != 'string')
                                                throw 'The value ' + string + ' is not a type string.';
                                            if (typeof index != 'number')
                                                throw 'The value ' + index + ' is not a type number.';
                                            return string.charCodeAt(index);
                                        })(), 58)) : l3.value) !== l3.value){
                                            v323 = (function(){
                                                var x = v323;
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
                                if (cf.type == 'block' && cf.id == 129)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        (((function(){
                            var x = v323;
                            var y = v319;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x==y;
                        })()?l4.value: l3.value) !== l3.value ? (function(){
                            v321 = v318;
                            v320 = (function(){
                                var symbol = l114;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })();
                            return v322 = l4.value;
                        })() : (function(){
                            (l25.function(v323) !== l3.value ? v320 = "KEYWORD" : v320 = (function(){
                                var x = l86.function(v318, 0, v323);
                                if (typeof x != 'string')
                                    throw 'The value ' + x + ' is not a type string.';
                                return x.toUpperCase();
                            })());
                            v323 = (function(){
                                var x = v323;
                                var y = 1;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })();
                            (l73.function((function(){
                                var string = v318;
                                var index = v323;
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })(), 58) !== l3.value ? (function(){
                                v322 = l4.value;
                                return v323 = (function(){
                                    var x = v323;
                                    var y = 1;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    if (typeof y != 'number')
                                        throw 'The value ' + y + ' is not a type number.';
                                    return x+y;
                                })();
                            })() : l3.value);
                            return v321 = l86.function(v318, v323);
                        })());
                        v321 = (function(){
                            var x = v321;
                            if (typeof x != 'string')
                                throw 'The value ' + x + ' is not a type string.';
                            return x.toUpperCase();
                        })();
                        v320 = l104.function(v320);
                        return ((function(v324){
                            return (v324 !== l3.value ? v324 : ((v320 === l104.function("KEYWORD"))?l4.value: l3.value));
                        })(v322) !== l3.value ? l119.function(v321, v320) : l118.function(v321, v320));
                    })(l66.function(v318),l3.value,l3.value,l3.value,l3.value);
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
    return l147;
})();
var l148 = {name: "*EOF*"};
(function(){
    (((l148.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l148).value = l15.function();
    })());
    return l148;
})();
var l149 = {name: "QUOTE"};
var l150 = {name: "BACKQUOTE"};
var l151 = {name: "UNQUOTE-SPLICING"};
var l152 = {name: "UNQUOTE"};
(function(){
    (l144).function = (function(v330){
        ((v330)["fname"] = "LS-READ");
        return v330;
    })((function (v326){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l142.function(v326);
                    return (function(v327){
                        return ((function(v328){
                            return (v328 !== l3.value ? v328 : l73.function(v327, 41));
                        })(l11.function(v327)) !== l3.value ? (function(){
                            return (function(){
                                var symbol = l148;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })();
                        })() : (l73.function(v327, 40) !== l3.value ? (function(){
                            l137.function(v326);
                            return l143.function(v326);
                        })() : (l73.function(v327, 39) !== l3.value ? (function(){
                            l137.function(v326);
                            return l44.function(l149, l144.function(v326));
                        })() : (l73.function(v327, 96) !== l3.value ? (function(){
                            l137.function(v326);
                            return l44.function(l150, l144.function(v326));
                        })() : (l73.function(v327, 34) !== l3.value ? (function(){
                            l137.function(v326);
                            return l145.function(v326);
                        })() : (l73.function(v327, 44) !== l3.value ? (function(){
                            l137.function(v326);
                            return (l27.function(l136.function(v326), 64) !== l3.value ? (function(){
                                l137.function(v326);
                                return l44.function(l151, l144.function(v326));
                            })() : l44.function(l152, l144.function(v326)));
                        })() : (l73.function(v327, 35) !== l3.value ? (function(){
                            return l146.function(v326);
                        })() : (function(){
                            return (function(v329){
                                return (l89.function((function(){
                                    var symbol = l85;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })(), v329) !== l3.value ? l87.function(v329) : l147.function(v329));
                            })(l141.function(v326, (function(){
                                var symbol = l140;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()));
                        })())))))));
                    })(l136.function(v326));
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
    return l144;
})();
var l153 = {name: "LS-READ-FROM-STRING"};
(function(){
    (l153).function = (function(v332){
        ((v332)["fname"] = "LS-READ-FROM-STRING");
        return v332;
    })((function (v331){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l144.function(l135.function(v331));
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
var l154 = {name: "*COMPILATION-UNIT-CHECKS*"};
(function(){
    (((l154.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l154).value = l3;
    })());
    return l154;
})();
var l155 = {name: "MAKE-BINDING"};
(function(){
    (l155).function = (function(v337){
        ((v337)["fname"] = "MAKE-BINDING");
        return v337;
    })((function (v333,v334,v335,v336){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 4) throw 'too many arguments';
        switch(arguments.length){
        case 3:
        v336=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return l44.function(v333, v334, v335, v336);
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
    return l155;
})();
var l156 = {name: "BINDING-NAME"};
(function(){
    (l156).function = (function(v339){
        ((v339)["fname"] = "BINDING-NAME");
        return v339;
    })((function (v338){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l40.function(v338);
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
    return l156;
})();
var l157 = {name: "BINDING-TYPE"};
(function(){
    (l157).function = (function(v341){
        ((v341)["fname"] = "BINDING-TYPE");
        return v341;
    })((function (v340){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l41.function(v340);
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
    return l157;
})();
var l158 = {name: "BINDING-VALUE"};
(function(){
    (l158).function = (function(v343){
        ((v343)["fname"] = "BINDING-VALUE");
        return v343;
    })((function (v342){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l42.function(v342);
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
    return l158;
})();
var l159 = {name: "BINDING-DECLARATIONS"};
(function(){
    (l159).function = (function(v345){
        ((v345)["fname"] = "BINDING-DECLARATIONS");
        return v345;
    })((function (v344){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l43.function(v344);
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
    return l159;
})();
var l160 = {name: "SET-BINDING-VALUE"};
(function(){
    (l160).function = (function(v348){
        ((v348)["fname"] = "SET-BINDING-VALUE");
        return v348;
    })((function (v346,v347){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = l36.function(v346);
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = v347);
                    })();
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
    return l160;
})();
var l161 = {name: "SET-BINDING-DECLARATIONS"};
(function(){
    (l161).function = (function(v351){
        ((v351)["fname"] = "SET-BINDING-DECLARATIONS");
        return v351;
    })((function (v349,v350){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = l38.function(v349);
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = v350);
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
    
    }));
    return l161;
})();
var l162 = {name: "PUSH-BINDING-DECLARATION"};
(function(){
    (l162).function = (function(v354){
        ((v354)["fname"] = "PUSH-BINDING-DECLARATION");
        return v354;
    })((function (v352,v353){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l161.function(v353, ({car: v352, cdr: l159.function(v353)}));
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
    return l162;
})();
var l163 = {name: "MAKE-LEXENV"};
(function(){
    (l163).function = (function(v355){
        ((v355)["fname"] = "MAKE-LEXENV");
        return v355;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l44.function(l3.value, l3.value, l3.value, l3.value);
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
    return l163;
})();
var l164 = {name: "COPY-LEXENV"};
(function(){
    (l164).function = (function(v357){
        ((v357)["fname"] = "COPY-LEXENV");
        return v357;
    })((function (v356){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l70.function(v356);
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
var l165 = {name: "PUSH-TO-LEXENV"};
var l166 = {name: "BLOCK"};
var l167 = {name: "GOTAG"};
(function(){
    (l165).function = (function(v362){
        ((v362)["fname"] = "PUSH-TO-LEXENV");
        return v362;
    })((function (v358,v359,v360){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v361){
                        return (l27.function(v361, l98) !== l3.value ? (function(){
                            return (function(){
                                var x = v359;
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v358, cdr: (function(){
                                    var tmp = v359;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })()}));
                            })();
                        })() : (l27.function(v361, l97) !== l3.value ? (function(){
                            return (function(){
                                var x = (function(){
                                    var tmp = v359;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })();
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v358, cdr: l34.function(v359)}));
                            })();
                        })() : (l27.function(v361, l166) !== l3.value ? (function(){
                            return (function(){
                                var x = l36.function(v359);
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v358, cdr: l37.function(v359)}));
                            })();
                        })() : (l27.function(v361, l167) !== l3.value ? (function(){
                            return (function(){
                                var x = l38.function(v359);
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v358, cdr: l39.function(v359)}));
                            })();
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })()))));
                    })(v360);
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
var l168 = {name: "EXTEND-LEXENV"};
(function(){
    (l168).function = (function(v369){
        ((v369)["fname"] = "EXTEND-LEXENV");
        return v369;
    })((function (v363,v364,v365){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v366){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v367,v368){
                                        (function(){
                                            while(v367 !== l3.value){
                                                v368 = (function(){
                                                    var tmp = v367;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    l165.function(v368, v366, v365);
                                                    return l3.value;
                                                })();
                                                v367 = (function(){
                                                    var tmp = v367;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return v366;
                                    })(l64.function(v363),l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 144)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l164.function(v364));
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
    return l168;
})();
var l169 = {name: "LOOKUP-IN-LEXENV"};
(function(){
    (l169).function = (function(v374){
        ((v374)["fname"] = "LOOKUP-IN-LEXENV");
        return v374;
    })((function (v370,v371,v372){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l90.function(v370, (function(v373){
                        return (l27.function(v373, l98) !== l3.value ? (function(){
                            return l40.function(v371);
                        })() : (l27.function(v373, l97) !== l3.value ? (function(){
                            return l41.function(v371);
                        })() : (l27.function(v373, l166) !== l3.value ? (function(){
                            return l42.function(v371);
                        })() : (l27.function(v373, l167) !== l3.value ? (function(){
                            return l43.function(v371);
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })()))));
                    })(v372));
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
    return l169;
})();
var l170 = {name: "*ENVIRONMENT*"};
(function(){
    (((l170.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l170).value = l163.function();
    })());
    return l170;
})();
var l171 = {name: "*VARIABLE-COUNTER*"};
(function(){
    (((l171.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l171).value = 0;
    })());
    return l171;
})();
var l172 = {name: "GVARNAME"};
(function(){
    (l172).function = (function(v376){
        ((v376)["fname"] = "GVARNAME");
        return v376;
    })((function (v375){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l122.function("v", l16.function((l171).value = (function(){
                        var x = (function(){
                            var symbol = l171;
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
                if (cf.type == 'block' && cf.id == 146)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l172;
})();
var l173 = {name: "TRANSLATE-VARIABLE"};
(function(){
    (l173).function = (function(v378){
        ((v378)["fname"] = "TRANSLATE-VARIABLE");
        return v378;
    })((function (v377){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l158.function(l169.function(v377, (function(){
                        var symbol = l170;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l98));
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
    return l173;
})();
var l174 = {name: "EXTEND-LOCAL-ENV"};
var l175 = {name: "LEXICAL-VARIABLE"};
(function(){
    (l174).function = (function(v384){
        ((v384)["fname"] = "EXTEND-LOCAL-ENV");
        return v384;
    })((function (v379){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v380){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v381,v382){
                                        (function(){
                                            while(v381 !== l3.value){
                                                v382 = (function(){
                                                    var tmp = v381;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    (function(v383){
                                                        return l165.function(v383, v380, l98);
                                                    })(l155.function(v382, l175, l172.function(v382)));
                                                    return l3.value;
                                                })();
                                                v381 = (function(){
                                                    var tmp = v381;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return v380;
                                    })(v379,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 149)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l164.function((function(){
                        var symbol = l170;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
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
var l176 = {name: "*TOPLEVEL-COMPILATIONS*"};
(function(){
    (((l176.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l176).value = l3.value;
    })());
    return l176;
})();
var l177 = {name: "TOPLEVEL-COMPILATION"};
(function(){
    (l177).function = (function(v386){
        ((v386)["fname"] = "TOPLEVEL-COMPILATION");
        return v386;
    })((function (v385){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l176).value = ({car: v385, cdr: (function(){
                        var symbol = l176;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()});
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
    return l177;
})();
var l178 = {name: "NULL-OR-EMPTY-P"};
(function(){
    (l178).function = (function(v388){
        ((v388)["fname"] = "NULL-OR-EMPTY-P");
        return v388;
    })((function (v387){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l25.function(l66.function(v387));
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
    return l178;
})();
var l179 = {name: "GET-TOPLEVEL-COMPILATIONS"};
(function(){
    (l179).function = (function(v389){
        ((v389)["fname"] = "GET-TOPLEVEL-COMPILATIONS");
        return v389;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l64.function(l83.function((function(){
                        var symbol = l178;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), (function(){
                        var symbol = l176;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
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
var l180 = {name: "%COMPILE-DEFMACRO"};
var l181 = {name: "MACRO"};
(function(){
    (l180).function = (function(v392){
        ((v392)["fname"] = "%COMPILE-DEFMACRO");
        return v392;
    })((function (v390,v391){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l177.function((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l44.function(l149), l44.function(v390))));
                    return l165.function(l155.function(v390, l181, v391), (function(){
                        var symbol = l170;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l97);
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
var l182 = {name: "GLOBAL-BINDING"};
(function(){
    (l182).function = (function(v398){
        ((v398)["fname"] = "GLOBAL-BINDING");
        return v398;
    })((function (v393,v394,v395){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v396){
                        return (v396 !== l3.value ? v396 : (function(v397){
                            l165.function(v397, (function(){
                                var symbol = l170;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), v395);
                            return v397;
                        })(l155.function(v393, v394, l3.value)));
                    })(l169.function(v393, (function(){
                        var symbol = l170;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), v395));
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
    return l182;
})();
var l183 = {name: "CLAIMP"};
(function(){
    (l183).function = (function(v403){
        ((v403)["fname"] = "CLAIMP");
        return v403;
    })((function (v399,v400,v401){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v402){
                        return (v402 !== l3.value ? l81.function(v401, l159.function(v402)) : l3.value);
                    })(l169.function(v399, (function(){
                        var symbol = l170;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), v400));
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
    return l183;
})();
var l184 = {name: "!PROCLAIM"};
var l185 = {name: "SPECIAL"};
var l186 = {name: "NOTINLINE"};
var l187 = {name: "CONSTANT"};
var l188 = {name: "NON-OVERRIDABLE"};
(function(){
    (l184).function = (function(v418){
        ((v418)["fname"] = "!PROCLAIM");
        return v418;
    })((function (v404){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v405){
                        return (l27.function(v405, l185) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v406,v407){
                                            (function(){
                                                while(v406 !== l3.value){
                                                    v407 = (function(){
                                                        var tmp = v406;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v408){
                                                            return l162.function(l185, v408);
                                                        })(l182.function(v407, l98, l98));
                                                        return l3.value;
                                                    })();
                                                    v406 = (function(){
                                                        var tmp = v406;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v404;
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
                        })() : (l27.function(v405, l186) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v409,v410){
                                            (function(){
                                                while(v409 !== l3.value){
                                                    v410 = (function(){
                                                        var tmp = v409;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v411){
                                                            return l162.function(l186, v411);
                                                        })(l182.function(v410, l97, l97));
                                                        return l3.value;
                                                    })();
                                                    v409 = (function(){
                                                        var tmp = v409;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v404;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 158)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : (l27.function(v405, l187) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v412,v413){
                                            (function(){
                                                while(v412 !== l3.value){
                                                    v413 = (function(){
                                                        var tmp = v412;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v414){
                                                            return l162.function(l187, v414);
                                                        })(l182.function(v413, l98, l98));
                                                        return l3.value;
                                                    })();
                                                    v412 = (function(){
                                                        var tmp = v412;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v404;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 159)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : (l27.function(v405, l188) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v415,v416){
                                            (function(){
                                                while(v415 !== l3.value){
                                                    v416 = (function(){
                                                        var tmp = v415;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v417){
                                                            return l162.function(l188, v417);
                                                        })(l182.function(v416, l97, l97));
                                                        return l3.value;
                                                    })();
                                                    v415 = (function(){
                                                        var tmp = v415;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v404;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 160)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : l3.value))));
                    })((function(){
                        var tmp = v404;
                        return tmp === l3.value? l3.value: tmp.car;
                    })());
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
    return l184;
})();
var l189 = {name: "PROCLAIM"};
(l189).function = (function(){
    var symbol = l184;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})();
var l190 = {name: "*COMPILATIONS*"};
(function(){
    (((l190.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l190).value = l3.value;
    })());
    return l190;
})();
var l191 = {name: "DEFINE-COMPILATION"};
l191;
var l192 = {name: "IF"};
(l190).value = ({car: l44.function(l192, (function (v419,v420,v421){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l122.function("(", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v419), " !== ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), " ? ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v420), " : ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v421), ")");
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l193 = {name: "*LAMBDA-LIST-KEYWORDS*"};
var l194 = {name: "&OPTIONAL"};
var l195 = {name: "&REST"};
var l196 = {car: l194, cdr: {car: l195, cdr: l3}};
(function(){
    (((l193.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l193).value = l196;
    })());
    return l193;
})();
var l197 = {name: "LIST-UNTIL-KEYWORD"};
(function(){
    (l197).function = (function(v424){
        ((v424)["fname"] = "LIST-UNTIL-KEYWORD");
        return v424;
    })((function (v422){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(v423){
                        return (v423 !== l3.value ? v423 : l81.function((function(){
                            var tmp = v422;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), (function(){
                            var symbol = l193;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()));
                    })(l11.function(v422)) !== l3.value ? l3.value : ({car: (function(){
                        var tmp = v422;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), cdr: l197.function((function(){
                        var tmp = v422;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())}));
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
var l198 = {name: "LAMBDA-LIST-REQUIRED-ARGUMENTS"};
(function(){
    (l198).function = (function(v426){
        ((v426)["fname"] = "LAMBDA-LIST-REQUIRED-ARGUMENTS");
        return v426;
    })((function (v425){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l197.function(v425);
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
    return l198;
})();
var l199 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"};
(function(){
    (l199).function = (function(v428){
        ((v428)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
        return v428;
    })((function (v427){
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
                    })(), l197.function((function(){
                        var tmp = l81.function(l194, v427);
                        return tmp === l3.value? l3.value: tmp.cdr;
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
    
    }));
    return l199;
})();
var l200 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS"};
(function(){
    (l200).function = (function(v430){
        ((v430)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS");
        return v430;
    })((function (v429){
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
                    })(), l199.function(v429));
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
    return l200;
})();
var l201 = {name: "LAMBDA-LIST-REST-ARGUMENT"};
(function(){
    (l201).function = (function(v433){
        ((v433)["fname"] = "LAMBDA-LIST-REST-ARGUMENT");
        return v433;
    })((function (v431){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v432){
                        ((function(){
                            var tmp = v432;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })() !== l3.value ? (function(){
                            return (function(){
                                throw "Bad lambda-list";
                            })();
                        })() : l3.value);
                        return (function(){
                            var tmp = v432;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })(l197.function((function(){
                        var tmp = l81.function(l195, v431);
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 166)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l201;
})();
var l202 = {name: "LAMBDA-DOCSTRING-WRAPPER"};
(function(){
    (l202).function = (function(v436){
        ((v436)["fname"] = "LAMBDA-DOCSTRING-WRAPPER");
        return v436;
    })((function (v435){
        if (arguments.length < 1) throw 'too few arguments';
        var v434= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v434 = {car: arguments[i], cdr: 
        v434};
        return (function(){
            try {
                return (function(){
                    return (v435 !== l3.value ? l122.function("(function(){", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l127.function("var func = ", l124.function(v434), ";", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "func.docstring = '", v435, "';", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "return func;", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : l124.function(v434));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 167)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l202;
})();
var l203 = {name: "LAMBDA"};
var l204 = {name: "LS-COMPILE-BLOCK"};
(l190).value = ({car: l44.function(l203, (function (v438){
    if (arguments.length < 1) throw 'too few arguments';
    var v437= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v437 = {car: arguments[i], cdr: 
    v437};
    return (function(){
        try {
            return (function(){
                return (function(v439,v440,v441,v442){
                    ((((typeof((function(){
                        var tmp = v437;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) == "string")?l4.value: l3.value) !== l3.value ? l28.function(l11.function((function(){
                        var tmp = v437;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())) : l3.value) !== l3.value ? (function(){
                        v442 = (function(){
                            var tmp = v437;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        return v437 = (function(){
                            var tmp = v437;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                    })() : l3.value);
                    return (function(v443,v444,v445){
                        try {
                            var tmp;
                            tmp = l170.value;
                            l170.value = v445;
                            v445 = tmp;
                            return l202.function(v442, "(function (", l124.function(l68.function((function(){
                                var symbol = l173;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })(), l62.function(v439, v440)), ","), "){", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l127.function((v439 !== l3.value ? l122.function("if (arguments.length < ", l16.function(v443), ") throw 'too few arguments';", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (l28.function(v441) !== l3.value ? l122.function("if (arguments.length > ", l16.function((function(){
                                var x = v443;
                                var y = v444;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })()), ") throw 'too many arguments';", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (v440 !== l3.value ? l122.function("switch(arguments.length){", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(v446,v447,v448){
                                return (function(){
                                    (function(){
                                        try {
                                            return (function(){
                                                return (function(){
                                                    while(((function(){
                                                        var x = v448;
                                                        var y = v444;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        if (typeof y != 'number')
                                                            throw 'The value ' + y + ' is not a type number.';
                                                        return x<y;
                                                    })()?l4.value: l3.value) !== l3.value){
                                                        (function(v449){
                                                            v447 = ({car: l122.function("case ", l16.function((function(){
                                                                var x = v448;
                                                                var y = v443;
                                                                if (typeof x != 'number')
                                                                    throw 'The value ' + x + ' is not a type number.';
                                                                if (typeof y != 'number')
                                                                    throw 'The value ' + y + ' is not a type number.';
                                                                return x+y;
                                                            })()), ":", (function(){
                                                                var symbol = l121;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })(), l173.function((function(){
                                                                var tmp = v449;
                                                                return tmp === l3.value? l3.value: tmp.car;
                                                            })()), "=", (function(){
                                                                var symbol = l129;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()(l34.function(v449)), ";", (function(){
                                                                var symbol = l121;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })()), cdr: v447});
                                                            return v448 = (function(){
                                                                var x = v448;
                                                                var y = 1;
                                                                if (typeof x != 'number')
                                                                    throw 'The value ' + x + ' is not a type number.';
                                                                if (typeof y != 'number')
                                                                    throw 'The value ' + y + ' is not a type number.';
                                                                return x+y;
                                                            })();
                                                        })(l78.function(v448, v446));
                                                    }return l3.value;
                                                })();
                                            })();
                                        }
                                        catch (cf){
                                            if (cf.type == 'block' && cf.id == 169)
                                                return cf.value;
                                            else
                                                throw cf;
                                        }
                                    })();
                                    v447 = ({car: l122.function("default: break;", (function(){
                                        var symbol = l121;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()), cdr: v447});
                                    return l124.function(l64.function(v447));
                                })();
                            })(l199.function(v438),l3.value,0), "}", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (v441 !== l3.value ? (function(v450){
                                return l122.function("var ", v450, "= ", (function(){
                                    var symbol = l129;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l3.value), ";", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "for (var i = arguments.length-1; i>=", l16.function((function(){
                                    var x = v443;
                                    var y = v444;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    if (typeof y != 'number')
                                        throw 'The value ' + y + ' is not a type number.';
                                    return x+y;
                                })()), "; i--)", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), l127.function(v450, " = ", "{car: arguments[i], cdr: "), v450, "};", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })(l173.function(v441)) : ""), (function(){
                                var symbol = l204;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v437, l4.value)), (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "})");
                        }
                        finally {
                            l170.value = v445;
                        }
                    })(l66.function(v439),l66.function(v440),l174.function(l62.function(l58.function(v441), v439, v440)));
                })(l198.function(v438),l200.function(v438),l201.function(v438),l3.value);
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l205 = {name: "SETQ"};
var l206 = {name: "SET"};
(l190).value = ({car: l44.function(l205, (function (v451,v452){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v453){
                    return (((l157.function(v453) === l175)?l4.value: l3.value) !== l3.value ? l122.function(l158.function(v453), " = ", (function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v452)) : (function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l44.function(l206), l44.function(l62.function(l44.function(l149), l44.function(v451))), l44.function(v452))));
                })(l169.function(v451, (function(){
                    var symbol = l170;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l98));
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l207 = {name: "JS-VREF"};
(l190).value = ({car: l44.function(l207, (function (v454){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return v454;
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 171)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l208 = {name: "JS-VSET"};
(l190).value = ({car: l44.function(l208, (function (v455,v456){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l122.function("(", v455, " = ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v456), ")");
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
(function(){
    (l132).function = (function(v463){
        ((v463)["fname"] = "ESCAPE-STRING");
        return v463;
    })((function (v457){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v458,v459,v460){
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(((function(){
                                            var x = v459;
                                            var y = v460;
                                            if (typeof x != 'number')
                                                throw 'The value ' + x + ' is not a type number.';
                                            if (typeof y != 'number')
                                                throw 'The value ' + y + ' is not a type number.';
                                            return x<y;
                                        })()?l4.value: l3.value) !== l3.value){
                                            (function(v461){
                                                ((function(v462){
                                                    return (v462 !== l3.value ? v462 : l73.function(v461, 92));
                                                })(l73.function(v461, 34)) !== l3.value ? (function(){
                                                    return v458 = l122.function(v458, "\\");
                                                })() : l3.value);
                                                (l73.function(v461, 10) !== l3.value ? (function(){
                                                    v458 = l122.function(v458, "\\");
                                                    return v461 = 110;
                                                })() : l3.value);
                                                return v458 = l122.function(v458, l91.function(v461));
                                            })((function(){
                                                var string = v457;
                                                var index = v459;
                                                if (typeof string != 'string')
                                                    throw 'The value ' + string + ' is not a type string.';
                                                if (typeof index != 'number')
                                                    throw 'The value ' + index + ' is not a type number.';
                                                return string.charCodeAt(index);
                                            })());
                                            v459 = (function(){
                                                var x = v459;
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
                                if (cf.type == 'block' && cf.id == 174)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v458;
                    })("",0,l66.function(v457));
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
    return l132;
})();
var l209 = {name: "*LITERAL-SYMBOLS*"};
(function(){
    (((l209.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l209).value = l3.value;
    })());
    return l209;
})();
var l210 = {name: "*LITERAL-COUNTER*"};
(function(){
    (((l210.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l210).value = 0;
    })());
    return l210;
})();
var l211 = {name: "GENLIT"};
(function(){
    (l211).function = (function(v464){
        ((v464)["fname"] = "GENLIT");
        return v464;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l122.function("l", l16.function((l210).value = (function(){
                        var x = (function(){
                            var symbol = l210;
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
                if (cf.type == 'block' && cf.id == 175)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l211;
})();
var l212 = {name: "LITERAL"};
(function(){
    (l212).function = (function(v472){
        ((v472)["fname"] = "LITERAL");
        return v472;
    })((function (v465,v466){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v466=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (l74.function(v465) !== l3.value ? (function(){
                        return l16.function(v465);
                    })() : (((typeof(v465) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l122.function("\"", l132.function(v465), "\"");
                    })() : (((function(){
                        var tmp = v465;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v467){
                            return (v467 !== l3.value ? v467 : (function(v468,v469){
                                (l209).value = ({car: ({car: v465, cdr: v468}), cdr: (function(){
                                    var symbol = l209;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()});
                                l177.function(l122.function("var ", v468, " = ", v469));
                                return v468;
                            })(l211.function(),(function(){
                                var symbol = l129;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l62.function(l44.function(l119), l44.function((v465).name), l44.function(l105.function(l113.function(v465)))))));
                        })((function(){
                            var tmp = l90.function(v465, (function(){
                                var symbol = l209;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : (((function(){
                        var tmp = v465;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v470){
                            return (v466 !== l3.value ? v470 : (function(v471){
                                l177.function(l122.function("var ", v471, " = ", v470));
                                return v471;
                            })(l211.function()));
                        })(l122.function("{car: ", l212.function((function(){
                            var tmp = v465;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), l4.value), ", ", "cdr: ", l212.function((function(){
                            var tmp = v465;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), l4.value), "}"));
                    })() : l3.value))));
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
    return l212;
})();
(l190).value = ({car: l44.function(l149, (function (v473){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l212.function(v473);
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l213 = {name: "%WHILE"};
(l190).value = ({car: l44.function(l213, (function (v475){
    if (arguments.length < 1) throw 'too few arguments';
    var v474= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v474 = {car: arguments[i], cdr: 
    v474};
    return (function(){
        try {
            return (function(){
                return l122.function("(function(){", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l127.function("while(", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v475), " !== ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), "){", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l127.function((function(){
                    var symbol = l204;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v474)), "}", "return ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), ";", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l214 = {name: "SYMBOL-FUNCTION"};
(l190).value = ({car: l44.function(l97, (function (v476){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return ((l59.function(v476) !== l3.value ? (((function(){
                    var tmp = v476;
                    return tmp === l3.value? l3.value: tmp.car;
                })() === l203)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                    return (function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v476);
                })() : (((function(){
                    var tmp = v476;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(){
                    return (function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l44.function(l214), l44.function(l62.function(l44.function(l149), l44.function(v476)))));
                })() : l3.value));
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l215 = {name: "EVAL-WHEN-COMPILE"};
var l216 = {name: "EVAL"};
var l217 = {name: "PROGN"};
(l190).value = ({car: l44.function(l215, (function (){
    var v477= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v477 = {car: arguments[i], cdr: 
    v477};
    return (function(){
        try {
            return (function(){
                (function(){
                    var symbol = l216;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(({car: l217, cdr: v477}));
                return l3.value;
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l218 = {name: "DEFINE-TRANSFORMATION"};
l218;
(l190).value = ({car: l44.function(l217, (function (){
    var v478= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v478 = {car: arguments[i], cdr: 
    v478};
    return (function(){
        try {
            return (function(){
                return l122.function("(function(){", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l127.function((function(){
                    var symbol = l204;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v478, l4.value)), "})()");
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l219 = {name: "SPECIAL-VARIABLE-P"};
(function(){
    (l219).function = (function(v480){
        ((v480)["fname"] = "SPECIAL-VARIABLE-P");
        return v480;
    })((function (v479){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l183.function(v479, l98, l185);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 182)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l219;
})();
var l220 = {name: "LET-BINDING-WRAPPER"};
(function(){
    (l220).function = (function(v487){
        ((v487)["fname"] = "LET-BINDING-WRAPPER");
        return v487;
    })((function (v481,v482){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (l11.function(v481) !== l3.value ? (function(){
                        return (function(){
                            throw ({type: 'block', id: 183, value: v482, message: 'Return from unknown block LET-BINDING-WRAPPER.'})
                        })();
                    })() : l3.value);
                    return l122.function("try {", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l127.function("var tmp;", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l126.function((function (v483){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v484){
                            return l122.function("tmp = ", v484, ".value;", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), v484, ".value = ", (function(){
                                var tmp = v483;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), ";", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(){
                                var tmp = v483;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), " = tmp;", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })((function(){
                            var symbol = l129;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l44.function(l149), l44.function((function(){
                            var tmp = v483;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    
                    }), v481), v482, (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "}", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "finally {", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l127.function(l126.function((function (v485){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v486){
                            return l122.function(v486, ".value", " = ", (function(){
                                var tmp = v485;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), ";", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })((function(){
                            var symbol = l129;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l44.function(l149), l44.function((function(){
                            var tmp = v485;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    
                    }), v481)), "}", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 183)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l220;
})();
var l221 = {name: "LET"};
(l190).value = ({car: l44.function(l221, (function (v489){
    if (arguments.length < 1) throw 'too few arguments';
    var v488= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v488 = {car: arguments[i], cdr: 
    v488};
    return (function(){
        try {
            return (function(){
                return (function(v490){
                    return (function(v491){
                        return (function(v492,v494,v493){
                            try {
                                var tmp;
                                tmp = l170.value;
                                l170.value = v494;
                                v494 = tmp;
                                return l122.function("(function(", l124.function(l68.function((function (v495){
                                    if (arguments.length < 1) throw 'too few arguments';
                                    if (arguments.length > 1) throw 'too many arguments';
                                    return (l219.function(v495) !== l3.value ? (function(v496){
                                        v493 = ({car: ({car: v495, cdr: v496}), cdr: v493});
                                        return v496;
                                    })(l172.function(v495)) : l173.function(v495));
                                
                                }), v491), ","), "){", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), (function(v497){
                                    return l127.function(l220.function(v493, v497));
                                })((function(){
                                    var symbol = l204;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v488, l4.value)), "})(", l124.function(v492, ","), ")");
                            }
                            finally {
                                l170.value = v494;
                            }
                        })(l68.function((function(){
                            var symbol = l129;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l68.function((function(){
                            var symbol = l41;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v490)),l174.function(l83.function((function(){
                            var symbol = l219;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v491)),l3.value);
                    })(l68.function((function(){
                        var symbol = l40;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v490));
                })(l68.function((function(){
                    var symbol = l58;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v489));
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l222 = {name: "LET*-INITIALIZE-VALUE"};
(function(){
    (l222).function = (function(v504){
        ((v504)["fname"] = "LET*-INITIALIZE-VALUE");
        return v504;
    })((function (v498){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v499,v500){
                        return (l219.function(v499) !== l3.value ? l122.function((function(){
                            var symbol = l129;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l44.function(l205), l44.function(v499), l44.function(v500))), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()) : (function(v501){
                            return (function(v502){
                                return (function(v503){
                                    l165.function(v502, (function(){
                                        var symbol = l170;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })(), l98);
                                    return v503;
                                })(l122.function("var ", v501, " = ", (function(){
                                    var symbol = l129;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v500), ";", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()));
                            })(l155.function(v499, l98, v501));
                        })(l172.function(v499)));
                    })(l40.function(v498),l41.function(v498));
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
    return l222;
})();
var l223 = {name: "LET*-BINDING-WRAPPER"};
(function(){
    (l223).function = (function(v513){
        ((v513)["fname"] = "LET*-BINDING-WRAPPER");
        return v513;
    })((function (v505,v506){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (l11.function(v505) !== l3.value ? (function(){
                        return (function(){
                            throw ({type: 'block', id: 186, value: v506, message: 'Return from unknown block LET*-BINDING-WRAPPER.'})
                        })();
                    })() : l3.value);
                    return (function(v508){
                        return l122.function("try {", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l126.function((function (v509){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return (function(v510){
                                return l122.function("var ", (function(){
                                    var tmp = v509;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })(), " = ", v510, ".value;", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })((function(){
                                var symbol = l129;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l62.function(l44.function(l149), l44.function((function(){
                                var tmp = v509;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()))));
                        
                        }), v508), v506), "}", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "finally {", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l126.function((function (v511){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return (function(v512){
                                return l122.function(v512, ".value", " = ", (function(){
                                    var tmp = v511;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })(), ";", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })((function(){
                                var symbol = l129;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l62.function(l44.function(l149), l44.function((function(){
                                var tmp = v511;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()))));
                        
                        }), v508)), "}", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    })(l68.function((function (v507){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return ({car: v507, cdr: l172.function(v507)});
                    
                    }), l84.function((function(){
                        var symbol = l219;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v505)));
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
    return l223;
})();
var l224 = {name: "LET*"};
(l190).value = ({car: l44.function(l224, (function (v515){
    if (arguments.length < 1) throw 'too few arguments';
    var v514= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v514 = {car: arguments[i], cdr: 
    v514};
    return (function(){
        try {
            return (function(){
                return (function(v516,v517){
                    try {
                        var tmp;
                        tmp = l170.value;
                        l170.value = v517;
                        v517 = tmp;
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function((function(v518,v519){
                            return l223.function(v518, v519);
                        })(l84.function((function(){
                            var symbol = l219;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l68.function((function(){
                            var symbol = l40;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v516)),l122.function(l126.function((function(){
                            var symbol = l222;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v516), (function(){
                            var symbol = l204;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v514, l4.value)))), "})()");
                    }
                    finally {
                        l170.value = v517;
                    }
                })(l68.function((function(){
                    var symbol = l58;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v515),l164.function((function(){
                    var symbol = l170;
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l225 = {name: "*BLOCK-COUNTER*"};
(function(){
    (((l225.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l225).value = 0;
    })());
    return l225;
})();
(l190).value = ({car: l44.function(l166, (function (v521){
    if (arguments.length < 1) throw 'too few arguments';
    var v520= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v520 = {car: arguments[i], cdr: 
    v520};
    return (function(){
        try {
            return (function(){
                return (function(v522){
                    return (function(v523){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("try {", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(v524){
                            try {
                                var tmp;
                                tmp = l170.value;
                                l170.value = v524;
                                v524 = tmp;
                                return l127.function("return ", (function(){
                                    var symbol = l129;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l62.function(l44.function(l217), v520)), ";", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            }
                            finally {
                                l170.value = v524;
                            }
                        })(l168.function(l44.function(v523), (function(){
                            var symbol = l170;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l166)), "}", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "catch (cf){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    if (cf.type == 'block' && cf.id == ", v522, ")", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        return cf.value;", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    else", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        throw cf;", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "}", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })(l155.function(v521, l166, v522));
                })(l16.function((l225).value = (function(){
                    var x = (function(){
                        var symbol = l225;
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
            if (cf.type == 'block' && cf.id == 188)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l226 = {name: "RETURN-FROM"};
(l190).value = ({car: l44.function(l226, (function (v525,v526){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    switch(arguments.length){
    case 1:
    v526=l3.value;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return (function(v527){
                    return (v527 !== l3.value ? l122.function("(function(){", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l127.function("throw ({", "type: 'block', ", "id: ", l158.function(v527), ", ", "value: ", (function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v526), ", ", "message: 'Return from unknown block ", (v525).name, ".'", "})"), "})()") : (function(){
                        throw l122.function("Unknown block `", (v525).name, "'.");
                    })());
                })(l169.function(v525, (function(){
                    var symbol = l170;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l166));
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l227 = {name: "CATCH"};
(l190).value = ({car: l44.function(l227, (function (v529){
    if (arguments.length < 1) throw 'too few arguments';
    var v528= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v528 = {car: arguments[i], cdr: 
    v528};
    return (function(){
        try {
            return (function(){
                return l122.function("(function(){", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l127.function("var id = ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v529), ";", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "try {", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l127.function("return ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l62.function(l44.function(l217), v528)), ";", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "}", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "catch (cf){", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "    if (cf.type == 'catch' && cf.id == id)", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "        return cf.value;", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "    else", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "        throw cf;", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "}", (function(){
                    var symbol = l121;
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l228 = {name: "THROW"};
(l190).value = ({car: l44.function(l228, (function (v530,v531){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l122.function("(function(){", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l127.function("throw ({", "type: 'catch', ", "id: ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v530), ", ", "value: ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v531), ", ", "message: 'Throw uncatched.'", "})"), "})()");
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l229 = {name: "*TAGBODY-COUNTER*"};
(function(){
    (((l229.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l229).value = 0;
    })());
    return l229;
})();
var l230 = {name: "*GO-TAG-COUNTER*"};
(function(){
    (((l230.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l230).value = 0;
    })());
    return l230;
})();
var l231 = {name: "GO-TAG-P"};
(function(){
    (l231).function = (function(v534){
        ((v534)["fname"] = "GO-TAG-P");
        return v534;
    })((function (v532){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v533){
                        return (v533 !== l3.value ? v533 : ((function(){
                            var tmp = v532;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?l4.value: l3.value));
                    })(l74.function(v532));
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
    return l231;
})();
var l232 = {name: "DECLARE-TAGBODY-TAGS"};
(function(){
    (l232).function = (function(v540){
        ((v540)["fname"] = "DECLARE-TAGBODY-TAGS");
        return v540;
    })((function (v535,v536){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v539){
                        return l168.function(v539, (function(){
                            var symbol = l170;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l167);
                    })(l68.function((function (v537){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v538){
                            return l155.function(v537, l167, l44.function(v535, v538));
                        })(l16.function((l230).value = (function(){
                            var x = (function(){
                                var symbol = l230;
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
                        var symbol = l231;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v536)));
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
    return l232;
})();
var l233 = {name: "TAGBODY"};
(l190).value = ({car: l44.function(l233, (function (){
    var v541= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v541 = {car: arguments[i], cdr: 
    v541};
    return (function(){
        try {
            return (function(){
                (l88.function((function(){
                    var symbol = l231;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v541) !== l3.value ? l3.value : (function(){
                    return (function(){
                        throw ({type: 'block', id: 194, value: (function(){
                            var symbol = l129;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l44.function(l217), v541, l44.function(l3))), message: 'Return from unknown block TAGBODY.'})
                    })();
                })());
                (l231.function((function(){
                    var tmp = v541;
                    return tmp === l3.value? l3.value: tmp.car;
                })()) !== l3.value ? l3.value : (function(){
                    return v541 = ({car: l15.function("START"), cdr: v541});
                })());
                return (function(v542){
                    return (function(v544,v543){
                        try {
                            var tmp;
                            tmp = l170.value;
                            l170.value = v544;
                            v544 = tmp;
                            (function(v545){
                                return v543 = l41.function(l158.function(v545));
                            })(l169.function(l40.function(v541), (function(){
                                var symbol = l170;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l167));
                            return l122.function("(function(){", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l127.function("var tagbody_", v542, " = ", v543, ";", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "tbloop:", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "while (true) {", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l127.function("try {", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l127.function((function(v546){
                                return l122.function("switch(tagbody_", v542, "){", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "case ", v543, ":", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), (function(){
                                    try {
                                        return (function(){
                                            return (function(v547,v548){
                                                (function(){
                                                    while(v547 !== l3.value){
                                                        v548 = (function(){
                                                            var tmp = v547;
                                                            return tmp === l3.value? l3.value: tmp.car;
                                                        })();
                                                        (function(){
                                                            v546 = l122.function(v546, (function(){
                                                                return (l28.function(l231.function(v548)) !== l3.value ? l127.function((function(){
                                                                    var symbol = l129;
                                                                    var func = symbol.function;
                                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                    return func;
                                                                })()(v548), ";", (function(){
                                                                    var symbol = l121;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })()) : (function(v549){
                                                                    return l122.function("case ", l41.function(l158.function(v549)), ":", (function(){
                                                                        var symbol = l121;
                                                                        var value = symbol.value;
                                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                        return value;
                                                                    })());
                                                                })(l169.function(v548, (function(){
                                                                    var symbol = l170;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })(), l167)));
                                                            })());
                                                            return l3.value;
                                                        })();
                                                        v547 = (function(){
                                                            var tmp = v547;
                                                            return tmp === l3.value? l3.value: tmp.cdr;
                                                        })();
                                                    }return l3.value;
                                                })();
                                                return v546;
                                            })((function(){
                                                var tmp = v541;
                                                return tmp === l3.value? l3.value: tmp.cdr;
                                            })(),l3.value);
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 195)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })(), "default:", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "    break tbloop;", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "}", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })("")), "}", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "catch (jump) {", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "    if (jump.type == 'tagbody' && jump.id == ", v542, ")", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "        tagbody_", v542, " = jump.label;", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "    else", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "        throw(jump);", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "}", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), "}", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "return ", (function(){
                                var symbol = l129;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l3.value), ";", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), "})()");
                        }
                        finally {
                            l170.value = v544;
                        }
                    })(l232.function(v542, v541),l3.value);
                })(l16.function((function(){
                    var symbol = l229;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()));
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l234 = {name: "GO"};
(l190).value = ({car: l44.function(l234, (function (v550){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v551,v552){
                    return (v551 !== l3.value ? l122.function("(function(){", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l127.function("throw ({", "type: 'tagbody', ", "id: ", l40.function(l158.function(v551)), ", ", "label: ", l41.function(l158.function(v551)), ", ", "message: 'Attempt to GO to non-existing tag ", v552, "'", "})", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : (function(){
                        throw l122.function("Unknown tag `", v552, "'.");
                    })());
                })(l169.function(v550, (function(){
                    var symbol = l170;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l167),(((function(){
                    var tmp = v550;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(){
                    return (v550).name;
                })() : (l74.function(v550) !== l3.value ? (function(){
                    return l16.function(v550);
                })() : l3.value)));
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l235 = {name: "UNWIND-PROTECT"};
(l190).value = ({car: l44.function(l235, (function (v554){
    if (arguments.length < 1) throw 'too few arguments';
    var v553= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v553 = {car: arguments[i], cdr: 
    v553};
    return (function(){
        try {
            return (function(){
                return l122.function("(function(){", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l127.function("var ret = ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), ";", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "try {", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l127.function("ret = ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v554), ";", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "} finally {", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l127.function((function(){
                    var symbol = l204;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v553)), "}", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "return ret;", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l236 = {name: "BACKQUOTE-EXPAND-1"};
(function(){
    (l236).function = (function(v557){
        ((v557)["fname"] = "BACKQUOTE-EXPAND-1");
        return v557;
    })((function (v555){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v555;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return l44.function(l149, v555);
                    })() : (l45.function(v555) !== l3.value ? (function(){
                        return v555;
                    })() : ((((function(){
                        var tmp = v555;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l152)?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(){
                            var tmp = v555;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })() : ((((function(){
                        var tmp = v555;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l150)?l4.value: l3.value) !== l3.value ? (function(){
                        return l236.function(l236.function(l34.function(v555)));
                    })() : (function(){
                        return ({car: l62, cdr: l68.function((function (v556){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return ((l59.function(v556) !== l3.value ? (((function(){
                                var tmp = v556;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l152)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return l44.function(l44, l34.function(v556));
                            })() : ((l59.function(v556) !== l3.value ? (((function(){
                                var tmp = v556;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l151)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return l34.function(v556);
                            })() : (function(){
                                return l44.function(l44, l236.function(v556));
                            })()));
                        
                        }), v555)});
                    })()))));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 198)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l236;
})();
var l237 = {name: "BACKQUOTE-EXPAND"};
(function(){
    (l237).function = (function(v559){
        ((v559)["fname"] = "BACKQUOTE-EXPAND");
        return v559;
    })((function (v558){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((l59.function(v558) !== l3.value ? (((function(){
                        var tmp = v558;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l150)?l4.value: l3.value) : l3.value) !== l3.value ? l236.function(l34.function(v558)) : v558);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 199)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l237;
})();
l150;
(l190).value = ({car: l44.function(l150, (function (v560){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l236.function(v560));
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l238 = {name: "*BUILTINS*"};
(function(){
    (((l238.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l238).value = l3.value;
    })());
    return l238;
})();
var l239 = {name: "DEFINE-RAW-BUILTIN"};
l239;
var l240 = {name: "DEFINE-BUILTIN"};
l240;
var l241 = {name: "TYPE-CHECK"};
l241;
var l242 = {name: "NUM-OP-NUM"};
(function(){
    (l242).function = (function(v564){
        ((v564)["fname"] = "NUM-OP-NUM");
        return v564;
    })((function (v561,v562,v563){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l122.function("(function(){", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l127.function(l122.function("var ", "x", " = ", v561, ";", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), l122.function("var ", "y", " = ", v563, ";", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), l122.function("if (typeof ", "x", " != '", "number", "')", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l127.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), l122.function("if (typeof ", "y", " != '", "number", "')", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l127.function("throw 'The value ' + ", "y", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), l122.function("return ", (function(){
                        return l122.function("x", v562, "y");
                    })(), ";", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), "})()");
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 201)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l242;
})();
(function(){
    return (l238).value = ({car: l44.function(l19, (function (v565,v566){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v567,v568){
                        return l242.function(v567, "+", v568);
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v565),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v566));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l238).value = ({car: l44.function(l20, (function (v569,v570){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v571,v572){
                        return l242.function(v571, "-", v572);
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v569),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v570));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l238).value = ({car: l44.function(l21, (function (v573,v574){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v575,v576){
                        return l242.function(v575, "*", v576);
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v573),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v574));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l238).value = ({car: l44.function(l22, (function (v577,v578){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v579,v580){
                        return l242.function(v579, "/", v580);
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v577),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v578));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l243 = {name: "MOD"};
(function(){
    return (l238).value = ({car: l44.function(l243, (function (v581,v582){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v583,v584){
                        return l242.function(v583, "%", v584);
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v581),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v582));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l244 = {name: "<"};
(function(){
    return (l238).value = ({car: l44.function(l244, (function (v585,v586){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v587,v588){
                        return l128.function(l242.function(v587, "<", v588));
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v585),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v586));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l245 = {name: ">"};
(function(){
    return (l238).value = ({car: l44.function(l245, (function (v589,v590){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v591,v592){
                        return l128.function(l242.function(v591, ">", v592));
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v589),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v590));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l238).value = ({car: l44.function(l18, (function (v593,v594){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v595,v596){
                        return l128.function(l242.function(v595, "==", v596));
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v593),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v594));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l246 = {name: "<="};
(function(){
    return (l238).value = ({car: l44.function(l246, (function (v597,v598){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v599,v600){
                        return l128.function(l242.function(v599, "<=", v600));
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v597),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v598));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l247 = {name: ">="};
(function(){
    return (l238).value = ({car: l44.function(l247, (function (v601,v602){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v603,v604){
                        return l128.function(l242.function(v603, ">=", v604));
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v601),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v602));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l248 = {name: "NUMBERP"};
(function(){
    return (l238).value = ({car: l44.function(l248, (function (v605){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v606){
                        return l128.function(l122.function("(typeof (", v606, ") == \"number\")"));
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v605));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l249 = {name: "FLOOR"};
(function(){
    return (l238).value = ({car: l44.function(l249, (function (v607){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v608){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l122.function("var ", "x", " = ", v608, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return "Math.floor(x)";
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v607));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l238).value = ({car: l44.function(l29, (function (v609,v610){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v611,v612){
                        return l122.function("({car: ", v611, ", cdr: ", v612, "})");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v609),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v610));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l238).value = ({car: l44.function(l30, (function (v613){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v614){
                        return l128.function(l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("var tmp = ", v614, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return (typeof tmp == 'object' && 'car' in tmp);", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()"));
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v613));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l238).value = ({car: l44.function(l31, (function (v615){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v616){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("var tmp = ", v616, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l129;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), "? ", (function(){
                            var symbol = l129;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ": tmp.car;", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v615));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l238).value = ({car: l44.function(l32, (function (v617){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v618){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("var tmp = ", v618, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l129;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), "? ", (function(){
                            var symbol = l129;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ": tmp.cdr;", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v617));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l250 = {name: "SETCAR"};
(function(){
    return (l238).value = ({car: l44.function(l250, (function (v619,v620){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v621,v622){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l122.function("var ", "x", " = ", v621, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return l122.function("(x.car = ", v622, ")");
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v619),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v620));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l251 = {name: "SETCDR"};
(function(){
    return (l238).value = ({car: l44.function(l251, (function (v623,v624){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v625,v626){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l122.function("var ", "x", " = ", v625, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return l122.function("(x.cdr = ", v626, ")");
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v623),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v624));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l252 = {name: "SYMBOLP"};
(function(){
    return (l238).value = ({car: l44.function(l252, (function (v627){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v628){
                        return l128.function(l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("var tmp = ", v628, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return (typeof tmp == 'object' && 'name' in tmp);", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()"));
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v627));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l253 = {name: "MAKE-SYMBOL"};
(function(){
    return (l238).value = ({car: l44.function(l253, (function (v629){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v630){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l122.function("var ", "name", " = ", v630, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "name", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "name", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return "({name: name})";
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v629));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l254 = {name: "SYMBOL-NAME"};
(function(){
    return (l238).value = ({car: l44.function(l254, (function (v631){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v632){
                        return l122.function("(", v632, ").name");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v631));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l238).value = ({car: l44.function(l206, (function (v633,v634){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v635,v636){
                        return l122.function("(", v635, ").value = ", v636);
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v633),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v634));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l255 = {name: "FSET"};
(function(){
    return (l238).value = ({car: l44.function(l255, (function (v637,v638){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v639,v640){
                        return l122.function("(", v639, ").function = ", v640);
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v637),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v638));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l238).value = ({car: l44.function(l17, (function (v641){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v642){
                        return l128.function(l122.function("(", v642, ".value !== undefined)"));
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v641));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l256 = {name: "SYMBOL-VALUE"};
(function(){
    return (l238).value = ({car: l44.function(l256, (function (v643){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v644){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("var symbol = ", v644, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var value = symbol.value;", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (value === undefined) throw \"Variable `\" + symbol.name + \"' is unbound.\";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return value;", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v643));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l238).value = ({car: l44.function(l214, (function (v645){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v646){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("var symbol = ", v646, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var func = symbol.function;", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (func === undefined) throw \"Function `\" + symbol.name + \"' is undefined.\";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return func;", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v645));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l257 = {name: "SYMBOL-PLIST"};
(function(){
    return (l238).value = ({car: l44.function(l257, (function (v647){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v648){
                        return l122.function("((", v648, ").plist || ", (function(){
                            var symbol = l129;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ")");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v647));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l258 = {name: "LAMBDA-CODE"};
(function(){
    return (l238).value = ({car: l44.function(l258, (function (v649){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v650){
                        return l122.function("(", v650, ").toString()");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v649));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l259 = {name: "EQ"};
(function(){
    return (l238).value = ({car: l44.function(l259, (function (v651,v652){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v653,v654){
                        return l128.function(l122.function("(", v653, " === ", v654, ")"));
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v651),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v652));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l260 = {name: "EQUAL"};
(function(){
    return (l238).value = ({car: l44.function(l260, (function (v655,v656){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v657,v658){
                        return l128.function(l122.function("(", v657, " == ", v658, ")"));
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v655),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v656));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l261 = {name: "CHAR-TO-STRING"};
(function(){
    return (l238).value = ({car: l44.function(l261, (function (v659){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v660){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l122.function("var ", "x", " = ", v660, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return "String.fromCharCode(x)";
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v659));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l262 = {name: "STRINGP"};
(function(){
    return (l238).value = ({car: l44.function(l262, (function (v661){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v662){
                        return l128.function(l122.function("(typeof(", v662, ") == \"string\")"));
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v661));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l263 = {name: "STRING-UPCASE"};
(function(){
    return (l238).value = ({car: l44.function(l263, (function (v663){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v664){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l122.function("var ", "x", " = ", v664, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return "x.toUpperCase()";
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v663));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l264 = {name: "STRING-LENGTH"};
(function(){
    return (l238).value = ({car: l44.function(l264, (function (v665){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v666){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l122.function("var ", "x", " = ", v666, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return "x.length";
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v665));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l265 = {name: "SLICE"};
(l238).value = ({car: l44.function(l265, (function (v667,v668,v669){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    switch(arguments.length){
    case 2:
    v669=l3.value;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return l122.function("(function(){", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l127.function("var str = ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v667), ";", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var a = ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v668), ";", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var b;", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (v669 !== l3.value ? l122.function("b = ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v669), ";", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()) : ""), "return str.slice(a,b);", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
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
    var symbol = l238;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l266 = {name: "CHAR"};
(function(){
    return (l238).value = ({car: l44.function(l266, (function (v670,v671){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v672,v673){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l122.function("var ", "string", " = ", v672, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("var ", "index", " = ", v673, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("if (typeof ", "index", " != '", "number", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "index", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return "string.charCodeAt(index)";
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v670),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v671));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l238).value = ({car: l44.function(l67, (function (v674,v675){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v676,v677){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l122.function("var ", "string1", " = ", v676, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("var ", "string2", " = ", v677, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "string1", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "string1", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("if (typeof ", "string2", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "string2", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return "string1.concat(string2)";
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v674),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v675));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l267 = {name: "FUNCALL"};
(l238).value = ({car: l44.function(l267, (function (v679){
    if (arguments.length < 1) throw 'too few arguments';
    var v678= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v678 = {car: arguments[i], cdr: 
    v678};
    return (function(){
        try {
            return (function(){
                return l122.function("(", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v679), ")(", l124.function(l68.function((function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v678), ", "), ")");
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
    var symbol = l238;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l268 = {name: "APPLY"};
(l238).value = ({car: l44.function(l268, (function (v681){
    if (arguments.length < 1) throw 'too few arguments';
    var v680= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v680 = {car: arguments[i], cdr: 
    v680};
    return (function(){
        try {
            return (function(){
                return (l11.function(v680) !== l3.value ? l122.function("(", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v681), ")()") : (function(v682,v683){
                    return l122.function("(function(){", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l127.function("var f = ", (function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v681), ";", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var args = [", l124.function(l68.function((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v682), ", "), "];", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var tail = (", (function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v683), ");", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "while (tail != ", (function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l3.value), "){", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    args.push(tail.car);", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    tail = tail.cdr;", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "}", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "return f.apply(this, args);", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()");
                })(l80.function(v680),(function(){
                    var tmp = l79.function(v680);
                    return tmp === l3.value? l3.value: tmp.car;
                })()));
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
    var symbol = l238;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l269 = {name: "JS-EVAL"};
(function(){
    return (l238).value = ({car: l44.function(l269, (function (v684){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v685){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l122.function("var ", "string", " = ", v685, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return "eval.apply(window, [string])";
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v684));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l270 = {name: "ERROR"};
(function(){
    return (l238).value = ({car: l44.function(l270, (function (v686){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v687){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw ", v687, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v686));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l271 = {name: "NEW"};
(function(){
    return (l238).value = ({car: l44.function(l271, (function (){
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
                if (cf.type == 'block' && cf.id == 243)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l272 = {name: "OBJECTP"};
(function(){
    return (l238).value = ({car: l44.function(l272, (function (v688){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v689){
                        return l128.function(l122.function("(typeof (", v689, ") === 'object')"));
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v688));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l273 = {name: "OGET"};
(function(){
    return (l238).value = ({car: l44.function(l273, (function (v690,v691){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v692,v693){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("var tmp = ", "(", v692, ")[", v693, "];", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp == undefined? ", (function(){
                            var symbol = l129;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ": tmp ;", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v690),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v691));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l274 = {name: "OSET"};
(function(){
    return (l238).value = ({car: l44.function(l274, (function (v694,v695,v696){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v697,v698,v699){
                        return l122.function("((", v697, ")[", v698, "] = ", v699, ")");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v694),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v695),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v696));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l275 = {name: "IN"};
(function(){
    return (l238).value = ({car: l44.function(l275, (function (v700,v701){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v702,v703){
                        return l128.function(l122.function("((", v702, ") in (", v703, "))"));
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v700),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v701));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l276 = {name: "FUNCTIONP"};
(function(){
    return (l238).value = ({car: l44.function(l276, (function (v704){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v705){
                        return l128.function(l122.function("(typeof ", v705, " == 'function')"));
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v704));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l277 = {name: "WRITE-STRING"};
(function(){
    return (l238).value = ({car: l44.function(l277, (function (v706){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v707){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l122.function("var ", "x", " = ", v707, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return "lisp.write(x)";
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v706));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    (l181).function = (function(v710){
        ((v710)["fname"] = "MACRO");
        return v710;
    })((function (v708){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v708;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(v709){
                        return (((l157.function(v709) === l181)?l4.value: l3.value) !== l3.value ? v709 : l3.value);
                    })(l169.function(v708, (function(){
                        var symbol = l170;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l97)) : l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 250)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l181;
})();
var l278 = {name: "LS-MACROEXPAND-1"};
(function(){
    (l278).function = (function(v715){
        ((v715)["fname"] = "LS-MACROEXPAND-1");
        return v715;
    })((function (v711){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v712){
                        return (v712 !== l3.value ? (function(v713){
                            (l59.function(v713) !== l3.value ? (function(){
                                return (function(v714){
                                    l160.function(v712, v714);
                                    return v713 = v714;
                                })((function(){
                                    var symbol = l216;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v713));
                            })() : l3.value);
                            return (function(){
                                var f = v713;
                                var args = [];
                                var tail = ((function(){
                                    var tmp = v711;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                                while (tail != l3.value){
                                    args.push(tail.car);
                                    tail = tail.cdr;
                                }
                                return f.apply(this, args);
                            })();
                        })(l158.function(v712)) : v711);
                    })(l181.function((function(){
                        var tmp = v711;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 251)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l278;
})();
var l279 = {name: "COMPILE-FUNCALL"};
(function(){
    (l279).function = (function(v718){
        ((v718)["fname"] = "COMPILE-FUNCALL");
        return v718;
    })((function (v716,v717){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((((function(){
                        var tmp = v716;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? l183.function(v716, l97, l188) : l3.value) !== l3.value ? l122.function((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l44.function(l149), l44.function(v716))), ".function(", l124.function(l68.function((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v717), ", "), ")") : l122.function((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l44.function(l97), l44.function(v716))), "(", l124.function(l68.function((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v717), ", "), ")"));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 252)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l279;
})();
(function(){
    (l204).function = (function(v721){
        ((v721)["fname"] = "LS-COMPILE-BLOCK");
        return v721;
    })((function (v719,v720){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v720=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (v720 !== l3.value ? l122.function(l204.function(l80.function(v719)), "return ", (function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = l79.function(v719);
                        return tmp === l3.value? l3.value: tmp.car;
                    })()), ";") : l125.function(l83.function((function(){
                        var symbol = l178;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l68.function((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v719)), l122.function(";", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 253)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l204;
})();
(function(){
    (l129).function = (function(v729){
        ((v729)["fname"] = "LS-COMPILE");
        return v729;
    })((function (v722){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v722;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v723){
                            return ((v723 !== l3.value ? l28.function(l81.function(l185, l159.function(v723))) : l3.value) !== l3.value ? (function(){
                                return l158.function(v723);
                            })() : ((function(v724){
                                return (v724 !== l3.value ? v724 : l81.function(l187, l159.function(v723)));
                            })(l112.function(v722)) !== l3.value ? (function(){
                                return l122.function(l129.function(l62.function(l44.function(l149), l44.function(v722))), ".value");
                            })() : (function(){
                                return l129.function(l62.function(l44.function(l256), l44.function(l62.function(l44.function(l149), l44.function(v722)))));
                            })()));
                        })(l169.function(v722, (function(){
                            var symbol = l170;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l98));
                    })() : (l74.function(v722) !== l3.value ? (function(){
                        return l16.function(v722);
                    })() : (((typeof(v722) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l122.function("\"", l132.function(v722), "\"");
                    })() : (l59.function(v722) !== l3.value ? (function(){
                        return (function(v725,v726){
                            return (l90.function(v725, (function(){
                                var symbol = l190;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== l3.value ? (function(){
                                return (function(v727){
                                    return (function(){
                                        var f = v727;
                                        var args = [];
                                        var tail = (v726);
                                        while (tail != l3.value){
                                            args.push(tail.car);
                                            tail = tail.cdr;
                                        }
                                        return f.apply(this, args);
                                    })();
                                })(l41.function(l90.function(v725, (function(){
                                    var symbol = l190;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })())));
                            })() : ((l90.function(v725, (function(){
                                var symbol = l238;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== l3.value ? l28.function(l183.function(v725, l97, l186)) : l3.value) !== l3.value ? (function(){
                                return (function(v728){
                                    return (function(){
                                        var f = v728;
                                        var args = [];
                                        var tail = (v726);
                                        while (tail != l3.value){
                                            args.push(tail.car);
                                            tail = tail.cdr;
                                        }
                                        return f.apply(this, args);
                                    })();
                                })(l41.function(l90.function(v725, (function(){
                                    var symbol = l238;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })())));
                            })() : (function(){
                                return (l181.function(v725) !== l3.value ? l129.function(l278.function(v722)) : l279.function(v725, v726));
                            })()));
                        })((function(){
                            var tmp = v722;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(),(function(){
                            var tmp = v722;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : l3.value))));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 254)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l129;
})();
var l280 = {name: "LS-COMPILE-TOPLEVEL"};
(function(){
    (l280).function = (function(v734){
        ((v734)["fname"] = "LS-COMPILE-TOPLEVEL");
        return v734;
    })((function (v730){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v731){
                        try {
                            var tmp;
                            tmp = l176.value;
                            l176.value = v731;
                            v731 = tmp;
                            return ((((function(){
                                var tmp = v730;
                                return (typeof tmp == 'object' && 'car' in tmp);
                            })()?l4.value: l3.value) !== l3.value ? (((function(){
                                var tmp = v730;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l217)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return (function(v732){
                                    return l124.function(l83.function((function(){
                                        var symbol = l178;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })(), v732));
                                })(l68.function((function(){
                                    var symbol = l280;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })(), (function(){
                                    var tmp = v730;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })()));
                            })() : (function(){
                                return (function(v733){
                                    return l122.function(l125.function(l179.function(), l122.function(";", (function(){
                                        var symbol = l121;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })())), (v733 !== l3.value ? l122.function(v733, ";", (function(){
                                        var symbol = l121;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()) : ""));
                                })(l129.function(v730));
                            })());
                        }
                        finally {
                            l176.value = v731;
                        }
                    })(l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 255)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l280;
})();
var l281 = {name: "WITH-COMPILATION-UNIT"};
l281;
(function(){
    (l216).function = (function(v740){
        ((v740)["fname"] = "EVAL");
        return v740;
    })((function (v735){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v739){
                        return (function(){
                            var string = v739;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            return eval.apply(window, [string]);
                        })();
                    })((function(v736){
                        (function(){
                            try {
                                return (function(){
                                    return (function(v737,v738){
                                        (function(){
                                            while(v737 !== l3.value){
                                                v738 = (function(){
                                                    var tmp = v737;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    (v738)();
                                                    return l3.value;
                                                })();
                                                v737 = (function(){
                                                    var tmp = v737;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return l3.value;
                                    })((function(){
                                        var symbol = l154;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })(),l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 257)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v736;
                    })((function(){
                        (l154).value = l3.value;
                        return l280.function(v735);
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
    
    }));
    return l216;
})();
var l282 = {name: "PRON"};
var l283 = {car: l21, cdr: {car: l14, cdr: {car: l114, cdr: {car: l19, cdr: {car: l20, cdr: {car: l22, cdr: {car: l23, cdr: {car: l24, cdr: {car: l244, cdr: {car: l246, cdr: {car: l18, cdr: {car: l18, cdr: {car: l245, cdr: {car: l247, cdr: {car: l54, cdr: {car: l62, cdr: {car: l268, cdr: {car: l90, cdr: {car: l45, cdr: {car: l166, cdr: {car: l17, cdr: {car: l17, cdr: {car: l80, cdr: {car: l33, cdr: {car: l39, cdr: {car: l37, cdr: {car: l34, cdr: {car: l31, cdr: {car: l31, cdr: {car: l52, cdr: {car: l227, cdr: {car: l35, cdr: {car: l38, cdr: {car: l36, cdr: {car: l32, cdr: {car: l32, cdr: {car: l266, cdr: {car: l72, cdr: {car: l73, cdr: {car: l71, cdr: {car: l51, cdr: {car: l29, cdr: {car: l30, cdr: {car: l70, cdr: {car: l47, cdr: {car: l2, cdr: {car: l8, cdr: {car: l10, cdr: {car: l7, cdr: {car: l85, cdr: {car: l94, cdr: {car: l96, cdr: {car: l49, cdr: {car: l50, cdr: {car: l53, cdr: {car: l259, cdr: {car: l27, cdr: {car: l260, cdr: {car: l270, cdr: {car: l216, cdr: {car: l89, cdr: {car: l120, cdr: {car: l93, cdr: {car: l104, cdr: {car: l118, cdr: {car: l40, cdr: {car: l43, cdr: {car: l255, cdr: {car: l267, cdr: {car: l97, cdr: {car: l276, cdr: {car: l15, cdr: {car: l234, cdr: {car: l69, cdr: {car: l192, cdr: {car: l115, cdr: {car: l46, cdr: {car: l74, cdr: {car: l74, cdr: {car: l119, cdr: {car: l112, cdr: {car: l203, cdr: {car: l79, cdr: {car: l66, cdr: {car: l221, cdr: {car: l224, cdr: {car: l100, cdr: {car: l44, cdr: {car: l59, cdr: {car: l101, cdr: {car: l253, cdr: {car: l68, cdr: {car: l81, cdr: {car: l76, cdr: {car: l243, cdr: {car: l3, cdr: {car: l28, cdr: {car: l78, cdr: {car: l77, cdr: {car: l11, cdr: {car: l248, cdr: {car: l55, cdr: {car: l105, cdr: {car: l107, cdr: {car: l103, cdr: {car: l75, cdr: {car: l131, cdr: {car: l134, cdr: {car: l189, cdr: {car: l56, cdr: {car: l57, cdr: {car: l282, cdr: {car: l48, cdr: {car: l149, cdr: {car: l82, cdr: {car: l83, cdr: {car: l84, cdr: {car: l12, cdr: {car: l226, cdr: {car: l63, cdr: {car: l64, cdr: {car: l41, cdr: {car: l206, cdr: {car: l205, cdr: {car: l88, cdr: {car: l263, cdr: {car: l91, cdr: {car: l92, cdr: {car: l262, cdr: {car: l86, cdr: {car: l214, cdr: {car: l254, cdr: {car: l113, cdr: {car: l257, cdr: {car: l256, cdr: {car: l252, cdr: {car: l4, cdr: {car: l233, cdr: {car: l42, cdr: {car: l228, cdr: {car: l26, cdr: {car: l6, cdr: {car: l235, cdr: {car: l98, cdr: {car: l133, cdr: {car: l5, cdr: {car: l95, cdr: {car: l277, cdr: {car: l25, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
l120.function(l283);
(l114).value = (function(){
    var symbol = l110;
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
    var symbol = l153;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.print = (function(){
    var symbol = l131;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.eval = (function(){
    var symbol = l216;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.compile = (function(){
    var symbol = l280;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.evalString = (function (v741){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return l216.function(l153.function(v741));

}));
(lisp.compileString = (function (v742){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return l280.function(l153.function(v742));

}));
var l284 = {car: {car: l282, cdr: "l282"}, cdr: {car: {car: l281, cdr: "l281"}, cdr: {car: {car: l280, cdr: "l280"}, cdr: {car: {car: l279, cdr: "l279"}, cdr: {car: {car: l278, cdr: "l278"}, cdr: {car: {car: l277, cdr: "l277"}, cdr: {car: {car: l276, cdr: "l276"}, cdr: {car: {car: l275, cdr: "l275"}, cdr: {car: {car: l274, cdr: "l274"}, cdr: {car: {car: l273, cdr: "l273"}, cdr: {car: {car: l272, cdr: "l272"}, cdr: {car: {car: l271, cdr: "l271"}, cdr: {car: {car: l270, cdr: "l270"}, cdr: {car: {car: l269, cdr: "l269"}, cdr: {car: {car: l268, cdr: "l268"}, cdr: {car: {car: l267, cdr: "l267"}, cdr: {car: {car: l266, cdr: "l266"}, cdr: {car: {car: l265, cdr: "l265"}, cdr: {car: {car: l264, cdr: "l264"}, cdr: {car: {car: l263, cdr: "l263"}, cdr: {car: {car: l262, cdr: "l262"}, cdr: {car: {car: l261, cdr: "l261"}, cdr: {car: {car: l260, cdr: "l260"}, cdr: {car: {car: l259, cdr: "l259"}, cdr: {car: {car: l258, cdr: "l258"}, cdr: {car: {car: l257, cdr: "l257"}, cdr: {car: {car: l256, cdr: "l256"}, cdr: {car: {car: l255, cdr: "l255"}, cdr: {car: {car: l254, cdr: "l254"}, cdr: {car: {car: l253, cdr: "l253"}, cdr: {car: {car: l252, cdr: "l252"}, cdr: {car: {car: l251, cdr: "l251"}, cdr: {car: {car: l250, cdr: "l250"}, cdr: {car: {car: l249, cdr: "l249"}, cdr: {car: {car: l248, cdr: "l248"}, cdr: {car: {car: l247, cdr: "l247"}, cdr: {car: {car: l246, cdr: "l246"}, cdr: {car: {car: l245, cdr: "l245"}, cdr: {car: {car: l244, cdr: "l244"}, cdr: {car: {car: l243, cdr: "l243"}, cdr: {car: {car: l242, cdr: "l242"}, cdr: {car: {car: l241, cdr: "l241"}, cdr: {car: {car: l240, cdr: "l240"}, cdr: {car: {car: l239, cdr: "l239"}, cdr: {car: {car: l238, cdr: "l238"}, cdr: {car: {car: l237, cdr: "l237"}, cdr: {car: {car: l236, cdr: "l236"}, cdr: {car: {car: l235, cdr: "l235"}, cdr: {car: {car: l234, cdr: "l234"}, cdr: {car: {car: l233, cdr: "l233"}, cdr: {car: {car: l232, cdr: "l232"}, cdr: {car: {car: l231, cdr: "l231"}, cdr: {car: {car: l230, cdr: "l230"}, cdr: {car: {car: l229, cdr: "l229"}, cdr: {car: {car: l228, cdr: "l228"}, cdr: {car: {car: l227, cdr: "l227"}, cdr: {car: {car: l226, cdr: "l226"}, cdr: {car: {car: l225, cdr: "l225"}, cdr: {car: {car: l224, cdr: "l224"}, cdr: {car: {car: l223, cdr: "l223"}, cdr: {car: {car: l222, cdr: "l222"}, cdr: {car: {car: l221, cdr: "l221"}, cdr: {car: {car: l220, cdr: "l220"}, cdr: {car: {car: l219, cdr: "l219"}, cdr: {car: {car: l218, cdr: "l218"}, cdr: {car: {car: l217, cdr: "l217"}, cdr: {car: {car: l216, cdr: "l216"}, cdr: {car: {car: l215, cdr: "l215"}, cdr: {car: {car: l214, cdr: "l214"}, cdr: {car: {car: l213, cdr: "l213"}, cdr: {car: {car: l212, cdr: "l212"}, cdr: {car: {car: l211, cdr: "l211"}, cdr: {car: {car: l210, cdr: "l210"}, cdr: {car: {car: l209, cdr: "l209"}, cdr: {car: {car: l208, cdr: "l208"}, cdr: {car: {car: l207, cdr: "l207"}, cdr: {car: {car: l206, cdr: "l206"}, cdr: {car: {car: l205, cdr: "l205"}, cdr: {car: {car: l204, cdr: "l204"}, cdr: {car: {car: l203, cdr: "l203"}, cdr: {car: {car: l202, cdr: "l202"}, cdr: {car: {car: l201, cdr: "l201"}, cdr: {car: {car: l200, cdr: "l200"}, cdr: {car: {car: l199, cdr: "l199"}, cdr: {car: {car: l198, cdr: "l198"}, cdr: {car: {car: l197, cdr: "l197"}, cdr: {car: {car: l195, cdr: "l195"}, cdr: {car: {car: l194, cdr: "l194"}, cdr: {car: {car: l193, cdr: "l193"}, cdr: {car: {car: l192, cdr: "l192"}, cdr: {car: {car: l191, cdr: "l191"}, cdr: {car: {car: l190, cdr: "l190"}, cdr: {car: {car: l189, cdr: "l189"}, cdr: {car: {car: l188, cdr: "l188"}, cdr: {car: {car: l187, cdr: "l187"}, cdr: {car: {car: l186, cdr: "l186"}, cdr: {car: {car: l185, cdr: "l185"}, cdr: {car: {car: l184, cdr: "l184"}, cdr: {car: {car: l183, cdr: "l183"}, cdr: {car: {car: l182, cdr: "l182"}, cdr: {car: {car: l181, cdr: "l181"}, cdr: {car: {car: l180, cdr: "l180"}, cdr: {car: {car: l179, cdr: "l179"}, cdr: {car: {car: l178, cdr: "l178"}, cdr: {car: {car: l177, cdr: "l177"}, cdr: {car: {car: l176, cdr: "l176"}, cdr: {car: {car: l175, cdr: "l175"}, cdr: {car: {car: l174, cdr: "l174"}, cdr: {car: {car: l173, cdr: "l173"}, cdr: {car: {car: l172, cdr: "l172"}, cdr: {car: {car: l171, cdr: "l171"}, cdr: {car: {car: l170, cdr: "l170"}, cdr: {car: {car: l169, cdr: "l169"}, cdr: {car: {car: l168, cdr: "l168"}, cdr: {car: {car: l167, cdr: "l167"}, cdr: {car: {car: l166, cdr: "l166"}, cdr: {car: {car: l165, cdr: "l165"}, cdr: {car: {car: l164, cdr: "l164"}, cdr: {car: {car: l163, cdr: "l163"}, cdr: {car: {car: l162, cdr: "l162"}, cdr: {car: {car: l161, cdr: "l161"}, cdr: {car: {car: l160, cdr: "l160"}, cdr: {car: {car: l159, cdr: "l159"}, cdr: {car: {car: l158, cdr: "l158"}, cdr: {car: {car: l157, cdr: "l157"}, cdr: {car: {car: l156, cdr: "l156"}, cdr: {car: {car: l155, cdr: "l155"}, cdr: {car: {car: l154, cdr: "l154"}, cdr: {car: {car: l153, cdr: "l153"}, cdr: {car: {car: l152, cdr: "l152"}, cdr: {car: {car: l151, cdr: "l151"}, cdr: {car: {car: l150, cdr: "l150"}, cdr: {car: {car: l149, cdr: "l149"}, cdr: {car: {car: l148, cdr: "l148"}, cdr: {car: {car: l147, cdr: "l147"}, cdr: {car: {car: l146, cdr: "l146"}, cdr: {car: {car: l145, cdr: "l145"}, cdr: {car: {car: l144, cdr: "l144"}, cdr: {car: {car: l143, cdr: "l143"}, cdr: {car: {car: l142, cdr: "l142"}, cdr: {car: {car: l141, cdr: "l141"}, cdr: {car: {car: l140, cdr: "l140"}, cdr: {car: {car: l139, cdr: "l139"}, cdr: {car: {car: l138, cdr: "l138"}, cdr: {car: {car: l137, cdr: "l137"}, cdr: {car: {car: l136, cdr: "l136"}, cdr: {car: {car: l135, cdr: "l135"}, cdr: {car: {car: l134, cdr: "l134"}, cdr: {car: {car: l133, cdr: "l133"}, cdr: {car: {car: l132, cdr: "l132"}, cdr: {car: {car: l131, cdr: "l131"}, cdr: {car: {car: l130, cdr: "l130"}, cdr: {car: {car: l129, cdr: "l129"}, cdr: {car: {car: l128, cdr: "l128"}, cdr: {car: {car: l127, cdr: "l127"}, cdr: {car: {car: l126, cdr: "l126"}, cdr: {car: {car: l125, cdr: "l125"}, cdr: {car: {car: l124, cdr: "l124"}, cdr: {car: {car: l123, cdr: "l123"}, cdr: {car: {car: l122, cdr: "l122"}, cdr: {car: {car: l121, cdr: "l121"}, cdr: {car: {car: l120, cdr: "l120"}, cdr: {car: {car: l119, cdr: "l119"}, cdr: {car: {car: l118, cdr: "l118"}, cdr: {car: {car: l117, cdr: "l117"}, cdr: {car: {car: l116, cdr: "l116"}, cdr: {car: {car: l115, cdr: "l115"}, cdr: {car: {car: l114, cdr: "l114"}, cdr: {car: {car: l113, cdr: "l113"}, cdr: {car: {car: l112, cdr: "l112"}, cdr: {car: {car: l111, cdr: "l111"}, cdr: {car: {car: l110, cdr: "l110"}, cdr: {car: {car: l109, cdr: "l109"}, cdr: {car: {car: l108, cdr: "l108"}, cdr: {car: {car: l107, cdr: "l107"}, cdr: {car: {car: l106, cdr: "l106"}, cdr: {car: {car: l105, cdr: "l105"}, cdr: {car: {car: l104, cdr: "l104"}, cdr: {car: {car: l103, cdr: "l103"}, cdr: {car: {car: l102, cdr: "l102"}, cdr: {car: {car: l101, cdr: "l101"}, cdr: {car: {car: l100, cdr: "l100"}, cdr: {car: {car: l99, cdr: "l99"}, cdr: {car: {car: l98, cdr: "l98"}, cdr: {car: {car: l97, cdr: "l97"}, cdr: {car: {car: l96, cdr: "l96"}, cdr: {car: {car: l95, cdr: "l95"}, cdr: {car: {car: l94, cdr: "l94"}, cdr: {car: {car: l93, cdr: "l93"}, cdr: {car: {car: l92, cdr: "l92"}, cdr: {car: {car: l91, cdr: "l91"}, cdr: {car: {car: l90, cdr: "l90"}, cdr: {car: {car: l89, cdr: "l89"}, cdr: {car: {car: l88, cdr: "l88"}, cdr: {car: {car: l87, cdr: "l87"}, cdr: {car: {car: l86, cdr: "l86"}, cdr: {car: {car: l85, cdr: "l85"}, cdr: {car: {car: l84, cdr: "l84"}, cdr: {car: {car: l83, cdr: "l83"}, cdr: {car: {car: l82, cdr: "l82"}, cdr: {car: {car: l81, cdr: "l81"}, cdr: {car: {car: l80, cdr: "l80"}, cdr: {car: {car: l79, cdr: "l79"}, cdr: {car: {car: l78, cdr: "l78"}, cdr: {car: {car: l77, cdr: "l77"}, cdr: {car: {car: l76, cdr: "l76"}, cdr: {car: {car: l75, cdr: "l75"}, cdr: {car: {car: l74, cdr: "l74"}, cdr: {car: {car: l73, cdr: "l73"}, cdr: {car: {car: l72, cdr: "l72"}, cdr: {car: {car: l71, cdr: "l71"}, cdr: {car: {car: l70, cdr: "l70"}, cdr: {car: {car: l69, cdr: "l69"}, cdr: {car: {car: l68, cdr: "l68"}, cdr: {car: {car: l67, cdr: "l67"}, cdr: {car: {car: l66, cdr: "l66"}, cdr: {car: {car: l65, cdr: "l65"}, cdr: {car: {car: l64, cdr: "l64"}, cdr: {car: {car: l63, cdr: "l63"}, cdr: {car: {car: l62, cdr: "l62"}, cdr: {car: {car: l61, cdr: "l61"}, cdr: {car: {car: l60, cdr: "l60"}, cdr: {car: {car: l59, cdr: "l59"}, cdr: {car: {car: l58, cdr: "l58"}, cdr: {car: {car: l57, cdr: "l57"}, cdr: {car: {car: l56, cdr: "l56"}, cdr: {car: {car: l55, cdr: "l55"}, cdr: {car: {car: l54, cdr: "l54"}, cdr: {car: {car: l53, cdr: "l53"}, cdr: {car: {car: l52, cdr: "l52"}, cdr: {car: {car: l51, cdr: "l51"}, cdr: {car: {car: l50, cdr: "l50"}, cdr: {car: {car: l49, cdr: "l49"}, cdr: {car: {car: l48, cdr: "l48"}, cdr: {car: {car: l47, cdr: "l47"}, cdr: {car: {car: l46, cdr: "l46"}, cdr: {car: {car: l45, cdr: "l45"}, cdr: {car: {car: l44, cdr: "l44"}, cdr: {car: {car: l43, cdr: "l43"}, cdr: {car: {car: l42, cdr: "l42"}, cdr: {car: {car: l41, cdr: "l41"}, cdr: {car: {car: l40, cdr: "l40"}, cdr: {car: {car: l39, cdr: "l39"}, cdr: {car: {car: l38, cdr: "l38"}, cdr: {car: {car: l37, cdr: "l37"}, cdr: {car: {car: l36, cdr: "l36"}, cdr: {car: {car: l35, cdr: "l35"}, cdr: {car: {car: l34, cdr: "l34"}, cdr: {car: {car: l33, cdr: "l33"}, cdr: {car: {car: l32, cdr: "l32"}, cdr: {car: {car: l31, cdr: "l31"}, cdr: {car: {car: l30, cdr: "l30"}, cdr: {car: {car: l29, cdr: "l29"}, cdr: {car: {car: l28, cdr: "l28"}, cdr: {car: {car: l27, cdr: "l27"}, cdr: {car: {car: l26, cdr: "l26"}, cdr: {car: {car: l25, cdr: "l25"}, cdr: {car: {car: l24, cdr: "l24"}, cdr: {car: {car: l23, cdr: "l23"}, cdr: {car: {car: l22, cdr: "l22"}, cdr: {car: {car: l21, cdr: "l21"}, cdr: {car: {car: l20, cdr: "l20"}, cdr: {car: {car: l19, cdr: "l19"}, cdr: {car: {car: l18, cdr: "l18"}, cdr: {car: {car: l17, cdr: "l17"}, cdr: {car: {car: l16, cdr: "l16"}, cdr: {car: {car: l15, cdr: "l15"}, cdr: {car: {car: l14, cdr: "l14"}, cdr: {car: {car: l13, cdr: "l13"}, cdr: {car: {car: l12, cdr: "l12"}, cdr: {car: {car: l11, cdr: "l11"}, cdr: {car: {car: l10, cdr: "l10"}, cdr: {car: {car: l9, cdr: "l9"}, cdr: {car: {car: l8, cdr: "l8"}, cdr: {car: {car: l7, cdr: "l7"}, cdr: {car: {car: l6, cdr: "l6"}, cdr: {car: {car: l5, cdr: "l5"}, cdr: {car: {car: l4, cdr: "l4"}, cdr: {car: {car: l3, cdr: "l3"}, cdr: {car: {car: l2, cdr: "l2"}, cdr: {car: {car: l1, cdr: "l1"}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
var l285 = {name: "BODY"};
var l286 = {name: "CHECK"};
var l287 = {name: "DECLS"};
var l288 = {name: "DECL"};
var l289 = {name: "NAME"};
var l290 = {name: "ARGS"};
var l291 = {name: "ARG"};
var l292 = {name: "FORM"};
var l293 = {name: "PACKAGE-DESIGNATOR"};
var l294 = {name: "FORM1"};
var l295 = {name: "RESULT"};
var l296 = {name: "VALUE"};
var l297 = {name: "FORMS"};
var l298 = {name: "G"};
var l299 = {name: "CLAUSULES"};
var l300 = {name: "!FORM"};
var l301 = {name: "CLAUSULE"};
var l302 = {name: "ITER"};
var l303 = {name: "G!TO"};
var l304 = {name: "VAR"};
var l305 = {name: "TO"};
var l306 = {name: "G!LIST"};
var l307 = {name: "X"};
var l308 = {name: "PLACE"};
var l309 = {name: "DELTA"};
var l310 = {name: "CONDITION"};
var l311 = {name: "DOCSTRING"};
var l312 = {name: "&BODY"};
var l313 = {car: {car: {car: l238, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l230, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l229, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l225, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l210, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l209, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l193, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l190, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l176, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l171, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l170, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l154, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l148, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l121, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l114, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l111, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l110, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l109, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l99, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l14, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l4, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: {car: l187, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l3, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: {car: l187, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: {car: {car: l216, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l281, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l195, cdr: {car: l285, cdr: l3}}, cdr: {car: {car: l150, cdr: {car: {car: l56, cdr: {car: {car: l217, cdr: {car: {car: l205, cdr: {car: l154, cdr: {car: l3, cdr: l3}}}, cdr: {car: {car: l151, cdr: {car: l285, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l49, cdr: {car: {car: l286, cdr: {car: l154, cdr: l3}}, cdr: {car: {car: l267, cdr: {car: l286, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l280, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l129, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l204, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l279, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l278, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l181, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l242, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l241, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l287, cdr: {car: l195, cdr: {car: l285, cdr: l3}}}, cdr: {car: {car: l150, cdr: {car: {car: l130, cdr: {car: {car: l151, cdr: {car: {car: l68, cdr: {car: {car: l203, cdr: {car: {car: l288, cdr: l3}, cdr: {car: {car: l150, cdr: {car: {car: l122, cdr: {car: "var ", cdr: {car: {car: l152, cdr: {car: {car: l40, cdr: {car: l288, cdr: l3}}, cdr: l3}}, cdr: {car: " = ", cdr: {car: {car: l152, cdr: {car: {car: l42, cdr: {car: l288, cdr: l3}}, cdr: l3}}, cdr: {car: ";", cdr: {car: l121, cdr: l3}}}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l287, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: {car: l68, cdr: {car: {car: l203, cdr: {car: {car: l288, cdr: l3}, cdr: {car: {car: l150, cdr: {car: {car: l122, cdr: {car: "if (typeof ", cdr: {car: {car: l152, cdr: {car: {car: l40, cdr: {car: l288, cdr: l3}}, cdr: l3}}, cdr: {car: " != '", cdr: {car: {car: l152, cdr: {car: {car: l41, cdr: {car: l288, cdr: l3}}, cdr: l3}}, cdr: {car: "')", cdr: {car: l121, cdr: {car: {car: l127, cdr: {car: "throw 'The value ' + ", cdr: {car: {car: l152, cdr: {car: {car: l40, cdr: {car: l288, cdr: l3}}, cdr: l3}}, cdr: {car: " + ' is not a type ", cdr: {car: {car: l152, cdr: {car: {car: l41, cdr: {car: l288, cdr: l3}}, cdr: l3}}, cdr: {car: ".';", cdr: {car: l121, cdr: l3}}}}}}}, cdr: l3}}}}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l287, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l122, cdr: {car: "return ", cdr: {car: {car: l217, cdr: {car: {car: l151, cdr: {car: l285, cdr: l3}}, cdr: l3}}, cdr: {car: ";", cdr: {car: l121, cdr: l3}}}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l240, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l289, cdr: {car: l290, cdr: {car: l195, cdr: {car: l285, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: {car: l217, cdr: {car: {car: l239, cdr: {car: {car: l152, cdr: {car: l289, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l290, cdr: l3}}, cdr: {car: {car: l221, cdr: {car: {car: l152, cdr: {car: {car: l68, cdr: {car: {car: l203, cdr: {car: {car: l291, cdr: l3}, cdr: {car: {car: l150, cdr: {car: {car: {car: l152, cdr: {car: l291, cdr: l3}}, cdr: {car: {car: l129, cdr: {car: {car: l152, cdr: {car: l291, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l290, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: l285, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l239, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l289, cdr: {car: l290, cdr: {car: l195, cdr: {car: l285, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: {car: l48, cdr: {car: {car: l44, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: l289, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l203, cdr: {car: {car: l152, cdr: {car: l290, cdr: l3}}, cdr: {car: {car: l166, cdr: {car: {car: l152, cdr: {car: l289, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: l285, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l238, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l292, cdr: l3}, cdr: {car: {car: l236, cdr: {car: l292, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l237, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l236, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l232, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l231, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l223, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l222, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l220, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l219, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l218, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l289, cdr: {car: l290, cdr: {car: l292, cdr: l3}}}, cdr: {car: {car: l150, cdr: {car: {car: l191, cdr: {car: {car: l152, cdr: {car: l289, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l290, cdr: l3}}, cdr: {car: {car: l129, cdr: {car: {car: l152, cdr: {car: l292, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l212, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l211, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l132, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l202, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l201, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l200, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l199, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l198, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l197, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l191, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l289, cdr: {car: l290, cdr: {car: l195, cdr: {car: l285, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: {car: l48, cdr: {car: {car: l44, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: l289, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l203, cdr: {car: {car: l152, cdr: {car: l290, cdr: l3}}, cdr: {car: {car: l166, cdr: {car: {car: l152, cdr: {car: l289, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: l285, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l190, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l184, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l183, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l182, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l180, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l179, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l178, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l177, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l174, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l173, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l172, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l169, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l168, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l165, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l164, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l163, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l162, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l161, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l160, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l159, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l157, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l156, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l155, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l153, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l144, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l147, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l146, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l145, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l143, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l142, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l141, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l140, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l139, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l138, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l137, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l136, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l135, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l134, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l133, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l95, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l131, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l130, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l195, cdr: {car: l285, cdr: l3}}, cdr: {car: {car: l150, cdr: {car: {car: l122, cdr: {car: "(function(){", cdr: {car: l121, cdr: {car: {car: l127, cdr: {car: {car: l151, cdr: {car: l285, cdr: l3}}, cdr: l3}}, cdr: {car: "})()", cdr: l3}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l128, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l16, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l127, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l126, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l125, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l124, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l123, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l98, cdr: {car: l195, cdr: {car: l292, cdr: l3}}}, cdr: {car: {car: l150, cdr: {car: {car: l205, cdr: {car: {car: l152, cdr: {car: l98, cdr: l3}}, cdr: {car: {car: l122, cdr: {car: {car: l152, cdr: {car: l98, cdr: l3}}, cdr: {car: {car: l217, cdr: {car: {car: l151, cdr: {car: l292, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l122, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l120, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l113, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l119, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l118, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l117, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l116, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l115, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l293, cdr: l3}, cdr: {car: {car: l150, cdr: {car: {car: l215, cdr: {car: {car: l205, cdr: {car: l114, cdr: {car: {car: l102, cdr: {car: {car: l152, cdr: {car: l293, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l112, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l108, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l107, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l106, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l105, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l102, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l104, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l103, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l101, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l100, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l96, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l94, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l93, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l92, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l91, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l90, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l89, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l88, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l87, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l86, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l85, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l84, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l83, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l82, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l81, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l80, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l79, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l78, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l77, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l59, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l76, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l75, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l74, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l73, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l72, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l71, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l70, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l69, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l68, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l67, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l66, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l65, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l64, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l63, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l62, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l61, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l60, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l58, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l57, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l294, cdr: {car: l295, cdr: {car: l195, cdr: {car: l285, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: {car: l56, cdr: {car: {car: l217, cdr: {car: {car: l152, cdr: {car: l294, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l295, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l151, cdr: {car: l285, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l56, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l292, cdr: {car: l195, cdr: {car: l285, cdr: l3}}}, cdr: {car: {car: l221, cdr: {car: {car: {car: l296, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l150, cdr: {car: {car: l221, cdr: {car: {car: {car: {car: l152, cdr: {car: l296, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l292, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l151, cdr: {car: l285, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l296, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l55, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l195, cdr: {car: l297, cdr: l3}}, cdr: {car: {car: l51, cdr: {car: {car: {car: l11, cdr: {car: l297, cdr: l3}}, cdr: {car: l3, cdr: l3}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l32, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l31, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l221, cdr: {car: {car: {car: l298, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l150, cdr: {car: {car: l221, cdr: {car: {car: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: {car: l31, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l192, cdr: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: {car: {car: l55, cdr: {car: {car: l151, cdr: {car: {car: l32, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l54, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l195, cdr: {car: l297, cdr: l3}}, cdr: {car: {car: l51, cdr: {car: {car: {car: l11, cdr: {car: l297, cdr: l3}}, cdr: {car: l4, cdr: l3}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l32, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l31, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l150, cdr: {car: {car: l192, cdr: {car: {car: l152, cdr: {car: {car: l31, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l54, cdr: {car: {car: l151, cdr: {car: {car: l32, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l53, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l292, cdr: {car: l195, cdr: {car: l299, cdr: l3}}}, cdr: {car: {car: l150, cdr: {car: {car: l52, cdr: {car: {car: l152, cdr: {car: l292, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: {car: l62, cdr: {car: l299, cdr: {car: {car: l150, cdr: {car: {car: {car: l4, cdr: {car: {car: l270, cdr: {car: "ECASE expression failed.", cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l52, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l292, cdr: {car: l195, cdr: {car: l299, cdr: l3}}}, cdr: {car: {car: l221, cdr: {car: {car: {car: l300, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l150, cdr: {car: {car: l221, cdr: {car: {car: {car: {car: l152, cdr: {car: l300, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l292, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l51, cdr: {car: {car: l151, cdr: {car: {car: l68, cdr: {car: {car: l203, cdr: {car: {car: l301, cdr: l3}, cdr: {car: {car: l192, cdr: {car: {car: l259, cdr: {car: {car: l31, cdr: {car: l301, cdr: l3}}, cdr: {car: l4, cdr: l3}}}, cdr: {car: l301, cdr: {car: {car: l150, cdr: {car: {car: {car: l27, cdr: {car: {car: l152, cdr: {car: l300, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: {car: l31, cdr: {car: l301, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l151, cdr: {car: {car: l32, cdr: {car: l301, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l299, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l51, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l195, cdr: {car: l299, cdr: l3}}, cdr: {car: {car: l192, cdr: {car: {car: l11, cdr: {car: l299, cdr: l3}}, cdr: {car: l3, cdr: {car: {car: l192, cdr: {car: {car: l259, cdr: {car: {car: l33, cdr: {car: l299, cdr: l3}}, cdr: {car: l4, cdr: l3}}}, cdr: {car: {car: l150, cdr: {car: {car: l217, cdr: {car: {car: l151, cdr: {car: {car: l35, cdr: {car: l299, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l150, cdr: {car: {car: l192, cdr: {car: {car: l152, cdr: {car: {car: l33, cdr: {car: l299, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l217, cdr: {car: {car: l151, cdr: {car: {car: l35, cdr: {car: l299, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l51, cdr: {car: {car: l151, cdr: {car: {car: l32, cdr: {car: l299, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l50, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l302, cdr: {car: l195, cdr: {car: l285, cdr: l3}}}, cdr: {car: {car: l221, cdr: {car: {car: {car: l303, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: {car: {car: l304, cdr: {car: {car: l40, cdr: {car: l302, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l305, cdr: {car: {car: l41, cdr: {car: l302, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l295, cdr: {car: {car: l42, cdr: {car: l302, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: {car: l166, cdr: {car: l3, cdr: {car: {car: l221, cdr: {car: {car: {car: {car: l152, cdr: {car: l304, cdr: l3}}, cdr: {car: 0, cdr: l3}}, cdr: {car: {car: {car: l152, cdr: {car: l303, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l305, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l213, cdr: {car: {car: l244, cdr: {car: {car: l152, cdr: {car: l304, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l303, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l233, cdr: {car: {car: l151, cdr: {car: l285, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l46, cdr: {car: {car: l152, cdr: {car: l304, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l152, cdr: {car: l295, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l49, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l302, cdr: {car: l195, cdr: {car: l285, cdr: l3}}}, cdr: {car: {car: l221, cdr: {car: {car: {car: l304, cdr: {car: {car: l40, cdr: {car: l302, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l306, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l150, cdr: {car: {car: l166, cdr: {car: l3, cdr: {car: {car: l221, cdr: {car: {car: {car: {car: l152, cdr: {car: l306, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: {car: l41, cdr: {car: l302, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: {car: l152, cdr: {car: l304, cdr: l3}}, cdr: {car: l3, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l213, cdr: {car: {car: l152, cdr: {car: l306, cdr: l3}}, cdr: {car: {car: l205, cdr: {car: {car: l152, cdr: {car: l304, cdr: l3}}, cdr: {car: {car: l31, cdr: {car: {car: l152, cdr: {car: l306, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l233, cdr: {car: {car: l151, cdr: {car: l285, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l205, cdr: {car: {car: l152, cdr: {car: l306, cdr: l3}}, cdr: {car: {car: l32, cdr: {car: {car: l152, cdr: {car: l306, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}}, cdr: {car: {car: l152, cdr: {car: {car: l42, cdr: {car: l302, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l48, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l307, cdr: {car: l308, cdr: l3}}, cdr: {car: {car: l150, cdr: {car: {car: l205, cdr: {car: {car: l152, cdr: {car: l308, cdr: l3}}, cdr: {car: {car: l29, cdr: {car: {car: l152, cdr: {car: l307, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l308, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l47, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l307, cdr: {car: l194, cdr: {car: {car: l309, cdr: {car: 1, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l150, cdr: {car: {car: l205, cdr: {car: {car: l152, cdr: {car: l307, cdr: l3}}, cdr: {car: {car: l20, cdr: {car: {car: l152, cdr: {car: l307, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l309, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l46, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l307, cdr: {car: l194, cdr: {car: {car: l309, cdr: {car: 1, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l150, cdr: {car: {car: l205, cdr: {car: {car: l152, cdr: {car: l307, cdr: l3}}, cdr: {car: {car: l19, cdr: {car: {car: l152, cdr: {car: l307, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l309, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l45, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l44, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l43, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l42, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l41, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l40, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l39, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l38, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l37, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l36, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l35, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l34, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l33, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l32, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l31, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l30, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l29, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l28, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l27, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l26, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l25, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l24, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l23, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l22, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l21, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l20, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l19, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l18, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l17, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l15, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l13, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l310, cdr: {car: l195, cdr: {car: l285, cdr: l3}}}, cdr: {car: {car: l150, cdr: {car: {car: l166, cdr: {car: l3, cdr: {car: {car: l213, cdr: {car: {car: l152, cdr: {car: l310, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: l285, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l12, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l194, cdr: {car: l296, cdr: l3}}, cdr: {car: {car: l150, cdr: {car: {car: l226, cdr: {car: l3, cdr: {car: {car: l152, cdr: {car: l296, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l11, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l10, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l289, cdr: {car: l290, cdr: {car: l195, cdr: {car: l285, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: {car: l217, cdr: {car: {car: l2, cdr: {car: {car: l188, cdr: {car: {car: l152, cdr: {car: l289, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l255, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: l289, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l9, cdr: {car: {car: l152, cdr: {car: {car: l254, cdr: {car: l289, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l290, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: {car: l192, cdr: {car: {car: l54, cdr: {car: {car: l262, cdr: {car: {car: l31, cdr: {car: l285, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l28, cdr: {car: {car: l11, cdr: {car: {car: l32, cdr: {car: l285, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l150, cdr: {car: {car: {car: l152, cdr: {car: {car: l31, cdr: {car: l285, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l166, cdr: {car: {car: l152, cdr: {car: l289, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: {car: l32, cdr: {car: l285, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l150, cdr: {car: {car: {car: l166, cdr: {car: {car: l152, cdr: {car: l289, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: l285, cdr: l3}}, cdr: l3}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: l289, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l9, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l289, cdr: {car: l290, cdr: {car: l195, cdr: {car: l285, cdr: l3}}}}, cdr: {car: {car: l221, cdr: {car: {car: {car: l307, cdr: {car: {car: l15, cdr: {car: "FN", cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l150, cdr: {car: {car: l221, cdr: {car: {car: {car: {car: l152, cdr: {car: l307, cdr: l3}}, cdr: {car: {car: l203, cdr: {car: {car: l152, cdr: {car: l290, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: l285, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l274, cdr: {car: {car: l152, cdr: {car: l307, cdr: l3}}, cdr: {car: "fname", cdr: {car: {car: l152, cdr: {car: l289, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l152, cdr: {car: l307, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l8, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l289, cdr: {car: l296, cdr: {car: l194, cdr: {car: l311, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: {car: l217, cdr: {car: {car: l205, cdr: {car: {car: l152, cdr: {car: l289, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l296, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l151, cdr: {car: {car: l5, cdr: {car: {car: l262, cdr: {car: l311, cdr: l3}}, cdr: {car: {car: l150, cdr: {car: {car: {car: l274, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: l289, cdr: l3}}, cdr: l3}}, cdr: {car: "vardoc", cdr: {car: {car: l152, cdr: {car: l311, cdr: l3}}, cdr: l3}}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: l289, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l7, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l289, cdr: {car: l296, cdr: {car: l194, cdr: {car: l311, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: {car: l217, cdr: {car: {car: l2, cdr: {car: {car: l185, cdr: {car: {car: l152, cdr: {car: l289, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l6, cdr: {car: {car: l17, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: l289, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l205, cdr: {car: {car: l152, cdr: {car: l289, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l296, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: {car: l151, cdr: {car: {car: l5, cdr: {car: {car: l262, cdr: {car: l311, cdr: l3}}, cdr: {car: {car: l150, cdr: {car: {car: {car: l274, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: l289, cdr: l3}}, cdr: l3}}, cdr: {car: "vardoc", cdr: {car: {car: l152, cdr: {car: l311, cdr: l3}}, cdr: l3}}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: l289, cdr: l3}}, cdr: l3}}, cdr: l3}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l6, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l310, cdr: {car: l195, cdr: {car: l285, cdr: l3}}}, cdr: {car: {car: l150, cdr: {car: {car: l192, cdr: {car: {car: l152, cdr: {car: l310, cdr: l3}}, cdr: {car: l3, cdr: {car: {car: l217, cdr: {car: {car: l151, cdr: {car: l285, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l5, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l310, cdr: {car: l195, cdr: {car: l285, cdr: l3}}}, cdr: {car: {car: l150, cdr: {car: {car: l192, cdr: {car: {car: l152, cdr: {car: l310, cdr: l3}}, cdr: {car: {car: l217, cdr: {car: {car: l151, cdr: {car: l285, cdr: l3}}, cdr: l3}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l2, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l195, cdr: {car: l287, cdr: l3}}, cdr: {car: {car: l150, cdr: {car: {car: l215, cdr: {car: {car: l151, cdr: {car: {car: l68, cdr: {car: {car: l203, cdr: {car: {car: l288, cdr: l3}, cdr: {car: {car: l150, cdr: {car: {car: l184, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: l288, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l287, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l1, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l289, cdr: {car: l290, cdr: {car: l195, cdr: {car: l285, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: {car: l215, cdr: {car: {car: l180, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: l289, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: {car: l203, cdr: {car: {car: l152, cdr: {car: {car: l68, cdr: {car: {car: l203, cdr: {car: {car: l307, cdr: l3}, cdr: {car: {car: l192, cdr: {car: {car: l259, cdr: {car: l307, cdr: {car: {car: l149, cdr: {car: l312, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l149, cdr: {car: l195, cdr: l3}}, cdr: {car: l307, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l290, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: l285, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: l3, cdr: {car: l3, cdr: l3}}}};
(function(){
    l116.function(l282);
    l116.function(l281);
    l116.function(l280);
    l116.function(l279);
    l116.function(l278);
    l116.function(l277);
    l116.function(l276);
    l116.function(l275);
    l116.function(l274);
    l116.function(l273);
    l116.function(l272);
    l116.function(l271);
    l116.function(l270);
    l116.function(l269);
    l116.function(l268);
    l116.function(l267);
    l116.function(l266);
    l116.function(l265);
    l116.function(l264);
    l116.function(l263);
    l116.function(l262);
    l116.function(l261);
    l116.function(l260);
    l116.function(l259);
    l116.function(l258);
    l116.function(l257);
    l116.function(l256);
    l116.function(l255);
    l116.function(l254);
    l116.function(l253);
    l116.function(l252);
    l116.function(l251);
    l116.function(l250);
    l116.function(l249);
    l116.function(l248);
    l116.function(l247);
    l116.function(l246);
    l116.function(l245);
    l116.function(l244);
    l116.function(l243);
    l116.function(l242);
    l116.function(l241);
    l116.function(l240);
    l116.function(l239);
    l116.function(l238);
    l116.function(l237);
    l116.function(l236);
    l116.function(l235);
    l116.function(l234);
    l116.function(l233);
    l116.function(l232);
    l116.function(l231);
    l116.function(l230);
    l116.function(l229);
    l116.function(l228);
    l116.function(l227);
    l116.function(l226);
    l116.function(l225);
    l116.function(l224);
    l116.function(l223);
    l116.function(l222);
    l116.function(l221);
    l116.function(l220);
    l116.function(l219);
    l116.function(l218);
    l116.function(l217);
    l116.function(l216);
    l116.function(l215);
    l116.function(l214);
    l116.function(l213);
    l116.function(l212);
    l116.function(l211);
    l116.function(l210);
    l116.function(l209);
    l116.function(l208);
    l116.function(l207);
    l116.function(l206);
    l116.function(l205);
    l116.function(l204);
    l116.function(l203);
    l116.function(l202);
    l116.function(l201);
    l116.function(l200);
    l116.function(l199);
    l116.function(l198);
    l116.function(l197);
    l116.function(l195);
    l116.function(l194);
    l116.function(l193);
    l116.function(l192);
    l116.function(l191);
    l116.function(l190);
    l116.function(l189);
    l116.function(l188);
    l116.function(l187);
    l116.function(l186);
    l116.function(l185);
    l116.function(l184);
    l116.function(l183);
    l116.function(l182);
    l116.function(l181);
    l116.function(l180);
    l116.function(l179);
    l116.function(l178);
    l116.function(l177);
    l116.function(l176);
    l116.function(l175);
    l116.function(l174);
    l116.function(l173);
    l116.function(l172);
    l116.function(l171);
    l116.function(l170);
    l116.function(l169);
    l116.function(l168);
    l116.function(l167);
    l116.function(l166);
    l116.function(l165);
    l116.function(l164);
    l116.function(l163);
    l116.function(l162);
    l116.function(l161);
    l116.function(l160);
    l116.function(l159);
    l116.function(l158);
    l116.function(l157);
    l116.function(l156);
    l116.function(l155);
    l116.function(l154);
    l116.function(l153);
    l116.function(l152);
    l116.function(l151);
    l116.function(l150);
    l116.function(l149);
    l116.function(l148);
    l116.function(l147);
    l116.function(l146);
    l116.function(l145);
    l116.function(l144);
    l116.function(l143);
    l116.function(l142);
    l116.function(l141);
    l116.function(l140);
    l116.function(l139);
    l116.function(l138);
    l116.function(l137);
    l116.function(l136);
    l116.function(l135);
    l116.function(l134);
    l116.function(l133);
    l116.function(l132);
    l116.function(l131);
    l116.function(l130);
    l116.function(l129);
    l116.function(l128);
    l116.function(l127);
    l116.function(l126);
    l116.function(l125);
    l116.function(l124);
    l116.function(l123);
    l116.function(l122);
    l116.function(l121);
    l116.function(l120);
    l116.function(l119);
    l116.function(l118);
    l116.function(l117);
    l116.function(l116);
    l116.function(l115);
    l116.function(l114);
    l116.function(l113);
    l116.function(l112);
    l116.function(l111);
    l116.function(l110);
    l116.function(l109);
    l116.function(l108);
    l116.function(l107);
    l116.function(l106);
    l116.function(l105);
    l116.function(l104);
    l116.function(l103);
    l116.function(l102);
    l116.function(l101);
    l116.function(l100);
    l116.function(l99);
    l116.function(l98);
    l116.function(l97);
    l116.function(l96);
    l116.function(l95);
    l116.function(l94);
    l116.function(l93);
    l116.function(l92);
    l116.function(l91);
    l116.function(l90);
    l116.function(l89);
    l116.function(l88);
    l116.function(l87);
    l116.function(l86);
    l116.function(l85);
    l116.function(l84);
    l116.function(l83);
    l116.function(l82);
    l116.function(l81);
    l116.function(l80);
    l116.function(l79);
    l116.function(l78);
    l116.function(l77);
    l116.function(l76);
    l116.function(l75);
    l116.function(l74);
    l116.function(l73);
    l116.function(l72);
    l116.function(l71);
    l116.function(l70);
    l116.function(l69);
    l116.function(l68);
    l116.function(l67);
    l116.function(l66);
    l116.function(l65);
    l116.function(l64);
    l116.function(l63);
    l116.function(l62);
    l116.function(l61);
    l116.function(l60);
    l116.function(l59);
    l116.function(l58);
    l116.function(l57);
    l116.function(l56);
    l116.function(l55);
    l116.function(l54);
    l116.function(l53);
    l116.function(l52);
    l116.function(l51);
    l116.function(l50);
    l116.function(l49);
    l116.function(l48);
    l116.function(l47);
    l116.function(l46);
    l116.function(l45);
    l116.function(l44);
    l116.function(l43);
    l116.function(l42);
    l116.function(l41);
    l116.function(l40);
    l116.function(l39);
    l116.function(l38);
    l116.function(l37);
    l116.function(l36);
    l116.function(l35);
    l116.function(l34);
    l116.function(l33);
    l116.function(l32);
    l116.function(l31);
    l116.function(l30);
    l116.function(l29);
    l116.function(l28);
    l116.function(l27);
    l116.function(l26);
    l116.function(l25);
    l116.function(l24);
    l116.function(l23);
    l116.function(l22);
    l116.function(l21);
    l116.function(l20);
    l116.function(l19);
    l116.function(l18);
    l116.function(l17);
    l116.function(l16);
    l116.function(l15);
    l116.function(l14);
    l116.function(l13);
    l116.function(l12);
    l116.function(l11);
    l116.function(l10);
    l116.function(l9);
    l116.function(l8);
    l116.function(l7);
    l116.function(l6);
    l116.function(l5);
    l116.function(l4);
    l116.function(l3);
    l116.function(l2);
    l116.function(l1);
    (l209).value = l284;
    (l170).value = l313;
    (l171).value = 742;
    (l14).value = 195;
    return (l225).value = 257;
})();
(l210).value = 313;
