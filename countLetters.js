const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// We declare a function that will take in a parameter of a string
// We will declare an empty object variable to put results in
// We will loop over the string and output the letters & their count
// The output is the letter count for each letter in the sentence

const countLetters = function(string) {
  const result = {};
  const newString = string.split(' ').join('').toLowerCase();
  for (let letters of newString) {
    if (result[letters]) {
      result[letters] += 1;
    } else {
      result[letters] = 1;
    }
  }
  return result;
};

const result1 = countLetters('Lighthouse Labs in the house');

assertEqual(result1['l'], 2);