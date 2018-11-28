const readline = require('readline-sync');
const {zipper, validateNeighbours} = require('./gameOfLifeUtil.js');

const handleUserInput = function(){
  let universeSize = +readline.question("Please enter size of the universe \n");
  let initialUniverseState = new Array(universeSize).fill(0).map(x => []); 
  let requiredGeneration;
  console.log("Enter the states of following cells\n");
  for (let row = 0; row<universeSize;row++) {
    for (let column = 0; column<universeSize;column++) {
     initialUniverseState[row][column] = readline.question("[ "+row+" , "+column+" ]  :  ");
    }
  }
  requiredGeneration = +readline.question("Please enter the required generation of given state \n");
  return initialUniverseState;
}

const findNeighboursOfCell = function(cell,universeSize) {
  let xCoordinates = [cell[0]-1, cell[0], cell[0]+1];
  let yCoordinates = [cell[1]-1, cell[1], cell[1]+1];
  let zip = zipper(yCoordinates);
  let allNeighbours = xCoordinates.reduce(zip, []);
  allNeighbours.splice(4,1);
  validateNeighbour = validateNeighbours.bind(null,universeSize-1);
  let allValidNeighbours = allNeighbours.filter(validateNeighbour);
  return allValidNeighbours;
}

const findAllNeighbours = function(universeSize){
  let allNeighbours = {}
  for (let row = 0; row<universeSize;row++) {
    for (let column = 0; column<universeSize;column++) {
      allNeighbours["["+row+", "+column+"]"] = findNeighboursOfCell([row,column], universeSize);
    }
  }
  return allNeighbours;
}

calculateAliveNeighboursOfCell = function(allNeighbours, initialGeneration, cell){
    let numberOfAliveNeighbours = 0;
    let neighboursOfCell = allNeighbours[cell];
    for (let neighbour of neighboursOfCell){
      let currentStatus = initialGeneration[neighbour[0]][neighbour[1]] ;
      if(currentStatus == 'A'){numberOfAliveNeighbours ++ }
    }
    return numberOfAliveNeighbours;
}

const aliveNeighboursCalculator = function(result, cell) {
  result[cell] = calculateAliveNeighboursOfCell(cell);
  return result;
}

const calculateAliveNeighbours = function(allNeighbours, initialGeneration){
  let cells = Object.keys(allNeighbours);
  calculateAliveNeighboursOfCell = calculateAliveNeighboursOfCell.bind(null, allNeighbours, initialGeneration);
  let numberOfAliveNeighbours = cells.reduce(aliveNeighboursCalculator, {});
  return numberOfAliveNeighbours;
}

module.exports = {findNeighboursOfCell, findAllNeighbours, calculateAliveNeighbours};
