const readline = require('readline-sync');
const {findAllNeighbours} = require('./gameOfLifeUtil.js');

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

//console.log(handleUserInput());
console.log(findAllNeighbours(3));
console.log(findAllNeighbours(4));
console.log(findAllNeighbours(5));
