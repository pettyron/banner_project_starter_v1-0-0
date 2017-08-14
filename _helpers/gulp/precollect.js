/*
    Additional sizes to copy over to the build system if needed.
    All that is needed here is the task itself to copy and paste into the project's ./gulp/precollect.js file
*/

// Mobile Leaderboard
gulp.task('replaceExt:lbm', replaceTask('dist/320x50/*.html', 'dist/320x50/'));

// Small Mobile Leaderboard
gulp.task('replaceExt:lbms', replaceTask('dist/300x50/*.html', 'dist/300x50/'));

// Large Leaderboard
gulp.task('replaceExt:lbl', replaceTask('dist/970x90/*.html', 'dist/970x90/'));

// Billboard
gulp.task('replaceExt:bb', replaceTask('dist/970x250/*.html', 'dist/970x250/'));

// Portrait
gulp.task('replaceExt:pb', replaceTask('dist/300x1050/*.html', 'dist/300x1050/'));

// Square
gulp.task('replaceExt:sqr', replaceTask('dist/250x250/*.html', 'dist/250x250/'));

// Small Square
gulp.task('replaceExt:sqrs', replaceTask('dist/200x200/*.html', 'dist/200x200/'));

// Vertical
gulp.task('replaceExt:vb', replaceTask('dist/120x240/*.html', 'dist/120x240/'));

// High-End Mobile
gulp.task('replaceExt:hem', replaceTask('dist/320x480/*.html', 'dist/320x480/'));
