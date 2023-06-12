// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

function addLength(str) {
  let arrFromString = str.split(" ");
  let resultArr = []; 
  
  for (let i = 0; i < arrFromString.length; i++) {
    let newStr = `${arrFromString[i]} ${arrFromString[i].length}`
    resultArr.push(newStr);
  }
  
  return resultArr;
}


// Example: 
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
  