export function parallax() {
  const $parallax = document.querySelector('.parallax');

  if($parallax){ // проверка на наличие ( если есть др страниы сайта)
    const $txtContent = document.querySelector('.parallax__txt-container'),
          $authorfoto = document.querySelector('.author-foto'),
          $itmA = document.querySelector('.img-parallax__a'),
          $itmB = document.querySelector('.img-parallax__b-fon'),
          $itmC = document.querySelector('.img-parallax__c-masc'),
          $itmD = document.querySelector('.img-parallax__d'),
          $lighthouse = document.querySelector('.parallax_sub-content');// маяк - слежение


    //коэффициенты
    const forAuthorfoto= 50;
    const forItmA = 40;
    const forItmB = 20;
    const forItmC = 10;
    const forItmD = 20;

    // скорость анимации
    const speed = 0.05;

    //объявление переменных 
    let positionX=0, positionY=0;
    let coordXprocent=0, coordYprocent=0;

    //анимация мышкой
    function fnSetMouseParallaxStyle(){
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);

      //передача стилей
      $itmA.style.cssText = `transform: translate(${positionX / forItmA }%,${positionY / forItmA }%);`;
      $itmB.style.cssText = `transform: translate(${positionX / forItmB }%,${positionY / forItmB }%);`;
      $itmC.style.cssText = `transform: translate(${positionX / forItmC }%,${positionY / forItmC }%);`;
      $itmD.style.cssText = `transform: translate(${positionX / forItmD }%,${positionY / forItmD }%);`;
      $authorfoto.style.cssText = `transform: translate(${-positionX / forAuthorfoto }%,${-positionY / forAuthorfoto }%);`;

      requestAnimationFrame(fnSetMouseParallaxStyle); 
    }
    fnSetMouseParallaxStyle();


  //расчёт начальных координат при движении мыши
    $parallax.addEventListener('mousemove', function(e){
        //получение размеров блока (W - H)
        const parallaxWidth = $parallax.offsetWidth;
        const parallaxHeight = $parallax.offsetHeight;

        //обнуление координат по центру
        const coordX = e.pageX - parallaxWidth / 2;
        const coordY = e.pageY - parallaxHeight / 2;

        // Получаем проценты
        coordXprocent = coordX / parallaxWidth * 100;
        coordYprocent = coordY / parallaxHeight * 100;

    });



  // ПАРАЛАКС при скроле
  let mThesholdSets = []; // массив 
  for (let i = 0; i <=1.0 ; i += 0.005){
    mThesholdSets.push(i);
  }
  const fnCallback = function (entries, observer) {
    const scrollTopPercent = window.pageYOffset / $parallax.offsetHeight * 100;
    fnSetParallaxItemsStyle(scrollTopPercent);//замена события скролл методом IntersectionObserver 
  };
  const observer = new IntersectionObserver(fnCallback,{
    threshold: mThesholdSets // достижение порога
  });

  observer.observe($lighthouse);// Елемент на который реагирует прокрутка паралакса

  function fnSetParallaxItemsStyle(scrollTopPercent){
    $txtContent.style.cssText = `transform: translate(0%,-${scrollTopPercent / 1}%);`; // проценты менят скорость
    $itmB.parentElement.style.cssText = `transform: translate(0%,-${scrollTopPercent / 6}%);`;
    $itmC.parentElement.style.cssText = `transform: translate(0%,-${scrollTopPercent / 3}%);`;
    $itmD.parentElement.style.cssText = `transform: translate(0%,-${scrollTopPercent / 1.6}%);`;
    $authorfoto.parentElement.style.cssText = `transform: translate(0%,-${scrollTopPercent / 2.5}%);`;
  }

  } // END if
 }//-- END    ===----