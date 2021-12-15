// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
/* input can contain letters, spaces, special char; alphabet paramater can contain letters, spaces, special char; 
alphabet.length must === 26 or return false; all of alphabet char must be unique;
how to check unique in string? 
for (let char in alphabet) { 
    const character = alphabet[char] 
    if (alphabet.slice(char + 1).includes(character)) { 
      return false;
  or
let checkforDupes = new Set(alphabet)
    if ([...checkforDupes].length !== 26) return false;
*/

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
