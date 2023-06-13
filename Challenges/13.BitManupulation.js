// You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).


function eliminateUnsetBits(number) {
  let numArr = number.split("");

  const augmentedArr = numArr.filter(x => x != 0);
  let result = 0;

  for (let i = 0; i < augmentedArr.length; i++) {
    result += Number(augmentedArr[i]) * Math.pow(2, i);
  }

  // console.log(result);
  return result;
}



// Examples: 
// eliminateUnsetBits("11010101010101") ->  255 (= 11111111)
// eliminateUnsetBits("111") ->  7
// eliminateUnsetBits("1000000") -> 1
// eliminateUnsetBits("000") -> 0