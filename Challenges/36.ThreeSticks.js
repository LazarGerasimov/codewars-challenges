/* 

Imagine that you are given two sticks. You want to end up with three sticks of equal length. You are allowed to cut either or both of the sticks to accomplish this, and can throw away leftover pieces.

Write a function, maxlen, that takes the lengths of the two sticks (L1 and L2, both positive values), that will return the maximum length you can make the three sticks.

*/

function maxlen(l1, l2) {

  let long = Math.max(l1, l2);
  let short = Math.min(l1, l2); 
  
  if (long > 3 * short) {
    return long / 3;
  }
  
  if (long > 2 * short) {
    return short;
  }
  
  return long / 2

}
maxlen(12.134548630352148, 36.40364589105644);
maxlen(5, 12);
maxlen(12, 5);
maxlen(5, 17);
maxlen(7, 12);
