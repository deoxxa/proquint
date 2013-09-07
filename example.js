#!/usr/bin/env node

// we're going to use the crypto module for getting random data
var crypto = require("crypto");

// this is proquint! go proquint!
var proquint = require("./");

// you can use whatever you like for this, as long as you can get the identifier
// to fit into a buffer with a length that is a multiple of two
var id = crypto.randomBytes(8);

// buffers are awesome - they let us get nice hex strings to read
console.log(id.toString("hex"));

// here's how we encode a buffer
var encoded = proquint.encode(id);

// this guy is a regular old string
console.log(encoded);

// and this is the inverse!
var decoded = proquint.decode(encoded);

// another buffer!
console.log(decoded.toString("hex"));
