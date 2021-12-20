// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("polybius() tests written by PatrickDev14", () => {
  it("should ignore capital letters", () => {
      const expected = "1213432411";
      const actual = polybius.polybius("FLoRa", encode = true);
      expect(actual).to.eql(expected);
  });

  describe("encoding a message", () => {
    it("should translate both 'i' and 'j' to 42", () => {
          const expected = "42422234";
          const actual = polybius.polybius("jigs", encode = true);
          expect(actual).to.eql(expected);
      });
    
    it("should leave spaces as is", () => {
        const expected = "121343 2411";
        const actual = polybius.polybius("flo ra", encode = true);
        expect(actual).to.eql(expected);
    });
  });

  describe("decoding a message", () => {
      it("should translate 42 to both 'i' and 'j'", () => {
          const expected = "(i/j)ll(i/j)ad";
          const actual = polybius.polybius("421313421141", encode = false);
          expect(actual).to.eql(expected);
      });

      it("should leave spaces as is", () => {
          const expected = "flo ra";
          const actual = polybius.polybius("121343 2411", encode = false);
          expect(actual).to.eql(expected);
      });
  });
    
});