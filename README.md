Proquint [![build status](https://travis-ci.org/deoxxa/proquint.png)](https://travis-ci.org/deoxxa/proquint)
========

Identifiers that are readable, spellable, and pronounceable.

Overview
--------

A "proquint" (see [here](http://arxiv.org/html/0901.4016)) is a method of
encoding an integer (or really, a sequence of 0 or more 16-bit words) as a
sequence of 5-character, pronounceable strings. This is to facilitate easy
communication of the identifier via "wetware" (read: human) channels.

Note that because proquint operates on 16-bit (2-byte) words, all the buffers
you put into it will need to have lengths that are multiples of 2. You'll
probably get awesome stack traces if you don't. Yay!

Super Quickstart
----------------

Code:

```javascript
var proquint = require("proquint");

var id = proquint.encode(Buffer([0x01, 0x02, 0x03, 0x04]));

console.log(id);
```

Output:

```
fahab-hasab
```

Installation
------------

Available via [npm](http://npmjs.org/):

> $ npm install proquint

Or via git:

> $ git clone git://github.com/deoxxa/proquint.git node_modules/proquint

API
---

**encode**

Encodes a buffer to a proquint string.

```javascript
proquint.encode(buffer);
```

```javascript
var encoded = proquint.encode(Buffer([0x01, 0x02]));

console.log(encoded);
```

**decode**

Decodes a proquint string into a buffer.

```javascript
proquint.decode(string);
```

```javascript
var buffer = proquint.decode("fahab-hasab");

console.log(buffer);
```

Example
-------

Also see [example.js](https://github.com/deoxxa/proquint/blob/master/example.js).

```javascript
// we're going to use the crypto module for getting random data
var crypto = require("crypto");

// this is proquint! go proquint!
var proquint = require("proquint");

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
```

Output:

```
1190b9a2591fb540
bikad-fokor-zihoj-bajir
1190b9a2591fb540
```

License
-------

3-clause BSD. A copy is included with the source.

Contact
-------

* GitHub ([deoxxa](http://github.com/deoxxa))
* Twitter ([@deoxxa](http://twitter.com/deoxxa))
* ADN ([@deoxxa](https://alpha.app.net/deoxxa))
* Email ([deoxxa@fknsrs.biz](mailto:deoxxa@fknsrs.biz))
