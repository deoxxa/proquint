var consonants = "bdfghjklmnprstvz".split(""),
    vowels     = "aiou".split("");

var encode = module.exports = function encode(buffer) {
  var bits = [];

  for (var i=0;i<buffer.length/2;++i) {
    var n = buffer.readUInt16BE(i * 2);

    var c1 = n         & 0x0f,
        v1 = (n >> 4)  & 0x03,
        c2 = (n >> 6)  & 0x0f,
        v2 = (n >> 10) & 0x03,
        c3 = (n >> 12) & 0x0f;

    bits.push([
      consonants[c1],
      vowels[v1],
      consonants[c2],
      vowels[v2],
      consonants[c3],
    ].join(""));
  }

  return bits.join("-");
};
