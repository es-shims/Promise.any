'use strict';

var requirePromise = require('./requirePromise');

requirePromise();

var ES = require('es-abstract/es2019');
var callBound = require('es-abstract/helpers/callBound');

var all = callBound('Promise.all');
var reject = callBound('Promise.reject');

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
