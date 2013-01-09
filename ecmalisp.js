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
var l34 = f3("STRING=");
var f67;
var l33 = f3("ASSOC");
var f66;
var l32 = f3("EVERY");
var f65;
var l31 = f3("SOME");
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
                ((v156)["fname"] = "SOME");
                return v156;
            })((function (v157,v158){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (((typeof(v158) == "string")?v3: v2) !== v2 ? (function(){
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
                                                        })()) !== v2 ? (function(){
                                                            return (function(){ throw ({type: 'block', id: 65, value: v3, message: 'Return from unknown block SOME.'})})();
                                                        })() : v2);
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
                                    return v2;
                                })(0,f43(v158));
                            })() : (f36(v158) !== v2 ? (function(){
                                return (function(){
                                    try {
                                        return (function(){
                                            return (function(v161,v162){
                                                (function(){
                                                    while(v161 !== v2){
                                                        v162 = (function(){
                                                            var tmp = v161;
                                                            return tmp === v2? v2: tmp.car;
                                                        })();
                                                        ((v157)(v162) !== v2 ? (function(){
                                                            return (function(){ throw ({type: 'block', id: 67, value: v3, message: 'Return from unknown block NIL.'})})();
                                                        })() : v2);
                                                        v161 = (function(){
                                                            var tmp = v161;
                                                            return tmp === v2? v2: tmp.cdr;
                                                        })();
                                                    }return v2;
                                                })();
                                                return v2;
                                            })(v158,v2);
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 67)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })();
                            })() : (function(){
                                return (function (){ throw "Unknown sequence."; })();
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
        return l31;
    })();
    (function(){
        (function(){
            return f65 = (function(v163){
                ((v163)["fname"] = "EVERY");
                return v163;
            })((function (v164,v165){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (((typeof(v165) == "string")?v3: v2) !== v2 ? (function(){
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
                                                    })()?v3: v2) !== v2){
                                                        ((v164)((function(){
                                                            var string = v165;
                                                            var index = v166;
                                                            if (typeof string != 'string')
                                                                throw 'The value ' + string + ' is not a type string.';
                                                            if (typeof index != 'number')
                                                                throw 'The value ' + index + ' is not a type number.';
                                                            return string.charCodeAt(index);
                                                        })()) !== v2 ? v2 : (function(){
                                                            return (function(){ throw ({type: 'block', id: 68, value: v2, message: 'Return from unknown block EVERY.'})})();
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
                                    return v3;
                                })(0,f43(v165));
                            })() : (f36(v165) !== v2 ? (function(){
                                return (function(){
                                    try {
                                        return (function(){
                                            return (function(v168,v169){
                                                (function(){
                                                    while(v168 !== v2){
                                                        v169 = (function(){
                                                            var tmp = v168;
                                                            return tmp === v2? v2: tmp.car;
                                                        })();
                                                        ((v164)(v169) !== v2 ? v2 : (function(){
                                                            return (function(){ throw ({type: 'block', id: 70, value: v2, message: 'Return from unknown block NIL.'})})();
                                                        })());
                                                        v168 = (function(){
                                                            var tmp = v168;
                                                            return tmp === v2? v2: tmp.cdr;
                                                        })();
                                                    }return v2;
                                                })();
                                                return v3;
                                            })(v165,v2);
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
                                return (function (){ throw "Unknown sequence."; })();
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
        })();
        return l32;
    })();
    (function(){
        (function(){
            return f66 = (function(v170){
                ((v170)["fname"] = "ASSOC");
                return v170;
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
                                            while(v172 !== v2){
                                                (f16(v171, f22(v172)) !== v2 ? (function(){ throw ({type: 'block', id: 72, value: v2, message: 'Return from unknown block NIL.'})})() : v172 = (function(){
                                                    var tmp = v172;
                                                    return tmp === v2? v2: tmp.cdr;
                                                })());
                                            }return v2;
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
                                var tmp = v172;
                                return tmp === v2? v2: tmp.car;
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
            }));
        })();
        return l33;
    })();
    return (function(){
        (function(){
            return f67 = (function(v173){
                ((v173)["fname"] = "STRING=");
                return v173;
            })((function (v174,v175){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return ((v174 == v175)?v3: v2);
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
        return l34;
    })();
})(); 
var l35 = f3("*NEWLINE*");
var v176;
(function(){
    (function(){
        return v176 = (function(){
            var x = f48(10);
            if (typeof x != 'number')
                throw 'The value ' + x + ' is not a type number.';
            return String.fromCharCode(x);
        })();
    })();
    return l35;
})(); 
var l36 = f3("CONCAT");
var f68;
(function(){
    (function(){
        return f68 = (function(v177){
            ((v177)["fname"] = "CONCAT");
            return v177;
        })((function (){
            var v178= v2;
            for (var i = arguments.length-1; i>=0; i--)
                v178 = {car: arguments[i], cdr: v178};
            return (function(){
                try {
                    return (function(){
                        return f37(f44, v178, "");
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
    })();
    return l36;
})(); 
var l37 = f3("JOIN");
var f69;
(function(){
    (function(){
        return f69 = (function(v179){
            ((v179)["fname"] = "JOIN");
            return v179;
        })((function (v180,v181){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            switch(arguments.length){
            case 1:
            v181="";
            default: break;
            }
            return (function(){
                try {
                    return (function(){
                        return (f1(v180) !== v2 ? (function(){
                            return "";
                        })() : (f1((function(){
                            var tmp = v180;
                            return tmp === v2? v2: tmp.cdr;
                        })()) !== v2 ? (function(){
                            return (function(){
                                var tmp = v180;
                                return tmp === v2? v2: tmp.car;
                            })();
                        })() : (function(){
                            return f68((function(){
                                var tmp = v180;
                                return tmp === v2? v2: tmp.car;
                            })(), v181, f69((function(){
                                var tmp = v180;
                                return tmp === v2? v2: tmp.cdr;
                            })(), v181));
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
    return l37;
})(); 
var l38 = f3("JOIN-TRAILING");
var f70;
(function(){
    (function(){
        return f70 = (function(v182){
            ((v182)["fname"] = "JOIN-TRAILING");
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
                        return (f1(v183) !== v2 ? "" : f68((function(){
                            var tmp = v183;
                            return tmp === v2? v2: tmp.car;
                        })(), v184, f70((function(){
                            var tmp = v183;
                            return tmp === v2? v2: tmp.cdr;
                        })(), v184)));
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
    return l38;
})(); 
var l39 = f3("INDENT");
var f71;
(function(){
    (function(){
        return f71 = (function(v185){
            ((v185)["fname"] = "INDENT");
            return v185;
        })((function (){
            var v186= v2;
            for (var i = arguments.length-1; i>=0; i--)
                v186 = {car: arguments[i], cdr: v186};
            return (function(){
                try {
                    return (function(){
                        return (function(v187){
                            return (function(v188,v189,v190){
                                (f52(v190) !== v2 ? (function(){
                                    return v188 = "    ";
                                })() : v2);
                                (function(){
                                    try {
                                        return (function(){
                                            return (function(){
                                                while(((function(){
                                                    var x = v189;
                                                    var y = v190;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x<y;
                                                })()?v3: v2) !== v2){
                                                    v188 = f68(v188, ((f50((function(){
                                                        var string = v187;
                                                        var index = v189;
                                                        if (typeof string != 'string')
                                                            throw 'The value ' + string + ' is not a type string.';
                                                        if (typeof index != 'number')
                                                            throw 'The value ' + index + ' is not a type number.';
                                                        return string.charCodeAt(index);
                                                    })(), 10) !== v2 ? (((function(){
                                                        var x = v189;
                                                        var y = f13(v190);
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        if (typeof y != 'number')
                                                            throw 'The value ' + y + ' is not a type number.';
                                                        return x<y;
                                                    })()?v3: v2) !== v2 ? f17(f50((function(){
                                                        var string = v187;
                                                        var index = f12(v189);
                                                        if (typeof string != 'string')
                                                            throw 'The value ' + string + ' is not a type string.';
                                                        if (typeof index != 'number')
                                                            throw 'The value ' + index + ' is not a type number.';
                                                        return string.charCodeAt(index);
                                                    })(), 10)) : v2) : v2) !== v2 ? f68((function(){
                                                        var x = 10;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        return String.fromCharCode(x);
                                                    })(), "    ") : f62(v187, v189, f12(v189))));
                                                    v189 = (function(){
                                                        var x = v189;
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
                                        if (cf.type == 'block' && cf.id == 78)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })();
                                return v188;
                            })("",0,f43(v187));
                        })(f69(v186));
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
    return l39;
})(); 
var l40 = f3("INTEGER-TO-STRING");
var f6;
(function(){
    (function(){
        return f6 = (function(v191){
            ((v191)["fname"] = "INTEGER-TO-STRING");
            return v191;
        })((function (v192){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (f14(v192) !== v2 ? (function(){
                            return "0";
                        })() : (f53(v192) !== v2 ? (function(){
                            return f68("-", f6((function(){
                                var x = 0;
                                var y = v192;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x-y;
                            })()));
                        })() : (function(){
                            return (function(v193){
                                (function(){
                                    try {
                                        return (function(){
                                            return (function(){
                                                while(f17(f14(v192)) !== v2){
                                                    v193 = ({car: (function(){
                                                        var x = v192;
                                                        var y = 10;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        if (typeof y != 'number')
                                                            throw 'The value ' + y + ' is not a type number.';
                                                        return x%y;
                                                    })(), cdr: v193});
                                                    v192 = f15(v192, 10);
                                                }return v2;
                                            })();
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 80)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })();
                                return f69(f45((function (v194){
                                    if (arguments.length < 1) throw 'too few arguments';
                                    if (arguments.length > 1) throw 'too many arguments';
                                    return (function(){
                                        var x = (function(){
                                            var string = "0123456789";
                                            var index = v194;
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
                                }), v193));
                            })(v2);
                        })()));
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
    return l40;
})(); 
var l41 = f3("JS!SELFCALL");
var f72;
(function(){
    (function(){
        return f72 = (function(v195){
            ((v195)["fname"] = "JS!SELFCALL");
            return v195;
        })((function (){
            var v196= v2;
            for (var i = arguments.length-1; i>=0; i--)
                v196 = {car: arguments[i], cdr: v196};
            return (function(){
                try {
                    return (function(){
                        return f68("(function(){", v176, (function(){
                            var f = f71;
                            var args = [];
                            var tail = (v196);
                                while (tail != v2){
                                    args.push(tail.car);
                                    tail = tail.cdr;
                                }
                                return f.apply(this, args);
                            })(), "})()");
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
    return l41;
})(); 
var l44 = f3("PRINT");
var f76;
var l43 = f3("WRITE-LINE");
var f75;
var l42 = f3("PRIN1-TO-STRING");
var f73;
(function(){
    (function(){
        (function(){
            return f73 = (function(v197){
                ((v197)["fname"] = "PRIN1-TO-STRING");
                return v197;
            })((function (v198){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (((function(){
                                var tmp = v198;
                                return (typeof tmp == 'object' && 'name' in tmp);
                            })()?v3: v2) !== v2 ? (function(){
                                return (v198).name;
                            })() : (f51(v198) !== v2 ? (function(){
                                return f6(v198);
                            })() : (((typeof(v198) == "string")?v3: v2) !== v2 ? (function(){
                                return f68("\"", f74(v198), "\"");
                            })() : (((typeof v198 == 'function')?v3: v2) !== v2 ? (function(){
                                return (function(v199){
                                    return (v199 !== v2 ? f68("#<FUNCTION ", v199, ">") : f68("#<FUNCTION>"));
                                })((function(){
                                    var tmp = (v198)["fname"];
                                    return tmp == undefined? v2: tmp ;
                                })());
                            })() : (f36(v198) !== v2 ? (function(){
                                return f68("(", f70(f45(f73, f56(v198)), " "), (function(v200){
                                    return (f1((function(){
                                        var tmp = v200;
                                        return tmp === v2? v2: tmp.cdr;
                                    })()) !== v2 ? f73((function(){
                                        var tmp = v200;
                                        return tmp === v2? v2: tmp.car;
                                    })()) : f68(f73((function(){
                                        var tmp = v200;
                                        return tmp === v2? v2: tmp.car;
                                    })()), " . ", f73((function(){
                                        var tmp = v200;
                                        return tmp === v2? v2: tmp.cdr;
                                    })())));
                                })(f55(v198)), ")");
                            })() : v2)))));
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
        return l42;
    })();
    (function(){
        (function(){
            return f75 = (function(v201){
                ((v201)["fname"] = "WRITE-LINE");
                return v201;
            })((function (v202){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            (function(){
                                var x = v202;
                                if (typeof x != 'string')
                                    throw 'The value ' + x + ' is not a type string.';
                                return lisp.write(x);
                            })();
                            (function(){
                                var x = v176;
                                if (typeof x != 'string')
                                    throw 'The value ' + x + ' is not a type string.';
                                return lisp.write(x);
                            })();
                            return v202;
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
        return l43;
    })();
    return (function(){
        (function(){
            return f76 = (function(v203){
                ((v203)["fname"] = "PRINT");
                return v203;
            })((function (v204){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            f75(f73(v204));
                            return v204;
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
        return l44;
    })();
})(); 
var l45 = f3("MAKE-STRING-STREAM");
var f77;
(function(){
    (function(){
        return f77 = (function(v205){
            ((v205)["fname"] = "MAKE-STRING-STREAM");
            return v205;
        })((function (v206){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return ({car: v206, cdr: 0});
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
    })();
    return l45;
})(); 
var l46 = f3("%PEEK-CHAR");
var f78;
(function(){
    (function(){
        return f78 = (function(v207){
            ((v207)["fname"] = "%PEEK-CHAR");
            return v207;
        })((function (v208){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var x = (function(){
                                var tmp = v208;
                                return tmp === v2? v2: tmp.cdr;
                            })();
                            var y = f43((function(){
                                var tmp = v208;
                                return tmp === v2? v2: tmp.car;
                            })());
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x<y;
                        })()?v3: v2) !== v2 ? (function(){
                            var string = (function(){
                                var tmp = v208;
                                return tmp === v2? v2: tmp.car;
                            })();
                            var index = (function(){
                                var tmp = v208;
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
                    if (cf.type == 'block' && cf.id == 86)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        }));
    })();
    return l46;
})(); 
var l47 = f3("%READ-CHAR");
var f79;
(function(){
    (function(){
        return f79 = (function(v209){
            ((v209)["fname"] = "%READ-CHAR");
            return v209;
        })((function (v210){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var x = (function(){
                                var tmp = v210;
                                return tmp === v2? v2: tmp.cdr;
                            })();
                            var y = f43((function(){
                                var tmp = v210;
                                return tmp === v2? v2: tmp.car;
                            })());
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x<y;
                        })()?v3: v2) !== v2 ? (function(v211){
                            (function(){
                                var x = v210;
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.cdr = f12((function(){
                                    var tmp = v210;
                                    return tmp === v2? v2: tmp.cdr;
                                })()));
                            })();
                            return v211;
                        })((function(){
                            var string = (function(){
                                var tmp = v210;
                                return tmp === v2? v2: tmp.car;
                            })();
                            var index = (function(){
                                var tmp = v210;
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
                    if (cf.type == 'block' && cf.id == 87)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        }));
    })();
    return l47;
})(); 
var l48 = f3("WHITESPACEP");
var f80;
(function(){
    (function(){
        return f80 = (function(v212){
            ((v212)["fname"] = "WHITESPACEP");
            return v212;
        })((function (v213){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v214){
                            return (v214 !== v2 ? v214 : (function(v215){
                                return (v215 !== v2 ? v215 : f50(v213, 9));
                            })(f50(v213, 10)));
                        })(f50(v213, 32));
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
    return l48;
})(); 
var l49 = f3("SKIP-WHITESPACES");
var f81;
(function(){
    (function(){
        return f81 = (function(v216){
            ((v216)["fname"] = "SKIP-WHITESPACES");
            return v216;
        })((function (v217){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v218){
                            v218 = f78(v217);
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while((v218 !== v2 ? f80(v218) : v2) !== v2){
                                                f79(v217);
                                                v218 = f78(v217);
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
    return l49;
})(); 
var l50 = f3("TERMINALP");
var f82;
(function(){
    (function(){
        return f82 = (function(v219){
            ((v219)["fname"] = "TERMINALP");
            return v219;
        })((function (v220){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v221){
                            return (v221 !== v2 ? v221 : (function(v222){
                                return (v222 !== v2 ? v222 : (function(v223){
                                    return (v223 !== v2 ? v223 : f50(40, v220));
                                })(f50(41, v220)));
                            })(f80(v220)));
                        })(f1(v220));
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
    return l50;
})(); 
var l51 = f3("READ-UNTIL");
var f83;
(function(){
    (function(){
        return f83 = (function(v224){
            ((v224)["fname"] = "READ-UNTIL");
            return v224;
        })((function (v225,v226){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v227,v228){
                            v228 = f78(v225);
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while((v228 !== v2 ? f17((v226)(v228)) : v2) !== v2){
                                                v227 = f68(v227, (function(){
                                                    var x = v228;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    return String.fromCharCode(x);
                                                })());
                                                f79(v225);
                                                v228 = f78(v225);
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
                            return v227;
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
    return l51;
})(); 
var l52 = f3("SKIP-WHITESPACES-AND-COMMENTS");
var f84;
(function(){
    (function(){
        return f84 = (function(v229){
            ((v229)["fname"] = "SKIP-WHITESPACES-AND-COMMENTS");
            return v229;
        })((function (v230){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v231){
                            f81(v230);
                            v231 = f78(v230);
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while((v231 !== v2 ? f50(v231, 59) : v2) !== v2){
                                                f83(v230, (function (v232){
                                                    if (arguments.length < 1) throw 'too few arguments';
                                                    if (arguments.length > 1) throw 'too many arguments';
                                                    return f50(v232, 10);
                                                }));
                                                f81(v230);
                                                v231 = f78(v230);
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
    return l52;
})(); 
var l53 = f3("%READ-LIST");
var f85;
(function(){
    (function(){
        return f85 = (function(v233){
            ((v233)["fname"] = "%READ-LIST");
            return v233;
        })((function (v234){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        f84(v234);
                        return (function(v235){
                            return (f1(v235) !== v2 ? (function(){
                                return (function (){ throw "Unspected EOF"; })();
                            })() : (f50(v235, 41) !== v2 ? (function(){
                                f79(v234);
                                return v2;
                            })() : (f50(v235, 46) !== v2 ? (function(){
                                f79(v234);
                                return (function(v236){
                                    f84(v234);
                                    (f50(f79(v234), 41) !== v2 ? v2 : (function(){
                                        return (function (){ throw "')' was expected."; })();
                                    })());
                                    return v236;
                                })(f86(v234));
                            })() : (function(){
                                return ({car: f86(v234), cdr: f85(v234)});
                            })())));
                        })(f78(v234));
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
    return l53;
})(); 
var l54 = f3("READ-STRING");
var f87;
(function(){
    (function(){
        return f87 = (function(v237){
            ((v237)["fname"] = "READ-STRING");
            return v237;
        })((function (v238){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v239,v240){
                            v240 = f79(v238);
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(f17(f16(v240, 34)) !== v2){
                                                (f1(v240) !== v2 ? (function(){
                                                    return (function (){ throw "Unexpected EOF"; })();
                                                })() : v2);
                                                (f16(v240, 92) !== v2 ? (function(){
                                                    return v240 = f79(v238);
                                                })() : v2);
                                                v239 = f68(v239, (function(){
                                                    var x = v240;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    return String.fromCharCode(x);
                                                })());
                                                v240 = f79(v238);
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
                            return v239;
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
    return l54;
})(); 
var l59 = f3("READ-SHARP");
var l58 = 43;
var l57 = 92;
var l56 = f3("FUNCTION");
var l55 = 39;
var f88;
(function(){
    (function(){
        return f88 = (function(v241){
            ((v241)["fname"] = "READ-SHARP");
            return v241;
        })((function (v242){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        f79(v242);
                        return (function(v243){
                            return (f16(v243, l55) !== v2 ? (function(){
                                return f33(l56, f86(v242));
                            })() : (f16(v243, l57) !== v2 ? (function(){
                                return (function(v244){
                                    return (f67(v244, "space") !== v2 ? (function(){
                                        return f49(32);
                                    })() : (f67(v244, "tab") !== v2 ? (function(){
                                        return f49(9);
                                    })() : (f67(v244, "newline") !== v2 ? (function(){
                                        return f49(10);
                                    })() : (function(){
                                        return f49((function(){
                                            var string = v244;
                                            var index = 0;
                                            if (typeof string != 'string')
                                                throw 'The value ' + string + ' is not a type string.';
                                            if (typeof index != 'number')
                                                throw 'The value ' + index + ' is not a type number.';
                                            return string.charCodeAt(index);
                                        })());
                                    })())));
                                })(f68((function(){
                                    var x = f79(v242);
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    return String.fromCharCode(x);
                                })(), f83(v242, f82)));
                            })() : (f16(v243, l58) !== v2 ? (function(){
                                return (function(v245){
                                    return (f67(v245, "common-lisp") !== v2 ? (function(){
                                        f86(v242);
                                        return f86(v242);
                                    })() : (f67(v245, "ecmalisp") !== v2 ? (function(){
                                        return f86(v242);
                                    })() : (function(){
                                        return (function (){ throw "Unknown reader form."; })();
                                    })()));
                                })(f83(v242, f82));
                            })() : (function(){
                                return (function (){ throw "ECASE expression failed."; })();
                            })())));
                        })(f79(v242));
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
    return l59;
})(); 
var l60 = f3("*EOF*");
var v246;
(function(){
    (function(){
        return v246 = (function(){
            var name = "EOF";
            if (typeof name != 'string')
                throw 'The value ' + name + ' is not a type string.';
            return ({name: name});
        })();
    })();
    return l60;
})(); 
var l65 = f3("LS-READ");
var l64 = f3("UNQUOTE");
var l63 = f3("UNQUOTE-SPLICING");
var l62 = f3("BACKQUOTE");
var l61 = f3("QUOTE");
var f86;
(function(){
    (function(){
        return f86 = (function(v247){
            ((v247)["fname"] = "LS-READ");
            return v247;
        })((function (v248){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        f84(v248);
                        return (function(v249){
                            return (f1(v249) !== v2 ? (function(){
                                return v246;
                            })() : (f50(v249, 40) !== v2 ? (function(){
                                f79(v248);
                                return f85(v248);
                            })() : (f50(v249, 39) !== v2 ? (function(){
                                f79(v248);
                                return f33(l61, f86(v248));
                            })() : (f50(v249, 96) !== v2 ? (function(){
                                f79(v248);
                                return f33(l62, f86(v248));
                            })() : (f50(v249, 34) !== v2 ? (function(){
                                f79(v248);
                                return f87(v248);
                            })() : (f50(v249, 44) !== v2 ? (function(){
                                f79(v248);
                                return (f16(f78(v248), 64) !== v2 ? (function(){
                                    f79(v248);
                                    return f33(l63, f86(v248));
                                })() : f33(l64, f86(v248)));
                            })() : (f50(v249, 35) !== v2 ? (function(){
                                return f88(v248);
                            })() : (function(){
                                return (function(v250){
                                    return (f65(f61, v250) !== v2 ? f63(v250) : f3((function(){
                                        var x = v250;
                                        if (typeof x != 'string')
                                            throw 'The value ' + x + ' is not a type string.';
                                        return x.toUpperCase();
                                    })()));
                                })(f83(v248, f82));
                            })())))))));
                        })(f78(v248));
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
    return l65;
})(); 
var l66 = f3("LS-READ-FROM-STRING");
var f89;
(function(){
    (function(){
        return f89 = (function(v251){
            ((v251)["fname"] = "LS-READ-FROM-STRING");
            return v251;
        })((function (v252){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f86(f77(v252));
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
    return l66;
})(); 
var l68 = f3("*COMPILATION-UNIT-CHECKS*");
var l67 = f3("NIL");
var v253;
(function(){
    (function(){
        return v253 = l67;
    })();
    return l68;
})(); 
var l69 = f3("MAKE-BINDING");
var f90;
(function(){
    (function(){
        return f90 = (function(v254){
            ((v254)["fname"] = "MAKE-BINDING");
            return v254;
        })((function (v255,v256,v257,v258){
            if (arguments.length < 4) throw 'too few arguments';
            if (arguments.length > 4) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f33(v255, v256, v257, v258);
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
    return l69;
})(); 
var l70 = f3("BINDING-NAME");
var f91;
(function(){
    (function(){
        return f91 = (function(v259){
            ((v259)["fname"] = "BINDING-NAME");
            return v259;
        })((function (v260){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f29(v260);
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
    return l70;
})(); 
var l71 = f3("BINDING-TYPE");
var f92;
(function(){
    (function(){
        return f92 = (function(v261){
            ((v261)["fname"] = "BINDING-TYPE");
            return v261;
        })((function (v262){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f30(v262);
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
    return l71;
})(); 
var l72 = f3("BINDING-TRANSLATION");
var f93;
(function(){
    (function(){
        return f93 = (function(v263){
            ((v263)["fname"] = "BINDING-TRANSLATION");
            return v263;
        })((function (v264){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f31(v264);
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
    return l72;
})(); 
var l73 = f3("BINDING-DECLARED");
var f94;
(function(){
    (function(){
        return f94 = (function(v265){
            ((v265)["fname"] = "BINDING-DECLARED");
            return v265;
        })((function (v266){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (v266 !== v2 ? f32(v266) : v2);
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
    return l73;
})(); 
var l74 = f3("MARK-BINDING-AS-DECLARED");
var f95;
(function(){
    (function(){
        return f95 = (function(v267){
            ((v267)["fname"] = "MARK-BINDING-AS-DECLARED");
            return v267;
        })((function (v268){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var x = f27(v268);
                            if (typeof x != 'object')
                                throw 'The value ' + x + ' is not a type object.';
                            return (x.car = v3);
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
        }));
    })();
    return l74;
})(); 
var l75 = f3("MAKE-LEXENV");
var f96;
(function(){
    (function(){
        return f96 = (function(v269){
            ((v269)["fname"] = "MAKE-LEXENV");
            return v269;
        })((function (){
            if (arguments.length > 0) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f33(v2, v2, v2, v2);
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
    return l75;
})(); 
var l76 = f3("COPY-LEXENV");
var f97;
(function(){
    (function(){
        return f97 = (function(v270){
            ((v270)["fname"] = "COPY-LEXENV");
            return v270;
        })((function (v271){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f47(v271);
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
    return l76;
})(); 
var l81 = f3("PUSH-TO-LEXENV");
var l80 = f3("GOTAG");
var l79 = f3("BLOCK");
var l78 = f3("FUNCTION");
var l77 = f3("VARIABLE");
var f98;
(function(){
    (function(){
        return f98 = (function(v272){
            ((v272)["fname"] = "PUSH-TO-LEXENV");
            return v272;
        })((function (v273,v274,v275){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v276){
                            return (f16(v276, l77) !== v2 ? (function(){
                                return (function(){
                                    var x = v274;
                                    if (typeof x != 'object')
                                        throw 'The value ' + x + ' is not a type object.';
                                    return (x.car = ({car: v273, cdr: (function(){
                                        var tmp = v274;
                                        return tmp === v2? v2: tmp.car;
                                    })()}));
                                })();
                            })() : (f16(v276, l78) !== v2 ? (function(){
                                return (function(){
                                    var x = (function(){
                                        var tmp = v274;
                                        return tmp === v2? v2: tmp.cdr;
                                    })();
                                    if (typeof x != 'object')
                                        throw 'The value ' + x + ' is not a type object.';
                                    return (x.car = ({car: v273, cdr: f23(v274)}));
                                })();
                            })() : (f16(v276, l79) !== v2 ? (function(){
                                return (function(){
                                    var x = f25(v274);
                                    if (typeof x != 'object')
                                        throw 'The value ' + x + ' is not a type object.';
                                    return (x.car = ({car: v273, cdr: f26(v274)}));
                                })();
                            })() : (f16(v276, l80) !== v2 ? (function(){
                                return (function(){
                                    var x = f27(v274);
                                    if (typeof x != 'object')
                                        throw 'The value ' + x + ' is not a type object.';
                                    return (x.car = ({car: v273, cdr: f28(v274)}));
                                })();
                            })() : (function(){
                                return (function (){ throw "ECASE expression failed."; })();
                            })()))));
                        })(v275);
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
    return l81;
})(); 
var l82 = f3("EXTEND-LEXENV");
var f99;
(function(){
    (function(){
        return f99 = (function(v277){
            ((v277)["fname"] = "EXTEND-LEXENV");
            return v277;
        })((function (v278,v279,v280){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v281){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v282,v283){
                                            (function(){
                                                while(v282 !== v2){
                                                    v283 = (function(){
                                                        var tmp = v282;
                                                        return tmp === v2? v2: tmp.car;
                                                    })();
                                                    f98(v283, v281, v280);
                                                    v282 = (function(){
                                                        var tmp = v282;
                                                        return tmp === v2? v2: tmp.cdr;
                                                    })();
                                                }return v2;
                                            })();
                                            return v281;
                                        })(f41(v278),v2);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 112)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })(f97(v279));
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
    return l82;
})(); 
var l87 = f3("LOOKUP-IN-LEXENV");
var l86 = f3("GOTAG");
var l85 = f3("BLOCK");
var l84 = f3("FUNCTION");
var l83 = f3("VARIABLE");
var f100;
(function(){
    (function(){
        return f100 = (function(v284){
            ((v284)["fname"] = "LOOKUP-IN-LEXENV");
            return v284;
        })((function (v285,v286,v287){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f66(v285, (function(v288){
                            return (f16(v288, l83) !== v2 ? (function(){
                                return f29(v286);
                            })() : (f16(v288, l84) !== v2 ? (function(){
                                return f30(v286);
                            })() : (f16(v288, l85) !== v2 ? (function(){
                                return f31(v286);
                            })() : (f16(v288, l86) !== v2 ? (function(){
                                return f32(v286);
                            })() : (function(){
                                return (function (){ throw "ECASE expression failed."; })();
                            })()))));
                        })(v287));
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
    return l87;
})(); 
var l88 = f3("*ENVIRONMENT*");
var v289;
(function(){
    (function(){
        return v289 = f96();
    })();
    return l88;
})(); 
var l89 = f3("CLEAR-UNDECLARED-GLOBAL-BINDINGS");
var f101;
(function(){
    (function(){
        return f101 = (function(v290){
            ((v290)["fname"] = "CLEAR-UNDECLARED-GLOBAL-BINDINGS");
            return v290;
        })((function (){
            if (arguments.length > 0) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v291,v292){
                            return v289 = f33(v291, v292, f31(v289));
                        })(f29(v289),f30(v289));
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
    return l89;
})(); 
var l90 = f3("*VARIABLE-COUNTER*");
var v293;
(function(){
    (function(){
        return v293 = 0;
    })();
    return l90;
})(); 
var l91 = f3("GVARNAME");
var f102;
(function(){
    (function(){
        return f102 = (function(v294){
            ((v294)["fname"] = "GVARNAME");
            return v294;
        })((function (v295){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f68("v", f6(v293 = (function(){
                            var x = v293;
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
                    if (cf.type == 'block' && cf.id == 115)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        }));
    })();
    return l91;
})(); 
var l97 = f3("LOOKUP-VARIABLE");
var l96 = f3("VARIABLE");
var l95 = f3("VARIABLE");
var l94 = f3("VARIABLE");
var l93 = f3("VARIABLE");
var l92 = f3("VARIABLE");
var f103;
(function(){
    (function(){
        return f103 = (function(v296){
            ((v296)["fname"] = "LOOKUP-VARIABLE");
            return v296;
        })((function (v297,v298){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v299){
                            return (v299 !== v2 ? v299 : (function(v300){
                                return (v300 !== v2 ? v300 : (function(v301,v302){
                                    f98(v302, v289, l92);
                                    v253 = ({car: (function (){
                                        if (arguments.length > 0) throw 'too many arguments';
                                        return (f100(v297, v289, l93) !== v2 ? v2 : (function(){
                                            return (function (){ throw f68("Undefined variable `", v301, "'"); })();
                                        })());
                                    }), cdr: v253});
                                    return v302;
                                })((v297).name,f90(v297, l94, f102(v297), v2)));
                            })(f100(v297, v289, l95)));
                        })(f100(v297, v298, l96));
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
    return l97;
})(); 
var l98 = f3("LOOKUP-VARIABLE-TRANSLATION");
var f104;
(function(){
    (function(){
        return f104 = (function(v303){
            ((v303)["fname"] = "LOOKUP-VARIABLE-TRANSLATION");
            return v303;
        })((function (v304,v305){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f93(f103(v304, v305));
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
    return l98;
})(); 
var l101 = f3("EXTEND-LOCAL-ENV");
var l100 = f3("VARIABLE");
var l99 = f3("VARIABLE");
var f105;
(function(){
    (function(){
        return f105 = (function(v306){
            ((v306)["fname"] = "EXTEND-LOCAL-ENV");
            return v306;
        })((function (v307,v308){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v309){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v310,v311){
                                            (function(){
                                                while(v310 !== v2){
                                                    v311 = (function(){
                                                        var tmp = v310;
                                                        return tmp === v2? v2: tmp.car;
                                                    })();
                                                    (function(v312){
                                                        return f98(v312, v309, l99);
                                                    })(f90(v311, l100, f102(v311), v3));
                                                    v310 = (function(){
                                                        var tmp = v310;
                                                        return tmp === v2? v2: tmp.cdr;
                                                    })();
                                                }return v2;
                                            })();
                                            return v309;
                                        })(v307,v2);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 119)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })(f97(v308));
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
    return l101;
})(); 
var l102 = f3("*FUNCTION-COUNTER*");
var v313;
(function(){
    (function(){
        return v313 = 0;
    })();
    return l102;
})(); 
var l108 = f3("LOOKUP-FUNCTION");
var l107 = f3("FUNCTION");
var l106 = f3("FUNCTION");
var l105 = f3("FUNCTION");
var l104 = f3("FUNCTION");
var l103 = f3("FUNCTION");
var f106;
(function(){
    (function(){
        return f106 = (function(v314){
            ((v314)["fname"] = "LOOKUP-FUNCTION");
            return v314;
        })((function (v315,v316){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v317){
                            return (v317 !== v2 ? v317 : (function(v318){
                                return (v318 !== v2 ? v318 : (function(v319,v320){
                                    f98(v320, v289, l103);
                                    v253 = ({car: (function (){
                                        if (arguments.length > 0) throw 'too many arguments';
                                        return (f94(f100(v315, v289, l104)) !== v2 ? v2 : (function(){
                                            return (function (){ throw f68("Undefined function `", v319, "'"); })();
                                        })());
                                    }), cdr: v253});
                                    return v320;
                                })((v315).name,f90(v315, l105, f68("f", f6(v313 = (function(){
                                    var x = v313;
                                    var y = 1;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    if (typeof y != 'number')
                                        throw 'The value ' + y + ' is not a type number.';
                                    return x+y;
                                })())), v2)));
                            })(f100(v315, v289, l106)));
                        })(f100(v315, v316, l107));
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
    return l108;
})(); 
var l109 = f3("LOOKUP-FUNCTION-TRANSLATION");
var f107;
(function(){
    (function(){
        return f107 = (function(v321){
            ((v321)["fname"] = "LOOKUP-FUNCTION-TRANSLATION");
            return v321;
        })((function (v322,v323){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f93(f106(v322, v323));
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
    return l109;
})(); 
var l110 = f3("*TOPLEVEL-COMPILATIONS*");
var v324;
(function(){
    (function(){
        return v324 = v2;
    })();
    return l110;
})(); 
var l111 = f3("%COMPILE-DEFVAR");
var f108;
(function(){
    (function(){
        return f108 = (function(v325){
            ((v325)["fname"] = "%COMPILE-DEFVAR");
            return v325;
        })((function (v326){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v327){
                            f95(v327);
                            return v324 = ({car: f68("var ", f93(v327)), cdr: v324});
                        })(f103(v326, v289));
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
    return l111;
})(); 
var l112 = f3("%COMPILE-DEFUN");
var f109;
(function(){
    (function(){
        return f109 = (function(v328){
            ((v328)["fname"] = "%COMPILE-DEFUN");
            return v328;
        })((function (v329){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v330){
                            f95(v330);
                            return v324 = ({car: f68("var ", f93(v330)), cdr: v324});
                        })(f106(v329, v289));
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
    return l112;
})(); 
var l115 = f3("%COMPILE-DEFMACRO");
var l114 = f3("FUNCTION");
var l113 = f3("MACRO");
var f110;
(function(){
    (function(){
        return f110 = (function(v331){
            ((v331)["fname"] = "%COMPILE-DEFMACRO");
            return v331;
        })((function (v332,v333){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f98(f90(v332, l113, v333, v3), v289, l114);
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
    return l115;
})(); 
var l116 = f3("*COMPILATIONS*");
var v334;
(function(){
    (function(){
        return v334 = v2;
    })();
    return l116;
})(); 
var l117 = f3("LS-COMPILE-BLOCK");
var f111;
(function(){
    (function(){
        return f111 = (function(v335){
            ((v335)["fname"] = "LS-COMPILE-BLOCK");
            return v335;
        })((function (v336,v337){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f70(f59((function (v338){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return (function(v339){
                                return (v339 !== v2 ? v339 : (((typeof(v338) == "string")?v3: v2) !== v2 ? f14(f43(v338)) : v2));
                            })(f1(v338));
                        }), f45((function (v340){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return f112(v340, v337);
                        }), v336)), f68(";", v176));
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
    return l117;
})(); 
var l118 = f3("IF");
v334 = ({car: f33(l118, (function (v341,v342,v343,v344){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return f68("(", f112(v342, v341), " !== ", f112(v2), " ? ", f112(v343, v341), " : ", f112(v344, v341), ")");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 126)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l120 = f3("*LAMBDA-LIST-KEYWORDS*");
var l119 = {car: f3("&OPTIONAL"), cdr: {car: f3("&REST"), cdr: f3("NIL")}};
var v345;
(function(){
    (function(){
        return v345 = l119;
    })();
    return l120;
})(); 
var l121 = f3("LIST-UNTIL-KEYWORD");
var f113;
(function(){
    (function(){
        return f113 = (function(v346){
            ((v346)["fname"] = "LIST-UNTIL-KEYWORD");
            return v346;
        })((function (v347){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return ((function(v348){
                            return (v348 !== v2 ? v348 : f57((function(){
                                var tmp = v347;
                                return tmp === v2? v2: tmp.car;
                            })(), v345));
                        })(f1(v347)) !== v2 ? v2 : ({car: (function(){
                            var tmp = v347;
                            return tmp === v2? v2: tmp.car;
                        })(), cdr: f113((function(){
                            var tmp = v347;
                            return tmp === v2? v2: tmp.cdr;
                        })())}));
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
    return l121;
})(); 
var l122 = f3("LAMBDA-LIST-REQUIRED-ARGUMENTS");
var f114;
(function(){
    (function(){
        return f114 = (function(v349){
            ((v349)["fname"] = "LAMBDA-LIST-REQUIRED-ARGUMENTS");
            return v349;
        })((function (v350){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f113(v350);
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
    return l122;
})(); 
var l124 = f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
var l123 = f3("&OPTIONAL");
var f115;
(function(){
    (function(){
        return f115 = (function(v351){
            ((v351)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
            return v351;
        })((function (v352){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f45(f35, f113((function(){
                            var tmp = f57(l123, v352);
                            return tmp === v2? v2: tmp.cdr;
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
    })();
    return l124;
})(); 
var l125 = f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS");
var f116;
(function(){
    (function(){
        return f116 = (function(v353){
            ((v353)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS");
            return v353;
        })((function (v354){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f45(f20, f115(v354));
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
    return l125;
})(); 
var l127 = f3("LAMBDA-LIST-REST-ARGUMENT");
var l126 = f3("&REST");
var f117;
(function(){
    (function(){
        return f117 = (function(v355){
            ((v355)["fname"] = "LAMBDA-LIST-REST-ARGUMENT");
            return v355;
        })((function (v356){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v357){
                            ((function(){
                                var tmp = v357;
                                return tmp === v2? v2: tmp.cdr;
                            })() !== v2 ? (function(){
                                return (function (){ throw "Bad lambda-list"; })();
                            })() : v2);
                            return (function(){
                                var tmp = v357;
                                return tmp === v2? v2: tmp.car;
                            })();
                        })(f113((function(){
                            var tmp = f57(l126, v356);
                            return tmp === v2? v2: tmp.cdr;
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
    })();
    return l127;
})(); 
var l128 = f3("LAMBDA");
v334 = ({car: f33(l128, (function (v359,v360){
    if (arguments.length < 2) throw 'too few arguments';
    var v358= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v358 = {car: arguments[i], cdr: v358};
    return (function(){
        try {
            return (function(){
                return (function(v361,v362,v363){
                    return (function(v364,v365,v366){
                        return f68("(function (", f69(f45((function (v367){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return f104(v367, v366);
                        }), f39(v361, v362)), ","), "){", v176, f71((v361 !== v2 ? f68("if (arguments.length < ", f6(v364), ") throw 'too few arguments';", v176) : ""), (f17(v363) !== v2 ? f68("if (arguments.length > ", f6((function(){
                            var x = v364;
                            var y = v365;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x+y;
                        })()), ") throw 'too many arguments';", v176) : ""), (v362 !== v2 ? f68("switch(arguments.length){", v176, (function(v368,v369,v370){
                            return (function(){
                                (function(){
                                    try {
                                        return (function(){
                                            return (function(){
                                                while(((function(){
                                                    var x = v370;
                                                    var y = v365;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x<y;
                                                })()?v3: v2) !== v2){
                                                    (function(v371){
                                                        v369 = ({car: f68("case ", f6((function(){
                                                            var x = v370;
                                                            var y = v364;
                                                            if (typeof x != 'number')
                                                                throw 'The value ' + x + ' is not a type number.';
                                                            if (typeof y != 'number')
                                                                throw 'The value ' + y + ' is not a type number.';
                                                            return x+y;
                                                        })()), ":", v176, f104((function(){
                                                            var tmp = v371;
                                                            return tmp === v2? v2: tmp.car;
                                                        })(), v366), "=", f112(f23(v371), v366), ";", v176), cdr: v369});
                                                        return v370 = (function(){
                                                            var x = v370;
                                                            var y = 1;
                                                            if (typeof x != 'number')
                                                                throw 'The value ' + x + ' is not a type number.';
                                                            if (typeof y != 'number')
                                                                throw 'The value ' + y + ' is not a type number.';
                                                            return x+y;
                                                        })();
                                                    })(f54(v370, v368));
                                                }return v2;
                                            })();
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 133)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })();
                                v369 = ({car: f68("default: break;", v176), cdr: v369});
                                return f69(f41(v369));
                            })();
                        })(f115(v360),v2,0), "}", v176) : ""), (v363 !== v2 ? (function(v372){
                            return f68("var ", v372, "= ", f112(v2), ";", v176, "for (var i = arguments.length-1; i>=", f6((function(){
                                var x = v364;
                                var y = v365;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })()), "; i--)", v176, f71(v372, " = ", "{car: arguments[i], cdr: "), v372, "};", v176);
                        })(f104(v363, v366)) : ""), f68(f111(f56(v358), v366), "return ", f112((function(){
                            var tmp = f55(v358);
                            return tmp === v2? v2: tmp.car;
                        })(), v366), ";")), v176, "})");
                    })(f43(v361),f43(v362),f105(f39(f35(v363), v361, v362), v359));
                })(f114(v360),f116(v360),f117(v360));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 132)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l129 = f3("FSETQ");
v334 = ({car: f33(l129, (function (v373,v374,v375){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return f68(f107(v374, v373), " = ", f112(v375, v373));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 134)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l130 = f3("SETQ");
v334 = ({car: f33(l130, (function (v376,v377,v378){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return f68(f104(v377, v376), " = ", f112(v378, v376));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 135)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l131 = f3("ESCAPE-STRING");
var f74;
(function(){
    (function(){
        return f74 = (function(v379){
            ((v379)["fname"] = "ESCAPE-STRING");
            return v379;
        })((function (v380){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v381,v382,v383){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(((function(){
                                                var x = v382;
                                                var y = v383;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                if (typeof y != 'number')
                                                    throw 'The value ' + y + ' is not a type number.';
                                                return x<y;
                                            })()?v3: v2) !== v2){
                                                (function(v384){
                                                    ((function(v385){
                                                        return (v385 !== v2 ? v385 : f50(v384, 92));
                                                    })(f50(v384, 34)) !== v2 ? (function(){
                                                        return v381 = f68(v381, "\\");
                                                    })() : v2);
                                                    (f50(v384, 10) !== v2 ? (function(){
                                                        v381 = f68(v381, "\\");
                                                        return v384 = 110;
                                                    })() : v2);
                                                    return v381 = f68(v381, (function(){
                                                        var x = v384;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        return String.fromCharCode(x);
                                                    })());
                                                })((function(){
                                                    var string = v380;
                                                    var index = v382;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })());
                                                v382 = (function(){
                                                    var x = v382;
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
                                    if (cf.type == 'block' && cf.id == 137)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return v381;
                        })("",0,f43(v380));
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
    return l131;
})(); 
var l133 = f3("LITERAL->JS");
var l132 = f3("INTERN");
var f118;
(function(){
    (function(){
        return f118 = (function(v386){
            ((v386)["fname"] = "LITERAL->JS");
            return v386;
        })((function (v387){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (f51(v387) !== v2 ? (function(){
                            return f6(v387);
                        })() : (((typeof(v387) == "string")?v3: v2) !== v2 ? (function(){
                            return f68("\"", f74(v387), "\"");
                        })() : (((function(){
                            var tmp = v387;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?v3: v2) !== v2 ? (function(){
                            return f112(f39(f33(l132), f33(f74((v387).name))), v289);
                        })() : (((function(){
                            var tmp = v387;
                            return (typeof tmp == 'object' && 'car' in tmp);
                        })()?v3: v2) !== v2 ? (function(){
                            return f68("{car: ", f118((function(){
                                var tmp = v387;
                                return tmp === v2? v2: tmp.car;
                            })()), ", cdr: ", f118((function(){
                                var tmp = v387;
                                return tmp === v2? v2: tmp.cdr;
                            })()), "}");
                        })() : v2))));
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
    return l133;
})(); 
var l134 = f3("*LITERAL-COUNTER*");
var v388;
(function(){
    (function(){
        return v388 = 0;
    })();
    return l134;
})(); 
var l135 = f3("LITERAL");
var f119;
(function(){
    (function(){
        return f119 = (function(v389){
            ((v389)["fname"] = "LITERAL");
            return v389;
        })((function (v390){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v391){
                            v324 = ({car: f68("var ", v391, " = ", f118(v390)), cdr: v324});
                            return v391;
                        })(f68("l", f6(v388 = (function(){
                            var x = v388;
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
                    if (cf.type == 'block' && cf.id == 139)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        }));
    })();
    return l135;
})(); 
var l136 = f3("QUOTE");
v334 = ({car: f33(l136, (function (v392,v393){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return f119(v393);
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 140)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l137 = f3("%WHILE");
v334 = ({car: f33(l137, (function (v395,v396){
    if (arguments.length < 2) throw 'too few arguments';
    var v394= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v394 = {car: arguments[i], cdr: v394};
    return (function(){
        try {
            return (function(){
                return f68("(function(){", v176, f71("while(", f112(v396, v395), " !== ", f112(v2), "){", v176, f71(f111(v394, v395)), "}", "return ", f112(v2), ";", v176), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 141)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l139 = f3("LAMBDA");
var l138 = f3("FUNCTION");
v334 = ({car: f33(l138, (function (v397,v398){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return ((f36(v398) !== v2 ? (((function(){
                    var tmp = v398;
                    return tmp === v2? v2: tmp.car;
                })() === l139)?v3: v2) : v2) !== v2 ? (function(){
                    return f112(v398, v397);
                })() : (((function(){
                    var tmp = v398;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?v3: v2) !== v2 ? (function(){
                    return f107(v398, v397);
                })() : v2));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 142)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l141 = f3("PROGN");
var l140 = f3("EVAL-WHEN-COMPILE");
v334 = ({car: f33(l140, (function (v400){
    if (arguments.length < 1) throw 'too few arguments';
    var v399= v2;
    for (var i = arguments.length-1; i>=1; i--)
        v399 = {car: arguments[i], cdr: v399};
    return (function(){
        try {
            return (function(){
                f120(({car: l141, cdr: v399}));
                return "";
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 143)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l142 = f3("PROGN");
v334 = ({car: f33(l142, (function (v402){
    if (arguments.length < 1) throw 'too few arguments';
    var v401= v2;
    for (var i = arguments.length-1; i>=1; i--)
        v401 = {car: arguments[i], cdr: v401};
    return (function(){
        try {
            return (function(){
                return f68("(function(){", v176, f71(f111(f56(v401), v402), "return ", f112((function(){
                    var tmp = f55(v401);
                    return tmp === v2? v2: tmp.car;
                })(), v402), ";", v176), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 144)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l143 = f3("LET");
v334 = ({car: f33(l143, (function (v404,v405){
    if (arguments.length < 2) throw 'too few arguments';
    var v403= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v403 = {car: arguments[i], cdr: v403};
    return (function(){
        try {
            return (function(){
                return (function(v406){
                    return (function(v407,v408){
                        return (function(v409){
                            return f68("(function(", f69(f45((function (v410){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return f104(v410, v409);
                            }), v407), ","), "){", v176, f71(f111(f56(v403), v409), "return ", f112((function(){
                                var tmp = f55(v403);
                                return tmp === v2? v2: tmp.car;
                            })(), v409), ";", v176), "})(", f69(f45((function (v411){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return f112(v411, v404);
                            }), v408), ","), ")");
                        })(f105(v407, v404));
                    })(f45(f29, v406),f45(f30, v406));
                })(f45(f35, v405));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 145)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l144 = f3("*BLOCK-COUNTER*");
var v412;
(function(){
    (function(){
        return v412 = 0;
    })();
    return l144;
})(); 
var l148 = f3("BLOCK");
var l147 = f3("BLOCK");
var l146 = f3("PROGN");
var l145 = f3("BLOCK");
v334 = ({car: f33(l145, (function (v414,v415){
    if (arguments.length < 2) throw 'too few arguments';
    var v413= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v413 = {car: arguments[i], cdr: v413};
    return (function(){
        try {
            return (function(){
                return (function(v416){
                    return (function(v417){
                        return f68("(function(){", v176, f71("try {", v176, f71("return ", f112(f39(f33(l146), v413), f99(f33(v417), v414, l147)), ";", v176), "}", v176, "catch (cf){", v176, "    if (cf.type == 'block' && cf.id == ", v416, ")", v176, "        return cf.value;", v176, "    else", v176, "        throw cf;", v176, "}", v176), "})()");
                    })(f90(v415, l148, v416, v3));
                })(f6(v412 = (function(){
                    var x = v412;
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
})), cdr: v334}); 
var l150 = f3("BLOCK");
var l149 = f3("RETURN-FROM");
v334 = ({car: f33(l149, (function (v418,v419,v420){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    switch(arguments.length){
    case 2:
    v420=v2;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return (function(v421){
                    return (v421 !== v2 ? f68("(function(){ throw ({", "type: 'block', ", "id: ", f93(v421), ", ", "value: ", f112(v420, v418), ", ", "message: 'Return from unknown block ", (v419).name, ".'", "})})()") : (function (){ throw f68("Unknown block `", (v419).name, "'."); })());
                })(f100(v419, v418, l150));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 147)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l152 = f3("PROGN");
var l151 = f3("CATCH");
v334 = ({car: f33(l151, (function (v423,v424){
    if (arguments.length < 2) throw 'too few arguments';
    var v422= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v422 = {car: arguments[i], cdr: v422};
    return (function(){
        try {
            return (function(){
                return f68("(function(){", v176, f71("var id = ", f112(v424, v423), ";", v176, "try {", v176, f71("return ", f112(f39(f33(l152), v422)), ";", v176), "}", v176, "catch (cf){", v176, "    if (cf.type == 'catch' && cf.id == id)", v176, "        return cf.value;", v176, "    else", v176, "        throw cf;", v176, "}", v176), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 148)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l153 = f3("THROW");
v334 = ({car: f33(l153, (function (v425,v426,v427){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    switch(arguments.length){
    case 2:
    v427=v2;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return f68("(function(){ throw ({", "type: 'catch', ", "id: ", f112(v426, v425), ", ", "value: ", f112(v427, v425), ", ", "message: 'Throw uncatched.'", "})})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 149)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l154 = f3("*TAGBODY-COUNTER*");
var v428;
(function(){
    (function(){
        return v428 = 0;
    })();
    return l154;
})(); 
var l155 = f3("*GO-TAG-COUNTER*");
var v429;
(function(){
    (function(){
        return v429 = 0;
    })();
    return l155;
})(); 
var l156 = f3("GO-TAG-P");
var f121;
(function(){
    (function(){
        return f121 = (function(v430){
            ((v430)["fname"] = "GO-TAG-P");
            return v430;
        })((function (v431){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v432){
                            return (v432 !== v2 ? v432 : ((function(){
                                var tmp = v431;
                                return (typeof tmp == 'object' && 'name' in tmp);
                            })()?v3: v2));
                        })(f51(v431));
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
    })();
    return l156;
})(); 
var l159 = f3("DECLARE-TAGBODY-TAGS");
var l158 = f3("GOTAG");
var l157 = f3("GOTAG");
var f122;
(function(){
    (function(){
        return f122 = (function(v433){
            ((v433)["fname"] = "DECLARE-TAGBODY-TAGS");
            return v433;
        })((function (v434,v435,v436){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v437){
                            return f99(v437, v434, l157);
                        })(f45((function (v438){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return (function(v439){
                                return f90(v438, l158, f33(v435, v439), v3);
                            })(f6(v429 = (function(){
                                var x = v429;
                                var y = 1;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })()));
                        }), f60(f121, v436)));
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
    })();
    return l159;
})(); 
var l164 = f3("GOTAG");
var l163 = f3("GOTAG");
var l162 = f3("NIL");
var l161 = f3("PROGN");
var l160 = f3("TAGBODY");
v334 = ({car: f33(l160, (function (v441){
    if (arguments.length < 1) throw 'too few arguments';
    var v440= v2;
    for (var i = arguments.length-1; i>=1; i--)
        v440 = {car: arguments[i], cdr: v440};
    return (function(){
        try {
            return (function(){
                (f64(f121, v440) !== v2 ? v2 : (function(){
                    return (function(){ throw ({type: 'block', id: 152, value: f112(f39(f33(l161), v440, f33(l162)), v441), message: 'Return from unknown block TAGBODY.'})})();
                })());
                (f121((function(){
                    var tmp = v440;
                    return tmp === v2? v2: tmp.car;
                })()) !== v2 ? v2 : (function(){
                    return v440 = ({car: f5("START"), cdr: v440});
                })());
                return (function(v442){
                    return (function(v443,v444){
                        (function(v445){
                            return v444 = f30(f93(v445));
                        })(f100(f29(v440), v443, l163));
                        return f72("var tagbody_", v442, " = ", v444, ";", v176, "tbloop:", v176, "while (true) {", v176, f71("try {", v176, f71((function(v446){
                            return f68("switch(tagbody_", v442, "){", v176, "case ", v444, ":", v176, (function(){
                                try {
                                    return (function(){
                                        return (function(v447,v448){
                                            (function(){
                                                while(v447 !== v2){
                                                    v448 = (function(){
                                                        var tmp = v447;
                                                        return tmp === v2? v2: tmp.car;
                                                    })();
                                                    v446 = f68(v446, (function(){
                                                        return (f17(f121(v448)) !== v2 ? f71(f112(v448, v443), ";", v176) : (function(v449){
                                                            return f68("case ", f30(f93(v449)), ":", v176);
                                                        })(f100(v448, v443, l164)));
                                                    })());
                                                    v447 = (function(){
                                                        var tmp = v447;
                                                        return tmp === v2? v2: tmp.cdr;
                                                    })();
                                                }return v2;
                                            })();
                                            return v446;
                                        })((function(){
                                            var tmp = v440;
                                            return tmp === v2? v2: tmp.cdr;
                                        })(),v2);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 153)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })(), "default:", v176, "    break tbloop;", v176, "}", v176);
                        })("")), "}", v176, "catch (jump) {", v176, "    if (jump.type == 'tagbody' && jump.id == ", v442, ")", v176, "        tagbody_", v442, " = jump.label;", v176, "    else", v176, "        throw(jump);", v176, "}", v176), "}", v176, "return ", f112(v2), ";", v176);
                    })(f122(v441, v442, v440),v2);
                })(f6(v428));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 152)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l166 = f3("GOTAG");
var l165 = f3("GO");
v334 = ({car: f33(l165, (function (v450,v451){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v452,v453){
                    return (v452 !== v2 ? f72(f68("throw ({", "type: 'tagbody', ", "id: ", f29(f93(v452)), ", ", "label: ", f30(f93(v452)), ", ", "message: 'Attempt to GO to non-existing tag ", v453, "'", "})")) : (function (){ throw f68("Unknown tag `", v453, "'."); })());
                })(f100(v451, v450, l166),(((function(){
                    var tmp = v451;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?v3: v2) !== v2 ? (function(){
                    return (v451).name;
                })() : (f51(v451) !== v2 ? (function(){
                    return f6(v451);
                })() : v2)));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 154)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l167 = f3("UNWIND-PROTECT");
v334 = ({car: f33(l167, (function (v455,v456){
    if (arguments.length < 2) throw 'too few arguments';
    var v454= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v454 = {car: arguments[i], cdr: v454};
    return (function(){
        try {
            return (function(){
                return f68("(function(){", v176, f71("var ret = ", f112(v2), ";", v176, "try {", v176, f71("ret = ", f112(v456, v455), ";", v176), "} finally {", v176, f71(f111(v454, v455)), "}", v176, "return ret;", v176), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 155)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l176 = f3("BACKQUOTE-EXPAND-1");
var l175 = f3("LIST");
var l174 = f3("UNQUOTE-SPLICING");
var l173 = f3("LIST");
var l172 = f3("UNQUOTE");
var l171 = f3("APPEND");
var l170 = f3("BACKQUOTE");
var l169 = f3("UNQUOTE");
var l168 = f3("QUOTE");
var f123;
(function(){
    (function(){
        return f123 = (function(v457){
            ((v457)["fname"] = "BACKQUOTE-EXPAND-1");
            return v457;
        })((function (v458){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var tmp = v458;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?v3: v2) !== v2 ? (function(){
                            return f33(l168, v458);
                        })() : (f34(v458) !== v2 ? (function(){
                            return v458;
                        })() : ((((function(){
                            var tmp = v458;
                            return tmp === v2? v2: tmp.car;
                        })() === l169)?v3: v2) !== v2 ? (function(){
                            return (function(){
                                var tmp = v458;
                                return tmp === v2? v2: tmp.car;
                            })();
                        })() : ((((function(){
                            var tmp = v458;
                            return tmp === v2? v2: tmp.car;
                        })() === l170)?v3: v2) !== v2 ? (function(){
                            return f123(f123(f23(v458)));
                        })() : (function(){
                            return ({car: l171, cdr: f45((function (v459){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return ((f36(v459) !== v2 ? (((function(){
                                    var tmp = v459;
                                    return tmp === v2? v2: tmp.car;
                                })() === l172)?v3: v2) : v2) !== v2 ? (function(){
                                    return f33(l173, f23(v459));
                                })() : ((f36(v459) !== v2 ? (((function(){
                                    var tmp = v459;
                                    return tmp === v2? v2: tmp.car;
                                })() === l174)?v3: v2) : v2) !== v2 ? (function(){
                                    return f23(v459);
                                })() : (function(){
                                    return f33(l175, f123(v459));
                                })()));
                            }), v458)});
                        })()))));
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
    return l176;
})(); 
var l178 = f3("BACKQUOTE-EXPAND");
var l177 = f3("BACKQUOTE");
var f124;
(function(){
    (function(){
        return f124 = (function(v460){
            ((v460)["fname"] = "BACKQUOTE-EXPAND");
            return v460;
        })((function (v461){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return ((f36(v461) !== v2 ? (((function(){
                            var tmp = v461;
                            return tmp === v2? v2: tmp.car;
                        })() === l177)?v3: v2) : v2) !== v2 ? f123(f23(v461)) : v461);
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
    })();
    return l178;
})(); 
var l179 = f3("BACKQUOTE");
v334 = ({car: f33(l179, (function (v462,v463){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return f112(f123(v463), v462);
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 158)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l180 = f3("COMPILE-BOOL");
var f125;
(function(){
    (function(){
        return f125 = (function(v464){
            ((v464)["fname"] = "COMPILE-BOOL");
            return v464;
        })((function (v465){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f68("(", v465, "?", f112(v3), ": ", f112(v2), ")");
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
    })();
    return l180;
})(); 
var l181 = f3("NUM-OP-NUM");
var f126;
(function(){
    (function(){
        return f126 = (function(v466){
            ((v466)["fname"] = "NUM-OP-NUM");
            return v466;
        })((function (v467,v468,v469){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f68("(function(){", v176, f71(f68("var ", "x", " = ", v467, ";", v176), f68("var ", "y", " = ", v469, ";", v176), f68("if (typeof ", "x", " != '", "number", "')", v176, f71("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v176)), f68("if (typeof ", "y", " != '", "number", "')", v176, f71("throw 'The value ' + ", "y", " + ' is not a type ", "number", ".';", v176)), f68("return ", (function(){
                            return f68("x", v468, "y");
                        })(), ";", v176)), "})()");
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
    })();
    return l181;
})(); 
var l182 = f3("+");
v334 = ({car: f33(l182, (function (v470,v471,v472){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v473,v474){
                    return f126(v473, "+", v474);
                })(f112(v471, v470),f112(v472, v470));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 161)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l183 = f3("-");
v334 = ({car: f33(l183, (function (v475,v476,v477){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v478,v479){
                    return f126(v478, "-", v479);
                })(f112(v476, v475),f112(v477, v475));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 162)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l184 = f3("*");
v334 = ({car: f33(l184, (function (v480,v481,v482){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v483,v484){
                    return f126(v483, "*", v484);
                })(f112(v481, v480),f112(v482, v480));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 163)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l185 = f3("/");
v334 = ({car: f33(l185, (function (v485,v486,v487){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v488,v489){
                    return f126(v488, "/", v489);
                })(f112(v486, v485),f112(v487, v485));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 164)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l186 = f3("MOD");
v334 = ({car: f33(l186, (function (v490,v491,v492){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v493,v494){
                    return f126(v493, "%", v494);
                })(f112(v491, v490),f112(v492, v490));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 165)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l187 = f3("<");
v334 = ({car: f33(l187, (function (v495,v496,v497){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v498,v499){
                    return f125(f126(v498, "<", v499));
                })(f112(v496, v495),f112(v497, v495));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 166)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l188 = f3(">");
v334 = ({car: f33(l188, (function (v500,v501,v502){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v503,v504){
                    return f125(f126(v503, ">", v504));
                })(f112(v501, v500),f112(v502, v500));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 167)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l189 = f3("=");
v334 = ({car: f33(l189, (function (v505,v506,v507){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v508,v509){
                    return f125(f126(v508, "==", v509));
                })(f112(v506, v505),f112(v507, v505));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 168)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l190 = f3("<=");
v334 = ({car: f33(l190, (function (v510,v511,v512){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v513,v514){
                    return f125(f126(v513, "<=", v514));
                })(f112(v511, v510),f112(v512, v510));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 169)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l191 = f3(">=");
v334 = ({car: f33(l191, (function (v515,v516,v517){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v518,v519){
                    return f125(f126(v518, ">=", v519));
                })(f112(v516, v515),f112(v517, v515));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 170)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l192 = f3("NUMBERP");
v334 = ({car: f33(l192, (function (v520,v521){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v522){
                    return f125(f68("(typeof (", v522, ") == \"number\")"));
                })(f112(v521, v520));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 171)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l193 = f3("FLOOR");
v334 = ({car: f33(l193, (function (v523,v524){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v525){
                    return f68("(function(){", v176, f71(f68("var ", "x", " = ", v525, ";", v176), f68("if (typeof ", "x", " != '", "number", "')", v176, f71("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v176)), f68("return ", (function(){
                        return "Math.floor(x)";
                    })(), ";", v176)), "})()");
                })(f112(v524, v523));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 172)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l194 = f3("CONS");
v334 = ({car: f33(l194, (function (v526,v527,v528){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v529,v530){
                    return f68("({car: ", v529, ", cdr: ", v530, "})");
                })(f112(v527, v526),f112(v528, v526));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 173)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l195 = f3("CONSP");
v334 = ({car: f33(l195, (function (v531,v532){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v533){
                    return f125(f68("(function(){", v176, f71("var tmp = ", v533, ";", v176, "return (typeof tmp == 'object' && 'car' in tmp);", v176), "})()"));
                })(f112(v532, v531));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 174)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l196 = f3("CAR");
v334 = ({car: f33(l196, (function (v534,v535){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v536){
                    return f68("(function(){", v176, f71("var tmp = ", v536, ";", v176, "return tmp === ", f112(v2), "? ", f112(v2), ": tmp.car;", v176), "})()");
                })(f112(v535, v534));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 175)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l197 = f3("CDR");
v334 = ({car: f33(l197, (function (v537,v538){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v539){
                    return f68("(function(){", v176, f71("var tmp = ", v539, ";", v176, "return tmp === ", f112(v2), "? ", f112(v2), ": tmp.cdr;", v176), "})()");
                })(f112(v538, v537));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 176)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l198 = f3("SETCAR");
v334 = ({car: f33(l198, (function (v540,v541,v542){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v543,v544){
                    return f68("(function(){", v176, f71(f68("var ", "x", " = ", v543, ";", v176), f68("if (typeof ", "x", " != '", "object", "')", v176, f71("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", v176)), f68("return ", (function(){
                        return f68("(x.car = ", v544, ")");
                    })(), ";", v176)), "})()");
                })(f112(v541, v540),f112(v542, v540));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 177)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l199 = f3("SETCDR");
v334 = ({car: f33(l199, (function (v545,v546,v547){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v548,v549){
                    return f68("(function(){", v176, f71(f68("var ", "x", " = ", v548, ";", v176), f68("if (typeof ", "x", " != '", "object", "')", v176, f71("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", v176)), f68("return ", (function(){
                        return f68("(x.cdr = ", v549, ")");
                    })(), ";", v176)), "})()");
                })(f112(v546, v545),f112(v547, v545));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 178)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l200 = f3("SYMBOLP");
v334 = ({car: f33(l200, (function (v550,v551){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v552){
                    return f125(f68("(function(){", v176, f71("var tmp = ", v552, ";", v176, "return (typeof tmp == 'object' && 'name' in tmp);", v176), "})()"));
                })(f112(v551, v550));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 179)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l201 = f3("MAKE-SYMBOL");
v334 = ({car: f33(l201, (function (v553,v554){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v555){
                    return f68("(function(){", v176, f71(f68("var ", "name", " = ", v555, ";", v176), f68("if (typeof ", "name", " != '", "string", "')", v176, f71("throw 'The value ' + ", "name", " + ' is not a type ", "string", ".';", v176)), f68("return ", (function(){
                        return "({name: name})";
                    })(), ";", v176)), "})()");
                })(f112(v554, v553));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 180)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l202 = f3("SYMBOL-NAME");
v334 = ({car: f33(l202, (function (v556,v557){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v558){
                    return f68("(", v558, ").name");
                })(f112(v557, v556));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 181)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l203 = f3("EQ");
v334 = ({car: f33(l203, (function (v559,v560,v561){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v562,v563){
                    return f125(f68("(", v562, " === ", v563, ")"));
                })(f112(v560, v559),f112(v561, v559));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 182)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l204 = f3("EQUAL");
v334 = ({car: f33(l204, (function (v564,v565,v566){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v567,v568){
                    return f125(f68("(", v567, " == ", v568, ")"));
                })(f112(v565, v564),f112(v566, v564));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 183)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l205 = f3("STRING");
v334 = ({car: f33(l205, (function (v569,v570){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v571){
                    return f68("(function(){", v176, f71(f68("var ", "x", " = ", v571, ";", v176), f68("if (typeof ", "x", " != '", "number", "')", v176, f71("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v176)), f68("return ", (function(){
                        return "String.fromCharCode(x)";
                    })(), ";", v176)), "})()");
                })(f112(v570, v569));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 184)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l206 = f3("STRINGP");
v334 = ({car: f33(l206, (function (v572,v573){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v574){
                    return f125(f68("(typeof(", v574, ") == \"string\")"));
                })(f112(v573, v572));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 185)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l207 = f3("STRING-UPCASE");
v334 = ({car: f33(l207, (function (v575,v576){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v577){
                    return f68("(function(){", v176, f71(f68("var ", "x", " = ", v577, ";", v176), f68("if (typeof ", "x", " != '", "string", "')", v176, f71("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v176)), f68("return ", (function(){
                        return "x.toUpperCase()";
                    })(), ";", v176)), "})()");
                })(f112(v576, v575));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 186)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l208 = f3("STRING-LENGTH");
v334 = ({car: f33(l208, (function (v578,v579){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v580){
                    return f68("(function(){", v176, f71(f68("var ", "x", " = ", v580, ";", v176), f68("if (typeof ", "x", " != '", "string", "')", v176, f71("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v176)), f68("return ", (function(){
                        return "x.length";
                    })(), ";", v176)), "})()");
                })(f112(v579, v578));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 187)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l209 = f3("SLICE");
v334 = ({car: f33(l209, (function (v581,v582,v583,v584){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    switch(arguments.length){
    case 3:
    v584=v2;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return f68("(function(){", v176, f71("var str = ", f112(v582, v581), ";", v176, "var a = ", f112(v583, v581), ";", v176, "var b;", v176, (v584 !== v2 ? f68("b = ", f112(v584, v581), ";", v176) : ""), "return str.slice(a,b);", v176), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 188)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l210 = f3("CHAR");
v334 = ({car: f33(l210, (function (v585,v586,v587){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v588,v589){
                    return f68("(function(){", v176, f71(f68("var ", "string", " = ", v588, ";", v176), f68("var ", "index", " = ", v589, ";", v176), f68("if (typeof ", "string", " != '", "string", "')", v176, f71("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", v176)), f68("if (typeof ", "index", " != '", "number", "')", v176, f71("throw 'The value ' + ", "index", " + ' is not a type ", "number", ".';", v176)), f68("return ", (function(){
                        return "string.charCodeAt(index)";
                    })(), ";", v176)), "})()");
                })(f112(v586, v585),f112(v587, v585));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 189)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l211 = f3("CONCAT-TWO");
v334 = ({car: f33(l211, (function (v590,v591,v592){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v593,v594){
                    return f68("(function(){", v176, f71(f68("var ", "string1", " = ", v593, ";", v176), f68("var ", "string2", " = ", v594, ";", v176), f68("if (typeof ", "string1", " != '", "string", "')", v176, f71("throw 'The value ' + ", "string1", " + ' is not a type ", "string", ".';", v176)), f68("if (typeof ", "string2", " != '", "string", "')", v176, f71("throw 'The value ' + ", "string2", " + ' is not a type ", "string", ".';", v176)), f68("return ", (function(){
                        return "string1.concat(string2)";
                    })(), ";", v176)), "})()");
                })(f112(v591, v590),f112(v592, v590));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 190)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l212 = f3("FUNCALL");
v334 = ({car: f33(l212, (function (v596,v597){
    if (arguments.length < 2) throw 'too few arguments';
    var v595= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v595 = {car: arguments[i], cdr: v595};
    return (function(){
        try {
            return (function(){
                return f68("(", f112(v597, v596), ")(", f69(f45((function (v598){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f112(v598, v596);
                }), v595), ", "), ")");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 191)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l213 = f3("APPLY");
v334 = ({car: f33(l213, (function (v600,v601){
    if (arguments.length < 2) throw 'too few arguments';
    var v599= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v599 = {car: arguments[i], cdr: v599};
    return (function(){
        try {
            return (function(){
                return (f1(v599) !== v2 ? f68("(", f112(v601, v600), ")()") : (function(v602,v603){
                    return f68("(function(){", v176, f71("var f = ", f112(v601, v600), ";", v176, "var args = [", f69(f45((function (v604){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return f112(v604, v600);
                    }), v602), ", "), "];", v176, "var tail = (", f112(v603, v600), ");", v176, f71("while (tail != ", f112(v2), "){", v176, "    args.push(tail.car);", v176, "    tail = tail.cdr;", v176, "}", v176, "return f.apply(this, args);", v176), "})()"));
                })(f56(v599),(function(){
                    var tmp = f55(v599);
                    return tmp === v2? v2: tmp.car;
                })()));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 192)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l214 = f3("JS-EVAL");
v334 = ({car: f33(l214, (function (v605,v606){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v607){
                    return f68("(function(){", v176, f71(f68("var ", "string", " = ", v607, ";", v176), f68("if (typeof ", "string", " != '", "string", "')", v176, f71("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", v176)), f68("return ", (function(){
                        return "eval.apply(window, [string])";
                    })(), ";", v176)), "})()");
                })(f112(v606, v605));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 193)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l215 = f3("ERROR");
v334 = ({car: f33(l215, (function (v608,v609){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v610){
                    return f68("(function (){ throw ", v610, "; })()");
                })(f112(v609, v608));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 194)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l216 = f3("NEW");
v334 = ({car: f33(l216, (function (v611){
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
            if (cf.type == 'block' && cf.id == 195)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l217 = f3("GET");
v334 = ({car: f33(l217, (function (v612,v613,v614){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v615,v616){
                    return f68("(function(){", v176, f71("var tmp = ", "(", v615, ")[", v616, "];", v176, "return tmp == undefined? ", f112(v2), ": tmp ;", v176), "})()");
                })(f112(v613, v612),f112(v614, v612));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 196)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l218 = f3("SET");
v334 = ({car: f33(l218, (function (v617,v618,v619,v620){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v621,v622,v623){
                    return f68("((", v621, ")[", v622, "] = ", v623, ")");
                })(f112(v618, v617),f112(v619, v617),f112(v620, v617));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 197)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l219 = f3("IN");
v334 = ({car: f33(l219, (function (v624,v625,v626){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v627,v628){
                    return f125(f68("((", v627, ") in (", v628, "))"));
                })(f112(v625, v624),f112(v626, v624));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 198)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l220 = f3("FUNCTIONP");
v334 = ({car: f33(l220, (function (v629,v630){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v631){
                    return f125(f68("(typeof ", v631, " == 'function')"));
                })(f112(v630, v629));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 199)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l221 = f3("WRITE-STRING");
v334 = ({car: f33(l221, (function (v632,v633){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v634){
                    return f68("(function(){", v176, f71(f68("var ", "x", " = ", v634, ";", v176), f68("if (typeof ", "x", " != '", "string", "')", v176, f71("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v176)), f68("return ", (function(){
                        return "lisp.write(x)";
                    })(), ";", v176)), "})()");
                })(f112(v633, v632));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 200)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v334}); 
var l223 = f3("MACROP");
var l222 = f3("MACRO");
var f127;
(function(){
    (function(){
        return f127 = (function(v635){
            ((v635)["fname"] = "MACROP");
            return v635;
        })((function (v636){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var tmp = v636;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?v3: v2) !== v2 ? ((f92(f106(v636, v289)) === l222)?v3: v2) : v2);
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
    })();
    return l223;
})(); 
var l225 = f3("LS-MACROEXPAND-1");
var l224 = f3("MACRO");
var f128;
(function(){
    (function(){
        return f128 = (function(v637){
            ((v637)["fname"] = "LS-MACROEXPAND-1");
            return v637;
        })((function (v638,v639){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (f127((function(){
                            var tmp = v638;
                            return tmp === v2? v2: tmp.car;
                        })()) !== v2 ? (function(v640){
                            return (((f92(v640) === l224)?v3: v2) !== v2 ? (function(){
                                var f = f120(f93(v640));
                                var args = [];
                                var tail = ((function(){
                                    var tmp = v638;
                                    return tmp === v2? v2: tmp.cdr;
                                })());
                                    while (tail != v2){
                                        args.push(tail.car);
                                        tail = tail.cdr;
                                    }
                                    return f.apply(this, args);
                                })() : v638);
                        })(f106((function(){
                            var tmp = v638;
                            return tmp === v2? v2: tmp.car;
                        })(), v289)) : v638);
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 202)
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
        return f129 = (function(v641){
            ((v641)["fname"] = "COMPILE-FUNCALL");
            return v641;
        })((function (v642,v643,v644){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var tmp = v642;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?v3: v2) !== v2 ? (function(){
                            return f68(f107(v642, v644), "(", f69(f45((function (v645){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return f112(v645, v644);
                            }), v643), ", "), ")");
                        })() : ((f36(v642) !== v2 ? (((function(){
                            var tmp = v642;
                            return tmp === v2? v2: tmp.car;
                        })() === l226)?v3: v2) : v2) !== v2 ? (function(){
                            return f68("(", f112(v642, v644), ")(", f69(f45((function (v646){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return f112(v646, v644);
                            }), v643), ", "), ")");
                        })() : (function(){
                            return (function (){ throw f68("Invalid function designator ", (v642).name); })();
                        })()));
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
    })();
    return l227;
})(); 
var l228 = f3("LS-COMPILE");
var f112;
(function(){
    (function(){
        return f112 = (function(v647){
            ((v647)["fname"] = "LS-COMPILE");
            return v647;
        })((function (v648,v649){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            switch(arguments.length){
            case 1:
            v649=f96();
            default: break;
            }
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var tmp = v648;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?v3: v2) !== v2 ? (function(){
                            return f104(v648, v649);
                        })() : (f51(v648) !== v2 ? (function(){
                            return f6(v648);
                        })() : (((typeof(v648) == "string")?v3: v2) !== v2 ? (function(){
                            return f68("\"", f74(v648), "\"");
                        })() : (f36(v648) !== v2 ? (function(){
                            return (f66((function(){
                                var tmp = v648;
                                return tmp === v2? v2: tmp.car;
                            })(), v334) !== v2 ? (function(v650){
                                return (function(){
                                    var f = v650;
                                    var args = [v649];
                                    var tail = ((function(){
                                        var tmp = v648;
                                        return tmp === v2? v2: tmp.cdr;
                                    })());
                                        while (tail != v2){
                                            args.push(tail.car);
                                            tail = tail.cdr;
                                        }
                                        return f.apply(this, args);
                                    })();
                            })(f30(f66((function(){
                                var tmp = v648;
                                return tmp === v2? v2: tmp.car;
                            })(), v334))) : (f127((function(){
                                var tmp = v648;
                                return tmp === v2? v2: tmp.car;
                            })()) !== v2 ? f112(f128(v648, v649), v649) : f129((function(){
                                var tmp = v648;
                                return tmp === v2? v2: tmp.car;
                            })(), (function(){
                                var tmp = v648;
                                return tmp === v2? v2: tmp.cdr;
                            })(), v649)));
                        })() : v2))));
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
    })();
    return l228;
})(); 
var l229 = f3("LS-COMPILE-TOPLEVEL");
var f130;
(function(){
    (function(){
        return f130 = (function(v651){
            ((v651)["fname"] = "LS-COMPILE-TOPLEVEL");
            return v651;
        })((function (v652){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        v324 = v2;
                        return (function(v653){
                            return (function(v654){
                                v324 = v2;
                                return v654;
                            })(f68(f69(f45((function (v655){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return f68(v655, ";", v176);
                            }), v324)), v653));
                        })(f112(v652));
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
    return l229;
})(); 
var l240 = f3("LS-COMPILE-TOPLEVEL");
var l239 = f3("EVAL");
var l238 = f3("PRIN1-TO-STRING");
var l237 = f3("LS-READ-FROM-STRING");
var l236 = 207;
var l235 = 157;
var l234 = 230;
var l233 = 130;
var l232 = 661;
var l231 = {car: {car: {car: f3("*GO-TAG-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v429", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*TAGBODY-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v428", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*BLOCK-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v412", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*LITERAL-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v388", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*LAMBDA-LIST-KEYWORDS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v345", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*COMPILATIONS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v334", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*TOPLEVEL-COMPILATIONS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v324", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*FUNCTION-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v313", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*VARIABLE-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v293", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*ENVIRONMENT*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v289", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*COMPILATION-UNIT-CHECKS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v253", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*EOF*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v246", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*NEWLINE*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v176", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*GENSYM-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v12", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("T"), cdr: {car: f3("VARIABLE"), cdr: {car: "v3", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NIL"), cdr: {car: f3("VARIABLE"), cdr: {car: "v2", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*PACKAGE*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v1", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}}}}}}}}}}}}}}}, cdr: {car: {car: {car: f3("WITH-COMPILATION-UNIT"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROG1"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("SETQ"), cdr: {car: f3("*COMPILATION-UNIT-CHECKS*"), cdr: {car: f3("NIL"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("CLEAR-UNDECLARED-GLOBAL-BINDINGS"), cdr: f3("NIL")}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DOLIST"), cdr: {car: {car: f3("CHECK"), cdr: {car: f3("*COMPILATION-UNIT-CHECKS*"), cdr: f3("NIL")}}, cdr: {car: {car: f3("FUNCALL"), cdr: {car: f3("CHECK"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-COMPILE-TOPLEVEL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f130", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COMPILE-FUNCALL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f129", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-MACROEXPAND-1"), cdr: {car: f3("FUNCTION"), cdr: {car: "f128", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MACROP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f127", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NUM-OP-NUM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f126", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("TYPE-CHECK"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("DECLS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CONCAT"), cdr: {car: "(function(){", cdr: {car: f3("*NEWLINE*"), cdr: {car: {car: f3("INDENT"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("DECL"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CONCAT"), cdr: {car: "var ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: " = ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("THIRD"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: ";", cdr: {car: f3("*NEWLINE*"), cdr: f3("NIL")}}}}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("DECLS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("DECL"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CONCAT"), cdr: {car: "if (typeof ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: " != '", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: "')", cdr: {car: f3("*NEWLINE*"), cdr: {car: {car: f3("INDENT"), cdr: {car: "throw 'The value ' + ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: " + ' is not a type ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: ".';", cdr: {car: f3("*NEWLINE*"), cdr: f3("NIL")}}}}}}}, cdr: f3("NIL")}}}}}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("DECLS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("CONCAT"), cdr: {car: "return ", cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: ";", cdr: {car: f3("*NEWLINE*"), cdr: f3("NIL")}}}}}, cdr: f3("NIL")}}}}, cdr: {car: "})()", cdr: f3("NIL")}}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COMPILE-BOOL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f125", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFINE-BUILTIN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("DEFINE-COMPILATION"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ARG"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARG"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LS-COMPILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARG"), cdr: f3("NIL")}}, cdr: {car: f3("ENV"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("ARGS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE-EXPAND-1"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE-EXPAND"), cdr: {car: f3("FUNCTION"), cdr: {car: "f124", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE-EXPAND-1"), cdr: {car: f3("FUNCTION"), cdr: {car: "f123", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DECLARE-TAGBODY-TAGS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f122", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("GO-TAG-P"), cdr: {car: f3("FUNCTION"), cdr: {car: "f121", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFINE-TRANSFORMATION"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("DEFINE-COMPILATION"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LS-COMPILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: {car: f3("ENV"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EVAL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f120", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LITERAL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f119", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LITERAL->JS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f118", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-REST-ARGUMENT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f117", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f116", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f115", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-REQUIRED-ARGUMENTS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f114", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LIST-UNTIL-KEYWORD"), cdr: {car: f3("FUNCTION"), cdr: {car: "f113", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFINE-COMPILATION"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PUSH"), cdr: {car: {car: f3("LIST"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ENV"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("BLOCK"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("*COMPILATIONS*"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-COMPILE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f112", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-COMPILE-BLOCK"), cdr: {car: f3("FUNCTION"), cdr: {car: "f111", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%COMPILE-DEFMACRO"), cdr: {car: f3("FUNCTION"), cdr: {car: "f110", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%COMPILE-DEFUN"), cdr: {car: f3("FUNCTION"), cdr: {car: "f109", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%COMPILE-DEFVAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f108", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-FUNCTION-TRANSLATION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f107", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-FUNCTION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f106", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EXTEND-LOCAL-ENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f105", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-VARIABLE-TRANSLATION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f104", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-VARIABLE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f103", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("GVARNAME"), cdr: {car: f3("FUNCTION"), cdr: {car: "f102", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CLEAR-UNDECLARED-GLOBAL-BINDINGS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f101", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-IN-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f100", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EXTEND-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f99", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PUSH-TO-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f98", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COPY-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f97", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAKE-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f96", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MARK-BINDING-AS-DECLARED"), cdr: {car: f3("FUNCTION"), cdr: {car: "f95", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-DECLARED"), cdr: {car: f3("FUNCTION"), cdr: {car: "f94", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-TRANSLATION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f93", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-TYPE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f92", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-NAME"), cdr: {car: f3("FUNCTION"), cdr: {car: "f91", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAKE-BINDING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f90", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-READ-FROM-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f89", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("READ-SHARP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f88", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("READ-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f87", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-READ"), cdr: {car: f3("FUNCTION"), cdr: {car: "f86", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%READ-LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f85", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SKIP-WHITESPACES-AND-COMMENTS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f84", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("READ-UNTIL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f83", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("TERMINALP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f82", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SKIP-WHITESPACES"), cdr: {car: f3("FUNCTION"), cdr: {car: "f81", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WHITESPACEP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f80", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%READ-CHAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f79", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%PEEK-CHAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f78", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAKE-STRING-STREAM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f77", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PRINT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f76", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WRITE-LINE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f75", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ESCAPE-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f74", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PRIN1-TO-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f73", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("JS!SELFCALL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f72", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INDENT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f71", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("JOIN-TRAILING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f70", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("JOIN"), cdr: {car: f3("FUNCTION"), cdr: {car: "f69", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONCATF"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("VARIABLE"), cdr: {car: f3("&REST"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VARIABLE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CONCAT"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VARIABLE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONCAT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f68", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("STRING="), cdr: {car: f3("FUNCTION"), cdr: {car: "f67", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ASSOC"), cdr: {car: f3("FUNCTION"), cdr: {car: "f66", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EVERY"), cdr: {car: f3("FUNCTION"), cdr: {car: "f65", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SOME"), cdr: {car: f3("FUNCTION"), cdr: {car: "f64", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PARSE-INTEGER"), cdr: {car: f3("FUNCTION"), cdr: {car: "f63", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SUBSEQ"), cdr: {car: f3("FUNCTION"), cdr: {car: "f62", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DIGIT-CHAR-P"), cdr: {car: f3("FUNCTION"), cdr: {car: "f61", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REMOVE-IF-NOT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f60", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REMOVE-IF"), cdr: {car: f3("FUNCTION"), cdr: {car: "f59", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REMOVE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f58", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MEMBER"), cdr: {car: f3("FUNCTION"), cdr: {car: "f57", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BUTLAST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f56", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f55", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f54", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MINUSP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f53", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PLUSP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f52", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTEGERP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f51", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CHAR="), cdr: {car: f3("FUNCTION"), cdr: {car: "f50", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CHAR-CODE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f49", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CODE-CHAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f48", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COPY-LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f47", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("IDENTITY"), cdr: {car: f3("FUNCTION"), cdr: {car: "f46", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAPCAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f45", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONCAT-TWO"), cdr: {car: f3("FUNCTION"), cdr: {car: "f44", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LENGTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f43", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LIST-LENGTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f42", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REVERSE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f41", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REVERSE-AUX"), cdr: {car: f3("FUNCTION"), cdr: {car: "f40", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("APPEND"), cdr: {car: f3("FUNCTION"), cdr: {car: "f39", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("APPEND-TWO"), cdr: {car: f3("FUNCTION"), cdr: {car: "f38", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFVAR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("&OPTIONAL"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("%DEFVAR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFUN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("%DEFUN"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("!REDUCE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f37", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LISTP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f36", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ENSURE-LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f35", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PROG1"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("VALUE"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("OR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("COND"), cdr: {car: {car: {car: f3("NULL"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("NULL"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("T"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("G"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G"), cdr: f3("NIL")}}, cdr: {car: {car: f3("OR"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("AND"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("COND"), cdr: {car: {car: {car: f3("NULL"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: f3("T"), cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("NULL"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("T"), cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("AND"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ECASE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: {car: f3("&REST"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CASE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("APPEND"), cdr: {car: f3("CLAUSULES"), cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: {car: f3("T"), cdr: {car: {car: f3("ERROR"), cdr: {car: "ECASE expression failed.", cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CASE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: {car: f3("&REST"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("!FORM"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("!FORM"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("COND"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CLAUSULE"), cdr: f3("NIL")}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("EQ"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("CLAUSULE"), cdr: f3("NIL")}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}, cdr: {car: f3("CLAUSULE"), cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: {car: f3("EQL"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("!FORM"), cdr: f3("NIL")}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("CLAUSULE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("CLAUSULE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COND"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("NULL"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("EQ"), cdr: {car: {car: f3("CAAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("COND"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DOTIMES"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ITER"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("G!TO"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: {car: {car: f3("VAR"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("TO"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("RESULT"), cdr: {car: {car: f3("THIRD"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("BLOCK"), cdr: {car: f3("NIL"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: 0, cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!TO"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("TO"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("%WHILE"), cdr: {car: {car: f3("<"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!TO"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("INCF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("RESULT"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DOLIST"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ITER"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("VAR"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("G!LIST"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("BLOCK"), cdr: {car: f3("NIL"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("%WHILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CAR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CDR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("THIRD"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("UNLESS"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CONDITION"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("CONDITION"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WHEN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CONDITION"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("CONDITION"), cdr: f3("NIL")}}, cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PUSH"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: {car: f3("PLACE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("PLACE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CONS"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("PLACE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DECF"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: {car: f3("&OPTIONAL"), cdr: {car: {car: f3("DELTA"), cdr: {car: 1, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("-"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("DELTA"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INCF"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: {car: f3("&OPTIONAL"), cdr: {car: {car: f3("DELTA"), cdr: {car: 1, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("+"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("DELTA"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ATOM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f34", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f33", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("FOURTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f32", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("THIRD"), cdr: {car: f3("FUNCTION"), cdr: {car: "f31", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SECOND"), cdr: {car: f3("FUNCTION"), cdr: {car: "f30", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("FIRST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f29", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CADDDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f28", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDDDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f27", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CADDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f26", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f25", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f24", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CADR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f23", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CAAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f22", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f21", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f20", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONSP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f19", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f18", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NOT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f17", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EQL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f16", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("TRUNCATE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f15", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ZEROP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f14", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("1-"), cdr: {car: f3("FUNCTION"), cdr: {car: "f13", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("1+"), cdr: {car: f3("FUNCTION"), cdr: {car: "f12", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("/"), cdr: {car: f3("FUNCTION"), cdr: {car: "f11", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*"), cdr: {car: f3("FUNCTION"), cdr: {car: "f10", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("-"), cdr: {car: f3("FUNCTION"), cdr: {car: "f9", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("+"), cdr: {car: f3("FUNCTION"), cdr: {car: "f8", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("="), cdr: {car: f3("FUNCTION"), cdr: {car: "f7", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTEGER-TO-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f6", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("GENSYM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f5", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("FIND-SYMBOL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f4", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTERN"), cdr: {car: f3("FUNCTION"), cdr: {car: "f3", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTERNP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f2", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WHILE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CONDITION"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("BLOCK"), cdr: {car: f3("NIL"), cdr: {car: {car: f3("%WHILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("CONDITION"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("RETURN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&OPTIONAL"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("RETURN-FROM"), cdr: {car: f3("NIL"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NULL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f1", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFUN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("%DEFUN"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%DEFUN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("EVAL-WHEN-COMPILE"), cdr: {car: {car: f3("%COMPILE-DEFUN"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("FSETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("NAMED-LAMBDA"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SYMBOL-NAME"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BLOCK"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NAMED-LAMBDA"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("X"), cdr: {car: {car: f3("GENSYM"), cdr: {car: "FN", cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("SET"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: "fname", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFVAR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("&OPTIONAL"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("%DEFVAR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%DEFVAR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("EVAL-WHEN-COMPILE"), cdr: {car: {car: f3("%COMPILE-DEFVAR"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFMACRO"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("EVAL-WHEN-COMPILE"), cdr: {car: {car: f3("%COMPILE-DEFMACRO"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: f3("NIL")}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("EQ"), cdr: {car: f3("X"), cdr: {car: {car: f3("QUOTE"), cdr: {car: f3("&BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: f3("&REST"), cdr: f3("NIL")}}, cdr: {car: f3("X"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("ARGS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: f3("NIL"), cdr: {car: f3("NIL"), cdr: f3("NIL")}}}};
var l230 = f3("EVAL");
var f120;
(function(){
    v289 = l231;
    v293 = l232;
    v313 = l233;
    v388 = l234;
    v12 = l235;
    return v412 = l236;
})();
(function(){
    (function(){
        (function(){
            return f120 = (function(v656){
                ((v656)["fname"] = "EVAL");
                return v656;
            })((function (v657){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (function(v658){
                                return (function(){
                                    var string = v658;
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    return eval.apply(window, [string]);
                                })();
                            })((function(v659){
                                (function(){
                                    try {
                                        return (function(){
                                            return (function(v660,v661){
                                                (function(){
                                                    while(v660 !== v2){
                                                        v661 = (function(){
                                                            var tmp = v660;
                                                            return tmp === v2? v2: tmp.car;
                                                        })();
                                                        (v661)();
                                                        v660 = (function(){
                                                            var tmp = v660;
                                                            return tmp === v2? v2: tmp.cdr;
                                                        })();
                                                    }return v2;
                                                })();
                                                return v2;
                                            })(v253,v2);
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 207)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })();
                                return v659;
                            })((function(){
                                v253 = v2;
                                f101();
                                return f130(v657);
                            })()));
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
        return l230;
    })();
    return (function(){
        var string = f68("var lisp = {};", "lisp.read = ", f107(l237, v2), ";", v176, "lisp.print = ", f107(l238, v2), ";", v176, "lisp.eval = ", f107(l239, v2), ";", v176, "lisp.compile = ", f107(l240, v2), ";", v176, "lisp.evalString = function(str){", v176, "   return lisp.eval(lisp.read(str));", v176, "}", v176, "lisp.compileString = function(str){", v176, "   return lisp.compile(lisp.read(str));", v176, "}", v176);
        if (typeof string != 'string')
            throw 'The value ' + string + ' is not a type string.';
        return eval.apply(window, [string]);
    })();
})(); 
