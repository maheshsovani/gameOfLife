const readline = require('readline-sync');

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
  requiredGeneration = +readline.question("Please enter the reequired generation of given state \n");
}

handleUserInput();
