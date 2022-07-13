"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sliderA = sliderA;

var _swiper = _interopRequireWildcard(require("swiper"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//  плагин
// import Swiper, { Mousewheel , Autoplay} from 'swiper';  //  плагин
// import Swiper , { Pagination, Mousewheel } from '../library/swiper.min.js';

/* todo https://swiperjs.com/swiper-api  */
// import "swiper/scss";  // import 'swiper.scss';// import 'swiper/scss/mousewheel';// import "swiper/scss";

/* todo CLASS */
// .slider-js--on === .swiper  // .swiper-wrapper // .swiper-slide
// .swiper-pagination
//  .slider_head__nav--next//  .slider_head__nav--prev
//  .reviews-slader-elm__text
function sliderA() {
  //------------------------------------
  var swiper = new _swiper["default"](".slider-js--on", {
    modules: [_swiper.Mousewheel, _swiper.Autoplay, _swiper.Navigation, _swiper.Pagination],
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      //  ▼ ▼ ▼ ▼  
      nextEl: '.slider_head__nav--next',
      prevEl: '.slider_head__nav--prev'
    },
    grabCursor: true,
    // slidesPerView: "auto", // устанваливать автоширину слайдов
    slidesPerView: 1,
    // количество слайдов в блоке прокрутки
    spaceBetween: 30,
    // отступы
    initialSlide: 1,
    // стартовый слайдер при загрузке
    slidesPerGroup: 1,
    // кол-во элм - группа прокрутки! 
    // Responsive breakpoints
    breakpoints: {
      576: {
        // when window width
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1 // кол-во элм - группа прокрутки! 

      },
      768: {
        // when window width is >= 640px
        slidesPerView: 1,
        spaceBetween: 30,
        initialSlide: 1,
        // стартовый слайдер при загрузке
        slidesPerGroup: 1 // кол-во элм - группа прокрутки! 

      }
    },
    // END breakpoints
    autoHeight: false,
    // автовысоата
    loop: true,
    // бесконечная прокрутка
    loopedSlides: 3,
    // кол-во слайдеров в бескон прокрутке
    // speed:300,
    speed: 900,
    autoplay: {
      //  ▼ ▼ ▼ ▼  
      delay: 5000,
      disableOnInteraction: false
    },
    mousewheel: {
      //  ▼ ▼ ▼ ▼  
      sensitivity: 1,
      eventsTarget: ".slider_feedback__txt" // класс по которому работаёт колесо мыши

    }
  }); // -END----------   const swiper
} /// -END----------  sliderA