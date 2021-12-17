// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("substitution() submission tests - error handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
      const message = "firehose day 55";
      const actual = substitution.substitution(message);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet is not exaclty 26 characters", () => {
        const message = "firehose day 56";
        const alphabet = "notequalvwxyz";
        const actual = substitution.substitution(message, alphabet);
        expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet does not contain unique characters", () => {
        const message = "firehose day 56";
        const alphabet = "improperlyrepeats";
        const actual = substitution.substitution(message, alphabet);
        expect(actual).to.be.false;
    });
});