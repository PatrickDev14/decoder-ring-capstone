// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/* shift one input string into another string for encode, shift the opposite way for decode
function returns false if shift isn't present, or === 0, less than -25, or > 25
turn strings into arrays, to use methods?
split method for input string => array?
use .map(the bulk- check if character is alphanumeric, then it will be shifted, do something with ascii) then .join at the end

use to.lowercase to avoid bigger ascii numbers of capitalized characters?
decipher case for space === 32, use no shift
decipher case for small letters, >= 97 && <= 122, use shift
decipher case for other symbols, >= 33 && <= 96, use no shift


shift from end of alphabet should wrap to front of alphabet
join method for array => string output
to use decode operation, the encode parameter === false

*/

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;

    if (encode === false) {
      shift = shift * (-1);
    }

    let lowerMsg = input.toLowerCase();

    return lowerMsg.split("")
      .map((char) => {
        let asciiNum = char.charCodeAt();
        if (asciiNum >= 32 && asciiNum <= 96) {
          return String.fromCharCode(asciiNum);

        } else if (asciiNum + shift < 97) {
            return String.fromCharCode(asciiNum + shift + 26);
        } else if (asciiNum + shift > 122) {
            return String.fromCharCode(asciiNum + shift - 26);
        } else if (asciiNum + shift >= 97 && asciiNum + shift <= 122) {
            return String.fromCharCode(asciiNum + shift);
        }
      }

      ).join("");
  }


  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
