let yargs = require('yargs'),
klaw = require('klaw'),

argv = yargs
    .command('html', 'walk for html', function (yargs) {
    

    }, function (yargs) {

        console.log(yargs.depth);
		console.log(yargs.path);

    })
    .option('depth', {alias: 'd',default:'0'})
    .option('path', {alias: 'p',default:'./'})
    .argv
