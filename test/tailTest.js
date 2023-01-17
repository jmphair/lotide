// const assertEqual = require('../assertEqual'); NO LONGER NEEDED

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  
  it("returns 3 for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    console.log("Test Case 1: Check the original array");
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3);
  });

  it("returns 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    console.log("Test Case 2: Check the returned array elements");
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result.length, 2);
    assert.deepEqual(result[0], "Lighthouse");
    assert.deepEqual(result[1], "Labs");
  });

});