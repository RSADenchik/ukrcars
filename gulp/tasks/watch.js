module.exports = function () {
    
    $.gulp.task('watch',function () {
        $.gulp.watch('src/*.html',$.gulp.series('html'));
        $.gulp.watch('src/style/**/*.scss',$.gulp.series('style'));
        $.gulp.watch('src/js/main.js',$.gulp.series('scripts'));
        $.gulp.watch('src/img/*',$.gulp.series('img:dev'))
    });
};