//PASTED WORK
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

//ACTUAL WORK

const letterPositions = function(words) {
  const results = {};
  const letters = words.split('');
  console.log(letters);
  for (let i = 0; i < letters.length; i++) {
    const character = letters[i];
    if (!results[character]) {
      results[character] = [i];
    } else {
      results[character].push(i);
    }
  }
  console.log(results);
  return results;
};


// Test
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse").e, [9]);

//the index should be set to the index that 'e' appears, this will then allow you to extract the array of index!