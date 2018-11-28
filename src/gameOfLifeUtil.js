const zipper = function(yCoordinates) {
  return function(result, element) {
    for(let index = 0; index < yCoordinates.length; index++) {
      result.push([element, yCoordinates[index]]);
    }
    return result; 
  }
}

const validateNeighbours = function(universeSize,neighbour) {
  let isNeighbourValid = neighbour.some(element => element < 0 || element > universeSize);
  return !isNeighbourValid;
}

const findNeighboursOfCell = function(cell,universeSize) {
  let xCoordinates = [cell[0]-1, cell[0], cell[0]+1];
  let yCoordinates = [cell[1]-1, cell[1], cell[1]+1];
  let zip = zipper(yCoordinates);
  let allNeighbours = xCoordinates.reduce(zip, []);
  allNeighbours.splice(4,1);
  let validateNeighbour = validateNeighbours.bind(null,universeSize-1);
  let allValidNeighbours = allNeighbours.filter(validateNeighbour);
  return allValidNeighbours;
}

const findAllNeighbours = function(universeSize){
  let neighbours = {}
  for (let row = 0; row<universeSize;row++) {
    for (let column = 0; column<universeSize;column++) {
      neighbours["["+row+", "+column+"]"] = findNeighboursOfCell([row,column], universeSize);
    }
  }
  return neighbours;
}

exports.findNeighboursOfCell = findNeighboursOfCell;
exports.findAllNeighbours = findAllNeighbours;
