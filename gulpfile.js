/**
* @file Master Gulp File for running the banner build system.
* @version 3.0.0
* @author Ronnie Petty <rpetty@mmgyglobal.com>
* @license MIT
* @see LICENSE.md
*
* @description This build system will work with NodeJS version(s) < 6.10.x LTS but will break in version(s) 7.x Current
*/

/**
* @module bannerBuildSystem
*
* @requires browser-sync
* @requires gulp
* @requires gulp-html-replace
* @requires replace-in-file
* @requires require-dir
* @requires run-sequence
*/

/**
* @description For other project configurations in additional banner sizes
* @see ./helpers
* @see ./helpers/README.md
*/

/**
* @description Declaring const because we don't want values to change
*
* @constant gulp
* @constant replace
* @constant replaceBatch
* @constant requireDir
* @constant runSequence
* @constant browserSync
* @constant reload
*/

const gulp = require('gulp'),
	  replace = require('replace-in-file'),
	  replaceBatch = require('gulp-html-replace'),
	  requireDir = require('require-dir'),
	  runSequence = require('run-sequence').use(gulp);

const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

requireDir('./gulp', {recurse: true});

/**
* @description Base Styles Task
* @see ./gulp/stylesTasks.js
*/
gulp.task('styles', ['styles:ss', 'styles:mr', 'styles:hp', 'styles:lb']);

/**
* @description Base Scripts Task
* @see ./gulp/scriptTasks.js
*/
gulp.task('scripts', ['scripts:ss', 'scripts:mr', 'scripts:hp', 'scripts:lb']);

/**
* @description If a temporary area for image layout comps are necessary
* @see ./gulp/imgComps.js
* This will produce some temporary directories to store the images
* This way we do not pollute or production ecosystem
* There is also a task to remove the directories or directory when comps are no longer needed
*/
/** Comp directory creation task run `gulp comps:create` in terminal */
gulp.task('comps:create', ['comps:ss', 'comps:mr', 'comps:hp', 'comps:lb']);

/** @description To clean the comps directories when they are no longer needed run `gulp comps:clean` in terminal */

/**
* @description Image Optimization Task
* Only run if image compression is questionable.
* Ideally, the images have already been saved and optimized for web use.
*
* To use run `gulp imageOptimize` in terminal
*
* @see ./gulp/imageTasks.js
*/
gulp.task('imageOptimize', ['imageOpt:ss', 'imageOpt:mr', 'imageOpt:hp', 'imageOpt:lb']);

/**
* @description Image Sprites
* @see ./gulp/sprites/jpg.js
* @see ./gulp/sprites/png.js
*
* can be run as individual tasks if necessary reference the task files in ./gulp/sprites/
*
* To create just PNG sprites run `gulp sprite:png` in terminal
* To create just JPEG sprites run `gulp sprite:jpg` in terminal
* To create all sprites run `gulp sprite` in terminal
*
* To delete the files no longer needed run `gulp sprite:clean` in terminal
* We will want to move the variables out of the Sass Sprity generates for us
* We also do not need to store images not needed in the repository
* So once our sprites are generated we can remove these with the cleaning task
* @see ./gulp/sprites/spriteCleanTasks.js
*/
/** @description PNG Sprite Task */
gulp.task('sprite:png', () => {
	runSequence(
		'pngSprite:ss',
		'pngSprite:mr',
		'pngSprite:hp',
		'pngSprite:lb'
	);
});
/** @description JPEG Sprite Task */
gulp.task('sprite:jpg', () => {
	runSequence(
		'jpgSprite:ss',
		'jpgSprite:mr',
		'jpgSprite:hp',
		'jpgSprite:lb'
	);
});
/** @description All Sprites Task */
gulp.task('sprite', () => {
	runSequence(
		'pngSprite:ss',
		'pngSprite:mr',
		'pngSprite:hp',
		'pngSprite:lb',
		'jpgSprite:ss',
		'jpgSprite:mr',
		'jpgSprite:hp',
		'jpgSprite:lb'
	);
});

/**
* @description BrowserSync is the module being used for our watch and reload of working files
* For more on BrowserSync:
* @see {@link https://browsersync.io/docs}
* @see browsersync.md
*/

