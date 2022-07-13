                          //  import popupJsForAlert2 from './../modules/formMess.js';  // импорт  Отправка формы
export function popUP() { 
                             // let popupJsForAlert = popupJsForAlert2;
                              // alert ("попап" + popupJsForAlert);
  const popupLinks = document.querySelectorAll('.--js_link');// открытие при клике по .popup-link  .popup-link--js
  const body = document.querySelector('body');             // сахар
  const lockPadding = document.querySelectorAll('.--js_fixed');// добавить класс для фиксированных блоков - скрыть скролл
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
      // console.log('curentPopup');
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


 function bodyLock(){  //фн отключить скрол
      
    const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                                             // alert(lockPaddingValue);
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
                                                // alert(el);
        el.style.paddingRight = lockPaddingValue ;        // lockPaddingValue;
      }
    }
    // body.style.paddingRight = lockPaddingValue; //body width without scroll
    body.classList.add("--js-lock__body");

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
      if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index];
          el.getElementsByClassName.paddingRight = lockPaddingValue;
        }
      }
      // body.style.paddingRight = lockPaddingValue; //body width without scroll
      body.classList.add("--js-lock__body");

      unlock = false;
      setTimeout(function () {
        unlock = true;
      }, timeout);
 } // END   function bodyLock------------------------------------------

 function popupClose(popupActive, doUnLock = true) { //  doUnLock = не блочить скрол 2 раза
    if(unlock){
      popupActive.classList.remove('open--js');
      if(doUnLock){
         bodyUnLock(); //  doUnLock = не блочить скрол 2 раза
      }
    }
 }// END function---------------------------------------

 function bodyUnLock(){
   setTimeout(function (){ 
    if (lockPadding.length>0){
     for (let i = 0; i < lockPadding.length; i++){
      const el = lockPadding[i];
      el.style.paddingRight = '0px';
     } 
    }
    //  body.style.paddingRight = '0px';
     body.classList.remove('--js-lock__body');
   }, timeout ); // setTimeout = задерка появления скрола
   
   
   unlock = false;
   setTimeout(function (){  // блочит повторные нажатия = таймаут
     unlock = true;
   }, timeout);  
 } // END function---------------------------------------

  document.addEventListener('keydown', function (e) {  // закрытие по ескейп
    if (e.which === 27 ) { // код клавиши ескейп
      const popupActive = document.querySelector('.popUP.open--js');
      popupClose(popupActive);
    }
  });  //--- END---


  // полифил
  (function(){
    // проверяем поддержку
    if(!Element.prototype.closest){
      //
      Element.prototype.closest = function(css){
         let node = this;
          while (node){
            if(node.matches(css)) return node;
            else node = node.parentElement;
          }
          return null;
      };
    }
  })();
  (function(){
    // проверяем поддержку
    if(!Element.prototype.matches){
      //
      Element.prototype.matches = Element.prototype.matchesSelector ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.matchesSelector;
    
    }
  })(); //--- END---




  // ---- Forma Alert-------------------------------------------------------------------------------------------
  // let modalTextAlert = modalFieldAlert.textContent; 
  // alert(modalTextAlert );

  // if ( modalTextAlert.length > 3) {
  //   alert("аллерт работает");
  //   const alertPopup = document.getElementById('popUpFormAlert');  // = ID модального окна
  //                                  // alert("4 ПРОВЕРКА ID " + curentPopup.innerHTML);
  //   popupOpen(alertPopup);   // функция открытия модл окна
  //   e.preventDefault();      // запрет перезагрузки

  // } // END ------------ Forma Alert-------------------------

  

}  // ---------------END------------------ export function popUP




function formaAlert (){


}





// export function popUP3() { 
//   // alert("Popup 3");

//   let modal = document.getElementsById("popup3JS");
//   let btnOpenModal3 = document.getElementsById("popup3link");
//   let closeModal = document.getElementsByClassName(".close-popup--JS3")[0];


//   btnOpenModal3.onclick = function (){modal.style.display = "block";};
//   closeModal.onclick = function(){ modal.style.display = "none";};

//   // клик вокруг модального окна
//   window.onclick = function (event){
//     if (event.target == modal){}
//     modal.style.display = "none";
//   };

// } // ---------------END------------------ export
