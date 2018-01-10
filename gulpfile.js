const gulp= require('gulp');
const kitty = require('vkitty');
const serve = require('kitty-serve');
const moduleName = process.argv.slice(2)[2];
gulp.task('dev',function(){
    kitty.watch('./'+moduleName+'/demo/pre.html')
        .pipe(serve.src({
            port:8081
        }))
        .pipe(serve.cdn({
            port:8082
        }))
});

gulp.task('prod',function(){
    kitty.src('./'+moduleName+'/demo/prod.html')
        .pipe(kitty.cdnDest('./'+moduleName+'/build'));

    kitty.src('./'+moduleName+'/demo/pre.html')
        .pipe(kitty.cdnDest('./'+moduleName+'/build'))
});
