const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const fileInclude = require('gulp-file-include');
const del = require('del');

// ===== Очистка dist =====
function clean() {
  return del(['dist/**/*']);
}

// ===== HTML include =====
function html() {
  return gulp.src(['src/html/**/*.html', '!src/html/partials/**/*'])
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream());
}

// ===== SCSS → CSS =====
function scss() {
  return gulp.src('src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.stream());
}

// ===== Копирование CSS =====
function css() {
  return gulp.src(['src/css/**/*.css', '!src/css/style.css'])
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.stream());
}

// ===== Копирование JS =====
function scripts() {
  return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('dist/js/'))
    .pipe(browserSync.stream());
}

// ===== Копирование изображений =====
function images() {
  return gulp.src('src/img/**/*', { encoding: false })
    .pipe(gulp.dest('dist/img/'))
    .pipe(browserSync.stream());
}

// ===== Копирование шрифтов =====
function fonts() {
  return gulp.src('src/fonts/**/*', { encoding: false })
    .pipe(gulp.dest('dist/fonts/'))
    .pipe(browserSync.stream());
}

// ===== Сервер BrowserSync =====
function serve() {
  browserSync.init({
    server: {
      baseDir: "dist/"
    },
    port: 3000,
    open: true,
    notify: false
  });
}

// ===== Наблюдение за изменениями =====
function watch() {
  gulp.watch('src/html/**/*.html', html);
  gulp.watch('src/scss/**/*.scss', scss);
  gulp.watch('src/css/**/*.css', css);
  gulp.watch('src/js/**/*.js', scripts);
  gulp.watch('src/img/**/*', images);
  gulp.watch('src/fonts/**/*', fonts);
}


// ===== Сборка =====
const build = gulp.series(clean, gulp.parallel(html, scss, css, scripts, images, fonts));

// ===== Разработка =====
const dev = gulp.series(build, gulp.parallel(serve, watch));

// ===== Экспорт задач =====
exports.clean = clean;
exports.html = html;
exports.scss = scss;
exports.css = css;
exports.scripts = scripts;
exports.images = images;
exports.fonts = fonts;
exports.build = build;
exports.dev = dev;
exports.default = dev;
