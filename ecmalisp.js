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
(function(){
    (l100).function = (function(v184){
        ((v184)["fname"] = "MAKE-PACKAGE");
        return v184;
    })((function (v182){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v183){
                        ((v183)["packageName"] = v182);
                        ((v183)["symbols"] = {});
                        (l99).value = ({car: v183, cdr: (function(){
                            var symbol = l99;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()});
                        return v183;
                    })({});
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
var l101 = {name: "PACKAGEP"};
(function(){
    (l101).function = (function(v186){
        ((v186)["fname"] = "PACKAGEP");
        return v186;
    })((function (v185){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof (v185) === 'object')?l4.value: l3.value) !== l3.value ? ((("symbols") in (v185))?l4.value: l3.value) : l3.value);
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
var l102 = {name: "FIND-PACKAGE"};
var l103 = {name: "PACKAGE-NAME"};
(function(){
    (l102).function = (function(v191){
        ((v191)["fname"] = "FIND-PACKAGE");
        return v191;
    })((function (v187){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (l101.function(v187) !== l3.value ? (function(){
                        return (function(){
                            throw ({type: 'block', id: 83, value: v187, message: 'Return from unknown block FIND-PACKAGE.'})
                        })();
                    })() : l3.value);
                    return (function(v188){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v189,v190){
                                        (function(){
                                            while(v189 !== l3.value){
                                                v190 = (function(){
                                                    var tmp = v189;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    (l92.function((function(){
                                                        var symbol = l103;
                                                        var func = symbol.function;
                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                        return func;
                                                    })()(v190), v188) !== l3.value ? (function(){
                                                        return (function(){
                                                            throw ({type: 'block', id: 84, value: v190, message: 'Return from unknown block NIL.'})
                                                        })();
                                                    })() : l3.value);
                                                    return l3.value;
                                                })();
                                                v189 = (function(){
                                                    var tmp = v189;
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
                    })(l91.function(v187));
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
    return l102;
})();
var l104 = {name: "FIND-PACKAGE-OR-FAIL"};
(function(){
    (l104).function = (function(v194){
        ((v194)["fname"] = "FIND-PACKAGE-OR-FAIL");
        return v194;
    })((function (v192){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v193){
                        return (v193 !== l3.value ? v193 : (function(){
                            throw "Package unknown.";
                        })());
                    })(l102.function(v192));
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
(function(){
    (l103).function = (function(v197){
        ((v197)["fname"] = "PACKAGE-NAME");
        return v197;
    })((function (v195){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v196){
                        return (function(){
                            var tmp = (v196)["packageName"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
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
    return l103;
})();
var l105 = {name: "%PACKAGE-SYMBOLS"};
(function(){
    (l105).function = (function(v200){
        ((v200)["fname"] = "%PACKAGE-SYMBOLS");
        return v200;
    })((function (v198){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v199){
                        return (function(){
                            var tmp = (v199)["symbols"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })(l104.function(v198));
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
var l106 = {name: "*PACKAGE*"};
(function(){
    (((l106.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l106).value = l100.function("CL");
    })());
    return l106;
})();
var l107 = {name: "%INTERN-SYMBOL"};
(function(){
    (l107).function = (function(v203){
        ((v203)["fname"] = "%INTERN-SYMBOL");
        return v203;
    })((function (v201){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v202){
                        ((v201)["package"] = (function(){
                            var symbol = l106;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                        return ((v202)[(v201).name] = v201);
                    })(l105.function((function(){
                        var symbol = l106;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
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
    return l107;
})();
var l108 = {name: "INTERN"};
(function(){
    (l108).function = (function(v208){
        ((v208)["fname"] = "INTERN");
        return v208;
    })((function (v204,v205){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v205=(function(){
            var symbol = l106;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (function(v206){
                        return ((((v204) in (v206))?l4.value: l3.value) !== l3.value ? (function(){
                            var tmp = (v206)[v204];
                            return tmp == undefined? l3.value: tmp ;
                        })() : (function(v207){
                            ((v207)["package"] = v205);
                            return ((v206)[v204] = v207);
                        })((function(){
                            var name = v204;
                            if (typeof name != 'string')
                                throw 'The value ' + name + ' is not a type string.';
                            return ({name: name});
                        })()));
                    })(l105.function(v205));
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
    return l108;
})();
var l109 = {name: "FIND-SYMBOL"};
(function(){
    (l109).function = (function(v212){
        ((v212)["fname"] = "FIND-SYMBOL");
        return v212;
    })((function (v209,v210){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v210=(function(){
            var symbol = l106;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (function(v211){
                        return (function(){
                            var tmp = ((function(){
                                var symbol = l106;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })())[v209];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })(l105.function(v210));
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
    return l109;
})();
var l110 = {name: "SYMBOL-PACKAGE"};
(function(){
    (l110).function = (function(v214){
        ((v214)["fname"] = "SYMBOL-PACKAGE");
        return v214;
    })((function (v213){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (((function(){
                        var tmp = v213;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? l3.value : (function(){
                        return (function(){
                            throw "it is not a symbol";
                        })();
                    })());
                    return (function(){
                        var tmp = (v213)["package"];
                        return tmp == undefined? l3.value: tmp ;
                    })();
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
    return l110;
})();
var l111 = {name: "*NEWLINE*"};
(function(){
    (((l111.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l111).value = l91.function(l71.function(10));
    })());
    return l111;
})();
var l112 = {name: "CONCAT"};
(function(){
    (l112).function = (function(v216){
        ((v216)["fname"] = "CONCAT");
        return v216;
    })((function (){
        var v215= l3.value;
        for (var i = arguments.length-1; i>=0; i--)
            v215 = {car: arguments[i], cdr: 
        v215};
        return (function(){
            try {
                return (function(){
                    return l60.function((function(){
                        var symbol = l67;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v215, "");
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
var l113 = {name: "CONCATF"};
l113;
var l114 = {name: "JOIN"};
(function(){
    (l114).function = (function(v219){
        ((v219)["fname"] = "JOIN");
        return v219;
    })((function (v217,v218){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v218="";
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (l11.function(v217) !== l3.value ? (function(){
                        return "";
                    })() : (l11.function((function(){
                        var tmp = v217;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()) !== l3.value ? (function(){
                        return (function(){
                            var tmp = v217;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })() : (function(){
                        return l112.function((function(){
                            var tmp = v217;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), v218, l114.function((function(){
                            var tmp = v217;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), v218));
                    })()));
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
var l115 = {name: "JOIN-TRAILING"};
(function(){
    (l115).function = (function(v222){
        ((v222)["fname"] = "JOIN-TRAILING");
        return v222;
    })((function (v220,v221){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v221="";
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (l11.function(v220) !== l3.value ? "" : l112.function((function(){
                        var tmp = v220;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), v221, l115.function((function(){
                        var tmp = v220;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })(), v221)));
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
var l116 = {name: "MAPCONCAT"};
(function(){
    (l116).function = (function(v225){
        ((v225)["fname"] = "MAPCONCAT");
        return v225;
    })((function (v223,v224){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l114.function(l68.function(v223, v224));
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
var l117 = {name: "INDENT"};
(function(){
    (l117).function = (function(v232){
        ((v232)["fname"] = "INDENT");
        return v232;
    })((function (){
        var v226= l3.value;
        for (var i = arguments.length-1; i>=0; i--)
            v226 = {car: arguments[i], cdr: 
        v226};
        return (function(){
            try {
                return (function(){
                    return (function(v227){
                        return (function(v228,v229,v230){
                            (l75.function(l66.function(v227)) !== l3.value ? (function(){
                                return v228 = l112.function(v228, (function(){
                                    return "    ";
                                })());
                            })() : l3.value);
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(((function(){
                                                var x = v229;
                                                var y = v230;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                if (typeof y != 'number')
                                                    throw 'The value ' + y + ' is not a type number.';
                                                return x<y;
                                            })()?l4.value: l3.value) !== l3.value){
                                                (function(v231){
                                                    return v228 = l112.function(v228, (function(){
                                                        return v231;
                                                    })());
                                                })(((l73.function((function(){
                                                    var string = v227;
                                                    var index = v229;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })(), 10) !== l3.value ? (((function(){
                                                    var x = v229;
                                                    var y = l24.function(v230);
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x<y;
                                                })()?l4.value: l3.value) !== l3.value ? l28.function(l73.function((function(){
                                                    var string = v227;
                                                    var index = l23.function(v229);
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })(), 10)) : l3.value) : l3.value) !== l3.value ? l112.function(l91.function(10), "    ") : l91.function((function(){
                                                    var string = v227;
                                                    var index = v229;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })())));
                                                v229 = (function(){
                                                    var x = v229;
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
                                    if (cf.type == 'block' && cf.id == 97)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return v228;
                        })("",0,l66.function(v227));
                    })(l114.function(v226));
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
(function(){
    (l16).function = (function(v236){
        ((v236)["fname"] = "INTEGER-TO-STRING");
        return v236;
    })((function (v233){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l25.function(v233) !== l3.value ? (function(){
                        return "0";
                    })() : (l76.function(v233) !== l3.value ? (function(){
                        return l112.function("-", l16.function((function(){
                            var x = 0;
                            var y = v233;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x-y;
                        })()));
                    })() : (function(){
                        return (function(v234){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(l28.function(l25.function(v233)) !== l3.value){
                                                v234 = ({car: (function(){
                                                    var x = v233;
                                                    var y = 10;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x%y;
                                                })(), cdr: v234});
                                                v233 = l26.function(v233, 10);
                                            }return l3.value;
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
                            return l114.function(l68.function((function (v235){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return l91.function((function(){
                                    var string = "0123456789";
                                    var index = v235;
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    if (typeof index != 'number')
                                        throw 'The value ' + index + ' is not a type number.';
                                    return string.charCodeAt(index);
                                })());
                            
                            }), v234));
                        })(l3.value);
                    })()));
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
    return l16;
})();
var l118 = {name: "JS!BOOL"};
var l119 = {name: "LS-COMPILE"};
(function(){
    (l118).function = (function(v238){
        ((v238)["fname"] = "JS!BOOL");
        return v238;
    })((function (v237){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l112.function("(", v237, "?", (function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l4.value), ": ", (function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l3.value), ")");
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
    return l118;
})();
var l120 = {name: "JS!SELFCALL"};
l120;
var l121 = {name: "PRIN1-TO-STRING"};
var l122 = {name: "ESCAPE-STRING"};
(function(){
    (l121).function = (function(v242){
        ((v242)["fname"] = "PRIN1-TO-STRING");
        return v242;
    })((function (v239){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v239;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (v239).name;
                    })() : (l74.function(v239) !== l3.value ? (function(){
                        return l16.function(v239);
                    })() : (((typeof(v239) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l112.function("\"", (function(){
                            var symbol = l122;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v239), "\"");
                    })() : (((typeof v239 == 'function')?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v240){
                            return (v240 !== l3.value ? l112.function("#<FUNCTION ", v240, ">") : l112.function("#<FUNCTION>"));
                        })((function(){
                            var tmp = (v239)["fname"];
                            return tmp == undefined? l3.value: tmp ;
                        })());
                    })() : (l59.function(v239) !== l3.value ? (function(){
                        return l112.function("(", l115.function(l68.function((function(){
                            var symbol = l121;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l80.function(v239)), " "), (function(v241){
                            return (l11.function((function(){
                                var tmp = v241;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })()) !== l3.value ? l121.function((function(){
                                var tmp = v241;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()) : l112.function(l121.function((function(){
                                var tmp = v241;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()), " . ", l121.function((function(){
                                var tmp = v241;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })())));
                        })(l79.function(v239)), ")");
                    })() : (l101.function(v239) !== l3.value ? (function(){
                        return l112.function("#<PACKAGE ", l103.function(v239), ">");
                    })() : l3.value))))));
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
    return l121;
})();
(function(){
    (l95).function = (function(v244){
        ((v244)["fname"] = "WRITE-LINE");
        return v244;
    })((function (v243){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var x = v243;
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return lisp.write(x);
                    })();
                    (function(){
                        var x = (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })();
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return lisp.write(x);
                    })();
                    return v243;
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
    return l95;
})();
var l123 = {name: "WARN"};
(function(){
    (l123).function = (function(v246){
        ((v246)["fname"] = "WARN");
        return v246;
    })((function (v245){
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
                    return l95.function(v245);
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
    return l123;
})();
var l124 = {name: "PRINT"};
(function(){
    (l124).function = (function(v248){
        ((v248)["fname"] = "PRINT");
        return v248;
    })((function (v247){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l95.function(l121.function(v247));
                    return v247;
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
    return l124;
})();
var l125 = {name: "MAKE-STRING-STREAM"};
(function(){
    (l125).function = (function(v250){
        ((v250)["fname"] = "MAKE-STRING-STREAM");
        return v250;
    })((function (v249){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ({car: v249, cdr: 0});
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
    return l125;
})();
var l126 = {name: "%PEEK-CHAR"};
(function(){
    (l126).function = (function(v252){
        ((v252)["fname"] = "%PEEK-CHAR");
        return v252;
    })((function (v251){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var x = (function(){
                            var tmp = v251;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        var y = l66.function((function(){
                            var tmp = v251;
                            return tmp === l3.value? l3.value: tmp.car;
                        })());
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x<y;
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        var string = (function(){
                            var tmp = v251;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        var index = (function(){
                            var tmp = v251;
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
                if (cf.type == 'block' && cf.id == 106)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l126;
})();
var l127 = {name: "%READ-CHAR"};
(function(){
    (l127).function = (function(v255){
        ((v255)["fname"] = "%READ-CHAR");
        return v255;
    })((function (v253){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var x = (function(){
                            var tmp = v253;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        var y = l66.function((function(){
                            var tmp = v253;
                            return tmp === l3.value? l3.value: tmp.car;
                        })());
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x<y;
                    })()?l4.value: l3.value) !== l3.value ? (function(v254){
                        (function(){
                            var x = v253;
                            if (typeof x != 'object')
                                throw 'The value ' + x + ' is not a type object.';
                            return (x.cdr = l23.function((function(){
                                var tmp = v253;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })()));
                        })();
                        return v254;
                    })((function(){
                        var string = (function(){
                            var tmp = v253;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        var index = (function(){
                            var tmp = v253;
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
                if (cf.type == 'block' && cf.id == 107)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l127;
})();
var l128 = {name: "WHITESPACEP"};
(function(){
    (l128).function = (function(v259){
        ((v259)["fname"] = "WHITESPACEP");
        return v259;
    })((function (v256){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v257){
                        return (v257 !== l3.value ? v257 : (function(v258){
                            return (v258 !== l3.value ? v258 : l73.function(v256, 9));
                        })(l73.function(v256, 10)));
                    })(l73.function(v256, 32));
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
var l129 = {name: "SKIP-WHITESPACES"};
(function(){
    (l129).function = (function(v262){
        ((v262)["fname"] = "SKIP-WHITESPACES");
        return v262;
    })((function (v260){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v261){
                        v261 = l126.function(v260);
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v261 !== l3.value ? l128.function(v261) : l3.value) !== l3.value){
                                            l127.function(v260);
                                            v261 = l126.function(v260);
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 110)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l3.value);
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
    return l129;
})();
var l130 = {name: "TERMINALP"};
(function(){
    (l130).function = (function(v267){
        ((v267)["fname"] = "TERMINALP");
        return v267;
    })((function (v263){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v264){
                        return (v264 !== l3.value ? v264 : (function(v265){
                            return (v265 !== l3.value ? v265 : (function(v266){
                                return (v266 !== l3.value ? v266 : l73.function(40, v263));
                            })(l73.function(41, v263)));
                        })(l128.function(v263)));
                    })(l11.function(v263));
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
    return l130;
})();
var l131 = {name: "READ-UNTIL"};
(function(){
    (l131).function = (function(v272){
        ((v272)["fname"] = "READ-UNTIL");
        return v272;
    })((function (v268,v269){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v270,v271){
                        v271 = l126.function(v268);
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v271 !== l3.value ? l28.function((v269)(v271)) : l3.value) !== l3.value){
                                            v270 = l112.function(v270, l91.function(v271));
                                            l127.function(v268);
                                            v271 = l126.function(v268);
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 113)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v270;
                    })("",l3.value);
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
    return l131;
})();
var l132 = {name: "SKIP-WHITESPACES-AND-COMMENTS"};
(function(){
    (l132).function = (function(v276){
        ((v276)["fname"] = "SKIP-WHITESPACES-AND-COMMENTS");
        return v276;
    })((function (v273){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v274){
                        l129.function(v273);
                        v274 = l126.function(v273);
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v274 !== l3.value ? l73.function(v274, 59) : l3.value) !== l3.value){
                                            l131.function(v273, (function (v275){
                                                if (arguments.length < 1) throw 'too few arguments';
                                                if (arguments.length > 1) throw 'too many arguments';
                                                return l73.function(v275, 10);
                                            
                                            }));
                                            l129.function(v273);
                                            v274 = l126.function(v273);
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 115)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l3.value);
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
    return l132;
})();
var l133 = {name: "%READ-LIST"};
var l134 = {name: "LS-READ"};
(function(){
    (l133).function = (function(v280){
        ((v280)["fname"] = "%READ-LIST");
        return v280;
    })((function (v277){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l132.function(v277);
                    return (function(v278){
                        return (l11.function(v278) !== l3.value ? (function(){
                            return (function(){
                                throw "Unspected EOF";
                            })();
                        })() : (l73.function(v278, 41) !== l3.value ? (function(){
                            l127.function(v277);
                            return l3.value;
                        })() : (l73.function(v278, 46) !== l3.value ? (function(){
                            l127.function(v277);
                            return (function(v279){
                                l132.function(v277);
                                (l73.function(l127.function(v277), 41) !== l3.value ? l3.value : (function(){
                                    return (function(){
                                        throw "')' was expected.";
                                    })();
                                })());
                                return v279;
                            })((function(){
                                var symbol = l134;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v277));
                        })() : (function(){
                            return ({car: (function(){
                                var symbol = l134;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v277), cdr: l133.function(v277)});
                        })())));
                    })(l126.function(v277));
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
    return l133;
})();
var l135 = {name: "READ-STRING"};
(function(){
    (l135).function = (function(v284){
        ((v284)["fname"] = "READ-STRING");
        return v284;
    })((function (v281){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v282,v283){
                        v283 = l127.function(v281);
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(l28.function(l27.function(v283, 34)) !== l3.value){
                                            (l11.function(v283) !== l3.value ? (function(){
                                                return (function(){
                                                    throw "Unexpected EOF";
                                                })();
                                            })() : l3.value);
                                            (l27.function(v283, 92) !== l3.value ? (function(){
                                                return v283 = l127.function(v281);
                                            })() : l3.value);
                                            v282 = l112.function(v282, l91.function(v283));
                                            v283 = l127.function(v281);
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
                        return v282;
                    })("",l3.value);
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
    return l135;
})();
var l136 = {name: "READ-SHARP"};
(function(){
    (l136).function = (function(v289){
        ((v289)["fname"] = "READ-SHARP");
        return v289;
    })((function (v285){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l127.function(v285);
                    return (function(v286){
                        return (l27.function(v286, 39) !== l3.value ? (function(){
                            return l44.function(l97, (function(){
                                var symbol = l134;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v285));
                        })() : (l27.function(v286, 92) !== l3.value ? (function(){
                            return (function(v287){
                                return (l92.function(v287, "space") !== l3.value ? (function(){
                                    return l72.function(32);
                                })() : (l92.function(v287, "tab") !== l3.value ? (function(){
                                    return l72.function(9);
                                })() : (l92.function(v287, "newline") !== l3.value ? (function(){
                                    return l72.function(10);
                                })() : (function(){
                                    return l72.function((function(){
                                        var string = v287;
                                        var index = 0;
                                        if (typeof string != 'string')
                                            throw 'The value ' + string + ' is not a type string.';
                                        if (typeof index != 'number')
                                            throw 'The value ' + index + ' is not a type number.';
                                        return string.charCodeAt(index);
                                    })());
                                })())));
                            })(l112.function(l91.function(l127.function(v285)), l131.function(v285, (function(){
                                var symbol = l130;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })())));
                        })() : (l27.function(v286, 43) !== l3.value ? (function(){
                            return (function(v288){
                                return (l92.function(v288, "common-lisp") !== l3.value ? (function(){
                                    (function(){
                                        var symbol = l134;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v285);
                                    return (function(){
                                        var symbol = l134;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v285);
                                })() : (l92.function(v288, "ecmalisp") !== l3.value ? (function(){
                                    return (function(){
                                        var symbol = l134;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v285);
                                })() : (function(){
                                    return (function(){
                                        throw "Unknown reader form.";
                                    })();
                                })()));
                            })(l131.function(v285, (function(){
                                var symbol = l130;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()));
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })())));
                    })(l127.function(v285));
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
    return l136;
})();
var l137 = {name: "*EOF*"};
(function(){
    (((l137.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l137).value = (function(){
            var name = "EOF";
            if (typeof name != 'string')
                throw 'The value ' + name + ' is not a type string.';
            return ({name: name});
        })();
    })());
    return l137;
})();
var l138 = {name: "QUOTE"};
var l139 = {name: "BACKQUOTE"};
var l140 = {name: "UNQUOTE-SPLICING"};
var l141 = {name: "UNQUOTE"};
(function(){
    (l134).function = (function(v293){
        ((v293)["fname"] = "LS-READ");
        return v293;
    })((function (v290){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l132.function(v290);
                    return (function(v291){
                        return (l11.function(v291) !== l3.value ? (function(){
                            return (function(){
                                var symbol = l137;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })();
                        })() : (l73.function(v291, 40) !== l3.value ? (function(){
                            l127.function(v290);
                            return l133.function(v290);
                        })() : (l73.function(v291, 39) !== l3.value ? (function(){
                            l127.function(v290);
                            return l44.function(l138, l134.function(v290));
                        })() : (l73.function(v291, 96) !== l3.value ? (function(){
                            l127.function(v290);
                            return l44.function(l139, l134.function(v290));
                        })() : (l73.function(v291, 34) !== l3.value ? (function(){
                            l127.function(v290);
                            return l135.function(v290);
                        })() : (l73.function(v291, 44) !== l3.value ? (function(){
                            l127.function(v290);
                            return (l27.function(l126.function(v290), 64) !== l3.value ? (function(){
                                l127.function(v290);
                                return l44.function(l140, l134.function(v290));
                            })() : l44.function(l141, l134.function(v290)));
                        })() : (l73.function(v291, 35) !== l3.value ? (function(){
                            return l136.function(v290);
                        })() : (function(){
                            return (function(v292){
                                return (l89.function((function(){
                                    var symbol = l85;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })(), v292) !== l3.value ? l87.function(v292) : l108.function((function(){
                                    var x = v292;
                                    if (typeof x != 'string')
                                        throw 'The value ' + x + ' is not a type string.';
                                    return x.toUpperCase();
                                })()));
                            })(l131.function(v290, (function(){
                                var symbol = l130;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()));
                        })())))))));
                    })(l126.function(v290));
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
    return l134;
})();
var l142 = {name: "LS-READ-FROM-STRING"};
(function(){
    (l142).function = (function(v295){
        ((v295)["fname"] = "LS-READ-FROM-STRING");
        return v295;
    })((function (v294){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l134.function(l125.function(v294));
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
var l143 = {name: "*COMPILATION-UNIT-CHECKS*"};
(function(){
    (((l143.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l143).value = l3;
    })());
    return l143;
})();
var l144 = {name: "MAKE-BINDING"};
(function(){
    (l144).function = (function(v300){
        ((v300)["fname"] = "MAKE-BINDING");
        return v300;
    })((function (v296,v297,v298,v299){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 4) throw 'too many arguments';
        switch(arguments.length){
        case 3:
        v299=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return l44.function(v296, v297, v298, v299);
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
var l145 = {name: "BINDING-NAME"};
(function(){
    (l145).function = (function(v302){
        ((v302)["fname"] = "BINDING-NAME");
        return v302;
    })((function (v301){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l40.function(v301);
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
var l146 = {name: "BINDING-TYPE"};
(function(){
    (l146).function = (function(v304){
        ((v304)["fname"] = "BINDING-TYPE");
        return v304;
    })((function (v303){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l41.function(v303);
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
    return l146;
})();
var l147 = {name: "BINDING-VALUE"};
(function(){
    (l147).function = (function(v306){
        ((v306)["fname"] = "BINDING-VALUE");
        return v306;
    })((function (v305){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l42.function(v305);
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
    return l147;
})();
var l148 = {name: "BINDING-DECLARATIONS"};
(function(){
    (l148).function = (function(v308){
        ((v308)["fname"] = "BINDING-DECLARATIONS");
        return v308;
    })((function (v307){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l43.function(v307);
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
    return l148;
})();
var l149 = {name: "SET-BINDING-VALUE"};
(function(){
    (l149).function = (function(v311){
        ((v311)["fname"] = "SET-BINDING-VALUE");
        return v311;
    })((function (v309,v310){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = l36.function(v309);
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = v310);
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
    
    }));
    return l149;
})();
var l150 = {name: "SET-BINDING-DECLARATIONS"};
(function(){
    (l150).function = (function(v314){
        ((v314)["fname"] = "SET-BINDING-DECLARATIONS");
        return v314;
    })((function (v312,v313){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = l38.function(v312);
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = v313);
                    })();
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
    return l150;
})();
var l151 = {name: "PUSH-BINDING-DECLARATION"};
(function(){
    (l151).function = (function(v317){
        ((v317)["fname"] = "PUSH-BINDING-DECLARATION");
        return v317;
    })((function (v315,v316){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l150.function(v316, ({car: v315, cdr: l148.function(v316)}));
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
    return l151;
})();
var l152 = {name: "MAKE-LEXENV"};
(function(){
    (l152).function = (function(v318){
        ((v318)["fname"] = "MAKE-LEXENV");
        return v318;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l44.function(l3.value, l3.value, l3.value, l3.value);
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
var l153 = {name: "COPY-LEXENV"};
(function(){
    (l153).function = (function(v320){
        ((v320)["fname"] = "COPY-LEXENV");
        return v320;
    })((function (v319){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l70.function(v319);
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
var l154 = {name: "PUSH-TO-LEXENV"};
var l155 = {name: "BLOCK"};
var l156 = {name: "GOTAG"};
(function(){
    (l154).function = (function(v325){
        ((v325)["fname"] = "PUSH-TO-LEXENV");
        return v325;
    })((function (v321,v322,v323){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v324){
                        return (l27.function(v324, l98) !== l3.value ? (function(){
                            return (function(){
                                var x = v322;
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v321, cdr: (function(){
                                    var tmp = v322;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })()}));
                            })();
                        })() : (l27.function(v324, l97) !== l3.value ? (function(){
                            return (function(){
                                var x = (function(){
                                    var tmp = v322;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })();
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v321, cdr: l34.function(v322)}));
                            })();
                        })() : (l27.function(v324, l155) !== l3.value ? (function(){
                            return (function(){
                                var x = l36.function(v322);
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v321, cdr: l37.function(v322)}));
                            })();
                        })() : (l27.function(v324, l156) !== l3.value ? (function(){
                            return (function(){
                                var x = l38.function(v322);
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v321, cdr: l39.function(v322)}));
                            })();
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })()))));
                    })(v323);
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
var l157 = {name: "EXTEND-LEXENV"};
(function(){
    (l157).function = (function(v332){
        ((v332)["fname"] = "EXTEND-LEXENV");
        return v332;
    })((function (v326,v327,v328){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v329){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v330,v331){
                                        (function(){
                                            while(v330 !== l3.value){
                                                v331 = (function(){
                                                    var tmp = v330;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    l154.function(v331, v329, v328);
                                                    return l3.value;
                                                })();
                                                v330 = (function(){
                                                    var tmp = v330;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return v329;
                                    })(l64.function(v326),l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 134)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l153.function(v327));
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
    return l157;
})();
var l158 = {name: "LOOKUP-IN-LEXENV"};
(function(){
    (l158).function = (function(v337){
        ((v337)["fname"] = "LOOKUP-IN-LEXENV");
        return v337;
    })((function (v333,v334,v335){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l90.function(v333, (function(v336){
                        return (l27.function(v336, l98) !== l3.value ? (function(){
                            return l40.function(v334);
                        })() : (l27.function(v336, l97) !== l3.value ? (function(){
                            return l41.function(v334);
                        })() : (l27.function(v336, l155) !== l3.value ? (function(){
                            return l42.function(v334);
                        })() : (l27.function(v336, l156) !== l3.value ? (function(){
                            return l43.function(v334);
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })()))));
                    })(v335));
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
var l159 = {name: "*ENVIRONMENT*"};
(function(){
    (((l159.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l159).value = l152.function();
    })());
    return l159;
})();
var l160 = {name: "*VARIABLE-COUNTER*"};
(function(){
    (((l160.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l160).value = 0;
    })());
    return l160;
})();
var l161 = {name: "GVARNAME"};
(function(){
    (l161).function = (function(v339){
        ((v339)["fname"] = "GVARNAME");
        return v339;
    })((function (v338){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l112.function("v", l16.function((l160).value = (function(){
                        var x = (function(){
                            var symbol = l160;
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
                if (cf.type == 'block' && cf.id == 136)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l161;
})();
var l162 = {name: "TRANSLATE-VARIABLE"};
(function(){
    (l162).function = (function(v341){
        ((v341)["fname"] = "TRANSLATE-VARIABLE");
        return v341;
    })((function (v340){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l147.function(l158.function(v340, (function(){
                        var symbol = l159;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l98));
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
    return l162;
})();
var l163 = {name: "EXTEND-LOCAL-ENV"};
var l164 = {name: "LEXICAL-VARIABLE"};
(function(){
    (l163).function = (function(v347){
        ((v347)["fname"] = "EXTEND-LOCAL-ENV");
        return v347;
    })((function (v342){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v343){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v344,v345){
                                        (function(){
                                            while(v344 !== l3.value){
                                                v345 = (function(){
                                                    var tmp = v344;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    (function(v346){
                                                        return l154.function(v346, v343, l98);
                                                    })(l144.function(v345, l164, l161.function(v345)));
                                                    return l3.value;
                                                })();
                                                v344 = (function(){
                                                    var tmp = v344;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return v343;
                                    })(v342,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 139)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l153.function((function(){
                        var symbol = l159;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
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
    return l163;
})();
var l165 = {name: "*TOPLEVEL-COMPILATIONS*"};
(function(){
    (((l165.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l165).value = l3.value;
    })());
    return l165;
})();
var l166 = {name: "TOPLEVEL-COMPILATION"};
(function(){
    (l166).function = (function(v349){
        ((v349)["fname"] = "TOPLEVEL-COMPILATION");
        return v349;
    })((function (v348){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l165).value = ({car: v348, cdr: (function(){
                        var symbol = l165;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()});
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
    return l166;
})();
var l167 = {name: "NULL-OR-EMPTY-P"};
(function(){
    (l167).function = (function(v351){
        ((v351)["fname"] = "NULL-OR-EMPTY-P");
        return v351;
    })((function (v350){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l25.function(l66.function(v350));
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
    return l167;
})();
var l168 = {name: "GET-TOPLEVEL-COMPILATIONS"};
(function(){
    (l168).function = (function(v352){
        ((v352)["fname"] = "GET-TOPLEVEL-COMPILATIONS");
        return v352;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l64.function(l83.function((function(){
                        var symbol = l167;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), (function(){
                        var symbol = l165;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
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
    return l168;
})();
var l169 = {name: "%COMPILE-DEFMACRO"};
var l170 = {name: "MACRO"};
(function(){
    (l169).function = (function(v355){
        ((v355)["fname"] = "%COMPILE-DEFMACRO");
        return v355;
    })((function (v353,v354){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l166.function((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l44.function(l138), l44.function(v353))));
                    return l154.function(l144.function(v353, l170, v354), (function(){
                        var symbol = l159;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l97);
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
    return l169;
})();
var l171 = {name: "GLOBAL-BINDING"};
(function(){
    (l171).function = (function(v361){
        ((v361)["fname"] = "GLOBAL-BINDING");
        return v361;
    })((function (v356,v357,v358){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v359){
                        return (v359 !== l3.value ? v359 : (function(v360){
                            l154.function(v360, (function(){
                                var symbol = l159;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), v358);
                            return v360;
                        })(l144.function(v356, v357, l3.value)));
                    })(l158.function(v356, (function(){
                        var symbol = l159;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), v358));
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
    return l171;
})();
var l172 = {name: "CLAIMP"};
(function(){
    (l172).function = (function(v366){
        ((v366)["fname"] = "CLAIMP");
        return v366;
    })((function (v362,v363,v364){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v365){
                        return (v365 !== l3.value ? l81.function(v364, l148.function(v365)) : l3.value);
                    })(l158.function(v362, (function(){
                        var symbol = l159;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), v363));
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
    return l172;
})();
var l173 = {name: "!PROCLAIM"};
var l174 = {name: "NOTINLINE"};
var l175 = {name: "CONSTANT"};
var l176 = {name: "NON-OVERRIDABLE"};
(function(){
    (l173).function = (function(v378){
        ((v378)["fname"] = "!PROCLAIM");
        return v378;
    })((function (v367){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v368){
                        return (l27.function(v368, l174) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v369,v370){
                                            (function(){
                                                while(v369 !== l3.value){
                                                    v370 = (function(){
                                                        var tmp = v369;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v371){
                                                            return l151.function(l174, v371);
                                                        })(l171.function(v370, l97, l97));
                                                        return l3.value;
                                                    })();
                                                    v369 = (function(){
                                                        var tmp = v369;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v367;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 147)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : (l27.function(v368, l175) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v372,v373){
                                            (function(){
                                                while(v372 !== l3.value){
                                                    v373 = (function(){
                                                        var tmp = v372;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v374){
                                                            return l151.function(l175, v374);
                                                        })(l171.function(v373, l98, l98));
                                                        return l3.value;
                                                    })();
                                                    v372 = (function(){
                                                        var tmp = v372;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v367;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 148)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : (l27.function(v368, l176) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v375,v376){
                                            (function(){
                                                while(v375 !== l3.value){
                                                    v376 = (function(){
                                                        var tmp = v375;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v377){
                                                            return l151.function(l176, v377);
                                                        })(l171.function(v376, l97, l97));
                                                        return l3.value;
                                                    })();
                                                    v375 = (function(){
                                                        var tmp = v375;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v367;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 149)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : l3.value)));
                    })((function(){
                        var tmp = v367;
                        return tmp === l3.value? l3.value: tmp.car;
                    })());
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
    return l173;
})();
var l177 = {name: "PROCLAIM"};
(l177).function = (function(){
    var symbol = l173;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})();
var l178 = {name: "*COMPILATIONS*"};
(function(){
    (((l178.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l178).value = l3.value;
    })());
    return l178;
})();
var l179 = {name: "DEFINE-COMPILATION"};
l179;
var l180 = {name: "IF"};
(l178).value = ({car: l44.function(l180, (function (v379,v380,v381){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l112.function("(", (function(){
                    var symbol = l119;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v379), " !== ", (function(){
                    var symbol = l119;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), " ? ", (function(){
                    var symbol = l119;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v380), " : ", (function(){
                    var symbol = l119;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v381), ")");
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
    var symbol = l178;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l181 = {name: "*LAMBDA-LIST-KEYWORDS*"};
var l182 = {name: "&OPTIONAL"};
var l183 = {name: "&REST"};
var l184 = {car: l182, cdr: {car: l183, cdr: l3}};
(function(){
    (((l181.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l181).value = l184;
    })());
    return l181;
})();
var l185 = {name: "LIST-UNTIL-KEYWORD"};
(function(){
    (l185).function = (function(v384){
        ((v384)["fname"] = "LIST-UNTIL-KEYWORD");
        return v384;
    })((function (v382){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(v383){
                        return (v383 !== l3.value ? v383 : l81.function((function(){
                            var tmp = v382;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), (function(){
                            var symbol = l181;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()));
                    })(l11.function(v382)) !== l3.value ? l3.value : ({car: (function(){
                        var tmp = v382;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), cdr: l185.function((function(){
                        var tmp = v382;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())}));
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
    return l185;
})();
var l186 = {name: "LAMBDA-LIST-REQUIRED-ARGUMENTS"};
(function(){
    (l186).function = (function(v386){
        ((v386)["fname"] = "LAMBDA-LIST-REQUIRED-ARGUMENTS");
        return v386;
    })((function (v385){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l185.function(v385);
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
    return l186;
})();
var l187 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"};
(function(){
    (l187).function = (function(v388){
        ((v388)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
        return v388;
    })((function (v387){
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
                    })(), l185.function((function(){
                        var tmp = l81.function(l182, v387);
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()));
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
    return l187;
})();
var l188 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS"};
(function(){
    (l188).function = (function(v390){
        ((v390)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS");
        return v390;
    })((function (v389){
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
                    })(), l187.function(v389));
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
    return l188;
})();
var l189 = {name: "LAMBDA-LIST-REST-ARGUMENT"};
(function(){
    (l189).function = (function(v393){
        ((v393)["fname"] = "LAMBDA-LIST-REST-ARGUMENT");
        return v393;
    })((function (v391){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v392){
                        ((function(){
                            var tmp = v392;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })() !== l3.value ? (function(){
                            return (function(){
                                throw "Bad lambda-list";
                            })();
                        })() : l3.value);
                        return (function(){
                            var tmp = v392;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })(l185.function((function(){
                        var tmp = l81.function(l183, v391);
                        return tmp === l3.value? l3.value: tmp.cdr;
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
var l190 = {name: "LAMBDA-DOCSTRING-WRAPPER"};
(function(){
    (l190).function = (function(v396){
        ((v396)["fname"] = "LAMBDA-DOCSTRING-WRAPPER");
        return v396;
    })((function (v395){
        if (arguments.length < 1) throw 'too few arguments';
        var v394= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v394 = {car: arguments[i], cdr: 
        v394};
        return (function(){
            try {
                return (function(){
                    return (v395 !== l3.value ? l112.function("(function(){", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l117.function("var func = ", l114.function(v394), ";", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "func.docstring = '", v395, "';", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "return func;", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : l114.function(v394));
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
var l191 = {name: "LAMBDA"};
var l192 = {name: "LS-COMPILE-BLOCK"};
(l178).value = ({car: l44.function(l191, (function (v398){
    if (arguments.length < 1) throw 'too few arguments';
    var v397= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v397 = {car: arguments[i], cdr: 
    v397};
    return (function(){
        try {
            return (function(){
                return (function(v399,v400,v401,v402){
                    ((((typeof((function(){
                        var tmp = v397;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) == "string")?l4.value: l3.value) !== l3.value ? l28.function(l11.function((function(){
                        var tmp = v397;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())) : l3.value) !== l3.value ? (function(){
                        v402 = (function(){
                            var tmp = v397;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        return v397 = (function(){
                            var tmp = v397;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                    })() : l3.value);
                    return (function(v403,v404,v405){
                        try {
                            var tmp;
                            tmp = l159.value;
                            l159.value = v405;
                            v405 = tmp;
                            return l190.function(v402, "(function (", l114.function(l68.function((function(){
                                var symbol = l162;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })(), l62.function(v399, v400)), ","), "){", (function(){
                                var symbol = l111;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l117.function((v399 !== l3.value ? l112.function("if (arguments.length < ", l16.function(v403), ") throw 'too few arguments';", (function(){
                                var symbol = l111;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (l28.function(v401) !== l3.value ? l112.function("if (arguments.length > ", l16.function((function(){
                                var x = v403;
                                var y = v404;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })()), ") throw 'too many arguments';", (function(){
                                var symbol = l111;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (v400 !== l3.value ? l112.function("switch(arguments.length){", (function(){
                                var symbol = l111;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(v406,v407,v408){
                                return (function(){
                                    (function(){
                                        try {
                                            return (function(){
                                                return (function(){
                                                    while(((function(){
                                                        var x = v408;
                                                        var y = v404;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        if (typeof y != 'number')
                                                            throw 'The value ' + y + ' is not a type number.';
                                                        return x<y;
                                                    })()?l4.value: l3.value) !== l3.value){
                                                        (function(v409){
                                                            v407 = ({car: l112.function("case ", l16.function((function(){
                                                                var x = v408;
                                                                var y = v403;
                                                                if (typeof x != 'number')
                                                                    throw 'The value ' + x + ' is not a type number.';
                                                                if (typeof y != 'number')
                                                                    throw 'The value ' + y + ' is not a type number.';
                                                                return x+y;
                                                            })()), ":", (function(){
                                                                var symbol = l111;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })(), l162.function((function(){
                                                                var tmp = v409;
                                                                return tmp === l3.value? l3.value: tmp.car;
                                                            })()), "=", (function(){
                                                                var symbol = l119;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()(l34.function(v409)), ";", (function(){
                                                                var symbol = l111;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })()), cdr: v407});
                                                            return v408 = (function(){
                                                                var x = v408;
                                                                var y = 1;
                                                                if (typeof x != 'number')
                                                                    throw 'The value ' + x + ' is not a type number.';
                                                                if (typeof y != 'number')
                                                                    throw 'The value ' + y + ' is not a type number.';
                                                                return x+y;
                                                            })();
                                                        })(l78.function(v408, v406));
                                                    }return l3.value;
                                                })();
                                            })();
                                        }
                                        catch (cf){
                                            if (cf.type == 'block' && cf.id == 158)
                                                return cf.value;
                                            else
                                                throw cf;
                                        }
                                    })();
                                    v407 = ({car: l112.function("default: break;", (function(){
                                        var symbol = l111;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()), cdr: v407});
                                    return l114.function(l64.function(v407));
                                })();
                            })(l187.function(v398),l3.value,0), "}", (function(){
                                var symbol = l111;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (v401 !== l3.value ? (function(v410){
                                return l112.function("var ", v410, "= ", (function(){
                                    var symbol = l119;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l3.value), ";", (function(){
                                    var symbol = l111;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "for (var i = arguments.length-1; i>=", l16.function((function(){
                                    var x = v403;
                                    var y = v404;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    if (typeof y != 'number')
                                        throw 'The value ' + y + ' is not a type number.';
                                    return x+y;
                                })()), "; i--)", (function(){
                                    var symbol = l111;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), l117.function(v410, " = ", "{car: arguments[i], cdr: "), v410, "};", (function(){
                                    var symbol = l111;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })(l162.function(v401)) : ""), (function(){
                                var symbol = l192;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v397, l4.value)), (function(){
                                var symbol = l111;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "})");
                        }
                        finally {
                            l159.value = v405;
                        }
                    })(l66.function(v399),l66.function(v400),l163.function(l62.function(l58.function(v401), v399, v400)));
                })(l186.function(v398),l188.function(v398),l189.function(v398),l3.value);
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
    var symbol = l178;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l193 = {name: "SETQ"};
var l194 = {name: "SET"};
(l178).value = ({car: l44.function(l193, (function (v411,v412){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v413){
                    return (((l146.function(v413) === l164)?l4.value: l3.value) !== l3.value ? l112.function(l147.function(v413), " = ", (function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v412)) : (function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l44.function(l194), l44.function(l62.function(l44.function(l138), l44.function(v411))), l44.function(v412))));
                })(l158.function(v411, (function(){
                    var symbol = l159;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l98));
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
    var symbol = l178;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l195 = {name: "JS-VREF"};
(l178).value = ({car: l44.function(l195, (function (v414){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return v414;
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
    var symbol = l178;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l196 = {name: "JS-VSET"};
(l178).value = ({car: l44.function(l196, (function (v415,v416){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l112.function("(", v415, " = ", (function(){
                    var symbol = l119;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v416), ")");
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
    var symbol = l178;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
(function(){
    (l122).function = (function(v423){
        ((v423)["fname"] = "ESCAPE-STRING");
        return v423;
    })((function (v417){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v418,v419,v420){
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(((function(){
                                            var x = v419;
                                            var y = v420;
                                            if (typeof x != 'number')
                                                throw 'The value ' + x + ' is not a type number.';
                                            if (typeof y != 'number')
                                                throw 'The value ' + y + ' is not a type number.';
                                            return x<y;
                                        })()?l4.value: l3.value) !== l3.value){
                                            (function(v421){
                                                ((function(v422){
                                                    return (v422 !== l3.value ? v422 : l73.function(v421, 92));
                                                })(l73.function(v421, 34)) !== l3.value ? (function(){
                                                    return v418 = l112.function(v418, "\\");
                                                })() : l3.value);
                                                (l73.function(v421, 10) !== l3.value ? (function(){
                                                    v418 = l112.function(v418, "\\");
                                                    return v421 = 110;
                                                })() : l3.value);
                                                return v418 = l112.function(v418, l91.function(v421));
                                            })((function(){
                                                var string = v417;
                                                var index = v419;
                                                if (typeof string != 'string')
                                                    throw 'The value ' + string + ' is not a type string.';
                                                if (typeof index != 'number')
                                                    throw 'The value ' + index + ' is not a type number.';
                                                return string.charCodeAt(index);
                                            })());
                                            v419 = (function(){
                                                var x = v419;
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
                                if (cf.type == 'block' && cf.id == 163)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v418;
                    })("",0,l66.function(v417));
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
    return l122;
})();
var l197 = {name: "*LITERAL-SYMBOLS*"};
(function(){
    (((l197.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l197).value = l3.value;
    })());
    return l197;
})();
var l198 = {name: "*LITERAL-COUNTER*"};
(function(){
    (((l198.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l198).value = 0;
    })());
    return l198;
})();
var l199 = {name: "GENLIT"};
(function(){
    (l199).function = (function(v424){
        ((v424)["fname"] = "GENLIT");
        return v424;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l112.function("l", l16.function((l198).value = (function(){
                        var x = (function(){
                            var symbol = l198;
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
    
    }));
    return l199;
})();
var l200 = {name: "LITERAL"};
(function(){
    (l200).function = (function(v432){
        ((v432)["fname"] = "LITERAL");
        return v432;
    })((function (v425,v426){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v426=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (l74.function(v425) !== l3.value ? (function(){
                        return l16.function(v425);
                    })() : (((typeof(v425) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l112.function("\"", l122.function(v425), "\"");
                    })() : (((function(){
                        var tmp = v425;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v427){
                            return (v427 !== l3.value ? v427 : (function(v428,v429){
                                (l197).value = ({car: ({car: v425, cdr: v428}), cdr: (function(){
                                    var symbol = l197;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()});
                                l166.function(l112.function("var ", v428, " = ", v429));
                                return v428;
                            })(l199.function(),(function(){
                                var symbol = l119;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l62.function(l44.function(l108), l44.function((v425).name)))));
                        })((function(){
                            var tmp = l90.function(v425, (function(){
                                var symbol = l197;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : (((function(){
                        var tmp = v425;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v430){
                            return (v426 !== l3.value ? v430 : (function(v431){
                                l166.function(l112.function("var ", v431, " = ", v430));
                                return v431;
                            })(l199.function()));
                        })(l112.function("{car: ", l200.function((function(){
                            var tmp = v425;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), l4.value), ", ", "cdr: ", l200.function((function(){
                            var tmp = v425;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), l4.value), "}"));
                    })() : l3.value))));
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
(l178).value = ({car: l44.function(l138, (function (v433){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l200.function(v433);
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
    var symbol = l178;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l201 = {name: "%WHILE"};
(l178).value = ({car: l44.function(l201, (function (v435){
    if (arguments.length < 1) throw 'too few arguments';
    var v434= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v434 = {car: arguments[i], cdr: 
    v434};
    return (function(){
        try {
            return (function(){
                return l112.function("(function(){", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l117.function("while(", (function(){
                    var symbol = l119;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v435), " !== ", (function(){
                    var symbol = l119;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), "){", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l117.function((function(){
                    var symbol = l192;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v434)), "}", "return ", (function(){
                    var symbol = l119;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), ";", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
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
    var symbol = l178;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l202 = {name: "SYMBOL-FUNCTION"};
(l178).value = ({car: l44.function(l97, (function (v436){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return ((l59.function(v436) !== l3.value ? (((function(){
                    var tmp = v436;
                    return tmp === l3.value? l3.value: tmp.car;
                })() === l191)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                    return (function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v436);
                })() : (((function(){
                    var tmp = v436;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(){
                    return (function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l44.function(l202), l44.function(l62.function(l44.function(l138), l44.function(v436)))));
                })() : l3.value));
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
    var symbol = l178;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l203 = {name: "EVAL-WHEN-COMPILE"};
var l204 = {name: "EVAL"};
var l205 = {name: "PROGN"};
(l178).value = ({car: l44.function(l203, (function (){
    var v437= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v437 = {car: arguments[i], cdr: 
    v437};
    return (function(){
        try {
            return (function(){
                (function(){
                    var symbol = l204;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(({car: l205, cdr: v437}));
                return l3.value;
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
    var symbol = l178;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l206 = {name: "DEFINE-TRANSFORMATION"};
l206;
(l178).value = ({car: l44.function(l205, (function (){
    var v438= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v438 = {car: arguments[i], cdr: 
    v438};
    return (function(){
        try {
            return (function(){
                return l112.function("(function(){", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l117.function((function(){
                    var symbol = l192;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v438, l4.value)), "})()");
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
    var symbol = l178;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l207 = {name: "DYNAMIC-BINDING-WRAPPER"};
(function(){
    (l207).function = (function(v445){
        ((v445)["fname"] = "DYNAMIC-BINDING-WRAPPER");
        return v445;
    })((function (v439,v440){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.function(v439) !== l3.value ? v440 : l112.function("try {", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l117.function("var tmp;", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l114.function(l68.function((function (v441){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v442){
                            return l112.function("tmp = ", v442, ".value;", (function(){
                                var symbol = l111;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), v442, ".value = ", (function(){
                                var tmp = v441;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), ";", (function(){
                                var symbol = l111;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(){
                                var tmp = v441;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), " = tmp;", (function(){
                                var symbol = l111;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })((function(){
                            var symbol = l119;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l44.function(l138), l44.function((function(){
                            var tmp = v441;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    
                    }), v439)), v440), "}", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "finally {", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l117.function(l115.function(l68.function((function (v443){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v444){
                            return l112.function(v444, ".value", " = ", (function(){
                                var tmp = v443;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })());
                        })((function(){
                            var symbol = l119;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l44.function(l138), l44.function((function(){
                            var tmp = v443;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    
                    }), v439), l112.function(";", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()))), "}", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
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
    return l207;
})();
var l208 = {name: "LET"};
(l178).value = ({car: l44.function(l208, (function (v447){
    if (arguments.length < 1) throw 'too few arguments';
    var v446= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v446 = {car: arguments[i], cdr: 
    v446};
    return (function(){
        try {
            return (function(){
                return (function(v448){
                    return (function(v449,v450){
                        return (function(v451,v453,v452){
                            try {
                                var tmp;
                                tmp = l159.value;
                                l159.value = v453;
                                v453 = tmp;
                                return l112.function("(function(", l114.function(l68.function((function (v454){
                                    if (arguments.length < 1) throw 'too few arguments';
                                    if (arguments.length > 1) throw 'too many arguments';
                                    return (((v454.value !== undefined)?l4.value: l3.value) !== l3.value ? (function(v455){
                                        v452 = ({car: ({car: v454, cdr: v455}), cdr: v452});
                                        return v455;
                                    })(l161.function(v454)) : l162.function(v454));
                                
                                }), v449), ","), "){", (function(){
                                    var symbol = l111;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), (function(v456){
                                    return l117.function(l207.function(v452, v456));
                                })((function(){
                                    var symbol = l192;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v446, l4.value)), "})(", l114.function(v451, ","), ")");
                            }
                            finally {
                                l159.value = v453;
                            }
                        })(l68.function((function(){
                            var symbol = l119;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v450),l163.function(l83.function((function(){
                            var symbol = l17;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v449)),l3.value);
                    })(l68.function((function(){
                        var symbol = l40;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v448),l68.function((function(){
                        var symbol = l41;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v448));
                })(l68.function((function(){
                    var symbol = l58;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v447));
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
    var symbol = l178;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l209 = {name: "*BLOCK-COUNTER*"};
(function(){
    (((l209.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l209).value = 0;
    })());
    return l209;
})();
(l178).value = ({car: l44.function(l155, (function (v458){
    if (arguments.length < 1) throw 'too few arguments';
    var v457= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v457 = {car: arguments[i], cdr: 
    v457};
    return (function(){
        try {
            return (function(){
                return (function(v459){
                    return (function(v460){
                        return l112.function("(function(){", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function("try {", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(v461){
                            try {
                                var tmp;
                                tmp = l159.value;
                                l159.value = v461;
                                v461 = tmp;
                                return l117.function("return ", (function(){
                                    var symbol = l119;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l62.function(l44.function(l205), v457)), ";", (function(){
                                    var symbol = l111;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            }
                            finally {
                                l159.value = v461;
                            }
                        })(l157.function(l44.function(v460), (function(){
                            var symbol = l159;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l155)), "}", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "catch (cf){", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    if (cf.type == 'block' && cf.id == ", v459, ")", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        return cf.value;", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    else", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        throw cf;", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "}", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })(l144.function(v458, l155, v459));
                })(l16.function((l209).value = (function(){
                    var x = (function(){
                        var symbol = l209;
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
            if (cf.type == 'block' && cf.id == 173)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l178;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l210 = {name: "RETURN-FROM"};
(l178).value = ({car: l44.function(l210, (function (v462,v463){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    switch(arguments.length){
    case 1:
    v463=l3.value;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return (function(v464){
                    return (v464 !== l3.value ? l112.function("(function(){", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l117.function("throw ({", "type: 'block', ", "id: ", l147.function(v464), ", ", "value: ", (function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v463), ", ", "message: 'Return from unknown block ", (v462).name, ".'", "})"), "})()") : (function(){
                        throw l112.function("Unknown block `", (v462).name, "'.");
                    })());
                })(l158.function(v462, (function(){
                    var symbol = l159;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l155));
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
    var symbol = l178;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l211 = {name: "CATCH"};
(l178).value = ({car: l44.function(l211, (function (v466){
    if (arguments.length < 1) throw 'too few arguments';
    var v465= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v465 = {car: arguments[i], cdr: 
    v465};
    return (function(){
        try {
            return (function(){
                return l112.function("(function(){", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l117.function("var id = ", (function(){
                    var symbol = l119;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v466), ";", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "try {", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l117.function("return ", (function(){
                    var symbol = l119;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l62.function(l44.function(l205), v465)), ";", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "}", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "catch (cf){", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "    if (cf.type == 'catch' && cf.id == id)", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "        return cf.value;", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "    else", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "        throw cf;", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "}", (function(){
                    var symbol = l111;
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
    var symbol = l178;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l212 = {name: "THROW"};
(l178).value = ({car: l44.function(l212, (function (v467,v468){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    switch(arguments.length){
    case 1:
    v468=l3.value;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return l112.function("(function(){", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l117.function("throw ({", "type: 'catch', ", "id: ", (function(){
                    var symbol = l119;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v467), ", ", "value: ", (function(){
                    var symbol = l119;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v468), ", ", "message: 'Throw uncatched.'", "})"), "})()");
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
    var symbol = l178;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l213 = {name: "*TAGBODY-COUNTER*"};
(function(){
    (((l213.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l213).value = 0;
    })());
    return l213;
})();
var l214 = {name: "*GO-TAG-COUNTER*"};
(function(){
    (((l214.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l214).value = 0;
    })());
    return l214;
})();
var l215 = {name: "GO-TAG-P"};
(function(){
    (l215).function = (function(v471){
        ((v471)["fname"] = "GO-TAG-P");
        return v471;
    })((function (v469){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v470){
                        return (v470 !== l3.value ? v470 : ((function(){
                            var tmp = v469;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?l4.value: l3.value));
                    })(l74.function(v469));
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
    return l215;
})();
var l216 = {name: "DECLARE-TAGBODY-TAGS"};
(function(){
    (l216).function = (function(v477){
        ((v477)["fname"] = "DECLARE-TAGBODY-TAGS");
        return v477;
    })((function (v472,v473){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v476){
                        return l157.function(v476, (function(){
                            var symbol = l159;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l156);
                    })(l68.function((function (v474){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v475){
                            return l144.function(v474, l156, l44.function(v472, v475));
                        })(l16.function((l214).value = (function(){
                            var x = (function(){
                                var symbol = l214;
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
                        var symbol = l215;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v473)));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 178)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l216;
})();
var l217 = {name: "TAGBODY"};
(l178).value = ({car: l44.function(l217, (function (){
    var v478= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v478 = {car: arguments[i], cdr: 
    v478};
    return (function(){
        try {
            return (function(){
                (l88.function((function(){
                    var symbol = l215;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v478) !== l3.value ? l3.value : (function(){
                    return (function(){
                        throw ({type: 'block', id: 179, value: (function(){
                            var symbol = l119;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l44.function(l205), v478, l44.function(l3))), message: 'Return from unknown block TAGBODY.'})
                    })();
                })());
                (l215.function((function(){
                    var tmp = v478;
                    return tmp === l3.value? l3.value: tmp.car;
                })()) !== l3.value ? l3.value : (function(){
                    return v478 = ({car: l15.function("START"), cdr: v478});
                })());
                return (function(v479){
                    return (function(v481,v480){
                        try {
                            var tmp;
                            tmp = l159.value;
                            l159.value = v481;
                            v481 = tmp;
                            (function(v482){
                                return v480 = l41.function(l147.function(v482));
                            })(l158.function(l40.function(v478), (function(){
                                var symbol = l159;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l156));
                            return l112.function("(function(){", (function(){
                                var symbol = l111;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l117.function("var tagbody_", v479, " = ", v480, ";", (function(){
                                var symbol = l111;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "tbloop:", (function(){
                                var symbol = l111;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "while (true) {", (function(){
                                var symbol = l111;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l117.function("try {", (function(){
                                var symbol = l111;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l117.function((function(v483){
                                return l112.function("switch(tagbody_", v479, "){", (function(){
                                    var symbol = l111;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "case ", v480, ":", (function(){
                                    var symbol = l111;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), (function(){
                                    try {
                                        return (function(){
                                            return (function(v484,v485){
                                                (function(){
                                                    while(v484 !== l3.value){
                                                        v485 = (function(){
                                                            var tmp = v484;
                                                            return tmp === l3.value? l3.value: tmp.car;
                                                        })();
                                                        (function(){
                                                            v483 = l112.function(v483, (function(){
                                                                return (l28.function(l215.function(v485)) !== l3.value ? l117.function((function(){
                                                                    var symbol = l119;
                                                                    var func = symbol.function;
                                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                    return func;
                                                                })()(v485), ";", (function(){
                                                                    var symbol = l111;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })()) : (function(v486){
                                                                    return l112.function("case ", l41.function(l147.function(v486)), ":", (function(){
                                                                        var symbol = l111;
                                                                        var value = symbol.value;
                                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                        return value;
                                                                    })());
                                                                })(l158.function(v485, (function(){
                                                                    var symbol = l159;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })(), l156)));
                                                            })());
                                                            return l3.value;
                                                        })();
                                                        v484 = (function(){
                                                            var tmp = v484;
                                                            return tmp === l3.value? l3.value: tmp.cdr;
                                                        })();
                                                    }return l3.value;
                                                })();
                                                return v483;
                                            })((function(){
                                                var tmp = v478;
                                                return tmp === l3.value? l3.value: tmp.cdr;
                                            })(),l3.value);
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 180)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })(), "default:", (function(){
                                    var symbol = l111;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "    break tbloop;", (function(){
                                    var symbol = l111;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "}", (function(){
                                    var symbol = l111;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })("")), "}", (function(){
                                var symbol = l111;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "catch (jump) {", (function(){
                                var symbol = l111;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "    if (jump.type == 'tagbody' && jump.id == ", v479, ")", (function(){
                                var symbol = l111;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "        tagbody_", v479, " = jump.label;", (function(){
                                var symbol = l111;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "    else", (function(){
                                var symbol = l111;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "        throw(jump);", (function(){
                                var symbol = l111;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "}", (function(){
                                var symbol = l111;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), "}", (function(){
                                var symbol = l111;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "return ", (function(){
                                var symbol = l119;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l3.value), ";", (function(){
                                var symbol = l111;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), "})()");
                        }
                        finally {
                            l159.value = v481;
                        }
                    })(l216.function(v479, v478),l3.value);
                })(l16.function((function(){
                    var symbol = l213;
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

})), cdr: (function(){
    var symbol = l178;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l218 = {name: "GO"};
(l178).value = ({car: l44.function(l218, (function (v487){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v488,v489){
                    return (v488 !== l3.value ? l112.function("(function(){", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l117.function("throw ({", "type: 'tagbody', ", "id: ", l40.function(l147.function(v488)), ", ", "label: ", l41.function(l147.function(v488)), ", ", "message: 'Attempt to GO to non-existing tag ", v489, "'", "})", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : (function(){
                        throw l112.function("Unknown tag `", v489, "'.");
                    })());
                })(l158.function(v487, (function(){
                    var symbol = l159;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l156),(((function(){
                    var tmp = v487;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(){
                    return (v487).name;
                })() : (l74.function(v487) !== l3.value ? (function(){
                    return l16.function(v487);
                })() : l3.value)));
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
    var symbol = l178;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l219 = {name: "UNWIND-PROTECT"};
(l178).value = ({car: l44.function(l219, (function (v491){
    if (arguments.length < 1) throw 'too few arguments';
    var v490= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v490 = {car: arguments[i], cdr: 
    v490};
    return (function(){
        try {
            return (function(){
                return l112.function("(function(){", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l117.function("var ret = ", (function(){
                    var symbol = l119;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), ";", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "try {", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l117.function("ret = ", (function(){
                    var symbol = l119;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v491), ";", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "} finally {", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l117.function((function(){
                    var symbol = l192;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v490)), "}", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "return ret;", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
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
    var symbol = l178;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l220 = {name: "BACKQUOTE-EXPAND-1"};
(function(){
    (l220).function = (function(v494){
        ((v494)["fname"] = "BACKQUOTE-EXPAND-1");
        return v494;
    })((function (v492){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v492;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return l44.function(l138, v492);
                    })() : (l45.function(v492) !== l3.value ? (function(){
                        return v492;
                    })() : ((((function(){
                        var tmp = v492;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l141)?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(){
                            var tmp = v492;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })() : ((((function(){
                        var tmp = v492;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l139)?l4.value: l3.value) !== l3.value ? (function(){
                        return l220.function(l220.function(l34.function(v492)));
                    })() : (function(){
                        return ({car: l62, cdr: l68.function((function (v493){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return ((l59.function(v493) !== l3.value ? (((function(){
                                var tmp = v493;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l141)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return l44.function(l44, l34.function(v493));
                            })() : ((l59.function(v493) !== l3.value ? (((function(){
                                var tmp = v493;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l140)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return l34.function(v493);
                            })() : (function(){
                                return l44.function(l44, l220.function(v493));
                            })()));
                        
                        }), v492)});
                    })()))));
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
var l221 = {name: "BACKQUOTE-EXPAND"};
(function(){
    (l221).function = (function(v496){
        ((v496)["fname"] = "BACKQUOTE-EXPAND");
        return v496;
    })((function (v495){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((l59.function(v495) !== l3.value ? (((function(){
                        var tmp = v495;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l139)?l4.value: l3.value) : l3.value) !== l3.value ? l220.function(l34.function(v495)) : v495);
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
    return l221;
})();
l139;
(l178).value = ({car: l44.function(l139, (function (v497){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l119;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l220.function(v497));
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
    var symbol = l178;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l222 = {name: "*BUILTINS*"};
(function(){
    (((l222.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l222).value = l3.value;
    })());
    return l222;
})();
var l223 = {name: "DEFINE-RAW-BUILTIN"};
l223;
var l224 = {name: "DEFINE-BUILTIN"};
l224;
var l225 = {name: "TYPE-CHECK"};
l225;
var l226 = {name: "NUM-OP-NUM"};
(function(){
    (l226).function = (function(v501){
        ((v501)["fname"] = "NUM-OP-NUM");
        return v501;
    })((function (v498,v499,v500){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l112.function("(function(){", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l117.function(l112.function("var ", "x", " = ", v498, ";", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), l112.function("var ", "y", " = ", v500, ";", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), l112.function("if (typeof ", "x", " != '", "number", "')", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l117.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), l112.function("if (typeof ", "y", " != '", "number", "')", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l117.function("throw 'The value ' + ", "y", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), l112.function("return ", (function(){
                        return l112.function("x", v499, "y");
                    })(), ";", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), "})()");
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
    return l226;
})();
(function(){
    return (l222).value = ({car: l44.function(l19, (function (v502,v503){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v504,v505){
                        return l226.function(v504, "+", v505);
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v502),(function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v503));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l222).value = ({car: l44.function(l20, (function (v506,v507){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v508,v509){
                        return l226.function(v508, "-", v509);
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v506),(function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v507));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l222).value = ({car: l44.function(l21, (function (v510,v511){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v512,v513){
                        return l226.function(v512, "*", v513);
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v510),(function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v511));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l222).value = ({car: l44.function(l22, (function (v514,v515){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v516,v517){
                        return l226.function(v516, "/", v517);
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v514),(function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v515));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l227 = {name: "MOD"};
(function(){
    return (l222).value = ({car: l44.function(l227, (function (v518,v519){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v520,v521){
                        return l226.function(v520, "%", v521);
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v518),(function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v519));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l228 = {name: "<"};
(function(){
    return (l222).value = ({car: l44.function(l228, (function (v522,v523){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v524,v525){
                        return l118.function(l226.function(v524, "<", v525));
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v522),(function(){
                        var symbol = l119;
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l229 = {name: ">"};
(function(){
    return (l222).value = ({car: l44.function(l229, (function (v526,v527){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v528,v529){
                        return l118.function(l226.function(v528, ">", v529));
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v526),(function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v527));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l222).value = ({car: l44.function(l18, (function (v530,v531){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v532,v533){
                        return l118.function(l226.function(v532, "==", v533));
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v530),(function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v531));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l230 = {name: "<="};
(function(){
    return (l222).value = ({car: l44.function(l230, (function (v534,v535){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v536,v537){
                        return l118.function(l226.function(v536, "<=", v537));
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v534),(function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v535));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l231 = {name: ">="};
(function(){
    return (l222).value = ({car: l44.function(l231, (function (v538,v539){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v540,v541){
                        return l118.function(l226.function(v540, ">=", v541));
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v538),(function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v539));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l232 = {name: "NUMBERP"};
(function(){
    return (l222).value = ({car: l44.function(l232, (function (v542){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v543){
                        return l118.function(l112.function("(typeof (", v543, ") == \"number\")"));
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v542));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l233 = {name: "FLOOR"};
(function(){
    return (l222).value = ({car: l44.function(l233, (function (v544){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v545){
                        return l112.function("(function(){", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function(l112.function("var ", "x", " = ", v545, ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l112.function("if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l112.function("return ", (function(){
                            return "Math.floor(x)";
                        })(), ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l119;
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l222).value = ({car: l44.function(l29, (function (v546,v547){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v548,v549){
                        return l112.function("({car: ", v548, ", cdr: ", v549, "})");
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v546),(function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v547));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l222).value = ({car: l44.function(l30, (function (v550){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v551){
                        return l118.function(l112.function("(function(){", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function("var tmp = ", v551, ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return (typeof tmp == 'object' && 'car' in tmp);", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()"));
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v550));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l222).value = ({car: l44.function(l31, (function (v552){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v553){
                        return l112.function("(function(){", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function("var tmp = ", v553, ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l119;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), "? ", (function(){
                            var symbol = l119;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ": tmp.car;", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v552));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l222).value = ({car: l44.function(l32, (function (v554){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v555){
                        return l112.function("(function(){", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function("var tmp = ", v555, ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l119;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), "? ", (function(){
                            var symbol = l119;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ": tmp.cdr;", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v554));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l234 = {name: "SETCAR"};
(function(){
    return (l222).value = ({car: l44.function(l234, (function (v556,v557){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v558,v559){
                        return l112.function("(function(){", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function(l112.function("var ", "x", " = ", v558, ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l112.function("if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l112.function("return ", (function(){
                            return l112.function("(x.car = ", v559, ")");
                        })(), ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v556),(function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v557));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l235 = {name: "SETCDR"};
(function(){
    return (l222).value = ({car: l44.function(l235, (function (v560,v561){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v562,v563){
                        return l112.function("(function(){", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function(l112.function("var ", "x", " = ", v562, ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l112.function("if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l112.function("return ", (function(){
                            return l112.function("(x.cdr = ", v563, ")");
                        })(), ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v560),(function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v561));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l236 = {name: "SYMBOLP"};
(function(){
    return (l222).value = ({car: l44.function(l236, (function (v564){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v565){
                        return l118.function(l112.function("(function(){", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function("var tmp = ", v565, ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return (typeof tmp == 'object' && 'name' in tmp);", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()"));
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v564));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l237 = {name: "MAKE-SYMBOL"};
(function(){
    return (l222).value = ({car: l44.function(l237, (function (v566){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v567){
                        return l112.function("(function(){", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function(l112.function("var ", "name", " = ", v567, ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l112.function("if (typeof ", "name", " != '", "string", "')", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function("throw 'The value ' + ", "name", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l112.function("return ", (function(){
                            return "({name: name})";
                        })(), ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v566));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l238 = {name: "SYMBOL-NAME"};
(function(){
    return (l222).value = ({car: l44.function(l238, (function (v568){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v569){
                        return l112.function("(", v569, ").name");
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v568));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l222).value = ({car: l44.function(l194, (function (v570,v571){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v572,v573){
                        return l112.function("(", v572, ").value = ", v573);
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v570),(function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v571));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l239 = {name: "FSET"};
(function(){
    return (l222).value = ({car: l44.function(l239, (function (v574,v575){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v576,v577){
                        return l112.function("(", v576, ").function = ", v577);
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v574),(function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v575));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l222).value = ({car: l44.function(l17, (function (v578){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v579){
                        return l118.function(l112.function("(", v579, ".value !== undefined)"));
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v578));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l240 = {name: "SYMBOL-VALUE"};
(function(){
    return (l222).value = ({car: l44.function(l240, (function (v580){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v581){
                        return l112.function("(function(){", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function("var symbol = ", v581, ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var value = symbol.value;", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (value === undefined) throw \"Variable `\" + symbol.name + \"' is unbound.\";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return value;", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v580));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l222).value = ({car: l44.function(l202, (function (v582){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v583){
                        return l112.function("(function(){", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function("var symbol = ", v583, ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var func = symbol.function;", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (func === undefined) throw \"Function `\" + symbol.name + \"' is undefined.\";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return func;", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v582));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l241 = {name: "SYMBOL-PLIST"};
(function(){
    return (l222).value = ({car: l44.function(l241, (function (v584){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v585){
                        return l112.function("((", v585, ").plist || ", (function(){
                            var symbol = l119;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ")");
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v584));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l242 = {name: "LAMBDA-CODE"};
(function(){
    return (l222).value = ({car: l44.function(l242, (function (v586){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v587){
                        return l112.function("(", v587, ").toString()");
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v586));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l243 = {name: "EQ"};
(function(){
    return (l222).value = ({car: l44.function(l243, (function (v588,v589){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v590,v591){
                        return l118.function(l112.function("(", v590, " === ", v591, ")"));
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v588),(function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v589));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l244 = {name: "EQUAL"};
(function(){
    return (l222).value = ({car: l44.function(l244, (function (v592,v593){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v594,v595){
                        return l118.function(l112.function("(", v594, " == ", v595, ")"));
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v592),(function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v593));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l245 = {name: "CHAR-TO-STRING"};
(function(){
    return (l222).value = ({car: l44.function(l245, (function (v596){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v597){
                        return l112.function("(function(){", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function(l112.function("var ", "x", " = ", v597, ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l112.function("if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l112.function("return ", (function(){
                            return "String.fromCharCode(x)";
                        })(), ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v596));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l246 = {name: "STRINGP"};
(function(){
    return (l222).value = ({car: l44.function(l246, (function (v598){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v599){
                        return l118.function(l112.function("(typeof(", v599, ") == \"string\")"));
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v598));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l247 = {name: "STRING-UPCASE"};
(function(){
    return (l222).value = ({car: l44.function(l247, (function (v600){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v601){
                        return l112.function("(function(){", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function(l112.function("var ", "x", " = ", v601, ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l112.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l112.function("return ", (function(){
                            return "x.toUpperCase()";
                        })(), ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v600));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l248 = {name: "STRING-LENGTH"};
(function(){
    return (l222).value = ({car: l44.function(l248, (function (v602){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v603){
                        return l112.function("(function(){", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function(l112.function("var ", "x", " = ", v603, ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l112.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l112.function("return ", (function(){
                            return "x.length";
                        })(), ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v602));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l249 = {name: "SLICE"};
(l222).value = ({car: l44.function(l249, (function (v604,v605,v606){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    switch(arguments.length){
    case 2:
    v606=l3.value;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return l112.function("(function(){", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l117.function("var str = ", (function(){
                    var symbol = l119;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v604), ";", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var a = ", (function(){
                    var symbol = l119;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v605), ";", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var b;", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (v606 !== l3.value ? l112.function("b = ", (function(){
                    var symbol = l119;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v606), ";", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()) : ""), "return str.slice(a,b);", (function(){
                    var symbol = l111;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
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
    var symbol = l222;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l250 = {name: "CHAR"};
(function(){
    return (l222).value = ({car: l44.function(l250, (function (v607,v608){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v609,v610){
                        return l112.function("(function(){", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function(l112.function("var ", "string", " = ", v609, ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l112.function("var ", "index", " = ", v610, ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l112.function("if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l112.function("if (typeof ", "index", " != '", "number", "')", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function("throw 'The value ' + ", "index", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l112.function("return ", (function(){
                            return "string.charCodeAt(index)";
                        })(), ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v607),(function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v608));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l222).value = ({car: l44.function(l67, (function (v611,v612){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v613,v614){
                        return l112.function("(function(){", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function(l112.function("var ", "string1", " = ", v613, ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l112.function("var ", "string2", " = ", v614, ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l112.function("if (typeof ", "string1", " != '", "string", "')", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function("throw 'The value ' + ", "string1", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l112.function("if (typeof ", "string2", " != '", "string", "')", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function("throw 'The value ' + ", "string2", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l112.function("return ", (function(){
                            return "string1.concat(string2)";
                        })(), ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v611),(function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v612));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l251 = {name: "FUNCALL"};
(l222).value = ({car: l44.function(l251, (function (v616){
    if (arguments.length < 1) throw 'too few arguments';
    var v615= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v615 = {car: arguments[i], cdr: 
    v615};
    return (function(){
        try {
            return (function(){
                return l112.function("(", (function(){
                    var symbol = l119;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v616), ")(", l114.function(l68.function((function(){
                    var symbol = l119;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v615), ", "), ")");
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
    var symbol = l222;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l252 = {name: "APPLY"};
(l222).value = ({car: l44.function(l252, (function (v618){
    if (arguments.length < 1) throw 'too few arguments';
    var v617= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v617 = {car: arguments[i], cdr: 
    v617};
    return (function(){
        try {
            return (function(){
                return (l11.function(v617) !== l3.value ? l112.function("(", (function(){
                    var symbol = l119;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v618), ")()") : (function(v619,v620){
                    return l112.function("(function(){", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l117.function("var f = ", (function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v618), ";", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var args = [", l114.function(l68.function((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v619), ", "), "];", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var tail = (", (function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v620), ");", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "while (tail != ", (function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l3.value), "){", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    args.push(tail.car);", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    tail = tail.cdr;", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "}", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "return f.apply(this, args);", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()");
                })(l80.function(v617),(function(){
                    var tmp = l79.function(v617);
                    return tmp === l3.value? l3.value: tmp.car;
                })()));
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
    var symbol = l222;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l253 = {name: "JS-EVAL"};
(function(){
    return (l222).value = ({car: l44.function(l253, (function (v621){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v622){
                        return l112.function("(function(){", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function(l112.function("var ", "string", " = ", v622, ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l112.function("if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l112.function("return ", (function(){
                            return "eval.apply(window, [string])";
                        })(), ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v621));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l254 = {name: "ERROR"};
(function(){
    return (l222).value = ({car: l44.function(l254, (function (v623){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v624){
                        return l112.function("(function(){", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function("throw ", v624, ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v623));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l255 = {name: "NEW"};
(function(){
    return (l222).value = ({car: l44.function(l255, (function (){
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
                if (cf.type == 'block' && cf.id == 228)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l256 = {name: "OBJECTP"};
(function(){
    return (l222).value = ({car: l44.function(l256, (function (v625){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v626){
                        return l118.function(l112.function("(typeof (", v626, ") === 'object')"));
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v625));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l257 = {name: "OGET"};
(function(){
    return (l222).value = ({car: l44.function(l257, (function (v627,v628){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v629,v630){
                        return l112.function("(function(){", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function("var tmp = ", "(", v629, ")[", v630, "];", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp == undefined? ", (function(){
                            var symbol = l119;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ": tmp ;", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v627),(function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v628));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l258 = {name: "OSET"};
(function(){
    return (l222).value = ({car: l44.function(l258, (function (v631,v632,v633){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v634,v635,v636){
                        return l112.function("((", v634, ")[", v635, "] = ", v636, ")");
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v631),(function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v632),(function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v633));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l259 = {name: "IN"};
(function(){
    return (l222).value = ({car: l44.function(l259, (function (v637,v638){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v639,v640){
                        return l118.function(l112.function("((", v639, ") in (", v640, "))"));
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v637),(function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v638));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l260 = {name: "FUNCTIONP"};
(function(){
    return (l222).value = ({car: l44.function(l260, (function (v641){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v642){
                        return l118.function(l112.function("(typeof ", v642, " == 'function')"));
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v641));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l261 = {name: "WRITE-STRING"};
(function(){
    return (l222).value = ({car: l44.function(l261, (function (v643){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v644){
                        return l112.function("(function(){", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function(l112.function("var ", "x", " = ", v644, ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l112.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l117.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l112.function("return ", (function(){
                            return "lisp.write(x)";
                        })(), ";", (function(){
                            var symbol = l111;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v643));
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
        var symbol = l222;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    (l170).function = (function(v647){
        ((v647)["fname"] = "MACRO");
        return v647;
    })((function (v645){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v645;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(v646){
                        return (((l146.function(v646) === l170)?l4.value: l3.value) !== l3.value ? v646 : l3.value);
                    })(l158.function(v645, (function(){
                        var symbol = l159;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l97)) : l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 235)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l170;
})();
var l262 = {name: "LS-MACROEXPAND-1"};
(function(){
    (l262).function = (function(v652){
        ((v652)["fname"] = "LS-MACROEXPAND-1");
        return v652;
    })((function (v648){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v649){
                        return (v649 !== l3.value ? (function(v650){
                            (l59.function(v650) !== l3.value ? (function(){
                                return (function(v651){
                                    l149.function(v649, v651);
                                    return v650 = v651;
                                })((function(){
                                    var symbol = l204;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v650));
                            })() : l3.value);
                            return (function(){
                                var f = v650;
                                var args = [];
                                var tail = ((function(){
                                    var tmp = v648;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                                while (tail != l3.value){
                                    args.push(tail.car);
                                    tail = tail.cdr;
                                }
                                return f.apply(this, args);
                            })();
                        })(l147.function(v649)) : v648);
                    })(l170.function((function(){
                        var tmp = v648;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 236)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l262;
})();
var l263 = {name: "COMPILE-FUNCALL"};
(function(){
    (l263).function = (function(v655){
        ((v655)["fname"] = "COMPILE-FUNCALL");
        return v655;
    })((function (v653,v654){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((((function(){
                        var tmp = v653;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? l172.function(v653, l97, l176) : l3.value) !== l3.value ? l112.function((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l44.function(l138), l44.function(v653))), ".function(", l114.function(l68.function((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v654), ", "), ")") : l112.function((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l44.function(l97), l44.function(v653))), "(", l114.function(l68.function((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v654), ", "), ")"));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 237)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l263;
})();
(function(){
    (l192).function = (function(v658){
        ((v658)["fname"] = "LS-COMPILE-BLOCK");
        return v658;
    })((function (v656,v657){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v657=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (v657 !== l3.value ? l112.function(l192.function(l80.function(v656)), "return ", (function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = l79.function(v656);
                        return tmp === l3.value? l3.value: tmp.car;
                    })()), ";") : l115.function(l83.function((function(){
                        var symbol = l167;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l68.function((function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v656)), l112.function(";", (function(){
                        var symbol = l111;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 238)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l192;
})();
(function(){
    (l119).function = (function(v665){
        ((v665)["fname"] = "LS-COMPILE");
        return v665;
    })((function (v659){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v659;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v660){
                            return (((l146.function(v660) === l164)?l4.value: l3.value) !== l3.value ? (function(){
                                return l147.function(v660);
                            })() : (l172.function(v659, l98, l175) !== l3.value ? (function(){
                                return l112.function(l119.function(l62.function(l44.function(l138), l44.function(v659))), ".value");
                            })() : (function(){
                                return l119.function(l62.function(l44.function(l240), l44.function(l62.function(l44.function(l138), l44.function(v659)))));
                            })()));
                        })(l158.function(v659, (function(){
                            var symbol = l159;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l98));
                    })() : (l74.function(v659) !== l3.value ? (function(){
                        return l16.function(v659);
                    })() : (((typeof(v659) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l112.function("\"", l122.function(v659), "\"");
                    })() : (l59.function(v659) !== l3.value ? (function(){
                        return (function(v661,v662){
                            return (l90.function(v661, (function(){
                                var symbol = l178;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== l3.value ? (function(){
                                return (function(v663){
                                    return (function(){
                                        var f = v663;
                                        var args = [];
                                        var tail = (v662);
                                        while (tail != l3.value){
                                            args.push(tail.car);
                                            tail = tail.cdr;
                                        }
                                        return f.apply(this, args);
                                    })();
                                })(l41.function(l90.function(v661, (function(){
                                    var symbol = l178;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })())));
                            })() : ((l90.function(v661, (function(){
                                var symbol = l222;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== l3.value ? l28.function(l172.function(v661, l97, l174)) : l3.value) !== l3.value ? (function(){
                                return (function(v664){
                                    return (function(){
                                        var f = v664;
                                        var args = [];
                                        var tail = (v662);
                                        while (tail != l3.value){
                                            args.push(tail.car);
                                            tail = tail.cdr;
                                        }
                                        return f.apply(this, args);
                                    })();
                                })(l41.function(l90.function(v661, (function(){
                                    var symbol = l222;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })())));
                            })() : (function(){
                                return (l170.function(v661) !== l3.value ? l119.function(l262.function(v659)) : l263.function(v661, v662));
                            })()));
                        })((function(){
                            var tmp = v659;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(),(function(){
                            var tmp = v659;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : l3.value))));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 239)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l119;
})();
var l264 = {name: "LS-COMPILE-TOPLEVEL"};
(function(){
    (l264).function = (function(v670){
        ((v670)["fname"] = "LS-COMPILE-TOPLEVEL");
        return v670;
    })((function (v666){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v667){
                        try {
                            var tmp;
                            tmp = l165.value;
                            l165.value = v667;
                            v667 = tmp;
                            return ((((function(){
                                var tmp = v666;
                                return (typeof tmp == 'object' && 'car' in tmp);
                            })()?l4.value: l3.value) !== l3.value ? (((function(){
                                var tmp = v666;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l205)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return (function(v668){
                                    return l114.function(l83.function((function(){
                                        var symbol = l167;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })(), v668));
                                })(l68.function((function(){
                                    var symbol = l264;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })(), (function(){
                                    var tmp = v666;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })()));
                            })() : (function(){
                                return (function(v669){
                                    return l112.function(l115.function(l168.function(), l112.function(";", (function(){
                                        var symbol = l111;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })())), (v669 !== l3.value ? l112.function(v669, ";", (function(){
                                        var symbol = l111;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()) : ""));
                                })(l119.function(v666));
                            })());
                        }
                        finally {
                            l165.value = v667;
                        }
                    })(l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 240)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l264;
})();
var l265 = {name: "WITH-COMPILATION-UNIT"};
l265;
(function(){
    (l204).function = (function(v676){
        ((v676)["fname"] = "EVAL");
        return v676;
    })((function (v671){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v675){
                        return (function(){
                            var string = v675;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            return eval.apply(window, [string]);
                        })();
                    })((function(v672){
                        (function(){
                            try {
                                return (function(){
                                    return (function(v673,v674){
                                        (function(){
                                            while(v673 !== l3.value){
                                                v674 = (function(){
                                                    var tmp = v673;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    (v674)();
                                                    return l3.value;
                                                })();
                                                v673 = (function(){
                                                    var tmp = v673;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return l3.value;
                                    })((function(){
                                        var symbol = l143;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })(),l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 242)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v672;
                    })((function(){
                        (l143).value = l3.value;
                        return l264.function(v671);
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 241)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l204;
})();
(function(){
    var string = "var lisp";
    if (typeof string != 'string')
        throw 'The value ' + string + ' is not a type string.';
    return eval.apply(window, [string]);
})();
(lisp = {});
(lisp.read = (function(){
    var symbol = l142;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.print = (function(){
    var symbol = l121;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.eval = (function(){
    var symbol = l204;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.compile = (function(){
    var symbol = l264;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.evalString = (function (v677){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return l204.function(l142.function(v677));

}));
(lisp.compileString = (function (v678){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return l264.function(l142.function(v678));

}));
var l266 = {car: {car: l265, cdr: "l265"}, cdr: {car: {car: l264, cdr: "l264"}, cdr: {car: {car: l263, cdr: "l263"}, cdr: {car: {car: l262, cdr: "l262"}, cdr: {car: {car: l261, cdr: "l261"}, cdr: {car: {car: l260, cdr: "l260"}, cdr: {car: {car: l259, cdr: "l259"}, cdr: {car: {car: l258, cdr: "l258"}, cdr: {car: {car: l257, cdr: "l257"}, cdr: {car: {car: l256, cdr: "l256"}, cdr: {car: {car: l255, cdr: "l255"}, cdr: {car: {car: l254, cdr: "l254"}, cdr: {car: {car: l253, cdr: "l253"}, cdr: {car: {car: l252, cdr: "l252"}, cdr: {car: {car: l251, cdr: "l251"}, cdr: {car: {car: l250, cdr: "l250"}, cdr: {car: {car: l249, cdr: "l249"}, cdr: {car: {car: l248, cdr: "l248"}, cdr: {car: {car: l247, cdr: "l247"}, cdr: {car: {car: l246, cdr: "l246"}, cdr: {car: {car: l245, cdr: "l245"}, cdr: {car: {car: l244, cdr: "l244"}, cdr: {car: {car: l243, cdr: "l243"}, cdr: {car: {car: l242, cdr: "l242"}, cdr: {car: {car: l241, cdr: "l241"}, cdr: {car: {car: l240, cdr: "l240"}, cdr: {car: {car: l239, cdr: "l239"}, cdr: {car: {car: l238, cdr: "l238"}, cdr: {car: {car: l237, cdr: "l237"}, cdr: {car: {car: l236, cdr: "l236"}, cdr: {car: {car: l235, cdr: "l235"}, cdr: {car: {car: l234, cdr: "l234"}, cdr: {car: {car: l233, cdr: "l233"}, cdr: {car: {car: l232, cdr: "l232"}, cdr: {car: {car: l231, cdr: "l231"}, cdr: {car: {car: l230, cdr: "l230"}, cdr: {car: {car: l229, cdr: "l229"}, cdr: {car: {car: l228, cdr: "l228"}, cdr: {car: {car: l227, cdr: "l227"}, cdr: {car: {car: l226, cdr: "l226"}, cdr: {car: {car: l225, cdr: "l225"}, cdr: {car: {car: l224, cdr: "l224"}, cdr: {car: {car: l223, cdr: "l223"}, cdr: {car: {car: l222, cdr: "l222"}, cdr: {car: {car: l221, cdr: "l221"}, cdr: {car: {car: l220, cdr: "l220"}, cdr: {car: {car: l219, cdr: "l219"}, cdr: {car: {car: l218, cdr: "l218"}, cdr: {car: {car: l217, cdr: "l217"}, cdr: {car: {car: l216, cdr: "l216"}, cdr: {car: {car: l215, cdr: "l215"}, cdr: {car: {car: l214, cdr: "l214"}, cdr: {car: {car: l213, cdr: "l213"}, cdr: {car: {car: l212, cdr: "l212"}, cdr: {car: {car: l211, cdr: "l211"}, cdr: {car: {car: l210, cdr: "l210"}, cdr: {car: {car: l209, cdr: "l209"}, cdr: {car: {car: l208, cdr: "l208"}, cdr: {car: {car: l207, cdr: "l207"}, cdr: {car: {car: l206, cdr: "l206"}, cdr: {car: {car: l205, cdr: "l205"}, cdr: {car: {car: l204, cdr: "l204"}, cdr: {car: {car: l203, cdr: "l203"}, cdr: {car: {car: l202, cdr: "l202"}, cdr: {car: {car: l201, cdr: "l201"}, cdr: {car: {car: l200, cdr: "l200"}, cdr: {car: {car: l199, cdr: "l199"}, cdr: {car: {car: l198, cdr: "l198"}, cdr: {car: {car: l197, cdr: "l197"}, cdr: {car: {car: l196, cdr: "l196"}, cdr: {car: {car: l195, cdr: "l195"}, cdr: {car: {car: l194, cdr: "l194"}, cdr: {car: {car: l193, cdr: "l193"}, cdr: {car: {car: l192, cdr: "l192"}, cdr: {car: {car: l191, cdr: "l191"}, cdr: {car: {car: l190, cdr: "l190"}, cdr: {car: {car: l189, cdr: "l189"}, cdr: {car: {car: l188, cdr: "l188"}, cdr: {car: {car: l187, cdr: "l187"}, cdr: {car: {car: l186, cdr: "l186"}, cdr: {car: {car: l185, cdr: "l185"}, cdr: {car: {car: l183, cdr: "l183"}, cdr: {car: {car: l182, cdr: "l182"}, cdr: {car: {car: l181, cdr: "l181"}, cdr: {car: {car: l180, cdr: "l180"}, cdr: {car: {car: l179, cdr: "l179"}, cdr: {car: {car: l178, cdr: "l178"}, cdr: {car: {car: l177, cdr: "l177"}, cdr: {car: {car: l176, cdr: "l176"}, cdr: {car: {car: l175, cdr: "l175"}, cdr: {car: {car: l174, cdr: "l174"}, cdr: {car: {car: l173, cdr: "l173"}, cdr: {car: {car: l172, cdr: "l172"}, cdr: {car: {car: l171, cdr: "l171"}, cdr: {car: {car: l170, cdr: "l170"}, cdr: {car: {car: l169, cdr: "l169"}, cdr: {car: {car: l168, cdr: "l168"}, cdr: {car: {car: l167, cdr: "l167"}, cdr: {car: {car: l166, cdr: "l166"}, cdr: {car: {car: l165, cdr: "l165"}, cdr: {car: {car: l164, cdr: "l164"}, cdr: {car: {car: l163, cdr: "l163"}, cdr: {car: {car: l162, cdr: "l162"}, cdr: {car: {car: l161, cdr: "l161"}, cdr: {car: {car: l160, cdr: "l160"}, cdr: {car: {car: l159, cdr: "l159"}, cdr: {car: {car: l158, cdr: "l158"}, cdr: {car: {car: l157, cdr: "l157"}, cdr: {car: {car: l156, cdr: "l156"}, cdr: {car: {car: l155, cdr: "l155"}, cdr: {car: {car: l154, cdr: "l154"}, cdr: {car: {car: l153, cdr: "l153"}, cdr: {car: {car: l152, cdr: "l152"}, cdr: {car: {car: l151, cdr: "l151"}, cdr: {car: {car: l150, cdr: "l150"}, cdr: {car: {car: l149, cdr: "l149"}, cdr: {car: {car: l148, cdr: "l148"}, cdr: {car: {car: l147, cdr: "l147"}, cdr: {car: {car: l146, cdr: "l146"}, cdr: {car: {car: l145, cdr: "l145"}, cdr: {car: {car: l144, cdr: "l144"}, cdr: {car: {car: l143, cdr: "l143"}, cdr: {car: {car: l142, cdr: "l142"}, cdr: {car: {car: l141, cdr: "l141"}, cdr: {car: {car: l140, cdr: "l140"}, cdr: {car: {car: l139, cdr: "l139"}, cdr: {car: {car: l138, cdr: "l138"}, cdr: {car: {car: l137, cdr: "l137"}, cdr: {car: {car: l136, cdr: "l136"}, cdr: {car: {car: l135, cdr: "l135"}, cdr: {car: {car: l134, cdr: "l134"}, cdr: {car: {car: l133, cdr: "l133"}, cdr: {car: {car: l132, cdr: "l132"}, cdr: {car: {car: l131, cdr: "l131"}, cdr: {car: {car: l130, cdr: "l130"}, cdr: {car: {car: l129, cdr: "l129"}, cdr: {car: {car: l128, cdr: "l128"}, cdr: {car: {car: l127, cdr: "l127"}, cdr: {car: {car: l126, cdr: "l126"}, cdr: {car: {car: l125, cdr: "l125"}, cdr: {car: {car: l124, cdr: "l124"}, cdr: {car: {car: l123, cdr: "l123"}, cdr: {car: {car: l122, cdr: "l122"}, cdr: {car: {car: l121, cdr: "l121"}, cdr: {car: {car: l120, cdr: "l120"}, cdr: {car: {car: l119, cdr: "l119"}, cdr: {car: {car: l118, cdr: "l118"}, cdr: {car: {car: l117, cdr: "l117"}, cdr: {car: {car: l116, cdr: "l116"}, cdr: {car: {car: l115, cdr: "l115"}, cdr: {car: {car: l114, cdr: "l114"}, cdr: {car: {car: l113, cdr: "l113"}, cdr: {car: {car: l112, cdr: "l112"}, cdr: {car: {car: l111, cdr: "l111"}, cdr: {car: {car: l110, cdr: "l110"}, cdr: {car: {car: l109, cdr: "l109"}, cdr: {car: {car: l108, cdr: "l108"}, cdr: {car: {car: l107, cdr: "l107"}, cdr: {car: {car: l106, cdr: "l106"}, cdr: {car: {car: l105, cdr: "l105"}, cdr: {car: {car: l104, cdr: "l104"}, cdr: {car: {car: l103, cdr: "l103"}, cdr: {car: {car: l102, cdr: "l102"}, cdr: {car: {car: l101, cdr: "l101"}, cdr: {car: {car: l100, cdr: "l100"}, cdr: {car: {car: l99, cdr: "l99"}, cdr: {car: {car: l98, cdr: "l98"}, cdr: {car: {car: l97, cdr: "l97"}, cdr: {car: {car: l96, cdr: "l96"}, cdr: {car: {car: l95, cdr: "l95"}, cdr: {car: {car: l94, cdr: "l94"}, cdr: {car: {car: l93, cdr: "l93"}, cdr: {car: {car: l92, cdr: "l92"}, cdr: {car: {car: l91, cdr: "l91"}, cdr: {car: {car: l90, cdr: "l90"}, cdr: {car: {car: l89, cdr: "l89"}, cdr: {car: {car: l88, cdr: "l88"}, cdr: {car: {car: l87, cdr: "l87"}, cdr: {car: {car: l86, cdr: "l86"}, cdr: {car: {car: l85, cdr: "l85"}, cdr: {car: {car: l84, cdr: "l84"}, cdr: {car: {car: l83, cdr: "l83"}, cdr: {car: {car: l82, cdr: "l82"}, cdr: {car: {car: l81, cdr: "l81"}, cdr: {car: {car: l80, cdr: "l80"}, cdr: {car: {car: l79, cdr: "l79"}, cdr: {car: {car: l78, cdr: "l78"}, cdr: {car: {car: l77, cdr: "l77"}, cdr: {car: {car: l76, cdr: "l76"}, cdr: {car: {car: l75, cdr: "l75"}, cdr: {car: {car: l74, cdr: "l74"}, cdr: {car: {car: l73, cdr: "l73"}, cdr: {car: {car: l72, cdr: "l72"}, cdr: {car: {car: l71, cdr: "l71"}, cdr: {car: {car: l70, cdr: "l70"}, cdr: {car: {car: l69, cdr: "l69"}, cdr: {car: {car: l68, cdr: "l68"}, cdr: {car: {car: l67, cdr: "l67"}, cdr: {car: {car: l66, cdr: "l66"}, cdr: {car: {car: l65, cdr: "l65"}, cdr: {car: {car: l64, cdr: "l64"}, cdr: {car: {car: l63, cdr: "l63"}, cdr: {car: {car: l62, cdr: "l62"}, cdr: {car: {car: l61, cdr: "l61"}, cdr: {car: {car: l60, cdr: "l60"}, cdr: {car: {car: l59, cdr: "l59"}, cdr: {car: {car: l58, cdr: "l58"}, cdr: {car: {car: l57, cdr: "l57"}, cdr: {car: {car: l56, cdr: "l56"}, cdr: {car: {car: l55, cdr: "l55"}, cdr: {car: {car: l54, cdr: "l54"}, cdr: {car: {car: l53, cdr: "l53"}, cdr: {car: {car: l52, cdr: "l52"}, cdr: {car: {car: l51, cdr: "l51"}, cdr: {car: {car: l50, cdr: "l50"}, cdr: {car: {car: l49, cdr: "l49"}, cdr: {car: {car: l48, cdr: "l48"}, cdr: {car: {car: l47, cdr: "l47"}, cdr: {car: {car: l46, cdr: "l46"}, cdr: {car: {car: l45, cdr: "l45"}, cdr: {car: {car: l44, cdr: "l44"}, cdr: {car: {car: l43, cdr: "l43"}, cdr: {car: {car: l42, cdr: "l42"}, cdr: {car: {car: l41, cdr: "l41"}, cdr: {car: {car: l40, cdr: "l40"}, cdr: {car: {car: l39, cdr: "l39"}, cdr: {car: {car: l38, cdr: "l38"}, cdr: {car: {car: l37, cdr: "l37"}, cdr: {car: {car: l36, cdr: "l36"}, cdr: {car: {car: l35, cdr: "l35"}, cdr: {car: {car: l34, cdr: "l34"}, cdr: {car: {car: l33, cdr: "l33"}, cdr: {car: {car: l32, cdr: "l32"}, cdr: {car: {car: l31, cdr: "l31"}, cdr: {car: {car: l30, cdr: "l30"}, cdr: {car: {car: l29, cdr: "l29"}, cdr: {car: {car: l28, cdr: "l28"}, cdr: {car: {car: l27, cdr: "l27"}, cdr: {car: {car: l26, cdr: "l26"}, cdr: {car: {car: l25, cdr: "l25"}, cdr: {car: {car: l24, cdr: "l24"}, cdr: {car: {car: l23, cdr: "l23"}, cdr: {car: {car: l22, cdr: "l22"}, cdr: {car: {car: l21, cdr: "l21"}, cdr: {car: {car: l20, cdr: "l20"}, cdr: {car: {car: l19, cdr: "l19"}, cdr: {car: {car: l18, cdr: "l18"}, cdr: {car: {car: l17, cdr: "l17"}, cdr: {car: {car: l16, cdr: "l16"}, cdr: {car: {car: l15, cdr: "l15"}, cdr: {car: {car: l14, cdr: "l14"}, cdr: {car: {car: l13, cdr: "l13"}, cdr: {car: {car: l12, cdr: "l12"}, cdr: {car: {car: l11, cdr: "l11"}, cdr: {car: {car: l10, cdr: "l10"}, cdr: {car: {car: l9, cdr: "l9"}, cdr: {car: {car: l8, cdr: "l8"}, cdr: {car: {car: l7, cdr: "l7"}, cdr: {car: {car: l6, cdr: "l6"}, cdr: {car: {car: l5, cdr: "l5"}, cdr: {car: {car: l4, cdr: "l4"}, cdr: {car: {car: l3, cdr: "l3"}, cdr: {car: {car: l2, cdr: "l2"}, cdr: {car: {car: l1, cdr: "l1"}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
var l267 = {name: "BODY"};
var l268 = {name: "CHECK"};
var l269 = {name: "DECLS"};
var l270 = {name: "DECL"};
var l271 = {name: "NAME"};
var l272 = {name: "ARGS"};
var l273 = {name: "ARG"};
var l274 = {name: "FORM"};
var l275 = {name: "FORM1"};
var l276 = {name: "RESULT"};
var l277 = {name: "VALUE"};
var l278 = {name: "FORMS"};
var l279 = {name: "G"};
var l280 = {name: "CLAUSULES"};
var l281 = {name: "!FORM"};
var l282 = {name: "CLAUSULE"};
var l283 = {name: "ITER"};
var l284 = {name: "G!TO"};
var l285 = {name: "VAR"};
var l286 = {name: "TO"};
var l287 = {name: "G!LIST"};
var l288 = {name: "X"};
var l289 = {name: "PLACE"};
var l290 = {name: "DELTA"};
var l291 = {name: "CONDITION"};
var l292 = {name: "DOCSTRING"};
var l293 = {name: "&BODY"};
var l294 = {car: {car: {car: l4, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l175, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l3, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l175, cdr: l3}, cdr: l3}}}}, cdr: l3}}, cdr: {car: {car: {car: l204, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l265, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l183, cdr: {car: l267, cdr: l3}}, cdr: {car: {car: l139, cdr: {car: {car: l56, cdr: {car: {car: l205, cdr: {car: {car: l193, cdr: {car: l143, cdr: {car: l3, cdr: l3}}}, cdr: {car: {car: l140, cdr: {car: l267, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l49, cdr: {car: {car: l268, cdr: {car: l143, cdr: l3}}, cdr: {car: {car: l251, cdr: {car: l268, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l264, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l119, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l192, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l263, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l262, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l170, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l226, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l225, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l269, cdr: {car: l183, cdr: {car: l267, cdr: l3}}}, cdr: {car: {car: l139, cdr: {car: {car: l120, cdr: {car: {car: l140, cdr: {car: {car: l68, cdr: {car: {car: l191, cdr: {car: {car: l270, cdr: l3}, cdr: {car: {car: l139, cdr: {car: {car: l112, cdr: {car: "var ", cdr: {car: {car: l141, cdr: {car: {car: l40, cdr: {car: l270, cdr: l3}}, cdr: l3}}, cdr: {car: " = ", cdr: {car: {car: l141, cdr: {car: {car: l42, cdr: {car: l270, cdr: l3}}, cdr: l3}}, cdr: {car: ";", cdr: {car: l111, cdr: l3}}}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l269, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l140, cdr: {car: {car: l68, cdr: {car: {car: l191, cdr: {car: {car: l270, cdr: l3}, cdr: {car: {car: l139, cdr: {car: {car: l112, cdr: {car: "if (typeof ", cdr: {car: {car: l141, cdr: {car: {car: l40, cdr: {car: l270, cdr: l3}}, cdr: l3}}, cdr: {car: " != '", cdr: {car: {car: l141, cdr: {car: {car: l41, cdr: {car: l270, cdr: l3}}, cdr: l3}}, cdr: {car: "')", cdr: {car: l111, cdr: {car: {car: l117, cdr: {car: "throw 'The value ' + ", cdr: {car: {car: l141, cdr: {car: {car: l40, cdr: {car: l270, cdr: l3}}, cdr: l3}}, cdr: {car: " + ' is not a type ", cdr: {car: {car: l141, cdr: {car: {car: l41, cdr: {car: l270, cdr: l3}}, cdr: l3}}, cdr: {car: ".';", cdr: {car: l111, cdr: l3}}}}}}}, cdr: l3}}}}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l269, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l112, cdr: {car: "return ", cdr: {car: {car: l205, cdr: {car: {car: l140, cdr: {car: l267, cdr: l3}}, cdr: l3}}, cdr: {car: ";", cdr: {car: l111, cdr: l3}}}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l224, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l271, cdr: {car: l272, cdr: {car: l183, cdr: {car: l267, cdr: l3}}}}, cdr: {car: {car: l139, cdr: {car: {car: l205, cdr: {car: {car: l223, cdr: {car: {car: l141, cdr: {car: l271, cdr: l3}}, cdr: {car: {car: l141, cdr: {car: l272, cdr: l3}}, cdr: {car: {car: l208, cdr: {car: {car: l141, cdr: {car: {car: l68, cdr: {car: {car: l191, cdr: {car: {car: l273, cdr: l3}, cdr: {car: {car: l139, cdr: {car: {car: {car: l141, cdr: {car: l273, cdr: l3}}, cdr: {car: {car: l119, cdr: {car: {car: l141, cdr: {car: l273, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l272, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l140, cdr: {car: l267, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l223, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l271, cdr: {car: l272, cdr: {car: l183, cdr: {car: l267, cdr: l3}}}}, cdr: {car: {car: l139, cdr: {car: {car: l48, cdr: {car: {car: l44, cdr: {car: {car: l138, cdr: {car: {car: l141, cdr: {car: l271, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l191, cdr: {car: {car: l141, cdr: {car: l272, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: {car: l141, cdr: {car: l271, cdr: l3}}, cdr: {car: {car: l140, cdr: {car: l267, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l222, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l139, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l274, cdr: l3}, cdr: {car: {car: l220, cdr: {car: l274, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l221, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l220, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l216, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l215, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l207, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l206, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l271, cdr: {car: l272, cdr: {car: l274, cdr: l3}}}, cdr: {car: {car: l139, cdr: {car: {car: l179, cdr: {car: {car: l141, cdr: {car: l271, cdr: l3}}, cdr: {car: {car: l141, cdr: {car: l272, cdr: l3}}, cdr: {car: {car: l119, cdr: {car: {car: l141, cdr: {car: l274, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l200, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l199, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l122, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l190, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l189, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l188, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l187, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l186, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l185, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l179, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l271, cdr: {car: l272, cdr: {car: l183, cdr: {car: l267, cdr: l3}}}}, cdr: {car: {car: l139, cdr: {car: {car: l48, cdr: {car: {car: l44, cdr: {car: {car: l138, cdr: {car: {car: l141, cdr: {car: l271, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l191, cdr: {car: {car: l141, cdr: {car: l272, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: {car: l141, cdr: {car: l271, cdr: l3}}, cdr: {car: {car: l140, cdr: {car: l267, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l178, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l173, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l172, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l171, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l169, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l168, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l167, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l166, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l163, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l162, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l161, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l157, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l154, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l153, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l152, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l151, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l149, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l148, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l147, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l146, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l145, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l144, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l142, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l134, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l136, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l135, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l133, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l132, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l131, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l130, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l129, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l128, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l127, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l126, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l125, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l124, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l123, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l95, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l121, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l120, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l183, cdr: {car: l267, cdr: l3}}, cdr: {car: {car: l139, cdr: {car: {car: l112, cdr: {car: "(function(){", cdr: {car: l111, cdr: {car: {car: l117, cdr: {car: {car: l140, cdr: {car: l267, cdr: l3}}, cdr: l3}}, cdr: {car: "})()", cdr: l3}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l118, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l16, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l117, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l116, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l115, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l114, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l113, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l98, cdr: {car: l183, cdr: {car: l274, cdr: l3}}}, cdr: {car: {car: l139, cdr: {car: {car: l193, cdr: {car: {car: l141, cdr: {car: l98, cdr: l3}}, cdr: {car: {car: l112, cdr: {car: {car: l141, cdr: {car: l98, cdr: l3}}, cdr: {car: {car: l205, cdr: {car: {car: l140, cdr: {car: l274, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l112, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l110, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l109, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l108, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l107, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l105, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l103, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l104, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l102, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l101, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l100, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l96, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l94, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l93, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l92, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l91, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l90, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l89, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l88, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l87, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l86, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l85, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l84, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l83, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l82, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l81, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l80, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l79, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l78, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l77, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l59, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l76, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l75, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l74, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l73, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l72, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l71, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l70, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l69, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l68, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l67, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l66, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l65, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l64, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l63, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l62, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l61, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l60, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l58, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l57, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l275, cdr: {car: l276, cdr: {car: l183, cdr: {car: l267, cdr: l3}}}}, cdr: {car: {car: l139, cdr: {car: {car: l56, cdr: {car: {car: l205, cdr: {car: {car: l141, cdr: {car: l275, cdr: l3}}, cdr: {car: {car: l141, cdr: {car: l276, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l140, cdr: {car: l267, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l56, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l274, cdr: {car: l183, cdr: {car: l267, cdr: l3}}}, cdr: {car: {car: l208, cdr: {car: {car: {car: l277, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l139, cdr: {car: {car: l208, cdr: {car: {car: {car: {car: l141, cdr: {car: l277, cdr: l3}}, cdr: {car: {car: l141, cdr: {car: l274, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l140, cdr: {car: l267, cdr: l3}}, cdr: {car: {car: l141, cdr: {car: l277, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l55, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l183, cdr: {car: l278, cdr: l3}}, cdr: {car: {car: l51, cdr: {car: {car: {car: l11, cdr: {car: l278, cdr: l3}}, cdr: {car: l3, cdr: l3}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l32, cdr: {car: l278, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l31, cdr: {car: l278, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l208, cdr: {car: {car: {car: l279, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l139, cdr: {car: {car: l208, cdr: {car: {car: {car: {car: l141, cdr: {car: l279, cdr: l3}}, cdr: {car: {car: l141, cdr: {car: {car: l31, cdr: {car: l278, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l180, cdr: {car: {car: l141, cdr: {car: l279, cdr: l3}}, cdr: {car: {car: l141, cdr: {car: l279, cdr: l3}}, cdr: {car: {car: l55, cdr: {car: {car: l140, cdr: {car: {car: l32, cdr: {car: l278, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l54, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l183, cdr: {car: l278, cdr: l3}}, cdr: {car: {car: l51, cdr: {car: {car: {car: l11, cdr: {car: l278, cdr: l3}}, cdr: {car: l4, cdr: l3}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l32, cdr: {car: l278, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l31, cdr: {car: l278, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l139, cdr: {car: {car: l180, cdr: {car: {car: l141, cdr: {car: {car: l31, cdr: {car: l278, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l54, cdr: {car: {car: l140, cdr: {car: {car: l32, cdr: {car: l278, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l53, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l274, cdr: {car: l183, cdr: {car: l280, cdr: l3}}}, cdr: {car: {car: l139, cdr: {car: {car: l52, cdr: {car: {car: l141, cdr: {car: l274, cdr: l3}}, cdr: {car: {car: l140, cdr: {car: {car: l62, cdr: {car: l280, cdr: {car: {car: l139, cdr: {car: {car: {car: l4, cdr: {car: {car: l254, cdr: {car: "ECASE expression failed.", cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l52, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l274, cdr: {car: l183, cdr: {car: l280, cdr: l3}}}, cdr: {car: {car: l208, cdr: {car: {car: {car: l281, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l139, cdr: {car: {car: l208, cdr: {car: {car: {car: {car: l141, cdr: {car: l281, cdr: l3}}, cdr: {car: {car: l141, cdr: {car: l274, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l51, cdr: {car: {car: l140, cdr: {car: {car: l68, cdr: {car: {car: l191, cdr: {car: {car: l282, cdr: l3}, cdr: {car: {car: l180, cdr: {car: {car: l243, cdr: {car: {car: l31, cdr: {car: l282, cdr: l3}}, cdr: {car: l4, cdr: l3}}}, cdr: {car: l282, cdr: {car: {car: l139, cdr: {car: {car: {car: l27, cdr: {car: {car: l141, cdr: {car: l281, cdr: l3}}, cdr: {car: {car: l138, cdr: {car: {car: l141, cdr: {car: {car: l31, cdr: {car: l282, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l140, cdr: {car: {car: l32, cdr: {car: l282, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l280, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l51, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l183, cdr: {car: l280, cdr: l3}}, cdr: {car: {car: l180, cdr: {car: {car: l11, cdr: {car: l280, cdr: l3}}, cdr: {car: l3, cdr: {car: {car: l180, cdr: {car: {car: l243, cdr: {car: {car: l33, cdr: {car: l280, cdr: l3}}, cdr: {car: l4, cdr: l3}}}, cdr: {car: {car: l139, cdr: {car: {car: l205, cdr: {car: {car: l140, cdr: {car: {car: l35, cdr: {car: l280, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l139, cdr: {car: {car: l180, cdr: {car: {car: l141, cdr: {car: {car: l33, cdr: {car: l280, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l205, cdr: {car: {car: l140, cdr: {car: {car: l35, cdr: {car: l280, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l51, cdr: {car: {car: l140, cdr: {car: {car: l32, cdr: {car: l280, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l50, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l283, cdr: {car: l183, cdr: {car: l267, cdr: l3}}}, cdr: {car: {car: l208, cdr: {car: {car: {car: l284, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: {car: {car: l285, cdr: {car: {car: l40, cdr: {car: l283, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l286, cdr: {car: {car: l41, cdr: {car: l283, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l276, cdr: {car: {car: l42, cdr: {car: l283, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l139, cdr: {car: {car: l155, cdr: {car: l3, cdr: {car: {car: l208, cdr: {car: {car: {car: {car: l141, cdr: {car: l285, cdr: l3}}, cdr: {car: 0, cdr: l3}}, cdr: {car: {car: {car: l141, cdr: {car: l284, cdr: l3}}, cdr: {car: {car: l141, cdr: {car: l286, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l201, cdr: {car: {car: l228, cdr: {car: {car: l141, cdr: {car: l285, cdr: l3}}, cdr: {car: {car: l141, cdr: {car: l284, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l217, cdr: {car: {car: l140, cdr: {car: l267, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l46, cdr: {car: {car: l141, cdr: {car: l285, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l141, cdr: {car: l276, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l49, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l283, cdr: {car: l183, cdr: {car: l267, cdr: l3}}}, cdr: {car: {car: l208, cdr: {car: {car: {car: l285, cdr: {car: {car: l40, cdr: {car: l283, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l287, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l139, cdr: {car: {car: l155, cdr: {car: l3, cdr: {car: {car: l208, cdr: {car: {car: {car: {car: l141, cdr: {car: l287, cdr: l3}}, cdr: {car: {car: l141, cdr: {car: {car: l41, cdr: {car: l283, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: {car: l141, cdr: {car: l285, cdr: l3}}, cdr: {car: l3, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l201, cdr: {car: {car: l141, cdr: {car: l287, cdr: l3}}, cdr: {car: {car: l193, cdr: {car: {car: l141, cdr: {car: l285, cdr: l3}}, cdr: {car: {car: l31, cdr: {car: {car: l141, cdr: {car: l287, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l217, cdr: {car: {car: l140, cdr: {car: l267, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l193, cdr: {car: {car: l141, cdr: {car: l287, cdr: l3}}, cdr: {car: {car: l32, cdr: {car: {car: l141, cdr: {car: l287, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}}, cdr: {car: {car: l141, cdr: {car: {car: l42, cdr: {car: l283, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l48, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l288, cdr: {car: l289, cdr: l3}}, cdr: {car: {car: l139, cdr: {car: {car: l193, cdr: {car: {car: l141, cdr: {car: l289, cdr: l3}}, cdr: {car: {car: l29, cdr: {car: {car: l141, cdr: {car: l288, cdr: l3}}, cdr: {car: {car: l141, cdr: {car: l289, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l47, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l288, cdr: {car: l182, cdr: {car: {car: l290, cdr: {car: 1, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l139, cdr: {car: {car: l193, cdr: {car: {car: l141, cdr: {car: l288, cdr: l3}}, cdr: {car: {car: l20, cdr: {car: {car: l141, cdr: {car: l288, cdr: l3}}, cdr: {car: {car: l141, cdr: {car: l290, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l46, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l288, cdr: {car: l182, cdr: {car: {car: l290, cdr: {car: 1, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l139, cdr: {car: {car: l193, cdr: {car: {car: l141, cdr: {car: l288, cdr: l3}}, cdr: {car: {car: l19, cdr: {car: {car: l141, cdr: {car: l288, cdr: l3}}, cdr: {car: {car: l141, cdr: {car: l290, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l45, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l44, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l43, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l42, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l41, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l40, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l39, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l38, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l37, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l36, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l35, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l34, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l33, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l32, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l31, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l30, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l29, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l28, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l27, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l26, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l25, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l24, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l23, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l22, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l21, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l20, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l19, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l18, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l17, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l15, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l13, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l291, cdr: {car: l183, cdr: {car: l267, cdr: l3}}}, cdr: {car: {car: l139, cdr: {car: {car: l155, cdr: {car: l3, cdr: {car: {car: l201, cdr: {car: {car: l141, cdr: {car: l291, cdr: l3}}, cdr: {car: {car: l140, cdr: {car: l267, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l12, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l182, cdr: {car: l277, cdr: l3}}, cdr: {car: {car: l139, cdr: {car: {car: l210, cdr: {car: l3, cdr: {car: {car: l141, cdr: {car: l277, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l11, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l176, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l10, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l271, cdr: {car: l272, cdr: {car: l183, cdr: {car: l267, cdr: l3}}}}, cdr: {car: {car: l139, cdr: {car: {car: l205, cdr: {car: {car: l2, cdr: {car: {car: l176, cdr: {car: {car: l141, cdr: {car: l271, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l239, cdr: {car: {car: l138, cdr: {car: {car: l141, cdr: {car: l271, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l9, cdr: {car: {car: l141, cdr: {car: {car: l238, cdr: {car: l271, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l141, cdr: {car: l272, cdr: l3}}, cdr: {car: {car: l140, cdr: {car: {car: l180, cdr: {car: {car: l54, cdr: {car: {car: l246, cdr: {car: {car: l31, cdr: {car: l267, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l28, cdr: {car: {car: l11, cdr: {car: {car: l32, cdr: {car: l267, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l139, cdr: {car: {car: {car: l141, cdr: {car: {car: l31, cdr: {car: l267, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: {car: l141, cdr: {car: l271, cdr: l3}}, cdr: {car: {car: l140, cdr: {car: {car: l32, cdr: {car: l267, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l139, cdr: {car: {car: {car: l155, cdr: {car: {car: l141, cdr: {car: l271, cdr: l3}}, cdr: {car: {car: l140, cdr: {car: l267, cdr: l3}}, cdr: l3}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: {car: l138, cdr: {car: {car: l141, cdr: {car: l271, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l9, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l271, cdr: {car: l272, cdr: {car: l183, cdr: {car: l267, cdr: l3}}}}, cdr: {car: {car: l208, cdr: {car: {car: {car: l288, cdr: {car: {car: l15, cdr: {car: "FN", cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l139, cdr: {car: {car: l208, cdr: {car: {car: {car: {car: l141, cdr: {car: l288, cdr: l3}}, cdr: {car: {car: l191, cdr: {car: {car: l141, cdr: {car: l272, cdr: l3}}, cdr: {car: {car: l140, cdr: {car: l267, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l258, cdr: {car: {car: l141, cdr: {car: l288, cdr: l3}}, cdr: {car: "fname", cdr: {car: {car: l141, cdr: {car: l271, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l141, cdr: {car: l288, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l8, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l271, cdr: {car: l277, cdr: {car: l182, cdr: {car: l292, cdr: l3}}}}, cdr: {car: {car: l139, cdr: {car: {car: l205, cdr: {car: {car: l193, cdr: {car: {car: l141, cdr: {car: l271, cdr: l3}}, cdr: {car: {car: l141, cdr: {car: l277, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l140, cdr: {car: {car: l5, cdr: {car: {car: l246, cdr: {car: l292, cdr: l3}}, cdr: {car: {car: l139, cdr: {car: {car: {car: l258, cdr: {car: {car: l138, cdr: {car: {car: l141, cdr: {car: l271, cdr: l3}}, cdr: l3}}, cdr: {car: "vardoc", cdr: {car: {car: l141, cdr: {car: l292, cdr: l3}}, cdr: l3}}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l138, cdr: {car: {car: l141, cdr: {car: l271, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l7, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l271, cdr: {car: l277, cdr: {car: l182, cdr: {car: l292, cdr: l3}}}}, cdr: {car: {car: l139, cdr: {car: {car: l205, cdr: {car: {car: l6, cdr: {car: {car: l17, cdr: {car: {car: l138, cdr: {car: {car: l141, cdr: {car: l271, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l193, cdr: {car: {car: l141, cdr: {car: l271, cdr: l3}}, cdr: {car: {car: l141, cdr: {car: l277, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: {car: l140, cdr: {car: {car: l5, cdr: {car: {car: l246, cdr: {car: l292, cdr: l3}}, cdr: {car: {car: l139, cdr: {car: {car: {car: l258, cdr: {car: {car: l138, cdr: {car: {car: l141, cdr: {car: l271, cdr: l3}}, cdr: l3}}, cdr: {car: "vardoc", cdr: {car: {car: l141, cdr: {car: l292, cdr: l3}}, cdr: l3}}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l138, cdr: {car: {car: l141, cdr: {car: l271, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l6, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l291, cdr: {car: l183, cdr: {car: l267, cdr: l3}}}, cdr: {car: {car: l139, cdr: {car: {car: l180, cdr: {car: {car: l141, cdr: {car: l291, cdr: l3}}, cdr: {car: l3, cdr: {car: {car: l205, cdr: {car: {car: l140, cdr: {car: l267, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l5, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l291, cdr: {car: l183, cdr: {car: l267, cdr: l3}}}, cdr: {car: {car: l139, cdr: {car: {car: l180, cdr: {car: {car: l141, cdr: {car: l291, cdr: l3}}, cdr: {car: {car: l205, cdr: {car: {car: l140, cdr: {car: l267, cdr: l3}}, cdr: l3}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l2, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l183, cdr: {car: l269, cdr: l3}}, cdr: {car: {car: l139, cdr: {car: {car: l203, cdr: {car: {car: l140, cdr: {car: {car: l68, cdr: {car: {car: l191, cdr: {car: {car: l270, cdr: l3}, cdr: {car: {car: l139, cdr: {car: {car: l173, cdr: {car: {car: l138, cdr: {car: {car: l141, cdr: {car: l270, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l269, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l1, cdr: {car: l170, cdr: {car: {car: l191, cdr: {car: {car: l271, cdr: {car: l272, cdr: {car: l183, cdr: {car: l267, cdr: l3}}}}, cdr: {car: {car: l139, cdr: {car: {car: l203, cdr: {car: {car: l169, cdr: {car: {car: l138, cdr: {car: {car: l141, cdr: {car: l271, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l138, cdr: {car: {car: l191, cdr: {car: {car: l141, cdr: {car: {car: l68, cdr: {car: {car: l191, cdr: {car: {car: l288, cdr: l3}, cdr: {car: {car: l180, cdr: {car: {car: l243, cdr: {car: l288, cdr: {car: {car: l138, cdr: {car: l293, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l138, cdr: {car: l183, cdr: l3}}, cdr: {car: l288, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l272, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l140, cdr: {car: l267, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: l3, cdr: {car: l3, cdr: l3}}}};
(function(){
    l107.function(l265);
    l107.function(l264);
    l107.function(l263);
    l107.function(l262);
    l107.function(l261);
    l107.function(l260);
    l107.function(l259);
    l107.function(l258);
    l107.function(l257);
    l107.function(l256);
    l107.function(l255);
    l107.function(l254);
    l107.function(l253);
    l107.function(l252);
    l107.function(l251);
    l107.function(l250);
    l107.function(l249);
    l107.function(l248);
    l107.function(l247);
    l107.function(l246);
    l107.function(l245);
    l107.function(l244);
    l107.function(l243);
    l107.function(l242);
    l107.function(l241);
    l107.function(l240);
    l107.function(l239);
    l107.function(l238);
    l107.function(l237);
    l107.function(l236);
    l107.function(l235);
    l107.function(l234);
    l107.function(l233);
    l107.function(l232);
    l107.function(l231);
    l107.function(l230);
    l107.function(l229);
    l107.function(l228);
    l107.function(l227);
    l107.function(l226);
    l107.function(l225);
    l107.function(l224);
    l107.function(l223);
    l107.function(l222);
    l107.function(l221);
    l107.function(l220);
    l107.function(l219);
    l107.function(l218);
    l107.function(l217);
    l107.function(l216);
    l107.function(l215);
    l107.function(l214);
    l107.function(l213);
    l107.function(l212);
    l107.function(l211);
    l107.function(l210);
    l107.function(l209);
    l107.function(l208);
    l107.function(l207);
    l107.function(l206);
    l107.function(l205);
    l107.function(l204);
    l107.function(l203);
    l107.function(l202);
    l107.function(l201);
    l107.function(l200);
    l107.function(l199);
    l107.function(l198);
    l107.function(l197);
    l107.function(l196);
    l107.function(l195);
    l107.function(l194);
    l107.function(l193);
    l107.function(l192);
    l107.function(l191);
    l107.function(l190);
    l107.function(l189);
    l107.function(l188);
    l107.function(l187);
    l107.function(l186);
    l107.function(l185);
    l107.function(l183);
    l107.function(l182);
    l107.function(l181);
    l107.function(l180);
    l107.function(l179);
    l107.function(l178);
    l107.function(l177);
    l107.function(l176);
    l107.function(l175);
    l107.function(l174);
    l107.function(l173);
    l107.function(l172);
    l107.function(l171);
    l107.function(l170);
    l107.function(l169);
    l107.function(l168);
    l107.function(l167);
    l107.function(l166);
    l107.function(l165);
    l107.function(l164);
    l107.function(l163);
    l107.function(l162);
    l107.function(l161);
    l107.function(l160);
    l107.function(l159);
    l107.function(l158);
    l107.function(l157);
    l107.function(l156);
    l107.function(l155);
    l107.function(l154);
    l107.function(l153);
    l107.function(l152);
    l107.function(l151);
    l107.function(l150);
    l107.function(l149);
    l107.function(l148);
    l107.function(l147);
    l107.function(l146);
    l107.function(l145);
    l107.function(l144);
    l107.function(l143);
    l107.function(l142);
    l107.function(l141);
    l107.function(l140);
    l107.function(l139);
    l107.function(l138);
    l107.function(l137);
    l107.function(l136);
    l107.function(l135);
    l107.function(l134);
    l107.function(l133);
    l107.function(l132);
    l107.function(l131);
    l107.function(l130);
    l107.function(l129);
    l107.function(l128);
    l107.function(l127);
    l107.function(l126);
    l107.function(l125);
    l107.function(l124);
    l107.function(l123);
    l107.function(l122);
    l107.function(l121);
    l107.function(l120);
    l107.function(l119);
    l107.function(l118);
    l107.function(l117);
    l107.function(l116);
    l107.function(l115);
    l107.function(l114);
    l107.function(l113);
    l107.function(l112);
    l107.function(l111);
    l107.function(l110);
    l107.function(l109);
    l107.function(l108);
    l107.function(l107);
    l107.function(l106);
    l107.function(l105);
    l107.function(l104);
    l107.function(l103);
    l107.function(l102);
    l107.function(l101);
    l107.function(l100);
    l107.function(l99);
    l107.function(l98);
    l107.function(l97);
    l107.function(l96);
    l107.function(l95);
    l107.function(l94);
    l107.function(l93);
    l107.function(l92);
    l107.function(l91);
    l107.function(l90);
    l107.function(l89);
    l107.function(l88);
    l107.function(l87);
    l107.function(l86);
    l107.function(l85);
    l107.function(l84);
    l107.function(l83);
    l107.function(l82);
    l107.function(l81);
    l107.function(l80);
    l107.function(l79);
    l107.function(l78);
    l107.function(l77);
    l107.function(l76);
    l107.function(l75);
    l107.function(l74);
    l107.function(l73);
    l107.function(l72);
    l107.function(l71);
    l107.function(l70);
    l107.function(l69);
    l107.function(l68);
    l107.function(l67);
    l107.function(l66);
    l107.function(l65);
    l107.function(l64);
    l107.function(l63);
    l107.function(l62);
    l107.function(l61);
    l107.function(l60);
    l107.function(l59);
    l107.function(l58);
    l107.function(l57);
    l107.function(l56);
    l107.function(l55);
    l107.function(l54);
    l107.function(l53);
    l107.function(l52);
    l107.function(l51);
    l107.function(l50);
    l107.function(l49);
    l107.function(l48);
    l107.function(l47);
    l107.function(l46);
    l107.function(l45);
    l107.function(l44);
    l107.function(l43);
    l107.function(l42);
    l107.function(l41);
    l107.function(l40);
    l107.function(l39);
    l107.function(l38);
    l107.function(l37);
    l107.function(l36);
    l107.function(l35);
    l107.function(l34);
    l107.function(l33);
    l107.function(l32);
    l107.function(l31);
    l107.function(l30);
    l107.function(l29);
    l107.function(l28);
    l107.function(l27);
    l107.function(l26);
    l107.function(l25);
    l107.function(l24);
    l107.function(l23);
    l107.function(l22);
    l107.function(l21);
    l107.function(l20);
    l107.function(l19);
    l107.function(l18);
    l107.function(l17);
    l107.function(l16);
    l107.function(l15);
    l107.function(l14);
    l107.function(l13);
    l107.function(l12);
    l107.function(l11);
    l107.function(l10);
    l107.function(l9);
    l107.function(l8);
    l107.function(l7);
    l107.function(l6);
    l107.function(l5);
    l107.function(l4);
    l107.function(l3);
    l107.function(l2);
    l107.function(l1);
    (l197).value = l266;
    (l159).value = l294;
    (l160).value = 678;
    (l14).value = 178;
    return (l209).value = 242;
})();
(l198).value = 294;
