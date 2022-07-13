export function stickyHeader(){ //-----------------------------
	// position:sticky; top:30rem;	// console.log('stickyHeader');
	// const $stickyHeaderClass = document.querySelector('.header');
	// const $stickyHeader = document.getElementById('header');
	// let hederMarginTop = parseInt( getComputedStyle($stickyHeaderClass).getPropertyValue("margin-top"), 10);
	// функция parseInt(hederMarginTop, 10); принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления
	const $wrapper = document.querySelector('.header'),
	      $stickyHeader = document.querySelector('.header__body'),
				headerOffsetTop = $stickyHeader.getBoundingClientRect().top + document.body.scrollTop;

	window.addEventListener('scroll', function() {
		// const toTop = window.getBoundingClientRect().top;
		// document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
		const windowScroll = pageYOffset;   // console.log(windowScroll);
		if (headerOffsetTop < windowScroll){ // прилипание
			$wrapper.classList.add('--js_sticky-header',);

		} else if (headerOffsetTop > windowScroll) { // отлипание
			$wrapper.classList.remove('--js_sticky-header');

		}
	});//end  window.addEventListener

} // -----------  END  Header ------------------------


 /* todo                                      */
 export function burgerMenu() {
	const $burgerBtn = document.querySelector('.burger__icon'),
       	$body = document.body,
	      $targetActive = document.querySelector('.navig');

	if ($burgerBtn){ $burgerBtn.addEventListener('click', function(){
				// console.log('222222');
				// $burgerBtn.classList.toggle('--js-active__burger-icon');
				$targetActive.classList.toggle('--js-active__burger-menu');
				$body.classList.toggle("--js-lock__body--burgerMenu");
		});
	
	}	// if		
	// f_checkMobile();
	// f_linkGoTo(); // плавная прокрутка
}// -----------  END  burgerMenu ------------------------



function f_checkMobile(){
	const o_isMobile = {
		Android: function() {
				return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
				return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
				return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
				return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
				return (o_isMobile.Android() || o_isMobile.BlackBerry() || o_isMobile.iOS() || o_isMobile.Opera() || o_isMobile.Windows());
				}
		};
	const $body = document.body;
	
	if( o_isMobile.any() ){
		$body.classList.add('--js_touch');
	}else{
		$body.classList.add('--js_pc');
	}
}//-- END    ===----

function f_linkGoTo(){ // плавная прокрутка
	const $_navLink = document.querySelectorAll('.--js_nav-link[data-goto}');
	const $header = document.querySelector('header');
	// let headerHeight = $header.offsetHeight; //$header.offsetHeight; - высота шапки
	const $body = document.body,
	      $targetActiveBurgerMenu = document.querySelector('.navig');		

	if ($_navLink.length > 0) { 
		array.forEach($_navLink => { 
			$_navLink.addEventListener("click", f_onNavLinkClick()); // click
		});// forEach
		function f_onNavLinkClick(e) {
			const navLink = e.target;
			let headerHeight = $header.offsetHeight;

			if(navLink.dataset.goto && document.querySelector(navLink.dataset.goto)){//   проверка существования елемента по ссылке
				const $gotoBlock = document.querySelector(navLink.dataset.goto);
				const gotoBlockDistanceTop = $gotoBlock.getBoundingClientRect().top + pageYOffset - headerHeight;
				// pageYOffset  кол-во прокрученных пикселей // $header.offsetHeight; - высота шапки
			
				window.scrollTo({
					top:gotoBlockDistanceTop,
					behavior:"smooth" //  "smooth"  - ПРОКРУТКА ПЛАВНАЯ
				});// scrollTo
				e.preventDefault(); // отключить работу ссылки - двойнок клик + не преход , а прокрутка
			}
		}// f_onNavLinkClick
	} // if 

	function f_closeBurgerMenu(){
		if($targetActiveBurgerMenu.classList.contains('--js-active__burger-menu')){
			// $burgerBtn.classList.toggle('--js-active__burger-icon');
			$targetActiveBurgerMenu.classList.remove('--js-active__burger-menu');
			$body.classList.remove("--js-lock__body--burgerMenu");
		}
	}//-- END    ===----
}//-- END    ===----
 
