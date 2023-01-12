//PASTED
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key of Object.keys(object1)) {
    if (!Object.keys(object2).includes(key)) {
      return false;
    }
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

//ACTUAL WORK

// FUNCTION IMPLEMENTATION

const assertObjectsEqual = function(actual, expected) {
  const inspect = require(`util`).inspect;
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed:  ${inspect(ab)} !== ${inspect(ba)}`);
  } else {
    console.log(`✅✅✅ Assertion Passed:  ${inspect(ab)} === ${inspect(ba)}`);
  }
};

//TEST
const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
console.log(assertObjectsEqual(eqObjects(ab,ba), true));
