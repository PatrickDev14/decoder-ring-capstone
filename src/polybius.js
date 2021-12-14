// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/* encoding=true - use split() map() join()
const encodeSquare{} and decodeSquare{}
use input.toLowercase(), then split() and map() the inputLower[]
check if charCodeAt is outside of lower alpha characters, ascii 97 and 122, return the character
when ascii between 97 and 122, convert with encodingObj key-- the join() at the end returns an array as a string


decoding when encoding=false
how to split() after every 2 numbers?
*/

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const encodeSquare = {
    'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51',
    'f': '12', 'g': '22', 'h': '32', 'i': '42', 'j': '42', 'k': '52',
    'l': '13', 'm': '23', 'n': '33', 'o': '43', 'p': '53',
    'q': '14', 'r': '24', 's': '34', 't': '44', 'u': '54',
    'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55'
  };

function polybius(input, encode = true) {
    // your solution code here
  
    let lowerMsg = input.toLowerCase();
    //test encode true or false here
    if (encode) {
      return lowerMsg.split("")
        .map((char) => {
          if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
            return char;
            }
          return encodeSquare.char;        
      
        }).join("");
    }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
