
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('Hello',function(params) {
    console.log("Привет,мир!!!");
    params();
});
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("add./*.html").on('change', browserSync.reload);
});