// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
/* input can contain letters, spaces, special char; alphabet paramater can contain letters, spaces, special char; 
alphabet.length must === 26 or return false; all of alphabet char must be unique; spaces should be maintained;

map(char) from the input.split() array; realAlphabet.find(letter where char === letter ) = matchedLetter;
matchedIndex = get indexOf matchedLetter; return alphabet[matchedIndex];

*/

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const realAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function substitution(input, alphabet, encode = true) {
    let matchedLetter;
    let matchedIndex;
    // alphabet tests for presence, length
    if (!alphabet || alphabet.length !== 26) return false;
    //alphabet test for containing unique characters
    for (let char in alphabet) {
      const character = alphabet[char];
      if (alphabet.slice(char + 1).includes(character)) return false;
    }
    return input.toLowerCase()
      .split("")
      .map((char) => {   //add criterion for space here
        if (encode) {
          matchedLetter = realAlphabet.find((letter) => letter === char);
          matchedIndex = realAlphabet.indexOf(matchedLetter);
          return alphabet[matchedIndex];

        }
      })
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
