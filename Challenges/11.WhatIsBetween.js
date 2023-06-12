// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
  
  let resultArr = [];
  
  for (let i = a; i <= b; i++) {
    resultArr.push(i);
  }
  
  return resultArr;
}

// Example: 
// a = 1
// b = 4
// --> [1, 2, 3, 4]