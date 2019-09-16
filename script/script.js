// MOVING HERO TITTLE ON SCROLL
function setTranslate(xPos, yPos, el) {
  // el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  el.style.backgroundPosition = xPos + "px " + yPos + "px";
}

function scrollLoop() {
  let yScrollPosition = window.scrollY;
  if (yScrollPosition < 600) {
    setTranslate(
      0,
      yScrollPosition * -0.3,
      document.querySelector("#hero-parallax")
    );
  }
  setTranslate(
    0,
    yScrollPosition * -0.3 + 500,
    document.querySelector("#skills-parallax")
  );
  setTranslate(
    0,
    yScrollPosition * -0.3 + 800,
    document.querySelector("#projects-parallax")
  );
  setTranslate(
    0,
    yScrollPosition * -0.3 + 1300,
    document.querySelector("#contact-parallax")
  );
  requestAnimationFrame(scrollLoop);
}

Gator(window).on("scroll", scrollLoop);

// window.addEventListener("DOMContentLoaded", scrollLoop);

// setTranslate(0, yScrollPosition * -2, document.querySelector(".hero"));
