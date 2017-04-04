var gulp = require('gulp');
var crudRoutesBuild = require('gulp-crud-routes-build');

module.exports = gulp.task('crud-routes-gen', function () {
  gulp.src('models/*.json', {read: false})
    .pipe(crudRoutesBuild({
      routersFolder: '../reception-server/src/lib/crudRoutes'
    }));
});
