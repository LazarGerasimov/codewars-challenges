// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

function solve(arr) {

  let object = {};
  let sortable = [];

  for (let el of arr) {
    object[el] = el.length;
  }

  for (let key in object) {
    sortable.push([key, object[key]]);
  }

  sortable.sort((a, b) => a[1] - b[1]);

  let resultArr = [];
  sortable.forEach(x => resultArr.push(x[0]));

  return resultArr;
}


// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]