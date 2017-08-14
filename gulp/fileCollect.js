/**
* @module gulp/fileCollect
*
* @requires del
* @requires gulp
* @requires gulp-phantom
* @requires gulp-zip
*
* @file A Gulp module for collecting the final assets for deployment
*
* @see ./file_collection.md
*/

const gulp = require('gulp'),
      del = require('del'),
      phantom = require('gulp-phantom'),
      zip = require('gulp-zip');

const collectConfig = require('./config').collectFiles;

const project_name = 'project_name';
const project_year = '_YEAR';

const zipTask = (src, ext) => {
    return () => {
        return gulp.src(src)
    		.pipe(zip(project_name + ext))
    		.pipe(gulp.dest(project_name + project_year));
    }
}

/** @description Zip the production files */
// Skyscraper
gulp.task('zip:ss', zipTask(collectConfig.skyScraper.src, '_160x600.zip'));

// Medium Rectangle
gulp.task('zip:mr', zipTask(collectConfig.medRect.src, '_300x250.zip'));

// Halfpage
gulp.task('zip:hp', zipTask(collectConfig.halfPage.src, '_300x600.zip'));

// leaderboard
gulp.task('zip:lb', zipTask(collectConfig.leaderboard.src, '_728x90.zip'));

/** @description screenshots and clean up */
gulp.task('screenshots', () => {
	return gulp.src('./screenshots.js')
		.pipe(phantom({
			localToRemoteUrlAccess: 'true'
		}))
		.pipe(gulp.dest('./data/'));
});

gulp.task('migrateScreenshots', () => {
	return gulp.src('screenshots/**/*')
		.pipe(gulp.dest(project_name + project_year + '/fallback_images/'));
});

gulp.task('overallClean', () => {
	return del(['./screenshots/', './data/', './artifacts/']);
});
