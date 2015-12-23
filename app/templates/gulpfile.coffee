gulp    = require 'gulp'
del     = require 'del'
coffee  = require 'gulp-coffee'
gutil   = require 'gulp-util'

gulp.task 'clean',  ->
    del ['lib/**/*']

gulp.task 'compile', ->
    gulp.src 'src/**/*.coffee'
    .pipe coffee( bare: true ).on 'error', gutil.log
    .pipe gulp.dest 'lib/'

gulp.task 'watch', ->
    gulp.watch 'src/**/*.coffee', ['compile']
    .on 'change', (event) ->
        gutil.log 'File ' + event.path + ' was ' + event.type + ', recompiling...'

gulp.task 'build', ['clean'], ->
    gulp.start 'compile'

gulp.task 'default', ['build'], -> gulp.start 'watch'