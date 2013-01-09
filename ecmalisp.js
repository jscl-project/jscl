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
                v76 = {car: arguments[i], cdr: v76};
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
var l33 = f3("STRING=");
var f66;
var l32 = f3("ASSOC");
var f65;
var l31 = f3("EVERY");
var f64;
var l30 = f3("PARSE-INTEGER");
var f63;
var l29 = f3("SUBSEQ");
var f62;
var l28 = f3("DIGIT-CHAR-P");
var f61;
var l27 = f3("REMOVE-IF-NOT");
var f60;
var l26 = f3("REMOVE-IF");
var f59;
var l25 = f3("REMOVE");
var f58;
var l24 = f3("MEMBER");
var f57;
var l23 = f3("BUTLAST");
var f56;
var l22 = f3("LAST");
var f55;
var l21 = f3("NTH");
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
var l4 = f3("REVERSE-AUX");
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
                    v89 = {car: arguments[i], cdr: v89};
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
                ((v90)["fname"] = "REVERSE-AUX");
                return v90;
            })((function (v91,v92){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (f1(v91) !== v2 ? v92 : f40((function(){
                                var tmp = v91;
                                return tmp === v2? v2: tmp.cdr;
                            })(), ({car: (function(){
                                var tmp = v91;
                                return tmp === v2? v2: tmp.car;
                            })(), cdr: v92})));
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
                        if (cf.type == 'block' && cf.id == 39)
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
                                        if (cf.type == 'block' && cf.id == 41)
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
                        if (cf.type == 'block' && cf.id == 40)
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
                        if (cf.type == 'block' && cf.id == 42)
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
                        if (cf.type == 'block' && cf.id == 43)
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
                        if (cf.type == 'block' && cf.id == 44)
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
                        if (cf.type == 'block' && cf.id == 45)
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
                        if (cf.type == 'block' && cf.id == 46)
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
                        if (cf.type == 'block' && cf.id == 47)
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
                        if (cf.type == 'block' && cf.id == 48)
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
                        if (cf.type == 'block' && cf.id == 49)
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
                        if (cf.type == 'block' && cf.id == 50)
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
                        if (cf.type == 'block' && cf.id == 51)
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
                        if (cf.type == 'block' && cf.id == 52)
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
                        if (cf.type == 'block' && cf.id == 53)
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
                ((v126)["fname"] = "NTH");
                return v126;
            })((function (v127,v128){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (f1(v128) !== v2 ? (function(){
                                return v128;
                            })() : (f14(v127) !== v2 ? (function(){
                                return (function(){
                                    var tmp = v128;
                                    return tmp === v2? v2: tmp.car;
                                })();
                            })() : (function(){
                                return f54(f13(v127), (function(){
                                    var tmp = v128;
                                    return tmp === v2? v2: tmp.cdr;
                                })());
                            })()));
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
        return l21;
    })();
    (function(){
        (function(){
            return f55 = (function(v129){
                ((v129)["fname"] = "LAST");
                return v129;
            })((function (v130){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (((function(){
                                var tmp = (function(){
                                    var tmp = v130;
                                    return tmp === v2? v2: tmp.cdr;
                                })();
                                return (typeof tmp == 'object' && 'car' in tmp);
                            })()?v3: v2) !== v2 ? f55((function(){
                                var tmp = v130;
                                return tmp === v2? v2: tmp.cdr;
                            })()) : v130);
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
        return l22;
    })();
    (function(){
        (function(){
            return f56 = (function(v131){
                ((v131)["fname"] = "BUTLAST");
                return v131;
            })((function (v132){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (((function(){
                                var tmp = (function(){
                                    var tmp = v132;
                                    return tmp === v2? v2: tmp.cdr;
                                })();
                                return (typeof tmp == 'object' && 'car' in tmp);
                            })()?v3: v2) !== v2 ? ({car: (function(){
                                var tmp = v132;
                                return tmp === v2? v2: tmp.car;
                            })(), cdr: f56((function(){
                                var tmp = v132;
                                return tmp === v2? v2: tmp.cdr;
                            })())}) : v2);
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
        })();
        return l23;
    })();
    (function(){
        (function(){
            return f57 = (function(v133){
                ((v133)["fname"] = "MEMBER");
                return v133;
            })((function (v134,v135){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (f1(v135) !== v2 ? (function(){
                                return v2;
                            })() : (f16(v134, (function(){
                                var tmp = v135;
                                return tmp === v2? v2: tmp.car;
                            })()) !== v2 ? (function(){
                                return v135;
                            })() : (function(){
                                return f57(v134, (function(){
                                    var tmp = v135;
                                    return tmp === v2? v2: tmp.cdr;
                                })());
                            })()));
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
        return l24;
    })();
    (function(){
        (function(){
            return f58 = (function(v136){
                ((v136)["fname"] = "REMOVE");
                return v136;
            })((function (v137,v138){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (f1(v138) !== v2 ? (function(){
                                return v2;
                            })() : (f16(v137, (function(){
                                var tmp = v138;
                                return tmp === v2? v2: tmp.car;
                            })()) !== v2 ? (function(){
                                return f58(v137, (function(){
                                    var tmp = v138;
                                    return tmp === v2? v2: tmp.cdr;
                                })());
                            })() : (function(){
                                return ({car: (function(){
                                    var tmp = v138;
                                    return tmp === v2? v2: tmp.car;
                                })(), cdr: f58(v137, (function(){
                                    var tmp = v138;
                                    return tmp === v2? v2: tmp.cdr;
                                })())});
                            })()));
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
        return l25;
    })();
    (function(){
        (function(){
            return f59 = (function(v139){
                ((v139)["fname"] = "REMOVE-IF");
                return v139;
            })((function (v140,v141){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (f1(v141) !== v2 ? (function(){
                                return v2;
                            })() : ((v140)((function(){
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
                        if (cf.type == 'block' && cf.id == 59)
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
                ((v142)["fname"] = "REMOVE-IF-NOT");
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
                                return ({car: (function(){
                                    var tmp = v144;
                                    return tmp === v2? v2: tmp.car;
                                })(), cdr: f60(v143, (function(){
                                    var tmp = v144;
                                    return tmp === v2? v2: tmp.cdr;
                                })())});
                            })() : (function(){
                                return f60(v143, (function(){
                                    var tmp = v144;
                                    return tmp === v2? v2: tmp.cdr;
                                })());
                            })()));
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
        return l27;
    })();
    (function(){
        (function(){
            return f61 = (function(v145){
                ((v145)["fname"] = "DIGIT-CHAR-P");
                return v145;
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
                            })()?v3: v2) !== v2 ? ((function(){
                                var x = v146;
                                var y = 57;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x<=y;
                            })()?v3: v2) : v2) !== v2 ? (function(){
                                var x = v146;
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
                        if (cf.type == 'block' && cf.id == 61)
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
            return f62 = (function(v147){
                ((v147)["fname"] = "SUBSEQ");
                return v147;
            })((function (v148,v149,v150){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 3) throw 'too many arguments';
                switch(arguments.length){
                case 2:
                v150=v2;
                default: break;
                }
                return (function(){
                    try {
                        return (function(){
                            return (((typeof(v148) == "string")?v3: v2) !== v2 ? (function(){
                                return (v150 !== v2 ? (function(){
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
                                return (function (){ throw "Unsupported argument."; })();
                            })());
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
        })();
        return l29;
    })();
    (function(){
        (function(){
            return f63 = (function(v151){
                ((v151)["fname"] = "PARSE-INTEGER");
                return v151;
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
                                                })()?v3: v2) !== v2){
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
                                                        var y = f61((function(){
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
                                                }return v2;
                                            })();
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 64)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })();
                                return v153;
                            })(0,0,f43(v152));
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
        return l30;
    })();
    (function(){
        (function(){
            return f64 = (function(v156){
                ((v156)["fname"] = "EVERY");
                return v156;
            })((function (v157,v158){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
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
                                                })()?v3: v2) !== v2){
                                                    ((v157)((function(){
                                                        var string = v158;
                                                        var index = v159;
                                                        if (typeof string != 'string')
                                                            throw 'The value ' + string + ' is not a type string.';
                                                        if (typeof index != 'number')
                                                            throw 'The value ' + index + ' is not a type number.';
                                                        return string.charCodeAt(index);
                                                    })()) !== v2 ? v2 : (function(){
                                                        return (function(){ throw ({type: 'block', id: 65, value: v2, message: 'Return from unknown block EVERY.'})})();
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
                                                }return v2;
                                            })();
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 66)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })();
                                return v3;
                            })(0,f43(v158));
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
        return l31;
    })();
    (function(){
        (function(){
            return f65 = (function(v161){
                ((v161)["fname"] = "ASSOC");
                return v161;
            })((function (v162,v163){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(v163 !== v2){
                                                (f16(v162, f22(v163)) !== v2 ? (function(){ throw ({type: 'block', id: 68, value: v2, message: 'Return from unknown block NIL.'})})() : v163 = (function(){
                                                    var tmp = v163;
                                                    return tmp === v2? v2: tmp.cdr;
                                                })());
                                            }return v2;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 68)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return (function(){
                                var tmp = v163;
                                return tmp === v2? v2: tmp.car;
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
            }));
        })();
        return l32;
    })();
    return (function(){
        (function(){
            return f66 = (function(v164){
                ((v164)["fname"] = "STRING=");
                return v164;
            })((function (v165,v166){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return ((v165 == v166)?v3: v2);
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
        })();
        return l33;
    })();
})(); 
var l34 = f3("*NEWLINE*");
var v167;
(function(){
    (function(){
        return v167 = (function(){
            var x = f48(10);
            if (typeof x != 'number')
                throw 'The value ' + x + ' is not a type number.';
            return String.fromCharCode(x);
        })();
    })();
    return l34;
})(); 
var l35 = f3("CONCAT");
var f67;
(function(){
    (function(){
        return f67 = (function(v168){
            ((v168)["fname"] = "CONCAT");
            return v168;
        })((function (){
            var v169= v2;
            for (var i = arguments.length-1; i>=0; i--)
                v169 = {car: arguments[i], cdr: v169};
            return (function(){
                try {
                    return (function(){
                        return f37(f44, v169, "");
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
    return l35;
})(); 
var l36 = f3("JOIN");
var f68;
(function(){
    (function(){
        return f68 = (function(v170){
            ((v170)["fname"] = "JOIN");
            return v170;
        })((function (v171,v172){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            switch(arguments.length){
            case 1:
            v172="";
            default: break;
            }
            return (function(){
                try {
                    return (function(){
                        return (f1(v171) !== v2 ? (function(){
                            return "";
                        })() : (f1((function(){
                            var tmp = v171;
                            return tmp === v2? v2: tmp.cdr;
                        })()) !== v2 ? (function(){
                            return (function(){
                                var tmp = v171;
                                return tmp === v2? v2: tmp.car;
                            })();
                        })() : (function(){
                            return f67((function(){
                                var tmp = v171;
                                return tmp === v2? v2: tmp.car;
                            })(), v172, f68((function(){
                                var tmp = v171;
                                return tmp === v2? v2: tmp.cdr;
                            })(), v172));
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
    })();
    return l36;
})(); 
var l37 = f3("JOIN-TRAILING");
var f69;
(function(){
    (function(){
        return f69 = (function(v173){
            ((v173)["fname"] = "JOIN-TRAILING");
            return v173;
        })((function (v174,v175){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            switch(arguments.length){
            case 1:
            v175="";
            default: break;
            }
            return (function(){
                try {
                    return (function(){
                        return (f1(v174) !== v2 ? "" : f67((function(){
                            var tmp = v174;
                            return tmp === v2? v2: tmp.car;
                        })(), v175, f69((function(){
                            var tmp = v174;
                            return tmp === v2? v2: tmp.cdr;
                        })(), v175)));
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 72)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        }));
    })();
    return l37;
})(); 
var l38 = f3("INDENT");
var f70;
(function(){
    (function(){
        return f70 = (function(v176){
            ((v176)["fname"] = "INDENT");
            return v176;
        })((function (){
            var v177= v2;
            for (var i = arguments.length-1; i>=0; i--)
                v177 = {car: arguments[i], cdr: v177};
            return (function(){
                try {
                    return (function(){
                        return (function(v178){
                            return (function(v179,v180,v181){
                                (f52(v181) !== v2 ? (function(){
                                    return v179 = "    ";
                                })() : v2);
                                (function(){
                                    try {
                                        return (function(){
                                            return (function(){
                                                while(((function(){
                                                    var x = v180;
                                                    var y = v181;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x<y;
                                                })()?v3: v2) !== v2){
                                                    v179 = f67(v179, ((f50((function(){
                                                        var string = v178;
                                                        var index = v180;
                                                        if (typeof string != 'string')
                                                            throw 'The value ' + string + ' is not a type string.';
                                                        if (typeof index != 'number')
                                                            throw 'The value ' + index + ' is not a type number.';
                                                        return string.charCodeAt(index);
                                                    })(), 10) !== v2 ? (((function(){
                                                        var x = v180;
                                                        var y = f13(v181);
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        if (typeof y != 'number')
                                                            throw 'The value ' + y + ' is not a type number.';
                                                        return x<y;
                                                    })()?v3: v2) !== v2 ? f17(f50((function(){
                                                        var string = v178;
                                                        var index = f12(v180);
                                                        if (typeof string != 'string')
                                                            throw 'The value ' + string + ' is not a type string.';
                                                        if (typeof index != 'number')
                                                            throw 'The value ' + index + ' is not a type number.';
                                                        return string.charCodeAt(index);
                                                    })(), 10)) : v2) : v2) !== v2 ? f67((function(){
                                                        var x = 10;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        return String.fromCharCode(x);
                                                    })(), "    ") : f62(v178, v180, f12(v180))));
                                                    v180 = (function(){
                                                        var x = v180;
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
                                return v179;
                            })("",0,f43(v178));
                        })(f68(v177));
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
    return l38;
})(); 
var l39 = f3("INTEGER-TO-STRING");
var f6;
(function(){
    (function(){
        return f6 = (function(v182){
            ((v182)["fname"] = "INTEGER-TO-STRING");
            return v182;
        })((function (v183){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (f14(v183) !== v2 ? (function(){
                            return "0";
                        })() : (f53(v183) !== v2 ? (function(){
                            return f67("-", f6((function(){
                                var x = 0;
                                var y = v183;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x-y;
                            })()));
                        })() : (function(){
                            return (function(v184){
                                (function(){
                                    try {
                                        return (function(){
                                            return (function(){
                                                while(f17(f14(v183)) !== v2){
                                                    v184 = ({car: (function(){
                                                        var x = v183;
                                                        var y = 10;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        if (typeof y != 'number')
                                                            throw 'The value ' + y + ' is not a type number.';
                                                        return x%y;
                                                    })(), cdr: v184});
                                                    v183 = f15(v183, 10);
                                                }return v2;
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
                                return f68(f45((function (v185){
                                    if (arguments.length < 1) throw 'too few arguments';
                                    if (arguments.length > 1) throw 'too many arguments';
                                    return (function(){
                                        var x = (function(){
                                            var string = "0123456789";
                                            var index = v185;
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
                                }), v184));
                            })(v2);
                        })()));
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 75)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        }));
    })();
    return l39;
})(); 
var l42 = f3("PRINT");
var f74;
var l41 = f3("WRITE-LINE");
var f73;
var l40 = f3("PRINT-TO-STRING");
var f71;
(function(){
    (function(){
        (function(){
            return f71 = (function(v186){
                ((v186)["fname"] = "PRINT-TO-STRING");
                return v186;
            })((function (v187){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (((function(){
                                var tmp = v187;
                                return (typeof tmp == 'object' && 'name' in tmp);
                            })()?v3: v2) !== v2 ? (function(){
                                return (v187).name;
                            })() : (f51(v187) !== v2 ? (function(){
                                return f6(v187);
                            })() : (((typeof(v187) == "string")?v3: v2) !== v2 ? (function(){
                                return f67("\"", f72(v187), "\"");
                            })() : (((typeof v187 == 'function')?v3: v2) !== v2 ? (function(){
                                return (function(v188){
                                    return (v188 !== v2 ? f67("#<FUNCTION ", v188, ">") : f67("#<FUNCTION>"));
                                })((function(){
                                    var tmp = (v187)["fname"];
                                    return tmp == undefined? v2: tmp ;
                                })());
                            })() : (f36(v187) !== v2 ? (function(){
                                return f67("(", f69(f45(f71, f56(v187)), " "), (function(v189){
                                    return (f1((function(){
                                        var tmp = v189;
                                        return tmp === v2? v2: tmp.cdr;
                                    })()) !== v2 ? f71((function(){
                                        var tmp = v189;
                                        return tmp === v2? v2: tmp.car;
                                    })()) : f67(f71((function(){
                                        var tmp = v189;
                                        return tmp === v2? v2: tmp.car;
                                    })()), " . ", f71((function(){
                                        var tmp = v189;
                                        return tmp === v2? v2: tmp.cdr;
                                    })())));
                                })(f55(v187)), ")");
                            })() : v2)))));
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
        })();
        return l40;
    })();
    (function(){
        (function(){
            return f73 = (function(v190){
                ((v190)["fname"] = "WRITE-LINE");
                return v190;
            })((function (v191){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            (function(){
                                var x = v191;
                                if (typeof x != 'string')
                                    throw 'The value ' + x + ' is not a type string.';
                                return lisp.write(x);
                            })();
                            (function(){
                                var x = v167;
                                if (typeof x != 'string')
                                    throw 'The value ' + x + ' is not a type string.';
                                return lisp.write(x);
                            })();
                            return v191;
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
        return l41;
    })();
    return (function(){
        (function(){
            return f74 = (function(v192){
                ((v192)["fname"] = "PRINT");
                return v192;
            })((function (v193){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            f73(f71(v193));
                            return v193;
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
        return l42;
    })();
})(); 
var l43 = f3("MAKE-STRING-STREAM");
var f75;
(function(){
    (function(){
        return f75 = (function(v194){
            ((v194)["fname"] = "MAKE-STRING-STREAM");
            return v194;
        })((function (v195){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return ({car: v195, cdr: 0});
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
    return l43;
})(); 
var l44 = f3("%PEEK-CHAR");
var f76;
(function(){
    (function(){
        return f76 = (function(v196){
            ((v196)["fname"] = "%PEEK-CHAR");
            return v196;
        })((function (v197){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var x = (function(){
                                var tmp = v197;
                                return tmp === v2? v2: tmp.cdr;
                            })();
                            var y = f43((function(){
                                var tmp = v197;
                                return tmp === v2? v2: tmp.car;
                            })());
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x<y;
                        })()?v3: v2) !== v2 ? (function(){
                            var string = (function(){
                                var tmp = v197;
                                return tmp === v2? v2: tmp.car;
                            })();
                            var index = (function(){
                                var tmp = v197;
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
                    if (cf.type == 'block' && cf.id == 81)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        }));
    })();
    return l44;
})(); 
var l45 = f3("%READ-CHAR");
var f77;
(function(){
    (function(){
        return f77 = (function(v198){
            ((v198)["fname"] = "%READ-CHAR");
            return v198;
        })((function (v199){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var x = (function(){
                                var tmp = v199;
                                return tmp === v2? v2: tmp.cdr;
                            })();
                            var y = f43((function(){
                                var tmp = v199;
                                return tmp === v2? v2: tmp.car;
                            })());
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x<y;
                        })()?v3: v2) !== v2 ? (function(v200){
                            (function(){
                                var x = v199;
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.cdr = f12((function(){
                                    var tmp = v199;
                                    return tmp === v2? v2: tmp.cdr;
                                })()));
                            })();
                            return v200;
                        })((function(){
                            var string = (function(){
                                var tmp = v199;
                                return tmp === v2? v2: tmp.car;
                            })();
                            var index = (function(){
                                var tmp = v199;
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
                    if (cf.type == 'block' && cf.id == 82)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        }));
    })();
    return l45;
})(); 
var l46 = f3("WHITESPACEP");
var f78;
(function(){
    (function(){
        return f78 = (function(v201){
            ((v201)["fname"] = "WHITESPACEP");
            return v201;
        })((function (v202){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v203){
                            return (v203 !== v2 ? v203 : (function(v204){
                                return (v204 !== v2 ? v204 : f50(v202, 9));
                            })(f50(v202, 10)));
                        })(f50(v202, 32));
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
    })();
    return l46;
})(); 
var l47 = f3("SKIP-WHITESPACES");
var f79;
(function(){
    (function(){
        return f79 = (function(v205){
            ((v205)["fname"] = "SKIP-WHITESPACES");
            return v205;
        })((function (v206){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v207){
                            v207 = f76(v206);
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while((v207 !== v2 ? f78(v207) : v2) !== v2){
                                                f77(v206);
                                                v207 = f76(v206);
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
                        })(v2);
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
    return l47;
})(); 
var l48 = f3("TERMINALP");
var f80;
(function(){
    (function(){
        return f80 = (function(v208){
            ((v208)["fname"] = "TERMINALP");
            return v208;
        })((function (v209){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v210){
                            return (v210 !== v2 ? v210 : (function(v211){
                                return (v211 !== v2 ? v211 : (function(v212){
                                    return (v212 !== v2 ? v212 : f50(40, v209));
                                })(f50(41, v209)));
                            })(f78(v209)));
                        })(f1(v209));
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
    return l48;
})(); 
var l49 = f3("READ-UNTIL");
var f81;
(function(){
    (function(){
        return f81 = (function(v213){
            ((v213)["fname"] = "READ-UNTIL");
            return v213;
        })((function (v214,v215){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v216,v217){
                            v217 = f76(v214);
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while((v217 !== v2 ? f17((v215)(v217)) : v2) !== v2){
                                                v216 = f67(v216, (function(){
                                                    var x = v217;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    return String.fromCharCode(x);
                                                })());
                                                f77(v214);
                                                v217 = f76(v214);
                                            }return v2;
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
                            return v216;
                        })("",v2);
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
    return l49;
})(); 
var l50 = f3("SKIP-WHITESPACES-AND-COMMENTS");
var f82;
(function(){
    (function(){
        return f82 = (function(v218){
            ((v218)["fname"] = "SKIP-WHITESPACES-AND-COMMENTS");
            return v218;
        })((function (v219){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v220){
                            f79(v219);
                            v220 = f76(v219);
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while((v220 !== v2 ? f50(v220, 59) : v2) !== v2){
                                                f81(v219, (function (v221){
                                                    if (arguments.length < 1) throw 'too few arguments';
                                                    if (arguments.length > 1) throw 'too many arguments';
                                                    return f50(v221, 10);
                                                }));
                                                f79(v219);
                                                v220 = f76(v219);
                                            }return v2;
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
                        })(v2);
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
    return l50;
})(); 
var l51 = f3("%READ-LIST");
var f83;
(function(){
    (function(){
        return f83 = (function(v222){
            ((v222)["fname"] = "%READ-LIST");
            return v222;
        })((function (v223){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        f82(v223);
                        return (function(v224){
                            return (f1(v224) !== v2 ? (function(){
                                return (function (){ throw "Unspected EOF"; })();
                            })() : (f50(v224, 41) !== v2 ? (function(){
                                f77(v223);
                                return v2;
                            })() : (f50(v224, 46) !== v2 ? (function(){
                                f77(v223);
                                return (function(v225){
                                    f82(v223);
                                    (f50(f77(v223), 41) !== v2 ? v2 : (function(){
                                        return (function (){ throw "')' was expected."; })();
                                    })());
                                    return v225;
                                })(f84(v223));
                            })() : (function(){
                                return ({car: f84(v223), cdr: f83(v223)});
                            })())));
                        })(f76(v223));
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
    return l51;
})(); 
var l52 = f3("READ-STRING");
var f85;
(function(){
    (function(){
        return f85 = (function(v226){
            ((v226)["fname"] = "READ-STRING");
            return v226;
        })((function (v227){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v228,v229){
                            v229 = f77(v227);
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(f17(f16(v229, 34)) !== v2){
                                                (f1(v229) !== v2 ? (function(){
                                                    return (function (){ throw "Unexpected EOF"; })();
                                                })() : v2);
                                                (f16(v229, 92) !== v2 ? (function(){
                                                    return v229 = f77(v227);
                                                })() : v2);
                                                v228 = f67(v228, (function(){
                                                    var x = v229;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    return String.fromCharCode(x);
                                                })());
                                                v229 = f77(v227);
                                            }return v2;
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
                            return v228;
                        })("",v2);
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
    return l52;
})(); 
var l57 = f3("READ-SHARP");
var l56 = 43;
var l55 = 92;
var l54 = f3("FUNCTION");
var l53 = 39;
var f86;
(function(){
    (function(){
        return f86 = (function(v230){
            ((v230)["fname"] = "READ-SHARP");
            return v230;
        })((function (v231){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        f77(v231);
                        return (function(v232){
                            return (f16(v232, l53) !== v2 ? (function(){
                                return f33(l54, f84(v231));
                            })() : (f16(v232, l55) !== v2 ? (function(){
                                return (function(v233){
                                    return (f66(v233, "space") !== v2 ? (function(){
                                        return f49(32);
                                    })() : (f66(v233, "tab") !== v2 ? (function(){
                                        return f49(9);
                                    })() : (f66(v233, "newline") !== v2 ? (function(){
                                        return f49(10);
                                    })() : (function(){
                                        return f49((function(){
                                            var string = v233;
                                            var index = 0;
                                            if (typeof string != 'string')
                                                throw 'The value ' + string + ' is not a type string.';
                                            if (typeof index != 'number')
                                                throw 'The value ' + index + ' is not a type number.';
                                            return string.charCodeAt(index);
                                        })());
                                    })())));
                                })(f67((function(){
                                    var x = f77(v231);
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    return String.fromCharCode(x);
                                })(), f81(v231, f80)));
                            })() : (f16(v232, l56) !== v2 ? (function(){
                                return (function(v234){
                                    return (f66(v234, "common-lisp") !== v2 ? (function(){
                                        f84(v231);
                                        return f84(v231);
                                    })() : (f66(v234, "ecmalisp") !== v2 ? (function(){
                                        return f84(v231);
                                    })() : (function(){
                                        return (function (){ throw "Unknown reader form."; })();
                                    })()));
                                })(f81(v231, f80));
                            })() : (function(){
                                return (function (){ throw "ECASE expression failed."; })();
                            })())));
                        })(f77(v231));
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
    return l57;
})(); 
var l58 = f3("*EOF*");
var v235;
(function(){
    (function(){
        return v235 = (function(){
            var name = "EOF";
            if (typeof name != 'string')
                throw 'The value ' + name + ' is not a type string.';
            return ({name: name});
        })();
    })();
    return l58;
})(); 
var l63 = f3("LS-READ");
var l62 = f3("UNQUOTE");
var l61 = f3("UNQUOTE-SPLICING");
var l60 = f3("BACKQUOTE");
var l59 = f3("QUOTE");
var f84;
(function(){
    (function(){
        return f84 = (function(v236){
            ((v236)["fname"] = "LS-READ");
            return v236;
        })((function (v237){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        f82(v237);
                        return (function(v238){
                            return (f1(v238) !== v2 ? (function(){
                                return v235;
                            })() : (f50(v238, 40) !== v2 ? (function(){
                                f77(v237);
                                return f83(v237);
                            })() : (f50(v238, 39) !== v2 ? (function(){
                                f77(v237);
                                return f33(l59, f84(v237));
                            })() : (f50(v238, 96) !== v2 ? (function(){
                                f77(v237);
                                return f33(l60, f84(v237));
                            })() : (f50(v238, 34) !== v2 ? (function(){
                                f77(v237);
                                return f85(v237);
                            })() : (f50(v238, 44) !== v2 ? (function(){
                                f77(v237);
                                return (f16(f76(v237), 64) !== v2 ? (function(){
                                    f77(v237);
                                    return f33(l61, f84(v237));
                                })() : f33(l62, f84(v237)));
                            })() : (f50(v238, 35) !== v2 ? (function(){
                                return f86(v237);
                            })() : (function(){
                                return (function(v239){
                                    return (f64(f61, v239) !== v2 ? f63(v239) : f3((function(){
                                        var x = v239;
                                        if (typeof x != 'string')
                                            throw 'The value ' + x + ' is not a type string.';
                                        return x.toUpperCase();
                                    })()));
                                })(f81(v237, f80));
                            })())))))));
                        })(f76(v237));
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
    })();
    return l63;
})(); 
var l64 = f3("LS-READ-FROM-STRING");
var f87;
(function(){
    (function(){
        return f87 = (function(v240){
            ((v240)["fname"] = "LS-READ-FROM-STRING");
            return v240;
        })((function (v241){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f84(f75(v241));
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
    return l64;
})(); 
var l66 = f3("*COMPILATION-UNIT-CHECKS*");
var l65 = f3("NIL");
var v242;
(function(){
    (function(){
        return v242 = l65;
    })();
    return l66;
})(); 
var l67 = f3("MAKE-BINDING");
var f88;
(function(){
    (function(){
        return f88 = (function(v243){
            ((v243)["fname"] = "MAKE-BINDING");
            return v243;
        })((function (v244,v245,v246,v247){
            if (arguments.length < 4) throw 'too few arguments';
            if (arguments.length > 4) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f33(v244, v245, v246, v247);
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
    return l67;
})(); 
var l68 = f3("BINDING-NAME");
var f89;
(function(){
    (function(){
        return f89 = (function(v248){
            ((v248)["fname"] = "BINDING-NAME");
            return v248;
        })((function (v249){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f29(v249);
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
    })();
    return l68;
})(); 
var l69 = f3("BINDING-TYPE");
var f90;
(function(){
    (function(){
        return f90 = (function(v250){
            ((v250)["fname"] = "BINDING-TYPE");
            return v250;
        })((function (v251){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f30(v251);
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
    return l69;
})(); 
var l70 = f3("BINDING-TRANSLATION");
var f91;
(function(){
    (function(){
        return f91 = (function(v252){
            ((v252)["fname"] = "BINDING-TRANSLATION");
            return v252;
        })((function (v253){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f31(v253);
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
    })();
    return l70;
})(); 
var l71 = f3("BINDING-DECLARED");
var f92;
(function(){
    (function(){
        return f92 = (function(v254){
            ((v254)["fname"] = "BINDING-DECLARED");
            return v254;
        })((function (v255){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (v255 !== v2 ? f32(v255) : v2);
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
    return l71;
})(); 
var l72 = f3("MARK-BINDING-AS-DECLARED");
var f93;
(function(){
    (function(){
        return f93 = (function(v256){
            ((v256)["fname"] = "MARK-BINDING-AS-DECLARED");
            return v256;
        })((function (v257){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var x = f27(v257);
                            if (typeof x != 'object')
                                throw 'The value ' + x + ' is not a type object.';
                            return (x.car = v3);
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
    })();
    return l72;
})(); 
var l73 = f3("MAKE-LEXENV");
var f94;
(function(){
    (function(){
        return f94 = (function(v258){
            ((v258)["fname"] = "MAKE-LEXENV");
            return v258;
        })((function (){
            if (arguments.length > 0) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f33(v2, v2, v2);
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
    })();
    return l73;
})(); 
var l74 = f3("COPY-LEXENV");
var f95;
(function(){
    (function(){
        return f95 = (function(v259){
            ((v259)["fname"] = "COPY-LEXENV");
            return v259;
        })((function (v260){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f47(v260);
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
    return l74;
})(); 
var l78 = f3("PUSH-TO-LEXENV");
var l77 = f3("BLOCK");
var l76 = f3("FUNCTION");
var l75 = f3("VARIABLE");
var f96;
(function(){
    (function(){
        return f96 = (function(v261){
            ((v261)["fname"] = "PUSH-TO-LEXENV");
            return v261;
        })((function (v262,v263,v264){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v265){
                            return (f16(v265, l75) !== v2 ? (function(){
                                return (function(){
                                    var x = v263;
                                    if (typeof x != 'object')
                                        throw 'The value ' + x + ' is not a type object.';
                                    return (x.car = ({car: v262, cdr: (function(){
                                        var tmp = v263;
                                        return tmp === v2? v2: tmp.car;
                                    })()}));
                                })();
                            })() : (f16(v265, l76) !== v2 ? (function(){
                                return (function(){
                                    var x = (function(){
                                        var tmp = v263;
                                        return tmp === v2? v2: tmp.cdr;
                                    })();
                                    if (typeof x != 'object')
                                        throw 'The value ' + x + ' is not a type object.';
                                    return (x.car = ({car: v262, cdr: f23(v263)}));
                                })();
                            })() : (f16(v265, l77) !== v2 ? (function(){
                                return (function(){
                                    var x = f25(v263);
                                    if (typeof x != 'object')
                                        throw 'The value ' + x + ' is not a type object.';
                                    return (x.car = ({car: v262, cdr: f26(v263)}));
                                })();
                            })() : (function(){
                                return (function (){ throw "ECASE expression failed."; })();
                            })())));
                        })(v264);
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
    return l78;
})(); 
var l79 = f3("EXTEND-LEXENV");
var f97;
(function(){
    (function(){
        return f97 = (function(v266){
            ((v266)["fname"] = "EXTEND-LEXENV");
            return v266;
        })((function (v267,v268,v269){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v270){
                            f96(v267, v270, v269);
                            return v270;
                        })(f95(v268));
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
    return l79;
})(); 
var l83 = f3("LOOKUP-IN-LEXENV");
var l82 = f3("BLOCK");
var l81 = f3("FUNCTION");
var l80 = f3("VARIABLE");
var f98;
(function(){
    (function(){
        return f98 = (function(v271){
            ((v271)["fname"] = "LOOKUP-IN-LEXENV");
            return v271;
        })((function (v272,v273,v274){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f65(v272, (function(v275){
                            return (f16(v275, l80) !== v2 ? (function(){
                                return f29(v273);
                            })() : (f16(v275, l81) !== v2 ? (function(){
                                return f30(v273);
                            })() : (f16(v275, l82) !== v2 ? (function(){
                                return f31(v273);
                            })() : (function(){
                                return (function (){ throw "ECASE expression failed."; })();
                            })())));
                        })(v274));
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
    return l83;
})(); 
var l84 = f3("*ENVIRONMENT*");
var v276;
(function(){
    (function(){
        return v276 = f94();
    })();
    return l84;
})(); 
var l85 = f3("CLEAR-UNDECLARED-GLOBAL-BINDINGS");
var f99;
(function(){
    (function(){
        return f99 = (function(v277){
            ((v277)["fname"] = "CLEAR-UNDECLARED-GLOBAL-BINDINGS");
            return v277;
        })((function (){
            if (arguments.length > 0) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v278,v279){
                            return v276 = f33(v278, v279, f31(v276));
                        })(f29(v276),f30(v276));
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
    return l85;
})(); 
var l86 = f3("*VARIABLE-COUNTER*");
var v280;
(function(){
    (function(){
        return v280 = 0;
    })();
    return l86;
})(); 
var l87 = f3("GVARNAME");
var f100;
(function(){
    (function(){
        return f100 = (function(v281){
            ((v281)["fname"] = "GVARNAME");
            return v281;
        })((function (v282){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f67("v", f6(v280 = (function(){
                            var x = v280;
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
                    if (cf.type == 'block' && cf.id == 109)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        }));
    })();
    return l87;
})(); 
var l93 = f3("LOOKUP-VARIABLE");
var l92 = f3("VARIABLE");
var l91 = f3("VARIABLE");
var l90 = f3("VARIABLE");
var l89 = f3("VARIABLE");
var l88 = f3("VARIABLE");
var f101;
(function(){
    (function(){
        return f101 = (function(v283){
            ((v283)["fname"] = "LOOKUP-VARIABLE");
            return v283;
        })((function (v284,v285){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v286){
                            return (v286 !== v2 ? v286 : (function(v287){
                                return (v287 !== v2 ? v287 : (function(v288,v289){
                                    f96(v289, v276, l88);
                                    v242 = ({car: (function (){
                                        if (arguments.length > 0) throw 'too many arguments';
                                        return (f98(v284, v276, l89) !== v2 ? v2 : (function(){
                                            return (function (){ throw f67("Undefined variable `", v288, "'"); })();
                                        })());
                                    }), cdr: v242});
                                    return v289;
                                })((v284).name,f88(v284, l90, f100(v284), v2)));
                            })(f98(v284, v276, l91)));
                        })(f98(v284, v285, l92));
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
    return l93;
})(); 
var l94 = f3("LOOKUP-VARIABLE-TRANSLATION");
var f102;
(function(){
    (function(){
        return f102 = (function(v290){
            ((v290)["fname"] = "LOOKUP-VARIABLE-TRANSLATION");
            return v290;
        })((function (v291,v292){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f91(f101(v291, v292));
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
    return l94;
})(); 
var l97 = f3("EXTEND-LOCAL-ENV");
var l96 = f3("VARIABLE");
var l95 = f3("VARIABLE");
var f103;
(function(){
    (function(){
        return f103 = (function(v293){
            ((v293)["fname"] = "EXTEND-LOCAL-ENV");
            return v293;
        })((function (v294,v295){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v296){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v297,v298){
                                            (function(){
                                                while(v297 !== v2){
                                                    v298 = (function(){
                                                        var tmp = v297;
                                                        return tmp === v2? v2: tmp.car;
                                                    })();
                                                    (function(v299){
                                                        return f96(v299, v296, l95);
                                                    })(f88(v298, l96, f100(v298), v3));
                                                    v297 = (function(){
                                                        var tmp = v297;
                                                        return tmp === v2? v2: tmp.cdr;
                                                    })();
                                                }return v2;
                                            })();
                                            return v296;
                                        })(v294,v2);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 113)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })(f95(v295));
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
    return l97;
})(); 
var l98 = f3("*FUNCTION-COUNTER*");
var v300;
(function(){
    (function(){
        return v300 = 0;
    })();
    return l98;
})(); 
var l104 = f3("LOOKUP-FUNCTION");
var l103 = f3("FUNCTION");
var l102 = f3("FUNCTION");
var l101 = f3("FUNCTION");
var l100 = f3("FUNCTION");
var l99 = f3("FUNCTION");
var f104;
(function(){
    (function(){
        return f104 = (function(v301){
            ((v301)["fname"] = "LOOKUP-FUNCTION");
            return v301;
        })((function (v302,v303){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v304){
                            return (v304 !== v2 ? v304 : (function(v305){
                                return (v305 !== v2 ? v305 : (function(v306,v307){
                                    f96(v307, v276, l99);
                                    v242 = ({car: (function (){
                                        if (arguments.length > 0) throw 'too many arguments';
                                        return (f92(f98(v302, v276, l100)) !== v2 ? v2 : (function(){
                                            return (function (){ throw f67("Undefined function `", v306, "'"); })();
                                        })());
                                    }), cdr: v242});
                                    return v307;
                                })((v302).name,f88(v302, l101, f67("f", f6(v300 = (function(){
                                    var x = v300;
                                    var y = 1;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    if (typeof y != 'number')
                                        throw 'The value ' + y + ' is not a type number.';
                                    return x+y;
                                })())), v2)));
                            })(f98(v302, v276, l102)));
                        })(f98(v302, v303, l103));
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
    return l104;
})(); 
var l105 = f3("LOOKUP-FUNCTION-TRANSLATION");
var f105;
(function(){
    (function(){
        return f105 = (function(v308){
            ((v308)["fname"] = "LOOKUP-FUNCTION-TRANSLATION");
            return v308;
        })((function (v309,v310){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f91(f104(v309, v310));
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
    return l105;
})(); 
var l106 = f3("*TOPLEVEL-COMPILATIONS*");
var v311;
(function(){
    (function(){
        return v311 = v2;
    })();
    return l106;
})(); 
var l107 = f3("%COMPILE-DEFVAR");
var f106;
(function(){
    (function(){
        return f106 = (function(v312){
            ((v312)["fname"] = "%COMPILE-DEFVAR");
            return v312;
        })((function (v313){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v314){
                            f93(v314);
                            return v311 = ({car: f67("var ", f91(v314)), cdr: v311});
                        })(f101(v313, v276));
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
    return l107;
})(); 
var l108 = f3("%COMPILE-DEFUN");
var f107;
(function(){
    (function(){
        return f107 = (function(v315){
            ((v315)["fname"] = "%COMPILE-DEFUN");
            return v315;
        })((function (v316){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v317){
                            f93(v317);
                            return v311 = ({car: f67("var ", f91(v317)), cdr: v311});
                        })(f104(v316, v276));
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
    })();
    return l108;
})(); 
var l111 = f3("%COMPILE-DEFMACRO");
var l110 = f3("FUNCTION");
var l109 = f3("MACRO");
var f108;
(function(){
    (function(){
        return f108 = (function(v318){
            ((v318)["fname"] = "%COMPILE-DEFMACRO");
            return v318;
        })((function (v319,v320){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f96(f88(v319, l109, v320, v3), v276, l110);
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
    return l111;
})(); 
var l112 = f3("*COMPILATIONS*");
var v321;
(function(){
    (function(){
        return v321 = v2;
    })();
    return l112;
})(); 
var l113 = f3("LS-COMPILE-BLOCK");
var f109;
(function(){
    (function(){
        return f109 = (function(v322){
            ((v322)["fname"] = "LS-COMPILE-BLOCK");
            return v322;
        })((function (v323,v324){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f69(f59((function (v325){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return (function(v326){
                                return (v326 !== v2 ? v326 : (((typeof(v325) == "string")?v3: v2) !== v2 ? f14(f43(v325)) : v2));
                            })(f1(v325));
                        }), f45((function (v327){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return f110(v327, v324);
                        }), v323)), f67(";", v167));
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
    return l113;
})(); 
var l114 = f3("IF");
v321 = ({car: f33(l114, (function (v328,v329,v330,v331){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return f67("(", f110(v329, v328), " !== ", f110(v2), " ? ", f110(v330, v328), " : ", f110(v331, v328), ")");
})), cdr: v321}); 
var l116 = f3("*LAMBDA-LIST-KEYWORDS*");
var l115 = {car: f3("&OPTIONAL"), cdr: {car: f3("&REST"), cdr: f3("NIL")}};
var v332;
(function(){
    (function(){
        return v332 = l115;
    })();
    return l116;
})(); 
var l117 = f3("LIST-UNTIL-KEYWORD");
var f111;
(function(){
    (function(){
        return f111 = (function(v333){
            ((v333)["fname"] = "LIST-UNTIL-KEYWORD");
            return v333;
        })((function (v334){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return ((function(v335){
                            return (v335 !== v2 ? v335 : f57((function(){
                                var tmp = v334;
                                return tmp === v2? v2: tmp.car;
                            })(), v332));
                        })(f1(v334)) !== v2 ? v2 : ({car: (function(){
                            var tmp = v334;
                            return tmp === v2? v2: tmp.car;
                        })(), cdr: f111((function(){
                            var tmp = v334;
                            return tmp === v2? v2: tmp.cdr;
                        })())}));
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
    return l117;
})(); 
var l118 = f3("LAMBDA-LIST-REQUIRED-ARGUMENTS");
var f112;
(function(){
    (function(){
        return f112 = (function(v336){
            ((v336)["fname"] = "LAMBDA-LIST-REQUIRED-ARGUMENTS");
            return v336;
        })((function (v337){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f111(v337);
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
    return l118;
})(); 
var l120 = f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
var l119 = f3("&OPTIONAL");
var f113;
(function(){
    (function(){
        return f113 = (function(v338){
            ((v338)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
            return v338;
        })((function (v339){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f45(f35, f111((function(){
                            var tmp = f57(l119, v339);
                            return tmp === v2? v2: tmp.cdr;
                        })()));
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
    return l120;
})(); 
var l121 = f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS");
var f114;
(function(){
    (function(){
        return f114 = (function(v340){
            ((v340)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS");
            return v340;
        })((function (v341){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f45(f20, f113(v341));
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
    return l121;
})(); 
var l123 = f3("LAMBDA-LIST-REST-ARGUMENT");
var l122 = f3("&REST");
var f115;
(function(){
    (function(){
        return f115 = (function(v342){
            ((v342)["fname"] = "LAMBDA-LIST-REST-ARGUMENT");
            return v342;
        })((function (v343){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v344){
                            ((function(){
                                var tmp = v344;
                                return tmp === v2? v2: tmp.cdr;
                            })() !== v2 ? (function(){
                                return (function (){ throw "Bad lambda-list"; })();
                            })() : v2);
                            return (function(){
                                var tmp = v344;
                                return tmp === v2? v2: tmp.car;
                            })();
                        })(f111((function(){
                            var tmp = f57(l122, v343);
                            return tmp === v2? v2: tmp.cdr;
                        })()));
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
    })();
    return l123;
})(); 
var l124 = f3("LAMBDA");
v321 = ({car: f33(l124, (function (v346,v347){
    if (arguments.length < 2) throw 'too few arguments';
    var v345= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v345 = {car: arguments[i], cdr: v345};
    return (function(v348,v349,v350){
        return (function(v351,v352,v353){
            return f67("(function (", f68(f45((function (v354){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return f102(v354, v353);
            }), f39(v348, v349)), ","), "){", v167, f70((v348 !== v2 ? f67("if (arguments.length < ", f6(v351), ") throw 'too few arguments';", v167) : ""), (f17(v350) !== v2 ? f67("if (arguments.length > ", f6((function(){
                var x = v351;
                var y = v352;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x+y;
            })()), ") throw 'too many arguments';", v167) : ""), (v349 !== v2 ? f67("switch(arguments.length){", v167, (function(v355,v356,v357){
                return (function(){
                    (function(){
                        try {
                            return (function(){
                                return (function(){
                                    while(((function(){
                                        var x = v357;
                                        var y = v352;
                                        if (typeof x != 'number')
                                            throw 'The value ' + x + ' is not a type number.';
                                        if (typeof y != 'number')
                                            throw 'The value ' + y + ' is not a type number.';
                                        return x<y;
                                    })()?v3: v2) !== v2){
                                        (function(v358){
                                            v356 = ({car: f67("case ", f6((function(){
                                                var x = v357;
                                                var y = v351;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                if (typeof y != 'number')
                                                    throw 'The value ' + y + ' is not a type number.';
                                                return x+y;
                                            })()), ":", v167, f102((function(){
                                                var tmp = v358;
                                                return tmp === v2? v2: tmp.car;
                                            })(), v353), "=", f110(f23(v358), v353), ";", v167), cdr: v356});
                                            return v357 = (function(){
                                                var x = v357;
                                                var y = 1;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                if (typeof y != 'number')
                                                    throw 'The value ' + y + ' is not a type number.';
                                                return x+y;
                                            })();
                                        })(f54(v357, v355));
                                    }return v2;
                                })();
                            })();
                        }
                        catch (cf){
                            if (cf.type == 'block' && cf.id == 125)
                                return cf.value;
                            else
                                throw cf;
                        }
                    })();
                    v356 = ({car: f67("default: break;", v167), cdr: v356});
                    return f68(f41(v356));
                })();
            })(f113(v347),v2,0), "}", v167) : ""), (v350 !== v2 ? (function(v359){
                return f67("var ", v359, "= ", f110(v2), ";", v167, "for (var i = arguments.length-1; i>=", f6((function(){
                    var x = v351;
                    var y = v352;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x+y;
                })()), "; i--)", v167, f70(v359, " = ", "{car: arguments[i], cdr: "), v359, "};", v167);
            })(f102(v350, v353)) : ""), f67(f109(f56(v345), v353), "return ", f110((function(){
                var tmp = f55(v345);
                return tmp === v2? v2: tmp.car;
            })(), v353), ";")), v167, "})");
        })(f43(v348),f43(v349),f103(f39(f35(v350), v348, v349), v346));
    })(f112(v347),f114(v347),f115(v347));
})), cdr: v321}); 
var l125 = f3("FSETQ");
v321 = ({car: f33(l125, (function (v360,v361,v362){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return f67(f105(v361, v360), " = ", f110(v362, v360));
})), cdr: v321}); 
var l126 = f3("SETQ");
v321 = ({car: f33(l126, (function (v363,v364,v365){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return f67(f102(v364, v363), " = ", f110(v365, v363));
})), cdr: v321}); 
var l127 = f3("ESCAPE-STRING");
var f72;
(function(){
    (function(){
        return f72 = (function(v366){
            ((v366)["fname"] = "ESCAPE-STRING");
            return v366;
        })((function (v367){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v368,v369,v370){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(((function(){
                                                var x = v369;
                                                var y = v370;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                if (typeof y != 'number')
                                                    throw 'The value ' + y + ' is not a type number.';
                                                return x<y;
                                            })()?v3: v2) !== v2){
                                                (function(v371){
                                                    ((function(v372){
                                                        return (v372 !== v2 ? v372 : f50(v371, 92));
                                                    })(f50(v371, 34)) !== v2 ? (function(){
                                                        return v368 = f67(v368, "\\");
                                                    })() : v2);
                                                    (f50(v371, 10) !== v2 ? (function(){
                                                        v368 = f67(v368, "\\");
                                                        return v371 = 110;
                                                    })() : v2);
                                                    return v368 = f67(v368, (function(){
                                                        var x = v371;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        return String.fromCharCode(x);
                                                    })());
                                                })((function(){
                                                    var string = v367;
                                                    var index = v369;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })());
                                                v369 = (function(){
                                                    var x = v369;
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
                                    if (cf.type == 'block' && cf.id == 127)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return v368;
                        })("",0,f43(v367));
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
    return l127;
})(); 
var l129 = f3("LITERAL->JS");
var l128 = f3("INTERN");
var f116;
(function(){
    (function(){
        return f116 = (function(v373){
            ((v373)["fname"] = "LITERAL->JS");
            return v373;
        })((function (v374){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (f51(v374) !== v2 ? (function(){
                            return f6(v374);
                        })() : (((typeof(v374) == "string")?v3: v2) !== v2 ? (function(){
                            return f67("\"", f72(v374), "\"");
                        })() : (((function(){
                            var tmp = v374;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?v3: v2) !== v2 ? (function(){
                            return f110(f39(f33(l128), f33(f72((v374).name))), v276);
                        })() : (((function(){
                            var tmp = v374;
                            return (typeof tmp == 'object' && 'car' in tmp);
                        })()?v3: v2) !== v2 ? (function(){
                            return f67("{car: ", f116((function(){
                                var tmp = v374;
                                return tmp === v2? v2: tmp.car;
                            })()), ", cdr: ", f116((function(){
                                var tmp = v374;
                                return tmp === v2? v2: tmp.cdr;
                            })()), "}");
                        })() : v2))));
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
    return l129;
})(); 
var l130 = f3("*LITERAL-COUNTER*");
var v375;
(function(){
    (function(){
        return v375 = 0;
    })();
    return l130;
})(); 
var l131 = f3("LITERAL");
var f117;
(function(){
    (function(){
        return f117 = (function(v376){
            ((v376)["fname"] = "LITERAL");
            return v376;
        })((function (v377){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v378){
                            v311 = ({car: f67("var ", v378, " = ", f116(v377)), cdr: v311});
                            return v378;
                        })(f67("l", f6(v375 = (function(){
                            var x = v375;
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
                    if (cf.type == 'block' && cf.id == 129)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        }));
    })();
    return l131;
})(); 
var l132 = f3("QUOTE");
v321 = ({car: f33(l132, (function (v379,v380){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return f117(v380);
})), cdr: v321}); 
var l133 = f3("%WHILE");
v321 = ({car: f33(l133, (function (v382,v383){
    if (arguments.length < 2) throw 'too few arguments';
    var v381= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v381 = {car: arguments[i], cdr: v381};
    return f67("(function(){", v167, f70("while(", f110(v383, v382), " !== ", f110(v2), "){", v167, f70(f109(v381, v382)), "}", "return ", f110(v2), ";", v167), "})()");
})), cdr: v321}); 
var l135 = f3("LAMBDA");
var l134 = f3("FUNCTION");
v321 = ({car: f33(l134, (function (v384,v385){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return ((f36(v385) !== v2 ? (((function(){
        var tmp = v385;
        return tmp === v2? v2: tmp.car;
    })() === l135)?v3: v2) : v2) !== v2 ? (function(){
        return f110(v385, v384);
    })() : (((function(){
        var tmp = v385;
        return (typeof tmp == 'object' && 'name' in tmp);
    })()?v3: v2) !== v2 ? (function(){
        return f105(v385, v384);
    })() : v2));
})), cdr: v321}); 
var l137 = f3("PROGN");
var l136 = f3("EVAL-WHEN-COMPILE");
v321 = ({car: f33(l136, (function (v387){
    if (arguments.length < 1) throw 'too few arguments';
    var v386= v2;
    for (var i = arguments.length-1; i>=1; i--)
        v386 = {car: arguments[i], cdr: v386};
    f118(({car: l137, cdr: v386}));
    return "";
})), cdr: v321}); 
var l138 = f3("PROGN");
v321 = ({car: f33(l138, (function (v389){
    if (arguments.length < 1) throw 'too few arguments';
    var v388= v2;
    for (var i = arguments.length-1; i>=1; i--)
        v388 = {car: arguments[i], cdr: v388};
    return f67("(function(){", v167, f70(f109(f56(v388), v389), "return ", f110((function(){
        var tmp = f55(v388);
        return tmp === v2? v2: tmp.car;
    })(), v389), ";", v167), "})()");
})), cdr: v321}); 
var l139 = f3("LET");
v321 = ({car: f33(l139, (function (v391,v392){
    if (arguments.length < 2) throw 'too few arguments';
    var v390= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v390 = {car: arguments[i], cdr: v390};
    return (function(v393){
        return (function(v394,v395){
            return (function(v396){
                return f67("(function(", f68(f45((function (v397){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f102(v397, v396);
                }), v394), ","), "){", v167, f70(f109(f56(v390), v396), "return ", f110((function(){
                    var tmp = f55(v390);
                    return tmp === v2? v2: tmp.car;
                })(), v396), ";", v167), "})(", f68(f45((function (v398){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f110(v398, v391);
                }), v395), ","), ")");
            })(f103(v394, v391));
        })(f45(f29, v393),f45(f30, v393));
    })(f45(f35, v392));
})), cdr: v321}); 
var l140 = f3("*BLOCK-COUNTER*");
var v399;
(function(){
    (function(){
        return v399 = 0;
    })();
    return l140;
})(); 
var l144 = f3("BLOCK");
var l143 = f3("BLOCK");
var l142 = f3("PROGN");
var l141 = f3("BLOCK");
v321 = ({car: f33(l141, (function (v401,v402){
    if (arguments.length < 2) throw 'too few arguments';
    var v400= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v400 = {car: arguments[i], cdr: v400};
    return (function(v403){
        return (function(v404){
            return f67("(function(){", v167, f70("try {", v167, f70("return ", f110(f39(f33(l142), v400), f97(v404, v401, l143)), ";", v167), "}", v167, "catch (cf){", v167, "    if (cf.type == 'block' && cf.id == ", v403, ")", v167, "        return cf.value;", v167, "    else", v167, "        throw cf;", v167, "}", v167), "})()");
        })(f88(v402, l144, v403, v3));
    })(f6(v399 = (function(){
        var x = v399;
        var y = 1;
        if (typeof x != 'number')
            throw 'The value ' + x + ' is not a type number.';
        if (typeof y != 'number')
            throw 'The value ' + y + ' is not a type number.';
        return x+y;
    })()));
})), cdr: v321}); 
var l146 = f3("BLOCK");
var l145 = f3("RETURN-FROM");
v321 = ({car: f33(l145, (function (v405,v406,v407){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    switch(arguments.length){
    case 2:
    v407=v2;
    default: break;
    }
    return (function(v408){
        return (v408 !== v2 ? f67("(function(){ throw ({", "type: 'block', ", "id: ", f91(v408), ", ", "value: ", f110(v407, v405), ", ", "message: 'Return from unknown block ", (v406).name, ".'", "})})()") : (function (){ throw f67("Unknown block `", (v406).name, "'."); })());
    })(f98(v406, v405, l146));
})), cdr: v321}); 
var l148 = f3("PROGN");
var l147 = f3("CATCH");
v321 = ({car: f33(l147, (function (v410,v411){
    if (arguments.length < 2) throw 'too few arguments';
    var v409= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v409 = {car: arguments[i], cdr: v409};
    return f67("(function(){", v167, f70("var id = ", f110(v411, v410), ";", v167, "try {", v167, f70("return ", f110(f39(f33(l148), v409)), ";", v167), "}", v167, "catch (cf){", v167, "    if (cf.type == 'catch' && cf.id == id)", v167, "        return cf.value;", v167, "    else", v167, "        throw cf;", v167, "}", v167), "})()");
})), cdr: v321}); 
var l149 = f3("THROW");
v321 = ({car: f33(l149, (function (v412,v413,v414){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    switch(arguments.length){
    case 2:
    v414=v2;
    default: break;
    }
    return f67("(function(){ throw ({", "type: 'catch', ", "id: ", f110(v413, v412), ", ", "value: ", f110(v414, v412), ", ", "message: 'Throw uncatched.'", "})})()");
})), cdr: v321}); 
var l150 = f3("UNWIND-PROTECT");
v321 = ({car: f33(l150, (function (v416,v417){
    if (arguments.length < 2) throw 'too few arguments';
    var v415= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v415 = {car: arguments[i], cdr: v415};
    return f67("(function(){", v167, f70("var ret = ", f110(v2), ";", v167, "try {", v167, f70("ret = ", f110(v417, v416), ";", v167), "} finally {", v167, f70(f109(v415, v416)), "}", v167, "return ret;", v167), "})()");
})), cdr: v321}); 
var l159 = f3("BACKQUOTE-EXPAND-1");
var l158 = f3("LIST");
var l157 = f3("UNQUOTE-SPLICING");
var l156 = f3("LIST");
var l155 = f3("UNQUOTE");
var l154 = f3("APPEND");
var l153 = f3("BACKQUOTE");
var l152 = f3("UNQUOTE");
var l151 = f3("QUOTE");
var f119;
(function(){
    (function(){
        return f119 = (function(v418){
            ((v418)["fname"] = "BACKQUOTE-EXPAND-1");
            return v418;
        })((function (v419){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var tmp = v419;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?v3: v2) !== v2 ? (function(){
                            return f33(l151, v419);
                        })() : (f34(v419) !== v2 ? (function(){
                            return v419;
                        })() : ((((function(){
                            var tmp = v419;
                            return tmp === v2? v2: tmp.car;
                        })() === l152)?v3: v2) !== v2 ? (function(){
                            return (function(){
                                var tmp = v419;
                                return tmp === v2? v2: tmp.car;
                            })();
                        })() : ((((function(){
                            var tmp = v419;
                            return tmp === v2? v2: tmp.car;
                        })() === l153)?v3: v2) !== v2 ? (function(){
                            return f119(f119(f23(v419)));
                        })() : (function(){
                            return ({car: l154, cdr: f45((function (v420){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return ((f36(v420) !== v2 ? (((function(){
                                    var tmp = v420;
                                    return tmp === v2? v2: tmp.car;
                                })() === l155)?v3: v2) : v2) !== v2 ? (function(){
                                    return f33(l156, f23(v420));
                                })() : ((f36(v420) !== v2 ? (((function(){
                                    var tmp = v420;
                                    return tmp === v2? v2: tmp.car;
                                })() === l157)?v3: v2) : v2) !== v2 ? (function(){
                                    return f23(v420);
                                })() : (function(){
                                    return f33(l158, f119(v420));
                                })()));
                            }), v419)});
                        })()))));
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
    return l159;
})(); 
var l161 = f3("BACKQUOTE-EXPAND");
var l160 = f3("BACKQUOTE");
var f120;
(function(){
    (function(){
        return f120 = (function(v421){
            ((v421)["fname"] = "BACKQUOTE-EXPAND");
            return v421;
        })((function (v422){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return ((f36(v422) !== v2 ? (((function(){
                            var tmp = v422;
                            return tmp === v2? v2: tmp.car;
                        })() === l160)?v3: v2) : v2) !== v2 ? f119(f23(v422)) : v422);
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
    })();
    return l161;
})(); 
var l162 = f3("BACKQUOTE");
v321 = ({car: f33(l162, (function (v423,v424){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return f110(f119(v424), v423);
})), cdr: v321}); 
var l163 = f3("COMPILE-BOOL");
var f121;
(function(){
    (function(){
        return f121 = (function(v425){
            ((v425)["fname"] = "COMPILE-BOOL");
            return v425;
        })((function (v426){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f67("(", v426, "?", f110(v3), ": ", f110(v2), ")");
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
    return l163;
})(); 
var l164 = f3("NUM-OP-NUM");
var f122;
(function(){
    (function(){
        return f122 = (function(v427){
            ((v427)["fname"] = "NUM-OP-NUM");
            return v427;
        })((function (v428,v429,v430){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f67("(function(){", v167, f70(f67("var ", "x", " = ", v428, ";", v167), f67("var ", "y", " = ", v430, ";", v167), f67("if (typeof ", "x", " != '", "number", "')", v167, f70("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v167)), f67("if (typeof ", "y", " != '", "number", "')", v167, f70("throw 'The value ' + ", "y", " + ' is not a type ", "number", ".';", v167)), f67("return ", (function(){
                            return f67("x", v429, "y");
                        })(), ";", v167)), "})()");
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
    return l164;
})(); 
var l165 = f3("+");
v321 = ({car: f33(l165, (function (v431,v432,v433){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v434,v435){
        return f122(v434, "+", v435);
    })(f110(v432, v431),f110(v433, v431));
})), cdr: v321}); 
var l166 = f3("-");
v321 = ({car: f33(l166, (function (v436,v437,v438){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v439,v440){
        return f122(v439, "-", v440);
    })(f110(v437, v436),f110(v438, v436));
})), cdr: v321}); 
var l167 = f3("*");
v321 = ({car: f33(l167, (function (v441,v442,v443){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v444,v445){
        return f122(v444, "*", v445);
    })(f110(v442, v441),f110(v443, v441));
})), cdr: v321}); 
var l168 = f3("/");
v321 = ({car: f33(l168, (function (v446,v447,v448){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v449,v450){
        return f122(v449, "/", v450);
    })(f110(v447, v446),f110(v448, v446));
})), cdr: v321}); 
var l169 = f3("MOD");
v321 = ({car: f33(l169, (function (v451,v452,v453){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v454,v455){
        return f122(v454, "%", v455);
    })(f110(v452, v451),f110(v453, v451));
})), cdr: v321}); 
var l170 = f3("<");
v321 = ({car: f33(l170, (function (v456,v457,v458){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v459,v460){
        return f121(f122(v459, "<", v460));
    })(f110(v457, v456),f110(v458, v456));
})), cdr: v321}); 
var l171 = f3(">");
v321 = ({car: f33(l171, (function (v461,v462,v463){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v464,v465){
        return f121(f122(v464, ">", v465));
    })(f110(v462, v461),f110(v463, v461));
})), cdr: v321}); 
var l172 = f3("=");
v321 = ({car: f33(l172, (function (v466,v467,v468){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v469,v470){
        return f121(f122(v469, "==", v470));
    })(f110(v467, v466),f110(v468, v466));
})), cdr: v321}); 
var l173 = f3("<=");
v321 = ({car: f33(l173, (function (v471,v472,v473){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v474,v475){
        return f121(f122(v474, "<=", v475));
    })(f110(v472, v471),f110(v473, v471));
})), cdr: v321}); 
var l174 = f3(">=");
v321 = ({car: f33(l174, (function (v476,v477,v478){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v479,v480){
        return f121(f122(v479, ">=", v480));
    })(f110(v477, v476),f110(v478, v476));
})), cdr: v321}); 
var l175 = f3("NUMBERP");
v321 = ({car: f33(l175, (function (v481,v482){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v483){
        return f121(f67("(typeof (", v483, ") == \"number\")"));
    })(f110(v482, v481));
})), cdr: v321}); 
var l176 = f3("FLOOR");
v321 = ({car: f33(l176, (function (v484,v485){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v486){
        return f67("(function(){", v167, f70(f67("var ", "x", " = ", v486, ";", v167), f67("if (typeof ", "x", " != '", "number", "')", v167, f70("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v167)), f67("return ", (function(){
            return "Math.floor(x)";
        })(), ";", v167)), "})()");
    })(f110(v485, v484));
})), cdr: v321}); 
var l177 = f3("CONS");
v321 = ({car: f33(l177, (function (v487,v488,v489){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v490,v491){
        return f67("({car: ", v490, ", cdr: ", v491, "})");
    })(f110(v488, v487),f110(v489, v487));
})), cdr: v321}); 
var l178 = f3("CONSP");
v321 = ({car: f33(l178, (function (v492,v493){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v494){
        return f121(f67("(function(){", v167, f70("var tmp = ", v494, ";", v167, "return (typeof tmp == 'object' && 'car' in tmp);", v167), "})()"));
    })(f110(v493, v492));
})), cdr: v321}); 
var l179 = f3("CAR");
v321 = ({car: f33(l179, (function (v495,v496){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v497){
        return f67("(function(){", v167, f70("var tmp = ", v497, ";", v167, "return tmp === ", f110(v2), "? ", f110(v2), ": tmp.car;", v167), "})()");
    })(f110(v496, v495));
})), cdr: v321}); 
var l180 = f3("CDR");
v321 = ({car: f33(l180, (function (v498,v499){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v500){
        return f67("(function(){", v167, f70("var tmp = ", v500, ";", v167, "return tmp === ", f110(v2), "? ", f110(v2), ": tmp.cdr;", v167), "})()");
    })(f110(v499, v498));
})), cdr: v321}); 
var l181 = f3("SETCAR");
v321 = ({car: f33(l181, (function (v501,v502,v503){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v504,v505){
        return f67("(function(){", v167, f70(f67("var ", "x", " = ", v504, ";", v167), f67("if (typeof ", "x", " != '", "object", "')", v167, f70("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", v167)), f67("return ", (function(){
            return f67("(x.car = ", v505, ")");
        })(), ";", v167)), "})()");
    })(f110(v502, v501),f110(v503, v501));
})), cdr: v321}); 
var l182 = f3("SETCDR");
v321 = ({car: f33(l182, (function (v506,v507,v508){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v509,v510){
        return f67("(function(){", v167, f70(f67("var ", "x", " = ", v509, ";", v167), f67("if (typeof ", "x", " != '", "object", "')", v167, f70("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", v167)), f67("return ", (function(){
            return f67("(x.cdr = ", v510, ")");
        })(), ";", v167)), "})()");
    })(f110(v507, v506),f110(v508, v506));
})), cdr: v321}); 
var l183 = f3("SYMBOLP");
v321 = ({car: f33(l183, (function (v511,v512){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v513){
        return f121(f67("(function(){", v167, f70("var tmp = ", v513, ";", v167, "return (typeof tmp == 'object' && 'name' in tmp);", v167), "})()"));
    })(f110(v512, v511));
})), cdr: v321}); 
var l184 = f3("MAKE-SYMBOL");
v321 = ({car: f33(l184, (function (v514,v515){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v516){
        return f67("(function(){", v167, f70(f67("var ", "name", " = ", v516, ";", v167), f67("if (typeof ", "name", " != '", "string", "')", v167, f70("throw 'The value ' + ", "name", " + ' is not a type ", "string", ".';", v167)), f67("return ", (function(){
            return "({name: name})";
        })(), ";", v167)), "})()");
    })(f110(v515, v514));
})), cdr: v321}); 
var l185 = f3("SYMBOL-NAME");
v321 = ({car: f33(l185, (function (v517,v518){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v519){
        return f67("(", v519, ").name");
    })(f110(v518, v517));
})), cdr: v321}); 
var l186 = f3("EQ");
v321 = ({car: f33(l186, (function (v520,v521,v522){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v523,v524){
        return f121(f67("(", v523, " === ", v524, ")"));
    })(f110(v521, v520),f110(v522, v520));
})), cdr: v321}); 
var l187 = f3("EQUAL");
v321 = ({car: f33(l187, (function (v525,v526,v527){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v528,v529){
        return f121(f67("(", v528, " == ", v529, ")"));
    })(f110(v526, v525),f110(v527, v525));
})), cdr: v321}); 
var l188 = f3("STRING");
v321 = ({car: f33(l188, (function (v530,v531){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v532){
        return f67("(function(){", v167, f70(f67("var ", "x", " = ", v532, ";", v167), f67("if (typeof ", "x", " != '", "number", "')", v167, f70("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v167)), f67("return ", (function(){
            return "String.fromCharCode(x)";
        })(), ";", v167)), "})()");
    })(f110(v531, v530));
})), cdr: v321}); 
var l189 = f3("STRINGP");
v321 = ({car: f33(l189, (function (v533,v534){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v535){
        return f121(f67("(typeof(", v535, ") == \"string\")"));
    })(f110(v534, v533));
})), cdr: v321}); 
var l190 = f3("STRING-UPCASE");
v321 = ({car: f33(l190, (function (v536,v537){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v538){
        return f67("(function(){", v167, f70(f67("var ", "x", " = ", v538, ";", v167), f67("if (typeof ", "x", " != '", "string", "')", v167, f70("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v167)), f67("return ", (function(){
            return "x.toUpperCase()";
        })(), ";", v167)), "})()");
    })(f110(v537, v536));
})), cdr: v321}); 
var l191 = f3("STRING-LENGTH");
v321 = ({car: f33(l191, (function (v539,v540){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v541){
        return f67("(function(){", v167, f70(f67("var ", "x", " = ", v541, ";", v167), f67("if (typeof ", "x", " != '", "string", "')", v167, f70("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v167)), f67("return ", (function(){
            return "x.length";
        })(), ";", v167)), "})()");
    })(f110(v540, v539));
})), cdr: v321}); 
var l192 = f3("SLICE");
v321 = ({car: f33(l192, (function (v542,v543,v544,v545){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    switch(arguments.length){
    case 3:
    v545=v2;
    default: break;
    }
    return f67("(function(){", v167, f70("var str = ", f110(v543, v542), ";", v167, "var a = ", f110(v544, v542), ";", v167, "var b;", v167, (v545 !== v2 ? f67("b = ", f110(v545, v542), ";", v167) : ""), "return str.slice(a,b);", v167), "})()");
})), cdr: v321}); 
var l193 = f3("CHAR");
v321 = ({car: f33(l193, (function (v546,v547,v548){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v549,v550){
        return f67("(function(){", v167, f70(f67("var ", "string", " = ", v549, ";", v167), f67("var ", "index", " = ", v550, ";", v167), f67("if (typeof ", "string", " != '", "string", "')", v167, f70("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", v167)), f67("if (typeof ", "index", " != '", "number", "')", v167, f70("throw 'The value ' + ", "index", " + ' is not a type ", "number", ".';", v167)), f67("return ", (function(){
            return "string.charCodeAt(index)";
        })(), ";", v167)), "})()");
    })(f110(v547, v546),f110(v548, v546));
})), cdr: v321}); 
var l194 = f3("CONCAT-TWO");
v321 = ({car: f33(l194, (function (v551,v552,v553){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v554,v555){
        return f67("(function(){", v167, f70(f67("var ", "string1", " = ", v554, ";", v167), f67("var ", "string2", " = ", v555, ";", v167), f67("if (typeof ", "string1", " != '", "string", "')", v167, f70("throw 'The value ' + ", "string1", " + ' is not a type ", "string", ".';", v167)), f67("if (typeof ", "string2", " != '", "string", "')", v167, f70("throw 'The value ' + ", "string2", " + ' is not a type ", "string", ".';", v167)), f67("return ", (function(){
            return "string1.concat(string2)";
        })(), ";", v167)), "})()");
    })(f110(v552, v551),f110(v553, v551));
})), cdr: v321}); 
var l195 = f3("FUNCALL");
v321 = ({car: f33(l195, (function (v557,v558){
    if (arguments.length < 2) throw 'too few arguments';
    var v556= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v556 = {car: arguments[i], cdr: v556};
    return f67("(", f110(v558, v557), ")(", f68(f45((function (v559){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return f110(v559, v557);
    }), v556), ", "), ")");
})), cdr: v321}); 
var l196 = f3("APPLY");
v321 = ({car: f33(l196, (function (v561,v562){
    if (arguments.length < 2) throw 'too few arguments';
    var v560= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v560 = {car: arguments[i], cdr: v560};
    return (f1(v560) !== v2 ? f67("(", f110(v562, v561), ")()") : (function(v563,v564){
        return f67("(function(){", v167, f70("var f = ", f110(v562, v561), ";", v167, "var args = [", f68(f45((function (v565){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f110(v565, v561);
        }), v563), ", "), "];", v167, "var tail = (", f110(v564, v561), ");", v167, f70("while (tail != ", f110(v2), "){", v167, "    args.push(tail.car);", v167, "    tail = tail.cdr;", v167, "}", v167, "return f.apply(this, args);", v167), "})()"));
    })(f56(v560),(function(){
        var tmp = f55(v560);
        return tmp === v2? v2: tmp.car;
    })()));
})), cdr: v321}); 
var l197 = f3("JS-EVAL");
v321 = ({car: f33(l197, (function (v566,v567){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v568){
        return f67("(function(){", v167, f70(f67("var ", "string", " = ", v568, ";", v167), f67("if (typeof ", "string", " != '", "string", "')", v167, f70("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", v167)), f67("return ", (function(){
            return "eval.apply(window, [string])";
        })(), ";", v167)), "})()");
    })(f110(v567, v566));
})), cdr: v321}); 
var l198 = f3("ERROR");
v321 = ({car: f33(l198, (function (v569,v570){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v571){
        return f67("(function (){ throw ", v571, "; })()");
    })(f110(v570, v569));
})), cdr: v321}); 
var l199 = f3("NEW");
v321 = ({car: f33(l199, (function (v572){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        return "{}";
    })();
})), cdr: v321}); 
var l200 = f3("GET");
v321 = ({car: f33(l200, (function (v573,v574,v575){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v576,v577){
        return f67("(function(){", v167, f70("var tmp = ", "(", v576, ")[", v577, "];", v167, "return tmp == undefined? ", f110(v2), ": tmp ;", v167), "})()");
    })(f110(v574, v573),f110(v575, v573));
})), cdr: v321}); 
var l201 = f3("SET");
v321 = ({car: f33(l201, (function (v578,v579,v580,v581){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v582,v583,v584){
        return f67("((", v582, ")[", v583, "] = ", v584, ")");
    })(f110(v579, v578),f110(v580, v578),f110(v581, v578));
})), cdr: v321}); 
var l202 = f3("IN");
v321 = ({car: f33(l202, (function (v585,v586,v587){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v588,v589){
        return f121(f67("((", v588, ") in (", v589, "))"));
    })(f110(v586, v585),f110(v587, v585));
})), cdr: v321}); 
var l203 = f3("FUNCTIONP");
v321 = ({car: f33(l203, (function (v590,v591){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v592){
        return f121(f67("(typeof ", v592, " == 'function')"));
    })(f110(v591, v590));
})), cdr: v321}); 
var l204 = f3("WRITE-STRING");
v321 = ({car: f33(l204, (function (v593,v594){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v595){
        return f67("(function(){", v167, f70(f67("var ", "x", " = ", v595, ";", v167), f67("if (typeof ", "x", " != '", "string", "')", v167, f70("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v167)), f67("return ", (function(){
            return "lisp.write(x)";
        })(), ";", v167)), "})()");
    })(f110(v594, v593));
})), cdr: v321}); 
var l206 = f3("MACROP");
var l205 = f3("MACRO");
var f123;
(function(){
    (function(){
        return f123 = (function(v596){
            ((v596)["fname"] = "MACROP");
            return v596;
        })((function (v597){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var tmp = v597;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?v3: v2) !== v2 ? ((f90(f104(v597, v276)) === l205)?v3: v2) : v2);
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
    return l206;
})(); 
var l208 = f3("LS-MACROEXPAND-1");
var l207 = f3("MACRO");
var f124;
(function(){
    (function(){
        return f124 = (function(v598){
            ((v598)["fname"] = "LS-MACROEXPAND-1");
            return v598;
        })((function (v599,v600){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (f123((function(){
                            var tmp = v599;
                            return tmp === v2? v2: tmp.car;
                        })()) !== v2 ? (function(v601){
                            return (((f90(v601) === l207)?v3: v2) !== v2 ? (function(){
                                var f = f118(f91(v601));
                                var args = [];
                                var tail = ((function(){
                                    var tmp = v599;
                                    return tmp === v2? v2: tmp.cdr;
                                })());
                                    while (tail != v2){
                                        args.push(tail.car);
                                        tail = tail.cdr;
                                    }
                                    return f.apply(this, args);
                                })() : v599);
                        })(f104((function(){
                            var tmp = v599;
                            return tmp === v2? v2: tmp.car;
                        })(), v276)) : v599);
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
    return l208;
})(); 
var l210 = f3("COMPILE-FUNCALL");
var l209 = f3("LAMBDA");
var f125;
(function(){
    (function(){
        return f125 = (function(v602){
            ((v602)["fname"] = "COMPILE-FUNCALL");
            return v602;
        })((function (v603,v604,v605){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var tmp = v603;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?v3: v2) !== v2 ? (function(){
                            return f67(f105(v603, v605), "(", f68(f45((function (v606){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return f110(v606, v605);
                            }), v604), ", "), ")");
                        })() : ((f36(v603) !== v2 ? (((function(){
                            var tmp = v603;
                            return tmp === v2? v2: tmp.car;
                        })() === l209)?v3: v2) : v2) !== v2 ? (function(){
                            return f67("(", f110(v603, v605), ")(", f68(f45((function (v607){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return f110(v607, v605);
                            }), v604), ", "), ")");
                        })() : (function(){
                            return (function (){ throw f67("Invalid function designator ", (v603).name); })();
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
    return l210;
})(); 
var l211 = f3("LS-COMPILE");
var f110;
(function(){
    (function(){
        return f110 = (function(v608){
            ((v608)["fname"] = "LS-COMPILE");
            return v608;
        })((function (v609,v610){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            switch(arguments.length){
            case 1:
            v610=f94();
            default: break;
            }
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var tmp = v609;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?v3: v2) !== v2 ? (function(){
                            return f102(v609, v610);
                        })() : (f51(v609) !== v2 ? (function(){
                            return f6(v609);
                        })() : (((typeof(v609) == "string")?v3: v2) !== v2 ? (function(){
                            return f67("\"", f72(v609), "\"");
                        })() : (f36(v609) !== v2 ? (function(){
                            return (f65((function(){
                                var tmp = v609;
                                return tmp === v2? v2: tmp.car;
                            })(), v321) !== v2 ? (function(v611){
                                return (function(){
                                    var f = v611;
                                    var args = [v610];
                                    var tail = ((function(){
                                        var tmp = v609;
                                        return tmp === v2? v2: tmp.cdr;
                                    })());
                                        while (tail != v2){
                                            args.push(tail.car);
                                            tail = tail.cdr;
                                        }
                                        return f.apply(this, args);
                                    })();
                            })(f30(f65((function(){
                                var tmp = v609;
                                return tmp === v2? v2: tmp.car;
                            })(), v321))) : (f123((function(){
                                var tmp = v609;
                                return tmp === v2? v2: tmp.car;
                            })()) !== v2 ? f110(f124(v609, v610), v610) : f125((function(){
                                var tmp = v609;
                                return tmp === v2? v2: tmp.car;
                            })(), (function(){
                                var tmp = v609;
                                return tmp === v2? v2: tmp.cdr;
                            })(), v610)));
                        })() : v2))));
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
    })();
    return l211;
})(); 
var l212 = f3("LS-COMPILE-TOPLEVEL");
var f126;
(function(){
    (function(){
        return f126 = (function(v612){
            ((v612)["fname"] = "LS-COMPILE-TOPLEVEL");
            return v612;
        })((function (v613){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        v311 = v2;
                        return (function(v614){
                            return (function(v615){
                                v311 = v2;
                                return v615;
                            })(f67(f68(f45((function (v616){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return f67(v616, ";", v167);
                            }), v311)), v614));
                        })(f110(v613));
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
    })();
    return l212;
})(); 
var l223 = f3("LS-COMPILE-TOPLEVEL");
var l222 = f3("EVAL");
var l221 = f3("PRINT-TO-STRING");
var l220 = f3("LS-READ-FROM-STRING");
var l219 = 140;
var l218 = 148;
var l217 = 213;
var l216 = 126;
var l215 = 622;
var l214 = {car: {car: {car: f3("*BLOCK-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v399", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*LITERAL-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v375", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*LAMBDA-LIST-KEYWORDS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v332", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*COMPILATIONS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v321", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*TOPLEVEL-COMPILATIONS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v311", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*FUNCTION-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v300", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*VARIABLE-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v280", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*ENVIRONMENT*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v276", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*COMPILATION-UNIT-CHECKS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v242", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*EOF*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v235", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*NEWLINE*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v167", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*GENSYM-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v12", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("T"), cdr: {car: f3("VARIABLE"), cdr: {car: "v3", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NIL"), cdr: {car: f3("VARIABLE"), cdr: {car: "v2", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*PACKAGE*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v1", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}}}}}}}}}}}}}, cdr: {car: {car: {car: f3("WITH-COMPILATION-UNIT"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROG1"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("SETQ"), cdr: {car: f3("*COMPILATION-UNIT-CHECKS*"), cdr: {car: f3("NIL"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("CLEAR-UNDECLARED-GLOBAL-BINDINGS"), cdr: f3("NIL")}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DOLIST"), cdr: {car: {car: f3("CHECK"), cdr: {car: f3("*COMPILATION-UNIT-CHECKS*"), cdr: f3("NIL")}}, cdr: {car: {car: f3("FUNCALL"), cdr: {car: f3("CHECK"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-COMPILE-TOPLEVEL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f126", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COMPILE-FUNCALL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f125", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-MACROEXPAND-1"), cdr: {car: f3("FUNCTION"), cdr: {car: "f124", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MACROP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f123", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NUM-OP-NUM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f122", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("TYPE-CHECK"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("DECLS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CONCAT"), cdr: {car: "(function(){", cdr: {car: f3("*NEWLINE*"), cdr: {car: {car: f3("INDENT"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("DECL"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CONCAT"), cdr: {car: "var ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: " = ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("THIRD"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: ";", cdr: {car: f3("*NEWLINE*"), cdr: f3("NIL")}}}}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("DECLS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("DECL"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CONCAT"), cdr: {car: "if (typeof ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: " != '", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: "')", cdr: {car: f3("*NEWLINE*"), cdr: {car: {car: f3("INDENT"), cdr: {car: "throw 'The value ' + ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: " + ' is not a type ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: ".';", cdr: {car: f3("*NEWLINE*"), cdr: f3("NIL")}}}}}}}, cdr: f3("NIL")}}}}}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("DECLS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("CONCAT"), cdr: {car: "return ", cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: ";", cdr: {car: f3("*NEWLINE*"), cdr: f3("NIL")}}}}}, cdr: f3("NIL")}}}}, cdr: {car: "})()", cdr: f3("NIL")}}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COMPILE-BOOL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f121", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFINE-BUILTIN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("DEFINE-COMPILATION"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ARG"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARG"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LS-COMPILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARG"), cdr: f3("NIL")}}, cdr: {car: f3("ENV"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("ARGS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE-EXPAND-1"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE-EXPAND"), cdr: {car: f3("FUNCTION"), cdr: {car: "f120", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE-EXPAND-1"), cdr: {car: f3("FUNCTION"), cdr: {car: "f119", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFINE-TRANSFORMATION"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("DEFINE-COMPILATION"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LS-COMPILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: {car: f3("ENV"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EVAL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f118", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LITERAL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f117", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LITERAL->JS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f116", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-REST-ARGUMENT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f115", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f114", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f113", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-REQUIRED-ARGUMENTS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f112", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LIST-UNTIL-KEYWORD"), cdr: {car: f3("FUNCTION"), cdr: {car: "f111", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFINE-COMPILATION"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PUSH"), cdr: {car: {car: f3("LIST"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ENV"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("*COMPILATIONS*"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-COMPILE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f110", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-COMPILE-BLOCK"), cdr: {car: f3("FUNCTION"), cdr: {car: "f109", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%COMPILE-DEFMACRO"), cdr: {car: f3("FUNCTION"), cdr: {car: "f108", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%COMPILE-DEFUN"), cdr: {car: f3("FUNCTION"), cdr: {car: "f107", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%COMPILE-DEFVAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f106", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-FUNCTION-TRANSLATION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f105", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-FUNCTION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f104", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EXTEND-LOCAL-ENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f103", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-VARIABLE-TRANSLATION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f102", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-VARIABLE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f101", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("GVARNAME"), cdr: {car: f3("FUNCTION"), cdr: {car: "f100", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CLEAR-UNDECLARED-GLOBAL-BINDINGS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f99", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-IN-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f98", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EXTEND-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f97", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PUSH-TO-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f96", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COPY-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f95", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAKE-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f94", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MARK-BINDING-AS-DECLARED"), cdr: {car: f3("FUNCTION"), cdr: {car: "f93", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-DECLARED"), cdr: {car: f3("FUNCTION"), cdr: {car: "f92", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-TRANSLATION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f91", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-TYPE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f90", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-NAME"), cdr: {car: f3("FUNCTION"), cdr: {car: "f89", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAKE-BINDING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f88", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-READ-FROM-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f87", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("READ-SHARP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f86", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("READ-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f85", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-READ"), cdr: {car: f3("FUNCTION"), cdr: {car: "f84", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%READ-LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f83", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SKIP-WHITESPACES-AND-COMMENTS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f82", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("READ-UNTIL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f81", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("TERMINALP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f80", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SKIP-WHITESPACES"), cdr: {car: f3("FUNCTION"), cdr: {car: "f79", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WHITESPACEP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f78", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%READ-CHAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f77", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%PEEK-CHAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f76", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAKE-STRING-STREAM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f75", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PRINT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f74", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WRITE-LINE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f73", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ESCAPE-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f72", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PRINT-TO-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f71", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INDENT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f70", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("JOIN-TRAILING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f69", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("JOIN"), cdr: {car: f3("FUNCTION"), cdr: {car: "f68", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONCAT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f67", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("STRING="), cdr: {car: f3("FUNCTION"), cdr: {car: "f66", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ASSOC"), cdr: {car: f3("FUNCTION"), cdr: {car: "f65", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EVERY"), cdr: {car: f3("FUNCTION"), cdr: {car: "f64", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PARSE-INTEGER"), cdr: {car: f3("FUNCTION"), cdr: {car: "f63", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SUBSEQ"), cdr: {car: f3("FUNCTION"), cdr: {car: "f62", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DIGIT-CHAR-P"), cdr: {car: f3("FUNCTION"), cdr: {car: "f61", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REMOVE-IF-NOT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f60", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REMOVE-IF"), cdr: {car: f3("FUNCTION"), cdr: {car: "f59", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REMOVE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f58", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MEMBER"), cdr: {car: f3("FUNCTION"), cdr: {car: "f57", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BUTLAST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f56", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f55", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f54", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MINUSP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f53", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PLUSP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f52", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTEGERP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f51", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CHAR="), cdr: {car: f3("FUNCTION"), cdr: {car: "f50", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CHAR-CODE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f49", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CODE-CHAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f48", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COPY-LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f47", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("IDENTITY"), cdr: {car: f3("FUNCTION"), cdr: {car: "f46", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAPCAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f45", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONCAT-TWO"), cdr: {car: f3("FUNCTION"), cdr: {car: "f44", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LENGTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f43", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LIST-LENGTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f42", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REVERSE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f41", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REVERSE-AUX"), cdr: {car: f3("FUNCTION"), cdr: {car: "f40", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("APPEND"), cdr: {car: f3("FUNCTION"), cdr: {car: "f39", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("APPEND-TWO"), cdr: {car: f3("FUNCTION"), cdr: {car: "f38", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFVAR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("&OPTIONAL"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("%DEFVAR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFUN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("%DEFUN"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("!REDUCE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f37", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LISTP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f36", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ENSURE-LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f35", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PROG1"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("VALUE"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("OR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("COND"), cdr: {car: {car: {car: f3("NULL"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("NULL"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("T"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("G"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G"), cdr: f3("NIL")}}, cdr: {car: {car: f3("OR"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("AND"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("COND"), cdr: {car: {car: {car: f3("NULL"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: f3("T"), cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("NULL"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("T"), cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("AND"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ECASE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: {car: f3("&REST"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CASE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("APPEND"), cdr: {car: f3("CLAUSULES"), cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: {car: f3("T"), cdr: {car: {car: f3("ERROR"), cdr: {car: "ECASE expression failed.", cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CASE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: {car: f3("&REST"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("!FORM"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("!FORM"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("COND"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CLAUSULE"), cdr: f3("NIL")}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("EQ"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("CLAUSULE"), cdr: f3("NIL")}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}, cdr: {car: f3("CLAUSULE"), cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: {car: f3("EQL"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("!FORM"), cdr: f3("NIL")}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("CLAUSULE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("CLAUSULE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COND"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("NULL"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("EQ"), cdr: {car: {car: f3("CAAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("COND"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DOTIMES"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ITER"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("G!TO"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: {car: {car: f3("VAR"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("TO"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("RESULT"), cdr: {car: {car: f3("THIRD"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("BLOCK"), cdr: {car: f3("NIL"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: 0, cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!TO"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("TO"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("%WHILE"), cdr: {car: {car: f3("<"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!TO"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("INCF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("RESULT"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DOLIST"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ITER"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("VAR"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("G!LIST"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("BLOCK"), cdr: {car: f3("NIL"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("%WHILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CAR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CDR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("THIRD"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("UNLESS"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CONDITION"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("CONDITION"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WHEN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CONDITION"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("CONDITION"), cdr: f3("NIL")}}, cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PUSH"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: {car: f3("PLACE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("PLACE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CONS"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("PLACE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DECF"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: {car: f3("&OPTIONAL"), cdr: {car: {car: f3("DELTA"), cdr: {car: 1, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("-"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("DELTA"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INCF"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: {car: f3("&OPTIONAL"), cdr: {car: {car: f3("DELTA"), cdr: {car: 1, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("+"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("DELTA"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ATOM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f34", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f33", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("FOURTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f32", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("THIRD"), cdr: {car: f3("FUNCTION"), cdr: {car: "f31", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SECOND"), cdr: {car: f3("FUNCTION"), cdr: {car: "f30", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("FIRST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f29", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CADDDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f28", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDDDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f27", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CADDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f26", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f25", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f24", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CADR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f23", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CAAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f22", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f21", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f20", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONSP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f19", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f18", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NOT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f17", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EQL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f16", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("TRUNCATE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f15", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ZEROP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f14", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("1-"), cdr: {car: f3("FUNCTION"), cdr: {car: "f13", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("1+"), cdr: {car: f3("FUNCTION"), cdr: {car: "f12", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("/"), cdr: {car: f3("FUNCTION"), cdr: {car: "f11", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*"), cdr: {car: f3("FUNCTION"), cdr: {car: "f10", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("-"), cdr: {car: f3("FUNCTION"), cdr: {car: "f9", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("+"), cdr: {car: f3("FUNCTION"), cdr: {car: "f8", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("="), cdr: {car: f3("FUNCTION"), cdr: {car: "f7", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTEGER-TO-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f6", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("GENSYM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f5", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("FIND-SYMBOL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f4", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTERN"), cdr: {car: f3("FUNCTION"), cdr: {car: "f3", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTERNP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f2", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WHILE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CONDITION"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("BLOCK"), cdr: {car: f3("NIL"), cdr: {car: {car: f3("%WHILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("CONDITION"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("RETURN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&OPTIONAL"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("RETURN-FROM"), cdr: {car: f3("NIL"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NULL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f1", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFUN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("%DEFUN"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%DEFUN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("EVAL-WHEN-COMPILE"), cdr: {car: {car: f3("%COMPILE-DEFUN"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("FSETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("NAMED-LAMBDA"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SYMBOL-NAME"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BLOCK"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NAMED-LAMBDA"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("X"), cdr: {car: {car: f3("GENSYM"), cdr: {car: "FN", cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("SET"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: "fname", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFVAR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("&OPTIONAL"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("%DEFVAR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%DEFVAR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("EVAL-WHEN-COMPILE"), cdr: {car: {car: f3("%COMPILE-DEFVAR"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFMACRO"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("EVAL-WHEN-COMPILE"), cdr: {car: {car: f3("%COMPILE-DEFMACRO"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: f3("NIL")}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("EQ"), cdr: {car: f3("X"), cdr: {car: {car: f3("QUOTE"), cdr: {car: f3("&BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: f3("&REST"), cdr: f3("NIL")}}, cdr: {car: f3("X"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("ARGS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}};
var l213 = f3("EVAL");
var f118;
(function(){
    v276 = l214;
    v280 = l215;
    v300 = l216;
    v375 = l217;
    v12 = l218;
    return v399 = l219;
})();
(function(){
    (function(){
        (function(){
            return f118 = (function(v617){
                ((v617)["fname"] = "EVAL");
                return v617;
            })((function (v618){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (function(v619){
                                return (function(){
                                    var string = v619;
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    return eval.apply(window, [string]);
                                })();
                            })((function(v620){
                                (function(){
                                    try {
                                        return (function(){
                                            return (function(v621,v622){
                                                (function(){
                                                    while(v621 !== v2){
                                                        v622 = (function(){
                                                            var tmp = v621;
                                                            return tmp === v2? v2: tmp.car;
                                                        })();
                                                        (v622)();
                                                        v621 = (function(){
                                                            var tmp = v621;
                                                            return tmp === v2? v2: tmp.cdr;
                                                        })();
                                                    }return v2;
                                                })();
                                                return v2;
                                            })(v242,v2);
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 140)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })();
                                return v620;
                            })((function(){
                                v242 = v2;
                                f99();
                                return f126(v618);
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
        })();
        return l213;
    })();
    return (function(){
        var string = f67("var lisp = {};", "lisp.read = ", f105(l220, v2), ";", v167, "lisp.print = ", f105(l221, v2), ";", v167, "lisp.eval = ", f105(l222, v2), ";", v167, "lisp.compile = ", f105(l223, v2), ";", v167, "lisp.evalString = function(str){", v167, "   return lisp.eval(lisp.read(str));", v167, "}", v167, "lisp.compileString = function(str){", v167, "   return lisp.compile(lisp.read(str));", v167, "}", v167);
        if (typeof string != 'string')
            throw 'The value ' + string + ' is not a type string.';
        return eval.apply(window, [string]);
    })();
})(); 
