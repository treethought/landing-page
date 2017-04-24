// taken from @redjack's fork of camelize https://raw.githubusercontent.com/redjack/camelize/tokens/index.js

module.exports = function(obj, tokens) {
    tokens = (tokens || '_.-');
    tokens = '[' + tokens + '](\\w|$)';
    var exp = new RegExp(tokens, 'g');
    if (typeof obj === 'string') return camelCase(exp, obj);
    return walk(exp, obj);
};

function walk (exp, obj) {
    var boundWalk = walk.bind(null, exp);
    if (!obj || typeof obj !== 'object') return obj;
    if (isDate(obj) || isRegex(obj)) return obj;
    if (isArray(obj)) return map(obj, boundWalk);
    return reduce(objectKeys(obj), function (acc, key) {
        var camel = camelCase(exp, key);
        acc[camel] = walk(exp, obj[key]);
        return acc;
    }, {});
}

function camelCase(exp, str) {
    return str.replace(exp, function (_,x) {
        return x.toUpperCase();
    });
}

var isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
};

var isDate = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Date]';
};

var isRegex = function (obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var has = Object.prototype.hasOwnProperty;
var objectKeys = Object.keys || function (obj) {
    var keys = [];
    for (var key in obj) {
        if (has.call(obj, key)) keys.push(key);
    }
    return keys;
};

function map (xs, f) {
    if (xs.map) return xs.map(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        res.push(f(xs[i], i));
    }
    return res;
}

function reduce (xs, f, acc) {
    if (xs.reduce) return xs.reduce(f, acc);
    for (var i = 0; i < xs.length; i++) {
        acc = f(acc, xs[i], i);
    }
    return acc;
}
