const gulp = require('gulp');
const purgecss = require('gulp-purgecss');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename')

gulp.task('purgecss', () => {
    return gulp.src('public/**/*.css')
        .pipe(purgecss({
            content: ['7-day-core-strengthening/**/*.html']
        }))
        .pipe(cleanCSS({ level: { 1: { specialComments: 0 } },/* format: 'beautify' */ }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('./7-day-core-strengthening/assets/css'));
});