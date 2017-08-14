/**
* @module gulp/sprites/jpg
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

const jpgSpriteTask = (src, imgName, styleName, imgDest, sassDest) => {
    return () => {
        return sprity.src({
		    src: src,
		    orientation: 'horizontal',
		    format: 'jpg',
		    name: imgName,
		    margin: 0,
		    style: styleName,
		    processor: 'sass',
		})
		.pipe(gulpif('*.jpg', gulp.dest(imgDest), gulp.dest(sassDest)));
    };
};

// Skyscraper
gulp.task('jpgSprite:ss', jpgSpriteTask('./src/sprites/jpg/160x600J/*.{png,jpg}', 'ss_sprite_jpg', './_ssJpgSprite.scss', 'dist/160x600/images/', './src/scss/partials/sprites/'));

// Medium Rectangle
gulp.task('jpgSprite:mr', jpgSpriteTask('./src/sprites/jpg/300x250J/*.{png,jpg}', 'mr_sprite_jpg', './_mrJpgSprite.scss', 'dist/300x250/images/', './src/scss/partials/sprites/'));

// Halfpage
gulp.task('jpgSprite:hp', jpgSpriteTask('./src/sprites/jpg/300x600J/*.{png,jpg}', 'hp_sprite_jpg', './_hpJpgSprite.scss', 'dist/300x600/images/', './src/scss/partials/sprites/'));

// leaderboard
gulp.task('jpgSprite:lb', jpgSpriteTask('./src/sprites/jpg/728x90J/*.{png,jpg}', 'lb_sprite_jpg', './_lbJpgSprite.scss', 'dist/728x90/images/', './src/scss/partials/sprites/'));
