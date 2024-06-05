const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagens(){
  return gulp.src('./source/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./build/images'));
}


function comprimeJavaScript() {
  return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
  return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}


function funcaoPadrao(callback) {
  setTimeout(function () {
    console.log("Executando via GULP");
    callback();
  }, 2000);
}

function dizoi(callback) {
  setTimeout(function () {
    console.log("ola Gulp");
    callback();
    diztchau();
  }, 1000);
}

function diztchau() {
  console.log("Tchau gulp");
}


exports.default = gulp.parallel(funcaoPadrao, dizoi)
exports.dizoi = dizoi;
exports.sass = compilaSass;
exports.watch = function () {
  gulp.watch('./source/styles/*.scss', { ignoredInitial: false }, gulp.series(compilaSass));
}
exports.javascript = comprimeJavaScript;
exports.images=comprimeImagens;
