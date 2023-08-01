// You need to cook pancakes, but you are very hungry. As known, one needs to fry a pancake one minute on each side. What is the minimum time you need to cook n pancakes, if you can put on the frying pan only m pancakes at a time? n and m are positive integers between 1 and 1000.

function cookPancakes(n, m) {
  // If all pancakes can fit the pan, time will always be 2 - one on each side, else we will need one more iteration on the pan so we round the result to the highest number as we will need an additional cooking session multiplied by 2min 
  
  return n <= m ? 2 : Math.ceil(n / m) * 2;
}
cookPancakes(9, 2);

// Tests: 

// const Test = require('@codewars/test-compat');

// describe("Sample Tests", function() {
//   it("It should pass sample tests", function(){
//     Test.assertEquals(cookPancakes(1, 2), 2)
//     Test.assertEquals(cookPancakes(2, 2), 2)
//     Test.assertEquals(cookPancakes(4, 2), 4)
//   })  
// })