/**
 * @param {number} n
 * @return {number}
 */

const subtractProductAndSum = function(n) {
    let product = 1
    let sum = 0
    let array = []
    let string = n.toString()
    for (let s of string) {
        array.push(Number(s))
    }
    for (let a of array) {
        sum+= a
        product = product * a
    }
    return product - sum
};