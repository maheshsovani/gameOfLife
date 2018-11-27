const zipper = function(yCoordinates) {
  return function(result, element) {
    for(let index = 0; index < yCoordinates.length; index++) {
      result.push([element, yCoordinates[index]]);
    }
    return result; 
  }
}

const validateNeighbours = function(neighbour) {
  let isNeighbourValid = neighbour.some(element => element < 0 || element > 2);
  return !isNeighbourValid;
}

const findOutAllNeighbours = function(cell) {
  let xCoordinates = [cell[0]-1, cell[0], cell[0]+1];
  let yCoordinates = [cell[1]-1, cell[1], cell[1]+1];
  let zip = zipper(yCoordinates);
  let allNeighbours = xCoordinates.reduce(zip, []);
  allNeighbours.splice(4,1);
  let allValidNeighbours = allNeighbours.filter(validateNeighbours);
  return allValidNeighbours;
}

exports.findOutAllNeighbours = findOutAllNeighbours;
