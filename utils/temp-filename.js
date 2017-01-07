'use strict'
var uniqueFilename = require('unique-filename')
var path = require('path')

module.exports = function (prefix) {
  return uniqueFilename(path.resolve(__dirname, '..', '_tmp'), prefix)
}
