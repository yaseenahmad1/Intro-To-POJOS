/*
Define a function called variableAsKey that accepts an object parameter and a
string parameter and returns the value from the object at the key of the string
passed in.
*/

let variableAsKey = (object, key) => object[key]; // simply pass in the string and use bracket notation to return the desired value. 


//Example:
const obj = {
  first: "1",
  second: 2,
  third: "three"
}
const str = "first";
console.log(variableAsKey(obj, str)); //=> "1"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = variableAsKey;
} catch {}
