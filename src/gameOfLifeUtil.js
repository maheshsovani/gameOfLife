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

const contains = function(currentGeneration, neighbour) {
  let isContained = currentGeneration.some(function(cell) { return cell[0]===neighbour[0] && cell[1] === neighbour[1]});
  return isContained;
}

module.exports = { zipper, validateNeighbours, contains};
