/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

let dictionary = {}
let count = 100000


var encode = function(longUrl) {
    let tinyUrl = count
    dictionary[tinyUrl] = longUrl
    count++
    console.log(dictionary)
    return tinyUrl
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return dictionary[shortUrl]
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */


/*


*/

























