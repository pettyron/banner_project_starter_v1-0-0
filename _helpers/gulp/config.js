/*
    Every common ad size configuration listed here
    Use for src and dest configs in Gulp | ./gulp/config.js
    Copy and paste the ones needed or copy in the whole thing and remove the ones that are not

    Example usage: scriptConfig.skyScraper.src
*/
module.exports = {
	styles: {
		medRect: {
			src: 'src/scss/300X250.scss',
			dest: 'dist/300x250/styles/'
		},
		skyScraper: {
			src: 'src/scss/160X600.scss',
			dest: 'dist/160x600/styles/'
		},
		halfPage: {
			src: 'src/scss/300X600.scss',
			dest: 'dist/300x600/styles/'
		},
		leaderboard: {
			src: 'src/scss/728X90.scss',
			dest: 'dist/728x90/styles/'
		},
        leaderboardMobile: {
			src: 'src/scss/320x50.scss',
			dest: 'dist/320x50/styles/'
		},
        leaderboardMobileSm: {
			src: 'src/scss/300x50.scss',
			dest: 'dist/300x50/styles/'
		},
        leaderboardLarge: {
			src: 'src/scss/970x90.scss',
			dest: 'dist/970x90/styles/'
		},
        billboard: {
			src: 'src/scss/970x250.scss',
			dest: 'dist/970x250/styles/'
		},
        portrait: {
			src: 'src/scss/300x1050.scss',
			dest: 'dist/300x1050/styles/'
		},
        square: {
			src: 'src/scss/250x250.scss',
			dest: 'dist/250x250/styles/'
		},
        squareSm: {
			src: 'src/scss/200x200.scss',
			dest: 'dist/200x200/styles/'
		},
        vertical: {
			src: 'src/scss/120x240.scss',
			dest: 'dist/120x240/styles/'
		},
		heMobile: {
			src: 'src/scss/320x480.scss',
			dest: 'dist/320x480/styles/'
		}
	},
	script: {
		medRect: {
			src: 'dist/300x250/scripts/*.js'
		},
		skyScraper: {
			src: 'dist/160x600/scripts/*.js'
		},
		halfPage: {
			src: 'dist/300x600/scripts/*.js'
		},
		leaderboard: {
			src: 'dist/728x90/scripts/*.js'
		},
        leaderboardMobile: {
            src: 'dist/320x50/scripts/*.js'
		},
        leaderboardMobileSm: {
			src: 'dist/300x50/scripts/*.js'
		},
        leaderboardLarge: {
			src: 'dist/970x90/scripts/*.js'
		},
        billboard: {
			src: 'dist/970x250/scripts/*.js'
		},
        portrait: {
			src: 'dist/300x1050/scripts/*.js'
		},
        square: {
			src: 'dist/250x250/scripts/*.js'
		},
        squareSm: {
			src: 'dist/200x200/scripts/*.js'
		},
        vertical: {
			src: 'dist/120x240/scripts/*.js'
		},
		heMobile: {
			src: 'dist/320x480/scripts/*.js'
		}
	},
	image: {
		medRect: {
			src: 'dist/300x250/images/*',
			dest: 'dist/300x250/images/'
		},
		skyScraper: {
			src: 'dist/160x600/images/*',
			dest: 'dist/160x600/images/'
		},
		halfPage: {
			src: 'dist/300x600/images/*',
			dest: 'dist/300x600/images/'
		},
		leaderboard: {
			src: 'dist/728x90/images/*',
			dest: 'dist/728x90/images/'
		},
        leaderboardMobile: {
            src: 'dist/320x50/images/*',
			dest: 'dist/320x50/images/'
		},
        leaderboardMobileSm: {
            src: 'dist/300x50/images/*',
			dest: 'dist/300x50/images/'
		},
        leaderboardLarge: {
            src: 'dist/970x90/images/*',
			dest: 'dist/970x90/images/'
		},
        billboard: {
            src: 'dist/970x250/images/*',
			dest: 'dist/970x250/images/'
		},
        portrait: {
            src: 'dist/300x1050/images/*',
			dest: 'dist/300x1050/images/'
		},
        square: {
            src: 'dist/250x250/images/*',
			dest: 'dist/250x250/images/'
		},
        squareSm: {
            src: 'dist/200x200/images/*',
			dest: 'dist/200x200/images/'
		},
        vertical: {
            src: 'dist/120x240/images/*',
			dest: 'dist/120x240/images/'
		},
		heMobile: {
			src: 'dist/320x480/images/*',
			dest: 'dist/320x480/images/'
		}
	},
	collectFiles: {
		medRect: {
			src: 'dist/300x250/**/*'
		},
		skyScraper: {
			src: 'dist/160x600/**/*'
		},
		halfPage: {
			src: 'dist/300x600/**/*'
		},
		leaderboard: {
			src: 'dist/728x90/**/*'
		},
        leaderboardMobile: {
            src: 'dist/320x50/**/*'
		},
        leaderboardMobileSm: {
			src: 'dist/300x50/**/*'
		},
        leaderboardLarge: {
			src: 'dist/970x90/**/*'
		},
        billboard: {
			src: 'dist/970x250/**/*'
		},
        portrait: {
			src: 'dist/300x1050/**/*'
		},
        square: {
			src: 'dist/250x250/**/*'
		},
        squareSm: {
			src: 'dist/200x200/**/*'
		},
        vertical: {
			src: 'dist/120x240/**/*'
		},
		heMobile: {
			src: 'dist/320x480/**/*'
		}

	},
	screenshots: {
		src: './screenshots.js',
		dest: './data/'
	}

};
