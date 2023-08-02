/* For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

Tests: 

const Test = require('@codewars/test-compat');
describe("Tests", () => {
  it("test", () => {
Test.assertEquals( bingo([1,2,3,4,5,6,7,8,9,10]), "LOSE");
Test.assertEquals( bingo([21,13,2,7,5,14,7,15,9,10]), "WIN");
  });
});

*/

function bingo(a) {

  let collection = new Map();

  collection.set('1', "A");
  collection.set('2', "B");
  collection.set('3', "C");
  collection.set('4', "D");
  collection.set('5', "E");
  collection.set('6', "F");
  collection.set('7', "G");
  collection.set('8', "H");
  collection.set('9', "I");
  collection.set('10', "J");
  collection.set('11', "K");
  collection.set('12', "L");
  collection.set('13', "M");
  collection.set('14', "N");
  collection.set('15', "O");
  collection.set('16', "P");
  collection.set('17', "Q");
  collection.set('18', "R");
  collection.set('19', "S");
  collection.set('20', "T");
  collection.set('21', "U");
  collection.set('22', "V");
  collection.set('23', "W");
  collection.set('24', "X");
  collection.set('25', "Y");
  collection.set('26', "Z");
  
  // BINGO numbers are 2, 9, 14, 7, 15

  let isWinning = false; 
  let resultArr = [];

  for (let number of a) {
    if (number === 2 || number === 7 ||number === 9 || number === 14 || number === 15) {
      resultArr.push(number);
    }
  }

  if (resultArr.includes(2) && resultArr.includes(7) && resultArr.includes(9) && resultArr.includes(14) && resultArr.includes(15)) {
    isWinning = true;
  }

  return isWinning ? "WIN" : "LOSE";
}
bingo([21,13,2,7,5,14,7,15,9,10])