/**
* @module gulp/precollect
*
* @requires gulp
* @requires gulp-html-replace
*
* @file A Gulp module for removing any extraneous comments or content in the HTML files
*/

const gulp = require('gulp'),
      replaceBatch = require('gulp-html-replace');

const replaceTask = (src, dest) => {
    return () => {
        gulp.src(src)
    		.pipe(replaceBatch({
    			extraneous: ''
    		}))
    		.pipe(gulp.dest(dest));
    };
};

// Skyscraper
gulp.task('replaceExt:ss', replaceTask('dist/160x600/*.html', 'dist/160x600/'));

// Medium Rectangle
gulp.task('replaceExt:mr', replaceTask('dist/300x250/*.html', 'dist/300x250/'));

// Halfpage
gulp.task('replaceExt:hp', replaceTask('dist/300x600/*.html', 'dist/300x600/'));

// leaderboard
gulp.task('replaceExt:lb', replaceTask('dist/728x90/*.html', 'dist/728x90/'));
