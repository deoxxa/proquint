var proquint = require("../"),
    assert = require("chai").assert;

describe("encode", function() {
  it("should encode [0x01, 0x02, 0x03, 0x04] to fahab-hasab", function() {
    var input = Buffer([0x01, 0x02, 0x03, 0x04]);

    var output = proquint.encode(input);

    assert.equal(output, "fahab-hasab");
  });

  it("should encode [0xff, 0xff, 0xff, 0xff] to zuzuz-zuzuz", function() {
    var input = Buffer([0xff, 0xff, 0xff, 0xff]);

    var output = proquint.encode(input);

    assert.equal(output, "zuzuz-zuzuz");
  });

  it("should encode [0x00, 0x00, 0x00, 0x00] to babab-babab", function() {
    var input = Buffer([0x00, 0x00, 0x00, 0x00]);

    var output = proquint.encode(input);

    assert.equal(output, "babab-babab");
  });
});
