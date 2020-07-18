document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);

// HIDDEN CONTENT

function verify() {
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

// MODAL: https://codepen.io/JoshNezi/pen/GNawyK

var modal = document.getElementsByClassName("modal");

var cta = document.getElementsByClassName("cta");
cta[0].onclick = function(){
    modal[0].style.display = "block";
}
cta[1].onclick = function(){
    modal[1].style.display = "block";
}
cta[2].onclick = function(){
    modal[2].style.display = "block";
}



var span = document.getElementsByClassName("close");
span[0].onclick = function() {
    modal[0].style.display = "none";
}
span[1].onclick = function() {
    modal[1].style.display = "none";
}
span[2].onclick = function() {
    modal[2].style.display = "none";
}

}
