// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
  
    let result = 0;
    let reversed = bin.split("").reverse();
  
    for (let i = 0; i < reversed.length; i++) {
      result += Number(reversed[i]) * Math.pow(2, i);
    }
  
  return result;
}