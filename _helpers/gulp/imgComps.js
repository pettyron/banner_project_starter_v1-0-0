/*
    Additional sizes to copy over to the build system if needed.
    All that is needed here is the task itself to copy and paste into the project's ./gulp/imgComps.js file
    Note: The directory constants and the array have all the banner sizes listed for convenience
*/

const ssCompDir = 'dist/160x600/images/comps/',
      mrCompDir = 'dist/300x250/images/comps/',
	  hpCompDir = 'dist/300x600/images/comps/',
	  lbCompDir = 'dist/728x90/images/comps/',
	  lbmCompDir = 'dist/320x50/images/comps/',
	  lbmsCompDir = 'dist/300x50/images/comps/',
      lblCompDir = 'dist/970x90/images/comps/',
	  bbCompDir = 'dist/970x250/images/comps/',
      pbCompDir = 'dist/300x1050/images/comps/',
	  sqrCompDir = 'dist/250x350/images/comps/',
	  sqrsCompDir = 'dist/200x200/images/comps/',
      vbCompDir = 'dist/120x240/images/comps/',
      hemCompDir = 'dist/320x480/images/comps/';

const compDirs = [
    ssCompDir,
    mrCompDir,
    hpCompDir,
    lbCompDir,
    lbmCompDir,
    lbmsCompDir,
    lblCompDir,
    bbCompDir,
    pbCompDir,
    sqrCompDir,
    sqrsCompDir,
    vbCompDir,
    hemCompDir
];

// Mobile Leaderboard
gulp.task('comps:lbm', createCompsTask(lbmCompDir, '320x50 comp directory created successfully'));

// Small Mobile Leaderboard
gulp.task('comps:lbms', createCompsTask(lbmsCompDir, '300x50 comp directory created successfully'));

// Large Leaderboard
gulp.task('comps:lbl', createCompsTask(lblCompDir, '970x90 comp directory created successfully'));

// Billboard
gulp.task('comps:bb', createCompsTask(bbCompDir, '970x250 comp directory created successfully'));

// Portrait
gulp.task('comps:pb', createCompsTask(pbCompDir, '300x1050 comp directory created successfully'));

// Square
gulp.task('comps:sqr', createCompsTask(sqrCompDir, '250x250 comp directory created successfully'));

// Small Square
gulp.task('comps:sqrs', createCompsTask(sqrsCompDir, '200x200 comp directory created successfully'));

// Vertical
gulp.task('comps:vb', createCompsTask(vbCompDir, '120x240 comp directory created successfully'));

// High-End Mobile
gulp.task('comps:hem', createCompsTask(hemCompDir, '320x480 comp directory created successfully'));
