// How many urinals are free?
// In men's public toilets with urinals, there is this unwritten rule that you leave at least one urinal free between you and the next person peeing. For example if there are 3 urinals and one person is already peeing in the left one, you will choose the urinal on the right and not the one in the middle. That means that a maximum of 3 people can pee at the same time on public toilets with 5 urinals when following this rule (Only 2 if the first person pees into urinal 2 or 4).

// Your task:
// You need to write a function that returns the maximum of free urinals as an integer according to the unwritten rule.

// Input
// A String containing 1s and 0s (Example: 10001) (1 <= Length <= 20)
// A one stands for a taken urinal and a zero for a free one.

// Examples
// 10001 returns 1 (10101)
// 1001 returns 0 (1001)
// 00000 returns 3 (10101)
// 0000 returns 2 (1001)
// 01000 returns 1 (01010 or 01001)

// Note
// When there is already a mistake in the input string (for example 011), then return -1

// Have fun and don't pee into the wrong urinal ;)

function getFreeUrinals(urinals) {

  let freeSpaces = 0;
  let urinalsArr = urinals.split("").map(x => Number(x));
  // console.log(urinalsArr);

  for (let i = 0; i < urinalsArr.length; i++) {

    //catch edge case where we only have 1 urinal 
    if (urinalsArr.length === 1 && urinalsArr[0] === 0) {
      freeSpaces++;
      break;
    }

    //catch edge cases where the first two spaces are zeros
    if (urinalsArr[0] === 0 && urinalsArr[1] === 0) {
      freeSpaces++;
      urinalsArr[0] = 1;
    }

    //catch edge cases where the last two spaces are zeros
    if (urinalsArr[urinalsArr.length - 1] === 0 && urinalsArr[urinalsArr.length - 2] === 0) {
      urinalsArr[urinalsArr.length - 1] = 1;
      freeSpaces++;
    }

    //check for three consecutive empty spaces in a row
    if (urinalsArr[i] === 0 && urinalsArr[i + 1] === 0 && urinalsArr[i + 2] === 0) {
      urinalsArr[i + 1] = 1;
      freeSpaces++;
    }
  }

  if (freeSpaces === 0) {
    freeSpaces = -1;
  }

  return freeSpaces;

}
getFreeUrinals("1011001");