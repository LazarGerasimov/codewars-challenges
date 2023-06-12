// create a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x) {
  let sum = 0;

  if (typeof x === "number") {
    sum = x * 50 + 6;
    return sum;
  } else if (typeof x === "string") {
    return "Error";
  }
}
