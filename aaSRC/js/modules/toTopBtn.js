export function toTopBtn() { 

  const scrollOnPoint = 100;
  const scrollUpBtn = document.querySelector('.to-top-btn');

  //scrollChecked
  const scrollChecked = () => window.pageYOffset || document.documentElement.scrollTop;


  // scrollUpBtn.classList.add('--visible');

  window.addEventListener('scroll', ()=> {
    if (scrollChecked () > scrollOnPoint) {

      scrollUpBtn.classList.add('--visible');
    }else{
      scrollUpBtn.classList.remove('--visible');
    }

  });  // -- END --- click


  // click
  scrollUpBtn.addEventListener('click', ()=> {
    
      window.scrollTo({
        top:0,
        behavior:'smooth',
      });
  });  // -- END --- click




} // END