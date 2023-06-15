// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

function toCamelCase(str){

  let resultArr = [];
  
    if (str.includes("-")) {
    let tempArr = str.split("-");
        resultArr.push(tempArr.shift());
        tempArr.map(x => resultArr.push(x[0].toUpperCase() + x.substring(1)));
        console.log(resultArr.join(""));
        return resultArr.join("");
    }
  
    if (str.includes("_")) {
    let tempArr = str.split("_");
        resultArr.push(tempArr.shift());
        tempArr.map(x => resultArr.push(x[0].toUpperCase() + x.substring(1)));
        console.log(resultArr.join(""));  
        return resultArr.join("");
    }

    if (str === "") {
      return "";
    }  
}
toCamelCase("the_Stealth_Warrior");

// Examples: 

// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"