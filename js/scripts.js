document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);

function theDomHasLoaded(e) {

  //lazy load
  [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
      img.setAttribute('src', img.getAttribute('data-src'));
      img.onload = function () {
          img.removeAttribute('data-src');
      };
  });


  window.onscroll = function() {myFunction()};

  var heading = document.getElementById("myHeader");
  var sticky = heading.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      heading.classList.add("sticky");
    } else {
      heading.classList.remove("sticky");
    }
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  document.addEventListener('readystatechange', function () {

    if ( document.readyState === 'complete' ) {
      var textArray = ["visual communication.","products for good.", "emerging technologies.", "storytelling with data."];
      var typeWriterElement = document.getElementById('typewriter');

      function delWriter(text, i, cb) {
          if (i >= 0 ) {
              typeWriterElement.innerHTML = text.substring(0, i--);
              // generate a random Number to emulate backspace hitting.
              var rndBack = 10 + Math.random() * 100;
              setTimeout(function() {
                  delWriter(text, i, cb);
              },rndBack);
          } else if (typeof cb == 'function') {
              setTimeout(cb,100);
          }
      };

      function typeWriter(text, i, cb) {
          if ( i < text.length ) {
              typeWriterElement.innerHTML = text.substring(0, i++);
              // generate a random Number to emulate Typing on the Keyboard.
              var randomTyping = 110 - Math.random() * 100
              setTimeout( function () {
                  typeWriter(text, i++, cb)
              },randomTyping);
          } else if (i === text.length) {
              setTimeout( function () {
                  delWriter(text, i, cb)
              },1000);
          }
      };

      function StartWriter(i) {
          if (typeof textArray[i] == "undefined") {
              setTimeout( function () {
                  StartWriter(0)
              },1000);
          } else if(i < textArray[i].length) {
              typeWriter(textArray[i], 0, function () {
                  StartWriter(i+1);
              })
          }

      }

      setTimeout( function () {
          StartWriter(0);
      },1000);

    }
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
      calculateHeight: true,
      pagination: {
          el: '.swiper-pagination2',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  });

}

ScrollReveal().reveal('.text');
ScrollReveal().reveal('.feature');
