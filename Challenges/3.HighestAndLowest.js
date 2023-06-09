// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    
  let inputArr = numbers.split(" ");
  
  let maxNumber = Number.MIN_SAFE_INTEGER; 
  let minNumber = Number.MAX_SAFE_INTEGER; 
  
  for (let i = 0; i < inputArr.length; i++) {
    
    if (Number(inputArr[i]) > maxNumber) {
      maxNumber = Number(inputArr[i])
    }
    
    if (Number(inputArr[i]) < minNumber) {
      minNumber = Number(inputArr[i])
    }
    
  }
  
    return `${maxNumber} ${minNumber}`
    
}


// Examples: 
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"