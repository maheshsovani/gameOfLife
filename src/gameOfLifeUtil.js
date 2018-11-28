const zipper = function(yCoordinates) {
  return function(result, element) {
    for(let index = 0; index < yCoordinates.length; index++) {
      result.push([element, yCoordinates[index]]);
    }
    return result; 
  }
}

validateNeighbours = function(universeSize,neighbour) {
  let isNeighbourValid = neighbour.some(element => element < 0 || element > universeSize);
  return !isNeighbourValid;
}

module.exports = { zipper, validateNeighbours };
