const prlxDivs = [...document.querySelectorAll(".prlx__section")];
const nav = document.querySelector("#header-nav");
const hamburger = document.querySelector(".header__hamburger");
const logo = document.querySelector(".header__logo");

// * * * * * match media

let mql = window.matchMedia("(max-width: 960px)");
let mobileViewport = window.matchMedia("(max-width: 576px)");

const typeText = document.querySelector(".typing");
// const txt = [
//   "się uczyć   ",
//   "tworzyć   ",
//   "poznawać   ",
//   "się rozwijać   ",
//   "programować :)"
// ];
const txt = ["tworzyć", "się rozwijać", "programować :)"];
let typingActive = false;
let indexText = 0;
let indexLetter = -15;

const addLetter = () => {
  if (indexLetter >= 0) {
    typeText.textContent += txt[indexText][indexLetter];
  }
  indexLetter++;

  if (indexText === txt.length) {
    return setTimeout(() => {
      typeText.textContent = txt[2];
      indexText = 0;
      typingActive = false;
      // setTimeout(typing, 2000);
    }, 10);
  }
  if (indexLetter === txt[indexText].length) {
    return setTimeout(() => {
      indexText++;
      indexLetter = -15;
      addLetter();
      typeText.textContent = "";
    }, 500);
  }
  setTimeout(addLetter, 50);
};
function typing() {
  typeText.textContent = "";
  addLetter();
}

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
function showHamburger() {
  if (document.querySelector("#about").getBoundingClientRect().top < 10) {
    hamburger.style.display = "flex";
    // nav.style.visibility = "hidden";
  } else {
    hamburger.style.display = "none";
    // nav.style.visibility = "visible";
  }
}
function currentSection() {
  let navItems = [...document.querySelectorAll(".nav__item")];
  let navBtns = [...document.querySelectorAll(".hamburger__dot")];
  navItems.forEach(item => {
    let link = item.firstChild.getAttribute("name");
    let sectOffTop = document.querySelector("#" + link).offsetTop;
    let sectHeight = document.querySelector("#" + link).offsetHeight;
    let btn = document.querySelector(`div[name=${link}]`);

    if (
      sectOffTop < window.scrollY + window.innerHeight &&
      sectOffTop + sectHeight - 50 > window.scrollY
    ) {
      item.classList.add("nav__item-current");
      btn.classList.add("hamburger__dot-active");
    } else {
      item.classList.remove("nav__item-current");
      btn.classList.remove("hamburger__dot-active");
    }
  });
}

hamburger.addEventListener("click", () => {
  nav.classList.toggle("header__nav-mobile");
  hamburger.style.display = "none";
});

nav.addEventListener("click", () => {
  if (document.querySelector("#about").getBoundingClientRect().top < -10) {
    setTimeout(function() {
      nav.classList.toggle("header__nav-mobile");
      hamburger.style.display = "flex";
      nav.classList.add("header__nav-cleardot");
    }, 100);
  }
});

//  * * * * * MOVING HERO TITTLE ON SCROLL

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

function scrollLoop() {
  let yScroll = window.scrollY;
  let vHeight = window.innerHeight;
  mobileViewport.matches ? showHamburger() : changeNav();
  currentSection();
  if (
    document.querySelector("#about").getBoundingClientRect().top > 0 &&
    mql.matches == false
  ) {
    setTranslate(yScroll * -1, yScroll, document.querySelector("#hero"));
  }

  // parallax function
  if (!mobileViewport.matches) {
    for (let i = 0; i < prlxDivs.length; i++) {
      let divOffTop = prlxDivs[i].offsetTop;
      let divHeight = prlxDivs[i].offsetHeight;
      if (divOffTop < yScroll + vHeight && divOffTop + divHeight > yScroll) {
        prlxDivs[i].style.backgroundPositionY =
          Math.round(((divOffTop - yScroll) * 3) / 8) + "px";
      }
    }
  }
  let aboutOffTop = document.querySelector("#about").offsetTop;
  let aboutHeight = document.querySelector("#about").offsetHeight;
  if (
    aboutOffTop / 2 < window.scrollY &&
    aboutOffTop + aboutHeight > window.scrollY &&
    !typingActive
  ) {
    typingActive = true;
    setTimeout(typing, 2000);
    // typing();
  }
}
Gator(window).on("resize", () => {
  if (mobileViewport.matches) nav.classList.remove("header__nav-onscroll");
});
Gator(window).on("scroll", scrollLoop);

//  * * * * * SCROLL

ScrollReveal().reveal(".about__caption ", {
  reset: true,
  delay: 300,
  duration: 800,
  origin: "bottom",
  distance: "200px"
  // scale: 0.5,
  // origin: "bottom",
  // distance: "0px"
});
ScrollReveal().reveal(".prlx__title", {
  reset: true,
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

ScrollReveal().reveal(".skills__item, .projects__btn, .about__photo img", {
  reset: true,

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

// mobile imgs - bg
