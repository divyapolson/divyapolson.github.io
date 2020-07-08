document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);

// HIDDEN CONTENT

function verify() {
  // I created the function, which is called onclick on the button
  if (document.getElementById("password").value === "Target2018") {
    document.getElementById("HIDDENDIV").classList.remove("hidden"); // Using class instead of inline CSS
    document.getElementById("credentials").classList.add("hidden"); // Hide the div containing the credentials
  } else {
    alert("Password is invalid");
    password.setSelectionRange(0, password.value.length);
  }
  return false;
}

function theDomHasLoaded(e) {
  //lazy load
  [].forEach.call(document.querySelectorAll("img[data-src]"), function(img) {
    img.setAttribute("src", img.getAttribute("data-src"));
    img.onload = function() {
      img.removeAttribute("data-src");
    };
  });

  // sticky header
  // credit: https://codepen.io/ducblog/pen/oqQaqQ

  var lastKnownScrollY = 0;
  var currentScrollY = 0;
  var ticking = false;
  var idOfHeader = "header";
  var eleHeader = null;
  const classes = {
    pinned: "header-pin",
    unpinned: "header-unpin"
  };
  function onScroll() {
    currentScrollY = window.pageYOffset;
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
    requestTick();
  }
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(update);
    }
    ticking = true;
  }
  function update() {
    if (currentScrollY < lastKnownScrollY) {
      pin();
    } else if (currentScrollY > lastKnownScrollY) {
      unpin();
    }
    lastKnownScrollY = currentScrollY;
    ticking = false;
  }
  function pin() {
    if (eleHeader.classList.contains(classes.unpinned)) {
      eleHeader.classList.remove(classes.unpinned);
      eleHeader.classList.add(classes.pinned);
    }
  }
  function unpin() {
    if (
      eleHeader.classList.contains(classes.pinned) ||
      !eleHeader.classList.contains(classes.unpinned)
    ) {
      eleHeader.classList.remove(classes.pinned);
      eleHeader.classList.add(classes.unpinned);
    }
  }
  window.onload = function() {
    eleHeader = document.getElementById(idOfHeader);
    document.addEventListener("scroll", onScroll, false);
  };

  //carousel sliders
  var swiper1 = new Swiper(".swiper1", {
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
      el: ".swiper-pagination1",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      1340: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      906: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    }
  });

  var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 1,
    calculateHeight: true,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
}
