// Searching for a key of an object by where its value matches a given value
// the function should scan an object and return the first key in which it contains the given value
// if no key with that given value is found then it should return undefined
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  for (const keys in object) {
    if (object[keys] === value) {
      return keys;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// remember asserEqual will only compare primative values.