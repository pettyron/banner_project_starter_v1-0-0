/**
* @module gulp/imageTasks
*
* @requires gulp
* @requires gulp-notify
* @requires gulp-imagemin
* @requires gulp/config
*
* @file A gulp module for image optimization and image file size control
*
* @see {@link https://www.npmjs.com/package/gulp-imagemin}
*
* Additional Banner Sizes to incorporate if needed | Just uncomment those you need and comment out those you don't
*
* Ideally, we should be saving our assets as optimized for web in cut-ups
* This task is only intended as a failsafe
*/

/** Optimize images for all banner sizes */

const gulp = require('gulp'),
	  notify = require('gulp-notify'),
	  imagemin = require('gulp-imagemin');

const imageConfig = require('./config').image;

const imageTask = (src, dest, msg) => {
	return () => {
		gulp.src(src)
			.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
			.pipe(gulp.dest(dest))
			.pipe(notify({message: msg}));
	};
};

// Skyscraper
gulp.task('imageOpt:ss', imageTask(imageConfig.skyScraper.src, imageConfig.skyScraper.dest, '160x600 images task is complete.'));

// Medium Rectangle
gulp.task('imageOpt:mr', imageTask(imageConfig.medRect.src, imageConfig.medRect.dest, '300x250 images task is complete.'));

// Halfpage
gulp.task('imageOpt:hp', imageTask(imageConfig.halfPage.src, imageConfig.halfPage.dest, '300x600 images task is complete.'));

// leaderboard
gulp.task('imageOpt:lb', imageTask(imageConfig.leaderboard.src, imageConfig.leaderboard.dest, '728x90 images task is complete.'));
