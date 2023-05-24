/**
 * @param {Function} fn
 * @return {Function}
 */

const once = function(fn) {
  let usedOnce = false
  return function(...args){
    if (!usedOnce) {
      usedOnce = true
      return fn(...args)
    } else {
      return undefined
    }
       
  }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */