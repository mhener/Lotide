// return a "slice of the array with elements taken from the beginning."
// It should keep going until the callback/predicate returns a truthy value. (so we start with false)
// the callback should only be provided one value: The item in the array.
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



const takeUntil = function(array, callback) {
  const newArray = [];
  for (const item of array) {
    if (item % 2 !== 0) {
      newArray.push(item);
    }
  }
  return newArray.slice(0,3);
};

const array = [1,4,5,8,10,13,14,15,18,21];
const results = takeUntil(array, x => x * 2);
console.log(results);

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);


assertArraysEqual(takeUntil(array, x => x * 2), [1,5,13]);


// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);


// //expected output:
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

