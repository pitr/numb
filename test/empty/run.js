var fs = require('fs'),
    path = require('path'),
    assert = require('assert'),
    exec = require('child_process').exec

// cleanup
if (path.existsSync(process.cwd() + '/Numbfile')) {
  fs.unlinkSync(process.cwd() + '/Numbfile')
}

exec('../../cli.js', function (error, stdout, stderr) {

  console.log(stderr)
  assert.ok(error !== null,
    'Error executing numb')
  assert.ok(path.existsSync(process.cwd() + '/Numbfile'),
    'Numbfile wasn\'t created')

})
