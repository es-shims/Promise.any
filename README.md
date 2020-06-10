# promise.any <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

ES Proposal spec-compliant shim for Promise.any. Invoke its "shim" method to shim `Promise.any` if it is unavailable or noncompliant. **Note**: a global `Promise` must already exist: the [es6-shim](https://github.com/es-shims/es6-shim) is recommended.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment that has `Promise` available globally, and complies with the [proposed spec](https://github.com/tc39/proposal-promise-any).

Most common usage:
```js
var assert = require('assert');
var any = require('promise.any');

var resolved = Promise.resolve(42);
var rejected = Promise.reject(-1);
var alsoRejected = Promise.reject(Infinity);

any([resolved, rejected, alsoRejected]).then(function (result) {
	assert.equal(result, 42);
});

any([rejected, alsoRejected]).catch(function (error) {
	assert.ok(error instanceof AggregateError);
	assert.deepEqual(error.errors, [-1, Infinity]);
});

any.shim(); // will be a no-op if not needed

Promise.any([resolved, rejected, alsoRejected]).then(function (result) {
	assert.equal(result, 42);
});

Promise.any([rejected, alsoRejected]).catch(function (error) {
	assert.ok(error instanceof AggregateError);
	assert.deepEqual(error.errors, [-1, Infinity]);
});
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

## Pre-1.0 versions

The `promise.any` package was released as now-deprecated v0.1.0 and v0.1.1, as a fork of https://github.com/m0ppers/promise-any.

Thanks to @sadorlovsky for donating the repo and the `promise.any` npm package!

[package-url]: https://npmjs.com/package/promise.any
[npm-version-svg]: http://versionbadg.es/es-shims/Promise.any.svg
[travis-svg]: https://travis-ci.org/es-shims/Promise.any.svg
[travis-url]: https://travis-ci.org/es-shims/Promise.any
[deps-svg]: https://david-dm.org/es-shims/Promise.any.svg
[deps-url]: https://david-dm.org/es-shims/Promise.any
[dev-deps-svg]: https://david-dm.org/es-shims/Promise.any/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Promise.any#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/promise.any.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/promise.any.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/promise.any.svg
[downloads-url]: http://npm-stat.com/charts.html?package=promise.any
