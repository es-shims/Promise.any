'use strict';

var requirePromise = require('./requirePromise');

requirePromise();

var ES = require('es-abstract/es2018');
var GetIntrinsic = require('es-abstract/GetIntrinsic');
var bind = require('function-bind');

var all = bind.call(Function.call, GetIntrinsic('%Promise_all%'));
var reject = bind.call(Function.call, GetIntrinsic('%Promise_reject%'));

var identity = function (x) {
	return x;
};

module.exports = function any(iterable) {
	var C = this;
	if (ES.Type(C) !== 'Object') {
		throw new TypeError('`this` value must be an object');
	}
	var thrower = function (value) {
		return reject(C, value);
	};
	return all(C, Array.from(iterable, function (item) {
		var itemPromise = ES.PromiseResolve(C, item);
		try {
			return itemPromise.then(thrower, identity);
		} catch (e) {
			return e;
		}
	})).then(thrower, identity);
};
