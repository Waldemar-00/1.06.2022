var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass')(require('sass'));
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

// Static server
gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('styles', function() {
        return gulp.src('src/sass/**/*.+(scss|sass)')
                .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
                // .pipe(rename({
                //     prefix: "",
                //     suffix: ".min"
                //   }))
                .pipe(autoprefixer({
                    cascade: false
                }))
                .pipe(cleanCSS({compatibility: 'ie8'}))
                .pipe(gulp.dest("src/css"))
                .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch('src/sass/*.+(scss|sass)', gulp.parallel('styles') );
    gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('watch','server', 'styles') );
