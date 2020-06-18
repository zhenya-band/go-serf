$(function () {
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        asNavFor: '.slider-dots',
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="arrow-left">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="arrow-right">',
    });

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
    });

});



// $('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav'
//   });
//   $('.slider-nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
//   });
      