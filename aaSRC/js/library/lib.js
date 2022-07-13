const $elem = document.querySelector('#elem');
const $elem2 = document.querySelectorAll('.elem2'); 
const $elem3 = document.getElementById('elem3');
const body = document.querySelector('body');  
// const color = $elem.style.backgroundColor;

let marginTop = getComputedStyle($elem).getPropertyValue("margin-top");
$elem.classList.add("--elem-class.");
$elem.classList.remove(
  "--elem-class",  "js_transform--10", "js_transform--m15",
  "js_transform--5", );

  $elem.classList.toggle('--js_elem-class');// снять - поставить

const $header = document.querySelector('header');  
const headerHeight = $header.offsetHeight;// - высота шапки 



//GGG   //GGG
if ($elem.length > 0) { // длинна массива
  for(let i = 0; i < $elem.length; i++) {
    $elem[i].addEventListener("click", function(){//console.log("пойман клик" + i);
        this.classList.toggle('--js-rotation');    });
}}
//GGG   //GGG
$elem.addEventListener("click", function() {
  console.log("Щёлк!");
});
//GGG    //GGG
window.addEventListener('scroll', function() {
  console.log("СКРОЛ!");
});
//GGG    //GGG


 //  import popupJsForAlert2 from './../modules/formMess.js';  // импорт  Отправка формы
export function popUP() { 
                                            // let popupJsForAlert = popupJsForAlert2;
                                            // alert ("попап" + popupJsForAlert);
  const popupLinks = document.querySelectorAll('.popup-link--js');// открытие при клике по .popup-link         // сахар
  const lockPadding = document.querySelectorAll('.lock-padding--js');// добавить класс для фиксированных блоков - скрыть скролл
  const timeout = 800;  // 800 милесекунд = транзишн 0.8s
  const popupCloseIcon = document.querySelectorAll('.close-popUP--js'); // в модл окне объект с классом .close-popUP
                         // alert("1 ПРОВЕРКА ТЕЛА" + body.innerText);    
  let unlock = true; // отключение двойных нажатий



  
  if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++){  // в .popup-link найти ссылку с # и открыть модл окно по ID
      const popupLink = popupLinks[i];
                             //  alert("2 ПРОВЕРКА" + popupLink.innerText);   
      popupLink.addEventListener('click', function(e) {
        const popupName = popupLink.getAttribute('href').replace('#', ''); // =   href="#popUp__Alert"  минус # = ID модального окна
        const curentPopup = document.getElementById(popupName);  // = ID модального окна
                                   // alert("4 ПРОВЕРКА ID " + curentPopup.innerHTML);
        popupOpen(curentPopup);   // функция открытия модл окна
        e.preventDefault();      // запрет перезагрузки
      });
    }
  } // END if

  // -------------------------------------------

  if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++){
      const el = popupCloseIcon[i];
      el.addEventListener('click', function(e){
        popupClose(el.closest('.popUP')); // цикл будет искать родителя с класом .popup и его будет закрывать
        e.preventDefault();      // запрет перезагрузки
      });
    }
  }// END if

  
 function popupOpen(curentPopup){ // функция открытия модл окна
     if (curentPopup && unlock) { // проверка окна + переменной unlock
      const popupActive = document.querySelector('.popUP.open--js');
                                  // alert("ПРОВЕРКА popupActive " + popupActive.innerText); 
      if (popupActive){  popupClose(popupActive, false); // закрыть др мод окно 
      } else {
         bodyLock(); // отключить скрол
      };

      curentPopup.classList.add("open--js"); // добавить класс -JS
      //  alert("ПРОВЕРКА popupActive " + curentPopup.innerText); 

      curentPopup.addEventListener('click', function(e){
        if (!e.target.closest('.popUP__content')){ // отлючение от функции всего кроме тёмной области
            popupClose(e.target.closest('.popUP')); // закрыть окно ( клик по области за окном)
        }
      });
     }
 } // END   function popupOpen



 function popupClose(popupActive, doUnLock = true) { //  doUnLock = не блочить скрол 2 раза
    }
 }// END function---------------------------------------


  /* todo     БАЗА  ▼ ▼ ▼ ▼  */
 //rotationTrackingBox.offsetLeft    .offsetLeft   смещение самого элемента
  // IIFE  function
  (function(){
    // проверяем поддержку
  })();















