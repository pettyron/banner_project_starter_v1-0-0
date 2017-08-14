/*
    Additional sizes to copy over to the build system if needed.
    All that is needed here is the task itself to copy and paste into the project's ./gulp/fileCollect.js file
*/

// Mobile Leaderboard
gulp.task('zip:lbm', zipTask(collectConfig.leaderboardMobile.src, '_320x50.zip'));

// Small Mobile Leaderboard
gulp.task('zip:lbms', zipTask(collectConfig.leaderboardMobileSm.src, '_300x50.zip'));

// Large Leaderboard
gulp.task('zip:lbl', zipTask(collectConfig.leaderboardLarge.src, '_970x90.zip'));

// Billboard
gulp.task('zip:bb', zipTask(collectConfig.billboard.src, '_970x250.zip'));

// Portrait
gulp.task('zip:pb', zipTask(collectConfig.portrait.src, '_300x1050.zip'));

// Square
gulp.task('zip:sqr', zipTask(collectConfig.square.src, '_250x250.zip'));

// Small Square
gulp.task('zip:sqrs', zipTask(collectConfig.squareSm.src, '_200x200.zip'));

// Vertical
gulp.task('zip:vb', zipTask(collectConfig.vertical.src, '_120x240.zip'));

// High-End Mobile
gulp.task('zip:hem', zipTask(collectConfig.heMobile.src, '_320x480.zip'));
