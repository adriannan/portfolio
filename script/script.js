// MOVING HERO TITTLE ON SCROLL
function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

function scrollLoop() {
  let yScrollPosition = window.scrollY;
  if (yScrollPosition < 600) {
    // setTranslate(yScrollPosition * -8, 0, document.querySelector("#hero__h2"));
    // setTranslate(yScrollPosition * 10, 0, document.querySelector("#hero__h3"));
    setTranslate(
      0,
      yScrollPosition * -0.3,
      document.querySelector("#hero-parallax")
    );
    setTranslate(0, yScrollPosition * 0.5, document.querySelector(".hero"));
  }
  setTranslate(
    0,
    yScrollPosition * -0.3,
    document.querySelector("#skills-parallax")
  );
  requestAnimationFrame(scrollLoop);
}

window.addEventListener("DOMContentLoaded", scrollLoop);
