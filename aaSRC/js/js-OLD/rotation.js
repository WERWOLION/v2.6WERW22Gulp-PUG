export function rotation() {  // rotation  вращение
  
  const  rotationTrackingBox = document.querySelector('.cover-right__map--js'); 
  const  rotationElement = document.querySelector('.cover-right__box-ellipse-red'); 
  // 2
  const  rotationTrackingBoxA = document.querySelector('.app_left-demo__ellipse-map--js-rotation'); 
  const  rotationElementA = document.querySelector('.app_left-demo__ellipse-blue--wrapper');
  // 3
  const  rotationTrackingBoxB = document.querySelector('.presence-a_right__map--js'); 
  const  rotationElementB = document.querySelector('.presence-a__box-ellipse-turquoise'); 
  // 4
  const  rotationTrackingBoxС = document.querySelector('.presence-b_left__map--js'); 
  const  rotationElementС = document.querySelector('.presence-b_left__box-ellipse-beige'); 


  //rotationTrackingBox.offsetLeft    .offsetLeft   смещение самого элемента
                   /* todo   1    ▼ ▼ ▼ ▼  */
  rotationTrackingBox.onmousemove = function (event){ // остлеживание движенияч мыши
    let radius =  227 ;
    let centrX = 550 + radius;
    let centrY = -80 + radius;
    let xRelative = rotationTrackingBox.left ; //   .offsetLeft   смещение самого элемента

    let injectionX = event.x - xRelative ;
    let injectionY = event.y - centrY;
    // угол =  injection
    // для углового поворота ↑↑↑↑↑↑↑↑↑↑  ▲ ▲ ▲ ▲ ▲ ▲ ▲ 
    
    // для поворота по по отклонению мыши  	♥ 	♥ 	♥   	♥ 	♥ 	♥ 
    let x = event.offsetX - radius; // event.offsetX  координата блока
    let y = injectionY;
    let rotationElementFn = rotationElement;
     
    function acrCtg (x , y) { // вычисление угла в радианах ♥ 	♥ 	♥   	♥ 	♥ 	♥ 
      // let a = Math.PI/2 - Math.atan(x/y);
      // let b = Math.PI + Math.atan(y/x);
      // let c = 3 * Math.PI/2 + Math.abs(Math.atan(x/y));
      // if (x > 0 , y > 0)  return a * -1 ;
      // if (x < 0 , y > 0)  return a / 2; 

      // if (x < 0 , y < 0)  return b/12;
      // if (x > 0 , y < 0)  return a  ;//* -1;

      // console.log( ZTEST + " ПРОВЕРКА" );
      
      if (x < 0 )  return Math.abs(x/28) ;
      if (x > 0 ) return Math.abs(x/30) * -1;
      // if (x < 0 , y < 40) return 0;
      // if (x < 0 , y < 40) return 0;
    } // ↑↑↑  ♠♠♠♠♠♠♠♠♠         ♠♠♠♠♠♠♠♠♠         ♠♠♠♠♠♠♠♠♠

    // console.log(x + ' ' + y);
    addedClass(x , y , rotationElementFn );
     
      // if (x > 0 ) {
      //   resetClass();
      //   rotationElement.classList.add("js_transform--m15");
      // } 
      // if (x > 0 ) {
      //   resetClass();
      //   rotationElement.classList.add("js_transform--15 ");
      // } 

    //let degree = 57.2958 * acrCtg(x,y) / 4; // превод радианов в градусы
    // let degree = acrCtg(x,y);
    //  rotationElement.style.transform = 'rotate( ' + degree + 'deg)';
  }; // end   ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ 
  rotationTrackingBox.onmouseout =  function (){ // отслеживать удаление курсора с цели
    resetClass(rotationElement);   // rotationElement.style.transform = 'rotate(0deg)';
  };  //  rotationTrackingBox.onmousemove   ▲ ▲ ▲ ▲ ▲ ▲

                 /* todo   2    ▼ ▼ ▼ ▼    */
   rotationTrackingBoxA.onmousemove = function (event){ // остлеживание движенияч мыши
    let radius =  267 ;
    let x = event.offsetX - radius; // event.offsetX  координата блока
    
    // console.log(x);
    addedClass(x , 0 ,rotationElementA);
  }; // end   ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ 
  rotationTrackingBoxA.onmouseout =  function (){ // отслеживать удаление курсора с цели
    resetClass(rotationElementA);   // rotationElement.style.transform = 'rotate(0deg)';
  };  //  rotationTrackingBox.onmousemove   ▲ ▲ ▲ ▲ ▲ ▲
                 /* todo   3    ▼ ▼ ▼ ▼    */
   rotationTrackingBoxB.onmousemove = function (event){ // остлеживание движенияч мыши
    let radius =  267 ;
    let x = event.offsetX - radius; // event.offsetX  координата блока
    //--------------
    // console.log(x);
    addedClass(x , 0 ,rotationElementB);
  }; // end   ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ 
  rotationTrackingBoxB.onmouseout =  function (){ // отслеживать удаление курсора с цели
    resetClass(rotationElementB);   // rotationElement.style.transform = 'rotate(0deg)';
  };  //  rotationTrackingBox.onmousemove   ▲ ▲ ▲ ▲ ▲ ▲
                 /* todo   4    ▼ ▼ ▼ ▼    */

    rotationTrackingBoxС.onmousemove = function (event){ // остлеживание движенияч мыши
      let radius =  267 ;
      let x = event.offsetX - radius; // event.offsetX  координата блока
      //--------------
      // console.log(x);
      addedClass(x , 0 ,rotationElementС);
    }; // end   ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ 
    rotationTrackingBoxС.onmouseout =  function (){ // отслеживать удаление курсора с цели
      resetClass(rotationElementС);   // rotationElement.style.transform = 'rotate(0deg)';
    };  //  rotationTrackingBox.onmousemove   ▲ ▲ ▲ ▲ ▲ ▲               


                    /* todo   FN!!!   ▼ ▼ ▼ ▼                */
  function addedClass(x , y , element ) {
    if (x < -110 ) {
      // console.log("dsddsddsdd 2229999");
      resetClass(element);
      element.classList.add("js_transform--10");
    } 
    if (x > 110 ) {
      resetClass(element);
      element.classList.add("js_transform--m17");
    } 
    if (x <  110 &&  x >  0) {
      resetClass(element);
      element.classList.add("js_transform--m15");
    } 
    if (x <  0 &&  x >  -110) {
      resetClass(element);
      element.classList.add("js_transform--5");
    } 
  } // END  resetClass  ▲ ▲ ▲ ▲ ▲ ▲

  function resetClass(elementBox) {
    elementBox.classList.remove(
      "js_transform--m17",
      "js_transform--10",
      "js_transform--m15",
      "js_transform--5",
        );
  } // END  resetClass  ▲ ▲ ▲ ▲ ▲ ▲
} // END     ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