#! /usr/bin/env node
const program   = require('commander'),
        color   = require('colors-cli'),
        build   = require('./plugin/build.js');

//TODO: gulp-swig gulp-front-matter    

const   err   = function(str){
            return color.bold(color.red(str));
        },
        warn    = color.yellow,
        notice  = color.blue;

program.version(require('../package.json').version)
    .usage('[options] [command name]')
    .parse(process.argv);

var command = program.args[0];

// kujs 支持的命令行.
const K = {
    'build': build
};

// 当命令行没有被找到时提示错误信息.
if(K[command] === undefined){
    console.log( err(`Error! '${command}' cannot find this command.`) );
}else{
    K[command]();
}