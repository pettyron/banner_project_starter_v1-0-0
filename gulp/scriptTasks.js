/**
* @module gulp/scriptTasks
*
* @requires gulp
* @requires gulp-cached
* @requires gulp/config
* @requires gulp-jshint
* @requires gulp-notify
* @requires gulp-size
* @requires jshint-stylish
* @requires lazypipe
*
* @file A Gulp module for linting JavaScript and tracking the file size
*/

/** @description Lint scripts when an update to the main JavaScript file occurs and return the file size to the console */

const gulp = require('gulp'),
	  cached = require('gulp-cached'),
	  jshint = require('gulp-jshint'),
	  lazypipe = require('lazypipe'),
	  notify = require('gulp-notify'),
	  rename = require('gulp-rename'),
	  stylish = require('jshint-stylish'),
	  size = require('gulp-size');

const scriptConfig = require('./config').script;

const renameOptions = {
	basename: 'scripts'
};

const repeatTasks = lazypipe()
	.pipe(jshint)
	.pipe(jshint.reporter, stylish)
	.pipe(size)

const scriptTask = (src, msg) => {
	return () => {
		gulp.src(src)
			.pipe(cached('hinting'))
			.pipe(repeatTasks())
			.pipe(notify({message: msg}));
	}
};

// Skyscraper
gulp.task('scripts:ss', scriptTask(scriptConfig.skyScraper.src, '160x600 scripts task is complete.'));

// Medium Rectangle
gulp.task('scripts:mr', scriptTask(scriptConfig.medRect.src, '300x250 scripts task is complete.'));

// Halfpage
gulp.task('scripts:hp', scriptTask(scriptConfig.halfPage.src, '300x600 scripts task is complete.'));

// leaderboard
gulp.task('scripts:lb', scriptTask(scriptConfig.leaderboard.src, '728x90 scripts task is complete.'));
