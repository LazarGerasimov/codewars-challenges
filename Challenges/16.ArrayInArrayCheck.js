// Is every value in the array an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

// 1)

const arrCheck = (value) => {
  let isArr = true; 
  
  for (let el of value) {
    if (!Array.isArray(el)) {
      isArr = false;
    }
  }
  
  return isArr;
}

//  // 2) Shorter solution
// const arrCheck = a => a.every(Array.isArray);



// Examples:
// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false