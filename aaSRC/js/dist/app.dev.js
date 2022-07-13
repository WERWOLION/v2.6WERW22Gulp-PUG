"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var flsFunctions = _interopRequireWildcard(require("./modules/functionsWebp.js"));

var _swiperON = require("./library/swiperON.js");

var _popUP = require("./modules/popUP.js");

var _header = require("./modules/header.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// импорт всей функций =   * as
flsFunctions.isWebp();
/* todo  IMPORT                     */

//
// import {greenSock } from "./library/GreenSock.js"; // анимация  greenSock
// import {SugarJS} from './library/sugar.min.js';  // jQuery}  
// import {swipeButton} from './modules/swipeButton.js'; // Кнопка - свайп
// import {rotation} from './modules/rotation.js'; // Вращение Элемента
// import {accordionClickCheked} from './modules/accordion.js'; // Внешний слайдер
// import {toTopBtn} from './modules/toTopBtn.js'; // 
// import Swal from 'sweetalert2'; // ES6 Modules or TypeScript
// const Swal = require('sweetalert2') ;// CommonJS
// import {jQuery} from './js-OLD/jquery-3.6.0.min.js';  // jQuery}  
// import {testModul} from './js- стар/test.js';  // импорт всей вункций =   * as  //тестовая функция
// import {formMessExport} from './modules/formMess.js';  // импорт -- Отправка формы
// import {popUP3} from './modules/popUP.js';  // модалка 2

/* todo  form                       */
document.addEventListener('DOMContentLoaded', function () {
  // оболочка  -выполнение после  загрузки сайта
  // jQuery(); // 1
  // SugarJS();   // 2
  // greenSock(); //  3
  //bl  ✦✦✦✦    moduls      ✦✦✦✦✦✦✦                */																		
  // testModul();  // TEST
  // formMessExport(); // модуль отправки форм
  (0, _popUP.popUP)(); // сообщения

  (0, _swiperON.sliderA)(); //  слайдер

  (0, _header.stickyHeader)();
  (0, _header.burgerMenu)(); // accordionClickCheked(); //  accordion
  // toTopBtn();       //  к шапке
  // swipeButton();       //  кнопка свайп
  // rotation();          //  поворот
}); /// -END-- -----------------------

/* todo   - END - - - form                       */
// ------LIBRARY----
// дом дерево--                  $name
//                                $_name (массив дерево)
// классы - верхний регистр      Aname
// объекты  - &   å               _name  - массив
// объекты  - &   å              o_name  - объект
// функции  - @   ü  $1          f_name