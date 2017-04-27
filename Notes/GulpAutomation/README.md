
### Install Bower and Gulp globally
``` 
npm install –g bower
npm install –g gulp
```
### Setup a demo app

#### - Folders and files
* Create a demo directory on your local drive. This is the root directory of the app.
* Add an index.html and a gulpfile.js file to this folder.
* Add the following to the index.html:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Gulp Demo</title>
<!-- bower:css -->
<!-- endbower -->

<!-- inject:css -->
<!-- endinject -->
</head>

<body>
<!-- bower:js -->
<!-- endbower -->
<h1>HEYA</h1>
<!-- inject:js -->
<!-- endinject -->
</body>
</html>
~~~

Add an 'app' directory below the root directory and add an app.js to this directory. Add a 'styles' directory below the app directory and add a styles.css to this directory.

#### - Local package installs

Throughout this exercise, you may see WARN messages in your termainal output. Do not be concerned. You can just ignore these. In your local terminal or command window, navigate to the root directory. Create a bower.json file:
```
bower init
```
You will be prompted to answer a bunch of questions about your bower.json file. Just hit enter after each and accept all the defaults. You should now see a bower.json file in your root directory. 
Install angularjs:
```
bower install angular --save
```

Your bower.json file should now look something like this:
```javascript
{
  "name": "demo",
  "description": "",
  "main": "gulpfile.js",
  "license": "ISC",
  "homepage": "",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ],
  "dependencies": {
    "angular": "^1.5.6"
  }
}

```

Create a package.json file:
```
npm init
```
You will be prompted to answer a bunch of questions about your package.json file. Just hit enter after each and accept all the defaults. Next, install gulp locally:
```
npm install gulp --save
```
Check your gulp installs:
```
gulp -v
```
You should see two installs, one local and one CLI:
```
[11:11:16] CLI version 3.9.1
[11:11:16] Local version 3.9.1
```
Install the following:
```
npm install gulp-livereload --save
npm install wiredep --save
npm install gulp-util --save
npm install gulp-connect --save
npm install gulp-inject --save
npm install gulp-open --save
```
If all goes well, your package.json should have entries for all your locally installed packages and it should look like this:
```javascript
{
  "name": "demo",
  "version": "1.0.0",
  "description": "",
  "main": "gulpfile.js",
  "dependencies": {
    "gulp": "^3.9.1",
    "gulp-connect": "^4.1.0",
    "gulp-inject": "^4.1.0",
    "gulp-livereload": "^3.8.1",
    "gulp-open": "^2.0.0",
    "gulp-util": "^3.0.7",
    "wiredep": "^4.0.0"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

```
At this point, you are ready to edit the gulpfile.js we created earlier. Copy and paste the following into this file:

```javascript
var gulp = require('gulp'),
    livereload = require('gulp-livereload'),// auto-reload browser when files are changed 
    wiredep = require('wiredep').stream,
    gutil = require('gulp-util'),
    connect = require('gulp-connect'),      // run a local dev server
    inject = require('gulp-inject'),    // inject app dependency includes on index.html
    open = require('gulp-open');      // open a URL in the browser

var jsSources = ['app/*.js'],
    cssSources = ['app/**/*.css'],
    htmlSources = ['**/*.html'];


// Watch
gulp.task('watch', function() {
    gulp.watch(jsSources, ['js']);
    gulp.watch(cssSources, ['css']);
    gulp.watch(htmlSources, ['html']);
});

var paths = ['./bower_components/','./app/*.js','./app/**/*.css'];


gulp.task('injectables', function() {
    var sources = gulp.src(paths, {read: false});
    return gulp.src('index.html')
        .pipe(wiredep())
        .pipe(inject(sources))
        .pipe(gulp.dest('.'));
});

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(connect.reload())
});

gulp.task('html', function() {
    gulp.src(htmlSources)
        .pipe(connect.reload())
});

gulp.task('css', function() {
    gulp.src(cssSources)
        .pipe(connect.reload())
});

gulp.task('connect', function() {
    connect.server({
        root: '.',
        livereload: true
    })
});

gulp.task('app', function(){
    var options = {
        uri: 'http://localhost:8080',
        app: 'Google Chrome'
    };
    gulp.src('./index.html')
        .pipe(open(options));
});


gulp.task('serve', ['connect', 'watch', 'injectables', 'app']);
```
The above gulpfile.js content is specific for Mac. If you are running on Windows, change the following line from:
```
app: 'Google Chrome'
```
to:
```
app: 'chrome'
```
### Test the Setup

From the command prompt enter:
```
gulp serve
```
If all goes well, you should see a browser window open to the index.html page you created earlier. You should also see script and link tags for all your html, js and css files.