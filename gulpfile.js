var gulp = require('gulp');
var jimp = require("gulp-jimp-resize");
const image = require('gulp-image');

// Resize and Optimize Images
gulp.task('image', function () {
  gulp.src('img/*.jpg')
  	.pipe(jimp({
  		sizes: [
            {"width": 500}
        ]
  	}))
    .pipe(image())
    .pipe(gulp.dest('img'));
});

gulp.task('default', ['image']);