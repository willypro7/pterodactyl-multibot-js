const { exec } = require('child_process');
const chalk = require('chalk');

info('--------------');
info('By Mr. P  ツ willy ʟʀ#6658');
info('--------------');
info('');
info('');

var count;
count = 0;

function start(file) {
    count = count + 1;
    //here
    exec('node '+file+'.js', (err, stdout, stderr) => {
        if (err) {
            // console.log(err);
            count = count - 1;
            error(`${chalk.red(`Stopped ${file}.js!`)} | ${chalk.green(`${count} bots online!`)}`);
        }
    });
    info(`${chalk.green(`Started ${file}.js!`)}`);
}
function info(text) {
    console.log(`${chalk.white('[')} ${chalk.green('-')} ${chalk.white(']')} ${text}`);
}
function error(text) {
    console.log(`${chalk.white('[')} ${chalk.red('x')} ${chalk.white(']')} ${text}`);
}













// Main Code

start('bot1'); // It will automatically add `.js`
start('bot2');

info('');
info('');
info('--------------')
info(`${chalk.green(`Started ${count} bots!`)}`);
info('--------------');
