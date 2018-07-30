let yargs = require('yargs'),
klaw = require('klaw'),
path = require('path'),

argv = yargs

    // html command
    .command({
        command: 'html',
        describe: 'walk for html',
        handler: function (argv) {

            // walk with path, and depth
            klaw(argv.path, {
                depthLimit: argv.depth
            })

            .on('data', function (item) {

                if (path.extname(item.path).toLowerCase() === '.html') {

                    console.log(item.path);

                }

            });

        }

    })
    // options to set path, and depth
    .option('depth', {alias: 'd',default:'0'})
    .option('path', {alias: 'p',default:'./'})
    .argv;
