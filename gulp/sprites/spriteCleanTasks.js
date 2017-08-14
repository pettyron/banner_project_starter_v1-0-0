/**
* @module gulp/sprites/spriteCleanTasks
*
* @requires gulp
* @requires del
*
* @file A gulp module for cleaning up the files no longer needed for the sprites
*/

const gulp = require('gulp'),
      del = require('del');

/**
* @description Set up some arrays to house the paths for the files we want to clean
* We keep them separated for readability and for upkeep
* Use the Array.prototype.concat method to create a new array from our 3 base arrays
*
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat}
*/

const spriteSassSrc = [
    'src/scss/partials/sprites/'
];

/** Image sprite paths | We want to keep the directories just in case we need them later */
const spriteJpgSrc = [
    'src/sprites/jpg/160x600J/*.jpg',
	'src/sprites/jpg/300x250J/*.jpg',
	'src/sprites/jpg/300x600J/*.jpg',
	'src/sprites/jpg/728x90J/*.jpg'
];

const spritePngSrc = [
    'src/sprites/png/160x600P/*.png',
	'src/sprites/png/300x250P/*.png',
	'src/sprites/png/300x600P/*.png',
	'src/sprites/png/728x90P/*.png'
];

const spriteSrc = spriteSassSrc.concat(spriteJpgSrc, spritePngSrc);

/** @description Use del module to clean up our files and directories we no longer want */
gulp.task('sprite:clean', () => {
    return del(spriteSrc);
});
