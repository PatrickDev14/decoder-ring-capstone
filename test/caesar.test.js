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
})