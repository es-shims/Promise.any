'use strict';

var any = require('../');
any.shim();

var test = require('tape');

var runTests = require('./builtin');

test('shimmed', function (t) {
	runTests(t);

	t.end();
});
