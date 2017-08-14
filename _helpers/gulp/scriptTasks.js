/*
    Additional sizes to copy over to the build system if needed.
    All that is needed here is the task itself to copy and paste into the project's ./gulp/scriptTasks.js file
*/

// Mobile Leaderboard
gulp.task('scripts:lbm', scriptTask(scriptConfig.leaderboardMobile.src, '320x50 scripts task is complete.'));

// Small Mobile Leaderboard
gulp.task('scripts:lbms', scriptTask(scriptConfig.leaderboardMobileSm.src, '300x50 scripts task is complete.'));

// Large Leaderboard
gulp.task('scripts:lbl', scriptTask(scriptConfig.leaderboardLarge.src, '970x90 scripts task is complete.'));

// Billboard
gulp.task('scripts:bb', scriptTask(scriptConfig.billboard.src, '970x250 scripts task is complete.'));

// Portrait
gulp.task('scripts:pb', scriptTask(scriptConfig.portrait.src, '300x1050 scripts task is complete.'));

// Square
gulp.task('scripts:sqr', scriptTask(scriptConfig.square.src, '250x250 scripts task is complete.'));

// Small Square
gulp.task('scripts:sqrs', scriptTask(scriptConfig.squareSm.src, '200x200 scripts task is complete.'));

// Vertical
gulp.task('scripts:vb', scriptTask(scriptConfig.vertical.src, '120x240 scripts task is complete.'));

// High-End Mobile
gulp.task('scripts:hem', scriptTask(scriptConfig.heMobile.src, '320x480 scripts task is complete.'));
