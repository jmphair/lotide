//Pasted Function
const assertEqual = function (actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Actual Work
const countLetters = function (str) {
  const result = {};
  const lowerCaseStr = str.toLowerCase();
  for (let letter of lowerCaseStr) {
    if (!result[letter]) {
      result[letter] = 1;
    } else {
      result[letter]++;
    }
  }
  return result;
};

// Test Code:

console.log(countLetters("LHL"));
console.log(assertEqual(countLetters("LHL"), { l: 2, h: 1 }));


console.log(countLetters("lighthouse in the house"));
console.log(assertEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, ' ': 3, n: 1 }));
