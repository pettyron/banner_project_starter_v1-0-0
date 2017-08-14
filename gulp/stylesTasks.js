/**
* @module gulp/stylesTasks
*
* @requires gulp
* @requires gulp-cached
* @requires gulp-changed
* @requires gulp/config
* @requires gulp-cssnano
* @requires gulp-notify
* @requires gulp-rename
* @requires gulp-sass
* @requires gulp-util
* @requires lazypipe
*
* @file A Gulp module for Sass processing and distribution of CSS
*/

const gulp = require('gulp'),
	  autoprefixer = require('gulp-autoprefixer'),
	  cached = require('gulp-cached'),
	  changed = require('gulp-changed'),
	  gutil = require('gulp-util'),
	  lazypipe = require('lazypipe'),
	  minifyCSS = require('gulp-cssnano'),
	  notify = require('gulp-notify'),
	  rename = require('gulp-rename'),
	  sass = require('gulp-sass');

const styleConfig = require('./config').styles;

const renameOptions = {
	basename: 'main',
	suffix: '.min'
};

const nanoOptions = {
	/** z-index values will be respected and not re-evaluated by CSS-NANO */
	/** We will let the auto-prefixer module handle pre-fixing */
	zindex: false,
	autoprefixer: false
}

const repeatTasks = lazypipe()
	.pipe(autoprefixer)
	.pipe(minifyCSS, nanoOptions)
	.pipe(rename, renameOptions);

const mrCssDirs = styleConfig.medRect.dest + '*.css';
const ssCssDirs = styleConfig.skyScraper.dest + '*.css';
const hpCssDirs = styleConfig.halfPage.dest + '*.css';
const lbCssDirs = styleConfig.leaderboard.dest + '*.css';

const styleTask = (src, dir, dest, msg) => {
	return () => {
		gulp.src(src)
			.pipe(sass().on('error', gutil.log))
			.pipe(repeatTasks())
			.pipe(cached('sass'))
			.pipe(changed(dir, {extension: '.css', hasChanged: changed.compareLastModifiedTime}))
			.pipe(gulp.dest(dest))
			.pipe(notify({message: msg}));
	};
};

// Skyscraper
gulp.task('styles:ss', styleTask(styleConfig.skyScraper.src, 'ssCssDirs', styleConfig.skyScraper.dest, '160x600 styles task is complete.'));

// Medium Rectangle
gulp.task('styles:mr', styleTask(styleConfig.medRect.src, 'mrCssDirs', styleConfig.medRect.dest, '300x250 styles task is complete.'));

// Halfpage
gulp.task('styles:hp', styleTask(styleConfig.halfPage.src, 'hpCssDirs', styleConfig.halfPage.dest, '300x600 styles task is complete.'));

// leaderboard
gulp.task('styles:lb', styleTask(styleConfig.leaderboard.src, 'lbCssDirs', styleConfig.leaderboard.dest, '728x90 styles task is complete.'));
