import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./aRESULT"; // конечный итог  rootFolder = название проекта 
const srcFolder = "./aaSRC";  // исходники 


export const path = {  // экспорт и объявление
  build: {
      js: `${buildFolder}/js/`,
      css: `${buildFolder}/css/`,
      html: `${buildFolder}/`,
      images: `${buildFolder}/img/`,
      fonts: `${buildFolder}/fonts/`,
      files: `${buildFolder}/files/`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    html: `${srcFolder}/*.pug`,
    scss: `${srcFolder}/scss/style.{scss,sass}`,
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    files: `${srcFolder}/files/**/*.*`,
    svgicons: `${srcFolder}/img/svgicons/*.svg`,
  },
  watch: {
      js: `${srcFolder}/js/**/*.js`,
      scss: `${srcFolder}/scss/**/*.{scss,sass}`,
      html: `${srcFolder}/**/*.html`,
      html: `${srcFolder}/**/*.pug`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,webp,ico}`,
      files: `${srcFolder}/files/**/*.*`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: `test`
}

