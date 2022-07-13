function accordionClickCheked(){ //--------------------library.scss --- .accordion!!!
	const btnArrow = document.querySelectorAll('.accordion__triger');

	if (btnArrow.length > 0) {
		for(let i = 0; i < btnArrow.length; i++) {
			btnArrow[i].addEventListener("click", function(){
			  //		console.log("пойман клик" + i);
					this.classList.toggle('--js-rotation');
			});
		}
  }

 } // -----------  END  ------------------------