'use strict';
const fs = require('fs');
const path = require('path');
const markdown = 'markdown';

fs.readdir(markdown, function(err, files){
    files.forEach(function(item, n){
        var md = fs.readFileSync(path.join(markdown, item)).toString();
        var tpl = fs.readFileSync('template.html').toString();
        var html = tpl.replace('%markdown%', md);
        fs.writeFileSync(item.replace('md', 'html'), html, {encoding: 'utf-8', flag: 'w+'});
    });
});