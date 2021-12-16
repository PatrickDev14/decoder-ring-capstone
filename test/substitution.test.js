// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("substitution", () => {
    it("should return false if the substitution alphabet is missing", () => {
      const message = "firehose day 55"
      const actual = substitution.substitution(message)
      expect(actual).to.false;
    });
})