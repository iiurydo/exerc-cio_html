const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compilaSass(){
    return gulp.src('./source/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('.build/styles'));
}
function comprimeImagem(){
    return gulp.src('./source/images/*', { encoding: false })
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function compilaJavaScript(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

exports.default = function(){
	gulp.watch('./source/styles/*.scss'), { ignoreInicial: false }, gulp.series(compilaSass);
    gulp.watch('./source/images/*'), { ignoreInicial: false }, gulp.series(comprimeImagem);
    gulp.watch('./source/scripts/*.js'), { ignoreInicial: false }, gulp.series(compilaJavaScript);
}

