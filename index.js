let yargs = require('yargs'),

argv = yargs.default('option','value').argv;

console.log(argv.option);