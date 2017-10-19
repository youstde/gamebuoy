const gulp= require('gulp');
const kitty = require('vkitty');
const serve = require('kitty-serve');

gulp.task('dev',function(){
    kitty.watch('./demo/pre.html')
        .pipe(serve.src({
            port:8081
        }))
        .pipe(serve.cdn({
            port:8082
        }))
});

gulp.task('prod',function(){
    kitty.src('./demo/prod.html')
        .pipe(kitty.cdnDest('./build'));

    kitty.src('./demo/pre.html')
        .pipe(kitty.cdnDest('./build'))
});
