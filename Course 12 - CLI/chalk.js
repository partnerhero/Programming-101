const chalk = require('chalk');

const log = console.log;

console.log(chalk.blue('Hello World!'));

// Concatentation
console.log(chalk.magenta('Hello') + 'World' + chalk.red('!'));

// Chain together several styles
console.log(chalk.yellow.bgRed.bold('Hello World!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(
    chalk.green(
        'I am a green line ' +
            chalk.blue.underline.bold('with a blue substring') +
            ' that becomes green again!'
    )
);

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// ES2015 tagged template literal
const cpu = {
    totalPercent: 90,
};

const ram = {
    used: 4,
    total: 8,
};

const disk = {
    used: 101,
    total: 128,
};

log(chalk`
CPU: {red ${cpu.totalPercent}%}
RAM: {green ${(ram.used / ram.total) * 100}%}
DISK: {rgb(255,131,0) ${(disk.used / disk.total) * 100}%}
`);

// Use RGB colors in terminal emulators that support it.
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));

// Define your own themes
const error = chalk.bold.red;
const warning = chalk.keyword('orange');

log(error('Error!'));
log(warning('Warning!'));
