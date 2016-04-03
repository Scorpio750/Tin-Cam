var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var config = {
	sassPath: 'public/src/scss/style.scss',
	cssDist: 'public/dist/css',
	jsPath: 'public/src/js'
}

gulp.task('sass', function() {
	return sass(config.sassPath)
		.on('error', notify.onError(function(error) {
			return 'Error: ' + error.message;
		}))
		.pipe(gulp.dest(config.cssDist))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('scripts', function() {
	// return gulp.src(config.jsPath)
	// 	.pipe(gulp.dest(config.jsP));
});

gulp.task('serve', ['sass', 'scripts'], function() {
	browserSync.init({
		server: {
			baseDir: './public'
		},
		startPath: '/views/index.html',
		ghostMode: {
			scroll: false
		},
		minify: false
	});

	gulp.watch('public/src/scss/*.scss', ['sass']);
	gulp.watch('public/js/*.js', ['scripts']);
	gulp.watch('public/app.js');
	gulp.watch(['*.html', 'dist/js/*.js'], {
		cwd: './'
	}, reload);
});

gulp.task('ghostMode');
gulp.task('default', ['serve']);
