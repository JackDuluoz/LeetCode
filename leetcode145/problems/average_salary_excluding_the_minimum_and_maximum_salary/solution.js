/**
 * @param {number[]} salary
 * @return {number}
 */

const average = function(salary) {
    console.log(salary)
    const minIndex = salary.indexOf(Math.min(...salary))
    salary.splice(minIndex, 1)
    const maxIndex = salary.indexOf(Math.max(...salary))
    salary.splice(maxIndex, 1)
    console.log(salary)
    let sum = 0
    for (const sal of salary) {
        sum += sal
    }
    return sum / (salary.length)
};