const replaceSrc = [
	'dist/160x600/index.html',
	'dist/300x250/index.html',
	'dist/300x600/index.html',
	'dist/728x90/index.html'
];

const injectOptions = {
	files: replaceSrc,
	from: '<!-- bs snippet -->',
	to: '<script id="__bs_script__">//<![CDATA[\ndocument.write("<script async src=\'http://HOST:3000/browser-sync/browser-sync-client.js?v=2.17.2\'><\\/script>".replace("HOST", location.hostname));\n//]]></script>'
}

const stripOptions = {
	files: replaceSrc,
	from: '<script id="__bs_script__">//<![CDATA[\ndocument.write("<script async src=\'http://HOST:3000/browser-sync/browser-sync-client.js?v=2.17.2\'><\\/script>".replace("HOST", location.hostname));\n//]]></script>',
	to: '<!-- bs snippet -->'
}

gulp.task('snippetInject', () => {
	replace(injectOptions)
		.then(changedFiles => {
			console.log('BrowserSync Snippet successfully injected into:', changedFiles);
		})
		.catch(error => {
			console.error('error occurred:', error);
		});
});

gulp.task('serve:files', ['styles', 'scripts', 'snippetInject'], (gulpCallBack) => {
	browserSync.init({
		browser: 'google chrome', // Mac: 'google chrome' | Windows: 'chrome.exe' | Linux: 'google-chrome'
        server: {
            baseDir: './',
			directory: true
        },
		startPath: '/dist',
		files: ['./dist/160x600/index.html', './dist/300x250/index.html', './dist/300x600/index.html', './dist/728x90/index.html'],
		notify: false
	}, function callback() {
		gulp.watch(['dist/**/*.html', 'dist/**/scripts/*.js'], browserSync.reload);

		gulp.watch('dist/**/styles/*.css', () => {
			gulp.src('dist/**/styles/*.css')
				.pipe(browserSync.stream());
		});

		gulpCallBack();
	});
});

/**
* @description The `stageReady` task, on `line 202` of gulpfile.js,  removes the browser-sync snippet and replaces it with the placeholder comment for re-use later. This process will happen automatically, as well, with a 3 second delay to end the gulp `default task` after hitting CTRL-C and only after hitting CTRL-C. If the terminal or console window is closed this will not propogate the process to remove the snippet.
*
* @see gulp task `default` on line 241 of gulpfile.js
*
* You don't want the BrowserSync snippet in your HTML file in your staging environment.
* The snippet will constantly be looking for a connection and not find it.
* This will cause the load indicator (affectionately known as the wheel) in the browser to continually spin.
* When this is happening everything is stalling and makes for an unpleasant user experience.
*/

function stageReady () {
	replace(stripOptions)
		.then(changedFiles => {
			console.log(' BrowserSync Snippet successfully replaced in:', changedFiles);
		})
		.catch(error => {
			console.error('error occurred:', error);
		});
}

/**
* @description File Collection task
* @see ./gulp/fileCollect.js
*
* To use run `gulp collect` in terminal
*/
gulp.task('precollect', ['replaceExt:ss', 'replaceExt:mr', 'replaceExt:hp', 'replaceExt:lb']);

gulp.task('zipFiles', ['zip:ss', 'zip:mr', 'zip:hp', 'zip:lb']);

gulp.task('collect', () => {
    runSequence(
		'precollect',
    	'zipFiles',
        'screenshots',
        'migrateScreenshots',
        'overallClean'
    );
});

gulp.task('watch', () => {
	gulp.watch('src/scss/**/*.scss', ['styles']);
	gulp.watch('dist/**/scripts/*.js', ['scripts']);
});

/**
* @description The default task for Gulp
* @see {@link https://github.com/gulpjs/gulp/blob/master/docs/API.md}
*/
gulp.task('default', ['watch', 'serve:files'], () => {
	/** SIGINT, When CTRL-C is hit the BrowserSync snippet goes away */
	process.on('SIGINT', () => {
		browserSync.exit();
		stageReady();
		console.log(' Waiting to exit...');
		/**  Delay 3 seconds to let the final task work and then exit the process */
		setTimeout(function () {
			process.exit(2);
		}, 3000);
	});
});

/** @description Default task sans BrowserSync if you wish */
// gulp.task('default', ['watch']);
