var gulp = require('gulp');
var imageResize = require('gulp-image-resize');

gulp.task('resizeBlog', function() {
    return gulp.src('assets/out-of-the-blog/*.jpg')
        .pipe(imageResize({
            width: 280,
            crop: false,
            upscale: false,
            quality: 1
        }))
        .pipe(gulp.dest('dist/out-of-the-blog'));
});

gulp.task('resizeMind', function() {
    return gulp.src('assets/out-of-the-mind/*.jpg')
        .pipe(imageResize({
            height: 500,
            crop: false,
            upscale: false,
            quality: 1
        }))
        .pipe(gulp.dest('dist/out-of-the-mind'));
});

gulp.task('default', [ 'resizeBlog', 'resizeMind' ]);