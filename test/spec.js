var bops = require('bops')
var t = require("chai").assert;

var proquint = require('../')
var examples = [
    ['127.0.0.1',       'lusab-babad'],
    ['63.84.220.193',   'gutih-tugad'],
    ['63.118.7.35',     'gutuk-bisog'],
    ['140.98.193.141',  'mudof-sakat'],
    ['64.255.6.200',    'haguz-biram'],
    ['128.30.52.45',    'mabiv-gibot'],
    ['147.67.119.2',    'natag-lisaf'],
    ['212.58.253.68',   'tibup-zujah'],
    ['216.35.68.215',   'tobog-higil'],
    ['216.68.232.21',   'todah-vobij'],
    ['198.81.129.136',  'sinid-makam'],
    ['12.110.110.204',  'budov-kuras'],
].map(function (e) {
  return [new Buffer(e[0].split('.').map(Number)), e[1]]
})

describe('proquint', function () {
  it('should encode the same as the spec', function () {
    examples.forEach(function (e) {
      t.equal(proquint.encode(e[0]), e[1])
    })
  })
  it('should decode same as the spec', function () {
    examples.forEach(function (e) {
      t.deepEqual(bops.to(proquint.decode(e[1]), 'hex'), bops.to(e[0], 'hex'))
    })
  })
})

