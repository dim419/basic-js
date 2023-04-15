const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  return str.replace(/(?=(\w))\1{2,}/g, match => 
    (match.length + match.slice(0,2)).slice(0,2));
}

module.exports = {
  encodeLine
};
