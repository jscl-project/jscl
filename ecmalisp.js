var l1 = {name: "DEFMACRO"};
l1;
var l2 = {name: "NIL"};
(l2).value = l2;
var l3 = {name: "T"};
(l3).value = l3;
var l4 = {name: "WHEN"};
l4;
var l5 = {name: "UNLESS"};
l5;
var l6 = {name: "DEFVAR"};
l6;
var l7 = {name: "DEFPARAMETER"};
l7;
var l8 = {name: "NAMED-LAMBDA"};
l8;
var l9 = {name: "DEFUN"};
l9;
var l10 = {name: "*PACKAGE*"};
(function(){
    (((l10.value !== undefined)?(function(){
        var symbol = l3;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })(): (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()) !== (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() ? (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() : (function(){
        return (l10).value = {};
    })());
    return l10;
})();
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
                    return ((v1 === (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
var l14 = {name: "INTERNP"};
(function(){
    (l14).function = (function(v4){
        ((v4)["fname"] = "INTERNP");
        return v4;
    })((function (v3){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((v3) in ((function(){
                        var symbol = l10;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()))?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
    return l14;
})();
var l15 = {name: "INTERN"};
(function(){
    (l15).function = (function(v6){
        ((v6)["fname"] = "INTERN");
        return v6;
    })((function (v5){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var symbol = l14;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v5) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        var tmp = ((function(){
                            var symbol = l10;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())[v5];
                        return tmp == undefined? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp ;
                    })() : (((function(){
                        var symbol = l10;
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
    return l15;
})();
var l16 = {name: "FIND-SYMBOL"};
(function(){
    (l16).function = (function(v8){
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
                            var symbol = l10;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())[v7];
                        return tmp == undefined? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp ;
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
    return l16;
})();
var l17 = {name: "*GENSYM-COUNTER*"};
(function(){
    (((l17.value !== undefined)?(function(){
        var symbol = l3;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })(): (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()) !== (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() ? (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() : (function(){
        return (l17).value = 0;
    })());
    return l17;
})();
var l18 = {name: "GENSYM"};
var l19 = {name: "INTEGER-TO-STRING"};
(function(){
    (l18).function = (function(v10){
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
                    (l17).value = (function(){
                        var x = (function(){
                            var symbol = l17;
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
                                var symbol = l19;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l17;
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
    return l18;
})();
var l20 = {name: "BOUNDP"};
(function(){
    (l20).function = (function(v12){
        ((v12)["fname"] = "BOUNDP");
        return v12;
    })((function (v11){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((v11.value !== undefined)?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
var l21 = {name: "="};
(function(){
    (l21).function = (function(v15){
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
                    })()?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
var l22 = {name: "+"};
(function(){
    (l22).function = (function(v18){
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
    return l22;
})();
var l23 = {name: "-"};
(function(){
    (l23).function = (function(v21){
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
    return l23;
})();
var l24 = {name: "*"};
(function(){
    (l24).function = (function(v24){
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
    return l24;
})();
var l25 = {name: "/"};
(function(){
    (l25).function = (function(v27){
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
    return l25;
})();
var l26 = {name: "1+"};
(function(){
    (l26).function = (function(v29){
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
    return l26;
})();
var l27 = {name: "1-"};
(function(){
    (l27).function = (function(v31){
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
    return l27;
})();
var l28 = {name: "ZEROP"};
(function(){
    (l28).function = (function(v33){
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
                    })()?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
var l29 = {name: "TRUNCATE"};
(function(){
    (l29).function = (function(v36){
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
    return l29;
})();
var l30 = {name: "EQL"};
(function(){
    (l30).function = (function(v39){
        ((v39)["fname"] = "EQL");
        return v39;
    })((function (v37,v38){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((v37 === v38)?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
var l31 = {name: "NOT"};
(function(){
    (l31).function = (function(v41){
        ((v41)["fname"] = "NOT");
        return v41;
    })((function (v40){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (v40 !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() : (function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
var l32 = {name: "CONS"};
(function(){
    (l32).function = (function(v44){
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
    return l32;
})();
var l33 = {name: "CONSP"};
(function(){
    (l33).function = (function(v46){
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
                    })()?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
var l34 = {name: "CAR"};
(function(){
    (l34).function = (function(v48){
        ((v48)["fname"] = "CAR");
        return v48;
    })((function (v47){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = v47;
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.car;
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
var l35 = {name: "CDR"};
(function(){
    (l35).function = (function(v50){
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
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.cdr;
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
var l36 = {name: "CAAR"};
(function(){
    (l36).function = (function(v52){
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
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.car;
                        })();
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.car;
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
var l37 = {name: "CADR"};
(function(){
    (l37).function = (function(v54){
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
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.cdr;
                        })();
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.car;
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
var l38 = {name: "CDAR"};
(function(){
    (l38).function = (function(v56){
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
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.car;
                        })();
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.cdr;
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
var l39 = {name: "CDDR"};
(function(){
    (l39).function = (function(v58){
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
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.cdr;
                        })();
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.cdr;
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
var l40 = {name: "CADDR"};
(function(){
    (l40).function = (function(v60){
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
                                return tmp === (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()? (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(): tmp.cdr;
                            })();
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.cdr;
                        })();
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.car;
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
var l41 = {name: "CDDDR"};
(function(){
    (l41).function = (function(v62){
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
                                return tmp === (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()? (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(): tmp.cdr;
                            })();
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.cdr;
                        })();
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.cdr;
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
    return l41;
})();
var l42 = {name: "CADDDR"};
(function(){
    (l42).function = (function(v64){
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
                                    return tmp === (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()? (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })(): tmp.cdr;
                                })();
                                return tmp === (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()? (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(): tmp.cdr;
                            })();
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.cdr;
                        })();
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.car;
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
    return l42;
})();
var l43 = {name: "FIRST"};
(function(){
    (l43).function = (function(v66){
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
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.car;
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
    return l43;
})();
var l44 = {name: "SECOND"};
(function(){
    (l44).function = (function(v68){
        ((v68)["fname"] = "SECOND");
        return v68;
    })((function (v67){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l37;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v67);
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
var l45 = {name: "THIRD"};
(function(){
    (l45).function = (function(v70){
        ((v70)["fname"] = "THIRD");
        return v70;
    })((function (v69){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l40;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v69);
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
var l46 = {name: "FOURTH"};
(function(){
    (l46).function = (function(v72){
        ((v72)["fname"] = "FOURTH");
        return v72;
    })((function (v71){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l42;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v71);
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
    return l46;
})();
var l47 = {name: "LIST"};
(function(){
    (l47).function = (function(v74){
        ((v74)["fname"] = "LIST");
        return v74;
    })((function (){
        var v73= (function(){
            var symbol = l2;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
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
    return l47;
})();
var l48 = {name: "ATOM"};
(function(){
    (l48).function = (function(v76){
        ((v76)["fname"] = "ATOM");
        return v76;
    })((function (v75){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l31;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(((function(){
                        var tmp = v75;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
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
    return l48;
})();
var l49 = {name: "INCF"};
l49;
var l50 = {name: "DECF"};
l50;
var l51 = {name: "PUSH"};
l51;
var l52 = {name: "DOLIST"};
l52;
var l53 = {name: "DOTIMES"};
l53;
var l54 = {name: "COND"};
l54;
var l55 = {name: "CASE"};
l55;
var l56 = {name: "ECASE"};
l56;
var l57 = {name: "AND"};
l57;
var l58 = {name: "OR"};
l58;
var l59 = {name: "PROG1"};
l59;
var l60 = {name: "PROG2"};
l60;
var l61 = {name: "ENSURE-LIST"};
var l62 = {name: "LISTP"};
(function(){
    (l61).function = (function(v78){
        ((v78)["fname"] = "ENSURE-LIST");
        return v78;
    })((function (v77){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var symbol = l62;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v77) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? v77 : (function(){
                        var symbol = l47;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v77));
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
    return l61;
})();
var l63 = {name: "!REDUCE"};
(function(){
    (l63).function = (function(v82){
        ((v82)["fname"] = "!REDUCE");
        return v82;
    })((function (v79,v80,v81){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var symbol = l11;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v80) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? v81 : (function(){
                        var symbol = l63;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v79, (function(){
                        var tmp = v80;
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.cdr;
                    })(), (v79)(v81, (function(){
                        var tmp = v80;
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.car;
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
    return l63;
})();
var l64 = {name: "APPEND-TWO"};
var l65 = {name: "APPEND"};
(function(){
    (l64).function = (function(v85){
        ((v85)["fname"] = "APPEND-TWO");
        return v85;
    })((function (v83,v84){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var symbol = l11;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v83) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? v84 : ({car: (function(){
                        var tmp = v83;
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.car;
                    })(), cdr: (function(){
                        var symbol = l65;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = v83;
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.cdr;
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
    return l64;
})();
(function(){
    (l65).function = (function(v87){
        ((v87)["fname"] = "APPEND");
        return v87;
    })((function (){
        var v86= (function(){
            var symbol = l2;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        for (var i = arguments.length-1; i>=0; i--)
            v86 = {car: arguments[i], cdr: 
        v86};
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l63;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l64;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v86, l2);
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
    return l65;
})();
var l66 = {name: "REVAPPEND"};
(function(){
    (l66).function = (function(v90){
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
                                    while(v88 !== (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()){
                                        v89 = ({car: (function(){
                                            var tmp = v88;
                                            return tmp === (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()? (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })(): tmp.car;
                                        })(), cdr: v89});
                                        v88 = (function(){
                                            var tmp = v88;
                                            return tmp === (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()? (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })(): tmp.cdr;
                                        })();
                                    }return (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })();
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
    return l66;
})();
var l67 = {name: "REVERSE"};
(function(){
    (l67).function = (function(v92){
        ((v92)["fname"] = "REVERSE");
        return v92;
    })((function (v91){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l66;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v91, l2);
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
    return l67;
})();
var l68 = {name: "LIST-LENGTH"};
(function(){
    (l68).function = (function(v95){
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
                                        while((function(){
                                            var symbol = l31;
                                            var func = symbol.function;
                                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                            return func;
                                        })()((function(){
                                            var symbol = l11;
                                            var func = symbol.function;
                                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                            return func;
                                        })()(v93)) !== (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })()){
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
                                                return tmp === (function(){
                                                    var symbol = l2;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })()? (function(){
                                                    var symbol = l2;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })(): tmp.cdr;
                                            })();
                                        }return (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })();
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
    return l68;
})();
var l69 = {name: "LENGTH"};
(function(){
    (l69).function = (function(v97){
        ((v97)["fname"] = "LENGTH");
        return v97;
    })((function (v96){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof(v96) == "string")?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        var x = v96;
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return x.length;
                    })() : (function(){
                        var symbol = l68;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v96));
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
var l70 = {name: "CONCAT-TWO"};
(function(){
    (l70).function = (function(v100){
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
    return l70;
})();
var l71 = {name: "MAPCAR"};
(function(){
    (l71).function = (function(v103){
        ((v103)["fname"] = "MAPCAR");
        return v103;
    })((function (v101,v102){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var symbol = l11;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v102) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? l2 : ({car: (v101)((function(){
                        var tmp = v102;
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.car;
                    })()), cdr: (function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v101, (function(){
                        var tmp = v102;
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.cdr;
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
    return l71;
})();
var l72 = {name: "IDENTITY"};
(function(){
    (l72).function = (function(v105){
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
    return l72;
})();
var l73 = {name: "COPY-LIST"};
(function(){
    (l73).function = (function(v107){
        ((v107)["fname"] = "COPY-LIST");
        return v107;
    })((function (v106){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l72;
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
    return l73;
})();
var l74 = {name: "CODE-CHAR"};
(function(){
    (l74).function = (function(v109){
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
    return l74;
})();
var l75 = {name: "CHAR-CODE"};
(function(){
    (l75).function = (function(v111){
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
    return l75;
})();
var l76 = {name: "CHAR="};
(function(){
    (l76).function = (function(v114){
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
                    })()?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
var l77 = {name: "INTEGERP"};
(function(){
    (l77).function = (function(v116){
        ((v116)["fname"] = "INTEGERP");
        return v116;
    })((function (v115){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof (v115) == "number")?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? ((function(){
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
                    })()?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) : (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
    return l77;
})();
var l78 = {name: "PLUSP"};
(function(){
    (l78).function = (function(v118){
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
                    })()?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
    return l78;
})();
var l79 = {name: "MINUSP"};
(function(){
    (l79).function = (function(v120){
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
                    })()?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
    return l79;
})();
(function(){
    (l62).function = (function(v123){
        ((v123)["fname"] = "LISTP");
        return v123;
    })((function (v121){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v122){
                        return (v122 !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? v122 : (function(){
                            var symbol = l11;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v121));
                    })(((function(){
                        var tmp = v121;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
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
    return l62;
})();
var l80 = {name: "NTHCDR"};
(function(){
    (l80).function = (function(v126){
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
                                    while(((function(){
                                        var symbol = l78;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v124) !== (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })() ? v125 : (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()) !== (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()){
                                        v124 = (function(){
                                            var symbol = l27;
                                            var func = symbol.function;
                                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                            return func;
                                        })()(v124);
                                        v125 = (function(){
                                            var tmp = v125;
                                            return tmp === (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()? (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })(): tmp.cdr;
                                        })();
                                    }return (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })();
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
    return l80;
})();
var l81 = {name: "NTH"};
(function(){
    (l81).function = (function(v129){
        ((v129)["fname"] = "NTH");
        return v129;
    })((function (v127,v128){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = (function(){
                            var symbol = l80;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v127, v128);
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.car;
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
    return l81;
})();
var l82 = {name: "LAST"};
(function(){
    (l82).function = (function(v131){
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
                                            return tmp === (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()? (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })(): tmp.cdr;
                                        })();
                                        return (typeof tmp == 'object' && 'car' in tmp);
                                    })()?(function(){
                                        var symbol = l3;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })(): (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()) !== (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()){
                                        v130 = (function(){
                                            var tmp = v130;
                                            return tmp === (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()? (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })(): tmp.cdr;
                                        })();
                                    }return (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })();
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
    return l82;
})();
var l83 = {name: "BUTLAST"};
(function(){
    (l83).function = (function(v133){
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
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.cdr;
                        })();
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? ({car: (function(){
                        var tmp = v132;
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.car;
                    })(), cdr: (function(){
                        var symbol = l83;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = v132;
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.cdr;
                    })())}) : (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
    return l83;
})();
var l84 = {name: "MEMBER"};
(function(){
    (l84).function = (function(v136){
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
                                    while(v135 !== (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()){
                                        ((function(){
                                            var symbol = l30;
                                            var func = symbol.function;
                                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                            return func;
                                        })()(v134, (function(){
                                            var tmp = v135;
                                            return tmp === (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()? (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })(): tmp.car;
                                        })()) !== (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })() ? (function(){
                                            return (function(){
                                                throw ({type: 'block', id: 63, value: v135, message: 'Return from unknown block NIL.'})
                                            })();
                                        })() : (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })());
                                        v135 = (function(){
                                            var tmp = v135;
                                            return tmp === (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()? (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })(): tmp.cdr;
                                        })();
                                    }return (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })();
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
    return l84;
})();
var l85 = {name: "REMOVE"};
(function(){
    (l85).function = (function(v139){
        ((v139)["fname"] = "REMOVE");
        return v139;
    })((function (v137,v138){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var symbol = l11;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v138) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })();
                    })() : ((function(){
                        var symbol = l30;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v137, (function(){
                        var tmp = v138;
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.car;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(){
                            var symbol = l85;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v137, (function(){
                            var tmp = v138;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.cdr;
                        })());
                    })() : (function(){
                        return ({car: (function(){
                            var tmp = v138;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.car;
                        })(), cdr: (function(){
                            var symbol = l85;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v137, (function(){
                            var tmp = v138;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.cdr;
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
    return l85;
})();
var l86 = {name: "REMOVE-IF"};
(function(){
    (l86).function = (function(v142){
        ((v142)["fname"] = "REMOVE-IF");
        return v142;
    })((function (v140,v141){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var symbol = l11;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v141) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })();
                    })() : ((v140)((function(){
                        var tmp = v141;
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.car;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(){
                            var symbol = l86;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v140, (function(){
                            var tmp = v141;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.cdr;
                        })());
                    })() : (function(){
                        return ({car: (function(){
                            var tmp = v141;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.car;
                        })(), cdr: (function(){
                            var symbol = l86;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v140, (function(){
                            var tmp = v141;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.cdr;
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
    return l86;
})();
var l87 = {name: "REMOVE-IF-NOT"};
(function(){
    (l87).function = (function(v145){
        ((v145)["fname"] = "REMOVE-IF-NOT");
        return v145;
    })((function (v143,v144){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var symbol = l11;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v144) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })();
                    })() : ((v143)((function(){
                        var tmp = v144;
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.car;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return ({car: (function(){
                            var tmp = v144;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.car;
                        })(), cdr: (function(){
                            var symbol = l87;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v143, (function(){
                            var tmp = v144;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.cdr;
                        })())});
                    })() : (function(){
                        return (function(){
                            var symbol = l87;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v143, (function(){
                            var tmp = v144;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.cdr;
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
    return l87;
})();
var l88 = {name: "DIGIT-CHAR-P"};
(function(){
    (l88).function = (function(v147){
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
                    })()?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? ((function(){
                        var x = v146;
                        var y = 57;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x<=y;
                    })()?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) : (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        var x = v146;
                        var y = 48;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x-y;
                    })() : (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
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
    return l88;
})();
var l89 = {name: "SUBSEQ"};
(function(){
    (l89).function = (function(v151){
        ((v151)["fname"] = "SUBSEQ");
        return v151;
    })((function (v148,v149,v150){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        switch(arguments.length){
        case 2:
        v150=(function(){
            var symbol = l2;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (((typeof(v148) == "string")?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (v150 !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
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
    return l89;
})();
var l90 = {name: "PARSE-INTEGER"};
(function(){
    (l90).function = (function(v156){
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
                                        })()?(function(){
                                            var symbol = l3;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })(): (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })()) !== (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })()){
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
                                                var y = (function(){
                                                    var symbol = l88;
                                                    var func = symbol.function;
                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                    return func;
                                                })()((function(){
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
                                        }return (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })();
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
                    })(0,0,(function(){
                        var symbol = l69;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v152));
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
    return l90;
})();
var l91 = {name: "SOME"};
(function(){
    (l91).function = (function(v163){
        ((v163)["fname"] = "SOME");
        return v163;
    })((function (v157,v158){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof(v158) == "string")?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
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
                                            })()?(function(){
                                                var symbol = l3;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })(): (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()) !== (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()){
                                                ((v157)((function(){
                                                    var string = v158;
                                                    var index = v159;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })()) !== (function(){
                                                    var symbol = l2;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })() ? (function(){
                                                    return (function(){
                                                        throw ({type: 'block', id: 71, value: (function(){
                                                            var symbol = l3;
                                                            var value = symbol.value;
                                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                            return value;
                                                        })(), message: 'Return from unknown block SOME.'})
                                                    })();
                                                })() : (function(){
                                                    var symbol = l2;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })());
                                                v159 = (function(){
                                                    var x = v159;
                                                    var y = 1;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x+y;
                                                })();
                                            }return (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })();
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
                            return (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })();
                        })(0,(function(){
                            var symbol = l69;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v158));
                    })() : ((function(){
                        var symbol = l62;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v158) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v161,v162){
                                        (function(){
                                            while(v161 !== (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()){
                                                v162 = (function(){
                                                    var tmp = v161;
                                                    return tmp === (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })()? (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })(): tmp.car;
                                                })();
                                                (function(){
                                                    ((v157)(v162) !== (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })() ? (function(){
                                                        return (function(){
                                                            throw ({type: 'block', id: 73, value: (function(){
                                                                var symbol = l3;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })(), message: 'Return from unknown block NIL.'})
                                                        })();
                                                    })() : (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })());
                                                    return (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })();
                                                })();
                                                v161 = (function(){
                                                    var tmp = v161;
                                                    return tmp === (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })()? (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })(): tmp.cdr;
                                                })();
                                            }return (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })();
                                        })();
                                        return (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })();
                                    })(v158,(function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })());
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
    return l91;
})();
var l92 = {name: "EVERY"};
(function(){
    (l92).function = (function(v170){
        ((v170)["fname"] = "EVERY");
        return v170;
    })((function (v164,v165){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof(v165) == "string")?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
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
                                            })()?(function(){
                                                var symbol = l3;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })(): (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()) !== (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()){
                                                ((v164)((function(){
                                                    var string = v165;
                                                    var index = v166;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })()) !== (function(){
                                                    var symbol = l2;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })() ? (function(){
                                                    var symbol = l2;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })() : (function(){
                                                    return (function(){
                                                        throw ({type: 'block', id: 74, value: (function(){
                                                            var symbol = l2;
                                                            var value = symbol.value;
                                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                            return value;
                                                        })(), message: 'Return from unknown block EVERY.'})
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
                                            }return (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })();
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
                                var symbol = l3;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })();
                        })(0,(function(){
                            var symbol = l69;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v165));
                    })() : ((function(){
                        var symbol = l62;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v165) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v168,v169){
                                        (function(){
                                            while(v168 !== (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()){
                                                v169 = (function(){
                                                    var tmp = v168;
                                                    return tmp === (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })()? (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })(): tmp.car;
                                                })();
                                                (function(){
                                                    ((v164)(v169) !== (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })() ? (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })() : (function(){
                                                        return (function(){
                                                            throw ({type: 'block', id: 76, value: (function(){
                                                                var symbol = l2;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })(), message: 'Return from unknown block NIL.'})
                                                        })();
                                                    })());
                                                    return (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })();
                                                })();
                                                v168 = (function(){
                                                    var tmp = v168;
                                                    return tmp === (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })()? (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })(): tmp.cdr;
                                                })();
                                            }return (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })();
                                        })();
                                        return (function(){
                                            var symbol = l3;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })();
                                    })(v165,(function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })());
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
    return l92;
})();
var l93 = {name: "ASSOC"};
(function(){
    (l93).function = (function(v173){
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
                                    while(v172 !== (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()){
                                        ((function(){
                                            var symbol = l30;
                                            var func = symbol.function;
                                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                            return func;
                                        })()(v171, (function(){
                                            var symbol = l36;
                                            var func = symbol.function;
                                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                            return func;
                                        })()(v172)) !== (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })() ? (function(){
                                            throw ({type: 'block', id: 78, value: (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })(), message: 'Return from unknown block NIL.'})
                                        })() : v172 = (function(){
                                            var tmp = v172;
                                            return tmp === (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()? (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })(): tmp.cdr;
                                        })());
                                    }return (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })();
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
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.car;
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
    return l93;
})();
var l94 = {name: "STRING="};
(function(){
    (l94).function = (function(v176){
        ((v176)["fname"] = "STRING=");
        return v176;
    })((function (v174,v175){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((v174 == v175)?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
var l95 = {name: "FDEFINITION"};
(function(){
    (l95).function = (function(v178){
        ((v178)["fname"] = "FDEFINITION");
        return v178;
    })((function (v177){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof v177 == 'function')?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return v177;
                    })() : (((function(){
                        var tmp = v177;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
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
    return l95;
})();
var l96 = {name: "DISASSEMBLE"};
var l97 = {name: "WRITE-LINE"};
(function(){
    (l96).function = (function(v180){
        ((v180)["fname"] = "DISASSEMBLE");
        return v180;
    })((function (v179){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var symbol = l97;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(((function(){
                        var symbol = l95;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v179)).toString());
                    return (function(){
                        var symbol = l2;
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
    return l96;
})();
var l98 = {name: "*NEWLINE*"};
(function(){
    (((l98.value !== undefined)?(function(){
        var symbol = l3;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })(): (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()) !== (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() ? (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() : (function(){
        return (l98).value = (function(){
            var x = (function(){
                var symbol = l74;
                var func = symbol.function;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })()(10);
            if (typeof x != 'number')
                throw 'The value ' + x + ' is not a type number.';
            return String.fromCharCode(x);
        })();
    })());
    return l98;
})();
var l99 = {name: "CONCAT"};
(function(){
    (l99).function = (function(v182){
        ((v182)["fname"] = "CONCAT");
        return v182;
    })((function (){
        var v181= (function(){
            var symbol = l2;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        for (var i = arguments.length-1; i>=0; i--)
            v181 = {car: arguments[i], cdr: 
        v181};
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l63;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l70;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v181, "");
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
    return l99;
})();
var l100 = {name: "CONCATF"};
l100;
var l101 = {name: "JOIN"};
(function(){
    (l101).function = (function(v185){
        ((v185)["fname"] = "JOIN");
        return v185;
    })((function (v183,v184){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v184="";
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var symbol = l11;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v183) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return "";
                    })() : ((function(){
                        var symbol = l11;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = v183;
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.cdr;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(){
                            var tmp = v183;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.car;
                        })();
                    })() : (function(){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var tmp = v183;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.car;
                        })(), v184, (function(){
                            var symbol = l101;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var tmp = v183;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.cdr;
                        })(), v184));
                    })()));
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
var l102 = {name: "JOIN-TRAILING"};
(function(){
    (l102).function = (function(v188){
        ((v188)["fname"] = "JOIN-TRAILING");
        return v188;
    })((function (v186,v187){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v187="";
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var symbol = l11;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v186) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? "" : (function(){
                        var symbol = l99;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = v186;
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.car;
                    })(), v187, (function(){
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = v186;
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.cdr;
                    })(), v187)));
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
var l103 = {name: "MAPCONCAT"};
(function(){
    (l103).function = (function(v191){
        ((v191)["fname"] = "MAPCONCAT");
        return v191;
    })((function (v189,v190){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l101;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v189, v190));
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
    return l103;
})();
var l104 = {name: "INDENT"};
(function(){
    (l104).function = (function(v198){
        ((v198)["fname"] = "INDENT");
        return v198;
    })((function (){
        var v192= (function(){
            var symbol = l2;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        for (var i = arguments.length-1; i>=0; i--)
            v192 = {car: arguments[i], cdr: 
        v192};
        return (function(){
            try {
                return (function(){
                    return (function(v193){
                        return (function(v194,v195,v196){
                            ((function(){
                                var symbol = l78;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l69;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v193)) !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (function(){
                                return v194 = (function(){
                                    var symbol = l99;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v194, (function(){
                                    return "    ";
                                })());
                            })() : (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(((function(){
                                                var x = v195;
                                                var y = v196;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                if (typeof y != 'number')
                                                    throw 'The value ' + y + ' is not a type number.';
                                                return x<y;
                                            })()?(function(){
                                                var symbol = l3;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })(): (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()) !== (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()){
                                                (function(v197){
                                                    return v194 = (function(){
                                                        var symbol = l99;
                                                        var func = symbol.function;
                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                        return func;
                                                    })()(v194, (function(){
                                                        return v197;
                                                    })());
                                                })((((function(){
                                                    var symbol = l76;
                                                    var func = symbol.function;
                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                    return func;
                                                })()((function(){
                                                    var string = v193;
                                                    var index = v195;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })(), 10) !== (function(){
                                                    var symbol = l2;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })() ? (((function(){
                                                    var x = v195;
                                                    var y = (function(){
                                                        var symbol = l27;
                                                        var func = symbol.function;
                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                        return func;
                                                    })()(v196);
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x<y;
                                                })()?(function(){
                                                    var symbol = l3;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })(): (function(){
                                                    var symbol = l2;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })()) !== (function(){
                                                    var symbol = l2;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })() ? (function(){
                                                    var symbol = l31;
                                                    var func = symbol.function;
                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                    return func;
                                                })()((function(){
                                                    var symbol = l76;
                                                    var func = symbol.function;
                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                    return func;
                                                })()((function(){
                                                    var string = v193;
                                                    var index = (function(){
                                                        var symbol = l26;
                                                        var func = symbol.function;
                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                        return func;
                                                    })()(v195);
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })(), 10)) : (function(){
                                                    var symbol = l2;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })()) : (function(){
                                                    var symbol = l2;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })()) !== (function(){
                                                    var symbol = l2;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })() ? (function(){
                                                    var symbol = l99;
                                                    var func = symbol.function;
                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                    return func;
                                                })()((function(){
                                                    var x = 10;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    return String.fromCharCode(x);
                                                })(), "    ") : (function(){
                                                    var x = (function(){
                                                        var string = v193;
                                                        var index = v195;
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
                                                v195 = (function(){
                                                    var x = v195;
                                                    var y = 1;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x+y;
                                                })();
                                            }return (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })();
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 87)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return v194;
                        })("",0,(function(){
                            var symbol = l69;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v193));
                    })((function(){
                        var symbol = l101;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v192));
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
(function(){
    (l19).function = (function(v202){
        ((v202)["fname"] = "INTEGER-TO-STRING");
        return v202;
    })((function (v199){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var symbol = l28;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v199) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return "0";
                    })() : ((function(){
                        var symbol = l79;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v199) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("-", (function(){
                            var symbol = l19;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var x = 0;
                            var y = v199;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x-y;
                        })()));
                    })() : (function(){
                        return (function(v200){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while((function(){
                                                var symbol = l31;
                                                var func = symbol.function;
                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                return func;
                                            })()((function(){
                                                var symbol = l28;
                                                var func = symbol.function;
                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                return func;
                                            })()(v199)) !== (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()){
                                                v200 = ({car: (function(){
                                                    var x = v199;
                                                    var y = 10;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x%y;
                                                })(), cdr: v200});
                                                v199 = (function(){
                                                    var symbol = l29;
                                                    var func = symbol.function;
                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                    return func;
                                                })()(v199, 10);
                                            }return (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })();
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 89)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return (function(){
                                var symbol = l101;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l71;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function (v201){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return (function(){
                                    var x = (function(){
                                        var string = "0123456789";
                                        var index = v201;
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
                            
                            }), v200));
                        })((function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
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
    return l19;
})();
var l105 = {name: "JS!BOOL"};
var l106 = {name: "LS-COMPILE"};
(function(){
    (l105).function = (function(v204){
        ((v204)["fname"] = "JS!BOOL");
        return v204;
    })((function (v203){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l99;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("(", v203, "?", (function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), ": ", (function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), ")");
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
    return l105;
})();
var l107 = {name: "JS!SELFCALL"};
l107;
var l108 = {name: "PRIN1-TO-STRING"};
var l109 = {name: "ESCAPE-STRING"};
(function(){
    (l108).function = (function(v208){
        ((v208)["fname"] = "PRIN1-TO-STRING");
        return v208;
    })((function (v205){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v205;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (v205).name;
                    })() : ((function(){
                        var symbol = l77;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v205) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(){
                            var symbol = l19;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v205);
                    })() : (((typeof(v205) == "string")?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("\"", (function(){
                            var symbol = l109;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v205), "\"");
                    })() : (((typeof v205 == 'function')?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(v206){
                            return (v206 !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (function(){
                                var symbol = l99;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()("#<FUNCTION ", v206, ">") : (function(){
                                var symbol = l99;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()("#<FUNCTION>"));
                        })((function(){
                            var tmp = (v205)["fname"];
                            return tmp == undefined? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp ;
                        })());
                    })() : ((function(){
                        var symbol = l62;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v205) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(", (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l71;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l108;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), (function(){
                            var symbol = l83;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v205)), " "), (function(v207){
                            return ((function(){
                                var symbol = l11;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var tmp = v207;
                                return tmp === (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()? (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(): tmp.cdr;
                            })()) !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (function(){
                                var symbol = l108;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var tmp = v207;
                                return tmp === (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()? (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(): tmp.car;
                            })()) : (function(){
                                var symbol = l99;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l108;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var tmp = v207;
                                return tmp === (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()? (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(): tmp.car;
                            })()), " . ", (function(){
                                var symbol = l108;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var tmp = v207;
                                return tmp === (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()? (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(): tmp.cdr;
                            })())));
                        })((function(){
                            var symbol = l82;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v205)), ")");
                    })() : (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())))));
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
(function(){
    (l97).function = (function(v210){
        ((v210)["fname"] = "WRITE-LINE");
        return v210;
    })((function (v209){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var x = v209;
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return lisp.write(x);
                    })();
                    (function(){
                        var x = (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })();
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return lisp.write(x);
                    })();
                    return v209;
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
    return l97;
})();
var l110 = {name: "WARN"};
(function(){
    (l110).function = (function(v212){
        ((v212)["fname"] = "WARN");
        return v212;
    })((function (v211){
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
                    return (function(){
                        var symbol = l97;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v211);
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
    return l110;
})();
var l111 = {name: "PRINT"};
(function(){
    (l111).function = (function(v214){
        ((v214)["fname"] = "PRINT");
        return v214;
    })((function (v213){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var symbol = l97;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l108;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v213));
                    return v213;
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
    return l111;
})();
var l112 = {name: "MAKE-STRING-STREAM"};
(function(){
    (l112).function = (function(v216){
        ((v216)["fname"] = "MAKE-STRING-STREAM");
        return v216;
    })((function (v215){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ({car: v215, cdr: 0});
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
    return l112;
})();
var l113 = {name: "%PEEK-CHAR"};
(function(){
    (l113).function = (function(v218){
        ((v218)["fname"] = "%PEEK-CHAR");
        return v218;
    })((function (v217){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var x = (function(){
                            var tmp = v217;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.cdr;
                        })();
                        var y = (function(){
                            var symbol = l69;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var tmp = v217;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.car;
                        })());
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x<y;
                    })()?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        var string = (function(){
                            var tmp = v217;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.car;
                        })();
                        var index = (function(){
                            var tmp = v217;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.cdr;
                        })();
                        if (typeof string != 'string')
                            throw 'The value ' + string + ' is not a type string.';
                        if (typeof index != 'number')
                            throw 'The value ' + index + ' is not a type number.';
                        return string.charCodeAt(index);
                    })() : (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
    return l113;
})();
var l114 = {name: "%READ-CHAR"};
(function(){
    (l114).function = (function(v221){
        ((v221)["fname"] = "%READ-CHAR");
        return v221;
    })((function (v219){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var x = (function(){
                            var tmp = v219;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.cdr;
                        })();
                        var y = (function(){
                            var symbol = l69;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var tmp = v219;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.car;
                        })());
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x<y;
                    })()?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(v220){
                        (function(){
                            var x = v219;
                            if (typeof x != 'object')
                                throw 'The value ' + x + ' is not a type object.';
                            return (x.cdr = (function(){
                                var symbol = l26;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var tmp = v219;
                                return tmp === (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()? (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(): tmp.cdr;
                            })()));
                        })();
                        return v220;
                    })((function(){
                        var string = (function(){
                            var tmp = v219;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.car;
                        })();
                        var index = (function(){
                            var tmp = v219;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.cdr;
                        })();
                        if (typeof string != 'string')
                            throw 'The value ' + string + ' is not a type string.';
                        if (typeof index != 'number')
                            throw 'The value ' + index + ' is not a type number.';
                        return string.charCodeAt(index);
                    })()) : (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
    return l114;
})();
var l115 = {name: "WHITESPACEP"};
(function(){
    (l115).function = (function(v225){
        ((v225)["fname"] = "WHITESPACEP");
        return v225;
    })((function (v222){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v223){
                        return (v223 !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? v223 : (function(v224){
                            return (v224 !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? v224 : (function(){
                                var symbol = l76;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v222, 9));
                        })((function(){
                            var symbol = l76;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v222, 10)));
                    })((function(){
                        var symbol = l76;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v222, 32));
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
    return l115;
})();
var l116 = {name: "SKIP-WHITESPACES"};
(function(){
    (l116).function = (function(v228){
        ((v228)["fname"] = "SKIP-WHITESPACES");
        return v228;
    })((function (v226){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v227){
                        v227 = (function(){
                            var symbol = l113;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v226);
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v227 !== (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })() ? (function(){
                                            var symbol = l115;
                                            var func = symbol.function;
                                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                            return func;
                                        })()(v227) : (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })()) !== (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })()){
                                            (function(){
                                                var symbol = l114;
                                                var func = symbol.function;
                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                return func;
                                            })()(v226);
                                            v227 = (function(){
                                                var symbol = l113;
                                                var func = symbol.function;
                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                return func;
                                            })()(v226);
                                        }return (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })();
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 100)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })((function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
    return l116;
})();
var l117 = {name: "TERMINALP"};
(function(){
    (l117).function = (function(v233){
        ((v233)["fname"] = "TERMINALP");
        return v233;
    })((function (v229){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v230){
                        return (v230 !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? v230 : (function(v231){
                            return (v231 !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? v231 : (function(v232){
                                return (v232 !== (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })() ? v232 : (function(){
                                    var symbol = l76;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(40, v229));
                            })((function(){
                                var symbol = l76;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(41, v229)));
                        })((function(){
                            var symbol = l115;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v229)));
                    })((function(){
                        var symbol = l11;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v229));
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
    return l117;
})();
var l118 = {name: "READ-UNTIL"};
(function(){
    (l118).function = (function(v238){
        ((v238)["fname"] = "READ-UNTIL");
        return v238;
    })((function (v234,v235){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v236,v237){
                        v237 = (function(){
                            var symbol = l113;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v234);
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v237 !== (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })() ? (function(){
                                            var symbol = l31;
                                            var func = symbol.function;
                                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                            return func;
                                        })()((v235)(v237)) : (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })()) !== (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })()){
                                            v236 = (function(){
                                                var symbol = l99;
                                                var func = symbol.function;
                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                return func;
                                            })()(v236, (function(){
                                                var x = v237;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                return String.fromCharCode(x);
                                            })());
                                            (function(){
                                                var symbol = l114;
                                                var func = symbol.function;
                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                return func;
                                            })()(v234);
                                            v237 = (function(){
                                                var symbol = l113;
                                                var func = symbol.function;
                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                return func;
                                            })()(v234);
                                        }return (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })();
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
                        return v236;
                    })("",(function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
    return l118;
})();
var l119 = {name: "SKIP-WHITESPACES-AND-COMMENTS"};
(function(){
    (l119).function = (function(v242){
        ((v242)["fname"] = "SKIP-WHITESPACES-AND-COMMENTS");
        return v242;
    })((function (v239){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v240){
                        (function(){
                            var symbol = l116;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v239);
                        v240 = (function(){
                            var symbol = l113;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v239);
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v240 !== (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })() ? (function(){
                                            var symbol = l76;
                                            var func = symbol.function;
                                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                            return func;
                                        })()(v240, 59) : (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })()) !== (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })()){
                                            (function(){
                                                var symbol = l118;
                                                var func = symbol.function;
                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                return func;
                                            })()(v239, (function (v241){
                                                if (arguments.length < 1) throw 'too few arguments';
                                                if (arguments.length > 1) throw 'too many arguments';
                                                return (function(){
                                                    var symbol = l76;
                                                    var func = symbol.function;
                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                    return func;
                                                })()(v241, 10);
                                            
                                            }));
                                            (function(){
                                                var symbol = l116;
                                                var func = symbol.function;
                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                return func;
                                            })()(v239);
                                            v240 = (function(){
                                                var symbol = l113;
                                                var func = symbol.function;
                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                return func;
                                            })()(v239);
                                        }return (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })();
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
                    })((function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
    return l119;
})();
var l120 = {name: "%READ-LIST"};
var l121 = {name: "LS-READ"};
(function(){
    (l120).function = (function(v246){
        ((v246)["fname"] = "%READ-LIST");
        return v246;
    })((function (v243){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v243);
                    return (function(v244){
                        return ((function(){
                            var symbol = l11;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v244) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            return (function(){
                                throw "Unspected EOF";
                            })();
                        })() : ((function(){
                            var symbol = l76;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v244, 41) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            (function(){
                                var symbol = l114;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v243);
                            return (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })();
                        })() : ((function(){
                            var symbol = l76;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v244, 46) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            (function(){
                                var symbol = l114;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v243);
                            return (function(v245){
                                (function(){
                                    var symbol = l119;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v243);
                                ((function(){
                                    var symbol = l76;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()((function(){
                                    var symbol = l114;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v243), 41) !== (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })() ? (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })() : (function(){
                                    return (function(){
                                        throw "')' was expected.";
                                    })();
                                })());
                                return v245;
                            })((function(){
                                var symbol = l121;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v243));
                        })() : (function(){
                            return ({car: (function(){
                                var symbol = l121;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v243), cdr: (function(){
                                var symbol = l120;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v243)});
                        })())));
                    })((function(){
                        var symbol = l113;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v243));
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
    return l120;
})();
var l122 = {name: "READ-STRING"};
(function(){
    (l122).function = (function(v250){
        ((v250)["fname"] = "READ-STRING");
        return v250;
    })((function (v247){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v248,v249){
                        v249 = (function(){
                            var symbol = l114;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v247);
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((function(){
                                            var symbol = l31;
                                            var func = symbol.function;
                                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                            return func;
                                        })()((function(){
                                            var symbol = l30;
                                            var func = symbol.function;
                                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                            return func;
                                        })()(v249, 34)) !== (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })()){
                                            ((function(){
                                                var symbol = l11;
                                                var func = symbol.function;
                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                return func;
                                            })()(v249) !== (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })() ? (function(){
                                                return (function(){
                                                    throw "Unexpected EOF";
                                                })();
                                            })() : (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })());
                                            ((function(){
                                                var symbol = l30;
                                                var func = symbol.function;
                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                return func;
                                            })()(v249, 92) !== (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })() ? (function(){
                                                return v249 = (function(){
                                                    var symbol = l114;
                                                    var func = symbol.function;
                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                    return func;
                                                })()(v247);
                                            })() : (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })());
                                            v248 = (function(){
                                                var symbol = l99;
                                                var func = symbol.function;
                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                return func;
                                            })()(v248, (function(){
                                                var x = v249;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                return String.fromCharCode(x);
                                            })());
                                            v249 = (function(){
                                                var symbol = l114;
                                                var func = symbol.function;
                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                return func;
                                            })()(v247);
                                        }return (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })();
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 108)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v248;
                    })("",(function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
    return l122;
})();
var l123 = {name: "READ-SHARP"};
var l124 = {name: "FUNCTION"};
(function(){
    (l123).function = (function(v255){
        ((v255)["fname"] = "READ-SHARP");
        return v255;
    })((function (v251){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var symbol = l114;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v251);
                    return (function(v252){
                        return ((function(){
                            var symbol = l30;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v252, 39) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            return (function(){
                                var symbol = l47;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l124, (function(){
                                var symbol = l121;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v251));
                        })() : ((function(){
                            var symbol = l30;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v252, 92) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            return (function(v253){
                                return ((function(){
                                    var symbol = l94;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v253, "space") !== (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })() ? (function(){
                                    return (function(){
                                        var symbol = l75;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(32);
                                })() : ((function(){
                                    var symbol = l94;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v253, "tab") !== (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })() ? (function(){
                                    return (function(){
                                        var symbol = l75;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(9);
                                })() : ((function(){
                                    var symbol = l94;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v253, "newline") !== (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })() ? (function(){
                                    return (function(){
                                        var symbol = l75;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(10);
                                })() : (function(){
                                    return (function(){
                                        var symbol = l75;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()((function(){
                                        var string = v253;
                                        var index = 0;
                                        if (typeof string != 'string')
                                            throw 'The value ' + string + ' is not a type string.';
                                        if (typeof index != 'number')
                                            throw 'The value ' + index + ' is not a type number.';
                                        return string.charCodeAt(index);
                                    })());
                                })())));
                            })((function(){
                                var symbol = l99;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var x = (function(){
                                    var symbol = l114;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v251);
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                return String.fromCharCode(x);
                            })(), (function(){
                                var symbol = l118;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v251, (function(){
                                var symbol = l117;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })())));
                        })() : ((function(){
                            var symbol = l30;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v252, 43) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            return (function(v254){
                                return ((function(){
                                    var symbol = l94;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v254, "common-lisp") !== (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })() ? (function(){
                                    (function(){
                                        var symbol = l121;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v251);
                                    return (function(){
                                        var symbol = l121;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v251);
                                })() : ((function(){
                                    var symbol = l94;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v254, "ecmalisp") !== (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })() ? (function(){
                                    return (function(){
                                        var symbol = l121;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v251);
                                })() : (function(){
                                    return (function(){
                                        throw "Unknown reader form.";
                                    })();
                                })()));
                            })((function(){
                                var symbol = l118;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v251, (function(){
                                var symbol = l117;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()));
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })())));
                    })((function(){
                        var symbol = l114;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v251));
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
    return l123;
})();
var l125 = {name: "*EOF*"};
(function(){
    (((l125.value !== undefined)?(function(){
        var symbol = l3;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })(): (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()) !== (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() ? (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() : (function(){
        return (l125).value = (function(){
            var name = "EOF";
            if (typeof name != 'string')
                throw 'The value ' + name + ' is not a type string.';
            return ({name: name});
        })();
    })());
    return l125;
})();
var l126 = {name: "QUOTE"};
var l127 = {name: "BACKQUOTE"};
var l128 = {name: "UNQUOTE-SPLICING"};
var l129 = {name: "UNQUOTE"};
(function(){
    (l121).function = (function(v259){
        ((v259)["fname"] = "LS-READ");
        return v259;
    })((function (v256){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var symbol = l119;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v256);
                    return (function(v257){
                        return ((function(){
                            var symbol = l11;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v257) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            return (function(){
                                var symbol = l125;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })();
                        })() : ((function(){
                            var symbol = l76;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v257, 40) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            (function(){
                                var symbol = l114;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v256);
                            return (function(){
                                var symbol = l120;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v256);
                        })() : ((function(){
                            var symbol = l76;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v257, 39) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            (function(){
                                var symbol = l114;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v256);
                            return (function(){
                                var symbol = l47;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l126, (function(){
                                var symbol = l121;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v256));
                        })() : ((function(){
                            var symbol = l76;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v257, 96) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            (function(){
                                var symbol = l114;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v256);
                            return (function(){
                                var symbol = l47;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l127, (function(){
                                var symbol = l121;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v256));
                        })() : ((function(){
                            var symbol = l76;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v257, 34) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            (function(){
                                var symbol = l114;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v256);
                            return (function(){
                                var symbol = l122;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v256);
                        })() : ((function(){
                            var symbol = l76;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v257, 44) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            (function(){
                                var symbol = l114;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v256);
                            return ((function(){
                                var symbol = l30;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l113;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v256), 64) !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (function(){
                                (function(){
                                    var symbol = l114;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v256);
                                return (function(){
                                    var symbol = l47;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l128, (function(){
                                    var symbol = l121;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v256));
                            })() : (function(){
                                var symbol = l47;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l129, (function(){
                                var symbol = l121;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v256)));
                        })() : ((function(){
                            var symbol = l76;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v257, 35) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            return (function(){
                                var symbol = l123;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v256);
                        })() : (function(){
                            return (function(v258){
                                return ((function(){
                                    var symbol = l92;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()((function(){
                                    var symbol = l88;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })(), v258) !== (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })() ? (function(){
                                    var symbol = l90;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v258) : (function(){
                                    var symbol = l15;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()((function(){
                                    var x = v258;
                                    if (typeof x != 'string')
                                        throw 'The value ' + x + ' is not a type string.';
                                    return x.toUpperCase();
                                })()));
                            })((function(){
                                var symbol = l118;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v256, (function(){
                                var symbol = l117;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()));
                        })())))))));
                    })((function(){
                        var symbol = l113;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v256));
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
    return l121;
})();
var l130 = {name: "LS-READ-FROM-STRING"};
(function(){
    (l130).function = (function(v261){
        ((v261)["fname"] = "LS-READ-FROM-STRING");
        return v261;
    })((function (v260){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l121;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l112;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v260));
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
var l131 = {name: "*COMPILATION-UNIT-CHECKS*"};
(function(){
    (((l131.value !== undefined)?(function(){
        var symbol = l3;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })(): (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()) !== (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() ? (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() : (function(){
        return (l131).value = l2;
    })());
    return l131;
})();
var l132 = {name: "MAKE-BINDING"};
(function(){
    (l132).function = (function(v266){
        ((v266)["fname"] = "MAKE-BINDING");
        return v266;
    })((function (v262,v263,v264,v265){
        if (arguments.length < 4) throw 'too few arguments';
        if (arguments.length > 4) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l47;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v262, v263, v264, v265);
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
var l133 = {name: "BINDING-NAME"};
(function(){
    (l133).function = (function(v268){
        ((v268)["fname"] = "BINDING-NAME");
        return v268;
    })((function (v267){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l43;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v267);
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
    return l133;
})();
var l134 = {name: "BINDING-TYPE"};
(function(){
    (l134).function = (function(v270){
        ((v270)["fname"] = "BINDING-TYPE");
        return v270;
    })((function (v269){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l44;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v269);
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
    return l134;
})();
var l135 = {name: "BINDING-VALUE"};
(function(){
    (l135).function = (function(v272){
        ((v272)["fname"] = "BINDING-VALUE");
        return v272;
    })((function (v271){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l45;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v271);
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
    return l135;
})();
var l136 = {name: "BINDING-DECLARED"};
(function(){
    (l136).function = (function(v274){
        ((v274)["fname"] = "BINDING-DECLARED");
        return v274;
    })((function (v273){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (v273 !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        var symbol = l46;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v273) : (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
    return l136;
})();
var l137 = {name: "MARK-BINDING-AS-DECLARED"};
(function(){
    (l137).function = (function(v276){
        ((v276)["fname"] = "MARK-BINDING-AS-DECLARED");
        return v276;
    })((function (v275){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = (function(){
                            var symbol = l41;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v275);
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = (function(){
                            var symbol = l3;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    })();
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
var l138 = {name: "MAKE-LEXENV"};
(function(){
    (l138).function = (function(v277){
        ((v277)["fname"] = "MAKE-LEXENV");
        return v277;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l47;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
var l139 = {name: "COPY-LEXENV"};
(function(){
    (l139).function = (function(v279){
        ((v279)["fname"] = "COPY-LEXENV");
        return v279;
    })((function (v278){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l73;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v278);
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
    return l139;
})();
var l140 = {name: "PUSH-TO-LEXENV"};
var l141 = {name: "VARIABLE"};
var l142 = {name: "BLOCK"};
var l143 = {name: "GOTAG"};
(function(){
    (l140).function = (function(v284){
        ((v284)["fname"] = "PUSH-TO-LEXENV");
        return v284;
    })((function (v280,v281,v282){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v283){
                        return ((function(){
                            var symbol = l30;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v283, l141) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            return (function(){
                                var x = v281;
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v280, cdr: (function(){
                                    var tmp = v281;
                                    return tmp === (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()? (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })(): tmp.car;
                                })()}));
                            })();
                        })() : ((function(){
                            var symbol = l30;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v283, l124) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            return (function(){
                                var x = (function(){
                                    var tmp = v281;
                                    return tmp === (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()? (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })(): tmp.cdr;
                                })();
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v280, cdr: (function(){
                                    var symbol = l37;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v281)}));
                            })();
                        })() : ((function(){
                            var symbol = l30;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v283, l142) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            return (function(){
                                var x = (function(){
                                    var symbol = l39;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v281);
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v280, cdr: (function(){
                                    var symbol = l40;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v281)}));
                            })();
                        })() : ((function(){
                            var symbol = l30;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v283, l143) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            return (function(){
                                var x = (function(){
                                    var symbol = l41;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v281);
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v280, cdr: (function(){
                                    var symbol = l42;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v281)}));
                            })();
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })()))));
                    })(v282);
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
    return l140;
})();
var l144 = {name: "EXTEND-LEXENV"};
(function(){
    (l144).function = (function(v291){
        ((v291)["fname"] = "EXTEND-LEXENV");
        return v291;
    })((function (v285,v286,v287){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v288){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v289,v290){
                                        (function(){
                                            while(v289 !== (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()){
                                                v290 = (function(){
                                                    var tmp = v289;
                                                    return tmp === (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })()? (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })(): tmp.car;
                                                })();
                                                (function(){
                                                    (function(){
                                                        var symbol = l140;
                                                        var func = symbol.function;
                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                        return func;
                                                    })()(v290, v288, v287);
                                                    return (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })();
                                                })();
                                                v289 = (function(){
                                                    var tmp = v289;
                                                    return tmp === (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })()? (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })(): tmp.cdr;
                                                })();
                                            }return (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })();
                                        })();
                                        return v288;
                                    })((function(){
                                        var symbol = l67;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v285),(function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })());
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 122)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })((function(){
                        var symbol = l139;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v286));
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
    return l144;
})();
var l145 = {name: "LOOKUP-IN-LEXENV"};
(function(){
    (l145).function = (function(v296){
        ((v296)["fname"] = "LOOKUP-IN-LEXENV");
        return v296;
    })((function (v292,v293,v294){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l93;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v292, (function(v295){
                        return ((function(){
                            var symbol = l30;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v295, l141) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            return (function(){
                                var symbol = l43;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v293);
                        })() : ((function(){
                            var symbol = l30;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v295, l124) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            return (function(){
                                var symbol = l44;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v293);
                        })() : ((function(){
                            var symbol = l30;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v295, l142) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            return (function(){
                                var symbol = l45;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v293);
                        })() : ((function(){
                            var symbol = l30;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v295, l143) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            return (function(){
                                var symbol = l46;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v293);
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })()))));
                    })(v294));
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
var l146 = {name: "*GLOBAL-ENVIRONMENT*"};
(function(){
    (((l146.value !== undefined)?(function(){
        var symbol = l3;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })(): (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()) !== (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() ? (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() : (function(){
        return (l146).value = (function(){
            var symbol = l138;
            var func = symbol.function;
            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
            return func;
        })()();
    })());
    return l146;
})();
var l147 = {name: "*ENVIRONMENT*"};
(function(){
    (((l147.value !== undefined)?(function(){
        var symbol = l3;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })(): (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()) !== (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() ? (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() : (function(){
        return (l147).value = (function(){
            var symbol = l138;
            var func = symbol.function;
            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
            return func;
        })()();
    })());
    return l147;
})();
var l148 = {name: "CLEAR-UNDECLARED-GLOBAL-BINDINGS"};
(function(){
    (l148).function = (function(v298){
        ((v298)["fname"] = "CLEAR-UNDECLARED-GLOBAL-BINDINGS");
        return v298;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l147).value = (function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function (v297){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(){
                            var symbol = l87;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l136;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v297);
                    
                    }), (function(){
                        var symbol = l147;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
var l149 = {name: "*VARIABLE-COUNTER*"};
(function(){
    (((l149.value !== undefined)?(function(){
        var symbol = l3;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })(): (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()) !== (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() ? (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() : (function(){
        return (l149).value = 0;
    })());
    return l149;
})();
var l150 = {name: "GVARNAME"};
(function(){
    (l150).function = (function(v300){
        ((v300)["fname"] = "GVARNAME");
        return v300;
    })((function (v299){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l99;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("v", (function(){
                        var symbol = l19;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((l149).value = (function(){
                        var x = (function(){
                            var symbol = l149;
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
                if (cf.type == 'block' && cf.id == 125)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l150;
})();
var l151 = {name: "TRANSLATE-VARIABLE"};
(function(){
    (l151).function = (function(v302){
        ((v302)["fname"] = "TRANSLATE-VARIABLE");
        return v302;
    })((function (v301){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l135;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l145;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v301, (function(){
                        var symbol = l147;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l141));
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
    return l151;
})();
var l152 = {name: "EXTEND-LOCAL-ENV"};
var l153 = {name: "LEXICAL-VARIABLE"};
(function(){
    (l152).function = (function(v308){
        ((v308)["fname"] = "EXTEND-LOCAL-ENV");
        return v308;
    })((function (v303){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v304){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v305,v306){
                                        (function(){
                                            while(v305 !== (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()){
                                                v306 = (function(){
                                                    var tmp = v305;
                                                    return tmp === (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })()? (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })(): tmp.car;
                                                })();
                                                (function(){
                                                    (function(v307){
                                                        return (function(){
                                                            var symbol = l140;
                                                            var func = symbol.function;
                                                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                            return func;
                                                        })()(v307, v304, l141);
                                                    })((function(){
                                                        var symbol = l132;
                                                        var func = symbol.function;
                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                        return func;
                                                    })()(v306, l153, (function(){
                                                        var symbol = l150;
                                                        var func = symbol.function;
                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                        return func;
                                                    })()(v306), (function(){
                                                        var symbol = l3;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })()));
                                                    return (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })();
                                                })();
                                                v305 = (function(){
                                                    var tmp = v305;
                                                    return tmp === (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })()? (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })(): tmp.cdr;
                                                })();
                                            }return (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })();
                                        })();
                                        return v304;
                                    })(v303,(function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })());
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 128)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })((function(){
                        var symbol = l139;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l147;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
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
var l154 = {name: "*TOPLEVEL-COMPILATIONS*"};
(function(){
    (((l154.value !== undefined)?(function(){
        var symbol = l3;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })(): (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()) !== (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() ? (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() : (function(){
        return (l154).value = (function(){
            var symbol = l2;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
    })());
    return l154;
})();
var l155 = {name: "TOPLEVEL-COMPILATION"};
(function(){
    (l155).function = (function(v310){
        ((v310)["fname"] = "TOPLEVEL-COMPILATION");
        return v310;
    })((function (v309){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l154).value = ({car: v309, cdr: (function(){
                        var symbol = l154;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()});
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
    return l155;
})();
var l156 = {name: "NULL-OR-EMPTY-P"};
(function(){
    (l156).function = (function(v312){
        ((v312)["fname"] = "NULL-OR-EMPTY-P");
        return v312;
    })((function (v311){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l28;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l69;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v311));
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
    return l156;
})();
var l157 = {name: "GET-TOPLEVEL-COMPILATIONS"};
(function(){
    (l157).function = (function(v313){
        ((v313)["fname"] = "GET-TOPLEVEL-COMPILATIONS");
        return v313;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l67;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l86;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l156;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), (function(){
                        var symbol = l154;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
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
var l158 = {name: "%COMPILE-DEFMACRO"};
var l159 = {name: "MACRO"};
(function(){
    (l158).function = (function(v316){
        ((v316)["fname"] = "%COMPILE-DEFMACRO");
        return v316;
    })((function (v314,v315){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var symbol = l155;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l65;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l47;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l126), (function(){
                        var symbol = l47;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v314))));
                    return (function(){
                        var symbol = l140;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v314, l159, v315, (function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), (function(){
                        var symbol = l147;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l124);
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
var l160 = {name: "*COMPILATIONS*"};
(function(){
    (((l160.value !== undefined)?(function(){
        var symbol = l3;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })(): (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()) !== (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() ? (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() : (function(){
        return (l160).value = (function(){
            var symbol = l2;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
    })());
    return l160;
})();
var l161 = {name: "LS-COMPILE-BLOCK"};
(function(){
    (l161).function = (function(v319){
        ((v319)["fname"] = "LS-COMPILE-BLOCK");
        return v319;
    })((function (v317,v318){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v318=(function(){
            var symbol = l2;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (v318 !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        var symbol = l99;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l161;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l83;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v317)), "return ", (function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = (function(){
                            var symbol = l82;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v317);
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.car;
                    })()), ";") : (function(){
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l86;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l156;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), (function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v317)), (function(){
                        var symbol = l99;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(";", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())));
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
    return l161;
})();
var l162 = {name: "DEFINE-COMPILATION"};
l162;
var l163 = {name: "IF"};
(l160).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l163, (function (v320,v321,v322){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l99;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("(", (function(){
                    var symbol = l106;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v320), " !== ", (function(){
                    var symbol = l106;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), " ? ", (function(){
                    var symbol = l106;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v321), " : ", (function(){
                    var symbol = l106;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v322), ")");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 134)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l160;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l164 = {name: "*LAMBDA-LIST-KEYWORDS*"};
var l165 = {name: "&OPTIONAL"};
var l166 = {name: "&REST"};
var l167 = {car: l165, cdr: {car: l166, cdr: l2}};
(function(){
    (((l164.value !== undefined)?(function(){
        var symbol = l3;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })(): (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()) !== (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() ? (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() : (function(){
        return (l164).value = l167;
    })());
    return l164;
})();
var l168 = {name: "LIST-UNTIL-KEYWORD"};
(function(){
    (l168).function = (function(v325){
        ((v325)["fname"] = "LIST-UNTIL-KEYWORD");
        return v325;
    })((function (v323){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(v324){
                        return (v324 !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? v324 : (function(){
                            var symbol = l84;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var tmp = v323;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.car;
                        })(), (function(){
                            var symbol = l164;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()));
                    })((function(){
                        var symbol = l11;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v323)) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() : ({car: (function(){
                        var tmp = v323;
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.car;
                    })(), cdr: (function(){
                        var symbol = l168;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = v323;
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.cdr;
                    })())}));
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
    return l168;
})();
var l169 = {name: "LAMBDA-LIST-REQUIRED-ARGUMENTS"};
(function(){
    (l169).function = (function(v327){
        ((v327)["fname"] = "LAMBDA-LIST-REQUIRED-ARGUMENTS");
        return v327;
    })((function (v326){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l168;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v326);
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
    return l169;
})();
var l170 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"};
(function(){
    (l170).function = (function(v329){
        ((v329)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
        return v329;
    })((function (v328){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l61;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), (function(){
                        var symbol = l168;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = (function(){
                            var symbol = l84;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l165, v328);
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.cdr;
                    })()));
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
    return l170;
})();
var l171 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS"};
(function(){
    (l171).function = (function(v331){
        ((v331)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS");
        return v331;
    })((function (v330){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l34;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), (function(){
                        var symbol = l170;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v330));
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
    return l171;
})();
var l172 = {name: "LAMBDA-LIST-REST-ARGUMENT"};
(function(){
    (l172).function = (function(v334){
        ((v334)["fname"] = "LAMBDA-LIST-REST-ARGUMENT");
        return v334;
    })((function (v332){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v333){
                        ((function(){
                            var tmp = v333;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.cdr;
                        })() !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            return (function(){
                                throw "Bad lambda-list";
                            })();
                        })() : (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                        return (function(){
                            var tmp = v333;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.car;
                        })();
                    })((function(){
                        var symbol = l168;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = (function(){
                            var symbol = l84;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l166, v332);
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.cdr;
                    })()));
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
    return l172;
})();
var l173 = {name: "LAMBDA"};
(l160).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l173, (function (v336){
    if (arguments.length < 1) throw 'too few arguments';
    var v335= (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })();
    for (var i = arguments.length-1; i>=1; i--)
        v335 = {car: arguments[i], cdr: 
    v335};
    return (function(){
        try {
            return (function(){
                return (function(v337,v338,v339){
                    return (function(v340,v341,v342){
                        try {
                            var tmp;
                            tmp = l147.value;
                            l147.value = v342;
                            v342 = tmp;
                            return (function(){
                                var symbol = l99;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()("(function (", (function(){
                                var symbol = l101;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l71;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l151;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })(), (function(){
                                var symbol = l65;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v337, v338)), ","), "){", (function(){
                                var symbol = l98;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(){
                                var symbol = l104;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((v337 !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (function(){
                                var symbol = l99;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()("if (arguments.length < ", (function(){
                                var symbol = l19;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v340), ") throw 'too few arguments';", (function(){
                                var symbol = l98;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), ((function(){
                                var symbol = l31;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v339) !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (function(){
                                var symbol = l99;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()("if (arguments.length > ", (function(){
                                var symbol = l19;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var x = v340;
                                var y = v341;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })()), ") throw 'too many arguments';", (function(){
                                var symbol = l98;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (v338 !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (function(){
                                var symbol = l99;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()("switch(arguments.length){", (function(){
                                var symbol = l98;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(v343,v344,v345){
                                return (function(){
                                    (function(){
                                        try {
                                            return (function(){
                                                return (function(){
                                                    while(((function(){
                                                        var x = v345;
                                                        var y = v341;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        if (typeof y != 'number')
                                                            throw 'The value ' + y + ' is not a type number.';
                                                        return x<y;
                                                    })()?(function(){
                                                        var symbol = l3;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })(): (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })()) !== (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })()){
                                                        (function(v346){
                                                            v344 = ({car: (function(){
                                                                var symbol = l99;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()("case ", (function(){
                                                                var symbol = l19;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()((function(){
                                                                var x = v345;
                                                                var y = v340;
                                                                if (typeof x != 'number')
                                                                    throw 'The value ' + x + ' is not a type number.';
                                                                if (typeof y != 'number')
                                                                    throw 'The value ' + y + ' is not a type number.';
                                                                return x+y;
                                                            })()), ":", (function(){
                                                                var symbol = l98;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })(), (function(){
                                                                var symbol = l151;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()((function(){
                                                                var tmp = v346;
                                                                return tmp === (function(){
                                                                    var symbol = l2;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })()? (function(){
                                                                    var symbol = l2;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })(): tmp.car;
                                                            })()), "=", (function(){
                                                                var symbol = l106;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()((function(){
                                                                var symbol = l37;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()(v346)), ";", (function(){
                                                                var symbol = l98;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })()), cdr: v344});
                                                            return v345 = (function(){
                                                                var x = v345;
                                                                var y = 1;
                                                                if (typeof x != 'number')
                                                                    throw 'The value ' + x + ' is not a type number.';
                                                                if (typeof y != 'number')
                                                                    throw 'The value ' + y + ' is not a type number.';
                                                                return x+y;
                                                            })();
                                                        })((function(){
                                                            var symbol = l81;
                                                            var func = symbol.function;
                                                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                            return func;
                                                        })()(v345, v343));
                                                    }return (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })();
                                                })();
                                            })();
                                        }
                                        catch (cf){
                                            if (cf.type == 'block' && cf.id == 141)
                                                return cf.value;
                                            else
                                                throw cf;
                                        }
                                    })();
                                    v344 = ({car: (function(){
                                        var symbol = l99;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()("default: break;", (function(){
                                        var symbol = l98;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()), cdr: v344});
                                    return (function(){
                                        var symbol = l101;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()((function(){
                                        var symbol = l67;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v344));
                                })();
                            })((function(){
                                var symbol = l170;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v336),(function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(),0), "}", (function(){
                                var symbol = l98;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (v339 !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (function(v347){
                                return (function(){
                                    var symbol = l99;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()("var ", v347, "= ", (function(){
                                    var symbol = l106;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()((function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()), ";", (function(){
                                    var symbol = l98;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "for (var i = arguments.length-1; i>=", (function(){
                                    var symbol = l19;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()((function(){
                                    var x = v340;
                                    var y = v341;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    if (typeof y != 'number')
                                        throw 'The value ' + y + ' is not a type number.';
                                    return x+y;
                                })()), "; i--)", (function(){
                                    var symbol = l98;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), (function(){
                                    var symbol = l104;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v347, " = ", "{car: arguments[i], cdr: "), v347, "};", (function(){
                                    var symbol = l98;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })((function(){
                                var symbol = l151;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v339)) : ""), (function(){
                                var symbol = l161;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v335, (function(){
                                var symbol = l3;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })())), (function(){
                                var symbol = l98;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "})");
                        }
                        finally {
                            l147.value = v342;
                        }
                    })((function(){
                        var symbol = l69;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v337),(function(){
                        var symbol = l69;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v338),(function(){
                        var symbol = l152;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l65;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l61;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v339), v337, v338)));
                })((function(){
                    var symbol = l169;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v336),(function(){
                    var symbol = l171;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v336),(function(){
                    var symbol = l172;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v336));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 140)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l160;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l174 = {name: "SETQ"};
var l175 = {name: "SET"};
(l160).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l174, (function (v348,v349){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v350){
                    return ((((function(){
                        var symbol = l134;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v350) === l153)?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        var symbol = l99;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l135;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v350), " = ", (function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v349)) : (function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l65;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l47;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l175), (function(){
                        var symbol = l47;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l65;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l47;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l126), (function(){
                        var symbol = l47;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v348))), (function(){
                        var symbol = l47;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v349))));
                })((function(){
                    var symbol = l145;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v348, (function(){
                    var symbol = l147;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l141));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 142)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l160;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l176 = {name: "JS-VREF"};
(l160).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l176, (function (v351){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return v351;
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 143)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l160;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l177 = {name: "JS-VSET"};
(l160).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l177, (function (v352,v353){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l99;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("(", v352, " = ", (function(){
                    var symbol = l106;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v353), ")");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 144)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l160;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
(function(){
    (l109).function = (function(v360){
        ((v360)["fname"] = "ESCAPE-STRING");
        return v360;
    })((function (v354){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v355,v356,v357){
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(((function(){
                                            var x = v356;
                                            var y = v357;
                                            if (typeof x != 'number')
                                                throw 'The value ' + x + ' is not a type number.';
                                            if (typeof y != 'number')
                                                throw 'The value ' + y + ' is not a type number.';
                                            return x<y;
                                        })()?(function(){
                                            var symbol = l3;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })(): (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })()) !== (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })()){
                                            (function(v358){
                                                ((function(v359){
                                                    return (v359 !== (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })() ? v359 : (function(){
                                                        var symbol = l76;
                                                        var func = symbol.function;
                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                        return func;
                                                    })()(v358, 92));
                                                })((function(){
                                                    var symbol = l76;
                                                    var func = symbol.function;
                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                    return func;
                                                })()(v358, 34)) !== (function(){
                                                    var symbol = l2;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })() ? (function(){
                                                    return v355 = (function(){
                                                        var symbol = l99;
                                                        var func = symbol.function;
                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                        return func;
                                                    })()(v355, "\\");
                                                })() : (function(){
                                                    var symbol = l2;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })());
                                                ((function(){
                                                    var symbol = l76;
                                                    var func = symbol.function;
                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                    return func;
                                                })()(v358, 10) !== (function(){
                                                    var symbol = l2;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })() ? (function(){
                                                    v355 = (function(){
                                                        var symbol = l99;
                                                        var func = symbol.function;
                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                        return func;
                                                    })()(v355, "\\");
                                                    return v358 = 110;
                                                })() : (function(){
                                                    var symbol = l2;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })());
                                                return v355 = (function(){
                                                    var symbol = l99;
                                                    var func = symbol.function;
                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                    return func;
                                                })()(v355, (function(){
                                                    var x = v358;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    return String.fromCharCode(x);
                                                })());
                                            })((function(){
                                                var string = v354;
                                                var index = v356;
                                                if (typeof string != 'string')
                                                    throw 'The value ' + string + ' is not a type string.';
                                                if (typeof index != 'number')
                                                    throw 'The value ' + index + ' is not a type number.';
                                                return string.charCodeAt(index);
                                            })());
                                            v356 = (function(){
                                                var x = v356;
                                                var y = 1;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                if (typeof y != 'number')
                                                    throw 'The value ' + y + ' is not a type number.';
                                                return x+y;
                                            })();
                                        }return (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })();
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
                        return v355;
                    })("",0,(function(){
                        var symbol = l69;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v354));
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
    return l109;
})();
var l178 = {name: "*LITERAL-SYMBOLS*"};
(function(){
    (((l178.value !== undefined)?(function(){
        var symbol = l3;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })(): (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()) !== (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() ? (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() : (function(){
        return (l178).value = (function(){
            var symbol = l2;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
    })());
    return l178;
})();
var l179 = {name: "*LITERAL-COUNTER*"};
(function(){
    (((l179.value !== undefined)?(function(){
        var symbol = l3;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })(): (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()) !== (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() ? (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() : (function(){
        return (l179).value = 0;
    })());
    return l179;
})();
var l180 = {name: "GENLIT"};
(function(){
    (l180).function = (function(v361){
        ((v361)["fname"] = "GENLIT");
        return v361;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l99;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("l", (function(){
                        var symbol = l19;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((l179).value = (function(){
                        var x = (function(){
                            var symbol = l179;
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
                if (cf.type == 'block' && cf.id == 147)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l180;
})();
var l181 = {name: "LITERAL"};
(function(){
    (l181).function = (function(v369){
        ((v369)["fname"] = "LITERAL");
        return v369;
    })((function (v362,v363){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v363=(function(){
            var symbol = l2;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var symbol = l77;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v362) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(){
                            var symbol = l19;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v362);
                    })() : (((typeof(v362) == "string")?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("\"", (function(){
                            var symbol = l109;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v362), "\"");
                    })() : (((function(){
                        var tmp = v362;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(v364){
                            return (v364 !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? v364 : (function(v365,v366){
                                (l178).value = ({car: ({car: v362, cdr: v365}), cdr: (function(){
                                    var symbol = l178;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()});
                                (function(){
                                    var symbol = l155;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()((function(){
                                    var symbol = l99;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()("var ", v365, " = ", v366));
                                return v365;
                            })((function(){
                                var symbol = l180;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(),(function(){
                                var symbol = l106;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l65;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l47;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l15), (function(){
                                var symbol = l47;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((v362).name)))));
                        })((function(){
                            var tmp = (function(){
                                var symbol = l93;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v362, (function(){
                                var symbol = l178;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.cdr;
                        })());
                    })() : (((function(){
                        var tmp = v362;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(v367){
                            return (v363 !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? v367 : (function(v368){
                                (function(){
                                    var symbol = l155;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()((function(){
                                    var symbol = l99;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()("var ", v368, " = ", v367));
                                return v368;
                            })((function(){
                                var symbol = l180;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()()));
                        })((function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("{car: ", (function(){
                            var symbol = l181;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var tmp = v362;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.car;
                        })(), (function(){
                            var symbol = l3;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), ", ", "cdr: ", (function(){
                            var symbol = l181;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var tmp = v362;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.cdr;
                        })(), (function(){
                            var symbol = l3;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "}"));
                    })() : (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()))));
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
    return l181;
})();
(l160).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l126, (function (v370){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l181;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v370);
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 149)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l160;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l182 = {name: "%WHILE"};
(l160).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l182, (function (v372){
    if (arguments.length < 1) throw 'too few arguments';
    var v371= (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })();
    for (var i = arguments.length-1; i>=1; i--)
        v371 = {car: arguments[i], cdr: 
    v371};
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l99;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("(function(){", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(){
                    var symbol = l104;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("while(", (function(){
                    var symbol = l106;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v372), " !== ", (function(){
                    var symbol = l106;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "){", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(){
                    var symbol = l104;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l161;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v371)), "}", "return ", (function(){
                    var symbol = l106;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), ";", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
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
    var symbol = l160;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l183 = {name: "SYMBOL-FUNCTION"};
(l160).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l124, (function (v373){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (((function(){
                    var symbol = l62;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v373) !== (function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() ? (((function(){
                    var tmp = v373;
                    return tmp === (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()? (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): tmp.car;
                })() === l173)?(function(){
                    var symbol = l3;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(): (function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()) : (function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()) !== (function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() ? (function(){
                    return (function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v373);
                })() : (((function(){
                    var tmp = v373;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?(function(){
                    var symbol = l3;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(): (function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()) !== (function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() ? (function(){
                    return (function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l65;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l47;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l183), (function(){
                        var symbol = l47;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l65;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l47;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l126), (function(){
                        var symbol = l47;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v373)))));
                })() : (function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()));
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
    var symbol = l160;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l184 = {name: "EVAL-WHEN-COMPILE"};
var l185 = {name: "EVAL"};
var l186 = {name: "PROGN"};
(l160).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l184, (function (){
    var v374= (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })();
    for (var i = arguments.length-1; i>=0; i--)
        v374 = {car: arguments[i], cdr: 
    v374};
    return (function(){
        try {
            return (function(){
                (function(){
                    var symbol = l185;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(({car: l186, cdr: v374}));
                return (function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })();
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
    var symbol = l160;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l187 = {name: "DEFINE-TRANSFORMATION"};
l187;
(l160).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l186, (function (){
    var v375= (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })();
    for (var i = arguments.length-1; i>=0; i--)
        v375 = {car: arguments[i], cdr: 
    v375};
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l99;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("(function(){", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(){
                    var symbol = l104;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l161;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v375, (function(){
                    var symbol = l3;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 153)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l160;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l188 = {name: "DYNAMIC-BINDING-WRAPPER"};
(function(){
    (l188).function = (function(v382){
        ((v382)["fname"] = "DYNAMIC-BINDING-WRAPPER");
        return v382;
    })((function (v376,v377){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var symbol = l11;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v376) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? v377 : (function(){
                        var symbol = l99;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("try {", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), (function(){
                        var symbol = l104;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("var tmp;", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), (function(){
                        var symbol = l101;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function (v378){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v379){
                            return (function(){
                                var symbol = l99;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()("tmp = ", v379, ".value;", (function(){
                                var symbol = l98;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), v379, ".value = ", (function(){
                                var tmp = v378;
                                return tmp === (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()? (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(): tmp.cdr;
                            })(), ";", (function(){
                                var symbol = l98;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(){
                                var tmp = v378;
                                return tmp === (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()? (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(): tmp.cdr;
                            })(), " = tmp;", (function(){
                                var symbol = l98;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })((function(){
                            var symbol = l106;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l65;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l47;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l126), (function(){
                            var symbol = l47;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var tmp = v378;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.car;
                        })()))));
                    
                    }), v376)), v377), "}", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "finally {", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), (function(){
                        var symbol = l104;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function (v380){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v381){
                            return (function(){
                                var symbol = l99;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v381, ".value", " = ", (function(){
                                var tmp = v380;
                                return tmp === (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()? (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(): tmp.cdr;
                            })());
                        })((function(){
                            var symbol = l106;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l65;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l47;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l126), (function(){
                            var symbol = l47;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var tmp = v380;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.car;
                        })()))));
                    
                    }), v376), (function(){
                        var symbol = l99;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(";", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()))), "}", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
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
var l189 = {name: "LET"};
(l160).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l189, (function (v384){
    if (arguments.length < 1) throw 'too few arguments';
    var v383= (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })();
    for (var i = arguments.length-1; i>=1; i--)
        v383 = {car: arguments[i], cdr: 
    v383};
    return (function(){
        try {
            return (function(){
                return (function(v385){
                    return (function(v386,v387){
                        return (function(v388,v390,v389){
                            try {
                                var tmp;
                                tmp = l147.value;
                                l147.value = v390;
                                v390 = tmp;
                                return (function(){
                                    var symbol = l99;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()("(function(", (function(){
                                    var symbol = l101;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()((function(){
                                    var symbol = l71;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()((function (v391){
                                    if (arguments.length < 1) throw 'too few arguments';
                                    if (arguments.length > 1) throw 'too many arguments';
                                    return (((v391.value !== undefined)?(function(){
                                        var symbol = l3;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })(): (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()) !== (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })() ? (function(v392){
                                        v389 = ({car: ({car: v391, cdr: v392}), cdr: v389});
                                        return v392;
                                    })((function(){
                                        var symbol = l150;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v391)) : (function(){
                                        var symbol = l151;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v391));
                                
                                }), v386), ","), "){", (function(){
                                    var symbol = l98;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), (function(v393){
                                    return (function(){
                                        var symbol = l104;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()((function(){
                                        var symbol = l188;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v389, v393));
                                })((function(){
                                    var symbol = l161;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v383, (function(){
                                    var symbol = l3;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })())), "})(", (function(){
                                    var symbol = l101;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v388, ","), ")");
                            }
                            finally {
                                l147.value = v390;
                            }
                        })((function(){
                            var symbol = l71;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l106;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v387),(function(){
                            var symbol = l152;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l86;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l20;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v386)),(function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    })((function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l43;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v385),(function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l44;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v385));
                })((function(){
                    var symbol = l71;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l61;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v384));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 155)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l160;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l190 = {name: "*BLOCK-COUNTER*"};
(function(){
    (((l190.value !== undefined)?(function(){
        var symbol = l3;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })(): (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()) !== (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() ? (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() : (function(){
        return (l190).value = 0;
    })());
    return l190;
})();
(l160).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l142, (function (v395){
    if (arguments.length < 1) throw 'too few arguments';
    var v394= (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })();
    for (var i = arguments.length-1; i>=1; i--)
        v394 = {car: arguments[i], cdr: 
    v394};
    return (function(){
        try {
            return (function(){
                return (function(v396){
                    return (function(v397){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("try {", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(v398){
                            try {
                                var tmp;
                                tmp = l147.value;
                                l147.value = v398;
                                v398 = tmp;
                                return (function(){
                                    var symbol = l104;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()("return ", (function(){
                                    var symbol = l106;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()((function(){
                                    var symbol = l65;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()((function(){
                                    var symbol = l47;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l186), v394)), ";", (function(){
                                    var symbol = l98;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            }
                            finally {
                                l147.value = v398;
                            }
                        })((function(){
                            var symbol = l144;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l47;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v397), (function(){
                            var symbol = l147;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l142)), "}", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "catch (cf){", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    if (cf.type == 'block' && cf.id == ", v396, ")", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        return cf.value;", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    else", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        throw cf;", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "}", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v395, l142, v396, (function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
                })((function(){
                    var symbol = l19;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((l190).value = (function(){
                    var x = (function(){
                        var symbol = l190;
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
            if (cf.type == 'block' && cf.id == 156)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l160;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l191 = {name: "RETURN-FROM"};
(l160).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l191, (function (v399,v400){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    switch(arguments.length){
    case 1:
    v400=(function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })();
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return (function(v401){
                    return (v401 !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        var symbol = l99;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("(function(){", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), (function(){
                        var symbol = l104;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("throw ({", "type: 'block', ", "id: ", (function(){
                        var symbol = l135;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v401), ", ", "value: ", (function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v400), ", ", "message: 'Return from unknown block ", (v399).name, ".'", "})"), "})()") : (function(){
                        throw (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("Unknown block `", (v399).name, "'.");
                    })());
                })((function(){
                    var symbol = l145;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v399, (function(){
                    var symbol = l147;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l142));
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
    var symbol = l160;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l192 = {name: "CATCH"};
(l160).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l192, (function (v403){
    if (arguments.length < 1) throw 'too few arguments';
    var v402= (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })();
    for (var i = arguments.length-1; i>=1; i--)
        v402 = {car: arguments[i], cdr: 
    v402};
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l99;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("(function(){", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(){
                    var symbol = l104;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("var id = ", (function(){
                    var symbol = l106;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v403), ";", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "try {", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(){
                    var symbol = l104;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("return ", (function(){
                    var symbol = l106;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l65;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l47;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l186), v402)), ";", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "}", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "catch (cf){", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "    if (cf.type == 'catch' && cf.id == id)", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "        return cf.value;", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "    else", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "        throw cf;", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "}", (function(){
                    var symbol = l98;
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
    var symbol = l160;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l193 = {name: "THROW"};
(l160).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l193, (function (v404,v405){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    switch(arguments.length){
    case 1:
    v405=(function(){
        var symbol = l2;
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
                    var symbol = l99;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("(function(){", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(){
                    var symbol = l104;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("throw ({", "type: 'catch', ", "id: ", (function(){
                    var symbol = l106;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v404), ", ", "value: ", (function(){
                    var symbol = l106;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v405), ", ", "message: 'Throw uncatched.'", "})"), "})()");
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
    var symbol = l160;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l194 = {name: "*TAGBODY-COUNTER*"};
(function(){
    (((l194.value !== undefined)?(function(){
        var symbol = l3;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })(): (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()) !== (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() ? (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() : (function(){
        return (l194).value = 0;
    })());
    return l194;
})();
var l195 = {name: "*GO-TAG-COUNTER*"};
(function(){
    (((l195.value !== undefined)?(function(){
        var symbol = l3;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })(): (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()) !== (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() ? (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })() : (function(){
        return (l195).value = 0;
    })());
    return l195;
})();
var l196 = {name: "GO-TAG-P"};
(function(){
    (l196).function = (function(v408){
        ((v408)["fname"] = "GO-TAG-P");
        return v408;
    })((function (v406){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v407){
                        return (v407 !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? v407 : ((function(){
                            var tmp = v406;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?(function(){
                            var symbol = l3;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()));
                    })((function(){
                        var symbol = l77;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v406));
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
    return l196;
})();
var l197 = {name: "DECLARE-TAGBODY-TAGS"};
(function(){
    (l197).function = (function(v414){
        ((v414)["fname"] = "DECLARE-TAGBODY-TAGS");
        return v414;
    })((function (v409,v410){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v413){
                        return (function(){
                            var symbol = l144;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v413, (function(){
                            var symbol = l147;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l143);
                    })((function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function (v411){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v412){
                            return (function(){
                                var symbol = l132;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v411, l143, (function(){
                                var symbol = l47;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v409, v412), (function(){
                                var symbol = l3;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })((function(){
                            var symbol = l19;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((l195).value = (function(){
                            var x = (function(){
                                var symbol = l195;
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
                    
                    }), (function(){
                        var symbol = l87;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l196;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v410)));
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
    return l197;
})();
var l198 = {name: "TAGBODY"};
(l160).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l198, (function (){
    var v415= (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })();
    for (var i = arguments.length-1; i>=0; i--)
        v415 = {car: arguments[i], cdr: 
    v415};
    return (function(){
        try {
            return (function(){
                ((function(){
                    var symbol = l91;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l196;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v415) !== (function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() ? (function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() : (function(){
                    return (function(){
                        throw ({type: 'block', id: 162, value: (function(){
                            var symbol = l106;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l65;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l47;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l186), v415, (function(){
                            var symbol = l47;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l2))), message: 'Return from unknown block TAGBODY.'})
                    })();
                })());
                ((function(){
                    var symbol = l196;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var tmp = v415;
                    return tmp === (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()? (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): tmp.car;
                })()) !== (function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() ? (function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() : (function(){
                    return v415 = ({car: (function(){
                        var symbol = l18;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("START"), cdr: v415});
                })());
                return (function(v416){
                    return (function(v418,v417){
                        try {
                            var tmp;
                            tmp = l147.value;
                            l147.value = v418;
                            v418 = tmp;
                            (function(v419){
                                return v417 = (function(){
                                    var symbol = l44;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()((function(){
                                    var symbol = l135;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v419));
                            })((function(){
                                var symbol = l145;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l43;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v415), (function(){
                                var symbol = l147;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l143));
                            return (function(){
                                var symbol = l99;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()("(function(){", (function(){
                                var symbol = l98;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(){
                                var symbol = l104;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()("var tagbody_", v416, " = ", v417, ";", (function(){
                                var symbol = l98;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "tbloop:", (function(){
                                var symbol = l98;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "while (true) {", (function(){
                                var symbol = l98;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(){
                                var symbol = l104;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()("try {", (function(){
                                var symbol = l98;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(){
                                var symbol = l104;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(v420){
                                return (function(){
                                    var symbol = l99;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()("switch(tagbody_", v416, "){", (function(){
                                    var symbol = l98;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "case ", v417, ":", (function(){
                                    var symbol = l98;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), (function(){
                                    try {
                                        return (function(){
                                            return (function(v421,v422){
                                                (function(){
                                                    while(v421 !== (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })()){
                                                        v422 = (function(){
                                                            var tmp = v421;
                                                            return tmp === (function(){
                                                                var symbol = l2;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })()? (function(){
                                                                var symbol = l2;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })(): tmp.car;
                                                        })();
                                                        (function(){
                                                            v420 = (function(){
                                                                var symbol = l99;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()(v420, (function(){
                                                                return ((function(){
                                                                    var symbol = l31;
                                                                    var func = symbol.function;
                                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                    return func;
                                                                })()((function(){
                                                                    var symbol = l196;
                                                                    var func = symbol.function;
                                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                    return func;
                                                                })()(v422)) !== (function(){
                                                                    var symbol = l2;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })() ? (function(){
                                                                    var symbol = l104;
                                                                    var func = symbol.function;
                                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                    return func;
                                                                })()((function(){
                                                                    var symbol = l106;
                                                                    var func = symbol.function;
                                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                    return func;
                                                                })()(v422), ";", (function(){
                                                                    var symbol = l98;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })()) : (function(v423){
                                                                    return (function(){
                                                                        var symbol = l99;
                                                                        var func = symbol.function;
                                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                        return func;
                                                                    })()("case ", (function(){
                                                                        var symbol = l44;
                                                                        var func = symbol.function;
                                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                        return func;
                                                                    })()((function(){
                                                                        var symbol = l135;
                                                                        var func = symbol.function;
                                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                        return func;
                                                                    })()(v423)), ":", (function(){
                                                                        var symbol = l98;
                                                                        var value = symbol.value;
                                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                        return value;
                                                                    })());
                                                                })((function(){
                                                                    var symbol = l145;
                                                                    var func = symbol.function;
                                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                    return func;
                                                                })()(v422, (function(){
                                                                    var symbol = l147;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })(), l143)));
                                                            })());
                                                            return (function(){
                                                                var symbol = l2;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })();
                                                        })();
                                                        v421 = (function(){
                                                            var tmp = v421;
                                                            return tmp === (function(){
                                                                var symbol = l2;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })()? (function(){
                                                                var symbol = l2;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })(): tmp.cdr;
                                                        })();
                                                    }return (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })();
                                                })();
                                                return v420;
                                            })((function(){
                                                var tmp = v415;
                                                return tmp === (function(){
                                                    var symbol = l2;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })()? (function(){
                                                    var symbol = l2;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })(): tmp.cdr;
                                            })(),(function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })());
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 163)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })(), "default:", (function(){
                                    var symbol = l98;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "    break tbloop;", (function(){
                                    var symbol = l98;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "}", (function(){
                                    var symbol = l98;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })("")), "}", (function(){
                                var symbol = l98;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "catch (jump) {", (function(){
                                var symbol = l98;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "    if (jump.type == 'tagbody' && jump.id == ", v416, ")", (function(){
                                var symbol = l98;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "        tagbody_", v416, " = jump.label;", (function(){
                                var symbol = l98;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "    else", (function(){
                                var symbol = l98;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "        throw(jump);", (function(){
                                var symbol = l98;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "}", (function(){
                                var symbol = l98;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), "}", (function(){
                                var symbol = l98;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "return ", (function(){
                                var symbol = l106;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), ";", (function(){
                                var symbol = l98;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), "})()");
                        }
                        finally {
                            l147.value = v418;
                        }
                    })((function(){
                        var symbol = l197;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v416, v415),(function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                })((function(){
                    var symbol = l19;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l194;
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

})), cdr: (function(){
    var symbol = l160;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l199 = {name: "GO"};
(l160).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l199, (function (v424){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v425,v426){
                    return (v425 !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        var symbol = l99;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("(function(){", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), (function(){
                        var symbol = l104;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("throw ({", "type: 'tagbody', ", "id: ", (function(){
                        var symbol = l43;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l135;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v425)), ", ", "label: ", (function(){
                        var symbol = l44;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l135;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v425)), ", ", "message: 'Attempt to GO to non-existing tag ", v426, "'", "})", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : (function(){
                        throw (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("Unknown tag `", v426, "'.");
                    })());
                })((function(){
                    var symbol = l145;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v424, (function(){
                    var symbol = l147;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l143),(((function(){
                    var tmp = v424;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?(function(){
                    var symbol = l3;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(): (function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()) !== (function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() ? (function(){
                    return (v424).name;
                })() : ((function(){
                    var symbol = l77;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v424) !== (function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() ? (function(){
                    return (function(){
                        var symbol = l19;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v424);
                })() : (function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())));
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
    var symbol = l160;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l200 = {name: "UNWIND-PROTECT"};
(l160).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l200, (function (v428){
    if (arguments.length < 1) throw 'too few arguments';
    var v427= (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })();
    for (var i = arguments.length-1; i>=1; i--)
        v427 = {car: arguments[i], cdr: 
    v427};
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l99;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("(function(){", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(){
                    var symbol = l104;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("var ret = ", (function(){
                    var symbol = l106;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), ";", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "try {", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(){
                    var symbol = l104;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("ret = ", (function(){
                    var symbol = l106;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v428), ";", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "} finally {", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(){
                    var symbol = l104;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l161;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v427)), "}", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "return ret;", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
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
    var symbol = l160;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l201 = {name: "BACKQUOTE-EXPAND-1"};
(function(){
    (l201).function = (function(v431){
        ((v431)["fname"] = "BACKQUOTE-EXPAND-1");
        return v431;
    })((function (v429){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v429;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(){
                            var symbol = l47;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l126, v429);
                    })() : ((function(){
                        var symbol = l48;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v429) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return v429;
                    })() : ((((function(){
                        var tmp = v429;
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.car;
                    })() === l129)?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(){
                            var tmp = v429;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.car;
                        })();
                    })() : ((((function(){
                        var tmp = v429;
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.car;
                    })() === l127)?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(){
                            var symbol = l201;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l201;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l37;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v429)));
                    })() : (function(){
                        return ({car: l65, cdr: (function(){
                            var symbol = l71;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function (v430){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return (((function(){
                                var symbol = l62;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v430) !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (((function(){
                                var tmp = v430;
                                return tmp === (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()? (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(): tmp.car;
                            })() === l129)?(function(){
                                var symbol = l3;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (function(){
                                return (function(){
                                    var symbol = l47;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l47, (function(){
                                    var symbol = l37;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v430));
                            })() : (((function(){
                                var symbol = l62;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v430) !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (((function(){
                                var tmp = v430;
                                return tmp === (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()? (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(): tmp.car;
                            })() === l128)?(function(){
                                var symbol = l3;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (function(){
                                return (function(){
                                    var symbol = l37;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v430);
                            })() : (function(){
                                return (function(){
                                    var symbol = l47;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l47, (function(){
                                    var symbol = l201;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v430));
                            })()));
                        
                        }), v429)});
                    })()))));
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
var l202 = {name: "BACKQUOTE-EXPAND"};
(function(){
    (l202).function = (function(v433){
        ((v433)["fname"] = "BACKQUOTE-EXPAND");
        return v433;
    })((function (v432){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var symbol = l62;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v432) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (((function(){
                        var tmp = v432;
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.car;
                    })() === l127)?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) : (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        var symbol = l201;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l37;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v432)) : v432);
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
l127;
(l160).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l127, (function (v434){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l106;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l201;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v434));
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
    var symbol = l160;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l203 = {name: "DEFINE-BUILTIN"};
l203;
var l204 = {name: "TYPE-CHECK"};
l204;
var l205 = {name: "NUM-OP-NUM"};
(function(){
    (l205).function = (function(v438){
        ((v438)["fname"] = "NUM-OP-NUM");
        return v438;
    })((function (v435,v436,v437){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l99;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("(function(){", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), (function(){
                        var symbol = l104;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l99;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("var ", "x", " = ", v435, ";", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), (function(){
                        var symbol = l99;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("var ", "y", " = ", v437, ";", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), (function(){
                        var symbol = l99;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("if (typeof ", "x", " != '", "number", "')", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), (function(){
                        var symbol = l104;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), (function(){
                        var symbol = l99;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("if (typeof ", "y", " != '", "number", "')", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), (function(){
                        var symbol = l104;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("throw 'The value ' + ", "y", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), (function(){
                        var symbol = l99;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("return ", (function(){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("x", v436, "y");
                    })(), ";", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), "})()");
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
    return l205;
})();
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l22, (function (v439,v440){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v441,v442){
                        return (function(){
                            var symbol = l205;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v441, "+", v442);
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v439),(function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v440));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l23, (function (v443,v444){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v445,v446){
                        return (function(){
                            var symbol = l205;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v445, "-", v446);
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v443),(function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v444));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l24, (function (v447,v448){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v449,v450){
                        return (function(){
                            var symbol = l205;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v449, "*", v450);
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v447),(function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v448));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l25, (function (v451,v452){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v453,v454){
                        return (function(){
                            var symbol = l205;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v453, "/", v454);
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v451),(function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v452));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l206 = {name: "MOD"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l206, (function (v455,v456){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v457,v458){
                        return (function(){
                            var symbol = l205;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v457, "%", v458);
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v455),(function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v456));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l207 = {name: "<"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l207, (function (v459,v460){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v461,v462){
                        return (function(){
                            var symbol = l105;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l205;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v461, "<", v462));
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v459),(function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v460));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l208 = {name: ">"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l208, (function (v463,v464){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v465,v466){
                        return (function(){
                            var symbol = l105;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l205;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v465, ">", v466));
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v463),(function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v464));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l21, (function (v467,v468){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v469,v470){
                        return (function(){
                            var symbol = l105;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l205;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v469, "==", v470));
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v467),(function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v468));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l209 = {name: "<="};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l209, (function (v471,v472){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v473,v474){
                        return (function(){
                            var symbol = l105;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l205;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v473, "<=", v474));
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v471),(function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v472));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l210 = {name: ">="};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l210, (function (v475,v476){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v477,v478){
                        return (function(){
                            var symbol = l105;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l205;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v477, ">=", v478));
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v475),(function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v476));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l211 = {name: "NUMBERP"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l211, (function (v479){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v480){
                        return (function(){
                            var symbol = l105;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(typeof (", v480, ") == \"number\")"));
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v479));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l212 = {name: "FLOOR"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l212, (function (v481){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v482){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "x", " = ", v482, ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("return ", (function(){
                            return "Math.floor(x)";
                        })(), ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v481));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l32, (function (v483,v484){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v485,v486){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("({car: ", v485, ", cdr: ", v486, "})");
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v483),(function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v484));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l33, (function (v487){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v488){
                        return (function(){
                            var symbol = l105;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var tmp = ", v488, ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return (typeof tmp == 'object' && 'car' in tmp);", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()"));
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v487));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l34, (function (v489){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v490){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var tmp = ", v490, ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l106;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "? ", (function(){
                            var symbol = l106;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), ": tmp.car;", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v489));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l35, (function (v491){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v492){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var tmp = ", v492, ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l106;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "? ", (function(){
                            var symbol = l106;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), ": tmp.cdr;", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v491));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l213 = {name: "SETCAR"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l213, (function (v493,v494){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v495,v496){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "x", " = ", v495, ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("return ", (function(){
                            return (function(){
                                var symbol = l99;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()("(x.car = ", v496, ")");
                        })(), ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v493),(function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v494));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l214 = {name: "SETCDR"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l214, (function (v497,v498){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v499,v500){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "x", " = ", v499, ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("return ", (function(){
                            return (function(){
                                var symbol = l99;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()("(x.cdr = ", v500, ")");
                        })(), ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v497),(function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v498));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l215 = {name: "SYMBOLP"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l215, (function (v501){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v502){
                        return (function(){
                            var symbol = l105;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var tmp = ", v502, ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return (typeof tmp == 'object' && 'name' in tmp);", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()"));
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v501));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l216 = {name: "MAKE-SYMBOL"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l216, (function (v503){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v504){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "name", " = ", v504, ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "name", " != '", "string", "')", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "name", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("return ", (function(){
                            return "({name: name})";
                        })(), ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v503));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l217 = {name: "SYMBOL-NAME"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l217, (function (v505){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v506){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(", v506, ").name");
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v505));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l175, (function (v507,v508){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v509,v510){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(", v509, ").value = ", v510);
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v507),(function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v508));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l218 = {name: "FSET"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l218, (function (v511,v512){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v513,v514){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(", v513, ").function = ", v514);
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v511),(function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v512));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l20, (function (v515){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v516){
                        return (function(){
                            var symbol = l105;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(", v516, ".value !== undefined)"));
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v515));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l219 = {name: "SYMBOL-VALUE"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l219, (function (v517){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v518){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var symbol = ", v518, ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var value = symbol.value;", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (value === undefined) throw \"Variable `\" + symbol.name + \"' is unbound.\";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return value;", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v517));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l183, (function (v519){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v520){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var symbol = ", v520, ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var func = symbol.function;", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (func === undefined) throw \"Function `\" + symbol.name + \"' is undefined.\";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return func;", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v519));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l220 = {name: "SYMBOL-PLIST"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l220, (function (v521){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v522){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("((", v522, ").plist || ", (function(){
                            var symbol = l106;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), ")");
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v521));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l221 = {name: "LAMBDA-CODE"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l221, (function (v523){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v524){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(", v524, ").toString()");
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v523));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l222 = {name: "EQ"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l222, (function (v525,v526){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v527,v528){
                        return (function(){
                            var symbol = l105;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(", v527, " === ", v528, ")"));
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v525),(function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v526));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l223 = {name: "EQUAL"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l223, (function (v529,v530){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v531,v532){
                        return (function(){
                            var symbol = l105;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(", v531, " == ", v532, ")"));
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v529),(function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v530));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l224 = {name: "STRING"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l224, (function (v533){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v534){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "x", " = ", v534, ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("return ", (function(){
                            return "String.fromCharCode(x)";
                        })(), ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v533));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l225 = {name: "STRINGP"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l225, (function (v535){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v536){
                        return (function(){
                            var symbol = l105;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(typeof(", v536, ") == \"string\")"));
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v535));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l226 = {name: "STRING-UPCASE"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l226, (function (v537){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v538){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "x", " = ", v538, ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("return ", (function(){
                            return "x.toUpperCase()";
                        })(), ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v537));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l227 = {name: "STRING-LENGTH"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l227, (function (v539){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v540){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "x", " = ", v540, ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("return ", (function(){
                            return "x.length";
                        })(), ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v539));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l228 = {name: "SLICE"};
(l160).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l228, (function (v541,v542,v543){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    switch(arguments.length){
    case 2:
    v543=(function(){
        var symbol = l2;
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
                    var symbol = l99;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("(function(){", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(){
                    var symbol = l104;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("var str = ", (function(){
                    var symbol = l106;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v541), ";", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var a = ", (function(){
                    var symbol = l106;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v542), ";", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var b;", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (v543 !== (function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() ? (function(){
                    var symbol = l99;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("b = ", (function(){
                    var symbol = l106;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v543), ";", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()) : ""), "return str.slice(a,b);", (function(){
                    var symbol = l98;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
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
    var symbol = l160;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l229 = {name: "CHAR"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l229, (function (v544,v545){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v546,v547){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "string", " = ", v546, ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "index", " = ", v547, ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "index", " != '", "number", "')", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "index", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("return ", (function(){
                            return "string.charCodeAt(index)";
                        })(), ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v544),(function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v545));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l70, (function (v548,v549){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v550,v551){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "string1", " = ", v550, ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "string2", " = ", v551, ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "string1", " != '", "string", "')", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "string1", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "string2", " != '", "string", "')", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "string2", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("return ", (function(){
                            return "string1.concat(string2)";
                        })(), ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v548),(function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v549));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l230 = {name: "FUNCALL"};
(l160).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l230, (function (v553){
    if (arguments.length < 1) throw 'too few arguments';
    var v552= (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })();
    for (var i = arguments.length-1; i>=1; i--)
        v552 = {car: arguments[i], cdr: 
    v552};
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l99;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("(", (function(){
                    var symbol = l106;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v553), ")(", (function(){
                    var symbol = l101;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l71;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l106;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v552), ", "), ")");
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
    var symbol = l160;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l231 = {name: "APPLY"};
(l160).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l231, (function (v555){
    if (arguments.length < 1) throw 'too few arguments';
    var v554= (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })();
    for (var i = arguments.length-1; i>=1; i--)
        v554 = {car: arguments[i], cdr: 
    v554};
    return (function(){
        try {
            return (function(){
                return ((function(){
                    var symbol = l11;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v554) !== (function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() ? (function(){
                    var symbol = l99;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("(", (function(){
                    var symbol = l106;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v555), ")()") : (function(v556,v557){
                    return (function(){
                        var symbol = l99;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("(function(){", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), (function(){
                        var symbol = l104;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("var f = ", (function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v555), ";", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var args = [", (function(){
                        var symbol = l101;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v556), ", "), "];", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var tail = (", (function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v557), ");", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "while (tail != ", (function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "){", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    args.push(tail.car);", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    tail = tail.cdr;", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "}", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "return f.apply(this, args);", (function(){
                        var symbol = l98;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()");
                })((function(){
                    var symbol = l83;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v554),(function(){
                    var tmp = (function(){
                        var symbol = l82;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v554);
                    return tmp === (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()? (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): tmp.car;
                })()));
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
    var symbol = l160;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l232 = {name: "JS-EVAL"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l232, (function (v558){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v559){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "string", " = ", v559, ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("return ", (function(){
                            return "eval.apply(window, [string])";
                        })(), ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v558));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l233 = {name: "ERROR"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l233, (function (v560){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v561){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw ", v561, ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v560));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l234 = {name: "NEW"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l234, (function (){
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
                if (cf.type == 'block' && cf.id == 211)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l235 = {name: "OGET"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l235, (function (v562,v563){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v564,v565){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var tmp = ", "(", v564, ")[", v565, "];", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp == undefined? ", (function(){
                            var symbol = l106;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), ": tmp ;", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v562),(function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v563));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l236 = {name: "OSET"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l236, (function (v566,v567,v568){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v569,v570,v571){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("((", v569, ")[", v570, "] = ", v571, ")");
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v566),(function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v567),(function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v568));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l237 = {name: "IN"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l237, (function (v572,v573){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v574,v575){
                        return (function(){
                            var symbol = l105;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("((", v574, ") in (", v575, "))"));
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v572),(function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v573));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l238 = {name: "FUNCTIONP"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l238, (function (v576){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v577){
                        return (function(){
                            var symbol = l105;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(typeof ", v577, " == 'function')"));
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v576));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l239 = {name: "WRITE-STRING"};
(function(){
    return (l160).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l239, (function (v578){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v579){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "x", " = ", v579, ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("return ", (function(){
                            return "lisp.write(x)";
                        })(), ";", (function(){
                            var symbol = l98;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v578));
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
        var symbol = l160;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    (l159).function = (function(v582){
        ((v582)["fname"] = "MACRO");
        return v582;
    })((function (v580){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v580;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(v581){
                        return ((((function(){
                            var symbol = l134;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v581) === l159)?(function(){
                            var symbol = l3;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? v581 : (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    })((function(){
                        var symbol = l145;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v580, (function(){
                        var symbol = l147;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l124)) : (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 217)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l159;
})();
var l240 = {name: "LS-MACROEXPAND-1"};
(function(){
    (l240).function = (function(v585){
        ((v585)["fname"] = "LS-MACROEXPAND-1");
        return v585;
    })((function (v583){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v584){
                        return (v584 !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            var f = (function(){
                                var symbol = l185;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l135;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v584));
                            var args = [];
                            var tail = ((function(){
                                var tmp = v583;
                                return tmp === (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()? (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(): tmp.cdr;
                            })());
                            while (tail != (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()){
                                args.push(tail.car);
                                tail = tail.cdr;
                            }
                            return f.apply(this, args);
                        })() : v583);
                    })((function(){
                        var symbol = l159;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = v583;
                        return tmp === (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()? (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(): tmp.car;
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 218)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l240;
})();
var l241 = {name: "COMPILE-FUNCALL"};
(function(){
    (l241).function = (function(v588){
        ((v588)["fname"] = "COMPILE-FUNCALL");
        return v588;
    })((function (v586,v587){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l99;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l65;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l47;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l124), (function(){
                        var symbol = l47;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v586))), "(", (function(){
                        var symbol = l101;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l106;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v587), ", "), ")");
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 219)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l241;
})();
(function(){
    (l106).function = (function(v592){
        ((v592)["fname"] = "LS-COMPILE");
        return v592;
    })((function (v589){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v589;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(v590){
                            return ((((function(){
                                var symbol = l134;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v590) === l153)?(function(){
                                var symbol = l3;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (function(){
                                var symbol = l135;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v590) : (function(){
                                var symbol = l106;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l65;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l47;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l219), (function(){
                                var symbol = l47;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l65;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l47;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l126), (function(){
                                var symbol = l47;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v589))))));
                        })((function(){
                            var symbol = l145;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v589, (function(){
                            var symbol = l147;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l141));
                    })() : ((function(){
                        var symbol = l77;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v589) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(){
                            var symbol = l19;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v589);
                    })() : (((typeof(v589) == "string")?(function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(): (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(){
                            var symbol = l99;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("\"", (function(){
                            var symbol = l109;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v589), "\"");
                    })() : ((function(){
                        var symbol = l62;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v589) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return ((function(){
                            var symbol = l93;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var tmp = v589;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.car;
                        })(), (function(){
                            var symbol = l160;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(v591){
                            return (function(){
                                var f = v591;
                                var args = [];
                                var tail = ((function(){
                                    var tmp = v589;
                                    return tmp === (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()? (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })(): tmp.cdr;
                                })());
                                while (tail != (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()){
                                    args.push(tail.car);
                                    tail = tail.cdr;
                                }
                                return f.apply(this, args);
                            })();
                        })((function(){
                            var symbol = l44;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l93;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var tmp = v589;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.car;
                        })(), (function(){
                            var symbol = l160;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()))) : ((function(){
                            var symbol = l159;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var tmp = v589;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.car;
                        })()) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            var symbol = l106;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l240;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v589)) : (function(){
                            var symbol = l241;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var tmp = v589;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.car;
                        })(), (function(){
                            var tmp = v589;
                            return tmp === (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()? (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): tmp.cdr;
                        })())));
                    })() : (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()))));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 220)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l106;
})();
var l242 = {name: "LS-COMPILE-TOPLEVEL"};
(function(){
    (l242).function = (function(v597){
        ((v597)["fname"] = "LS-COMPILE-TOPLEVEL");
        return v597;
    })((function (v593){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v594){
                        try {
                            var tmp;
                            tmp = l154.value;
                            l154.value = v594;
                            v594 = tmp;
                            return ((((function(){
                                var tmp = v593;
                                return (typeof tmp == 'object' && 'car' in tmp);
                            })()?(function(){
                                var symbol = l3;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (((function(){
                                var tmp = v593;
                                return tmp === (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()? (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(): tmp.car;
                            })() === l186)?(function(){
                                var symbol = l3;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(): (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (function(){
                                return (function(v595){
                                    return (function(){
                                        var symbol = l101;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()((function(){
                                        var symbol = l86;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()((function(){
                                        var symbol = l156;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })(), v595));
                                })((function(){
                                    var symbol = l71;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()((function(){
                                    var symbol = l242;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })(), (function(){
                                    var tmp = v593;
                                    return tmp === (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()? (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })(): tmp.cdr;
                                })()));
                            })() : (function(){
                                return (function(v596){
                                    return (function(){
                                        var symbol = l99;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()((function(){
                                        var symbol = l102;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()((function(){
                                        var symbol = l157;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(), (function(){
                                        var symbol = l99;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(";", (function(){
                                        var symbol = l98;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })())), (v596 !== (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })() ? (function(){
                                        var symbol = l99;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v596, ";", (function(){
                                        var symbol = l98;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()) : ""));
                                })((function(){
                                    var symbol = l106;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v593));
                            })());
                        }
                        finally {
                            l154.value = v594;
                        }
                    })((function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 221)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l242;
})();
var l243 = {name: "WITH-COMPILATION-UNIT"};
l243;
(function(){
    (l185).function = (function(v603){
        ((v603)["fname"] = "EVAL");
        return v603;
    })((function (v598){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v602){
                        return (function(){
                            var string = v602;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            return eval.apply(window, [string]);
                        })();
                    })((function(v599){
                        (function(){
                            try {
                                return (function(){
                                    return (function(v600,v601){
                                        (function(){
                                            while(v600 !== (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()){
                                                v601 = (function(){
                                                    var tmp = v600;
                                                    return tmp === (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })()? (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })(): tmp.car;
                                                })();
                                                (function(){
                                                    (v601)();
                                                    return (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })();
                                                })();
                                                v600 = (function(){
                                                    var tmp = v600;
                                                    return tmp === (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })()? (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })(): tmp.cdr;
                                                })();
                                            }return (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })();
                                        })();
                                        return (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })();
                                    })((function(){
                                        var symbol = l131;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })(),(function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })());
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 223)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v599;
                    })((function(){
                        (l131).value = (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })();
                        (function(){
                            var symbol = l148;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()();
                        return (function(){
                            var symbol = l242;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v598);
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
    return l185;
})();
(function(){
    var string = "var lisp";
    if (typeof string != 'string')
        throw 'The value ' + string + ' is not a type string.';
    return eval.apply(window, [string]);
})();
(lisp = {});
(lisp.read = (function(){
    var symbol = l130;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.print = (function(){
    var symbol = l108;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.eval = (function(){
    var symbol = l185;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.compile = (function(){
    var symbol = l242;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.evalString = (function (v604){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        var symbol = l185;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()((function(){
        var symbol = l130;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(v604));

}));
(lisp.compileString = (function (v605){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        var symbol = l242;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()((function(){
        var symbol = l130;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(v605));

}));
var l244 = {car: {car: l243, cdr: "l243"}, cdr: {car: {car: l242, cdr: "l242"}, cdr: {car: {car: l241, cdr: "l241"}, cdr: {car: {car: l240, cdr: "l240"}, cdr: {car: {car: l239, cdr: "l239"}, cdr: {car: {car: l238, cdr: "l238"}, cdr: {car: {car: l237, cdr: "l237"}, cdr: {car: {car: l236, cdr: "l236"}, cdr: {car: {car: l235, cdr: "l235"}, cdr: {car: {car: l234, cdr: "l234"}, cdr: {car: {car: l233, cdr: "l233"}, cdr: {car: {car: l232, cdr: "l232"}, cdr: {car: {car: l231, cdr: "l231"}, cdr: {car: {car: l230, cdr: "l230"}, cdr: {car: {car: l229, cdr: "l229"}, cdr: {car: {car: l228, cdr: "l228"}, cdr: {car: {car: l227, cdr: "l227"}, cdr: {car: {car: l226, cdr: "l226"}, cdr: {car: {car: l225, cdr: "l225"}, cdr: {car: {car: l224, cdr: "l224"}, cdr: {car: {car: l223, cdr: "l223"}, cdr: {car: {car: l222, cdr: "l222"}, cdr: {car: {car: l221, cdr: "l221"}, cdr: {car: {car: l220, cdr: "l220"}, cdr: {car: {car: l219, cdr: "l219"}, cdr: {car: {car: l218, cdr: "l218"}, cdr: {car: {car: l217, cdr: "l217"}, cdr: {car: {car: l216, cdr: "l216"}, cdr: {car: {car: l215, cdr: "l215"}, cdr: {car: {car: l214, cdr: "l214"}, cdr: {car: {car: l213, cdr: "l213"}, cdr: {car: {car: l212, cdr: "l212"}, cdr: {car: {car: l211, cdr: "l211"}, cdr: {car: {car: l210, cdr: "l210"}, cdr: {car: {car: l209, cdr: "l209"}, cdr: {car: {car: l208, cdr: "l208"}, cdr: {car: {car: l207, cdr: "l207"}, cdr: {car: {car: l206, cdr: "l206"}, cdr: {car: {car: l205, cdr: "l205"}, cdr: {car: {car: l204, cdr: "l204"}, cdr: {car: {car: l203, cdr: "l203"}, cdr: {car: {car: l202, cdr: "l202"}, cdr: {car: {car: l201, cdr: "l201"}, cdr: {car: {car: l200, cdr: "l200"}, cdr: {car: {car: l199, cdr: "l199"}, cdr: {car: {car: l198, cdr: "l198"}, cdr: {car: {car: l197, cdr: "l197"}, cdr: {car: {car: l196, cdr: "l196"}, cdr: {car: {car: l195, cdr: "l195"}, cdr: {car: {car: l194, cdr: "l194"}, cdr: {car: {car: l193, cdr: "l193"}, cdr: {car: {car: l192, cdr: "l192"}, cdr: {car: {car: l191, cdr: "l191"}, cdr: {car: {car: l190, cdr: "l190"}, cdr: {car: {car: l189, cdr: "l189"}, cdr: {car: {car: l188, cdr: "l188"}, cdr: {car: {car: l187, cdr: "l187"}, cdr: {car: {car: l186, cdr: "l186"}, cdr: {car: {car: l185, cdr: "l185"}, cdr: {car: {car: l184, cdr: "l184"}, cdr: {car: {car: l183, cdr: "l183"}, cdr: {car: {car: l182, cdr: "l182"}, cdr: {car: {car: l181, cdr: "l181"}, cdr: {car: {car: l180, cdr: "l180"}, cdr: {car: {car: l179, cdr: "l179"}, cdr: {car: {car: l178, cdr: "l178"}, cdr: {car: {car: l177, cdr: "l177"}, cdr: {car: {car: l176, cdr: "l176"}, cdr: {car: {car: l175, cdr: "l175"}, cdr: {car: {car: l174, cdr: "l174"}, cdr: {car: {car: l173, cdr: "l173"}, cdr: {car: {car: l172, cdr: "l172"}, cdr: {car: {car: l171, cdr: "l171"}, cdr: {car: {car: l170, cdr: "l170"}, cdr: {car: {car: l169, cdr: "l169"}, cdr: {car: {car: l168, cdr: "l168"}, cdr: {car: {car: l166, cdr: "l166"}, cdr: {car: {car: l165, cdr: "l165"}, cdr: {car: {car: l164, cdr: "l164"}, cdr: {car: {car: l163, cdr: "l163"}, cdr: {car: {car: l162, cdr: "l162"}, cdr: {car: {car: l161, cdr: "l161"}, cdr: {car: {car: l160, cdr: "l160"}, cdr: {car: {car: l159, cdr: "l159"}, cdr: {car: {car: l158, cdr: "l158"}, cdr: {car: {car: l157, cdr: "l157"}, cdr: {car: {car: l156, cdr: "l156"}, cdr: {car: {car: l155, cdr: "l155"}, cdr: {car: {car: l154, cdr: "l154"}, cdr: {car: {car: l153, cdr: "l153"}, cdr: {car: {car: l152, cdr: "l152"}, cdr: {car: {car: l151, cdr: "l151"}, cdr: {car: {car: l150, cdr: "l150"}, cdr: {car: {car: l149, cdr: "l149"}, cdr: {car: {car: l148, cdr: "l148"}, cdr: {car: {car: l147, cdr: "l147"}, cdr: {car: {car: l146, cdr: "l146"}, cdr: {car: {car: l145, cdr: "l145"}, cdr: {car: {car: l144, cdr: "l144"}, cdr: {car: {car: l143, cdr: "l143"}, cdr: {car: {car: l142, cdr: "l142"}, cdr: {car: {car: l141, cdr: "l141"}, cdr: {car: {car: l140, cdr: "l140"}, cdr: {car: {car: l139, cdr: "l139"}, cdr: {car: {car: l138, cdr: "l138"}, cdr: {car: {car: l137, cdr: "l137"}, cdr: {car: {car: l136, cdr: "l136"}, cdr: {car: {car: l135, cdr: "l135"}, cdr: {car: {car: l134, cdr: "l134"}, cdr: {car: {car: l133, cdr: "l133"}, cdr: {car: {car: l132, cdr: "l132"}, cdr: {car: {car: l131, cdr: "l131"}, cdr: {car: {car: l130, cdr: "l130"}, cdr: {car: {car: l129, cdr: "l129"}, cdr: {car: {car: l128, cdr: "l128"}, cdr: {car: {car: l127, cdr: "l127"}, cdr: {car: {car: l126, cdr: "l126"}, cdr: {car: {car: l125, cdr: "l125"}, cdr: {car: {car: l124, cdr: "l124"}, cdr: {car: {car: l123, cdr: "l123"}, cdr: {car: {car: l122, cdr: "l122"}, cdr: {car: {car: l121, cdr: "l121"}, cdr: {car: {car: l120, cdr: "l120"}, cdr: {car: {car: l119, cdr: "l119"}, cdr: {car: {car: l118, cdr: "l118"}, cdr: {car: {car: l117, cdr: "l117"}, cdr: {car: {car: l116, cdr: "l116"}, cdr: {car: {car: l115, cdr: "l115"}, cdr: {car: {car: l114, cdr: "l114"}, cdr: {car: {car: l113, cdr: "l113"}, cdr: {car: {car: l112, cdr: "l112"}, cdr: {car: {car: l111, cdr: "l111"}, cdr: {car: {car: l110, cdr: "l110"}, cdr: {car: {car: l109, cdr: "l109"}, cdr: {car: {car: l108, cdr: "l108"}, cdr: {car: {car: l107, cdr: "l107"}, cdr: {car: {car: l106, cdr: "l106"}, cdr: {car: {car: l105, cdr: "l105"}, cdr: {car: {car: l104, cdr: "l104"}, cdr: {car: {car: l103, cdr: "l103"}, cdr: {car: {car: l102, cdr: "l102"}, cdr: {car: {car: l101, cdr: "l101"}, cdr: {car: {car: l100, cdr: "l100"}, cdr: {car: {car: l99, cdr: "l99"}, cdr: {car: {car: l98, cdr: "l98"}, cdr: {car: {car: l97, cdr: "l97"}, cdr: {car: {car: l96, cdr: "l96"}, cdr: {car: {car: l95, cdr: "l95"}, cdr: {car: {car: l94, cdr: "l94"}, cdr: {car: {car: l93, cdr: "l93"}, cdr: {car: {car: l92, cdr: "l92"}, cdr: {car: {car: l91, cdr: "l91"}, cdr: {car: {car: l90, cdr: "l90"}, cdr: {car: {car: l89, cdr: "l89"}, cdr: {car: {car: l88, cdr: "l88"}, cdr: {car: {car: l87, cdr: "l87"}, cdr: {car: {car: l86, cdr: "l86"}, cdr: {car: {car: l85, cdr: "l85"}, cdr: {car: {car: l84, cdr: "l84"}, cdr: {car: {car: l83, cdr: "l83"}, cdr: {car: {car: l82, cdr: "l82"}, cdr: {car: {car: l81, cdr: "l81"}, cdr: {car: {car: l80, cdr: "l80"}, cdr: {car: {car: l79, cdr: "l79"}, cdr: {car: {car: l78, cdr: "l78"}, cdr: {car: {car: l77, cdr: "l77"}, cdr: {car: {car: l76, cdr: "l76"}, cdr: {car: {car: l75, cdr: "l75"}, cdr: {car: {car: l74, cdr: "l74"}, cdr: {car: {car: l73, cdr: "l73"}, cdr: {car: {car: l72, cdr: "l72"}, cdr: {car: {car: l71, cdr: "l71"}, cdr: {car: {car: l70, cdr: "l70"}, cdr: {car: {car: l69, cdr: "l69"}, cdr: {car: {car: l68, cdr: "l68"}, cdr: {car: {car: l67, cdr: "l67"}, cdr: {car: {car: l66, cdr: "l66"}, cdr: {car: {car: l65, cdr: "l65"}, cdr: {car: {car: l64, cdr: "l64"}, cdr: {car: {car: l63, cdr: "l63"}, cdr: {car: {car: l62, cdr: "l62"}, cdr: {car: {car: l61, cdr: "l61"}, cdr: {car: {car: l60, cdr: "l60"}, cdr: {car: {car: l59, cdr: "l59"}, cdr: {car: {car: l58, cdr: "l58"}, cdr: {car: {car: l57, cdr: "l57"}, cdr: {car: {car: l56, cdr: "l56"}, cdr: {car: {car: l55, cdr: "l55"}, cdr: {car: {car: l54, cdr: "l54"}, cdr: {car: {car: l53, cdr: "l53"}, cdr: {car: {car: l52, cdr: "l52"}, cdr: {car: {car: l51, cdr: "l51"}, cdr: {car: {car: l50, cdr: "l50"}, cdr: {car: {car: l49, cdr: "l49"}, cdr: {car: {car: l48, cdr: "l48"}, cdr: {car: {car: l47, cdr: "l47"}, cdr: {car: {car: l46, cdr: "l46"}, cdr: {car: {car: l45, cdr: "l45"}, cdr: {car: {car: l44, cdr: "l44"}, cdr: {car: {car: l43, cdr: "l43"}, cdr: {car: {car: l42, cdr: "l42"}, cdr: {car: {car: l41, cdr: "l41"}, cdr: {car: {car: l40, cdr: "l40"}, cdr: {car: {car: l39, cdr: "l39"}, cdr: {car: {car: l38, cdr: "l38"}, cdr: {car: {car: l37, cdr: "l37"}, cdr: {car: {car: l36, cdr: "l36"}, cdr: {car: {car: l35, cdr: "l35"}, cdr: {car: {car: l34, cdr: "l34"}, cdr: {car: {car: l33, cdr: "l33"}, cdr: {car: {car: l32, cdr: "l32"}, cdr: {car: {car: l31, cdr: "l31"}, cdr: {car: {car: l30, cdr: "l30"}, cdr: {car: {car: l29, cdr: "l29"}, cdr: {car: {car: l28, cdr: "l28"}, cdr: {car: {car: l27, cdr: "l27"}, cdr: {car: {car: l26, cdr: "l26"}, cdr: {car: {car: l25, cdr: "l25"}, cdr: {car: {car: l24, cdr: "l24"}, cdr: {car: {car: l23, cdr: "l23"}, cdr: {car: {car: l22, cdr: "l22"}, cdr: {car: {car: l21, cdr: "l21"}, cdr: {car: {car: l20, cdr: "l20"}, cdr: {car: {car: l19, cdr: "l19"}, cdr: {car: {car: l18, cdr: "l18"}, cdr: {car: {car: l17, cdr: "l17"}, cdr: {car: {car: l16, cdr: "l16"}, cdr: {car: {car: l15, cdr: "l15"}, cdr: {car: {car: l14, cdr: "l14"}, cdr: {car: {car: l13, cdr: "l13"}, cdr: {car: {car: l12, cdr: "l12"}, cdr: {car: {car: l11, cdr: "l11"}, cdr: {car: {car: l10, cdr: "l10"}, cdr: {car: {car: l9, cdr: "l9"}, cdr: {car: {car: l8, cdr: "l8"}, cdr: {car: {car: l7, cdr: "l7"}, cdr: {car: {car: l6, cdr: "l6"}, cdr: {car: {car: l5, cdr: "l5"}, cdr: {car: {car: l4, cdr: "l4"}, cdr: {car: {car: l3, cdr: "l3"}, cdr: {car: {car: l2, cdr: "l2"}, cdr: {car: {car: l1, cdr: "l1"}, cdr: l2}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
var l245 = {name: "BODY"};
var l246 = {name: "CHECK"};
var l247 = {name: "DECLS"};
var l248 = {name: "DECL"};
var l249 = {name: "NAME"};
var l250 = {name: "ARGS"};
var l251 = {name: "ARG"};
var l252 = {name: "FORM"};
var l253 = {name: "FORM1"};
var l254 = {name: "RESULT"};
var l255 = {name: "VALUE"};
var l256 = {name: "FORMS"};
var l257 = {name: "G"};
var l258 = {name: "CLAUSULES"};
var l259 = {name: "!FORM"};
var l260 = {name: "CLAUSULE"};
var l261 = {name: "ITER"};
var l262 = {name: "G!TO"};
var l263 = {name: "VAR"};
var l264 = {name: "TO"};
var l265 = {name: "G!LIST"};
var l266 = {name: "X"};
var l267 = {name: "PLACE"};
var l268 = {name: "DELTA"};
var l269 = {name: "CONDITION"};
var l270 = {name: "&BODY"};
var l271 = {car: l2, cdr: {car: {car: {car: l243, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l166, cdr: {car: l245, cdr: l2}}, cdr: {car: {car: l127, cdr: {car: {car: l59, cdr: {car: {car: l186, cdr: {car: {car: l174, cdr: {car: l131, cdr: {car: l2, cdr: l2}}}, cdr: {car: {car: l148, cdr: l2}, cdr: {car: {car: l128, cdr: {car: l245, cdr: l2}}, cdr: l2}}}}, cdr: {car: {car: l52, cdr: {car: {car: l246, cdr: {car: l131, cdr: l2}}, cdr: {car: {car: l230, cdr: {car: l246, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l204, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l247, cdr: {car: l166, cdr: {car: l245, cdr: l2}}}, cdr: {car: {car: l127, cdr: {car: {car: l107, cdr: {car: {car: l128, cdr: {car: {car: l71, cdr: {car: {car: l173, cdr: {car: {car: l248, cdr: l2}, cdr: {car: {car: l127, cdr: {car: {car: l99, cdr: {car: "var ", cdr: {car: {car: l129, cdr: {car: {car: l43, cdr: {car: l248, cdr: l2}}, cdr: l2}}, cdr: {car: " = ", cdr: {car: {car: l129, cdr: {car: {car: l45, cdr: {car: l248, cdr: l2}}, cdr: l2}}, cdr: {car: ";", cdr: {car: l98, cdr: l2}}}}}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l247, cdr: l2}}}, cdr: l2}}, cdr: {car: {car: l128, cdr: {car: {car: l71, cdr: {car: {car: l173, cdr: {car: {car: l248, cdr: l2}, cdr: {car: {car: l127, cdr: {car: {car: l99, cdr: {car: "if (typeof ", cdr: {car: {car: l129, cdr: {car: {car: l43, cdr: {car: l248, cdr: l2}}, cdr: l2}}, cdr: {car: " != '", cdr: {car: {car: l129, cdr: {car: {car: l44, cdr: {car: l248, cdr: l2}}, cdr: l2}}, cdr: {car: "')", cdr: {car: l98, cdr: {car: {car: l104, cdr: {car: "throw 'The value ' + ", cdr: {car: {car: l129, cdr: {car: {car: l43, cdr: {car: l248, cdr: l2}}, cdr: l2}}, cdr: {car: " + ' is not a type ", cdr: {car: {car: l129, cdr: {car: {car: l44, cdr: {car: l248, cdr: l2}}, cdr: l2}}, cdr: {car: ".';", cdr: {car: l98, cdr: l2}}}}}}}, cdr: l2}}}}}}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l247, cdr: l2}}}, cdr: l2}}, cdr: {car: {car: l99, cdr: {car: "return ", cdr: {car: {car: l186, cdr: {car: {car: l128, cdr: {car: l245, cdr: l2}}, cdr: l2}}, cdr: {car: ";", cdr: {car: l98, cdr: l2}}}}}, cdr: l2}}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l203, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l249, cdr: {car: l250, cdr: {car: l166, cdr: {car: l245, cdr: l2}}}}, cdr: {car: {car: l127, cdr: {car: {car: l186, cdr: {car: {car: l162, cdr: {car: {car: l129, cdr: {car: l249, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: l250, cdr: l2}}, cdr: {car: {car: l189, cdr: {car: {car: l129, cdr: {car: {car: l71, cdr: {car: {car: l173, cdr: {car: {car: l251, cdr: l2}, cdr: {car: {car: l127, cdr: {car: {car: {car: l129, cdr: {car: l251, cdr: l2}}, cdr: {car: {car: l106, cdr: {car: {car: l129, cdr: {car: l251, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l250, cdr: l2}}}, cdr: l2}}, cdr: {car: {car: l128, cdr: {car: l245, cdr: l2}}, cdr: l2}}}, cdr: l2}}}}, cdr: l2}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l127, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l252, cdr: l2}, cdr: {car: {car: l201, cdr: {car: l252, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l187, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l249, cdr: {car: l250, cdr: {car: l252, cdr: l2}}}, cdr: {car: {car: l127, cdr: {car: {car: l162, cdr: {car: {car: l129, cdr: {car: l249, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: l250, cdr: l2}}, cdr: {car: {car: l106, cdr: {car: {car: l129, cdr: {car: l252, cdr: l2}}, cdr: l2}}, cdr: l2}}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l162, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l249, cdr: {car: l250, cdr: {car: l166, cdr: {car: l245, cdr: l2}}}}, cdr: {car: {car: l127, cdr: {car: {car: l51, cdr: {car: {car: l47, cdr: {car: {car: l126, cdr: {car: {car: l129, cdr: {car: l249, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l173, cdr: {car: {car: l129, cdr: {car: l250, cdr: l2}}, cdr: {car: {car: l142, cdr: {car: {car: l129, cdr: {car: l249, cdr: l2}}, cdr: {car: {car: l128, cdr: {car: l245, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: l2}}}, cdr: {car: l160, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l107, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l166, cdr: {car: l245, cdr: l2}}, cdr: {car: {car: l127, cdr: {car: {car: l99, cdr: {car: "(function(){", cdr: {car: l98, cdr: {car: {car: l104, cdr: {car: {car: l128, cdr: {car: l245, cdr: l2}}, cdr: l2}}, cdr: {car: "})()", cdr: l2}}}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l100, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l141, cdr: {car: l166, cdr: {car: l252, cdr: l2}}}, cdr: {car: {car: l127, cdr: {car: {car: l174, cdr: {car: {car: l129, cdr: {car: l141, cdr: l2}}, cdr: {car: {car: l99, cdr: {car: {car: l129, cdr: {car: l141, cdr: l2}}, cdr: {car: {car: l186, cdr: {car: {car: l128, cdr: {car: l252, cdr: l2}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l60, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l253, cdr: {car: l254, cdr: {car: l166, cdr: {car: l245, cdr: l2}}}}, cdr: {car: {car: l127, cdr: {car: {car: l59, cdr: {car: {car: l186, cdr: {car: {car: l129, cdr: {car: l253, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: l254, cdr: l2}}, cdr: l2}}}, cdr: {car: {car: l128, cdr: {car: l245, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l59, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l252, cdr: {car: l166, cdr: {car: l245, cdr: l2}}}, cdr: {car: {car: l189, cdr: {car: {car: {car: l255, cdr: {car: {car: l18, cdr: l2}, cdr: l2}}, cdr: l2}, cdr: {car: {car: l127, cdr: {car: {car: l189, cdr: {car: {car: {car: {car: l129, cdr: {car: l255, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: l252, cdr: l2}}, cdr: l2}}, cdr: l2}, cdr: {car: {car: l128, cdr: {car: l245, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: l255, cdr: l2}}, cdr: l2}}}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l58, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l166, cdr: {car: l256, cdr: l2}}, cdr: {car: {car: l54, cdr: {car: {car: {car: l11, cdr: {car: l256, cdr: l2}}, cdr: {car: l2, cdr: l2}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l35, cdr: {car: l256, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l34, cdr: {car: l256, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l3, cdr: {car: {car: l189, cdr: {car: {car: {car: l257, cdr: {car: {car: l18, cdr: l2}, cdr: l2}}, cdr: l2}, cdr: {car: {car: l127, cdr: {car: {car: l189, cdr: {car: {car: {car: {car: l129, cdr: {car: l257, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: {car: l34, cdr: {car: l256, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: l2}, cdr: {car: {car: l163, cdr: {car: {car: l129, cdr: {car: l257, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: l257, cdr: l2}}, cdr: {car: {car: l58, cdr: {car: {car: l128, cdr: {car: {car: l35, cdr: {car: l256, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: l2}}}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l57, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l166, cdr: {car: l256, cdr: l2}}, cdr: {car: {car: l54, cdr: {car: {car: {car: l11, cdr: {car: l256, cdr: l2}}, cdr: {car: l3, cdr: l2}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l35, cdr: {car: l256, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l34, cdr: {car: l256, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l3, cdr: {car: {car: l127, cdr: {car: {car: l163, cdr: {car: {car: l129, cdr: {car: {car: l34, cdr: {car: l256, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l57, cdr: {car: {car: l128, cdr: {car: {car: l35, cdr: {car: l256, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: {car: l2, cdr: l2}}}}, cdr: l2}}, cdr: l2}}, cdr: l2}}}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l56, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l252, cdr: {car: l166, cdr: {car: l258, cdr: l2}}}, cdr: {car: {car: l127, cdr: {car: {car: l55, cdr: {car: {car: l129, cdr: {car: l252, cdr: l2}}, cdr: {car: {car: l128, cdr: {car: {car: l65, cdr: {car: l258, cdr: {car: {car: l127, cdr: {car: {car: {car: l3, cdr: {car: {car: l233, cdr: {car: "ECASE expression failed.", cdr: l2}}, cdr: l2}}, cdr: l2}, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l55, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l252, cdr: {car: l166, cdr: {car: l258, cdr: l2}}}, cdr: {car: {car: l189, cdr: {car: {car: {car: l259, cdr: {car: {car: l18, cdr: l2}, cdr: l2}}, cdr: l2}, cdr: {car: {car: l127, cdr: {car: {car: l189, cdr: {car: {car: {car: {car: l129, cdr: {car: l259, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: l252, cdr: l2}}, cdr: l2}}, cdr: l2}, cdr: {car: {car: l54, cdr: {car: {car: l128, cdr: {car: {car: l71, cdr: {car: {car: l173, cdr: {car: {car: l260, cdr: l2}, cdr: {car: {car: l163, cdr: {car: {car: l222, cdr: {car: {car: l34, cdr: {car: l260, cdr: l2}}, cdr: {car: l3, cdr: l2}}}, cdr: {car: l260, cdr: {car: {car: l127, cdr: {car: {car: {car: l30, cdr: {car: {car: l129, cdr: {car: l259, cdr: l2}}, cdr: {car: {car: l126, cdr: {car: {car: l129, cdr: {car: {car: l34, cdr: {car: l260, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: l2}}}, cdr: {car: {car: l128, cdr: {car: {car: l35, cdr: {car: l260, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: l2}}}}, cdr: l2}}}, cdr: {car: l258, cdr: l2}}}, cdr: l2}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l54, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l166, cdr: {car: l258, cdr: l2}}, cdr: {car: {car: l163, cdr: {car: {car: l11, cdr: {car: l258, cdr: l2}}, cdr: {car: l2, cdr: {car: {car: l163, cdr: {car: {car: l222, cdr: {car: {car: l36, cdr: {car: l258, cdr: l2}}, cdr: {car: l3, cdr: l2}}}, cdr: {car: {car: l127, cdr: {car: {car: l186, cdr: {car: {car: l128, cdr: {car: {car: l38, cdr: {car: l258, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l127, cdr: {car: {car: l163, cdr: {car: {car: l129, cdr: {car: {car: l36, cdr: {car: l258, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l186, cdr: {car: {car: l128, cdr: {car: {car: l38, cdr: {car: l258, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l54, cdr: {car: {car: l128, cdr: {car: {car: l35, cdr: {car: l258, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: l2}}}}, cdr: l2}}, cdr: l2}}}}, cdr: l2}}}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l53, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l261, cdr: {car: l166, cdr: {car: l245, cdr: l2}}}, cdr: {car: {car: l189, cdr: {car: {car: {car: l262, cdr: {car: {car: l18, cdr: l2}, cdr: l2}}, cdr: {car: {car: l263, cdr: {car: {car: l43, cdr: {car: l261, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l264, cdr: {car: {car: l44, cdr: {car: l261, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l254, cdr: {car: {car: l45, cdr: {car: l261, cdr: l2}}, cdr: l2}}, cdr: l2}}}}, cdr: {car: {car: l127, cdr: {car: {car: l142, cdr: {car: l2, cdr: {car: {car: l189, cdr: {car: {car: {car: {car: l129, cdr: {car: l263, cdr: l2}}, cdr: {car: 0, cdr: l2}}, cdr: {car: {car: {car: l129, cdr: {car: l262, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: l264, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l182, cdr: {car: {car: l207, cdr: {car: {car: l129, cdr: {car: l263, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: l262, cdr: l2}}, cdr: l2}}}, cdr: {car: {car: l198, cdr: {car: {car: l128, cdr: {car: l245, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l49, cdr: {car: {car: l129, cdr: {car: l263, cdr: l2}}, cdr: l2}}, cdr: l2}}}}, cdr: {car: {car: l129, cdr: {car: l254, cdr: l2}}, cdr: l2}}}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l52, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l261, cdr: {car: l166, cdr: {car: l245, cdr: l2}}}, cdr: {car: {car: l189, cdr: {car: {car: {car: l263, cdr: {car: {car: l43, cdr: {car: l261, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l265, cdr: {car: {car: l18, cdr: l2}, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l127, cdr: {car: {car: l142, cdr: {car: l2, cdr: {car: {car: l189, cdr: {car: {car: {car: {car: l129, cdr: {car: l265, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: {car: l44, cdr: {car: l261, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: {car: {car: {car: l129, cdr: {car: l263, cdr: l2}}, cdr: {car: l2, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l182, cdr: {car: {car: l129, cdr: {car: l265, cdr: l2}}, cdr: {car: {car: l174, cdr: {car: {car: l129, cdr: {car: l263, cdr: l2}}, cdr: {car: {car: l34, cdr: {car: {car: l129, cdr: {car: l265, cdr: l2}}, cdr: l2}}, cdr: l2}}}, cdr: {car: {car: l198, cdr: {car: {car: l128, cdr: {car: l245, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l174, cdr: {car: {car: l129, cdr: {car: l265, cdr: l2}}, cdr: {car: {car: l35, cdr: {car: {car: l129, cdr: {car: l265, cdr: l2}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}}}}, cdr: {car: {car: l129, cdr: {car: {car: l45, cdr: {car: l261, cdr: l2}}, cdr: l2}}, cdr: l2}}}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l51, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l266, cdr: {car: l267, cdr: l2}}, cdr: {car: {car: l127, cdr: {car: {car: l174, cdr: {car: {car: l129, cdr: {car: l267, cdr: l2}}, cdr: {car: {car: l32, cdr: {car: {car: l129, cdr: {car: l266, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: l267, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l50, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l266, cdr: {car: l165, cdr: {car: {car: l268, cdr: {car: 1, cdr: l2}}, cdr: l2}}}, cdr: {car: {car: l127, cdr: {car: {car: l174, cdr: {car: {car: l129, cdr: {car: l266, cdr: l2}}, cdr: {car: {car: l23, cdr: {car: {car: l129, cdr: {car: l266, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: l268, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l49, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l266, cdr: {car: l165, cdr: {car: {car: l268, cdr: {car: 1, cdr: l2}}, cdr: l2}}}, cdr: {car: {car: l127, cdr: {car: {car: l174, cdr: {car: {car: l129, cdr: {car: l266, cdr: l2}}, cdr: {car: {car: l22, cdr: {car: {car: l129, cdr: {car: l266, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: l268, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l13, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l269, cdr: {car: l166, cdr: {car: l245, cdr: l2}}}, cdr: {car: {car: l127, cdr: {car: {car: l142, cdr: {car: l2, cdr: {car: {car: l182, cdr: {car: {car: l129, cdr: {car: l269, cdr: l2}}, cdr: {car: {car: l128, cdr: {car: l245, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l12, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l165, cdr: {car: l255, cdr: l2}}, cdr: {car: {car: l127, cdr: {car: {car: l191, cdr: {car: l2, cdr: {car: {car: l129, cdr: {car: l255, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l9, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l249, cdr: {car: l250, cdr: {car: l166, cdr: {car: l245, cdr: l2}}}}, cdr: {car: {car: l127, cdr: {car: {car: l186, cdr: {car: {car: l218, cdr: {car: {car: l126, cdr: {car: {car: l129, cdr: {car: l249, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l8, cdr: {car: {car: l129, cdr: {car: {car: l217, cdr: {car: l249, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: l250, cdr: l2}}, cdr: {car: {car: l142, cdr: {car: {car: l129, cdr: {car: l249, cdr: l2}}, cdr: {car: {car: l128, cdr: {car: l245, cdr: l2}}, cdr: l2}}}, cdr: l2}}}}, cdr: l2}}}, cdr: {car: {car: l126, cdr: {car: {car: l129, cdr: {car: l249, cdr: l2}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l8, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l249, cdr: {car: l250, cdr: {car: l166, cdr: {car: l245, cdr: l2}}}}, cdr: {car: {car: l189, cdr: {car: {car: {car: l266, cdr: {car: {car: l18, cdr: {car: "FN", cdr: l2}}, cdr: l2}}, cdr: l2}, cdr: {car: {car: l127, cdr: {car: {car: l189, cdr: {car: {car: {car: {car: l129, cdr: {car: l266, cdr: l2}}, cdr: {car: {car: l173, cdr: {car: {car: l129, cdr: {car: l250, cdr: l2}}, cdr: {car: {car: l128, cdr: {car: l245, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: l2}, cdr: {car: {car: l236, cdr: {car: {car: l129, cdr: {car: l266, cdr: l2}}, cdr: {car: "fname", cdr: {car: {car: l129, cdr: {car: l249, cdr: l2}}, cdr: l2}}}}, cdr: {car: {car: l129, cdr: {car: l266, cdr: l2}}, cdr: l2}}}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l7, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l249, cdr: {car: l255, cdr: l2}}, cdr: {car: {car: l127, cdr: {car: {car: l186, cdr: {car: {car: l174, cdr: {car: {car: l129, cdr: {car: l249, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: l255, cdr: l2}}, cdr: l2}}}, cdr: {car: {car: l126, cdr: {car: {car: l129, cdr: {car: l249, cdr: l2}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l6, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l249, cdr: {car: l255, cdr: l2}}, cdr: {car: {car: l127, cdr: {car: {car: l186, cdr: {car: {car: l5, cdr: {car: {car: l20, cdr: {car: {car: l126, cdr: {car: {car: l129, cdr: {car: l249, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l174, cdr: {car: {car: l129, cdr: {car: l249, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: l255, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: {car: {car: l126, cdr: {car: {car: l129, cdr: {car: l249, cdr: l2}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l5, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l269, cdr: {car: l166, cdr: {car: l245, cdr: l2}}}, cdr: {car: {car: l127, cdr: {car: {car: l163, cdr: {car: {car: l129, cdr: {car: l269, cdr: l2}}, cdr: {car: l2, cdr: {car: {car: l186, cdr: {car: {car: l128, cdr: {car: l245, cdr: l2}}, cdr: l2}}, cdr: l2}}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l4, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l269, cdr: {car: l166, cdr: {car: l245, cdr: l2}}}, cdr: {car: {car: l127, cdr: {car: {car: l163, cdr: {car: {car: l129, cdr: {car: l269, cdr: l2}}, cdr: {car: {car: l186, cdr: {car: {car: l128, cdr: {car: l245, cdr: l2}}, cdr: l2}}, cdr: {car: l2, cdr: l2}}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l1, cdr: {car: l159, cdr: {car: {car: l173, cdr: {car: {car: l249, cdr: {car: l250, cdr: {car: l166, cdr: {car: l245, cdr: l2}}}}, cdr: {car: {car: l127, cdr: {car: {car: l184, cdr: {car: {car: l158, cdr: {car: {car: l126, cdr: {car: {car: l129, cdr: {car: l249, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l126, cdr: {car: {car: l173, cdr: {car: {car: l129, cdr: {car: {car: l71, cdr: {car: {car: l173, cdr: {car: {car: l266, cdr: l2}, cdr: {car: {car: l163, cdr: {car: {car: l222, cdr: {car: l266, cdr: {car: {car: l126, cdr: {car: l270, cdr: l2}}, cdr: l2}}}, cdr: {car: {car: l126, cdr: {car: l166, cdr: l2}}, cdr: {car: l266, cdr: l2}}}}, cdr: l2}}}, cdr: {car: l250, cdr: l2}}}, cdr: l2}}, cdr: {car: {car: l128, cdr: {car: l245, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: l2}}}}}}}}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: l2, cdr: {car: l2, cdr: l2}}}};
(function(){
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["WITH-COMPILATION-UNIT"] = l243);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LS-COMPILE-TOPLEVEL"] = l242);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["COMPILE-FUNCALL"] = l241);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LS-MACROEXPAND-1"] = l240);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["WRITE-STRING"] = l239);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["FUNCTIONP"] = l238);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["IN"] = l237);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["OSET"] = l236);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["OGET"] = l235);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NEW"] = l234);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["ERROR"] = l233);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["JS-EVAL"] = l232);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["APPLY"] = l231);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["FUNCALL"] = l230);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CHAR"] = l229);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SLICE"] = l228);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["STRING-LENGTH"] = l227);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["STRING-UPCASE"] = l226);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["STRINGP"] = l225);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["STRING"] = l224);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["EQUAL"] = l223);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["EQ"] = l222);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LAMBDA-CODE"] = l221);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SYMBOL-PLIST"] = l220);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SYMBOL-VALUE"] = l219);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["FSET"] = l218);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SYMBOL-NAME"] = l217);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MAKE-SYMBOL"] = l216);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SYMBOLP"] = l215);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SETCDR"] = l214);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SETCAR"] = l213);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["FLOOR"] = l212);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NUMBERP"] = l211);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())[">="] = l210);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["<="] = l209);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())[">"] = l208);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["<"] = l207);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MOD"] = l206);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NUM-OP-NUM"] = l205);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["TYPE-CHECK"] = l204);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DEFINE-BUILTIN"] = l203);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BACKQUOTE-EXPAND"] = l202);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BACKQUOTE-EXPAND-1"] = l201);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["UNWIND-PROTECT"] = l200);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["GO"] = l199);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["TAGBODY"] = l198);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DECLARE-TAGBODY-TAGS"] = l197);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["GO-TAG-P"] = l196);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*GO-TAG-COUNTER*"] = l195);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*TAGBODY-COUNTER*"] = l194);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["THROW"] = l193);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CATCH"] = l192);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["RETURN-FROM"] = l191);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*BLOCK-COUNTER*"] = l190);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LET"] = l189);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DYNAMIC-BINDING-WRAPPER"] = l188);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DEFINE-TRANSFORMATION"] = l187);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["PROGN"] = l186);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["EVAL"] = l185);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["EVAL-WHEN-COMPILE"] = l184);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SYMBOL-FUNCTION"] = l183);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["%WHILE"] = l182);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LITERAL"] = l181);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["GENLIT"] = l180);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*LITERAL-COUNTER*"] = l179);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*LITERAL-SYMBOLS*"] = l178);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["JS-VSET"] = l177);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["JS-VREF"] = l176);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SET"] = l175);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SETQ"] = l174);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LAMBDA"] = l173);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LAMBDA-LIST-REST-ARGUMENT"] = l172);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LAMBDA-LIST-OPTIONAL-ARGUMENTS"] = l171);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"] = l170);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LAMBDA-LIST-REQUIRED-ARGUMENTS"] = l169);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LIST-UNTIL-KEYWORD"] = l168);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["&REST"] = l166);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["&OPTIONAL"] = l165);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*LAMBDA-LIST-KEYWORDS*"] = l164);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["IF"] = l163);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DEFINE-COMPILATION"] = l162);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LS-COMPILE-BLOCK"] = l161);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*COMPILATIONS*"] = l160);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MACRO"] = l159);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["%COMPILE-DEFMACRO"] = l158);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["GET-TOPLEVEL-COMPILATIONS"] = l157);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NULL-OR-EMPTY-P"] = l156);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["TOPLEVEL-COMPILATION"] = l155);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*TOPLEVEL-COMPILATIONS*"] = l154);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LEXICAL-VARIABLE"] = l153);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["EXTEND-LOCAL-ENV"] = l152);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["TRANSLATE-VARIABLE"] = l151);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["GVARNAME"] = l150);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*VARIABLE-COUNTER*"] = l149);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CLEAR-UNDECLARED-GLOBAL-BINDINGS"] = l148);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*ENVIRONMENT*"] = l147);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*GLOBAL-ENVIRONMENT*"] = l146);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LOOKUP-IN-LEXENV"] = l145);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["EXTEND-LEXENV"] = l144);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["GOTAG"] = l143);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BLOCK"] = l142);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["VARIABLE"] = l141);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["PUSH-TO-LEXENV"] = l140);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["COPY-LEXENV"] = l139);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MAKE-LEXENV"] = l138);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MARK-BINDING-AS-DECLARED"] = l137);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BINDING-DECLARED"] = l136);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BINDING-VALUE"] = l135);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BINDING-TYPE"] = l134);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BINDING-NAME"] = l133);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MAKE-BINDING"] = l132);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*COMPILATION-UNIT-CHECKS*"] = l131);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LS-READ-FROM-STRING"] = l130);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["UNQUOTE"] = l129);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["UNQUOTE-SPLICING"] = l128);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BACKQUOTE"] = l127);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["QUOTE"] = l126);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*EOF*"] = l125);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["FUNCTION"] = l124);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["READ-SHARP"] = l123);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["READ-STRING"] = l122);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LS-READ"] = l121);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["%READ-LIST"] = l120);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SKIP-WHITESPACES-AND-COMMENTS"] = l119);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["READ-UNTIL"] = l118);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["TERMINALP"] = l117);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SKIP-WHITESPACES"] = l116);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["WHITESPACEP"] = l115);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["%READ-CHAR"] = l114);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["%PEEK-CHAR"] = l113);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MAKE-STRING-STREAM"] = l112);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["PRINT"] = l111);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["WARN"] = l110);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["ESCAPE-STRING"] = l109);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["PRIN1-TO-STRING"] = l108);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["JS!SELFCALL"] = l107);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LS-COMPILE"] = l106);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["JS!BOOL"] = l105);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["INDENT"] = l104);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MAPCONCAT"] = l103);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["JOIN-TRAILING"] = l102);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["JOIN"] = l101);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CONCATF"] = l100);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CONCAT"] = l99);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*NEWLINE*"] = l98);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["WRITE-LINE"] = l97);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DISASSEMBLE"] = l96);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["FDEFINITION"] = l95);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["STRING="] = l94);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["ASSOC"] = l93);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["EVERY"] = l92);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SOME"] = l91);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["PARSE-INTEGER"] = l90);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SUBSEQ"] = l89);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DIGIT-CHAR-P"] = l88);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["REMOVE-IF-NOT"] = l87);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["REMOVE-IF"] = l86);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["REMOVE"] = l85);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MEMBER"] = l84);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BUTLAST"] = l83);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LAST"] = l82);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NTH"] = l81);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NTHCDR"] = l80);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MINUSP"] = l79);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["PLUSP"] = l78);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["INTEGERP"] = l77);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CHAR="] = l76);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CHAR-CODE"] = l75);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CODE-CHAR"] = l74);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["COPY-LIST"] = l73);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["IDENTITY"] = l72);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MAPCAR"] = l71);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CONCAT-TWO"] = l70);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LENGTH"] = l69);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LIST-LENGTH"] = l68);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["REVERSE"] = l67);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["REVAPPEND"] = l66);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["APPEND"] = l65);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["APPEND-TWO"] = l64);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["!REDUCE"] = l63);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LISTP"] = l62);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["ENSURE-LIST"] = l61);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["PROG2"] = l60);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["PROG1"] = l59);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["OR"] = l58);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["AND"] = l57);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["ECASE"] = l56);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CASE"] = l55);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["COND"] = l54);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DOTIMES"] = l53);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DOLIST"] = l52);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["PUSH"] = l51);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DECF"] = l50);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["INCF"] = l49);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["ATOM"] = l48);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LIST"] = l47);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["FOURTH"] = l46);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["THIRD"] = l45);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SECOND"] = l44);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["FIRST"] = l43);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CADDDR"] = l42);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CDDDR"] = l41);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CADDR"] = l40);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CDDR"] = l39);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CDAR"] = l38);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CADR"] = l37);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CAAR"] = l36);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CDR"] = l35);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CAR"] = l34);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CONSP"] = l33);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CONS"] = l32);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NOT"] = l31);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["EQL"] = l30);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["TRUNCATE"] = l29);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["ZEROP"] = l28);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["1-"] = l27);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["1+"] = l26);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["/"] = l25);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*"] = l24);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["-"] = l23);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["+"] = l22);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["="] = l21);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BOUNDP"] = l20);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["INTEGER-TO-STRING"] = l19);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["GENSYM"] = l18);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*GENSYM-COUNTER*"] = l17);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["FIND-SYMBOL"] = l16);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["INTERN"] = l15);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["INTERNP"] = l14);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["WHILE"] = l13);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["RETURN"] = l12);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NULL"] = l11);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*PACKAGE*"] = l10);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DEFUN"] = l9);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NAMED-LAMBDA"] = l8);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DEFPARAMETER"] = l7);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DEFVAR"] = l6);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["UNLESS"] = l5);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["WHEN"] = l4);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["T"] = l3);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NIL"] = l2);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DEFMACRO"] = l1);
    (l178).value = l244;
    (l147).value = l271;
    (l149).value = 605;
    (l17).value = 156;
    return (l190).value = 223;
})();
(l179).value = 271;
