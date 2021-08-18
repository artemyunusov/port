$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    cssEase: 'ease-out'
  });
  
  $('.slider__low').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    cssEase: 'ease-out'
  });
});

  // slidesToShow: 3,
  // slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,