const eqArrays = require('./eqArrays');


const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (!result) {
    console.log("🛑🛑🛑 whoops, these arrays are not equal");
  } else {
    console.log("✅✅✅ nice, these arrays are equal");
  }
};

//Export Code
module.exports = assertArraysEqual;