var consonants = "bdfghjklmnprstvz".split(""),
    vowels     = "aiou".split("");

var encode = exports.encode = function encode(buffer) {
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

var decode = exports.decode = function decode(str) {
  var bits = str.split("-"),
      buffer = new Buffer(bits.length * 2);

  for (var i=0;i<bits.length;++i) {
    var c1 = consonants.indexOf(bits[i][0]),
        v1 = vowels.indexOf(bits[i][1]),
        c2 = consonants.indexOf(bits[i][2]),
        v2 = vowels.indexOf(bits[i][3]),
        c3 = consonants.indexOf(bits[i][4]);

    buffer.writeUInt16BE(c1 + (v1 << 4) + (c2 << 6) + (v2 << 10) + (c3 << 12), i * 2);
  }

  return buffer;
};
