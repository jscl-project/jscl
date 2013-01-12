var f34;
var f33;
var f32;
var f31;
var f30;
var f29;
var f28;
var f27;
var f26;
var f25;
var f24;
var f23;
var f22;
var f21;
var f20;
var f19;
var f18;
var f17;
var f16;
var f15;
var f14;
var f13;
var f12;
var f11;
var f10;
var f9;
var f8;
var f7;
var f5;
var v12;
var f4;
var f3;
var f2;
var f1;
var v3;
var v2;
var v1;
(function(){
    (function(){
        return v1 = {};
    })();
    (function(){
        return v2 = (function(){
            var name = "NIL";
            if (typeof name != 'string')
                throw 'The value ' + name + ' is not a type string.';
            return ({name: name});
        })();
    })();
    ((v1)["NIL"] = v2);
    (function(){
        return v3 = (function(){
            var name = "T";
            if (typeof name != 'string')
                throw 'The value ' + name + ' is not a type string.';
            return ({name: name});
        })();
    })();
    ((v1)["T"] = v3);
    (function(){
        return f1 = (function(v4){
            ((v4)["fname"] = "NULL");
            return v4;
        })((function (v5){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return ((v5 === v2)?v3: v2);
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
    })();
    (function(){
        return f2 = (function(v6){
            ((v6)["fname"] = "INTERNP");
            return v6;
        })((function (v7){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (((v7) in (v1))?v3: v2);
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
    })();
    (function(){
        return f3 = (function(v8){
            ((v8)["fname"] = "INTERN");
            return v8;
        })((function (v9){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (f2(v9) !== v2 ? (function(){
                            var tmp = (v1)[v9];
                            return tmp == undefined? v2: tmp ;
                        })() : ((v1)[v9] = (function(){
                            var name = v9;
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
    })();
    (function(){
        return f4 = (function(v10){
            ((v10)["fname"] = "FIND-SYMBOL");
            return v10;
        })((function (v11){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var tmp = (v1)[v11];
                            return tmp == undefined? v2: tmp ;
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
    })();
    (function(){
        return v12 = 0;
    })();
    (function(){
        return f5 = (function(v13){
            ((v13)["fname"] = "GENSYM");
            return v13;
        })((function (v14){
            if (arguments.length > 1) throw 'too many arguments';
            switch(arguments.length){
            case 0:
            v14="G";
            default: break;
            }
            return (function(){
                try {
                    return (function(){
                        v12 = (function(){
                            var x = v12;
                            var y = 1;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x+y;
                        })();
                        return (function(){
                            var name = (function(){
                                var string1 = v14;
                                var string2 = f6(v12);
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
    })();
    (function(){
        return f7 = (function(v15){
            ((v15)["fname"] = "=");
            return v15;
        })((function (v16,v17){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return ((function(){
                            var x = v16;
                            var y = v17;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x==y;
                        })()?v3: v2);
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
    })();
    (function(){
        return f8 = (function(v18){
            ((v18)["fname"] = "+");
            return v18;
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
                            return x+y;
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
    })();
    (function(){
        return f9 = (function(v21){
            ((v21)["fname"] = "-");
            return v21;
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
                            return x-y;
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
    })();
    (function(){
        return f10 = (function(v24){
            ((v24)["fname"] = "*");
            return v24;
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
                            return x*y;
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
    })();
    (function(){
        return f11 = (function(v27){
            ((v27)["fname"] = "/");
            return v27;
        })((function (v28,v29){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var x = v28;
                            var y = v29;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x/y;
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
    })();
    (function(){
        return f12 = (function(v30){
            ((v30)["fname"] = "1+");
            return v30;
        })((function (v31){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var x = v31;
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
                    if (cf.type == 'block' && cf.id == 11)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        
        }));
    })();
    (function(){
        return f13 = (function(v32){
            ((v32)["fname"] = "1-");
            return v32;
        })((function (v33){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var x = v33;
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
                    if (cf.type == 'block' && cf.id == 12)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        
        }));
    })();
    (function(){
        return f14 = (function(v34){
            ((v34)["fname"] = "ZEROP");
            return v34;
        })((function (v35){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return ((function(){
                            var x = v35;
                            var y = 0;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x==y;
                        })()?v3: v2);
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
    })();
    (function(){
        return f15 = (function(v36){
            ((v36)["fname"] = "TRUNCATE");
            return v36;
        })((function (v37,v38){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var x = (function(){
                                var x = v37;
                                var y = v38;
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
                    if (cf.type == 'block' && cf.id == 14)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        
        }));
    })();
    (function(){
        return f16 = (function(v39){
            ((v39)["fname"] = "EQL");
            return v39;
        })((function (v40,v41){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return ((v40 === v41)?v3: v2);
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
    })();
    (function(){
        return f17 = (function(v42){
            ((v42)["fname"] = "NOT");
            return v42;
        })((function (v43){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (v43 !== v2 ? v2 : v3);
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
    })();
    (function(){
        return f18 = (function(v44){
            ((v44)["fname"] = "CONS");
            return v44;
        })((function (v45,v46){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return ({car: v45, cdr: v46});
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
    })();
    (function(){
        return f19 = (function(v47){
            ((v47)["fname"] = "CONSP");
            return v47;
        })((function (v48){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return ((function(){
                            var tmp = v48;
                            return (typeof tmp == 'object' && 'car' in tmp);
                        })()?v3: v2);
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
    })();
    (function(){
        return f20 = (function(v49){
            ((v49)["fname"] = "CAR");
            return v49;
        })((function (v50){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var tmp = v50;
                            return tmp === v2? v2: tmp.car;
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
    })();
    (function(){
        return f21 = (function(v51){
            ((v51)["fname"] = "CDR");
            return v51;
        })((function (v52){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var tmp = v52;
                            return tmp === v2? v2: tmp.cdr;
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
    })();
    (function(){
        return f22 = (function(v53){
            ((v53)["fname"] = "CAAR");
            return v53;
        })((function (v54){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var tmp = (function(){
                                var tmp = v54;
                                return tmp === v2? v2: tmp.car;
                            })();
                            return tmp === v2? v2: tmp.car;
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
    })();
    (function(){
        return f23 = (function(v55){
            ((v55)["fname"] = "CADR");
            return v55;
        })((function (v56){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var tmp = (function(){
                                var tmp = v56;
                                return tmp === v2? v2: tmp.cdr;
                            })();
                            return tmp === v2? v2: tmp.car;
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
    })();
    (function(){
        return f24 = (function(v57){
            ((v57)["fname"] = "CDAR");
            return v57;
        })((function (v58){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var tmp = (function(){
                                var tmp = v58;
                                return tmp === v2? v2: tmp.car;
                            })();
                            return tmp === v2? v2: tmp.cdr;
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
    })();
    (function(){
        return f25 = (function(v59){
            ((v59)["fname"] = "CDDR");
            return v59;
        })((function (v60){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var tmp = (function(){
                                var tmp = v60;
                                return tmp === v2? v2: tmp.cdr;
                            })();
                            return tmp === v2? v2: tmp.cdr;
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
    })();
    (function(){
        return f26 = (function(v61){
            ((v61)["fname"] = "CADDR");
            return v61;
        })((function (v62){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var tmp = (function(){
                                var tmp = (function(){
                                    var tmp = v62;
                                    return tmp === v2? v2: tmp.cdr;
                                })();
                                return tmp === v2? v2: tmp.cdr;
                            })();
                            return tmp === v2? v2: tmp.car;
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
    })();
    (function(){
        return f27 = (function(v63){
            ((v63)["fname"] = "CDDDR");
            return v63;
        })((function (v64){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var tmp = (function(){
                                var tmp = (function(){
                                    var tmp = v64;
                                    return tmp === v2? v2: tmp.cdr;
                                })();
                                return tmp === v2? v2: tmp.cdr;
                            })();
                            return tmp === v2? v2: tmp.cdr;
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
    })();
    (function(){
        return f28 = (function(v65){
            ((v65)["fname"] = "CADDDR");
            return v65;
        })((function (v66){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var tmp = (function(){
                                var tmp = (function(){
                                    var tmp = (function(){
                                        var tmp = v66;
                                        return tmp === v2? v2: tmp.cdr;
                                    })();
                                    return tmp === v2? v2: tmp.cdr;
                                })();
                                return tmp === v2? v2: tmp.cdr;
                            })();
                            return tmp === v2? v2: tmp.car;
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
    })();
    (function(){
        return f29 = (function(v67){
            ((v67)["fname"] = "FIRST");
            return v67;
        })((function (v68){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var tmp = v68;
                            return tmp === v2? v2: tmp.car;
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
    })();
    (function(){
        return f30 = (function(v69){
            ((v69)["fname"] = "SECOND");
            return v69;
        })((function (v70){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f23(v70);
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
    })();
    (function(){
        return f31 = (function(v71){
            ((v71)["fname"] = "THIRD");
            return v71;
        })((function (v72){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f26(v72);
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
    })();
    (function(){
        return f32 = (function(v73){
            ((v73)["fname"] = "FOURTH");
            return v73;
        })((function (v74){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f28(v74);
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
    })();
    (function(){
        return f33 = (function(v75){
            ((v75)["fname"] = "LIST");
            return v75;
        })((function (){
            var v76= v2;
            for (var i = arguments.length-1; i>=0; i--)
                v76 = {car: arguments[i], cdr: 
            v76};
            return (function(){
                try {
                    return (function(){
                        return v76;
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
    })();
    (function(){
        return f34 = (function(v77){
            ((v77)["fname"] = "ATOM");
            return v77;
        })((function (v78){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f17(((function(){
                            var tmp = v78;
                            return (typeof tmp == 'object' && 'car' in tmp);
                        })()?v3: v2));
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
    })();
    return ;
})(); 
var f35;
(function(){
    return f35 = (function(v79){
        ((v79)["fname"] = "ENSURE-LIST");
        return v79;
    })((function (v80){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (f36(v80) !== v2 ? v80 : f33(v80));
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
})(); 
var f37;
(function(){
    return f37 = (function(v81){
        ((v81)["fname"] = "!REDUCE");
        return v81;
    })((function (v82,v83,v84){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (f1(v83) !== v2 ? v84 : f37(v82, (function(){
                        var tmp = v83;
                        return tmp === v2? v2: tmp.cdr;
                    })(), (v82)(v84, (function(){
                        var tmp = v83;
                        return tmp === v2? v2: tmp.car;
                    })())));
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
})(); 
var l35 = f3("STRING=");
var f68;
var l34 = f3("ASSOC");
var f67;
var l33 = f3("EVERY");
var f66;
var l32 = f3("SOME");
var f65;
var l31 = f3("PARSE-INTEGER");
var f64;
var l30 = f3("SUBSEQ");
var f63;
var l29 = f3("DIGIT-CHAR-P");
var f62;
var l28 = f3("REMOVE-IF-NOT");
var f61;
var l27 = f3("REMOVE-IF");
var f60;
var l26 = f3("REMOVE");
var f59;
var l25 = f3("MEMBER");
var f58;
var l24 = f3("BUTLAST");
var f57;
var l23 = f3("LAST");
var f56;
var l22 = f3("NTH");
var f55;
var l21 = f3("NTHCDR");
var f54;
var l20 = f3("LISTP");
var f36;
var l19 = f3("MINUSP");
var f53;
var l18 = f3("PLUSP");
var f52;
var l17 = f3("INTEGERP");
var f51;
var l16 = f3("CHAR=");
var f50;
var l15 = f3("CHAR-CODE");
var f49;
var l14 = f3("CODE-CHAR");
var f48;
var l13 = f3("COPY-LIST");
var f47;
var l12 = f3("IDENTITY");
var f46;
var l11 = f3("MAPCAR");
var l10 = f3("NIL");
var f45;
var l9 = f3("CONCAT-TWO");
var f44;
var l8 = f3("LENGTH");
var f43;
var l7 = f3("LIST-LENGTH");
var f42;
var l6 = f3("REVERSE");
var l5 = f3("NIL");
var f41;
var l4 = f3("REVAPPEND");
var f40;
var l3 = f3("APPEND");
var l2 = f3("NIL");
var f39;
var l1 = f3("APPEND-TWO");
var f38;
(function(){
    (function(){
        (function(){
            return f38 = (function(v85){
                ((v85)["fname"] = "APPEND-TWO");
                return v85;
            })((function (v86,v87){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (f1(v86) !== v2 ? v87 : ({car: (function(){
                                var tmp = v86;
                                return tmp === v2? v2: tmp.car;
                            })(), cdr: f39((function(){
                                var tmp = v86;
                                return tmp === v2? v2: tmp.cdr;
                            })(), v87)}));
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
        })();
        return l1;
    })();
    (function(){
        (function(){
            return f39 = (function(v88){
                ((v88)["fname"] = "APPEND");
                return v88;
            })((function (){
                var v89= v2;
                for (var i = arguments.length-1; i>=0; i--)
                    v89 = {car: arguments[i], cdr: 
                v89};
                return (function(){
                    try {
                        return (function(){
                            return f37(f38, v89, l2);
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
        })();
        return l3;
    })();
    (function(){
        (function(){
            return f40 = (function(v90){
                ((v90)["fname"] = "REVAPPEND");
                return v90;
            })((function (v91,v92){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(v91 !== v2){
                                                v92 = ({car: (function(){
                                                    var tmp = v91;
                                                    return tmp === v2? v2: tmp.car;
                                                })(), cdr: v92});
                                                v91 = (function(){
                                                    var tmp = v91;
                                                    return tmp === v2? v2: tmp.cdr;
                                                })();
                                            }return v2;
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
                            return v92;
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
        })();
        return l4;
    })();
    (function(){
        (function(){
            return f41 = (function(v93){
                ((v93)["fname"] = "REVERSE");
                return v93;
            })((function (v94){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return f40(v94, l5);
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
        })();
        return l6;
    })();
    (function(){
        (function(){
            return f42 = (function(v95){
                ((v95)["fname"] = "LIST-LENGTH");
                return v95;
            })((function (v96){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (function(v97){
                                (function(){
                                    try {
                                        return (function(){
                                            return (function(){
                                                while(f17(f1(v96)) !== v2){
                                                    v97 = (function(){
                                                        var x = v97;
                                                        var y = 1;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        if (typeof y != 'number')
                                                            throw 'The value ' + y + ' is not a type number.';
                                                        return x+y;
                                                    })();
                                                    v96 = (function(){
                                                        var tmp = v96;
                                                        return tmp === v2? v2: tmp.cdr;
                                                    })();
                                                }return v2;
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
                                return v97;
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
        })();
        return l7;
    })();
    (function(){
        (function(){
            return f43 = (function(v98){
                ((v98)["fname"] = "LENGTH");
                return v98;
            })((function (v99){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (((typeof(v99) == "string")?v3: v2) !== v2 ? (function(){
                                var x = v99;
                                if (typeof x != 'string')
                                    throw 'The value ' + x + ' is not a type string.';
                                return x.length;
                            })() : f42(v99));
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
        })();
        return l8;
    })();
    (function(){
        (function(){
            return f44 = (function(v100){
                ((v100)["fname"] = "CONCAT-TWO");
                return v100;
            })((function (v101,v102){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (function(){
                                var string1 = v101;
                                var string2 = v102;
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
        })();
        return l9;
    })();
    (function(){
        (function(){
            return f45 = (function(v103){
                ((v103)["fname"] = "MAPCAR");
                return v103;
            })((function (v104,v105){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (f1(v105) !== v2 ? l10 : ({car: (v104)((function(){
                                var tmp = v105;
                                return tmp === v2? v2: tmp.car;
                            })()), cdr: f45(v104, (function(){
                                var tmp = v105;
                                return tmp === v2? v2: tmp.cdr;
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
        })();
        return l11;
    })();
    (function(){
        (function(){
            return f46 = (function(v106){
                ((v106)["fname"] = "IDENTITY");
                return v106;
            })((function (v107){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return v107;
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
        })();
        return l12;
    })();
    (function(){
        (function(){
            return f47 = (function(v108){
                ((v108)["fname"] = "COPY-LIST");
                return v108;
            })((function (v109){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return f45(f46, v109);
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
        })();
        return l13;
    })();
    (function(){
        (function(){
            return f48 = (function(v110){
                ((v110)["fname"] = "CODE-CHAR");
                return v110;
            })((function (v111){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return v111;
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
        })();
        return l14;
    })();
    (function(){
        (function(){
            return f49 = (function(v112){
                ((v112)["fname"] = "CHAR-CODE");
                return v112;
            })((function (v113){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return v113;
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
        })();
        return l15;
    })();
    (function(){
        (function(){
            return f50 = (function(v114){
                ((v114)["fname"] = "CHAR=");
                return v114;
            })((function (v115,v116){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return ((function(){
                                var x = v115;
                                var y = v116;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x==y;
                            })()?v3: v2);
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
        })();
        return l16;
    })();
    (function(){
        (function(){
            return f51 = (function(v117){
                ((v117)["fname"] = "INTEGERP");
                return v117;
            })((function (v118){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (((typeof (v118) == "number")?v3: v2) !== v2 ? ((function(){
                                var x = (function(){
                                    var x = v118;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    return Math.floor(x);
                                })();
                                var y = v118;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x==y;
                            })()?v3: v2) : v2);
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
        })();
        return l17;
    })();
    (function(){
        (function(){
            return f52 = (function(v119){
                ((v119)["fname"] = "PLUSP");
                return v119;
            })((function (v120){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return ((function(){
                                var x = 0;
                                var y = v120;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x<y;
                            })()?v3: v2);
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
        })();
        return l18;
    })();
    (function(){
        (function(){
            return f53 = (function(v121){
                ((v121)["fname"] = "MINUSP");
                return v121;
            })((function (v122){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return ((function(){
                                var x = v122;
                                var y = 0;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x<y;
                            })()?v3: v2);
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
        })();
        return l19;
    })();
    (function(){
        (function(){
            return f36 = (function(v123){
                ((v123)["fname"] = "LISTP");
                return v123;
            })((function (v124){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (function(v125){
                                return (v125 !== v2 ? v125 : f1(v124));
                            })(((function(){
                                var tmp = v124;
                                return (typeof tmp == 'object' && 'car' in tmp);
                            })()?v3: v2));
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
        })();
        return l20;
    })();
    (function(){
        (function(){
            return f54 = (function(v126){
                ((v126)["fname"] = "NTHCDR");
                return v126;
            })((function (v127,v128){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while((f52(v127) !== v2 ? v128 : v2) !== v2){
                                                v127 = f13(v127);
                                                v128 = (function(){
                                                    var tmp = v128;
                                                    return tmp === v2? v2: tmp.cdr;
                                                })();
                                            }return v2;
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
                            return v128;
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
        })();
        return l21;
    })();
    (function(){
        (function(){
            return f55 = (function(v129){
                ((v129)["fname"] = "NTH");
                return v129;
            })((function (v130,v131){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (function(){
                                var tmp = f54(v130, v131);
                                return tmp === v2? v2: tmp.car;
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
        })();
        return l22;
    })();
    (function(){
        (function(){
            return f56 = (function(v132){
                ((v132)["fname"] = "LAST");
                return v132;
            })((function (v133){
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
                                                    var tmp = v133;
                                                    return tmp === v2? v2: tmp.cdr;
                                                })();
                                                return (typeof tmp == 'object' && 'car' in tmp);
                                            })()?v3: v2) !== v2){
                                                v133 = (function(){
                                                    var tmp = v133;
                                                    return tmp === v2? v2: tmp.cdr;
                                                })();
                                            }return v2;
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
                            return v133;
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
        })();
        return l23;
    })();
    (function(){
        (function(){
            return f57 = (function(v134){
                ((v134)["fname"] = "BUTLAST");
                return v134;
            })((function (v135){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (((function(){
                                var tmp = (function(){
                                    var tmp = v135;
                                    return tmp === v2? v2: tmp.cdr;
                                })();
                                return (typeof tmp == 'object' && 'car' in tmp);
                            })()?v3: v2) !== v2 ? ({car: (function(){
                                var tmp = v135;
                                return tmp === v2? v2: tmp.car;
                            })(), cdr: f57((function(){
                                var tmp = v135;
                                return tmp === v2? v2: tmp.cdr;
                            })())}) : v2);
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
        })();
        return l24;
    })();
    (function(){
        (function(){
            return f58 = (function(v136){
                ((v136)["fname"] = "MEMBER");
                return v136;
            })((function (v137,v138){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(v138 !== v2){
                                                (f16(v137, (function(){
                                                    var tmp = v138;
                                                    return tmp === v2? v2: tmp.car;
                                                })()) !== v2 ? (function(){
                                                    return (function(){
                                                        throw ({type: 'block', id: 62, value: v138, message: 'Return from unknown block NIL.'})
                                                    })();
                                                })() : v2);
                                                v138 = (function(){
                                                    var tmp = v138;
                                                    return tmp === v2? v2: tmp.cdr;
                                                })();
                                            }return v2;
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
        })();
        return l25;
    })();
    (function(){
        (function(){
            return f59 = (function(v139){
                ((v139)["fname"] = "REMOVE");
                return v139;
            })((function (v140,v141){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (f1(v141) !== v2 ? (function(){
                                return v2;
                            })() : (f16(v140, (function(){
                                var tmp = v141;
                                return tmp === v2? v2: tmp.car;
                            })()) !== v2 ? (function(){
                                return f59(v140, (function(){
                                    var tmp = v141;
                                    return tmp === v2? v2: tmp.cdr;
                                })());
                            })() : (function(){
                                return ({car: (function(){
                                    var tmp = v141;
                                    return tmp === v2? v2: tmp.car;
                                })(), cdr: f59(v140, (function(){
                                    var tmp = v141;
                                    return tmp === v2? v2: tmp.cdr;
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
        })();
        return l26;
    })();
    (function(){
        (function(){
            return f60 = (function(v142){
                ((v142)["fname"] = "REMOVE-IF");
                return v142;
            })((function (v143,v144){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (f1(v144) !== v2 ? (function(){
                                return v2;
                            })() : ((v143)((function(){
                                var tmp = v144;
                                return tmp === v2? v2: tmp.car;
                            })()) !== v2 ? (function(){
                                return f60(v143, (function(){
                                    var tmp = v144;
                                    return tmp === v2? v2: tmp.cdr;
                                })());
                            })() : (function(){
                                return ({car: (function(){
                                    var tmp = v144;
                                    return tmp === v2? v2: tmp.car;
                                })(), cdr: f60(v143, (function(){
                                    var tmp = v144;
                                    return tmp === v2? v2: tmp.cdr;
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
        })();
        return l27;
    })();
    (function(){
        (function(){
            return f61 = (function(v145){
                ((v145)["fname"] = "REMOVE-IF-NOT");
                return v145;
            })((function (v146,v147){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (f1(v147) !== v2 ? (function(){
                                return v2;
                            })() : ((v146)((function(){
                                var tmp = v147;
                                return tmp === v2? v2: tmp.car;
                            })()) !== v2 ? (function(){
                                return ({car: (function(){
                                    var tmp = v147;
                                    return tmp === v2? v2: tmp.car;
                                })(), cdr: f61(v146, (function(){
                                    var tmp = v147;
                                    return tmp === v2? v2: tmp.cdr;
                                })())});
                            })() : (function(){
                                return f61(v146, (function(){
                                    var tmp = v147;
                                    return tmp === v2? v2: tmp.cdr;
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
        })();
        return l28;
    })();
    (function(){
        (function(){
            return f62 = (function(v148){
                ((v148)["fname"] = "DIGIT-CHAR-P");
                return v148;
            })((function (v149){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return ((((function(){
                                var x = 48;
                                var y = v149;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x<=y;
                            })()?v3: v2) !== v2 ? ((function(){
                                var x = v149;
                                var y = 57;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x<=y;
                            })()?v3: v2) : v2) !== v2 ? (function(){
                                var x = v149;
                                var y = 48;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x-y;
                            })() : v2);
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
        })();
        return l29;
    })();
    (function(){
        (function(){
            return f63 = (function(v150){
                ((v150)["fname"] = "SUBSEQ");
                return v150;
            })((function (v151,v152,v153){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 3) throw 'too many arguments';
                switch(arguments.length){
                case 2:
                v153=v2;
                default: break;
                }
                return (function(){
                    try {
                        return (function(){
                            return (((typeof(v151) == "string")?v3: v2) !== v2 ? (function(){
                                return (v153 !== v2 ? (function(){
                                    var str = v151;
                                    var a = v152;
                                    var b;
                                    b = v153;
                                    return str.slice(a,b);
                                })() : (function(){
                                    var str = v151;
                                    var a = v152;
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
        })();
        return l30;
    })();
    (function(){
        (function(){
            return f64 = (function(v154){
                ((v154)["fname"] = "PARSE-INTEGER");
                return v154;
            })((function (v155){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (function(v156,v157,v158){
                                (function(){
                                    try {
                                        return (function(){
                                            return (function(){
                                                while(((function(){
                                                    var x = v157;
                                                    var y = v158;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x<y;
                                                })()?v3: v2) !== v2){
                                                    v156 = (function(){
                                                        var x = (function(){
                                                            var x = v156;
                                                            var y = 10;
                                                            if (typeof x != 'number')
                                                                throw 'The value ' + x + ' is not a type number.';
                                                            if (typeof y != 'number')
                                                                throw 'The value ' + y + ' is not a type number.';
                                                            return x*y;
                                                        })();
                                                        var y = f62((function(){
                                                            var string = v155;
                                                            var index = v157;
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
                                                    v157 = (function(){
                                                        var x = v157;
                                                        var y = 1;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        if (typeof y != 'number')
                                                            throw 'The value ' + y + ' is not a type number.';
                                                        return x+y;
                                                    })();
                                                }return v2;
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
                                return v156;
                            })(0,0,f43(v155));
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
        })();
        return l31;
    })();
    (function(){
        (function(){
            return f65 = (function(v159){
                ((v159)["fname"] = "SOME");
                return v159;
            })((function (v160,v161){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (((typeof(v161) == "string")?v3: v2) !== v2 ? (function(){
                                return (function(v162,v163){
                                    (function(){
                                        try {
                                            return (function(){
                                                return (function(){
                                                    while(((function(){
                                                        var x = v162;
                                                        var y = v163;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        if (typeof y != 'number')
                                                            throw 'The value ' + y + ' is not a type number.';
                                                        return x<y;
                                                    })()?v3: v2) !== v2){
                                                        ((v160)((function(){
                                                            var string = v161;
                                                            var index = v162;
                                                            if (typeof string != 'string')
                                                                throw 'The value ' + string + ' is not a type string.';
                                                            if (typeof index != 'number')
                                                                throw 'The value ' + index + ' is not a type number.';
                                                            return string.charCodeAt(index);
                                                        })()) !== v2 ? (function(){
                                                            return (function(){
                                                                throw ({type: 'block', id: 70, value: v3, message: 'Return from unknown block SOME.'})
                                                            })();
                                                        })() : v2);
                                                        v162 = (function(){
                                                            var x = v162;
                                                            var y = 1;
                                                            if (typeof x != 'number')
                                                                throw 'The value ' + x + ' is not a type number.';
                                                            if (typeof y != 'number')
                                                                throw 'The value ' + y + ' is not a type number.';
                                                            return x+y;
                                                        })();
                                                    }return v2;
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
                                    return v2;
                                })(0,f43(v161));
                            })() : (f36(v161) !== v2 ? (function(){
                                return (function(){
                                    try {
                                        return (function(){
                                            return (function(v164,v165){
                                                (function(){
                                                    while(v164 !== v2){
                                                        v165 = (function(){
                                                            var tmp = v164;
                                                            return tmp === v2? v2: tmp.car;
                                                        })();
                                                        (function(){
                                                            ((v160)(v165) !== v2 ? (function(){
                                                                return (function(){
                                                                    throw ({type: 'block', id: 72, value: v3, message: 'Return from unknown block NIL.'})
                                                                })();
                                                            })() : v2);
                                                            return v2;
                                                        })();
                                                        v164 = (function(){
                                                            var tmp = v164;
                                                            return tmp === v2? v2: tmp.cdr;
                                                        })();
                                                    }return v2;
                                                })();
                                                return v2;
                                            })(v161,v2);
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
        })();
        return l32;
    })();
    (function(){
        (function(){
            return f66 = (function(v166){
                ((v166)["fname"] = "EVERY");
                return v166;
            })((function (v167,v168){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (((typeof(v168) == "string")?v3: v2) !== v2 ? (function(){
                                return (function(v169,v170){
                                    (function(){
                                        try {
                                            return (function(){
                                                return (function(){
                                                    while(((function(){
                                                        var x = v169;
                                                        var y = v170;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        if (typeof y != 'number')
                                                            throw 'The value ' + y + ' is not a type number.';
                                                        return x<y;
                                                    })()?v3: v2) !== v2){
                                                        ((v167)((function(){
                                                            var string = v168;
                                                            var index = v169;
                                                            if (typeof string != 'string')
                                                                throw 'The value ' + string + ' is not a type string.';
                                                            if (typeof index != 'number')
                                                                throw 'The value ' + index + ' is not a type number.';
                                                            return string.charCodeAt(index);
                                                        })()) !== v2 ? v2 : (function(){
                                                            return (function(){
                                                                throw ({type: 'block', id: 73, value: v2, message: 'Return from unknown block EVERY.'})
                                                            })();
                                                        })());
                                                        v169 = (function(){
                                                            var x = v169;
                                                            var y = 1;
                                                            if (typeof x != 'number')
                                                                throw 'The value ' + x + ' is not a type number.';
                                                            if (typeof y != 'number')
                                                                throw 'The value ' + y + ' is not a type number.';
                                                            return x+y;
                                                        })();
                                                    }return v2;
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
                                    return v3;
                                })(0,f43(v168));
                            })() : (f36(v168) !== v2 ? (function(){
                                return (function(){
                                    try {
                                        return (function(){
                                            return (function(v171,v172){
                                                (function(){
                                                    while(v171 !== v2){
                                                        v172 = (function(){
                                                            var tmp = v171;
                                                            return tmp === v2? v2: tmp.car;
                                                        })();
                                                        (function(){
                                                            ((v167)(v172) !== v2 ? v2 : (function(){
                                                                return (function(){
                                                                    throw ({type: 'block', id: 75, value: v2, message: 'Return from unknown block NIL.'})
                                                                })();
                                                            })());
                                                            return v2;
                                                        })();
                                                        v171 = (function(){
                                                            var tmp = v171;
                                                            return tmp === v2? v2: tmp.cdr;
                                                        })();
                                                    }return v2;
                                                })();
                                                return v3;
                                            })(v168,v2);
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
        })();
        return l33;
    })();
    (function(){
        (function(){
            return f67 = (function(v173){
                ((v173)["fname"] = "ASSOC");
                return v173;
            })((function (v174,v175){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(v175 !== v2){
                                                (f16(v174, f22(v175)) !== v2 ? (function(){
                                                    throw ({type: 'block', id: 77, value: v2, message: 'Return from unknown block NIL.'})
                                                })() : v175 = (function(){
                                                    var tmp = v175;
                                                    return tmp === v2? v2: tmp.cdr;
                                                })());
                                            }return v2;
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
                                var tmp = v175;
                                return tmp === v2? v2: tmp.car;
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
        })();
        return l34;
    })();
    return (function(){
        (function(){
            return f68 = (function(v176){
                ((v176)["fname"] = "STRING=");
                return v176;
            })((function (v177,v178){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return ((v177 == v178)?v3: v2);
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
        })();
        return l35;
    })();
})(); 
var l36 = f3("*NEWLINE*");
var v179;
(function(){
    (function(){
        return v179 = (function(){
            var x = f48(10);
            if (typeof x != 'number')
                throw 'The value ' + x + ' is not a type number.';
            return String.fromCharCode(x);
        })();
    })();
    return l36;
})(); 
var l37 = f3("CONCAT");
var f69;
(function(){
    (function(){
        return f69 = (function(v180){
            ((v180)["fname"] = "CONCAT");
            return v180;
        })((function (){
            var v181= v2;
            for (var i = arguments.length-1; i>=0; i--)
                v181 = {car: arguments[i], cdr: 
            v181};
            return (function(){
                try {
                    return (function(){
                        return f37(f44, v181, "");
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
    })();
    return l37;
})(); 
var l38 = f3("JOIN");
var f70;
(function(){
    (function(){
        return f70 = (function(v182){
            ((v182)["fname"] = "JOIN");
            return v182;
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
                        return (f1(v183) !== v2 ? (function(){
                            return "";
                        })() : (f1((function(){
                            var tmp = v183;
                            return tmp === v2? v2: tmp.cdr;
                        })()) !== v2 ? (function(){
                            return (function(){
                                var tmp = v183;
                                return tmp === v2? v2: tmp.car;
                            })();
                        })() : (function(){
                            return f69((function(){
                                var tmp = v183;
                                return tmp === v2? v2: tmp.car;
                            })(), v184, f70((function(){
                                var tmp = v183;
                                return tmp === v2? v2: tmp.cdr;
                            })(), v184));
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
    })();
    return l38;
})(); 
var l39 = f3("JOIN-TRAILING");
var f71;
(function(){
    (function(){
        return f71 = (function(v185){
            ((v185)["fname"] = "JOIN-TRAILING");
            return v185;
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
                        return (f1(v186) !== v2 ? "" : f69((function(){
                            var tmp = v186;
                            return tmp === v2? v2: tmp.car;
                        })(), v187, f71((function(){
                            var tmp = v186;
                            return tmp === v2? v2: tmp.cdr;
                        })(), v187)));
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
    })();
    return l39;
})(); 
var l40 = f3("INDENT");
var f72;
(function(){
    (function(){
        return f72 = (function(v188){
            ((v188)["fname"] = "INDENT");
            return v188;
        })((function (){
            var v189= v2;
            for (var i = arguments.length-1; i>=0; i--)
                v189 = {car: arguments[i], cdr: 
            v189};
            return (function(){
                try {
                    return (function(){
                        return (function(v190){
                            return (function(v191,v192,v193){
                                (f52(f43(v190)) !== v2 ? (function(){
                                    return v191 = f69(v191, (function(){
                                        return "    ";
                                    })());
                                })() : v2);
                                (function(){
                                    try {
                                        return (function(){
                                            return (function(){
                                                while(((function(){
                                                    var x = v192;
                                                    var y = v193;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x<y;
                                                })()?v3: v2) !== v2){
                                                    (function(v194){
                                                        return v191 = f69(v191, (function(){
                                                            return v194;
                                                        })());
                                                    })(((f50((function(){
                                                        var string = v190;
                                                        var index = v192;
                                                        if (typeof string != 'string')
                                                            throw 'The value ' + string + ' is not a type string.';
                                                        if (typeof index != 'number')
                                                            throw 'The value ' + index + ' is not a type number.';
                                                        return string.charCodeAt(index);
                                                    })(), 10) !== v2 ? (((function(){
                                                        var x = v192;
                                                        var y = f13(v193);
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        if (typeof y != 'number')
                                                            throw 'The value ' + y + ' is not a type number.';
                                                        return x<y;
                                                    })()?v3: v2) !== v2 ? f17(f50((function(){
                                                        var string = v190;
                                                        var index = f12(v192);
                                                        if (typeof string != 'string')
                                                            throw 'The value ' + string + ' is not a type string.';
                                                        if (typeof index != 'number')
                                                            throw 'The value ' + index + ' is not a type number.';
                                                        return string.charCodeAt(index);
                                                    })(), 10)) : v2) : v2) !== v2 ? f69((function(){
                                                        var x = 10;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        return String.fromCharCode(x);
                                                    })(), "    ") : (function(){
                                                        var x = (function(){
                                                            var string = v190;
                                                            var index = v192;
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
                                                    v192 = (function(){
                                                        var x = v192;
                                                        var y = 1;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        if (typeof y != 'number')
                                                            throw 'The value ' + y + ' is not a type number.';
                                                        return x+y;
                                                    })();
                                                }return v2;
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
                                return v191;
                            })("",0,f43(v190));
                        })(f70(v189));
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
    })();
    return l40;
})(); 
var l41 = f3("INTEGER-TO-STRING");
var f6;
(function(){
    (function(){
        return f6 = (function(v195){
            ((v195)["fname"] = "INTEGER-TO-STRING");
            return v195;
        })((function (v196){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (f14(v196) !== v2 ? (function(){
                            return "0";
                        })() : (f53(v196) !== v2 ? (function(){
                            return f69("-", f6((function(){
                                var x = 0;
                                var y = v196;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x-y;
                            })()));
                        })() : (function(){
                            return (function(v197){
                                (function(){
                                    try {
                                        return (function(){
                                            return (function(){
                                                while(f17(f14(v196)) !== v2){
                                                    v197 = ({car: (function(){
                                                        var x = v196;
                                                        var y = 10;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        if (typeof y != 'number')
                                                            throw 'The value ' + y + ' is not a type number.';
                                                        return x%y;
                                                    })(), cdr: v197});
                                                    v196 = f15(v196, 10);
                                                }return v2;
                                            })();
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 85)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })();
                                return f70(f45((function (v198){
                                    if (arguments.length < 1) throw 'too few arguments';
                                    if (arguments.length > 1) throw 'too many arguments';
                                    return (function(){
                                        var x = (function(){
                                            var string = "0123456789";
                                            var index = v198;
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
                                
                                }), v197));
                            })(v2);
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
    })();
    return l41;
})(); 
var l42 = f3("JS!BOOL");
var f73;
(function(){
    (function(){
        return f73 = (function(v199){
            ((v199)["fname"] = "JS!BOOL");
            return v199;
        })((function (v200){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f69("(", v200, "?", f74(v3), ": ", f74(v2), ")");
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
    })();
    return l42;
})(); 
var l45 = f3("PRINT");
var f78;
var l44 = f3("WRITE-LINE");
var f77;
var l43 = f3("PRIN1-TO-STRING");
var f75;
(function(){
    (function(){
        (function(){
            return f75 = (function(v201){
                ((v201)["fname"] = "PRIN1-TO-STRING");
                return v201;
            })((function (v202){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (((function(){
                                var tmp = v202;
                                return (typeof tmp == 'object' && 'name' in tmp);
                            })()?v3: v2) !== v2 ? (function(){
                                return (v202).name;
                            })() : (f51(v202) !== v2 ? (function(){
                                return f6(v202);
                            })() : (((typeof(v202) == "string")?v3: v2) !== v2 ? (function(){
                                return f69("\"", f76(v202), "\"");
                            })() : (((typeof v202 == 'function')?v3: v2) !== v2 ? (function(){
                                return (function(v203){
                                    return (v203 !== v2 ? f69("#<FUNCTION ", v203, ">") : f69("#<FUNCTION>"));
                                })((function(){
                                    var tmp = (v202)["fname"];
                                    return tmp == undefined? v2: tmp ;
                                })());
                            })() : (f36(v202) !== v2 ? (function(){
                                return f69("(", f71(f45(f75, f57(v202)), " "), (function(v204){
                                    return (f1((function(){
                                        var tmp = v204;
                                        return tmp === v2? v2: tmp.cdr;
                                    })()) !== v2 ? f75((function(){
                                        var tmp = v204;
                                        return tmp === v2? v2: tmp.car;
                                    })()) : f69(f75((function(){
                                        var tmp = v204;
                                        return tmp === v2? v2: tmp.car;
                                    })()), " . ", f75((function(){
                                        var tmp = v204;
                                        return tmp === v2? v2: tmp.cdr;
                                    })())));
                                })(f56(v202)), ")");
                            })() : v2)))));
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
        })();
        return l43;
    })();
    (function(){
        (function(){
            return f77 = (function(v205){
                ((v205)["fname"] = "WRITE-LINE");
                return v205;
            })((function (v206){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            (function(){
                                var x = v206;
                                if (typeof x != 'string')
                                    throw 'The value ' + x + ' is not a type string.';
                                return lisp.write(x);
                            })();
                            (function(){
                                var x = v179;
                                if (typeof x != 'string')
                                    throw 'The value ' + x + ' is not a type string.';
                                return lisp.write(x);
                            })();
                            return v206;
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
        })();
        return l44;
    })();
    return (function(){
        (function(){
            return f78 = (function(v207){
                ((v207)["fname"] = "PRINT");
                return v207;
            })((function (v208){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            f77(f75(v208));
                            return v208;
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
        })();
        return l45;
    })();
})(); 
var l46 = f3("MAKE-STRING-STREAM");
var f79;
(function(){
    (function(){
        return f79 = (function(v209){
            ((v209)["fname"] = "MAKE-STRING-STREAM");
            return v209;
        })((function (v210){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return ({car: v210, cdr: 0});
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
    })();
    return l46;
})(); 
var l47 = f3("%PEEK-CHAR");
var f80;
(function(){
    (function(){
        return f80 = (function(v211){
            ((v211)["fname"] = "%PEEK-CHAR");
            return v211;
        })((function (v212){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var x = (function(){
                                var tmp = v212;
                                return tmp === v2? v2: tmp.cdr;
                            })();
                            var y = f43((function(){
                                var tmp = v212;
                                return tmp === v2? v2: tmp.car;
                            })());
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x<y;
                        })()?v3: v2) !== v2 ? (function(){
                            var string = (function(){
                                var tmp = v212;
                                return tmp === v2? v2: tmp.car;
                            })();
                            var index = (function(){
                                var tmp = v212;
                                return tmp === v2? v2: tmp.cdr;
                            })();
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            if (typeof index != 'number')
                                throw 'The value ' + index + ' is not a type number.';
                            return string.charCodeAt(index);
                        })() : v2);
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
    })();
    return l47;
})(); 
var l48 = f3("%READ-CHAR");
var f81;
(function(){
    (function(){
        return f81 = (function(v213){
            ((v213)["fname"] = "%READ-CHAR");
            return v213;
        })((function (v214){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var x = (function(){
                                var tmp = v214;
                                return tmp === v2? v2: tmp.cdr;
                            })();
                            var y = f43((function(){
                                var tmp = v214;
                                return tmp === v2? v2: tmp.car;
                            })());
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x<y;
                        })()?v3: v2) !== v2 ? (function(v215){
                            (function(){
                                var x = v214;
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.cdr = f12((function(){
                                    var tmp = v214;
                                    return tmp === v2? v2: tmp.cdr;
                                })()));
                            })();
                            return v215;
                        })((function(){
                            var string = (function(){
                                var tmp = v214;
                                return tmp === v2? v2: tmp.car;
                            })();
                            var index = (function(){
                                var tmp = v214;
                                return tmp === v2? v2: tmp.cdr;
                            })();
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            if (typeof index != 'number')
                                throw 'The value ' + index + ' is not a type number.';
                            return string.charCodeAt(index);
                        })()) : v2);
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
    })();
    return l48;
})(); 
var l49 = f3("WHITESPACEP");
var f82;
(function(){
    (function(){
        return f82 = (function(v216){
            ((v216)["fname"] = "WHITESPACEP");
            return v216;
        })((function (v217){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v218){
                            return (v218 !== v2 ? v218 : (function(v219){
                                return (v219 !== v2 ? v219 : f50(v217, 9));
                            })(f50(v217, 10)));
                        })(f50(v217, 32));
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
    })();
    return l49;
})(); 
var l50 = f3("SKIP-WHITESPACES");
var f83;
(function(){
    (function(){
        return f83 = (function(v220){
            ((v220)["fname"] = "SKIP-WHITESPACES");
            return v220;
        })((function (v221){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v222){
                            v222 = f80(v221);
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while((v222 !== v2 ? f82(v222) : v2) !== v2){
                                                f81(v221);
                                                v222 = f80(v221);
                                            }return v2;
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
                        })(v2);
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
    })();
    return l50;
})(); 
var l51 = f3("TERMINALP");
var f84;
(function(){
    (function(){
        return f84 = (function(v223){
            ((v223)["fname"] = "TERMINALP");
            return v223;
        })((function (v224){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v225){
                            return (v225 !== v2 ? v225 : (function(v226){
                                return (v226 !== v2 ? v226 : (function(v227){
                                    return (v227 !== v2 ? v227 : f50(40, v224));
                                })(f50(41, v224)));
                            })(f82(v224)));
                        })(f1(v224));
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
    })();
    return l51;
})(); 
var l52 = f3("READ-UNTIL");
var f85;
(function(){
    (function(){
        return f85 = (function(v228){
            ((v228)["fname"] = "READ-UNTIL");
            return v228;
        })((function (v229,v230){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v231,v232){
                            v232 = f80(v229);
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while((v232 !== v2 ? f17((v230)(v232)) : v2) !== v2){
                                                v231 = f69(v231, (function(){
                                                    var x = v232;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    return String.fromCharCode(x);
                                                })());
                                                f81(v229);
                                                v232 = f80(v229);
                                            }return v2;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 98)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return v231;
                        })("",v2);
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
    })();
    return l52;
})(); 
var l53 = f3("SKIP-WHITESPACES-AND-COMMENTS");
var f86;
(function(){
    (function(){
        return f86 = (function(v233){
            ((v233)["fname"] = "SKIP-WHITESPACES-AND-COMMENTS");
            return v233;
        })((function (v234){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v235){
                            f83(v234);
                            v235 = f80(v234);
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while((v235 !== v2 ? f50(v235, 59) : v2) !== v2){
                                                f85(v234, (function (v236){
                                                    if (arguments.length < 1) throw 'too few arguments';
                                                    if (arguments.length > 1) throw 'too many arguments';
                                                    return f50(v236, 10);
                                                
                                                }));
                                                f83(v234);
                                                v235 = f80(v234);
                                            }return v2;
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
                        })(v2);
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
    })();
    return l53;
})(); 
var l54 = f3("%READ-LIST");
var f87;
(function(){
    (function(){
        return f87 = (function(v237){
            ((v237)["fname"] = "%READ-LIST");
            return v237;
        })((function (v238){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        f86(v238);
                        return (function(v239){
                            return (f1(v239) !== v2 ? (function(){
                                return (function(){
                                    throw "Unspected EOF";
                                })();
                            })() : (f50(v239, 41) !== v2 ? (function(){
                                f81(v238);
                                return v2;
                            })() : (f50(v239, 46) !== v2 ? (function(){
                                f81(v238);
                                return (function(v240){
                                    f86(v238);
                                    (f50(f81(v238), 41) !== v2 ? v2 : (function(){
                                        return (function(){
                                            throw "')' was expected.";
                                        })();
                                    })());
                                    return v240;
                                })(f88(v238));
                            })() : (function(){
                                return ({car: f88(v238), cdr: f87(v238)});
                            })())));
                        })(f80(v238));
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
    })();
    return l54;
})(); 
var l55 = f3("READ-STRING");
var f89;
(function(){
    (function(){
        return f89 = (function(v241){
            ((v241)["fname"] = "READ-STRING");
            return v241;
        })((function (v242){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v243,v244){
                            v244 = f81(v242);
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(f17(f16(v244, 34)) !== v2){
                                                (f1(v244) !== v2 ? (function(){
                                                    return (function(){
                                                        throw "Unexpected EOF";
                                                    })();
                                                })() : v2);
                                                (f16(v244, 92) !== v2 ? (function(){
                                                    return v244 = f81(v242);
                                                })() : v2);
                                                v243 = f69(v243, (function(){
                                                    var x = v244;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    return String.fromCharCode(x);
                                                })());
                                                v244 = f81(v242);
                                            }return v2;
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
                            return v243;
                        })("",v2);
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
    })();
    return l55;
})(); 
var l60 = f3("READ-SHARP");
var l59 = 43;
var l58 = 92;
var l57 = f3("FUNCTION");
var l56 = 39;
var f90;
(function(){
    (function(){
        return f90 = (function(v245){
            ((v245)["fname"] = "READ-SHARP");
            return v245;
        })((function (v246){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        f81(v246);
                        return (function(v247){
                            return (f16(v247, l56) !== v2 ? (function(){
                                return f33(l57, f88(v246));
                            })() : (f16(v247, l58) !== v2 ? (function(){
                                return (function(v248){
                                    return (f68(v248, "space") !== v2 ? (function(){
                                        return f49(32);
                                    })() : (f68(v248, "tab") !== v2 ? (function(){
                                        return f49(9);
                                    })() : (f68(v248, "newline") !== v2 ? (function(){
                                        return f49(10);
                                    })() : (function(){
                                        return f49((function(){
                                            var string = v248;
                                            var index = 0;
                                            if (typeof string != 'string')
                                                throw 'The value ' + string + ' is not a type string.';
                                            if (typeof index != 'number')
                                                throw 'The value ' + index + ' is not a type number.';
                                            return string.charCodeAt(index);
                                        })());
                                    })())));
                                })(f69((function(){
                                    var x = f81(v246);
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    return String.fromCharCode(x);
                                })(), f85(v246, f84)));
                            })() : (f16(v247, l59) !== v2 ? (function(){
                                return (function(v249){
                                    return (f68(v249, "common-lisp") !== v2 ? (function(){
                                        f88(v246);
                                        return f88(v246);
                                    })() : (f68(v249, "ecmalisp") !== v2 ? (function(){
                                        return f88(v246);
                                    })() : (function(){
                                        return (function(){
                                            throw "Unknown reader form.";
                                        })();
                                    })()));
                                })(f85(v246, f84));
                            })() : (function(){
                                return (function(){
                                    throw "ECASE expression failed.";
                                })();
                            })())));
                        })(f81(v246));
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
    })();
    return l60;
})(); 
var l61 = f3("*EOF*");
var v250;
(function(){
    (function(){
        return v250 = (function(){
            var name = "EOF";
            if (typeof name != 'string')
                throw 'The value ' + name + ' is not a type string.';
            return ({name: name});
        })();
    })();
    return l61;
})(); 
var l66 = f3("LS-READ");
var l65 = f3("UNQUOTE");
var l64 = f3("UNQUOTE-SPLICING");
var l63 = f3("BACKQUOTE");
var l62 = f3("QUOTE");
var f88;
(function(){
    (function(){
        return f88 = (function(v251){
            ((v251)["fname"] = "LS-READ");
            return v251;
        })((function (v252){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        f86(v252);
                        return (function(v253){
                            return (f1(v253) !== v2 ? (function(){
                                return v250;
                            })() : (f50(v253, 40) !== v2 ? (function(){
                                f81(v252);
                                return f87(v252);
                            })() : (f50(v253, 39) !== v2 ? (function(){
                                f81(v252);
                                return f33(l62, f88(v252));
                            })() : (f50(v253, 96) !== v2 ? (function(){
                                f81(v252);
                                return f33(l63, f88(v252));
                            })() : (f50(v253, 34) !== v2 ? (function(){
                                f81(v252);
                                return f89(v252);
                            })() : (f50(v253, 44) !== v2 ? (function(){
                                f81(v252);
                                return (f16(f80(v252), 64) !== v2 ? (function(){
                                    f81(v252);
                                    return f33(l64, f88(v252));
                                })() : f33(l65, f88(v252)));
                            })() : (f50(v253, 35) !== v2 ? (function(){
                                return f90(v252);
                            })() : (function(){
                                return (function(v254){
                                    return (f66(f62, v254) !== v2 ? f64(v254) : f3((function(){
                                        var x = v254;
                                        if (typeof x != 'string')
                                            throw 'The value ' + x + ' is not a type string.';
                                        return x.toUpperCase();
                                    })()));
                                })(f85(v252, f84));
                            })())))))));
                        })(f80(v252));
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
    })();
    return l66;
})(); 
var l67 = f3("LS-READ-FROM-STRING");
var f91;
(function(){
    (function(){
        return f91 = (function(v255){
            ((v255)["fname"] = "LS-READ-FROM-STRING");
            return v255;
        })((function (v256){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f88(f79(v256));
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
    })();
    return l67;
})(); 
var l69 = f3("*COMPILATION-UNIT-CHECKS*");
var l68 = f3("NIL");
var v257;
(function(){
    (function(){
        return v257 = l68;
    })();
    return l69;
})(); 
var l70 = f3("MAKE-BINDING");
var f92;
(function(){
    (function(){
        return f92 = (function(v258){
            ((v258)["fname"] = "MAKE-BINDING");
            return v258;
        })((function (v259,v260,v261,v262){
            if (arguments.length < 4) throw 'too few arguments';
            if (arguments.length > 4) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f33(v259, v260, v261, v262);
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
    })();
    return l70;
})(); 
var l71 = f3("BINDING-NAME");
var f93;
(function(){
    (function(){
        return f93 = (function(v263){
            ((v263)["fname"] = "BINDING-NAME");
            return v263;
        })((function (v264){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f29(v264);
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
    })();
    return l71;
})(); 
var l72 = f3("BINDING-TYPE");
var f94;
(function(){
    (function(){
        return f94 = (function(v265){
            ((v265)["fname"] = "BINDING-TYPE");
            return v265;
        })((function (v266){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f30(v266);
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
    })();
    return l72;
})(); 
var l73 = f3("BINDING-TRANSLATION");
var f95;
(function(){
    (function(){
        return f95 = (function(v267){
            ((v267)["fname"] = "BINDING-TRANSLATION");
            return v267;
        })((function (v268){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f31(v268);
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
    })();
    return l73;
})(); 
var l74 = f3("BINDING-DECLARED");
var f96;
(function(){
    (function(){
        return f96 = (function(v269){
            ((v269)["fname"] = "BINDING-DECLARED");
            return v269;
        })((function (v270){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (v270 !== v2 ? f32(v270) : v2);
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
    })();
    return l74;
})(); 
var l75 = f3("MARK-BINDING-AS-DECLARED");
var f97;
(function(){
    (function(){
        return f97 = (function(v271){
            ((v271)["fname"] = "MARK-BINDING-AS-DECLARED");
            return v271;
        })((function (v272){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var x = f27(v272);
                            if (typeof x != 'object')
                                throw 'The value ' + x + ' is not a type object.';
                            return (x.car = v3);
                        })();
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
    })();
    return l75;
})(); 
var l76 = f3("MAKE-LEXENV");
var f98;
(function(){
    (function(){
        return f98 = (function(v273){
            ((v273)["fname"] = "MAKE-LEXENV");
            return v273;
        })((function (){
            if (arguments.length > 0) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f33(v2, v2, v2, v2);
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
    })();
    return l76;
})(); 
var l77 = f3("COPY-LEXENV");
var f99;
(function(){
    (function(){
        return f99 = (function(v274){
            ((v274)["fname"] = "COPY-LEXENV");
            return v274;
        })((function (v275){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f47(v275);
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
    })();
    return l77;
})(); 
var l82 = f3("PUSH-TO-LEXENV");
var l81 = f3("GOTAG");
var l80 = f3("BLOCK");
var l79 = f3("FUNCTION");
var l78 = f3("VARIABLE");
var f100;
(function(){
    (function(){
        return f100 = (function(v276){
            ((v276)["fname"] = "PUSH-TO-LEXENV");
            return v276;
        })((function (v277,v278,v279){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v280){
                            return (f16(v280, l78) !== v2 ? (function(){
                                return (function(){
                                    var x = v278;
                                    if (typeof x != 'object')
                                        throw 'The value ' + x + ' is not a type object.';
                                    return (x.car = ({car: v277, cdr: (function(){
                                        var tmp = v278;
                                        return tmp === v2? v2: tmp.car;
                                    })()}));
                                })();
                            })() : (f16(v280, l79) !== v2 ? (function(){
                                return (function(){
                                    var x = (function(){
                                        var tmp = v278;
                                        return tmp === v2? v2: tmp.cdr;
                                    })();
                                    if (typeof x != 'object')
                                        throw 'The value ' + x + ' is not a type object.';
                                    return (x.car = ({car: v277, cdr: f23(v278)}));
                                })();
                            })() : (f16(v280, l80) !== v2 ? (function(){
                                return (function(){
                                    var x = f25(v278);
                                    if (typeof x != 'object')
                                        throw 'The value ' + x + ' is not a type object.';
                                    return (x.car = ({car: v277, cdr: f26(v278)}));
                                })();
                            })() : (f16(v280, l81) !== v2 ? (function(){
                                return (function(){
                                    var x = f27(v278);
                                    if (typeof x != 'object')
                                        throw 'The value ' + x + ' is not a type object.';
                                    return (x.car = ({car: v277, cdr: f28(v278)}));
                                })();
                            })() : (function(){
                                return (function(){
                                    throw "ECASE expression failed.";
                                })();
                            })()))));
                        })(v279);
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
    })();
    return l82;
})(); 
var l83 = f3("EXTEND-LEXENV");
var f101;
(function(){
    (function(){
        return f101 = (function(v281){
            ((v281)["fname"] = "EXTEND-LEXENV");
            return v281;
        })((function (v282,v283,v284){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v285){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v286,v287){
                                            (function(){
                                                while(v286 !== v2){
                                                    v287 = (function(){
                                                        var tmp = v286;
                                                        return tmp === v2? v2: tmp.car;
                                                    })();
                                                    (function(){
                                                        f100(v287, v285, v284);
                                                        return v2;
                                                    })();
                                                    v286 = (function(){
                                                        var tmp = v286;
                                                        return tmp === v2? v2: tmp.cdr;
                                                    })();
                                                }return v2;
                                            })();
                                            return v285;
                                        })(f41(v282),v2);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 117)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })(f99(v283));
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
    })();
    return l83;
})(); 
var l88 = f3("LOOKUP-IN-LEXENV");
var l87 = f3("GOTAG");
var l86 = f3("BLOCK");
var l85 = f3("FUNCTION");
var l84 = f3("VARIABLE");
var f102;
(function(){
    (function(){
        return f102 = (function(v288){
            ((v288)["fname"] = "LOOKUP-IN-LEXENV");
            return v288;
        })((function (v289,v290,v291){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f67(v289, (function(v292){
                            return (f16(v292, l84) !== v2 ? (function(){
                                return f29(v290);
                            })() : (f16(v292, l85) !== v2 ? (function(){
                                return f30(v290);
                            })() : (f16(v292, l86) !== v2 ? (function(){
                                return f31(v290);
                            })() : (f16(v292, l87) !== v2 ? (function(){
                                return f32(v290);
                            })() : (function(){
                                return (function(){
                                    throw "ECASE expression failed.";
                                })();
                            })()))));
                        })(v291));
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
    })();
    return l88;
})(); 
var l89 = f3("*ENVIRONMENT*");
var v293;
(function(){
    (function(){
        return v293 = f98();
    })();
    return l89;
})(); 
var l90 = f3("CLEAR-UNDECLARED-GLOBAL-BINDINGS");
var f103;
(function(){
    (function(){
        return f103 = (function(v294){
            ((v294)["fname"] = "CLEAR-UNDECLARED-GLOBAL-BINDINGS");
            return v294;
        })((function (){
            if (arguments.length > 0) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return v293 = f45((function (v295){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return f61(f96, v295);
                        
                        }), v293);
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
    })();
    return l90;
})(); 
var l91 = f3("*VARIABLE-COUNTER*");
var v296;
(function(){
    (function(){
        return v296 = 0;
    })();
    return l91;
})(); 
var l92 = f3("GVARNAME");
var f104;
(function(){
    (function(){
        return f104 = (function(v297){
            ((v297)["fname"] = "GVARNAME");
            return v297;
        })((function (v298){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f69("v", f6(v296 = (function(){
                            var x = v296;
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
                    if (cf.type == 'block' && cf.id == 120)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        
        }));
    })();
    return l92;
})(); 
var l98 = f3("LOOKUP-VARIABLE");
var l97 = f3("VARIABLE");
var l96 = f3("VARIABLE");
var l95 = f3("VARIABLE");
var l94 = f3("VARIABLE");
var l93 = f3("VARIABLE");
var f105;
(function(){
    (function(){
        return f105 = (function(v299){
            ((v299)["fname"] = "LOOKUP-VARIABLE");
            return v299;
        })((function (v300,v301){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v302){
                            return (v302 !== v2 ? v302 : (function(v303){
                                return (v303 !== v2 ? v303 : (function(v304,v305){
                                    f100(v305, v293, l93);
                                    v257 = ({car: (function (){
                                        if (arguments.length > 0) throw 'too many arguments';
                                        return (function(v306){
                                            return (f96(v306) !== v2 ? v2 : (function(){
                                                return (function(){
                                                    throw f69("Undefined variable `", v304, "'");
                                                })();
                                            })());
                                        })(f102(v300, v293, l94));
                                    
                                    }), cdr: v257});
                                    return v305;
                                })((v300).name,f92(v300, l95, f104(v300), v2)));
                            })(f102(v300, v293, l96)));
                        })(f102(v300, v301, l97));
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
    })();
    return l98;
})(); 
var l99 = f3("LOOKUP-VARIABLE-TRANSLATION");
var f106;
(function(){
    (function(){
        return f106 = (function(v307){
            ((v307)["fname"] = "LOOKUP-VARIABLE-TRANSLATION");
            return v307;
        })((function (v308,v309){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f95(f105(v308, v309));
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
    })();
    return l99;
})(); 
var l102 = f3("EXTEND-LOCAL-ENV");
var l101 = f3("VARIABLE");
var l100 = f3("VARIABLE");
var f107;
(function(){
    (function(){
        return f107 = (function(v310){
            ((v310)["fname"] = "EXTEND-LOCAL-ENV");
            return v310;
        })((function (v311,v312){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v313){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v314,v315){
                                            (function(){
                                                while(v314 !== v2){
                                                    v315 = (function(){
                                                        var tmp = v314;
                                                        return tmp === v2? v2: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v316){
                                                            return f100(v316, v313, l100);
                                                        })(f92(v315, l101, f104(v315), v3));
                                                        return v2;
                                                    })();
                                                    v314 = (function(){
                                                        var tmp = v314;
                                                        return tmp === v2? v2: tmp.cdr;
                                                    })();
                                                }return v2;
                                            })();
                                            return v313;
                                        })(v311,v2);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 124)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })(f99(v312));
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
    })();
    return l102;
})(); 
var l103 = f3("*FUNCTION-COUNTER*");
var v317;
(function(){
    (function(){
        return v317 = 0;
    })();
    return l103;
})(); 
var l109 = f3("LOOKUP-FUNCTION");
var l108 = f3("FUNCTION");
var l107 = f3("FUNCTION");
var l106 = f3("FUNCTION");
var l105 = f3("FUNCTION");
var l104 = f3("FUNCTION");
var f108;
(function(){
    (function(){
        return f108 = (function(v318){
            ((v318)["fname"] = "LOOKUP-FUNCTION");
            return v318;
        })((function (v319,v320){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v321){
                            return (v321 !== v2 ? v321 : (function(v322){
                                return (v322 !== v2 ? v322 : (function(v323,v324){
                                    f100(v324, v293, l104);
                                    v257 = ({car: (function (){
                                        if (arguments.length > 0) throw 'too many arguments';
                                        return (function(v325){
                                            return (f96(v325) !== v2 ? v2 : (function(){
                                                return (function(){
                                                    throw f69("Undefined function `", v323, "'");
                                                })();
                                            })());
                                        })(f102(v319, v293, l105));
                                    
                                    }), cdr: v257});
                                    return v324;
                                })((v319).name,f92(v319, l106, f69("f", f6(v317 = (function(){
                                    var x = v317;
                                    var y = 1;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    if (typeof y != 'number')
                                        throw 'The value ' + y + ' is not a type number.';
                                    return x+y;
                                })())), v2)));
                            })(f102(v319, v293, l107)));
                        })(f102(v319, v320, l108));
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
    })();
    return l109;
})(); 
var l110 = f3("LOOKUP-FUNCTION-TRANSLATION");
var f109;
(function(){
    (function(){
        return f109 = (function(v326){
            ((v326)["fname"] = "LOOKUP-FUNCTION-TRANSLATION");
            return v326;
        })((function (v327,v328){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f95(f108(v327, v328));
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
    })();
    return l110;
})(); 
var l111 = f3("*TOPLEVEL-COMPILATIONS*");
var v329;
(function(){
    (function(){
        return v329 = v2;
    })();
    return l111;
})(); 
var l112 = f3("%COMPILE-DEFVAR");
var f110;
(function(){
    (function(){
        return f110 = (function(v330){
            ((v330)["fname"] = "%COMPILE-DEFVAR");
            return v330;
        })((function (v331){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v332){
                            f97(v332);
                            return v329 = ({car: f69("var ", f95(v332)), cdr: v329});
                        })(f105(v331, v293));
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
    })();
    return l112;
})(); 
var l113 = f3("%COMPILE-DEFUN");
var f111;
(function(){
    (function(){
        return f111 = (function(v333){
            ((v333)["fname"] = "%COMPILE-DEFUN");
            return v333;
        })((function (v334){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v335){
                            f97(v335);
                            return v329 = ({car: f69("var ", f95(v335)), cdr: v329});
                        })(f108(v334, v293));
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
    })();
    return l113;
})(); 
var l116 = f3("%COMPILE-DEFMACRO");
var l115 = f3("FUNCTION");
var l114 = f3("MACRO");
var f112;
(function(){
    (function(){
        return f112 = (function(v336){
            ((v336)["fname"] = "%COMPILE-DEFMACRO");
            return v336;
        })((function (v337,v338){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f100(f92(v337, l114, v338, v3), v293, l115);
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
    })();
    return l116;
})(); 
var l117 = f3("*COMPILATIONS*");
var v339;
(function(){
    (function(){
        return v339 = v2;
    })();
    return l117;
})(); 
var l118 = f3("LS-COMPILE-BLOCK");
var f113;
(function(){
    (function(){
        return f113 = (function(v340){
            ((v340)["fname"] = "LS-COMPILE-BLOCK");
            return v340;
        })((function (v341,v342){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f71(f60((function (v343){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return (function(v344){
                                return (v344 !== v2 ? v344 : (((typeof(v343) == "string")?v3: v2) !== v2 ? f14(f43(v343)) : v2));
                            })(f1(v343));
                        
                        }), f45((function (v345){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return f74(v345, v342);
                        
                        }), v341)), f69(";", v179));
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
    })();
    return l118;
})(); 
var l119 = f3("IF");
v339 = ({car: f33(l119, (function (v346,v347,v348,v349){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return f69("(", f74(v347, v346), " !== ", f74(v2), " ? ", f74(v348, v346), " : ", f74(v349, v346), ")");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 131)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l121 = f3("*LAMBDA-LIST-KEYWORDS*");
var l120 = {car: f3("&OPTIONAL"), cdr: {car: f3("&REST"), cdr: f3("NIL")}};
var v350;
(function(){
    (function(){
        return v350 = l120;
    })();
    return l121;
})(); 
var l122 = f3("LIST-UNTIL-KEYWORD");
var f114;
(function(){
    (function(){
        return f114 = (function(v351){
            ((v351)["fname"] = "LIST-UNTIL-KEYWORD");
            return v351;
        })((function (v352){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return ((function(v353){
                            return (v353 !== v2 ? v353 : f58((function(){
                                var tmp = v352;
                                return tmp === v2? v2: tmp.car;
                            })(), v350));
                        })(f1(v352)) !== v2 ? v2 : ({car: (function(){
                            var tmp = v352;
                            return tmp === v2? v2: tmp.car;
                        })(), cdr: f114((function(){
                            var tmp = v352;
                            return tmp === v2? v2: tmp.cdr;
                        })())}));
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
    })();
    return l122;
})(); 
var l123 = f3("LAMBDA-LIST-REQUIRED-ARGUMENTS");
var f115;
(function(){
    (function(){
        return f115 = (function(v354){
            ((v354)["fname"] = "LAMBDA-LIST-REQUIRED-ARGUMENTS");
            return v354;
        })((function (v355){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f114(v355);
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
    })();
    return l123;
})(); 
var l125 = f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
var l124 = f3("&OPTIONAL");
var f116;
(function(){
    (function(){
        return f116 = (function(v356){
            ((v356)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
            return v356;
        })((function (v357){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f45(f35, f114((function(){
                            var tmp = f58(l124, v357);
                            return tmp === v2? v2: tmp.cdr;
                        })()));
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
    })();
    return l125;
})(); 
var l126 = f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS");
var f117;
(function(){
    (function(){
        return f117 = (function(v358){
            ((v358)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS");
            return v358;
        })((function (v359){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f45(f20, f116(v359));
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
    })();
    return l126;
})(); 
var l128 = f3("LAMBDA-LIST-REST-ARGUMENT");
var l127 = f3("&REST");
var f118;
(function(){
    (function(){
        return f118 = (function(v360){
            ((v360)["fname"] = "LAMBDA-LIST-REST-ARGUMENT");
            return v360;
        })((function (v361){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v362){
                            ((function(){
                                var tmp = v362;
                                return tmp === v2? v2: tmp.cdr;
                            })() !== v2 ? (function(){
                                return (function(){
                                    throw "Bad lambda-list";
                                })();
                            })() : v2);
                            return (function(){
                                var tmp = v362;
                                return tmp === v2? v2: tmp.car;
                            })();
                        })(f114((function(){
                            var tmp = f58(l127, v361);
                            return tmp === v2? v2: tmp.cdr;
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
    })();
    return l128;
})(); 
var l129 = f3("LAMBDA");
v339 = ({car: f33(l129, (function (v364,v365){
    if (arguments.length < 2) throw 'too few arguments';
    var v363= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v363 = {car: arguments[i], cdr: 
    v363};
    return (function(){
        try {
            return (function(){
                return (function(v366,v367,v368){
                    return (function(v369,v370,v371){
                        return f69("(function (", f70(f45((function (v372){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return f106(v372, v371);
                        
                        }), f39(v366, v367)), ","), "){", v179, f72((v366 !== v2 ? f69("if (arguments.length < ", f6(v369), ") throw 'too few arguments';", v179) : ""), (f17(v368) !== v2 ? f69("if (arguments.length > ", f6((function(){
                            var x = v369;
                            var y = v370;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x+y;
                        })()), ") throw 'too many arguments';", v179) : ""), (v367 !== v2 ? f69("switch(arguments.length){", v179, (function(v373,v374,v375){
                            return (function(){
                                (function(){
                                    try {
                                        return (function(){
                                            return (function(){
                                                while(((function(){
                                                    var x = v375;
                                                    var y = v370;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x<y;
                                                })()?v3: v2) !== v2){
                                                    (function(v376){
                                                        v374 = ({car: f69("case ", f6((function(){
                                                            var x = v375;
                                                            var y = v369;
                                                            if (typeof x != 'number')
                                                                throw 'The value ' + x + ' is not a type number.';
                                                            if (typeof y != 'number')
                                                                throw 'The value ' + y + ' is not a type number.';
                                                            return x+y;
                                                        })()), ":", v179, f106((function(){
                                                            var tmp = v376;
                                                            return tmp === v2? v2: tmp.car;
                                                        })(), v371), "=", f74(f23(v376), v371), ";", v179), cdr: v374});
                                                        return v375 = (function(){
                                                            var x = v375;
                                                            var y = 1;
                                                            if (typeof x != 'number')
                                                                throw 'The value ' + x + ' is not a type number.';
                                                            if (typeof y != 'number')
                                                                throw 'The value ' + y + ' is not a type number.';
                                                            return x+y;
                                                        })();
                                                    })(f55(v375, v373));
                                                }return v2;
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
                                v374 = ({car: f69("default: break;", v179), cdr: v374});
                                return f70(f41(v374));
                            })();
                        })(f116(v365),v2,0), "}", v179) : ""), (v368 !== v2 ? (function(v377){
                            return f69("var ", v377, "= ", f74(v2), ";", v179, "for (var i = arguments.length-1; i>=", f6((function(){
                                var x = v369;
                                var y = v370;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })()), "; i--)", v179, f72(v377, " = ", "{car: arguments[i], cdr: "), v377, "};", v179);
                        })(f106(v368, v371)) : ""), f69(f113(f57(v363), v371), "return ", f74((function(){
                            var tmp = f56(v363);
                            return tmp === v2? v2: tmp.car;
                        })(), v371), ";")), v179, "})");
                    })(f43(v366),f43(v367),f107(f39(f35(v368), v366, v367), v364));
                })(f115(v365),f117(v365),f118(v365));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 137)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l130 = f3("FSETQ");
v339 = ({car: f33(l130, (function (v378,v379,v380){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return f69(f109(v379, v378), " = ", f74(v380, v378));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 139)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l131 = f3("SETQ");
v339 = ({car: f33(l131, (function (v381,v382,v383){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return f69(f106(v382, v381), " = ", f74(v383, v381));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 140)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l132 = f3("ESCAPE-STRING");
var f76;
(function(){
    (function(){
        return f76 = (function(v384){
            ((v384)["fname"] = "ESCAPE-STRING");
            return v384;
        })((function (v385){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v386,v387,v388){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(((function(){
                                                var x = v387;
                                                var y = v388;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                if (typeof y != 'number')
                                                    throw 'The value ' + y + ' is not a type number.';
                                                return x<y;
                                            })()?v3: v2) !== v2){
                                                (function(v389){
                                                    ((function(v390){
                                                        return (v390 !== v2 ? v390 : f50(v389, 92));
                                                    })(f50(v389, 34)) !== v2 ? (function(){
                                                        return v386 = f69(v386, "\\");
                                                    })() : v2);
                                                    (f50(v389, 10) !== v2 ? (function(){
                                                        v386 = f69(v386, "\\");
                                                        return v389 = 110;
                                                    })() : v2);
                                                    return v386 = f69(v386, (function(){
                                                        var x = v389;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        return String.fromCharCode(x);
                                                    })());
                                                })((function(){
                                                    var string = v385;
                                                    var index = v387;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })());
                                                v387 = (function(){
                                                    var x = v387;
                                                    var y = 1;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x+y;
                                                })();
                                            }return v2;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 142)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return v386;
                        })("",0,f43(v385));
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
    })();
    return l132;
})(); 
var l134 = f3("LITERAL->JS");
var l133 = f3("INTERN");
var f119;
(function(){
    (function(){
        return f119 = (function(v391){
            ((v391)["fname"] = "LITERAL->JS");
            return v391;
        })((function (v392){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (f51(v392) !== v2 ? (function(){
                            return f6(v392);
                        })() : (((typeof(v392) == "string")?v3: v2) !== v2 ? (function(){
                            return f69("\"", f76(v392), "\"");
                        })() : (((function(){
                            var tmp = v392;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?v3: v2) !== v2 ? (function(){
                            return f74(f39(f33(l133), f33(f76((v392).name))), v293);
                        })() : (((function(){
                            var tmp = v392;
                            return (typeof tmp == 'object' && 'car' in tmp);
                        })()?v3: v2) !== v2 ? (function(){
                            return f69("{car: ", f119((function(){
                                var tmp = v392;
                                return tmp === v2? v2: tmp.car;
                            })()), ", cdr: ", f119((function(){
                                var tmp = v392;
                                return tmp === v2? v2: tmp.cdr;
                            })()), "}");
                        })() : v2))));
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
    })();
    return l134;
})(); 
var l135 = f3("*LITERAL-COUNTER*");
var v393;
(function(){
    (function(){
        return v393 = 0;
    })();
    return l135;
})(); 
var l136 = f3("LITERAL");
var f120;
(function(){
    (function(){
        return f120 = (function(v394){
            ((v394)["fname"] = "LITERAL");
            return v394;
        })((function (v395){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v396){
                            v329 = ({car: f69("var ", v396, " = ", f119(v395)), cdr: v329});
                            return v396;
                        })(f69("l", f6(v393 = (function(){
                            var x = v393;
                            var y = 1;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x+y;
                        })())));
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
    })();
    return l136;
})(); 
var l137 = f3("QUOTE");
v339 = ({car: f33(l137, (function (v397,v398){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return f120(v398);
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 145)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l138 = f3("%WHILE");
v339 = ({car: f33(l138, (function (v400,v401){
    if (arguments.length < 2) throw 'too few arguments';
    var v399= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v399 = {car: arguments[i], cdr: 
    v399};
    return (function(){
        try {
            return (function(){
                return f69("(function(){", v179, f72("while(", f74(v401, v400), " !== ", f74(v2), "){", v179, f72(f113(v399, v400)), "}", "return ", f74(v2), ";", v179), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 146)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l140 = f3("LAMBDA");
var l139 = f3("FUNCTION");
v339 = ({car: f33(l139, (function (v402,v403){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return ((f36(v403) !== v2 ? (((function(){
                    var tmp = v403;
                    return tmp === v2? v2: tmp.car;
                })() === l140)?v3: v2) : v2) !== v2 ? (function(){
                    return f74(v403, v402);
                })() : (((function(){
                    var tmp = v403;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?v3: v2) !== v2 ? (function(){
                    return f109(v403, v402);
                })() : v2));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 147)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l142 = f3("PROGN");
var l141 = f3("EVAL-WHEN-COMPILE");
v339 = ({car: f33(l141, (function (v405){
    if (arguments.length < 1) throw 'too few arguments';
    var v404= v2;
    for (var i = arguments.length-1; i>=1; i--)
        v404 = {car: arguments[i], cdr: 
    v404};
    return (function(){
        try {
            return (function(){
                f121(({car: l142, cdr: v404}));
                return "";
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 148)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l143 = f3("PROGN");
v339 = ({car: f33(l143, (function (v407){
    if (arguments.length < 1) throw 'too few arguments';
    var v406= v2;
    for (var i = arguments.length-1; i>=1; i--)
        v406 = {car: arguments[i], cdr: 
    v406};
    return (function(){
        try {
            return (function(){
                return f69("(function(){", v179, f72(f113(f57(v406), v407), "return ", f74((function(){
                    var tmp = f56(v406);
                    return tmp === v2? v2: tmp.car;
                })(), v407), ";", v179), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 149)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l144 = f3("LET");
v339 = ({car: f33(l144, (function (v409,v410){
    if (arguments.length < 2) throw 'too few arguments';
    var v408= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v408 = {car: arguments[i], cdr: 
    v408};
    return (function(){
        try {
            return (function(){
                return (function(v411){
                    return (function(v412,v413){
                        return (function(v414){
                            return f69("(function(", f70(f45((function (v415){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return f106(v415, v414);
                            
                            }), v412), ","), "){", v179, f72(f113(f57(v408), v414), "return ", f74((function(){
                                var tmp = f56(v408);
                                return tmp === v2? v2: tmp.car;
                            })(), v414), ";", v179), "})(", f70(f45((function (v416){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return f74(v416, v409);
                            
                            }), v413), ","), ")");
                        })(f107(v412, v409));
                    })(f45(f29, v411),f45(f30, v411));
                })(f45(f35, v410));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 150)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l145 = f3("*BLOCK-COUNTER*");
var v417;
(function(){
    (function(){
        return v417 = 0;
    })();
    return l145;
})(); 
var l149 = f3("BLOCK");
var l148 = f3("BLOCK");
var l147 = f3("PROGN");
var l146 = f3("BLOCK");
v339 = ({car: f33(l146, (function (v419,v420){
    if (arguments.length < 2) throw 'too few arguments';
    var v418= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v418 = {car: arguments[i], cdr: 
    v418};
    return (function(){
        try {
            return (function(){
                return (function(v421){
                    return (function(v422){
                        return f69("(function(){", v179, f72("try {", v179, f72("return ", f74(f39(f33(l147), v418), f101(f33(v422), v419, l148)), ";", v179), "}", v179, "catch (cf){", v179, "    if (cf.type == 'block' && cf.id == ", v421, ")", v179, "        return cf.value;", v179, "    else", v179, "        throw cf;", v179, "}", v179), "})()");
                    })(f92(v420, l149, v421, v3));
                })(f6(v417 = (function(){
                    var x = v417;
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
            if (cf.type == 'block' && cf.id == 151)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l151 = f3("BLOCK");
var l150 = f3("RETURN-FROM");
v339 = ({car: f33(l150, (function (v423,v424,v425){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    switch(arguments.length){
    case 2:
    v425=v2;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return (function(v426){
                    return (v426 !== v2 ? f69("(function(){", v179, f72("throw ({", "type: 'block', ", "id: ", f95(v426), ", ", "value: ", f74(v425, v423), ", ", "message: 'Return from unknown block ", (v424).name, ".'", "})"), "})()") : (function(){
                        throw f69("Unknown block `", (v424).name, "'.");
                    })());
                })(f102(v424, v423, l151));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 152)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l153 = f3("PROGN");
var l152 = f3("CATCH");
v339 = ({car: f33(l152, (function (v428,v429){
    if (arguments.length < 2) throw 'too few arguments';
    var v427= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v427 = {car: arguments[i], cdr: 
    v427};
    return (function(){
        try {
            return (function(){
                return f69("(function(){", v179, f72("var id = ", f74(v429, v428), ";", v179, "try {", v179, f72("return ", f74(f39(f33(l153), v427)), ";", v179), "}", v179, "catch (cf){", v179, "    if (cf.type == 'catch' && cf.id == id)", v179, "        return cf.value;", v179, "    else", v179, "        throw cf;", v179, "}", v179), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 153)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l154 = f3("THROW");
v339 = ({car: f33(l154, (function (v430,v431,v432){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    switch(arguments.length){
    case 2:
    v432=v2;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return f69("(function(){", v179, f72("throw ({", "type: 'catch', ", "id: ", f74(v431, v430), ", ", "value: ", f74(v432, v430), ", ", "message: 'Throw uncatched.'", "})"), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 154)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l155 = f3("*TAGBODY-COUNTER*");
var v433;
(function(){
    (function(){
        return v433 = 0;
    })();
    return l155;
})(); 
var l156 = f3("*GO-TAG-COUNTER*");
var v434;
(function(){
    (function(){
        return v434 = 0;
    })();
    return l156;
})(); 
var l157 = f3("GO-TAG-P");
var f122;
(function(){
    (function(){
        return f122 = (function(v435){
            ((v435)["fname"] = "GO-TAG-P");
            return v435;
        })((function (v436){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v437){
                            return (v437 !== v2 ? v437 : ((function(){
                                var tmp = v436;
                                return (typeof tmp == 'object' && 'name' in tmp);
                            })()?v3: v2));
                        })(f51(v436));
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
    })();
    return l157;
})(); 
var l160 = f3("DECLARE-TAGBODY-TAGS");
var l159 = f3("GOTAG");
var l158 = f3("GOTAG");
var f123;
(function(){
    (function(){
        return f123 = (function(v438){
            ((v438)["fname"] = "DECLARE-TAGBODY-TAGS");
            return v438;
        })((function (v439,v440,v441){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v442){
                            return f101(v442, v439, l158);
                        })(f45((function (v443){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return (function(v444){
                                return f92(v443, l159, f33(v440, v444), v3);
                            })(f6(v434 = (function(){
                                var x = v434;
                                var y = 1;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })()));
                        
                        }), f61(f122, v441)));
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
    })();
    return l160;
})(); 
var l165 = f3("GOTAG");
var l164 = f3("GOTAG");
var l163 = f3("NIL");
var l162 = f3("PROGN");
var l161 = f3("TAGBODY");
v339 = ({car: f33(l161, (function (v446){
    if (arguments.length < 1) throw 'too few arguments';
    var v445= v2;
    for (var i = arguments.length-1; i>=1; i--)
        v445 = {car: arguments[i], cdr: 
    v445};
    return (function(){
        try {
            return (function(){
                (f65(f122, v445) !== v2 ? v2 : (function(){
                    return (function(){
                        throw ({type: 'block', id: 157, value: f74(f39(f33(l162), v445, f33(l163)), v446), message: 'Return from unknown block TAGBODY.'})
                    })();
                })());
                (f122((function(){
                    var tmp = v445;
                    return tmp === v2? v2: tmp.car;
                })()) !== v2 ? v2 : (function(){
                    return v445 = ({car: f5("START"), cdr: v445});
                })());
                return (function(v447){
                    return (function(v448,v449){
                        (function(v450){
                            return v449 = f30(f95(v450));
                        })(f102(f29(v445), v448, l164));
                        return f69("(function(){", v179, f72("var tagbody_", v447, " = ", v449, ";", v179, "tbloop:", v179, "while (true) {", v179, f72("try {", v179, f72((function(v451){
                            return f69("switch(tagbody_", v447, "){", v179, "case ", v449, ":", v179, (function(){
                                try {
                                    return (function(){
                                        return (function(v452,v453){
                                            (function(){
                                                while(v452 !== v2){
                                                    v453 = (function(){
                                                        var tmp = v452;
                                                        return tmp === v2? v2: tmp.car;
                                                    })();
                                                    (function(){
                                                        v451 = f69(v451, (function(){
                                                            return (f17(f122(v453)) !== v2 ? f72(f74(v453, v448), ";", v179) : (function(v454){
                                                                return f69("case ", f30(f95(v454)), ":", v179);
                                                            })(f102(v453, v448, l165)));
                                                        })());
                                                        return v2;
                                                    })();
                                                    v452 = (function(){
                                                        var tmp = v452;
                                                        return tmp === v2? v2: tmp.cdr;
                                                    })();
                                                }return v2;
                                            })();
                                            return v451;
                                        })((function(){
                                            var tmp = v445;
                                            return tmp === v2? v2: tmp.cdr;
                                        })(),v2);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 158)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })(), "default:", v179, "    break tbloop;", v179, "}", v179);
                        })("")), "}", v179, "catch (jump) {", v179, "    if (jump.type == 'tagbody' && jump.id == ", v447, ")", v179, "        tagbody_", v447, " = jump.label;", v179, "    else", v179, "        throw(jump);", v179, "}", v179), "}", v179, "return ", f74(v2), ";", v179), "})()");
                    })(f123(v446, v447, v445),v2);
                })(f6(v433));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 157)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l167 = f3("GOTAG");
var l166 = f3("GO");
v339 = ({car: f33(l166, (function (v455,v456){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v457,v458){
                    return (v457 !== v2 ? f69("(function(){", v179, f72("throw ({", "type: 'tagbody', ", "id: ", f29(f95(v457)), ", ", "label: ", f30(f95(v457)), ", ", "message: 'Attempt to GO to non-existing tag ", v458, "'", "})", v179), "})()") : (function(){
                        throw f69("Unknown tag `", v458, "'.");
                    })());
                })(f102(v456, v455, l167),(((function(){
                    var tmp = v456;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?v3: v2) !== v2 ? (function(){
                    return (v456).name;
                })() : (f51(v456) !== v2 ? (function(){
                    return f6(v456);
                })() : v2)));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 159)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l168 = f3("UNWIND-PROTECT");
v339 = ({car: f33(l168, (function (v460,v461){
    if (arguments.length < 2) throw 'too few arguments';
    var v459= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v459 = {car: arguments[i], cdr: 
    v459};
    return (function(){
        try {
            return (function(){
                return f69("(function(){", v179, f72("var ret = ", f74(v2), ";", v179, "try {", v179, f72("ret = ", f74(v461, v460), ";", v179), "} finally {", v179, f72(f113(v459, v460)), "}", v179, "return ret;", v179), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 160)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l177 = f3("BACKQUOTE-EXPAND-1");
var l176 = f3("LIST");
var l175 = f3("UNQUOTE-SPLICING");
var l174 = f3("LIST");
var l173 = f3("UNQUOTE");
var l172 = f3("APPEND");
var l171 = f3("BACKQUOTE");
var l170 = f3("UNQUOTE");
var l169 = f3("QUOTE");
var f124;
(function(){
    (function(){
        return f124 = (function(v462){
            ((v462)["fname"] = "BACKQUOTE-EXPAND-1");
            return v462;
        })((function (v463){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var tmp = v463;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?v3: v2) !== v2 ? (function(){
                            return f33(l169, v463);
                        })() : (f34(v463) !== v2 ? (function(){
                            return v463;
                        })() : ((((function(){
                            var tmp = v463;
                            return tmp === v2? v2: tmp.car;
                        })() === l170)?v3: v2) !== v2 ? (function(){
                            return (function(){
                                var tmp = v463;
                                return tmp === v2? v2: tmp.car;
                            })();
                        })() : ((((function(){
                            var tmp = v463;
                            return tmp === v2? v2: tmp.car;
                        })() === l171)?v3: v2) !== v2 ? (function(){
                            return f124(f124(f23(v463)));
                        })() : (function(){
                            return ({car: l172, cdr: f45((function (v464){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return ((f36(v464) !== v2 ? (((function(){
                                    var tmp = v464;
                                    return tmp === v2? v2: tmp.car;
                                })() === l173)?v3: v2) : v2) !== v2 ? (function(){
                                    return f33(l174, f23(v464));
                                })() : ((f36(v464) !== v2 ? (((function(){
                                    var tmp = v464;
                                    return tmp === v2? v2: tmp.car;
                                })() === l175)?v3: v2) : v2) !== v2 ? (function(){
                                    return f23(v464);
                                })() : (function(){
                                    return f33(l176, f124(v464));
                                })()));
                            
                            }), v463)});
                        })()))));
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
    })();
    return l177;
})(); 
var l179 = f3("BACKQUOTE-EXPAND");
var l178 = f3("BACKQUOTE");
var f125;
(function(){
    (function(){
        return f125 = (function(v465){
            ((v465)["fname"] = "BACKQUOTE-EXPAND");
            return v465;
        })((function (v466){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return ((f36(v466) !== v2 ? (((function(){
                            var tmp = v466;
                            return tmp === v2? v2: tmp.car;
                        })() === l178)?v3: v2) : v2) !== v2 ? f124(f23(v466)) : v466);
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
    })();
    return l179;
})(); 
var l180 = f3("BACKQUOTE");
v339 = ({car: f33(l180, (function (v467,v468){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return f74(f124(v468), v467);
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 163)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l181 = f3("NUM-OP-NUM");
var f126;
(function(){
    (function(){
        return f126 = (function(v469){
            ((v469)["fname"] = "NUM-OP-NUM");
            return v469;
        })((function (v470,v471,v472){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f69("(function(){", v179, f72(f69("var ", "x", " = ", v470, ";", v179), f69("var ", "y", " = ", v472, ";", v179), f69("if (typeof ", "x", " != '", "number", "')", v179, f72("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v179)), f69("if (typeof ", "y", " != '", "number", "')", v179, f72("throw 'The value ' + ", "y", " + ' is not a type ", "number", ".';", v179)), f69("return ", (function(){
                            return f69("x", v471, "y");
                        })(), ";", v179)), "})()");
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
    })();
    return l181;
})(); 
var l182 = f3("+");
v339 = ({car: f33(l182, (function (v473,v474,v475){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v476,v477){
                    return f126(v476, "+", v477);
                })(f74(v474, v473),f74(v475, v473));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 165)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l183 = f3("-");
v339 = ({car: f33(l183, (function (v478,v479,v480){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v481,v482){
                    return f126(v481, "-", v482);
                })(f74(v479, v478),f74(v480, v478));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 166)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l184 = f3("*");
v339 = ({car: f33(l184, (function (v483,v484,v485){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v486,v487){
                    return f126(v486, "*", v487);
                })(f74(v484, v483),f74(v485, v483));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 167)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l185 = f3("/");
v339 = ({car: f33(l185, (function (v488,v489,v490){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v491,v492){
                    return f126(v491, "/", v492);
                })(f74(v489, v488),f74(v490, v488));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 168)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l186 = f3("MOD");
v339 = ({car: f33(l186, (function (v493,v494,v495){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v496,v497){
                    return f126(v496, "%", v497);
                })(f74(v494, v493),f74(v495, v493));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 169)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l187 = f3("<");
v339 = ({car: f33(l187, (function (v498,v499,v500){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v501,v502){
                    return f73(f126(v501, "<", v502));
                })(f74(v499, v498),f74(v500, v498));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 170)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l188 = f3(">");
v339 = ({car: f33(l188, (function (v503,v504,v505){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v506,v507){
                    return f73(f126(v506, ">", v507));
                })(f74(v504, v503),f74(v505, v503));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 171)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l189 = f3("=");
v339 = ({car: f33(l189, (function (v508,v509,v510){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v511,v512){
                    return f73(f126(v511, "==", v512));
                })(f74(v509, v508),f74(v510, v508));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 172)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l190 = f3("<=");
v339 = ({car: f33(l190, (function (v513,v514,v515){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v516,v517){
                    return f73(f126(v516, "<=", v517));
                })(f74(v514, v513),f74(v515, v513));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 173)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l191 = f3(">=");
v339 = ({car: f33(l191, (function (v518,v519,v520){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v521,v522){
                    return f73(f126(v521, ">=", v522));
                })(f74(v519, v518),f74(v520, v518));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 174)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l192 = f3("NUMBERP");
v339 = ({car: f33(l192, (function (v523,v524){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v525){
                    return f73(f69("(typeof (", v525, ") == \"number\")"));
                })(f74(v524, v523));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 175)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l193 = f3("FLOOR");
v339 = ({car: f33(l193, (function (v526,v527){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v528){
                    return f69("(function(){", v179, f72(f69("var ", "x", " = ", v528, ";", v179), f69("if (typeof ", "x", " != '", "number", "')", v179, f72("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v179)), f69("return ", (function(){
                        return "Math.floor(x)";
                    })(), ";", v179)), "})()");
                })(f74(v527, v526));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 176)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l194 = f3("CONS");
v339 = ({car: f33(l194, (function (v529,v530,v531){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v532,v533){
                    return f69("({car: ", v532, ", cdr: ", v533, "})");
                })(f74(v530, v529),f74(v531, v529));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 177)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l195 = f3("CONSP");
v339 = ({car: f33(l195, (function (v534,v535){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v536){
                    return f73(f69("(function(){", v179, f72("var tmp = ", v536, ";", v179, "return (typeof tmp == 'object' && 'car' in tmp);", v179), "})()"));
                })(f74(v535, v534));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 178)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l196 = f3("CAR");
v339 = ({car: f33(l196, (function (v537,v538){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v539){
                    return f69("(function(){", v179, f72("var tmp = ", v539, ";", v179, "return tmp === ", f74(v2), "? ", f74(v2), ": tmp.car;", v179), "})()");
                })(f74(v538, v537));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 179)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l197 = f3("CDR");
v339 = ({car: f33(l197, (function (v540,v541){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v542){
                    return f69("(function(){", v179, f72("var tmp = ", v542, ";", v179, "return tmp === ", f74(v2), "? ", f74(v2), ": tmp.cdr;", v179), "})()");
                })(f74(v541, v540));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 180)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l198 = f3("SETCAR");
v339 = ({car: f33(l198, (function (v543,v544,v545){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v546,v547){
                    return f69("(function(){", v179, f72(f69("var ", "x", " = ", v546, ";", v179), f69("if (typeof ", "x", " != '", "object", "')", v179, f72("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", v179)), f69("return ", (function(){
                        return f69("(x.car = ", v547, ")");
                    })(), ";", v179)), "})()");
                })(f74(v544, v543),f74(v545, v543));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 181)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l199 = f3("SETCDR");
v339 = ({car: f33(l199, (function (v548,v549,v550){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v551,v552){
                    return f69("(function(){", v179, f72(f69("var ", "x", " = ", v551, ";", v179), f69("if (typeof ", "x", " != '", "object", "')", v179, f72("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", v179)), f69("return ", (function(){
                        return f69("(x.cdr = ", v552, ")");
                    })(), ";", v179)), "})()");
                })(f74(v549, v548),f74(v550, v548));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 182)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l200 = f3("SYMBOLP");
v339 = ({car: f33(l200, (function (v553,v554){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v555){
                    return f73(f69("(function(){", v179, f72("var tmp = ", v555, ";", v179, "return (typeof tmp == 'object' && 'name' in tmp);", v179), "})()"));
                })(f74(v554, v553));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 183)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l201 = f3("MAKE-SYMBOL");
v339 = ({car: f33(l201, (function (v556,v557){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v558){
                    return f69("(function(){", v179, f72(f69("var ", "name", " = ", v558, ";", v179), f69("if (typeof ", "name", " != '", "string", "')", v179, f72("throw 'The value ' + ", "name", " + ' is not a type ", "string", ".';", v179)), f69("return ", (function(){
                        return "({name: name})";
                    })(), ";", v179)), "})()");
                })(f74(v557, v556));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 184)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l202 = f3("SYMBOL-NAME");
v339 = ({car: f33(l202, (function (v559,v560){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v561){
                    return f69("(", v561, ").name");
                })(f74(v560, v559));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 185)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l203 = f3("EQ");
v339 = ({car: f33(l203, (function (v562,v563,v564){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v565,v566){
                    return f73(f69("(", v565, " === ", v566, ")"));
                })(f74(v563, v562),f74(v564, v562));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 186)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l204 = f3("EQUAL");
v339 = ({car: f33(l204, (function (v567,v568,v569){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v570,v571){
                    return f73(f69("(", v570, " == ", v571, ")"));
                })(f74(v568, v567),f74(v569, v567));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 187)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l205 = f3("STRING");
v339 = ({car: f33(l205, (function (v572,v573){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v574){
                    return f69("(function(){", v179, f72(f69("var ", "x", " = ", v574, ";", v179), f69("if (typeof ", "x", " != '", "number", "')", v179, f72("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v179)), f69("return ", (function(){
                        return "String.fromCharCode(x)";
                    })(), ";", v179)), "})()");
                })(f74(v573, v572));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 188)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l206 = f3("STRINGP");
v339 = ({car: f33(l206, (function (v575,v576){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v577){
                    return f73(f69("(typeof(", v577, ") == \"string\")"));
                })(f74(v576, v575));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 189)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l207 = f3("STRING-UPCASE");
v339 = ({car: f33(l207, (function (v578,v579){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v580){
                    return f69("(function(){", v179, f72(f69("var ", "x", " = ", v580, ";", v179), f69("if (typeof ", "x", " != '", "string", "')", v179, f72("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v179)), f69("return ", (function(){
                        return "x.toUpperCase()";
                    })(), ";", v179)), "})()");
                })(f74(v579, v578));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 190)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l208 = f3("STRING-LENGTH");
v339 = ({car: f33(l208, (function (v581,v582){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v583){
                    return f69("(function(){", v179, f72(f69("var ", "x", " = ", v583, ";", v179), f69("if (typeof ", "x", " != '", "string", "')", v179, f72("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v179)), f69("return ", (function(){
                        return "x.length";
                    })(), ";", v179)), "})()");
                })(f74(v582, v581));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 191)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l209 = f3("SLICE");
v339 = ({car: f33(l209, (function (v584,v585,v586,v587){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    switch(arguments.length){
    case 3:
    v587=v2;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return f69("(function(){", v179, f72("var str = ", f74(v585, v584), ";", v179, "var a = ", f74(v586, v584), ";", v179, "var b;", v179, (v587 !== v2 ? f69("b = ", f74(v587, v584), ";", v179) : ""), "return str.slice(a,b);", v179), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 192)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l210 = f3("CHAR");
v339 = ({car: f33(l210, (function (v588,v589,v590){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v591,v592){
                    return f69("(function(){", v179, f72(f69("var ", "string", " = ", v591, ";", v179), f69("var ", "index", " = ", v592, ";", v179), f69("if (typeof ", "string", " != '", "string", "')", v179, f72("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", v179)), f69("if (typeof ", "index", " != '", "number", "')", v179, f72("throw 'The value ' + ", "index", " + ' is not a type ", "number", ".';", v179)), f69("return ", (function(){
                        return "string.charCodeAt(index)";
                    })(), ";", v179)), "})()");
                })(f74(v589, v588),f74(v590, v588));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 193)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l211 = f3("CONCAT-TWO");
v339 = ({car: f33(l211, (function (v593,v594,v595){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v596,v597){
                    return f69("(function(){", v179, f72(f69("var ", "string1", " = ", v596, ";", v179), f69("var ", "string2", " = ", v597, ";", v179), f69("if (typeof ", "string1", " != '", "string", "')", v179, f72("throw 'The value ' + ", "string1", " + ' is not a type ", "string", ".';", v179)), f69("if (typeof ", "string2", " != '", "string", "')", v179, f72("throw 'The value ' + ", "string2", " + ' is not a type ", "string", ".';", v179)), f69("return ", (function(){
                        return "string1.concat(string2)";
                    })(), ";", v179)), "})()");
                })(f74(v594, v593),f74(v595, v593));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 194)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l212 = f3("FUNCALL");
v339 = ({car: f33(l212, (function (v599,v600){
    if (arguments.length < 2) throw 'too few arguments';
    var v598= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v598 = {car: arguments[i], cdr: 
    v598};
    return (function(){
        try {
            return (function(){
                return f69("(", f74(v600, v599), ")(", f70(f45((function (v601){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f74(v601, v599);
                
                }), v598), ", "), ")");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 195)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l213 = f3("APPLY");
v339 = ({car: f33(l213, (function (v603,v604){
    if (arguments.length < 2) throw 'too few arguments';
    var v602= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v602 = {car: arguments[i], cdr: 
    v602};
    return (function(){
        try {
            return (function(){
                return (f1(v602) !== v2 ? f69("(", f74(v604, v603), ")()") : (function(v605,v606){
                    return f69("(function(){", v179, f72("var f = ", f74(v604, v603), ";", v179, "var args = [", f70(f45((function (v607){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return f74(v607, v603);
                    
                    }), v605), ", "), "];", v179, "var tail = (", f74(v606, v603), ");", v179, "while (tail != ", f74(v2), "){", v179, "    args.push(tail.car);", v179, "    tail = tail.cdr;", v179, "}", v179, "return f.apply(this, args);", v179), "})()");
                })(f57(v602),(function(){
                    var tmp = f56(v602);
                    return tmp === v2? v2: tmp.car;
                })()));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 196)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l214 = f3("JS-EVAL");
v339 = ({car: f33(l214, (function (v608,v609){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v610){
                    return f69("(function(){", v179, f72(f69("var ", "string", " = ", v610, ";", v179), f69("if (typeof ", "string", " != '", "string", "')", v179, f72("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", v179)), f69("return ", (function(){
                        return "eval.apply(window, [string])";
                    })(), ";", v179)), "})()");
                })(f74(v609, v608));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 197)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l215 = f3("ERROR");
v339 = ({car: f33(l215, (function (v611,v612){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v613){
                    return f69("(function(){", v179, f72("throw ", v613, ";", v179), "})()");
                })(f74(v612, v611));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 198)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l216 = f3("NEW");
v339 = ({car: f33(l216, (function (v614){
    if (arguments.length < 1) throw 'too few arguments';
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
            if (cf.type == 'block' && cf.id == 199)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l217 = f3("GET");
v339 = ({car: f33(l217, (function (v615,v616,v617){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v618,v619){
                    return f69("(function(){", v179, f72("var tmp = ", "(", v618, ")[", v619, "];", v179, "return tmp == undefined? ", f74(v2), ": tmp ;", v179), "})()");
                })(f74(v616, v615),f74(v617, v615));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 200)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l218 = f3("SET");
v339 = ({car: f33(l218, (function (v620,v621,v622,v623){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v624,v625,v626){
                    return f69("((", v624, ")[", v625, "] = ", v626, ")");
                })(f74(v621, v620),f74(v622, v620),f74(v623, v620));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 201)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l219 = f3("IN");
v339 = ({car: f33(l219, (function (v627,v628,v629){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v630,v631){
                    return f73(f69("((", v630, ") in (", v631, "))"));
                })(f74(v628, v627),f74(v629, v627));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 202)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l220 = f3("FUNCTIONP");
v339 = ({car: f33(l220, (function (v632,v633){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v634){
                    return f73(f69("(typeof ", v634, " == 'function')"));
                })(f74(v633, v632));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 203)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l221 = f3("WRITE-STRING");
v339 = ({car: f33(l221, (function (v635,v636){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v637){
                    return f69("(function(){", v179, f72(f69("var ", "x", " = ", v637, ";", v179), f69("if (typeof ", "x", " != '", "string", "')", v179, f72("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v179)), f69("return ", (function(){
                        return "lisp.write(x)";
                    })(), ";", v179)), "})()");
                })(f74(v636, v635));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 204)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: v339}); 
var l223 = f3("MACROP");
var l222 = f3("MACRO");
var f127;
(function(){
    (function(){
        return f127 = (function(v638){
            ((v638)["fname"] = "MACROP");
            return v638;
        })((function (v639){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var tmp = v639;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?v3: v2) !== v2 ? ((f94(f108(v639, v293)) === l222)?v3: v2) : v2);
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 205)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        
        }));
    })();
    return l223;
})(); 
var l225 = f3("LS-MACROEXPAND-1");
var l224 = f3("MACRO");
var f128;
(function(){
    (function(){
        return f128 = (function(v640){
            ((v640)["fname"] = "LS-MACROEXPAND-1");
            return v640;
        })((function (v641,v642){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (f127((function(){
                            var tmp = v641;
                            return tmp === v2? v2: tmp.car;
                        })()) !== v2 ? (function(v643){
                            return (((f94(v643) === l224)?v3: v2) !== v2 ? (function(){
                                var f = f121(f95(v643));
                                var args = [];
                                var tail = ((function(){
                                    var tmp = v641;
                                    return tmp === v2? v2: tmp.cdr;
                                })());
                                while (tail != v2){
                                    args.push(tail.car);
                                    tail = tail.cdr;
                                }
                                return f.apply(this, args);
                            })() : v641);
                        })(f108((function(){
                            var tmp = v641;
                            return tmp === v2? v2: tmp.car;
                        })(), v293)) : v641);
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 206)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        
        }));
    })();
    return l225;
})(); 
var l227 = f3("COMPILE-FUNCALL");
var l226 = f3("LAMBDA");
var f129;
(function(){
    (function(){
        return f129 = (function(v644){
            ((v644)["fname"] = "COMPILE-FUNCALL");
            return v644;
        })((function (v645,v646,v647){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var tmp = v645;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?v3: v2) !== v2 ? (function(){
                            return f69(f109(v645, v647), "(", f70(f45((function (v648){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return f74(v648, v647);
                            
                            }), v646), ", "), ")");
                        })() : ((f36(v645) !== v2 ? (((function(){
                            var tmp = v645;
                            return tmp === v2? v2: tmp.car;
                        })() === l226)?v3: v2) : v2) !== v2 ? (function(){
                            return f69("(", f74(v645, v647), ")(", f70(f45((function (v649){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return f74(v649, v647);
                            
                            }), v646), ", "), ")");
                        })() : (function(){
                            return (function(){
                                throw f69("Invalid function designator ", (v645).name);
                            })();
                        })()));
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 207)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        
        }));
    })();
    return l227;
})(); 
var l228 = f3("LS-COMPILE");
var f74;
(function(){
    (function(){
        return f74 = (function(v650){
            ((v650)["fname"] = "LS-COMPILE");
            return v650;
        })((function (v651,v652){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            switch(arguments.length){
            case 1:
            v652=f98();
            default: break;
            }
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var tmp = v651;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?v3: v2) !== v2 ? (function(){
                            return f106(v651, v652);
                        })() : (f51(v651) !== v2 ? (function(){
                            return f6(v651);
                        })() : (((typeof(v651) == "string")?v3: v2) !== v2 ? (function(){
                            return f69("\"", f76(v651), "\"");
                        })() : (f36(v651) !== v2 ? (function(){
                            return (f67((function(){
                                var tmp = v651;
                                return tmp === v2? v2: tmp.car;
                            })(), v339) !== v2 ? (function(v653){
                                return (function(){
                                    var f = v653;
                                    var args = [v652];
                                    var tail = ((function(){
                                        var tmp = v651;
                                        return tmp === v2? v2: tmp.cdr;
                                    })());
                                    while (tail != v2){
                                        args.push(tail.car);
                                        tail = tail.cdr;
                                    }
                                    return f.apply(this, args);
                                })();
                            })(f30(f67((function(){
                                var tmp = v651;
                                return tmp === v2? v2: tmp.car;
                            })(), v339))) : (f127((function(){
                                var tmp = v651;
                                return tmp === v2? v2: tmp.car;
                            })()) !== v2 ? f74(f128(v651, v652), v652) : f129((function(){
                                var tmp = v651;
                                return tmp === v2? v2: tmp.car;
                            })(), (function(){
                                var tmp = v651;
                                return tmp === v2? v2: tmp.cdr;
                            })(), v652)));
                        })() : v2))));
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 208)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        
        }));
    })();
    return l228;
})(); 
var l229 = f3("LS-COMPILE-TOPLEVEL");
var f130;
(function(){
    (function(){
        return f130 = (function(v654){
            ((v654)["fname"] = "LS-COMPILE-TOPLEVEL");
            return v654;
        })((function (v655){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        v329 = v2;
                        return (function(v656){
                            return (function(v657){
                                v329 = v2;
                                return v657;
                            })(f69(f70(f45((function (v658){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return f69(v658, ";", v179);
                            
                            }), v329)), v656));
                        })(f74(v655));
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 209)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        
        }));
    })();
    return l229;
})(); 
var l240 = f3("LS-COMPILE-TOPLEVEL");
var l239 = f3("EVAL");
var l238 = f3("PRIN1-TO-STRING");
var l237 = f3("LS-READ-FROM-STRING");
var l236 = 211;
var l235 = 157;
var l234 = 230;
var l233 = 130;
var l232 = 664;
var l231 = {car: {car: {car: f3("*GO-TAG-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v434", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*TAGBODY-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v433", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*BLOCK-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v417", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*LITERAL-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v393", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*LAMBDA-LIST-KEYWORDS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v350", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*COMPILATIONS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v339", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*TOPLEVEL-COMPILATIONS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v329", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*FUNCTION-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v317", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*VARIABLE-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v296", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*ENVIRONMENT*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v293", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*COMPILATION-UNIT-CHECKS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v257", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*EOF*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v250", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*NEWLINE*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v179", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*GENSYM-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v12", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("T"), cdr: {car: f3("VARIABLE"), cdr: {car: "v3", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NIL"), cdr: {car: f3("VARIABLE"), cdr: {car: "v2", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*PACKAGE*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v1", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}}}}}}}}}}}}}}}, cdr: {car: {car: {car: f3("WITH-COMPILATION-UNIT"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROG1"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("SETQ"), cdr: {car: f3("*COMPILATION-UNIT-CHECKS*"), cdr: {car: f3("NIL"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("CLEAR-UNDECLARED-GLOBAL-BINDINGS"), cdr: f3("NIL")}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DOLIST"), cdr: {car: {car: f3("CHECK"), cdr: {car: f3("*COMPILATION-UNIT-CHECKS*"), cdr: f3("NIL")}}, cdr: {car: {car: f3("FUNCALL"), cdr: {car: f3("CHECK"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-COMPILE-TOPLEVEL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f130", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COMPILE-FUNCALL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f129", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-MACROEXPAND-1"), cdr: {car: f3("FUNCTION"), cdr: {car: "f128", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MACROP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f127", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NUM-OP-NUM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f126", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("TYPE-CHECK"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("DECLS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("JS!SELFCALL"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("DECL"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CONCAT"), cdr: {car: "var ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: " = ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("THIRD"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: ";", cdr: {car: f3("*NEWLINE*"), cdr: f3("NIL")}}}}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("DECLS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("DECL"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CONCAT"), cdr: {car: "if (typeof ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: " != '", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: "')", cdr: {car: f3("*NEWLINE*"), cdr: {car: {car: f3("INDENT"), cdr: {car: "throw 'The value ' + ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: " + ' is not a type ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: ".';", cdr: {car: f3("*NEWLINE*"), cdr: f3("NIL")}}}}}}}, cdr: f3("NIL")}}}}}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("DECLS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("CONCAT"), cdr: {car: "return ", cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: ";", cdr: {car: f3("*NEWLINE*"), cdr: f3("NIL")}}}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFINE-BUILTIN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("DEFINE-COMPILATION"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ARG"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARG"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LS-COMPILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARG"), cdr: f3("NIL")}}, cdr: {car: f3("ENV"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("ARGS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE-EXPAND-1"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE-EXPAND"), cdr: {car: f3("FUNCTION"), cdr: {car: "f125", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE-EXPAND-1"), cdr: {car: f3("FUNCTION"), cdr: {car: "f124", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DECLARE-TAGBODY-TAGS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f123", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("GO-TAG-P"), cdr: {car: f3("FUNCTION"), cdr: {car: "f122", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFINE-TRANSFORMATION"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("DEFINE-COMPILATION"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LS-COMPILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: {car: f3("ENV"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EVAL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f121", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LITERAL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f120", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LITERAL->JS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f119", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-REST-ARGUMENT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f118", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f117", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f116", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-REQUIRED-ARGUMENTS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f115", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LIST-UNTIL-KEYWORD"), cdr: {car: f3("FUNCTION"), cdr: {car: "f114", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFINE-COMPILATION"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PUSH"), cdr: {car: {car: f3("LIST"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ENV"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("BLOCK"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("*COMPILATIONS*"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-COMPILE-BLOCK"), cdr: {car: f3("FUNCTION"), cdr: {car: "f113", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%COMPILE-DEFMACRO"), cdr: {car: f3("FUNCTION"), cdr: {car: "f112", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%COMPILE-DEFUN"), cdr: {car: f3("FUNCTION"), cdr: {car: "f111", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%COMPILE-DEFVAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f110", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-FUNCTION-TRANSLATION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f109", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-FUNCTION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f108", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EXTEND-LOCAL-ENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f107", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-VARIABLE-TRANSLATION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f106", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-VARIABLE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f105", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("GVARNAME"), cdr: {car: f3("FUNCTION"), cdr: {car: "f104", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CLEAR-UNDECLARED-GLOBAL-BINDINGS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f103", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-IN-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f102", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EXTEND-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f101", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PUSH-TO-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f100", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COPY-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f99", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAKE-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f98", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MARK-BINDING-AS-DECLARED"), cdr: {car: f3("FUNCTION"), cdr: {car: "f97", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-DECLARED"), cdr: {car: f3("FUNCTION"), cdr: {car: "f96", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-TRANSLATION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f95", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-TYPE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f94", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-NAME"), cdr: {car: f3("FUNCTION"), cdr: {car: "f93", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAKE-BINDING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f92", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-READ-FROM-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f91", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("READ-SHARP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f90", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("READ-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f89", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-READ"), cdr: {car: f3("FUNCTION"), cdr: {car: "f88", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%READ-LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f87", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SKIP-WHITESPACES-AND-COMMENTS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f86", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("READ-UNTIL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f85", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("TERMINALP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f84", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SKIP-WHITESPACES"), cdr: {car: f3("FUNCTION"), cdr: {car: "f83", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WHITESPACEP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f82", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%READ-CHAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f81", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%PEEK-CHAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f80", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAKE-STRING-STREAM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f79", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PRINT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f78", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WRITE-LINE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f77", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ESCAPE-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f76", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PRIN1-TO-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f75", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("JS!SELFCALL"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CONCAT"), cdr: {car: "(function(){", cdr: {car: f3("*NEWLINE*"), cdr: {car: {car: f3("INDENT"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: "})()", cdr: f3("NIL")}}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-COMPILE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f74", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("JS!BOOL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f73", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INDENT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f72", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("JOIN-TRAILING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f71", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("JOIN"), cdr: {car: f3("FUNCTION"), cdr: {car: "f70", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONCATF"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("VARIABLE"), cdr: {car: f3("&REST"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VARIABLE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CONCAT"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VARIABLE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONCAT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f69", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("STRING="), cdr: {car: f3("FUNCTION"), cdr: {car: "f68", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ASSOC"), cdr: {car: f3("FUNCTION"), cdr: {car: "f67", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EVERY"), cdr: {car: f3("FUNCTION"), cdr: {car: "f66", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SOME"), cdr: {car: f3("FUNCTION"), cdr: {car: "f65", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PARSE-INTEGER"), cdr: {car: f3("FUNCTION"), cdr: {car: "f64", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SUBSEQ"), cdr: {car: f3("FUNCTION"), cdr: {car: "f63", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DIGIT-CHAR-P"), cdr: {car: f3("FUNCTION"), cdr: {car: "f62", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REMOVE-IF-NOT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f61", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REMOVE-IF"), cdr: {car: f3("FUNCTION"), cdr: {car: "f60", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REMOVE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f59", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MEMBER"), cdr: {car: f3("FUNCTION"), cdr: {car: "f58", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BUTLAST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f57", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f56", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f55", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NTHCDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f54", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MINUSP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f53", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PLUSP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f52", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTEGERP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f51", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CHAR="), cdr: {car: f3("FUNCTION"), cdr: {car: "f50", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CHAR-CODE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f49", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CODE-CHAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f48", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COPY-LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f47", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("IDENTITY"), cdr: {car: f3("FUNCTION"), cdr: {car: "f46", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAPCAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f45", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONCAT-TWO"), cdr: {car: f3("FUNCTION"), cdr: {car: "f44", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LENGTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f43", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LIST-LENGTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f42", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REVERSE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f41", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REVAPPEND"), cdr: {car: f3("FUNCTION"), cdr: {car: "f40", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("APPEND"), cdr: {car: f3("FUNCTION"), cdr: {car: "f39", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("APPEND-TWO"), cdr: {car: f3("FUNCTION"), cdr: {car: "f38", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFVAR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("&OPTIONAL"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("%DEFVAR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFUN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("%DEFUN"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("!REDUCE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f37", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LISTP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f36", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ENSURE-LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f35", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PROG1"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("VALUE"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("OR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("COND"), cdr: {car: {car: {car: f3("NULL"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("NULL"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("T"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("G"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G"), cdr: f3("NIL")}}, cdr: {car: {car: f3("OR"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("AND"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("COND"), cdr: {car: {car: {car: f3("NULL"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: f3("T"), cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("NULL"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("T"), cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("AND"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ECASE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: {car: f3("&REST"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CASE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("APPEND"), cdr: {car: f3("CLAUSULES"), cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: {car: f3("T"), cdr: {car: {car: f3("ERROR"), cdr: {car: "ECASE expression failed.", cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CASE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: {car: f3("&REST"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("!FORM"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("!FORM"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("COND"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CLAUSULE"), cdr: f3("NIL")}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("EQ"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("CLAUSULE"), cdr: f3("NIL")}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}, cdr: {car: f3("CLAUSULE"), cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: {car: f3("EQL"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("!FORM"), cdr: f3("NIL")}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("CLAUSULE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("CLAUSULE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COND"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("NULL"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("EQ"), cdr: {car: {car: f3("CAAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("COND"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DOTIMES"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ITER"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("G!TO"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: {car: {car: f3("VAR"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("TO"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("RESULT"), cdr: {car: {car: f3("THIRD"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("BLOCK"), cdr: {car: f3("NIL"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: 0, cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!TO"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("TO"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("%WHILE"), cdr: {car: {car: f3("<"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!TO"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("TAGBODY"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("INCF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("RESULT"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DOLIST"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ITER"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("VAR"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("G!LIST"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("BLOCK"), cdr: {car: f3("NIL"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("%WHILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CAR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("TAGBODY"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CDR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("THIRD"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("UNLESS"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CONDITION"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("CONDITION"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WHEN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CONDITION"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("CONDITION"), cdr: f3("NIL")}}, cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PUSH"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: {car: f3("PLACE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("PLACE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CONS"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("PLACE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DECF"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: {car: f3("&OPTIONAL"), cdr: {car: {car: f3("DELTA"), cdr: {car: 1, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("-"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("DELTA"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INCF"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: {car: f3("&OPTIONAL"), cdr: {car: {car: f3("DELTA"), cdr: {car: 1, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("+"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("DELTA"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ATOM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f34", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f33", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("FOURTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f32", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("THIRD"), cdr: {car: f3("FUNCTION"), cdr: {car: "f31", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SECOND"), cdr: {car: f3("FUNCTION"), cdr: {car: "f30", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("FIRST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f29", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CADDDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f28", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDDDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f27", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CADDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f26", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f25", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f24", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CADR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f23", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CAAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f22", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f21", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f20", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONSP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f19", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f18", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NOT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f17", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EQL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f16", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("TRUNCATE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f15", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ZEROP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f14", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("1-"), cdr: {car: f3("FUNCTION"), cdr: {car: "f13", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("1+"), cdr: {car: f3("FUNCTION"), cdr: {car: "f12", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("/"), cdr: {car: f3("FUNCTION"), cdr: {car: "f11", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*"), cdr: {car: f3("FUNCTION"), cdr: {car: "f10", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("-"), cdr: {car: f3("FUNCTION"), cdr: {car: "f9", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("+"), cdr: {car: f3("FUNCTION"), cdr: {car: "f8", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("="), cdr: {car: f3("FUNCTION"), cdr: {car: "f7", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTEGER-TO-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f6", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("GENSYM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f5", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("FIND-SYMBOL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f4", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTERN"), cdr: {car: f3("FUNCTION"), cdr: {car: "f3", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTERNP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f2", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WHILE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CONDITION"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("BLOCK"), cdr: {car: f3("NIL"), cdr: {car: {car: f3("%WHILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("CONDITION"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("RETURN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&OPTIONAL"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("RETURN-FROM"), cdr: {car: f3("NIL"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NULL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f1", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFUN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("%DEFUN"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%DEFUN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("EVAL-WHEN-COMPILE"), cdr: {car: {car: f3("%COMPILE-DEFUN"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("FSETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("NAMED-LAMBDA"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SYMBOL-NAME"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BLOCK"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NAMED-LAMBDA"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("X"), cdr: {car: {car: f3("GENSYM"), cdr: {car: "FN", cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("SET"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: "fname", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFVAR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("&OPTIONAL"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("%DEFVAR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%DEFVAR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("EVAL-WHEN-COMPILE"), cdr: {car: {car: f3("%COMPILE-DEFVAR"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFMACRO"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("EVAL-WHEN-COMPILE"), cdr: {car: {car: f3("%COMPILE-DEFMACRO"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: f3("NIL")}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("EQ"), cdr: {car: f3("X"), cdr: {car: {car: f3("QUOTE"), cdr: {car: f3("&BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: f3("&REST"), cdr: f3("NIL")}}, cdr: {car: f3("X"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("ARGS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: f3("NIL"), cdr: {car: f3("NIL"), cdr: f3("NIL")}}}};
var l230 = f3("EVAL");
var f121;
(function(){
    v293 = l231;
    v296 = l232;
    v317 = l233;
    v393 = l234;
    v12 = l235;
    return v417 = l236;
})();
(function(){
    (function(){
        (function(){
            return f121 = (function(v659){
                ((v659)["fname"] = "EVAL");
                return v659;
            })((function (v660){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (function(v661){
                                return (function(){
                                    var string = v661;
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    return eval.apply(window, [string]);
                                })();
                            })((function(v662){
                                (function(){
                                    try {
                                        return (function(){
                                            return (function(v663,v664){
                                                (function(){
                                                    while(v663 !== v2){
                                                        v664 = (function(){
                                                            var tmp = v663;
                                                            return tmp === v2? v2: tmp.car;
                                                        })();
                                                        (function(){
                                                            (v664)();
                                                            return v2;
                                                        })();
                                                        v663 = (function(){
                                                            var tmp = v663;
                                                            return tmp === v2? v2: tmp.cdr;
                                                        })();
                                                    }return v2;
                                                })();
                                                return v2;
                                            })(v257,v2);
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 211)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })();
                                return v662;
                            })((function(){
                                v257 = v2;
                                f103();
                                return f130(v660);
                            })()));
                        })();
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == 210)
                            return cf.value;
                        else
                            throw cf;
                    }
                })();
            
            }));
        })();
        return l230;
    })();
    return (function(){
        var string = f69("var lisp = {};", "lisp.read = ", f109(l237, v2), ";", v179, "lisp.print = ", f109(l238, v2), ";", v179, "lisp.eval = ", f109(l239, v2), ";", v179, "lisp.compile = ", f109(l240, v2), ";", v179, "lisp.evalString = function(str){", v179, "   return lisp.eval(lisp.read(str));", v179, "}", v179, "lisp.compileString = function(str){", v179, "   return lisp.compile(lisp.read(str));", v179, "}", v179);
        if (typeof string != 'string')
            throw 'The value ' + string + ' is not a type string.';
        return eval.apply(window, [string]);
    })();
})(); 
