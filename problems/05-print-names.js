/*
Write a function called printNames that takes in an array of objects. It should
loop through all of the objects and print the "name" key from each object.
*/

let printNames = (arrOfObj) => {      //you creat your parameter that takes in an array of multiple objects
   arrOfObj.forEach(obj => {          // we use the forEach method becuase you are iterating through each element of the array. Obj is the parameter representing each element (object) in the array as forEach iterates through it. 
    console.log(obj.name);            // The arrow function's body is simply printing out the value for the key 'name' 
   });                                // The return statement in this case doesn't serve a purpose because forEach DOES NOT COLLECT RETURN VALUES, IT SIMPLU ITERATES OVER THE ARRAY AND PERFORMS THE ACTION SPECIFIED IN THE CALLBACK FUNCTION 
}                                     // IN CONTRAST methods like MAP or FILTER do use the RETURN VALUES from their callbacks to create NEW ARRAYS. But FOREACH the goal is just to excute the function for each element, and console.log is sufficient for printing out values. 

// Example:
printNames([
  { name: "Joey", likes: ["sandwiches"] },
  { hobby: "tells jokes", name: "Chandler" },
]); // prints 'Joey' then 'Chandler'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = printNames;
} catch {}
