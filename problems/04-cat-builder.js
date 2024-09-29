/*
Define a function called catBuilder that takes in a name string, a color string,
and an array of strings representing toys. The function should return a cat
object with a key of "name", "color", and "toys" that correspond to the
arguments passed in.
*/

let catBuilder = (nameStr, colorStr, toyStr) => { // assign parameters where arguments will pass through
  let catObj = {};                                //assigned an empty object to include the arguments given
  catObj.name = nameStr;                          // using the empty object I create the 'key' value by assiging it the desired outcome
  catObj.color = colorStr;                        // ^ same thing
  catObj.toys = toyStr;                           // ^ same thing 

  return catObj;                                  // now return your empty object which should now take in those arguments and give you 
}                                                 // back a filled object with the desired values corresponding to the key names you 
                                                  // assigned aftet 'catObj.'


console.log(catBuilder("Whiskers", "black", ["scratching-post", "yarn"]));
//=> { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

console.log(catBuilder("Nyan", "rainbow", ["poptarts"]));
//=> { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = catBuilder;
} catch {}
