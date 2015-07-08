'use strict';

/**
 * Verifies str is a string
 * @param {String} str - string to verify type
 * @throws {TypeError} - if str is not a string
 */
function typeCheck(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
}

/**
 * Returns the number of spaces at end of a line
 * @param {String} str - str to analyze
 * @return {Number} - number of spaces at end of line
 */
exports.end = function (str) {
  let spacesCount = 0
    , i;

  typeCheck(str);

  for (i = str.length - 1; str[i] === ' '; i--) {
    spacesCount++;
  }

  return spacesCount;
};

/**
 * Returns the number of spaces at beginning of a line
 * @param {String} str - str to analyze
 * @return {Number} - number of spaces at beginning of line
 */
exports.start = function (str) {
  typeCheck(str);

  return str.substring(0, str.search(/[^ ]/)).length;
};

/**
 * Returns the total number of spaces in a line
 * @param {String} str - str to analyze
 * @return {Number} - number of spaces in a line
 */
exports.total = function (str) {
  let match;

  typeCheck(str);

  match = str.match(/ /g);

  if (match) {
    return match.length;
  }

  return 0;
};
