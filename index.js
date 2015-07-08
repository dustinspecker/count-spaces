'use strict';

/**
 * Returns the number of spaces at end of a line
 * @param {String} str - str to analyze
 * @return {Number} - number of spaces at end of line
 */
exports.end = function (str) {
  let i = str.length - 1
    , spacesCount = 0;

  while (str[i] === ' ') {
    i--;
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
  return str.substring(0, str.search(/[^ ]/)).length;
};

/**
 * Returns the total number of spaces in a line
 * @param {String} str - str to analyze
 * @return {Number} - number of spaces in a line
 */
exports.total = function (str) {
  const match = str.match(/ /g);

  if (match) {
    return match.length;
  }

  return 0;
};
