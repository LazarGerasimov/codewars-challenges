// Is every value in the array an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.



const arrCheck = (value) => {
  let isArr = true; 
  
  for (let el of value) {
    if (!Array.isArray(el)) {
      isArr = false;
    }
  }
  
  return isArr;
}


// Examples:
// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false