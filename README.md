# Numb

The easiest way to manage your node.js application's dependencies. With only one `require`.

Nodefile:

    use('express')
    use('underscore', { as : '_', version : '1.1.4' })

app.js:

    require('numb')

    var app = express.createServer()

    app.get('/:name?', function(req, res) {
      compiled = _.template("Hello <%= name %>")
      res.send(compiled({ name : req.params.name }))
    })

    app.listen(4000)

And finally:

    $ numb
    $ node app.js
    $ open http://localhost:4000/me

## Installation

You guessed it,

    $ npm install numb

## Tutorial

1. Using DSL, describe all your dependencies in Nodefile.
2. Add a simple `require('numb')`, your last require!
3. Run `numb`, which will install required versions locally.
4. That's it!

## Contribute

The usual. Pull requests are welcomed. Bugs go
to [Issues](https://github.com/pitr/numb/issues).