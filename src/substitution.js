// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
/* input can contain letters, spaces, special char; alphabet paramater can contain letters, spaces, special char; 
alphabet.length must === 26 or return false; all of alphabet char must be unique; spaces should be maintained;

map(for each char) from the input.split() array; then join("") after encoding or decoding
encode direction uses realAlphabet.find(letter where char === letter ) = matchedLetter;
matchedIndex = get indexOf matchedLetter; return alphabet[matchedIndex];
indexOf(item) returns the first occurence of the item, and is useful since we checked alphabet for uniqueness;

*/

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const realAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function substitution(input, alphabet, encode = true) {
    let matchedLetter;
    let matchedIndex;
    // alphabet tests for presence, proper length
    if (!alphabet || alphabet.length !== 26) return false;
    //alphabet test for containing unique characters
    for (let isUnique in alphabet) {
      const checker = alphabet[isUnique];
      //checking if a character is unique while looking over each index, if not criteria is false
      if (alphabet.slice(isUnique + 1).includes(checker)) return false;
    }
    return input.toLowerCase()
      .split("")
      .map((char) => {
        //covering criteria for spaces
        if (char === " ") return char;
        else {
          if (encode) {
            //find in realAlphabet where the letter matches char from the input split() array
            matchedLetter = realAlphabet.find((letter) => letter === char);
            matchedIndex = realAlphabet.indexOf(matchedLetter);
            //return the value from the matchedIndex in the alphabet parameter
            return alphabet[matchedIndex];
            }
          if (!encode) {
            matchedIndex = alphabet.indexOf(char);
            return realAlphabet[matchedIndex];
            }
        }
      }).join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
