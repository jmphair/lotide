const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (!result) {
    console.log("🛑🛑🛑 whoops, these arrays are not equal");
  } else {
    console.log("✅✅✅ nice, these arrays are equal");
  }
};

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

const flatten = function(arr) {
  let flattened = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened = flattened.concat(flatten(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
};

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]))

module.exports = flatten;