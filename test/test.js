import test from 'ava'
import any from '../src'

test('handle empty array', t => {
  const promises = []
  return any(promises).catch(reasons => {
    t.deepEqual(reasons, [])
  })
})

test('handle [success]', async t => {
  const promises = [Promise.resolve(42)]
  t.is(await any(promises), 42)
})

test('handle first one of [success, success]', async t => {
  const promises = [
    Promise.resolve('first'),
    Promise.resolve('second')
  ]
  t.is(await any(promises), 'first')
})

test('handle fast one of [success, success]', async t => {
  const promises = [
    new Promise(resolve => setTimeout(() => resolve('slow'), 500)),
    new Promise(resolve => setTimeout(() => resolve('fast'), 100))
  ]
  t.is(await any(promises), 'fast')
})

test('handle [success, failure]', async t => {
  const promises = [
    Promise.resolve('success'),
    Promise.reject('failure')
  ]
  t.is(await any(promises), 'success')
})

test('handle [failure, success]', async t => {
  const promises = [
    Promise.reject('failure'),
    Promise.resolve('success')
  ]
  t.is(await any(promises), 'success')
})

test('handle [failure, failure]', t => {
  const promises = [
    Promise.reject(1),
    Promise.reject(2)
  ]
  return any(promises).catch(reasons => {
    t.deepEqual(reasons, [1, 2])
  })
})

test('handle normal values', async t => {
  const promises = [1, 2]
  t.is(await any(promises), 1)
})

test('handle any iterables', async t => {
  const promises = (function* promises () {
    yield Promise.reject('failure')
    yield Promise.resolve('success')
  })()
  t.is(await any(promises), 'success')
})
