/**
 * @param {string} columnTitle
 * @return {number}
 */

const titleToNumber = function(columnTitle) {
  let str = columnTitle.toLowerCase()
  let total = str.charCodeAt(str.length - 1) - 96
  if (str.length > 1) {
    let power = str.length - 1
    let i = 0
    while (power > 0) {
      let letterVal = str.charCodeAt(i) - 96
      total += ((26 ** power) * letterVal)
      power--
      i++
    }
  }
  return total
};


/*

23

26^6 * F 1 853 494 656

26^5 * X 47 525 504

26^4 * S 8 682 544

26^3 * H 140 608

26^2 * R 12 168 

26^1 * X 624 



declare variable total

add string.charCodeAt(string.At(-1)) - 96

if string.length greater than 1 do this, otherwise skip to line 35 and return total

declare variable 'power' for string.length - 1
declare variable i = 0
declare variable letterVal

while power is greater than 0

letterVal = string.charCodeAt(i) - 96

take letter i and  26^power * letterVal
add to total

decrement power by 1
increment i by 1

return total


A = 1

AA = 27

AAA = 703         26^2 + 26*1 + A        

B = 2

BB = 54           26 * 2 + B

BBB = 1406        ((26^2) * B) + ((26^1) * B) + B

C = 3

CC = 81

CCC = 2109

D = 4

DD = 108

DDD = 2812 







AAA = 703

AAAA = 26^1 + 26^2 + 26^3 + 1(A) 17576 + 703 = 18279


*/