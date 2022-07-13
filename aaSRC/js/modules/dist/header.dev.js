"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stickyHeader = stickyHeader;
exports.burgerMenu = burgerMenu;

function stickyHeader() {
  //-----------------------------
  // position:sticky; top:30rem;	// console.log('stickyHeader');
  // const $stickyHeaderClass = document.querySelector('.header');
  // const $stickyHeader = document.getElementById('header');
  // let hederMarginTop = parseInt( getComputedStyle($stickyHeaderClass).getPropertyValue("margin-top"), 10);
  // функция parseInt(hederMarginTop, 10); принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления
  var $wrapper = document.querySelector('.header'),
      $stickyHeader = document.querySelector('.header__body'),
      headerOffsetTop = $stickyHeader.getBoundingClientRect().top + document.body.scrollTop;
  window.addEventListener('scroll', function () {
    // const toTop = window.getBoundingClientRect().top;
    // document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
    var windowScroll = pageYOffset; // console.log(windowScroll);

    if (headerOffsetTop < windowScroll) {
      // прилипание
      $wrapper.classList.add('--js_sticky-header');
    } else if (headerOffsetTop > windowScroll) {
      // отлипание
      $wrapper.classList.remove('--js_sticky-header');
    }
  }); //end  window.addEventListener
} // -----------  END  Header ------------------------

/* todo                                      */


function burgerMenu() {
  var $burgerBtn = document.querySelector('.burger__icon'),
      $body = document.body,
      $targetActive = document.querySelector('.navig');

  if ($burgerBtn) {
    $burgerBtn.addEventListener('click', function () {
      // console.log('222222');
      // $burgerBtn.classList.toggle('--js-active__burger-icon');
      $targetActive.classList.toggle('--js-active__burger-menu');
      $body.classList.toggle("--js-lock__body--burgerMenu");
    });
  } // if		
  // f_checkMobile();
  // f_linkGoTo(); // плавная прокрутка

} // -----------  END  burgerMenu ------------------------


function f_checkMobile() {
  var o_isMobile = {
    Android: function Android() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function BlackBerry() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function iOS() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function Opera() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function Windows() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function any() {
      return o_isMobile.Android() || o_isMobile.BlackBerry() || o_isMobile.iOS() || o_isMobile.Opera() || o_isMobile.Windows();
    }
  };
  var $body = document.body;

  if (o_isMobile.any()) {
    $body.classList.add('--js_touch');
  } else {
    $body.classList.add('--js_pc');
  }
} //-- END    ===----


function f_linkGoTo() {
  // плавная прокрутка
  var $_navLink = document.querySelectorAll('.--js_nav-link[data-goto}');
  var $header = document.querySelector('header'); // let headerHeight = $header.offsetHeight; //$header.offsetHeight; - высота шапки

  var $body = document.body,
      $targetActiveBurgerMenu = document.querySelector('.navig');

  if ($_navLink.length > 0) {
    // forEach
    var f_onNavLinkClick = function f_onNavLinkClick(e) {
      var navLink = e.target;
      var headerHeight = $header.offsetHeight;

      if (navLink.dataset["goto"] && document.querySelector(navLink.dataset["goto"])) {
        //   проверка существования елемента по ссылке
        var $gotoBlock = document.querySelector(navLink.dataset["goto"]);
        var gotoBlockDistanceTop = $gotoBlock.getBoundingClientRect().top + pageYOffset - headerHeight; // pageYOffset  кол-во прокрученных пикселей // $header.offsetHeight; - высота шапки

        window.scrollTo({
          top: gotoBlockDistanceTop,
          behavior: "smooth" //  "smooth"  - ПРОКРУТКА ПЛАВНАЯ

        }); // scrollTo

        e.preventDefault(); // отключить работу ссылки - двойнок клик + не преход , а прокрутка
      }
    }; // f_onNavLinkClick


    array.forEach(function ($_navLink) {
      $_navLink.addEventListener("click", f_onNavLinkClick()); // click
    });
  } // if 


  function f_closeBurgerMenu() {
    if ($targetActiveBurgerMenu.classList.contains('--js-active__burger-menu')) {
      // $burgerBtn.classList.toggle('--js-active__burger-icon');
      $targetActiveBurgerMenu.classList.remove('--js-active__burger-menu');
      $body.classList.remove("--js-lock__body--burgerMenu");
    }
  } //-- END    ===----

} //-- END    ===----