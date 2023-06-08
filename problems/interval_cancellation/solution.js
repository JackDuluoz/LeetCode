/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

const cancellable = function(fn, args, t) {
  fn(...args)
  let loop = setTimeout(function run() {
      fn(...args)
      loop = setTimeout(run, t)
  }, t)
  const cancelFn = () => clearTimeout(loop)
  return cancelFn
};