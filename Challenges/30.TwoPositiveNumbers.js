/* Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

Examples: 
twoArePositive(2, 4, -3) == true
twoArePositive(-4, 6, 8) == true
twoArePositive(4, -6, 9) == true
twoArePositive(-4, 6, 0) == false
twoArePositive(4, 6, 10) == false
twoArePositive(-14, -3, -4) == false */

function twoArePositive(a, b, c) {
  let checkArr = [a, b, c];
  let filtered = checkArr.filter(x => x > 0);
  return filtered.length === 2;
}
twoArePositive(1, 2, -5);