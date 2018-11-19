var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var del = require("del");
var browserSync = require("browser-sync").create();
	
var paths = {
  styles: {      
    src: "src/styles/**/*.scss",
    dest: "dist/styles"
  },
  html: {
    src: "src/html/**/*.html",
    dest: "dist"
  },
  images: {
    src: ["src/images/**/*.jpg", "src/images/**/*.png", "src/images/**/*.ico"],
    dest: "dist/images"
  }
};

gulp.task("html", function() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
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
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
});

gulp.task("images", function() {
  return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest))
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
  gulp.watch(["src/styles/**/*.scss", "src/html/**/*.html"], ["html", "images", "sass"]);
});

gulp.task("build", ["html", "sass", "images"]);

gulp.task("default", ["sass", "html", "images", "watch"]);