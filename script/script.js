const prlxDivs = [...document.querySelectorAll(".prlx__section")];

const nav = document.querySelector("#header-nav");
const logo = document.querySelector(".header__logo");

// * * * * * match media

let mql = window.matchMedia("(max-width: 960px)");
var mobileViewport = window.matchMedia("screen and (max-width: 480px)");
// if (mql.matches) document.querySelector(".hero__title").innerText = mql.media;
// var mql = window.matchMedia("(max-width: 600px)");

function changeNav() {
  if (
    document.querySelector("#hero").offsetHeight / 1.55 >
    document.querySelector("#about").getBoundingClientRect().top
  ) {
    logo.style.visibility = "visible";
    nav.classList.add("header__nav-onscroll");
  } else {
    logo.style.visibility = "hidden";
    nav.classList.remove("header__nav-onscroll");
  }
}

//  * * * * * MOVING HERO TITTLE ON SCROLL

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

function scrollLoop() {
  let yScroll = window.scrollY;
  let vHeight = window.innerHeight;
  changeNav();
  // function screenTest(e) {
  //   if (e.matches) {
  //     /* the viewport is 600 pixels wide or less */
  //     setTranslate(yScroll * -1, yScroll, document.querySelector("#hero"));
  //   }
  // }

  // mql.addListener(screenTest);
  if (
    document.querySelector("#about").getBoundingClientRect().top > 0 &&
    mql.matches == false
  ) {
    setTranslate(yScroll * -1, yScroll, document.querySelector("#hero"));
  }

  // parallax function

  for (let i = 0; i < prlxDivs.length; i++) {
    let divOffTop = prlxDivs[i].offsetTop;
    let divHeight = prlxDivs[i].offsetHeight;
    if (divOffTop < yScroll + vHeight && divOffTop + divHeight > yScroll) {
      prlxDivs[i].style.backgroundPositionY =
        Math.round(((divOffTop - yScroll) * 3) / 8) + "px";
    }
  }
}

Gator(window).on("scroll", scrollLoop);

// window.addEventListener("DOMContentLoaded", scrollLoop);

//  * * * * * MORE INFORMATION ABOUT

document.getElementById("about-button").addEventListener("click", function() {
  document
    .getElementById("about-more")
    .classList.toggle("about__caption-visible");
  if (this.innerHTML == "Więcej") {
    this.innerHTML = " &and;	 ";
    this.style.fontStyle = "normal";
  } else {
    this.innerHTML = "Więcej";
  }
});

//  * * * * * SCROLL

ScrollReveal().reveal(".about__caption", {
  delay: 300,
  origin: "bottom",
  distance: "200px"
});
ScrollReveal().reveal(".prlx__title", {
  // reset: true,
  // delay: 300,
  duration: 800,
  scale: 0.5,
  origin: "bottom",
  distance: "0px"
});

ScrollReveal().reveal(".contact__item-tit, .contact__item-data, .about__btn", {
  delay: 300,
  origin: "bottom",
  distance: "200px",
  duration: 800
});
ScrollReveal().reveal(".contact__item-link i", {
  delay: 300,
  origin: "top",
  distance: "200px",
  duration: 800
});

ScrollReveal().reveal(".skills__item, .projects__btn", {
  delay: 300,
  origin: "top",
  scale: 0.5,
  distance: "0px",
  duration: 800
});

ScrollReveal().reveal(".projects__content", {
  delay: 500,
  duration: 800,
  origin: "bottom",
  distance: "200px"
});
