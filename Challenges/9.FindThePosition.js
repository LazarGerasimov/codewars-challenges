// When provided with a letter, return its position in the alphabet.

function position(letter){
  
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetArr = alphabet.split("");
  let alphabetPosition = alphabetArr.indexOf(letter) + 1;
  
  return `Position of alphabet: ${alphabetPosition}`;
  
}