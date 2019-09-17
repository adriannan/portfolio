// MOVING HERO TITTLE ON SCROLL
function setBckgPosition(xPos, yPos, el) {
  el.style.backgroundPosition = xPos + "px " + yPos + "px";
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "%, " + yPos + "%, 0)";
}

function scrollLoop() {
  let yScrollPosition = window.scrollY;
  if (yScrollPosition < 600) {
    setBckgPosition(
      0,
      yScrollPosition * -0.3,
      document.querySelector("#hero-parallax")
    );
  }
  setTranslate(
    yScrollPosition * -0.1,
    yScrollPosition * -0.1,
    document.querySelector("#hero")
    // document.querySelector(".hero__title")
  );
  setBckgPosition(
    0,
    yScrollPosition * -0.3 + 400,
    document.querySelector("#skills-parallax")
  );
  setBckgPosition(
    0,
    yScrollPosition * -0.3 + 800,
    document.querySelector("#projects-parallax")
  );
  setBckgPosition(
    0,
    yScrollPosition * -0.3 + 1300,
    document.querySelector("#contact-parallax")
  );
  requestAnimationFrame(scrollLoop);
}

Gator(window).on("scroll", scrollLoop);

// window.addEventListener("DOMContentLoaded", scrollLoop);

// setBckgPosition(0, yScrollPosition * -2, document.querySelector(".hero"));
