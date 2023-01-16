const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


// ACTUAL FUNCTION

const middle = function(array) {
  let newArr = [];
  // 1 or 2 elements  
  if (array.length <= 2 && array.length > 0){
    // even number of elements
    } else if (array.length % 2 === 0){
        newArr =[array[(array.length/2)-1],array[array.length/2]]
    // odd number of elements
    } else if (array.length % 2 !== 0){
        newArr = [array[Math.floor(array.length/2)]]
    }
    return newArr;  
  }


//Export Code
module.exports = middle;