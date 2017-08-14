/**
* @module gulp/sprites/png
*
* @requires gulp
* @requires gulp-if
* @requires sprity
*
* @file A gulp module for building banner JPEG sprites
*
* @see {@link https://www.npmjs.com/package/sprity}
*/

const gulp = require('gulp'),
      gulpif = require('gulp-if'),
      sprity = require('sprity');

const pngSpriteTask = (src, imgName, styleName, imgDest, sassDest) => {
    return () => {
        return sprity.src({
		    src: src,
		    name: imgName,
		    margin: 10,
		    style: styleName,
		    processor: 'sass',
		})
		.pipe(gulpif('*.jpg', gulp.dest(imgDest), gulp.dest(sassDest)));
    };
};

// Skyscraper
gulp.task('pngSprite:ss', pngSpriteTask('./src/sprites/png/160x600P/*.{png,jpg}', 'ss_sprite_png', './_ssPngSprite.scss', 'dist/160x600/images/', './src/scss/partials/sprites/'));

// Medium Rectangle
gulp.task('pngSprite:mr', pngSpriteTask('./src/sprites/png/300x250P/*.{png,jpg}', 'mr_sprite_png', './_mrPngSprite.scss', 'dist/300x250/images/', './src/scss/partials/sprites/'));

// Halfpage
gulp.task('pngSprite:hp', pngSpriteTask('./src/sprites/png/300x600P/*.{png,jpg}', 'hp_sprite_png', './_hpPngSprite.scss', 'dist/300x600/images/', './src/scss/partials/sprites/'));

// leaderboard
gulp.task('pngSprite:lb', pngSpriteTask('./src/sprites/png/728x90P/*.{png,jpg}', 'lb_sprite_png', './_lbPngSprite.scss', 'dist/728x90/images/', './src/scss/partials/sprites/'));
