const assert = require('chai').assert;

const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

describe("#middle", () => {
  it("returns [5] for [0,1,2,3,4,5,6,7,8,9,10]", () => {
    assert.deepEqual(middle([0,1,2,3,4,5,6,7,8,9,10]), [5]);
  });

  it("returns [6,8] for [2, 4, 6, 8, 10, 12]", () => {
    assert.deepEqual(middle([2, 4, 6, 8, 10, 12]), [6, 8]); 
  });

});
