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
          dots: true,
          arrows: false,
        }
      },],
});
//MOD CLASS
function toggleSlide(item) {
  $(item).each(function(i){
     $(this).on('click', function(e) {
       e.preventDefault();
       $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
       $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
     });
  });
};
toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');
//MODAL WINDOWS
$('[data-modal=consultation]').on('click', function() {
  $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
  $('.overlay, #consultation, #thanks, #order ').fadeOut('slow');
});
// $('.button_mini').on('click', function() {
//   $('.overlay, #order').fadeIn('slow');
// });
$('.button_mini').each(function(i) {
  $(this).on('click', function() {
    $('#order .modal__description').text($('.catalog-item__subtitle').eq(i).text());
    $('.overlay, #order').fadeIn('slow');
  });
});
function valideForms(form) {
  $(form).validate({
    rules: {
     name: "required",
     email: {
       required: true,
       email: true
     }
   },
   messages: {
     name: "Пожалуйста, укажите свое имя",
     phone: "Пожалуйста, укажите свой номер телефона",
     email: {
       required: "Нам нужен ваш адрес электронной почты, <br> чтобы связаться с вами",
       email: "Ваш адрес электронной почты должен быть <br> в формате name@domain.com"
     }
   }
  });
};
valideForms('#first-form');
valideForms('#main-Form');
valideForms('#main-Order');
$('input[name=phone]').mask("+7 (999) 999-99-99");
// jQuery(function($){
//    $("#date").mask("99/99/9999");
//    $("#phone").mask("(999) 999-9999");
//    $("#tin").mask("99-9999999");
//    $("#ssn").mask("999-99-9999");
// });
 });
 //TABS
 $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});
document.querySelector('::marker').addEventListener('click', function () {
    marker.style.backgroundColor = grey;
 });
