/*
Write a function called hasKeys that takes in an object and an array of
strings. It should return true if all of the strings in the array are keys in
the object.
*/

let hasKeys = (obj, arrOfStr) => {
    let objKeys = Object.keys(obj); // Get the keys of the object 

    let allKeysPresent = true;      // Initialize a variable to keep track of whether all keys are present 

    arrOfStr.forEach((str) => {     // Iterate over each string in the array 
      if (objKeys.indexOf(str) === -1) {  //Check if the current string is not a key in the object 
        allKeysPresent = false;     // If any string is not a key, set allKeysPresent to false
      }
    });
      return allKeysPresent;        // Return the result 
  }


// let survey = {
//   name: 'Check',
//   question: 'Satisfied?',
//   choices: ['Yes', 'No']
// }
// console.log(hasKeys(survey, ['question', 'choices'])); // true
// console.log(hasKeys(survey, ['numSubmitted', 'choices'])); // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = hasKeys;
} catch {}
