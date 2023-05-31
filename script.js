const header = document.querySelector("header");

let lastY = 0;

window.addEventListener("scroll", function (event) {
  if (window.scrollY > lastY) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
  lastY = window.scrollY;
});
