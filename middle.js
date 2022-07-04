const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let middleValue = array.length / 2;
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    return [array[Math.floor(middleValue)]];
  } else {
    return [array[Math.floor(middleValue - 1)], array[middleValue]];
  }
};

module.exports = middle;


