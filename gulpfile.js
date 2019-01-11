var gulp = require("gulp");
var gulpif = require("gulp-if");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var del = require("del");
var browserSync = require("browser-sync").create();

var argv = require('yargs').argv;
var isProduction = (argv.production === undefined) ? false : true;
	
var paths = {
  styles: {      
    src: "src/styles/**/*.scss",
    dest: "dist/styles",
    prod: "styles"
  },
  fonts: {
    src: ["src/fonts/**/*.css", "src/fonts/**/*.eot", "src/fonts/**/*.svg", "src/fonts/**/*.ttf", "src/fonts/**/*.woff"],
    dest: "dist/styles",
    prod: "styles"
  },
  html: {
    src: "src/html/**/*.html",
    dest: "dist",
    prod: ""
  },
  images: {
    src: ["src/images/**/*.jpg", "src/images/**/*.png", "src/images/**/*.ico"],
    dest: "dist/images",
    prod: "images"
  }
};

gulp.task("html", function() {
  return gulp.src(paths.html.src)
    .pipe(gulpif(isProduction, gulp.dest(paths.html.dest)))
    .pipe(gulpif(!isProduction, gulp.dest(paths.html.prod)))
    .pipe(browserSync.stream());
});

gulp.task("fonts", function() {
  return gulp.src(paths.fonts.src)
    .pipe(gulpif(isProduction, gulp.dest(paths.fonts.dest)))
    .pipe(gulpif(!isProduction, gulp.dest(paths.fonts.prod)))
    .pipe(browserSync.stream());
});

gulp.task("sass", function () {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass(
      {
        outputStyle: "expanded"
      })
    .on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulpif(isProduction, gulp.dest(paths.styles.dest)))
    .pipe(gulpif(!isProduction, gulp.dest(paths.styles.prod)))
    .pipe(browserSync.stream());
});

gulp.task("images", function() {
  return gulp.src(paths.images.src)
    .pipe(gulpif(isProduction, gulp.dest(paths.images.dest)))
    .pipe(gulpif(!isProduction, gulp.dest(paths.images.prod)))
    .pipe(browserSync.stream());
});

gulp.task("clean", function () {
  return del(["dist"]);
});

gulp.task("watch", function () {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  gulp.watch(["src/styles/**/*.scss", "src/html/**/*.html"], ["html", "fonts", "images", "sass"]);
});

gulp.task("build", ["html", "fonts", "sass", "images"]);

gulp.task("default", ["sass", "html", "fonts", "images", "watch"]);