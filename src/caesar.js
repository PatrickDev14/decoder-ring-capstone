// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/* shift one input string into another string for encode, shift the opposite way for decode
turn strings into arrays, to use methods?
split method for input string => array?
check if character is alphanumeric, then it will be shifted, do something with ascii
use to.lowercase to avoid bigger ascii numbers of capitalized characters?
shift from end of alphabet should wrap to front of alphabet
join method for array => string output
to use decode operation, the encode parameter === false
function returns false if shift isn't present, or === 0, less than -25, or > 25
*/


const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
