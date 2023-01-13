//PASTED
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ORIGINAL CODE
// const findKey = function(obj, callback) {
//   for(let key in obj) {
//     if (callback(obj[key])) {
//       return key;
//     }
//   }
// };


const findKey = function(obj, callback) {
  const keys = Object.keys(obj);
  for(const key of keys) {
    const value = obj[key];
    if (callback(value)) {
      return key;
    }
  }
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

//TEST
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
      "Blue Hill": { stars : 1 },
      " Akaleri" : { stars : 3 },
       "noma" :    { stars : 2 },
       "elBulli" : { stars : 2 },
       "Akelarre": { stars : 3 }
  }, x => x.stars === 1), "Blue Hill");