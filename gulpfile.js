'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    mozjpeg: require('imagemin-mozjpeg'),
    bs: require('browser-sync').create(),


    path: {
        tasks: require('./gulp/config/tasks.js') 
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default',$.gulp.series(
    $.gulp.parallel('html','style','scripts:lib','scripts','img:dev','svg'),
    $.gulp.parallel('watch','serve')
));

$.gulp.task('build',$.gulp.series(
    $.gulp.parallel('html','style','scripts:lib','scripts','img:build','svg'),
    $.gulp.parallel('watch','serve')
));


