const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css'); // Підключаємо clean-css
const uglify = require('gulp-uglify');      // Підключаємо uglify

// Завдання: копіювання всіх файлів з папки app
exports.cloneAll = async () => {
  return gulp.src('app/**/*')
    .pipe(gulp.dest('public'));
}

// Завдання: копіювання тільки CSS файлів
exports.cloneCSS = async () => {
  return gulp.src('app/**/*.css')
    .pipe(gulp.dest('public'));
}

// Завдання: копіювання тільки JS файлів
exports.cloneJS = async () => {
  return gulp.src('app/**/*.js')
    .pipe(gulp.dest('public'));
}

// Завдання: мініфікація CSS файлів
exports.minifyCSS = async () => {
  return gulp.src('app/**/*.css')
    .pipe(cleanCSS()) // Мінімізація CSS
    .pipe(gulp.dest('public'));
}

// Завдання: мініфікація JS файлів
exports.minifyJS = async () => {
  return gulp.src('app/**/*.js')
    .pipe(uglify()) // Мінімізація JS
    .pipe(gulp.dest('public'));
}
