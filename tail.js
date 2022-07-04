const assertEqual = require('./assertEqual');

const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray = console.log(array[i]);
  }
  return newArray;
};

module.exports = tail;