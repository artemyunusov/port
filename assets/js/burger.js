let burger = document.querySelector('.burger');
let hLow = document.querySelector('.header__low');
let header = document.querySelector('.header');
let nav = document.querySelector('.nav');
let mask = document.querySelector('.mask');
let navList = nav.querySelector('.nav__list');

burger.addEventListener('click', function (e) {
  this.classList.toggle('burger-click');

  if (burger.classList.contains('burger-click') ) {
    document.body.style.overflow = 'hidden';

    mask.style.opacity = "1";
    nav.classList.add('nav-active');
  } else {
    document.body.style.overflow = 'auto';
    mask.style.opacity = "0";
    nav.classList.remove('nav-active');
  }
})

window.addEventListener('scroll', function (e) {
  let winPos = window.pageYOffset;

  if (winPos > innerHeight / 3) {

  } else {
  }
})