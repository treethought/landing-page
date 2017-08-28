var gulp = require('gulp')
var sass = require('gulp-sass')
var concat = require('gulp-concat')
var minify = require('gulp-minify-css')

gulp.task('styles', function () {
  return gulp.src('./app/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minify())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('.'))
})

gulp.task('watch', function () {
  gulp.start('styles')
  gulp.watch('./app/**/*.scss', ['styles'])
})

gulp.task('default', ['watch'])
