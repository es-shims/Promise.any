const toPromise = value => Promise.resolve(value)

const reverse = value => {
  return new Promise((resolve, reject) => {
    return toPromise(value).then(reject, resolve)
  })
}

const any = iterable => {
  return reverse(Promise.all([...iterable].map(reverse)))
}

export default any
