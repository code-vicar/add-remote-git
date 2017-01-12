'use strict'
var uniqueFilename = require('unique-filename')
var path = require('path')

module.exports = function(tmpDir) {
    return function (prefix) {
        return uniqueFilename(tmpDir, prefix)
    }
}
