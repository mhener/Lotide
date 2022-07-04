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

const middle = function(array) {
  let middleValue = array.length / 2;
  if (array.length <= 2){
    return [];
  } else if (array.length % 2 !== 0) {
    return [array[Math.floor(middleValue)]];
  } else {
    return [array[Math.floor(middleValue - 1)], array[middleValue]];
  }
};

assertArraysEqual(middle([0,1,2,3,4,5,6,7,8,9,10]));

