/*
    Additional sizes to copy over to the build system if needed.
    All that is needed here is the task itself to copy and paste into the project's ./gulp/imageTasks.js file
*/

// Mobile Leaderboard
gulp.task('imageOpt:lbm', imageTask(imageConfig.leaderboardMobile.src, imageConfig.leaderboardMobile.dest, '320x50 images task is complete.'));

// Small Mobile Leaderboard
gulp.task('imageOpt:lbms', imageTask(imageConfig.leaderboardMobileSm.src, imageConfig.leaderboardMobileSm.dest, '300x50 images task is complete.'));

// Large Leaderboard
gulp.task('imageOpt:lbl', imageTask(imageConfig.leaderboardLarge.src, imageConfig.leaderboardLarge.dest, '970x90 images task is complete.'));

// Billboard
gulp.task('imageOpt:bb', imageTask(imageConfig.billboard.src, imageConfig.billboard.dest, '970x250 images task is complete.'));

// Portrait
gulp.task('imageOpt:pb', imageTask(imageConfig.portrait.src, imageConfig.portrait.dest, '300x1050 images task is complete.'));

// Square
gulp.task('imageOpt:sqr', imageTask(imageConfig.square.src, imageConfig.square.dest, '250x250 images task is complete.'));

// Small Square
gulp.task('imageOpt:sqrs', imageTask(imageConfig.squareSm.src, imageConfig.squareSm.dest, '200x200 images task is complete.'));

// Vertical
gulp.task('imageOpt:vb', imageTask(imageConfig.vertical.src, imageConfig.vertical.dest, '120x240 images task is complete.'));

// High-End Mobile
gulp.task('imageOpt:hem', imageTask(imageConfig.vertical.src, imageConfig.heMobile.dest, '320x480 images task is complete.'));
