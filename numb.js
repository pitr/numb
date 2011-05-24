// Require libraries listed in Numbfile and inject into "global" namespace

var libs = require('./lib/numb').libraries

Object.keys(libs).forEach(function(lib){
  var opts  = libs[lib],
      as    = opts.as,
      ver   = opts.version,
      name  = opts.name

  if (ver) {
    name = name + '@' + ver
  }

  console.log('requiring: ' + name + ' as \'' + as + '\'')

  // require and inject into global.{library}
  global[as] = require(name)
})
