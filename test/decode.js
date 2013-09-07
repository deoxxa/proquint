var proquint = require("../"),
    assert = require("chai").assert;

describe("decode", function() {
  it("should decode fahab-hasab to [0x01, 0x02, 0x03, 0x04]", function() {
    var input = "fahab-hasab";

    var output = proquint.decode(input);

    assert.deepEqual(output, Buffer([0x01, 0x02, 0x03, 0x04]));
  });

  it("should decode zuzuz-zuzuz to [0xff, 0xff, 0xff, 0xff]", function() {
    var input = "zuzuz-zuzuz";

    var output = proquint.decode(input);

    assert.deepEqual(output, Buffer([0xff, 0xff, 0xff, 0xff]));
  });

  it("should decode babab-babab to [0x00, 0x00, 0x00, 0x00]", function() {
    var input = "babab-babab";

    var output = proquint.decode(input);

    assert.deepEqual(output, Buffer([0x00, 0x00, 0x00, 0x00]));
  });
});
