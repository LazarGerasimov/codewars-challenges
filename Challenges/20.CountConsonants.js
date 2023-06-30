// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

function solve(str) {
  
  let consCount = 0; 

  // char codes for consonants - 65 to 90 without (65, 69, 73, 79, 85)
  // char codes for consonants - 97 to 122 without (97, 101, 105, 111, 117)

  for (let i = 0; i < str.length; i++) {
    if (
      ((str.charCodeAt(i) > 65 && str.charCodeAt(i) <= 90) && 
      str.charCodeAt(i) !== 69 && str.charCodeAt(i) !== 73 && str.charCodeAt(i) !== 79 && str.charCodeAt(i) !== 85) ||
      ((str.charCodeAt(i) > 97 && str.charCodeAt(i) <= 122) && 
      str.charCodeAt(i) !== 101 && str.charCodeAt(i) !== 105 && str.charCodeAt(i) !== 111 && str.charCodeAt(i) !== 117)
    ) {
      consCount++
    }
  }

  // console.log(consCount);
  // console.log(str.length)
  return consCount;
}
solve("bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ");