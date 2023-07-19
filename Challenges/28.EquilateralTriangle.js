/*

A triangle number is a number where n objects form an equilateral triangle. For example, 6 is a triangle number because you can arrange 6 objects into an equilateral triangle:

                            1
                           2 3
                          4 5 6

8 is not a triangle number because 8 objects do not form an equilateral triangle:

                            1
                          2   3
                         4  5  6
                        7  8

In other words, the nth triangle number is equal to the sum of the n natural numbers from 1 to n.

Your task:
Check if a given input is a valid triangle number. Return true if it is, false if it is not (note that any non-integers, including non-number types, are not triangle numbers).

You are encouraged to develop an effective algorithm: test cases include really big numbers.

Assumptions:
You may assume that the given input, if it is a number, is always positive.

Notes:
0 and 1 are triangle numbers.

*/


function isTriangleNumber(number) {

  // Approach - find a what number sits on the end of each row and create an algorithm that will calculate what the last number on each row is and compare it with the input number.

  // As we can see, the last number on the first row is 1, followed by 3 as a last number on the second row, followed by 6 on the third row, 10 on the fourth - number increases with previous incrementation plus one. 
  
  // n will be the initial incrementation value, set to 1 by default as we need to implement a plus one step within the for loop. 
  
  let n = 1; 
  let isEquilateral = false;  

  if (number === 0) return true;

  for (let i = 1; i <= number; i += n) {
    if (i === number) {
      isEquilateral = true;
    }
    n+=1; 
  }

  return isEquilateral;
  
}
isTriangleNumber(10);
