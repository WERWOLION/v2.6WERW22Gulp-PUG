import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'

import cleanCss from 'gulp-clean-css' // Сжатие CSS файла
import webpcss from 'gulp-webpcss' // Вывод WEBP изображений
import autoPrefixer from 'gulp-autoprefixer' // Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries' // Группировка медиа запросов

const sass = gulpSass(dartSass)

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'SCSS',
        message: 'Error: <%= error.message %>'
      })))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(sass({ outputStyle: 'expanded' }))
    // .pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
    .pipe(app.plugins.if(app.isBuild, webpcss(
      {
        webpClass: '.webp',
        noWebpClass: '.no-webp'
      }
    )))
    .pipe(app.plugins.if(app.isBuild, autoPrefixer({
      grid: true,
      overrideBrowserslist: ['last 3 versions'],
      cascade: true
    })))
    // Раскомментировать если нужен не сжатый дубль файла стилей
    .pipe(app.gulp.dest(app.path.build.css)) // получение 1 файла
    .pipe(app.plugins.if(app.isBuild, cleanCss())) // получение сжатого файла
    .pipe(rename({ extname: '.min.css' }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream())
}

// app.plugins.if(app.isBuild, )

//npm i -D  gulp-clean-css gulp-webpcss gulp-autoprefixer gulp-group-css-media-queries
//npm i -D webp-converter@2.2.3
//npm i -D webpack webpack-stream

