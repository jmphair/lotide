// Pasted
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Actual Work
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

// MY ORIGINAL CODE
// const countOnly = function(allItems, itemsToCount) {
//   const results = {};
//   for (const item of allItems) {
//     if (itemsToCount[item]) {
//       if (results[item]) {
//         results[item] += 1;
//       } else {
//         results[item] = 1;
//       }
//     }
//   }
//   return results;
// };

const countOnly = function (allItems, itemsToCount) {
  const result = {};
  for (const item of allItems) {
    if (!itemsToCount[item]) {
      continue;
    }
    if (!result[item]) {
      result[item] = 0;
    }
    // HAPPY PATH
    result[item]++;
  }
  return result;
};

// Test Code:
// Arrays are actually OBJECTS where the key is the index number.

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