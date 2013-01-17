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
    })((function(){
        var func = (function (v47){
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
        
        });
        func.docstring = 'Return the CAR part of a cons, or NIL if X is null.';
        return func;
    })());
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
var l98 = {name: "DOCUMENTATION"};
var l99 = {name: "FUNCTION"};
var l100 = {name: "VARIABLE"};
(function(){
    (l98).function = (function(v185){
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
                            return ((function(){
                                var symbol = l30;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v183, l99) !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (function(){
                                return (function(v184){
                                    return (function(){
                                        var tmp = (v184)["docstring"];
                                        return tmp == undefined? (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })(): tmp ;
                                    })();
                                })((function(){
                                    var symbol = l95;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v181));
                            })() : ((function(){
                                var symbol = l30;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v183, l100) !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (function(){
                                (((function(){
                                    var tmp = v181;
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
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })() : (function(){
                                    return (function(){
                                        throw "Wrong argument type! it should be a symbol";
                                    })();
                                })());
                                return (function(){
                                    var tmp = (v181)["vardoc"];
                                    return tmp == undefined? (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })(): tmp ;
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
    return l98;
})();
var l101 = {name: "*NEWLINE*"};
(function(){
    (((l101.value !== undefined)?(function(){
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
        return (l101).value = (function(){
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
    return l101;
})();
var l102 = {name: "CONCAT"};
(function(){
    (l102).function = (function(v187){
        ((v187)["fname"] = "CONCAT");
        return v187;
    })((function (){
        var v186= (function(){
            var symbol = l2;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        for (var i = arguments.length-1; i>=0; i--)
            v186 = {car: arguments[i], cdr: 
        v186};
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
    return l102;
})();
var l103 = {name: "CONCATF"};
l103;
var l104 = {name: "JOIN"};
(function(){
    (l104).function = (function(v190){
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
                    return ((function(){
                        var symbol = l11;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v188) !== (function(){
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
                        var tmp = v188;
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
                            var tmp = v188;
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
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var tmp = v188;
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
                        })(), v189, (function(){
                            var symbol = l104;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var tmp = v188;
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
    return l104;
})();
var l105 = {name: "JOIN-TRAILING"};
(function(){
    (l105).function = (function(v193){
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
                    return ((function(){
                        var symbol = l11;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v191) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? "" : (function(){
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = v191;
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
                    })(), v192, (function(){
                        var symbol = l105;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = v191;
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
    return l105;
})();
var l106 = {name: "MAPCONCAT"};
(function(){
    (l106).function = (function(v196){
        ((v196)["fname"] = "MAPCONCAT");
        return v196;
    })((function (v194,v195){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l104;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v194, v195));
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
    return l106;
})();
var l107 = {name: "INDENT"};
(function(){
    (l107).function = (function(v203){
        ((v203)["fname"] = "INDENT");
        return v203;
    })((function (){
        var v197= (function(){
            var symbol = l2;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        for (var i = arguments.length-1; i>=0; i--)
            v197 = {car: arguments[i], cdr: 
        v197};
        return (function(){
            try {
                return (function(){
                    return (function(v198){
                        return (function(v199,v200,v201){
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
                            })()(v198)) !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (function(){
                                return v199 = (function(){
                                    var symbol = l102;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v199, (function(){
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
                                                var x = v200;
                                                var y = v201;
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
                                                (function(v202){
                                                    return v199 = (function(){
                                                        var symbol = l102;
                                                        var func = symbol.function;
                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                        return func;
                                                    })()(v199, (function(){
                                                        return v202;
                                                    })());
                                                })((((function(){
                                                    var symbol = l76;
                                                    var func = symbol.function;
                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                    return func;
                                                })()((function(){
                                                    var string = v198;
                                                    var index = v200;
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
                                                    var x = v200;
                                                    var y = (function(){
                                                        var symbol = l27;
                                                        var func = symbol.function;
                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                        return func;
                                                    })()(v201);
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
                                                    var string = v198;
                                                    var index = (function(){
                                                        var symbol = l26;
                                                        var func = symbol.function;
                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                        return func;
                                                    })()(v200);
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
                                                    var symbol = l102;
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
                                    if (cf.type == 'block' && cf.id == 88)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return v199;
                        })("",0,(function(){
                            var symbol = l69;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v198));
                    })((function(){
                        var symbol = l104;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v197));
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
    return l107;
})();
(function(){
    (l19).function = (function(v207){
        ((v207)["fname"] = "INTEGER-TO-STRING");
        return v207;
    })((function (v204){
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
                    })()(v204) !== (function(){
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
                    })()(v204) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(){
                            var symbol = l102;
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
                                            })()(v204)) !== (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()){
                                                v205 = ({car: (function(){
                                                    var x = v204;
                                                    var y = 10;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x%y;
                                                })(), cdr: v205});
                                                v204 = (function(){
                                                    var symbol = l29;
                                                    var func = symbol.function;
                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                    return func;
                                                })()(v204, 10);
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
                                    if (cf.type == 'block' && cf.id == 90)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return (function(){
                                var symbol = l104;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l71;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function (v206){
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
                if (cf.type == 'block' && cf.id == 89)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l19;
})();
var l108 = {name: "JS!BOOL"};
var l109 = {name: "LS-COMPILE"};
(function(){
    (l108).function = (function(v209){
        ((v209)["fname"] = "JS!BOOL");
        return v209;
    })((function (v208){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("(", v208, "?", (function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), ": ", (function(){
                        var symbol = l109;
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
                if (cf.type == 'block' && cf.id == 91)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l108;
})();
var l110 = {name: "JS!SELFCALL"};
l110;
var l111 = {name: "PRIN1-TO-STRING"};
var l112 = {name: "ESCAPE-STRING"};
(function(){
    (l111).function = (function(v213){
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
                        return (v210).name;
                    })() : ((function(){
                        var symbol = l77;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v210) !== (function(){
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
                        })()(v210);
                    })() : (((typeof(v210) == "string")?(function(){
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
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("\"", (function(){
                            var symbol = l112;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v210), "\"");
                    })() : (((typeof v210 == 'function')?(function(){
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
                        return (function(v211){
                            return (v211 !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (function(){
                                var symbol = l102;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()("#<FUNCTION ", v211, ">") : (function(){
                                var symbol = l102;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()("#<FUNCTION>"));
                        })((function(){
                            var tmp = (v210)["fname"];
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
                    })()(v210) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(", (function(){
                            var symbol = l105;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l71;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l111;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), (function(){
                            var symbol = l83;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v210)), " "), (function(v212){
                            return ((function(){
                                var symbol = l11;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var tmp = v212;
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
                                var symbol = l111;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var tmp = v212;
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
                                var symbol = l102;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l111;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var tmp = v212;
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
                                var symbol = l111;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var tmp = v212;
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
                        })()(v210)), ")");
                    })() : (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())))));
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
    return l111;
})();
(function(){
    (l97).function = (function(v215){
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
                            var symbol = l101;
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
    return l97;
})();
var l113 = {name: "WARN"};
(function(){
    (l113).function = (function(v217){
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
                    return (function(){
                        var symbol = l97;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v216);
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
    return l113;
})();
var l114 = {name: "PRINT"};
(function(){
    (l114).function = (function(v219){
        ((v219)["fname"] = "PRINT");
        return v219;
    })((function (v218){
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
                        var symbol = l111;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v218));
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
    return l114;
})();
var l115 = {name: "MAKE-STRING-STREAM"};
(function(){
    (l115).function = (function(v221){
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
    return l115;
})();
var l116 = {name: "%PEEK-CHAR"};
(function(){
    (l116).function = (function(v223){
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
                            var tmp = v222;
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
                            var tmp = v222;
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
                            var tmp = v222;
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
                if (cf.type == 'block' && cf.id == 97)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l116;
})();
var l117 = {name: "%READ-CHAR"};
(function(){
    (l117).function = (function(v226){
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
                            var tmp = v224;
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
                    })() ? (function(v225){
                        (function(){
                            var x = v224;
                            if (typeof x != 'object')
                                throw 'The value ' + x + ' is not a type object.';
                            return (x.cdr = (function(){
                                var symbol = l26;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var tmp = v224;
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
                        return v225;
                    })((function(){
                        var string = (function(){
                            var tmp = v224;
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
                            var tmp = v224;
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
                if (cf.type == 'block' && cf.id == 98)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l117;
})();
var l118 = {name: "WHITESPACEP"};
(function(){
    (l118).function = (function(v230){
        ((v230)["fname"] = "WHITESPACEP");
        return v230;
    })((function (v227){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v228){
                        return (v228 !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? v228 : (function(v229){
                            return (v229 !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? v229 : (function(){
                                var symbol = l76;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v227, 9));
                        })((function(){
                            var symbol = l76;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v227, 10)));
                    })((function(){
                        var symbol = l76;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v227, 32));
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
    return l118;
})();
var l119 = {name: "SKIP-WHITESPACES"};
(function(){
    (l119).function = (function(v233){
        ((v233)["fname"] = "SKIP-WHITESPACES");
        return v233;
    })((function (v231){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v232){
                        v232 = (function(){
                            var symbol = l116;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v231);
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v232 !== (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })() ? (function(){
                                            var symbol = l118;
                                            var func = symbol.function;
                                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                            return func;
                                        })()(v232) : (function(){
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
                                                var symbol = l117;
                                                var func = symbol.function;
                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                return func;
                                            })()(v231);
                                            v232 = (function(){
                                                var symbol = l116;
                                                var func = symbol.function;
                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                return func;
                                            })()(v231);
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
                                if (cf.type == 'block' && cf.id == 101)
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
                if (cf.type == 'block' && cf.id == 100)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l119;
})();
var l120 = {name: "TERMINALP"};
(function(){
    (l120).function = (function(v238){
        ((v238)["fname"] = "TERMINALP");
        return v238;
    })((function (v234){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v235){
                        return (v235 !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? v235 : (function(v236){
                            return (v236 !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? v236 : (function(v237){
                                return (v237 !== (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })() ? v237 : (function(){
                                    var symbol = l76;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(40, v234));
                            })((function(){
                                var symbol = l76;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(41, v234)));
                        })((function(){
                            var symbol = l118;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v234)));
                    })((function(){
                        var symbol = l11;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v234));
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
    return l120;
})();
var l121 = {name: "READ-UNTIL"};
(function(){
    (l121).function = (function(v243){
        ((v243)["fname"] = "READ-UNTIL");
        return v243;
    })((function (v239,v240){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v241,v242){
                        v242 = (function(){
                            var symbol = l116;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v239);
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v242 !== (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })() ? (function(){
                                            var symbol = l31;
                                            var func = symbol.function;
                                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                            return func;
                                        })()((v240)(v242)) : (function(){
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
                                            v241 = (function(){
                                                var symbol = l102;
                                                var func = symbol.function;
                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                return func;
                                            })()(v241, (function(){
                                                var x = v242;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                return String.fromCharCode(x);
                                            })());
                                            (function(){
                                                var symbol = l117;
                                                var func = symbol.function;
                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                return func;
                                            })()(v239);
                                            v242 = (function(){
                                                var symbol = l116;
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
                                if (cf.type == 'block' && cf.id == 104)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v241;
                    })("",(function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
    return l121;
})();
var l122 = {name: "SKIP-WHITESPACES-AND-COMMENTS"};
(function(){
    (l122).function = (function(v247){
        ((v247)["fname"] = "SKIP-WHITESPACES-AND-COMMENTS");
        return v247;
    })((function (v244){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v245){
                        (function(){
                            var symbol = l119;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v244);
                        v245 = (function(){
                            var symbol = l116;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v244);
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v245 !== (function(){
                                            var symbol = l2;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })() ? (function(){
                                            var symbol = l76;
                                            var func = symbol.function;
                                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                            return func;
                                        })()(v245, 59) : (function(){
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
                                                var symbol = l121;
                                                var func = symbol.function;
                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                return func;
                                            })()(v244, (function (v246){
                                                if (arguments.length < 1) throw 'too few arguments';
                                                if (arguments.length > 1) throw 'too many arguments';
                                                return (function(){
                                                    var symbol = l76;
                                                    var func = symbol.function;
                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                    return func;
                                                })()(v246, 10);
                                            
                                            }));
                                            (function(){
                                                var symbol = l119;
                                                var func = symbol.function;
                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                return func;
                                            })()(v244);
                                            v245 = (function(){
                                                var symbol = l116;
                                                var func = symbol.function;
                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                return func;
                                            })()(v244);
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
                                if (cf.type == 'block' && cf.id == 106)
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
                if (cf.type == 'block' && cf.id == 105)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l122;
})();
var l123 = {name: "%READ-LIST"};
var l124 = {name: "LS-READ"};
(function(){
    (l123).function = (function(v251){
        ((v251)["fname"] = "%READ-LIST");
        return v251;
    })((function (v248){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var symbol = l122;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v248);
                    return (function(v249){
                        return ((function(){
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
                                throw "Unspected EOF";
                            })();
                        })() : ((function(){
                            var symbol = l76;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v249, 41) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            (function(){
                                var symbol = l117;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v248);
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
                        })()(v249, 46) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            (function(){
                                var symbol = l117;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v248);
                            return (function(v250){
                                (function(){
                                    var symbol = l122;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v248);
                                ((function(){
                                    var symbol = l76;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()((function(){
                                    var symbol = l117;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v248), 41) !== (function(){
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
                                return v250;
                            })((function(){
                                var symbol = l124;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v248));
                        })() : (function(){
                            return ({car: (function(){
                                var symbol = l124;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v248), cdr: (function(){
                                var symbol = l123;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v248)});
                        })())));
                    })((function(){
                        var symbol = l116;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v248));
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
    return l123;
})();
var l125 = {name: "READ-STRING"};
(function(){
    (l125).function = (function(v255){
        ((v255)["fname"] = "READ-STRING");
        return v255;
    })((function (v252){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v253,v254){
                        v254 = (function(){
                            var symbol = l117;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v252);
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
                                        })()(v254, 34)) !== (function(){
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
                                            })()(v254) !== (function(){
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
                                            })()(v254, 92) !== (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })() ? (function(){
                                                return v254 = (function(){
                                                    var symbol = l117;
                                                    var func = symbol.function;
                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                    return func;
                                                })()(v252);
                                            })() : (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })());
                                            v253 = (function(){
                                                var symbol = l102;
                                                var func = symbol.function;
                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                return func;
                                            })()(v253, (function(){
                                                var x = v254;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                return String.fromCharCode(x);
                                            })());
                                            v254 = (function(){
                                                var symbol = l117;
                                                var func = symbol.function;
                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                return func;
                                            })()(v252);
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
                                if (cf.type == 'block' && cf.id == 109)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v253;
                    })("",(function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
    return l125;
})();
var l126 = {name: "READ-SHARP"};
(function(){
    (l126).function = (function(v260){
        ((v260)["fname"] = "READ-SHARP");
        return v260;
    })((function (v256){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var symbol = l117;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v256);
                    return (function(v257){
                        return ((function(){
                            var symbol = l30;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v257, 39) !== (function(){
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
                            })()(l99, (function(){
                                var symbol = l124;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v256));
                        })() : ((function(){
                            var symbol = l30;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v257, 92) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            return (function(v258){
                                return ((function(){
                                    var symbol = l94;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v258, "space") !== (function(){
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
                                })()(v258, "tab") !== (function(){
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
                                })()(v258, "newline") !== (function(){
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
                                        var string = v258;
                                        var index = 0;
                                        if (typeof string != 'string')
                                            throw 'The value ' + string + ' is not a type string.';
                                        if (typeof index != 'number')
                                            throw 'The value ' + index + ' is not a type number.';
                                        return string.charCodeAt(index);
                                    })());
                                })())));
                            })((function(){
                                var symbol = l102;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var x = (function(){
                                    var symbol = l117;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v256);
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                return String.fromCharCode(x);
                            })(), (function(){
                                var symbol = l121;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v256, (function(){
                                var symbol = l120;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })())));
                        })() : ((function(){
                            var symbol = l30;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v257, 43) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            return (function(v259){
                                return ((function(){
                                    var symbol = l94;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v259, "common-lisp") !== (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })() ? (function(){
                                    (function(){
                                        var symbol = l124;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v256);
                                    return (function(){
                                        var symbol = l124;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v256);
                                })() : ((function(){
                                    var symbol = l94;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v259, "ecmalisp") !== (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })() ? (function(){
                                    return (function(){
                                        var symbol = l124;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v256);
                                })() : (function(){
                                    return (function(){
                                        throw "Unknown reader form.";
                                    })();
                                })()));
                            })((function(){
                                var symbol = l121;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v256, (function(){
                                var symbol = l120;
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
                        var symbol = l117;
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
    return l126;
})();
var l127 = {name: "*EOF*"};
(function(){
    (((l127.value !== undefined)?(function(){
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
        return (l127).value = (function(){
            var name = "EOF";
            if (typeof name != 'string')
                throw 'The value ' + name + ' is not a type string.';
            return ({name: name});
        })();
    })());
    return l127;
})();
var l128 = {name: "QUOTE"};
var l129 = {name: "BACKQUOTE"};
var l130 = {name: "UNQUOTE-SPLICING"};
var l131 = {name: "UNQUOTE"};
(function(){
    (l124).function = (function(v264){
        ((v264)["fname"] = "LS-READ");
        return v264;
    })((function (v261){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var symbol = l122;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v261);
                    return (function(v262){
                        return ((function(){
                            var symbol = l11;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v262) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            return (function(){
                                var symbol = l127;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })();
                        })() : ((function(){
                            var symbol = l76;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v262, 40) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            (function(){
                                var symbol = l117;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v261);
                            return (function(){
                                var symbol = l123;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v261);
                        })() : ((function(){
                            var symbol = l76;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v262, 39) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            (function(){
                                var symbol = l117;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v261);
                            return (function(){
                                var symbol = l47;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l128, (function(){
                                var symbol = l124;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v261));
                        })() : ((function(){
                            var symbol = l76;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v262, 96) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            (function(){
                                var symbol = l117;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v261);
                            return (function(){
                                var symbol = l47;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l129, (function(){
                                var symbol = l124;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v261));
                        })() : ((function(){
                            var symbol = l76;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v262, 34) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            (function(){
                                var symbol = l117;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v261);
                            return (function(){
                                var symbol = l125;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v261);
                        })() : ((function(){
                            var symbol = l76;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v262, 44) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            (function(){
                                var symbol = l117;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v261);
                            return ((function(){
                                var symbol = l30;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l116;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v261), 64) !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (function(){
                                (function(){
                                    var symbol = l117;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v261);
                                return (function(){
                                    var symbol = l47;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l130, (function(){
                                    var symbol = l124;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v261));
                            })() : (function(){
                                var symbol = l47;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l131, (function(){
                                var symbol = l124;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v261)));
                        })() : ((function(){
                            var symbol = l76;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v262, 35) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            return (function(){
                                var symbol = l126;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v261);
                        })() : (function(){
                            return (function(v263){
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
                                })(), v263) !== (function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })() ? (function(){
                                    var symbol = l90;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v263) : (function(){
                                    var symbol = l15;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()((function(){
                                    var x = v263;
                                    if (typeof x != 'string')
                                        throw 'The value ' + x + ' is not a type string.';
                                    return x.toUpperCase();
                                })()));
                            })((function(){
                                var symbol = l121;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v261, (function(){
                                var symbol = l120;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()));
                        })())))))));
                    })((function(){
                        var symbol = l116;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v261));
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
    return l124;
})();
var l132 = {name: "LS-READ-FROM-STRING"};
(function(){
    (l132).function = (function(v266){
        ((v266)["fname"] = "LS-READ-FROM-STRING");
        return v266;
    })((function (v265){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l124;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l115;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v265));
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
var l133 = {name: "*COMPILATION-UNIT-CHECKS*"};
(function(){
    (((l133.value !== undefined)?(function(){
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
        return (l133).value = l2;
    })());
    return l133;
})();
var l134 = {name: "MAKE-BINDING"};
(function(){
    (l134).function = (function(v271){
        ((v271)["fname"] = "MAKE-BINDING");
        return v271;
    })((function (v267,v268,v269,v270){
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
                    })()(v267, v268, v269, v270);
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
var l135 = {name: "BINDING-NAME"};
(function(){
    (l135).function = (function(v273){
        ((v273)["fname"] = "BINDING-NAME");
        return v273;
    })((function (v272){
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
                    })()(v272);
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
var l136 = {name: "BINDING-TYPE"};
(function(){
    (l136).function = (function(v275){
        ((v275)["fname"] = "BINDING-TYPE");
        return v275;
    })((function (v274){
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
                    })()(v274);
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
var l137 = {name: "BINDING-VALUE"};
(function(){
    (l137).function = (function(v277){
        ((v277)["fname"] = "BINDING-VALUE");
        return v277;
    })((function (v276){
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
                    })()(v276);
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
    return l137;
})();
var l138 = {name: "SET-BINDING-VALUE"};
(function(){
    (l138).function = (function(v280){
        ((v280)["fname"] = "SET-BINDING-VALUE");
        return v280;
    })((function (v278,v279){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = (function(){
                            var tmp = (function(){
                                var tmp = v278;
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
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = v279);
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
    return l138;
})();
var l139 = {name: "BINDING-DECLARED"};
(function(){
    (l139).function = (function(v282){
        ((v282)["fname"] = "BINDING-DECLARED");
        return v282;
    })((function (v281){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (v281 !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        var symbol = l46;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v281) : (function(){
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
    return l139;
})();
var l140 = {name: "MARK-BINDING-AS-DECLARED"};
(function(){
    (l140).function = (function(v284){
        ((v284)["fname"] = "MARK-BINDING-AS-DECLARED");
        return v284;
    })((function (v283){
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
                        })()(v283);
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
                if (cf.type == 'block' && cf.id == 119)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l140;
})();
var l141 = {name: "MAKE-LEXENV"};
(function(){
    (l141).function = (function(v285){
        ((v285)["fname"] = "MAKE-LEXENV");
        return v285;
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
                if (cf.type == 'block' && cf.id == 120)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l141;
})();
var l142 = {name: "COPY-LEXENV"};
(function(){
    (l142).function = (function(v287){
        ((v287)["fname"] = "COPY-LEXENV");
        return v287;
    })((function (v286){
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
                    })()(v286);
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
var l143 = {name: "PUSH-TO-LEXENV"};
var l144 = {name: "BLOCK"};
var l145 = {name: "GOTAG"};
(function(){
    (l143).function = (function(v292){
        ((v292)["fname"] = "PUSH-TO-LEXENV");
        return v292;
    })((function (v288,v289,v290){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v291){
                        return ((function(){
                            var symbol = l30;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v291, l100) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            return (function(){
                                var x = v289;
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v288, cdr: (function(){
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
                                })()}));
                            })();
                        })() : ((function(){
                            var symbol = l30;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v291, l99) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(){
                            return (function(){
                                var x = (function(){
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
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v288, cdr: (function(){
                                    var symbol = l37;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v289)}));
                            })();
                        })() : ((function(){
                            var symbol = l30;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v291, l144) !== (function(){
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
                                })()(v289);
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v288, cdr: (function(){
                                    var symbol = l40;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v289)}));
                            })();
                        })() : ((function(){
                            var symbol = l30;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v291, l145) !== (function(){
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
                                })()(v289);
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v288, cdr: (function(){
                                    var symbol = l42;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v289)}));
                            })();
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })()))));
                    })(v290);
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
var l146 = {name: "EXTEND-LEXENV"};
(function(){
    (l146).function = (function(v299){
        ((v299)["fname"] = "EXTEND-LEXENV");
        return v299;
    })((function (v293,v294,v295){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v296){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v297,v298){
                                        (function(){
                                            while(v297 !== (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()){
                                                v298 = (function(){
                                                    var tmp = v297;
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
                                                        var symbol = l143;
                                                        var func = symbol.function;
                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                        return func;
                                                    })()(v298, v296, v295);
                                                    return (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })();
                                                })();
                                                v297 = (function(){
                                                    var tmp = v297;
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
                                        return v296;
                                    })((function(){
                                        var symbol = l67;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v293),(function(){
                                        var symbol = l2;
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
                    })((function(){
                        var symbol = l142;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v294));
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
    return l146;
})();
var l147 = {name: "LOOKUP-IN-LEXENV"};
(function(){
    (l147).function = (function(v304){
        ((v304)["fname"] = "LOOKUP-IN-LEXENV");
        return v304;
    })((function (v300,v301,v302){
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
                    })()(v300, (function(v303){
                        return ((function(){
                            var symbol = l30;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v303, l100) !== (function(){
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
                            })()(v301);
                        })() : ((function(){
                            var symbol = l30;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v303, l99) !== (function(){
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
                            })()(v301);
                        })() : ((function(){
                            var symbol = l30;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v303, l144) !== (function(){
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
                            })()(v301);
                        })() : ((function(){
                            var symbol = l30;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v303, l145) !== (function(){
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
                            })()(v301);
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })()))));
                    })(v302));
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
var l148 = {name: "*GLOBAL-ENVIRONMENT*"};
(function(){
    (((l148.value !== undefined)?(function(){
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
        return (l148).value = (function(){
            var symbol = l141;
            var func = symbol.function;
            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
            return func;
        })()();
    })());
    return l148;
})();
var l149 = {name: "*ENVIRONMENT*"};
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
        return (l149).value = (function(){
            var symbol = l141;
            var func = symbol.function;
            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
            return func;
        })()();
    })());
    return l149;
})();
var l150 = {name: "CLEAR-UNDECLARED-GLOBAL-BINDINGS"};
(function(){
    (l150).function = (function(v306){
        ((v306)["fname"] = "CLEAR-UNDECLARED-GLOBAL-BINDINGS");
        return v306;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l149).value = (function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function (v305){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(){
                            var symbol = l87;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l139;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v305);
                    
                    }), (function(){
                        var symbol = l149;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
    return l150;
})();
var l151 = {name: "*VARIABLE-COUNTER*"};
(function(){
    (((l151.value !== undefined)?(function(){
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
        return (l151).value = 0;
    })());
    return l151;
})();
var l152 = {name: "GVARNAME"};
(function(){
    (l152).function = (function(v308){
        ((v308)["fname"] = "GVARNAME");
        return v308;
    })((function (v307){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("v", (function(){
                        var symbol = l19;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((l151).value = (function(){
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
    (l153).function = (function(v310){
        ((v310)["fname"] = "TRANSLATE-VARIABLE");
        return v310;
    })((function (v309){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l137;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l147;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v309, (function(){
                        var symbol = l149;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l100));
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
    (l154).function = (function(v316){
        ((v316)["fname"] = "EXTEND-LOCAL-ENV");
        return v316;
    })((function (v311){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v312){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v313,v314){
                                        (function(){
                                            while(v313 !== (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()){
                                                v314 = (function(){
                                                    var tmp = v313;
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
                                                    (function(v315){
                                                        return (function(){
                                                            var symbol = l143;
                                                            var func = symbol.function;
                                                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                            return func;
                                                        })()(v315, v312, l100);
                                                    })((function(){
                                                        var symbol = l134;
                                                        var func = symbol.function;
                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                        return func;
                                                    })()(v314, l155, (function(){
                                                        var symbol = l152;
                                                        var func = symbol.function;
                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                        return func;
                                                    })()(v314), (function(){
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
                                                v313 = (function(){
                                                    var tmp = v313;
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
                                        return v312;
                                    })(v311,(function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })());
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 130)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })((function(){
                        var symbol = l142;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l149;
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
    (((l156.value !== undefined)?(function(){
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
        return (l156).value = (function(){
            var symbol = l2;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
    })());
    return l156;
})();
var l157 = {name: "TOPLEVEL-COMPILATION"};
(function(){
    (l157).function = (function(v318){
        ((v318)["fname"] = "TOPLEVEL-COMPILATION");
        return v318;
    })((function (v317){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l156).value = ({car: v317, cdr: (function(){
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
    (l158).function = (function(v320){
        ((v320)["fname"] = "NULL-OR-EMPTY-P");
        return v320;
    })((function (v319){
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
                    })()(v319));
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
    (l159).function = (function(v321){
        ((v321)["fname"] = "GET-TOPLEVEL-COMPILATIONS");
        return v321;
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
    (l160).function = (function(v324){
        ((v324)["fname"] = "%COMPILE-DEFMACRO");
        return v324;
    })((function (v322,v323){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var symbol = l157;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l109;
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
                    })()(l128), (function(){
                        var symbol = l47;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v322))));
                    return (function(){
                        var symbol = l143;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l134;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v322, l161, v323, (function(){
                        var symbol = l3;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), (function(){
                        var symbol = l149;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l99);
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
var l162 = {name: "*COMPILATIONS*"};
(function(){
    (((l162.value !== undefined)?(function(){
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
        return (l162).value = (function(){
            var symbol = l2;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
    })());
    return l162;
})();
var l163 = {name: "LS-COMPILE-BLOCK"};
(function(){
    (l163).function = (function(v327){
        ((v327)["fname"] = "LS-COMPILE-BLOCK");
        return v327;
    })((function (v325,v326){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v326=(function(){
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
                    return (v326 !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l163;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l83;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v325)), "return ", (function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = (function(){
                            var symbol = l82;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v325);
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
                        var symbol = l105;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l86;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l158;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), (function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v325)), (function(){
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(";", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())));
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
    return l163;
})();
var l164 = {name: "DEFINE-COMPILATION"};
l164;
var l165 = {name: "IF"};
(l162).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l165, (function (v328,v329,v330){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l102;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("(", (function(){
                    var symbol = l109;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v328), " !== ", (function(){
                    var symbol = l109;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), " ? ", (function(){
                    var symbol = l109;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v329), " : ", (function(){
                    var symbol = l109;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v330), ")");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 136)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l162;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l166 = {name: "*LAMBDA-LIST-KEYWORDS*"};
var l167 = {name: "&OPTIONAL"};
var l168 = {name: "&REST"};
var l169 = {car: l167, cdr: {car: l168, cdr: l2}};
(function(){
    (((l166.value !== undefined)?(function(){
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
        return (l166).value = l169;
    })());
    return l166;
})();
var l170 = {name: "LIST-UNTIL-KEYWORD"};
(function(){
    (l170).function = (function(v333){
        ((v333)["fname"] = "LIST-UNTIL-KEYWORD");
        return v333;
    })((function (v331){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(v332){
                        return (v332 !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? v332 : (function(){
                            var symbol = l84;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var tmp = v331;
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
                            var symbol = l166;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()));
                    })((function(){
                        var symbol = l11;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v331)) !== (function(){
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
                        var tmp = v331;
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
                        var symbol = l170;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = v331;
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
                if (cf.type == 'block' && cf.id == 137)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l170;
})();
var l171 = {name: "LAMBDA-LIST-REQUIRED-ARGUMENTS"};
(function(){
    (l171).function = (function(v335){
        ((v335)["fname"] = "LAMBDA-LIST-REQUIRED-ARGUMENTS");
        return v335;
    })((function (v334){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l170;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v334);
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
var l172 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"};
(function(){
    (l172).function = (function(v337){
        ((v337)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
        return v337;
    })((function (v336){
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
                        var symbol = l170;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = (function(){
                            var symbol = l84;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l167, v336);
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
var l173 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS"};
(function(){
    (l173).function = (function(v339){
        ((v339)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS");
        return v339;
    })((function (v338){
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
                        var symbol = l172;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v338));
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
    return l173;
})();
var l174 = {name: "LAMBDA-LIST-REST-ARGUMENT"};
(function(){
    (l174).function = (function(v342){
        ((v342)["fname"] = "LAMBDA-LIST-REST-ARGUMENT");
        return v342;
    })((function (v340){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v341){
                        ((function(){
                            var tmp = v341;
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
                            var tmp = v341;
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
                        var symbol = l170;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = (function(){
                            var symbol = l84;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l168, v340);
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
                if (cf.type == 'block' && cf.id == 141)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l174;
})();
var l175 = {name: "LAMBDA-DOCSTRING-WRAPPER"};
(function(){
    (l175).function = (function(v345){
        ((v345)["fname"] = "LAMBDA-DOCSTRING-WRAPPER");
        return v345;
    })((function (v344){
        if (arguments.length < 1) throw 'too few arguments';
        var v343= (function(){
            var symbol = l2;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        for (var i = arguments.length-1; i>=1; i--)
            v343 = {car: arguments[i], cdr: 
        v343};
        return (function(){
            try {
                return (function(){
                    return (v344 !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("(function(){", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), (function(){
                        var symbol = l107;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("var func = ", (function(){
                        var symbol = l104;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v343), ";", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "func.docstring = '", v344, "';", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "return func;", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : (function(){
                        var symbol = l104;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v343));
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
var l176 = {name: "LAMBDA"};
(l162).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l176, (function (v347){
    if (arguments.length < 1) throw 'too few arguments';
    var v346= (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })();
    for (var i = arguments.length-1; i>=1; i--)
        v346 = {car: arguments[i], cdr: 
    v346};
    return (function(){
        try {
            return (function(){
                return (function(v348,v349,v350,v351){
                    ((((typeof((function(){
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
                    })()) == "string")?(function(){
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
                        var symbol = l11;
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
                        })(): tmp.cdr;
                    })())) : (function(){
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
                        v351 = (function(){
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
                        })();
                        return v346 = (function(){
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
                            })(): tmp.cdr;
                        })();
                    })() : (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                    return (function(v352,v353,v354){
                        try {
                            var tmp;
                            tmp = l149.value;
                            l149.value = v354;
                            v354 = tmp;
                            return (function(){
                                var symbol = l175;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v351, "(function (", (function(){
                                var symbol = l104;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l71;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l153;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })(), (function(){
                                var symbol = l65;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v348, v349)), ","), "){", (function(){
                                var symbol = l101;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(){
                                var symbol = l107;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((v348 !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (function(){
                                var symbol = l102;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()("if (arguments.length < ", (function(){
                                var symbol = l19;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v352), ") throw 'too few arguments';", (function(){
                                var symbol = l101;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), ((function(){
                                var symbol = l31;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v350) !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (function(){
                                var symbol = l102;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()("if (arguments.length > ", (function(){
                                var symbol = l19;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var x = v352;
                                var y = v353;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })()), ") throw 'too many arguments';", (function(){
                                var symbol = l101;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (v349 !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (function(){
                                var symbol = l102;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()("switch(arguments.length){", (function(){
                                var symbol = l101;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(v355,v356,v357){
                                return (function(){
                                    (function(){
                                        try {
                                            return (function(){
                                                return (function(){
                                                    while(((function(){
                                                        var x = v357;
                                                        var y = v353;
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
                                                            v356 = ({car: (function(){
                                                                var symbol = l102;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()("case ", (function(){
                                                                var symbol = l19;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()((function(){
                                                                var x = v357;
                                                                var y = v352;
                                                                if (typeof x != 'number')
                                                                    throw 'The value ' + x + ' is not a type number.';
                                                                if (typeof y != 'number')
                                                                    throw 'The value ' + y + ' is not a type number.';
                                                                return x+y;
                                                            })()), ":", (function(){
                                                                var symbol = l101;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })(), (function(){
                                                                var symbol = l153;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()((function(){
                                                                var tmp = v358;
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
                                                                var symbol = l109;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()((function(){
                                                                var symbol = l37;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()(v358)), ";", (function(){
                                                                var symbol = l101;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })()), cdr: v356});
                                                            return v357 = (function(){
                                                                var x = v357;
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
                                                        })()(v357, v355));
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
                                            if (cf.type == 'block' && cf.id == 144)
                                                return cf.value;
                                            else
                                                throw cf;
                                        }
                                    })();
                                    v356 = ({car: (function(){
                                        var symbol = l102;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()("default: break;", (function(){
                                        var symbol = l101;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()), cdr: v356});
                                    return (function(){
                                        var symbol = l104;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()((function(){
                                        var symbol = l67;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v356));
                                })();
                            })((function(){
                                var symbol = l172;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v347),(function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(),0), "}", (function(){
                                var symbol = l101;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (v350 !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (function(v359){
                                return (function(){
                                    var symbol = l102;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()("var ", v359, "= ", (function(){
                                    var symbol = l109;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()((function(){
                                    var symbol = l2;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()), ";", (function(){
                                    var symbol = l101;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "for (var i = arguments.length-1; i>=", (function(){
                                    var symbol = l19;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()((function(){
                                    var x = v352;
                                    var y = v353;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    if (typeof y != 'number')
                                        throw 'The value ' + y + ' is not a type number.';
                                    return x+y;
                                })()), "; i--)", (function(){
                                    var symbol = l101;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), (function(){
                                    var symbol = l107;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v359, " = ", "{car: arguments[i], cdr: "), v359, "};", (function(){
                                    var symbol = l101;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })((function(){
                                var symbol = l153;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v350)) : ""), (function(){
                                var symbol = l163;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v346, (function(){
                                var symbol = l3;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })())), (function(){
                                var symbol = l101;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "})");
                        }
                        finally {
                            l149.value = v354;
                        }
                    })((function(){
                        var symbol = l69;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v348),(function(){
                        var symbol = l69;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v349),(function(){
                        var symbol = l154;
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
                    })()(v350), v348, v349)));
                })((function(){
                    var symbol = l171;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v347),(function(){
                    var symbol = l173;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v347),(function(){
                    var symbol = l174;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v347),(function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
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
    var symbol = l162;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l177 = {name: "SETQ"};
var l178 = {name: "SET"};
(l162).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l177, (function (v360,v361){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v362){
                    return ((((function(){
                        var symbol = l136;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v362) === l155)?(function(){
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
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l137;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v362), " = ", (function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v361)) : (function(){
                        var symbol = l109;
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
                    })()(l178), (function(){
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
                    })()(l128), (function(){
                        var symbol = l47;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v360))), (function(){
                        var symbol = l47;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v361))));
                })((function(){
                    var symbol = l147;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v360, (function(){
                    var symbol = l149;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l100));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 145)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l162;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l179 = {name: "JS-VREF"};
(l162).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l179, (function (v363){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return v363;
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 146)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l162;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l180 = {name: "JS-VSET"};
(l162).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l180, (function (v364,v365){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l102;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("(", v364, " = ", (function(){
                    var symbol = l109;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v365), ")");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 147)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l162;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
(function(){
    (l112).function = (function(v372){
        ((v372)["fname"] = "ESCAPE-STRING");
        return v372;
    })((function (v366){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v367,v368,v369){
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(((function(){
                                            var x = v368;
                                            var y = v369;
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
                                            (function(v370){
                                                ((function(v371){
                                                    return (v371 !== (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })() ? v371 : (function(){
                                                        var symbol = l76;
                                                        var func = symbol.function;
                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                        return func;
                                                    })()(v370, 92));
                                                })((function(){
                                                    var symbol = l76;
                                                    var func = symbol.function;
                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                    return func;
                                                })()(v370, 34)) !== (function(){
                                                    var symbol = l2;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })() ? (function(){
                                                    return v367 = (function(){
                                                        var symbol = l102;
                                                        var func = symbol.function;
                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                        return func;
                                                    })()(v367, "\\");
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
                                                })()(v370, 10) !== (function(){
                                                    var symbol = l2;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })() ? (function(){
                                                    v367 = (function(){
                                                        var symbol = l102;
                                                        var func = symbol.function;
                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                        return func;
                                                    })()(v367, "\\");
                                                    return v370 = 110;
                                                })() : (function(){
                                                    var symbol = l2;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })());
                                                return v367 = (function(){
                                                    var symbol = l102;
                                                    var func = symbol.function;
                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                    return func;
                                                })()(v367, (function(){
                                                    var x = v370;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    return String.fromCharCode(x);
                                                })());
                                            })((function(){
                                                var string = v366;
                                                var index = v368;
                                                if (typeof string != 'string')
                                                    throw 'The value ' + string + ' is not a type string.';
                                                if (typeof index != 'number')
                                                    throw 'The value ' + index + ' is not a type number.';
                                                return string.charCodeAt(index);
                                            })());
                                            v368 = (function(){
                                                var x = v368;
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
                                if (cf.type == 'block' && cf.id == 149)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v367;
                    })("",0,(function(){
                        var symbol = l69;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v366));
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
    return l112;
})();
var l181 = {name: "*LITERAL-SYMBOLS*"};
(function(){
    (((l181.value !== undefined)?(function(){
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
        return (l181).value = (function(){
            var symbol = l2;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
    })());
    return l181;
})();
var l182 = {name: "*LITERAL-COUNTER*"};
(function(){
    (((l182.value !== undefined)?(function(){
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
        return (l182).value = 0;
    })());
    return l182;
})();
var l183 = {name: "GENLIT"};
(function(){
    (l183).function = (function(v373){
        ((v373)["fname"] = "GENLIT");
        return v373;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("l", (function(){
                        var symbol = l19;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((l182).value = (function(){
                        var x = (function(){
                            var symbol = l182;
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
                if (cf.type == 'block' && cf.id == 150)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l183;
})();
var l184 = {name: "LITERAL"};
(function(){
    (l184).function = (function(v381){
        ((v381)["fname"] = "LITERAL");
        return v381;
    })((function (v374,v375){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v375=(function(){
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
                    })()(v374) !== (function(){
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
                        })()(v374);
                    })() : (((typeof(v374) == "string")?(function(){
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
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("\"", (function(){
                            var symbol = l112;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v374), "\"");
                    })() : (((function(){
                        var tmp = v374;
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
                        return (function(v376){
                            return (v376 !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? v376 : (function(v377,v378){
                                (l181).value = ({car: ({car: v374, cdr: v377}), cdr: (function(){
                                    var symbol = l181;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()});
                                (function(){
                                    var symbol = l157;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()((function(){
                                    var symbol = l102;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()("var ", v377, " = ", v378));
                                return v377;
                            })((function(){
                                var symbol = l183;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(),(function(){
                                var symbol = l109;
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
                            })()((v374).name)))));
                        })((function(){
                            var tmp = (function(){
                                var symbol = l93;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v374, (function(){
                                var symbol = l181;
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
                        var tmp = v374;
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
                        return (function(v379){
                            return (v375 !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? v379 : (function(v380){
                                (function(){
                                    var symbol = l157;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()((function(){
                                    var symbol = l102;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()("var ", v380, " = ", v379));
                                return v380;
                            })((function(){
                                var symbol = l183;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()()));
                        })((function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("{car: ", (function(){
                            var symbol = l184;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var tmp = v374;
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
                            var symbol = l184;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var tmp = v374;
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
                if (cf.type == 'block' && cf.id == 151)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l184;
})();
(l162).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l128, (function (v382){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l184;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v382);
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
    var symbol = l162;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l185 = {name: "%WHILE"};
(l162).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l185, (function (v384){
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
                return (function(){
                    var symbol = l102;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("(function(){", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(){
                    var symbol = l107;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("while(", (function(){
                    var symbol = l109;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v384), " !== ", (function(){
                    var symbol = l109;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "){", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(){
                    var symbol = l107;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l163;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v383)), "}", "return ", (function(){
                    var symbol = l109;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), ";", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
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
    var symbol = l162;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l186 = {name: "SYMBOL-FUNCTION"};
(l162).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l99, (function (v385){
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
                })()(v385) !== (function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() ? (((function(){
                    var tmp = v385;
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
                })() === l176)?(function(){
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
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v385);
                })() : (((function(){
                    var tmp = v385;
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
                        var symbol = l109;
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
                    })()(l186), (function(){
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
                    })()(l128), (function(){
                        var symbol = l47;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v385)))));
                })() : (function(){
                    var symbol = l2;
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

})), cdr: (function(){
    var symbol = l162;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l187 = {name: "EVAL-WHEN-COMPILE"};
var l188 = {name: "EVAL"};
var l189 = {name: "PROGN"};
(l162).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l187, (function (){
    var v386= (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })();
    for (var i = arguments.length-1; i>=0; i--)
        v386 = {car: arguments[i], cdr: 
    v386};
    return (function(){
        try {
            return (function(){
                (function(){
                    var symbol = l188;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(({car: l189, cdr: v386}));
                return (function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })();
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
    var symbol = l162;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l190 = {name: "DEFINE-TRANSFORMATION"};
l190;
(l162).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l189, (function (){
    var v387= (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })();
    for (var i = arguments.length-1; i>=0; i--)
        v387 = {car: arguments[i], cdr: 
    v387};
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l102;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("(function(){", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(){
                    var symbol = l107;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l163;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v387, (function(){
                    var symbol = l3;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), "})()");
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
    var symbol = l162;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l191 = {name: "DYNAMIC-BINDING-WRAPPER"};
(function(){
    (l191).function = (function(v394){
        ((v394)["fname"] = "DYNAMIC-BINDING-WRAPPER");
        return v394;
    })((function (v388,v389){
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
                    })()(v388) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? v389 : (function(){
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("try {", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), (function(){
                        var symbol = l107;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("var tmp;", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), (function(){
                        var symbol = l104;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function (v390){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v391){
                            return (function(){
                                var symbol = l102;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()("tmp = ", v391, ".value;", (function(){
                                var symbol = l101;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), v391, ".value = ", (function(){
                                var tmp = v390;
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
                                var symbol = l101;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(){
                                var tmp = v390;
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
                                var symbol = l101;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })((function(){
                            var symbol = l109;
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
                        })()(l128), (function(){
                            var symbol = l47;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var tmp = v390;
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
                    
                    }), v388)), v389), "}", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "finally {", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), (function(){
                        var symbol = l107;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l105;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function (v392){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v393){
                            return (function(){
                                var symbol = l102;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v393, ".value", " = ", (function(){
                                var tmp = v392;
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
                            var symbol = l109;
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
                        })()(l128), (function(){
                            var symbol = l47;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var tmp = v392;
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
                    
                    }), v388), (function(){
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(";", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()))), "}", (function(){
                        var symbol = l101;
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
    return l191;
})();
var l192 = {name: "LET"};
(l162).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l192, (function (v396){
    if (arguments.length < 1) throw 'too few arguments';
    var v395= (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })();
    for (var i = arguments.length-1; i>=1; i--)
        v395 = {car: arguments[i], cdr: 
    v395};
    return (function(){
        try {
            return (function(){
                return (function(v397){
                    return (function(v398,v399){
                        return (function(v400,v402,v401){
                            try {
                                var tmp;
                                tmp = l149.value;
                                l149.value = v402;
                                v402 = tmp;
                                return (function(){
                                    var symbol = l102;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()("(function(", (function(){
                                    var symbol = l104;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()((function(){
                                    var symbol = l71;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()((function (v403){
                                    if (arguments.length < 1) throw 'too few arguments';
                                    if (arguments.length > 1) throw 'too many arguments';
                                    return (((v403.value !== undefined)?(function(){
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
                                    })() ? (function(v404){
                                        v401 = ({car: ({car: v403, cdr: v404}), cdr: v401});
                                        return v404;
                                    })((function(){
                                        var symbol = l152;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v403)) : (function(){
                                        var symbol = l153;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v403));
                                
                                }), v398), ","), "){", (function(){
                                    var symbol = l101;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), (function(v405){
                                    return (function(){
                                        var symbol = l107;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()((function(){
                                        var symbol = l191;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v401, v405));
                                })((function(){
                                    var symbol = l163;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v395, (function(){
                                    var symbol = l3;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })())), "})(", (function(){
                                    var symbol = l104;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v400, ","), ")");
                            }
                            finally {
                                l149.value = v402;
                            }
                        })((function(){
                            var symbol = l71;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l109;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v399),(function(){
                            var symbol = l154;
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
                        })(), v398)),(function(){
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
                    })(), v397),(function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l44;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v397));
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
                })(), v396));
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
    var symbol = l162;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l193 = {name: "*BLOCK-COUNTER*"};
(function(){
    (((l193.value !== undefined)?(function(){
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
        return (l193).value = 0;
    })());
    return l193;
})();
(l162).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l144, (function (v407){
    if (arguments.length < 1) throw 'too few arguments';
    var v406= (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })();
    for (var i = arguments.length-1; i>=1; i--)
        v406 = {car: arguments[i], cdr: 
    v406};
    return (function(){
        try {
            return (function(){
                return (function(v408){
                    return (function(v409){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("try {", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(v410){
                            try {
                                var tmp;
                                tmp = l149.value;
                                l149.value = v410;
                                v410 = tmp;
                                return (function(){
                                    var symbol = l107;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()("return ", (function(){
                                    var symbol = l109;
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
                                })()(l189), v406)), ";", (function(){
                                    var symbol = l101;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            }
                            finally {
                                l149.value = v410;
                            }
                        })((function(){
                            var symbol = l146;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l47;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v409), (function(){
                            var symbol = l149;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l144)), "}", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "catch (cf){", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    if (cf.type == 'block' && cf.id == ", v408, ")", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        return cf.value;", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    else", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        throw cf;", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "}", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l134;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v407, l144, v408, (function(){
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
                })()((l193).value = (function(){
                    var x = (function(){
                        var symbol = l193;
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
            if (cf.type == 'block' && cf.id == 159)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l162;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l194 = {name: "RETURN-FROM"};
(l162).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l194, (function (v411,v412){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    switch(arguments.length){
    case 1:
    v412=(function(){
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
                return (function(v413){
                    return (v413 !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("(function(){", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), (function(){
                        var symbol = l107;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("throw ({", "type: 'block', ", "id: ", (function(){
                        var symbol = l137;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v413), ", ", "value: ", (function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v412), ", ", "message: 'Return from unknown block ", (v411).name, ".'", "})"), "})()") : (function(){
                        throw (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("Unknown block `", (v411).name, "'.");
                    })());
                })((function(){
                    var symbol = l147;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v411, (function(){
                    var symbol = l149;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l144));
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
    var symbol = l162;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l195 = {name: "CATCH"};
(l162).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l195, (function (v415){
    if (arguments.length < 1) throw 'too few arguments';
    var v414= (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })();
    for (var i = arguments.length-1; i>=1; i--)
        v414 = {car: arguments[i], cdr: 
    v414};
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l102;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("(function(){", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(){
                    var symbol = l107;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("var id = ", (function(){
                    var symbol = l109;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v415), ";", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "try {", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(){
                    var symbol = l107;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("return ", (function(){
                    var symbol = l109;
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
                })()(l189), v414)), ";", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "}", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "catch (cf){", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "    if (cf.type == 'catch' && cf.id == id)", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "        return cf.value;", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "    else", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "        throw cf;", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "}", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
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
    var symbol = l162;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l196 = {name: "THROW"};
(l162).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l196, (function (v416,v417){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    switch(arguments.length){
    case 1:
    v417=(function(){
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
                    var symbol = l102;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("(function(){", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(){
                    var symbol = l107;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("throw ({", "type: 'catch', ", "id: ", (function(){
                    var symbol = l109;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v416), ", ", "value: ", (function(){
                    var symbol = l109;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v417), ", ", "message: 'Throw uncatched.'", "})"), "})()");
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
    var symbol = l162;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l197 = {name: "*TAGBODY-COUNTER*"};
(function(){
    (((l197.value !== undefined)?(function(){
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
        return (l197).value = 0;
    })());
    return l197;
})();
var l198 = {name: "*GO-TAG-COUNTER*"};
(function(){
    (((l198.value !== undefined)?(function(){
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
        return (l198).value = 0;
    })());
    return l198;
})();
var l199 = {name: "GO-TAG-P"};
(function(){
    (l199).function = (function(v420){
        ((v420)["fname"] = "GO-TAG-P");
        return v420;
    })((function (v418){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v419){
                        return (v419 !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? v419 : ((function(){
                            var tmp = v418;
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
                    })()(v418));
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
    return l199;
})();
var l200 = {name: "DECLARE-TAGBODY-TAGS"};
(function(){
    (l200).function = (function(v426){
        ((v426)["fname"] = "DECLARE-TAGBODY-TAGS");
        return v426;
    })((function (v421,v422){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v425){
                        return (function(){
                            var symbol = l146;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v425, (function(){
                            var symbol = l149;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l145);
                    })((function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function (v423){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v424){
                            return (function(){
                                var symbol = l134;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v423, l145, (function(){
                                var symbol = l47;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v421, v424), (function(){
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
                        })()((l198).value = (function(){
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
                    
                    }), (function(){
                        var symbol = l87;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l199;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v422)));
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
    return l200;
})();
var l201 = {name: "TAGBODY"};
(l162).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l201, (function (){
    var v427= (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })();
    for (var i = arguments.length-1; i>=0; i--)
        v427 = {car: arguments[i], cdr: 
    v427};
    return (function(){
        try {
            return (function(){
                ((function(){
                    var symbol = l91;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l199;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v427) !== (function(){
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
                        throw ({type: 'block', id: 165, value: (function(){
                            var symbol = l109;
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
                        })()(l189), v427, (function(){
                            var symbol = l47;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l2))), message: 'Return from unknown block TAGBODY.'})
                    })();
                })());
                ((function(){
                    var symbol = l199;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var tmp = v427;
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
                    return v427 = ({car: (function(){
                        var symbol = l18;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("START"), cdr: v427});
                })());
                return (function(v428){
                    return (function(v430,v429){
                        try {
                            var tmp;
                            tmp = l149.value;
                            l149.value = v430;
                            v430 = tmp;
                            (function(v431){
                                return v429 = (function(){
                                    var symbol = l44;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()((function(){
                                    var symbol = l137;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v431));
                            })((function(){
                                var symbol = l147;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l43;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v427), (function(){
                                var symbol = l149;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l145));
                            return (function(){
                                var symbol = l102;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()("(function(){", (function(){
                                var symbol = l101;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(){
                                var symbol = l107;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()("var tagbody_", v428, " = ", v429, ";", (function(){
                                var symbol = l101;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "tbloop:", (function(){
                                var symbol = l101;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "while (true) {", (function(){
                                var symbol = l101;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(){
                                var symbol = l107;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()("try {", (function(){
                                var symbol = l101;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(){
                                var symbol = l107;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(v432){
                                return (function(){
                                    var symbol = l102;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()("switch(tagbody_", v428, "){", (function(){
                                    var symbol = l101;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "case ", v429, ":", (function(){
                                    var symbol = l101;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), (function(){
                                    try {
                                        return (function(){
                                            return (function(v433,v434){
                                                (function(){
                                                    while(v433 !== (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })()){
                                                        v434 = (function(){
                                                            var tmp = v433;
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
                                                            v432 = (function(){
                                                                var symbol = l102;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()(v432, (function(){
                                                                return ((function(){
                                                                    var symbol = l31;
                                                                    var func = symbol.function;
                                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                    return func;
                                                                })()((function(){
                                                                    var symbol = l199;
                                                                    var func = symbol.function;
                                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                    return func;
                                                                })()(v434)) !== (function(){
                                                                    var symbol = l2;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })() ? (function(){
                                                                    var symbol = l107;
                                                                    var func = symbol.function;
                                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                    return func;
                                                                })()((function(){
                                                                    var symbol = l109;
                                                                    var func = symbol.function;
                                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                    return func;
                                                                })()(v434), ";", (function(){
                                                                    var symbol = l101;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })()) : (function(v435){
                                                                    return (function(){
                                                                        var symbol = l102;
                                                                        var func = symbol.function;
                                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                        return func;
                                                                    })()("case ", (function(){
                                                                        var symbol = l44;
                                                                        var func = symbol.function;
                                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                        return func;
                                                                    })()((function(){
                                                                        var symbol = l137;
                                                                        var func = symbol.function;
                                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                        return func;
                                                                    })()(v435)), ":", (function(){
                                                                        var symbol = l101;
                                                                        var value = symbol.value;
                                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                        return value;
                                                                    })());
                                                                })((function(){
                                                                    var symbol = l147;
                                                                    var func = symbol.function;
                                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                    return func;
                                                                })()(v434, (function(){
                                                                    var symbol = l149;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })(), l145)));
                                                            })());
                                                            return (function(){
                                                                var symbol = l2;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })();
                                                        })();
                                                        v433 = (function(){
                                                            var tmp = v433;
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
                                                return v432;
                                            })((function(){
                                                var tmp = v427;
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
                                        if (cf.type == 'block' && cf.id == 166)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })(), "default:", (function(){
                                    var symbol = l101;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "    break tbloop;", (function(){
                                    var symbol = l101;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "}", (function(){
                                    var symbol = l101;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })("")), "}", (function(){
                                var symbol = l101;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "catch (jump) {", (function(){
                                var symbol = l101;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "    if (jump.type == 'tagbody' && jump.id == ", v428, ")", (function(){
                                var symbol = l101;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "        tagbody_", v428, " = jump.label;", (function(){
                                var symbol = l101;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "    else", (function(){
                                var symbol = l101;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "        throw(jump);", (function(){
                                var symbol = l101;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "}", (function(){
                                var symbol = l101;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), "}", (function(){
                                var symbol = l101;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "return ", (function(){
                                var symbol = l109;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), ";", (function(){
                                var symbol = l101;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), "})()");
                        }
                        finally {
                            l149.value = v430;
                        }
                    })((function(){
                        var symbol = l200;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v428, v427),(function(){
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
                    var symbol = l197;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()));
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
    var symbol = l162;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l202 = {name: "GO"};
(l162).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l202, (function (v436){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v437,v438){
                    return (v437 !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("(function(){", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), (function(){
                        var symbol = l107;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("throw ({", "type: 'tagbody', ", "id: ", (function(){
                        var symbol = l43;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l137;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v437)), ", ", "label: ", (function(){
                        var symbol = l44;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l137;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v437)), ", ", "message: 'Attempt to GO to non-existing tag ", v438, "'", "})", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : (function(){
                        throw (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("Unknown tag `", v438, "'.");
                    })());
                })((function(){
                    var symbol = l147;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v436, (function(){
                    var symbol = l149;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l145),(((function(){
                    var tmp = v436;
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
                    return (v436).name;
                })() : ((function(){
                    var symbol = l77;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v436) !== (function(){
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
                    })()(v436);
                })() : (function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())));
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
    var symbol = l162;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l203 = {name: "UNWIND-PROTECT"};
(l162).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l203, (function (v440){
    if (arguments.length < 1) throw 'too few arguments';
    var v439= (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })();
    for (var i = arguments.length-1; i>=1; i--)
        v439 = {car: arguments[i], cdr: 
    v439};
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l102;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("(function(){", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(){
                    var symbol = l107;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("var ret = ", (function(){
                    var symbol = l109;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), ";", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "try {", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(){
                    var symbol = l107;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("ret = ", (function(){
                    var symbol = l109;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v440), ";", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "} finally {", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(){
                    var symbol = l107;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l163;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v439)), "}", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "return ret;", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
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
    var symbol = l162;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l204 = {name: "BACKQUOTE-EXPAND-1"};
(function(){
    (l204).function = (function(v443){
        ((v443)["fname"] = "BACKQUOTE-EXPAND-1");
        return v443;
    })((function (v441){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v441;
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
                        })()(l128, v441);
                    })() : ((function(){
                        var symbol = l48;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v441) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (function(){
                        return v441;
                    })() : ((((function(){
                        var tmp = v441;
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
                    })() === l131)?(function(){
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
                            var tmp = v441;
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
                        var tmp = v441;
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
                            var symbol = l204;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l204;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l37;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v441)));
                    })() : (function(){
                        return ({car: l65, cdr: (function(){
                            var symbol = l71;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function (v442){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return (((function(){
                                var symbol = l62;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v442) !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (((function(){
                                var tmp = v442;
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
                            })() === l131)?(function(){
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
                                })()(v442));
                            })() : (((function(){
                                var symbol = l62;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v442) !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (((function(){
                                var tmp = v442;
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
                            })() === l130)?(function(){
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
                                })()(v442);
                            })() : (function(){
                                return (function(){
                                    var symbol = l47;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l47, (function(){
                                    var symbol = l204;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v442));
                            })()));
                        
                        }), v441)});
                    })()))));
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
    return l204;
})();
var l205 = {name: "BACKQUOTE-EXPAND"};
(function(){
    (l205).function = (function(v445){
        ((v445)["fname"] = "BACKQUOTE-EXPAND");
        return v445;
    })((function (v444){
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
                    })()(v444) !== (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() ? (((function(){
                        var tmp = v444;
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
                        var symbol = l204;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l37;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v444)) : v444);
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
    return l205;
})();
l129;
(l162).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l129, (function (v446){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l109;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l204;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v446));
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
    var symbol = l162;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l206 = {name: "DEFINE-BUILTIN"};
l206;
var l207 = {name: "TYPE-CHECK"};
l207;
var l208 = {name: "NUM-OP-NUM"};
(function(){
    (l208).function = (function(v450){
        ((v450)["fname"] = "NUM-OP-NUM");
        return v450;
    })((function (v447,v448,v449){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("(function(){", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), (function(){
                        var symbol = l107;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("var ", "x", " = ", v447, ";", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), (function(){
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("var ", "y", " = ", v449, ";", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), (function(){
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("if (typeof ", "x", " != '", "number", "')", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), (function(){
                        var symbol = l107;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), (function(){
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("if (typeof ", "y", " != '", "number", "')", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), (function(){
                        var symbol = l107;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("throw 'The value ' + ", "y", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), (function(){
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("return ", (function(){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("x", v448, "y");
                    })(), ";", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), "})()");
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
    return l208;
})();
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l22, (function (v451,v452){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v453,v454){
                        return (function(){
                            var symbol = l208;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v453, "+", v454);
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v451),(function(){
                        var symbol = l109;
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l23, (function (v455,v456){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v457,v458){
                        return (function(){
                            var symbol = l208;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v457, "-", v458);
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v455),(function(){
                        var symbol = l109;
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l24, (function (v459,v460){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v461,v462){
                        return (function(){
                            var symbol = l208;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v461, "*", v462);
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v459),(function(){
                        var symbol = l109;
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l25, (function (v463,v464){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v465,v466){
                        return (function(){
                            var symbol = l208;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v465, "/", v466);
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v463),(function(){
                        var symbol = l109;
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l209 = {name: "MOD"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l209, (function (v467,v468){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v469,v470){
                        return (function(){
                            var symbol = l208;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v469, "%", v470);
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v467),(function(){
                        var symbol = l109;
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l210 = {name: "<"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l210, (function (v471,v472){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v473,v474){
                        return (function(){
                            var symbol = l108;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l208;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v473, "<", v474));
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v471),(function(){
                        var symbol = l109;
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l211 = {name: ">"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l211, (function (v475,v476){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v477,v478){
                        return (function(){
                            var symbol = l108;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l208;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v477, ">", v478));
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v475),(function(){
                        var symbol = l109;
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l21, (function (v479,v480){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v481,v482){
                        return (function(){
                            var symbol = l108;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l208;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v481, "==", v482));
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v479),(function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v480));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l212 = {name: "<="};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l212, (function (v483,v484){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v485,v486){
                        return (function(){
                            var symbol = l108;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l208;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v485, "<=", v486));
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v483),(function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v484));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l213 = {name: ">="};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l213, (function (v487,v488){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v489,v490){
                        return (function(){
                            var symbol = l108;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l208;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v489, ">=", v490));
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v487),(function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v488));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l214 = {name: "NUMBERP"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l214, (function (v491){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v492){
                        return (function(){
                            var symbol = l108;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(typeof (", v492, ") == \"number\")"));
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v491));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l215 = {name: "FLOOR"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l215, (function (v493){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v494){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "x", " = ", v494, ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("return ", (function(){
                            return "Math.floor(x)";
                        })(), ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v493));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l32, (function (v495,v496){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v497,v498){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("({car: ", v497, ", cdr: ", v498, "})");
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v495),(function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v496));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l33, (function (v499){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v500){
                        return (function(){
                            var symbol = l108;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var tmp = ", v500, ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return (typeof tmp == 'object' && 'car' in tmp);", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()"));
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v499));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l34, (function (v501){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v502){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var tmp = ", v502, ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l109;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "? ", (function(){
                            var symbol = l109;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), ": tmp.car;", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v501));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l35, (function (v503){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v504){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var tmp = ", v504, ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l109;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "? ", (function(){
                            var symbol = l109;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), ": tmp.cdr;", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v503));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l216 = {name: "SETCAR"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l216, (function (v505,v506){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v507,v508){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "x", " = ", v507, ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("return ", (function(){
                            return (function(){
                                var symbol = l102;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()("(x.car = ", v508, ")");
                        })(), ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v505),(function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v506));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l217 = {name: "SETCDR"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l217, (function (v509,v510){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v511,v512){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "x", " = ", v511, ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("return ", (function(){
                            return (function(){
                                var symbol = l102;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()("(x.cdr = ", v512, ")");
                        })(), ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v509),(function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v510));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l218 = {name: "SYMBOLP"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l218, (function (v513){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v514){
                        return (function(){
                            var symbol = l108;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var tmp = ", v514, ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return (typeof tmp == 'object' && 'name' in tmp);", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()"));
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v513));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l219 = {name: "MAKE-SYMBOL"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l219, (function (v515){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v516){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "name", " = ", v516, ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "name", " != '", "string", "')", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "name", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("return ", (function(){
                            return "({name: name})";
                        })(), ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v515));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l220 = {name: "SYMBOL-NAME"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l220, (function (v517){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v518){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(", v518, ").name");
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v517));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l178, (function (v519,v520){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v521,v522){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(", v521, ").value = ", v522);
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v519),(function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v520));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l221 = {name: "FSET"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l221, (function (v523,v524){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v525,v526){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(", v525, ").function = ", v526);
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v523),(function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v524));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l20, (function (v527){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v528){
                        return (function(){
                            var symbol = l108;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(", v528, ".value !== undefined)"));
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v527));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l222 = {name: "SYMBOL-VALUE"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l222, (function (v529){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v530){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var symbol = ", v530, ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var value = symbol.value;", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (value === undefined) throw \"Variable `\" + symbol.name + \"' is unbound.\";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return value;", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v529));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l186, (function (v531){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v532){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var symbol = ", v532, ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var func = symbol.function;", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (func === undefined) throw \"Function `\" + symbol.name + \"' is undefined.\";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return func;", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v531));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l223 = {name: "SYMBOL-PLIST"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l223, (function (v533){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v534){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("((", v534, ").plist || ", (function(){
                            var symbol = l109;
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
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v533));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l224 = {name: "LAMBDA-CODE"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l224, (function (v535){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v536){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(", v536, ").toString()");
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v535));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l225 = {name: "EQ"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l225, (function (v537,v538){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v539,v540){
                        return (function(){
                            var symbol = l108;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(", v539, " === ", v540, ")"));
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v537),(function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v538));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l226 = {name: "EQUAL"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l226, (function (v541,v542){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v543,v544){
                        return (function(){
                            var symbol = l108;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(", v543, " == ", v544, ")"));
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v541),(function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v542));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l227 = {name: "STRING"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l227, (function (v545){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v546){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "x", " = ", v546, ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("return ", (function(){
                            return "String.fromCharCode(x)";
                        })(), ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v545));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l228 = {name: "STRINGP"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l228, (function (v547){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v548){
                        return (function(){
                            var symbol = l108;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(typeof(", v548, ") == \"string\")"));
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v547));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l229 = {name: "STRING-UPCASE"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l229, (function (v549){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v550){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "x", " = ", v550, ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("return ", (function(){
                            return "x.toUpperCase()";
                        })(), ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v549));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l230 = {name: "STRING-LENGTH"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l230, (function (v551){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v552){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "x", " = ", v552, ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("return ", (function(){
                            return "x.length";
                        })(), ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v551));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l231 = {name: "SLICE"};
(l162).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l231, (function (v553,v554,v555){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    switch(arguments.length){
    case 2:
    v555=(function(){
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
                    var symbol = l102;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("(function(){", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(){
                    var symbol = l107;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("var str = ", (function(){
                    var symbol = l109;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v553), ";", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var a = ", (function(){
                    var symbol = l109;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v554), ";", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var b;", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (v555 !== (function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() ? (function(){
                    var symbol = l102;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("b = ", (function(){
                    var symbol = l109;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v555), ";", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()) : ""), "return str.slice(a,b);", (function(){
                    var symbol = l101;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
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
    var symbol = l162;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l232 = {name: "CHAR"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l232, (function (v556,v557){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v558,v559){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "string", " = ", v558, ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "index", " = ", v559, ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "index", " != '", "number", "')", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "index", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("return ", (function(){
                            return "string.charCodeAt(index)";
                        })(), ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v556),(function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v557));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l70, (function (v560,v561){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v562,v563){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "string1", " = ", v562, ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "string2", " = ", v563, ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "string1", " != '", "string", "')", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "string1", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "string2", " != '", "string", "')", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "string2", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("return ", (function(){
                            return "string1.concat(string2)";
                        })(), ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v560),(function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v561));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l233 = {name: "FUNCALL"};
(l162).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l233, (function (v565){
    if (arguments.length < 1) throw 'too few arguments';
    var v564= (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })();
    for (var i = arguments.length-1; i>=1; i--)
        v564 = {car: arguments[i], cdr: 
    v564};
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l102;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("(", (function(){
                    var symbol = l109;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v565), ")(", (function(){
                    var symbol = l104;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l71;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()((function(){
                    var symbol = l109;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v564), ", "), ")");
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
    var symbol = l162;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l234 = {name: "APPLY"};
(l162).value = ({car: (function(){
    var symbol = l47;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})()(l234, (function (v567){
    if (arguments.length < 1) throw 'too few arguments';
    var v566= (function(){
        var symbol = l2;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })();
    for (var i = arguments.length-1; i>=1; i--)
        v566 = {car: arguments[i], cdr: 
    v566};
    return (function(){
        try {
            return (function(){
                return ((function(){
                    var symbol = l11;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v566) !== (function(){
                    var symbol = l2;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() ? (function(){
                    var symbol = l102;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()("(", (function(){
                    var symbol = l109;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v567), ")()") : (function(v568,v569){
                    return (function(){
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("(function(){", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), (function(){
                        var symbol = l107;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()("var f = ", (function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v567), ";", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var args = [", (function(){
                        var symbol = l104;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v568), ", "), "];", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var tail = (", (function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v569), ");", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "while (tail != ", (function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "){", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    args.push(tail.car);", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    tail = tail.cdr;", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "}", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "return f.apply(this, args);", (function(){
                        var symbol = l101;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()");
                })((function(){
                    var symbol = l83;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v566),(function(){
                    var tmp = (function(){
                        var symbol = l82;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v566);
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
            if (cf.type == 'block' && cf.id == 211)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l162;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l235 = {name: "JS-EVAL"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l235, (function (v570){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v571){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "string", " = ", v571, ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("return ", (function(){
                            return "eval.apply(window, [string])";
                        })(), ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v570));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l236 = {name: "ERROR"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l236, (function (v572){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v573){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw ", v573, ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v572));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l237 = {name: "NEW"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l237, (function (){
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
                if (cf.type == 'block' && cf.id == 214)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l238 = {name: "OGET"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l238, (function (v574,v575){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v576,v577){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var tmp = ", "(", v576, ")[", v577, "];", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp == undefined? ", (function(){
                            var symbol = l109;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), ": tmp ;", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v574),(function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v575));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l239 = {name: "OSET"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l239, (function (v578,v579,v580){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v581,v582,v583){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("((", v581, ")[", v582, "] = ", v583, ")");
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v578),(function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v579),(function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v580));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l240 = {name: "IN"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l240, (function (v584,v585){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v586,v587){
                        return (function(){
                            var symbol = l108;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("((", v586, ") in (", v587, "))"));
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v584),(function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v585));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l241 = {name: "FUNCTIONP"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l241, (function (v588){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v589){
                        return (function(){
                            var symbol = l108;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(typeof ", v589, " == 'function')"));
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v588));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l242 = {name: "WRITE-STRING"};
(function(){
    return (l162).value = ({car: (function(){
        var symbol = l47;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(l242, (function (v590){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v591){
                        return (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("(function(){", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("var ", "x", " = ", v591, ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var symbol = l107;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (function(){
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("return ", (function(){
                            return "lisp.write(x)";
                        })(), ";", (function(){
                            var symbol = l101;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v590));
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
        var symbol = l162;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    (l161).function = (function(v594){
        ((v594)["fname"] = "MACRO");
        return v594;
    })((function (v592){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v592;
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
                    })() ? (function(v593){
                        return ((((function(){
                            var symbol = l136;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v593) === l161)?(function(){
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
                        })() ? v593 : (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    })((function(){
                        var symbol = l147;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v592, (function(){
                        var symbol = l149;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l99)) : (function(){
                        var symbol = l2;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
    return l161;
})();
var l243 = {name: "LS-MACROEXPAND-1"};
(function(){
    (l243).function = (function(v599){
        ((v599)["fname"] = "LS-MACROEXPAND-1");
        return v599;
    })((function (v595){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v596){
                        return (v596 !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(v597){
                            ((function(){
                                var symbol = l62;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v597) !== (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })() ? (function(){
                                return (function(v598){
                                    (function(){
                                        var symbol = l138;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v596, v598);
                                    return v597 = v598;
                                })((function(){
                                    var symbol = l188;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v597));
                            })() : (function(){
                                var symbol = l2;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                            return (function(){
                                var f = v597;
                                var args = [];
                                var tail = ((function(){
                                    var tmp = v595;
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
                            var symbol = l137;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v596)) : v595);
                    })((function(){
                        var symbol = l161;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = v595;
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
                if (cf.type == 'block' && cf.id == 221)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l243;
})();
var l244 = {name: "COMPILE-FUNCALL"};
(function(){
    (l244).function = (function(v602){
        ((v602)["fname"] = "COMPILE-FUNCALL");
        return v602;
    })((function (v600,v601){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l102;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l109;
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
                    })()(l99), (function(){
                        var symbol = l47;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v600))), "(", (function(){
                        var symbol = l104;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l71;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var symbol = l109;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v601), ", "), ")");
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
    return l244;
})();
(function(){
    (l109).function = (function(v606){
        ((v606)["fname"] = "LS-COMPILE");
        return v606;
    })((function (v603){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v603;
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
                        return (function(v604){
                            return ((((function(){
                                var symbol = l136;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v604) === l155)?(function(){
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
                                var symbol = l137;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v604) : (function(){
                                var symbol = l109;
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
                            })()(l222), (function(){
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
                            })()(l128), (function(){
                                var symbol = l47;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v603))))));
                        })((function(){
                            var symbol = l147;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v603, (function(){
                            var symbol = l149;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l100));
                    })() : ((function(){
                        var symbol = l77;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v603) !== (function(){
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
                        })()(v603);
                    })() : (((typeof(v603) == "string")?(function(){
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
                            var symbol = l102;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()("\"", (function(){
                            var symbol = l112;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v603), "\"");
                    })() : ((function(){
                        var symbol = l62;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v603) !== (function(){
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
                            var tmp = v603;
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
                            var symbol = l162;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()) !== (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })() ? (function(v605){
                            return (function(){
                                var f = v605;
                                var args = [];
                                var tail = ((function(){
                                    var tmp = v603;
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
                            var tmp = v603;
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
                            var symbol = l162;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()))) : ((function(){
                            var symbol = l161;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var tmp = v603;
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
                            var symbol = l109;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var symbol = l243;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v603)) : (function(){
                            var symbol = l244;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()((function(){
                            var tmp = v603;
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
                            var tmp = v603;
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
                if (cf.type == 'block' && cf.id == 223)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l109;
})();
var l245 = {name: "LS-COMPILE-TOPLEVEL"};
(function(){
    (l245).function = (function(v611){
        ((v611)["fname"] = "LS-COMPILE-TOPLEVEL");
        return v611;
    })((function (v607){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v608){
                        try {
                            var tmp;
                            tmp = l156.value;
                            l156.value = v608;
                            v608 = tmp;
                            return ((((function(){
                                var tmp = v607;
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
                                var tmp = v607;
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
                            })() === l189)?(function(){
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
                                return (function(v609){
                                    return (function(){
                                        var symbol = l104;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()((function(){
                                        var symbol = l86;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()((function(){
                                        var symbol = l158;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })(), v609));
                                })((function(){
                                    var symbol = l71;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()((function(){
                                    var symbol = l245;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })(), (function(){
                                    var tmp = v607;
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
                                return (function(v610){
                                    return (function(){
                                        var symbol = l102;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()((function(){
                                        var symbol = l105;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()((function(){
                                        var symbol = l159;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(), (function(){
                                        var symbol = l102;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(";", (function(){
                                        var symbol = l101;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })())), (v610 !== (function(){
                                        var symbol = l2;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })() ? (function(){
                                        var symbol = l102;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v610, ";", (function(){
                                        var symbol = l101;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()) : ""));
                                })((function(){
                                    var symbol = l109;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v607));
                            })());
                        }
                        finally {
                            l156.value = v608;
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
                if (cf.type == 'block' && cf.id == 224)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l245;
})();
var l246 = {name: "WITH-COMPILATION-UNIT"};
l246;
(function(){
    (l188).function = (function(v617){
        ((v617)["fname"] = "EVAL");
        return v617;
    })((function (v612){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v616){
                        return (function(){
                            var string = v616;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            return eval.apply(window, [string]);
                        })();
                    })((function(v613){
                        (function(){
                            try {
                                return (function(){
                                    return (function(v614,v615){
                                        (function(){
                                            while(v614 !== (function(){
                                                var symbol = l2;
                                                var value = symbol.value;
                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                return value;
                                            })()){
                                                v615 = (function(){
                                                    var tmp = v614;
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
                                                    (v615)();
                                                    return (function(){
                                                        var symbol = l2;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })();
                                                })();
                                                v614 = (function(){
                                                    var tmp = v614;
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
                                        var symbol = l133;
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
                                if (cf.type == 'block' && cf.id == 226)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v613;
                    })((function(){
                        (l133).value = (function(){
                            var symbol = l2;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })();
                        (function(){
                            var symbol = l150;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()();
                        return (function(){
                            var symbol = l245;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v612);
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
    
    }));
    return l188;
})();
(function(){
    var string = "var lisp";
    if (typeof string != 'string')
        throw 'The value ' + string + ' is not a type string.';
    return eval.apply(window, [string]);
})();
(lisp = {});
(lisp.read = (function(){
    var symbol = l132;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.print = (function(){
    var symbol = l111;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.eval = (function(){
    var symbol = l188;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.compile = (function(){
    var symbol = l245;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.evalString = (function (v618){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        var symbol = l188;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()((function(){
        var symbol = l132;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(v618));

}));
(lisp.compileString = (function (v619){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        var symbol = l245;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()((function(){
        var symbol = l132;
        var func = symbol.function;
        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
        return func;
    })()(v619));

}));
var l247 = {car: {car: l246, cdr: "l246"}, cdr: {car: {car: l245, cdr: "l245"}, cdr: {car: {car: l244, cdr: "l244"}, cdr: {car: {car: l243, cdr: "l243"}, cdr: {car: {car: l242, cdr: "l242"}, cdr: {car: {car: l241, cdr: "l241"}, cdr: {car: {car: l240, cdr: "l240"}, cdr: {car: {car: l239, cdr: "l239"}, cdr: {car: {car: l238, cdr: "l238"}, cdr: {car: {car: l237, cdr: "l237"}, cdr: {car: {car: l236, cdr: "l236"}, cdr: {car: {car: l235, cdr: "l235"}, cdr: {car: {car: l234, cdr: "l234"}, cdr: {car: {car: l233, cdr: "l233"}, cdr: {car: {car: l232, cdr: "l232"}, cdr: {car: {car: l231, cdr: "l231"}, cdr: {car: {car: l230, cdr: "l230"}, cdr: {car: {car: l229, cdr: "l229"}, cdr: {car: {car: l228, cdr: "l228"}, cdr: {car: {car: l227, cdr: "l227"}, cdr: {car: {car: l226, cdr: "l226"}, cdr: {car: {car: l225, cdr: "l225"}, cdr: {car: {car: l224, cdr: "l224"}, cdr: {car: {car: l223, cdr: "l223"}, cdr: {car: {car: l222, cdr: "l222"}, cdr: {car: {car: l221, cdr: "l221"}, cdr: {car: {car: l220, cdr: "l220"}, cdr: {car: {car: l219, cdr: "l219"}, cdr: {car: {car: l218, cdr: "l218"}, cdr: {car: {car: l217, cdr: "l217"}, cdr: {car: {car: l216, cdr: "l216"}, cdr: {car: {car: l215, cdr: "l215"}, cdr: {car: {car: l214, cdr: "l214"}, cdr: {car: {car: l213, cdr: "l213"}, cdr: {car: {car: l212, cdr: "l212"}, cdr: {car: {car: l211, cdr: "l211"}, cdr: {car: {car: l210, cdr: "l210"}, cdr: {car: {car: l209, cdr: "l209"}, cdr: {car: {car: l208, cdr: "l208"}, cdr: {car: {car: l207, cdr: "l207"}, cdr: {car: {car: l206, cdr: "l206"}, cdr: {car: {car: l205, cdr: "l205"}, cdr: {car: {car: l204, cdr: "l204"}, cdr: {car: {car: l203, cdr: "l203"}, cdr: {car: {car: l202, cdr: "l202"}, cdr: {car: {car: l201, cdr: "l201"}, cdr: {car: {car: l200, cdr: "l200"}, cdr: {car: {car: l199, cdr: "l199"}, cdr: {car: {car: l198, cdr: "l198"}, cdr: {car: {car: l197, cdr: "l197"}, cdr: {car: {car: l196, cdr: "l196"}, cdr: {car: {car: l195, cdr: "l195"}, cdr: {car: {car: l194, cdr: "l194"}, cdr: {car: {car: l193, cdr: "l193"}, cdr: {car: {car: l192, cdr: "l192"}, cdr: {car: {car: l191, cdr: "l191"}, cdr: {car: {car: l190, cdr: "l190"}, cdr: {car: {car: l189, cdr: "l189"}, cdr: {car: {car: l188, cdr: "l188"}, cdr: {car: {car: l187, cdr: "l187"}, cdr: {car: {car: l186, cdr: "l186"}, cdr: {car: {car: l185, cdr: "l185"}, cdr: {car: {car: l184, cdr: "l184"}, cdr: {car: {car: l183, cdr: "l183"}, cdr: {car: {car: l182, cdr: "l182"}, cdr: {car: {car: l181, cdr: "l181"}, cdr: {car: {car: l180, cdr: "l180"}, cdr: {car: {car: l179, cdr: "l179"}, cdr: {car: {car: l178, cdr: "l178"}, cdr: {car: {car: l177, cdr: "l177"}, cdr: {car: {car: l176, cdr: "l176"}, cdr: {car: {car: l175, cdr: "l175"}, cdr: {car: {car: l174, cdr: "l174"}, cdr: {car: {car: l173, cdr: "l173"}, cdr: {car: {car: l172, cdr: "l172"}, cdr: {car: {car: l171, cdr: "l171"}, cdr: {car: {car: l170, cdr: "l170"}, cdr: {car: {car: l168, cdr: "l168"}, cdr: {car: {car: l167, cdr: "l167"}, cdr: {car: {car: l166, cdr: "l166"}, cdr: {car: {car: l165, cdr: "l165"}, cdr: {car: {car: l164, cdr: "l164"}, cdr: {car: {car: l163, cdr: "l163"}, cdr: {car: {car: l162, cdr: "l162"}, cdr: {car: {car: l161, cdr: "l161"}, cdr: {car: {car: l160, cdr: "l160"}, cdr: {car: {car: l159, cdr: "l159"}, cdr: {car: {car: l158, cdr: "l158"}, cdr: {car: {car: l157, cdr: "l157"}, cdr: {car: {car: l156, cdr: "l156"}, cdr: {car: {car: l155, cdr: "l155"}, cdr: {car: {car: l154, cdr: "l154"}, cdr: {car: {car: l153, cdr: "l153"}, cdr: {car: {car: l152, cdr: "l152"}, cdr: {car: {car: l151, cdr: "l151"}, cdr: {car: {car: l150, cdr: "l150"}, cdr: {car: {car: l149, cdr: "l149"}, cdr: {car: {car: l148, cdr: "l148"}, cdr: {car: {car: l147, cdr: "l147"}, cdr: {car: {car: l146, cdr: "l146"}, cdr: {car: {car: l145, cdr: "l145"}, cdr: {car: {car: l144, cdr: "l144"}, cdr: {car: {car: l143, cdr: "l143"}, cdr: {car: {car: l142, cdr: "l142"}, cdr: {car: {car: l141, cdr: "l141"}, cdr: {car: {car: l140, cdr: "l140"}, cdr: {car: {car: l139, cdr: "l139"}, cdr: {car: {car: l138, cdr: "l138"}, cdr: {car: {car: l137, cdr: "l137"}, cdr: {car: {car: l136, cdr: "l136"}, cdr: {car: {car: l135, cdr: "l135"}, cdr: {car: {car: l134, cdr: "l134"}, cdr: {car: {car: l133, cdr: "l133"}, cdr: {car: {car: l132, cdr: "l132"}, cdr: {car: {car: l131, cdr: "l131"}, cdr: {car: {car: l130, cdr: "l130"}, cdr: {car: {car: l129, cdr: "l129"}, cdr: {car: {car: l128, cdr: "l128"}, cdr: {car: {car: l127, cdr: "l127"}, cdr: {car: {car: l126, cdr: "l126"}, cdr: {car: {car: l125, cdr: "l125"}, cdr: {car: {car: l124, cdr: "l124"}, cdr: {car: {car: l123, cdr: "l123"}, cdr: {car: {car: l122, cdr: "l122"}, cdr: {car: {car: l121, cdr: "l121"}, cdr: {car: {car: l120, cdr: "l120"}, cdr: {car: {car: l119, cdr: "l119"}, cdr: {car: {car: l118, cdr: "l118"}, cdr: {car: {car: l117, cdr: "l117"}, cdr: {car: {car: l116, cdr: "l116"}, cdr: {car: {car: l115, cdr: "l115"}, cdr: {car: {car: l114, cdr: "l114"}, cdr: {car: {car: l113, cdr: "l113"}, cdr: {car: {car: l112, cdr: "l112"}, cdr: {car: {car: l111, cdr: "l111"}, cdr: {car: {car: l110, cdr: "l110"}, cdr: {car: {car: l109, cdr: "l109"}, cdr: {car: {car: l108, cdr: "l108"}, cdr: {car: {car: l107, cdr: "l107"}, cdr: {car: {car: l106, cdr: "l106"}, cdr: {car: {car: l105, cdr: "l105"}, cdr: {car: {car: l104, cdr: "l104"}, cdr: {car: {car: l103, cdr: "l103"}, cdr: {car: {car: l102, cdr: "l102"}, cdr: {car: {car: l101, cdr: "l101"}, cdr: {car: {car: l100, cdr: "l100"}, cdr: {car: {car: l99, cdr: "l99"}, cdr: {car: {car: l98, cdr: "l98"}, cdr: {car: {car: l97, cdr: "l97"}, cdr: {car: {car: l96, cdr: "l96"}, cdr: {car: {car: l95, cdr: "l95"}, cdr: {car: {car: l94, cdr: "l94"}, cdr: {car: {car: l93, cdr: "l93"}, cdr: {car: {car: l92, cdr: "l92"}, cdr: {car: {car: l91, cdr: "l91"}, cdr: {car: {car: l90, cdr: "l90"}, cdr: {car: {car: l89, cdr: "l89"}, cdr: {car: {car: l88, cdr: "l88"}, cdr: {car: {car: l87, cdr: "l87"}, cdr: {car: {car: l86, cdr: "l86"}, cdr: {car: {car: l85, cdr: "l85"}, cdr: {car: {car: l84, cdr: "l84"}, cdr: {car: {car: l83, cdr: "l83"}, cdr: {car: {car: l82, cdr: "l82"}, cdr: {car: {car: l81, cdr: "l81"}, cdr: {car: {car: l80, cdr: "l80"}, cdr: {car: {car: l79, cdr: "l79"}, cdr: {car: {car: l78, cdr: "l78"}, cdr: {car: {car: l77, cdr: "l77"}, cdr: {car: {car: l76, cdr: "l76"}, cdr: {car: {car: l75, cdr: "l75"}, cdr: {car: {car: l74, cdr: "l74"}, cdr: {car: {car: l73, cdr: "l73"}, cdr: {car: {car: l72, cdr: "l72"}, cdr: {car: {car: l71, cdr: "l71"}, cdr: {car: {car: l70, cdr: "l70"}, cdr: {car: {car: l69, cdr: "l69"}, cdr: {car: {car: l68, cdr: "l68"}, cdr: {car: {car: l67, cdr: "l67"}, cdr: {car: {car: l66, cdr: "l66"}, cdr: {car: {car: l65, cdr: "l65"}, cdr: {car: {car: l64, cdr: "l64"}, cdr: {car: {car: l63, cdr: "l63"}, cdr: {car: {car: l62, cdr: "l62"}, cdr: {car: {car: l61, cdr: "l61"}, cdr: {car: {car: l60, cdr: "l60"}, cdr: {car: {car: l59, cdr: "l59"}, cdr: {car: {car: l58, cdr: "l58"}, cdr: {car: {car: l57, cdr: "l57"}, cdr: {car: {car: l56, cdr: "l56"}, cdr: {car: {car: l55, cdr: "l55"}, cdr: {car: {car: l54, cdr: "l54"}, cdr: {car: {car: l53, cdr: "l53"}, cdr: {car: {car: l52, cdr: "l52"}, cdr: {car: {car: l51, cdr: "l51"}, cdr: {car: {car: l50, cdr: "l50"}, cdr: {car: {car: l49, cdr: "l49"}, cdr: {car: {car: l48, cdr: "l48"}, cdr: {car: {car: l47, cdr: "l47"}, cdr: {car: {car: l46, cdr: "l46"}, cdr: {car: {car: l45, cdr: "l45"}, cdr: {car: {car: l44, cdr: "l44"}, cdr: {car: {car: l43, cdr: "l43"}, cdr: {car: {car: l42, cdr: "l42"}, cdr: {car: {car: l41, cdr: "l41"}, cdr: {car: {car: l40, cdr: "l40"}, cdr: {car: {car: l39, cdr: "l39"}, cdr: {car: {car: l38, cdr: "l38"}, cdr: {car: {car: l37, cdr: "l37"}, cdr: {car: {car: l36, cdr: "l36"}, cdr: {car: {car: l35, cdr: "l35"}, cdr: {car: {car: l34, cdr: "l34"}, cdr: {car: {car: l33, cdr: "l33"}, cdr: {car: {car: l32, cdr: "l32"}, cdr: {car: {car: l31, cdr: "l31"}, cdr: {car: {car: l30, cdr: "l30"}, cdr: {car: {car: l29, cdr: "l29"}, cdr: {car: {car: l28, cdr: "l28"}, cdr: {car: {car: l27, cdr: "l27"}, cdr: {car: {car: l26, cdr: "l26"}, cdr: {car: {car: l25, cdr: "l25"}, cdr: {car: {car: l24, cdr: "l24"}, cdr: {car: {car: l23, cdr: "l23"}, cdr: {car: {car: l22, cdr: "l22"}, cdr: {car: {car: l21, cdr: "l21"}, cdr: {car: {car: l20, cdr: "l20"}, cdr: {car: {car: l19, cdr: "l19"}, cdr: {car: {car: l18, cdr: "l18"}, cdr: {car: {car: l17, cdr: "l17"}, cdr: {car: {car: l16, cdr: "l16"}, cdr: {car: {car: l15, cdr: "l15"}, cdr: {car: {car: l14, cdr: "l14"}, cdr: {car: {car: l13, cdr: "l13"}, cdr: {car: {car: l12, cdr: "l12"}, cdr: {car: {car: l11, cdr: "l11"}, cdr: {car: {car: l10, cdr: "l10"}, cdr: {car: {car: l9, cdr: "l9"}, cdr: {car: {car: l8, cdr: "l8"}, cdr: {car: {car: l7, cdr: "l7"}, cdr: {car: {car: l6, cdr: "l6"}, cdr: {car: {car: l5, cdr: "l5"}, cdr: {car: {car: l4, cdr: "l4"}, cdr: {car: {car: l3, cdr: "l3"}, cdr: {car: {car: l2, cdr: "l2"}, cdr: {car: {car: l1, cdr: "l1"}, cdr: l2}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
var l248 = {name: "BODY"};
var l249 = {name: "CHECK"};
var l250 = {name: "DECLS"};
var l251 = {name: "DECL"};
var l252 = {name: "NAME"};
var l253 = {name: "ARGS"};
var l254 = {name: "ARG"};
var l255 = {name: "FORM"};
var l256 = {name: "FORM1"};
var l257 = {name: "RESULT"};
var l258 = {name: "VALUE"};
var l259 = {name: "FORMS"};
var l260 = {name: "G"};
var l261 = {name: "CLAUSULES"};
var l262 = {name: "!FORM"};
var l263 = {name: "CLAUSULE"};
var l264 = {name: "ITER"};
var l265 = {name: "G!TO"};
var l266 = {name: "VAR"};
var l267 = {name: "TO"};
var l268 = {name: "G!LIST"};
var l269 = {name: "X"};
var l270 = {name: "PLACE"};
var l271 = {name: "DELTA"};
var l272 = {name: "CONDITION"};
var l273 = {name: "DOCSTRING"};
var l274 = {name: "&BODY"};
var l275 = {car: l2, cdr: {car: {car: {car: l246, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l168, cdr: {car: l248, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: {car: l59, cdr: {car: {car: l189, cdr: {car: {car: l177, cdr: {car: l133, cdr: {car: l2, cdr: l2}}}, cdr: {car: {car: l150, cdr: l2}, cdr: {car: {car: l130, cdr: {car: l248, cdr: l2}}, cdr: l2}}}}, cdr: {car: {car: l52, cdr: {car: {car: l249, cdr: {car: l133, cdr: l2}}, cdr: {car: {car: l233, cdr: {car: l249, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l207, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l250, cdr: {car: l168, cdr: {car: l248, cdr: l2}}}, cdr: {car: {car: l129, cdr: {car: {car: l110, cdr: {car: {car: l130, cdr: {car: {car: l71, cdr: {car: {car: l176, cdr: {car: {car: l251, cdr: l2}, cdr: {car: {car: l129, cdr: {car: {car: l102, cdr: {car: "var ", cdr: {car: {car: l131, cdr: {car: {car: l43, cdr: {car: l251, cdr: l2}}, cdr: l2}}, cdr: {car: " = ", cdr: {car: {car: l131, cdr: {car: {car: l45, cdr: {car: l251, cdr: l2}}, cdr: l2}}, cdr: {car: ";", cdr: {car: l101, cdr: l2}}}}}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l250, cdr: l2}}}, cdr: l2}}, cdr: {car: {car: l130, cdr: {car: {car: l71, cdr: {car: {car: l176, cdr: {car: {car: l251, cdr: l2}, cdr: {car: {car: l129, cdr: {car: {car: l102, cdr: {car: "if (typeof ", cdr: {car: {car: l131, cdr: {car: {car: l43, cdr: {car: l251, cdr: l2}}, cdr: l2}}, cdr: {car: " != '", cdr: {car: {car: l131, cdr: {car: {car: l44, cdr: {car: l251, cdr: l2}}, cdr: l2}}, cdr: {car: "')", cdr: {car: l101, cdr: {car: {car: l107, cdr: {car: "throw 'The value ' + ", cdr: {car: {car: l131, cdr: {car: {car: l43, cdr: {car: l251, cdr: l2}}, cdr: l2}}, cdr: {car: " + ' is not a type ", cdr: {car: {car: l131, cdr: {car: {car: l44, cdr: {car: l251, cdr: l2}}, cdr: l2}}, cdr: {car: ".';", cdr: {car: l101, cdr: l2}}}}}}}, cdr: l2}}}}}}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l250, cdr: l2}}}, cdr: l2}}, cdr: {car: {car: l102, cdr: {car: "return ", cdr: {car: {car: l189, cdr: {car: {car: l130, cdr: {car: l248, cdr: l2}}, cdr: l2}}, cdr: {car: ";", cdr: {car: l101, cdr: l2}}}}}, cdr: l2}}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l206, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l252, cdr: {car: l253, cdr: {car: l168, cdr: {car: l248, cdr: l2}}}}, cdr: {car: {car: l129, cdr: {car: {car: l189, cdr: {car: {car: l164, cdr: {car: {car: l131, cdr: {car: l252, cdr: l2}}, cdr: {car: {car: l131, cdr: {car: l253, cdr: l2}}, cdr: {car: {car: l192, cdr: {car: {car: l131, cdr: {car: {car: l71, cdr: {car: {car: l176, cdr: {car: {car: l254, cdr: l2}, cdr: {car: {car: l129, cdr: {car: {car: {car: l131, cdr: {car: l254, cdr: l2}}, cdr: {car: {car: l109, cdr: {car: {car: l131, cdr: {car: l254, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l253, cdr: l2}}}, cdr: l2}}, cdr: {car: {car: l130, cdr: {car: l248, cdr: l2}}, cdr: l2}}}, cdr: l2}}}}, cdr: l2}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l129, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l255, cdr: l2}, cdr: {car: {car: l204, cdr: {car: l255, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l190, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l252, cdr: {car: l253, cdr: {car: l255, cdr: l2}}}, cdr: {car: {car: l129, cdr: {car: {car: l164, cdr: {car: {car: l131, cdr: {car: l252, cdr: l2}}, cdr: {car: {car: l131, cdr: {car: l253, cdr: l2}}, cdr: {car: {car: l109, cdr: {car: {car: l131, cdr: {car: l255, cdr: l2}}, cdr: l2}}, cdr: l2}}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l164, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l252, cdr: {car: l253, cdr: {car: l168, cdr: {car: l248, cdr: l2}}}}, cdr: {car: {car: l129, cdr: {car: {car: l51, cdr: {car: {car: l47, cdr: {car: {car: l128, cdr: {car: {car: l131, cdr: {car: l252, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l176, cdr: {car: {car: l131, cdr: {car: l253, cdr: l2}}, cdr: {car: {car: l144, cdr: {car: {car: l131, cdr: {car: l252, cdr: l2}}, cdr: {car: {car: l130, cdr: {car: l248, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: l2}}}, cdr: {car: l162, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l110, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l168, cdr: {car: l248, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: {car: l102, cdr: {car: "(function(){", cdr: {car: l101, cdr: {car: {car: l107, cdr: {car: {car: l130, cdr: {car: l248, cdr: l2}}, cdr: l2}}, cdr: {car: "})()", cdr: l2}}}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l103, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l100, cdr: {car: l168, cdr: {car: l255, cdr: l2}}}, cdr: {car: {car: l129, cdr: {car: {car: l177, cdr: {car: {car: l131, cdr: {car: l100, cdr: l2}}, cdr: {car: {car: l102, cdr: {car: {car: l131, cdr: {car: l100, cdr: l2}}, cdr: {car: {car: l189, cdr: {car: {car: l130, cdr: {car: l255, cdr: l2}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l60, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l256, cdr: {car: l257, cdr: {car: l168, cdr: {car: l248, cdr: l2}}}}, cdr: {car: {car: l129, cdr: {car: {car: l59, cdr: {car: {car: l189, cdr: {car: {car: l131, cdr: {car: l256, cdr: l2}}, cdr: {car: {car: l131, cdr: {car: l257, cdr: l2}}, cdr: l2}}}, cdr: {car: {car: l130, cdr: {car: l248, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l59, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l255, cdr: {car: l168, cdr: {car: l248, cdr: l2}}}, cdr: {car: {car: l192, cdr: {car: {car: {car: l258, cdr: {car: {car: l18, cdr: l2}, cdr: l2}}, cdr: l2}, cdr: {car: {car: l129, cdr: {car: {car: l192, cdr: {car: {car: {car: {car: l131, cdr: {car: l258, cdr: l2}}, cdr: {car: {car: l131, cdr: {car: l255, cdr: l2}}, cdr: l2}}, cdr: l2}, cdr: {car: {car: l130, cdr: {car: l248, cdr: l2}}, cdr: {car: {car: l131, cdr: {car: l258, cdr: l2}}, cdr: l2}}}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l58, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l168, cdr: {car: l259, cdr: l2}}, cdr: {car: {car: l54, cdr: {car: {car: {car: l11, cdr: {car: l259, cdr: l2}}, cdr: {car: l2, cdr: l2}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l35, cdr: {car: l259, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l34, cdr: {car: l259, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l3, cdr: {car: {car: l192, cdr: {car: {car: {car: l260, cdr: {car: {car: l18, cdr: l2}, cdr: l2}}, cdr: l2}, cdr: {car: {car: l129, cdr: {car: {car: l192, cdr: {car: {car: {car: {car: l131, cdr: {car: l260, cdr: l2}}, cdr: {car: {car: l131, cdr: {car: {car: l34, cdr: {car: l259, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: l2}, cdr: {car: {car: l165, cdr: {car: {car: l131, cdr: {car: l260, cdr: l2}}, cdr: {car: {car: l131, cdr: {car: l260, cdr: l2}}, cdr: {car: {car: l58, cdr: {car: {car: l130, cdr: {car: {car: l35, cdr: {car: l259, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: l2}}}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l57, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l168, cdr: {car: l259, cdr: l2}}, cdr: {car: {car: l54, cdr: {car: {car: {car: l11, cdr: {car: l259, cdr: l2}}, cdr: {car: l3, cdr: l2}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l35, cdr: {car: l259, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l34, cdr: {car: l259, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l3, cdr: {car: {car: l129, cdr: {car: {car: l165, cdr: {car: {car: l131, cdr: {car: {car: l34, cdr: {car: l259, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l57, cdr: {car: {car: l130, cdr: {car: {car: l35, cdr: {car: l259, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: {car: l2, cdr: l2}}}}, cdr: l2}}, cdr: l2}}, cdr: l2}}}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l56, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l255, cdr: {car: l168, cdr: {car: l261, cdr: l2}}}, cdr: {car: {car: l129, cdr: {car: {car: l55, cdr: {car: {car: l131, cdr: {car: l255, cdr: l2}}, cdr: {car: {car: l130, cdr: {car: {car: l65, cdr: {car: l261, cdr: {car: {car: l129, cdr: {car: {car: {car: l3, cdr: {car: {car: l236, cdr: {car: "ECASE expression failed.", cdr: l2}}, cdr: l2}}, cdr: l2}, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l55, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l255, cdr: {car: l168, cdr: {car: l261, cdr: l2}}}, cdr: {car: {car: l192, cdr: {car: {car: {car: l262, cdr: {car: {car: l18, cdr: l2}, cdr: l2}}, cdr: l2}, cdr: {car: {car: l129, cdr: {car: {car: l192, cdr: {car: {car: {car: {car: l131, cdr: {car: l262, cdr: l2}}, cdr: {car: {car: l131, cdr: {car: l255, cdr: l2}}, cdr: l2}}, cdr: l2}, cdr: {car: {car: l54, cdr: {car: {car: l130, cdr: {car: {car: l71, cdr: {car: {car: l176, cdr: {car: {car: l263, cdr: l2}, cdr: {car: {car: l165, cdr: {car: {car: l225, cdr: {car: {car: l34, cdr: {car: l263, cdr: l2}}, cdr: {car: l3, cdr: l2}}}, cdr: {car: l263, cdr: {car: {car: l129, cdr: {car: {car: {car: l30, cdr: {car: {car: l131, cdr: {car: l262, cdr: l2}}, cdr: {car: {car: l128, cdr: {car: {car: l131, cdr: {car: {car: l34, cdr: {car: l263, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: l2}}}, cdr: {car: {car: l130, cdr: {car: {car: l35, cdr: {car: l263, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: l2}}}}, cdr: l2}}}, cdr: {car: l261, cdr: l2}}}, cdr: l2}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l54, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l168, cdr: {car: l261, cdr: l2}}, cdr: {car: {car: l165, cdr: {car: {car: l11, cdr: {car: l261, cdr: l2}}, cdr: {car: l2, cdr: {car: {car: l165, cdr: {car: {car: l225, cdr: {car: {car: l36, cdr: {car: l261, cdr: l2}}, cdr: {car: l3, cdr: l2}}}, cdr: {car: {car: l129, cdr: {car: {car: l189, cdr: {car: {car: l130, cdr: {car: {car: l38, cdr: {car: l261, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: {car: l165, cdr: {car: {car: l131, cdr: {car: {car: l36, cdr: {car: l261, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l189, cdr: {car: {car: l130, cdr: {car: {car: l38, cdr: {car: l261, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l54, cdr: {car: {car: l130, cdr: {car: {car: l35, cdr: {car: l261, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: l2}}}}, cdr: l2}}, cdr: l2}}}}, cdr: l2}}}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l53, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l264, cdr: {car: l168, cdr: {car: l248, cdr: l2}}}, cdr: {car: {car: l192, cdr: {car: {car: {car: l265, cdr: {car: {car: l18, cdr: l2}, cdr: l2}}, cdr: {car: {car: l266, cdr: {car: {car: l43, cdr: {car: l264, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l267, cdr: {car: {car: l44, cdr: {car: l264, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l257, cdr: {car: {car: l45, cdr: {car: l264, cdr: l2}}, cdr: l2}}, cdr: l2}}}}, cdr: {car: {car: l129, cdr: {car: {car: l144, cdr: {car: l2, cdr: {car: {car: l192, cdr: {car: {car: {car: {car: l131, cdr: {car: l266, cdr: l2}}, cdr: {car: 0, cdr: l2}}, cdr: {car: {car: {car: l131, cdr: {car: l265, cdr: l2}}, cdr: {car: {car: l131, cdr: {car: l267, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l185, cdr: {car: {car: l210, cdr: {car: {car: l131, cdr: {car: l266, cdr: l2}}, cdr: {car: {car: l131, cdr: {car: l265, cdr: l2}}, cdr: l2}}}, cdr: {car: {car: l201, cdr: {car: {car: l130, cdr: {car: l248, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l49, cdr: {car: {car: l131, cdr: {car: l266, cdr: l2}}, cdr: l2}}, cdr: l2}}}}, cdr: {car: {car: l131, cdr: {car: l257, cdr: l2}}, cdr: l2}}}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l52, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l264, cdr: {car: l168, cdr: {car: l248, cdr: l2}}}, cdr: {car: {car: l192, cdr: {car: {car: {car: l266, cdr: {car: {car: l43, cdr: {car: l264, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l268, cdr: {car: {car: l18, cdr: l2}, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: {car: l144, cdr: {car: l2, cdr: {car: {car: l192, cdr: {car: {car: {car: {car: l131, cdr: {car: l268, cdr: l2}}, cdr: {car: {car: l131, cdr: {car: {car: l44, cdr: {car: l264, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: {car: {car: {car: l131, cdr: {car: l266, cdr: l2}}, cdr: {car: l2, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l185, cdr: {car: {car: l131, cdr: {car: l268, cdr: l2}}, cdr: {car: {car: l177, cdr: {car: {car: l131, cdr: {car: l266, cdr: l2}}, cdr: {car: {car: l34, cdr: {car: {car: l131, cdr: {car: l268, cdr: l2}}, cdr: l2}}, cdr: l2}}}, cdr: {car: {car: l201, cdr: {car: {car: l130, cdr: {car: l248, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l177, cdr: {car: {car: l131, cdr: {car: l268, cdr: l2}}, cdr: {car: {car: l35, cdr: {car: {car: l131, cdr: {car: l268, cdr: l2}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}}}}, cdr: {car: {car: l131, cdr: {car: {car: l45, cdr: {car: l264, cdr: l2}}, cdr: l2}}, cdr: l2}}}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l51, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l269, cdr: {car: l270, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: {car: l177, cdr: {car: {car: l131, cdr: {car: l270, cdr: l2}}, cdr: {car: {car: l32, cdr: {car: {car: l131, cdr: {car: l269, cdr: l2}}, cdr: {car: {car: l131, cdr: {car: l270, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l50, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l269, cdr: {car: l167, cdr: {car: {car: l271, cdr: {car: 1, cdr: l2}}, cdr: l2}}}, cdr: {car: {car: l129, cdr: {car: {car: l177, cdr: {car: {car: l131, cdr: {car: l269, cdr: l2}}, cdr: {car: {car: l23, cdr: {car: {car: l131, cdr: {car: l269, cdr: l2}}, cdr: {car: {car: l131, cdr: {car: l271, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l49, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l269, cdr: {car: l167, cdr: {car: {car: l271, cdr: {car: 1, cdr: l2}}, cdr: l2}}}, cdr: {car: {car: l129, cdr: {car: {car: l177, cdr: {car: {car: l131, cdr: {car: l269, cdr: l2}}, cdr: {car: {car: l22, cdr: {car: {car: l131, cdr: {car: l269, cdr: l2}}, cdr: {car: {car: l131, cdr: {car: l271, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l13, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l272, cdr: {car: l168, cdr: {car: l248, cdr: l2}}}, cdr: {car: {car: l129, cdr: {car: {car: l144, cdr: {car: l2, cdr: {car: {car: l185, cdr: {car: {car: l131, cdr: {car: l272, cdr: l2}}, cdr: {car: {car: l130, cdr: {car: l248, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l12, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l167, cdr: {car: l258, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: {car: l194, cdr: {car: l2, cdr: {car: {car: l131, cdr: {car: l258, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l9, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l252, cdr: {car: l253, cdr: {car: l168, cdr: {car: l248, cdr: l2}}}}, cdr: {car: {car: l129, cdr: {car: {car: l189, cdr: {car: {car: l221, cdr: {car: {car: l128, cdr: {car: {car: l131, cdr: {car: l252, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l8, cdr: {car: {car: l131, cdr: {car: {car: l220, cdr: {car: l252, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l131, cdr: {car: l253, cdr: l2}}, cdr: {car: {car: l130, cdr: {car: {car: l165, cdr: {car: {car: l57, cdr: {car: {car: l228, cdr: {car: {car: l34, cdr: {car: l248, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l31, cdr: {car: {car: l11, cdr: {car: {car: l35, cdr: {car: l248, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: l2}}}, cdr: {car: {car: l129, cdr: {car: {car: {car: l131, cdr: {car: {car: l34, cdr: {car: l248, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l144, cdr: {car: {car: l131, cdr: {car: l252, cdr: l2}}, cdr: {car: {car: l130, cdr: {car: {car: l35, cdr: {car: l248, cdr: l2}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: {car: {car: l144, cdr: {car: {car: l131, cdr: {car: l252, cdr: l2}}, cdr: {car: {car: l130, cdr: {car: l248, cdr: l2}}, cdr: l2}}}, cdr: l2}, cdr: l2}}, cdr: l2}}}}, cdr: l2}}, cdr: l2}}}}, cdr: l2}}}, cdr: {car: {car: l128, cdr: {car: {car: l131, cdr: {car: l252, cdr: l2}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l8, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l252, cdr: {car: l253, cdr: {car: l168, cdr: {car: l248, cdr: l2}}}}, cdr: {car: {car: l192, cdr: {car: {car: {car: l269, cdr: {car: {car: l18, cdr: {car: "FN", cdr: l2}}, cdr: l2}}, cdr: l2}, cdr: {car: {car: l129, cdr: {car: {car: l192, cdr: {car: {car: {car: {car: l131, cdr: {car: l269, cdr: l2}}, cdr: {car: {car: l176, cdr: {car: {car: l131, cdr: {car: l253, cdr: l2}}, cdr: {car: {car: l130, cdr: {car: l248, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: l2}, cdr: {car: {car: l239, cdr: {car: {car: l131, cdr: {car: l269, cdr: l2}}, cdr: {car: "fname", cdr: {car: {car: l131, cdr: {car: l252, cdr: l2}}, cdr: l2}}}}, cdr: {car: {car: l131, cdr: {car: l269, cdr: l2}}, cdr: l2}}}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l7, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l252, cdr: {car: l258, cdr: {car: l167, cdr: {car: l273, cdr: l2}}}}, cdr: {car: {car: l129, cdr: {car: {car: l189, cdr: {car: {car: l177, cdr: {car: {car: l131, cdr: {car: l252, cdr: l2}}, cdr: {car: {car: l131, cdr: {car: l258, cdr: l2}}, cdr: l2}}}, cdr: {car: {car: l130, cdr: {car: {car: l4, cdr: {car: {car: l228, cdr: {car: l273, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: {car: {car: l239, cdr: {car: {car: l128, cdr: {car: {car: l131, cdr: {car: l252, cdr: l2}}, cdr: l2}}, cdr: {car: "vardoc", cdr: {car: {car: l131, cdr: {car: l273, cdr: l2}}, cdr: l2}}}}, cdr: l2}, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: {car: {car: l128, cdr: {car: {car: l131, cdr: {car: l252, cdr: l2}}, cdr: l2}}, cdr: l2}}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l6, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l252, cdr: {car: l258, cdr: {car: l167, cdr: {car: l273, cdr: l2}}}}, cdr: {car: {car: l129, cdr: {car: {car: l189, cdr: {car: {car: l5, cdr: {car: {car: l20, cdr: {car: {car: l128, cdr: {car: {car: l131, cdr: {car: l252, cdr: l2}}, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l177, cdr: {car: {car: l131, cdr: {car: l252, cdr: l2}}, cdr: {car: {car: l131, cdr: {car: l258, cdr: l2}}, cdr: l2}}}, cdr: l2}}}, cdr: {car: {car: l130, cdr: {car: {car: l4, cdr: {car: {car: l228, cdr: {car: l273, cdr: l2}}, cdr: {car: {car: l129, cdr: {car: {car: {car: l239, cdr: {car: {car: l128, cdr: {car: {car: l131, cdr: {car: l252, cdr: l2}}, cdr: l2}}, cdr: {car: "vardoc", cdr: {car: {car: l131, cdr: {car: l273, cdr: l2}}, cdr: l2}}}}, cdr: l2}, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: {car: {car: l128, cdr: {car: {car: l131, cdr: {car: l252, cdr: l2}}, cdr: l2}}, cdr: l2}}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l5, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l272, cdr: {car: l168, cdr: {car: l248, cdr: l2}}}, cdr: {car: {car: l129, cdr: {car: {car: l165, cdr: {car: {car: l131, cdr: {car: l272, cdr: l2}}, cdr: {car: l2, cdr: {car: {car: l189, cdr: {car: {car: l130, cdr: {car: l248, cdr: l2}}, cdr: l2}}, cdr: l2}}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l4, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l272, cdr: {car: l168, cdr: {car: l248, cdr: l2}}}, cdr: {car: {car: l129, cdr: {car: {car: l165, cdr: {car: {car: l131, cdr: {car: l272, cdr: l2}}, cdr: {car: {car: l189, cdr: {car: {car: l130, cdr: {car: l248, cdr: l2}}, cdr: l2}}, cdr: {car: l2, cdr: l2}}}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: {car: {car: l1, cdr: {car: l161, cdr: {car: {car: l176, cdr: {car: {car: l252, cdr: {car: l253, cdr: {car: l168, cdr: {car: l248, cdr: l2}}}}, cdr: {car: {car: l129, cdr: {car: {car: l187, cdr: {car: {car: l160, cdr: {car: {car: l128, cdr: {car: {car: l131, cdr: {car: l252, cdr: l2}}, cdr: l2}}, cdr: {car: {car: l128, cdr: {car: {car: l176, cdr: {car: {car: l131, cdr: {car: {car: l71, cdr: {car: {car: l176, cdr: {car: {car: l269, cdr: l2}, cdr: {car: {car: l165, cdr: {car: {car: l225, cdr: {car: l269, cdr: {car: {car: l128, cdr: {car: l274, cdr: l2}}, cdr: l2}}}, cdr: {car: {car: l128, cdr: {car: l168, cdr: l2}}, cdr: {car: l269, cdr: l2}}}}, cdr: l2}}}, cdr: {car: l253, cdr: l2}}}, cdr: l2}}, cdr: {car: {car: l130, cdr: {car: l248, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}}, cdr: l2}}, cdr: l2}}, cdr: l2}}}, cdr: {car: l3, cdr: l2}}}}, cdr: l2}}}}}}}}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: l2, cdr: {car: l2, cdr: l2}}}};
(function(){
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["WITH-COMPILATION-UNIT"] = l246);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LS-COMPILE-TOPLEVEL"] = l245);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["COMPILE-FUNCALL"] = l244);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LS-MACROEXPAND-1"] = l243);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["WRITE-STRING"] = l242);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["FUNCTIONP"] = l241);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["IN"] = l240);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["OSET"] = l239);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["OGET"] = l238);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NEW"] = l237);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["ERROR"] = l236);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["JS-EVAL"] = l235);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["APPLY"] = l234);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["FUNCALL"] = l233);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CHAR"] = l232);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SLICE"] = l231);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["STRING-LENGTH"] = l230);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["STRING-UPCASE"] = l229);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["STRINGP"] = l228);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["STRING"] = l227);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["EQUAL"] = l226);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["EQ"] = l225);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LAMBDA-CODE"] = l224);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SYMBOL-PLIST"] = l223);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SYMBOL-VALUE"] = l222);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["FSET"] = l221);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SYMBOL-NAME"] = l220);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MAKE-SYMBOL"] = l219);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SYMBOLP"] = l218);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SETCDR"] = l217);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SETCAR"] = l216);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["FLOOR"] = l215);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NUMBERP"] = l214);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())[">="] = l213);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["<="] = l212);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())[">"] = l211);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["<"] = l210);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MOD"] = l209);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NUM-OP-NUM"] = l208);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["TYPE-CHECK"] = l207);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DEFINE-BUILTIN"] = l206);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BACKQUOTE-EXPAND"] = l205);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BACKQUOTE-EXPAND-1"] = l204);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["UNWIND-PROTECT"] = l203);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["GO"] = l202);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["TAGBODY"] = l201);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DECLARE-TAGBODY-TAGS"] = l200);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["GO-TAG-P"] = l199);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*GO-TAG-COUNTER*"] = l198);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*TAGBODY-COUNTER*"] = l197);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["THROW"] = l196);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CATCH"] = l195);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["RETURN-FROM"] = l194);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*BLOCK-COUNTER*"] = l193);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LET"] = l192);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DYNAMIC-BINDING-WRAPPER"] = l191);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DEFINE-TRANSFORMATION"] = l190);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["PROGN"] = l189);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["EVAL"] = l188);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["EVAL-WHEN-COMPILE"] = l187);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SYMBOL-FUNCTION"] = l186);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["%WHILE"] = l185);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LITERAL"] = l184);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["GENLIT"] = l183);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*LITERAL-COUNTER*"] = l182);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*LITERAL-SYMBOLS*"] = l181);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["JS-VSET"] = l180);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["JS-VREF"] = l179);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SET"] = l178);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SETQ"] = l177);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LAMBDA"] = l176);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LAMBDA-DOCSTRING-WRAPPER"] = l175);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LAMBDA-LIST-REST-ARGUMENT"] = l174);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LAMBDA-LIST-OPTIONAL-ARGUMENTS"] = l173);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"] = l172);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LAMBDA-LIST-REQUIRED-ARGUMENTS"] = l171);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LIST-UNTIL-KEYWORD"] = l170);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["&REST"] = l168);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["&OPTIONAL"] = l167);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*LAMBDA-LIST-KEYWORDS*"] = l166);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["IF"] = l165);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DEFINE-COMPILATION"] = l164);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LS-COMPILE-BLOCK"] = l163);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*COMPILATIONS*"] = l162);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MACRO"] = l161);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["%COMPILE-DEFMACRO"] = l160);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["GET-TOPLEVEL-COMPILATIONS"] = l159);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["NULL-OR-EMPTY-P"] = l158);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["TOPLEVEL-COMPILATION"] = l157);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*TOPLEVEL-COMPILATIONS*"] = l156);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LEXICAL-VARIABLE"] = l155);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["EXTEND-LOCAL-ENV"] = l154);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["TRANSLATE-VARIABLE"] = l153);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["GVARNAME"] = l152);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*VARIABLE-COUNTER*"] = l151);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CLEAR-UNDECLARED-GLOBAL-BINDINGS"] = l150);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*ENVIRONMENT*"] = l149);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*GLOBAL-ENVIRONMENT*"] = l148);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LOOKUP-IN-LEXENV"] = l147);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["EXTEND-LEXENV"] = l146);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["GOTAG"] = l145);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BLOCK"] = l144);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["PUSH-TO-LEXENV"] = l143);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["COPY-LEXENV"] = l142);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MAKE-LEXENV"] = l141);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MARK-BINDING-AS-DECLARED"] = l140);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BINDING-DECLARED"] = l139);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SET-BINDING-VALUE"] = l138);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BINDING-VALUE"] = l137);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BINDING-TYPE"] = l136);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BINDING-NAME"] = l135);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MAKE-BINDING"] = l134);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*COMPILATION-UNIT-CHECKS*"] = l133);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LS-READ-FROM-STRING"] = l132);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["UNQUOTE"] = l131);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["UNQUOTE-SPLICING"] = l130);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["BACKQUOTE"] = l129);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["QUOTE"] = l128);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*EOF*"] = l127);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["READ-SHARP"] = l126);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["READ-STRING"] = l125);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LS-READ"] = l124);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["%READ-LIST"] = l123);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SKIP-WHITESPACES-AND-COMMENTS"] = l122);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["READ-UNTIL"] = l121);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["TERMINALP"] = l120);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["SKIP-WHITESPACES"] = l119);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["WHITESPACEP"] = l118);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["%READ-CHAR"] = l117);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["%PEEK-CHAR"] = l116);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MAKE-STRING-STREAM"] = l115);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["PRINT"] = l114);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["WARN"] = l113);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["ESCAPE-STRING"] = l112);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["PRIN1-TO-STRING"] = l111);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["JS!SELFCALL"] = l110);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["LS-COMPILE"] = l109);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["JS!BOOL"] = l108);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["INDENT"] = l107);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["MAPCONCAT"] = l106);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["JOIN-TRAILING"] = l105);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["JOIN"] = l104);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CONCATF"] = l103);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["CONCAT"] = l102);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["*NEWLINE*"] = l101);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["VARIABLE"] = l100);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["FUNCTION"] = l99);
    (((function(){
        var symbol = l10;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })())["DOCUMENTATION"] = l98);
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
    (l181).value = l247;
    (l149).value = l275;
    (l151).value = 619;
    (l17).value = 160;
    return (l193).value = 226;
})();
(l182).value = 275;
