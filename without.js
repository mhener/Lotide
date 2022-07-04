const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅ ✅ ✅ Assertion Passed`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed`);
  }
};

// We have a function that is called without, it takes in a parameter of an array and another parameter of values to remove from said array:
const without = function(sourceArray, itemsToRemoveArray) {
// Declare a new empty array variable to push the values kept into this empty array:
  let newArray = [];
  // We want to loop around our source array:
  for (let i = 0; i < sourceArray.length; i++) {
  // We also want to loop arounf our items to remove array:
    for (let j = 0; j < itemsToRemoveArray.length; j++) {
    // We are looking for any values that exist in the source array and in the items to remove array:
      if (sourceArray[i] === itemsToRemoveArray[j]) {
        break;
      }
      if (itemsToRemoveArray.length - 1 === j) {
        newArray.push(sourceArray[i]);
      }
    }
  }
  return newArray;
};

const testing = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
without(testing, [2, 4, 6, 8, 10]);

assertArraysEqual(without([1, 2, 3, 4], [1, 3]), [2,4]);
