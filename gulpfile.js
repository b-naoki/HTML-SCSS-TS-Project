const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
    return gulp.src('scss/**/*.scss') // SCSSファイルの場所
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css')); // コンパイルされたCSSの出力先
});

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
});
