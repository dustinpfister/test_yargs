let yargs = require('yargs'),

argv = yargs.default('players','1').argv;

console.log(argv.players);