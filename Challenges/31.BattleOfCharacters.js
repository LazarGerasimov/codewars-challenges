/* 

Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

Rules:
Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
Strings will consist of uppercase letters only
Only two groups to a fight.
Group whose total power (A + B + C + ...) is bigger wins.
If the powers are equal, it's a tie.

Examples:
* "ONE", "TWO"  -> "TWO"`
* "ONE", "NEO"  -> "Tie!"

*/

function battle(x, y) {
  let alphabetCollection = {
    "A": 1,
    "B": 2,
    "C": 3,
    "D": 4,
    "E": 5,
    "F": 6,
    "G": 7,
    "H": 8,
    "I": 9,
    "J": 10,
    "K": 11,
    "L": 12,
    "M": 13,
    "N": 14,
    "O": 15,
    "P": 16,
    "Q": 17,
    "R": 18,
    "S": 19,
    "T": 20,
    "U": 21,
    "V": 22,
    "W": 23,
    "X": 24,
    "Y": 25,
    "Z": 26
  };

  let pointsX = 0;
  let pointsY = 0;

  for (let letter of x) {
    pointsX += alphabetCollection[letter];
  }

  for (let letter of y) {
    pointsY += alphabetCollection[letter];
  }

  if (pointsX > pointsY) {
    return `${x}`
  } else if (pointsX < pointsY) {
    return `${y}`
  } else {
    return "Tie!"
  }
}
battle("ACD", "BVA")