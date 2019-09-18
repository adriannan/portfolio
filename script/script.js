const navItem = [...document.querySelectorAll(".nav__item")];
const nav = document.querySelector("#header-nav");
const logo = document.querySelector(".header__logo");
const aboutSec = document.querySelector("#about");

function changeNav() {
  if (aboutSec.getBoundingClientRect().top < window.innerHeight / 2) {
    logo.style.visibility = "visible";
    nav.classList.add("header__nav-left");
    nav.classList.remove("header__nav-right");
    navItem.forEach(item => {
      item.classList.add("nav__item-left");
      item.classList.remove("nav__item-right");
    });
  } else {
    logo.style.visibility = "hidden";
    nav.classList.remove("header__nav-left");
    nav.classList.add("header__nav-right");
    navItem.forEach(item => {
      item.classList.remove("nav__item-left");
      item.classList.add("nav__item-right");
    });
  }
}

// MOVING HERO TITTLE ON SCROLL
function setBckgPosition(xPos, yPos, el) {
  el.style.backgroundPosition = xPos + "px " + yPos + "px";
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "%, " + yPos + "%, 0)";
}

function scrollLoop() {
  let yScrollPosition = window.scrollY;
  if (yScrollPosition < 1000) {
    changeNav();
    setBckgPosition(
      0,
      yScrollPosition * -0.3,
      document.querySelector("#hero-parallax")
    );
    setTranslate(
      yScrollPosition * -0.1,
      yScrollPosition * -0.1,
      document.querySelector("#hero")
      // document.querySelector(".hero__title")
    );
  } else {
    setBckgPosition(
      0,
      yScrollPosition * -0.3 + 300,
      document.querySelector("#skills-parallax")
    );
    setBckgPosition(
      0,
      yScrollPosition * -0.3 + 900,
      document.querySelector("#projects-parallax")
    );
    setBckgPosition(
      0,
      yScrollPosition * -0.3 + 1300,
      document.querySelector("#contact-parallax")
    );
  }
  requestAnimationFrame(scrollLoop);
}

Gator(window).on("scroll", scrollLoop);

// window.addEventListener("DOMContentLoaded", scrollLoop);

// setBckgPosition(0, yScrollPosition * -2, document.querySelector(".hero"));
