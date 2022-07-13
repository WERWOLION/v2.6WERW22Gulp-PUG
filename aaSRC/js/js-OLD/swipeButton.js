export function swipeButton() { 
  const resetButtonMale = document.getElementById('buttonSwipe-reset-male');  // resetButton.click();  === нажатие
  const resetButtonFemale = document.getElementById('buttonSwipe-reset-female');
  
  swipeButtonMale(); // 1
  swipeButtonFemale(); // 2

  swipeButtonModefer(); // 3+4   // 2 +3 block 


     //  /* todo - -     male       - */
  function swipeButtonMale() { 

    let initialMouse = 0;
    let slideMovementTotal = 0;
    let mouseIsDown = false;
   
    const slider = $('#buttonSwipe-slider');
    const buttonWrapper = $('#buttonSwipe-wrapper');
    const buttonName = $('#buttonSwipeName');
    const buttonBackground = $('#buttonSwipe-background');
   
    const buttonNameJs = $('#buttonSwipeNameJs');//btn-swipe__name
    const sliderBody = $(document.body, '#buttonSwipe-slider');

    // popUp
    const popUpSwipe = $('#popUp2_swipe');
    const popUpSwipeContent = $('#popUp2_swipe__content');

    // отключение окон и кнопок - через пустой блок
     resetButtonMale.addEventListener('click', function() {
        buttonName.fadeTo(300, 10);
        delClassFn ();
        slider.animate({  left: "2px"}, 300);
     });

    //   ▼ ▼ ▼ ▼ ------    function 1   ▼ ▼ ▼ ▼ 

      slider.on('mousedown touchstart', function(event){
       mouseIsDown = true;
       slideMovementTotal = buttonBackground.width() - $(this).width() + 10;
       initialMouse = event.clientX || event.originalEvent.touches[0].pageX;
     }); // END  slider.on function 1 ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    // END  slider.on function 1

    //       ▼ ▼ ▼ ▼--     function 2      ▼ ▼ ▼ ▼  ▼ ▼ ▼ ▼  ▼ ▼ ▼ ▼
    sliderBody.on('mouseup touchend', function (event) {
      if (!mouseIsDown)
        return;
      mouseIsDown = false;

      let currentMouse = event.clientX || event.changedTouches[0].pageX;
      let relativeMouse = currentMouse - initialMouse;

      if (relativeMouse < slideMovementTotal) {
        buttonName.fadeTo(300, 10);
        slider.animate({
          left: "2px"
        }, 300);
        return;
      }
      
      addClassFn (); // добавть классы

      setTimeout(function(){
        slider.on('click tap', function(event){
          if (!slider.hasClass('--unlocked'))
            return;
          delClassFn ();
          slider.off('click tap');
        });
      }, 0);
    }); //END   function 2            ▲ ▲ ▲ ▲ ▲         ▲ ▲ ▲ ▲ ▲

    //      ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼    function 3     ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼
    $(document.body).on('mousemove touchmove', function(event){
      if (!mouseIsDown)
        return;

      let currentMouse = event.clientX || event.originalEvent.touches[0].pageX;
      let relativeMouse = currentMouse - initialMouse;
      let slidePercent = 1 - (relativeMouse / slideMovementTotal);
      
      buttonName.fadeTo(0, slidePercent);

      if (relativeMouse <= 0) { // возврат слайдера
        slider.css({'left': '2px'});
        setTimeout (delClassFn(elements), 600);// задерка и вызов удаления классов
        buttonName.removeClass('--unlocked-name');
        return;
      }
      if (relativeMouse >= slideMovementTotal - 15) {
        slider.css({'left': slideMovementTotal + 'px'});
        return;
      }
      slider.css({'left': relativeMouse - 2});
    }); //---END --  ▲ ▲ ▲ ▲ ▲   ▲ ▲ ▲ ▲ ▲          function 3
    
  
    // доп функции -----▼ ▼ ▼ ▼--▼ ▼ ▼ ▼-▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼
    function addClassFn () {
      resetButtonFemale.click();

      slider.addClass('--unlocked');
      buttonWrapper.addClass('--unlocked-wrapper');
      buttonNameJs.addClass('--unlocked-name-js');

      popUpSwipe.addClass('--unlocked-popUp-js');
      popUpSwipeContent.addClass('--unlocked-popup-js');
    }

    function delClassFn () {
    
      slider.removeClass('--unlocked');
      buttonWrapper.removeClass('--unlocked-wrapper');
      buttonNameJs.removeClass('--unlocked-name-js');
    
      popUpSwipe.removeClass('--unlocked-popUp-js');
      popUpSwipeContent.removeClass('--unlocked-popup-js');
    }
  } //--- END---- 1 male ---▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲


// ADD   /* todo - -  Female -▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ */
  function swipeButtonFemale() {    // --- Female ---

    let initialMouse = 0;
    let slideMovementTotal = 0;
    let mouseIsDown = false;

    const slider = $('#buttonSwipe-slider-female');
    const buttonWrapper = $('#buttonSwipe-wrapper-female');
    const buttonName = $('#buttonSwipeName-female');
    const buttonBackground = $('#buttonSwipe-background-female');

    const buttonNameJs = $('#buttonSwipeNameJs-female');//btn-swipe__name
    const sliderBody = $(document.body,'#buttonSwipe-slider-female');
    
    // popUp
    const popUpSwipe = $('#popUp2_swipe_famale');
    const popUpSwipeContent = $('#popUp2_swipe__content_famale');

     
      // отключение окон и кнопок
      resetButtonFemale.addEventListener('click', function() {
        buttonName.fadeTo(300, 10);
        delClassFn ();
        slider.animate({ left: "2px"}, 300);
      });
     //          ----------    function 1
      slider.on('mousedown touchstart', function(event){
       mouseIsDown = true;
       slideMovementTotal = buttonBackground.width() - $(this).width() + 10;
       initialMouse = event.clientX || event.originalEvent.touches[0].pageX;
     }); // END  slider.on function 1
  

    //          -----------     function 2  
    sliderBody.on('mouseup touchend', function (event) {
      if (!mouseIsDown)
        return;
      mouseIsDown = false;

      let currentMouse = event.clientX || event.changedTouches[0].pageX;
      let relativeMouse = currentMouse - initialMouse;

      if (relativeMouse < slideMovementTotal) {
        buttonName.fadeTo(300, 10);
        slider.animate({
          left: "2px"
        }, 300);
        return;
      }
      
      addClassFn (); // добавть классы

      setTimeout(function(){
        slider.on('click tap', function(event){
          if (!slider.hasClass('--unlocked'))
            return;
          delClassFn ();
          slider.off('click tap');
        });

      }, 0);
    }); //END   function 2

    //          ---------    function 3  
    $(document.body).on('mousemove touchmove', function(event){
      if (!mouseIsDown)
        return;

      let currentMouse = event.clientX || event.originalEvent.touches[0].pageX;
      let relativeMouse = currentMouse - initialMouse;
      let slidePercent = 1 - (relativeMouse / slideMovementTotal);
      
      buttonName.fadeTo(0, slidePercent);

      if (relativeMouse <= 0) { // возврат слайдера
        slider.css({'left': '2px'});
        setTimeout (delClassFn, 600);// задерка и вызов удаления классов
        buttonName.removeClass('--unlocked-name');
        return;
      }
      if (relativeMouse >= slideMovementTotal - 15) {
        slider.css({'left': slideMovementTotal + 'px'});
        return;
      }
      slider.css({'left': relativeMouse - 2});
    }); //---END ------                      function 3
    
  
    // доп функции ------------------------------------------
    function addClassFn () {
      resetButtonMale.click();

      slider.addClass('--unlocked');
      buttonWrapper.addClass('--unlocked-wrapper-female');
      buttonNameJs.addClass('--unlocked-name-js');

      popUpSwipe.addClass('--unlocked-popUp-js');
      popUpSwipeContent.addClass('--unlocked-popup-js');
    }

    function delClassFn () {
      slider.removeClass('--unlocked');
      buttonWrapper.removeClass('--unlocked-wrapper-female');
      buttonNameJs.removeClass('--unlocked-name-js');

      popUpSwipe.removeClass('--unlocked-popUp-js');
      popUpSwipeContent.removeClass('--unlocked-popup-js');
    }

  } // END--2-- swipeButtonFemale  // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

} // END----  // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 

  /* todo  JS Modefer                                                            */
