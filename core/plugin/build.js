'use strict';
const   fs        = require('fs'),
        path      = require('path'),
        color     = require('colors-cli'),

        error     = function(str){
            return color.bold(color.red(str));
        },
        success   = function(str){
            return color.bold(color.green(str));
        },
        warn      = color.yellow,
        notice    = color.blue;

var build = function(){
    const markdown = 'markdown';
    fs.readdir(markdown, function(err, files){
        // 解析markdown文件并生成对应文章的html.
        if(err == null){
            files.forEach(function(item, n){
                var md = fs.readFileSync(path.join(markdown, item)).toString();
                var tpl = fs.readFileSync(path.join(__dirname, '../template/article.html')).toString();
                var html = tpl.replace('%markdown%', md);
                fs.writeFileSync(item.replace('md', 'html'), html, {encoding: 'utf-8', flag: 'w+'});
            });

            console.log( success('Kujs build success.') );
        }else{
            // 当前目录下没有markdown目录.
            console.log( error(`Error! '${markdown_dir}' is not find.`) );
        }
    });
}

module.exports = build;