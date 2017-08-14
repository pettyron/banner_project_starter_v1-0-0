/*
    Additional sizes to copy over to the build system if needed.
    All that is needed here is the task itself to copy and paste into the project's ./gulp/sprites/jpg.js file
*/

// Mobile Leaderboard
gulp.task('jpgSprite:lbm', jpgSpriteTask('./src/sprites/jpg/320x50J/*.{png,jpg}', 'lbm_sprite_jpg', './_lbmJpgSprite.scss', 'dist/320x50/images/', './src/scss/partials/sprites/'));

// Small Mobile Leaderboard
gulp.task('jpgSprite:lbms', jpgSpriteTask('./src/sprites/jpg/300x50J/*.{png,jpg}', 'lbms_sprite_jpg', './_lbmsJpgSprite.scss', 'dist/300x50/images/', './src/scss/partials/sprites/'));

// Large Leaderboard
gulp.task('jpgSprite:lbl', jpgSpriteTask('./src/sprites/jpg/970x90J/*.{png,jpg}', 'lbl_sprite_jpg', './_lblJpgSprite.scss', 'dist/970x90/images/', './src/scss/partials/sprites/'));

// Billboard
gulp.task('jpgSprite:bb', jpgSpriteTask('./src/sprites/jpg/970x250J/*.{png,jpg}', 'bb_sprite_jpg', './_bbJpgSprite.scss', 'dist/970x250/images/', './src/scss/partials/sprites/'));

// Portrait
gulp.task('jpgSprite:pb', jpgSpriteTask('./src/sprites/jpg/300x1050J/*.{png,jpg}', 'pb_sprite_jpg', './_pbJpgSprite.scss', 'dist/300x1050/images/', './src/scss/partials/sprites/'));

// Square
gulp.task('jpgSprite:sqr', jpgSpriteTask('./src/sprites/jpg/250x250J/*.{png,jpg}', 'sqr_sprite_jpg', './_sqrJpgSprite.scss', 'dist/250x250/images/', './src/scss/partials/sprites/'));

// Small Square
gulp.task('jpgSprite:sqrs', jpgSpriteTask('./src/sprites/jpg/200x200J/*.{png,jpg}', 'sqrs_sprite_jpg', './_sqrsJpgSprite.scss', 'dist/200x200/images/', './src/scss/partials/sprites/'));

// Vertical
gulp.task('jpgSprite:vb', jpgSpriteTask('./src/sprites/jpg/120x240J/*.{png,jpg}', 'vb_sprite_jpg', './_vbJpgSprite.scss', 'dist/120x240/images/', './src/scss/partials/sprites/'));

// High-End Mobile
gulp.task('jpgSprite:hem', jpgSpriteTask('./src/sprites/jpg/320x480J/*.{png,jpg}', 'hem_sprite_jpg', './_hemJpgSprite.scss', 'dist/320x480/images/', './src/scss/partials/sprites/'));

// REMEMBER: To include these with the `gulp sprite:jpg` task in gulpfile.js
// Like this for example **But obviously only the ones you need** //
gulp.task('sprite:jpg', () => {
	runSequence(
		'jpgSprite:ss',
		'jpgSprite:mr',
		'jpgSprite:hp',
		'jpgSprite:lb',
        'jpgSprite:lbm',
        'jpgSprite:lbms',
        'jpgSprite:lbl',
        'jpgSprite:bb',
        'jpgSprite:pb',
        'jpgSprite:sqr',
        'jpgSprite:sqrs',
        'jpgSprite:vb',
		'jpgSprite:hem'
	);
});
