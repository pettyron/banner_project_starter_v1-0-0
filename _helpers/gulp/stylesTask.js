/*
    Additional sizes to copy over to the build system if needed.
    All that is needed here is the task itself to copy and paste into the project's ./gulp/stylesTasks.js file
*/

// Constants for gulp-changed directories
const lbmCssDirs = styleConfig.leaderboardMobile.dest + '*.css';
const lbmsCssDirs = styleConfig.leaderboardMobileSm.dest + '*.css';
const lblCssDirs = styleConfig.leaderboardLarge.dest + '*.css';
const bbCssDirs = styleConfig.billboard.dest + '*.css';
const pbCssDirs = styleConfig.portrait.dest + '*.css';
const sqrCssDirs = styleConfig.square.dest + '*.css';
const sqrsCssDirs = styleConfig.squareSm.dest + '*.css';
const vbCssDirs = styleConfig.vertical.dest + '*.css';
const hemCssDirs = styleConfig.heMobile.dest + '*.css';

// ** The tasks ** //

// Mobile Leaderboard
gulp.task('styles:lbm', styleTask(styleConfig.leaderboardMobile.src, 'lbmCssDirs', styleConfig.leaderboardMobile.dest, '320x50 styles task is complete.'));

// Small Mobile Leaderboard
gulp.task('styles:lbms', styleTask(styleConfig.leaderboardMobileSm.src, 'lbmsCssDirs', styleConfig.leaderboardMobileSm.dest, '300x50 styles task is complete.'));

// Large Leaderboard
gulp.task('styles:lbl', styleTask(styleConfig.leaderboardLarge.src, 'lblCssDirs', styleConfig.leaderboardLarge.dest, '970x90 styles task is complete.'));

// Billboard
gulp.task('styles:bb', styleTask(styleConfig.billboard.src, 'bbCssDirs', styleConfig.billboard.dest, '970x250 styles task is complete.'));

// Portrait
gulp.task('styles:pb', styleTask(styleConfig.portrait.src, 'pbCssDirs', styleConfig.portrait.dest, '300x1050 styles task is complete.'));

// Square
gulp.task('styles:sqr', styleTask(styleConfig.square.src, 'sqrCssDirs', styleConfig.square.dest, '250x250 styles task is complete.'));

// Small Square
gulp.task('styles:sqrs', styleTask(styleConfig.squareSm.src, 'sqrsCssDirs', styleConfig.squareSm.dest, '200x200 styles task is complete.'));

// Vertical
gulp.task('styles:vb', styleTask(styleConfig.vertical.src, 'vbCssDirs', styleConfig.vertical.dest, '120x240 styles task is complete.'));

// High-End Mobile
gulp.task('styles:hem', styleTask(styleConfig.heMobile.src, 'hemCssDirs', styleConfig.heMobile.dest, '320x480 styles task is complete.'));
