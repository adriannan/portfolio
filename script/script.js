const prlxDivs = [...document.querySelectorAll(".prlx__section")];

const nav = document.querySelector("#header-nav");
const navRight = document.querySelector(".header__nav-right");
const logo = document.querySelector(".header__logo");
const aboutSec = document.querySelector("#about");

function changeNav() {
  if (document.querySelector("#hero").offsetHeight / 2 < window.scrollY) {
    // if (aboutSec.getBoundingClientRect().top < window.innerHeight / 2 + 110) {
    logo.style.visibility = "visible";
    nav.classList.add("header__nav-left");
    nav.classList.remove("header__nav-right");
  } else {
    logo.style.visibility = "hidden";
    nav.classList.remove("header__nav-left");
    nav.classList.add("header__nav-right");
  }
}

//  * * * * * MOVING HERO TITTLE ON SCROLL

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "%, " + yPos + "%, 0)";
  // el.style.transition = "transform 0.2s";
}

function scrollLoop() {
  let yScroll = window.scrollY;
  let vHeight = window.innerHeight;
  changeNav();
  setTranslate(yScroll * -1, yScroll * -1, document.querySelector("#hero"));
  // parallax function

  for (let i = 0; i < prlxDivs.length; i++) {
    let divOffTop = prlxDivs[i].offsetTop;
    let divHeight = prlxDivs[i].offsetHeight;
    if (divOffTop < yScroll + vHeight && divOffTop + divHeight > yScroll) {
      prlxDivs[i].style.backgroundPosition =
        "0px " + Math.round(((divOffTop - yScroll) * 3) / 8) + "px";
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

// ScrollReveal().reveal(".about__caption p", {
//   // delay: 300,
//   origin: "bottom",
//   distance: "200px"
// });

// ScrollReveal().reveal("#hero", {
//   delay: 800,
//   duration: 800,
//   origin: "left",
//   distance: "1500px",
//   opacity: 1
// });
// ScrollReveal().reveal(".hero__title", {
//   delay: 1000,
//   duration: 800,
//   origin: "left",
//   distance: "500px"
// });

ScrollReveal().reveal(".about__caption", {
  delay: 300,
  origin: "bottom",
  distance: "200px"
});
// ScrollReveal().reveal(".prlx__title", {
//   reset: true,
//   delay: 300,
//   scale: 0.5,
//   origin: "bottom",
//   distance: "0px"
// });

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
  // reset: true,
  origin: "bottom",
  distance: "200px"
});
