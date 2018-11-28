const assert = require('assert');
const fs = require('fs');
const {findNeighboursOfCell, findAllNeighbours} = require('../src/gameOfLifeUtil.js');

describe("findNeighboursOfCell ",function(){
  it("should return an array of three neighbours",function(){
    let expectedOutput = [[0,1],[1,0],[1,1]];
    assert.deepEqual(findNeighboursOfCell([0,0],3),expectedOutput);
    expectedOutput = [[0,1],[1,1],[1,2]];
    assert.deepEqual(findNeighboursOfCell([0,2],3),expectedOutput);
    expectedOutput = [[1,0],[1,1],[2,1]];
    assert.deepEqual(findNeighboursOfCell([2,0],3),expectedOutput);
    expectedOutput = [[1,1],[1,2],[2,1]];
    assert.deepEqual(findNeighboursOfCell([2,2],3),expectedOutput);
  });

  it("should return an array of eight neighbours",function(){
    let expectedOutput = [[0, 0], [0,1],[0,2], [1,0], [1,2], [2,0], [2, 1], [2, 2]];
    assert.deepEqual(findNeighboursOfCell([1,1],3),expectedOutput);
  })

  it("should return an array of five neighbours",function(){
    let expectedOutput = [[0, 0], [0,1], [1,1], [2,0], [2, 1]];
    assert.deepEqual(findNeighboursOfCell([1,0],3),expectedOutput);
  })
});


describe("findAllNeighbours ",function(){
  const allOutputs = fs.readFileSync('./test/testData/findAllNeighboursOutput.json','utf8').split('\n\n');
  it("should return an object of neighbours of nine cells",function(){
    let expectedOutput = JSON.parse(allOutputs[0]);
    assert.deepEqual(findAllNeighbours(3),expectedOutput);
  })
});