function swipeButtonModefer(){
  // resetButton.click();  === нажатие

  swipeButtonMalePresenceA();
  swipeButtonFemalePresenceA();

  function swipeButtonMalePresenceA() { 
    let type = 'male';
    let presenceA = {
      resetButtonMale: document.getElementById('buttonSwipe-reset-male--presence-a'), 
      resetButtonFemale: document.getElementById('buttonSwipe-reset-female--presence-a'),
      //-----------------------------
      slider: $('#buttonSwipe-slider--presence-a'),
      buttonWrapper: $('#buttonSwipe-wrapper--presence-a'),
      buttonName: $('#buttonSwipeName--presence-a'),
      buttonBackground: $('#buttonSwipe-background--presence-a'),
     
      buttonNameJs: $('#buttonSwipeNameJs--presence-a'),//btn-swipe__name
      sliderBody: $(document.body, '#buttonSwipe-slider--presence-a'),
      // popUp
      popUpSwipe: $('#popUp2_swipe--presence-a'),
      popUpSwipeContent: $('#popUp2_swipe__content--presence-a'),
    };
  
    swipeButtonAction(presenceA,type);
  } //--- END---- 1 male ---▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲
  function swipeButtonFemalePresenceA() { 
    let type = 'female';
    
    let femalePresenceA = {
      resetButtonMale: document.getElementById('buttonSwipe-reset-male--presence-a'), 
      resetButtonFemale: document.getElementById('buttonSwipe-reset-female--presence-a'),
      //-----------------------------
      slider: $('#buttonSwipe-slider-female--presence-a'),
      buttonWrapper: $('#buttonSwipe-wrapper-female--presence-a'),
      buttonName: $('#buttonSwipeName-female--presence-a'),
      buttonBackground: $('#buttonSwipe-background-female--presence-a'),
     
      buttonNameJs: $('#buttonSwipeNameJs-female--presence-a'),//btn-swipe__name
      sliderBody: $(document.body, '#buttonSwipe-slider-female--presence-a'),
      // popUp
      popUpSwipe: $('#popUp2_swipe_female--presence-a'),
      popUpSwipeContent: $('#popUp2_swipe__content_female--presence-a'),
    };

    swipeButtonAction(femalePresenceA , type );
  } //--- END---- 1 male ---▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲
  (function swipeButtonMalePresenceB(){
    let type = 'male';
    let presence = {
      resetButtonMale: document.getElementById('buttonSwipe-reset-male--presence-b'), 
      resetButtonFemale: document.getElementById('buttonSwipe-reset-female--presence-b'),
      //-----------------------------
      slider: $('#buttonSwipe-slider--presence-b'),
      buttonWrapper: $('#buttonSwipe-wrapper--presence-b'),
      buttonName: $('#buttonSwipeName--presence-b'),
      buttonBackground: $('#buttonSwipe-background--presence-b'),
     
      buttonNameJs: $('#buttonSwipeNameJs--presence-b'),//btn-swipe__name
      sliderBody: $(document.body, '#buttonSwipe-slider--presence-b'),
      // popUp
      popUpSwipe: $('#popUp2_swipe--presence-b'),
      popUpSwipeContent: $('#popUp2_swipe__content--presence-b'),
    };
  
    swipeButtonAction(presence,type);
  })();
  (function swipeButtonMalePresenceB(){
    let type = 'female';
    
    let femalePresence = {
      resetButtonMale: document.getElementById('buttonSwipe-reset-male--presence-b'), 
      resetButtonFemale: document.getElementById('buttonSwipe-reset-female--presence-b'),
      //-----------------------------
      slider: $('#buttonSwipe-slider-female--presence-b'),
      buttonWrapper: $('#buttonSwipe-wrapper-female--presence-b'),
      buttonName: $('#buttonSwipeName-female--presence-b'),
      buttonBackground: $('#buttonSwipe-background-female--presence-b'),
     
      buttonNameJs: $('#buttonSwipeNameJs-female--presence-b'),//btn-swipe__name
      sliderBody: $(document.body, '#buttonSwipe-slider-female--presence-b'),
      // popUp
      popUpSwipe: $('#popUp2_swipe_female--presence-b'),
      popUpSwipeContent: $('#popUp2_swipe__content_female--presence-b'),
    };

    swipeButtonAction(femalePresence , type );

  })();





 //             /* todo - -    Action    function   -*/
 
    function swipeButtonAction (elements, type){

    console.log("Проверка2  ");  
    let initialMouse = 0,
        slideMovementTotal = 0,
        mouseIsDown = false;

    const resetButtonMale = elements.resetButtonMale,
          resetButtonFemale = elements.resetButtonFemale;
    const slider = elements.slider,
    //    buttonWrapper = elements.buttonWrapper,
          buttonName = elements.buttonName,
          buttonBackground = elements.buttonBackground,
    //    buttonNameJs = elements.buttonNameJs,//btn-swipe__name
          sliderBody = elements.sliderBody;
    //    const popUpSwipe = elements.popUpSwipe,  // popUp
    //    popUpSwipeContent = elements.popUpSwipeContent;
          

     // отключение окон и кнопок - через пустой блок
        if (type == 'male') {
          resetButtonMale.addEventListener('click', function() {
            buttonName.fadeTo(300, 10);
            delClassFn(elements);
            slider.animate({  left: "2px"}, 300);
           });
      }
      if (type == 'female'){
        resetButtonFemale.addEventListener('click', function() {
          buttonName.fadeTo(300, 10);
          delClassFn (elements);
          slider.animate({ left: "2px"}, 300);
        });
      }

      //   ▼ ▼ ▼ ▼ ------    function 1   ▼ ▼ ▼ ▼ 

      elements.slider.on('mousedown touchstart', function(event){
        mouseIsDown = true;
        slideMovementTotal = buttonBackground.width() - $(this).width() + 10;
        initialMouse = event.clientX || event.originalEvent.touches[0].pageX;
      }); // END  slider.on function 1 ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
      // END  slider.on function 1

      //       ▼ ▼ ▼ ▼--     function 2      ▼ ▼ ▼ ▼  ▼ ▼ ▼ ▼  ▼ ▼ ▼ ▼
      sliderBody.on('mouseup touchend', function (event) {
        if (!mouseIsDown)
          return;
        mouseIsDown = false;

        let currentMouse = event.clientX || event.changedTouches[0].pageX;
        let relativeMouse = currentMouse - initialMouse;

        if (relativeMouse < slideMovementTotal) {
          buttonName.fadeTo(300, 10);
          slider.animate({
            left: "2px"
          }, 300);
          return;
        }
        
        addClassFn (elements, type); // добавть классы

        setTimeout(function(){
          slider.on('click tap', function(event){
            if (!slider.hasClass('--unlocked'))
              return;
            delClassFn (elements);
            slider.off('click tap');
          });
        }, 0);
      }); //END   function 2            ▲ ▲ ▲ ▲ ▲         ▲ ▲ ▲ ▲ ▲

      //      ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼    function 3     ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼
      $(document.body).on('mousemove touchmove', function(event){
        if (!mouseIsDown)
          return;

        let currentMouse = event.clientX || event.originalEvent.touches[0].pageX;
        let relativeMouse = currentMouse - initialMouse;
        let slidePercent = 1 - (relativeMouse / slideMovementTotal);
        
        buttonName.fadeTo(0, slidePercent);

        if (relativeMouse <= 0) { // возврат слайдера
          slider.css({'left': '2px'});
          setTimeout (delClassFn(elements), 600);// задерка и вызов удаления классов
          buttonName.removeClass('--unlocked-name');
          return;
        }
        if (relativeMouse >= slideMovementTotal - 15) {
          slider.css({'left': slideMovementTotal + 'px'});
          return;
        }
        slider.css({'left': relativeMouse - 2});
      }); //---END --  ▲ ▲ ▲ ▲ ▲   ▲ ▲ ▲ ▲ ▲          function 3

  
  } //--- END- Action

  
  //  Additional  function 
  function addClassFn (elements, type) {

    elements.slider.addClass('--unlocked');
    elements.buttonNameJs.addClass('--unlocked-name-js');
    elements.popUpSwipe.addClass('--unlocked-popUp-js');
    elements.popUpSwipeContent.addClass('--unlocked-popup-js');

    if (type == 'male') {
        elements.resetButtonFemale.click();
        elements.buttonWrapper.addClass('--unlocked-wrapper');
    }
    if (type == 'female'){
        elements.resetButtonMale.click();
        elements.buttonWrapper.addClass('--unlocked-wrapper-female');
    }
  }

  function delClassFn (elements){
    elements.slider.removeClass('--unlocked');
    elements.buttonWrapper.removeClass('--unlocked-wrapper --unlocked-wrapper-female');
    // elements.buttonWrapper.removeClass('--unlocked-wrapper-female');

    elements.buttonNameJs.removeClass('--unlocked-name-js');
  
    elements.popUpSwipe.removeClass('--unlocked-popUp-js');
    elements.popUpSwipeContent.removeClass('--unlocked-popup-js');
  }





}  /* todo   END   ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲           ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲         ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲*/
