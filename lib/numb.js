// Read Numbfile and return list of libraries

var libraries = {}

global.use = function(library, opts) {
  var options = opts || {},
      as = options['as'] || library

  libraries[as] = {
    "name"    : library,
    "as"      : as,
    "version" : options['version'] || options['v']
  }
}

require(process.cwd() + '/Numbfile')

// clean up global namespace
global.use = void(0)

exports.libraries = libraries
