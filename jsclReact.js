function _jsclReact_createElement(element, props, children) {
    var args = Array.prototype.slice.call(arguments);
    if(args[0].hasOwnProperty("jscl_original")) {
        args[0] = args[0].jscl_original;
    }
    return React.createElement.apply(null, args);
}

var _jsclReact_createClass = function(){
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) {
                descriptor.writable = true;
            }
            Object.defineProperty(target, descriptor.key, descriptor); }
    }

    return function(Constructor, protoProps, staticProps){
        if (protoProps){
            defineProperties(Constructor.prototype, protoProps);
        }
        if (staticProps){
            defineProperties(Constructor, staticProps);
        }
        return Constructor;
    };
}();

function _jsclReact_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _jsclReact_possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _jsclReact_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) {
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
}

function _jsclReact_createComponent(componentName, actualSuperClass, props) {

    var subClass = function (superClass) {
        function subClass() {
            _jsclReact_classCallCheck(this, subClass);

            var _this = _jsclReact_possibleConstructorReturn(this, (subClass.__proto__ || Object.getPrototypeOf(subClass)).call(this));

            for (var i = 0; i < props.length; i++)
            {
                var descriptor = props[i];
                if("value" in descriptor) {
                    if(typeof descriptor.value === "function"){
                        _this[descriptor.key] = descriptor.value.bind(_this);
                    } else {
                        _this[descriptor.key] = descriptor.value;
                    }
                }
            }
            return _this;
        }

        _jsclReact_inherits(subClass, superClass);
        _jsclReact_createClass(subClass, props);

        return subClass;
    }(actualSuperClass);

    return subClass;
}

function _jsclReact_setState(that, state)
{
    return that.setState(state);
}
