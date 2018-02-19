//lazy load
[].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
    img.removeAttribute('data-src');
  };
});

//carousel sliders
var swiper1 = new Swiper('.swiper1', {
      slidesPerView: 3,
      spaceBetween: 40,
      pagination: {
        el: '.swiper-pagination1',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1340: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        906: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      }
});

var swiper2 = new Swiper('.swiper2', {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination2',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});
