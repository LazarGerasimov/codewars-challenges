/*Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:
'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'*/

function solve(x) {

  //Convert string to array so we can dynamically change letters at given indexes
  let stringArr = x.split("");

  // We need to make sure we use continue to prevent the same letter from changing twice and reverting back to its original value
  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === "a") {
      stringArr[i] = "b";
      continue;
    }
    if (stringArr[i] === "b") {
      stringArr[i] = "a";
      continue;
    }
  }

  return stringArr.join("");
}
solve("abc");