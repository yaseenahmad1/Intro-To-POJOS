/*
Given the object below, delete the key-value pair such that "{}" is printed
when printing the object.
*/

const obj = {
  first: "1"
}
/******************** DO NOT MODIFY ANY CODE ABOVE THIS LINE *****************/

// to delete a key-value pair :

delete obj.first; // simply type delete, select the variable name assigned to the desired object (in this case: obj), then either dot
                  // or bracket notation select the key. 

// delete obj["first"]; // THIS CAN WORK AS WELL!

// delete obj["1"]; // THESE WILL NOT WORK 
// delete obj.1; // A NUMBER CANNOT START AFTER DOT NOTATION ANYWAYS

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

console.log(obj); //=> {}

module.exports = obj;
