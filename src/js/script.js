// SLICK !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
$(document).ready(function(){
  $('.carousel__inner').slick({
  // infinite: true,
  // slidesToShow: 1,
  // slidesToScroll: 1,
  // dots: true,
  // infinite: true,
  speed: 1200,
  // slidesToShow: 1,
  adaptiveHeight: true,
  // arrows: false, for example
  prevArrow: '<button type="button" class="slick-prev"><img src="icon/chevron-left-solid.png" alt="chevron-left"/></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="icon/chevron-right-solid.png" alt="chevron-right" /></button>',
  responsive: [
      {
        breakpoint: 992,
        settings: {
          // slidesToShow: 3,
          // slidesToScroll: 3,
          // infinite: true,
          dots: true,
          arrows: false,
        }
      },],
});
});
//TINY SLIDER !!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false,
//     controls: false,
//     nav: false,
//     speed: 1200,
//
//   });
//   document.querySelector('.prev').onclick = function () {
//   slider.goTo('prev');
// };
// document.querySelector('.next').onclick = function () {
// slider.goTo('next');
// };
// document.querySelector('.prev').addEventListener('click', function () {
// slider.goTo('prev');
// });
// document.querySelector('.next').addEventListener('click', function () {
// slider.goTo('next');
// });
