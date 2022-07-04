const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const keys in object1) {
      if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
        if (eqArrays((object1[keys], object2[keys])) === false)
          return false;
      } else if (object1[keys] !== object2[keys]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(object1, object2) === true) {
    console.log(`✅ ✅ ✅ Assertion Passed`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

