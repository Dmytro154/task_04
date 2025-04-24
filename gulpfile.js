const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css'); // Мініфікація CSS
const uglify = require('gulp-uglify');      // Мініфікація JS

// Завдання: копіювання всіх файлів з папки app
exports.cloneAll = () => {
  return gulp.src('app/**/*')
    .pipe(gulp.dest('public'));
};

// Завдання: копіювання тільки CSS файлів
exports.cloneCSS = () => {
  return gulp.src('app/**/*.css')
    .pipe(gulp.dest('public'));
};

// Завдання: копіювання тільки JS файлів
exports.cloneJS = () => {
  return gulp.src('app/**/*.js')
    .pipe(gulp.dest('public'));
};

// Завдання: копіювання HTML файлів
exports.cloneHtml = () => {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('public'));
};

// Завдання: мініфікація CSS файлів
exports.minifyCSS = () => {
  return gulp.src('app/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('public'));
};

// Завдання: мініфікація JS файлів
exports.minifyJS = () => {
  return gulp.src('app/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public'));
};

// Об'єднана задача: копіювання HTML та JS
exports.cloneFiles = gulp.parallel(exports.cloneHtml, exports.cloneJS);
exports.default = exports.cloneAll;