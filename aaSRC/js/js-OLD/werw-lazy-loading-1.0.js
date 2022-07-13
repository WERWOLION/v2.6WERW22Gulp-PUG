const imagemin = require("gulp-imagemin");

const lazyImg = document.querySelectorAll("img[data-src], source[data-srcset]");
//source[data-srcset]- карта
const loadMapBlock = document.querySelectorAll("._load-map");
const widowHeight = document.documentElement.clientHeight;

let lazyImgPosition = [];

if (lazyImg.length>0 ){
  lazyImg.forEach(img =>{
    if (img.dataset.src || img.dataset.srcset) { // проверка на пустоту
      lazyImgPosition.push(img.getBoundingClientRect().top + pageYOffset);
      lazyScrolChek();  // прослушка скрола текущего
    }
  });
}
console.log("Проверка массива координат");
console.log(lazyImgPosition);

window.addEventListener("scroll", lazyScrol);
function lazyScrol (){
  if (document.querySelectorAll("img[data-src], source[data-srcset]").length >0) {
    lazyScrolChek();
  }
};


function lazyScrolChek(){
  let imgIndex = lazyImgPosition.findIndex(
    item => pageYOffset > item - widowHeight
  );
    if (imgIndex >=0){
      if(lazyImg[imgIndex].dataset.src){
         lazyImg[imgIndex].src = lazyImg[imgIndex].dataset.src;
         lazyImg[imgIndex].removeAttribute("data-src");
      } else if (lazyImg[imgIndex].dataset.srcset){
        lazyImg[imgIndex].srcset = lazyImg[imgIndex].dataset.srcset;
        lazyImg[imgIndex].removeAttribute("data-srcset");
      }
      delete lazyImgPosition[imgIndex];
    }
}  // ---END---------- function lazyScrolChek