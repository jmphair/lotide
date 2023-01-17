
const tail = function(array) {
  let tailOfArray = [];
  for (let i = 1; i < array.length; i++) {
    // console.log("---");
    // console.log("i", i);
    // console.log("val", array[i]);
    tailOfArray.push(array[i]);
  }
  return tailOfArray;
};

//Export Code
module.exports = tail;