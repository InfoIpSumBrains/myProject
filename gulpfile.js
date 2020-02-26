// Подключаем Gulp

var gulp = require('gulp');

// Подключаем плагины Gulp

var sass = require('gulp-sass'),  // Компилирует Sass в CSS
    concat = require('gulp-concat'),  // Объединение файлов - конкатенация
    autoprefixer = require('gulp-autoprefixer'),  // Проставлет вендорные префиксы в CSS
    cssnano = require('gulp-cssnano'),  // Минимизация CSS
    uglify = require('gulp-uglify'),  // Минимизация javascript
    htmlmin = require('gulp-html-minifier');  // Минимизация html


/* ------------- Таски ------------- */

// -------- Таск с именем sass --------
// Поиск всех Sass-файлов в исходнике;
// Объединение этих же файлов в один файл с именем style;
// Компиляция Sass в CSS;
// Простановка вендорных префиксов;
// Минимизация кода;
// Перенос готового файла в директорию продакшена;

gulp.task('sass', function() {
    return gulp.src('src/**/*.sass')
    .pipe(concat('style.sass'))
    .pipe(sass())
    .pipe(autoprefixer({
    	browsers: ['last 2 versions']
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css/'));
});

// -------- Таск с именем fonts --------
// Поиск всех файлов в fonts;
// Перенос этих же файлов в директорию продакшена;

gulp.task('fonts', function() {
    return gulp.src('src/fonts/**/*.+(eot|otf|svg|ttf|woff|woff2|css)')
    .pipe(gulp.dest('dist/fonts'));
});

// -------- Таск с именем script --------
// Поиск всех script-файлов в исходнике;
// Объединение этих же файлов в один файл с именем script;
// Минимизация кода;
// Перенос готового файла в директорию продакшена;

gulp.task('script', function() {
	return gulp.src('src/**/*.js')
	.pipe(concat('script.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});

// -------- Таск с именем img --------
// Поиск всех gif|jpeg|jpg|png-файлов в исходнике;
// Перенос этих же файлов в директорию продакшена;

gulp.task('img', function() {
	return gulp.src(['src/**/*.+(gif|jpeg|jpg|png)', '!src/img/icon/icon.png'])
	.pipe(gulp.dest('dist/img'));
});

// -------- Таск с именем icon --------
// Поиск файла icon.png в исходнике;
// Перенос этого же файла в директорию продакшена;

gulp.task('icon', function() {
    return gulp.src('src/img/icon/icon.png')
    .pipe(gulp.dest('dist/img/icon'));
});

// -------- Таск с именем html --------
// Поиск html-файлов в исходнике;
// Минимизация кода;
// Перенос этих же файлов в директорию продакшена;

gulp.task('html', function() {
    return gulp.src('src/*.html')
    .pipe(htmlmin({
    	collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'));
});

// Запускаем все созданные таски;

gulp.task('default', gulp.series('sass', 'fonts', 'script', 'img', 'icon', 'html'));