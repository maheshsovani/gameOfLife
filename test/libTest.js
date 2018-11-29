const assert = require('assert');
const fs = require('fs');
const {findNeighboursOfCell, findAllNeighbours , calculateAliveNeighbours} = require('../src/gameOfLifeLib.js');

describe("findNeighboursOfCell ",function(){
  it("should return an array of three neighbours",function(){
    let expectedOutput = [[0,1],[1,0],[1,1]];
    assert.deepEqual(findNeighboursOfCell([0,0],2),expectedOutput);
    expectedOutput = [[0,1],[1,1],[1,2]];
    assert.deepEqual(findNeighboursOfCell([0,2],2),expectedOutput);
    expectedOutput = [[1,0],[1,1],[2,1]];
    assert.deepEqual(findNeighboursOfCell([2,0],2),expectedOutput);
    expectedOutput = [[1,1],[1,2],[2,1]];
    assert.deepEqual(findNeighboursOfCell([2,2],2),expectedOutput);
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
    let bounds = {topLeft: [0,0], bottomRight: [2, 2]};
    assert.deepEqual(findAllNeighbours(bounds),expectedOutput);
  })
  it("should return an object of neighbours of sixteen cells",function(){
    let expectedOutput = JSON.parse(allOutputs[1]);
    let bounds = {topLeft: [0,0], bottomRight: [3, 3]};
    assert.deepEqual(findAllNeighbours(bounds),expectedOutput);
  })
  it("should return an object of neighbours of twenty five cells",function(){
    let expectedOutput = JSON.parse(allOutputs[2]);
    let bounds = {topLeft: [0,0], bottomRight: [4, 4]};
    assert.deepEqual(findAllNeighbours(bounds),expectedOutput);
  })
});

describe("calculateAliveNeighbours",function(){
  it("should return an object of having four keys of four cell and their respective alive neighbours",function(){
    let initialGeneration = [[0, 0], [1, 1]];
    let allNeighbours = { '[0,0]' : [[0,1],[1,0],[1,1]],
                          '[0,1]' : [[0,0],[1,0],[1,1]],
                          '[1,0]' : [[0,0],[0,1],[1,1]],
                          '[1,1]' : [[0,0],[0,1],[1,0]] };
    let expectedOutput = {'[0,0]' : 1, '[0,1]' : 2, '[1,0]' : 2, '[1,1]' : 1}
    let actual = calculateAliveNeighbours(allNeighbours, initialGeneration);
    assert.deepEqual(actual, expectedOutput);
  })
});
