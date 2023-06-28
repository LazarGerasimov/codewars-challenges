// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years

function isLeapYear(year) {

  let isLeapYear = false

  if (year % 4 === 0 || year % 400 === 0) {
    isLeapYear = true;
  }

  if (year % 100 === 0 && year % 400 !== 0) {
    isLeapYear = false;
  }

  return isLeapYear;
}