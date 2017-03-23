const   gulp    = require('gulp'),
        connect = require('gulp-connect'),
        build   = require('./core/plugin/build');

gulp.task('default', ['build-article'], function() {
    console.log('hello ku.js');
});

gulp.task('build-article', function(){
    build();
});

// ------- 开发环境
gulp.task('dev', ['build-article', 'server'], function(){
    console.log('hello ku.js');
});
// 启动本地服务..
gulp.task('server', function(){
    connect.server({
        root: './',
        port: '8888',
        livereload: true
    });
});