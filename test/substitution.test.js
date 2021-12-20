// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("substitution() tests written by PatrickDev14", () => {
    it("should ignore capital letters", () => {
        const expected = "ixpar yd"
        const actual = substitution.substitution("Grays Mt", "plmoknijbuhvygctfxrdzeswaq", encode = true);
        expect(actual).to.eql(expected);
    });

    describe("encoding a message", () => {
        it("correctly translates the given phrase, based on the given alphabet", () => {
            const expected = "ixpar yd";
            const actual = substitution.substitution("Grays Mt", "plmoknijbuhvygctfxrdzeswaq", encode = true);
            expect(actual).to.eql(expected);
        })

        it("should preserve spaces", () => {
            const expected = "ixpar yd";
            const actual = substitution.substitution("Grays Mt", "plmoknijbuhvygctfxrdzeswaq", encode = true);
            expect(actual).to.eql(expected);
        });
    });

    describe("decoding a message", () => {
        it("correctly translates the given phrase, based on the given alphabet", () => {
            const expected = "grays mt";
            const actual = substitution.substitution("ixpar yd", "plmoknijbuhvygctfxrdzeswaq", encode = false);
            expect(actual).to.eql(expected);
        })

        it("should preserve spaces", () => {
            const expected = "grays mt";
            const actual = substitution.substitution("ixpar yd", "plmoknijbuhvygctfxrdzeswaq", encode = false);
            expect(actual).to.eql(expected);
        });
    });

    describe("error handling", () => {
        it("should return false if the substitution alphabet is missing", () => {
        const message = "firehose day 55";
        const actual = substitution.substitution(message);
        expect(actual).to.be.false;
        });

        it("should return false if the substitution alphabet is not exactly 26 characters", () => {
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

});
