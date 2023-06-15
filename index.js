


function solve(arr) {
  let isArr = true; 

  for (let element of arr) {
    if (!Array.isArray(element)) {
      isArr = false;
    }
  }

  return isArr;
  
  
}
solve([['2'], ['2']]);