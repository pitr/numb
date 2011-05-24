#!/usr/bin/env node

var path  = require('path'),
    fs    = require('fs'),
    npm   = require("npm")

// check for Numbfile
if (path.existsSync(process.cwd() + '/Numbfile')) {

  // process and install Numbfile
  var libs = require('./lib/numb').libraries

  npm.load({}, function(er) {
    if (er) {
      console.log('Error: ' + er)
      return
    }

    var packages = []

    Object.keys(libs).forEach(function(lib){
      var opts  = libs[lib],
          ver   = opts.version,
          name  = opts.name
      if (ver) {
        name = name + '@' + ver
      }
      packages.push(name)
    })

    npm.commands.install(packages, function(er, data) {
      if (er) {
        console.log('Error: ' + er)
      } else {
        console.log('Completed.')
      }
    })
  })

} else {

  console.log('Dummy Numbfile created.')
  fs.writeFileSync(process.cwd() + '/Numbfile', "// define your dependencies\n// example:\n\n// use('underscore', { as : '_', version : '1.1.4' })")

}
