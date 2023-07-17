/*Our loose definition of Vampire Numbers can be described as follows:

6 * 21 = 126
# 6 and 21 would be valid 'fangs' for a vampire number as the 
# digits 6, 1, and 2 are present in both the product and multiplicands

10 * 11 = 110
# 110 is not a vampire number since there are three 1's in the
# multiplicands, but only two 1's in the product */


var vampire_test = function(a, b){

  // Catch edge cases where input equals 0
  if (a === 0 || b === 0) {
    return false;
  }

  // Create 3 different arrays for multiplier, multiplicand and product
  let multiplierArr = a.toString().split("");
  let multiplicandArr = b.toString().split("");
  let productArr = (a * b).toString().split("");

  // Create boolean flag 
  let isVampireNumber = true;

  // Iterate through product for both multiplier and multiplicand and if we have a match, remove element with splice 
  for (let i = 0; i < multiplierArr.length; i++) {
    let currentNumber = multiplierArr[i];
    if (!productArr.includes(currentNumber)) {
      isVampireNumber = false;
    } else {
      let currentIndexInProductArr = productArr.indexOf(currentNumber);
      productArr.splice(currentIndexInProductArr, 1);
    }
  }

  for (let i = 0; i < multiplicandArr.length; i++) {
    let currentNumber = multiplicandArr[i];
     if (!productArr.includes(currentNumber)) {
      isVampireNumber = false;
    } else {
       let currentIndexInProductArr = productArr.indexOf(currentNumber);
       productArr.splice(currentIndexInProductArr, 1);
    }
  }

  return isVampireNumber; 
}
vampire_test(21, 6);


