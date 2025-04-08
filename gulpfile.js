const gulp = require('gulp');

// Завдання для копіювання файлів з app в public
exports.cloneFiles = () => {
  return gulp.src('app/**/*') // всі файли з папки app
    .pipe(gulp.dest('public')); // копіюємо в папку public
}
