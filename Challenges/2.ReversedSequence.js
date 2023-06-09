// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]


const reverseSeq = (n) => {
  
  const newArr = [];
  newArr.push(n);
  
  while (n > 1) {
    newArr.push(n - 1); 
    n--;
  } 
  
  return newArr;
};
