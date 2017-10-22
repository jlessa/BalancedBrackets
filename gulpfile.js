var gulp = require('gulp');
var nomemon = require('gulp-nodemon');
var gulpMocha = require('gulp-mocha');


gulp.task('default', function () {
    nomemon({
            script: 'app.js',
            ext: 'js',
            env: {
                PORT: 3000
            },
            ignore: ['./node_modules']
        })
        .on('restart', function () {
            console.log('Restarting Server...');
        });
});

gulp.task('test', function () {    
    gulp.src('src/tests/*.js', {
        read: false
    }).pipe(gulpMocha({
        reporter: 'nyan'
    }));

});