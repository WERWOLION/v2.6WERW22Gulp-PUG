import Swiper, { Mousewheel , Autoplay,  Navigation, Pagination} from 'swiper';  //  плагин
// import Swiper, { Mousewheel , Autoplay} from 'swiper';  //  плагин
// import Swiper , { Pagination, Mousewheel } from '../library/swiper.min.js';

 /* todo https://swiperjs.com/swiper-api  */
// import "swiper/scss";  // import 'swiper.scss';// import 'swiper/scss/mousewheel';// import "swiper/scss";
 /* todo CLASS */
// .slider-js--on === .swiper  // .swiper-wrapper // .swiper-slide

// .swiper-pagination
//  .slider_head__nav--next//  .slider_head__nav--prev
//  .reviews-slader-elm__text

export function sliderA () { //------------------------------------

    const swiper = new Swiper(".slider-js--on", {
        modules: [ Mousewheel, Autoplay ,  Navigation, Pagination],   
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        navigation: {  //  ▼ ▼ ▼ ▼  
        nextEl: '.slider_head__nav--next',
        prevEl: '.slider_head__nav--prev',
        },

        grabCursor:true,
        // slidesPerView: "auto", // устанваливать автоширину слайдов
        slidesPerView:1,    // количество слайдов в блоке прокрутки
        spaceBetween:30,      // отступы
        initialSlide : 1,   // стартовый слайдер при загрузке
        slidesPerGroup:1, // кол-во элм - группа прокрутки! 
        // Responsive breakpoints
          breakpoints: {
            576: { // when window width
              slidesPerView: 1,
              spaceBetween: 20,
              slidesPerGroup:1, // кол-во элм - группа прокрутки! 
            },
            768: { // when window width is >= 640px
              slidesPerView: 1,
              spaceBetween: 30,
              initialSlide : 1, // стартовый слайдер при загрузке
              slidesPerGroup:1, // кол-во элм - группа прокрутки! 
            }
          },// END breakpoints

        autoHeight:false,    // автовысоата
        loop:true,          // бесконечная прокрутка
        loopedSlides:3,       // кол-во слайдеров в бескон прокрутке
        // speed:300,
        speed:900,

        autoplay: { //  ▼ ▼ ▼ ▼  
          delay: 5000,
          disableOnInteraction:false,
        },

        mousewheel:{ //  ▼ ▼ ▼ ▼  
          sensitivity:1,
          eventsTarget:".slider_feedback__txt", // класс по которому работаёт колесо мыши
        },

                             
});  // -END----------   const swiper
} /// -END----------  sliderA