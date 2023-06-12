// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut(string) {

  let consonantArr = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== "a" &&
      string[i] !== "e" &&
      string[i] !== "i" &&
      string[i] !== "o" &&
      string[i] !== "u") {
      consonantArr.push(string[i]);
    }
  }

  return consonantArr.join("");
}


// Examples:
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"