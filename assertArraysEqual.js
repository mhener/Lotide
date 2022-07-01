const eqArrays = function(array1, array2) {
  let result = false;
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

/*
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

assertArraysEqual([1, 2, 3], [1, 2, 3], true);
*/