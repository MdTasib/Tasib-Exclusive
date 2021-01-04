// Require ( npm install ) Files
let gulp = require('gulp'),
    postCss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    nested = require('postcss-nested'),
    simpleVars = require('postcss-simple-vars'),
    mixins = require('postcss-mixins'),
    prettify = require('postcss-prettify'),
    cssImport = require('postcss-import'),
    browserSync = require('browser-sync').create(),
    filters = [
        cssImport,
        simpleVars,
        mixins,
        autoprefixer(),
        nested,
        prettify
    ]


// Gulp Task Starts
gulp.task( 'watch', () => {
    // Track On ( Browser Auto Reloading )
    browserSync.init({
        server: {
            baseDir: './app/'
        }
    })

    // Track On ( Html ) Changes Here
    gulp.watch('./app/*.html').on('change', () => {
        browserSync.reload()
    })

    // Track On ( Css ) Changes Here
    gulp.watch('./app/assets/css/**/*.css', () => {
        return gulp.src('./app/assets/css/style.css')
        .pipe( postCss( filters ) )
        .pipe(gulp.dest('./app/temp/'))
        .pipe(browserSync.stream())
    })

    // Track On ( Js ) Changes Here
    gulp.watch('./app/assets/js/**/*.js').on('change', () => {
        browserSync.reload()
    })
} )
