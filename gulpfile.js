const gulp = require('gulp');

// Оновлене завдання для клонування файлів
exports.cloneFiles = () => {
  return gulp.src(['index.html', 'main.css', 'img/**/*']) // вибираємо файли для копіювання
    .pipe(gulp.dest('public')); // копіюємо в папку public
}
