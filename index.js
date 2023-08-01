// You need to cook pancakes, but you are very hungry. As known, one needs to fry a pancake one minute on each side. What is the minimum time you need to cook n pancakes, if you can put on the frying pan only m pancakes at a time? n and m are positive integers between 1 and 1000.

function cookPancakes(n, m) {

  let allPancakes = n;
  let panCapacity = m;
  let timeNeeded = 0;

  // case 1 where all pancakes can fit the pan, we can cook them at once - 1min on each side as per instructions
  if (allPancakes <= panCapacity) {
    timeNeeded = 2;
  // case 2 where we will need multiple cooking sessions
  } else {
    // case 2.1 when the number of pancakes is divisible by the capacity (we will have several cooking sessions with equal number of pancakes being cooked at a time)
    if (allPancakes % panCapacity === 0) {
      timeNeeded = (allPancakes / panCapacity) * 2
    } else {
      timeNeeded = ((Math.floor(allPancakes / panCapacity)) * 2) + 2;
    }
  }
  
  return timeNeeded;
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