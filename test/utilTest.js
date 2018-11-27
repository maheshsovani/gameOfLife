const assert = require('assert');
const {findOutAllNeighbours} = require('../src/gameOfLifeUtil.js');

describe("findOutAllNeighbours ",function(){
  it("should return array of three neighbours",function(){
    let expectedOutput = [[0,1],[1,0],[1,1]];
    assert.deepEqual(findOutAllNeighbours([0,0]),expectedOutput);
    expectedOutput = [[0,1],[1,1],[1,2]];
    assert.deepEqual(findOutAllNeighbours([0,2]),expectedOutput);
    expectedOutput = [[1,0],[1,1],[2,1]];
    assert.deepEqual(findOutAllNeighbours([2,0]),expectedOutput);
    expectedOutput = [[1,1],[1,2],[2,1]];
    assert.deepEqual(findOutAllNeighbours([2,2]),expectedOutput);
  });
});

