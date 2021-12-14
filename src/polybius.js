// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/* const encodeSquare{} and decodeSquare{}
encoding=true - use split() map() join()
use input.toLowercase(), then split() and map() the inputLower string
check if charCodeAt is outside of lower alpha characters, ascii 97 and 122, return the character
when ascii between 97 and 122, convert with encodingObj key-- the join() at the end returns an array as a string


decoding when encoding=false -- the number of characters in the string -exlcuding spaces- should be even
how to split() after every 2 numbers?
*/

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const encodeSquare = {
    a: 11, b: 21, c: 31, d: 41, e: 51,
    f: 12, g: 22, h: 32, i: 42, j: 42, k: 52,
    l: 13, m: 23, n: 33, o: 43, p: 53,
    q: 14, r: 24, s: 34, t: 44, u: 54,
    v: 15, w: 25, x: 35, y: 45, z: 55
  };
  const decodeSquare = {
    11: 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e',
    12: 'f', 22: 'g', 32: 'h', 42: '(i/j)', 52: 'k',
    13: 'l', 23: 'm', 33: 'n', 43: 'o', 53: 'p',
    14: 'q', 24: 'r', 34: 's', 44: 't', 54: 'u',
    15: 'v', 25: 'w', 35: 'x', 45: 'y', 55: 'z'
  };

function polybius(input, encode = true) {
    // your solution code here
  
    let lowerMsg = input.toLowerCase();
    //test encode true or false here
    if (encode) {
      return lowerMsg.split("")
        .map((char) => {
          //if char is outside the ascii codes for lower case alpha characters
          if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
            return char;
            }
          return encodeSquare[char];        
        }).join("");

    } else {
      let decodedMsg = "";
      let doubleSpacedMsg = "";
      for (let i=0; i < input.length; i++) {
        if (input[i] != " ") {
          doubleSpacedMsg += input[i];
        }
        //if character is single space then add double space to doubleSpacedMsg
        else doubleSpacedMsg += "  ";
      }
      //if the doubleSpacedMsg length is not divisible by 2, return false
      if (doubleSpacedMsg.length % 2 != 0) return false;
      //loop through doubleSpacedMsg, move 2 indexes at a time
      for (let i=0; i < doubleSpacedMsg.length; i+=2) {
        if (doubleSpacedMsg[i] != " ") {
          numCode = "";
          numCode += doubleSpacedMsg[i];
          numCode += doubleSpacedMsg[i+1];
          decodedMsg += decodeSquare[numCode];  
        } else decodedMsg += " ";
      }
      return decodedMsg;
    }
    
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
