/**
* @module gulp/imgComps
*
* @requires del
* @requires gulp
* @requires fs
*
* @file A Gulp module for creating and destroying temporary directories/files for layout comps
*/

const gulp = require('gulp'),
      del = require('del'),
      fs = require('fs');

/** @description Comp Folder if you desire to layout your banners with an image comp */
/** Make directories for comps and a task to remove them */
/** Most common ad sizes are accounted for here */
const ssCompDir = 'dist/160x600/images/comps/',
      mrCompDir = 'dist/300x250/images/comps/',
	  hpCompDir = 'dist/300x600/images/comps/',
	  lbCompDir = 'dist/728x90/images/comps/';

const compDirs = [
    ssCompDir,
    mrCompDir,
    hpCompDir,
    lbCompDir
];

const createCompsTask = (dir, log) => {
    return () => {
        fs.mkdir(dir, (err) => {
            if (err) {
                return console.error(err);
            }
            console.log(log);
        });
    }
};

// Skyscraper
gulp.task('comps:ss', createCompsTask(ssCompDir, '160x600 comp directory created successfully'));

// Medium Rectangle
gulp.task('comps:mr', createCompsTask(mrCompDir, '300x250 comp directory created successfully'));

// Halfpage
gulp.task('comps:hp', createCompsTask(hpCompDir, '300x600 comp directory created successfully'));

// leaderboard
gulp.task('comps:lb', createCompsTask(lbCompDir, '728x90 comp directory created successfully'));

gulp.task('comps:clean', () => {
    return del(compDirs);
});
