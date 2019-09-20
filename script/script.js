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

// MOVING HERO TITTLE ON SCROLL

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "%, " + yPos + "%, 0)";
}

function scrollLoop() {
  let yScroll = window.scrollY;
  let vHeight = window.innerHeight;
  changeNav();
  setTranslate(yScroll * -0.1, yScroll * -0.1, document.querySelector("#hero"));
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

// setBckgPosition(0, yScroll * -2, document.querySelector(".hero"));
