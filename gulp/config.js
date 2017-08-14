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
		}
	},
	screenshots: {
		src: './screenshots.js',
		dest: './data/'
	}

};
