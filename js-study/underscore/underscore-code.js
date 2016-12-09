/**
 * Created by Administrator on 2016-12-9.
 */
// underscore 敲源码
// 第一次时间：2016-12-9
(function () {

    var root = this;
    var previousUnderscore = root._;
    var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

    var
        push              = ArrayProto.push,
        slice             = ArrayProto.slice,
        toString          = ObjProto.toString,
        hasOwnProperty    = ObjProto.hasOwnProperty;

    var
        nativeIsArray     = Array.isArray,
        nativeKeys        = Object.keys,
        nativeBind        = FuncProto.bind,
        nativeCreate      = Object.create;

    // 原型设置的可重用构造函数。
    var Ctor = function () {};

    // Create a safe reference to the Underscore object for use below.
    var _ = function (obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
    };

    // Export the Underscore object for **Node.js**
    if (typeof exports !== 'undefined'){
        if (typeof module !== 'undefined' && module.exports){
            exports = module.exports = _;
        }
        exports._ = _;
    }else{
        root._ = _;
    }

    // Current version.
    _.VERSION = '1.7.0';

    // 内部函数，返回一个有效的（当前引擎）版本的传递在回调中，被反复应用在其他下划线功能
    var optimizeCb = function (func, context, argCount) {
        if (context === void 0) return func;
        switch (argCount == null ? 3 : argCount){
            case 1: return function (value) {
                return func.call(context, value);
            };
            case 2: return function (value, other) {
                return func.call(context, value, other)
            };
            case 3: return function (value, index, collection) {
                return func.call(context, value, index, collection)
            };
            case 4: return function (accumulator, value, index, collection) {
                return func.call(context, accumulator, value, index, collection)
            }
        }
        return function () {
            return func.apply(context, arguments);
        }
    };

    var cb = function (value, context, argCount) {
        if (value == null) return _.identity;
        if (_.isFunction(value)) return optimizeCb(value, context, argCount);
        if (_.isObject(value)) return _.matches(value);
        return _.property(value);
    };

    if(typeof /./ != 'function' && typeof Int8Array != 'object'){
        _.isFunction = function (obj) {
            return typeof obj == 'function' || false;
        };
    }
    _.isObject = function (obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    };

    // 用于检查一个对象是否有一组给定的“键：值”对。
    _.matches = function (attrs) {
        var pairs = _.pairs(attrs), length = pairs.length;
        return function (obj) {
            if(obj == null) return !length;
            obj = new Object(obj);
            for (var i = 0; i < length; i++){
                var pair = pairs[i], key = pair[0];
                if (pair[1] !== obj[key] || !(key in obj)) return false;
            }
            return true;
        }
    };

    // 将一个对象转换成一个列表中的[键，值]对
    _.pairs = function (obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var pairs = Array(length);
        for (var i = 0; i < length; i++){
            pairs[i] = [keys[i], obj[keys[i]]];
        }
        return pairs;
    };

    // key 在 IE < 9 中 'for key in ...' 不会迭代
    var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
    var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

    function collectNonEnumProps(obj, keys){
        var nonEnumIdx = nonEnumerableProps.length;
        var proto = typeof obj.constructor === 'function' ? FuncProto : ObjProto;

        while (nonEnumIdx--) {
            var prop = nonEnumerableProps[nonEnumIdx];
            if (prop === 'constructor' ? _.has(obj, prop) : prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)){
                keys.push(prop);
            }
        }
    }

    _.keys = function (obj) {
        if (!_.isObject(obj)) return [];
        if (nativeKeys) return nativeKeys(obj);
        var keys = [];
        for (var key in obj) if (_.has(obj, key)) keys.push(key);

        // IE < 9
        if (hasEnumBug) collectNonEnumProps(obj, keys);
        return keys;
    }

}.call(this));