// In this kata you will be given an array of the dimensions of rectangles (array with width and length) and circles (radius - just a number). Your task is to sort the objects by their area in ascending order and return the sorted array of areas. Round the values of the areas to a maximum of two decimal places.


function solve(array) {

  let areaArr = [];
  
  for (let dimension of array) {
    let calculatedArea = 0;
    if (dimension[1] !== undefined) {
      calculatedArea = dimension[0] * dimension[1];
      areaArr.push(calculatedArea);
    } else {
      calculatedArea = Math.PI * (dimension ** 2); 
      areaArr.push(calculatedArea);
    }
  }

  areaArr.sort((a, b) => a - b);
  let fixed = areaArr.map(x => Number(x.toFixed(2)));
  
  return fixed; 
}
solve([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]])

// Example: 
// var array = [[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]];  // [rectangle, circle, circle, reactangle]
// sortByArea(array); // should return [ 4.31, 4.75, 27.2, 37.26 ]