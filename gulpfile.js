var gulp = require('gulp');
var pm2 = require('pm2');

gulp.task('start', function() {
    pm2.connect(true, function() {
        pm2.start({
            'name': 'sen-n',
            'script': 'index.js',
            'watch': true,
            'env': {
                'NODE_ENV': 'development'
            }
        }, function() {
            pm2.streamLogs('all', 0);
        });
    });
});

gulp.task('default', [ 'start' ]);

