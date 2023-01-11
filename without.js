const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (!result) {
    console.log("🛑🛑🛑 whoops, these arrays are not equal");
  } else {
    console.log("✅✅✅ nice, these arrays are equal");
  }
};

const without = function(source, itemToRemove) {
  let newArr = [...source];
  for (let i = 0; i <= newArr.length; i++) {
    for (let j = 0; j <= itemToRemove.length; j++) {
      if (source[i] === itemToRemove[j]) {
        newArr.splice(i, 1);
      }
    }
  }
  return newArr;
};
//Tests
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => true
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]