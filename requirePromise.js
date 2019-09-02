'use strict';

module.exports = function requirePromise() {
	if (typeof Promise !== 'function') {
		throw new TypeError('`Promise.any` requires a global `Promise` be available.');
	}
	if (typeof Array.from !== 'function') {
		throw new TypeError('`Promise.any` requires `Array.from` be available.');
	}
};
