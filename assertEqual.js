// My original Code
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else { //it is actually RARE to see else in "professional code"
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// When using an "if" use it to check for what you DON'T want

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  //HAPPY PATH (nickname in the pro world)
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

//Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);