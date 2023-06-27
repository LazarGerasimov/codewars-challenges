// A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
// For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
// The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
// Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.

function dominator(arr) {

  let collection = {}; 
  let half = arr.length / 2;

  for (let i = 0; i < arr.length; i++) {

    let number = arr[i];

    if (!collection.hasOwnProperty(number)) {
      collection[number] = 1;
    } else {
      collection[number]++
    }
  }

  let resultArr = Object.entries(collection);
  resultArr.sort((a, b) => b[1] - a[1]);

  console.log(resultArr);

  if (resultArr[0][1] > resultArr[1][1] && resultArr[0][1] > half) {
    // console.log(resultArr[0][0]);
    return Number(resultArr[0][0]);
  } else {
    // console.log(-1);
    return -1; 
  }

}

dominator([3,4,3,2,3,1,3,3])