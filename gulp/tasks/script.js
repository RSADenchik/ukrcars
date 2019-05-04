module.exports = function () {

    $.gulp.task('scripts:lib',function () {
        return $.gulp.src(['src/js/partials/jquery-3.3.1.min.js',
            'src/js/partials/jquery.easing.min.js',
            'src/js/partials/jquery.animateNumber.min.js',
            'src/js/partials/jquery.maskedinput.min.js',
            'src/js/partials/circle-progress.min.js',
            'src/js/partials/slick.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('build/js'))
            .pipe($.bs.reload({
                stream:true
            }));
    });
    
    $.gulp.task('scripts',function () {
        return $.gulp.src(['src/js/main.js',
        'src/js/calc.js',
        'src/js/validate.js'])
            .pipe($.gulp.dest('build/js'))
            .pipe($.bs.reload({
                stream:true
            }));
    });
};