var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var del = require("del");
var browserSync = require("browser-sync").create();
	
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
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
});

gulp.task("fonts", function() {
  return gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest))
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


gulp.task("htmlProd", function() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.prod))
    .pipe(browserSync.stream());
});

gulp.task("fontsProd", function() {
  return gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.prod))
    .pipe(browserSync.stream());
});

gulp.task("sassProd", function () {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass(
      {
        outputStyle: "expanded"
      })
    .on("errorProd", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.prod))
    .pipe(browserSync.stream());
});

gulp.task("imagesProd", function() {
  return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.prod))
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

gulp.task("dev", ["html", "fonts", "sass", "images"]);

gulp.task("build", ["htmlProd", "fontsProd", "sassProd", "imagesProd"]);

gulp.task("default", ["sass", "html", "fonts", "images", "watch"]);