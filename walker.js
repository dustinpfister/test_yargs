let yargs = require('yargs'),
klaw = require('klaw'),

argv = yargs.default('depth', '0').argv;

klaw('./',{
    depthLimit: argv.depth
}).on('data', function (item) {

    console.log(item.path);

});
