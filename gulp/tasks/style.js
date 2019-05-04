module.exports = function () {

    $.gulp.task('style', function () {
        return $.gulp.src('src/style/**/*.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .pipe($.gp.concat('main.css'))
            .pipe($.gp.autoprefixer({
                browsers: ['last 10 versions']
            }))
            .on("error", $.gp.notify.onError({
                title: "style"
            }))
            .pipe($.gp.csso())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('build/css'))
            .pipe($.bs.reload({
                stream:true
            }));
    });
};