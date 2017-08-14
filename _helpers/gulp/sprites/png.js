/*
    Additional sizes to copy over to the build system if needed.
    All that is needed here is the task itself to copy and paste into the project's ./gulp/sprites/png.js file
*/

// Mobile Leaderboard
gulp.task('pngSprite:lbm', pngSpriteTask('./src/sprites/png/320x50P/*.{png,jpg}', 'lbm_sprite_png', './_lbmPngSprite.scss', 'dist/320x50/images/', './src/scss/partials/sprites/'));

// Small Mobile Leaderboard
gulp.task('pngSprite:lbms', pngSpriteTask('./src/sprites/png/300x50P/*.{png,jpg}', 'lbms_sprite_png', './_lbmsPngSprite.scss', 'dist/300x50/images/', './src/scss/partials/sprites/'));

// Large Leaderboard
gulp.task('pngSprite:lbl', pngSpriteTask('./src/sprites/png/970x90P/*.{png,jpg}', 'lbl_sprite_png', './_lblPngSprite.scss', 'dist/970x90/images/', './src/scss/partials/sprites/'));

// Billboard
gulp.task('pngSprite:bb', pngSpriteTask('./src/sprites/png/970x250P/*.{png,jpg}', 'bb_sprite_png', './_bbPngSprite.scss', 'dist/970x250/images/', './src/scss/partials/sprites/'));

// Portrait
gulp.task('pngSprite:pb', pngSpriteTask('./src/sprites/png/300x1050P/*.{png,jpg}', 'pb_sprite_png', './_pbPngSprite.scss', 'dist/300x1050/images/', './src/scss/partials/sprites/'));

// Square
gulp.task('pngSprite:sqr', pngSpriteTask('./src/sprites/png/250x250P/*.{png,jpg}', 'sqr_sprite_png', './_sqrPngSprite.scss', 'dist/250x250/images/', './src/scss/partials/sprites/'));

// Small Square
gulp.task('pngSprite:sqrs', pngSpriteTask('./src/sprites/png/200x200P/*.{png,jpg}', 'sqrs_sprite_png', './_sqrsPngSprite.scss', 'dist/200x200/images/', './src/scss/partials/sprites/'));

// Vertical
gulp.task('pngSprite:vb', pngSpriteTask('./src/sprites/png/120x240P/*.{png,jpg}', 'vb_sprite_png', './_vbPngSprite.scss', 'dist/120x240/images/', './src/scss/partials/sprites/'));

// High-End Mobile
gulp.task('pngSprite:hem', jpgSpriteTask('./src/sprites/jpg/320x480P/*.{png,jpg}', 'hem_sprite_png', './_hemPngSprite.scss', 'dist/320x480/images/', './src/scss/partials/sprites/'));

// REMEMBER: To include these with the `gulp sprite:png` task in gulpfile.js
// Like this for example **But obviously only the ones you need** //
gulp.task('sprite:png', () => {
	runSequence(
		'pngSprite:ss',
		'pngSprite:mr',
		'pngSprite:hp',
		'pngSprite:lb',
        'pngSprite:lbm',
        'pngSprite:lbms',
        'pngSprite:lbl',
        'pngSprite:bb',
        'pngSprite:pb',
        'pngSprite:sqr',
        'pngSprite:sqrs',
        'pngSprite:vb',
		'pngSprite:hem'
	);
});
