const { src, dest, series, watch } = require("gulp");
const gulp = require("gulp");
const del = require("del");
const newer = require("gulp-newer");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const csso = require("gulp-csso");
const babel = require("gulp-babel");
const htmlmin = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin"); //JPG, PNG files optimized
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const sync = require("browser-sync").create();

let paths = {
  startPaths: {
    html: ["./src/pages/main.html", "./src/pages/message.html"],
    styles: ["./src/styles/main.scss", "./src/styles/message.scss"],
    js: ["./src/js/main.js", "./src/js/message.js"],
    images: "./src/img/**/*",
    audio: "./src/audio/**/*",
  },
  endPaths: {
    html: "./dist/html",
    css: "./dist/css",
    js: "./dist/js",
    images: "./dist/img",
    audio: "./dist/audio",
  },
};

let html = () => {
  return src(paths.startPaths.html)
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      })
    )
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(dest(paths.endPaths.html))
    .pipe(sync.stream());
};

//work with css
let css = () => {
  return src(paths.startPaths.styles)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(
      autoprefixer({
        overrideBrowserslist: [" > 0.1%"], //так будет на много правильнее
      })
    )
    .pipe(csso())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("./"))
    .pipe(dest(paths.endPaths.css))
    .pipe(sync.stream());
};

//work with js
let js = () => {
  return src(paths.startPaths.js)
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("./"))
    .pipe(dest(paths.endPaths.js))
    .pipe(sync.stream());
};

//work with images
let images = () => {
  return src(paths.startPaths.images)
    .pipe(newer(paths.endPaths.images))
    .pipe(imagemin())
    .pipe(dest(paths.endPaths.images));
};

//audio files
let audio = () => {
  return src(paths.startPaths.audio).pipe(dest(paths.endPaths.audio));
};

//fonts - @font-face(В следующий раз подключу нормально)

//Clear files.. Это нужно, ведь каждый раз они будут обновляться
let clear = () => {
  return del("./dist/**/*");
};

//start serve
let serve = () => {
  sync.init({
    server: {
      baseDir: "./dist",
      index: "./html/main.min.html",
    },
    notify: true,
  });
};

let build = () => {
  // Production mode
  return src(
    [
      "dist/html/**/*.html",
      "dist/css/**/*.css",
      "dist/js/**/*.js",
      "dist/img/**/*",
    ],
    { base: "dist" }
  ) //Параметр base указывает откуда мы берем эти файлы. Он делает для них структуру папок такой же, какая она и была в указанной папке
    .pipe(dest("dest"));
}; //Просто берем и копируем все файлы в другую папку для production

let Watch = () => {
  //И смотрим за файлами вот тут:
  watch("./src/html/*.html", html);
  watch("./src/styles/*.scss", css);
  watch("./src/js/*.js", js);
};

exports.default = series(
  clear,
  html,
  audio,
  images,
  css,
  js,
  gulp.parallel(serve, Watch)
); // Develompent mode
exports.build = build;

//exports.default = parallel(Watch, serve)
