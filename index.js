// index.js
const head   = require('./head');
const tail   = require('./tail');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const middle = require('./middle');


module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  eqArrays,
};