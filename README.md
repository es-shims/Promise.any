# promise-any

[![Build Status](https://travis-ci.org/sadorlovsky/promise-any.svg?branch=master)](https://travis-ci.org/sadorlovsky/promise-any)
[![Coverage Status](https://coveralls.io/repos/github/sadorlovsky/promise-any/badge.svg?branch=master)](https://coveralls.io/github/sadorlovsky/promise-any?branch=master)

>  Standalone `bluebird.any`. Return first successful promise.

## Install
```bash
$ npm install --save promise.any
```

## Usage
```js
import any from 'promise.any'

any([
  Promise.resolve('✔️'),
  Promise.reject('❌')
]).then(value => {
  console.log(value) //=> ✔️
})

any([
  Promise.reject('❌'),
  Promise.reject('❌')
]).catch(errors => {
  console.log(errors) //=> ['❌', '❌']
})
```

### What the difference from [m0ppers/promise-any](https://github.com/m0ppers/promise-any)?

This package is the same, but with `node >= 4` support.

### Also

I'd rather take this one [sindresorhus/p-any](https://github.com/sindresorhus/p-any) :unicorn:

## License

MIT © [Zach Orlovsky](https://orlovsky.rocks)
