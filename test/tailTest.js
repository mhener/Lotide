const assert = require('chai').assert;
const tail = require('../tail.js');
const assertEqual = require('../assertEqual');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it('returns [3, 4, 5, 6, 7, 8] for [2, 3, 4, 5, 6, 7, 8]', () =>{
    assert.deepEqual(tail([2, 3, 4, 5, 6, 7, 8]), [3, 4, 5, 6, 7, 8])
  });
  
});