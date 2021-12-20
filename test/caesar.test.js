// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar() submission tests written by PatrickDev14", () => {
  describe("error handling", () => {
    it("should return false if the shift amount is 0", () => {
      const message = "Firehose day 56";
      const shift = 0;
      const actual = caesar.caesar(message, shift);
      expect(actual).to.be.false;    
  });
    
    it("should return false if the shift amount is above 25", () => {
      const message = "firehose Day 56";
      const shift = 33;
      const actual = caesar.caesar(message, shift);
      expect(actual).to.be.false;  
    });

    it("should return false if the shift amount is less than -25", () => {
        const message = "firehose Day 56";
        const shift = -30;
        const actual = caesar.caesar(message, shift);
        expect(actual).to.be.false;  
    });
  });

  it("should encode a message by shifting the letters", () => {
    const expected = "massive";
    const actual = caesar.caesar("Ocuukxg", -2, encode = true);
    expect(actual).to.eql(expected);
  });

  it("ignores capital letters", () => {
    const expected = "massive";
    const actual = caesar.caesar("Ocuukxg", -2, encode = true);
    expect(actual).to.eql(expected);
  });

  it("should appropriately handle letters at the end of the alphabet", () => {
    const expected = "wamddpi";
    const actual = caesar.caesar("swizzle", 4, encode = true);
    expect(actual).to.eql(expected);
  });

  it("should leave spaces and other symbols as is", () => {
    const expected = ":a &bc";
    const actual = caesar.caesar(":c &de", -2, encode = true);
    expect(actual).to.eql(expected);
  });
});