const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//countOnly will be given an array and an
//object, it will return an object containing
//counts of everything that the input object
//listed.
//Only keys which have truthy values will be
//counted in the resulting object
//if a string doesn't exist in the OG array,
//we will not count it

//allItems: an array of strings that we need to look through
//itemsToCount: an object specifying what to count.


const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    // console.log(item);
    // if (results[item]) {
    //   results[item] += 1;
    // } else {
    //   results[item] = 1;
    // }
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);