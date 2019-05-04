module.exports = function () {

    $.gulp.task('img:dev', function () {
        return $.gulp.src('src/img/*.{png,jpg,webp,svg,gif}')
            .pipe($.gulp.dest('build/img'));
    });

    $.gulp.task('img:build', function () {
        return $.gulp.src('src/img/*.{png,jpg,webp,svg,gif}')
            .pipe($.gp.imagemin([
                $.mozjpeg({
                    quality: 65
                })
            ]))
            .pipe($.gulp.dest('build/img'));
    });
};